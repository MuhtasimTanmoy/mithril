(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{3195:function(e,t,r){Promise.resolve().then(r.bind(r,2136))},2136:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Registrations}});var n=r(7437),s=r(4033),i=r(2265),a=r(3198),o=r(845),l=r(382),c=r(7744),d=r(4434),h=r(8597),g=r(9639),u=r(3839),x=r(1387),f=r(6704),p=r(105),j=r(1491),v=r(9926),b=r(6816),k=r(5578),m=r(3751),y=r(8974),Z=r(4151),w=r(7796);function Registrations(){var e,t;let r=(0,a.I0)(),f=(0,s.useSearchParams)(),[S,M]=(0,i.useState)(!0),[C,B]=(0,i.useState)(void 0),[N,A]=(0,i.useState)(void 0),[_,E]=(0,i.useState)(void 0),[P,F]=(0,i.useState)(void 0),[R,T]=(0,i.useState)(void 0),[I,U]=(0,i.useState)([]),[J,L]=(0,i.useState)({stakesBreakdown:{},signersWeigth:{}});(0,i.useEffect)(()=>{let e;let t=f.get(j.W),n=Number(f.get("epoch"));A(t),E(n),(0,o.checkUrl)(t)?Number.isInteger(n)||(e="invalidEpoch"):e="invalidAggregatorUrl",void 0===e?(fetch("".concat(t,"/signers/registered/").concat(n)).then(e=>200===e.status?e.json():{}).then(e=>{F(e.signing_at),U(e.registrations),L({stakesBreakdown:function(e){let toMillionAda=e=>e/1e12,t=(null!=e?e:[]).map(e=>toMillionAda(e.stake));return{labels:["< 1M₳","≥ 1M₳ < 10M₳","≥ 10M₳ < 25M₳","≥ 25M₳ < 50M₳","≥ 50M₳ < 75M₳","≥ 75M₳ < 100M₳","≥ 100M₳"],datasets:[{label:"Number of signers",data:[t.filter(e=>e<1).length,t.filter(e=>e>=1&&e<10).length,t.filter(e=>e>=10&&e<25).length,t.filter(e=>e>=25&&e<50).length,t.filter(e=>e>=50&&e<75).length,t.filter(e=>e>=75&&e<100).length,t.filter(e=>e>100).length]}]}}(e.registrations),signersWeigth:function(e){let t=null!=e?e:[];return{labels:t.map(e=>e.party_id),datasets:[{label:"Stake (₳)",data:t.map(e=>(0,o.toAda)(e.stake))}]}}(e.registrations)}),M(!1)}).catch(e=>{F(void 0),U([]),M(!1),console.error("Fetch registrations error:",e)}),fetch("".concat(t,"/epoch-settings")).then(e=>200===e.status?e.json():{}).then(e=>T(null==e?void 0:e.epoch)).catch(e=>{T(void 0),console.error("Fetch current epoch in epoch-settings error:",e)}),r((0,Z.Q9)(t))):B(e)},[f]);let W=(0,i.useCallback)(e=>{let t=new URLSearchParams;return t.set("aggregator",N),t.set("epoch",e),"/registrations?".concat(t.toString())},[N]),D=W(_-1),O=W(R),Q=W(_+1);if(void 0!==C){let e="";switch(C){case"invalidEpoch":e="The given epoch isn't an integer, please correct it and try again.";break;case"invalidAggregatorUrl":e="The given aggregator isn't a valid url, please correct it and try again.";break;default:e="Something went wrong"}return(0,n.jsxs)(u.Z,{gap:3,children:[(0,n.jsx)("h2",{children:"Registrations"}),(0,n.jsxs)(l.Z,{variant:"danger",children:[(0,n.jsx)(l.Z.Heading,{children:"Oh snap! You got an error!"}),(0,n.jsx)("p",{children:e})]})]})}return(0,n.jsxs)(u.Z,{gap:3,children:[(0,n.jsxs)("h2",{children:["Registrations "," ",(0,n.jsx)(k.Z,{href:"".concat(N,"/signers/registered/").concat(_),variant:"outline-light",size:"sm"})]}),(0,n.jsx)(h.Z,{children:(0,n.jsx)(x.Z,{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Aggregator:"})}),(0,n.jsx)("td",{children:N})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Registration epoch:"})}),(0,n.jsx)("td",{children:_})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Signing at epoch:"})}),(0,n.jsx)("td",{children:null!=P?P:"?"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Number of signers:"})}),(0,n.jsx)("td",{children:null!==(e=null==I?void 0:I.length)&&void 0!==e?e:0})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Total stakes:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(b.Z,{lovelace:null!==(t=null==I?void 0:I.reduce((e,t)=>e+t.stake,0))&&void 0!==t?t:0})})]})]})})}),(0,n.jsx)(h.Z,{children:(0,n.jsx)("div",{children:Number.isInteger(_)&&(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(v.Z,{href:D,children:["Previous Epoch (",_-1,")"]}),(0,n.jsxs)(v.Z,{href:O,disabled:void 0===R||R===_,children:["Current Epoch (",R,")"]}),(0,n.jsxs)(v.Z,{href:Q,disabled:R<=_,children:["Next Epoch (",_+1,")"]})]})})}),S?(0,n.jsx)(g.Z,{animation:"grow"}):void 0===I||0===I.length?(0,n.jsxs)(l.Z,{variant:"info",children:[(0,n.jsxs)(l.Z.Heading,{children:["No registrations for epoch ",_]}),(0,n.jsx)("p",{children:R===_?"The aggregator did not receive registrations yet for the current epoch.":R<_?"The epoch is in the future":"The aggregator may have pruned old registrations or wasn't running at this epoch."})]}):(0,n.jsxs)(h.Z,{children:[(0,n.jsxs)(d.Z,{xs:12,sm:12,md:7,children:[(0,n.jsx)("h3",{children:"Signers"}),(0,n.jsxs)(x.Z,{responsive:!0,striped:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"#"}),(0,n.jsx)("th",{children:"Party id"}),(0,n.jsx)("th",{children:"Pool Ticker"}),(0,n.jsx)("th",{style:{textAlign:"end"},children:"Stake"})]})}),(0,n.jsx)("tbody",{children:I.map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:t}),(0,n.jsxs)("td",{className:"text-break",children:[(0,n.jsx)(m.Z,{tooltip:"Verified Signer"})," ",(0,n.jsx)(w.Z,{partyId:e.party_id})]}),(0,n.jsx)("td",{children:(0,n.jsx)(y.Z,{aggregator:N,partyId:e.party_id})}),(0,n.jsx)("td",{style:{textAlign:"end"},children:(0,n.jsx)(b.Z,{lovelace:e.stake})})]},e.party_id))})]})]}),(0,n.jsx)(d.Z,{xs:12,sm:12,md:5,children:(0,n.jsxs)(u.Z,{gap:3,children:[(0,n.jsx)("h3",{children:"Stakes breakdown"}),(0,n.jsx)(p.$Q,{data:J.stakesBreakdown}),(0,n.jsx)("h3",{children:"Signers weight"}),(0,n.jsx)(p.by,{data:J.signersWeigth})]})})]})]})}f.kL.register(f.qi,f.uw,f.f$,f.ZL,f.Dx,f.u,f.De),(0,o.setChartJsDefaults)(f.kL)},9926:function(e,t,r){"use strict";r.d(t,{Z:function(){return RawJsonButton}});var n=r(7437);r(2265);var s=r(1396),i=r.n(s);function RawJsonButton(e){let{href:t,children:r,className:s,disabled:a,...o}=e;return!0===a?s="".concat(s," disabled"):a=!1,(0,n.jsx)(i(),{href:t,"aria-disabled":a,className:"btn btn-primary link-underline-opacity-0 link-light ".concat(s),...o,children:r})}},7796:function(e,t,r){"use strict";r.d(t,{Z:function(){return PartyId}});var n=r(7437);r(2265);var s=r(6716),i=r(7322),a=r(7800);function PartyId(e){let{partyId:t}=e;return(0,n.jsxs)("span",{className:"text-break",children:[t,(0,n.jsx)(n.Fragment,{children:" "}),(0,n.jsx)(i.Z,{overlay:(0,n.jsx)(a.Z,{children:"Copy"}),children:(0,n.jsx)(s.Z,{variant:"link",onClick:function(){window.isSecureContext&&t&&navigator.clipboard.writeText(t).then(()=>{})},size:"md",className:"p-0",children:(0,n.jsx)("i",{className:"bi bi-copy",style:{color:"black"}})})})]})}r(845)},8974:function(e,t,r){"use strict";r.d(t,{Z:function(){return PoolTicker}});var n=r(7437),s=r(2265),i=r(3198),a=r(4151),o=r(845),l=r(6691),c=r.n(l),d=r(7322),h=r(7800);function PoolTicker(e){var t;let{aggregator:r,partyId:l,...g}=e,u=(0,i.v9)(e=>(0,a.Mj)(e,r,l)),[x,f]=(0,s.useState)(void 0);return(0,s.useEffect)(()=>{(null==u?void 0:u.network)?f((0,o.getCExplorerUrlForPool)(u.network,l)):f(void 0)},[l,u.network]),void 0!==x?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("a",{href:x,target:"_blank",className:"link-dark link-underline-light",children:(0,n.jsx)(d.Z,{overlay:(0,n.jsx)(h.Z,{children:"See in CExplorer"}),children:(0,n.jsxs)("span",{children:[(0,n.jsx)(c(),{src:"/explorer/cexplorer_logo.png",alt:"CExplorer Logo",style:{verticalAlign:"text-top"},width:20,height:20}),(0,n.jsx)(n.Fragment,{children:" "}),null!==(t=u.pool_ticker)&&void 0!==t?t:"Not available"]})})})}):(0,n.jsx)("span",{children:u.pool_ticker})}},5578:function(e,t,r){"use strict";r.d(t,{Z:function(){return RawJsonButton}});var n=r(7437);r(2265);var s=r(6716),i=r(7322),a=r(7800);function RawJsonButton(e){return(0,n.jsx)(i.Z,{overlay:(0,n.jsx)(a.Z,{children:"Raw JSON"}),children:(0,n.jsx)(s.Z,{variant:"outline-secondary",target:"_blank",...e,children:(0,n.jsx)("i",{className:"bi bi-filetype-json",style:{color:"black"}})})})}},6816:function(e,t,r){"use strict";r.d(t,{Z:function(){return Stake}});var n=r(7437);r(2265);var s=r(7322),i=r(7800),a=r(845);function Stake(e){let{lovelace:t}=e;return(0,n.jsx)(s.Z,{overlay:(0,n.jsxs)(i.Z,{children:[(0,a.formatCurrency)((0,a.toAda)(t),20),"₳"]}),children:(0,n.jsx)("span",{children:(0,a.formatStake)(t)})})}},3751:function(e,t,r){"use strict";r.d(t,{Z:function(){return VerifiedBadge}});var n=r(7437);r(2265);var s=r(7322),i=r(7800);function VerifiedBadge(e){return(0,n.jsx)(s.Z,{overlay:(0,n.jsx)(i.Z,{children:e.tooltip}),children:(0,n.jsx)("a",{href:"#",className:"badge bg-success",children:(0,n.jsx)("i",{className:"bi bi-shield-lock"})})})}},1491:function(e,t,r){"use strict";r.d(t,{W:function(){return n}});let n="aggregator"},4151:function(e,t,r){"use strict";r.d(t,{Mj:function(){return o},Q9:function(){return a},Ux:function(){return i}});var n=r(5726),s=r(6023);let i=(0,n.oM)({name:"pools",initialState:{list:[]},reducers:{},extraReducers:e=>e.addCase(a.fulfilled,(e,t)=>{let r=poolsForAggregator(e,t.payload.aggregator);r?(r.date=t.payload.date,r.pools=t.payload.pools):e.list.push({aggregator:t.payload.aggregator,date:t.payload.date,network:t.payload.network,pools:t.payload.pools})})}),a=(0,n.hg)("pools/updateForAggregator",e=>fetch("".concat(e,"/signers/tickers")).then(e=>200===e.status?e.json():{}).then(t=>({aggregator:e,date:Date.now(),network:t.network,pools:t.signers}))),poolsForAggregator=(e,t)=>e.list.find(e=>e.aggregator===t),o=(0,s.P1)([e=>e.pools,(e,t,r)=>({aggregator:t,poolId:r})],(e,t)=>{let r=poolsForAggregator(e,t.aggregator),n=null==r?void 0:r.pools.find(e=>e.party_id===t.poolId);return{network:null==r?void 0:r.network,...n}});i.reducer},845:function(e){"use strict";let toAda=e=>e/1e6,formatCurrency=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString(void 0,{maximumFractionDigits:t})};e.exports={checkUrl:function(e){try{return new URL(e),!0}catch(e){return!1}},formatStake:function(e){let t=toAda(e),r=[{suffix:"B",value:1e9},{suffix:"M",value:1e6},{suffix:"K",value:1e3},{suffix:"",value:1}].find(e=>Math.abs(t)>=e.value-.001);return r?"".concat(formatCurrency(t/r.value)).concat(r.suffix,"₳"):"".concat(formatCurrency(t),"₳")},setChartJsDefaults:function(e){let t=["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],r=["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"];e.defaults.plugins.legend.display=!1,e.defaults.elements.arc.backgroundColor=t,e.defaults.elements.arc.borderColor=r,e.defaults.elements.arc.borderWidth=1,e.defaults.elements.bar.backgroundColor=t,e.defaults.elements.bar.borderColor=r,e.defaults.elements.bar.borderWidth=1},toAda,formatCurrency,formatBytes:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";let r=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(r))+" "+["Bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"][n]},formatPartyId:function(e){return("string"==typeof e||e instanceof String)&&e.length>15?e.slice(0,10)+"…"+e.slice(-5):e},getCExplorerUrlForPool:function(e,t){let r;let n="cexplorer.io/pool/".concat(t);switch(e){case"mainnet":r="https://".concat(n);break;case"preprod":r="https://preprod.".concat(n);break;case"preview":r="https://preview.".concat(n)}return r}}}},function(e){e.O(0,[674,874,88,392,971,864,744],function(){return e(e.s=3195)}),_N_E=e.O()}]);