"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[182],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||c;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),o=r(9960),c=r(7984),i=r(6010),a="cardContainer_woeA",u="cardTitle_pNjP",l="cardDescription_qC_k",s=r(3919),p=r(5999);function f(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",a)},r)}function m(e){var t=e.href,r=e.icon,o=e.title,c=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",l),title:c},c))}function d(e){var t=e.item,r=(0,c.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,o=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:o,title:r.label,description:null==i?void 0:i.description})}function h(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items;return n.createElement("div",{className:"row"},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{key:t,item:e}))})))}},2191:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=r(5360),a=r(7984),u=["components"],l={sidebar_position:1},s="Core concepts",p={unversionedId:"core-concepts/index",id:"core-concepts/index",title:"Core concepts",description:"",source:"@site/root/core-concepts/index.md",sourceDirName:"core-concepts",slug:"/core-concepts/",permalink:"/doc/core-concepts/",editUrl:"https://github.com/input-output-hk/mithril/tree/main/docs/root/root/core-concepts/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"coreConceptsSidebar",next:{title:"Mithril Protocol",permalink:"/doc/core-concepts/mithril-protocol"}},f={},m=[],d={toc:m};function y(e){var t=e.components,r=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"core-concepts"},"Core concepts"),(0,c.kt)(i.Z,{items:(0,a.Vq)().filter((function(e){return"core-concepts/index"!=e.docId})),mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);