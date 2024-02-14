"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[5968],{627:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=t(85893),r=t(11151);const o={sidebar_position:4,sidebar_label:"Mithril client"},s="Mithril client node",a={id:"mithril/mithril-network/client",title:"Mithril client node",description:"The Mithril client node is used to list, show or verify artifacts certified by Mithril certificates:",source:"@site/root/mithril/mithril-network/client.md",sourceDirName:"mithril/mithril-network",slug:"/mithril/mithril-network/client",permalink:"/doc/next/mithril/mithril-network/client",draft:!1,unlisted:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/mithril/mithril-network/client.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Mithril client"},sidebar:"mithrilSideBar",previous:{title:"Mithril signer",permalink:"/doc/next/mithril/mithril-network/signer"}},l={},h=[{value:"Wallet restoration",id:"wallet-restoration",level:2},{value:"Certificate chain verification",id:"certificate-chain-verification",level:3},{value:"Snapshot artifacts retrieval",id:"snapshot-artifacts-retrieval",level:3},{value:"Snapshot restoration",id:"snapshot-restoration",level:3},{value:"Mithril stake distribution",id:"mithril-stake-distribution",level:2}];function c(i){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"mithril-client-node",children:"Mithril client node"}),"\n",(0,n.jsxs)(e.admonition,{type:"info",children:[(0,n.jsx)(e.p,{children:"The Mithril client node is used to list, show or verify artifacts certified by Mithril certificates:"}),(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Cardano full node snapshots"}),"\n",(0,n.jsx)(e.li,{children:"Stake distribution involved in Mithril signatures."}),"\n"]})]}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["For more information about the Mithril protocol, see the ",(0,n.jsx)(e.a,{href:"/doc/next/mithril/mithril-protocol/protocol",children:"protocol in depth"})," overview."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["For more information about the Mithril client, see the ",(0,n.jsx)(e.a,{href:"/doc/next/manual/developer-docs/nodes/mithril-client",children:"developer manual"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(e.h2,{id:"wallet-restoration",children:"Wallet restoration"}),"\n",(0,n.jsx)(e.p,{children:"A Mithril client can be used by anyone who needs to rapidly restore and bootstrap a Cardano full node:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"A full-node wallet such as Daedalus"}),"\n",(0,n.jsx)(e.li,{children:"A node operator (SPO, exchange, DApp)."}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"In the long run, the Mithril client will be incorporated in light clients and wallets."}),"\n",(0,n.jsx)(e.h3,{id:"certificate-chain-verification",children:"Certificate chain verification"}),"\n",(0,n.jsx)(e.p,{children:"The initial action of the Mithril client involves downloading the corresponding certificate chain. For each Mithril certificate, the client proceeds to verify the following:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"The certificate has not been tampered with (by computing its hash and verifying that it is the same as the one used for downloading it)"}),"\n",(0,n.jsx)(e.li,{children:"The locally computed message is the same as in the certificate"}),"\n",(0,n.jsx)(e.li,{children:"The multi-signature of the certificate is valid and computed with the certificate message"}),"\n",(0,n.jsxs)(e.li,{children:["The stake distribution used to compute the multi-signature is signed:","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"By a multi-signature of a previous certificate of the chain (if there is one available)"}),"\n",(0,n.jsx)(e.li,{children:"Or by a valid genesis certificate (in case this is the first certificate of the chain)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"The Mithril aggregator is used as a provider for the certificate chain."}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["For more information about the Mithril certificate chain, see the ",(0,n.jsx)(e.a,{href:"/doc/next/mithril/mithril-protocol/certificates",children:"certificate chain"})," overview."]})}),"\n",(0,n.jsx)(e.h3,{id:"snapshot-artifacts-retrieval",children:"Snapshot artifacts retrieval"}),"\n",(0,n.jsx)(e.p,{children:"Once the certificate chain is verified, the Mithril client will try to download a full Cardano node snapshot. The Mithril aggregator is used as a provider for the snapshot locations. The snapshots might be stored at several locations, the client will try the given locations until it finds one that responds well."}),"\n",(0,n.jsx)(e.p,{children:"These artifacts are downloaded locally in a temporary directory and then uncompressed in the location given on the command line. The uncompressed files are used to compute the message that is then compared with the one that is signed by the Mithril signers. If the verification fails, the uncompressed files are removed from the disk."}),"\n",(0,n.jsx)(e.h3,{id:"snapshot-restoration",children:"Snapshot restoration"}),"\n",(0,n.jsx)(e.p,{children:"If the verification succeeds, the user can use these files to start a Cardano full node. At this point, the Cardano node will take over and start adding new blocks to the ledger."}),"\n",(0,n.jsx)(e.h2,{id:"mithril-stake-distribution",children:"Mithril stake distribution"}),"\n",(0,n.jsx)(e.p,{children:"The client can be also used to verify and download the stake distribution used for signatures at the upcoming Cardano's epoch. As with snapshots, the certificate chain is validated, then the signers' verification keys are checked. If valid, a fingerprint of the stake distribution is computed and tested against the one used by the certificate. If it is different, the verification stops. Otherwise, the JSON representation of the stake distribution is saved on disk for further use."})]})}function d(i={}){const{wrapper:e}={...(0,r.a)(),...i.components};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(c,{...i})}):c(i)}},11151:(i,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var n=t(67294);const r={},o=n.createContext(r);function s(i){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(r):i.components||r:s(i.components),n.createElement(o.Provider,{value:e},i.children)}}}]);