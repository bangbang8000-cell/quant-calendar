var Md=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as Td,L as me,O as pa,Z as Pd,au as Zt,M as be,P as Ee,aW as Dd,a0 as Ke,_ as Be,F as vt,al as qt,S as dt,a1 as ut,X as ma,ai as Vt,q as Ta,o as Ba,a8 as rs,r as Lt,e as ot,av as Rd,Y as La,$ as xa,R as zd,aC as va,T as Ad,Q as la,p as Ld,n as Id}from"./vendor-vue-DDF9zi1T.js";import{e as Nd,E as Od,a as jd,b as Vd,c as Fd,z as Hd}from"./vendor-ep-VOop1zGa.js";import{C as Bd,a as Kd,W as Wd,I as Ud,S as Gd,B as Yd,F as Jd,b as Qd,c as $d,d as Xd,e as Zd,f as eu,P as tu,g as au,h as su,i as nu,T as iu,j as lu,L as ou,k as ru,G as cu,U as du,l as uu,m as vu,n as mu,D as pu,o as fu,p as gu,M as hu,q as yu,R as bu,r as wu,s as ku,K as _u,t as xu,u as Su,v as Cu,w as qu,x as Eu,y as Mu,z as Tu,A as Pu,E as Du,H as Ru,O as zu,J as Au,N as Lu,Q as Iu,V as Nu,X as Ou,Y as ju,Z as Vu,_ as Fu,$ as Hu,a0 as Bu,a1 as Ku,a2 as Wu,a3 as Uu,a4 as Gu,a5 as Yu,a6 as Ju,a7 as Qu,a8 as $u,a9 as Xu,aa as Zu,ab as ev,ac as tv,ad as av,ae as sv,af as nv,ag as iv,ah as lv,ai as ov,aj as rv,ak as cv,al as dv,am as uv,an as vv,ao as mv,ap as pv,aq as fv,ar as gv,as as hv,at as yv,au as bv,av as wv,aw as kv,ax as _v,ay as xv,az as Sv,aA as Cv,aB as qv,aC as Ev,aD as Mv,aE as Tv,aF as Pv,aG as Dv,aH as Rv,aI as zv,aJ as Av,aK as Lv,aL as Iv,aM as Nv,aN as Ov,aO as jv,aP as Vv,aQ as Fv}from"./vendor-lucide-DidEUx9K.js";var Mf=Md((Vf,je)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))t(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const D of p.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&t(D)}).observe(document,{childList:!0,subtree:!0});function f(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function t(u){if(u.ep)return;u.ep=!0;const p=f(u);fetch(u.href,p)}})();window.Vue=Td;const fa=Nd||{};window.ElementPlus=fa;fa.ElMessage=fa.ElMessage||Od;fa.ElMessageBox=fa.ElMessageBox||jd;fa.ElNotification=fa.ElNotification||Vd;fa.ElLoading=fa.ElLoading||Fd;window.ElementPlusLocaleZhCn={default:Hd};(function(){const a=[45,220,0,140,270,320],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},f={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(i,l,s){return"hsl("+i+", "+l+"%, "+s+"%)"}function u(i,l,s){l=l/100,s=s/100;const r=function(A){return(A+i/30)%12},R=l*Math.min(s,1-s),P=function(A){return s-R*Math.max(-1,Math.min(r(A)-3,Math.min(9-r(A),1)))};return Math.round(255*P(0))+", "+Math.round(255*P(8))+", "+Math.round(255*P(4))}const p=5;function D(i,l,s){return u(i,l,s).split(",").map(function(r){return parseInt(r,10)})}function g(i){const l=function(s){return s=s/255,s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4)};return .2126*l(i[0])+.7152*l(i[1])+.0722*l(i[2])}function d(i,l){const s=g(i),r=g(l),R=Math.max(s,r),P=Math.min(s,r);return(R+.05)/(P+.05)}function w(i,l,s,r,R){let P=38,A=76;for(let G=0;G<24;G++){const ae=(P+A)/2;d(D(i,r,ae),D(i,l,s))>=R?A=ae:P=ae}return Math.round(A*10)/10}function o(i){const l=u(i,75,42);return{"--primary-color":t(i,75,42),"--primary-rgb":l,"--color-primary":t(i,75,42),"--qc-primary":t(i,75,42),"--qc-primary-50":t(i,90,96),"--qc-primary-100":t(i,85,92),"--qc-primary-200":t(i,80,84),"--qc-primary-300":t(i,75,72),"--qc-primary-400":t(i,70,58),"--qc-primary-500":t(i,75,48),"--qc-primary-600":t(i,80,42),"--qc-primary-700":t(i,85,35),"--qc-primary-800":t(i,88,28),"--qc-primary-900":t(i,90,20),"--qc-primary-foreground":"#ffffff","--text-link":t(i,70,40),"--secondary-color":t(i,70,55),"--card-border":t(i,55,82),"--bg-selected":"rgba("+l+", 0.08)","--btn-primary-bg":t(i,80,32),"--btn-primary-border":t(i,80,32),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(i,82,28),"--btn-primary-hover-border":t(i,82,28),"--btn-primary-active-bg":t(i,85,24),"--btn-primary-active-border":t(i,85,24),"--btn-primary-plain-bg":"rgba("+l+", 0.08)","--btn-primary-plain-border":"rgba("+l+", 0.25)","--btn-primary-plain-color":t(i,80,32),"--btn-primary-plain-hover-bg":"rgba("+l+", 0.15)","--btn-primary-plain-hover-border":t(i,80,32),"--btn-primary-text-color":t(i,80,32),"--gradient":"linear-gradient(135deg, "+t(i,80,28)+" 0%, "+t(i,76,34)+" 50%, "+t(i,70,44)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(i,76,34)+" 0%, "+t(i,85,26)+" 100%)","--gradient-panel":"linear-gradient(135deg, "+t(i,62,Math.min(74,w(i,45,14,58,p)+5))+" 0%, "+t(i,58,w(i,45,14,58,p))+" 100%)","--panel-fg":t(i,45,14),"--qc-nav-item-active":t(i,80,35),"--qc-nav-item-active-bg":t(i,85,92),"--qc-nav-item-active-border":t(i,75,48),"--qc-nav-badge-bg":t(i,85,92),"--qc-nav-badge-text":t(i,80,35),"--qc-ring":t(i,70,58)}}function x(i){const l=u(i,85,65);return{"--primary-color":t(i,85,65),"--primary-rgb":l,"--color-primary":t(i,85,65),"--qc-primary":t(i,90,65),"--qc-primary-50":t(i,50,18),"--qc-primary-100":t(i,55,22),"--qc-primary-200":t(i,55,26),"--qc-primary-300":t(i,60,30),"--qc-primary-400":t(i,65,38),"--qc-primary-500":t(i,80,52),"--qc-primary-600":t(i,90,65),"--qc-primary-700":t(i,92,72),"--qc-primary-800":t(i,90,80),"--qc-primary-900":t(i,92,88),"--qc-primary-foreground":"#101014","--text-link":t(i,85,65),"--secondary-color":t(i,70,60),"--card-border":t(i,30,25),"--bg-selected":"rgba("+l+", 0.10)","--btn-primary-bg":t(i,85,65),"--btn-primary-border":t(i,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(i,80,72),"--btn-primary-hover-border":t(i,80,72),"--btn-primary-active-bg":t(i,75,80),"--btn-primary-active-border":t(i,75,80),"--btn-primary-plain-bg":"rgba("+l+", 0.08)","--btn-primary-plain-border":"rgba("+l+", 0.25)","--btn-primary-plain-color":t(i,85,65),"--btn-primary-plain-hover-bg":"rgba("+l+", 0.15)","--btn-primary-plain-hover-border":t(i,85,65),"--btn-primary-text-color":t(i,85,65),"--gradient":"linear-gradient(135deg, "+t(i,80,35)+" 0%, "+t(i,85,50)+" 50%, "+t(i,85,65)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(i,85,65)+" 0%, "+t(i,80,40)+" 100%)","--gradient-panel":"linear-gradient(135deg, "+t(i,60,Math.min(76,w(i,40,12,55,p)+5))+" 0%, "+t(i,55,w(i,40,12,55,p))+" 100%)","--panel-fg":t(i,40,12),"--qc-nav-item-active":t(i,85,65),"--qc-nav-item-active-bg":"rgba("+l+", 0.10)","--qc-nav-item-active-border":t(i,85,65),"--qc-nav-badge-bg":"rgba("+l+", 0.12)","--qc-nav-badge-text":t(i,85,65),"--qc-ring":t(i,85,65)}}function b(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function E(i){return i=parseInt(i,10),isNaN(i)?45:Math.max(0,Math.min(359,i))}function _(i,l){let s=i||"light",r=l==null||l===""?null:l;if(e[i]){const G=e[i];s=G[0],r==null&&(r=G[1])}s==="system"&&(s=b()?"dark":"light");const R=s==="dark";r=E(r??45);const P=document.documentElement;P.setAttribute("data-theme",R?"dark-pro":"gold"),P.setAttribute("data-theme-mode",R?"dark":"light");const A=R?x(r):o(r);Object.keys(A).forEach(function(G){P.style.setProperty(G,A[G])});try{localStorage.setItem("quant_theme_mode",R?"dark":"light"),localStorage.setItem("quant_theme_hue",String(r))}catch{}return{mode:R?"dark":"light",hue:r}}function M(){const i=localStorage.getItem("quant_theme");if(!i||!e[i]||localStorage.getItem("quant_theme_hue")!==null)return null;const l=e[i];return{mode:l[0],hue:l[1]}}function N(){const i=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let l=i.theme||"system",s=i.theme_hue!=null&&i.theme_hue!==""?i.theme_hue:null;const r=M();return s==null&&r&&(l=r.mode,s=r.hue),s==null&&(s=45),_(l,s)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:f,generateLightTokens:o,generateDarkTokens:x,migrateLegacyTheme:M,applyTheme:_,init:N},N()})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],f={};let t=a,u=null;function p(){return u&&typeof u=="object"&&"value"in u?u.value||a:t}function D(b,E){return e.indexOf(b)===-1?!1:(f[b]=E&&typeof E=="object"?E:{},!0)}function g(b){const E=e.indexOf(b)!==-1?b:a;return t=E,u&&typeof u=="object"&&"value"in u&&(u.value=E),typeof document<"u"&&document.documentElement.setAttribute("lang",E),t}function d(){return p()}function w(b){if(b&&typeof b=="object"&&"value"in b){u=b;const E=e.indexOf(b.value)!==-1?b.value:a;b.value=E,t=E}return t}function o(b,E){const _=p(),M=f[_]||{};let N=b in M?M[b]:null;if(N==null&&_!=="en"){const i=f.en||{};N=b in i?i[b]:null}return N==null&&(N=String(b)),E&&typeof E=="object"&&Object.keys(E).forEach(function(i){N=N.replace(new RegExp("\\{"+i+"\\}","g"),String(E[i]))}),N}const x={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:f,registerLocale:D,setLocale:g,getLocale:d,bindLocale:w,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=x),x});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let f=[];function t(_){const M=String(_||"");let N="";for(const i of M){const l=a[i];l?N+=l.charAt(0):/[a-zA-Z0-9]/.test(i)&&(N+=i.toLowerCase())}return N}function u(_){const M=String(_||"");let N="";for(const i of M){const l=a[i];l?N+=l:/[a-zA-Z0-9]/.test(i)&&(N+=i.toLowerCase())}return N}function p(_){return String(_||"").trim().toLowerCase()}function D(_,M){const N=(M.code||"").toLowerCase();return/^\d+$/.test(_)?N.indexOf(_)!==-1:/[\u4e00-\u9fa5]/.test(_)?(M.name||"").toLowerCase().indexOf(_)!==-1:N.indexOf(_)!==-1||(M.initials||t(M.name)).indexOf(_)!==-1||(M.pinyin||u(M.name)).indexOf(_)!==-1}function g(_){const M={},N=[],i=function(l,s,r){!l||M[l]||(M[l]=!0,N.push({code:l,name:s||l,source:r||"core",initials:t(s||l),pinyin:u(s||l)}))};return e.forEach(function(l){i(l.code,l.name,"core")}),(_||[]).forEach(function(l){i(l.code,l.name,"extra")}),N}function d(_,M){const N=p(_);if(!N||!M||!M.length)return[];const i=N.split(/[\s,，、;；]+/).filter(Boolean);return i.length?M.filter(function(l){return i.every(function(s){return D(s,l)})}).slice(0,20).map(function(l){return{code:l.code,name:l.name,source:l.source||"core"}}):[]}function w(_){Array.isArray(_)&&(f=f.concat(_))}function o(){return f.slice()}function x(){return g(f)}function b(_){return d(_,x())}const E={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:u,normalizeQuery:p,matchToken:D,buildStockIndex:g,searchStocksByQuery:d,registerExtraStocks:w,getExtraStocks:o,getStockIndex:x,searchCoreStocks:b};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=E),E});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},f=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function u(s){return s=parseInt(s,10),!isNaN(s)&&s>=0&&s<=360}const p={light:"classic-white",dark:"dark-pro"};function D(){if(typeof localStorage>"u")return{};try{const s=localStorage.getItem(a);if(!s)return{};const r=JSON.parse(s);return r&&typeof r=="object"?r:{}}catch{return{}}}function g(s){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(s))}catch{}}function d(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function w(){const s=Object.assign({},e,D()),r={};return f.forEach(function(R){const P=s[R];r[R]=R==="theme_hue"?u(P)?parseInt(P,10):e[R]:t[R].indexOf(P)!==-1?P:e[R]}),r}function o(s){if(f.indexOf(s)!==-1)return w()[s]}function x(s,r){return f.indexOf(s)===-1?!1:s==="theme_hue"?u(r):t[s].indexOf(r)!==-1}function b(s,r){if(!x(s,r))return!1;const R=D();return R[s]=r,g(R),d()&&_({[s]:r}),!0}function E(s){if(!s||typeof s!="object")return!1;const r={};if(Object.keys(s).forEach(function(P){x(P,s[P])&&(r[P]=s[P])}),!Object.keys(r).length)return!1;const R=Object.assign({},D(),r);return g(R),d()&&_(r),!0}function _(s){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:s})}).catch(function(){})}catch{}}async function M(){const s=w();if(!d()||typeof fetch>"u")return s;try{const r=await fetch("/api/user_config/preferences");if(r.ok){const R=await r.json();if(R.success&&R.preferences){const P=R.preferences;f.forEach(function(A){t[A].indexOf(P[A])!==-1&&(s[A]=P[A])}),g(s)}}}catch{}return s}function N(s){const r=s||o("info_density")||"comfortable",R=t.info_density.indexOf(r)!==-1?r:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",R),R}function i(s){const r=s||o("theme")||"system";if(r==="system"){let R=!1;return typeof window<"u"&&window.matchMedia&&(R=window.matchMedia("(prefers-color-scheme: dark)").matches),R?"dark":"light"}return r==="dark"||r==="light"?r:"light"}const l={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:f,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:p,getLocal:w,getPreference:o,isValidValue:x,setPreference:b,setPreferences:E,saveToBackend:_,loadPreferences:M,resolveTheme:i,applyDensity:N};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=l),l});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function f(){if(typeof localStorage>"u")return[];try{const w=localStorage.getItem(a);if(!w)return[];const o=JSON.parse(w);return Array.isArray(o)?o:[]}catch{return[]}}function t(w){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(w))}catch{}}function u(w,o){if(!w)return!1;let x=f().filter(function(b){return b.code!==w});return x.unshift({code:w,name:(o||"").toString().slice(0,32),ts:Date.now()}),x.length>10&&(x=x.slice(0,10)),t(x),!0}function p(){return f().slice(0,10)}function D(w){t(f().filter(function(o){return o.code!==w}))}function g(){t([])}const d={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:u,getRecentViewed:p,removeRecent:D,clearRecent:g};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=d),d});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:f,watch:t,onMounted:u,nextTick:p}=a;function D(c,S={}){if(typeof c=="string"&&c.startsWith("/api/")){const m=localStorage.getItem("quant_token");if(m)return{...S,headers:{...S.headers||{},Authorization:"Bearer "+m}}}return S}async function g(c,S={}){const m=D(c,S),H={"Content-Type":"application/json",...m.headers},ue=(S.method||"GET").toUpperCase(),X=ue+"|"+c,q=async()=>{const U=await fetch(c,{...m,headers:H});if(U.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!U.ok){let re="";try{const pe=await U.json();re=pe&&pe.detail||""}catch{}throw Object.assign(new Error(re||"请求失败（HTTP "+U.status+"）"),{status:U.status})}return await U.json()};try{const U=S.noLoading?q:()=>r(q);return ue==="GET"&&!S.noDedupe?await N(X,U):await U()}catch(U){throw U.message==="登录已过期"?U:(console.error("[apiFetch] "+c+":",U.message),Object.assign(U,{_formatted:R(U,U.status)}))}}function d(){return new Date().toISOString().split("T")[0]}function w(c){return c?c.split("T")[0]:""}function o(c,S="info",m=3e3){let H=document.querySelector(".toast-container");H||(H=document.createElement("div"),H.className="toast-container",document.body.appendChild(H));const ue=document.createElement("div");ue.className=`toast toast-${S}`,ue.textContent=c,H.appendChild(ue),setTimeout(()=>{ue.classList.add("leaving"),setTimeout(()=>ue.remove(),300)},m)}function x(c,S=300){let m;return function(...H){clearTimeout(m),m=setTimeout(()=>c.apply(this,H),S)}}function b(c,S=300){let m=!1;return function(...H){m||(c.apply(this,H),m=!0,setTimeout(()=>{m=!1},S))}}async function E(c,S=3e3,m=""){const H=new Promise((ue,X)=>setTimeout(()=>X(new Error("timeout")),S));try{return await Promise.race([c,H])}catch(ue){console.warn(`[timeout] ${m||"task"} failed:`,ue.message)}}const _=new Map;function M(){return _.clear(),!0}function N(c,S){if(!c||typeof S!="function")return Promise.reject(new Error("bad dedupe args"));if(_.has(c))return _.get(c);const m=Promise.resolve().then(S).finally(()=>{_.delete(c)});return _.set(c,m),m}let i=0;function l(){return i=0,!0}function s(){return i}async function r(c){i++;try{return await c()}finally{i--}}function R(c,S){if(!c)return"请求失败";if(c&&typeof c=="object"&&c.detail)return String(c.detail);if(typeof c=="string"&&c)return c;if(c&&c.message){const m=String(c.message);return/Failed to fetch|fetch failed|networkerror/i.test(m)?"网络连接失败，请检查网络后重试":m}return S?"请求失败（HTTP "+S+"）":"请求失败"}function P(c,S){if(c===S)return!0;try{return JSON.stringify(c)===JSON.stringify(S)}catch{return!1}}function A(c,S,m){const H=(c||"GET").toUpperCase();let ue="";if(m)try{const X={};Object.keys(m).sort().forEach(q=>{X[q]=m[q]}),ue=JSON.stringify(X)}catch{ue=""}return H+"|"+S+"|"+ue}class G{constructor(){this._map=new Map,this._exp=new Map}get(S){const m=this._exp.get(S);if(m!=null){if(Date.now()>m){this.delete(S);return}return this._map.get(S)}}set(S,m,H){return this._map.set(S,m),this._exp.set(S,Date.now()+(H>0?H:-1)),m}delete(S){this._map.delete(S),this._exp.delete(S)}clear(){this._map.clear(),this._exp.clear()}has(S){return this.get(S)!==void 0}get size(){return this._map.size}}function ae(c){const S=new G,m=c!=null&&c>0?c:15e3;return{store:S,defaultTtl:m,get:H=>S.get(H),set:(H,ue,X)=>S.set(H,ue,X??m),delete:H=>S.delete(H),clear:()=>S.clear(),size:()=>S.size}}const O=new Set;async function T(c){const S=c&&c.cache,m=c&&c.key,H=c&&(c.fetchFn||c.fetcher),ue=c&&c.ttl;if(!S||!m||typeof H!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(O.has(m))return{ok:!1,changed:!1,skipped:!0,fresh:null};O.add(m);try{const X=S.get(m);let q;try{q=await H()}catch(re){return c.onError&&c.onError(re),{ok:!1,changed:!1,fresh:null}}const U=X!==void 0&&!P(X,q);return S.set(m,q,ue),c.apply&&c.apply(q,X),X!==void 0&&(U?c.onChanged&&c.onChanged(q,X):c.onUnchanged&&c.onUnchanged(q,X)),{ok:!0,changed:U,fresh:q}}finally{O.delete(m)}}const B=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function K(c,S={}){if(c==null)return"";const m=S&&S.allow||B,H=new Set(m.map(U=>String(U).toUpperCase()));let ue;try{ue=new DOMParser().parseFromString(String(c),"text/html")}catch{return String(c).replace(/[<>&]/g,re=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[re])}const X=ue.body||ue;function q(U){Array.from(U.childNodes).forEach(re=>{if(re.nodeType===1){const pe=String(re.tagName).toUpperCase();if(H.has(pe))Array.from(re.attributes).forEach(de=>{const Y=de.name.toLowerCase(),oe=(de.value||"").trim().toLowerCase();(Y.startsWith("on")||(Y==="href"||Y==="src"||Y==="xlink:href")&&oe.startsWith("javascript:")||Y==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(oe))&&re.removeAttribute(de.name),Y==="href"&&!/^(https?:|mailto:|#|\/)/.test(oe)&&re.removeAttribute("href")}),pe==="A"&&re.setAttribute("rel","noopener noreferrer"),q(re);else{const de=re.parentNode;for(;re.firstChild;)de.insertBefore(re.firstChild,re);de.removeChild(re)}}else if(re.nodeType!==3){if(re.nodeType===8)re.parentNode&&re.parentNode.removeChild(re);else if(re.nodeType===4){const pe=ue.createTextNode(re.nodeValue||"");re.parentNode&&re.parentNode.replaceChild(pe,re)}}})}return q(X),X.innerHTML}const ie="/api/openapi",Q="/api/market/ws/quotes",Z=1,I=2.5,j="数据不可达",L="实时不可用，不刷新";function k(){const c=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",S=typeof location<"u"?location.host:"localhost:8001";return c+"//"+S+Q}function C(c,S){if(!c)return null;const m=S||{riseSpeed:Z,volumeRatio:I},H=m.riseSpeed!=null?m.riseSpeed:Z,ue=m.volumeRatio!=null?m.volumeRatio:I,X=parseFloat(c.rise_speed);if(!isNaN(X)&&Math.abs(X)>H)return X>0?"涨速预警":"跌速预警";const q=parseFloat(c.volume_ratio);return!isNaN(q)&&q>ue?"放量预警":null}function ce(c){const S=Number(c);return c==null||isNaN(S)?null:S}const y={apiFetch:g,withAuthHeaders:D,getToday:d,formatDate:w,withTimeout:E,showToast:o,debounce:x,throttle:b,resetInFlight:M,dedupeRequest:N,resetLoading:l,loadingCount:s,withLoading:r,formatApiError:R,jsonEquals:P,makeCacheKey:A,CacheStore:G,createTtlCache:ae,silentRefresh:T,sanitizeHtml:K,OPENAPI_ROUTE_BASE:ie,REALTIME_WS_PATH:Q,WARN_RISE_SPEED_THRESHOLD:Z,WARN_VOLUME_RATIO_THRESHOLD:I,REALTIME_DEGRADED_TEXT:j,REALTIME_FALLBACK_TEXT:L,buildRealtimeWsUrl:k,checkQuoteWarning:C,quoteFmt:{price:function(c){const S=ce(c);return S===null?"--":S.toFixed(2)},pct:function(c){const S=ce(c);return S===null?"--":(S>0?"+":"")+S.toFixed(2)+"%"},num:function(c){const S=ce(c);return S===null?"--":S.toFixed(2)},color:function(c){const S=c?c.change_pct:null,m=ce(S);return m===null?"":m>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=y),typeof je<"u"&&je.exports&&(je.exports=y)})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(x,b){return x+"/"+b}function f(x,b,E,_){var M=x[b]||[],N=M.findIndex(function(s){return s.subPage===E});if(N!==-1)return{groups:x,activeKey:e(b,E)};var i=M.concat([{subPage:E,title:_}]);i.length>a&&(i=u(i));var l=Object.assign({},x,t({},b,i));return{groups:l,activeKey:e(b,E)}}function t(x,b,E){return x[b]=E,x}function u(x){if(x.length<=a)return x;var b=x.length>1?1:0;return x.filter(function(E,_){return _!==b})}function p(x,b,E,_){var M=x[b]||[],N=M.findIndex(function(r){return r.subPage===E});if(N===-1)return{groups:x,nextActive:null};var i=M.filter(function(r){return r.subPage!==E}),l=Object.assign({},x,t({},b,i)),s=null;return E===_&&(i[N]?s=i[N].subPage:i[N-1]?s=i[N-1].subPage:s=null),{groups:l,nextActive:s}}function D(x){return x&&x.length?x[0]:""}function g(x,b){return x[b]||[]}function d(x,b,E){var _=x[b]||[],M=_.filter(function(i){return i.subPage===E}),N=Object.assign({},x,t({},b,M));return{groups:N,activeKey:M.length?e(b,M[0].subPage):null}}function w(x,b){var E=Object.assign({},x,t({},b,[]));return{groups:E,activeKey:null}}function o(x,b,E,_){var M=(x[b]||[]).slice();if(E<0||E>=M.length)return{groups:x};var N=M.splice(E,1)[0];return M.splice(Math.max(0,Math.min(_,M.length)),0,N),{groups:Object.assign({},x,t({},b,M))}}return{MAX_TABS:a,openTab:f,closeTab:p,getDefaultTab:D,tabsOf:g,evictOldest:u,closeOthers:d,closeAll:w,reorder:o,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var on=typeof je=="object"&&je.exports?je.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;on&&(window.__quantModules.tabsCore=on)}(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",f="nav_mode";function t(o){return a.indexOf(o)!==-1?o:e}function u(o){return t(o)==="subnav"}function p(o){return t(o)==="tree"}function D(o){return t(o)==="toptab"}function g(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function d(){var o=g(),x=e;if(o)try{x=t(o.getItem(f))}catch{}return{navMode:x}}function w(o){var x=g();if(!(!x||!o))try{o.navMode!==void 0&&x.setItem(f,t(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:u,treeChildrenVisible:p,topTabsVisible:D,readPrefs:d,writePrefs:w}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var rn=typeof je=="object"&&je.exports?je.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;rn&&(window.__quantModules.navModeCore=rn)}(function(){function e(k,C){if(!Array.isArray(k)||k.length<=C)return k;const ce=[],W=k.length/C*2;for(let y=0;y<k.length;y+=W){const c=Math.floor(y),S=Math.min(k.length,Math.ceil(y+W));let m=1/0,H=-1,ue=-1/0,X=-1;for(let q=c;q<S;q++){const U=k[q];if(!U)continue;const re=U[3]!=null?Number(U[3]):1/0,pe=U[4]!=null?Number(U[4]):-1/0;re<m&&(m=re,H=q),pe>ue&&(ue=pe,X=q)}H>=0&&ce.push(k[H]),X>=0&&X!==H&&ce.push(k[X])}return ce}let f=null;function t(){return typeof echarts<"u"?Promise.resolve():(f||(f=new Promise(function(k,C){const ce=document.createElement("script");ce.src="/static/lib/echarts.min.js",ce.async=!0,ce.onload=function(){typeof echarts<"u"?k():C(new Error("echarts 加载后未定义"))},ce.onerror=function(){C(new Error("echarts.min.js 加载失败"))},document.head.appendChild(ce)})),f)}function u(){const k=getComputedStyle(document.documentElement);return{primary:k.getPropertyValue("--primary-color").trim()||"#2563eb",up:k.getPropertyValue("--color-up").trim()||"#43e97b",down:k.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:k.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:k.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const p=k=>(getComputedStyle(document.documentElement).getPropertyValue(k)||"").trim();function D(){return{up:p("--color-up")||"#E63946",down:p("--color-down")||"#2E7D32",neutral:p("--color-neutral")||"#43a047",accent:p("--color-accent")||"#F59E0B",risk:p("--color-danger")||"#C62828",warn:p("--color-warning")||"#FF9800",success:p("--color-success")||"#4CAF50",primary:p("--qc-primary-600")||"#b8922a",grid:p("--chart-split")||"#e2e8f0",axis:p("--chart-axis")||"#cbd5e1",bg:p("--chart-bg")||"transparent",series:[p("--qc-primary-600")||"#b8922a",p("--qc-primary-500")||"#c49b2e",p("--qc-primary-700")||"#8f6f1f",p("--qc-primary-400")||"#d4b352",p("--color-up")||"#E63946",p("--color-down")||"#2E7D32",p("--color-accent")||"#F59E0B",p("--qc-neutral-400")||"#b8ae9f"]}}function g(k,C,ce,W=!1,y=!1){if(!C||C.length===0)return;C.length>2e3&&(C=e(C,2e3));const c=C.map(ke=>typeof ke[0]=="string"&&ke[0].indexOf("-")>=0?ke[0]:ke[0].slice(0,4)+"-"+ke[0].slice(4,6)+"-"+ke[0].slice(6,8)),S=u(),m={ma5:p("--color-accent")||"#F59E0B",ma10:p("--color-primary")||"#3B82F6",ma20:p("--color-warning")||"#8B5CF6",ma60:p("--color-success")||"#10B981"},H=C.map(ke=>[ke[1],ke[2],ke[3],ke[4]]),ue=C.map(ke=>ke[5]),X=C.map(ke=>ke[6]),q=C.map(ke=>ke[7]),U=C.map(ke=>ke[8]),re=C.map(ke=>ke[9]),pe=C.map(ke=>ke[10]),Y=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",oe=S.borderLight,De={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:S.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:Y,borderColor:oe,textStyle:{color:S.textSecondary,fontSize:12},formatter:function(ke){if(!ke||!ke.length)return"";const _e=ke[0].dataIndex,ee=C[_e];if(!ee)return"";const xe=k.getOption(),Pe=xe.legend&&xe.legend[0]&&xe.legend[0].selected||{},se=Ie=>Pe[Ie]!==!1,te=Ie=>Ie==null||isNaN(Ie)?"--":Number(Ie).toFixed(2),he=Ie=>Ie==null||isNaN(Ie)?"--":(Number(Ie)/1e4).toFixed(2)+"万手",Ne=['<div style="font-weight:600;color:'+S.textSecondary+';">'+c[_e]+"</div>"];return Ne.push("开: "+te(ee[1])+"　收: "+te(ee[2])),Ne.push("低: "+te(ee[3])+"　高: "+te(ee[4])),Ne.push("成交量: "+he(ee[5])),ee[6]!=null&&se("MA5")&&Ne.push("MA5: "+te(ee[6])),ee[7]!=null&&se("MA10")&&Ne.push("MA10: "+te(ee[7])),ee[8]!=null&&se("MA20")&&Ne.push("MA20: "+te(ee[8])),ee[9]!=null&&se("MA60")&&Ne.push("MA60: "+te(ee[9])),ee[10]!=null&&Ne.push("VOL_MA5: "+he(ee[10])),Ne.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:y?0:8,textStyle:{color:S.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:y?30:40,height:y?"48%":"52%"},{left:56,right:16,top:y?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:c,boundaryGap:!0,axisLine:{lineStyle:{color:oe}},axisLabel:{color:S.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:c,axisLabel:{show:!1},axisLine:{lineStyle:{color:oe}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:oe}},axisLabel:{color:S.textSecondary,fontSize:11,formatter:function(ke){const _e=Math.round(ke*100)/100;return _e%1===0?String(Math.round(_e)):_e.toFixed(2)}},splitLine:{lineStyle:{color:oe,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:oe}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,C.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:oe,textStyle:{color:S.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:H,itemStyle:{color:S.up,color0:S.down,borderColor:S.up,borderColor0:S.down}},{name:"MA5",type:"line",data:X,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma5}},{name:"MA10",type:"line",data:q,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma10}},{name:"MA20",type:"line",data:U,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma20}},{name:"MA60",type:"line",data:re,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ue,itemStyle:{color:function(ke){const _e=ke.dataIndex;return C[_e][1]>=C[_e][2]?S.up:S.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:pe,smooth:!0,symbol:"none",lineStyle:{width:1,color:m.ma5,type:"dashed"}}]};k.setOption(De,!0)}const d=new Map;function w(k){return d.has(k)||d.set(k,{chart:null,cache:null}),d.get(k)}async function o(k,C,ce,W=!1,y={}){await t();const c=w(k);let S=document.getElementById(k);if(!S)for(let m=0;m<16&&(await new Promise(H=>setTimeout(H,50)),S=document.getElementById(k),!S);m++);if(!S)throw new Error("无法找到图表容器: "+k);if(S.offsetWidth<50&&(S.style.minWidth="600px",S.style.minHeight="300px"),!c.chart||c.chart.isDisposed()||c.chart.getDom()!==S){if(c.chart)try{c.chart.dispose()}catch{}c.chart=echarts.init(S),c.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const m=y.onLegend;typeof m=="function"&&c.chart.on("legendselectchanged",H=>{H&&H.selected&&m(H.selected)})}return g(c.chart,C,ce,W,!!y.isMobile),c.cache={data:C,period:ce,isIndex:W,isMobile:!!y.isMobile},c.chart}function x(k){const C=d.get(k);C&&C.chart&&(C.chart.dispose(),C.chart=null,C.cache=null)}function b(k){const C=d.get(k);C&&C.chart&&C.chart.resize()}function E(k,C){const ce=d.get(k),W=ce&&ce.chart;if(W)if(C<=0)W.dispatchAction({type:"dataZoom",start:0,end:100});else{const S=Math.max(0,(60-C)/60*100);W.dispatchAction({type:"dataZoom",start:Math.round(S),end:100})}}function _(k){var W,y,c;const C=d.get(k);if(!C||!C.chart||!C.cache||C.chart.isDisposed())return;const ce=((c=(y=(W=C.chart.getOption())==null?void 0:W.legend)==null?void 0:y[0])==null?void 0:c.selected)||null;g(C.chart,C.cache.data,C.cache.period,C.cache.isIndex,C.cache.isMobile),ce&&C.chart.setOption({legend:{selected:ce}})}function M(k){const C=d.get(k);return C&&C.chart}const N=new Map;function i(k){return N.has(k)||N.set(k,{chart:null,cache:null}),N.get(k)}function l(k,C,ce={}){return t().then(function(){const W=i(k),y=document.getElementById(k);if(!y)throw new Error("无法找到图表容器: "+k);if(y.offsetWidth<50&&(y.style.minWidth="600px",y.style.minHeight="300px"),W.chart&&W.chart.getDom&&W.chart.getDom()!==y){try{W.chart.dispose()}catch{}W.chart=null}W.chart||(W.chart=echarts.init(y),W.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),W.resizeBound||(W.resizeBound=!0,window.addEventListener("resize",function(){W.chart&&!W.chart.isDisposed()&&W.chart.resize()})));const c=typeof C=="function"?C():C;return W.chart.setOption(c,!0),W.cache={buildOption:C,key:ce.key||""},W.chart})}function s(k){var y,c,S;const C=N.get(k);if(!C||!C.chart||!C.cache||C.chart.isDisposed())return;const ce=((S=(c=(y=C.chart.getOption())==null?void 0:y.legend)==null?void 0:c[0])==null?void 0:S.selected)||null,W=typeof C.cache.buildOption=="function"?C.cache.buildOption():C.cache.buildOption;C.chart.setOption(W,!0),ce&&W&&W.legend&&W.legend.selected&&C.chart.setOption({legend:{selected:ce}})}function r(k){const C=N.get(k);C&&C.chart&&(C.chart.dispose(),C.chart=null,C.cache=null)}function R(k){const C=N.get(k);C&&C.chart&&C.chart.resize()}const P=new Map;function A(k){return P.has(k)||P.set(k,{chart:null,cache:null}),P.get(k)}function G(k,C,ce={}){return t().then(function(){const W=A(k),y=document.getElementById(k);if(!y)return null;if(y.offsetWidth<50&&(y.style.minWidth="600px",y.style.minHeight="300px"),W.chart&&W.chart.getDom&&W.chart.getDom()!==y){try{W.chart.dispose()}catch{}W.chart=null}W.chart||(W.chart=echarts.init(y),W.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),W.resizeBound||(W.resizeBound=!0,window.addEventListener("resize",function(){W.chart&&!W.chart.isDisposed()&&W.chart.resize()})));const c=typeof C=="function"?C():C;return W.chart.setOption(c,!0),W.cache={buildOption:C,key:ce.key||""},W.chart})}function ae(k){const C=P.get(k);if(!C||!C.chart||!C.cache||C.chart.isDisposed())return;const ce=typeof C.cache.buildOption=="function"?C.cache.buildOption():C.cache.buildOption;C.chart.setOption(ce,!0)}function O(k){const C=P.get(k);C&&C.chart&&(C.chart.dispose(),C.chart=null,C.cache=null)}function T(k){const C=P.get(k);C&&C.chart&&C.chart.resize()}const B=G,K=ae,ie=O,Q=T;function Z(k,C,ce,W){W=W||{};const y=W.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[W.navLabel||"净值",W.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:ce||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:W.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:W.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:W.navLabel||"净值",type:"line",data:k||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:W.ddLabel||"回撤",type:"line",yAxisIndex:1,data:C||[],showSymbol:!1,areaStyle:{opacity:.25,color:y},lineStyle:{color:y,type:"solid",width:1.5}}]}}function I(k,C){C=C||{};const ce=C.bandColor||"#1976d2",W=k&&k.dates||[],y=k&&k.median||[],c=k&&k.q25||[],S=k&&k.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[C.medianLabel||"中位IC",C.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:W,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:C.medianLabel||"中位IC",type:"line",data:y,showSymbol:!1,lineStyle:{width:2,color:ce}},{name:C.bandLabel||"25–75分位",type:"line",data:c,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ce,opacity:.12}},{name:"_bandH",type:"line",data:S.map(function(m,H){return m-(c[H]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ce,opacity:.12}}]}}function j(k,C){C=C||{};const ce=C.color||"#7c3aed",W=k&&k.dates||[],y=k&&k.value||[],c=k&&k.upper||[],S=k&&k.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[C.valueLabel||"情绪",C.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:W,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:C.valueLabel||"情绪",type:"line",data:y,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:ce}},{name:C.bandLabel||"过热/冰点带",type:"line",data:c,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ce,opacity:.1}},{name:"_bandL",type:"line",data:S.map(function(m,H){return(c[H]||0)-m}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ce,opacity:.1}}]}}const L={renderKlineChart:g,renderKlineTo:o,disposeKline:x,resizeKline:b,zoomKline:E,redrawKline:_,getKlineChart:M,renderBacktestTo:l,redrawBacktest:s,disposeBacktest:r,resizeBacktest:R,renderPortfolioTo:G,redrawPortfolio:ae,disposePortfolio:O,resizePortfolio:T,renderSimpleChartTo:B,redrawSimpleChart:K,disposeSimpleChart:ie,resizeSimpleChart:Q,buildNavDrawdownOption:Z,buildIcBandOption:I,buildSentimentBandOption:j,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:D,init(){return{renderKlineChart:g,renderKlineTo:o,disposeKline:x,resizeKline:b,zoomKline:E,redrawKline:_,getKlineChart:M,renderBacktestTo:l,redrawBacktest:s,disposeBacktest:r,resizeBacktest:R,renderPortfolioTo:G,redrawPortfolio:ae,disposePortfolio:O,resizePortfolio:T,renderSimpleChartTo:B,redrawSimpleChart:K,disposeSimpleChart:ie,resizeSimpleChart:Q,buildNavDrawdownOption:Z,buildIcBandOption:I,buildSentimentBandOption:j,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:D}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=L),typeof je<"u"&&je.exports&&(je.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:Z,buildIcBandOption:I,buildSentimentBandOption:j})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:f}=Vue,{configChanged:t,consensus:u}=a,p=e(null),D=e(""),g=e(null),d=e([]),w=e([]),o=e([]),x=e([]),b=e([]),E=e([]),_=e({});function M(Se){const we=b.value.indexOf(Se);we>=0?b.value.splice(we,1):b.value.push(Se)}const N=e("date"),i=e([]),l=e(!1),s=e(!1),r=e("watchlist"),R=e([]),P=e({vendors:[]}),A=e(""),G=e(!1),ae=e(!1);function O(Se){if(!Se)return"";const we=String(Se),Ae=we.length;if(Ae<=4)return we[0]+"*".repeat(Ae-1);const Re=Ae<=8?2:4;return we.slice(0,Re)+"*".repeat(Ae-Re-Re)+we.slice(-Re)}async function T(Se){let we;try{we=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Re=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:we,target:Se})})).json();if(Re.success)return Re.secret;ElementPlus.ElMessage.error(Re.message||"查看失败")}catch(Ae){ElementPlus.ElMessage.error("查看失败: "+Ae.message)}return null}async function B(Se){if(Se._revealed){Se._revealed=!1,Se._masked=O(Se.api_key);return}const we=await T("ai:"+Se.vendor_key);we!==null&&(Se.api_key=we,Se._revealed=!0)}async function K(Se){if(Se._editing){Se._editing=!1,Se._revealed=!1,Se.api_key&&(Se._masked=O(Se.api_key));return}Se._editing=!0;try{const Ae=await(await fetch("/api/ai/models?full=1")).json();if(Ae.success){const Re=(Ae.data.vendors||[]).find(Xe=>Xe.vendor_key===Se.vendor_key);Re&&(Se.api_key=Re.api_key||"")}else Ae.message&&ElementPlus.ElMessage.error(String(Ae.message))}catch(we){ElementPlus.ElMessage.error("解锁失败: "+we.message)}}function ie(Se){const{_fetching:we,_testing:Ae,_revealed:Re,_masked:Xe,_editing:Ze,...tt}=Se;return Ze||(tt.api_key=""),tt.models=(Se.models||[]).map(xt=>{const{_testing:St,testResult:pt,...zt}=xt;return zt}),tt}async function Q(){var Se;try{A.value="";const we=await fetch("/api/ai/models");if(we.status===401){A.value="请先登录后再查看模型配置";return}if(!we.ok){A.value=`服务器错误 (${we.status})`;return}const Ae=await we.json();Ae.success?(R.value=(((Se=Ae.data)==null?void 0:Se.vendors)||[]).map(Re=>({...Re,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Re.api_key||"",models:(Re.models||[]).map(Xe=>({...Xe,_testing:!1,testResult:void 0}))})),A.value=""):A.value=Ae.message||"加载失败"}catch(we){A.value="网络错误: "+we.message}}async function Z(){try{const we=await(await fetch("/api/ai/catalog")).json();we.success&&we.data&&(P.value=we.data)}catch(Se){console.warn("AI 厂商目录加载失败",Se)}}async function I(){ae.value=!0;try{const Ae=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:R.value.map(ie)})})).json();Ae.success?(R.value.forEach(Re=>{Re._editing=!1,Re._revealed=!1,Re.api_key&&(Re._masked=O(Re.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ae.message||"保存失败")}catch(Se){ElementPlus.ElMessage.error("保存失败: "+Se.message)}ae.value=!1}async function j(Se,we){we._testing=!0;try{const Re=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,model:we.name,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})});we.testResult=await Re.json()}catch(Ae){we.testResult={success:!1,message:Ae.message}}we._testing=!1}async function L(){G.value=!0;for(const Se of R.value)for(const we of Se.models||[])Se.api_key?await j(Se,we):we.testResult={success:!1,message:"未配置 API Key"};G.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function k(Se){Se._fetching=!0;try{const Re=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})})).json();if(Re.success&&Array.isArray(Re.models)){const Xe=new Set((Se.models||[]).map(Ze=>Ze.name));for(const Ze of Re.models)Xe.has(Ze)||Se.models.push({name:Ze,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Re.models.length} 个模型`)}else ElementPlus.ElMessage.error(Re.message||"获取模型列表失败")}catch(we){ElementPlus.ElMessage.error("获取模型列表失败: "+we.message)}Se._fetching=!1}function C(Se){const we=(P.value.vendors||[]).find(Ae=>Ae.vendor_key===Se);if(we){if(R.value.some(Ae=>Ae.vendor_key===Se)){ElementPlus.ElMessage.warning("该厂商已存在");return}R.value.push({vendor_key:we.vendor_key,name:we.name,kind:we.kind,base_url:we.base_url,api_key:"",timeout:60,tier:we.tier||"",website:we.website||"",locked:!!we.locked,models:(we.models||[]).map(Ae=>({name:Ae,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${we.name}」，配置 API Key 后保存生效`)}}function ce(){R.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function W(Se){Se.models||(Se.models=[]),Se.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function y(Se,we){const Ae=Se.models[we];if(!(!Ae||Ae.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ae.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}Se.models.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function c(Se){if(Se.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(Se.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const we=R.value.indexOf(Se);we>=0&&R.value.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const S=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),m=e(!1),H=e(""),ue=e(0),X=e(""),q=e(!1),U=e(""),re=e(!1),pe=e(0),de=e(0),Y=e(""),oe=e({}),De=e({}),ke=e({}),_e=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),ee=e("manual"),xe=f(()=>{const Se={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return Se[_e.value.provider]||Se.custom}),Pe={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function se(Se){if(Se==="manual")return;const we=Pe[Se];we&&(_e.value.endpoint=we.endpoint,_e.value.model=we.model,t.value=!0)}function te(){if(t.value=!0,_e.value.provider!=="codingplan"&&_e.value.provider!=="custom"){const Se=xe.value;Se&&(_e.value.endpoint=Se.endpoint,_e.value.model=Se.model)}else _e.value.provider==="codingplan"&&(_e.value.endpoint||(_e.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),_e.value.model||(_e.value.model="ark-code-latest"))}let he=null;const Ne=8;async function Ie(){he&&(he.abort(),he=null);const we=(u.value||[]).filter(tt=>tt.status==="new"||tt.status==="out").filter(tt=>!_.value[tt.code]);if(we.length===0)return;const Ae=new AbortController;he=Ae;let Re=0;const Xe=async()=>{for(;Re<we.length;){const tt=we[Re++];try{const St=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:tt.code,stock_name:tt.name,event_type:tt.status==="new"?"enter":"exit"}),signal:Ae.signal})).json();St.success&&St.signal&&(_.value={..._.value,[tt.code]:St.signal})}catch(xt){if(xt.name==="AbortError")return}}},Ze=Array.from({length:Math.min(Ne,we.length)},()=>Xe());await Promise.all(Ze)}function Ue(){he&&(he.abort(),he=null)}let Ge=0;async function ht(Se){const we=++Ge;try{const Re=await(await fetch(`/api/ai/history/last/${encodeURIComponent(Se)}`)).json();if(we!==Ge)return;Re.success&&Re.data&&(p.value=Re.data,D.value=Re.data.evaluate_time,st(Se,Re.data),Rt(Re.data))}catch{}}async function st(Se,we){var Ae,Re;try{const Ze=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(Se)}&limit=2`)).json();if(Ze.success&&Ze.data&&Ze.data.length>=2){const tt=Ze.data[1],xt=((Ae=we.result)==null?void 0:Ae.total_score)||0,St=((Re=tt.result)==null?void 0:Re.total_score)||0;xt>0&&St>0&&(g.value={prevScore:St,currScore:xt,diff:xt-St})}}catch(Xe){console.warn("[refreshStrategyData] autoPoll failed:",Xe)}}function Rt(Se){var Xe;const we=((Xe=Se.result)==null?void 0:Xe.dimensions)||{},Ae=[],Re=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Ze of Re){const tt=we[Ze.key];tt!==void 0&&Ae.push({icon:tt>=Ze.good?"check-circle-2":tt>=Ze.warn?"alert-triangle":"x-circle",label:`${Ze.label} ${Math.round(tt)}分`})}d.value=Ae}return{aiResult:p,lastEvalTime:D,evalHistoryComparison:g,checklistItems:d,aiHistory:w,selectedHistoryIds:o,expandedDates:x,expandedMonths:b,expandedStocks:E,poolSignals:_,toggleMonthExpand:M,aiHistoryView:N,selectedWatchlistCodes:i,showAutoEvaluateSettings:l,savingConfig:s,autoEvaluateScope:r,aiVendors:R,aiCatalog:P,aiModelsError:A,testingAllModels:G,savingAiModels:ae,loadAiVendors:Q,loadAiCatalog:Z,saveAiVendors:I,saveAiModels:I,testVendorModel:j,testAllVendorModels:L,fetchVendorModels:k,addVendorFromCatalog:C,addCustomVendor:ce,addVendorModel:W,removeVendorModel:y,removeVendor:c,toggleVendorKeyReveal:B,toggleVendorEdit:K,autoEvaluateConfig:S,aiLoading:m,aiEvalStage:H,aiEvalElapsed:ue,aiEvalError:X,showBatchEvaluate:q,batchStocks:U,batchRunning:re,batchTotal:pe,batchCompleted:de,batchCurrent:Y,batchStatuses:oe,batchResults:De,batchEvalErrors:ke,aiConfig:_e,selectedPreset:ee,providerInfo:xe,aiPresets:Pe,applyPreset:se,onProviderChange:te,fetchPoolSignals:Ie,cancelPoolSignals:Ue,loadLastEvaluation:ht}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:f,watch:t}=Vue,{configChanged:u,aiConfig:p,aiLoading:D,feishuConfig:g,currentTheme:d,changeTheme:w,autoEvaluateConfig:o,currentUser:x,strategyFilter:b,applyTheme:E,dashboardData:_,lastRefreshTime:M,saveAiModels:N}=a,i=e(!1),l=e(!1),s=e(null),r=e(null),R=e(null),P=e(null),A=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),G=e("disconnected"),ae=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),O=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),T=e(!1),B=e(null),K=e(null),ie=e("pending"),Q=e("..."),Z=e(!1),I=e({api_limit:600}),j=e(!1),L=e(!1);async function k(){try{const te=await(await fetch("/api/system/rate-limit")).json();te.success&&(I.value=te.data)}catch(se){console.warn("loadRateLimit failed:",se)}}async function C(){L.value=!0;try{const te=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)})).json();te.success?(j.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(te.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{L.value=!1}}t(()=>[p.value.provider,p.value.apiKey,p.value.endpoint,p.value.model],()=>{u.value=!0},{deep:!0});async function ce(){i.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(p.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p.value)})).json()).success?(u.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(se){localStorage.setItem("quant_ai_config",JSON.stringify(p.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",se)}finally{i.value=!1}}async function W(){D.value=!0;try{const te=await(await fetch("/api/ai/test")).json();te.success?ElementPlus.ElMessage.success(te.message||"API连接正常"):ElementPlus.ElMessage.error(te.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{D.value=!1}}function y(){const se={ai:p.value,feishu:g.value,theme:d.value,export_time:new Date().toISOString()},te=new Blob([JSON.stringify(se,null,2)],{type:"application/json"}),he=URL.createObjectURL(te),Ne=document.createElement("a");Ne.href=he,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(he),ElementPlus.ElMessage.success("配置已导出")}function c(se){const te=se.target.files[0];if(!te)return;const he=new FileReader;he.onload=async Ne=>{try{const Ie=JSON.parse(Ne.target.result);Ie.ai&&(p.value={...p.value,...Ie.ai},await ce()),Ie.feishu&&(Object.assign(g.value,Ie.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ie.feishu)})),Ie.theme&&(d.value=Ie.theme,w(Ie.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},he.readAsText(te),se.target.value=""}async function S(){i.value=!0;const se=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:A.value,feishu:g.value,ai:p.value,rate_limit:I.value,auto_evaluate:o.value,theme:d.value}})}).then(Ie=>["userConfig",Ie.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A.value)}).then(Ie=>["tushare",Ie.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ae.value})}).then(Ie=>["datasource",Ie.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g.value)}).then(Ie=>["feishu",Ie.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p.value)}).then(Ie=>["ai",Ie.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)}).then(Ie=>["rateLimit",Ie.ok]),N().then(()=>["aiModels",!0],()=>["aiModels",!1])],te=await Promise.allSettled(se),he=te.filter(Ie=>Ie.status==="fulfilled"&&Ie.value[1]).length,Ne=te.filter(Ie=>Ie.status==="rejected"||Ie.status==="fulfilled"&&!Ie.value[1]).length;j.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(b.value.selected)),localStorage.setItem("quant_strategy_filter_mode",b.value.mode),x.value&&fetch(`/api/users/${x.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:d.value})}).catch(()=>{}),l.value=!1,s.value=new Date().toLocaleString("zh-CN"),i.value=!1,Ne>0&&console.error(`[saveAllConfig] ${he}/${he+Ne} 项保存成功，${Ne} 项失败`)}async function m(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const he=te.config;he.tushare&&(A.value={...A.value,...he.tushare}),he.feishu&&(g.value={...g.value,...he.feishu}),he.ai&&(p.value={...p.value,...he.ai}),he.rate_limit&&(I.value={...I.value,...he.rate_limit}),he.auto_evaluate&&(o.value={...o.value,...he.auto_evaluate}),he.theme&&!localStorage.getItem("quant_theme")&&E(he.theme)}l.value=!1,j.value=!1}catch(se){console.error("[resetAllConfig] 重新加载配置失败:",se),l.value=!1}}async function H(){G.value="testing";try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(G.value=te.success?"connected":"disconnected",te.success){const he=te.data_count?` (获取到 ${te.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+he)}else ElementPlus.ElMessage.error(te.message||"连接失败")}catch{G.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function ue(){try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();G.value=te.success?"connected":"disconnected"}catch{G.value="disconnected"}}async function X(){var se;T.value=!0;try{const he=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();he.success?(B.value=parseInt(((se=he.message.match(/\d+/))==null?void 0:se[0])||"0"),ElementPlus.ElMessage.success(he.message)):ElementPlus.ElMessage.error(he.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{T.value=!1}}async function q(){try{const te=await(await fetch("/api/market/tushare/config")).json();te.success&&te.config&&(A.value={...A.value,...te.config})}catch(se){console.warn("loadTushareConfig failed:",se)}}function U(se){if(!se)return"";const te=String(se),he=te.length;if(he<=4)return te[0]+"*".repeat(he-1);const Ne=he<=8?2:4;return te.slice(0,Ne)+"*".repeat(he-Ne-Ne)+te.slice(-Ne)}async function re(se){let te;try{te=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:te,target:se})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(he){ElementPlus.ElMessage.error("查看失败: "+he.message)}return null}async function pe(se){const te=ae.value[se];if(!te)return;if(te._revealed){te._revealed=!1,te._masked=U(te.token);return}const he=await re(se);he!==null&&(te.token=he,te._revealed=!0)}async function de(se){const te=ae.value[se];if(te){if(te._editing){te._editing=!1,te._revealed=!1,te.token&&(te._masked=U(te.token));return}te._editing=!0;try{const he=await re(se);if(he===null){te._editing=!1;return}te.token=he,te._revealed=!0}catch(he){te._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+he.message)}}}async function Y(){try{const te=await(await fetch("/api/market/datasource/config")).json();if(te.success&&te.config&&te.config.sources){const he=te.config.sources,Ne=Ie=>{const Ue={...ae.value[Ie],...he[Ie]||{}};return Ue._editing=!1,Ue._revealed=!1,Ue._masked=Ue.token||"",Ue.token="",Ue};ae.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...ae.value.akshare,...he.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[Ie,Ue]of Object.entries(Ne.status))O.value[Ie]=Ue.connected?"connected":"disconnected"}catch{}}catch(se){console.warn("loadDatasourceConfig failed:",se)}}async function oe(){try{const se={};for(const[te,he]of Object.entries(ae.value)){const{_revealed:Ne,_masked:Ie,_editing:Ue,...Ge}=he;!Ue&&te!=="akshare"&&(Ge.token=""),se[te]=Ge}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:se})}),l.value=!0}catch(se){console.warn("saveDatasourceConfig failed:",se)}}async function De(se){O.value[se]="testing";try{const te=ae.value[se];te&&te._editing&&await oe();const Ne=await(await fetch(`/api/market/datasource/test/${se}`,{method:"POST"})).json();O.value[se]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${se} 连接成功`):ElementPlus.ElMessage.error(`${se}: ${Ne.message}`)}catch{O.value[se]="disconnected",ElementPlus.ElMessage.error(`${se} 连接失败`)}}async function ke(){try{const te=await(await fetch("/api/feishu/config")).json();te&&typeof te=="object"&&(g.value={...g.value,...te},r.value=JSON.parse(JSON.stringify(g.value)))}catch(se){console.warn("loadFeishuConfig failed:",se)}}async function _e(){try{const te=await(await fetch("/api/ai/config")).json();if(te.success&&te.data)p.value={...p.value,...te.data};else{const he=localStorage.getItem("quant_ai_config");he&&(p.value=JSON.parse(he))}}catch{const te=localStorage.getItem("quant_ai_config");te&&(p.value=JSON.parse(te))}}async function ee(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const he=te.config;he.tushare&&(A.value={...A.value,...he.tushare}),he.datasource&&he.datasource.sources&&(ae.value={sxsc_tushare:{...ae.value.sxsc_tushare,...he.datasource.sources.sxsc_tushare||{}},tushare:{...ae.value.tushare,...he.datasource.sources.tushare||{}},akshare:{...ae.value.akshare,...he.datasource.sources.akshare||{}}}),he.feishu&&(g.value={...g.value,...he.feishu},r.value=JSON.parse(JSON.stringify(g.value))),he.ai&&(p.value={...p.value,...he.ai}),he.rate_limit&&(I.value={...I.value,...he.rate_limit}),he.theme&&!localStorage.getItem("quant_theme")&&E(he.theme),he.auto_evaluate&&(o.value={...o.value,...he.auto_evaluate})}}catch(se){console.warn("加载用户配置失败，使用本地缓存",se)}}async function xe(){var se,te,he,Ne;try{const Ue=await(await fetch("/api/dashboard")).json(),Ge=Ue.success?Ue.data:Ue;B.value=((se=Ge==null?void 0:Ge.stats)==null?void 0:se.total_stocks_covered)||null;const st=await(await fetch("/api/dates")).json();K.value=((te=st==null?void 0:st.data)==null?void 0:te.total)||((Ne=(he=st==null?void 0:st.data)==null?void 0:he.dates)==null?void 0:Ne.length)||null;const Se=await(await fetch("/api/ai/history")).json();ie.value="ok"}catch{ie.value="pending"}}async function Pe(){try{const te=await(await fetch("/api/dashboard")).json();_.value=te.success?te.data:te,M.value=Date.now()}catch(se){console.error("加载总览数据失败",se)}}return{configSaving:i,configChanged:u,globalConfigDirty:l,lastSavedTime:s,feishuConfigOriginal:r,aiConfigOriginal:R,tushareConfigOriginal:P,tushareConfig:A,tushareStatus:G,datasourceConfig:ae,datasourceStatus:O,syncingData:T,stockCount:B,tradeDateCount:K,aiStatus:ie,appVersion:Q,showImportDialog:Z,rateLimitConfig:I,rateLimitDirty:j,rateLimitSaving:L,loadRateLimit:k,saveRateLimit:C,saveAiConfig:ce,testAiApi:W,exportConfig:y,importConfig:c,saveAllConfig:S,resetAllConfig:m,testTushareConnection:H,checkTushareConnection:ue,syncStockData:X,loadTushareConfig:q,loadDatasourceConfig:Y,saveDatasourceConfig:oe,testDatasource:De,toggleDatasourceKeyReveal:pe,toggleDatasourceEdit:de,loadFeishuConfig:ke,loadAiConfig:_e,loadUserConfig:ee,loadSystemStatus:xe,loadDashboardData:Pe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:f}=Vue,{currentUser:t,applyTheme:u,allMenuDefs:p,loadGroupConfig:D}=a,g=e([]),d=e(""),w=e(""),o=e("users"),x=e({}),b=e({}),E=f(()=>{let ee=g.value;if(w.value&&(ee=ee.filter(Pe=>(Pe.group||Pe.role)===w.value)),!d.value)return ee;const xe=d.value.toLowerCase();return ee.filter(Pe=>Pe.username.toLowerCase().includes(xe))});function _(ee){x.value={...x.value,[ee]:!x.value[ee]}}async function M(ee,xe){try{const se=await(await fetch("/api/groups/"+xe+"/members/"+ee,{method:"DELETE"})).json();se.success?(await de(),await re()):ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function N(ee){const xe=b.value[ee];if(xe)try{const se=await(await fetch("/api/groups/"+ee+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:xe})})).json();se.success?(await de(),await re(),b.value={...b.value,[ee]:""}):ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function i(ee,xe){try{const se=await(await fetch("/api/users/"+ee.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:xe})})).json();se.success?await de():ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const l=e(!1),s=e(null),r=e({username:"",password:"",role:"user",theme:"tech-blue"}),R=e(!1),P=e(null),A=e(!1),G=e(!1),ae=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),O=e({}),T=e(!1),B=e({group_id:"",name:"",description:""}),K=e(!1),ie=e([]),Q=e(""),Z=e(""),I=e({});function j(ee){I.value={...I.value,[ee]:!I.value[ee]}}function L(ee){return!g.value||!g.value.length?0:g.value.filter(xe=>(xe.group||xe.role)===ee).length}function k(ee){const xe=(ee==null?void 0:ee.visible_menus)||{};return Object.values(xe).filter(Boolean).length}const C=f(()=>Object.keys(U.value).length);async function ce(ee){Z.value=ee,G.value=!0,await W(ee)}async function W(ee){try{const Pe=await(await fetch("/api/groups/"+ee+"/members")).json();Pe.success&&(ie.value=Pe.members||[])}catch(xe){ie.value=[],console.error("[loadGroupMembers]",xe)}}async function y(){if(!(!Q.value||!Z.value)){K.value=!0;try{const xe=await(await fetch("/api/groups/"+Z.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:Q.value})})).json();xe.success?(await W(Z.value),await de(),Q.value=""):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{K.value=!1}}}async function c(ee){try{const Pe=await(await fetch("/api/groups/"+Z.value+"/members/"+ee,{method:"DELETE"})).json();Pe.success?(await W(Z.value),await de()):ElementPlus.ElMessage.error(Pe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const S=f(()=>{if(!g.value)return[];const ee=new Set(ie.value.map(xe=>xe.username));return g.value.filter(xe=>xe.username!=="admin"&&xe.username!=="guest"&&!ee.has(xe.username))});function m(ee){const xe=ae.value.visible_menus[ee],Pe=p.find(se=>se.key===ee);if(Pe)if(xe){const se=O.value[ee]||{};Pe.subPages.forEach(te=>{const he=ee+"."+te;ae.value.visible_sub_pages[he]=se[te]!==void 0?se[te]:!0})}else{const se={};Pe.subPages.forEach(te=>{const he=ee+"."+te;se[te]=ae.value.visible_sub_pages[he],ae.value.visible_sub_pages[he]=!1}),O.value[ee]=se}}function H(ee){P.value=ee;const xe=U.value[ee]||{};ae.value={name:xe.name||ee,description:xe.description||"",visible_menus:{...xe.visible_menus||{}},visible_sub_pages:{...xe.visible_sub_pages||{}}},O.value={},p.forEach(Pe=>{const se={};Pe.subPages.forEach(te=>{se[te]=ae.value.visible_sub_pages[Pe.key+"."+te]}),O.value[Pe.key]=se}),A.value=!0}async function ue(){K.value=!0;try{const xe=await(await fetch("/api/groups/"+P.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae.value)})).json();xe.success?(A.value=!1,P.value=null,await re(),await D()):ElementPlus.ElMessage.error(xe.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{K.value=!1}}async function X(ee){var xe;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((xe=U.value[ee])==null?void 0:xe.name)||ee)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const te=await(await fetch("/api/groups/"+ee,{method:"DELETE"})).json();te.success?await re():ElementPlus.ElMessage.error(te.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function q(){if(B.value.group_id){K.value=!0;try{const xe=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(B.value)})).json();xe.success?(T.value=!1,B.value={group_id:"",name:"",description:""},await re()):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{K.value=!1}}}const U=e({});async function re(){try{if(!localStorage.getItem("quant_token"))return;const xe=await fetch("/api/groups");if(xe.ok){const Pe=await xe.json();U.value=Pe.groups||{}}}catch(ee){console.warn("loadAllGroups:",ee)}}function pe(ee){var xe;return((xe=U.value[ee])==null?void 0:xe.name)||ee||"--"}async function de(){try{if(!localStorage.getItem("quant_token")){g.value=[];return}const xe=await fetch("/api/users");if(xe.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const Pe=await xe.json();g.value=Pe.users||[]}catch(ee){g.value=[],console.error("[loadUsers] error:",ee)}}function Y(ee){s.value=ee,r.value={username:ee.username,password:"",role:ee.role,theme:ee.theme||"tech-blue",group:ee.group||ee.role},l.value=!0}async function oe(){if(r.value.username){R.value=!0;try{const ee=s.value?"PUT":"POST",xe=s.value?`/api/users/${r.value.username}`:"/api/users",se=await(await fetch(xe,{method:ee,headers:{"Content-Type":"application/json"},body:JSON.stringify(r.value)})).json();if(se.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&r.value.username===t.value.username){const te=r.value.theme;te&&te!==t.value.theme&&(t.value.theme=te,localStorage.setItem("quant_user",JSON.stringify(t.value)),u(te))}l.value=!1,s.value=null,await de()}else ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{R.value=!1}}}async function De(ee){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ee}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await de())}catch(xe){console.error("[deleteUser]",xe)}}async function ke(ee){try{const Pe=await(await fetch(`/api/users/${ee.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ee.enabled})})).json();Pe.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Pe.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function _e(ee){try{const{value:xe}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ee.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(xe){const se=await(await fetch(`/api/users/${ee.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:xe})})).json();se.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(se.message||"重置失败")}}catch{}}return{userList:g,userSearch:d,groupFilter:w,userPageTab:o,expandedGroups:x,addMemberGroupMap:b,filteredUsers:E,toggleGroupExpand:_,removeMemberFromGroupInline:M,addMemberToGroupInline:N,changeUserGroup:i,showAddUser:l,editingUser:s,userForm:r,savingUser:R,editingGroup:P,menuConfigDialog:A,memberDialog:G,groupEditForm:ae,subPageCache:O,showAddGroup:T,addGroupForm:B,savingGroup:K,groupMembers:ie,addMemberUsername:Q,selectedMemberGroup:Z,subPageSectionExpanded:I,toggleSubPageSection:j,getGroupMemberCount:L,getMenuEnabledCount:k,groupCount:C,openMemberManager:ce,loadGroupMembers:W,addMemberToGroup:y,removeMemberFromGroup:c,availableUsersForGroup:S,onParentToggle:m,openMenuConfig:H,saveMenuConfig:ue,deleteGroupConfig:X,createGroup:q,allGroups:U,getGroupName:pe,loadAllGroups:re,loadUsers:de,editUser:Y,saveUser:oe,deleteUser:De,toggleUserEnabled:ke,resetUserPassword:_e}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:f}=Vue,{stockKlineLoaded:t,stockDetailVisible:u,stockDetailTab:p,stockDetail:D,disposeStockKline:g}=a,d=e([]),w=e(!1),o=e(!1),x=e("date"),b=e([]),E=e([]),_=e([]),M=e([]),N=f(()=>{var c,S;const y=[];for(const m of d.value){if(!m||m.id==null)continue;const H=m.stock_name||m.stock_code||"",ue=Array.isArray(m.messages)?m.messages:[];y.push({id:m.id,stock_code:m.stock_code,stock_name:H,first_msg:m.first_msg||((S=(c=ue[0])==null?void 0:c.content)==null?void 0:S.substring(0,50))||"",msg_count:m.msg_count||ue.length||0,created_at:m.created_at,date:(m.created_at||"").substring(0,10),month:(m.created_at||"").substring(0,7),messages:ue})}return y}),i=f(()=>{const y={};for(const S of N.value){const m=S.date||"未知";y[m]||(y[m]=[]),y[m].push(S)}const c={};return Object.keys(y).sort((S,m)=>m.localeCompare(S)).forEach(S=>c[S]=y[S]),c}),l=f(()=>{const y={};for(const S of N.value){const m=S.month||"未知";y[m]||(y[m]=[]),y[m].push(S)}const c={};return Object.keys(y).sort((S,m)=>m.localeCompare(S)).forEach(S=>c[S]=y[S]),c}),s=f(()=>{const y={};for(const c of N.value){const S=`${c.stock_name}(${c.stock_code})`;y[S]||(y[S]=[]),y[S].push(c)}return y});function r(y){const c=b.value.indexOf(y);c>=0?b.value.splice(c,1):b.value.push(y)}function R(y){const c=i.value[y]||[];if(c.every(m=>b.value.includes(m.id)))b.value=b.value.filter(m=>!c.some(H=>H.id===m));else for(const m of c)b.value.includes(m.id)||b.value.push(m.id)}function P(y){const c=l.value[y]||[];if(c.every(m=>b.value.includes(m.id)))b.value=b.value.filter(m=>!c.some(H=>H.id===m));else for(const m of c)b.value.includes(m.id)||b.value.push(m.id)}function A(y){const c=s.value[y]||[];if(c.every(m=>b.value.includes(m.id)))b.value=b.value.filter(m=>!c.some(H=>H.id===m));else for(const m of c)b.value.includes(m.id)||b.value.push(m.id)}function G(y){const c=E.value.indexOf(y);c>=0?E.value.splice(c,1):E.value.push(y)}function ae(y){const c=_.value.indexOf(y);c>=0?_.value.splice(c,1):_.value.push(y)}function O(y){const c=M.value.indexOf(y);c>=0?M.value.splice(c,1):M.value.push(y)}function T(){b.value.length===N.value.length?b.value=[]:b.value=N.value.map(y=>y.id)}async function B(){if(b.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${b.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const y of[...b.value])await ce(y);b.value=[]}}const K={};async function ie(y){D.value={stock:y.stock_code,name:y.stock_name},u.value=!0,p.value="chat",t.value=!1,g(),I.value=!0,j.value="",Z.value=[];try{let c=K[y.id];if(!c){const S=await fetch("/api/ai/chat/history/"+y.id);if(!S.ok)throw new Error("load history failed");c=(await S.json()).messages||[],K[y.id]=c}Z.value=c.map(S=>({role:S.role,content:S.content}))}catch{j.value="历史消息加载失败，请重试"}finally{I.value=!1}}const Q=e(""),Z=e([]),I=e(!1),j=e("");async function L(){var S;const y=Q.value.trim();if(!y||I.value)return;j.value="",Z.value.push({role:"user",content:y}),Q.value="",I.value=!0;const c=Z.value.length;Z.value.push({role:"assistant",content:""});try{const ue=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((S=D.value)==null?void 0:S.stock)||"",message:y})})).body.getReader(),X=new TextDecoder;let q="";for(;;){const{done:U,value:re}=await ue.read();if(U)break;q+=X.decode(re,{stream:!0});const pe=q.split(`
`);q=pe.pop()||"";for(const de of pe)if(de.startsWith("data: "))try{const Y=JSON.parse(de.slice(6));Y.token?Z.value[c].content+=Y.token:Y.done?console.log("Stream done:",Y.session_id):Y.error&&(j.value=Y.error)}catch(Y){console.warn("SSE parse error:",Y)}}}catch(m){Z.value[c].content||(Z.value[c].content="网络错误: "+m.message)}I.value=!1}async function k(y){var S;j.value="",I.value=!0;const c={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};Z.value.push({role:"user",content:c[y]||c.comprehensive});try{const H=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((S=D.value)==null?void 0:S.stock)||"",mode:y})});if(H.ok){const ue=await H.json();Z.value.push({role:"assistant",content:ue.reply||"无回复"})}}catch(m){j.value="网络错误: "+m.message}I.value=!1}async function C(){w.value=!0,o.value=!1;try{const y=await fetch("/api/ai/chat/history?view=date");if(y.ok){const c=await y.json(),S=[];for(const m of c)for(const H of m.items||[])S.push(H);d.value=S}else o.value=!0}catch(y){console.error(y),o.value=!0}finally{w.value=!1}}async function ce(y){try{await fetch("/api/ai/chat/history/"+y,{method:"DELETE"}),d.value=d.value.filter(c=>c.id!==y)}catch(c){console.error("deleteChatSession:",c)}}function W(y){if(!y)return"";const c=String(y).split(`
`),S=[],m=[];let H=0;for(;H<c.length;){if(/^\s*\|.*\|\s*$/.test(c[H])){let X=H;const q=[];for(;X<c.length&&/^\s*\|.*\|\s*$/.test(c[X]);)q.push(c[X]),X++;const U=de=>de.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(Y=>Y.trim()),re=q.map(U);if(re.length>1&&re[1].every(de=>/^:?-{3,}:?$/.test(de))){const de=Math.max(...re.map(ke=>ke.length)),Y=re[0].slice(0,de),oe=re.slice(2);let De="<table>";oe.length?(De+="<thead><tr>"+Y.map(ke=>"<th>"+ke+"</th>").join("")+"</tr></thead>",De+="<tbody>"+oe.map(ke=>"<tr>"+ke.slice(0,de).map(_e=>"<td>"+_e+"</td>").join("")+"</tr>").join("")+"</tbody>"):De+="<tbody><tr>"+Y.map(ke=>"<td>"+ke+"</td>").join("")+"</tr></tbody>",De+="</table>",S.push(De),m.push("\0T"+(S.length-1)+"\0"),H=X;continue}for(;H<X;)m.push(c[H]),H++;continue}m.push(c[H]),H++}let ue=m.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return S.forEach((X,q)=>{ue=ue.split("\0T"+q+"\0").join(X)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ue=window.__quantModules.core.sanitizeHtml(ue)),ue}return{chatSessions:d,chatHistoryView:x,selectedChatIds:b,expandedChatDates:E,expandedChatMonths:_,expandedChatStocks:M,chatHistoryLoading:w,chatHistoryError:o,allChatSessionsFlat:N,chatGroupedByDate:i,chatGroupedByMonth:l,chatGroupedByStock:s,toggleSelectChat:r,toggleSelectChatDate:R,toggleSelectChatMonth:P,toggleSelectChatStock:A,toggleChatDateExpand:G,toggleChatMonthExpand:ae,toggleChatStockExpand:O,selectAllChatSessions:T,deleteSelectedChatSessions:B,viewChatSession:ie,loadChatHistory:C,deleteChatSession:ce,renderMarkdown:W,stockChatInput:Q,stockChatMessages:Z,stockChatLoading:I,stockChatError:j,askStockSend:L,askStockQuick:k}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:f,watch:t}=Vue,{consensus:u,currentPage:p,currentSubPage:D,dashboardData:g,searchKeyword:d,statusFilter:w,strategyFilter:o,strategyFilterCounts:x}=a;function b(O){const T=o.value.selected;if(!T||T.length===0)return O;const B=o.value.mode;return O.filter(K=>{const ie=K.strategy_names||K.strategies||[];return B==="union"?T.some(Q=>ie.includes(Q)):T.every(Q=>ie.includes(Q))})}const E=f(()=>{const O=b(u.value||[]);return{all:O.length,newCount:O.filter(T=>T.status==="new").length,current:O.filter(T=>T.status==="current").length,out:O.filter(T=>T.status==="out").length}}),_=f(()=>{let O=u.value||[];if(w.value!=="all"&&(O=O.filter(T=>T.status===w.value)),O=b(O),d.value){const T=d.value.toLowerCase();O=O.filter(B=>B.code.toLowerCase().includes(T)||B.name&&B.name.toLowerCase().includes(T))}return O}),M=f(()=>{const O=u.value||[],T={},B={};for(const K of O)K.code&&K.name&&(B[K.code]=K.name);for(const K of O){const ie=K.strategy_names||K.strategies||[];for(const Q of ie)T[Q]||(T[Q]={strategy:Q,count:0,codes:[],names:[]}),T[Q].count++,T[Q].codes.includes(K.code)||(T[Q].codes.push(K.code),T[Q].names.push({code:K.code,name:B[K.code]||K.code}))}return Object.values(T).sort((K,ie)=>ie.count-K.count)}),N=f(()=>{const O=o.value.selected,T=o.value.mode,B={};for(const[K,ie]of Object.entries(x.value)){const Q=ie||[];!O||O.length===0?B[K]=Q.length:T==="union"?B[K]=Q.filter(Z=>Z.strategies&&O.some(I=>Z.strategies.includes(I))).length:B[K]=Q.filter(Z=>Z.strategies&&O.every(I=>Z.strategies.includes(I))).length}return B});function i(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const l=f(()=>{const O=(g.value||{}).consensus_rank||[];return b(O)}),s=f(()=>{const O=u.value||x.value.day||[];return b(O).length}),r=f(()=>{const O=(g.value||{}).strategy_counts||[],T=u.value||x.value.day||[];if(T.length===0)return O;const B=b(T),K={};B.forEach(Q=>{(Q.strategy_names||Q.strategies||[]).forEach(I=>{K[I]=(K[I]||0)+1})});const ie=B.length||1;return O.map(Q=>{const Z=Q.strategy_name||Q.strategy_id,I=K[Z]||0;return{...Q,count:I,percentage:Math.round(I/ie*1e3)/10}})}),R=f(()=>{const O=(g.value||{}).pool_changes||{},T=(O.new_count||0)-(O.out_count||0);return T>0?{dir:"up",text:"↑"+T}:T<0?{dir:"down",text:"↓"+Math.abs(T)}:{dir:"flat",text:"→0"}}),P=f(()=>{const O=(g.value||{}).time_coverage||{},T=new Date(O.start_date),B=new Date(O.end_date),K=new Date;if(!T.getTime()||!B.getTime()||K>=B)return 100;if(K<=T)return 0;const ie=B-T,Q=K-T;return Math.round(Q/ie*100)}),A=e(null),G=f(()=>{if(!A.value)return"";const O=Math.floor((Date.now()-A.value)/1e3);return O<60?O+"秒前刷新":O<3600?Math.floor(O/60)+"分钟前刷新":Math.floor(O/3600)+"小时前刷新"});function ae(O){o.value.selected=[O],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([O])),localStorage.setItem("quant_strategy_filter_mode","union"),p.value="calendar",D.value="calendar"}return{applyStrategyFilter:b,statusCounts:E,stockPool:_,strategyDistribution:M,strategyPreviewCount:N,saveStrategyFilter:i,filteredConsensusRank:l,currentPoolSize:s,filteredStrategyCounts:r,poolChangeBadge:R,timeBarPercent:P,lastRefreshTime:A,timeSinceRefresh:G,navigateToStrategyFilter:ae}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function f(u){return a[u]||"var(--text-tertiary)"}function t(u){return e[u]||"var(--bg-hover)"}window.__quantModules.watchlist={create(u){const{ref:p,computed:D,watch:g}=Vue,{currentUser:d,selectedDate:w,stockDetail:o,stockDetailTab:x,stockDetailVisible:b,stockDetailLoading:E,stockKlineLoaded:_,viewCache:M,animateScoreEntrance:N,loadStockKline:i,refreshStockScore:l,disposeStockKline:s,aiHistory:r,aiLoading:R,aiEvalStage:P,aiEvalElapsed:A,aiEvalError:G,aiResult:ae,loadLastEvaluation:O,autoEvaluateConfig:T,autoEvaluateScope:B,batchStocks:K,batchRunning:ie,batchTotal:Q,batchCompleted:Z,batchCurrent:I,batchStatuses:j,batchResults:L,batchEvalErrors:k,expandedDates:C,expandedStocks:ce,savingConfig:W,selectedHistoryIds:y,selectedWatchlistCodes:c,showAutoEvaluateSettings:S,showBatchEvaluate:m}=u,H=n=>(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim(),ue=p(""),X=p("default"),q=p("default"),U=p([]),re=D(()=>new Set(U.value.map(n=>n.code))),pe=p(!1),de=p(!1),Y=D(()=>{const n=[...U.value];return q.value==="name"?n.sort((F,ne)=>F.name.localeCompare(ne.name,"zh")):q.value==="added"?n.sort((F,ne)=>(ne.added_at||"").localeCompare(F.added_at||"")):q.value==="score"&&n.sort((F,ne)=>{const Ce=De(F.code);return De(ne.code)-Ce}),n});function oe(n){const F=r.value.filter(Ce=>Ce.stock_code===n);if(F.length===0)return null;const ne=F.reduce((Ce,qe)=>Ce.evaluate_time>qe.evaluate_time?Ce:qe);return{score:ne.result.total_score,color:f(ne.result.level),bg:t(ne.result.level)}}function De(n){const F=oe(n);return F?F.score:0}function ke(n){Te(n.code,n.name),se.value=se.value.filter(F=>F.code!==n.code),Pe.value=""}const _e=D(()=>new Set(r.value.map(n=>n.stock_code))),ee=p(new Set);function xe(n){ee.value.add(n)}const Pe=p(""),se=p([]),te=p(!1),he=p({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ne=p(!1),Ie=p(!1),Ue=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};Ue.REALTIME_WS_PATH;const Ge=Ue.REALTIME_DEGRADED_TEXT||"数据不可达",ht=Ue.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";Ue.WARN_RISE_SPEED_THRESHOLD!=null&&Ue.WARN_RISE_SPEED_THRESHOLD,Ue.WARN_VOLUME_RATIO_THRESHOLD!=null&&Ue.WARN_VOLUME_RATIO_THRESHOLD;const st=Ue.quoteFmt||{price:n=>n==null?"--":Number(n).toFixed(2),pct:n=>n==null?"--":Number(n).toFixed(2)+"%",num:n=>n==null?"--":Number(n).toFixed(2),color:n=>""},Rt=3,Se=5e3,we=p({}),Ae=p(!1),Re=p("idle");let Xe=null,Ze=null,tt=0;function xt(n){return Ue.checkQuoteWarning?Ue.checkQuoteWarning(n):null}function St(n){return xt(we.value[n])}function pt(n){return st.color(we.value[n])}function zt(n){return st.price(we.value[n]&&we.value[n].price)}function Kt(n){return st.pct(we.value[n]&&we.value[n].change_pct)}function Jt(n,F){return st.num(we.value[n]&&we.value[n][F])}function et(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function yt(){if(!Xe||Xe.readyState!==1)return;const n=(U.value||[]).map(F=>F.code);n.length!==0&&Xe.send(JSON.stringify({subscribe:n}))}function Wt(){if(Ze&&(clearTimeout(Ze),Ze=null),Xe){try{Xe.onopen=null,Xe.onmessage=null,Xe.onerror=null,Xe.onclose=null,Xe.close()}catch{}Xe=null}we.value={},Ae.value=!1,Re.value="idle"}function gt(){const n=et();if(!n||!Ue.buildRealtimeWsUrl||Re.value==="open"||Re.value==="connecting")return;let F;try{F=Ue.buildRealtimeWsUrl()+"?token="+encodeURIComponent(n)}catch{Re.value="offline",Ae.value=!0;return}Re.value="connecting";let ne=null;try{ne=new WebSocket(F)}catch{Re.value="offline",Ae.value=!0;return}Xe=ne,ne.onopen=function(){Re.value="open",tt=0,yt()},ne.onmessage=function(Ce){let qe=null;try{qe=JSON.parse(Ce.data||"{}")}catch{return}if(!qe||qe.type!=="quotes")return;if(Ae.value=!!qe.degraded,qe.degraded||!Array.isArray(qe.data)){we.value={};return}const Tt={};qe.data.forEach(function($e){$e&&$e.code&&(Tt[$e.code]=$e)}),we.value=Tt},ne.onerror=function(){Re.value="offline",Ae.value=!0},ne.onclose=function(){Re.value="offline",tt<Rt?(tt++,Ze=setTimeout(function(){Re.value!=="open"&&gt()},Se*tt)):Ae.value=!0}}g(U,function(){Re.value==="open"&&yt()}),et()&&setTimeout(gt,500);async function Ut(){if(!o.value)return;R.value=!0,ae.value=null,G.value="",P.value="fetching",A.value=0;const n=Date.now(),F=setInterval(()=>{R.value&&(A.value=Math.round((Date.now()-n)/1e3))},500);try{const ne=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:o.value.stock,stock_name:o.value.name||o.value.stock,strategy:X.value})});P.value="calculating";const Ce=await ne.json();P.value="analyzing",Ce.success?(await nextTick(),ae.value=Ce.data,x.value="ai",J()):(G.value=Ce.message||"评估失败",ElementPlus.ElMessage.error(G.value))}catch(ne){G.value=ne&&ne.message&&!String(ne.message).includes("Failed to fetch")?ne.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(G.value)}finally{clearInterval(F),R.value=!1,A.value=0,G.value?P.value="":(P.value="done",setTimeout(()=>{P.value==="done"&&(P.value="")},800))}}const _t=50,Je=p(0),At=p(!1),wt=D(()=>r.value.length<Je.value);async function J(){pe.value=!0,de.value=!1;try{if(!localStorage.getItem("quant_token")){r.value=[];return}const F=await fetch(`/api/ai/history?limit=${_t}&offset=0`);if(F.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),d.value=null;return}const ne=await F.json();ne.success?(r.value=ne.data||[],Je.value=ne.total!=null?ne.total:r.value.length):de.value=!0}catch(n){console.error("[loadAiHistory] error:",n),de.value=!0}finally{pe.value=!1}}async function ge(){if(!(At.value||!wt.value)){At.value=!0;try{const F=await(await fetch(`/api/ai/history?limit=${_t}&offset=${r.value.length}`)).json();if(F.success&&Array.isArray(F.data)){const ne=new Set(r.value.map(qe=>qe.id)),Ce=F.data.filter(qe=>!ne.has(qe.id));r.value=r.value.concat(Ce),F.total!=null&&(Je.value=F.total)}}catch(n){console.warn("[loadMoreAiHistory] error:",n)}finally{At.value=!1}}}async function at(n){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ne=await(await fetch(`/api/ai/history/${n}`,{method:"DELETE"})).json();if(ne.success){ElementPlus.ElMessage.success("删除成功"),J();const Ce=y.value.indexOf(n);Ce>=0&&y.value.splice(Ce,1)}else ElementPlus.ElMessage.error(ne.message||"删除失败")}catch{}}function kt(n){const F=y.value.indexOf(n);F>=0?y.value.splice(F,1):y.value.push(n)}function lt(){y.value=[]}function It(){c.value=[]}async function ea(){const n=y.value;if(n.length===0)return;const F=r.value.filter(ne=>n.includes(ne.id)).map(ne=>ne.stock_code);m.value=!0,K.value=[...new Set(F)].join(",")}async function aa(){const n=y.value;if(n.length===0)return;const F=r.value.filter(qe=>n.includes(qe.id)),ne=[...new Map(F.map(qe=>[qe.stock_code,qe])).values()];let Ce=0;for(const qe of ne)re.value.has(qe.stock_code)||(await Te(qe.stock_code,qe.stock_name||qe.stock_code),Ce++);Ce>0?ElementPlus.ElMessage.success(`已加入 ${Ce} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function na(){const n=y.value;if(n.length===0)return;const F=r.value.filter(Ce=>n.includes(Ce.id)),ne=[...new Map(F.map(Ce=>[Ce.stock_code,Ce])).values()];try{const qe=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ne.map(Tt=>({stock_code:Tt.stock_code,stock_name:Tt.stock_name||""}))})})).json();qe&&qe.success?ElementPlus.ElMessage.success(`已登记 ${qe.count||ne.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(qe&&qe.detail||"批量加入组合失败")}catch(Ce){console.warn("batchAddToPortfolio failed:",Ce),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function ta(){if(c.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${c.value.length} 只股票？`,"提示",{type:"warning"});for(const n of c.value)await Ve(n);c.value=[],ElementPlus.ElMessage.success("已移除")}catch(n){n&&n.message!=="cancel"&&console.warn("batchRemoveWatchlist:",n)}}function Qt(n){const F=c.value.indexOf(n);F>=0?c.value.splice(F,1):c.value.push(n)}function Ht(){y.value.length===r.value.length?y.value=[]:y.value=r.value.map(n=>n.id)}function Nt(){c.value.length===U.value.length?c.value=[]:c.value=U.value.map(n=>n.code)}async function Gt(){if(y.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${y.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const F=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:y.value})})).json();F.success?(ElementPlus.ElMessage.success(F.message),y.value=[],J()):ElementPlus.ElMessage.error(F.message||"删除失败")}catch{}}async function ft(){try{const F=await(await fetch("/api/ai/auto-config")).json();F.success&&(T.value=F.data,F.data.evaluate_scope&&(B.value=F.data.evaluate_scope))}catch(n){console.warn("loadAutoEvaluateConfig failed:",n)}}async function v(){W.value=!0;try{T.value.evaluate_scope=B.value;const F=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T.value)})).json();F.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),S.value=!1):ElementPlus.ElMessage.error(F.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{W.value=!1}}const $=p(!1);async function le(){$.value=!0;try{const F=await(await fetch("/api/watchlist")).json();F.success&&(U.value=F.stocks||[])}catch(n){console.warn("loadWatchlist failed:",n)}finally{$.value=!1}}async function Te(n,F){try{const Ce=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,name:F})})).json();if(Ce.success)return Ce.existed||U.value.push({code:n,name:F,added_at:new Date().toISOString()}),!0}catch(ne){console.warn("addToWatchlist failed:",ne)}return!1}async function Ve(n){try{await fetch(`/api/watchlist/${encodeURIComponent(n)}`,{method:"DELETE"}),U.value=U.value.filter(F=>F.code!==n)}catch(F){console.warn("removeFromWatchlist failed:",F)}}async function Qe(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),U.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(n){console.warn("clearWatchlist failed:",n)}}async function Oe(n,F){re.value.has(n)?(await Ve(n),ElementPlus.ElMessage.info("已移除自选")):await Te(n,F)&&ElementPlus.ElMessage.success("已加入自选")}async function rt(n,F){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(n,F||"");const ne=new Date().toISOString().split("T")[0],Ce=w.value||ne;x.value="kline",ae.value=null,G.value="",s("stockKlineChart"),o.value=null,E.value=!0,_.value=!1,b.value=!0,nextTick(()=>N());try{const qe=await fetch(`/api/calendar/stock/${encodeURIComponent(n)}?date=${Ce}`);o.value=await qe.json()}catch{o.value={stock:n,name:F,total_days:0}}finally{E.value=!1}await nextTick(),await i("daily"),l(),O(n)}const nt=p(!1);async function ct(){var n;if(U.value.length!==0){nt.value=!0;try{const ne=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ne.success&&ne.loaded>0?(((n=ne.details)==null?void 0:n.loaded)||[]).forEach(Ce=>ee.value.add(Ce.code)):ne.loaded===0&&ne.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(F){console.error("预加载K线失败:",F)}finally{nt.value=!1}}}async function Ot(n,F){R.value=!0,ae.value=null,G.value="",P.value="fetching",_.value=!1,s();const ne=new Date().toISOString().split("T")[0],Ce=w.value||ne;try{const qe=await fetch(`/api/calendar/stock/${encodeURIComponent(n)}?date=${Ce}`);o.value=await qe.json()}catch{o.value={stock:n,name:F,total_days:0}}x.value="ai",b.value=!0,await nextTick();try{const Tt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n,stock_name:F})})).json();Tt.success?(ae.value=Tt.data,J()):(G.value=Tt.message||"评估失败",ElementPlus.ElMessage.error(G.value))}catch{G.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(G.value)}finally{R.value=!1,P.value=""}}async function Et(){U.value.length!==0&&(m.value=!0,K.value=U.value.map(n=>n.code).join(","))}async function z(){c.value.length!==0&&(m.value=!0,K.value=c.value.join(","))}async function fe(){if(!Pe.value.trim()){se.value=[];return}te.value=!0;try{const F=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(Pe.value)}`)).json();se.value=(F.results||[]).filter(ne=>!re.value.has(ne.code))}catch(n){console.warn("searchStockForWatchlist failed:",n)}finally{te.value=!1}}async function Le(){try{const F=await(await fetch("/api/data-refresh/config")).json();he.value=F}catch(n){console.error("加载数据刷新配置失败:",n)}}async function Me(){Ie.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(he.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ie.value=!1}}async function ze(){var n;Ne.value=!0;try{const ne=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ne.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((n=ne.parser_stats)==null?void 0:n.dates_count)||0}交易日`),M.clear(),await Le()):ElementPlus.ElMessage.error(ne.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Ne.value=!1}}const He=p(!1);async function mt(){He.value=!0;try{const F=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(F.success){const ne=F.result||{},Ce=F.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ne.pulled||0}/${ne.total||0}, 财务 ${Ce.pulled||0}/${Ce.total||0}`),M.clear(),await Le()}else ElementPlus.ElMessage.error(F.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{He.value=!1}}const Mt=D(()=>{const n={};for(const F of r.value){const ne=(F.evaluate_time||"").split("T")[0];n[ne]||(n[ne]=[]),n[ne].push(F)}for(const F in n)n[F].sort((ne,Ce)=>Ce.evaluate_time.localeCompare(ne.evaluate_time));return n}),it=D(()=>{const n={};for(const F of r.value){const ne=F.stock_code;n[ne]||(n[ne]=[]),n[ne].push(F)}for(const F in n)n[F].sort((ne,Ce)=>Ce.evaluate_time.localeCompare(ne.evaluate_time));return n}),Bt=D(()=>{const n={};for(const F of r.value){const ne=(F.evaluate_time||"").split("T")[0].slice(0,7);n[ne]||(n[ne]=[]),n[ne].push(F)}for(const F in n)n[F].sort((ne,Ce)=>Ce.evaluate_time.localeCompare(ne.evaluate_time));return n}),qa=D(()=>Object.keys(it.value).length),ia=D(()=>{const n=r.value.length;return n===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(ne=>{const Ce=r.value.filter(qe=>qe.result.total_score>=ne.min&&qe.result.total_score<=ne.max).length;return{...ne,count:Ce,pct:Math.round(Ce/n*100)}})});async function wa(){if(!ue.value)return;const n=U.value.find(F=>F.code===ue.value);if(n){R.value=!0,ae.value=null,G.value="",P.value="fetching";try{o.value={stock:n.code,name:n.name,total_days:0},b.value=!0,x.value="ai",await nextTick();const ne=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n.code,stock_name:n.name,strategy:X.value})})).json();ne.success?(ae.value=ne.data,J(),ue.value=""):(G.value=ne.message||"评估失败",ElementPlus.ElMessage.error(G.value))}catch{G.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(G.value)}finally{R.value=!1,P.value=""}}}function oa(n){const F=C.value.indexOf(n);F>=0?C.value.splice(F,1):C.value.push(n)}function Pa(n){const ne=(Mt.value[n]||[]).map(qe=>qe.id);ne.every(qe=>y.value.includes(qe))?y.value=y.value.filter(qe=>!ne.includes(qe)):ne.forEach(qe=>{y.value.includes(qe)||y.value.push(qe)})}function ra(n){const ne=(Bt.value[n]||[]).map(qe=>qe.id);ne.every(qe=>y.value.includes(qe))?y.value=y.value.filter(qe=>!ne.includes(qe)):ne.forEach(qe=>{y.value.includes(qe)||y.value.push(qe)})}function Da(n){const F=ce.value.indexOf(n);F>=0?ce.value.splice(F,1):ce.value.push(n)}function ca(n){const ne=(it.value[n]||[]).map(qe=>qe.id);ne.every(qe=>y.value.includes(qe))?y.value=y.value.filter(qe=>!ne.includes(qe)):ne.forEach(qe=>{y.value.includes(qe)||y.value.push(qe)})}const $t={},ka={};function ga(n,F,ne){if(!n||(ne&&(ka[F]={el:n,records:ne}),$t[F]===n))return;const Ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,qe=()=>{Object.keys($t).forEach(We=>{if($t[We]&&$t[We]!==n){try{$t[We].dispose()}catch{}delete $t[We]}});const Tt=[...ne].sort((We,Pt)=>We.evaluate_time.localeCompare(Pt.evaluate_time)),$e=Tt.map(We=>(We.evaluate_time||"").split("T")[0]),bt=Tt.map(We=>{var Pt;return((Pt=We.result)==null?void 0:Pt.total_score)??null}),Yt=Tt.map(We=>{var Pt;return((Pt=We.result)==null?void 0:Pt.level)??""}),Ct={primary:H("--qc-primary-600")||"#b8922a",textPrimary:H("--text-primary")||"#1f2937",textSecondary:H("--text-secondary")||"#6b7280",border:H("--border-light")||"#e5e7eb",up:H("--color-success")||"#67c23a",down:H("--color-danger")||"#f56c6c"},da=[];for(let We=1;We<bt.length;We++)bt[We]!=null&&bt[We-1]!=null&&Math.abs(bt[We]-bt[We-1])>=15&&da.push({name:"大幅变化",coord:[$e[We],bt[We]],value:(bt[We]-bt[We-1]>0?"↑":"↓")+Math.abs(bt[We]-bt[We-1]),symbol:"pin",symbolSize:32,itemStyle:{color:bt[We]-bt[We-1]>0?Ct.up:Ct.down}});const ua=echarts.init(n);ua.setOption({tooltip:{trigger:"axis",backgroundColor:H("--bg-card")||"#ffffff",borderColor:Ct.border,textStyle:{color:Ct.textPrimary},formatter:function(We){var ya;const Pt=(ya=We[0])==null?void 0:ya.dataIndex,ha=Pt!=null?Yt[Pt]:"";return $e[Pt]+"<br/>得分: "+bt[Pt]+(ha?" ("+ha+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:$e,axisLabel:{fontSize:10,rotate:30,color:Ct.textSecondary},axisLine:{lineStyle:{color:Ct.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Ct.textSecondary},splitLine:{lineStyle:{color:Ct.border}}},series:[{data:bt,type:"line",smooth:!0,lineStyle:{color:Ct.primary,width:2},itemStyle:{color:Ct.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:da.length>0?{data:da}:void 0}]}),$t[F]=ua};Ce?Ce().then(qe).catch(()=>{}):qe()}function Ra(){Object.keys(ka).forEach(n=>{const F=ka[n];if(!(!F||!F.el)){if($t[n]){try{$t[n].dispose()}catch{}delete $t[n]}ga(F.el,n,F.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Ra));async function za(n){ae.value=n,_.value=!1,s();try{const F=await fetch(`/api/calendar/stock/${n.stock_code}?date=${w.value}`);o.value=await F.json()}catch{o.value={stock:n.stock_code,name:n.stock_name||n.stock_code,total_days:0,history:[]}}b.value=!0,x.value="ai"}async function h(){if(!K.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const n=K.value.split(/[,，\s]+/).filter($e=>$e.trim());if(n.length===0)return;ie.value=!0,Q.value=n.length,Z.value=0,I.value="",j.value={},L.value={},k.value={},n.forEach($e=>{j.value[$e]="pending",L.value[$e]=null});const F={"Content-Type":"application/json"};let ne=0,Ce=0,qe=!1;try{const $e=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:F,body:JSON.stringify({stock_codes:n})});if($e.ok&&$e.body){qe=!0;const bt=$e.body.getReader(),Yt=new TextDecoder("utf-8");let Ct="",da=!1;for(;!da;){const{value:ua,done:We}=await bt.read();da=We,Ct+=Yt.decode(ua||new Uint8Array,{stream:!da});let Pt;for(;(Pt=Ct.indexOf(`

`))>=0;){const ha=Ct.slice(0,Pt);Ct=Ct.slice(Pt+2);const ya=ha.split(`
`).find(Ka=>Ka.startsWith("data: "));if(!ya)continue;let Dt;try{Dt=JSON.parse(ya.slice(6))}catch{continue}Dt.type==="start"?Dt.total&&(Q.value=Dt.total):Dt.type==="item"?(Z.value++,I.value=Dt.stock_code,Dt.success?(j.value[Dt.stock_code]="success",L.value[Dt.stock_code]=Dt,ne++):(j.value[Dt.stock_code]="error",k.value[Dt.stock_code]=Dt.error||"评估失败",Ce++)):Dt.type==="done"&&(typeof Dt.success=="number"&&(ne=Dt.success),typeof Dt.fail=="number"&&(Ce=Dt.fail))}}if(Ct.trim()){const ua=Ct.split(`
`).find(We=>We.startsWith("data: "));if(ua)try{const We=JSON.parse(ua.slice(6));We.type==="item"?(Z.value++,I.value=We.stock_code,We.success?(j.value[We.stock_code]="success",L.value[We.stock_code]=We,ne++):(j.value[We.stock_code]="error",k.value[We.stock_code]=We.error||"评估失败",Ce++)):We.type==="done"&&(typeof We.success=="number"&&(ne=We.success),typeof We.fail=="number"&&(Ce=We.fail))}catch{}}}}catch{qe=!1}if(!qe){ne=0,Ce=0,Z.value=0;for(const $e of n){I.value=$e,j.value[$e]="running";try{const Yt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:F,body:JSON.stringify({stock_code:$e.trim(),stock_name:$e.trim()})})).json();Yt.success?(j.value[$e]="success",L.value[$e]=Yt.data,ne++):(j.value[$e]="error",k.value[$e]=Yt.message&&Yt.message!=="success"?Yt.message:"评估失败",Ce++)}catch(bt){j.value[$e]="error",k.value[$e]="网络错误: "+(bt&&bt.message?bt.message:bt),Ce++}Z.value++}}I.value="",await J();const Tt=n.length;setTimeout(()=>{Ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${ne}/${Tt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${ne}/${Tt} · 失败 ${Ce}`),ie.value=!1},500)}return{quickEvalStock:ue,evalStrategy:X,watchlistSort:q,watchlist:U,watchlistCodes:re,sortedWatchlist:Y,getWatchlistScore:oe,getLatestScore:De,addSearchResult:ke,evaluatedCodes:_e,klineLoadedCodes:ee,markKlineLoaded:xe,watchlistSearch:Pe,watchlistResults:se,watchlistSearching:te,dataRefreshConfig:he,dataRefreshReloading:Ne,dataRefreshSaving:Ie,aiHistoryLoading:pe,aiHistoryError:de,aiHistoryTotal:Je,aiHistoryLoadingMore:At,hasMoreAiHistory:wt,loadMoreAiHistory:ge,watchlistLoading:$,doAiEvaluate:Ut,loadAiHistory:J,deleteSingleHistory:at,toggleSelectHistory:kt,clearSelection:lt,clearWatchlistSelection:It,batchReevaluateHistory:ea,batchAddToWatchlist:aa,batchAddToPortfolio:na,batchRemoveWatchlist:ta,toggleSelectWatchlist:Qt,selectAllHistory:Ht,selectAllWatchlist:Nt,deleteSelectedHistory:Gt,loadAutoEvaluateConfig:ft,saveAutoEvaluateConfig:v,loadWatchlist:le,addToWatchlist:Te,removeFromWatchlist:Ve,clearWatchlist:Qe,toggleWatchlist:Oe,showStockKline:rt,preloadingKline:nt,preloadWatchlistKline:ct,watchlistEvaluate:Ot,batchEvaluateWatchlist:Et,batchEvaluateSelected:z,searchStockForWatchlist:fe,loadDataRefreshConfig:Le,saveDataRefreshConfig:Me,triggerDataReload:ze,triggerDataPull:mt,dataPullRunning:He,groupedByDate:Mt,aiHistoryByStock:it,groupedByMonth:Bt,aiHistoryStockCount:qa,scoreDistribution:ia,quickEvaluate:wa,toggleDateExpand:oa,toggleSelectDate:Pa,toggleSelectMonth:ra,toggleStockExpand:Da,toggleSelectStock:ca,registerTrendChart:ga,viewAiResult:za,doBatchEvaluate:h,realtimeQuotes:we,realtimeDegraded:Ae,realtimeWsState:Re,connectRealtimeQuotes:gt,disconnectRealtimeQuotes:Wt,quoteWarningFor:St,realtimeQuoteColor:pt,realtimePriceText:zt,realtimePctText:Kt,realtimeRatioText:Jt,REALTIME_DEGRADED_TEXT:Ge,REALTIME_FALLBACK_TEXT:ht}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:f}=Vue,t=e([]),u=e(null),p=e([]),D=e(!1),g=e(!1),d=e(!1),w=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=e(!1),x=e(!1),b=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),E=e(!1),_=e("positions"),M=e(30),N=e(!1),i=e(""),l=e(!1),s=e({dates:[],equity:[],values:[]}),r=f(()=>t.value.length),R=e("metrics"),P=e(!1),A=e(""),G=e(!1),ae=e({metrics:null,rules:[],rebalance:null}),O=f(function(){const m=ae.value.metrics;if(!m)return[];const H=function(X){return X==null?"--":Number(X).toFixed(2)+"%"},ue=function(X){return X==null?"--":Number(X).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:H(m.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:H(m.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:H(m.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:H(m.cvar)},{key:"max_drawdown",label:"最大回撤",value:H(m.max_drawdown)},{key:"annual_return",label:"年化收益",value:H(m.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ue(m.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ue(m.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ue(m.calmar_ratio)},{key:"beta",label:"Beta",value:ue(m.beta)}]});async function T(){P.value=!0;try{const m=await(await fetch("/api/portfolio/risk?days=60")).json(),H=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ue=m&&m.success?m.risk:null,X=H&&H.success?H.rules||[]:[],q=H&&H.success?H.rebalance:null;ae.value={metrics:ue,rules:X,rebalance:q},G.value=!!(ue&&Object.keys(ue).length>0),A.value=m&&m.note||H&&H.note||""}catch(m){console.warn("[portfolio] 加载风险数据失败:",m),G.value=!1,A.value="风险数据加载失败"}finally{P.value=!1}}async function B(){D.value=!0,g.value=!1;try{const H=await(await fetch("/api/portfolio")).json();H.success?(t.value=H.positions||[],u.value=H.summary||null):g.value=!0}catch(m){console.warn("[portfolio] 加载持仓失败:",m),g.value=!0}finally{D.value=!1}}async function K(){const m=w.value,H=(m.stock_code||"").trim();if(!H){ElementPlus.ElMessage.warning("请输入股票代码");return}const ue=Number(m.cost_price),X=Number(m.quantity);if(!(ue>0)||!(X>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const U=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:H,stock_name:(m.stock_name||"").trim(),cost_price:ue,quantity:X})})).json();U.success?(ElementPlus.ElMessage.success(U.message||"持仓已更新"),d.value=!1,w.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await B(),W(M.value)):ElementPlus.ElMessage.error(U.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function ie(m){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+m+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ue=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(m),{method:"DELETE"})).json();ue.success?(ElementPlus.ElMessage.success("已删除持仓"),await B(),I(),W(M.value)):ElementPlus.ElMessage.error(ue.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function Q(m,H){b.value={stock_code:m,stock_name:H||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},x.value=!0}async function Z(){const m=b.value;if(!m.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const H=Number(m.price),ue=Number(m.quantity);if(!(H>0)||!(ue>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}E.value=!0;try{const q=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:m.stock_code,stock_name:m.stock_name||"",action:m.action,price:H,quantity:ue,trade_date:m.trade_date||"",note:(m.note||"").trim()})})).json();q.success?(ElementPlus.ElMessage.success(q.message||"调仓已记录"),x.value=!1,await B(),await I(),W(M.value)):ElementPlus.ElMessage.error(q.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{E.value=!1}}async function I(){try{const H=await(await fetch("/api/portfolio/trades")).json();H.success&&(p.value=H.trades||[])}catch(m){console.warn("[portfolio] 加载调仓记录失败:",m)}}const j=m=>(getComputedStyle(document.documentElement).getPropertyValue(m)||"").trim();function L(m){if(!m||!m.length)return[];let H=m[0]||0;const ue=[];for(let X=0;X<m.length;X++){const q=m[X]||0;q>H&&(H=q),ue.push(H>0?Math.round((q-H)/H*1e3)/10:0)}return ue}function k(){const m={primary:j("--qc-primary-600")||"#b8922a",textPrimary:j("--text-primary")||"#1f2937",textSecondary:j("--text-secondary")||"#6b7280",border:j("--border-light")||"#e5e7eb",up:j("--color-rise")||"#E63946",down:j("--color-fall")||"#2E7D32"},H=s.value;return{tooltip:{trigger:"axis",backgroundColor:j("--bg-card")||"#ffffff",borderColor:m.border,textStyle:{color:m.textPrimary},formatter:function(ue){const X=ue[0]?ue[0].dataIndex:-1,q=H.dates[X]||"",U=H.equity[X],re=H.values[X];let pe=q||"";return U!=null&&(pe+="<br/>组合净值: "+U),re!=null&&(pe+="<br/>组合市值: "+re),pe}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:H.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:m.textSecondary},axisLine:{lineStyle:{color:m.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:m.textSecondary},splitLine:{lineStyle:{color:m.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:m.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:H.equity,smooth:!0,showSymbol:!1,lineStyle:{color:m.primary,width:2},itemStyle:{color:m.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:j("--primary-rgb")?"rgba("+j("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:j("--primary-rgb")?"rgba("+j("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:L(H.equity),smooth:!0,showSymbol:!1,lineStyle:{color:m.down,width:1.5},itemStyle:{color:m.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function C(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function ce(m,H,ue){s.value={dates:m||[],equity:H||[],values:ue||[]},l.value=!!m&&m.length>0,l.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",k,{key:"portfolio-equity"}):C()}async function W(m){N.value=!0,i.value="";const H=Number(m)||M.value||30;M.value=H;try{const X=await(await fetch("/api/portfolio/equity_curve?days="+H)).json();X.success?(i.value=X.note||"",ce(X.dates||[],X.equity||[],X.values||[])):(i.value="数据暂不可用",C())}catch(ue){console.warn("[portfolio] 加载收益曲线失败:",ue),i.value="数据暂不可用",C()}finally{N.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function y(m,H){if(m==null||m===""||isNaN(Number(m)))return"--";const ue=Number(m),X=H??2;return(ue>=0?"+":"")+ue.toFixed(X)}function c(m,H){if(m==null||m===""||isNaN(Number(m)))return"--";const ue=Number(m),X=H??2;return(ue>=0?"+":"")+ue.toFixed(X)+"%"}function S(m){if(m==null||m===""||isNaN(Number(m)))return"";const H=Number(m);return H>0?"portfolio-up":H<0?"portfolio-down":""}return{positions:t,summary:u,trades:p,loading:D,loadError:g,showAddForm:d,addForm:w,addSaving:o,tradeFormVisible:x,tradeForm:b,tradeSaving:E,portfolioTab:_,equityDays:M,equityLoading:N,equityNote:i,equityHasData:l,portfolioCount:r,loadPortfolio:B,addPosition:K,removePosition:ie,openTradeForm:Q,submitTrade:Z,loadTrades:I,loadEquity:W,fmtSigned:y,fmtSignedPct:c,signClass:S,riskTab:R,riskLoading:P,riskNote:A,riskHasData:G,riskData:ae,riskMetricList:O,loadRisk:T}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(d,w){var o=Number(d);return isFinite(o)?o:typeof w=="number"?w:0}function e(d){var w=Array.isArray(d)?d:[];if(w.length<2)return null;for(var o=-1/0,x=0,b=0,E=0,_=0,M=0;M<w.length;M++){var N=a(w[M].equity!=null?w[M].equity:w[M].value);N>o&&(o=N,x=M);var i=o>0?(o-N)/o*100:0;i>b&&(b=i,E=x,_=M)}function l(s){return w[s]&&w[s].date?w[s].date:""}return{maxDrawdown:Math.round(b*100)/100,peakIndex:E,troughIndex:_,peakDate:l(E),troughDate:l(_)}}function f(d){for(var w=d||{},o={},x=Object.keys(w).sort(),b=0;b<x.length;b++){var E=x[b],_=String(E).slice(0,4);/^\d{4}$/.test(_)&&(o[_]=(o[_]||0)+a(w[E]))}var M=Object.keys(o).sort();return M.map(function(N){return{year:N,return:Math.round(o[N]*100)/100}})}function t(d){var w=Array.isArray(d)?d:[],o={};w.forEach(function(E){(E.points||[]).forEach(function(_){_&&_.date&&(o[_.date]=1)})});var x=Object.keys(o).sort(),b=w.map(function(E){var _={};return(E.points||[]).forEach(function(M){M&&M.date&&(_[M.date]=a(M.value!=null?M.value:M.equity))}),{name:E.name||"",data:x.map(function(M){return M in _?_[M]:null})}});return{dates:x,series:b}}function u(d){var w=d||{},o=function(b){return a(b)},x=function(b,E){var _=o(b);return isFinite(_)?_.toFixed(E):"--"};return[{key:"total_return",label:"总收益",value:x(w.total_return,2),suffix:"%",dir:o(w.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:x(w.annual_return,2),suffix:"%",dir:o(w.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:x(w.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:x(w.sharpe_ratio,2),suffix:"",dir:o(w.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:x(w.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:x(w.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(w.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:x(w.volatility,2),suffix:"%",dir:""}]}function p(d){var w=d==null?"":String(d);return/[",\n]/.test(w)?'"'+w.replace(/"/g,'""')+'"':w}function D(d){var w=d||{},o=[];o.push("回测指标"),o.push("指标,数值"),(w.metrics||[]).forEach(function(l){o.push(p(l.label)+","+p((l.value||"")+(l.suffix||"")))}),o.push(""),o.push("净值曲线");var x=["日期"].concat((w.series||[]).map(function(l){return l.name}));o.push(x.map(p).join(","));for(var b=w.dates||[],E=w.series||[],_=0;_<b.length;_++){for(var M=[b[_]],N=0;N<E.length;N++){var i=E[N].data&&E[N].data[_];M.push(i??"")}o.push(M.map(p).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(w.trades||[]).forEach(function(l){o.push(p(l.date)+","+p(l.stock)+","+p(l.action)+","+p(l.reason))}),o.join(`
`)}function g(d){return d==="buy"?"买入":d==="sell"?"卖出":d||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:f,buildNavSeries:t,buildMetrics:u,buildBacktestCsv:D,tradeActionText:g}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:f}=Vue,t=window.QuantBacktest||{},u=a||{},p=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],g=(Array.isArray(u.backtestStrategies)&&u.backtestStrategies.length?u.backtestStrategies:p).map(j=>({id:j.id,name:j.name})),d=e(g.length?[g[0].id]:[]),w=e(N()),o=e(1e5),x=e(3e-4),b=e(!1),E=e(!1),_=e(null),M=e("");function N(){const j=new Date,L=new Date;L.setFullYear(L.getFullYear()-1);const k=C=>C.getFullYear()+"-"+String(C.getMonth()+1).padStart(2,"0")+"-"+String(C.getDate()).padStart(2,"0");return[k(L),k(j)]}function i(j){const L=d.value.indexOf(j);L>=0?d.value.length>1&&d.value.splice(L,1):d.value.push(j)}function l(j){const L=g.find(k=>k.id===j);return L?L.name:j}function s(j){const L=j.summary||j;return{strategy_id:L.strategy_id,start_date:L.start_date,end_date:L.end_date,total_days:L.total_days,total_return:L.total_return,annual_return:L.annual_return,max_drawdown:L.max_drawdown,volatility:L.volatility,sharpe_ratio:L.sharpe_ratio,sortino_ratio:L.sortino_ratio,win_rate:L.win_rate,profit_loss_ratio:L.profit_loss_ratio,avg_positions:L.avg_positions!=null?L.avg_positions:L.avg_positions_per_day,total_trades:L.total_trades,turnover_rate:L.turnover_rate,success:L.success!==!1,message:L.message||"",insample_total_return:L.insample_total_return!=null?L.insample_total_return:null,outsample_total_return:L.outsample_total_return!=null?L.outsample_total_return:null,out_sample_ratio:L.out_sample_ratio!=null?L.out_sample_ratio:.2,overfit_warning:!!L.overfit_warning,overfit_reason:L.overfit_reason||""}}function r(j){return(Array.isArray(j)?j:[]).map(L=>({date:L.date,value:L.equity!=null?L.equity:L.value}))}function R(j,L){const k=s(L),C=r(L.equity_curve),ce=L.monthly_returns||{},W=Array.isArray(L.trade_history)?L.trade_history:[],y={id:j,name:l(j),summary:k,equityCurve:C,monthlyReturns:ce,trades:W};let c=null;if(b.value){const S=Number(o.value)||1e5;c={name:"现金基准",points:C.map(m=>({date:m.date,value:S}))}}return{success:!0,mode:"single",strategies:[y],primary:y,benchmark:c,period:(k.start_date||"")+" ~ "+(k.end_date||"")}}function P(j,L){const k=L.strategy_results||{},C=j.map(y=>{const c=k[y];if(!c)return null;const S=s(c);return{id:y,name:l(y),summary:S,equityCurve:r(c.equity_curve),monthlyReturns:c.monthly_returns||{},trades:Array.isArray(c.trade_history)?c.trade_history:[]}}).filter(y=>y&&y.summary.success!==!1),ce=C.length?C[0]:null;let W=null;return b.value&&(W={name:"等权组合基准",points:r(L.portfolio_equity)}),{success:C.length>0,mode:"multi",strategies:C,primary:ce,benchmark:W,period:ce?ce.summary.start_date+" ~ "+ce.summary.end_date:""}}const A=f(()=>{const j=_.value;return!j||!j.primary?[]:t.buildMetrics?t.buildMetrics(j.primary.summary):[]}),G=f(()=>{const j=_.value;return!j||!j.primary||!j.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(j.primary.monthlyReturns):[]}),ae=f(()=>{const j=_.value;return!j||!j.primary?[]:(j.primary.trades||[]).slice().sort((L,k)=>String(k.date||"").localeCompare(String(L.date||"")))}),O=f(()=>{const j=_.value;return!j||!j.strategies||j.strategies.length<2?[]:j.strategies.map(L=>({name:L.name,metrics:t.buildMetrics?t.buildMetrics(L.summary):[]}))}),T=f(()=>{const j=_.value;return!j||!j.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(j.primary.equityCurve):null});async function B(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const L=d.value;if(!L.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const k=w.value,C={start_date:k&&k[0]||void 0,end_date:k&&k[1]||void 0},ce={"Content-Type":"application/json"};E.value=!0,_.value=null,M.value="";try{if(L.length===1){const W=Object.assign({},C,{initial_capital:Number(o.value)||1e5,commission_rate:Number(x.value)||3e-4}),y=await fetch("/api/backtest/"+encodeURIComponent(L[0]),{method:"POST",headers:ce,body:JSON.stringify(W)});if(!y.ok){const S=await y.json().catch(()=>({}));throw new Error(S.detail||"回测失败")}const c=await y.json();if(!c.success)throw new Error(c.message||"回测失败");_.value=R(L[0],c)}else{const W=await fetch("/api/backtest/multi",{method:"POST",headers:ce,body:JSON.stringify(Object.assign({},C,{strategy_ids:L}))});if(!W.ok){const c=await W.json().catch(()=>({}));throw new Error(c.detail||"回测失败")}const y=await W.json();if(!y.success)throw new Error(y.message||"多策略回测失败");if(_.value=P(L,y.data||{}),!_.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(W){M.value=W&&W.message?W.message:"回测失败",ElementPlus.ElMessage.error(M.value)}finally{E.value=!1}}function K(){const j=_.value,L={dates:[],series:[]};if(!j)return L;const k=j.strategies.map(ce=>({name:ce.name,points:ce.equityCurve}));j.benchmark&&j.benchmark.points&&j.benchmark.points.length&&k.push({name:j.benchmark.name,points:j.benchmark.points});const C=t.buildNavSeries?t.buildNavSeries(k):L;return ie(C,j)}function ie(j,L){const k=H=>(getComputedStyle(document.documentElement).getPropertyValue(H)||"").trim(),C={primary:k("--qc-primary-600")||"#b8922a",success:k("--color-success")||"#4CAF50",accent:k("--color-accent")||"#F59E0B",info:k("--color-info")||"#1976d2",ai:k("--color-ai")||"#6366f1",textPrimary:k("--text-primary")||"#1f2937",textSecondary:k("--text-secondary")||"#6b7280",border:k("--border-light")||"#e5e7eb",up:k("--color-rise")||"#E63946",down:k("--color-fall")||"#2E7D32",bg:k("--bg-card")||"#ffffff"},ce=[C.primary,C.success,C.accent,C.info,C.ai],y=C.bg.length===7&&parseInt(C.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",c=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(L.primary?L.primary.equityCurve:[]):null,S=c&&c.peakDate&&c.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:C.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+c.maxDrawdown+"%",xAxis:c.peakDate,itemStyle:{color:C.down}},{xAxis:c.troughDate}]]}:void 0,m=j.series.map((H,ue)=>{const X=L.benchmark&&H.name===L.benchmark.name,q=ce[ue%ce.length];return{name:H.name,type:"line",data:H.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:X?2:2.4,type:X?"dashed":"solid",color:q},itemStyle:{color:q},emphasis:{focus:"series"},...ue===0&&S?{markArea:S}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:y,borderColor:C.border,textStyle:{color:C.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:C.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:j.dates,boundaryGap:!1,axisLine:{lineStyle:{color:C.border}},axisLabel:{color:C.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:C.textSecondary,fontSize:11},splitLine:{lineStyle:{color:C.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:C.border,textStyle:{color:C.textSecondary,fontSize:10}}],series:m}}function Q(j){if(!j){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",K,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function Z(){const j=_.value;if(!j||!j.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const L=j.strategies.map(m=>({name:m.name,points:m.equityCurve}));j.benchmark&&L.push({name:j.benchmark.name,points:j.benchmark.points});const k=t.buildNavSeries?t.buildNavSeries(L):{dates:[],series:[]},C=t.tradeActionText||(m=>m),ce=ae.value.map(m=>({date:m.date,stock:m.stock,action:C(m.action),reason:m.reason})),W=t.buildBacktestCsv?t.buildBacktestCsv({metrics:A.value,dates:k.dates,series:k.series,trades:ce}):"",y=new Blob(["\uFEFF"+W],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(y),S=document.createElement("a");S.href=c,S.download="backtest-"+j.strategies.map(m=>m.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",S.click(),URL.revokeObjectURL(c),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function I(j,L){return j==null||j===""||isNaN(Number(j))?"--":Number(j).toFixed(L??2)}return{btStrategyOptions:g,btSelectedStrategies:d,toggleBtStrategy:i,btDateRange:w,btCapital:o,btCommissionRate:x,btIncludeBenchmark:b,btRunning:E,btResult:_,btError:M,btMetrics:A,btAnnualReturns:G,btTrades:ae,btStrategyMetricsRows:O,btDrawdownRegion:T,runBacktestWorkbench:B,exportBacktestCSV:Z,registerBacktestNavChart:Q,btFmtNum:I}}}})();(function(){const{ref:a,computed:e,watch:f,onUnmounted:t}=Vue,u=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),p=72,D={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},g={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},d={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},w={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),x=a({}),b=a(!1),E=a({}),_=a({cycles:[]}),M=a([]),N=a(0),i=a(!1),l=a({autoRefresh:!0,refreshInterval:300}),s=a(""),r=a(""),R=a(!1),P=a("");let A=null;const G={x:0,y:0},ae=e(()=>{const Y=x.value;return["recession","recovery","overheat","stagflation"].map(De=>{const ke=Y[De]||{};return{key:De,name:ke.name||De,icon:d[ke.icon]||"bar-chart-3",color:ke.color||u("--text-tertiary")||"#888",bg:ke.bg_color||u("--bg-card")||"#f5f5f5",textColor:ke.color||u("--text-primary")||"#333",tagline:ke.allocation&&w[De]||""}})}),O=e(()=>{var oe,De,ke,_e;const Y=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(oe=Y.pmi)==null?void 0:oe.toFixed(2),color:Y.pmi>=50?u("--color-success")||"#43a047":u("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((De=Y.gdp_growth)==null?void 0:De.toFixed(2))+"%",color:u("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((ke=Y.cpi)==null?void 0:ke.toFixed(2))+"%",color:Y.cpi>1.2?u("--color-danger")||"#E53935":u("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((_e=Y.m2_growth)==null?void 0:_e.toFixed(2))+"%",color:u("--color-success")||"#43a047"}]}),T=Y=>{Y=Y||{};const oe=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],De=()=>u("--color-success")||"#43a047",ke=()=>u("--color-danger")||"#E53935",_e=()=>u("--color-warning")||"#FF9800",ee={宽松:De(),中位:_e(),偏低:ke(),高增长:De(),承压:ke(),不利:ke()};return oe.map(xe=>{const Pe=Y[xe.key]||{},se=Pe.score||0,te=Math.min(100,Math.max(5,(se+2)*25)),he=se>=.3?"#66BB6A":se>=-.3?"#FFB74D":"#EF5350",Ne=se>=0?"#66BB6A":"#EF5350";return{key:xe.key,label:xe.label,scoreStr:se.toFixed(2),level:Pe.level||"—",barWidth:te,barColor:he,scoreColor:Ne,color:ee[Pe.level]||"#888888"}})},B=e(()=>T(o.value.dimension_scores)),K=e(()=>T(E.value._dimensions)),ie=e(()=>{var oe;const Y=((oe=o.value.confidence)==null?void 0:oe.level)||"";return Y==="高"?"#43a047":Y==="中"?"#FF9800":Y==="低"?"#E53935":"var(--text-secondary)"}),Q=e(()=>{var ke,_e,ee,xe;const Y=x.value,oe={recovery:0,overheat:1,stagflation:2,recession:3},De={};for(const[Pe,se]of Object.entries(Y))De[Pe]={name:se.name,icon:se.icon,color:se.color,lightColor:se.bg_color,duration:"~"+(((ke=se.historical_stats)==null?void 0:ke.avg_duration_months)||18)+"个月",order:oe[Pe]||0,period:((ee=(_e=se.case_studies)==null?void 0:_e[0])==null?void 0:ee.split("：")[0])||"",avgMonths:((xe=se.historical_stats)==null?void 0:xe.avg_duration_months)||18};return De}),Z=e(()=>{var se,te;const Y=o.value.stage,De={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[Y]||{x:150,y:150},ke=o.value.dimension_scores||{},_e=((se=ke.growth)==null?void 0:se.score)||0,ee=((te=ke.inflation)==null?void 0:te.score)||0,xe=Math.max(-30,Math.min(30,_e*15)),Pe=Math.max(-30,Math.min(30,-ee*15));return{x:De.x+xe,y:De.y+Pe,prevX:G.x,prevY:G.y}}),I=e(()=>{var ke;const Y=Math.min(100,((ke=o.value.timing)==null?void 0:ke.progress_percent)||0),oe=o.value.color||"#4CAF50",De=Y>100?"linear-gradient(90deg, "+oe+", #FF9800)":oe;return{width:Y+"%",background:De}});function j(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function L(){var Y,oe;return((oe=(Y=o.value)==null?void 0:Y.timing)==null?void 0:oe.progress_percent)||0}function k(){var Y,oe;return((oe=(Y=o.value)==null?void 0:Y.timing)==null?void 0:oe.duration_months)||0}function C(){var Y,oe;return((oe=(Y=o.value)==null?void 0:Y.timing)==null?void 0:oe.avg_duration_months)||18}function ce(Y){var _e,ee;const oe=Q.value,De=((_e=oe[o.value.stage])==null?void 0:_e.order)||0;return(((ee=oe[Y])==null?void 0:ee.order)||0)<De}function W(Y){return D[Y]||Y}function y(Y){return g[Y]||Y}function c(Y){const oe=["#43a047","#f57c00","#1976d2","#757575"];return oe[Y-1]||oe[3]}async function S(){try{const oe=await(await fetch("/api/market/merrill-clock/stages")).json();oe.success&&oe.data&&(x.value=oe.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function m(){i.value=!0;try{ue();const oe=await(await fetch("/api/market/merrill-clock/timeline")).json();if(oe.success&&oe.data){const De=Array.isArray(oe.data.cycles)?oe.data.cycles.slice().reverse():[];_.value={cycles:De}}}catch{console.warn("获取美林时钟时间轴失败")}finally{i.value=!1}}async function H(Y){await q(Y)}async function ue(){try{const oe=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();oe&&oe.success&&oe.data&&(M.value=oe.data.items||[],N.value=oe.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function X(){var Y,oe;try{const ke=await(await fetch("/api/market/merrill-clock")).json(),_e=ke.stage||"recovery",ee=x.value[_e]||{};if(o.value={...ee,...ke,stage_cn:ke.stage_cn||ee.stage_cn||"",stage_name:ke.stage_name||ee.name||"",name:ke.name||ee.name||"复苏期"},s.value=new Date().toLocaleTimeString("zh-CN"),P.value&&P.value!==_e){const xe=x.value,Pe=((Y=xe[P.value])==null?void 0:Y.name)||P.value,se=((oe=xe[_e])==null?void 0:oe.name)||_e;ElementPlus.ElMessage({message:"美林时钟阶段切换："+Pe+" → "+se,type:"warning",duration:6e3,showClose:!0})}P.value=_e}catch(De){console.error("获取美林时钟失败:",De);const ke=x.value.recovery||{};o.value={...ke,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function q(Y){var De;b.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",E.value=x.value[Y]||x.value.recovery||{};const oe=((De=o.value)==null?void 0:De.stage)===Y;E.value._isCurrent=oe,oe&&o.value&&(E.value._nextPrediction=o.value.next_stage_prediction,E.value._confidence=o.value.confidence,E.value._stage=o.value.stage,E.value._dimensions=o.value.dimension_scores);try{const _e=await(await fetch("/api/market/merrill-clock/stage/"+Y)).json();if(_e.success&&_e.data){const ee={...x.value[Y],..._e.data};ee._is_current!==void 0&&(ee._isCurrent=ee._is_current),ee._current_timing&&(ee._currentTiming=ee._current_timing),ee._last_period&&(ee._lastPeriod=ee._last_period),E.value._nextPrediction&&(ee._nextPrediction=E.value._nextPrediction),E.value._confidence&&(ee._confidence=E.value._confidence),E.value._stage&&(ee._stage=E.value._stage),E.value._dimensions&&(ee._dimensions=E.value._dimensions),Object.assign(E.value,ee)}}catch(ke){console.warn("获取阶段详情失败:",ke)}}function U(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:l.value.autoRefresh,refreshInterval:l.value.refreshInterval})),l.value.autoRefresh?(clearInterval(A),A=setInterval(X,l.value.refreshInterval*1e3)):clearInterval(A),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function re(){R.value=!0,r.value="";try{const oe=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();oe.success?(r.value="重评估完成："+(oe.stage_name||oe.stage),await X(),ElementPlus.ElMessage.success("重评估完成")):(r.value=oe.message||"重评估失败",ElementPlus.ElMessage.error(oe.message||"重评估失败"))}catch{r.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{R.value=!1}}function pe(){const Y=localStorage.getItem("merrill_clock_config");if(Y)try{const oe=JSON.parse(Y);l.value={...l.value,...oe}}catch{}l.value.autoRefresh&&(A=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),X()},l.value.refreshInterval*1e3))}function de(){A&&clearInterval(A)}return t(()=>{de()}),{merrillData:o,merrillStagesConfig:x,showMerrillDetail:b,merrillDetailData:E,merrillTimeline:_,merrillSnapshots:M,merrillSnapshotsTotal:N,fetchMerrillSnapshots:ue,timelineLoading:i,merrillClockConfig:l,merrillClockLastUpdated:s,merrillReevalResult:r,merrillReevalLoading:R,stages:ae,indicatorList:O,dimensionScoreList:B,detailDimensionScoreList:K,confidenceColor:ie,timelineStages:Q,clockPosition:Z,merrillProgressStyle:I,FULL_CYCLE_MONTHS:p,getStageAngle:j,getCycleProgress:L,getCurrentStageMonths:k,getStageTotalMonths:C,isStageCompleted:ce,getCharLabel:W,getAssetName:y,getRankColor:c,fetchMerrillStages:S,fetchMerrillClock:X,loadMerrillTimeline:m,showTimelineStage:H,showStageDetail:q,saveMerrillClockConfig:U,doMerrillReevaluate:re,startAutoRefresh:pe,stopAutoRefresh:de}}})();(function(){function a(p){return getComputedStyle(document.documentElement).getPropertyValue(p).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const f=[];function t(p){typeof p=="function"&&f.push(p)}function u(){f.slice().forEach(function(p){try{p()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:t,refreshAllCharts:u,init(){return{getEChartsTheme:e,registerChart:t,refreshAllCharts:u}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const f=e("qcState");try{const p=localStorage.getItem("quant_sidebar_collapsed");p!==null&&f.sidebarCollapsed&&(f.sidebarCollapsed.value=p==="1")}catch{}if(!f)return{};const t=async p=>{if(window.__quantGoPage){await window.__quantGoPage(p.key,p.subPages[0]||"");return}f.currentPage.value=p.key,f.currentSubPage.value=p.subPages[0]||""},u=()=>{f.sidebarCollapsed.value=!f.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",f.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:f.menus,currentPage:f.currentPage,sidebarCollapsed:f.sidebarCollapsed,navigate:t,toggle:u,sanitizeHtml:f.sanitizeHtml,keyClick:f.keyClick,t:f.t}}}})();const Sa={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,f={"layout-dashboard":Fv,calendar:Vv,bot:jv,"flask-conical":Ov,zap:Nv,settings:Iv,"chevron-down":Lv,"chevron-right":Av,"chevron-left":zv,menu:Rv,search:Dv,bell:Pv,sun:Tv,moon:Mv,user:Ev,"user-round":qv,home:Cv,x:Sv,database:xv,activity:_v,clock:kv,"bar-chart-3":wv,shield:bv,"hard-drive":yv,"file-text":hv,users:gv,cpu:fv,"pie-chart":pv,info:mv,"log-out":vv,palette:uv,languages:dv,refresh:cv,download:rv,"external-link":ov,command:lv,sparkles:iv,"trending-up":nv,"trending-down":sv,"circle-dot":av,check:tv,"alert-triangle":ev,loader:Zu,"arrow-left":Xu,"arrow-right":$u,eye:Qu,"eye-off":Ju,lock:Yu,"sliders-horizontal":Gu,play:Uu,history:Wu,layers:Ku,"line-chart":Bu,target:Hu,"search-check":Fu,star:Vu,"message-circle":ju,"calendar-days":Ou,"calendar-range":Nu,"calendar-check":Iu,brain:Lu,lightbulb:Au,"octagon-x":zu,flag:Ru,package:Du,"clipboard-list":Pu,pin:Tu,"radio-tower":Mu,gauge:Eu,landmark:qu,"candlestick-chart":Cu,wallet:Su,"badge-check":xu,key:_u,factory:ku,trophy:wu,rocket:bu,flame:yu,"map-pin":hu,"scroll-text":gu,"book-open":fu,dna:pu,"bar-chart":mu,plus:vu,"star-off":uu,upload:du,gem:cu,"folder-open":ru,link:ou,save:lu,"trash-2":iu,pause:nu,"help-circle":su,"play-circle":au,pencil:tu,folder:eu,code:Zd,sprout:Xd,wheat:$d,snowflake:Qd,fuel:Jd,banknote:Yd,send:Gd,inbox:Ud,"wifi-off":Wd,"check-circle-2":Kd,"x-circle":Bd},t=()=>f[e.name]||f["circle-dot"];return(u,p)=>(me(),pa(Pd(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ca=(a,e)=>{const f=a.__vccOpts||a;for(const[t,u]of e)f[t]=u;return f},Hv={name:"qc-sidebar",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=ot(()=>a.menus&&a.menus.value||[]),f=ot(()=>a.currentPage&&a.currentPage.value||""),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),u=ot({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:i=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=i)}}),p=Lt({}),D={research:"量化投研",platform:"平台管理"},g=["research","platform"],d=i=>f.value===i.key,w=(i,l)=>f.value===i.key&&a.currentSubPage&&a.currentSubPage.value===l,o=i=>Array.isArray(i.subPages)&&i.subPages.length>1,x=(i,l)=>a.subPageNames&&a.subPageNames[l]||l;function b(i){!o(i)||u.value||(p.value[i.key]=!p.value[i.key])}function E(){e.value.forEach(i=>{p.value[i.key]===void 0&&(p.value[i.key]=d(i))})}async function _(i,l){const s=l||i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(i.key,s):(a.currentPage.value=i.key,a.currentSubPage&&(a.currentSubPage.value=s)),a.navigateTo&&a.navigateTo(i.key,s)}function M(){u.value=!u.value;try{localStorage.setItem("sidebar_collapsed",u.value?"1":"0")}catch{}}function N(i){if(i.ctrlKey&&i.key.toLowerCase()==="b"&&(i.preventDefault(),M()),!i.ctrlKey&&!i.metaKey&&!i.altKey&&(i.key==="ArrowDown"||i.key==="ArrowUp")){const l=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),s=l.indexOf(document.activeElement);if(s>=0){i.preventDefault();const r=l[(s+(i.key==="ArrowDown"?1:l.length-1))%l.length];r&&r.focus()}}}return Ba(()=>{E(),document.addEventListener("keydown",N)}),rs(()=>document.removeEventListener("keydown",N)),{state:a,menus:e,currentPage:f,navMode:t,sidebarCollapsed:u,expandedMenus:p,GROUP_LABELS:D,GROUPS:g,isActive:d,isChildActive:w,hasChildren:o,subLabel:x,toggleSubmenu:b,navigate:_,toggleCollapse:M}}},Bv={class:"qc-sidebar-logo"},Kv={key:0,class:"qc-logo-text"},Wv={class:"qc-sidebar-nav"},Uv={key:0,class:"qc-nav-group"},Gv={key:0,class:"qc-nav-group-label"},Yv=["href","aria-current","onClick"],Jv={key:0,class:"qc-sidebar-label"},Qv={key:1,class:"qc-nav-badge"},$v=["aria-expanded","aria-controls","onClick"],Xv=["id"],Zv=["href","aria-current","onClick"],em={class:"qc-sidebar-child-label"},tm={class:"qc-sidebar-footer"},am=["aria-expanded","aria-label","title"];function sm(a,e,f,t,u,p){const D=Zt("AppIcon"),g=Zt("el-tooltip");return me(),be("nav",{class:dt(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Ee("div",Bv,[e[1]||(e[1]=Dd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Be("",!0):(me(),be("span",Kv,Ke(t.state.t("login.title")),1))]),Ee("div",Wv,[(me(!0),be(vt,null,qt(t.GROUPS,d=>(me(),be(vt,{key:d},[t.menus.some(w=>w.group===d)?(me(),be("div",Uv,[t.sidebarCollapsed?Be("",!0):(me(),be("span",Gv,Ke(t.GROUP_LABELS[d]),1)),(me(!0),be(vt,null,qt(t.menus.filter(w=>w.group===d),w=>(me(),be(vt,{key:w.key},[Ee("div",{class:dt(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(w),"is-child-open":t.navMode==="tree"&&t.expandedMenus[w.key]}])},[ut(g,{content:w.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:ma(()=>[Ee("a",{class:dt(["qc-sidebar-link",{"is-active":t.isActive(w)}]),href:"#"+w.key,"aria-current":t.isActive(w)?"page":null,onClick:Vt(o=>t.navigate(w),["prevent"])},[ut(D,{name:w.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Be("",!0):(me(),be("span",Jv,Ke(w.name),1)),!t.sidebarCollapsed&&w.badge?(me(),be("span",Qv,Ke(w.badge),1)):Be("",!0)],10,Yv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(w)?(me(),be("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":t.expandedMenus[w.key]}]),"aria-expanded":!!t.expandedMenus[w.key],"aria-controls":"submenu-"+w.key,"aria-label":"展开子菜单",onClick:o=>t.toggleSubmenu(w)},[ut(D,{name:"chevron-down",size:14})],10,$v)):Be("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(w)&&t.expandedMenus[w.key]?(me(),be("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+w.key},[(me(!0),be(vt,null,qt(w.subPages,o=>(me(),be("a",{key:o,class:dt(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(w,o)}]),href:"#"+w.key+"-"+o,"aria-current":t.isChildActive(w,o)?"page":null,onClick:Vt(x=>t.navigate(w,o),["prevent"])},[Ee("span",em,Ke(t.subLabel(w,o)),1)],10,Zv))),128))],8,Xv)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),Ee("div",tm,[Ee("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...d)=>t.toggleCollapse&&t.toggleCollapse(...d))},[ut(D,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,am)])],2)}const nm=Ca(Hv,[["render",sm]]),im={name:"qc-header",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=Lt(!1),f=ot(()=>a.currentUser&&a.currentUser.value||null),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),u=ot(()=>{const de=a.currentPage&&a.currentPage.value,Y=(a.menus&&a.menus.value||[]).find(oe=>oe.key===de);return!!(Y&&Y.subPages&&Y.subPages.length)}),p=ot(()=>{const de=a.currentPage&&a.currentPage.value,Y=a.currentPageName&&a.currentPageName.value;if(Y)return Y;const oe=(a.menus&&a.menus.value||[]).find(De=>De.key===de);return oe&&oe.name||de||""}),D=ot(()=>{const de=a.currentSubPage&&a.currentSubPage.value;return de&&a.subPageNames&&a.subPageNames[de]||de||""}),g=Lt(typeof window<"u"?window.innerWidth<768:!1);function d(){g.value=window.innerWidth<768}Ba(()=>window.addEventListener("resize",d)),rs(()=>window.removeEventListener("resize",d));const w=Lt(!1),o=ot(()=>{const de=a.currentSubPage&&a.currentSubPage.value;return de&&a.subPageNames&&a.subPageNames[de]||de||""}),x=ot(()=>{const de=a.currentPage&&a.currentPage.value,Y=(a.menus&&a.menus.value||[]).find(oe=>oe.key===de);return(Y&&Y.subPages||[]).map(oe=>({key:oe,label:a.subPageNames&&a.subPageNames[oe]||oe}))});function b(){w.value=!w.value}function E(){w.value=!1}function _(de){w.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,de)}const M=ot(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),N=Lt(!1),i=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],l=ot(()=>{const de=i.find(Y=>Y.value===t.value);return de&&de.label||t.value});function s(){N.value=!N.value}function r(){N.value=!1}function R(de){N.value=!1,a.setNavMode&&a.setNavMode(de)}const P=ot({get:()=>a.searchQuery&&a.searchQuery.value||"",set:de=>{a.searchQuery&&(a.searchQuery.value=de)}}),A=Lt(!1),G=Lt([]),ae=Lt(!1),O=Lt(!1);function T(){const de=localStorage.getItem("quant_token")||"";return de?{Authorization:"Bearer "+de,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function B(){ae.value=!0,O.value=!1;try{const Y=await(await fetch("/api/alerts/history?limit=8",{headers:T()})).json();Y&&Y.success?G.value=Y.history||[]:G.value=[]}catch{O.value=!0,G.value=[]}finally{ae.value=!1}}function K(){A.value=!A.value,A.value&&B()}function ie(){A.value=!1}function Q(){A.value=!1,a.activateTab&&a.activateTab("system","notification")}const Z=Lt(!1),I=a.themeHues||[45,220,0,140,270,320],j=ot(()=>a.themeHue&&a.themeHue.value||45),L=ot(()=>a.themeMode&&a.themeMode.value||"system");function k(de){return a.hueColor?a.hueColor(de):"hsl("+de+", 75%, 42%)"}function C(de){return a.hueName?a.hueName(de):String(de)}function ce(){Z.value=!Z.value}function W(){Z.value=!1}function y(de){a.changeThemeMode&&a.changeThemeMode(de)}function c(de){a.changeThemeHue&&a.changeThemeHue(de)}function S(){a.changeThemeMode&&a.changeThemeMode(M.value?"light":"dark")}function m(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function H(){e.value=!e.value}function ue(){e.value=!1}function X(de){return()=>{ue(),de&&de()}}function q(){ue(),a.handleLogout&&a.handleLogout()}const U=ot(()=>a.marketData&&a.marketData.value||{}),re=Lt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:U,bannerDismissed:re,dismissBanner:()=>{re.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:f,isDark:M,searchQuery:P,navMode:t,crumbRoot:p,crumbSub:D,hasToptabs:u,toggleThemeQuick:S,toggleSidebar:m,openUserMenu:H,closeUserMenu:ue,menuItem:X,handleLogout:q,openBellMenu:A,notifItems:G,notifLoading:ae,notifError:O,toggleBell:K,closeBell:ie,goNotificationCenter:Q,openThemeMenu:Z,themeHues:I,themeHue:j,themeMode:L,hueColor:k,hueName:C,toggleThemeMenu:ce,closeThemeMenu:W,pickThemeMode:y,pickThemeHue:c,openNavModeMenu:N,NAV_MODES:i,navModeLabel:l,toggleNavModeMenu:s,closeNavModeMenu:r,pickNavMode:R,isMobile:g,openSubnavPicker:w,currentSubLabel:o,subnavOptions:x,toggleSubnavPicker:b,closeSubnavPicker:E,pickSubnav:_}}},lm={class:"qc-header-wrap"},om={key:0,class:"non-trading-banner",role:"status"},rm={class:"qc-header"},cm={class:"qc-header-left"},dm=["aria-label"],um={key:0,class:"qc-header-subnav"},vm=["aria-expanded"],mm={class:"qc-subnav-picker-label"},pm={key:0,class:"qc-subnav-picker-menu",role:"menu"},fm=["onClick"],gm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},hm={class:"qc-crumb qc-crumb-root"},ym={class:"qc-crumb qc-crumb-sub"},bm={key:1,class:"qc-crumb qc-crumb-root"},wm={class:"qc-header-center"},km={key:0,class:"qc-search-sublabel"},_m={class:"qc-header-right"},xm={class:"qc-hdr-pop"},Sm=["aria-expanded"],Cm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},qm={key:0,class:"qc-bell-state"},Em={key:1,class:"qc-bell-state"},Mm={key:2,class:"qc-bell-state"},Tm={key:3,class:"qc-bell-list"},Pm={class:"qc-bell-item-title"},Dm={class:"qc-bell-item-meta"},Rm={key:0},zm={class:"qc-bell-item-time"},Am={class:"qc-hdr-pop"},Lm=["aria-expanded"],Im={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Nm={class:"qc-theme-modes"},Om=["onClick"],jm={class:"qc-theme-swatches"},Vm=["title","aria-label","onClick"],Fm={key:0,class:"qc-theme-swatch-check"},Hm={class:"qc-theme-custom-label"},Bm={key:0,class:"qc-navmode-switch"},Km=["aria-label","title","aria-expanded"],Wm={key:0,class:"qc-navmode-menu",role:"menu"},Um=["onClick","onKeydown"],Gm={class:"qc-navmode-item-main"},Ym={class:"qc-user-menu"},Jm=["aria-label","aria-expanded"],Qm={key:0,class:"qc-user-dropdown",role:"menu"},$m={class:"qc-user-dropdown-header"},Xm={class:"qc-user-dropdown-name"},Zm={key:0,class:"qc-user-dropdown-chip"};function ep(a,e,f,t,u,p){var x,b,E,_,M,N,i;const D=Zt("AppIcon"),g=Zt("qc-top-tabs"),d=Zt("el-autocomplete"),w=Zt("el-slider"),o=Rd("click-outside");return me(),be("div",lm,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(me(),be("div",om,[ut(D,{name:"alert-triangle",size:14}),e[15]||(e[15]=Ee("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),Ee("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...l)=>t.dismissBanner&&t.dismissBanner(...l)),"aria-label":"关闭提示"},"×")])):Be("",!0),Ee("header",rm,[Ee("div",cm,[Ee("button",{class:"qc-icon-btn","aria-label":(x=t.state.sidebarCollapsed)!=null&&x.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...l)=>t.toggleSidebar&&t.toggleSidebar(...l))},[ut(D,{name:"menu",size:20})],8,dm),t.isMobile?La((me(),be("div",um,[Ee("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...l)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...l))},[Ee("span",mm,Ke(t.currentSubLabel||"二级"),1),ut(D,{name:"chevron-down",size:14})],8,vm),t.openSubnavPicker?(me(),be("div",pm,[(me(!0),be(vt,null,qt(t.subnavOptions,l=>(me(),be("div",{key:l.key,class:dt(["qc-subnav-picker-item",{"is-active":l.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:s=>t.pickSubnav(l.key)},Ke(l.label),11,fm))),128))])):Be("",!0)])),[[o,t.closeSubnavPicker]]):Be("",!0),t.navMode==="tree"&&!t.isMobile?(me(),be("div",gm,[Ee("span",hm,Ke(t.crumbRoot),1),t.crumbSub?(me(),be(vt,{key:0},[e[16]||(e[16]=Ee("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Ee("span",ym,Ke(t.crumbSub),1)],64)):Be("",!0)])):Be("",!0),t.navMode==="toptab"&&!t.isMobile?(me(),be(vt,{key:2},[t.hasToptabs?(me(),pa(g,{key:0})):(me(),be("span",bm,Ke(t.crumbRoot),1))],64)):Be("",!0)]),Ee("div",wm,[ut(d,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=l=>t.searchQuery=l),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:ma(()=>[ut(D,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ma(()=>[...e[17]||(e[17]=[Ee("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ma(l=>{var s,r,R,P,A;return[Ee("span",null,Ke((s=l==null?void 0:l.item)==null?void 0:s.icon)+" "+Ke(((r=l==null?void 0:l.item)==null?void 0:r.label)||((R=l==null?void 0:l.item)==null?void 0:R.name)),1),(P=l==null?void 0:l.item)!=null&&P.subLabel?(me(),be("span",km,Ke((A=l==null?void 0:l.item)==null?void 0:A.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Ee("div",_m,[La((me(),be("div",xm,[Ee("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...l)=>t.toggleBell&&t.toggleBell(...l))},[ut(D,{name:"bell",size:20})],8,Sm),t.openBellMenu?(me(),be("div",Cm,[e[18]||(e[18]=Ee("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(me(),be("div",qm,"加载中...")):t.notifError?(me(),be("div",Em,"加载失败")):t.notifItems.length?(me(),be("div",Tm,[(me(!0),be(vt,null,qt(t.notifItems,(l,s)=>(me(),be("div",{key:l.id||s,class:dt(["qc-bell-item",{"is-fail":l.ok===0}])},[Ee("div",Pm,Ke(l.title||l.event_type||"事件"),1),Ee("div",Dm,[xa(Ke(l.channel||""),1),l.recipient?(me(),be("span",Rm," · "+Ke(l.recipient),1)):Be("",!0),Ee("span",zm,Ke(l.created_at||""),1)])],2))),128))])):(me(),be("div",Mm,"暂无通知")),Ee("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...l)=>t.goNotificationCenter&&t.goNotificationCenter(...l))},"前往通知中心 →")])):Be("",!0)])),[[o,t.closeBell]]),La((me(),be("div",Am,[Ee("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...l)=>t.toggleThemeMenu&&t.toggleThemeMenu(...l))},[ut(D,{name:"palette",size:20})],8,Lm),t.openThemeMenu?(me(),be("div",Im,[e[19]||(e[19]=Ee("div",{class:"qc-theme-section-label"},"外观模式",-1)),Ee("div",Nm,[(me(),be(vt,null,qt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],l=>Ee("button",{key:l.k,class:dt(["qc-theme-mode",{"is-active":t.themeMode===l.k}]),onClick:s=>t.pickThemeMode(l.k)},Ke(l.n),11,Om)),64))]),e[20]||(e[20]=Ee("div",{class:"qc-theme-section-label"},"主题色",-1)),Ee("div",jm,[(me(!0),be(vt,null,qt(t.themeHues,l=>(me(),be("button",{key:l,class:dt(["qc-theme-swatch",{"is-active":t.themeHue===l}]),style:zd({background:t.hueColor(l)}),title:t.hueName(l),"aria-label":t.hueName(l),onClick:s=>t.pickThemeHue(l)},[t.themeHue===l?(me(),be("span",Fm,"✓")):Be("",!0)],14,Vm))),128))]),ut(w,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Ee("div",Hm,"自定义 "+Ke(t.themeHue)+"°",1)])):Be("",!0)])),[[o,t.closeThemeMenu]]),t.isMobile?Be("",!0):La((me(),be("div",Bm,[Ee("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...l)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...l))},[ut(D,{name:"layers",size:20})],8,Km),t.openNavModeMenu?(me(),be("div",Wm,[(me(!0),be(vt,null,qt(t.NAV_MODES,l=>(me(),be("div",{key:l.value,class:dt(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===l.value}]),role:"menuitem",tabindex:"0",onClick:s=>t.pickNavMode(l.value),onKeydown:[va(Vt(s=>t.pickNavMode(l.value),["prevent"]),["enter"]),va(Vt(s=>t.pickNavMode(l.value),["prevent"]),["space"])]},[Ee("div",Gm,[Ee("span",null,Ke(l.label),1),t.navMode===l.value?(me(),pa(D,{key:0,name:"check",size:14})):Be("",!0)])],42,Um))),128))])):Be("",!0)])),[[o,t.closeNavModeMenu]]),La((me(),be("div",Ym,[Ee("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((b=t.currentUser)==null?void 0:b.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...l)=>t.openUserMenu&&t.openUserMenu(...l))},Ke((((E=t.currentUser)==null?void 0:E.username)||"A").charAt(0).toUpperCase()),9,Jm),t.showUserMenu?(me(),be("div",Qm,[Ee("div",$m,[Ee("span",Xm,Ke((_=t.currentUser)==null?void 0:_.username),1),((M=t.currentUser)==null?void 0:M.role)==="guest"?(me(),be("span",Zm,"访客")):Be("",!0)]),((N=t.currentUser)==null?void 0:N.role)==="admin"?(me(),be("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=l=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=va(Vt(l=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[ut(D,{name:"settings",size:16}),e[21]||(e[21]=xa(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((i=t.currentUser)==null?void 0:i.role)!=="guest"?(me(),be("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=l=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=va(Vt(l=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[ut(D,{name:"lock",size:16}),e[22]||(e[22]=xa(" 修改密码 ",-1))],32)):Be("",!0),e[24]||(e[24]=Ee("div",{class:"qc-user-dropdown-divider"},null,-1)),Ee("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...l)=>t.handleLogout&&t.handleLogout(...l)),onKeydown:e[14]||(e[14]=va(Vt((...l)=>t.handleLogout&&t.handleLogout(...l),["prevent"]),["enter"]))},[ut(D,{name:"log-out",size:16}),e[23]||(e[23]=xa(" 退出登录 ",-1))],32)])):Be("",!0)])),[[o,t.closeUserMenu]])])])])}const tp=Ca(im,[["render",ep]]),ap=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],sp={name:"qc-subnav",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=ot(()=>a.currentPage&&a.currentPage.value||""),f=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),u=Lt({}),p=ot(()=>a.menus&&a.menus.value||[]),D=ot(()=>p.value.find(i=>i.key===e.value)||null),g=ot(()=>D.value&&D.value.subPages||[]),d=ot(()=>a.currentPageName&&a.currentPageName.value||e.value),w=i=>a.subPageNames&&a.subPageNames[i]||i,o=i=>f.value===i;function x(i){a.openTab?a.openTab(e.value,i):a.currentSubPage&&(a.currentSubPage.value=i);try{localStorage.setItem("quant_last_subpage",i)}catch{}}function b(i){a.openTab?a.openTab(e.value,i.key):a.currentSubPage&&(a.currentSubPage.value=i.key);try{localStorage.setItem("quant_last_subpage",i.key)}catch{}}function E(i){u.value[i]=!u.value[i]}const _={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:e,currentSubPage:f,navMode:t,subPages:g,currentMenu:D,collapsedGroups:u,pageTitle:d,subLabel:w,isSubActive:o,goSub:x,goSystemItem:b,toggleGroup:E,SYSTEM_GROUPS:ap,subIcon:(i,l)=>_[i]&&_[i][l]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},np={key:0,class:"qc-subnav-column","aria-label":"二级导航"},ip={class:"qc-subnav-column-header"},lp={class:"qc-subnav-current-label"},op={class:"qc-subnav-column-body"},rp=["onClick"],cp=["href","onClick"],dp={class:"qc-subnav-group-label"},up=["href","onClick"],vp=["href","onClick"];function mp(a,e,f,t,u,p){const D=Zt("AppIcon");return t.navMode==="subnav"?(me(),be("aside",np,[Ee("div",ip,[Ee("span",lp,Ke(t.pageTitle),1)]),Ee("div",op,[t.currentPage==="system"?(me(!0),be(vt,{key:0},qt(t.SYSTEM_GROUPS,g=>(me(),be("div",{key:g.label,class:"qc-subnav-group"},[Ee("div",{class:"qc-subnav-group-label",onClick:d=>t.toggleGroup(g.label)},[Ee("span",null,Ke(g.label),1),ut(D,{name:"chevron-down",size:12,class:dt({"is-open":!t.collapsedGroups[g.label]})},null,8,["class"])],8,rp),t.collapsedGroups[g.label]?Be("",!0):(me(!0),be(vt,{key:0},qt(g.items,d=>(me(),be("a",{key:d.key,class:dt(["qc-subnav-item",{"is-active":t.isSubActive(d.key)}]),href:"#"+d.key,onClick:Vt(w=>t.goSystemItem(d),["prevent"])},[ut(D,{name:d.icon,size:16},null,8,["name"]),Ee("span",null,Ke(d.label),1)],10,cp))),128))]))),128)):t.currentPage==="shortterm"?(me(!0),be(vt,{key:1},qt(t.SHORTTERM_GROUPS,g=>(me(),be("div",{key:g.label,class:"qc-subnav-group"},[Ee("div",dp,[Ee("span",null,Ke(g.label),1)]),(me(!0),be(vt,null,qt(g.items,d=>(me(),be("a",{key:d,class:dt(["qc-subnav-item",{"is-active":t.isSubActive(d)}]),href:"#"+t.currentPage+"/"+d,onClick:Vt(w=>t.goSub(d),["prevent"])},[ut(D,{name:t.subIcon(t.currentPage,d),size:16},null,8,["name"]),Ee("span",null,Ke(t.subLabel(d)),1)],10,up))),128))]))),128)):(me(!0),be(vt,{key:2},qt(t.subPages,g=>(me(),be("a",{key:g,class:dt(["qc-subnav-item",{"is-active":t.isSubActive(g)}]),href:"#"+t.currentPage+"/"+g,onClick:Vt(d=>t.goSub(g),["prevent"])},[ut(D,{name:t.subIcon(t.currentPage,g),size:16},null,8,["name"]),Ee("span",null,Ke(t.subLabel(g)),1)],10,vp))),128))])])):Be("",!0)}const pp=Ca(sp,[["render",mp]]),fp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],gp={name:"qc-mobile-nav",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=Lt(!1),f=Lt(null),t=Lt({}),u=ot(()=>a.menus&&a.menus.value||[]),p=ot(()=>a.currentPage&&a.currentPage.value||""),D={research:"量化投研",platform:"平台管理"},g=["research","platform"];function d(l){return Array.isArray(l.subPages)&&l.subPages.length>0}function w(l){d(l)&&(t.value[l.key]=!t.value[l.key])}function o(l,s){return p.value===l.key&&a.currentSubPage&&a.currentSubPage.value===s}function x(l){return a.subPageNames&&a.subPageNames[l]||l}async function b(l){const s=u.value.find(R=>R.key===l.key),r=s&&s.subPages&&s.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(l.key,r):(a.currentPage.value=l.key,a.currentSubPage&&(a.currentSubPage.value=r)),a.navigateTo&&a.navigateTo(l.key,r)}function E(l,s){e.value=!1;const r=s||l.subPages&&l.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(l.key,r):(a.currentPage.value=l.key,a.currentSubPage&&(a.currentSubPage.value=r)),a.navigateTo&&a.navigateTo(l.key,r)}function _(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function M(){e.value=!1;const l=document.querySelector(".qc-header .qc-icon-btn");l&&l.focus()}function N(l){l.detail&&l.detail.open&&_()}function i(l){e.value&&l.key==="Escape"&&M()}return Ba(()=>{window.addEventListener("qc:drawer",N),document.addEventListener("keydown",i)}),rs(()=>{window.removeEventListener("qc:drawer",N),document.removeEventListener("keydown",i)}),{state:a,TABS:fp,menus:u,currentPage:p,drawerOpen:e,drawerFocusRef:f,drawerExpanded:t,GROUP_LABELS:D,GROUPS:g,hasSub:d,toggleDrawerMenu:w,isDrawerSubActive:o,subLabel:x,goTab:b,goMenu:E,openDrawer:_,closeDrawer:M}}},hp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},yp=["aria-current","onClick"],bp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},wp={class:"qc-drawer-header"},kp={class:"qc-drawer-brand"},_p={class:"qc-drawer-body"},xp={key:0},Sp={class:"qc-nav-group-label"},Cp=["href","aria-current","onClick"],qp={class:"qc-sidebar-label"},Ep=["aria-expanded","onClick"],Mp={key:0,class:"qc-drawer-children"},Tp=["href","onClick"],Pp={class:"qc-drawer-footer"},Dp=["title"];function Rp(a,e,f,t,u,p){var g,d;const D=Zt("AppIcon");return me(),be(vt,null,[Ee("nav",hp,[(me(!0),be(vt,null,qt(t.TABS,w=>(me(),be("button",{key:w.key,class:dt(["qc-mobile-tab",{"is-active":t.currentPage===w.key}]),"aria-current":t.currentPage===w.key?"page":null,onClick:o=>t.goTab(w)},[ut(D,{name:w.icon,size:22},null,8,["name"]),Ee("span",null,Ke(w.label),1)],10,yp))),128))]),(me(),pa(Ad,{to:"body"},[t.drawerOpen?(me(),be("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...w)=>t.closeDrawer&&t.closeDrawer(...w))})):Be("",!0),t.drawerOpen?(me(),be("div",bp,[Ee("div",wp,[Ee("div",kp,[e[4]||(e[4]=Ee("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Ee("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Ee("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Ee("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Ee("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Ee("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Ee("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Ee("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Ee("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Ee("span",null,Ke(t.state.t("login.title")),1)]),Ee("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...w)=>t.closeDrawer&&t.closeDrawer(...w))},[ut(D,{name:"x",size:18})])]),Ee("div",_p,[(me(!0),be(vt,null,qt(t.GROUPS,w=>(me(),be(vt,{key:w},[t.menus.some(o=>o.group===w)?(me(),be("div",xp,[Ee("div",Sp,Ke(t.GROUP_LABELS[w]),1),(me(!0),be(vt,null,qt(t.menus.filter(o=>o.group===w),o=>(me(),be("div",{key:o.key,class:"qc-drawer-menu"},[Ee("div",{class:dt(["qc-drawer-menu-row",{"is-active":t.currentPage===o.key}])},[Ee("a",{class:dt(["qc-sidebar-item",{"is-active":t.currentPage===o.key}]),href:"#"+o.key,"aria-current":t.currentPage===o.key?"page":null,onClick:Vt(x=>t.hasSub(o)?t.toggleDrawerMenu(o):t.goMenu(o),["prevent"])},[ut(D,{name:o.iconName||"",size:18},null,8,["name"]),Ee("span",qp,Ke(o.name),1)],10,Cp),t.hasSub(o)?(me(),be("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[o.key]}]),"aria-expanded":!!t.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:x=>t.toggleDrawerMenu(o)},[ut(D,{name:"chevron-down",size:14})],10,Ep)):Be("",!0)],2),t.drawerExpanded[o.key]?(me(),be("div",Mp,[(me(!0),be(vt,null,qt(o.subPages,x=>(me(),be("a",{key:x,class:dt(["qc-subnav-item",{"is-active":t.isDrawerSubActive(o,x)}]),href:"#"+o.key+"/"+x,onClick:Vt(b=>t.goMenu(o,x),["prevent"])},[Ee("span",null,Ke(t.subLabel(x)),1)],10,Tp))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),Ee("div",Pp,[Ee("button",{class:"qc-icon-btn",title:((g=t.state.currentTheme)==null?void 0:g.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=w=>{var o;return t.state.changeThemeMode&&t.state.changeThemeMode(((o=t.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[ut(D,{name:((d=t.state.currentTheme)==null?void 0:d.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Dp),Ee("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=w=>t.state.handleLogout&&t.state.handleLogout())},[ut(D,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const zp=Ca(gp,[["render",Rp]]),Ap={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:f}){const t=Ta("qcState");function u(o){e("select",o)}function p(o){const x=o.strategy_names||o.strategies||[],b=x.slice(0,3),E=x.length>3?x.length-3:0,_=b.map(M=>({text:M,more:!1}));return E&&_.push({text:"+"+E,more:!0}),_}function D(o){const x=Number(o);return isFinite(x)?x.toFixed(2):"—"}function g(o){const x=Number(o);return isFinite(x)?(x>0?"+":"")+x.toFixed(2)+"%":"—"}function d(o){const x=Number(o.consensus_level);return isFinite(x)?Math.round(x*100):0}function w(o){const x=Number(o&&o.consensus_level);return isFinite(x)&&x>0}return{state:t,slots:f,select:u,displayTags:p,fmtPrice:D,fmtChange:g,pctOf:d,hasConsensus:w}}},Lp={class:"qc-stock-list"},Ip=["data-copy-code","aria-label","onClick","onKeydown"],Np={key:0,class:"qc-stock-rank"},Op={class:"qc-stock-info"},jp={class:"qc-stock-code"},Vp={class:"qc-stock-code-num"},Fp={key:0,class:"qc-stock-status is-new"},Hp={key:1,class:"qc-stock-status is-out"},Bp={class:"qc-stock-name"},Kp={key:0,class:"qc-stock-consensus"},Wp={key:1,class:"qc-stock-tags"},Up={key:2,class:"qc-stock-badge"},Gp={key:3,class:"qc-stock-data"},Yp={class:"qc-stock-price"},Jp={key:4,class:"qc-stock-extra"},Qp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},$p=["data-copy-code","aria-label","onClick","onKeydown"],Xp={key:0,class:"qc-stock-rank"},Zp={class:"qc-stock-info"},ef={class:"qc-stock-code"},tf={class:"qc-stock-code-num"},af={key:0,class:"qc-stock-status is-new"},sf={key:1,class:"qc-stock-status is-out"},nf={class:"qc-stock-name"},lf={key:0,class:"qc-stock-consensus"},of={key:1,class:"qc-stock-tags"},rf={key:2,class:"qc-stock-badge"},cf={key:3,class:"qc-stock-data"},df={class:"qc-stock-price"},uf={key:4,class:"qc-stock-extra"},vf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function mf(a,e,f,t,u,p){const D=Zt("qc-state-panel"),g=Zt("qc-virtual-list");return me(),be("div",Lp,[f.loading?(me(),pa(D,{key:0,type:"loading"})):f.items.length?(me(),be(vt,{key:2},[f.virtual?(me(),pa(g,{key:0,items:f.items,"row-height":f.rowHeight},{default:ma(({item:d,index:w})=>[Ee("div",{class:dt(["qc-stock-row",{"is-active":f.activeCode===d.code}]),"data-copy-code":f.copyCode?d.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(d.name||"")+" "+(d.code||""),onClick:o=>t.select(d),onKeydown:[va(Vt(o=>t.select(d),["prevent"]),["enter"]),va(Vt(o=>t.select(d),["prevent"]),["space"])]},[f.showRank?(me(),be("div",Np,Ke(w+1),1)):Be("",!0),Ee("div",Op,[Ee("div",jp,[Ee("span",Vp,Ke(d.code),1),d.status==="new"?(me(),be("span",Fp,Ke(f.statusText.new),1)):d.status==="out"?(me(),be("span",Hp,Ke(f.statusText.out),1)):Be("",!0)]),Ee("div",Bp,[xa(Ke(d.name)+" ",1),la(a.$slots,"name-suffix",{item:d,index:w})]),f.showConsensus&&t.hasConsensus(d)?(me(),be("span",Kp,Ke(t.pctOf(d))+"% 共识",1)):Be("",!0)]),(d.strategy_names||d.strategies)&&(d.strategy_names||d.strategies).length?(me(),be("div",Wp,[(me(!0),be(vt,null,qt(t.displayTags(d),o=>(me(),be("span",{key:o.text,class:dt(["qc-stock-tag",{"is-more":o.more}])},Ke(o.text),3))),128))])):Be("",!0),f.showConsensus?(me(),be("span",Up,Ke(d.strategy_count||0)+" 策略",1)):Be("",!0),f.showPrice&&d.price!=null?(me(),be("div",Gp,[Ee("span",Yp,Ke(t.fmtPrice(d.price)),1),Ee("span",{class:dt(["qc-stock-change",d.change_pct>0?"is-up":d.change_pct<0?"is-down":""])},Ke(t.fmtChange(d.change_pct)),3)])):Be("",!0),t.slots.extra?(me(),be("div",Jp,[la(a.$slots,"extra",{item:d,index:w})])):Be("",!0),t.slots.actions?(me(),be("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Vt(()=>{},["stop"]))},[la(a.$slots,"actions",{item:d,index:w})])):Be("",!0),t.slots.footer?(me(),be("div",Qp,[la(a.$slots,"footer",{item:d,index:w})])):Be("",!0)],42,Ip)]),_:3},8,["items","row-height"])):(me(!0),be(vt,{key:1},qt(f.items,(d,w)=>(me(),be("div",{key:d.code,class:dt(["qc-stock-row",{"is-active":f.activeCode===d.code}]),"data-copy-code":f.copyCode?d.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(d.name||"")+" "+(d.code||""),onClick:o=>t.select(d),onKeydown:[va(Vt(o=>t.select(d),["prevent"]),["enter"]),va(Vt(o=>t.select(d),["prevent"]),["space"])]},[f.showRank?(me(),be("div",Xp,Ke(w+1),1)):Be("",!0),Ee("div",Zp,[Ee("div",ef,[Ee("span",tf,Ke(d.code),1),d.status==="new"?(me(),be("span",af,Ke(f.statusText.new),1)):d.status==="out"?(me(),be("span",sf,Ke(f.statusText.out),1)):Be("",!0)]),Ee("div",nf,[xa(Ke(d.name)+" ",1),la(a.$slots,"name-suffix",{item:d,index:w})]),f.showConsensus&&t.hasConsensus(d)?(me(),be("span",lf,Ke(t.pctOf(d))+"% 共识",1)):Be("",!0)]),(d.strategy_names||d.strategies)&&(d.strategy_names||d.strategies).length?(me(),be("div",of,[(me(!0),be(vt,null,qt(t.displayTags(d),o=>(me(),be("span",{key:o.text,class:dt(["qc-stock-tag",{"is-more":o.more}])},Ke(o.text),3))),128))])):Be("",!0),f.showConsensus?(me(),be("span",rf,Ke(d.strategy_count||0)+" 策略",1)):Be("",!0),f.showPrice&&d.price!=null?(me(),be("div",cf,[Ee("span",df,Ke(t.fmtPrice(d.price)),1),Ee("span",{class:dt(["qc-stock-change",d.change_pct>0?"is-up":d.change_pct<0?"is-down":""])},Ke(t.fmtChange(d.change_pct)),3)])):Be("",!0),t.slots.extra?(me(),be("div",uf,[la(a.$slots,"extra",{item:d,index:w})])):Be("",!0),t.slots.actions?(me(),be("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Vt(()=>{},["stop"]))},[la(a.$slots,"actions",{item:d,index:w})])):Be("",!0),t.slots.footer?(me(),be("div",vf,[la(a.$slots,"footer",{item:d,index:w})])):Be("",!0)],42,$p))),128))],64)):(me(),pa(D,{key:1,type:"empty",title:f.emptyText},null,8,["title"]))])}const pf=Ca(Ap,[["render",mf]]),ff={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},gf={key:0,class:"split-divider","data-split-resize":""};function hf(a,e,f,t,u,p){return me(),be("div",{class:dt(["detail-split-wrap",[f.rootClass,{"detail-split":f.enabled}]]),"data-split-root":""},[Ee("div",{class:dt(["detail-split-list",[f.listClass,{"w-100":!f.enabled}]])},[la(a.$slots,"list")],2),f.enabled?(me(),be("div",gf)):Be("",!0),f.enabled?(me(),be("div",{key:1,class:dt(["detail-split-pane",f.paneClass])},[la(a.$slots,"pane")],2)):Be("",!0)],2)}const yf=Ca(ff,[["render",hf]]),cn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},bf=200,wf={name:"qc-top-tabs",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=ot(()=>a.currentPage&&a.currentPage.value||""),f=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ot(()=>a.menus&&a.menus.value||[]),u=ot(()=>{const s=t.value.find(r=>r.key===e.value);return s&&s.subPages||[]}),p=ot(()=>u.value.map(s=>({key:s,label:a.subPageNames&&a.subPageNames[s]||s,icon:cn[e.value]&&cn[e.value][s]||"circle-dot"}))),D=Lt(null),g=Lt(!1),d=Lt(!1),w=Lt(!1);let o=null,x=null;function b(){const s=D.value;s&&(d.value=s.scrollLeft>2,w.value=s.scrollLeft<s.scrollWidth-s.clientWidth-2)}function E(){const s=D.value;s&&(g.value=s.scrollWidth>s.clientWidth+2,b())}function _(s){const r=D.value;r&&r.scrollBy({left:s*bf,behavior:"smooth"})}function M(s){a.openTab?a.openTab(e.value,s):a.currentSubPage&&(a.currentSubPage.value=s)}function N(s){M(s),Id(()=>{const r=D.value;if(!r)return;const R=r.querySelector('[data-tab-key="'+s+'"]');R&&R.scrollIntoView({block:"nearest",inline:"nearest"})})}const i=ot(()=>{if(!g.value)return[];const s=D.value;if(!s)return[];const r=s.getBoundingClientRect(),R=new Set;return s.querySelectorAll(".qc-top-tab").forEach(P=>{const A=P.getBoundingClientRect();A.left>=r.left-2&&A.left<r.right-24&&R.add(P.getAttribute("data-tab-key"))}),p.value.filter(P=>!R.has(P.key))});function l(s,r){s.key==="ArrowLeft"?(s.preventDefault(),_(-1)):s.key==="ArrowRight"?(s.preventDefault(),_(1)):(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),M(r.key))}return Ba(()=>{E(),o=new ResizeObserver(()=>{clearTimeout(x),x=setTimeout(E,100)}),D.value&&o.observe(D.value),window.addEventListener("resize",E)}),Ld(()=>{o&&o.disconnect(),window.removeEventListener("resize",E),clearTimeout(x)}),{state:a,tabs:p,currentSubPage:f,go:M,scrollRef:D,hasOverflow:g,canScrollLeft:d,canScrollRight:w,scrollByStep:_,scrollToTab:N,hiddenTabs:i,onTabKeydown:l,updateScrollState:b}}},kf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},_f=["disabled"],xf=["data-tab-key","aria-selected","title","onClick","onKeydown"],Sf={class:"qc-top-tab-label"},Cf=["disabled"];function qf(a,e,f,t,u,p){const D=Zt("AppIcon"),g=Zt("el-dropdown-item"),d=Zt("el-dropdown-menu"),w=Zt("el-dropdown");return t.tabs.length?(me(),be("div",kf,[t.hasOverflow?(me(),be("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=o=>t.scrollByStep(-1))},"‹",8,_f)):Be("",!0),Ee("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...o)=>t.updateScrollState&&t.updateScrollState(...o))},[(me(!0),be(vt,null,qt(t.tabs,o=>(me(),be("div",{key:o.key,"data-tab-key":o.key,class:dt(["qc-top-tab",{"is-active":t.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===o.key?"true":"false",title:o.label,onClick:x=>t.go(o.key),onKeydown:x=>t.onTabKeydown(x,o)},[ut(D,{name:o.icon,size:14},null,8,["name"]),Ee("span",Sf,Ke(o.label),1)],42,xf))),128))],544),t.hasOverflow?(me(),be("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=o=>t.scrollByStep(1))},"›",8,Cf)):Be("",!0),t.hasOverflow&&t.hiddenTabs.length?(me(),pa(w,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:ma(()=>[ut(d,null,{default:ma(()=>[(me(!0),be(vt,null,qt(t.hiddenTabs,o=>(me(),pa(g,{key:o.key,command:o.key,class:dt({"is-active":t.currentSubPage===o.key})},{default:ma(()=>[ut(D,{name:o.icon,size:14},null,8,["name"]),xa(" "+Ke(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ma(()=>[e[3]||(e[3]=Ee("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const Ef=Ca(wf,[["render",qf]]);(function(){const{ref:a,computed:e,inject:f}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=f("qcState");if(!t)return{};const u=a(!1),p=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),D=()=>{p.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},g=e(()=>t.marketData&&t.marketData.value||{}),d=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:g,bannerDismissed:p,dismissBanner:D,goMerrill:d,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:u,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(w,o){const x="sub."+w.key+"."+o,b=t.t(x);if(b!==x)return b;const E="sub."+o,_=t.t(E);return _!==E&&_?_:t.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:f,computed:t}=Vue,u=f(0),p=f(0),D=f(!1),g=t(()=>{const A={day:"date",week:"week",month:"month",year:"year"},G=e.currentView&&e.currentView.value||"day";return A[G]||"date"}),d={day:"日",week:"周",month:"月",year:"年"};function w(A){return e.t&&e.t("view."+A)||d[A]||A}function o(A){e.switchView?e.switchView(A):e.currentView&&(e.currentView.value=A)}let x=null;function b(A){const G=A.touches&&A.touches[0];G&&(u.value=G.clientX,p.value=G.clientY)}async function E(){if(!D.value){D.value=!0;try{await e.refreshCalendarData()}catch{}x&&clearTimeout(x),x=setTimeout(()=>{D.value=!1},500)}}function _(A){if(!(window.innerWidth<=768))return;const G=A.changedTouches&&A.changedTouches[0];if(!G)return;const ae=window.__quantModules&&window.__quantModules.gestures||{};if((typeof ae.judgePullToRefresh=="function"?ae.judgePullToRefresh(p.value,G.clientY):G.clientY-p.value>=60)&&(window.scrollY||0)<=0){A.stopPropagation(),E();return}if(e.currentSubPage.value==="pool")return;const T=G.clientX-u.value,B=G.clientY-p.value;Math.abs(T)>50&&Math.abs(T)>Math.abs(B)*1.2&&(e.navigateDate(T<0?1:-1),A.stopPropagation())}const M=f(!1),N=f(!1),i=f(""),l=f(null),s=f([]);function r(A){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[A]||A}async function R(){if(e.selectedDate.value){M.value=!0,N.value=!0,i.value="",l.value=null,s.value=[];try{const A=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),G=await A.json();if(!A.ok)throw new Error(G.detail||"HTTP "+A.status);l.value=G;const ae=G&&G.comparison||{},O=[];for(const T of Object.keys(ae)){if(T==="all_intersection")continue;const B=ae[T]||{},K=T.split("_vs_");O.push({label:r(K[0])+" ↔ "+r(K[1]),interCount:B.intersection_count||0,inter:(B.intersection||[]).join(", "),onlyS1Count:B.only_s1_count||0,onlyS1:(B.only_s1||[]).join(", "),onlyS2Count:B.only_s2_count||0,onlyS2:(B.only_s2||[]).join(", ")})}s.value=O}catch(A){i.value=String(A&&A.message?A.message:A)}finally{N.value=!1}}}let P="";return Vue.watch(()=>{const A=e.stockPool,G=A&&A.value||[];return{n:G.length,first:G[0]&&G[0].code,split:!!e.detailSplitEnabled.value}},(A,G)=>{if(!A.split||!A.first||A.n===0)return;const ae=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,O=(e.stockPool.value||[]).some(T=>T.code===ae);if(!ae||!O){if(P===A.first&&ae&&O===!1&&A.n>1)return;P=A.first,e.showStockDetail&&e.showStockDetail(A.first)}},{immediate:!0}),{...e,calType:g,pullRefreshing:D,onCalTouchStart:b,onCalTouchEnd:_,viewLabel:w,switchViewLocal:o,compareVisible:M,compareLoading:N,compareError:i,compareData:l,comparePairs:s,openStrategyCompare:R}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const e=a("qcState"),f=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let u=0;const p=t(()=>{var v;return((v=e.merrillData)==null?void 0:v.value)||{}}),D=t(()=>{var v;return((v=e.marketData)==null?void 0:v.value)||{}}),g=t(()=>{var v;return((v=e.dashboardData)==null?void 0:v.value)||{}}),d=t(()=>{var v;return((v=e.healthMetrics)==null?void 0:v.value)||[]}),w=t(()=>{var v;return((v=e.filteredConsensusRank)==null?void 0:v.value)||[]}),o=t(()=>{const v={};for(const $ of w.value)$.code&&$.name&&(v[$.code]=$.name);return v}),x={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function b(v){return x[v]||v}const E=t(()=>D.value.date||g.value.latest_date||"-"),_=t(()=>{const v=D.value;return!v||Object.keys(v).length===0?"数据加载中...":v.is_trading_day&&v.in_trading_hours?"● 交易中":v.is_trading_day?"已收盘":"○ 非交易日"}),M=t(()=>{const v=p.value.next_stage_prediction;return v&&v.next_stage_name&&v.transition_probability>.2?`→${v.next_stage_name} ${(v.transition_probability*100).toFixed(2)}%`:""}),N=t(()=>{const v=[],$=g.value.pool_changes||{},le=$.new_count||0;if(le>0){const Qe=$.new_stock_names||{},Oe=($.new_stocks||[]).map(rt=>Qe[rt]||o.value[rt]||rt).slice(0,4).join("、");v.push({icon:"sparkles",level:"new",text:`今日新入池 ${le} 只${Oe?" · "+Oe:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Qe of d.value.filter(Oe=>Oe.degraded))v.push({icon:"alert-triangle",level:"warn",text:`数据源 ${b(Qe.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const Te=p.value.timing;Te&&Te.progress_percent&&Te.progress_percent>100?v.push({icon:"clock",level:"warn",text:`美林「${p.value.name}」已超期 ${Te.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):Te&&Te.maturity&&p.value.name&&v.push({icon:"clock",level:"info",text:`美林「${p.value.name}」阶段成熟度 ${Te.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ve=D.value;return Ve&&Ve.is_trading_day===!1&&Ve.date&&v.push({icon:"calendar",level:"info",text:`${Ve.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),v}),i=t(()=>{const v=[],$=p.value.name||"",le=p.value.timing||{},Te=["复苏","成长","过热"],Ve=["滞胀","衰退"];Te.some(ct=>$.includes(ct))&&v.push({kind:"opportunity",source:"美林",text:$+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ve.some(ct=>$.includes(ct))&&v.push({kind:"risk",source:"美林",text:$+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),le.progress_percent&&le.progress_percent>100&&v.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Qe=g.value.pool_changes||{},Oe=(Qe.new_count||0)-(Qe.out_count||0);Oe>=3?v.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Oe,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):Oe<=-3&&v.push({kind:"risk",source:"池变动",text:"净出池 "+Oe,action:()=>{e.currentSubPage.value="consensus"}});const rt=D.value.market_sentiment,nt=rt&&rt.text||"";(nt.includes("乐观")||nt.includes("积极")||nt.includes("亢奋"))&&v.push({kind:"opportunity",source:"情绪",text:nt,action:()=>{e.currentSubPage.value="market"}}),(nt.includes("悲观")||nt.includes("恐慌")||nt.includes("低迷"))&&v.push({kind:"risk",source:"情绪",text:nt,action:()=>{e.currentSubPage.value="market"}});for(const ct of d.value.filter(Ot=>Ot.degraded))v.push({kind:"risk",source:"数据",text:b(ct.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return v}),l=t(()=>{var v;return((v=e.merrillTimeline)==null?void 0:v.value)||e.merrillTimeline||{cycles:[]}}),s=t(()=>{var v;return((v=e.timelineLoading)==null?void 0:v.value)||!1}),r=Vue.ref(null),R=Vue.ref(!1),P=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function A(v){const $=v&&v.currentTarget,le=document.querySelector(".tl-click-pop");if(!$||!le)return;const Te=$.getBoundingClientRect(),Ve=le.offsetWidth||340,Qe=le.offsetHeight||220,Oe=10,rt=$.closest(".merrill-timeline-block"),nt=rt?rt.getBoundingClientRect():Te,ct=Te.left-nt.left,Ot=Te.top-nt.top,Et=Te.width,z=Te.height,fe=nt.width,Le=nt.height;let Me=null;ct+Et+Oe+Ve<=fe?Me=ct+Et+Oe:ct-Oe-Ve>=0?Me=ct-Oe-Ve:Me=Math.max(8,Math.min(ct,fe-Ve-8));const ze=Ot+z/2-Qe/2,He=Math.max(8,Math.min(ze,Le-Qe-8));P.top=He,P.left=Me,P.right=null,P.bottom=null}const G=Vue.computed(function(){const v={};return P.top!=null&&(v.top=P.top+"px"),P.left!=null&&(v.left=P.left+"px"),P.right!=null&&(v.right=P.right+"px"),v});function ae(v,$){let le=null;const Te=l.value&&l.value.cycles||[];for(const Ve of Te){const Qe=(Ve.stages||[]).find(Oe=>Oe.stage===v&&Oe.is_current);if(Qe){le=Qe;break}}if(!le)for(const Ve of Te){const Qe=(Ve.stages||[]).find(Oe=>Oe.stage===v);if(Qe){le=Qe;break}}le&&(r.value=le,R.value=!0,Vue.nextTick(function(){A($)}))}function O(){R.value=!1,r.value=null}function T(v){const $=e.merrillStagesConfig,Te=($&&$.value?$.value:$||{})[v]||{};return Te.color||Te.bg_color||"var(--color-primary)"}function B(v){const $=e.merrillStagesConfig,le=$&&$.value?$.value:$||{};return le[v]&&le[v].name||""}function K(){const v=e.merrillStagesConfig;return v&&v.value?v.value:v||{}}function ie(v){return K()[v]&&K()[v].description||""}function Q(v){const $=v&&v.stages?v.stages:[];if(!$.length)return"";const le=$[0]&&$[0].start?String($[0].start).slice(0,4):"",Te=$[$.length-1]||{},Ve=Te.end?String(Te.end).slice(0,4):Te.start?String(Te.start).slice(0,4):"";return le||Ve?le?le+"–"+Ve:Ve:""}function Z(v){const $=v.start?String(v.start).slice(0,4):"",le=v.end?String(v.end).slice(0,4):$?"至今":"";return $?le?$+"–"+le:$:""}function I(v){const $=v.essence||v.trigger||ie(v.stage)||"";return v.highlight?$?$+" · "+v.highlight:v.highlight:$}function j(){const v=p.value.indicators||{},$=p.value.stage||"",le={recovery:[["PMI",v.pmi],["GDP",v.gdp_growth],["M2",v.m2_growth]],overheat:[["PPI",v.ppi],["CPI",v.cpi],["PMI",v.pmi]],stagflation:[["CPI",v.cpi],["PPI",v.ppi],["GDP",v.gdp_growth]],recession:[["PMI",v.pmi],["GDP",v.gdp_growth],["CPI",v.cpi]]},Te=(le[$]||le.recession).filter(Ve=>Ve[1]!=null&&Ve[1]!==0);return Te.length?"实时 · "+Te.map(Ve=>Ve[0]+" "+Ve[1]+"%").join(" ｜ "):""}function L(v,$,le){const Ve=(K()[v.stage]||{}).color||"var(--color-primary)",Qe=$||[],Oe=Qe.map(Et=>Et.duration_months||0),rt=Oe.reduce((Et,z)=>Et+z,0),nt=rt>0?Oe[le]/rt*100:100/Math.max(1,Qe.length),ct=le===0,Ot=le===Qe.length-1;return{flex:"0 0 "+nt+"%",background:Ve,borderRadius:ct?"6px 0 0 6px":Ot?"0 6px 6px 0":"0"}}function k(v){const $=v.length;if($<=4)return[v];const le=Math.ceil($/2);return[v.slice(0,le),v.slice(le).reverse()]}function C(v){const $=K()[v]||{},le=$.color||"var(--color-primary)";return{background:$.bg_color||"var(--bg-card)",borderColor:le,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const ce=Vue.reactive({}),W=Vue.ref(null);let y=null,c=null,S=null;function m(){if(document.querySelector(".merrill-timeline-block"))try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach(($,le)=>{const Te=$.querySelector(".tl-stage-rows"),Ve=$.querySelector(".tl-row-top"),Qe=$.querySelector(".tl-row-bottom"),Oe=Ve?Array.from(Ve.querySelectorAll(".merrill-stage-chip")):[],rt=Qe?Array.from(Qe.querySelectorAll(".merrill-stage-chip")).reverse():[],nt=Oe.concat(rt);if(!Te||nt.length<2){ce[le]={d:"",vb:"0 0 1 1"};return}const ct=Te.getBoundingClientRect(),Ot=Math.max(1,ct.width),Et=Math.max(1,ct.height),z=Oe.length,fe=nt.map(Me=>{const ze=Me.getBoundingClientRect();return{x:ze.left+ze.width/2-ct.left,y:ze.top+ze.height/2-ct.top}});let Le="M "+fe[0].x.toFixed(1)+" "+fe[0].y.toFixed(1);for(let Me=1;Me<fe.length;Me++){const ze=fe[Me-1],He=fe[Me];Me===z&&(Le+=" L "+ze.x.toFixed(1)+" "+He.y.toFixed(1)),Le+=" L "+He.x.toFixed(1)+" "+He.y.toFixed(1)}ce[le]={d:Le,vb:"0 0 "+Ot.toFixed(1)+" "+Et.toFixed(1)}})}catch(v){console.error("[tl] buildTlPaths error",v)}}function H(v){return ce[v]||{d:"",vb:"0 0 1 1"}}function ue(v){W.value=v}function X(){W.value=null}const q=Vue.ref([]);function U(v){return q.value.indexOf(v)!==-1}function re(v){const $=q.value.slice(),le=$.indexOf(v);le!==-1?$.splice(le,1):$.push(v),q.value=$,Vue.nextTick(function(){m&&m()})}function pe(){const v=document.querySelector(".merrill-timeline-block");if(!v)return;const $=v.querySelector(".tl-spine");$?$.scrollIntoView({behavior:"smooth",block:"end"}):v.scrollIntoView({behavior:"smooth",block:"end"})}const de=Vue.computed(function(){const v=K();return["recovery","overheat","stagflation","recession","default"].filter(function(le){return v[le]&&v[le].name}).map(function(le){return{key:le,name:v[le].name,color:v[le].color||"var(--color-primary)"}})});function Y(v){c&&clearTimeout(c),c=setTimeout(()=>{c=null,Vue.nextTick(m)},v||120)}Vue.onMounted(()=>{document.querySelector(".merrill-timeline-block")&&(Y(0),Y(800),y=()=>Y(150),window.addEventListener("resize",y),S=new MutationObserver(()=>Y(120)),S.observe(document.body||document.documentElement,{childList:!0,subtree:!0}))}),Vue.onBeforeUnmount(()=>{y&&window.removeEventListener("resize",y),c&&clearTimeout(c),S&&(S.disconnect(),S=null)});const oe=Vue.ref([]),De=Vue.ref(null),ke=Vue.ref(!1),_e=Vue.ref(!1),ee=Vue.ref(7),xe=Vue.ref(""),Pe=Vue.ref(""),se=Vue.computed(()=>{const v=new Set;return(oe.value||[]).forEach(function($){$.task&&v.add($.task)}),Array.from(v).sort()}),te=Vue.computed(function(){const v=De.value&&De.value.success_rate||0;return v>=80?"color-success":v>=50?"color-warning":"color-danger"});function he(v,$){return v>0&&$/v>=.8?"status-ok":v>0&&$/v>=.5?"status-warn":"status-bad"}async function Ne(){const v=++u;ke.value=!0,_e.value=!1;try{const $=window.__quantModules&&window.__quantModules.core||{},le=typeof $.authHeaders=="function"?$.authHeaders():{},Te=new URLSearchParams({days:String(ee.value)});xe.value&&Te.set("task",xe.value),Pe.value&&Te.set("status",Pe.value);const[Ve,Qe]=await Promise.all([fetch("/api/system/execution-history?"+Te.toString(),{headers:le}).then(function(Oe){return Oe.json()}),fetch("/api/system/execution-summary?days="+ee.value,{headers:le}).then(function(Oe){return Oe.json()})]);if(v!==u)return;oe.value=Ve&&Ve.data||[],De.value=Qe&&Qe.data||null}catch($){console.error("[execution] 执行数据加载失败:",$),_e.value=!0}finally{v===u&&(ke.value=!1)}}const Ie=window.__quantModules&&window.__quantModules.i18n||{},Ue=typeof Ie.t=="function"?Ie.t:function(v){return String(v)},Ge=Vue.ref([]),ht=Vue.ref(null),st=Vue.ref(null),Rt=Vue.ref(""),Se=Vue.ref([]),we=Vue.ref(!1);let Ae=null;const Re=Vue.computed(function(){const v=st.value&&st.value.dates||[];return v.length&&!Rt.value&&(Rt.value=v[v.length-1].date),v}),Xe=Vue.computed(function(){const v=(Ge.value||[]).find(function(le){return le.enabled});if(!v||v.countdown_seconds==null)return"—";const $=v.countdown_seconds;return Math.floor($/3600)+"h"+String(Math.floor($%3600/60)).padStart(2,"0")+"m"}),Ze=Vue.computed(function(){const v=(Ge.value||[]).find(function($){return $.enabled});if(!v||v.countdown_seconds==null||v.countdown_seconds<0)return"";try{return new Date(Date.now()+v.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),tt=Vue.computed(function(){const v=ht.value;return!v||v.phase==="idle"?Ue("exec.waiting"):v.phase==="running"?Ue("exec.running")+(v.current_sid?" · "+v.current_sid:""):v.phase==="done"?Ue("exec.done"):Ue("exec.failed")}),xt=Vue.computed(function(){return ht.value&&ht.value.phase==="running"?"loader":"check-circle-2"}),St=Vue.computed(function(){const v=st.value&&st.value.dates||[];return v.length?v[v.length-1].date:"—"}),pt=Vue.computed(function(){const v=st.value&&st.value.dates||[],$=v[v.length-1];return $&&$.visible?"color-success":"color-danger"}),zt=Vue.computed(function(){const v=st.value&&st.value.dates||[],$=v[v.length-1];return $?$.day_view_total:"—"});function Kt(v){const $=window.__quantModules&&window.__quantModules.core||{},le=typeof $.authHeaders=="function"?$.authHeaders():{};return fetch(v,{headers:le}).then(function(Te){return Te.json()})}async function Jt(){const v=++u;try{const[$,le,Te]=await Promise.all([Kt("/api/strategies/execution/plan"),Kt("/api/strategies/execution/status"),Kt("/api/strategies/execution/results?days=7")]);if(v!==u)return;Ge.value=$&&$.data&&$.data.plans||[],ht.value=le&&le.data||null,st.value=Te&&Te.data||null,ht.value&&ht.value.phase==="running"?et():yt()}catch($){console.error("[execution-monitor] 监控数据加载失败:",$)}}function et(){yt(),Ae=setInterval(function(){Kt("/api/strategies/execution/status").then(function(v){ht.value=v&&v.data||null,ht.value&&ht.value.phase!=="running"&&(yt(),Jt())}).catch(function(){})},5e3)}function yt(){Ae&&(clearInterval(Ae),Ae=null)}async function Wt(v){if(!v)return;const $=++u;we.value=!0;try{const le=await Kt("/api/strategies/execution/trace/"+encodeURIComponent(v));if($!==u)return;const Te=le&&le.data||null;Se.value=Te&&Te.steps||[]}catch(le){console.error("[execution-trace] 追溯加载失败:",le)}finally{$===u&&(we.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(v){v==="execution"?(Ne(),Jt()):yt()},{immediate:!0}),Vue.watch(function(){const v=e.currentSubPage&&e.currentSubPage.value,$=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],le=e.marketData&&e.marketData.value||{};return{sub:v,split:!!e.detailSplitEnabled.value,top5:$.slice(0,5),rank:$,indices:(le.indices||[]).map(function(Te){return Te})}},function(v,$){if(v.split){if(v.sub==="overview"){if(!v.top5.length)return;const le=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Te=v.top5.some(function(Ve){return Ve.code===le});(!le||!Te)&&e.showStockDetail&&e.showStockDetail(v.top5[0].code)}else if(v.sub==="consensus"){if(!v.rank.length)return;const le=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Te=v.rank.some(function(Ve){return Ve.code===le});(!le||!Te)&&e.showStockDetail&&e.showStockDetail(v.rank[0].code)}else if(v.sub==="market"){if(!v.indices.length)return;const le=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,Te=v.indices.some(function(Ve){return Ve.code===le});(!le||!Te)&&e.showIndexDetail&&e.showIndexDetail(v.indices[0])}}},{immediate:!0});const gt=Vue.ref("band"),Ut=["recession","recovery","overheating","stagflation"];function _t(v){if(!v)return null;const $=String(v).split("-"),le=parseInt($[0],10),Te=parseInt($[1]||"1",10);return isFinite(le)?le+(Te-1)/12:null}function Je(v){const $=Math.floor(v);let le=Math.round((v-$)*12)+1;return le>12&&(le=12),le<1&&(le=1),$+"-"+(le<10?"0"+le:""+le)}function At(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function wt(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function J(v,$){const le=At(),Te=Number(le.avg_duration_months)||0,Ve=Math.min(100,Number(le.progress_percent)||0),Qe=_t(le.current_stage_start_date),Oe=[];let rt=null;if((v||[]).forEach(function(ze){const He=_t(ze.start);rt==null&&He!=null&&(rt=He);const mt=!!(ze.is_current||Qe!=null&&He===Qe&&!ze.duration_months),Mt=ze.name||B(ze.stage);if(mt&&Te>0){const it=Te*Ve/100;it>.5&&Oe.push({stage:ze.stage,name:Mt,months:it,live:!0,start:ze.start});const Bt=Te-it;Bt>.5&&Oe.push({stage:ze.stage,name:"剩余(预测)",months:Bt,ghost:!0,start:ze.start})}else{let it=Number(ze.duration_months)||0;if(!it&&He!=null){const Bt=_t(ze.end);Bt!=null&&Bt>He&&(it=Math.max(1,Math.round((Bt-He)*12)))}it||(it=1),Oe.push({stage:ze.stage,name:Mt,months:it,live:mt,start:ze.start,end:ze.end})}if(mt&&$&&Te>0){const it=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;it&&Oe.push({stage:it.next_stage,name:(it.next_stage_name||"下一阶段")+" (预测)",months:Te,ghost:!0,prob:it.transition_probability})}}),!Oe.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const nt=Oe.reduce(function(ze,He){return ze+He.months},0)||1,ct=rt??0;let Ot=0,Et=0;const z=Oe.map(function(ze){const He=Ot;ze.ghost||(Et+=ze.months),Ot+=ze.months;const mt={stage:ze.stage,name:ze.name,months:Math.round(ze.months),ghost:!!ze.ghost,live:!!ze.live,prob:ze.prob,left:He/nt*100,width:Math.max(2,ze.months/nt*100)},Mt=_t(ze.start),it=_t(ze.end);return mt.start=Mt!=null?Je(Mt):Je(ct+He/12),mt.end=it!=null?Je(it):"",mt.predicted=Mt==null,mt}),fe=Oe[Oe.length-1],Le=Oe.some(function(ze){return ze.ghost}),Me=fe&&fe.end?fe.end:Je(ct+nt/12);return{segs:z,axisStart:Je(ct),axisEnd:Me,nowPct:Le?Et/nt*100:null}}function ge(v){return(v.stages||[]).some(function($){return $.is_current})}const at=Vue.computed(function(){const v=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!v.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let $=null;for(let le=v.length-1;le>=0;le--)if(ge(v[le])){$=v[le];break}return $||($=v[v.length-1]),J($.stages,!0)}),kt=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function($){return!ge($)}).map(function($){return{label:$.label,years:Q($),segs:J($.stages,!1).segs}})}),lt=Ut,It=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function($){const le={};Ut.forEach(function(Ve){le[Ve]=0});let Te=null;return($.stages||[]).forEach(function(Ve){le[Ve.stage]!=null&&(le[Ve.stage]+=Number(Ve.duration_months)||0),Ve.is_current&&(Te=Ve.stage)}),{label:$.label,sum:le,cur:Te}})}),ea=Vue.computed(function(){let v=0;return It.value.forEach(function($){Ut.forEach(function(le){$.sum[le]>v&&(v=$.sum[le])})}),v||1}),aa=Vue.computed(function(){const v=e.merrillSnapshots&&e.merrillSnapshots.value||[],$=[];return v.forEach(function(le){const Te=$[$.length-1];Te&&Te.stage===le.stage?(Te.count++,Te.last=le.timestamp):$.push({stage:le.stage,name:le.stage_name||B(le.stage),count:1,first:le.timestamp,last:le.timestamp})}),$}),na=Vue.computed(function(){return Math.max(100,Math.min(200,Number(At().progress_percent)||0))}),ta=Vue.computed(function(){const v=Number(At().progress_percent)||0;return{width:Math.max(0,Math.min(100,v/na.value*100))+"%",background:v>100?"linear-gradient(90deg, "+wt()+", var(--color-warning))":wt()}}),Qt=Vue.computed(function(){return 100/na.value*100}),Ht=Vue.computed(function(){const v=At().predicted_end;if(!v)return"";if(typeof v=="string")return v;const $=v.optimistic||v.earliest||"",le=v.pessimistic||v.latest||"";return $&&le?$+" ~ "+le:v.base||v.mid||$||le||""});function Nt(v){const $=T(v.stage);return v.ghost?{left:v.left+"%",width:v.width+"%",borderColor:$,color:"var(--text-secondary)",background:"repeating-linear-gradient(45deg, "+$+"44, "+$+"44 5px, transparent 5px, transparent 10px)"}:{left:v.left+"%",width:v.width+"%",background:$}}function Gt(v){const $=[v.name];return v.start&&$.push((v.predicted?"预计起始 ":"起始 ")+v.start+(v.end?" → "+v.end:"")),v.months&&$.push("约 "+v.months+" 个月"),v.ghost&&$.push("预测(尚未发生)"),v.prob!=null&&$.push("转移概率 "+(v.prob*100).toFixed(0)+"%"),$.join(" · ")}function ft(v,$){const le=T(v),Te=Math.max(.28,$/ea.value);return{background:le,opacity:(.45+.55*Te).toFixed(2)}}return{...e,todayText:E,tradingStatus:_,merrillNext:M,todayFocus:N,todaySignals:i,merrillConfigOpen:f,getTimelineStageColor:T,getTimelineStageName:B,getTimelineStageDesc:ie,timelineRows:k,tlChipStyle:C,tlPathFor:H,tlCycleYears:Q,tlGanttStyle:L,tlTipYears:Z,tlTipBrief:I,tlCurrentBrief:j,tlHoverKey:W,setTlHover:ue,clearTlHover:X,collapsedCycles:q,isCycleCollapsed:U,toggleCycle:re,scrollToLatest:pe,tlLegendStages:de,mcHistView:gt,mcCurrentBand:at,mcHistoryBands:kt,mcStageKeys:lt,mcMatrix:It,mcTrailRuns:aa,mcProgStyle:ta,mcAvgMark:Qt,mcEndRange:Ht,mcSegStyle:Nt,mcSegTitle:Gt,mcMxCellStyle:ft,tlClickStage:r,tlClickVisible:R,closeTlClick:O,tlClickPosStyle:G,merrillTimeline:l,timelineLoading:s,showTimelineStage:ae,execHistory:oe,execSummary:De,execLoading:ke,execError:_e,execDays:ee,execTaskFilter:xe,execStatusFilter:Pe,execTaskOptions:se,execSuccessClass:te,loadExecutionData:Ne,execRateClass:he,execPlan:Ge,execStatus:ht,execResults:st,execTraceDate:Rt,execTraceSteps:Se,execTraceLoading:we,execResultsDates:Re,execCountdownText:Xe,execNextRunText:Ze,execPhaseText:tt,execStatusIcon:xt,execLastDate:St,execVisibleClass:pt,execVisibleText:zt,loadExecutionTrace:Wt}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
                                    <div class="status-value" :style="{color: aiStatus === 'ok' ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ aiStatus === 'ok' ? t('system.ok') : t('system.needsConfig') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'feature'" title="点击配置飞书推送">
                                <div class="status-icon"><qc-icon name="message-circle" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.feishuPush') }}</div>
                                    <!-- V6.6: 已配置/未配置 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: feishuConfig.webhook_url ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ feishuConfig.webhook_url ? t('system.configured') : t('system.notConfigured') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'datasource'" title="点击配置数据源">
                                <div class="status-icon"><qc-icon name="bar-chart-3" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.tushare') }}</div>
                                    <!-- V6.6: 已连接/未连接 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: tushareStatus === 'connected' ? 'var(--primary-color)' : 'var(--text-secondary)'}">
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
    `,setup(){const e=a("qcState");if(!e)return{};function f(J){e.currentSubPage.value=J}function t(){xe(),Pe(),se()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,J=>{J==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),J==="datadict"&&S(),J==="health"&&C(),J==="notification"&&t()});const u=e.themeHues||[45,220,0,140,270,320],p=e.themeHueNames||{},D=e.themeMode||Vue.computed(()=>"light"),g=e.themeHue||Vue.ref(45);function d(J){e.changeThemeMode&&e.changeThemeMode(J)}function w(J){e.changeThemeHue&&e.changeThemeHue(parseInt(J,10))}function o(J){return e.hueColor?e.hueColor(J):"hsl("+J+", 75%, 42%)"}function x(J){return e.hueName?e.hueName(J):p[J]||"自定义 "+J}function b(J){e.setNavMode&&e.setNavMode(J)}const E=Vue.ref([]),_=Vue.ref(""),M=Vue.ref("read"),N=Vue.ref(""),i=Vue.ref(!1),l=()=>window.__quantModules&&window.__quantModules.core||{},s=Vue.ref([]),r=Vue.ref(!1);async function R(){r.value=!0;try{const J=await fetch("/api/audit/logs?limit=20",{headers:l().authHeaders?l().authHeaders():{}}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()});s.value=J&&J.logs||[]}catch(J){console.error("[system] 审计加载失败:",J),s.value=[]}finally{r.value=!1}}const P=Vue.ref(!1),A=Vue.ref(null),G=Vue.ref(null),ae=Vue.ref([]),O=Vue.ref(null);function T(J){return J==="completed"?"完成":J==="running"?"运行中":J==="pending"?"排队中":J==="cancelled"?"已取消":"失败"}async function B(){try{const ge=await(await fetch("/api/jobs?limit=20")).json();ge&&ge.success&&(ae.value=ge.data&&ge.data.tasks||[])}catch(J){console.warn("[system] 加载任务队列失败:",J)}}async function K(J){try{await fetch("/api/jobs/"+J+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),B()}catch(ge){console.warn("[system] 取消任务失败:",ge)}}function ie(){B(),O.value=window.setInterval(B,15e3)}const Q=Vue.ref({items:[]}),Z=Vue.ref([]),I=Vue.ref(null),j=Vue.ref({data_sources:[],alerts:[]}),L=function(){return l().authHeaders?l().authHeaders():{}},k=function(J){return fetch(J,{headers:L()}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()})};async function C(){P.value=!0,A.value=null;try{const[J,ge,at,kt]=await Promise.all([k("/api/reliability/freshness"),k("/api/reliability/heal-history?limit=20"),k("/api/reliability/startup-report"),k("/api/reliability/source-health")]);Q.value=J&&J.data||{items:[]},Z.value=ge&&ge.data||[],I.value=at&&at.data||null,j.value=kt||{data_sources:[],alerts:[]},G.value=new Date().toLocaleTimeString()}catch(J){console.warn("[health] 加载失败:",J),A.value="健康数据加载失败: "+(J.message||""),Q.value={items:[]},Z.value=[]}finally{P.value=!1}}const ce=Vue.ref(!1),W=Vue.ref(""),y=Vue.ref(""),c=Vue.ref({fields:[]});async function S(){ce.value=!0,W.value="";try{const J="/api/data-dict"+(y.value?"?category="+y.value:""),ge=await k(J);c.value=ge&&ge.data||{fields:[]}}catch(J){console.warn("[dict] 加载失败:",J),W.value="数据字典加载失败: "+(J.message||""),c.value={fields:[]}}finally{ce.value=!1}}function m(J){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[J]||"var(--text-secondary)"}function H(J){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[J]||J}const ue=Vue.computed(()=>(Q.value?Q.value.items||[]:[]).filter(ge=>ge.status==="stale"||ge.status==="missing").length),X=Vue.ref("rules"),q=Vue.ref([]),U=Vue.ref([]),re=Vue.ref([]),pe=Vue.ref(!1),de=Vue.ref(""),Y=Vue.ref("price_above"),oe=Vue.ref(""),De=Vue.ref(!1),ke=Vue.ref(60),_e=Vue.ref("");function ee(J){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[J]||J}async function xe(){pe.value=!0;try{const J=await(await fetch("/api/alerts/rules")).json();q.value=J&&J.rules||[]}catch(J){_e.value="规则加载失败: "+J}finally{pe.value=!1}}async function Pe(){pe.value=!0;try{const J=await(await fetch("/api/alerts/history?limit=50")).json();U.value=J&&J.history||[]}catch(J){_e.value="历史加载失败: "+J}finally{pe.value=!1}}async function se(){pe.value=!0;try{const J=await(await fetch("/api/alerts/channels")).json(),ge=await(await fetch("/api/alerts/silence")).json();re.value=J&&J.channels||[],De.value=!!(ge&&ge.silenced)}catch(J){_e.value="通道状态加载失败: "+J}finally{pe.value=!1}}function te(J){X.value=J,J==="rules"?xe():J==="history"?Pe():se()}async function he(){const J=de.value.trim();if(!J){_e.value="请填写股票代码";return}pe.value=!0;try{const ge={stock_code:J,rule_type:Y.value};if(Y.value!=="new_pool"){const kt=Number(oe.value);if(isNaN(kt)){_e.value="阈值必须为数值";return}ge.threshold=kt}const at=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ge)})).json();at&&at.rule?(_e.value="规则已添加",de.value="",oe.value="",xe()):_e.value=at&&at.detail||"添加失败"}catch(ge){_e.value="添加失败: "+ge}finally{pe.value=!1}}async function Ne(J){try{await fetch("/api/alerts/rules/"+J.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!J.enabled})}),J.enabled=!J.enabled}catch(ge){_e.value="切换失败: "+ge}}async function Ie(J){try{const ge=await(await fetch("/api/alerts/rules/"+J.id,{method:"DELETE"})).json();ge&&ge.success?(_e.value="规则已删除",xe()):_e.value="删除失败"}catch(ge){_e.value="删除失败: "+ge}}async function Ue(){try{const J=De.value?ke.value:0,ge=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:J})})).json();De.value=!!(ge&&ge.silenced),_e.value=De.value?"已静默":"已恢复推送"}catch(J){_e.value="静默设置失败: "+J}}async function Ge(){De.value=!1,await Ue()}function ht(J){return!!J&&!J.degraded}const st=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ge,at)=>Math.max(ge,at.views||0),0)||1),Rt=()=>l().OPENAPI_ROUTE_BASE||"/api/openapi";async function Se(){i.value=!0;try{const J=await l().apiFetch(Rt()+"/keys");E.value=J&&J.data||[]}catch(J){ElementPlus.ElMessage.error("加载 API Key 失败: "+(J.message||""))}finally{i.value=!1}}async function we(){try{const J=await l().apiFetch(Rt()+"/keys",{method:"POST",body:JSON.stringify({name:_.value||"未命名",role:M.value||"read",expire_days:365})});J&&J.success?(N.value=J.api_key||"",_.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Se()):ElementPlus.ElMessage.error(J&&(J.detail||J.message)||"生成失败")}catch(J){ElementPlus.ElMessage.error("生成失败: "+(J.message||""))}}async function Ae(){if(N.value)try{await navigator.clipboard.writeText(N.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Re(J){try{const ge=await l().apiFetch(Rt()+"/keys/"+J.id,{method:"DELETE"});ge&&ge.success?(ElementPlus.ElMessage.success("Key 已吊销"),N.value&&J.prefix&&N.value.includes(J.prefix)&&(N.value=""),await Se()):ElementPlus.ElMessage.error(ge&&(ge.detail||ge.message)||"吊销失败")}catch(ge){ElementPlus.ElMessage.error("吊销失败: "+(ge.message||""))}}const Xe={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Ze(J){return Xe[J]||J}const tt=computed(()=>{var J;return(((J=e.healthMetrics)==null?void 0:J.value)||[]).map(ge=>({name:Ze(ge.name),source:ge.name,success_rate:ge.success_rate,avg_latency_ms:ge.avg_latency_ms,calls:ge.calls||0,degraded:!!ge.degraded,data_age_hours:ge.data_age_hours!=null?ge.data_age_hours:null,stale:!!ge.stale,last_fetch:ge.last_fetch||ge.last_success||null}))});function xt(J){return J.degraded?"degraded":J.success_rate==null?"unknown":J.success_rate>=90?"ok":J.success_rate>=60?"warn":"bad"}function St(J){return J==null?"":J<1?"刚刚":J<24?Math.round(J)+"小时前":Math.floor(J/24)+"天前"}const pt=e.aiUsage||Vue.ref({}),zt=Vue.computed(()=>{const J=pt.value&&pt.value.by_model||{};return Object.entries(J).map(([ge,at])=>({name:ge,count:at})).sort((ge,at)=>at.count-ge.count)}),Kt=Vue.computed(()=>zt.value.reduce((J,ge)=>Math.max(J,ge.count),0)||1),Jt=Vue.computed(()=>zt.value.reduce((J,ge)=>J+ge.count,0)||1),et=Vue.computed(()=>yt.value.reduce((J,ge)=>Math.max(J,ge.count),0)||0),yt=Vue.computed(()=>{const J=pt.value&&pt.value.by_day||{},ge=[],at=new Date;for(let kt=29;kt>=0;kt--){const lt=new Date(at.getFullYear(),at.getMonth(),at.getDate()-kt),It=lt.getFullYear()+"-"+String(lt.getMonth()+1).padStart(2,"0")+"-"+String(lt.getDate()).padStart(2,"0");ge.push({day:It,count:J[It]||0})}return ge}),Wt=Vue.computed(()=>yt.value.reduce((J,ge)=>Math.max(J,ge.count),0)||1),gt=Vue.computed(()=>{const J=pt.value&&pt.value.by_day||{},ge=new Date,at=ge.getFullYear()+"-"+String(ge.getMonth()+1).padStart(2,"0")+"-"+String(ge.getDate()).padStart(2,"0");return J[at]||0}),Ut=Vue.computed(()=>{const J=pt.value&&pt.value.by_day||{},ge=Object.keys(J).filter(at=>(J[at]||0)>0);return ge.length?ge[ge.length-1]:""});function _t(J){e.analyticsDays&&(e.analyticsDays.value=J),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const Je='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',At='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function wt(J){return J?At:Je}return ie(),{...e,themeHues:u,themeHueNames:p,themeMode:D,themeHue:g,onThemeModeChange:d,setThemeHue:w,hueColor:o,hueName:x,onNavModeChange:b,analyticsMaxViews:st,aiModelRank:zt,aiModelMax:Kt,aiDayTrend:yt,aiDayMax:Wt,todayAiCalls:gt,lastAiCallDay:Ut,aiTotal:Jt,aiDayPeak:et,setAnalyticsDays:_t,viewIcon:wt,openApiKeys:E,openApiKeyName:_,openApiKeyRole:M,newOpenApiKey:N,openApiLoading:i,loadOpenApiKeys:Se,generateOpenApiKey:we,copyOpenApiKey:Ae,revokeOpenApiKey:Re,healthRows:tt,healthClass:xt,fmtAge:St,staleAssetCount:ue,jobQueue:ae,loadJobQueue:B,cancelJob:K,jobStatusText:T,auditLogs:s,auditLoading:r,loadAuditLogs:R,healthLoading:P,healthError:A,healthUpdatedAt:G,freshnessData:Q,healHistory:Z,startupReport:I,sourceHealth:j,refreshHealth:C,statusColor:m,statusLabel:H,sourceOk:ht,dictLoading:ce,dictError:W,dictCategory:y,dictData:c,loadDataDict:S,ncTab:X,ncRules:q,ncHistory:U,ncChannels:re,ncLoading:pe,ncNewCode:de,ncNewType:Y,ncNewThreshold:oe,ncSilence:De,ncSilenceMinutes:ke,ncMsg:_e,ncTypeLabel:ee,onNcTab:te,loadAlertRules:xe,loadAlertHistory:Pe,loadAlertChannels:se,addAlertRule:he,toggleAlertRule:Ne,removeAlertRule:Ie,applySilence:Ue,clearSilence:Ge,goSystemSub:f}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:e,watch:f,onUnmounted:t}=Vue,u=a("qcState");if(!u)return{};function p(){if(!u.hasMoreAiHistory||!u.loadMoreAiHistory||u.currentPage.value!=="ai"||u.currentSubPage.value!=="history")return;const pe=document.documentElement;pe.scrollTop+window.innerHeight>=pe.scrollHeight-300&&u.loadMoreAiHistory()}window.addEventListener("scroll",p,{passive:!0}),t(()=>window.removeEventListener("scroll",p));const D=e(null),g=e(!1),d=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function w(pe){return!pe||pe.total===0||pe.rate===null||pe.rate===void 0?"--":pe.rate.toFixed(2)+"%"}const o=e(5);function x(pe){o.value=pe}function b(pe,de){if(!pe)return"--";if(pe.available===!1)return"— 数据不可达";const Y=pe["hit_n"+de];return Y===!0?"✓ 命中":Y===!1?"✗ 未中":"– 中性/待验证"}async function E(){g.value=!0;try{const de=await(await fetch("/api/ai/track")).json();D.value=de&&de.success?de.data:null}catch(pe){console.warn("[eval-track] 评估命中率加载失败:",pe),D.value=null}finally{g.value=!1}}f(function(){return u.currentPage.value+"/"+u.currentSubPage.value},function(pe){pe==="ai/evaluation-analysis"&&E()},{immediate:!0});const _=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:M,summary:N,trades:i,loading:l,loadError:s,showAddForm:r,addForm:R,addSaving:P,tradeFormVisible:A,tradeForm:G,tradeSaving:ae,portfolioTab:O,equityDays:T,equityLoading:B,equityNote:K,equityHasData:ie,loadPortfolio:Q,addPosition:Z,removePosition:I,openTradeForm:j,submitTrade:L,loadTrades:k,loadEquity:C,fmtSigned:ce,fmtSignedPct:W,signClass:y,riskTab:c,riskLoading:S,riskNote:m,riskHasData:H,riskData:ue,riskMetricList:X,loadRisk:q}=_;f(M,function(pe){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((pe||[]).map(function(de){return{code:de.stock_code,name:de.stock_name||de.stock_code}}))},{deep:!0}),f(function(){return u.currentPage.value+"/"+u.currentSubPage.value},function(pe){pe==="ai/portfolio"?(Q(),k(),C(T?T.value:30),typeof q=="function"&&q()):pe==="ai/overview"&&Q()},{immediate:!0});let U="",re=!1;return f(function(){const pe=u.currentSubPage&&u.currentSubPage.value,de=!!(u.detailSplitEnabled&&u.detailSplitEnabled.value),Y={sub:pe,split:de,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(pe==="history"){const oe=u.aiHistoryView&&u.aiHistoryView.value||"date",De=oe==="date"?u.groupedByDate:oe==="month"?u.groupedByMonth:u.aiHistoryByStock,ke=De&&De.value||{},_e=Object.keys(ke);Y.kind="history",Y.view=oe,Y.key=_e.length?_e[0]:"",Y.first=_e.length&&(ke[_e[0]]||[])[0]||null,Y.expandList=oe==="date"?u.expandedDates:oe==="month"?u.expandedMonths:u.expandedStocks,Y.expandFn=oe==="date"?u.toggleDateExpand:oe==="month"?u.toggleMonthExpand:u.toggleStockExpand}else if(pe==="chat_history"){const oe=u.chatHistoryView&&u.chatHistoryView.value||"date",De=oe==="date"?u.chatGroupedByDate:oe==="month"?u.chatGroupedByMonth:u.chatGroupedByStock,ke=De&&De.value||{},_e=Object.keys(ke);Y.kind="chat",Y.view=oe,Y.key=_e.length?_e[0]:"",Y.first=_e.length&&(ke[_e[0]]||[])[0]||null,Y.expandList=oe==="date"?u.expandedChatDates:oe==="month"?u.expandedChatMonths:u.expandedChatStocks,Y.expandFn=oe==="date"?u.toggleChatDateExpand:oe==="month"?u.toggleChatMonthExpand:u.toggleChatStockExpand}return Y},function(pe){if(!pe.split||!pe.first||!pe.kind)return;const de=pe.sub!==U,Y=u.stockDetail&&u.stockDetail.value,oe=!!(Y&&Y.stock);if(!de&&oe||re)return;U=pe.sub,re=!0;try{pe.key&&pe.expandList&&pe.expandFn&&pe.expandList.value&&pe.expandList.value.indexOf(pe.key)<0&&pe.expandFn(pe.key)}catch{}const De=pe.kind==="history"?u.viewAiResult(pe.first):u.viewChatSession(pe.first);De&&typeof De.finally=="function"?De.finally(function(){re=!1}):re=!1},{immediate:!0}),{...u,trackData:D,trackLoading:g,trackWindows:d,fmtTrackRate:w,loadTrack:E,trackWindow:o,setTrackWindow:x,trackHitText:b,positions:M,summary:N,trades:i,loading:l,loadError:s,showAddForm:r,addForm:R,addSaving:P,tradeFormVisible:A,tradeForm:G,tradeSaving:ae,portfolioTab:O,equityDays:T,equityLoading:B,equityNote:K,equityHasData:ie,loadPortfolio:Q,addPosition:Z,removePosition:I,openTradeForm:j,submitTrade:L,loadTrades:k,loadEquity:C,fmtSigned:ce,fmtSignedPct:W,signClass:y,riskTab:c,riskLoading:S,riskNote:m,riskHasData:H,riskData:ue,riskMetricList:X,loadRisk:q}}}})();(function(){const{ref:a,computed:e,watch:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const u=t("qcState"),p=Vue.ref(!1),D=Vue.ref(!1);let g=0;if(!u)return{};const d=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function w(h){d.value=h;try{localStorage.setItem("quant_strategy_mode",h)}catch{}u.currentSubPage.value="strategy-manage"}const o=a([]),x=a(!1),b=a(!1),E=a(""),_=a(null),M=a(!1),N=a(!1);async function i(){const h=++g;x.value=!0,b.value=!1;try{const n=await fetch("/api/market/reviews?limit=30",{headers:J()}).then(F=>F.json());if(h!==g)return;n&&n.success?o.value=Array.isArray(n.data)?n.data:[]:b.value=!0}catch(n){console.error("[market-review] 复盘列表加载失败:",n),b.value=!0}finally{h===g&&(x.value=!1)}}function l(h){E.value=h,A(h)}function s(h){E.value===h?P():l(h)}function r(h){return h==null||isNaN(Number(h))?"—":(Number(h)>=0?"+":"")+Number(h).toFixed(2)+"%"}function R(h){return h==null||isNaN(Number(h))?"—":Number(h).toFixed(2)}function P(){E.value="",_.value=null,N.value=!1}async function A(h){const n=++g;M.value=!0,N.value=!1,_.value=null;try{const F=h?"/api/market/review?date="+encodeURIComponent(h):"/api/market/review",ne=await fetch(F,{headers:J()}).then(Ce=>Ce.json());if(n!==g)return;ne&&ne.success?_.value=ne.data:N.value=!0}catch(F){console.error("[market-review] 复盘详情加载失败:",F),N.value=!0}finally{n===g&&(M.value=!1)}}function G(h){return h>0?"up":h<0?"down":"flat"}function ae(h){return h==null||isNaN(Number(h))?"—":(h>0?"+":"")+Number(h).toFixed(2)+"%"}function O(h){const n={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(h||{}).map(function(F){const ne=F[0],Ce=F[1],qe=!Ce||Ce==="unavailable"||Ce==="数据不可达";return{label:n[ne]||ne,value:qe?"数据不可达":Ce,unavailable:qe}})}const T=a([]),B=a(!1),K=a(!1),ie=a(""),Q=a(""),Z=a(""),I=a({}),j=a(!1),L=a(""),k=a(""),C=a([]),ce=a([]),W=a(""),y=a(""),c=a(!0),S=a(!0),m=a("20:00"),H=a("default"),ue=a(!1),X=a(""),q=e(function(){return T.value.find(function(h){return h.id===Z.value})||null});async function U(h,n){n=n||{},n.headers=Object.assign({},n.headers||{});const F=localStorage.getItem("quant_token")||"";return F&&(n.headers.Authorization="Bearer "+F),fetch(h,n)}async function re(){const h=++g;B.value=!0,K.value=!1,ie.value="",Q.value="";try{const n=await U("/api/strategies").then(function(ne){return ne.json()});if(h!==g)return;let F=null;Array.isArray(n)?F=n:n&&Array.isArray(n.strategies)?(F=n.strategies,n.warn&&(Q.value=String(n.warn))):(K.value=!0,ie.value=n&&n.detail?String(n.detail):"策略列表加载失败（接口返回异常）"),F!==null&&(T.value=F,T.value.length&&!Z.value&&(Z.value=T.value[0].id,pe()))}catch(n){console.error("[research] 策略列表加载失败:",n),K.value=!0,ie.value="策略列表加载失败: "+(n&&n.message||"网络错误")}finally{h===g&&(B.value=!1)}}function pe(){const h=q.value;h&&(I.value={},h.schema.forEach(function(n){I.value[n.key]=n.default}),k.value="",te(),de(),ke())}async function de(){if(!Z.value){ce.value=[];return}try{const h=await U("/api/strategies/"+Z.value+"/profiles").then(function(n){return n.json()});ce.value=h&&h.data&&h.data.profiles||[],W.value=""}catch(h){console.error("[research] 方案列表加载失败:",h),ce.value=[]}}async function Y(){p.value=!0;const h=(y.value||"").trim();if(!h){window._core&&window._core.showToast("请输入方案名称");return}try{const n=await U("/api/strategies/"+Z.value+"/profiles",{method:"POST",body:JSON.stringify({name:h,params:I.value})}).then(function(F){return F.json()});if(n&&n.detail){window._core&&window._core.showToast(String(n.detail));return}y.value="",await de(),window._core&&window._core.showToast("方案已保存")}catch(n){console.error("[research] 方案保存失败:",n),window._core&&window._core.showToast("方案保存失败")}}function oe(){const h=ce.value.find(function(n){return n.id===W.value});h&&(Object.keys(h.params||{}).forEach(function(n){I.value[n]=h.params[n]}),window._core&&window._core.showToast("已应用方案: "+h.name))}async function De(){if(W.value)try{await U("/api/strategies/"+Z.value+"/profiles/"+W.value,{method:"DELETE"}).then(function(h){return h.json()}),await de(),window._core&&window._core.showToast("方案已删除")}catch(h){console.error("[research] 方案删除失败:",h)}}async function ke(){try{const h=await U("/api/strategies/governance").then(function(ne){return ne.json()}),F=(h&&h.data&&h.data.strategies||{})[Z.value]||{};c.value=F.enabled!==!1,m.value=F.schedule||"20:00",H.value=F.universe==="all"?"all":"default",S.value=F.show_in_calendar!==!1,X.value=F.last_holdings||""}catch(h){console.error("[research] 纳管状态加载失败:",h)}}async function _e(){try{await U("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const h={};return h[Z.value]={enabled:c.value,schedule:m.value,universe:H.value,show_in_calendar:S.value},h}()})}).then(function(h){return h.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(h){console.error("[research] 纳管更新失败:",h)}}async function ee(){if(Z.value){ue.value=!0;try{const h=await U("/api/strategies/"+Z.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:L.value||void 0})}).then(function(n){return n.json()});if(h&&h.detail){window._core&&window._core.showToast(String(h.detail));return}window._core&&window._core.showToast("持仓已生成"),await ke()}catch(h){console.error("[research] run-once 失败:",h),window._core&&window._core.showToast("持仓生成失败")}finally{ue.value=!1}}}function xe(){X.value&&window.open(X.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function Pe(){const h=q.value;if(!h)return;const n=(y.value||"").trim()||h.name+"-副本";se(n,Object.assign({},I.value)),window._core&&window._core.showToast("已复制为副本方案: "+n)}async function se(h,n){try{await U("/api/strategies/"+Z.value+"/profiles",{method:"POST",body:JSON.stringify({name:h,params:n})}).then(function(F){return F.json()}),await de()}catch(F){console.error("[research] 副本保存失败:",F)}}async function te(){const h=++g;if(Z.value)try{const n=await U("/api/strategies/"+Z.value+"/runs?limit=5").then(function(F){return F.json()});if(h!==g)return;C.value=Array.isArray(n)?n:[]}catch{C.value=[]}}async function he(){if(Z.value){j.value=!0;try{const h=await U("/api/strategies/"+Z.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:I.value,as_of:L.value||void 0})}).then(function(n){return n.json()});h&&h.status==="success"?te():alert("运行失败: "+(h.detail||JSON.stringify(h)))}catch(h){console.error("[research] 策略运行失败:",h),alert("运行失败: "+h.message)}finally{j.value=!1}}}async function Ne(){if(Z.value)try{const h=Object.keys(I.value).map(function(F){return encodeURIComponent(F)+"="+encodeURIComponent(I.value[F])}).join("&"),n=await U("/api/strategies/"+Z.value+"/ptrade-code?"+h).then(function(F){return F.json()});n&&n.code?k.value=n.code:alert("导出失败: "+(n.detail||JSON.stringify(n)))}catch(h){console.error("[research] PTrade 导出失败:",h),alert("导出失败: "+h.message)}}function Ie(){if(!k.value)return;const h=document.createElement("textarea");h.value=k.value,document.body.appendChild(h),h.select();try{document.execCommand("copy")}catch{}document.body.removeChild(h)}f(function(){return u.currentPage.value+"/"+u.currentSubPage.value},function(h){h==="research/research-overview"&&(re(),i(),ge(),Qe()),(h==="research/market-review"||h==="shortterm/market-review")&&!E.value&&i(),h==="research/quant-research"&&re(),h==="research/backtest-history"&&Me()},{immediate:!0});const Ue=a("mom20"),Ge=a(!1),ht=a(!1),st=a(null),Rt=a(null),Se=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],we=a('{"top_n":[10,20,30]}'),Ae=a(null),Re=a(""),Xe=a(!1),Ze=a(null);async function tt(){if(!Z.value){ElementPlus.ElMessage.warning("请先选择策略");return}let h;try{h=JSON.parse(we.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!h||Object.keys(h).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Xe.value=!0,Ae.value=null,Re.value="";try{const n=await fetch("/api/strategies/"+Z.value+"/sweep",{method:"POST",headers:J(),body:JSON.stringify({param_grid:h})}).then(function(F){return F.json()});n&&Array.isArray(n.results)?(Ae.value=n.results,Re.value="完成 "+n.count+" 组"+(n.data_degraded?" (数据不可达, 结果降级)":""),Ze.value=n.param_stability||null):Re.value=n&&n.detail||"扫描失败"}catch(n){console.error("[sweep]",n),Re.value="扫描失败: "+n.message}finally{Xe.value=!1}}async function xt(){const h=++g;Ge.value=!0;try{const n=await U("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:Z.value||"multi_factor",factor_key:Ue.value,params:I.value||{}})}).then(function(ne){return ne.json()}),F=n&&n.report?n.report.n1||{}:{};st.value=F}catch(n){console.error("[research] 因子IC分析失败:",n),alert("因子 IC 分析失败: "+n.message)}finally{h===g&&(Ge.value=!1)}}async function St(){const h=++g;ht.value=!0;try{const n=await U("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:Z.value||"multi_factor",factor_key:Ue.value,params:I.value||{}})}).then(function(F){return F.json()});n&&n.layers?Rt.value=n:alert("分层回测: "+(n.message||"无数据"))}catch(n){console.error("[research] 分层回测失败:",n),alert("分层回测失败: "+n.message)}finally{h===g&&(ht.value=!1)}}const pt=a(null),zt=a(!1);async function Kt(){const h=++g;zt.value=!0,pt.value=null;try{const n=await U("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:Z.value||"multi_factor",factor_key:Ue.value,params:I.value||{}})}).then(function(F){return F.json()});n&&n.detail?pt.value=n.detail:alert("因子详情: "+(n.message||"无数据"))}catch(n){console.error("[research] 因子详情失败:",n),alert("因子详情失败: "+n.message)}finally{h===g&&(zt.value=!1)}}const Jt=a([]),et=a(null),yt=a(null),Wt=a(null),gt=a(""),Ut=a(!1),_t=a(!1),Je=a(""),At=a(""),wt=a("");function J(){const h=localStorage.getItem("quant_token")||"";return h?{Authorization:"Bearer "+h,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ge(){const h=++g;try{const n=await fetch("/api/strategies/variants",{headers:J()}).then(function(F){return F.json()});if(h!==g)return;Jt.value=n&&n.data&&n.data.variants||[]}catch(n){console.error("[i3a] 加载 variants 失败:",n)}}async function at(){if(!Z.value){Je.value="请先在量化研究选择母本策略";return}_t.value=!0,Je.value="";try{const h=await fetch("/api/strategies/"+Z.value+"/clone",{method:"POST",headers:J(),body:JSON.stringify({name:(y.value||"").trim()||void 0,params:Object.assign({},I.value)})}).then(function(F){return F.json()});if(h&&h.detail){Je.value=String(h.detail);return}const n=h&&h.data;n&&n.sid&&(et.value=n.sid,Je.value="已复制为新策略: "+n.name,await ge(),await lt(n.sid))}catch(h){console.error("[i3a] 复制失败:",h),Je.value="复制失败: "+h.message}finally{_t.value=!1}}async function kt(h){et.value=h,Je.value="",gt.value="",await lt(h)}async function lt(h){try{const n=await fetch("/api/strategies/"+h+"/selection-spec",{headers:J()}).then(function(F){return F.json()});n&&n.data&&n.data.spec&&(yt.value=Object.assign({},n.data.spec),Wt.value=n.data.fields,At.value=(n.data.spec.industry_scope||[]).join(","),wt.value=(n.data.spec.market_cap_range||[]).join(","))}catch(n){console.error("[i3a] 加载 spec 失败:",n)}}async function It(){if(D.value=!0,!(!et.value||!yt.value))try{yt.value.industry_scope=At.value?At.value.split(/[,，]/).map(function(n){return n.trim()}).filter(Boolean):[],yt.value.market_cap_range=wt.value?wt.value.split(/[,，]/).map(Number).filter(function(n){return!isNaN(n)}):[];const h=await fetch("/api/strategies/"+et.value+"/selection-spec",{method:"PUT",headers:J(),body:JSON.stringify({spec:yt.value})}).then(function(n){return n.json()});h&&h.data&&h.data.spec&&(yt.value=h.data.spec,Je.value="SelectionSpec 已保存")}catch(h){console.error("[i3a] 保存 spec 失败:",h),Je.value="保存失败"}}async function ea(){if(!et.value){Je.value="请先选择/创建微调策略";return}_t.value=!0,Je.value="";try{const h=await fetch("/api/strategies/"+et.value+"/run-once",{method:"POST",headers:J(),body:"{}"}).then(function(n){return n.json()});Je.value=h&&h.detail?String(h.detail):"持仓已生成: "+(h&&h.data&&h.data.symbols||0)+" 只"}catch(h){console.error("[i3a] run-once 失败:",h),Je.value="生成持仓失败"}finally{_t.value=!1}}async function aa(){if(!et.value){Je.value="请先选择/创建微调策略";return}yt.value||await lt(et.value),Ut.value=!0,Je.value="";try{const h=await fetch("/api/strategies/"+et.value+"/ai-trade-code",{method:"POST",headers:J(),body:JSON.stringify({spec:yt.value})}).then(function(n){return n.json()});if(h&&h.detail){Je.value=String(h.detail);return}h&&h.data&&(gt.value=h.data.code||"",h.data.api_errors&&h.data.api_errors.length?Je.value="生成成功(含 API 校验告警 "+h.data.api_errors.length+" 条)":Je.value="AI 交易码已生成, 已通过矩阵内校验")}catch(h){console.error("[i3a] AI 交易码失败:",h),Je.value="AI 生成失败: "+h.message}finally{Ut.value=!1}}function na(){if(gt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(gt.value).then(function(){Je.value="代码已复制"});else{const h=document.createElement("textarea");h.value=gt.value,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),Je.value="代码已复制"}}const ta=a(""),Qt=a(""),Ht=a([]),Nt=a(""),Gt=a(""),ft=a(""),v=a(null),$=a(!1),le=a(!1),Te=a(!1);function Ve(){const h=localStorage.getItem("quant_token")||"";return h?{Authorization:"Bearer "+h,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Qe(){const h=++g;try{const n=await fetch("/api/strategies/custom",{headers:Ve()}).then(function(F){return F.json()});if(h!==g)return;Ht.value=n&&n.data&&n.data.customs||[]}catch(n){console.error("[i3b] 加载自定义策略失败:",n)}}async function Oe(){if(!Qt.value.trim()){ft.value="请描述策略思路";return}$.value=!0,ft.value="";try{const h=await fetch("/api/strategies/custom",{method:"POST",headers:Ve(),body:JSON.stringify({name:ta.value.trim()||"自定义策略",prompt:Qt.value})}).then(function(n){return n.json()});if(h&&h.detail){ft.value=String(h.detail);return}h&&h.data&&(Gt.value=h.data.code||"",ft.value="AI 代写成功: "+h.data.sid+(h.data.api_errors&&h.data.api_errors.length?" (API 告警 "+h.data.api_errors.length+" 条)":" (校验通过)"),await Qe())}catch(h){console.error("[i3b] AI 代写失败:",h),ft.value="AI 代写失败: "+h.message}finally{$.value=!1}}async function rt(){if(Nt.value)try{const h=await fetch("/api/strategies/custom/"+Nt.value+"/code",{headers:Ve()}).then(function(n){return n.json()});h&&h.data&&(Gt.value=h.data.code||"",ft.value="")}catch(h){console.error("[i3b] 读取代码失败:",h)}}async function nt(){if(!Nt.value){ft.value="请先选择自定义策略";return}le.value=!0,ft.value="";try{const h=await fetch("/api/strategies/custom/"+Nt.value+"/backtest",{method:"POST",headers:Ve(),body:"{}"}).then(function(n){return n.json()});if(h&&h.detail){ft.value=String(h.detail);return}h&&h.data&&(v.value=h.data,ft.value="回测完成")}catch(h){console.error("[i3b] 回测失败:",h),ft.value="回测失败: "+h.message}finally{le.value=!1}}async function ct(){if(!Nt.value){ft.value="请先选择自定义策略";return}Te.value=!0,ft.value="";try{const h=await fetch("/api/strategies/custom/"+Nt.value+"/ai-optimize",{method:"POST",headers:Ve(),body:JSON.stringify({backtest:v.value})}).then(function(n){return n.json()});if(h&&h.detail){ft.value=String(h.detail);return}h&&h.data&&(Gt.value=h.data.code||"",ft.value="AI 优化完成"+(h.data.api_errors&&h.data.api_errors.length?" (API 告警 "+h.data.api_errors.length+" 条)":" (校验通过)"))}catch(h){console.error("[i3b] AI 优化失败:",h),ft.value="AI 优化失败: "+h.message}finally{Te.value=!1}}function Ot(){if(Gt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Gt.value).then(function(){ft.value="代码已复制"});else{const h=document.createElement("textarea");h.value=Gt.value,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),ft.value="代码已复制"}}const Et=Vue.ref([]),z=Vue.ref(!1),fe=Vue.ref(!1),Le=Vue.ref(30);async function Me(){const h=++g;z.value=!0,fe.value=!1;try{const n=window.__quantModules&&window.__quantModules.core||{},F=typeof n.authHeaders=="function"?n.authHeaders():{},ne=await fetch("/api/backtest/history?days="+Le.value,{headers:F}).then(function(Ce){return Ce.json()});if(h!==g)return;Et.value=ne&&ne.data||[]}catch(n){console.error("[backtest] 回测历史加载失败:",n),fe.value=!0}finally{h===g&&(z.value=!1)}}const ze=Vue.ref([]),He=Vue.ref(!1),mt=Vue.ref(!1),Mt=Vue.ref(""),it=Vue.ref([]),Bt=Vue.ref(""),qa=Vue.ref([]),ia=Vue.ref(!1),wa=Vue.ref(!1),oa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function Pa(h){return oa[h]||h||"—"}function ra(h){u&&u.navigateTo&&u.navigateTo("shortterm",h)}function Da(){u.currentSubPage.value="research-history",ca()}async function ca(){const h=++g;He.value=!0,mt.value=!1;try{const n=window.__quantModules&&window.__quantModules.core||{},F=typeof n.authHeaders=="function"?n.authHeaders():{},ne=Mt.value?"?type="+encodeURIComponent(Mt.value):"",Ce=await fetch("/api/strategies/research-history"+ne,{headers:F}).then(function(qe){return qe.json()});if(h!==g)return;ze.value=Ce&&Ce.items||[]}catch(n){console.error("[research-history] 加载失败:",n),mt.value=!0}finally{h===g&&(He.value=!1)}}async function $t(){const h=++g;wa.value=!0;try{const n=window.__quantModules&&window.__quantModules.core||{},F=typeof n.authHeaders=="function"?n.authHeaders():{},ne=Mt.value?"?type="+encodeURIComponent(Mt.value):"",Ce=await fetch("/api/strategies/research-history/export"+ne,{headers:F});if(!Ce.ok)throw new Error("HTTP "+Ce.status);const qe=await Ce.blob(),Tt=URL.createObjectURL(qe),$e=document.createElement("a");$e.href=Tt,$e.download="research_history.csv",document.body.appendChild($e),$e.click(),document.body.removeChild($e),URL.revokeObjectURL(Tt)}catch(n){console.error("[research-history] 导出失败:",n)}finally{h===g&&(wa.value=!1)}}function ka(h){const n=it.value.indexOf(h);n>=0?it.value.splice(n,1):it.value.length<10&&it.value.push(h)}function ga(h){Bt.value=Bt.value===h?"":h}async function Ra(){const h=++g,n=it.value;if(!(n.length<2)){ia.value=!0;try{const F=window.__quantModules&&window.__quantModules.core||{},ne=typeof F.authHeaders=="function"?F.authHeaders():{},Ce=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},ne),body:JSON.stringify({ids:n})}).then(function(qe){return qe.json()});qa.value=Ce&&Ce.items||[]}catch(F){console.error("[research-history] 对比失败:",F)}finally{h===g&&(ia.value=!1)}}}async function za(h){try{const n=window.__quantModules&&window.__quantModules.core||{},F=typeof n.authHeaders=="function"?n.authHeaders():{},ne=await fetch("/api/strategies/research-history/"+h,{method:"DELETE",headers:F}).then(function(Ce){return Ce.json()});if(ne&&ne.deleted){ze.value=ze.value.filter(function(qe){return qe.id!==h});const Ce=it.value.indexOf(h);Ce>=0&&it.value.splice(Ce,1)}}catch(n){console.error("[research-history] 删除失败:",n)}}return{...u,strategyManageMode:d,openStrategyManage:w,btHistory:Et,btHistoryLoading:z,btHistoryError:fe,btHistoryDays:Le,loadBtHistory:Me,researchHistory:ze,researchHistoryLoading:He,researchHistoryError:mt,researchHistoryType:Mt,researchHistorySelected:it,researchDetailId:Bt,researchCompareRows:qa,researchCompareLoading:ia,researchTypeLabel:Pa,goShortterm:ra,openResearchHistory:Da,loadResearchHistory:ca,researchExportLoading:wa,exportResearchHistory:$t,toggleResearchSelect:ka,toggleResearchDetail:ga,runResearchCompare:Ra,deleteResearchHistory:za,marketReviews:o,marketReviewLoading:x,marketReviewError:b,selectedReviewDate:E,marketReviewDetail:_,marketReviewDetailLoading:M,marketReviewDetailError:N,loadMarketReviews:i,openMarketReview:l,toggleMarketReviewDate:s,backToMarketReviewList:P,loadMarketReviewDetail:A,marketReviewChgClass:G,marketReviewChgText:ae,marketReviewSrcEntries:O,fmtPct:r,fmtEmotion:R,strategies:T,strategiesLoading:B,strategiesError:K,strategiesErrorText:ie,strategiesWarn:Q,activeStrategyId:Z,activeStrategy:q,paramValues:I,strategyRunning:j,ptradeCode:k,strategyRuns:C,savingProfile:p,variantSaving:D,loadStrategies:re,onStrategyChange:pe,runActiveStrategy:he,exportActivePtradeCode:Ne,copyPtradeCode:Ie,profiles:ce,profileSelect:W,profileName:y,loadProfiles:de,saveProfile:Y,applyProfile:oe,deleteProfile:De,govEnabled:c,govSchedule:m,govUniverse:H,govRunning:ue,lastHoldings:X,loadGov:ke,updateGov:_e,runOnceActive:ee,openLastHoldings:xe,cloneStrategy:Pe,govShowCalendar:S,factorKey:Ue,factorIcLoading:Ge,factorLayerLoading:ht,factorIcReport:st,factorLayerResult:Rt,factorOptions:Se,runFactorIc:xt,runFactorLayer:St,factorDetail:pt,factorDetailLoading:zt,runFactorDetail:Kt,variants:Jt,variantSelected:et,variantSpec:yt,specFields:Wt,aiCode:gt,aiCodeLoading:Ut,variantBusy:_t,variantMsg:Je,loadVariants:ge,cloneNewStrategy:at,selectVariant:kt,loadVariantSpec:lt,saveVariantSpec:It,runVariantOnce:ea,genVariantAiCode:aa,copyVariantCode:na,customName:ta,customPrompt:Qt,customs:Ht,customSelected:Nt,customCode:Gt,customMsg:ft,customBtResult:v,customGenLoading:$,customBtLoading:le,customOptLoading:Te,loadCustoms:Qe,genCustomCode:Oe,loadCustomCode:rt,runCustomBacktest:nt,runCustomOptimize:ct,copyCustomCode:Ot,sweepGrid:we,sweepResult:Ae,sweepMessage:Re,sweepLoading:Xe,sweepStability:Ze,runSweep:tt}}}})();(function(){const{inject:a,ref:e,onMounted:f,computed:t,nextTick:u}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const p=a("qcState");if(!p)return{};const D=p.currentPage,g=p.currentSubPage,d=e(""),w=e(null),o=e(!1),x=e(!1),b=e("数据加载失败"),E=e("请检查服务后重试"),_=e(null),M=e(null),N=e(!1),i=e(!1),l=e("数据加载失败"),s=e("请检查服务后重试"),r=e(null),R=e(1),P=50,A=t(function(){const z=M.value||[];if(z.length<=200)return z;const fe=(R.value-1)*P;return z.slice(fe,fe+P)}),G=e(null),ae=e(!1),O=e(!1),T=e("数据加载失败"),B=e("请检查服务后重试"),K=e([]),ie=e(!1);async function Q(){ie.value=!0;try{const z=await Pe("/api/shortterm/dates/summary",!1);z&&z.success&&(K.value=z.dates||[])}catch{K.value=[]}finally{ie.value=!1}}function Z(z){z!==d.value&&(d.value=z,lt(!0))}const I=e("行业资金流"),j=e("今日"),L=e(""),k=e(null),C=e(1),ce=e(!1),W=e(!1),y=e("数据加载失败"),c=e("请检查服务后重试"),S=e(""),m=e(null),H=e(!1),ue=e(null),X=e(!1),q=e(!1),U=e(""),re=e(""),pe=e(!1);function de(){const z=localStorage.getItem("quant_token")||"";return z?{Authorization:"Bearer "+z,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const Y={},oe=[],De=50,ke=60*1e3;let _e=0,ee=0,xe=0;function Pe(z,fe){const Le=Date.now(),Me=Y[z];return!fe&&Me&&Le-Me.ts<ke?Promise.resolve(Me.data):fetch(z,{headers:de()}).then(function(ze){return ze.json()}).then(function(ze){if(Y[z]||oe.push(z),Y[z]={ts:Date.now(),data:ze},oe.length>De){const He=oe.shift();delete Y[He]}return ze})}async function se(z){const fe=++_e;o.value=!0,x.value=!1;try{const Le="/api/shortterm/pools"+(d.value?"?date="+d.value:""),Me=await Pe(Le,z);if(fe!==_e)return;Me&&Me.success?(w.value=Me,u(ge)):Me&&Me.detail?(x.value=!0,b.value=String(Me.detail),E.value="请先登录后再查看"):(x.value=!0,b.value="数据加载失败",E.value="请检查服务后重试")}catch{if(fe!==_e)return;x.value=!0,b.value="数据加载失败",E.value="请检查服务后重试"}finally{fe===_e&&(o.value=!1)}}async function te(z){const fe=++_e;N.value=!0,i.value=!1;try{const Le="/api/shortterm/lhb"+(d.value?"?date="+d.value:""),Me=await Pe(Le,z);if(fe!==_e)return;Me&&Me.success?(M.value=Array.isArray(Me.rows)?Me.rows:null,r.value=Me.available===!1&&Me.reason||null,R.value=1):Me&&Me.detail?(i.value=!0,l.value=String(Me.detail),s.value="请先登录后再查看"):(i.value=!0,l.value="数据加载失败",s.value="请检查服务后重试")}catch{if(fe!==_e)return;i.value=!0,l.value="数据加载失败",s.value="请检查服务后重试"}finally{fe===_e&&(N.value=!1)}}const he=t(function(){const z=w.value&&w.value.ladder&&w.value.ladder.tiers;return!z||!Object.keys(z).length?"—":Object.keys(z).sort(function(fe,Le){return fe-Le}).map(function(fe){return fe+"板:"+z[fe]}).join(" ")}),Ne=t(function(){const z=w.value&&w.value.zt||[];return _.value?z.filter(function(fe){return fe.boards===_.value}):z});function Ie(){_.value=null}const Ue=t(function(){const z=G.value&&G.value.emotion&&G.value.emotion.money_effect;return!z||!z.available?"—":z.source==="settled"?"定稿记录":z.source==="realtime"?z.partial?"实时(样本不全)":"实时":"—"}),Ge=t(function(){const z=G.value&&G.value.emotion&&G.value.emotion.promotion&&G.value.emotion.promotion.tiers&&G.value.emotion.promotion.tiers["1进2"];return z?z.rate:null}),ht=t(function(){const z=G.value&&G.value.emotion&&G.value.emotion.sentiment_cycle;return z&&z.available&&z.current_score!=null?z.current_score.toFixed(2):"—"}),st=t(function(){const z=G.value&&G.value.emotion&&G.value.emotion.sentiment_cycle;return!z||!z.available?"—":(z.trend||"—")+(z.day_n!=null?" · 距低谷"+z.day_n+"天":"")});t(function(){const z=G.value&&G.value.emotion;if(!z)return"";const fe=[];for(const Le of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Me=z[Le];Me&&Me.available===!1&&Me.reason&&fe.push(String(Me.reason).replace(/^[[^]]*]s*/,""))}return fe.join("；")}),t(function(){const z=G.value&&G.value.facts;if(!z)return"";const fe=[];for(const Le of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Me=z[Le];Me&&Me.available===!1&&Me.reason&&fe.push(String(Me.reason).replace(/^[[^]]*]s*/,""))}return fe.join("；")});function Rt(z){return z==null||isNaN(z)?"—":(z*100).toFixed(0)+"%"}function Se(z,fe){return z==null?"—":(typeof z=="number"?Math.round(z*100)/100:z)+(fe||"")}function we(z){return"tag-chip mr-4"}function Ae(z){return z==null?"":z>0?"is-rise":z<0?"is-fall":""}function Re(z){return z==="机构"?"is-institution":z==="游资"?"is-hotmoney":z==="主力"?"is-main":""}const Xe=t(function(){const z=G.value&&G.value.session_status;if(!z)return"—";const fe=G.value.date;return fe===z.latest_session&&z.settled?"已收盘":fe===z.today&&z.is_trade_day&&!z.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Ze=t(function(){const z=G.value&&G.value.session_status;if(!z)return"";const fe=G.value.date;return fe===z.latest_session&&z.settled?"is-institution":fe===z.today&&z.is_trade_day&&!z.settled?"is-main":""});function tt(z){z&&z.ts_code&&p&&p.showStockDetail&&p.showStockDetail(z.ts_code)}const xt=t(function(){return(M.value||[]).filter(function(z){return(z.tags||[]).indexOf("机构")>=0}).reduce(function(z,fe){return z+(fe.net_buy||0)},0)}),St=t(function(){return(M.value||[]).filter(function(z){return(z.tags||[]).indexOf("游资")>=0}).length}),pt=t(function(){const z=(k.value||[]).filter(function(fe){return fe.main_net_inflow!=null});return z.length?z.reduce(function(fe,Le){return fe.main_net_inflow>=Le.main_net_inflow?fe:Le}):null}),zt=t(function(){const z=pt.value;return z?z.name:"—"}),Kt=t(function(){const z=pt.value;return z?z.main_net_inflow:null}),Jt=t(function(){return S.value||"东财"}),et=t(function(){const z=(L.value||"").trim(),fe=k.value||[];return z?fe.filter(function(Le){return Le.name&&String(Le.name).indexOf(z)>=0}):fe});function yt(z){L.value=z||"",p&&p.currentSubPage&&(p.currentSubPage.value="sector")}const Wt=t(function(){const z=et.value;if(z.length<=200)return z;const fe=(C.value-1)*P;return z.slice(fe,fe+P)}),gt=["09:25","09:35","10:00","11:30","14:00","15:00"],Ut=t(function(){const z={};return(ue.value||[]).forEach(function(fe){z[fe.slot]=!0}),z});function _t(z){return Ut.value[z]?"is-done":z===Je.value?"is-current":"is-empty"}const Je=t(function(){const z=new Date,fe=(z.getHours()<10?"0":"")+z.getHours(),Le=(z.getMinutes()<10?"0":"")+z.getMinutes(),Me=fe+":"+Le;for(var ze=0;ze<gt.length;ze++)if(Me===gt[ze])return gt[ze];for(var He=0;He<gt.length-1;He++){var mt=gt[He],Mt=new Date;Mt.setHours(Number(mt.split(":")[0]),Number(mt.split(":")[1]),0,0);var it=new Date(Mt.getTime()+8*6e4);if(z>=Mt&&z<=it)return mt}return""}),At=t(function(){const z=new Date,fe=Je.value;if(fe)return"当前处于快照窗口 "+fe+" (前后 8 分钟) — 可采集";const Le=z.getHours(),Me=z.getMinutes();let ze="";for(let He=0;He<gt.length;He++){const mt=gt[He].split(":");if(Number(mt[0])>Le||Number(mt[0])===Le&&Number(mt[1])>Me){ze=gt[He];break}}return ze?"下一快照时点 "+ze+" — 非窗口期不可采集":"今日快照时点已全部结束"}),wt=e(""),J=e("info");function ge(){const z=w.value&&w.value.ladder&&w.value.ladder.tiers;if(!z||!Object.keys(z).length)return;const fe=window.__quantModules&&window.__quantModules.charts;if(!fe||!fe.renderSimpleChartTo)return;const Le=_.value,Me=fe.renderSimpleChartTo("shorttermLadderChart",function(){const ze=Object.keys(z).sort(function(He,mt){return Number(He)-Number(mt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:ze.map(function(He){return He+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(He){return Le&&Number(ze[He.dataIndex])===Le?"var(--color-accent)":"var(--chart-split)"}},data:ze.map(function(He){return z[He]})}]}},{key:"shortterm-ladder"});Me&&Me.off&&(Me.off("click"),Me.on("click",function(ze){if(!ze||!ze.name)return;const He=parseInt(ze.name,10);isNaN(He)||(_.value=_.value===He?null:He)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ge);function at(z){if(z==null)return"—";const fe=Math.abs(z);return fe>=1e8?(z/1e8).toFixed(2)+"亿":fe>=1e4?(z/1e4).toFixed(0)+"万":z.toFixed(0)}function kt(z){return z==null?"—":(z>=0?"+":"")+z.toFixed(2)+"%"}async function lt(z){const fe=++ee;ae.value=!0,O.value=!1;try{const Le="/api/shortterm/overview"+(d.value?"?date="+d.value:""),Me=await Pe(Le,z);if(fe!==ee)return;Me&&Me.success?G.value=Me:Me&&Me.detail?(O.value=!0,T.value=String(Me.detail),B.value="请先登录后再查看"):(O.value=!0,T.value="数据加载失败",B.value="请检查服务后重试")}catch{if(fe!==ee)return;O.value=!0,T.value="数据加载失败",B.value="请检查服务后重试"}finally{fe===ee&&(ae.value=!1)}}async function It(z){const fe=++_e;ce.value=!0,W.value=!1;try{const Le="/api/shortterm/sector-flow?indicator="+encodeURIComponent(j.value)+"&sector_type="+encodeURIComponent(I.value),Me=await Pe(Le,z);if(fe!==_e)return;Me&&Me.success&&Me.available?(k.value=Me.rows||[],S.value=Me.source||(Me.note?"同花顺":"东财"),C.value=1):Me&&Me.reason?(W.value=!0,y.value="数据加载失败",c.value=String(Me.reason).replace(/^\[[^\]]*\]\s*/,"")):Me&&Me.detail?(W.value=!0,y.value=String(Me.detail),c.value="请先登录后再查看"):(W.value=!0,y.value="数据加载失败",c.value="请检查服务后重试")}catch{if(fe!==_e)return;W.value=!0,y.value="数据加载失败",c.value="请检查服务后重试"}finally{fe===_e&&(ce.value=!1)}}async function ea(z){const fe=++xe;try{const Le="/api/shortterm/review"+(d.value?"?date="+d.value:""),Me=await Pe(Le,z);if(fe!==xe)return;Me&&Me.success&&(m.value=Me.review||null)}catch{}}async function aa(){H.value=!0;try{const z="/api/shortterm/review"+(d.value?"?date="+d.value:""),fe=await fetch(z,{method:"POST",headers:de()}).then(function(Le){return Le.json()});fe&&fe.success&&(m.value=fe,Y[z]={ts:Date.now(),data:fe})}catch{}finally{H.value=!1}}async function na(){const z=U.value.trim();if(z){pe.value=!0,re.value="";try{const Le=await fetch("/api/shortterm/review/chat",{method:"POST",headers:de(),body:JSON.stringify({date:overviewDate.value,question:z})}).then(function(Me){return Me.json()});re.value=Le.answer||"[无回复]"}catch{re.value="[发送失败]"}finally{pe.value=!1}}}async function ta(z){const fe=++_e;X.value=!0;try{const Le="/api/shortterm/intraday"+(d.value?"?date="+d.value:""),Me=await Pe(Le,z);if(fe!==_e)return;Me&&Me.success&&(ue.value=Me.snapshots||[])}catch{}finally{fe===_e&&(X.value=!1)}}async function Qt(){q.value=!0;try{const z="/api/shortterm/intraday/snapshot"+(d.value?"?date="+d.value:""),fe=await fetch(z,{method:"POST",headers:de()}).then(function(Le){return Le.json()});fe&&fe.success?(fe.accepted?(wt.value="已采集 "+fe.slot+" 快照"+(fe.pools_available&&!fe.pools_available.zt?" (池源部分不可用)":""),J.value="ok"):(wt.value="⏱ "+(fe.reason||"非快照时点"),J.value="warn"),ta()):wt.value="采集失败, 请稍后重试"}catch{wt.value="采集失败, 请稍后重试"}finally{q.value=!1}}function Ht(){return Pe("/api/shortterm/latest-session",!1).then(function(z){z&&z.date&&(d.value||(d.value=z.date))}).catch(function(){})}function Nt(){const z=g.value;z==="ztpool"?se():z==="lhb"?te():z==="overview"?(lt(),ea()):z==="sector"?It():z==="intraday"&&ta()}function Gt(){const z=d.value?"?date="+d.value:"";["/api/shortterm/overview"+z,"/api/shortterm/pools"+z,"/api/shortterm/lhb"+z].forEach(function(Le){Pe(Le,!1).catch(function(){})})}function ft(){const z=g.value;z==="ztpool"?se(!0):z==="lhb"?te(!0):z==="overview"?(lt(!0),ea(!0)):z==="sector"?It(!0):z==="intraday"&&ta(!0)}f(function(){Ht(),Nt(),Gt(),nt(),Q()}),Vue.watch(function(){return g.value},function(z){Nt(),z==="overview"&&nt()});const v=window.QuantOnboarding,$=e(!1),le=e(v?v.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),Te=t(function(){return v&&v.shorttermTourSteps()[le.value.stepIndex]||{key:"",title:"",desc:""}}),Ve=t(function(){return v?v.shorttermTourProgress(le.value):{done:0,total:3,pct:0}}),Qe=t(function(){return le.value.stepIndex>=2});function Oe(){if(v){var z=null;try{z=localStorage.getItem("qc_shortterm_tour")}catch{}if(z){var fe=v.parseState(z);fe&&(le.value=fe)}}}function rt(){if(v){var z=JSON.stringify(le.value);try{localStorage.setItem("qc_shortterm_tour",z)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:z}})}).catch(function(){})}catch{}}}function nt(){window.__quantGuideModalsEnabled===!0&&v&&g.value==="overview"&&(Oe(),v.shorttermTourShouldShow(le.value)&&($.value=!0))}function ct(){le.value=v.shorttermTourNext(le.value),rt()}function Ot(){le.value=v.shorttermTourComplete(le.value),rt(),$.value=!1}function Et(){le.value=v.shorttermTourDismiss(le.value),rt(),$.value=!1}return{currentPage:D,currentSubPage:g,shortDate:d,pools:w,poolLoading:o,poolError:x,ztBoardFilter:_,filteredZt:Ne,clearBoardFilter:Ie,lhbRows:M,lhbLoading:N,lhbError:i,lhbReason:r,lhbPageRows:A,lhbPage:R,overview:G,overviewLoading:ae,overviewError:O,dateList:K,dateListLoading:ie,loadDateList:Q,pickDate:Z,sectorType:I,sectorIndicator:j,sectorKeyword:L,sectorRows:k,filteredSectorRows:et,sectorPageRows:Wt,sectorPage:C,sectorLoading:ce,sectorError:W,sectorFlowSource:S,PAGE_SIZE:P,gotoSector:yt,review:m,reviewRunning:H,intradaySnapshots:ue,intradayLoading:X,intradayCollecting:q,intradaySlots:gt,intradayMsg:wt,slotClass:_t,intradayStatus:At,chatQuestion:U,chatAnswer:re,chatLoading:pe,loadPools:se,loadLhb:te,loadOverview:lt,loadSectorFlow:It,loadReview:ea,runReview:aa,sendChat:na,loadIntraday:ta,collectSnapshot:Qt,refreshCurrent:ft,ladderText:he,fmtAmount:at,fmtPct:kt,riseFall:Ae,tagClass:Re,openStock:tt,lhbInstitutionNetBuy:xt,lhbHotMoneyCount:St,sectorTopName:zt,sectorTopInflow:Kt,sectorSource:Jt,moneySource:Ue,promotion1to2:Ge,cycleScore:ht,cycleTrend:st,pct:Rt,fmtCond:Se,verdictClass:we,sessionStatusText:Xe,sessionStatusClass:Ze,shorttermTourVisible:$,shorttermTourState:le,shorttermTourStep:Te,shorttermTourProg:Ve,shorttermTourIsLast:Qe,shorttermTourNext:ct,shorttermTourFinish:Ot,shorttermTourSkip:Et}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(g,d,w,o,x){var b=w>0?w:1,E=typeof x=="number"&&x>=0?x:a,_=Math.max(0,o),M=Math.max(0,g),N=Math.max(0,d),i=Math.max(0,Math.floor(M/b)-E),l=Math.min(_,Math.ceil((M+N)/b)+E);return{startIndex:i,endIndex:l}}function f(g,d){return Math.max(0,g||0)*(d>0?d:0)}function t(g,d,w,o,x){var b=g||[],E=e(d,w,o,b.length,x),_=b.slice(E.startIndex,E.endIndex);return{visible:_,startIndex:E.startIndex,endIndex:E.endIndex,offsetY:E.startIndex*(o>0?o:1),totalHeight:f(b.length,o)}}function u(g,d){if(g){if(g.code!=null)return g.code;if(g.id!=null)return g.id;if(g.ts_code!=null)return g.ts_code}return d}function p(g,d,w){var o=g||[];if(!o.length)return d>0?d:1;for(var x=Math.min(w||50,o.length),b=0,E=0,_=0;_<x;_++){var M=o[_]&&o[_].rowHeight;typeof M=="number"&&M>0&&(b+=M,E++)}return E?b/E:d>0?d:1}function D(g,d,w,o,x){var b=e(g,d,w,o,x),E=Math.max(0,o);return E?(b.endIndex-b.startIndex)/E:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:f,sliceVisible:t,getRowKey:u,estimateDynamicRowHeight:p,renderedRatio:D}});(function(){const{ref:a,computed:e,onMounted:f,onBeforeUnmount:t}=Vue,u=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:u.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(p){const D=a(null),g=a(0),d=a(400),w=e(()=>(u.computeVisibleRange||function(s,r,R,P,A){const G=R>0?R:1,ae=A>=0?A:8,O=Math.max(0,P);return{startIndex:Math.max(0,Math.floor(s/G)-ae),endIndex:Math.min(O,Math.ceil((s+r)/G)+ae)}})(g.value,d.value,p.rowHeight,p.items.length,p.buffer)),o=e(()=>p.items.length*p.rowHeight),x=e(()=>w.value.startIndex),b=e(()=>w.value.endIndex),E=e(()=>p.items.slice(x.value,b.value));function _(){D.value&&(g.value=D.value.scrollTop)}function M(){D.value&&(d.value=D.value.clientHeight||400)}function N(l,s){return u.getRowKey?u.getRowKey(l,s):l&&l.code!=null?l.code:l&&l.id!=null?l.id:s}let i=null;return f(()=>{M(),D.value&&typeof ResizeObserver<"u"&&(i=new ResizeObserver(()=>M()),i.observe(D.value))}),t(()=>{i&&i.disconnect()}),{scrollEl:D,totalHeight:o,startIndex:x,endIndex:b,visibleItems:E,onScroll:_,keyOf:N}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,f=60,t=500,u=10,p=88,D=350;function g(s,r,R,P,A){A=A||{};var G=typeof A.threshold=="number"?A.threshold:a,ae=typeof A.bias=="number"?A.bias:e,O=R-s,T=P-r;return Math.abs(O)<G||Math.abs(O)<Math.abs(T)*ae?"none":O<0?"left":"right"}function d(s,r,R){R=R||{};var P=typeof R.threshold=="number"?R.threshold:f;return r-s>=P}function w(s,r){r=r||{};var R=typeof r.threshold=="number"?r.threshold:t;return s>=R}var o=!1;function x(s,r){return s&&typeof s.closest=="function"?s.closest(r):null}function b(s){if(!s)return"";var r=s.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(r){var R=r.getAttribute&&r.getAttribute("data-copy-code");if(R)return R.trim();var P=(r.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(P)return P[0]}var A=s.getAttribute&&s.getAttribute("data-copy-code");return A?A.trim():""}function E(s){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(s).then(function(){return!0}).catch(function(){return _(s)}):Promise.resolve(_(s))}function _(s){try{var r=document.createElement("textarea");return r.value=s,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),!0}catch{return!1}}function M(s){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(s)}function N(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function i(){var s=null,r=null,R=null;function P(){r&&(r.timer&&clearTimeout(r.timer),r=null)}function A(ie){R={el:ie,until:Date.now()+D}}function G(ie){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(Q){Q!==ie&&Q.classList.remove("swipe-open")}),s&&s.el!==ie&&(s=null)}function ae(ie){var Q=ie.touches&&ie.touches[0];if(Q){var Z=x(ie.target,".swipe-reveal");Z&&(s={el:Z,x:Q.clientX,y:Q.clientY,moved:!1},ie.stopPropagation());var I=x(ie.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");I&&(P(),r={el:I,x:Q.clientX,y:Q.clientY,timer:setTimeout(function(){var j=b(I);r=null,j&&(A(I),E(j).then(function(){N(),M("已复制代码 "+j)}))},t)})}}function O(ie){if(s){var Q=ie.touches&&ie.touches[0];if(Q){var Z=Q.clientX-s.x,I=Q.clientY-s.y;if(Math.abs(Z)>8&&Math.abs(Z)>Math.abs(I)*1.2){ie.cancelable&&ie.preventDefault(),s.moved=!0;var j=s.el.querySelector(".swipe-reveal-main")||s.el,L=Math.max(-p,Math.min(0,Z));j.style.transition="none",j.style.transform="translateX("+L+"px)",ie.stopPropagation()}if(r){var k=Q.clientX-r.x,C=Q.clientY-r.y;(Math.abs(k)>u||Math.abs(C)>u)&&P()}}}}function T(ie){if(P(),!!s){var Q=s.el,Z=ie.changedTouches&&ie.changedTouches[0],I=s.x,j=s.y,L="none";Z&&(L=g(I,j,Z.clientX,Z.clientY));var k=s.moved;s=null;var C=Q.querySelector(".swipe-reveal-main")||Q;C.style.transform="",C.style.transition="",L==="left"?(G(Q),Q.classList.add("swipe-open"),A(Q)):(L==="right"||k)&&Q.classList.remove("swipe-open"),ie.stopPropagation()}}function B(){P(),s=null}function K(ie){if(R&&Date.now()<R.until){var Q=R.el.contains(ie.target)||ie.target===R.el,Z=ie.target.closest&&ie.target.closest(".swipe-reveal-actions");Q&&!Z&&(ie.preventDefault(),ie.stopPropagation(),R=null)}}document.addEventListener("touchstart",ae,!0),document.addEventListener("touchmove",O,!0),document.addEventListener("touchend",T,!0),document.addEventListener("touchcancel",B,!0),document.addEventListener("click",K,!0)}function l(){o||typeof document>"u"||(o=!0,i())}return{judgeSwipe:g,judgePullToRefresh:d,judgeLongPress:w,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:f,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:u,REVEAL_WIDTH:p,initGestures:l,_codeFromRow:b}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function f(p){return a[p]||a.empty}function t(){const p=[];for(const D of e){const g=a[D];g.title||p.push(D+".title"),D!=="loading"&&!g.icon&&p.push(D+".icon"),typeof g.retry!="boolean"&&p.push(D+".retry"),typeof g.skeleton!="boolean"&&p.push(D+".skeleton")}return{ok:p.length===0,errors:p}}const u={VARIANTS:a,KEYS:e,resolve:f,validate:t};typeof window<"u"&&(window.QuantStatePanel=u),typeof je<"u"&&je.exports&&(je.exports=u)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(f){const t=a(()=>typeof e.resolve=="function"?e.resolve(f.type):{}),u=a(()=>f.icon||t.value.icon||""),p=a(()=>f.title||t.value.title||""),D=a(()=>f.desc||t.value.desc||""),g=a(()=>!!t.value.retry),d=a(()=>/^[a-z][a-z0-9-]*$/.test(String(u.value||"")));return{icon:u,title:p,desc:D,retryable:g,isIconName:d}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(s){return String(s||"").trim().toLowerCase()}function e(s,r){if(!s)return!0;const R=s.split(/\s+/).filter(Boolean);if(!R.length)return!0;const P=String(r||"").toLowerCase();return R.every(function(A){return P.indexOf(A)!==-1})}function f(){return{visible:!1,query:"",activeIndex:0}}function t(s,r){return r===void 0&&(r=!s.visible),s.visible=r,r&&(s.query="",s.activeIndex=0),s.visible}function u(s,r,R){const P=a(s);if(!r||!r.length)return[];const A=[];return r.forEach(function(G){const ae=e(P,G.name)||e(P,G.key),O=(G.subPages||[]).filter(function(T){const B=R&&R[T]||T;return e(P,B)||e(P,T)});ae&&A.push({type:"menu",menuKey:G.key,subPage:G.subPages&&G.subPages[0]||"",label:G.name,subLabel:"页面",icon:G.icon||"file-text"}),O.forEach(function(T){A.push({type:"menu",menuKey:G.key,subPage:T,label:R&&R[T]||T,subLabel:G.name,icon:G.icon||"file-text"})})}),A.slice(0,8)}function p(s,r){const R=a(s);return!r||!r.length?[]:r.filter(function(P){return!!(!R||e(R,P.label)||e(R,P.key)||P.keywords&&e(R,P.keywords))}).slice(0,8)}function D(s,r){const R=a(s);return!R||!r||!r.length?[]:r.filter(function(P){return e(R,P.code)||e(R,P.name)}).slice(0,8).map(function(P){return{type:"stock",code:P.code,name:P.name,label:P.name,subLabel:P.code,icon:"trending-up"}})}function g(s,r,R){const P=[],A=[];return R&&R.length&&(P.push({key:"stock",label:"股票",items:R}),A.push.apply(A,R)),s&&s.length&&(P.push({key:"menu",label:"菜单",items:s}),A.push.apply(A,s)),r&&r.length&&(P.push({key:"command",label:"指令",items:r}),A.push.apply(A,r)),{groups:P,flat:A}}function d(s,r,R){if(r<=0)return 0;const P=((s||0)+R)%r;return P<0?r-1:P}function w(s,r,R,P){const A=u(s,r,R).map(function(ae){return{type:"menu",menuKey:ae.menuKey,subPage:ae.subPage,label:ae.label,subLabel:ae.subLabel,icon:ae.icon,iconName:ae.icon,value:ae.icon+" "+ae.label+" · "+ae.subLabel}}),G=p(s,P||[]).map(function(ae){return{type:"command",key:ae.key,label:ae.label,icon:ae.icon,iconName:ae.icon,subLabel:"指令",value:ae.icon+" "+ae.label}});return A.concat(G)}function o(s){return s?s.type==="menu"?{action:"menu",menuKey:s.menuKey,subPage:s.subPage}:s.type==="command"?{action:"command",key:s.key}:s.type==="sector"?{action:"sector",name:s.name}:s.type==="strategy"?{action:"strategy",id:s.id,name:s.name}:s.type==="stock"||s.code&&s.name?{action:"stock",code:s.code,name:s.name}:null:null}const x=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var b={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function E(s){if(!s||typeof s!="string")return null;var r=s.split("+").map(function(A){return A.trim()}).filter(Boolean);if(!r.length)return null;var R=r.pop().toLowerCase();if(!R)return null;var P={ctrl:!1,alt:!1,shift:!1,meta:!1};return r.forEach(function(A){var G=A.toLowerCase();b.ctrl.indexOf(G)!==-1?P.ctrl=!0:b.alt.indexOf(G)!==-1?P.alt=!0:b.shift.indexOf(G)!==-1?P.shift=!0:b.meta.indexOf(G)!==-1&&(P.meta=!0)}),{ctrl:P.ctrl,alt:P.alt,shift:P.shift,meta:P.meta,key:R}}function _(s,r){if(!s||!r)return!1;var R=String(r.key||r.code||"").toLowerCase();return s.key!==R?!1:s.ctrl===!!r.ctrlKey&&s.alt===!!r.altKey&&s.shift===!!r.shiftKey&&s.meta===!!r.metaKey}function M(s){if(!s)return"";var r=[];return s.ctrl&&r.push("Ctrl"),s.alt&&r.push("Alt"),s.shift&&r.push("Shift"),s.meta&&r.push("Meta"),r.push(s.key.toUpperCase()),r.join("+")}function N(){var s={};return{register:function(r){if(!r||!r.key)throw new Error("命令 key 必填");if(s[r.key])throw new Error("命令重复注册: "+r.key);return s[r.key]=Object.assign({},r),r.key},list:function(){return Object.keys(s).map(function(r){return s[r]})},get:function(r){return s[r]||null},remove:function(r){delete s[r]},has:function(r){return!!s[r]},count:function(){return Object.keys(s).length}}}function i(){var s={},r={};return{register:function(R,P,A){var G=E(R);if(!G)throw new Error("无效快捷键: "+R);var ae=M(G);if(s[ae])throw new Error("快捷键冲突: "+R);if(P!=null&&r[P]!==void 0)throw new Error("动作重复绑定: "+P);return s[ae]={combo:R,action:P,description:A||"",parsed:G},r[P]=ae,ae},resolve:function(R){for(var P in s)if(_(s[P].parsed,R))return s[P].action;return null},list:function(){return Object.keys(s).map(function(R){return s[R]})},unregister:function(R){var P=M(E(R));s[P]&&(delete r[s[P].action],delete s[P])},count:function(){return Object.keys(s).length}}}function l(){var s=i();return s.register("Ctrl+K","toggle-palette","打开命令面板"),s.register("F5","refresh","刷新当前页"),s.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),s.register("Ctrl+J","open-ai","打开 AI 问股"),s.register("Ctrl+D","open-today","今日一屏"),s.register("Ctrl+E","batch-eval","批量 AI 评估"),s.register("Ctrl+G","add-portfolio","加入组合"),s.register("Ctrl+H","open-eval-history","打开评估历史"),s.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),s}return{normalize:a,createPaletteState:f,toggleVisible:t,searchMenus:u,searchCommands:p,filterStocksLocal:D,mergeResults:g,moveIndex:d,buildSearchSuggestions:w,dispatchSearchSelection:o,DEFAULT_COMMANDS:x,parseKeyCombo:E,matchShortcut:_,canonicalCombo:M,createCommandRegistry:N,createShortcutRegistry:i,createDefaultShortcuts:l}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof je<"u"&&je.exports?je.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var f=e();typeof je=="object"&&je.exports&&(je.exports=f),a.QuantOnboarding=f})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],e=a.length,f=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=f.length;function u(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function p(){return f.slice()}function D(T){return T<0?0:T>=t?t-1:T}function g(T){return{stepIndex:T.stepIndex,completed:!!T.completed,dismissed:!!T.dismissed,updatedAt:T.updatedAt||0}}function d(T){return g(Object.assign({},T,{stepIndex:D((T.stepIndex||0)+1),updatedAt:Date.now()}))}function w(T){return g(Object.assign({},T,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(T){return g(Object.assign({},T,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function x(T){var B=Math.min(T&&T.stepIndex||0,t);return{done:B,total:t,pct:Math.round(B/t*100)}}function b(T){return!!(T&&!T.completed&&!T.dismissed)}function E(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function _(){return a.slice()}function M(){return e}function N(T){return T<0?0:T>=e?e-1:T}function i(T){return{stepIndex:T.stepIndex,completed:!!T.completed,dismissed:!!T.dismissed,updatedAt:T.updatedAt||0}}function l(T){return i(Object.assign({},T,{stepIndex:N((T.stepIndex||0)+1),updatedAt:Date.now()}))}function s(T){return i(Object.assign({},T,{stepIndex:N((T.stepIndex||0)-1),updatedAt:Date.now()}))}function r(T,B){return i(Object.assign({},T,{stepIndex:N(B),updatedAt:Date.now()}))}function R(T){return i(Object.assign({},T,{completed:!0,updatedAt:Date.now()}))}function P(T){return i(Object.assign({},T,{dismissed:!0,updatedAt:Date.now()}))}function A(T){return!!(T&&T.completed)}function G(T){var B=Math.min(T&&T.stepIndex||0,e);return{done:B,total:e,pct:Math.round(B/e*100)}}function ae(T){var B=T||E();return JSON.stringify({stepIndex:B.stepIndex,completed:!!B.completed,dismissed:!!B.dismissed,updatedAt:B.updatedAt||0})}function O(T){var B=E();if(!T||typeof T!="string")return B;try{var K=JSON.parse(T);if(!K||typeof K!="object")return B;var ie=parseInt(K.stepIndex,10);return isNaN(ie)?B:{stepIndex:N(ie),completed:!!K.completed,dismissed:!!K.dismissed,updatedAt:K.updatedAt||0}}catch{return B}}return{ONBOARDING_STEPS:a,steps:_,stepCount:M,createOnboardingState:E,next:l,prev:s,jumpTo:r,complete:R,dismiss:P,isComplete:A,progress:G,persistState:ae,parseState:O,SHORTTERM_TOUR_STEPS:f,shorttermTourSteps:p,createShorttermTourState:u,shorttermTourNext:d,shorttermTourComplete:w,shorttermTourDismiss:o,shorttermTourProgress:x,shorttermTourShouldShow:b}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:f}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const u=a(!1),p=a(t.createOnboardingState()),D=e(function(){return t.steps()[p.value.stepIndex]}),g=e(function(){return t.progress(p.value)}),d=e(function(){return p.value.stepIndex>=t.stepCount()-1}),w=e(function(){return"onboarding.step."+D.value.key});function o(){const N=t.persistState(p.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:N}})}).then(function(i){return i.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",N)}catch{}})}function x(){p.value=t.next(p.value)}function b(){p.value=t.prev(p.value)}function E(){p.value=t.complete(p.value),o(),u.value=!1}function _(){p.value=t.dismiss(p.value),o(),u.value=!1}function M(){fetch("/api/user_config/preferences").then(function(N){return N.json()}).then(function(N){const i=N&&N.preferences&&N.preferences.onboarding_progress;return i&&(p.value=t.parseState(i)),i}).catch(function(){return null}).then(function(N){if(!N)try{const i=localStorage.getItem("qc_onboarding_progress");i&&(p.value=t.parseState(i))}catch{}!t.isComplete(p.value)&&!p.value.dismissed&&(u.value=!0)})}return f(M),{visible:u,st:p,step:D,prog:g,isLast:d,stepKey:w,next:x,prev:b,finish:E,skip:_}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
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
    `,setup(){function a(e){try{const f=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(f)return f(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:f,nextTick:t,inject:u,onMounted:p}=Vue,D=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const g=u("qcState");if(!g)return{};const d=a(""),w=e({get:()=>g.commandPaletteVisible.value,set:I=>{g.commandPaletteVisible.value=I}}),o=a(0),x=a([]),b=a(null),E=e(()=>{const I=(D.DEFAULT_COMMANDS||[]).map(function(L){return Object.assign({},L)});return Object.keys(g.themes.value||{}).forEach(function(L){const k=g.themes.value[L];I.push({key:"theme:"+L,label:"切换主题 · "+(k.name||L),icon:"palette",keywords:"theme 主题"})}),I});function _(I){return typeof I=="string"&&/^[a-z][a-z0-9-]*$/.test(I)}const M=e(()=>g.menus.value||[]);function N(){const I=window.__quantModules&&window.__quantModules.pinyin;if(!I)return[];const j=[];return(g.watchlist&&g.watchlist.value||[]).forEach(function(L){j.push({code:L.code,name:L.name})}),(g.aiHistory&&g.aiHistory.value||[]).forEach(function(L){L&&L.stock_code&&j.push({code:L.stock_code,name:L.stock_name||L.stock_code})}),j.push.apply(j,I.getExtraStocks()),I.buildStockIndex(j)}function i(I){const j=window.__quantModules&&window.__quantModules.pinyin;return j?j.searchStocksByQuery(I,N()).map(function(L){return{type:"stock",code:L.code,name:L.name,label:L.name,subLabel:L.code,icon:"trending-up"}}):[]}function l(){const I=[],j=window.__quantModules&&window.__quantModules.recent;j&&j.getRecentViewed().slice(0,5).forEach(function(k){I.push({type:"stock",code:k.code,name:k.name||k.code,label:k.name||k.code,subLabel:"最近查看 · "+k.code,icon:"trending-up"})});const L=(g.watchlist&&g.watchlist.value||[]).slice(0,8).map(function(k){return{type:"stock",code:k.code,name:k.name||k.code,label:k.name||k.code,subLabel:"我的自选 · "+k.code,icon:"trending-up"}});return I.concat(L)}const s=e(()=>{const I=d.value;if(!I)return D.mergeResults([],[],l());const j=D.searchMenus(I,M.value,g.subPageNames),L=D.searchCommands(I,E.value),k=x.value;return D.mergeResults(j,L,k)}),r=e(()=>s.value);function R(I){return r.value.flat[o.value]===I}function P(I){o.value=r.value.flat.indexOf(I)}function A(I){return(I.type||"")+":"+(I.code||I.menuKey||I.key||I.label)}let G=null;function ae(){const I=d.value.trim();if(I.length<1){x.value=[];return}G&&clearTimeout(G),G=setTimeout(function(){const j=i(I);x.value=j,o.value=0,g.searchStocks(I,function(L){if(d.value.trim()!==I)return;const k=(L||[]).filter(function(W){return W&&W.code&&W.name}).map(function(W){return{type:"stock",code:W.code,name:W.name,label:W.name,subLabel:W.code,icon:"trending-up"}}),C={},ce=[];j.forEach(function(W){C[W.code]||(C[W.code]=!0,ce.push(W))}),k.forEach(function(W){C[W.code]||(C[W.code]=!0,ce.push(W))}),x.value=ce,o.value=0})},200)}function O(){o.value=D.moveIndex(o.value,r.value.flat.length,1)}function T(){o.value=D.moveIndex(o.value,r.value.flat.length,-1)}function B(){const I=r.value.flat[o.value];I&&K(I)}function K(I){g.commandPaletteVisible.value=!1,I.type==="menu"?g.navigateTo(I.menuKey,I.subPage):I.type==="stock"?g.showStockDetail(I.code,I.name):I.type==="command"&&ie(I.key)}function ie(I){if(I==="refresh"){const j=g.currentPage.value;j==="strategies"?g.loadDashboardData().catch(function(){}):j==="calendar"?g.refreshCalendarData().catch(function(){}):j==="ai"&&g.loadAiHistory().catch(function(){})}else I==="export"?g.exportCSV():I==="batch"?g.showBatchEvaluate.value=!0:I==="ai"?g.openAiFab():I==="sidebar"?g.toggleSidebar():I==="today"?g.navigateTo("strategies","overview"):I==="add-portfolio"?(g.currentPage.value="ai",g.currentSubPage.value="portfolio"):I==="open-system"?g.navigateTo("system","status"):I==="open-shortterm"?g.navigateTo("shortterm","overview"):I==="open-research"?g.navigateTo("research","overview"):I==="open-calendar"?g.navigateTo("calendar",""):I==="refresh-data-source"?g.navigateTo("system","datasource"):I.indexOf("theme:")===0&&g.changeTheme(I.slice(6))}f(w,function(I){I&&(d.value="",x.value=[],o.value=0,t(function(){b.value&&b.value.focus&&b.value.focus()}))}),f(d,ae);function Q(I){I==="toggle-palette"?g.commandPaletteVisible.value=!g.commandPaletteVisible.value:I==="toggle-sidebar"?g.toggleSidebar():I==="open-ai"?g.openAiFab():I==="refresh"?ie("refresh"):I==="open-today"?ie("today"):I==="batch-eval"?ie("batch"):I==="add-portfolio"&&ie("add-portfolio")}function Z(I){if(!D.createDefaultShortcuts||!D.createShortcutRegistry)return;const L=D.createDefaultShortcuts().resolve({key:I.key,ctrlKey:I.ctrlKey,altKey:I.altKey,shiftKey:I.shiftKey,metaKey:I.metaKey});L&&(I.preventDefault(),Q(L))}return p(function(){document.addEventListener("keydown",Z)}),{visible:w,query:d,results:r,inputEl:b,sanitizeHtml:g.sanitizeHtml,isIconName:_,onDown:O,onUp:T,onEnter:B,execute:K,isActive:R,setActive:P,itemKey:A,onGlobalKeydown:Z}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const f=Vue.ref(0);let t=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,u=>{u?(f.value=0,t=setInterval(()=>{f.value++},1e3)):t&&(clearInterval(t),t=null)}),{...e,batchElapsed:f}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const u=a("qcState");if(!u)return{};const p={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},D=e(()=>p[u.aiEvalStage.value]||""),g=e(()=>{const B=u.aiResult&&u.aiResult.value&&u.aiResult.value.result&&u.aiResult.value.result.level;return B?B==="强烈推荐"||B==="推荐"?"var(--el-success)":B==="谨慎推荐"?"var(--el-warning)":B==="中性"||B==="观望"?"var(--text-secondary)":B==="评估失败"||B==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function d(B){const K=document.createElement("textarea");K.value=B,K.style.position="fixed",K.style.opacity="0",document.body.appendChild(K),K.select(),document.execCommand("copy"),document.body.removeChild(K)}async function w(){const B=u.aiResult&&u.aiResult.value;if(!B||!B.result)return;const K=B.result.dimensions||{},ie=Object.entries(K).map(([Z,I])=>`${Z} ${Math.round(I)}分`).join(`
`),Q=`【AI 智能评估】${B.result.level||""} ${B.result.total_score!=null?B.result.total_score:"—"}分
模型：${B.model_used||B.result.provider||"—"}

${B.result.detailed_report||""}

九维度评分：
${ie||"无"}`;try{await navigator.clipboard.writeText(Q),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{d(Q),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=f(!1),x=f(!1),b=f(null),E=f([]),_={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function M(B){return _[B]||"factor-sem-none"}async function N(){const B=u.stockDetail.value&&u.stockDetail.value.stock;if(B){o.value=!0,x.value=!1,E.value=[],b.value=null;try{const K=u.selectedDate.value?`?date=${u.selectedDate.value}`:"",ie=await fetch(`/api/calendar/stock/${B}/factors${K}`).then(j=>j.json()),Q=ie&&Array.isArray(ie.factors)?ie.factors:[],Z=[],I={};Q.forEach(j=>{I[j.category]||(I[j.category]={category:j.category,items:[]},Z.push(I[j.category])),I[j.category].items.push(j)}),E.value=Z,b.value=ie&&ie.summary||null}catch{x.value=!0}finally{o.value=!1}}}t(u.stockDetailTab,B=>{B==="factor"&&u.stockDetail.value&&u.stockDetailVisible.value&&(N(),l())});const i=f(null);async function l(){try{const B=await fetch("/api/market/factor-ic").then(K=>K.json());i.value=B&&B.success&&B.data?B.data:{}}catch{i.value={}}}function s(B){if(!B||!B.n5)return"—";const K=B.n5.icir!=null?"ICIR "+B.n5.icir:"ICIR —";return B.n5.grade+" ("+K+")"}const r=f(!1),R=f(!1),P=f([]),A=f([]);function G(B){if(B==null)return"—";const K=Number(B);return Number.isNaN(K)?"—":Math.abs(K)>=1e8?(K/1e8).toFixed(2)+"亿":Math.abs(K)>=1e4?(K/1e4).toFixed(1)+"万":String(K)}async function ae(){const B=u.stockDetail&&u.stockDetail.value&&u.stockDetail.value.stock;if(B){r.value=!0,R.value=!1;try{const K=await fetch("/api/market/performance/"+encodeURIComponent(B)).then(ie=>ie.json());K&&K.success?(P.value=K.forecast||[],A.value=K.express||[]):R.value=!0}catch{R.value=!0}finally{r.value=!1}}}t(u.stockDetailTab,B=>{B==="performance"&&ae()});const O=f(null);async function T(){const B=u.stockDetail&&u.stockDetail.value&&u.stockDetail.value.stock;if(!B){O.value=null;return}try{const K=await fetch("/api/focus/stock/"+encodeURIComponent(B)+"/pool").then(ie=>ie.json());O.value=K&&K.success&&K.data?K.data:null}catch{O.value=null}}return t(()=>u.stockDetail&&u.stockDetail.value&&u.stockDetail.value.stock,B=>{B&&u.stockDetailVisible.value?T():O.value=null}),t(()=>u.stockDetailVisible.value,B=>{B?T():O.value=null}),{...u,aiStageText:D,levelRingColor:g,copyAiReport:w,factorLoading:o,factorError:x,factorSummary:b,factorGroups:E,factorSemClass:M,loadFactorPanel:N,factorIc:i,loadFactorIc:l,factorIcGrade:s,perfLoading:r,perfError:R,perfForecast:P,perfExpress:A,fmtY:G,loadPerformance:ae,poolInfo:O,loadPoolInfo:T}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(f){const t=e("qcState");if(!t)return{};const u=a(()=>f.type==="history"?t.selectedHistoryIds.value.includes(f.item.id):t.selectedChatIds.value.includes(f.item.id)),p=a(()=>{const _=t.watchlistCodes.value.has(f.item.stock_code);return{icon:"star",isWatched:_,label:_?"取消收藏":"加入收藏"}}),D=a(()=>f.type==="history"?"bot":"message-circle"),g=a(()=>{var _;return f.type==="history"?((_=f.item.result)==null?void 0:_.provider)||"":f.item.first_msg||""}),d=a(()=>{var _,M;return`${((M=(_=f.item.result)==null?void 0:_.dimensions)==null?void 0:M.length)||9}维度分析`}),w=a(()=>{var M,N;const _=f.type==="history"?f.item.evaluate_time:f.item.created_at||"";return _?f.timeFormat==="datetime"?f.type==="history"?`${_.split("T")[0]} ${(_.split("T")[1]||"").split(".")[0]}`:`${_.split("T")[0]} ${((M=_.split("T")[1])==null?void 0:M.substring(0,5))||""}`:f.type==="history"?(_.split("T")[1]||"").split(".")[0]||_:((N=_.split("T")[1])==null?void 0:N.substring(0,5))||"":""});function o(){f.type==="history"?t.toggleSelectHistory(f.item.id):t.toggleSelectChat(f.item.id)}function x(){f.type==="history"?t.viewAiResult(f.item):t.viewChatSession(f.item)}async function b(){try{await ElementPlus.ElMessageBox.confirm(f.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}f.type==="history"?t.deleteSingleHistory(f.item.id):t.deleteChatSession(f.item.id)}function E(_,M){t.toggleWatchlist(_,M)}return{isSelected:u,watchState:p,providerIcon:D,providerText:g,dimsText:d,timeText:w,toggleSelect:o,view:x,remove:b,toggleWatchlist:E,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const u=["买入","持有","观望","减仓","卖出"],p={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},D={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},g=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],d={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},w=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(b){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(b).then(M=>M.json?M.json():M)}function x(){const b=new Date,E=_=>_<10?"0"+_:""+_;return b.getFullYear()+"-"+E(b.getMonth()+1)+"-"+E(b.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const b=t("qcState"),E=a(x()),_=a("after_close"),M=a({rows:[],actions:{},total:0,groups:{}}),N=a({sessions:{},total:0}),i=a(null),l=a(!1),s=a(""),r=a(!1),R=a([]),P=a(""),A=a(null),G={},ae=a({});let O=0;const T=a(null),B=e(function(){const q=M.value&&M.value.groups||{};return Object.keys(q).length?q:M.value&&M.value.rows&&M.value.rows.length?{全部:M.value.rows}:{}}),K=e(function(){const q=T.value;return!q||!q.date||q.date!==E.value?"":"已加载最近一次评估: "+q.date+" · "+(d[q.session]||q.session)}),ie=e(function(){const q=M.value&&M.value.base_date;return q?q===E.value?"评分范围: "+q+" 收盘池 + 自选":"评分范围: "+q+" 收盘池(前一交易日算好) + 自选":""});function Q(q){if(q==null)return"—";const U=Number(q);return U===Math.floor(U)?String(U):U.toFixed(1)}function Z(q){const U=M.value.total||0,re=(M.value.actions||{})[q]||0;if(!U)return"0%";const pe=re/U*100;return pe>0&&pe<4?"4%":pe.toFixed(1)+"%"}function I(q){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[q]||"info"}function j(q){const U=i.value&&i.value.overall&&i.value.overall[q]||null;return!U||U.total===0||U.rate===null||U.rate===void 0?"info":U.rate>=60?"success":U.rate>=40?"warning":"danger"}function L(q){const U=i.value&&i.value.overall&&i.value.overall[q]||null;return!U||U.total===0||U.rate===null||U.rate===void 0?"样本不足":U.rate.toFixed(1)+"% ("+U.total+" 样本)"}function k(){return d[_.value]||_.value}function C(q){const U=R.value.indexOf(q);U>=0?R.value.splice(U,1):R.value.push(q)}function ce(q){if(!q||!q.raw_json)return{};if(G[q.stock_code+q.session+q.trade_date])return G[q.stock_code+q.session+q.trade_date];let U={};try{U=JSON.parse(q.raw_json)||{}}catch{U={}}return G[q.stock_code+q.session+q.trade_date]=U,U}async function W(){try{const q=await o("/api/focus/latest"),U=q&&q.success&&q.data;U&&U.date&&(T.value=U,E.value=U.date,U.session&&(_.value=U.session))}catch(q){console.warn("[focus] 最近一次评估解析失败:",q)}}async function y(){r.value=!0;try{const q=await o("/api/focus/results?date="+E.value+"&session="+_.value);M.value=q&&q.success&&q.data||{rows:[],actions:{},total:0,groups:{}},c((M.value.rows||[]).map(function(U){return U.stock_code}))}catch(q){console.warn("[focus] 结果加载失败:",q),M.value={rows:[],actions:{},total:0,groups:{}}}finally{r.value=!1}}async function c(q){const U=ae.value||{},re=(q||[]).filter(function(Y){return Y&&!U[Y]});if(!re.length)return;const pe=++O,de=re.map(function(Y){return o("/api/focus/stock/"+encodeURIComponent(Y)+"/pool?date="+E.value).then(function(oe){oe&&oe.success&&oe.data?U[Y]=oe.data:U[Y]={stock_code:Y,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){U[Y]={stock_code:Y,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(de)}catch{}pe===O&&(ae.value=Object.assign({},U))}function S(q){const U=b&&b.showStockDetail;if(typeof U=="function"){U(q);return}const pe=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;pe&&pe.info("请从其他页面打开股票详情: "+q)}async function m(){try{const q=await o("/api/focus/history?date="+E.value);N.value=q&&q.success&&q.data||{sessions:{},total:0}}catch(q){console.warn("[focus] 历史加载失败:",q),N.value={sessions:{},total:0}}}async function H(){l.value=!0;try{const q=await o("/api/ai/track");q&&q.success&&q.data?(i.value=q.data,s.value=(q.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):i.value=null}catch(q){console.warn("[focus] 效果块加载失败:",q),i.value=null}finally{l.value=!1}}async function ue(){const q=(P.value||"").trim();if(q){A.value=null;try{const U=await o("/api/focus/stock/"+encodeURIComponent(q));A.value=U&&U.success&&U.data&&U.data.rows||[]}catch(U){console.warn("[focus] 单股历史加载失败:",U),A.value=[]}}}async function X(){await y(),await m(),await H()}return f(async function(){await W(),await X()}),{curDate:E,session:_,results:M,history:N,track:i,trackLoading:l,trackNote:s,detailSplitEnabled:b.detailSplitEnabled,stockDetail:b.stockDetail,loading:r,expanded:R,stockCode:P,stockHistory:A,SESSIONS:g,ACTION_ORDER:u,TRACK_WINDOWS:w,ACTION_DOT:p,TIER_DOT:D,SESSION_LABELS:d,displayGroups:B,latestNote:K,baseNote:ie,sessionLabel:k,fmtScore:Q,tagType:I,rateTagType:j,fmtRate:L,toggle:C,detailOf:ce,loadResults:y,loadHistory:m,loadTrack:H,loadStockHistory:ue,loadAll:X,poolStatus:ae,openStockDetail:S,actionPct:Z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:f}=Vue,{currentView:t,statusFilter:u,dashboardData:p,loadHealthMetrics:D,getLoadDashboardData:g,getLastRefreshTime:d,getFetchPoolSignals:w}=a,o=e(!1),x=e(""),b=new Map,E=e([]),_=e(""),M=e(""),N=e([]),i=e(""),l=window.__quantModules.core||{},s=typeof l.createTtlCache=="function"?l.createTtlCache(15e3):null;let r=0;function R(){const K=Date.now();K-r<5e3||(r=K,ElementPlus.ElMessage.success("有新数据，已更新"))}function P(K,ie,Q,Z){!s||!ie||typeof l.silentRefresh!="function"||l.silentRefresh({cache:s,key:ie,fetchFn:async()=>{const I=await fetch(K);if(!I.ok)throw new Error("HTTP "+I.status);const j=await I.json();return Q?Q(j):j},ttl:s.defaultTtl,apply:Z,onChanged:R,onError:()=>{}})}const A=new Set;async function G(){var K;try{const Q=await(await fetch("/api/dates")).json();E.value=((K=Q.data)==null?void 0:K.dates)||Q.dates||[],E.value.length>0&&(_.value=E.value[E.value.length-1]),M.value=new Date().toLocaleTimeString()}catch(ie){console.error(ie)}}async function ae(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),M.value="刷新中...",b.clear(),await G(),await T(),M.value=new Date().toLocaleTimeString()}catch(K){console.error("数据刷新失败",K)}}function O(){if(!_.value)return;const ie="/api/view/"+(t.value||"day")+"/"+_.value+"?status="+(u.value||"all")+"&format=csv";window.open(ie,"_blank")}async function T(){if(!_.value)return;const K=`${t.value}_${_.value}`;if(A.has(K))return;A.add(K);const ie=`/api/view/${t.value}/${_.value}?status=all`,Q=s&&typeof l.makeCacheKey=="function"?l.makeCacheKey("GET",`/api/view/${t.value}/${_.value}`,{status:"all"}):null,Z=(L,k)=>{N.value=L,i.value=k||"",b.set(K,{stocks:L,note:k||""})},I=L=>{Z(L&&L.stocks||[],L&&L.note||"")};if(b.has(K)){I(b.get(K)),P(ie,Q,L=>L,I),A.delete(K);return}const j=Q&&s?s.get(Q):void 0;if(j!==void 0){I(j),P(ie,Q,L=>L,I),A.delete(K);return}o.value=!0,x.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const k=await(await fetch(ie)).json(),C=k.stocks||[];Z(C,k.note||""),s&&Q&&s.set(Q,{stocks:C,note:k.note||""})}catch{try{const C=await(await fetch(`/api/calendar/${_.value}/consensus`)).json();N.value=(C.consensus||[]).map(ce=>({...ce,code:ce.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}w(),A.delete(K)}async function B(){const K=s&&typeof l.makeCacheKey=="function"?l.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(s){const ie=s.get(K);if(ie!==void 0){p.value=ie,D().catch(()=>{}),P("/api/dashboard",K,Q=>Q.data||Q,Q=>{p.value=Q,d().value=Date.now()});return}}await g()(),D().catch(()=>{}),s&&s.set(K,p.value)}return{loading:o,loadingView:x,viewCache:b,dates:E,selectedDate:_,lastLoadTime:M,consensus:N,viewNote:i,loadDates:G,refreshCalendarData:ae,exportCSV:O,loadConsensusData:T,loadDashboardCached:B}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:f,loadIndexKline:t,rememberDialogTrigger:u,menus:p,currentPage:D,currentSubPage:g,stockDetail:d,selectedDate:w}=a,o=ref({indices:[],market_sentiment:null});let x=null;const b=ref(!1),E=ref(null),_=ref(null),M=ref(!1);function N(){window.__quantModules.charts.disposeKline("stockKlineChart")}const i=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{i.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const l=ref(!1),s=ref(null),r=ref(!1),R=ref(0),P=ref(0);async function A(){try{const k=await(await fetch("/api/market/overview")).json();o.value=k,G(k)}catch(L){console.error("获取市场行情失败:",L)}}function G(L){x&&clearInterval(x),L&&L.in_trading_hours&&(x=setInterval(A,6e5))}function ae(L){u(),E.value=L,_.value=null,f.value="daily",O(L.code),window.__quantModules.charts.disposeKline("indexKlineChart"),b.value=!0,setTimeout(async()=>{await t("daily")},500)}async function O(L){try{const C=await(await fetch("/api/ai/index-eval/"+L)).json();C.success&&C.data&&(_.value=C.data)}catch(k){console.warn("[getIndexAiScore] cache check failed:",k)}}async function T(){if(E.value){M.value=!0;try{const k=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:E.value.code,index_name:E.value.name,current_price:E.value.close,pct_chg:E.value.pct_chg})})).json();k.success?_.value=k.data:ElementPlus.ElMessage.error(k.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{M.value=!1}}}function B(L){window.__quantModules.charts.zoomKline("stockKlineChart",L)}function K(){r.value=!0,setTimeout(()=>{r.value=!1},600)}function ie(L,k){if(L===k){K();return}const C=800,ce=performance.now(),W=k-L;l.value=!0,s.value={value:W,dir:W>0?"up":"down"},r.value=!0,setTimeout(()=>{r.value=!1},600),setTimeout(()=>{s.value=null},2300);function y(c){const S=c-ce,m=Math.min(S/C,1),H=1-Math.pow(1-m,3),ue=Math.round(L+W*H);d.value&&d.value.score_data&&(d.value.score_data.score=ue),m<1?requestAnimationFrame(y):(d.value&&d.value.score_data&&(d.value.score_data.score=k),l.value=!1)}requestAnimationFrame(y)}function Q(){if(!d.value||!d.value.score_data)return;const L=d.value.score_data.score;if(L==null)return;const k=600,C=performance.now();r.value=!0,setTimeout(()=>{r.value=!1},600);function ce(W){const y=Math.min((W-C)/k,1),c=1-Math.pow(1-y,3),S=Math.round(L*c);d.value&&d.value.score_data&&(d.value.score_data.score=S),y<1?requestAnimationFrame(ce):d.value&&d.value.score_data&&(d.value.score_data.score=L)}requestAnimationFrame(ce)}async function Z(){var C;if(!d.value||!d.value.stock)return;const L=d.value.stock,k=(C=d.value.score_data)==null?void 0:C.score;try{const ce=new Date().toISOString().split("T")[0],W=w.value||ce,c=await(await fetch(`/api/calendar/stock/${encodeURIComponent(L)}/score?date=${W}`)).json();if(c.success&&c.score_data){const S=c.score_data.score;d.value&&(d.value.score_data=c.score_data),k!=null&&S!==k?ie(k,S):K()}else K()}catch(ce){console.warn("[refreshStockScore] failed:",ce)}}function I(L){i.value&&(R.value=L.touches[0].clientX,P.value=L.touches[0].clientY)}function j(L){if(!i.value)return;const k=R.value-L.changedTouches[0].clientX,C=P.value-L.changedTouches[0].clientY;if(Math.abs(k)>Math.abs(C)&&Math.abs(k)>80){const ce=p.value.map(function(y){return y.key}),W=ce.indexOf(D.value);if(k>0&&W<ce.length-1){const y=ce[W+1],c=window.__quantGoPage;c?c(y,""):(D.value=y,g.value="")}else if(k<0&&W>0){const y=ce[W-1],c=window.__quantGoPage;c?c(y,""):(D.value=y,g.value="")}}}return{marketData:o,marketRefreshTimer:x,fetchMarketData:A,indexDetailVisible:b,indexDetail:E,indexAiResult:_,indexAiLoading:M,showIndexDetail:ae,loadCachedIndexEval:O,doIndexAiEvaluate:T,disposeStockKline:N,isMobile:i,zoomKlineRange:B,scoreAnimating:l,scoreDelta:s,scorePulse:r,triggerScorePulse:K,animateScoreChange:ie,animateScoreEntrance:Q,refreshStockScore:Z,touchStartX:R,touchStartY:P,onTouchStart:I,onTouchEnd:j}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:f,currentSubPage:t}=a,u=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),p=ref("idle"),D=ref("");async function g(){if(!u.value.webhook_url){D.value="请先输入Webhook地址";return}p.value="testing",D.value="";try{const q=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:u.value.webhook_url})})).json();q.success||q.status==="ok"?(D.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(D.value=q.message||"测试失败",ElementPlus.ElMessage.error(D.value))}catch{D.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}p.value="idle"}const d=Vue.ref(!1);async function w(){d.value=!0;try{const q=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{d.value=!1}}const o=ref(!1);function x(){e("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const X=document.querySelector('input[placeholder*="输入问题"]');X&&X.focus()})}const b=ref([]),E=ref({});async function _(){try{const q=await(await fetch("/api/ai/recommend-strategies")).json();q.success&&(b.value=q.recommendations||[])}catch(X){console.warn("[loadStrategyRecommendations] failed:",X)}}async function M(){try{const q=await(await fetch("/api/ai/usage-stats")).json();q.success&&(E.value=q)}catch(X){console.warn("loadAiUsage failed:",X)}}const N=ref({}),i=ref([]),l=ref(7);async function s(){try{const q=await(await fetch("/api/system/monitor")).json();q.success&&(N.value=q)}catch(X){console.warn("loadSysMonitor failed:",X)}}const r=ref({});async function R(){try{const q=await(await fetch("/api/system/health-detail")).json();q.success&&(r.value=q)}catch(X){console.warn("loadHealthDetail failed:",X)}}async function P(){try{const q=await(await fetch(`/api/analytics/rank?days=${l.value}`)).json();q.success&&(i.value=q.rank||[])}catch(X){console.warn("loadAnalytics failed:",X)}}const A=ref(!1);async function G(){if(!A.value){A.value=!0;try{const q=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return q&&q.success?q.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${q.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${q.date}）`):ElementPlus.ElMessage.error(q&&(q.detail||q.message)||"生成复盘失败"),R(),q}catch(X){ElementPlus.ElMessage.error("生成复盘失败: "+(X.message||""))}finally{A.value=!1}}}const ae=ref(null),O=ref(!1);async function T(){try{const q=await(await fetch("/api/ai/fact-check/latest")).json();ae.value=q&&q.success&&q.data||null}catch(X){console.warn("loadFactCheck failed:",X)}}async function B(){if(!O.value){O.value=!0;try{const q=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return q&&q.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${q.data.pass_rate!=null?q.data.pass_rate+"%":"--"} (${q.data.checked} 个数字)`),T()):ElementPlus.ElMessage.error(q&&(q.detail||q.message)||"事实护栏抽查失败"),q}catch(X){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(X.message||""))}finally{O.value=!1}}}const K=ref([]),ie=ref(!1);async function Q(){try{const q=await(await fetch("/api/backup/list")).json();q.success&&(K.value=q.backups||[])}catch(X){console.error("加载备份列表失败",X)}}async function Z(){ie.value=!0;try{const q=await(await fetch("/api/backup/create",{method:"POST"})).json();q.success?(ElementPlus.ElMessage.success(q.message||"备份成功"),Q()):ElementPlus.ElMessage.error(q.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{ie.value=!1}}const I=ref(""),j=ref("");async function L(X){I.value=X,j.value="";try{const q=window.__quantModules&&window.__quantModules.core||{},U=typeof q.authHeaders=="function"?q.authHeaders():{},re=await fetch("/api/reports/export?format="+encodeURIComponent(X),{headers:U});if(!re.ok)throw new Error("HTTP "+re.status);const pe=await re.blob(),de=URL.createObjectURL(pe),Y=document.createElement("a");Y.href=de;const oe=new Date().toISOString().slice(0,10);Y.download="report_"+oe+"."+X,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(de),j.value="报表已导出 ("+X.toUpperCase()+")"}catch(q){j.value="报表导出失败: "+(q.message||q)}finally{I.value=""}}async function k(X){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${X} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(q){console.warn("[restoreBackup] confirm cancelled:",q);return}try{const U=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X})})).json();U.success?(ElementPlus.ElMessage.success(U.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(U.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const C=ref(!1),ce=ref(0),W=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function y(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{ce.value=0,C.value=!0},800)}function c(){C.value=!1,localStorage.setItem("quant_tour_done","1")}function S(){C.value=!1,localStorage.setItem("quant_tour_done","1")}const m=ref(""),H=ref(!1);async function ue(){if(!m.value||!m.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}H.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:m.value.trim(),page:f.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(m.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{H.value=!1}}return{feishuConfig:u,feishuTestStatus:p,feishuTestMessage:D,feishuSaving:d,testFeishuWebhook:g,saveFeishuConfig:w,aiFabHidden:o,openAiFab:x,strategyRecommendations:b,aiUsage:E,loadStrategyRecommendations:_,loadAiUsage:M,sysMonitor:N,analyticsRank:i,analyticsDays:l,loadSysMonitor:s,loadAnalytics:P,healthDetail:r,loadHealthDetail:R,reviewTriggering:A,triggerMarketReview:G,factCheck:ae,factCheckRunning:O,loadFactCheck:T,triggerFactCheck:B,backups:K,backupCreating:ie,loadBackups:Q,createBackup:Z,restoreBackup:k,reportExporting:I,reportExportMsg:j,exportReport:L,tourVisible:C,tourStep:ce,tourSteps:W,maybeShowTour:y,skipTour:c,finishTour:S,feedbackText:m,feedbackSubmitting:H,submitFeedback:ue}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:f,selectedDate:t,dates:u,loadConsensusData:p,hapticFeedback:D}=a,g=e(()=>({day:"天",week:"周",month:"月",year:"年"})[f.value]||"天"),d=e(()=>({day:"date",week:"week",month:"month",year:"year"})[f.value]||"date"),w=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[f.value]||"YYYY-MM-DD"),o=e(()=>!t.value||!u.value||u.value.length===0?!1:t.value>u.value[0]),x=e(()=>!t.value||!u.value||u.value.length===0?!1:t.value<u.value[u.value.length-1]);function b(N){D("light"),f.value=N;let i=t.value||u.value[u.value.length-1];if(N==="year"){const l=i.substring(0,4),s=u.value.find(r=>r.startsWith(l));t.value=s||i}else if(N==="month"){const l=i.substring(0,7),s=u.value.find(r=>r.startsWith(l));t.value=s||i}setTimeout(p,50)}function E(N){D("light");const i=t.value,l=u.value,s=l.indexOf(i);if(s<0)return;let r=1;f.value==="week"&&(r=5),f.value==="month"&&(r=22),f.value==="year"&&(r=250);const R=s+N*r;if(R>=0&&R<l.length){const P=l[R];if(f.value==="month"){const A=P.substring(0,7),G=l.find(ae=>ae.startsWith(A));t.value=G||P}else if(f.value==="year"){const A=P.substring(0,4),G=l.find(ae=>ae.startsWith(A));t.value=G||P}else t.value=P;p()}}function _(N){if(!u.value||u.value.length===0)return!1;const i=N.getFullYear(),l=String(N.getMonth()+1).padStart(2,"0"),s=String(N.getDate()).padStart(2,"0"),r=`${i}-${l}-${s}`;return!u.value.includes(r)}function M(N){N&&N.length>10&&(t.value=N.substring(0,10)),p()}return{viewUnit:g,datePickerType:d,dateFormat:w,canNavPrev:o,canNavNext:x,switchView:b,navigateDate:E,disabledDate:_,onDateChange:M}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:f,navigateTo:t,currentPage:u,currentView:p,navigateDate:D,switchView:g,getLoadDashboardData:d,refreshCalendarData:w,getLoadAiHistory:o,exportCSV:x,getShowBatchEvaluate:b,openAiFab:E,toggleSidebar:_,showStockDetail:M}=a,N=ref("");async function i(O,T){if(!O||O.trim().length<1){T([]);return}const B=window.QuantCommandPanel;let K=[];B&&e.value&&(K=B.buildSearchSuggestions(O,e.value,f,B.DEFAULT_COMMANDS));const ie=window.__quantModules&&window.__quantModules.pinyin;ie&&ie.searchCoreStocks(O).forEach(function(Q){K.push({value:Q.code+" "+Q.name,type:"stock",code:Q.code,name:Q.name,label:Q.name,subLabel:Q.code,icon:"trending-up",iconName:"trending-up"})});try{const Z=await(await fetch("/api/search?q="+encodeURIComponent(O))).json();if(Z.success&&Z.results){const I=Z.results.map(function(L){return{value:L.code+" "+L.name,type:"stock",code:L.code,name:L.name,label:L.name,subLabel:L.code,icon:"trending-up",iconName:"trending-up"}}),j=[];(Z.groups||[]).forEach(function(L){(L.items||[]).forEach(function(k){k.type==="sector"?j.push({value:k.name+" · "+k.subLabel,type:"sector",name:k.name,label:k.name,subLabel:"板块",icon:"layers",iconName:"layers"}):k.type==="strategy"?j.push({value:k.name+" · 策略",type:"strategy",id:k.id,name:k.name,label:k.name,subLabel:"策略",icon:"target",iconName:"target"}):k.type==="menu"&&j.push({value:k.name,type:"menu",menuKey:k.menuKey,name:k.name,label:k.name,subLabel:k.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),T(K.concat(I,j))}else T(K)}catch(Q){console.warn("[searchStocks] fetch failed:",Q),T(K)}}function l(O){return O?O.type==="menu"?{action:"menu",menuKey:O.menuKey,subPage:O.subPage}:O.type==="command"?{action:"command",key:O.key}:O.type==="sector"?{action:"sector",name:O.name}:O.type==="strategy"?{action:"strategy",id:O.id,name:O.name}:O.type==="stock"||O.code&&O.name?{action:"stock",code:O.code,name:O.name}:null:null}function s(O){N.value="";const T=window.QuantCommandPanel,B=T?T.dispatchSearchSelection(O):l(O);if(B){if(B.action==="menu"){t(B.menuKey,B.subPage);return}if(B.action==="command"){r(B.key);return}if(B.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(B.name);return}if(B.action==="strategy"){t("research","overview");return}B.action==="stock"&&typeof M=="function"&&M(B.code,B.name)}}function r(O){if(O==="refresh"){const T=u.value;T==="strategies"?d().catch(function(){}):T==="calendar"?w().catch(function(){}):T==="ai"&&o().catch(function(){})}else O==="export"?x():O==="batch"?b().value=!0:O==="ai"?E():O==="sidebar"?_():O==="open-eval-history"?t("ai","history"):O==="open-shortterm"&&t("shortterm","overview")}const R=ref(!1),P=ref(!1);function A(O){if(!O)return!1;const T=O.tagName;return T==="INPUT"||T==="TEXTAREA"||T==="SELECT"||O.isContentEditable}function G(O){if(A(O.target))return;const T=O.key.toLowerCase();if(O.ctrlKey&&T==="k"){O.preventDefault(),P.value=!0;return}if(O.ctrlKey&&T==="/"){O.preventDefault(),R.value=!R.value;return}if(O.ctrlKey&&T==="h"){O.preventDefault(),t("ai","history");return}if(O.ctrlKey&&O.shiftKey&&T==="s"){O.preventDefault(),t("shortterm","overview");return}if(!(O.ctrlKey||O.metaKey||O.altKey)){if(T>="1"&&T<="5"){const B=parseInt(T)-1,K=e.value[B];K&&t(K.key,K.subPages[0]||"");return}if(T==="r"&&ae(),(T==="arrowleft"||T==="arrowright"||T==="arrowup"||T==="arrowdown")&&u.value==="calendar")if(O.preventDefault(),T==="arrowleft"||T==="arrowright")D(T==="arrowleft"?-1:1);else{const B=["day","week","month","year"].indexOf(p.value),K=["day","week","month","year"][(B+(T==="arrowup"?-1:1)+4)%4];g(K)}}}function ae(){const O=u.value;O==="strategies"?d().catch(()=>{}):O==="calendar"?w().catch(()=>{}):O==="ai"&&o().catch(()=>{})}return{searchQuery:N,searchStocks:i,onSearchSelect:s,runGlobalCommand:r,shortcutHelpVisible:R,commandPaletteVisible:P,isTypingTarget:A,handleGlobalKeydown:G,refreshCurrentPage:ae}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:f,loadDates:t,loadDashboardData:u,loadDashboardCached:p,loadHealthMetrics:D,loadConsensusData:g,applyTheme:d,maybeShowTour:w,loadAiVendors:o,loadGroupConfig:x,groupsConfig:b}=a,E="qc_login_username";let _="";try{_=localStorage.getItem(E)||""}catch{_=""}const M=ref({username:_,password:""}),N=ref(!1),i=ref(!1),l=ref(!1),s=ref({oldPassword:"",newPassword:"",confirmPassword:""}),r=ref(!1),R=ref(!1),P=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),A=ref(1);async function G(){try{(await(await fetch("/api/setup/status")).json()).needed&&(P.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},A.value=1,R.value=!0)}catch(Q){console.warn("[checkSetupWizard] failed:",Q)}}async function ae(){try{const Q={new_password:P.value.newPassword,ai_key:P.value.aiKey,ai_provider:P.value.aiProvider,ai_model:P.value.aiModel,ai_endpoint:P.value.aiEndpoint,tushare_token:P.value.tushareToken},I=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)})).json();I.success?(R.value=!1,ElementPlus.ElMessage.success("初始化完成"),await f()):ElementPlus.ElMessage.error(I.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function O(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(R.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function T(){if(!M.value.username||!M.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}N.value=!0;try{const Z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M.value)})).json();if(Z.success){e.value=Z.user,localStorage.setItem("quant_user",JSON.stringify(Z.user)),localStorage.setItem("quant_token",Z.data.access_token),d(Z.user.theme||"gold");try{localStorage.setItem(E,M.value.username||"")}catch{}typeof x=="function"&&await x().catch(function(){}),typeof o=="function"&&o(),await f(),await t(),await Promise.all([p(),g(),D().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),Z.data&&Z.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),w(),Z.user.role==="admin"&&setTimeout(G,500)}else ElementPlus.ElMessage.error(Z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{N.value=!1}}async function B(){i.value=!0;try{const Z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();Z.success?(e.value=Z.user,localStorage.setItem("quant_user",JSON.stringify(Z.user)),localStorage.setItem("quant_token",Z.data.access_token),d(Z.user.theme||"gold"),typeof x=="function"&&await x().catch(function(){}),await f(),await t(),await u(),D().catch(()=>{}),await g(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(Z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{i.value=!1}}function K(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{b&&(b.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function ie(){if(!s.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!s.value.newPassword||s.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(s.value.newPassword!==s.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}r.value=!0;try{const Q=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:s.value.oldPassword,new_password:s.value.newPassword})}),Z=await Q.json();Q.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),l.value=!1,s.value={oldPassword:"",newPassword:"",confirmPassword:""},K()):ElementPlus.ElMessage.error(Z.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{r.value=!1}}return{loginForm:M,logining:N,guestLogining:i,showChangePassword:l,changePasswordForm:s,changingPassword:r,showSetupWizard:R,setupForm:P,setupStep:A,checkSetupWizard:G,completeSetupWizard:ae,resetSetupWizard:O,handleLogin:T,handleGuestLogin:B,handleLogout:K,doChangePassword:ie}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let f=null;const{strategyFilter:t,currentView:u,statusFilter:p,currentPage:D,currentSubPage:g,menus:d,currentUser:w,strategyFilterCounts:o,lazyTick:x,dates:b,selectedDate:E,consensus:_,loadConsensusData:M,fetchMerrillClock:N,fetchMarketData:i,loadWatchlist:l,loadAiHistory:s,preloadWatchlistKline:r,loadChatHistory:R,loadSystemStatus:P,checkTushareConnection:A,loadSysMonitor:G,loadAnalytics:ae,loadHealthDetail:O,loadHealthMetrics:T,loadAiUsage:B,loadFactCheck:K,loadAutoEvaluateConfig:ie,loadDatasourceConfig:Q,loadFeishuConfig:Z,loadAiConfig:I,loadAiVendors:j,loadRateLimit:L,loadDataRefreshConfig:k,loadBackups:C,loadAllGroups:ce,loadUsers:W,stockDetailTab:y,stockDetailVisible:c,stockKlineLoaded:S,loadStockKline:m,currentKlinePeriod:H,showMerrillDetail:ue,indexDetailVisible:X,restoreDialogFocus:q}=a;e(t,U=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(U.selected)),localStorage.setItem("quant_strategy_filter_mode",U.mode)},{deep:!0}),e([u,p],(U,re)=>{U[0]!==re[0]&&M()}),e([D,g],([U,re])=>{var pe;try{const Y=!(U==="calendar"&&re==="calendar")&&re||"",oe=Y?"#"+U+"/"+Y:"#"+U;window.location.hash!==oe&&(window.location.hash=oe)}catch{}if(re&&localStorage.setItem("quant_last_subpage",re),!re&&d.value.find(de=>de.key===U)){const de=d.value.find(Y=>Y.key===U);de&&de.subPages.length>0&&(g.value=de.subPages[0])}if(U==="shortterm"&&re==="market-review"){const de=window.__lazyLoaders&&window.__lazyLoaders.research;de&&de().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(Y){Y&&Y.name&&!Y.__quantRegistered&&(window.__quantApp.component(Y.name,Y),Y.__quantRegistered=!0)}),x&&x.value++}).catch(function(Y){console.warn("[lazy] research 组件补加载失败",Y)})}U==="calendar"&&re==="calendar"&&(!_.value||_.value.length===0)&&(b.value.length>0&&!E.value&&(E.value=b.value[b.value.length-1]||""),setTimeout(M,50)),U==="calendar"&&re==="pool"&&(!_.value||_.value.length===0)&&(b.value.length>0&&!E.value&&(E.value=b.value[b.value.length-1]||""),setTimeout(M,50)),U==="strategies"&&(re==="merrill"&&N(),re==="market"&&i(),re==="consensus"&&(!_.value||_.value.length===0)&&setTimeout(M,50)),U==="ai"&&(re==="watchlist"&&(l(),s(),setTimeout(r,500)),re==="history"&&s(),re==="overview"&&(s(),l()),re==="chat_history"&&R()),(U==="system"||U==="ops")&&((pe=w.value)==null?void 0:pe.role)==="admin"&&(re==="status"&&(P(),A()),re==="health"&&(O(),T()),re==="schedule"&&O(),re==="guard"&&K(),re==="usage"&&(G(),ae(),O(),T(),B(),K()),re==="autoeval"&&(ie(),j()),re==="datasource"&&Q(),re==="feature"&&(Z(),I(),L(),k(),C()),re==="user"&&(ce(),W())),(U==="system"||U==="ops")&&re==="usage"?f||(f=setInterval(()=>{G(),ae(),O(),T(),B()},3e4)):f&&(clearInterval(f),f=null)}),e(y,(U,re)=>{U==="kline"&&re&&re!=="kline"&&c.value&&(S.value=!1,setTimeout(async()=>{!await m(H.value)&&c.value&&y.value==="kline"&&setTimeout(()=>m(H.value),800)},50))}),e(ue,U=>{U||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([c,X],([U,re])=>{!U&&!re&&q()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:f,menus:t,currentPage:u,currentSubPage:p,currentView:D,currentKlinePeriod:g,selectedDate:d,dates:w,loadDates:o,loadConsensusData:x,loadDashboardCached:b,appVersion:E,themes:_,fetchMarketData:M,fetchMerrillStages:N,fetchMerrillClock:i,loadAiConfig:l,loadAiVendors:s,loadAiCatalog:r,currentUser:R,loadUserConfig:P,loadAutoEvaluateConfig:A,loadGroupConfig:G,loadUsers:ae,loadAllGroups:O,loadAiHistory:T}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function B(W,y){const c={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(W==="calendar"&&c[y])return u.value="calendar",p.value="calendar",c[y]&&(D.value=c[y]),!0;if(W==="research"&&(y==="strategy-write"||y==="custom-write")){u.value="research",p.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",y==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const W=window.location.hash||"";if(!W||W==="#")return;const y=W.replace(/^#\/?/,"").split("/"),c=y[0],S=y[1]||"",m=t.value.find(function(H){return H.key===c});if(m&&!B(c,S)){if(!S)u.value=c,p.value=m.subPages[0]||"";else if(m.subPages.indexOf(S)>=0)u.value=c,p.value=S;else return;window.__lazyLoaders&&window.__lazyLoaders[c]&&window.__quantGoPage&&window.__quantGoPage(c,p.value).catch(function(){})}});const K=(W,y=3e3,c="")=>{const S=new Promise((m,H)=>setTimeout(()=>H(new Error("timeout")),y));return Promise.race([W,S]).catch(m=>{console.warn(`[init] ${c||"task"} failed:`,m.message)})},ie=localStorage.getItem("quant_theme"),Q=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const W=window.__quantModules.themes;let y=Q.theme||"system",c=Q.theme_hue!=null&&Q.theme_hue!==""?Q.theme_hue:null;const S=typeof W.migrateLegacyTheme=="function"?W.migrateLegacyTheme():null;c==null&&S&&(y=S.mode,c=S.hue),c==null&&(c=45),f(y,c)}else ie&&f(ie);await G().catch(function(){}),function(){var W=window.location.hash||"",y=!1;if(W&&W!=="#"){var c=W.replace(/^#\/?/,"").split("/"),S=c[0],m=c[1]||"",H=t.value.find(function(re){return re.key===S});H&&(B(S,m)||(u.value=S,m&&H.subPages.indexOf(m)>=0?p.value=m:m||(p.value=H.subPages[0]||"")),y=!0)}if(!y){var ue=localStorage.getItem("quant_last_page");ue&&t.value.some(function(re){return re.key===ue})?u.value=ue:Q.default_view&&t.value.some(function(re){return re.key===Q.default_view})&&(u.value=Q.default_view);var X=localStorage.getItem("quant_last_subpage");X&&(p.value=X)}var q=localStorage.getItem("quant_last_date");q&&(d.value=q);var U=localStorage.getItem("quant_last_view");U&&(D.value=U),window.__lazyLoaders&&window.__lazyLoaders[u.value]&&window.__quantGoPage&&window.__quantGoPage(u.value,p.value).catch(function(){})}(),fetch("/api/health").then(W=>W.json()).then(W=>{W.version&&(E.value=W.version)}).catch(()=>{});const Z=localStorage.getItem("quant_user"),I=localStorage.getItem("quant_token"),j=!!(Z&&I),L=Promise.all([Promise.resolve().then(()=>{_.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),K(M(),3e3,"marketData"),K(N(),2e3,"merrillStages")]).then(()=>{K(i(),3e3,"merrillClock")});if(l(),r(),j&&R.value&&s(),!j||!R.value){await L;return}let k=!0;try{k=(await fetch("/api/users/me")).ok}catch{k=!1}if(!k){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),R.value=null;return}if(R.value){const W=R.value.theme||"",y=window.__quantModules&&window.__quantModules.themes;let c=Q.theme||"system",S=Q.theme_hue!=null&&Q.theme_hue!==""?Q.theme_hue:null;if(S==null&&y&&typeof y.migrateLegacyTheme=="function"){const m=y.migrateLegacyTheme();if(m)c=m.mode,S=m.hue;else if(W&&y.LEGACY_MAP&&y.LEGACY_MAP[W]){const H=y.LEGACY_MAP[W];c=H[0],S=H[1]}}S==null&&(S=45),f(c,S)}if(window.__quantModules&&window.__quantModules.preferences){const y=await window.__quantModules.preferences.loadPreferences();var C=localStorage.getItem("quant_last_page");!C&&y.default_view&&t.value.some(function(c){return c.key===y.default_view})&&(u.value=y.default_view),y.theme&&f(y.theme,y.theme_hue!=null&&y.theme_hue!==""?y.theme_hue:null),g&&(y.chart_period==="weekly"||y.chart_period==="monthly")&&(g.value=y.chart_period)}await Promise.all([K(P(),2e3,"userConfig"),K(o(),2e3,"dates")]),A().catch(()=>{}),G().catch(()=>{});const ce=u.value==="strategies"?K(b(),2e3,"dashboard"):K(x(),2e3,"consensus");await Promise.all([ce,K(ae(),2e3,"users"),K(T(),2e3,"aiHistory")]),O().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:f,onUnmounted:t,watch:u,nextTick:p}=Vue,D=a(!1),g=window.__quantModules&&window.__quantModules.i18n||{},d=g.SUPPORTED_LOCALES||["zh-CN","en"],w=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(d.indexOf(w)!==-1?w:"zh-CN");typeof g.bindLocale=="function"&&g.bindLocale(o);const x=typeof g.t=="function"?g.t:function(V){return String(V)};function b(V){d.indexOf(V)!==-1&&(o.value=V,typeof g.setLocale=="function"&&g.setLocale(V),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",V))}function E(V,ve){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(V,ve):V==null?"":String(V)}function _(V){(V.key==="Enter"||V.key===" "||V.key==="Spacebar")&&(V.preventDefault(),V.currentTarget&&typeof V.currentTarget.click=="function"&&V.currentTarget.click())}let M=null;function N(){document.activeElement&&document.activeElement!==document.body&&(M=document.activeElement)}function i(){if(M&&M.isConnected)try{M.focus()}catch{}M=null}const l=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{l.value=!0}),window.addEventListener("offline",()=>{l.value=!1})),window.addEventListener("beforeunload",V=>{if(D.value)return V.preventDefault(),V.returnValue="您有未保存的配置变更，确定要离开吗？",V.returnValue});function s(V="light"){typeof navigator<"u"&&navigator.vibrate&&(V==="light"?navigator.vibrate(10):V==="medium"?navigator.vibrate(20):V==="heavy"&&navigator.vibrate([10,30,10]))}const r=useMerrillClock(),{merrillData:R,merrillStagesConfig:P,showMerrillDetail:A,merrillDetailData:G,merrillClockConfig:ae,merrillClockLastUpdated:O,merrillReevalResult:T,merrillReevalLoading:B,stages:K,indicatorList:ie,dimensionScoreList:Q,detailDimensionScoreList:Z,confidenceColor:I,timelineStages:j,clockPosition:L,merrillProgressStyle:k,FULL_CYCLE_MONTHS:C,getStageAngle:ce,getCycleProgress:W,getCurrentStageMonths:y,getStageTotalMonths:c,isStageCompleted:S,getCharLabel:m,getAssetName:H,getRankColor:ue,fetchMerrillStages:X,fetchMerrillClock:q,loadMerrillTimeline:U,showTimelineStage:re,merrillTimeline:pe,timelineLoading:de,showStageDetail:Y,saveMerrillClockConfig:oe,doMerrillReevaluate:De,startAutoRefresh:ke,stopAutoRefresh:_e,merrillSnapshots:ee,merrillSnapshotsTotal:xe,fetchMerrillSnapshots:Pe}=r,se=a(localStorage.getItem("sidebar_collapsed")==="1");function te(){se.value=!se.value,localStorage.setItem("sidebar_collapsed",se.value?"1":"0")}const he=a(null),Ne=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],Ie=e(()=>{var Ye,Ft,Xt;const V=((Ye=ge.value)==null?void 0:Ye.role)||"guest",ve=((Ft=ge.value)==null?void 0:Ft.group)||V,ye=((Xt=he.value)==null?void 0:Xt[ve])||null;return Ne.map(jt=>{if(ye&&ye.visible_menus&&jt.key in ye.visible_menus&&!ye.visible_menus[jt.key])return null;const ba={...jt,name:x("nav."+jt.key)||jt.name};return ye!=null&&ye.visible_sub_pages&&(ba.subPages=jt.subPages.filter(os=>{const Ed=jt.key+"."+os;return ye.visible_sub_pages[Ed]!==!1})),jt.key==="system"&&V==="guest"&&jt.guestSubPages&&(ba.subPages=jt.guestSubPages),ba}).filter(Boolean)});async function Ue(){try{if(!localStorage.getItem("quant_token"))return;const ve=await fetch("/api/groups/my");if(ve.ok){const ye=await ve.json();he.value={[ye.group_id]:ye.group}}}catch(V){console.warn("loadGroupConfig:",V)}}const Ge=a("strategies"),ht=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},st=a(ht.navMode);function Rt(V){const ve=window.__quantModules&&window.__quantModules.navModeCore;st.value=ve?ve.normalizeNavMode(V):V==="tree"||V==="toptab"?V:"toptab",ve&&ve.writePrefs({navMode:st.value})}const Se=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function we(V,ve=""){s("light"),Ge.value=V,et.value=ve,localStorage.setItem("quant_last_subpage",ve)}function Ae(){const V=Ie.value;if(!V||!V.length)return;if(!V.some(function(Fe){return Fe.key===Ge.value})){const Fe=V[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Fe.key),Ge.value=Fe.key,et.value=Fe.subPages&&Fe.subPages[0]||"";return}const ye=V.find(function(Fe){return Fe.key===Ge.value});ye&&ye.subPages&&ye.subPages.length&&!ye.subPages.includes(et.value)&&(et.value=ye.subPages[0])}const Re=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Xe=a("multifactor"),Ze=a(null),tt=a(1e5),xt=a(!1),St=a(null);let pt=null,zt=null;async function Kt(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ve={initial_capital:tt.value||1e5};Ze.value&&Ze.value.length===2&&(ve.start_date=Ze.value[0],ve.end_date=Ze.value[1]),xt.value=!0,St.value=null;try{const ye=await fetch("/api/strategies/"+Xe.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)});if(!ye.ok){const Ft=await ye.json().catch(()=>({}));throw new Error(Ft.detail||"回测失败")}const Fe=await ye.json(),Ye=Fe.result||{};if(!Ye.success)throw new Error(Ye.message||"回测失败");Fe.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),St.value={total_return_pct:((Ye.total_return??0)*100).toFixed(2),annual_return_pct:((Ye.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ye.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ye.sharpe_ratio??0).toFixed(2),win_rate:((Ye.win_rate??0)*100).toFixed(2),out_sample:Ye.outsample_total_return===void 0?"":((Ye.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ye.overfit_warning||!1,message:Ye.message||""},Jt(Ye.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(ye){ElementPlus.ElMessage.error(ye.message||"回测失败")}finally{xt.value=!1}}function Jt(V){const ve=document.getElementById("backtestEquityChart");if(!ve||!V||V.length===0)return;const ye=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Fe=()=>{zt=V,pt&&(pt.dispose(),pt=null),pt=echarts.init(ve),pt.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ye=V.map(Xt=>Xt.date||Xt[0]),Ft=V.map(Xt=>Xt.value??Xt[1]);pt.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ye,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Ft,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};ye?ye().then(Fe).catch(()=>{}):Fe()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){zt&&Jt(zt)}));const et=a("overview"),yt=e(()=>{const V=Ne.find(ve=>ve.key===Ge.value);return V?V.name:Ge.value}),Wt=a(0),gt=e(()=>{Wt.value;const V={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ve=et.value;return Ge.value==="shortterm"&&ve==="market-review"?"qc-research-page":Ge.value==="ops"&&ve==="execution"?"qc-strategies-page":V[Ge.value]||""}),Ut=a(!1),_t=a({}),Je=a([]);a("");const At=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),wt=a("day"),J=a("all"),ge=a(null);u(Ie,function(){Ae()}),u([Ge,et],function(){const V=document.querySelector(".main-content");V&&(V.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const V=localStorage.getItem("quant_user"),ve=localStorage.getItem("quant_token");if(V&&ve)try{ge.value=JSON.parse(V)}catch{}}();const at=a(!1),kt=a("kline"),lt=a(null),It=a(!1),ea=a(localStorage.getItem("qc_detail_mode")||"split"),aa=a(window.innerWidth<=1024),na=e(()=>ea.value==="split"&&!aa.value);function ta(V){ea.value=V;try{localStorage.setItem("qc_detail_mode",V)}catch{}}window.addEventListener("resize",()=>{aa.value=window.innerWidth<=1024});const Qt=35,Ht=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Nt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Ht.value?Ht.value+"px":Qt+"%")}Nt();function Gt(V){const ve=Math.max(1,Math.min(V,2e3));Ht.value=ve,Nt();try{localStorage.setItem("qc_split_width",String(ve))}catch{}}function ft(V){if(Ht.value)return Ht.value;const ve=V?V.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ve*Qt/100))}let v=null;function $(V,ve){if(!ve||aa.value)return;V.preventDefault();const ye=ve.getBoundingClientRect().width;v={startX:V.clientX,startW:ft(ve),minW:Math.max(200,Math.floor(ye*Qt/100)),maxW:Math.floor(ye/2)},document.body.classList.add("qc-split-resizing")}function le(V){if(!v)return;const ve=V.clientX-v.startX;let ye=v.startW+ve;ye=Math.max(v.minW,Math.min(ye,v.maxW)),Ht.value=ye,Nt();try{localStorage.setItem("qc_split_width",String(ye))}catch{}}function Te(){v&&(v=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",le),document.addEventListener("mouseup",Te));function Ve(V){const ve=V.target&&V.target.closest?V.target.closest("[data-split-resize]"):null;if(!ve)return;const ye=ve.closest("[data-split-root]");$(V,ye)}typeof document<"u"&&document.addEventListener("mousedown",Ve,!0);const Qe={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},Oe=a({});function rt(V,ve){return Qe[ve]||ve}function nt(V){const ve=Ne.find(Fe=>Fe.key===V);if(!ve||!ve.subPages||!ve.subPages.length)return;if(!(Oe.value[V]||[]).length){const Fe=ve.subPages[0];Oe.value=Object.assign({},Oe.value,{[V]:[{subPage:Fe,title:rt(V,Fe)}]})}}function ct(V,ve){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=rt(V,ve);if(ye){const Ye=ye.openTab(Oe.value,V,ve,Fe);Oe.value=Ye.groups}else{const Ye=Oe.value[V]||[];Ye.some(Ft=>Ft.subPage===ve)||(Oe.value=Object.assign({},Oe.value,{[V]:Ye.concat([{subPage:ve,title:Fe}])}))}we(V,ve)}function Ot(V,ve){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=et.value;let Ye=null;if(ye)Ye=ye.closeTab(Oe.value,V,ve,Fe),Oe.value=Ye.groups;else{const jt=Oe.value[V]||[];Oe.value=Object.assign({},Oe.value,{[V]:jt.filter(ba=>ba.subPage!==ve)})}if(!(Oe.value[V]||[]).length){nt(V);const jt=Ne.find(os=>os.key===V),ba=jt&&jt.subPages&&jt.subPages[0];ba&&we(V,ba);return}const Xt=Ye?Ye.nextActive:null;Xt&&we(V,Xt)}function Et(V,ve){if(!(Oe.value[V]||[]).some(Fe=>Fe.subPage===ve)){ct(V,ve);return}we(V,ve)}u([Ge,et],([V,ve])=>{nt(V);const ye=Oe.value[V]||[];ve&&!ye.some(Fe=>Fe.subPage===ve)&&(Oe.value=Object.assign({},Oe.value,{[V]:ye.concat([{subPage:ve,title:rt(V,ve)}])}))},{immediate:!0});const z=function(V){if(!(V.ctrlKey&&V.key==="Tab"))return;const ve=Ge.value,ye=Oe.value[ve]||[];if(ye.length<=1)return;V.preventDefault();const Fe=et.value,Ye=Math.max(0,ye.findIndex(jt=>jt.subPage===Fe)),Ft=V.shiftKey?(Ye-1+ye.length)%ye.length:(Ye+1)%ye.length,Xt=ye[Ft];Xt&&Et(ve,Xt.subPage)};window.addEventListener("keydown",z);const fe=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),Le=a("light"),Me=[45,220,0,140,270,320],ze={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},He=a(45),mt=a(function(){const V=window.__quantModules&&window.__quantModules.preferences;return V&&V.getPreference&&V.getPreference("theme")||"system"}());(function(){const V=window.__quantModules&&window.__quantModules.preferences,ve=V&&V.getPreference&&V.getPreference("theme_hue");ve!=null&&ve!==""&&(He.value=parseInt(ve,10))})();function Mt(V){return"hsl("+V+", 75%, 42%)"}function it(V){return ze[V]||"自定义 "+V}const Bt=a(""),qa=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),ia=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),wa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],oa=a({day:[],week:[],month:[],year:[]}),Pa=a({});function ra(V,ve){let ye=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(ye=window.__quantModules.themes.applyTheme(V,ve)),Le.value=ye&&ye.mode?ye.mode:V==="dark"||V==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Da(V,ve){const ye=window.__quantModules&&window.__quantModules.preferences;if(!(!ye||!ye.setPreferences))try{ye.setPreferences({theme:V}),ve!=null&&ve!==""&&ye.setPreferences({theme_hue:parseInt(ve,10)})}catch{}}function ca(V,ve){ra(V,ve),ve!=null&&ve!==""&&(He.value=parseInt(ve,10));const ye=window.__quantModules&&window.__quantModules.themes;let Fe=V;ye&&ye.LEGACY_MAP&&ye.LEGACY_MAP[V]&&(Fe=ye.LEGACY_MAP[V][0]),Fe==="light"||Fe==="dark"||Fe==="system"?mt.value=Fe:mt.value=Le.value,Fe==="system"&&(Fe=Le.value),Da(Fe,ve),ge.value&&(fetch(`/api/users/${ge.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Fe})}),ge.value.theme=Fe,localStorage.setItem("quant_user",JSON.stringify(ge.value)))}function $t(V){const ve=window.__quantModules&&window.__quantModules.preferences,ye=ve&&ve.getPreference?ve.getPreference("theme_hue"):null;ca(V,ye)}function ka(V){He.value=parseInt(V,10);const ve=window.__quantModules&&window.__quantModules.preferences,ye=ve&&ve.getPreference&&ve.getPreference("theme")||"light";ca(ye,He.value)}const ga=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function Ra(V){ga.value=!!V;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",V?"show":"hide")}catch{}}const za=e(()=>{const V=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ga.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...V]:V}),h=a("daily");(function(){try{const ve=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ve==="weekly"||ve==="monthly")&&(h.value=ve)}catch{}})();const n=a(!1),F=a(""),ne=a(!1),Ce=a(!1),qe=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Tt=["MA5","MA10","MA20","MA60"],$e=a(!1);let bt=0;async function Yt(V){if(!lt.value)return!1;const ve=++bt;n.value=!0,h.value=V;try{const Fe=await(await fetch(`/api/market/kline/${lt.value.stock}?period=${V}&limit=60`)).json();if(!Fe.success||!Fe.data)throw new Error(Fe.message||"数据获取失败");return F.value=Fe.degraded_from?"分钟数据("+Fe.degraded_from+")暂不可用, 已降级展示日线":"",$s(lt.value.stock),ve!==bt?!1:(kt.value!=="kline"||(Ce.value=!0,await p(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Fe.data,V,!1,{isMobile:ms.value,onLegend:Ye=>{Object.keys(qe.value).forEach(Ft=>{Ft in Ye&&(qe.value[Ft]=!!Ye[Ft])})}}),Pt()),!0)}catch(ye){return console.error("[kline] 加载失败:",lt.value&&lt.value.stock,V,ye),kt.value==="kline"&&(Ce.value=!1,F.value="",ElementPlus.ElMessage.error("K线加载失败: "+(ye&&ye.message?ye.message:"数据源不可达，请重试"))),!1}finally{n.value=!1}}async function Ct(V){if(Ua.value){ne.value=!0,h.value=V;try{const ye=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${V}&limit=60`)).json();if(!ye.success||!ye.data)throw new Error(ye.message||"数据获取失败");$e.value=!0,await p(),window.__quantModules.charts.renderKlineTo("indexKlineChart",ye.data,V,!0,{isMobile:ms.value,onLegend:Fe=>{Object.keys(qe.value).forEach(Ye=>{Ye in Fe&&(qe.value[Ye]=!!Fe[Ye])})}}),Pt()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{ne.value=!1}}}async function da(V){if(!Ce.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await Yt(V)}async function ua(V){if(!$e.value){ElementPlus.ElMessage.info("请先加载K线");return}await Ct(V)}function We(V){const ve=(at.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ve&&ve.dispatchAction({type:"legendToggleSelect",name:V})}function Pt(){["K线","MA5","MA10","MA20","MA60"].forEach(V=>{qe.value[V]=!0})}async function ha(){const V=await fetch("/api/system/metrics");if(!V.ok)throw new Error("metrics "+V.status);const ve=await V.json(),ye=Array.isArray(ve)?ve:ve&&ve.data_sources||[];Je.value=ye}const ya=()=>ls,Dt=()=>Es,Ka=()=>Ho,dn=()=>Aa,un=()=>ts,vn=window.__quantAppLogic.data.create({currentView:wt,statusFilter:J,dashboardData:_t,loadHealthMetrics:ha,getLoadDashboardData:ya,getLastRefreshTime:Dt,getFetchPoolSignals:Ka}),{loading:mn,loadingView:pn,viewCache:fn,dates:Ia,selectedDate:sa,lastLoadTime:gn,consensus:_a,viewNote:hn,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ea,loadDashboardCached:Na}=vn,yn=window.__quantAppLogic.market.create({currentKlinePeriod:h,loadIndexKline:Ct,rememberDialogTrigger:N,menus:Ie,currentPage:Ge,currentSubPage:et,stockDetail:lt,selectedDate:sa}),{marketData:bn,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:wn,indexAiLoading:kn,fetchMarketData:Ga,showIndexDetail:_n,loadCachedIndexEval:xn,doIndexAiEvaluate:Sn,disposeStockKline:vs,isMobile:ms,zoomKlineRange:Cn,scoreAnimating:qn,scoreDelta:En,scorePulse:Mn,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Tn,onTouchEnd:Pn}=yn,Dn=window.__quantAppLogic.ops.create({navigateTo:we,currentPage:Ge,currentSubPage:et}),{feishuConfig:ps,feishuTestStatus:Rn,feishuTestMessage:zn,testFeishuWebhook:An,saveFeishuConfig:Ln,aiFabHidden:In,openAiFab:fs,strategyRecommendations:Nn,aiUsage:On,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:jn,analyticsRank:Vn,analyticsDays:Fn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Hn,loadHealthDetail:bs,reviewTriggering:Bn,triggerMarketReview:Kn,factCheck:Wn,factCheckRunning:Un,loadFactCheck:ws,triggerFactCheck:Gn,backups:Yn,backupCreating:Jn,loadBackups:ks,createBackup:Qn,restoreBackup:$n,reportExporting:Xn,reportExportMsg:Zn,exportReport:ei,tourVisible:ti,tourStep:ai,tourSteps:si,maybeShowTour:ni,skipTour:ii,finishTour:li,feedbackText:oi,feedbackSubmitting:ri,submitFeedback:ci}=Dn,di=window.__quantAppLogic.nav.create({currentView:wt,selectedDate:sa,dates:Ia,loadConsensusData:Ea,hapticFeedback:s}),{viewUnit:ui,datePickerType:vi,dateFormat:mi,canNavPrev:pi,canNavNext:fi,switchView:_s,navigateDate:xs,disabledDate:gi,onDateChange:hi}=di,yi=window.__quantAppLogic.keys.create({menus:Ie,subPageNames:Qe,navigateTo:we,currentPage:Ge,currentView:wt,navigateDate:xs,switchView:_s,getLoadDashboardData:ya,refreshCalendarData:ds,getLoadAiHistory:dn,exportCSV:us,getShowBatchEvaluate:un,openAiFab:fs,toggleSidebar:te,showStockDetail:Cs}),{searchQuery:bi,searchStocks:wi,onSearchSelect:ki,shortcutHelpVisible:_i,commandPaletteVisible:xi,handleGlobalKeydown:Ss}=yi;let Oa=0;async function Cs(V){const ve=++Oa;N(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,""),Xa.value=null,h.value="daily",Ce.value=!1,kt.value="kline",lt.value=null,It.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),at.value=!0,p(()=>Ja());try{const ye=await fetch(`/api/calendar/stock/${V}?date=${sa.value}`);if(ve!==Oa)return;lt.value=await ye.json(),lt.value&&lt.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,lt.value.name)}catch{if(ve!==Oa)return;ElementPlus.ElMessage.error("加载失败"),lt.value={stock:V,name:"",total_days:0}}finally{ve===Oa&&(It.value=!1)}setTimeout(async()=>{await Yt("daily"),Ya()},500),as(V)}const Si={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},Ci={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function qi(V){return Si[V]||"var(--text-tertiary)"}function Ei(V){return Ci[V]||"var(--bg-hover)"}const Mi=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:Ce,stockDetailVisible:at,stockDetailTab:kt,stockDetail:lt,disposeStockKline:vs}):{},{chatSessions:Ti,chatHistoryView:Pi,selectedChatIds:Di,expandedChatDates:Ri,expandedChatMonths:zi,expandedChatStocks:Ai,chatHistoryLoading:Li,chatHistoryError:Ii,allChatSessionsFlat:Ni,chatGroupedByDate:Oi,chatGroupedByMonth:ji,chatGroupedByStock:Vi,toggleSelectChat:Fi,toggleSelectChatDate:Hi,toggleSelectChatMonth:Bi,toggleSelectChatStock:Ki,toggleChatDateExpand:Wi,toggleChatMonthExpand:Ui,toggleChatStockExpand:Gi,selectAllChatSessions:Yi,deleteSelectedChatSessions:Ji,viewChatSession:Qi,loadChatHistory:qs,deleteChatSession:$i,renderMarkdown:Xi,stockChatInput:Zi,stockChatMessages:el,stockChatLoading:tl,stockChatError:al,askStockSend:sl,askStockQuick:nl}=Mi,il=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:ge,applyTheme:ra,allMenuDefs:Ne,loadGroupConfig:Ue}):{},{userList:ll,userSearch:ol,groupFilter:rl,userPageTab:cl,expandedGroups:dl,addMemberGroupMap:ul,filteredUsers:vl,toggleGroupExpand:ml,removeMemberFromGroupInline:pl,addMemberToGroupInline:fl,changeUserGroup:gl,showAddUser:hl,editingUser:yl,userForm:bl,savingUser:wl,editingGroup:kl,menuConfigDialog:_l,memberDialog:xl,groupEditForm:Sl,subPageCache:Cl,showAddGroup:ql,addGroupForm:El,savingGroup:Ml,groupMembers:Tl,addMemberUsername:Pl,selectedMemberGroup:Dl,subPageSectionExpanded:Rl,toggleSubPageSection:zl,getGroupMemberCount:Al,getMenuEnabledCount:Ll,groupCount:Il,openMemberManager:Nl,loadGroupMembers:Ol,addMemberToGroup:jl,removeMemberFromGroup:Vl,availableUsersForGroup:Fl,onParentToggle:Hl,openMenuConfig:Bl,saveMenuConfig:Kl,deleteGroupConfig:Wl,createGroup:Ul,allGroups:Gl,getGroupName:Yl,loadAllGroups:$a,loadUsers:ja,editUser:Jl,saveUser:Ql,deleteUser:$l,toggleUserEnabled:Xl,resetUserPassword:Zl}=il,eo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:Ge,currentSubPage:et,dashboardData:_t,searchKeyword:Bt,statusFilter:J,strategyFilter:ia,strategyFilterCounts:oa}):{},{applyStrategyFilter:Tf,statusCounts:to,stockPool:ao,strategyDistribution:so,strategyPreviewCount:no,saveStrategyFilter:io,filteredConsensusRank:lo,currentPoolSize:oo,filteredStrategyCounts:ro,poolChangeBadge:co,timeBarPercent:uo,lastRefreshTime:Es,timeSinceRefresh:vo,navigateToStrategyFilter:mo}=eo,po=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:D,consensus:_a}):{},{aiResult:Xa,lastEvalTime:fo,evalHistoryComparison:go,checklistItems:ho,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ps,expandedMonths:yo,expandedStocks:Ds,poolSignals:bo,toggleMonthExpand:wo,aiHistoryView:ko,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:_o,aiCatalog:xo,aiModelsError:So,testingAllModels:Co,savingAiModels:qo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Eo,testVendorModel:Mo,testAllVendorModels:To,fetchVendorModels:Po,addVendorFromCatalog:Do,addCustomVendor:Ro,addVendorModel:zo,removeVendorModel:Ao,removeVendor:Lo,toggleVendorKeyReveal:Io,toggleVendorEdit:No,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:Oo,providerInfo:jo,aiPresets:Pf,applyPreset:Vo,onProviderChange:Fo,fetchPoolSignals:Ho,cancelPoolSignals:Qs,loadLastEvaluation:as}=po,Bo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:ge,selectedDate:sa,stockDetail:lt,stockDetailTab:kt,stockDetailVisible:at,stockDetailLoading:It,stockKlineLoaded:Ce,viewCache:fn,animateScoreEntrance:Ja,loadStockKline:Yt,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ps,expandedStocks:Ds,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Ko,evalStrategy:Wo,watchlistSort:Uo,watchlist:Go,watchlistCodes:Yo,sortedWatchlist:Jo,getWatchlistScore:Qo,getLatestScore:Df,addSearchResult:$o,evaluatedCodes:Xo,klineLoadedCodes:Zo,markKlineLoaded:$s,watchlistSearch:er,watchlistResults:tr,watchlistSearching:ar,dataRefreshConfig:sr,dataRefreshReloading:nr,dataRefreshSaving:ir,aiHistoryLoading:lr,aiHistoryError:or,aiHistoryTotal:rr,aiHistoryLoadingMore:cr,hasMoreAiHistory:dr,loadMoreAiHistory:ur,watchlistLoading:vr,doAiEvaluate:mr,loadAiHistory:Aa,deleteSingleHistory:pr,toggleSelectHistory:fr,clearSelection:gr,clearWatchlistSelection:hr,batchReevaluateHistory:yr,batchAddToWatchlist:br,batchRemoveWatchlist:wr,toggleSelectWatchlist:kr,selectAllHistory:_r,selectAllWatchlist:xr,deleteSelectedHistory:Sr,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:Cr,loadWatchlist:Zs,addToWatchlist:qr,removeFromWatchlist:Er,clearWatchlist:Mr,toggleWatchlist:Tr,showStockKline:Pr,preloadingKline:Dr,preloadWatchlistKline:en,watchlistEvaluate:Rr,batchEvaluateWatchlist:zr,batchEvaluateSelected:Ar,searchStockForWatchlist:Lr,loadDataRefreshConfig:tn,saveDataRefreshConfig:Ir,triggerDataReload:Nr,triggerDataPull:Or,dataPullRunning:jr,groupedByDate:Vr,aiHistoryByStock:Fr,groupedByMonth:Hr,aiHistoryStockCount:Br,scoreDistribution:Kr,quickEvaluate:Wr,toggleDateExpand:Ur,toggleSelectDate:Gr,toggleSelectMonth:Yr,toggleStockExpand:Jr,toggleSelectStock:Qr,registerTrendChart:$r,viewAiResult:Xr,doBatchEvaluate:Zr,realtimeQuotes:ec,realtimeDegraded:tc,realtimeWsState:ac,connectRealtimeQuotes:sc,disconnectRealtimeQuotes:nc,quoteWarningFor:ic,realtimeQuoteColor:lc,realtimePriceText:oc,realtimePctText:rc,realtimeRatioText:cc,REALTIME_DEGRADED_TEXT:dc,REALTIME_FALLBACK_TEXT:uc}=Bo,vc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Re}):{},{btStrategyOptions:mc,btSelectedStrategies:pc,toggleBtStrategy:fc,btDateRange:gc,btCapital:hc,btCommissionRate:yc,btIncludeBenchmark:bc,btRunning:wc,btResult:kc,btError:_c,btMetrics:xc,btAnnualReturns:Sc,btTrades:Cc,btStrategyMetricsRows:qc,btDrawdownRegion:Ec,runBacktestWorkbench:Mc,exportBacktestCSV:Tc,registerBacktestNavChart:Pc,btFmtNum:Dc}=vc,Rc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:D,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:Le,changeTheme:ca,autoEvaluateConfig:Za,currentUser:ge,strategyFilter:ia,applyTheme:ra,dashboardData:_t,lastRefreshTime:Es,saveAiModels:Eo}):{},{configSaving:zc,globalConfigDirty:Ac,lastSavedTime:Lc,feishuConfigOriginal:Rf,aiConfigOriginal:zf,tushareConfigOriginal:Af,tushareConfig:Ic,tushareStatus:Nc,datasourceConfig:Oc,datasourceStatus:jc,syncingData:Vc,stockCount:Fc,tradeDateCount:Hc,aiStatus:Bc,appVersion:an,showImportDialog:Kc,rateLimitConfig:Wc,rateLimitDirty:Uc,rateLimitSaving:Gc,loadRateLimit:ss,saveRateLimit:Yc,saveAiConfig:Jc,testAiApi:Qc,exportConfig:$c,importConfig:Xc,saveAllConfig:Zc,resetAllConfig:ed,testTushareConnection:td,checkTushareConnection:Fa,syncStockData:ad,loadTushareConfig:sn,loadDatasourceConfig:nn,saveDatasourceConfig:sd,testDatasource:nd,toggleDatasourceKeyReveal:id,toggleDatasourceEdit:ld,loadFeishuConfig:ns,loadAiConfig:Ha,loadUserConfig:ln,loadSystemStatus:is,loadDashboardData:ls}=Rc,od=window.__quantAppLogic.auth.create({currentUser:ge,loadUserConfig:ln,loadDates:cs,loadDashboardData:ls,loadDashboardCached:Na,loadHealthMetrics:ha,loadConsensusData:Ea,applyTheme:ra,maybeShowTour:ni,loadAiVendors:Va,loadGroupConfig:Ue,groupsConfig:he}),{loginForm:rd,logining:cd,guestLogining:dd,showChangePassword:ud,changePasswordForm:vd,changingPassword:md,showSetupWizard:pd,setupForm:fd,setupStep:gd,checkSetupWizard:hd,completeSetupWizard:yd,resetSetupWizard:bd,handleLogin:wd,handleGuestLogin:kd,handleLogout:_d,doChangePassword:xd}=od;window.__quantAppLogic.watch.register({strategyFilter:ia,currentView:wt,statusFilter:J,currentPage:Ge,currentSubPage:et,menus:Ie,currentUser:ge,strategyFilterCounts:oa,lazyTick:Wt,dates:Ia,selectedDate:sa,consensus:_a,loadConsensusData:Ea,fetchMerrillClock:q,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:Aa,preloadWatchlistKline:en,loadChatHistory:qs,loadSystemStatus:is,checkTushareConnection:Fa,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:ha,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:nn,loadFeishuConfig:ns,loadAiConfig:Ha,loadAiVendors:Va,loadRateLimit:ss,loadDataRefreshConfig:tn,loadBackups:ks,loadAllGroups:$a,loadUsers:ja,stockDetailTab:kt,stockDetailVisible:at,stockKlineLoaded:Ce,loadStockKline:Yt,currentKlinePeriod:h,showMerrillDetail:A,indexDetailVisible:Wa,restoreDialogFocus:i});const Sd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:ra,menus:Ie,currentPage:Ge,currentSubPage:et,currentView:wt,currentKlinePeriod:h,selectedDate:sa,dates:Ia,loadDates:cs,loadConsensusData:Ea,loadDashboardCached:Na,appVersion:an,themes:fe,fetchMarketData:Ga,fetchMerrillStages:X,fetchMerrillClock:q,loadMerrillTimeline:U,showTimelineStage:re,merrillTimeline:pe,timelineLoading:de,loadAiConfig:Ha,loadAiVendors:Va,loadAiCatalog:Is,currentUser:ge,loadUserConfig:ln,loadAutoEvaluateConfig:Xs,loadGroupConfig:Ue,loadUsers:ja,loadAllGroups:$a,loadAiHistory:Aa}),{runOnMounted:Cd}=Sd;window.__quantGoPage=async(V,ve)=>{try{const ye=window.__lazyLoaders&&window.__lazyLoaders[V];ye&&await ye()}catch(ye){console.warn("[lazy] 页面组件加载失败",V,ye)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(ye=>{ye&&ye.name&&!ye.__quantRegistered&&(window.__quantApp.component(ye.name,ye),ye.__quantRegistered=!0)}),Wt&&Wt.value++,Ge.value=V,ve&&(et.value=ve)};let Ma;u(Ge,async V=>{var ve;s("light");try{const ye=Ne.find(function(Fe){return Fe.key===V});document.title=(ye?ye.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",V),V!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:V})}).catch(()=>{})}catch(ye){console.warn("pageView track failed:",ye)}if(Ma&&(clearInterval(Ma),Ma=null),V==="strategies")await Na(),Ma=setInterval(()=>{Na().catch(()=>{})},5*60*1e3);else if(V==="calendar")sa.value&&await Ea();else if(V==="ai")gs(),Qa(),await Aa();else if(V==="system"){if(!sa.value){const Fe=await(await fetch("/api/dashboard")).json(),Ye=Fe.data||Fe;Ye.latest_date&&(sa.value=Ye.latest_date)}if(sa.value){const ye=["day","week","month","year"];for(const Fe of ye)try{const Ft=await(await fetch(`/api/view/${Fe}/${sa.value}?status=all`)).json();oa.value[Fe]=Ft.stocks||[]}catch(Ye){console.warn("loadConsensusData view load failed:",Ye)}(!_a.value||_a.value.length===0)&&(_a.value=oa.value.day||[])}((ve=ge.value)==null?void 0:ve.role)==="admin"&&(await ja(),await ns(),await sn(),await is(),await Ha(),await ss(),Fa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Fa,36e5)))}}),f(async()=>{await Cd()}),ke(),U(),t(()=>{Ma&&clearInterval(Ma),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",z)});function qd(V,ve=2){return V==null||V===""||isNaN(Number(V))?"--":Number(V).toFixed(ve)}return{currentPage:Ge,pageComp:gt,currentSubPage:et,sidebarCollapsed:se,menus:Ie,navMode:st,setNavMode:Rt,tabGroups:Oe,openTab:ct,closeTab:Ot,activateTab:Et,fmtNum:qd,sanitizeHtml:E,keyClick:_,isOnline:l,currentUser:ge,allMenuDefs:Ne,t:x,locale:o,changeLanguage:b,currentPageName:yt,subPageNames:Qe,searchQuery:bi,searchStocks:wi,onSearchSelect:ki,selectedDate:sa,onDateChange:hi,disabledDate:gi,refreshCalendarData:ds,exportCSV:us,viewNote:hn,loading:mn,lastLoadTime:gn,resetSetupWizard:bd,showChangePassword:ud,themes:fe,currentTheme:Le,changeTheme:ca,changeThemeMode:$t,changeThemeHue:ka,handleLogout:_d,themeHues:Me,themeHueNames:ze,themeHue:He,themeMode:mt,hueColor:Mt,hueName:it,marketData:bn,merrillData:R,merrillTimeline:pe,timelineLoading:de,merrillStagesConfig:P,fetchMerrillStages:X,merrillSnapshots:ee,merrillSnapshotsTotal:xe,healthMetrics:Je,feishuConfig:ps,feishuTestStatus:Rn,feishuTestMessage:zn,shortcutHelpVisible:_i,shortcutHelpItems:Se,commandPaletteVisible:xi,tourVisible:ti,tourStep:ai,tourSteps:si,skipTour:ii,finishTour:li,backups:Yn,backupCreating:Jn,loadBackups:ks,createBackup:Qn,restoreBackup:$n,reportExporting:Xn,reportExportMsg:Zn,exportReport:ei,sysMonitor:jn,analyticsRank:Vn,analyticsDays:Fn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Hn,loadHealthDetail:bs,reviewTriggering:Bn,triggerMarketReview:Kn,factCheck:Wn,factCheckRunning:Un,loadFactCheck:ws,triggerFactCheck:Gn,strategyRecommendations:Nn,aiUsage:On,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:In,openAiFab:fs,feedbackText:oi,feedbackSubmitting:ri,submitFeedback:ci,backtestStrategies:Re,backtestStrategy:Xe,backtestRange:Ze,backtestCapital:tt,backtestRunning:xt,backtestResult:St,runBacktest:Kt,btStrategyOptions:mc,btSelectedStrategies:pc,toggleBtStrategy:fc,btDateRange:gc,btCapital:hc,btCommissionRate:yc,btIncludeBenchmark:bc,btRunning:wc,btResult:kc,btError:_c,btMetrics:xc,btAnnualReturns:Sc,btTrades:Cc,btStrategyMetricsRows:qc,btDrawdownRegion:Ec,runBacktestWorkbench:Mc,exportBacktestCSV:Tc,registerBacktestNavChart:Pc,btFmtNum:Dc,fetchMarketData:Ga,fetchMerrillClock:q,testFeishuWebhook:An,saveFeishuConfig:Ln,merrillClockConfig:ae,merrillClockLastUpdated:O,merrillReevalResult:T,merrillReevalLoading:B,saveMerrillClockConfig:oe,doMerrillReevaluate:De,dataRefreshConfig:sr,dataRefreshReloading:nr,dataRefreshSaving:ir,loadDataRefreshConfig:tn,saveDataRefreshConfig:Ir,triggerDataReload:Nr,triggerDataPull:Or,dataPullRunning:jr,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:wn,indexAiLoading:kn,loadCachedIndexEval:xn,showIndexDetail:_n,doIndexAiEvaluate:Sn,klinePeriods:za,currentKlinePeriod:h,klineLoading:n,indexKlineLoading:ne,stockKlineLoaded:Ce,indexKlineLoaded:$e,klineDegradeNote:F,klineShowMinutes:ga,toggleKlineShowMinutes:Ra,loadStockKline:Yt,switchKlinePeriod:da,loadIndexKline:Ct,switchIndexKlinePeriod:ua,zoomKlineRange:Cn,MA_LINES:Tt,klineMaVisible:qe,toggleKlineMa:We,scoreAnimating:qn,scoreDelta:En,scorePulse:Mn,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:A,merrillDetailData:G,showStageDetail:Y,getCharLabel:m,getAssetName:H,getRankColor:ue,levelColor:qi,levelBg:Ei,timelineStages:j,getStageAngle:ce,getCycleProgress:W,getCurrentStageMonths:y,getStageTotalMonths:c,isStageCompleted:S,stages:K,indicatorList:ie,dimensionScoreList:Q,confidenceColor:I,views:At,currentView:wt,statusFilter:J,loginForm:rd,logining:cd,guestLogining:dd,dashboardData:_t,loadingView:pn,dates:Ia,consensus:_a,searchKeyword:Bt,stockDetailVisible:at,stockDetailTab:kt,stockDetail:lt,stockDetailLoading:It,detailDisplayMode:ea,setDetailDisplayMode:ta,isNarrow:aa,detailSplitEnabled:na,splitWidth:Ht,setSplitWidth:Gt,SPLIT_DEFAULT_PCT:Qt,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:ll,showAddUser:hl,editingUser:yl,userForm:bl,savingUser:wl,userSearch:ol,filteredUsers:vl,groupFilter:rl,userPageTab:cl,expandedGroups:dl,addMemberGroupMap:ul,toggleGroupExpand:ml,removeMemberFromGroupInline:pl,addMemberToGroupInline:fl,changeUserGroup:gl,statusCounts:to,stockPool:ao,poolSignals:bo,aiResult:Xa,aiHistory:Ms,groupedByDate:Vr,groupedByMonth:Hr,expandedDates:Ps,expandedMonths:yo,aiHistoryByStock:Fr,aiHistoryStockCount:Br,expandedStocks:Ds,aiHistoryView:ko,aiHistoryLoading:lr,aiHistoryError:or,aiHistoryTotal:rr,aiHistoryLoadingMore:cr,hasMoreAiHistory:dr,loadMoreAiHistory:ur,watchlistLoading:vr,scoreDistribution:Kr,quickEvalStock:Ko,evalStrategy:Wo,checklistItems:ho,evalHistoryComparison:go,quickEvaluate:Wr,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:qa,toggleDateExpand:Ur,toggleMonthExpand:wo,toggleSelectDate:Gr,toggleSelectMonth:Yr,toggleSelectStock:Qr,toggleStockExpand:Jr,registerTrendChart:$r,selectedWatchlistCodes:Rs,clearWatchlistSelection:hr,toggleSelectWatchlist:kr,selectAllHistory:_r,selectAllWatchlist:xr,batchRemoveWatchlist:wr,batchEvaluateSelected:Ar,batchReevaluateHistory:yr,batchAddToWatchlist:br,viewUnit:ui,datePickerType:vi,dateFormat:mi,canNavPrev:pi,canNavNext:fi,handleLogin:wd,handleGuestLogin:kd,switchView:_s,navigateDate:xs,navigateTo:we,loadDashboardData:ls,loadConsensusData:Ea,showStockDetail:Cs,doAiEvaluate:mr,doBatchEvaluate:Zr,loadAiHistory:Aa,loadLastEvaluation:as,lastEvalTime:fo,viewAiResult:Xr,saveAiConfig:Jc,testAiApi:Qc,exportConfig:$c,importConfig:Xc,configSaving:zc,configChanged:D,watchlist:Go,watchlistCodes:Yo,watchlistSearch:er,watchlistResults:tr,watchlistSearching:ar,watchlistSort:Uo,sortedWatchlist:Jo,getWatchlistScore:Qo,addSearchResult:$o,evaluatedCodes:Xo,klineLoadedCodes:Zo,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:qr,removeFromWatchlist:Er,clearWatchlist:Mr,searchStockForWatchlist:Lr,toggleWatchlist:Tr,batchEvaluateWatchlist:zr,watchlistEvaluate:Rr,showStockKline:Pr,preloadWatchlistKline:en,preloadingKline:Dr,realtimeQuotes:ec,realtimeDegraded:tc,realtimeWsState:ac,connectRealtimeQuotes:sc,disconnectRealtimeQuotes:nc,quoteWarningFor:ic,realtimeQuoteColor:lc,realtimePriceText:oc,realtimePctText:rc,realtimeRatioText:cc,REALTIME_DEGRADED_TEXT:dc,REALTIME_FALLBACK_TEXT:uc,toggleSelectHistory:fr,clearSelection:gr,deleteSingleHistory:pr,deleteSelectedHistory:Sr,saveAutoEvaluateConfig:Cr,editUser:Jl,saveUser:Ql,deleteUser:$l,loadUsers:ja,allGroups:Gl,loadAllGroups:$a,getGroupName:Yl,toggleUserEnabled:Xl,resetUserPassword:Zl,selectedPreset:Oo,applyPreset:Vo,onProviderChange:Fo,providerInfo:jo,globalConfigDirty:Ac,lastSavedTime:Lc,tushareConfig:Ic,tushareStatus:Nc,syncingData:Vc,stockCount:Fc,tradeDateCount:Hc,aiStatus:Bc,appVersion:an,showImportDialog:Kc,rateLimitConfig:Wc,rateLimitDirty:Uc,rateLimitSaving:Gc,loadRateLimit:ss,saveRateLimit:Yc,saveAllConfig:Zc,resetAllConfig:ed,testTushareConnection:td,syncStockData:ad,loadTushareConfig:sn,loadFeishuConfig:ns,loadSystemStatus:is,loadAiConfig:Ha,aiVendors:_o,aiCatalog:xo,aiModelsError:So,testingAllModels:Co,savingAiModels:qo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:Mo,testAllVendorModels:To,fetchVendorModels:Po,addVendorFromCatalog:Do,addCustomVendor:Ro,addVendorModel:zo,removeVendorModel:Ao,removeVendor:Lo,toggleVendorKeyReveal:Io,toggleVendorEdit:No,checkTushareConnection:Fa,datasourceConfig:Oc,datasourceStatus:jc,loadDatasourceConfig:nn,saveDatasourceConfig:sd,testDatasource:nd,toggleDatasourceKeyReveal:id,toggleDatasourceEdit:ld,strategyFilter:ia,strategyFilterOptions:wa,strategyFilterCounts:oa,strategyPreviewCount:no,saveStrategyFilter:io,filteredConsensusRank:lo,currentPoolSize:oo,filteredStrategyCounts:ro,strategyDistribution:so,expandedStrategies:Pa,poolChangeBadge:co,timeBarPercent:uo,timeSinceRefresh:vo,navigateToStrategyFilter:mo,showUserMenu:Ut,toggleSidebar:te,groupsConfig:he,loadGroupConfig:Ue,editingGroup:kl,groupEditForm:Sl,showAddGroup:ql,addGroupForm:El,savingGroup:Ml,menuConfigDialog:_l,memberDialog:xl,groupMembers:Tl,addMemberUsername:Pl,selectedMemberGroup:Dl,subPageSectionExpanded:Rl,toggleSubPageSection:zl,getGroupMemberCount:Al,getMenuEnabledCount:Ll,groupCount:Il,openMemberManager:Nl,loadGroupMembers:Ol,addMemberToGroup:jl,removeMemberFromGroup:Vl,availableUsersForGroup:Fl,subPageCache:Cl,onParentToggle:Hl,openMenuConfig:Bl,saveMenuConfig:Kl,deleteGroupConfig:Wl,createGroup:Ul,changePasswordForm:vd,changingPassword:md,doChangePassword:xd,showSetupWizard:pd,setupForm:fd,setupStep:gd,checkSetupWizard:hd,completeSetupWizard:yd,chatSessions:Ti,chatHistoryView:Pi,selectedChatIds:Di,expandedChatDates:Ri,expandedChatMonths:zi,expandedChatStocks:Ai,chatHistoryLoading:Li,chatHistoryError:Ii,allChatSessionsFlat:Ni,chatGroupedByDate:Oi,chatGroupedByMonth:ji,chatGroupedByStock:Vi,toggleSelectChat:Fi,toggleSelectChatDate:Hi,toggleSelectChatMonth:Bi,toggleSelectChatStock:Ki,toggleChatDateExpand:Wi,toggleChatMonthExpand:Ui,toggleChatStockExpand:Gi,selectAllChatSessions:Yi,deleteSelectedChatSessions:Ji,viewChatSession:Qi,loadChatHistory:qs,deleteChatSession:$i,renderMarkdown:Xi,stockChatInput:Zi,stockChatMessages:el,stockChatLoading:tl,stockChatError:al,askStockSend:sl,askStockQuick:nl,onTouchStart:Tn,onTouchEnd:Pn,hapticFeedback:s}}})();Sa.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=nm;window.__quantComponents.Header=tp;window.__quantComponents.SubNav=pp;window.__quantComponents.MobileNav=zp;window.__quantComponents.StockList=pf;window.__quantComponents.DetailSplit=yf;window.__quantComponents.TopTabs=Ef;window.__quantComponents.AppIcon=Sa;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Mf();
