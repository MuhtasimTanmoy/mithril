"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docSideBar":[{"type":"link","label":"Welcome","href":"/doc/manual/welcome","docId":"manual/welcome"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Bootstrap a Cardano Node","href":"/doc/manual/getting-started/bootstrap-cardano-node","docId":"manual/getting-started/bootstrap-cardano-node"},{"type":"link","label":"Run a Mithril Signer node (SPO)","href":"/doc/manual/getting-started/run-signer-node","docId":"manual/getting-started/run-signer-node"},{"type":"link","label":"Run a Private Mithril network","href":"/doc/manual/getting-started/run-mithril-devnet","docId":"manual/getting-started/run-mithril-devnet"}],"href":"/doc/category/getting-started"}],"mithrilSideBar":[{"type":"link","label":"Intro","href":"/doc/mithril/intro","docId":"mithril/intro"},{"type":"category","label":"Core Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Mithril Protocol","href":"/doc/mithril/core-concepts/mithril-protocol","docId":"mithril/core-concepts/mithril-protocol"},{"type":"link","label":"Cardano APIs","href":"/doc/mithril/core-concepts/cardano-apis","docId":"mithril/core-concepts/cardano-apis"},{"type":"link","label":"Mithril Certificate Details","href":"/doc/mithril/core-concepts/certificate-details","docId":"mithril/core-concepts/certificate-details"},{"type":"link","label":"Simple Payment Verification","href":"/doc/mithril/core-concepts/spv","docId":"mithril/core-concepts/spv"}],"href":"/doc/category/core-concepts"},{"type":"category","label":"Topologies","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Aggregator","href":"/doc/mithril/topologies/aggregator","docId":"mithril/topologies/aggregator"},{"type":"link","label":"Client","href":"/doc/mithril/topologies/client","docId":"mithril/topologies/client"},{"type":"link","label":"Signer","href":"/doc/mithril/topologies/signer","docId":"mithril/topologies/signer"}],"href":"/doc/category/topologies"},{"type":"category","label":"Test Lab","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/doc/mithril/test-lab/test-lab-overview","docId":"mithril/test-lab/test-lab-overview"},{"type":"link","label":"Design","href":"/doc/mithril/test-lab/test-lab-design","docId":"mithril/test-lab/test-lab-design"},{"type":"link","label":"Adversarial Events","href":"/doc/mithril/test-lab/mithril-adversarial-scenarios","docId":"mithril/test-lab/mithril-adversarial-scenarios"}],"href":"/doc/category/test-lab"}]},"docs":{"glossary":{"id":"glossary","title":"Glossary","description":"Here is a comprehensive list of terms\' definition used in the project."},"manual/getting-started/bootstrap-cardano-node":{"id":"manual/getting-started/bootstrap-cardano-node","title":"Bootstrap a Cardano Node","description":"Thanks to a Mithril Client connected to a Mithril Aggregator, you will restore a full Cardano node in less than 2 hours!","sidebar":"docSideBar"},"manual/getting-started/run-mithril-devnet":{"id":"manual/getting-started/run-mithril-devnet","title":"Run a Private Mithril network","description":"In this guide, you will learn how to run a demonstration of a Mithril Network working on top of a private devnet Cardano Network. This network is completely autonomous and setup to produce Mithril snapshots every 1 minute.","sidebar":"docSideBar"},"manual/getting-started/run-signer-node":{"id":"manual/getting-started/run-signer-node","title":"Run a Mithril Signer node (SPO)","description":"In this guide, you will learn how to setup a Mithril Signer on top of a Cardano SPO Node for the testnet.","sidebar":"docSideBar"},"manual/welcome":{"id":"manual/welcome","title":"Welcome","description":"Let\'s discover Mithril in less than 5 minutes.","sidebar":"docSideBar"},"mithril/core-concepts/cardano-apis":{"id":"mithril/core-concepts/cardano-apis","title":"Cardano APIs","description":"This document lists some useful tools/repositories that could be used by a Mithril node to retrieve information about","sidebar":"mithrilSideBar"},"mithril/core-concepts/certificate-details":{"id":"mithril/core-concepts/certificate-details","title":"Mithril Certificate Details","description":"This document covers an open discussion on some important details required to","sidebar":"mithrilSideBar"},"mithril/core-concepts/mithril-protocol":{"id":"mithril/core-concepts/mithril-protocol","title":"Mithril Protocol","description":"The full details of the Mithril protocol are provided in the published paper. This section is high-level description of","sidebar":"mithrilSideBar"},"mithril/core-concepts/spv":{"id":"mithril/core-concepts/spv","title":"Simple Payment Verification","description":"* SPV has been around in bitcoin since day 1 as a technique to verify inclusion of transactions in blocks without","sidebar":"mithrilSideBar"},"mithril/intro":{"id":"mithril/intro","title":"Intro","description":"Welcome to Mithril documentation.","sidebar":"mithrilSideBar"},"mithril/test-lab/mithril-adversarial-scenarios":{"id":"mithril/test-lab/mithril-adversarial-scenarios","title":"Mithril adversarial events","description":"This documents serves as a log of different adversarial events that we think of, and that we wish to include in our","sidebar":"mithrilSideBar"},"mithril/test-lab/test-lab-design":{"id":"mithril/test-lab/test-lab-design","title":"Mithril Test Lab Design","description":"Summary","sidebar":"mithrilSideBar"},"mithril/test-lab/test-lab-overview":{"id":"mithril/test-lab/test-lab-overview","title":"Overview","description":"The following picture describes in high-level box-and-wire diagram how a Mithril Test Lab would instrument Mithril nodes","sidebar":"mithrilSideBar"},"mithril/topologies/aggregator":{"id":"mithril/topologies/aggregator","title":"Aggregator","description":"The Aggregator is the central piece of the Mithril certificate creation.","sidebar":"mithrilSideBar"},"mithril/topologies/client":{"id":"mithril/topologies/client","title":"Client","description":"A client is a Snapshot consumer. It is typically a Wallet that wants to synchronize with the Cardano blockchain. When performed from the begining of the chain, it can take several days to compute all the blocks and verify everything is consistent. Snapshots act as certified savepoints, the wallet can assume all the blocks in the snapshots are consistent hence only the newer blocks are to be verified. This dramatically reduces the synchronization times.","sidebar":"mithrilSideBar"},"mithril/topologies/signer":{"id":"mithril/topologies/signer","title":"Signer","description":"A Signer is a participant to a Mithril Multisignature. As such, a signer contributes to signing an expected genuine message. To do so, the signer computes the digest from the information stored on a Cardano node and signs it with his secret key. This signed message is sent to the Aggregator, along with the corresponding won lottery numbers. This way, the Aggregator can assess that the Signer is identified and has signed the same message.","sidebar":"mithrilSideBar"}}}')}}]);