"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[7119],{86515:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(85893),r=i(11151);const o={title:"Mithril client has got a brand new interface",authors:[{name:"Mithril Team"}],tags:["client","certificate","mithril-stake-distribution"]},a=void 0,s={permalink:"/doc/dev-blog/2023/06/14/new-client-interface",source:"@site/blog/2023-06-14-new-client-interface.md",title:"Mithril client has got a brand new interface",description:"Mithril client interface is evolving",date:"2023-06-14T00:00:00.000Z",formattedDate:"June 14, 2023",tags:[{label:"client",permalink:"/doc/dev-blog/tags/client"},{label:"certificate",permalink:"/doc/dev-blog/tags/certificate"},{label:"mithril-stake-distribution",permalink:"/doc/dev-blog/tags/mithril-stake-distribution"}],readingTime:1.155,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{title:"Mithril client has got a brand new interface",authors:[{name:"Mithril Team"}],tags:["client","certificate","mithril-stake-distribution"]},unlisted:!1,prevItem:{title:"Mithril Signer Deployment Models",permalink:"/doc/dev-blog/2023/06/28/signer-deployment-models"},nextItem:{title:"Mithril Era Switch",permalink:"/doc/dev-blog/2023/03/02/era-switch-feature"}},l={authorsImageUrls:[void 0]},c=[{value:"Mithril client interface is evolving",id:"mithril-client-interface-is-evolving",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"mithril-client-interface-is-evolving",children:"Mithril client interface is evolving"}),"\n",(0,n.jsx)(t.p,{children:"For the last few months, we have implemented the capability for the Mithril protocol to sign multiple types of data: on top of the already existing Cardano node database snapshots, the Mithril stake distribution is now also signed on its own.\nIn order to make the client able to work on the different types of data that are certified, we have changed its command line API.\nFor example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$> ./mithril-client list\n"})}),"\n",(0,n.jsx)(t.p,{children:"This command was previously used to list Cardano node snapshots. It has been abandoned in favor of a more explicit syntax:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$> ./mithril-client snapshot list\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Furthermore, the old version had two different subcommands to 1. download and 2. verify a snapshot. These 2 commands have now be merged into one single ",(0,n.jsx)(t.code,{children:"download"})," command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$> ./mithril-client snapshot download  5109c1eaa6619bc\u2026\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This organization of the client opens the use of a new ",(0,n.jsx)(t.code,{children:"mithril-stake-distribution"})," sub-command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$> ./mithril-client mithril-stake-distribution list\n"})}),"\n",(0,n.jsx)(t.p,{children:"Which can be aliased into a handy"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$> ./mithril-client msd list\n"})}),"\n",(0,n.jsx)(t.p,{children:"As for the Cardano snapshots, it is possible to download and verify the stake distribution involved in Mithril multi-signatures as a JSON file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$> ./mithril-client msd download 713e2803e998f\u2026\n"})}),"\n",(0,n.jsx)(t.p,{children:"If the file certification can be verified, it is saved on the disk."}),"\n",(0,n.jsxs)(t.p,{children:["Feel free to reach out to us on the ",(0,n.jsx)(t.a,{href:"https://discord.gg/5kaErDKDRq",children:"Discord channel"})," for questions and/or help."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>a});var n=i(67294);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);