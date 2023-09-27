"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[9052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={slug:5,title:"5. Use rfc3339 for date formatting \n",authors:[{name:"Mithril Team"}],tags:["Accepted"],date:new Date("2023-06-21T00:00:00.000Z")},i=void 0,l={permalink:"/doc/adr/5",source:"@site/adr/005-use-rfc3339-for-dates.md",title:"5. Use rfc3339 for date formatting \n",description:"Status",date:"2023-06-21T00:00:00.000Z",formattedDate:"June 21, 2023",tags:[{label:"Accepted",permalink:"/doc/adr/tags/accepted"}],readingTime:1.18,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{slug:"5",title:"5. Use rfc3339 for date formatting \n",authors:[{name:"Mithril Team"}],tags:["Accepted"],date:"2023-06-21T00:00:00.000Z"},prevItem:{title:"6. Errors implementation Standard\n",permalink:"/doc/adr/6"},nextItem:{title:"4. Mithril Network Upgrade Strategy\n",permalink:"/doc/adr/4"}},s={authorsImageUrls:[void 0]},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Previously, on the Mithril project we did not have a preferred format for the dates in our applications, leading to\nmultiple formats being used."),(0,a.kt)("p",null,"For example when querying a certificate from an aggregator, the ",(0,a.kt)("inlineCode",{parentName:"p"},"initiated_at")," field did not specify the timezone,\ntimezone that could be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"sealed_at")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initiated_at": "2023-05-26T00:02:23",\n  "sealed_at": "2023-05-26T00:03:23.998753492Z"\n}\n')),(0,a.kt)("p",null,"Same problem in our databases where a date could be stored without timezone and milliseconds (ie: ",(0,a.kt)("inlineCode",{parentName:"p"},"2023-06-13 16:35:28"),")\nin one table column and with them in another (ie: ",(0,a.kt)("inlineCode",{parentName:"p"},"2023-06-13T16:35:28.143292875Z"),")."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc3339"},"RFC 3339")," is a widely used, easily readable, mostly numeric (no\ntranslation is needed to parse the day or the month), format. Also, it always includes the timezone meaning that our\nclient can convert such date to their local time if needed."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Therefore")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We commit to use ",(0,a.kt)("strong",{parentName:"li"},"RFC 3339")," compatible date and time whenever we need to store or show a date and time.")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All dates and time must use a dedicated type in the application, ie: the ",(0,a.kt)("inlineCode",{parentName:"li"},"DateTime<Utc>")," type from\n",(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/chrono"},"chrono")," crate.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This means that dates must ",(0,a.kt)("strong",{parentName:"li"},"never")," be stored in our types using Strings."))),(0,a.kt)("li",{parentName:"ul"},"Internally, we will always use the ",(0,a.kt)("strong",{parentName:"li"},"UTC timezone"),", to avoid useless conversions between timezones."),(0,a.kt)("li",{parentName:"ul"},"Users or scripts querying dates from our applications or from our databases will be able to parse all of them using\nthe same format.")))}u.isMDXComponent=!0}}]);