(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5891:function(e,t,r){Promise.resolve().then(r.t.bind(r,6964,23)),Promise.resolve().then(r.t.bind(r,4724,23)),Promise.resolve().then(r.t.bind(r,8358,23)),Promise.resolve().then(r.t.bind(r,6305,23)),Promise.resolve().then(r.t.bind(r,9252,23)),Promise.resolve().then(r.t.bind(r,8995,23)),Promise.resolve().then(r.bind(r,9925))},1272:function(e,t,r){"use strict";t.Z=["https://aggregator.release-mainnet.api.mithril.network/aggregator","https://aggregator.release-preprod.api.mithril.network/aggregator","https://aggregator.pre-release-preview.api.mithril.network/aggregator","https://aggregator.testing-preview.api.mithril.network/aggregator","http://localhost:8080/aggregator"]},1491:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});let a="aggregator"},4151:function(e,t,r){"use strict";r.d(t,{Mj:function(){return g},Q9:function(){return l},Ux:function(){return n}});var a=r(5726),o=r(6023);let n=(0,a.oM)({name:"pools",initialState:{list:[]},reducers:{},extraReducers:e=>e.addCase(l.fulfilled,(e,t)=>{let r=poolsForAggregator(e,t.payload.aggregator);r?(r.date=t.payload.date,r.pools=t.payload.pools):e.list.push({aggregator:t.payload.aggregator,date:t.payload.date,network:t.payload.network,pools:t.payload.pools})})}),l=(0,a.hg)("pools/updateForAggregator",e=>fetch("".concat(e,"/signers/tickers")).then(e=>200===e.status?e.json():{}).then(t=>({aggregator:e,date:Date.now(),network:t.network,pools:t.signers}))),poolsForAggregator=(e,t)=>e.list.find(e=>e.aggregator===t),g=(0,o.P1)([e=>e.pools,(e,t,r)=>({aggregator:t,poolId:r})],(e,t)=>{let r=poolsForAggregator(e,t.aggregator),a=null==r?void 0:r.pools.find(e=>e.party_id===t.poolId);return{network:null==r?void 0:r.network,...a}});n.reducer},9925:function(e,t,r){"use strict";r.r(t),r.d(t,{Providers:function(){return Providers}});var a=r(7437),o=r(1491),n=r(5726),l=r(4151),g=r(4394),i=r(1272),s=r(845);let u="Explorer_State",storeBuilder=e=>{var t;return(0,n.xC)({reducer:{settings:g.xj.reducer,pools:l.Ux.reducer},preloadedState:{...t=function(){if(localStorage){let e=localStorage.getItem(u);return e?JSON.parse(e):void 0}}(),settings:function(e,t){var r,a;let o,n=null!=e?e:g.E3,l=(r=n.availableAggregators,a=i.Z,o=r.filter(e=>!a.includes(e)),[...a,...o]);return t&&(0,s.checkUrl)(t)?(l.includes(t)||l.push(t),n={...n,selectedAggregator:t,availableAggregators:l,canRemoveSelected:!i.Z.includes(t)}):n={...n,availableAggregators:l},n}(null==t?void 0:t.settings,e)}})};var c=r(3198),d=r(4033),p=r(2265);function Providers(e){let{children:t}=e,r=(0,d.useSearchParams)(),n=r.get(o.W),[l,g]=(0,p.useState)(storeBuilder(n));return l.subscribe(()=>{var e;return e=l.getState(),void(localStorage&&localStorage.setItem(u,JSON.stringify(e)))}),(0,a.jsx)(c.zt,{store:l,children:t})}},4394:function(e,t,r){"use strict";r.d(t,{E3:function(){return l},JV:function(){return i},OR:function(){return c},VT:function(){return u},k6:function(){return selectedAggregator},uI:function(){return s},xj:function(){return g}});var a=r(5726),o=r(1272),n=r(845);let l={autoUpdate:!0,updateInterval:1e4,selectedAggregator:o.Z[0],availableAggregators:o.Z,canRemoveSelected:!1},g=(0,a.oM)({name:"settings",initialState:l,reducers:{setUpdateInterval:(e,t)=>{e.updateInterval=t.payload},toggleAutoUpdate:e=>{e.autoUpdate=!e.autoUpdate},selectAggregator:(e,t)=>{if(!(0,n.checkUrl)(t.payload))return e;let r=e.availableAggregators.includes(t.payload)?e.availableAggregators:[...e.availableAggregators,t.payload];return{...e,selectedAggregator:t.payload,availableAggregators:r,canRemoveSelected:!o.Z.includes(t.payload)}},removeSelectedAggregator:e=>o.Z.includes(e.selectedAggregator)?e:{...e,selectedAggregator:e.availableAggregators.at(0),availableAggregators:e.availableAggregators.filter(t=>t!==e.selectedAggregator),canRemoveSelected:!o.Z.includes(e.availableAggregators.at(0))}}}),{setUpdateInterval:i,toggleAutoUpdate:s,selectAggregator:u,removeSelectedAggregator:c}=g.actions,selectedAggregator=e=>e.settings.selectedAggregator;g.reducer},845:function(e){"use strict";let toAda=e=>e/1e6,formatCurrency=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString(void 0,{maximumFractionDigits:t})};e.exports={checkUrl:function(e){try{return new URL(e),!0}catch(e){return!1}},formatStake:function(e){let t=toAda(e),r=[{suffix:"B",value:1e9},{suffix:"M",value:1e6},{suffix:"K",value:1e3},{suffix:"",value:1}].find(e=>Math.abs(t)>=e.value-.001);return r?"".concat(formatCurrency(t/r.value)).concat(r.suffix,"₳"):"".concat(formatCurrency(t),"₳")},setChartJsDefaults:function(e){let t=["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],r=["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"];e.defaults.plugins.legend.display=!1,e.defaults.elements.arc.backgroundColor=t,e.defaults.elements.arc.borderColor=r,e.defaults.elements.arc.borderWidth=1,e.defaults.elements.bar.backgroundColor=t,e.defaults.elements.bar.borderColor=r,e.defaults.elements.bar.borderWidth=1},toAda,formatCurrency,formatBytes:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";let r=t<0?0:t,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(r))+" "+["Bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"][a]},formatPartyId:function(e){return("string"==typeof e||e instanceof String)&&e.length>15?e.slice(0,10)+"…"+e.slice(-5):e},getCExplorerUrlForPool:function(e,t){let r;let a="cexplorer.io/pool/".concat(t);switch(e){case"mainnet":r="https://".concat(a);break;case"preprod":r="https://preprod.".concat(a);break;case"preview":r="https://preview.".concat(a)}return r}}},9252:function(){},8995:function(){},6305:function(){},8358:function(e){e.exports={container:"explorer_container__e4y3J",main:"explorer_main__72BOO",footer:"explorer_footer__NDYaK",title:"explorer_title__4AQZM",code:"explorer_code__d9zj2",logo:"explorer_logo__qsx9l"}}},function(e){e.O(0,[428,874,51,971,864,744],function(){return e(e.s=5891)}),_N_E=e.O()}]);