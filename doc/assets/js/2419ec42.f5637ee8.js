"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[7615],{11370:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(85893),r=t(11151);const s={sidebar_position:2,sidebar_label:"Mithril aggregator"},a="Mithril aggregator node",o={id:"mithril/mithril-network/aggregator",title:"Mithril aggregator node",description:"A Mithril aggregator is a trustless node responsible for coordinating the activities of Mithril signer nodes. It gathers the individual signatures from the signer nodes to generate Mithril multi-signatures along with their corresponding certificates. Additionally, the aggregator is in charge of creating and maintaining the archive for the ledger state snapshot.",source:"@site/root/mithril/mithril-network/aggregator.md",sourceDirName:"mithril/mithril-network",slug:"/mithril/mithril-network/aggregator",permalink:"/doc/next/mithril/mithril-network/aggregator",draft:!1,unlisted:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/website/root/mithril/mithril-network/aggregator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Mithril aggregator"},sidebar:"mithrilSideBar",previous:{title:"Architecture",permalink:"/doc/next/mithril/mithril-network/architecture"},next:{title:"Mithril signer",permalink:"/doc/next/mithril/mithril-network/signer"}},h={},l=[{value:"Trustless orchestration",id:"trustless-orchestration",level:2},{value:"Multi-signature and certificate production",id:"multi-signature-and-certificate-production",level:2},{value:"Snapshot artifacts production",id:"snapshot-artifacts-production",level:2},{value:"Distribution of snapshot artifacts and certificates",id:"distribution-of-snapshot-artifacts-and-certificates",level:2},{value:"Under the hood",id:"under-the-hood",level:2}];function c(e){const i={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"mithril-aggregator-node",children:"Mithril aggregator node"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["A ",(0,n.jsx)(i.strong,{children:"Mithril aggregator"})," is a trustless node responsible for coordinating the activities of ",(0,n.jsx)(i.strong,{children:"Mithril signer"})," nodes. It gathers the individual signatures from the signer nodes to generate Mithril multi-signatures along with their corresponding certificates. Additionally, the aggregator is in charge of creating and maintaining the archive for the ledger state snapshot."]})}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["For more information about the ",(0,n.jsx)(i.strong,{children:"Mithril protocol"}),", see the ",(0,n.jsx)(i.a,{href:"/doc/next/mithril/mithril-protocol/protocol",children:"protocol in depth"})," overview."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["For more information about the ",(0,n.jsx)(i.strong,{children:"Mithril aggregator"}),", see the ",(0,n.jsx)(i.a,{href:"/doc/next/manual/developer-docs/nodes/mithril-aggregator",children:"developer manual"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(i.h2,{id:"trustless-orchestration",children:"Trustless orchestration"}),"\n",(0,n.jsx)(i.p,{children:"The primary objective of the Mithril aggregator is to coordinate and synchronize the production of Mithril multi-signatures:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["When a new snapshot is ready to be produced (and certified), the Mithril aggregator generates and broadcasts a fresh ",(0,n.jsx)(i.strong,{children:"beacon"})," to inform Mithril signers of the specific time reference to employ in computing the message (or digest) for signing"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["It is also responsible for advertising the ",(0,n.jsx)(i.strong,{children:"verification keys"})," (Mithril public keys) of all the registered Mithril signers"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["The beacon, the current protocol parameters, and the available verification keys are compiled and shared in a ",(0,n.jsx)(i.strong,{children:"pending certificate"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Mithril signers can register with it to participate in the signature process later on."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"An important point to note is that the Mithril aggregator operates in a trustless manner:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Anyone on the network can run an aggregator"}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["The aggregator doesn't broadcast any ",(0,n.jsx)(i.em,{children:"sensitive"})," information, such as the ",(0,n.jsx)(i.em,{children:"message"})," requiring signing. The signer nodes handle the direct computation of this information from a ",(0,n.jsx)(i.strong,{children:"Cardano node"})," on which they operate."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Additionally, when it comes to aggregating individual signatures into Mithril multi-signatures, the aggregator doesn't need to represent a portion of the total stake within the Cardano network."}),"\n",(0,n.jsx)(i.h2,{id:"multi-signature-and-certificate-production",children:"Multi-signature and certificate production"}),"\n",(0,n.jsx)(i.p,{children:"The Mithril aggregator oversees the creation of Mithril multi-signatures along with their associated certificates for a part and/or the entirety of the ledger state (snapshots):"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Previously registered Mithril signers generate individual signatures. These signatures are then sent to the Mithril aggregator for validation and storage."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Once the ",(0,n.jsx)(i.strong,{children:"quorum"})," of individual signatures has been reached, the Mithril aggregator can generate a multi-signature."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Subsequently, the Mithril aggregator combines the multi-signature with relevant metadata to create a ",(0,n.jsx)(i.strong,{children:"Mithril certificate"}),". This certificate will later be utilized by the ",(0,n.jsx)(i.strong,{children:"Mithril client"})," to authenticate a snapshot's legitimacy."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["For more information about the ",(0,n.jsx)(i.strong,{children:"Mithril certificate chain"}),", see the ",(0,n.jsx)(i.a,{href:"/doc/next/mithril/mithril-protocol/certificates",children:"certificate chain"})," overview."]})}),"\n",(0,n.jsx)(i.h2,{id:"snapshot-artifacts-production",children:"Snapshot artifacts production"}),"\n",(0,n.jsx)(i.p,{children:"In its initial version, the Mithril aggregator also handles the production of artifacts associated with the snapshot (such as the snapshot archive, which will be used later by a Mithril client)."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["It's important to note that this role is presently undertaken for the sake of convenience. However, it's planned that in the long run, the production of artifacts will be assigned to a distinct ",(0,n.jsx)(i.strong,{children:"Mithril snapshotter"})," node."]})}),"\n",(0,n.jsx)(i.p,{children:"Once the snapshot artifact is created, it can be synchronized on various locations:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"On the Mithril aggregator itself"}),"\n",(0,n.jsx)(i.li,{children:"On any cloud platform that offers a CDN"}),"\n",(0,n.jsxs)(i.li,{children:["On a distinct peer-to-peer network, such as ",(0,n.jsx)(i.strong,{children:"IPFS"})," or ",(0,n.jsx)(i.strong,{children:"BitTorrent"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The Mithril certificate is part of a chain of certificates that are essential for snapshot authenticity verification and is stored in either of the following ways:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"On the Mithril aggregator itself"}),"\n",(0,n.jsx)(i.li,{children:"On any accessible storage, such as cloud storage, for instance."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"distribution-of-snapshot-artifacts-and-certificates",children:"Distribution of snapshot artifacts and certificates"}),"\n",(0,n.jsx)(i.p,{children:"If the Mithril aggregator stores the snapshot artifacts and/or the certificates, it can function as a distribution point for this data to remote clients. The clients can then use the artifacts as needed and verify their authenticity."}),"\n",(0,n.jsx)(i.h2,{id:"under-the-hood",children:"Under the hood"}),"\n",(0,n.jsx)(i.p,{children:"In its initial version, the Mithril aggregator comprises two main components:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["A REST API that allows Mithril signers to:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Retrieve ",(0,n.jsx)(i.strong,{children:"verification keys"})," of other registered signers"]}),"\n",(0,n.jsx)(i.li,{children:"Register their own verification keys"}),"\n",(0,n.jsxs)(i.li,{children:["Register their ",(0,n.jsx)(i.strong,{children:"individual signatures"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["The Mithril aggregator's ",(0,n.jsx)(i.strong,{children:"REST API"})," documentation can be found ",(0,n.jsx)(i.a,{href:"/doc/aggregator-api",children:"here"}),"."]})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["A runtime powered by a state machine:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The runtime operates synchronously and is scheduled to execute at regular intervals"}),"\n",(0,n.jsxs)(i.li,{children:["It encompasses three potential states: ",(0,n.jsx)(i.strong,{children:"IDLE"}),", ",(0,n.jsx)(i.strong,{children:"READY"}),", and ",(0,n.jsx)(i.strong,{children:"SIGNING"})]}),"\n",(0,n.jsx)(i.li,{children:"The runtime effectively manages state transitions"}),"\n",(0,n.jsx)(i.li,{children:"The runtime structure is illustrated in the diagram below:"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Aggregator Runtime",src:t(24854).Z+"",width:"627",height:"1593"})})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},24854:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/aggregator-runtime-1dbf1f0259f9e9b6b42ef2cf4f3724d5.jpg"},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>a});var n=t(67294);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);