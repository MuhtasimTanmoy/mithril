"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[6365],{83003:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(85893),r=i(11151);const s={sidebar_position:1,sidebar_label:"Welcome"},o="User manual",l={id:"manual/welcome",title:"User manual",description:"Welcome to the Mithril user manual!",source:"@site/versioned_docs/version-maintained/manual/welcome.md",sourceDirName:"manual",slug:"/manual/welcome",permalink:"/doc/manual/welcome",draft:!1,unlisted:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/website/root/manual/welcome.md",tags:[],version:"maintained",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Welcome"},sidebar:"docSideBar",next:{title:"Getting Started",permalink:"/doc/category/getting-started"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Get started",id:"get-started",level:2},{value:"Read the user manual",id:"read-the-user-manual",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"user-manual",children:"User manual"}),"\n",(0,t.jsxs)(n.p,{children:["Welcome to the ",(0,t.jsx)(n.strong,{children:"Mithril"})," user manual!"]}),"\n",(0,t.jsxs)(n.p,{children:["Let's discover ",(0,t.jsx)(n.strong,{children:"Mithril in less than five minutes"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"Mithril network"})," consists of three main components:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mithril aggregator"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This node coordinates the production of the Cardano snapshot archives, working alongside Mithril signer and Cardano nodes to generate associated certificates using Mithril multi-signatures."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mithril signer"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This node is responsible for producing individual signatures, which are then combined into a multi-signature by the Mithril aggregator. It operates in conjunction with a Cardano node (run by a stake pool operator (SPO)) holding stake in the network."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mithril client"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This node verifies and restores a snapshot, facilitating lightning-fast bootstrapping of a Cardano full node. It plays a crucial role in ensuring the efficiency of the network."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more information about the ",(0,t.jsx)(n.strong,{children:"Mithril protocol"}),", see this section ",(0,t.jsx)(n.a,{href:"/doc/mithril/intro",children:"about Mithril"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,t.jsx)(n.p,{children:"To get started with the setup, make sure you have the following components and tools:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A Linux (preferred) or macOS computer"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"https://www.rust-lang.org/learn/get-started",children:"correctly configured"})," Rust toolchain (latest stable version)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A recent version of ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker Engine"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A recent version of ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A recent version of ",(0,t.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:(0,t.jsx)(n.code,{children:"jq"})})," (1.6+)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Having these requirements in place will enable you to proceed smoothly with the setup and configuration for your project."}),"\n",(0,t.jsx)(n.h2,{id:"read-the-user-manual",children:"Read the user manual"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.a,{href:"/doc/category/getting-started",children:(0,t.jsx)(n.strong,{children:"Getting started"})})," guide in the user manual, you will find tutorials for:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83c\udd95"," ",(0,t.jsx)(n.a,{href:"/doc/manual/getting-started/bootstrap-cardano-node",children:"Bootstrapping a Cardano node"})," on ",(0,t.jsx)(n.code,{children:"testnet"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/doc/manual/getting-started/run-signer-node",children:"Running a Mithril signer node as an SPO"})," on ",(0,t.jsx)(n.code,{children:"testnet"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/doc/manual/getting-started/run-mithril-devnet",children:"Running a private Mithril network"})," on ",(0,t.jsx)(n.code,{children:"devnet"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.a,{href:"/doc/category/developer-docs",children:(0,t.jsx)(n.strong,{children:"Developer docs"})}),", you will find documentation for:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Mithril network nodes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/doc/manual/developer-docs/nodes/mithril-aggregator",children:(0,t.jsx)(n.strong,{children:"Mithril aggregator node"})})," developer documentation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/doc/manual/developer-docs/nodes/mithril-signer",children:(0,t.jsx)(n.strong,{children:"Mithril signer node"})})," developer documentation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/doc/manual/developer-docs/nodes/mithril-client",children:(0,t.jsx)(n.strong,{children:"Mithril client node"})})," developer documentation"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/doc/manual/developer-docs/references",children:"API reference"})," guide."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["If you need any assistance, don't hesitate to contact the ",(0,t.jsx)(n.strong,{children:"Mithril"})," team:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/discussions",children:"GitHub discussions"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://cardano.stackexchange.com/questions/tagged/mithril",children:"Stack Exchange"})}),"\n"]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(67294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);