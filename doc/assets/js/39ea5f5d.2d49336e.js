"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[5193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Mithril Protocol\u2019s Mainnet Beta Launch",authors:[{name:"Mithril Team"}],tags:["spo","mithril signer","mithril relay","mainnet","production","beta","security"]},o=void 0,l={permalink:"/doc/dev-blog/2023/10/10/relay-security-advisory",source:"@site/blog/2023-10-10-relay-security-advisory.md",title:"Mithril Protocol\u2019s Mainnet Beta Launch",description:"Mithril relay could expose Cardano block producer internal IP when updated (Security Advisory)",date:"2023-10-10T00:00:00.000Z",formattedDate:"October 10, 2023",tags:[{label:"spo",permalink:"/doc/dev-blog/tags/spo"},{label:"mithril signer",permalink:"/doc/dev-blog/tags/mithril-signer"},{label:"mithril relay",permalink:"/doc/dev-blog/tags/mithril-relay"},{label:"mainnet",permalink:"/doc/dev-blog/tags/mainnet"},{label:"production",permalink:"/doc/dev-blog/tags/production"},{label:"beta",permalink:"/doc/dev-blog/tags/beta"},{label:"security",permalink:"/doc/dev-blog/tags/security"}],readingTime:.54,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{title:"Mithril Protocol\u2019s Mainnet Beta Launch",authors:[{name:"Mithril Team"}],tags:["spo","mithril signer","mithril relay","mainnet","production","beta","security"]},nextItem:{title:"Mithril Protocol\u2019s Mainnet Beta Launch",permalink:"/doc/dev-blog/2023/07/21/mainnet-beta-launch"}},c={authorsImageUrls:[void 0]},p=[{value:"Mithril relay could expose Cardano block producer internal IP when updated (Security Advisory)",id:"mithril-relay-could-expose-cardano-block-producer-internal-ip-when-updated-security-advisory",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"mithril-relay-could-expose-cardano-block-producer-internal-ip-when-updated-security-advisory"},"Mithril relay could expose Cardano block producer internal IP when updated (Security Advisory)"),(0,i.kt)("p",null,"The Mithril team has published a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq"},"security advisory")," to destination of SPOs running a Mithril signer/relay on the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet")," infrastructure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Identifier"),": GHSA-9m3h-72xj-x2gq"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Title"),": Mithril relay could expose Cardano block producer internal IP when updated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Location"),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq"},"https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Severity"),": High (7.2/10)")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"We strongly encourage all the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet")," SPOs to update the listening port of their ",(0,i.kt)("strong",{parentName:"p"},"Mithril relay")," in order to prevent the issue, with the process explained in the ",(0,i.kt)("strong",{parentName:"p"},"Workarounds")," section of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq"},"security advisory"),".")),(0,i.kt)("p",null,"Feel free to reach out to us on the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/5kaErDKDRq"},"Discord channel")," for questions and/or help."))}d.isMDXComponent=!0}}]);