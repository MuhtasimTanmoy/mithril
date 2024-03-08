"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[8587],{55999:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=s(85893),o=s(11151);const r={slug:2,title:"2. Use simple structured logging\n",authors:[{name:"Mithril Team"}],tags:["Superseded"],date:new Date("2022-04-24T00:00:00.000Z")},i=void 0,l={permalink:"/doc/adr/2",source:"@site/adr/002-use-structured-logging.md",title:"2. Use simple structured logging\n",description:"Status",date:"2022-04-24T00:00:00.000Z",formattedDate:"April 24, 2022",tags:[{label:"Superseded",permalink:"/doc/adr/tags/superseded"}],readingTime:.68,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{slug:"2",title:"2. Use simple structured logging\n",authors:[{name:"Mithril Team"}],tags:["Superseded"],date:"2022-04-24T00:00:00.000Z"},unlisted:!1,prevItem:{title:"3. Release process and versioning\n",permalink:"/doc/adr/3"},nextItem:{title:"1. Record Architecture Decisions\n",permalink:"/doc/adr/1"}},d={authorsImageUrls:[void 0]},a=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,n.jsxs)(t.p,{children:["Superseded by ",(0,n.jsx)(t.a,{href:"/adr/7",children:"ADR 7"})]}),"\n",(0,n.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Logs are a critical tool for operating any software system, enabling ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability",children:"observability"})," of the system."]}),"\n",(0,n.jsxs)(t.li,{children:["Following ",(0,n.jsx)(t.a,{href:"https://12factor.net/logs",children:"12 Factor Apps"})," principles, providing the needed components and tools to be able to configure logging and monitoring should not be the responsibility of the software components"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Therefore"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Each component of the system use ",(0,n.jsx)(t.a,{href:"https://www.sumologic.com/glossary/structured-logging/",children:"Structured logging"})," using documented and standardised JSON format for its logs"]}),"\n",(0,n.jsxs)(t.li,{children:["Logs are always emitted to ",(0,n.jsx)(t.code,{children:"stdout"})," of the process the component is part of"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The schema of the logged items should be properly documented in a JSON schema"}),"\n",(0,n.jsx)(t.li,{children:"It is the responsibility of the node operator to consume the logs and process them"}),"\n",(0,n.jsxs)(t.li,{children:["We use existing libraries to provide needed log infrastructure, like ",(0,n.jsx)(t.a,{href:"https://zsiciarz.github.io/24daysofrust/book/vol2/day4.html",children:"slog"})," for Rust"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var n=s(67294);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);