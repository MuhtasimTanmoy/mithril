use async_trait::async_trait;
use slog_scope::info;

use crate::snapshot_stores::SnapshotStoreError;
use crate::SnapshotStore;

use mithril_common::entities::Snapshot;
use mithril_common::store::adapter::StoreAdapter;

type Adapter = Box<dyn StoreAdapter<Key = String, Record = Snapshot>>;

pub struct LocalSnapshotStore {
    adapter: Adapter,
    list_snapshots_max_items: usize,
}

impl LocalSnapshotStore {
    /// SnapshotStoreHTTPClient factory
    pub fn new(adapter: Adapter, list_snapshots_max_items: usize) -> Self {
        Self {
            list_snapshots_max_items,
            adapter,
        }
    }
}

#[async_trait]
impl SnapshotStore for LocalSnapshotStore {
    async fn list_snapshots(&self) -> Result<Vec<Snapshot>, SnapshotStoreError> {
        let vars = self
            .adapter
            .get_last_n_records(self.list_snapshots_max_items)
            .await
            .map_err(|e| SnapshotStoreError::Store(e.to_string()))?;
        let result = vars.into_iter().map(|(_, y)| y).collect();

        Ok(result)
    }

    async fn get_snapshot_details(
        &self,
        digest: String,
    ) -> Result<Option<Snapshot>, SnapshotStoreError> {
        Ok(self
            .adapter
            .get_record(&digest.to_string())
            .await
            .map_err(|e| SnapshotStoreError::Store(e.to_string()))?)
    }

    async fn add_snapshot(&mut self, snapshot: Snapshot) -> Result<(), SnapshotStoreError> {
        info!(
            "Adding snapshot: {}",
            serde_json::to_string(&snapshot).unwrap()
        );

        Ok(self
            .adapter
            .store_record(&snapshot.digest, &snapshot)
            .await
            .map_err(|e| SnapshotStoreError::Store(e.to_string()))?)
    }
}

#[cfg(test)]
mod tests {
    use super::LocalSnapshotStore;
    use crate::SnapshotStore;

    use mithril_common::entities::Snapshot;
    use mithril_common::store::adapter::DumbStoreAdapter;

    #[tokio::test]
    async fn can_list_added_snapshot() {
        let snapshot = Snapshot {
            digest: "abc".to_string(),
            certificate_hash: "abc".to_string(),
            size: 0,
            created_at: "abc".to_string(),
            locations: vec!["abc".to_string()],
        };
        let list_snapshots_max_items = 5;
        let adapter: DumbStoreAdapter<String, Snapshot> = DumbStoreAdapter::new();
        let mut store = LocalSnapshotStore::new(Box::new(adapter), list_snapshots_max_items);

        store
            .add_snapshot(snapshot.clone())
            .await
            .expect("can_list_added_snapshot add_snapshot error");
        assert_eq!(store.list_snapshots().await, Ok(vec![snapshot]));
    }

    #[tokio::test]
    async fn can_get_added_snapshot_details() {
        let snapshot = Snapshot {
            digest: "abc".to_string(),
            certificate_hash: "abc".to_string(),
            size: 0,
            created_at: "abc".to_string(),
            locations: vec!["abc".to_string()],
        };
        let list_snapshots_max_items = 5;
        let adapter: DumbStoreAdapter<String, Snapshot> = DumbStoreAdapter::new();
        let mut store = LocalSnapshotStore::new(Box::new(adapter), list_snapshots_max_items);

        store
            .add_snapshot(snapshot.clone())
            .await
            .expect("can_get_added_snapshot_details add_snapshot error");
        assert_eq!(
            store.get_snapshot_details(snapshot.digest.clone()).await,
            Ok(Some(snapshot))
        );
    }
}