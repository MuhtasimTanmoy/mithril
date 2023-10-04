"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[2863],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},h=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(i),u=n,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||a;return i?r.createElement(m,o(o({ref:t},h),{},{components:i})):r.createElement(m,o({ref:t},h))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},26841:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const a={title:"Stake Distribution retrieval fixed",authors:[{name:"Mithril Team"}],tags:["stake-distribution","certificate"]},o=void 0,s={permalink:"/doc/dev-blog/2022/09/13/stake-distribution-retrieval",source:"@site/blog/2022-09-13-stake-distribution-retrieval.md",title:"Stake Distribution retrieval fixed",description:"Update the computation now relies on the new cardano-cli query stake-snapshot --all-stake-pools command that retrieves the Stake Distribution all at once and that is way faster. Prior versions of the Cardano node 1.35+ are backward compatible and will keep implementing the algorithm detailed below.",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"stake-distribution",permalink:"/doc/dev-blog/tags/stake-distribution"},{label:"certificate",permalink:"/doc/dev-blog/tags/certificate"}],readingTime:1.925,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{title:"Stake Distribution retrieval fixed",authors:[{name:"Mithril Team"}],tags:["stake-distribution","certificate"]},prevItem:{title:"Mithril internal stores switch to SQLite.",permalink:"/doc/dev-blog/2022/09/14/sqlite-stores"},nextItem:{title:"Signers list computation in Certificates",permalink:"/doc/dev-blog/2022/09/12/certificate-signers-list"}},l={authorsImageUrls:[void 0]},p=[{value:"The way the Mithril nodes retrieve the Stake Distribution is changing",id:"the-way-the-mithril-nodes-retrieve-the-stake-distribution-is-changing",level:3}],h={toc:p},d="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Update"),": The Stake Distribution computation is evolving with the release of Cardano node ",(0,n.kt)("inlineCode",{parentName:"p"},"8.0.0"),": the computation now relies on the new ",(0,n.kt)("inlineCode",{parentName:"p"},"cardano-cli query stake-snapshot --all-stake-pools")," command that retrieves the Stake Distribution all at once and that is way faster. Prior versions of the Cardano node ",(0,n.kt)("inlineCode",{parentName:"p"},"1.35+")," are backward compatible and will keep implementing the algorithm detailed below."),(0,n.kt)("h3",{id:"the-way-the-mithril-nodes-retrieve-the-stake-distribution-is-changing"},"The way the Mithril nodes retrieve the Stake Distribution is changing"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"PR"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Fix Stake Distribution retrieval")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/pull/499"},"#499")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Issue"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Stake distribution discrepancy")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/issues/497"},"#497")),(0,n.kt)("p",null,"We have noticed that the way the Mithril nodes computed the ",(0,n.kt)("inlineCode",{parentName:"p"},"Stake Distribution")," was erroneous: the epoch that was used to make the computation was the ",(0,n.kt)("strong",{parentName:"p"},"current epoch")," instead of the ",(0,n.kt)("strong",{parentName:"p"},"previous epoch"),". This has lead to some de-synchronization between the Signers and the hosted GCP Aggregator for a few epochs."),(0,n.kt)("p",null,"Indeed, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Stake Distribution")," retrieved from the Cardano node depended on the time at which it was done: the nodes where having differents values that prevented them from being able to work together to produce valid multi-signatures. The problem is related to the epoch that is used (",(0,n.kt)("strong",{parentName:"p"},"current epoch"),") to make the computation of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Stake Distribution")," when the ",(0,n.kt)("inlineCode",{parentName:"p"},"cardano-cli query stake-distribution")," command is ran, whereas the Mithril protocol needs to work with the ",(0,n.kt)("strong",{parentName:"p"},"previous epoch"),"."),(0,n.kt)("p",null,"A workaround is being implemented in this fix that will compute differently the ",(0,n.kt)("inlineCode",{parentName:"p"},"Stake Distribution")," to target the ",(0,n.kt)("strong",{parentName:"p"},"previous epoch"),". To do so, the Stake value that is now retrieved sequentially for each pool available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cardano-cli query stake-distribution")," by using the command ",(0,n.kt)("inlineCode",{parentName:"p"},"cardano-cli query stake-snapshot --stake-pool-id **pool-id*"),". This guarantees that the ",(0,n.kt)("inlineCode",{parentName:"p"},"Stake Distribution")," is computed deterministically on all nodes of the Mithril Network."),(0,n.kt)("p",null,"We will continue our efforts to enhance the way the ",(0,n.kt)("inlineCode",{parentName:"p"},"Stake Distribution")," is retrieved in the future, and so that it works smoothly on the ",(0,n.kt)("inlineCode",{parentName:"p"},"mainnet")," (where the numbers of pools is bigger ",(0,n.kt)("inlineCode",{parentName:"p"},"~3,000")," vs ",(0,n.kt)("inlineCode",{parentName:"p"},"~100")," on the ",(0,n.kt)("inlineCode",{parentName:"p"},"preview")," network)."),(0,n.kt)("p",null,"The SPOs need to recompile their Signer node in order to compute correctly the ",(0,n.kt)("inlineCode",{parentName:"p"},"Stake Distributions")," on their node (as in this ",(0,n.kt)("a",{parentName:"p",href:"https://mithril.network/doc/manual/getting-started/run-signer-node"},"guide"),").\nIt should then take up to ",(0,n.kt)("inlineCode",{parentName:"p"},"2")," epochs before they are able to successfully register their individual signatures with the Aggregator."),(0,n.kt)("p",null,"More information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"Certificate Chain")," and the epochs retrieval requirements is available ",(0,n.kt)("a",{parentName:"p",href:"https://mithril.network/doc/mithril/mithril-protocol/certificates"},"here"),"."),(0,n.kt)("p",null,"Feel free to reach out to us on the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/5kaErDKDRq"},"Discord channel")," for questions and/or help."))}c.isMDXComponent=!0}}]);