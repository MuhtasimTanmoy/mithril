"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[433],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return a?i.createElement(m,r(r({ref:t},h),{},{components:a})):i.createElement(m,r({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8089:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=a(7462),n=a(3366),o=(a(7294),a(3905)),r=["components"],l={title:"Milestone Report n\xb01"},s="Milestone Report #1",c={permalink:"/doc/milestones/2022-01-report",source:"@site/milestones/2022-01-report.md",title:"Milestone Report n\xb01",description:"This document is a summary of the situation of the Mithril project as of January 2022. It aims at providing a",date:"2022-04-21T14:18:38.000Z",formattedDate:"April 21, 2022",tags:[],readingTime:14.11,truncated:!1,authors:[],frontMatter:{title:"Milestone Report n\xb01"}},h={authorsImageUrls:[]},u=[{value:"Code",id:"code",level:2},{value:"Mithril library",id:"mithril-library",level:3},{value:"Performance &amp; Optimisations",id:"performance--optimisations",level:4},{value:"Go Node",id:"go-node",level:3},{value:"Performance",id:"performance",level:4},{value:"Initial Scope",id:"initial-scope",level:2},{value:"Risks",id:"risks",level:2},{value:"Takeaways",id:"takeaways",level:2}],p={toc:u};function d(e){var t=e.components,l=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document is a summary of the situation of the Mithril project as of January 2022. It aims at providing a\ncomprehensive overview of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What's been done,"),(0,o.kt)("li",{parentName:"ul"},"What conclusions we can draw from the various efforts undertaken,"),(0,o.kt)("li",{parentName:"ul"},"What open questions remain, and"),(0,o.kt)("li",{parentName:"ul"},"What could be the next steps.")),(0,o.kt)("h1",{id:"current-state"},"Current State"),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("h3",{id:"mithril-library"},"Mithril library"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mithril core library has been developed mainly by Galois through September and October 2021 (last commit\nfrom ",(0,o.kt)("inlineCode",{parentName:"li"},"abakst@galois.com")," is from November 2).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The library weighs in at about 25K LOC"))),(0,o.kt)("li",{parentName:"ul"},"Development has been monitored closely by I\xf1igo and Pyrros who reviewed all PRs and also provided significant\ncontributions in particular to provide some polishing on:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Unit and integration tests"),(0,o.kt)("li",{parentName:"ul"},"C API,"))),(0,o.kt)("li",{parentName:"ul"},"The library exposes a C API for all its features and data structures allowing client code to manage the whole\nprotocol. It is built and packaged as a dynamically linked ",(0,o.kt)("inlineCode",{parentName:"li"},"libmithril.so")," which can then linked against by thirdparty\ncode. It's been tested with Go when developing the Mithril node"),(0,o.kt)("li",{parentName:"ul"},"The library is throughly tested thanks to:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A large set of unit and property-based tests for individual functions and features (code coverage is 68.36%, with\n903/1321 lines covered)"),(0,o.kt)("li",{parentName:"ul"},"Integration tests demonstrating the full protocol in Rust,"),(0,o.kt)("li",{parentName:"ul"},"C tests using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/googletest"},"gtest")," checking C API and integration with the core Rust\nlibrary,"),(0,o.kt)("li",{parentName:"ul"},"Tests are run in\nthe ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/tree/main/.github/workflowss/ci.yml"},"Continuous Integration"),"\nprocess, both for Rust, C and Go parts,"))),(0,o.kt)("li",{parentName:"ul"},'It is lacking user-facing "Get started" style documentation but the code is properly documented and\nthe ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/tree/main/mithril-core/examples"},"examples/")," directory contains several\ndetailed examples covering the major use cases for the library.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Documentation of the library is\npublished ",(0,o.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/mithril/mithril-core/doc/mithril/index.html"},"online")))),(0,o.kt)("li",{parentName:"ul"},"Library contained an implementation Ad-hoc Threshold Multi Signatures for use in Sidechains. It has now moved to\nits ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/atms"},"own repo"),".")),(0,o.kt)("h4",{id:"performance--optimisations"},"Performance & Optimisations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The library is single-threaded, no effort has been put into parallelizing any of the protocol's operations. However,\nthe protocol's state is maintained in data structures that share nothing (eg. ",(0,o.kt)("em",{parentName:"li"},"objects"),") so parallelisation is\ntrvially achievable by duplicating data and running signing or other functions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Proper parallelisation assessment still needs to be done in order to understand how the library can scale"))),(0,o.kt)("li",{parentName:"ul"},"The library comes with some micro-benchmarks for the various atomic operations provided.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The most expensive operation is the key registration process which is done only once, to setup the protocol's\nstate."),(0,o.kt)("li",{parentName:"ul"},"Signature verification for 256 signers takes on average 3.6ms")))),(0,o.kt)("h3",{id:"go-node"},"Go Node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Mithril node has been developed by Idyllic Vision in Go",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It's about 3K LOC"))),(0,o.kt)("li",{parentName:"ul"},"This node was intended as a ",(0,o.kt)("em",{parentName:"li"},"Proof-of-Concept")," development to validate the feasability of running Mithril (full) node\nas a separate (Layer 2) solution. As such, the goal of this development was to demonstrate the Mithril library can be\nused by something else than cardano-node to produce signed certificates for some realistically sized UTXO set"),(0,o.kt)("li",{parentName:"ul"},"The target architecture has been documented in the ",(0,o.kt)("a",{parentName:"li",href:"/doc/topologies/mithril-architecture"},"Mithril Architecture"),"\ndocument"),(0,o.kt)("li",{parentName:"ul"},"The actual implementation has the following features:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The signature generation process is ",(0,o.kt)("em",{parentName:"li"},"leader-based"),": The signing process is initiated by a leader that creates a\nmessage to sign and requests signatures from the other participants, then aggregates the result and broadcast\nagain the resulting certificates"),(0,o.kt)("li",{parentName:"ul"},"The data is retrieved from a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync"},"db-sync"),"\npopulated ",(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"Postgres")," database instance (data is extracted from a Testnet)"),(0,o.kt)("li",{parentName:"ul"},"The Mithril nodes uses the same DB to store the produced certificates"),(0,o.kt)("li",{parentName:"ul"},"The key generation and key registration process is handled in the Rust library but the whole configured signing ",(0,o.kt)("em",{parentName:"li"},"\nClerk")," can be serialised on disk so that node can start from a known configuration"),(0,o.kt)("li",{parentName:"ul"},"The stakes distribution is statically defined in a configuration file and does not change over the life of the\nnodes"),(0,o.kt)("li",{parentName:"ul"},"The node exposes a classical REST API that allows clients to retrieve certificates, certificate chains and\nassociated data, eg. the UTXO"),(0,o.kt)("li",{parentName:"ul"},"UTXO are stored in a Merkle Tree and can be retrieved individually along with associated proof. The certificate\nsigns only the root of the Merkle Tree, thus minimising the amount of data clients have to process to validate\nthem")))),(0,o.kt)("h4",{id:"performance"},"Performance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At this stage it was not deemed necessary to setup a full blown performance analysis of the nodes"),(0,o.kt)("li",{parentName:"ul"},"Basic benchmarks run have shown that a node can produce an aggregate multisignature for 10 M UTXO in 3'45''",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"About half of this execution time is spent querying and retrieving the data from the DB"))),(0,o.kt)("li",{parentName:"ul"},"There has been no attempt so far at scaling the number of nodes but given what we know from the behaviour of the\nlibrary, it's pretty clear the limiting factor will be the network protocol")),(0,o.kt)("h1",{id:"use-cases"},"Use Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In parallel with PoC development we have been working with Product Dpt on the use cases for Mithril in order to\nunderstand what a path to productisation could look like.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Lightwallet workshop that occured early November was an opportunity to better understand the Lightwallet\nrequirements for Mithril, eg. enabling fast and trustless bootstrap of wallets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We conducted a series of ",(0,o.kt)("a",{parentName:"p",href:"https://www.jpattonassociates.com/story-mapping/"},"Story Mapping")," sessions from November 2021\nuntil early January 2022 in order to delve into some use cases in more details. These sessions were framed in the\ncontext of implementing Mithril for fast bootstrapping of Daedalus.\n",(0,o.kt)("img",{src:a(8082).Z,width:"4666",height:"3428"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'We distinguished 3 kind of "mithril nodes":'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ones that run the signing and certificate issuance protocol, run by SPOs,"),(0,o.kt)("li",{parentName:"ul"},"The so-called ",(0,o.kt)("em",{parentName:"li"},"Mithril Client")," nodes that are actually full Cardano nodes with the capability to retrieve and\nvalidate certificates,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Peer nodes")," which are full Cardano nodes storing and providing certificates"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'These sessions allowed us to uncover important aspects of the integration of Mithril in the Daedalus wallet in order\nto provide faster "boot" time. Some questions/issues/puzzles that were raised:'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"How does the certificate chain is bootstrapped? We'd need to have root certificate signed by genesis keys?"),(0,o.kt)("li",{parentName:"ul"},"To speed up the time it takes for a user to retrieve her wallet's balance, she needs to filter the UTXO set by the\naddresses of interest, which implies the wallet knows those,"),(0,o.kt)("li",{parentName:"ul"},"It's unclear if Mithril will help in reducing the amount of resources needed to run a Daedalus wallet,"),(0,o.kt)("li",{parentName:"ul"},"The main (top) story line, ",(0,o.kt)("em",{parentName:"li"},'A user can retrieve her wallet balance "quickly"'),", already involves quite a few actors\nand will require significant engineering effort and changes to existing network."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We have started doing similar exercise in the Lightwallet case but it's very early draft"))),(0,o.kt)("h1",{id:"assessment"},"Assessment"),(0,o.kt)("h2",{id:"initial-scope"},"Initial Scope"),(0,o.kt)("p",null,"Here is a reminder of the goals for this project as was defined in the ",(0,o.kt)("em",{parentName:"p"},"Business Case"),"."),(0,o.kt)("p",null,"Prototype implementation of the Mithril signature scheme; not be usable in production without a moderate amount of\nrewriting, documentation, or refactoring. In summary is a solution for fast-bootstrappable wallet implementation."),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Prototype implementation of the primitives, using well-maintained open source efforts where applicable,\nimplemented in Rust"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Prototype implementation of the concatenation-based protocol from the paper"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Mithril is (for now) exclusively a second layer solution with no new ledger rules to be introduced;"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SPOs will certify the latest UTxO set that the wallet can use at a certain frequency, once per epoch for example;",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Not really done by SPOs but the implemented node does this certification process"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SPOs will store the latest UTxO set (IPFS or other solutions)",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"UTXO set is served from db-sync which already contains it"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The wallet will trust the SPO\u2019s certificate to bootstrap from it, downloading the latest UTxO set, and follow the\nchain then;"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The wallet will not be able to do history lookup, just validate new transactions;",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"No work has been done with a real wallet but we have evidence that a Mithril-enabled client can be built easily using the same library and validate (chain of) certificates"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Implement the ATMS cryptographic primitive from our PoS Sidechains paper.")),(0,o.kt)("p",null,"Build Network and the data storage stacks (node) and integrate the mithril signature scheme:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Precise scope was supposed to be refined after a "feasibility study". We can assume the PoC done by IdyllicVision fills this gap')),(0,o.kt)("h2",{id:"risks"},"Risks"),(0,o.kt)("p",null,"The following risks had been identified and we can check whether or not they have been addressed:"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","The technical architecture that will be sufficient for the mithril node is not yet well understood. We need to\ncreate a node that is sufficient for the purpose of this project. We need to learn the lessons of Hydra and use the\nmost basic structure for the node (impacts delivery timelines and costs).",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"We have a better understanding of what it means to build a standalone layer 2 mithril node. From this early experiment, it seems however this might not be the best solution for deployment of Mithril at the Cardano scale"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","It is not known how the fast synchronisation will work with the full node wallets, light wallets, SPOs, exchanges\nand other node users. This needs to be assessed by the product leadership to understand the utility of this technology\nfor Cardano and other platforms",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"This has been addressed partially in our User Story Mapping sessions"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Need to understand how prototyping output works with our formal methods approach (this is not clear)"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","If we at some point want to incorporate the rust library with the cryptographic primitives in Cardano, we will\nhave to invest a substantial and unknown effort to include another language in our build systems (CI including cross\ncompilation, and developer builds). Otherwise, it's possible to get the impression that that would be easy, given that\nwe will get a Haskell API.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Having deliberately implemented library and node in 2 different languages gave us a good understanding of the kind of integration problems we could run in. Notwithstanding the issue of the skillset needed to maintain polyglot systems, integration has been pretty straightforward. Of course there's a lot to be done to productise this process but it seems reasonable to expect we should be able to use the Mithril library from any C-FFI enabled language, including Haskell, straightforwardly"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","It is not clear what is going to happen outside of the PoC and this needs to be defined",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"This document tries to address that risk in the last section"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Scope is not clear with some stakeholders believing that testing of the prototype should include running in a\nbrowser. In this respect it is unclear why we are building a prototype in scala and rust if the end target is running\nin a browser \u201cOne of the main use-cases for this product is "security of a full node and speed of a light client". I\'m\nnot expecting this version to be very performant, but I do expect it to run on a mobile device (including a phone).\u201d',(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"This has not been addressed at all. Given the specificity of the Mithril crypto primitives this should be"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'The expectation of the wallet user of "full node security and lightwallet experience" is definitely not met by\nMirthril according to the product team. Doing some basic research they assert that in bitcoin an SPV wallet would\nrequire 100Mb of storage and 512Mb memory. With the Mithril proposal a "similar" wallet would need a very low amount\nof storage(the paper was eluding to about 142Kb) but ~8Gb of memory. As part of this project we need to understand\nnext steps in order to meet this expectation.',(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"This has been addressed tangentially as it's also not clear how Mithril would be used from a lightwallet client perspective"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","We need to identify internal resources to sanity check and maintain this. The choice of rust as a language will\ncause a problem for us because of resource constraints in this area",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Inigo did a great job at monitoring development of the library and improving it. Rust is a language with a growing community and interest from a lot of developers. From this PoC phase I don't see why we should not be able to either hire rust specialists should we need to, or have internal developers learn enough of rust to be able to maintain and extend the library."))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Mithril (fast syncing) use cases include spo\u2019s, consumers, exchanges as well as main chain and side chain. We have\nnot articulated all of the use cases and need to do so in the prototyping stage for a common understanding of\nexpectations. This does not mean we will achieve all of them in prototyping but at least we understand what we would\nlike the technology to do.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"This was partially addressed by the Lightwallet workshop and User story mapping sessions but of course needs to be ramped up"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","We do not know who the customer is for the prototyping output and hence have no idea of who can \u201caccept\u201d or agree\nthe project has met its goals. This is important if this is to be a success.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The main goal of this PoC phase was to assess technical feasibility and evaluate possible architecture of the system using an external node.")))),(0,o.kt)("h2",{id:"takeaways"},"Takeaways"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The main takeaway of this stage of the project is obviously that the Mithril protocol ",(0,o.kt)("em",{parentName:"li"},"works")," and can be used to\nprovide a chain of certificates on a UTXO Merkle-Tree in such a way that clients can download only a fraction of the\nUTXO set confidently and verify it"),(0,o.kt)("li",{parentName:"ul"},"Implementing the library in Rust and using it from Go was relatively straightforward. The rust library exposes a plain\nC interface which makes it easy to integrate in any language that can talk to C which really means ",(0,o.kt)("em",{parentName:"li"},"any")," language (\nexcept Javascript inside a browser)"),(0,o.kt)("li",{parentName:"ul"},"Running the Mithril signing protocol requires significant resources (retrieving and storing the UTXO, connecting to\nand managing networking with peer nodes, storing and delivering certificates) for which there is currently no\nincentive"),(0,o.kt)("li",{parentName:"ul"},"We have barely explored the question of the Mithril network. In the current Go node implementation, nodes are\nconnected using ",(0,o.kt)("a",{parentName:"li",href:"https://libp2p.io/"},"libp2p")," but we have no idea how this would scale nor whether it fits our needs,\nwhich are themselves unclear.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The biggest issue we foresee is that Mithril will only ever be useful if the vast majority of SPOs sign and serve\ncertificates, which means the network of signers has to be mostly the same as the network of block producers.\nRecreating another network alongside the existing Cardano network seems a huge hurdle to overcome"))),(0,o.kt)("li",{parentName:"ul"},'The main problem of a pure "Layer 2" (independent) solution for Mithril is that integration with Cardano network layer\nmight be hard',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Mithril node needs access to the UTXO set ",(0,o.kt)("em",{parentName:"li"},"and")," the stake distribution to provide certificates. This can be\nqueried from either db-sync or directly from the node using existing protocol."))),(0,o.kt)("li",{parentName:"ul"},"Preliminary discussion about the Daedalus use case have shown that it's extremely useful to tie the development of\nMithril to concrete usage scenario in order to make sure the built prototype touches on all the thorny points inherent\nwith such far reaching ideas")),(0,o.kt)("h1",{id:"next-steps"},"Next steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Settle on a single concrete goal/use case",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Having a single goal will help achieve concrete results earlier"),(0,o.kt)("li",{parentName:"ul"},'Identify clearly the various Mithril "Users" in the context of this broad use case'),(0,o.kt)("li",{parentName:"ul"},"Possible single goals are:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Bootstrap Daedalus/full-node based wallet faster"),(0,o.kt)("li",{parentName:"ul"},"Bootstrap SPOs/Exchanges full nodes faster"),(0,o.kt)("li",{parentName:"ul"},"Enable trustless lightwallet"))))),(0,o.kt)("li",{parentName:"ol"},"Setup a proper small team with product and engineering to start building solution iteratively"),(0,o.kt)("li",{parentName:"ol"},"Explore alternative architectures where data acquisition about the state of the network does not go through db-sync\nand which could have lighter footprint",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Still using a standalone node but using node APIs (ChainSync protocol, Ogmios) to retrieve its state and\nmaintaining UTXO set in the node"),(0,o.kt)("li",{parentName:"ul"},"Tighter integration within the node itself, for example by piggybacking on the network layer. This is predicated\non capabilities to not interfere with other node's functions/components (eg. consensus, ledger)"))),(0,o.kt)("li",{parentName:"ol"},"Designe proper networking solution for connecting Mithril nodes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Networking is of course highly dependent on use case"))),(0,o.kt)("li",{parentName:"ol"},"Explore/Provide browser-based solution for Mithril certificates validation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We don't need a full-blown Mithril library but JS clients need to be able to validate chain of mithril\ncertificates inside a browser context"),(0,o.kt)("li",{parentName:"ul"},"This is predicated on the actual use case defined in 1.: If we only want to address"))),(0,o.kt)("li",{parentName:"ol"},"Productise separate signing/verification libraries/tools",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Having usable and well-documented libraries and tools will make it easier to build various clients and higher\nlevel tools on top of it"))),(0,o.kt)("li",{parentName:"ol"},"Work on ",(0,o.kt)("a",{parentName:"li",href:"/doc/test-lab/test-lab-overview"},"Mithril Test Lab")," to build a semi-formal ETE testing solution to validate\nthe protocol's implementation independently of the technology")))}d.isMDXComponent=!0},8082:function(e,t,a){t.Z=a.p+"assets/images/story-mapping-bd60049493462b9e16c11de9d63eacfc.jpg"}}]);