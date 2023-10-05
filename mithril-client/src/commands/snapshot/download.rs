use anyhow::Context;
use clap::Parser;
use config::{builder::DefaultState, Config, ConfigBuilder};
use std::{path::PathBuf, sync::Arc};

use mithril_common::{messages::FromMessageAdapter, StdResult};

use crate::{
    dependencies::DependenciesBuilder, utils::ProgressOutputType, FromSnapshotMessageAdapter,
};

/// Clap command to download the snapshot and verify the certificate.
#[derive(Parser, Debug, Clone)]
pub struct SnapshotDownloadCommand {
    /// Enable JSON output.
    #[clap(long)]
    json: bool,

    /// Digest of the snapshot to download. Use the `list` command to get that information.
    ///
    /// If `latest` is specified as digest, the command will return the latest snapshot.
    digest: String,

    /// Directory where the snapshot will be downloaded. By default, a
    /// subdirectory will be created in this directory to extract and verify the
    /// certificate.
    #[clap(long, default_value = ".")]
    download_dir: PathBuf,
}

impl SnapshotDownloadCommand {
    /// Command execution
    pub async fn execute(&self, config_builder: ConfigBuilder<DefaultState>) -> StdResult<()> {
        let config_builder = config_builder
            .set_default("genesis_verification_key", "")
            .unwrap();
        let config: Config = config_builder.build()?;
        let config = Arc::new(config);
        let mut dependencies_builder = DependenciesBuilder::new(config.clone());
        let snapshot_service = dependencies_builder
            .get_snapshot_service()
            .await
            .with_context(|| "Dependencies Builder can not get Snapshot Service")?;
        let snapshot_entity = FromSnapshotMessageAdapter::adapt(
            snapshot_service.show(&self.digest).await.with_context(|| {
                format!(
                    "Snapshot Service can not get the snapshot for digest: '{}'",
                    self.digest
                )
            })?,
        );
        let progress_output_type = if self.json {
            ProgressOutputType::JsonReporter
        } else {
            ProgressOutputType::TTY
        };
        let filepath = snapshot_service
            .download(
                &snapshot_entity,
                &self.download_dir,
                &config
                    .get_string("genesis_verification_key")
                    .with_context(|| {
                        format!(
                            "Snapshot Service can not download and verify the snapshot for digest: '{}'",
                            self.digest
                        )
                    })?,
                progress_output_type,
            )
            .await?;

        if self.json {
            println!(
                r#"{{"db_directory": "{}"}}"#,
                filepath.canonicalize()?.display()
            );
        } else {
            println!(
                r###"Snapshot '{}' has been unpacked and successfully checked against Mithril multi-signature contained in the certificate.
                
Files in the directory '{}' can be used to run a Cardano node with version >= {}.

If you are using Cardano Docker image, you can restore a Cardano Node with:

docker run -v cardano-node-ipc:/ipc -v cardano-node-data:/data --mount type=bind,source="{}",target=/data/db/ -e NETWORK={} inputoutput/cardano-node:8.1.2

"###,
                &self.digest,
                filepath.display(),
                snapshot_entity.artifact.cardano_node_version,
                filepath.display(),
                snapshot_entity.artifact.beacon.network,
            );
        }

        Ok(())
    }
}