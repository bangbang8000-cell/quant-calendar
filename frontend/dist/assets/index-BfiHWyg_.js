var Md=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as Td,L as me,O as pa,Z as Dd,au as Zt,M as be,P as Ee,aW as Pd,a0 as Ke,_ as Be,F as vt,al as qt,S as dt,a1 as ut,X as ma,ai as Vt,q as Ta,o as Ba,a8 as rs,r as Lt,e as ot,av as Rd,Y as La,$ as xa,R as zd,aC as va,T as Ad,Q as la,p as Ld,n as Id}from"./vendor-vue-DDF9zi1T.js";import{e as Nd,E as Od,a as jd,b as Vd,c as Fd,z as Hd}from"./vendor-ep-VOop1zGa.js";import{C as Bd,a as Kd,W as Wd,I as Ud,S as Gd,B as Yd,F as Jd,b as Qd,c as $d,d as Xd,e as Zd,f as eu,P as tu,g as au,h as su,i as nu,T as iu,j as lu,L as ou,k as ru,G as cu,U as du,l as uu,m as vu,n as mu,D as pu,o as fu,p as gu,M as hu,q as yu,R as bu,r as wu,s as ku,K as _u,t as xu,u as Su,v as Cu,w as qu,x as Eu,y as Mu,z as Tu,A as Du,E as Pu,H as Ru,O as zu,J as Au,N as Lu,Q as Iu,V as Nu,X as Ou,Y as ju,Z as Vu,_ as Fu,$ as Hu,a0 as Bu,a1 as Ku,a2 as Wu,a3 as Uu,a4 as Gu,a5 as Yu,a6 as Ju,a7 as Qu,a8 as $u,a9 as Xu,aa as Zu,ab as ev,ac as tv,ad as av,ae as sv,af as nv,ag as iv,ah as lv,ai as ov,aj as rv,ak as cv,al as dv,am as uv,an as vv,ao as mv,ap as pv,aq as fv,ar as gv,as as hv,at as yv,au as bv,av as wv,aw as kv,ax as _v,ay as xv,az as Sv,aA as Cv,aB as qv,aC as Ev,aD as Mv,aE as Tv,aF as Dv,aG as Pv,aH as Rv,aI as zv,aJ as Av,aK as Lv,aL as Iv,aM as Nv,aN as Ov,aO as jv,aP as Vv,aQ as Fv}from"./vendor-lucide-DidEUx9K.js";var Mf=Md((Vf,je)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))t(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const A of p.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&t(A)}).observe(document,{childList:!0,subtree:!0});function f(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function t(d){if(d.ep)return;d.ep=!0;const p=f(d);fetch(d.href,p)}})();window.Vue=Td;const fa=Nd||{};window.ElementPlus=fa;fa.ElMessage=fa.ElMessage||Od;fa.ElMessageBox=fa.ElMessageBox||jd;fa.ElNotification=fa.ElNotification||Vd;fa.ElLoading=fa.ElLoading||Fd;window.ElementPlusLocaleZhCn={default:Hd};(function(){const a=[45,220,0,140,270,320],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},f={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(l,x,E){return"hsl("+l+", "+x+"%, "+E+"%)"}function d(l,x,E){x=x/100,E=E/100;const O=function(q){return(q+l/30)%12},X=x*Math.min(E,1-E),R=function(q){return E-X*Math.max(-1,Math.min(O(q)-3,Math.min(9-O(q),1)))};return Math.round(255*R(0))+", "+Math.round(255*R(8))+", "+Math.round(255*R(4))}const p=5;function A(l,x,E){return d(l,x,E).split(",").map(function(O){return parseInt(O,10)})}function g(l){const x=function(E){return E=E/255,E<=.04045?E/12.92:Math.pow((E+.055)/1.055,2.4)};return .2126*x(l[0])+.7152*x(l[1])+.0722*x(l[2])}function r(l,x){const E=g(l),O=g(x),X=Math.max(E,O),R=Math.min(E,O);return(X+.05)/(R+.05)}function w(l,x,E,O,X){let R=38,q=76;for(let I=0;I<24;I++){const V=(R+q)/2;r(A(l,O,V),A(l,x,E))>=X?q=V:R=V}return Math.round(q*10)/10}const i=4.6;var S=[255,255,255],b=[11,18,32];function M(l,x,E,O,X,R,q){for(var I=q||i,V=O,se=X,Y=0;Y<24;Y++){var ee=(V+se)/2,j=r(A(l,x,ee),E)>=I;R?j?V=ee:se=ee:j?se=ee:V=ee}return Math.round((R?V:se)*10)/10}function _(l){const x=d(l,75,42),E=M(l,68,S,14,62,!0),O=Math.max(12,E-5),X=Math.max(10,E-11),R=[247,244,238],q=M(l,78,R,10,58,!0,4.6),I=M(l,80,R,10,58,!0,4.6),V=Math.min(32,M(l,80,S,8,60,!0,4.6));return{"--primary-color":t(l,75,42),"--primary-rgb":x,"--color-primary":t(l,75,42),"--qc-primary":t(l,75,42),"--qc-primary-50":t(l,90,96),"--qc-primary-100":t(l,85,92),"--qc-primary-200":t(l,80,84),"--qc-primary-300":t(l,75,72),"--qc-primary-400":t(l,70,58),"--qc-primary-500":t(l,75,48),"--qc-primary-600":t(l,80,42),"--qc-primary-700":t(l,85,35),"--qc-primary-800":t(l,88,28),"--qc-primary-900":t(l,90,20),"--qc-primary-foreground":"#ffffff","--text-link":t(l,70,40),"--secondary-color":t(l,70,55),"--card-border":t(l,22,80),"--bg-selected":"rgba("+x+", 0.08)","--btn-primary-bg":t(l,80,V),"--btn-primary-border":t(l,80,V),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(l,82,28),"--btn-primary-hover-border":t(l,82,28),"--btn-primary-active-bg":t(l,85,24),"--btn-primary-active-border":t(l,85,24),"--btn-primary-plain-bg":"rgba("+x+", 0.08)","--btn-primary-plain-border":"rgba("+x+", 0.25)","--btn-primary-plain-color":t(l,80,q),"--btn-primary-plain-hover-bg":"rgba("+x+", 0.15)","--btn-primary-plain-hover-border":t(l,80,32),"--btn-primary-text-color":t(l,80,q),"--gradient":"linear-gradient(135deg, "+t(l,80,X)+" 0%, "+t(l,76,O)+" 50%, "+t(l,70,E)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,76,O)+" 0%, "+t(l,85,X)+" 100%)","--primary-text":t(l,78,q),"--primary-solid":"var(--btn-primary-bg)","--primary-on-solid":"var(--btn-primary-color)","--gradient-panel":"linear-gradient(135deg, "+t(l,62,Math.min(74,w(l,45,14,58,p)+5))+" 0%, "+t(l,58,w(l,45,14,58,p))+" 100%)","--panel-fg":t(l,45,14),"--qc-nav-item-active":t(l,80,I),"--qc-nav-item-active-bg":t(l,85,92),"--qc-nav-item-active-border":t(l,75,48),"--qc-nav-badge-bg":t(l,85,92),"--qc-nav-badge-text":t(l,80,35),"--qc-ring":t(l,70,58)}}function z(l){const x=d(l,85,65),E=M(l,80,b,30,92,!1),O=Math.min(94,E+8),X=Math.min(96,E+16),R=[22,35,59],q=M(l,85,R,45,96,!1,4.6),I=M(l,85,R,45,96,!1,4.6);return{"--primary-color":t(l,85,65),"--primary-rgb":x,"--color-primary":t(l,85,65),"--qc-primary":t(l,90,65),"--qc-primary-50":t(l,50,18),"--qc-primary-100":t(l,55,22),"--qc-primary-200":t(l,55,26),"--qc-primary-300":t(l,60,30),"--qc-primary-400":t(l,65,38),"--qc-primary-500":t(l,80,52),"--qc-primary-600":t(l,90,65),"--qc-primary-700":t(l,92,72),"--qc-primary-800":t(l,90,80),"--qc-primary-900":t(l,92,88),"--qc-primary-foreground":"#101014","--text-link":t(l,85,65),"--secondary-color":t(l,70,60),"--card-border":t(l,30,25),"--bg-selected":"rgba("+x+", 0.10)","--btn-primary-bg":t(l,85,65),"--btn-primary-border":t(l,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(l,80,72),"--btn-primary-hover-border":t(l,80,72),"--btn-primary-active-bg":t(l,75,80),"--btn-primary-active-border":t(l,75,80),"--btn-primary-plain-bg":"rgba("+x+", 0.08)","--btn-primary-plain-border":"rgba("+x+", 0.25)","--btn-primary-plain-color":t(l,85,65),"--btn-primary-plain-hover-bg":"rgba("+x+", 0.15)","--btn-primary-plain-hover-border":t(l,85,65),"--btn-primary-text-color":t(l,85,65),"--gradient":"linear-gradient(135deg, "+t(l,80,E)+" 0%, "+t(l,85,O)+" 50%, "+t(l,85,X)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,85,X)+" 0%, "+t(l,80,E)+" 100%)","--primary-text":t(l,85,I),"--primary-solid":"var(--btn-primary-bg)","--primary-on-solid":"var(--btn-primary-color)","--gradient-panel":"linear-gradient(135deg, "+t(l,60,Math.min(76,w(l,40,12,55,p)+5))+" 0%, "+t(l,55,w(l,40,12,55,p))+" 100%)","--panel-fg":t(l,40,12),"--qc-nav-item-active":t(l,85,q),"--qc-nav-item-active-bg":"rgba("+x+", 0.10)","--qc-nav-item-active-border":t(l,85,65),"--qc-nav-badge-bg":"rgba("+x+", 0.12)","--qc-nav-badge-text":t(l,85,65),"--qc-ring":t(l,85,65)}}function F(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function C(l){return l=parseInt(l,10),isNaN(l)?45:Math.max(0,Math.min(359,l))}function c(l,x){let E=l||"light",O=x==null||x===""?null:x;if(e[l]){const I=e[l];E=I[0],O==null&&(O=I[1])}E==="system"&&(E=F()?"dark":"light");const X=E==="dark";O=C(O??45);const R=document.documentElement;R.setAttribute("data-theme",X?"dark-pro":"gold"),R.setAttribute("data-theme-mode",X?"dark":"light");const q=X?z(O):_(O);Object.keys(q).forEach(function(I){R.style.setProperty(I,q[I])});try{localStorage.setItem("quant_theme_mode",X?"dark":"light"),localStorage.setItem("quant_theme_hue",String(O))}catch{}return{mode:X?"dark":"light",hue:O}}function n(){const l=localStorage.getItem("quant_theme");if(!l||!e[l]||localStorage.getItem("quant_theme_hue")!==null)return null;const x=e[l];return{mode:x[0],hue:x[1]}}function u(){const l=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let x=l.theme||"system",E=l.theme_hue!=null&&l.theme_hue!==""?l.theme_hue:null;const O=n();return E==null&&O&&(x=O.mode,E=O.hue),E==null&&(E=45),c(x,E)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:f,generateLightTokens:_,generateDarkTokens:z,migrateLegacyTheme:n,applyTheme:c,init:u},u()})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],f={};let t=a,d=null;function p(){return d&&typeof d=="object"&&"value"in d?d.value||a:t}function A(b,M){return e.indexOf(b)===-1?!1:(f[b]=M&&typeof M=="object"?M:{},!0)}function g(b){const M=e.indexOf(b)!==-1?b:a;return t=M,d&&typeof d=="object"&&"value"in d&&(d.value=M),typeof document<"u"&&document.documentElement.setAttribute("lang",M),t}function r(){return p()}function w(b){if(b&&typeof b=="object"&&"value"in b){d=b;const M=e.indexOf(b.value)!==-1?b.value:a;b.value=M,t=M}return t}function i(b,M){const _=p(),z=f[_]||{};let F=b in z?z[b]:null;if(F==null&&_!=="en"){const C=f.en||{};F=b in C?C[b]:null}return F==null&&(F=String(b)),M&&typeof M=="object"&&Object.keys(M).forEach(function(C){F=F.replace(new RegExp("\\{"+C+"\\}","g"),String(M[C]))}),F}const S={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:f,registerLocale:A,setLocale:g,getLocale:r,bindLocale:w,t:i};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=S),S});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let f=[];function t(_){const z=String(_||"");let F="";for(const C of z){const c=a[C];c?F+=c.charAt(0):/[a-zA-Z0-9]/.test(C)&&(F+=C.toLowerCase())}return F}function d(_){const z=String(_||"");let F="";for(const C of z){const c=a[C];c?F+=c:/[a-zA-Z0-9]/.test(C)&&(F+=C.toLowerCase())}return F}function p(_){return String(_||"").trim().toLowerCase()}function A(_,z){const F=(z.code||"").toLowerCase();return/^\d+$/.test(_)?F.indexOf(_)!==-1:/[\u4e00-\u9fa5]/.test(_)?(z.name||"").toLowerCase().indexOf(_)!==-1:F.indexOf(_)!==-1||(z.initials||t(z.name)).indexOf(_)!==-1||(z.pinyin||d(z.name)).indexOf(_)!==-1}function g(_){const z={},F=[],C=function(c,n,u){!c||z[c]||(z[c]=!0,F.push({code:c,name:n||c,source:u||"core",initials:t(n||c),pinyin:d(n||c)}))};return e.forEach(function(c){C(c.code,c.name,"core")}),(_||[]).forEach(function(c){C(c.code,c.name,"extra")}),F}function r(_,z){const F=p(_);if(!F||!z||!z.length)return[];const C=F.split(/[\s,，、;；]+/).filter(Boolean);return C.length?z.filter(function(c){return C.every(function(n){return A(n,c)})}).slice(0,20).map(function(c){return{code:c.code,name:c.name,source:c.source||"core"}}):[]}function w(_){Array.isArray(_)&&(f=f.concat(_))}function i(){return f.slice()}function S(){return g(f)}function b(_){return r(_,S())}const M={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:d,normalizeQuery:p,matchToken:A,buildStockIndex:g,searchStocksByQuery:r,registerExtraStocks:w,getExtraStocks:i,getStockIndex:S,searchCoreStocks:b};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=M),M});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},f=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function d(n){return n=parseInt(n,10),!isNaN(n)&&n>=0&&n<=360}const p={light:"classic-white",dark:"dark-pro"};function A(){if(typeof localStorage>"u")return{};try{const n=localStorage.getItem(a);if(!n)return{};const u=JSON.parse(n);return u&&typeof u=="object"?u:{}}catch{return{}}}function g(n){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(n))}catch{}}function r(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function w(){const n=Object.assign({},e,A()),u={};return f.forEach(function(l){const x=n[l];u[l]=l==="theme_hue"?d(x)?parseInt(x,10):e[l]:t[l].indexOf(x)!==-1?x:e[l]}),u}function i(n){if(f.indexOf(n)!==-1)return w()[n]}function S(n,u){return f.indexOf(n)===-1?!1:n==="theme_hue"?d(u):t[n].indexOf(u)!==-1}function b(n,u){if(!S(n,u))return!1;const l=A();return l[n]=u,g(l),r()&&_({[n]:u}),!0}function M(n){if(!n||typeof n!="object")return!1;const u={};if(Object.keys(n).forEach(function(x){S(x,n[x])&&(u[x]=n[x])}),!Object.keys(u).length)return!1;const l=Object.assign({},A(),u);return g(l),r()&&_(u),!0}function _(n){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:n})}).catch(function(){})}catch{}}async function z(){const n=w();if(!r()||typeof fetch>"u")return n;try{const u=await fetch("/api/user_config/preferences");if(u.ok){const l=await u.json();if(l.success&&l.preferences){const x=l.preferences;f.forEach(function(E){t[E].indexOf(x[E])!==-1&&(n[E]=x[E])}),g(n)}}}catch{}return n}function F(n){const u=n||i("info_density")||"comfortable",l=t.info_density.indexOf(u)!==-1?u:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",l),l}function C(n){const u=n||i("theme")||"system";if(u==="system"){let l=!1;return typeof window<"u"&&window.matchMedia&&(l=window.matchMedia("(prefers-color-scheme: dark)").matches),l?"dark":"light"}return u==="dark"||u==="light"?u:"light"}const c={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:f,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:p,getLocal:w,getPreference:i,isValidValue:S,setPreference:b,setPreferences:M,saveToBackend:_,loadPreferences:z,resolveTheme:C,applyDensity:F};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=c),c});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function f(){if(typeof localStorage>"u")return[];try{const w=localStorage.getItem(a);if(!w)return[];const i=JSON.parse(w);return Array.isArray(i)?i:[]}catch{return[]}}function t(w){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(w))}catch{}}function d(w,i){if(!w)return!1;let S=f().filter(function(b){return b.code!==w});return S.unshift({code:w,name:(i||"").toString().slice(0,32),ts:Date.now()}),S.length>10&&(S=S.slice(0,10)),t(S),!0}function p(){return f().slice(0,10)}function A(w){t(f().filter(function(i){return i.code!==w}))}function g(){t([])}const r={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:d,getRecentViewed:p,removeRecent:A,clearRecent:g};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=r),r});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:f,watch:t,onMounted:d,nextTick:p}=a;function A(o,T={}){if(typeof o=="string"&&o.startsWith("/api/")){const m=localStorage.getItem("quant_token");if(m)return{...T,headers:{...T.headers||{},Authorization:"Bearer "+m}}}return T}async function g(o,T={}){const m=A(o,T),W={"Content-Type":"application/json",...m.headers},ue=(T.method||"GET").toUpperCase(),Z=ue+"|"+o,P=async()=>{const G=await fetch(o,{...m,headers:W});if(G.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!G.ok){let re="";try{const pe=await G.json();re=pe&&pe.detail||""}catch{}throw Object.assign(new Error(re||"请求失败（HTTP "+G.status+"）"),{status:G.status})}return await G.json()};try{const G=T.noLoading?P:()=>u(P);return ue==="GET"&&!T.noDedupe?await F(Z,G):await G()}catch(G){throw G.message==="登录已过期"?G:(console.error("[apiFetch] "+o+":",G.message),Object.assign(G,{_formatted:l(G,G.status)}))}}function r(){return new Date().toISOString().split("T")[0]}function w(o){return o?o.split("T")[0]:""}function i(o,T="info",m=3e3){let W=document.querySelector(".toast-container");W||(W=document.createElement("div"),W.className="toast-container",document.body.appendChild(W));const ue=document.createElement("div");ue.className=`toast toast-${T}`,ue.textContent=o,W.appendChild(ue),setTimeout(()=>{ue.classList.add("leaving"),setTimeout(()=>ue.remove(),300)},m)}function S(o,T=300){let m;return function(...W){clearTimeout(m),m=setTimeout(()=>o.apply(this,W),T)}}function b(o,T=300){let m=!1;return function(...W){m||(o.apply(this,W),m=!0,setTimeout(()=>{m=!1},T))}}async function M(o,T=3e3,m=""){const W=new Promise((ue,Z)=>setTimeout(()=>Z(new Error("timeout")),T));try{return await Promise.race([o,W])}catch(ue){console.warn(`[timeout] ${m||"task"} failed:`,ue.message)}}const _=new Map;function z(){return _.clear(),!0}function F(o,T){if(!o||typeof T!="function")return Promise.reject(new Error("bad dedupe args"));if(_.has(o))return _.get(o);const m=Promise.resolve().then(T).finally(()=>{_.delete(o)});return _.set(o,m),m}let C=0;function c(){return C=0,!0}function n(){return C}async function u(o){C++;try{return await o()}finally{C--}}function l(o,T){if(!o)return"请求失败";if(o&&typeof o=="object"&&o.detail)return String(o.detail);if(typeof o=="string"&&o)return o;if(o&&o.message){const m=String(o.message);return/Failed to fetch|fetch failed|networkerror/i.test(m)?"网络连接失败，请检查网络后重试":m}return T?"请求失败（HTTP "+T+"）":"请求失败"}function x(o,T){if(o===T)return!0;try{return JSON.stringify(o)===JSON.stringify(T)}catch{return!1}}function E(o,T,m){const W=(o||"GET").toUpperCase();let ue="";if(m)try{const Z={};Object.keys(m).sort().forEach(P=>{Z[P]=m[P]}),ue=JSON.stringify(Z)}catch{ue=""}return W+"|"+T+"|"+ue}class O{constructor(){this._map=new Map,this._exp=new Map}get(T){const m=this._exp.get(T);if(m!=null){if(Date.now()>m){this.delete(T);return}return this._map.get(T)}}set(T,m,W){return this._map.set(T,m),this._exp.set(T,Date.now()+(W>0?W:-1)),m}delete(T){this._map.delete(T),this._exp.delete(T)}clear(){this._map.clear(),this._exp.clear()}has(T){return this.get(T)!==void 0}get size(){return this._map.size}}function X(o){const T=new O,m=o!=null&&o>0?o:15e3;return{store:T,defaultTtl:m,get:W=>T.get(W),set:(W,ue,Z)=>T.set(W,ue,Z??m),delete:W=>T.delete(W),clear:()=>T.clear(),size:()=>T.size}}const R=new Set;async function q(o){const T=o&&o.cache,m=o&&o.key,W=o&&(o.fetchFn||o.fetcher),ue=o&&o.ttl;if(!T||!m||typeof W!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(R.has(m))return{ok:!1,changed:!1,skipped:!0,fresh:null};R.add(m);try{const Z=T.get(m);let P;try{P=await W()}catch(re){return o.onError&&o.onError(re),{ok:!1,changed:!1,fresh:null}}const G=Z!==void 0&&!x(Z,P);return T.set(m,P,ue),o.apply&&o.apply(P,Z),Z!==void 0&&(G?o.onChanged&&o.onChanged(P,Z):o.onUnchanged&&o.onUnchanged(P,Z)),{ok:!0,changed:G,fresh:P}}finally{R.delete(m)}}const I=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function V(o,T={}){if(o==null)return"";const m=T&&T.allow||I,W=new Set(m.map(G=>String(G).toUpperCase()));let ue;try{ue=new DOMParser().parseFromString(String(o),"text/html")}catch{return String(o).replace(/[<>&]/g,re=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[re])}const Z=ue.body||ue;function P(G){Array.from(G.childNodes).forEach(re=>{if(re.nodeType===1){const pe=String(re.tagName).toUpperCase();if(W.has(pe))Array.from(re.attributes).forEach(de=>{const J=de.name.toLowerCase(),oe=(de.value||"").trim().toLowerCase();(J.startsWith("on")||(J==="href"||J==="src"||J==="xlink:href")&&oe.startsWith("javascript:")||J==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(oe))&&re.removeAttribute(de.name),J==="href"&&!/^(https?:|mailto:|#|\/)/.test(oe)&&re.removeAttribute("href")}),pe==="A"&&re.setAttribute("rel","noopener noreferrer"),P(re);else{const de=re.parentNode;for(;re.firstChild;)de.insertBefore(re.firstChild,re);de.removeChild(re)}}else if(re.nodeType!==3){if(re.nodeType===8)re.parentNode&&re.parentNode.removeChild(re);else if(re.nodeType===4){const pe=ue.createTextNode(re.nodeValue||"");re.parentNode&&re.parentNode.replaceChild(pe,re)}}})}return P(Z),Z.innerHTML}const se="/api/openapi",Y="/api/market/ws/quotes",ee=1,j=2.5,H="数据不可达",N="实时不可用，不刷新";function k(){const o=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",T=typeof location<"u"?location.host:"localhost:8001";return o+"//"+T+Y}function D(o,T){if(!o)return null;const m=T||{riseSpeed:ee,volumeRatio:j},W=m.riseSpeed!=null?m.riseSpeed:ee,ue=m.volumeRatio!=null?m.volumeRatio:j,Z=parseFloat(o.rise_speed);if(!isNaN(Z)&&Math.abs(Z)>W)return Z>0?"涨速预警":"跌速预警";const P=parseFloat(o.volume_ratio);return!isNaN(P)&&P>ue?"放量预警":null}function ce(o){const T=Number(o);return o==null||isNaN(T)?null:T}const y={apiFetch:g,withAuthHeaders:A,getToday:r,formatDate:w,withTimeout:M,showToast:i,debounce:S,throttle:b,resetInFlight:z,dedupeRequest:F,resetLoading:c,loadingCount:n,withLoading:u,formatApiError:l,jsonEquals:x,makeCacheKey:E,CacheStore:O,createTtlCache:X,silentRefresh:q,sanitizeHtml:V,OPENAPI_ROUTE_BASE:se,REALTIME_WS_PATH:Y,WARN_RISE_SPEED_THRESHOLD:ee,WARN_VOLUME_RATIO_THRESHOLD:j,REALTIME_DEGRADED_TEXT:H,REALTIME_FALLBACK_TEXT:N,buildRealtimeWsUrl:k,checkQuoteWarning:D,quoteFmt:{price:function(o){const T=ce(o);return T===null?"--":T.toFixed(2)},pct:function(o){const T=ce(o);return T===null?"--":(T>0?"+":"")+T.toFixed(2)+"%"},num:function(o){const T=ce(o);return T===null?"--":T.toFixed(2)},color:function(o){const T=o?o.change_pct:null,m=ce(T);return m===null?"":m>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=y),typeof je<"u"&&je.exports&&(je.exports=y)})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(S,b){return S+"/"+b}function f(S,b,M,_){var z=S[b]||[],F=z.findIndex(function(n){return n.subPage===M});if(F!==-1)return{groups:S,activeKey:e(b,M)};var C=z.concat([{subPage:M,title:_}]);C.length>a&&(C=d(C));var c=Object.assign({},S,t({},b,C));return{groups:c,activeKey:e(b,M)}}function t(S,b,M){return S[b]=M,S}function d(S){if(S.length<=a)return S;var b=S.length>1?1:0;return S.filter(function(M,_){return _!==b})}function p(S,b,M,_){var z=S[b]||[],F=z.findIndex(function(u){return u.subPage===M});if(F===-1)return{groups:S,nextActive:null};var C=z.filter(function(u){return u.subPage!==M}),c=Object.assign({},S,t({},b,C)),n=null;return M===_&&(C[F]?n=C[F].subPage:C[F-1]?n=C[F-1].subPage:n=null),{groups:c,nextActive:n}}function A(S){return S&&S.length?S[0]:""}function g(S,b){return S[b]||[]}function r(S,b,M){var _=S[b]||[],z=_.filter(function(C){return C.subPage===M}),F=Object.assign({},S,t({},b,z));return{groups:F,activeKey:z.length?e(b,z[0].subPage):null}}function w(S,b){var M=Object.assign({},S,t({},b,[]));return{groups:M,activeKey:null}}function i(S,b,M,_){var z=(S[b]||[]).slice();if(M<0||M>=z.length)return{groups:S};var F=z.splice(M,1)[0];return z.splice(Math.max(0,Math.min(_,z.length)),0,F),{groups:Object.assign({},S,t({},b,z))}}return{MAX_TABS:a,openTab:f,closeTab:p,getDefaultTab:A,tabsOf:g,evictOldest:d,closeOthers:r,closeAll:w,reorder:i,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var on=typeof je=="object"&&je.exports?je.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;on&&(window.__quantModules.tabsCore=on)}(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",f="nav_mode";function t(i){return a.indexOf(i)!==-1?i:e}function d(i){return t(i)==="subnav"}function p(i){return t(i)==="tree"}function A(i){return t(i)==="toptab"}function g(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function r(){var i=g(),S=e;if(i)try{S=t(i.getItem(f))}catch{}return{navMode:S}}function w(i){var S=g();if(!(!S||!i))try{i.navMode!==void 0&&S.setItem(f,t(i.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:d,treeChildrenVisible:p,topTabsVisible:A,readPrefs:r,writePrefs:w}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var rn=typeof je=="object"&&je.exports?je.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;rn&&(window.__quantModules.navModeCore=rn)}(function(){function e(k,D){if(!Array.isArray(k)||k.length<=D)return k;const ce=[],U=k.length/D*2;for(let y=0;y<k.length;y+=U){const o=Math.floor(y),T=Math.min(k.length,Math.ceil(y+U));let m=1/0,W=-1,ue=-1/0,Z=-1;for(let P=o;P<T;P++){const G=k[P];if(!G)continue;const re=G[3]!=null?Number(G[3]):1/0,pe=G[4]!=null?Number(G[4]):-1/0;re<m&&(m=re,W=P),pe>ue&&(ue=pe,Z=P)}W>=0&&ce.push(k[W]),Z>=0&&Z!==W&&ce.push(k[Z])}return ce}let f=null;function t(){return typeof echarts<"u"?Promise.resolve():(f||(f=new Promise(function(k,D){const ce=document.createElement("script");ce.src="/static/lib/echarts.min.js",ce.async=!0,ce.onload=function(){typeof echarts<"u"?k():D(new Error("echarts 加载后未定义"))},ce.onerror=function(){D(new Error("echarts.min.js 加载失败"))},document.head.appendChild(ce)})),f)}function d(){const k=getComputedStyle(document.documentElement);return{primary:k.getPropertyValue("--primary-color").trim()||"#2563eb",up:k.getPropertyValue("--color-up").trim()||"#43e97b",down:k.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:k.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:k.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const p=k=>(getComputedStyle(document.documentElement).getPropertyValue(k)||"").trim();function A(){return{up:p("--color-up")||"#E63946",down:p("--color-down")||"#2E7D32",neutral:p("--color-neutral")||"#43a047",accent:p("--color-accent")||"#F59E0B",risk:p("--color-danger")||"#C62828",warn:p("--color-warning")||"#FF9800",success:p("--color-success")||"#4CAF50",primary:p("--qc-primary-600")||"#b8922a",grid:p("--chart-split")||"#e2e8f0",axis:p("--chart-axis")||"#cbd5e1",bg:p("--chart-bg")||"transparent",series:[p("--qc-primary-600")||"#b8922a",p("--qc-primary-500")||"#c49b2e",p("--qc-primary-700")||"#8f6f1f",p("--qc-primary-400")||"#d4b352",p("--color-up")||"#E63946",p("--color-down")||"#2E7D32",p("--color-accent")||"#F59E0B",p("--qc-neutral-400")||"#b8ae9f"]}}function g(k,D,ce,U=!1,y=!1){if(!D||D.length===0)return;D.length>2e3&&(D=e(D,2e3));const o=D.map(ke=>typeof ke[0]=="string"&&ke[0].indexOf("-")>=0?ke[0]:ke[0].slice(0,4)+"-"+ke[0].slice(4,6)+"-"+ke[0].slice(6,8)),T=d(),m={ma5:p("--color-accent")||"#F59E0B",ma10:p("--color-primary")||"#3B82F6",ma20:p("--color-warning")||"#8B5CF6",ma60:p("--color-success")||"#10B981"},W=D.map(ke=>[ke[1],ke[2],ke[3],ke[4]]),ue=D.map(ke=>ke[5]),Z=D.map(ke=>ke[6]),P=D.map(ke=>ke[7]),G=D.map(ke=>ke[8]),re=D.map(ke=>ke[9]),pe=D.map(ke=>ke[10]),J=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",oe=T.borderLight,Pe={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:T.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:J,borderColor:oe,textStyle:{color:T.textSecondary,fontSize:12},formatter:function(ke){if(!ke||!ke.length)return"";const _e=ke[0].dataIndex,te=D[_e];if(!te)return"";const xe=k.getOption(),De=xe.legend&&xe.legend[0]&&xe.legend[0].selected||{},ne=Ie=>De[Ie]!==!1,ae=Ie=>Ie==null||isNaN(Ie)?"--":Number(Ie).toFixed(2),he=Ie=>Ie==null||isNaN(Ie)?"--":(Number(Ie)/1e4).toFixed(2)+"万手",Ne=['<div style="font-weight:600;color:'+T.textSecondary+';">'+o[_e]+"</div>"];return Ne.push("开: "+ae(te[1])+"　收: "+ae(te[2])),Ne.push("低: "+ae(te[3])+"　高: "+ae(te[4])),Ne.push("成交量: "+he(te[5])),te[6]!=null&&ne("MA5")&&Ne.push("MA5: "+ae(te[6])),te[7]!=null&&ne("MA10")&&Ne.push("MA10: "+ae(te[7])),te[8]!=null&&ne("MA20")&&Ne.push("MA20: "+ae(te[8])),te[9]!=null&&ne("MA60")&&Ne.push("MA60: "+ae(te[9])),te[10]!=null&&Ne.push("VOL_MA5: "+he(te[10])),Ne.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:y?0:8,textStyle:{color:T.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:y?30:40,height:y?"48%":"52%"},{left:56,right:16,top:y?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:o,boundaryGap:!0,axisLine:{lineStyle:{color:oe}},axisLabel:{color:T.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:o,axisLabel:{show:!1},axisLine:{lineStyle:{color:oe}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:oe}},axisLabel:{color:T.textSecondary,fontSize:11,formatter:function(ke){const _e=Math.round(ke*100)/100;return _e%1===0?String(Math.round(_e)):_e.toFixed(2)}},splitLine:{lineStyle:{color:oe,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:oe}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,D.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:oe,textStyle:{color:T.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:W,itemStyle:{color:T.up,color0:T.down,borderColor:T.up,borderColor0:T.down}},{name:"MA5",type:"line",data:Z,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma5}},{name:"MA10",type:"line",data:P,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma10}},{name:"MA20",type:"line",data:G,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma20}},{name:"MA60",type:"line",data:re,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ue,itemStyle:{color:function(ke){const _e=ke.dataIndex;return D[_e][1]>=D[_e][2]?T.up:T.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:pe,smooth:!0,symbol:"none",lineStyle:{width:1,color:m.ma5,type:"dashed"}}]};k.setOption(Pe,!0)}const r=new Map;function w(k){return r.has(k)||r.set(k,{chart:null,cache:null}),r.get(k)}async function i(k,D,ce,U=!1,y={}){await t();const o=w(k);let T=document.getElementById(k);if(!T)for(let m=0;m<16&&(await new Promise(W=>setTimeout(W,50)),T=document.getElementById(k),!T);m++);if(!T)throw new Error("无法找到图表容器: "+k);if(T.offsetWidth<50&&(T.style.minWidth="600px",T.style.minHeight="300px"),!o.chart||o.chart.isDisposed()||o.chart.getDom()!==T){if(o.chart)try{o.chart.dispose()}catch{}o.chart=echarts.init(T),o.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const m=y.onLegend;typeof m=="function"&&o.chart.on("legendselectchanged",W=>{W&&W.selected&&m(W.selected)})}return g(o.chart,D,ce,U,!!y.isMobile),o.cache={data:D,period:ce,isIndex:U,isMobile:!!y.isMobile},o.chart}function S(k){const D=r.get(k);D&&D.chart&&(D.chart.dispose(),D.chart=null,D.cache=null)}function b(k){const D=r.get(k);D&&D.chart&&D.chart.resize()}function M(k,D){const ce=r.get(k),U=ce&&ce.chart;if(U)if(D<=0)U.dispatchAction({type:"dataZoom",start:0,end:100});else{const T=Math.max(0,(60-D)/60*100);U.dispatchAction({type:"dataZoom",start:Math.round(T),end:100})}}function _(k){var U,y,o;const D=r.get(k);if(!D||!D.chart||!D.cache||D.chart.isDisposed())return;const ce=((o=(y=(U=D.chart.getOption())==null?void 0:U.legend)==null?void 0:y[0])==null?void 0:o.selected)||null;g(D.chart,D.cache.data,D.cache.period,D.cache.isIndex,D.cache.isMobile),ce&&D.chart.setOption({legend:{selected:ce}})}function z(k){const D=r.get(k);return D&&D.chart}const F=new Map;function C(k){return F.has(k)||F.set(k,{chart:null,cache:null}),F.get(k)}function c(k,D,ce={}){return t().then(function(){const U=C(k),y=document.getElementById(k);if(!y)throw new Error("无法找到图表容器: "+k);if(y.offsetWidth<50&&(y.style.minWidth="600px",y.style.minHeight="300px"),U.chart&&U.chart.getDom&&U.chart.getDom()!==y){try{U.chart.dispose()}catch{}U.chart=null}U.chart||(U.chart=echarts.init(y),U.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),U.resizeBound||(U.resizeBound=!0,window.addEventListener("resize",function(){U.chart&&!U.chart.isDisposed()&&U.chart.resize()})));const o=typeof D=="function"?D():D;return U.chart.setOption(o,!0),U.cache={buildOption:D,key:ce.key||""},U.chart})}function n(k){var y,o,T;const D=F.get(k);if(!D||!D.chart||!D.cache||D.chart.isDisposed())return;const ce=((T=(o=(y=D.chart.getOption())==null?void 0:y.legend)==null?void 0:o[0])==null?void 0:T.selected)||null,U=typeof D.cache.buildOption=="function"?D.cache.buildOption():D.cache.buildOption;D.chart.setOption(U,!0),ce&&U&&U.legend&&U.legend.selected&&D.chart.setOption({legend:{selected:ce}})}function u(k){const D=F.get(k);D&&D.chart&&(D.chart.dispose(),D.chart=null,D.cache=null)}function l(k){const D=F.get(k);D&&D.chart&&D.chart.resize()}const x=new Map;function E(k){return x.has(k)||x.set(k,{chart:null,cache:null}),x.get(k)}function O(k,D,ce={}){return t().then(function(){const U=E(k),y=document.getElementById(k);if(!y)return null;if(y.offsetWidth<50&&(y.style.minWidth="600px",y.style.minHeight="300px"),U.chart&&U.chart.getDom&&U.chart.getDom()!==y){try{U.chart.dispose()}catch{}U.chart=null}U.chart||(U.chart=echarts.init(y),U.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),U.resizeBound||(U.resizeBound=!0,window.addEventListener("resize",function(){U.chart&&!U.chart.isDisposed()&&U.chart.resize()})));const o=typeof D=="function"?D():D;return U.chart.setOption(o,!0),U.cache={buildOption:D,key:ce.key||""},U.chart})}function X(k){const D=x.get(k);if(!D||!D.chart||!D.cache||D.chart.isDisposed())return;const ce=typeof D.cache.buildOption=="function"?D.cache.buildOption():D.cache.buildOption;D.chart.setOption(ce,!0)}function R(k){const D=x.get(k);D&&D.chart&&(D.chart.dispose(),D.chart=null,D.cache=null)}function q(k){const D=x.get(k);D&&D.chart&&D.chart.resize()}const I=O,V=X,se=R,Y=q;function ee(k,D,ce,U){U=U||{};const y=U.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[U.navLabel||"净值",U.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:ce||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:U.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:U.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:U.navLabel||"净值",type:"line",data:k||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:U.ddLabel||"回撤",type:"line",yAxisIndex:1,data:D||[],showSymbol:!1,areaStyle:{opacity:.25,color:y},lineStyle:{color:y,type:"solid",width:1.5}}]}}function j(k,D){D=D||{};const ce=D.bandColor||"#1976d2",U=k&&k.dates||[],y=k&&k.median||[],o=k&&k.q25||[],T=k&&k.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[D.medianLabel||"中位IC",D.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:U,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:D.medianLabel||"中位IC",type:"line",data:y,showSymbol:!1,lineStyle:{width:2,color:ce}},{name:D.bandLabel||"25–75分位",type:"line",data:o,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ce,opacity:.12}},{name:"_bandH",type:"line",data:T.map(function(m,W){return m-(o[W]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ce,opacity:.12}}]}}function H(k,D){D=D||{};const ce=D.color||"#7c3aed",U=k&&k.dates||[],y=k&&k.value||[],o=k&&k.upper||[],T=k&&k.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[D.valueLabel||"情绪",D.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:U,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:D.valueLabel||"情绪",type:"line",data:y,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:ce}},{name:D.bandLabel||"过热/冰点带",type:"line",data:o,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ce,opacity:.1}},{name:"_bandL",type:"line",data:T.map(function(m,W){return(o[W]||0)-m}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ce,opacity:.1}}]}}const N={renderKlineChart:g,renderKlineTo:i,disposeKline:S,resizeKline:b,zoomKline:M,redrawKline:_,getKlineChart:z,renderBacktestTo:c,redrawBacktest:n,disposeBacktest:u,resizeBacktest:l,renderPortfolioTo:O,redrawPortfolio:X,disposePortfolio:R,resizePortfolio:q,renderSimpleChartTo:I,redrawSimpleChart:V,disposeSimpleChart:se,resizeSimpleChart:Y,buildNavDrawdownOption:ee,buildIcBandOption:j,buildSentimentBandOption:H,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:A,init(){return{renderKlineChart:g,renderKlineTo:i,disposeKline:S,resizeKline:b,zoomKline:M,redrawKline:_,getKlineChart:z,renderBacktestTo:c,redrawBacktest:n,disposeBacktest:u,resizeBacktest:l,renderPortfolioTo:O,redrawPortfolio:X,disposePortfolio:R,resizePortfolio:q,renderSimpleChartTo:I,redrawSimpleChart:V,disposeSimpleChart:se,resizeSimpleChart:Y,buildNavDrawdownOption:ee,buildIcBandOption:j,buildSentimentBandOption:H,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:A}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=N),typeof je<"u"&&je.exports&&(je.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:ee,buildIcBandOption:j,buildSentimentBandOption:H})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:f}=Vue,{configChanged:t,consensus:d}=a,p=e(null),A=e(""),g=e(null),r=e([]),w=e([]),i=e([]),S=e([]),b=e([]),M=e([]),_=e({});function z(Se){const we=b.value.indexOf(Se);we>=0?b.value.splice(we,1):b.value.push(Se)}const F=e("date"),C=e([]),c=e(!1),n=e(!1),u=e("watchlist"),l=e([]),x=e({vendors:[]}),E=e(""),O=e(!1),X=e(!1);function R(Se){if(!Se)return"";const we=String(Se),Ae=we.length;if(Ae<=4)return we[0]+"*".repeat(Ae-1);const Re=Ae<=8?2:4;return we.slice(0,Re)+"*".repeat(Ae-Re-Re)+we.slice(-Re)}async function q(Se){let we;try{we=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Re=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:we,target:Se})})).json();if(Re.success)return Re.secret;ElementPlus.ElMessage.error(Re.message||"查看失败")}catch(Ae){ElementPlus.ElMessage.error("查看失败: "+Ae.message)}return null}async function I(Se){if(Se._revealed){Se._revealed=!1,Se._masked=R(Se.api_key);return}const we=await q("ai:"+Se.vendor_key);we!==null&&(Se.api_key=we,Se._revealed=!0)}async function V(Se){if(Se._editing){Se._editing=!1,Se._revealed=!1,Se.api_key&&(Se._masked=R(Se.api_key));return}Se._editing=!0;try{const Ae=await(await fetch("/api/ai/models?full=1")).json();if(Ae.success){const Re=(Ae.data.vendors||[]).find(Xe=>Xe.vendor_key===Se.vendor_key);Re&&(Se.api_key=Re.api_key||"")}else Ae.message&&ElementPlus.ElMessage.error(String(Ae.message))}catch(we){ElementPlus.ElMessage.error("解锁失败: "+we.message)}}function se(Se){const{_fetching:we,_testing:Ae,_revealed:Re,_masked:Xe,_editing:Ze,...tt}=Se;return Ze||(tt.api_key=""),tt.models=(Se.models||[]).map(xt=>{const{_testing:St,testResult:pt,...zt}=xt;return zt}),tt}async function Y(){var Se;try{E.value="";const we=await fetch("/api/ai/models");if(we.status===401){E.value="请先登录后再查看模型配置";return}if(!we.ok){E.value=`服务器错误 (${we.status})`;return}const Ae=await we.json();Ae.success?(l.value=(((Se=Ae.data)==null?void 0:Se.vendors)||[]).map(Re=>({...Re,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Re.api_key||"",models:(Re.models||[]).map(Xe=>({...Xe,_testing:!1,testResult:void 0}))})),E.value=""):E.value=Ae.message||"加载失败"}catch(we){E.value="网络错误: "+we.message}}async function ee(){try{const we=await(await fetch("/api/ai/catalog")).json();we.success&&we.data&&(x.value=we.data)}catch(Se){console.warn("AI 厂商目录加载失败",Se)}}async function j(){X.value=!0;try{const Ae=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:l.value.map(se)})})).json();Ae.success?(l.value.forEach(Re=>{Re._editing=!1,Re._revealed=!1,Re.api_key&&(Re._masked=R(Re.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ae.message||"保存失败")}catch(Se){ElementPlus.ElMessage.error("保存失败: "+Se.message)}X.value=!1}async function H(Se,we){we._testing=!0;try{const Re=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,model:we.name,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})});we.testResult=await Re.json()}catch(Ae){we.testResult={success:!1,message:Ae.message}}we._testing=!1}async function N(){O.value=!0;for(const Se of l.value)for(const we of Se.models||[])Se.api_key?await H(Se,we):we.testResult={success:!1,message:"未配置 API Key"};O.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function k(Se){Se._fetching=!0;try{const Re=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})})).json();if(Re.success&&Array.isArray(Re.models)){const Xe=new Set((Se.models||[]).map(Ze=>Ze.name));for(const Ze of Re.models)Xe.has(Ze)||Se.models.push({name:Ze,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Re.models.length} 个模型`)}else ElementPlus.ElMessage.error(Re.message||"获取模型列表失败")}catch(we){ElementPlus.ElMessage.error("获取模型列表失败: "+we.message)}Se._fetching=!1}function D(Se){const we=(x.value.vendors||[]).find(Ae=>Ae.vendor_key===Se);if(we){if(l.value.some(Ae=>Ae.vendor_key===Se)){ElementPlus.ElMessage.warning("该厂商已存在");return}l.value.push({vendor_key:we.vendor_key,name:we.name,kind:we.kind,base_url:we.base_url,api_key:"",timeout:60,tier:we.tier||"",website:we.website||"",locked:!!we.locked,models:(we.models||[]).map(Ae=>({name:Ae,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${we.name}」，配置 API Key 后保存生效`)}}function ce(){l.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function U(Se){Se.models||(Se.models=[]),Se.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function y(Se,we){const Ae=Se.models[we];if(!(!Ae||Ae.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ae.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}Se.models.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function o(Se){if(Se.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(Se.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const we=l.value.indexOf(Se);we>=0&&l.value.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const T=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),m=e(!1),W=e(""),ue=e(0),Z=e(""),P=e(!1),G=e(""),re=e(!1),pe=e(0),de=e(0),J=e(""),oe=e({}),Pe=e({}),ke=e({}),_e=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),te=e("manual"),xe=f(()=>{const Se={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return Se[_e.value.provider]||Se.custom}),De={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function ne(Se){if(Se==="manual")return;const we=De[Se];we&&(_e.value.endpoint=we.endpoint,_e.value.model=we.model,t.value=!0)}function ae(){if(t.value=!0,_e.value.provider!=="codingplan"&&_e.value.provider!=="custom"){const Se=xe.value;Se&&(_e.value.endpoint=Se.endpoint,_e.value.model=Se.model)}else _e.value.provider==="codingplan"&&(_e.value.endpoint||(_e.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),_e.value.model||(_e.value.model="ark-code-latest"))}let he=null;const Ne=8;async function Ie(){he&&(he.abort(),he=null);const we=(d.value||[]).filter(tt=>tt.status==="new"||tt.status==="out").filter(tt=>!_.value[tt.code]);if(we.length===0)return;const Ae=new AbortController;he=Ae;let Re=0;const Xe=async()=>{for(;Re<we.length;){const tt=we[Re++];try{const St=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:tt.code,stock_name:tt.name,event_type:tt.status==="new"?"enter":"exit"}),signal:Ae.signal})).json();St.success&&St.signal&&(_.value={..._.value,[tt.code]:St.signal})}catch(xt){if(xt.name==="AbortError")return}}},Ze=Array.from({length:Math.min(Ne,we.length)},()=>Xe());await Promise.all(Ze)}function Ue(){he&&(he.abort(),he=null)}let Ge=0;async function ht(Se){const we=++Ge;try{const Re=await(await fetch(`/api/ai/history/last/${encodeURIComponent(Se)}`)).json();if(we!==Ge)return;Re.success&&Re.data&&(p.value=Re.data,A.value=Re.data.evaluate_time,st(Se,Re.data),Rt(Re.data))}catch{}}async function st(Se,we){var Ae,Re;try{const Ze=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(Se)}&limit=2`)).json();if(Ze.success&&Ze.data&&Ze.data.length>=2){const tt=Ze.data[1],xt=((Ae=we.result)==null?void 0:Ae.total_score)||0,St=((Re=tt.result)==null?void 0:Re.total_score)||0;xt>0&&St>0&&(g.value={prevScore:St,currScore:xt,diff:xt-St})}}catch(Xe){console.warn("[refreshStrategyData] autoPoll failed:",Xe)}}function Rt(Se){var Xe;const we=((Xe=Se.result)==null?void 0:Xe.dimensions)||{},Ae=[],Re=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Ze of Re){const tt=we[Ze.key];tt!==void 0&&Ae.push({icon:tt>=Ze.good?"check-circle-2":tt>=Ze.warn?"alert-triangle":"x-circle",label:`${Ze.label} ${Math.round(tt)}分`})}r.value=Ae}return{aiResult:p,lastEvalTime:A,evalHistoryComparison:g,checklistItems:r,aiHistory:w,selectedHistoryIds:i,expandedDates:S,expandedMonths:b,expandedStocks:M,poolSignals:_,toggleMonthExpand:z,aiHistoryView:F,selectedWatchlistCodes:C,showAutoEvaluateSettings:c,savingConfig:n,autoEvaluateScope:u,aiVendors:l,aiCatalog:x,aiModelsError:E,testingAllModels:O,savingAiModels:X,loadAiVendors:Y,loadAiCatalog:ee,saveAiVendors:j,saveAiModels:j,testVendorModel:H,testAllVendorModels:N,fetchVendorModels:k,addVendorFromCatalog:D,addCustomVendor:ce,addVendorModel:U,removeVendorModel:y,removeVendor:o,toggleVendorKeyReveal:I,toggleVendorEdit:V,autoEvaluateConfig:T,aiLoading:m,aiEvalStage:W,aiEvalElapsed:ue,aiEvalError:Z,showBatchEvaluate:P,batchStocks:G,batchRunning:re,batchTotal:pe,batchCompleted:de,batchCurrent:J,batchStatuses:oe,batchResults:Pe,batchEvalErrors:ke,aiConfig:_e,selectedPreset:te,providerInfo:xe,aiPresets:De,applyPreset:ne,onProviderChange:ae,fetchPoolSignals:Ie,cancelPoolSignals:Ue,loadLastEvaluation:ht}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:f,watch:t}=Vue,{configChanged:d,aiConfig:p,aiLoading:A,feishuConfig:g,currentTheme:r,changeTheme:w,autoEvaluateConfig:i,currentUser:S,strategyFilter:b,applyTheme:M,dashboardData:_,lastRefreshTime:z,saveAiModels:F}=a,C=e(!1),c=e(!1),n=e(null),u=e(null),l=e(null),x=e(null),E=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),O=e("disconnected"),X=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),R=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),q=e(!1),I=e(null),V=e(null),se=e("pending"),Y=e("..."),ee=e(!1),j=e({api_limit:600}),H=e(!1),N=e(!1);async function k(){try{const ae=await(await fetch("/api/system/rate-limit")).json();ae.success&&(j.value=ae.data)}catch(ne){console.warn("loadRateLimit failed:",ne)}}async function D(){N.value=!0;try{const ae=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j.value)})).json();ae.success?(H.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(ae.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{N.value=!1}}t(()=>[p.value.provider,p.value.apiKey,p.value.endpoint,p.value.model],()=>{d.value=!0},{deep:!0});async function ce(){C.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(p.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p.value)})).json()).success?(d.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ne){localStorage.setItem("quant_ai_config",JSON.stringify(p.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ne)}finally{C.value=!1}}async function U(){A.value=!0;try{const ae=await(await fetch("/api/ai/test")).json();ae.success?ElementPlus.ElMessage.success(ae.message||"API连接正常"):ElementPlus.ElMessage.error(ae.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{A.value=!1}}function y(){const ne={ai:p.value,feishu:g.value,theme:r.value,export_time:new Date().toISOString()},ae=new Blob([JSON.stringify(ne,null,2)],{type:"application/json"}),he=URL.createObjectURL(ae),Ne=document.createElement("a");Ne.href=he,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(he),ElementPlus.ElMessage.success("配置已导出")}function o(ne){const ae=ne.target.files[0];if(!ae)return;const he=new FileReader;he.onload=async Ne=>{try{const Ie=JSON.parse(Ne.target.result);Ie.ai&&(p.value={...p.value,...Ie.ai},await ce()),Ie.feishu&&(Object.assign(g.value,Ie.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ie.feishu)})),Ie.theme&&(r.value=Ie.theme,w(Ie.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},he.readAsText(ae),ne.target.value=""}async function T(){C.value=!0;const ne=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:E.value,feishu:g.value,ai:p.value,rate_limit:j.value,auto_evaluate:i.value,theme:r.value}})}).then(Ie=>["userConfig",Ie.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E.value)}).then(Ie=>["tushare",Ie.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:X.value})}).then(Ie=>["datasource",Ie.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g.value)}).then(Ie=>["feishu",Ie.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p.value)}).then(Ie=>["ai",Ie.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j.value)}).then(Ie=>["rateLimit",Ie.ok]),F().then(()=>["aiModels",!0],()=>["aiModels",!1])],ae=await Promise.allSettled(ne),he=ae.filter(Ie=>Ie.status==="fulfilled"&&Ie.value[1]).length,Ne=ae.filter(Ie=>Ie.status==="rejected"||Ie.status==="fulfilled"&&!Ie.value[1]).length;H.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(b.value.selected)),localStorage.setItem("quant_strategy_filter_mode",b.value.mode),S.value&&fetch(`/api/users/${S.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:r.value})}).catch(()=>{}),c.value=!1,n.value=new Date().toLocaleString("zh-CN"),C.value=!1,Ne>0&&console.error(`[saveAllConfig] ${he}/${he+Ne} 项保存成功，${Ne} 项失败`)}async function m(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const he=ae.config;he.tushare&&(E.value={...E.value,...he.tushare}),he.feishu&&(g.value={...g.value,...he.feishu}),he.ai&&(p.value={...p.value,...he.ai}),he.rate_limit&&(j.value={...j.value,...he.rate_limit}),he.auto_evaluate&&(i.value={...i.value,...he.auto_evaluate}),he.theme&&!localStorage.getItem("quant_theme")&&M(he.theme)}c.value=!1,H.value=!1}catch(ne){console.error("[resetAllConfig] 重新加载配置失败:",ne),c.value=!1}}async function W(){O.value="testing";try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(O.value=ae.success?"connected":"disconnected",ae.success){const he=ae.data_count?` (获取到 ${ae.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+he)}else ElementPlus.ElMessage.error(ae.message||"连接失败")}catch{O.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function ue(){try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();O.value=ae.success?"connected":"disconnected"}catch{O.value="disconnected"}}async function Z(){var ne;q.value=!0;try{const he=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();he.success?(I.value=parseInt(((ne=he.message.match(/\d+/))==null?void 0:ne[0])||"0"),ElementPlus.ElMessage.success(he.message)):ElementPlus.ElMessage.error(he.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{q.value=!1}}async function P(){try{const ae=await(await fetch("/api/market/tushare/config")).json();ae.success&&ae.config&&(E.value={...E.value,...ae.config})}catch(ne){console.warn("loadTushareConfig failed:",ne)}}function G(ne){if(!ne)return"";const ae=String(ne),he=ae.length;if(he<=4)return ae[0]+"*".repeat(he-1);const Ne=he<=8?2:4;return ae.slice(0,Ne)+"*".repeat(he-Ne-Ne)+ae.slice(-Ne)}async function re(ne){let ae;try{ae=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ae,target:ne})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(he){ElementPlus.ElMessage.error("查看失败: "+he.message)}return null}async function pe(ne){const ae=X.value[ne];if(!ae)return;if(ae._revealed){ae._revealed=!1,ae._masked=G(ae.token);return}const he=await re(ne);he!==null&&(ae.token=he,ae._revealed=!0)}async function de(ne){const ae=X.value[ne];if(ae){if(ae._editing){ae._editing=!1,ae._revealed=!1,ae.token&&(ae._masked=G(ae.token));return}ae._editing=!0;try{const he=await re(ne);if(he===null){ae._editing=!1;return}ae.token=he,ae._revealed=!0}catch(he){ae._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+he.message)}}}async function J(){try{const ae=await(await fetch("/api/market/datasource/config")).json();if(ae.success&&ae.config&&ae.config.sources){const he=ae.config.sources,Ne=Ie=>{const Ue={...X.value[Ie],...he[Ie]||{}};return Ue._editing=!1,Ue._revealed=!1,Ue._masked=Ue.token||"",Ue.token="",Ue};X.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...X.value.akshare,...he.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[Ie,Ue]of Object.entries(Ne.status))R.value[Ie]=Ue.connected?"connected":"disconnected"}catch{}}catch(ne){console.warn("loadDatasourceConfig failed:",ne)}}async function oe(){try{const ne={};for(const[ae,he]of Object.entries(X.value)){const{_revealed:Ne,_masked:Ie,_editing:Ue,...Ge}=he;!Ue&&ae!=="akshare"&&(Ge.token=""),ne[ae]=Ge}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ne})}),c.value=!0}catch(ne){console.warn("saveDatasourceConfig failed:",ne)}}async function Pe(ne){R.value[ne]="testing";try{const ae=X.value[ne];ae&&ae._editing&&await oe();const Ne=await(await fetch(`/api/market/datasource/test/${ne}`,{method:"POST"})).json();R.value[ne]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${ne} 连接成功`):ElementPlus.ElMessage.error(`${ne}: ${Ne.message}`)}catch{R.value[ne]="disconnected",ElementPlus.ElMessage.error(`${ne} 连接失败`)}}async function ke(){try{const ae=await(await fetch("/api/feishu/config")).json();ae&&typeof ae=="object"&&(g.value={...g.value,...ae},u.value=JSON.parse(JSON.stringify(g.value)))}catch(ne){console.warn("loadFeishuConfig failed:",ne)}}async function _e(){try{const ae=await(await fetch("/api/ai/config")).json();if(ae.success&&ae.data)p.value={...p.value,...ae.data};else{const he=localStorage.getItem("quant_ai_config");he&&(p.value=JSON.parse(he))}}catch{const ae=localStorage.getItem("quant_ai_config");ae&&(p.value=JSON.parse(ae))}}async function te(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const he=ae.config;he.tushare&&(E.value={...E.value,...he.tushare}),he.datasource&&he.datasource.sources&&(X.value={sxsc_tushare:{...X.value.sxsc_tushare,...he.datasource.sources.sxsc_tushare||{}},tushare:{...X.value.tushare,...he.datasource.sources.tushare||{}},akshare:{...X.value.akshare,...he.datasource.sources.akshare||{}}}),he.feishu&&(g.value={...g.value,...he.feishu},u.value=JSON.parse(JSON.stringify(g.value))),he.ai&&(p.value={...p.value,...he.ai}),he.rate_limit&&(j.value={...j.value,...he.rate_limit}),he.theme&&!localStorage.getItem("quant_theme")&&M(he.theme),he.auto_evaluate&&(i.value={...i.value,...he.auto_evaluate})}}catch(ne){console.warn("加载用户配置失败，使用本地缓存",ne)}}async function xe(){var ne,ae,he,Ne;try{const Ue=await(await fetch("/api/dashboard")).json(),Ge=Ue.success?Ue.data:Ue;I.value=((ne=Ge==null?void 0:Ge.stats)==null?void 0:ne.total_stocks_covered)||null;const st=await(await fetch("/api/dates")).json();V.value=((ae=st==null?void 0:st.data)==null?void 0:ae.total)||((Ne=(he=st==null?void 0:st.data)==null?void 0:he.dates)==null?void 0:Ne.length)||null;const Se=await(await fetch("/api/ai/history")).json();se.value="ok"}catch{se.value="pending"}}async function De(){try{const ae=await(await fetch("/api/dashboard")).json();_.value=ae.success?ae.data:ae,z.value=Date.now()}catch(ne){console.error("加载总览数据失败",ne)}}return{configSaving:C,configChanged:d,globalConfigDirty:c,lastSavedTime:n,feishuConfigOriginal:u,aiConfigOriginal:l,tushareConfigOriginal:x,tushareConfig:E,tushareStatus:O,datasourceConfig:X,datasourceStatus:R,syncingData:q,stockCount:I,tradeDateCount:V,aiStatus:se,appVersion:Y,showImportDialog:ee,rateLimitConfig:j,rateLimitDirty:H,rateLimitSaving:N,loadRateLimit:k,saveRateLimit:D,saveAiConfig:ce,testAiApi:U,exportConfig:y,importConfig:o,saveAllConfig:T,resetAllConfig:m,testTushareConnection:W,checkTushareConnection:ue,syncStockData:Z,loadTushareConfig:P,loadDatasourceConfig:J,saveDatasourceConfig:oe,testDatasource:Pe,toggleDatasourceKeyReveal:pe,toggleDatasourceEdit:de,loadFeishuConfig:ke,loadAiConfig:_e,loadUserConfig:te,loadSystemStatus:xe,loadDashboardData:De}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:f}=Vue,{currentUser:t,applyTheme:d,allMenuDefs:p,loadGroupConfig:A}=a,g=e([]),r=e(""),w=e(""),i=e("users"),S=e({}),b=e({}),M=f(()=>{let te=g.value;if(w.value&&(te=te.filter(De=>(De.group||De.role)===w.value)),!r.value)return te;const xe=r.value.toLowerCase();return te.filter(De=>De.username.toLowerCase().includes(xe))});function _(te){S.value={...S.value,[te]:!S.value[te]}}async function z(te,xe){try{const ne=await(await fetch("/api/groups/"+xe+"/members/"+te,{method:"DELETE"})).json();ne.success?(await de(),await re()):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function F(te){const xe=b.value[te];if(xe)try{const ne=await(await fetch("/api/groups/"+te+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:xe})})).json();ne.success?(await de(),await re(),b.value={...b.value,[te]:""}):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function C(te,xe){try{const ne=await(await fetch("/api/users/"+te.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:xe})})).json();ne.success?await de():ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const c=e(!1),n=e(null),u=e({username:"",password:"",role:"user",theme:"tech-blue"}),l=e(!1),x=e(null),E=e(!1),O=e(!1),X=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),R=e({}),q=e(!1),I=e({group_id:"",name:"",description:""}),V=e(!1),se=e([]),Y=e(""),ee=e(""),j=e({});function H(te){j.value={...j.value,[te]:!j.value[te]}}function N(te){return!g.value||!g.value.length?0:g.value.filter(xe=>(xe.group||xe.role)===te).length}function k(te){const xe=(te==null?void 0:te.visible_menus)||{};return Object.values(xe).filter(Boolean).length}const D=f(()=>Object.keys(G.value).length);async function ce(te){ee.value=te,O.value=!0,await U(te)}async function U(te){try{const De=await(await fetch("/api/groups/"+te+"/members")).json();De.success&&(se.value=De.members||[])}catch(xe){se.value=[],console.error("[loadGroupMembers]",xe)}}async function y(){if(!(!Y.value||!ee.value)){V.value=!0;try{const xe=await(await fetch("/api/groups/"+ee.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:Y.value})})).json();xe.success?(await U(ee.value),await de(),Y.value=""):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{V.value=!1}}}async function o(te){try{const De=await(await fetch("/api/groups/"+ee.value+"/members/"+te,{method:"DELETE"})).json();De.success?(await U(ee.value),await de()):ElementPlus.ElMessage.error(De.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const T=f(()=>{if(!g.value)return[];const te=new Set(se.value.map(xe=>xe.username));return g.value.filter(xe=>xe.username!=="admin"&&xe.username!=="guest"&&!te.has(xe.username))});function m(te){const xe=X.value.visible_menus[te],De=p.find(ne=>ne.key===te);if(De)if(xe){const ne=R.value[te]||{};De.subPages.forEach(ae=>{const he=te+"."+ae;X.value.visible_sub_pages[he]=ne[ae]!==void 0?ne[ae]:!0})}else{const ne={};De.subPages.forEach(ae=>{const he=te+"."+ae;ne[ae]=X.value.visible_sub_pages[he],X.value.visible_sub_pages[he]=!1}),R.value[te]=ne}}function W(te){x.value=te;const xe=G.value[te]||{};X.value={name:xe.name||te,description:xe.description||"",visible_menus:{...xe.visible_menus||{}},visible_sub_pages:{...xe.visible_sub_pages||{}}},R.value={},p.forEach(De=>{const ne={};De.subPages.forEach(ae=>{ne[ae]=X.value.visible_sub_pages[De.key+"."+ae]}),R.value[De.key]=ne}),E.value=!0}async function ue(){V.value=!0;try{const xe=await(await fetch("/api/groups/"+x.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(X.value)})).json();xe.success?(E.value=!1,x.value=null,await re(),await A()):ElementPlus.ElMessage.error(xe.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{V.value=!1}}async function Z(te){var xe;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((xe=G.value[te])==null?void 0:xe.name)||te)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const ae=await(await fetch("/api/groups/"+te,{method:"DELETE"})).json();ae.success?await re():ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function P(){if(I.value.group_id){V.value=!0;try{const xe=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)})).json();xe.success?(q.value=!1,I.value={group_id:"",name:"",description:""},await re()):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{V.value=!1}}}const G=e({});async function re(){try{if(!localStorage.getItem("quant_token"))return;const xe=await fetch("/api/groups");if(xe.ok){const De=await xe.json();G.value=De.groups||{}}}catch(te){console.warn("loadAllGroups:",te)}}function pe(te){var xe;return((xe=G.value[te])==null?void 0:xe.name)||te||"--"}async function de(){try{if(!localStorage.getItem("quant_token")){g.value=[];return}const xe=await fetch("/api/users");if(xe.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const De=await xe.json();g.value=De.users||[]}catch(te){g.value=[],console.error("[loadUsers] error:",te)}}function J(te){n.value=te,u.value={username:te.username,password:"",role:te.role,theme:te.theme||"tech-blue",group:te.group||te.role},c.value=!0}async function oe(){if(u.value.username){l.value=!0;try{const te=n.value?"PUT":"POST",xe=n.value?`/api/users/${u.value.username}`:"/api/users",ne=await(await fetch(xe,{method:te,headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)})).json();if(ne.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&u.value.username===t.value.username){const ae=u.value.theme;ae&&ae!==t.value.theme&&(t.value.theme=ae,localStorage.setItem("quant_user",JSON.stringify(t.value)),d(ae))}c.value=!1,n.value=null,await de()}else ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{l.value=!1}}}async function Pe(te){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${te}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await de())}catch(xe){console.error("[deleteUser]",xe)}}async function ke(te){try{const De=await(await fetch(`/api/users/${te.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:te.enabled})})).json();De.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(De.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function _e(te){try{const{value:xe}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${te.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(xe){const ne=await(await fetch(`/api/users/${te.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:xe})})).json();ne.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ne.message||"重置失败")}}catch{}}return{userList:g,userSearch:r,groupFilter:w,userPageTab:i,expandedGroups:S,addMemberGroupMap:b,filteredUsers:M,toggleGroupExpand:_,removeMemberFromGroupInline:z,addMemberToGroupInline:F,changeUserGroup:C,showAddUser:c,editingUser:n,userForm:u,savingUser:l,editingGroup:x,menuConfigDialog:E,memberDialog:O,groupEditForm:X,subPageCache:R,showAddGroup:q,addGroupForm:I,savingGroup:V,groupMembers:se,addMemberUsername:Y,selectedMemberGroup:ee,subPageSectionExpanded:j,toggleSubPageSection:H,getGroupMemberCount:N,getMenuEnabledCount:k,groupCount:D,openMemberManager:ce,loadGroupMembers:U,addMemberToGroup:y,removeMemberFromGroup:o,availableUsersForGroup:T,onParentToggle:m,openMenuConfig:W,saveMenuConfig:ue,deleteGroupConfig:Z,createGroup:P,allGroups:G,getGroupName:pe,loadAllGroups:re,loadUsers:de,editUser:J,saveUser:oe,deleteUser:Pe,toggleUserEnabled:ke,resetUserPassword:_e}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:f}=Vue,{stockKlineLoaded:t,stockDetailVisible:d,stockDetailTab:p,stockDetail:A,disposeStockKline:g}=a,r=e([]),w=e(!1),i=e(!1),S=e("date"),b=e([]),M=e([]),_=e([]),z=e([]),F=f(()=>{var o,T;const y=[];for(const m of r.value){if(!m||m.id==null)continue;const W=m.stock_name||m.stock_code||"",ue=Array.isArray(m.messages)?m.messages:[];y.push({id:m.id,stock_code:m.stock_code,stock_name:W,first_msg:m.first_msg||((T=(o=ue[0])==null?void 0:o.content)==null?void 0:T.substring(0,50))||"",msg_count:m.msg_count||ue.length||0,created_at:m.created_at,date:(m.created_at||"").substring(0,10),month:(m.created_at||"").substring(0,7),messages:ue})}return y}),C=f(()=>{const y={};for(const T of F.value){const m=T.date||"未知";y[m]||(y[m]=[]),y[m].push(T)}const o={};return Object.keys(y).sort((T,m)=>m.localeCompare(T)).forEach(T=>o[T]=y[T]),o}),c=f(()=>{const y={};for(const T of F.value){const m=T.month||"未知";y[m]||(y[m]=[]),y[m].push(T)}const o={};return Object.keys(y).sort((T,m)=>m.localeCompare(T)).forEach(T=>o[T]=y[T]),o}),n=f(()=>{const y={};for(const o of F.value){const T=`${o.stock_name}(${o.stock_code})`;y[T]||(y[T]=[]),y[T].push(o)}return y});function u(y){const o=b.value.indexOf(y);o>=0?b.value.splice(o,1):b.value.push(y)}function l(y){const o=C.value[y]||[];if(o.every(m=>b.value.includes(m.id)))b.value=b.value.filter(m=>!o.some(W=>W.id===m));else for(const m of o)b.value.includes(m.id)||b.value.push(m.id)}function x(y){const o=c.value[y]||[];if(o.every(m=>b.value.includes(m.id)))b.value=b.value.filter(m=>!o.some(W=>W.id===m));else for(const m of o)b.value.includes(m.id)||b.value.push(m.id)}function E(y){const o=n.value[y]||[];if(o.every(m=>b.value.includes(m.id)))b.value=b.value.filter(m=>!o.some(W=>W.id===m));else for(const m of o)b.value.includes(m.id)||b.value.push(m.id)}function O(y){const o=M.value.indexOf(y);o>=0?M.value.splice(o,1):M.value.push(y)}function X(y){const o=_.value.indexOf(y);o>=0?_.value.splice(o,1):_.value.push(y)}function R(y){const o=z.value.indexOf(y);o>=0?z.value.splice(o,1):z.value.push(y)}function q(){b.value.length===F.value.length?b.value=[]:b.value=F.value.map(y=>y.id)}async function I(){if(b.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${b.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const y of[...b.value])await ce(y);b.value=[]}}const V={};async function se(y){A.value={stock:y.stock_code,name:y.stock_name},d.value=!0,p.value="chat",t.value=!1,g(),j.value=!0,H.value="",ee.value=[];try{let o=V[y.id];if(!o){const T=await fetch("/api/ai/chat/history/"+y.id);if(!T.ok)throw new Error("load history failed");o=(await T.json()).messages||[],V[y.id]=o}ee.value=o.map(T=>({role:T.role,content:T.content}))}catch{H.value="历史消息加载失败，请重试"}finally{j.value=!1}}const Y=e(""),ee=e([]),j=e(!1),H=e("");async function N(){var T;const y=Y.value.trim();if(!y||j.value)return;H.value="",ee.value.push({role:"user",content:y}),Y.value="",j.value=!0;const o=ee.value.length;ee.value.push({role:"assistant",content:""});try{const ue=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((T=A.value)==null?void 0:T.stock)||"",message:y})})).body.getReader(),Z=new TextDecoder;let P="";for(;;){const{done:G,value:re}=await ue.read();if(G)break;P+=Z.decode(re,{stream:!0});const pe=P.split(`
`);P=pe.pop()||"";for(const de of pe)if(de.startsWith("data: "))try{const J=JSON.parse(de.slice(6));J.token?ee.value[o].content+=J.token:J.done?console.log("Stream done:",J.session_id):J.error&&(H.value=J.error)}catch(J){console.warn("SSE parse error:",J)}}}catch(m){ee.value[o].content||(ee.value[o].content="网络错误: "+m.message)}j.value=!1}async function k(y){var T;H.value="",j.value=!0;const o={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};ee.value.push({role:"user",content:o[y]||o.comprehensive});try{const W=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((T=A.value)==null?void 0:T.stock)||"",mode:y})});if(W.ok){const ue=await W.json();ee.value.push({role:"assistant",content:ue.reply||"无回复"})}}catch(m){H.value="网络错误: "+m.message}j.value=!1}async function D(){w.value=!0,i.value=!1;try{const y=await fetch("/api/ai/chat/history?view=date");if(y.ok){const o=await y.json(),T=[];for(const m of o)for(const W of m.items||[])T.push(W);r.value=T}else i.value=!0}catch(y){console.error(y),i.value=!0}finally{w.value=!1}}async function ce(y){try{await fetch("/api/ai/chat/history/"+y,{method:"DELETE"}),r.value=r.value.filter(o=>o.id!==y)}catch(o){console.error("deleteChatSession:",o)}}function U(y){if(!y)return"";const o=String(y).split(`
`),T=[],m=[];let W=0;for(;W<o.length;){if(/^\s*\|.*\|\s*$/.test(o[W])){let Z=W;const P=[];for(;Z<o.length&&/^\s*\|.*\|\s*$/.test(o[Z]);)P.push(o[Z]),Z++;const G=de=>de.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(J=>J.trim()),re=P.map(G);if(re.length>1&&re[1].every(de=>/^:?-{3,}:?$/.test(de))){const de=Math.max(...re.map(ke=>ke.length)),J=re[0].slice(0,de),oe=re.slice(2);let Pe="<table>";oe.length?(Pe+="<thead><tr>"+J.map(ke=>"<th>"+ke+"</th>").join("")+"</tr></thead>",Pe+="<tbody>"+oe.map(ke=>"<tr>"+ke.slice(0,de).map(_e=>"<td>"+_e+"</td>").join("")+"</tr>").join("")+"</tbody>"):Pe+="<tbody><tr>"+J.map(ke=>"<td>"+ke+"</td>").join("")+"</tr></tbody>",Pe+="</table>",T.push(Pe),m.push("\0T"+(T.length-1)+"\0"),W=Z;continue}for(;W<Z;)m.push(o[W]),W++;continue}m.push(o[W]),W++}let ue=m.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return T.forEach((Z,P)=>{ue=ue.split("\0T"+P+"\0").join(Z)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ue=window.__quantModules.core.sanitizeHtml(ue)),ue}return{chatSessions:r,chatHistoryView:S,selectedChatIds:b,expandedChatDates:M,expandedChatMonths:_,expandedChatStocks:z,chatHistoryLoading:w,chatHistoryError:i,allChatSessionsFlat:F,chatGroupedByDate:C,chatGroupedByMonth:c,chatGroupedByStock:n,toggleSelectChat:u,toggleSelectChatDate:l,toggleSelectChatMonth:x,toggleSelectChatStock:E,toggleChatDateExpand:O,toggleChatMonthExpand:X,toggleChatStockExpand:R,selectAllChatSessions:q,deleteSelectedChatSessions:I,viewChatSession:se,loadChatHistory:D,deleteChatSession:ce,renderMarkdown:U,stockChatInput:Y,stockChatMessages:ee,stockChatLoading:j,stockChatError:H,askStockSend:N,askStockQuick:k}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:f,watch:t}=Vue,{consensus:d,currentPage:p,currentSubPage:A,dashboardData:g,searchKeyword:r,statusFilter:w,strategyFilter:i,strategyFilterCounts:S}=a;function b(R){const q=i.value.selected;if(!q||q.length===0)return R;const I=i.value.mode;return R.filter(V=>{const se=V.strategy_names||V.strategies||[];return I==="union"?q.some(Y=>se.includes(Y)):q.every(Y=>se.includes(Y))})}const M=f(()=>{const R=b(d.value||[]);return{all:R.length,newCount:R.filter(q=>q.status==="new").length,current:R.filter(q=>q.status==="current").length,out:R.filter(q=>q.status==="out").length}}),_=f(()=>{let R=d.value||[];if(w.value!=="all"&&(R=R.filter(q=>q.status===w.value)),R=b(R),r.value){const q=r.value.toLowerCase();R=R.filter(I=>I.code.toLowerCase().includes(q)||I.name&&I.name.toLowerCase().includes(q))}return R}),z=f(()=>{const R=d.value||[],q={},I={};for(const V of R)V.code&&V.name&&(I[V.code]=V.name);for(const V of R){const se=V.strategy_names||V.strategies||[];for(const Y of se)q[Y]||(q[Y]={strategy:Y,count:0,codes:[],names:[]}),q[Y].count++,q[Y].codes.includes(V.code)||(q[Y].codes.push(V.code),q[Y].names.push({code:V.code,name:I[V.code]||V.code}))}return Object.values(q).sort((V,se)=>se.count-V.count)}),F=f(()=>{const R=i.value.selected,q=i.value.mode,I={};for(const[V,se]of Object.entries(S.value)){const Y=se||[];!R||R.length===0?I[V]=Y.length:q==="union"?I[V]=Y.filter(ee=>ee.strategies&&R.some(j=>ee.strategies.includes(j))).length:I[V]=Y.filter(ee=>ee.strategies&&R.every(j=>ee.strategies.includes(j))).length}return I});function C(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(i.value.selected)),localStorage.setItem("quant_strategy_filter_mode",i.value.mode)}const c=f(()=>{const R=(g.value||{}).consensus_rank||[];return b(R)}),n=f(()=>{const R=d.value||S.value.day||[];return b(R).length}),u=f(()=>{const R=(g.value||{}).strategy_counts||[],q=d.value||S.value.day||[];if(q.length===0)return R;const I=b(q),V={};I.forEach(Y=>{(Y.strategy_names||Y.strategies||[]).forEach(j=>{V[j]=(V[j]||0)+1})});const se=I.length||1;return R.map(Y=>{const ee=Y.strategy_name||Y.strategy_id,j=V[ee]||0;return{...Y,count:j,percentage:Math.round(j/se*1e3)/10}})}),l=f(()=>{const R=(g.value||{}).pool_changes||{},q=(R.new_count||0)-(R.out_count||0);return q>0?{dir:"up",text:"↑"+q}:q<0?{dir:"down",text:"↓"+Math.abs(q)}:{dir:"flat",text:"→0"}}),x=f(()=>{const R=(g.value||{}).time_coverage||{},q=new Date(R.start_date),I=new Date(R.end_date),V=new Date;if(!q.getTime()||!I.getTime()||V>=I)return 100;if(V<=q)return 0;const se=I-q,Y=V-q;return Math.round(Y/se*100)}),E=e(null),O=f(()=>{if(!E.value)return"";const R=Math.floor((Date.now()-E.value)/1e3);return R<60?R+"秒前刷新":R<3600?Math.floor(R/60)+"分钟前刷新":Math.floor(R/3600)+"小时前刷新"});function X(R){i.value.selected=[R],i.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([R])),localStorage.setItem("quant_strategy_filter_mode","union"),p.value="calendar",A.value="calendar"}return{applyStrategyFilter:b,statusCounts:M,stockPool:_,strategyDistribution:z,strategyPreviewCount:F,saveStrategyFilter:C,filteredConsensusRank:c,currentPoolSize:n,filteredStrategyCounts:u,poolChangeBadge:l,timeBarPercent:x,lastRefreshTime:E,timeSinceRefresh:O,navigateToStrategyFilter:X}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function f(d){return a[d]||"var(--text-tertiary)"}function t(d){return e[d]||"var(--bg-hover)"}window.__quantModules.watchlist={create(d){const{ref:p,computed:A,watch:g}=Vue,{currentUser:r,selectedDate:w,stockDetail:i,stockDetailTab:S,stockDetailVisible:b,stockDetailLoading:M,stockKlineLoaded:_,viewCache:z,animateScoreEntrance:F,loadStockKline:C,refreshStockScore:c,disposeStockKline:n,aiHistory:u,aiLoading:l,aiEvalStage:x,aiEvalElapsed:E,aiEvalError:O,aiResult:X,loadLastEvaluation:R,autoEvaluateConfig:q,autoEvaluateScope:I,batchStocks:V,batchRunning:se,batchTotal:Y,batchCompleted:ee,batchCurrent:j,batchStatuses:H,batchResults:N,batchEvalErrors:k,expandedDates:D,expandedStocks:ce,savingConfig:U,selectedHistoryIds:y,selectedWatchlistCodes:o,showAutoEvaluateSettings:T,showBatchEvaluate:m}=d,W=s=>(getComputedStyle(document.documentElement).getPropertyValue(s)||"").trim(),ue=p(""),Z=p("default"),P=p("default"),G=p([]),re=A(()=>new Set(G.value.map(s=>s.code))),pe=p(!1),de=p(!1),J=A(()=>{const s=[...G.value];return P.value==="name"?s.sort((K,ie)=>K.name.localeCompare(ie.name,"zh")):P.value==="added"?s.sort((K,ie)=>(ie.added_at||"").localeCompare(K.added_at||"")):P.value==="score"&&s.sort((K,ie)=>{const Ce=Pe(K.code);return Pe(ie.code)-Ce}),s});function oe(s){const K=u.value.filter(Ce=>Ce.stock_code===s);if(K.length===0)return null;const ie=K.reduce((Ce,qe)=>Ce.evaluate_time>qe.evaluate_time?Ce:qe);return{score:ie.result.total_score,color:f(ie.result.level),bg:t(ie.result.level)}}function Pe(s){const K=oe(s);return K?K.score:0}function ke(s){Te(s.code,s.name),ne.value=ne.value.filter(K=>K.code!==s.code),De.value=""}const _e=A(()=>new Set(u.value.map(s=>s.stock_code))),te=p(new Set);function xe(s){te.value.add(s)}const De=p(""),ne=p([]),ae=p(!1),he=p({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ne=p(!1),Ie=p(!1),Ue=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};Ue.REALTIME_WS_PATH;const Ge=Ue.REALTIME_DEGRADED_TEXT||"数据不可达",ht=Ue.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";Ue.WARN_RISE_SPEED_THRESHOLD!=null&&Ue.WARN_RISE_SPEED_THRESHOLD,Ue.WARN_VOLUME_RATIO_THRESHOLD!=null&&Ue.WARN_VOLUME_RATIO_THRESHOLD;const st=Ue.quoteFmt||{price:s=>s==null?"--":Number(s).toFixed(2),pct:s=>s==null?"--":Number(s).toFixed(2)+"%",num:s=>s==null?"--":Number(s).toFixed(2),color:s=>""},Rt=3,Se=5e3,we=p({}),Ae=p(!1),Re=p("idle");let Xe=null,Ze=null,tt=0;function xt(s){return Ue.checkQuoteWarning?Ue.checkQuoteWarning(s):null}function St(s){return xt(we.value[s])}function pt(s){return st.color(we.value[s])}function zt(s){return st.price(we.value[s]&&we.value[s].price)}function Kt(s){return st.pct(we.value[s]&&we.value[s].change_pct)}function Jt(s,K){return st.num(we.value[s]&&we.value[s][K])}function et(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function yt(){if(!Xe||Xe.readyState!==1)return;const s=(G.value||[]).map(K=>K.code);s.length!==0&&Xe.send(JSON.stringify({subscribe:s}))}function Wt(){if(Ze&&(clearTimeout(Ze),Ze=null),Xe){try{Xe.onopen=null,Xe.onmessage=null,Xe.onerror=null,Xe.onclose=null,Xe.close()}catch{}Xe=null}we.value={},Ae.value=!1,Re.value="idle"}function gt(){const s=et();if(!s||!Ue.buildRealtimeWsUrl||Re.value==="open"||Re.value==="connecting")return;let K;try{K=Ue.buildRealtimeWsUrl()+"?token="+encodeURIComponent(s)}catch{Re.value="offline",Ae.value=!0;return}Re.value="connecting";let ie=null;try{ie=new WebSocket(K)}catch{Re.value="offline",Ae.value=!0;return}Xe=ie,ie.onopen=function(){Re.value="open",tt=0,yt()},ie.onmessage=function(Ce){let qe=null;try{qe=JSON.parse(Ce.data||"{}")}catch{return}if(!qe||qe.type!=="quotes")return;if(Ae.value=!!qe.degraded,qe.degraded||!Array.isArray(qe.data)){we.value={};return}const Tt={};qe.data.forEach(function($e){$e&&$e.code&&(Tt[$e.code]=$e)}),we.value=Tt},ie.onerror=function(){Re.value="offline",Ae.value=!0},ie.onclose=function(){Re.value="offline",tt<Rt?(tt++,Ze=setTimeout(function(){Re.value!=="open"&&gt()},Se*tt)):Ae.value=!0}}g(G,function(){Re.value==="open"&&yt()}),et()&&setTimeout(gt,500);async function Ut(){if(!i.value)return;l.value=!0,X.value=null,O.value="",x.value="fetching",E.value=0;const s=Date.now(),K=setInterval(()=>{l.value&&(E.value=Math.round((Date.now()-s)/1e3))},500);try{const ie=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:i.value.stock,stock_name:i.value.name||i.value.stock,strategy:Z.value})});x.value="calculating";const Ce=await ie.json();x.value="analyzing",Ce.success?(await nextTick(),X.value=Ce.data,S.value="ai",Q()):(O.value=Ce.message||"评估失败",ElementPlus.ElMessage.error(O.value))}catch(ie){O.value=ie&&ie.message&&!String(ie.message).includes("Failed to fetch")?ie.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(O.value)}finally{clearInterval(K),l.value=!1,E.value=0,O.value?x.value="":(x.value="done",setTimeout(()=>{x.value==="done"&&(x.value="")},800))}}const _t=50,Je=p(0),At=p(!1),wt=A(()=>u.value.length<Je.value);async function Q(){pe.value=!0,de.value=!1;try{if(!localStorage.getItem("quant_token")){u.value=[];return}const K=await fetch(`/api/ai/history?limit=${_t}&offset=0`);if(K.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),r.value=null;return}const ie=await K.json();ie.success?(u.value=ie.data||[],Je.value=ie.total!=null?ie.total:u.value.length):de.value=!0}catch(s){console.error("[loadAiHistory] error:",s),de.value=!0}finally{pe.value=!1}}async function ge(){if(!(At.value||!wt.value)){At.value=!0;try{const K=await(await fetch(`/api/ai/history?limit=${_t}&offset=${u.value.length}`)).json();if(K.success&&Array.isArray(K.data)){const ie=new Set(u.value.map(qe=>qe.id)),Ce=K.data.filter(qe=>!ie.has(qe.id));u.value=u.value.concat(Ce),K.total!=null&&(Je.value=K.total)}}catch(s){console.warn("[loadMoreAiHistory] error:",s)}finally{At.value=!1}}}async function at(s){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ie=await(await fetch(`/api/ai/history/${s}`,{method:"DELETE"})).json();if(ie.success){ElementPlus.ElMessage.success("删除成功"),Q();const Ce=y.value.indexOf(s);Ce>=0&&y.value.splice(Ce,1)}else ElementPlus.ElMessage.error(ie.message||"删除失败")}catch{}}function kt(s){const K=y.value.indexOf(s);K>=0?y.value.splice(K,1):y.value.push(s)}function lt(){y.value=[]}function It(){o.value=[]}async function ea(){const s=y.value;if(s.length===0)return;const K=u.value.filter(ie=>s.includes(ie.id)).map(ie=>ie.stock_code);m.value=!0,V.value=[...new Set(K)].join(",")}async function aa(){const s=y.value;if(s.length===0)return;const K=u.value.filter(qe=>s.includes(qe.id)),ie=[...new Map(K.map(qe=>[qe.stock_code,qe])).values()];let Ce=0;for(const qe of ie)re.value.has(qe.stock_code)||(await Te(qe.stock_code,qe.stock_name||qe.stock_code),Ce++);Ce>0?ElementPlus.ElMessage.success(`已加入 ${Ce} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function na(){const s=y.value;if(s.length===0)return;const K=u.value.filter(Ce=>s.includes(Ce.id)),ie=[...new Map(K.map(Ce=>[Ce.stock_code,Ce])).values()];try{const qe=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ie.map(Tt=>({stock_code:Tt.stock_code,stock_name:Tt.stock_name||""}))})})).json();qe&&qe.success?ElementPlus.ElMessage.success(`已登记 ${qe.count||ie.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(qe&&qe.detail||"批量加入组合失败")}catch(Ce){console.warn("batchAddToPortfolio failed:",Ce),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function ta(){if(o.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${o.value.length} 只股票？`,"提示",{type:"warning"});for(const s of o.value)await Ve(s);o.value=[],ElementPlus.ElMessage.success("已移除")}catch(s){s&&s.message!=="cancel"&&console.warn("batchRemoveWatchlist:",s)}}function Qt(s){const K=o.value.indexOf(s);K>=0?o.value.splice(K,1):o.value.push(s)}function Ht(){y.value.length===u.value.length?y.value=[]:y.value=u.value.map(s=>s.id)}function Nt(){o.value.length===G.value.length?o.value=[]:o.value=G.value.map(s=>s.code)}async function Gt(){if(y.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${y.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const K=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:y.value})})).json();K.success?(ElementPlus.ElMessage.success(K.message),y.value=[],Q()):ElementPlus.ElMessage.error(K.message||"删除失败")}catch{}}async function ft(){try{const K=await(await fetch("/api/ai/auto-config")).json();K.success&&(q.value=K.data,K.data.evaluate_scope&&(I.value=K.data.evaluate_scope))}catch(s){console.warn("loadAutoEvaluateConfig failed:",s)}}async function v(){U.value=!0;try{q.value.evaluate_scope=I.value;const K=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q.value)})).json();K.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),T.value=!1):ElementPlus.ElMessage.error(K.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{U.value=!1}}const $=p(!1);async function le(){$.value=!0;try{const K=await(await fetch("/api/watchlist")).json();K.success&&(G.value=K.stocks||[])}catch(s){console.warn("loadWatchlist failed:",s)}finally{$.value=!1}}async function Te(s,K){try{const Ce=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s,name:K})})).json();if(Ce.success)return Ce.existed||G.value.push({code:s,name:K,added_at:new Date().toISOString()}),!0}catch(ie){console.warn("addToWatchlist failed:",ie)}return!1}async function Ve(s){try{await fetch(`/api/watchlist/${encodeURIComponent(s)}`,{method:"DELETE"}),G.value=G.value.filter(K=>K.code!==s)}catch(K){console.warn("removeFromWatchlist failed:",K)}}async function Qe(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),G.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(s){console.warn("clearWatchlist failed:",s)}}async function Oe(s,K){re.value.has(s)?(await Ve(s),ElementPlus.ElMessage.info("已移除自选")):await Te(s,K)&&ElementPlus.ElMessage.success("已加入自选")}async function rt(s,K){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(s,K||"");const ie=new Date().toISOString().split("T")[0],Ce=w.value||ie;S.value="kline",X.value=null,O.value="",n("stockKlineChart"),i.value=null,M.value=!0,_.value=!1,b.value=!0,nextTick(()=>F());try{const qe=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${Ce}`);i.value=await qe.json()}catch{i.value={stock:s,name:K,total_days:0}}finally{M.value=!1}await nextTick(),await C("daily"),c(),R(s)}const nt=p(!1);async function ct(){var s;if(G.value.length!==0){nt.value=!0;try{const ie=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ie.success&&ie.loaded>0?(((s=ie.details)==null?void 0:s.loaded)||[]).forEach(Ce=>te.value.add(Ce.code)):ie.loaded===0&&ie.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(K){console.error("预加载K线失败:",K)}finally{nt.value=!1}}}async function Ot(s,K){l.value=!0,X.value=null,O.value="",x.value="fetching",_.value=!1,n();const ie=new Date().toISOString().split("T")[0],Ce=w.value||ie;try{const qe=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${Ce}`);i.value=await qe.json()}catch{i.value={stock:s,name:K,total_days:0}}S.value="ai",b.value=!0,await nextTick();try{const Tt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s,stock_name:K})})).json();Tt.success?(X.value=Tt.data,Q()):(O.value=Tt.message||"评估失败",ElementPlus.ElMessage.error(O.value))}catch{O.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(O.value)}finally{l.value=!1,x.value=""}}async function Et(){G.value.length!==0&&(m.value=!0,V.value=G.value.map(s=>s.code).join(","))}async function L(){o.value.length!==0&&(m.value=!0,V.value=o.value.join(","))}async function fe(){if(!De.value.trim()){ne.value=[];return}ae.value=!0;try{const K=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(De.value)}`)).json();ne.value=(K.results||[]).filter(ie=>!re.value.has(ie.code))}catch(s){console.warn("searchStockForWatchlist failed:",s)}finally{ae.value=!1}}async function Le(){try{const K=await(await fetch("/api/data-refresh/config")).json();he.value=K}catch(s){console.error("加载数据刷新配置失败:",s)}}async function Me(){Ie.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(he.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ie.value=!1}}async function ze(){var s;Ne.value=!0;try{const ie=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ie.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((s=ie.parser_stats)==null?void 0:s.dates_count)||0}交易日`),z.clear(),await Le()):ElementPlus.ElMessage.error(ie.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Ne.value=!1}}const He=p(!1);async function mt(){He.value=!0;try{const K=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(K.success){const ie=K.result||{},Ce=K.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ie.pulled||0}/${ie.total||0}, 财务 ${Ce.pulled||0}/${Ce.total||0}`),z.clear(),await Le()}else ElementPlus.ElMessage.error(K.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{He.value=!1}}const Mt=A(()=>{const s={};for(const K of u.value){const ie=(K.evaluate_time||"").split("T")[0];s[ie]||(s[ie]=[]),s[ie].push(K)}for(const K in s)s[K].sort((ie,Ce)=>Ce.evaluate_time.localeCompare(ie.evaluate_time));return s}),it=A(()=>{const s={};for(const K of u.value){const ie=K.stock_code;s[ie]||(s[ie]=[]),s[ie].push(K)}for(const K in s)s[K].sort((ie,Ce)=>Ce.evaluate_time.localeCompare(ie.evaluate_time));return s}),Bt=A(()=>{const s={};for(const K of u.value){const ie=(K.evaluate_time||"").split("T")[0].slice(0,7);s[ie]||(s[ie]=[]),s[ie].push(K)}for(const K in s)s[K].sort((ie,Ce)=>Ce.evaluate_time.localeCompare(ie.evaluate_time));return s}),qa=A(()=>Object.keys(it.value).length),ia=A(()=>{const s=u.value.length;return s===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(ie=>{const Ce=u.value.filter(qe=>qe.result.total_score>=ie.min&&qe.result.total_score<=ie.max).length;return{...ie,count:Ce,pct:Math.round(Ce/s*100)}})});async function wa(){if(!ue.value)return;const s=G.value.find(K=>K.code===ue.value);if(s){l.value=!0,X.value=null,O.value="",x.value="fetching";try{i.value={stock:s.code,name:s.name,total_days:0},b.value=!0,S.value="ai",await nextTick();const ie=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s.code,stock_name:s.name,strategy:Z.value})})).json();ie.success?(X.value=ie.data,Q(),ue.value=""):(O.value=ie.message||"评估失败",ElementPlus.ElMessage.error(O.value))}catch{O.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(O.value)}finally{l.value=!1,x.value=""}}}function oa(s){const K=D.value.indexOf(s);K>=0?D.value.splice(K,1):D.value.push(s)}function Da(s){const ie=(Mt.value[s]||[]).map(qe=>qe.id);ie.every(qe=>y.value.includes(qe))?y.value=y.value.filter(qe=>!ie.includes(qe)):ie.forEach(qe=>{y.value.includes(qe)||y.value.push(qe)})}function ra(s){const ie=(Bt.value[s]||[]).map(qe=>qe.id);ie.every(qe=>y.value.includes(qe))?y.value=y.value.filter(qe=>!ie.includes(qe)):ie.forEach(qe=>{y.value.includes(qe)||y.value.push(qe)})}function Pa(s){const K=ce.value.indexOf(s);K>=0?ce.value.splice(K,1):ce.value.push(s)}function ca(s){const ie=(it.value[s]||[]).map(qe=>qe.id);ie.every(qe=>y.value.includes(qe))?y.value=y.value.filter(qe=>!ie.includes(qe)):ie.forEach(qe=>{y.value.includes(qe)||y.value.push(qe)})}const $t={},ka={};function ga(s,K,ie){if(!s||(ie&&(ka[K]={el:s,records:ie}),$t[K]===s))return;const Ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,qe=()=>{Object.keys($t).forEach(We=>{if($t[We]&&$t[We]!==s){try{$t[We].dispose()}catch{}delete $t[We]}});const Tt=[...ie].sort((We,Dt)=>We.evaluate_time.localeCompare(Dt.evaluate_time)),$e=Tt.map(We=>(We.evaluate_time||"").split("T")[0]),bt=Tt.map(We=>{var Dt;return((Dt=We.result)==null?void 0:Dt.total_score)??null}),Yt=Tt.map(We=>{var Dt;return((Dt=We.result)==null?void 0:Dt.level)??""}),Ct={primary:W("--qc-primary-600")||"#b8922a",textPrimary:W("--text-primary")||"#1f2937",textSecondary:W("--text-secondary")||"#6b7280",border:W("--border-light")||"#e5e7eb",up:W("--color-success")||"#67c23a",down:W("--color-danger")||"#f56c6c"},da=[];for(let We=1;We<bt.length;We++)bt[We]!=null&&bt[We-1]!=null&&Math.abs(bt[We]-bt[We-1])>=15&&da.push({name:"大幅变化",coord:[$e[We],bt[We]],value:(bt[We]-bt[We-1]>0?"↑":"↓")+Math.abs(bt[We]-bt[We-1]),symbol:"pin",symbolSize:32,itemStyle:{color:bt[We]-bt[We-1]>0?Ct.up:Ct.down}});const ua=echarts.init(s);ua.setOption({tooltip:{trigger:"axis",backgroundColor:W("--bg-card")||"#ffffff",borderColor:Ct.border,textStyle:{color:Ct.textPrimary},formatter:function(We){var ya;const Dt=(ya=We[0])==null?void 0:ya.dataIndex,ha=Dt!=null?Yt[Dt]:"";return $e[Dt]+"<br/>得分: "+bt[Dt]+(ha?" ("+ha+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:$e,axisLabel:{fontSize:10,rotate:30,color:Ct.textSecondary},axisLine:{lineStyle:{color:Ct.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Ct.textSecondary},splitLine:{lineStyle:{color:Ct.border}}},series:[{data:bt,type:"line",smooth:!0,lineStyle:{color:Ct.primary,width:2},itemStyle:{color:Ct.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:W("--primary-rgb")?"rgba("+W("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:W("--primary-rgb")?"rgba("+W("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:da.length>0?{data:da}:void 0}]}),$t[K]=ua};Ce?Ce().then(qe).catch(()=>{}):qe()}function Ra(){Object.keys(ka).forEach(s=>{const K=ka[s];if(!(!K||!K.el)){if($t[s]){try{$t[s].dispose()}catch{}delete $t[s]}ga(K.el,s,K.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Ra));async function za(s){X.value=s,_.value=!1,n();try{const K=await fetch(`/api/calendar/stock/${s.stock_code}?date=${w.value}`);i.value=await K.json()}catch{i.value={stock:s.stock_code,name:s.stock_name||s.stock_code,total_days:0,history:[]}}b.value=!0,S.value="ai"}async function h(){if(!V.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const s=V.value.split(/[,，\s]+/).filter($e=>$e.trim());if(s.length===0)return;se.value=!0,Y.value=s.length,ee.value=0,j.value="",H.value={},N.value={},k.value={},s.forEach($e=>{H.value[$e]="pending",N.value[$e]=null});const K={"Content-Type":"application/json"};let ie=0,Ce=0,qe=!1;try{const $e=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:K,body:JSON.stringify({stock_codes:s})});if($e.ok&&$e.body){qe=!0;const bt=$e.body.getReader(),Yt=new TextDecoder("utf-8");let Ct="",da=!1;for(;!da;){const{value:ua,done:We}=await bt.read();da=We,Ct+=Yt.decode(ua||new Uint8Array,{stream:!da});let Dt;for(;(Dt=Ct.indexOf(`

`))>=0;){const ha=Ct.slice(0,Dt);Ct=Ct.slice(Dt+2);const ya=ha.split(`
`).find(Ka=>Ka.startsWith("data: "));if(!ya)continue;let Pt;try{Pt=JSON.parse(ya.slice(6))}catch{continue}Pt.type==="start"?Pt.total&&(Y.value=Pt.total):Pt.type==="item"?(ee.value++,j.value=Pt.stock_code,Pt.success?(H.value[Pt.stock_code]="success",N.value[Pt.stock_code]=Pt,ie++):(H.value[Pt.stock_code]="error",k.value[Pt.stock_code]=Pt.error||"评估失败",Ce++)):Pt.type==="done"&&(typeof Pt.success=="number"&&(ie=Pt.success),typeof Pt.fail=="number"&&(Ce=Pt.fail))}}if(Ct.trim()){const ua=Ct.split(`
`).find(We=>We.startsWith("data: "));if(ua)try{const We=JSON.parse(ua.slice(6));We.type==="item"?(ee.value++,j.value=We.stock_code,We.success?(H.value[We.stock_code]="success",N.value[We.stock_code]=We,ie++):(H.value[We.stock_code]="error",k.value[We.stock_code]=We.error||"评估失败",Ce++)):We.type==="done"&&(typeof We.success=="number"&&(ie=We.success),typeof We.fail=="number"&&(Ce=We.fail))}catch{}}}}catch{qe=!1}if(!qe){ie=0,Ce=0,ee.value=0;for(const $e of s){j.value=$e,H.value[$e]="running";try{const Yt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:K,body:JSON.stringify({stock_code:$e.trim(),stock_name:$e.trim()})})).json();Yt.success?(H.value[$e]="success",N.value[$e]=Yt.data,ie++):(H.value[$e]="error",k.value[$e]=Yt.message&&Yt.message!=="success"?Yt.message:"评估失败",Ce++)}catch(bt){H.value[$e]="error",k.value[$e]="网络错误: "+(bt&&bt.message?bt.message:bt),Ce++}ee.value++}}j.value="",await Q();const Tt=s.length;setTimeout(()=>{Ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${ie}/${Tt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${ie}/${Tt} · 失败 ${Ce}`),se.value=!1},500)}return{quickEvalStock:ue,evalStrategy:Z,watchlistSort:P,watchlist:G,watchlistCodes:re,sortedWatchlist:J,getWatchlistScore:oe,getLatestScore:Pe,addSearchResult:ke,evaluatedCodes:_e,klineLoadedCodes:te,markKlineLoaded:xe,watchlistSearch:De,watchlistResults:ne,watchlistSearching:ae,dataRefreshConfig:he,dataRefreshReloading:Ne,dataRefreshSaving:Ie,aiHistoryLoading:pe,aiHistoryError:de,aiHistoryTotal:Je,aiHistoryLoadingMore:At,hasMoreAiHistory:wt,loadMoreAiHistory:ge,watchlistLoading:$,doAiEvaluate:Ut,loadAiHistory:Q,deleteSingleHistory:at,toggleSelectHistory:kt,clearSelection:lt,clearWatchlistSelection:It,batchReevaluateHistory:ea,batchAddToWatchlist:aa,batchAddToPortfolio:na,batchRemoveWatchlist:ta,toggleSelectWatchlist:Qt,selectAllHistory:Ht,selectAllWatchlist:Nt,deleteSelectedHistory:Gt,loadAutoEvaluateConfig:ft,saveAutoEvaluateConfig:v,loadWatchlist:le,addToWatchlist:Te,removeFromWatchlist:Ve,clearWatchlist:Qe,toggleWatchlist:Oe,showStockKline:rt,preloadingKline:nt,preloadWatchlistKline:ct,watchlistEvaluate:Ot,batchEvaluateWatchlist:Et,batchEvaluateSelected:L,searchStockForWatchlist:fe,loadDataRefreshConfig:Le,saveDataRefreshConfig:Me,triggerDataReload:ze,triggerDataPull:mt,dataPullRunning:He,groupedByDate:Mt,aiHistoryByStock:it,groupedByMonth:Bt,aiHistoryStockCount:qa,scoreDistribution:ia,quickEvaluate:wa,toggleDateExpand:oa,toggleSelectDate:Da,toggleSelectMonth:ra,toggleStockExpand:Pa,toggleSelectStock:ca,registerTrendChart:ga,viewAiResult:za,doBatchEvaluate:h,realtimeQuotes:we,realtimeDegraded:Ae,realtimeWsState:Re,connectRealtimeQuotes:gt,disconnectRealtimeQuotes:Wt,quoteWarningFor:St,realtimeQuoteColor:pt,realtimePriceText:zt,realtimePctText:Kt,realtimeRatioText:Jt,REALTIME_DEGRADED_TEXT:Ge,REALTIME_FALLBACK_TEXT:ht}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:f}=Vue,t=e([]),d=e(null),p=e([]),A=e(!1),g=e(!1),r=e(!1),w=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),i=e(!1),S=e(!1),b=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),M=e(!1),_=e("positions"),z=e(30),F=e(!1),C=e(""),c=e(!1),n=e({dates:[],equity:[],values:[]}),u=f(()=>t.value.length),l=e("metrics"),x=e(!1),E=e(""),O=e(!1),X=e({metrics:null,rules:[],rebalance:null}),R=f(function(){const m=X.value.metrics;if(!m)return[];const W=function(Z){return Z==null?"--":Number(Z).toFixed(2)+"%"},ue=function(Z){return Z==null?"--":Number(Z).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:W(m.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:W(m.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:W(m.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:W(m.cvar)},{key:"max_drawdown",label:"最大回撤",value:W(m.max_drawdown)},{key:"annual_return",label:"年化收益",value:W(m.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ue(m.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ue(m.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ue(m.calmar_ratio)},{key:"beta",label:"Beta",value:ue(m.beta)}]});async function q(){x.value=!0;try{const m=await(await fetch("/api/portfolio/risk?days=60")).json(),W=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ue=m&&m.success?m.risk:null,Z=W&&W.success?W.rules||[]:[],P=W&&W.success?W.rebalance:null;X.value={metrics:ue,rules:Z,rebalance:P},O.value=!!(ue&&Object.keys(ue).length>0),E.value=m&&m.note||W&&W.note||""}catch(m){console.warn("[portfolio] 加载风险数据失败:",m),O.value=!1,E.value="风险数据加载失败"}finally{x.value=!1}}async function I(){A.value=!0,g.value=!1;try{const W=await(await fetch("/api/portfolio")).json();W.success?(t.value=W.positions||[],d.value=W.summary||null):g.value=!0}catch(m){console.warn("[portfolio] 加载持仓失败:",m),g.value=!0}finally{A.value=!1}}async function V(){const m=w.value,W=(m.stock_code||"").trim();if(!W){ElementPlus.ElMessage.warning("请输入股票代码");return}const ue=Number(m.cost_price),Z=Number(m.quantity);if(!(ue>0)||!(Z>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}i.value=!0;try{const G=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:W,stock_name:(m.stock_name||"").trim(),cost_price:ue,quantity:Z})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"持仓已更新"),r.value=!1,w.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await I(),U(z.value)):ElementPlus.ElMessage.error(G.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{i.value=!1}}async function se(m){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+m+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ue=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(m),{method:"DELETE"})).json();ue.success?(ElementPlus.ElMessage.success("已删除持仓"),await I(),j(),U(z.value)):ElementPlus.ElMessage.error(ue.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function Y(m,W){b.value={stock_code:m,stock_name:W||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},S.value=!0}async function ee(){const m=b.value;if(!m.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const W=Number(m.price),ue=Number(m.quantity);if(!(W>0)||!(ue>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}M.value=!0;try{const P=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:m.stock_code,stock_name:m.stock_name||"",action:m.action,price:W,quantity:ue,trade_date:m.trade_date||"",note:(m.note||"").trim()})})).json();P.success?(ElementPlus.ElMessage.success(P.message||"调仓已记录"),S.value=!1,await I(),await j(),U(z.value)):ElementPlus.ElMessage.error(P.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{M.value=!1}}async function j(){try{const W=await(await fetch("/api/portfolio/trades")).json();W.success&&(p.value=W.trades||[])}catch(m){console.warn("[portfolio] 加载调仓记录失败:",m)}}const H=m=>(getComputedStyle(document.documentElement).getPropertyValue(m)||"").trim();function N(m){if(!m||!m.length)return[];let W=m[0]||0;const ue=[];for(let Z=0;Z<m.length;Z++){const P=m[Z]||0;P>W&&(W=P),ue.push(W>0?Math.round((P-W)/W*1e3)/10:0)}return ue}function k(){const m={primary:H("--qc-primary-600")||"#b8922a",textPrimary:H("--text-primary")||"#1f2937",textSecondary:H("--text-secondary")||"#6b7280",border:H("--border-light")||"#e5e7eb",up:H("--color-rise")||"#E63946",down:H("--color-fall")||"#2E7D32"},W=n.value;return{tooltip:{trigger:"axis",backgroundColor:H("--bg-card")||"#ffffff",borderColor:m.border,textStyle:{color:m.textPrimary},formatter:function(ue){const Z=ue[0]?ue[0].dataIndex:-1,P=W.dates[Z]||"",G=W.equity[Z],re=W.values[Z];let pe=P||"";return G!=null&&(pe+="<br/>组合净值: "+G),re!=null&&(pe+="<br/>组合市值: "+re),pe}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:W.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:m.textSecondary},axisLine:{lineStyle:{color:m.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:m.textSecondary},splitLine:{lineStyle:{color:m.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:m.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:W.equity,smooth:!0,showSymbol:!1,lineStyle:{color:m.primary,width:2},itemStyle:{color:m.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:N(W.equity),smooth:!0,showSymbol:!1,lineStyle:{color:m.down,width:1.5},itemStyle:{color:m.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function D(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function ce(m,W,ue){n.value={dates:m||[],equity:W||[],values:ue||[]},c.value=!!m&&m.length>0,c.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",k,{key:"portfolio-equity"}):D()}async function U(m){F.value=!0,C.value="";const W=Number(m)||z.value||30;z.value=W;try{const Z=await(await fetch("/api/portfolio/equity_curve?days="+W)).json();Z.success?(C.value=Z.note||"",ce(Z.dates||[],Z.equity||[],Z.values||[])):(C.value="数据暂不可用",D())}catch(ue){console.warn("[portfolio] 加载收益曲线失败:",ue),C.value="数据暂不可用",D()}finally{F.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function y(m,W){if(m==null||m===""||isNaN(Number(m)))return"--";const ue=Number(m),Z=W??2;return(ue>=0?"+":"")+ue.toFixed(Z)}function o(m,W){if(m==null||m===""||isNaN(Number(m)))return"--";const ue=Number(m),Z=W??2;return(ue>=0?"+":"")+ue.toFixed(Z)+"%"}function T(m){if(m==null||m===""||isNaN(Number(m)))return"";const W=Number(m);return W>0?"portfolio-up":W<0?"portfolio-down":""}return{positions:t,summary:d,trades:p,loading:A,loadError:g,showAddForm:r,addForm:w,addSaving:i,tradeFormVisible:S,tradeForm:b,tradeSaving:M,portfolioTab:_,equityDays:z,equityLoading:F,equityNote:C,equityHasData:c,portfolioCount:u,loadPortfolio:I,addPosition:V,removePosition:se,openTradeForm:Y,submitTrade:ee,loadTrades:j,loadEquity:U,fmtSigned:y,fmtSignedPct:o,signClass:T,riskTab:l,riskLoading:x,riskNote:E,riskHasData:O,riskData:X,riskMetricList:R,loadRisk:q}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(r,w){var i=Number(r);return isFinite(i)?i:typeof w=="number"?w:0}function e(r){var w=Array.isArray(r)?r:[];if(w.length<2)return null;for(var i=-1/0,S=0,b=0,M=0,_=0,z=0;z<w.length;z++){var F=a(w[z].equity!=null?w[z].equity:w[z].value);F>i&&(i=F,S=z);var C=i>0?(i-F)/i*100:0;C>b&&(b=C,M=S,_=z)}function c(n){return w[n]&&w[n].date?w[n].date:""}return{maxDrawdown:Math.round(b*100)/100,peakIndex:M,troughIndex:_,peakDate:c(M),troughDate:c(_)}}function f(r){for(var w=r||{},i={},S=Object.keys(w).sort(),b=0;b<S.length;b++){var M=S[b],_=String(M).slice(0,4);/^\d{4}$/.test(_)&&(i[_]=(i[_]||0)+a(w[M]))}var z=Object.keys(i).sort();return z.map(function(F){return{year:F,return:Math.round(i[F]*100)/100}})}function t(r){var w=Array.isArray(r)?r:[],i={};w.forEach(function(M){(M.points||[]).forEach(function(_){_&&_.date&&(i[_.date]=1)})});var S=Object.keys(i).sort(),b=w.map(function(M){var _={};return(M.points||[]).forEach(function(z){z&&z.date&&(_[z.date]=a(z.value!=null?z.value:z.equity))}),{name:M.name||"",data:S.map(function(z){return z in _?_[z]:null})}});return{dates:S,series:b}}function d(r){var w=r||{},i=function(b){return a(b)},S=function(b,M){var _=i(b);return isFinite(_)?_.toFixed(M):"--"};return[{key:"total_return",label:"总收益",value:S(w.total_return,2),suffix:"%",dir:i(w.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:S(w.annual_return,2),suffix:"%",dir:i(w.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:S(w.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:S(w.sharpe_ratio,2),suffix:"",dir:i(w.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:S(w.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:S(w.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(i(w.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:S(w.volatility,2),suffix:"%",dir:""}]}function p(r){var w=r==null?"":String(r);return/[",\n]/.test(w)?'"'+w.replace(/"/g,'""')+'"':w}function A(r){var w=r||{},i=[];i.push("回测指标"),i.push("指标,数值"),(w.metrics||[]).forEach(function(c){i.push(p(c.label)+","+p((c.value||"")+(c.suffix||"")))}),i.push(""),i.push("净值曲线");var S=["日期"].concat((w.series||[]).map(function(c){return c.name}));i.push(S.map(p).join(","));for(var b=w.dates||[],M=w.series||[],_=0;_<b.length;_++){for(var z=[b[_]],F=0;F<M.length;F++){var C=M[F].data&&M[F].data[_];z.push(C??"")}i.push(z.map(p).join(","))}return i.push(""),i.push("交易明细"),i.push("日期,股票代码,方向,原因"),(w.trades||[]).forEach(function(c){i.push(p(c.date)+","+p(c.stock)+","+p(c.action)+","+p(c.reason))}),i.join(`
`)}function g(r){return r==="buy"?"买入":r==="sell"?"卖出":r||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:f,buildNavSeries:t,buildMetrics:d,buildBacktestCsv:A,tradeActionText:g}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:f}=Vue,t=window.QuantBacktest||{},d=a||{},p=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],g=(Array.isArray(d.backtestStrategies)&&d.backtestStrategies.length?d.backtestStrategies:p).map(H=>({id:H.id,name:H.name})),r=e(g.length?[g[0].id]:[]),w=e(F()),i=e(1e5),S=e(3e-4),b=e(!1),M=e(!1),_=e(null),z=e("");function F(){const H=new Date,N=new Date;N.setFullYear(N.getFullYear()-1);const k=D=>D.getFullYear()+"-"+String(D.getMonth()+1).padStart(2,"0")+"-"+String(D.getDate()).padStart(2,"0");return[k(N),k(H)]}function C(H){const N=r.value.indexOf(H);N>=0?r.value.length>1&&r.value.splice(N,1):r.value.push(H)}function c(H){const N=g.find(k=>k.id===H);return N?N.name:H}function n(H){const N=H.summary||H;return{strategy_id:N.strategy_id,start_date:N.start_date,end_date:N.end_date,total_days:N.total_days,total_return:N.total_return,annual_return:N.annual_return,max_drawdown:N.max_drawdown,volatility:N.volatility,sharpe_ratio:N.sharpe_ratio,sortino_ratio:N.sortino_ratio,win_rate:N.win_rate,profit_loss_ratio:N.profit_loss_ratio,avg_positions:N.avg_positions!=null?N.avg_positions:N.avg_positions_per_day,total_trades:N.total_trades,turnover_rate:N.turnover_rate,success:N.success!==!1,message:N.message||"",insample_total_return:N.insample_total_return!=null?N.insample_total_return:null,outsample_total_return:N.outsample_total_return!=null?N.outsample_total_return:null,out_sample_ratio:N.out_sample_ratio!=null?N.out_sample_ratio:.2,overfit_warning:!!N.overfit_warning,overfit_reason:N.overfit_reason||""}}function u(H){return(Array.isArray(H)?H:[]).map(N=>({date:N.date,value:N.equity!=null?N.equity:N.value}))}function l(H,N){const k=n(N),D=u(N.equity_curve),ce=N.monthly_returns||{},U=Array.isArray(N.trade_history)?N.trade_history:[],y={id:H,name:c(H),summary:k,equityCurve:D,monthlyReturns:ce,trades:U};let o=null;if(b.value){const T=Number(i.value)||1e5;o={name:"现金基准",points:D.map(m=>({date:m.date,value:T}))}}return{success:!0,mode:"single",strategies:[y],primary:y,benchmark:o,period:(k.start_date||"")+" ~ "+(k.end_date||"")}}function x(H,N){const k=N.strategy_results||{},D=H.map(y=>{const o=k[y];if(!o)return null;const T=n(o);return{id:y,name:c(y),summary:T,equityCurve:u(o.equity_curve),monthlyReturns:o.monthly_returns||{},trades:Array.isArray(o.trade_history)?o.trade_history:[]}}).filter(y=>y&&y.summary.success!==!1),ce=D.length?D[0]:null;let U=null;return b.value&&(U={name:"等权组合基准",points:u(N.portfolio_equity)}),{success:D.length>0,mode:"multi",strategies:D,primary:ce,benchmark:U,period:ce?ce.summary.start_date+" ~ "+ce.summary.end_date:""}}const E=f(()=>{const H=_.value;return!H||!H.primary?[]:t.buildMetrics?t.buildMetrics(H.primary.summary):[]}),O=f(()=>{const H=_.value;return!H||!H.primary||!H.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(H.primary.monthlyReturns):[]}),X=f(()=>{const H=_.value;return!H||!H.primary?[]:(H.primary.trades||[]).slice().sort((N,k)=>String(k.date||"").localeCompare(String(N.date||"")))}),R=f(()=>{const H=_.value;return!H||!H.strategies||H.strategies.length<2?[]:H.strategies.map(N=>({name:N.name,metrics:t.buildMetrics?t.buildMetrics(N.summary):[]}))}),q=f(()=>{const H=_.value;return!H||!H.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(H.primary.equityCurve):null});async function I(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const N=r.value;if(!N.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const k=w.value,D={start_date:k&&k[0]||void 0,end_date:k&&k[1]||void 0},ce={"Content-Type":"application/json"};M.value=!0,_.value=null,z.value="";try{if(N.length===1){const U=Object.assign({},D,{initial_capital:Number(i.value)||1e5,commission_rate:Number(S.value)||3e-4}),y=await fetch("/api/backtest/"+encodeURIComponent(N[0]),{method:"POST",headers:ce,body:JSON.stringify(U)});if(!y.ok){const T=await y.json().catch(()=>({}));throw new Error(T.detail||"回测失败")}const o=await y.json();if(!o.success)throw new Error(o.message||"回测失败");_.value=l(N[0],o)}else{const U=await fetch("/api/backtest/multi",{method:"POST",headers:ce,body:JSON.stringify(Object.assign({},D,{strategy_ids:N}))});if(!U.ok){const o=await U.json().catch(()=>({}));throw new Error(o.detail||"回测失败")}const y=await U.json();if(!y.success)throw new Error(y.message||"多策略回测失败");if(_.value=x(N,y.data||{}),!_.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(U){z.value=U&&U.message?U.message:"回测失败",ElementPlus.ElMessage.error(z.value)}finally{M.value=!1}}function V(){const H=_.value,N={dates:[],series:[]};if(!H)return N;const k=H.strategies.map(ce=>({name:ce.name,points:ce.equityCurve}));H.benchmark&&H.benchmark.points&&H.benchmark.points.length&&k.push({name:H.benchmark.name,points:H.benchmark.points});const D=t.buildNavSeries?t.buildNavSeries(k):N;return se(D,H)}function se(H,N){const k=W=>(getComputedStyle(document.documentElement).getPropertyValue(W)||"").trim(),D={primary:k("--qc-primary-600")||"#b8922a",success:k("--color-success")||"#4CAF50",accent:k("--color-accent")||"#F59E0B",info:k("--color-info")||"#1976d2",ai:k("--color-ai")||"#6366f1",textPrimary:k("--text-primary")||"#1f2937",textSecondary:k("--text-secondary")||"#6b7280",border:k("--border-light")||"#e5e7eb",up:k("--color-rise")||"#E63946",down:k("--color-fall")||"#2E7D32",bg:k("--bg-card")||"#ffffff"},ce=[D.primary,D.success,D.accent,D.info,D.ai],y=D.bg.length===7&&parseInt(D.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",o=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(N.primary?N.primary.equityCurve:[]):null,T=o&&o.peakDate&&o.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:D.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+o.maxDrawdown+"%",xAxis:o.peakDate,itemStyle:{color:D.down}},{xAxis:o.troughDate}]]}:void 0,m=H.series.map((W,ue)=>{const Z=N.benchmark&&W.name===N.benchmark.name,P=ce[ue%ce.length];return{name:W.name,type:"line",data:W.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:Z?2:2.4,type:Z?"dashed":"solid",color:P},itemStyle:{color:P},emphasis:{focus:"series"},...ue===0&&T?{markArea:T}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:y,borderColor:D.border,textStyle:{color:D.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:D.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:H.dates,boundaryGap:!1,axisLine:{lineStyle:{color:D.border}},axisLabel:{color:D.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:D.textSecondary,fontSize:11},splitLine:{lineStyle:{color:D.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:D.border,textStyle:{color:D.textSecondary,fontSize:10}}],series:m}}function Y(H){if(!H){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",V,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function ee(){const H=_.value;if(!H||!H.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const N=H.strategies.map(m=>({name:m.name,points:m.equityCurve}));H.benchmark&&N.push({name:H.benchmark.name,points:H.benchmark.points});const k=t.buildNavSeries?t.buildNavSeries(N):{dates:[],series:[]},D=t.tradeActionText||(m=>m),ce=X.value.map(m=>({date:m.date,stock:m.stock,action:D(m.action),reason:m.reason})),U=t.buildBacktestCsv?t.buildBacktestCsv({metrics:E.value,dates:k.dates,series:k.series,trades:ce}):"",y=new Blob(["\uFEFF"+U],{type:"text/csv;charset=utf-8"}),o=URL.createObjectURL(y),T=document.createElement("a");T.href=o,T.download="backtest-"+H.strategies.map(m=>m.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",T.click(),URL.revokeObjectURL(o),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function j(H,N){return H==null||H===""||isNaN(Number(H))?"--":Number(H).toFixed(N??2)}return{btStrategyOptions:g,btSelectedStrategies:r,toggleBtStrategy:C,btDateRange:w,btCapital:i,btCommissionRate:S,btIncludeBenchmark:b,btRunning:M,btResult:_,btError:z,btMetrics:E,btAnnualReturns:O,btTrades:X,btStrategyMetricsRows:R,btDrawdownRegion:q,runBacktestWorkbench:I,exportBacktestCSV:ee,registerBacktestNavChart:Y,btFmtNum:j}}}})();(function(){const{ref:a,computed:e,watch:f,onUnmounted:t}=Vue,d=i=>(getComputedStyle(document.documentElement).getPropertyValue(i)||"").trim(),p=72,A={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},g={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},r={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},w={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const i=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),S=a({}),b=a(!1),M=a({}),_=a({cycles:[]}),z=a([]),F=a(0),C=a(!1),c=a({autoRefresh:!0,refreshInterval:300}),n=a(""),u=a(""),l=a(!1),x=a("");let E=null;const O={x:0,y:0},X=e(()=>{const J=S.value;return["recession","recovery","overheat","stagflation"].map(Pe=>{const ke=J[Pe]||{};return{key:Pe,name:ke.name||Pe,icon:r[ke.icon]||"bar-chart-3",color:ke.color||d("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(ke.color||"#888")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(ke.color||"#888")+" 48%, var(--qc-foreground))",tagline:ke.allocation&&w[Pe]||""}})}),R=e(()=>{var oe,Pe,ke,_e;const J=i.value.indicators||{};return[{key:"pmi",label:"PMI",value:(oe=J.pmi)==null?void 0:oe.toFixed(2),color:J.pmi>=50?d("--color-success")||"#43a047":d("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Pe=J.gdp_growth)==null?void 0:Pe.toFixed(2))+"%",color:d("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((ke=J.cpi)==null?void 0:ke.toFixed(2))+"%",color:J.cpi>1.2?d("--color-danger")||"#E53935":d("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((_e=J.m2_growth)==null?void 0:_e.toFixed(2))+"%",color:d("--color-success")||"#43a047"}]}),q=J=>{J=J||{};const oe=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Pe=()=>d("--color-success")||"#43a047",ke=()=>d("--color-danger")||"#E53935",_e=()=>d("--color-warning")||"#FF9800",te={宽松:Pe(),中位:_e(),偏低:ke(),高增长:Pe(),承压:ke(),不利:ke()};return oe.map(xe=>{const De=J[xe.key]||{},ne=De.score||0,ae=Math.min(100,Math.max(5,(ne+2)*25)),he=ne>=.3?"#66BB6A":ne>=-.3?"#FFB74D":"#EF5350",Ne=ne>=0?"#66BB6A":"#EF5350";return{key:xe.key,label:xe.label,scoreStr:ne.toFixed(2),level:De.level||"—",barWidth:ae,barColor:he,scoreColor:Ne,color:te[De.level]||"#888888"}})},I=e(()=>q(i.value.dimension_scores)),V=e(()=>q(M.value._dimensions)),se=e(()=>{var oe;const J=((oe=i.value.confidence)==null?void 0:oe.level)||"";return J==="高"?"#43a047":J==="中"?"#FF9800":J==="低"?"#E53935":"var(--text-secondary)"}),Y=e(()=>{var ke,_e,te,xe;const J=S.value,oe={recovery:0,overheat:1,stagflation:2,recession:3},Pe={};for(const[De,ne]of Object.entries(J))Pe[De]={name:ne.name,icon:ne.icon,color:ne.color,lightColor:ne.bg_color,duration:"~"+(((ke=ne.historical_stats)==null?void 0:ke.avg_duration_months)||18)+"个月",order:oe[De]||0,period:((te=(_e=ne.case_studies)==null?void 0:_e[0])==null?void 0:te.split("：")[0])||"",avgMonths:((xe=ne.historical_stats)==null?void 0:xe.avg_duration_months)||18};return Pe}),ee=e(()=>{var ne,ae;const J=i.value.stage,Pe={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[J]||{x:150,y:150},ke=i.value.dimension_scores||{},_e=((ne=ke.growth)==null?void 0:ne.score)||0,te=((ae=ke.inflation)==null?void 0:ae.score)||0,xe=Math.max(-30,Math.min(30,_e*15)),De=Math.max(-30,Math.min(30,-te*15));return{x:Pe.x+xe,y:Pe.y+De,prevX:O.x,prevY:O.y}}),j=e(()=>{var ke;const J=Math.min(100,((ke=i.value.timing)==null?void 0:ke.progress_percent)||0),oe=i.value.color||"#4CAF50",Pe=J>100?"linear-gradient(90deg, "+oe+", #FF9800)":oe;return{width:J+"%",background:Pe}});function H(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[i.value.stage]||0}function N(){var J,oe;return((oe=(J=i.value)==null?void 0:J.timing)==null?void 0:oe.progress_percent)||0}function k(){var J,oe;return((oe=(J=i.value)==null?void 0:J.timing)==null?void 0:oe.duration_months)||0}function D(){var J,oe;return((oe=(J=i.value)==null?void 0:J.timing)==null?void 0:oe.avg_duration_months)||18}function ce(J){var _e,te;const oe=Y.value,Pe=((_e=oe[i.value.stage])==null?void 0:_e.order)||0;return(((te=oe[J])==null?void 0:te.order)||0)<Pe}function U(J){return A[J]||J}function y(J){return g[J]||J}function o(J){const oe=["#43a047","#f57c00","#1976d2","#757575"];return oe[J-1]||oe[3]}async function T(){try{const oe=await(await fetch("/api/market/merrill-clock/stages")).json();oe.success&&oe.data&&(S.value=oe.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function m(){C.value=!0;try{ue();const oe=await(await fetch("/api/market/merrill-clock/timeline")).json();if(oe.success&&oe.data){const Pe=Array.isArray(oe.data.cycles)?oe.data.cycles.slice().reverse():[];_.value={cycles:Pe}}}catch{console.warn("获取美林时钟时间轴失败")}finally{C.value=!1}}async function W(J){await P(J)}async function ue(){try{const oe=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();oe&&oe.success&&oe.data&&(z.value=oe.data.items||[],F.value=oe.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function Z(){var J,oe;try{const ke=await(await fetch("/api/market/merrill-clock")).json(),_e=ke.stage||"recovery",te=S.value[_e]||{};if(i.value={...te,...ke,stage_cn:ke.stage_cn||te.stage_cn||"",stage_name:ke.stage_name||te.name||"",name:ke.name||te.name||"复苏期"},n.value=new Date().toLocaleTimeString("zh-CN"),x.value&&x.value!==_e){const xe=S.value,De=((J=xe[x.value])==null?void 0:J.name)||x.value,ne=((oe=xe[_e])==null?void 0:oe.name)||_e;ElementPlus.ElMessage({message:"美林时钟阶段切换："+De+" → "+ne,type:"warning",duration:6e3,showClose:!0})}x.value=_e}catch(Pe){console.error("获取美林时钟失败:",Pe);const ke=S.value.recovery||{};i.value={...ke,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function P(J){var Pe;b.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",M.value=S.value[J]||S.value.recovery||{};const oe=((Pe=i.value)==null?void 0:Pe.stage)===J;M.value._isCurrent=oe,oe&&i.value&&(M.value._nextPrediction=i.value.next_stage_prediction,M.value._confidence=i.value.confidence,M.value._stage=i.value.stage,M.value._dimensions=i.value.dimension_scores);try{const _e=await(await fetch("/api/market/merrill-clock/stage/"+J)).json();if(_e.success&&_e.data){const te={...S.value[J],..._e.data};te._is_current!==void 0&&(te._isCurrent=te._is_current),te._current_timing&&(te._currentTiming=te._current_timing),te._last_period&&(te._lastPeriod=te._last_period),M.value._nextPrediction&&(te._nextPrediction=M.value._nextPrediction),M.value._confidence&&(te._confidence=M.value._confidence),M.value._stage&&(te._stage=M.value._stage),M.value._dimensions&&(te._dimensions=M.value._dimensions),Object.assign(M.value,te)}}catch(ke){console.warn("获取阶段详情失败:",ke)}}function G(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:c.value.autoRefresh,refreshInterval:c.value.refreshInterval})),c.value.autoRefresh?(clearInterval(E),E=setInterval(Z,c.value.refreshInterval*1e3)):clearInterval(E),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function re(){l.value=!0,u.value="";try{const oe=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();oe.success?(u.value="重评估完成："+(oe.stage_name||oe.stage),await Z(),ElementPlus.ElMessage.success("重评估完成")):(u.value=oe.message||"重评估失败",ElementPlus.ElMessage.error(oe.message||"重评估失败"))}catch{u.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{l.value=!1}}function pe(){const J=localStorage.getItem("merrill_clock_config");if(J)try{const oe=JSON.parse(J);c.value={...c.value,...oe}}catch{}c.value.autoRefresh&&(E=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),Z()},c.value.refreshInterval*1e3))}function de(){E&&clearInterval(E)}return t(()=>{de()}),{merrillData:i,merrillStagesConfig:S,showMerrillDetail:b,merrillDetailData:M,merrillTimeline:_,merrillSnapshots:z,merrillSnapshotsTotal:F,fetchMerrillSnapshots:ue,timelineLoading:C,merrillClockConfig:c,merrillClockLastUpdated:n,merrillReevalResult:u,merrillReevalLoading:l,stages:X,indicatorList:R,dimensionScoreList:I,detailDimensionScoreList:V,confidenceColor:se,timelineStages:Y,clockPosition:ee,merrillProgressStyle:j,FULL_CYCLE_MONTHS:p,getStageAngle:H,getCycleProgress:N,getCurrentStageMonths:k,getStageTotalMonths:D,isStageCompleted:ce,getCharLabel:U,getAssetName:y,getRankColor:o,fetchMerrillStages:T,fetchMerrillClock:Z,loadMerrillTimeline:m,showTimelineStage:W,showStageDetail:P,saveMerrillClockConfig:G,doMerrillReevaluate:re,startAutoRefresh:pe,stopAutoRefresh:de}}})();(function(){function a(p){return getComputedStyle(document.documentElement).getPropertyValue(p).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const f=[];function t(p){typeof p=="function"&&f.push(p)}function d(){f.slice().forEach(function(p){try{p()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:t,refreshAllCharts:d,init(){return{getEChartsTheme:e,registerChart:t,refreshAllCharts:d}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
      <div class="sidebar" :class="{ collapsed: sidebarCollapsed }">
        <div class="sidebar-logo">
          <svg class="sidebar-logo-img" viewBox="0 0 100 100" width="26" height="26" aria-label="量化日历 logo" role="img">
            <!-- v3.22-logo: 蓝黄红三柱 + 背景/边框随主题 -->
            <rect width="100" height="100" rx="20" fill="var(--logo-bg)"/>
            <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"/>
            <line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
            <rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"/>
            <rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"/>
            <rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"/>
            <rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"/>
            <path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
          </svg>
          <h2>{{ t('login.title') }}</h2>
        </div>
        <div class="sidebar-nav">
          <div v-for="menu in menus" :key="menu.key" class="nav-item" :class="{active: currentPage === menu.key}"
               @click="navigate(menu)" tabindex="0" role="button"
               :aria-label="menu.name" :aria-current="currentPage === menu.key ? 'page' : null"
               @keydown.enter.prevent="navigate(menu)" @keydown.space.prevent="navigate(menu)">
            <span class="nav-icon" v-html="sanitizeHtml(menu.icon)"></span>
            <span>{{ menu.name }}</span>
          </div>
        </div>
        <div class="sidebar-collapse-btn" @click="toggle" :title="sidebarCollapsed ? '展开侧边栏' : '折叠侧边栏'"
             tabindex="0" role="button" :aria-expanded="!sidebarCollapsed" aria-label="折叠/展开侧边栏"
             @keydown.enter.prevent="toggle" @keydown.space.prevent="toggle">
        </div>
      </div>
    `,setup(){const f=e("qcState");try{const p=localStorage.getItem("quant_sidebar_collapsed");p!==null&&f.sidebarCollapsed&&(f.sidebarCollapsed.value=p==="1")}catch{}if(!f)return{};const t=async p=>{if(window.__quantGoPage){await window.__quantGoPage(p.key,p.subPages[0]||"");return}f.currentPage.value=p.key,f.currentSubPage.value=p.subPages[0]||""},d=()=>{f.sidebarCollapsed.value=!f.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",f.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:f.menus,currentPage:f.currentPage,sidebarCollapsed:f.sidebarCollapsed,navigate:t,toggle:d,sanitizeHtml:f.sanitizeHtml,keyClick:f.keyClick,t:f.t}}}})();const Sa={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,f={"layout-dashboard":Fv,calendar:Vv,bot:jv,"flask-conical":Ov,zap:Nv,settings:Iv,"chevron-down":Lv,"chevron-right":Av,"chevron-left":zv,menu:Rv,search:Pv,bell:Dv,sun:Tv,moon:Mv,user:Ev,"user-round":qv,home:Cv,x:Sv,database:xv,activity:_v,clock:kv,"bar-chart-3":wv,shield:bv,"hard-drive":yv,"file-text":hv,users:gv,cpu:fv,"pie-chart":pv,info:mv,"log-out":vv,palette:uv,languages:dv,refresh:cv,download:rv,"external-link":ov,command:lv,sparkles:iv,"trending-up":nv,"trending-down":sv,"circle-dot":av,check:tv,"alert-triangle":ev,loader:Zu,"arrow-left":Xu,"arrow-right":$u,eye:Qu,"eye-off":Ju,lock:Yu,"sliders-horizontal":Gu,play:Uu,history:Wu,layers:Ku,"line-chart":Bu,target:Hu,"search-check":Fu,star:Vu,"message-circle":ju,"calendar-days":Ou,"calendar-range":Nu,"calendar-check":Iu,brain:Lu,lightbulb:Au,"octagon-x":zu,flag:Ru,package:Pu,"clipboard-list":Du,pin:Tu,"radio-tower":Mu,gauge:Eu,landmark:qu,"candlestick-chart":Cu,wallet:Su,"badge-check":xu,key:_u,factory:ku,trophy:wu,rocket:bu,flame:yu,"map-pin":hu,"scroll-text":gu,"book-open":fu,dna:pu,"bar-chart":mu,plus:vu,"star-off":uu,upload:du,gem:cu,"folder-open":ru,link:ou,save:lu,"trash-2":iu,pause:nu,"help-circle":su,"play-circle":au,pencil:tu,folder:eu,code:Zd,sprout:Xd,wheat:$d,snowflake:Qd,fuel:Jd,banknote:Yd,send:Gd,inbox:Ud,"wifi-off":Wd,"check-circle-2":Kd,"x-circle":Bd},t=()=>f[e.name]||f["circle-dot"];return(d,p)=>(me(),pa(Dd(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ca=(a,e)=>{const f=a.__vccOpts||a;for(const[t,d]of e)f[t]=d;return f},Hv={name:"qc-sidebar",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=ot(()=>a.menus&&a.menus.value||[]),f=ot(()=>a.currentPage&&a.currentPage.value||""),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),d=ot({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:C=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=C)}}),p=Lt({}),A={research:"量化投研",platform:"平台管理"},g=["research","platform"],r=C=>f.value===C.key,w=(C,c)=>f.value===C.key&&a.currentSubPage&&a.currentSubPage.value===c,i=C=>Array.isArray(C.subPages)&&C.subPages.length>1,S=(C,c)=>a.subPageNames&&a.subPageNames[c]||c;function b(C){!i(C)||d.value||(p.value[C.key]=!p.value[C.key])}function M(){e.value.forEach(C=>{p.value[C.key]===void 0&&(p.value[C.key]=r(C))})}async function _(C,c){const n=c||C.subPages&&C.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(C.key,n):(a.currentPage.value=C.key,a.currentSubPage&&(a.currentSubPage.value=n)),a.navigateTo&&a.navigateTo(C.key,n)}function z(){d.value=!d.value;try{localStorage.setItem("sidebar_collapsed",d.value?"1":"0")}catch{}}function F(C){if(C.ctrlKey&&C.key.toLowerCase()==="b"&&(C.preventDefault(),z()),!C.ctrlKey&&!C.metaKey&&!C.altKey&&(C.key==="ArrowDown"||C.key==="ArrowUp")){const c=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),n=c.indexOf(document.activeElement);if(n>=0){C.preventDefault();const u=c[(n+(C.key==="ArrowDown"?1:c.length-1))%c.length];u&&u.focus()}}}return Ba(()=>{M(),document.addEventListener("keydown",F)}),rs(()=>document.removeEventListener("keydown",F)),{state:a,menus:e,currentPage:f,navMode:t,sidebarCollapsed:d,expandedMenus:p,GROUP_LABELS:A,GROUPS:g,isActive:r,isChildActive:w,hasChildren:i,subLabel:S,toggleSubmenu:b,navigate:_,toggleCollapse:z}}},Bv={class:"qc-sidebar-logo"},Kv={key:0,class:"qc-logo-text"},Wv={class:"qc-sidebar-nav"},Uv={key:0,class:"qc-nav-group"},Gv={key:0,class:"qc-nav-group-label"},Yv=["href","aria-current","onClick"],Jv={key:0,class:"qc-sidebar-label"},Qv={key:1,class:"qc-nav-badge"},$v=["aria-expanded","aria-controls","onClick"],Xv=["id"],Zv=["href","aria-current","onClick"],em={class:"qc-sidebar-child-label"},tm={class:"qc-sidebar-footer"},am=["aria-expanded","aria-label","title"];function sm(a,e,f,t,d,p){const A=Zt("AppIcon"),g=Zt("el-tooltip");return me(),be("nav",{class:dt(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Ee("div",Bv,[e[1]||(e[1]=Pd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Be("",!0):(me(),be("span",Kv,Ke(t.state.t("login.title")),1))]),Ee("div",Wv,[(me(!0),be(vt,null,qt(t.GROUPS,r=>(me(),be(vt,{key:r},[t.menus.some(w=>w.group===r)?(me(),be("div",Uv,[t.sidebarCollapsed?Be("",!0):(me(),be("span",Gv,Ke(t.GROUP_LABELS[r]),1)),(me(!0),be(vt,null,qt(t.menus.filter(w=>w.group===r),w=>(me(),be(vt,{key:w.key},[Ee("div",{class:dt(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(w),"is-child-open":t.navMode==="tree"&&t.expandedMenus[w.key]}])},[ut(g,{content:w.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:ma(()=>[Ee("a",{class:dt(["qc-sidebar-link",{"is-active":t.isActive(w)}]),href:"#"+w.key,"aria-current":t.isActive(w)?"page":null,onClick:Vt(i=>t.navigate(w),["prevent"])},[ut(A,{name:w.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Be("",!0):(me(),be("span",Jv,Ke(w.name),1)),!t.sidebarCollapsed&&w.badge?(me(),be("span",Qv,Ke(w.badge),1)):Be("",!0)],10,Yv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(w)?(me(),be("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":t.expandedMenus[w.key]}]),"aria-expanded":!!t.expandedMenus[w.key],"aria-controls":"submenu-"+w.key,"aria-label":"展开子菜单",onClick:i=>t.toggleSubmenu(w)},[ut(A,{name:"chevron-down",size:14})],10,$v)):Be("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(w)&&t.expandedMenus[w.key]?(me(),be("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+w.key},[(me(!0),be(vt,null,qt(w.subPages,i=>(me(),be("a",{key:i,class:dt(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(w,i)}]),href:"#"+w.key+"-"+i,"aria-current":t.isChildActive(w,i)?"page":null,onClick:Vt(S=>t.navigate(w,i),["prevent"])},[Ee("span",em,Ke(t.subLabel(w,i)),1)],10,Zv))),128))],8,Xv)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),Ee("div",tm,[Ee("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...r)=>t.toggleCollapse&&t.toggleCollapse(...r))},[ut(A,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,am)])],2)}const nm=Ca(Hv,[["render",sm]]),im={name:"qc-header",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=Lt(!1),f=ot(()=>a.currentUser&&a.currentUser.value||null),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),d=ot(()=>{const de=a.currentPage&&a.currentPage.value,J=(a.menus&&a.menus.value||[]).find(oe=>oe.key===de);return!!(J&&J.subPages&&J.subPages.length)}),p=ot(()=>{const de=a.currentPage&&a.currentPage.value,J=a.currentPageName&&a.currentPageName.value;if(J)return J;const oe=(a.menus&&a.menus.value||[]).find(Pe=>Pe.key===de);return oe&&oe.name||de||""}),A=ot(()=>{const de=a.currentSubPage&&a.currentSubPage.value;return de&&a.subPageNames&&a.subPageNames[de]||de||""}),g=Lt(typeof window<"u"?window.innerWidth<768:!1);function r(){g.value=window.innerWidth<768}Ba(()=>window.addEventListener("resize",r)),rs(()=>window.removeEventListener("resize",r));const w=Lt(!1),i=ot(()=>{const de=a.currentSubPage&&a.currentSubPage.value;return de&&a.subPageNames&&a.subPageNames[de]||de||""}),S=ot(()=>{const de=a.currentPage&&a.currentPage.value,J=(a.menus&&a.menus.value||[]).find(oe=>oe.key===de);return(J&&J.subPages||[]).map(oe=>({key:oe,label:a.subPageNames&&a.subPageNames[oe]||oe}))});function b(){w.value=!w.value}function M(){w.value=!1}function _(de){w.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,de)}const z=ot(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),F=Lt(!1),C=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],c=ot(()=>{const de=C.find(J=>J.value===t.value);return de&&de.label||t.value});function n(){F.value=!F.value}function u(){F.value=!1}function l(de){F.value=!1,a.setNavMode&&a.setNavMode(de)}const x=ot({get:()=>a.searchQuery&&a.searchQuery.value||"",set:de=>{a.searchQuery&&(a.searchQuery.value=de)}}),E=Lt(!1),O=Lt([]),X=Lt(!1),R=Lt(!1);function q(){const de=localStorage.getItem("quant_token")||"";return de?{Authorization:"Bearer "+de,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function I(){X.value=!0,R.value=!1;try{const J=await(await fetch("/api/alerts/history?limit=8",{headers:q()})).json();J&&J.success?O.value=J.history||[]:O.value=[]}catch{R.value=!0,O.value=[]}finally{X.value=!1}}function V(){E.value=!E.value,E.value&&I()}function se(){E.value=!1}function Y(){E.value=!1,a.activateTab&&a.activateTab("system","notification")}const ee=Lt(!1),j=a.themeHues||[45,220,0,140,270,320],H=ot(()=>a.themeHue&&a.themeHue.value||45),N=ot(()=>a.themeMode&&a.themeMode.value||"system");function k(de){return a.hueColor?a.hueColor(de):"hsl("+de+", 75%, 42%)"}function D(de){return a.hueName?a.hueName(de):String(de)}function ce(){ee.value=!ee.value}function U(){ee.value=!1}function y(de){a.changeThemeMode&&a.changeThemeMode(de)}function o(de){a.changeThemeHue&&a.changeThemeHue(de)}function T(){a.changeThemeMode&&a.changeThemeMode(z.value?"light":"dark")}function m(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function W(){e.value=!e.value}function ue(){e.value=!1}function Z(de){return()=>{ue(),de&&de()}}function P(){ue(),a.handleLogout&&a.handleLogout()}const G=ot(()=>a.marketData&&a.marketData.value||{}),re=Lt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:G,bannerDismissed:re,dismissBanner:()=>{re.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:f,isDark:z,searchQuery:x,navMode:t,crumbRoot:p,crumbSub:A,hasToptabs:d,toggleThemeQuick:T,toggleSidebar:m,openUserMenu:W,closeUserMenu:ue,menuItem:Z,handleLogout:P,openBellMenu:E,notifItems:O,notifLoading:X,notifError:R,toggleBell:V,closeBell:se,goNotificationCenter:Y,openThemeMenu:ee,themeHues:j,themeHue:H,themeMode:N,hueColor:k,hueName:D,toggleThemeMenu:ce,closeThemeMenu:U,pickThemeMode:y,pickThemeHue:o,openNavModeMenu:F,NAV_MODES:C,navModeLabel:c,toggleNavModeMenu:n,closeNavModeMenu:u,pickNavMode:l,isMobile:g,openSubnavPicker:w,currentSubLabel:i,subnavOptions:S,toggleSubnavPicker:b,closeSubnavPicker:M,pickSubnav:_}}},lm={class:"qc-header-wrap"},om={key:0,class:"non-trading-banner",role:"status"},rm={class:"qc-header"},cm={class:"qc-header-left"},dm=["aria-label"],um={key:0,class:"qc-header-subnav"},vm=["aria-expanded"],mm={class:"qc-subnav-picker-label"},pm={key:0,class:"qc-subnav-picker-menu",role:"menu"},fm=["onClick"],gm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},hm={class:"qc-crumb qc-crumb-root"},ym={class:"qc-crumb qc-crumb-sub"},bm={key:1,class:"qc-crumb qc-crumb-root"},wm={class:"qc-header-center"},km={key:0,class:"qc-search-sublabel"},_m={class:"qc-header-right"},xm={class:"qc-hdr-pop"},Sm=["aria-expanded"],Cm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},qm={key:0,class:"qc-bell-state"},Em={key:1,class:"qc-bell-state"},Mm={key:2,class:"qc-bell-state"},Tm={key:3,class:"qc-bell-list"},Dm={class:"qc-bell-item-title"},Pm={class:"qc-bell-item-meta"},Rm={key:0},zm={class:"qc-bell-item-time"},Am={class:"qc-hdr-pop"},Lm=["aria-expanded"],Im={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Nm={class:"qc-theme-modes"},Om=["onClick"],jm={class:"qc-theme-swatches"},Vm=["title","aria-label","onClick"],Fm={key:0,class:"qc-theme-swatch-check"},Hm={class:"qc-theme-custom-label"},Bm={key:0,class:"qc-navmode-switch"},Km=["aria-label","title","aria-expanded"],Wm={key:0,class:"qc-navmode-menu",role:"menu"},Um=["onClick","onKeydown"],Gm={class:"qc-navmode-item-main"},Ym={class:"qc-user-menu"},Jm=["aria-label","aria-expanded"],Qm={key:0,class:"qc-user-dropdown",role:"menu"},$m={class:"qc-user-dropdown-header"},Xm={class:"qc-user-dropdown-name"},Zm={key:0,class:"qc-user-dropdown-chip"};function ep(a,e,f,t,d,p){var S,b,M,_,z,F,C;const A=Zt("AppIcon"),g=Zt("qc-top-tabs"),r=Zt("el-autocomplete"),w=Zt("el-slider"),i=Rd("click-outside");return me(),be("div",lm,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(me(),be("div",om,[ut(A,{name:"alert-triangle",size:14}),e[15]||(e[15]=Ee("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),Ee("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...c)=>t.dismissBanner&&t.dismissBanner(...c)),"aria-label":"关闭提示"},"×")])):Be("",!0),Ee("header",rm,[Ee("div",cm,[Ee("button",{class:"qc-icon-btn","aria-label":(S=t.state.sidebarCollapsed)!=null&&S.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},[ut(A,{name:"menu",size:20})],8,dm),t.isMobile?La((me(),be("div",um,[Ee("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...c)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...c))},[Ee("span",mm,Ke(t.currentSubLabel||"二级"),1),ut(A,{name:"chevron-down",size:14})],8,vm),t.openSubnavPicker?(me(),be("div",pm,[(me(!0),be(vt,null,qt(t.subnavOptions,c=>(me(),be("div",{key:c.key,class:dt(["qc-subnav-picker-item",{"is-active":c.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:n=>t.pickSubnav(c.key)},Ke(c.label),11,fm))),128))])):Be("",!0)])),[[i,t.closeSubnavPicker]]):Be("",!0),t.navMode==="tree"&&!t.isMobile?(me(),be("div",gm,[Ee("span",hm,Ke(t.crumbRoot),1),t.crumbSub?(me(),be(vt,{key:0},[e[16]||(e[16]=Ee("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Ee("span",ym,Ke(t.crumbSub),1)],64)):Be("",!0)])):Be("",!0),t.navMode==="toptab"&&!t.isMobile?(me(),be(vt,{key:2},[t.hasToptabs?(me(),pa(g,{key:0})):(me(),be("span",bm,Ke(t.crumbRoot),1))],64)):Be("",!0)]),Ee("div",wm,[ut(r,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=c=>t.searchQuery=c),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:ma(()=>[ut(A,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ma(()=>[...e[17]||(e[17]=[Ee("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ma(c=>{var n,u,l,x,E;return[Ee("span",null,Ke((n=c==null?void 0:c.item)==null?void 0:n.icon)+" "+Ke(((u=c==null?void 0:c.item)==null?void 0:u.label)||((l=c==null?void 0:c.item)==null?void 0:l.name)),1),(x=c==null?void 0:c.item)!=null&&x.subLabel?(me(),be("span",km,Ke((E=c==null?void 0:c.item)==null?void 0:E.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Ee("div",_m,[La((me(),be("div",xm,[Ee("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...c)=>t.toggleBell&&t.toggleBell(...c))},[ut(A,{name:"bell",size:20})],8,Sm),t.openBellMenu?(me(),be("div",Cm,[e[18]||(e[18]=Ee("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(me(),be("div",qm,"加载中...")):t.notifError?(me(),be("div",Em,"加载失败")):t.notifItems.length?(me(),be("div",Tm,[(me(!0),be(vt,null,qt(t.notifItems,(c,n)=>(me(),be("div",{key:c.id||n,class:dt(["qc-bell-item",{"is-fail":c.ok===0}])},[Ee("div",Dm,Ke(c.title||c.event_type||"事件"),1),Ee("div",Pm,[xa(Ke(c.channel||""),1),c.recipient?(me(),be("span",Rm," · "+Ke(c.recipient),1)):Be("",!0),Ee("span",zm,Ke(c.created_at||""),1)])],2))),128))])):(me(),be("div",Mm,"暂无通知")),Ee("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...c)=>t.goNotificationCenter&&t.goNotificationCenter(...c))},"前往通知中心 →")])):Be("",!0)])),[[i,t.closeBell]]),La((me(),be("div",Am,[Ee("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...c)=>t.toggleThemeMenu&&t.toggleThemeMenu(...c))},[ut(A,{name:"palette",size:20})],8,Lm),t.openThemeMenu?(me(),be("div",Im,[e[19]||(e[19]=Ee("div",{class:"qc-theme-section-label"},"外观模式",-1)),Ee("div",Nm,[(me(),be(vt,null,qt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],c=>Ee("button",{key:c.k,class:dt(["qc-theme-mode",{"is-active":t.themeMode===c.k}]),onClick:n=>t.pickThemeMode(c.k)},Ke(c.n),11,Om)),64))]),e[20]||(e[20]=Ee("div",{class:"qc-theme-section-label"},"主题色",-1)),Ee("div",jm,[(me(!0),be(vt,null,qt(t.themeHues,c=>(me(),be("button",{key:c,class:dt(["qc-theme-swatch",{"is-active":t.themeHue===c}]),style:zd({background:t.hueColor(c)}),title:t.hueName(c),"aria-label":t.hueName(c),onClick:n=>t.pickThemeHue(c)},[t.themeHue===c?(me(),be("span",Fm,"✓")):Be("",!0)],14,Vm))),128))]),ut(w,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Ee("div",Hm,"自定义 "+Ke(t.themeHue)+"°",1)])):Be("",!0)])),[[i,t.closeThemeMenu]]),t.isMobile?Be("",!0):La((me(),be("div",Bm,[Ee("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...c)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...c))},[ut(A,{name:"layers",size:20})],8,Km),t.openNavModeMenu?(me(),be("div",Wm,[(me(!0),be(vt,null,qt(t.NAV_MODES,c=>(me(),be("div",{key:c.value,class:dt(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===c.value}]),role:"menuitem",tabindex:"0",onClick:n=>t.pickNavMode(c.value),onKeydown:[va(Vt(n=>t.pickNavMode(c.value),["prevent"]),["enter"]),va(Vt(n=>t.pickNavMode(c.value),["prevent"]),["space"])]},[Ee("div",Gm,[Ee("span",null,Ke(c.label),1),t.navMode===c.value?(me(),pa(A,{key:0,name:"check",size:14})):Be("",!0)])],42,Um))),128))])):Be("",!0)])),[[i,t.closeNavModeMenu]]),La((me(),be("div",Ym,[Ee("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((b=t.currentUser)==null?void 0:b.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...c)=>t.openUserMenu&&t.openUserMenu(...c))},Ke((((M=t.currentUser)==null?void 0:M.username)||"A").charAt(0).toUpperCase()),9,Jm),t.showUserMenu?(me(),be("div",Qm,[Ee("div",$m,[Ee("span",Xm,Ke((_=t.currentUser)==null?void 0:_.username),1),((z=t.currentUser)==null?void 0:z.role)==="guest"?(me(),be("span",Zm,"访客")):Be("",!0)]),((F=t.currentUser)==null?void 0:F.role)==="admin"?(me(),be("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=c=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=va(Vt(c=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[ut(A,{name:"settings",size:16}),e[21]||(e[21]=xa(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((C=t.currentUser)==null?void 0:C.role)!=="guest"?(me(),be("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=c=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=va(Vt(c=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[ut(A,{name:"lock",size:16}),e[22]||(e[22]=xa(" 修改密码 ",-1))],32)):Be("",!0),e[24]||(e[24]=Ee("div",{class:"qc-user-dropdown-divider"},null,-1)),Ee("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...c)=>t.handleLogout&&t.handleLogout(...c)),onKeydown:e[14]||(e[14]=va(Vt((...c)=>t.handleLogout&&t.handleLogout(...c),["prevent"]),["enter"]))},[ut(A,{name:"log-out",size:16}),e[23]||(e[23]=xa(" 退出登录 ",-1))],32)])):Be("",!0)])),[[i,t.closeUserMenu]])])])])}const tp=Ca(im,[["render",ep]]),ap=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],sp={name:"qc-subnav",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=ot(()=>a.currentPage&&a.currentPage.value||""),f=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),d=Lt({}),p=ot(()=>a.menus&&a.menus.value||[]),A=ot(()=>p.value.find(C=>C.key===e.value)||null),g=ot(()=>A.value&&A.value.subPages||[]),r=ot(()=>a.currentPageName&&a.currentPageName.value||e.value),w=C=>a.subPageNames&&a.subPageNames[C]||C,i=C=>f.value===C;function S(C){a.openTab?a.openTab(e.value,C):a.currentSubPage&&(a.currentSubPage.value=C);try{localStorage.setItem("quant_last_subpage",C)}catch{}}function b(C){a.openTab?a.openTab(e.value,C.key):a.currentSubPage&&(a.currentSubPage.value=C.key);try{localStorage.setItem("quant_last_subpage",C.key)}catch{}}function M(C){d.value[C]=!d.value[C]}const _={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:e,currentSubPage:f,navMode:t,subPages:g,currentMenu:A,collapsedGroups:d,pageTitle:r,subLabel:w,isSubActive:i,goSub:S,goSystemItem:b,toggleGroup:M,SYSTEM_GROUPS:ap,subIcon:(C,c)=>_[C]&&_[C][c]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},np={key:0,class:"qc-subnav-column","aria-label":"二级导航"},ip={class:"qc-subnav-column-header"},lp={class:"qc-subnav-current-label"},op={class:"qc-subnav-column-body"},rp=["onClick"],cp=["href","onClick"],dp={class:"qc-subnav-group-label"},up=["href","onClick"],vp=["href","onClick"];function mp(a,e,f,t,d,p){const A=Zt("AppIcon");return t.navMode==="subnav"?(me(),be("aside",np,[Ee("div",ip,[Ee("span",lp,Ke(t.pageTitle),1)]),Ee("div",op,[t.currentPage==="system"?(me(!0),be(vt,{key:0},qt(t.SYSTEM_GROUPS,g=>(me(),be("div",{key:g.label,class:"qc-subnav-group"},[Ee("div",{class:"qc-subnav-group-label",onClick:r=>t.toggleGroup(g.label)},[Ee("span",null,Ke(g.label),1),ut(A,{name:"chevron-down",size:12,class:dt({"is-open":!t.collapsedGroups[g.label]})},null,8,["class"])],8,rp),t.collapsedGroups[g.label]?Be("",!0):(me(!0),be(vt,{key:0},qt(g.items,r=>(me(),be("a",{key:r.key,class:dt(["qc-subnav-item",{"is-active":t.isSubActive(r.key)}]),href:"#"+r.key,onClick:Vt(w=>t.goSystemItem(r),["prevent"])},[ut(A,{name:r.icon,size:16},null,8,["name"]),Ee("span",null,Ke(r.label),1)],10,cp))),128))]))),128)):t.currentPage==="shortterm"?(me(!0),be(vt,{key:1},qt(t.SHORTTERM_GROUPS,g=>(me(),be("div",{key:g.label,class:"qc-subnav-group"},[Ee("div",dp,[Ee("span",null,Ke(g.label),1)]),(me(!0),be(vt,null,qt(g.items,r=>(me(),be("a",{key:r,class:dt(["qc-subnav-item",{"is-active":t.isSubActive(r)}]),href:"#"+t.currentPage+"/"+r,onClick:Vt(w=>t.goSub(r),["prevent"])},[ut(A,{name:t.subIcon(t.currentPage,r),size:16},null,8,["name"]),Ee("span",null,Ke(t.subLabel(r)),1)],10,up))),128))]))),128)):(me(!0),be(vt,{key:2},qt(t.subPages,g=>(me(),be("a",{key:g,class:dt(["qc-subnav-item",{"is-active":t.isSubActive(g)}]),href:"#"+t.currentPage+"/"+g,onClick:Vt(r=>t.goSub(g),["prevent"])},[ut(A,{name:t.subIcon(t.currentPage,g),size:16},null,8,["name"]),Ee("span",null,Ke(t.subLabel(g)),1)],10,vp))),128))])])):Be("",!0)}const pp=Ca(sp,[["render",mp]]),fp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],gp={name:"qc-mobile-nav",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=Lt(!1),f=Lt(null),t=Lt({}),d=ot(()=>a.menus&&a.menus.value||[]),p=ot(()=>a.currentPage&&a.currentPage.value||""),A={research:"量化投研",platform:"平台管理"},g=["research","platform"];function r(c){return Array.isArray(c.subPages)&&c.subPages.length>0}function w(c){r(c)&&(t.value[c.key]=!t.value[c.key])}function i(c,n){return p.value===c.key&&a.currentSubPage&&a.currentSubPage.value===n}function S(c){return a.subPageNames&&a.subPageNames[c]||c}async function b(c){const n=d.value.find(l=>l.key===c.key),u=n&&n.subPages&&n.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(c.key,u):(a.currentPage.value=c.key,a.currentSubPage&&(a.currentSubPage.value=u)),a.navigateTo&&a.navigateTo(c.key,u)}function M(c,n){e.value=!1;const u=n||c.subPages&&c.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(c.key,u):(a.currentPage.value=c.key,a.currentSubPage&&(a.currentSubPage.value=u)),a.navigateTo&&a.navigateTo(c.key,u)}function _(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function z(){e.value=!1;const c=document.querySelector(".qc-header .qc-icon-btn");c&&c.focus()}function F(c){c.detail&&c.detail.open&&_()}function C(c){e.value&&c.key==="Escape"&&z()}return Ba(()=>{window.addEventListener("qc:drawer",F),document.addEventListener("keydown",C)}),rs(()=>{window.removeEventListener("qc:drawer",F),document.removeEventListener("keydown",C)}),{state:a,TABS:fp,menus:d,currentPage:p,drawerOpen:e,drawerFocusRef:f,drawerExpanded:t,GROUP_LABELS:A,GROUPS:g,hasSub:r,toggleDrawerMenu:w,isDrawerSubActive:i,subLabel:S,goTab:b,goMenu:M,openDrawer:_,closeDrawer:z}}},hp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},yp=["aria-current","onClick"],bp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},wp={class:"qc-drawer-header"},kp={class:"qc-drawer-brand"},_p={class:"qc-drawer-body"},xp={key:0},Sp={class:"qc-nav-group-label"},Cp=["href","aria-current","onClick"],qp={class:"qc-sidebar-label"},Ep=["aria-expanded","onClick"],Mp={key:0,class:"qc-drawer-children"},Tp=["href","onClick"],Dp={class:"qc-drawer-footer"},Pp=["title"];function Rp(a,e,f,t,d,p){var g,r;const A=Zt("AppIcon");return me(),be(vt,null,[Ee("nav",hp,[(me(!0),be(vt,null,qt(t.TABS,w=>(me(),be("button",{key:w.key,class:dt(["qc-mobile-tab",{"is-active":t.currentPage===w.key}]),"aria-current":t.currentPage===w.key?"page":null,onClick:i=>t.goTab(w)},[ut(A,{name:w.icon,size:22},null,8,["name"]),Ee("span",null,Ke(w.label),1)],10,yp))),128))]),(me(),pa(Ad,{to:"body"},[t.drawerOpen?(me(),be("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...w)=>t.closeDrawer&&t.closeDrawer(...w))})):Be("",!0),t.drawerOpen?(me(),be("div",bp,[Ee("div",wp,[Ee("div",kp,[e[4]||(e[4]=Ee("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Ee("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Ee("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Ee("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Ee("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Ee("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Ee("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Ee("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Ee("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Ee("span",null,Ke(t.state.t("login.title")),1)]),Ee("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...w)=>t.closeDrawer&&t.closeDrawer(...w))},[ut(A,{name:"x",size:18})])]),Ee("div",_p,[(me(!0),be(vt,null,qt(t.GROUPS,w=>(me(),be(vt,{key:w},[t.menus.some(i=>i.group===w)?(me(),be("div",xp,[Ee("div",Sp,Ke(t.GROUP_LABELS[w]),1),(me(!0),be(vt,null,qt(t.menus.filter(i=>i.group===w),i=>(me(),be("div",{key:i.key,class:"qc-drawer-menu"},[Ee("div",{class:dt(["qc-drawer-menu-row",{"is-active":t.currentPage===i.key}])},[Ee("a",{class:dt(["qc-sidebar-item",{"is-active":t.currentPage===i.key}]),href:"#"+i.key,"aria-current":t.currentPage===i.key?"page":null,onClick:Vt(S=>t.hasSub(i)?t.toggleDrawerMenu(i):t.goMenu(i),["prevent"])},[ut(A,{name:i.iconName||"",size:18},null,8,["name"]),Ee("span",qp,Ke(i.name),1)],10,Cp),t.hasSub(i)?(me(),be("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[i.key]}]),"aria-expanded":!!t.drawerExpanded[i.key],"aria-label":"展开子菜单",onClick:S=>t.toggleDrawerMenu(i)},[ut(A,{name:"chevron-down",size:14})],10,Ep)):Be("",!0)],2),t.drawerExpanded[i.key]?(me(),be("div",Mp,[(me(!0),be(vt,null,qt(i.subPages,S=>(me(),be("a",{key:S,class:dt(["qc-subnav-item",{"is-active":t.isDrawerSubActive(i,S)}]),href:"#"+i.key+"/"+S,onClick:Vt(b=>t.goMenu(i,S),["prevent"])},[Ee("span",null,Ke(t.subLabel(S)),1)],10,Tp))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),Ee("div",Dp,[Ee("button",{class:"qc-icon-btn",title:((g=t.state.currentTheme)==null?void 0:g.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=w=>{var i;return t.state.changeThemeMode&&t.state.changeThemeMode(((i=t.state.currentTheme)==null?void 0:i.value)==="dark"?"light":"dark")})},[ut(A,{name:((r=t.state.currentTheme)==null?void 0:r.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Pp),Ee("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=w=>t.state.handleLogout&&t.state.handleLogout())},[ut(A,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const zp=Ca(gp,[["render",Rp]]),Ap={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:f}){const t=Ta("qcState");function d(i){e("select",i)}function p(i){const S=i.strategy_names||i.strategies||[],b=S.slice(0,3),M=S.length>3?S.length-3:0,_=b.map(z=>({text:z,more:!1}));return M&&_.push({text:"+"+M,more:!0}),_}function A(i){const S=Number(i);return isFinite(S)?S.toFixed(2):"—"}function g(i){const S=Number(i);return isFinite(S)?(S>0?"+":"")+S.toFixed(2)+"%":"—"}function r(i){const S=Number(i.consensus_level);return isFinite(S)?Math.round(S*100):0}function w(i){const S=Number(i&&i.consensus_level);return isFinite(S)&&S>0}return{state:t,slots:f,select:d,displayTags:p,fmtPrice:A,fmtChange:g,pctOf:r,hasConsensus:w}}},Lp={class:"qc-stock-list"},Ip=["data-copy-code","aria-label","onClick","onKeydown"],Np={key:0,class:"qc-stock-rank"},Op={class:"qc-stock-info"},jp={class:"qc-stock-code"},Vp={class:"qc-stock-code-num"},Fp={key:0,class:"qc-stock-status is-new"},Hp={key:1,class:"qc-stock-status is-out"},Bp={class:"qc-stock-name"},Kp={key:0,class:"qc-stock-consensus"},Wp={key:1,class:"qc-stock-tags"},Up={key:2,class:"qc-stock-badge"},Gp={key:3,class:"qc-stock-data"},Yp={class:"qc-stock-price"},Jp={key:4,class:"qc-stock-extra"},Qp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},$p=["data-copy-code","aria-label","onClick","onKeydown"],Xp={key:0,class:"qc-stock-rank"},Zp={class:"qc-stock-info"},ef={class:"qc-stock-code"},tf={class:"qc-stock-code-num"},af={key:0,class:"qc-stock-status is-new"},sf={key:1,class:"qc-stock-status is-out"},nf={class:"qc-stock-name"},lf={key:0,class:"qc-stock-consensus"},of={key:1,class:"qc-stock-tags"},rf={key:2,class:"qc-stock-badge"},cf={key:3,class:"qc-stock-data"},df={class:"qc-stock-price"},uf={key:4,class:"qc-stock-extra"},vf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function mf(a,e,f,t,d,p){const A=Zt("qc-state-panel"),g=Zt("qc-virtual-list");return me(),be("div",Lp,[f.loading?(me(),pa(A,{key:0,type:"loading"})):f.items.length?(me(),be(vt,{key:2},[f.virtual?(me(),pa(g,{key:0,items:f.items,"row-height":f.rowHeight},{default:ma(({item:r,index:w})=>[Ee("div",{class:dt(["qc-stock-row",{"is-active":f.activeCode===r.code}]),"data-copy-code":f.copyCode?r.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(r.name||"")+" "+(r.code||""),onClick:i=>t.select(r),onKeydown:[va(Vt(i=>t.select(r),["prevent"]),["enter"]),va(Vt(i=>t.select(r),["prevent"]),["space"])]},[f.showRank?(me(),be("div",Np,Ke(w+1),1)):Be("",!0),Ee("div",Op,[Ee("div",jp,[Ee("span",Vp,Ke(r.code),1),r.status==="new"?(me(),be("span",Fp,Ke(f.statusText.new),1)):r.status==="out"?(me(),be("span",Hp,Ke(f.statusText.out),1)):Be("",!0)]),Ee("div",Bp,[xa(Ke(r.name)+" ",1),la(a.$slots,"name-suffix",{item:r,index:w})]),f.showConsensus&&t.hasConsensus(r)?(me(),be("span",Kp,Ke(t.pctOf(r))+"% 共识",1)):Be("",!0)]),(r.strategy_names||r.strategies)&&(r.strategy_names||r.strategies).length?(me(),be("div",Wp,[(me(!0),be(vt,null,qt(t.displayTags(r),i=>(me(),be("span",{key:i.text,class:dt(["qc-stock-tag",{"is-more":i.more}])},Ke(i.text),3))),128))])):Be("",!0),f.showConsensus?(me(),be("span",Up,Ke(r.strategy_count||0)+" 策略",1)):Be("",!0),f.showPrice&&r.price!=null?(me(),be("div",Gp,[Ee("span",Yp,Ke(t.fmtPrice(r.price)),1),Ee("span",{class:dt(["qc-stock-change",r.change_pct>0?"is-up":r.change_pct<0?"is-down":""])},Ke(t.fmtChange(r.change_pct)),3)])):Be("",!0),t.slots.extra?(me(),be("div",Jp,[la(a.$slots,"extra",{item:r,index:w})])):Be("",!0),t.slots.actions?(me(),be("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Vt(()=>{},["stop"]))},[la(a.$slots,"actions",{item:r,index:w})])):Be("",!0),t.slots.footer?(me(),be("div",Qp,[la(a.$slots,"footer",{item:r,index:w})])):Be("",!0)],42,Ip)]),_:3},8,["items","row-height"])):(me(!0),be(vt,{key:1},qt(f.items,(r,w)=>(me(),be("div",{key:r.code,class:dt(["qc-stock-row",{"is-active":f.activeCode===r.code}]),"data-copy-code":f.copyCode?r.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(r.name||"")+" "+(r.code||""),onClick:i=>t.select(r),onKeydown:[va(Vt(i=>t.select(r),["prevent"]),["enter"]),va(Vt(i=>t.select(r),["prevent"]),["space"])]},[f.showRank?(me(),be("div",Xp,Ke(w+1),1)):Be("",!0),Ee("div",Zp,[Ee("div",ef,[Ee("span",tf,Ke(r.code),1),r.status==="new"?(me(),be("span",af,Ke(f.statusText.new),1)):r.status==="out"?(me(),be("span",sf,Ke(f.statusText.out),1)):Be("",!0)]),Ee("div",nf,[xa(Ke(r.name)+" ",1),la(a.$slots,"name-suffix",{item:r,index:w})]),f.showConsensus&&t.hasConsensus(r)?(me(),be("span",lf,Ke(t.pctOf(r))+"% 共识",1)):Be("",!0)]),(r.strategy_names||r.strategies)&&(r.strategy_names||r.strategies).length?(me(),be("div",of,[(me(!0),be(vt,null,qt(t.displayTags(r),i=>(me(),be("span",{key:i.text,class:dt(["qc-stock-tag",{"is-more":i.more}])},Ke(i.text),3))),128))])):Be("",!0),f.showConsensus?(me(),be("span",rf,Ke(r.strategy_count||0)+" 策略",1)):Be("",!0),f.showPrice&&r.price!=null?(me(),be("div",cf,[Ee("span",df,Ke(t.fmtPrice(r.price)),1),Ee("span",{class:dt(["qc-stock-change",r.change_pct>0?"is-up":r.change_pct<0?"is-down":""])},Ke(t.fmtChange(r.change_pct)),3)])):Be("",!0),t.slots.extra?(me(),be("div",uf,[la(a.$slots,"extra",{item:r,index:w})])):Be("",!0),t.slots.actions?(me(),be("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Vt(()=>{},["stop"]))},[la(a.$slots,"actions",{item:r,index:w})])):Be("",!0),t.slots.footer?(me(),be("div",vf,[la(a.$slots,"footer",{item:r,index:w})])):Be("",!0)],42,$p))),128))],64)):(me(),pa(A,{key:1,type:"empty",title:f.emptyText},null,8,["title"]))])}const pf=Ca(Ap,[["render",mf]]),ff={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},gf={key:0,class:"split-divider","data-split-resize":""};function hf(a,e,f,t,d,p){return me(),be("div",{class:dt(["detail-split-wrap",[f.rootClass,{"detail-split":f.enabled}]]),"data-split-root":""},[Ee("div",{class:dt(["detail-split-list",[f.listClass,{"w-100":!f.enabled}]])},[la(a.$slots,"list")],2),f.enabled?(me(),be("div",gf)):Be("",!0),f.enabled?(me(),be("div",{key:1,class:dt(["detail-split-pane",f.paneClass])},[la(a.$slots,"pane")],2)):Be("",!0)],2)}const yf=Ca(ff,[["render",hf]]),cn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},bf=200,wf={name:"qc-top-tabs",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=ot(()=>a.currentPage&&a.currentPage.value||""),f=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ot(()=>a.menus&&a.menus.value||[]),d=ot(()=>{const n=t.value.find(u=>u.key===e.value);return n&&n.subPages||[]}),p=ot(()=>d.value.map(n=>({key:n,label:a.subPageNames&&a.subPageNames[n]||n,icon:cn[e.value]&&cn[e.value][n]||"circle-dot"}))),A=Lt(null),g=Lt(!1),r=Lt(!1),w=Lt(!1);let i=null,S=null;function b(){const n=A.value;n&&(r.value=n.scrollLeft>2,w.value=n.scrollLeft<n.scrollWidth-n.clientWidth-2)}function M(){const n=A.value;n&&(g.value=n.scrollWidth>n.clientWidth+2,b())}function _(n){const u=A.value;u&&u.scrollBy({left:n*bf,behavior:"smooth"})}function z(n){a.openTab?a.openTab(e.value,n):a.currentSubPage&&(a.currentSubPage.value=n)}function F(n){z(n),Id(()=>{const u=A.value;if(!u)return;const l=u.querySelector('[data-tab-key="'+n+'"]');l&&l.scrollIntoView({block:"nearest",inline:"nearest"})})}const C=ot(()=>{if(!g.value)return[];const n=A.value;if(!n)return[];const u=n.getBoundingClientRect(),l=new Set;return n.querySelectorAll(".qc-top-tab").forEach(x=>{const E=x.getBoundingClientRect();E.left>=u.left-2&&E.left<u.right-24&&l.add(x.getAttribute("data-tab-key"))}),p.value.filter(x=>!l.has(x.key))});function c(n,u){n.key==="ArrowLeft"?(n.preventDefault(),_(-1)):n.key==="ArrowRight"?(n.preventDefault(),_(1)):(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),z(u.key))}return Ba(()=>{M(),i=new ResizeObserver(()=>{clearTimeout(S),S=setTimeout(M,100)}),A.value&&i.observe(A.value),window.addEventListener("resize",M)}),Ld(()=>{i&&i.disconnect(),window.removeEventListener("resize",M),clearTimeout(S)}),{state:a,tabs:p,currentSubPage:f,go:z,scrollRef:A,hasOverflow:g,canScrollLeft:r,canScrollRight:w,scrollByStep:_,scrollToTab:F,hiddenTabs:C,onTabKeydown:c,updateScrollState:b}}},kf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},_f=["disabled"],xf=["data-tab-key","aria-selected","title","onClick","onKeydown"],Sf={class:"qc-top-tab-label"},Cf=["disabled"];function qf(a,e,f,t,d,p){const A=Zt("AppIcon"),g=Zt("el-dropdown-item"),r=Zt("el-dropdown-menu"),w=Zt("el-dropdown");return t.tabs.length?(me(),be("div",kf,[t.hasOverflow?(me(),be("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=i=>t.scrollByStep(-1))},"‹",8,_f)):Be("",!0),Ee("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...i)=>t.updateScrollState&&t.updateScrollState(...i))},[(me(!0),be(vt,null,qt(t.tabs,i=>(me(),be("div",{key:i.key,"data-tab-key":i.key,class:dt(["qc-top-tab",{"is-active":t.currentSubPage===i.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===i.key?"true":"false",title:i.label,onClick:S=>t.go(i.key),onKeydown:S=>t.onTabKeydown(S,i)},[ut(A,{name:i.icon,size:14},null,8,["name"]),Ee("span",Sf,Ke(i.label),1)],42,xf))),128))],544),t.hasOverflow?(me(),be("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=i=>t.scrollByStep(1))},"›",8,Cf)):Be("",!0),t.hasOverflow&&t.hiddenTabs.length?(me(),pa(w,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:ma(()=>[ut(r,null,{default:ma(()=>[(me(!0),be(vt,null,qt(t.hiddenTabs,i=>(me(),pa(g,{key:i.key,command:i.key,class:dt({"is-active":t.currentSubPage===i.key})},{default:ma(()=>[ut(A,{name:i.icon,size:14},null,8,["name"]),xa(" "+Ke(i.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ma(()=>[e[3]||(e[3]=Ee("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const Ef=Ca(wf,[["render",qf]]);(function(){const{ref:a,computed:e,inject:f}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
      <div class="global-header-root">
        <!-- v5.18 (F1): 非交易日全局提示条 -->
        <div v-if="true" class="non-trading-banner" role="status">
          <qc-icon name="alert-triangle" :size="14" />
          <span>今日非交易日 · 展示最近交易日 {{ marketData.date }} 数据</span>
          <button class="non-trading-banner-close" @click="dismissBanner" aria-label="关闭提示">×</button>
        </div>
        <div class="global-header">
          <div class="sub-nav-wrapper">
            <template v-for="menu in menus" :key="menu.key">
              <template v-if="currentPage === menu.key">
                <div v-for="sp in menu.subPages" :key="sp"
                     class="sub-nav-tab" :class="{active: currentSubPage === sp}"
                     @click="currentSubPage = sp" tabindex="0" role="tab"
                     :aria-selected="currentSubPage === sp"
                     @keydown.enter.prevent="currentSubPage = sp" @keydown.space.prevent="keyClick($event)">
                  {{ subTabLabel(menu, sp) }}
                </div>
              </template>
            </template>
          </div>

          <div class="global-search-wrapper">
            <el-autocomplete class="w-200" v-model="searchQuery" :fetch-suggestions="searchStocks" :placeholder="t('common.searchPlaceholder')" :trigger-on-focus="false" clearable size="small" @select="onSearchSelect">
              <template #default="slotProps">
                <!-- V6.7.1 (F-6.7.10): 建议图标经 <qc-icon> 渲染 Lucide, 不再输出 emoji/文本 -->
                <qc-icon v-if="slotProps?.item?.iconName" :name="slotProps?.item?.iconName" :size="14" />
                <span>{{ slotProps?.item?.label || slotProps?.item?.name }}</span>
                <span class="text-sm-secondary-ml8" v-if="slotProps?.item?.subLabel">{{ slotProps?.item?.subLabel }}</span>
              </template>
            </el-autocomplete>
          </div>

          <div class="header-date-area" v-if="currentPage === 'calendar'">
            <!-- V6.6.1 (PRD F-6.6.7): 日期选择器类型改由 currentView 驱动 (4 视图已合并为单子页) -->
            <el-date-picker v-if="currentView === 'day'"
                v-model="selectedDate" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectDate')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentView === 'week'"
                v-model="selectedDate" type="week" format="YYYY 第w周" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectWeek')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentView === 'month'"
                v-model="selectedDate" type="month" format="YYYY-MM" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectMonth')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentView === 'year'"
                v-model="selectedDate" type="year" format="YYYY" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectYear')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-button class="ml-8px" size="small" @click="refreshCalendarData" :loading="loading" :title="t('calendar.refreshData')"><qc-icon name="refresh" :size="14" /> {{ t('common.refresh') }}</el-button>
            <el-button class="ml-4px" size="small" @click="exportCSV" :title="t('calendar.exportCsv')"><qc-icon name="download" :size="14" /> {{ t('common.export') }}</el-button>
            <span class="text-sm-tertiary-ml6-nowrap" v-if="lastLoadTime">{{ lastLoadTime }}</span>
          </div>

          <div class="user-menu-wrapper" @click="showUserMenu = !showUserMenu" tabindex="0" role="button"
               aria-haspopup="menu" :aria-expanded="showUserMenu" aria-label="用户菜单"
               @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"
               @keydown.esc.prevent="showUserMenu = false"
               v-click-outside="() => showUserMenu = false">
            <div class="user-menu-avatar">{{ currentUser?.username?.charAt(0)?.toUpperCase() }}</div>
            <span class="user-menu-name">{{ currentUser?.username }}</span>
            <span class="info-chip-xs" v-if="currentUser?.role === 'guest'">访客</span>
            <span class="text-xs-tertiary">▼</span>
            <div class="user-menu-dropdown" v-if="showUserMenu" @click.stop role="menu">
              <div class="user-menu-item" v-if="currentUser?.role === 'admin'" tabindex="0" role="menuitem" @click="showUserMenu = false; resetSetupWizard()" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="settings" :size="14" /> 重新运行初始化向导</div>
              <div class="user-menu-item" v-if="currentUser?.role !== 'guest'" tabindex="0" role="menuitem" @click="showUserMenu = false; showChangePassword = true" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="key" :size="14" /> 修改密码</div>
              <div class="user-menu-divider"></div>
              <div class="user-menu-section-title"><qc-icon name="palette" :size="14" /> 切换主题</div>
              <div v-for="(theme, key) in themes" :key="key" class="user-menu-item theme-item-row"
                   :class="{'theme-active': currentTheme === key}" tabindex="0"
                   role="menuitemradio" :aria-checked="currentTheme === key"
                   @click="changeTheme(key); showUserMenu = false"
                   @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                <span class="theme-dot" :style="{background: theme.gradient}"></span>
                <span>{{ theme.name }}</span>
                <span v-if="currentTheme === key" class="theme-check">✓</span>
              </div>
              <div class="user-menu-divider"></div>
              <div class="user-menu-item danger" tabindex="0" role="menuitem" @click="handleLogout" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="log-out" :size="14" /> 退出登录</div>
            </div>
          </div>
        </div>

      </div>
    `,setup(){const t=f("qcState");if(!t)return{};const d=a(!1),p=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),A=()=>{p.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},g=e(()=>t.marketData&&t.marketData.value||{}),r=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:g,bannerDismissed:p,dismissBanner:A,goMerrill:r,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:d,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(w,i){const S="sub."+w.key+"."+i,b=t.t(S);if(b!==S)return b;const M="sub."+i,_=t.t(M);return _!==M&&_?_:t.subPageNames[i]||i}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
                <div v-if="currentPage === 'calendar'" key="calendar" data-cal-root @touchstart="onCalTouchStart" @touchend="onCalTouchEnd">

                    <!-- v3.17.8 (FR-3.17.8): 下拉刷新指示器（页面顶部下拉时显示） -->
                    <div class="pull-refresh-indicator" :class="{'is-active': pullRefreshing}">
                        <span class="pull-refresh-spinner"></span>
                        <span>{{ t('common.refreshing') }}</span>
                    </div>

                    <!-- 日/周/月/年视图 -->
                    <template v-if="currentSubPage !== 'pool'">
                        <!-- V6.1 (PRD-6.1 F3): 日历操作区 — 工作区内容顶部工具栏 (原 SubNav 顶部 Tab 形态迁出) -->
                        <div class="qc-page-tools">
                            <!-- V6.9.3 (F7): 三段重排 — 视图切换器最左, 日期/刷新/导出居中, 上一/下一最右 -->
                            <div class="flex-c-gap-6" role="tablist" aria-label="视图切换">
                                <el-button v-for="v in ['day','week','month','year']" :key="v" size="small"
                                    :type="currentView === v ? 'primary' : ''"
                                    @click="switchViewLocal(v)">{{ viewLabel(v) }}</el-button>
                            </div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-if="calType === 'date'" v-model="selectedDate" type="date"
                                    format="YYYY-MM-DD" value-format="YYYY-MM-DD" :placeholder="t('calendar.selectDate')"
                                    :disabled-date="disabledDate" size="small" @change="onDateChange"></el-date-picker>
                                <el-date-picker v-else-if="calType === 'week'" v-model="selectedDate" type="week"
                                    format="YYYY 第w周" value-format="YYYY-MM-DD" :placeholder="t('calendar.selectWeek')"
                                    :disabled-date="disabledDate" size="small" @change="onDateChange"></el-date-picker>
                                <el-date-picker v-else-if="calType === 'month'" v-model="selectedDate" type="month"
                                    format="YYYY-MM" value-format="YYYY-MM-DD" :placeholder="t('calendar.selectMonth')"
                                    :disabled-date="disabledDate" size="small" @change="onDateChange"></el-date-picker>
                                <el-date-picker v-else v-model="selectedDate" type="year"
                                    format="YYYY" value-format="YYYY-MM-DD" :placeholder="t('calendar.selectYear')"
                                    :disabled-date="disabledDate" size="small" @change="onDateChange"></el-date-picker>
                                <el-button size="small" :loading="loading" :title="t('calendar.refreshData')" @click="refreshCalendarData">
                                    <span aria-hidden="true"><qc-icon name="refresh" :size="14" /></span> {{ t('common.refresh') }}
                                </el-button>
                                <el-button size="small" :title="t('calendar.exportCsv')" @click="exportCSV">
                                    <span aria-hidden="true"><qc-icon name="download" :size="14" /></span> {{ t('common.export') }}
                                </el-button>
                                <span class="qc-subnav-lastload" v-if="lastLoadTime">{{ lastLoadTime }}</span>
                            </div>
                            <div class="flex-c-gap-12">
                                <el-button size="small" @click="navigateDate(-1)" :disabled="!canNavPrev">« {{ t('calendar.prev') }}{{ viewUnit }}</el-button>
                                <el-button size="small" @click="navigateDate(1)" :disabled="!canNavNext">{{ t('calendar.next') }}{{ viewUnit }} »</el-button>
                                <el-button v-if="['day','week'].includes(currentView)" size="small" type="primary" plain @click="openStrategyCompare">{{ t('calendar.strategyCompare') }}</el-button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-title">
                                <qc-icon name="gem" :size="16" /> {{ t('calendar.poolTitle') }}
                                <!-- V5.25: 对比基准/沿用持仓提示(来自 /api/view note) 并入标题行 — 原先独占一行, 信息密度低 -->
                                <span v-if="viewNote" class="cal-view-note" role="status">{{ viewNote }}</span>
                            </div>

                            <!-- V5.16.1: 四大池标签横跨双栏顶部公用空间 (全部/新入池/当前持仓/已出池) —
                                 移出中栏列表, 置于中栏+右栏详情之上 -->
                            <!-- 状态筛选 -->
                            <div class="status-tabs" role="tablist">
                                <div class="status-tab" :class="{active: statusFilter === 'all'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'all'" @click="statusFilter = 'all'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="file-text" :size="14" /> {{ t('calendar.all') }} <span class="count">{{ statusCounts.all }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'new'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'new'" @click="statusFilter = 'new'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="badge-check" :size="14" /> {{ t('calendar.newPool') }} <span class="count">{{ statusCounts.newCount }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'current'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'current'" @click="statusFilter = 'current'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="pin" :size="14" /> {{ t('calendar.currentHold') }} <span class="count">{{ statusCounts.current }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'out'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'out'" @click="statusFilter = 'out'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="upload" :size="14" /> {{ t('calendar.outPool') }} <span class="count">{{ statusCounts.out }}</span></div>
                            </div>

                            <!-- V5.16 (F1): 股票池 中栏+右栏详情工作区 (弹窗模式时仅中栏全宽, 面板不渲染) -->
                            <qc-detail-split :enabled="detailSplitEnabled" root-class="stock-pool-body">
                            <template #list>
                            <div class="search-box">
                                <el-input class="w-100" v-model="searchKeyword" :placeholder="t('common.searchPlaceholder')" clearable/>
                            </div>

                            <!-- v3.11 (FR-3.11.5): 统一四态组件（加载/空态） -->
                            <qc-state-panel v-if="loading" type="loading"></qc-state-panel>

                            <qc-state-panel v-else-if="stockPool.length === 0" type="empty" :title="t('common.empty')"></qc-state-panel>
                            
                            <div v-else class="stock-list">
                                <!-- V6.9.3 (F1.4): 统一 StockList 组件 (虚拟滚动 + name-suffix 图标 + footer 信号行) -->
                                <qc-stock-list
                                  class="h-calc-250"
                                  :items="stockPool"
                                  :virtual="true"
                                  :row-height="78"
                                  :copy-code="true"
                                  show-rank
                                  :active-code="detailSplitEnabled ? (stockDetail && stockDetail.stock) : ''"
                                  @select="(item) => showStockDetail(item.code)"
                                >
                                  <template #name-suffix="{ item }">
                                    <span class="gold-link watch-star" @click.stop="toggleWatchlist(item.code, item.name)" tabindex="0" role="button" :aria-label="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" :title="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="star" :size="14" :class="watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
                                    <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" :title="t('calendar.aiEvaluated')"><qc-icon name="bot" :size="13" /></span>
                                    <span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" :title="t('calendar.klineLoaded')"><qc-icon name="trending-up" :size="13" /></span>
                                  </template>
                                  <!-- v3.7.11: AI入池信号解读（整行占位, V6.9.3 经 footer 插槽渲染） -->
                                  <template #footer="{ item }">
                                    <span v-if="poolSignals[item.code]"><qc-icon name="bot" :size="14" /> {{ poolSignals[item.code] }}</span>
                                  </template>
                                </qc-stock-list>
                            </div>
                            </template>
                            <template #pane>
                                <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                            </template>
                            </qc-detail-split>
                        </div>
                    </template>

                    <!-- 股票池管理视图 -->
                    <template v-else>
                        <div class="card">
                            <div class="card-title"><qc-icon name="gem" :size="16" /> {{ t('calendar.poolManage') }}</div>
                            <div class="flex-gap-12-mb16-wrap">
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl">{{ statusCounts.all }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.totalStocks') }}</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-success">{{ statusCounts.newCount }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.newPool') }}</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-primary">{{ statusCounts.current }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.currentHold') }}</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-danger">{{ statusCounts.out }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.outPool') }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="card mt-4">
                            <div class="card-title"><qc-icon name="file-text" :size="16" /> {{ t('calendar.strategyDist') }}</div>
                            <qc-state-panel v-if="strategyDistribution.length === 0" type="empty" :title="t('common.empty')"></qc-state-panel>
                            <div v-else>
                                <div class="cal-note-box" v-for="item in strategyDistribution" :key="item.strategy">
                                    <div class="flex-c-gap-8-mb8">
                                        <span class="text-base-semibold">{{ item.strategy }}</span>
                                        <span class="cal-count-badge">{{ item.count }}</span>
                                    </div>
                                    <div class="flex-wrap-gap-6">
                                        <template v-for="(stock, si) in item.names" :key="stock.code">
                                            <span class="inline-tag" v-if="si < 5 || expandedStrategies[item.strategy]" :title="stock.code + ' ' + stock.name">
                                                <span class="text-semibold-primary">{{ stock.code }}</span>
                                                <span class="color-tertiary">{{ stock.name }}</span>
                                                <span class="gold-link watch-star" @click.stop="toggleWatchlist(stock.code, stock.name)" :title="watchlistCodes.has(stock.code)?t('calendar.unwatch'):t('calendar.watch')"><qc-icon name="star" :size="13" :class="watchlistCodes.has(stock.code) ? 'is-watched' : ''" /></span><span class="text-xs-ml2" v-if="evaluatedCodes.has(stock.code)" :title="t('calendar.aiEvaluated')"><qc-icon name="bot" :size="13" /></span><span class="text-xs-ml2" v-if="klineLoadedCodes.has(stock.code)" :title="t('calendar.klineLoaded')"><qc-icon name="trending-up" :size="13" /></span>
                                            </span>
                                        </template>
                                        <span class="text-xs-tag-tertiary" v-if="item.names.length> 5 && !expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="false" @click="expandedStrategies[item.strategy] = true" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            +{{ item.names.length - 5 }}{{ t('common.unitStock') }} {{ t('calendar.expand') }} <qc-icon name="chevron-down" :size="12" />
                                        </span>
                                        <span class="text-xs-tag-primary" v-if="item.names.length> 5 && expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="true" @click="expandedStrategies[item.strategy] = false" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            {{ t('calendar.collapse') }} <qc-icon name="chevron-up" :size="12" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>


                <!-- V5.3.14 (T-SP.P0.1): 多策略并集/交集对比弹窗 -->
                <el-dialog v-model="compareVisible" :title="t('calendar.strategyCompare')" width="760px" top="8vh">
                    <div v-if="compareLoading" style="padding:24px;text-align:center;">{{ t('common.loading') }}</div>
                    <div v-else-if="compareError" class="cal-compare-error">{{ compareError }}</div>
                    <div v-else-if="compareData && compareData.comparison">
                        <div v-if="compareData.comparison.all_intersection && compareData.comparison.all_intersection.length" class="cal-compare-section">
                            <div class="cal-compare-title">{{ t('calendar.allIntersection') }} ({{ compareData.comparison.all_intersection.length }})</div>
                            <div class="cal-compare-codes">{{ compareData.comparison.all_intersection.join(', ') }}</div>
                        </div>
                        <div v-else class="cal-compare-section">
                            <div class="cal-compare-title">{{ t('calendar.allIntersection') }} (0)</div>
                            <div class="cal-compare-codes">{{ t('calendar.noCommon') }}</div>
                        </div>
                        <el-table :data="comparePairs" size="small" max-height="380" border>
                            <el-table-column prop="label" :label="t('calendar.pair')" min-width="170" />
                            <el-table-column prop="interCount" :label="t('calendar.intersection')" min-width="90" />
                            <el-table-column prop="inter" :label="t('calendar.intersectionCodes')" min-width="160" show-overflow-tooltip />
                            <el-table-column prop="onlyS1Count" :label="t('calendar.onlyFirst')" min-width="90" />
                            <el-table-column prop="onlyS1" :label="t('calendar.onlyFirstCodes')" min-width="140" show-overflow-tooltip />
                            <el-table-column prop="onlyS2Count" :label="t('calendar.onlySecond')" min-width="90" />
                            <el-table-column prop="onlyS2" :label="t('calendar.onlySecondCodes')" min-width="140" show-overflow-tooltip />
                        </el-table>
                    </div>
                    <div v-else style="padding:12px;">{{ t('calendar.noCompareData') }}</div>
                </el-dialog>
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:f,computed:t}=Vue,d=f(0),p=f(0),A=f(!1),g=t(()=>{const E={day:"date",week:"week",month:"month",year:"year"},O=e.currentView&&e.currentView.value||"day";return E[O]||"date"}),r={day:"日",week:"周",month:"月",year:"年"};function w(E){return e.t&&e.t("view."+E)||r[E]||E}function i(E){e.switchView?e.switchView(E):e.currentView&&(e.currentView.value=E)}let S=null;function b(E){const O=E.touches&&E.touches[0];O&&(d.value=O.clientX,p.value=O.clientY)}async function M(){if(!A.value){A.value=!0;try{await e.refreshCalendarData()}catch{}S&&clearTimeout(S),S=setTimeout(()=>{A.value=!1},500)}}function _(E){if(!(window.innerWidth<=768))return;const O=E.changedTouches&&E.changedTouches[0];if(!O)return;const X=window.__quantModules&&window.__quantModules.gestures||{};if((typeof X.judgePullToRefresh=="function"?X.judgePullToRefresh(p.value,O.clientY):O.clientY-p.value>=60)&&(window.scrollY||0)<=0){E.stopPropagation(),M();return}if(e.currentSubPage.value==="pool")return;const q=O.clientX-d.value,I=O.clientY-p.value;Math.abs(q)>50&&Math.abs(q)>Math.abs(I)*1.2&&(e.navigateDate(q<0?1:-1),E.stopPropagation())}const z=f(!1),F=f(!1),C=f(""),c=f(null),n=f([]);function u(E){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[E]||E}async function l(){if(e.selectedDate.value){z.value=!0,F.value=!0,C.value="",c.value=null,n.value=[];try{const E=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),O=await E.json();if(!E.ok)throw new Error(O.detail||"HTTP "+E.status);c.value=O;const X=O&&O.comparison||{},R=[];for(const q of Object.keys(X)){if(q==="all_intersection")continue;const I=X[q]||{},V=q.split("_vs_");R.push({label:u(V[0])+" ↔ "+u(V[1]),interCount:I.intersection_count||0,inter:(I.intersection||[]).join(", "),onlyS1Count:I.only_s1_count||0,onlyS1:(I.only_s1||[]).join(", "),onlyS2Count:I.only_s2_count||0,onlyS2:(I.only_s2||[]).join(", ")})}n.value=R}catch(E){C.value=String(E&&E.message?E.message:E)}finally{F.value=!1}}}let x="";return Vue.watch(()=>{const E=e.stockPool,O=E&&E.value||[];return{n:O.length,first:O[0]&&O[0].code,split:!!e.detailSplitEnabled.value}},(E,O)=>{if(!E.split||!E.first||E.n===0)return;const X=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,R=(e.stockPool.value||[]).some(q=>q.code===X);if(!X||!R){if(x===E.first&&X&&R===!1&&E.n>1)return;x=E.first,e.showStockDetail&&e.showStockDetail(E.first)}},{immediate:!0}),{...e,calType:g,pullRefreshing:A,onCalTouchStart:b,onCalTouchEnd:_,viewLabel:w,switchViewLocal:i,compareVisible:z,compareLoading:F,compareError:C,compareData:c,comparePairs:n,openStrategyCompare:l}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
                <!-- V5.2.3: 执行看板移入系统配置 → 本组件在 system/ops+execution 下也渲染 (V6.9.1-fix2: ops 菜单也含 execution) -->
                <div v-if="currentPage === 'strategies' || ((currentPage === 'system' || currentPage === 'ops') && currentSubPage === 'execution')" key="strategies">
                    <div v-if="currentSubPage === 'overview'">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 (回测入口 + 交易日信息) -->
                        <div class="qc-page-tools">
                            <!-- v3.17.4 (FR-3.17.4): 回测工作台入口 -->
                            <button type="button" class="bt-entry-btn" @click="navigateTo('research', 'backtest')">回测工作台</button> <!-- V5.0.11: 回测移入策略研究, 入口跳转 -->
                            <div class="flex-c-gap-12">
                                <span class="text-base-secondary">{{ t('strategies.latestTradeDay') }}{{ dashboardData.latest_date || '-' }}</span>
                                <span class="text-xs-tertiary" v-if="timeSinceRefresh">{{ timeSinceRefresh }}</span>
                            </div>
                        </div>

                    <!-- v3.11 (FR-3.11.7): 今日一屏 — 聚合当日决策要素（美林/情绪/池变动/健康/重点） -->
                    <div v-if="!(loading && loadingView === 'overview')" class="today-hero card">
                        <div class="today-hero-head">
                            <div class="today-hero-title">{{ t('strategies.todayScreen') }}</div>
                            <div class="today-hero-date">
                                <span>{{ todayText }}</span>
                                <span class="today-hero-status">{{ tradingStatus }}</span>
                            </div>
                        </div>
                        <!-- V5.3.0 (T-5.3.5.2): 机会/风险信号角标条 (纯计算) -->
                        <div v-if="todaySignals.length" class="today-signals mt-8">
                            <div v-for="(sg, i) in todaySignals" :key="i"
                                 class="today-signal-chip"
                                 :class="sg.kind === 'opportunity' ? 'sig-opp' : 'sig-risk'"
                                 @click="sg.action">
                                <span class="today-signal-dot"></span>
                                <span class="today-signal-text">{{ sg.source }}·{{ sg.text }}</span>
                            </div>
                        </div>
                        <div class="today-grid">
                            <!-- 美林时钟 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'merrill'">
                                <div class="today-cell-label">{{ t('strategies.merrillLabel') }}</div>
                                <!-- V6.6: merrillData.color 后端实时色，保留内联 -->
                                <div class="today-merrill-badge" :style="{background: merrillData?.color || 'var(--color-success)'}">{{ merrillData?.name || t('strategies.computing') }}</div>
                                <div class="today-cell-sub" v-if="merrillNext">{{ merrillNext }}</div>
                                <div class="today-cell-sub" v-else-if="merrillData?.timing?.duration_days != null">已 {{ merrillData.timing.duration_days }} 天 · 剩余 {{ merrillData.timing.days_remaining ?? '—' }} 天</div>
                            </div>
                            <!-- 市场情绪 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'market'">
                                <div class="today-cell-label">{{ t('strategies.marketSentiment') }}</div>
                                <div class="today-sentiment" :class="{muted: !marketData?.market_sentiment}">{{ marketData?.market_sentiment?.text || '暂无情绪数据' }}</div>
                                <div class="today-cell-sub">{{ tradingStatus }}</div>
                            </div>
                            <!-- 池变动 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'consensus'">
                                <div class="today-cell-label">{{ t('strategies.poolChanges') }}</div>
                                <div class="today-pool-row"><span class="today-pool-val up">+{{ dashboardData?.pool_changes?.new_count || 0 }}</span><span class="today-pool-name">{{ t('calendar.newPool') }}</span></div>
                                <div class="today-pool-row"><span class="today-pool-val down">-{{ dashboardData?.pool_changes?.out_count || 0 }}</span><span class="today-pool-name">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <!-- 今日重点 -->
                            <div class="today-cell">
                                <div class="today-cell-label">{{ t('strategies.todayFocus') }}</div>
                                <div class="today-focus-list">
                                    <div v-if="todayFocus.length === 0" class="today-focus-empty">{{ t('strategies.noAlert') }}</div>
                                    <div v-for="(f, i) in todayFocus.slice(0, 3)" :key="i" class="today-focus-item" :class="f.level" @click="f.action">
                                        <span class="today-focus-icon"><qc-icon :name="f.icon" :size="14" /></span><span class="today-focus-text">{{ f.text }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 核心数据卡片 (v1.11: +趋势徽标) -->
                    <!-- 骨架屏加载 -->
                    <div v-if="loading && loadingView === 'overview'" class="dashboard-grid">
                        <div class="card skeleton skeleton-card" v-for="i in 4" :key="i"></div>
                    </div>
                    <div v-else class="dashboard-grid">
                        <div class="stat-card info">
                            <div class="stat-icon info"><qc-icon name="calendar" :size="18" /></div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_trading_days || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.tradingDays') }}</div>
                            </div>
                        </div>
                        <div class="stat-card success">
                            <div class="stat-icon success"><qc-icon name="trending-up" :size="18" /></div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_stocks_covered || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.coveredStocks') }}</div>
                            </div>
                        </div>
                        <div class="stat-card gold">
                            <div class="stat-icon gold"><qc-icon name="target" :size="18" /></div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.strategy_count || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.strategyCount') }}</div>
                            </div>
                        </div>
                        <div class="stat-card warning">
                            <div class="stat-icon warning"><qc-icon name="sparkles" :size="18" /></div>
                            <div class="stat-content">
                                <div class="flex-baseline-gap-8">
                                    <div class="stat-value">{{ currentPoolSize }}</div>
                                    <span v-if="poolChangeBadge" :class="poolChangeBadge.dir" class="stat-trend">{{ poolChangeBadge.text }}</span>
                                </div>
                                <div class="stat-label">{{ t('strategies.currentPool') }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- 子页: 策略总览 -->

                    <!-- 数据概览卡片 (v1.11 重构: 时间轴+多维度换手) -->
                    <div class="card">
                        <div class="card-title">{{ t('strategies.dataOverview') }}</div>
                        <!-- 时间覆盖条 -->
                        <div class="time-coverage-bar">
                            <div class="time-bar-label">{{ dashboardData.time_coverage?.start_date }}</div>
                            <div class="time-bar-track">
                                <div class="time-bar-fill" :style="{width: timeBarPercent + '%'}"></div>
                            </div>
                            <div class="time-bar-label">{{ dashboardData.time_coverage?.end_date }}</div>
                            <div class="time-bar-info">{{ dashboardData.time_coverage?.days || 0 }}交易日 · {{ dashboardData.time_coverage?.months || 0 }}月 · {{ dashboardData.time_coverage?.years || 0 }}年</div>
                        </div>
                        <!-- 持仓变动 多时间维度 -->
                        <div class="pool-change-multi">
                            <div class="pool-change-col">
                                <div class="pool-change-period">{{ t('strategies.todayChanges') }}</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.new_count || 0 }}</span><span class="pool-change-label">{{ t('calendar.newPool') }}</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.out_count || 0 }}</span><span class="pool-change-label">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <div class="pool-change-col">
                                <div class="pool-change-period">{{ t('strategies.weekChanges') }}</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.weekly_new || 0 }}</span><span class="pool-change-label">{{ t('calendar.newPool') }}</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.weekly_out || 0 }}</span><span class="pool-change-label">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <div class="pool-change-col">
                                <div class="pool-change-period">{{ t('strategies.monthChanges') }}</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.monthly_new || 0 }}</span><span class="pool-change-label">{{ t('calendar.newPool') }}</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.monthly_out || 0 }}</span><span class="pool-change-label">{{ t('calendar.outPool') }}</span></div>
                            </div>
                        </div>
                    </div>

<!-- 各策略选股数量 (v1.11: 可点击跳转) -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="trending-up" :size="14" /> 各策略选股统计 <span class="text-sm-tertiary-normal">(点击策略跳转日历筛选)</span></div>
                        <div v-for="item in filteredStrategyCounts" :key="item.strategy_id" class="strategy-item clickable" @click="navigateToStrategyFilter(item.strategy_name)">
                            <div class="strategy-header">
                                <span class="strategy-name">{{ item.strategy_name }} <span class="text-xs-tertiary-ml4">→</span></span>
                                <span class="strategy-count">{{ item.count }}只 <span class="strategy-percent">(占在池{{ fmtNum(item.percentage) }}%)</span></span>
                            </div>
                            <div class="strategy-progress">
                                <div class="progress-bar" :style="{width: item.percentage + '%'}"></div>
                            </div>
                        </div>
                    </div>

                    <!-- 策略共识度 TOP5 (v1.11: 嵌入概览) -->
                    <div class="card">
                        <div class="card-title flex-between">
                            <span>{{ t('strategies.consensusTop5') }}</span>
                            <span class="text-sm-primary-link" @click="currentSubPage = 'consensus'">{{ t('strategies.viewAll') }} {{ filteredConsensusRank.length }}只 →</span>
                        </div>
                        <!-- V5.16 (F2): 中栏列表 + 右栏详情工作区 (弹窗模式时仅列表全宽) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- V6.2 (PRD-6.2 F5): 概览 TOP5 改用通用 StockList 组件 -->
                        <!-- V6.9.3 (F1): 启用共识徽章/进度条/价格列, 移除冗余「N 策略」extra -->
                        <qc-stock-list
                          :items="filteredConsensusRank.slice(0, 5)"
                          empty-text="暂无共识数据"
                          show-rank
                          show-consensus
                          show-price
                          :active-code="detailSplitEnabled ? (stockDetail && stockDetail.stock) : ''"
                          @select="(item) => showStockDetail(item.code)"
                        >
                          <template #actions="{ item }">
                            <span class="gold-link watch-star" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'"><qc-icon name="star" :size="14" :class="watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估"><qc-icon name="bot" :size="13" /></span>
                          </template>
                        </qc-stock-list>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>

                    </div>
                    
                    <!-- 子页: 美林时钟 -->
                    <div v-else-if="currentSubPage === 'merrill'">

<!-- 美林时钟 -->
                    <div class="card overflow-hidden">
                        <div class="flex-between-mb16">
                            <div class="strategy-title-bar">
                                <qc-icon name="clock" :size="14" /> 美林时钟 · 经济周期
                            </div>
                            <!-- V6.6: merrillData.color 后端实时色，保留内联 -->
                            <span class="strategy-tag-pill" :style="{background: merrillData.color || 'var(--color-success)'}">
                                {{ merrillData.name || '计算中...' }}
                            </span>
                            <!-- V4.5 (FR-4.5.1): 配置就近 -->
                            <el-button size="small" type="primary" plain @click="merrillConfigOpen = !merrillConfigOpen">
                                <qc-icon name="settings" :size="14" /> {{ merrillConfigOpen ? '收起配置' : '配置' }}
                            </el-button>
                        </div>
                        <div class="card mt-4" v-if="merrillConfigOpen">
                            <div class="card-title"><qc-icon name="clock" :size="14" /> 美林时钟配置</div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">上次更新: <strong>{{ merrillClockLastUpdated || '—' }}</strong></span>
                                <el-button size="small" type="primary" @click="doMerrillReevaluate" :loading="merrillReevalLoading"><qc-icon name="refresh" :size="14" /> 手动重评估</el-button>
                            </div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">自动刷新</span>
                                <el-switch v-model="merrillClockConfig.autoRefresh" @change="saveMerrillClockConfig" size="small" />
                            </div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">刷新间隔(分钟)</span>
                                <el-select class="w-100px" v-model="merrillClockConfig.refreshInterval" @change="saveMerrillClockConfig" size="small" :disabled="!merrillClockConfig.autoRefresh">
                                    <el-option :value="10" label="10" />
                                    <el-option :value="30" label="30" />
                                    <el-option :value="60" label="60" />
                                </el-select>
                            </div>
                        </div>

                        <!-- 四阶段网格 -->
                        <div class="grid-2col-gap8-mb14">
                            <!-- V6.6: 阶段色来自服务端 merrillStagesConfig 配置，保留内联 -->
                            <div v-for="s in stages" :key="s.key" @click.prevent="showStageDetail(s.key)"
                                 class="merrill-stage-card" :class="{active: merrillData.stage === s.key}"
                                 :style="merrillData.stage === s.key ? {borderColor: s.color, background: s.bg} : {}">
                                <div class="merrill-stage-icon"><qc-icon :name="s.icon" :size="20" /></div>
                                <!-- V6.6: s.textColor 服务端配置色，保留内联 -->
                                <div class="merrill-stage-name" :style="{color: s.textColor}">{{ s.name }}</div>
                                <div class="merrill-stage-desc">{{ s.tagline }}</div>
                            </div>
                        </div>

                        <!-- 描述 -->
                        <div class="text-center-secondary-lh" v-if="merrillData.description">
                            {{ merrillData.description }}
                        </div>

                        <!-- V5.21: 周期演进板 — 随大模型评估与时间演进动态更新 (替代原 金框 + 历史周期时间轴) -->
                        <div class="mc-board">
                            <!-- ① 当前阶段 · 进行中 (时间演进: 进度/剩余/成熟度实时刷新) -->
                            <div class="mc-now" v-if="merrillData.timing">
                                <div class="mc-now-head">
                                    <span class="mc-now-dot" :style="{background: merrillData.color || 'var(--color-success)'}"></span>
                                    <span class="mc-now-name">{{ merrillData.stage_cn || merrillData.name }}</span>
                                    <span class="mc-now-badge">{{ merrillData.timing.maturity || '—' }}</span>
                                    <span class="mc-conf" v-if="merrillData.confidence">置信度 {{ merrillData.confidence.level }}</span>
                                    <span class="mc-eval-ts" v-if="merrillClockLastUpdated">上次评估 {{ merrillClockLastUpdated }}</span>
                                </div>
                                <div class="mc-prog">
                                    <div class="mc-prog-track">
                                        <div class="mc-prog-fill" :style="mcProgStyle"></div>
                                        <div class="mc-prog-avg" :style="{left: mcAvgMark + '%'}" title="历史平均时长刻度"></div>
                                    </div>
                                    <div class="mc-prog-meta">
                                        <span>已过 <b>{{ merrillData.timing.duration_days }}</b> 天</span>
                                        <span>进度 <b>{{ fmtNum(merrillData.timing.progress_percent) }}%</b></span>
                                        <span v-if="merrillData.timing.days_remaining">预计还需 <b>{{ merrillData.timing.days_remaining }}</b> 天</span>
                                        <span class="mc-avg-note">历史均值 {{ fmtNum(merrillData.timing.avg_duration_months) }} 月</span>
                                    </div>
                                </div>
                                <div class="mc-now-foot">
                                    <div class="mc-next" v-if="merrillData.next_stage_prediction">
                                        <span class="mc-next-lab">下一阶段</span>
                                        <span class="mc-next-name">→ {{ merrillData.next_stage_prediction.next_stage_name }}</span>
                                        <span class="mc-next-prob">{{ fmtNum(merrillData.next_stage_prediction.transition_probability * 100) }}%</span>
                                        <span class="mc-next-sig" v-if="(merrillData.next_stage_prediction.transition_signals || []).length">触发信号: {{ (merrillData.next_stage_prediction.transition_signals || []).join(' · ') }}</span>
                                    </div>
                                    <div class="mc-end" v-if="mcEndRange"><span class="mc-end-lab">预计结束</span>{{ mcEndRange }}</div>
                                </div>
                                <!-- 评估轨迹 (快照: 同一阶段多次评估会连成一段, 阶段切换则出现断点) -->
                                <div class="mc-trail" v-if="mcTrailRuns.length">
                                    <span class="mc-trail-lab">评估轨迹</span>
                                    <span v-for="(run, i) in mcTrailRuns" :key="i" class="mc-trail-run" :class="{ 'is-latest': i === mcTrailRuns.length - 1 }" :title="run.first + ' → ' + run.last">
                                        <span class="mc-trail-dot" :style="{background: getTimelineStageColor(run.stage)}"></span>{{ run.name }} ×{{ run.count }}
                                    </span>
                                    <span class="mc-trail-note">近 {{ merrillSnapshotsTotal || merrillSnapshots.length }} 次评估{{ mcTrailRuns.length > 1 ? ' · 阶段有变更' : ' · 阶段稳定' }}</span>
                                </div>
                            </div>

                            <!-- ② 本轮演进带: 实色=已发生, 斜纹=预测; 当前段宽度随时间生长 -->
                            <div class="mc-band-block" v-if="mcCurrentBand.segs.length">
                                <div class="mc-band-title">
                                    <qc-icon name="activity" :size="14" /> 本轮演进
                                    <span class="mc-band-hint">实色=已发生 · 斜纹=预测 · 宽度∝持续时长 · 阶段首尾相接</span>
                                </div>
                                <div class="mc-band">
                                    <div v-for="(g, i) in mcCurrentBand.segs" :key="i" class="mc-seg"
                                         :class="{ 'is-ghost': g.ghost, 'is-cur': g.live }" :style="mcSegStyle(g)"
                                         @click.prevent="g.stage && showTimelineStage(g.stage)" :title="mcSegTitle(g)">
                                        <span class="mc-seg-name" v-if="g.width > 9">{{ g.name }}</span>
                                        <span class="mc-seg-months" v-if="g.width > 17 && g.months">{{ fmtNum(g.months) }}月</span>
                                    </div>
                                </div>
                                <div class="mc-band-axis">
                                    <span>{{ mcCurrentBand.axisStart }}</span>
                                    <span class="mc-band-axis-now" v-if="mcCurrentBand.nowPct != null" :style="{left: mcCurrentBand.nowPct + '%'}">今天</span>
                                    <span>{{ mcCurrentBand.axisEnd }}</span>
                                </div>
                            </div>

                            <!-- ③ 历史周期: 已确认, 低强调; 可切「阶段矩阵」做跨周期比较 -->
                            <div class="mc-hist-block" v-if="mcHistoryBands.length">
                                <div class="mc-hist-head">
                                    <span class="mc-hist-title"><qc-icon name="history" :size="14" /> 历史周期</span>
                                    <span class="mc-hist-sub">近 {{ mcHistoryBands.length }} 轮 · 点击色块看阶段详情</span>
                                    <el-radio-group v-model="mcHistView" size="small">
                                        <el-radio-button value="band">周期带</el-radio-button>
                                        <el-radio-button value="matrix">阶段矩阵</el-radio-button>
                                    </el-radio-group>
                                </div>
                                <template v-if="mcHistView === 'band'">
                                    <!-- V5.22 (需求4): 历史周期逐段列出时间信息; 周期带按持续时长首尾相接 -->
                                    <div v-for="(cyc, i) in mcHistoryBands" :key="i" class="mc-hrow">
                                        <div class="mc-hlab">{{ cyc.label }}<small>{{ cyc.years }}</small></div>
                                        <div class="mc-hbody">
                                            <div class="mc-band mc-band-sm">
                                                <div v-for="(g, j) in cyc.segs" :key="j" class="mc-seg" :style="mcSegStyle(g)"
                                                     @click.prevent="g.stage && showTimelineStage(g.stage)" :title="mcSegTitle(g)">
                                                    <span class="mc-seg-name" v-if="g.width > 12">{{ g.name }}</span>
                                                </div>
                                            </div>
                                            <div class="mc-times">
                                                <span v-for="(g, j) in cyc.segs" :key="'t' + j" class="mc-time-chip"
                                                      @click.prevent="g.stage && showTimelineStage(g.stage)" :title="mcSegTitle(g)">
                                                    <span class="mc-time-dot" :style="{background: getTimelineStageColor(g.stage)}"></span>
                                                    <b>{{ g.name }}</b>
                                                    <span class="mc-time-range" v-if="g.start">{{ g.start }}<template v-if="g.end"> → {{ g.end }}</template></span>
                                                    <span class="mc-time-months" v-if="g.months">{{ g.months }} 月</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <table v-else class="mc-mx">
                                    <thead>
                                        <tr>
                                            <th class="mc-mx-lab">周期</th>
                                            <th v-for="k in mcStageKeys" :key="k">
                                                <span class="mc-mx-dot" :style="{background: getTimelineStageColor(k)}"></span>{{ getTimelineStageName(k) }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, i) in mcMatrix" :key="i">
                                            <td class="mc-mx-lab">{{ row.label }}</td>
                                            <td v-for="k in mcStageKeys" :key="k">
                                                <span v-if="row.sum[k]" class="mc-mx-cell" :class="{ 'is-cur': row.cur === k }" :style="mcMxCellStyle(k, row.sum[k])">{{ fmtNum(row.sum[k]) }} 月</span>
                                                <span v-else class="mc-mx-cell is-zero">—</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="merrill-timeline-empty" v-if="!mcCurrentBand.segs.length && !timelineLoading">暂无历史周期数据</div>
                            <div class="merrill-timeline-empty" v-else-if="!mcCurrentBand.segs.length && timelineLoading">加载中...</div>
                        </div>

                        <!-- 多维度评分 -->
                        <div class="note-box-14" v-if="merrillData.dimension_scores">
                            <div class="text-base-semibold-primary-mb10"><qc-icon name="bar-chart-3" :size="14" /> 多维度评分</div>
                            <div class="flex-c-gap-8-mb6-sm" v-for="dim in dimensionScoreList" :key="dim.key">
                                <span class="stat-label-40">{{ dim.label }}</span>
                                <div class="stat-track-10">
                                    <!-- V6.6: dim 分数段渐变色（JS 插值计算），保留内联 -->
                                    <div class="stat-fill-5" :style="{width: dim.barWidth + '%', background: dim.barColor}"></div>
                                </div>
                                <span class="stat-value-35" :style="{color: dim.scoreColor}">+{{ dim.scoreStr }}</span>
                                <span class="stat-value-36" :style="{color: dim.color}">{{ dim.level }}</span>
                            </div>
                        </div>

                        <!-- 置信度 + 下阶段预测 -->
                        <div class="strategy-summary-bar" v-if="merrillData.confidence">
                            <div class="flex-c-gap-6">
                                <span class="text-sm-secondary">置信度</span>
                                <!-- V6.6: confidenceColor 置信度计算色，保留内联 -->
                                <span class="text-base-semibold" :style="{color: confidenceColor}">{{ merrillData.confidence.level || '—' }}</span>
                            </div>
                            <div class="flex-c-gap-4-sm" v-if="merrillData.next_stage_prediction">
                                <span class="color-secondary">→预测</span>
                                <span class="text-warning-semibold">{{ merrillData.next_stage_prediction.next_stage_name || '—' }}</span>
                                <span class="color-secondary" v-if="merrillData.next_stage_prediction.transition_probability">
                                    {{ (merrillData.next_stage_prediction.transition_probability * 100).toFixed(2) }}%
                                </span>
                            </div>
                        </div>

                        <div class="gold-hint">
                            <qc-icon name="lightbulb" :size="14" /> 点击阶段卡片查看详细分析和投资建议
                        </div>

                    </div>
                    </div>
                    
                    <!-- 子页: 市场行情 -->
                    <div v-else-if="currentSubPage === 'market'">

                    
                    <!-- 市场行情概览 -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="line-chart" :size="14" /> 今日市场行情</div>
                        <div class="market-status">
                            <span>
                                <span class="color-primary-semibold-600" v-if="marketData.is_trading_day">● 交易日</span>
                                <span class="color-tertiary" v-else>○ 非交易日</span>
                                <span class="ml-8-neutral-600" v-if="marketData.in_trading_hours"><qc-icon name="clock" :size="14" /> 交易中</span>
                                <span class="ml-8-tertiary" v-if="!marketData.in_trading_hours && marketData.is_trading_day">已收盘</span>
                            </span>
                            <span class="text-xs-tertiary">{{ marketData.date }}</span>
                        </div>
                        <div class="market-sentiment" v-if="marketData.market_sentiment">
                            <div class="market-sentiment-text">{{ marketData.market_sentiment.text }}</div>
                        </div>
                        <!-- V5.16 (F4): 中栏指数列表 + 右栏指数详情工作区 (C4-A; 弹窗模式时仅列表全宽) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <div class="market-grid" :class="{ 'is-vertical': detailSplitEnabled }">
                            <div v-for="idx in marketData.indices" :key="idx.id" class="market-card clickable"
                                 :class="['up-down-' + (idx.pct_chg >= 0 ? 'up' : 'down'), { 'is-active': detailSplitEnabled && indexDetail && indexDetail.code === idx.code }]"
                                 @click="showIndexDetail(idx)">
                                <div class="market-header">
                                    <span class="market-name">{{ idx.name }}</span>
                                    <span class="market-tag">{{ idx.market }}</span>
                                </div>
                                <div class="market-price-row">
                                    <span class="market-price">{{ Number(idx.close).toFixed(2) }}</span>
                                    <span class="market-chg" :class="idx.pct_chg >= 0 ? 'up' : 'down'">
                                        {{ idx.pct_chg >= 0 ? '+' : '' }}{{ Number(idx.pct_chg).toFixed(2) }}%
                                    </span>
                                </div>
                            </div>
                        </div>
                        </template>
                        <template #pane>
                            <qc-index-detail-dialog :embedded="true"></qc-index-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>
                    </div>
                    <!-- 子页: 策略共识榜 -->
                    <div v-else-if="currentSubPage === 'consensus'">

                    <!-- 策略共识度排行 -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="trophy" :size="14" /> 策略共识度排行 (多策略同时选中)</div>
                        <!-- V5.16 (F3): 中栏列表 + 右栏详情工作区 (弹窗模式时仅列表全宽) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- V6.9.3 (F1.4): 统一 StockList 组件 (虚拟滚动 + 共识徽章/进度条/价格列) -->
                        <qc-stock-list
                          class="h-calc-240"
                          :items="filteredConsensusRank"
                          :virtual="true"
                          :row-height="78"
                          empty-text="暂无共识数据"
                          show-rank
                          show-consensus
                          show-price
                          :active-code="detailSplitEnabled ? (stockDetail && stockDetail.stock) : ''"
                          @select="(item) => showStockDetail(item.code)"
                        >
                          <template #actions="{ item }">
                            <span class="gold-link watch-star" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'"><qc-icon name="star" :size="14" :class="watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估"><qc-icon name="bot" :size="13" /></span>
                            <span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" title="已加载K线"><qc-icon name="trending-up" :size="13" /></span>
                          </template>
                        </qc-stock-list>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>
                    </div>
                    <!-- v3.17.4 (FR-3.17.4): 回测工作台 代码起点 -->
                    <div v-else-if="currentSubPage === 'backtest'" class="backtest-workbench">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留返回操作 -->
                        <div class="qc-page-tools">
                            <button type="button" class="bt-back-btn" @click="currentSubPage = 'overview'">返回策略总览</button>
                        </div>

                        <!-- 参数表单 -->
                        <div class="card">
                            <div class="card-title">回测参数</div>
                            <div class="bt-form">
                                <div class="bt-form-row">
                                    <span class="bt-form-label">策略（可多选对比）</span>
                                    <div class="bt-strategy-opts">
                                        <label v-for="opt in btStrategyOptions" :key="opt.id" class="bt-strategy-opt" :class="{ active: btSelectedStrategies.includes(opt.id) }">
                                            <input type="checkbox" class="bt-strategy-check" :checked="btSelectedStrategies.includes(opt.id)" @change="toggleBtStrategy(opt.id)">
                                            <span>{{ opt.name }}</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">日期区间</span>
                                    <el-date-picker v-model="btDateRange" type="daterange" size="small"
                                        range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                                        value-format="YYYY-MM-DD" class="bt-date-picker"></el-date-picker>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">初始资金</span>
                                    <el-input-number v-model="btCapital" size="small" :min="10000" :step="50000" class="bt-input"></el-input-number>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">手续费率</span>
                                    <el-input-number v-model="btCommissionRate" size="small" :min="0" :max="0.01" :step="0.0001" :precision="4" class="bt-input"></el-input-number>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">基准对比</span>
                                    <el-checkbox v-model="btIncludeBenchmark">含基准对比</el-checkbox>
                                </div>
                                <div class="bt-form-actions">
                                    <el-button type="primary" size="small" :loading="btRunning" @click="runBacktestWorkbench">运行回测</el-button>
                                    <el-button size="small" :disabled="!btResult" @click="exportBacktestCSV">导出 CSV</el-button>
                                </div>
                                <div v-if="btError" class="bt-error">{{ btError }}</div>
                            </div>
                        </div>

                        <!-- 结果区 -->
                        <template v-if="btResult && btResult.success">
                            <!-- 指标卡 -->
                            <div class="card">
                                <div class="card-title">核心指标 <span class="bt-period">{{ btResult.period }}</span></div>
                                <div class="bt-metrics">
                                    <div v-for="m in btMetrics" :key="m.key" class="bt-metric">
                                        <div class="bt-metric-label">{{ m.label }}</div>
                                        <div class="bt-metric-value" :class="{ 'is-up': m.dir === 'up', 'is-down': m.dir === 'down' }">{{ m.value }}<span class="bt-metric-suffix">{{ m.suffix }}</span></div>
                                    </div>
                                </div>
                            </div>

                            <!-- 最大回撤区间说明 -->
                            <div v-if="btDrawdownRegion" class="card">
                                <div class="card-title">最大回撤区间</div>
                                <div class="bt-dd-info">回撤幅度 <b>{{ fmtNum(btDrawdownRegion.maxDrawdown) }}%</b> · {{ btDrawdownRegion.peakDate }} → {{ btDrawdownRegion.troughDate }}（净值图中已标注）</div>
                            </div>

                            <!-- 净值曲线（多线 + 图例可切换） -->
                            <div class="card">
                                <div class="card-title">净值曲线（点击图例可开关各策略/基准）</div>
                                <div id="backtestNavChart" class="bt-chart" :ref="el => registerBacktestNavChart(el)"></div>
                            </div>

                            <!-- 年度收益列表 -->
                            <div class="card">
                                <div class="card-title">年度收益</div>
                                <qc-state-panel v-if="btAnnualReturns.length === 0" type="empty" title="暂无年度收益数据"></qc-state-panel>
                                <div v-else class="table-container">
                                    <table class="bt-annual-table">
                                        <thead>
                                            <tr><th>年度</th><th>收益</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in btAnnualReturns" :key="row.year">
                                                <td>{{ row.year }}</td>
                                                <td :class="row.return >= 0 ? 'is-up' : 'is-down'">{{ row.return >= 0 ? '+' : '' }}{{ fmtNum(row.return) }}%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- 多策略指标对比 -->
                            <div v-if="btStrategyMetricsRows.length" class="card">
                                <div class="card-title">多策略指标对比</div>
                                <div class="table-container">
                                    <table class="bt-compare-table">
                                        <thead>
                                            <tr>
                                                <th>策略</th>
                                                <th v-for="m in btStrategyMetricsRows[0].metrics" :key="m.key">{{ m.label }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in btStrategyMetricsRows" :key="row.name">
                                                <td>{{ row.name }}</td>
                                                <td v-for="m in row.metrics" :key="m.key">{{ m.value }}{{ m.suffix }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- 交易明细 -->
                            <div class="card">
                                <div class="card-title">交易明细 <span class="bt-trade-count">{{ btTrades.length }} 笔</span></div>
                                <qc-state-panel v-if="btTrades.length === 0" type="empty" title="本期无调仓交易"></qc-state-panel>
                                <div v-else class="table-container bt-trades-wrap">
                                    <table class="bt-trades-table">
                                        <thead>
                                            <tr><th>日期</th><th>股票代码</th><th>方向</th><th>原因</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(t, i) in btTrades" :key="i">
                                                <td>{{ t.date }}</td>
                                                <td>{{ t.stock }}</td>
                                                <td :class="t.action === 'buy' ? 'is-up' : t.action === 'sell' ? 'is-down' : ''">{{ t.action === 'buy' ? '买入' : t.action === 'sell' ? '卖出' : t.action }}</td>
                                                <td>{{ t.reason }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </template>

                        <!-- 未运行 / 加载 / 失败 -->
                        <div v-else class="card">
                            <qc-state-panel v-if="btRunning" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="btError" type="error" title="回测失败" :desc="btError" @retry="runBacktestWorkbench"></qc-state-panel>
                            <qc-state-panel v-else type="empty" title="尚未运行回测" desc="选择策略与参数后点击「运行回测」查看结果"></qc-state-panel>
                        </div>
                    </div>
                    <!-- v3.17.4 (FR-3.17.4): 回测工作台 代码终点 -->
                    <!-- V4.9 (P1): 执行看板子页 -->
                    <div v-else-if="currentSubPage === 'execution'" class="card">
                        <div class="card-title flex-between">
                            <span><qc-icon name="zap" :size="14" /> 策略执行看板</span>
                            <div class="flex-c-gap-8">
                                <el-button size="small" @click="loadExecutionData" :loading="execLoading"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                                <el-select class="w-select-sm" size="small" v-model="execDays" @change="loadExecutionData">
                                    <el-option label="近1天" :value="1" />
                                    <el-option label="近7天" :value="7" />
                                    <el-option label="近30天" :value="30" />
                                </el-select>
                            </div>
                        </div>

                        <!-- 聚合统计卡片 -->
                        <div v-if="execSummary" class="dashboard-grid">
                            <div class="stat-card info">
                                <div class="stat-icon info"><qc-icon name="clipboard-list" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ execSummary.total }}</div>
                                    <div class="stat-label">总执行次数</div>
                                </div>
                            </div>
                            <div class="stat-card success">
                                <div class="stat-icon success"><qc-icon name="check" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ execSummary.success_count }}</div>
                                    <div class="stat-label">成功次数</div>
                                </div>
                            </div>
                            <div class="stat-card warning">
                                <div class="stat-icon warning"><qc-icon name="trending-up" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value" :class="execSuccessClass">{{ execSummary.success_rate || 0 }}%</div>
                                    <div class="stat-label">成功率</div>
                                </div>
                            </div>
                            <div class="stat-card gold">
                                <div class="stat-icon gold"><qc-icon name="calendar" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ Object.keys(execSummary.daily_trend || {}).length }}</div>
                                    <div class="stat-label">覆盖天数</div>
                                </div>
                            </div>
                        </div>

                        <!-- 各任务状态卡片 -->
                        <div v-if="execSummary?.by_task" class="card mt-4">
                            <div class="card-title"><qc-icon name="bar-chart-3" :size="14" /> 各任务执行统计</div>
                            <div class="strategy-item" v-for="(stats, taskName) in execSummary.by_task" :key="taskName">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ taskName }}</span>
                                    <span class="strategy-count">
                                        <span class="color-success">{{ stats.success }}</span>
                                        <span class="text-tertiary">/</span>
                                        <span class="color-danger">{{ stats.failed }}</span>
                                        <span class="text-tertiary"> | {{ stats.total }} 次</span>
                                    </span>
                                </div>
                                <div class="strategy-progress">
                                    <div class="progress-bar" :class="execRateClass(stats.total, stats.success)" :style="{width: (stats.total > 0 ? (stats.success / stats.total * 100) : 0) + '%'}"></div>
                                </div>
                                <div class="flex-between">
                                    <span class="text-xs-tertiary">最近: {{ stats.last_run || '—' }}</span>
                                    <span class="text-xs" :class="stats.last_status === 'success' ? 'color-success' : 'color-danger'">{{ stats.last_status === 'success' ? '成功' : '失败' }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- V4.9.2 (P1): 每日策略执行监控 -->
                        <div class="card mt-4">
                            <div class="card-title"><qc-icon name="calendar" :size="14" /> {{ t('exec.resultTitle') }}</div>
                            <div class="dashboard-grid">
                                <div class="stat-card warning">
                                    <div class="stat-icon warning"><qc-icon name="calendar-days" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execCountdownText }}</div>
                                        <div class="stat-label">{{ t('exec.countdown') }}<span v-if="execNextRunText" class="text-sm-tertiary-ml4">下次自动更新 {{ execNextRunText }}</span></div>
                                    </div>
                                </div>
                                <div class="stat-card success">
                                    <div class="stat-icon success"><qc-icon :name="execStatusIcon" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execPhaseText }}</div>
                                        <div class="stat-label">{{ t('exec.statusTitle') }}</div>
                                    </div>
                                </div>
                                <div class="stat-card info">
                                    <div class="stat-icon info"><qc-icon name="package" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execLastDate }}</div>
                                        <div class="stat-label">{{ t('exec.lastRun') }}</div>
                                    </div>
                                </div>
                                <div class="stat-card gold">
                                    <div class="stat-icon gold"><qc-icon name="eye" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value" :class="execVisibleClass">{{ execVisibleText }}</div>
                                        <div class="stat-label">{{ t('exec.dayTotal') }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-title mt-2">{{ t('exec.planTitle') }}</div>
                            <div class="strategy-item" v-for="p in execPlan" :key="p.sid">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ p.name }}</span>
                                    <span class="strategy-count">
                                        <span :class="p.enabled ? 'color-success' : 'color-danger'">{{ p.enabled ? '启用' : '停用' }}</span>
                                        <span class="text-tertiary"> | {{ p.schedule }} | {{ t('exec.lastRun') }}: {{ p.last_run || '—' }}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="card-title mt-2">{{ t('exec.resultTitle') }}</div>
                            <div class="strategy-item" v-for="r in execResultsDates" :key="r.date">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ r.date }}</span>
                                    <span class="strategy-count">
                                        <span class="text-tertiary">{{ t('exec.union') }}: {{ r.in_pool_union }} | {{ t('exec.dayTotal') }}: {{ r.day_view_total }}</span>
                                        <span :class="r.visible ? 'color-success' : 'color-danger'">{{ r.visible ? t('exec.visible') : t('exec.invisible') }}</span>
                                        <el-button size="small" link type="primary" @click="loadExecutionTrace(r.date)">{{ t('exec.traceTitle') }}</el-button>
                                    </span>
                                </div>
                                <div class="flex-between">
                                    <span class="text-xs-tertiary">{{ r.strategies.map(function (s) { return s.strategy + ':' + s.held; }).join(' | ') }}</span>
                                    <span class="text-xs-tertiary">{{ r.run_at || '—' }}</span>
                                </div>
                            </div>
                            <div class="card-title mt-2">{{ t('exec.traceTitle') }}</div>
                            <div class="flex-c-gap-8 mb-2">
                                <el-select class="w-select" size="small" v-model="execTraceDate" @change="loadExecutionTrace(execTraceDate)">
                                    <el-option v-for="r in execResultsDates" :key="r.date" :label="r.date" :value="r.date" />
                                </el-select>
                                <el-button size="small" @click="loadExecutionTrace(execTraceDate)" :loading="execTraceLoading"><qc-icon name="refresh" :size="14" /> {{ t('exec.traceTitle') }}</el-button>
                            </div>
                            <div v-if="execTraceSteps.length" class="strategy-item" v-for="s in execTraceSteps" :key="s.step + (s.ts || '')">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ s.step }}</span>
                                    <span class="text-xs-tertiary">{{ s.ts }}</span>
                                </div>
                                <div class="text-sm-tertiary">{{ s.detail }}</div>
                            </div>
                            <div v-else class="text-tertiary text-sm">—</div>
                        </div>

                        <!-- 历史记录表 -->
                        <div class="card mt-4">
                            <div class="card-title flex-between">
                                <span><qc-icon name="file-text" :size="14" /> 执行历史 <span class="text-sm-tertiary">(最近 {{ execDays }} 天)</span></span>
                                <div class="flex-c-gap-8">
                                    <el-select class="w-select" size="small" v-model="execTaskFilter" @change="loadExecutionData" clearable placeholder="全部任务">
                                        <el-option v-for="t in execTaskOptions" :key="t" :label="t" :value="t" />
                                    </el-select>
                                    <el-select class="w-select-sm" size="small" v-model="execStatusFilter" @change="loadExecutionData" clearable placeholder="全部状态">
                                        <el-option label="成功" value="success" />
                                        <el-option label="失败" value="failed" />
                                    </el-select>
                                </div>
                            </div>
                            <qc-state-panel v-if="execLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="execError" type="error" title="加载失败" desc="请检查网络后重试" @retry="loadExecutionData"></qc-state-panel>
                            <div v-else-if="!execHistory.length" class="empty-state">
                                <div class="text-md-medium-primary">暂无执行记录</div>
                                <div class="text-sm-tertiary-mt8">调度任务尚未运行，或所选时间段内无记录</div>
                            </div>
                            <div v-else class="table-container">
                                <table class="bt-trades-table">
                                    <thead>
                                        <tr><th>时间</th><th>任务</th><th>状态</th><th>详情</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(r, i) in execHistory" :key="i">
                                            <td class="text-sm-mono">{{ r.ts }}</td>
                                            <td><span class="strategy-tag">{{ r.task }}</span></td>
                                            <td><span :class="r.success ? 'status-current' : 'status-out'">{{ r.success ? '成功' : '失败' }}</span></td>
                                            <td class="text-sm-tertiary" :title="r.detail">{{ (r.detail || '—').slice(0, 60) }}{{ (r.detail || '').length > 60 ? '…' : '' }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
    `,setup(){const e=a("qcState"),f=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let d=0;const p=t(()=>{var v;return((v=e.merrillData)==null?void 0:v.value)||{}}),A=t(()=>{var v;return((v=e.marketData)==null?void 0:v.value)||{}}),g=t(()=>{var v;return((v=e.dashboardData)==null?void 0:v.value)||{}}),r=t(()=>{var v;return((v=e.healthMetrics)==null?void 0:v.value)||[]}),w=t(()=>{var v;return((v=e.filteredConsensusRank)==null?void 0:v.value)||[]}),i=t(()=>{const v={};for(const $ of w.value)$.code&&$.name&&(v[$.code]=$.name);return v}),S={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function b(v){return S[v]||v}const M=t(()=>A.value.date||g.value.latest_date||"-"),_=t(()=>{const v=A.value;return!v||Object.keys(v).length===0?"数据加载中...":v.is_trading_day&&v.in_trading_hours?"● 交易中":v.is_trading_day?"已收盘":"○ 非交易日"}),z=t(()=>{const v=p.value.next_stage_prediction;return v&&v.next_stage_name&&v.transition_probability>.2?`→${v.next_stage_name} ${(v.transition_probability*100).toFixed(2)}%`:""}),F=t(()=>{const v=[],$=g.value.pool_changes||{},le=$.new_count||0;if(le>0){const Qe=$.new_stock_names||{},Oe=($.new_stocks||[]).map(rt=>Qe[rt]||i.value[rt]||rt).slice(0,4).join("、");v.push({icon:"sparkles",level:"new",text:`今日新入池 ${le} 只${Oe?" · "+Oe:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Qe of r.value.filter(Oe=>Oe.degraded))v.push({icon:"alert-triangle",level:"warn",text:`数据源 ${b(Qe.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const Te=p.value.timing;Te&&Te.progress_percent&&Te.progress_percent>100?v.push({icon:"clock",level:"warn",text:`美林「${p.value.name}」已超期 ${Te.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):Te&&Te.maturity&&p.value.name&&v.push({icon:"clock",level:"info",text:`美林「${p.value.name}」阶段成熟度 ${Te.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ve=A.value;return Ve&&Ve.is_trading_day===!1&&Ve.date&&v.push({icon:"calendar",level:"info",text:`${Ve.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),v}),C=t(()=>{const v=[],$=p.value.name||"",le=p.value.timing||{},Te=["复苏","成长","过热"],Ve=["滞胀","衰退"];Te.some(ct=>$.includes(ct))&&v.push({kind:"opportunity",source:"美林",text:$+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ve.some(ct=>$.includes(ct))&&v.push({kind:"risk",source:"美林",text:$+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),le.progress_percent&&le.progress_percent>100&&v.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Qe=g.value.pool_changes||{},Oe=(Qe.new_count||0)-(Qe.out_count||0);Oe>=3?v.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Oe,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):Oe<=-3&&v.push({kind:"risk",source:"池变动",text:"净出池 "+Oe,action:()=>{e.currentSubPage.value="consensus"}});const rt=A.value.market_sentiment,nt=rt&&rt.text||"";(nt.includes("乐观")||nt.includes("积极")||nt.includes("亢奋"))&&v.push({kind:"opportunity",source:"情绪",text:nt,action:()=>{e.currentSubPage.value="market"}}),(nt.includes("悲观")||nt.includes("恐慌")||nt.includes("低迷"))&&v.push({kind:"risk",source:"情绪",text:nt,action:()=>{e.currentSubPage.value="market"}});for(const ct of r.value.filter(Ot=>Ot.degraded))v.push({kind:"risk",source:"数据",text:b(ct.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return v}),c=t(()=>{var v;return((v=e.merrillTimeline)==null?void 0:v.value)||e.merrillTimeline||{cycles:[]}}),n=t(()=>{var v;return((v=e.timelineLoading)==null?void 0:v.value)||!1}),u=Vue.ref(null),l=Vue.ref(!1),x=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function E(v){const $=v&&v.currentTarget,le=document.querySelector(".tl-click-pop");if(!$||!le)return;const Te=$.getBoundingClientRect(),Ve=le.offsetWidth||340,Qe=le.offsetHeight||220,Oe=10,rt=$.closest(".merrill-timeline-block"),nt=rt?rt.getBoundingClientRect():Te,ct=Te.left-nt.left,Ot=Te.top-nt.top,Et=Te.width,L=Te.height,fe=nt.width,Le=nt.height;let Me=null;ct+Et+Oe+Ve<=fe?Me=ct+Et+Oe:ct-Oe-Ve>=0?Me=ct-Oe-Ve:Me=Math.max(8,Math.min(ct,fe-Ve-8));const ze=Ot+L/2-Qe/2,He=Math.max(8,Math.min(ze,Le-Qe-8));x.top=He,x.left=Me,x.right=null,x.bottom=null}const O=Vue.computed(function(){const v={};return x.top!=null&&(v.top=x.top+"px"),x.left!=null&&(v.left=x.left+"px"),x.right!=null&&(v.right=x.right+"px"),v});function X(v,$){let le=null;const Te=c.value&&c.value.cycles||[];for(const Ve of Te){const Qe=(Ve.stages||[]).find(Oe=>Oe.stage===v&&Oe.is_current);if(Qe){le=Qe;break}}if(!le)for(const Ve of Te){const Qe=(Ve.stages||[]).find(Oe=>Oe.stage===v);if(Qe){le=Qe;break}}le&&(u.value=le,l.value=!0,Vue.nextTick(function(){E($)}))}function R(){l.value=!1,u.value=null}function q(v){const $=e.merrillStagesConfig,Te=($&&$.value?$.value:$||{})[v]||{};return Te.color||Te.bg_color||"var(--color-primary)"}function I(v){const $=e.merrillStagesConfig,le=$&&$.value?$.value:$||{};return le[v]&&le[v].name||""}function V(){const v=e.merrillStagesConfig;return v&&v.value?v.value:v||{}}function se(v){return V()[v]&&V()[v].description||""}function Y(v){const $=v&&v.stages?v.stages:[];if(!$.length)return"";const le=$[0]&&$[0].start?String($[0].start).slice(0,4):"",Te=$[$.length-1]||{},Ve=Te.end?String(Te.end).slice(0,4):Te.start?String(Te.start).slice(0,4):"";return le||Ve?le?le+"–"+Ve:Ve:""}function ee(v){const $=v.start?String(v.start).slice(0,4):"",le=v.end?String(v.end).slice(0,4):$?"至今":"";return $?le?$+"–"+le:$:""}function j(v){const $=v.essence||v.trigger||se(v.stage)||"";return v.highlight?$?$+" · "+v.highlight:v.highlight:$}function H(){const v=p.value.indicators||{},$=p.value.stage||"",le={recovery:[["PMI",v.pmi],["GDP",v.gdp_growth],["M2",v.m2_growth]],overheat:[["PPI",v.ppi],["CPI",v.cpi],["PMI",v.pmi]],stagflation:[["CPI",v.cpi],["PPI",v.ppi],["GDP",v.gdp_growth]],recession:[["PMI",v.pmi],["GDP",v.gdp_growth],["CPI",v.cpi]]},Te=(le[$]||le.recession).filter(Ve=>Ve[1]!=null&&Ve[1]!==0);return Te.length?"实时 · "+Te.map(Ve=>Ve[0]+" "+Ve[1]+"%").join(" ｜ "):""}function N(v,$,le){const Ve=(V()[v.stage]||{}).color||"var(--color-primary)",Qe=$||[],Oe=Qe.map(Et=>Et.duration_months||0),rt=Oe.reduce((Et,L)=>Et+L,0),nt=rt>0?Oe[le]/rt*100:100/Math.max(1,Qe.length),ct=le===0,Ot=le===Qe.length-1;return{flex:"0 0 "+nt+"%",background:Ve,borderRadius:ct?"6px 0 0 6px":Ot?"0 6px 6px 0":"0"}}function k(v){const $=v.length;if($<=4)return[v];const le=Math.ceil($/2);return[v.slice(0,le),v.slice(le).reverse()]}function D(v){const $=V()[v]||{},le=$.color||"var(--color-primary)";return{background:$.bg_color||"var(--bg-card)",borderColor:le,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const ce=Vue.reactive({}),U=Vue.ref(null);let y=null,o=null,T=null;function m(){if(document.querySelector(".merrill-timeline-block"))try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach(($,le)=>{const Te=$.querySelector(".tl-stage-rows"),Ve=$.querySelector(".tl-row-top"),Qe=$.querySelector(".tl-row-bottom"),Oe=Ve?Array.from(Ve.querySelectorAll(".merrill-stage-chip")):[],rt=Qe?Array.from(Qe.querySelectorAll(".merrill-stage-chip")).reverse():[],nt=Oe.concat(rt);if(!Te||nt.length<2){ce[le]={d:"",vb:"0 0 1 1"};return}const ct=Te.getBoundingClientRect(),Ot=Math.max(1,ct.width),Et=Math.max(1,ct.height),L=Oe.length,fe=nt.map(Me=>{const ze=Me.getBoundingClientRect();return{x:ze.left+ze.width/2-ct.left,y:ze.top+ze.height/2-ct.top}});let Le="M "+fe[0].x.toFixed(1)+" "+fe[0].y.toFixed(1);for(let Me=1;Me<fe.length;Me++){const ze=fe[Me-1],He=fe[Me];Me===L&&(Le+=" L "+ze.x.toFixed(1)+" "+He.y.toFixed(1)),Le+=" L "+He.x.toFixed(1)+" "+He.y.toFixed(1)}ce[le]={d:Le,vb:"0 0 "+Ot.toFixed(1)+" "+Et.toFixed(1)}})}catch(v){console.error("[tl] buildTlPaths error",v)}}function W(v){return ce[v]||{d:"",vb:"0 0 1 1"}}function ue(v){U.value=v}function Z(){U.value=null}const P=Vue.ref([]);function G(v){return P.value.indexOf(v)!==-1}function re(v){const $=P.value.slice(),le=$.indexOf(v);le!==-1?$.splice(le,1):$.push(v),P.value=$,Vue.nextTick(function(){m&&m()})}function pe(){const v=document.querySelector(".merrill-timeline-block");if(!v)return;const $=v.querySelector(".tl-spine");$?$.scrollIntoView({behavior:"smooth",block:"end"}):v.scrollIntoView({behavior:"smooth",block:"end"})}const de=Vue.computed(function(){const v=V();return["recovery","overheat","stagflation","recession","default"].filter(function(le){return v[le]&&v[le].name}).map(function(le){return{key:le,name:v[le].name,color:v[le].color||"var(--color-primary)"}})});function J(v){o&&clearTimeout(o),o=setTimeout(()=>{o=null,Vue.nextTick(m)},v||120)}Vue.onMounted(()=>{document.querySelector(".merrill-timeline-block")&&(J(0),J(800),y=()=>J(150),window.addEventListener("resize",y),T=new MutationObserver(()=>J(120)),T.observe(document.body||document.documentElement,{childList:!0,subtree:!0}))}),Vue.onBeforeUnmount(()=>{y&&window.removeEventListener("resize",y),o&&clearTimeout(o),T&&(T.disconnect(),T=null)});const oe=Vue.ref([]),Pe=Vue.ref(null),ke=Vue.ref(!1),_e=Vue.ref(!1),te=Vue.ref(7),xe=Vue.ref(""),De=Vue.ref(""),ne=Vue.computed(()=>{const v=new Set;return(oe.value||[]).forEach(function($){$.task&&v.add($.task)}),Array.from(v).sort()}),ae=Vue.computed(function(){const v=Pe.value&&Pe.value.success_rate||0;return v>=80?"color-success":v>=50?"color-warning":"color-danger"});function he(v,$){return v>0&&$/v>=.8?"status-ok":v>0&&$/v>=.5?"status-warn":"status-bad"}async function Ne(){const v=++d;ke.value=!0,_e.value=!1;try{const $=window.__quantModules&&window.__quantModules.core||{},le=typeof $.authHeaders=="function"?$.authHeaders():{},Te=new URLSearchParams({days:String(te.value)});xe.value&&Te.set("task",xe.value),De.value&&Te.set("status",De.value);const[Ve,Qe]=await Promise.all([fetch("/api/system/execution-history?"+Te.toString(),{headers:le}).then(function(Oe){return Oe.json()}),fetch("/api/system/execution-summary?days="+te.value,{headers:le}).then(function(Oe){return Oe.json()})]);if(v!==d)return;oe.value=Ve&&Ve.data||[],Pe.value=Qe&&Qe.data||null}catch($){console.error("[execution] 执行数据加载失败:",$),_e.value=!0}finally{v===d&&(ke.value=!1)}}const Ie=window.__quantModules&&window.__quantModules.i18n||{},Ue=typeof Ie.t=="function"?Ie.t:function(v){return String(v)},Ge=Vue.ref([]),ht=Vue.ref(null),st=Vue.ref(null),Rt=Vue.ref(""),Se=Vue.ref([]),we=Vue.ref(!1);let Ae=null;const Re=Vue.computed(function(){const v=st.value&&st.value.dates||[];return v.length&&!Rt.value&&(Rt.value=v[v.length-1].date),v}),Xe=Vue.computed(function(){const v=(Ge.value||[]).find(function(le){return le.enabled});if(!v||v.countdown_seconds==null)return"—";const $=v.countdown_seconds;return Math.floor($/3600)+"h"+String(Math.floor($%3600/60)).padStart(2,"0")+"m"}),Ze=Vue.computed(function(){const v=(Ge.value||[]).find(function($){return $.enabled});if(!v||v.countdown_seconds==null||v.countdown_seconds<0)return"";try{return new Date(Date.now()+v.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),tt=Vue.computed(function(){const v=ht.value;return!v||v.phase==="idle"?Ue("exec.waiting"):v.phase==="running"?Ue("exec.running")+(v.current_sid?" · "+v.current_sid:""):v.phase==="done"?Ue("exec.done"):Ue("exec.failed")}),xt=Vue.computed(function(){return ht.value&&ht.value.phase==="running"?"loader":"check-circle-2"}),St=Vue.computed(function(){const v=st.value&&st.value.dates||[];return v.length?v[v.length-1].date:"—"}),pt=Vue.computed(function(){const v=st.value&&st.value.dates||[],$=v[v.length-1];return $&&$.visible?"color-success":"color-danger"}),zt=Vue.computed(function(){const v=st.value&&st.value.dates||[],$=v[v.length-1];return $?$.day_view_total:"—"});function Kt(v){const $=window.__quantModules&&window.__quantModules.core||{},le=typeof $.authHeaders=="function"?$.authHeaders():{};return fetch(v,{headers:le}).then(function(Te){return Te.json()})}async function Jt(){const v=++d;try{const[$,le,Te]=await Promise.all([Kt("/api/strategies/execution/plan"),Kt("/api/strategies/execution/status"),Kt("/api/strategies/execution/results?days=7")]);if(v!==d)return;Ge.value=$&&$.data&&$.data.plans||[],ht.value=le&&le.data||null,st.value=Te&&Te.data||null,ht.value&&ht.value.phase==="running"?et():yt()}catch($){console.error("[execution-monitor] 监控数据加载失败:",$)}}function et(){yt(),Ae=setInterval(function(){Kt("/api/strategies/execution/status").then(function(v){ht.value=v&&v.data||null,ht.value&&ht.value.phase!=="running"&&(yt(),Jt())}).catch(function(){})},5e3)}function yt(){Ae&&(clearInterval(Ae),Ae=null)}async function Wt(v){if(!v)return;const $=++d;we.value=!0;try{const le=await Kt("/api/strategies/execution/trace/"+encodeURIComponent(v));if($!==d)return;const Te=le&&le.data||null;Se.value=Te&&Te.steps||[]}catch(le){console.error("[execution-trace] 追溯加载失败:",le)}finally{$===d&&(we.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(v){v==="execution"?(Ne(),Jt()):yt()},{immediate:!0}),Vue.watch(function(){const v=e.currentSubPage&&e.currentSubPage.value,$=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],le=e.marketData&&e.marketData.value||{};return{sub:v,split:!!e.detailSplitEnabled.value,top5:$.slice(0,5),rank:$,indices:(le.indices||[]).map(function(Te){return Te})}},function(v,$){if(v.split){if(v.sub==="overview"){if(!v.top5.length)return;const le=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Te=v.top5.some(function(Ve){return Ve.code===le});(!le||!Te)&&e.showStockDetail&&e.showStockDetail(v.top5[0].code)}else if(v.sub==="consensus"){if(!v.rank.length)return;const le=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Te=v.rank.some(function(Ve){return Ve.code===le});(!le||!Te)&&e.showStockDetail&&e.showStockDetail(v.rank[0].code)}else if(v.sub==="market"){if(!v.indices.length)return;const le=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,Te=v.indices.some(function(Ve){return Ve.code===le});(!le||!Te)&&e.showIndexDetail&&e.showIndexDetail(v.indices[0])}}},{immediate:!0});const gt=Vue.ref("band"),Ut=["recession","recovery","overheating","stagflation"];function _t(v){if(!v)return null;const $=String(v).split("-"),le=parseInt($[0],10),Te=parseInt($[1]||"1",10);return isFinite(le)?le+(Te-1)/12:null}function Je(v){const $=Math.floor(v);let le=Math.round((v-$)*12)+1;return le>12&&(le=12),le<1&&(le=1),$+"-"+(le<10?"0"+le:""+le)}function At(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function wt(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function Q(v,$){const le=At(),Te=Number(le.avg_duration_months)||0,Ve=Math.min(100,Number(le.progress_percent)||0),Qe=_t(le.current_stage_start_date),Oe=[];let rt=null;if((v||[]).forEach(function(ze){const He=_t(ze.start);rt==null&&He!=null&&(rt=He);const mt=!!(ze.is_current||Qe!=null&&He===Qe&&!ze.duration_months),Mt=ze.name||I(ze.stage);if(mt&&Te>0){const it=Te*Ve/100;it>.5&&Oe.push({stage:ze.stage,name:Mt,months:it,live:!0,start:ze.start});const Bt=Te-it;Bt>.5&&Oe.push({stage:ze.stage,name:"剩余(预测)",months:Bt,ghost:!0,start:ze.start})}else{let it=Number(ze.duration_months)||0;if(!it&&He!=null){const Bt=_t(ze.end);Bt!=null&&Bt>He&&(it=Math.max(1,Math.round((Bt-He)*12)))}it||(it=1),Oe.push({stage:ze.stage,name:Mt,months:it,live:mt,start:ze.start,end:ze.end})}if(mt&&$&&Te>0){const it=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;it&&Oe.push({stage:it.next_stage,name:(it.next_stage_name||"下一阶段")+" (预测)",months:Te,ghost:!0,prob:it.transition_probability})}}),!Oe.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const nt=Oe.reduce(function(ze,He){return ze+He.months},0)||1,ct=rt??0;let Ot=0,Et=0;const L=Oe.map(function(ze){const He=Ot;ze.ghost||(Et+=ze.months),Ot+=ze.months;const mt={stage:ze.stage,name:ze.name,months:Math.round(ze.months),ghost:!!ze.ghost,live:!!ze.live,prob:ze.prob,left:He/nt*100,width:Math.max(2,ze.months/nt*100)},Mt=_t(ze.start),it=_t(ze.end);return mt.start=Mt!=null?Je(Mt):Je(ct+He/12),mt.end=it!=null?Je(it):"",mt.predicted=Mt==null,mt}),fe=Oe[Oe.length-1],Le=Oe.some(function(ze){return ze.ghost}),Me=fe&&fe.end?fe.end:Je(ct+nt/12);return{segs:L,axisStart:Je(ct),axisEnd:Me,nowPct:Le?Et/nt*100:null}}function ge(v){return(v.stages||[]).some(function($){return $.is_current})}const at=Vue.computed(function(){const v=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!v.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let $=null;for(let le=v.length-1;le>=0;le--)if(ge(v[le])){$=v[le];break}return $||($=v[v.length-1]),Q($.stages,!0)}),kt=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function($){return!ge($)}).map(function($){return{label:$.label,years:Y($),segs:Q($.stages,!1).segs}})}),lt=Ut,It=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function($){const le={};Ut.forEach(function(Ve){le[Ve]=0});let Te=null;return($.stages||[]).forEach(function(Ve){le[Ve.stage]!=null&&(le[Ve.stage]+=Number(Ve.duration_months)||0),Ve.is_current&&(Te=Ve.stage)}),{label:$.label,sum:le,cur:Te}})}),ea=Vue.computed(function(){let v=0;return It.value.forEach(function($){Ut.forEach(function(le){$.sum[le]>v&&(v=$.sum[le])})}),v||1}),aa=Vue.computed(function(){const v=e.merrillSnapshots&&e.merrillSnapshots.value||[],$=[];return v.forEach(function(le){const Te=$[$.length-1];Te&&Te.stage===le.stage?(Te.count++,Te.last=le.timestamp):$.push({stage:le.stage,name:le.stage_name||I(le.stage),count:1,first:le.timestamp,last:le.timestamp})}),$}),na=Vue.computed(function(){return Math.max(100,Math.min(200,Number(At().progress_percent)||0))}),ta=Vue.computed(function(){const v=Number(At().progress_percent)||0;return{width:Math.max(0,Math.min(100,v/na.value*100))+"%",background:v>100?"linear-gradient(90deg, "+wt()+", var(--color-warning))":wt()}}),Qt=Vue.computed(function(){return 100/na.value*100}),Ht=Vue.computed(function(){const v=At().predicted_end;if(!v)return"";if(typeof v=="string")return v;const $=v.optimistic||v.earliest||"",le=v.pessimistic||v.latest||"";return $&&le?$+" ~ "+le:v.base||v.mid||$||le||""});function Nt(v){const $=q(v.stage);return v.ghost?{left:v.left+"%",width:v.width+"%",borderColor:$,color:"var(--text-secondary)",background:"repeating-linear-gradient(45deg, "+$+"44, "+$+"44 5px, transparent 5px, transparent 10px)"}:{left:v.left+"%",width:v.width+"%",background:$}}function Gt(v){const $=[v.name];return v.start&&$.push((v.predicted?"预计起始 ":"起始 ")+v.start+(v.end?" → "+v.end:"")),v.months&&$.push("约 "+v.months+" 个月"),v.ghost&&$.push("预测(尚未发生)"),v.prob!=null&&$.push("转移概率 "+(v.prob*100).toFixed(0)+"%"),$.join(" · ")}function ft(v,$){const le=q(v),Te=Math.max(.28,$/ea.value);return{background:le,opacity:(.45+.55*Te).toFixed(2)}}return{...e,todayText:M,tradingStatus:_,merrillNext:z,todayFocus:F,todaySignals:C,merrillConfigOpen:f,getTimelineStageColor:q,getTimelineStageName:I,getTimelineStageDesc:se,timelineRows:k,tlChipStyle:D,tlPathFor:W,tlCycleYears:Y,tlGanttStyle:N,tlTipYears:ee,tlTipBrief:j,tlCurrentBrief:H,tlHoverKey:U,setTlHover:ue,clearTlHover:Z,collapsedCycles:P,isCycleCollapsed:G,toggleCycle:re,scrollToLatest:pe,tlLegendStages:de,mcHistView:gt,mcCurrentBand:at,mcHistoryBands:kt,mcStageKeys:lt,mcMatrix:It,mcTrailRuns:aa,mcProgStyle:ta,mcAvgMark:Qt,mcEndRange:Ht,mcSegStyle:Nt,mcSegTitle:Gt,mcMxCellStyle:ft,tlClickStage:u,tlClickVisible:l,closeTlClick:R,tlClickPosStyle:O,merrillTimeline:c,timelineLoading:n,showTimelineStage:X,execHistory:oe,execSummary:Pe,execLoading:ke,execError:_e,execDays:te,execTaskFilter:xe,execStatusFilter:De,execTaskOptions:ne,execSuccessClass:ae,loadExecutionData:Ne,execRateClass:he,execPlan:Ge,execStatus:ht,execResults:st,execTraceDate:Rt,execTraceSteps:Se,execTraceLoading:we,execResultsDates:Re,execCountdownText:Xe,execNextRunText:Ze,execPhaseText:tt,execStatusIcon:xt,execLastDate:St,execVisibleClass:pt,execVisibleText:zt,loadExecutionTrace:Wt}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
                <div v-if="currentPage === 'system' || currentPage === 'ops'" key="system" class="system-page-root">
                    <!-- V6.1 (PRD-6.1 F3): 移除页内标题 (由中栏分组导航/面包屑承载) -->
                    <div v-if="currentSubPage === 'status'" class="card system-status-card">
                        <div class="card-title flex-between">
                            <span>状态概览</span>
                            <div class="flex-c-gap-8">
                                <span class="text-sm-secondary" v-if="dashboardData.latest_date"><qc-icon name="calendar" :size="14" /> {{ dashboardData.latest_date }}</span>
                            </div>
                        </div>
                        <div class="status-grid">
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="trending-up" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.stockData') }}</div>
                                    <div class="status-value color-primary">{{ stockCount || '---' }} {{ t('common.unitStock') }}</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="target" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.strategyData') }}</div>
                                    <div class="status-value color-primary">{{ dashboardData.stats?.strategy_count || '---' }} 个</div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'autoeval'" title="点击配置 AI 自动评估">
                                <div class="status-icon"><qc-icon name="bot" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.aiService') }}</div>
                                    <!-- V6.6: 已配置/未配置 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: aiStatus === 'ok' ? 'var(--primary-text)' : 'var(--text-secondary)'}">
                                        {{ aiStatus === 'ok' ? t('system.ok') : t('system.needsConfig') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'feature'" title="点击配置飞书推送">
                                <div class="status-icon"><qc-icon name="message-circle" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.feishuPush') }}</div>
                                    <!-- V6.6: 已配置/未配置 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: feishuConfig.webhook_url ? 'var(--primary-text)' : 'var(--text-secondary)'}">
                                        {{ feishuConfig.webhook_url ? t('system.configured') : t('system.notConfigured') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'datasource'" title="点击配置数据源">
                                <div class="status-icon"><qc-icon name="bar-chart-3" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.tushare') }}</div>
                                    <!-- V6.6: 已连接/未连接 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: tushareStatus === 'connected' ? 'var(--primary-text)' : 'var(--text-secondary)'}">
                                        {{ tushareStatus === 'connected' ? t('system.connected') : t('system.notConnected') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="calendar" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.tradeCalendar') }}</div>
                                    <div class="status-value color-primary">{{ tradeDateCount || '---' }} {{ t('system.unitDays') }}</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="sparkles" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.poolStocks') }}</div>
                                    <div class="status-value color-primary">{{ currentPoolSize }} {{ t('common.unitStock') }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- V5.0 (T-5.0.6): 健康与可靠性面板 — 数据新鲜度/自愈时间线/启动自检/数据源可用性 -->
                        <div class="card mt-24">
                            <div class="card-title flex-between">
                                <span><qc-icon name="activity" :size="14" /> 健康与可靠性 <span class="text-xs-tertiary" v-if="healthUpdatedAt">· 更新于 {{ healthUpdatedAt }}</span></span>
                                <el-button size="small" :loading="healthLoading" @click="refreshHealth">刷新</el-button>
                            </div>
                            <div class="text-sm qc-text-error" v-if="healthError">{{ healthError }}</div>

                            <!-- 启动自检摘要 -->
                            <div class="flex-c-gap-8 mb-12" v-if="startupReport">
                                <span class="health-badge qc-text-success">自检 ok {{ startupReport.ok_count }}</span>
                                <span class="health-badge qc-text-warning" v-if="startupReport.warn_count">warn {{ startupReport.warn_count }}</span>
                                <span class="health-badge qc-text-error" v-if="startupReport.fail_count">fail {{ startupReport.fail_count }}</span>
                                <span class="health-badge" :class="startupReport.healthy ? 'qc-text-success' : 'qc-text-error'">{{ startupReport.healthy ? '健康' : '不健康' }}</span>
                                <span class="text-xs-tertiary" v-if="startupReport.ts">· {{ startupReport.ts }}</span>
                            </div>
                            <div class="text-sm-tertiary mb-12" v-else>启动自检报告尚未生成（服务重启后自动生成）</div>

                            <!-- 数据新鲜度 -->
<!-- 数据新鲜度 -->
                            <!-- V5.3.0 (T-5.3.6.2): 数据旧了 告警条 -->
                            <div v-if="staleAssetCount > 0" class="health-stale-banner">
                                <qc-icon name="alert-triangle" :size="14" /> 数据已过期: {{ staleAssetCount }} 项资产 (点击刷新数据源)
                                <el-button size="small" class="ml-8" @click="refreshHealth">重新检查</el-button>
                            </div>
                            <div class="health-section-title"><qc-icon name="calendar" :size="14" /> 数据新鲜度</div>
                            <el-table :data="freshnessData.items" size="small" v-loading="healthLoading" style="width:100%">
                                <el-table-column prop="name" label="资产" min-width="150" />
                                <el-table-column label="状态" width="90">
                                    <template #default="{ row }">
                                        <!-- V6.6: statusColor() 函数枚举映射色，保留内联 -->
                                        <span :style="{color: statusColor(row.status)}">{{ statusLabel(row.status) }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="latest_date" label="最新日期" width="120" />
                                <el-table-column prop="last_update" label="最后更新" min-width="160" />
                                <el-table-column prop="age_hours" label="距今(时)" width="90" />
                            </el-table>
                            <div class="text-sm-tertiary mt-8" v-if="!freshnessData.items || !freshnessData.items.length">暂无新鲜度数据 — 数据资产在运行时自动登记</div>

                            <!-- 自愈时间线 -->
                            <div class="health-section-title mt-20"><qc-icon name="settings" :size="14" /> 自愈时间线（最近 {{ healHistory.length }} 次）</div>
                            <div v-if="healHistory.length" class="heal-list">
                                <div v-for="(h, i) in healHistory" :key="i" class="heal-row">
                                    <span class="text-xs-tertiary heal-ts">{{ h.ts }}</span>
                                    <span class="heal-action">{{ h.action }}</span>
                                    <span class="text-xs-tertiary">{{ h.target }}</span>
                                    <span :class="h.ok ? 'qc-text-success' : 'qc-text-error'"><qc-icon :name="h.ok ? 'check' : 'x'" :size="14" /></span>
                                    <span class="text-xs-tertiary heal-summary">{{ h.summary }}</span>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无自愈记录 — 巡检随调度健康检查自动执行</div>

                            <!-- 数据源可用性 -->
                            <div class="health-section-title mt-20"><qc-icon name="radio-tower" :size="14" /> 数据源可用性</div>
                            <div class="flex-c-gap-12-wrap" v-if="sourceHealth.data_sources && sourceHealth.data_sources.length">
                                <div v-for="s in sourceHealth.data_sources" :key="s.name" class="health-source-item">
                                    <span class="source-name">{{ s.name }}</span>
                                    <span :class="sourceOk(s) ? 'qc-text-success' : 'qc-text-error'">{{ sourceOk(s) ? '正常' : '降级' }}</span>
                                    <span class="text-xs-tertiary" v-if="s.success_rate != null">成功率 {{ s.success_rate }}%</span>
                                    <span class="text-xs-tertiary" v-if="s.avg_ms != null">· {{ s.avg_ms }}ms</span>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无数据源健康数据</div>
                        </div>

                        <!-- V6.6.1 (PRD F-6.6.8 方案A): 操作审计 — 自 about 归位至运行监控 (仅管理员可见) -->
                        <div class="card mt-24" v-if="currentUser?.role === 'admin'">
                            <div class="card-title flex-between">
                                <span><qc-icon name="shield" :size="14" /> 操作审计 <span class="text-sm-tertiary">(管理员)</span></span>
                                <el-button size="small" @click="loadAuditLogs" :loading="auditLoading">刷新</el-button>
                            </div>
                            <div v-if="auditLogs.length" class="audit-list">
                                <div v-for="l in auditLogs" :key="l.id" class="audit-row">
                                    <span class="audit-action">{{ l.action }}</span>
                                    <span class="text-sm">{{ l.username }}</span>
                                    <span class="text-sm-tertiary">{{ l.ts }}</span>
                                    <span class="text-sm-tertiary audit-detail">{{ l.detail }}</span>
                                </div>
                            </div>
                            <div v-else class="text-sm-tertiary m-0-0-12">暂无审计记录</div>
                        </div>

                    </div>

                    <!-- V6.9.1-fix2: 配置保存独立子页 (自 status 拆出) -->
                    <div v-else-if="currentSubPage === 'config'">
                        <!-- v3.16 (FR-3.16.1): 配置管理 — 通用操作栏 (靠上放置, v3.17 UI优化) -->
                        <div class="card">
                            <div class="card-title flex-between">
                                <span>{{ t('system.configManage') }}</span>
                                <span class="text-xs-tertiary" v-if="lastSavedTime">{{ t('system.lastSaved') }}{{ lastSavedTime }}</span>
                            </div>
                            <div class="flex-wrap-gap-10">
                                <el-button type="primary" :loading="configSaving" @click="saveAllConfig">{{ t('system.saveAll') }}</el-button>
                                <el-button @click="resetAllConfig">{{ t('system.reset') }}</el-button>
                                <el-button @click="exportConfig">{{ t('system.exportConfig') }}</el-button>
                                <el-button @click="$refs.importFileInput && $refs.importFileInput.click()">{{ t('system.importConfig') }}</el-button>
                                <input class="hide" ref="importFileInput" type="file" accept=".json,application/json" @change="importConfig"/>
                            </div>
                            <div class="text-sm-tertiary-mt10">保存全部：将 AI / 数据源 / 飞书 / 限流 / 主题 / 图标等配置一并写入后端；重置：从后端重新加载已保存配置；导出 / 导入：配置文件整体备份与迁移。</div>
                        </div>




                    <!-- 访问限速配置 -->
                    <div class="card mt-24">
                        <div class="card-title"><qc-icon name="gauge" :size="14" /> 访问限速配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="API 限流 (次/分钟/IP)">
                                <el-input-number v-model="rateLimitConfig.api_limit" :min="10" :max="10000" :step="50" @change="saveRateLimit" />
                                <div class="text-sm-tertiary-mt8">当前设置: 每分钟 {{ rateLimitConfig.api_limit }} 次请求</div>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- V6.6.1 (PRD F-6.6.8 方案A): 外观设置/语言/K线显示已迁往 feature「界面与个性化」区 (个性化归位) -->
                    <!-- V6.1 (PRD-6.1 F4): 移除图标系统切换卡片 — 导航图标统一为一套, 不再提供四套切换 -->
                </div>

                    <!-- V6.0 (P1-3): health — 数据源健康独立子页 -->
                    <div v-else-if="currentSubPage === 'health'">
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="bar-chart-3" :size="14" /> 数据源健康</span>
                                <el-button size="small" :loading="healthLoading" @click="refreshHealth">刷新</el-button>
                            </div>
                            <div class="text-sm qc-text-error" v-if="healthError">{{ healthError }}</div>
                            <div class="section-block-top">
                                <div class="section-title-base"><qc-icon name="radio-tower" :size="14" /> 数据源可用性</div>
                                <div class="flex-c-gap-12-wrap" v-if="sourceHealth.data_sources && sourceHealth.data_sources.length">
                                    <div v-for="s in sourceHealth.data_sources" :key="s.name" class="health-source-item">
                                        <span class="source-name">{{ s.name }}</span>
                                        <span :class="sourceOk(s) ? 'qc-text-success' : 'qc-text-error'">{{ sourceOk(s) ? '正常' : '降级' }}</span>
                                        <span class="text-xs-tertiary" v-if="s.success_rate != null">成功率 {{ s.success_rate }}%</span>
                                        <span class="text-xs-tertiary" v-if="s.avg_ms != null">· {{ s.avg_ms }}ms</span>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary" v-else>暂无数据源健康数据</div>
                            </div>
                            <div class="section-block-top">
                                <div class="section-title-base"><qc-icon name="refresh" :size="14" /> 路由状态</div>
                                <div class="usage-src-grid" v-if="(healthDetail.data_sources || []).length">
                                    <div class="usage-src-card" :class="ds.routing_status === 'cooling' ? 'is-degraded' : ''" v-for="(ds, i) in healthDetail.data_sources" :key="i">
                                        <div class="usage-src-head">
                                            <span class="usage-src-name">{{ ds.name }}</span>
                                            <span :class="ds.routing_status === 'cooling' ? 'chip-warning' : 'chip-success'">{{ ds.routing_status === 'cooling' ? '冷却中' : '参与路由' }}</span>
                                        </div>
                                        <div class="usage-src-row">
                                            <span class="usage-src-row-label">成功率</span>
                                            <span class="usage-src-row-value">{{ ds.success_rate ?? '--' }}%</span>
                                        </div>
                                        <div class="usage-src-row">
                                            <span class="usage-src-row-label">平均延迟</span>
                                            <span class="usage-src-row-value">{{ ds.avg_latency_ms ?? '--' }}ms</span>
                                        </div>
                                        <div class="usage-src-row" v-if="ds.consecutive_failures">
                                            <span class="usage-src-row-label">连续失败</span>
                                            <span class="usage-src-row-value">{{ ds.consecutive_failures }} 次</span>
                                        </div>
                                        <div class="usage-src-row" v-if="ds.switch_reason">
                                            <span class="usage-src-row-label">最近切换</span>
                                            <span class="usage-src-row-value" :title="ds.last_switch_at">{{ ds.switch_reason }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="usage-ai-empty" v-else>暂无数据源调用记录（服务刚重启时为空，随调用自动累计）</div>
                            </div>
                            <div class="section-block-top">
                                <div class="section-title-base"><qc-icon name="activity" :size="14" /> 数据健康度</div>
                                <div class="today-health-strip">
                                    <div v-if="healthRows.length === 0" class="today-health-empty">{{ t('strategies.noSourceCall') }}</div>
                                    <div v-for="s in healthRows" :key="s.source" class="today-health-item" :class="{ 'is-stale': s.stale }" :title="s.last_fetch ? '最近成功: ' + s.last_fetch : '尚无成功调用'">
                                        <span class="today-health-dot" :class="healthClass(s)"></span>
                                        <span class="today-health-name">{{ s.name }}</span>
                                        <span class="today-health-rate">{{ s.success_rate != null ? s.success_rate + '%' : '—' }}</span>
                                        <span class="today-health-lat" v-if="s.avg_latency_ms != null">{{ s.avg_latency_ms }}ms</span>
                                        <span class="today-health-age" v-if="s.data_age_hours != null" :class="{ 'is-stale': s.stale }">{{ fmtAge(s.data_age_hours) }}</span>
                                        <span class="today-health-calls">{{ s.calls }}次</span>
                                        <span v-if="s.degraded" class="today-health-badge">degraded</span>
                                        <span v-if="s.stale" class="today-health-badge is-stale"><qc-icon name="clock" :size="12" /> 超期</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- V6.0 (P1-3): schedule — 调度任务独立子页 -->
                    <div v-else-if="currentSubPage === 'schedule'">
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="layers" :size="14" /> 调度任务</span>
                                <el-button size="small" @click="loadHealthDetail">刷新</el-button>
                            </div>
                            <div class="sys-health-grid" v-if="Object.keys(healthDetail.scheduler_tasks || {}).length">
                                <div class="sys-health-card" v-for="(t, k) in healthDetail.scheduler_tasks" :key="k">
                                    <div class="sys-health-card-head">
                                        <span class="sys-health-name">{{ t.name || k }}</span>
                                        <span :class="t.last_status === 'success' ? 'chip-success' : t.last_status === 'failed' ? 'chip-danger' : 'chip-info'">{{ t.last_status === 'success' ? '正常' : t.last_status === 'failed' ? '失败' : '未运行' }}</span>
                                    </div>
                                    <div class="sys-health-row">
                                        <span class="text-sm-tertiary">最近运行</span>
                                        <span class="sys-health-meta">{{ t.last_run || '—' }}</span>
                                    </div>
                                    <div class="sys-health-row">
                                        <span class="text-sm-tertiary">最近成功</span>
                                        <span class="sys-health-meta">{{ t.last_success || '—' }}</span>
                                    </div>
                                    <div class="sys-health-row" v-if="t.last_status === 'failed'">
                                        <span class="text-sm-tertiary">连续失败</span>
                                        <span class="sys-health-meta">{{ t.consecutive_failures || 0 }} 次</span>
                                    </div>
                                    <div class="sys-health-row" v-if="t.last_status === 'failed' && t.detail">
                                        <span class="text-sm-tertiary">失败原因</span>
                                        <span class="sys-health-meta" :title="t.detail">{{ (t.detail || '').slice(0, 60) }}{{ (t.detail || '').length > 60 ? '…' : '' }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无调度任务运行记录（服务刚重启时为空，随定时任务自动填充）</div>
                        </div>
                        <div class="card mt-14">
                            <div class="card-title flex-between">
                                <span><qc-icon name="layers" :size="14" /> 任务队列</span>
                                <el-button size="small" text @click="loadJobQueue">刷新</el-button>
                            </div>
                            <div class="sys-health-grid" v-if="jobQueue.length">
                                <div class="sys-health-card" v-for="j in jobQueue" :key="j.job_id">
                                    <div class="sys-health-card-head">
                                        <span class="sys-health-name">{{ j.task_type }}</span>
                                        <span :class="j.status === 'completed' ? 'chip-success' : (j.status === 'running' || j.status === 'pending') ? 'chip-info' : 'chip-danger'">{{ jobStatusText(j.status) }}</span>
                                    </div>
                                    <div class="sys-health-row">
                                        <span class="text-sm-tertiary">进度</span>
                                        <el-progress :percentage="Number(j.progress) || 0" :stroke-width="10" :status="j.status === 'failed' ? 'exception' : (j.status === 'completed' ? 'success' : '')" style="width: 160px"></el-progress>
                                    </div>
                                    <div class="sys-health-row" v-if="j.message">
                                        <span class="text-sm-tertiary">状态</span>
                                        <span class="sys-health-meta">{{ j.message }}</span>
                                    </div>
                                    <div class="sys-health-row" v-if="j.status === 'running' || j.status === 'pending'">
                                        <el-button size="small" type="danger" text @click="cancelJob(j.job_id)">取消任务</el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无队列任务（批量评估/回测等长任务会出现在这里）</div>
                        </div>
                    </div>

                    <!-- V6.0 (P1-3): guard — AI 事实护栏独立子页 -->
                    <div v-else-if="currentSubPage === 'guard'">
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="search" :size="14" /> AI 事实护栏审计</span>
                                <el-button size="small" :loading="factCheckRunning" @click="triggerFactCheck">立即抽查</el-button>
                            </div>
                            <div v-if="factCheck" class="sys-health-grid">
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">抽查日期</div>
                                    <div class="sys-health-big">{{ factCheck.date || '—' }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">检查数字</div>
                                    <div class="sys-health-big">{{ factCheck.checked ?? 0 }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">通过率</div>
                                    <div class="sys-health-big" :class="(factCheck.pass_rate ?? 100) >= 90 ? 'color-primary' : ''">{{ factCheck.pass_rate != null ? factCheck.pass_rate + '%' : '--' }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">未验证</div>
                                    <div class="sys-health-big">{{ factCheck.unverified ?? 0 }}</div>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无事实护栏审计报告（点击"立即抽查"生成）</div>
                            <div v-if="factCheck && factCheck.failures && factCheck.failures.length" class="sys-health-row">
                                <span class="text-sm-tertiary">失败明细</span>
                                <span class="sys-health-meta">{{ factCheck.failures.length }} 条（最近 {{ factCheck.failures[0].number }} 等）</span>
                            </div>
                        </div>
                    </div>

                    <!-- autoeval: 自动评估配置 (v1.8.0) -->
                    <div v-else-if="currentSubPage === 'autoeval'">
                        <div class="card">
                            <div class="card-title"><qc-icon name="bot" :size="14" /> 自动评估配置</div>
                            <el-form label-width="100px">
                                <el-form-item label="启用">
                                    <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" @change="saveAutoEvaluateConfig" />
                                </el-form-item>
                                <template v-if="autoEvaluateConfig.enabled">
                                    <el-form-item label="调度频率">
                                        <el-select class="w-select-md" v-model="autoEvaluateConfig.schedule_type" @change="saveAutoEvaluateConfig">
                                            <el-option label="每个交易日" value="daily" />
                                            <el-option label="每周一" value="weekly" />
                                            <el-option label="每月1号" value="monthly" />
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="执行时间">
                                        <el-time-picker class="w-160" v-model="autoEvaluateConfig.schedule_time" format="HH:mm" value-format="HH:mm" @change="saveAutoEvaluateConfig"/>
                                    </el-form-item>
                                    <el-form-item label="评估范围">
                                        <el-radio-group v-model="autoEvaluateScope" @change="saveAutoEvaluateConfig">
                                            <el-radio label="watchlist">我的自选</el-radio>
                                            <el-radio label="new_entries">最新交易日新入池</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="结果推送">
                                        <el-switch v-model="autoEvaluateConfig.push_to_feishu" active-text="推送到飞书" inactive-text="不推送" @change="saveAutoEvaluateConfig" />
                                    </el-form-item>
                                    <el-form-item v-if="autoEvaluateConfig.push_to_feishu" label="Webhook">
                                        <el-input class="w-100-max420" v-model="autoEvaluateConfig.feishu_webhook" placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..." @change="saveAutoEvaluateConfig"/>
                                    </el-form-item>
                                </template>
                            </el-form>
                        </div>

                    <!-- v3.16 (FR-3.16.1): 飞书推送配置 — 独立 Webhook 配置 + 测试发送 -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="message-circle" :size="14" /> 飞书推送配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="Webhook">
                                <el-input class="max-w-460" v-model="feishuConfig.webhook_url" placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..."/>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="small" @click="saveFeishuConfig" :loading="feishuSaving"><qc-icon name="hard-drive" :size="14" /> 保存配置</el-button>
                                <el-button size="small" @click="testFeishuWebhook" :loading="feishuTestStatus === 'testing'"><qc-icon name="flask-conical" :size="14" /> 测试发送</el-button>
                                <span class="ml-10-sm" v-if="feishuTestMessage" :class="feishuTestMessage.includes('成功') || feishuTestMessage.includes('已发送') ? 'qc-text-success' : 'qc-text-error'">{{ feishuTestMessage }}</span>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- AI 模型管理 (v3.14 厂商化: 以厂商为主配置卡, 卡内配 API 后管理多个模型名) -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="bot" :size="14" /> AI 模型管理</div>
                        <p class="text-sm-secondary-m0-16">以厂商为主配置卡，卡内配置 API（地址+密钥+超时）后选择多个模型名；按数组顺序（厂商 → 模型）串行调用，首个可用模型返回结果。</p>
                        <div class="flex-gap-8-mb16-wrap">
                            <el-button size="small" type="primary" @click="loadAiVendors"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                            <el-button size="small" type="primary" @click="testAllVendorModels" :loading="testingAllModels"><qc-icon name="flask-conical" :size="14" /> 探测全部</el-button>
                            <!-- v3.16 (FR-3.16.1): AI 连接测试入口 (testAiApi) -->
                            <el-button size="small" type="primary" @click="testAiApi" :loading="aiLoading"><qc-icon name="zap" :size="14" /> 连接测试</el-button>
                            <el-button size="small" type="primary" @click="saveAiVendors" :loading="savingAiModels"><qc-icon name="hard-drive" :size="14" /> 保存</el-button>
                            <el-dropdown class="ml-auto" trigger="click" @command="(cmd) => cmd === '__custom__' ? addCustomVendor() : addVendorFromCatalog(cmd)">
                                <el-button size="small" type="primary"><qc-icon name="plus" :size="14" /> 新增厂商</el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item v-if="!aiCatalog.vendors || aiCatalog.vendors.length===0" disabled>加载目录中…</el-dropdown-item>
                                        <el-dropdown-item v-for="(c,i) in aiCatalog.vendors" :key="c.vendor_key" :command="c.vendor_key" :divided="i>0 && c.kind !== aiCatalog.vendors[i-1].kind">{{ c.name }} <el-tag class="ml-6" size="small">{{ c.kind }}</el-tag></el-dropdown-item>
                                        <el-dropdown-item command="__custom__" divided>自定义厂商</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <div class="text-center-danger-pad16" v-if="aiModelsError"><qc-icon name="alert-triangle" :size="14" /> {{ aiModelsError }} <el-button size="small" @click="loadAiVendors">重试</el-button></div>
                        <div class="text-center-tertiary-pad20" v-if="!aiModelsError && aiVendors.length===0">加载中...</div>
                        <div v-if="!aiModelsError && aiVendors.length>0">
                        <div v-for="(v,vi) in aiVendors" :key="v.vendor_key" class="card mb-12">
                            <div class="card-title flex-between-wrap-gap6">
                                <span class="flex-c-gap-6-wrap">
                                    {{ v.name }}
                                    <el-tag size="small" :type="v.kind==='CodingPlan' ? 'warning' : v.kind==='国外' ? 'info' : v.kind==='国内' ? 'success' : 'primary'">{{ v.kind }}</el-tag>
                                    <el-tag v-if="v.tier" size="small" type="warning">套餐: {{ v.tier }}</el-tag>
                                    <span class="text-sm-tertiary" v-if="v.locked"><qc-icon name="lock" :size="12" /></span>
                                    <a class="text-sm-link" v-if="v.website" :href="v.website" target="_blank" rel="noopener">官网 ↗</a>
                                </span>
                                <el-button size="small" type="danger" @click="removeVendor(v)"><qc-icon name="x" :size="14" /> 删除厂商</el-button>
                            </div>
                            <el-form class="mt-2" label-width="90px" size="small">
                                <el-form-item label="厂商名"><el-input v-model="v.name" :disabled="v.locked" placeholder="厂商显示名"/></el-form-item>
                                <el-form-item label="类型">
                                    <el-select class="w-select-md" v-model="v.kind" :disabled="v.locked" size="small">
                                        <el-option label="国内" value="国内"/><el-option label="国外" value="国外"/>
                                        <el-option label="CodingPlan" value="CodingPlan"/><el-option label="自定义" value="自定义"/>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="套餐档位"><el-input class="w-220" v-model="v.tier" :disabled="v.locked" placeholder="CodingPlan: Lite/Pro"/></el-form-item>
                                <el-form-item label="Base URL"><el-input v-model="v.base_url" placeholder="https://.../v1"/></el-form-item>
                                <el-form-item label="API Key">
                                    <el-input :model-value="v._editing ? v.api_key : v._masked" :disabled="!v._editing" @update:model-value="val => { if (v._editing) { v.api_key = val; } else { v._masked = val; } }" placeholder="厂商级密钥，卡内模型共用">
                                        <template #suffix>
                                            <el-button size="small" :type="v._editing ? 'warning' : 'primary'" plain @click="toggleVendorEdit(v)" style="margin-left:4px"><qc-icon name="lock" :size="14" /> {{ v._editing ? '锁定' : '编辑密钥' }}</el-button>
                                        <span class="key-reveal-toggle" style="cursor:pointer;user-select:none;display:inline-flex;align-items:center" :title="v._revealed ? '收起（重新掩码）' : '查看完整密钥（需密码）'" @click="toggleVendorKeyReveal(v)" v-html="sanitizeHtml(viewIcon(v._revealed))"></span>
                                        </template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="超时(秒)"><el-input-number v-model="v.timeout" :min="10" :max="300" size="small"/></el-form-item>
                                <el-form-item label="模型列表">
                                    <div class="w-100">
                                        <div class="model-row" v-for="(m,mi) in v.models" :key="vi + '-' + mi">
                                            <span class="model-index">{{ mi+1 }}</span>
                                            <el-switch v-model="m.enabled" size="small"/>
                                            <el-input class="w-220" v-model="m.name" :disabled="m.locked" size="small" placeholder="模型名"/>
                                            <span class="text-sm-ellipsis" v-if="m.testResult!==undefined" :class="m.testResult.success?'qc-text-success':'qc-text-error'"><qc-icon :name="m.testResult.success ? 'check' : 'x'" :size="13" /> {{ m.testResult.message }}</span>
                                            <el-button size="small" type="primary" :loading="m._testing" @click="testVendorModel(v,m)"><qc-icon name="flask-conical" :size="14" /> 测试</el-button>
                                            <el-button v-if="!m.locked" size="small" type="danger" @click="removeVendorModel(v,mi)"><qc-icon name="x" :size="14" /></el-button>
                                        </div>
                                        <div class="flex-gap-8-mt8">
                                            <el-button size="small" @click="addVendorModel(v)"><qc-icon name="plus" :size="14" /> 添加模型</el-button>
                                            <el-button size="small" :loading="v._fetching" @click="fetchVendorModels(v)"><qc-icon name="radio-tower" :size="14" /> 获取模型列表</el-button>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- V6.6.1 (PRD F-6.6.8 方案A): notification — 通知中心独立子页 (自 autoeval 拆出, 逻辑不变) -->
                    <div v-else-if="currentSubPage === 'notification'">
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="bell" :size="14" /> 通知中心 <span class="text-sm-tertiary">自定义预警规则 · 投递历史 · 通道与静默</span></span>
                                <span class="text-sm-tertiary" v-if="ncMsg">{{ ncMsg }}</span>
                            </div>
                            <div class="flex-gap-8-mb16">
                                <el-button :type="ncTab === 'rules' ? 'primary' : ''" size="small" @click="onNcTab('rules')"><qc-icon name="scroll-text" :size="14" /> 通知规则</el-button>
                                <el-button :type="ncTab === 'history' ? 'primary' : ''" size="small" @click="onNcTab('history')"><qc-icon name="radio-tower" :size="14" /> 投递历史</el-button>
                                <el-button :type="ncTab === 'channels' ? 'primary' : ''" size="small" @click="onNcTab('channels')"><qc-icon name="moon" :size="14" /> 通道与静默</el-button>
                            </div>

                            <!-- 通知规则 Tab -->
                            <div v-if="ncTab === 'rules'">
                                <div class="flex-gap-12-mb12">
                                    <el-input class="w-140" v-model="ncNewCode" placeholder="股票代码 600519" clearable size="small"/>
                                    <el-select class="w-select" v-model="ncNewType" size="small">
                                        <el-option label="价格突破" value="price_above" />
                                        <el-option label="价格跌破" value="price_below" />
                                        <el-option label="涨跌幅超" value="pct_change" />
                                        <el-option label="量比异动" value="volume_surge" />
                                        <el-option label="入选股票池" value="new_pool" />
                                    </el-select>
                                    <el-input class="w-120" v-model="ncNewThreshold" placeholder="阈值" size="small"/>
                                    <el-button type="primary" size="small" @click="addAlertRule" :loading="ncLoading">+ 添加规则</el-button>
                                </div>
                                <el-table :data="ncRules" size="small" v-loading="ncLoading" style="width:100%">
                                    <el-table-column prop="stock_code" label="股票" width="110" />
                                    <el-table-column label="类型" width="110">
                                        <template #default="s">
                                            {{ ncTypeLabel(s.row.rule_type) }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="threshold" label="阈值" width="100" />
                                    <el-table-column label="启用" width="90">
                                        <template #default="s">
                                            <el-switch :model-value="s.row.enabled" size="small" @change="toggleAlertRule(s.row)" />
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="created_at" label="创建时间" min-width="150" />
                                    <el-table-column label="操作" width="80">
                                        <template #default="s">
                                            <el-button size="small" type="danger" text @click="removeAlertRule(s.row)">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>

                            <!-- 投递历史 Tab -->
                            <div v-if="ncTab === 'history'">
                                <el-table :data="ncHistory" size="small" v-loading="ncLoading" style="width:100%">
                                    <el-table-column prop="created_at" label="时间" width="150" />
                                    <el-table-column prop="event_type" label="类型" width="90" />
                                    <el-table-column prop="title" label="标题" min-width="180" show-overflow-tooltip />
                                    <el-table-column prop="channel" label="通道" width="90" />
                                    <el-table-column prop="recipient" label="收件人" width="120" />
                                    <el-table-column label="结果" width="90">
                                        <template #default="s">
                                            <span :class="s.row.ok ? 'qc-text-success' : 'qc-text-error'">
                                                {{ s.row.ok ? '成功' : '失败' }}
                                            </span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <p class="text-sm-tertiary mt-8" v-if="ncHistory.length === 0 && !ncLoading">暂无投递记录</p>
                            </div>

                            <!-- 通道与静默 Tab -->
                            <div v-if="ncTab === 'channels'">
                                <el-table :data="ncChannels" size="small" v-loading="ncLoading" style="width:100%" class="mb-12">
                                    <el-table-column prop="name" label="通道" width="120" />
                                    <el-table-column label="状态" width="140">
                                        <template #default="s">
                                            <span :class="s.row.available ? 'qc-text-success' : 'qc-text-muted'">
                                                {{ s.row.available ? '可用' : '未配置' }}
                                            </span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="configured" label="已配置" width="90">
                                        <template #default="s">
                                            <span :class="s.row.configured ? 'qc-text-success' : 'qc-text-muted'">{{ s.row.configured ? '是' : '否' }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <div class="flex-gap-12-mb12">
                                    <el-switch v-model="ncSilence" active-text="静默预警" inactive-text="正常推送" @change="applySilence"/>
                                    <span class="text-sm-secondary">静默时长(分钟):</span>
                                    <el-input-number v-model="ncSilenceMinutes" :min="1" :max="1440" size="small" />
                                    <el-button size="small" @click="applySilence"><qc-icon name="moon" :size="14" /> 静默 {{ ncSilenceMinutes }} 分钟</el-button>
                                    <el-button size="small" v-if="ncSilence" @click="clearSilence">恢复推送</el-button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- datasource: 多数据源配置 -->
                    <div v-else-if="currentSubPage === 'datasource'">
                    <!-- 优先级说明条 -->
                    <div class="info-banner">
                        <span><qc-icon name="bar-chart-3" :size="14" /> 数据源优先级:</span>
                        <span class="text-medium">① sxsc-tushare → ② tushare → ③ akshare</span>
                        <span class="color-tertiary-ml-auto">按优先级依次尝试</span>
                    </div>

                    <!-- v3.16 (FR-3.16.1): 数据同步入口 (syncStockData) -->
                    <div class="card mb-14">
                        <div class="card-title"><qc-icon name="refresh" :size="14" /> 数据同步</div>
                        <div class="flex-c-gap-12-wrap">
                            <el-button type="primary" :loading="syncingData" @click="syncStockData"><qc-icon name="download" :size="14" /> 同步股票数据</el-button>
                            <span class="text-sm-secondary">从 Tushare 拉取最新行情并更新本地缓存</span>
                        </div>
                    </div>

                    <!-- sxsc-tushare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="external-link" :size="14" /> sxsc-tushare（券商版）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.sxsc_tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.sxsc_tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.sxsc_tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else><qc-icon name="clock" :size="12" /> 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
                            <el-form-item label="API Token">
                                <el-input :model-value="datasourceConfig.sxsc_tushare._revealed ? datasourceConfig.sxsc_tushare.token : datasourceConfig.sxsc_tushare._masked" :disabled="!datasourceConfig.sxsc_tushare._editing" @update:model-value="val => { if (datasourceConfig.sxsc_tushare._editing) { datasourceConfig.sxsc_tushare.token = val; if (!datasourceConfig.sxsc_tushare._revealed) datasourceConfig.sxsc_tushare._masked = val; } }" placeholder="输入 sxsc-tushare Token" @change="saveDatasourceConfig">
                                    <template #suffix>
                                        <span class="key-reveal-toggle" style="cursor:pointer;user-select:none;display:inline-flex;align-items:center" :title="datasourceConfig.sxsc_tushare._editing ? '锁定（重新掩码）' : '编辑（查看完整 Token，需密码）'" @click="toggleDatasourceEdit('sxsc_tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.sxsc_tushare._editing))"></span>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="超时 (秒)">
                                <el-input-number v-model="datasourceConfig.sxsc_tushare.timeout" :min="5" :max="120" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="testDatasource('sxsc_tushare')" :loading="datasourceStatus.sxsc_tushare === 'testing'" type="primary" size="small"><qc-icon name="flask-conical" :size="14" /> 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- tushare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="radio-tower" :size="14" /> tushare（标准版 Pro）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else><qc-icon name="clock" :size="12" /> 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
                            <el-form-item label="API Token">
                                <el-input :model-value="datasourceConfig.tushare._revealed ? datasourceConfig.tushare.token : datasourceConfig.tushare._masked" :disabled="!datasourceConfig.tushare._editing" @update:model-value="val => { if (datasourceConfig.tushare._editing) { datasourceConfig.tushare.token = val; if (!datasourceConfig.tushare._revealed) datasourceConfig.tushare._masked = val; } }" placeholder="输入 Tushare Token" @change="saveDatasourceConfig">
                                    <template #suffix>
                                        <span class="key-reveal-toggle" style="cursor:pointer;user-select:none;display:inline-flex;align-items:center" :title="datasourceConfig.tushare._editing ? '锁定（重新掩码）' : '编辑（查看完整 Token，需密码）'" @click="toggleDatasourceEdit('tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.tushare._editing))"></span>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="Endpoint">
                                <el-input v-model="datasourceConfig.tushare.endpoint" placeholder="http://api.tushare.pro" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item label="超时 (秒)">
                                <el-input-number v-model="datasourceConfig.tushare.timeout" :min="5" :max="120" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="testDatasource('tushare')" :loading="datasourceStatus.tushare === 'testing'" type="primary" size="small"><qc-icon name="flask-conical" :size="14" /> 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- akshare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="languages" :size="14" /> akshare（开源免费）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.akshare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.akshare === 'connected'">可用</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.akshare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else><qc-icon name="clock" :size="12" /> 未检测</span>
                            </div>
                        </div>
                        <div class="text-base-secondary-pad">
                            开源免费数据接口，从东方财富等公开网站获取数据，无需 Token
                        </div>
                        <el-form label-width="80px">
                            <el-form-item>
                                <el-button @click="testDatasource('akshare')" :loading="datasourceStatus.akshare === 'testing'" type="primary" size="small"><qc-icon name="flask-conical" :size="14" /> 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

                    <!-- feature 子页: 功能开关与配置 -->
                    <div v-else-if="currentSubPage === 'feature'">
                        <div class="card">
                        <div class="card-title"><qc-icon name="sliders-horizontal" :size="14" /> 策略筛选</div>
                        <div class="mb-12">
                            <el-checkbox-group v-model="strategyFilter.selected" @change="saveStrategyFilter">
                                <el-checkbox class="mb-6" v-for="s in strategyFilterOptions" :key="s" :label="s" border>
                                    {{ s }}
                                </el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="flex-c-gap-12-wrap-mb12">
                            <span class="text-base-secondary">过滤方式：</span>
                            <el-radio-group v-model="strategyFilter.mode" @change="saveStrategyFilter">
                                <el-radio label="union">并集（任一匹配）</el-radio>
                                <el-radio label="intersection">交集（全部匹配）</el-radio>
                            </el-radio-group>
                        </div>
                        <div class="info-banner-plain">
                            <div class="mb-6-medium"><qc-icon name="search" :size="14" /> 预览匹配股票数</div>
                            <div class="flex-wrap-gap-12">
                                <span><qc-icon name="sun" :size="14" /> 日视图: <strong>{{ strategyPreviewCount.day ?? '-' }}</strong></span>
                                <span><qc-icon name="calendar" :size="14" /> 周视图: <strong>{{ strategyPreviewCount.week ?? '-' }}</strong></span>
                                <span><qc-icon name="calendar" :size="14" /> 月视图: <strong>{{ strategyPreviewCount.month ?? '-' }}</strong></span>
                                <span><qc-icon name="calendar" :size="14" /> 年视图: <strong>{{ strategyPreviewCount.year ?? '-' }}</strong></span>
                            </div>
                        </div>
                    </div>

                    <!-- v3.3.0-T8: 数据备份与恢复 -->
                    <div class="card mt-14">
                        <div class="card-title"><qc-icon name="hard-drive" :size="14" /> 数据备份与恢复</div>
                        <div class="flex-wrap-gap-10-mb12">
                            <el-button size="small" type="primary" :loading="backupCreating" @click="createBackup">立即备份</el-button>
                            <el-button size="small" @click="loadBackups">刷新列表</el-button>
                        </div>
                        <div class="max-h-220-scroll" v-if="backups.length">
                            <div class="backup-row" v-for="b in backups" :key="b.name">
                                <span><qc-icon name="clock" :size="12" /> {{ b.time }} <span class="text-xs-tertiary">({{ (b.size / 1024).toFixed(0) }} KB)</span></span>
                                <el-button size="small" type="warning" plain :disabled="currentUser?.role !== 'admin'" @click="restoreBackup(b.name)">恢复</el-button>
                            </div>
                        </div>
                        <div class="text-sm-tertiary" v-else>暂无备份</div>
                    </div>
                    <!-- V5.3.0 (T-5.3.5.5): 报表导出 (PDF/Excel/HTML) -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="file-text" :size="14" /> 报表导出</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">量化选股日报 (当日) · 可导出 PDF / Excel / HTML</span>
                            <div class="flex-c-gap-8">
                                <el-button size="small" :loading="reportExporting === 'pdf'" @click="exportReport('pdf')">PDF</el-button>
                                <el-button size="small" :loading="reportExporting === 'excel'" @click="exportReport('excel')">Excel</el-button>
                                <el-button size="small" type="primary" :loading="reportExporting === 'html'" @click="exportReport('html')">HTML</el-button>
                            </div>
                        </div>
                        <div class="text-sm-tertiary" v-if="reportExportMsg">{{ reportExportMsg }}</div>
                    </div>
                    <!-- v2.0: 美林时钟配置 -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="clock" :size="14" /> 美林时钟</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">
                                上次更新: <strong>{{ merrillClockLastUpdated || '—' }}</strong>
                            </span>
                            <el-button size="small" type="primary" @click="doMerrillReevaluate" :loading="merrillReevalLoading">
                                <qc-icon name="refresh" :size="14" /> 手动重评估
                            </el-button>
                        </div>
                        <div class="result-box" v-if="merrillReevalResult" :class="merrillReevalResult.includes('失败') ? 'qc-text-error' : 'qc-text-success'">
                            {{ merrillReevalResult }}
                        </div>
                        <div class="flex-c-gap-16">
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">自动刷新</label>
                                <el-switch v-model="merrillClockConfig.autoRefresh" @change="saveMerrillClockConfig" size="small" />
                            </div>
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">间隔</label>
                                <el-select class="w-100px" v-model="merrillClockConfig.refreshInterval" @change="saveMerrillClockConfig" size="small" :disabled="!merrillClockConfig.autoRefresh">
                                    <el-option :value="300" label="5分钟" />
                                    <el-option :value="600" label="10分钟" />
                                    <el-option :value="1800" label="30分钟" />
                                    <el-option :value="3600" label="1小时" />
                                </el-select>
                            </div>
                        </div>
                    </div>

                    <!-- v1.8.0: 数据刷新配置 -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="refresh" :size="14" /> 策略数据刷新</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">
                                上次刷新: <strong>{{ dataRefreshConfig.last_refresh || '—' }}</strong>
                                <span class="ml-6-sm" v-if="dataRefreshConfig.last_refresh_status" :class="dataRefreshConfig.last_refresh_status.startsWith('failed') ? 'qc-text-error' : 'qc-text-success'">
                                    {{ dataRefreshConfig.last_refresh_status.startsWith('failed') ? '失败' : '' }}
                                </span>
                            </span>
                            <el-button size="small" type="primary" @click="triggerDataReload" :loading="dataRefreshReloading">
                                <qc-icon name="refresh" :size="14" /> 手动加载
                            </el-button>
                            <el-button size="small" type="primary" @click="triggerDataPull" :loading="dataPullRunning">
                                <qc-icon name="download" :size="14" /> 手动拉取
                            </el-button>
                        </div>
                        <div class="flex-col-gap-12">
                            <!-- 定时刷新 -->
                            <div class="flex-c-gap-16-wrap">
                                <div class="flex-c-gap-6">
                                    <label class="text-base-primary-nowrap">定时刷新</label>
                                    <el-switch v-model="dataRefreshConfig.scheduled_enabled" @change="saveDataRefreshConfig" size="small" />
                                </div>
                                <div class="flex-c-gap-6">
                                    <label class="text-base-primary-nowrap">时间</label>
                                    <el-time-picker class="w-110" v-model="dataRefreshConfig.scheduled_time" @change="saveDataRefreshConfig" size="small" format="HH:mm" value-format="HH:mm" :disabled="!dataRefreshConfig.scheduled_enabled" placeholder="22:00"/>
                                </div>
                            </div>
                            <!-- 文件变动监听 -->
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">文件变动监听</label>
                                <el-switch v-model="dataRefreshConfig.watch_enabled" @change="saveDataRefreshConfig" size="small" />
                                <span class="text-sm-tertiary-ml4">文件变动时自动刷新</span>
                            </div>
                            <!-- v3.12 (FR-3.12.1): 定时拉取配置 -->
                            <div class="card inner-card">
                                <div class="flex-c-gap-16-wrap">
                                    <div class="flex-c-gap-6">
                                        <label class="text-base-primary-nowrap">定时拉取日线</label>
                                        <el-switch v-model="dataRefreshConfig.pull_enabled" @change="saveDataRefreshConfig" size="small" />
                                    </div>
                                    <div class="flex-c-gap-6">
                                        <label class="text-base-primary-nowrap">时间</label>
                                        <el-time-picker class="w-110" v-model="dataRefreshConfig.pull_time" @change="saveDataRefreshConfig" size="small" format="HH:mm" value-format="HH:mm" :disabled="!dataRefreshConfig.pull_enabled" placeholder="22:30"/>
                                    </div>
                                    <div class="flex-c-gap-6">
                                        <label class="text-base-primary-nowrap">频率</label>
                                        <el-select class="w-select-sm" v-model="dataRefreshConfig.pull_frequency" @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="每日" value="daily" />
                                            <el-option label="每周" value="weekly" />
                                        </el-select>
                                    </div>
                                    <div class="flex-c-gap-6" v-if="dataRefreshConfig.pull_frequency === 'weekly'">
                                        <label class="text-base-primary-nowrap">周几</label>
                                        <el-select class="w-select-xs" v-model="dataRefreshConfig.pull_weekday" @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="周一" value="0" />
                                            <el-option label="周二" value="1" />
                                            <el-option label="周三" value="2" />
                                            <el-option label="周四" value="3" />
                                            <el-option label="周五" value="4" />
                                        </el-select>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt6">
                                    拉取成功后自动刷新解析器/视图 (数据自动入库)
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- V6.3 (PRD-6.3 F4): 界面与导航 — 导航形态 (V6.4: 动态页签开关已移除) -->
                    <!-- V6.6.1 (F-6.6.9): 三形态说明文案 (V6.4 P0 遗留) -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="layout-dashboard" :size="14" /> 界面与导航</div>
                        <div class="flex-c-gap-12">
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">导航形态</label>
                                <el-select class="w-select-lg" :model-value="navMode" @change="onNavModeChange" size="small">
                                    <el-option value="subnav" :label="t('navMode.subnav')" />
                                    <el-option value="tree" :label="t('navMode.tree')" />
                                    <el-option value="toptab" :label="t('navMode.toptab')" />
                                </el-select>
                            </div>
                        </div>
                        <div class="text-sm-tertiary-mt8">中栏二级（默认）：左侧一级 + 中栏常驻二级，适合二级页较多的页面。侧栏树状：二级直接展开在侧栏内，节省中栏空间。顶部二级标签：二级以横排标签置于头部，适合二级项较少的页面。</div>
                    </div>
                    <!-- V6.6.1 (PRD F-6.6.8 方案A): 界面与个性化 — 外观/语言/K线显示自 status 归位至此 (个性化设置集中) -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="palette" :size="14" /> 界面与个性化 <span class="text-sm-tertiary">主题 · 语言 · 图表 · 详情展示</span></div>
                        <!-- V5.16 (F2): 详情展示模式 — 内嵌双栏 / 弹窗 (移动端强制弹窗) -->
                        <div class="theme-section-label">详情展示模式 <span class="text-xs-tertiary" v-if="isNarrow">窄屏自动使用弹窗</span></div>
                        <el-radio-group :model-value="detailDisplayMode" size="small" @change="setDetailDisplayMode" :disabled="isNarrow">
                            <el-radio-button value="split">内嵌双栏</el-radio-button>
                            <el-radio-button value="dialog">弹窗</el-radio-button>
                        </el-radio-group>
                        <div class="theme-section-label">外观模式</div>
                        <el-radio-group :model-value="themeMode" size="small" @change="onThemeModeChange">
                            <el-radio-button value="light">浅色</el-radio-button>
                            <el-radio-button value="dark">深色</el-radio-button>
                            <el-radio-button value="system">跟随系统</el-radio-button>
                        </el-radio-group>
                        <div class="theme-section-label">主题色</div>
                        <div class="theme-list">
                            <div v-for="h in themeHues" :key="h" class="theme-item" :class="{active: themeHue === h}" @click="setThemeHue(h)">
                                <!-- V6.6: hueColor() 主题色相预览（配置派生色），保留内联 -->
                                <div class="theme-color" :style="{background: hueColor(h)}"></div>
                                <div class="text-base-medium">{{ hueName(h) }}
                                    <span class="text-xs-primary-ml4" v-if="themeHue === h">当前</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-c-gap-12 mt-8">
                            <span class="text-sm-secondary w-60">自定义</span>
                            <el-slider class="w-220" :model-value="themeHue" :min="0" :max="359" :step="1"
                                @change="setThemeHue" aria-label="自定义主题色相" />
                        </div>
                        <div class="section-sub-block-top">
                            <label class="text-base-primary-nowrap">{{ t('system.language') }}</label>
                            <div class="flex-c-gap-12-wrap mt-8">
                                <el-select class="w-select-md" :model-value="locale" size="small" @change="changeLanguage">
                                    <el-option value="zh-CN" :label="t('lang.zh-CN')" />
                                    <el-option value="en" :label="t('lang.en')" />
                                    <el-option value="ja" :label="t('lang.ja')" />
                                    <el-option value="ko" :label="t('lang.ko')" />
                                    <el-option value="zh-TW" :label="t('lang.zh-TW')" />
                                </el-select>
                                <span class="text-sm-tertiary-ml4">{{ t('system.languageDesc') }}</span>
                            </div>
                        </div>
                        <div class="section-sub-block-top">
                            <label class="text-base-primary-nowrap"><qc-icon name="trending-up" :size="14" /> K线显示</label>
                            <div class="flex-c-gap-12-wrap mt-8">
                                <el-switch :model-value="klineShowMinutes" @change="toggleKlineShowMinutes"
                                    active-text="显示分钟级K线" inactive-text="隐藏分钟级K线" />
                                <span class="text-sm-tertiary-ml4">股票/指数弹窗默认隐藏 60/30/15 分钟K线（数据源受限时可在此开启）</span>
                            </div>
                        </div>
                    </div>
                </div>
                    <div v-else-if="currentSubPage === 'datadict'">
                        <div class="card">
                            <div class="usage-card-title"><qc-icon name="book-open" :size="14" /> 数据字典<span class="usage-card-title-sub">字段口径单一事实源 (V5.0.1 T-5.0.14)</span></div>
                            <div class="mt-8" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
                                <el-radio-group v-model="dictCategory" size="small" @change="loadDataDict">
                                    <el-radio label="">全部</el-radio>
                                    <el-radio label="kline">K线行情</el-radio>
                                    <el-radio label="daily_basic">每日基本面</el-radio>
                                    <el-radio label="financial">财务报表</el-radio>
                                    <el-radio label="calendar">交易日历</el-radio>
                                    <el-radio label="quality">数据质量</el-radio>
                                </el-radio-group>
                                <el-button size="small" :loading="dictLoading" @click="loadDataDict">刷新</el-button>
                                <span v-if="dictError" style="color:var(--color-danger)">{{ dictError }}</span>
                            </div>
                            <el-table :data="dictData.fields" size="small" v-loading="dictLoading" style="width:100%" class="mt-8">
                                <el-table-column prop="key" label="规范字段" width="150" />
                                <el-table-column prop="label" label="名称" width="120" />
                                <el-table-column prop="category" label="分类" width="110" />
                                <el-table-column prop="type" label="类型" width="80" />
                                <el-table-column prop="unit" label="单位" width="70" />
                                <el-table-column prop="frequency" label="频率" width="90" />
                                <el-table-column prop="source" label="数据源" width="100" />
                                <el-table-column prop="description" label="说明" min-width="220" />
                            </el-table>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'user'">
                        <div v-if="currentUser?.role !== 'admin'" class="card text-center-pad40">
                            <div class="text-3xl-mb12"><qc-icon name="lock" :size="32" /></div>
                            <div class="color-secondary">仅管理员可访问此页面</div>
                        </div>
                        <div v-else>
                        <div class="card">
                            <div class="card-title"><qc-icon name="users" :size="14" /> 用户与权限</div>
                            <p class="color-secondary">用户列表: {{ userList.length }} 个用户 | 分组: {{ Object.keys(allGroups).length }} 个</p>
                        </div>

                    <!-- Tab 切换 -->
                    <div class="flex-gap-8-mb16">
                        <el-button :type="userPageTab === 'users' ? 'primary' : ''" size="small" @click="userPageTab = 'users'"><qc-icon name="users" :size="14" /> 用户列表</el-button>
                        <el-button :type="userPageTab === 'groups' ? 'primary' : ''" size="small" @click="userPageTab = 'groups'"><qc-icon name="clipboard-list" :size="14" /> 分组配置</el-button>
                    </div>

                    <!-- 用户列表 Tab -->
                    <div v-if="userPageTab === 'users'">
                    <div class="card">
                        <div class="card-title"><qc-icon name="users" :size="14" /> 用户列表 ({{ userList.length }}人)</div>
                        <div class="flex-gap-12-mb12">
                            <el-input class="w-160" v-model="userSearch" placeholder="搜索用户名..." clearable size="small"/>
                            <el-select class="w-select" v-model="groupFilter" placeholder="分组" clearable size="small">
                                <el-option v-for="(g, gid) in allGroups" :key="gid" :label="g.name" :value="gid" />
                            </el-select>
                            <el-button type="primary" size="small" @click="showAddUser = true">+ 添加用户</el-button>
                        </div>
                            <div v-for="user in filteredUsers" :key="user.username" class="user-card-enhanced" :style="{opacity: user.enabled === false ? 0.55 : 1}">
                                <div class="user-info-enhanced">
                                    <div class="user-avatar-large" :class="'avatar-' + ({'rose-red':'rose','vibrant-orange':'orange','tech-blue':'blue','classic-white':'blue','classic-red':'rose','classic-gold':'orange'}[user.theme] || 'blue')">{{ user.username.charAt(0).toUpperCase() }}</div>
                                    <div class="user-details">
                                        <div class="user-name-enhanced">
                                            {{ user.username }}
                                            <span class="user-role-tag" :class="user.role">
                                                {{ user.role === 'admin' ? '管理员' : '普通用户' }}
                                            </span>
                                            <span class="user-group-tag" :class="'group-' + (user.group === 'admin' ? 'admin' : user.group === 'guest' ? 'guest' : 'user')">{{ getGroupName(user.group || user.role) }}</span>
                                            <span v-if="user.enabled === false" class="user-disabled-badge">已禁用</span>
                                            <span v-if="user.theme" class="user-theme-dot" :class="'dot-' + (user.theme === 'rose-red' ? 'rose' : user.theme === 'vibrant-orange' ? 'orange' : 'blue')" :title="themes[user.theme]?.name || user.theme"></span>
                                        </div>
                                        <div class="user-meta-info">
                                            <span class="mr-12" v-if="user.created_at">
                                                <qc-icon name="clock" :size="12" /> 创建于: {{ new Date(user.created_at).toLocaleDateString('zh-CN') }}
                                            </span>
                                            <span v-if="user.last_login_at">
                                                <qc-icon name="clock" :size="12" /> 上次登录: {{ new Date(user.last_login_at).toLocaleString('zh-CN') }}
                                            </span>
                                            <span class="ml-12" v-if="user.login_count !== undefined">
                                                <qc-icon name="lock" :size="12" /> 登录: {{ user.login_count }}次
                                            </span>
                                        </div>
                                        <div class="user-status-row" v-if="user.username !== 'admin'">
                                            <span class="text-sm-secondary-flex6">
                                                账号状态:
                                                <el-switch v-model="user.enabled" size="small" :active-text="user.enabled ? '启用' : '禁用'"
                                                    @change="toggleUserEnabled(user)">
                                                </el-switch>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-actions-enhanced">
                                    <el-button size="small" type="primary" @click="editUser(user)">编辑</el-button>
                                    <el-button size="small" type="warning" @click="resetUserPassword(user)">重置密码</el-button>
                                    <el-button v-if="user.username !== 'admin'" size="small" type="danger" @click="deleteUser(user.username)">删除</el-button>
                                </div>
                            </div>
                    </div>
                    </div>

                    <!-- 分组配置 Tab -->
                    <div v-if="userPageTab === 'groups'">

                    <!-- 分组列表 -->
                    <div v-for="(g, gid) in allGroups" :key="gid" class="card mb-12">
                        <div class="flex-between-start-wrap">
                            <div class="flex-1-min200">
                                <div class="flex-c-gap-8-mb4">
                                    <strong class="text-lg">{{ g.name }}</strong>
                                    <span class="text-10-tertiary">{{ gid }}</span>
                                    <span class="text-10-tertiary" v-if="g.locked"><qc-icon name="lock" :size="12" /></span>
                                </div>
                                <div class="text-sm-secondary-mb6">{{ g.description }}</div>
                                <div class="text-sm-tertiary">
                                    成员 {{ getGroupMemberCount(gid) }}人 · 菜单 {{ getMenuEnabledCount(g) }}/{{ Object.keys(g.visible_menus || {}).length }}
                                </div>
                            </div>
                            <div class="flex-gap-6-shrink0">
                                <el-button v-if="!g.locked" size="small" @click="toggleGroupExpand(gid)"><qc-icon name="users" :size="14" /> {{ expandedGroups[gid] ? '收起' : '成员' }}</el-button>
                                <el-button size="small" type="primary" @click="openMenuConfig(gid)"><qc-icon name="settings" :size="14" /> 菜单</el-button>
                                <el-button v-if="!g.locked" size="small" type="danger" @click="deleteGroupConfig(gid)">删除</el-button>
                            </div>
                        </div>
                        <!-- 成员列表（锁定组始终显示，非锁定组展开后显示） -->
                        <div class="section-sub-block-top" v-if="g.locked || expandedGroups[gid]">
                            <div class="flex-wrap-gap-6">
                                <span class="chip-member" v-for="u in userList.filter(u => (u.group || u.role) === gid)" :key="u.username">
                                    {{ u.username }}<span class="color-primary" v-if="u.role==='admin'"> · 管理</span>
                                </span>
                                <span class="text-sm-tertiary" v-if="getGroupMemberCount(gid) === 0">暂无成员</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-center-tertiary-pad20" v-if="Object.keys(allGroups).length === 0">暂无分组数据</div>
                    </div>

                    <!-- v3.17.15 (FR-3.17.15): 开放 API — API Key 管理 -->
                    <div class="card mt-14">
                        <div class="card-title"><qc-icon name="key" :size="14" /> 开放 API <span class="text-sm-tertiary">开发者能力 (V6.6.1 决策 D8: 暂不拆分, 保留于用户与权限)</span></div>
                        <p class="color-secondary">为外部程序签发只读 API Key（库中仅存哈希，明文只展示一次；行情数据不可达时开放接口返回 degraded 占位）。</p>
                        <div class="flex-gap-8-mb12">
                            <el-input class="w-160" v-model="openApiKeyName" placeholder="Key 名称（可选）" size="small" />
                            <el-select class="w-select" v-model="openApiKeyRole" size="small">
                                <el-option label="只读" value="read" />
                            </el-select>
                            <el-button type="primary" size="small" :loading="openApiLoading" @click="generateOpenApiKey">生成 Key</el-button>
                            <el-button size="small" @click="loadOpenApiKeys">刷新</el-button>
                        </div>
                        <div v-if="newOpenApiKey" class="openapi-new-key">
                            <div class="text-sm-secondary">新 Key（仅展示一次，请立即复制保存）:</div>
                            <div class="flex-gap-6">
                                <code class="openapi-key-code">{{ newOpenApiKey }}</code>
                                <el-button size="small" @click="copyOpenApiKey">复制</el-button>
                            </div>
                        </div>
                        <div class="section-sub-block-top" v-if="openApiKeys.length">
                            <div v-for="k in openApiKeys" :key="k.id" class="openapi-key-row">
                                <div class="flex-between-wrap-gap6">
                                    <div class="flex-1-min200">
                                        <span class="openapi-key-prefix">{{ k.prefix }}...</span>
                                        <span class="text-sm-tertiary">{{ k.name }} · {{ k.role }} · {{ k.created_at }}</span>
                                        <span v-if="k.enabled === 0" class="user-disabled-badge">已吊销</span>
                                    </div>
                                    <div class="flex-gap-6-shrink0">
                                        <el-button v-if="k.enabled" size="small" type="danger" @click="revokeOpenApiKey(k)">吊销</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-sm-tertiary" v-else>暂无 API Key</div>
                    </div>
                    <!-- /v3.17.15 (FR-3.17.15): 开放 API — API Key 管理 -->

                    </div>
                    </div>
                    <!-- v3.17.5 (FR-3.17.5): 用量统计 — 资源监控/调度任务/备份磁盘/页面热度 (自系统状态移入) -->
                    <div v-else-if="currentSubPage === 'usage'">
                        <!-- V6.6.1 (PRD F-6.6.8 方案A): 运维健康摘要条 — 替代重复整块渲染, 点击跳转对应子页 -->
                        <div class="card mb-14">
                            <div class="card-title"><qc-icon name="activity" :size="14" /> 运维健康摘要 <span class="text-sm-tertiary">点击跳转详情</span></div>
                            <div class="flex-wrap-gap-12">
                                <span class="health-badge" :class="(healthDetail.data_sources || []).some(d => d.routing_status === 'cooling' || d.degraded) ? 'qc-text-warning' : 'qc-text-success'">
                                    <qc-icon :name="(healthDetail.data_sources || []).some(d => d.routing_status === 'cooling' || d.degraded) ? 'alert-triangle' : 'check'" :size="13" /> 数据源 {{ (healthDetail.data_sources || []).filter(d => d.routing_status === 'cooling' || d.degraded).length }} 个降级
                                </span>
                                <el-button size="small" text @click="goSystemSub('health')">数据源健康详情</el-button>
                                <span class="health-badge" :class="Object.values(healthDetail.scheduler_tasks || {}).some(t => t.last_status === 'failed') ? 'qc-text-error' : 'qc-text-success'">
                                    <qc-icon :name="Object.values(healthDetail.scheduler_tasks || {}).some(t => t.last_status === 'failed') ? 'alert-triangle' : 'check'" :size="13" /> 调度失败 {{ Object.values(healthDetail.scheduler_tasks || {}).filter(t => t.last_status === 'failed').length }}
                                </span>
                                <el-button size="small" text @click="goSystemSub('schedule')">调度任务详情</el-button>
                                <span class="health-badge" :class="factCheck && factCheck.pass_rate != null && factCheck.pass_rate < 90 ? 'qc-text-warning' : 'qc-text-success'">
                                    <qc-icon name="shield" :size="13" /> AI 护栏通过率 {{ factCheck && factCheck.pass_rate != null ? factCheck.pass_rate + '%' : '--' }}
                                </span>
                                <el-button size="small" text @click="goSystemSub('guard')">事实护栏详情</el-button>
                                <span class="health-badge"><qc-icon name="hard-drive" :size="13" /> 最近备份 {{ healthDetail.backup_last_success || '暂无' }}</span>
                                <el-button size="small" text @click="goSystemSub('feature')">备份设置</el-button>
                            </div>
                        </div>
                        <!-- v3.22-I2: 用量统计卡片化 — 4卡片网格 -->
                        <div class="usage-card-grid">
                        <!-- 卡1: 资源监控 -->
                        <div class="usage-card">
                            <div class="usage-card-title"><qc-icon name="cpu" :size="14" /> 资源监控<span class="usage-card-title-sub">服务器实时资源</span></div>
                            <div class="usage-ai-panel">
                                <div class="usage-ai-panel-title">实时指标
                                    <span class="usage-ai-panel-meta">CPU/内存/磁盘</span>
                                </div>
                                <div class="usage-ai-summary">
                                    <div class="usage-ai-stat usage-ai-stat-meter">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="cpu" :size="14" /></span><span class="usage-ai-stat-label">CPU</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.cpu_percent ?? '--' }}%</div>
                                        <div class="meter-bar"><div class="meter-fill" :style="{width: Math.min(sysMonitor.cpu_percent ?? 0, 100) + '%'}"></div></div>
                                    </div>
                                    <div class="usage-ai-stat usage-ai-stat-meter">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="brain" :size="14" /></span><span class="usage-ai-stat-label">内存</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.mem_percent ?? '--' }}%</div>
                                        <div class="meter-bar"><div class="meter-fill" :style="{width: Math.min(sysMonitor.mem_percent ?? 0, 100) + '%'}"></div></div>
                                    </div>
                                    <div class="usage-ai-stat usage-ai-stat-meter">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="hard-drive" :size="14" /></span><span class="usage-ai-stat-label">磁盘</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.percent ?? '--' }}%</div>
                                        <div class="meter-bar"><div class="meter-fill" :style="{width: Math.min(sysMonitor.percent ?? 0, 100) + '%'}"></div></div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="clock" :size="14" /></span><span class="usage-ai-stat-label">运行时长</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.uptime ? sysMonitor.uptime.toFixed(2) + 'h' : '--' }}</div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="radio-tower" :size="14" /></span><span class="usage-ai-stat-label">平均延迟</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.metrics?.avg_ms ?? '--' }}<small>ms</small></div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon"><qc-icon name="alert-triangle" :size="14" /></span><span class="usage-ai-stat-label">错误率</span></div>
                                        <!-- V6.6: 错误率阈值派生色（数值比较），保留内联 -->
                                        <div class="usage-ai-stat-num" :style="{color: (sysMonitor.metrics?.error_rate ?? 0) > 5 ? 'var(--el-danger)' : 'var(--color-primary)'}">{{ sysMonitor.metrics?.error_rate ?? 0 }}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- V6.6.1 (PRD F-6.6.8 方案A): 移除与 health/schedule/guard 重复的数据源健康/运维状态整块, 由顶部健康摘要条替代 -->
                        <!-- 卡4: AI 用量 -->
                        <div class="usage-card">
                            <div class="usage-card-title"><qc-icon name="bot" :size="14" /> AI 用量<span class="usage-card-title-sub">30s 自动刷新</span></div>
                            <div class="section-block-top">
                            <div class="section-title-base flex-between">
                                <span>用量汇总</span>
                                <el-button size="small" @click="loadAiUsage">刷新</el-button>
                            </div>
                            <div class="usage-ai-panel">
                                <div class="usage-ai-panel-title">AI 用量汇总
                                    <span class="usage-ai-panel-meta">累计 · 今日 · 最近</span>
                                </div>
                                <div class="usage-ai-summary">
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">Σ</span><span class="usage-ai-stat-label">累计调用</span></div>
                                        <div class="usage-ai-stat-num">{{ aiUsage.total_calls ?? 0 }}</div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">今</span><span class="usage-ai-stat-label">今日调用</span></div>
                                        <div class="usage-ai-stat-num">{{ todayAiCalls }}</div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">历</span><span class="usage-ai-stat-label">最近调用日</span></div>
                                        <div class="usage-ai-stat-num">{{ lastAiCallDay || '--' }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="usage-ai-grid">
                                <div class="usage-ai-panel" v-if="aiModelRank.length">
                                    <div class="usage-ai-panel-title">模型调用分布
                                        <span class="usage-ai-panel-meta">{{ aiModelRank.length }} 个模型</span>
                                    </div>
                                    <div class="usage-ai-model-row" v-for="(m, i) in aiModelRank" :key="m.name">
                                        <span class="usage-ai-model-no" :class="i < 3 ? 'usage-ai-model-no-top' : ''">{{ i + 1 }}</span>
                                        <span class="usage-ai-model-name" :title="m.name">{{ m.name }}</span>
                                        <span class="usage-ai-model-bar">
                                            <span class="usage-ai-model-fill" :style="{width: Math.round(m.count / aiModelMax * 100) + '%'}"></span>
                                        </span>
                                        <span class="usage-ai-model-pct">{{ Math.round(m.count / aiTotal * 100) }}%</span>
                                        <span class="usage-ai-model-count">{{ m.count }}</span>
                                    </div>
                                </div>
                                <div class="usage-ai-panel">
                                    <div class="usage-ai-panel-title">近 30 天调用趋势
                                        <span class="usage-ai-panel-meta">峰值 {{ aiDayPeak }} 次</span>
                                    </div>
                                    <div class="usage-ai-chart" v-if="aiDayTrend.length">
                                        <div class="usage-ai-bar-col" v-for="(d, idx) in aiDayTrend" :key="d.day" :title="d.day + ': ' + d.count + ' 次'">
                                            <div class="usage-ai-bar" :class="idx === aiDayTrend.length - 1 ? 'usage-ai-bar-today' : ''" :style="{height: Math.max(d.count / aiDayMax * 64, d.count ? 2 : 1) + 'px'}"></div>
                                            <div class="usage-ai-bar-label" v-if="idx === 0 || d.day.slice(8) === '01' || idx === aiDayTrend.length - 1">{{ d.day.slice(5) }}</div>
                                        </div>
                                    </div>
                                    <div class="text-sm-tertiary" v-else>暂无调用记录</div>
                                </div>
                            </div>
                        </div>
                        </div><!-- /AI用量卡 -->
                        </div><!-- /usage-card-grid -->

                        <!-- 额外全宽卡: 页面热度 -->
                        <div class="usage-card-extra usage-card">
                            <div class="usage-card-title"><qc-icon name="flame" :size="14" /> 页面热度<span class="usage-card-title-sub">近 {{ analyticsDays }} 天</span></div>
                            <div class="section-block-top">
                            <div class="section-title-base flex-between">
                                <span>排行</span>
                                <div class="flex-gap-4">
                                    <el-button size="small" :type="analyticsDays === 7 ? 'primary' : ''" @click="setAnalyticsDays(7)">近7天</el-button>
                                    <el-button size="small" :type="analyticsDays === 14 ? 'primary' : ''" @click="setAnalyticsDays(14)">近14天</el-button>
                                    <el-button size="small" :type="analyticsDays === 30 ? 'primary' : ''" @click="setAnalyticsDays(30)">近30天</el-button>
                                </div>
                            </div>
                            <div class="usage-ai-panel">
                                <div class="flex-col-gap-6" v-if="analyticsRank.length">
                                    <div class="rank-row" v-for="(r, i) in analyticsRank.slice(0, 10)" :key="r.page">
                                        <span class="rank-no" :class="i < 3 ? 'rank-no-top' : ''">{{ i + 1 }}</span>
                                        <span class="rank-name flex-1">{{ r.page }}</span>
                                        <span class="rank-bar"><span class="rank-bar-fill" :style="{width: Math.round((r.views || 0) / analyticsMaxViews * 100) + '%'}"></span></span>
                                        <span class="rank-views color-secondary">{{ r.views }} 次</span>
                                    </div>
                                </div>
                                <div class="usage-ai-empty" v-else>暂无访问数据</div>
                            </div>
                        </div>
                        </div><!-- /页面热度卡 -->
                    </div>

                    <div v-else-if="currentSubPage === 'about'">
                        <div class="card">
                            <div class="about-logo-row">
                                <svg class="about-logo-img" viewBox="0 0 100 100" width="44" height="44" aria-label="量化日历 logo" role="img">
                                    <rect width="100" height="100" rx="20" fill="var(--logo-bg)"/>
                                    <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"/>
                                    <line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
                                    <rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"/>
                                    <rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"/>
                                    <rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"/>
                                    <rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"/>
                                    <path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
                                </svg>
                                <div class="about-logo-text">
                                    <div class="about-logo-title">{{ t('login.title') }}</div>
                                    <div class="about-logo-sub">{{ t('login.subtitle') }}</div>
                                </div>
                            </div>
                            <div class="card-title"><qc-icon name="book-open" :size="14" /> 软件简介</div>
                            <div class="about-body-text">
                                <p class="m-0-0-12">基于<strong class="color-text-primary">美林时钟经济周期理论</strong>，融合多策略选股与 AI 深度评估的智能投研工具。</p>
                                <p class="m-0"><strong class="color-text-primary">核心功能：</strong></p>
                                <ul class="about-ul">
                                    <li><strong class="about-item-name">美林时钟</strong> — GDP/CPI/PMI/社融/利率五维评分，四阶段自动切换，历史轮次追溯</li>
                                    <li><strong class="about-item-name">多策略选股</strong> — 多因子/行业轮动/资金流/指数增强，共识榜交叉验证</li>
                                    <li><strong class="about-item-name">AI 每日复盘</strong> — 收盘后自动生成市场复盘，AI 解读指数/板块/资金/情绪</li>
                                    <li><strong class="about-item-name">多因子体检</strong> — 估值/基本面/资金面/情绪面/技术面，个股五维体检</li>
                                    <li><strong class="about-item-name">回测工作台</strong> — 单/多策略回测对比，收益/回撤/夏普/净值可视化</li>
                                    <li><strong class="about-item-name">评估胜率追踪</strong> — 评估命中率统计，决策复盘</li>
                                    <li><strong class="about-item-name">模拟组合</strong> — 持仓/买卖调仓/实时盈亏/收益曲线</li>
                                    <li><strong class="about-item-name">AI 问股</strong> — 多轮上下文 + 多股对比 + 事实数据护栏</li>
                                    <li><strong class="about-item-name">移动端 & PWA</strong> — 375px 优化、离线可读、手势操作</li>
                                    <li><strong class="about-item-name">开放 API</strong> — API Key 接入只读行情/日历/评估，Webhook 事件订阅</li>
                                    <li><strong class="about-item-name">国际化</strong> — 中/英双语切换</li>
                                    <li><strong class="about-item-name">飞书推送</strong> — 定时推送每日选股报告</li>
                                    <li><strong class="about-item-name">数据源</strong> — Tushare Pro / sxsc / akshare 三源热备</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title"><qc-icon name="pin" :size="14" /> 软件版本</div>
                            <div class="flex-c-gap-16-wrap">
                                <span class="version-badge">v{{ appVersion }}</span>
                                <span class="text-success-md">● 服务运行中</span>
                            </div>
                        </div>
                        <!-- V6.6.1 (PRD F-6.6.8 方案A): 操作审计已移入 status 子页 — 运行监控组 -->
                        <!-- v3.2.0-T24: 问题反馈 -->
                        <div class="card">
                            <div class="card-title"><qc-icon name="message-circle" :size="14" /> 问题与反馈</div>
                            <div class="flex-col-gap-10">
                                <el-input v-model="feedbackText" type="textarea" :rows="3" placeholder="描述你遇到的问题或建议 (系统信息会自动附带)"></el-input>
                                <div class="flex-end-gap-8">
                                    <el-button size="small" @click="submitFeedback" :loading="feedbackSubmitting" type="primary">提交反馈</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title"><qc-icon name="layers" :size="14" /> 系统组件</div>
                            <div class="text-sm-tertiary">FastAPI · Vue 3 · Element Plus · ECharts · Tushare Pro</div>
                        </div>
                        <div class="card border-left-warning">
                            <div class="card-title"><qc-icon name="alert-triangle" :size="14" /> 风险提示</div>
                            <div class="about-body-text">
                                <p class="m-0-0-8"><strong class="color-text-primary">本系统仅供学习研究，不构成任何投资建议。</strong></p>
                                <p class="m-0-0-8">• 选股结果基于历史数据和量化模型，<strong>过往表现不代表未来收益</strong></p>
                                <p class="m-0-0-8">• 宏观指标存在滞后性，AI 评估为机器生成，不构成专业投资分析</p>
                                <p class="m-0">• 数据来源 Tushare Pro 及公开数据，不保证完整性和准确性。<strong>投资有风险，入市需谨慎</strong></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title"><qc-icon name="message-circle" :size="14" /> 联系与反馈</div>
                            <div class="about-body-text">
                                <p class="m-0">• 维护团队：犇犇量化团队 · 反馈请使用上方「问题与反馈」</p>
                            </div>
                        </div>
                    </div>
                    </div>
    `,setup(){const e=a("qcState");if(!e)return{};function f(Q){e.currentSubPage.value=Q}function t(){xe(),De(),ne()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,Q=>{Q==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),Q==="datadict"&&T(),Q==="health"&&D(),Q==="notification"&&t()});const d=e.themeHues||[45,220,0,140,270,320],p=e.themeHueNames||{},A=e.themeMode||Vue.computed(()=>"light"),g=e.themeHue||Vue.ref(45);function r(Q){e.changeThemeMode&&e.changeThemeMode(Q)}function w(Q){e.changeThemeHue&&e.changeThemeHue(parseInt(Q,10))}function i(Q){return e.hueColor?e.hueColor(Q):"hsl("+Q+", 75%, 42%)"}function S(Q){return e.hueName?e.hueName(Q):p[Q]||"自定义 "+Q}function b(Q){e.setNavMode&&e.setNavMode(Q)}const M=Vue.ref([]),_=Vue.ref(""),z=Vue.ref("read"),F=Vue.ref(""),C=Vue.ref(!1),c=()=>window.__quantModules&&window.__quantModules.core||{},n=Vue.ref([]),u=Vue.ref(!1);async function l(){u.value=!0;try{const Q=await fetch("/api/audit/logs?limit=20",{headers:c().authHeaders?c().authHeaders():{}}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()});n.value=Q&&Q.logs||[]}catch(Q){console.error("[system] 审计加载失败:",Q),n.value=[]}finally{u.value=!1}}const x=Vue.ref(!1),E=Vue.ref(null),O=Vue.ref(null),X=Vue.ref([]),R=Vue.ref(null);function q(Q){return Q==="completed"?"完成":Q==="running"?"运行中":Q==="pending"?"排队中":Q==="cancelled"?"已取消":"失败"}async function I(){try{const ge=await(await fetch("/api/jobs?limit=20")).json();ge&&ge.success&&(X.value=ge.data&&ge.data.tasks||[])}catch(Q){console.warn("[system] 加载任务队列失败:",Q)}}async function V(Q){try{await fetch("/api/jobs/"+Q+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),I()}catch(ge){console.warn("[system] 取消任务失败:",ge)}}function se(){I(),R.value=window.setInterval(I,15e3)}const Y=Vue.ref({items:[]}),ee=Vue.ref([]),j=Vue.ref(null),H=Vue.ref({data_sources:[],alerts:[]}),N=function(){return c().authHeaders?c().authHeaders():{}},k=function(Q){return fetch(Q,{headers:N()}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()})};async function D(){x.value=!0,E.value=null;try{const[Q,ge,at,kt]=await Promise.all([k("/api/reliability/freshness"),k("/api/reliability/heal-history?limit=20"),k("/api/reliability/startup-report"),k("/api/reliability/source-health")]);Y.value=Q&&Q.data||{items:[]},ee.value=ge&&ge.data||[],j.value=at&&at.data||null,H.value=kt||{data_sources:[],alerts:[]},O.value=new Date().toLocaleTimeString()}catch(Q){console.warn("[health] 加载失败:",Q),E.value="健康数据加载失败: "+(Q.message||""),Y.value={items:[]},ee.value=[]}finally{x.value=!1}}const ce=Vue.ref(!1),U=Vue.ref(""),y=Vue.ref(""),o=Vue.ref({fields:[]});async function T(){ce.value=!0,U.value="";try{const Q="/api/data-dict"+(y.value?"?category="+y.value:""),ge=await k(Q);o.value=ge&&ge.data||{fields:[]}}catch(Q){console.warn("[dict] 加载失败:",Q),U.value="数据字典加载失败: "+(Q.message||""),o.value={fields:[]}}finally{ce.value=!1}}function m(Q){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[Q]||"var(--text-secondary)"}function W(Q){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[Q]||Q}const ue=Vue.computed(()=>(Y.value?Y.value.items||[]:[]).filter(ge=>ge.status==="stale"||ge.status==="missing").length),Z=Vue.ref("rules"),P=Vue.ref([]),G=Vue.ref([]),re=Vue.ref([]),pe=Vue.ref(!1),de=Vue.ref(""),J=Vue.ref("price_above"),oe=Vue.ref(""),Pe=Vue.ref(!1),ke=Vue.ref(60),_e=Vue.ref("");function te(Q){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[Q]||Q}async function xe(){pe.value=!0;try{const Q=await(await fetch("/api/alerts/rules")).json();P.value=Q&&Q.rules||[]}catch(Q){_e.value="规则加载失败: "+Q}finally{pe.value=!1}}async function De(){pe.value=!0;try{const Q=await(await fetch("/api/alerts/history?limit=50")).json();G.value=Q&&Q.history||[]}catch(Q){_e.value="历史加载失败: "+Q}finally{pe.value=!1}}async function ne(){pe.value=!0;try{const Q=await(await fetch("/api/alerts/channels")).json(),ge=await(await fetch("/api/alerts/silence")).json();re.value=Q&&Q.channels||[],Pe.value=!!(ge&&ge.silenced)}catch(Q){_e.value="通道状态加载失败: "+Q}finally{pe.value=!1}}function ae(Q){Z.value=Q,Q==="rules"?xe():Q==="history"?De():ne()}async function he(){const Q=de.value.trim();if(!Q){_e.value="请填写股票代码";return}pe.value=!0;try{const ge={stock_code:Q,rule_type:J.value};if(J.value!=="new_pool"){const kt=Number(oe.value);if(isNaN(kt)){_e.value="阈值必须为数值";return}ge.threshold=kt}const at=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ge)})).json();at&&at.rule?(_e.value="规则已添加",de.value="",oe.value="",xe()):_e.value=at&&at.detail||"添加失败"}catch(ge){_e.value="添加失败: "+ge}finally{pe.value=!1}}async function Ne(Q){try{await fetch("/api/alerts/rules/"+Q.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!Q.enabled})}),Q.enabled=!Q.enabled}catch(ge){_e.value="切换失败: "+ge}}async function Ie(Q){try{const ge=await(await fetch("/api/alerts/rules/"+Q.id,{method:"DELETE"})).json();ge&&ge.success?(_e.value="规则已删除",xe()):_e.value="删除失败"}catch(ge){_e.value="删除失败: "+ge}}async function Ue(){try{const Q=Pe.value?ke.value:0,ge=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:Q})})).json();Pe.value=!!(ge&&ge.silenced),_e.value=Pe.value?"已静默":"已恢复推送"}catch(Q){_e.value="静默设置失败: "+Q}}async function Ge(){Pe.value=!1,await Ue()}function ht(Q){return!!Q&&!Q.degraded}const st=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ge,at)=>Math.max(ge,at.views||0),0)||1),Rt=()=>c().OPENAPI_ROUTE_BASE||"/api/openapi";async function Se(){C.value=!0;try{const Q=await c().apiFetch(Rt()+"/keys");M.value=Q&&Q.data||[]}catch(Q){ElementPlus.ElMessage.error("加载 API Key 失败: "+(Q.message||""))}finally{C.value=!1}}async function we(){try{const Q=await c().apiFetch(Rt()+"/keys",{method:"POST",body:JSON.stringify({name:_.value||"未命名",role:z.value||"read",expire_days:365})});Q&&Q.success?(F.value=Q.api_key||"",_.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Se()):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"生成失败")}catch(Q){ElementPlus.ElMessage.error("生成失败: "+(Q.message||""))}}async function Ae(){if(F.value)try{await navigator.clipboard.writeText(F.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Re(Q){try{const ge=await c().apiFetch(Rt()+"/keys/"+Q.id,{method:"DELETE"});ge&&ge.success?(ElementPlus.ElMessage.success("Key 已吊销"),F.value&&Q.prefix&&F.value.includes(Q.prefix)&&(F.value=""),await Se()):ElementPlus.ElMessage.error(ge&&(ge.detail||ge.message)||"吊销失败")}catch(ge){ElementPlus.ElMessage.error("吊销失败: "+(ge.message||""))}}const Xe={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Ze(Q){return Xe[Q]||Q}const tt=computed(()=>{var Q;return(((Q=e.healthMetrics)==null?void 0:Q.value)||[]).map(ge=>({name:Ze(ge.name),source:ge.name,success_rate:ge.success_rate,avg_latency_ms:ge.avg_latency_ms,calls:ge.calls||0,degraded:!!ge.degraded,data_age_hours:ge.data_age_hours!=null?ge.data_age_hours:null,stale:!!ge.stale,last_fetch:ge.last_fetch||ge.last_success||null}))});function xt(Q){return Q.degraded?"degraded":Q.success_rate==null?"unknown":Q.success_rate>=90?"ok":Q.success_rate>=60?"warn":"bad"}function St(Q){return Q==null?"":Q<1?"刚刚":Q<24?Math.round(Q)+"小时前":Math.floor(Q/24)+"天前"}const pt=e.aiUsage||Vue.ref({}),zt=Vue.computed(()=>{const Q=pt.value&&pt.value.by_model||{};return Object.entries(Q).map(([ge,at])=>({name:ge,count:at})).sort((ge,at)=>at.count-ge.count)}),Kt=Vue.computed(()=>zt.value.reduce((Q,ge)=>Math.max(Q,ge.count),0)||1),Jt=Vue.computed(()=>zt.value.reduce((Q,ge)=>Q+ge.count,0)||1),et=Vue.computed(()=>yt.value.reduce((Q,ge)=>Math.max(Q,ge.count),0)||0),yt=Vue.computed(()=>{const Q=pt.value&&pt.value.by_day||{},ge=[],at=new Date;for(let kt=29;kt>=0;kt--){const lt=new Date(at.getFullYear(),at.getMonth(),at.getDate()-kt),It=lt.getFullYear()+"-"+String(lt.getMonth()+1).padStart(2,"0")+"-"+String(lt.getDate()).padStart(2,"0");ge.push({day:It,count:Q[It]||0})}return ge}),Wt=Vue.computed(()=>yt.value.reduce((Q,ge)=>Math.max(Q,ge.count),0)||1),gt=Vue.computed(()=>{const Q=pt.value&&pt.value.by_day||{},ge=new Date,at=ge.getFullYear()+"-"+String(ge.getMonth()+1).padStart(2,"0")+"-"+String(ge.getDate()).padStart(2,"0");return Q[at]||0}),Ut=Vue.computed(()=>{const Q=pt.value&&pt.value.by_day||{},ge=Object.keys(Q).filter(at=>(Q[at]||0)>0);return ge.length?ge[ge.length-1]:""});function _t(Q){e.analyticsDays&&(e.analyticsDays.value=Q),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const Je='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',At='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function wt(Q){return Q?At:Je}return se(),{...e,themeHues:d,themeHueNames:p,themeMode:A,themeHue:g,onThemeModeChange:r,setThemeHue:w,hueColor:i,hueName:S,onNavModeChange:b,analyticsMaxViews:st,aiModelRank:zt,aiModelMax:Kt,aiDayTrend:yt,aiDayMax:Wt,todayAiCalls:gt,lastAiCallDay:Ut,aiTotal:Jt,aiDayPeak:et,setAnalyticsDays:_t,viewIcon:wt,openApiKeys:M,openApiKeyName:_,openApiKeyRole:z,newOpenApiKey:F,openApiLoading:C,loadOpenApiKeys:Se,generateOpenApiKey:we,copyOpenApiKey:Ae,revokeOpenApiKey:Re,healthRows:tt,healthClass:xt,fmtAge:St,staleAssetCount:ue,jobQueue:X,loadJobQueue:I,cancelJob:V,jobStatusText:q,auditLogs:n,auditLoading:u,loadAuditLogs:l,healthLoading:x,healthError:E,healthUpdatedAt:O,freshnessData:Y,healHistory:ee,startupReport:j,sourceHealth:H,refreshHealth:D,statusColor:m,statusLabel:W,sourceOk:ht,dictLoading:ce,dictError:U,dictCategory:y,dictData:o,loadDataDict:T,ncTab:Z,ncRules:P,ncHistory:G,ncChannels:re,ncLoading:pe,ncNewCode:de,ncNewType:J,ncNewThreshold:oe,ncSilence:Pe,ncSilenceMinutes:ke,ncMsg:_e,ncTypeLabel:te,onNcTab:ae,loadAlertRules:xe,loadAlertHistory:De,loadAlertChannels:ne,addAlertRule:he,toggleAlertRule:Ne,removeAlertRule:Ie,applySilence:Ue,clearSilence:Ge,goSystemSub:f}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
                <div v-if="currentPage === 'ai'" key="ai">
                    <!-- V6.1 (PRD-6.1 F3): 移除页内标题 (由中栏/面包屑承载) -->

                    <!-- overview: 概览统计 + 快捷操作 -->
                    <div v-if="currentSubPage === 'overview'">
                        <div class="flex-end-gap-8-mb16">
                            <el-button size="small" @click="showBatchEvaluate = true">
                                {{ t('ai.batchEval') }}
                            </el-button>
                            <el-button size="small" @click="showAutoEvaluateSettings = true">
                                <span class="mr-4"><qc-icon name="settings" :size="14" /></span>{{ t('ai.autoEval') }}
                            </el-button>
                        </div>

                        <!-- 统计卡片 -->
                        <div class="dashboard-grid mb-20">
                            <div class="stat-card stat-card-primary" @click="currentSubPage = 'history'" tabindex="0" role="button" aria-label="历史评估" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-info"><qc-icon name="file-text" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiHistory.length }}</div>
                                    <div class="stat-label">{{ t('ai.totalEval') }}</div>
                                </div>
                            </div>
                            <div class="stat-card stat-card-success" @click="currentSubPage = 'history'" tabindex="0" role="button" aria-label="覆盖股票" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-success"><qc-icon name="trending-up" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiHistoryStockCount }}</div>
                                    <div class="stat-label">{{ t('ai.coveredStocks') }}</div>
                                </div>
                            </div>
                            <div class="stat-card stat-card-gold" @click="currentSubPage = 'watchlist'" tabindex="0" role="button" aria-label="自选股" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-gold"><qc-icon name="star" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ watchlist.length }}</div>
                                    <div class="stat-label">{{ t('ai.watchlist') }}</div>
                                </div>
                            </div>
                            <!-- v3.17.8 (FR-3.17.5): 组合持仓入口 -->
                            <div class="stat-card stat-card-gold" @click="currentSubPage = 'portfolio'" tabindex="0" role="button" aria-label="组合持仓" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-gold">组</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ positions.length }}</div>
                                    <div class="stat-label">{{ t('ai.portfolio') }}</div>
                                </div>
                            </div>
                            <!-- v5.4.0 (FR-5.4.4): 重点跟踪入口 -->
                            <div class="stat-card stat-card-info-border" @click="currentSubPage = 'focus'" tabindex="0" role="button" aria-label="重点跟踪" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-info-hover"><qc-icon name="target" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">5 档</div>
                                    <div class="stat-label">重点跟踪</div>
                                </div>
                            </div>
                            <div class="stat-card stat-card-warning" @click="showAutoEvaluateSettings = true" tabindex="0" role="button" aria-label="自动评估设置" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)" :style="{opacity: autoEvaluateConfig.enabled ? 1 : 0.6}">
                                <!-- V6.6: 启用/暂停 金色品牌底 + 固定 warning 图标色，背景双态非语义三态，保留内联 -->
                                <div class="stat-icon" :style="{background: autoEvaluateConfig.enabled ? 'var(--badge-gold-bg)' : 'var(--bg-hover)', color: 'var(--el-warning)'}">
                                    <qc-icon :name="autoEvaluateConfig.enabled ? 'play' : 'pause'" :size="18" />
                                </div>
                                <div class="stat-content">
                                    <div class="stat-value text-md">{{ autoEvaluateConfig.enabled ? t('ai.running') : t('ai.paused') }}</div>
                                    <div class="stat-label">{{ t('ai.autoEval') }}</div>
                                </div>
                            </div>
                            <!-- v3.5.0-T6: AI 用量统计 -->
                            <!-- v3.17.6: title 提示详细用量位置 (系统→用量统计) -->
                            <div class="stat-card stat-card-info-border" title="AI 模型调用统计, 模型分布/近30天趋势见 系统→用量统计">
                                <div class="stat-icon stat-icon-info-hover"><qc-icon name="zap" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiUsage.total_calls || 0 }}</div>
                                    <div class="stat-label">{{ t('ai.aiCalls') }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- v3.5.0-T5: 策略推荐 -->
                        <div class="card mb-4" v-if="strategyRecommendations.length">
                            <div class="card-title">{{ t('ai.strategyRecommend') }} <span class="text-sm-tertiary-normal">基于你的 {{ strategyRecommendations.length > 0 ? watchlist.length : 0 }} 只自选股风格</span></div>
                            <div class="grid-auto-fit-240">
                                <div class="rec-card" v-for="r in strategyRecommendations" :key="r.strategy_id">
                                    <div class="flex-between-mb6">
                                        <span class="text-semibold">{{ r.name }}</span>
                                        <span class="text-sm-primary-semibold">{{ fmtNum(r.score) }}%</span>
                                    </div>
                                    <div class="text-sm-secondary-mb8">{{ r.desc }}</div>
                                    <div class="flex-wrap-gap-6">
                                        <span class="tag-chip" v-for="t in r.tags" :key="t">{{ t }}</span>
                                    </div>
                                    <div class="text-xs-tertiary-mt8">{{ r.reason }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- 最近评估 -->
                        <div class="card mb-4" v-if="aiHistory.length> 0">
                            <div class="card-title flex-between">
                                <span>{{ t('ai.recentEval') }}</span>
                                <el-button size="small" text @click="currentSubPage = 'history'">{{ t('ai.viewAll') }}</el-button>
                            </div>
                            <div class="hscroll-gap-12">
                                <div v-for="item in aiHistory.slice(0,3)" :key="item.id" @click="viewAiResult(item)" class="hover-lift recent-card">
                                    <div class="flex-between-mb8">
                                        <span class="text-md-semibold">{{ item.stock_code }}</span>
                                        <!-- V6.6: item.result.level_color 服务端返回实时色，保留内联 -->
                                        <span :style="{color: levelColor(item.result.level),fontWeight:'var(--font-bold)',fontSize:'18px'}">{{ fmtNum(item.result.total_score) }}</span>
                                    </div>
                                    <div class="text-sm-secondary-mb6">{{ item.stock_name }}</div>
                                    <div class="flex-between">
                                        <!-- V6.6: level_color 服务端实时色（含 20 透明底），保留内联 -->
                                        <span :style="{background: levelBg(item.result.level),color: levelColor(item.result.level),padding:'2px 8px',borderRadius:'10px',fontSize:'var(--font-xs)'}">{{ item.result.level }}</span>
                                        <span class="text-xs-tertiary">{{ (item.evaluate_time||'').split('T')[0] }}</span>
                                    </div>
                                    <!-- V5.3.0 (T-5.3.5.1): 归因徽标 — 机会/风险因子计数 + 一致性提示 -->
                                    <div v-if="item.attribution && item.attribution.available" class="flex-gap-8-c mt-4">
                                        <span v-if="(item.attribution.hits||[]).filter(h=>h.signal==='opportunity').length" class="text-xs" style="color:var(--sem-opportunity)">{{ (item.attribution.hits||[]).filter(h=>h.signal==='opportunity').length }} 机</span>
                                        <span v-if="(item.attribution.misses||[]).filter(m=>m.signal==='risk').length" class="text-xs" style="color:var(--sem-risk)">{{ (item.attribution.misses||[]).filter(m=>m.signal==='risk').length }} 险</span>
                                        <span class="text-xs-tertiary" v-if="item.attribution.consistency_note">{{ item.attribution.consistency_note }}</span>
                                    </div>
                                    <div v-else-if="item.attribution && !item.attribution.available" class="text-xs-tertiary mt-4">归因数据不足 <qc-icon name="alert-triangle" :size="14" /></div>
                                </div>
                            </div>
                        </div>

                        <!-- 评分分布 + 快捷操作 双栏 -->
                        <div class="grid-2col-gap16-mb16">
                            <!-- 评分分布 -->
                            <div class="card" v-if="aiHistory.length > 0">
                                <div class="card-title">{{ t('ai.scoreDist') }}</div>
                                <div class="flex-c-gap-8-mb6" v-for="bar in scoreDistribution" :key="bar.label">
                                    <span class="bar-label">{{ bar.label }}</span>
                                    <div class="bar-track">
                                        <!-- V6.6: scoreDistribution 分数区间枚举色，定义于共享 watchlist.js，跨文件保留内联 -->
                                        <div :style="{width:bar.pct+'%',height:'100%',background:bar.color,borderRadius:'9px',transition:'width 0.6s ease',minWidth:bar.count>0?'4px':'0'}"></div>
                                    </div>
                                    <span class="bar-count">{{ bar.count }}</span>
                                </div>
                            </div>
                            <!-- 快捷操作 -->
                            <div class="card">
                                <div class="card-title">{{ t('ai.quickOps') }}</div>
                                <div class="flex-col-gap-10">
                                    <div class="text-sm-secondary-mb4" v-if="watchlist.length> 0">{{ t('ai.chooseFromWatchlist') }}</div>
                                    <el-select class="w-select-sm" v-if="watchlist.length> 0" v-model="quickEvalStock" :placeholder="t('ai.chooseFromWatchlist')" size="small" clearable>
                                        <el-option v-for="s in watchlist" :key="s.code" :label="s.code + ' ' + s.name" :value="s.code" />
                                    </el-select>
                                    <div class="flex-gap-8-c" v-if="watchlist.length> 0">
                                        <span class="text-xs-tertiary-nowrap">{{ t('ai.strategyLabel') }}</span>
                                        <el-radio-group v-model="evalStrategy" size="small">
                                            <el-radio-button value="default">综合</el-radio-button>
                                            <el-radio-button value="trend">趋势</el-radio-button>
                                            <el-radio-button value="value">价值</el-radio-button>
                                            <el-radio-button value="short_term">短线</el-radio-button>
                                        </el-radio-group>
                                    </div>
                                    <el-button class="align-self-start" v-if="watchlist.length> 0" type="primary" size="small" @click="quickEvaluate" :disabled="!quickEvalStock" :loading="aiLoading">{{ t('ai.quickEval') }}</el-button>
                                    <div class="text-center-tertiary-pad20x0" v-if="watchlist.length === 0">
                                        <div class="text-3xl-mb8"><qc-icon name="star" :size="36" /></div>
                                        <div class="text-sm">{{ t('ai.noWatchlist') }}</div>
                                        <el-button class="mt-2" size="small" @click="currentSubPage = 'watchlist'">{{ t('ai.goAddWatchlist') }}</el-button>
                                    </div>
                                    <div class="section-top-thin">
                                        <el-button class="w-100" size="small" @click="showBatchEvaluate = true">{{ t('ai.batchEvalInput') }}</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 空状态：无任何评估记录 -->
                        <div v-if="aiHistory.length === 0" class="card text-center-pad40x20">
                            <div class="empty-state-icon-md"><qc-icon name="bot" :size="32" /></div>
                            <div class="text-lg-semibold-primary-mb8">{{ t('ai.title') }}</div>
                            <div class="text-md-secondary-mb20">{{ t('ai.subtitle') }}</div>
                            <div class="flex-gap-12-center">
                                <el-button type="primary" @click="currentSubPage = 'watchlist'">{{ t('ai.manageWatchlist') }}</el-button>
                                <el-button @click="showBatchEvaluate = true">{{ t('ai.batchEval') }}</el-button>
                            </div>
                        </div>
                    </div>

                    <!-- history: 评估历史记录 -->
                    <div v-else-if="currentSubPage === 'evaluation-analysis'">
                        <!-- v3.17.6 (FR-3.17.6): 评估命中率（决策复盘） -->
                        <div class="card eval-track-card">
                            <div class="card-title">{{ t('ai.evalHitRate') }} <span class="eval-track-title-hint">对照评估后 5/10/20 个交易日实际涨跌</span></div>
                            <!-- V5.3.0 (T-5.3.1.2): 收敛为统一状态面板 -->
                            <qc-state-panel v-if="trackLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="!trackData || !trackData.samples || trackData.samples.length === 0" type="empty" icon="bar-chart-3" :title="t('ai.insufficientSamples')"></qc-state-panel>
                            <template v-else>
                                <div class="eval-track-overall">
                                    <div v-for="w in trackWindows" :key="w.key" class="eval-track-stat">
                                        <div class="eval-track-stat-value">{{ fmtTrackRate(trackData.overall[w.key]) }}</div>
                                        <div class="eval-track-stat-label">{{ w.label }}命中率（{{ trackData.overall[w.key].total }} 样本）</div>
                                    </div>
                                </div>
                                <div class="eval-track-note">{{ trackData.note }}</div>
                                <div class="eval-track-grid">
                                    <div>
                                        <div class="eval-track-subtitle">{{ t('ai.hitRateByModel') }}</div>
                                        <table class="eval-track-table">
                                            <thead>
                                                <tr><th>模型</th><th>5日</th><th>10日</th><th>20日</th><th>样本</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(st, name) in trackData.by_model" :key="name">
                                                    <td>{{ name }}</td>
                                                    <td>{{ fmtTrackRate(st.n5) }}</td>
                                                    <td>{{ fmtTrackRate(st.n10) }}</td>
                                                    <td>{{ fmtTrackRate(st.n20) }}</td>
                                                    <td>{{ st.n5.total }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <div class="eval-track-subtitle">{{ t('ai.hitRateByLevel') }}</div>
                                        <table class="eval-track-table">
                                            <thead>
                                                <tr><th>评级</th><th>5日</th><th>10日</th><th>20日</th><th>样本</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(st, name) in trackData.by_level" :key="name">
                                                    <td>{{ name }}</td>
                                                    <td>{{ fmtTrackRate(st.n5) }}</td>
                                                    <td>{{ fmtTrackRate(st.n10) }}</td>
                                                    <td>{{ fmtTrackRate(st.n20) }}</td>
                                                    <td>{{ st.n5.total }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- v3.18 (FR-3.18.6): 决策复盘 — 按日期浏览 (by_date 命中标注) -->
                                <div class="eval-track-subtitle">按日期浏览（{{ trackWindow }} 日窗口命中标注）</div>
                                <div class="flex-gap-4">
                                    <el-button size="small" :type="trackWindow === 5 ? 'primary' : ''" @click="setTrackWindow(5)">5日</el-button>
                                    <el-button size="small" :type="trackWindow === 10 ? 'primary' : ''" @click="setTrackWindow(10)">10日</el-button>
                                    <el-button size="small" :type="trackWindow === 20 ? 'primary' : ''" @click="setTrackWindow(20)">20日</el-button>
                                </div>
                                <div v-for="(samples, date) in trackData.by_date" :key="date">
                                    <div class="eval-track-subtitle">{{ date }}（{{ samples.length }} 条）</div>
                                    <table class="eval-track-table">
                                        <thead>
                                            <tr><th>股票</th><th>评级</th><th>模型</th><th>{{ trackWindow }}日命中</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="s in samples" :key="s.id">
                                                <td>{{ s.stock_name || s.stock_code }}</td>
                                                <td>{{ s.level }}</td>
                                                <td>{{ s.provider }}</td>
                                                <td>{{ trackHitText(s, trackWindow) }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </template>
                        </div>
                    </div>

                    <div v-else-if="currentSubPage === 'history'">

                        <!-- 批量操作工具栏 -->
                        <div class="card mb-4">
                            <div class="flex-between">
                                <div class="color-secondary">
                                    <span v-if="selectedHistoryIds.length > 0">已选择 <strong class="color-primary">{{ selectedHistoryIds.length }}</strong> 条记录</span>
                                    <span v-else>可选多条记录进行批量操作</span>
                                </div>
                                <div class="flex-gap-8">
                                    <el-button size="small" @click="selectAllHistory">{{ selectedHistoryIds.length === aiHistory.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" @click="batchReevaluateHistory"><qc-icon name="refresh" :size="14" /> 再次评估</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="success" @click="batchAddToWatchlist"><qc-icon name="star" :size="14" /> 加入自选</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="warning" @click="batchAddToPortfolio"><qc-icon name="bar-chart-3" :size="14" /> 加入组合</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="danger" @click="deleteSelectedHistory"><qc-icon name="trash-2" :size="14" /> 批量删除</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" @click="clearSelection">取消选择</el-button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-title">{{ t('ai.historyTitle') }} <span class="card-title-hint">共 {{ Object.keys(groupedByDate).length }} 天 · {{ aiHistory.length }} 条</span></div>
                        <!-- v3.16 (16.7): 统一加载/离线/错误态（可重试） -->
                        <qc-state-panel v-if="aiHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadAiHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="aiHistoryError" type="error" @retry="loadAiHistory"></qc-state-panel>
                        <div v-else-if="aiHistory.length === 0" class="empty-state">
                            <div class="empty-state-icon"><qc-icon name="bot" :size="32" /></div>
                            <div class="text-md-medium-primary">{{ t('ai.noEvalRecord') }}</div>
                            <div class="text-sm-tertiary-mt8">
                                {{ t('ai.evalHint') }}
                            </div>
                        </div>

                        <!-- V5.20 (F1): 中栏分组列表 + 右栏详情工作区 (弹窗模式时仅列表全宽, 面板不渲染) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- 视图切换 -->
                        <div class="flex-gap-8-mb12" v-if="aiHistory.length> 0">
                            <el-button size="small" @click="aiHistoryView = 'date'" :type="aiHistoryView === 'date' ? 'primary' : ''">{{ t('ai.byDate') }}</el-button>
                            <el-button size="small" @click="aiHistoryView = 'month'" :type="aiHistoryView === 'month' ? 'primary' : ''">{{ t('ai.byMonth') }}</el-button>
                            <el-button size="small" @click="aiHistoryView = 'stock'" :type="aiHistoryView === 'stock' ? 'primary' : ''">{{ t('ai.byStock') }}</el-button>
                        </div>

                        <!-- 按日期聚合展示 -->
                        <div v-if="aiHistoryView === 'date'" class="ai-history-list">
                            <template v-for="(records, date) in groupedByDate" :key="date">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <!-- 日期级复选框 -->
                                        <div @click.stop="toggleSelectDate(date)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': records.every(r => selectedHistoryIds.includes(r.id))}" :style="records.some(r => selectedHistoryIds.includes(r.id)) && !records.every(r => selectedHistoryIds.includes(r.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ records.every(r => selectedHistoryIds.includes(r.id)) ? '✓' : (records.some(r => selectedHistoryIds.includes(r.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="flex-1" @click="toggleDateExpand(date)">
                                            <div class="flex-c-gap-8">
                                                <span class="text-md-semibold"><qc-icon name="calendar" :size="14" /> {{ date }}</span>
                                                <span class="count-badge-sm">{{ records.length }}条评估</span>
                                            </div>
                                        </div>
                                        <div class="group-toggle-arrow" @click="toggleDateExpand(date)" :style="{transform: expandedDates.includes(date) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedDates.includes(date)" class="date-group-records records-indent">
                                        <!-- v3.16 (16.7): 内层虚拟滚动（分组较大时仅渲染可视区记录） -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="96">
                                            <template #default="{ item: record }">
                                            <qc-history-record :item="record" type="history" :show-dims="true" time-format="time"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按月聚合展示 -->
                        <div v-else-if="aiHistoryView === 'month'" class="ai-history-list">
                            <template v-for="(records, month) in groupedByMonth" :key="month">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <div @click.stop="toggleSelectMonth(month)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': records.every(r => selectedHistoryIds.includes(r.id))}" :style="records.some(r => selectedHistoryIds.includes(r.id)) && !records.every(r => selectedHistoryIds.includes(r.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ records.every(r => selectedHistoryIds.includes(r.id)) ? '✓' : (records.some(r => selectedHistoryIds.includes(r.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="flex-1" @click="toggleMonthExpand(month)">
                                            <div class="flex-c-gap-8">
                                                <span class="text-md-semibold"><qc-icon name="calendar-days" :size="14" /> {{ month }}</span>
                                                <span class="count-badge-sm">{{ records.length }}条评估</span>
                                            </div>
                                        </div>
                                        <div class="group-toggle-arrow" @click="toggleMonthExpand(month)" :style="{transform: expandedMonths.includes(month) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedMonths.includes(month)" class="date-group-records records-indent">
                                        <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="96">
                                            <template #default="{ item: record }">
                                            <qc-history-record :item="record" type="history" time-format="datetime"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按股票聚合展示 -->
                        <div v-else class="ai-history-list">
                            <div class="group-border-card" v-for="(records, code) in aiHistoryByStock" :key="code">
                                <div class="date-group-header">
                                        <!-- 股票级复选框 -->
                                        <div @click.stop="toggleSelectStock(code)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': records.every(r => selectedHistoryIds.includes(r.id))}" :style="records.some(r => selectedHistoryIds.includes(r.id)) && !records.every(r => selectedHistoryIds.includes(r.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ records.every(r => selectedHistoryIds.includes(r.id)) ? '✓' : (records.some(r => selectedHistoryIds.includes(r.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="group-title-click" @click="toggleStockExpand(code)">
                                        <div class="flex-c-gap-8">
                                            <strong>{{ code }}</strong>
                                            <span class="color-tertiary">{{ records[0].stock_name }}</span>
                                            <span class="count-badge-sm">{{ records.length }}次</span>
                                            <!-- V6.6: records[0].result.level_color 服务端实时色，保留内联 -->
                                            <span :style="{color: levelColor(records[0].result.level), fontSize: 'var(--font-sm)'}">最新{{ fmtNum(records[0].result.total_score) }}分</span>
                                        </div>
                                    </div>
                                    <span class="group-toggle-arrow" :style="{transform: expandedStocks.includes(code) ? 'rotate(90deg)' : ''}">▶</span>
                                </div>
                                <div class="records-indent-sm" v-if="expandedStocks.includes(code)">
                                    <!-- v3.7.14: 评估历史趋势图 -->
                                    <div class="trend-chart-box" v-if="records.length> 1" :ref="el => registerTrendChart(el, code, records)"></div>
                                    <!-- v3.16 (16.7): 内层虚拟滚动（单股多次评估时仅渲染可视区） -->
                                    <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                    <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="96">
                                        <template #default="{ item: record }">
                                    <qc-history-record :item="record" type="history" time-format="time"></qc-history-record>
                                        </template>
                                    </qc-virtual-list>
                                </div>
                            </div>
                        </div>

                        <!-- v3.17.9 (FR-3.17.9): 评估历史懒加载 — 滚动触底 + 手动按钮加载更多 -->
                        <div v-if="aiHistory.length > 0 && hasMoreAiHistory" class="ai-history-loadmore">
                            <el-button size="small" :loading="aiHistoryLoadingMore" @click="loadMoreAiHistory">
                                加载更多（剩余 {{ aiHistoryTotal - aiHistory.length }} 条）
                            </el-button>
                        </div>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>
                    </div>

                    <!-- chat_history: 问股历史 (v2.4) -->
                    <div v-else-if="currentSubPage === 'chat_history'">
                        <!-- 批量操作工具栏 -->
                        <div class="card mb-4">
                            <div class="flex-between">
                                <div class="color-secondary">
                                    <span v-if="selectedChatIds.length > 0">已选择 <strong class="color-primary">{{ selectedChatIds.length }}</strong> 条对话</span>
                                    <span v-else>可选多条记录进行批量操作</span>
                                </div>
                                <div class="flex-gap-8">
                                    <el-button size="small" @click="selectAllChatSessions">{{ selectedChatIds.length === allChatSessionsFlat.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedChatIds.length > 0" size="small" type="danger" @click="deleteSelectedChatSessions"><qc-icon name="trash-2" :size="14" /> 批量删除</el-button>
                                    <el-button v-if="selectedChatIds.length > 0" size="small" @click="selectedChatIds = []">取消选择</el-button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-title"><qc-icon name="message-circle" :size="16" /> AI 问股历史 <span class="card-title-hint">共 {{ Object.keys(chatGroupedByDate).length }} 天 · {{ allChatSessionsFlat.length }} 条</span></div>
                        <!-- v3.16 (16.7): 统一加载/离线/错误态（可重试） -->
                        <qc-state-panel v-if="chatHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadChatHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="chatHistoryError" type="error" @retry="loadChatHistory"></qc-state-panel>
                        <div v-else-if="allChatSessionsFlat.length === 0" class="empty-state">
                            <div class="empty-state-icon"><qc-icon name="message-circle" :size="32" /></div>
                            <div class="text-md-medium-primary">暂无问股记录</div>
                            <div class="text-sm-tertiary-mt8">
                                在股票详情页点击「AI 问股」开始对话
                            </div>
                        </div>

                        <!-- V5.20 (F1): 中栏分组列表 + 右栏详情工作区 (弹窗模式时仅列表全宽, 面板不渲染) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- 视图切换 -->
                        <div class="flex-gap-8-mb12" v-if="allChatSessionsFlat.length> 0">
                            <el-button size="small" @click="chatHistoryView = 'date'" :type="chatHistoryView === 'date' ? 'primary' : ''"><qc-icon name="calendar" :size="14" /> 按日期</el-button>
                            <el-button size="small" @click="chatHistoryView = 'month'" :type="chatHistoryView === 'month' ? 'primary' : ''"><qc-icon name="calendar-days" :size="14" /> 按月</el-button>
                            <el-button size="small" @click="chatHistoryView = 'stock'" :type="chatHistoryView === 'stock' ? 'primary' : ''"><qc-icon name="trending-up" :size="14" /> 按股票</el-button>
                        </div>

                        <!-- 按日期聚合 -->
                        <div v-if="chatHistoryView === 'date' && allChatSessionsFlat.length > 0" class="ai-history-list">
                            <template v-for="(sessions, date) in chatGroupedByDate" :key="date">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <div @click.stop="toggleSelectChatDate(date)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': sessions.every(s => selectedChatIds.includes(s.id))}" :style="sessions.some(s => selectedChatIds.includes(s.id)) && !sessions.every(s => selectedChatIds.includes(s.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ sessions.every(s => selectedChatIds.includes(s.id)) ? '✓' : (sessions.some(s => selectedChatIds.includes(s.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="flex-1" @click="toggleChatDateExpand(date)">
                                            <div class="flex-c-gap-8">
                                                <span class="text-md-semibold"><qc-icon name="calendar" :size="14" /> {{ date }}</span>
                                                <span class="count-badge-sm">{{ sessions.length }}条对话</span>
                                            </div>
                                        </div>
                                        <div class="group-toggle-arrow" @click="toggleChatDateExpand(date)" :style="{transform: expandedChatDates.includes(date) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedChatDates.includes(date)" class="date-group-records records-indent">
                                        <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="96">
                                            <template #default="{ item: session }">
                                        <qc-history-record :item="session" type="chat" time-format="time"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按月聚合 -->
                        <div v-else-if="chatHistoryView === 'month' && allChatSessionsFlat.length > 0" class="ai-history-list">
                            <template v-for="(sessions, month) in chatGroupedByMonth" :key="month">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <div @click.stop="toggleSelectChatMonth(month)" class="history-checkbox flex-vcenter">
                                            <div class="checkbox-inner" :class="{'checked': sessions.every(s => selectedChatIds.includes(s.id))}" :style="sessions.some(s => selectedChatIds.includes(s.id)) && !sessions.every(s => selectedChatIds.includes(s.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ sessions.every(s => selectedChatIds.includes(s.id)) ? '✓' : (sessions.some(s => selectedChatIds.includes(s.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div class="flex-1" @click="toggleChatMonthExpand(month)">
                                            <div class="flex-c-gap-8">
                                                <span class="text-md-semibold"><qc-icon name="calendar-days" :size="14" /> {{ month }}</span>
                                                <span class="count-badge-sm">{{ sessions.length }}条对话</span>
                                            </div>
                                        </div>
                                        <div class="group-toggle-arrow" @click="toggleChatMonthExpand(month)" :style="{transform: expandedChatMonths.includes(month) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedChatMonths.includes(month)" class="date-group-records records-indent">
                                        <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="96">
                                            <template #default="{ item: session }">
                                        <qc-history-record :item="session" type="chat" time-format="datetime"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按股票聚合 -->
                        <div v-else-if="allChatSessionsFlat.length > 0" class="ai-history-list">
                            <div class="group-border-card" v-for="(sessions, code) in chatGroupedByStock" :key="code">
                                <div class="date-group-header">
                                    <div @click.stop="toggleSelectChatStock(code)" class="history-checkbox flex-vcenter">
                                        <div class="checkbox-inner" :class="{'checked': sessions.every(s => selectedChatIds.includes(s.id))}" :style="sessions.some(s => selectedChatIds.includes(s.id)) && !sessions.every(s => selectedChatIds.includes(s.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                            {{ sessions.every(s => selectedChatIds.includes(s.id)) ? '✓' : (sessions.some(s => selectedChatIds.includes(s.id)) ? '−' : '') }}
                                        </div>
                                    </div>
                                    <div class="group-title-click" @click="toggleChatStockExpand(code)">
                                        <div class="flex-c-gap-8">
                                            <strong>{{ code }}</strong>
                                            <span class="color-tertiary">{{ sessions[0].stock_name }}</span>
                                            <span class="count-badge-sm">{{ sessions.length }}次</span>
                                        </div>
                                    </div>
                                    <span class="group-toggle-arrow" :style="{transform: expandedChatStocks.includes(code) ? 'rotate(90deg)' : ''}">▶</span>
                                </div>
                                <div class="records-indent-sm" v-if="expandedChatStocks.includes(code)">
                                    <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                    <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                    <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="96">
                                        <template #default="{ item: session }">
                                    <qc-history-record :item="session" type="chat" time-format="datetime"></qc-history-record>
                                        </template>
                                    </qc-virtual-list>
                                </div>
                            </div>
                        </div>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                        </div>
                    </div>

                    <!-- watchlist: 我的自选 (v1.10) -->
                    <div v-else-if="currentSubPage === 'watchlist'">
                        <!-- 批量操作工具栏 -->
                        <div class="card mb-4">
                            <div class="flex-between">
                                <div class="color-secondary">
                                    <span v-if="selectedWatchlistCodes.length > 0">已选择 <strong class="color-primary">{{ selectedWatchlistCodes.length }}</strong> 只股票</span>
                                    <span v-else>可选多只股票进行批量操作</span>
                                </div>
                                <div class="flex-gap-8">
                                    <el-button size="small" @click="selectAllWatchlist">{{ selectedWatchlistCodes.length === watchlist.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" type="primary" @click="batchEvaluateSelected" :disabled="aiLoading"><qc-icon name="bar-chart-3" :size="14" /> 评估选中</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" type="danger" @click="batchRemoveWatchlist"><qc-icon name="trash-2" :size="14" /> 移除选中</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" @click="clearWatchlistSelection">取消选择</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" type="primary" @click="batchEvaluateWatchlist" :disabled="aiLoading"><qc-icon name="bar-chart-3" :size="14" /> 批量评估</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" type="danger" @click="clearWatchlist"><qc-icon name="trash-2" :size="14" /> 清空自选</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" @click="preloadWatchlistKline" :loading="preloadingKline"><qc-icon name="refresh" :size="14" /> 预加载K线</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">{{ t('ai.myWatchlist') }} <span class="card-title-hint">共 {{ watchlist.length }} 只</span></div>
                            <!-- V5.19 (F4): 中栏列表 + 右栏详情工作区 (弹窗模式时仅列表全宽, 面板不渲染) -->
                            <qc-detail-split :enabled="detailSplitEnabled">
                            <template #list>
                            <!-- v3.17.7 实时化 (FR-3.17.7): 自选实时报价区（WS；数据不可达降级占位，不阻塞其它功能） -->
                            <div v-if="watchlist.length > 0" class="rt-bar" :class="{'rt-degraded': realtimeDegraded || realtimeWsState === 'offline'}">
                                <span class="rt-title">实时报价</span>
                                <span v-if="realtimeDegraded || realtimeWsState === 'offline'" class="rt-degraded-text">
                                    {{ realtimeDegraded ? REALTIME_DEGRADED_TEXT : REALTIME_FALLBACK_TEXT }}
                                </span>
                                <span v-else-if="realtimeWsState === 'open'" class="rt-live">实时</span>
                                <span v-else class="rt-connecting">连接中...</span>
                            </div>
                            <!-- 搜索添加 -->
                            <div class="flex-gap-8-mb12">
                                <el-input class="flex-1" v-model="watchlistSearch" placeholder="输入股票代码或名称搜索..." size="small" @input="searchStockForWatchlist" clearable/>
                            </div>
                            <div v-if="watchlistResults.length" class="watchlist-search-results">
                                <div v-for="r in watchlistResults" :key="r.code" class="watchlist-search-item hover-row" @click="addSearchResult(r)">
                                    <span><strong>{{ r.code }}</strong> <span class="color-tertiary">{{ r.name }}</span></span>
                                    <span class="watchlist-add-hint">+ 添加</span>
                                </div>
                            </div>
                            <!-- 排序栏 -->
                            <div v-if="watchlist.length > 1" class="watchlist-sort-bar">
                                <span class="watchlist-sort-label">排序:</span>
                                <el-radio-group v-model="watchlistSort" size="small">
                                    <el-radio-button label="default">默认</el-radio-button>
                                    <el-radio-button label="name">名称</el-radio-button>
                                    <el-radio-button label="added">加入时间</el-radio-button>
                                    <el-radio-button label="score">评分</el-radio-button>
                                </el-radio-group>
                            </div>
                            <!-- v3.17.9 (FR-3.17.9): 自选加载骨架屏（数据到达前展示, 到达后替换） -->
                            <qc-state-panel v-if="watchlistLoading" type="loading"></qc-state-panel>
                            <!-- 空状态 -->
                            <!-- v3.16 (16.7): 离线检测 -->
                            <qc-state-panel v-else-if="!isOnline && watchlist.length === 0" type="offline" @retry="loadWatchlist"></qc-state-panel>
                            <div v-else-if="watchlist.length === 0" class="watchlist-empty">
                                <div class="watchlist-empty-icon"><qc-icon name="star" :size="32" /></div>
                                <div class="watchlist-empty-title">暂无自选股</div>
                                <div class="watchlist-empty-hint">搜索股票代码或名称添加</div>
                            </div>
                            <!-- 自选列表 -->
                            <div v-else>
                                <!-- v3.16 (16.7): 虚拟滚动，仅渲染可视区行（500+ 自选不卡顿） -->
                                <qc-virtual-list class="vlist-h-calc watchlist-vlist" :items="sortedWatchlist" :row-height="detailSplitEnabled ? 76 : 56">
                                    <template #default="{ item: stock }">
                                    <!-- v3.17.8 (FR-3.17.8): 移动端左滑露出删除操作（.swipe-reveal），长按复制代码 -->
                                    <div class="watchlist-item swipe-reveal" :data-copy-code="stock.code" @click="detailSplitEnabled ? showStockDetail(stock.code) : showStockKline(stock.code, stock.name)" :class="{'watchlist-item-selected': selectedWatchlistCodes.includes(stock.code), 'is-active': detailSplitEnabled && stockDetail && stockDetail.stock === stock.code}">
                                        <div class="swipe-reveal-main">
                                        <div class="watchlist-checkbox" @click.stop="toggleSelectWatchlist(stock.code)">
                                            <span v-if="selectedWatchlistCodes.includes(stock.code)" class="watchlist-checkbox-check">✓</span>
                                        </div>
                                        <div class="watchlist-info">
                                            <span class="watchlist-code">{{ stock.code }}</span>
                                            <span class="watchlist-name">{{ stock.name }}</span>
                                            <span v-if="batchRunning && batchStatuses[stock.code]==='running'" class="watchlist-status spinning"><qc-icon name="loader" :size="12" /></span>
                                            <!-- V6.6: getWatchlistScore().color 函数计算色，保留内联 -->
                                            <span v-else-if="getWatchlistScore(stock.code)" class="watchlist-score-badge" :style="{background: getWatchlistScore(stock.code).bg, color: getWatchlistScore(stock.code).color}">
                                                {{ fmtNum(getWatchlistScore(stock.code).score) }}
                                            </span>
                                        </div>
                                        <div class="watchlist-actions">
                                            <el-button size="small" @click.stop="watchlistEvaluate(stock.code, stock.name)" :disabled="aiLoading"><qc-icon name="bar-chart-3" :size="14" /> <span class="wl-btn-label">评估</span></el-button>
                                            <el-button size="small" @click.stop="showStockKline(stock.code, stock.name)"><qc-icon name="trending-up" :size="14" /> <span class="wl-btn-label">K线</span></el-button>
                                            <el-button size="small" type="danger" text @click.stop="removeFromWatchlist(stock.code)" aria-label="从自选删除"><qc-icon name="trash-2" :size="14" /></el-button>
                                        </div>
                                        <!-- v3.17.7 实时化 (FR-3.17.7): 实时报价（涨跌色/涨跌幅/量比/涨速 + 预警）
                                             V5.19 (F4): 移出 .watchlist-info 至行级 — 双栏窄栏时占满整行成为第二行 -->
                                        <div v-if="realtimeQuotes[stock.code]" class="watchlist-quote">
                                            <!-- V6.6: realtimeQuoteColor() 实时涨跌计算色，保留内联 -->
                                            <span class="quote-price" :style="{color: realtimeQuoteColor(stock.code)}">{{ realtimePriceText(stock.code) }}</span>
                                            <span class="quote-pct" :style="{color: realtimeQuoteColor(stock.code)}">{{ realtimePctText(stock.code) }}</span>
                                            <span class="quote-meta">量比 {{ realtimeRatioText(stock.code, 'volume_ratio') }}</span>
                                            <span class="quote-meta">涨速 {{ realtimeRatioText(stock.code, 'rise_speed') }}%</span>
                                            <span v-if="quoteWarningFor(stock.code)" class="rt-warn-tag">{{ quoteWarningFor(stock.code) }}</span>
                                        </div>
                                        </div>
                                        <div class="swipe-reveal-actions">
                                            <el-button size="small" type="danger" @click.stop="removeFromWatchlist(stock.code)"><qc-icon name="trash-2" :size="14" /> 删除</el-button>
                                        </div>
                                    </div>
                                    </template>
                                </qc-virtual-list>
                            </div>
                            </template>
                            <template #pane>
                                <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                            </template>
                            </qc-detail-split>
                        </div>
                    </div>

                    <!-- v5.4.0 (FR-5.4.4): 重点跟踪视图 -->
                    <div v-else-if="currentSubPage === 'focus'">
                        <qc-focus-view></qc-focus-view>
                    </div>

                    <!-- v3.17.8 (FR-3.17.5): 组合/模拟持仓视图 代码起点 -->
                    <div v-else-if="currentSubPage === 'portfolio'" class="portfolio-view">
                        <!-- 组合汇总条 -->
                        <div class="card portfolio-summary-card">
                            <div class="card-title">{{ t('ai.portfolioSummary') }}</div>
                            <div class="portfolio-summary-row">
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">总市值</div>
                                    <div class="portfolio-summary-value">{{ fmtNum(summary && summary.total_market_value, 2) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">总成本</div>
                                    <div class="portfolio-summary-value">{{ fmtNum(summary && summary.total_cost, 2) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">浮动盈亏</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.float_profit)">{{ fmtSigned(summary && summary.float_profit) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">当日收益</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.day_profit)">{{ fmtSigned(summary && summary.day_profit) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">累计收益</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.cumulative_profit)">{{ fmtSigned(summary && summary.cumulative_profit) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">持仓收益率</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.float_profit_pct)">{{ fmtSignedPct(summary && summary.float_profit_pct) }}</div>
                                </div>
                            </div>
                            <div v-if="summary && summary.note" class="portfolio-summary-note">{{ summary.note }}</div>
                        </div>

                        <!-- 组合收益曲线 -->
                        <div class="card portfolio-chart-card">
                            <div class="portfolio-chart-head">
                                <div class="card-title">{{ t('ai.portfolioCurve') }}</div>
                                <el-radio-group v-model="equityDays" size="small" @change="loadEquity(equityDays)">
                                    <el-radio-button :value="7">近7日</el-radio-button>
                                    <el-radio-button :value="30">近30日</el-radio-button>
                                    <el-radio-button :value="90">近90日</el-radio-button>
                                </el-radio-group>
                            </div>
                            <qc-state-panel v-if="equityLoading" type="loading"></qc-state-panel>
                            <div v-else-if="!equityHasData" class="portfolio-chart-empty">{{ equityNote || '暂无收益曲线数据' }}</div>
                            <div v-else id="portfolioEquityChart" class="portfolio-equity-chart"></div>
                            <div v-if="equityNote" class="portfolio-chart-note">{{ equityNote }}</div>
                        </div>

                        <!-- 持仓明细 / 调仓记录 -->
                        <div class="card">
                            <div class="portfolio-title-row">
                                <el-radio-group v-model="portfolioTab" size="small">
                                    <el-radio-button value="positions">持仓明细</el-radio-button>
                                    <el-radio-button value="trades">调仓记录</el-radio-button>
                                    <el-radio-button value="risk">风控</el-radio-button>
                                </el-radio-group>
                                <el-button size="small" type="primary" @click="showAddForm = !showAddForm">{{ showAddForm ? '收起表单' : '新增持仓' }}</el-button>
                            </div>

                            <!-- 新增持仓表单 -->
                            <div v-if="showAddForm" class="portfolio-add-form">
                                <el-input v-model="addForm.stock_code" placeholder="股票代码" size="small" class="portfolio-form-item" clearable />
                                <el-input v-model="addForm.stock_name" placeholder="股票名称(可选)" size="small" class="portfolio-form-item" clearable />
                                <el-input-number v-model="addForm.cost_price" :min="0" :precision="3" size="small" class="portfolio-form-item" placeholder="成本价" />
                                <el-input-number v-model="addForm.quantity" :min="0" :precision="2" size="small" class="portfolio-form-item" placeholder="数量" />
                                <el-button type="primary" size="small" :loading="addSaving" @click="addPosition">保存持仓</el-button>
                            </div>

                            <!-- 持仓列表 -->
                            <template v-if="portfolioTab === 'positions'">
                                <qc-state-panel v-if="loading" type="loading"></qc-state-panel>
                                <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadPortfolio"></qc-state-panel>
                                <qc-state-panel v-else-if="loadError" type="error" @retry="loadPortfolio"></qc-state-panel>
                                <div v-else-if="positions.length === 0" class="portfolio-empty">
                                    <div class="portfolio-empty-title">暂无持仓，添加一只股票开始跟踪</div>
                                </div>
                                <div v-else class="portfolio-table-wrap">
                                    <table class="portfolio-table">
                                        <thead>
                                            <tr>
                                                <th>代码 / 名称</th>
                                                <th>成本价</th>
                                                <th>数量</th>
                                                <th>现价</th>
                                                <th>市值</th>
                                                <th>浮动盈亏</th>
                                                <th>当日涨跌</th>
                                                <th>操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="p in positions" :key="p.stock_code">
                                                <td>
                                                    <div class="portfolio-stock">{{ p.stock_name }}</div>
                                                    <div class="portfolio-code">{{ p.stock_code }}</div>
                                                </td>
                                                <td>{{ fmtNum(p.cost_price, 3) }}</td>
                                                <td>{{ fmtNum(p.quantity, 2) }}</td>
                                                <td>{{ p.close != null ? fmtNum(p.close, 2) : '数据暂不可用' }}</td>
                                                <td>{{ p.market_value != null ? fmtNum(p.market_value, 2) : '--' }}</td>
                                                <td>
                                                    <span v-if="p.float_profit != null" :class="signClass(p.float_profit)">{{ fmtSigned(p.float_profit) }} ({{ fmtSignedPct(p.float_profit_pct) }})</span>
                                                    <span v-else class="portfolio-na">数据暂不可用</span>
                                                </td>
                                                <td>
                                                    <span v-if="p.pct_chg != null" :class="signClass(p.pct_chg)">{{ fmtSignedPct(p.pct_chg) }}</span>
                                                    <span v-else class="portfolio-na">--</span>
                                                </td>
                                                <td>
                                                    <!-- V5.3.0 (T-5.3.3.4): 详情按钮 — 打开股票详情弹窗 (含跳转日历) -->
                                                    <el-button size="small" @click="showStockDetail(p.stock_code)">详情</el-button>
                                                    <el-button size="small" @click="openTradeForm(p.stock_code, p.stock_name)">调仓</el-button>
                                                    <el-button size="small" type="danger" text @click="removePosition(p.stock_code)">删除</el-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </template>

                            <!-- 调仓记录 -->
                            <template v-else-if="portfolioTab === 'trades'">
                                <div v-if="trades.length === 0" class="portfolio-empty">
                                    <div class="portfolio-empty-title">暂无调仓记录</div>
                                </div>
                                <div v-else class="portfolio-trades-list">
                                    <div v-for="t in trades" :key="t.id" class="portfolio-trade-item">
                                        <div class="portfolio-trade-main">
                                            <span class="portfolio-trade-action" :class="t.action === 'buy' ? 'portfolio-buy' : 'portfolio-sell'">{{ t.action === 'buy' ? '买入' : '卖出' }}</span>
                                            <span class="portfolio-trade-stock">{{ t.stock_name }} {{ t.stock_code }}</span>
                                        </div>
                                        <div class="portfolio-trade-meta">价格 {{ fmtNum(t.price, 3) }} × {{ fmtNum(t.quantity, 2) }} · {{ t.trade_date || t.created_at }}</div>
                                        <div v-if="t.note" class="portfolio-trade-note">{{ t.note }}</div>
                                    </div>
                                </div>
                            </template>

                            <!-- V5.0.3 T-5.0.34: 风控 Tab (指标卡/规则/再平衡建议) -->
                            <template v-else-if="portfolioTab === 'risk'">
                                <qc-state-panel v-if="riskLoading" type="loading"></qc-state-panel>
                                <div v-else-if="!riskHasData && riskData.rules.length === 0" class="portfolio-chart-empty">{{ riskNote || '暂无风险数据' }}</div>
                                <div v-else class="portfolio-risk-panel">
                                    <div v-if="riskHasData" class="portfolio-risk-section">
                                        <div class="portfolio-risk-section-title">组合风险指标</div>
                                        <div class="portfolio-risk-grid">
                                            <div v-for="item in riskMetricList" :key="item.key" class="portfolio-risk-metric">
                                                <div class="portfolio-risk-label">{{ item.label }}</div>
                                                <div class="portfolio-risk-value">{{ item.value }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-risk-section">
                                        <div class="portfolio-risk-section-title">风控规则 <span class="portfolio-risk-sub">(集中度/止损/止盈/回撤熔断)</span></div>
                                        <div v-for="rule in riskData.rules" :key="rule.rule_id" class="portfolio-rule-item" :class="rule.triggered ? 'portfolio-rule-warn' : ''">
                                            <span class="portfolio-rule-badge" :class="rule.triggered ? 'portfolio-rule-badge-warn' : 'portfolio-rule-badge-ok'">{{ rule.triggered ? '触发' : '正常' }}</span>
                                            <span class="portfolio-rule-type">{{ rule.type }}</span>
                                            <span class="portfolio-rule-msg">{{ rule.message || (rule.triggered ? '' : '未触发') }}</span>
                                        </div>
                                    </div>
                                    <div v-if="riskData.rebalance" class="portfolio-risk-section">
                                        <div class="portfolio-risk-section-title">再平衡建议 <span class="portfolio-risk-sub">(波动率目标仓位 vs 当前权重)</span></div>
                                        <div class="portfolio-table-wrap">
                                            <table class="portfolio-table">
                                                <thead><tr><th>标的</th><th>当前权重</th><th>目标权重</th><th>调整</th></tr></thead>
                                                <tbody>
                                                    <tr v-for="(diff, code) in riskData.rebalance.diffs" :key="code">
                                                        <td>{{ code }}</td>
                                                        <td>{{ fmtNum(riskData.rebalance.current[code], 4) }}</td>
                                                        <td>{{ fmtNum(riskData.rebalance.targets[code], 4) }}</td>
                                                        <td :class="signClass(diff * 100)">{{ fmtSignedPct(diff * 100) }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div v-if="riskNote" class="portfolio-chart-note">{{ riskNote }}</div>
                                </div>
                            </template>
                        </div>

                        <!-- 调仓弹窗 -->
                        <el-dialog v-model="tradeFormVisible" title="记录调仓" width="420px">
                            <div class="portfolio-trade-form">
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">股票</span>
                                    <span class="portfolio-trade-stock">{{ tradeForm.stock_code }} {{ tradeForm.stock_name }}</span>
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">方向</span>
                                    <el-radio-group v-model="tradeForm.action" size="small">
                                        <el-radio-button value="buy">买入</el-radio-button>
                                        <el-radio-button value="sell">卖出</el-radio-button>
                                    </el-radio-group>
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">价格</span>
                                    <el-input-number v-model="tradeForm.price" :min="0" :precision="3" size="small" />
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">数量</span>
                                    <el-input-number v-model="tradeForm.quantity" :min="0" :precision="2" size="small" />
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">日期</span>
                                    <el-date-picker v-model="tradeForm.trade_date" type="date" size="small" value-format="YYYY-MM-DD" placeholder="默认今天" />
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">备注</span>
                                    <el-input v-model="tradeForm.note" size="small" placeholder="可选" />
                                </div>
                            </div>
                            <template #footer>
                                <el-button size="small" @click="tradeFormVisible = false">取消</el-button>
                                <el-button type="primary" size="small" :loading="tradeSaving" @click="submitTrade">保存</el-button>
                            </template>
                        </el-dialog>
                    </div>
                </div>`,setup(){const{ref:e,watch:f,onUnmounted:t}=Vue,d=a("qcState");if(!d)return{};function p(){if(!d.hasMoreAiHistory||!d.loadMoreAiHistory||d.currentPage.value!=="ai"||d.currentSubPage.value!=="history")return;const pe=document.documentElement;pe.scrollTop+window.innerHeight>=pe.scrollHeight-300&&d.loadMoreAiHistory()}window.addEventListener("scroll",p,{passive:!0}),t(()=>window.removeEventListener("scroll",p));const A=e(null),g=e(!1),r=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function w(pe){return!pe||pe.total===0||pe.rate===null||pe.rate===void 0?"--":pe.rate.toFixed(2)+"%"}const i=e(5);function S(pe){i.value=pe}function b(pe,de){if(!pe)return"--";if(pe.available===!1)return"— 数据不可达";const J=pe["hit_n"+de];return J===!0?"✓ 命中":J===!1?"✗ 未中":"– 中性/待验证"}async function M(){g.value=!0;try{const de=await(await fetch("/api/ai/track")).json();A.value=de&&de.success?de.data:null}catch(pe){console.warn("[eval-track] 评估命中率加载失败:",pe),A.value=null}finally{g.value=!1}}f(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(pe){pe==="ai/evaluation-analysis"&&M()},{immediate:!0});const _=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:z,summary:F,trades:C,loading:c,loadError:n,showAddForm:u,addForm:l,addSaving:x,tradeFormVisible:E,tradeForm:O,tradeSaving:X,portfolioTab:R,equityDays:q,equityLoading:I,equityNote:V,equityHasData:se,loadPortfolio:Y,addPosition:ee,removePosition:j,openTradeForm:H,submitTrade:N,loadTrades:k,loadEquity:D,fmtSigned:ce,fmtSignedPct:U,signClass:y,riskTab:o,riskLoading:T,riskNote:m,riskHasData:W,riskData:ue,riskMetricList:Z,loadRisk:P}=_;f(z,function(pe){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((pe||[]).map(function(de){return{code:de.stock_code,name:de.stock_name||de.stock_code}}))},{deep:!0}),f(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(pe){pe==="ai/portfolio"?(Y(),k(),D(q?q.value:30),typeof P=="function"&&P()):pe==="ai/overview"&&Y()},{immediate:!0});let G="",re=!1;return f(function(){const pe=d.currentSubPage&&d.currentSubPage.value,de=!!(d.detailSplitEnabled&&d.detailSplitEnabled.value),J={sub:pe,split:de,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(pe==="history"){const oe=d.aiHistoryView&&d.aiHistoryView.value||"date",Pe=oe==="date"?d.groupedByDate:oe==="month"?d.groupedByMonth:d.aiHistoryByStock,ke=Pe&&Pe.value||{},_e=Object.keys(ke);J.kind="history",J.view=oe,J.key=_e.length?_e[0]:"",J.first=_e.length&&(ke[_e[0]]||[])[0]||null,J.expandList=oe==="date"?d.expandedDates:oe==="month"?d.expandedMonths:d.expandedStocks,J.expandFn=oe==="date"?d.toggleDateExpand:oe==="month"?d.toggleMonthExpand:d.toggleStockExpand}else if(pe==="chat_history"){const oe=d.chatHistoryView&&d.chatHistoryView.value||"date",Pe=oe==="date"?d.chatGroupedByDate:oe==="month"?d.chatGroupedByMonth:d.chatGroupedByStock,ke=Pe&&Pe.value||{},_e=Object.keys(ke);J.kind="chat",J.view=oe,J.key=_e.length?_e[0]:"",J.first=_e.length&&(ke[_e[0]]||[])[0]||null,J.expandList=oe==="date"?d.expandedChatDates:oe==="month"?d.expandedChatMonths:d.expandedChatStocks,J.expandFn=oe==="date"?d.toggleChatDateExpand:oe==="month"?d.toggleChatMonthExpand:d.toggleChatStockExpand}return J},function(pe){if(!pe.split||!pe.first||!pe.kind)return;const de=pe.sub!==G,J=d.stockDetail&&d.stockDetail.value,oe=!!(J&&J.stock);if(!de&&oe||re)return;G=pe.sub,re=!0;try{pe.key&&pe.expandList&&pe.expandFn&&pe.expandList.value&&pe.expandList.value.indexOf(pe.key)<0&&pe.expandFn(pe.key)}catch{}const Pe=pe.kind==="history"?d.viewAiResult(pe.first):d.viewChatSession(pe.first);Pe&&typeof Pe.finally=="function"?Pe.finally(function(){re=!1}):re=!1},{immediate:!0}),{...d,trackData:A,trackLoading:g,trackWindows:r,fmtTrackRate:w,loadTrack:M,trackWindow:i,setTrackWindow:S,trackHitText:b,positions:z,summary:F,trades:C,loading:c,loadError:n,showAddForm:u,addForm:l,addSaving:x,tradeFormVisible:E,tradeForm:O,tradeSaving:X,portfolioTab:R,equityDays:q,equityLoading:I,equityNote:V,equityHasData:se,loadPortfolio:Y,addPosition:ee,removePosition:j,openTradeForm:H,submitTrade:N,loadTrades:k,loadEquity:D,fmtSigned:ce,fmtSignedPct:U,signClass:y,riskTab:o,riskLoading:T,riskNote:m,riskHasData:W,riskData:ue,riskMetricList:Z,loadRisk:P}}}})();(function(){const{ref:a,computed:e,watch:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
                <!-- V5.2.3: 市场复盘移入短线复盘 → 本组件在 shortterm 下也渲染该子页 (V6.9.1-fix: 异动扫描已删除) -->
                <div key="research">
                    <!-- V6.9.4 (FIX): 根 v-if currentPage 判断在组件内为死值导致整页空白 — 移除, 子页由 currentSubPage 控制 -->
                    <!-- V6.9.3 (F11.2): 策略研究菜单恒显 — 移除 researchMenuEnabled 占位分支 -->
                    <!-- V4.9 (P2): 研究概览子页 -->
                    <div v-if="currentSubPage === 'research-overview'" class="card">
                        <div class="card-title"><qc-icon name="bar-chart-3" :size="16" /> 策略研究概览</div>
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
                    </div>
                    <div v-if="currentSubPage === 'quant-research'" class="card">
                        <div class="card-title">{{ t('research.quantResearch') }}</div>
                        <!-- V6.9.4 (F6.2): 持仓数据文件缺失可诊断提示条 (策略定义列表仍可用) -->
                        <div v-if="strategiesWarn" class="text-danger-semibold mt-8" role="alert"><qc-icon name="alert-triangle" :size="14" /> {{ strategiesWarn }}</div>
                        <!-- v3.19 (策略研究 P0): 策略注册表 → schema 表单 → 运行/回测/PTrade 导出 -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" :title="strategiesErrorText || '策略加载失败'"
                            desc="请检查服务后重试" @retry="loadStrategies"></qc-state-panel>
                        <template v-else>
                            <div class="flex-wrap mb-4">
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
                                <!-- schema 驱动参数表单 -->
                                <div class="strategy-params">
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
                                <!-- 运行历史 -->
                                <div v-if="strategyRuns.length" class="strategy-runs">
                                    <div class="strategy-param-label">最近运行</div>
                                    <div v-for="run in strategyRuns.slice(0, 5)" :key="run.id" class="strategy-run-row">
                                        <span class="strategy-run-status" :class="run.status">{{ run.status }}</span>
                                        <span class="text-sm">{{ run.mode }} · {{ run.started_at }}</span>
                                        <span v-if="run.summary && run.summary.symbols" class="text-sm">选股 {{ run.summary.symbols.length }} 只</span>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <!-- v3.20 (P1-F8): 因子研究 — 单因子IC评价 + 分层回测 -->
                        <div class="factor-research">
                            <div class="card-title"><qc-icon name="bar-chart-3" :size="16" /> 因子研究</div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-select class="w-select-lg" v-model="factorKey" size="small" placeholder="选择因子">
                                    <el-option v-for="f in (activeStrategy && activeStrategy.factor_specs) || factorOptions" :key="f.name" :label="f.name + ' (' + f.category + ')'" :value="f.name" />
                                </el-select>
                                <el-button size="small" type="primary" @click="runFactorIc" :loading="factorIcLoading">IC 分析</el-button>
                                <el-button size="small" @click="runFactorLayer" :loading="factorLayerLoading">分层回测</el-button>
                                <el-button size="small" @click="runFactorDetail" :loading="factorDetailLoading">因子详情</el-button>
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
                            </div>
                            <!-- 分层回测 -->
                            <div v-if="factorLayerResult" class="factor-layer-result">
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <div class="stat-card p-12" v-for="ly in factorLayerResult.layers" :key="ly.layer">
                                        <div class="stat-value text-lg" :class="ly.layer === factorLayerResult.layers.length ? 'up' : (ly.return < 0 ? 'down' : 'flat')">{{ fmtNum(ly.return) }}%</div>
                                        <div class="stat-label">层 {{ ly.layer }}</div>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt8" :class="factorLayerResult.monotonic ? 'up' : 'down'">
                                    单调性: {{ factorLayerResult.monotonic ? '单调递增 ✓' : '非单调' }} · 多空价差 {{ fmtNum(factorLayerResult.spread) }}%
                                </div>
                            </div>
                            <!-- T-5.1.16: 因子详情面板 (定义/覆盖度/IC衰减/换手/多重检验/近2年) -->
                            <div v-if="factorDetail" class="factor-detail-panel mt-8">
                                <div class="card-title"><qc-icon name="file-text" :size="16" /> 因子详情 <span class="text-sm-tertiary">{{ factorDetail.meta.name }} · {{ factorDetail.meta.category }}</span></div>
                                <div v-if="factorDetail.meta.description" class="text-sm-tertiary-mt8">{{ factorDetail.meta.description }}</div>
                                <!-- 覆盖度 -->
                                <div class="grid-auto-fit-140-mb16 mt-8">
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorDetail.coverage * 100, 0) }}%</div>
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
                                        <div class="stat-value text-lg">{{ fmtNum(factorDetail.turnover.cost_drag_pct, 1) }}%</div>
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
                            <!-- V4.0 M2-1: 参数网格扫描 (策略实验室) -->
                            <div class="sweep-research mt-8">
                                <div class="card-title"><qc-icon name="flask-conical" :size="16" /> 参数扫描 <span class="text-sm-tertiary">网格搜索 → SDK 回测 → 按指标排序</span></div>
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <el-input class="w-260" size="small" v-model="sweepGrid" placeholder='JSON 网格, 如 {"top_n":[10,20,30],"st_filter":[true,false]}' />
                                    <el-button size="small" type="primary" @click="runSweep" :loading="sweepLoading"><qc-icon name="play" :size="14" /> 运行扫描</el-button>
                                    <span class="text-sm-tertiary">指标: 年化收益(降序)</span>
                                </div>
                                <div v-if="sweepMessage" class="text-sm-tertiary-mt8">{{ sweepMessage }}</div>
                                <!-- V5.0.2 T-5.0.24: 参数稳定性诊断 (高原 + 过拟合判定) -->
                                <div v-if="sweepStability" class="param-stability mt-8" :class="{ 'param-stability-overfit': sweepStability.verdict === 'overfit', 'param-stability-robust': sweepStability.verdict === 'robust' }">
                                    <span class="text-sm-secondary">参数稳定性:</span>
                                    <span v-if="sweepStability.verdict === 'overfit'" class="text-danger-semibold">过拟合风险 (扰动衰减比 {{ fmtNum(sweepStability.spread_ratio) }})</span>
                                    <span v-else-if="sweepStability.verdict === 'robust'" class="text-sm-primary">稳健高原 (衰减比 {{ fmtNum(sweepStability.spread_ratio) }}, 高原覆盖 {{ fmtNum(sweepStability.plateau_ratio * 100, 0) }}%)</span>
                                    <span v-else class="text-sm-tertiary">{{ sweepStability.note || '稳定性诊断不可用' }}</span>
                                    <span v-if="sweepStability.verdict !== 'unknown'" class="text-sm-tertiary">最优参数 {{ sweepStability.best_param }} · 高原区间 [{{ sweepStability.plateau_min }}, {{ sweepStability.plateau_max }}]</span>
                                </div>
                                <div v-if="sweepResult && sweepResult.length" class="sweep-table mt-8">
                                    <div v-for="(row, i) in sweepResult" :key="i" class="sweep-row flex-wrap-gap-12-mb16-c" :class="{ 'sweep-best': i === 0 }">
                                        <span class="text-sm-secondary w-260">参数: {{ JSON.stringify(row.params) }}</span>
                                        <span class="text-sm-primary">年化 {{ (row.annual_return * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary">总收益 {{ (row.total_return * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary" :class="{ down: row.max_drawdown < -0.2 }">回撤 {{ (row.max_drawdown * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary">夏普 {{ row.sharpe_ratio.toFixed(2) }}</span>
                                        <span v-if="row.overfit_warning" class="text-sm-tertiary"><qc-icon name="alert-triangle" :size="14" /> 疑似过拟合</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'strategy-manage'" class="card">
                        <!-- V6.6.1 (PRD F-6.6.7): 策略管理 = 模板编辑(原策略编写) + 全新创建(原全新策略) 两态 -->
                        <div class="card-title"><qc-icon name="layers" :size="16" /> 策略管理 <span class="text-sm-tertiary">模板编辑：复制母本微调 · 全新创建：AI 代写</span></div>
                        <div class="flex-gap-8-mb16">
                            <el-button :type="strategyManageMode === 'template' ? 'primary' : ''" size="small" @click="strategyManageMode = 'template'"><qc-icon name="settings" :size="14" /> 模板编辑</el-button>
                            <el-button :type="strategyManageMode === 'custom' ? 'primary' : ''" size="small" @click="strategyManageMode = 'custom'"><qc-icon name="rocket" :size="14" /> 全新创建</el-button>
                        </div>
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
                            </div>
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
                            <div class="custom-bt-grid">
                                <div class="custom-bt-item"><span class="text-sm-tertiary">标的</span><b>{{ customBtResult.symbols.length }}</b></div>
                                <div class="custom-bt-item"><span class="text-sm-tertiary">区间</span><b>{{ customBtResult.dates[0] }} → {{ customBtResult.dates[1] }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">年化</span><b>{{ fmtNum(customBtResult.metrics.annual_return_pct) }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">最大回撤</span><b>{{ fmtNum(customBtResult.metrics.max_drawdown_pct) }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">夏普</span><b>{{ fmtNum(customBtResult.metrics.sharpe) }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">胜率</span><b>{{ fmtNum(customBtResult.metrics.win_rate_pct) }}%</b></div>
                            </div>
                        </div>
                        </template>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest'" class="card">
                        <div class="card-title">{{ t('research.backtest') }}</div>
                        <!-- v3.2.0-T21: 回测参数 -->
                        <div class="flex-wrap-gap-12-mb16-c">
                            <el-select class="w-select-md" v-model="backtestStrategy" size="small" placeholder="选择策略">
                                <el-option v-for="s in backtestStrategies" :key="s.id" :label="s.name" :value="s.id" />
                            </el-select>
                            <el-date-picker class="w-260" v-model="backtestRange" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="YYYY-MM-DD"/>
                            <el-input-number class="w-140" v-model="backtestCapital" size="small" :min="10000" :step="50000"/>
                            <el-button type="primary" size="small" @click="runBacktest" :loading="backtestRunning"><qc-icon name="play" :size="14" /> 运行回测</el-button>
                        </div>
                        <!-- 回测结果 -->
                        <template v-if="backtestResult">
                            <div class="grid-auto-fit-140-mb16">
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.total_return_pct) }}%</div>
                                    <div class="stat-label">总收益率</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.annual_return_pct) }}%</div>
                                    <div class="stat-label">年化收益</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.max_drawdown_pct) }}%</div>
                                    <div class="stat-label">最大回撤</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.sharpe_ratio) }}</div>
                                    <div class="stat-label">夏普比率</div>
                                </div>
                            </div>
                            <div class="w-100-h320" id="backtestEquityChart"></div>
                            <div class="text-sm-tertiary-mt8">
                                {{ backtestResult.message || '' }}
                            </div>
                        </template>
                        <qc-state-panel v-else type="empty" icon="bar-chart-3" title="准备开始回测" desc="选择策略和日期范围后点击「运行回测」，结果将在此展示"></qc-state-panel>
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
                        <qc-state-panel v-else-if="btHistoryError" type="error" title="加载失败" desc="请检查网络后重试" @retry="loadBtHistory"></qc-state-panel>
                        <div v-else-if="!btHistory.length" class="empty-state">
                            <div class="text-md-medium-primary">暂无回测记录</div>
                            <div class="text-sm-tertiary-mt8">运行回测后，结果将自动记录在此</div>
                        </div>
                        <div v-else>
                            <div v-for="r in btHistory" :key="r.ts + '-' + r.sid" class="card mb-12">
                                <div class="flex-between-start-wrap">
                                    <div>
                                        <span class="strategy-name">{{ r.sid }}</span>
                                        <span class="text-xs-tertiary ml-8">{{ r.ts }}</span>
                                    </div>
                                    <div class="flex-c-gap-8">
                                        <span class="strategy-tag" v-if="r.summary">年化 {{ fmtNum(r.summary.annual_return) }}%</span>
                                        <span class="strategy-tag" v-if="r.summary">回撤 {{ fmtNum(r.summary.max_drawdown) }}%</span>
                                        <span class="strategy-tag" v-if="r.summary">夏普 {{ fmtNum(r.summary.sharpe_ratio) }}</span>
                                    </div>
                                </div>
                                <div v-if="r.summary" class="flex-wrap-gap-12-mb16-c mt-8">
                                    <span class="text-sm-secondary">总收益: <strong :class="(r.summary.total_return || 0) >= 0 ? 'color-success' : 'color-danger'">{{ fmtNum(r.summary.total_return) }}%</strong></span>
                                    <span class="text-sm-secondary">胜率: <strong>{{ fmtNum(r.summary.win_rate) }}%</strong></span>
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
                                <el-radio-button label="">全部</el-radio-button>
                                <el-radio-button label="factor_ic">因子IC</el-radio-button>
                                <el-radio-button label="layer">分层</el-radio-button>
                                <el-radio-button label="sweep">扫描</el-radio-button>
                                <el-radio-button label="backtest">回测</el-radio-button>
                            </el-radio-group>
                            <span class="text-sm-tertiary">勾选 ≤10 条可对比</span>
                            <el-button size="small" :loading="researchExportLoading" @click="exportResearchHistory"><qc-icon name="download" :size="14" /> 导出 CSV</el-button>
                        </div>
                        <qc-state-panel v-if="researchHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="researchHistoryError" type="error" title="研究历史加载失败" desc="请检查网络后重试" @retry="loadResearchHistory"></qc-state-panel>
                        <div v-else-if="!researchHistory.length" class="empty-state">
                            <div class="text-md-medium-primary">暂无研究实验</div>
                            <div class="text-sm-tertiary-mt8">运行因子IC / 分层 / 参数扫描 / 回测后，结果将自动记录在此</div>
                        </div>
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
                                    <span v-if="exp.summary.win_rate != null" class="text-sm-secondary">胜率 <strong>{{ fmtNum(exp.summary.win_rate) }}%</strong></span>
                                    <span v-if="exp.summary.annual_return != null" class="text-sm-secondary">年化 <strong>{{ fmtNum(exp.summary.annual_return) }}%</strong></span>
                                    <span v-if="exp.summary.max_drawdown != null" class="text-sm-secondary">回撤 <strong>{{ fmtNum(exp.summary.max_drawdown) }}%</strong></span>
                                    <span v-if="exp.summary.sharpe_ratio != null" class="text-sm-secondary">夏普 <strong>{{ fmtNum(exp.summary.sharpe_ratio) }}</strong></span>
                                    <span v-if="exp.summary.monotonic != null" class="text-sm-secondary">单调 <strong>{{ exp.summary.monotonic ? '✓' : '✗' }}</strong></span>
                                    <span v-if="exp.summary.spread != null" class="text-sm-secondary">多空价差 <strong>{{ fmtNum(exp.summary.spread) }}%</strong></span>
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
                                <div v-else class="market-review-date-items">
                                    <div v-for="item in marketReviews" :key="item.date" class="market-review-date-item"
                                         :class="{ 'is-active': item.date === selectedReviewDate }" role="button" tabindex="0"
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
                                </div>
                            </div>
                            <div class="split-divider" data-split-resize></div>
                            <!-- 右: 内容 (列表 / 详情) -->
                            <div class="market-review-split-content">
                            <!-- ===== 列表视图 ===== -->
                            <template v-if="!selectedReviewDate">
                                <qc-state-panel v-if="marketReviewLoading" type="loading"></qc-state-panel>
                                <qc-state-panel v-else-if="marketReviewError" type="error" title="复盘列表加载失败"
                                    desc="请检查网络后重试" @retry="loadMarketReviews"></qc-state-panel>
                                <qc-state-panel v-else-if="!marketReviews.length" type="empty" icon="file-text" title="暂无市场复盘"
                                    desc="尚未生成任何市场复盘报告"></qc-state-panel>
                                <div v-else class="market-review-list">
                                    <div class="flex-wrap mb-4">
                                        <div class="stat-card"><div class="stat-icon info"><qc-icon name="file-text" :size="18" /></div><div class="stat-label">复盘总数</div><div class="stat-value">{{ marketReviews.length }}</div></div>
                                        <div class="stat-card"><div class="stat-icon success"><qc-icon name="calendar" :size="18" /></div><div class="stat-label">最新复盘</div><div class="stat-value stat-value-lg">{{ marketReviews[0] ? marketReviews[0].date : '—' }}</div></div>
                                    </div>
                                    <div v-for="item in marketReviews" :key="item.date" class="market-review-row"
                                         tabindex="0" role="button" :aria-label="'查看 ' + item.date + ' 市场复盘'"
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
                                desc="请检查网络后重试" @retry="loadMarketReviewDetail(selectedReviewDate)"></qc-state-panel>
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
                </div>`,setup(){const d=t("qcState"),p=Vue.ref(!1),A=Vue.ref(!1);let g=0;if(!d)return{};const r=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function w(h){r.value=h;try{localStorage.setItem("quant_strategy_mode",h)}catch{}d.currentSubPage.value="strategy-manage"}const i=a([]),S=a(!1),b=a(!1),M=a(""),_=a(null),z=a(!1),F=a(!1);async function C(){const h=++g;S.value=!0,b.value=!1;try{const s=await fetch("/api/market/reviews?limit=30",{headers:Q()}).then(K=>K.json());if(h!==g)return;s&&s.success?i.value=Array.isArray(s.data)?s.data:[]:b.value=!0}catch(s){console.error("[market-review] 复盘列表加载失败:",s),b.value=!0}finally{h===g&&(S.value=!1)}}function c(h){M.value=h,E(h)}function n(h){M.value===h?x():c(h)}function u(h){return h==null||isNaN(Number(h))?"—":(Number(h)>=0?"+":"")+Number(h).toFixed(2)+"%"}function l(h){return h==null||isNaN(Number(h))?"—":Number(h).toFixed(2)}function x(){M.value="",_.value=null,F.value=!1}async function E(h){const s=++g;z.value=!0,F.value=!1,_.value=null;try{const K=h?"/api/market/review?date="+encodeURIComponent(h):"/api/market/review",ie=await fetch(K,{headers:Q()}).then(Ce=>Ce.json());if(s!==g)return;ie&&ie.success?_.value=ie.data:F.value=!0}catch(K){console.error("[market-review] 复盘详情加载失败:",K),F.value=!0}finally{s===g&&(z.value=!1)}}function O(h){return h>0?"up":h<0?"down":"flat"}function X(h){return h==null||isNaN(Number(h))?"—":(h>0?"+":"")+Number(h).toFixed(2)+"%"}function R(h){const s={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(h||{}).map(function(K){const ie=K[0],Ce=K[1],qe=!Ce||Ce==="unavailable"||Ce==="数据不可达";return{label:s[ie]||ie,value:qe?"数据不可达":Ce,unavailable:qe}})}const q=a([]),I=a(!1),V=a(!1),se=a(""),Y=a(""),ee=a(""),j=a({}),H=a(!1),N=a(""),k=a(""),D=a([]),ce=a([]),U=a(""),y=a(""),o=a(!0),T=a(!0),m=a("20:00"),W=a("default"),ue=a(!1),Z=a(""),P=e(function(){return q.value.find(function(h){return h.id===ee.value})||null});async function G(h,s){s=s||{},s.headers=Object.assign({},s.headers||{});const K=localStorage.getItem("quant_token")||"";return K&&(s.headers.Authorization="Bearer "+K),fetch(h,s)}async function re(){const h=++g;I.value=!0,V.value=!1,se.value="",Y.value="";try{const s=await G("/api/strategies").then(function(ie){return ie.json()});if(h!==g)return;let K=null;Array.isArray(s)?K=s:s&&Array.isArray(s.strategies)?(K=s.strategies,s.warn&&(Y.value=String(s.warn))):(V.value=!0,se.value=s&&s.detail?String(s.detail):"策略列表加载失败（接口返回异常）"),K!==null&&(q.value=K,q.value.length&&!ee.value&&(ee.value=q.value[0].id,pe()))}catch(s){console.error("[research] 策略列表加载失败:",s),V.value=!0,se.value="策略列表加载失败: "+(s&&s.message||"网络错误")}finally{h===g&&(I.value=!1)}}function pe(){const h=P.value;h&&(j.value={},h.schema.forEach(function(s){j.value[s.key]=s.default}),k.value="",ae(),de(),ke())}async function de(){if(!ee.value){ce.value=[];return}try{const h=await G("/api/strategies/"+ee.value+"/profiles").then(function(s){return s.json()});ce.value=h&&h.data&&h.data.profiles||[],U.value=""}catch(h){console.error("[research] 方案列表加载失败:",h),ce.value=[]}}async function J(){p.value=!0;const h=(y.value||"").trim();if(!h){window._core&&window._core.showToast("请输入方案名称");return}try{const s=await G("/api/strategies/"+ee.value+"/profiles",{method:"POST",body:JSON.stringify({name:h,params:j.value})}).then(function(K){return K.json()});if(s&&s.detail){window._core&&window._core.showToast(String(s.detail));return}y.value="",await de(),window._core&&window._core.showToast("方案已保存")}catch(s){console.error("[research] 方案保存失败:",s),window._core&&window._core.showToast("方案保存失败")}}function oe(){const h=ce.value.find(function(s){return s.id===U.value});h&&(Object.keys(h.params||{}).forEach(function(s){j.value[s]=h.params[s]}),window._core&&window._core.showToast("已应用方案: "+h.name))}async function Pe(){if(U.value)try{await G("/api/strategies/"+ee.value+"/profiles/"+U.value,{method:"DELETE"}).then(function(h){return h.json()}),await de(),window._core&&window._core.showToast("方案已删除")}catch(h){console.error("[research] 方案删除失败:",h)}}async function ke(){try{const h=await G("/api/strategies/governance").then(function(ie){return ie.json()}),K=(h&&h.data&&h.data.strategies||{})[ee.value]||{};o.value=K.enabled!==!1,m.value=K.schedule||"20:00",W.value=K.universe==="all"?"all":"default",T.value=K.show_in_calendar!==!1,Z.value=K.last_holdings||""}catch(h){console.error("[research] 纳管状态加载失败:",h)}}async function _e(){try{await G("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const h={};return h[ee.value]={enabled:o.value,schedule:m.value,universe:W.value,show_in_calendar:T.value},h}()})}).then(function(h){return h.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(h){console.error("[research] 纳管更新失败:",h)}}async function te(){if(ee.value){ue.value=!0;try{const h=await G("/api/strategies/"+ee.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:N.value||void 0})}).then(function(s){return s.json()});if(h&&h.detail){window._core&&window._core.showToast(String(h.detail));return}window._core&&window._core.showToast("持仓已生成"),await ke()}catch(h){console.error("[research] run-once 失败:",h),window._core&&window._core.showToast("持仓生成失败")}finally{ue.value=!1}}}function xe(){Z.value&&window.open(Z.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function De(){const h=P.value;if(!h)return;const s=(y.value||"").trim()||h.name+"-副本";ne(s,Object.assign({},j.value)),window._core&&window._core.showToast("已复制为副本方案: "+s)}async function ne(h,s){try{await G("/api/strategies/"+ee.value+"/profiles",{method:"POST",body:JSON.stringify({name:h,params:s})}).then(function(K){return K.json()}),await de()}catch(K){console.error("[research] 副本保存失败:",K)}}async function ae(){const h=++g;if(ee.value)try{const s=await G("/api/strategies/"+ee.value+"/runs?limit=5").then(function(K){return K.json()});if(h!==g)return;D.value=Array.isArray(s)?s:[]}catch{D.value=[]}}async function he(){if(ee.value){H.value=!0;try{const h=await G("/api/strategies/"+ee.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:j.value,as_of:N.value||void 0})}).then(function(s){return s.json()});h&&h.status==="success"?ae():alert("运行失败: "+(h.detail||JSON.stringify(h)))}catch(h){console.error("[research] 策略运行失败:",h),alert("运行失败: "+h.message)}finally{H.value=!1}}}async function Ne(){if(ee.value)try{const h=Object.keys(j.value).map(function(K){return encodeURIComponent(K)+"="+encodeURIComponent(j.value[K])}).join("&"),s=await G("/api/strategies/"+ee.value+"/ptrade-code?"+h).then(function(K){return K.json()});s&&s.code?k.value=s.code:alert("导出失败: "+(s.detail||JSON.stringify(s)))}catch(h){console.error("[research] PTrade 导出失败:",h),alert("导出失败: "+h.message)}}function Ie(){if(!k.value)return;const h=document.createElement("textarea");h.value=k.value,document.body.appendChild(h),h.select();try{document.execCommand("copy")}catch{}document.body.removeChild(h)}f(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(h){h==="research/research-overview"&&(re(),C(),ge(),Qe()),(h==="research/market-review"||h==="shortterm/market-review")&&!M.value&&C(),h==="research/quant-research"&&re(),h==="research/backtest-history"&&Me()},{immediate:!0});const Ue=a("mom20"),Ge=a(!1),ht=a(!1),st=a(null),Rt=a(null),Se=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],we=a('{"top_n":[10,20,30]}'),Ae=a(null),Re=a(""),Xe=a(!1),Ze=a(null);async function tt(){if(!ee.value){ElementPlus.ElMessage.warning("请先选择策略");return}let h;try{h=JSON.parse(we.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!h||Object.keys(h).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Xe.value=!0,Ae.value=null,Re.value="";try{const s=await fetch("/api/strategies/"+ee.value+"/sweep",{method:"POST",headers:Q(),body:JSON.stringify({param_grid:h})}).then(function(K){return K.json()});s&&Array.isArray(s.results)?(Ae.value=s.results,Re.value="完成 "+s.count+" 组"+(s.data_degraded?" (数据不可达, 结果降级)":""),Ze.value=s.param_stability||null):Re.value=s&&s.detail||"扫描失败"}catch(s){console.error("[sweep]",s),Re.value="扫描失败: "+s.message}finally{Xe.value=!1}}async function xt(){const h=++g;Ge.value=!0;try{const s=await G("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:Ue.value,params:j.value||{}})}).then(function(ie){return ie.json()}),K=s&&s.report?s.report.n1||{}:{};st.value=K}catch(s){console.error("[research] 因子IC分析失败:",s),alert("因子 IC 分析失败: "+s.message)}finally{h===g&&(Ge.value=!1)}}async function St(){const h=++g;ht.value=!0;try{const s=await G("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:Ue.value,params:j.value||{}})}).then(function(K){return K.json()});s&&s.layers?Rt.value=s:alert("分层回测: "+(s.message||"无数据"))}catch(s){console.error("[research] 分层回测失败:",s),alert("分层回测失败: "+s.message)}finally{h===g&&(ht.value=!1)}}const pt=a(null),zt=a(!1);async function Kt(){const h=++g;zt.value=!0,pt.value=null;try{const s=await G("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:Ue.value,params:j.value||{}})}).then(function(K){return K.json()});s&&s.detail?pt.value=s.detail:alert("因子详情: "+(s.message||"无数据"))}catch(s){console.error("[research] 因子详情失败:",s),alert("因子详情失败: "+s.message)}finally{h===g&&(zt.value=!1)}}const Jt=a([]),et=a(null),yt=a(null),Wt=a(null),gt=a(""),Ut=a(!1),_t=a(!1),Je=a(""),At=a(""),wt=a("");function Q(){const h=localStorage.getItem("quant_token")||"";return h?{Authorization:"Bearer "+h,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ge(){const h=++g;try{const s=await fetch("/api/strategies/variants",{headers:Q()}).then(function(K){return K.json()});if(h!==g)return;Jt.value=s&&s.data&&s.data.variants||[]}catch(s){console.error("[i3a] 加载 variants 失败:",s)}}async function at(){if(!ee.value){Je.value="请先在量化研究选择母本策略";return}_t.value=!0,Je.value="";try{const h=await fetch("/api/strategies/"+ee.value+"/clone",{method:"POST",headers:Q(),body:JSON.stringify({name:(y.value||"").trim()||void 0,params:Object.assign({},j.value)})}).then(function(K){return K.json()});if(h&&h.detail){Je.value=String(h.detail);return}const s=h&&h.data;s&&s.sid&&(et.value=s.sid,Je.value="已复制为新策略: "+s.name,await ge(),await lt(s.sid))}catch(h){console.error("[i3a] 复制失败:",h),Je.value="复制失败: "+h.message}finally{_t.value=!1}}async function kt(h){et.value=h,Je.value="",gt.value="",await lt(h)}async function lt(h){try{const s=await fetch("/api/strategies/"+h+"/selection-spec",{headers:Q()}).then(function(K){return K.json()});s&&s.data&&s.data.spec&&(yt.value=Object.assign({},s.data.spec),Wt.value=s.data.fields,At.value=(s.data.spec.industry_scope||[]).join(","),wt.value=(s.data.spec.market_cap_range||[]).join(","))}catch(s){console.error("[i3a] 加载 spec 失败:",s)}}async function It(){if(A.value=!0,!(!et.value||!yt.value))try{yt.value.industry_scope=At.value?At.value.split(/[,，]/).map(function(s){return s.trim()}).filter(Boolean):[],yt.value.market_cap_range=wt.value?wt.value.split(/[,，]/).map(Number).filter(function(s){return!isNaN(s)}):[];const h=await fetch("/api/strategies/"+et.value+"/selection-spec",{method:"PUT",headers:Q(),body:JSON.stringify({spec:yt.value})}).then(function(s){return s.json()});h&&h.data&&h.data.spec&&(yt.value=h.data.spec,Je.value="SelectionSpec 已保存")}catch(h){console.error("[i3a] 保存 spec 失败:",h),Je.value="保存失败"}}async function ea(){if(!et.value){Je.value="请先选择/创建微调策略";return}_t.value=!0,Je.value="";try{const h=await fetch("/api/strategies/"+et.value+"/run-once",{method:"POST",headers:Q(),body:"{}"}).then(function(s){return s.json()});Je.value=h&&h.detail?String(h.detail):"持仓已生成: "+(h&&h.data&&h.data.symbols||0)+" 只"}catch(h){console.error("[i3a] run-once 失败:",h),Je.value="生成持仓失败"}finally{_t.value=!1}}async function aa(){if(!et.value){Je.value="请先选择/创建微调策略";return}yt.value||await lt(et.value),Ut.value=!0,Je.value="";try{const h=await fetch("/api/strategies/"+et.value+"/ai-trade-code",{method:"POST",headers:Q(),body:JSON.stringify({spec:yt.value})}).then(function(s){return s.json()});if(h&&h.detail){Je.value=String(h.detail);return}h&&h.data&&(gt.value=h.data.code||"",h.data.api_errors&&h.data.api_errors.length?Je.value="生成成功(含 API 校验告警 "+h.data.api_errors.length+" 条)":Je.value="AI 交易码已生成, 已通过矩阵内校验")}catch(h){console.error("[i3a] AI 交易码失败:",h),Je.value="AI 生成失败: "+h.message}finally{Ut.value=!1}}function na(){if(gt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(gt.value).then(function(){Je.value="代码已复制"});else{const h=document.createElement("textarea");h.value=gt.value,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),Je.value="代码已复制"}}const ta=a(""),Qt=a(""),Ht=a([]),Nt=a(""),Gt=a(""),ft=a(""),v=a(null),$=a(!1),le=a(!1),Te=a(!1);function Ve(){const h=localStorage.getItem("quant_token")||"";return h?{Authorization:"Bearer "+h,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Qe(){const h=++g;try{const s=await fetch("/api/strategies/custom",{headers:Ve()}).then(function(K){return K.json()});if(h!==g)return;Ht.value=s&&s.data&&s.data.customs||[]}catch(s){console.error("[i3b] 加载自定义策略失败:",s)}}async function Oe(){if(!Qt.value.trim()){ft.value="请描述策略思路";return}$.value=!0,ft.value="";try{const h=await fetch("/api/strategies/custom",{method:"POST",headers:Ve(),body:JSON.stringify({name:ta.value.trim()||"自定义策略",prompt:Qt.value})}).then(function(s){return s.json()});if(h&&h.detail){ft.value=String(h.detail);return}h&&h.data&&(Gt.value=h.data.code||"",ft.value="AI 代写成功: "+h.data.sid+(h.data.api_errors&&h.data.api_errors.length?" (API 告警 "+h.data.api_errors.length+" 条)":" (校验通过)"),await Qe())}catch(h){console.error("[i3b] AI 代写失败:",h),ft.value="AI 代写失败: "+h.message}finally{$.value=!1}}async function rt(){if(Nt.value)try{const h=await fetch("/api/strategies/custom/"+Nt.value+"/code",{headers:Ve()}).then(function(s){return s.json()});h&&h.data&&(Gt.value=h.data.code||"",ft.value="")}catch(h){console.error("[i3b] 读取代码失败:",h)}}async function nt(){if(!Nt.value){ft.value="请先选择自定义策略";return}le.value=!0,ft.value="";try{const h=await fetch("/api/strategies/custom/"+Nt.value+"/backtest",{method:"POST",headers:Ve(),body:"{}"}).then(function(s){return s.json()});if(h&&h.detail){ft.value=String(h.detail);return}h&&h.data&&(v.value=h.data,ft.value="回测完成")}catch(h){console.error("[i3b] 回测失败:",h),ft.value="回测失败: "+h.message}finally{le.value=!1}}async function ct(){if(!Nt.value){ft.value="请先选择自定义策略";return}Te.value=!0,ft.value="";try{const h=await fetch("/api/strategies/custom/"+Nt.value+"/ai-optimize",{method:"POST",headers:Ve(),body:JSON.stringify({backtest:v.value})}).then(function(s){return s.json()});if(h&&h.detail){ft.value=String(h.detail);return}h&&h.data&&(Gt.value=h.data.code||"",ft.value="AI 优化完成"+(h.data.api_errors&&h.data.api_errors.length?" (API 告警 "+h.data.api_errors.length+" 条)":" (校验通过)"))}catch(h){console.error("[i3b] AI 优化失败:",h),ft.value="AI 优化失败: "+h.message}finally{Te.value=!1}}function Ot(){if(Gt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Gt.value).then(function(){ft.value="代码已复制"});else{const h=document.createElement("textarea");h.value=Gt.value,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),ft.value="代码已复制"}}const Et=Vue.ref([]),L=Vue.ref(!1),fe=Vue.ref(!1),Le=Vue.ref(30);async function Me(){const h=++g;L.value=!0,fe.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},K=typeof s.authHeaders=="function"?s.authHeaders():{},ie=await fetch("/api/backtest/history?days="+Le.value,{headers:K}).then(function(Ce){return Ce.json()});if(h!==g)return;Et.value=ie&&ie.data||[]}catch(s){console.error("[backtest] 回测历史加载失败:",s),fe.value=!0}finally{h===g&&(L.value=!1)}}const ze=Vue.ref([]),He=Vue.ref(!1),mt=Vue.ref(!1),Mt=Vue.ref(""),it=Vue.ref([]),Bt=Vue.ref(""),qa=Vue.ref([]),ia=Vue.ref(!1),wa=Vue.ref(!1),oa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function Da(h){return oa[h]||h||"—"}function ra(h){d&&d.navigateTo&&d.navigateTo("shortterm",h)}function Pa(){d.currentSubPage.value="research-history",ca()}async function ca(){const h=++g;He.value=!0,mt.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},K=typeof s.authHeaders=="function"?s.authHeaders():{},ie=Mt.value?"?type="+encodeURIComponent(Mt.value):"",Ce=await fetch("/api/strategies/research-history"+ie,{headers:K}).then(function(qe){return qe.json()});if(h!==g)return;ze.value=Ce&&Ce.items||[]}catch(s){console.error("[research-history] 加载失败:",s),mt.value=!0}finally{h===g&&(He.value=!1)}}async function $t(){const h=++g;wa.value=!0;try{const s=window.__quantModules&&window.__quantModules.core||{},K=typeof s.authHeaders=="function"?s.authHeaders():{},ie=Mt.value?"?type="+encodeURIComponent(Mt.value):"",Ce=await fetch("/api/strategies/research-history/export"+ie,{headers:K});if(!Ce.ok)throw new Error("HTTP "+Ce.status);const qe=await Ce.blob(),Tt=URL.createObjectURL(qe),$e=document.createElement("a");$e.href=Tt,$e.download="research_history.csv",document.body.appendChild($e),$e.click(),document.body.removeChild($e),URL.revokeObjectURL(Tt)}catch(s){console.error("[research-history] 导出失败:",s)}finally{h===g&&(wa.value=!1)}}function ka(h){const s=it.value.indexOf(h);s>=0?it.value.splice(s,1):it.value.length<10&&it.value.push(h)}function ga(h){Bt.value=Bt.value===h?"":h}async function Ra(){const h=++g,s=it.value;if(!(s.length<2)){ia.value=!0;try{const K=window.__quantModules&&window.__quantModules.core||{},ie=typeof K.authHeaders=="function"?K.authHeaders():{},Ce=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},ie),body:JSON.stringify({ids:s})}).then(function(qe){return qe.json()});qa.value=Ce&&Ce.items||[]}catch(K){console.error("[research-history] 对比失败:",K)}finally{h===g&&(ia.value=!1)}}}async function za(h){try{const s=window.__quantModules&&window.__quantModules.core||{},K=typeof s.authHeaders=="function"?s.authHeaders():{},ie=await fetch("/api/strategies/research-history/"+h,{method:"DELETE",headers:K}).then(function(Ce){return Ce.json()});if(ie&&ie.deleted){ze.value=ze.value.filter(function(qe){return qe.id!==h});const Ce=it.value.indexOf(h);Ce>=0&&it.value.splice(Ce,1)}}catch(s){console.error("[research-history] 删除失败:",s)}}return{...d,strategyManageMode:r,openStrategyManage:w,btHistory:Et,btHistoryLoading:L,btHistoryError:fe,btHistoryDays:Le,loadBtHistory:Me,researchHistory:ze,researchHistoryLoading:He,researchHistoryError:mt,researchHistoryType:Mt,researchHistorySelected:it,researchDetailId:Bt,researchCompareRows:qa,researchCompareLoading:ia,researchTypeLabel:Da,goShortterm:ra,openResearchHistory:Pa,loadResearchHistory:ca,researchExportLoading:wa,exportResearchHistory:$t,toggleResearchSelect:ka,toggleResearchDetail:ga,runResearchCompare:Ra,deleteResearchHistory:za,marketReviews:i,marketReviewLoading:S,marketReviewError:b,selectedReviewDate:M,marketReviewDetail:_,marketReviewDetailLoading:z,marketReviewDetailError:F,loadMarketReviews:C,openMarketReview:c,toggleMarketReviewDate:n,backToMarketReviewList:x,loadMarketReviewDetail:E,marketReviewChgClass:O,marketReviewChgText:X,marketReviewSrcEntries:R,fmtPct:u,fmtEmotion:l,strategies:q,strategiesLoading:I,strategiesError:V,strategiesErrorText:se,strategiesWarn:Y,activeStrategyId:ee,activeStrategy:P,paramValues:j,strategyRunning:H,ptradeCode:k,strategyRuns:D,savingProfile:p,variantSaving:A,loadStrategies:re,onStrategyChange:pe,runActiveStrategy:he,exportActivePtradeCode:Ne,copyPtradeCode:Ie,profiles:ce,profileSelect:U,profileName:y,loadProfiles:de,saveProfile:J,applyProfile:oe,deleteProfile:Pe,govEnabled:o,govSchedule:m,govUniverse:W,govRunning:ue,lastHoldings:Z,loadGov:ke,updateGov:_e,runOnceActive:te,openLastHoldings:xe,cloneStrategy:De,govShowCalendar:T,factorKey:Ue,factorIcLoading:Ge,factorLayerLoading:ht,factorIcReport:st,factorLayerResult:Rt,factorOptions:Se,runFactorIc:xt,runFactorLayer:St,factorDetail:pt,factorDetailLoading:zt,runFactorDetail:Kt,variants:Jt,variantSelected:et,variantSpec:yt,specFields:Wt,aiCode:gt,aiCodeLoading:Ut,variantBusy:_t,variantMsg:Je,loadVariants:ge,cloneNewStrategy:at,selectVariant:kt,loadVariantSpec:lt,saveVariantSpec:It,runVariantOnce:ea,genVariantAiCode:aa,copyVariantCode:na,customName:ta,customPrompt:Qt,customs:Ht,customSelected:Nt,customCode:Gt,customMsg:ft,customBtResult:v,customGenLoading:$,customBtLoading:le,customOptLoading:Te,loadCustoms:Qe,genCustomCode:Oe,loadCustomCode:rt,runCustomBacktest:nt,runCustomOptimize:ct,copyCustomCode:Ot,sweepGrid:we,sweepResult:Ae,sweepMessage:Re,sweepLoading:Xe,sweepStability:Ze,runSweep:tt}}}})();(function(){const{inject:a,ref:e,onMounted:f,computed:t,nextTick:d}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="shortterm-split" data-split-root>
                        <!-- V5.15 (F7): 左列表 — 最近交易日核心指标摘要 (默认选中最近一天) -->
                        <div class="shortterm-date-list">
                            <div class="shortterm-date-list-head">
                                <span>复盘日历</span>
                                <el-button size="small" text @click="loadDateList" aria-label="刷新日期列表"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                            <div v-if="dateListLoading" class="color-secondary shortterm-date-empty">加载中…</div>
                            <div v-else-if="dateList.length === 0" class="color-secondary shortterm-date-empty">暂无已抓取日期</div>
                            <div v-else class="shortterm-date-items">
                                <div v-for="d in dateList" :key="d.date" class="shortterm-date-item"
                                    :class="{ 'is-active': d.date === shortDate }" role="button" tabindex="0"
                                    @click="pickDate(d.date)"
                                    @keydown.enter.prevent="pickDate(d.date)"
                                    @keydown.space.prevent="pickDate(d.date)">
                                    <div class="shortterm-date-item-date">{{ d.date }}</div>
                                    <div class="shortterm-date-item-meta">
                                        <span>赚钱 <b :class="riseFall(d.money_effect)">{{ fmtPct(d.money_effect) }}</b></span>
                                        <span>情绪 <b :class="(d.emotion_score != null && d.emotion_score >= 0.8) ? 'meta-emotion-hot' : ((d.emotion_score != null && d.emotion_score < 0.6) ? 'meta-emotion-cold' : '')">{{ d.emotion_score != null ? d.emotion_score.toFixed(2) : '—' }}</b></span>
                                        <span>涨停 <b>{{ d.zt_count }}</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="split-divider" data-split-resize></div>
                        <!-- 右看板 (原 overview 内容) -->
                        <div class="shortterm-split-content card">
                        <!-- V5.3.0 (T-5.3.1.3): 短线复盘 3 步新手引导 (首次进入, 可跳过) -->
                        <div v-if="shorttermTourVisible" class="onboarding-overlay" role="dialog" aria-modal="true" aria-labelledby="shortterm-tour-title">
                            <div class="onboarding-card">
                                <div class="onboarding-head">
                                    <div class="onboarding-step-badge">{{ shorttermTourState.stepIndex + 1 }} / 3</div>
                                    <div class="onboarding-progress-track" aria-hidden="true">
                                        <div class="onboarding-progress-fill" :style="{ width: shorttermTourProg.pct + '%' }"></div>
                                    </div>
                                </div>
                                <div class="onboarding-title" id="shortterm-tour-title">{{ shorttermTourStep.title }}</div>
                                <div class="onboarding-desc">{{ shorttermTourStep.desc }}</div>
                                <div class="onboarding-actions">
                                    <el-button size="small" text @click="shorttermTourSkip" aria-label="跳过短线引导">跳过</el-button>
                                    <el-button v-if="!shorttermTourIsLast" size="small" type="primary" @click="shorttermTourNext">下一步</el-button>
                                    <el-button v-else size="small" type="primary" @click="shorttermTourFinish">开始使用</el-button>
                                </div>
                            </div>
                        </div>
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadOverview"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="overviewLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="overviewError" type="error" :title="overviewErrTitle" :desc="overviewErrDesc" @retry="loadOverview"></qc-state-panel>
                        <template v-else-if="overview">
                            <!-- V5.2.4 (T-5.2.46): 数据新鲜度状态条 -->
                            <div class="flex-c-gap-12 mb-4">
                                <span class="text-xs-tertiary">数据日期: {{ overview.date }}</span>
                                <span class="tag-chip" :class="sessionStatusClass">{{ sessionStatusText }}</span>
                            </div>
                            <div class="mb-4">
                                <div class="flex-c-gap-12 mb-2">
                                    <div class="text-base-secondary">AI 盘面研判</div>
                                    <el-button size="small" type="primary" :loading="reviewRunning" @click="runReview">{{ review && review.available ? '重新生成' : '生成' }}</el-button>
                                </div>
                                <qc-state-panel v-if="reviewRunning" type="loading"></qc-state-panel>
                                <div v-else-if="review && review.available" class="card">
                                    <div class="stat-value stat-value-lg">{{ review.emotion_level ? '情绪档位: ' + review.emotion_level : '情绪档位: —' }}</div>
                                    <div class="mt-4">{{ review.summary || '—' }}</div>
                                    <div v-if="review.active_directions && review.active_directions.length" class="mt-4">
                                        <div class="text-base-secondary mb-2">活跃方向 <span class="text-xs-tertiary">(点击跳板块资金)</span></div>
                                        <span v-for="d in review.active_directions" :key="d" class="tag-chip mr-4 stock-link" @click="gotoSector(d)">{{ d }}</span>
                                    </div>
                                    <div v-if="review.risks && review.risks.length" class="mt-4 text-xs-tertiary">风险: {{ review.risks.join('；') }}</div>
                                </div>
                                <div v-else-if="review" class="text-xs-tertiary">{{ review.reason || '暂无复盘, 点击生成' }}</div>
                                <div v-if="review && review.available" class="mt-4 flex-c-gap-12">
                                    <el-input v-model="chatQuestion" size="small" placeholder="追问复盘... (Enter 发送)" @keyup.enter="sendChat"></el-input>
                                    <el-button size="small" :loading="chatLoading" @click="sendChat">发送</el-button>
                                </div>
                                <div v-if="chatAnswer" class="mt-4 text-xs-tertiary">{{ chatAnswer }}</div>
                            </div>

                            <!-- V5.2.6 (T-5.2.50): 指标降级时显示 reason, 不静默 — -->
                            <div v-if="emotionNotice" class="text-xs-tertiary mb-4"><qc-icon name="alert-triangle" :size="14" /> {{ emotionNotice }}</div>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card">
                                    <div class="stat-label">赚钱效应均值</div>
                                    <div class="stat-value">{{ fmtPct(overview.emotion.money_effect && overview.emotion.money_effect.avg) }}</div>
                                    <div class="stat-sub">{{ moneySource }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">赚钱效应中位数</div>
                                    <div class="stat-value">{{ fmtPct(overview.emotion.money_effect && overview.emotion.money_effect.median) }}</div>
                                    <div class="stat-sub">翻红率 {{ pct(overview.emotion.money_effect && overview.emotion.money_effect.positive_rate) }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">晋级率 1进2</div>
                                    <div class="stat-value">{{ pct(promotion1to2) }}</div>
                                    <div class="stat-sub">整体 {{ pct(overview.emotion.promotion && overview.emotion.promotion.overall && overview.emotion.promotion.overall.rate) }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">连板溢价</div>
                                    <div class="stat-value">{{ fmtPct(overview.emotion.consec_premium && overview.emotion.consec_premium.avg) }}</div>
                                    <div class="stat-sub">昨日2板+承接</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">情绪周期</div>
                                    <div class="stat-value">{{ cycleScore }}</div>
                                    <div class="stat-sub">{{ cycleTrend }}</div>
                                </div>
                            </div>

                            <div class="text-base-secondary mb-2">市场事实</div>
                            <div v-if="factsNotice" class="text-xs-tertiary mb-4"><qc-icon name="alert-triangle" :size="14" /> {{ factsNotice }}</div>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card">
                                    <div class="stat-label">封板质量</div>
                                    <div class="stat-value">{{ pct(overview.facts.seal_quality && overview.facts.seal_quality.broken_rate) }}</div>
                                    <div class="stat-sub">炸板率 · 早盘封板 {{ pct(overview.facts.seal_quality && overview.facts.seal_quality.early_seal_rate) }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">亏钱效应</div>
                                    <div class="stat-value">{{ overview.facts.loss_effect && overview.facts.loss_effect.down_limit_count != null ? overview.facts.loss_effect.down_limit_count : '—' }}</div>
                                    <div class="stat-sub">跌停家数</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">反馈矩阵</div>
                                    <div class="stat-value">{{ pct(overview.facts.feedback_matrix && overview.facts.feedback_matrix.relimit) }}</div>
                                    <div class="stat-sub">再涨停 {{ pct(overview.facts.feedback_matrix && overview.facts.feedback_matrix.red) }} 翻红</div>
                                </div>
                            </div>

                            <div class="text-base-secondary mb-2">明日验证条件 (成立 {{ overview.summary.hit }}/{{ overview.summary.total }})</div>
                            <div class="table-container mb-4">
                                <el-table :data="overview.conditions" size="small">
                                    <el-table-column prop="label" label="指标" width="130"></el-table-column>
                                    <el-table-column label="当前" width="90" align="right"><template #default="s">{{ fmtCond(s.row.current, s.row.unit) }}</template></el-table-column>
                                    <el-table-column label="阈值" width="90" align="right"><template #default="s">{{ fmtCond(s.row.threshold, s.row.unit) }}</template></el-table-column>
                                    <el-table-column label="核验" width="90"><template #default="s"><span :class="verdictClass(s.row.verdict)">{{ s.row.verdict }}</span></template></el-table-column>
                                    <el-table-column label="说明" min-width="170"><template #default="s">{{ s.row.note }}</template></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mb-2">近5日热度与龙头</div>
                            <div v-if="overview.weekly && overview.weekly.available">
                                <div class="flex-wrap mb-4">
                                    <span v-for="t in overview.weekly.top" :key="t.industry" class="tag-chip mr-4 mb-4">{{ t.industry }} {{ t.count }}</span>
                                </div>
                                <div class="text-xs-tertiary">{{ overview.weekly.note }}</div>
                            </div>
                            <div v-else class="text-xs-tertiary mb-4">{{ overview.weekly && overview.weekly.reason ? overview.weekly.reason : '近5日热度不可用' }}</div>
                        </template>
                        </div>
                    </div>

                    <!-- 涨停复盘 -->
                    <div v-if="currentSubPage === 'ztpool'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadPools"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                                <span class="text-xs-tertiary" v-if="pools && pools.settled === false"><qc-icon name="alert-triangle" :size="14" /> 未收盘, 数据可能不完整</span>
                            </div>
                        </div>
                        <qc-state-panel v-if="poolLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="poolError" type="error" :title="poolErrTitle" :desc="poolErrDesc" @retry="loadPools"></qc-state-panel>
                        <div v-else-if="pools">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon gold"><qc-icon name="trending-up" :size="18" /></div><div class="stat-label">最高板</div><div class="stat-value">{{ pools.ladder && pools.ladder.highest != null ? pools.ladder.highest + ' 板' : '—' }}</div></div>
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="layers" :size="18" /></div><div class="stat-label">梯队</div><div class="stat-value">{{ ladderText }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><qc-icon name="rocket" :size="18" /></div><div class="stat-label">涨停</div><div class="stat-value">{{ pools.zt ? pools.zt.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-icon warning"><qc-icon name="alert-triangle" :size="18" /></div><div class="stat-label">炸板</div><div class="stat-value">{{ pools.zb ? pools.zb.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-icon danger"><qc-icon name="trending-down" :size="18" /></div><div class="stat-label">跌停</div><div class="stat-value">{{ pools.dt ? pools.dt.length : '—' }} 家</div></div>
                            </div>
                            <div v-if="pools.ladder && pools.ladder.note" class="text-xs-tertiary mb-4">{{ pools.ladder.note }}</div>
                            <div v-if="pools.ladder && Object.keys(pools.ladder.tiers || {}).length" id="shorttermLadderChart" class="mb-4" style="height:170px;width:100%"></div>

                            <div class="flex-c-gap-12 mb-2">
                                <div class="text-base-secondary">涨停池 ({{ (pools.zt || []).length }} 家)</div>
                                <span v-if="ztBoardFilter" class="tag-chip is-institution">已筛选 {{ ztBoardFilter }} 板 <span role="button" tabindex="0" aria-label="清除筛选" style="cursor:pointer;display:inline-flex" @click="clearBoardFilter" @keydown.enter.prevent="clearBoardFilter" @keydown.space.prevent="clearBoardFilter"><qc-icon name="x" :size="12" /></span></span>
                            </div>
                            <div class="table-container">
                                <el-table :data="filteredZt" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="boards" label="连板" width="55" align="center"></el-table-column>
                                    <el-table-column label="涨停原因" min-width="180"><template #default="s">{{ s.row.reason || '—' }}</template></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="first_seal_time" label="首封" width="80"></el-table-column>
                                    <el-table-column prop="break_times" label="炸板" width="55" align="center"></el-table-column>
                                    <el-table-column label="封单" width="90" align="right"><template #default="s">{{ fmtAmount(s.row.seal_amount) }}</template></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                    <el-table-column prop="board" label="板别" width="85"></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mt-8 mb-2">炸板池 ({{ pools.zb ? pools.zb.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.zb || []" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="break_times" label="炸板" width="55" align="center"></el-table-column>
                                    <el-table-column prop="first_seal_time" label="首封" width="80"></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mt-8 mb-2">跌停池 ({{ pools.dt ? pools.dt.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.dt || []" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="consec_dt" label="连续跌停" width="80" align="center"></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>

                    <!-- 龙虎榜 -->
                    <div v-if="currentSubPage === 'lhb'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadLhb"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="lhbLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="lhbError" type="error" :title="lhbErrTitle" :desc="lhbErrDesc" @retry="loadLhb"></qc-state-panel>
                        <div v-else-if="lhbRows">
                            <!-- V6.5 (PRD-6.5 F2): 数据源降级提示(非静默空表) -->
                            <div v-if="lhbReason" class="text-xs-tertiary mb-4" title="点击展开完整原因" style="cursor:help"><qc-icon name="alert-triangle" :size="14" /> {{ lhbReason.length > 120 ? lhbReason.slice(0, 120) + '…' : lhbReason }}</div>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon gold"><qc-icon name="bar-chart-3" :size="18" /></div><div class="stat-label">上榜家数</div><div class="stat-value">{{ lhbRows.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><qc-icon name="landmark" :size="18" /></div><div class="stat-label">机构净买合计</div><div class="stat-value" style="font-size:1.15em">{{ fmtAmount(lhbInstitutionNetBuy) }}</div></div>
                                <div class="stat-card"><div class="stat-icon warning"><qc-icon name="flame" :size="18" /></div><div class="stat-label">游资上榜</div><div class="stat-value">{{ lhbHotMoneyCount }}</div></div>
                            </div>
                            <div class="table-container">
                                <el-table :data="lhbPageRows" size="small" max-height="560">
                                    <el-table-column label="名称" width="90" fixed><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="85" align="right" sortable><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column label="净买额" width="105" align="right" sortable sort-by="net_buy"><template #default="s"><span :class="riseFall(s.row.net_buy)">{{ fmtAmount(s.row.net_buy) }}</span></template></el-table-column>
                                    <el-table-column label="买入额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.buy_amount) }}</template></el-table-column>
                                    <el-table-column label="卖出额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.sell_amount) }}</template></el-table-column>
                                    <el-table-column label="资金性质" width="130"><template #default="s"><span v-for="(g, i) in (s.row.tags || [])" :key="i" class="tag-chip mr-4" :class="tagClass(g)">{{ g }}</span><span v-if="!(s.row.tags && s.row.tags.length)" class="text-xs-tertiary">—</span></template></el-table-column>
                                    <el-table-column prop="reason" label="上榜原因" min-width="200" show-overflow-tooltip></el-table-column>
                                </el-table>
                                <el-pagination v-if="lhbRows && lhbRows.length > 200" small layout="prev, pager, next, total" :total="lhbRows.length" :page-size="PAGE_SIZE" v-model:current-page="lhbPage" class="mt-4"></el-pagination>
                            </div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无数据" desc="该交易日暂无龙虎榜数据"></qc-state-panel>
                    </div>

                    <!-- 板块资金 (V5.2.1: 行业/概念资金流, 今日/5日/10日窗口) -->
                    <div v-if="currentSubPage === 'sector'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-select v-model="sectorType" size="small" class="w-select" @change="loadSectorFlow">
                                    <el-option label="行业资金流" value="行业资金流"></el-option>
                                    <el-option label="概念资金流" value="概念资金流"></el-option>
                                </el-select>
                                <el-select v-model="sectorIndicator" size="small" class="w-select-xs" @change="loadSectorFlow">
                                    <el-option label="今日" value="今日"></el-option>
                                    <el-option label="5日" value="5日"></el-option>
                                    <el-option label="10日" value="10日"></el-option>
                                </el-select>
                                <el-input v-model="sectorKeyword" size="small" placeholder="搜索板块..." clearable style="width:130px"></el-input>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="sectorLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="sectorError" type="error" :title="sectorErrTitle" :desc="sectorErrDesc" @retry="loadSectorFlow"></qc-state-panel>
                        <div v-else-if="sectorRows && sectorRows.length">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="trophy" :size="18" /></div><div class="stat-label">净流入榜首</div><div class="stat-value stat-value-lg">{{ sectorTopName }}</div></div>
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="layers" :size="18" /></div><div class="stat-label">板块数</div><div class="stat-value">{{ sectorRows.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><qc-icon name="wallet" :size="18" /></div><div class="stat-label">Top 净流入</div><div class="stat-value stat-value-lg">{{ fmtAmount(sectorTopInflow) }}</div></div>
                            </div>
                            <div class="table-container">
                                <el-table :data="sectorPageRows" size="small" max-height="560">
                                    <el-table-column prop="name" label="板块" min-width="120" fixed></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="95" align="right" sortable><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column label="主力净流入" width="130" align="right" sortable sort-by="main_net_inflow"><template #default="s"><span :class="riseFall(s.row.main_net_inflow)">{{ fmtAmount(s.row.main_net_inflow) }}</span></template></el-table-column>
                                    <el-table-column label="主力净占比" width="105" align="right"><template #default="s">{{ fmtPct(s.row.main_net_inflow_ratio) }}</template></el-table-column>
                                </el-table>
                                <el-pagination v-if="filteredSectorRows.length > 200" small layout="prev, pager, next, total" :total="filteredSectorRows.length" :page-size="PAGE_SIZE" v-model:current-page="sectorPage" class="mt-4"></el-pagination>
                            </div>
                            <div class="text-xs-tertiary mt-4">数据源: {{ sectorSource }} · 实时值口径: 盘中为实时快照, 历史场次仅最近一次抓取值</div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无数据" desc="板块资金流暂不可用"></qc-state-panel>
                    </div>

                    <!-- 盘中核验 (V5.2.2: 6 时点快照) -->
                    <div v-if="currentSubPage === 'intraday'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadIntraday"></el-date-picker>
                                <el-button size="small" type="primary" :loading="intradayCollecting" @click="collectSnapshot">采集当前快照</el-button>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <div class="text-xs-tertiary mb-4">快照仅在交易时段 6 个时点前后 8 分钟可采集 · 历史日绝不现抓</div>
                        <div class="intraday-timeline mb-4">
                            <div v-for="t in intradaySlots" :key="t" class="intraday-slot" :class="slotClass(t)">
                                <span class="intraday-dot"></span>{{ t }}
                            </div>
                        </div>
                        <div class="text-xs-tertiary mb-4">{{ intradayStatus }}</div>
                        <div v-if="intradayMsg" class="mb-4 text-xs-tertiary">{{ intradayMsg }}</div>
                        <qc-state-panel v-if="intradayLoading" type="loading"></qc-state-panel>
                        <div v-else-if="intradaySnapshots && intradaySnapshots.length">
                            <div class="table-container">
                                <el-table :data="intradaySnapshots" size="small">
                                    <el-table-column prop="slot" label="时点" width="90"></el-table-column>
                                    <el-table-column prop="zt_count" label="涨停" width="80" align="right"></el-table-column>
                                    <el-table-column prop="zb_count" label="炸板" width="80" align="right"></el-table-column>
                                    <el-table-column prop="dt_count" label="跌停" width="80" align="right"></el-table-column>
                                    <el-table-column label="炸板率" width="90" align="right"><template #default="s">{{ fmtPct(s.row.broken_rate) }}</template></el-table-column>
                                    <el-table-column label="口径" min-width="140"><template #default="s">{{ s.row.note }}</template></el-table-column>
                                </el-table>
                            </div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无快照" desc="点击右上角「采集当前快照」(仅交易时段 6 时点前后 8 分钟可用)"></qc-state-panel>
                    </div>
                </div>`,setup(){const p=a("qcState");if(!p)return{};const A=p.currentPage,g=p.currentSubPage,r=e(""),w=e(null),i=e(!1),S=e(!1),b=e("数据加载失败"),M=e("请检查服务后重试"),_=e(null),z=e(null),F=e(!1),C=e(!1),c=e("数据加载失败"),n=e("请检查服务后重试"),u=e(null),l=e(1),x=50,E=t(function(){const L=z.value||[];if(L.length<=200)return L;const fe=(l.value-1)*x;return L.slice(fe,fe+x)}),O=e(null),X=e(!1),R=e(!1),q=e("数据加载失败"),I=e("请检查服务后重试"),V=e([]),se=e(!1);async function Y(){se.value=!0;try{const L=await De("/api/shortterm/dates/summary",!1);L&&L.success&&(V.value=L.dates||[])}catch{V.value=[]}finally{se.value=!1}}function ee(L){L!==r.value&&(r.value=L,lt(!0))}const j=e("行业资金流"),H=e("今日"),N=e(""),k=e(null),D=e(1),ce=e(!1),U=e(!1),y=e("数据加载失败"),o=e("请检查服务后重试"),T=e(""),m=e(null),W=e(!1),ue=e(null),Z=e(!1),P=e(!1),G=e(""),re=e(""),pe=e(!1);function de(){const L=localStorage.getItem("quant_token")||"";return L?{Authorization:"Bearer "+L,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const J={},oe=[],Pe=50,ke=60*1e3;let _e=0,te=0,xe=0;function De(L,fe){const Le=Date.now(),Me=J[L];return!fe&&Me&&Le-Me.ts<ke?Promise.resolve(Me.data):fetch(L,{headers:de()}).then(function(ze){return ze.json()}).then(function(ze){if(J[L]||oe.push(L),J[L]={ts:Date.now(),data:ze},oe.length>Pe){const He=oe.shift();delete J[He]}return ze})}async function ne(L){const fe=++_e;i.value=!0,S.value=!1;try{const Le="/api/shortterm/pools"+(r.value?"?date="+r.value:""),Me=await De(Le,L);if(fe!==_e)return;Me&&Me.success?(w.value=Me,d(ge)):Me&&Me.detail?(S.value=!0,b.value=String(Me.detail),M.value="请先登录后再查看"):(S.value=!0,b.value="数据加载失败",M.value="请检查服务后重试")}catch{if(fe!==_e)return;S.value=!0,b.value="数据加载失败",M.value="请检查服务后重试"}finally{fe===_e&&(i.value=!1)}}async function ae(L){const fe=++_e;F.value=!0,C.value=!1;try{const Le="/api/shortterm/lhb"+(r.value?"?date="+r.value:""),Me=await De(Le,L);if(fe!==_e)return;Me&&Me.success?(z.value=Array.isArray(Me.rows)?Me.rows:null,u.value=Me.available===!1&&Me.reason||null,l.value=1):Me&&Me.detail?(C.value=!0,c.value=String(Me.detail),n.value="请先登录后再查看"):(C.value=!0,c.value="数据加载失败",n.value="请检查服务后重试")}catch{if(fe!==_e)return;C.value=!0,c.value="数据加载失败",n.value="请检查服务后重试"}finally{fe===_e&&(F.value=!1)}}const he=t(function(){const L=w.value&&w.value.ladder&&w.value.ladder.tiers;return!L||!Object.keys(L).length?"—":Object.keys(L).sort(function(fe,Le){return fe-Le}).map(function(fe){return fe+"板:"+L[fe]}).join(" ")}),Ne=t(function(){const L=w.value&&w.value.zt||[];return _.value?L.filter(function(fe){return fe.boards===_.value}):L});function Ie(){_.value=null}const Ue=t(function(){const L=O.value&&O.value.emotion&&O.value.emotion.money_effect;return!L||!L.available?"—":L.source==="settled"?"定稿记录":L.source==="realtime"?L.partial?"实时(样本不全)":"实时":"—"}),Ge=t(function(){const L=O.value&&O.value.emotion&&O.value.emotion.promotion&&O.value.emotion.promotion.tiers&&O.value.emotion.promotion.tiers["1进2"];return L?L.rate:null}),ht=t(function(){const L=O.value&&O.value.emotion&&O.value.emotion.sentiment_cycle;return L&&L.available&&L.current_score!=null?L.current_score.toFixed(2):"—"}),st=t(function(){const L=O.value&&O.value.emotion&&O.value.emotion.sentiment_cycle;return!L||!L.available?"—":(L.trend||"—")+(L.day_n!=null?" · 距低谷"+L.day_n+"天":"")});t(function(){const L=O.value&&O.value.emotion;if(!L)return"";const fe=[];for(const Le of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Me=L[Le];Me&&Me.available===!1&&Me.reason&&fe.push(String(Me.reason).replace(/^[[^]]*]s*/,""))}return fe.join("；")}),t(function(){const L=O.value&&O.value.facts;if(!L)return"";const fe=[];for(const Le of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Me=L[Le];Me&&Me.available===!1&&Me.reason&&fe.push(String(Me.reason).replace(/^[[^]]*]s*/,""))}return fe.join("；")});function Rt(L){return L==null||isNaN(L)?"—":(L*100).toFixed(0)+"%"}function Se(L,fe){return L==null?"—":(typeof L=="number"?Math.round(L*100)/100:L)+(fe||"")}function we(L){return"tag-chip mr-4"}function Ae(L){return L==null?"":L>0?"is-rise":L<0?"is-fall":""}function Re(L){return L==="机构"?"is-institution":L==="游资"?"is-hotmoney":L==="主力"?"is-main":""}const Xe=t(function(){const L=O.value&&O.value.session_status;if(!L)return"—";const fe=O.value.date;return fe===L.latest_session&&L.settled?"已收盘":fe===L.today&&L.is_trade_day&&!L.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Ze=t(function(){const L=O.value&&O.value.session_status;if(!L)return"";const fe=O.value.date;return fe===L.latest_session&&L.settled?"is-institution":fe===L.today&&L.is_trade_day&&!L.settled?"is-main":""});function tt(L){L&&L.ts_code&&p&&p.showStockDetail&&p.showStockDetail(L.ts_code)}const xt=t(function(){return(z.value||[]).filter(function(L){return(L.tags||[]).indexOf("机构")>=0}).reduce(function(L,fe){return L+(fe.net_buy||0)},0)}),St=t(function(){return(z.value||[]).filter(function(L){return(L.tags||[]).indexOf("游资")>=0}).length}),pt=t(function(){const L=(k.value||[]).filter(function(fe){return fe.main_net_inflow!=null});return L.length?L.reduce(function(fe,Le){return fe.main_net_inflow>=Le.main_net_inflow?fe:Le}):null}),zt=t(function(){const L=pt.value;return L?L.name:"—"}),Kt=t(function(){const L=pt.value;return L?L.main_net_inflow:null}),Jt=t(function(){return T.value||"东财"}),et=t(function(){const L=(N.value||"").trim(),fe=k.value||[];return L?fe.filter(function(Le){return Le.name&&String(Le.name).indexOf(L)>=0}):fe});function yt(L){N.value=L||"",p&&p.currentSubPage&&(p.currentSubPage.value="sector")}const Wt=t(function(){const L=et.value;if(L.length<=200)return L;const fe=(D.value-1)*x;return L.slice(fe,fe+x)}),gt=["09:25","09:35","10:00","11:30","14:00","15:00"],Ut=t(function(){const L={};return(ue.value||[]).forEach(function(fe){L[fe.slot]=!0}),L});function _t(L){return Ut.value[L]?"is-done":L===Je.value?"is-current":"is-empty"}const Je=t(function(){const L=new Date,fe=(L.getHours()<10?"0":"")+L.getHours(),Le=(L.getMinutes()<10?"0":"")+L.getMinutes(),Me=fe+":"+Le;for(var ze=0;ze<gt.length;ze++)if(Me===gt[ze])return gt[ze];for(var He=0;He<gt.length-1;He++){var mt=gt[He],Mt=new Date;Mt.setHours(Number(mt.split(":")[0]),Number(mt.split(":")[1]),0,0);var it=new Date(Mt.getTime()+8*6e4);if(L>=Mt&&L<=it)return mt}return""}),At=t(function(){const L=new Date,fe=Je.value;if(fe)return"当前处于快照窗口 "+fe+" (前后 8 分钟) — 可采集";const Le=L.getHours(),Me=L.getMinutes();let ze="";for(let He=0;He<gt.length;He++){const mt=gt[He].split(":");if(Number(mt[0])>Le||Number(mt[0])===Le&&Number(mt[1])>Me){ze=gt[He];break}}return ze?"下一快照时点 "+ze+" — 非窗口期不可采集":"今日快照时点已全部结束"}),wt=e(""),Q=e("info");function ge(){const L=w.value&&w.value.ladder&&w.value.ladder.tiers;if(!L||!Object.keys(L).length)return;const fe=window.__quantModules&&window.__quantModules.charts;if(!fe||!fe.renderSimpleChartTo)return;const Le=_.value,Me=fe.renderSimpleChartTo("shorttermLadderChart",function(){const ze=Object.keys(L).sort(function(He,mt){return Number(He)-Number(mt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:ze.map(function(He){return He+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(He){return Le&&Number(ze[He.dataIndex])===Le?"var(--color-accent)":"var(--chart-split)"}},data:ze.map(function(He){return L[He]})}]}},{key:"shortterm-ladder"});Me&&Me.off&&(Me.off("click"),Me.on("click",function(ze){if(!ze||!ze.name)return;const He=parseInt(ze.name,10);isNaN(He)||(_.value=_.value===He?null:He)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ge);function at(L){if(L==null)return"—";const fe=Math.abs(L);return fe>=1e8?(L/1e8).toFixed(2)+"亿":fe>=1e4?(L/1e4).toFixed(0)+"万":L.toFixed(0)}function kt(L){return L==null?"—":(L>=0?"+":"")+L.toFixed(2)+"%"}async function lt(L){const fe=++te;X.value=!0,R.value=!1;try{const Le="/api/shortterm/overview"+(r.value?"?date="+r.value:""),Me=await De(Le,L);if(fe!==te)return;Me&&Me.success?O.value=Me:Me&&Me.detail?(R.value=!0,q.value=String(Me.detail),I.value="请先登录后再查看"):(R.value=!0,q.value="数据加载失败",I.value="请检查服务后重试")}catch{if(fe!==te)return;R.value=!0,q.value="数据加载失败",I.value="请检查服务后重试"}finally{fe===te&&(X.value=!1)}}async function It(L){const fe=++_e;ce.value=!0,U.value=!1;try{const Le="/api/shortterm/sector-flow?indicator="+encodeURIComponent(H.value)+"&sector_type="+encodeURIComponent(j.value),Me=await De(Le,L);if(fe!==_e)return;Me&&Me.success&&Me.available?(k.value=Me.rows||[],T.value=Me.source||(Me.note?"同花顺":"东财"),D.value=1):Me&&Me.reason?(U.value=!0,y.value="数据加载失败",o.value=String(Me.reason).replace(/^\[[^\]]*\]\s*/,"")):Me&&Me.detail?(U.value=!0,y.value=String(Me.detail),o.value="请先登录后再查看"):(U.value=!0,y.value="数据加载失败",o.value="请检查服务后重试")}catch{if(fe!==_e)return;U.value=!0,y.value="数据加载失败",o.value="请检查服务后重试"}finally{fe===_e&&(ce.value=!1)}}async function ea(L){const fe=++xe;try{const Le="/api/shortterm/review"+(r.value?"?date="+r.value:""),Me=await De(Le,L);if(fe!==xe)return;Me&&Me.success&&(m.value=Me.review||null)}catch{}}async function aa(){W.value=!0;try{const L="/api/shortterm/review"+(r.value?"?date="+r.value:""),fe=await fetch(L,{method:"POST",headers:de()}).then(function(Le){return Le.json()});fe&&fe.success&&(m.value=fe,J[L]={ts:Date.now(),data:fe})}catch{}finally{W.value=!1}}async function na(){const L=G.value.trim();if(L){pe.value=!0,re.value="";try{const Le=await fetch("/api/shortterm/review/chat",{method:"POST",headers:de(),body:JSON.stringify({date:overviewDate.value,question:L})}).then(function(Me){return Me.json()});re.value=Le.answer||"[无回复]"}catch{re.value="[发送失败]"}finally{pe.value=!1}}}async function ta(L){const fe=++_e;Z.value=!0;try{const Le="/api/shortterm/intraday"+(r.value?"?date="+r.value:""),Me=await De(Le,L);if(fe!==_e)return;Me&&Me.success&&(ue.value=Me.snapshots||[])}catch{}finally{fe===_e&&(Z.value=!1)}}async function Qt(){P.value=!0;try{const L="/api/shortterm/intraday/snapshot"+(r.value?"?date="+r.value:""),fe=await fetch(L,{method:"POST",headers:de()}).then(function(Le){return Le.json()});fe&&fe.success?(fe.accepted?(wt.value="已采集 "+fe.slot+" 快照"+(fe.pools_available&&!fe.pools_available.zt?" (池源部分不可用)":""),Q.value="ok"):(wt.value="⏱ "+(fe.reason||"非快照时点"),Q.value="warn"),ta()):wt.value="采集失败, 请稍后重试"}catch{wt.value="采集失败, 请稍后重试"}finally{P.value=!1}}function Ht(){return De("/api/shortterm/latest-session",!1).then(function(L){L&&L.date&&(r.value||(r.value=L.date))}).catch(function(){})}function Nt(){const L=g.value;L==="ztpool"?ne():L==="lhb"?ae():L==="overview"?(lt(),ea()):L==="sector"?It():L==="intraday"&&ta()}function Gt(){const L=r.value?"?date="+r.value:"";["/api/shortterm/overview"+L,"/api/shortterm/pools"+L,"/api/shortterm/lhb"+L].forEach(function(Le){De(Le,!1).catch(function(){})})}function ft(){const L=g.value;L==="ztpool"?ne(!0):L==="lhb"?ae(!0):L==="overview"?(lt(!0),ea(!0)):L==="sector"?It(!0):L==="intraday"&&ta(!0)}f(function(){Ht(),Nt(),Gt(),nt(),Y()}),Vue.watch(function(){return g.value},function(L){Nt(),L==="overview"&&nt()});const v=window.QuantOnboarding,$=e(!1),le=e(v?v.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),Te=t(function(){return v&&v.shorttermTourSteps()[le.value.stepIndex]||{key:"",title:"",desc:""}}),Ve=t(function(){return v?v.shorttermTourProgress(le.value):{done:0,total:3,pct:0}}),Qe=t(function(){return le.value.stepIndex>=2});function Oe(){if(v){var L=null;try{L=localStorage.getItem("qc_shortterm_tour")}catch{}if(L){var fe=v.parseState(L);fe&&(le.value=fe)}}}function rt(){if(v){var L=JSON.stringify(le.value);try{localStorage.setItem("qc_shortterm_tour",L)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:L}})}).catch(function(){})}catch{}}}function nt(){window.__quantGuideModalsEnabled===!0&&v&&g.value==="overview"&&(Oe(),v.shorttermTourShouldShow(le.value)&&($.value=!0))}function ct(){le.value=v.shorttermTourNext(le.value),rt()}function Ot(){le.value=v.shorttermTourComplete(le.value),rt(),$.value=!1}function Et(){le.value=v.shorttermTourDismiss(le.value),rt(),$.value=!1}return{currentPage:A,currentSubPage:g,shortDate:r,pools:w,poolLoading:i,poolError:S,ztBoardFilter:_,filteredZt:Ne,clearBoardFilter:Ie,lhbRows:z,lhbLoading:F,lhbError:C,lhbReason:u,lhbPageRows:E,lhbPage:l,overview:O,overviewLoading:X,overviewError:R,dateList:V,dateListLoading:se,loadDateList:Y,pickDate:ee,sectorType:j,sectorIndicator:H,sectorKeyword:N,sectorRows:k,filteredSectorRows:et,sectorPageRows:Wt,sectorPage:D,sectorLoading:ce,sectorError:U,sectorFlowSource:T,PAGE_SIZE:x,gotoSector:yt,review:m,reviewRunning:W,intradaySnapshots:ue,intradayLoading:Z,intradayCollecting:P,intradaySlots:gt,intradayMsg:wt,slotClass:_t,intradayStatus:At,chatQuestion:G,chatAnswer:re,chatLoading:pe,loadPools:ne,loadLhb:ae,loadOverview:lt,loadSectorFlow:It,loadReview:ea,runReview:aa,sendChat:na,loadIntraday:ta,collectSnapshot:Qt,refreshCurrent:ft,ladderText:he,fmtAmount:at,fmtPct:kt,riseFall:Ae,tagClass:Re,openStock:tt,lhbInstitutionNetBuy:xt,lhbHotMoneyCount:St,sectorTopName:zt,sectorTopInflow:Kt,sectorSource:Jt,moneySource:Ue,promotion1to2:Ge,cycleScore:ht,cycleTrend:st,pct:Rt,fmtCond:Se,verdictClass:we,sessionStatusText:Xe,sessionStatusClass:Ze,shorttermTourVisible:$,shorttermTourState:le,shorttermTourStep:Te,shorttermTourProg:Ve,shorttermTourIsLast:Qe,shorttermTourNext:ct,shorttermTourFinish:Ot,shorttermTourSkip:Et}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(g,r,w,i,S){var b=w>0?w:1,M=typeof S=="number"&&S>=0?S:a,_=Math.max(0,i),z=Math.max(0,g),F=Math.max(0,r),C=Math.max(0,Math.floor(z/b)-M),c=Math.min(_,Math.ceil((z+F)/b)+M);return{startIndex:C,endIndex:c}}function f(g,r){return Math.max(0,g||0)*(r>0?r:0)}function t(g,r,w,i,S){var b=g||[],M=e(r,w,i,b.length,S),_=b.slice(M.startIndex,M.endIndex);return{visible:_,startIndex:M.startIndex,endIndex:M.endIndex,offsetY:M.startIndex*(i>0?i:1),totalHeight:f(b.length,i)}}function d(g,r){if(g){if(g.code!=null)return g.code;if(g.id!=null)return g.id;if(g.ts_code!=null)return g.ts_code}return r}function p(g,r,w){var i=g||[];if(!i.length)return r>0?r:1;for(var S=Math.min(w||50,i.length),b=0,M=0,_=0;_<S;_++){var z=i[_]&&i[_].rowHeight;typeof z=="number"&&z>0&&(b+=z,M++)}return M?b/M:r>0?r:1}function A(g,r,w,i,S){var b=e(g,r,w,i,S),M=Math.max(0,i);return M?(b.endIndex-b.startIndex)/M:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:f,sliceVisible:t,getRowKey:d,estimateDynamicRowHeight:p,renderedRatio:A}});(function(){const{ref:a,computed:e,onMounted:f,onBeforeUnmount:t}=Vue,d=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:d.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(p){const A=a(null),g=a(0),r=a(400),w=e(()=>(d.computeVisibleRange||function(n,u,l,x,E){const O=l>0?l:1,X=E>=0?E:8,R=Math.max(0,x);return{startIndex:Math.max(0,Math.floor(n/O)-X),endIndex:Math.min(R,Math.ceil((n+u)/O)+X)}})(g.value,r.value,p.rowHeight,p.items.length,p.buffer)),i=e(()=>p.items.length*p.rowHeight),S=e(()=>w.value.startIndex),b=e(()=>w.value.endIndex),M=e(()=>p.items.slice(S.value,b.value));function _(){A.value&&(g.value=A.value.scrollTop)}function z(){A.value&&(r.value=A.value.clientHeight||400)}function F(c,n){return d.getRowKey?d.getRowKey(c,n):c&&c.code!=null?c.code:c&&c.id!=null?c.id:n}let C=null;return f(()=>{z(),A.value&&typeof ResizeObserver<"u"&&(C=new ResizeObserver(()=>z()),C.observe(A.value))}),t(()=>{C&&C.disconnect()}),{scrollEl:A,totalHeight:i,startIndex:S,endIndex:b,visibleItems:M,onScroll:_,keyOf:F}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,f=60,t=500,d=10,p=88,A=350;function g(n,u,l,x,E){E=E||{};var O=typeof E.threshold=="number"?E.threshold:a,X=typeof E.bias=="number"?E.bias:e,R=l-n,q=x-u;return Math.abs(R)<O||Math.abs(R)<Math.abs(q)*X?"none":R<0?"left":"right"}function r(n,u,l){l=l||{};var x=typeof l.threshold=="number"?l.threshold:f;return u-n>=x}function w(n,u){u=u||{};var l=typeof u.threshold=="number"?u.threshold:t;return n>=l}var i=!1;function S(n,u){return n&&typeof n.closest=="function"?n.closest(u):null}function b(n){if(!n)return"";var u=n.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(u){var l=u.getAttribute&&u.getAttribute("data-copy-code");if(l)return l.trim();var x=(u.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(x)return x[0]}var E=n.getAttribute&&n.getAttribute("data-copy-code");return E?E.trim():""}function M(n){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(function(){return!0}).catch(function(){return _(n)}):Promise.resolve(_(n))}function _(n){try{var u=document.createElement("textarea");return u.value=n,u.style.position="fixed",u.style.opacity="0",document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u),!0}catch{return!1}}function z(n){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(n)}function F(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function C(){var n=null,u=null,l=null;function x(){u&&(u.timer&&clearTimeout(u.timer),u=null)}function E(se){l={el:se,until:Date.now()+A}}function O(se){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(Y){Y!==se&&Y.classList.remove("swipe-open")}),n&&n.el!==se&&(n=null)}function X(se){var Y=se.touches&&se.touches[0];if(Y){var ee=S(se.target,".swipe-reveal");ee&&(n={el:ee,x:Y.clientX,y:Y.clientY,moved:!1},se.stopPropagation());var j=S(se.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");j&&(x(),u={el:j,x:Y.clientX,y:Y.clientY,timer:setTimeout(function(){var H=b(j);u=null,H&&(E(j),M(H).then(function(){F(),z("已复制代码 "+H)}))},t)})}}function R(se){if(n){var Y=se.touches&&se.touches[0];if(Y){var ee=Y.clientX-n.x,j=Y.clientY-n.y;if(Math.abs(ee)>8&&Math.abs(ee)>Math.abs(j)*1.2){se.cancelable&&se.preventDefault(),n.moved=!0;var H=n.el.querySelector(".swipe-reveal-main")||n.el,N=Math.max(-p,Math.min(0,ee));H.style.transition="none",H.style.transform="translateX("+N+"px)",se.stopPropagation()}if(u){var k=Y.clientX-u.x,D=Y.clientY-u.y;(Math.abs(k)>d||Math.abs(D)>d)&&x()}}}}function q(se){if(x(),!!n){var Y=n.el,ee=se.changedTouches&&se.changedTouches[0],j=n.x,H=n.y,N="none";ee&&(N=g(j,H,ee.clientX,ee.clientY));var k=n.moved;n=null;var D=Y.querySelector(".swipe-reveal-main")||Y;D.style.transform="",D.style.transition="",N==="left"?(O(Y),Y.classList.add("swipe-open"),E(Y)):(N==="right"||k)&&Y.classList.remove("swipe-open"),se.stopPropagation()}}function I(){x(),n=null}function V(se){if(l&&Date.now()<l.until){var Y=l.el.contains(se.target)||se.target===l.el,ee=se.target.closest&&se.target.closest(".swipe-reveal-actions");Y&&!ee&&(se.preventDefault(),se.stopPropagation(),l=null)}}document.addEventListener("touchstart",X,!0),document.addEventListener("touchmove",R,!0),document.addEventListener("touchend",q,!0),document.addEventListener("touchcancel",I,!0),document.addEventListener("click",V,!0)}function c(){i||typeof document>"u"||(i=!0,C())}return{judgeSwipe:g,judgePullToRefresh:r,judgeLongPress:w,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:f,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:d,REVEAL_WIDTH:p,initGestures:c,_codeFromRow:b}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function f(p){return a[p]||a.empty}function t(){const p=[];for(const A of e){const g=a[A];g.title||p.push(A+".title"),A!=="loading"&&!g.icon&&p.push(A+".icon"),typeof g.retry!="boolean"&&p.push(A+".retry"),typeof g.skeleton!="boolean"&&p.push(A+".skeleton")}return{ok:p.length===0,errors:p}}const d={VARIANTS:a,KEYS:e,resolve:f,validate:t};typeof window<"u"&&(window.QuantStatePanel=d),typeof je<"u"&&je.exports&&(je.exports=d)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
        <div class="qc-state-panel" :class="'qc-state-' + type" role="status">
            <!-- 加载态：复用骨架屏 -->
            <div v-if="type === 'loading'" class="skeleton-loader">
                <div class="skeleton-header"></div>
                <div class="skeleton-grid">
                    <div class="skeleton-item" v-for="i in 6" :key="i"></div>
                </div>
            </div>
            <!-- 空/错误/离线态：统一空态样式 -->
            <div v-else class="empty-state qc-state-info">
                <div class="qc-state-icon"><qc-icon v-if="isIconName" :name="icon" :size="32" /><template v-else>{{ icon }}</template></div>
                <div class="qc-state-title">{{ title }}</div>
                <div class="qc-state-desc" v-if="desc">{{ desc }}</div>
                <div class="qc-state-action" v-if="retryable">
                    <slot name="action">
                        <button class="qc-state-retry" type="button" @click="$emit('retry')">重试</button>
                    </slot>
                </div>
            </div>
        </div>
    `,setup(f){const t=a(()=>typeof e.resolve=="function"?e.resolve(f.type):{}),d=a(()=>f.icon||t.value.icon||""),p=a(()=>f.title||t.value.title||""),A=a(()=>f.desc||t.value.desc||""),g=a(()=>!!t.value.retry),r=a(()=>/^[a-z][a-z0-9-]*$/.test(String(d.value||"")));return{icon:d,title:p,desc:A,retryable:g,isIconName:r}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(n){return String(n||"").trim().toLowerCase()}function e(n,u){if(!n)return!0;const l=n.split(/\s+/).filter(Boolean);if(!l.length)return!0;const x=String(u||"").toLowerCase();return l.every(function(E){return x.indexOf(E)!==-1})}function f(){return{visible:!1,query:"",activeIndex:0}}function t(n,u){return u===void 0&&(u=!n.visible),n.visible=u,u&&(n.query="",n.activeIndex=0),n.visible}function d(n,u,l){const x=a(n);if(!u||!u.length)return[];const E=[];return u.forEach(function(O){const X=e(x,O.name)||e(x,O.key),R=(O.subPages||[]).filter(function(q){const I=l&&l[q]||q;return e(x,I)||e(x,q)});X&&E.push({type:"menu",menuKey:O.key,subPage:O.subPages&&O.subPages[0]||"",label:O.name,subLabel:"页面",icon:O.icon||"file-text"}),R.forEach(function(q){E.push({type:"menu",menuKey:O.key,subPage:q,label:l&&l[q]||q,subLabel:O.name,icon:O.icon||"file-text"})})}),E.slice(0,8)}function p(n,u){const l=a(n);return!u||!u.length?[]:u.filter(function(x){return!!(!l||e(l,x.label)||e(l,x.key)||x.keywords&&e(l,x.keywords))}).slice(0,8)}function A(n,u){const l=a(n);return!l||!u||!u.length?[]:u.filter(function(x){return e(l,x.code)||e(l,x.name)}).slice(0,8).map(function(x){return{type:"stock",code:x.code,name:x.name,label:x.name,subLabel:x.code,icon:"trending-up"}})}function g(n,u,l){const x=[],E=[];return l&&l.length&&(x.push({key:"stock",label:"股票",items:l}),E.push.apply(E,l)),n&&n.length&&(x.push({key:"menu",label:"菜单",items:n}),E.push.apply(E,n)),u&&u.length&&(x.push({key:"command",label:"指令",items:u}),E.push.apply(E,u)),{groups:x,flat:E}}function r(n,u,l){if(u<=0)return 0;const x=((n||0)+l)%u;return x<0?u-1:x}function w(n,u,l,x){const E=d(n,u,l).map(function(X){return{type:"menu",menuKey:X.menuKey,subPage:X.subPage,label:X.label,subLabel:X.subLabel,icon:X.icon,iconName:X.icon,value:X.icon+" "+X.label+" · "+X.subLabel}}),O=p(n,x||[]).map(function(X){return{type:"command",key:X.key,label:X.label,icon:X.icon,iconName:X.icon,subLabel:"指令",value:X.icon+" "+X.label}});return E.concat(O)}function i(n){return n?n.type==="menu"?{action:"menu",menuKey:n.menuKey,subPage:n.subPage}:n.type==="command"?{action:"command",key:n.key}:n.type==="sector"?{action:"sector",name:n.name}:n.type==="strategy"?{action:"strategy",id:n.id,name:n.name}:n.type==="stock"||n.code&&n.name?{action:"stock",code:n.code,name:n.name}:null:null}const S=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var b={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function M(n){if(!n||typeof n!="string")return null;var u=n.split("+").map(function(E){return E.trim()}).filter(Boolean);if(!u.length)return null;var l=u.pop().toLowerCase();if(!l)return null;var x={ctrl:!1,alt:!1,shift:!1,meta:!1};return u.forEach(function(E){var O=E.toLowerCase();b.ctrl.indexOf(O)!==-1?x.ctrl=!0:b.alt.indexOf(O)!==-1?x.alt=!0:b.shift.indexOf(O)!==-1?x.shift=!0:b.meta.indexOf(O)!==-1&&(x.meta=!0)}),{ctrl:x.ctrl,alt:x.alt,shift:x.shift,meta:x.meta,key:l}}function _(n,u){if(!n||!u)return!1;var l=String(u.key||u.code||"").toLowerCase();return n.key!==l?!1:n.ctrl===!!u.ctrlKey&&n.alt===!!u.altKey&&n.shift===!!u.shiftKey&&n.meta===!!u.metaKey}function z(n){if(!n)return"";var u=[];return n.ctrl&&u.push("Ctrl"),n.alt&&u.push("Alt"),n.shift&&u.push("Shift"),n.meta&&u.push("Meta"),u.push(n.key.toUpperCase()),u.join("+")}function F(){var n={};return{register:function(u){if(!u||!u.key)throw new Error("命令 key 必填");if(n[u.key])throw new Error("命令重复注册: "+u.key);return n[u.key]=Object.assign({},u),u.key},list:function(){return Object.keys(n).map(function(u){return n[u]})},get:function(u){return n[u]||null},remove:function(u){delete n[u]},has:function(u){return!!n[u]},count:function(){return Object.keys(n).length}}}function C(){var n={},u={};return{register:function(l,x,E){var O=M(l);if(!O)throw new Error("无效快捷键: "+l);var X=z(O);if(n[X])throw new Error("快捷键冲突: "+l);if(x!=null&&u[x]!==void 0)throw new Error("动作重复绑定: "+x);return n[X]={combo:l,action:x,description:E||"",parsed:O},u[x]=X,X},resolve:function(l){for(var x in n)if(_(n[x].parsed,l))return n[x].action;return null},list:function(){return Object.keys(n).map(function(l){return n[l]})},unregister:function(l){var x=z(M(l));n[x]&&(delete u[n[x].action],delete n[x])},count:function(){return Object.keys(n).length}}}function c(){var n=C();return n.register("Ctrl+K","toggle-palette","打开命令面板"),n.register("F5","refresh","刷新当前页"),n.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),n.register("Ctrl+J","open-ai","打开 AI 问股"),n.register("Ctrl+D","open-today","今日一屏"),n.register("Ctrl+E","batch-eval","批量 AI 评估"),n.register("Ctrl+G","add-portfolio","加入组合"),n.register("Ctrl+H","open-eval-history","打开评估历史"),n.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),n}return{normalize:a,createPaletteState:f,toggleVisible:t,searchMenus:d,searchCommands:p,filterStocksLocal:A,mergeResults:g,moveIndex:r,buildSearchSuggestions:w,dispatchSearchSelection:i,DEFAULT_COMMANDS:S,parseKeyCombo:M,matchShortcut:_,canonicalCombo:z,createCommandRegistry:F,createShortcutRegistry:C,createDefaultShortcuts:c}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof je<"u"&&je.exports?je.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var f=e();typeof je=="object"&&je.exports&&(je.exports=f),a.QuantOnboarding=f})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],e=a.length,f=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=f.length;function d(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function p(){return f.slice()}function A(q){return q<0?0:q>=t?t-1:q}function g(q){return{stepIndex:q.stepIndex,completed:!!q.completed,dismissed:!!q.dismissed,updatedAt:q.updatedAt||0}}function r(q){return g(Object.assign({},q,{stepIndex:A((q.stepIndex||0)+1),updatedAt:Date.now()}))}function w(q){return g(Object.assign({},q,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function i(q){return g(Object.assign({},q,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function S(q){var I=Math.min(q&&q.stepIndex||0,t);return{done:I,total:t,pct:Math.round(I/t*100)}}function b(q){return!!(q&&!q.completed&&!q.dismissed)}function M(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function _(){return a.slice()}function z(){return e}function F(q){return q<0?0:q>=e?e-1:q}function C(q){return{stepIndex:q.stepIndex,completed:!!q.completed,dismissed:!!q.dismissed,updatedAt:q.updatedAt||0}}function c(q){return C(Object.assign({},q,{stepIndex:F((q.stepIndex||0)+1),updatedAt:Date.now()}))}function n(q){return C(Object.assign({},q,{stepIndex:F((q.stepIndex||0)-1),updatedAt:Date.now()}))}function u(q,I){return C(Object.assign({},q,{stepIndex:F(I),updatedAt:Date.now()}))}function l(q){return C(Object.assign({},q,{completed:!0,updatedAt:Date.now()}))}function x(q){return C(Object.assign({},q,{dismissed:!0,updatedAt:Date.now()}))}function E(q){return!!(q&&q.completed)}function O(q){var I=Math.min(q&&q.stepIndex||0,e);return{done:I,total:e,pct:Math.round(I/e*100)}}function X(q){var I=q||M();return JSON.stringify({stepIndex:I.stepIndex,completed:!!I.completed,dismissed:!!I.dismissed,updatedAt:I.updatedAt||0})}function R(q){var I=M();if(!q||typeof q!="string")return I;try{var V=JSON.parse(q);if(!V||typeof V!="object")return I;var se=parseInt(V.stepIndex,10);return isNaN(se)?I:{stepIndex:F(se),completed:!!V.completed,dismissed:!!V.dismissed,updatedAt:V.updatedAt||0}}catch{return I}}return{ONBOARDING_STEPS:a,steps:_,stepCount:z,createOnboardingState:M,next:c,prev:n,jumpTo:u,complete:l,dismiss:x,isComplete:E,progress:O,persistState:X,parseState:R,SHORTTERM_TOUR_STEPS:f,shorttermTourSteps:p,createShorttermTourState:d,shorttermTourNext:r,shorttermTourComplete:w,shorttermTourDismiss:i,shorttermTourProgress:S,shorttermTourShouldShow:b}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:f}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
      <div v-if="visible" class="onboarding-overlay" role="dialog" aria-modal="true" aria-labelledby="onboarding-title">
        <div class="onboarding-card">
          <div class="onboarding-head">
            <div class="onboarding-step-badge">{{ st.stepIndex + 1 }} / 5</div>
            <div class="onboarding-progress-track" aria-hidden="true">
              <div class="onboarding-progress-fill" :style="{ width: prog.pct + '%' }"></div>
            </div>
          </div>
          <div class="onboarding-title" id="onboarding-title">{{ step.title }}</div>
          <div class="onboarding-desc">{{ step.desc || stepKey }}</div>
          <div class="onboarding-actions">
            <el-button size="small" text @click="skip" aria-label="跳过引导">跳过</el-button>
            <el-button v-if="st.stepIndex > 0" size="small" @click="prev">上一步</el-button>
            <el-button v-if="!isLast" size="small" type="primary" @click="next">下一步</el-button>
            <el-button v-else size="small" type="primary" @click="finish">开始使用</el-button>
          </div>
        </div>
      </div>
    `,setup(){const d=a(!1),p=a(t.createOnboardingState()),A=e(function(){return t.steps()[p.value.stepIndex]}),g=e(function(){return t.progress(p.value)}),r=e(function(){return p.value.stepIndex>=t.stepCount()-1}),w=e(function(){return"onboarding.step."+A.value.key});function i(){const F=t.persistState(p.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:F}})}).then(function(C){return C.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",F)}catch{}})}function S(){p.value=t.next(p.value)}function b(){p.value=t.prev(p.value)}function M(){p.value=t.complete(p.value),i(),d.value=!1}function _(){p.value=t.dismiss(p.value),i(),d.value=!1}function z(){fetch("/api/user_config/preferences").then(function(F){return F.json()}).then(function(F){const C=F&&F.preferences&&F.preferences.onboarding_progress;return C&&(p.value=t.parseState(C)),C}).catch(function(){return null}).then(function(F){if(!F)try{const C=localStorage.getItem("qc_onboarding_progress");C&&(p.value=t.parseState(C))}catch{}!t.isComplete(p.value)&&!p.value.dismissed&&(d.value=!0)})}return f(z),{visible:d,st:p,step:A,prog:g,isLast:r,stepKey:w,next:S,prev:b,finish:M,skip:_}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(e){try{const f=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(f)return f(e)||""}catch{}return e}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(e){try{const f=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(f)return f(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:f,nextTick:t,inject:d,onMounted:p}=Vue,A=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
      <el-dialog v-model="visible" width="580px" top="12vh" class="command-palette"
                 :show-close="false" :close-on-click-modal="true" :append-to-body="true">
        <div class="command-palette-body">
          <el-input ref="inputEl" v-model="query" size="large" placeholder="搜索股票 / 菜单 / 指令…"
                    aria-label="搜索股票 / 菜单 / 指令"
                    @keydown.up.prevent="onUp" @keydown.down.prevent="onDown"
                    @keydown.enter.prevent="onEnter">
            <template #prefix><span class="opacity-6"><qc-icon name="search" :size="16" /></span></template>
          </el-input>

          <div class="command-groups" v-if="results.flat.length">
            <div v-for="g in results.groups" :key="g.key" class="command-group">
              <div class="command-group-label">{{ g.label }}</div>
              <div v-for="item in g.items" :key="itemKey(item)" class="command-item"
                   :class="{active: isActive(item)}" @click="execute(item)" @mouseenter="setActive(item)">
                <span class="command-item-icon">
                  <qc-icon v-if="isIconName(item.icon)" :name="item.icon" :size="14" />
                  <template v-else v-html="sanitizeHtml(item.icon || '')"></template>
                </span>
                <span class="command-item-label">{{ item.label }}</span>
                <span class="command-item-sub">{{ item.subLabel }}</span>
              </div>
            </div>
          </div>
          <div v-else-if="query" class="command-empty">无匹配结果</div>
          <div v-else class="command-empty">输入关键词搜索股票、菜单或指令 · ↑↓ 选择 · Enter 执行 · Esc 关闭</div>
        </div>
      </el-dialog>
    `,setup(){const g=d("qcState");if(!g)return{};const r=a(""),w=e({get:()=>g.commandPaletteVisible.value,set:j=>{g.commandPaletteVisible.value=j}}),i=a(0),S=a([]),b=a(null),M=e(()=>{const j=(A.DEFAULT_COMMANDS||[]).map(function(N){return Object.assign({},N)});return Object.keys(g.themes.value||{}).forEach(function(N){const k=g.themes.value[N];j.push({key:"theme:"+N,label:"切换主题 · "+(k.name||N),icon:"palette",keywords:"theme 主题"})}),j});function _(j){return typeof j=="string"&&/^[a-z][a-z0-9-]*$/.test(j)}const z=e(()=>g.menus.value||[]);function F(){const j=window.__quantModules&&window.__quantModules.pinyin;if(!j)return[];const H=[];return(g.watchlist&&g.watchlist.value||[]).forEach(function(N){H.push({code:N.code,name:N.name})}),(g.aiHistory&&g.aiHistory.value||[]).forEach(function(N){N&&N.stock_code&&H.push({code:N.stock_code,name:N.stock_name||N.stock_code})}),H.push.apply(H,j.getExtraStocks()),j.buildStockIndex(H)}function C(j){const H=window.__quantModules&&window.__quantModules.pinyin;return H?H.searchStocksByQuery(j,F()).map(function(N){return{type:"stock",code:N.code,name:N.name,label:N.name,subLabel:N.code,icon:"trending-up"}}):[]}function c(){const j=[],H=window.__quantModules&&window.__quantModules.recent;H&&H.getRecentViewed().slice(0,5).forEach(function(k){j.push({type:"stock",code:k.code,name:k.name||k.code,label:k.name||k.code,subLabel:"最近查看 · "+k.code,icon:"trending-up"})});const N=(g.watchlist&&g.watchlist.value||[]).slice(0,8).map(function(k){return{type:"stock",code:k.code,name:k.name||k.code,label:k.name||k.code,subLabel:"我的自选 · "+k.code,icon:"trending-up"}});return j.concat(N)}const n=e(()=>{const j=r.value;if(!j)return A.mergeResults([],[],c());const H=A.searchMenus(j,z.value,g.subPageNames),N=A.searchCommands(j,M.value),k=S.value;return A.mergeResults(H,N,k)}),u=e(()=>n.value);function l(j){return u.value.flat[i.value]===j}function x(j){i.value=u.value.flat.indexOf(j)}function E(j){return(j.type||"")+":"+(j.code||j.menuKey||j.key||j.label)}let O=null;function X(){const j=r.value.trim();if(j.length<1){S.value=[];return}O&&clearTimeout(O),O=setTimeout(function(){const H=C(j);S.value=H,i.value=0,g.searchStocks(j,function(N){if(r.value.trim()!==j)return;const k=(N||[]).filter(function(U){return U&&U.code&&U.name}).map(function(U){return{type:"stock",code:U.code,name:U.name,label:U.name,subLabel:U.code,icon:"trending-up"}}),D={},ce=[];H.forEach(function(U){D[U.code]||(D[U.code]=!0,ce.push(U))}),k.forEach(function(U){D[U.code]||(D[U.code]=!0,ce.push(U))}),S.value=ce,i.value=0})},200)}function R(){i.value=A.moveIndex(i.value,u.value.flat.length,1)}function q(){i.value=A.moveIndex(i.value,u.value.flat.length,-1)}function I(){const j=u.value.flat[i.value];j&&V(j)}function V(j){g.commandPaletteVisible.value=!1,j.type==="menu"?g.navigateTo(j.menuKey,j.subPage):j.type==="stock"?g.showStockDetail(j.code,j.name):j.type==="command"&&se(j.key)}function se(j){if(j==="refresh"){const H=g.currentPage.value;H==="strategies"?g.loadDashboardData().catch(function(){}):H==="calendar"?g.refreshCalendarData().catch(function(){}):H==="ai"&&g.loadAiHistory().catch(function(){})}else j==="export"?g.exportCSV():j==="batch"?g.showBatchEvaluate.value=!0:j==="ai"?g.openAiFab():j==="sidebar"?g.toggleSidebar():j==="today"?g.navigateTo("strategies","overview"):j==="add-portfolio"?(g.currentPage.value="ai",g.currentSubPage.value="portfolio"):j==="open-system"?g.navigateTo("system","status"):j==="open-shortterm"?g.navigateTo("shortterm","overview"):j==="open-research"?g.navigateTo("research","overview"):j==="open-calendar"?g.navigateTo("calendar",""):j==="refresh-data-source"?g.navigateTo("system","datasource"):j.indexOf("theme:")===0&&g.changeTheme(j.slice(6))}f(w,function(j){j&&(r.value="",S.value=[],i.value=0,t(function(){b.value&&b.value.focus&&b.value.focus()}))}),f(r,X);function Y(j){j==="toggle-palette"?g.commandPaletteVisible.value=!g.commandPaletteVisible.value:j==="toggle-sidebar"?g.toggleSidebar():j==="open-ai"?g.openAiFab():j==="refresh"?se("refresh"):j==="open-today"?se("today"):j==="batch-eval"?se("batch"):j==="add-portfolio"&&se("add-portfolio")}function ee(j){if(!A.createDefaultShortcuts||!A.createShortcutRegistry)return;const N=A.createDefaultShortcuts().resolve({key:j.key,ctrlKey:j.ctrlKey,altKey:j.altKey,shiftKey:j.shiftKey,metaKey:j.metaKey});N&&(j.preventDefault(),Y(N))}return p(function(){document.addEventListener("keydown",ee)}),{visible:w,query:r,results:u,inputEl:b,sanitizeHtml:g.sanitizeHtml,isIconName:_,onDown:R,onUp:q,onEnter:I,execute:V,isActive:l,setActive:x,itemKey:E,onGlobalKeydown:ee}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
        <el-dialog v-model="showChangePassword" title="修改密码" width="420px" :close-on-click-modal="false">
            <el-form :model="changePasswordForm" label-width="80px">
                <el-form-item label="当前密码">
                    <el-input v-model="changePasswordForm.oldPassword" type="password" placeholder="请输入当前密码" show-password />
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input v-model="changePasswordForm.newPassword" type="password" placeholder="至少6位" show-password />
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="changePasswordForm.confirmPassword" type="password" placeholder="再次输入新密码" show-password @keyup.enter="doChangePassword" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="showChangePassword = false">取消</el-button>
                <el-button type="primary" @click="doChangePassword" :loading="changingPassword">确认修改</el-button>
            </template>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShortcutHelpDialog={name:"qc-shortcut-help-dialog",template:`
        <el-dialog v-model="shortcutHelpVisible" title="⌨ 键盘快捷键" width="420px">
            <div class="shortcut-list">
                <div class="shortcut-row" v-for="s in shortcutHelpItems" :key="s.keys">
                    <span class="shortcut-keys"><kbd>{{ s.keys }}</kbd></span>
                    <span class="shortcut-desc">{{ s.desc }}</span>
                </div>
            </div>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.TourDialog={name:"qc-tour-dialog",template:`
        <el-dialog v-model="tourVisible" title="" width="440px" :show-close="false" class="tour-dialog">
            <div class="text-center-pad8-0">
                <div class="empty-state-icon-sm"><qc-icon :name="tourSteps[tourStep].icon" :size="26" /></div>
                <div class="text-lg-semibold-mb8">{{ tourSteps[tourStep].title }}</div>
                <div class="text-base-secondary-lh">{{ tourSteps[tourStep].desc }}</div>
            </div>
            <template #footer>
                <div class="flex-between">
                    <el-button size="small" text @click="skipTour">跳过</el-button>
                    <div class="flex-gap-4">
                        <span v-for="(s, i) in tourSteps" :key="i" class="tour-dot" :class="{active: i === tourStep}"></span>
                    </div>
                    <el-button v-if="tourStep < tourSteps.length - 1" size="small" type="primary" @click="tourStep++">下一步</el-button>
                    <el-button v-else size="small" type="primary" @click="finishTour">开始使用</el-button>
                </div>
            </template>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.MenuConfigDialog={name:"qc-menu-config-dialog",template:`
        <el-dialog v-model="menuConfigDialog" :title="(allGroups[editingGroup]?.name || '') + ' — 菜单访问授权'" width="600px">
            <div class="p-15-0">
                <el-form label-width="60px" size="small">
                    <el-form-item label="组名">
                        <el-input v-model="groupEditForm.name" placeholder="组名" />
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input v-model="groupEditForm.description" placeholder="组功能描述" />
                    </el-form-item>
                </el-form>
                <div class="mb-8-semibold-sm">菜单访问授权</div>
                <div class="menu-item-box" v-for="menu in allMenuDefs" :key="menu.key">
                    <div class="menu-item-row" @click="toggleSubPageSection(menu.key)" tabindex="0" role="button" :aria-expanded="!!subPageSectionExpanded[menu.key]" aria-label="展开或收起子页配置" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                        <div class="menu-item-main">
                            <el-switch v-model="groupEditForm.visible_menus[menu.key]" @change="onParentToggle(menu.key)" size="small" @click.stop />
                            <span class="text-sm-600-nowrap">{{ menu.name }}</span>
                            <span class="text-10-tertiary-nowrap" v-if="!groupEditForm.visible_menus[menu.key]">子项已关</span>
                        </div>
                        <span :style="{transform: subPageSectionExpanded[menu.key] ? 'rotate(180deg)' : '', transition: 'transform 0.2s', fontSize: '12px', flexShrink: 0}">▼</span>
                    </div>
                    <div class="menu-sub-row" v-if="subPageSectionExpanded[menu.key]" :style="{opacity: groupEditForm.visible_menus[menu.key] ? 1 : 0.4}">
                        <el-switch v-for="sp in menu.subPages" :key="sp"
                            v-model="groupEditForm.visible_sub_pages[menu.key + '.' + sp]"
                            :active-text="subPageNames[sp] || sp"
                            :disabled="!groupEditForm.visible_menus[menu.key]"
                            size="small" />
                    </div>
                </div>
            </div>
            <template #footer>
                <el-button @click="menuConfigDialog = false">取消</el-button>
                <el-button type="primary" @click="saveMenuConfig" :loading="savingGroup"><qc-icon name="hard-drive" :size="14" /> 保存</el-button>
            </template>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AddGroupDialog={name:"qc-add-group-dialog",template:`
        <el-dialog v-model="showAddGroup" title="+ 新建分组" width="400px">
            <el-form class="p-15-0-25" label-width="80px">
                <el-form-item label="组ID">
                    <el-input v-model="addGroupForm.group_id" placeholder="英文标识，如：analyst" />
                </el-form-item>
                <el-form-item label="组名">
                    <el-input v-model="addGroupForm.name" placeholder="如：分析师组" />
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="addGroupForm.description" placeholder="组功能描述" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="showAddGroup = false">取消</el-button>
                <el-button type="primary" @click="createGroup" :loading="savingGroup">创建</el-button>
            </template>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AddUserDialog={name:"qc-add-user-dialog",template:`
        <el-dialog v-model="showAddUser" :title="editingUser ? '编辑用户' : '添加用户'" width="400px">
            <el-form class="p-15-0-25" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="userForm.username" :disabled="!!editingUser" placeholder="输入用户名" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userForm.password" type="password" placeholder="留空则不修改" show-password />
                </el-form-item>
                <el-form-item label="角色">
                    <el-select class="w-select-sm" v-model="userForm.role">
                        <el-option label="管理员" value="admin" />
                        <el-option label="普通用户" value="user" />
                    </el-select>
                </el-form-item>
                <el-form-item label="所属组">
                    <el-select class="w-select-sm" v-model="userForm.group">
                        <el-option v-for="(g, gid) in allGroups" :key="gid" :label="g.name" :value="gid" :disabled="userForm.username === 'admin' || userForm.username === 'guest'" />
                    </el-select>
                </el-form-item>
                <el-form-item label="默认主题">
                    <el-select class="w-select-sm" v-model="userForm.theme">
                        <el-option v-for="(theme, key) in themes" :key="key" :label="theme.name" :value="key" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="showAddUser = false">取消</el-button>
                <el-button type="primary" @click="saveUser" :loading="savingUser">保存</el-button>
            </template>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.BatchEvaluateDialog={name:"qc-batch-evaluate-dialog",template:`
        <el-dialog class="max-w-520" v-model="showBatchEvaluate" title="批量AI评估" width="95%">
            <div class="p-15-0-15">
                <el-form label-width="100px" v-if="!batchRunning">
                    <el-form-item label="股票列表">
                        <el-input
                            v-model="batchStocks"
                            type="textarea"
                            :rows="5"
                            placeholder="输入股票代码，多个用换行或空格分隔&#10;例如：&#10;600000.SH&#10;000001.SZ"
                        />
                    </el-form-item>
                </el-form>
                <!-- 评估进度 -->
                <div class="p-10-0" v-if="batchRunning">
                    <div class="flex-between-sm-mb8">
                        <span>评估中 {{ batchCompleted }}/{{ batchTotal }} <span class="color-token-primary" v-if="batchElapsed>0">· 已用时 {{ batchElapsed }}s</span></span>
                        <span class="color-primary-semibold" v-if="batchCurrent">{{ batchCurrent }}</span>
                    </div>
                    <div class="text-xs-tertiary-mb8" v-if="batchCompleted===0 && batchElapsed>=8">全新评估需调用大模型，请耐心等待（约需数秒至1分钟）…</div>
                    <div class="progress-track-6">
                        <div :style="{width:(batchTotal>0?batchCompleted/batchTotal*100:0)+'%',height:'100%',background:'var(--gradient-brand)',borderRadius:'3px',transition:'width 0.4s ease'}"></div>
                    </div>
                    <div class="scroll-240">
                        <div class="batch-row" v-for="(status,code) in batchStatuses" :key="code">
                            <span class="color-token-primary" v-if="status==='running'">⏳</span>
                            <span class="color-el-success" v-else-if="status==='success'">●</span>
                            <span class="color-el-danger" v-else-if="status==='error'"><qc-icon name="x" :size="12" /></span>
                            <span class="color-tertiary" v-else>⏸</span>
                            <span class="color-text-primary-flex1">
                                <!-- v3.15: 名称优先展示, 代码小字跟随 -->
                                <template v-if="batchResults[code] && batchResults[code].stock_name && batchResults[code].stock_name!==code">{{ batchResults[code].stock_name }}<span class="text-xs-tertiary"> ({{ code }})</span></template>
                                <template v-else>{{ code }}</template>
                            </span>
                            <span class="text-sm-bold" v-if="status==='success' && batchResults[code] && batchResults[code].result" :style="{color: levelColor(batchResults[code].result.level)}">{{ fmtNum(batchResults[code].result.total_score) }}分</span>
                            <span class="text-xs-danger-ellipsis" v-else-if="status==='error' && batchEvalErrors[code]" :title="batchEvalErrors[code]">{{ batchEvalErrors[code] }}</span>
                        </div>
                    </div>
                    <!-- v3.15: 完成汇总 -->
                    <div class="section-top-sm" v-if="batchCompleted===batchTotal && batchTotal>0">
                        评估完成：<span class="text-success-semibold">成功 {{ Object.values(batchStatuses).filter(s=>s==='success').length }}</span>
                        · <span class="text-danger-semibold">失败 {{ Object.values(batchStatuses).filter(s=>s==='error').length }}</span>
                        <span class="color-tertiary" v-if="batchElapsed>0"> · 用时 {{ batchElapsed }}s</span>
                    </div>
                </div>
                <div class="text-right-mt20">
                    <el-button @click="showBatchEvaluate = false" :disabled="batchRunning">取消</el-button>
                    <el-button type="primary" @click="doBatchEvaluate" :loading="batchRunning" :disabled="batchRunning">开始评估</el-button>
                </div>
            </div>
        </el-dialog>
    `,setup(){const e=a("qcState");if(!e)return{};const f=Vue.ref(0);let t=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,d=>{d?(f.value=0,t=setInterval(()=>{f.value++},1e3)):t&&(clearInterval(t),t=null)}),{...e,batchElapsed:f}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
        <el-dialog v-model="showAutoEvaluateSettings" title="自动评估设置" width="520px">
            <div class="p-15-0-25">
                <el-form label-width="120px">
                    <el-form-item label="启用自动评估">
                        <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" />
                    </el-form-item>
                    <template v-if="autoEvaluateConfig.enabled">
                        <el-form-item label="执行周期">
                            <el-select class="w-select-sm" v-model="autoEvaluateConfig.schedule_type">
                                <el-option label="每个交易日执行" value="daily" />
                                <el-option label="每周一执行" value="weekly" />
                                <el-option label="每月1号执行" value="monthly" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="执行时间">
                            <el-time-picker class="w-100" v-model="autoEvaluateConfig.schedule_time" format="HH:mm" value-format="HH:mm" placeholder="选择执行时间"/>
                        </el-form-item>
                        <el-form-item label="评估范围">
                            <el-radio-group v-model="autoEvaluateScope">
                                <el-radio label="watchlist">我的自选</el-radio>
                                <el-radio label="new_entries">最新交易日新入池</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="结果推送">
                            <el-switch v-model="autoEvaluateConfig.push_to_feishu" active-text="推送到飞书" inactive-text="不推送" />
                            <div class="text-sm-tertiary-mt6">
                                需要先在飞书推送配置中设置Webhook地址
                            </div>
                        </el-form-item>
                    </template>
                </el-form>
            </div>
            <template #footer>
                <el-button @click="showAutoEvaluateSettings = false">取消</el-button>
                <el-button type="primary" @click="saveAutoEvaluateConfig" :loading="savingConfig">
                    <qc-icon name="hard-drive" :size="14" /> 保存设置
                </el-button>
            </template>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
        <el-dialog v-model="indexDetailVisible" title="" width="800px" class="kline-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :lock-scroll="!embedded"
            :class="{ 'qc-embedded-dialog': embedded }">
            <div v-if="indexDetail">
                <!-- 头部信息 -->
                <div class="detail-header">
                    <div>
                        <h3 class="text-xl-title">{{ indexDetail.name }} <span class="text-md-muted">{{ indexDetail.code }}</span></h3>
                        <div class="detail-subtitle"><qc-icon name="line-chart" :size="13" /> {{ indexDetail.market }} 市场指数</div>
                    </div>
                    <div class="detail-score">
                        <div class="num" :style="{color: indexDetail.pct_chg >= 0 ? 'var(--color-rise)' : 'var(--color-fall)'}">{{ indexDetail.pct_chg >= 0 ? '+' : '' }}{{ indexDetail.pct_chg.toFixed(2) }}%</div>
                        <div class="label">{{ indexDetail.pct_chg >= 0 ? '上涨' : '下跌' }}</div>
                    </div>
                </div>

                <!-- 指数基本信息 -->
                <div class="stats-grid mt-4">
                    <div class="stat-box">
                        <div class="stat-label">最新点位</div>
                        <div class="stat-value">{{ Number(indexDetail.close).toFixed(2) }}</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-label">涨跌额</div>
                        <div class="stat-value" :style="{color: indexDetail.pct_chg >= 0 ? 'var(--color-rise)' : 'var(--color-fall)'}">
                            {{ indexDetail.change >= 0 ? '+' : '' }}{{ Number(indexDetail.change).toFixed(2) }}
                        </div>
                    </div>
                    <div class="stat-box" v-if="indexDetail.vol">
                        <div class="stat-label">成交量</div>
                        <div class="stat-value">{{ Math.round(indexDetail.vol / 10000).toLocaleString() }}万</div>
                    </div>
                    <div class="stat-box" v-if="indexDetail.amount">
                        <div class="stat-label">成交额</div>
                        <div class="stat-value">{{ Math.round(indexDetail.amount / 10000).toLocaleString() }}亿</div>
                    </div>
                </div>

                <!-- K线图区域 -->
                <div class="section-title mt-20"><span><qc-icon name="candlestick-chart" :size="14" /></span> K线图与均线</div>
                <div class="kline-container">
                    <div class="kline-tabs">
                        <button
                            v-for="tab in klinePeriods"
                            :key="tab.value"
                            :class="['kline-tab', {active: currentKlinePeriod === tab.value}]"
                            @click="switchIndexKlinePeriod(tab.value)"
                        >
                            {{ tab.label }}
                        </button>
                    </div>
                    <div class="kline-chart" id="indexKlineChart"></div>
                    <!-- v3.11 (FR-3.11.8): 均线开关（与图表图例双向联动） -->
                    <div v-if="indexKlineLoaded" class="ma-toggle-row">
                        <span class="ma-toggle-label">均线</span>
                        <button
                            v-for="m in MA_LINES"
                            :key="m"
                            :class="['ma-toggle-btn', { active: klineMaVisible[m] !== false }]"
                            @click="toggleKlineMa(m)"
                        >{{ m }}</button>
                        <span class="ma-toggle-hint">十字线读价：悬停或点击图表</span>
                    </div>
                    <qc-state-panel v-if="indexKlineLoading" type="loading"></qc-state-panel>
                </div>

                <!-- AI评估结果 -->
                <div v-if="indexAiResult" class="ai-result-box">
                    <div class="section-title"><span><qc-icon name="bot" :size="14" /></span> AI智能指数评估结果</div>
                    <div class="ai-analysis" v-html="sanitizeHtml(indexAiResult.analysis)"></div>
                    <div class="mt-4">
                        <el-tag :type="indexAiResult.suggestion === '买入' ? 'success' : indexAiResult.suggestion === '卖出' ? 'danger' : 'warning'" size="large">
                            <qc-icon name="pin" :size="14" /> {{ indexAiResult.suggestion || '暂无' }}
                        </el-tag>
                        <span class="ml-12-base-secondary">信心指数: {{ fmtNum(indexAiResult.confidence || 75, 0) }}%</span>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="mt-20-center">
                    <el-button class="w-200" type="primary" size="large" @click="doIndexAiEvaluate" :loading="indexAiLoading">
                        <qc-icon name="search-check" :size="16" /> 技术指标评估
                    </el-button>
                </div>
            </div>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SetupWizardDialog={name:"qc-setup-wizard-dialog",template:`
        <el-dialog v-model="showSetupWizard" title="系统初始化设置" width="500px" :close-on-click-modal="false" :show-close="false">
            <div class="min-h-280">
                <!-- 步骤 1: 修改密码 -->
                <div v-if="setupStep === 1">
                    <div class="text-center-mb24">
                        <div class="text-3xl-mb8"><qc-icon name="lock" :size="36" /></div>
                        <div class="text-md-semibold-600">管理员密码</div>
                        <div class="color-tertiary-mt4">建议修改默认密码以保证安全</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="新密码（留空则保持不变）">
                            <el-input v-model="setupForm.newPassword" type="password" placeholder="至少4位，留空保持默认" show-password />
                        </el-form-item>
                    </el-form>
                    <div class="text-center-mt12">
                        <el-button type="primary" @click="setupStep = 2" size="large">下一步</el-button>
                        <el-button class="ml-8" @click="setupStep = 2" size="large">跳过</el-button>
                    </div>
                </div>

                <!-- 步骤 2: AI 模型 -->
                <div v-if="setupStep === 2">
                    <div class="text-center-mb24">
                        <div class="text-3xl-mb8"><qc-icon name="bot" :size="36" /></div>
                        <div class="text-md-semibold-600">AI 大模型配置</div>
                        <div class="color-tertiary-mt4">用于股票智能评估，支持 DeepSeek/OpenAI 等</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="提供商">
                            <el-select class="w-select-sm" v-model="setupForm.aiProvider">
                                <el-option label="DeepSeek" value="deepseek" />
                                <el-option label="OpenAI" value="openai" />
                                <el-option label="其他兼容接口" value="custom" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="API Key">
                            <el-input v-model="setupForm.aiKey" placeholder="sk-..." show-password />
                        </el-form-item>
                        <el-form-item label="接口地址" v-if="setupForm.aiProvider === 'custom'">
                            <el-input v-model="setupForm.aiEndpoint" placeholder="https://api.example.com/v1" />
                        </el-form-item>
                    </el-form>
                    <div class="text-center-mt12">
                        <el-button @click="setupStep = 1" size="large">上一步</el-button>
                        <el-button class="ml-8" type="primary" @click="setupStep = 3" size="large">下一步</el-button>
                        <el-button class="ml-8" @click="setupStep = 3" size="large">跳过</el-button>
                    </div>
                </div>

                <!-- 步骤 3: Tushare -->
                <div v-if="setupStep === 3">
                    <div class="text-center-mb24">
                        <div class="text-3xl-mb8"><qc-icon name="database" :size="36" /></div>
                        <div class="text-md-semibold-600">Tushare 数据源</div>
                        <div class="color-tertiary-mt4">用于获取行情数据和股票信息</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="Tushare Token">
                            <el-input v-model="setupForm.tushareToken" placeholder="在 tushare.pro 注册获取" show-password />
                        </el-form-item>
                    </el-form>
                    <div class="text-center-mt12">
                        <el-button @click="setupStep = 2" size="large">上一步</el-button>
                        <el-button class="ml-8" type="success" @click="completeSetupWizard" size="large">完成初始化</el-button>
                        <el-button class="ml-8" @click="completeSetupWizard" size="large">跳过</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.MerrillDetailDialog={name:"qc-merrill-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
        <el-dialog v-model="showMerrillDetail" custom-class="merrill-detail-dialog" :title="(merrillDetailData.name || '经济周期分析') + ' - 详细分析报告'" width="800px" class="merrill-detail-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :lock-scroll="!embedded"
            :class="{ 'qc-embedded-dialog': embedded }">
            <!-- 骨架屏加载 -->
            <div v-if="!merrillDetailData.name" class="skeleton-loader">
                <div class="skeleton-header"></div>
                <div class="skeleton-grid">
                    <div class="skeleton-item" v-for="i in 5" :key="i"></div>
                </div>
                <div class="skeleton-large"></div>
            </div>
            <!-- 完整内容 -->
            <div class="p-15-0-25" v-else>
                <!-- 阶段概览 -->
                <div class="merrill-detail-header" :style="{backgroundColor: merrillDetailData.bg_color, borderLeftColor: merrillDetailData.color}">
                    <div>
                        <h3 class="merrill-title">{{ merrillDetailData.name }}</h3>
                        <p class="text-base-secondary-m0">{{ merrillDetailData.description }}</p>
                    </div>
                    <div class="stage-badge" :style="{backgroundColor: merrillDetailData.color}">
                        {{ merrillDetailData.criteria?.growth }} / {{ merrillDetailData.criteria?.inflation }}
                    </div>
                </div>

                <!-- ★ 当前周期状态：活跃阶段=实时进度，非活跃阶段=上一轮历史 -->
                <!-- 活跃阶段：实时进度 -->
                <div v-if="merrillDetailData._isCurrent && merrillDetailData._currentTiming" class="detail-section mt-1">
                    <div class="section-title"><qc-icon name="map-pin" :size="14" /> 当前周期实时进度</div>
                    <div class="grid-4col-gap12">
                        <div class="stat-item">
                            <div class="stat-value num-tabular">{{ merrillDetailData._currentTiming.current_stage_start_date || '—' }}</div>
                            <div class="stat-label">周期起始日</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData._currentTiming.duration_days }}天</div>
                            <div class="stat-label">已持续</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" :style="{color: merrillDetailData.color}">{{ merrillDetailData._currentTiming.maturity || '—' }}</div>
                            <div class="stat-label">成熟度</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData._currentTiming.predicted_end?.base || merrillDetailData._currentTiming.predicted_end || '—' }}</div>
                            <div class="stat-label">预测结束日</div>
                        </div>
                    </div>
                    <div class="flex-gap-18-mt12-wrap">
                        <span v-if="merrillDetailData._confidence">置信度：<b :style="{color: confidenceColor}">{{ merrillDetailData._confidence.level }}</b></span>
                        <span v-if="merrillDetailData._currentTiming.progress_percent > 0">进度：<b>{{ fmtNum(merrillDetailData._currentTiming.progress_percent) }}%</b></span>
                        <span class="text-warning-semibold" v-if="merrillDetailData._nextPrediction?.next_stage">
                            <qc-icon name="arrow-right" :size="13" /> →{{ merrillDetailData._nextPrediction.next_stage_name }} {{ (merrillDetailData._nextPrediction.transition_probability*100)?.toFixed(2) || 0 }}%
                        </span>
                    </div>
                    <!-- 过渡警告横幅 -->
                    <div class="warning-banner" v-if="merrillDetailData._currentTiming.progress_percent> 80 && merrillDetailData._nextPrediction?.transition_probability> 0.15">
                        <b class="color-badge-warning"><qc-icon name="alert-triangle" :size="13" /> 周期切换预警</b>
                        <span class="color-secondary-ml8">
                            当前{{ merrillDetailData.name }}已进入后期（{{ fmtNum(merrillDetailData._currentTiming.progress_percent) }}%），
                            预测下一阶段为<b class="color-warning">{{ merrillDetailData._nextPrediction.next_stage_name }}</b>
                            （概率 {{ (merrillDetailData._nextPrediction.transition_probability*100)?.toFixed(2) || 0 }}%）
                        </span>
                    </div>
                </div>

                <!-- 非活跃阶段：历史轮次 -->
                <div v-else-if="merrillDetailData._history && merrillDetailData._history.length> 0" class="detail-section mt-1">
                    <div class="section-title"><qc-icon name="calendar-days" :size="14" /> 历史轮次（共 {{ merrillDetailData._history.length }} 轮）</div>
                    <!-- 最近一次：摘要卡片 -->
                    <div class="grid-4col-gap12-mb14" v-if="merrillDetailData._lastPeriod">
                        <div class="stat-item">
                            <div class="stat-value text-base-semibold">{{ merrillDetailData._lastPeriod.start || '—' }}</div>
                            <div class="stat-label">开始</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value text-base-semibold">{{ merrillDetailData._lastPeriod.end || '—' }}</div>
                            <div class="stat-label">结束</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value text-base-semibold">{{ merrillDetailData._lastPeriod.duration || '—' }}</div>
                            <div class="stat-label">持续</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" :style="{color: merrillDetailData.color, fontSize: 'var(--font-base)'}">{{ merrillDetailData._lastPeriod.cycle_label || '—' }}</div>
                            <div class="stat-label">周期</div>
                        </div>
                    </div>
                    <!-- 全部历史轮次列表 -->
                    <div class="merrill-dim-row" v-for="(h, hIdx) in merrillDetailData._history" :key="hIdx" :style="{borderLeftColor: merrillDetailData.color}">
                        <div class="flex-between-mb6">
                            <span class="text-base-semibold">
                                <span class="stage-chip">{{ h.cycle_label || '—' }}</span>
                                {{ h.start || '—' }} → {{ h.end || '—' }}
                            </span>
                            <span class="text-sm-secondary">{{ h.duration || '—' }}</span>
                        </div>
                        <div class="text-sm-secondary-lh">
                            <qc-icon name="key" :size="13" /> {{ h.trigger || '—' }}
                        </div>
                        <div class="flex-gap-10-mt6-xs" v-if="h.key_indicators && Object.keys(h.key_indicators).length">
                            <span v-if="h.key_indicators.gdp_growth">GDP {{ h.key_indicators.gdp_growth }}%</span>
                            <span v-if="h.key_indicators.cpi">CPI {{ h.key_indicators.cpi }}%</span>
                            <span v-if="h.key_indicators.pmi">PMI {{ h.key_indicators.pmi }}</span>
                            <span v-if="h.key_indicators.ppi">PPI {{ h.key_indicators.ppi }}%</span>
                        </div>
                    </div>
                </div>
                <!-- 无历史记录 -->
                <div v-else-if="!merrillDetailData._isCurrent && !merrillDetailData._lastPeriod" class="detail-section mt-1">
                    <div class="section-title"><qc-icon name="calendar-days" :size="14" /> 历史轮次</div>
                    <qc-state-panel type="empty" icon="calendar-days" title="暂无历史记录"></qc-state-panel>
                </div>

                <!-- 经济特征 -->
                <div class="detail-section">
                    <div class="section-title"><qc-icon name="bar-chart-3" :size="14" /> 经济特征</div>
                    <div class="characteristics-grid">
                        <div v-for="(value, key) in merrillDetailData.characteristics" :key="key" class="char-item">
                            <div class="char-label">{{ getCharLabel(key) }}</div>
                            <div class="char-value">{{ value }}</div>
                        </div>
                    </div>
                </div>

                <!-- v2.0: 多维度评分详情 -->
                <div v-if="merrillData.dimension_scores" class="detail-section">
                    <div class="section-title"><qc-icon name="target" :size="14" /> 多维度评分详情</div>
                    <div class="flex-c-gap-10-mb8-base" v-for="dim in dimensionScoreList" :key="dim.key">
                        <span class="merrill-dim-label">{{ dim.label }}</span>
                        <div class="merrill-dim-track">
                            <div class="merrill-dim-fill" :style="{width: dim.barWidth + '%', background: dim.barColor}"></div>
                        </div>
                        <span class="merrill-dim-value" :style="{color: dim.scoreColor}">+{{ dim.scoreStr }}</span>
                        <span class="text-sm-medium" :style="{color: dim.color}">{{ dim.level }}</span>
                    </div>
                    <div class="warning-note" v-if="merrillData.early_warnings?.length">
                        <b class="color-el-danger"><qc-icon name="alert-triangle" :size="13" /> 早期预警：</b>
                        <span class="inline-mr12" v-for="(w, i) in merrillData.early_warnings" :key="i">{{ w.type || w }}</span>
                    </div>
                </div>

                <!-- 资产配置建议 -->
                <div class="detail-section">
                    <div class="section-title"><qc-icon name="wallet" :size="14" /> 资产配置建议</div>
                    <div class="allocation-grid">
                        <div v-for="(info, asset) in merrillDetailData.allocation" :key="asset" class="allocation-item">
                            <div class="allocation-header">
                                <span class="asset-name">{{ getAssetName(asset) }}</span>
                                <span class="asset-rank" :style="{backgroundColor: getRankColor(info.rank)}">排名 #{{ info.rank }}</span>
                            </div>
                            <div class="allocation-advice">{{ info.advice }}</div>
                            <div class="allocation-return">预期收益：<span>{{ fmtNum(info.expected_return) }}</span></div>
                        </div>
                    </div>
                </div>

                <!-- 行业配置建议 -->
                <div class="detail-section">
                    <div class="section-title"><qc-icon name="factory" :size="14" /> 行业配置建议</div>
                    <div class="sector-list">
                        <div v-for="(advice, index) in merrillDetailData.sector_advice" :key="index" class="sector-item">
                            {{ advice }}
                        </div>
                    </div>
                </div>

                <!-- v3.7.13: 策略建议 -->
                <div v-if="merrillDetailData.strategy_mapping" class="detail-section">
                    <div class="section-title"><qc-icon name="sliders-horizontal" :size="14" /> 策略建议</div>
                    <div class="allocation-grid grid-2col-only">
                        <div class="allocation-item">
                            <div class="allocation-header"><qc-icon name="trophy" :size="14" /> 主推策略</div>
                            <div class="allocation-advice color-token-primary">
                                {{ (merrillDetailData.strategy_mapping.primary || []).join(' · ') }}
                            </div>
                        </div>
                        <div class="allocation-item">
                            <div class="allocation-header"><qc-icon name="pin" :size="14" /> 次选策略</div>
                            <div class="allocation-advice color-el-warning">
                                {{ (merrillDetailData.strategy_mapping.secondary || []).join(' · ') }}
                            </div>
                        </div>
                    </div>
                    <div class="note-box-sm">
                        <qc-icon name="lightbulb" :size="14" /> {{ merrillDetailData.strategy_mapping.rationale }}
                    </div>
                </div>

                <!-- 历史统计 -->
                <div class="detail-section">
                    <div class="section-title"><qc-icon name="scroll-text" :size="14" /> 历史统计</div>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-value">{{ fmtNum(merrillDetailData.historical_stats?.avg_duration_months) }}个月</div>
                            <div class="stat-label">历史平均持续时间</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData.historical_stats?.stock_avg_return != null ? (merrillDetailData.historical_stats.stock_avg_return * 100).toFixed(2) : '—' }}%</div>
                            <div class="stat-label">股票平均年化收益</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData.historical_stats?.bond_avg_return != null ? (merrillDetailData.historical_stats.bond_avg_return * 100).toFixed(2) : '—' }}%</div>
                            <div class="stat-label">债券平均年化收益</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData.historical_stats?.best_sector }}</div>
                            <div class="stat-label">历史表现最佳板块</div>
                        </div>
                    </div>
                </div>

                <!-- 典型历史案例 -->
                <div v-if="merrillDetailData.case_studies?.length" class="detail-section">
                    <div class="section-title"><qc-icon name="book-open" :size="14" /> 典型历史案例</div>
                    <div class="case-list">
                        <div v-for="(cs, index) in merrillDetailData.case_studies" :key="index" class="case-item">
                            <qc-icon name="pin" :size="13" /> {{ cs }}
                        </div>
                    </div>
                </div>

                <!-- 风险提示 -->
                <div class="detail-section risk-section">
                    <div class="section-title"><qc-icon name="alert-triangle" :size="14" /> 风险提示</div>
                    <div class="risk-list">
                        <div v-for="(risk, index) in merrillDetailData.risks" :key="index" class="risk-item">
                            {{ risk }}
                        </div>
                    </div>
                </div>

                <!-- 底部金色装饰 -->
                <div class="merrill-footer-decoration">
                    <div class="gold-gradient-bar"></div>
                    <div class="footer-hint">
                        <span>美林时钟仅供参考，不构成投资建议</span>
                    </div>
                </div>
            </div>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a,computed:e,ref:f,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
        <el-dialog v-model="stockDetailVisible" :title="''" width="800px" class="kline-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :lock-scroll="!embedded"
            :class="{ 'qc-embedded-dialog': embedded }">
            <!-- v3.16 (16.10-fix): 数据未就绪时显示加载态（弹窗已立即打开，避免接口慢导致延迟） -->
            <div v-if="stockDetailLoading && !stockDetail" class="empty-state p-48-0">
                <div class="empty-state-icon-xs"><qc-icon name="loader" :size="24" /></div>
                <div class="text-md-medium-primary">{{ t('detail.loading') }}</div>
                <div class="text-sm-tertiary-mt8">{{ t('detail.loadingHint') }}</div>
            </div>
            <div v-else-if="stockDetail">
                <div class="detail-content">
                    <!-- V5.23: 金色表头块 → 圆角矩形卡片, 与下方「入池历史」行同宽
                         (同处 .detail-content 内边距容器, 宽度天然一致); 评分展示已按用户要求移除 -->
                    <div class="detail-header">
                        <div class="dh-main">
                            <h3 class="text-xl-title">{{ stockDetail.stock }} <span class="text-md-muted">{{ stockDetail.name }}</span></h3>
                            <!-- V5.24: 入池历史并入金色卡片 (原先独占一行) — 与持仓天数同排, 提升信息密度 -->
                            <div class="detail-subtitle dh-meta">
                                <span class="dh-item">{{ t('detail.subtitle', { days: stockDetail.total_days }) }}</span>
                                <template v-if="poolInfo && poolInfo.pool_history && poolInfo.pool_history.first_appear">
                                    <span class="dh-sep">·</span>
                                    <span class="dh-item">首入 <b>{{ poolInfo.pool_history.first_appear }}</b></span>
                                    <span class="dh-sep">·</span>
                                    <span class="dh-item">最近在池 <b>{{ poolInfo.pool_history.last_appear }}</b></span>
                                    <span class="dh-sep">·</span>
                                    <span class="dh-item">累计 <b>{{ poolInfo.pool_history.pooled_days }}</b> 天</span>
                                    <template v-if="poolInfo.pool_history.pool_entries.length > 1">
                                        <span class="dh-sep">·</span>
                                        <span class="dh-item"><b>{{ poolInfo.pool_history.pool_entries.length }}</b> 段</span>
                                    </template>
                                </template>
                                <template v-else-if="poolInfo && poolInfo.pool_history">
                                    <span class="dh-sep">·</span>
                                    <span class="dh-item">从未入池</span>
                                </template>
                            </div>
                        </div>
                        <div class="dh-tags" v-if="poolInfo">
                            <el-tag v-if="poolInfo.source === 'both' || poolInfo.source === 'watchlist'"
                                size="small" type="warning" effect="light"><qc-icon name="star" :size="13" /> 自选</el-tag>
                            <el-tag v-if="poolInfo.source === 'both' || poolInfo.source === 'new_pool'"
                                size="small" type="success" effect="light"><qc-icon name="badge-check" :size="13" /> 入池</el-tag>
                            <el-tag v-if="poolInfo.holding" size="small" type="danger" effect="light">持仓</el-tag>
                        </div>
                    </div>
                    <!-- Tab 切换 -->
                    <div class="flex-gap-6-mb16-wrap">
                        <el-button size="small" :type="stockDetailTab === 'kline' ? 'primary' : ''" @click="stockDetailTab = 'kline'">
                            {{ t('detail.tabKline') }}
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'ai' ? 'primary' : ''" @click="stockDetailTab = 'ai'">
                            {{ t('detail.tabEval') }}
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'chat' ? 'primary' : ''" @click="stockDetailTab = 'chat'">
                            {{ t('detail.tabChat') }}
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'factor' ? 'primary' : ''" @click="stockDetailTab = 'factor'">
                            {{ t('detail.tabFactor') }}
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'performance' ? 'primary' : ''" @click="stockDetailTab = 'performance'">
                            {{ t('detail.tabPerformance') }}
                        </el-button>
                        <div class="flex-1"></div>
                        <el-button size="small" type="primary" @click="doAiEvaluate" :loading="aiLoading">
                            {{ t('detail.evaluate') }}
                        </el-button>
                        <el-button size="small" @click="toggleWatchlist(stockDetail.stock, stockDetail.name)" :type="watchlistCodes.has(stockDetail.stock) ? 'success' : 'primary'">
                            {{ watchlistCodes.has(stockDetail.stock) ? t('detail.inWatch') : t('detail.addWatch') }}
                        </el-button>
                    </div>
                    <!-- 按钮底部进度条 -->
                    <div v-if="aiLoading" class="ai-progress-bar">
                        <div class="ai-progress-fill"></div>
                    </div>
                    <!-- v3.15 (15.3): 阶段指示器 — 与真实 await 联动 + 实时已用秒数 -->
                    <div v-if="aiLoading" class="ai-stage-indicator">
                        <div class="ai-stage-dots-row">
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'fetching' || aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done' }">
                                <span class="ai-stage-icon"><qc-icon name="radio-tower" :size="18" /></span>
                            </div>
                            <div class="ai-stage-line" :class="{ done: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done' }"></div>
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'analyzing' || aiEvalStage === 'done' }">
                                <span class="ai-stage-icon"><qc-icon name="bar-chart-3" :size="18" /></span>
                            </div>
                            <div class="ai-stage-line" :class="{ done: aiEvalStage === 'analyzing' || aiEvalStage === 'done' }"></div>
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'done' }">
                                <span class="ai-stage-icon"><qc-icon name="bot" :size="18" /></span>
                            </div>
                        </div>
                        <div class="ai-stage-label">
                            <span class="ai-stage-text">{{ aiStageText }}</span>
                            <span v-if="aiEvalElapsed > 0" class="ai-stage-elapsed">· 已用时 {{ aiEvalElapsed }}s</span>
                        </div>
                    </div>
                    <!-- v3.15 (15.3): 评估失败提示 + 重试 -->
                    <div v-if="aiEvalError && !aiLoading" class="ai-eval-error">
                        <span class="ai-eval-error-icon"><qc-icon name="alert-triangle" :size="18" /></span>
                        <span class="ai-eval-error-text" :title="aiEvalError">{{ aiEvalError }}</span>
                        <el-button size="small" type="primary" @click="doAiEvaluate">{{ t('detail.retry') }}</el-button>
                    </div>

                    <!-- Tab: K线图表 -->
                    <div v-if="stockDetailTab === 'kline'">
                    <div class="section-title">{{ t('detail.sectionQuote') }}</div>
                    <div class="grid-auto">
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.close') }}</div>
                            <div class="stat-value">{{ (stockDetail.daily_data?.close != null ? stockDetail.daily_data.close.toFixed(2) : '—') }}</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.pctChg') }}</div>
                            <div class="stat-value" :style="{color: stockDetail.daily_data?.pct_chg >= 0 ? 'var(--color-rise)' : 'var(--color-fall)'}">
                                {{ (stockDetail.daily_data?.pct_chg != null ? stockDetail.daily_data.pct_chg.toFixed(2) : '—') }}%
                            </div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.highLow') }}</div>
                            <div class="text-md-semibold">
                                <span class="color-danger">{{ stockDetail.daily_data?.high != null ? stockDetail.daily_data.high.toFixed(2) : '—' }}</span>
                                <span class="color-tertiary-mx4">/</span>
                                <span class="color-primary">{{ stockDetail.daily_data?.low != null ? stockDetail.daily_data.low.toFixed(2) : '—' }}</span>
                            </div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.volume') }}</div>
                            <div class="stat-value text-md">{{ stockDetail.daily_data?.vol != null ? Math.round(stockDetail.daily_data.vol / 10000).toLocaleString() : '—' }}万</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.turnover') }}</div>
                            <div class="stat-value text-md">{{ stockDetail.daily_data?.turnover_rate?.toFixed(2) || '--' }}%</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.amplitude') }}</div>
                            <div class="stat-value text-md">{{ stockDetail.daily_data?.pre_close ? ((stockDetail.daily_data.high - stockDetail.daily_data.low) / stockDetail.daily_data.pre_close * 100).toFixed(2) : '--' }}%</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">{{ t('detail.ma20Dev') }}</div>
                            <div class="stat-value" :style="{fontSize:'var(--font-md)',color:(stockDetail.ma_data?.ma20 && stockDetail.daily_data?.close > stockDetail.ma_data.ma20) ? 'var(--color-rise)' : 'var(--color-fall)'}">{{ (stockDetail.ma_data?.ma20 && stockDetail.daily_data?.close) ? ((stockDetail.daily_data.close - stockDetail.ma_data.ma20) / stockDetail.ma_data.ma20 * 100).toFixed(2) + '%' : '--' }}</div>
                        </div>
                    </div>

                    <!-- K线图区域 -->
                    <div class="section-title">{{ t('detail.sectionKline') }}</div>
                    <div class="kline-container">
                        <div class="flex-between-mb12">
                            <div class="kline-tabs">
                                <button
                                    v-for="tab in klinePeriods"
                                    :key="tab.value"
                                    :class="['kline-tab', {active: currentKlinePeriod === tab.value}]"
                                    @click="switchKlinePeriod(tab.value)"
                                >
                                    {{ tab.label }}
                                </button>
                            </div>
                            <el-button v-if="!stockKlineLoaded" type="primary" size="small" @click="loadStockKline(currentKlinePeriod)" :loading="klineLoading">
                                {{ t('detail.loadKline') }}
                            </el-button>
                        </div>
                        <div v-if="stockKlineLoaded" class="kline-chart" id="stockKlineChart"></div>
                        <!-- V5.4.1 (R1): 分钟数据降级日线提示 -->
                        <el-alert v-if="klineDegradeNote" :title="klineDegradeNote" type="warning" :closable="false" class="mt-8" />
                        <!-- v3.11 (FR-3.11.8): 均线开关（与图表图例双向联动） -->
                        <div v-if="stockKlineLoaded" class="ma-toggle-row">
                            <span class="ma-toggle-label">{{ t('detail.maLabel') }}</span>
                            <button
                                v-for="m in MA_LINES"
                                :key="m"
                                :class="['ma-toggle-btn', { active: klineMaVisible[m] !== false }]"
                                @click="toggleKlineMa(m)"
                            >{{ m }}</button>
                            <span class="ma-toggle-hint">{{ t('detail.crosshairHint') }}</span>
                        </div>
                        <!-- 时间范围快捷按钮 -->
                        <div class="flex-gap-4-mt8-center" v-if="stockKlineLoaded">
                            <el-button size="small" @click="zoomKlineRange(22)">{{ t('detail.range1M') }}</el-button>
                            <el-button size="small" @click="zoomKlineRange(66)">{{ t('detail.range3M') }}</el-button>
                            <el-button size="small" @click="zoomKlineRange(126)">{{ t('detail.range6M') }}</el-button>
                            <el-button size="small" @click="zoomKlineRange(0)">{{ t('detail.rangeAll') }}</el-button>
                        </div>
                        <div v-if="klineLoading" class="kline-loading">
                            <el-icon class="is-loading"><Loading /></el-icon> {{ t('detail.loadingKline') }}
                        </div>
                        <div v-if="!stockKlineLoaded && !klineLoading" class="kline-placeholder">
                            <div class="text-base-tertiary">{{ t('detail.clickToLoadKline') }}</div>
                        </div>
                    </div>

                    <div class="section-title">{{ t('detail.strategyHoldings') }}</div>
                    <div v-for="h in stockDetail.history" :key="h.strategy" class="hold-item">
                        <span class="hold-name">{{ h.strategy_name }}</span>
                        <span class="hold-days">{{ t('detail.holdDays', { days: h.hold_count }) }}</span>
                    </div>
                    </div>  <!-- close kline tab -->

                    <!-- Tab: AI智能评估 -->
                    <div v-if="stockDetailTab === 'ai'">
                        <div v-if="aiResult" class="card mb-4">
                            <div class="card-title m-0-0-16">
                                <span>{{ t('detail.evalTitle') }}</span>
                                <!-- v3.15 (15.3): 模型信息展示 -->
                                <span v-if="aiResult.model_used" class="ai-result-meta" title="模型"><qc-icon name="brain" :size="13" /> {{ aiResult.model_used }}</span>
                                <span v-if="aiResult.model_provider" class="ai-result-meta" title="厂商">{{ aiResult.model_provider }}</span>
                                <span v-if="aiResult.result && aiResult.result.provider && aiResult.result.provider !== (aiResult.model_provider || '')" class="ai-result-meta" title="引擎">{{ aiResult.result.provider }}</span>
                                <span v-if="aiResult.llm_latency_ms" class="ai-result-meta" title="LLM 延迟"><qc-icon name="zap" :size="13" /> {{ aiResult.llm_latency_ms }}ms</span>
                                <span v-if="aiResult.from_cache || (aiResult.llm_latency_ms === 0 && !aiResult.model_used)" class="ai-result-meta" title="命中缓存">{{ t('detail.cachedResult') }}</span>
                                <span class="flex-1"></span>
                                <el-button size="small" @click="copyAiReport">{{ t('detail.copyReport') }}</el-button>
                                <el-button size="small" type="primary" @click="doAiEvaluate" :loading="aiLoading">{{ t('detail.reevaluate') }}</el-button>
                            </div>
                            <div class="flex-c-gap-24-mb20-wrap">
                                <div class="ring-box">
                                    <svg class="rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border-light)" stroke-width="8"/>
                                        <circle class="transition-08" cx="50" cy="50" r="42" fill="none" :stroke="levelRingColor" stroke-width="8" stroke-linecap="round" :stroke-dasharray="(aiResult.result.total_score/100)*264+' 264'"/>
                                    </svg>
                                    <div class="ring-center-text">
                                        <div class="ring-value">{{ fmtNum(aiResult.result.total_score, 1) }}</div>
                                        <div class="text-xs-tertiary">{{ t('detail.scoreUnit') }}</div>
                                    </div>
                                </div>
                                <div class="flex-1-min180">
                                    <div class="text-xl-bold-primary-mb8">{{ aiResult.result.level }}</div>
                                    <div class="text-md-secondary-lh">{{ aiResult.result.detailed_report || '' }}</div>
                                    <!-- 评估历史对比 -->
                                    <div class="inline-chip" v-if="evalHistoryComparison">
                                        <qc-icon name="trending-up" :size="13" /> 上次{{ fmtNum(evalHistoryComparison.prevScore, 1) }}分 → 本次{{ fmtNum(evalHistoryComparison.currScore, 1) }}分
                                        <span :style="{color:evalHistoryComparison.diff>0?'var(--el-success)':evalHistoryComparison.diff<0?'var(--el-danger)':'var(--text-tertiary)'}">
                                            {{ evalHistoryComparison.diff>0?'↑':evalHistoryComparison.diff<0?'↓':'→' }}{{ fmtNum(Math.abs(evalHistoryComparison.diff), 1) }}
                                        </span>
                                    </div>
                                    <!-- 操作检查清单 -->
                                    <div class="meta-tags" v-if="checklistItems.length">
                                        <span class="text-xs-secondary" v-for="c in checklistItems" :key="c.label"><qc-icon :name="c.icon" :size="13" /> {{ c.label }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-card">
                                <div class="panel-title"><qc-icon name="search-check" :size="14" /> 九维度评分</div>
                                <div class="flex-c-gap-10-mb6" v-for="(score,name) in aiResult.result.dimensions" :key="name">
                                    <span class="dim-label">{{ name }}</span>
                                    <div class="dim-track">
                                        <div :style="{width:score+'%',height:'100%',background:score>=70?'var(--el-success)':score>=50?'var(--el-warning)':'var(--el-danger)',borderRadius:'6px',transition:'width 0.5s'}"></div>
                                    </div>
                                    <span class="dim-value" :style="{color:score>=70?'var(--el-success)':score>=50?'var(--el-warning)':'var(--el-danger)'}">{{ fmtNum(score, 0) }}</span>
                                </div>
                            </div>
                            <div class="ai-eval-grid grid-3col-gap12">
                                <div class="factor-card-success">
                                    <div class="factor-title-success">▸ 优势</div>
                                    <div class="detail-text-primary" v-for="s in (aiResult?.result?.analysis?.strengths || [])" :key="s">• {{ s }}</div>
                                    <div class="muted-sm" v-if="!(aiResult?.result?.analysis?.strengths || []).length">-</div>
                                </div>
                                <div class="factor-card-gold">
                                    <div class="factor-title-gold"><qc-icon name="alert-triangle" :size="14" /> 风险</div>
                                    <div class="detail-text-primary" v-for="w in (aiResult?.result?.analysis?.weaknesses || [])" :key="w">• {{ w }}</div>
                                    <div class="muted-sm" v-if="!(aiResult?.result?.analysis?.weaknesses || []).length">-</div>
                                </div>
                                <div class="factor-card-info">
                                    <div class="factor-title-info"><qc-icon name="lightbulb" :size="14" /> 建议</div>
                                    <div class="detail-text-primary" v-for="s in (aiResult?.result?.analysis?.suggestions || [])" :key="s">• {{ s }}</div>
                                    <div class="muted-sm" v-if="!(aiResult?.result?.analysis?.suggestions || []).length">-</div>
                                </div>
                            </div>
                            <!-- 信号归因条 -->
                            <div class="factor-note-box" v-if="aiResult.result.signal_attribution">
                                <div class="panel-title-mb8"><qc-icon name="bar-chart-3" :size="14" /> 信号归因</div>
                                <div class="flex-gap-8-wrap">
                                    <span class="chip-info" v-if="aiResult.result.signal_attribution.technical">技术面 {{ fmtNum(aiResult.result.signal_attribution.technical, 0) }}%{{ aiResult.result.signal_attribution.technical_driver ? ' · '+aiResult.result.signal_attribution.technical_driver : '' }}</span>
                                    <span class="chip-success" v-if="aiResult.result.signal_attribution.fundamentals">基本面 {{ fmtNum(aiResult.result.signal_attribution.fundamentals, 0) }}%{{ aiResult.result.signal_attribution.fundamental_driver ? ' · '+aiResult.result.signal_attribution.fundamental_driver : '' }}</span>
                                    <span class="gold-chip" v-if="aiResult.result.signal_attribution.capital_flow">资金面 {{ fmtNum(aiResult.result.signal_attribution.capital_flow, 0) }}%{{ aiResult.result.signal_attribution.capital_flow_driver ? ' · '+aiResult.result.signal_attribution.capital_flow_driver : '' }}</span>
                                    <span class="gold-chip" v-if="!aiResult.result.signal_attribution.capital_flow && aiResult.result.signal_attribution.market_sentiment">资金面 {{ fmtNum(aiResult.result.signal_attribution.market_sentiment, 0) }}%</span>
                                </div>
                                <div class="text-sm-secondary-mt6" v-if="aiResult.result.signal_attribution.strongest_bullish">
                                    <span class="color-success">●</span> 最强看多: {{ aiResult.result.signal_attribution.strongest_bullish }}
                                    <span class="ml-12" v-if="aiResult.result.signal_attribution.strongest_bearish"><qc-icon name="trending-down" :size="13" /> 最强看空: {{ aiResult.result.signal_attribution.strongest_bearish }}</span>
                                </div>
                            </div>
                            <!-- 狙击点卡片 -->
                            <div class="grid-3col-gap10-mt12" v-if="aiResult.result.analysis?.sniper_points">
                                <div class="factor-mini-info">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="target" :size="13" /> 理想买入</div>
                                    <div class="factor-mini-val-info">{{ fmtNum(aiResult.result.analysis.sniper_points.ideal_buy) }}</div>
                                </div>
                                <div class="factor-mini-danger">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="octagon-x" :size="13" /> 止损</div>
                                    <div class="factor-mini-val-danger">{{ fmtNum(aiResult.result.analysis.sniper_points.stop_loss) }}</div>
                                </div>
                                <div class="factor-mini-success">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="flag" :size="13" /> 目标</div>
                                    <div class="factor-mini-val-success">{{ fmtNum(aiResult.result.analysis.sniper_points.take_profit) }}</div>
                                </div>
                            </div>
                            <!-- 仓位建议 -->
                            <div class="grid-2col-gap10-mt12" v-if="aiResult.result.analysis?.position_advice">
                                <div class="panel-box">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="user" :size="13" /> 空仓者</div>
                                    <div class="text-sm-primary">{{ aiResult.result.analysis.position_advice.no_position }}</div>
                                </div>
                                <div class="panel-box">
                                    <div class="text-xs-tertiary-mb4"><qc-icon name="package" :size="13" /> 持仓者</div>
                                    <div class="text-sm-primary">{{ aiResult.result.analysis.position_advice.has_position }}</div>
                                </div>
                            </div>
                            <!-- 数据质量提示 -->
                            <div class="factor-empty-note" v-if="aiResult.result.data_quality_note">
                                <qc-icon name="clipboard-list" :size="14" /> {{ aiResult.result.data_quality_note }}
                            </div>
                        </div>
                        <div class="text-center-tertiary-pad40" v-else>
                            <div class="text-3xl-mb12"><qc-icon name="bot" :size="36" /></div>
                            <div v-if="aiResult">
                                <div class="mb-8">最近评估：{{ aiResult.result.level }}</div>
                                <div class="text-sm"><qc-icon name="clock" :size="13" /> {{ (lastEvalTime || aiResult.evaluate_time || '').split('T')[0] }} {{ ((lastEvalTime || aiResult.evaluate_time || '').split('T')[1] || '').split('.')[0] }}</div>
                            </div>
                            <div v-else>{{ t('detail.noEvalYet') }}</div>
                        </div>
                    </div>  <!-- close ai tab -->

                    <!-- Tab: AI 问股对话 -->
                    <div v-if="stockDetailTab === 'chat'">
                        <div class="card mb-12">
                            <div class="card-title m-0-0-12"><qc-icon name="message-circle" :size="14" /> AI 智能问股</div>
                            <!-- Quick prompts -->
                            <div class="flex-wrap-gap-6-mb12">
                                <el-button size="small" @click="askStockQuick('trend')"><qc-icon name="trending-up" :size="13" /> 趋势分析</el-button>
                                <el-button size="small" @click="askStockQuick('fundamental')"><qc-icon name="bar-chart-3" :size="13" /> 基本面</el-button>
                                <el-button size="small" @click="askStockQuick('comprehensive')"><qc-icon name="search-check" :size="13" /> 综合分析</el-button>
                            </div>
                            <!-- Chat messages -->
                            <!-- v3.16 (16.8): 历史消息惰性加载提示 -->
                            <div class="text-center-tertiary-pad12" v-if="stockChatLoading && stockChatMessages.length === 0"><qc-icon name="loader" :size="14" /> 加载历史消息中...</div>
                            <div class="scroll-300" v-else-if="stockChatMessages.length> 0">
                                <div class="mb-10" v-for="(msg, mi) in stockChatMessages" :key="mi">
                                    <div class="text-right" v-if="msg.role==='user'">
                                        <span class="chat-bubble-user">{{ msg.content }}</span>
                                    </div>
                                    <div class="flex-gap-6" v-else>
                                        <span><qc-icon name="bot" :size="16" /></span>
                                        <div class="chat-scroll" v-html="renderMarkdown(msg.content)"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Input -->
                            <div class="flex-gap-8">
                                <el-input class="flex-1" v-model="stockChatInput" placeholder="输入问题，如：这股趋势怎么样" @keyup.enter="askStockSend" size="small"/>
                                <el-button type="primary" size="small" @click="askStockSend" :loading="stockChatLoading">发送</el-button>
                            </div>
                            <div class="text-xs-danger-mt6" v-if="stockChatError">{{ stockChatError }}</div>
                        </div>
                    </div>  <!-- close chat tab -->

                    <!-- Tab: 多因子体检 -->
                    <div v-if="stockDetailTab === 'factor'">
                        <!-- V5.3.0 (T-5.3.1.2): 收敛为统一状态面板 -->
                        <qc-state-panel v-if="factorLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="factorError || !factorGroups.length" type="empty" icon="dna" :title="t('detail.factorEmpty')"></qc-state-panel>
                        <div v-else>
                            <div v-if="factorSummary && factorSummary.available" class="factor-summary">
                                <span class="factor-summary-count">{{ t('detail.factorCount', { count: factorSummary.available }) }}</span>
                                <span v-if="factorSummary.categories && factorSummary.categories.length" class="factor-summary-cats">{{ factorSummary.categories.join(' / ') }}</span>
                            </div>
                            <!-- v3.18 (FR-3.18.7): 因子有效性 IC/IR 标注 (数据不可达优雅降级) -->
                            <div v-if="factorIc !== null" class="factor-summary">
                                <span class="factor-summary-count">因子有效性</span>
                                <template v-if="Object.keys(factorIc).length">
                                    <span v-for="(r, fk) in factorIc" :key="fk" class="factor-summary-cats">{{ fk }}: {{ factorIcGrade(r) }}</span>
                                </template>
                                <span v-else class="factor-summary-cats">数据不可达</span>
                            </div>
                            <div v-for="g in factorGroups" :key="g.category" class="factor-group">
                                <div class="factor-group-title">{{ g.category }}</div>
                                <div class="factor-grid">
                                    <div v-for="f in g.items" :key="f.key" class="factor-card">
                                        <div class="factor-label">{{ f.label }}</div>
                                        <div class="factor-value-row">
                                            <span class="factor-value">{{ f.value != null ? f.value : '—' }}<span v-if="f.unit" class="factor-unit">{{ f.unit }}</span></span>
                                            <span v-if="f.semantic" class="factor-semantic" :class="factorSemClass(f.semantic)">{{ f.semantic }}</span>
                                            <span v-else class="factor-semantic factor-sem-none">{{ t('detail.factorNoData') }}</span>
                                        </div>
                                        <div v-if="f.percentile != null" class="factor-percentile">{{ t('detail.factorPercentile', { pct: Math.round(f.percentile * 100) }) }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  <!-- close factor tab -->
                    <div v-if="stockDetailTab === 'performance'">
                        <!-- V5.3.10: 业绩预告/快报 (sxsc forecast/express) -->
                        <qc-state-panel v-if="perfLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="perfError" type="empty" icon="bar-chart" :title="t('detail.perfEmpty')"></qc-state-panel>
                        <div v-else-if="perfForecast.length || perfExpress.length">
                            <div v-if="perfForecast.length" class="perf-block">
                                <div class="perf-block-title">{{ t('detail.perfForecast') }}</div>
                                <el-table :data="perfForecast" size="small" border>
                                    <el-table-column prop="ann_date" :label="t('detail.perfAnnDate')" width="100"></el-table-column>
                                    <el-table-column prop="end_date" :label="t('detail.perfEndDate')" width="100"></el-table-column>
                                    <el-table-column prop="type" :label="t('detail.perfType')" width="80"></el-table-column>
                                    <el-table-column :label="t('detail.perfChange')">
                                        <template #default="{ row }">
                                            <span v-if="row.p_change_min != null">{{ row.p_change_min }}% ~ {{ row.p_change_max }}%</span>
                                            <span v-else>—</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column :label="t('detail.perfNetProfit')">
                                        <template #default="{ row }">
                                            <span v-if="row.net_profit_min != null">{{ fmtY(row.net_profit_min) }} ~ {{ fmtY(row.net_profit_max) }}</span>
                                            <span v-else>—</span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div v-if="perfExpress.length" class="perf-block">
                                <div class="perf-block-title">{{ t('detail.perfExpress') }}</div>
                                <el-table :data="perfExpress" size="small" border>
                                    <el-table-column prop="ann_date" :label="t('detail.perfAnnDate')" width="100"></el-table-column>
                                    <el-table-column prop="end_date" :label="t('detail.perfEndDate')" width="100"></el-table-column>
                                    <el-table-column prop="revenue" :label="t('detail.perfRevenue')">
                                        <template #default="{ row }"><span v-if="row.revenue != null">{{ fmtY(row.revenue) }}</span><span v-else>—</span></template>
                                    </el-table-column>
                                    <el-table-column prop="n_income" :label="t('detail.perfIncome')">
                                        <template #default="{ row }"><span v-if="row.n_income != null">{{ fmtY(row.n_income) }}</span><span v-else>—</span></template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </div>
                        <qc-state-panel v-else type="empty" icon="bar-chart" :title="t('detail.perfEmpty')"></qc-state-panel>
                    </div>
                </div>
            </div>
        </el-dialog>
    `,setup(){const d=a("qcState");if(!d)return{};const p={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},A=e(()=>p[d.aiEvalStage.value]||""),g=e(()=>{const I=d.aiResult&&d.aiResult.value&&d.aiResult.value.result&&d.aiResult.value.result.level;return I?I==="强烈推荐"||I==="推荐"?"var(--el-success)":I==="谨慎推荐"?"var(--el-warning)":I==="中性"||I==="观望"?"var(--text-secondary)":I==="评估失败"||I==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function r(I){const V=document.createElement("textarea");V.value=I,V.style.position="fixed",V.style.opacity="0",document.body.appendChild(V),V.select(),document.execCommand("copy"),document.body.removeChild(V)}async function w(){const I=d.aiResult&&d.aiResult.value;if(!I||!I.result)return;const V=I.result.dimensions||{},se=Object.entries(V).map(([ee,j])=>`${ee} ${Math.round(j)}分`).join(`
`),Y=`【AI 智能评估】${I.result.level||""} ${I.result.total_score!=null?I.result.total_score:"—"}分
模型：${I.model_used||I.result.provider||"—"}

${I.result.detailed_report||""}

九维度评分：
${se||"无"}`;try{await navigator.clipboard.writeText(Y),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{r(Y),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const i=f(!1),S=f(!1),b=f(null),M=f([]),_={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function z(I){return _[I]||"factor-sem-none"}async function F(){const I=d.stockDetail.value&&d.stockDetail.value.stock;if(I){i.value=!0,S.value=!1,M.value=[],b.value=null;try{const V=d.selectedDate.value?`?date=${d.selectedDate.value}`:"",se=await fetch(`/api/calendar/stock/${I}/factors${V}`).then(H=>H.json()),Y=se&&Array.isArray(se.factors)?se.factors:[],ee=[],j={};Y.forEach(H=>{j[H.category]||(j[H.category]={category:H.category,items:[]},ee.push(j[H.category])),j[H.category].items.push(H)}),M.value=ee,b.value=se&&se.summary||null}catch{S.value=!0}finally{i.value=!1}}}t(d.stockDetailTab,I=>{I==="factor"&&d.stockDetail.value&&d.stockDetailVisible.value&&(F(),c())});const C=f(null);async function c(){try{const I=await fetch("/api/market/factor-ic").then(V=>V.json());C.value=I&&I.success&&I.data?I.data:{}}catch{C.value={}}}function n(I){if(!I||!I.n5)return"—";const V=I.n5.icir!=null?"ICIR "+I.n5.icir:"ICIR —";return I.n5.grade+" ("+V+")"}const u=f(!1),l=f(!1),x=f([]),E=f([]);function O(I){if(I==null)return"—";const V=Number(I);return Number.isNaN(V)?"—":Math.abs(V)>=1e8?(V/1e8).toFixed(2)+"亿":Math.abs(V)>=1e4?(V/1e4).toFixed(1)+"万":String(V)}async function X(){const I=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(I){u.value=!0,l.value=!1;try{const V=await fetch("/api/market/performance/"+encodeURIComponent(I)).then(se=>se.json());V&&V.success?(x.value=V.forecast||[],E.value=V.express||[]):l.value=!0}catch{l.value=!0}finally{u.value=!1}}}t(d.stockDetailTab,I=>{I==="performance"&&X()});const R=f(null);async function q(){const I=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(!I){R.value=null;return}try{const V=await fetch("/api/focus/stock/"+encodeURIComponent(I)+"/pool").then(se=>se.json());R.value=V&&V.success&&V.data?V.data:null}catch{R.value=null}}return t(()=>d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock,I=>{I&&d.stockDetailVisible.value?q():R.value=null}),t(()=>d.stockDetailVisible.value,I=>{I?q():R.value=null}),{...d,aiStageText:A,levelRingColor:g,copyAiReport:w,factorLoading:i,factorError:S,factorSummary:b,factorGroups:M,factorSemClass:z,loadFactorPanel:F,factorIc:C,loadFactorIc:c,factorIcGrade:n,perfLoading:u,perfError:l,perfForecast:x,perfExpress:E,fmtY:O,loadPerformance:X,poolInfo:R,loadPoolInfo:q}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
      <div class="ai-history-item border-bottom-light" :class="{'selected': isSelected}">
        <div @click.stop="toggleSelect" class="history-checkbox">
          <div class="checkbox-inner" :class="{'checked': isSelected}">{{ isSelected ? '✓' : '' }}</div>
        </div>
        <div class="history-content" @click="view">
          <div class="history-header">
            <div class="stock-info">
              <span class="stock-code">{{ item.stock_code }}</span>
              <span class="stock-name">{{ item.stock_name }}</span>
              <template v-if="type === 'history'">
                <span @click.stop="toggleWatchlist(item.stock_code, item.stock_name)" tabindex="0" role="button"
                      :aria-label="watchState.label" :title="watchState.label" class="history-star"
                      @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="star" :size="14" :class="watchState.isWatched ? 'is-watched' : ''" /></span>
                <span v-if="evaluatedCodes.has(item.stock_code)" title="已AI评估" class="history-flag"><qc-icon name="bot" :size="14" /></span>
                <span v-if="klineLoadedCodes.has(item.stock_code)" title="已加载K线" class="history-flag"><qc-icon name="trending-up" :size="14" /></span>
              </template>
            </div>
            <span v-if="type === 'history'" class="score-badge-small" :style="{background: levelBg(item.result.level), color: levelColor(item.result.level)}">
              <span class="score-num">{{ fmtNum(item.result.total_score) }}</span>
              <span class="score-level">{{ item.result.level }}</span>
            </span>
            <span v-else class="score-badge-small chat-badge">
              <span class="score-num">{{ item.msg_count }}</span>
              <span class="score-level">条消息</span>
            </span>
          </div>
          <div class="history-footer">
            <span class="history-time"><qc-icon name="clock" :size="14" /> {{ timeText }}</span>
            <span class="history-provider"><qc-icon :name="providerIcon" :size="14" /> {{ providerText }}</span>
            <span v-if="type === 'history' && showDims" class="history-dims"><qc-icon name="flask-conical" :size="14" /> {{ dimsText }}</span>
          </div>
        </div>
        <div class="history-actions">
          <el-button size="small" type="danger" text @click.stop="remove" aria-label="删除记录"><qc-icon name="trash-2" :size="14" /></el-button>
        </div>
      </div>
    `,setup(f){const t=e("qcState");if(!t)return{};const d=a(()=>f.type==="history"?t.selectedHistoryIds.value.includes(f.item.id):t.selectedChatIds.value.includes(f.item.id)),p=a(()=>{const _=t.watchlistCodes.value.has(f.item.stock_code);return{icon:"star",isWatched:_,label:_?"取消收藏":"加入收藏"}}),A=a(()=>f.type==="history"?"bot":"message-circle"),g=a(()=>{var _;return f.type==="history"?((_=f.item.result)==null?void 0:_.provider)||"":f.item.first_msg||""}),r=a(()=>{var _,z;return`${((z=(_=f.item.result)==null?void 0:_.dimensions)==null?void 0:z.length)||9}维度分析`}),w=a(()=>{var z,F;const _=f.type==="history"?f.item.evaluate_time:f.item.created_at||"";return _?f.timeFormat==="datetime"?f.type==="history"?`${_.split("T")[0]} ${(_.split("T")[1]||"").split(".")[0]}`:`${_.split("T")[0]} ${((z=_.split("T")[1])==null?void 0:z.substring(0,5))||""}`:f.type==="history"?(_.split("T")[1]||"").split(".")[0]||_:((F=_.split("T")[1])==null?void 0:F.substring(0,5))||"":""});function i(){f.type==="history"?t.toggleSelectHistory(f.item.id):t.toggleSelectChat(f.item.id)}function S(){f.type==="history"?t.viewAiResult(f.item):t.viewChatSession(f.item)}async function b(){try{await ElementPlus.ElMessageBox.confirm(f.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}f.type==="history"?t.deleteSingleHistory(f.item.id):t.deleteChatSession(f.item.id)}function M(_,z){t.toggleWatchlist(_,z)}return{isSelected:d,watchState:p,providerIcon:A,providerText:g,dimsText:r,timeText:w,toggleSelect:i,view:S,remove:b,toggleWatchlist:M,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const d=["买入","持有","观望","减仓","卖出"],p={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},A={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},g=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],r={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},w=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function i(b){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(b).then(z=>z.json?z.json():z)}function S(){const b=new Date,M=_=>_<10?"0"+_:""+_;return b.getFullYear()+"-"+M(b.getMonth()+1)+"-"+M(b.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
      <div>
        <!-- 今日概览卡 -->
        <div class="card mb-4">
          <div class="card-title"><qc-icon name="target" :size="14" /> 重点跟踪 · 今日概览
            <span class="card-title-hint" v-if="latestNote">{{ latestNote }}</span>
            <span class="card-title-hint" v-if="baseNote">{{ baseNote }}</span>
          </div>
          <div class="flex-between mb-8">
            <div class="flex-gap-8">
              <el-date-picker v-model="curDate" type="date" size="small"
                value-format="YYYY-MM-DD" placeholder="选择日期" @change="loadAll"></el-date-picker>
              <el-radio-group v-model="session" size="small" @change="loadResults">
                <el-radio-button v-for="s in SESSIONS" :key="s.v" :value="s.v">{{ s.l }}</el-radio-button>
              </el-radio-group>
            </div>
            <div class="color-secondary">共 {{ results.total }} 只 · 按当前登记持仓派生</div>
          </div>
          <!-- V5.4.1 (R3): 5档动作分布可视化 — 堆叠条 + 图例 (主题令牌色) -->
          <div v-if="results.total > 0" class="focus-action-bar-wrap">
            <div class="focus-action-bar">
              <div v-for="a in ACTION_ORDER" :key="a"
                   class="focus-action-seg" :class="'focus-action-' + a"
                   :style="{ width: actionPct(a) }"
                   :title="a + ': ' + (results.actions[a] || 0)"></div>
            </div>
            <div class="focus-action-legend">
              <span v-for="a in ACTION_ORDER" :key="a" class="focus-action-legend-item">
                <span class="focus-action-dot" :class="'focus-action-' + a"></span>
                {{ a }} <b>{{ results.actions[a] || 0 }}</b>
              </span>
            </div>
          </div>
          <div v-else class="flex-gap-8">
            <el-tag v-for="a in ACTION_ORDER" :key="a" :type="tagType(a)" size="small" effect="light">
              <span class="qc-status-dot" :class="ACTION_DOT[a]"></span> {{ a }}: 0
            </el-tag>
          </div>
        </div>

        <!-- 当日多时点结果 -->
        <div class="card mb-4">
          <div class="card-title"><qc-icon name="bar-chart-3" :size="14" /> 当日多时点结果
            <span class="card-title-hint">时段: {{ sessionLabel }} · 点击行查看右栏详情</span>
          </div>
          <div v-if="loading" class="color-secondary">加载中…</div>
          <div v-else-if="results.rows.length === 0" class="color-secondary">
            该日期/时段暂无评估结果（多时点评估由调度执行, 盘前 09:00 / 盘后 20:00 必做）
          </div>
          <div v-else>
            <!-- V5.19 (F6): 中栏档位分组列表 + 右栏详情工作区 (弹窗模式时仅列表全宽, 面板不渲染) -->
            <qc-detail-split :enabled="detailSplitEnabled">
            <template #list>
            <!-- V5.4.2 (FR): 按推荐档位归类 (强烈推荐→观望), 组内评分降序 — 后端 results.groups 已就绪 -->
            <template v-for="(rows, lv) in displayGroups" :key="lv">
              <div class="focus-tier-header">
                <span class="focus-tier-emoji"><span class="qc-status-dot" :class="TIER_DOT[lv] || 'is-info'"></span></span>
                <span class="focus-tier-name">{{ lv }}</span>
                <span class="color-secondary">({{ rows.length }})</span>
              </div>
              <div v-for="row in rows" :key="row.stock_code" class="focus-row"
                :class="{ 'is-active': detailSplitEnabled && stockDetail && stockDetail.stock === row.stock_code }"
                @click="openStockDetail(row.stock_code)" tabindex="0" role="button"
                @keydown.enter.prevent="openStockDetail(row.stock_code)">
                <!-- V5.15 (F5): 行结构对齐「关注」风格 — 状态点|名称(含入池徽章)|档位|评分|方向|操作 分列 -->
                <span class="focus-row-status"><span class="qc-status-dot" :class="ACTION_DOT[row.action] || 'is-info'"></span></span>
                <span class="focus-row-name">{{ row.stock_name }}
                  <span class="color-secondary">({{ row.stock_code }})</span>
                  <!-- V5.4.2 (FR): 入池状态徽标 — 新入池/在池/已出池 + 自选/持仓 -->
                  <span v-if="poolStatus[row.stock_code]" class="focus-row-badges">
                    <el-tag v-if="poolStatus[row.stock_code].source === 'both' || poolStatus[row.stock_code].source === 'watchlist'"
                      size="small" type="warning" effect="light" class="focus-badge"><qc-icon name="star" :size="14" /> 自选</el-tag>
                    <el-tag v-if="poolStatus[row.stock_code].pool_state === 'new_pool'"
                      size="small" type="success" effect="light" class="focus-badge"><qc-icon name="sparkles" :size="14" /> 新入池</el-tag>
                    <el-tag v-else-if="poolStatus[row.stock_code].pool_state === 'in_pool'"
                      size="small" type="primary" effect="light" class="focus-badge"><qc-icon name="map-pin" :size="14" /> 在池</el-tag>
                    <el-tag v-else-if="poolStatus[row.stock_code].pool_state === 'exited'"
                      size="small" type="warning" effect="light" class="focus-badge"><qc-icon name="log-out" :size="14" /> 已出池</el-tag>
                    <el-tag v-if="poolStatus[row.stock_code].holding" size="small" type="danger" effect="light" class="focus-badge">持仓</el-tag>
                  </span>
                </span>
                <span class="focus-row-tier"><el-tag :type="tagType(row.action)" size="small">{{ row.action }}</el-tag></span>
                <span class="focus-row-score">评分 {{ fmtScore(row.total_score) }}</span>
                <span class="focus-row-dir">{{ row.direction || '震荡' }}</span>
                <!-- V5.26: 行尾圆形「打开详情」按钮已移除 —— 整行点击即打开,
                     且右栏 (qc-detail-split #pane) 默认已展示详情, 该按钮是重复入口 -->
              </div>
            </template>
            </template>
            <template #pane>
              <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
            </template>
            </qc-detail-split>
          </div>
        </div>

        <!-- 历史记录 -->
        <div class="card mb-4">
          <div class="card-title"><qc-icon name="history" :size="14" /> 历史记录 <span class="card-title-hint">当日时段分组</span></div>
          <div v-if="Object.keys(history.sessions || {}).length === 0" class="color-secondary">
            该日期暂无历史评估记录
          </div>
          <div v-else class="flex-gap-8">
            <el-tag v-for="(cnt, s) in history.sessions" :key="s" size="small" type="info">
              {{ SESSION_LABELS[s] || s }}: {{ cnt }} 只
            </el-tag>
          </div>
          <div class="mt-8">
            <div class="color-secondary mb-4">单股历史对比（不同时点/日期变化）</div>
            <div class="flex-gap-8">
              <el-input v-model="stockCode" size="small" placeholder="输入代码, 如 601985.SH"
                style="width:220px" @keyup.enter="loadStockHistory"></el-input>
              <el-button size="small" @click="loadStockHistory">查询</el-button>
            </div>
            <div v-if="stockHistory && stockHistory.length" class="mt-8">
              <div v-for="h in stockHistory" :key="h.trade_date + h.session" class="focus-row-sm">
                {{ h.trade_date }} · {{ SESSION_LABELS[h.session] || h.session }} ·
                {{ h.level || '—' }} · 评分 {{ fmtScore(h.total_score) }} ·
                {{ h.direction || '震荡' }}
                <span class="color-secondary">({{ h.model_provider }})</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 效果块 -->
        <div class="card">
          <div class="card-title"><qc-icon name="trending-up" :size="14" /> 评估效果 <span class="card-title-hint">历史命中率（决策复盘）</span></div>
          <div v-if="trackLoading" class="color-secondary">加载中…</div>
          <div v-else class="flex-gap-8">
            <el-tag v-for="w in TRACK_WINDOWS" :key="w.key" size="small" :type="rateTagType(w.key)">
              {{ w.label }}: {{ fmtRate(w.key) }}
            </el-tag>
          </div>
          <div v-if="trackNote" class="color-secondary mt-8">{{ trackNote }}</div>
        </div>
      </div>`,setup(){const b=t("qcState"),M=a(S()),_=a("after_close"),z=a({rows:[],actions:{},total:0,groups:{}}),F=a({sessions:{},total:0}),C=a(null),c=a(!1),n=a(""),u=a(!1),l=a([]),x=a(""),E=a(null),O={},X=a({});let R=0;const q=a(null),I=e(function(){const P=z.value&&z.value.groups||{};return Object.keys(P).length?P:z.value&&z.value.rows&&z.value.rows.length?{全部:z.value.rows}:{}}),V=e(function(){const P=q.value;return!P||!P.date||P.date!==M.value?"":"已加载最近一次评估: "+P.date+" · "+(r[P.session]||P.session)}),se=e(function(){const P=z.value&&z.value.base_date;return P?P===M.value?"评分范围: "+P+" 收盘池 + 自选":"评分范围: "+P+" 收盘池(前一交易日算好) + 自选":""});function Y(P){if(P==null)return"—";const G=Number(P);return G===Math.floor(G)?String(G):G.toFixed(1)}function ee(P){const G=z.value.total||0,re=(z.value.actions||{})[P]||0;if(!G)return"0%";const pe=re/G*100;return pe>0&&pe<4?"4%":pe.toFixed(1)+"%"}function j(P){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[P]||"info"}function H(P){const G=C.value&&C.value.overall&&C.value.overall[P]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"info":G.rate>=60?"success":G.rate>=40?"warning":"danger"}function N(P){const G=C.value&&C.value.overall&&C.value.overall[P]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"样本不足":G.rate.toFixed(1)+"% ("+G.total+" 样本)"}function k(){return r[_.value]||_.value}function D(P){const G=l.value.indexOf(P);G>=0?l.value.splice(G,1):l.value.push(P)}function ce(P){if(!P||!P.raw_json)return{};if(O[P.stock_code+P.session+P.trade_date])return O[P.stock_code+P.session+P.trade_date];let G={};try{G=JSON.parse(P.raw_json)||{}}catch{G={}}return O[P.stock_code+P.session+P.trade_date]=G,G}async function U(){try{const P=await i("/api/focus/latest"),G=P&&P.success&&P.data;G&&G.date&&(q.value=G,M.value=G.date,G.session&&(_.value=G.session))}catch(P){console.warn("[focus] 最近一次评估解析失败:",P)}}async function y(){u.value=!0;try{const P=await i("/api/focus/results?date="+M.value+"&session="+_.value);z.value=P&&P.success&&P.data||{rows:[],actions:{},total:0,groups:{}},o((z.value.rows||[]).map(function(G){return G.stock_code}))}catch(P){console.warn("[focus] 结果加载失败:",P),z.value={rows:[],actions:{},total:0,groups:{}}}finally{u.value=!1}}async function o(P){const G=X.value||{},re=(P||[]).filter(function(J){return J&&!G[J]});if(!re.length)return;const pe=++R,de=re.map(function(J){return i("/api/focus/stock/"+encodeURIComponent(J)+"/pool?date="+M.value).then(function(oe){oe&&oe.success&&oe.data?G[J]=oe.data:G[J]={stock_code:J,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){G[J]={stock_code:J,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(de)}catch{}pe===R&&(X.value=Object.assign({},G))}function T(P){const G=b&&b.showStockDetail;if(typeof G=="function"){G(P);return}const pe=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;pe&&pe.info("请从其他页面打开股票详情: "+P)}async function m(){try{const P=await i("/api/focus/history?date="+M.value);F.value=P&&P.success&&P.data||{sessions:{},total:0}}catch(P){console.warn("[focus] 历史加载失败:",P),F.value={sessions:{},total:0}}}async function W(){c.value=!0;try{const P=await i("/api/ai/track");P&&P.success&&P.data?(C.value=P.data,n.value=(P.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):C.value=null}catch(P){console.warn("[focus] 效果块加载失败:",P),C.value=null}finally{c.value=!1}}async function ue(){const P=(x.value||"").trim();if(P){E.value=null;try{const G=await i("/api/focus/stock/"+encodeURIComponent(P));E.value=G&&G.success&&G.data&&G.data.rows||[]}catch(G){console.warn("[focus] 单股历史加载失败:",G),E.value=[]}}}async function Z(){await y(),await m(),await W()}return f(async function(){await U(),await Z()}),{curDate:M,session:_,results:z,history:F,track:C,trackLoading:c,trackNote:n,detailSplitEnabled:b.detailSplitEnabled,stockDetail:b.stockDetail,loading:u,expanded:l,stockCode:x,stockHistory:E,SESSIONS:g,ACTION_ORDER:d,TRACK_WINDOWS:w,ACTION_DOT:p,TIER_DOT:A,SESSION_LABELS:r,displayGroups:I,latestNote:V,baseNote:se,sessionLabel:k,fmtScore:Y,tagType:j,rateTagType:H,fmtRate:N,toggle:D,detailOf:ce,loadResults:y,loadHistory:m,loadTrack:W,loadStockHistory:ue,loadAll:Z,poolStatus:X,openStockDetail:T,actionPct:ee}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:f}=Vue,{currentView:t,statusFilter:d,dashboardData:p,loadHealthMetrics:A,getLoadDashboardData:g,getLastRefreshTime:r,getFetchPoolSignals:w}=a,i=e(!1),S=e(""),b=new Map,M=e([]),_=e(""),z=e(""),F=e([]),C=e(""),c=window.__quantModules.core||{},n=typeof c.createTtlCache=="function"?c.createTtlCache(15e3):null;let u=0;function l(){const V=Date.now();V-u<5e3||(u=V,ElementPlus.ElMessage.success("有新数据，已更新"))}function x(V,se,Y,ee){!n||!se||typeof c.silentRefresh!="function"||c.silentRefresh({cache:n,key:se,fetchFn:async()=>{const j=await fetch(V);if(!j.ok)throw new Error("HTTP "+j.status);const H=await j.json();return Y?Y(H):H},ttl:n.defaultTtl,apply:ee,onChanged:l,onError:()=>{}})}const E=new Set;async function O(){var V;try{const Y=await(await fetch("/api/dates")).json();M.value=((V=Y.data)==null?void 0:V.dates)||Y.dates||[],M.value.length>0&&(_.value=M.value[M.value.length-1]),z.value=new Date().toLocaleTimeString()}catch(se){console.error(se)}}async function X(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),z.value="刷新中...",b.clear(),await O(),await q(),z.value=new Date().toLocaleTimeString()}catch(V){console.error("数据刷新失败",V)}}function R(){if(!_.value)return;const se="/api/view/"+(t.value||"day")+"/"+_.value+"?status="+(d.value||"all")+"&format=csv";window.open(se,"_blank")}async function q(){if(!_.value)return;const V=`${t.value}_${_.value}`;if(E.has(V))return;E.add(V);const se=`/api/view/${t.value}/${_.value}?status=all`,Y=n&&typeof c.makeCacheKey=="function"?c.makeCacheKey("GET",`/api/view/${t.value}/${_.value}`,{status:"all"}):null,ee=(N,k)=>{F.value=N,C.value=k||"",b.set(V,{stocks:N,note:k||""})},j=N=>{ee(N&&N.stocks||[],N&&N.note||"")};if(b.has(V)){j(b.get(V)),x(se,Y,N=>N,j),E.delete(V);return}const H=Y&&n?n.get(Y):void 0;if(H!==void 0){j(H),x(se,Y,N=>N,j),E.delete(V);return}i.value=!0,S.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const k=await(await fetch(se)).json(),D=k.stocks||[];ee(D,k.note||""),n&&Y&&n.set(Y,{stocks:D,note:k.note||""})}catch{try{const D=await(await fetch(`/api/calendar/${_.value}/consensus`)).json();F.value=(D.consensus||[]).map(ce=>({...ce,code:ce.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{i.value=!1}w(),E.delete(V)}async function I(){const V=n&&typeof c.makeCacheKey=="function"?c.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(n){const se=n.get(V);if(se!==void 0){p.value=se,A().catch(()=>{}),x("/api/dashboard",V,Y=>Y.data||Y,Y=>{p.value=Y,r().value=Date.now()});return}}await g()(),A().catch(()=>{}),n&&n.set(V,p.value)}return{loading:i,loadingView:S,viewCache:b,dates:M,selectedDate:_,lastLoadTime:z,consensus:F,viewNote:C,loadDates:O,refreshCalendarData:X,exportCSV:R,loadConsensusData:q,loadDashboardCached:I}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:f,loadIndexKline:t,rememberDialogTrigger:d,menus:p,currentPage:A,currentSubPage:g,stockDetail:r,selectedDate:w}=a,i=ref({indices:[],market_sentiment:null});let S=null;const b=ref(!1),M=ref(null),_=ref(null),z=ref(!1);function F(){window.__quantModules.charts.disposeKline("stockKlineChart")}const C=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{C.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const c=ref(!1),n=ref(null),u=ref(!1),l=ref(0),x=ref(0);async function E(){try{const k=await(await fetch("/api/market/overview")).json();i.value=k,O(k)}catch(N){console.error("获取市场行情失败:",N)}}function O(N){S&&clearInterval(S),N&&N.in_trading_hours&&(S=setInterval(E,6e5))}function X(N){d(),M.value=N,_.value=null,f.value="daily",R(N.code),window.__quantModules.charts.disposeKline("indexKlineChart"),b.value=!0,setTimeout(async()=>{await t("daily")},500)}async function R(N){try{const D=await(await fetch("/api/ai/index-eval/"+N)).json();D.success&&D.data&&(_.value=D.data)}catch(k){console.warn("[getIndexAiScore] cache check failed:",k)}}async function q(){if(M.value){z.value=!0;try{const k=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:M.value.code,index_name:M.value.name,current_price:M.value.close,pct_chg:M.value.pct_chg})})).json();k.success?_.value=k.data:ElementPlus.ElMessage.error(k.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{z.value=!1}}}function I(N){window.__quantModules.charts.zoomKline("stockKlineChart",N)}function V(){u.value=!0,setTimeout(()=>{u.value=!1},600)}function se(N,k){if(N===k){V();return}const D=800,ce=performance.now(),U=k-N;c.value=!0,n.value={value:U,dir:U>0?"up":"down"},u.value=!0,setTimeout(()=>{u.value=!1},600),setTimeout(()=>{n.value=null},2300);function y(o){const T=o-ce,m=Math.min(T/D,1),W=1-Math.pow(1-m,3),ue=Math.round(N+U*W);r.value&&r.value.score_data&&(r.value.score_data.score=ue),m<1?requestAnimationFrame(y):(r.value&&r.value.score_data&&(r.value.score_data.score=k),c.value=!1)}requestAnimationFrame(y)}function Y(){if(!r.value||!r.value.score_data)return;const N=r.value.score_data.score;if(N==null)return;const k=600,D=performance.now();u.value=!0,setTimeout(()=>{u.value=!1},600);function ce(U){const y=Math.min((U-D)/k,1),o=1-Math.pow(1-y,3),T=Math.round(N*o);r.value&&r.value.score_data&&(r.value.score_data.score=T),y<1?requestAnimationFrame(ce):r.value&&r.value.score_data&&(r.value.score_data.score=N)}requestAnimationFrame(ce)}async function ee(){var D;if(!r.value||!r.value.stock)return;const N=r.value.stock,k=(D=r.value.score_data)==null?void 0:D.score;try{const ce=new Date().toISOString().split("T")[0],U=w.value||ce,o=await(await fetch(`/api/calendar/stock/${encodeURIComponent(N)}/score?date=${U}`)).json();if(o.success&&o.score_data){const T=o.score_data.score;r.value&&(r.value.score_data=o.score_data),k!=null&&T!==k?se(k,T):V()}else V()}catch(ce){console.warn("[refreshStockScore] failed:",ce)}}function j(N){C.value&&(l.value=N.touches[0].clientX,x.value=N.touches[0].clientY)}function H(N){if(!C.value)return;const k=l.value-N.changedTouches[0].clientX,D=x.value-N.changedTouches[0].clientY;if(Math.abs(k)>Math.abs(D)&&Math.abs(k)>80){const ce=p.value.map(function(y){return y.key}),U=ce.indexOf(A.value);if(k>0&&U<ce.length-1){const y=ce[U+1],o=window.__quantGoPage;o?o(y,""):(A.value=y,g.value="")}else if(k<0&&U>0){const y=ce[U-1],o=window.__quantGoPage;o?o(y,""):(A.value=y,g.value="")}}}return{marketData:i,marketRefreshTimer:S,fetchMarketData:E,indexDetailVisible:b,indexDetail:M,indexAiResult:_,indexAiLoading:z,showIndexDetail:X,loadCachedIndexEval:R,doIndexAiEvaluate:q,disposeStockKline:F,isMobile:C,zoomKlineRange:I,scoreAnimating:c,scoreDelta:n,scorePulse:u,triggerScorePulse:V,animateScoreChange:se,animateScoreEntrance:Y,refreshStockScore:ee,touchStartX:l,touchStartY:x,onTouchStart:j,onTouchEnd:H}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:f,currentSubPage:t}=a,d=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),p=ref("idle"),A=ref("");async function g(){if(!d.value.webhook_url){A.value="请先输入Webhook地址";return}p.value="testing",A.value="";try{const P=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:d.value.webhook_url})})).json();P.success||P.status==="ok"?(A.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(A.value=P.message||"测试失败",ElementPlus.ElMessage.error(A.value))}catch{A.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}p.value="idle"}const r=Vue.ref(!1);async function w(){r.value=!0;try{const P=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{r.value=!1}}const i=ref(!1);function S(){e("ai","chat_history"),i.value=!0,Vue.nextTick(()=>{const Z=document.querySelector('input[placeholder*="输入问题"]');Z&&Z.focus()})}const b=ref([]),M=ref({});async function _(){try{const P=await(await fetch("/api/ai/recommend-strategies")).json();P.success&&(b.value=P.recommendations||[])}catch(Z){console.warn("[loadStrategyRecommendations] failed:",Z)}}async function z(){try{const P=await(await fetch("/api/ai/usage-stats")).json();P.success&&(M.value=P)}catch(Z){console.warn("loadAiUsage failed:",Z)}}const F=ref({}),C=ref([]),c=ref(7);async function n(){try{const P=await(await fetch("/api/system/monitor")).json();P.success&&(F.value=P)}catch(Z){console.warn("loadSysMonitor failed:",Z)}}const u=ref({});async function l(){try{const P=await(await fetch("/api/system/health-detail")).json();P.success&&(u.value=P)}catch(Z){console.warn("loadHealthDetail failed:",Z)}}async function x(){try{const P=await(await fetch(`/api/analytics/rank?days=${c.value}`)).json();P.success&&(C.value=P.rank||[])}catch(Z){console.warn("loadAnalytics failed:",Z)}}const E=ref(!1);async function O(){if(!E.value){E.value=!0;try{const P=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return P&&P.success?P.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${P.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${P.date}）`):ElementPlus.ElMessage.error(P&&(P.detail||P.message)||"生成复盘失败"),l(),P}catch(Z){ElementPlus.ElMessage.error("生成复盘失败: "+(Z.message||""))}finally{E.value=!1}}}const X=ref(null),R=ref(!1);async function q(){try{const P=await(await fetch("/api/ai/fact-check/latest")).json();X.value=P&&P.success&&P.data||null}catch(Z){console.warn("loadFactCheck failed:",Z)}}async function I(){if(!R.value){R.value=!0;try{const P=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return P&&P.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${P.data.pass_rate!=null?P.data.pass_rate+"%":"--"} (${P.data.checked} 个数字)`),q()):ElementPlus.ElMessage.error(P&&(P.detail||P.message)||"事实护栏抽查失败"),P}catch(Z){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Z.message||""))}finally{R.value=!1}}}const V=ref([]),se=ref(!1);async function Y(){try{const P=await(await fetch("/api/backup/list")).json();P.success&&(V.value=P.backups||[])}catch(Z){console.error("加载备份列表失败",Z)}}async function ee(){se.value=!0;try{const P=await(await fetch("/api/backup/create",{method:"POST"})).json();P.success?(ElementPlus.ElMessage.success(P.message||"备份成功"),Y()):ElementPlus.ElMessage.error(P.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{se.value=!1}}const j=ref(""),H=ref("");async function N(Z){j.value=Z,H.value="";try{const P=window.__quantModules&&window.__quantModules.core||{},G=typeof P.authHeaders=="function"?P.authHeaders():{},re=await fetch("/api/reports/export?format="+encodeURIComponent(Z),{headers:G});if(!re.ok)throw new Error("HTTP "+re.status);const pe=await re.blob(),de=URL.createObjectURL(pe),J=document.createElement("a");J.href=de;const oe=new Date().toISOString().slice(0,10);J.download="report_"+oe+"."+Z,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(de),H.value="报表已导出 ("+Z.toUpperCase()+")"}catch(P){H.value="报表导出失败: "+(P.message||P)}finally{j.value=""}}async function k(Z){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Z} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(P){console.warn("[restoreBackup] confirm cancelled:",P);return}try{const G=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Z})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(G.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const D=ref(!1),ce=ref(0),U=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function y(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{ce.value=0,D.value=!0},800)}function o(){D.value=!1,localStorage.setItem("quant_tour_done","1")}function T(){D.value=!1,localStorage.setItem("quant_tour_done","1")}const m=ref(""),W=ref(!1);async function ue(){if(!m.value||!m.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}W.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:m.value.trim(),page:f.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(m.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{W.value=!1}}return{feishuConfig:d,feishuTestStatus:p,feishuTestMessage:A,feishuSaving:r,testFeishuWebhook:g,saveFeishuConfig:w,aiFabHidden:i,openAiFab:S,strategyRecommendations:b,aiUsage:M,loadStrategyRecommendations:_,loadAiUsage:z,sysMonitor:F,analyticsRank:C,analyticsDays:c,loadSysMonitor:n,loadAnalytics:x,healthDetail:u,loadHealthDetail:l,reviewTriggering:E,triggerMarketReview:O,factCheck:X,factCheckRunning:R,loadFactCheck:q,triggerFactCheck:I,backups:V,backupCreating:se,loadBackups:Y,createBackup:ee,restoreBackup:k,reportExporting:j,reportExportMsg:H,exportReport:N,tourVisible:D,tourStep:ce,tourSteps:U,maybeShowTour:y,skipTour:o,finishTour:T,feedbackText:m,feedbackSubmitting:W,submitFeedback:ue}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:f,selectedDate:t,dates:d,loadConsensusData:p,hapticFeedback:A}=a,g=e(()=>({day:"天",week:"周",month:"月",year:"年"})[f.value]||"天"),r=e(()=>({day:"date",week:"week",month:"month",year:"year"})[f.value]||"date"),w=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[f.value]||"YYYY-MM-DD"),i=e(()=>!t.value||!d.value||d.value.length===0?!1:t.value>d.value[0]),S=e(()=>!t.value||!d.value||d.value.length===0?!1:t.value<d.value[d.value.length-1]);function b(F){A("light"),f.value=F;let C=t.value||d.value[d.value.length-1];if(F==="year"){const c=C.substring(0,4),n=d.value.find(u=>u.startsWith(c));t.value=n||C}else if(F==="month"){const c=C.substring(0,7),n=d.value.find(u=>u.startsWith(c));t.value=n||C}setTimeout(p,50)}function M(F){A("light");const C=t.value,c=d.value,n=c.indexOf(C);if(n<0)return;let u=1;f.value==="week"&&(u=5),f.value==="month"&&(u=22),f.value==="year"&&(u=250);const l=n+F*u;if(l>=0&&l<c.length){const x=c[l];if(f.value==="month"){const E=x.substring(0,7),O=c.find(X=>X.startsWith(E));t.value=O||x}else if(f.value==="year"){const E=x.substring(0,4),O=c.find(X=>X.startsWith(E));t.value=O||x}else t.value=x;p()}}function _(F){if(!d.value||d.value.length===0)return!1;const C=F.getFullYear(),c=String(F.getMonth()+1).padStart(2,"0"),n=String(F.getDate()).padStart(2,"0"),u=`${C}-${c}-${n}`;return!d.value.includes(u)}function z(F){F&&F.length>10&&(t.value=F.substring(0,10)),p()}return{viewUnit:g,datePickerType:r,dateFormat:w,canNavPrev:i,canNavNext:S,switchView:b,navigateDate:M,disabledDate:_,onDateChange:z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:f,navigateTo:t,currentPage:d,currentView:p,navigateDate:A,switchView:g,getLoadDashboardData:r,refreshCalendarData:w,getLoadAiHistory:i,exportCSV:S,getShowBatchEvaluate:b,openAiFab:M,toggleSidebar:_,showStockDetail:z}=a,F=ref("");async function C(R,q){if(!R||R.trim().length<1){q([]);return}const I=window.QuantCommandPanel;let V=[];I&&e.value&&(V=I.buildSearchSuggestions(R,e.value,f,I.DEFAULT_COMMANDS));const se=window.__quantModules&&window.__quantModules.pinyin;se&&se.searchCoreStocks(R).forEach(function(Y){V.push({value:Y.code+" "+Y.name,type:"stock",code:Y.code,name:Y.name,label:Y.name,subLabel:Y.code,icon:"trending-up",iconName:"trending-up"})});try{const ee=await(await fetch("/api/search?q="+encodeURIComponent(R))).json();if(ee.success&&ee.results){const j=ee.results.map(function(N){return{value:N.code+" "+N.name,type:"stock",code:N.code,name:N.name,label:N.name,subLabel:N.code,icon:"trending-up",iconName:"trending-up"}}),H=[];(ee.groups||[]).forEach(function(N){(N.items||[]).forEach(function(k){k.type==="sector"?H.push({value:k.name+" · "+k.subLabel,type:"sector",name:k.name,label:k.name,subLabel:"板块",icon:"layers",iconName:"layers"}):k.type==="strategy"?H.push({value:k.name+" · 策略",type:"strategy",id:k.id,name:k.name,label:k.name,subLabel:"策略",icon:"target",iconName:"target"}):k.type==="menu"&&H.push({value:k.name,type:"menu",menuKey:k.menuKey,name:k.name,label:k.name,subLabel:k.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),q(V.concat(j,H))}else q(V)}catch(Y){console.warn("[searchStocks] fetch failed:",Y),q(V)}}function c(R){return R?R.type==="menu"?{action:"menu",menuKey:R.menuKey,subPage:R.subPage}:R.type==="command"?{action:"command",key:R.key}:R.type==="sector"?{action:"sector",name:R.name}:R.type==="strategy"?{action:"strategy",id:R.id,name:R.name}:R.type==="stock"||R.code&&R.name?{action:"stock",code:R.code,name:R.name}:null:null}function n(R){F.value="";const q=window.QuantCommandPanel,I=q?q.dispatchSearchSelection(R):c(R);if(I){if(I.action==="menu"){t(I.menuKey,I.subPage);return}if(I.action==="command"){u(I.key);return}if(I.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(I.name);return}if(I.action==="strategy"){t("research","overview");return}I.action==="stock"&&typeof z=="function"&&z(I.code,I.name)}}function u(R){if(R==="refresh"){const q=d.value;q==="strategies"?r().catch(function(){}):q==="calendar"?w().catch(function(){}):q==="ai"&&i().catch(function(){})}else R==="export"?S():R==="batch"?b().value=!0:R==="ai"?M():R==="sidebar"?_():R==="open-eval-history"?t("ai","history"):R==="open-shortterm"&&t("shortterm","overview")}const l=ref(!1),x=ref(!1);function E(R){if(!R)return!1;const q=R.tagName;return q==="INPUT"||q==="TEXTAREA"||q==="SELECT"||R.isContentEditable}function O(R){if(E(R.target))return;const q=R.key.toLowerCase();if(R.ctrlKey&&q==="k"){R.preventDefault(),x.value=!0;return}if(R.ctrlKey&&q==="/"){R.preventDefault(),l.value=!l.value;return}if(R.ctrlKey&&q==="h"){R.preventDefault(),t("ai","history");return}if(R.ctrlKey&&R.shiftKey&&q==="s"){R.preventDefault(),t("shortterm","overview");return}if(!(R.ctrlKey||R.metaKey||R.altKey)){if(q>="1"&&q<="5"){const I=parseInt(q)-1,V=e.value[I];V&&t(V.key,V.subPages[0]||"");return}if(q==="r"&&X(),(q==="arrowleft"||q==="arrowright"||q==="arrowup"||q==="arrowdown")&&d.value==="calendar")if(R.preventDefault(),q==="arrowleft"||q==="arrowright")A(q==="arrowleft"?-1:1);else{const I=["day","week","month","year"].indexOf(p.value),V=["day","week","month","year"][(I+(q==="arrowup"?-1:1)+4)%4];g(V)}}}function X(){const R=d.value;R==="strategies"?r().catch(()=>{}):R==="calendar"?w().catch(()=>{}):R==="ai"&&i().catch(()=>{})}return{searchQuery:F,searchStocks:C,onSearchSelect:n,runGlobalCommand:u,shortcutHelpVisible:l,commandPaletteVisible:x,isTypingTarget:E,handleGlobalKeydown:O,refreshCurrentPage:X}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:f,loadDates:t,loadDashboardData:d,loadDashboardCached:p,loadHealthMetrics:A,loadConsensusData:g,applyTheme:r,maybeShowTour:w,loadAiVendors:i,loadGroupConfig:S,groupsConfig:b}=a,M="qc_login_username";let _="";try{_=localStorage.getItem(M)||""}catch{_=""}const z=ref({username:_,password:""}),F=ref(!1),C=ref(!1),c=ref(!1),n=ref({oldPassword:"",newPassword:"",confirmPassword:""}),u=ref(!1),l=ref(!1),x=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),E=ref(1);async function O(){try{(await(await fetch("/api/setup/status")).json()).needed&&(x.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},E.value=1,l.value=!0)}catch(Y){console.warn("[checkSetupWizard] failed:",Y)}}async function X(){try{const Y={new_password:x.value.newPassword,ai_key:x.value.aiKey,ai_provider:x.value.aiProvider,ai_model:x.value.aiModel,ai_endpoint:x.value.aiEndpoint,tushare_token:x.value.tushareToken},j=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y)})).json();j.success?(l.value=!1,ElementPlus.ElMessage.success("初始化完成"),await f()):ElementPlus.ElMessage.error(j.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function R(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(l.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function q(){if(!z.value.username||!z.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}F.value=!0;try{const ee=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z.value)})).json();if(ee.success){e.value=ee.user,localStorage.setItem("quant_user",JSON.stringify(ee.user)),localStorage.setItem("quant_token",ee.data.access_token),r(ee.user.theme||"gold");try{localStorage.setItem(M,z.value.username||"")}catch{}typeof S=="function"&&await S().catch(function(){}),typeof i=="function"&&i(),await f(),await t(),await Promise.all([p(),g(),A().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),ee.data&&ee.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),w(),ee.user.role==="admin"&&setTimeout(O,500)}else ElementPlus.ElMessage.error(ee.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{F.value=!1}}async function I(){C.value=!0;try{const ee=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();ee.success?(e.value=ee.user,localStorage.setItem("quant_user",JSON.stringify(ee.user)),localStorage.setItem("quant_token",ee.data.access_token),r(ee.user.theme||"gold"),typeof S=="function"&&await S().catch(function(){}),await f(),await t(),await d(),A().catch(()=>{}),await g(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(ee.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{C.value=!1}}function V(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{b&&(b.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function se(){if(!n.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!n.value.newPassword||n.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(n.value.newPassword!==n.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}u.value=!0;try{const Y=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:n.value.oldPassword,new_password:n.value.newPassword})}),ee=await Y.json();Y.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),c.value=!1,n.value={oldPassword:"",newPassword:"",confirmPassword:""},V()):ElementPlus.ElMessage.error(ee.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{u.value=!1}}return{loginForm:z,logining:F,guestLogining:C,showChangePassword:c,changePasswordForm:n,changingPassword:u,showSetupWizard:l,setupForm:x,setupStep:E,checkSetupWizard:O,completeSetupWizard:X,resetSetupWizard:R,handleLogin:q,handleGuestLogin:I,handleLogout:V,doChangePassword:se}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let f=null;const{strategyFilter:t,currentView:d,statusFilter:p,currentPage:A,currentSubPage:g,menus:r,currentUser:w,strategyFilterCounts:i,lazyTick:S,dates:b,selectedDate:M,consensus:_,loadConsensusData:z,fetchMerrillClock:F,fetchMarketData:C,loadWatchlist:c,loadAiHistory:n,preloadWatchlistKline:u,loadChatHistory:l,loadSystemStatus:x,checkTushareConnection:E,loadSysMonitor:O,loadAnalytics:X,loadHealthDetail:R,loadHealthMetrics:q,loadAiUsage:I,loadFactCheck:V,loadAutoEvaluateConfig:se,loadDatasourceConfig:Y,loadFeishuConfig:ee,loadAiConfig:j,loadAiVendors:H,loadRateLimit:N,loadDataRefreshConfig:k,loadBackups:D,loadAllGroups:ce,loadUsers:U,stockDetailTab:y,stockDetailVisible:o,stockKlineLoaded:T,loadStockKline:m,currentKlinePeriod:W,showMerrillDetail:ue,indexDetailVisible:Z,restoreDialogFocus:P}=a;e(t,G=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(G.selected)),localStorage.setItem("quant_strategy_filter_mode",G.mode)},{deep:!0}),e([d,p],(G,re)=>{G[0]!==re[0]&&z()}),e([A,g],([G,re])=>{var pe;try{const J=!(G==="calendar"&&re==="calendar")&&re||"",oe=J?"#"+G+"/"+J:"#"+G;window.location.hash!==oe&&(window.location.hash=oe)}catch{}if(re&&localStorage.setItem("quant_last_subpage",re),!re&&r.value.find(de=>de.key===G)){const de=r.value.find(J=>J.key===G);de&&de.subPages.length>0&&(g.value=de.subPages[0])}if(G==="shortterm"&&re==="market-review"){const de=window.__lazyLoaders&&window.__lazyLoaders.research;de&&de().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(J){J&&J.name&&!J.__quantRegistered&&(window.__quantApp.component(J.name,J),J.__quantRegistered=!0)}),S&&S.value++}).catch(function(J){console.warn("[lazy] research 组件补加载失败",J)})}G==="calendar"&&re==="calendar"&&(!_.value||_.value.length===0)&&(b.value.length>0&&!M.value&&(M.value=b.value[b.value.length-1]||""),setTimeout(z,50)),G==="calendar"&&re==="pool"&&(!_.value||_.value.length===0)&&(b.value.length>0&&!M.value&&(M.value=b.value[b.value.length-1]||""),setTimeout(z,50)),G==="strategies"&&(re==="merrill"&&F(),re==="market"&&C(),re==="consensus"&&(!_.value||_.value.length===0)&&setTimeout(z,50)),G==="ai"&&(re==="watchlist"&&(c(),n(),setTimeout(u,500)),re==="history"&&n(),re==="overview"&&(n(),c()),re==="chat_history"&&l()),(G==="system"||G==="ops")&&((pe=w.value)==null?void 0:pe.role)==="admin"&&(re==="status"&&(x(),E()),re==="health"&&(R(),q()),re==="schedule"&&R(),re==="guard"&&V(),re==="usage"&&(O(),X(),R(),q(),I(),V()),re==="autoeval"&&(se(),H()),re==="datasource"&&Y(),re==="feature"&&(ee(),j(),N(),k(),D()),re==="user"&&(ce(),U())),(G==="system"||G==="ops")&&re==="usage"?f||(f=setInterval(()=>{O(),X(),R(),q(),I()},3e4)):f&&(clearInterval(f),f=null)}),e(y,(G,re)=>{G==="kline"&&re&&re!=="kline"&&o.value&&(T.value=!1,setTimeout(async()=>{!await m(W.value)&&o.value&&y.value==="kline"&&setTimeout(()=>m(W.value),800)},50))}),e(ue,G=>{G||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([o,Z],([G,re])=>{!G&&!re&&P()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:f,menus:t,currentPage:d,currentSubPage:p,currentView:A,currentKlinePeriod:g,selectedDate:r,dates:w,loadDates:i,loadConsensusData:S,loadDashboardCached:b,appVersion:M,themes:_,fetchMarketData:z,fetchMerrillStages:F,fetchMerrillClock:C,loadAiConfig:c,loadAiVendors:n,loadAiCatalog:u,currentUser:l,loadUserConfig:x,loadAutoEvaluateConfig:E,loadGroupConfig:O,loadUsers:X,loadAllGroups:R,loadAiHistory:q}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function I(U,y){const o={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(U==="calendar"&&o[y])return d.value="calendar",p.value="calendar",o[y]&&(A.value=o[y]),!0;if(U==="research"&&(y==="strategy-write"||y==="custom-write")){d.value="research",p.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",y==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const U=window.location.hash||"";if(!U||U==="#")return;const y=U.replace(/^#\/?/,"").split("/"),o=y[0],T=y[1]||"",m=t.value.find(function(W){return W.key===o});if(m&&!I(o,T)){if(!T)d.value=o,p.value=m.subPages[0]||"";else if(m.subPages.indexOf(T)>=0)d.value=o,p.value=T;else return;window.__lazyLoaders&&window.__lazyLoaders[o]&&window.__quantGoPage&&window.__quantGoPage(o,p.value).catch(function(){})}});const V=(U,y=3e3,o="")=>{const T=new Promise((m,W)=>setTimeout(()=>W(new Error("timeout")),y));return Promise.race([U,T]).catch(m=>{console.warn(`[init] ${o||"task"} failed:`,m.message)})},se=localStorage.getItem("quant_theme"),Y=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const U=window.__quantModules.themes;let y=Y.theme||"system",o=Y.theme_hue!=null&&Y.theme_hue!==""?Y.theme_hue:null;const T=typeof U.migrateLegacyTheme=="function"?U.migrateLegacyTheme():null;o==null&&T&&(y=T.mode,o=T.hue),o==null&&(o=45),f(y,o)}else se&&f(se);await O().catch(function(){}),function(){var U=window.location.hash||"",y=!1;if(U&&U!=="#"){var o=U.replace(/^#\/?/,"").split("/"),T=o[0],m=o[1]||"",W=t.value.find(function(re){return re.key===T});W&&(I(T,m)||(d.value=T,m&&W.subPages.indexOf(m)>=0?p.value=m:m||(p.value=W.subPages[0]||"")),y=!0)}if(!y){var ue=localStorage.getItem("quant_last_page");ue&&t.value.some(function(re){return re.key===ue})?d.value=ue:Y.default_view&&t.value.some(function(re){return re.key===Y.default_view})&&(d.value=Y.default_view);var Z=localStorage.getItem("quant_last_subpage");Z&&(p.value=Z)}var P=localStorage.getItem("quant_last_date");P&&(r.value=P);var G=localStorage.getItem("quant_last_view");G&&(A.value=G),window.__lazyLoaders&&window.__lazyLoaders[d.value]&&window.__quantGoPage&&window.__quantGoPage(d.value,p.value).catch(function(){})}(),fetch("/api/health").then(U=>U.json()).then(U=>{U.version&&(M.value=U.version)}).catch(()=>{});const ee=localStorage.getItem("quant_user"),j=localStorage.getItem("quant_token"),H=!!(ee&&j),N=Promise.all([Promise.resolve().then(()=>{_.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),V(z(),3e3,"marketData"),V(F(),2e3,"merrillStages")]).then(()=>{V(C(),3e3,"merrillClock")});if(c(),u(),H&&l.value&&n(),!H||!l.value){await N;return}let k=!0;try{k=(await fetch("/api/users/me")).ok}catch{k=!1}if(!k){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),l.value=null;return}if(l.value){const U=l.value.theme||"",y=window.__quantModules&&window.__quantModules.themes;let o=Y.theme||"system",T=Y.theme_hue!=null&&Y.theme_hue!==""?Y.theme_hue:null;if(T==null&&y&&typeof y.migrateLegacyTheme=="function"){const m=y.migrateLegacyTheme();if(m)o=m.mode,T=m.hue;else if(U&&y.LEGACY_MAP&&y.LEGACY_MAP[U]){const W=y.LEGACY_MAP[U];o=W[0],T=W[1]}}T==null&&(T=45),f(o,T)}if(window.__quantModules&&window.__quantModules.preferences){const y=await window.__quantModules.preferences.loadPreferences();var D=localStorage.getItem("quant_last_page");!D&&y.default_view&&t.value.some(function(o){return o.key===y.default_view})&&(d.value=y.default_view),y.theme&&f(y.theme,y.theme_hue!=null&&y.theme_hue!==""?y.theme_hue:null),g&&(y.chart_period==="weekly"||y.chart_period==="monthly")&&(g.value=y.chart_period)}await Promise.all([V(x(),2e3,"userConfig"),V(i(),2e3,"dates")]),E().catch(()=>{}),O().catch(()=>{});const ce=d.value==="strategies"?V(b(),2e3,"dashboard"):V(S(),2e3,"consensus");await Promise.all([ce,V(X(),2e3,"users"),V(q(),2e3,"aiHistory")]),R().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:f,onUnmounted:t,watch:d,nextTick:p}=Vue,A=a(!1),g=window.__quantModules&&window.__quantModules.i18n||{},r=g.SUPPORTED_LOCALES||["zh-CN","en"],w=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",i=a(r.indexOf(w)!==-1?w:"zh-CN");typeof g.bindLocale=="function"&&g.bindLocale(i);const S=typeof g.t=="function"?g.t:function(B){return String(B)};function b(B){r.indexOf(B)!==-1&&(i.value=B,typeof g.setLocale=="function"&&g.setLocale(B),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",B))}function M(B,ve){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(B,ve):B==null?"":String(B)}function _(B){(B.key==="Enter"||B.key===" "||B.key==="Spacebar")&&(B.preventDefault(),B.currentTarget&&typeof B.currentTarget.click=="function"&&B.currentTarget.click())}let z=null;function F(){document.activeElement&&document.activeElement!==document.body&&(z=document.activeElement)}function C(){if(z&&z.isConnected)try{z.focus()}catch{}z=null}const c=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{c.value=!0}),window.addEventListener("offline",()=>{c.value=!1})),window.addEventListener("beforeunload",B=>{if(A.value)return B.preventDefault(),B.returnValue="您有未保存的配置变更，确定要离开吗？",B.returnValue});function n(B="light"){typeof navigator<"u"&&navigator.vibrate&&(B==="light"?navigator.vibrate(10):B==="medium"?navigator.vibrate(20):B==="heavy"&&navigator.vibrate([10,30,10]))}const u=useMerrillClock(),{merrillData:l,merrillStagesConfig:x,showMerrillDetail:E,merrillDetailData:O,merrillClockConfig:X,merrillClockLastUpdated:R,merrillReevalResult:q,merrillReevalLoading:I,stages:V,indicatorList:se,dimensionScoreList:Y,detailDimensionScoreList:ee,confidenceColor:j,timelineStages:H,clockPosition:N,merrillProgressStyle:k,FULL_CYCLE_MONTHS:D,getStageAngle:ce,getCycleProgress:U,getCurrentStageMonths:y,getStageTotalMonths:o,isStageCompleted:T,getCharLabel:m,getAssetName:W,getRankColor:ue,fetchMerrillStages:Z,fetchMerrillClock:P,loadMerrillTimeline:G,showTimelineStage:re,merrillTimeline:pe,timelineLoading:de,showStageDetail:J,saveMerrillClockConfig:oe,doMerrillReevaluate:Pe,startAutoRefresh:ke,stopAutoRefresh:_e,merrillSnapshots:te,merrillSnapshotsTotal:xe,fetchMerrillSnapshots:De}=u,ne=a(localStorage.getItem("sidebar_collapsed")==="1");function ae(){ne.value=!ne.value,localStorage.setItem("sidebar_collapsed",ne.value?"1":"0")}const he=a(null),Ne=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],Ie=e(()=>{var Ye,Ft,Xt;const B=((Ye=ge.value)==null?void 0:Ye.role)||"guest",ve=((Ft=ge.value)==null?void 0:Ft.group)||B,ye=((Xt=he.value)==null?void 0:Xt[ve])||null;return Ne.map(jt=>{if(ye&&ye.visible_menus&&jt.key in ye.visible_menus&&!ye.visible_menus[jt.key])return null;const ba={...jt,name:S("nav."+jt.key)||jt.name};return ye!=null&&ye.visible_sub_pages&&(ba.subPages=jt.subPages.filter(os=>{const Ed=jt.key+"."+os;return ye.visible_sub_pages[Ed]!==!1})),jt.key==="system"&&B==="guest"&&jt.guestSubPages&&(ba.subPages=jt.guestSubPages),ba}).filter(Boolean)});async function Ue(){try{if(!localStorage.getItem("quant_token"))return;const ve=await fetch("/api/groups/my");if(ve.ok){const ye=await ve.json();he.value={[ye.group_id]:ye.group}}}catch(B){console.warn("loadGroupConfig:",B)}}const Ge=a("strategies"),ht=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},st=a(ht.navMode);function Rt(B){const ve=window.__quantModules&&window.__quantModules.navModeCore;st.value=ve?ve.normalizeNavMode(B):B==="tree"||B==="toptab"?B:"toptab",ve&&ve.writePrefs({navMode:st.value})}const Se=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function we(B,ve=""){n("light"),Ge.value=B,et.value=ve,localStorage.setItem("quant_last_subpage",ve)}function Ae(){const B=Ie.value;if(!B||!B.length)return;if(!B.some(function(Fe){return Fe.key===Ge.value})){const Fe=B[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Fe.key),Ge.value=Fe.key,et.value=Fe.subPages&&Fe.subPages[0]||"";return}const ye=B.find(function(Fe){return Fe.key===Ge.value});ye&&ye.subPages&&ye.subPages.length&&!ye.subPages.includes(et.value)&&(et.value=ye.subPages[0])}const Re=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Xe=a("multifactor"),Ze=a(null),tt=a(1e5),xt=a(!1),St=a(null);let pt=null,zt=null;async function Kt(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ve={initial_capital:tt.value||1e5};Ze.value&&Ze.value.length===2&&(ve.start_date=Ze.value[0],ve.end_date=Ze.value[1]),xt.value=!0,St.value=null;try{const ye=await fetch("/api/strategies/"+Xe.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)});if(!ye.ok){const Ft=await ye.json().catch(()=>({}));throw new Error(Ft.detail||"回测失败")}const Fe=await ye.json(),Ye=Fe.result||{};if(!Ye.success)throw new Error(Ye.message||"回测失败");Fe.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),St.value={total_return_pct:((Ye.total_return??0)*100).toFixed(2),annual_return_pct:((Ye.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ye.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ye.sharpe_ratio??0).toFixed(2),win_rate:((Ye.win_rate??0)*100).toFixed(2),out_sample:Ye.outsample_total_return===void 0?"":((Ye.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ye.overfit_warning||!1,message:Ye.message||""},Jt(Ye.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(ye){ElementPlus.ElMessage.error(ye.message||"回测失败")}finally{xt.value=!1}}function Jt(B){const ve=document.getElementById("backtestEquityChart");if(!ve||!B||B.length===0)return;const ye=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Fe=()=>{zt=B,pt&&(pt.dispose(),pt=null),pt=echarts.init(ve),pt.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ye=B.map(Xt=>Xt.date||Xt[0]),Ft=B.map(Xt=>Xt.value??Xt[1]);pt.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ye,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Ft,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};ye?ye().then(Fe).catch(()=>{}):Fe()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){zt&&Jt(zt)}));const et=a("overview"),yt=e(()=>{const B=Ne.find(ve=>ve.key===Ge.value);return B?B.name:Ge.value}),Wt=a(0),gt=e(()=>{Wt.value;const B={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ve=et.value;return Ge.value==="shortterm"&&ve==="market-review"?"qc-research-page":Ge.value==="ops"&&ve==="execution"?"qc-strategies-page":B[Ge.value]||""}),Ut=a(!1),_t=a({}),Je=a([]);a("");const At=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),wt=a("day"),Q=a("all"),ge=a(null);d(Ie,function(){Ae()}),d([Ge,et],function(){const B=document.querySelector(".main-content");B&&(B.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const B=localStorage.getItem("quant_user"),ve=localStorage.getItem("quant_token");if(B&&ve)try{ge.value=JSON.parse(B)}catch{}}();const at=a(!1),kt=a("kline"),lt=a(null),It=a(!1),ea=a(localStorage.getItem("qc_detail_mode")||"split"),aa=a(window.innerWidth<=1024),na=e(()=>ea.value==="split"&&!aa.value);function ta(B){ea.value=B;try{localStorage.setItem("qc_detail_mode",B)}catch{}}window.addEventListener("resize",()=>{aa.value=window.innerWidth<=1024});const Qt=35,Ht=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Nt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Ht.value?Ht.value+"px":Qt+"%")}Nt();function Gt(B){const ve=Math.max(1,Math.min(B,2e3));Ht.value=ve,Nt();try{localStorage.setItem("qc_split_width",String(ve))}catch{}}function ft(B){if(Ht.value)return Ht.value;const ve=B?B.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ve*Qt/100))}let v=null;function $(B,ve){if(!ve||aa.value)return;B.preventDefault();const ye=ve.getBoundingClientRect().width;v={startX:B.clientX,startW:ft(ve),minW:Math.max(200,Math.floor(ye*Qt/100)),maxW:Math.floor(ye/2)},document.body.classList.add("qc-split-resizing")}function le(B){if(!v)return;const ve=B.clientX-v.startX;let ye=v.startW+ve;ye=Math.max(v.minW,Math.min(ye,v.maxW)),Ht.value=ye,Nt();try{localStorage.setItem("qc_split_width",String(ye))}catch{}}function Te(){v&&(v=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",le),document.addEventListener("mouseup",Te));function Ve(B){const ve=B.target&&B.target.closest?B.target.closest("[data-split-resize]"):null;if(!ve)return;const ye=ve.closest("[data-split-root]");$(B,ye)}typeof document<"u"&&document.addEventListener("mousedown",Ve,!0);const Qe={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},Oe=a({});function rt(B,ve){return Qe[ve]||ve}function nt(B){const ve=Ne.find(Fe=>Fe.key===B);if(!ve||!ve.subPages||!ve.subPages.length)return;if(!(Oe.value[B]||[]).length){const Fe=ve.subPages[0];Oe.value=Object.assign({},Oe.value,{[B]:[{subPage:Fe,title:rt(B,Fe)}]})}}function ct(B,ve){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=rt(B,ve);if(ye){const Ye=ye.openTab(Oe.value,B,ve,Fe);Oe.value=Ye.groups}else{const Ye=Oe.value[B]||[];Ye.some(Ft=>Ft.subPage===ve)||(Oe.value=Object.assign({},Oe.value,{[B]:Ye.concat([{subPage:ve,title:Fe}])}))}we(B,ve)}function Ot(B,ve){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=et.value;let Ye=null;if(ye)Ye=ye.closeTab(Oe.value,B,ve,Fe),Oe.value=Ye.groups;else{const jt=Oe.value[B]||[];Oe.value=Object.assign({},Oe.value,{[B]:jt.filter(ba=>ba.subPage!==ve)})}if(!(Oe.value[B]||[]).length){nt(B);const jt=Ne.find(os=>os.key===B),ba=jt&&jt.subPages&&jt.subPages[0];ba&&we(B,ba);return}const Xt=Ye?Ye.nextActive:null;Xt&&we(B,Xt)}function Et(B,ve){if(!(Oe.value[B]||[]).some(Fe=>Fe.subPage===ve)){ct(B,ve);return}we(B,ve)}d([Ge,et],([B,ve])=>{nt(B);const ye=Oe.value[B]||[];ve&&!ye.some(Fe=>Fe.subPage===ve)&&(Oe.value=Object.assign({},Oe.value,{[B]:ye.concat([{subPage:ve,title:rt(B,ve)}])}))},{immediate:!0});const L=function(B){if(!(B.ctrlKey&&B.key==="Tab"))return;const ve=Ge.value,ye=Oe.value[ve]||[];if(ye.length<=1)return;B.preventDefault();const Fe=et.value,Ye=Math.max(0,ye.findIndex(jt=>jt.subPage===Fe)),Ft=B.shiftKey?(Ye-1+ye.length)%ye.length:(Ye+1)%ye.length,Xt=ye[Ft];Xt&&Et(ve,Xt.subPage)};window.addEventListener("keydown",L);const fe=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),Le=a("light"),Me=[45,220,0,140,270,320],ze={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},He=a(45),mt=a(function(){const B=window.__quantModules&&window.__quantModules.preferences;return B&&B.getPreference&&B.getPreference("theme")||"system"}());(function(){const B=window.__quantModules&&window.__quantModules.preferences,ve=B&&B.getPreference&&B.getPreference("theme_hue");ve!=null&&ve!==""&&(He.value=parseInt(ve,10))})();function Mt(B){return"hsl("+B+", 75%, 42%)"}function it(B){return ze[B]||"自定义 "+B}const Bt=a(""),qa=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),ia=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),wa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],oa=a({day:[],week:[],month:[],year:[]}),Da=a({});function ra(B,ve){let ye=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(ye=window.__quantModules.themes.applyTheme(B,ve)),Le.value=ye&&ye.mode?ye.mode:B==="dark"||B==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Pa(B,ve){const ye=window.__quantModules&&window.__quantModules.preferences;if(!(!ye||!ye.setPreferences))try{ye.setPreferences({theme:B}),ve!=null&&ve!==""&&ye.setPreferences({theme_hue:parseInt(ve,10)})}catch{}}function ca(B,ve){ra(B,ve),ve!=null&&ve!==""&&(He.value=parseInt(ve,10));const ye=window.__quantModules&&window.__quantModules.themes;let Fe=B;ye&&ye.LEGACY_MAP&&ye.LEGACY_MAP[B]&&(Fe=ye.LEGACY_MAP[B][0]),Fe==="light"||Fe==="dark"||Fe==="system"?mt.value=Fe:mt.value=Le.value,Fe==="system"&&(Fe=Le.value),Pa(Fe,ve),ge.value&&(fetch(`/api/users/${ge.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Fe})}),ge.value.theme=Fe,localStorage.setItem("quant_user",JSON.stringify(ge.value)))}function $t(B){const ve=window.__quantModules&&window.__quantModules.preferences,ye=ve&&ve.getPreference?ve.getPreference("theme_hue"):null;ca(B,ye)}function ka(B){He.value=parseInt(B,10);const ve=window.__quantModules&&window.__quantModules.preferences,ye=ve&&ve.getPreference&&ve.getPreference("theme")||"light";ca(ye,He.value)}const ga=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function Ra(B){ga.value=!!B;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",B?"show":"hide")}catch{}}const za=e(()=>{const B=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ga.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...B]:B}),h=a("daily");(function(){try{const ve=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ve==="weekly"||ve==="monthly")&&(h.value=ve)}catch{}})();const s=a(!1),K=a(""),ie=a(!1),Ce=a(!1),qe=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Tt=["MA5","MA10","MA20","MA60"],$e=a(!1);let bt=0;async function Yt(B){if(!lt.value)return!1;const ve=++bt;s.value=!0,h.value=B;try{const Fe=await(await fetch(`/api/market/kline/${lt.value.stock}?period=${B}&limit=60`)).json();if(!Fe.success||!Fe.data)throw new Error(Fe.message||"数据获取失败");return K.value=Fe.degraded_from?"分钟数据("+Fe.degraded_from+")暂不可用, 已降级展示日线":"",$s(lt.value.stock),ve!==bt?!1:(kt.value!=="kline"||(Ce.value=!0,await p(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Fe.data,B,!1,{isMobile:ms.value,onLegend:Ye=>{Object.keys(qe.value).forEach(Ft=>{Ft in Ye&&(qe.value[Ft]=!!Ye[Ft])})}}),Dt()),!0)}catch(ye){return console.error("[kline] 加载失败:",lt.value&&lt.value.stock,B,ye),kt.value==="kline"&&(Ce.value=!1,K.value="",ElementPlus.ElMessage.error("K线加载失败: "+(ye&&ye.message?ye.message:"数据源不可达，请重试"))),!1}finally{s.value=!1}}async function Ct(B){if(Ua.value){ie.value=!0,h.value=B;try{const ye=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${B}&limit=60`)).json();if(!ye.success||!ye.data)throw new Error(ye.message||"数据获取失败");$e.value=!0,await p(),window.__quantModules.charts.renderKlineTo("indexKlineChart",ye.data,B,!0,{isMobile:ms.value,onLegend:Fe=>{Object.keys(qe.value).forEach(Ye=>{Ye in Fe&&(qe.value[Ye]=!!Fe[Ye])})}}),Dt()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{ie.value=!1}}}async function da(B){if(!Ce.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await Yt(B)}async function ua(B){if(!$e.value){ElementPlus.ElMessage.info("请先加载K线");return}await Ct(B)}function We(B){const ve=(at.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ve&&ve.dispatchAction({type:"legendToggleSelect",name:B})}function Dt(){["K线","MA5","MA10","MA20","MA60"].forEach(B=>{qe.value[B]=!0})}async function ha(){const B=await fetch("/api/system/metrics");if(!B.ok)throw new Error("metrics "+B.status);const ve=await B.json(),ye=Array.isArray(ve)?ve:ve&&ve.data_sources||[];Je.value=ye}const ya=()=>ls,Pt=()=>Es,Ka=()=>Ho,dn=()=>Aa,un=()=>ts,vn=window.__quantAppLogic.data.create({currentView:wt,statusFilter:Q,dashboardData:_t,loadHealthMetrics:ha,getLoadDashboardData:ya,getLastRefreshTime:Pt,getFetchPoolSignals:Ka}),{loading:mn,loadingView:pn,viewCache:fn,dates:Ia,selectedDate:sa,lastLoadTime:gn,consensus:_a,viewNote:hn,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ea,loadDashboardCached:Na}=vn,yn=window.__quantAppLogic.market.create({currentKlinePeriod:h,loadIndexKline:Ct,rememberDialogTrigger:F,menus:Ie,currentPage:Ge,currentSubPage:et,stockDetail:lt,selectedDate:sa}),{marketData:bn,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:wn,indexAiLoading:kn,fetchMarketData:Ga,showIndexDetail:_n,loadCachedIndexEval:xn,doIndexAiEvaluate:Sn,disposeStockKline:vs,isMobile:ms,zoomKlineRange:Cn,scoreAnimating:qn,scoreDelta:En,scorePulse:Mn,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Tn,onTouchEnd:Dn}=yn,Pn=window.__quantAppLogic.ops.create({navigateTo:we,currentPage:Ge,currentSubPage:et}),{feishuConfig:ps,feishuTestStatus:Rn,feishuTestMessage:zn,testFeishuWebhook:An,saveFeishuConfig:Ln,aiFabHidden:In,openAiFab:fs,strategyRecommendations:Nn,aiUsage:On,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:jn,analyticsRank:Vn,analyticsDays:Fn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Hn,loadHealthDetail:bs,reviewTriggering:Bn,triggerMarketReview:Kn,factCheck:Wn,factCheckRunning:Un,loadFactCheck:ws,triggerFactCheck:Gn,backups:Yn,backupCreating:Jn,loadBackups:ks,createBackup:Qn,restoreBackup:$n,reportExporting:Xn,reportExportMsg:Zn,exportReport:ei,tourVisible:ti,tourStep:ai,tourSteps:si,maybeShowTour:ni,skipTour:ii,finishTour:li,feedbackText:oi,feedbackSubmitting:ri,submitFeedback:ci}=Pn,di=window.__quantAppLogic.nav.create({currentView:wt,selectedDate:sa,dates:Ia,loadConsensusData:Ea,hapticFeedback:n}),{viewUnit:ui,datePickerType:vi,dateFormat:mi,canNavPrev:pi,canNavNext:fi,switchView:_s,navigateDate:xs,disabledDate:gi,onDateChange:hi}=di,yi=window.__quantAppLogic.keys.create({menus:Ie,subPageNames:Qe,navigateTo:we,currentPage:Ge,currentView:wt,navigateDate:xs,switchView:_s,getLoadDashboardData:ya,refreshCalendarData:ds,getLoadAiHistory:dn,exportCSV:us,getShowBatchEvaluate:un,openAiFab:fs,toggleSidebar:ae,showStockDetail:Cs}),{searchQuery:bi,searchStocks:wi,onSearchSelect:ki,shortcutHelpVisible:_i,commandPaletteVisible:xi,handleGlobalKeydown:Ss}=yi;let Oa=0;async function Cs(B){const ve=++Oa;F(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(B,""),Xa.value=null,h.value="daily",Ce.value=!1,kt.value="kline",lt.value=null,It.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),at.value=!0,p(()=>Ja());try{const ye=await fetch(`/api/calendar/stock/${B}?date=${sa.value}`);if(ve!==Oa)return;lt.value=await ye.json(),lt.value&&lt.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(B,lt.value.name)}catch{if(ve!==Oa)return;ElementPlus.ElMessage.error("加载失败"),lt.value={stock:B,name:"",total_days:0}}finally{ve===Oa&&(It.value=!1)}setTimeout(async()=>{await Yt("daily"),Ya()},500),as(B)}const Si={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},Ci={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function qi(B){return Si[B]||"var(--text-tertiary)"}function Ei(B){return Ci[B]||"var(--bg-hover)"}const Mi=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:Ce,stockDetailVisible:at,stockDetailTab:kt,stockDetail:lt,disposeStockKline:vs}):{},{chatSessions:Ti,chatHistoryView:Di,selectedChatIds:Pi,expandedChatDates:Ri,expandedChatMonths:zi,expandedChatStocks:Ai,chatHistoryLoading:Li,chatHistoryError:Ii,allChatSessionsFlat:Ni,chatGroupedByDate:Oi,chatGroupedByMonth:ji,chatGroupedByStock:Vi,toggleSelectChat:Fi,toggleSelectChatDate:Hi,toggleSelectChatMonth:Bi,toggleSelectChatStock:Ki,toggleChatDateExpand:Wi,toggleChatMonthExpand:Ui,toggleChatStockExpand:Gi,selectAllChatSessions:Yi,deleteSelectedChatSessions:Ji,viewChatSession:Qi,loadChatHistory:qs,deleteChatSession:$i,renderMarkdown:Xi,stockChatInput:Zi,stockChatMessages:el,stockChatLoading:tl,stockChatError:al,askStockSend:sl,askStockQuick:nl}=Mi,il=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:ge,applyTheme:ra,allMenuDefs:Ne,loadGroupConfig:Ue}):{},{userList:ll,userSearch:ol,groupFilter:rl,userPageTab:cl,expandedGroups:dl,addMemberGroupMap:ul,filteredUsers:vl,toggleGroupExpand:ml,removeMemberFromGroupInline:pl,addMemberToGroupInline:fl,changeUserGroup:gl,showAddUser:hl,editingUser:yl,userForm:bl,savingUser:wl,editingGroup:kl,menuConfigDialog:_l,memberDialog:xl,groupEditForm:Sl,subPageCache:Cl,showAddGroup:ql,addGroupForm:El,savingGroup:Ml,groupMembers:Tl,addMemberUsername:Dl,selectedMemberGroup:Pl,subPageSectionExpanded:Rl,toggleSubPageSection:zl,getGroupMemberCount:Al,getMenuEnabledCount:Ll,groupCount:Il,openMemberManager:Nl,loadGroupMembers:Ol,addMemberToGroup:jl,removeMemberFromGroup:Vl,availableUsersForGroup:Fl,onParentToggle:Hl,openMenuConfig:Bl,saveMenuConfig:Kl,deleteGroupConfig:Wl,createGroup:Ul,allGroups:Gl,getGroupName:Yl,loadAllGroups:$a,loadUsers:ja,editUser:Jl,saveUser:Ql,deleteUser:$l,toggleUserEnabled:Xl,resetUserPassword:Zl}=il,eo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:Ge,currentSubPage:et,dashboardData:_t,searchKeyword:Bt,statusFilter:Q,strategyFilter:ia,strategyFilterCounts:oa}):{},{applyStrategyFilter:Tf,statusCounts:to,stockPool:ao,strategyDistribution:so,strategyPreviewCount:no,saveStrategyFilter:io,filteredConsensusRank:lo,currentPoolSize:oo,filteredStrategyCounts:ro,poolChangeBadge:co,timeBarPercent:uo,lastRefreshTime:Es,timeSinceRefresh:vo,navigateToStrategyFilter:mo}=eo,po=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:A,consensus:_a}):{},{aiResult:Xa,lastEvalTime:fo,evalHistoryComparison:go,checklistItems:ho,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ds,expandedMonths:yo,expandedStocks:Ps,poolSignals:bo,toggleMonthExpand:wo,aiHistoryView:ko,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:_o,aiCatalog:xo,aiModelsError:So,testingAllModels:Co,savingAiModels:qo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Eo,testVendorModel:Mo,testAllVendorModels:To,fetchVendorModels:Do,addVendorFromCatalog:Po,addCustomVendor:Ro,addVendorModel:zo,removeVendorModel:Ao,removeVendor:Lo,toggleVendorKeyReveal:Io,toggleVendorEdit:No,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:Oo,providerInfo:jo,aiPresets:Df,applyPreset:Vo,onProviderChange:Fo,fetchPoolSignals:Ho,cancelPoolSignals:Qs,loadLastEvaluation:as}=po,Bo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:ge,selectedDate:sa,stockDetail:lt,stockDetailTab:kt,stockDetailVisible:at,stockDetailLoading:It,stockKlineLoaded:Ce,viewCache:fn,animateScoreEntrance:Ja,loadStockKline:Yt,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ds,expandedStocks:Ps,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Ko,evalStrategy:Wo,watchlistSort:Uo,watchlist:Go,watchlistCodes:Yo,sortedWatchlist:Jo,getWatchlistScore:Qo,getLatestScore:Pf,addSearchResult:$o,evaluatedCodes:Xo,klineLoadedCodes:Zo,markKlineLoaded:$s,watchlistSearch:er,watchlistResults:tr,watchlistSearching:ar,dataRefreshConfig:sr,dataRefreshReloading:nr,dataRefreshSaving:ir,aiHistoryLoading:lr,aiHistoryError:or,aiHistoryTotal:rr,aiHistoryLoadingMore:cr,hasMoreAiHistory:dr,loadMoreAiHistory:ur,watchlistLoading:vr,doAiEvaluate:mr,loadAiHistory:Aa,deleteSingleHistory:pr,toggleSelectHistory:fr,clearSelection:gr,clearWatchlistSelection:hr,batchReevaluateHistory:yr,batchAddToWatchlist:br,batchRemoveWatchlist:wr,toggleSelectWatchlist:kr,selectAllHistory:_r,selectAllWatchlist:xr,deleteSelectedHistory:Sr,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:Cr,loadWatchlist:Zs,addToWatchlist:qr,removeFromWatchlist:Er,clearWatchlist:Mr,toggleWatchlist:Tr,showStockKline:Dr,preloadingKline:Pr,preloadWatchlistKline:en,watchlistEvaluate:Rr,batchEvaluateWatchlist:zr,batchEvaluateSelected:Ar,searchStockForWatchlist:Lr,loadDataRefreshConfig:tn,saveDataRefreshConfig:Ir,triggerDataReload:Nr,triggerDataPull:Or,dataPullRunning:jr,groupedByDate:Vr,aiHistoryByStock:Fr,groupedByMonth:Hr,aiHistoryStockCount:Br,scoreDistribution:Kr,quickEvaluate:Wr,toggleDateExpand:Ur,toggleSelectDate:Gr,toggleSelectMonth:Yr,toggleStockExpand:Jr,toggleSelectStock:Qr,registerTrendChart:$r,viewAiResult:Xr,doBatchEvaluate:Zr,realtimeQuotes:ec,realtimeDegraded:tc,realtimeWsState:ac,connectRealtimeQuotes:sc,disconnectRealtimeQuotes:nc,quoteWarningFor:ic,realtimeQuoteColor:lc,realtimePriceText:oc,realtimePctText:rc,realtimeRatioText:cc,REALTIME_DEGRADED_TEXT:dc,REALTIME_FALLBACK_TEXT:uc}=Bo,vc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Re}):{},{btStrategyOptions:mc,btSelectedStrategies:pc,toggleBtStrategy:fc,btDateRange:gc,btCapital:hc,btCommissionRate:yc,btIncludeBenchmark:bc,btRunning:wc,btResult:kc,btError:_c,btMetrics:xc,btAnnualReturns:Sc,btTrades:Cc,btStrategyMetricsRows:qc,btDrawdownRegion:Ec,runBacktestWorkbench:Mc,exportBacktestCSV:Tc,registerBacktestNavChart:Dc,btFmtNum:Pc}=vc,Rc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:A,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:Le,changeTheme:ca,autoEvaluateConfig:Za,currentUser:ge,strategyFilter:ia,applyTheme:ra,dashboardData:_t,lastRefreshTime:Es,saveAiModels:Eo}):{},{configSaving:zc,globalConfigDirty:Ac,lastSavedTime:Lc,feishuConfigOriginal:Rf,aiConfigOriginal:zf,tushareConfigOriginal:Af,tushareConfig:Ic,tushareStatus:Nc,datasourceConfig:Oc,datasourceStatus:jc,syncingData:Vc,stockCount:Fc,tradeDateCount:Hc,aiStatus:Bc,appVersion:an,showImportDialog:Kc,rateLimitConfig:Wc,rateLimitDirty:Uc,rateLimitSaving:Gc,loadRateLimit:ss,saveRateLimit:Yc,saveAiConfig:Jc,testAiApi:Qc,exportConfig:$c,importConfig:Xc,saveAllConfig:Zc,resetAllConfig:ed,testTushareConnection:td,checkTushareConnection:Fa,syncStockData:ad,loadTushareConfig:sn,loadDatasourceConfig:nn,saveDatasourceConfig:sd,testDatasource:nd,toggleDatasourceKeyReveal:id,toggleDatasourceEdit:ld,loadFeishuConfig:ns,loadAiConfig:Ha,loadUserConfig:ln,loadSystemStatus:is,loadDashboardData:ls}=Rc,od=window.__quantAppLogic.auth.create({currentUser:ge,loadUserConfig:ln,loadDates:cs,loadDashboardData:ls,loadDashboardCached:Na,loadHealthMetrics:ha,loadConsensusData:Ea,applyTheme:ra,maybeShowTour:ni,loadAiVendors:Va,loadGroupConfig:Ue,groupsConfig:he}),{loginForm:rd,logining:cd,guestLogining:dd,showChangePassword:ud,changePasswordForm:vd,changingPassword:md,showSetupWizard:pd,setupForm:fd,setupStep:gd,checkSetupWizard:hd,completeSetupWizard:yd,resetSetupWizard:bd,handleLogin:wd,handleGuestLogin:kd,handleLogout:_d,doChangePassword:xd}=od;window.__quantAppLogic.watch.register({strategyFilter:ia,currentView:wt,statusFilter:Q,currentPage:Ge,currentSubPage:et,menus:Ie,currentUser:ge,strategyFilterCounts:oa,lazyTick:Wt,dates:Ia,selectedDate:sa,consensus:_a,loadConsensusData:Ea,fetchMerrillClock:P,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:Aa,preloadWatchlistKline:en,loadChatHistory:qs,loadSystemStatus:is,checkTushareConnection:Fa,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:ha,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:nn,loadFeishuConfig:ns,loadAiConfig:Ha,loadAiVendors:Va,loadRateLimit:ss,loadDataRefreshConfig:tn,loadBackups:ks,loadAllGroups:$a,loadUsers:ja,stockDetailTab:kt,stockDetailVisible:at,stockKlineLoaded:Ce,loadStockKline:Yt,currentKlinePeriod:h,showMerrillDetail:E,indexDetailVisible:Wa,restoreDialogFocus:C});const Sd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:ra,menus:Ie,currentPage:Ge,currentSubPage:et,currentView:wt,currentKlinePeriod:h,selectedDate:sa,dates:Ia,loadDates:cs,loadConsensusData:Ea,loadDashboardCached:Na,appVersion:an,themes:fe,fetchMarketData:Ga,fetchMerrillStages:Z,fetchMerrillClock:P,loadMerrillTimeline:G,showTimelineStage:re,merrillTimeline:pe,timelineLoading:de,loadAiConfig:Ha,loadAiVendors:Va,loadAiCatalog:Is,currentUser:ge,loadUserConfig:ln,loadAutoEvaluateConfig:Xs,loadGroupConfig:Ue,loadUsers:ja,loadAllGroups:$a,loadAiHistory:Aa}),{runOnMounted:Cd}=Sd;window.__quantGoPage=async(B,ve)=>{try{const ye=window.__lazyLoaders&&window.__lazyLoaders[B];ye&&await ye()}catch(ye){console.warn("[lazy] 页面组件加载失败",B,ye)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(ye=>{ye&&ye.name&&!ye.__quantRegistered&&(window.__quantApp.component(ye.name,ye),ye.__quantRegistered=!0)}),Wt&&Wt.value++,Ge.value=B,ve&&(et.value=ve)};let Ma;d(Ge,async B=>{var ve;n("light");try{const ye=Ne.find(function(Fe){return Fe.key===B});document.title=(ye?ye.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",B),B!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:B})}).catch(()=>{})}catch(ye){console.warn("pageView track failed:",ye)}if(Ma&&(clearInterval(Ma),Ma=null),B==="strategies")await Na(),Ma=setInterval(()=>{Na().catch(()=>{})},5*60*1e3);else if(B==="calendar")sa.value&&await Ea();else if(B==="ai")gs(),Qa(),await Aa();else if(B==="system"){if(!sa.value){const Fe=await(await fetch("/api/dashboard")).json(),Ye=Fe.data||Fe;Ye.latest_date&&(sa.value=Ye.latest_date)}if(sa.value){const ye=["day","week","month","year"];for(const Fe of ye)try{const Ft=await(await fetch(`/api/view/${Fe}/${sa.value}?status=all`)).json();oa.value[Fe]=Ft.stocks||[]}catch(Ye){console.warn("loadConsensusData view load failed:",Ye)}(!_a.value||_a.value.length===0)&&(_a.value=oa.value.day||[])}((ve=ge.value)==null?void 0:ve.role)==="admin"&&(await ja(),await ns(),await sn(),await is(),await Ha(),await ss(),Fa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Fa,36e5)))}}),f(async()=>{await Cd()}),ke(),G(),t(()=>{Ma&&clearInterval(Ma),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",L)});function qd(B,ve=2){return B==null||B===""||isNaN(Number(B))?"--":Number(B).toFixed(ve)}return{currentPage:Ge,pageComp:gt,currentSubPage:et,sidebarCollapsed:ne,menus:Ie,navMode:st,setNavMode:Rt,tabGroups:Oe,openTab:ct,closeTab:Ot,activateTab:Et,fmtNum:qd,sanitizeHtml:M,keyClick:_,isOnline:c,currentUser:ge,allMenuDefs:Ne,t:S,locale:i,changeLanguage:b,currentPageName:yt,subPageNames:Qe,searchQuery:bi,searchStocks:wi,onSearchSelect:ki,selectedDate:sa,onDateChange:hi,disabledDate:gi,refreshCalendarData:ds,exportCSV:us,viewNote:hn,loading:mn,lastLoadTime:gn,resetSetupWizard:bd,showChangePassword:ud,themes:fe,currentTheme:Le,changeTheme:ca,changeThemeMode:$t,changeThemeHue:ka,handleLogout:_d,themeHues:Me,themeHueNames:ze,themeHue:He,themeMode:mt,hueColor:Mt,hueName:it,marketData:bn,merrillData:l,merrillTimeline:pe,timelineLoading:de,merrillStagesConfig:x,fetchMerrillStages:Z,merrillSnapshots:te,merrillSnapshotsTotal:xe,healthMetrics:Je,feishuConfig:ps,feishuTestStatus:Rn,feishuTestMessage:zn,shortcutHelpVisible:_i,shortcutHelpItems:Se,commandPaletteVisible:xi,tourVisible:ti,tourStep:ai,tourSteps:si,skipTour:ii,finishTour:li,backups:Yn,backupCreating:Jn,loadBackups:ks,createBackup:Qn,restoreBackup:$n,reportExporting:Xn,reportExportMsg:Zn,exportReport:ei,sysMonitor:jn,analyticsRank:Vn,analyticsDays:Fn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Hn,loadHealthDetail:bs,reviewTriggering:Bn,triggerMarketReview:Kn,factCheck:Wn,factCheckRunning:Un,loadFactCheck:ws,triggerFactCheck:Gn,strategyRecommendations:Nn,aiUsage:On,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:In,openAiFab:fs,feedbackText:oi,feedbackSubmitting:ri,submitFeedback:ci,backtestStrategies:Re,backtestStrategy:Xe,backtestRange:Ze,backtestCapital:tt,backtestRunning:xt,backtestResult:St,runBacktest:Kt,btStrategyOptions:mc,btSelectedStrategies:pc,toggleBtStrategy:fc,btDateRange:gc,btCapital:hc,btCommissionRate:yc,btIncludeBenchmark:bc,btRunning:wc,btResult:kc,btError:_c,btMetrics:xc,btAnnualReturns:Sc,btTrades:Cc,btStrategyMetricsRows:qc,btDrawdownRegion:Ec,runBacktestWorkbench:Mc,exportBacktestCSV:Tc,registerBacktestNavChart:Dc,btFmtNum:Pc,fetchMarketData:Ga,fetchMerrillClock:P,testFeishuWebhook:An,saveFeishuConfig:Ln,merrillClockConfig:X,merrillClockLastUpdated:R,merrillReevalResult:q,merrillReevalLoading:I,saveMerrillClockConfig:oe,doMerrillReevaluate:Pe,dataRefreshConfig:sr,dataRefreshReloading:nr,dataRefreshSaving:ir,loadDataRefreshConfig:tn,saveDataRefreshConfig:Ir,triggerDataReload:Nr,triggerDataPull:Or,dataPullRunning:jr,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:wn,indexAiLoading:kn,loadCachedIndexEval:xn,showIndexDetail:_n,doIndexAiEvaluate:Sn,klinePeriods:za,currentKlinePeriod:h,klineLoading:s,indexKlineLoading:ie,stockKlineLoaded:Ce,indexKlineLoaded:$e,klineDegradeNote:K,klineShowMinutes:ga,toggleKlineShowMinutes:Ra,loadStockKline:Yt,switchKlinePeriod:da,loadIndexKline:Ct,switchIndexKlinePeriod:ua,zoomKlineRange:Cn,MA_LINES:Tt,klineMaVisible:qe,toggleKlineMa:We,scoreAnimating:qn,scoreDelta:En,scorePulse:Mn,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:E,merrillDetailData:O,showStageDetail:J,getCharLabel:m,getAssetName:W,getRankColor:ue,levelColor:qi,levelBg:Ei,timelineStages:H,getStageAngle:ce,getCycleProgress:U,getCurrentStageMonths:y,getStageTotalMonths:o,isStageCompleted:T,stages:V,indicatorList:se,dimensionScoreList:Y,confidenceColor:j,views:At,currentView:wt,statusFilter:Q,loginForm:rd,logining:cd,guestLogining:dd,dashboardData:_t,loadingView:pn,dates:Ia,consensus:_a,searchKeyword:Bt,stockDetailVisible:at,stockDetailTab:kt,stockDetail:lt,stockDetailLoading:It,detailDisplayMode:ea,setDetailDisplayMode:ta,isNarrow:aa,detailSplitEnabled:na,splitWidth:Ht,setSplitWidth:Gt,SPLIT_DEFAULT_PCT:Qt,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:ll,showAddUser:hl,editingUser:yl,userForm:bl,savingUser:wl,userSearch:ol,filteredUsers:vl,groupFilter:rl,userPageTab:cl,expandedGroups:dl,addMemberGroupMap:ul,toggleGroupExpand:ml,removeMemberFromGroupInline:pl,addMemberToGroupInline:fl,changeUserGroup:gl,statusCounts:to,stockPool:ao,poolSignals:bo,aiResult:Xa,aiHistory:Ms,groupedByDate:Vr,groupedByMonth:Hr,expandedDates:Ds,expandedMonths:yo,aiHistoryByStock:Fr,aiHistoryStockCount:Br,expandedStocks:Ps,aiHistoryView:ko,aiHistoryLoading:lr,aiHistoryError:or,aiHistoryTotal:rr,aiHistoryLoadingMore:cr,hasMoreAiHistory:dr,loadMoreAiHistory:ur,watchlistLoading:vr,scoreDistribution:Kr,quickEvalStock:Ko,evalStrategy:Wo,checklistItems:ho,evalHistoryComparison:go,quickEvaluate:Wr,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:qa,toggleDateExpand:Ur,toggleMonthExpand:wo,toggleSelectDate:Gr,toggleSelectMonth:Yr,toggleSelectStock:Qr,toggleStockExpand:Jr,registerTrendChart:$r,selectedWatchlistCodes:Rs,clearWatchlistSelection:hr,toggleSelectWatchlist:kr,selectAllHistory:_r,selectAllWatchlist:xr,batchRemoveWatchlist:wr,batchEvaluateSelected:Ar,batchReevaluateHistory:yr,batchAddToWatchlist:br,viewUnit:ui,datePickerType:vi,dateFormat:mi,canNavPrev:pi,canNavNext:fi,handleLogin:wd,handleGuestLogin:kd,switchView:_s,navigateDate:xs,navigateTo:we,loadDashboardData:ls,loadConsensusData:Ea,showStockDetail:Cs,doAiEvaluate:mr,doBatchEvaluate:Zr,loadAiHistory:Aa,loadLastEvaluation:as,lastEvalTime:fo,viewAiResult:Xr,saveAiConfig:Jc,testAiApi:Qc,exportConfig:$c,importConfig:Xc,configSaving:zc,configChanged:A,watchlist:Go,watchlistCodes:Yo,watchlistSearch:er,watchlistResults:tr,watchlistSearching:ar,watchlistSort:Uo,sortedWatchlist:Jo,getWatchlistScore:Qo,addSearchResult:$o,evaluatedCodes:Xo,klineLoadedCodes:Zo,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:qr,removeFromWatchlist:Er,clearWatchlist:Mr,searchStockForWatchlist:Lr,toggleWatchlist:Tr,batchEvaluateWatchlist:zr,watchlistEvaluate:Rr,showStockKline:Dr,preloadWatchlistKline:en,preloadingKline:Pr,realtimeQuotes:ec,realtimeDegraded:tc,realtimeWsState:ac,connectRealtimeQuotes:sc,disconnectRealtimeQuotes:nc,quoteWarningFor:ic,realtimeQuoteColor:lc,realtimePriceText:oc,realtimePctText:rc,realtimeRatioText:cc,REALTIME_DEGRADED_TEXT:dc,REALTIME_FALLBACK_TEXT:uc,toggleSelectHistory:fr,clearSelection:gr,deleteSingleHistory:pr,deleteSelectedHistory:Sr,saveAutoEvaluateConfig:Cr,editUser:Jl,saveUser:Ql,deleteUser:$l,loadUsers:ja,allGroups:Gl,loadAllGroups:$a,getGroupName:Yl,toggleUserEnabled:Xl,resetUserPassword:Zl,selectedPreset:Oo,applyPreset:Vo,onProviderChange:Fo,providerInfo:jo,globalConfigDirty:Ac,lastSavedTime:Lc,tushareConfig:Ic,tushareStatus:Nc,syncingData:Vc,stockCount:Fc,tradeDateCount:Hc,aiStatus:Bc,appVersion:an,showImportDialog:Kc,rateLimitConfig:Wc,rateLimitDirty:Uc,rateLimitSaving:Gc,loadRateLimit:ss,saveRateLimit:Yc,saveAllConfig:Zc,resetAllConfig:ed,testTushareConnection:td,syncStockData:ad,loadTushareConfig:sn,loadFeishuConfig:ns,loadSystemStatus:is,loadAiConfig:Ha,aiVendors:_o,aiCatalog:xo,aiModelsError:So,testingAllModels:Co,savingAiModels:qo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:Mo,testAllVendorModels:To,fetchVendorModels:Do,addVendorFromCatalog:Po,addCustomVendor:Ro,addVendorModel:zo,removeVendorModel:Ao,removeVendor:Lo,toggleVendorKeyReveal:Io,toggleVendorEdit:No,checkTushareConnection:Fa,datasourceConfig:Oc,datasourceStatus:jc,loadDatasourceConfig:nn,saveDatasourceConfig:sd,testDatasource:nd,toggleDatasourceKeyReveal:id,toggleDatasourceEdit:ld,strategyFilter:ia,strategyFilterOptions:wa,strategyFilterCounts:oa,strategyPreviewCount:no,saveStrategyFilter:io,filteredConsensusRank:lo,currentPoolSize:oo,filteredStrategyCounts:ro,strategyDistribution:so,expandedStrategies:Da,poolChangeBadge:co,timeBarPercent:uo,timeSinceRefresh:vo,navigateToStrategyFilter:mo,showUserMenu:Ut,toggleSidebar:ae,groupsConfig:he,loadGroupConfig:Ue,editingGroup:kl,groupEditForm:Sl,showAddGroup:ql,addGroupForm:El,savingGroup:Ml,menuConfigDialog:_l,memberDialog:xl,groupMembers:Tl,addMemberUsername:Dl,selectedMemberGroup:Pl,subPageSectionExpanded:Rl,toggleSubPageSection:zl,getGroupMemberCount:Al,getMenuEnabledCount:Ll,groupCount:Il,openMemberManager:Nl,loadGroupMembers:Ol,addMemberToGroup:jl,removeMemberFromGroup:Vl,availableUsersForGroup:Fl,subPageCache:Cl,onParentToggle:Hl,openMenuConfig:Bl,saveMenuConfig:Kl,deleteGroupConfig:Wl,createGroup:Ul,changePasswordForm:vd,changingPassword:md,doChangePassword:xd,showSetupWizard:pd,setupForm:fd,setupStep:gd,checkSetupWizard:hd,completeSetupWizard:yd,chatSessions:Ti,chatHistoryView:Di,selectedChatIds:Pi,expandedChatDates:Ri,expandedChatMonths:zi,expandedChatStocks:Ai,chatHistoryLoading:Li,chatHistoryError:Ii,allChatSessionsFlat:Ni,chatGroupedByDate:Oi,chatGroupedByMonth:ji,chatGroupedByStock:Vi,toggleSelectChat:Fi,toggleSelectChatDate:Hi,toggleSelectChatMonth:Bi,toggleSelectChatStock:Ki,toggleChatDateExpand:Wi,toggleChatMonthExpand:Ui,toggleChatStockExpand:Gi,selectAllChatSessions:Yi,deleteSelectedChatSessions:Ji,viewChatSession:Qi,loadChatHistory:qs,deleteChatSession:$i,renderMarkdown:Xi,stockChatInput:Zi,stockChatMessages:el,stockChatLoading:tl,stockChatError:al,askStockSend:sl,askStockQuick:nl,onTouchStart:Tn,onTouchEnd:Dn,hapticFeedback:n}}})();Sa.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=nm;window.__quantComponents.Header=tp;window.__quantComponents.SubNav=pp;window.__quantComponents.MobileNav=zp;window.__quantComponents.StockList=pf;window.__quantComponents.DetailSplit=yf;window.__quantComponents.TopTabs=Ef;window.__quantComponents.AppIcon=Sa;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Mf();
