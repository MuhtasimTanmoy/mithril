"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[4010],{45614:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var n=t(74848),r=t(28453);const s={sidebar_position:2,sidebar_label:"Certificate Chain in depth"},c="Mithril certificate chain in depth",a={id:"mithril/mithril-protocol/certificates",title:"Mithril certificate chain in depth",description:"Introduction",source:"@site/root/mithril/mithril-protocol/certificates.md",sourceDirName:"mithril/mithril-protocol",slug:"/mithril/mithril-protocol/certificates",permalink:"/doc/next/mithril/mithril-protocol/certificates",draft:!1,unlisted:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/website/root/mithril/mithril-protocol/certificates.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Certificate Chain in depth"},sidebar:"mithrilSideBar",previous:{title:"Protocol in depth",permalink:"/doc/next/mithril/mithril-protocol/protocol"},next:{title:"Simulation",permalink:"/doc/next/mithril/mithril-protocol/simulation"}},h={},o=[{value:"Introduction",id:"introduction",level:2},{value:"The certificate chain design",id:"the-certificate-chain-design",level:2},{value:"The verification algorithm",id:"the-verification-algorithm",level:2},{value:"The coexistence of multiple certificate chains",id:"the-coexistence-of-multiple-certificate-chains",level:2},{value:"The need for backward compatibility",id:"the-need-for-backward-compatibility",level:2}];function l(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"mithril-certificate-chain-in-depth",children:"Mithril certificate chain in depth"}),"\n",(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Mithril protocol"})," can be summarized as:"]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"A protocol that enables stakeholders in a proof-of-stake blockchain network to individually sign messages. These signatures are then aggregated into a multi-signature, ensuring that stakeholders collectively represent a minimum share of the total stake."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"certificate chain"})," is a Mithril component that certifies the ",(0,n.jsx)(i.strong,{children:"stake distribution"})," used to create the multi-signature. Its primary purpose is to prevent adversaries from executing an ",(0,n.jsx)(i.strong,{children:"eclipse attack"})," on the blockchain."]}),"\n",(0,n.jsx)(i.p,{children:"Without the certificate, the stake distribution can't be trusted. A malicious actor could relatively easily create a fake stake distribution and use it to produce a valid multi-signature, which would be embedded in a valid but non-genuine certificate. This certificate could be served by a dishonest Mithril aggregator node, leading an honest Mithril client to restore a non-genuine snapshot."}),"\n",(0,n.jsx)(i.h2,{id:"the-certificate-chain-design",children:"The certificate chain design"}),"\n",(0,n.jsx)(i.admonition,{type:"danger",children:(0,n.jsxs)(i.p,{children:["The stake distribution of an epoch is computed by ",(0,n.jsx)(i.strong,{children:"Cardano nodes"})," at the end of each epoch. It becomes usable from the beginning of the following epoch."]})}),"\n",(0,n.jsx)(i.p,{children:"The way to certify the stake distribution used to create a multi-signature is by verifying that it has been previously signed in an earlier certificate. Then, one can recursively verify that the earlier certificate is valid in the same manner. This process can be structured as a chain of certificates, known as the Mithril certificate chain. The first certificate in the chain is discussed below."}),"\n",(0,n.jsx)(i.p,{children:"Since multiple certificates can be created during the same epoch using the same stake distribution, it is not necessary to link to all of them for verification. Instead, it is sufficient to link to only one certificate from the previous epoch. By doing so, the verification process becomes faster and helps avoid network congestion."}),"\n",(0,n.jsxs)(i.p,{children:["The first certificate in the certificate chain is known as the ",(0,n.jsx)(i.strong,{children:"genesis certificate"}),". Validating the stake distribution embedded in the genesis certificate is only possible by signing it with a private key linked to a widely accessible public key called the ",(0,n.jsx)(i.strong,{children:"genesis key"}),". The use of these specific keys ensures the integrity and security of the initial stake distribution and subsequent transitions within the blockchain network."]}),"\n",(0,n.jsxs)(i.p,{children:["The diagram below presents the certificate chain design:\n",(0,n.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(36024).A+"",children:(0,n.jsx)(i.img,{alt:"Certificate Chain Design",src:t(83532).A+"",width:"1475",height:"677"})})]}),"\n",(0,n.jsx)(i.p,{children:"Where the following notations have been used:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"C(p,n)"}),": Certificate at trigger ",(0,n.jsx)(i.code,{children:"p"})," and epoch ",(0,n.jsx)(i.code,{children:"n"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"FC(n)"}),": First certificate of epoch ",(0,n.jsx)(i.code,{children:"n"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"GC"}),": Genesis certificate"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"H()"}),": Hash"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"SD(n)"}),": Stake distribution of epoch ",(0,n.jsx)(i.code,{children:"n"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"VK(n)"}),": Verification key at epoch ",(0,n.jsx)(i.code,{children:"n"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"AVK(n)"}),": Aggregrate verification key at epoch ",(0,n.jsx)(i.code,{children:"n"})," such as ",(0,n.jsx)(i.code,{children:"AVK(n) = MKT_ROOT(SD(n) || VK(n))"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"MKT_ROOT()"}),": Merkle-tree root"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"BEACON(p,n)"}),": Beacon at trigger ",(0,n.jsx)(i.code,{children:"p"})," and epoch ",(0,n.jsx)(i.code,{children:"n"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"METADATA(p,n)"}),": Metadata of the certificate at trigger ",(0,n.jsx)(i.code,{children:"p"})," and epoch ",(0,n.jsx)(i.code,{children:"n"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"MSG(p,n)"}),": Message of the certificate at trigger ",(0,n.jsx)(i.code,{children:"p"})," and epoch ",(0,n.jsx)(i.code,{children:"n"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"MULTI_SIG(p,n)"}),": Multi-signature created to the message ",(0,n.jsx)(i.code,{children:"H(MSG(p,n) || AVK(n-1))"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"GENESIS_SIG(MSG)"}),": Genesis signature, the signature of ",(0,n.jsx)(i.code,{children:"MSG"})," with the genesis keys"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The hash of a certificate ",(0,n.jsx)(i.code,{children:"H(C(p,n))"})," is computed as the concatenation (",(0,n.jsx)(i.code,{children:"||"}),") of all its fields. Therefore, if one field is modified, its hash is different."]}),"\n",(0,n.jsxs)(i.p,{children:["Information embedded in the ",(0,n.jsx)(i.code,{children:"METADATA(p,n)"})," field:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The version of the Mithril protocol"}),"\n",(0,n.jsxs)(i.li,{children:["The parameters of the Mithril protocol (",(0,n.jsx)(i.code,{children:"k"}),", ",(0,n.jsx)(i.code,{children:"m"}),", and ",(0,n.jsx)(i.code,{children:"phi_f"}),")"]}),"\n",(0,n.jsx)(i.li,{children:"The date and time at which the multi-signature creation was initiated"}),"\n",(0,n.jsx)(i.li,{children:"The date and time at which the certificate was sealed"}),"\n",(0,n.jsx)(i.li,{children:"The list of the signers that actively contributed to the multi-signature."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The message ",(0,n.jsx)(i.code,{children:"MSG(p,n)"})," is a map of multiple values associated with their respective keys. It provides a way to add more information to the certificates without breaking the chain itself. Added items can be any message that the signers can compute deterministically thanks to the Cardano consensus \u2013 an immutable files snapshot, the UTXO set, stake distribution, etc."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"trigger"})," represents the instant at which a certificate should be created. It is combined with at least the associated ",(0,n.jsx)(i.strong,{children:"epoch"})," to create a ",(0,n.jsx)(i.a,{href:"/doc/next/glossary#beacon",children:(0,n.jsx)(i.strong,{children:"beacon"})})," of the certificate. In the current implementation of the Cardano node database snapshot, this trigger is a new ",(0,n.jsx)(i.a,{href:"/doc/next/glossary#immutable-file-number",children:(0,n.jsx)(i.strong,{children:"immutable file number"})}),"."]})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"aggregate verification key"})," (",(0,n.jsx)(i.code,{children:"AVK"}),") is the root of the Merkle tree where each leaf is filled with ",(0,n.jsx)(i.code,{children:"H(STAKE(signer) || VK(signer))"}),". It represents the corresponding stake distribution in a condensed way."]})}),"\n",(0,n.jsx)(i.h2,{id:"the-verification-algorithm",children:"The verification algorithm"}),"\n",(0,n.jsx)(i.p,{children:"Certificate chain verification can be stated as:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"CHAIN_VERIFY[C(p,n(p))] = CERT_VERIFY[C(p,n(p)] ^ CERT_VERIFY[FC(n(p))] ^ CERT_VERIFY[FC(n(p)-1)] ^ ... ^ CERT_VERIFY[FC(1)] ^ CERT_VERIFY[GC]\n"})}),"\n",(0,n.jsx)(i.p,{children:"Where the following notations have been used:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The epoch ",(0,n.jsx)(i.code,{children:"n(p)"})," depends on the trigger ",(0,n.jsx)(i.code,{children:"p"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"CHAIN_VERIFY[]"}),": verify all the chain backward from a certificate"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"CERT_VERIFY[]"}),": verify a specific certificate."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"A certificate chain is considered valid when there is at least one valid certificate per epoch, starting from a certificate and going all the way up to the genesis certificate of the chain."}),"\n",(0,n.jsxs)(i.p,{children:["A ",(0,n.jsx)(i.strong,{children:"non-genesis certificate"})," is valid if and only if the ",(0,n.jsx)(i.code,{children:"AVK"})," used to verify the multi-signature is also part of the signed message used to create a valid multi-signature in a previously sealed certificate."]}),"\n",(0,n.jsx)(i.p,{children:"The genesis certificate is valid if and only if its genesis signature is verified with the advertised public genesis key."}),"\n",(0,n.jsx)(i.p,{children:"An implementation of the algorithm would work as follows for a certificate:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 1"}),": Use this certificate as the ",(0,n.jsx)(i.code,{children:"current_certificate"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 2"}),": Verify (or fail) that the ",(0,n.jsx)(i.code,{children:"current_hash"})," of the ",(0,n.jsx)(i.code,{children:"current_certificate"})," is valid by computing it and comparing it with the ",(0,n.jsx)(i.code,{children:"hash"})," field of the certificate"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 3"}),": Get the ",(0,n.jsx)(i.code,{children:"previous_hash"})," of the ",(0,n.jsx)(i.code,{children:"previous_certificate"})," by reading its value in the ",(0,n.jsx)(i.code,{children:"current_certificate"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 4"}),": Verify (or fail) that the ",(0,n.jsx)(i.code,{children:"multi_signature"})," of the ",(0,n.jsx)(i.code,{children:"current_certificate"})," is valid"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5"}),": Retrieve the ",(0,n.jsx)(i.code,{children:"previous_certificate"})," that has the hash ",(0,n.jsx)(i.code,{children:"previous_hash"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.1"}),": If it is not a ",(0,n.jsx)(i.code,{children:"genesis_certificate"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.1.1"}),": Verify (or fail) that the ",(0,n.jsx)(i.code,{children:"previous_hash"})," of the ",(0,n.jsx)(i.code,{children:"previous_certificate"})," is valid by computing it and comparing it with the ",(0,n.jsx)(i.code,{children:"hash"})," field of the certificate:"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.1.2"}),": Verify the ",(0,n.jsx)(i.code,{children:"current_avk"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.1.2.1"}),": If the ",(0,n.jsx)(i.code,{children:"current_certificate"})," is the ",(0,n.jsx)(i.code,{children:"first_certificate"})," of the epoch, verify (or fail) that the ",(0,n.jsx)(i.code,{children:"current_avk"})," of the ",(0,n.jsx)(i.code,{children:"current_certificate"})," is part of the message signed by the multi-signature of the ",(0,n.jsx)(i.code,{children:"previous_certificate"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.1.2.2"}),": Else verify (or fail) that the ",(0,n.jsx)(i.code,{children:"current_avk"})," of the ",(0,n.jsx)(i.code,{children:"current_certificate"})," is the same as the ",(0,n.jsx)(i.code,{children:"current_avk"})," of the ",(0,n.jsx)(i.code,{children:"previous_certificate"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.1.3"}),": Verify (or fail) that the ",(0,n.jsx)(i.code,{children:"multi_signature"})," of the ",(0,n.jsx)(i.code,{children:"previous_certificate"})," is valid"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.1.4"}),": Use the ",(0,n.jsx)(i.code,{children:"previous_certificate"})," as ",(0,n.jsx)(i.code,{children:"current_certificate"})," and start again at ",(0,n.jsx)(i.strong,{children:"Step 2"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.2"}),": If it is a ",(0,n.jsx)(i.code,{children:"genesis_certificate"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.2.1"}),": Verify (or fail) that the ",(0,n.jsx)(i.code,{children:"previous_hash"})," of the ",(0,n.jsx)(i.code,{children:"previous_certificate"})," is valid by computing it and comparing it with the ",(0,n.jsx)(i.code,{children:"hash"})," field of the certificate"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.2.2"}),": Verify (or fail) that the ",(0,n.jsx)(i.code,{children:"current_avk"})," of the ",(0,n.jsx)(i.code,{children:"current_certificate"})," is part of the message signed by the genesis signature of the ",(0,n.jsx)(i.code,{children:"previous_certificate"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Step 5.2.3"}),": The certificate is valid (success)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"the-coexistence-of-multiple-certificate-chains",children:"The coexistence of multiple certificate chains"}),"\n",(0,n.jsxs)(i.p,{children:["What would happen if some ",(0,n.jsx)(i.strong,{children:"Mithril aggregator"})," claims that not enough signatures were received? This doesn\u2019t really matter, as there will be a different Mithril aggregator that would collect sufficient signatures and aggregate them into a valid certificate."]}),"\n",(0,n.jsx)(i.p,{children:"Similarly, different Mithril aggregators might have different views of the individual signatures submitted (one aggregator might receive 10 signatures, and a different one could receive 11), which would result in different certificates signing the same message."}),"\n",(0,n.jsx)(i.p,{children:"This would result in different certificate chains that would all link back to the genesis certificate. Indeed they would be represented by a tree of certificates where each traversal path from the root to a leaf represents a valid certificate chain."}),"\n",(0,n.jsx)(i.h2,{id:"the-need-for-backward-compatibility",children:"The need for backward compatibility"}),"\n",(0,n.jsx)(i.p,{children:"The certificate chain is designed to last. At a certain point, a multi-signature from legacy versions of the Mithril cryptographic library will require certification."}),"\n",(0,n.jsx)(i.p,{children:"To achieve this backward compatibility, some options are available:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Handle multi-signature verification functions of legacy versions"}),"\n",(0,n.jsx)(i.li,{children:"Recreate genesis certificates from time to time"}),"\n",(0,n.jsxs)(i.li,{children:["Create intermediate ",(0,n.jsx)(i.strong,{children:"milestone certificates"})," (with both a multi-signature and a genesis signature)"]}),"\n",(0,n.jsx)(i.li,{children:"Design a format migration algorithm."}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},36024:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/files/certificate-chain-e700241394649f948e0aab47b0f881c9.jpg"},83532:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/certificate-chain-e700241394649f948e0aab47b0f881c9.jpg"},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>a});var n=t(96540);const r={},s=n.createContext(r);function c(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);