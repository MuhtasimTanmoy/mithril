use std::sync::Arc;

use async_trait::async_trait;
use chrono::NaiveDateTime;
use sqlite::{Connection, Value};

use mithril_common::{
    entities::{Epoch, PartyId, Stake, StakeDistribution},
    sqlite::{
        EntityCursor, HydrationError, Projection, Provider, SourceAlias, SqLiteEntity,
        WhereCondition,
    },
    store::{adapter::AdapterError, StakeStorer, StoreError},
};

use mithril_common::StdError;
use tokio::sync::Mutex;

/// Delete stake pools for Epoch older than this.
const STAKE_POOL_PRUNE_EPOCH_THRESHOLD: Epoch = Epoch(2);

/// Stake pool as read from Chain.
#[derive(Debug, PartialEq)]
pub struct StakePool {
    /// Pool Id
    stake_pool_id: PartyId,

    /// Total stake of this pool.
    stake: u64,

    /// Epoch at which this pool is valid.
    epoch: Epoch,

    /// DateTime of the record creation.
    created_at: NaiveDateTime,
}

impl SqLiteEntity for StakePool {
    fn hydrate(row: sqlite::Row) -> Result<Self, HydrationError>
    where
        Self: Sized,
    {
        let epoch_int = row.get::<i64, _>(2);
        let datetime = &row.get::<String, _>(3);
        let stake = row.get::<i64, _>(1);

        let stake_pool = Self {
            stake_pool_id: row.get::<String, _>(0),
            stake: u64::try_from(stake).map_err(|e| {
                HydrationError::InconsistentType(format!(
                    "Could not cast the stake from internal db I64 → U64. Error: '{e}'."
                ))
            })?,
            epoch: Epoch(epoch_int.try_into().map_err(|e| {
                HydrationError::InvalidData(format!(
                    "Could not cast i64 ({epoch_int}) to u64. Error: '{e}'"
                ))
            })?),
            created_at: NaiveDateTime::parse_from_str(datetime, "%Y-%m-%d %H:%M:%S").map_err(
                |e| {
                    HydrationError::InvalidData(format!(
                        "Could not turn string '{datetime}' to NaiveDateTime. Error: {e}"
                    ))
                },
            )?,
        };

        Ok(stake_pool)
    }

    fn get_projection() -> Projection {
        let mut projection = Projection::default();
        projection.add_field("stake_pool_id", "{:stake_pool:}.stake_pool_id", "text");
        projection.add_field("stake", "{:stake_pool:}.stake", "integer");
        projection.add_field("epoch", "{:stake_pool:}.epoch", "integer");
        projection.add_field("created_at", "{:stake_pool:}.created_at", "text");

        projection
    }
}

/// Simple [StakePool] provider.
pub struct StakePoolProvider<'client> {
    client: &'client Connection,
}

impl<'client> StakePoolProvider<'client> {
    /// Create a new provider
    pub fn new(client: &'client Connection) -> Self {
        Self { client }
    }

    fn condition_by_epoch(&self, epoch: &Epoch) -> Result<WhereCondition, StdError> {
        let epoch: i64 = i64::try_from(epoch.0)?;

        Ok(WhereCondition::new(
            "epoch = ?*",
            vec![Value::Integer(epoch)],
        ))
    }

    /// Get StakePools for a given Epoch for given pool_ids.
    pub fn get_by_epoch(&self, epoch: &Epoch) -> Result<EntityCursor<StakePool>, StdError> {
        let filters = self.condition_by_epoch(epoch)?;
        let stake_pool = self.find(filters)?;

        Ok(stake_pool)
    }
}

impl<'client> Provider<'client> for StakePoolProvider<'client> {
    type Entity = StakePool;

    fn get_connection(&'client self) -> &'client Connection {
        self.client
    }

    fn get_definition(&self, condition: &str) -> String {
        let aliases = SourceAlias::new(&[("{:stake_pool:}", "sp")]);
        let projection = Self::Entity::get_projection().expand(aliases);

        format!("select {projection} from stake_pool as sp where {condition} order by epoch asc, stake desc, stake_pool_id asc")
    }
}

/// Query to update the stake distribution
pub struct UpdateStakePoolProvider<'conn> {
    connection: &'conn Connection,
}

impl<'conn> UpdateStakePoolProvider<'conn> {
    /// Create a new instance
    pub fn new(connection: &'conn Connection) -> Self {
        Self { connection }
    }

    fn get_update_condition(
        &self,
        stake_pool_id: &str,
        epoch: Epoch,
        stake: Stake,
    ) -> WhereCondition {
        let epoch = i64::try_from(epoch.0).unwrap();
        let stake = i64::try_from(stake).unwrap();

        WhereCondition::new(
            "(stake_pool_id, epoch, stake) values (?1, ?2, ?3)",
            vec![
                Value::String(stake_pool_id.to_owned()),
                Value::Integer(epoch),
                Value::Integer(stake),
            ],
        )
    }

    fn persist(
        &self,
        stake_pool_id: &str,
        epoch: Epoch,
        stake: Stake,
    ) -> Result<StakePool, StdError> {
        let filters = self.get_update_condition(stake_pool_id, epoch, stake);

        let entity = self.find(filters)?
            .next()
            .unwrap_or_else(|| panic!("No entity returned by the persister, stake_pool_id = {stake_pool_id} for epoch {epoch:?}"));

        Ok(entity)
    }
}

impl<'conn> Provider<'conn> for UpdateStakePoolProvider<'conn> {
    type Entity = StakePool;

    fn get_connection(&'conn self) -> &'conn Connection {
        self.connection
    }

    fn get_definition(&self, condition: &str) -> String {
        // it is important to alias the fields with the same name as the table
        // since the table cannot be aliased in a RETURNING statement in SQLite.
        let projection = Self::Entity::get_projection()
            .expand(SourceAlias::new(&[("{:stake_pool:}", "stake_pool")]));

        format!("insert or replace into stake_pool {condition} returning {projection}")
    }
}

/// Provider to remove old data from the stake_pool table
pub struct DeleteStakePoolProvider<'conn> {
    connection: &'conn Connection,
}

impl<'conn> Provider<'conn> for DeleteStakePoolProvider<'conn> {
    type Entity = StakePool;

    fn get_connection(&'conn self) -> &'conn Connection {
        self.connection
    }

    fn get_definition(&self, condition: &str) -> String {
        // it is important to alias the fields with the same name as the table
        // since the table cannot be aliased in a RETURNING statement in SQLite.
        let projection = Self::Entity::get_projection()
            .expand(SourceAlias::new(&[("{:stake_pool:}", "stake_pool")]));

        format!("delete from stake_pool where {condition} returning {projection}")
    }
}

impl<'conn> DeleteStakePoolProvider<'conn> {
    /// Create a new instance
    pub fn new(connection: &'conn Connection) -> Self {
        Self { connection }
    }

    /// Create the SQL condition to prune data older than the given Epoch.
    fn get_prune_condition(&self, epoch_threshold: Epoch) -> WhereCondition {
        let epoch_value = Value::Integer(i64::try_from(epoch_threshold.0).unwrap());

        WhereCondition::new("epoch < ?*", vec![epoch_value])
    }

    /// Prune the stake pools data older than the given epoch.
    pub fn prune(&self, epoch_threshold: Epoch) -> Result<EntityCursor<StakePool>, StdError> {
        let filters = self.get_prune_condition(epoch_threshold);

        self.find(filters)
    }
}
/// Service to deal with stake pools (read & write).
pub struct StakePoolStore {
    connection: Arc<Mutex<Connection>>,
}

impl StakePoolStore {
    /// Create a new StakePool service
    pub fn new(connection: Arc<Mutex<Connection>>) -> Self {
        Self { connection }
    }
}

#[async_trait]
impl StakeStorer for StakePoolStore {
    async fn save_stakes(
        &self,
        epoch: Epoch,
        stakes: StakeDistribution,
    ) -> Result<Option<StakeDistribution>, StoreError> {
        let connection = &*self.connection.lock().await;
        let provider = UpdateStakePoolProvider::new(connection);
        let mut new_stakes = StakeDistribution::new();
        connection
            .execute("begin transaction")
            .map_err(|e| AdapterError::QueryError(e.into()))?;

        for (pool_id, stake) in stakes {
            let stake_pool = provider
                .persist(&pool_id, epoch, stake)
                .map_err(|e| AdapterError::GeneralError(format!("{e}")))?;
            new_stakes.insert(pool_id.to_string(), stake_pool.stake);
        }
        // Clean useless old stake distributions if needed.
        if epoch > STAKE_POOL_PRUNE_EPOCH_THRESHOLD {
            let _ = DeleteStakePoolProvider::new(connection)
                .prune(epoch - STAKE_POOL_PRUNE_EPOCH_THRESHOLD)
                .map_err(AdapterError::InitializationError)?;
        }
        connection
            .execute("commit transaction")
            .map_err(|e| AdapterError::QueryError(e.into()))?;

        Ok(Some(new_stakes))
    }

    async fn get_stakes(&self, epoch: Epoch) -> Result<Option<StakeDistribution>, StoreError> {
        let connection = &*self.connection.lock().await;
        let provider = StakePoolProvider::new(connection);
        let cursor = provider
            .get_by_epoch(&epoch)
            .map_err(|e| AdapterError::GeneralError(format!("Could not get stakes: {e}")))?;
        let mut stake_distribution = StakeDistribution::new();

        for stake_pool in cursor {
            stake_distribution.insert(stake_pool.stake_pool_id, stake_pool.stake);
        }

        Ok(Some(stake_distribution))
    }
}

#[cfg(any(test, feature = "test_only"))]
pub fn setup_stake_db(connection: &Connection) -> Result<(), StdError> {
    use crate::database::migration::get_migrations;

    let migrations = get_migrations();
    let migration = migrations
        .iter()
        .find(|&m| m.version == 1)
        .ok_or_else(|| -> StdError {
            "There should be a migration version 1".to_string().into()
        })?;
    let query = {
        // leverage the expanded parameter from this provider which is unit
        // tested on its own above.
        let update_provider = UpdateStakePoolProvider::new(connection);
        let (sql_values, _) = update_provider
            .get_update_condition("pool_id", Epoch(1), 1000)
            .expand();

        connection.execute(&migration.alterations)?;

        format!("insert into stake_pool {sql_values}")
    };
    let stake_distribution: &[(&str, i64, i64); 9] = &[
        ("pool1", 1, 1000),
        ("pool2", 1, 1100),
        ("pool3", 1, 1300),
        ("pool1", 2, 1230),
        ("pool2", 2, 1090),
        ("pool3", 2, 1300),
        ("pool1", 3, 1250),
        ("pool2", 3, 1370),
        ("pool3", 3, 1300),
    ];
    for (pool_id, epoch, stake) in stake_distribution {
        let mut statement = connection.prepare(&query)?;

        statement.bind(1, *pool_id).unwrap();
        statement.bind(2, *epoch).unwrap();
        statement.bind(3, *stake).unwrap();
        statement.next().unwrap();
    }

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn projection() {
        let projection = StakePool::get_projection();
        let aliases = SourceAlias::new(&[("{:stake_pool:}", "sp")]);

        assert_eq!(
            "sp.stake_pool_id as stake_pool_id, sp.stake as stake, sp.epoch as epoch, sp.created_at as created_at".to_string(),
            projection.expand(aliases)
        );
    }

    #[test]
    fn get_pool_by_epoch() {
        let connection = Connection::open(":memory:").unwrap();
        let provider = StakePoolProvider::new(&connection);
        let condition = provider.condition_by_epoch(&Epoch(17)).unwrap();
        let (filter, values) = condition.expand();

        assert_eq!("epoch = ?1".to_string(), filter);
        assert_eq!(vec![Value::Integer(17)], values);
    }

    #[test]
    fn update_stake_pool() {
        let connection = Connection::open(":memory:").unwrap();
        let provider = UpdateStakePoolProvider::new(&connection);
        let condition = provider.get_update_condition("pool_id", Epoch(1), 1000);
        let (values, params) = condition.expand();

        assert_eq!(
            "(stake_pool_id, epoch, stake) values (?1, ?2, ?3)".to_string(),
            values
        );
        assert_eq!(
            vec![
                Value::String("pool_id".to_string()),
                Value::Integer(1),
                Value::Integer(1000)
            ],
            params
        );
    }

    #[test]
    fn prune() {
        let connection = Connection::open(":memory:").unwrap();
        let provider = DeleteStakePoolProvider::new(&connection);
        let condition = provider.get_prune_condition(Epoch(5));
        let (condition, params) = condition.expand();

        assert_eq!("epoch < ?1".to_string(), condition);
        assert_eq!(vec![Value::Integer(5)], params);
    }

    #[test]
    fn test_get_stake_pools() {
        let connection = Connection::open(":memory:").unwrap();
        setup_stake_db(&connection).unwrap();

        let provider = StakePoolProvider::new(&connection);
        let mut cursor = provider.get_by_epoch(&Epoch(1)).unwrap();

        let stake_pool = cursor.next().expect("Should have a stake pool 'pool1'.");
        assert_eq!("pool3".to_string(), stake_pool.stake_pool_id);
        assert_eq!(Epoch(1), stake_pool.epoch);
        assert_eq!(1300, stake_pool.stake);
        assert_eq!(2, cursor.count());

        let mut cursor = provider.get_by_epoch(&Epoch(3)).unwrap();

        let stake_pool = cursor.next().expect("Should have a stake pool 'pool2'.");
        assert_eq!("pool2".to_string(), stake_pool.stake_pool_id);
        assert_eq!(Epoch(3), stake_pool.epoch);
        assert_eq!(1370, stake_pool.stake);
        assert_eq!(2, cursor.count());

        let cursor = provider.get_by_epoch(&Epoch(5)).unwrap();
        assert_eq!(0, cursor.count());
    }

    #[test]
    fn test_update_stakes() {
        let connection = Connection::open(":memory:").unwrap();
        setup_stake_db(&connection).unwrap();

        let provider = UpdateStakePoolProvider::new(&connection);
        let stake_pool = provider.persist("pool4", Epoch(3), 9999).unwrap();

        assert_eq!("pool4".to_string(), stake_pool.stake_pool_id);
        assert_eq!(Epoch(3), stake_pool.epoch);
        assert_eq!(9999, stake_pool.stake);

        let provider = StakePoolProvider::new(&connection);
        let mut cursor = provider.get_by_epoch(&Epoch(3)).unwrap();
        let stake_pool = cursor.next().expect("Should have a stake pool 'pool4'.");

        assert_eq!("pool4".to_string(), stake_pool.stake_pool_id);
        assert_eq!(Epoch(3), stake_pool.epoch);
        assert_eq!(9999, stake_pool.stake);
        assert_eq!(3, cursor.count());
    }

    #[test]
    fn test_prune() {
        let connection = Connection::open(":memory:").unwrap();
        setup_stake_db(&connection).unwrap();

        let provider = DeleteStakePoolProvider::new(&connection);
        let cursor = provider.prune(Epoch(2)).unwrap();

        assert_eq!(3, cursor.count());

        let provider = StakePoolProvider::new(&connection);
        let cursor = provider.get_by_epoch(&Epoch(1)).unwrap();

        assert_eq!(0, cursor.count());

        let cursor = provider.get_by_epoch(&Epoch(2)).unwrap();

        assert_eq!(3, cursor.count());
    }
}
