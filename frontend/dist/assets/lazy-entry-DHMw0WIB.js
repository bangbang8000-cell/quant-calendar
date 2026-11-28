import"./index-CONZBedF.js";import"./vendor-vue-C_pVD_qU.js";import"./vendor-ep-DklGHoWb.js";import"./vendor-lucide-BR0fGNY-.js";(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.marketReview={create:function(i){const{ref:c,seqOf:b,authHeaders:F}=i,h=c([]),O=c(!1),L=c(!1),q=c(""),V=c(null),P=c(!1),E=c(!1);async function R(){const u=b("marketReviews"),H=++u.n;O.value=!0,L.value=!1;try{const D=await fetch("/api/market/reviews?limit=30",{headers:F()}).then(T=>T.json());if(H!==u.n)return;D&&D.success?h.value=Array.isArray(D.data)?D.data:[]:L.value=!0}catch(D){console.error("[market-review] 复盘列表加载失败:",D),L.value=!0}finally{O.value=!1}}function Y(u){q.value=u,U(u)}function K(u){q.value===u?B():Y(u)}function ae(u){return u==null||isNaN(Number(u))?"—":(Number(u)>=0?"+":"")+Number(u).toFixed(2)+"%"}function J(u){return u==null||isNaN(Number(u))?"—":Number(u).toFixed(2)}function B(){q.value="",V.value=null,E.value=!1}async function U(u){const H=b("marketReviewDetail"),D=++H.n;P.value=!0,E.value=!1,V.value=null;try{const T=u?"/api/market/review?date="+encodeURIComponent(u):"/api/market/review",k=await fetch(T,{headers:F()}).then(x=>x.json());if(D!==H.n)return;k&&k.success?V.value=k.data:E.value=!0}catch(T){console.error("[market-review] 复盘详情加载失败:",T),E.value=!0}finally{P.value=!1}}function $(u){return u>0?"up":u<0?"down":"flat"}function j(u){return u==null||isNaN(Number(u))?"—":(u>0?"+":"")+Number(u).toFixed(2)+"%"}function y(u){const H={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(u||{}).map(function(D){const T=D[0],k=D[1],x=!k||k==="unavailable"||k==="数据不可达";return{label:H[T]||T,value:x?"数据不可达":k,unavailable:x}})}return{marketReviews:h,marketReviewLoading:O,marketReviewError:L,selectedReviewDate:q,marketReviewDetail:V,marketReviewDetailLoading:P,marketReviewDetailError:E,loadMarketReviews:R,openMarketReview:Y,toggleMarketReviewDate:K,backToMarketReviewList:B,loadMarketReviewDetail:U,marketReviewChgClass:$,marketReviewChgText:j,marketReviewSrcEntries:y,fmtPct:ae,fmtEmotion:J}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.factor={create:function(i){const{ref:c,seqOf:b,withAuth:F,authHeaders:h,activeStrategyId:O,paramValues:L,activeStrategy:q,lastRunSymbols:V}=i,P=window.__quantModules&&window.__quantModules.i18n||{},E=typeof P.t=="function"?P.t:function(a){return String(a)},R=c("mom20"),Y=c(!1),K=c(!1),ae=c(null),J=c(null),B=c(null),U=c(!1),$=c(!1),j=c(!1),y=c(!1),u=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],H={technical:"技术类",valuation:"估值类",sentiment:"情绪类",capital:"资金类",fundamental:"基本面类",score:"综合评分",composite:"综合评分"},D=[{key:"topn",label:"选股数梯度",grid:'{"top_n":[10,20,30,50]}'},{key:"topn_cycle",label:"选股数×调仓周期",grid:'{"top_n":[10,20,30],"rebalance_cycle":[5,10,20]}'},{key:"topn_st",label:"选股数×剔除ST",grid:'{"top_n":[10,20,30],"st_filter":[true,false]}'}];function T(a){const r=D.find(function(s){return s.key===a});r&&(ne.value=r.grid)}function k(){const a={};return B.value&&B.value.length===2&&(a.start_date=B.value[0],a.end_date=B.value[1]),a}let x=null,N=null;function C(a){const r=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null;if(r)r().then(a).catch(function(){try{a()}catch{}});else try{a()}catch(s){console.error("[factor] echarts 渲染失败",s)}}function se(){return window.__quantModules&&window.__quantModules.echartsTheme&&typeof window.__quantModules.echartsTheme.getEChartsTheme=="function"?window.__quantModules.echartsTheme.getEChartsTheme():{}}function re(a){if(!a)return[];let r=[];return Array.isArray(a)&&a.length&&typeof a[0]=="number"?r=a.map(function(s,g){return["S"+(g+1),s]}):Array.isArray(a)?r=a.map(function(s){return[s.date||s[0],s.value!=null?s.value:s[1]]}):typeof a=="object"&&(r=Object.keys(a).map(function(s){return[s,a[s]]})),r.filter(function(s){return s[0]!=null&&s[1]!=null&&!isNaN(Number(s[1]))}).sort(function(s,g){return String(s[0]).localeCompare(String(g[0]))})}function ie(){const a=document.getElementById("factorIcChart"),r=ae.value;if(!a||!r)return;const s=re(r.ic_series);s.length&&C(function(){x&&(x.dispose(),x=null),x=echarts.init(a),x.setOption(se());const g=getComputedStyle(document.documentElement).getPropertyValue("--text-tertiary").trim()||"#999";x.setOption({tooltip:{trigger:"axis",valueFormatter:function(f){return Number(f).toFixed(4)}},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:s.map(function(f){return f[0]}),boundaryGap:!1},yAxis:{type:"value",scale:!0,axisLabel:{formatter:function(f){return Number(f).toFixed(2)}}},dataZoom:[{type:"inside"}],series:[{name:"Rank IC",type:"line",data:s.map(function(f){return Number(f[1])}),smooth:!1,symbol:"circle",symbolSize:4,lineStyle:{width:1.5,color:"#6366f1"},markLine:{silent:!0,symbol:"none",label:{show:!1},lineStyle:{type:"dashed",color:g},data:[{yAxis:0}]}}]})})}function he(){const a=document.getElementById("factorLayerChart"),r=J.value;!a||!r||!Array.isArray(r.layers)||!r.layers.length||C(function(){N&&(N.dispose(),N=null),N=echarts.init(a),N.setOption(se()),N.setOption({tooltip:{trigger:"axis",valueFormatter:function(s){return Number(s).toFixed(2)+"%"}},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:r.layers.map(function(s){return"层 "+s.layer})},yAxis:{type:"value",axisLabel:{formatter:function(s){return s+"%"}}},series:[{name:"分层累计收益",type:"bar",data:r.layers.map(function(s){return{value:Number(s.return),itemStyle:{color:Number(s.return)>=0?"#c23b3b":"#2e8b57"}}}),barMaxWidth:48,label:{show:!0,position:"top",formatter:function(s){return Number(s.value).toFixed(2)+"%"}}}]})})}const ne=c('{"top_n":[10,20,30]}'),W=c(null),G=c(""),I=c(!1),ve=c(null);async function le(){if(!O.value){ElementPlus.ElMessage.warning("请先选择策略");return}let a;try{a=JSON.parse(ne.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!a||Object.keys(a).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}I.value=!0,W.value=null,G.value="",y.value=!1;try{const r=await fetch("/api/strategies/"+O.value+"/sweep",{method:"POST",headers:h(),body:JSON.stringify(Object.assign({param_grid:a},k()))}).then(function(s){return s.json()});r&&Array.isArray(r.results)?(W.value=r.results,G.value="完成 "+r.count+" 组",y.value=!!r.data_degraded,ve.value=r.param_stability||null):G.value=r&&r.detail||"扫描失败"}catch(r){console.error("[sweep]",r),G.value="扫描失败: "+r.message}finally{I.value=!1}}async function X(){const a=b("factorIc"),r=++a.n;Y.value=!0,U.value=!1;try{const s=await F("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.assign({sid:O.value||"multi_factor",factor_key:R.value,params:L.value||{}},k()))}).then(function(f){return f.json()});if(r!==a.n)return;const g=s&&s.report?s.report.n1||{}:{};ae.value=g,U.value=!!(s&&s.data_degraded),Vue.nextTick(function(){ie()})}catch(s){console.error("[research] 因子IC分析失败:",s),ElementPlus.ElMessage.error(E("msg.factorIcFailed",{msg:s.message}))}finally{Y.value=!1}}async function be(){const a=b("factorLayer"),r=++a.n;K.value=!0,$.value=!1;try{const s=await F("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.assign({sid:O.value||"multi_factor",factor_key:R.value,params:L.value||{}},k()))}).then(function(g){return g.json()});if(r!==a.n)return;s&&s.layers?(J.value=s,$.value=!!s.data_degraded,Vue.nextTick(function(){he()})):ElementPlus.ElMessage.warning(E("msg.layerBacktest",{msg:s.message||E("msg.noData")}))}catch(s){console.error("[research] 分层回测失败:",s),ElementPlus.ElMessage.error(E("msg.layerBacktestFailed",{msg:s.message}))}finally{K.value=!1}}const me=c(null),pe=c(!1);async function fe(){const a=b("factorDetail"),r=++a.n;pe.value=!0,me.value=null,j.value=!1;try{const s=await F("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.assign({sid:O.value||"multi_factor",factor_key:R.value,params:L.value||{}},k()))}).then(function(g){return g.json()});if(r!==a.n)return;s&&s.detail?(me.value=s.detail,j.value=!!s.data_degraded):ElementPlus.ElMessage.warning(E("msg.factorDetail",{msg:s.message||E("msg.noData")}))}catch(s){console.error("[research] 因子详情失败:",s),ElementPlus.ElMessage.error(E("msg.factorDetailFailed",{msg:s.message}))}finally{pe.value=!1}}const _e={technical:"技术面",moneyflow:"资金面",fundamental:"基本面",sector:"板块",event:"事件"},Z=c(Object.keys(_e)),oe=c(null),ce=c(""),ge=c({technical:null,moneyflow:null,fundamental:null,sector:null,event:null}),ye=c(!1),Re=c(""),n=c(!1),o=c(""),d=c(null),m=c(10),v=c(!1),p=c("");function w(a){a&&(ce.value=String(a))}async function Q(){const a=String(ce.value||"").trim();if(!(!a||v.value)){v.value=!0,p.value="";try{const r=await fetch("/api/strategies/scores/auto?stock_code="+encodeURIComponent(a),{headers:h()}).then(function(s){return s.json()});if(r&&r.estimates){let s=0;Object.keys(r.estimates).forEach(function(f){const _=r.estimates[f];_!=null&&(ge.value[f]=_,s+=1)});const g=(r.unknown_dims||[]).length;p.value=s>0?"已自动预估 "+s+" 个维度"+(g?", "+g+" 个维度数据不可得保持 unknown":""):"数据不可得, 无法自动预估(请手动填写或稍后重试)",s>0?ElementPlus.ElMessage.success(p.value):ElementPlus.ElMessage.warning(p.value)}else p.value=r&&r.detail||"自动预估失败",ElementPlus.ElMessage.error(p.value)}catch(r){console.error("[score] 自动预估失败",r),p.value="自动预估失败: "+(r.message||r),ElementPlus.ElMessage.error(p.value)}finally{v.value=!1}}}function A(a){return _e[a]||a}async function Ce(){try{const a=await fetch("/api/strategies/scores/config",{headers:h()}).then(function(r){return r.json()});if(a&&Array.isArray(a.dimensions)&&a.dimensions.length){Z.value=a.dimensions.slice();const r={};a.dimensions.forEach(function(s){r[s]=null}),ge.value=r}a&&a.default_weights&&(oe.value=a.default_weights)}catch(a){console.warn("[score] 评分配置不可用, 使用本地兜底维度",a)}}async function je(){n.value=!0,o.value="",d.value=null;try{const a={};Z.value.forEach(function(g){const f=ge.value[g];a[g]=f===""||f===null||f===void 0||isNaN(Number(f))?null:Number(f)});const r={stock_code:String(ce.value||"").trim(),dimension_scores:a,veto:!!ye.value,veto_reason:Re.value||""};m.value&&(r.top_n=Number(m.value));const s=await fetch("/api/strategies/scores/calculate",{method:"POST",headers:h(),body:JSON.stringify(r)}).then(function(g){return g.json()});s&&s.total_score!==void 0&&s.total_score!==null?d.value=s:o.value=s&&s.detail||"评分失败"}catch(a){console.error("[score] 评分失败",a),o.value="评分失败: "+a.message}finally{n.value=!1}}const Le=60,He=44;function Me(a,r,s){const g=(-90+360/Math.max(r,1)*a)*Math.PI/180,f=He*Math.max(0,Math.min(1,s));return[(Le+f*Math.cos(g)).toFixed(1),(Le+f*Math.sin(g)).toFixed(1)]}function Fe(){const a=Z.value||[],r=a.length||1;return a.map(function(s,g){const f=Me(g,r,1),_=Me(g,r,1.18);return{key:s,label:A(s),x:f[0],y:f[1],lx:_[0],ly:_[1]}})}function Ve(){const a=d.value;if(!a||!a.dimensions)return"";const r=Z.value||[],s=r.length||1;return r.map(function(g,f){const _=a.dimensions[g]||{},Ue=_.score===null||_.score===void 0?0:Number(_.score);return Me(f,s,Ue/100).join(",")}).join(" ")}function Ie(){const a=d.value;return!a||!a.dimensions?[]:(Z.value||[]).map(function(r){const s=a.dimensions[r]||{};return{key:r,label:A(r),score:s.score,weight:s.weight,weighted:s.weighted_score,status:s.status||"ok"}})}function ze(){const a=d.value;if(!a){ElementPlus.ElMessage.warning("请先计算评分");return}const r=["维度,分数,权重,加权分"];if(Ie().forEach(function(_){r.push([_.label,_.score===null||_.score===void 0?"unknown":_.score,_.weight==null?"":_.weight,_.weighted===null||_.weighted===void 0?"":_.weighted].join(","))}),r.push(""),r.push(["总分",a.total_score,"等级",a.level].join(",")),r.push(["一票否决",a.veto_flag?"是":"否",a.veto_reason||"",""].join(",")),a.missing_dimensions&&a.missing_dimensions.length&&r.push(["缺失维度",a.missing_dimensions.join("|"),"",""].join(",")),a.top_n_suggestion){const _=Object.keys(a.top_n_suggestion);r.push(["TopN 建议",_.join("|"),"",""].join(","))}const s=new Blob(["\uFEFF"+r.join(`
`)],{type:"text/csv;charset=utf-8"}),g=URL.createObjectURL(s),f=document.createElement("a");f.href=g,f.download="score-"+(String(ce.value||"").trim()||"stock")+".csv",f.click(),URL.revokeObjectURL(g)}function Pe(){const a=q&&q.value&&q.value.factor_specs||null,r=(a&&a.length?a:u).slice();return r.some(function(s){return s.name==="composite_score"})||r.push({name:"composite_score",category:"score",label:"综合评分"}),r}window.Vue&&typeof window.Vue.watch=="function"&&O&&window.Vue.watch(O,function(){const a=Pe().map(function(r){return r.name});a.length&&a.indexOf(R.value)<0&&(R.value=a[0])});function Je(){const a=Pe(),r=[],s={};return a.forEach(function(g){const f=g.category||"other";f in s||(s[f]={category:f,label:H[f]||f,items:[]},r.push(s[f])),s[f].items.push(g)}),r}return{factorKey:R,factorIcLoading:Y,factorLayerLoading:K,factorIcReport:ae,factorLayerResult:J,factorOptions:u,runFactorIc:X,runFactorLayer:be,factorDetail:me,factorDetailLoading:pe,runFactorDetail:fe,sweepGrid:ne,sweepResult:W,sweepMessage:G,sweepLoading:I,sweepStability:ve,runSweep:le,factorRange:B,factorIcDegraded:U,factorLayerDegraded:$,factorDetailDegraded:j,sweepDegraded:y,factorGroupedOptions:Je,applySweepTemplate:T,scoreCode:ce,scoreDims:ge,scoreConfigDims:Z,scoreWeights:oe,scoreVeto:ye,scoreVetoReason:Re,scoreAutoLoading:v,scoreAutoMsg:p,prefillFromRun:w,autoEstimateDims:Q,scoreLoading:n,scoreError:o,scoreResult:d,scoreTopN:m,scoreDimLabel:A,scoreDimRows:Ie,scoreRadarAxes:Fe,scoreRadarPolygon:Ve,loadScoreConfig:Ce,runScore:je,exportScore:ze,factorSelectOptions:Pe}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.history={create:function(i){const{seqOf:c,state:b}=i,F=Vue.ref([]),h=Vue.ref(!1),O=Vue.ref(!1),L=Vue.ref(""),q=Vue.ref([]),V=Vue.ref(""),P=Vue.ref([]),E=Vue.ref(!1),R=Vue.ref(!1),Y=Vue.ref([]),K=Vue.ref(!1),ae={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性",timing_matrix:"择时矩阵",timing:"择时",market_state:"市场状态",score:"评分",pattern_strategy:"形态策略",pattern_match:"形态匹配"};function J(n){return ae[n]||n||"—"}function B(n){if(!n)return"—";const o=n.subject_names||{},d=n.subject_codes||[];if(d.length){const m=d.slice(0,3).map(function(v){return v+(o[v]?" "+o[v]:" —")});return d.length>3&&m.push("等 "+d.length+" 只"),m.join("、")}return n.subject||"—"}function U(n){b&&b.navigateTo&&b.navigateTo("shortterm",n)}function $(){b.currentSubPage.value="research-history",j()}async function j(){const n=c("researchHistory"),o=++n.n;h.value=!0,O.value=!1;try{const d=window.__quantModules&&window.__quantModules.core||{},m=typeof d.authHeaders=="function"?d.authHeaders():{},v=L.value?"?type="+encodeURIComponent(L.value):"",p=await fetch("/api/strategies/research-history"+v,{headers:m}).then(function(w){return w.json()});if(o!==n.n)return;F.value=p&&p.items||[]}catch(d){console.error("[research-history] 加载失败:",d),O.value=!0}finally{h.value=!1}}async function y(){const n=c("researchExport"),o=++n.n;R.value=!0;try{const d=window.__quantModules&&window.__quantModules.core||{},m=typeof d.authHeaders=="function"?d.authHeaders():{},v=L.value?"?type="+encodeURIComponent(L.value):"",p=await fetch("/api/strategies/research-history/export"+v,{headers:m});if(!p.ok)throw new Error("HTTP "+p.status);const w=await p.blob();if(o!==n.n)return;const Q=URL.createObjectURL(w),A=document.createElement("a");A.href=Q,A.download="research_history.csv",document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(Q)}catch(d){console.error("[research-history] 导出失败:",d)}finally{R.value=!1}}function u(n){const o=q.value.indexOf(n);o>=0?q.value.splice(o,1):q.value.length<10&&q.value.push(n)}function H(n){V.value=V.value===n?"":n}async function D(){const n=c("researchCompare"),o=++n.n,d=q.value;if(!(d.length<2)){E.value=!0;try{const m=window.__quantModules&&window.__quantModules.core||{},v=typeof m.authHeaders=="function"?m.authHeaders():{},p=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},v),body:JSON.stringify({ids:d})}).then(function(w){return w.json()});if(o!==n.n)return;P.value=p&&p.items||[]}catch(m){console.error("[research-history] 对比失败:",m)}finally{E.value=!1}}}async function T(n){try{await window.ElementPlus.ElMessageBox.confirm("确定删除该条实验记录？删除后不可恢复。","确认删除",{type:"warning"})}catch{return}try{const o=window.__quantModules&&window.__quantModules.core||{},d=typeof o.authHeaders=="function"?o.authHeaders():{},m=await fetch("/api/strategies/research-history/"+n,{method:"DELETE",headers:d}).then(function(v){return v.json()});if(m&&m.deleted){F.value=F.value.filter(function(p){return p.id!==n});const v=q.value.indexOf(n);v>=0&&q.value.splice(v,1)}}catch(o){console.error("[research-history] 删除失败:",o)}}const k=Vue.ref([]),x=Vue.ref(!1),N=Vue.ref(!1),C=Vue.ref([]),se=Vue.ref(!1);function re(){const n=window.__quantModules&&window.__quantModules.core||{};return typeof n.authHeaders=="function"?n.authHeaders():{}}async function ie(n){const o=n||b&&b.activeStrategyId&&b.activeStrategyId.value||"";if(!o){k.value=[],C.value=[];return}const d=c("smBtRecords"),m=++d.n;x.value=!0,N.value=!1;try{const v=await fetch("/api/backtest/history?days=0&limit=100&sid="+encodeURIComponent(o),{headers:re()}).then(function(w){return w.json()});if(m!==d.n)return;k.value=v&&v.data||[];const p=k.value.filter(function(w){return w.id&&!w.legacy}).map(function(w){return w.id});C.value=C.value.filter(function(w){return p.indexOf(w)>=0})}catch(v){if(m!==d.n)return;console.error("[strategy-manage] 回测记录加载失败:",v),N.value=!0}finally{x.value=!1}}function he(n){if(!n)return;const o=C.value.indexOf(n);o>=0?C.value.splice(o,1):C.value.push(n)}function ne(n){C.value=n?k.value.filter(function(o){return o.id&&!o.legacy}).map(function(o){return o.id}):[]}async function W(n){const o=window.ElementPlus||{};if(!o.ElMessageBox)return!1;try{return await o.ElMessageBox.confirm(n,"确认删除",{type:"warning"}),!0}catch{return!1}}async function G(n){if(!(!n||!n.id||n.legacy)&&await W("确定删除该条回测结果？删除后不可恢复。"))try{const o=await fetch("/api/strategies/research-history/"+encodeURIComponent(n.id),{method:"DELETE",headers:re()}).then(function(d){return d.json()});if(!o||!o.deleted)throw new Error(o&&o.detail||"删除失败");await ie(),await j()}catch(o){console.error("[strategy-manage] 删除回测记录失败:",o);const d=window.ElementPlus||{};d.ElMessage&&d.ElMessage.error&&d.ElMessage.error("删除失败: "+o.message)}}async function I(){const n=(C.value||[]).slice(0,50);if(n.length&&await W("确定删除选中的 "+n.length+" 条回测结果？删除后不可恢复。"))try{if(!await fetch("/api/strategies/research-history/batch-delete",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},re()),body:JSON.stringify({ids:n})}).then(function(d){return d.json()}))throw new Error("删除失败");C.value=[],se.value=!1,await ie(),await j()}catch(o){console.error("[strategy-manage] 批量删除回测记录失败:",o);const d=window.ElementPlus||{};d.ElMessage&&d.ElMessage.error&&d.ElMessage.error("批量删除失败: "+o.message)}}async function ve(){K.value=!0;try{const n=window.__quantModules&&window.__quantModules.core||{},o=typeof n.authHeaders=="function"?n.authHeaders():{},d=await fetch("/api/strategies/research-history?limit=200",{headers:o}).then(function(p){return p.json()}),m=d&&d.items||[],v={};m.forEach(function(p){if(p.type!=="backtest")return;const w=p.subject||"";(!v[w]||String(p.created_at)>String(v[w].created_at))&&(v[w]=p)}),Y.value=Object.keys(v).map(function(p){const w=v[p].summary||{};return{sid:p,ts:v[p].created_at,annual_return:w.annual_return,max_drawdown:w.max_drawdown,sharpe_ratio:w.sharpe_ratio,win_rate:w.win_rate}})}catch(n){console.error("[overview-compare] 加载失败:",n)}finally{K.value=!1}}const le=Vue.ref([]),X=Vue.ref(!1),be=Vue.ref(""),me=Vue.ref(!1),pe=Vue.ref(""),fe=Vue.ref("recent"),_e=Vue.ref(!1);async function Z(n){if(!(le.value.length&&!n)){X.value=!0,be.value="";try{const o=window.__quantModules&&window.__quantModules.core||{},d=typeof o.authHeaders=="function"?o.authHeaders():{},m=await fetch("/api/strategies/overview",{headers:d});if(!m.ok)throw new Error("HTTP "+m.status);const v=await m.json();le.value=v&&v.items||[],me.value=!!(v&&v.degraded)}catch(o){be.value=String(o&&o.message?o.message:o)}finally{X.value=!1}}}function oe(n){const o=Number(n);return isFinite(o)?o:null}const ce=Vue.computed(function(){var n=(pe.value||"").trim().toLowerCase(),o=le.value.filter(function(m){return _e.value&&!m.enabled?!1:n?(String(m.name)+" "+String(m.id)+" "+String(m.id_cn)).toLowerCase().indexOf(n)>=0:!0}),d=fe.value;return o=o.slice().sort(function(m,v){if(d==="return"){var p=oe(m.last_backtest&&m.last_backtest.annual_return),w=oe(v.last_backtest&&v.last_backtest.annual_return);return p===null&&w===null?0:p===null?1:w===null?-1:w-p}if(d==="holdings")return(oe(v.holdings_count)||0)-(oe(m.holdings_count)||0);var Q=m.last_run&&m.last_run.started_at||"",A=v.last_run&&v.last_run.started_at||"";return!Q&&!A?0:Q?A&&String(A)>String(Q)?1:-1:1}),o});function ge(n){if(!n)return"—";var o=n.last_run&&n.last_run.status;return o==="running"?"运行中":o==="failed"?"上次失败":n.enabled?"正常":"未纳管"}function ye(n){n&&(b.activeStrategyId&&(b.activeStrategyId.value=n),b.currentSubPage.value="strategy-manage")}function Re(n){n&&(b.currentSubPage.value="backtest",b.activeStrategyId&&(b.activeStrategyId.value=n),b.backtestStrategy&&(b.backtestStrategy.value=n),b.setBacktestMonths&&b.setBacktestMonths(18))}return{researchHistory:F,researchHistoryLoading:h,researchHistoryError:O,researchHistoryType:L,researchHistorySelected:q,researchDetailId:V,researchCompareRows:P,researchCompareLoading:E,researchExportLoading:R,researchTypeLabel:J,researchSubjectLabel:B,goShortterm:U,openResearchHistory:$,loadResearchHistory:j,exportResearchHistory:y,toggleResearchSelect:u,toggleResearchDetail:H,runResearchCompare:D,deleteResearchHistory:T,smBtRows:k,smBtLoading:x,smBtError:N,smBtSelected:C,smBtAllSelected:se,loadSmBtRecords:ie,toggleSmBtSelect:he,toggleSmBtSelectAll:ne,deleteSmBtRecord:G,batchDeleteSmBtRecords:I,overviewCompareRows:Y,overviewCompareLoading:K,loadOverviewCompare:ve,goBacktestFor:Re,strategyOverview:le,strategyOverviewLoading:X,strategyOverviewError:be,strategyOverviewDegraded:me,overviewKeyword:pe,overviewSortKey:fe,overviewOnlyEnabled:_e,strategyCardRows:ce,loadStrategyOverview:Z,strategyStatusText:ge,openStrategyManageFor:ye}}}})();(function(){window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategyBoard={name:"qc-strategy-board",props:{rows:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},error:{type:String,default:""},keyword:{type:String,default:""},sortKey:{type:String,default:"recent"},onlyEnabled:{type:Boolean,default:!1},degraded:{type:Boolean,default:!1}},emits:["update:keyword","update:sortKey","update:onlyEnabled","backtest","detail","retry"],computed:{summaryText(){const i=this.rows.length,c=this.rows.filter(b=>b.last_backtest).length;return`共 ${i} 个策略 · 已有回测记录 ${c} 个 · 点「回测」直接带入默认 18 个月/100 万`}},methods:{fmtPct(i){const c=Number(i);return i==null||!isFinite(c)?"—":c.toFixed(2)+"%"},fmtNum(i){const c=Number(i);return i==null||!isFinite(c)?"—":c.toFixed(2)},statusClass(i){const c=i&&i.last_run&&i.last_run.status;return c==="running"?"is-running":c==="failed"?"is-failed":i&&!i.enabled?"is-idle":"is-ok"},statusText(i){const c=i&&i.last_run&&i.last_run.status;return c==="running"?"运行中":c==="failed"?"上次失败":i&&!i.enabled?"未纳管":"正常"},lastRunText(i){const c=i&&i.last_run&&(i.last_run.finished_at||i.last_run.started_at);return c?String(c).replace("T"," ").slice(0,16):"从未运行"},pnlClass(i){if(i==null||i==="")return"";const c=Number(i);return isFinite(c)?c>=0?"is-rise":"is-fall":""}},template:`
    <div class="qc-strategy-board">
      <div class="qc-sb-head">
        <div class="qc-sb-title"><qc-icon name="layers" :size="16" /> 策略工作台</div>
        <div class="qc-sb-tools">
          <el-input class="w-200" size="small" clearable :model-value="keyword" placeholder="搜索策略名 / id"
                    @update:model-value="$emit('update:keyword', $event)"></el-input>
          <el-select class="w-select-sm" size="small" :model-value="sortKey" @update:model-value="$emit('update:sortKey', $event)">
            <el-option value="recent" label="按最近运行"></el-option>
            <el-option value="return" label="按年化收益"></el-option>
            <el-option value="holdings" label="按选股数"></el-option>
          </el-select>
          <el-checkbox :model-value="onlyEnabled" @update:model-value="$emit('update:onlyEnabled', $event)">仅看已纳管</el-checkbox>
          <el-button size="small" @click="$emit('retry')"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
        </div>
      </div>
      <div class="qc-sb-note">{{ summaryText }}</div>
      <div v-if="degraded" class="qc-sb-warn" role="status">
        <qc-icon name="alert-triangle" :size="14" /> 运行历史不可达，最近运行与收益列可能为空（策略定义与纳管状态仍准确）
      </div>
      <qc-state-panel v-if="loading" type="loading"></qc-state-panel>
      <qc-state-panel v-else-if="error" type="error" title="策略列表加载失败" :desc="error" @retry="$emit('retry')"></qc-state-panel>
      <div v-else-if="!rows.length" class="text-sm-tertiary">没有匹配的策略。清空搜索条件或到「全新创建」新建一个。</div>
      <div v-else class="qc-sb-scroll">
      <table class="qr-compare-table qc-sb-table">
        <thead>
          <tr>
            <th class="qc-sb-col-name">策略</th>
            <th>状态</th>
            <th>最近运行</th>
            <th class="qc-sb-col-num">选股数</th>
            <th class="qc-sb-col-num">年化</th>
            <th class="qc-sb-col-num">回撤</th>
            <th class="qc-sb-col-num">夏普</th>
            <th class="qc-sb-col-ops">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in rows" :key="r.id" :data-sid="r.id">
            <td class="qc-sb-col-name">
              <div class="qc-sb-name">{{ r.name }}</div>
              <div class="qc-sb-id">{{ r.id }}<span v-if="r.version"> · v{{ r.version }}</span></div>
            </td>
            <td><span class="qc-sb-status" :class="statusClass(r)">{{ statusText(r) }}</span></td>
            <td class="text-sm-tertiary">{{ lastRunText(r) }}<span v-if="r.run_count_30d"> · 30日 {{ r.run_count_30d }} 次</span></td>
            <td class="qc-sb-col-num">{{ r.holdings_count || 0 }}</td>
            <td class="qc-sb-col-num" :class="pnlClass(r.last_backtest && r.last_backtest.annual_return)">{{ r.last_backtest ? fmtPct(r.last_backtest.annual_return) : '—' }}</td>
            <td class="qc-sb-col-num" :class="pnlClass(r.last_backtest && r.last_backtest.max_drawdown)">{{ r.last_backtest ? fmtPct(r.last_backtest.max_drawdown) : '—' }}</td>
            <td class="qc-sb-col-num">{{ r.last_backtest ? fmtNum(r.last_backtest.sharpe_ratio) : '—' }}</td>
            <td class="qc-sb-col-ops">
              <el-button size="small" type="primary" plain @click="$emit('backtest', r.id)">回测</el-button>
              <el-button size="small" @click="$emit('detail', r.id)">明细</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    `}})();window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.part1=`
                <!-- V5.2.3: 市场复盘移入短线复盘 → 本组件在 shortterm 下也渲染该子页 (V6.9.1-fix: 异动扫描已删除) -->
                <div key="research">
                    <!-- V6.9.4 (FIX): 根 v-if currentPage 判断在组件内为死值导致整页空白 — 移除, 子页由 currentSubPage 控制 -->
                    <!-- V6.9.3 (F11.2): 策略研究菜单恒显 — 移除 researchMenuEnabled 占位分支 -->
                    <!-- V4.9 (P2): 研究概览子页 -->
                    <div v-if="currentSubPage === 'research-overview'" class="card">
                        <qc-page-head icon="bar-chart-3" title="资产总览"></qc-page-head>
                        <!-- 6.3.1 (T-6.3.1.3): 四态统一 — 加载/错误/空态收敛到 qc-state-panel -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || t('state.strategiesError')" :desc="t('state.descService')" @retry="loadStrategies"></qc-state-panel>
                        <qc-state-panel v-else-if="strategies.length === 0 && variants.length === 0 && customs.length === 0" type="empty" icon="flask-conical" :title="t('state.emptyStrategyResearch')" :desc="t('state.descEmptyStrategyResearch')" action-text="去策略管理" action-key="go_strategy"></qc-state-panel>
                        <template v-else>
                        <!-- 快速入口网格 -->
                        <div class="dashboard-grid">
                            <div class="stat-card clickable" @click="currentSubPage = 'quant-research'">
                                <div class="stat-icon"><qc-icon name="flask-conical" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ strategies.length }}</div>
                                    <div class="stat-label">策略总数</div>
                                </div>
                            </div>
                            <div class="stat-card clickable" @click="openStrategyManage('template')">
                                <div class="stat-icon"><qc-icon name="pencil" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ variants.length }}</div>
                                    <div class="stat-label">微调策略</div>
                                </div>
                            </div>
                            <div class="stat-card clickable" @click="openStrategyManage('custom')">
                                <div class="stat-icon"><qc-icon name="rocket" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ customs.length }}</div>
                                    <div class="stat-label">自定义策略</div>
                                </div>
                            </div>
                            <div class="stat-card clickable" @click="goShortterm('market-review')">
                                <div class="stat-icon"><qc-icon name="file-text" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ marketReviews.length }}</div>
                                    <div class="stat-label">市场复盘</div>
                                </div>
                            </div>
                            <!-- 5.1.0 (T-5.1.4): 研究历史入口 (实验持久化) -->
                            <div class="stat-card clickable" @click="openResearchHistory">
                                <div class="stat-icon"><qc-icon name="folder" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ researchHistory.length }}</div>
                                    <div class="stat-label">研究历史</div>
                                </div>
                            </div>
                        </div>
                        <!-- v7.22 (FR-4): 对比块移出 dashboard-grid，独立卡片 + 滚动表格容器 -->
                        <div class="card mt-8">
                            <div class="card-title"><qc-icon name="git-compare" :size="16" /> 跨策略回测对比 <span class="text-sm-tertiary">每策略最近一次回测 · 点击行跳转回测页</span></div>
                            <qc-state-panel v-if="overviewCompareLoading" type="loading"></qc-state-panel>
                            <div v-else-if="!overviewCompareRows.length" class="text-sm-tertiary mt-8">还没有回测实验。到 策略回测 运行一次后，这里会出现跨策略横向对比。</div>
                            <div v-else class="table-container">
                                <table class="qr-compare-table">
                                    <thead>
                                        <tr><th>策略</th><th>年化</th><th>回撤</th><th>夏普</th><th>胜率</th><th>时间</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="r in overviewCompareRows" :key="'ovc-' + r.sid" class="clickable" @click="goBacktestFor(r.sid)">
                                            <td><strong>{{ LX.sid(r.sid) }}</strong></td>
                                            <td :class="r.annual_return >= 0 ? 'is-rise' : 'is-fall'">{{ fmtPct(r.annual_return) }}</td>
                                            <!-- v7.22: 回撤统一按负向指标展示，避免两条后端路径符号口径相反导致一红一绿 -->
                                            <td class="is-fall">{{ fmtPct(-Math.abs(r.max_drawdown || 0)) }}</td>
                                            <td>{{ fmtNum(r.sharpe_ratio) }}</td>
                                            <!-- v7.22: 胜率无正号；时间单行显示 -->
                                            <td>{{ fmtPct(r.win_rate).replace('+', '') }}</td>
                                            <td class="text-sm-tertiary qr-ts">{{ r.ts ? r.ts.slice(0, 16).replace('T', ' ') : '—' }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- 快速入口列表 -->
                        <div class="card-title mt-4"><qc-icon name="link" :size="16" /> 快捷入口</div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'quant-research'">
                            <div class="consensus-badge">1</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="flask-conical" :size="14" /> 量化研究</div>
                                <div class="consensus-name">策略注册表 · 参数方案 · 因子IC分析 · 参数扫描</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="openStrategyManage('template')">
                            <div class="consensus-badge">2</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="pencil" :size="14" /> 模板编辑</div>
                                <div class="consensus-name">复制母本 → SelectionSpec 微调 → AI 交易码生成</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="openStrategyManage('custom')">
                            <div class="consensus-badge">3</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="rocket" :size="14" /> 全新创建</div>
                                <div class="consensus-name">AI 代写 · 本地回测 · AI 优化</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'backtest'">
                            <div class="consensus-badge">4</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="bar-chart-3" :size="14" /> 回测工作台</div>
                                <div class="consensus-name">单/多策略回测 · 净值曲线 · 年度收益</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="goShortterm('market-review')">
                            <div class="consensus-badge">5</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="file-text" :size="14" /> 市场复盘</div>
                                <div class="consensus-name">AI 每日市场解读 · 三大指数 · 板块资金 · 情绪分析</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <!-- 5.1.0 (T-5.1.4): 研究历史入口 (V6.9.1-fix: 异动扫描已删除, 编号 7→6) -->
                        <div class="consensus-item clickable" @click="openResearchHistory">
                            <div class="consensus-badge">6</div>
                            <div class="consensus-info">
                                <div class="consensus-code"><qc-icon name="folder" :size="14" /> 研究历史</div>
                                <div class="consensus-name">因子IC · 分层 · 扫描 · 回测 实验记录 · 对比</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        </template>
                    </div>
                    <div v-if="currentSubPage === 'quant-research'" class="card">
                        <qc-page-head :title="t('research.quantResearch')"></qc-page-head>
                        <!-- v7.14 (FR-6): 页内锚点导航 — 策略运行 / 因子研究 / 个股评分 / 参数扫描 -->
                        <div class="qr-anchor-nav" role="navigation" aria-label="页面区块导航">
                            <el-button size="small" text type="primary" @click="researchAnchorScroll('qr-run')">策略运行</el-button>
                            <el-button size="small" text type="primary" @click="researchAnchorScroll('qr-factor')">因子研究</el-button>
                            <el-button size="small" text type="primary" @click="researchAnchorScroll('qr-score')">个股评分</el-button>
                            <el-button size="small" text type="primary" @click="researchAnchorScroll('qr-sweep')">参数扫描</el-button>
                        </div>
                        <!-- V6.9.4 (F6.2): 持仓数据文件缺失可诊断提示条 (策略定义列表仍可用) -->
                        <div v-if="strategiesWarn" class="text-danger-semibold mt-8" role="alert"><qc-icon name="alert-triangle" :size="14" /> {{ strategiesWarn }}</div>
                        <!-- v3.19 (策略研究 P0): 策略注册表 → schema 表单 → 运行/回测/PTrade 导出 -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || t('state.strategiesManageError')"
                            :desc="t('state.descService')" @retry="loadStrategies"></qc-state-panel>
                        <qc-state-panel v-else-if="strategies.length === 0" type="empty" icon="flask-conical" :title="t('state.emptyStrategy')" :desc="t('state.descEmptyStrategy')" action-text="去创建策略" action-key="go_strategy"></qc-state-panel>
                        <template v-else>
                            <div id="qr-run" class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="flask-conical" :size="18" /></div><div class="stat-label">策略总数</div><div class="stat-value">{{ strategies.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><span class="qc-status-dot is-success"></span></div><div class="stat-label">当前策略</div><div class="stat-value stat-value-lg">{{ activeStrategy ? activeStrategy.name : '—' }}</div></div>
                            </div>
                            <!-- 策略列表: 卡片 + 选择 -->
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-select class="w-select-lg" v-model="activeStrategyId" size="small" placeholder="选择策略" @change="onStrategyChange">
                                    <el-option v-for="s in strategies" :key="s.id" :label="s.name + ' (' + s.id + ')'" :value="s.id" />
                                </el-select>
                                <el-button size="small" type="primary" @click="runActiveStrategy" :loading="strategyRunning"><qc-icon name="play" :size="14" /> 手工运行</el-button>
                                <el-date-picker class="w-150" v-model="runAsOf" type="date" size="small" placeholder="评估日(默认最新)" value-format="YYYY-MM-DD"/>
                                <el-button size="small" @click="exportActivePtradeCode"><qc-icon name="upload" :size="14" /> 导出 PTrade 代码</el-button>
                            </div>
                            <!-- v3.21 (P0-6): 策略纳管卡片 (默认纳管不可删, 可复制调参) -->
                            <div class="strategy-params flex-wrap-gap-12-mb16-c">
                                <div class="strategy-param-row">
                                    <span class="strategy-param-label">纳管</span>
                                    <el-switch v-model="govEnabled" @change="updateGov" />
                                    <span class="strategy-param-label">进日历</span>
                                    <el-switch v-model="govShowCalendar" @change="updateGov" />
                                    <el-select class="w-select-sm" size="small" v-model="govSchedule" @change="updateGov">
                                        <el-option v-for="t in ['20:00','21:00','22:00','08:00']" :key="t" :label="t" :value="t" />
                                    </el-select>
                                    <el-select class="w-select-sm" size="small" v-model="govUniverse" @change="updateGov" :disabled="!govEnabled">
                                        <el-option value="default" label="内置池" />
                                        <el-option value="all" label="全市场" />
                                    </el-select>
                                    <el-button size="small" type="warning" @click="runOnceActive" :loading="govRunning"><qc-icon name="zap" :size="14" /> 立即生成持仓</el-button>
                                    <el-button v-if="lastHoldings" size="small" @click="openLastHoldings"><qc-icon name="file-text" :size="14" /> 查看最近持仓</el-button>
                                    <el-button size="small" @click="cloneStrategy"><qc-icon name="file-text" :size="14" /> 复制为副本调参</el-button>
                                </div>
                            </div>
                            <div v-if="activeStrategy" class="strategy-detail">
                                <div class="text-sm-tertiary-mt8">{{ activeStrategy.description }}</div>
                                <!-- v3.21 (P0-3): 参数方案保存/加载 -->
                                <div class="strategy-params">
                                    <div class="strategy-param-row">
                                        <el-select class="w-select-lg" size="small" v-model="profileSelect" placeholder="加载已存方案" @change="applyProfile">
                                            <el-option v-for="p in profiles" :key="p.id" :label="p.name" :value="p.id" />
                                        </el-select>
                                        <el-input class="w-140" size="small" v-model="profileName" placeholder="方案名" />
                                        <el-button size="small" type="primary" @click="saveProfile" :loading="savingProfile"><qc-icon name="save" :size="14" /> 保存方案</el-button>
                                        <el-button v-if="profileSelect" size="small" type="danger" @click="deleteProfile"><qc-icon name="trash-2" :size="14" /> 删除</el-button>
                                    </div>
                                </div>
                                <!-- schema 驱动参数表单 (v7.14 FR-6: 双列栅格) -->
                                <div class="strategy-params qr-param-grid">
                                    <div v-for="f in activeStrategy.schema" :key="f.key" class="strategy-param-row">
                                        <label class="strategy-param-label">{{ f.label }}</label>
                                        <el-select v-if="f.type === 'enum'" class="w-select-lg" size="small" v-model="paramValues[f.key]" @change="paramValues[f.key] = $event">
                                            <el-option v-for="o in f.options" :key="o" :label="o" :value="o" />
                                        </el-select>
                                        <el-switch v-else-if="f.type === 'bool'" v-model="paramValues[f.key]"></el-switch>
                                        <el-input-number v-else class="w-200" size="small" :min="f.min" :max="f.max" :step="f.step || 1" v-model="paramValues[f.key]"></el-input-number>
                                    </div>
                                </div>
                                <!-- PTrade 代码预览 -->
                                <div v-if="ptradeCode" class="ptrade-code-box">
                                    <div class="strategy-param-label">PTrade 代码预览 ({{ ptradeCode.length }} 字符)</div>
                                    <pre class="ptrade-code-pre">{{ ptradeCode }}</pre>
                                    <el-button size="small" type="primary" @click="copyPtradeCode">复制代码</el-button>
                                </div>
                                <!-- 运行历史 (v7.14 FR-7: 行可展开查看选股明细) -->
                                <div v-if="strategyRuns.length" class="strategy-runs">
                                    <div class="strategy-param-label">最近运行</div>
                                    <div v-for="run in strategyRuns.slice(0, 5)" :key="run.id" class="strategy-run-row">
                                        <span class="strategy-run-status" :class="run.status">{{ run.status_cn || LX.status(run.status) }}</span>
                                        <span class="text-sm">{{ run.mode_cn || LX.mode(run.mode) }} · {{ run.started_at }}</span>
                                        <span v-if="run.summary && run.summary.symbols" class="text-sm">选股 {{ run.summary.symbols.length }} 只</span>
                                        <el-button v-if="run.summary && run.summary.symbols && run.summary.symbols.length" size="small" link type="primary" @click="toggleRunDetail(run.id)">
                                            {{ expandedRunId === run.id ? '收起' : '明细' }}
                                        </el-button>
                                        <div v-if="expandedRunId === run.id && run.summary && run.summary.symbols" class="qr-run-detail mt-8">
                                            <!-- v7.19 (FR-9): 代码 + 中文名同排；后端未命中名称时显式 —，不伪装 -->
                                            <span v-for="sym in run.summary.symbols" :key="sym" class="qc711-badge"
                                                  :title="sym + ' ' + ((run.summary.symbol_names && run.summary.symbol_names[sym]) || '名称缺失')">
                                                {{ sym }} {{ (run.summary.symbol_names && run.summary.symbol_names[sym]) || '—' }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <!-- v3.20 (P1-F8): 因子研究 — 单因子IC评价 + 分层回测 -->
                        <div id="qr-factor" class="factor-research">
                            <div class="card-title"><qc-icon name="bar-chart-3" :size="16" /> 因子研究 <span class="text-sm-tertiary">窗口默认 = 最近交易日往前 6 个月, 可自定义</span></div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-select class="w-select-lg" v-model="factorKey" size="small" placeholder="选择因子">
                                    <el-option-group v-for="g in factorGroupedOptions()" :key="g.category" :label="g.label">
                                        <el-option v-for="f in g.items" :key="f.name" :label="LX.factorWithCategory(f.name, f.category, f.label, f.category_cn)" :value="f.name" />
                                    </el-option-group>
                                </el-select>
                                <!-- v7.14 (FR-2): 研究时间窗口 -->
                                <el-date-picker class="w-260" v-model="factorRange" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="YYYY-MM-DD"/>
                                <el-button size="small" type="primary" @click="runFactorIc" :loading="factorIcLoading">IC 分析</el-button>
                                <el-button size="small" @click="runFactorLayer" :loading="factorLayerLoading">分层回测</el-button>
                                <el-button size="small" @click="runFactorDetail" :loading="factorDetailLoading">因子详情</el-button>
                            </div>
                            <!-- v7.14 (FR-3): 数据降级持久警示条 -->
                            <div v-if="factorIcDegraded || factorLayerDegraded || factorDetailDegraded" class="qr-degraded-banner" role="alert">
                                <qc-icon name="alert-triangle" :size="14" /> 数据源不可达，以下结果基于模拟数据，不可作为研究结论
                            </div>
                            <!-- IC 报告 -->
                            <div v-if="factorIcReport" class="factor-ic-report">
                                <div class="grid-auto-fit-140-mb16">
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorIcReport.ic_mean) }}</div>
                                        <div class="stat-label">IC 均值</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorIcReport.icir) }}</div>
                                        <div class="stat-label">ICIR</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorIcReport.win_rate) }}</div>
                                        <div class="stat-label">IC>0 胜率</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorIcReport.grade }}</div>
                                        <div class="stat-label">评级</div>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt8">样本 {{ factorIcReport.count }} 日</div>
                                <!-- v7.14 (FR-4): IC 时序曲线 -->
                                <div class="w-100-h240 mt-8" id="factorIcChart"></div>
                            </div>
                            <!-- 分层回测 -->
                            <div v-if="factorLayerResult" class="factor-layer-result">
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <div class="stat-card p-12" v-for="ly in factorLayerResult.layers" :key="ly.layer">
                                        <div class="stat-value text-lg" :class="ly.layer === factorLayerResult.layers.length ? 'up' : (ly.return < 0 ? 'down' : 'flat')">{{ fmtPct(ly.return) }}</div>
                                        <div class="stat-label">层 {{ ly.layer }}</div>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt8" :class="factorLayerResult.monotonic ? 'up' : 'down'">
                                    单调性: {{ factorLayerResult.monotonic ? '单调递增 ✓' : '非单调' }} · 多空价差 {{ fmtPct(factorLayerResult.spread) }}
                                </div>
                                <!-- v7.14 (FR-4): 分层收益柱状图(涨红跌绿) -->
                                <div class="w-100-h240 mt-8" id="factorLayerChart"></div>
                            </div>
                            <!-- T-5.1.16: 因子详情面板 (定义/覆盖度/IC衰减/换手/多重检验/近2年) -->
                            <div v-if="factorDetail" class="factor-detail-panel mt-8">
                                <div class="card-title"><qc-icon name="file-text" :size="16" /> 因子详情 <span class="text-sm-tertiary">{{ factorDetail.meta.name }} · {{ factorDetail.meta.category }}</span></div>
                                <div v-if="factorDetail.meta.description" class="text-sm-tertiary-mt8">{{ factorDetail.meta.description }}</div>
                                <!-- 覆盖度 -->
                                <div class="grid-auto-fit-140-mb16 mt-8">
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtPct(factorDetail.coverage * 100, 0) }}</div>
                                        <div class="stat-label">因子覆盖度</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorDetail.ic_decay.optimal_window || '—' }}</div>
                                        <div class="stat-label">最优持有期</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorDetail.turnover.annual_turnover, 0) }}</div>
                                        <div class="stat-label">年化换手</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtPct(factorDetail.turnover.cost_drag_pct, 1) }}</div>
                                        <div class="stat-label">年化成本拖累</div>
                                    </div>
                                </div>
                                <!-- IC 衰减 -->
                                <div v-if="factorDetail.ic_decay.windows.length" class="ic-decay-row mt-8">
                                    <span class="text-sm-secondary">IC 衰减:</span>
                                    <span v-for="w in factorDetail.ic_decay.windows" :key="w.window" class="text-sm-primary ic-decay-chip"
                                          :class="{ 'ic-best': w.window === factorDetail.ic_decay.optimal_window }">
                                        {{ w.window }} · IC {{ w.ic_mean != null ? fmtNum(w.ic_mean, 3) : '—' }}
                                    </span>
                                </div>
                                <!-- 多重检验 -->
                                <div class="mt-8" :class="factorDetail.multiple_testing.flagged ? 'text-danger-semibold' : 'text-sm-tertiary'">
                                    {{ factorDetail.multiple_testing.note }}
                                </div>
                                <!-- 近1-2年专测 -->
                                <div v-if="factorDetail.recent && factorDetail.recent.optimal_window" class="text-sm-tertiary-mt8">
                                    近1-2年专测: 最优持有期 {{ factorDetail.recent.optimal_window }}
                                    (衰减比 {{ factorDetail.recent.decay_rate != null ? fmtNum(factorDetail.recent.decay_rate, 2) : '—' }})
                                </div>
                            </div>
                            <!-- v7.12 (FR-7.4-4): 个股评分卡 —— 五维雷达 + 总分 + 否决标记 + 导出 -->
                            <div id="qr-score" class="score-card">
                                <div class="card-title"><qc-icon name="target" :size="16" /> 个股评分卡 <span class="text-sm-tertiary">五维加权(默认 35/35/10/10/10) · 缺维诚实标注 unknown · 支持一票否决</span></div>
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <el-select class="w-select-lg" size="small" v-model="scoreCode" filterable allow-create
                                               default-first-option placeholder="从最近运行结果选择或输入代码">
                                        <el-option v-for="s in lastRunSymbols" :key="'srs-' + s" :label="s" :value="s"></el-option>
                                    </el-select>
                                    <el-tooltip content="基于该股票近一年行情自动预估可算维度(技术面=20日动量自身历史分位); 数据不可得的维度保持 unknown, 绝不编造" placement="top">
                                        <el-button size="small" @click="autoEstimateDims" :loading="scoreAutoLoading" :disabled="!scoreCode"><qc-icon name="zap" :size="14" /> 自动预估维度分</el-button>
                                    </el-tooltip>
                                    <el-button size="small" type="primary" @click="runScore" :loading="scoreLoading"><qc-icon name="play" :size="14" /> 计算评分</el-button>
                                    <el-button size="small" @click="exportScore" :disabled="!scoreResult"><qc-icon name="download" :size="14" /> 导出 CSV</el-button>
                                </div>
                                <div class="grid-auto-fit-140-mb16">
                                    <div class="stat-card p-12" v-for="k in scoreConfigDims" :key="'sd-' + k">
                                        <div class="stat-label">{{ scoreDimLabel(k) }}<span v-if="scoreWeights && scoreWeights[k] != null" class="text-sm-tertiary"> · {{ fmtPct(scoreWeights[k] * 100, 0) }}</span></div>
                                        <el-input size="small" v-model="scoreDims[k]" placeholder="0-100" />
                                    </div>
                                </div>
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <el-checkbox v-model="scoreVeto">一票否决</el-checkbox>
                                    <el-input class="w-260" size="small" v-model="scoreVetoReason" placeholder="否决理由(可选)" :disabled="!scoreVeto" />
                                    <span class="text-sm-tertiary">TopN 建议</span>
                                    <el-input-number class="w-140" size="small" v-model="scoreTopN" :min="1" :max="50" :step="1" controls-position="right" />
                                </div>
                                <!-- 统一四态: 加载 / 错误 / 空 / 结果 -->
                                <qc-state-panel v-if="scoreLoading" type="loading"></qc-state-panel>
                                <qc-state-panel v-else-if="scoreError" type="error" :title="scoreError" desc="请确认已登录且评分服务可用" @retry="runScore"></qc-state-panel>
                                <div v-else-if="!scoreResult" class="text-sm-tertiary-mt8">
                                    填入五维分数后点「计算评分」；任一维度留空会标注 unknown，不会按 0 分计入总分。
                                    <div class="text-sm-tertiary mt-4">提示: 先运行一次策略，即可从上方下拉直接选择本次选股代码并一键预估维度分。</div>
                                    <div v-if="scoreAutoMsg" class="text-sm-tertiary mt-4">{{ scoreAutoMsg }}</div>
                                </div>
                                <template v-else>
                                    <div class="score-radar-row">
                                        <svg viewBox="0 0 120 120" class="score-radar" role="img" aria-label="五维评分雷达图">
                                            <circle cx="60" cy="60" r="44" class="score-radar-grid"></circle>
                                            <circle cx="60" cy="60" r="29.3" class="score-radar-grid"></circle>
                                            <circle cx="60" cy="60" r="14.7" class="score-radar-grid"></circle>
                                            <line v-for="ax in scoreRadarAxes()" :key="'ax-' + ax.key" x1="60" y1="60" :x2="ax.x" :y2="ax.y" class="score-radar-grid"></line>
                                            <polygon :points="scoreRadarPolygon()" class="score-radar-area"></polygon>
                                        </svg>
                                        <div class="score-radar-side">
                                            <div class="stat-card p-12">
                                                <div class="stat-value text-lg" :class="scoreResult.veto_flag ? 'down' : (scoreResult.total_score >= 60 ? 'up' : '')">{{ scoreResult.total_score }}</div>
                                                <div class="stat-label">综合评分 · {{ scoreResult.level }}</div>
                                                <!-- v7.16 FR-8: 缺维度覆盖率标注 -->
                                                <div v-if="scoreResult.coverage_note" class="qc711-note" style="font-size:var(--qc-font-size-xs);color:var(--color-warning)">{{ scoreResult.coverage_note }}</div>
                                                <div class="qc711-note qc-disclaimer" style="font-size:var(--qc-font-size-xs);opacity:.8">{{ t('common.disclaimer') }}</div>
                                            </div>
                                            <div class="flex-wrap-gap-12-mb16-c">
                                                <span class="qc711-badge" :class="scoreResult.veto_flag ? 'qc711-tone-warn' : 'qc711-tone-up'">
                                                    {{ scoreResult.veto_flag ? '一票否决: ' + (scoreResult.veto_reason || '已触发') : '未触发否决' }}
                                                </span>
                                                <span v-if="scoreResult.missing_dimensions && scoreResult.missing_dimensions.length" class="qc711-badge qc711-tone-warn">
                                                    缺维: {{ scoreResult.missing_dimensions.join(' / ') }}
                                                </span>
                                            </div>
                                            <div class="score-dim-list">
                                                <div v-for="row in scoreDimRows()" :key="'row-' + row.key" class="score-dim-row">
                                                    <span class="text-sm-secondary">{{ row.label }}</span>
                                                    <span class="text-sm-primary" :class="{ 'text-sm-tertiary': row.status === 'unknown' }">
                                                        {{ row.status === 'unknown' ? 'unknown' : fmtNum(row.score, 1) }}
                                                    </span>
                                                    <span class="text-sm-tertiary">权重 {{ fmtPct(row.weight * 100, 0) }} · 加权 {{ row.weighted == null ? '—' : fmtNum(row.weighted, 2) }}</span>
                                                </div>
                                            </div>
                                            <div v-if="scoreResult.top_n_suggestion && Object.keys(scoreResult.top_n_suggestion).length" class="text-sm-tertiary-mt8">
                                                TopN 建议: <span v-for="(w, sym) in scoreResult.top_n_suggestion" :key="'tn-' + sym" class="qc711-badge">{{ sym }} {{ fmtPct(w * 100, 0) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <!-- V4.0 M2-1: 参数网格扫描 (策略实验室) -->
                            <div id="qr-sweep" class="sweep-research mt-8">
                                <div class="card-title"><qc-icon name="flask-conical" :size="16" /> 参数扫描 <span class="text-sm-tertiary">网格搜索 → SDK 回测 → 按指标排序</span></div>
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <el-input class="w-260" size="small" v-model="sweepGrid" placeholder='JSON 网格, 如 {"top_n":[10,20,30],"st_filter":[true,false]}' />
                                    <el-button size="small" type="primary" @click="runSweep" :loading="sweepLoading"><qc-icon name="play" :size="14" /> 运行扫描</el-button>
                                    <!-- v7.14 (FR-8): 网格模板一键填充 -->
                                    <el-dropdown trigger="click" @command="applySweepTemplate">
                                        <el-button size="small">网格模板 <qc-icon name="chevron-down" :size="12" /></el-button>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item command="topn">选股数梯度</el-dropdown-item>
                                                <el-dropdown-item command="topn_cycle">选股数×调仓周期</el-dropdown-item>
                                                <el-dropdown-item command="topn_st">选股数×剔除ST</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                    <span class="text-sm-tertiary">指标: 年化收益(降序)</span>
                                </div>
                                <!-- v7.14 (FR-3): 数据降级持久警示条 -->
                                <div v-if="sweepDegraded" class="qr-degraded-banner mt-8" role="alert">
                                    <qc-icon name="alert-triangle" :size="14" /> 数据源不可达，以下结果基于模拟数据，不可作为研究结论
                                </div>
                                <div v-if="sweepMessage" class="text-sm-tertiary-mt8">{{ sweepMessage }}</div>
                                <!-- V5.0.2 T-5.0.24: 参数稳定性诊断 (高原 + 过拟合判定) -->
                                <div v-if="sweepStability" class="param-stability mt-8" :class="{ 'param-stability-overfit': sweepStability.verdict === 'overfit', 'param-stability-robust': sweepStability.verdict === 'robust' }">
                                    <span class="text-sm-secondary">参数稳定性:</span>
                                    <span v-if="sweepStability.verdict === 'overfit'" class="text-danger-semibold">过拟合风险 (扰动衰减比 {{ fmtNum(sweepStability.spread_ratio) }})</span>
                                    <span v-else-if="sweepStability.verdict === 'robust'" class="text-sm-primary">稳健高原 (衰减比 {{ fmtNum(sweepStability.spread_ratio) }}, 高原覆盖 {{ fmtPct(sweepStability.plateau_ratio * 100, 0) }})</span>
                                    <span v-else class="text-sm-tertiary">{{ sweepStability.note || '稳定性诊断不可用' }}</span>
                                    <span v-if="sweepStability.verdict !== 'unknown'" class="text-sm-tertiary">最优参数 {{ sweepStability.best_param }} · 高原区间 [{{ sweepStability.plateau_min }}, {{ sweepStability.plateau_max }}]</span>
                                </div>
                                <div v-if="sweepResult && sweepResult.length" class="sweep-table mt-8">
                                    <div v-for="(row, i) in sweepResult" :key="i" class="sweep-row flex-wrap-gap-12-mb16-c" :class="{ 'sweep-best': i === 0 }">
                                        <span class="text-sm-secondary w-260">参数: {{ JSON.stringify(row.params) }}</span>
                                        <span class="text-sm-primary">年化 {{ row.annual_return == null ? '—' : (row.annual_return * 100).toFixed(2) + '%' }}</span>
                                        <span class="text-sm-secondary">总收益 {{ row.total_return == null ? '—' : (row.total_return * 100).toFixed(2) + '%' }}</span>
                                        <span class="text-sm-secondary" :class="{ down: row.max_drawdown < -0.2 }">回撤 {{ row.max_drawdown == null ? '—' : (row.max_drawdown * 100).toFixed(2) + '%' }}</span>
                                        <span class="text-sm-secondary">夏普 {{ row.sharpe_ratio == null ? '—' : row.sharpe_ratio.toFixed(2) }}</span>
                                        <span v-if="row.overfit_warning" class="text-sm-tertiary"><qc-icon name="alert-triangle" :size="14" /> 疑似过拟合</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'strategy-manage'" class="card">
                        <!-- V6.6.1 (PRD F-6.6.7): 策略管理 = 模板编辑(原策略编写) + 全新创建(原全新策略) 两态 -->
                        <qc-page-head icon="layers" title="策略管理" desc="模板编辑：复制母本微调 · 全新创建：AI 代写"></qc-page-head>
                        <!-- v7.19 (T3.2): 策略工作台 —— 先罗列，再在列表上操作 (PRD 需求 ⑧) -->
                        <qc-strategy-board
                            :rows="strategyCardRows" :loading="strategyOverviewLoading"
                            :error="strategyOverviewError" :degraded="strategyOverviewDegraded"
                            :keyword="overviewKeyword" :sort-key="overviewSortKey" :only-enabled="overviewOnlyEnabled"
                            @update:keyword="overviewKeyword = $event"
                            @update:sortKey="overviewSortKey = $event"
                            @update:onlyEnabled="overviewOnlyEnabled = $event"
                            @backtest="goBacktestFor" @detail="openStrategyManageFor"
                            @retry="loadStrategyOverview(true)"></qc-strategy-board>

                        <!-- v7.26 (FR-16 / T-7.25.32): 策略管理 → 回测记录（单条/批量删除，legacy 只读） -->
                        <div v-if="activeStrategyId" class="card mt-8">
                            <div class="card-title flex-between">
                                <span><qc-icon name="history" :size="16" /> 回测记录
                                    <span class="text-sm-tertiary">{{ smBtRows.length }} 条 · {{ activeStrategyId }}</span></span>
                                <div class="flex-c-gap-8">
                                    <el-button size="small" @click="loadSmBtRecords()" :loading="smBtLoading"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                                    <el-button size="small" type="danger" plain :disabled="!smBtSelected.length" @click="batchDeleteSmBtRecords">批量删除（{{ smBtSelected.length }}）</el-button>
                                </div>
                            </div>
                            <qc-state-panel v-if="smBtLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="smBtError" type="error" title="回测记录加载失败" :desc="t('state.descNetwork')" @retry="loadSmBtRecords()"></qc-state-panel>
                            <div v-else-if="!smBtRows.length" class="text-sm-tertiary">该策略暂无回测记录；运行回测后结果将记录在此。</div>
                            <template v-else>
                                <div class="flex-c-gap-8 mb-8">
                                    <el-checkbox v-model="smBtAllSelected" @change="toggleSmBtSelectAll">全选</el-checkbox>
                                    <span class="text-xs-tertiary">旧版记录只读，不提供删除</span>
                                </div>
                                <div v-for="r in smBtRows" :key="r.id || (r.ts + '-' + r.sid)" class="strategy-item">
                                    <div class="flex-between-start-wrap">
                                        <div class="flex-c-gap-8">
                                            <el-checkbox v-if="r.id && !r.legacy" :model-value="smBtSelected.includes(r.id)" @change="toggleSmBtSelect(r.id)"></el-checkbox>
                                            <div>
                                                <span class="strategy-name">{{ r.sid_cn || r.sid }}</span>
                                                <span class="text-xs-tertiary ml-8">{{ r.ts }}</span>
                                                <span v-if="r.legacy" class="strategy-tag ml-8">旧版记录</span>
                                            </div>
                                        </div>
                                        <div class="flex-c-gap-8">
                                            <span class="strategy-tag" v-if="r.summary">年化 {{ fmtPct(r.summary.annual_return) }}</span>
                                            <span class="strategy-tag" v-if="r.summary">回撤 {{ fmtPct(r.summary.max_drawdown) }}</span>
                                            <el-button v-if="r.id && !r.legacy" size="small" link type="danger" @click="deleteSmBtRecord(r)">删除</el-button>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- v7.11 (FR-7.11-4): 参数锁定与追踪 — 消费 /api/strategies/{sid}/lock* (v7.14: 默认折叠, 未使用者不占首屏) -->
                        <div v-if="activeStrategyId && strategyManageMode === 'template'" class="qc711-mt12">
                            <el-collapse class="qr-lock-collapse">
                                <el-collapse-item name="lock" title="参数锁定与追踪 (审计/校验一致)">
                                    <qc-param-lock :sid="activeStrategyId || ''" :params="paramValues"></qc-param-lock>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                        <div class="flex-gap-8-mb16">
                            <el-button :type="strategyManageMode === 'template' ? 'primary' : ''" size="small" @click="strategyManageMode = 'template'"><qc-icon name="settings" :size="14" /> 模板编辑</el-button>
                            <el-button :type="strategyManageMode === 'custom' ? 'primary' : ''" size="small" @click="strategyManageMode = 'custom'"><qc-icon name="rocket" :size="14" /> 全新创建</el-button>
                        </div>
                        <!-- 6.3.1 (T-6.3.1.3): 四态统一 — 策略管理加载/错误/空态 -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || t('state.strategiesManageError')" :desc="t('state.descService')" @retry="loadStrategies"></qc-state-panel>
                        <qc-state-panel v-else-if="strategies.length === 0 && variants.length === 0 && customs.length === 0" type="empty" icon="layers" :title="t('state.emptyStrategyManage')" :desc="t('state.descEmptyStrategyManage')" action-text="去创建策略" action-key="go_strategy"></qc-state-panel>
                        <template v-if="strategyManageMode === 'template'">
                        <!-- v3.22 (I3A): 第1步 选择母本 + 复制 -->
                        <div class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">母本策略</span>
                            <el-select class="w-select-lg" size="small" v-model="activeStrategyId" placeholder="选择母本" @change="onStrategyChange">
                                <el-option v-for="s in strategies" :key="s.id" :label="s.name + ' (' + s.id + ')'" :value="s.id" />
                            </el-select>
                            <el-input class="w-160" size="small" v-model="profileName" placeholder="新策略名(可选)" />
                            <el-button size="small" type="primary" @click="cloneNewStrategy" :loading="variantBusy"><qc-icon name="file-text" :size="14" /> 复制为微调策略</el-button>
                            <el-button size="small" @click="loadVariants"><qc-icon name="refresh" :size="14" /> 刷新列表</el-button>
                        </div>
                        <!-- variant 列表 -->
                        <div v-if="variants.length" class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">微调策略</span>
                            <el-select class="w-select-lg" size="small" v-model="variantSelected" placeholder="选择微调策略" @change="selectVariant(variantSelected)">
                                <el-option v-for="v in variants" :key="v.id" :label="(v.name || v.id) + ' (' + v.id + ')'" :value="v.id" />
                            </el-select>
                            <el-button size="small" type="warning" @click="runVariantOnce" :loading="variantBusy"><qc-icon name="zap" :size="14" /> 生成持仓矩阵</el-button>
                        </div>
                        <div v-if="variantMsg" class="text-sm-primary mt-8">{{ variantMsg }}</div>
                        <!-- v3.22 (I3A): 第2步 SelectionSpec 微调协议 -->
                        <div v-if="variantSelected && variantSpec" class="strategy-params">
                            <div class="section-title-base mt-8"><qc-icon name="target" :size="16" /> SelectionSpec 微调选股协议 <span class="text-sm-tertiary">纯收紧约束: 仅在持仓矩阵内二次筛选</span></div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">持仓数量</label>
                                    <el-input-number class="w-140" size="small" :min="1" :max="50" v-model="variantSpec.stock_count" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">调仓周期</label>
                                    <el-input-number class="w-140" size="small" :min="1" :max="60" v-model="variantSpec.rebalance_cycle" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">剔除 ST</label>
                                    <el-switch v-model="variantSpec.exclude_st" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">指数成分</label>
                                    <el-select class="w-select-md" size="small" v-model="variantSpec.index_membership" clearable>
                                        <el-option value="hs300" label="沪深300" />
                                        <el-option value="zz500" label="中证500" />
                                        <el-option value="zz1000" label="中证1000" />
                                    </el-select>
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">行业偏好</label>
                                    <el-input class="w-200" size="small" v-model="specIndustryText" placeholder="逗号分隔, 如 电子,医药" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">市值范围(亿)</label>
                                    <el-input class="w-200" size="small" v-model="specCapText" placeholder="如 50,2000 (留空不限)" />
                                </div>
                            </div>
                            <el-button size="small" type="primary" @click="saveVariantSpec" :loading="variantSaving"><qc-icon name="save" :size="14" /> 保存 SelectionSpec</el-button>
                        </div>
                        <!-- v3.22 (I3A): 第3步 AI 交易码 -->
                        <div v-if="variantSelected" class="strategy-params">
                            <div class="section-title-base mt-8"><qc-icon name="bot" :size="16" /> AI 交易码 <span class="text-sm-tertiary">读取持仓矩阵 + SelectionSpec → PTrade 兼容代码(含风控)</span></div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-button size="small" type="primary" @click="genVariantAiCode" :loading="aiCodeLoading"><qc-icon name="zap" :size="14" /> 生成 AI 交易码</el-button>
                                <el-button size="small" @click="copyVariantCode" :disabled="!aiCode"><qc-icon name="file-text" :size="14" /> 复制代码</el-button>
`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.part2=`                            </div>
                            <div v-if="aiCode" class="ptrade-code-pre">{{ aiCode }}</div>
                        </div>
                        </template>
                        <template v-else>
                        <!-- v3.22 (I3B): 第1步 AI 代写 -->
                        <div class="strategy-params">
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-input class="w-180" size="small" v-model="customName" placeholder="策略名(如 均线突破)" />
                                <el-button size="small" type="primary" @click="genCustomCode" :loading="customGenLoading"><qc-icon name="bot" :size="14" /> AI 代写</el-button>
                                <el-button size="small" @click="loadCustoms"><qc-icon name="refresh" :size="14" /> 刷新列表</el-button>
                            </div>
                            <el-input type="textarea" :rows="3" size="small" v-model="customPrompt"
                                placeholder="描述策略思路, 如: 双均线金叉买入, 死叉卖出, 单只仓位20%, 止损8%" class="w-full" />
                        </div>
                        <!-- 自定义策略列表 -->
                        <div v-if="customs.length" class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">自定义策略</span>
                            <el-select class="w-select-lg" size="small" v-model="customSelected" placeholder="选择策略">
                                <el-option v-for="c in customs" :key="c.id" :label="(c.name || c.id) + ' (' + c.id + ')'" :value="c.id" />
                            </el-select>
                            <el-button size="small" @click="loadCustomCode" :disabled="!customSelected"><qc-icon name="file-text" :size="14" /> 读取代码</el-button>
                            <el-button size="small" type="warning" @click="runCustomBacktest" :loading="customBtLoading"><qc-icon name="zap" :size="14" /> 本地回测</el-button>
                            <el-button size="small" type="primary" @click="runCustomOptimize" :loading="customOptLoading"><qc-icon name="brain" :size="14" /> AI 优化</el-button>
                        </div>
                        <div v-if="customMsg" class="text-sm-primary mt-8">{{ customMsg }}</div>
                        <!-- 代码区 -->
                        <div v-if="customCode" class="strategy-params">
                            <div class="section-title-base mt-8"><qc-icon name="code" :size="16" /> 策略代码 <span class="text-sm-tertiary">PTrade 兼容</span></div>
                            <pre class="ptrade-code-pre">{{ customCode }}</pre>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-button size="small" @click="copyCustomCode"><qc-icon name="file-text" :size="14" /> 复制代码</el-button>
                            </div>
                        </div>
                        <!-- 回测结果 -->
                        <div v-if="customBtResult" class="strategy-params">
                            <div class="section-title-base mt-8"><qc-icon name="bar-chart-3" :size="16" /> 回测结果</div>
                            <!-- v7.14 (FR-9): 静态持仓近似回测警示 -->
                            <div class="qr-degraded-banner" role="note">
                                <qc-icon name="alert-triangle" :size="14" /> 静态持仓近似回测（未逐日执行策略逻辑），仅供方向性参考
                            </div>
                            <div class="custom-bt-grid">
                                <div class="custom-bt-item"><span class="text-sm-tertiary">标的</span><b>{{ customBtResult.symbols.length }}</b></div>
                                <div class="custom-bt-item"><span class="text-sm-tertiary">区间</span><b>{{ customBtResult.dates[0] }} → {{ customBtResult.dates[1] }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">年化</span><b>{{ fmtPct(customBtResult.metrics.annual_return_pct) }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">最大回撤</span><b>{{ fmtPct(customBtResult.metrics.max_drawdown_pct) }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">夏普</span><b>{{ fmtNum(customBtResult.metrics.sharpe) }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">胜率</span><b>{{ fmtPct(customBtResult.metrics.win_rate_pct) }}</b></div>
                            </div>
                        </div>
                        </template>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest'" class="card">
                        <qc-page-head :title="t('research.backtest')"></qc-page-head>
                        <!-- v7.19 (T3.2): 策略工作台 —— 先罗列，再在列表上操作 (PRD 需求 ⑧) -->
                        <qc-strategy-board
                            :rows="strategyCardRows" :loading="strategyOverviewLoading"
                            :error="strategyOverviewError" :degraded="strategyOverviewDegraded"
                            :keyword="overviewKeyword" :sort-key="overviewSortKey" :only-enabled="overviewOnlyEnabled"
                            @update:keyword="overviewKeyword = $event"
                            @update:sortKey="overviewSortKey = $event"
                            @update:onlyEnabled="overviewOnlyEnabled = $event"
                            @backtest="goBacktestFor" @detail="openStrategyManageFor"
                            @retry="loadStrategyOverview(true)"></qc-strategy-board>

                        <!-- v3.2.0-T21: 回测参数 (v7.14 FR-1: 下拉动态拉取注册表) -->
                        <div class="flex-wrap-gap-12-mb16-c">
                            <el-select class="w-select-md" v-model="backtestStrategy" size="small" placeholder="选择策略" :loading="!backtestStrategies.length">
                                <el-option v-for="s in backtestStrategies" :key="s.id" :label="s.name + ' (' + s.id + ')'" :value="s.id" />
                            </el-select>
                            <el-date-picker class="w-260" v-model="backtestRange" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="YYYY-MM-DD"/>
                            <!-- v7.19 (T3.1): 快捷档 — 默认 18 个月，一键切换常用窗口，避免每次手点日历 -->
                            <div class="qc-bt-quick" role="group" aria-label="回测区间快捷档">
                                <el-button v-for="m in [6, 12, 18, 36]" :key="m" size="small"
                                           :type="backtestMonths === m ? 'primary' : 'default'"
                                           :plain="backtestMonths !== m" @click="setBacktestMonths(m)">{{ m }}个月</el-button>
                            </div>
                            <el-input-number class="w-140" v-model="backtestCapital" size="small" :min="10000" :step="100000"/>
                            <span class="text-sm-tertiary">初始资金（元）</span>
                            <el-button type="primary" size="small" @click="runBacktest" :loading="backtestRunning" :disabled="!backtestStrategy"><qc-icon name="play" :size="14" /> 运行回测</el-button>
                        </div>
                        <!-- v7.19 (T3.1): 参数回显 — 让用户核对「我选的区间/资金」是否真被采用 -->
                        <div class="text-sm-tertiary-mt8" v-if="backtestResult && backtestResult.used_range">
                            本次回测口径：区间 {{ backtestResult.used_range }} · 初始资金
                            {{ backtestResult.initial_capital != null ? fmtNum(backtestResult.initial_capital) : '—' }} 元
                            · 费率 0.03% · 滑点 0.1%
                        </div>
                        <!-- v7.14 (FR-3): 数据降级持久警示条 (不可作为研究结论) -->
                        <div v-if="backtestDegraded" class="qr-degraded-banner" role="alert">
                            <qc-icon name="alert-triangle" :size="14" /> 数据源不可达，以下结果基于模拟数据，不可作为研究结论
                        </div>
                        <!-- v7.24 FR-3: 可信度门禁未通过（未来函数/样本/口径）→ 阻断正常展示 -->
                        <div v-if="backtestResult && backtestResult.credible === false" class="qr-degraded-banner" role="alert">
                            <qc-icon name="alert-triangle" :size="14" /> 结论不可信：{{ (backtestResult.credibility_reasons || []).join('；') }}
                        </div>
                        <!-- 回测结果 -->
                        <template v-if="backtestResult">
                            <div class="grid-auto-fit-140-mb16">
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtPct(backtestResult.total_return_pct) }}</div>
                                    <el-tooltip content="区间累计收益率 = (期末净值 / 期初净值 - 1) × 100%" placement="top"><div class="stat-label">总收益率 ⓘ</div></el-tooltip>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg" :title="backtestResult.annual_return_reason || ''">{{ backtestResult.sample_insufficient ? '样本不足（<18个月）' : fmtPct(backtestResult.annual_return_pct) }}</div>
                                    <el-tooltip content="年化收益 = 区间收益折算为 1 年期复利收益; 样本不足 18 个月时不输出年化" placement="top"><div class="stat-label">年化收益 ⓘ</div></el-tooltip>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtPct(backtestResult.max_drawdown_pct) }}</div>
                                    <el-tooltip content="最大回撤 = 净值从峰值到谷底的最大跌幅, 负值表示亏损幅度" placement="top"><div class="stat-label">最大回撤 ⓘ</div></el-tooltip>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.sharpe_ratio) }}</div>
                                    <el-tooltip content="夏普比率 = 年化超额收益 / 年化波动率; >1 较好, >2 优秀; 样本内交易数不足时 profit_factor 与 Kelly 仓位建议会显示 0.0(非异常)" placement="top"><div class="stat-label">夏普比率 ⓘ</div></el-tooltip>
                                </div>
                            </div>
                            <!-- v7.19 (T3.1): 金额口径的两张卡 — 「赚了多少钱」比百分比更直观 -->
                            <div class="grid-auto-fit-140-mb16" v-if="backtestResult.final_equity !== ''">
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.final_equity) }}</div>
                                    <div class="stat-label">期末权益（元）</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg" :class="Number(backtestResult.total_pnl) >= 0 ? 'qc-pnl-up' : 'qc-pnl-down'">{{ Number(backtestResult.total_pnl) >= 0 ? '+' : '' }}{{ fmtNum(backtestResult.total_pnl) }}</div>
                                    <div class="stat-label">总盈亏（元）</div>
                                </div>
                            </div>
                            <div class="w-100-h320" id="backtestEquityChart"></div>
                            <div class="text-sm-tertiary-mt8">
                                {{ backtestResult.message || '' }}
                            </div>
                        </template>
                        <qc-state-panel v-else-if="backtestError" type="error" :title="t('state.backtestError')" :desc="t('state.descBacktest')" @retry="runBacktest"></qc-state-panel>
                        <qc-state-panel v-else type="empty" icon="bar-chart-3" title="准备开始回测" desc="选择策略和日期范围后点击「运行回测」" action-text="去选择策略" action-key="go_strategy"></qc-state-panel>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest-history'" class="card">
                        <qc-page-head :title="t('research.backtestHistory')">
                            <template #actions>
                                <el-select class="w-select-sm" size="small" v-model="btHistoryDays" @change="loadBtHistory">
                                    <el-option label="近7天" :value="7" />
                                    <el-option label="近30天" :value="30" />
                                    <el-option label="近90天" :value="90" />
                                </el-select>
                                <el-button size="small" @click="loadBtHistory" :loading="btHistoryLoading"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                            </template>
                        </qc-page-head>
                        <qc-state-panel v-if="btHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="btHistoryError" type="error" title="加载失败" :desc="t('state.descNetwork')" @retry="loadBtHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="!btHistory.length" type="empty" icon="bar-chart-3" title="暂无回测记录" desc="运行回测后，结果将自动记录在此" action-text="刷新数据" action-key="refresh"></qc-state-panel>
                        <div v-else>
                            <!-- v7.24 FR-16: 批量删除回测结果 -->
                            <div class="flex-c-gap-8 mb-8">
                                <el-checkbox v-model="btAllSelected" @change="toggleBtSelectAll">全选</el-checkbox>
                                <el-button size="small" type="danger" plain :disabled="!btHistorySelected.length" @click="batchDeleteBtHistory">批量删除（{{ btHistorySelected.length }}）</el-button>
                                <span class="text-xs-tertiary">旧版记录只读，不提供删除</span>
                            </div>
                            <div v-for="r in btHistory" :key="r.id || (r.ts + '-' + r.sid)" class="card mb-12">
                                <div class="flex-between-start-wrap">
                                    <div class="flex-c-gap-8">
                                        <el-checkbox v-if="r.id && !r.legacy" v-model="btHistorySelected" :value="r.id"></el-checkbox>
                                        <div>
                                            <span class="strategy-name">{{ r.sid_cn || r.sid }}</span>
                                            <span class="text-xs-tertiary ml-8">{{ r.ts }}</span>
                                            <span v-if="r.legacy" class="strategy-tag ml-8">旧版记录</span>
                                        </div>
                                    </div>
                                    <div class="flex-c-gap-8">
                                        <span class="strategy-tag" v-if="r.summary">{{ r.summary.annual_return == null ? '样本不足（<18个月）' : '年化 ' + fmtPct(r.summary.annual_return) }}</span>
                                        <span class="strategy-tag" v-if="r.summary">回撤 {{ fmtPct(r.summary.max_drawdown) }}</span>
                                        <span class="strategy-tag" v-if="r.summary">夏普 {{ fmtNum(r.summary.sharpe_ratio) }}</span>
                                        <el-button v-if="r.id && !r.legacy" size="small" link type="danger" @click="deleteBtHistory(r)">删除</el-button>
                                    </div>
                                </div>
                                <div v-if="r.summary" class="flex-wrap-gap-12-mb16-c mt-8">
                                    <span class="text-sm-secondary">总收益: <strong :class="(r.summary.total_return || 0) >= 0 ? 'color-success' : 'color-danger'">{{ fmtPct(r.summary.total_return) }}</strong></span>
                                    <span class="text-sm-secondary">胜率: <strong>{{ fmtPct(r.summary.win_rate) }}</strong></span>
                                    <span class="text-sm-secondary">交易次数: <strong>{{ r.summary.total_trades || 0 }}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5.1.0 (T-5.1.4): 研究历史子页 (实验持久化列表/对比) -->
                    <div v-else-if="currentSubPage === 'research-history'" class="card">
                        <qc-page-head icon="folder" title="研究历史" :desc="researchHistory.length + ' 条实验'"></qc-page-head>
                        <!-- 类型过滤 -->
                        <div class="flex-wrap-gap-12-mb16-c">
                            <el-radio-group v-model="researchHistoryType" size="small" @change="loadResearchHistory">
                                <el-radio-button value="">全部</el-radio-button>
                                <el-radio-button value="factor_ic">因子IC</el-radio-button>
                                <el-radio-button value="layer">分层</el-radio-button>
                                <el-radio-button value="sweep">扫描</el-radio-button>
                                <el-radio-button value="backtest">回测</el-radio-button>
                                <el-radio-button value="timing_matrix">择时矩阵</el-radio-button>
                                <el-radio-button value="timing">择时</el-radio-button>
                                <el-radio-button value="market_state">市场状态</el-radio-button>
                            </el-radio-group>
                            <span class="text-sm-tertiary">勾选 ≤10 条可对比</span>
                            <el-button size="small" :loading="researchExportLoading" @click="exportResearchHistory"><qc-icon name="download" :size="14" /> 导出 CSV</el-button>
                        </div>
                        <qc-state-panel v-if="researchHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="researchHistoryError" type="error" title="研究历史加载失败" :desc="t('state.descNetwork')" @retry="loadResearchHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="!researchHistory.length" type="empty" icon="flask-conical" title="暂无研究实验" desc="运行因子IC / 分层 / 参数扫描 / 回测后，结果将自动记录在此" action-text="刷新数据" action-key="refresh"></qc-state-panel>
                        <template v-else>
                            <!-- 对比按钮 -->
                            <div v-if="researchHistorySelected.length >= 2" class="flex-c-gap-8 mb-12">
                                <el-button size="small" type="primary" :loading="researchCompareLoading" @click="runResearchCompare"><qc-icon name="bar-chart-3" :size="14" /> 对比所选 ({{ researchHistorySelected.length }})</el-button>
                                <el-button size="small" @click="researchHistorySelected = []">清空选择</el-button>
                            </div>
                            <!-- 对比结果 -->
                            <div v-if="researchCompareRows.length" class="card mb-12">
                                <div class="card-title"><qc-icon name="trending-up" :size="16" /> 实验对比</div>
                                <div class="table-container">
                                    <table class="bt-compare-table">
                                        <thead>
                                            <tr>
                                                <th>实验</th>
                                                <th>类型</th>
                                                <th>IC均值</th>
                                                <th>ICIR</th>
                                                <th>胜率</th>
                                                <th>年化</th>
                                                <th>回撤</th>
                                                <th>夏普</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in researchCompareRows" :key="row.id">
                                                <td>{{ researchSubjectLabel(row) }}</td>
                                                <td>{{ researchTypeLabel(row.type) }}</td>
                                                <td>{{ row.summary.ic_mean != null ? fmtNum(row.summary.ic_mean) : '—' }}</td>
                                                <td>{{ row.summary.icir != null ? fmtNum(row.summary.icir) : '—' }}</td>
                                                <td>{{ row.summary.win_rate != null ? fmtNum(row.summary.win_rate) + '%' : '—' }}</td>
                                                <td>{{ row.summary.annual_return != null ? fmtNum(row.summary.annual_return) + '%' : '—' }}</td>
                                                <td>{{ row.summary.max_drawdown != null ? fmtNum(row.summary.max_drawdown) + '%' : '—' }}</td>
                                                <td>{{ row.summary.sharpe_ratio != null ? fmtNum(row.summary.sharpe_ratio) : '—' }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- 实验列表 -->
                            <div v-for="exp in researchHistory" :key="exp.id" class="card mb-12">
                                <div class="flex-between-start-wrap">
                                    <div class="flex-c-gap-8">
                                        <el-checkbox :model-value="researchHistorySelected.includes(exp.id)"
                                            @change="toggleResearchSelect(exp.id)"></el-checkbox>
                                        <span class="strategy-name">{{ researchSubjectLabel(exp) }}</span>
                                        <span class="strategy-tag">{{ researchTypeLabel(exp.type) }}</span>
                                        <span class="text-xs-tertiary ml-8">{{ exp.created_at }}</span>
                                    </div>
                                    <div class="flex-c-gap-8">
                                        <el-button size="small" link type="primary" @click="toggleResearchDetail(exp.id)">详情</el-button>
                                        <el-button size="small" link type="danger" @click="deleteResearchHistory(exp.id)">删除</el-button>
                                    </div>
                                </div>
                                <div class="flex-wrap-gap-12-mb16-c mt-8">
                                    <span v-if="exp.summary.ic_mean != null" class="text-sm-secondary">IC均值 <strong>{{ fmtNum(exp.summary.ic_mean) }}</strong></span>
                                    <span v-if="exp.summary.icir != null" class="text-sm-secondary">ICIR <strong>{{ fmtNum(exp.summary.icir) }}</strong></span>
                                    <span v-if="exp.summary.win_rate != null" class="text-sm-secondary">胜率 <strong>{{ fmtPct(exp.summary.win_rate) }}</strong></span>
                                    <span v-if="exp.summary.annual_return != null" class="text-sm-secondary">年化 <strong>{{ fmtPct(exp.summary.annual_return) }}</strong></span>
                                    <span v-if="exp.summary.max_drawdown != null" class="text-sm-secondary">回撤 <strong>{{ fmtPct(exp.summary.max_drawdown) }}</strong></span>
                                    <span v-if="exp.summary.sharpe_ratio != null" class="text-sm-secondary">夏普 <strong>{{ fmtNum(exp.summary.sharpe_ratio) }}</strong></span>
                                    <span v-if="exp.summary.monotonic != null" class="text-sm-secondary">单调 <strong>{{ exp.summary.monotonic ? '✓' : '✗' }}</strong></span>
                                    <span v-if="exp.summary.spread != null" class="text-sm-secondary">多空价差 <strong>{{ fmtPct(exp.summary.spread) }}</strong></span>
                                    <span v-if="exp.summary.best_param" class="text-sm-secondary">最优参数 <strong>{{ JSON.stringify(exp.summary.best_param) }}</strong></span>
                                </div>
                                <div v-if="exp.date_range && exp.date_range.length" class="text-xs-tertiary">区间 {{ exp.date_range.join(' → ') }} · v{{ exp.app_version }}</div>
                                <template v-if="researchDetailId === exp.id">
                                    <div class="card mt-8">
                                        <div class="card-title">实验详情</div>
                                        <pre class="research-detail-pre">{{ JSON.stringify(exp, null, 2) }}</pre>
                                    </div>
                                </template>
                            </div>
                        </template>
                    </div>
                    <!-- v3.17.2 FR-3.17.2 市场复盘代码起点 -->
                    <div v-else-if="currentSubPage === 'market-review'" class="card market-review-card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作 (返回/刷新) -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-button v-if="selectedReviewDate" size="small" @click="selectedReviewDate = ''">← 返回列表</el-button>
                                <el-button size="small" @click="loadMarketReviews" aria-label="刷新市场复盘"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>

                        <!-- V5.15 (F8.2): 双栏 — 左日期中栏 (指标摘要) + 右内容 (列表/详情) -->
                        <div class="market-review-split" data-split-root>
                            <!-- 左: 日期中栏 (类似复盘日历) -->
                            <div class="market-review-date-list">
                                <div class="market-review-date-list-head">
                                    <span>复盘日期</span>
                                    <el-button size="small" text @click="loadMarketReviews" aria-label="刷新复盘日期"><qc-icon name="refresh" :size="14" /></el-button>
                                </div>
                                <div v-if="marketReviewLoading" class="color-secondary market-review-date-empty">加载中…</div>
                                <div v-else-if="!marketReviews.length" class="color-secondary market-review-date-empty">暂无复盘日期</div>
                                <!-- 6.3.1 (T-6.3.1.2): 复盘日期逐交易日累积可超 200 行 → 虚拟滚动 (行高常量 66px, 见 layout.css) -->
                                <qc-virtual-list v-else class="market-review-date-items" :items="marketReviews" :row-height="66" :aria-label="t('a11y.reviewDateList')">
                                    <template #default="{ item }">
                                    <div class="market-review-date-item"
                                         :class="{ 'is-active': item.date === selectedReviewDate }" role="button" tabindex="0"
                                         :aria-current="item.date === selectedReviewDate ? 'true' : null"
                                         @click="toggleMarketReviewDate(item.date)"
                                         @keydown.enter.prevent="toggleMarketReviewDate(item.date)"
                                         @keydown.space.prevent="toggleMarketReviewDate(item.date)">
                                        <div class="market-review-date-item-date">{{ item.date }}</div>
                                        <div class="market-review-date-item-meta">
                                            <span>赚钱 <b :class="(item.summary && item.summary.money_effect > 0) ? 'is-rise' : ((item.summary && item.summary.money_effect < 0) ? 'is-fall' : '')">{{ fmtPct(item.summary && item.summary.money_effect) }}</b></span>
                                            <span>情绪 <b :class="(item.summary && item.summary.emotion_score != null && item.summary.emotion_score >= 0.8) ? 'meta-emotion-hot' : ((item.summary && item.summary.emotion_score != null && item.summary.emotion_score < 0.6) ? 'meta-emotion-cold' : '')">{{ fmtEmotion(item.summary && item.summary.emotion_score) }}</b></span>
                                            <span>涨停 <b>{{ item.summary && item.summary.zt_count != null ? item.summary.zt_count : '—' }}</b></span>
                                        </div>
                                    </div>
                                    </template>
                                </qc-virtual-list>
                            </div>
                            <div class="split-divider" data-split-resize></div>
                            <!-- 右: 内容 (列表 / 详情) -->
                            <div class="market-review-split-content">
                            <!-- ===== 列表视图 ===== -->
                            <template v-if="!selectedReviewDate">
                                <qc-state-panel v-if="marketReviewLoading" type="loading"></qc-state-panel>
                                <qc-state-panel v-else-if="marketReviewError" type="error" title="复盘列表加载失败"
                                    :desc="t('state.descNetwork')" @retry="loadMarketReviews"></qc-state-panel>
                                <qc-state-panel v-else-if="!marketReviews.length" type="empty" icon="file-text" title="暂无市场复盘"
                                    desc="尚未生成任何市场复盘报告" action-text="刷新数据" action-key="refresh" @retry="loadMarketReviews"></qc-state-panel>
                                <div v-else>
                                    <div class="flex-wrap mb-4">
                                        <div class="stat-card"><div class="stat-icon info"><qc-icon name="file-text" :size="18" /></div><div class="stat-label">复盘总数</div><div class="stat-value">{{ marketReviews.length }}</div></div>
                                        <div class="stat-card"><div class="stat-icon success"><qc-icon name="calendar" :size="18" /></div><div class="stat-label">最新复盘</div><div class="stat-value stat-value-lg">{{ marketReviews[0] ? marketReviews[0].date : '—' }}</div></div>
                                    </div>
                                    <!-- 6.3.1 (T-6.3.1.2): 复盘列表逐交易日累积可超 200 行 → 虚拟滚动 (行高常量 60px, 见 themes.css) -->
                                    <qc-virtual-list class="market-review-list market-review-list-vlist" :items="marketReviews" :row-height="60" :aria-label="t('a11y.dailyReviewList')">
                                        <template #default="{ item }">
                                        <div class="market-review-row"
                                             tabindex="0" role="button" :aria-label="t('a11y.viewMarketReview', { date: item.date })"
                                             @click="openMarketReview(item.date)"
                                             @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            <div class="market-review-row-main">
                                                <span class="market-review-date">{{ item.date }}</span>
                                                <span class="market-review-badge market-review-ai-badge">AI 解读</span>
                                                <span v-for="(src, i) in marketReviewSrcEntries(item.data_sources)" :key="i"
                                                      class="market-review-src" :class="{ 'is-unavailable': src.unavailable }">
                                                    {{ src.label }} {{ src.value }}
                                                </span>
                                            </div>
                                            <span class="market-review-arrow">›</span>
                                        </div>
                                        </template>
                                    </qc-virtual-list>
                                </div>
                            </template>

                        <!-- ===== 详情视图 ===== -->
                        <template v-else>
                            <div class="market-review-detail-head">
                                <el-button size="small" @click="backToMarketReviewList">返回列表</el-button>
                                <span class="market-review-detail-date">{{ selectedReviewDate }}</span>
                            </div>
                            <qc-state-panel v-if="marketReviewDetailLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="marketReviewDetailError" type="error" title="复盘详情加载失败"
                                :desc="t('state.descNetwork')" @retry="loadMarketReviewDetail(selectedReviewDate)"></qc-state-panel>
                            <template v-else-if="marketReviewDetail">
                                <!-- ① 三大指数表现 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">三大指数表现</div>
                                    <div v-if="marketReviewDetail.market && marketReviewDetail.market.indexes && marketReviewDetail.market.indexes.length" class="market-review-index-grid">
                                        <div v-for="idx in marketReviewDetail.market.indexes" :key="idx.code" class="market-review-index-card">
                                            <div class="market-review-index-name">{{ idx.name }}</div>
                                            <div class="market-review-index-close">{{ idx.close != null ? Number(idx.close).toFixed(2) : '--' }}</div>
                                            <div class="market-review-index-chg" :class="marketReviewChgClass(idx.pct_chg)">{{ marketReviewChgText(idx.pct_chg) }}</div>
                                        </div>
                                    </div>
                                    <div v-else class="market-review-unavailable">指数数据不可达</div>
                                </div>

                                <!-- ② 领涨 / 领跌板块 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">板块表现</div>
                                    <div class="market-review-sector-grid">
                                        <div class="market-review-sector-col">
                                            <div class="market-review-sector-col-title up">领涨板块</div>
                                            <div v-if="marketReviewDetail.sectors && marketReviewDetail.sectors.leader && marketReviewDetail.sectors.leader.length" class="market-review-sector-list">
                                                <div v-for="s in marketReviewDetail.sectors.leader.slice(0, 3)" :key="s.name" class="market-review-sector-row">
                                                    <span class="market-review-sector-name">{{ s.name }}</span>
                                                    <span class="market-review-sector-chg" :class="marketReviewChgClass(s.pct_chg)">{{ marketReviewChgText(s.pct_chg) }}</span>
                                                </div>
                                            </div>
                                            <div v-else class="market-review-unavailable">板块数据不可达</div>
                                        </div>
                                        <div class="market-review-sector-col">
                                            <div class="market-review-sector-col-title down">领跌板块</div>
                                            <div v-if="marketReviewDetail.sectors && marketReviewDetail.sectors.laggard && marketReviewDetail.sectors.laggard.length" class="market-review-sector-list">
                                                <div v-for="s in marketReviewDetail.sectors.laggard.slice(0, 3)" :key="s.name" class="market-review-sector-row">
                                                    <span class="market-review-sector-name">{{ s.name }}</span>
                                                    <span class="market-review-sector-chg" :class="marketReviewChgClass(s.pct_chg)">{{ marketReviewChgText(s.pct_chg) }}</span>
                                                </div>
                                            </div>
                                            <div v-else class="market-review-unavailable">板块数据不可达</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- ③ 资金流向 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">资金流向</div>
                                    <div v-if="marketReviewDetail.moneyflow && marketReviewDetail.moneyflow.detail && marketReviewDetail.moneyflow.detail !== '数据不可达'" class="market-review-text">
                                        {{ marketReviewDetail.moneyflow.detail }}
                                    </div>
                                    <div v-else class="market-review-unavailable">资金流向数据不可达</div>
                                </div>

                                <!-- ④ 涨跌家数 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">市场情绪</div>
                                    <div v-if="marketReviewDetail.sentiment && marketReviewDetail.sentiment.up_down" class="market-review-updown">
                                        <span class="market-review-updown-item up">上涨 {{ marketReviewDetail.sentiment.up_down.up }} 家</span>
                                        <span class="market-review-updown-item down">下跌 {{ marketReviewDetail.sentiment.up_down.down }} 家</span>
                                    </div>
                                    <div v-else class="market-review-text muted">{{ (marketReviewDetail.sentiment && marketReviewDetail.sentiment.note) || '涨跌家数暂缺' }}</div>
                                </div>

                                <!-- ⑤ AI 解读 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">AI 解读</div>
                                    <div class="market-review-ai-summary">{{ marketReviewDetail.ai_summary || '暂无解读' }}</div>
                                </div>
                            </template>
                            </template>
                            </div><!-- /.market-review-split-content -->
                            </div><!-- /.market-review-split -->
                    </div>

                    <!-- v7.11 (FR-7.11-2): 形态匹配实验室 — 消费 /api/pattern/* (v7.6 交付域的前端入口) -->
                    <div v-else-if="currentSubPage === 'pattern-lab'" class="card">
                        <qc-pattern-lab></qc-pattern-lab>
                    </div>

                    <!-- v7.11 (FR-7.11-3): 策略市场 — 消费 /api/marketplace/* (v7.10 交付域的前端入口) -->
                    <div v-else-if="currentSubPage === 'marketplace'" class="card">
                        <qc-marketplace-panel></qc-marketplace-panel>
                    </div>
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.view=window.__quantModules.researchPage.part1+window.__quantModules.researchPage.part2;(function(){const{ref:i,computed:c,watch:b,inject:F}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:window.__quantModules.researchPage.view,setup(){const h=F("qcState"),O=window.__quantModules&&window.__quantModules.researchLexicon||{sid:function(e){return e},status:function(e){return e},mode:function(e){return e},engine:function(e){return e},factor:function(e,t){return t||e},factorWithCategory:function(e,t,l){return(l||e)+"（"+(t||"")+"）"}},L=Vue.ref(!1),q=Vue.ref(!1),V=Object.create(null);function P(e){return V[e]||(V[e]={n:0}),V[e]}const E=15e3;async function R(e,t,l){var M=typeof AbortController<"u"?new AbortController:null,we=null,wt=Object.assign({},t||{});M&&(wt.signal=M.signal,we=setTimeout(function(){try{M.abort()}catch{}},E));try{var ds=await fetch(e,wt);return await ds.json()}finally{we&&clearTimeout(we)}}function Y(e){return!!(e&&(e.name==="AbortError"||e.code===20))}if(!h)return{};const K=i(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function ae(e){K.value=e;try{localStorage.setItem("quant_strategy_mode",e)}catch{}h.currentSubPage.value="strategy-manage"}const J=i([]),B=i(!1),U=i(!1),$=i(""),j=i(""),y=i(""),u=i({}),H=i(!1),D=i(""),T=i(""),k=i([]),x=i([]),N=i(""),C=i(""),se=i(!0),re=i(!0),ie=i("20:00"),he=i("default"),ne=i(!1),W=i(""),G=c(function(){return J.value.find(function(e){return e.id===y.value})||null});async function I(e,t){t=t||{},t.headers=Object.assign({},t.headers||{});const l=localStorage.getItem("quant_token")||"";return l&&(t.headers.Authorization="Bearer "+l),fetch(e,t)}async function ve(){const e=P("strategies"),t=++e.n;B.value=!0,U.value=!1,$.value="",j.value="";try{const l=await R("/api/strategies",{headers:te()});if(t!==e.n)return;let M=null;Array.isArray(l)?M=l:l&&Array.isArray(l.strategies)?(M=l.strategies,l.warn&&(j.value=String(l.warn))):(U.value=!0,$.value=l&&l.detail?String(l.detail):"策略列表加载失败（接口返回异常）"),M!==null&&(J.value=M,J.value.length&&!y.value&&(y.value=J.value[0].id,le()))}catch(l){if(t!==e.n)return;console.error("[research] 策略列表加载失败:",l),U.value=!0,$.value=Y(l)?"策略列表请求超时（15s），请检查后端服务后重试":"策略列表加载失败: "+(l&&l.message||"网络错误")}finally{B.value=!1}}function le(){const e=G.value;e&&(u.value={},e.schema.forEach(function(t){u.value[t.key]=t.default}),T.value="",ye(),X(),fe())}async function X(){if(!y.value){x.value=[];return}try{const e=await I("/api/strategies/"+y.value+"/profiles").then(function(t){return t.json()});x.value=e&&e.data&&e.data.profiles||[],N.value=""}catch(e){console.error("[research] 方案列表加载失败:",e),x.value=[]}}async function be(){L.value=!0;const e=(C.value||"").trim();if(!e){window._core&&window._core.showToast("请输入方案名称");return}try{const t=await I("/api/strategies/"+y.value+"/profiles",{method:"POST",body:JSON.stringify({name:e,params:u.value})}).then(function(l){return l.json()});if(t&&t.detail){window._core&&window._core.showToast(String(t.detail));return}C.value="",await X(),window._core&&window._core.showToast("方案已保存")}catch(t){console.error("[research] 方案保存失败:",t),window._core&&window._core.showToast("方案保存失败")}}function me(){const e=x.value.find(function(t){return t.id===N.value});e&&(Object.keys(e.params||{}).forEach(function(t){u.value[t]=e.params[t]}),window._core&&window._core.showToast("已应用方案: "+e.name))}async function pe(){if(N.value)try{await I("/api/strategies/"+y.value+"/profiles/"+N.value,{method:"DELETE"}).then(function(e){return e.json()}),await X(),window._core&&window._core.showToast("方案已删除")}catch(e){console.error("[research] 方案删除失败:",e)}}async function fe(){try{const e=await I("/api/strategies/governance").then(function(M){return M.json()}),l=(e&&e.data&&e.data.strategies||{})[y.value]||{};se.value=l.enabled!==!1,ie.value=l.schedule||"20:00",he.value=l.universe==="all"?"all":"default",re.value=l.show_in_calendar!==!1,W.value=l.last_holdings||""}catch(e){console.error("[research] 纳管状态加载失败:",e)}}async function _e(){try{await I("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const e={};return e[y.value]={enabled:se.value,schedule:ie.value,universe:he.value,show_in_calendar:re.value},e}()})}).then(function(e){return e.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(e){console.error("[research] 纳管更新失败:",e)}}async function Z(){if(y.value){ne.value=!0;try{const e=await I("/api/strategies/"+y.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:D.value||void 0})}).then(function(t){return t.json()});if(e&&e.detail){window._core&&window._core.showToast(String(e.detail));return}window._core&&window._core.showToast("持仓已生成"),await fe()}catch(e){console.error("[research] run-once 失败:",e),window._core&&window._core.showToast("持仓生成失败")}finally{ne.value=!1}}}function oe(){W.value&&window.open(W.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function ce(){const e=G.value;if(!e)return;const t=(C.value||"").trim()||e.name+"-副本";ge(t,Object.assign({},u.value)),window._core&&window._core.showToast("已复制为副本方案: "+t)}async function ge(e,t){try{await I("/api/strategies/"+y.value+"/profiles",{method:"POST",body:JSON.stringify({name:e,params:t})}).then(function(l){return l.json()}),await X()}catch(l){console.error("[research] 副本保存失败:",l)}}async function ye(){const e=P("runs"),t=++e.n;if(y.value)try{const l=await R("/api/strategies/"+y.value+"/runs?limit=5",{headers:te()});if(t!==e.n)return;k.value=Array.isArray(l)?l:[]}catch(l){if(t!==e.n)return;console.error("[research] 运行记录加载失败:",l),k.value=[]}}const Re=2e3,n=12e4;async function o(e,t){const l=Date.now();for(;Date.now()-l<n;){await new Promise(function(M){setTimeout(M,Re)});try{const M=await I("/api/strategies/"+e+"/runs/"+t).then(function(we){return we.json()});if(M&&M.status&&M.status!=="running")return M}catch{}}return{status:"timeout",detail:"运行超时(120s), 请稍后在运行记录中查看结果"}}const d=i([]);async function m(){if(y.value){H.value=!0;try{const e=await I("/api/strategies/"+y.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:u.value,as_of:D.value||void 0})}).then(function(t){return t.json()});if(e&&e.detail)ElementPlus.ElMessage.error(h.t("msg.runFailed",{msg:e.detail}));else if(e&&e.status==="running"&&e.id){ElementPlus.ElMessage.info("策略运行已启动, 请稍候…");const t=await o(y.value,e.id);t.status==="success"?(d.value=t.summary&&t.summary.symbols||[],ElementPlus.ElMessage.success(h.t("msg.runDone",{n:t.summary&&t.summary.symbols&&t.summary.symbols.length||0}))):t.status==="timeout"?ElementPlus.ElMessage.warning(t.detail):ElementPlus.ElMessage.error(h.t("msg.runFailed",{msg:t.error||t.detail||"运行失败"})),ye()}else e&&e.status==="success"?ye():ElementPlus.ElMessage.error(h.t("msg.runFailed",{msg:JSON.stringify(e)}))}catch(e){console.error("[research] 策略运行失败:",e),ElementPlus.ElMessage.error(h.t("msg.runFailed",{msg:e.message}))}finally{H.value=!1}}}const v=i("");function p(e){v.value=v.value===e?"":e}function w(e){const t=document.getElementById(e);t&&t.scrollIntoView&&t.scrollIntoView({behavior:"smooth",block:"start"})}async function Q(){if(y.value)try{const e=Object.keys(u.value).map(function(l){return encodeURIComponent(l)+"="+encodeURIComponent(u.value[l])}).join("&"),t=await I("/api/strategies/"+y.value+"/ptrade-code?"+e).then(function(l){return l.json()});t&&t.code?T.value=t.code:ElementPlus.ElMessage.error(h.t("msg.exportFailed",{msg:t.detail||JSON.stringify(t)}))}catch(e){console.error("[research] PTrade 导出失败:",e),ElementPlus.ElMessage.error(h.t("msg.exportFailed",{msg:e.message}))}}function A(){if(!T.value)return;const e=document.createElement("textarea");e.value=T.value,document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch{}document.body.removeChild(e)}const Ce=window.__quantModules.researchPage.marketReview.create({ref:i,seqOf:P,authHeaders:te}),{marketReviews:je,marketReviewLoading:Le,marketReviewError:He,selectedReviewDate:Me,marketReviewDetail:Fe,marketReviewDetailLoading:Ve}=Ce,{marketReviewDetailError:Ie,loadMarketReviews:ze,openMarketReview:Pe,toggleMarketReviewDate:Je,backToMarketReviewList:a,loadMarketReviewDetail:r}=Ce,{marketReviewChgClass:s,marketReviewChgText:g,marketReviewSrcEntries:f,fmtPct:_,fmtEmotion:Ue}=Ce,de=window.__quantModules.researchPage.factor.create({ref:i,seqOf:P,withAuth:I,authHeaders:te,activeStrategyId:y,paramValues:u,activeStrategy:G,lastRunSymbols:d}),{factorKey:ht,factorIcLoading:bt,factorLayerLoading:_t,factorIcReport:kt,factorLayerResult:xt,factorOptions:St}=de,{runFactorIc:qt,runFactorLayer:Rt,factorDetail:Mt,factorDetailLoading:Et,runFactorDetail:Ct,sweepGrid:zt}=de,{sweepResult:Pt,sweepMessage:Dt,sweepLoading:Tt,sweepStability:Ot,runSweep:Lt}=de,{factorRange:It,factorIcDegraded:Nt,factorLayerDegraded:At,factorDetailDegraded:Bt,sweepDegraded:jt}=de,{factorGroupedOptions:Ht,applySweepTemplate:Ft}=de,{scoreCode:Vt,scoreDims:Jt,scoreConfigDims:Ut,scoreWeights:Kt,scoreVeto:$t,scoreVetoReason:Gt}=de,{scoreAutoLoading:Yt,scoreAutoMsg:Wt,prefillFromRun:Xt,autoEstimateDims:Zt}=de,{scoreLoading:Qt,scoreError:ea,scoreResult:ta,scoreTopN:aa,scoreDimLabel:sa,scoreDimRows:ra}=de,{scoreRadarAxes:ia,scoreRadarPolygon:na,loadScoreConfig:lt,runScore:la,exportScore:oa,factorSelectOptions:ca}=de,ke=window.__quantModules.researchPage.history.create({seqOf:P,state:h}),{researchHistory:da,researchHistoryLoading:ua,researchHistoryError:va,researchHistoryType:ma,researchHistorySelected:pa,researchDetailId:fa}=ke,{researchCompareRows:ga,researchCompareLoading:ya,researchExportLoading:wa,researchTypeLabel:ha,researchSubjectLabel:ba,goShortterm:_a,openResearchHistory:ka}=ke,{loadResearchHistory:xe,exportResearchHistory:xa,toggleResearchSelect:Sa,toggleResearchDetail:qa,runResearchCompare:Ra,deleteResearchHistory:Ma}=ke,{overviewCompareRows:Ea,overviewCompareLoading:Ca,loadOverviewCompare:ot,goBacktestFor:za,strategyOverview:Pa,strategyOverviewLoading:Da,strategyOverviewError:Ta,strategyOverviewDegraded:Oa,overviewKeyword:La,overviewSortKey:Ia,overviewOnlyEnabled:Na,strategyCardRows:Aa,loadStrategyOverview:ct,strategyStatusText:Ba,openStrategyManageFor:ja}=ke,{smBtRows:Ha,smBtLoading:Fa,smBtError:Va,smBtSelected:Ja,smBtAllSelected:Ua}=ke,{loadSmBtRecords:dt,toggleSmBtSelect:Ka,toggleSmBtSelectAll:$a}=ke,{deleteSmBtRecord:Ga,batchDeleteSmBtRecords:Ya}=ke;b(function(){return h.currentPage.value+"/"+h.currentSubPage.value},function(e){e==="research/research-overview"&&(ve(),ze(),We(),st(),xe(),ot()),e==="research/research-history"&&xe(),e==="research/backtest"&&h.loadBacktestStrategies&&h.loadBacktestStrategies(),(e==="research/backtest"||e==="research/strategy-manage")&&ct(),(e==="research/market-review"||e==="shortterm/market-review")&&!Me.value&&ze(),e==="research/quant-research"&&(ve(),lt()),e==="research/backtest-history"&&Be()},{immediate:!0}),b(function(){return h.currentSubPage.value!=="strategy-manage"?"":String(h.activeStrategyId&&h.activeStrategyId.value||"")},function(e){e&&dt(e)});const Ke=i([]),ee=i(null),ue=i(null),ut=i(null),Ee=i(""),$e=i(!1),De=i(!1),S=i(""),Ge=i(""),Ye=i("");function te(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function We(){const e=P("variants"),t=++e.n;try{const l=await R("/api/strategies/variants",{headers:te()});if(t!==e.n)return;Ke.value=l&&l.data&&l.data.variants||[]}catch(l){if(t!==e.n)return;console.error("[i3a] 加载 variants 失败:",l),Ke.value=[]}}async function Wa(){if(!y.value){S.value="请先在量化研究选择母本策略";return}De.value=!0,S.value="";try{const e=await fetch("/api/strategies/"+y.value+"/clone",{method:"POST",headers:te(),body:JSON.stringify({name:(C.value||"").trim()||void 0,params:Object.assign({},u.value)})}).then(function(l){return l.json()});if(e&&e.detail){S.value=String(e.detail);return}const t=e&&e.data;t&&t.sid&&(ee.value=t.sid,S.value="已复制为新策略: "+t.name,await We(),await Ne(t.sid))}catch(e){console.error("[i3a] 复制失败:",e),S.value="复制失败: "+e.message}finally{De.value=!1}}async function Xa(e){ee.value=e,S.value="",Ee.value="",await Ne(e)}async function Ne(e){try{const t=await fetch("/api/strategies/"+e+"/selection-spec",{headers:te()}).then(function(l){return l.json()});t&&t.data&&t.data.spec&&(ue.value=Object.assign({},t.data.spec),ut.value=t.data.fields,Ge.value=(t.data.spec.industry_scope||[]).join(","),Ye.value=(t.data.spec.market_cap_range||[]).join(","))}catch(t){console.error("[i3a] 加载 spec 失败:",t)}}async function Za(){if(q.value=!0,!(!ee.value||!ue.value))try{ue.value.industry_scope=Ge.value?Ge.value.split(/[,，]/).map(function(t){return t.trim()}).filter(Boolean):[],ue.value.market_cap_range=Ye.value?Ye.value.split(/[,，]/).map(Number).filter(function(t){return!isNaN(t)}):[];const e=await fetch("/api/strategies/"+ee.value+"/selection-spec",{method:"PUT",headers:te(),body:JSON.stringify({spec:ue.value})}).then(function(t){return t.json()});e&&e.data&&e.data.spec&&(ue.value=e.data.spec,S.value="SelectionSpec 已保存")}catch(e){console.error("[i3a] 保存 spec 失败:",e),S.value="保存失败"}}async function Qa(){if(!ee.value){S.value="请先选择/创建微调策略";return}De.value=!0,S.value="";try{const e=await fetch("/api/strategies/"+ee.value+"/run-once",{method:"POST",headers:te(),body:"{}"}).then(function(t){return t.json()});S.value=e&&e.detail?String(e.detail):"持仓已生成: "+(e&&e.data&&e.data.symbols||0)+" 只"}catch(e){console.error("[i3a] run-once 失败:",e),S.value="生成持仓失败"}finally{De.value=!1}}async function es(){if(!ee.value){S.value="请先选择/创建微调策略";return}ue.value||await Ne(ee.value),$e.value=!0,S.value="";try{const e=await fetch("/api/strategies/"+ee.value+"/ai-trade-code",{method:"POST",headers:te(),body:JSON.stringify({spec:ue.value})}).then(function(t){return t.json()});if(e&&e.detail){S.value=String(e.detail);return}e&&e.data&&(Ee.value=e.data.code||"",e.data.api_errors&&e.data.api_errors.length?S.value="生成成功(含 API 校验告警 "+e.data.api_errors.length+" 条)":S.value="AI 交易码已生成, 已通过矩阵内校验")}catch(e){console.error("[i3a] AI 交易码失败:",e),S.value="AI 生成失败: "+e.message}finally{$e.value=!1}}function ts(){if(Ee.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Ee.value).then(function(){S.value="代码已复制"});else{const e=document.createElement("textarea");e.value=Ee.value,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),S.value="代码已复制"}}const vt=i(""),Xe=i(""),Ze=i([]),Se=i(""),qe=i(""),z=i(""),Qe=i(null),et=i(!1),tt=i(!1),at=i(!1);function Te(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function st(){const e=P("customs"),t=++e.n;try{const l=await R("/api/strategies/custom",{headers:Te()});if(t!==e.n)return;Ze.value=l&&l.data&&l.data.customs||[]}catch(l){if(t!==e.n)return;console.error("[i3b] 加载自定义策略失败:",l),Ze.value=[]}}async function as(){if(!Xe.value.trim()){z.value="请描述策略思路";return}et.value=!0,z.value="";try{const e=await fetch("/api/strategies/custom",{method:"POST",headers:Te(),body:JSON.stringify({name:vt.value.trim()||"自定义策略",prompt:Xe.value})}).then(function(t){return t.json()});if(e&&e.detail){z.value=String(e.detail);return}e&&e.data&&(qe.value=e.data.code||"",z.value="AI 代写成功: "+e.data.sid+(e.data.api_errors&&e.data.api_errors.length?" (API 告警 "+e.data.api_errors.length+" 条)":" (校验通过)"),await st())}catch(e){console.error("[i3b] AI 代写失败:",e),z.value="AI 代写失败: "+e.message}finally{et.value=!1}}async function ss(){if(Se.value)try{const e=await fetch("/api/strategies/custom/"+Se.value+"/code",{headers:Te()}).then(function(t){return t.json()});e&&e.data&&(qe.value=e.data.code||"",z.value="")}catch(e){console.error("[i3b] 读取代码失败:",e)}}async function rs(){if(!Se.value){z.value="请先选择自定义策略";return}tt.value=!0,z.value="";try{const e=await fetch("/api/strategies/custom/"+Se.value+"/backtest",{method:"POST",headers:Te(),body:"{}"}).then(function(t){return t.json()});if(e&&e.detail){z.value=String(e.detail);return}e&&e.data&&(Qe.value=e.data,z.value="回测完成")}catch(e){console.error("[i3b] 回测失败:",e),z.value="回测失败: "+e.message}finally{tt.value=!1}}async function is(){if(!Se.value){z.value="请先选择自定义策略";return}at.value=!0,z.value="";try{const e=await fetch("/api/strategies/custom/"+Se.value+"/ai-optimize",{method:"POST",headers:Te(),body:JSON.stringify({backtest:Qe.value})}).then(function(t){return t.json()});if(e&&e.detail){z.value=String(e.detail);return}e&&e.data&&(qe.value=e.data.code||"",z.value="AI 优化完成"+(e.data.api_errors&&e.data.api_errors.length?" (API 告警 "+e.data.api_errors.length+" 条)":" (校验通过)"))}catch(e){console.error("[i3b] AI 优化失败:",e),z.value="AI 优化失败: "+e.message}finally{at.value=!1}}function ns(){if(qe.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(qe.value).then(function(){z.value="代码已复制"});else{const e=document.createElement("textarea");e.value=qe.value,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),z.value="代码已复制"}}const rt=Vue.ref([]),it=Vue.ref(!1),nt=Vue.ref(!1),mt=Vue.ref(30),Ae=Vue.ref([]),pt=Vue.ref(!1);function ft(){const e=window.__quantModules&&window.__quantModules.core||{};return typeof e.authHeaders=="function"?e.authHeaders():{}}function Oe(){return window.ElementPlus||{}}async function gt(e){if(!Oe().ElMessageBox)return!1;try{return await Oe().ElMessageBox.confirm(e,"确认删除",{type:"warning"}),!0}catch{return!1}}function yt(e){Oe().ElMessage&&Oe().ElMessage.error&&Oe().ElMessage.error(e)}function ls(e){const t=e?rt.value.filter(function(l){return l.id&&!l.legacy}).map(function(l){return l.id}):[];Ae.value=t}async function os(e){if(!(!e||!e.id||e.legacy)&&await gt("确定删除该条回测结果？删除后不可恢复。"))try{const t=await R("/api/strategies/research-history/"+encodeURIComponent(e.id),{method:"DELETE",headers:ft()});if(!t||!t.deleted)throw new Error(t&&t.detail||"删除失败");await Be(),typeof xe=="function"&&await xe()}catch(t){console.error("[backtest] 删除失败:",t),yt("删除失败: "+t.message)}}async function cs(){const e=(Ae.value||[]).slice(0,50);if(e.length&&await gt("确定删除选中的 "+e.length+" 条回测结果？删除后不可恢复。"))try{if(!await R("/api/strategies/research-history/batch-delete",{method:"POST",headers:ft(),body:JSON.stringify({ids:e})}))throw new Error("删除失败");Ae.value=[],pt.value=!1,await Be(),typeof xe=="function"&&await xe()}catch(t){console.error("[backtest] 批量删除失败:",t),yt("批量删除失败: "+t.message)}}async function Be(){const e=P("btHistory"),t=++e.n;it.value=!0,nt.value=!1;try{const l=window.__quantModules&&window.__quantModules.core||{},M=typeof l.authHeaders=="function"?l.authHeaders():{},we=await R("/api/backtest/history?days="+mt.value,{headers:M});if(t!==e.n)return;rt.value=we&&we.data||[]}catch(l){if(t!==e.n)return;console.error("[backtest] 回测历史加载失败:",l),nt.value=!0}finally{it.value=!1}}return{...h,strategyManageMode:K,openStrategyManage:ae,btHistory:rt,btHistoryLoading:it,btHistoryError:nt,btHistoryDays:mt,loadBtHistory:Be,btHistorySelected:Ae,btAllSelected:pt,toggleBtSelectAll:ls,deleteBtHistory:os,batchDeleteBtHistory:cs,smBtRows:Ha,smBtLoading:Fa,smBtError:Va,smBtSelected:Ja,smBtAllSelected:Ua,loadSmBtRecords:dt,toggleSmBtSelect:Ka,toggleSmBtSelectAll:$a,deleteSmBtRecord:Ga,batchDeleteSmBtRecords:Ya,researchHistory:da,researchHistoryLoading:ua,researchHistoryError:va,researchHistoryType:ma,researchHistorySelected:pa,researchDetailId:fa,researchCompareRows:ga,researchCompareLoading:ya,researchTypeLabel:ha,researchSubjectLabel:ba,goShortterm:_a,openResearchHistory:ka,loadResearchHistory:xe,researchExportLoading:wa,exportResearchHistory:xa,toggleResearchSelect:Sa,toggleResearchDetail:qa,runResearchCompare:Ra,deleteResearchHistory:Ma,marketReviews:je,marketReviewLoading:Le,marketReviewError:He,selectedReviewDate:Me,marketReviewDetail:Fe,marketReviewDetailLoading:Ve,marketReviewDetailError:Ie,loadMarketReviews:ze,openMarketReview:Pe,toggleMarketReviewDate:Je,backToMarketReviewList:a,loadMarketReviewDetail:r,marketReviewChgClass:s,marketReviewChgText:g,marketReviewSrcEntries:f,fmtPct:_,fmtEmotion:Ue,strategies:J,strategiesLoading:B,strategiesError:U,strategiesErrorText:$,strategiesWarn:j,activeStrategyId:y,activeStrategy:G,paramValues:u,strategyRunning:H,ptradeCode:T,strategyRuns:k,savingProfile:L,variantSaving:q,loadStrategies:ve,onStrategyChange:le,runActiveStrategy:m,exportActivePtradeCode:Q,copyPtradeCode:A,profiles:x,profileSelect:N,profileName:C,loadProfiles:X,saveProfile:be,applyProfile:me,deleteProfile:pe,govEnabled:se,govSchedule:ie,govUniverse:he,govRunning:ne,lastHoldings:W,LX:O,loadGov:fe,updateGov:_e,runOnceActive:Z,openLastHoldings:oe,cloneStrategy:ce,govShowCalendar:re,factorKey:ht,factorIcLoading:bt,factorLayerLoading:_t,factorIcReport:kt,factorLayerResult:xt,factorOptions:St,runFactorIc:qt,runFactorLayer:Rt,factorDetail:Mt,factorDetailLoading:Et,runFactorDetail:Ct,variants:Ke,variantSelected:ee,variantSpec:ue,specFields:ut,aiCode:Ee,aiCodeLoading:$e,variantBusy:De,variantMsg:S,loadVariants:We,cloneNewStrategy:Wa,selectVariant:Xa,loadVariantSpec:Ne,saveVariantSpec:Za,runVariantOnce:Qa,genVariantAiCode:es,copyVariantCode:ts,customName:vt,customPrompt:Xe,customs:Ze,customSelected:Se,customCode:qe,customMsg:z,customBtResult:Qe,customGenLoading:et,customBtLoading:tt,customOptLoading:at,loadCustoms:st,genCustomCode:as,loadCustomCode:ss,runCustomBacktest:rs,runCustomOptimize:is,copyCustomCode:ns,sweepGrid:zt,sweepResult:Pt,sweepMessage:Dt,sweepLoading:Tt,sweepStability:Ot,runSweep:Lt,factorRange:It,factorIcDegraded:Nt,factorLayerDegraded:At,factorDetailDegraded:Bt,sweepDegraded:jt,factorGroupedOptions:Ht,applySweepTemplate:Ft,expandedRunId:v,toggleRunDetail:p,researchAnchorScroll:w,scoreCode:Vt,scoreDims:Jt,scoreConfigDims:Ut,scoreWeights:Kt,scoreVeto:$t,scoreVetoReason:Gt,scoreLoading:Qt,scoreError:ea,scoreResult:ta,scoreTopN:aa,scoreDimLabel:sa,scoreDimRows:ra,scoreRadarAxes:ia,scoreRadarPolygon:na,loadScoreConfig:lt,runScore:la,exportScore:oa,factorSelectOptions:ca,lastRunSymbols:d,scoreAutoLoading:Yt,scoreAutoMsg:Wt,prefillFromRun:Xt,autoEstimateDims:Zt,overviewCompareRows:Ea,overviewCompareLoading:Ca,loadOverviewCompare:ot,goBacktestFor:za,strategyOverview:Pa,strategyOverviewLoading:Da,strategyOverviewError:Ta,strategyOverviewDegraded:Oa,overviewKeyword:La,overviewSortKey:Ia,overviewOnlyEnabled:Na,strategyCardRows:Aa,loadStrategyOverview:ct,strategyStatusText:Ba,openStrategyManageFor:ja}}}})();
