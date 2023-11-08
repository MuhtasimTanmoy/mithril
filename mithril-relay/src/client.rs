use crate::peer::{Peer, PeerBehaviourEvent, PeerEvent};
use libp2p::{gossipsub, Multiaddr};
use mithril_common::{messages::RegisterSignatureMessage, StdResult};
use slog_scope::debug;

pub struct P2PClient {
    pub peer: Peer,
}

impl P2PClient {
    pub fn new(topic_name: &str) -> Self {
        Self {
            peer: Peer::new(topic_name),
        }
    }

    pub fn convert_event(
        &mut self,
        event: PeerEvent,
    ) -> StdResult<Option<RegisterSignatureMessage>> {
        match event {
            PeerEvent::Behaviour {
                event: PeerBehaviourEvent::Gossipsub(gossipsub::Event::Message { message, .. }),
            } => Ok(Some(serde_json::from_slice(&message.data)?)),
            _ => Ok(None),
        }
    }

    pub async fn tick(&mut self) -> StdResult<Option<PeerEvent>> {
        self.peer.tick_swarm().await
    }

    pub async fn start(self) -> StdResult<Self> {
        debug!("P2P Client: starting...");
        Ok(Self {
            peer: self.peer.start().await?,
        })
    }

    pub fn address(&self) -> Option<Multiaddr> {
        self.peer.addr.to_owned()
    }
}
