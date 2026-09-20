var Cd=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as qd,L as ve,O as ca,Z as Ed,au as Gt,M as fe,P as Ce,aW as Md,a0 as Fe,_ as Ve,F as nt,al as wt,S as lt,a1 as it,X as ra,ai as Lt,q as Da,o as Ba,a8 as rs,r as Pt,e as tt,av as Td,Y as La,$ as Sa,R as Dd,aC as oa,T as Pd,Q as ia,p as Rd,n as zd}from"./vendor-vue-DDF9zi1T.js";import{e as Ad,E as Ld,a as Id,b as Nd,c as Od,z as jd}from"./vendor-ep-VOop1zGa.js";import{C as Vd,a as Fd,W as Hd,I as Bd,S as Kd,B as Wd,F as Ud,b as Gd,c as Yd,d as Jd,e as Qd,f as $d,P as Xd,g as Zd,h as eu,i as tu,T as au,j as su,L as lu,k as iu,G as nu,U as ou,l as ru,m as cu,n as du,D as uu,o as vu,p as mu,M as pu,q as fu,R as gu,r as hu,s as yu,K as bu,t as wu,u as ku,v as _u,w as xu,x as Su,y as Cu,z as qu,A as Eu,E as Mu,H as Tu,O as Du,J as Pu,N as Ru,Q as zu,V as Au,X as Lu,Y as Iu,Z as Nu,_ as Ou,$ as ju,a0 as Vu,a1 as Fu,a2 as Hu,a3 as Bu,a4 as Ku,a5 as Wu,a6 as Uu,a7 as Gu,a8 as Yu,a9 as Ju,aa as Qu,ab as $u,ac as Xu,ad as Zu,ae as ev,af as tv,ag as av,ah as sv,ai as lv,aj as iv,ak as nv,al as ov,am as rv,an as cv,ao as dv,ap as uv,aq as vv,ar as mv,as as pv,at as fv,au as gv,av as hv,aw as yv,ax as bv,ay as wv,az as kv,aA as _v,aB as xv,aC as Sv,aD as Cv,aE as qv,aF as Ev,aG as Mv,aH as Tv,aI as Dv,aJ as Pv,aK as Rv,aL as zv,aM as Av,aN as Lv,aO as Iv,aP as Nv,aQ as Ov}from"./vendor-lucide-DidEUx9K.js";var Cf=Cd((Nf,Ie)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))t(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const P of m.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&t(P)}).observe(document,{childList:!0,subtree:!0});function p(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function t(d){if(d.ep)return;d.ep=!0;const m=p(d);fetch(d.href,m)}})();window.Vue=qd;const da=Ad||{};window.ElementPlus=da;da.ElMessage=da.ElMessage||Ld;da.ElMessageBox=da.ElMessageBox||Id;da.ElNotification=da.ElNotification||Nd;da.ElLoading=da.ElLoading||Od;window.ElementPlusLocaleZhCn={default:jd};(function(){const a=[45,220,0,140,270,320],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},p={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(i,h,g){return"hsl("+i+", "+h+"%, "+g+"%)"}function d(i,h,g){h=h/100,g=g/100;const C=function(o){return(o+i/30)%12},D=h*Math.min(g,1-g),_=function(o){return g-D*Math.max(-1,Math.min(C(o)-3,Math.min(9-C(o),1)))};return Math.round(255*_(0))+", "+Math.round(255*_(8))+", "+Math.round(255*_(4))}function m(i){const h=d(i,75,42);return{"--primary-color":t(i,75,42),"--primary-rgb":h,"--color-primary":t(i,75,42),"--qc-primary":t(i,75,42),"--qc-primary-50":t(i,90,96),"--qc-primary-100":t(i,85,92),"--qc-primary-200":t(i,80,84),"--qc-primary-300":t(i,75,72),"--qc-primary-400":t(i,70,58),"--qc-primary-500":t(i,75,48),"--qc-primary-600":t(i,80,42),"--qc-primary-700":t(i,85,35),"--qc-primary-800":t(i,88,28),"--qc-primary-900":t(i,90,20),"--qc-primary-foreground":"#ffffff","--text-link":t(i,70,40),"--secondary-color":t(i,70,55),"--card-border":t(i,55,82),"--bg-selected":"rgba("+h+", 0.08)","--btn-primary-bg":t(i,80,32),"--btn-primary-border":t(i,80,32),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(i,82,28),"--btn-primary-hover-border":t(i,82,28),"--btn-primary-active-bg":t(i,85,24),"--btn-primary-active-border":t(i,85,24),"--btn-primary-plain-bg":"rgba("+h+", 0.08)","--btn-primary-plain-border":"rgba("+h+", 0.25)","--btn-primary-plain-color":t(i,80,32),"--btn-primary-plain-hover-bg":"rgba("+h+", 0.15)","--btn-primary-plain-hover-border":t(i,80,32),"--btn-primary-text-color":t(i,80,32),"--gradient":"linear-gradient(135deg, "+t(i,80,28)+" 0%, "+t(i,76,34)+" 50%, "+t(i,70,44)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(i,76,34)+" 0%, "+t(i,85,26)+" 100%)","--qc-nav-item-active":t(i,80,35),"--qc-nav-item-active-bg":t(i,85,92),"--qc-nav-item-active-border":t(i,75,48),"--qc-nav-badge-bg":t(i,85,92),"--qc-nav-badge-text":t(i,80,35),"--qc-ring":t(i,70,58)}}function P(i){const h=d(i,85,65);return{"--primary-color":t(i,85,65),"--primary-rgb":h,"--color-primary":t(i,85,65),"--qc-primary":t(i,90,65),"--qc-primary-50":t(i,50,18),"--qc-primary-100":t(i,55,22),"--qc-primary-200":t(i,55,26),"--qc-primary-300":t(i,60,30),"--qc-primary-400":t(i,65,38),"--qc-primary-500":t(i,80,52),"--qc-primary-600":t(i,90,65),"--qc-primary-700":t(i,92,72),"--qc-primary-800":t(i,90,80),"--qc-primary-900":t(i,92,88),"--qc-primary-foreground":"#101014","--text-link":t(i,85,65),"--secondary-color":t(i,70,60),"--card-border":t(i,30,25),"--bg-selected":"rgba("+h+", 0.10)","--btn-primary-bg":t(i,85,65),"--btn-primary-border":t(i,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(i,80,72),"--btn-primary-hover-border":t(i,80,72),"--btn-primary-active-bg":t(i,75,80),"--btn-primary-active-border":t(i,75,80),"--btn-primary-plain-bg":"rgba("+h+", 0.08)","--btn-primary-plain-border":"rgba("+h+", 0.25)","--btn-primary-plain-color":t(i,85,65),"--btn-primary-plain-hover-bg":"rgba("+h+", 0.15)","--btn-primary-plain-hover-border":t(i,85,65),"--btn-primary-text-color":t(i,85,65),"--gradient":"linear-gradient(135deg, "+t(i,80,35)+" 0%, "+t(i,85,50)+" 50%, "+t(i,85,65)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(i,85,65)+" 0%, "+t(i,80,40)+" 100%)","--qc-nav-item-active":t(i,85,65),"--qc-nav-item-active-bg":"rgba("+h+", 0.10)","--qc-nav-item-active-border":t(i,85,65),"--qc-nav-badge-bg":"rgba("+h+", 0.12)","--qc-nav-badge-text":t(i,85,65),"--qc-ring":t(i,85,65)}}function f(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function c(i){return i=parseInt(i,10),isNaN(i)?45:Math.max(0,Math.min(359,i))}function k(i,h){let g=i||"light",C=h==null||h===""?null:h;if(e[i]){const l=e[i];g=l[0],C==null&&(C=l[1])}g==="system"&&(g=f()?"dark":"light");const D=g==="dark";C=c(C??45);const _=document.documentElement;_.setAttribute("data-theme",D?"dark-pro":"gold"),_.setAttribute("data-theme-mode",D?"dark":"light");const o=D?P(C):m(C);Object.keys(o).forEach(function(l){_.style.setProperty(l,o[l])});try{localStorage.setItem("quant_theme_mode",D?"dark":"light"),localStorage.setItem("quant_theme_hue",String(C))}catch{}return{mode:D?"dark":"light",hue:C}}function n(){const i=localStorage.getItem("quant_theme");if(!i||!e[i]||localStorage.getItem("quant_theme_hue")!==null)return null;const h=e[i];return{mode:h[0],hue:h[1]}}function x(){const i=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let h=i.theme||"system",g=i.theme_hue!=null&&i.theme_hue!==""?i.theme_hue:null;const C=n();return g==null&&C&&(h=C.mode,g=C.hue),g==null&&(g=45),k(h,g)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:p,generateLightTokens:m,generateDarkTokens:P,migrateLegacyTheme:n,applyTheme:k,init:x},x()})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],p={};let t=a,d=null;function m(){return d&&typeof d=="object"&&"value"in d?d.value||a:t}function P(i,h){return e.indexOf(i)===-1?!1:(p[i]=h&&typeof h=="object"?h:{},!0)}function f(i){const h=e.indexOf(i)!==-1?i:a;return t=h,d&&typeof d=="object"&&"value"in d&&(d.value=h),typeof document<"u"&&document.documentElement.setAttribute("lang",h),t}function c(){return m()}function k(i){if(i&&typeof i=="object"&&"value"in i){d=i;const h=e.indexOf(i.value)!==-1?i.value:a;i.value=h,t=h}return t}function n(i,h){const g=m(),C=p[g]||{};let D=i in C?C[i]:null;if(D==null&&g!=="en"){const _=p.en||{};D=i in _?_[i]:null}return D==null&&(D=String(i)),h&&typeof h=="object"&&Object.keys(h).forEach(function(_){D=D.replace(new RegExp("\\{"+_+"\\}","g"),String(h[_]))}),D}const x={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:p,registerLocale:P,setLocale:f,getLocale:c,bindLocale:k,t:n};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=x),x});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let p=[];function t(g){const C=String(g||"");let D="";for(const _ of C){const o=a[_];o?D+=o.charAt(0):/[a-zA-Z0-9]/.test(_)&&(D+=_.toLowerCase())}return D}function d(g){const C=String(g||"");let D="";for(const _ of C){const o=a[_];o?D+=o:/[a-zA-Z0-9]/.test(_)&&(D+=_.toLowerCase())}return D}function m(g){return String(g||"").trim().toLowerCase()}function P(g,C){const D=(C.code||"").toLowerCase();return/^\d+$/.test(g)?D.indexOf(g)!==-1:/[\u4e00-\u9fa5]/.test(g)?(C.name||"").toLowerCase().indexOf(g)!==-1:D.indexOf(g)!==-1||(C.initials||t(C.name)).indexOf(g)!==-1||(C.pinyin||d(C.name)).indexOf(g)!==-1}function f(g){const C={},D=[],_=function(o,l,v){!o||C[o]||(C[o]=!0,D.push({code:o,name:l||o,source:v||"core",initials:t(l||o),pinyin:d(l||o)}))};return e.forEach(function(o){_(o.code,o.name,"core")}),(g||[]).forEach(function(o){_(o.code,o.name,"extra")}),D}function c(g,C){const D=m(g);if(!D||!C||!C.length)return[];const _=D.split(/[\s,，、;；]+/).filter(Boolean);return _.length?C.filter(function(o){return _.every(function(l){return P(l,o)})}).slice(0,20).map(function(o){return{code:o.code,name:o.name,source:o.source||"core"}}):[]}function k(g){Array.isArray(g)&&(p=p.concat(g))}function n(){return p.slice()}function x(){return f(p)}function i(g){return c(g,x())}const h={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:d,normalizeQuery:m,matchToken:P,buildStockIndex:f,searchStocksByQuery:c,registerExtraStocks:k,getExtraStocks:n,getStockIndex:x,searchCoreStocks:i};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=h),h});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},p=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function d(l){return l=parseInt(l,10),!isNaN(l)&&l>=0&&l<=360}const m={light:"classic-white",dark:"dark-pro"};function P(){if(typeof localStorage>"u")return{};try{const l=localStorage.getItem(a);if(!l)return{};const v=JSON.parse(l);return v&&typeof v=="object"?v:{}}catch{return{}}}function f(l){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(l))}catch{}}function c(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function k(){const l=Object.assign({},e,P()),v={};return p.forEach(function(j){const B=l[j];v[j]=j==="theme_hue"?d(B)?parseInt(B,10):e[j]:t[j].indexOf(B)!==-1?B:e[j]}),v}function n(l){if(p.indexOf(l)!==-1)return k()[l]}function x(l,v){return p.indexOf(l)===-1?!1:l==="theme_hue"?d(v):t[l].indexOf(v)!==-1}function i(l,v){if(!x(l,v))return!1;const j=P();return j[l]=v,f(j),c()&&g({[l]:v}),!0}function h(l){if(!l||typeof l!="object")return!1;const v={};if(Object.keys(l).forEach(function(B){x(B,l[B])&&(v[B]=l[B])}),!Object.keys(v).length)return!1;const j=Object.assign({},P(),v);return f(j),c()&&g(v),!0}function g(l){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:l})}).catch(function(){})}catch{}}async function C(){const l=k();if(!c()||typeof fetch>"u")return l;try{const v=await fetch("/api/user_config/preferences");if(v.ok){const j=await v.json();if(j.success&&j.preferences){const B=j.preferences;p.forEach(function(G){t[G].indexOf(B[G])!==-1&&(l[G]=B[G])}),f(l)}}}catch{}return l}function D(l){const v=l||n("info_density")||"comfortable",j=t.info_density.indexOf(v)!==-1?v:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",j),j}function _(l){const v=l||n("theme")||"system";if(v==="system"){let j=!1;return typeof window<"u"&&window.matchMedia&&(j=window.matchMedia("(prefers-color-scheme: dark)").matches),j?"dark":"light"}return v==="dark"||v==="light"?v:"light"}const o={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:p,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:m,getLocal:k,getPreference:n,isValidValue:x,setPreference:i,setPreferences:h,saveToBackend:g,loadPreferences:C,resolveTheme:_,applyDensity:D};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=o),o});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function p(){if(typeof localStorage>"u")return[];try{const k=localStorage.getItem(a);if(!k)return[];const n=JSON.parse(k);return Array.isArray(n)?n:[]}catch{return[]}}function t(k){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(k))}catch{}}function d(k,n){if(!k)return!1;let x=p().filter(function(i){return i.code!==k});return x.unshift({code:k,name:(n||"").toString().slice(0,32),ts:Date.now()}),x.length>10&&(x=x.slice(0,10)),t(x),!0}function m(){return p().slice(0,10)}function P(k){t(p().filter(function(n){return n.code!==k}))}function f(){t([])}const c={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:d,getRecentViewed:m,removeRecent:P,clearRecent:f};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=c),c});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:p,watch:t,onMounted:d,nextTick:m}=a;function P(r,q={}){if(typeof r=="string"&&r.startsWith("/api/")){const u=localStorage.getItem("quant_token");if(u)return{...q,headers:{...q.headers||{},Authorization:"Bearer "+u}}}return q}async function f(r,q={}){const u=P(r,q),H={"Content-Type":"application/json",...u.headers},ce=(q.method||"GET").toUpperCase(),$=ce+"|"+r,T=async()=>{const Y=await fetch(r,{...u,headers:H});if(Y.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!Y.ok){let K="";try{const Q=await Y.json();K=Q&&Q.detail||""}catch{}throw Object.assign(new Error(K||"请求失败（HTTP "+Y.status+"）"),{status:Y.status})}return await Y.json()};try{const Y=q.noLoading?T:()=>v(T);return ce==="GET"&&!q.noDedupe?await D($,Y):await Y()}catch(Y){throw Y.message==="登录已过期"?Y:(console.error("[apiFetch] "+r+":",Y.message),Object.assign(Y,{_formatted:j(Y,Y.status)}))}}function c(){return new Date().toISOString().split("T")[0]}function k(r){return r?r.split("T")[0]:""}function n(r,q="info",u=3e3){let H=document.querySelector(".toast-container");H||(H=document.createElement("div"),H.className="toast-container",document.body.appendChild(H));const ce=document.createElement("div");ce.className=`toast toast-${q}`,ce.textContent=r,H.appendChild(ce),setTimeout(()=>{ce.classList.add("leaving"),setTimeout(()=>ce.remove(),300)},u)}function x(r,q=300){let u;return function(...H){clearTimeout(u),u=setTimeout(()=>r.apply(this,H),q)}}function i(r,q=300){let u=!1;return function(...H){u||(r.apply(this,H),u=!0,setTimeout(()=>{u=!1},q))}}async function h(r,q=3e3,u=""){const H=new Promise((ce,$)=>setTimeout(()=>$(new Error("timeout")),q));try{return await Promise.race([r,H])}catch(ce){console.warn(`[timeout] ${u||"task"} failed:`,ce.message)}}const g=new Map;function C(){return g.clear(),!0}function D(r,q){if(!r||typeof q!="function")return Promise.reject(new Error("bad dedupe args"));if(g.has(r))return g.get(r);const u=Promise.resolve().then(q).finally(()=>{g.delete(r)});return g.set(r,u),u}let _=0;function o(){return _=0,!0}function l(){return _}async function v(r){_++;try{return await r()}finally{_--}}function j(r,q){if(!r)return"请求失败";if(r&&typeof r=="object"&&r.detail)return String(r.detail);if(typeof r=="string"&&r)return r;if(r&&r.message){const u=String(r.message);return/Failed to fetch|fetch failed|networkerror/i.test(u)?"网络连接失败，请检查网络后重试":u}return q?"请求失败（HTTP "+q+"）":"请求失败"}function B(r,q){if(r===q)return!0;try{return JSON.stringify(r)===JSON.stringify(q)}catch{return!1}}function G(r,q,u){const H=(r||"GET").toUpperCase();let ce="";if(u)try{const $={};Object.keys(u).sort().forEach(T=>{$[T]=u[T]}),ce=JSON.stringify($)}catch{ce=""}return H+"|"+q+"|"+ce}class J{constructor(){this._map=new Map,this._exp=new Map}get(q){const u=this._exp.get(q);if(u!=null){if(Date.now()>u){this.delete(q);return}return this._map.get(q)}}set(q,u,H){return this._map.set(q,u),this._exp.set(q,Date.now()+(H>0?H:-1)),u}delete(q){this._map.delete(q),this._exp.delete(q)}clear(){this._map.clear(),this._exp.clear()}has(q){return this.get(q)!==void 0}get size(){return this._map.size}}function ae(r){const q=new J,u=r!=null&&r>0?r:15e3;return{store:q,defaultTtl:u,get:H=>q.get(H),set:(H,ce,$)=>q.set(H,ce,$??u),delete:H=>q.delete(H),clear:()=>q.clear(),size:()=>q.size}}const L=new Set;async function E(r){const q=r&&r.cache,u=r&&r.key,H=r&&(r.fetchFn||r.fetcher),ce=r&&r.ttl;if(!q||!u||typeof H!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(L.has(u))return{ok:!1,changed:!1,skipped:!0,fresh:null};L.add(u);try{const $=q.get(u);let T;try{T=await H()}catch(K){return r.onError&&r.onError(K),{ok:!1,changed:!1,fresh:null}}const Y=$!==void 0&&!B($,T);return q.set(u,T,ce),r.apply&&r.apply(T,$),$!==void 0&&(Y?r.onChanged&&r.onChanged(T,$):r.onUnchanged&&r.onUnchanged(T,$)),{ok:!0,changed:Y,fresh:T}}finally{L.delete(u)}}const R=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function W(r,q={}){if(r==null)return"";const u=q&&q.allow||R,H=new Set(u.map(Y=>String(Y).toUpperCase()));let ce;try{ce=new DOMParser().parseFromString(String(r),"text/html")}catch{return String(r).replace(/[<>&]/g,K=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[K])}const $=ce.body||ce;function T(Y){Array.from(Y.childNodes).forEach(K=>{if(K.nodeType===1){const Q=String(K.tagName).toUpperCase();if(H.has(Q))Array.from(K.attributes).forEach(X=>{const ee=X.name.toLowerCase(),be=(X.value||"").trim().toLowerCase();(ee.startsWith("on")||(ee==="href"||ee==="src"||ee==="xlink:href")&&be.startsWith("javascript:")||ee==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(be))&&K.removeAttribute(X.name),ee==="href"&&!/^(https?:|mailto:|#|\/)/.test(be)&&K.removeAttribute("href")}),Q==="A"&&K.setAttribute("rel","noopener noreferrer"),T(K);else{const X=K.parentNode;for(;K.firstChild;)X.insertBefore(K.firstChild,K);X.removeChild(K)}}else if(K.nodeType!==3){if(K.nodeType===8)K.parentNode&&K.parentNode.removeChild(K);else if(K.nodeType===4){const Q=ce.createTextNode(K.nodeValue||"");K.parentNode&&K.parentNode.replaceChild(Q,K)}}})}return T($),$.innerHTML}const ie="/api/openapi",Z="/api/market/ws/quotes",ne=1,I=2.5,V="数据不可达",z="实时不可用，不刷新";function w(){const r=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",q=typeof location<"u"?location.host:"localhost:8001";return r+"//"+q+Z}function M(r,q){if(!r)return null;const u=q||{riseSpeed:ne,volumeRatio:I},H=u.riseSpeed!=null?u.riseSpeed:ne,ce=u.volumeRatio!=null?u.volumeRatio:I,$=parseFloat(r.rise_speed);if(!isNaN($)&&Math.abs($)>H)return $>0?"涨速预警":"跌速预警";const T=parseFloat(r.volume_ratio);return!isNaN(T)&&T>ce?"放量预警":null}function oe(r){const q=Number(r);return r==null||isNaN(q)?null:q}const y={apiFetch:f,withAuthHeaders:P,getToday:c,formatDate:k,withTimeout:h,showToast:n,debounce:x,throttle:i,resetInFlight:C,dedupeRequest:D,resetLoading:o,loadingCount:l,withLoading:v,formatApiError:j,jsonEquals:B,makeCacheKey:G,CacheStore:J,createTtlCache:ae,silentRefresh:E,sanitizeHtml:W,OPENAPI_ROUTE_BASE:ie,REALTIME_WS_PATH:Z,WARN_RISE_SPEED_THRESHOLD:ne,WARN_VOLUME_RATIO_THRESHOLD:I,REALTIME_DEGRADED_TEXT:V,REALTIME_FALLBACK_TEXT:z,buildRealtimeWsUrl:w,checkQuoteWarning:M,quoteFmt:{price:function(r){const q=oe(r);return q===null?"--":q.toFixed(2)},pct:function(r){const q=oe(r);return q===null?"--":(q>0?"+":"")+q.toFixed(2)+"%"},num:function(r){const q=oe(r);return q===null?"--":q.toFixed(2)},color:function(r){const q=r?r.change_pct:null,u=oe(q);return u===null?"":u>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=y),typeof Ie<"u"&&Ie.exports&&(Ie.exports=y)})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(x,i){return x+"/"+i}function p(x,i,h,g){var C=x[i]||[],D=C.findIndex(function(l){return l.subPage===h});if(D!==-1)return{groups:x,activeKey:e(i,h)};var _=C.concat([{subPage:h,title:g}]);_.length>a&&(_=d(_));var o=Object.assign({},x,t({},i,_));return{groups:o,activeKey:e(i,h)}}function t(x,i,h){return x[i]=h,x}function d(x){if(x.length<=a)return x;var i=x.length>1?1:0;return x.filter(function(h,g){return g!==i})}function m(x,i,h,g){var C=x[i]||[],D=C.findIndex(function(v){return v.subPage===h});if(D===-1)return{groups:x,nextActive:null};var _=C.filter(function(v){return v.subPage!==h}),o=Object.assign({},x,t({},i,_)),l=null;return h===g&&(_[D]?l=_[D].subPage:_[D-1]?l=_[D-1].subPage:l=null),{groups:o,nextActive:l}}function P(x){return x&&x.length?x[0]:""}function f(x,i){return x[i]||[]}function c(x,i,h){var g=x[i]||[],C=g.filter(function(_){return _.subPage===h}),D=Object.assign({},x,t({},i,C));return{groups:D,activeKey:C.length?e(i,C[0].subPage):null}}function k(x,i){var h=Object.assign({},x,t({},i,[]));return{groups:h,activeKey:null}}function n(x,i,h,g){var C=(x[i]||[]).slice();if(h<0||h>=C.length)return{groups:x};var D=C.splice(h,1)[0];return C.splice(Math.max(0,Math.min(g,C.length)),0,D),{groups:Object.assign({},x,t({},i,C))}}return{MAX_TABS:a,openTab:p,closeTab:m,getDefaultTab:P,tabsOf:f,evictOldest:d,closeOthers:c,closeAll:k,reorder:n,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var nl=typeof Ie=="object"&&Ie.exports?Ie.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;nl&&(window.__quantModules.tabsCore=nl)}(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",p="nav_mode";function t(n){return a.indexOf(n)!==-1?n:e}function d(n){return t(n)==="subnav"}function m(n){return t(n)==="tree"}function P(n){return t(n)==="toptab"}function f(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function c(){var n=f(),x=e;if(n)try{x=t(n.getItem(p))}catch{}return{navMode:x}}function k(n){var x=f();if(!(!x||!n))try{n.navMode!==void 0&&x.setItem(p,t(n.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:d,treeChildrenVisible:m,topTabsVisible:P,readPrefs:c,writePrefs:k}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var ol=typeof Ie=="object"&&Ie.exports?Ie.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;ol&&(window.__quantModules.navModeCore=ol)}(function(){function e(w,M){if(!Array.isArray(w)||w.length<=M)return w;const oe=[],U=w.length/M*2;for(let y=0;y<w.length;y+=U){const r=Math.floor(y),q=Math.min(w.length,Math.ceil(y+U));let u=1/0,H=-1,ce=-1/0,$=-1;for(let T=r;T<q;T++){const Y=w[T];if(!Y)continue;const K=Y[3]!=null?Number(Y[3]):1/0,Q=Y[4]!=null?Number(Y[4]):-1/0;K<u&&(u=K,H=T),Q>ce&&(ce=Q,$=T)}H>=0&&oe.push(w[H]),$>=0&&$!==H&&oe.push(w[$])}return oe}let p=null;function t(){return typeof echarts<"u"?Promise.resolve():(p||(p=new Promise(function(w,M){const oe=document.createElement("script");oe.src="/static/lib/echarts.min.js",oe.async=!0,oe.onload=function(){typeof echarts<"u"?w():M(new Error("echarts 加载后未定义"))},oe.onerror=function(){M(new Error("echarts.min.js 加载失败"))},document.head.appendChild(oe)})),p)}function d(){const w=getComputedStyle(document.documentElement);return{primary:w.getPropertyValue("--primary-color").trim()||"#2563eb",up:w.getPropertyValue("--color-up").trim()||"#43e97b",down:w.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:w.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:w.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const m=w=>(getComputedStyle(document.documentElement).getPropertyValue(w)||"").trim();function P(){return{up:m("--color-up")||"#E63946",down:m("--color-down")||"#2E7D32",neutral:m("--color-neutral")||"#43a047",accent:m("--color-accent")||"#F59E0B",risk:m("--color-danger")||"#C62828",warn:m("--color-warning")||"#FF9800",success:m("--color-success")||"#4CAF50",primary:m("--qc-primary-600")||"#b8922a",grid:m("--chart-split")||"#e2e8f0",axis:m("--chart-axis")||"#cbd5e1",bg:m("--chart-bg")||"transparent",series:[m("--qc-primary-600")||"#b8922a",m("--qc-primary-500")||"#c49b2e",m("--qc-primary-700")||"#8f6f1f",m("--qc-primary-400")||"#d4b352",m("--color-up")||"#E63946",m("--color-down")||"#2E7D32",m("--color-accent")||"#F59E0B",m("--qc-neutral-400")||"#b8ae9f"]}}function f(w,M,oe,U=!1,y=!1){if(!M||M.length===0)return;M.length>2e3&&(M=e(M,2e3));const r=M.map(Me=>typeof Me[0]=="string"&&Me[0].indexOf("-")>=0?Me[0]:Me[0].slice(0,4)+"-"+Me[0].slice(4,6)+"-"+Me[0].slice(6,8)),q=d(),u={ma5:m("--color-accent")||"#F59E0B",ma10:m("--color-primary")||"#3B82F6",ma20:m("--color-warning")||"#8B5CF6",ma60:m("--color-success")||"#10B981"},H=M.map(Me=>[Me[1],Me[2],Me[3],Me[4]]),ce=M.map(Me=>Me[5]),$=M.map(Me=>Me[6]),T=M.map(Me=>Me[7]),Y=M.map(Me=>Me[8]),K=M.map(Me=>Me[9]),Q=M.map(Me=>Me[10]),ee=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",be=q.borderLight,Pe={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:q.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:ee,borderColor:be,textStyle:{color:q.textSecondary,fontSize:12},formatter:function(Me){if(!Me||!Me.length)return"";const qe=Me[0].dataIndex,le=M[qe];if(!le)return"";const _e=w.getOption(),ze=_e.legend&&_e.legend[0]&&_e.legend[0].selected||{},re=Ne=>ze[Ne]!==!1,te=Ne=>Ne==null||isNaN(Ne)?"--":Number(Ne).toFixed(2),ge=Ne=>Ne==null||isNaN(Ne)?"--":(Number(Ne)/1e4).toFixed(2)+"万手",Te=['<div style="font-weight:600;color:'+q.textSecondary+';">'+r[qe]+"</div>"];return Te.push("开: "+te(le[1])+"　收: "+te(le[2])),Te.push("低: "+te(le[3])+"　高: "+te(le[4])),Te.push("成交量: "+ge(le[5])),le[6]!=null&&re("MA5")&&Te.push("MA5: "+te(le[6])),le[7]!=null&&re("MA10")&&Te.push("MA10: "+te(le[7])),le[8]!=null&&re("MA20")&&Te.push("MA20: "+te(le[8])),le[9]!=null&&re("MA60")&&Te.push("MA60: "+te(le[9])),le[10]!=null&&Te.push("VOL_MA5: "+ge(le[10])),Te.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:y?0:8,textStyle:{color:q.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:y?30:40,height:y?"48%":"52%"},{left:56,right:16,top:y?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:r,boundaryGap:!0,axisLine:{lineStyle:{color:be}},axisLabel:{color:q.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:r,axisLabel:{show:!1},axisLine:{lineStyle:{color:be}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:be}},axisLabel:{color:q.textSecondary,fontSize:11,formatter:function(Me){const qe=Math.round(Me*100)/100;return qe%1===0?String(Math.round(qe)):qe.toFixed(2)}},splitLine:{lineStyle:{color:be,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:be}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,M.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:be,textStyle:{color:q.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:H,itemStyle:{color:q.up,color0:q.down,borderColor:q.up,borderColor0:q.down}},{name:"MA5",type:"line",data:$,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma5}},{name:"MA10",type:"line",data:T,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma10}},{name:"MA20",type:"line",data:Y,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma20}},{name:"MA60",type:"line",data:K,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ce,itemStyle:{color:function(Me){const qe=Me.dataIndex;return M[qe][1]>=M[qe][2]?q.up:q.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:Q,smooth:!0,symbol:"none",lineStyle:{width:1,color:u.ma5,type:"dashed"}}]};w.setOption(Pe,!0)}const c=new Map;function k(w){return c.has(w)||c.set(w,{chart:null,cache:null}),c.get(w)}async function n(w,M,oe,U=!1,y={}){await t();const r=k(w);let q=document.getElementById(w);if(!q)for(let u=0;u<16&&(await new Promise(H=>setTimeout(H,50)),q=document.getElementById(w),!q);u++);if(!q)throw new Error("无法找到图表容器: "+w);if(q.offsetWidth<50&&(q.style.minWidth="600px",q.style.minHeight="300px"),!r.chart||r.chart.isDisposed()||r.chart.getDom()!==q){if(r.chart)try{r.chart.dispose()}catch{}r.chart=echarts.init(q),r.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const u=y.onLegend;typeof u=="function"&&r.chart.on("legendselectchanged",H=>{H&&H.selected&&u(H.selected)})}return f(r.chart,M,oe,U,!!y.isMobile),r.cache={data:M,period:oe,isIndex:U,isMobile:!!y.isMobile},r.chart}function x(w){const M=c.get(w);M&&M.chart&&(M.chart.dispose(),M.chart=null,M.cache=null)}function i(w){const M=c.get(w);M&&M.chart&&M.chart.resize()}function h(w,M){const oe=c.get(w),U=oe&&oe.chart;if(U)if(M<=0)U.dispatchAction({type:"dataZoom",start:0,end:100});else{const q=Math.max(0,(60-M)/60*100);U.dispatchAction({type:"dataZoom",start:Math.round(q),end:100})}}function g(w){var U,y,r;const M=c.get(w);if(!M||!M.chart||!M.cache||M.chart.isDisposed())return;const oe=((r=(y=(U=M.chart.getOption())==null?void 0:U.legend)==null?void 0:y[0])==null?void 0:r.selected)||null;f(M.chart,M.cache.data,M.cache.period,M.cache.isIndex,M.cache.isMobile),oe&&M.chart.setOption({legend:{selected:oe}})}function C(w){const M=c.get(w);return M&&M.chart}const D=new Map;function _(w){return D.has(w)||D.set(w,{chart:null,cache:null}),D.get(w)}function o(w,M,oe={}){return t().then(function(){const U=_(w),y=document.getElementById(w);if(!y)throw new Error("无法找到图表容器: "+w);if(y.offsetWidth<50&&(y.style.minWidth="600px",y.style.minHeight="300px"),U.chart&&U.chart.getDom&&U.chart.getDom()!==y){try{U.chart.dispose()}catch{}U.chart=null}U.chart||(U.chart=echarts.init(y),U.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),U.resizeBound||(U.resizeBound=!0,window.addEventListener("resize",function(){U.chart&&!U.chart.isDisposed()&&U.chart.resize()})));const r=typeof M=="function"?M():M;return U.chart.setOption(r,!0),U.cache={buildOption:M,key:oe.key||""},U.chart})}function l(w){var y,r,q;const M=D.get(w);if(!M||!M.chart||!M.cache||M.chart.isDisposed())return;const oe=((q=(r=(y=M.chart.getOption())==null?void 0:y.legend)==null?void 0:r[0])==null?void 0:q.selected)||null,U=typeof M.cache.buildOption=="function"?M.cache.buildOption():M.cache.buildOption;M.chart.setOption(U,!0),oe&&U&&U.legend&&U.legend.selected&&M.chart.setOption({legend:{selected:oe}})}function v(w){const M=D.get(w);M&&M.chart&&(M.chart.dispose(),M.chart=null,M.cache=null)}function j(w){const M=D.get(w);M&&M.chart&&M.chart.resize()}const B=new Map;function G(w){return B.has(w)||B.set(w,{chart:null,cache:null}),B.get(w)}function J(w,M,oe={}){return t().then(function(){const U=G(w),y=document.getElementById(w);if(!y)return null;if(y.offsetWidth<50&&(y.style.minWidth="600px",y.style.minHeight="300px"),U.chart&&U.chart.getDom&&U.chart.getDom()!==y){try{U.chart.dispose()}catch{}U.chart=null}U.chart||(U.chart=echarts.init(y),U.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),U.resizeBound||(U.resizeBound=!0,window.addEventListener("resize",function(){U.chart&&!U.chart.isDisposed()&&U.chart.resize()})));const r=typeof M=="function"?M():M;return U.chart.setOption(r,!0),U.cache={buildOption:M,key:oe.key||""},U.chart})}function ae(w){const M=B.get(w);if(!M||!M.chart||!M.cache||M.chart.isDisposed())return;const oe=typeof M.cache.buildOption=="function"?M.cache.buildOption():M.cache.buildOption;M.chart.setOption(oe,!0)}function L(w){const M=B.get(w);M&&M.chart&&(M.chart.dispose(),M.chart=null,M.cache=null)}function E(w){const M=B.get(w);M&&M.chart&&M.chart.resize()}const R=J,W=ae,ie=L,Z=E;function ne(w,M,oe,U){U=U||{};const y=U.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[U.navLabel||"净值",U.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:oe||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:U.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:U.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:U.navLabel||"净值",type:"line",data:w||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:U.ddLabel||"回撤",type:"line",yAxisIndex:1,data:M||[],showSymbol:!1,areaStyle:{opacity:.25,color:y},lineStyle:{color:y,type:"solid",width:1.5}}]}}function I(w,M){M=M||{};const oe=M.bandColor||"#1976d2",U=w&&w.dates||[],y=w&&w.median||[],r=w&&w.q25||[],q=w&&w.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[M.medianLabel||"中位IC",M.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:U,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:M.medianLabel||"中位IC",type:"line",data:y,showSymbol:!1,lineStyle:{width:2,color:oe}},{name:M.bandLabel||"25–75分位",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:oe,opacity:.12}},{name:"_bandH",type:"line",data:q.map(function(u,H){return u-(r[H]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:oe,opacity:.12}}]}}function V(w,M){M=M||{};const oe=M.color||"#7c3aed",U=w&&w.dates||[],y=w&&w.value||[],r=w&&w.upper||[],q=w&&w.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[M.valueLabel||"情绪",M.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:U,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:M.valueLabel||"情绪",type:"line",data:y,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:oe}},{name:M.bandLabel||"过热/冰点带",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:oe,opacity:.1}},{name:"_bandL",type:"line",data:q.map(function(u,H){return(r[H]||0)-u}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:oe,opacity:.1}}]}}const z={renderKlineChart:f,renderKlineTo:n,disposeKline:x,resizeKline:i,zoomKline:h,redrawKline:g,getKlineChart:C,renderBacktestTo:o,redrawBacktest:l,disposeBacktest:v,resizeBacktest:j,renderPortfolioTo:J,redrawPortfolio:ae,disposePortfolio:L,resizePortfolio:E,renderSimpleChartTo:R,redrawSimpleChart:W,disposeSimpleChart:ie,resizeSimpleChart:Z,buildNavDrawdownOption:ne,buildIcBandOption:I,buildSentimentBandOption:V,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:P,init(){return{renderKlineChart:f,renderKlineTo:n,disposeKline:x,resizeKline:i,zoomKline:h,redrawKline:g,getKlineChart:C,renderBacktestTo:o,redrawBacktest:l,disposeBacktest:v,resizeBacktest:j,renderPortfolioTo:J,redrawPortfolio:ae,disposePortfolio:L,resizePortfolio:E,renderSimpleChartTo:R,redrawSimpleChart:W,disposeSimpleChart:ie,resizeSimpleChart:Z,buildNavDrawdownOption:ne,buildIcBandOption:I,buildSentimentBandOption:V,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:P}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=z),typeof Ie<"u"&&Ie.exports&&(Ie.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:ne,buildIcBandOption:I,buildSentimentBandOption:V})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:p}=Vue,{configChanged:t,consensus:d}=a,m=e(null),P=e(""),f=e(null),c=e([]),k=e([]),n=e([]),x=e([]),i=e([]),h=e([]),g=e({});function C(he){const we=i.value.indexOf(he);we>=0?i.value.splice(we,1):i.value.push(he)}const D=e("date"),_=e([]),o=e(!1),l=e(!1),v=e("watchlist"),j=e([]),B=e({vendors:[]}),G=e(""),J=e(!1),ae=e(!1);function L(he){if(!he)return"";const we=String(he),Re=we.length;if(Re<=4)return we[0]+"*".repeat(Re-1);const Ae=Re<=8?2:4;return we.slice(0,Ae)+"*".repeat(Re-Ae-Ae)+we.slice(-Ae)}async function E(he){let we;try{we=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ae=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:we,target:he})})).json();if(Ae.success)return Ae.secret;ElementPlus.ElMessage.error(Ae.message||"查看失败")}catch(Re){ElementPlus.ElMessage.error("查看失败: "+Re.message)}return null}async function R(he){if(he._revealed){he._revealed=!1,he._masked=L(he.api_key);return}const we=await E("ai:"+he.vendor_key);we!==null&&(he.api_key=we,he._revealed=!0)}async function W(he){if(he._editing){he._editing=!1,he._revealed=!1,he.api_key&&(he._masked=L(he.api_key));return}he._editing=!0;try{const Re=await(await fetch("/api/ai/models?full=1")).json();if(Re.success){const Ae=(Re.data.vendors||[]).find(Ge=>Ge.vendor_key===he.vendor_key);Ae&&(he.api_key=Ae.api_key||"")}else Re.message&&ElementPlus.ElMessage.error(String(Re.message))}catch(we){ElementPlus.ElMessage.error("解锁失败: "+we.message)}}function ie(he){const{_fetching:we,_testing:Re,_revealed:Ae,_masked:Ge,_editing:Xe,...Ye}=he;return Xe||(Ye.api_key=""),Ye.models=(he.models||[]).map(ht=>{const{_testing:xt,testResult:ft,...Ze}=ht;return Ze}),Ye}async function Z(){var he;try{G.value="";const we=await fetch("/api/ai/models");if(we.status===401){G.value="请先登录后再查看模型配置";return}if(!we.ok){G.value=`服务器错误 (${we.status})`;return}const Re=await we.json();Re.success?(j.value=(((he=Re.data)==null?void 0:he.vendors)||[]).map(Ae=>({...Ae,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Ae.api_key||"",models:(Ae.models||[]).map(Ge=>({...Ge,_testing:!1,testResult:void 0}))})),G.value=""):G.value=Re.message||"加载失败"}catch(we){G.value="网络错误: "+we.message}}async function ne(){try{const we=await(await fetch("/api/ai/catalog")).json();we.success&&we.data&&(B.value=we.data)}catch(he){console.warn("AI 厂商目录加载失败",he)}}async function I(){ae.value=!0;try{const Re=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:j.value.map(ie)})})).json();Re.success?(j.value.forEach(Ae=>{Ae._editing=!1,Ae._revealed=!1,Ae.api_key&&(Ae._masked=L(Ae.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Re.message||"保存失败")}catch(he){ElementPlus.ElMessage.error("保存失败: "+he.message)}ae.value=!1}async function V(he,we){we._testing=!0;try{const Ae=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:he.vendor_key,model:we.name,base_url:he.base_url,api_key:he.api_key,timeout:he.timeout})});we.testResult=await Ae.json()}catch(Re){we.testResult={success:!1,message:Re.message}}we._testing=!1}async function z(){J.value=!0;for(const he of j.value)for(const we of he.models||[])he.api_key?await V(he,we):we.testResult={success:!1,message:"未配置 API Key"};J.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function w(he){he._fetching=!0;try{const Ae=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:he.vendor_key,base_url:he.base_url,api_key:he.api_key,timeout:he.timeout})})).json();if(Ae.success&&Array.isArray(Ae.models)){const Ge=new Set((he.models||[]).map(Xe=>Xe.name));for(const Xe of Ae.models)Ge.has(Xe)||he.models.push({name:Xe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Ae.models.length} 个模型`)}else ElementPlus.ElMessage.error(Ae.message||"获取模型列表失败")}catch(we){ElementPlus.ElMessage.error("获取模型列表失败: "+we.message)}he._fetching=!1}function M(he){const we=(B.value.vendors||[]).find(Re=>Re.vendor_key===he);if(we){if(j.value.some(Re=>Re.vendor_key===he)){ElementPlus.ElMessage.warning("该厂商已存在");return}j.value.push({vendor_key:we.vendor_key,name:we.name,kind:we.kind,base_url:we.base_url,api_key:"",timeout:60,tier:we.tier||"",website:we.website||"",locked:!!we.locked,models:(we.models||[]).map(Re=>({name:Re,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${we.name}」，配置 API Key 后保存生效`)}}function oe(){j.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function U(he){he.models||(he.models=[]),he.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function y(he,we){const Re=he.models[we];if(!(!Re||Re.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Re.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}he.models.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function r(he){if(he.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(he.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const we=j.value.indexOf(he);we>=0&&j.value.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const q=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),u=e(!1),H=e(""),ce=e(0),$=e(""),T=e(!1),Y=e(""),K=e(!1),Q=e(0),X=e(0),ee=e(""),be=e({}),Pe=e({}),Me=e({}),qe=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),le=e("manual"),_e=p(()=>{const he={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return he[qe.value.provider]||he.custom}),ze={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function re(he){if(he==="manual")return;const we=ze[he];we&&(qe.value.endpoint=we.endpoint,qe.value.model=we.model,t.value=!0)}function te(){if(t.value=!0,qe.value.provider!=="codingplan"&&qe.value.provider!=="custom"){const he=_e.value;he&&(qe.value.endpoint=he.endpoint,qe.value.model=he.model)}else qe.value.provider==="codingplan"&&(qe.value.endpoint||(qe.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),qe.value.model||(qe.value.model="ark-code-latest"))}let ge=null;const Te=8;async function Ne(){ge&&(ge.abort(),ge=null);const we=(d.value||[]).filter(Ye=>Ye.status==="new"||Ye.status==="out").filter(Ye=>!g.value[Ye.code]);if(we.length===0)return;const Re=new AbortController;ge=Re;let Ae=0;const Ge=async()=>{for(;Ae<we.length;){const Ye=we[Ae++];try{const xt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ye.code,stock_name:Ye.name,event_type:Ye.status==="new"?"enter":"exit"}),signal:Re.signal})).json();xt.success&&xt.signal&&(g.value={...g.value,[Ye.code]:xt.signal})}catch(ht){if(ht.name==="AbortError")return}}},Xe=Array.from({length:Math.min(Te,we.length)},()=>Ge());await Promise.all(Xe)}function Ke(){ge&&(ge.abort(),ge=null)}let rt=0;async function dt(he){const we=++rt;try{const Ae=await(await fetch(`/api/ai/history/last/${encodeURIComponent(he)}`)).json();if(we!==rt)return;Ae.success&&Ae.data&&(m.value=Ae.data,P.value=Ae.data.evaluate_time,Qe(he,Ae.data),Et(Ae.data))}catch{}}async function Qe(he,we){var Re,Ae;try{const Xe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(he)}&limit=2`)).json();if(Xe.success&&Xe.data&&Xe.data.length>=2){const Ye=Xe.data[1],ht=((Re=we.result)==null?void 0:Re.total_score)||0,xt=((Ae=Ye.result)==null?void 0:Ae.total_score)||0;ht>0&&xt>0&&(f.value={prevScore:xt,currScore:ht,diff:ht-xt})}}catch(Ge){console.warn("[refreshStrategyData] autoPoll failed:",Ge)}}function Et(he){var Ge;const we=((Ge=he.result)==null?void 0:Ge.dimensions)||{},Re=[],Ae=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Xe of Ae){const Ye=we[Xe.key];Ye!==void 0&&Re.push({icon:Ye>=Xe.good?"check-circle-2":Ye>=Xe.warn?"alert-triangle":"x-circle",label:`${Xe.label} ${Math.round(Ye)}分`})}c.value=Re}return{aiResult:m,lastEvalTime:P,evalHistoryComparison:f,checklistItems:c,aiHistory:k,selectedHistoryIds:n,expandedDates:x,expandedMonths:i,expandedStocks:h,poolSignals:g,toggleMonthExpand:C,aiHistoryView:D,selectedWatchlistCodes:_,showAutoEvaluateSettings:o,savingConfig:l,autoEvaluateScope:v,aiVendors:j,aiCatalog:B,aiModelsError:G,testingAllModels:J,savingAiModels:ae,loadAiVendors:Z,loadAiCatalog:ne,saveAiVendors:I,saveAiModels:I,testVendorModel:V,testAllVendorModels:z,fetchVendorModels:w,addVendorFromCatalog:M,addCustomVendor:oe,addVendorModel:U,removeVendorModel:y,removeVendor:r,toggleVendorKeyReveal:R,toggleVendorEdit:W,autoEvaluateConfig:q,aiLoading:u,aiEvalStage:H,aiEvalElapsed:ce,aiEvalError:$,showBatchEvaluate:T,batchStocks:Y,batchRunning:K,batchTotal:Q,batchCompleted:X,batchCurrent:ee,batchStatuses:be,batchResults:Pe,batchEvalErrors:Me,aiConfig:qe,selectedPreset:le,providerInfo:_e,aiPresets:ze,applyPreset:re,onProviderChange:te,fetchPoolSignals:Ne,cancelPoolSignals:Ke,loadLastEvaluation:dt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:p,watch:t}=Vue,{configChanged:d,aiConfig:m,aiLoading:P,feishuConfig:f,currentTheme:c,changeTheme:k,autoEvaluateConfig:n,currentUser:x,strategyFilter:i,applyTheme:h,dashboardData:g,lastRefreshTime:C,saveAiModels:D}=a,_=e(!1),o=e(!1),l=e(null),v=e(null),j=e(null),B=e(null),G=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),J=e("disconnected"),ae=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),L=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),E=e(!1),R=e(null),W=e(null),ie=e("pending"),Z=e("..."),ne=e(!1),I=e({api_limit:600}),V=e(!1),z=e(!1);async function w(){try{const te=await(await fetch("/api/system/rate-limit")).json();te.success&&(I.value=te.data)}catch(re){console.warn("loadRateLimit failed:",re)}}async function M(){z.value=!0;try{const te=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)})).json();te.success?(V.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(te.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{z.value=!1}}t(()=>[m.value.provider,m.value.apiKey,m.value.endpoint,m.value.model],()=>{d.value=!0},{deep:!0});async function oe(){_.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(m.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)})).json()).success?(d.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(re){localStorage.setItem("quant_ai_config",JSON.stringify(m.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",re)}finally{_.value=!1}}async function U(){P.value=!0;try{const te=await(await fetch("/api/ai/test")).json();te.success?ElementPlus.ElMessage.success(te.message||"API连接正常"):ElementPlus.ElMessage.error(te.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{P.value=!1}}function y(){const re={ai:m.value,feishu:f.value,theme:c.value,export_time:new Date().toISOString()},te=new Blob([JSON.stringify(re,null,2)],{type:"application/json"}),ge=URL.createObjectURL(te),Te=document.createElement("a");Te.href=ge,Te.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Te.click(),URL.revokeObjectURL(ge),ElementPlus.ElMessage.success("配置已导出")}function r(re){const te=re.target.files[0];if(!te)return;const ge=new FileReader;ge.onload=async Te=>{try{const Ne=JSON.parse(Te.target.result);Ne.ai&&(m.value={...m.value,...Ne.ai},await oe()),Ne.feishu&&(Object.assign(f.value,Ne.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ne.feishu)})),Ne.theme&&(c.value=Ne.theme,k(Ne.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ge.readAsText(te),re.target.value=""}async function q(){_.value=!0;const re=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:G.value,feishu:f.value,ai:m.value,rate_limit:I.value,auto_evaluate:n.value,theme:c.value}})}).then(Ne=>["userConfig",Ne.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G.value)}).then(Ne=>["tushare",Ne.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ae.value})}).then(Ne=>["datasource",Ne.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)}).then(Ne=>["feishu",Ne.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)}).then(Ne=>["ai",Ne.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)}).then(Ne=>["rateLimit",Ne.ok]),D().then(()=>["aiModels",!0],()=>["aiModels",!1])],te=await Promise.allSettled(re),ge=te.filter(Ne=>Ne.status==="fulfilled"&&Ne.value[1]).length,Te=te.filter(Ne=>Ne.status==="rejected"||Ne.status==="fulfilled"&&!Ne.value[1]).length;V.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(i.value.selected)),localStorage.setItem("quant_strategy_filter_mode",i.value.mode),x.value&&fetch(`/api/users/${x.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:c.value})}).catch(()=>{}),o.value=!1,l.value=new Date().toLocaleString("zh-CN"),_.value=!1,Te>0&&console.error(`[saveAllConfig] ${ge}/${ge+Te} 项保存成功，${Te} 项失败`)}async function u(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const ge=te.config;ge.tushare&&(G.value={...G.value,...ge.tushare}),ge.feishu&&(f.value={...f.value,...ge.feishu}),ge.ai&&(m.value={...m.value,...ge.ai}),ge.rate_limit&&(I.value={...I.value,...ge.rate_limit}),ge.auto_evaluate&&(n.value={...n.value,...ge.auto_evaluate}),ge.theme&&!localStorage.getItem("quant_theme")&&h(ge.theme)}o.value=!1,V.value=!1}catch(re){console.error("[resetAllConfig] 重新加载配置失败:",re),o.value=!1}}async function H(){J.value="testing";try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(J.value=te.success?"connected":"disconnected",te.success){const ge=te.data_count?` (获取到 ${te.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ge)}else ElementPlus.ElMessage.error(te.message||"连接失败")}catch{J.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function ce(){try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();J.value=te.success?"connected":"disconnected"}catch{J.value="disconnected"}}async function $(){var re;E.value=!0;try{const ge=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ge.success?(R.value=parseInt(((re=ge.message.match(/\d+/))==null?void 0:re[0])||"0"),ElementPlus.ElMessage.success(ge.message)):ElementPlus.ElMessage.error(ge.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{E.value=!1}}async function T(){try{const te=await(await fetch("/api/market/tushare/config")).json();te.success&&te.config&&(G.value={...G.value,...te.config})}catch(re){console.warn("loadTushareConfig failed:",re)}}function Y(re){if(!re)return"";const te=String(re),ge=te.length;if(ge<=4)return te[0]+"*".repeat(ge-1);const Te=ge<=8?2:4;return te.slice(0,Te)+"*".repeat(ge-Te-Te)+te.slice(-Te)}async function K(re){let te;try{te=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Te=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:te,target:re})})).json();if(Te.success)return Te.secret;ElementPlus.ElMessage.error(Te.message||"查看失败")}catch(ge){ElementPlus.ElMessage.error("查看失败: "+ge.message)}return null}async function Q(re){const te=ae.value[re];if(!te)return;if(te._revealed){te._revealed=!1,te._masked=Y(te.token);return}const ge=await K(re);ge!==null&&(te.token=ge,te._revealed=!0)}async function X(re){const te=ae.value[re];if(te){if(te._editing){te._editing=!1,te._revealed=!1,te.token&&(te._masked=Y(te.token));return}te._editing=!0;try{const ge=await K(re);if(ge===null){te._editing=!1;return}te.token=ge,te._revealed=!0}catch(ge){te._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ge.message)}}}async function ee(){try{const te=await(await fetch("/api/market/datasource/config")).json();if(te.success&&te.config&&te.config.sources){const ge=te.config.sources,Te=Ne=>{const Ke={...ae.value[Ne],...ge[Ne]||{}};return Ke._editing=!1,Ke._revealed=!1,Ke._masked=Ke.token||"",Ke.token="",Ke};ae.value={sxsc_tushare:Te("sxsc_tushare"),tushare:Te("tushare"),akshare:{...ae.value.akshare,...ge.akshare||{}}}}try{const Te=await(await fetch("/api/market/datasource/status")).json();if(Te.success&&Te.status)for(const[Ne,Ke]of Object.entries(Te.status))L.value[Ne]=Ke.connected?"connected":"disconnected"}catch{}}catch(re){console.warn("loadDatasourceConfig failed:",re)}}async function be(){try{const re={};for(const[te,ge]of Object.entries(ae.value)){const{_revealed:Te,_masked:Ne,_editing:Ke,...rt}=ge;!Ke&&te!=="akshare"&&(rt.token=""),re[te]=rt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:re})}),o.value=!0}catch(re){console.warn("saveDatasourceConfig failed:",re)}}async function Pe(re){L.value[re]="testing";try{const te=ae.value[re];te&&te._editing&&await be();const Te=await(await fetch(`/api/market/datasource/test/${re}`,{method:"POST"})).json();L.value[re]=Te.success?"connected":"disconnected",Te.success?ElementPlus.ElMessage.success(`${re} 连接成功`):ElementPlus.ElMessage.error(`${re}: ${Te.message}`)}catch{L.value[re]="disconnected",ElementPlus.ElMessage.error(`${re} 连接失败`)}}async function Me(){try{const te=await(await fetch("/api/feishu/config")).json();te&&typeof te=="object"&&(f.value={...f.value,...te},v.value=JSON.parse(JSON.stringify(f.value)))}catch(re){console.warn("loadFeishuConfig failed:",re)}}async function qe(){try{const te=await(await fetch("/api/ai/config")).json();if(te.success&&te.data)m.value={...m.value,...te.data};else{const ge=localStorage.getItem("quant_ai_config");ge&&(m.value=JSON.parse(ge))}}catch{const te=localStorage.getItem("quant_ai_config");te&&(m.value=JSON.parse(te))}}async function le(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const ge=te.config;ge.tushare&&(G.value={...G.value,...ge.tushare}),ge.datasource&&ge.datasource.sources&&(ae.value={sxsc_tushare:{...ae.value.sxsc_tushare,...ge.datasource.sources.sxsc_tushare||{}},tushare:{...ae.value.tushare,...ge.datasource.sources.tushare||{}},akshare:{...ae.value.akshare,...ge.datasource.sources.akshare||{}}}),ge.feishu&&(f.value={...f.value,...ge.feishu},v.value=JSON.parse(JSON.stringify(f.value))),ge.ai&&(m.value={...m.value,...ge.ai}),ge.rate_limit&&(I.value={...I.value,...ge.rate_limit}),ge.theme&&!localStorage.getItem("quant_theme")&&h(ge.theme),ge.auto_evaluate&&(n.value={...n.value,...ge.auto_evaluate})}}catch(re){console.warn("加载用户配置失败，使用本地缓存",re)}}async function _e(){var re,te,ge,Te;try{const Ke=await(await fetch("/api/dashboard")).json(),rt=Ke.success?Ke.data:Ke;R.value=((re=rt==null?void 0:rt.stats)==null?void 0:re.total_stocks_covered)||null;const Qe=await(await fetch("/api/dates")).json();W.value=((te=Qe==null?void 0:Qe.data)==null?void 0:te.total)||((Te=(ge=Qe==null?void 0:Qe.data)==null?void 0:ge.dates)==null?void 0:Te.length)||null;const he=await(await fetch("/api/ai/history")).json();ie.value="ok"}catch{ie.value="pending"}}async function ze(){try{const te=await(await fetch("/api/dashboard")).json();g.value=te.success?te.data:te,C.value=Date.now()}catch(re){console.error("加载总览数据失败",re)}}return{configSaving:_,configChanged:d,globalConfigDirty:o,lastSavedTime:l,feishuConfigOriginal:v,aiConfigOriginal:j,tushareConfigOriginal:B,tushareConfig:G,tushareStatus:J,datasourceConfig:ae,datasourceStatus:L,syncingData:E,stockCount:R,tradeDateCount:W,aiStatus:ie,appVersion:Z,showImportDialog:ne,rateLimitConfig:I,rateLimitDirty:V,rateLimitSaving:z,loadRateLimit:w,saveRateLimit:M,saveAiConfig:oe,testAiApi:U,exportConfig:y,importConfig:r,saveAllConfig:q,resetAllConfig:u,testTushareConnection:H,checkTushareConnection:ce,syncStockData:$,loadTushareConfig:T,loadDatasourceConfig:ee,saveDatasourceConfig:be,testDatasource:Pe,toggleDatasourceKeyReveal:Q,toggleDatasourceEdit:X,loadFeishuConfig:Me,loadAiConfig:qe,loadUserConfig:le,loadSystemStatus:_e,loadDashboardData:ze}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:p}=Vue,{currentUser:t,applyTheme:d,allMenuDefs:m,loadGroupConfig:P}=a,f=e([]),c=e(""),k=e(""),n=e("users"),x=e({}),i=e({}),h=p(()=>{let le=f.value;if(k.value&&(le=le.filter(ze=>(ze.group||ze.role)===k.value)),!c.value)return le;const _e=c.value.toLowerCase();return le.filter(ze=>ze.username.toLowerCase().includes(_e))});function g(le){x.value={...x.value,[le]:!x.value[le]}}async function C(le,_e){try{const re=await(await fetch("/api/groups/"+_e+"/members/"+le,{method:"DELETE"})).json();re.success?(await X(),await K()):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function D(le){const _e=i.value[le];if(_e)try{const re=await(await fetch("/api/groups/"+le+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:_e})})).json();re.success?(await X(),await K(),i.value={...i.value,[le]:""}):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function _(le,_e){try{const re=await(await fetch("/api/users/"+le.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:_e})})).json();re.success?await X():ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const o=e(!1),l=e(null),v=e({username:"",password:"",role:"user",theme:"tech-blue"}),j=e(!1),B=e(null),G=e(!1),J=e(!1),ae=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),L=e({}),E=e(!1),R=e({group_id:"",name:"",description:""}),W=e(!1),ie=e([]),Z=e(""),ne=e(""),I=e({});function V(le){I.value={...I.value,[le]:!I.value[le]}}function z(le){return!f.value||!f.value.length?0:f.value.filter(_e=>(_e.group||_e.role)===le).length}function w(le){const _e=(le==null?void 0:le.visible_menus)||{};return Object.values(_e).filter(Boolean).length}const M=p(()=>Object.keys(Y.value).length);async function oe(le){ne.value=le,J.value=!0,await U(le)}async function U(le){try{const ze=await(await fetch("/api/groups/"+le+"/members")).json();ze.success&&(ie.value=ze.members||[])}catch(_e){ie.value=[],console.error("[loadGroupMembers]",_e)}}async function y(){if(!(!Z.value||!ne.value)){W.value=!0;try{const _e=await(await fetch("/api/groups/"+ne.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:Z.value})})).json();_e.success?(await U(ne.value),await X(),Z.value=""):ElementPlus.ElMessage.error(_e.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{W.value=!1}}}async function r(le){try{const ze=await(await fetch("/api/groups/"+ne.value+"/members/"+le,{method:"DELETE"})).json();ze.success?(await U(ne.value),await X()):ElementPlus.ElMessage.error(ze.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const q=p(()=>{if(!f.value)return[];const le=new Set(ie.value.map(_e=>_e.username));return f.value.filter(_e=>_e.username!=="admin"&&_e.username!=="guest"&&!le.has(_e.username))});function u(le){const _e=ae.value.visible_menus[le],ze=m.find(re=>re.key===le);if(ze)if(_e){const re=L.value[le]||{};ze.subPages.forEach(te=>{const ge=le+"."+te;ae.value.visible_sub_pages[ge]=re[te]!==void 0?re[te]:!0})}else{const re={};ze.subPages.forEach(te=>{const ge=le+"."+te;re[te]=ae.value.visible_sub_pages[ge],ae.value.visible_sub_pages[ge]=!1}),L.value[le]=re}}function H(le){B.value=le;const _e=Y.value[le]||{};ae.value={name:_e.name||le,description:_e.description||"",visible_menus:{..._e.visible_menus||{}},visible_sub_pages:{..._e.visible_sub_pages||{}}},L.value={},m.forEach(ze=>{const re={};ze.subPages.forEach(te=>{re[te]=ae.value.visible_sub_pages[ze.key+"."+te]}),L.value[ze.key]=re}),G.value=!0}async function ce(){W.value=!0;try{const _e=await(await fetch("/api/groups/"+B.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae.value)})).json();_e.success?(G.value=!1,B.value=null,await K(),await P()):ElementPlus.ElMessage.error(_e.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{W.value=!1}}async function $(le){var _e;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((_e=Y.value[le])==null?void 0:_e.name)||le)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const te=await(await fetch("/api/groups/"+le,{method:"DELETE"})).json();te.success?await K():ElementPlus.ElMessage.error(te.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function T(){if(R.value.group_id){W.value=!0;try{const _e=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R.value)})).json();_e.success?(E.value=!1,R.value={group_id:"",name:"",description:""},await K()):ElementPlus.ElMessage.error(_e.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{W.value=!1}}}const Y=e({});async function K(){try{if(!localStorage.getItem("quant_token"))return;const _e=await fetch("/api/groups");if(_e.ok){const ze=await _e.json();Y.value=ze.groups||{}}}catch(le){console.warn("loadAllGroups:",le)}}function Q(le){var _e;return((_e=Y.value[le])==null?void 0:_e.name)||le||"--"}async function X(){try{if(!localStorage.getItem("quant_token")){f.value=[];return}const _e=await fetch("/api/users");if(_e.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const ze=await _e.json();f.value=ze.users||[]}catch(le){f.value=[],console.error("[loadUsers] error:",le)}}function ee(le){l.value=le,v.value={username:le.username,password:"",role:le.role,theme:le.theme||"tech-blue",group:le.group||le.role},o.value=!0}async function be(){if(v.value.username){j.value=!0;try{const le=l.value?"PUT":"POST",_e=l.value?`/api/users/${v.value.username}`:"/api/users",re=await(await fetch(_e,{method:le,headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)})).json();if(re.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&v.value.username===t.value.username){const te=v.value.theme;te&&te!==t.value.theme&&(t.value.theme=te,localStorage.setItem("quant_user",JSON.stringify(t.value)),d(te))}o.value=!1,l.value=null,await X()}else ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{j.value=!1}}}async function Pe(le){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${le}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await X())}catch(_e){console.error("[deleteUser]",_e)}}async function Me(le){try{const ze=await(await fetch(`/api/users/${le.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:le.enabled})})).json();ze.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(ze.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function qe(le){try{const{value:_e}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${le.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(_e){const re=await(await fetch(`/api/users/${le.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:_e})})).json();re.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(re.message||"重置失败")}}catch{}}return{userList:f,userSearch:c,groupFilter:k,userPageTab:n,expandedGroups:x,addMemberGroupMap:i,filteredUsers:h,toggleGroupExpand:g,removeMemberFromGroupInline:C,addMemberToGroupInline:D,changeUserGroup:_,showAddUser:o,editingUser:l,userForm:v,savingUser:j,editingGroup:B,menuConfigDialog:G,memberDialog:J,groupEditForm:ae,subPageCache:L,showAddGroup:E,addGroupForm:R,savingGroup:W,groupMembers:ie,addMemberUsername:Z,selectedMemberGroup:ne,subPageSectionExpanded:I,toggleSubPageSection:V,getGroupMemberCount:z,getMenuEnabledCount:w,groupCount:M,openMemberManager:oe,loadGroupMembers:U,addMemberToGroup:y,removeMemberFromGroup:r,availableUsersForGroup:q,onParentToggle:u,openMenuConfig:H,saveMenuConfig:ce,deleteGroupConfig:$,createGroup:T,allGroups:Y,getGroupName:Q,loadAllGroups:K,loadUsers:X,editUser:ee,saveUser:be,deleteUser:Pe,toggleUserEnabled:Me,resetUserPassword:qe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:p}=Vue,{stockKlineLoaded:t,stockDetailVisible:d,stockDetailTab:m,stockDetail:P,disposeStockKline:f}=a,c=e([]),k=e(!1),n=e(!1),x=e("date"),i=e([]),h=e([]),g=e([]),C=e([]),D=p(()=>{var r,q;const y=[];for(const u of c.value){if(!u||u.id==null)continue;const H=u.stock_name||u.stock_code||"",ce=Array.isArray(u.messages)?u.messages:[];y.push({id:u.id,stock_code:u.stock_code,stock_name:H,first_msg:u.first_msg||((q=(r=ce[0])==null?void 0:r.content)==null?void 0:q.substring(0,50))||"",msg_count:u.msg_count||ce.length||0,created_at:u.created_at,date:(u.created_at||"").substring(0,10),month:(u.created_at||"").substring(0,7),messages:ce})}return y}),_=p(()=>{const y={};for(const q of D.value){const u=q.date||"未知";y[u]||(y[u]=[]),y[u].push(q)}const r={};return Object.keys(y).sort((q,u)=>u.localeCompare(q)).forEach(q=>r[q]=y[q]),r}),o=p(()=>{const y={};for(const q of D.value){const u=q.month||"未知";y[u]||(y[u]=[]),y[u].push(q)}const r={};return Object.keys(y).sort((q,u)=>u.localeCompare(q)).forEach(q=>r[q]=y[q]),r}),l=p(()=>{const y={};for(const r of D.value){const q=`${r.stock_name}(${r.stock_code})`;y[q]||(y[q]=[]),y[q].push(r)}return y});function v(y){const r=i.value.indexOf(y);r>=0?i.value.splice(r,1):i.value.push(y)}function j(y){const r=_.value[y]||[];if(r.every(u=>i.value.includes(u.id)))i.value=i.value.filter(u=>!r.some(H=>H.id===u));else for(const u of r)i.value.includes(u.id)||i.value.push(u.id)}function B(y){const r=o.value[y]||[];if(r.every(u=>i.value.includes(u.id)))i.value=i.value.filter(u=>!r.some(H=>H.id===u));else for(const u of r)i.value.includes(u.id)||i.value.push(u.id)}function G(y){const r=l.value[y]||[];if(r.every(u=>i.value.includes(u.id)))i.value=i.value.filter(u=>!r.some(H=>H.id===u));else for(const u of r)i.value.includes(u.id)||i.value.push(u.id)}function J(y){const r=h.value.indexOf(y);r>=0?h.value.splice(r,1):h.value.push(y)}function ae(y){const r=g.value.indexOf(y);r>=0?g.value.splice(r,1):g.value.push(y)}function L(y){const r=C.value.indexOf(y);r>=0?C.value.splice(r,1):C.value.push(y)}function E(){i.value.length===D.value.length?i.value=[]:i.value=D.value.map(y=>y.id)}async function R(){if(i.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${i.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const y of[...i.value])await oe(y);i.value=[]}}const W={};async function ie(y){P.value={stock:y.stock_code,name:y.stock_name},d.value=!0,m.value="chat",t.value=!1,f(),I.value=!0,V.value="",ne.value=[];try{let r=W[y.id];if(!r){const q=await fetch("/api/ai/chat/history/"+y.id);if(!q.ok)throw new Error("load history failed");r=(await q.json()).messages||[],W[y.id]=r}ne.value=r.map(q=>({role:q.role,content:q.content}))}catch{V.value="历史消息加载失败，请重试"}finally{I.value=!1}}const Z=e(""),ne=e([]),I=e(!1),V=e("");async function z(){var q;const y=Z.value.trim();if(!y||I.value)return;V.value="",ne.value.push({role:"user",content:y}),Z.value="",I.value=!0;const r=ne.value.length;ne.value.push({role:"assistant",content:""});try{const ce=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((q=P.value)==null?void 0:q.stock)||"",message:y})})).body.getReader(),$=new TextDecoder;let T="";for(;;){const{done:Y,value:K}=await ce.read();if(Y)break;T+=$.decode(K,{stream:!0});const Q=T.split(`
`);T=Q.pop()||"";for(const X of Q)if(X.startsWith("data: "))try{const ee=JSON.parse(X.slice(6));ee.token?ne.value[r].content+=ee.token:ee.done?console.log("Stream done:",ee.session_id):ee.error&&(V.value=ee.error)}catch(ee){console.warn("SSE parse error:",ee)}}}catch(u){ne.value[r].content||(ne.value[r].content="网络错误: "+u.message)}I.value=!1}async function w(y){var q;V.value="",I.value=!0;const r={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};ne.value.push({role:"user",content:r[y]||r.comprehensive});try{const H=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((q=P.value)==null?void 0:q.stock)||"",mode:y})});if(H.ok){const ce=await H.json();ne.value.push({role:"assistant",content:ce.reply||"无回复"})}}catch(u){V.value="网络错误: "+u.message}I.value=!1}async function M(){k.value=!0,n.value=!1;try{const y=await fetch("/api/ai/chat/history?view=date");if(y.ok){const r=await y.json(),q=[];for(const u of r)for(const H of u.items||[])q.push(H);c.value=q}else n.value=!0}catch(y){console.error(y),n.value=!0}finally{k.value=!1}}async function oe(y){try{await fetch("/api/ai/chat/history/"+y,{method:"DELETE"}),c.value=c.value.filter(r=>r.id!==y)}catch(r){console.error("deleteChatSession:",r)}}function U(y){if(!y)return"";const r=String(y).split(`
`),q=[],u=[];let H=0;for(;H<r.length;){if(/^\s*\|.*\|\s*$/.test(r[H])){let $=H;const T=[];for(;$<r.length&&/^\s*\|.*\|\s*$/.test(r[$]);)T.push(r[$]),$++;const Y=X=>X.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(ee=>ee.trim()),K=T.map(Y);if(K.length>1&&K[1].every(X=>/^:?-{3,}:?$/.test(X))){const X=Math.max(...K.map(Me=>Me.length)),ee=K[0].slice(0,X),be=K.slice(2);let Pe="<table>";be.length?(Pe+="<thead><tr>"+ee.map(Me=>"<th>"+Me+"</th>").join("")+"</tr></thead>",Pe+="<tbody>"+be.map(Me=>"<tr>"+Me.slice(0,X).map(qe=>"<td>"+qe+"</td>").join("")+"</tr>").join("")+"</tbody>"):Pe+="<tbody><tr>"+ee.map(Me=>"<td>"+Me+"</td>").join("")+"</tr></tbody>",Pe+="</table>",q.push(Pe),u.push("\0T"+(q.length-1)+"\0"),H=$;continue}for(;H<$;)u.push(r[H]),H++;continue}u.push(r[H]),H++}let ce=u.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return q.forEach(($,T)=>{ce=ce.split("\0T"+T+"\0").join($)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ce=window.__quantModules.core.sanitizeHtml(ce)),ce}return{chatSessions:c,chatHistoryView:x,selectedChatIds:i,expandedChatDates:h,expandedChatMonths:g,expandedChatStocks:C,chatHistoryLoading:k,chatHistoryError:n,allChatSessionsFlat:D,chatGroupedByDate:_,chatGroupedByMonth:o,chatGroupedByStock:l,toggleSelectChat:v,toggleSelectChatDate:j,toggleSelectChatMonth:B,toggleSelectChatStock:G,toggleChatDateExpand:J,toggleChatMonthExpand:ae,toggleChatStockExpand:L,selectAllChatSessions:E,deleteSelectedChatSessions:R,viewChatSession:ie,loadChatHistory:M,deleteChatSession:oe,renderMarkdown:U,stockChatInput:Z,stockChatMessages:ne,stockChatLoading:I,stockChatError:V,askStockSend:z,askStockQuick:w}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:p,watch:t}=Vue,{consensus:d,currentPage:m,currentSubPage:P,dashboardData:f,searchKeyword:c,statusFilter:k,strategyFilter:n,strategyFilterCounts:x}=a;function i(L){const E=n.value.selected;if(!E||E.length===0)return L;const R=n.value.mode;return L.filter(W=>{const ie=W.strategy_names||W.strategies||[];return R==="union"?E.some(Z=>ie.includes(Z)):E.every(Z=>ie.includes(Z))})}const h=p(()=>{const L=i(d.value||[]);return{all:L.length,newCount:L.filter(E=>E.status==="new").length,current:L.filter(E=>E.status==="current").length,out:L.filter(E=>E.status==="out").length}}),g=p(()=>{let L=d.value||[];if(k.value!=="all"&&(L=L.filter(E=>E.status===k.value)),L=i(L),c.value){const E=c.value.toLowerCase();L=L.filter(R=>R.code.toLowerCase().includes(E)||R.name&&R.name.toLowerCase().includes(E))}return L}),C=p(()=>{const L=d.value||[],E={},R={};for(const W of L)W.code&&W.name&&(R[W.code]=W.name);for(const W of L){const ie=W.strategy_names||W.strategies||[];for(const Z of ie)E[Z]||(E[Z]={strategy:Z,count:0,codes:[],names:[]}),E[Z].count++,E[Z].codes.includes(W.code)||(E[Z].codes.push(W.code),E[Z].names.push({code:W.code,name:R[W.code]||W.code}))}return Object.values(E).sort((W,ie)=>ie.count-W.count)}),D=p(()=>{const L=n.value.selected,E=n.value.mode,R={};for(const[W,ie]of Object.entries(x.value)){const Z=ie||[];!L||L.length===0?R[W]=Z.length:E==="union"?R[W]=Z.filter(ne=>ne.strategies&&L.some(I=>ne.strategies.includes(I))).length:R[W]=Z.filter(ne=>ne.strategies&&L.every(I=>ne.strategies.includes(I))).length}return R});function _(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(n.value.selected)),localStorage.setItem("quant_strategy_filter_mode",n.value.mode)}const o=p(()=>{const L=(f.value||{}).consensus_rank||[];return i(L)}),l=p(()=>{const L=d.value||x.value.day||[];return i(L).length}),v=p(()=>{const L=(f.value||{}).strategy_counts||[],E=d.value||x.value.day||[];if(E.length===0)return L;const R=i(E),W={};R.forEach(Z=>{(Z.strategy_names||Z.strategies||[]).forEach(I=>{W[I]=(W[I]||0)+1})});const ie=R.length||1;return L.map(Z=>{const ne=Z.strategy_name||Z.strategy_id,I=W[ne]||0;return{...Z,count:I,percentage:Math.round(I/ie*1e3)/10}})}),j=p(()=>{const L=(f.value||{}).pool_changes||{},E=(L.new_count||0)-(L.out_count||0);return E>0?{dir:"up",text:"↑"+E}:E<0?{dir:"down",text:"↓"+Math.abs(E)}:{dir:"flat",text:"→0"}}),B=p(()=>{const L=(f.value||{}).time_coverage||{},E=new Date(L.start_date),R=new Date(L.end_date),W=new Date;if(!E.getTime()||!R.getTime()||W>=R)return 100;if(W<=E)return 0;const ie=R-E,Z=W-E;return Math.round(Z/ie*100)}),G=e(null),J=p(()=>{if(!G.value)return"";const L=Math.floor((Date.now()-G.value)/1e3);return L<60?L+"秒前刷新":L<3600?Math.floor(L/60)+"分钟前刷新":Math.floor(L/3600)+"小时前刷新"});function ae(L){n.value.selected=[L],n.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([L])),localStorage.setItem("quant_strategy_filter_mode","union"),m.value="calendar",P.value="calendar"}return{applyStrategyFilter:i,statusCounts:h,stockPool:g,strategyDistribution:C,strategyPreviewCount:D,saveStrategyFilter:_,filteredConsensusRank:o,currentPoolSize:l,filteredStrategyCounts:v,poolChangeBadge:j,timeBarPercent:B,lastRefreshTime:G,timeSinceRefresh:J,navigateToStrategyFilter:ae}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function p(d){return a[d]||"var(--text-tertiary)"}function t(d){return e[d]||"var(--bg-hover)"}window.__quantModules.watchlist={create(d){const{ref:m,computed:P,watch:f}=Vue,{currentUser:c,selectedDate:k,stockDetail:n,stockDetailTab:x,stockDetailVisible:i,stockDetailLoading:h,stockKlineLoaded:g,viewCache:C,animateScoreEntrance:D,loadStockKline:_,refreshStockScore:o,disposeStockKline:l,aiHistory:v,aiLoading:j,aiEvalStage:B,aiEvalElapsed:G,aiEvalError:J,aiResult:ae,loadLastEvaluation:L,autoEvaluateConfig:E,autoEvaluateScope:R,batchStocks:W,batchRunning:ie,batchTotal:Z,batchCompleted:ne,batchCurrent:I,batchStatuses:V,batchResults:z,batchEvalErrors:w,expandedDates:M,expandedStocks:oe,savingConfig:U,selectedHistoryIds:y,selectedWatchlistCodes:r,showAutoEvaluateSettings:q,showBatchEvaluate:u}=d,H=s=>(getComputedStyle(document.documentElement).getPropertyValue(s)||"").trim(),ce=m(""),$=m("default"),T=m("default"),Y=m([]),K=P(()=>new Set(Y.value.map(s=>s.code))),Q=m(!1),X=m(!1),ee=P(()=>{const s=[...Y.value];return T.value==="name"?s.sort((O,se)=>O.name.localeCompare(se.name,"zh")):T.value==="added"?s.sort((O,se)=>(se.added_at||"").localeCompare(O.added_at||"")):T.value==="score"&&s.sort((O,se)=>{const xe=Pe(O.code);return Pe(se.code)-xe}),s});function be(s){const O=v.value.filter(xe=>xe.stock_code===s);if(O.length===0)return null;const se=O.reduce((xe,Ee)=>xe.evaluate_time>Ee.evaluate_time?xe:Ee);return{score:se.result.total_score,color:p(se.result.level),bg:t(se.result.level)}}function Pe(s){const O=be(s);return O?O.score:0}function Me(s){at(s.code,s.name),re.value=re.value.filter(O=>O.code!==s.code),ze.value=""}const qe=P(()=>new Set(v.value.map(s=>s.stock_code))),le=m(new Set);function _e(s){le.value.add(s)}const ze=m(""),re=m([]),te=m(!1),ge=m({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Te=m(!1),Ne=m(!1),Ke=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};Ke.REALTIME_WS_PATH;const rt=Ke.REALTIME_DEGRADED_TEXT||"数据不可达",dt=Ke.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";Ke.WARN_RISE_SPEED_THRESHOLD!=null&&Ke.WARN_RISE_SPEED_THRESHOLD,Ke.WARN_VOLUME_RATIO_THRESHOLD!=null&&Ke.WARN_VOLUME_RATIO_THRESHOLD;const Qe=Ke.quoteFmt||{price:s=>s==null?"--":Number(s).toFixed(2),pct:s=>s==null?"--":Number(s).toFixed(2)+"%",num:s=>s==null?"--":Number(s).toFixed(2),color:s=>""},Et=3,he=5e3,we=m({}),Re=m(!1),Ae=m("idle");let Ge=null,Xe=null,Ye=0;function ht(s){return Ke.checkQuoteWarning?Ke.checkQuoteWarning(s):null}function xt(s){return ht(we.value[s])}function ft(s){return Qe.color(we.value[s])}function Ze(s){return Qe.price(we.value[s]&&we.value[s].price)}function jt(s){return Qe.pct(we.value[s]&&we.value[s].change_pct)}function Nt(s,O){return Qe.num(we.value[s]&&we.value[s][O])}function yt(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function ut(){if(!Ge||Ge.readyState!==1)return;const s=(Y.value||[]).map(O=>O.code);s.length!==0&&Ge.send(JSON.stringify({subscribe:s}))}function Vt(){if(Xe&&(clearTimeout(Xe),Xe=null),Ge){try{Ge.onopen=null,Ge.onmessage=null,Ge.onerror=null,Ge.onclose=null,Ge.close()}catch{}Ge=null}we.value={},Re.value=!1,Ae.value="idle"}function S(){const s=yt();if(!s||!Ke.buildRealtimeWsUrl||Ae.value==="open"||Ae.value==="connecting")return;let O;try{O=Ke.buildRealtimeWsUrl()+"?token="+encodeURIComponent(s)}catch{Ae.value="offline",Re.value=!0;return}Ae.value="connecting";let se=null;try{se=new WebSocket(O)}catch{Ae.value="offline",Re.value=!0;return}Ge=se,se.onopen=function(){Ae.value="open",Ye=0,ut()},se.onmessage=function(xe){let Ee=null;try{Ee=JSON.parse(xe.data||"{}")}catch{return}if(!Ee||Ee.type!=="quotes")return;if(Re.value=!!Ee.degraded,Ee.degraded||!Array.isArray(Ee.data)){we.value={};return}const mt={};Ee.data.forEach(function(Je){Je&&Je.code&&(mt[Je.code]=Je)}),we.value=mt},se.onerror=function(){Ae.value="offline",Re.value=!0},se.onclose=function(){Ae.value="offline",Ye<Et?(Ye++,Xe=setTimeout(function(){Ae.value!=="open"&&S()},he*Ye)):Re.value=!0}}f(Y,function(){Ae.value==="open"&&ut()}),yt()&&setTimeout(S,500);async function me(){if(!n.value)return;j.value=!0,ae.value=null,J.value="",B.value="fetching",G.value=0;const s=Date.now(),O=setInterval(()=>{j.value&&(G.value=Math.round((Date.now()-s)/1e3))},500);try{const se=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n.value.stock,stock_name:n.value.name||n.value.stock,strategy:$.value})});B.value="calculating";const xe=await se.json();B.value="analyzing",xe.success?(await nextTick(),ae.value=xe.data,x.value="ai",A()):(J.value=xe.message||"评估失败",ElementPlus.ElMessage.error(J.value))}catch(se){J.value=se&&se.message&&!String(se.message).includes("Failed to fetch")?se.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(J.value)}finally{clearInterval(O),j.value=!1,G.value=0,J.value?B.value="":(B.value="done",setTimeout(()=>{B.value==="done"&&(B.value="")},800))}}const ke=50,Se=m(0),Le=m(!1),We=P(()=>v.value.length<Se.value);async function A(){Q.value=!0,X.value=!1;try{if(!localStorage.getItem("quant_token")){v.value=[];return}const O=await fetch(`/api/ai/history?limit=${ke}&offset=0`);if(O.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),c.value=null;return}const se=await O.json();se.success?(v.value=se.data||[],Se.value=se.total!=null?se.total:v.value.length):X.value=!0}catch(s){console.error("[loadAiHistory] error:",s),X.value=!0}finally{Q.value=!1}}async function de(){if(!(Le.value||!We.value)){Le.value=!0;try{const O=await(await fetch(`/api/ai/history?limit=${ke}&offset=${v.value.length}`)).json();if(O.success&&Array.isArray(O.data)){const se=new Set(v.value.map(Ee=>Ee.id)),xe=O.data.filter(Ee=>!se.has(Ee.id));v.value=v.value.concat(xe),O.total!=null&&(Se.value=O.total)}}catch(s){console.warn("[loadMoreAiHistory] error:",s)}finally{Le.value=!1}}}async function He(s){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const se=await(await fetch(`/api/ai/history/${s}`,{method:"DELETE"})).json();if(se.success){ElementPlus.ElMessage.success("删除成功"),A();const xe=y.value.indexOf(s);xe>=0&&y.value.splice(xe,1)}else ElementPlus.ElMessage.error(se.message||"删除失败")}catch{}}function $e(s){const O=y.value.indexOf(s);O>=0?y.value.splice(O,1):y.value.push(s)}function ot(){y.value=[]}function kt(){r.value=[]}async function Ft(){const s=y.value;if(s.length===0)return;const O=v.value.filter(se=>s.includes(se.id)).map(se=>se.stock_code);u.value=!0,W.value=[...new Set(O)].join(",")}async function Mt(){const s=y.value;if(s.length===0)return;const O=v.value.filter(Ee=>s.includes(Ee.id)),se=[...new Map(O.map(Ee=>[Ee.stock_code,Ee])).values()];let xe=0;for(const Ee of se)K.value.has(Ee.stock_code)||(await at(Ee.stock_code,Ee.stock_name||Ee.stock_code),xe++);xe>0?ElementPlus.ElMessage.success(`已加入 ${xe} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function St(){const s=y.value;if(s.length===0)return;const O=v.value.filter(xe=>s.includes(xe.id)),se=[...new Map(O.map(xe=>[xe.stock_code,xe])).values()];try{const Ee=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:se.map(mt=>({stock_code:mt.stock_code,stock_name:mt.stock_name||""}))})})).json();Ee&&Ee.success?ElementPlus.ElMessage.success(`已登记 ${Ee.count||se.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Ee&&Ee.detail||"批量加入组合失败")}catch(xe){console.warn("batchAddToPortfolio failed:",xe),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function ct(){if(r.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${r.value.length} 只股票？`,"提示",{type:"warning"});for(const s of r.value)await Ht(s);r.value=[],ElementPlus.ElMessage.success("已移除")}catch(s){s&&s.message!=="cancel"&&console.warn("batchRemoveWatchlist:",s)}}function Rt(s){const O=r.value.indexOf(s);O>=0?r.value.splice(O,1):r.value.push(s)}function Ot(){y.value.length===v.value.length?y.value=[]:y.value=v.value.map(s=>s.id)}function _t(){r.value.length===Y.value.length?r.value=[]:r.value=Y.value.map(s=>s.code)}async function Yt(){if(y.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${y.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const O=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:y.value})})).json();O.success?(ElementPlus.ElMessage.success(O.message),y.value=[],A()):ElementPlus.ElMessage.error(O.message||"删除失败")}catch{}}async function vt(){try{const O=await(await fetch("/api/ai/auto-config")).json();O.success&&(E.value=O.data,O.data.evaluate_scope&&(R.value=O.data.evaluate_scope))}catch(s){console.warn("loadAutoEvaluateConfig failed:",s)}}async function bt(){U.value=!0;try{E.value.evaluate_scope=R.value;const O=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E.value)})).json();O.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),q.value=!1):ElementPlus.ElMessage.error(O.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{U.value=!1}}const Bt=m(!1);async function gt(){Bt.value=!0;try{const O=await(await fetch("/api/watchlist")).json();O.success&&(Y.value=O.stocks||[])}catch(s){console.warn("loadWatchlist failed:",s)}finally{Bt.value=!1}}async function at(s,O){try{const xe=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s,name:O})})).json();if(xe.success)return xe.existed||Y.value.push({code:s,name:O,added_at:new Date().toISOString()}),!0}catch(se){console.warn("addToWatchlist failed:",se)}return!1}async function Ht(s){try{await fetch(`/api/watchlist/${encodeURIComponent(s)}`,{method:"DELETE"}),Y.value=Y.value.filter(O=>O.code!==s)}catch(O){console.warn("removeFromWatchlist failed:",O)}}async function aa(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),Y.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(s){console.warn("clearWatchlist failed:",s)}}async function ua(s,O){K.value.has(s)?(await Ht(s),ElementPlus.ElMessage.info("已移除自选")):await at(s,O)&&ElementPlus.ElMessage.success("已加入自选")}async function na(s,O){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(s,O||"");const se=new Date().toISOString().split("T")[0],xe=k.value||se;x.value="kline",ae.value=null,J.value="",l("stockKlineChart"),n.value=null,h.value=!0,g.value=!1,i.value=!0,nextTick(()=>D());try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${xe}`);n.value=await Ee.json()}catch{n.value={stock:s,name:O,total_days:0}}finally{h.value=!1}await nextTick(),await _("daily"),o(),L(s)}const Xt=m(!1);async function va(){var s;if(Y.value.length!==0){Xt.value=!0;try{const se=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();se.success&&se.loaded>0?(((s=se.details)==null?void 0:s.loaded)||[]).forEach(xe=>le.value.add(xe.code)):se.loaded===0&&se.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(O){console.error("预加载K线失败:",O)}finally{Xt.value=!1}}}async function ma(s,O){j.value=!0,ae.value=null,J.value="",B.value="fetching",g.value=!1,l();const se=new Date().toISOString().split("T")[0],xe=k.value||se;try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${xe}`);n.value=await Ee.json()}catch{n.value={stock:s,name:O,total_days:0}}x.value="ai",i.value=!0,await nextTick();try{const mt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s,stock_name:O})})).json();mt.success?(ae.value=mt.data,A()):(J.value=mt.message||"评估失败",ElementPlus.ElMessage.error(J.value))}catch{J.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(J.value)}finally{j.value=!1,B.value=""}}async function Qt(){Y.value.length!==0&&(u.value=!0,W.value=Y.value.map(s=>s.code).join(","))}async function N(){r.value.length!==0&&(u.value=!0,W.value=r.value.join(","))}async function ye(){if(!ze.value.trim()){re.value=[];return}te.value=!0;try{const O=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(ze.value)}`)).json();re.value=(O.results||[]).filter(se=>!K.value.has(se.code))}catch(s){console.warn("searchStockForWatchlist failed:",s)}finally{te.value=!1}}async function Oe(){try{const O=await(await fetch("/api/data-refresh/config")).json();ge.value=O}catch(s){console.error("加载数据刷新配置失败:",s)}}async function De(){Ne.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ge.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ne.value=!1}}async function st(){var s;Te.value=!0;try{const se=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();se.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((s=se.parser_stats)==null?void 0:s.dates_count)||0}交易日`),C.clear(),await Oe()):ElementPlus.ElMessage.error(se.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Te.value=!1}}const et=m(!1);async function zt(){et.value=!0;try{const O=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(O.success){const se=O.result||{},xe=O.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${se.pulled||0}/${se.total||0}, 财务 ${xe.pulled||0}/${xe.total||0}`),C.clear(),await Oe()}else ElementPlus.ElMessage.error(O.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{et.value=!1}}const Kt=P(()=>{const s={};for(const O of v.value){const se=(O.evaluate_time||"").split("T")[0];s[se]||(s[se]=[]),s[se].push(O)}for(const O in s)s[O].sort((se,xe)=>xe.evaluate_time.localeCompare(se.evaluate_time));return s}),Tt=P(()=>{const s={};for(const O of v.value){const se=O.stock_code;s[se]||(s[se]=[]),s[se].push(O)}for(const O in s)s[O].sort((se,xe)=>xe.evaluate_time.localeCompare(se.evaluate_time));return s}),pa=P(()=>{const s={};for(const O of v.value){const se=(O.evaluate_time||"").split("T")[0].slice(0,7);s[se]||(s[se]=[]),s[se].push(O)}for(const O in s)s[O].sort((se,xe)=>xe.evaluate_time.localeCompare(se.evaluate_time));return s}),sa=P(()=>Object.keys(Tt.value).length),ya=P(()=>{const s=v.value.length;return s===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(se=>{const xe=v.value.filter(Ee=>Ee.result.total_score>=se.min&&Ee.result.total_score<=se.max).length;return{...se,count:xe,pct:Math.round(xe/s*100)}})});async function Zt(){if(!ce.value)return;const s=Y.value.find(O=>O.code===ce.value);if(s){j.value=!0,ae.value=null,J.value="",B.value="fetching";try{n.value={stock:s.code,name:s.name,total_days:0},i.value=!0,x.value="ai",await nextTick();const se=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s.code,stock_name:s.name,strategy:$.value})})).json();se.success?(ae.value=se.data,A(),ce.value=""):(J.value=se.message||"评估失败",ElementPlus.ElMessage.error(J.value))}catch{J.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(J.value)}finally{j.value=!1,B.value=""}}}function Pa(s){const O=M.value.indexOf(s);O>=0?M.value.splice(O,1):M.value.push(s)}function fa(s){const se=(Kt.value[s]||[]).map(Ee=>Ee.id);se.every(Ee=>y.value.includes(Ee))?y.value=y.value.filter(Ee=>!se.includes(Ee)):se.forEach(Ee=>{y.value.includes(Ee)||y.value.push(Ee)})}function Ra(s){const se=(pa.value[s]||[]).map(Ee=>Ee.id);se.every(Ee=>y.value.includes(Ee))?y.value=y.value.filter(Ee=>!se.includes(Ee)):se.forEach(Ee=>{y.value.includes(Ee)||y.value.push(Ee)})}function za(s){const O=oe.value.indexOf(s);O>=0?oe.value.splice(O,1):oe.value.push(s)}function ga(s){const se=(Tt.value[s]||[]).map(Ee=>Ee.id);se.every(Ee=>y.value.includes(Ee))?y.value=y.value.filter(Ee=>!se.includes(Ee)):se.forEach(Ee=>{y.value.includes(Ee)||y.value.push(Ee)})}const Wt={},ba={};function Jt(s,O,se){if(!s||(se&&(ba[O]={el:s,records:se}),Wt[O]===s))return;const xe=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ee=()=>{Object.keys(Wt).forEach(Be=>{if(Wt[Be]&&Wt[Be]!==s){try{Wt[Be].dispose()}catch{}delete Wt[Be]}});const mt=[...se].sort((Be,Dt)=>Be.evaluate_time.localeCompare(Dt.evaluate_time)),Je=mt.map(Be=>(Be.evaluate_time||"").split("T")[0]),pt=mt.map(Be=>{var Dt;return((Dt=Be.result)==null?void 0:Dt.total_score)??null}),ea=mt.map(Be=>{var Dt;return((Dt=Be.result)==null?void 0:Dt.level)??""}),Ct={primary:H("--qc-primary-600")||"#b8922a",textPrimary:H("--text-primary")||"#1f2937",textSecondary:H("--text-secondary")||"#6b7280",border:H("--border-light")||"#e5e7eb",up:H("--color-success")||"#67c23a",down:H("--color-danger")||"#f56c6c"},la=[];for(let Be=1;Be<pt.length;Be++)pt[Be]!=null&&pt[Be-1]!=null&&Math.abs(pt[Be]-pt[Be-1])>=15&&la.push({name:"大幅变化",coord:[Je[Be],pt[Be]],value:(pt[Be]-pt[Be-1]>0?"↑":"↓")+Math.abs(pt[Be]-pt[Be-1]),symbol:"pin",symbolSize:32,itemStyle:{color:pt[Be]-pt[Be-1]>0?Ct.up:Ct.down}});const ta=echarts.init(s);ta.setOption({tooltip:{trigger:"axis",backgroundColor:H("--bg-card")||"#ffffff",borderColor:Ct.border,textStyle:{color:Ct.textPrimary},formatter:function(Be){var _a;const Dt=(_a=Be[0])==null?void 0:_a.dataIndex,Ea=Dt!=null?ea[Dt]:"";return Je[Dt]+"<br/>得分: "+pt[Dt]+(Ea?" ("+Ea+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Je,axisLabel:{fontSize:10,rotate:30,color:Ct.textSecondary},axisLine:{lineStyle:{color:Ct.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Ct.textSecondary},splitLine:{lineStyle:{color:Ct.border}}},series:[{data:pt,type:"line",smooth:!0,lineStyle:{color:Ct.primary,width:2},itemStyle:{color:Ct.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:la.length>0?{data:la}:void 0}]}),Wt[O]=ta};xe?xe().then(Ee).catch(()=>{}):Ee()}function wa(){Object.keys(ba).forEach(s=>{const O=ba[s];if(!(!O||!O.el)){if(Wt[s]){try{Wt[s].dispose()}catch{}delete Wt[s]}Jt(O.el,s,O.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(wa));async function ka(s){ae.value=s,g.value=!1,l();try{const O=await fetch(`/api/calendar/stock/${s.stock_code}?date=${k.value}`);n.value=await O.json()}catch{n.value={stock:s.stock_code,name:s.stock_name||s.stock_code,total_days:0,history:[]}}i.value=!0,x.value="ai"}async function b(){if(!W.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const s=W.value.split(/[,，\s]+/).filter(Je=>Je.trim());if(s.length===0)return;ie.value=!0,Z.value=s.length,ne.value=0,I.value="",V.value={},z.value={},w.value={},s.forEach(Je=>{V.value[Je]="pending",z.value[Je]=null});const O={"Content-Type":"application/json"};let se=0,xe=0,Ee=!1;try{const Je=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:O,body:JSON.stringify({stock_codes:s})});if(Je.ok&&Je.body){Ee=!0;const pt=Je.body.getReader(),ea=new TextDecoder("utf-8");let Ct="",la=!1;for(;!la;){const{value:ta,done:Be}=await pt.read();la=Be,Ct+=ea.decode(ta||new Uint8Array,{stream:!la});let Dt;for(;(Dt=Ct.indexOf(`

`))>=0;){const Ea=Ct.slice(0,Dt);Ct=Ct.slice(Dt+2);const _a=Ea.split(`
`).find(Ka=>Ka.startsWith("data: "));if(!_a)continue;let qt;try{qt=JSON.parse(_a.slice(6))}catch{continue}qt.type==="start"?qt.total&&(Z.value=qt.total):qt.type==="item"?(ne.value++,I.value=qt.stock_code,qt.success?(V.value[qt.stock_code]="success",z.value[qt.stock_code]=qt,se++):(V.value[qt.stock_code]="error",w.value[qt.stock_code]=qt.error||"评估失败",xe++)):qt.type==="done"&&(typeof qt.success=="number"&&(se=qt.success),typeof qt.fail=="number"&&(xe=qt.fail))}}if(Ct.trim()){const ta=Ct.split(`
`).find(Be=>Be.startsWith("data: "));if(ta)try{const Be=JSON.parse(ta.slice(6));Be.type==="item"?(ne.value++,I.value=Be.stock_code,Be.success?(V.value[Be.stock_code]="success",z.value[Be.stock_code]=Be,se++):(V.value[Be.stock_code]="error",w.value[Be.stock_code]=Be.error||"评估失败",xe++)):Be.type==="done"&&(typeof Be.success=="number"&&(se=Be.success),typeof Be.fail=="number"&&(xe=Be.fail))}catch{}}}}catch{Ee=!1}if(!Ee){se=0,xe=0,ne.value=0;for(const Je of s){I.value=Je,V.value[Je]="running";try{const ea=await(await fetch("/api/ai/evaluate",{method:"POST",headers:O,body:JSON.stringify({stock_code:Je.trim(),stock_name:Je.trim()})})).json();ea.success?(V.value[Je]="success",z.value[Je]=ea.data,se++):(V.value[Je]="error",w.value[Je]=ea.message&&ea.message!=="success"?ea.message:"评估失败",xe++)}catch(pt){V.value[Je]="error",w.value[Je]="网络错误: "+(pt&&pt.message?pt.message:pt),xe++}ne.value++}}I.value="",await A();const mt=s.length;setTimeout(()=>{xe===0?ElementPlus.ElMessage.success(`评估完成 成功 ${se}/${mt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${se}/${mt} · 失败 ${xe}`),ie.value=!1},500)}return{quickEvalStock:ce,evalStrategy:$,watchlistSort:T,watchlist:Y,watchlistCodes:K,sortedWatchlist:ee,getWatchlistScore:be,getLatestScore:Pe,addSearchResult:Me,evaluatedCodes:qe,klineLoadedCodes:le,markKlineLoaded:_e,watchlistSearch:ze,watchlistResults:re,watchlistSearching:te,dataRefreshConfig:ge,dataRefreshReloading:Te,dataRefreshSaving:Ne,aiHistoryLoading:Q,aiHistoryError:X,aiHistoryTotal:Se,aiHistoryLoadingMore:Le,hasMoreAiHistory:We,loadMoreAiHistory:de,watchlistLoading:Bt,doAiEvaluate:me,loadAiHistory:A,deleteSingleHistory:He,toggleSelectHistory:$e,clearSelection:ot,clearWatchlistSelection:kt,batchReevaluateHistory:Ft,batchAddToWatchlist:Mt,batchAddToPortfolio:St,batchRemoveWatchlist:ct,toggleSelectWatchlist:Rt,selectAllHistory:Ot,selectAllWatchlist:_t,deleteSelectedHistory:Yt,loadAutoEvaluateConfig:vt,saveAutoEvaluateConfig:bt,loadWatchlist:gt,addToWatchlist:at,removeFromWatchlist:Ht,clearWatchlist:aa,toggleWatchlist:ua,showStockKline:na,preloadingKline:Xt,preloadWatchlistKline:va,watchlistEvaluate:ma,batchEvaluateWatchlist:Qt,batchEvaluateSelected:N,searchStockForWatchlist:ye,loadDataRefreshConfig:Oe,saveDataRefreshConfig:De,triggerDataReload:st,triggerDataPull:zt,dataPullRunning:et,groupedByDate:Kt,aiHistoryByStock:Tt,groupedByMonth:pa,aiHistoryStockCount:sa,scoreDistribution:ya,quickEvaluate:Zt,toggleDateExpand:Pa,toggleSelectDate:fa,toggleSelectMonth:Ra,toggleStockExpand:za,toggleSelectStock:ga,registerTrendChart:Jt,viewAiResult:ka,doBatchEvaluate:b,realtimeQuotes:we,realtimeDegraded:Re,realtimeWsState:Ae,connectRealtimeQuotes:S,disconnectRealtimeQuotes:Vt,quoteWarningFor:xt,realtimeQuoteColor:ft,realtimePriceText:Ze,realtimePctText:jt,realtimeRatioText:Nt,REALTIME_DEGRADED_TEXT:rt,REALTIME_FALLBACK_TEXT:dt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:p}=Vue,t=e([]),d=e(null),m=e([]),P=e(!1),f=e(!1),c=e(!1),k=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),n=e(!1),x=e(!1),i=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),h=e(!1),g=e("positions"),C=e(30),D=e(!1),_=e(""),o=e(!1),l=e({dates:[],equity:[],values:[]}),v=p(()=>t.value.length),j=e("metrics"),B=e(!1),G=e(""),J=e(!1),ae=e({metrics:null,rules:[],rebalance:null}),L=p(function(){const u=ae.value.metrics;if(!u)return[];const H=function($){return $==null?"--":Number($).toFixed(2)+"%"},ce=function($){return $==null?"--":Number($).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:H(u.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:H(u.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:H(u.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:H(u.cvar)},{key:"max_drawdown",label:"最大回撤",value:H(u.max_drawdown)},{key:"annual_return",label:"年化收益",value:H(u.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ce(u.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ce(u.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ce(u.calmar_ratio)},{key:"beta",label:"Beta",value:ce(u.beta)}]});async function E(){B.value=!0;try{const u=await(await fetch("/api/portfolio/risk?days=60")).json(),H=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ce=u&&u.success?u.risk:null,$=H&&H.success?H.rules||[]:[],T=H&&H.success?H.rebalance:null;ae.value={metrics:ce,rules:$,rebalance:T},J.value=!!(ce&&Object.keys(ce).length>0),G.value=u&&u.note||H&&H.note||""}catch(u){console.warn("[portfolio] 加载风险数据失败:",u),J.value=!1,G.value="风险数据加载失败"}finally{B.value=!1}}async function R(){P.value=!0,f.value=!1;try{const H=await(await fetch("/api/portfolio")).json();H.success?(t.value=H.positions||[],d.value=H.summary||null):f.value=!0}catch(u){console.warn("[portfolio] 加载持仓失败:",u),f.value=!0}finally{P.value=!1}}async function W(){const u=k.value,H=(u.stock_code||"").trim();if(!H){ElementPlus.ElMessage.warning("请输入股票代码");return}const ce=Number(u.cost_price),$=Number(u.quantity);if(!(ce>0)||!($>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}n.value=!0;try{const Y=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:H,stock_name:(u.stock_name||"").trim(),cost_price:ce,quantity:$})})).json();Y.success?(ElementPlus.ElMessage.success(Y.message||"持仓已更新"),c.value=!1,k.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await R(),U(C.value)):ElementPlus.ElMessage.error(Y.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{n.value=!1}}async function ie(u){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+u+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ce=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(u),{method:"DELETE"})).json();ce.success?(ElementPlus.ElMessage.success("已删除持仓"),await R(),I(),U(C.value)):ElementPlus.ElMessage.error(ce.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function Z(u,H){i.value={stock_code:u,stock_name:H||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},x.value=!0}async function ne(){const u=i.value;if(!u.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const H=Number(u.price),ce=Number(u.quantity);if(!(H>0)||!(ce>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}h.value=!0;try{const T=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:u.stock_code,stock_name:u.stock_name||"",action:u.action,price:H,quantity:ce,trade_date:u.trade_date||"",note:(u.note||"").trim()})})).json();T.success?(ElementPlus.ElMessage.success(T.message||"调仓已记录"),x.value=!1,await R(),await I(),U(C.value)):ElementPlus.ElMessage.error(T.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{h.value=!1}}async function I(){try{const H=await(await fetch("/api/portfolio/trades")).json();H.success&&(m.value=H.trades||[])}catch(u){console.warn("[portfolio] 加载调仓记录失败:",u)}}const V=u=>(getComputedStyle(document.documentElement).getPropertyValue(u)||"").trim();function z(u){if(!u||!u.length)return[];let H=u[0]||0;const ce=[];for(let $=0;$<u.length;$++){const T=u[$]||0;T>H&&(H=T),ce.push(H>0?Math.round((T-H)/H*1e3)/10:0)}return ce}function w(){const u={primary:V("--qc-primary-600")||"#b8922a",textPrimary:V("--text-primary")||"#1f2937",textSecondary:V("--text-secondary")||"#6b7280",border:V("--border-light")||"#e5e7eb",up:V("--color-rise")||"#E63946",down:V("--color-fall")||"#2E7D32"},H=l.value;return{tooltip:{trigger:"axis",backgroundColor:V("--bg-card")||"#ffffff",borderColor:u.border,textStyle:{color:u.textPrimary},formatter:function(ce){const $=ce[0]?ce[0].dataIndex:-1,T=H.dates[$]||"",Y=H.equity[$],K=H.values[$];let Q=T||"";return Y!=null&&(Q+="<br/>组合净值: "+Y),K!=null&&(Q+="<br/>组合市值: "+K),Q}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:H.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:u.textSecondary},axisLine:{lineStyle:{color:u.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:u.textSecondary},splitLine:{lineStyle:{color:u.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:u.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:H.equity,smooth:!0,showSymbol:!1,lineStyle:{color:u.primary,width:2},itemStyle:{color:u.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:V("--primary-rgb")?"rgba("+V("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:V("--primary-rgb")?"rgba("+V("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:z(H.equity),smooth:!0,showSymbol:!1,lineStyle:{color:u.down,width:1.5},itemStyle:{color:u.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function M(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function oe(u,H,ce){l.value={dates:u||[],equity:H||[],values:ce||[]},o.value=!!u&&u.length>0,o.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",w,{key:"portfolio-equity"}):M()}async function U(u){D.value=!0,_.value="";const H=Number(u)||C.value||30;C.value=H;try{const $=await(await fetch("/api/portfolio/equity_curve?days="+H)).json();$.success?(_.value=$.note||"",oe($.dates||[],$.equity||[],$.values||[])):(_.value="数据暂不可用",M())}catch(ce){console.warn("[portfolio] 加载收益曲线失败:",ce),_.value="数据暂不可用",M()}finally{D.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function y(u,H){if(u==null||u===""||isNaN(Number(u)))return"--";const ce=Number(u),$=H??2;return(ce>=0?"+":"")+ce.toFixed($)}function r(u,H){if(u==null||u===""||isNaN(Number(u)))return"--";const ce=Number(u),$=H??2;return(ce>=0?"+":"")+ce.toFixed($)+"%"}function q(u){if(u==null||u===""||isNaN(Number(u)))return"";const H=Number(u);return H>0?"portfolio-up":H<0?"portfolio-down":""}return{positions:t,summary:d,trades:m,loading:P,loadError:f,showAddForm:c,addForm:k,addSaving:n,tradeFormVisible:x,tradeForm:i,tradeSaving:h,portfolioTab:g,equityDays:C,equityLoading:D,equityNote:_,equityHasData:o,portfolioCount:v,loadPortfolio:R,addPosition:W,removePosition:ie,openTradeForm:Z,submitTrade:ne,loadTrades:I,loadEquity:U,fmtSigned:y,fmtSignedPct:r,signClass:q,riskTab:j,riskLoading:B,riskNote:G,riskHasData:J,riskData:ae,riskMetricList:L,loadRisk:E}}}})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(c,k){var n=Number(c);return isFinite(n)?n:typeof k=="number"?k:0}function e(c){var k=Array.isArray(c)?c:[];if(k.length<2)return null;for(var n=-1/0,x=0,i=0,h=0,g=0,C=0;C<k.length;C++){var D=a(k[C].equity!=null?k[C].equity:k[C].value);D>n&&(n=D,x=C);var _=n>0?(n-D)/n*100:0;_>i&&(i=_,h=x,g=C)}function o(l){return k[l]&&k[l].date?k[l].date:""}return{maxDrawdown:Math.round(i*100)/100,peakIndex:h,troughIndex:g,peakDate:o(h),troughDate:o(g)}}function p(c){for(var k=c||{},n={},x=Object.keys(k).sort(),i=0;i<x.length;i++){var h=x[i],g=String(h).slice(0,4);/^\d{4}$/.test(g)&&(n[g]=(n[g]||0)+a(k[h]))}var C=Object.keys(n).sort();return C.map(function(D){return{year:D,return:Math.round(n[D]*100)/100}})}function t(c){var k=Array.isArray(c)?c:[],n={};k.forEach(function(h){(h.points||[]).forEach(function(g){g&&g.date&&(n[g.date]=1)})});var x=Object.keys(n).sort(),i=k.map(function(h){var g={};return(h.points||[]).forEach(function(C){C&&C.date&&(g[C.date]=a(C.value!=null?C.value:C.equity))}),{name:h.name||"",data:x.map(function(C){return C in g?g[C]:null})}});return{dates:x,series:i}}function d(c){var k=c||{},n=function(i){return a(i)},x=function(i,h){var g=n(i);return isFinite(g)?g.toFixed(h):"--"};return[{key:"total_return",label:"总收益",value:x(k.total_return,2),suffix:"%",dir:n(k.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:x(k.annual_return,2),suffix:"%",dir:n(k.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:x(k.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:x(k.sharpe_ratio,2),suffix:"",dir:n(k.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:x(k.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:x(k.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(n(k.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:x(k.volatility,2),suffix:"%",dir:""}]}function m(c){var k=c==null?"":String(c);return/[",\n]/.test(k)?'"'+k.replace(/"/g,'""')+'"':k}function P(c){var k=c||{},n=[];n.push("回测指标"),n.push("指标,数值"),(k.metrics||[]).forEach(function(o){n.push(m(o.label)+","+m((o.value||"")+(o.suffix||"")))}),n.push(""),n.push("净值曲线");var x=["日期"].concat((k.series||[]).map(function(o){return o.name}));n.push(x.map(m).join(","));for(var i=k.dates||[],h=k.series||[],g=0;g<i.length;g++){for(var C=[i[g]],D=0;D<h.length;D++){var _=h[D].data&&h[D].data[g];C.push(_??"")}n.push(C.map(m).join(","))}return n.push(""),n.push("交易明细"),n.push("日期,股票代码,方向,原因"),(k.trades||[]).forEach(function(o){n.push(m(o.date)+","+m(o.stock)+","+m(o.action)+","+m(o.reason))}),n.join(`
`)}function f(c){return c==="buy"?"买入":c==="sell"?"卖出":c||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:p,buildNavSeries:t,buildMetrics:d,buildBacktestCsv:P,tradeActionText:f}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:p}=Vue,t=window.QuantBacktest||{},d=a||{},m=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],f=(Array.isArray(d.backtestStrategies)&&d.backtestStrategies.length?d.backtestStrategies:m).map(V=>({id:V.id,name:V.name})),c=e(f.length?[f[0].id]:[]),k=e(D()),n=e(1e5),x=e(3e-4),i=e(!1),h=e(!1),g=e(null),C=e("");function D(){const V=new Date,z=new Date;z.setFullYear(z.getFullYear()-1);const w=M=>M.getFullYear()+"-"+String(M.getMonth()+1).padStart(2,"0")+"-"+String(M.getDate()).padStart(2,"0");return[w(z),w(V)]}function _(V){const z=c.value.indexOf(V);z>=0?c.value.length>1&&c.value.splice(z,1):c.value.push(V)}function o(V){const z=f.find(w=>w.id===V);return z?z.name:V}function l(V){const z=V.summary||V;return{strategy_id:z.strategy_id,start_date:z.start_date,end_date:z.end_date,total_days:z.total_days,total_return:z.total_return,annual_return:z.annual_return,max_drawdown:z.max_drawdown,volatility:z.volatility,sharpe_ratio:z.sharpe_ratio,sortino_ratio:z.sortino_ratio,win_rate:z.win_rate,profit_loss_ratio:z.profit_loss_ratio,avg_positions:z.avg_positions!=null?z.avg_positions:z.avg_positions_per_day,total_trades:z.total_trades,turnover_rate:z.turnover_rate,success:z.success!==!1,message:z.message||"",insample_total_return:z.insample_total_return!=null?z.insample_total_return:null,outsample_total_return:z.outsample_total_return!=null?z.outsample_total_return:null,out_sample_ratio:z.out_sample_ratio!=null?z.out_sample_ratio:.2,overfit_warning:!!z.overfit_warning,overfit_reason:z.overfit_reason||""}}function v(V){return(Array.isArray(V)?V:[]).map(z=>({date:z.date,value:z.equity!=null?z.equity:z.value}))}function j(V,z){const w=l(z),M=v(z.equity_curve),oe=z.monthly_returns||{},U=Array.isArray(z.trade_history)?z.trade_history:[],y={id:V,name:o(V),summary:w,equityCurve:M,monthlyReturns:oe,trades:U};let r=null;if(i.value){const q=Number(n.value)||1e5;r={name:"现金基准",points:M.map(u=>({date:u.date,value:q}))}}return{success:!0,mode:"single",strategies:[y],primary:y,benchmark:r,period:(w.start_date||"")+" ~ "+(w.end_date||"")}}function B(V,z){const w=z.strategy_results||{},M=V.map(y=>{const r=w[y];if(!r)return null;const q=l(r);return{id:y,name:o(y),summary:q,equityCurve:v(r.equity_curve),monthlyReturns:r.monthly_returns||{},trades:Array.isArray(r.trade_history)?r.trade_history:[]}}).filter(y=>y&&y.summary.success!==!1),oe=M.length?M[0]:null;let U=null;return i.value&&(U={name:"等权组合基准",points:v(z.portfolio_equity)}),{success:M.length>0,mode:"multi",strategies:M,primary:oe,benchmark:U,period:oe?oe.summary.start_date+" ~ "+oe.summary.end_date:""}}const G=p(()=>{const V=g.value;return!V||!V.primary?[]:t.buildMetrics?t.buildMetrics(V.primary.summary):[]}),J=p(()=>{const V=g.value;return!V||!V.primary||!V.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(V.primary.monthlyReturns):[]}),ae=p(()=>{const V=g.value;return!V||!V.primary?[]:(V.primary.trades||[]).slice().sort((z,w)=>String(w.date||"").localeCompare(String(z.date||"")))}),L=p(()=>{const V=g.value;return!V||!V.strategies||V.strategies.length<2?[]:V.strategies.map(z=>({name:z.name,metrics:t.buildMetrics?t.buildMetrics(z.summary):[]}))}),E=p(()=>{const V=g.value;return!V||!V.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(V.primary.equityCurve):null});async function R(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const z=c.value;if(!z.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const w=k.value,M={start_date:w&&w[0]||void 0,end_date:w&&w[1]||void 0},oe={"Content-Type":"application/json"};h.value=!0,g.value=null,C.value="";try{if(z.length===1){const U=Object.assign({},M,{initial_capital:Number(n.value)||1e5,commission_rate:Number(x.value)||3e-4}),y=await fetch("/api/backtest/"+encodeURIComponent(z[0]),{method:"POST",headers:oe,body:JSON.stringify(U)});if(!y.ok){const q=await y.json().catch(()=>({}));throw new Error(q.detail||"回测失败")}const r=await y.json();if(!r.success)throw new Error(r.message||"回测失败");g.value=j(z[0],r)}else{const U=await fetch("/api/backtest/multi",{method:"POST",headers:oe,body:JSON.stringify(Object.assign({},M,{strategy_ids:z}))});if(!U.ok){const r=await U.json().catch(()=>({}));throw new Error(r.detail||"回测失败")}const y=await U.json();if(!y.success)throw new Error(y.message||"多策略回测失败");if(g.value=B(z,y.data||{}),!g.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(U){C.value=U&&U.message?U.message:"回测失败",ElementPlus.ElMessage.error(C.value)}finally{h.value=!1}}function W(){const V=g.value,z={dates:[],series:[]};if(!V)return z;const w=V.strategies.map(oe=>({name:oe.name,points:oe.equityCurve}));V.benchmark&&V.benchmark.points&&V.benchmark.points.length&&w.push({name:V.benchmark.name,points:V.benchmark.points});const M=t.buildNavSeries?t.buildNavSeries(w):z;return ie(M,V)}function ie(V,z){const w=H=>(getComputedStyle(document.documentElement).getPropertyValue(H)||"").trim(),M={primary:w("--qc-primary-600")||"#b8922a",success:w("--color-success")||"#4CAF50",accent:w("--color-accent")||"#F59E0B",info:w("--color-info")||"#1976d2",ai:w("--color-ai")||"#6366f1",textPrimary:w("--text-primary")||"#1f2937",textSecondary:w("--text-secondary")||"#6b7280",border:w("--border-light")||"#e5e7eb",up:w("--color-rise")||"#E63946",down:w("--color-fall")||"#2E7D32",bg:w("--bg-card")||"#ffffff"},oe=[M.primary,M.success,M.accent,M.info,M.ai],y=M.bg.length===7&&parseInt(M.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",r=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(z.primary?z.primary.equityCurve:[]):null,q=r&&r.peakDate&&r.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:M.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+r.maxDrawdown+"%",xAxis:r.peakDate,itemStyle:{color:M.down}},{xAxis:r.troughDate}]]}:void 0,u=V.series.map((H,ce)=>{const $=z.benchmark&&H.name===z.benchmark.name,T=oe[ce%oe.length];return{name:H.name,type:"line",data:H.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:$?2:2.4,type:$?"dashed":"solid",color:T},itemStyle:{color:T},emphasis:{focus:"series"},...ce===0&&q?{markArea:q}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:y,borderColor:M.border,textStyle:{color:M.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:M.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:V.dates,boundaryGap:!1,axisLine:{lineStyle:{color:M.border}},axisLabel:{color:M.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:M.textSecondary,fontSize:11},splitLine:{lineStyle:{color:M.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:M.border,textStyle:{color:M.textSecondary,fontSize:10}}],series:u}}function Z(V){if(!V){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",W,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function ne(){const V=g.value;if(!V||!V.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const z=V.strategies.map(u=>({name:u.name,points:u.equityCurve}));V.benchmark&&z.push({name:V.benchmark.name,points:V.benchmark.points});const w=t.buildNavSeries?t.buildNavSeries(z):{dates:[],series:[]},M=t.tradeActionText||(u=>u),oe=ae.value.map(u=>({date:u.date,stock:u.stock,action:M(u.action),reason:u.reason})),U=t.buildBacktestCsv?t.buildBacktestCsv({metrics:G.value,dates:w.dates,series:w.series,trades:oe}):"",y=new Blob(["\uFEFF"+U],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(y),q=document.createElement("a");q.href=r,q.download="backtest-"+V.strategies.map(u=>u.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",q.click(),URL.revokeObjectURL(r),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function I(V,z){return V==null||V===""||isNaN(Number(V))?"--":Number(V).toFixed(z??2)}return{btStrategyOptions:f,btSelectedStrategies:c,toggleBtStrategy:_,btDateRange:k,btCapital:n,btCommissionRate:x,btIncludeBenchmark:i,btRunning:h,btResult:g,btError:C,btMetrics:G,btAnnualReturns:J,btTrades:ae,btStrategyMetricsRows:L,btDrawdownRegion:E,runBacktestWorkbench:R,exportBacktestCSV:ne,registerBacktestNavChart:Z,btFmtNum:I}}}})();(function(){const{ref:a,computed:e,watch:p,onUnmounted:t}=Vue,d=n=>(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim(),m=72,P={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},f={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},c={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},k={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const n=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),x=a({}),i=a(!1),h=a({}),g=a({cycles:[]}),C=a(!1),D=a({autoRefresh:!0,refreshInterval:300}),_=a(""),o=a(""),l=a(!1),v=a("");let j=null;const B={x:0,y:0},G=e(()=>{const K=x.value;return["recession","recovery","overheat","stagflation"].map(X=>{const ee=K[X]||{};return{key:X,name:ee.name||X,icon:c[ee.icon]||"bar-chart-3",color:ee.color||d("--text-tertiary")||"#888",bg:ee.bg_color||d("--bg-card")||"#f5f5f5",textColor:ee.color||d("--text-primary")||"#333",tagline:ee.allocation&&k[X]||""}})}),J=e(()=>{var Q,X,ee,be;const K=n.value.indicators||{};return[{key:"pmi",label:"PMI",value:(Q=K.pmi)==null?void 0:Q.toFixed(2),color:K.pmi>=50?d("--color-success")||"#43a047":d("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((X=K.gdp_growth)==null?void 0:X.toFixed(2))+"%",color:d("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((ee=K.cpi)==null?void 0:ee.toFixed(2))+"%",color:K.cpi>1.2?d("--color-danger")||"#E53935":d("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((be=K.m2_growth)==null?void 0:be.toFixed(2))+"%",color:d("--color-success")||"#43a047"}]}),ae=K=>{K=K||{};const Q=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],X=()=>d("--color-success")||"#43a047",ee=()=>d("--color-danger")||"#E53935",be=()=>d("--color-warning")||"#FF9800",Pe={宽松:X(),中位:be(),偏低:ee(),高增长:X(),承压:ee(),不利:ee()};return Q.map(Me=>{const qe=K[Me.key]||{},le=qe.score||0,_e=Math.min(100,Math.max(5,(le+2)*25)),ze=le>=.3?"#66BB6A":le>=-.3?"#FFB74D":"#EF5350",re=le>=0?"#66BB6A":"#EF5350";return{key:Me.key,label:Me.label,scoreStr:le.toFixed(2),level:qe.level||"—",barWidth:_e,barColor:ze,scoreColor:re,color:Pe[qe.level]||"#888888"}})},L=e(()=>ae(n.value.dimension_scores)),E=e(()=>ae(h.value._dimensions)),R=e(()=>{var Q;const K=((Q=n.value.confidence)==null?void 0:Q.level)||"";return K==="高"?"#43a047":K==="中"?"#FF9800":K==="低"?"#E53935":"var(--text-secondary)"}),W=e(()=>{var ee,be,Pe,Me;const K=x.value,Q={recovery:0,overheat:1,stagflation:2,recession:3},X={};for(const[qe,le]of Object.entries(K))X[qe]={name:le.name,icon:le.icon,color:le.color,lightColor:le.bg_color,duration:"~"+(((ee=le.historical_stats)==null?void 0:ee.avg_duration_months)||18)+"个月",order:Q[qe]||0,period:((Pe=(be=le.case_studies)==null?void 0:be[0])==null?void 0:Pe.split("：")[0])||"",avgMonths:((Me=le.historical_stats)==null?void 0:Me.avg_duration_months)||18};return X}),ie=e(()=>{var le,_e;const K=n.value.stage,X={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[K]||{x:150,y:150},ee=n.value.dimension_scores||{},be=((le=ee.growth)==null?void 0:le.score)||0,Pe=((_e=ee.inflation)==null?void 0:_e.score)||0,Me=Math.max(-30,Math.min(30,be*15)),qe=Math.max(-30,Math.min(30,-Pe*15));return{x:X.x+Me,y:X.y+qe,prevX:B.x,prevY:B.y}}),Z=e(()=>{var ee;const K=Math.min(100,((ee=n.value.timing)==null?void 0:ee.progress_percent)||0),Q=n.value.color||"#4CAF50",X=K>100?"linear-gradient(90deg, "+Q+", #FF9800)":Q;return{width:K+"%",background:X}});function ne(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[n.value.stage]||0}function I(){var K,Q;return((Q=(K=n.value)==null?void 0:K.timing)==null?void 0:Q.progress_percent)||0}function V(){var K,Q;return((Q=(K=n.value)==null?void 0:K.timing)==null?void 0:Q.duration_months)||0}function z(){var K,Q;return((Q=(K=n.value)==null?void 0:K.timing)==null?void 0:Q.avg_duration_months)||18}function w(K){var be,Pe;const Q=W.value,X=((be=Q[n.value.stage])==null?void 0:be.order)||0;return(((Pe=Q[K])==null?void 0:Pe.order)||0)<X}function M(K){return P[K]||K}function oe(K){return f[K]||K}function U(K){const Q=["#43a047","#f57c00","#1976d2","#757575"];return Q[K-1]||Q[3]}async function y(){try{const Q=await(await fetch("/api/market/merrill-clock/stages")).json();Q.success&&Q.data&&(x.value=Q.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function r(){C.value=!0;try{const Q=await(await fetch("/api/market/merrill-clock/timeline")).json();if(Q.success&&Q.data){const X=Array.isArray(Q.data.cycles)?Q.data.cycles.slice().reverse():[];g.value={cycles:X}}}catch{console.warn("获取美林时钟时间轴失败")}finally{C.value=!1}}async function q(K){await H(K)}async function u(){var K,Q;try{const ee=await(await fetch("/api/market/merrill-clock")).json(),be=ee.stage||"recovery",Pe=x.value[be]||{};if(n.value={...Pe,...ee,stage_cn:ee.stage_cn||Pe.stage_cn||"",stage_name:ee.stage_name||Pe.name||"",name:ee.name||Pe.name||"复苏期"},_.value=new Date().toLocaleTimeString("zh-CN"),v.value&&v.value!==be){const Me=x.value,qe=((K=Me[v.value])==null?void 0:K.name)||v.value,le=((Q=Me[be])==null?void 0:Q.name)||be;ElementPlus.ElMessage({message:"美林时钟阶段切换："+qe+" → "+le,type:"warning",duration:6e3,showClose:!0})}v.value=be}catch(X){console.error("获取美林时钟失败:",X);const ee=x.value.recovery||{};n.value={...ee,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function H(K){var X;i.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",h.value=x.value[K]||x.value.recovery||{};const Q=((X=n.value)==null?void 0:X.stage)===K;h.value._isCurrent=Q,Q&&n.value&&(h.value._nextPrediction=n.value.next_stage_prediction,h.value._confidence=n.value.confidence,h.value._stage=n.value.stage,h.value._dimensions=n.value.dimension_scores);try{const be=await(await fetch("/api/market/merrill-clock/stage/"+K)).json();if(be.success&&be.data){const Pe={...x.value[K],...be.data};Pe._is_current!==void 0&&(Pe._isCurrent=Pe._is_current),Pe._current_timing&&(Pe._currentTiming=Pe._current_timing),Pe._last_period&&(Pe._lastPeriod=Pe._last_period),h.value._nextPrediction&&(Pe._nextPrediction=h.value._nextPrediction),h.value._confidence&&(Pe._confidence=h.value._confidence),h.value._stage&&(Pe._stage=h.value._stage),h.value._dimensions&&(Pe._dimensions=h.value._dimensions),Object.assign(h.value,Pe)}}catch(ee){console.warn("获取阶段详情失败:",ee)}}function ce(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:D.value.autoRefresh,refreshInterval:D.value.refreshInterval})),D.value.autoRefresh?(clearInterval(j),j=setInterval(u,D.value.refreshInterval*1e3)):clearInterval(j),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function $(){l.value=!0,o.value="";try{const Q=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();Q.success?(o.value="重评估完成："+(Q.stage_name||Q.stage),await u(),ElementPlus.ElMessage.success("重评估完成")):(o.value=Q.message||"重评估失败",ElementPlus.ElMessage.error(Q.message||"重评估失败"))}catch{o.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{l.value=!1}}function T(){const K=localStorage.getItem("merrill_clock_config");if(K)try{const Q=JSON.parse(K);D.value={...D.value,...Q}}catch{}D.value.autoRefresh&&(j=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),u()},D.value.refreshInterval*1e3))}function Y(){j&&clearInterval(j)}return t(()=>{Y()}),{merrillData:n,merrillStagesConfig:x,showMerrillDetail:i,merrillDetailData:h,merrillTimeline:g,timelineLoading:C,merrillClockConfig:D,merrillClockLastUpdated:_,merrillReevalResult:o,merrillReevalLoading:l,stages:G,indicatorList:J,dimensionScoreList:L,detailDimensionScoreList:E,confidenceColor:R,timelineStages:W,clockPosition:ie,merrillProgressStyle:Z,FULL_CYCLE_MONTHS:m,getStageAngle:ne,getCycleProgress:I,getCurrentStageMonths:V,getStageTotalMonths:z,isStageCompleted:w,getCharLabel:M,getAssetName:oe,getRankColor:U,fetchMerrillStages:y,fetchMerrillClock:u,loadMerrillTimeline:r,showTimelineStage:q,showStageDetail:H,saveMerrillClockConfig:ce,doMerrillReevaluate:$,startAutoRefresh:T,stopAutoRefresh:Y}}})();(function(){function a(m){return getComputedStyle(document.documentElement).getPropertyValue(m).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const p=[];function t(m){typeof m=="function"&&p.push(m)}function d(){p.slice().forEach(function(m){try{m()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:t,refreshAllCharts:d,init(){return{getEChartsTheme:e,registerChart:t,refreshAllCharts:d}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const p=e("qcState");try{const m=localStorage.getItem("quant_sidebar_collapsed");m!==null&&p.sidebarCollapsed&&(p.sidebarCollapsed.value=m==="1")}catch{}if(!p)return{};const t=async m=>{if(window.__quantGoPage){await window.__quantGoPage(m.key,m.subPages[0]||"");return}p.currentPage.value=m.key,p.currentSubPage.value=m.subPages[0]||""},d=()=>{p.sidebarCollapsed.value=!p.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",p.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:p.menus,currentPage:p.currentPage,sidebarCollapsed:p.sidebarCollapsed,navigate:t,toggle:d,sanitizeHtml:p.sanitizeHtml,keyClick:p.keyClick,t:p.t}}}})();const Ca={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,p={"layout-dashboard":Ov,calendar:Nv,bot:Iv,"flask-conical":Lv,zap:Av,settings:zv,"chevron-down":Rv,"chevron-right":Pv,"chevron-left":Dv,menu:Tv,search:Mv,bell:Ev,sun:qv,moon:Cv,user:Sv,"user-round":xv,home:_v,x:kv,database:wv,activity:bv,clock:yv,"bar-chart-3":hv,shield:gv,"hard-drive":fv,"file-text":pv,users:mv,cpu:vv,"pie-chart":uv,info:dv,"log-out":cv,palette:rv,languages:ov,refresh:nv,download:iv,"external-link":lv,command:sv,sparkles:av,"trending-up":tv,"trending-down":ev,"circle-dot":Zu,check:Xu,"alert-triangle":$u,loader:Qu,"arrow-left":Ju,"arrow-right":Yu,eye:Gu,"eye-off":Uu,lock:Wu,"sliders-horizontal":Ku,play:Bu,history:Hu,layers:Fu,"line-chart":Vu,target:ju,"search-check":Ou,star:Nu,"message-circle":Iu,"calendar-days":Lu,"calendar-range":Au,"calendar-check":zu,brain:Ru,lightbulb:Pu,"octagon-x":Du,flag:Tu,package:Mu,"clipboard-list":Eu,pin:qu,"radio-tower":Cu,gauge:Su,landmark:xu,"candlestick-chart":_u,wallet:ku,"badge-check":wu,key:bu,factory:yu,trophy:hu,rocket:gu,flame:fu,"map-pin":pu,"scroll-text":mu,"book-open":vu,dna:uu,"bar-chart":du,plus:cu,"star-off":ru,upload:ou,gem:nu,"folder-open":iu,link:lu,save:su,"trash-2":au,pause:tu,"help-circle":eu,"play-circle":Zd,pencil:Xd,folder:$d,code:Qd,sprout:Jd,wheat:Yd,snowflake:Gd,fuel:Ud,banknote:Wd,send:Kd,inbox:Bd,"wifi-off":Hd,"check-circle-2":Fd,"x-circle":Vd},t=()=>p[e.name]||p["circle-dot"];return(d,m)=>(ve(),ca(Ed(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},qa=(a,e)=>{const p=a.__vccOpts||a;for(const[t,d]of e)p[t]=d;return p},jv={name:"qc-sidebar",components:{AppIcon:Ca},setup(){const a=Da("qcState");if(!a)return{};const e=tt(()=>a.menus&&a.menus.value||[]),p=tt(()=>a.currentPage&&a.currentPage.value||""),t=tt(()=>a.navMode&&a.navMode.value||"subnav"),d=tt({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:_=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=_)}}),m=Pt({}),P={research:"量化投研",platform:"平台管理"},f=["research","platform"],c=_=>p.value===_.key,k=(_,o)=>p.value===_.key&&a.currentSubPage&&a.currentSubPage.value===o,n=_=>Array.isArray(_.subPages)&&_.subPages.length>1,x=(_,o)=>a.subPageNames&&a.subPageNames[o]||o;function i(_){!n(_)||d.value||(m.value[_.key]=!m.value[_.key])}function h(){e.value.forEach(_=>{m.value[_.key]===void 0&&(m.value[_.key]=c(_))})}async function g(_,o){const l=o||_.subPages&&_.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(_.key,l):(a.currentPage.value=_.key,a.currentSubPage&&(a.currentSubPage.value=l)),a.navigateTo&&a.navigateTo(_.key,l)}function C(){d.value=!d.value;try{localStorage.setItem("sidebar_collapsed",d.value?"1":"0")}catch{}}function D(_){if(_.ctrlKey&&_.key.toLowerCase()==="b"&&(_.preventDefault(),C()),!_.ctrlKey&&!_.metaKey&&!_.altKey&&(_.key==="ArrowDown"||_.key==="ArrowUp")){const o=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),l=o.indexOf(document.activeElement);if(l>=0){_.preventDefault();const v=o[(l+(_.key==="ArrowDown"?1:o.length-1))%o.length];v&&v.focus()}}}return Ba(()=>{h(),document.addEventListener("keydown",D)}),rs(()=>document.removeEventListener("keydown",D)),{state:a,menus:e,currentPage:p,navMode:t,sidebarCollapsed:d,expandedMenus:m,GROUP_LABELS:P,GROUPS:f,isActive:c,isChildActive:k,hasChildren:n,subLabel:x,toggleSubmenu:i,navigate:g,toggleCollapse:C}}},Vv={class:"qc-sidebar-logo"},Fv={key:0,class:"qc-logo-text"},Hv={class:"qc-sidebar-nav"},Bv={key:0,class:"qc-nav-group"},Kv={key:0,class:"qc-nav-group-label"},Wv=["href","aria-current","onClick"],Uv={key:0,class:"qc-sidebar-label"},Gv={key:1,class:"qc-nav-badge"},Yv=["aria-expanded","aria-controls","onClick"],Jv=["id"],Qv=["href","aria-current","onClick"],$v={class:"qc-sidebar-child-label"},Xv={class:"qc-sidebar-footer"},Zv=["aria-expanded","aria-label","title"];function em(a,e,p,t,d,m){const P=Gt("AppIcon"),f=Gt("el-tooltip");return ve(),fe("nav",{class:lt(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Ce("div",Vv,[e[1]||(e[1]=Md('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Ve("",!0):(ve(),fe("span",Fv,Fe(t.state.t("login.title")),1))]),Ce("div",Hv,[(ve(!0),fe(nt,null,wt(t.GROUPS,c=>(ve(),fe(nt,{key:c},[t.menus.some(k=>k.group===c)?(ve(),fe("div",Bv,[t.sidebarCollapsed?Ve("",!0):(ve(),fe("span",Kv,Fe(t.GROUP_LABELS[c]),1)),(ve(!0),fe(nt,null,wt(t.menus.filter(k=>k.group===c),k=>(ve(),fe(nt,{key:k.key},[Ce("div",{class:lt(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(k),"is-child-open":t.navMode==="tree"&&t.expandedMenus[k.key]}])},[it(f,{content:k.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:ra(()=>[Ce("a",{class:lt(["qc-sidebar-link",{"is-active":t.isActive(k)}]),href:"#"+k.key,"aria-current":t.isActive(k)?"page":null,onClick:Lt(n=>t.navigate(k),["prevent"])},[it(P,{name:k.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Ve("",!0):(ve(),fe("span",Uv,Fe(k.name),1)),!t.sidebarCollapsed&&k.badge?(ve(),fe("span",Gv,Fe(k.badge),1)):Ve("",!0)],10,Wv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(k)?(ve(),fe("button",{key:0,class:lt(["qc-sidebar-chevron",{"is-open":t.expandedMenus[k.key]}]),"aria-expanded":!!t.expandedMenus[k.key],"aria-controls":"submenu-"+k.key,"aria-label":"展开子菜单",onClick:n=>t.toggleSubmenu(k)},[it(P,{name:"chevron-down",size:14})],10,Yv)):Ve("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(k)&&t.expandedMenus[k.key]?(ve(),fe("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+k.key},[(ve(!0),fe(nt,null,wt(k.subPages,n=>(ve(),fe("a",{key:n,class:lt(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(k,n)}]),href:"#"+k.key+"-"+n,"aria-current":t.isChildActive(k,n)?"page":null,onClick:Lt(x=>t.navigate(k,n),["prevent"])},[Ce("span",$v,Fe(t.subLabel(k,n)),1)],10,Qv))),128))],8,Jv)):Ve("",!0)],64))),128))])):Ve("",!0)],64))),128))]),Ce("div",Xv,[Ce("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...c)=>t.toggleCollapse&&t.toggleCollapse(...c))},[it(P,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,Zv)])],2)}const tm=qa(jv,[["render",em]]),am={name:"qc-header",components:{AppIcon:Ca},setup(){const a=Da("qcState");if(!a)return{};const e=Pt(!1),p=tt(()=>a.currentUser&&a.currentUser.value||null),t=tt(()=>a.navMode&&a.navMode.value||"subnav"),d=tt(()=>{const X=a.currentPage&&a.currentPage.value,ee=(a.menus&&a.menus.value||[]).find(be=>be.key===X);return!!(ee&&ee.subPages&&ee.subPages.length)}),m=tt(()=>{const X=a.currentPage&&a.currentPage.value,ee=a.currentPageName&&a.currentPageName.value;if(ee)return ee;const be=(a.menus&&a.menus.value||[]).find(Pe=>Pe.key===X);return be&&be.name||X||""}),P=tt(()=>{const X=a.currentSubPage&&a.currentSubPage.value;return X&&a.subPageNames&&a.subPageNames[X]||X||""}),f=Pt(typeof window<"u"?window.innerWidth<768:!1);function c(){f.value=window.innerWidth<768}Ba(()=>window.addEventListener("resize",c)),rs(()=>window.removeEventListener("resize",c));const k=Pt(!1),n=tt(()=>{const X=a.currentSubPage&&a.currentSubPage.value;return X&&a.subPageNames&&a.subPageNames[X]||X||""}),x=tt(()=>{const X=a.currentPage&&a.currentPage.value,ee=(a.menus&&a.menus.value||[]).find(be=>be.key===X);return(ee&&ee.subPages||[]).map(be=>({key:be,label:a.subPageNames&&a.subPageNames[be]||be}))});function i(){k.value=!k.value}function h(){k.value=!1}function g(X){k.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,X)}const C=tt(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),D=Pt(!1),_=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],o=tt(()=>{const X=_.find(ee=>ee.value===t.value);return X&&X.label||t.value});function l(){D.value=!D.value}function v(){D.value=!1}function j(X){D.value=!1,a.setNavMode&&a.setNavMode(X)}const B=tt({get:()=>a.searchQuery&&a.searchQuery.value||"",set:X=>{a.searchQuery&&(a.searchQuery.value=X)}}),G=Pt(!1),J=Pt([]),ae=Pt(!1),L=Pt(!1);function E(){const X=localStorage.getItem("quant_token")||"";return X?{Authorization:"Bearer "+X,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function R(){ae.value=!0,L.value=!1;try{const ee=await(await fetch("/api/alerts/history?limit=8",{headers:E()})).json();ee&&ee.success?J.value=ee.history||[]:J.value=[]}catch{L.value=!0,J.value=[]}finally{ae.value=!1}}function W(){G.value=!G.value,G.value&&R()}function ie(){G.value=!1}function Z(){G.value=!1,a.activateTab&&a.activateTab("system","notification")}const ne=Pt(!1),I=a.themeHues||[45,220,0,140,270,320],V=tt(()=>a.themeHue&&a.themeHue.value||45),z=tt(()=>a.themeMode&&a.themeMode.value||"system");function w(X){return a.hueColor?a.hueColor(X):"hsl("+X+", 75%, 42%)"}function M(X){return a.hueName?a.hueName(X):String(X)}function oe(){ne.value=!ne.value}function U(){ne.value=!1}function y(X){a.changeThemeMode&&a.changeThemeMode(X)}function r(X){a.changeThemeHue&&a.changeThemeHue(X)}function q(){a.changeThemeMode&&a.changeThemeMode(C.value?"light":"dark")}function u(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function H(){e.value=!e.value}function ce(){e.value=!1}function $(X){return()=>{ce(),X&&X()}}function T(){ce(),a.handleLogout&&a.handleLogout()}const Y=tt(()=>a.marketData&&a.marketData.value||{}),K=Pt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:Y,bannerDismissed:K,dismissBanner:()=>{K.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:p,isDark:C,searchQuery:B,navMode:t,crumbRoot:m,crumbSub:P,hasToptabs:d,toggleThemeQuick:q,toggleSidebar:u,openUserMenu:H,closeUserMenu:ce,menuItem:$,handleLogout:T,openBellMenu:G,notifItems:J,notifLoading:ae,notifError:L,toggleBell:W,closeBell:ie,goNotificationCenter:Z,openThemeMenu:ne,themeHues:I,themeHue:V,themeMode:z,hueColor:w,hueName:M,toggleThemeMenu:oe,closeThemeMenu:U,pickThemeMode:y,pickThemeHue:r,openNavModeMenu:D,NAV_MODES:_,navModeLabel:o,toggleNavModeMenu:l,closeNavModeMenu:v,pickNavMode:j,isMobile:f,openSubnavPicker:k,currentSubLabel:n,subnavOptions:x,toggleSubnavPicker:i,closeSubnavPicker:h,pickSubnav:g}}},sm={class:"qc-header-wrap"},lm={key:0,class:"non-trading-banner",role:"status"},im={class:"qc-header"},nm={class:"qc-header-left"},om=["aria-label"],rm={key:0,class:"qc-header-subnav"},cm=["aria-expanded"],dm={class:"qc-subnav-picker-label"},um={key:0,class:"qc-subnav-picker-menu",role:"menu"},vm=["onClick"],mm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},pm={class:"qc-crumb qc-crumb-root"},fm={class:"qc-crumb qc-crumb-sub"},gm={key:1,class:"qc-crumb qc-crumb-root"},hm={class:"qc-header-center"},ym={key:0,class:"qc-search-sublabel"},bm={class:"qc-header-right"},wm={class:"qc-hdr-pop"},km=["aria-expanded"],_m={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},xm={key:0,class:"qc-bell-state"},Sm={key:1,class:"qc-bell-state"},Cm={key:2,class:"qc-bell-state"},qm={key:3,class:"qc-bell-list"},Em={class:"qc-bell-item-title"},Mm={class:"qc-bell-item-meta"},Tm={key:0},Dm={class:"qc-bell-item-time"},Pm={class:"qc-hdr-pop"},Rm=["aria-expanded"],zm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Am={class:"qc-theme-modes"},Lm=["onClick"],Im={class:"qc-theme-swatches"},Nm=["title","aria-label","onClick"],Om={key:0,class:"qc-theme-swatch-check"},jm={class:"qc-theme-custom-label"},Vm={key:0,class:"qc-navmode-switch"},Fm=["aria-label","title","aria-expanded"],Hm={key:0,class:"qc-navmode-menu",role:"menu"},Bm=["onClick","onKeydown"],Km={class:"qc-navmode-item-main"},Wm={class:"qc-user-menu"},Um=["aria-label","aria-expanded"],Gm={key:0,class:"qc-user-dropdown",role:"menu"},Ym={class:"qc-user-dropdown-header"},Jm={class:"qc-user-dropdown-name"},Qm={key:0,class:"qc-user-dropdown-chip"};function $m(a,e,p,t,d,m){var x,i,h,g,C,D,_;const P=Gt("AppIcon"),f=Gt("qc-top-tabs"),c=Gt("el-autocomplete"),k=Gt("el-slider"),n=Td("click-outside");return ve(),fe("div",sm,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(ve(),fe("div",lm,[it(P,{name:"alert-triangle",size:14}),e[15]||(e[15]=Ce("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),Ce("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...o)=>t.dismissBanner&&t.dismissBanner(...o)),"aria-label":"关闭提示"},"×")])):Ve("",!0),Ce("header",im,[Ce("div",nm,[Ce("button",{class:"qc-icon-btn","aria-label":(x=t.state.sidebarCollapsed)!=null&&x.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...o)=>t.toggleSidebar&&t.toggleSidebar(...o))},[it(P,{name:"menu",size:20})],8,om),t.isMobile?La((ve(),fe("div",rm,[Ce("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...o)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...o))},[Ce("span",dm,Fe(t.currentSubLabel||"二级"),1),it(P,{name:"chevron-down",size:14})],8,cm),t.openSubnavPicker?(ve(),fe("div",um,[(ve(!0),fe(nt,null,wt(t.subnavOptions,o=>(ve(),fe("div",{key:o.key,class:lt(["qc-subnav-picker-item",{"is-active":o.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:l=>t.pickSubnav(o.key)},Fe(o.label),11,vm))),128))])):Ve("",!0)])),[[n,t.closeSubnavPicker]]):Ve("",!0),t.navMode==="tree"&&!t.isMobile?(ve(),fe("div",mm,[Ce("span",pm,Fe(t.crumbRoot),1),t.crumbSub?(ve(),fe(nt,{key:0},[e[16]||(e[16]=Ce("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Ce("span",fm,Fe(t.crumbSub),1)],64)):Ve("",!0)])):Ve("",!0),t.navMode==="toptab"&&!t.isMobile?(ve(),fe(nt,{key:2},[t.hasToptabs?(ve(),ca(f,{key:0})):(ve(),fe("span",gm,Fe(t.crumbRoot),1))],64)):Ve("",!0)]),Ce("div",hm,[it(c,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=o=>t.searchQuery=o),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:ra(()=>[it(P,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ra(()=>[...e[17]||(e[17]=[Ce("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ra(o=>{var l,v,j,B,G;return[Ce("span",null,Fe((l=o==null?void 0:o.item)==null?void 0:l.icon)+" "+Fe(((v=o==null?void 0:o.item)==null?void 0:v.label)||((j=o==null?void 0:o.item)==null?void 0:j.name)),1),(B=o==null?void 0:o.item)!=null&&B.subLabel?(ve(),fe("span",ym,Fe((G=o==null?void 0:o.item)==null?void 0:G.subLabel),1)):Ve("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Ce("div",bm,[La((ve(),fe("div",wm,[Ce("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...o)=>t.toggleBell&&t.toggleBell(...o))},[it(P,{name:"bell",size:20})],8,km),t.openBellMenu?(ve(),fe("div",_m,[e[18]||(e[18]=Ce("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(ve(),fe("div",xm,"加载中...")):t.notifError?(ve(),fe("div",Sm,"加载失败")):t.notifItems.length?(ve(),fe("div",qm,[(ve(!0),fe(nt,null,wt(t.notifItems,(o,l)=>(ve(),fe("div",{key:o.id||l,class:lt(["qc-bell-item",{"is-fail":o.ok===0}])},[Ce("div",Em,Fe(o.title||o.event_type||"事件"),1),Ce("div",Mm,[Sa(Fe(o.channel||""),1),o.recipient?(ve(),fe("span",Tm," · "+Fe(o.recipient),1)):Ve("",!0),Ce("span",Dm,Fe(o.created_at||""),1)])],2))),128))])):(ve(),fe("div",Cm,"暂无通知")),Ce("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...o)=>t.goNotificationCenter&&t.goNotificationCenter(...o))},"前往通知中心 →")])):Ve("",!0)])),[[n,t.closeBell]]),La((ve(),fe("div",Pm,[Ce("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...o)=>t.toggleThemeMenu&&t.toggleThemeMenu(...o))},[it(P,{name:"palette",size:20})],8,Rm),t.openThemeMenu?(ve(),fe("div",zm,[e[19]||(e[19]=Ce("div",{class:"qc-theme-section-label"},"外观模式",-1)),Ce("div",Am,[(ve(),fe(nt,null,wt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],o=>Ce("button",{key:o.k,class:lt(["qc-theme-mode",{"is-active":t.themeMode===o.k}]),onClick:l=>t.pickThemeMode(o.k)},Fe(o.n),11,Lm)),64))]),e[20]||(e[20]=Ce("div",{class:"qc-theme-section-label"},"主题色",-1)),Ce("div",Im,[(ve(!0),fe(nt,null,wt(t.themeHues,o=>(ve(),fe("button",{key:o,class:lt(["qc-theme-swatch",{"is-active":t.themeHue===o}]),style:Dd({background:t.hueColor(o)}),title:t.hueName(o),"aria-label":t.hueName(o),onClick:l=>t.pickThemeHue(o)},[t.themeHue===o?(ve(),fe("span",Om,"✓")):Ve("",!0)],14,Nm))),128))]),it(k,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Ce("div",jm,"自定义 "+Fe(t.themeHue)+"°",1)])):Ve("",!0)])),[[n,t.closeThemeMenu]]),t.isMobile?Ve("",!0):La((ve(),fe("div",Vm,[Ce("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...o)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...o))},[it(P,{name:"layers",size:20})],8,Fm),t.openNavModeMenu?(ve(),fe("div",Hm,[(ve(!0),fe(nt,null,wt(t.NAV_MODES,o=>(ve(),fe("div",{key:o.value,class:lt(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===o.value}]),role:"menuitem",tabindex:"0",onClick:l=>t.pickNavMode(o.value),onKeydown:[oa(Lt(l=>t.pickNavMode(o.value),["prevent"]),["enter"]),oa(Lt(l=>t.pickNavMode(o.value),["prevent"]),["space"])]},[Ce("div",Km,[Ce("span",null,Fe(o.label),1),t.navMode===o.value?(ve(),ca(P,{key:0,name:"check",size:14})):Ve("",!0)])],42,Bm))),128))])):Ve("",!0)])),[[n,t.closeNavModeMenu]]),La((ve(),fe("div",Wm,[Ce("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((i=t.currentUser)==null?void 0:i.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...o)=>t.openUserMenu&&t.openUserMenu(...o))},Fe((((h=t.currentUser)==null?void 0:h.username)||"A").charAt(0).toUpperCase()),9,Um),t.showUserMenu?(ve(),fe("div",Gm,[Ce("div",Ym,[Ce("span",Jm,Fe((g=t.currentUser)==null?void 0:g.username),1),((C=t.currentUser)==null?void 0:C.role)==="guest"?(ve(),fe("span",Qm,"访客")):Ve("",!0)]),((D=t.currentUser)==null?void 0:D.role)==="admin"?(ve(),fe("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=o=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=oa(Lt(o=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[it(P,{name:"settings",size:16}),e[21]||(e[21]=Sa(" 重新运行初始化向导 ",-1))],32)):Ve("",!0),((_=t.currentUser)==null?void 0:_.role)!=="guest"?(ve(),fe("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=o=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=oa(Lt(o=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[it(P,{name:"lock",size:16}),e[22]||(e[22]=Sa(" 修改密码 ",-1))],32)):Ve("",!0),e[24]||(e[24]=Ce("div",{class:"qc-user-dropdown-divider"},null,-1)),Ce("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...o)=>t.handleLogout&&t.handleLogout(...o)),onKeydown:e[14]||(e[14]=oa(Lt((...o)=>t.handleLogout&&t.handleLogout(...o),["prevent"]),["enter"]))},[it(P,{name:"log-out",size:16}),e[23]||(e[23]=Sa(" 退出登录 ",-1))],32)])):Ve("",!0)])),[[n,t.closeUserMenu]])])])])}const Xm=qa(am,[["render",$m]]),Zm=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],ep={name:"qc-subnav",components:{AppIcon:Ca},setup(){const a=Da("qcState");if(!a)return{};const e=tt(()=>a.currentPage&&a.currentPage.value||""),p=tt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=tt(()=>a.navMode&&a.navMode.value||"subnav"),d=Pt({}),m=tt(()=>a.menus&&a.menus.value||[]),P=tt(()=>m.value.find(_=>_.key===e.value)||null),f=tt(()=>P.value&&P.value.subPages||[]),c=tt(()=>a.currentPageName&&a.currentPageName.value||e.value),k=_=>a.subPageNames&&a.subPageNames[_]||_,n=_=>p.value===_;function x(_){a.openTab?a.openTab(e.value,_):a.currentSubPage&&(a.currentSubPage.value=_);try{localStorage.setItem("quant_last_subpage",_)}catch{}}function i(_){a.openTab?a.openTab(e.value,_.key):a.currentSubPage&&(a.currentSubPage.value=_.key);try{localStorage.setItem("quant_last_subpage",_.key)}catch{}}function h(_){d.value[_]=!d.value[_]}const g={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}};return{state:a,currentPage:e,currentSubPage:p,navMode:t,subPages:f,currentMenu:P,collapsedGroups:d,pageTitle:c,subLabel:k,isSubActive:n,goSub:x,goSystemItem:i,toggleGroup:h,SYSTEM_GROUPS:Zm,subIcon:(_,o)=>g[_]&&g[_][o]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},tp={key:0,class:"qc-subnav-column","aria-label":"二级导航"},ap={class:"qc-subnav-column-header"},sp={class:"qc-subnav-current-label"},lp={class:"qc-subnav-column-body"},ip=["onClick"],np=["href","onClick"],op={class:"qc-subnav-group-label"},rp=["href","onClick"],cp=["href","onClick"];function dp(a,e,p,t,d,m){const P=Gt("AppIcon");return t.navMode==="subnav"?(ve(),fe("aside",tp,[Ce("div",ap,[Ce("span",sp,Fe(t.pageTitle),1)]),Ce("div",lp,[t.currentPage==="system"?(ve(!0),fe(nt,{key:0},wt(t.SYSTEM_GROUPS,f=>(ve(),fe("div",{key:f.label,class:"qc-subnav-group"},[Ce("div",{class:"qc-subnav-group-label",onClick:c=>t.toggleGroup(f.label)},[Ce("span",null,Fe(f.label),1),it(P,{name:"chevron-down",size:12,class:lt({"is-open":!t.collapsedGroups[f.label]})},null,8,["class"])],8,ip),t.collapsedGroups[f.label]?Ve("",!0):(ve(!0),fe(nt,{key:0},wt(f.items,c=>(ve(),fe("a",{key:c.key,class:lt(["qc-subnav-item",{"is-active":t.isSubActive(c.key)}]),href:"#"+c.key,onClick:Lt(k=>t.goSystemItem(c),["prevent"])},[it(P,{name:c.icon,size:16},null,8,["name"]),Ce("span",null,Fe(c.label),1)],10,np))),128))]))),128)):t.currentPage==="shortterm"?(ve(!0),fe(nt,{key:1},wt(t.SHORTTERM_GROUPS,f=>(ve(),fe("div",{key:f.label,class:"qc-subnav-group"},[Ce("div",op,[Ce("span",null,Fe(f.label),1)]),(ve(!0),fe(nt,null,wt(f.items,c=>(ve(),fe("a",{key:c,class:lt(["qc-subnav-item",{"is-active":t.isSubActive(c)}]),href:"#"+t.currentPage+"/"+c,onClick:Lt(k=>t.goSub(c),["prevent"])},[it(P,{name:t.subIcon(t.currentPage,c),size:16},null,8,["name"]),Ce("span",null,Fe(t.subLabel(c)),1)],10,rp))),128))]))),128)):(ve(!0),fe(nt,{key:2},wt(t.subPages,f=>(ve(),fe("a",{key:f,class:lt(["qc-subnav-item",{"is-active":t.isSubActive(f)}]),href:"#"+t.currentPage+"/"+f,onClick:Lt(c=>t.goSub(f),["prevent"])},[it(P,{name:t.subIcon(t.currentPage,f),size:16},null,8,["name"]),Ce("span",null,Fe(t.subLabel(f)),1)],10,cp))),128))])])):Ve("",!0)}const up=qa(ep,[["render",dp]]),vp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],mp={name:"qc-mobile-nav",components:{AppIcon:Ca},setup(){const a=Da("qcState");if(!a)return{};const e=Pt(!1),p=Pt(null),t=Pt({}),d=tt(()=>a.menus&&a.menus.value||[]),m=tt(()=>a.currentPage&&a.currentPage.value||""),P={research:"量化投研",platform:"平台管理"},f=["research","platform"];function c(o){return Array.isArray(o.subPages)&&o.subPages.length>0}function k(o){c(o)&&(t.value[o.key]=!t.value[o.key])}function n(o,l){return m.value===o.key&&a.currentSubPage&&a.currentSubPage.value===l}function x(o){return a.subPageNames&&a.subPageNames[o]||o}async function i(o){const l=d.value.find(j=>j.key===o.key),v=l&&l.subPages&&l.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(o.key,v):(a.currentPage.value=o.key,a.currentSubPage&&(a.currentSubPage.value=v)),a.navigateTo&&a.navigateTo(o.key,v)}function h(o,l){e.value=!1;const v=l||o.subPages&&o.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(o.key,v):(a.currentPage.value=o.key,a.currentSubPage&&(a.currentSubPage.value=v)),a.navigateTo&&a.navigateTo(o.key,v)}function g(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function C(){e.value=!1;const o=document.querySelector(".qc-header .qc-icon-btn");o&&o.focus()}function D(o){o.detail&&o.detail.open&&g()}function _(o){e.value&&o.key==="Escape"&&C()}return Ba(()=>{window.addEventListener("qc:drawer",D),document.addEventListener("keydown",_)}),rs(()=>{window.removeEventListener("qc:drawer",D),document.removeEventListener("keydown",_)}),{state:a,TABS:vp,menus:d,currentPage:m,drawerOpen:e,drawerFocusRef:p,drawerExpanded:t,GROUP_LABELS:P,GROUPS:f,hasSub:c,toggleDrawerMenu:k,isDrawerSubActive:n,subLabel:x,goTab:i,goMenu:h,openDrawer:g,closeDrawer:C}}},pp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},fp=["aria-current","onClick"],gp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},hp={class:"qc-drawer-header"},yp={class:"qc-drawer-brand"},bp={class:"qc-drawer-body"},wp={key:0},kp={class:"qc-nav-group-label"},_p=["href","aria-current","onClick"],xp={class:"qc-sidebar-label"},Sp=["aria-expanded","onClick"],Cp={key:0,class:"qc-drawer-children"},qp=["href","onClick"],Ep={class:"qc-drawer-footer"},Mp=["title"];function Tp(a,e,p,t,d,m){var f,c;const P=Gt("AppIcon");return ve(),fe(nt,null,[Ce("nav",pp,[(ve(!0),fe(nt,null,wt(t.TABS,k=>(ve(),fe("button",{key:k.key,class:lt(["qc-mobile-tab",{"is-active":t.currentPage===k.key}]),"aria-current":t.currentPage===k.key?"page":null,onClick:n=>t.goTab(k)},[it(P,{name:k.icon,size:22},null,8,["name"]),Ce("span",null,Fe(k.label),1)],10,fp))),128))]),(ve(),ca(Pd,{to:"body"},[t.drawerOpen?(ve(),fe("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...k)=>t.closeDrawer&&t.closeDrawer(...k))})):Ve("",!0),t.drawerOpen?(ve(),fe("div",gp,[Ce("div",hp,[Ce("div",yp,[e[4]||(e[4]=Ce("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Ce("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Ce("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Ce("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Ce("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Ce("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Ce("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Ce("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Ce("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Ce("span",null,Fe(t.state.t("login.title")),1)]),Ce("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...k)=>t.closeDrawer&&t.closeDrawer(...k))},[it(P,{name:"x",size:18})])]),Ce("div",bp,[(ve(!0),fe(nt,null,wt(t.GROUPS,k=>(ve(),fe(nt,{key:k},[t.menus.some(n=>n.group===k)?(ve(),fe("div",wp,[Ce("div",kp,Fe(t.GROUP_LABELS[k]),1),(ve(!0),fe(nt,null,wt(t.menus.filter(n=>n.group===k),n=>(ve(),fe("div",{key:n.key,class:"qc-drawer-menu"},[Ce("div",{class:lt(["qc-drawer-menu-row",{"is-active":t.currentPage===n.key}])},[Ce("a",{class:lt(["qc-sidebar-item",{"is-active":t.currentPage===n.key}]),href:"#"+n.key,"aria-current":t.currentPage===n.key?"page":null,onClick:Lt(x=>t.hasSub(n)?t.toggleDrawerMenu(n):t.goMenu(n),["prevent"])},[it(P,{name:n.iconName||"",size:18},null,8,["name"]),Ce("span",xp,Fe(n.name),1)],10,_p),t.hasSub(n)?(ve(),fe("button",{key:0,class:lt(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[n.key]}]),"aria-expanded":!!t.drawerExpanded[n.key],"aria-label":"展开子菜单",onClick:x=>t.toggleDrawerMenu(n)},[it(P,{name:"chevron-down",size:14})],10,Sp)):Ve("",!0)],2),t.drawerExpanded[n.key]?(ve(),fe("div",Cp,[(ve(!0),fe(nt,null,wt(n.subPages,x=>(ve(),fe("a",{key:x,class:lt(["qc-subnav-item",{"is-active":t.isDrawerSubActive(n,x)}]),href:"#"+n.key+"/"+x,onClick:Lt(i=>t.goMenu(n,x),["prevent"])},[Ce("span",null,Fe(t.subLabel(x)),1)],10,qp))),128))])):Ve("",!0)]))),128))])):Ve("",!0)],64))),128))]),Ce("div",Ep,[Ce("button",{class:"qc-icon-btn",title:((f=t.state.currentTheme)==null?void 0:f.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=k=>{var n;return t.state.changeThemeMode&&t.state.changeThemeMode(((n=t.state.currentTheme)==null?void 0:n.value)==="dark"?"light":"dark")})},[it(P,{name:((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Mp),Ce("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=k=>t.state.handleLogout&&t.state.handleLogout())},[it(P,{name:"log-out",size:18})])])])):Ve("",!0)]))],64)}const Dp=qa(mp,[["render",Tp]]),Pp={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:p}){const t=Da("qcState");function d(n){e("select",n)}function m(n){const x=n.strategy_names||n.strategies||[],i=x.slice(0,3),h=x.length>3?x.length-3:0,g=i.map(C=>({text:C,more:!1}));return h&&g.push({text:"+"+h,more:!0}),g}function P(n){const x=Number(n);return isFinite(x)?x.toFixed(2):"—"}function f(n){const x=Number(n);return isFinite(x)?(x>0?"+":"")+x.toFixed(2)+"%":"—"}function c(n){const x=Number(n.consensus_level);return isFinite(x)?Math.round(x*100):0}function k(n){const x=Number(n&&n.consensus_level);return isFinite(x)&&x>0}return{state:t,slots:p,select:d,displayTags:m,fmtPrice:P,fmtChange:f,pctOf:c,hasConsensus:k}}},Rp={class:"qc-stock-list"},zp=["data-copy-code","aria-label","onClick","onKeydown"],Ap={key:0,class:"qc-stock-rank"},Lp={class:"qc-stock-info"},Ip={class:"qc-stock-code"},Np={class:"qc-stock-code-num"},Op={key:0,class:"qc-stock-status is-new"},jp={key:1,class:"qc-stock-status is-out"},Vp={class:"qc-stock-name"},Fp={key:0,class:"qc-stock-consensus"},Hp={key:1,class:"qc-stock-tags"},Bp={key:2,class:"qc-stock-badge"},Kp={key:3,class:"qc-stock-data"},Wp={class:"qc-stock-price"},Up={key:4,class:"qc-stock-extra"},Gp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},Yp=["data-copy-code","aria-label","onClick","onKeydown"],Jp={key:0,class:"qc-stock-rank"},Qp={class:"qc-stock-info"},$p={class:"qc-stock-code"},Xp={class:"qc-stock-code-num"},Zp={key:0,class:"qc-stock-status is-new"},ef={key:1,class:"qc-stock-status is-out"},tf={class:"qc-stock-name"},af={key:0,class:"qc-stock-consensus"},sf={key:1,class:"qc-stock-tags"},lf={key:2,class:"qc-stock-badge"},nf={key:3,class:"qc-stock-data"},of={class:"qc-stock-price"},rf={key:4,class:"qc-stock-extra"},cf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function df(a,e,p,t,d,m){const P=Gt("qc-state-panel"),f=Gt("qc-virtual-list");return ve(),fe("div",Rp,[p.loading?(ve(),ca(P,{key:0,type:"loading"})):p.items.length?(ve(),fe(nt,{key:2},[p.virtual?(ve(),ca(f,{key:0,items:p.items,"row-height":p.rowHeight},{default:ra(({item:c,index:k})=>[Ce("div",{class:lt(["qc-stock-row",{"is-active":p.activeCode===c.code}]),"data-copy-code":p.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:n=>t.select(c),onKeydown:[oa(Lt(n=>t.select(c),["prevent"]),["enter"]),oa(Lt(n=>t.select(c),["prevent"]),["space"])]},[p.showRank?(ve(),fe("div",Ap,Fe(k+1),1)):Ve("",!0),Ce("div",Lp,[Ce("div",Ip,[Ce("span",Np,Fe(c.code),1),c.status==="new"?(ve(),fe("span",Op,Fe(p.statusText.new),1)):c.status==="out"?(ve(),fe("span",jp,Fe(p.statusText.out),1)):Ve("",!0)]),Ce("div",Vp,[Sa(Fe(c.name)+" ",1),ia(a.$slots,"name-suffix",{item:c,index:k})]),p.showConsensus&&t.hasConsensus(c)?(ve(),fe("span",Fp,Fe(t.pctOf(c))+"% 共识",1)):Ve("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(ve(),fe("div",Hp,[(ve(!0),fe(nt,null,wt(t.displayTags(c),n=>(ve(),fe("span",{key:n.text,class:lt(["qc-stock-tag",{"is-more":n.more}])},Fe(n.text),3))),128))])):Ve("",!0),p.showConsensus?(ve(),fe("span",Bp,Fe(c.strategy_count||0)+" 策略",1)):Ve("",!0),p.showPrice&&c.price!=null?(ve(),fe("div",Kp,[Ce("span",Wp,Fe(t.fmtPrice(c.price)),1),Ce("span",{class:lt(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Fe(t.fmtChange(c.change_pct)),3)])):Ve("",!0),t.slots.extra?(ve(),fe("div",Up,[ia(a.$slots,"extra",{item:c,index:k})])):Ve("",!0),t.slots.actions?(ve(),fe("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Lt(()=>{},["stop"]))},[ia(a.$slots,"actions",{item:c,index:k})])):Ve("",!0),t.slots.footer?(ve(),fe("div",Gp,[ia(a.$slots,"footer",{item:c,index:k})])):Ve("",!0)],42,zp)]),_:3},8,["items","row-height"])):(ve(!0),fe(nt,{key:1},wt(p.items,(c,k)=>(ve(),fe("div",{key:c.code,class:lt(["qc-stock-row",{"is-active":p.activeCode===c.code}]),"data-copy-code":p.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:n=>t.select(c),onKeydown:[oa(Lt(n=>t.select(c),["prevent"]),["enter"]),oa(Lt(n=>t.select(c),["prevent"]),["space"])]},[p.showRank?(ve(),fe("div",Jp,Fe(k+1),1)):Ve("",!0),Ce("div",Qp,[Ce("div",$p,[Ce("span",Xp,Fe(c.code),1),c.status==="new"?(ve(),fe("span",Zp,Fe(p.statusText.new),1)):c.status==="out"?(ve(),fe("span",ef,Fe(p.statusText.out),1)):Ve("",!0)]),Ce("div",tf,[Sa(Fe(c.name)+" ",1),ia(a.$slots,"name-suffix",{item:c,index:k})]),p.showConsensus&&t.hasConsensus(c)?(ve(),fe("span",af,Fe(t.pctOf(c))+"% 共识",1)):Ve("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(ve(),fe("div",sf,[(ve(!0),fe(nt,null,wt(t.displayTags(c),n=>(ve(),fe("span",{key:n.text,class:lt(["qc-stock-tag",{"is-more":n.more}])},Fe(n.text),3))),128))])):Ve("",!0),p.showConsensus?(ve(),fe("span",lf,Fe(c.strategy_count||0)+" 策略",1)):Ve("",!0),p.showPrice&&c.price!=null?(ve(),fe("div",nf,[Ce("span",of,Fe(t.fmtPrice(c.price)),1),Ce("span",{class:lt(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Fe(t.fmtChange(c.change_pct)),3)])):Ve("",!0),t.slots.extra?(ve(),fe("div",rf,[ia(a.$slots,"extra",{item:c,index:k})])):Ve("",!0),t.slots.actions?(ve(),fe("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Lt(()=>{},["stop"]))},[ia(a.$slots,"actions",{item:c,index:k})])):Ve("",!0),t.slots.footer?(ve(),fe("div",cf,[ia(a.$slots,"footer",{item:c,index:k})])):Ve("",!0)],42,Yp))),128))],64)):(ve(),ca(P,{key:1,type:"empty",title:p.emptyText},null,8,["title"]))])}const uf=qa(Pp,[["render",df]]),vf={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},mf={key:0,class:"split-divider","data-split-resize":""};function pf(a,e,p,t,d,m){return ve(),fe("div",{class:lt(["detail-split-wrap",[p.rootClass,{"detail-split":p.enabled}]]),"data-split-root":""},[Ce("div",{class:lt(["detail-split-list",[p.listClass,{"w-100":!p.enabled}]])},[ia(a.$slots,"list")],2),p.enabled?(ve(),fe("div",mf)):Ve("",!0),p.enabled?(ve(),fe("div",{key:1,class:lt(["detail-split-pane",p.paneClass])},[ia(a.$slots,"pane")],2)):Ve("",!0)],2)}const ff=qa(vf,[["render",pf]]),rl={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}},gf=200,hf={name:"qc-top-tabs",components:{AppIcon:Ca},setup(){const a=Da("qcState");if(!a)return{};const e=tt(()=>a.currentPage&&a.currentPage.value||""),p=tt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=tt(()=>a.menus&&a.menus.value||[]),d=tt(()=>{const l=t.value.find(v=>v.key===e.value);return l&&l.subPages||[]}),m=tt(()=>d.value.map(l=>({key:l,label:a.subPageNames&&a.subPageNames[l]||l,icon:rl[e.value]&&rl[e.value][l]||"circle-dot"}))),P=Pt(null),f=Pt(!1),c=Pt(!1),k=Pt(!1);let n=null,x=null;function i(){const l=P.value;l&&(c.value=l.scrollLeft>2,k.value=l.scrollLeft<l.scrollWidth-l.clientWidth-2)}function h(){const l=P.value;l&&(f.value=l.scrollWidth>l.clientWidth+2,i())}function g(l){const v=P.value;v&&v.scrollBy({left:l*gf,behavior:"smooth"})}function C(l){a.openTab?a.openTab(e.value,l):a.currentSubPage&&(a.currentSubPage.value=l)}function D(l){C(l),zd(()=>{const v=P.value;if(!v)return;const j=v.querySelector('[data-tab-key="'+l+'"]');j&&j.scrollIntoView({block:"nearest",inline:"nearest"})})}const _=tt(()=>{if(!f.value)return[];const l=P.value;if(!l)return[];const v=l.getBoundingClientRect(),j=new Set;return l.querySelectorAll(".qc-top-tab").forEach(B=>{const G=B.getBoundingClientRect();G.left>=v.left-2&&G.left<v.right-24&&j.add(B.getAttribute("data-tab-key"))}),m.value.filter(B=>!j.has(B.key))});function o(l,v){l.key==="ArrowLeft"?(l.preventDefault(),g(-1)):l.key==="ArrowRight"?(l.preventDefault(),g(1)):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),C(v.key))}return Ba(()=>{h(),n=new ResizeObserver(()=>{clearTimeout(x),x=setTimeout(h,100)}),P.value&&n.observe(P.value),window.addEventListener("resize",h)}),Rd(()=>{n&&n.disconnect(),window.removeEventListener("resize",h),clearTimeout(x)}),{state:a,tabs:m,currentSubPage:p,go:C,scrollRef:P,hasOverflow:f,canScrollLeft:c,canScrollRight:k,scrollByStep:g,scrollToTab:D,hiddenTabs:_,onTabKeydown:o,updateScrollState:i}}},yf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},bf=["disabled"],wf=["data-tab-key","aria-selected","title","onClick","onKeydown"],kf={class:"qc-top-tab-label"},_f=["disabled"];function xf(a,e,p,t,d,m){const P=Gt("AppIcon"),f=Gt("el-dropdown-item"),c=Gt("el-dropdown-menu"),k=Gt("el-dropdown");return t.tabs.length?(ve(),fe("div",yf,[t.hasOverflow?(ve(),fe("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=n=>t.scrollByStep(-1))},"‹",8,bf)):Ve("",!0),Ce("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...n)=>t.updateScrollState&&t.updateScrollState(...n))},[(ve(!0),fe(nt,null,wt(t.tabs,n=>(ve(),fe("div",{key:n.key,"data-tab-key":n.key,class:lt(["qc-top-tab",{"is-active":t.currentSubPage===n.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===n.key?"true":"false",title:n.label,onClick:x=>t.go(n.key),onKeydown:x=>t.onTabKeydown(x,n)},[it(P,{name:n.icon,size:14},null,8,["name"]),Ce("span",kf,Fe(n.label),1)],42,wf))),128))],544),t.hasOverflow?(ve(),fe("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=n=>t.scrollByStep(1))},"›",8,_f)):Ve("",!0),t.hasOverflow&&t.hiddenTabs.length?(ve(),ca(k,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:ra(()=>[it(c,null,{default:ra(()=>[(ve(!0),fe(nt,null,wt(t.hiddenTabs,n=>(ve(),ca(f,{key:n.key,command:n.key,class:lt({"is-active":t.currentSubPage===n.key})},{default:ra(()=>[it(P,{name:n.icon,size:14},null,8,["name"]),Sa(" "+Fe(n.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ra(()=>[e[3]||(e[3]=Ce("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Ve("",!0)])):Ve("",!0)}const Sf=qa(hf,[["render",xf]]);(function(){const{ref:a,computed:e,inject:p}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=p("qcState");if(!t)return{};const d=a(!1),m=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),P=()=>{m.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},f=e(()=>t.marketData&&t.marketData.value||{}),c=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:f,bannerDismissed:m,dismissBanner:P,goMerrill:c,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:d,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(k,n){const x="sub."+k.key+"."+n,i=t.t(x);if(i!==x)return i;const h="sub."+n,g=t.t(h);return g!==h&&g?g:t.subPageNames[n]||n}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                            <div class="card-title"><qc-icon name="gem" :size="16" /> {{ t('calendar.poolTitle') }}</div>
                            <!-- V4.9.4: 对比基准/沿用持仓提示(来自 /api/view note) -->
                            <div v-if="viewNote" class="cal-view-note" role="status">{{ viewNote }}</div>

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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:p,computed:t}=Vue,d=p(0),m=p(0),P=p(!1),f=t(()=>{const G={day:"date",week:"week",month:"month",year:"year"},J=e.currentView&&e.currentView.value||"day";return G[J]||"date"}),c={day:"日",week:"周",month:"月",year:"年"};function k(G){return e.t&&e.t("view."+G)||c[G]||G}function n(G){e.switchView?e.switchView(G):e.currentView&&(e.currentView.value=G)}let x=null;function i(G){const J=G.touches&&G.touches[0];J&&(d.value=J.clientX,m.value=J.clientY)}async function h(){if(!P.value){P.value=!0;try{await e.refreshCalendarData()}catch{}x&&clearTimeout(x),x=setTimeout(()=>{P.value=!1},500)}}function g(G){if(!(window.innerWidth<=768))return;const J=G.changedTouches&&G.changedTouches[0];if(!J)return;const ae=window.__quantModules&&window.__quantModules.gestures||{};if((typeof ae.judgePullToRefresh=="function"?ae.judgePullToRefresh(m.value,J.clientY):J.clientY-m.value>=60)&&(window.scrollY||0)<=0){G.stopPropagation(),h();return}if(e.currentSubPage.value==="pool")return;const E=J.clientX-d.value,R=J.clientY-m.value;Math.abs(E)>50&&Math.abs(E)>Math.abs(R)*1.2&&(e.navigateDate(E<0?1:-1),G.stopPropagation())}const C=p(!1),D=p(!1),_=p(""),o=p(null),l=p([]);function v(G){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[G]||G}async function j(){if(e.selectedDate.value){C.value=!0,D.value=!0,_.value="",o.value=null,l.value=[];try{const G=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),J=await G.json();if(!G.ok)throw new Error(J.detail||"HTTP "+G.status);o.value=J;const ae=J&&J.comparison||{},L=[];for(const E of Object.keys(ae)){if(E==="all_intersection")continue;const R=ae[E]||{},W=E.split("_vs_");L.push({label:v(W[0])+" ↔ "+v(W[1]),interCount:R.intersection_count||0,inter:(R.intersection||[]).join(", "),onlyS1Count:R.only_s1_count||0,onlyS1:(R.only_s1||[]).join(", "),onlyS2Count:R.only_s2_count||0,onlyS2:(R.only_s2||[]).join(", ")})}l.value=L}catch(G){_.value=String(G&&G.message?G.message:G)}finally{D.value=!1}}}let B="";return Vue.watch(()=>{const G=e.stockPool,J=G&&G.value||[];return{n:J.length,first:J[0]&&J[0].code,split:!!e.detailSplitEnabled.value}},(G,J)=>{if(!G.split||!G.first||G.n===0)return;const ae=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,L=(e.stockPool.value||[]).some(E=>E.code===ae);if(!ae||!L){if(B===G.first&&ae&&L===!1&&G.n>1)return;B=G.first,e.showStockDetail&&e.showStockDetail(G.first)}},{immediate:!0}),{...e,calType:f,pullRefreshing:P,onCalTouchStart:i,onCalTouchEnd:g,viewLabel:k,switchViewLocal:n,compareVisible:C,compareLoading:D,compareError:_,compareData:o,comparePairs:l,openStrategyCompare:j}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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

                        <!-- V5.19 (F5): 中栏阶段列表 + 右栏阶段详情工作区 (弹窗模式时仅列表全宽, 面板不渲染) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- 四阶段网格 (双栏时竖排为列表) -->
                        <div class="grid-2col-gap8-mb14" :class="{ 'is-vertical': detailSplitEnabled }">
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
                        </template>
                        <template #pane>
                            <qc-merrill-detail-dialog :embedded="true"></qc-merrill-detail-dialog>
                        </template>
                        </qc-detail-split>

                        <!-- 描述 -->
                        <div class="text-center-secondary-lh" v-if="merrillData.description">
                            {{ merrillData.description }}
                        </div>

                        <!-- 时间 + 进度 -->
                        <div class="gold-note-box" v-if="merrillData.timing">
                            <div class="flex-between-base-mb6">
                                <span class="color-secondary"><qc-icon name="calendar" :size="14" /> {{ merrillData.timing.current_stage_start_date || '—' }}</span>
                                <!-- V6.6: merrillData.color 后端实时色，保留内联 -->
                                <span class="strategy-badge" v-if="merrillData.timing.maturity" :style="{color: merrillData.color}">{{ merrillData.timing.maturity }}</span>
                            </div>
                            <div class="flex-between-xs-mb7">
                                <span>已过 {{ merrillData.timing.duration_days }}天 · 剩余 {{ merrillData.timing.days_remaining || '—' }}天</span>
                                <span class="text-warning-semibold" v-if="merrillData.next_stage_prediction?.transition_probability> 0.2">
                                    →{{ merrillData.next_stage_prediction.next_stage_name }} {{ (merrillData.next_stage_prediction.transition_probability*100).toFixed(2) }}%
                                </span>
                                <span v-else>均值 {{ fmtNum(merrillData.timing.avg_duration_months) }}月</span>
                            </div>
                            <div class="progress-track-8">
                                <!-- V6.6: 超期渐变插值（实时色→warning），保留内联 -->
                                <div class="progress-fill-4" :style="{width: Math.min(100, merrillData.timing.progress_percent || 0) + '%', background: (merrillData.timing.progress_percent || 0)> 100 ? 'linear-gradient(90deg, ' + (merrillData.color || 'var(--color-success)') + ', var(--color-warning))' : (merrillData.color || 'var(--color-success)')}"></div>
                            </div>
                            <div class="flex-between-xs-mt4">
                                <span>{{ merrillData.timing.progress_percent || 0 }}%<template v-if="(merrillData.timing.progress_percent || 0) > 100"> ⚠超期</template></span>
                                <span v-if="merrillData.timing.predicted_end">预计结束 {{ merrillData.timing.predicted_end.base || merrillData.timing.predicted_end }}</span>
                            </div>
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

                        <!-- v3.22-I4 + V4.0.1: 历史周期时间轴(最近4轮, 历史在上/最新在下, 蛇形连线, hover介绍) -->
                        <div class="merrill-timeline-block">
                            <div class="merrill-timeline-head">
                                <span><qc-icon name="history" :size="14" /> 历史周期时间轴</span>
                                <span class="merrill-timeline-sub" v-if="merrillTimeline?.cycles?.length">最近 {{ merrillTimeline.cycles.length }} 轮 · 自上而下 历史→最新 · 悬浮阶段看介绍</span>
                                <span class="merrill-timeline-sub" v-else-if="timelineLoading">加载中...</span>
                                <button class="tl-back-latest" v-if="merrillTimeline?.cycles?.length" @click="scrollToLatest" title="滚动到最新周期">回到最新 ⤓</button>
                            </div>
                            <!-- V5.15 (F3): 阶段色图例 -->
                            <div class="tl-legend" v-if="tlLegendStages.length">
                                <span class="tl-legend-title">阶段图例</span>
                                <span v-for="ls in tlLegendStages" :key="ls.key" class="tl-legend-item">
                                    <span class="tl-legend-dot" :style="{ background: ls.color }"></span>{{ ls.name }}
                                </span>
                                <span class="tl-legend-hint">· 点击轮标签折叠/展开 · 点击阶段看详情</span>
                            </div>
                            <div class="merrill-timeline" v-if="merrillTimeline?.cycles?.length">
                                <div class="tl-spine">
                                    <div class="tl-spine-arrow tl-top">▲ 历史</div>
                                    <div class="tl-cycle" v-for="(cycle, ci) in merrillTimeline.cycles" :key="ci"
                                        :class="{ 'is-collapsed': isCycleCollapsed(ci) }">
                                        <div class="tl-cycle-node"><span class="tl-cycle-node-dot"></span></div>
                                        <div class="tl-cycle-body">
                                            <div class="tl-cycle-label" @click="toggleCycle(ci)" role="button" tabindex="0"
                                                @keydown.enter.prevent="toggleCycle(ci)" @keydown.space.prevent="toggleCycle(ci)">
                                                <span class="tl-cycle-toggle">{{ isCycleCollapsed(ci) ? '▸' : '▾' }}</span>
                                                {{ cycle.label }}<span class="tl-cycle-years" v-if="tlCycleYears(cycle)"> · {{ tlCycleYears(cycle) }}</span>
                                            </div>
                                            <div v-show="!isCycleCollapsed(ci)" class="tl-stage-rows" :style="{height: (cycle.stages.length > 4 ? 100 : 52) + 'px'}">
                                                <template v-for="(row, ri) in timelineRows(cycle.stages)" :key="ri">
                                                    <div class="tl-stage-row" :class="ri === 0 ? 'tl-row-top' : 'tl-row-bottom'">
                                                        <div v-for="(st, si) in row" :key="si"
                                                             class="merrill-stage-chip"
                                                             :class="{ 'is-current': st.is_current }"
                                                             :style="tlChipStyle(st.stage)"
                                                             @click.prevent="showTimelineStage(st.stage, $event)"
                                                             @mouseenter="setTlHover(ci + '-' + ri + '-' + si)"
                                                             @mouseleave="clearTlHover()">
                                                            <!-- V6.6: getTimelineStageColor() 函数计算色，保留内联 -->
                                                            <span class="tl-dot" :style="{background: getTimelineStageColor(st.stage)}"></span>
                                                            <span class="merrill-stage-chip-name">{{ st.name || getTimelineStageName(st.stage) || st.stage }}</span>
                                                            <span class="merrill-stage-chip-date" v-if="st.start">{{ st.start.slice(0,4) }}<template v-if="st.end">–{{ st.end.slice(0,4) }}</template></span>
                                                            <span class="merrill-stage-chip-current" v-if="st.is_current">当前</span>
                                                            <div class="tl-tip" v-if="tlHoverKey === (ci + '-' + ri + '-' + si)">
                                                                <div class="tl-tip-head">
                                                                    <span class="tl-tip-dot" :style="{background: getTimelineStageColor(st.stage)}"></span>
                                                                    <span class="tl-tip-title">{{ st.name || getTimelineStageName(st.stage) || st.stage }}</span>
                                                                    <span class="tl-tip-current" v-if="st.is_current">当前</span>
                                                                </div>
                                                                <div class="tl-tip-meta">
                                                                    <span v-if="tlTipYears(st)">{{ tlTipYears(st) }}</span>
                                                                    <template v-if="st.duration_months"><span class="tl-tip-sep">·</span><span>约 {{ Math.round(st.duration_months) }} 个月</span></template>
                                                                    <template v-if="st.is_current && merrillData?.timing?.duration_days != null">
                                                                        <span class="tl-tip-sep">·</span><span>已 {{ merrillData.timing.duration_days }} 天<template v-if="merrillData.timing.days_remaining != null"> / 剩 {{ merrillData.timing.days_remaining }} 天</template></span>
                                                                    </template>
                                                                </div>
                                                                <div class="tl-tip-brief" v-if="st.is_current && tlCurrentBrief()">{{ tlCurrentBrief() }}</div>
                                                                <div class="tl-tip-brief" v-else-if="!st.is_current && tlTipBrief(st)">{{ tlTipBrief(st) }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                                <svg v-if="cycle.stages.length > 1" class="tl-connector" :viewBox="tlPathFor(ci).vb" preserveAspectRatio="none" aria-hidden="true">
                                                    <path :d="tlPathFor(ci).d" class="tl-line" :class="{ 'is-active': tlHoverKey && String(tlHoverKey).indexOf(ci + '-') === 0 }" />
                                                </svg>
                                            </div>
                                            <!-- V4.0.5-D: 甘特式连续时间条 (按时长比例分段着色, 展示各阶段时间占比) -->
                                            <div class="tl-gantt" v-if="cycle.stages.length > 1 && !isCycleCollapsed(ci)">
                                                <div v-for="(st, gi) in cycle.stages" :key="gi" class="tl-gantt-seg" :style="tlGanttStyle(st, cycle.stages, gi)"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tl-spine-arrow tl-bottom">▼ 最新</div>
                                </div>
                            </div>
                            <!-- V4.8 (R1): 时间轴小阶段点击紧凑弹窗 — 仅展示该阶段独有信息 -->
                            <div class="tl-click-pop" v-if="tlClickVisible && tlClickStage" :style="tlClickPosStyle" @click.self="closeTlClick">
                                <div class="tl-click-card" role="dialog" aria-label="阶段详情">
                                    <button class="tl-click-close" @click="closeTlClick" aria-label="关闭">✕</button>
                                    <div class="tl-click-head">
                                        <span class="tl-tip-dot" :style="{background: getTimelineStageColor(tlClickStage.stage)}"></span>
                                        <span class="tl-click-title">{{ tlClickStage.name || getTimelineStageName(tlClickStage.stage) || tlClickStage.stage }}</span>
                                        <span class="tl-tip-current" v-if="tlClickStage.is_current">当前</span>
                                    </div>
                                    <div class="tl-click-meta">
                                        <span v-if="tlClickStage.start">{{ String(tlClickStage.start).slice(0,4) }}<template v-if="tlClickStage.end">–{{ String(tlClickStage.end).slice(0,4) }}</template><template v-else>–至今</template></span>
                                        <template v-if="tlClickStage.duration_months"><span class="tl-tip-sep">·</span><span>约 {{ Math.round(tlClickStage.duration_months) }} 个月</span></template>
                                        <template v-if="tlClickStage.is_current && merrillData?.timing?.duration_days != null">
                                            <span class="tl-tip-sep">·</span><span>已 {{ merrillData.timing.duration_days }} 天<template v-if="merrillData.timing.days_remaining != null"> / 剩 {{ merrillData.timing.days_remaining }} 天</template></span>
                                        </template>
                                    </div>
                                    <div class="tl-click-brief" v-if="tlClickStage.essence">{{ tlClickStage.essence }}</div>
                                    <div class="tl-click-trigger" v-if="tlClickStage.trigger && !tlClickStage.is_current">
                                        <span class="tl-click-label">触发</span>{{ tlClickStage.trigger }}
                                    </div>
                                    <div class="tl-click-trigger" v-else-if="tlClickStage.is_current && tlCurrentBrief()">
                                        <span class="tl-click-label">实时</span>{{ tlCurrentBrief() }}
                                    </div>
                                    <div class="tl-click-indicators" v-if="tlClickStage.key_indicators && Object.keys(tlClickStage.key_indicators).length">
                                        <span v-for="(v, k) in tlClickStage.key_indicators" :key="k" class="tl-click-ind-card">
                                            {{ k === 'gdp_growth' ? 'GDP' : k === 'cpi' ? 'CPI' : k === 'pmi' ? 'PMI' : k === 'ppi' ? 'PPI' : k === 'm2_growth' ? 'M2' : k }} {{ v }}%
                                        </span>
                                    </div>
                                    <div class="tl-click-highlight" v-if="tlClickStage.highlight">
                                        <span class="tl-click-label">亮点</span>{{ tlClickStage.highlight }}
                                    </div>
                                </div>
                            </div>
                            <div class="merrill-timeline-empty" v-else-if="!timelineLoading">暂无历史周期数据</div>
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
    `,setup(){const e=a("qcState"),p=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let d=0;const m=t(()=>{var S;return((S=e.merrillData)==null?void 0:S.value)||{}}),P=t(()=>{var S;return((S=e.marketData)==null?void 0:S.value)||{}}),f=t(()=>{var S;return((S=e.dashboardData)==null?void 0:S.value)||{}}),c=t(()=>{var S;return((S=e.healthMetrics)==null?void 0:S.value)||[]}),k=t(()=>{var S;return((S=e.filteredConsensusRank)==null?void 0:S.value)||[]}),n=t(()=>{const S={};for(const me of k.value)me.code&&me.name&&(S[me.code]=me.name);return S}),x={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function i(S){return x[S]||S}const h=t(()=>P.value.date||f.value.latest_date||"-"),g=t(()=>{const S=P.value;return!S||Object.keys(S).length===0?"数据加载中...":S.is_trading_day&&S.in_trading_hours?"● 交易中":S.is_trading_day?"已收盘":"○ 非交易日"}),C=t(()=>{const S=m.value.next_stage_prediction;return S&&S.next_stage_name&&S.transition_probability>.2?`→${S.next_stage_name} ${(S.transition_probability*100).toFixed(2)}%`:""}),D=t(()=>{const S=[],me=f.value.pool_changes||{},ke=me.new_count||0;if(ke>0){const We=me.new_stock_names||{},A=(me.new_stocks||[]).map(de=>We[de]||n.value[de]||de).slice(0,4).join("、");S.push({icon:"sparkles",level:"new",text:`今日新入池 ${ke} 只${A?" · "+A:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const We of c.value.filter(A=>A.degraded))S.push({icon:"alert-triangle",level:"warn",text:`数据源 ${i(We.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const Se=m.value.timing;Se&&Se.progress_percent&&Se.progress_percent>100?S.push({icon:"clock",level:"warn",text:`美林「${m.value.name}」已超期 ${Se.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):Se&&Se.maturity&&m.value.name&&S.push({icon:"clock",level:"info",text:`美林「${m.value.name}」阶段成熟度 ${Se.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Le=P.value;return Le&&Le.is_trading_day===!1&&Le.date&&S.push({icon:"calendar",level:"info",text:`${Le.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),S}),_=t(()=>{const S=[],me=m.value.name||"",ke=m.value.timing||{},Se=["复苏","成长","过热"],Le=["滞胀","衰退"];Se.some($e=>me.includes($e))&&S.push({kind:"opportunity",source:"美林",text:me+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Le.some($e=>me.includes($e))&&S.push({kind:"risk",source:"美林",text:me+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),ke.progress_percent&&ke.progress_percent>100&&S.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const We=f.value.pool_changes||{},A=(We.new_count||0)-(We.out_count||0);A>=3?S.push({kind:"opportunity",source:"池变动",text:"净入池 +"+A,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):A<=-3&&S.push({kind:"risk",source:"池变动",text:"净出池 "+A,action:()=>{e.currentSubPage.value="consensus"}});const de=P.value.market_sentiment,He=de&&de.text||"";(He.includes("乐观")||He.includes("积极")||He.includes("亢奋"))&&S.push({kind:"opportunity",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}}),(He.includes("悲观")||He.includes("恐慌")||He.includes("低迷"))&&S.push({kind:"risk",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}});for(const $e of c.value.filter(ot=>ot.degraded))S.push({kind:"risk",source:"数据",text:i($e.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return S}),o=t(()=>{var S;return((S=e.merrillTimeline)==null?void 0:S.value)||e.merrillTimeline||{cycles:[]}}),l=t(()=>{var S;return((S=e.timelineLoading)==null?void 0:S.value)||!1}),v=Vue.ref(null),j=Vue.ref(!1),B=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function G(S){const me=S&&S.currentTarget,ke=document.querySelector(".tl-click-pop");if(!me||!ke)return;const Se=me.getBoundingClientRect(),Le=ke.offsetWidth||340,We=ke.offsetHeight||220,A=10,de=me.closest(".merrill-timeline-block"),He=de?de.getBoundingClientRect():Se,$e=Se.left-He.left,ot=Se.top-He.top,kt=Se.width,Ft=Se.height,Mt=He.width,St=He.height;let ct=null;$e+kt+A+Le<=Mt?ct=$e+kt+A:$e-A-Le>=0?ct=$e-A-Le:ct=Math.max(8,Math.min($e,Mt-Le-8));const Rt=ot+Ft/2-We/2,Ot=Math.max(8,Math.min(Rt,St-We-8));B.top=Ot,B.left=ct,B.right=null,B.bottom=null}const J=Vue.computed(function(){const S={};return B.top!=null&&(S.top=B.top+"px"),B.left!=null&&(S.left=B.left+"px"),B.right!=null&&(S.right=B.right+"px"),S});function ae(S,me){let ke=null;const Se=o.value&&o.value.cycles||[];for(const Le of Se){const We=(Le.stages||[]).find(A=>A.stage===S&&A.is_current);if(We){ke=We;break}}if(!ke)for(const Le of Se){const We=(Le.stages||[]).find(A=>A.stage===S);if(We){ke=We;break}}ke&&(v.value=ke,j.value=!0,Vue.nextTick(function(){G(me)}))}function L(){j.value=!1,v.value=null}function E(S){const me=e.merrillStagesConfig,Se=(me&&me.value?me.value:me||{})[S]||{};return Se.color||Se.bg_color||"var(--color-primary)"}function R(S){const me=e.merrillStagesConfig,ke=me&&me.value?me.value:me||{};return ke[S]&&ke[S].name||""}function W(){const S=e.merrillStagesConfig;return S&&S.value?S.value:S||{}}function ie(S){return W()[S]&&W()[S].description||""}function Z(S){const me=S&&S.stages?S.stages:[];if(!me.length)return"";const ke=me[0]&&me[0].start?String(me[0].start).slice(0,4):"",Se=me[me.length-1]||{},Le=Se.end?String(Se.end).slice(0,4):Se.start?String(Se.start).slice(0,4):"";return ke||Le?ke?ke+"–"+Le:Le:""}function ne(S){const me=S.start?String(S.start).slice(0,4):"",ke=S.end?String(S.end).slice(0,4):me?"至今":"";return me?ke?me+"–"+ke:me:""}function I(S){const me=S.essence||S.trigger||ie(S.stage)||"";return S.highlight?me?me+" · "+S.highlight:S.highlight:me}function V(){const S=m.value.indicators||{},me=m.value.stage||"",ke={recovery:[["PMI",S.pmi],["GDP",S.gdp_growth],["M2",S.m2_growth]],overheat:[["PPI",S.ppi],["CPI",S.cpi],["PMI",S.pmi]],stagflation:[["CPI",S.cpi],["PPI",S.ppi],["GDP",S.gdp_growth]],recession:[["PMI",S.pmi],["GDP",S.gdp_growth],["CPI",S.cpi]]},Se=(ke[me]||ke.recession).filter(Le=>Le[1]!=null&&Le[1]!==0);return Se.length?"实时 · "+Se.map(Le=>Le[0]+" "+Le[1]+"%").join(" ｜ "):""}function z(S,me,ke){const Le=(W()[S.stage]||{}).color||"var(--color-primary)",We=me||[],A=We.map(kt=>kt.duration_months||0),de=A.reduce((kt,Ft)=>kt+Ft,0),He=de>0?A[ke]/de*100:100/Math.max(1,We.length),$e=ke===0,ot=ke===We.length-1;return{flex:"0 0 "+He+"%",background:Le,borderRadius:$e?"6px 0 0 6px":ot?"0 6px 6px 0":"0"}}function w(S){const me=S.length;if(me<=4)return[S];const ke=Math.ceil(me/2);return[S.slice(0,ke),S.slice(ke).reverse()]}function M(S){const me=W()[S]||{},ke=me.color||"var(--color-primary)";return{background:me.bg_color||"var(--bg-card)",borderColor:ke,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const oe=Vue.reactive({}),U=Vue.ref(null);let y=null,r=null,q=null;function u(){try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((me,ke)=>{const Se=me.querySelector(".tl-stage-rows"),Le=me.querySelector(".tl-row-top"),We=me.querySelector(".tl-row-bottom"),A=Le?Array.from(Le.querySelectorAll(".merrill-stage-chip")):[],de=We?Array.from(We.querySelectorAll(".merrill-stage-chip")).reverse():[],He=A.concat(de);if(!Se||He.length<2){oe[ke]={d:"",vb:"0 0 1 1"};return}const $e=Se.getBoundingClientRect(),ot=Math.max(1,$e.width),kt=Math.max(1,$e.height),Ft=A.length,Mt=He.map(ct=>{const Rt=ct.getBoundingClientRect();return{x:Rt.left+Rt.width/2-$e.left,y:Rt.top+Rt.height/2-$e.top}});let St="M "+Mt[0].x.toFixed(1)+" "+Mt[0].y.toFixed(1);for(let ct=1;ct<Mt.length;ct++){const Rt=Mt[ct-1],Ot=Mt[ct];ct===Ft&&(St+=" L "+Rt.x.toFixed(1)+" "+Ot.y.toFixed(1)),St+=" L "+Ot.x.toFixed(1)+" "+Ot.y.toFixed(1)}oe[ke]={d:St,vb:"0 0 "+ot.toFixed(1)+" "+kt.toFixed(1)}})}catch(S){console.error("[tl] buildTlPaths error",S)}}function H(S){return oe[S]||{d:"",vb:"0 0 1 1"}}function ce(S){U.value=S}function $(){U.value=null}const T=Vue.ref([]);function Y(S){return T.value.indexOf(S)!==-1}function K(S){const me=T.value.slice(),ke=me.indexOf(S);ke!==-1?me.splice(ke,1):me.push(S),T.value=me,Vue.nextTick(function(){u&&u()})}function Q(){const S=document.querySelector(".merrill-timeline-block");if(!S)return;const me=S.querySelector(".tl-spine");me?me.scrollIntoView({behavior:"smooth",block:"end"}):S.scrollIntoView({behavior:"smooth",block:"end"})}const X=Vue.computed(function(){const S=W();return["recovery","overheat","stagflation","recession","default"].filter(function(ke){return S[ke]&&S[ke].name}).map(function(ke){return{key:ke,name:S[ke].name,color:S[ke].color||"var(--color-primary)"}})});function ee(S){r&&clearTimeout(r),r=setTimeout(()=>{r=null,Vue.nextTick(u)},S||120)}Vue.onMounted(()=>{ee(0),ee(800),y=()=>ee(150),window.addEventListener("resize",y),q=new MutationObserver(()=>ee(120)),q.observe(document.body||document.documentElement,{childList:!0,subtree:!0})}),Vue.onBeforeUnmount(()=>{y&&window.removeEventListener("resize",y),r&&clearTimeout(r),q&&(q.disconnect(),q=null)});const be=Vue.ref([]),Pe=Vue.ref(null),Me=Vue.ref(!1),qe=Vue.ref(!1),le=Vue.ref(7),_e=Vue.ref(""),ze=Vue.ref(""),re=Vue.computed(()=>{const S=new Set;return(be.value||[]).forEach(function(me){me.task&&S.add(me.task)}),Array.from(S).sort()}),te=Vue.computed(function(){const S=Pe.value&&Pe.value.success_rate||0;return S>=80?"color-success":S>=50?"color-warning":"color-danger"});function ge(S,me){return S>0&&me/S>=.8?"status-ok":S>0&&me/S>=.5?"status-warn":"status-bad"}async function Te(){const S=++d;Me.value=!0,qe.value=!1;try{const me=window.__quantModules&&window.__quantModules.core||{},ke=typeof me.authHeaders=="function"?me.authHeaders():{},Se=new URLSearchParams({days:String(le.value)});_e.value&&Se.set("task",_e.value),ze.value&&Se.set("status",ze.value);const[Le,We]=await Promise.all([fetch("/api/system/execution-history?"+Se.toString(),{headers:ke}).then(function(A){return A.json()}),fetch("/api/system/execution-summary?days="+le.value,{headers:ke}).then(function(A){return A.json()})]);if(S!==d)return;be.value=Le&&Le.data||[],Pe.value=We&&We.data||null}catch(me){console.error("[execution] 执行数据加载失败:",me),qe.value=!0}finally{S===d&&(Me.value=!1)}}const Ne=window.__quantModules&&window.__quantModules.i18n||{},Ke=typeof Ne.t=="function"?Ne.t:function(S){return String(S)},rt=Vue.ref([]),dt=Vue.ref(null),Qe=Vue.ref(null),Et=Vue.ref(""),he=Vue.ref([]),we=Vue.ref(!1);let Re=null;const Ae=Vue.computed(function(){const S=Qe.value&&Qe.value.dates||[];return S.length&&!Et.value&&(Et.value=S[S.length-1].date),S}),Ge=Vue.computed(function(){const S=(rt.value||[]).find(function(ke){return ke.enabled});if(!S||S.countdown_seconds==null)return"—";const me=S.countdown_seconds;return Math.floor(me/3600)+"h"+String(Math.floor(me%3600/60)).padStart(2,"0")+"m"}),Xe=Vue.computed(function(){const S=(rt.value||[]).find(function(me){return me.enabled});if(!S||S.countdown_seconds==null||S.countdown_seconds<0)return"";try{return new Date(Date.now()+S.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),Ye=Vue.computed(function(){const S=dt.value;return!S||S.phase==="idle"?Ke("exec.waiting"):S.phase==="running"?Ke("exec.running")+(S.current_sid?" · "+S.current_sid:""):S.phase==="done"?Ke("exec.done"):Ke("exec.failed")}),ht=Vue.computed(function(){return dt.value&&dt.value.phase==="running"?"loader":"check-circle-2"}),xt=Vue.computed(function(){const S=Qe.value&&Qe.value.dates||[];return S.length?S[S.length-1].date:"—"}),ft=Vue.computed(function(){const S=Qe.value&&Qe.value.dates||[],me=S[S.length-1];return me&&me.visible?"color-success":"color-danger"}),Ze=Vue.computed(function(){const S=Qe.value&&Qe.value.dates||[],me=S[S.length-1];return me?me.day_view_total:"—"});function jt(S){const me=window.__quantModules&&window.__quantModules.core||{},ke=typeof me.authHeaders=="function"?me.authHeaders():{};return fetch(S,{headers:ke}).then(function(Se){return Se.json()})}async function Nt(){const S=++d;try{const[me,ke,Se]=await Promise.all([jt("/api/strategies/execution/plan"),jt("/api/strategies/execution/status"),jt("/api/strategies/execution/results?days=7")]);if(S!==d)return;rt.value=me&&me.data&&me.data.plans||[],dt.value=ke&&ke.data||null,Qe.value=Se&&Se.data||null,dt.value&&dt.value.phase==="running"?yt():ut()}catch(me){console.error("[execution-monitor] 监控数据加载失败:",me)}}function yt(){ut(),Re=setInterval(function(){jt("/api/strategies/execution/status").then(function(S){dt.value=S&&S.data||null,dt.value&&dt.value.phase!=="running"&&(ut(),Nt())}).catch(function(){})},5e3)}function ut(){Re&&(clearInterval(Re),Re=null)}async function Vt(S){if(!S)return;const me=++d;we.value=!0;try{const ke=await jt("/api/strategies/execution/trace/"+encodeURIComponent(S));if(me!==d)return;const Se=ke&&ke.data||null;he.value=Se&&Se.steps||[]}catch(ke){console.error("[execution-trace] 追溯加载失败:",ke)}finally{me===d&&(we.value=!1)}}return Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(S){S==="execution"?(Te(),Nt()):ut()},{immediate:!0}),Vue.watch(function(){const S=e.currentSubPage&&e.currentSubPage.value,me=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],ke=e.marketData&&e.marketData.value||{};return{sub:S,split:!!e.detailSplitEnabled.value,top5:me.slice(0,5),rank:me,indices:(ke.indices||[]).map(function(Se){return Se}),stageKeys:(e.stages&&e.stages.value||[]).map(function(Se){return Se.key}),curStage:e.merrillData&&e.merrillData.value&&e.merrillData.value.stage||""}},function(S,me){if(S.split){if(S.sub==="overview"){if(!S.top5.length)return;const ke=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Se=S.top5.some(function(Le){return Le.code===ke});(!ke||!Se)&&e.showStockDetail&&e.showStockDetail(S.top5[0].code)}else if(S.sub==="consensus"){if(!S.rank.length)return;const ke=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Se=S.rank.some(function(Le){return Le.code===ke});(!ke||!Se)&&e.showStockDetail&&e.showStockDetail(S.rank[0].code)}else if(S.sub==="market"){if(!S.indices.length)return;const ke=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,Se=S.indices.some(function(Le){return Le.code===ke});(!ke||!Se)&&e.showIndexDetail&&e.showIndexDetail(S.indices[0])}else if(S.sub==="merrill"){if(!S.stageKeys.length||!!(e.merrillDetailData&&e.merrillDetailData.value&&e.merrillDetailData.value.name))return;const Se=S.stageKeys.indexOf(S.curStage)>=0?S.curStage:S.stageKeys[0];e.showStageDetail&&e.showStageDetail(Se)}}},{immediate:!0}),{...e,todayText:h,tradingStatus:g,merrillNext:C,todayFocus:D,todaySignals:_,merrillConfigOpen:p,getTimelineStageColor:E,getTimelineStageName:R,getTimelineStageDesc:ie,timelineRows:w,tlChipStyle:M,tlPathFor:H,tlCycleYears:Z,tlGanttStyle:z,tlTipYears:ne,tlTipBrief:I,tlCurrentBrief:V,tlHoverKey:U,setTlHover:ce,clearTlHover:$,collapsedCycles:T,isCycleCollapsed:Y,toggleCycle:K,scrollToLatest:Q,tlLegendStages:X,tlClickStage:v,tlClickVisible:j,closeTlClick:L,tlClickPosStyle:J,merrillTimeline:o,timelineLoading:l,showTimelineStage:ae,execHistory:be,execSummary:Pe,execLoading:Me,execError:qe,execDays:le,execTaskFilter:_e,execStatusFilter:ze,execTaskOptions:re,execSuccessClass:te,loadExecutionData:Te,execRateClass:ge,execPlan:rt,execStatus:dt,execResults:Qe,execTraceDate:Et,execTraceSteps:he,execTraceLoading:we,execResultsDates:Ae,execCountdownText:Ge,execNextRunText:Xe,execPhaseText:Ye,execStatusIcon:ht,execLastDate:xt,execVisibleClass:ft,execVisibleText:Ze,loadExecutionTrace:Vt}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};function p(A){e.currentSubPage.value=A}function t(){_e(),ze(),re()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,A=>{A==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),A==="datadict"&&q(),A==="health"&&M(),A==="notification"&&t()});const d=e.themeHues||[45,220,0,140,270,320],m=e.themeHueNames||{},P=e.themeMode||Vue.computed(()=>"light"),f=e.themeHue||Vue.ref(45);function c(A){e.changeThemeMode&&e.changeThemeMode(A)}function k(A){e.changeThemeHue&&e.changeThemeHue(parseInt(A,10))}function n(A){return e.hueColor?e.hueColor(A):"hsl("+A+", 75%, 42%)"}function x(A){return e.hueName?e.hueName(A):m[A]||"自定义 "+A}function i(A){e.setNavMode&&e.setNavMode(A)}const h=Vue.ref([]),g=Vue.ref(""),C=Vue.ref("read"),D=Vue.ref(""),_=Vue.ref(!1),o=()=>window.__quantModules&&window.__quantModules.core||{},l=Vue.ref([]),v=Vue.ref(!1);async function j(){v.value=!0;try{const A=await fetch("/api/audit/logs?limit=20",{headers:o().authHeaders?o().authHeaders():{}}).then(function(de){if(!de.ok)throw new Error("HTTP "+de.status);return de.json()});l.value=A&&A.logs||[]}catch(A){console.error("[system] 审计加载失败:",A),l.value=[]}finally{v.value=!1}}const B=Vue.ref(!1),G=Vue.ref(null),J=Vue.ref(null),ae=Vue.ref([]),L=Vue.ref(null);function E(A){return A==="completed"?"完成":A==="running"?"运行中":A==="pending"?"排队中":A==="cancelled"?"已取消":"失败"}async function R(){try{const de=await(await fetch("/api/jobs?limit=20")).json();de&&de.success&&(ae.value=de.data&&de.data.tasks||[])}catch(A){console.warn("[system] 加载任务队列失败:",A)}}async function W(A){try{await fetch("/api/jobs/"+A+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),R()}catch(de){console.warn("[system] 取消任务失败:",de)}}function ie(){R(),L.value=window.setInterval(R,15e3)}const Z=Vue.ref({items:[]}),ne=Vue.ref([]),I=Vue.ref(null),V=Vue.ref({data_sources:[],alerts:[]}),z=function(){return o().authHeaders?o().authHeaders():{}},w=function(A){return fetch(A,{headers:z()}).then(function(de){if(!de.ok)throw new Error("HTTP "+de.status);return de.json()})};async function M(){B.value=!0,G.value=null;try{const[A,de,He,$e]=await Promise.all([w("/api/reliability/freshness"),w("/api/reliability/heal-history?limit=20"),w("/api/reliability/startup-report"),w("/api/reliability/source-health")]);Z.value=A&&A.data||{items:[]},ne.value=de&&de.data||[],I.value=He&&He.data||null,V.value=$e||{data_sources:[],alerts:[]},J.value=new Date().toLocaleTimeString()}catch(A){console.warn("[health] 加载失败:",A),G.value="健康数据加载失败: "+(A.message||""),Z.value={items:[]},ne.value=[]}finally{B.value=!1}}const oe=Vue.ref(!1),U=Vue.ref(""),y=Vue.ref(""),r=Vue.ref({fields:[]});async function q(){oe.value=!0,U.value="";try{const A="/api/data-dict"+(y.value?"?category="+y.value:""),de=await w(A);r.value=de&&de.data||{fields:[]}}catch(A){console.warn("[dict] 加载失败:",A),U.value="数据字典加载失败: "+(A.message||""),r.value={fields:[]}}finally{oe.value=!1}}function u(A){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[A]||"var(--text-secondary)"}function H(A){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[A]||A}const ce=Vue.computed(()=>(Z.value?Z.value.items||[]:[]).filter(de=>de.status==="stale"||de.status==="missing").length),$=Vue.ref("rules"),T=Vue.ref([]),Y=Vue.ref([]),K=Vue.ref([]),Q=Vue.ref(!1),X=Vue.ref(""),ee=Vue.ref("price_above"),be=Vue.ref(""),Pe=Vue.ref(!1),Me=Vue.ref(60),qe=Vue.ref("");function le(A){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[A]||A}async function _e(){Q.value=!0;try{const A=await(await fetch("/api/alerts/rules")).json();T.value=A&&A.rules||[]}catch(A){qe.value="规则加载失败: "+A}finally{Q.value=!1}}async function ze(){Q.value=!0;try{const A=await(await fetch("/api/alerts/history?limit=50")).json();Y.value=A&&A.history||[]}catch(A){qe.value="历史加载失败: "+A}finally{Q.value=!1}}async function re(){Q.value=!0;try{const A=await(await fetch("/api/alerts/channels")).json(),de=await(await fetch("/api/alerts/silence")).json();K.value=A&&A.channels||[],Pe.value=!!(de&&de.silenced)}catch(A){qe.value="通道状态加载失败: "+A}finally{Q.value=!1}}function te(A){$.value=A,A==="rules"?_e():A==="history"?ze():re()}async function ge(){const A=X.value.trim();if(!A){qe.value="请填写股票代码";return}Q.value=!0;try{const de={stock_code:A,rule_type:ee.value};if(ee.value!=="new_pool"){const $e=Number(be.value);if(isNaN($e)){qe.value="阈值必须为数值";return}de.threshold=$e}const He=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(de)})).json();He&&He.rule?(qe.value="规则已添加",X.value="",be.value="",_e()):qe.value=He&&He.detail||"添加失败"}catch(de){qe.value="添加失败: "+de}finally{Q.value=!1}}async function Te(A){try{await fetch("/api/alerts/rules/"+A.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!A.enabled})}),A.enabled=!A.enabled}catch(de){qe.value="切换失败: "+de}}async function Ne(A){try{const de=await(await fetch("/api/alerts/rules/"+A.id,{method:"DELETE"})).json();de&&de.success?(qe.value="规则已删除",_e()):qe.value="删除失败"}catch(de){qe.value="删除失败: "+de}}async function Ke(){try{const A=Pe.value?Me.value:0,de=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:A})})).json();Pe.value=!!(de&&de.silenced),qe.value=Pe.value?"已静默":"已恢复推送"}catch(A){qe.value="静默设置失败: "+A}}async function rt(){Pe.value=!1,await Ke()}function dt(A){return!!A&&!A.degraded}const Qe=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((de,He)=>Math.max(de,He.views||0),0)||1),Et=()=>o().OPENAPI_ROUTE_BASE||"/api/openapi";async function he(){_.value=!0;try{const A=await o().apiFetch(Et()+"/keys");h.value=A&&A.data||[]}catch(A){ElementPlus.ElMessage.error("加载 API Key 失败: "+(A.message||""))}finally{_.value=!1}}async function we(){try{const A=await o().apiFetch(Et()+"/keys",{method:"POST",body:JSON.stringify({name:g.value||"未命名",role:C.value||"read",expire_days:365})});A&&A.success?(D.value=A.api_key||"",g.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await he()):ElementPlus.ElMessage.error(A&&(A.detail||A.message)||"生成失败")}catch(A){ElementPlus.ElMessage.error("生成失败: "+(A.message||""))}}async function Re(){if(D.value)try{await navigator.clipboard.writeText(D.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Ae(A){try{const de=await o().apiFetch(Et()+"/keys/"+A.id,{method:"DELETE"});de&&de.success?(ElementPlus.ElMessage.success("Key 已吊销"),D.value&&A.prefix&&D.value.includes(A.prefix)&&(D.value=""),await he()):ElementPlus.ElMessage.error(de&&(de.detail||de.message)||"吊销失败")}catch(de){ElementPlus.ElMessage.error("吊销失败: "+(de.message||""))}}const Ge={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Xe(A){return Ge[A]||A}const Ye=computed(()=>{var A;return(((A=e.healthMetrics)==null?void 0:A.value)||[]).map(de=>({name:Xe(de.name),source:de.name,success_rate:de.success_rate,avg_latency_ms:de.avg_latency_ms,calls:de.calls||0,degraded:!!de.degraded,data_age_hours:de.data_age_hours!=null?de.data_age_hours:null,stale:!!de.stale,last_fetch:de.last_fetch||de.last_success||null}))});function ht(A){return A.degraded?"degraded":A.success_rate==null?"unknown":A.success_rate>=90?"ok":A.success_rate>=60?"warn":"bad"}function xt(A){return A==null?"":A<1?"刚刚":A<24?Math.round(A)+"小时前":Math.floor(A/24)+"天前"}const ft=e.aiUsage||Vue.ref({}),Ze=Vue.computed(()=>{const A=ft.value&&ft.value.by_model||{};return Object.entries(A).map(([de,He])=>({name:de,count:He})).sort((de,He)=>He.count-de.count)}),jt=Vue.computed(()=>Ze.value.reduce((A,de)=>Math.max(A,de.count),0)||1),Nt=Vue.computed(()=>Ze.value.reduce((A,de)=>A+de.count,0)||1),yt=Vue.computed(()=>ut.value.reduce((A,de)=>Math.max(A,de.count),0)||0),ut=Vue.computed(()=>{const A=ft.value&&ft.value.by_day||{},de=[],He=new Date;for(let $e=29;$e>=0;$e--){const ot=new Date(He.getFullYear(),He.getMonth(),He.getDate()-$e),kt=ot.getFullYear()+"-"+String(ot.getMonth()+1).padStart(2,"0")+"-"+String(ot.getDate()).padStart(2,"0");de.push({day:kt,count:A[kt]||0})}return de}),Vt=Vue.computed(()=>ut.value.reduce((A,de)=>Math.max(A,de.count),0)||1),S=Vue.computed(()=>{const A=ft.value&&ft.value.by_day||{},de=new Date,He=de.getFullYear()+"-"+String(de.getMonth()+1).padStart(2,"0")+"-"+String(de.getDate()).padStart(2,"0");return A[He]||0}),me=Vue.computed(()=>{const A=ft.value&&ft.value.by_day||{},de=Object.keys(A).filter(He=>(A[He]||0)>0);return de.length?de[de.length-1]:""});function ke(A){e.analyticsDays&&(e.analyticsDays.value=A),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const Se='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Le='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function We(A){return A?Le:Se}return ie(),{...e,themeHues:d,themeHueNames:m,themeMode:P,themeHue:f,onThemeModeChange:c,setThemeHue:k,hueColor:n,hueName:x,onNavModeChange:i,analyticsMaxViews:Qe,aiModelRank:Ze,aiModelMax:jt,aiDayTrend:ut,aiDayMax:Vt,todayAiCalls:S,lastAiCallDay:me,aiTotal:Nt,aiDayPeak:yt,setAnalyticsDays:ke,viewIcon:We,openApiKeys:h,openApiKeyName:g,openApiKeyRole:C,newOpenApiKey:D,openApiLoading:_,loadOpenApiKeys:he,generateOpenApiKey:we,copyOpenApiKey:Re,revokeOpenApiKey:Ae,healthRows:Ye,healthClass:ht,fmtAge:xt,staleAssetCount:ce,jobQueue:ae,loadJobQueue:R,cancelJob:W,jobStatusText:E,auditLogs:l,auditLoading:v,loadAuditLogs:j,healthLoading:B,healthError:G,healthUpdatedAt:J,freshnessData:Z,healHistory:ne,startupReport:I,sourceHealth:V,refreshHealth:M,statusColor:u,statusLabel:H,sourceOk:dt,dictLoading:oe,dictError:U,dictCategory:y,dictData:r,loadDataDict:q,ncTab:$,ncRules:T,ncHistory:Y,ncChannels:K,ncLoading:Q,ncNewCode:X,ncNewType:ee,ncNewThreshold:be,ncSilence:Pe,ncSilenceMinutes:Me,ncMsg:qe,ncTypeLabel:le,onNcTab:te,loadAlertRules:_e,loadAlertHistory:ze,loadAlertChannels:re,addAlertRule:ge,toggleAlertRule:Te,removeAlertRule:Ne,applySilence:Ke,clearSilence:rt,goSystemSub:p}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                                        <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="detailSplitEnabled ? 96 : 72">
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
                                        <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="detailSplitEnabled ? 96 : 72">
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
                                    <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="detailSplitEnabled ? 96 : 72">
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
                                        <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="detailSplitEnabled ? 96 : 72">
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
                                        <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="detailSplitEnabled ? 96 : 72">
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
                                    <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="detailSplitEnabled ? 96 : 72">
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
                </div>`,setup(){const{ref:e,watch:p,onUnmounted:t}=Vue,d=a("qcState");if(!d)return{};function m(){if(!d.hasMoreAiHistory||!d.loadMoreAiHistory||d.currentPage.value!=="ai"||d.currentSubPage.value!=="history")return;const Q=document.documentElement;Q.scrollTop+window.innerHeight>=Q.scrollHeight-300&&d.loadMoreAiHistory()}window.addEventListener("scroll",m,{passive:!0}),t(()=>window.removeEventListener("scroll",m));const P=e(null),f=e(!1),c=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function k(Q){return!Q||Q.total===0||Q.rate===null||Q.rate===void 0?"--":Q.rate.toFixed(2)+"%"}const n=e(5);function x(Q){n.value=Q}function i(Q,X){if(!Q)return"--";if(Q.available===!1)return"— 数据不可达";const ee=Q["hit_n"+X];return ee===!0?"✓ 命中":ee===!1?"✗ 未中":"– 中性/待验证"}async function h(){f.value=!0;try{const X=await(await fetch("/api/ai/track")).json();P.value=X&&X.success?X.data:null}catch(Q){console.warn("[eval-track] 评估命中率加载失败:",Q),P.value=null}finally{f.value=!1}}p(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(Q){Q==="ai/evaluation-analysis"&&h()},{immediate:!0});const g=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:C,summary:D,trades:_,loading:o,loadError:l,showAddForm:v,addForm:j,addSaving:B,tradeFormVisible:G,tradeForm:J,tradeSaving:ae,portfolioTab:L,equityDays:E,equityLoading:R,equityNote:W,equityHasData:ie,loadPortfolio:Z,addPosition:ne,removePosition:I,openTradeForm:V,submitTrade:z,loadTrades:w,loadEquity:M,fmtSigned:oe,fmtSignedPct:U,signClass:y,riskTab:r,riskLoading:q,riskNote:u,riskHasData:H,riskData:ce,riskMetricList:$,loadRisk:T}=g;p(C,function(Q){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((Q||[]).map(function(X){return{code:X.stock_code,name:X.stock_name||X.stock_code}}))},{deep:!0}),p(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(Q){Q==="ai/portfolio"?(Z(),w(),M(E?E.value:30),typeof T=="function"&&T()):Q==="ai/overview"&&Z()},{immediate:!0});let Y="",K=!1;return p(function(){const Q=d.currentSubPage&&d.currentSubPage.value,X=!!(d.detailSplitEnabled&&d.detailSplitEnabled.value),ee={sub:Q,split:X,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(Q==="history"){const be=d.aiHistoryView&&d.aiHistoryView.value||"date",Pe=be==="date"?d.groupedByDate:be==="month"?d.groupedByMonth:d.aiHistoryByStock,Me=Pe&&Pe.value||{},qe=Object.keys(Me);ee.kind="history",ee.view=be,ee.key=qe.length?qe[0]:"",ee.first=qe.length&&(Me[qe[0]]||[])[0]||null,ee.expandList=be==="date"?d.expandedDates:be==="month"?d.expandedMonths:d.expandedStocks,ee.expandFn=be==="date"?d.toggleDateExpand:be==="month"?d.toggleMonthExpand:d.toggleStockExpand}else if(Q==="chat_history"){const be=d.chatHistoryView&&d.chatHistoryView.value||"date",Pe=be==="date"?d.chatGroupedByDate:be==="month"?d.chatGroupedByMonth:d.chatGroupedByStock,Me=Pe&&Pe.value||{},qe=Object.keys(Me);ee.kind="chat",ee.view=be,ee.key=qe.length?qe[0]:"",ee.first=qe.length&&(Me[qe[0]]||[])[0]||null,ee.expandList=be==="date"?d.expandedChatDates:be==="month"?d.expandedChatMonths:d.expandedChatStocks,ee.expandFn=be==="date"?d.toggleChatDateExpand:be==="month"?d.toggleChatMonthExpand:d.toggleChatStockExpand}return ee},function(Q){if(!Q.split||!Q.first||!Q.kind)return;const X=Q.sub!==Y,ee=d.stockDetail&&d.stockDetail.value,be=!!(ee&&ee.stock);if(!X&&be||K)return;Y=Q.sub,K=!0;try{Q.key&&Q.expandList&&Q.expandFn&&Q.expandList.value&&Q.expandList.value.indexOf(Q.key)<0&&Q.expandFn(Q.key)}catch{}const Pe=Q.kind==="history"?d.viewAiResult(Q.first):d.viewChatSession(Q.first);Pe&&typeof Pe.finally=="function"?Pe.finally(function(){K=!1}):K=!1},{immediate:!0}),{...d,trackData:P,trackLoading:f,trackWindows:c,fmtTrackRate:k,loadTrack:h,trackWindow:n,setTrackWindow:x,trackHitText:i,positions:C,summary:D,trades:_,loading:o,loadError:l,showAddForm:v,addForm:j,addSaving:B,tradeFormVisible:G,tradeForm:J,tradeSaving:ae,portfolioTab:L,equityDays:E,equityLoading:R,equityNote:W,equityHasData:ie,loadPortfolio:Z,addPosition:ne,removePosition:I,openTradeForm:V,submitTrade:z,loadTrades:w,loadEquity:M,fmtSigned:oe,fmtSignedPct:U,signClass:y,riskTab:r,riskLoading:q,riskNote:u,riskHasData:H,riskData:ce,riskMetricList:$,loadRisk:T}}}})();(function(){const{ref:a,computed:e,watch:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const d=t("qcState"),m=Vue.ref(!1),P=Vue.ref(!1);let f=0;if(!d)return{};const c=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function k(b){c.value=b;try{localStorage.setItem("quant_strategy_mode",b)}catch{}d.currentSubPage.value="strategy-manage"}const n=a([]),x=a(!1),i=a(!1),h=a(""),g=a(null),C=a(!1),D=a(!1);async function _(){const b=++f;x.value=!0,i.value=!1;try{const s=await fetch("/api/market/reviews?limit=30",{headers:A()}).then(O=>O.json());if(b!==f)return;s&&s.success?n.value=Array.isArray(s.data)?s.data:[]:i.value=!0}catch(s){console.error("[market-review] 复盘列表加载失败:",s),i.value=!0}finally{b===f&&(x.value=!1)}}function o(b){h.value=b,G(b)}function l(b){h.value===b?B():o(b)}function v(b){return b==null||isNaN(Number(b))?"—":(Number(b)>=0?"+":"")+Number(b).toFixed(2)+"%"}function j(b){return b==null||isNaN(Number(b))?"—":Number(b).toFixed(2)}function B(){h.value="",g.value=null,D.value=!1}async function G(b){const s=++f;C.value=!0,D.value=!1,g.value=null;try{const O=b?"/api/market/review?date="+encodeURIComponent(b):"/api/market/review",se=await fetch(O,{headers:A()}).then(xe=>xe.json());if(s!==f)return;se&&se.success?g.value=se.data:D.value=!0}catch(O){console.error("[market-review] 复盘详情加载失败:",O),D.value=!0}finally{s===f&&(C.value=!1)}}function J(b){return b>0?"up":b<0?"down":"flat"}function ae(b){return b==null||isNaN(Number(b))?"—":(b>0?"+":"")+Number(b).toFixed(2)+"%"}function L(b){const s={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(b||{}).map(function(O){const se=O[0],xe=O[1],Ee=!xe||xe==="unavailable"||xe==="数据不可达";return{label:s[se]||se,value:Ee?"数据不可达":xe,unavailable:Ee}})}const E=a([]),R=a(!1),W=a(!1),ie=a(""),Z=a(""),ne=a(""),I=a({}),V=a(!1),z=a(""),w=a(""),M=a([]),oe=a([]),U=a(""),y=a(""),r=a(!0),q=a(!0),u=a("20:00"),H=a("default"),ce=a(!1),$=a(""),T=e(function(){return E.value.find(function(b){return b.id===ne.value})||null});async function Y(b,s){s=s||{},s.headers=Object.assign({},s.headers||{});const O=localStorage.getItem("quant_token")||"";return O&&(s.headers.Authorization="Bearer "+O),fetch(b,s)}async function K(){const b=++f;R.value=!0,W.value=!1,ie.value="",Z.value="";try{const s=await Y("/api/strategies").then(function(se){return se.json()});if(b!==f)return;let O=null;Array.isArray(s)?O=s:s&&Array.isArray(s.strategies)?(O=s.strategies,s.warn&&(Z.value=String(s.warn))):(W.value=!0,ie.value=s&&s.detail?String(s.detail):"策略列表加载失败（接口返回异常）"),O!==null&&(E.value=O,E.value.length&&!ne.value&&(ne.value=E.value[0].id,Q()))}catch(s){console.error("[research] 策略列表加载失败:",s),W.value=!0,ie.value="策略列表加载失败: "+(s&&s.message||"网络错误")}finally{b===f&&(R.value=!1)}}function Q(){const b=T.value;b&&(I.value={},b.schema.forEach(function(s){I.value[s.key]=s.default}),w.value="",te(),X(),Me())}async function X(){if(!ne.value){oe.value=[];return}try{const b=await Y("/api/strategies/"+ne.value+"/profiles").then(function(s){return s.json()});oe.value=b&&b.data&&b.data.profiles||[],U.value=""}catch(b){console.error("[research] 方案列表加载失败:",b),oe.value=[]}}async function ee(){m.value=!0;const b=(y.value||"").trim();if(!b){window._core&&window._core.showToast("请输入方案名称");return}try{const s=await Y("/api/strategies/"+ne.value+"/profiles",{method:"POST",body:JSON.stringify({name:b,params:I.value})}).then(function(O){return O.json()});if(s&&s.detail){window._core&&window._core.showToast(String(s.detail));return}y.value="",await X(),window._core&&window._core.showToast("方案已保存")}catch(s){console.error("[research] 方案保存失败:",s),window._core&&window._core.showToast("方案保存失败")}}function be(){const b=oe.value.find(function(s){return s.id===U.value});b&&(Object.keys(b.params||{}).forEach(function(s){I.value[s]=b.params[s]}),window._core&&window._core.showToast("已应用方案: "+b.name))}async function Pe(){if(U.value)try{await Y("/api/strategies/"+ne.value+"/profiles/"+U.value,{method:"DELETE"}).then(function(b){return b.json()}),await X(),window._core&&window._core.showToast("方案已删除")}catch(b){console.error("[research] 方案删除失败:",b)}}async function Me(){try{const b=await Y("/api/strategies/governance").then(function(se){return se.json()}),O=(b&&b.data&&b.data.strategies||{})[ne.value]||{};r.value=O.enabled!==!1,u.value=O.schedule||"20:00",H.value=O.universe==="all"?"all":"default",q.value=O.show_in_calendar!==!1,$.value=O.last_holdings||""}catch(b){console.error("[research] 纳管状态加载失败:",b)}}async function qe(){try{await Y("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const b={};return b[ne.value]={enabled:r.value,schedule:u.value,universe:H.value,show_in_calendar:q.value},b}()})}).then(function(b){return b.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(b){console.error("[research] 纳管更新失败:",b)}}async function le(){if(ne.value){ce.value=!0;try{const b=await Y("/api/strategies/"+ne.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:z.value||void 0})}).then(function(s){return s.json()});if(b&&b.detail){window._core&&window._core.showToast(String(b.detail));return}window._core&&window._core.showToast("持仓已生成"),await Me()}catch(b){console.error("[research] run-once 失败:",b),window._core&&window._core.showToast("持仓生成失败")}finally{ce.value=!1}}}function _e(){$.value&&window.open($.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function ze(){const b=T.value;if(!b)return;const s=(y.value||"").trim()||b.name+"-副本";re(s,Object.assign({},I.value)),window._core&&window._core.showToast("已复制为副本方案: "+s)}async function re(b,s){try{await Y("/api/strategies/"+ne.value+"/profiles",{method:"POST",body:JSON.stringify({name:b,params:s})}).then(function(O){return O.json()}),await X()}catch(O){console.error("[research] 副本保存失败:",O)}}async function te(){const b=++f;if(ne.value)try{const s=await Y("/api/strategies/"+ne.value+"/runs?limit=5").then(function(O){return O.json()});if(b!==f)return;M.value=Array.isArray(s)?s:[]}catch{M.value=[]}}async function ge(){if(ne.value){V.value=!0;try{const b=await Y("/api/strategies/"+ne.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:I.value,as_of:z.value||void 0})}).then(function(s){return s.json()});b&&b.status==="success"?te():alert("运行失败: "+(b.detail||JSON.stringify(b)))}catch(b){console.error("[research] 策略运行失败:",b),alert("运行失败: "+b.message)}finally{V.value=!1}}}async function Te(){if(ne.value)try{const b=Object.keys(I.value).map(function(O){return encodeURIComponent(O)+"="+encodeURIComponent(I.value[O])}).join("&"),s=await Y("/api/strategies/"+ne.value+"/ptrade-code?"+b).then(function(O){return O.json()});s&&s.code?w.value=s.code:alert("导出失败: "+(s.detail||JSON.stringify(s)))}catch(b){console.error("[research] PTrade 导出失败:",b),alert("导出失败: "+b.message)}}function Ne(){if(!w.value)return;const b=document.createElement("textarea");b.value=w.value,document.body.appendChild(b),b.select();try{document.execCommand("copy")}catch{}document.body.removeChild(b)}p(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(b){b==="research/research-overview"&&(K(),_(),de(),aa()),(b==="research/market-review"||b==="shortterm/market-review")&&!h.value&&_(),b==="research/quant-research"&&K(),b==="research/backtest-history"&&De()},{immediate:!0});const Ke=a("mom20"),rt=a(!1),dt=a(!1),Qe=a(null),Et=a(null),he=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],we=a('{"top_n":[10,20,30]}'),Re=a(null),Ae=a(""),Ge=a(!1),Xe=a(null);async function Ye(){if(!ne.value){ElementPlus.ElMessage.warning("请先选择策略");return}let b;try{b=JSON.parse(we.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!b||Object.keys(b).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Ge.value=!0,Re.value=null,Ae.value="";try{const s=await fetch("/api/strategies/"+ne.value+"/sweep",{method:"POST",headers:A(),body:JSON.stringify({param_grid:b})}).then(function(O){return O.json()});s&&Array.isArray(s.results)?(Re.value=s.results,Ae.value="完成 "+s.count+" 组"+(s.data_degraded?" (数据不可达, 结果降级)":""),Xe.value=s.param_stability||null):Ae.value=s&&s.detail||"扫描失败"}catch(s){console.error("[sweep]",s),Ae.value="扫描失败: "+s.message}finally{Ge.value=!1}}async function ht(){const b=++f;rt.value=!0;try{const s=await Y("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ne.value||"multi_factor",factor_key:Ke.value,params:I.value||{}})}).then(function(se){return se.json()}),O=s&&s.report?s.report.n1||{}:{};Qe.value=O}catch(s){console.error("[research] 因子IC分析失败:",s),alert("因子 IC 分析失败: "+s.message)}finally{b===f&&(rt.value=!1)}}async function xt(){const b=++f;dt.value=!0;try{const s=await Y("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ne.value||"multi_factor",factor_key:Ke.value,params:I.value||{}})}).then(function(O){return O.json()});s&&s.layers?Et.value=s:alert("分层回测: "+(s.message||"无数据"))}catch(s){console.error("[research] 分层回测失败:",s),alert("分层回测失败: "+s.message)}finally{b===f&&(dt.value=!1)}}const ft=a(null),Ze=a(!1);async function jt(){const b=++f;Ze.value=!0,ft.value=null;try{const s=await Y("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ne.value||"multi_factor",factor_key:Ke.value,params:I.value||{}})}).then(function(O){return O.json()});s&&s.detail?ft.value=s.detail:alert("因子详情: "+(s.message||"无数据"))}catch(s){console.error("[research] 因子详情失败:",s),alert("因子详情失败: "+s.message)}finally{b===f&&(Ze.value=!1)}}const Nt=a([]),yt=a(null),ut=a(null),Vt=a(null),S=a(""),me=a(!1),ke=a(!1),Se=a(""),Le=a(""),We=a("");function A(){const b=localStorage.getItem("quant_token")||"";return b?{Authorization:"Bearer "+b,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function de(){const b=++f;try{const s=await fetch("/api/strategies/variants",{headers:A()}).then(function(O){return O.json()});if(b!==f)return;Nt.value=s&&s.data&&s.data.variants||[]}catch(s){console.error("[i3a] 加载 variants 失败:",s)}}async function He(){if(!ne.value){Se.value="请先在量化研究选择母本策略";return}ke.value=!0,Se.value="";try{const b=await fetch("/api/strategies/"+ne.value+"/clone",{method:"POST",headers:A(),body:JSON.stringify({name:(y.value||"").trim()||void 0,params:Object.assign({},I.value)})}).then(function(O){return O.json()});if(b&&b.detail){Se.value=String(b.detail);return}const s=b&&b.data;s&&s.sid&&(yt.value=s.sid,Se.value="已复制为新策略: "+s.name,await de(),await ot(s.sid))}catch(b){console.error("[i3a] 复制失败:",b),Se.value="复制失败: "+b.message}finally{ke.value=!1}}async function $e(b){yt.value=b,Se.value="",S.value="",await ot(b)}async function ot(b){try{const s=await fetch("/api/strategies/"+b+"/selection-spec",{headers:A()}).then(function(O){return O.json()});s&&s.data&&s.data.spec&&(ut.value=Object.assign({},s.data.spec),Vt.value=s.data.fields,Le.value=(s.data.spec.industry_scope||[]).join(","),We.value=(s.data.spec.market_cap_range||[]).join(","))}catch(s){console.error("[i3a] 加载 spec 失败:",s)}}async function kt(){if(P.value=!0,!(!yt.value||!ut.value))try{ut.value.industry_scope=Le.value?Le.value.split(/[,，]/).map(function(s){return s.trim()}).filter(Boolean):[],ut.value.market_cap_range=We.value?We.value.split(/[,，]/).map(Number).filter(function(s){return!isNaN(s)}):[];const b=await fetch("/api/strategies/"+yt.value+"/selection-spec",{method:"PUT",headers:A(),body:JSON.stringify({spec:ut.value})}).then(function(s){return s.json()});b&&b.data&&b.data.spec&&(ut.value=b.data.spec,Se.value="SelectionSpec 已保存")}catch(b){console.error("[i3a] 保存 spec 失败:",b),Se.value="保存失败"}}async function Ft(){if(!yt.value){Se.value="请先选择/创建微调策略";return}ke.value=!0,Se.value="";try{const b=await fetch("/api/strategies/"+yt.value+"/run-once",{method:"POST",headers:A(),body:"{}"}).then(function(s){return s.json()});Se.value=b&&b.detail?String(b.detail):"持仓已生成: "+(b&&b.data&&b.data.symbols||0)+" 只"}catch(b){console.error("[i3a] run-once 失败:",b),Se.value="生成持仓失败"}finally{ke.value=!1}}async function Mt(){if(!yt.value){Se.value="请先选择/创建微调策略";return}ut.value||await ot(yt.value),me.value=!0,Se.value="";try{const b=await fetch("/api/strategies/"+yt.value+"/ai-trade-code",{method:"POST",headers:A(),body:JSON.stringify({spec:ut.value})}).then(function(s){return s.json()});if(b&&b.detail){Se.value=String(b.detail);return}b&&b.data&&(S.value=b.data.code||"",b.data.api_errors&&b.data.api_errors.length?Se.value="生成成功(含 API 校验告警 "+b.data.api_errors.length+" 条)":Se.value="AI 交易码已生成, 已通过矩阵内校验")}catch(b){console.error("[i3a] AI 交易码失败:",b),Se.value="AI 生成失败: "+b.message}finally{me.value=!1}}function St(){if(S.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(S.value).then(function(){Se.value="代码已复制"});else{const b=document.createElement("textarea");b.value=S.value,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b),Se.value="代码已复制"}}const ct=a(""),Rt=a(""),Ot=a([]),_t=a(""),Yt=a(""),vt=a(""),bt=a(null),Bt=a(!1),gt=a(!1),at=a(!1);function Ht(){const b=localStorage.getItem("quant_token")||"";return b?{Authorization:"Bearer "+b,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function aa(){const b=++f;try{const s=await fetch("/api/strategies/custom",{headers:Ht()}).then(function(O){return O.json()});if(b!==f)return;Ot.value=s&&s.data&&s.data.customs||[]}catch(s){console.error("[i3b] 加载自定义策略失败:",s)}}async function ua(){if(!Rt.value.trim()){vt.value="请描述策略思路";return}Bt.value=!0,vt.value="";try{const b=await fetch("/api/strategies/custom",{method:"POST",headers:Ht(),body:JSON.stringify({name:ct.value.trim()||"自定义策略",prompt:Rt.value})}).then(function(s){return s.json()});if(b&&b.detail){vt.value=String(b.detail);return}b&&b.data&&(Yt.value=b.data.code||"",vt.value="AI 代写成功: "+b.data.sid+(b.data.api_errors&&b.data.api_errors.length?" (API 告警 "+b.data.api_errors.length+" 条)":" (校验通过)"),await aa())}catch(b){console.error("[i3b] AI 代写失败:",b),vt.value="AI 代写失败: "+b.message}finally{Bt.value=!1}}async function na(){if(_t.value)try{const b=await fetch("/api/strategies/custom/"+_t.value+"/code",{headers:Ht()}).then(function(s){return s.json()});b&&b.data&&(Yt.value=b.data.code||"",vt.value="")}catch(b){console.error("[i3b] 读取代码失败:",b)}}async function Xt(){if(!_t.value){vt.value="请先选择自定义策略";return}gt.value=!0,vt.value="";try{const b=await fetch("/api/strategies/custom/"+_t.value+"/backtest",{method:"POST",headers:Ht(),body:"{}"}).then(function(s){return s.json()});if(b&&b.detail){vt.value=String(b.detail);return}b&&b.data&&(bt.value=b.data,vt.value="回测完成")}catch(b){console.error("[i3b] 回测失败:",b),vt.value="回测失败: "+b.message}finally{gt.value=!1}}async function va(){if(!_t.value){vt.value="请先选择自定义策略";return}at.value=!0,vt.value="";try{const b=await fetch("/api/strategies/custom/"+_t.value+"/ai-optimize",{method:"POST",headers:Ht(),body:JSON.stringify({backtest:bt.value})}).then(function(s){return s.json()});if(b&&b.detail){vt.value=String(b.detail);return}b&&b.data&&(Yt.value=b.data.code||"",vt.value="AI 优化完成"+(b.data.api_errors&&b.data.api_errors.length?" (API 告警 "+b.data.api_errors.length+" 条)":" (校验通过)"))}catch(b){console.error("[i3b] AI 优化失败:",b),vt.value="AI 优化失败: "+b.message}finally{at.value=!1}}function ma(){if(Yt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Yt.value).then(function(){vt.value="代码已复制"});else{const b=document.createElement("textarea");b.value=Yt.value,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b),vt.value="代码已复制"}}const Qt=Vue.ref([]),N=Vue.ref(!1),ye=Vue.ref(!1),Oe=Vue.ref(30);async function De(){const b=++f;N.value=!0,ye.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},O=typeof s.authHeaders=="function"?s.authHeaders():{},se=await fetch("/api/backtest/history?days="+Oe.value,{headers:O}).then(function(xe){return xe.json()});if(b!==f)return;Qt.value=se&&se.data||[]}catch(s){console.error("[backtest] 回测历史加载失败:",s),ye.value=!0}finally{b===f&&(N.value=!1)}}const st=Vue.ref([]),et=Vue.ref(!1),zt=Vue.ref(!1),Kt=Vue.ref(""),Tt=Vue.ref([]),pa=Vue.ref(""),sa=Vue.ref([]),ya=Vue.ref(!1),Zt=Vue.ref(!1),Pa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function fa(b){return Pa[b]||b||"—"}function Ra(b){d&&d.navigateTo&&d.navigateTo("shortterm",b)}function za(){d.currentSubPage.value="research-history",ga()}async function ga(){const b=++f;et.value=!0,zt.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},O=typeof s.authHeaders=="function"?s.authHeaders():{},se=Kt.value?"?type="+encodeURIComponent(Kt.value):"",xe=await fetch("/api/strategies/research-history"+se,{headers:O}).then(function(Ee){return Ee.json()});if(b!==f)return;st.value=xe&&xe.items||[]}catch(s){console.error("[research-history] 加载失败:",s),zt.value=!0}finally{b===f&&(et.value=!1)}}async function Wt(){const b=++f;Zt.value=!0;try{const s=window.__quantModules&&window.__quantModules.core||{},O=typeof s.authHeaders=="function"?s.authHeaders():{},se=Kt.value?"?type="+encodeURIComponent(Kt.value):"",xe=await fetch("/api/strategies/research-history/export"+se,{headers:O});if(!xe.ok)throw new Error("HTTP "+xe.status);const Ee=await xe.blob(),mt=URL.createObjectURL(Ee),Je=document.createElement("a");Je.href=mt,Je.download="research_history.csv",document.body.appendChild(Je),Je.click(),document.body.removeChild(Je),URL.revokeObjectURL(mt)}catch(s){console.error("[research-history] 导出失败:",s)}finally{b===f&&(Zt.value=!1)}}function ba(b){const s=Tt.value.indexOf(b);s>=0?Tt.value.splice(s,1):Tt.value.length<10&&Tt.value.push(b)}function Jt(b){pa.value=pa.value===b?"":b}async function wa(){const b=++f,s=Tt.value;if(!(s.length<2)){ya.value=!0;try{const O=window.__quantModules&&window.__quantModules.core||{},se=typeof O.authHeaders=="function"?O.authHeaders():{},xe=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},se),body:JSON.stringify({ids:s})}).then(function(Ee){return Ee.json()});sa.value=xe&&xe.items||[]}catch(O){console.error("[research-history] 对比失败:",O)}finally{b===f&&(ya.value=!1)}}}async function ka(b){try{const s=window.__quantModules&&window.__quantModules.core||{},O=typeof s.authHeaders=="function"?s.authHeaders():{},se=await fetch("/api/strategies/research-history/"+b,{method:"DELETE",headers:O}).then(function(xe){return xe.json()});if(se&&se.deleted){st.value=st.value.filter(function(Ee){return Ee.id!==b});const xe=Tt.value.indexOf(b);xe>=0&&Tt.value.splice(xe,1)}}catch(s){console.error("[research-history] 删除失败:",s)}}return{...d,strategyManageMode:c,openStrategyManage:k,btHistory:Qt,btHistoryLoading:N,btHistoryError:ye,btHistoryDays:Oe,loadBtHistory:De,researchHistory:st,researchHistoryLoading:et,researchHistoryError:zt,researchHistoryType:Kt,researchHistorySelected:Tt,researchDetailId:pa,researchCompareRows:sa,researchCompareLoading:ya,researchTypeLabel:fa,goShortterm:Ra,openResearchHistory:za,loadResearchHistory:ga,researchExportLoading:Zt,exportResearchHistory:Wt,toggleResearchSelect:ba,toggleResearchDetail:Jt,runResearchCompare:wa,deleteResearchHistory:ka,marketReviews:n,marketReviewLoading:x,marketReviewError:i,selectedReviewDate:h,marketReviewDetail:g,marketReviewDetailLoading:C,marketReviewDetailError:D,loadMarketReviews:_,openMarketReview:o,toggleMarketReviewDate:l,backToMarketReviewList:B,loadMarketReviewDetail:G,marketReviewChgClass:J,marketReviewChgText:ae,marketReviewSrcEntries:L,fmtPct:v,fmtEmotion:j,strategies:E,strategiesLoading:R,strategiesError:W,strategiesErrorText:ie,strategiesWarn:Z,activeStrategyId:ne,activeStrategy:T,paramValues:I,strategyRunning:V,ptradeCode:w,strategyRuns:M,savingProfile:m,variantSaving:P,loadStrategies:K,onStrategyChange:Q,runActiveStrategy:ge,exportActivePtradeCode:Te,copyPtradeCode:Ne,profiles:oe,profileSelect:U,profileName:y,loadProfiles:X,saveProfile:ee,applyProfile:be,deleteProfile:Pe,govEnabled:r,govSchedule:u,govUniverse:H,govRunning:ce,lastHoldings:$,loadGov:Me,updateGov:qe,runOnceActive:le,openLastHoldings:_e,cloneStrategy:ze,govShowCalendar:q,factorKey:Ke,factorIcLoading:rt,factorLayerLoading:dt,factorIcReport:Qe,factorLayerResult:Et,factorOptions:he,runFactorIc:ht,runFactorLayer:xt,factorDetail:ft,factorDetailLoading:Ze,runFactorDetail:jt,variants:Nt,variantSelected:yt,variantSpec:ut,specFields:Vt,aiCode:S,aiCodeLoading:me,variantBusy:ke,variantMsg:Se,loadVariants:de,cloneNewStrategy:He,selectVariant:$e,loadVariantSpec:ot,saveVariantSpec:kt,runVariantOnce:Ft,genVariantAiCode:Mt,copyVariantCode:St,customName:ct,customPrompt:Rt,customs:Ot,customSelected:_t,customCode:Yt,customMsg:vt,customBtResult:bt,customGenLoading:Bt,customBtLoading:gt,customOptLoading:at,loadCustoms:aa,genCustomCode:ua,loadCustomCode:na,runCustomBacktest:Xt,runCustomOptimize:va,copyCustomCode:ma,sweepGrid:we,sweepResult:Re,sweepMessage:Ae,sweepLoading:Ge,sweepStability:Xe,runSweep:Ye}}}})();(function(){const{inject:a,ref:e,onMounted:p,computed:t,nextTick:d}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const m=a("qcState");if(!m)return{};const P=m.currentPage,f=m.currentSubPage,c=e(""),k=e(null),n=e(!1),x=e(!1),i=e("数据加载失败"),h=e("请检查服务后重试"),g=e(null),C=e(null),D=e(!1),_=e(!1),o=e("数据加载失败"),l=e("请检查服务后重试"),v=e(null),j=e(1),B=50,G=t(function(){const N=C.value||[];if(N.length<=200)return N;const ye=(j.value-1)*B;return N.slice(ye,ye+B)}),J=e(null),ae=e(!1),L=e(!1),E=e("数据加载失败"),R=e("请检查服务后重试"),W=e([]),ie=e(!1);async function Z(){ie.value=!0;try{const N=await ze("/api/shortterm/dates/summary",!1);N&&N.success&&(W.value=N.dates||[])}catch{W.value=[]}finally{ie.value=!1}}function ne(N){N!==c.value&&(c.value=N,ot(!0))}const I=e("行业资金流"),V=e("今日"),z=e(""),w=e(null),M=e(1),oe=e(!1),U=e(!1),y=e("数据加载失败"),r=e("请检查服务后重试"),q=e(""),u=e(null),H=e(!1),ce=e(null),$=e(!1),T=e(!1),Y=e(""),K=e(""),Q=e(!1);function X(){const N=localStorage.getItem("quant_token")||"";return N?{Authorization:"Bearer "+N,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const ee={},be=[],Pe=50,Me=60*1e3;let qe=0,le=0,_e=0;function ze(N,ye){const Oe=Date.now(),De=ee[N];return!ye&&De&&Oe-De.ts<Me?Promise.resolve(De.data):fetch(N,{headers:X()}).then(function(st){return st.json()}).then(function(st){if(ee[N]||be.push(N),ee[N]={ts:Date.now(),data:st},be.length>Pe){const et=be.shift();delete ee[et]}return st})}async function re(N){const ye=++qe;n.value=!0,x.value=!1;try{const Oe="/api/shortterm/pools"+(c.value?"?date="+c.value:""),De=await ze(Oe,N);if(ye!==qe)return;De&&De.success?(k.value=De,d(de)):De&&De.detail?(x.value=!0,i.value=String(De.detail),h.value="请先登录后再查看"):(x.value=!0,i.value="数据加载失败",h.value="请检查服务后重试")}catch{if(ye!==qe)return;x.value=!0,i.value="数据加载失败",h.value="请检查服务后重试"}finally{ye===qe&&(n.value=!1)}}async function te(N){const ye=++qe;D.value=!0,_.value=!1;try{const Oe="/api/shortterm/lhb"+(c.value?"?date="+c.value:""),De=await ze(Oe,N);if(ye!==qe)return;De&&De.success?(C.value=Array.isArray(De.rows)?De.rows:null,v.value=De.available===!1&&De.reason||null,j.value=1):De&&De.detail?(_.value=!0,o.value=String(De.detail),l.value="请先登录后再查看"):(_.value=!0,o.value="数据加载失败",l.value="请检查服务后重试")}catch{if(ye!==qe)return;_.value=!0,o.value="数据加载失败",l.value="请检查服务后重试"}finally{ye===qe&&(D.value=!1)}}const ge=t(function(){const N=k.value&&k.value.ladder&&k.value.ladder.tiers;return!N||!Object.keys(N).length?"—":Object.keys(N).sort(function(ye,Oe){return ye-Oe}).map(function(ye){return ye+"板:"+N[ye]}).join(" ")}),Te=t(function(){const N=k.value&&k.value.zt||[];return g.value?N.filter(function(ye){return ye.boards===g.value}):N});function Ne(){g.value=null}const Ke=t(function(){const N=J.value&&J.value.emotion&&J.value.emotion.money_effect;return!N||!N.available?"—":N.source==="settled"?"定稿记录":N.source==="realtime"?N.partial?"实时(样本不全)":"实时":"—"}),rt=t(function(){const N=J.value&&J.value.emotion&&J.value.emotion.promotion&&J.value.emotion.promotion.tiers&&J.value.emotion.promotion.tiers["1进2"];return N?N.rate:null}),dt=t(function(){const N=J.value&&J.value.emotion&&J.value.emotion.sentiment_cycle;return N&&N.available&&N.current_score!=null?N.current_score.toFixed(2):"—"}),Qe=t(function(){const N=J.value&&J.value.emotion&&J.value.emotion.sentiment_cycle;return!N||!N.available?"—":(N.trend||"—")+(N.day_n!=null?" · 距低谷"+N.day_n+"天":"")});t(function(){const N=J.value&&J.value.emotion;if(!N)return"";const ye=[];for(const Oe of["money_effect","promotion","consec_premium","sentiment_cycle"]){const De=N[Oe];De&&De.available===!1&&De.reason&&ye.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return ye.join("；")}),t(function(){const N=J.value&&J.value.facts;if(!N)return"";const ye=[];for(const Oe of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const De=N[Oe];De&&De.available===!1&&De.reason&&ye.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return ye.join("；")});function Et(N){return N==null||isNaN(N)?"—":(N*100).toFixed(0)+"%"}function he(N,ye){return N==null?"—":(typeof N=="number"?Math.round(N*100)/100:N)+(ye||"")}function we(N){return"tag-chip mr-4"}function Re(N){return N==null?"":N>0?"is-rise":N<0?"is-fall":""}function Ae(N){return N==="机构"?"is-institution":N==="游资"?"is-hotmoney":N==="主力"?"is-main":""}const Ge=t(function(){const N=J.value&&J.value.session_status;if(!N)return"—";const ye=J.value.date;return ye===N.latest_session&&N.settled?"已收盘":ye===N.today&&N.is_trade_day&&!N.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Xe=t(function(){const N=J.value&&J.value.session_status;if(!N)return"";const ye=J.value.date;return ye===N.latest_session&&N.settled?"is-institution":ye===N.today&&N.is_trade_day&&!N.settled?"is-main":""});function Ye(N){N&&N.ts_code&&m&&m.showStockDetail&&m.showStockDetail(N.ts_code)}const ht=t(function(){return(C.value||[]).filter(function(N){return(N.tags||[]).indexOf("机构")>=0}).reduce(function(N,ye){return N+(ye.net_buy||0)},0)}),xt=t(function(){return(C.value||[]).filter(function(N){return(N.tags||[]).indexOf("游资")>=0}).length}),ft=t(function(){const N=(w.value||[]).filter(function(ye){return ye.main_net_inflow!=null});return N.length?N.reduce(function(ye,Oe){return ye.main_net_inflow>=Oe.main_net_inflow?ye:Oe}):null}),Ze=t(function(){const N=ft.value;return N?N.name:"—"}),jt=t(function(){const N=ft.value;return N?N.main_net_inflow:null}),Nt=t(function(){return q.value||"东财"}),yt=t(function(){const N=(z.value||"").trim(),ye=w.value||[];return N?ye.filter(function(Oe){return Oe.name&&String(Oe.name).indexOf(N)>=0}):ye});function ut(N){z.value=N||"",m&&m.currentSubPage&&(m.currentSubPage.value="sector")}const Vt=t(function(){const N=yt.value;if(N.length<=200)return N;const ye=(M.value-1)*B;return N.slice(ye,ye+B)}),S=["09:25","09:35","10:00","11:30","14:00","15:00"],me=t(function(){const N={};return(ce.value||[]).forEach(function(ye){N[ye.slot]=!0}),N});function ke(N){return me.value[N]?"is-done":N===Se.value?"is-current":"is-empty"}const Se=t(function(){const N=new Date,ye=(N.getHours()<10?"0":"")+N.getHours(),Oe=(N.getMinutes()<10?"0":"")+N.getMinutes(),De=ye+":"+Oe;for(var st=0;st<S.length;st++)if(De===S[st])return S[st];for(var et=0;et<S.length-1;et++){var zt=S[et],Kt=new Date;Kt.setHours(Number(zt.split(":")[0]),Number(zt.split(":")[1]),0,0);var Tt=new Date(Kt.getTime()+8*6e4);if(N>=Kt&&N<=Tt)return zt}return""}),Le=t(function(){const N=new Date,ye=Se.value;if(ye)return"当前处于快照窗口 "+ye+" (前后 8 分钟) — 可采集";const Oe=N.getHours(),De=N.getMinutes();let st="";for(let et=0;et<S.length;et++){const zt=S[et].split(":");if(Number(zt[0])>Oe||Number(zt[0])===Oe&&Number(zt[1])>De){st=S[et];break}}return st?"下一快照时点 "+st+" — 非窗口期不可采集":"今日快照时点已全部结束"}),We=e(""),A=e("info");function de(){const N=k.value&&k.value.ladder&&k.value.ladder.tiers;if(!N||!Object.keys(N).length)return;const ye=window.__quantModules&&window.__quantModules.charts;if(!ye||!ye.renderSimpleChartTo)return;const Oe=g.value,De=ye.renderSimpleChartTo("shorttermLadderChart",function(){const st=Object.keys(N).sort(function(et,zt){return Number(et)-Number(zt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:st.map(function(et){return et+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(et){return Oe&&Number(st[et.dataIndex])===Oe?"var(--color-accent)":"var(--chart-split)"}},data:st.map(function(et){return N[et]})}]}},{key:"shortterm-ladder"});De&&De.off&&(De.off("click"),De.on("click",function(st){if(!st||!st.name)return;const et=parseInt(st.name,10);isNaN(et)||(g.value=g.value===et?null:et)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(de);function He(N){if(N==null)return"—";const ye=Math.abs(N);return ye>=1e8?(N/1e8).toFixed(2)+"亿":ye>=1e4?(N/1e4).toFixed(0)+"万":N.toFixed(0)}function $e(N){return N==null?"—":(N>=0?"+":"")+N.toFixed(2)+"%"}async function ot(N){const ye=++le;ae.value=!0,L.value=!1;try{const Oe="/api/shortterm/overview"+(c.value?"?date="+c.value:""),De=await ze(Oe,N);if(ye!==le)return;De&&De.success?J.value=De:De&&De.detail?(L.value=!0,E.value=String(De.detail),R.value="请先登录后再查看"):(L.value=!0,E.value="数据加载失败",R.value="请检查服务后重试")}catch{if(ye!==le)return;L.value=!0,E.value="数据加载失败",R.value="请检查服务后重试"}finally{ye===le&&(ae.value=!1)}}async function kt(N){const ye=++qe;oe.value=!0,U.value=!1;try{const Oe="/api/shortterm/sector-flow?indicator="+encodeURIComponent(V.value)+"&sector_type="+encodeURIComponent(I.value),De=await ze(Oe,N);if(ye!==qe)return;De&&De.success&&De.available?(w.value=De.rows||[],q.value=De.source||(De.note?"同花顺":"东财"),M.value=1):De&&De.reason?(U.value=!0,y.value="数据加载失败",r.value=String(De.reason).replace(/^\[[^\]]*\]\s*/,"")):De&&De.detail?(U.value=!0,y.value=String(De.detail),r.value="请先登录后再查看"):(U.value=!0,y.value="数据加载失败",r.value="请检查服务后重试")}catch{if(ye!==qe)return;U.value=!0,y.value="数据加载失败",r.value="请检查服务后重试"}finally{ye===qe&&(oe.value=!1)}}async function Ft(N){const ye=++_e;try{const Oe="/api/shortterm/review"+(c.value?"?date="+c.value:""),De=await ze(Oe,N);if(ye!==_e)return;De&&De.success&&(u.value=De.review||null)}catch{}}async function Mt(){H.value=!0;try{const N="/api/shortterm/review"+(c.value?"?date="+c.value:""),ye=await fetch(N,{method:"POST",headers:X()}).then(function(Oe){return Oe.json()});ye&&ye.success&&(u.value=ye,ee[N]={ts:Date.now(),data:ye})}catch{}finally{H.value=!1}}async function St(){const N=Y.value.trim();if(N){Q.value=!0,K.value="";try{const Oe=await fetch("/api/shortterm/review/chat",{method:"POST",headers:X(),body:JSON.stringify({date:overviewDate.value,question:N})}).then(function(De){return De.json()});K.value=Oe.answer||"[无回复]"}catch{K.value="[发送失败]"}finally{Q.value=!1}}}async function ct(N){const ye=++qe;$.value=!0;try{const Oe="/api/shortterm/intraday"+(c.value?"?date="+c.value:""),De=await ze(Oe,N);if(ye!==qe)return;De&&De.success&&(ce.value=De.snapshots||[])}catch{}finally{ye===qe&&($.value=!1)}}async function Rt(){T.value=!0;try{const N="/api/shortterm/intraday/snapshot"+(c.value?"?date="+c.value:""),ye=await fetch(N,{method:"POST",headers:X()}).then(function(Oe){return Oe.json()});ye&&ye.success?(ye.accepted?(We.value="已采集 "+ye.slot+" 快照"+(ye.pools_available&&!ye.pools_available.zt?" (池源部分不可用)":""),A.value="ok"):(We.value="⏱ "+(ye.reason||"非快照时点"),A.value="warn"),ct()):We.value="采集失败, 请稍后重试"}catch{We.value="采集失败, 请稍后重试"}finally{T.value=!1}}function Ot(){return ze("/api/shortterm/latest-session",!1).then(function(N){N&&N.date&&(c.value||(c.value=N.date))}).catch(function(){})}function _t(){const N=f.value;N==="ztpool"?re():N==="lhb"?te():N==="overview"?(ot(),Ft()):N==="sector"?kt():N==="intraday"&&ct()}function Yt(){const N=c.value?"?date="+c.value:"";["/api/shortterm/overview"+N,"/api/shortterm/pools"+N,"/api/shortterm/lhb"+N].forEach(function(Oe){ze(Oe,!1).catch(function(){})})}function vt(){const N=f.value;N==="ztpool"?re(!0):N==="lhb"?te(!0):N==="overview"?(ot(!0),Ft(!0)):N==="sector"?kt(!0):N==="intraday"&&ct(!0)}p(function(){Ot(),_t(),Yt(),Xt(),Z()}),Vue.watch(function(){return f.value},function(N){_t(),N==="overview"&&Xt()});const bt=window.QuantOnboarding,Bt=e(!1),gt=e(bt?bt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),at=t(function(){return bt&&bt.shorttermTourSteps()[gt.value.stepIndex]||{key:"",title:"",desc:""}}),Ht=t(function(){return bt?bt.shorttermTourProgress(gt.value):{done:0,total:3,pct:0}}),aa=t(function(){return gt.value.stepIndex>=2});function ua(){if(bt){var N=null;try{N=localStorage.getItem("qc_shortterm_tour")}catch{}if(N){var ye=bt.parseState(N);ye&&(gt.value=ye)}}}function na(){if(bt){var N=JSON.stringify(gt.value);try{localStorage.setItem("qc_shortterm_tour",N)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:N}})}).catch(function(){})}catch{}}}function Xt(){window.__quantGuideModalsEnabled===!0&&bt&&f.value==="overview"&&(ua(),bt.shorttermTourShouldShow(gt.value)&&(Bt.value=!0))}function va(){gt.value=bt.shorttermTourNext(gt.value),na()}function ma(){gt.value=bt.shorttermTourComplete(gt.value),na(),Bt.value=!1}function Qt(){gt.value=bt.shorttermTourDismiss(gt.value),na(),Bt.value=!1}return{currentPage:P,currentSubPage:f,shortDate:c,pools:k,poolLoading:n,poolError:x,ztBoardFilter:g,filteredZt:Te,clearBoardFilter:Ne,lhbRows:C,lhbLoading:D,lhbError:_,lhbReason:v,lhbPageRows:G,lhbPage:j,overview:J,overviewLoading:ae,overviewError:L,dateList:W,dateListLoading:ie,loadDateList:Z,pickDate:ne,sectorType:I,sectorIndicator:V,sectorKeyword:z,sectorRows:w,filteredSectorRows:yt,sectorPageRows:Vt,sectorPage:M,sectorLoading:oe,sectorError:U,sectorFlowSource:q,PAGE_SIZE:B,gotoSector:ut,review:u,reviewRunning:H,intradaySnapshots:ce,intradayLoading:$,intradayCollecting:T,intradaySlots:S,intradayMsg:We,slotClass:ke,intradayStatus:Le,chatQuestion:Y,chatAnswer:K,chatLoading:Q,loadPools:re,loadLhb:te,loadOverview:ot,loadSectorFlow:kt,loadReview:Ft,runReview:Mt,sendChat:St,loadIntraday:ct,collectSnapshot:Rt,refreshCurrent:vt,ladderText:ge,fmtAmount:He,fmtPct:$e,riseFall:Re,tagClass:Ae,openStock:Ye,lhbInstitutionNetBuy:ht,lhbHotMoneyCount:xt,sectorTopName:Ze,sectorTopInflow:jt,sectorSource:Nt,moneySource:Ke,promotion1to2:rt,cycleScore:dt,cycleTrend:Qe,pct:Et,fmtCond:he,verdictClass:we,sessionStatusText:Ge,sessionStatusClass:Xe,shorttermTourVisible:Bt,shorttermTourState:gt,shorttermTourStep:at,shorttermTourProg:Ht,shorttermTourIsLast:aa,shorttermTourNext:va,shorttermTourFinish:ma,shorttermTourSkip:Qt}}}})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(f,c,k,n,x){var i=k>0?k:1,h=typeof x=="number"&&x>=0?x:a,g=Math.max(0,n),C=Math.max(0,f),D=Math.max(0,c),_=Math.max(0,Math.floor(C/i)-h),o=Math.min(g,Math.ceil((C+D)/i)+h);return{startIndex:_,endIndex:o}}function p(f,c){return Math.max(0,f||0)*(c>0?c:0)}function t(f,c,k,n,x){var i=f||[],h=e(c,k,n,i.length,x),g=i.slice(h.startIndex,h.endIndex);return{visible:g,startIndex:h.startIndex,endIndex:h.endIndex,offsetY:h.startIndex*(n>0?n:1),totalHeight:p(i.length,n)}}function d(f,c){if(f){if(f.code!=null)return f.code;if(f.id!=null)return f.id;if(f.ts_code!=null)return f.ts_code}return c}function m(f,c,k){var n=f||[];if(!n.length)return c>0?c:1;for(var x=Math.min(k||50,n.length),i=0,h=0,g=0;g<x;g++){var C=n[g]&&n[g].rowHeight;typeof C=="number"&&C>0&&(i+=C,h++)}return h?i/h:c>0?c:1}function P(f,c,k,n,x){var i=e(f,c,k,n,x),h=Math.max(0,n);return h?(i.endIndex-i.startIndex)/h:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:p,sliceVisible:t,getRowKey:d,estimateDynamicRowHeight:m,renderedRatio:P}});(function(){const{ref:a,computed:e,onMounted:p,onBeforeUnmount:t}=Vue,d=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:d.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(m){const P=a(null),f=a(0),c=a(400),k=e(()=>(d.computeVisibleRange||function(l,v,j,B,G){const J=j>0?j:1,ae=G>=0?G:8,L=Math.max(0,B);return{startIndex:Math.max(0,Math.floor(l/J)-ae),endIndex:Math.min(L,Math.ceil((l+v)/J)+ae)}})(f.value,c.value,m.rowHeight,m.items.length,m.buffer)),n=e(()=>m.items.length*m.rowHeight),x=e(()=>k.value.startIndex),i=e(()=>k.value.endIndex),h=e(()=>m.items.slice(x.value,i.value));function g(){P.value&&(f.value=P.value.scrollTop)}function C(){P.value&&(c.value=P.value.clientHeight||400)}function D(o,l){return d.getRowKey?d.getRowKey(o,l):o&&o.code!=null?o.code:o&&o.id!=null?o.id:l}let _=null;return p(()=>{C(),P.value&&typeof ResizeObserver<"u"&&(_=new ResizeObserver(()=>C()),_.observe(P.value))}),t(()=>{_&&_.disconnect()}),{scrollEl:P,totalHeight:n,startIndex:x,endIndex:i,visibleItems:h,onScroll:g,keyOf:D}}}})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,p=60,t=500,d=10,m=88,P=350;function f(l,v,j,B,G){G=G||{};var J=typeof G.threshold=="number"?G.threshold:a,ae=typeof G.bias=="number"?G.bias:e,L=j-l,E=B-v;return Math.abs(L)<J||Math.abs(L)<Math.abs(E)*ae?"none":L<0?"left":"right"}function c(l,v,j){j=j||{};var B=typeof j.threshold=="number"?j.threshold:p;return v-l>=B}function k(l,v){v=v||{};var j=typeof v.threshold=="number"?v.threshold:t;return l>=j}var n=!1;function x(l,v){return l&&typeof l.closest=="function"?l.closest(v):null}function i(l){if(!l)return"";var v=l.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(v){var j=v.getAttribute&&v.getAttribute("data-copy-code");if(j)return j.trim();var B=(v.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(B)return B[0]}var G=l.getAttribute&&l.getAttribute("data-copy-code");return G?G.trim():""}function h(l){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(function(){return!0}).catch(function(){return g(l)}):Promise.resolve(g(l))}function g(l){try{var v=document.createElement("textarea");return v.value=l,v.style.position="fixed",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),document.body.removeChild(v),!0}catch{return!1}}function C(l){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(l)}function D(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function _(){var l=null,v=null,j=null;function B(){v&&(v.timer&&clearTimeout(v.timer),v=null)}function G(ie){j={el:ie,until:Date.now()+P}}function J(ie){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(Z){Z!==ie&&Z.classList.remove("swipe-open")}),l&&l.el!==ie&&(l=null)}function ae(ie){var Z=ie.touches&&ie.touches[0];if(Z){var ne=x(ie.target,".swipe-reveal");ne&&(l={el:ne,x:Z.clientX,y:Z.clientY,moved:!1},ie.stopPropagation());var I=x(ie.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");I&&(B(),v={el:I,x:Z.clientX,y:Z.clientY,timer:setTimeout(function(){var V=i(I);v=null,V&&(G(I),h(V).then(function(){D(),C("已复制代码 "+V)}))},t)})}}function L(ie){if(l){var Z=ie.touches&&ie.touches[0];if(Z){var ne=Z.clientX-l.x,I=Z.clientY-l.y;if(Math.abs(ne)>8&&Math.abs(ne)>Math.abs(I)*1.2){ie.cancelable&&ie.preventDefault(),l.moved=!0;var V=l.el.querySelector(".swipe-reveal-main")||l.el,z=Math.max(-m,Math.min(0,ne));V.style.transition="none",V.style.transform="translateX("+z+"px)",ie.stopPropagation()}if(v){var w=Z.clientX-v.x,M=Z.clientY-v.y;(Math.abs(w)>d||Math.abs(M)>d)&&B()}}}}function E(ie){if(B(),!!l){var Z=l.el,ne=ie.changedTouches&&ie.changedTouches[0],I=l.x,V=l.y,z="none";ne&&(z=f(I,V,ne.clientX,ne.clientY));var w=l.moved;l=null;var M=Z.querySelector(".swipe-reveal-main")||Z;M.style.transform="",M.style.transition="",z==="left"?(J(Z),Z.classList.add("swipe-open"),G(Z)):(z==="right"||w)&&Z.classList.remove("swipe-open"),ie.stopPropagation()}}function R(){B(),l=null}function W(ie){if(j&&Date.now()<j.until){var Z=j.el.contains(ie.target)||ie.target===j.el,ne=ie.target.closest&&ie.target.closest(".swipe-reveal-actions");Z&&!ne&&(ie.preventDefault(),ie.stopPropagation(),j=null)}}document.addEventListener("touchstart",ae,!0),document.addEventListener("touchmove",L,!0),document.addEventListener("touchend",E,!0),document.addEventListener("touchcancel",R,!0),document.addEventListener("click",W,!0)}function o(){n||typeof document>"u"||(n=!0,_())}return{judgeSwipe:f,judgePullToRefresh:c,judgeLongPress:k,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:p,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:d,REVEAL_WIDTH:m,initGestures:o,_codeFromRow:i}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function p(m){return a[m]||a.empty}function t(){const m=[];for(const P of e){const f=a[P];f.title||m.push(P+".title"),P!=="loading"&&!f.icon&&m.push(P+".icon"),typeof f.retry!="boolean"&&m.push(P+".retry"),typeof f.skeleton!="boolean"&&m.push(P+".skeleton")}return{ok:m.length===0,errors:m}}const d={VARIANTS:a,KEYS:e,resolve:p,validate:t};typeof window<"u"&&(window.QuantStatePanel=d),typeof Ie<"u"&&Ie.exports&&(Ie.exports=d)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(p){const t=a(()=>typeof e.resolve=="function"?e.resolve(p.type):{}),d=a(()=>p.icon||t.value.icon||""),m=a(()=>p.title||t.value.title||""),P=a(()=>p.desc||t.value.desc||""),f=a(()=>!!t.value.retry),c=a(()=>/^[a-z][a-z0-9-]*$/.test(String(d.value||"")));return{icon:d,title:m,desc:P,retryable:f,isIconName:c}}}})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(l){return String(l||"").trim().toLowerCase()}function e(l,v){if(!l)return!0;const j=l.split(/\s+/).filter(Boolean);if(!j.length)return!0;const B=String(v||"").toLowerCase();return j.every(function(G){return B.indexOf(G)!==-1})}function p(){return{visible:!1,query:"",activeIndex:0}}function t(l,v){return v===void 0&&(v=!l.visible),l.visible=v,v&&(l.query="",l.activeIndex=0),l.visible}function d(l,v,j){const B=a(l);if(!v||!v.length)return[];const G=[];return v.forEach(function(J){const ae=e(B,J.name)||e(B,J.key),L=(J.subPages||[]).filter(function(E){const R=j&&j[E]||E;return e(B,R)||e(B,E)});ae&&G.push({type:"menu",menuKey:J.key,subPage:J.subPages&&J.subPages[0]||"",label:J.name,subLabel:"页面",icon:J.icon||"file-text"}),L.forEach(function(E){G.push({type:"menu",menuKey:J.key,subPage:E,label:j&&j[E]||E,subLabel:J.name,icon:J.icon||"file-text"})})}),G.slice(0,8)}function m(l,v){const j=a(l);return!v||!v.length?[]:v.filter(function(B){return!!(!j||e(j,B.label)||e(j,B.key)||B.keywords&&e(j,B.keywords))}).slice(0,8)}function P(l,v){const j=a(l);return!j||!v||!v.length?[]:v.filter(function(B){return e(j,B.code)||e(j,B.name)}).slice(0,8).map(function(B){return{type:"stock",code:B.code,name:B.name,label:B.name,subLabel:B.code,icon:"trending-up"}})}function f(l,v,j){const B=[],G=[];return j&&j.length&&(B.push({key:"stock",label:"股票",items:j}),G.push.apply(G,j)),l&&l.length&&(B.push({key:"menu",label:"菜单",items:l}),G.push.apply(G,l)),v&&v.length&&(B.push({key:"command",label:"指令",items:v}),G.push.apply(G,v)),{groups:B,flat:G}}function c(l,v,j){if(v<=0)return 0;const B=((l||0)+j)%v;return B<0?v-1:B}function k(l,v,j,B){const G=d(l,v,j).map(function(ae){return{type:"menu",menuKey:ae.menuKey,subPage:ae.subPage,label:ae.label,subLabel:ae.subLabel,icon:ae.icon,iconName:ae.icon,value:ae.icon+" "+ae.label+" · "+ae.subLabel}}),J=m(l,B||[]).map(function(ae){return{type:"command",key:ae.key,label:ae.label,icon:ae.icon,iconName:ae.icon,subLabel:"指令",value:ae.icon+" "+ae.label}});return G.concat(J)}function n(l){return l?l.type==="menu"?{action:"menu",menuKey:l.menuKey,subPage:l.subPage}:l.type==="command"?{action:"command",key:l.key}:l.type==="sector"?{action:"sector",name:l.name}:l.type==="strategy"?{action:"strategy",id:l.id,name:l.name}:l.type==="stock"||l.code&&l.name?{action:"stock",code:l.code,name:l.name}:null:null}const x=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var i={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function h(l){if(!l||typeof l!="string")return null;var v=l.split("+").map(function(G){return G.trim()}).filter(Boolean);if(!v.length)return null;var j=v.pop().toLowerCase();if(!j)return null;var B={ctrl:!1,alt:!1,shift:!1,meta:!1};return v.forEach(function(G){var J=G.toLowerCase();i.ctrl.indexOf(J)!==-1?B.ctrl=!0:i.alt.indexOf(J)!==-1?B.alt=!0:i.shift.indexOf(J)!==-1?B.shift=!0:i.meta.indexOf(J)!==-1&&(B.meta=!0)}),{ctrl:B.ctrl,alt:B.alt,shift:B.shift,meta:B.meta,key:j}}function g(l,v){if(!l||!v)return!1;var j=String(v.key||v.code||"").toLowerCase();return l.key!==j?!1:l.ctrl===!!v.ctrlKey&&l.alt===!!v.altKey&&l.shift===!!v.shiftKey&&l.meta===!!v.metaKey}function C(l){if(!l)return"";var v=[];return l.ctrl&&v.push("Ctrl"),l.alt&&v.push("Alt"),l.shift&&v.push("Shift"),l.meta&&v.push("Meta"),v.push(l.key.toUpperCase()),v.join("+")}function D(){var l={};return{register:function(v){if(!v||!v.key)throw new Error("命令 key 必填");if(l[v.key])throw new Error("命令重复注册: "+v.key);return l[v.key]=Object.assign({},v),v.key},list:function(){return Object.keys(l).map(function(v){return l[v]})},get:function(v){return l[v]||null},remove:function(v){delete l[v]},has:function(v){return!!l[v]},count:function(){return Object.keys(l).length}}}function _(){var l={},v={};return{register:function(j,B,G){var J=h(j);if(!J)throw new Error("无效快捷键: "+j);var ae=C(J);if(l[ae])throw new Error("快捷键冲突: "+j);if(B!=null&&v[B]!==void 0)throw new Error("动作重复绑定: "+B);return l[ae]={combo:j,action:B,description:G||"",parsed:J},v[B]=ae,ae},resolve:function(j){for(var B in l)if(g(l[B].parsed,j))return l[B].action;return null},list:function(){return Object.keys(l).map(function(j){return l[j]})},unregister:function(j){var B=C(h(j));l[B]&&(delete v[l[B].action],delete l[B])},count:function(){return Object.keys(l).length}}}function o(){var l=_();return l.register("Ctrl+K","toggle-palette","打开命令面板"),l.register("F5","refresh","刷新当前页"),l.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),l.register("Ctrl+J","open-ai","打开 AI 问股"),l.register("Ctrl+D","open-today","今日一屏"),l.register("Ctrl+E","batch-eval","批量 AI 评估"),l.register("Ctrl+G","add-portfolio","加入组合"),l.register("Ctrl+H","open-eval-history","打开评估历史"),l.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),l}return{normalize:a,createPaletteState:p,toggleVisible:t,searchMenus:d,searchCommands:m,filterStocksLocal:P,mergeResults:f,moveIndex:c,buildSearchSuggestions:k,dispatchSearchSelection:n,DEFAULT_COMMANDS:x,parseKeyCombo:h,matchShortcut:g,canonicalCombo:C,createCommandRegistry:D,createShortcutRegistry:_,createDefaultShortcuts:o}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof Ie<"u"&&Ie.exports?Ie.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var p=e();typeof Ie=="object"&&Ie.exports&&(Ie.exports=p),a.QuantOnboarding=p})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],e=a.length,p=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=p.length;function d(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function m(){return p.slice()}function P(E){return E<0?0:E>=t?t-1:E}function f(E){return{stepIndex:E.stepIndex,completed:!!E.completed,dismissed:!!E.dismissed,updatedAt:E.updatedAt||0}}function c(E){return f(Object.assign({},E,{stepIndex:P((E.stepIndex||0)+1),updatedAt:Date.now()}))}function k(E){return f(Object.assign({},E,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function n(E){return f(Object.assign({},E,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function x(E){var R=Math.min(E&&E.stepIndex||0,t);return{done:R,total:t,pct:Math.round(R/t*100)}}function i(E){return!!(E&&!E.completed&&!E.dismissed)}function h(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function g(){return a.slice()}function C(){return e}function D(E){return E<0?0:E>=e?e-1:E}function _(E){return{stepIndex:E.stepIndex,completed:!!E.completed,dismissed:!!E.dismissed,updatedAt:E.updatedAt||0}}function o(E){return _(Object.assign({},E,{stepIndex:D((E.stepIndex||0)+1),updatedAt:Date.now()}))}function l(E){return _(Object.assign({},E,{stepIndex:D((E.stepIndex||0)-1),updatedAt:Date.now()}))}function v(E,R){return _(Object.assign({},E,{stepIndex:D(R),updatedAt:Date.now()}))}function j(E){return _(Object.assign({},E,{completed:!0,updatedAt:Date.now()}))}function B(E){return _(Object.assign({},E,{dismissed:!0,updatedAt:Date.now()}))}function G(E){return!!(E&&E.completed)}function J(E){var R=Math.min(E&&E.stepIndex||0,e);return{done:R,total:e,pct:Math.round(R/e*100)}}function ae(E){var R=E||h();return JSON.stringify({stepIndex:R.stepIndex,completed:!!R.completed,dismissed:!!R.dismissed,updatedAt:R.updatedAt||0})}function L(E){var R=h();if(!E||typeof E!="string")return R;try{var W=JSON.parse(E);if(!W||typeof W!="object")return R;var ie=parseInt(W.stepIndex,10);return isNaN(ie)?R:{stepIndex:D(ie),completed:!!W.completed,dismissed:!!W.dismissed,updatedAt:W.updatedAt||0}}catch{return R}}return{ONBOARDING_STEPS:a,steps:g,stepCount:C,createOnboardingState:h,next:o,prev:l,jumpTo:v,complete:j,dismiss:B,isComplete:G,progress:J,persistState:ae,parseState:L,SHORTTERM_TOUR_STEPS:p,shorttermTourSteps:m,createShorttermTourState:d,shorttermTourNext:c,shorttermTourComplete:k,shorttermTourDismiss:n,shorttermTourProgress:x,shorttermTourShouldShow:i}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:p}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const d=a(!1),m=a(t.createOnboardingState()),P=e(function(){return t.steps()[m.value.stepIndex]}),f=e(function(){return t.progress(m.value)}),c=e(function(){return m.value.stepIndex>=t.stepCount()-1}),k=e(function(){return"onboarding.step."+P.value.key});function n(){const D=t.persistState(m.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:D}})}).then(function(_){return _.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",D)}catch{}})}function x(){m.value=t.next(m.value)}function i(){m.value=t.prev(m.value)}function h(){m.value=t.complete(m.value),n(),d.value=!1}function g(){m.value=t.dismiss(m.value),n(),d.value=!1}function C(){fetch("/api/user_config/preferences").then(function(D){return D.json()}).then(function(D){const _=D&&D.preferences&&D.preferences.onboarding_progress;return _&&(m.value=t.parseState(_)),_}).catch(function(){return null}).then(function(D){if(!D)try{const _=localStorage.getItem("qc_onboarding_progress");_&&(m.value=t.parseState(_))}catch{}!t.isComplete(m.value)&&!m.value.dismissed&&(d.value=!0)})}return p(C),{visible:d,st:m,step:P,prog:f,isLast:c,stepKey:k,next:x,prev:i,finish:h,skip:g}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(e){try{const p=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(p)return p(e)||""}catch{}return e}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(e){try{const p=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(p)return p(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:p,nextTick:t,inject:d,onMounted:m}=Vue,P=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const f=d("qcState");if(!f)return{};const c=a(""),k=e({get:()=>f.commandPaletteVisible.value,set:I=>{f.commandPaletteVisible.value=I}}),n=a(0),x=a([]),i=a(null),h=e(()=>{const I=(P.DEFAULT_COMMANDS||[]).map(function(z){return Object.assign({},z)});return Object.keys(f.themes.value||{}).forEach(function(z){const w=f.themes.value[z];I.push({key:"theme:"+z,label:"切换主题 · "+(w.name||z),icon:"palette",keywords:"theme 主题"})}),I});function g(I){return typeof I=="string"&&/^[a-z][a-z0-9-]*$/.test(I)}const C=e(()=>f.menus.value||[]);function D(){const I=window.__quantModules&&window.__quantModules.pinyin;if(!I)return[];const V=[];return(f.watchlist&&f.watchlist.value||[]).forEach(function(z){V.push({code:z.code,name:z.name})}),(f.aiHistory&&f.aiHistory.value||[]).forEach(function(z){z&&z.stock_code&&V.push({code:z.stock_code,name:z.stock_name||z.stock_code})}),V.push.apply(V,I.getExtraStocks()),I.buildStockIndex(V)}function _(I){const V=window.__quantModules&&window.__quantModules.pinyin;return V?V.searchStocksByQuery(I,D()).map(function(z){return{type:"stock",code:z.code,name:z.name,label:z.name,subLabel:z.code,icon:"trending-up"}}):[]}function o(){const I=[],V=window.__quantModules&&window.__quantModules.recent;V&&V.getRecentViewed().slice(0,5).forEach(function(w){I.push({type:"stock",code:w.code,name:w.name||w.code,label:w.name||w.code,subLabel:"最近查看 · "+w.code,icon:"trending-up"})});const z=(f.watchlist&&f.watchlist.value||[]).slice(0,8).map(function(w){return{type:"stock",code:w.code,name:w.name||w.code,label:w.name||w.code,subLabel:"我的自选 · "+w.code,icon:"trending-up"}});return I.concat(z)}const l=e(()=>{const I=c.value;if(!I)return P.mergeResults([],[],o());const V=P.searchMenus(I,C.value,f.subPageNames),z=P.searchCommands(I,h.value),w=x.value;return P.mergeResults(V,z,w)}),v=e(()=>l.value);function j(I){return v.value.flat[n.value]===I}function B(I){n.value=v.value.flat.indexOf(I)}function G(I){return(I.type||"")+":"+(I.code||I.menuKey||I.key||I.label)}let J=null;function ae(){const I=c.value.trim();if(I.length<1){x.value=[];return}J&&clearTimeout(J),J=setTimeout(function(){const V=_(I);x.value=V,n.value=0,f.searchStocks(I,function(z){if(c.value.trim()!==I)return;const w=(z||[]).filter(function(U){return U&&U.code&&U.name}).map(function(U){return{type:"stock",code:U.code,name:U.name,label:U.name,subLabel:U.code,icon:"trending-up"}}),M={},oe=[];V.forEach(function(U){M[U.code]||(M[U.code]=!0,oe.push(U))}),w.forEach(function(U){M[U.code]||(M[U.code]=!0,oe.push(U))}),x.value=oe,n.value=0})},200)}function L(){n.value=P.moveIndex(n.value,v.value.flat.length,1)}function E(){n.value=P.moveIndex(n.value,v.value.flat.length,-1)}function R(){const I=v.value.flat[n.value];I&&W(I)}function W(I){f.commandPaletteVisible.value=!1,I.type==="menu"?f.navigateTo(I.menuKey,I.subPage):I.type==="stock"?f.showStockDetail(I.code,I.name):I.type==="command"&&ie(I.key)}function ie(I){if(I==="refresh"){const V=f.currentPage.value;V==="strategies"?f.loadDashboardData().catch(function(){}):V==="calendar"?f.refreshCalendarData().catch(function(){}):V==="ai"&&f.loadAiHistory().catch(function(){})}else I==="export"?f.exportCSV():I==="batch"?f.showBatchEvaluate.value=!0:I==="ai"?f.openAiFab():I==="sidebar"?f.toggleSidebar():I==="today"?f.navigateTo("strategies","overview"):I==="add-portfolio"?(f.currentPage.value="ai",f.currentSubPage.value="portfolio"):I==="open-system"?f.navigateTo("system","status"):I==="open-shortterm"?f.navigateTo("shortterm","overview"):I==="open-research"?f.navigateTo("research","overview"):I==="open-calendar"?f.navigateTo("calendar",""):I==="refresh-data-source"?f.navigateTo("system","datasource"):I.indexOf("theme:")===0&&f.changeTheme(I.slice(6))}p(k,function(I){I&&(c.value="",x.value=[],n.value=0,t(function(){i.value&&i.value.focus&&i.value.focus()}))}),p(c,ae);function Z(I){I==="toggle-palette"?f.commandPaletteVisible.value=!f.commandPaletteVisible.value:I==="toggle-sidebar"?f.toggleSidebar():I==="open-ai"?f.openAiFab():I==="refresh"?ie("refresh"):I==="open-today"?ie("today"):I==="batch-eval"?ie("batch"):I==="add-portfolio"&&ie("add-portfolio")}function ne(I){if(!P.createDefaultShortcuts||!P.createShortcutRegistry)return;const z=P.createDefaultShortcuts().resolve({key:I.key,ctrlKey:I.ctrlKey,altKey:I.altKey,shiftKey:I.shiftKey,metaKey:I.metaKey});z&&(I.preventDefault(),Z(z))}return m(function(){document.addEventListener("keydown",ne)}),{visible:k,query:c,results:v,inputEl:i,sanitizeHtml:f.sanitizeHtml,isIconName:g,onDown:L,onUp:E,onEnter:R,execute:W,isActive:j,setActive:B,itemKey:G,onGlobalKeydown:ne}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const p=Vue.ref(0);let t=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,d=>{d?(p.value=0,t=setInterval(()=>{p.value++},1e3)):t&&(clearInterval(t),t=null)}),{...e,batchElapsed:p}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a,computed:e,ref:p,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
                <div class="detail-header">
                    <div>
                        <h3 class="text-xl-title">{{ stockDetail.stock }} <span class="text-md-muted">{{ stockDetail.name }}</span></h3>
                        <div class="detail-subtitle">{{ t('detail.subtitle', { days: stockDetail.total_days }) }}</div>
                    </div>
                    <div class="score-badge" :class="{ pulse: scorePulse }">
                        <div class="score-num-wrap">
                            <div class="num">{{ stockDetail.score_data?.score || '-' }}</div>
                            <span v-if="scoreDelta" class="score-delta" :class="scoreDelta.dir">
                                {{ scoreDelta.value > 0 ? '+' : '' }}{{ fmtNum(scoreDelta.value) }}
                            </span>
                        </div>
                        <div class="label">{{ stockDetail.score_data?.level || '未评估' }}</div>
                    </div>
                </div>
                <div class="detail-content">
                    <!-- V5.4.1 (R3): 自选/入池状态 + 入池历史 (重点跟踪弹窗信息) -->
                    <div v-if="poolInfo" class="detail-pool-row">
                        <el-tag v-if="poolInfo.source === 'both' || poolInfo.source === 'watchlist'"
                            size="small" type="warning" effect="light"><qc-icon name="star" :size="13" /> 自选</el-tag>
                        <el-tag v-if="poolInfo.source === 'both' || poolInfo.source === 'new_pool'"
                            size="small" type="success" effect="light"><qc-icon name="badge-check" :size="13" /> 入池</el-tag>
                        <el-tag v-if="poolInfo.holding" size="small" type="danger" effect="light">持仓</el-tag>
                        <span v-if="poolInfo.pool_history && poolInfo.pool_history.first_appear"
                              class="detail-pool-history">
                            入池历史: 首入 <b>{{ poolInfo.pool_history.first_appear }}</b>
                            · 最近在池 <b>{{ poolInfo.pool_history.last_appear }}</b>
                            · 累计 <b>{{ poolInfo.pool_history.pooled_days }}</b> 天
                            <span v-if="poolInfo.pool_history.pool_entries.length > 1"
                                  class="color-secondary">· {{ poolInfo.pool_history.pool_entries.length }} 段</span>
                        </span>
                        <span v-else-if="poolInfo.pool_history" class="detail-pool-history color-secondary">从未入池</span>
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
    `,setup(){const d=a("qcState");if(!d)return{};const m={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},P=e(()=>m[d.aiEvalStage.value]||""),f=e(()=>{const R=d.aiResult&&d.aiResult.value&&d.aiResult.value.result&&d.aiResult.value.result.level;return R?R==="强烈推荐"||R==="推荐"?"var(--el-success)":R==="谨慎推荐"?"var(--el-warning)":R==="中性"||R==="观望"?"var(--text-secondary)":R==="评估失败"||R==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function c(R){const W=document.createElement("textarea");W.value=R,W.style.position="fixed",W.style.opacity="0",document.body.appendChild(W),W.select(),document.execCommand("copy"),document.body.removeChild(W)}async function k(){const R=d.aiResult&&d.aiResult.value;if(!R||!R.result)return;const W=R.result.dimensions||{},ie=Object.entries(W).map(([ne,I])=>`${ne} ${Math.round(I)}分`).join(`
`),Z=`【AI 智能评估】${R.result.level||""} ${R.result.total_score!=null?R.result.total_score:"—"}分
模型：${R.model_used||R.result.provider||"—"}

${R.result.detailed_report||""}

九维度评分：
${ie||"无"}`;try{await navigator.clipboard.writeText(Z),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{c(Z),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const n=p(!1),x=p(!1),i=p(null),h=p([]),g={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function C(R){return g[R]||"factor-sem-none"}async function D(){const R=d.stockDetail.value&&d.stockDetail.value.stock;if(R){n.value=!0,x.value=!1,h.value=[],i.value=null;try{const W=d.selectedDate.value?`?date=${d.selectedDate.value}`:"",ie=await fetch(`/api/calendar/stock/${R}/factors${W}`).then(V=>V.json()),Z=ie&&Array.isArray(ie.factors)?ie.factors:[],ne=[],I={};Z.forEach(V=>{I[V.category]||(I[V.category]={category:V.category,items:[]},ne.push(I[V.category])),I[V.category].items.push(V)}),h.value=ne,i.value=ie&&ie.summary||null}catch{x.value=!0}finally{n.value=!1}}}t(d.stockDetailTab,R=>{R==="factor"&&d.stockDetail.value&&d.stockDetailVisible.value&&(D(),o())});const _=p(null);async function o(){try{const R=await fetch("/api/market/factor-ic").then(W=>W.json());_.value=R&&R.success&&R.data?R.data:{}}catch{_.value={}}}function l(R){if(!R||!R.n5)return"—";const W=R.n5.icir!=null?"ICIR "+R.n5.icir:"ICIR —";return R.n5.grade+" ("+W+")"}const v=p(!1),j=p(!1),B=p([]),G=p([]);function J(R){if(R==null)return"—";const W=Number(R);return Number.isNaN(W)?"—":Math.abs(W)>=1e8?(W/1e8).toFixed(2)+"亿":Math.abs(W)>=1e4?(W/1e4).toFixed(1)+"万":String(W)}async function ae(){const R=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(R){v.value=!0,j.value=!1;try{const W=await fetch("/api/market/performance/"+encodeURIComponent(R)).then(ie=>ie.json());W&&W.success?(B.value=W.forecast||[],G.value=W.express||[]):j.value=!0}catch{j.value=!0}finally{v.value=!1}}}t(d.stockDetailTab,R=>{R==="performance"&&ae()});const L=p(null);async function E(){const R=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(!R){L.value=null;return}try{const W=await fetch("/api/focus/stock/"+encodeURIComponent(R)+"/pool").then(ie=>ie.json());L.value=W&&W.success&&W.data?W.data:null}catch{L.value=null}}return t(()=>d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock,R=>{R&&d.stockDetailVisible.value?E():L.value=null}),t(()=>d.stockDetailVisible.value,R=>{R?E():L.value=null}),{...d,aiStageText:P,levelRingColor:f,copyAiReport:k,factorLoading:n,factorError:x,factorSummary:i,factorGroups:h,factorSemClass:C,loadFactorPanel:D,factorIc:_,loadFactorIc:o,factorIcGrade:l,perfLoading:v,perfError:j,perfForecast:B,perfExpress:G,fmtY:J,loadPerformance:ae,poolInfo:L,loadPoolInfo:E}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(p){const t=e("qcState");if(!t)return{};const d=a(()=>p.type==="history"?t.selectedHistoryIds.value.includes(p.item.id):t.selectedChatIds.value.includes(p.item.id)),m=a(()=>{const g=t.watchlistCodes.value.has(p.item.stock_code);return{icon:"star",isWatched:g,label:g?"取消收藏":"加入收藏"}}),P=a(()=>p.type==="history"?"bot":"message-circle"),f=a(()=>{var g;return p.type==="history"?((g=p.item.result)==null?void 0:g.provider)||"":p.item.first_msg||""}),c=a(()=>{var g,C;return`${((C=(g=p.item.result)==null?void 0:g.dimensions)==null?void 0:C.length)||9}维度分析`}),k=a(()=>{var C,D;const g=p.type==="history"?p.item.evaluate_time:p.item.created_at||"";return g?p.timeFormat==="datetime"?p.type==="history"?`${g.split("T")[0]} ${(g.split("T")[1]||"").split(".")[0]}`:`${g.split("T")[0]} ${((C=g.split("T")[1])==null?void 0:C.substring(0,5))||""}`:p.type==="history"?(g.split("T")[1]||"").split(".")[0]||g:((D=g.split("T")[1])==null?void 0:D.substring(0,5))||"":""});function n(){p.type==="history"?t.toggleSelectHistory(p.item.id):t.toggleSelectChat(p.item.id)}function x(){p.type==="history"?t.viewAiResult(p.item):t.viewChatSession(p.item)}async function i(){try{await ElementPlus.ElMessageBox.confirm(p.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}p.type==="history"?t.deleteSingleHistory(p.item.id):t.deleteChatSession(p.item.id)}function h(g,C){t.toggleWatchlist(g,C)}return{isSelected:d,watchState:m,providerIcon:P,providerText:f,dimsText:c,timeText:k,toggleSelect:n,view:x,remove:i,toggleWatchlist:h,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const d=["买入","持有","观望","减仓","卖出"],m={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},P={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},f=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],c={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},k=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function n(i){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(i).then(C=>C.json?C.json():C)}function x(){const i=new Date,h=g=>g<10?"0"+g:""+g;return i.getFullYear()+"-"+h(i.getMonth()+1)+"-"+h(i.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
                <!-- V5.15 (F5): 操作列 — 打开详情 + 展开箭头 -->
                <span class="focus-row-actions">
                  <!-- V5.4.1 (R3): K线详情 → 图表图标按钮 -->
                  <el-button size="small" circle text type="primary" class="focus-row-open"
                    @click.stop="openStockDetail(row.stock_code)"
                    :title="'打开 ' + row.stock_code + ' 详情'"><qc-icon name="trending-up" :size="14" /></el-button>
                </span>
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
      </div>`,setup(){const i=t("qcState"),h=a(x()),g=a("after_close"),C=a({rows:[],actions:{},total:0,groups:{}}),D=a({sessions:{},total:0}),_=a(null),o=a(!1),l=a(""),v=a(!1),j=a([]),B=a(""),G=a(null),J={},ae=a({});let L=0;const E=a(null),R=e(function(){const T=C.value&&C.value.groups||{};return Object.keys(T).length?T:C.value&&C.value.rows&&C.value.rows.length?{全部:C.value.rows}:{}}),W=e(function(){const T=E.value;return!T||!T.date||T.date!==h.value?"":"已加载最近一次评估: "+T.date+" · "+(c[T.session]||T.session)}),ie=e(function(){const T=C.value&&C.value.base_date;return T?T===h.value?"评分范围: "+T+" 收盘池 + 自选":"评分范围: "+T+" 收盘池(前一交易日算好) + 自选":""});function Z(T){if(T==null)return"—";const Y=Number(T);return Y===Math.floor(Y)?String(Y):Y.toFixed(1)}function ne(T){const Y=C.value.total||0,K=(C.value.actions||{})[T]||0;if(!Y)return"0%";const Q=K/Y*100;return Q>0&&Q<4?"4%":Q.toFixed(1)+"%"}function I(T){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[T]||"info"}function V(T){const Y=_.value&&_.value.overall&&_.value.overall[T]||null;return!Y||Y.total===0||Y.rate===null||Y.rate===void 0?"info":Y.rate>=60?"success":Y.rate>=40?"warning":"danger"}function z(T){const Y=_.value&&_.value.overall&&_.value.overall[T]||null;return!Y||Y.total===0||Y.rate===null||Y.rate===void 0?"样本不足":Y.rate.toFixed(1)+"% ("+Y.total+" 样本)"}function w(){return c[g.value]||g.value}function M(T){const Y=j.value.indexOf(T);Y>=0?j.value.splice(Y,1):j.value.push(T)}function oe(T){if(!T||!T.raw_json)return{};if(J[T.stock_code+T.session+T.trade_date])return J[T.stock_code+T.session+T.trade_date];let Y={};try{Y=JSON.parse(T.raw_json)||{}}catch{Y={}}return J[T.stock_code+T.session+T.trade_date]=Y,Y}async function U(){try{const T=await n("/api/focus/latest"),Y=T&&T.success&&T.data;Y&&Y.date&&(E.value=Y,h.value=Y.date,Y.session&&(g.value=Y.session))}catch(T){console.warn("[focus] 最近一次评估解析失败:",T)}}async function y(){v.value=!0;try{const T=await n("/api/focus/results?date="+h.value+"&session="+g.value);C.value=T&&T.success&&T.data||{rows:[],actions:{},total:0,groups:{}},r((C.value.rows||[]).map(function(Y){return Y.stock_code}))}catch(T){console.warn("[focus] 结果加载失败:",T),C.value={rows:[],actions:{},total:0,groups:{}}}finally{v.value=!1}}async function r(T){const Y=ae.value||{},K=(T||[]).filter(function(ee){return ee&&!Y[ee]});if(!K.length)return;const Q=++L,X=K.map(function(ee){return n("/api/focus/stock/"+encodeURIComponent(ee)+"/pool?date="+h.value).then(function(be){be&&be.success&&be.data?Y[ee]=be.data:Y[ee]={stock_code:ee,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){Y[ee]={stock_code:ee,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(X)}catch{}Q===L&&(ae.value=Object.assign({},Y))}function q(T){const Y=i&&i.showStockDetail;if(typeof Y=="function"){Y(T);return}const Q=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;Q&&Q.info("请从其他页面打开股票详情: "+T)}async function u(){try{const T=await n("/api/focus/history?date="+h.value);D.value=T&&T.success&&T.data||{sessions:{},total:0}}catch(T){console.warn("[focus] 历史加载失败:",T),D.value={sessions:{},total:0}}}async function H(){o.value=!0;try{const T=await n("/api/ai/track");T&&T.success&&T.data?(_.value=T.data,l.value=(T.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):_.value=null}catch(T){console.warn("[focus] 效果块加载失败:",T),_.value=null}finally{o.value=!1}}async function ce(){const T=(B.value||"").trim();if(T){G.value=null;try{const Y=await n("/api/focus/stock/"+encodeURIComponent(T));G.value=Y&&Y.success&&Y.data&&Y.data.rows||[]}catch(Y){console.warn("[focus] 单股历史加载失败:",Y),G.value=[]}}}async function $(){await y(),await u(),await H()}return p(async function(){await U(),await $()}),{curDate:h,session:g,results:C,history:D,track:_,trackLoading:o,trackNote:l,detailSplitEnabled:i.detailSplitEnabled,stockDetail:i.stockDetail,loading:v,expanded:j,stockCode:B,stockHistory:G,SESSIONS:f,ACTION_ORDER:d,TRACK_WINDOWS:k,ACTION_DOT:m,TIER_DOT:P,SESSION_LABELS:c,displayGroups:R,latestNote:W,baseNote:ie,sessionLabel:w,fmtScore:Z,tagType:I,rateTagType:V,fmtRate:z,toggle:M,detailOf:oe,loadResults:y,loadHistory:u,loadTrack:H,loadStockHistory:ce,loadAll:$,poolStatus:ae,openStockDetail:q,actionPct:ne}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:p}=Vue,{currentView:t,statusFilter:d,dashboardData:m,loadHealthMetrics:P,getLoadDashboardData:f,getLastRefreshTime:c,getFetchPoolSignals:k}=a,n=e(!1),x=e(""),i=new Map,h=e([]),g=e(""),C=e(""),D=e([]),_=e(""),o=window.__quantModules.core||{},l=typeof o.createTtlCache=="function"?o.createTtlCache(15e3):null;let v=0;function j(){const W=Date.now();W-v<5e3||(v=W,ElementPlus.ElMessage.success("有新数据，已更新"))}function B(W,ie,Z,ne){!l||!ie||typeof o.silentRefresh!="function"||o.silentRefresh({cache:l,key:ie,fetchFn:async()=>{const I=await fetch(W);if(!I.ok)throw new Error("HTTP "+I.status);const V=await I.json();return Z?Z(V):V},ttl:l.defaultTtl,apply:ne,onChanged:j,onError:()=>{}})}const G=new Set;async function J(){var W;try{const Z=await(await fetch("/api/dates")).json();h.value=((W=Z.data)==null?void 0:W.dates)||Z.dates||[],h.value.length>0&&(g.value=h.value[h.value.length-1]),C.value=new Date().toLocaleTimeString()}catch(ie){console.error(ie)}}async function ae(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),C.value="刷新中...",i.clear(),await J(),await E(),C.value=new Date().toLocaleTimeString()}catch(W){console.error("数据刷新失败",W)}}function L(){if(!g.value)return;const ie="/api/view/"+(t.value||"day")+"/"+g.value+"?status="+(d.value||"all")+"&format=csv";window.open(ie,"_blank")}async function E(){if(!g.value)return;const W=`${t.value}_${g.value}`;if(G.has(W))return;G.add(W);const ie=`/api/view/${t.value}/${g.value}?status=all`,Z=l&&typeof o.makeCacheKey=="function"?o.makeCacheKey("GET",`/api/view/${t.value}/${g.value}`,{status:"all"}):null,ne=(z,w)=>{D.value=z,_.value=w||"",i.set(W,{stocks:z,note:w||""})},I=z=>{ne(z&&z.stocks||[],z&&z.note||"")};if(i.has(W)){I(i.get(W)),B(ie,Z,z=>z,I),G.delete(W);return}const V=Z&&l?l.get(Z):void 0;if(V!==void 0){I(V),B(ie,Z,z=>z,I),G.delete(W);return}n.value=!0,x.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const w=await(await fetch(ie)).json(),M=w.stocks||[];ne(M,w.note||""),l&&Z&&l.set(Z,{stocks:M,note:w.note||""})}catch{try{const M=await(await fetch(`/api/calendar/${g.value}/consensus`)).json();D.value=(M.consensus||[]).map(oe=>({...oe,code:oe.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{n.value=!1}k(),G.delete(W)}async function R(){const W=l&&typeof o.makeCacheKey=="function"?o.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(l){const ie=l.get(W);if(ie!==void 0){m.value=ie,P().catch(()=>{}),B("/api/dashboard",W,Z=>Z.data||Z,Z=>{m.value=Z,c().value=Date.now()});return}}await f()(),P().catch(()=>{}),l&&l.set(W,m.value)}return{loading:n,loadingView:x,viewCache:i,dates:h,selectedDate:g,lastLoadTime:C,consensus:D,viewNote:_,loadDates:J,refreshCalendarData:ae,exportCSV:L,loadConsensusData:E,loadDashboardCached:R}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:p,loadIndexKline:t,rememberDialogTrigger:d,menus:m,currentPage:P,currentSubPage:f,stockDetail:c,selectedDate:k}=a,n=ref({indices:[],market_sentiment:null});let x=null;const i=ref(!1),h=ref(null),g=ref(null),C=ref(!1);function D(){window.__quantModules.charts.disposeKline("stockKlineChart")}const _=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{_.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const o=ref(!1),l=ref(null),v=ref(!1),j=ref(0),B=ref(0);async function G(){try{const w=await(await fetch("/api/market/overview")).json();n.value=w,J(w)}catch(z){console.error("获取市场行情失败:",z)}}function J(z){x&&clearInterval(x),z&&z.in_trading_hours&&(x=setInterval(G,6e5))}function ae(z){d(),h.value=z,g.value=null,p.value="daily",L(z.code),window.__quantModules.charts.disposeKline("indexKlineChart"),i.value=!0,setTimeout(async()=>{await t("daily")},500)}async function L(z){try{const M=await(await fetch("/api/ai/index-eval/"+z)).json();M.success&&M.data&&(g.value=M.data)}catch(w){console.warn("[getIndexAiScore] cache check failed:",w)}}async function E(){if(h.value){C.value=!0;try{const w=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:h.value.code,index_name:h.value.name,current_price:h.value.close,pct_chg:h.value.pct_chg})})).json();w.success?g.value=w.data:ElementPlus.ElMessage.error(w.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{C.value=!1}}}function R(z){window.__quantModules.charts.zoomKline("stockKlineChart",z)}function W(){v.value=!0,setTimeout(()=>{v.value=!1},600)}function ie(z,w){if(z===w){W();return}const M=800,oe=performance.now(),U=w-z;o.value=!0,l.value={value:U,dir:U>0?"up":"down"},v.value=!0,setTimeout(()=>{v.value=!1},600),setTimeout(()=>{l.value=null},2300);function y(r){const q=r-oe,u=Math.min(q/M,1),H=1-Math.pow(1-u,3),ce=Math.round(z+U*H);c.value&&c.value.score_data&&(c.value.score_data.score=ce),u<1?requestAnimationFrame(y):(c.value&&c.value.score_data&&(c.value.score_data.score=w),o.value=!1)}requestAnimationFrame(y)}function Z(){if(!c.value||!c.value.score_data)return;const z=c.value.score_data.score;if(z==null)return;const w=600,M=performance.now();v.value=!0,setTimeout(()=>{v.value=!1},600);function oe(U){const y=Math.min((U-M)/w,1),r=1-Math.pow(1-y,3),q=Math.round(z*r);c.value&&c.value.score_data&&(c.value.score_data.score=q),y<1?requestAnimationFrame(oe):c.value&&c.value.score_data&&(c.value.score_data.score=z)}requestAnimationFrame(oe)}async function ne(){var M;if(!c.value||!c.value.stock)return;const z=c.value.stock,w=(M=c.value.score_data)==null?void 0:M.score;try{const oe=new Date().toISOString().split("T")[0],U=k.value||oe,r=await(await fetch(`/api/calendar/stock/${encodeURIComponent(z)}/score?date=${U}`)).json();if(r.success&&r.score_data){const q=r.score_data.score;c.value&&(c.value.score_data=r.score_data),w!=null&&q!==w?ie(w,q):W()}else W()}catch(oe){console.warn("[refreshStockScore] failed:",oe)}}function I(z){_.value&&(j.value=z.touches[0].clientX,B.value=z.touches[0].clientY)}function V(z){if(!_.value)return;const w=j.value-z.changedTouches[0].clientX,M=B.value-z.changedTouches[0].clientY;if(Math.abs(w)>Math.abs(M)&&Math.abs(w)>80){const oe=m.value.map(function(y){return y.key}),U=oe.indexOf(P.value);if(w>0&&U<oe.length-1){const y=oe[U+1],r=window.__quantGoPage;r?r(y,""):(P.value=y,f.value="")}else if(w<0&&U>0){const y=oe[U-1],r=window.__quantGoPage;r?r(y,""):(P.value=y,f.value="")}}}return{marketData:n,marketRefreshTimer:x,fetchMarketData:G,indexDetailVisible:i,indexDetail:h,indexAiResult:g,indexAiLoading:C,showIndexDetail:ae,loadCachedIndexEval:L,doIndexAiEvaluate:E,disposeStockKline:D,isMobile:_,zoomKlineRange:R,scoreAnimating:o,scoreDelta:l,scorePulse:v,triggerScorePulse:W,animateScoreChange:ie,animateScoreEntrance:Z,refreshStockScore:ne,touchStartX:j,touchStartY:B,onTouchStart:I,onTouchEnd:V}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:p,currentSubPage:t}=a,d=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),m=ref("idle"),P=ref("");async function f(){if(!d.value.webhook_url){P.value="请先输入Webhook地址";return}m.value="testing",P.value="";try{const T=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:d.value.webhook_url})})).json();T.success||T.status==="ok"?(P.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(P.value=T.message||"测试失败",ElementPlus.ElMessage.error(P.value))}catch{P.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}m.value="idle"}const c=Vue.ref(!1);async function k(){c.value=!0;try{const T=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{c.value=!1}}const n=ref(!1);function x(){e("ai","chat_history"),n.value=!0,Vue.nextTick(()=>{const $=document.querySelector('input[placeholder*="输入问题"]');$&&$.focus()})}const i=ref([]),h=ref({});async function g(){try{const T=await(await fetch("/api/ai/recommend-strategies")).json();T.success&&(i.value=T.recommendations||[])}catch($){console.warn("[loadStrategyRecommendations] failed:",$)}}async function C(){try{const T=await(await fetch("/api/ai/usage-stats")).json();T.success&&(h.value=T)}catch($){console.warn("loadAiUsage failed:",$)}}const D=ref({}),_=ref([]),o=ref(7);async function l(){try{const T=await(await fetch("/api/system/monitor")).json();T.success&&(D.value=T)}catch($){console.warn("loadSysMonitor failed:",$)}}const v=ref({});async function j(){try{const T=await(await fetch("/api/system/health-detail")).json();T.success&&(v.value=T)}catch($){console.warn("loadHealthDetail failed:",$)}}async function B(){try{const T=await(await fetch(`/api/analytics/rank?days=${o.value}`)).json();T.success&&(_.value=T.rank||[])}catch($){console.warn("loadAnalytics failed:",$)}}const G=ref(!1);async function J(){if(!G.value){G.value=!0;try{const T=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return T&&T.success?T.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${T.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${T.date}）`):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"生成复盘失败"),j(),T}catch($){ElementPlus.ElMessage.error("生成复盘失败: "+($.message||""))}finally{G.value=!1}}}const ae=ref(null),L=ref(!1);async function E(){try{const T=await(await fetch("/api/ai/fact-check/latest")).json();ae.value=T&&T.success&&T.data||null}catch($){console.warn("loadFactCheck failed:",$)}}async function R(){if(!L.value){L.value=!0;try{const T=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return T&&T.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${T.data.pass_rate!=null?T.data.pass_rate+"%":"--"} (${T.data.checked} 个数字)`),E()):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"事实护栏抽查失败"),T}catch($){ElementPlus.ElMessage.error("事实护栏抽查失败: "+($.message||""))}finally{L.value=!1}}}const W=ref([]),ie=ref(!1);async function Z(){try{const T=await(await fetch("/api/backup/list")).json();T.success&&(W.value=T.backups||[])}catch($){console.error("加载备份列表失败",$)}}async function ne(){ie.value=!0;try{const T=await(await fetch("/api/backup/create",{method:"POST"})).json();T.success?(ElementPlus.ElMessage.success(T.message||"备份成功"),Z()):ElementPlus.ElMessage.error(T.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{ie.value=!1}}const I=ref(""),V=ref("");async function z($){I.value=$,V.value="";try{const T=window.__quantModules&&window.__quantModules.core||{},Y=typeof T.authHeaders=="function"?T.authHeaders():{},K=await fetch("/api/reports/export?format="+encodeURIComponent($),{headers:Y});if(!K.ok)throw new Error("HTTP "+K.status);const Q=await K.blob(),X=URL.createObjectURL(Q),ee=document.createElement("a");ee.href=X;const be=new Date().toISOString().slice(0,10);ee.download="report_"+be+"."+$,document.body.appendChild(ee),ee.click(),document.body.removeChild(ee),URL.revokeObjectURL(X),V.value="报表已导出 ("+$.toUpperCase()+")"}catch(T){V.value="报表导出失败: "+(T.message||T)}finally{I.value=""}}async function w($){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${$} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(T){console.warn("[restoreBackup] confirm cancelled:",T);return}try{const Y=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$})})).json();Y.success?(ElementPlus.ElMessage.success(Y.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(Y.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const M=ref(!1),oe=ref(0),U=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function y(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{oe.value=0,M.value=!0},800)}function r(){M.value=!1,localStorage.setItem("quant_tour_done","1")}function q(){M.value=!1,localStorage.setItem("quant_tour_done","1")}const u=ref(""),H=ref(!1);async function ce(){if(!u.value||!u.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}H.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:u.value.trim(),page:p.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(u.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{H.value=!1}}return{feishuConfig:d,feishuTestStatus:m,feishuTestMessage:P,feishuSaving:c,testFeishuWebhook:f,saveFeishuConfig:k,aiFabHidden:n,openAiFab:x,strategyRecommendations:i,aiUsage:h,loadStrategyRecommendations:g,loadAiUsage:C,sysMonitor:D,analyticsRank:_,analyticsDays:o,loadSysMonitor:l,loadAnalytics:B,healthDetail:v,loadHealthDetail:j,reviewTriggering:G,triggerMarketReview:J,factCheck:ae,factCheckRunning:L,loadFactCheck:E,triggerFactCheck:R,backups:W,backupCreating:ie,loadBackups:Z,createBackup:ne,restoreBackup:w,reportExporting:I,reportExportMsg:V,exportReport:z,tourVisible:M,tourStep:oe,tourSteps:U,maybeShowTour:y,skipTour:r,finishTour:q,feedbackText:u,feedbackSubmitting:H,submitFeedback:ce}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:p,selectedDate:t,dates:d,loadConsensusData:m,hapticFeedback:P}=a,f=e(()=>({day:"天",week:"周",month:"月",year:"年"})[p.value]||"天"),c=e(()=>({day:"date",week:"week",month:"month",year:"year"})[p.value]||"date"),k=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[p.value]||"YYYY-MM-DD"),n=e(()=>!t.value||!d.value||d.value.length===0?!1:t.value>d.value[0]),x=e(()=>!t.value||!d.value||d.value.length===0?!1:t.value<d.value[d.value.length-1]);function i(D){P("light"),p.value=D;let _=t.value||d.value[d.value.length-1];if(D==="year"){const o=_.substring(0,4),l=d.value.find(v=>v.startsWith(o));t.value=l||_}else if(D==="month"){const o=_.substring(0,7),l=d.value.find(v=>v.startsWith(o));t.value=l||_}setTimeout(m,50)}function h(D){P("light");const _=t.value,o=d.value,l=o.indexOf(_);if(l<0)return;let v=1;p.value==="week"&&(v=5),p.value==="month"&&(v=22),p.value==="year"&&(v=250);const j=l+D*v;if(j>=0&&j<o.length){const B=o[j];if(p.value==="month"){const G=B.substring(0,7),J=o.find(ae=>ae.startsWith(G));t.value=J||B}else if(p.value==="year"){const G=B.substring(0,4),J=o.find(ae=>ae.startsWith(G));t.value=J||B}else t.value=B;m()}}function g(D){if(!d.value||d.value.length===0)return!1;const _=D.getFullYear(),o=String(D.getMonth()+1).padStart(2,"0"),l=String(D.getDate()).padStart(2,"0"),v=`${_}-${o}-${l}`;return!d.value.includes(v)}function C(D){D&&D.length>10&&(t.value=D.substring(0,10)),m()}return{viewUnit:f,datePickerType:c,dateFormat:k,canNavPrev:n,canNavNext:x,switchView:i,navigateDate:h,disabledDate:g,onDateChange:C}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:p,navigateTo:t,currentPage:d,currentView:m,navigateDate:P,switchView:f,getLoadDashboardData:c,refreshCalendarData:k,getLoadAiHistory:n,exportCSV:x,getShowBatchEvaluate:i,openAiFab:h,toggleSidebar:g,showStockDetail:C}=a,D=ref("");async function _(L,E){if(!L||L.trim().length<1){E([]);return}const R=window.QuantCommandPanel;let W=[];R&&e.value&&(W=R.buildSearchSuggestions(L,e.value,p,R.DEFAULT_COMMANDS));const ie=window.__quantModules&&window.__quantModules.pinyin;ie&&ie.searchCoreStocks(L).forEach(function(Z){W.push({value:Z.code+" "+Z.name,type:"stock",code:Z.code,name:Z.name,label:Z.name,subLabel:Z.code,icon:"trending-up",iconName:"trending-up"})});try{const ne=await(await fetch("/api/search?q="+encodeURIComponent(L))).json();if(ne.success&&ne.results){const I=ne.results.map(function(z){return{value:z.code+" "+z.name,type:"stock",code:z.code,name:z.name,label:z.name,subLabel:z.code,icon:"trending-up",iconName:"trending-up"}}),V=[];(ne.groups||[]).forEach(function(z){(z.items||[]).forEach(function(w){w.type==="sector"?V.push({value:w.name+" · "+w.subLabel,type:"sector",name:w.name,label:w.name,subLabel:"板块",icon:"layers",iconName:"layers"}):w.type==="strategy"?V.push({value:w.name+" · 策略",type:"strategy",id:w.id,name:w.name,label:w.name,subLabel:"策略",icon:"target",iconName:"target"}):w.type==="menu"&&V.push({value:w.name,type:"menu",menuKey:w.menuKey,name:w.name,label:w.name,subLabel:w.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),E(W.concat(I,V))}else E(W)}catch(Z){console.warn("[searchStocks] fetch failed:",Z),E(W)}}function o(L){return L?L.type==="menu"?{action:"menu",menuKey:L.menuKey,subPage:L.subPage}:L.type==="command"?{action:"command",key:L.key}:L.type==="sector"?{action:"sector",name:L.name}:L.type==="strategy"?{action:"strategy",id:L.id,name:L.name}:L.type==="stock"||L.code&&L.name?{action:"stock",code:L.code,name:L.name}:null:null}function l(L){D.value="";const E=window.QuantCommandPanel,R=E?E.dispatchSearchSelection(L):o(L);if(R){if(R.action==="menu"){t(R.menuKey,R.subPage);return}if(R.action==="command"){v(R.key);return}if(R.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(R.name);return}if(R.action==="strategy"){t("research","overview");return}R.action==="stock"&&typeof C=="function"&&C(R.code,R.name)}}function v(L){if(L==="refresh"){const E=d.value;E==="strategies"?c().catch(function(){}):E==="calendar"?k().catch(function(){}):E==="ai"&&n().catch(function(){})}else L==="export"?x():L==="batch"?i().value=!0:L==="ai"?h():L==="sidebar"?g():L==="open-eval-history"?t("ai","history"):L==="open-shortterm"&&t("shortterm","overview")}const j=ref(!1),B=ref(!1);function G(L){if(!L)return!1;const E=L.tagName;return E==="INPUT"||E==="TEXTAREA"||E==="SELECT"||L.isContentEditable}function J(L){if(G(L.target))return;const E=L.key.toLowerCase();if(L.ctrlKey&&E==="k"){L.preventDefault(),B.value=!0;return}if(L.ctrlKey&&E==="/"){L.preventDefault(),j.value=!j.value;return}if(L.ctrlKey&&E==="h"){L.preventDefault(),t("ai","history");return}if(L.ctrlKey&&L.shiftKey&&E==="s"){L.preventDefault(),t("shortterm","overview");return}if(!(L.ctrlKey||L.metaKey||L.altKey)){if(E>="1"&&E<="5"){const R=parseInt(E)-1,W=e.value[R];W&&t(W.key,W.subPages[0]||"");return}if(E==="r"&&ae(),(E==="arrowleft"||E==="arrowright"||E==="arrowup"||E==="arrowdown")&&d.value==="calendar")if(L.preventDefault(),E==="arrowleft"||E==="arrowright")P(E==="arrowleft"?-1:1);else{const R=["day","week","month","year"].indexOf(m.value),W=["day","week","month","year"][(R+(E==="arrowup"?-1:1)+4)%4];f(W)}}}function ae(){const L=d.value;L==="strategies"?c().catch(()=>{}):L==="calendar"?k().catch(()=>{}):L==="ai"&&n().catch(()=>{})}return{searchQuery:D,searchStocks:_,onSearchSelect:l,runGlobalCommand:v,shortcutHelpVisible:j,commandPaletteVisible:B,isTypingTarget:G,handleGlobalKeydown:J,refreshCurrentPage:ae}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:p,loadDates:t,loadDashboardData:d,loadDashboardCached:m,loadHealthMetrics:P,loadConsensusData:f,applyTheme:c,maybeShowTour:k,loadAiVendors:n}=a,x=ref({username:"",password:""}),i=ref(!1),h=ref(!1),g=ref(!1),C=ref({oldPassword:"",newPassword:"",confirmPassword:""}),D=ref(!1),_=ref(!1),o=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),l=ref(1);async function v(){try{(await(await fetch("/api/setup/status")).json()).needed&&(o.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},l.value=1,_.value=!0)}catch(E){console.warn("[checkSetupWizard] failed:",E)}}async function j(){try{const E={new_password:o.value.newPassword,ai_key:o.value.aiKey,ai_provider:o.value.aiProvider,ai_model:o.value.aiModel,ai_endpoint:o.value.aiEndpoint,tushare_token:o.value.tushareToken},W=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)})).json();W.success?(_.value=!1,ElementPlus.ElMessage.success("初始化完成"),await p()):ElementPlus.ElMessage.error(W.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function B(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(_.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function G(){if(!x.value.username||!x.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}i.value=!0;try{const R=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x.value)})).json();R.success?(e.value=R.user,localStorage.setItem("quant_user",JSON.stringify(R.user)),localStorage.setItem("quant_token",R.data.access_token),c(R.user.theme||"gold"),typeof n=="function"&&n(),await p(),await t(),await Promise.all([m(),f(),P().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),R.data&&R.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),k(),R.user.role==="admin"&&setTimeout(v,500)):ElementPlus.ElMessage.error(R.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{i.value=!1}}async function J(){h.value=!0;try{const R=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();R.success?(e.value=R.user,localStorage.setItem("quant_user",JSON.stringify(R.user)),localStorage.setItem("quant_token",R.data.access_token),c(R.user.theme||"gold"),await p(),await t(),await d(),P().catch(()=>{}),await f(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(R.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{h.value=!1}}function ae(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function L(){if(!C.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!C.value.newPassword||C.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(C.value.newPassword!==C.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}D.value=!0;try{const E=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:C.value.oldPassword,new_password:C.value.newPassword})}),R=await E.json();E.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),g.value=!1,C.value={oldPassword:"",newPassword:"",confirmPassword:""},ae()):ElementPlus.ElMessage.error(R.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{D.value=!1}}return{loginForm:x,logining:i,guestLogining:h,showChangePassword:g,changePasswordForm:C,changingPassword:D,showSetupWizard:_,setupForm:o,setupStep:l,checkSetupWizard:v,completeSetupWizard:j,resetSetupWizard:B,handleLogin:G,handleGuestLogin:J,handleLogout:ae,doChangePassword:L}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let p=null;const{strategyFilter:t,currentView:d,statusFilter:m,currentPage:P,currentSubPage:f,menus:c,currentUser:k,strategyFilterCounts:n,lazyTick:x,dates:i,selectedDate:h,consensus:g,loadConsensusData:C,fetchMerrillClock:D,fetchMarketData:_,loadWatchlist:o,loadAiHistory:l,preloadWatchlistKline:v,loadChatHistory:j,loadSystemStatus:B,checkTushareConnection:G,loadSysMonitor:J,loadAnalytics:ae,loadHealthDetail:L,loadHealthMetrics:E,loadAiUsage:R,loadFactCheck:W,loadAutoEvaluateConfig:ie,loadDatasourceConfig:Z,loadFeishuConfig:ne,loadAiConfig:I,loadAiVendors:V,loadRateLimit:z,loadDataRefreshConfig:w,loadBackups:M,loadAllGroups:oe,loadUsers:U,stockDetailTab:y,stockDetailVisible:r,stockKlineLoaded:q,loadStockKline:u,currentKlinePeriod:H,showMerrillDetail:ce,indexDetailVisible:$,restoreDialogFocus:T}=a;e(t,Y=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(Y.selected)),localStorage.setItem("quant_strategy_filter_mode",Y.mode)},{deep:!0}),e([d,m],(Y,K)=>{Y[0]!==K[0]&&C()}),e([P,f],([Y,K])=>{var Q;try{const ee=!(Y==="calendar"&&K==="calendar")&&K||"",be=ee?"#"+Y+"/"+ee:"#"+Y;window.location.hash!==be&&(window.location.hash=be)}catch{}if(K&&localStorage.setItem("quant_last_subpage",K),!K&&c.value.find(X=>X.key===Y)){const X=c.value.find(ee=>ee.key===Y);X&&X.subPages.length>0&&(f.value=X.subPages[0])}if(Y==="shortterm"&&K==="market-review"){const X=window.__lazyLoaders&&window.__lazyLoaders.research;X&&X().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(ee){ee&&ee.name&&!ee.__quantRegistered&&(window.__quantApp.component(ee.name,ee),ee.__quantRegistered=!0)}),x&&x.value++}).catch(function(ee){console.warn("[lazy] research 组件补加载失败",ee)})}Y==="calendar"&&K==="calendar"&&(!g.value||g.value.length===0)&&(i.value.length>0&&!h.value&&(h.value=i.value[i.value.length-1]||""),setTimeout(C,50)),Y==="calendar"&&K==="pool"&&(!g.value||g.value.length===0)&&(i.value.length>0&&!h.value&&(h.value=i.value[i.value.length-1]||""),setTimeout(C,50)),Y==="strategies"&&(K==="merrill"&&D(),K==="market"&&_(),K==="consensus"&&(!g.value||g.value.length===0)&&setTimeout(C,50)),Y==="ai"&&(K==="watchlist"&&(o(),l(),setTimeout(v,500)),K==="history"&&l(),K==="overview"&&(l(),o()),K==="chat_history"&&j()),(Y==="system"||Y==="ops")&&((Q=k.value)==null?void 0:Q.role)==="admin"&&(K==="status"&&(B(),G()),K==="health"&&(L(),E()),K==="schedule"&&L(),K==="guard"&&W(),K==="usage"&&(J(),ae(),L(),E(),R(),W()),K==="autoeval"&&(ie(),V()),K==="datasource"&&Z(),K==="feature"&&(ne(),I(),z(),w(),M()),K==="user"&&(oe(),U())),(Y==="system"||Y==="ops")&&K==="usage"?p||(p=setInterval(()=>{J(),ae(),L(),E(),R()},3e4)):p&&(clearInterval(p),p=null)}),e(y,(Y,K)=>{Y==="kline"&&K&&K!=="kline"&&r.value&&(q.value=!1,setTimeout(async()=>{!await u(H.value)&&r.value&&y.value==="kline"&&setTimeout(()=>u(H.value),800)},50))}),e(ce,Y=>{Y||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([r,$],([Y,K])=>{!Y&&!K&&T()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:p,menus:t,currentPage:d,currentSubPage:m,currentView:P,currentKlinePeriod:f,selectedDate:c,dates:k,loadDates:n,loadConsensusData:x,loadDashboardCached:i,appVersion:h,themes:g,fetchMarketData:C,fetchMerrillStages:D,fetchMerrillClock:_,loadAiConfig:o,loadAiVendors:l,loadAiCatalog:v,currentUser:j,loadUserConfig:B,loadAutoEvaluateConfig:G,loadGroupConfig:J,loadUsers:ae,loadAllGroups:L,loadAiHistory:E}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function R(U,y){const r={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(U==="calendar"&&r[y])return d.value="calendar",m.value="calendar",r[y]&&(P.value=r[y]),!0;if(U==="research"&&(y==="strategy-write"||y==="custom-write")){d.value="research",m.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",y==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const U=window.location.hash||"";if(!U||U==="#")return;const y=U.replace(/^#\/?/,"").split("/"),r=y[0],q=y[1]||"",u=t.value.find(function(H){return H.key===r});if(u&&!R(r,q)){if(!q)d.value=r,m.value=u.subPages[0]||"";else if(u.subPages.indexOf(q)>=0)d.value=r,m.value=q;else return;window.__lazyLoaders&&window.__lazyLoaders[r]&&window.__quantGoPage&&window.__quantGoPage(r,m.value).catch(function(){})}});const W=(U,y=3e3,r="")=>{const q=new Promise((u,H)=>setTimeout(()=>H(new Error("timeout")),y));return Promise.race([U,q]).catch(u=>{console.warn(`[init] ${r||"task"} failed:`,u.message)})},ie=localStorage.getItem("quant_theme"),Z=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const U=window.__quantModules.themes;let y=Z.theme||"system",r=Z.theme_hue!=null&&Z.theme_hue!==""?Z.theme_hue:null;const q=typeof U.migrateLegacyTheme=="function"?U.migrateLegacyTheme():null;r==null&&q&&(y=q.mode,r=q.hue),r==null&&(r=45),p(y,r)}else ie&&p(ie);await J().catch(function(){}),function(){var U=window.location.hash||"",y=!1;if(U&&U!=="#"){var r=U.replace(/^#\/?/,"").split("/"),q=r[0],u=r[1]||"",H=t.value.find(function(K){return K.key===q});H&&(R(q,u)||(d.value=q,u&&H.subPages.indexOf(u)>=0?m.value=u:u||(m.value=H.subPages[0]||"")),y=!0)}if(!y){var ce=localStorage.getItem("quant_last_page");ce&&t.value.some(function(K){return K.key===ce})?d.value=ce:Z.default_view&&t.value.some(function(K){return K.key===Z.default_view})&&(d.value=Z.default_view);var $=localStorage.getItem("quant_last_subpage");$&&(m.value=$)}var T=localStorage.getItem("quant_last_date");T&&(c.value=T);var Y=localStorage.getItem("quant_last_view");Y&&(P.value=Y),window.__lazyLoaders&&window.__lazyLoaders[d.value]&&window.__quantGoPage&&window.__quantGoPage(d.value,m.value).catch(function(){})}(),fetch("/api/health").then(U=>U.json()).then(U=>{U.version&&(h.value=U.version)}).catch(()=>{});const ne=localStorage.getItem("quant_user"),I=localStorage.getItem("quant_token"),V=!!(ne&&I),z=Promise.all([Promise.resolve().then(()=>{g.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),W(C(),3e3,"marketData"),W(D(),2e3,"merrillStages")]).then(()=>{W(_(),3e3,"merrillClock")});if(o(),v(),V&&j.value&&l(),!V||!j.value){await z;return}let w=!0;try{w=(await fetch("/api/users/me")).ok}catch{w=!1}if(!w){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),j.value=null;return}if(j.value){const U=j.value.theme||"",y=window.__quantModules&&window.__quantModules.themes;let r=Z.theme||"system",q=Z.theme_hue!=null&&Z.theme_hue!==""?Z.theme_hue:null;if(q==null&&y&&typeof y.migrateLegacyTheme=="function"){const u=y.migrateLegacyTheme();if(u)r=u.mode,q=u.hue;else if(U&&y.LEGACY_MAP&&y.LEGACY_MAP[U]){const H=y.LEGACY_MAP[U];r=H[0],q=H[1]}}q==null&&(q=45),p(r,q)}if(window.__quantModules&&window.__quantModules.preferences){const y=await window.__quantModules.preferences.loadPreferences();var M=localStorage.getItem("quant_last_page");!M&&y.default_view&&t.value.some(function(r){return r.key===y.default_view})&&(d.value=y.default_view),y.theme&&p(y.theme,y.theme_hue!=null&&y.theme_hue!==""?y.theme_hue:null),f&&(y.chart_period==="weekly"||y.chart_period==="monthly")&&(f.value=y.chart_period)}await Promise.all([W(B(),2e3,"userConfig"),W(n(),2e3,"dates")]),G().catch(()=>{}),J().catch(()=>{});const oe=d.value==="strategies"?W(i(),2e3,"dashboard"):W(x(),2e3,"consensus");await Promise.all([oe,W(ae(),2e3,"users"),W(E(),2e3,"aiHistory")]),L().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:p,onUnmounted:t,watch:d,nextTick:m}=Vue,P=a(!1),f=window.__quantModules&&window.__quantModules.i18n||{},c=f.SUPPORTED_LOCALES||["zh-CN","en"],k=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",n=a(c.indexOf(k)!==-1?k:"zh-CN");typeof f.bindLocale=="function"&&f.bindLocale(n);const x=typeof f.t=="function"?f.t:function(F){return String(F)};function i(F){c.indexOf(F)!==-1&&(n.value=F,typeof f.setLocale=="function"&&f.setLocale(F),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",F))}function h(F,ue){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(F,ue):F==null?"":String(F)}function g(F){(F.key==="Enter"||F.key===" "||F.key==="Spacebar")&&(F.preventDefault(),F.currentTarget&&typeof F.currentTarget.click=="function"&&F.currentTarget.click())}let C=null;function D(){document.activeElement&&document.activeElement!==document.body&&(C=document.activeElement)}function _(){if(C&&C.isConnected)try{C.focus()}catch{}C=null}const o=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{o.value=!0}),window.addEventListener("offline",()=>{o.value=!1})),window.addEventListener("beforeunload",F=>{if(P.value)return F.preventDefault(),F.returnValue="您有未保存的配置变更，确定要离开吗？",F.returnValue});function l(F="light"){typeof navigator<"u"&&navigator.vibrate&&(F==="light"?navigator.vibrate(10):F==="medium"?navigator.vibrate(20):F==="heavy"&&navigator.vibrate([10,30,10]))}const v=useMerrillClock(),{merrillData:j,merrillStagesConfig:B,showMerrillDetail:G,merrillDetailData:J,merrillClockConfig:ae,merrillClockLastUpdated:L,merrillReevalResult:E,merrillReevalLoading:R,stages:W,indicatorList:ie,dimensionScoreList:Z,detailDimensionScoreList:ne,confidenceColor:I,timelineStages:V,clockPosition:z,merrillProgressStyle:w,FULL_CYCLE_MONTHS:M,getStageAngle:oe,getCycleProgress:U,getCurrentStageMonths:y,getStageTotalMonths:r,isStageCompleted:q,getCharLabel:u,getAssetName:H,getRankColor:ce,fetchMerrillStages:$,fetchMerrillClock:T,loadMerrillTimeline:Y,showTimelineStage:K,merrillTimeline:Q,timelineLoading:X,showStageDetail:ee,saveMerrillClockConfig:be,doMerrillReevaluate:Pe,startAutoRefresh:Me,stopAutoRefresh:qe}=v,le=a(localStorage.getItem("sidebar_collapsed")==="1");function _e(){le.value=!le.value,localStorage.setItem("sidebar_collapsed",le.value?"1":"0")}const ze=a(null),re=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],te=e(()=>{var Ue,It,Ut;const F=((Ue=Le.value)==null?void 0:Ue.role)||"guest",ue=((It=Le.value)==null?void 0:It.group)||F,pe=((Ut=ze.value)==null?void 0:Ut[ue])||null;return re.map(At=>{if(pe&&pe.visible_menus&&At.key in pe.visible_menus&&!pe.visible_menus[At.key])return null;const ha={...At,name:x("nav."+At.key)||At.name};return pe!=null&&pe.visible_sub_pages&&(ha.subPages=At.subPages.filter(os=>{const Sd=At.key+"."+os;return pe.visible_sub_pages[Sd]!==!1})),At.key==="system"&&F==="guest"&&At.guestSubPages&&(ha.subPages=At.guestSubPages),ha}).filter(Boolean)});async function ge(){try{if(!localStorage.getItem("quant_token"))return;const ue=await fetch("/api/groups/my");if(ue.ok){const pe=await ue.json();ze.value={[pe.group_id]:pe.group}}}catch(F){console.warn("loadGroupConfig:",F)}}const Te=a("strategies"),Ne=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},Ke=a(Ne.navMode);function rt(F){const ue=window.__quantModules&&window.__quantModules.navModeCore;Ke.value=ue?ue.normalizeNavMode(F):F==="tree"||F==="toptab"?F:"toptab",ue&&ue.writePrefs({navMode:Ke.value})}const dt=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function Qe(F,ue=""){l("light"),Te.value=F,Ze.value=ue,localStorage.setItem("quant_last_subpage",ue)}function Et(){const F=te.value;if(!F||!F.length)return;if(!F.some(function(je){return je.key===Te.value})){const je=F[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",je.key),Te.value=je.key,Ze.value=je.subPages&&je.subPages[0]||"";return}const pe=F.find(function(je){return je.key===Te.value});pe&&pe.subPages&&pe.subPages.length&&!pe.subPages.includes(Ze.value)&&(Ze.value=pe.subPages[0])}const he=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],we=a("multifactor"),Re=a(null),Ae=a(1e5),Ge=a(!1),Xe=a(null);let Ye=null,ht=null;async function xt(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ue={initial_capital:Ae.value||1e5};Re.value&&Re.value.length===2&&(ue.start_date=Re.value[0],ue.end_date=Re.value[1]),Ge.value=!0,Xe.value=null;try{const pe=await fetch("/api/strategies/"+we.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ue)});if(!pe.ok){const It=await pe.json().catch(()=>({}));throw new Error(It.detail||"回测失败")}const je=await pe.json(),Ue=je.result||{};if(!Ue.success)throw new Error(Ue.message||"回测失败");je.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),Xe.value={total_return_pct:((Ue.total_return??0)*100).toFixed(2),annual_return_pct:((Ue.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ue.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ue.sharpe_ratio??0).toFixed(2),win_rate:((Ue.win_rate??0)*100).toFixed(2),out_sample:Ue.outsample_total_return===void 0?"":((Ue.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ue.overfit_warning||!1,message:Ue.message||""},ft(Ue.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(pe){ElementPlus.ElMessage.error(pe.message||"回测失败")}finally{Ge.value=!1}}function ft(F){const ue=document.getElementById("backtestEquityChart");if(!ue||!F||F.length===0)return;const pe=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,je=()=>{ht=F,Ye&&(Ye.dispose(),Ye=null),Ye=echarts.init(ue),Ye.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ue=F.map(Ut=>Ut.date||Ut[0]),It=F.map(Ut=>Ut.value??Ut[1]);Ye.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ue,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:It,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};pe?pe().then(je).catch(()=>{}):je()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){ht&&ft(ht)}));const Ze=a("overview"),jt=e(()=>{const F=re.find(ue=>ue.key===Te.value);return F?F.name:Te.value}),Nt=a(0),yt=e(()=>{Nt.value;const F={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ue=Ze.value;return Te.value==="shortterm"&&ue==="market-review"?"qc-research-page":Te.value==="ops"&&ue==="execution"?"qc-strategies-page":F[Te.value]||""}),ut=a(!1),Vt=a({}),S=a([]);a("");const me=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),ke=a("day"),Se=a("all"),Le=a(null);d(te,function(){Et()}),d([Te,Ze],function(){const F=document.querySelector(".main-content");F&&(F.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const F=localStorage.getItem("quant_user"),ue=localStorage.getItem("quant_token");if(F&&ue)try{Le.value=JSON.parse(F)}catch{}}();const We=a(!1),A=a("kline"),de=a(null),He=a(!1),$e=a(localStorage.getItem("qc_detail_mode")||"split"),ot=a(window.innerWidth<=1024),kt=e(()=>$e.value==="split"&&!ot.value);function Ft(F){$e.value=F;try{localStorage.setItem("qc_detail_mode",F)}catch{}}window.addEventListener("resize",()=>{ot.value=window.innerWidth<=1024});const Mt=35,St=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function ct(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",St.value?St.value+"px":Mt+"%")}ct();function Rt(F){const ue=Math.max(1,Math.min(F,2e3));St.value=ue,ct();try{localStorage.setItem("qc_split_width",String(ue))}catch{}}function Ot(F){if(St.value)return St.value;const ue=F?F.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ue*Mt/100))}let _t=null;function Yt(F,ue){if(!ue||ot.value)return;F.preventDefault();const pe=ue.getBoundingClientRect().width;_t={startX:F.clientX,startW:Ot(ue),minW:Math.max(200,Math.floor(pe*Mt/100)),maxW:Math.floor(pe/2)},document.body.classList.add("qc-split-resizing")}function vt(F){if(!_t)return;const ue=F.clientX-_t.startX;let pe=_t.startW+ue;pe=Math.max(_t.minW,Math.min(pe,_t.maxW)),St.value=pe,ct();try{localStorage.setItem("qc_split_width",String(pe))}catch{}}function bt(){_t&&(_t=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",vt),document.addEventListener("mouseup",bt));function Bt(F){const ue=F.target&&F.target.closest?F.target.closest("[data-split-resize]"):null;if(!ue)return;const pe=ue.closest("[data-split-root]");Yt(F,pe)}typeof document<"u"&&document.addEventListener("mousedown",Bt,!0);const gt={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},at=a({});function Ht(F,ue){return gt[ue]||ue}function aa(F){const ue=re.find(je=>je.key===F);if(!ue||!ue.subPages||!ue.subPages.length)return;if(!(at.value[F]||[]).length){const je=ue.subPages[0];at.value=Object.assign({},at.value,{[F]:[{subPage:je,title:Ht(F,je)}]})}}function ua(F,ue){const pe=window.__quantModules&&window.__quantModules.tabsCore,je=Ht(F,ue);if(pe){const Ue=pe.openTab(at.value,F,ue,je);at.value=Ue.groups}else{const Ue=at.value[F]||[];Ue.some(It=>It.subPage===ue)||(at.value=Object.assign({},at.value,{[F]:Ue.concat([{subPage:ue,title:je}])}))}Qe(F,ue)}function na(F,ue){const pe=window.__quantModules&&window.__quantModules.tabsCore,je=Ze.value;let Ue=null;if(pe)Ue=pe.closeTab(at.value,F,ue,je),at.value=Ue.groups;else{const At=at.value[F]||[];at.value=Object.assign({},at.value,{[F]:At.filter(ha=>ha.subPage!==ue)})}if(!(at.value[F]||[]).length){aa(F);const At=re.find(os=>os.key===F),ha=At&&At.subPages&&At.subPages[0];ha&&Qe(F,ha);return}const Ut=Ue?Ue.nextActive:null;Ut&&Qe(F,Ut)}function Xt(F,ue){if(!(at.value[F]||[]).some(je=>je.subPage===ue)){ua(F,ue);return}Qe(F,ue)}d([Te,Ze],([F,ue])=>{aa(F);const pe=at.value[F]||[];ue&&!pe.some(je=>je.subPage===ue)&&(at.value=Object.assign({},at.value,{[F]:pe.concat([{subPage:ue,title:Ht(F,ue)}])}))},{immediate:!0});const va=function(F){if(!(F.ctrlKey&&F.key==="Tab"))return;const ue=Te.value,pe=at.value[ue]||[];if(pe.length<=1)return;F.preventDefault();const je=Ze.value,Ue=Math.max(0,pe.findIndex(At=>At.subPage===je)),It=F.shiftKey?(Ue-1+pe.length)%pe.length:(Ue+1)%pe.length,Ut=pe[It];Ut&&Xt(ue,Ut.subPage)};window.addEventListener("keydown",va);const ma=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),Qt=a("light"),N=[45,220,0,140,270,320],ye={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},Oe=a(45),De=a(function(){const F=window.__quantModules&&window.__quantModules.preferences;return F&&F.getPreference&&F.getPreference("theme")||"system"}());(function(){const F=window.__quantModules&&window.__quantModules.preferences,ue=F&&F.getPreference&&F.getPreference("theme_hue");ue!=null&&ue!==""&&(Oe.value=parseInt(ue,10))})();function st(F){return"hsl("+F+", 75%, 42%)"}function et(F){return ye[F]||"自定义 "+F}const zt=a(""),Kt=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),Tt=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),pa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],sa=a({day:[],week:[],month:[],year:[]}),ya=a({});function Zt(F,ue){let pe=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(pe=window.__quantModules.themes.applyTheme(F,ue)),Qt.value=pe&&pe.mode?pe.mode:F==="dark"||F==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Pa(F,ue){const pe=window.__quantModules&&window.__quantModules.preferences;if(!(!pe||!pe.setPreferences))try{pe.setPreferences({theme:F}),ue!=null&&ue!==""&&pe.setPreferences({theme_hue:parseInt(ue,10)})}catch{}}function fa(F,ue){Zt(F,ue),ue!=null&&ue!==""&&(Oe.value=parseInt(ue,10));const pe=window.__quantModules&&window.__quantModules.themes;let je=F;pe&&pe.LEGACY_MAP&&pe.LEGACY_MAP[F]&&(je=pe.LEGACY_MAP[F][0]),je==="light"||je==="dark"||je==="system"?De.value=je:De.value=Qt.value,je==="system"&&(je=Qt.value),Pa(je,ue),Le.value&&(fetch(`/api/users/${Le.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:je})}),Le.value.theme=je,localStorage.setItem("quant_user",JSON.stringify(Le.value)))}function Ra(F){const ue=window.__quantModules&&window.__quantModules.preferences,pe=ue&&ue.getPreference?ue.getPreference("theme_hue"):null;fa(F,pe)}function za(F){Oe.value=parseInt(F,10);const ue=window.__quantModules&&window.__quantModules.preferences,pe=ue&&ue.getPreference&&ue.getPreference("theme")||"light";fa(pe,Oe.value)}const ga=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function Wt(F){ga.value=!!F;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",F?"show":"hide")}catch{}}const ba=e(()=>{const F=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ga.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...F]:F}),Jt=a("daily");(function(){try{const ue=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ue==="weekly"||ue==="monthly")&&(Jt.value=ue)}catch{}})();const wa=a(!1),ka=a(""),b=a(!1),s=a(!1),O=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),se=["MA5","MA10","MA20","MA60"],xe=a(!1);let Ee=0;async function mt(F){if(!de.value)return!1;const ue=++Ee;wa.value=!0,Jt.value=F;try{const je=await(await fetch(`/api/market/kline/${de.value.stock}?period=${F}&limit=60`)).json();if(!je.success||!je.data)throw new Error(je.message||"数据获取失败");return ka.value=je.degraded_from?"分钟数据("+je.degraded_from+")暂不可用, 已降级展示日线":"",$s(de.value.stock),ue!==Ee?!1:(A.value!=="kline"||(s.value=!0,await m(),window.__quantModules.charts.renderKlineTo("stockKlineChart",je.data,F,!1,{isMobile:ms.value,onLegend:Ue=>{Object.keys(O.value).forEach(It=>{It in Ue&&(O.value[It]=!!Ue[It])})}}),la()),!0)}catch(pe){return console.error("[kline] 加载失败:",de.value&&de.value.stock,F,pe),A.value==="kline"&&(s.value=!1,ka.value="",ElementPlus.ElMessage.error("K线加载失败: "+(pe&&pe.message?pe.message:"数据源不可达，请重试"))),!1}finally{wa.value=!1}}async function Je(F){if(Ua.value){b.value=!0,Jt.value=F;try{const pe=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${F}&limit=60`)).json();if(!pe.success||!pe.data)throw new Error(pe.message||"数据获取失败");xe.value=!0,await m(),window.__quantModules.charts.renderKlineTo("indexKlineChart",pe.data,F,!0,{isMobile:ms.value,onLegend:je=>{Object.keys(O.value).forEach(Ue=>{Ue in je&&(O.value[Ue]=!!je[Ue])})}}),la()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{b.value=!1}}}async function pt(F){if(!s.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await mt(F)}async function ea(F){if(!xe.value){ElementPlus.ElMessage.info("请先加载K线");return}await Je(F)}function Ct(F){const ue=(We.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ue&&ue.dispatchAction({type:"legendToggleSelect",name:F})}function la(){["K线","MA5","MA10","MA20","MA60"].forEach(F=>{O.value[F]=!0})}async function ta(){const F=await fetch("/api/system/metrics");if(!F.ok)throw new Error("metrics "+F.status);const ue=await F.json(),pe=Array.isArray(ue)?ue:ue&&ue.data_sources||[];S.value=pe}const Be=()=>ns,Dt=()=>Es,Ea=()=>jo,_a=()=>Aa,qt=()=>ts,Ka=window.__quantAppLogic.data.create({currentView:ke,statusFilter:Se,dashboardData:Vt,loadHealthMetrics:ta,getLoadDashboardData:Be,getLastRefreshTime:Dt,getFetchPoolSignals:Ea}),{loading:cl,loadingView:dl,viewCache:ul,dates:Ia,selectedDate:$t,lastLoadTime:vl,consensus:xa,viewNote:ml,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ma,loadDashboardCached:Na}=Ka,pl=window.__quantAppLogic.market.create({currentKlinePeriod:Jt,loadIndexKline:Je,rememberDialogTrigger:D,menus:te,currentPage:Te,currentSubPage:Ze,stockDetail:de,selectedDate:$t}),{marketData:fl,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:gl,indexAiLoading:hl,fetchMarketData:Ga,showIndexDetail:yl,loadCachedIndexEval:bl,doIndexAiEvaluate:wl,disposeStockKline:vs,isMobile:ms,zoomKlineRange:kl,scoreAnimating:_l,scoreDelta:xl,scorePulse:Sl,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Cl,onTouchEnd:ql}=pl,El=window.__quantAppLogic.ops.create({navigateTo:Qe,currentPage:Te,currentSubPage:Ze}),{feishuConfig:ps,feishuTestStatus:Ml,feishuTestMessage:Tl,testFeishuWebhook:Dl,saveFeishuConfig:Pl,aiFabHidden:Rl,openAiFab:fs,strategyRecommendations:zl,aiUsage:Al,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:Ll,analyticsRank:Il,analyticsDays:Nl,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Ol,loadHealthDetail:bs,reviewTriggering:jl,triggerMarketReview:Vl,factCheck:Fl,factCheckRunning:Hl,loadFactCheck:ws,triggerFactCheck:Bl,backups:Kl,backupCreating:Wl,loadBackups:ks,createBackup:Ul,restoreBackup:Gl,reportExporting:Yl,reportExportMsg:Jl,exportReport:Ql,tourVisible:$l,tourStep:Xl,tourSteps:Zl,maybeShowTour:ei,skipTour:ti,finishTour:ai,feedbackText:si,feedbackSubmitting:li,submitFeedback:ii}=El,ni=window.__quantAppLogic.nav.create({currentView:ke,selectedDate:$t,dates:Ia,loadConsensusData:Ma,hapticFeedback:l}),{viewUnit:oi,datePickerType:ri,dateFormat:ci,canNavPrev:di,canNavNext:ui,switchView:_s,navigateDate:xs,disabledDate:vi,onDateChange:mi}=ni,pi=window.__quantAppLogic.keys.create({menus:te,subPageNames:gt,navigateTo:Qe,currentPage:Te,currentView:ke,navigateDate:xs,switchView:_s,getLoadDashboardData:Be,refreshCalendarData:ds,getLoadAiHistory:_a,exportCSV:us,getShowBatchEvaluate:qt,openAiFab:fs,toggleSidebar:_e,showStockDetail:Cs}),{searchQuery:fi,searchStocks:gi,onSearchSelect:hi,shortcutHelpVisible:yi,commandPaletteVisible:bi,handleGlobalKeydown:Ss}=pi;let Oa=0;async function Cs(F){const ue=++Oa;D(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(F,""),Xa.value=null,Jt.value="daily",s.value=!1,A.value="kline",de.value=null,He.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),We.value=!0,m(()=>Ja());try{const pe=await fetch(`/api/calendar/stock/${F}?date=${$t.value}`);if(ue!==Oa)return;de.value=await pe.json(),de.value&&de.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(F,de.value.name)}catch{if(ue!==Oa)return;ElementPlus.ElMessage.error("加载失败"),de.value={stock:F,name:"",total_days:0}}finally{ue===Oa&&(He.value=!1)}setTimeout(async()=>{await mt("daily"),Ya()},500),as(F)}const wi={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},ki={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function _i(F){return wi[F]||"var(--text-tertiary)"}function xi(F){return ki[F]||"var(--bg-hover)"}const Si=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:s,stockDetailVisible:We,stockDetailTab:A,stockDetail:de,disposeStockKline:vs}):{},{chatSessions:Ci,chatHistoryView:qi,selectedChatIds:Ei,expandedChatDates:Mi,expandedChatMonths:Ti,expandedChatStocks:Di,chatHistoryLoading:Pi,chatHistoryError:Ri,allChatSessionsFlat:zi,chatGroupedByDate:Ai,chatGroupedByMonth:Li,chatGroupedByStock:Ii,toggleSelectChat:Ni,toggleSelectChatDate:Oi,toggleSelectChatMonth:ji,toggleSelectChatStock:Vi,toggleChatDateExpand:Fi,toggleChatMonthExpand:Hi,toggleChatStockExpand:Bi,selectAllChatSessions:Ki,deleteSelectedChatSessions:Wi,viewChatSession:Ui,loadChatHistory:qs,deleteChatSession:Gi,renderMarkdown:Yi,stockChatInput:Ji,stockChatMessages:Qi,stockChatLoading:$i,stockChatError:Xi,askStockSend:Zi,askStockQuick:en}=Si,tn=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:Le,applyTheme:Zt,allMenuDefs:re,loadGroupConfig:ge}):{},{userList:an,userSearch:sn,groupFilter:ln,userPageTab:nn,expandedGroups:on,addMemberGroupMap:rn,filteredUsers:cn,toggleGroupExpand:dn,removeMemberFromGroupInline:un,addMemberToGroupInline:vn,changeUserGroup:mn,showAddUser:pn,editingUser:fn,userForm:gn,savingUser:hn,editingGroup:yn,menuConfigDialog:bn,memberDialog:wn,groupEditForm:kn,subPageCache:_n,showAddGroup:xn,addGroupForm:Sn,savingGroup:Cn,groupMembers:qn,addMemberUsername:En,selectedMemberGroup:Mn,subPageSectionExpanded:Tn,toggleSubPageSection:Dn,getGroupMemberCount:Pn,getMenuEnabledCount:Rn,groupCount:zn,openMemberManager:An,loadGroupMembers:Ln,addMemberToGroup:In,removeMemberFromGroup:Nn,availableUsersForGroup:On,onParentToggle:jn,openMenuConfig:Vn,saveMenuConfig:Fn,deleteGroupConfig:Hn,createGroup:Bn,allGroups:Kn,getGroupName:Wn,loadAllGroups:$a,loadUsers:ja,editUser:Un,saveUser:Gn,deleteUser:Yn,toggleUserEnabled:Jn,resetUserPassword:Qn}=tn,$n=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:xa,currentPage:Te,currentSubPage:Ze,dashboardData:Vt,searchKeyword:zt,statusFilter:Se,strategyFilter:Tt,strategyFilterCounts:sa}):{},{applyStrategyFilter:qf,statusCounts:Xn,stockPool:Zn,strategyDistribution:eo,strategyPreviewCount:to,saveStrategyFilter:ao,filteredConsensusRank:so,currentPoolSize:lo,filteredStrategyCounts:io,poolChangeBadge:no,timeBarPercent:oo,lastRefreshTime:Es,timeSinceRefresh:ro,navigateToStrategyFilter:co}=$n,uo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:P,consensus:xa}):{},{aiResult:Xa,lastEvalTime:vo,evalHistoryComparison:mo,checklistItems:po,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ds,expandedMonths:fo,expandedStocks:Ps,poolSignals:go,toggleMonthExpand:ho,aiHistoryView:yo,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:bo,aiCatalog:wo,aiModelsError:ko,testingAllModels:_o,savingAiModels:xo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:So,testVendorModel:Co,testAllVendorModels:qo,fetchVendorModels:Eo,addVendorFromCatalog:Mo,addCustomVendor:To,addVendorModel:Do,removeVendorModel:Po,removeVendor:Ro,toggleVendorKeyReveal:zo,toggleVendorEdit:Ao,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:Lo,providerInfo:Io,aiPresets:Ef,applyPreset:No,onProviderChange:Oo,fetchPoolSignals:jo,cancelPoolSignals:Qs,loadLastEvaluation:as}=uo,Vo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:Le,selectedDate:$t,stockDetail:de,stockDetailTab:A,stockDetailVisible:We,stockDetailLoading:He,stockKlineLoaded:s,viewCache:ul,animateScoreEntrance:Ja,loadStockKline:mt,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ds,expandedStocks:Ps,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Fo,evalStrategy:Ho,watchlistSort:Bo,watchlist:Ko,watchlistCodes:Wo,sortedWatchlist:Uo,getWatchlistScore:Go,getLatestScore:Mf,addSearchResult:Yo,evaluatedCodes:Jo,klineLoadedCodes:Qo,markKlineLoaded:$s,watchlistSearch:$o,watchlistResults:Xo,watchlistSearching:Zo,dataRefreshConfig:er,dataRefreshReloading:tr,dataRefreshSaving:ar,aiHistoryLoading:sr,aiHistoryError:lr,aiHistoryTotal:ir,aiHistoryLoadingMore:nr,hasMoreAiHistory:or,loadMoreAiHistory:rr,watchlistLoading:cr,doAiEvaluate:dr,loadAiHistory:Aa,deleteSingleHistory:ur,toggleSelectHistory:vr,clearSelection:mr,clearWatchlistSelection:pr,batchReevaluateHistory:fr,batchAddToWatchlist:gr,batchRemoveWatchlist:hr,toggleSelectWatchlist:yr,selectAllHistory:br,selectAllWatchlist:wr,deleteSelectedHistory:kr,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:_r,loadWatchlist:Zs,addToWatchlist:xr,removeFromWatchlist:Sr,clearWatchlist:Cr,toggleWatchlist:qr,showStockKline:Er,preloadingKline:Mr,preloadWatchlistKline:el,watchlistEvaluate:Tr,batchEvaluateWatchlist:Dr,batchEvaluateSelected:Pr,searchStockForWatchlist:Rr,loadDataRefreshConfig:tl,saveDataRefreshConfig:zr,triggerDataReload:Ar,triggerDataPull:Lr,dataPullRunning:Ir,groupedByDate:Nr,aiHistoryByStock:Or,groupedByMonth:jr,aiHistoryStockCount:Vr,scoreDistribution:Fr,quickEvaluate:Hr,toggleDateExpand:Br,toggleSelectDate:Kr,toggleSelectMonth:Wr,toggleStockExpand:Ur,toggleSelectStock:Gr,registerTrendChart:Yr,viewAiResult:Jr,doBatchEvaluate:Qr,realtimeQuotes:$r,realtimeDegraded:Xr,realtimeWsState:Zr,connectRealtimeQuotes:ec,disconnectRealtimeQuotes:tc,quoteWarningFor:ac,realtimeQuoteColor:sc,realtimePriceText:lc,realtimePctText:ic,realtimeRatioText:nc,REALTIME_DEGRADED_TEXT:oc,REALTIME_FALLBACK_TEXT:rc}=Vo,cc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:he}):{},{btStrategyOptions:dc,btSelectedStrategies:uc,toggleBtStrategy:vc,btDateRange:mc,btCapital:pc,btCommissionRate:fc,btIncludeBenchmark:gc,btRunning:hc,btResult:yc,btError:bc,btMetrics:wc,btAnnualReturns:kc,btTrades:_c,btStrategyMetricsRows:xc,btDrawdownRegion:Sc,runBacktestWorkbench:Cc,exportBacktestCSV:qc,registerBacktestNavChart:Ec,btFmtNum:Mc}=cc,Tc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:P,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:Qt,changeTheme:fa,autoEvaluateConfig:Za,currentUser:Le,strategyFilter:Tt,applyTheme:Zt,dashboardData:Vt,lastRefreshTime:Es,saveAiModels:So}):{},{configSaving:Dc,globalConfigDirty:Pc,lastSavedTime:Rc,feishuConfigOriginal:Tf,aiConfigOriginal:Df,tushareConfigOriginal:Pf,tushareConfig:zc,tushareStatus:Ac,datasourceConfig:Lc,datasourceStatus:Ic,syncingData:Nc,stockCount:Oc,tradeDateCount:jc,aiStatus:Vc,appVersion:al,showImportDialog:Fc,rateLimitConfig:Hc,rateLimitDirty:Bc,rateLimitSaving:Kc,loadRateLimit:ss,saveRateLimit:Wc,saveAiConfig:Uc,testAiApi:Gc,exportConfig:Yc,importConfig:Jc,saveAllConfig:Qc,resetAllConfig:$c,testTushareConnection:Xc,checkTushareConnection:Fa,syncStockData:Zc,loadTushareConfig:sl,loadDatasourceConfig:ll,saveDatasourceConfig:ed,testDatasource:td,toggleDatasourceKeyReveal:ad,toggleDatasourceEdit:sd,loadFeishuConfig:ls,loadAiConfig:Ha,loadUserConfig:il,loadSystemStatus:is,loadDashboardData:ns}=Tc,ld=window.__quantAppLogic.auth.create({currentUser:Le,loadUserConfig:il,loadDates:cs,loadDashboardData:ns,loadDashboardCached:Na,loadHealthMetrics:ta,loadConsensusData:Ma,applyTheme:Zt,maybeShowTour:ei,loadAiVendors:Va}),{loginForm:id,logining:nd,guestLogining:od,showChangePassword:rd,changePasswordForm:cd,changingPassword:dd,showSetupWizard:ud,setupForm:vd,setupStep:md,checkSetupWizard:pd,completeSetupWizard:fd,resetSetupWizard:gd,handleLogin:hd,handleGuestLogin:yd,handleLogout:bd,doChangePassword:wd}=ld;window.__quantAppLogic.watch.register({strategyFilter:Tt,currentView:ke,statusFilter:Se,currentPage:Te,currentSubPage:Ze,menus:te,currentUser:Le,strategyFilterCounts:sa,lazyTick:Nt,dates:Ia,selectedDate:$t,consensus:xa,loadConsensusData:Ma,fetchMerrillClock:T,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:Aa,preloadWatchlistKline:el,loadChatHistory:qs,loadSystemStatus:is,checkTushareConnection:Fa,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:ta,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:ll,loadFeishuConfig:ls,loadAiConfig:Ha,loadAiVendors:Va,loadRateLimit:ss,loadDataRefreshConfig:tl,loadBackups:ks,loadAllGroups:$a,loadUsers:ja,stockDetailTab:A,stockDetailVisible:We,stockKlineLoaded:s,loadStockKline:mt,currentKlinePeriod:Jt,showMerrillDetail:G,indexDetailVisible:Wa,restoreDialogFocus:_});const kd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:Zt,menus:te,currentPage:Te,currentSubPage:Ze,currentView:ke,currentKlinePeriod:Jt,selectedDate:$t,dates:Ia,loadDates:cs,loadConsensusData:Ma,loadDashboardCached:Na,appVersion:al,themes:ma,fetchMarketData:Ga,fetchMerrillStages:$,fetchMerrillClock:T,loadMerrillTimeline:Y,showTimelineStage:K,merrillTimeline:Q,timelineLoading:X,loadAiConfig:Ha,loadAiVendors:Va,loadAiCatalog:Is,currentUser:Le,loadUserConfig:il,loadAutoEvaluateConfig:Xs,loadGroupConfig:ge,loadUsers:ja,loadAllGroups:$a,loadAiHistory:Aa}),{runOnMounted:_d}=kd;window.__quantGoPage=async(F,ue)=>{try{const pe=window.__lazyLoaders&&window.__lazyLoaders[F];pe&&await pe()}catch(pe){console.warn("[lazy] 页面组件加载失败",F,pe)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(pe=>{pe&&pe.name&&!pe.__quantRegistered&&(window.__quantApp.component(pe.name,pe),pe.__quantRegistered=!0)}),Nt&&Nt.value++,Te.value=F,ue&&(Ze.value=ue)};let Ta;d(Te,async F=>{var ue;l("light");try{const pe=re.find(function(je){return je.key===F});document.title=(pe?pe.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",F),F!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:F})}).catch(()=>{})}catch(pe){console.warn("pageView track failed:",pe)}if(Ta&&(clearInterval(Ta),Ta=null),F==="strategies")await Na(),Ta=setInterval(()=>{Na().catch(()=>{})},5*60*1e3);else if(F==="calendar")$t.value&&await Ma();else if(F==="ai")gs(),Qa(),await Aa();else if(F==="system"){if(!$t.value){const je=await(await fetch("/api/dashboard")).json(),Ue=je.data||je;Ue.latest_date&&($t.value=Ue.latest_date)}if($t.value){const pe=["day","week","month","year"];for(const je of pe)try{const It=await(await fetch(`/api/view/${je}/${$t.value}?status=all`)).json();sa.value[je]=It.stocks||[]}catch(Ue){console.warn("loadConsensusData view load failed:",Ue)}(!xa.value||xa.value.length===0)&&(xa.value=sa.value.day||[])}((ue=Le.value)==null?void 0:ue.role)==="admin"&&(await ja(),await ls(),await sl(),await is(),await Ha(),await ss(),Fa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Fa,36e5)))}}),p(async()=>{await _d()}),Me(),Y(),t(()=>{Ta&&clearInterval(Ta),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",va)});function xd(F,ue=2){return F==null||F===""||isNaN(Number(F))?"--":Number(F).toFixed(ue)}return{currentPage:Te,pageComp:yt,currentSubPage:Ze,sidebarCollapsed:le,menus:te,navMode:Ke,setNavMode:rt,tabGroups:at,openTab:ua,closeTab:na,activateTab:Xt,fmtNum:xd,sanitizeHtml:h,keyClick:g,isOnline:o,currentUser:Le,allMenuDefs:re,t:x,locale:n,changeLanguage:i,currentPageName:jt,subPageNames:gt,searchQuery:fi,searchStocks:gi,onSearchSelect:hi,selectedDate:$t,onDateChange:mi,disabledDate:vi,refreshCalendarData:ds,exportCSV:us,viewNote:ml,loading:cl,lastLoadTime:vl,resetSetupWizard:gd,showChangePassword:rd,themes:ma,currentTheme:Qt,changeTheme:fa,changeThemeMode:Ra,changeThemeHue:za,handleLogout:bd,themeHues:N,themeHueNames:ye,themeHue:Oe,themeMode:De,hueColor:st,hueName:et,marketData:fl,merrillData:j,merrillTimeline:Q,timelineLoading:X,merrillStagesConfig:B,fetchMerrillStages:$,healthMetrics:S,feishuConfig:ps,feishuTestStatus:Ml,feishuTestMessage:Tl,shortcutHelpVisible:yi,shortcutHelpItems:dt,commandPaletteVisible:bi,tourVisible:$l,tourStep:Xl,tourSteps:Zl,skipTour:ti,finishTour:ai,backups:Kl,backupCreating:Wl,loadBackups:ks,createBackup:Ul,restoreBackup:Gl,reportExporting:Yl,reportExportMsg:Jl,exportReport:Ql,sysMonitor:Ll,analyticsRank:Il,analyticsDays:Nl,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Ol,loadHealthDetail:bs,reviewTriggering:jl,triggerMarketReview:Vl,factCheck:Fl,factCheckRunning:Hl,loadFactCheck:ws,triggerFactCheck:Bl,strategyRecommendations:zl,aiUsage:Al,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:Rl,openAiFab:fs,feedbackText:si,feedbackSubmitting:li,submitFeedback:ii,backtestStrategies:he,backtestStrategy:we,backtestRange:Re,backtestCapital:Ae,backtestRunning:Ge,backtestResult:Xe,runBacktest:xt,btStrategyOptions:dc,btSelectedStrategies:uc,toggleBtStrategy:vc,btDateRange:mc,btCapital:pc,btCommissionRate:fc,btIncludeBenchmark:gc,btRunning:hc,btResult:yc,btError:bc,btMetrics:wc,btAnnualReturns:kc,btTrades:_c,btStrategyMetricsRows:xc,btDrawdownRegion:Sc,runBacktestWorkbench:Cc,exportBacktestCSV:qc,registerBacktestNavChart:Ec,btFmtNum:Mc,fetchMarketData:Ga,fetchMerrillClock:T,testFeishuWebhook:Dl,saveFeishuConfig:Pl,merrillClockConfig:ae,merrillClockLastUpdated:L,merrillReevalResult:E,merrillReevalLoading:R,saveMerrillClockConfig:be,doMerrillReevaluate:Pe,dataRefreshConfig:er,dataRefreshReloading:tr,dataRefreshSaving:ar,loadDataRefreshConfig:tl,saveDataRefreshConfig:zr,triggerDataReload:Ar,triggerDataPull:Lr,dataPullRunning:Ir,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:gl,indexAiLoading:hl,loadCachedIndexEval:bl,showIndexDetail:yl,doIndexAiEvaluate:wl,klinePeriods:ba,currentKlinePeriod:Jt,klineLoading:wa,indexKlineLoading:b,stockKlineLoaded:s,indexKlineLoaded:xe,klineDegradeNote:ka,klineShowMinutes:ga,toggleKlineShowMinutes:Wt,loadStockKline:mt,switchKlinePeriod:pt,loadIndexKline:Je,switchIndexKlinePeriod:ea,zoomKlineRange:kl,MA_LINES:se,klineMaVisible:O,toggleKlineMa:Ct,scoreAnimating:_l,scoreDelta:xl,scorePulse:Sl,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:G,merrillDetailData:J,showStageDetail:ee,getCharLabel:u,getAssetName:H,getRankColor:ce,levelColor:_i,levelBg:xi,timelineStages:V,getStageAngle:oe,getCycleProgress:U,getCurrentStageMonths:y,getStageTotalMonths:r,isStageCompleted:q,stages:W,indicatorList:ie,dimensionScoreList:Z,confidenceColor:I,views:me,currentView:ke,statusFilter:Se,loginForm:id,logining:nd,guestLogining:od,dashboardData:Vt,loadingView:dl,dates:Ia,consensus:xa,searchKeyword:zt,stockDetailVisible:We,stockDetailTab:A,stockDetail:de,stockDetailLoading:He,detailDisplayMode:$e,setDetailDisplayMode:Ft,isNarrow:ot,detailSplitEnabled:kt,splitWidth:St,setSplitWidth:Rt,SPLIT_DEFAULT_PCT:Mt,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:an,showAddUser:pn,editingUser:fn,userForm:gn,savingUser:hn,userSearch:sn,filteredUsers:cn,groupFilter:ln,userPageTab:nn,expandedGroups:on,addMemberGroupMap:rn,toggleGroupExpand:dn,removeMemberFromGroupInline:un,addMemberToGroupInline:vn,changeUserGroup:mn,statusCounts:Xn,stockPool:Zn,poolSignals:go,aiResult:Xa,aiHistory:Ms,groupedByDate:Nr,groupedByMonth:jr,expandedDates:Ds,expandedMonths:fo,aiHistoryByStock:Or,aiHistoryStockCount:Vr,expandedStocks:Ps,aiHistoryView:yo,aiHistoryLoading:sr,aiHistoryError:lr,aiHistoryTotal:ir,aiHistoryLoadingMore:nr,hasMoreAiHistory:or,loadMoreAiHistory:rr,watchlistLoading:cr,scoreDistribution:Fr,quickEvalStock:Fo,evalStrategy:Ho,checklistItems:po,evalHistoryComparison:mo,quickEvaluate:Hr,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:Kt,toggleDateExpand:Br,toggleMonthExpand:ho,toggleSelectDate:Kr,toggleSelectMonth:Wr,toggleSelectStock:Gr,toggleStockExpand:Ur,registerTrendChart:Yr,selectedWatchlistCodes:Rs,clearWatchlistSelection:pr,toggleSelectWatchlist:yr,selectAllHistory:br,selectAllWatchlist:wr,batchRemoveWatchlist:hr,batchEvaluateSelected:Pr,batchReevaluateHistory:fr,batchAddToWatchlist:gr,viewUnit:oi,datePickerType:ri,dateFormat:ci,canNavPrev:di,canNavNext:ui,handleLogin:hd,handleGuestLogin:yd,switchView:_s,navigateDate:xs,navigateTo:Qe,loadDashboardData:ns,loadConsensusData:Ma,showStockDetail:Cs,doAiEvaluate:dr,doBatchEvaluate:Qr,loadAiHistory:Aa,loadLastEvaluation:as,lastEvalTime:vo,viewAiResult:Jr,saveAiConfig:Uc,testAiApi:Gc,exportConfig:Yc,importConfig:Jc,configSaving:Dc,configChanged:P,watchlist:Ko,watchlistCodes:Wo,watchlistSearch:$o,watchlistResults:Xo,watchlistSearching:Zo,watchlistSort:Bo,sortedWatchlist:Uo,getWatchlistScore:Go,addSearchResult:Yo,evaluatedCodes:Jo,klineLoadedCodes:Qo,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:xr,removeFromWatchlist:Sr,clearWatchlist:Cr,searchStockForWatchlist:Rr,toggleWatchlist:qr,batchEvaluateWatchlist:Dr,watchlistEvaluate:Tr,showStockKline:Er,preloadWatchlistKline:el,preloadingKline:Mr,realtimeQuotes:$r,realtimeDegraded:Xr,realtimeWsState:Zr,connectRealtimeQuotes:ec,disconnectRealtimeQuotes:tc,quoteWarningFor:ac,realtimeQuoteColor:sc,realtimePriceText:lc,realtimePctText:ic,realtimeRatioText:nc,REALTIME_DEGRADED_TEXT:oc,REALTIME_FALLBACK_TEXT:rc,toggleSelectHistory:vr,clearSelection:mr,deleteSingleHistory:ur,deleteSelectedHistory:kr,saveAutoEvaluateConfig:_r,editUser:Un,saveUser:Gn,deleteUser:Yn,loadUsers:ja,allGroups:Kn,loadAllGroups:$a,getGroupName:Wn,toggleUserEnabled:Jn,resetUserPassword:Qn,selectedPreset:Lo,applyPreset:No,onProviderChange:Oo,providerInfo:Io,globalConfigDirty:Pc,lastSavedTime:Rc,tushareConfig:zc,tushareStatus:Ac,syncingData:Nc,stockCount:Oc,tradeDateCount:jc,aiStatus:Vc,appVersion:al,showImportDialog:Fc,rateLimitConfig:Hc,rateLimitDirty:Bc,rateLimitSaving:Kc,loadRateLimit:ss,saveRateLimit:Wc,saveAllConfig:Qc,resetAllConfig:$c,testTushareConnection:Xc,syncStockData:Zc,loadTushareConfig:sl,loadFeishuConfig:ls,loadSystemStatus:is,loadAiConfig:Ha,aiVendors:bo,aiCatalog:wo,aiModelsError:ko,testingAllModels:_o,savingAiModels:xo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:Co,testAllVendorModels:qo,fetchVendorModels:Eo,addVendorFromCatalog:Mo,addCustomVendor:To,addVendorModel:Do,removeVendorModel:Po,removeVendor:Ro,toggleVendorKeyReveal:zo,toggleVendorEdit:Ao,checkTushareConnection:Fa,datasourceConfig:Lc,datasourceStatus:Ic,loadDatasourceConfig:ll,saveDatasourceConfig:ed,testDatasource:td,toggleDatasourceKeyReveal:ad,toggleDatasourceEdit:sd,strategyFilter:Tt,strategyFilterOptions:pa,strategyFilterCounts:sa,strategyPreviewCount:to,saveStrategyFilter:ao,filteredConsensusRank:so,currentPoolSize:lo,filteredStrategyCounts:io,strategyDistribution:eo,expandedStrategies:ya,poolChangeBadge:no,timeBarPercent:oo,timeSinceRefresh:ro,navigateToStrategyFilter:co,showUserMenu:ut,toggleSidebar:_e,groupsConfig:ze,loadGroupConfig:ge,editingGroup:yn,groupEditForm:kn,showAddGroup:xn,addGroupForm:Sn,savingGroup:Cn,menuConfigDialog:bn,memberDialog:wn,groupMembers:qn,addMemberUsername:En,selectedMemberGroup:Mn,subPageSectionExpanded:Tn,toggleSubPageSection:Dn,getGroupMemberCount:Pn,getMenuEnabledCount:Rn,groupCount:zn,openMemberManager:An,loadGroupMembers:Ln,addMemberToGroup:In,removeMemberFromGroup:Nn,availableUsersForGroup:On,subPageCache:_n,onParentToggle:jn,openMenuConfig:Vn,saveMenuConfig:Fn,deleteGroupConfig:Hn,createGroup:Bn,changePasswordForm:cd,changingPassword:dd,doChangePassword:wd,showSetupWizard:ud,setupForm:vd,setupStep:md,checkSetupWizard:pd,completeSetupWizard:fd,chatSessions:Ci,chatHistoryView:qi,selectedChatIds:Ei,expandedChatDates:Mi,expandedChatMonths:Ti,expandedChatStocks:Di,chatHistoryLoading:Pi,chatHistoryError:Ri,allChatSessionsFlat:zi,chatGroupedByDate:Ai,chatGroupedByMonth:Li,chatGroupedByStock:Ii,toggleSelectChat:Ni,toggleSelectChatDate:Oi,toggleSelectChatMonth:ji,toggleSelectChatStock:Vi,toggleChatDateExpand:Fi,toggleChatMonthExpand:Hi,toggleChatStockExpand:Bi,selectAllChatSessions:Ki,deleteSelectedChatSessions:Wi,viewChatSession:Ui,loadChatHistory:qs,deleteChatSession:Gi,renderMarkdown:Yi,stockChatInput:Ji,stockChatMessages:Qi,stockChatLoading:$i,stockChatError:Xi,askStockSend:Zi,askStockQuick:en,onTouchStart:Cl,onTouchEnd:ql,hapticFeedback:l}}})();Ca.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=tm;window.__quantComponents.Header=Xm;window.__quantComponents.SubNav=up;window.__quantComponents.MobileNav=Dp;window.__quantComponents.StockList=uf;window.__quantComponents.DetailSplit=ff;window.__quantComponents.TopTabs=Sf;window.__quantComponents.AppIcon=Ca;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Cf();
