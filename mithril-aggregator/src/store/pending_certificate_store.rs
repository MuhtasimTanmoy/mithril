use anyhow::{anyhow, Context};
use mithril_common::StdResult;
use tokio::sync::RwLock;

use mithril_common::entities::CertificatePending;
use mithril_persistence::store::adapter::StoreAdapter;

type Adapter = Box<dyn StoreAdapter<Key = String, Record = CertificatePending>>;

const KEY: &str = "certificate_pending";

/// Store for [CertificatePending].
pub struct CertificatePendingStore {
    adapter: RwLock<Adapter>,
}

impl CertificatePendingStore {
    /// Create a new instance.
    pub fn new(adapter: Adapter) -> Self {
        Self {
            adapter: RwLock::new(adapter),
        }
    }

    /// Fetch the current [CertificatePending] if any.
    pub async fn get(&self) -> StdResult<Option<CertificatePending>> {
        self.adapter
            .read()
            .await
            .get_record(&KEY.to_string())
            .await
            .with_context(|| "Certificate pending store: could not GET store.".to_string())
    }

    /// Save the given [CertificatePending].
    pub async fn save(&self, certificate: CertificatePending) -> StdResult<()> {
        self
            .adapter
            .write()
            .await
            .store_record(&KEY.to_string(), &certificate)
            .await
            .with_context(|| format!("Certificate pending store: error while saving pending certificate for epoch '{}'.", certificate.epoch))
    }

    /// Remove and return the current [CertificatePending] if any.
    pub async fn remove(&self) -> StdResult<Option<CertificatePending>> {
        self.adapter
            .write()
            .await
            .remove(&KEY.to_string())
            .await
            .map_err(|e| anyhow!(e))
            .with_context(|| {
                format!(
                    "Could not delete certificate pending (key = '{}') from store.",
                    &KEY
                )
            })
    }
}

#[cfg(test)]
mod test {
    use super::*;

    use mithril_common::entities::{Epoch, SignedEntityType};
    use mithril_common::test_utils::fake_data;
    use mithril_persistence::store::adapter::DumbStoreAdapter;

    async fn get_certificate_pending_store(is_populated: bool) -> CertificatePendingStore {
        let mut adapter: DumbStoreAdapter<String, CertificatePending> = DumbStoreAdapter::new();

        if is_populated {
            let certificate_pending = CertificatePending::new(
                Epoch(0),
                SignedEntityType::dummy(),
                fake_data::protocol_parameters(),
                fake_data::protocol_parameters(),
                fake_data::signers(4),
                fake_data::signers(5),
            );
            adapter
                .store_record(&KEY.to_string(), &certificate_pending)
                .await
                .unwrap();
        }
        CertificatePendingStore::new(Box::new(adapter))
    }

    #[tokio::test]
    async fn get_certificate_pending_with_existing_certificate() {
        let store = get_certificate_pending_store(true).await;
        let result = store.get().await.unwrap();

        assert!(result.is_some());
    }

    #[tokio::test]
    async fn get_certificate_pending_with_no_existing_certificate() {
        let store = get_certificate_pending_store(false).await;
        let result = store.get().await.unwrap();

        assert!(result.is_none());
    }

    #[tokio::test]
    async fn save_certificate_pending_once() {
        let store = get_certificate_pending_store(false).await;
        let signed_entity_type = SignedEntityType::dummy();
        let certificate_pending = CertificatePending::new(
            Epoch(2),
            signed_entity_type,
            fake_data::protocol_parameters(),
            fake_data::protocol_parameters(),
            fake_data::signers(1),
            fake_data::signers(2),
        );

        assert!(store.save(certificate_pending).await.is_ok());
        assert!(store.get().await.unwrap().is_some());
    }

    #[tokio::test]
    async fn update_certificate_pending() {
        let store = get_certificate_pending_store(true).await;
        let certificate_pending = store.get().await.unwrap().unwrap();

        assert!(store.save(certificate_pending).await.is_ok());
    }

    #[tokio::test]
    async fn remove_certificate_pending() {
        let store = get_certificate_pending_store(true).await;
        let epoch = Epoch(0);
        let certificate_pending = store.remove().await.unwrap().unwrap();

        assert_eq!(epoch, certificate_pending.epoch);
        assert!(store.get().await.unwrap().is_none());
    }
}
