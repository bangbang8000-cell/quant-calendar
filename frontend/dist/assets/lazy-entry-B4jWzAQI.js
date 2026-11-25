import"./index-jqOQTPc9.js";import"./vendor-vue-C_pVD_qU.js";import"./vendor-ep-CqDWbo1H.js";import"./vendor-lucide-BR0fGNY-.js";(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.marketReview={create:function(i){const{ref:n,seqOf:h,authHeaders:H}=i,g=n([]),T=n(!1),O=n(!1),R=n(""),V=n(null),M=n(!1),C=n(!1);async function P(){const c=h("marketReviews"),j=++c.n;T.value=!0,O.value=!1;try{const E=await fetch("/api/market/reviews?limit=30",{headers:H()}).then(D=>D.json());if(j!==c.n)return;E&&E.success?g.value=Array.isArray(E.data)?E.data:[]:O.value=!0}catch(E){console.error("[market-review] 复盘列表加载失败:",E),O.value=!0}finally{T.value=!1}}function Y(c){R.value=c,J(c)}function U(c){R.value===c?A():Y(c)}function se(c){return c==null||isNaN(Number(c))?"—":(Number(c)>=0?"+":"")+Number(c).toFixed(2)+"%"}function B(c){return c==null||isNaN(Number(c))?"—":Number(c).toFixed(2)}function A(){R.value="",V.value=null,C.value=!1}async function J(c){const j=h("marketReviewDetail"),E=++j.n;M.value=!0,C.value=!1,V.value=null;try{const D=c?"/api/market/review?date="+encodeURIComponent(c):"/api/market/review",k=await fetch(D,{headers:H()}).then(x=>x.json());if(E!==j.n)return;k&&k.success?V.value=k.data:C.value=!0}catch(D){console.error("[market-review] 复盘详情加载失败:",D),C.value=!0}finally{M.value=!1}}function K(c){return c>0?"up":c<0?"down":"flat"}function W(c){return c==null||isNaN(Number(c))?"—":(c>0?"+":"")+Number(c).toFixed(2)+"%"}function y(c){const j={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(c||{}).map(function(E){const D=E[0],k=E[1],x=!k||k==="unavailable"||k==="数据不可达";return{label:j[D]||D,value:x?"数据不可达":k,unavailable:x}})}return{marketReviews:g,marketReviewLoading:T,marketReviewError:O,selectedReviewDate:R,marketReviewDetail:V,marketReviewDetailLoading:M,marketReviewDetailError:C,loadMarketReviews:P,openMarketReview:Y,toggleMarketReviewDate:U,backToMarketReviewList:A,loadMarketReviewDetail:J,marketReviewChgClass:K,marketReviewChgText:W,marketReviewSrcEntries:y,fmtPct:se,fmtEmotion:B}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.factor={create:function(i){const{ref:n,seqOf:h,withAuth:H,authHeaders:g,activeStrategyId:T,paramValues:O,activeStrategy:R,lastRunSymbols:V}=i,M=window.__quantModules&&window.__quantModules.i18n||{},C=typeof M.t=="function"?M.t:function(a){return String(a)},P=n("mom20"),Y=n(!1),U=n(!1),se=n(null),B=n(null),A=n(null),J=n(!1),K=n(!1),W=n(!1),y=n(!1),c=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],j={technical:"技术类",valuation:"估值类",sentiment:"情绪类",capital:"资金类",fundamental:"基本面类",score:"综合评分",composite:"综合评分"},E=[{key:"topn",label:"选股数梯度",grid:'{"top_n":[10,20,30,50]}'},{key:"topn_cycle",label:"选股数×调仓周期",grid:'{"top_n":[10,20,30],"rebalance_cycle":[5,10,20]}'},{key:"topn_st",label:"选股数×剔除ST",grid:'{"top_n":[10,20,30],"st_filter":[true,false]}'}];function D(a){const r=E.find(function(s){return s.key===a});r&&($.value=r.grid)}function k(){const a={};return A.value&&A.value.length===2&&(a.start_date=A.value[0],a.end_date=A.value[1]),a}let x=null,I=null;function X(a){const r=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null;if(r)r().then(a).catch(function(){try{a()}catch{}});else try{a()}catch(s){console.error("[factor] echarts 渲染失败",s)}}function re(){return window.__quantModules&&window.__quantModules.echartsTheme&&typeof window.__quantModules.echartsTheme.getEChartsTheme=="function"?window.__quantModules.echartsTheme.getEChartsTheme():{}}function ne(a){if(!a)return[];let r=[];return Array.isArray(a)&&a.length&&typeof a[0]=="number"?r=a.map(function(s,v){return["S"+(v+1),s]}):Array.isArray(a)?r=a.map(function(s){return[s.date||s[0],s.value!=null?s.value:s[1]]}):typeof a=="object"&&(r=Object.keys(a).map(function(s){return[s,a[s]]})),r.filter(function(s){return s[0]!=null&&s[1]!=null&&!isNaN(Number(s[1]))}).sort(function(s,v){return String(s[0]).localeCompare(String(v[0]))})}function oe(){const a=document.getElementById("factorIcChart"),r=se.value;if(!a||!r)return;const s=ne(r.ic_series);s.length&&X(function(){x&&(x.dispose(),x=null),x=echarts.init(a),x.setOption(re());const v=getComputedStyle(document.documentElement).getPropertyValue("--text-tertiary").trim()||"#999";x.setOption({tooltip:{trigger:"axis",valueFormatter:function(u){return Number(u).toFixed(4)}},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:s.map(function(u){return u[0]}),boundaryGap:!1},yAxis:{type:"value",scale:!0,axisLabel:{formatter:function(u){return Number(u).toFixed(2)}}},dataZoom:[{type:"inside"}],series:[{name:"Rank IC",type:"line",data:s.map(function(u){return Number(u[1])}),smooth:!1,symbol:"circle",symbolSize:4,lineStyle:{width:1.5,color:"#6366f1"},markLine:{silent:!0,symbol:"none",label:{show:!1},lineStyle:{type:"dashed",color:v},data:[{yAxis:0}]}}]})})}function ve(){const a=document.getElementById("factorLayerChart"),r=B.value;!a||!r||!Array.isArray(r.layers)||!r.layers.length||X(function(){I&&(I.dispose(),I=null),I=echarts.init(a),I.setOption(re()),I.setOption({tooltip:{trigger:"axis",valueFormatter:function(s){return Number(s).toFixed(2)+"%"}},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:r.layers.map(function(s){return"层 "+s.layer})},yAxis:{type:"value",axisLabel:{formatter:function(s){return s+"%"}}},series:[{name:"分层累计收益",type:"bar",data:r.layers.map(function(s){return{value:Number(s.return),itemStyle:{color:Number(s.return)>=0?"#c23b3b":"#2e8b57"}}}),barMaxWidth:48,label:{show:!0,position:"top",formatter:function(s){return Number(s.value).toFixed(2)+"%"}}}]})})}const $=n('{"top_n":[10,20,30]}'),Q=n(null),G=n(""),L=n(!1),ce=n(null);async function o(){if(!T.value){ElementPlus.ElMessage.warning("请先选择策略");return}let a;try{a=JSON.parse($.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!a||Object.keys(a).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}L.value=!0,Q.value=null,G.value="",y.value=!1;try{const r=await fetch("/api/strategies/"+T.value+"/sweep",{method:"POST",headers:g(),body:JSON.stringify(Object.assign({param_grid:a},k()))}).then(function(s){return s.json()});r&&Array.isArray(r.results)?(Q.value=r.results,G.value="完成 "+r.count+" 组",y.value=!!r.data_degraded,ce.value=r.param_stability||null):G.value=r&&r.detail||"扫描失败"}catch(r){console.error("[sweep]",r),G.value="扫描失败: "+r.message}finally{L.value=!1}}async function d(){const a=h("factorIc"),r=++a.n;Y.value=!0,J.value=!1;try{const s=await H("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.assign({sid:T.value||"multi_factor",factor_key:P.value,params:O.value||{}},k()))}).then(function(u){return u.json()});if(r!==a.n)return;const v=s&&s.report?s.report.n1||{}:{};se.value=v,J.value=!!(s&&s.data_degraded),Vue.nextTick(function(){oe()})}catch(s){console.error("[research] 因子IC分析失败:",s),ElementPlus.ElMessage.error(C("msg.factorIcFailed",{msg:s.message}))}finally{Y.value=!1}}async function w(){const a=h("factorLayer"),r=++a.n;U.value=!0,K.value=!1;try{const s=await H("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.assign({sid:T.value||"multi_factor",factor_key:P.value,params:O.value||{}},k()))}).then(function(v){return v.json()});if(r!==a.n)return;s&&s.layers?(B.value=s,K.value=!!s.data_degraded,Vue.nextTick(function(){ve()})):ElementPlus.ElMessage.warning(C("msg.layerBacktest",{msg:s.message||C("msg.noData")}))}catch(s){console.error("[research] 分层回测失败:",s),ElementPlus.ElMessage.error(C("msg.layerBacktestFailed",{msg:s.message}))}finally{U.value=!1}}const m=n(null),p=n(!1);async function f(){const a=h("factorDetail"),r=++a.n;p.value=!0,m.value=null,W.value=!1;try{const s=await H("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.assign({sid:T.value||"multi_factor",factor_key:P.value,params:O.value||{}},k()))}).then(function(v){return v.json()});if(r!==a.n)return;s&&s.detail?(m.value=s.detail,W.value=!!s.data_degraded):ElementPlus.ElMessage.warning(C("msg.factorDetail",{msg:s.message||C("msg.noData")}))}catch(s){console.error("[research] 因子详情失败:",s),ElementPlus.ElMessage.error(C("msg.factorDetailFailed",{msg:s.message}))}finally{p.value=!1}}const _={technical:"技术面",moneyflow:"资金面",fundamental:"基本面",sector:"板块",event:"事件"},N=n(Object.keys(_)),F=n(null),me=n(""),ye=n({technical:null,moneyflow:null,fundamental:null,sector:null,event:null}),ge=n(!1),Me=n(""),_e=n(!1),we=n(""),ee=n(null),ke=n(10),de=n(!1),Z=n("");function Oe(a){a&&(me.value=String(a))}async function Le(){const a=String(me.value||"").trim();if(!(!a||de.value)){de.value=!0,Z.value="";try{const r=await fetch("/api/strategies/scores/auto?stock_code="+encodeURIComponent(a),{headers:g()}).then(function(s){return s.json()});if(r&&r.estimates){let s=0;Object.keys(r.estimates).forEach(function(u){const b=r.estimates[u];b!=null&&(ye.value[u]=b,s+=1)});const v=(r.unknown_dims||[]).length;Z.value=s>0?"已自动预估 "+s+" 个维度"+(v?", "+v+" 个维度数据不可得保持 unknown":""):"数据不可得, 无法自动预估(请手动填写或稍后重试)",s>0?ElementPlus.ElMessage.success(Z.value):ElementPlus.ElMessage.warning(Z.value)}else Z.value=r&&r.detail||"自动预估失败",ElementPlus.ElMessage.error(Z.value)}catch(r){console.error("[score] 自动预估失败",r),Z.value="自动预估失败: "+(r.message||r),ElementPlus.ElMessage.error(Z.value)}finally{de.value=!1}}}function xe(a){return _[a]||a}async function qe(){try{const a=await fetch("/api/strategies/scores/config",{headers:g()}).then(function(r){return r.json()});if(a&&Array.isArray(a.dimensions)&&a.dimensions.length){N.value=a.dimensions.slice();const r={};a.dimensions.forEach(function(s){r[s]=null}),ye.value=r}a&&a.default_weights&&(F.value=a.default_weights)}catch(a){console.warn("[score] 评分配置不可用, 使用本地兜底维度",a)}}async function Ie(){_e.value=!0,we.value="",ee.value=null;try{const a={};N.value.forEach(function(v){const u=ye.value[v];a[v]=u===""||u===null||u===void 0||isNaN(Number(u))?null:Number(u)});const r={stock_code:String(me.value||"").trim(),dimension_scores:a,veto:!!ge.value,veto_reason:Me.value||""};ke.value&&(r.top_n=Number(ke.value));const s=await fetch("/api/strategies/scores/calculate",{method:"POST",headers:g(),body:JSON.stringify(r)}).then(function(v){return v.json()});s&&s.total_score!==void 0&&s.total_score!==null?ee.value=s:we.value=s&&s.detail||"评分失败"}catch(a){console.error("[score] 评分失败",a),we.value="评分失败: "+a.message}finally{_e.value=!1}}const Pe=60,Ne=44;function he(a,r,s){const v=(-90+360/Math.max(r,1)*a)*Math.PI/180,u=Ne*Math.max(0,Math.min(1,s));return[(Pe+u*Math.cos(v)).toFixed(1),(Pe+u*Math.sin(v)).toFixed(1)]}function Ae(){const a=N.value||[],r=a.length||1;return a.map(function(s,v){const u=he(v,r,1),b=he(v,r,1.18);return{key:s,label:xe(s),x:u[0],y:u[1],lx:b[0],ly:b[1]}})}function je(){const a=ee.value;if(!a||!a.dimensions)return"";const r=N.value||[],s=r.length||1;return r.map(function(v,u){const b=a.dimensions[v]||{},He=b.score===null||b.score===void 0?0:Number(b.score);return he(u,s,He/100).join(",")}).join(" ")}function Ee(){const a=ee.value;return!a||!a.dimensions?[]:(N.value||[]).map(function(r){const s=a.dimensions[r]||{};return{key:r,label:xe(r),score:s.score,weight:s.weight,weighted:s.weighted_score,status:s.status||"ok"}})}function Re(){const a=ee.value;if(!a){ElementPlus.ElMessage.warning("请先计算评分");return}const r=["维度,分数,权重,加权分"];if(Ee().forEach(function(b){r.push([b.label,b.score===null||b.score===void 0?"unknown":b.score,b.weight==null?"":b.weight,b.weighted===null||b.weighted===void 0?"":b.weighted].join(","))}),r.push(""),r.push(["总分",a.total_score,"等级",a.level].join(",")),r.push(["一票否决",a.veto_flag?"是":"否",a.veto_reason||"",""].join(",")),a.missing_dimensions&&a.missing_dimensions.length&&r.push(["缺失维度",a.missing_dimensions.join("|"),"",""].join(",")),a.top_n_suggestion){const b=Object.keys(a.top_n_suggestion);r.push(["TopN 建议",b.join("|"),"",""].join(","))}const s=new Blob(["\uFEFF"+r.join(`
`)],{type:"text/csv;charset=utf-8"}),v=URL.createObjectURL(s),u=document.createElement("a");u.href=v,u.download="score-"+(String(me.value||"").trim()||"stock")+".csv",u.click(),URL.revokeObjectURL(v)}function Se(){const a=R&&R.value&&R.value.factor_specs||null,r=(a&&a.length?a:c).slice();return r.some(function(s){return s.name==="composite_score"})||r.push({name:"composite_score",category:"score",label:"综合评分"}),r}window.Vue&&typeof window.Vue.watch=="function"&&T&&window.Vue.watch(T,function(){const a=Se().map(function(r){return r.name});a.length&&a.indexOf(P.value)<0&&(P.value=a[0])});function Fe(){const a=Se(),r=[],s={};return a.forEach(function(v){const u=v.category||"other";u in s||(s[u]={category:u,label:j[u]||u,items:[]},r.push(s[u])),s[u].items.push(v)}),r}return{factorKey:P,factorIcLoading:Y,factorLayerLoading:U,factorIcReport:se,factorLayerResult:B,factorOptions:c,runFactorIc:d,runFactorLayer:w,factorDetail:m,factorDetailLoading:p,runFactorDetail:f,sweepGrid:$,sweepResult:Q,sweepMessage:G,sweepLoading:L,sweepStability:ce,runSweep:o,factorRange:A,factorIcDegraded:J,factorLayerDegraded:K,factorDetailDegraded:W,sweepDegraded:y,factorGroupedOptions:Fe,applySweepTemplate:D,scoreCode:me,scoreDims:ye,scoreConfigDims:N,scoreWeights:F,scoreVeto:ge,scoreVetoReason:Me,scoreAutoLoading:de,scoreAutoMsg:Z,prefillFromRun:Oe,autoEstimateDims:Le,scoreLoading:_e,scoreError:we,scoreResult:ee,scoreTopN:ke,scoreDimLabel:xe,scoreDimRows:Ee,scoreRadarAxes:Ae,scoreRadarPolygon:je,loadScoreConfig:qe,runScore:Ie,exportScore:Re,factorSelectOptions:Se}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.history={create:function(i){const{seqOf:n,state:h}=i,H=Vue.ref([]),g=Vue.ref(!1),T=Vue.ref(!1),O=Vue.ref(""),R=Vue.ref([]),V=Vue.ref(""),M=Vue.ref([]),C=Vue.ref(!1),P=Vue.ref(!1),Y=Vue.ref([]),U=Vue.ref(!1),se={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function B(o){return se[o]||o||"—"}function A(o){h&&h.navigateTo&&h.navigateTo("shortterm",o)}function J(){h.currentSubPage.value="research-history",K()}async function K(){const o=n("researchHistory"),d=++o.n;g.value=!0,T.value=!1;try{const w=window.__quantModules&&window.__quantModules.core||{},m=typeof w.authHeaders=="function"?w.authHeaders():{},p=O.value?"?type="+encodeURIComponent(O.value):"",f=await fetch("/api/strategies/research-history"+p,{headers:m}).then(function(_){return _.json()});if(d!==o.n)return;H.value=f&&f.items||[]}catch(w){console.error("[research-history] 加载失败:",w),T.value=!0}finally{g.value=!1}}async function W(){const o=n("researchExport"),d=++o.n;P.value=!0;try{const w=window.__quantModules&&window.__quantModules.core||{},m=typeof w.authHeaders=="function"?w.authHeaders():{},p=O.value?"?type="+encodeURIComponent(O.value):"",f=await fetch("/api/strategies/research-history/export"+p,{headers:m});if(!f.ok)throw new Error("HTTP "+f.status);const _=await f.blob();if(d!==o.n)return;const N=URL.createObjectURL(_),F=document.createElement("a");F.href=N,F.download="research_history.csv",document.body.appendChild(F),F.click(),document.body.removeChild(F),URL.revokeObjectURL(N)}catch(w){console.error("[research-history] 导出失败:",w)}finally{P.value=!1}}function y(o){const d=R.value.indexOf(o);d>=0?R.value.splice(d,1):R.value.length<10&&R.value.push(o)}function c(o){V.value=V.value===o?"":o}async function j(){const o=n("researchCompare"),d=++o.n,w=R.value;if(!(w.length<2)){C.value=!0;try{const m=window.__quantModules&&window.__quantModules.core||{},p=typeof m.authHeaders=="function"?m.authHeaders():{},f=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},p),body:JSON.stringify({ids:w})}).then(function(_){return _.json()});if(d!==o.n)return;M.value=f&&f.items||[]}catch(m){console.error("[research-history] 对比失败:",m)}finally{C.value=!1}}}async function E(o){try{const d=window.__quantModules&&window.__quantModules.core||{},w=typeof d.authHeaders=="function"?d.authHeaders():{},m=await fetch("/api/strategies/research-history/"+o,{method:"DELETE",headers:w}).then(function(p){return p.json()});if(m&&m.deleted){H.value=H.value.filter(function(f){return f.id!==o});const p=R.value.indexOf(o);p>=0&&R.value.splice(p,1)}}catch(d){console.error("[research-history] 删除失败:",d)}}async function D(){U.value=!0;try{const o=window.__quantModules&&window.__quantModules.core||{},d=typeof o.authHeaders=="function"?o.authHeaders():{},w=await fetch("/api/strategies/research-history?limit=200",{headers:d}).then(function(f){return f.json()}),m=w&&w.items||[],p={};m.forEach(function(f){if(f.type!=="backtest")return;const _=f.subject||"";(!p[_]||String(f.created_at)>String(p[_].created_at))&&(p[_]=f)}),Y.value=Object.keys(p).map(function(f){const _=p[f].summary||{};return{sid:f,ts:p[f].created_at,annual_return:_.annual_return,max_drawdown:_.max_drawdown,sharpe_ratio:_.sharpe_ratio,win_rate:_.win_rate}})}catch(o){console.error("[overview-compare] 加载失败:",o)}finally{U.value=!1}}const k=Vue.ref([]),x=Vue.ref(!1),I=Vue.ref(""),X=Vue.ref(!1),re=Vue.ref(""),ne=Vue.ref("recent"),oe=Vue.ref(!1);async function ve(o){if(!(k.value.length&&!o)){x.value=!0,I.value="";try{const d=window.__quantModules&&window.__quantModules.core||{},w=typeof d.authHeaders=="function"?d.authHeaders():{},m=await fetch("/api/strategies/overview",{headers:w});if(!m.ok)throw new Error("HTTP "+m.status);const p=await m.json();k.value=p&&p.items||[],X.value=!!(p&&p.degraded)}catch(d){I.value=String(d&&d.message?d.message:d)}finally{x.value=!1}}}function $(o){const d=Number(o);return isFinite(d)?d:null}const Q=Vue.computed(function(){var o=(re.value||"").trim().toLowerCase(),d=k.value.filter(function(m){return oe.value&&!m.enabled?!1:o?(String(m.name)+" "+String(m.id)+" "+String(m.id_cn)).toLowerCase().indexOf(o)>=0:!0}),w=ne.value;return d=d.slice().sort(function(m,p){if(w==="return"){var f=$(m.last_backtest&&m.last_backtest.annual_return),_=$(p.last_backtest&&p.last_backtest.annual_return);return f===null&&_===null?0:f===null?1:_===null?-1:_-f}if(w==="holdings")return($(p.holdings_count)||0)-($(m.holdings_count)||0);var N=m.last_run&&m.last_run.started_at||"",F=p.last_run&&p.last_run.started_at||"";return!N&&!F?0:N?F&&String(F)>String(N)?1:-1:1}),d});function G(o){if(!o)return"—";var d=o.last_run&&o.last_run.status;return d==="running"?"运行中":d==="failed"?"上次失败":o.enabled?"正常":"未纳管"}function L(o){o&&(h.activeStrategyId&&(h.activeStrategyId.value=o),h.currentSubPage.value="strategy-manage")}function ce(o){o&&(h.currentSubPage.value="backtest",h.activeStrategyId&&(h.activeStrategyId.value=o),h.backtestStrategy&&(h.backtestStrategy.value=o),h.setBacktestMonths&&h.setBacktestMonths(18))}return{researchHistory:H,researchHistoryLoading:g,researchHistoryError:T,researchHistoryType:O,researchHistorySelected:R,researchDetailId:V,researchCompareRows:M,researchCompareLoading:C,researchExportLoading:P,researchTypeLabel:B,goShortterm:A,openResearchHistory:J,loadResearchHistory:K,exportResearchHistory:W,toggleResearchSelect:y,toggleResearchDetail:c,runResearchCompare:j,deleteResearchHistory:E,overviewCompareRows:Y,overviewCompareLoading:U,loadOverviewCompare:D,goBacktestFor:ce,strategyOverview:k,strategyOverviewLoading:x,strategyOverviewError:I,strategyOverviewDegraded:X,overviewKeyword:re,overviewSortKey:ne,overviewOnlyEnabled:oe,strategyCardRows:Q,loadStrategyOverview:ve,strategyStatusText:G,openStrategyManageFor:L}}}})();(function(){window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategyBoard={name:"qc-strategy-board",props:{rows:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},error:{type:String,default:""},keyword:{type:String,default:""},sortKey:{type:String,default:"recent"},onlyEnabled:{type:Boolean,default:!1},degraded:{type:Boolean,default:!1}},emits:["update:keyword","update:sortKey","update:onlyEnabled","backtest","detail","retry"],computed:{summaryText(){const i=this.rows.length,n=this.rows.filter(h=>h.last_backtest).length;return`共 ${i} 个策略 · 已有回测记录 ${n} 个 · 点「回测」直接带入默认 18 个月/100 万`}},methods:{fmtPct(i){const n=Number(i);return i==null||!isFinite(n)?"—":n.toFixed(2)+"%"},fmtNum(i){const n=Number(i);return i==null||!isFinite(n)?"—":n.toFixed(2)},statusClass(i){const n=i&&i.last_run&&i.last_run.status;return n==="running"?"is-running":n==="failed"?"is-failed":i&&!i.enabled?"is-idle":"is-ok"},statusText(i){const n=i&&i.last_run&&i.last_run.status;return n==="running"?"运行中":n==="failed"?"上次失败":i&&!i.enabled?"未纳管":"正常"},lastRunText(i){const n=i&&i.last_run&&(i.last_run.finished_at||i.last_run.started_at);return n?String(n).replace("T"," ").slice(0,16):"从未运行"},pnlClass(i){if(i==null||i==="")return"";const n=Number(i);return isFinite(n)?n>=0?"is-rise":"is-fall":""}},template:`
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
                        <div class="card-title"><qc-icon name="bar-chart-3" :size="16" /> 资产总览</div>
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
                            </div>                        <!-- v7.15 (FR-7): 跨策略回测对比摘要卡 (涨红跌绿) -->
                        <div class="section-title-base mt-8"><qc-icon name="git-compare" :size="16" /> 跨策略回测对比 <span class="text-sm-tertiary">每策略最近一次回测 · 点击行跳转回测页</span></div>
                        <qc-state-panel v-if="overviewCompareLoading" type="loading"></qc-state-panel>
                        <div v-else-if="!overviewCompareRows.length" class="text-sm-tertiary mt-8">还没有回测实验。到 策略回测 运行一次后，这里会出现跨策略横向对比。</div>
                        <table v-else class="qr-compare-table">
                            <thead>
                                <tr><th>策略</th><th>年化</th><th>回撤</th><th>夏普</th><th>胜率</th><th>时间</th></tr>
                            </thead>
                            <tbody>
                                <tr v-for="r in overviewCompareRows" :key="'ovc-' + r.sid" class="clickable" @click="goBacktestFor(r.sid)">
                                    <td><strong>{{ LX.sid(r.sid) }}</strong></td>
                                    <td :class="r.annual_return >= 0 ? 'is-rise' : 'is-fall'">{{ fmtPct(r.annual_return) }}</td>
                                    <td :class="r.max_drawdown >= 0 ? 'is-rise' : 'is-fall'">{{ fmtPct(r.max_drawdown) }}</td>
                                    <td>{{ fmtNum(r.sharpe_ratio) }}</td>
                                    <td>{{ fmtPct(r.win_rate) }}</td>
                                    <td class="text-sm-tertiary">{{ r.ts }}</td>
                                </tr>
                            </tbody>
                        </table>
                        
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
                        <div class="card-title">{{ t('research.quantResearch') }}</div>
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
                        <div class="card-title"><qc-icon name="layers" :size="16" /> 策略管理 <span class="text-sm-tertiary">模板编辑：复制母本微调 · 全新创建：AI 代写</span></div>
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
                        <div class="card-title">{{ t('research.backtest') }}</div>
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
                        <!-- 回测结果 -->
                        <template v-if="backtestResult">
                            <div class="grid-auto-fit-140-mb16">
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtPct(backtestResult.total_return_pct) }}</div>
                                    <el-tooltip content="区间累计收益率 = (期末净值 / 期初净值 - 1) × 100%" placement="top"><div class="stat-label">总收益率 ⓘ</div></el-tooltip>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtPct(backtestResult.annual_return_pct) }}</div>
                                    <el-tooltip content="年化收益 = 区间收益折算为 1 年期复利收益; 样本过短时数字仅供参考" placement="top"><div class="stat-label">年化收益 ⓘ</div></el-tooltip>
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
                        <div class="card-title flex-between">
                            <span>{{ t('research.backtestHistory') }}</span>
                            <div class="flex-c-gap-8">
                                <el-select class="w-select-sm" size="small" v-model="btHistoryDays" @change="loadBtHistory">
                                    <el-option label="近7天" :value="7" />
                                    <el-option label="近30天" :value="30" />
                                    <el-option label="近90天" :value="90" />
                                </el-select>
                                <el-button size="small" @click="loadBtHistory" :loading="btHistoryLoading"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="btHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="btHistoryError" type="error" title="加载失败" :desc="t('state.descNetwork')" @retry="loadBtHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="!btHistory.length" type="empty" icon="bar-chart-3" title="暂无回测记录" desc="运行回测后，结果将自动记录在此" action-text="刷新数据" action-key="refresh"></qc-state-panel>
                        <div v-else>
                            <div v-for="r in btHistory" :key="r.ts + '-' + r.sid" class="card mb-12">
                                <div class="flex-between-start-wrap">
                                    <div>
                                        <span class="strategy-name">{{ r.sid_cn || r.sid }}</span>
                                        <span class="text-xs-tertiary ml-8">{{ r.ts }}</span>
                                    </div>
                                    <div class="flex-c-gap-8">
                                        <span class="strategy-tag" v-if="r.summary">年化 {{ fmtPct(r.summary.annual_return) }}</span>
                                        <span class="strategy-tag" v-if="r.summary">回撤 {{ fmtPct(r.summary.max_drawdown) }}</span>
                                        <span class="strategy-tag" v-if="r.summary">夏普 {{ fmtNum(r.summary.sharpe_ratio) }}</span>
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
                        <div class="card-title"><qc-icon name="folder" :size="16" /> 研究历史 <span class="text-sm-tertiary-normal">{{ researchHistory.length }} 条实验</span></div>
                        <!-- 类型过滤 -->
                        <div class="flex-wrap-gap-12-mb16-c">
                            <el-radio-group v-model="researchHistoryType" size="small" @change="loadResearchHistory">
                                <el-radio-button value="">全部</el-radio-button>
                                <el-radio-button value="factor_ic">因子IC</el-radio-button>
                                <el-radio-button value="layer">分层</el-radio-button>
                                <el-radio-button value="sweep">扫描</el-radio-button>
                                <el-radio-button value="backtest">回测</el-radio-button>
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
                                                <td>{{ row.subject }}</td>
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
                                        <span class="strategy-name">{{ exp.subject }}</span>
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
                                <div v-if="exp.range" class="text-xs-tertiary">区间 {{ exp.date_range.join(' → ') }} · v{{ exp.app_version }}</div>
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.view=window.__quantModules.researchPage.part1+window.__quantModules.researchPage.part2;(function(){const{ref:i,computed:n,watch:h,inject:H}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:window.__quantModules.researchPage.view,setup(){const g=H("qcState"),T=window.__quantModules&&window.__quantModules.researchLexicon||{sid:function(e){return e},status:function(e){return e},mode:function(e){return e},engine:function(e){return e},factor:function(e,t){return t||e},factorWithCategory:function(e,t,l){return(l||e)+"（"+(t||"")+"）"}},O=Vue.ref(!1),R=Vue.ref(!1),V=Object.create(null);function M(e){return V[e]||(V[e]={n:0}),V[e]}const C=15e3;async function P(e,t,l){var S=typeof AbortController<"u"?new AbortController:null,ue=null,ut=Object.assign({},t||{});S&&(ut.signal=S.signal,ue=setTimeout(function(){try{S.abort()}catch{}},C));try{var Ja=await fetch(e,ut);return await Ja.json()}finally{ue&&clearTimeout(ue)}}function Y(e){return!!(e&&(e.name==="AbortError"||e.code===20))}if(!g)return{};const U=i(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function se(e){U.value=e;try{localStorage.setItem("quant_strategy_mode",e)}catch{}g.currentSubPage.value="strategy-manage"}const B=i([]),A=i(!1),J=i(!1),K=i(""),W=i(""),y=i(""),c=i({}),j=i(!1),E=i(""),D=i(""),k=i([]),x=i([]),I=i(""),X=i(""),re=i(!0),ne=i(!0),oe=i("20:00"),ve=i("default"),$=i(!1),Q=i(""),G=n(function(){return B.value.find(function(e){return e.id===y.value})||null});async function L(e,t){t=t||{},t.headers=Object.assign({},t.headers||{});const l=localStorage.getItem("quant_token")||"";return l&&(t.headers.Authorization="Bearer "+l),fetch(e,t)}async function ce(){const e=M("strategies"),t=++e.n;A.value=!0,J.value=!1,K.value="",W.value="";try{const l=await P("/api/strategies",{headers:ae()});if(t!==e.n)return;let S=null;Array.isArray(l)?S=l:l&&Array.isArray(l.strategies)?(S=l.strategies,l.warn&&(W.value=String(l.warn))):(J.value=!0,K.value=l&&l.detail?String(l.detail):"策略列表加载失败（接口返回异常）"),S!==null&&(B.value=S,B.value.length&&!y.value&&(y.value=B.value[0].id,o()))}catch(l){if(t!==e.n)return;console.error("[research] 策略列表加载失败:",l),J.value=!0,K.value=Y(l)?"策略列表请求超时（15s），请检查后端服务后重试":"策略列表加载失败: "+(l&&l.message||"网络错误")}finally{A.value=!1}}function o(){const e=G.value;e&&(c.value={},e.schema.forEach(function(t){c.value[t.key]=t.default}),D.value="",ge(),d(),f())}async function d(){if(!y.value){x.value=[];return}try{const e=await L("/api/strategies/"+y.value+"/profiles").then(function(t){return t.json()});x.value=e&&e.data&&e.data.profiles||[],I.value=""}catch(e){console.error("[research] 方案列表加载失败:",e),x.value=[]}}async function w(){O.value=!0;const e=(X.value||"").trim();if(!e){window._core&&window._core.showToast("请输入方案名称");return}try{const t=await L("/api/strategies/"+y.value+"/profiles",{method:"POST",body:JSON.stringify({name:e,params:c.value})}).then(function(l){return l.json()});if(t&&t.detail){window._core&&window._core.showToast(String(t.detail));return}X.value="",await d(),window._core&&window._core.showToast("方案已保存")}catch(t){console.error("[research] 方案保存失败:",t),window._core&&window._core.showToast("方案保存失败")}}function m(){const e=x.value.find(function(t){return t.id===I.value});e&&(Object.keys(e.params||{}).forEach(function(t){c.value[t]=e.params[t]}),window._core&&window._core.showToast("已应用方案: "+e.name))}async function p(){if(I.value)try{await L("/api/strategies/"+y.value+"/profiles/"+I.value,{method:"DELETE"}).then(function(e){return e.json()}),await d(),window._core&&window._core.showToast("方案已删除")}catch(e){console.error("[research] 方案删除失败:",e)}}async function f(){try{const e=await L("/api/strategies/governance").then(function(S){return S.json()}),l=(e&&e.data&&e.data.strategies||{})[y.value]||{};re.value=l.enabled!==!1,oe.value=l.schedule||"20:00",ve.value=l.universe==="all"?"all":"default",ne.value=l.show_in_calendar!==!1,Q.value=l.last_holdings||""}catch(e){console.error("[research] 纳管状态加载失败:",e)}}async function _(){try{await L("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const e={};return e[y.value]={enabled:re.value,schedule:oe.value,universe:ve.value,show_in_calendar:ne.value},e}()})}).then(function(e){return e.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(e){console.error("[research] 纳管更新失败:",e)}}async function N(){if(y.value){$.value=!0;try{const e=await L("/api/strategies/"+y.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:E.value||void 0})}).then(function(t){return t.json()});if(e&&e.detail){window._core&&window._core.showToast(String(e.detail));return}window._core&&window._core.showToast("持仓已生成"),await f()}catch(e){console.error("[research] run-once 失败:",e),window._core&&window._core.showToast("持仓生成失败")}finally{$.value=!1}}}function F(){Q.value&&window.open(Q.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function me(){const e=G.value;if(!e)return;const t=(X.value||"").trim()||e.name+"-副本";ye(t,Object.assign({},c.value)),window._core&&window._core.showToast("已复制为副本方案: "+t)}async function ye(e,t){try{await L("/api/strategies/"+y.value+"/profiles",{method:"POST",body:JSON.stringify({name:e,params:t})}).then(function(l){return l.json()}),await d()}catch(l){console.error("[research] 副本保存失败:",l)}}async function ge(){const e=M("runs"),t=++e.n;if(y.value)try{const l=await P("/api/strategies/"+y.value+"/runs?limit=5",{headers:ae()});if(t!==e.n)return;k.value=Array.isArray(l)?l:[]}catch(l){if(t!==e.n)return;console.error("[research] 运行记录加载失败:",l),k.value=[]}}const Me=2e3,_e=12e4;async function we(e,t){const l=Date.now();for(;Date.now()-l<_e;){await new Promise(function(S){setTimeout(S,Me)});try{const S=await L("/api/strategies/"+e+"/runs/"+t).then(function(ue){return ue.json()});if(S&&S.status&&S.status!=="running")return S}catch{}}return{status:"timeout",detail:"运行超时(120s), 请稍后在运行记录中查看结果"}}const ee=i([]);async function ke(){if(y.value){j.value=!0;try{const e=await L("/api/strategies/"+y.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:c.value,as_of:E.value||void 0})}).then(function(t){return t.json()});if(e&&e.detail)ElementPlus.ElMessage.error(g.t("msg.runFailed",{msg:e.detail}));else if(e&&e.status==="running"&&e.id){ElementPlus.ElMessage.info("策略运行已启动, 请稍候…");const t=await we(y.value,e.id);t.status==="success"?(ee.value=t.summary&&t.summary.symbols||[],ElementPlus.ElMessage.success(g.t("msg.runDone",{n:t.summary&&t.summary.symbols&&t.summary.symbols.length||0}))):t.status==="timeout"?ElementPlus.ElMessage.warning(t.detail):ElementPlus.ElMessage.error(g.t("msg.runFailed",{msg:t.error||t.detail||"运行失败"})),ge()}else e&&e.status==="success"?ge():ElementPlus.ElMessage.error(g.t("msg.runFailed",{msg:JSON.stringify(e)}))}catch(e){console.error("[research] 策略运行失败:",e),ElementPlus.ElMessage.error(g.t("msg.runFailed",{msg:e.message}))}finally{j.value=!1}}}const de=i("");function Z(e){de.value=de.value===e?"":e}function Oe(e){const t=document.getElementById(e);t&&t.scrollIntoView&&t.scrollIntoView({behavior:"smooth",block:"start"})}async function Le(){if(y.value)try{const e=Object.keys(c.value).map(function(l){return encodeURIComponent(l)+"="+encodeURIComponent(c.value[l])}).join("&"),t=await L("/api/strategies/"+y.value+"/ptrade-code?"+e).then(function(l){return l.json()});t&&t.code?D.value=t.code:ElementPlus.ElMessage.error(g.t("msg.exportFailed",{msg:t.detail||JSON.stringify(t)}))}catch(e){console.error("[research] PTrade 导出失败:",e),ElementPlus.ElMessage.error(g.t("msg.exportFailed",{msg:e.message}))}}function xe(){if(!D.value)return;const e=document.createElement("textarea");e.value=D.value,document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch{}document.body.removeChild(e)}const qe=window.__quantModules.researchPage.marketReview.create({ref:i,seqOf:M,authHeaders:ae}),{marketReviews:Ie,marketReviewLoading:Pe,marketReviewError:Ne,selectedReviewDate:he,marketReviewDetail:Ae,marketReviewDetailLoading:je}=qe,{marketReviewDetailError:Ee,loadMarketReviews:Re,openMarketReview:Se,toggleMarketReviewDate:Fe,backToMarketReviewList:a,loadMarketReviewDetail:r}=qe,{marketReviewChgClass:s,marketReviewChgText:v,marketReviewSrcEntries:u,fmtPct:b,fmtEmotion:He}=qe,ie=window.__quantModules.researchPage.factor.create({ref:i,seqOf:M,withAuth:L,authHeaders:ae,activeStrategyId:y,paramValues:c,activeStrategy:G,lastRunSymbols:ee}),{factorKey:vt,factorIcLoading:mt,factorLayerLoading:pt,factorIcReport:ft,factorLayerResult:yt,factorOptions:gt}=ie,{runFactorIc:wt,runFactorLayer:ht,factorDetail:bt,factorDetailLoading:_t,runFactorDetail:kt,sweepGrid:xt}=ie,{sweepResult:qt,sweepMessage:Rt,sweepLoading:St,sweepStability:Ct,runSweep:zt}=ie,{factorRange:Mt,factorIcDegraded:Pt,factorLayerDegraded:Et,factorDetailDegraded:Dt,sweepDegraded:Tt}=ie,{factorGroupedOptions:Ot,applySweepTemplate:Lt}=ie,{scoreCode:It,scoreDims:Nt,scoreConfigDims:At,scoreWeights:jt,scoreVeto:Ft,scoreVetoReason:Ht}=ie,{scoreAutoLoading:Vt,scoreAutoMsg:Bt,prefillFromRun:Jt,autoEstimateDims:Kt}=ie,{scoreLoading:Ut,scoreError:$t,scoreResult:Gt,scoreTopN:Yt,scoreDimLabel:Wt,scoreDimRows:Xt}=ie,{scoreRadarAxes:Zt,scoreRadarPolygon:Qt,loadScoreConfig:st,runScore:ea,exportScore:ta,factorSelectOptions:aa}=ie,De=window.__quantModules.researchPage.history.create({seqOf:M,state:g}),{researchHistory:sa,researchHistoryLoading:ra,researchHistoryError:ia,researchHistoryType:la,researchHistorySelected:na,researchDetailId:oa}=De,{researchCompareRows:ca,researchCompareLoading:da,researchExportLoading:ua,researchTypeLabel:va,goShortterm:ma,openResearchHistory:pa}=De,{loadResearchHistory:Ve,exportResearchHistory:fa,toggleResearchSelect:ya,toggleResearchDetail:ga,runResearchCompare:wa,deleteResearchHistory:ha}=De,{overviewCompareRows:ba,overviewCompareLoading:_a,loadOverviewCompare:rt,goBacktestFor:ka,strategyOverview:xa,strategyOverviewLoading:qa,strategyOverviewError:Ra,strategyOverviewDegraded:Sa,overviewKeyword:Ca,overviewSortKey:za,overviewOnlyEnabled:Ma,strategyCardRows:Pa,loadStrategyOverview:it,strategyStatusText:Ea,openStrategyManageFor:Da}=De;h(function(){return g.currentPage.value+"/"+g.currentSubPage.value},function(e){e==="research/research-overview"&&(ce(),Re(),$e(),et(),Ve(),rt()),e==="research/research-history"&&Ve(),e==="research/backtest"&&g.loadBacktestStrategies&&g.loadBacktestStrategies(),(e==="research/backtest"||e==="research/strategy-manage")&&it(),(e==="research/market-review"||e==="shortterm/market-review")&&!he.value&&Re(),e==="research/quant-research"&&(ce(),st()),e==="research/backtest-history"&&dt()},{immediate:!0});const Be=i([]),te=i(null),le=i(null),lt=i(null),be=i(""),Je=i(!1),Ce=i(!1),q=i(""),Ke=i(""),Ue=i("");function ae(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function $e(){const e=M("variants"),t=++e.n;try{const l=await P("/api/strategies/variants",{headers:ae()});if(t!==e.n)return;Be.value=l&&l.data&&l.data.variants||[]}catch(l){if(t!==e.n)return;console.error("[i3a] 加载 variants 失败:",l),Be.value=[]}}async function Ta(){if(!y.value){q.value="请先在量化研究选择母本策略";return}Ce.value=!0,q.value="";try{const e=await fetch("/api/strategies/"+y.value+"/clone",{method:"POST",headers:ae(),body:JSON.stringify({name:(X.value||"").trim()||void 0,params:Object.assign({},c.value)})}).then(function(l){return l.json()});if(e&&e.detail){q.value=String(e.detail);return}const t=e&&e.data;t&&t.sid&&(te.value=t.sid,q.value="已复制为新策略: "+t.name,await $e(),await Te(t.sid))}catch(e){console.error("[i3a] 复制失败:",e),q.value="复制失败: "+e.message}finally{Ce.value=!1}}async function Oa(e){te.value=e,q.value="",be.value="",await Te(e)}async function Te(e){try{const t=await fetch("/api/strategies/"+e+"/selection-spec",{headers:ae()}).then(function(l){return l.json()});t&&t.data&&t.data.spec&&(le.value=Object.assign({},t.data.spec),lt.value=t.data.fields,Ke.value=(t.data.spec.industry_scope||[]).join(","),Ue.value=(t.data.spec.market_cap_range||[]).join(","))}catch(t){console.error("[i3a] 加载 spec 失败:",t)}}async function La(){if(R.value=!0,!(!te.value||!le.value))try{le.value.industry_scope=Ke.value?Ke.value.split(/[,，]/).map(function(t){return t.trim()}).filter(Boolean):[],le.value.market_cap_range=Ue.value?Ue.value.split(/[,，]/).map(Number).filter(function(t){return!isNaN(t)}):[];const e=await fetch("/api/strategies/"+te.value+"/selection-spec",{method:"PUT",headers:ae(),body:JSON.stringify({spec:le.value})}).then(function(t){return t.json()});e&&e.data&&e.data.spec&&(le.value=e.data.spec,q.value="SelectionSpec 已保存")}catch(e){console.error("[i3a] 保存 spec 失败:",e),q.value="保存失败"}}async function Ia(){if(!te.value){q.value="请先选择/创建微调策略";return}Ce.value=!0,q.value="";try{const e=await fetch("/api/strategies/"+te.value+"/run-once",{method:"POST",headers:ae(),body:"{}"}).then(function(t){return t.json()});q.value=e&&e.detail?String(e.detail):"持仓已生成: "+(e&&e.data&&e.data.symbols||0)+" 只"}catch(e){console.error("[i3a] run-once 失败:",e),q.value="生成持仓失败"}finally{Ce.value=!1}}async function Na(){if(!te.value){q.value="请先选择/创建微调策略";return}le.value||await Te(te.value),Je.value=!0,q.value="";try{const e=await fetch("/api/strategies/"+te.value+"/ai-trade-code",{method:"POST",headers:ae(),body:JSON.stringify({spec:le.value})}).then(function(t){return t.json()});if(e&&e.detail){q.value=String(e.detail);return}e&&e.data&&(be.value=e.data.code||"",e.data.api_errors&&e.data.api_errors.length?q.value="生成成功(含 API 校验告警 "+e.data.api_errors.length+" 条)":q.value="AI 交易码已生成, 已通过矩阵内校验")}catch(e){console.error("[i3a] AI 交易码失败:",e),q.value="AI 生成失败: "+e.message}finally{Je.value=!1}}function Aa(){if(be.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(be.value).then(function(){q.value="代码已复制"});else{const e=document.createElement("textarea");e.value=be.value,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),q.value="代码已复制"}}const nt=i(""),Ge=i(""),Ye=i([]),pe=i(""),fe=i(""),z=i(""),We=i(null),Xe=i(!1),Ze=i(!1),Qe=i(!1);function ze(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function et(){const e=M("customs"),t=++e.n;try{const l=await P("/api/strategies/custom",{headers:ze()});if(t!==e.n)return;Ye.value=l&&l.data&&l.data.customs||[]}catch(l){if(t!==e.n)return;console.error("[i3b] 加载自定义策略失败:",l),Ye.value=[]}}async function ja(){if(!Ge.value.trim()){z.value="请描述策略思路";return}Xe.value=!0,z.value="";try{const e=await fetch("/api/strategies/custom",{method:"POST",headers:ze(),body:JSON.stringify({name:nt.value.trim()||"自定义策略",prompt:Ge.value})}).then(function(t){return t.json()});if(e&&e.detail){z.value=String(e.detail);return}e&&e.data&&(fe.value=e.data.code||"",z.value="AI 代写成功: "+e.data.sid+(e.data.api_errors&&e.data.api_errors.length?" (API 告警 "+e.data.api_errors.length+" 条)":" (校验通过)"),await et())}catch(e){console.error("[i3b] AI 代写失败:",e),z.value="AI 代写失败: "+e.message}finally{Xe.value=!1}}async function Fa(){if(pe.value)try{const e=await fetch("/api/strategies/custom/"+pe.value+"/code",{headers:ze()}).then(function(t){return t.json()});e&&e.data&&(fe.value=e.data.code||"",z.value="")}catch(e){console.error("[i3b] 读取代码失败:",e)}}async function Ha(){if(!pe.value){z.value="请先选择自定义策略";return}Ze.value=!0,z.value="";try{const e=await fetch("/api/strategies/custom/"+pe.value+"/backtest",{method:"POST",headers:ze(),body:"{}"}).then(function(t){return t.json()});if(e&&e.detail){z.value=String(e.detail);return}e&&e.data&&(We.value=e.data,z.value="回测完成")}catch(e){console.error("[i3b] 回测失败:",e),z.value="回测失败: "+e.message}finally{Ze.value=!1}}async function Va(){if(!pe.value){z.value="请先选择自定义策略";return}Qe.value=!0,z.value="";try{const e=await fetch("/api/strategies/custom/"+pe.value+"/ai-optimize",{method:"POST",headers:ze(),body:JSON.stringify({backtest:We.value})}).then(function(t){return t.json()});if(e&&e.detail){z.value=String(e.detail);return}e&&e.data&&(fe.value=e.data.code||"",z.value="AI 优化完成"+(e.data.api_errors&&e.data.api_errors.length?" (API 告警 "+e.data.api_errors.length+" 条)":" (校验通过)"))}catch(e){console.error("[i3b] AI 优化失败:",e),z.value="AI 优化失败: "+e.message}finally{Qe.value=!1}}function Ba(){if(fe.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(fe.value).then(function(){z.value="代码已复制"});else{const e=document.createElement("textarea");e.value=fe.value,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),z.value="代码已复制"}}const ot=Vue.ref([]),tt=Vue.ref(!1),at=Vue.ref(!1),ct=Vue.ref(30);async function dt(){const e=M("btHistory"),t=++e.n;tt.value=!0,at.value=!1;try{const l=window.__quantModules&&window.__quantModules.core||{},S=typeof l.authHeaders=="function"?l.authHeaders():{},ue=await P("/api/backtest/history?days="+ct.value,{headers:S});if(t!==e.n)return;ot.value=ue&&ue.data||[]}catch(l){if(t!==e.n)return;console.error("[backtest] 回测历史加载失败:",l),at.value=!0}finally{tt.value=!1}}return{...g,strategyManageMode:U,openStrategyManage:se,btHistory:ot,btHistoryLoading:tt,btHistoryError:at,btHistoryDays:ct,loadBtHistory:dt,researchHistory:sa,researchHistoryLoading:ra,researchHistoryError:ia,researchHistoryType:la,researchHistorySelected:na,researchDetailId:oa,researchCompareRows:ca,researchCompareLoading:da,researchTypeLabel:va,goShortterm:ma,openResearchHistory:pa,loadResearchHistory:Ve,researchExportLoading:ua,exportResearchHistory:fa,toggleResearchSelect:ya,toggleResearchDetail:ga,runResearchCompare:wa,deleteResearchHistory:ha,marketReviews:Ie,marketReviewLoading:Pe,marketReviewError:Ne,selectedReviewDate:he,marketReviewDetail:Ae,marketReviewDetailLoading:je,marketReviewDetailError:Ee,loadMarketReviews:Re,openMarketReview:Se,toggleMarketReviewDate:Fe,backToMarketReviewList:a,loadMarketReviewDetail:r,marketReviewChgClass:s,marketReviewChgText:v,marketReviewSrcEntries:u,fmtPct:b,fmtEmotion:He,strategies:B,strategiesLoading:A,strategiesError:J,strategiesErrorText:K,strategiesWarn:W,activeStrategyId:y,activeStrategy:G,paramValues:c,strategyRunning:j,ptradeCode:D,strategyRuns:k,savingProfile:O,variantSaving:R,loadStrategies:ce,onStrategyChange:o,runActiveStrategy:ke,exportActivePtradeCode:Le,copyPtradeCode:xe,profiles:x,profileSelect:I,profileName:X,loadProfiles:d,saveProfile:w,applyProfile:m,deleteProfile:p,govEnabled:re,govSchedule:oe,govUniverse:ve,govRunning:$,lastHoldings:Q,LX:T,loadGov:f,updateGov:_,runOnceActive:N,openLastHoldings:F,cloneStrategy:me,govShowCalendar:ne,factorKey:vt,factorIcLoading:mt,factorLayerLoading:pt,factorIcReport:ft,factorLayerResult:yt,factorOptions:gt,runFactorIc:wt,runFactorLayer:ht,factorDetail:bt,factorDetailLoading:_t,runFactorDetail:kt,variants:Be,variantSelected:te,variantSpec:le,specFields:lt,aiCode:be,aiCodeLoading:Je,variantBusy:Ce,variantMsg:q,loadVariants:$e,cloneNewStrategy:Ta,selectVariant:Oa,loadVariantSpec:Te,saveVariantSpec:La,runVariantOnce:Ia,genVariantAiCode:Na,copyVariantCode:Aa,customName:nt,customPrompt:Ge,customs:Ye,customSelected:pe,customCode:fe,customMsg:z,customBtResult:We,customGenLoading:Xe,customBtLoading:Ze,customOptLoading:Qe,loadCustoms:et,genCustomCode:ja,loadCustomCode:Fa,runCustomBacktest:Ha,runCustomOptimize:Va,copyCustomCode:Ba,sweepGrid:xt,sweepResult:qt,sweepMessage:Rt,sweepLoading:St,sweepStability:Ct,runSweep:zt,factorRange:Mt,factorIcDegraded:Pt,factorLayerDegraded:Et,factorDetailDegraded:Dt,sweepDegraded:Tt,factorGroupedOptions:Ot,applySweepTemplate:Lt,expandedRunId:de,toggleRunDetail:Z,researchAnchorScroll:Oe,scoreCode:It,scoreDims:Nt,scoreConfigDims:At,scoreWeights:jt,scoreVeto:Ft,scoreVetoReason:Ht,scoreLoading:Ut,scoreError:$t,scoreResult:Gt,scoreTopN:Yt,scoreDimLabel:Wt,scoreDimRows:Xt,scoreRadarAxes:Zt,scoreRadarPolygon:Qt,loadScoreConfig:st,runScore:ea,exportScore:ta,factorSelectOptions:aa,lastRunSymbols:ee,scoreAutoLoading:Vt,scoreAutoMsg:Bt,prefillFromRun:Jt,autoEstimateDims:Kt,overviewCompareRows:ba,overviewCompareLoading:_a,loadOverviewCompare:rt,goBacktestFor:ka,strategyOverview:xa,strategyOverviewLoading:qa,strategyOverviewError:Ra,strategyOverviewDegraded:Sa,overviewKeyword:Ca,overviewSortKey:za,overviewOnlyEnabled:Ma,strategyCardRows:Pa,loadStrategyOverview:it,strategyStatusText:Ea,openStrategyManageFor:Da}}}})();
