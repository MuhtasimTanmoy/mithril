"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[6174],{80439:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(85893),i=t(3905);const o={title:"Mithril signer service new configuration",authors:[{name:"Mithril Team"}],tags:["spo","mithril signer","production"]},s=void 0,a={permalink:"/doc/dev-blog/2024/01/03/signer-service-new-configuration",source:"@site/blog/2024-01-03-signer-service-new-configuration.md",title:"Mithril signer service new configuration",description:"The Mithril signer node service recommended configuration is updated",date:"2024-01-03T00:00:00.000Z",formattedDate:"January 3, 2024",tags:[{label:"spo",permalink:"/doc/dev-blog/tags/spo"},{label:"mithril signer",permalink:"/doc/dev-blog/tags/mithril-signer"},{label:"production",permalink:"/doc/dev-blog/tags/production"}],readingTime:.905,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{title:"Mithril signer service new configuration",authors:[{name:"Mithril Team"}],tags:["spo","mithril signer","production"]},unlisted:!1,prevItem:{title:"Mithril client npm package is released!",permalink:"/doc/dev-blog/2024/01/23/mithril-client-npm-package-released"},nextItem:{title:"Mithril client library is released!",permalink:"/doc/dev-blog/2023/11/27/mithril-client-library-released"}},c={authorsImageUrls:[void 0]},l=[{value:"The Mithril signer node service recommended configuration is updated",id:"the-mithril-signer-node-service-recommended-configuration-is-updated",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"the-mithril-signer-node-service-recommended-configuration-is-updated",children:"The Mithril signer node service recommended configuration is updated"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"PR"}),": ",(0,n.jsx)(r.code,{children:"Fix signer service recommended configuration"})," ",(0,n.jsx)(r.a,{href:"https://github.com/input-output-hk/mithril/pull/1419",children:"#1419"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Issue"}),": ",(0,n.jsx)(r.code,{children:"Fix signer node service setup"})," ",(0,n.jsx)(r.a,{href:"https://github.com/input-output-hk/mithril/issues/1404",children:"#1404"})]}),"\n",(0,n.jsx)(r.p,{children:"The previous recommended configuration proposed a service restart frequency which was too high. When the service was restarted, and if the Cardano node was not ready yet, the service tried to restart too many times in a short period: thus the service just failed and the service had to be started manually after the Cardano node is up and ready. This lead to some SPOs skipping registrations for some epochs."}),"\n",(0,n.jsxs)(r.p,{children:["The duration before restarting the service is increased to 60s: ",(0,n.jsx)(r.code,{children:"RestartSec=60"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Below is the new recommended configuration:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"[Unit]\nDescription=Mithril signer service\nStartLimitIntervalSec=0\n\n[Service]\nType=simple\nRestart=always\nRestartSec=60\nUser=cardano\nEnvironmentFile=/opt/mithril/mithril-signer.env\nExecStart=/opt/mithril/mithril-signer -vvv\n\n[Install]\nWantedBy=multi-user.target\nEOF'\n"})}),"\n",(0,n.jsxs)(r.p,{children:["We highly recommend to update your existing configuration file (",(0,n.jsx)(r.code,{children:"/etc/systemd/system/mithril-signer.service"}),") with the values specified in the ",(0,n.jsx)(r.a,{href:"https://mithril.network/doc/next/manual/getting-started/run-signer-node/#installing-the-service",children:"guide"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u26a0\ufe0f"," Following this modification, the service needs to be restarted with the following command:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"sudo systemctl restart mithril-signer\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Feel free to reach out to us on the ",(0,n.jsx)(r.a,{href:"https://discord.gg/5kaErDKDRq",children:"Discord channel"})," for questions and/or help."]})]})}function h(e={}){const{wrapper:r}={...(0,i.ah)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3905:(e,r,t)=>{t.d(r,{ah:()=>l});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=l(t),u=i,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return t?n.createElement(m,s(s({ref:r},h),{},{components:t})):n.createElement(m,s({ref:r},h))}));h.displayName="MDXCreateElement"}}]);