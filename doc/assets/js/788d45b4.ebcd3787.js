"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[6849,9531,2379],{84489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=r(85893),n=r(11151);const s={unlisted:!0,hide_title:!0,hide_table_of_contents:!0},a=void 0,l={id:"compiled-binaries",title:"compiled-binaries",description:"Each Release / Pre-Release distribution comes with pre compiled binaries ready to use or wrapped in a debian package",source:"@site/root/compiled-binaries.md",sourceDirName:".",slug:"/compiled-binaries",permalink:"/doc/next/compiled-binaries",draft:!1,unlisted:!0,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/compiled-binaries.md",tags:[],version:"current",frontMatter:{unlisted:!0,hide_title:!0,hide_table_of_contents:!0}},d={},c=[];function o(e){const t={code:"code",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Each Release / Pre-Release distribution comes with pre compiled binaries ready to use or wrapped in a debian package\nfor linux\xb9."}),"\n",(0,i.jsx)(t.p,{children:"You can download them from the Release / Pre-Release distribution page that depends on the Mithril Network you\nare targeting."}),"\n",(0,i.jsxs)(t.p,{children:["These links are available in the ",(0,i.jsx)(t.strong,{children:"Build From"})," column of the above ",(0,i.jsx)(t.strong,{children:"Mithril Networks"})," table."]}),"\n",(0,i.jsxs)(t.p,{children:["\xb9 The Linux binaries target ",(0,i.jsx)(t.code,{children:"glibc"}),", and have a minimum requirement of ",(0,i.jsx)(t.code,{children:"glibc 2.31"})," (compatible with ",(0,i.jsx)(t.code,{children:"Ubuntu 20.04"}),"\nor ",(0,i.jsx)(t.code,{children:"Debian Bullseye"}),")."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},62137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var i=r(85893),n=r(11151),s=r(52571);r(84489);const a={sidebar_position:4},l="Mithril client library",d={id:"manual/developer-docs/nodes/mithril-client-library",title:"Mithril client library",description:"Mithril client library can be used by Rust developers to use the Mithril network in their applications.",source:"@site/root/manual/developer-docs/nodes/mithril-client-library.md",sourceDirName:"manual/developer-docs/nodes",slug:"/manual/developer-docs/nodes/mithril-client-library",permalink:"/doc/next/manual/developer-docs/nodes/mithril-client-library",draft:!1,unlisted:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/manual/developer-docs/nodes/mithril-client-library.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSideBar",previous:{title:"Mithril client node",permalink:"/doc/next/manual/developer-docs/nodes/mithril-client"},next:{title:"Mithril client library WASM",permalink:"/doc/next/manual/developer-docs/nodes/mithril-client-library-wasm"}},c={},o=[{value:"Resources",id:"resources",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Using Mithril client library",id:"using-mithril-client-library",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"mithril-client-library",children:"Mithril client library"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.p,{children:"Mithril client library can be used by Rust developers to use the Mithril network in their applications."}),(0,i.jsx)(t.p,{children:"It is responsible for handling the different types of data certified by Mithril, and available through a Mithril aggregator:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/doc/next/glossary#snapshot",children:(0,i.jsx)(t.strong,{children:"Snapshot"})}),": list, get, download tarball and record statistics."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/doc/next/glossary#stake-distribution",children:(0,i.jsx)(t.strong,{children:"Mithril stake distribution"})}),": list and get."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/doc/next/glossary#certificate",children:(0,i.jsx)(t.strong,{children:"Certificate"})}),": list, get, and chain validation."]}),"\n"]})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["For more information about the ",(0,i.jsx)(t.strong,{children:"Mithril network"}),", please see the ",(0,i.jsx)(t.a,{href:"/doc/next/mithril/mithril-network/architecture",children:"architecture"})," overview."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["For more information about the ",(0,i.jsx)(t.strong,{children:"Mithril client"})," node, please see ",(0,i.jsx)(t.a,{href:"/doc/next/mithril/mithril-network/client",children:"this overview"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Check out the ",(0,i.jsx)(t.a,{href:"/doc/next/manual/getting-started/bootstrap-cardano-node",children:(0,i.jsx)(t.code,{children:"Bootstrap a Cardano node"})})," guide."]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(t.admonition,{title:"Mithril networks",type:"note",children:(0,i.jsx)(s.default,{})}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Node"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Source repository"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Rust documentation"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Mithril client"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/tree/main/mithril-client",children:"\u2197\ufe0f"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://mithril.network/rust-doc/mithril_client/index.html",children:"\u2197\ufe0f"})})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Install the latest stable version of the ",(0,i.jsx)(t.a,{href:"https://www.rust-lang.org/learn/get-started",children:"correctly configured"})," Rust toolchain."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Install OpenSSL development libraries. For example, on Ubuntu/Debian/Mint, run ",(0,i.jsx)(t.code,{children:"apt install libssl-dev"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["In your project, use ",(0,i.jsx)(t.code,{children:"cargo"})," to add ",(0,i.jsx)(t.a,{href:"https://crates.io/crates/mithril-client",children:"mithril-client"})," crate as a dependency:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cargo add mithril-client\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Mithril client is an asynchronous library, you will need a runtime to execute your futures. We recommend to use the crate ",(0,i.jsx)(t.a,{href:"https://crates.io/crates/tokio",children:"tokio"}),", as the library has been tested with it."]})}),"\n",(0,i.jsx)(t.h2,{id:"using-mithril-client-library",children:"Using Mithril client library"}),"\n",(0,i.jsx)(t.p,{children:"Below is a basic example of how to use most of the functions exposed by the Mithril client library:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:'title="/src/main.rs"',children:'use mithril_client::{ClientBuilder, MessageBuilder};\nuse std::path::Path;\n\n#[tokio::main]\nasync fn main() -> mithril_client::MithrilResult<()> {\n    let client = ClientBuilder::aggregator("YOUR_AGGREGATOR_ENDPOINT", "YOUR_GENESIS_VERIFICATION_KEY").build()?;\n    \n    let snapshots = client.snapshot().list().await?;\n    \n    let last_digest = snapshots.first().unwrap().digest.as_ref();\n    let snapshot = client.snapshot().get(last_digest).await?.unwrap();\n    \n    let certificate = client\n        .certificate()\n        .verify_chain(&snapshot.certificate_hash)\n        .await?;\n    \n    // Note: the directory must already exist, and the user running this code must have read/write access to it.\n    let target_directory = Path::new("YOUR_TARGET_DIRECTORY");\n    client\n        .snapshot()\n        .download_unpack(&snapshot, target_directory)\n        .await?;\n\n    if let Err(e) = client.snapshot().add_statistics(&snapshot).await {\n        println!("Could not increment snapshot download statistics: {:?}", e);\n    }\n    \n    let message = MessageBuilder::new()\n        .compute_snapshot_message(&certificate, target_directory)\n        .await?;\n    assert!(certificate.match_message(&message));\n    \n    Ok(())\n}\n'})}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Snapshot download and certificate chain validation can take quite some time even with a fast computer and network. We have implemented a feedback mechanism for them, more details on it are available in the ",(0,i.jsx)(t.a,{href:"https://mithril.network/rust-doc/mithril_client/feedback/index.html",children:"feedback sub-module"}),"."]}),(0,i.jsxs)(t.p,{children:["An example of implementation with the crate ",(0,i.jsx)(t.a,{href:"https://crates.io/crates/indicatif",children:"indicatif"})," is available in the ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/tree/main/examples/client-snapshot/src/main.rs",children:"Mithril repository"}),". To run it, execute the following command:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cargo run -p client-snapshot\n"})}),(0,i.jsx)(t.p,{children:"or directly from the example crate directory:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cargo run\n"})})]}),"\n",(0,i.jsxs)(t.p,{children:["Here is a working example of the code using the configuration parameters of the ",(0,i.jsx)(t.code,{children:"release-preprod"})," network:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:'title="/src/main.rs"',children:'use mithril_client::{ClientBuilder, MessageBuilder};\nuse std::path::Path;\n\n#[tokio::main]\nasync fn main() -> mithril_client::MithrilResult<()> {\n    let client = ClientBuilder::aggregator("https://aggregator.release-preprod.api.mithril.network/aggregator", "5b3132372c37332c3132342c3136312c362c3133372c3133312c3231332c3230372c3131372c3139382c38352c3137362c3139392c3136322c3234312c36382c3132332c3131392c3134352c31332c3233322c3234332c34392c3232392c322c3234392c3230352c3230352c33392c3233352c34345d").build()?;\n    \n    let snapshots = client.snapshot().list().await?;\n    \n    let last_digest = snapshots.first().unwrap().digest.as_ref();\n    let snapshot = client.snapshot().get(last_digest).await?.unwrap();\n    \n    let certificate = client\n        .certificate()\n        .verify_chain(&snapshot.certificate_hash)\n        .await?;\n    \n    // Note: the directory must already exist, and the user running this code must have read/write access to it.\n    let target_directory = Path::new(".");\n    client\n        .snapshot()\n        .download_unpack(&snapshot, target_directory)\n        .await?;\n\n    if let Err(e) = client.snapshot().add_statistics(&snapshot).await {\n        println!("Could not increment snapshot download statistics: {:?}", e);\n    }\n    \n    let message = MessageBuilder::new()\n        .compute_snapshot_message(&certificate, target_directory)\n        .await?;\n    assert!(certificate.match_message(&message));\n    \n    Ok(())\n}\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["You can read the complete ",(0,i.jsx)(t.a,{href:"https://mithril.network/rust-doc/mithril_client/index.html",children:"developer documentation"}),"."]})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},52571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=r(85893),n=r(11151),s=r(74866),a=r(85162);const l={unlisted:!0,hide_title:!0,hide_table_of_contents:!0},d=void 0,c={id:"networks-matrix",title:"networks-matrix",description:"Here is an updated list of all Mithril networks, including their configurations and current statuses:",source:"@site/root/networks-matrix.md",sourceDirName:".",slug:"/networks-matrix",permalink:"/doc/next/networks-matrix",draft:!1,unlisted:!0,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/networks-matrix.md",tags:[],version:"current",frontMatter:{unlisted:!0,hide_title:!0,hide_table_of_contents:!0}},o={},h=[{value:"<code>release-mainnet</code>",id:"release-mainnet",level:2},{value:"<code>release-preprod</code>",id:"release-preprod",level:2},{value:"<code>pre-release-preview</code>",id:"pre-release-preview",level:2},{value:"<code>testing-preview</code>",id:"testing-preview",level:2},{value:"<code>testing-sanchonet</code>",id:"testing-sanchonet",level:2}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Here is an updated list of all ",(0,i.jsx)(t.strong,{children:"Mithril networks"}),", including their configurations and current statuses:"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Last update: 07/21/2023"}),"\n"]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(a.Z,{value:"mainnet",label:"Mainnet",default:!0,children:[(0,i.jsx)(t.h2,{id:"release-mainnet",children:(0,i.jsx)(t.code,{children:"release-mainnet"})}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Information"}),(0,i.jsx)(t.th,{children:"-"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Mithril network"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"release-mainnet"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano network"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"mainnet"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano magic id"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"-"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Supported"})}),(0,i.jsxs)(t.td,{children:["Yes ","\u2714\ufe0f"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Status"})}),(0,i.jsx)(t.td,{children:"Beta \ud83d\udfe2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Aggregator endpoint"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://aggregator.release-mainnet.api.mithril.network/aggregator"})," ",(0,i.jsx)(t.a,{href:"https://aggregator.release-mainnet.api.mithril.network/aggregator",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Genesis verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-mainnet/genesis.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-mainnet/genesis.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader adapter type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cardano-chain"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader address"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-mainnet/era.addr"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-mainnet/era.addr",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-mainnet/era.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-mainnet/era.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Build from"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Latest release"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/releases/latest",children:"\u2197\ufe0f"})]})]})]})]})]}),(0,i.jsxs)(a.Z,{value:"preprod",label:"Preprod",children:[(0,i.jsx)(t.h2,{id:"release-preprod",children:(0,i.jsx)(t.code,{children:"release-preprod"})}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Information"}),(0,i.jsx)(t.th,{children:"-"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Mithril network"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"release-preprod"})," ",(0,i.jsx)(t.a,{href:"https://mithril.network/explorer?aggregator=https%3A%2F%2Faggregator.release-preprod.api.mithril.network%2Faggregator",children:"\ud83d\udd0e"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano network"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"preprod"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano magic Id"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Supported"})}),(0,i.jsxs)(t.td,{children:["Yes ","\u2714\ufe0f"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Status"})}),(0,i.jsx)(t.td,{children:"Release \ud83d\udfe2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Aggregator endpoint"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://aggregator.release-preprod.api.mithril.network/aggregator"})," ",(0,i.jsx)(t.a,{href:"https://aggregator.release-preprod.api.mithril.network/aggregator",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Genesis verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-preprod/genesis.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-preprod/genesis.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader adapter type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cardano-chain"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader address"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-preprod/era.addr"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-preprod/era.addr",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-preprod/era.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-preprod/era.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Build from"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Latest release"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/releases/latest",children:"\u2197\ufe0f"})]})]})]})]})]}),(0,i.jsxs)(a.Z,{value:"preview",label:"Preview",children:[(0,i.jsx)(t.h2,{id:"pre-release-preview",children:(0,i.jsx)(t.code,{children:"pre-release-preview"})}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Information"}),(0,i.jsx)(t.th,{children:"-"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Mithril network"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"pre-release-preview"})," ",(0,i.jsx)(t.a,{href:"https://mithril.network/explorer?aggregator=https%3A%2F%2Faggregator.pre-release-preview.api.mithril.network%2Faggregator",children:"\ud83d\udd0e"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano network"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"preview"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano magic Id"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Supported"})}),(0,i.jsxs)(t.td,{children:["Yes ","\u2714\ufe0f"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Status"})}),(0,i.jsx)(t.td,{children:"Pre-release \ud83d\udfe0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Aggregator endpoint"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://aggregator.pre-release-preview.api.mithril.network/aggregator"})," ",(0,i.jsx)(t.a,{href:"https://aggregator.pre-release-preview.api.mithril.network/aggregator",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Genesis verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/pre-release-preview/genesis.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/pre-release-preview/genesis.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader adapter type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cardano-chain"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader address"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/pre-release-preview/era.addr"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/pre-release-preview/era.addr",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/pre-release-preview/era.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/pre-release-preview/era.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Build from"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Latest pre-release"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/releases?q=pre",children:"\u2197\ufe0f"})]})]})]})]}),(0,i.jsx)("br",{}),(0,i.jsx)(t.h2,{id:"testing-preview",children:(0,i.jsx)(t.code,{children:"testing-preview"})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u26a0\ufe0f"," For devs only"]}),"\n"]}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Information"}),(0,i.jsx)(t.th,{children:"-"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Mithril network"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"testing-preview"})," ",(0,i.jsx)(t.a,{href:"https://mithril.network/explorer?aggregator=https%3A%2F%2Faggregator.testing-preview.api.mithril.network%2Faggregator",children:"\ud83d\udd0e"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano network"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"preview"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano magic Id"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Supported"})}),(0,i.jsxs)(t.td,{children:["Yes ","\u2714\ufe0f"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Status"})}),(0,i.jsx)(t.td,{children:"Unstable \ud83d\udd34"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Aggregator endpoint"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://aggregator.testing-preview.api.mithril.network/aggregator"})," ",(0,i.jsx)(t.a,{href:"https://aggregator.testing-preview.api.mithril.network/aggregator",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Genesis verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-preview/genesis.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-preview/genesis.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader adapter type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cardano-chain"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader address"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-preview/era.addr"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-preview/era.addr",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-preview/era.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-preview/era.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Build from"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Main branch"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/tree/main",children:"\u2197\ufe0f"})]})]})]})]})]}),(0,i.jsxs)(a.Z,{value:"sanchonet",label:"Sanchonet",children:[(0,i.jsx)(t.h2,{id:"testing-sanchonet",children:(0,i.jsx)(t.code,{children:"testing-sanchonet"})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u26a0\ufe0f"," For devs only"]}),"\n"]}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Information"}),(0,i.jsx)(t.th,{children:"-"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Mithril network"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"testing-sanchonet"})," ",(0,i.jsx)(t.a,{href:"https://mithril.network/explorer?aggregator=https%3A%2F%2Faggregator.testing-sanchonet.api.mithril.network%2Faggregator",children:"\ud83d\udd0e"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano network"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"sanchonet"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cardano magic Id"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"4"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Supported"})}),(0,i.jsxs)(t.td,{children:["Yes ","\u2714\ufe0f"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Status"})}),(0,i.jsx)(t.td,{children:"Unstable \ud83d\udd34"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Aggregator endpoint"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://aggregator.testing-sanchonet.api.mithril.network/aggregator"})," ",(0,i.jsx)(t.a,{href:"https://aggregator.testing-sanchonet.api.mithril.network/aggregator",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Genesis verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-sanchonet/genesis.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-sanchonet/genesis.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader adapter type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cardano-chain"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader address"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-sanchonet/era.addr"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-sanchonet/era.addr",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Era reader verification key"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-sanchonet/era.vkey"})," ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/testing-sanchonet/era.vkey",children:"\u2197\ufe0f"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Build from"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Main branch"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/tree/main",children:"\u2197\ufe0f"})]})]})]})]})]})]}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsx)(t.p,{children:"In this documentation, we use the following generic identifiers:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.strong,{children:"YOUR_CARDANO_NETWORK"})})," You need to replace this with the name of the network that runs on your Cardano node (eg, ",(0,i.jsx)(t.code,{children:"preprod"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.strong,{children:"YOUR_AGGREGATOR_ENDPOINT"})})," You need to replace this with the endpoint of an aggregator that runs on the Cardano network you are targeting (eg, ",(0,i.jsx)(t.code,{children:"https://aggregator.release-preprod.api.mithril.network/aggregator"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.strong,{children:"YOUR_GENESIS_VERIFICATION_KEY"})})," You need to replace this with the genesis verification key URL that runs on the Cardano network you are targeting (eg, ",(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-preprod/genesis.vkey"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.strong,{children:"YOUR_ERA_READER_ADAPTER_TYPE"})})," You need to replace this with the era reader adapter type used by the Mithril network you are targeting (eg, ",(0,i.jsx)(t.code,{children:"cardano-chain"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.strong,{children:"YOUR_ERA_READER_ADDRESS"})})," You need to replace this with the era reader address URL used by the Mithril network you are targeting (eg, ",(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/address.addr"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.strong,{children:"YOUR_ERA_READER_VERIFICATION_KEY"})})," You need to replace this with the era reader verification key URL used by the Mithril network you are targeting (eg, ",(0,i.jsx)(t.code,{children:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_era.vkey"}),")"]}),"\n"]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>a});r(67294);var i=r(90512);const n={tabItem:"tabItem_Ymn6"};var s=r(85893);function a(e){let{children:t,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(n.tabItem,a),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>v});var i=r(67294),n=r(90512),s=r(12466),a=r(16550),l=r(20469),d=r(91980),c=r(67392),o=r(50012);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:n}}=e;return{value:t,label:r,attributes:i,default:n}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d._X)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=u(e),[a,d]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[c,h]=p({queryString:r,groupId:n}),[j,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,o.Nk)(r);return[n,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),m=(()=>{const e=c??j;return x({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function b(e){let{className:t,block:r,selectedValue:i,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),o=e=>{const t=e.currentTarget,r=d.indexOf(t),n=l[r].value;n!==i&&(c(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>d.push(e),onKeyDown:h,onClick:o,...s,className:(0,n.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":i===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...e,...t}),(0,f.jsx)(w,{...e,...t})]})}function v(e){const t=(0,g.Z)();return(0,f.jsx)(k,{...e,children:h(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>a});var i=r(67294);const n={},s=i.createContext(n);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);