var nd=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as od,L as ue,O as ma,Z as rd,au as Jt,M as ge,P as _e,aW as cd,a0 as Oe,_ as Be,F as ut,al as St,S as pt,a1 as mt,X as Ta,ai as Mt,q as _a,o as es,a8 as ts,r as Ft,e as nt,av as dd,Y as Ma,$ as ka,R as ud,aC as Yt,T as vd,Q as da}from"./vendor-vue-DDF9zi1T.js";import{e as md,E as pd,a as fd,b as gd,c as hd,z as yd}from"./vendor-ep-VOop1zGa.js";import{C as bd,F as wd,P as kd,a as _d,b as xd,c as Sd,T as Cd,S as qd,L as Ed,d as Md,G as Td,U as Pd,e as Dd,f as Rd,g as zd,D as Ad,B as Ld,h as Id,M as Nd,i as Od,R as jd,j as Fd,k as Vd,K as Hd,l as Kd,W as Bd,m as Wd,n as Ud,o as Gd,p as Yd,q as Jd,r as Qd,s as $d,t as Xd,O as Zd,u as eu,v as tu,w as au,x as su,y as lu,z as iu,A as nu,E as ou,H as ru,I as cu,J as du,N as uu,Q as vu,V as mu,X as pu,Y as fu,Z as gu,_ as hu,$ as yu,a0 as bu,a1 as wu,a2 as ku,a3 as _u,a4 as xu,a5 as Su,a6 as Cu,a7 as qu,a8 as Eu,a9 as Mu,aa as Tu,ab as Pu,ac as Du,ad as Ru,ae as zu,af as Au,ag as Lu,ah as Iu,ai as Nu,aj as Ou,ak as ju,al as Fu,am as Vu,an as Hu,ao as Ku,ap as Bu,aq as Wu,ar as Uu,as as Gu,at as Yu,au as Ju,av as Qu,aw as $u,ax as Xu,ay as Zu,az as ev,aA as tv,aB as av,aC as sv,aD as lv,aE as iv,aF as nv,aG as ov}from"./vendor-lucide-CnYCvXhM.js";var Op=nd((Qp,Pe)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))t(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const L of b.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&t(L)}).observe(document,{childList:!0,subtree:!0});function p(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function t(y){if(y.ep)return;y.ep=!0;const b=p(y);fetch(y.href,b)}})();window.Vue=od;const na=md||{};window.ElementPlus=na;na.ElMessage=na.ElMessage||pd;na.ElMessageBox=na.ElMessageBox||fd;na.ElNotification=na.ElNotification||gd;na.ElLoading=na.ElLoading||hd;window.ElementPlusLocaleZhCn={default:yd};(function(){const a=[45,220,0,140,270,320],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},p={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(l,T,k){return"hsl("+l+", "+T+"%, "+k+"%)"}function y(l,T,k){T=T/100,k=k/100;const C=function(n){return(n+l/30)%12},q=T*Math.min(k,1-k),w=function(n){return k-q*Math.max(-1,Math.min(C(n)-3,Math.min(9-C(n),1)))};return Math.round(255*w(0))+", "+Math.round(255*w(8))+", "+Math.round(255*w(4))}function b(l){const T=y(l,75,42);return{"--primary-color":t(l,75,42),"--primary-rgb":T,"--color-primary":t(l,75,42),"--qc-primary":t(l,75,42),"--qc-primary-50":t(l,90,96),"--qc-primary-100":t(l,85,92),"--qc-primary-200":t(l,80,84),"--qc-primary-300":t(l,75,72),"--qc-primary-400":t(l,70,58),"--qc-primary-500":t(l,75,48),"--qc-primary-600":t(l,80,42),"--qc-primary-700":t(l,85,35),"--qc-primary-800":t(l,88,28),"--qc-primary-900":t(l,90,20),"--qc-primary-foreground":"#ffffff","--text-link":t(l,70,40),"--secondary-color":t(l,70,55),"--card-border":t(l,55,82),"--bg-selected":"rgba("+T+", 0.08)","--btn-primary-bg":t(l,80,42),"--btn-primary-border":t(l,80,42),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(l,82,36),"--btn-primary-hover-border":t(l,82,36),"--btn-primary-active-bg":t(l,85,30),"--btn-primary-active-border":t(l,85,30),"--btn-primary-plain-bg":"rgba("+T+", 0.08)","--btn-primary-plain-border":"rgba("+T+", 0.25)","--btn-primary-plain-color":t(l,80,42),"--btn-primary-plain-hover-bg":"rgba("+T+", 0.15)","--btn-primary-plain-hover-border":t(l,80,42),"--btn-primary-text-color":t(l,80,42),"--gradient":"linear-gradient(135deg, "+t(l,80,30)+" 0%, "+t(l,75,42)+" 50%, "+t(l,70,55)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,75,42)+" 0%, "+t(l,85,30)+" 100%)","--qc-nav-item-active":t(l,80,35),"--qc-nav-item-active-bg":t(l,85,92),"--qc-nav-item-active-border":t(l,75,48),"--qc-nav-badge-bg":t(l,85,92),"--qc-nav-badge-text":t(l,80,35),"--qc-ring":t(l,70,58)}}function L(l){const T=y(l,85,65);return{"--primary-color":t(l,85,65),"--primary-rgb":T,"--color-primary":t(l,85,65),"--qc-primary":t(l,90,65),"--qc-primary-50":t(l,50,18),"--qc-primary-100":t(l,55,22),"--qc-primary-200":t(l,55,26),"--qc-primary-300":t(l,60,30),"--qc-primary-400":t(l,65,38),"--qc-primary-500":t(l,80,52),"--qc-primary-600":t(l,90,65),"--qc-primary-700":t(l,92,72),"--qc-primary-800":t(l,90,80),"--qc-primary-900":t(l,92,88),"--qc-primary-foreground":"#101014","--text-link":t(l,85,65),"--secondary-color":t(l,70,60),"--card-border":t(l,30,25),"--bg-selected":"rgba("+T+", 0.10)","--btn-primary-bg":t(l,85,65),"--btn-primary-border":t(l,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(l,80,72),"--btn-primary-hover-border":t(l,80,72),"--btn-primary-active-bg":t(l,75,80),"--btn-primary-active-border":t(l,75,80),"--btn-primary-plain-bg":"rgba("+T+", 0.08)","--btn-primary-plain-border":"rgba("+T+", 0.25)","--btn-primary-plain-color":t(l,85,65),"--btn-primary-plain-hover-bg":"rgba("+T+", 0.15)","--btn-primary-plain-hover-border":t(l,85,65),"--btn-primary-text-color":t(l,85,65),"--gradient":"linear-gradient(135deg, "+t(l,80,35)+" 0%, "+t(l,85,50)+" 50%, "+t(l,85,65)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,85,65)+" 0%, "+t(l,80,40)+" 100%)","--qc-nav-item-active":t(l,85,65),"--qc-nav-item-active-bg":"rgba("+T+", 0.10)","--qc-nav-item-active-border":t(l,85,65),"--qc-nav-badge-bg":"rgba("+T+", 0.12)","--qc-nav-badge-text":t(l,85,65),"--qc-ring":t(l,85,65)}}function c(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function r(l){return l=parseInt(l,10),isNaN(l)?45:Math.max(0,Math.min(359,l))}function g(l,T){let k=l||"light",C=T==null||T===""?null:T;if(e[l]){const i=e[l];k=i[0],C==null&&(C=i[1])}k==="system"&&(k=c()?"dark":"light");const q=k==="dark";C=r(C??45);const w=document.documentElement;w.setAttribute("data-theme",q?"dark-pro":"gold"),w.setAttribute("data-theme-mode",q?"dark":"light");const n=q?L(C):b(C);Object.keys(n).forEach(function(i){w.style.setProperty(i,n[i])});try{localStorage.setItem("quant_theme_mode",q?"dark":"light"),localStorage.setItem("quant_theme_hue",String(C))}catch{}return{mode:q?"dark":"light",hue:C}}function v(){const l=localStorage.getItem("quant_theme");if(!l||!e[l]||localStorage.getItem("quant_theme_hue")!==null)return null;const T=e[l];return{mode:T[0],hue:T[1]}}function P(){const l=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let T=l.theme||"system",k=l.theme_hue!=null&&l.theme_hue!==""?l.theme_hue:null;const C=v();return k==null&&C&&(T=C.mode,k=C.hue),k==null&&(k=45),g(T,k)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:p,generateLightTokens:b,generateDarkTokens:L,migrateLegacyTheme:v,applyTheme:g,init:P},P()})();(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],p={};let t=a,y=null;function b(){return y&&typeof y=="object"&&"value"in y?y.value||a:t}function L(l,T){return e.indexOf(l)===-1?!1:(p[l]=T&&typeof T=="object"?T:{},!0)}function c(l){const T=e.indexOf(l)!==-1?l:a;return t=T,y&&typeof y=="object"&&"value"in y&&(y.value=T),typeof document<"u"&&document.documentElement.setAttribute("lang",T),t}function r(){return b()}function g(l){if(l&&typeof l=="object"&&"value"in l){y=l;const T=e.indexOf(l.value)!==-1?l.value:a;l.value=T,t=T}return t}function v(l,T){const k=b(),C=p[k]||{};let q=l in C?C[l]:null;if(q==null&&k!=="en"){const w=p.en||{};q=l in w?w[l]:null}return q==null&&(q=String(l)),T&&typeof T=="object"&&Object.keys(T).forEach(function(w){q=q.replace(new RegExp("\\{"+w+"\\}","g"),String(T[w]))}),q}const P={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:p,registerLocale:L,setLocale:c,getLocale:r,bindLocale:g,t:v};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=P),P});(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"功能配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级（默认）","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Features","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"功能配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級（預設）","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"★ 已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let p=[];function t(k){const C=String(k||"");let q="";for(const w of C){const n=a[w];n?q+=n.charAt(0):/[a-zA-Z0-9]/.test(w)&&(q+=w.toLowerCase())}return q}function y(k){const C=String(k||"");let q="";for(const w of C){const n=a[w];n?q+=n:/[a-zA-Z0-9]/.test(w)&&(q+=w.toLowerCase())}return q}function b(k){return String(k||"").trim().toLowerCase()}function L(k,C){const q=(C.code||"").toLowerCase();return/^\d+$/.test(k)?q.indexOf(k)!==-1:/[\u4e00-\u9fa5]/.test(k)?(C.name||"").toLowerCase().indexOf(k)!==-1:q.indexOf(k)!==-1||(C.initials||t(C.name)).indexOf(k)!==-1||(C.pinyin||y(C.name)).indexOf(k)!==-1}function c(k){const C={},q=[],w=function(n,i,m){!n||C[n]||(C[n]=!0,q.push({code:n,name:i||n,source:m||"core",initials:t(i||n),pinyin:y(i||n)}))};return e.forEach(function(n){w(n.code,n.name,"core")}),(k||[]).forEach(function(n){w(n.code,n.name,"extra")}),q}function r(k,C){const q=b(k);if(!q||!C||!C.length)return[];const w=q.split(/[\s,，、;；]+/).filter(Boolean);return w.length?C.filter(function(n){return w.every(function(i){return L(i,n)})}).slice(0,20).map(function(n){return{code:n.code,name:n.name,source:n.source||"core"}}):[]}function g(k){Array.isArray(k)&&(p=p.concat(k))}function v(){return p.slice()}function P(){return c(p)}function l(k){return r(k,P())}const T={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:y,normalizeQuery:b,matchToken:L,buildStockIndex:c,searchStocksByQuery:r,registerExtraStocks:g,getExtraStocks:v,getStockIndex:P,searchCoreStocks:l};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=T),T});(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},p=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function y(i){return i=parseInt(i,10),!isNaN(i)&&i>=0&&i<=360}const b={light:"classic-white",dark:"dark-pro"};function L(){if(typeof localStorage>"u")return{};try{const i=localStorage.getItem(a);if(!i)return{};const m=JSON.parse(i);return m&&typeof m=="object"?m:{}}catch{return{}}}function c(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(i))}catch{}}function r(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function g(){const i=Object.assign({},e,L()),m={};return p.forEach(function(H){const I=i[H];m[H]=H==="theme_hue"?y(I)?parseInt(I,10):e[H]:t[H].indexOf(I)!==-1?I:e[H]}),m}function v(i){if(p.indexOf(i)!==-1)return g()[i]}function P(i,m){return p.indexOf(i)===-1?!1:i==="theme_hue"?y(m):t[i].indexOf(m)!==-1}function l(i,m){if(!P(i,m))return!1;const H=L();return H[i]=m,c(H),r()&&k({[i]:m}),!0}function T(i){if(!i||typeof i!="object")return!1;const m={};if(Object.keys(i).forEach(function(I){P(I,i[I])&&(m[I]=i[I])}),!Object.keys(m).length)return!1;const H=Object.assign({},L(),m);return c(H),r()&&k(m),!0}function k(i){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:i})}).catch(function(){})}catch{}}async function C(){const i=g();if(!r()||typeof fetch>"u")return i;try{const m=await fetch("/api/user_config/preferences");if(m.ok){const H=await m.json();if(H.success&&H.preferences){const I=H.preferences;p.forEach(function(G){t[G].indexOf(I[G])!==-1&&(i[G]=I[G])}),c(i)}}}catch{}return i}function q(i){const m=i||v("info_density")||"comfortable",H=t.info_density.indexOf(m)!==-1?m:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",H),H}function w(i){const m=i||v("theme")||"system";if(m==="system"){let H=!1;return typeof window<"u"&&window.matchMedia&&(H=window.matchMedia("(prefers-color-scheme: dark)").matches),H?"dark":"light"}return m==="dark"||m==="light"?m:"light"}const n={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:p,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:b,getLocal:g,getPreference:v,isValidValue:P,setPreference:l,setPreferences:T,saveToBackend:k,loadPreferences:C,resolveTheme:w,applyDensity:q};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=n),n});(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function p(){if(typeof localStorage>"u")return[];try{const g=localStorage.getItem(a);if(!g)return[];const v=JSON.parse(g);return Array.isArray(v)?v:[]}catch{return[]}}function t(g){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(g))}catch{}}function y(g,v){if(!g)return!1;let P=p().filter(function(l){return l.code!==g});return P.unshift({code:g,name:(v||"").toString().slice(0,32),ts:Date.now()}),P.length>10&&(P=P.slice(0,10)),t(P),!0}function b(){return p().slice(0,10)}function L(g){t(p().filter(function(v){return v.code!==g}))}function c(){t([])}const r={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:y,getRecentViewed:b,removeRecent:L,clearRecent:c};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=r),r});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:p,watch:t,onMounted:y,nextTick:b}=a;function L(d,S={}){if(typeof d=="string"&&d.startsWith("/api/")){const u=localStorage.getItem("quant_token");if(u)return{...S,headers:{...S.headers||{},Authorization:"Bearer "+u}}}return S}async function c(d,S={}){const u=L(d,S),O={"Content-Type":"application/json",...u.headers},ae=(S.method||"GET").toUpperCase(),Y=ae+"|"+d,Q=async()=>{const x=await fetch(d,{...u,headers:O});if(x.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!x.ok){let h="";try{const Z=await x.json();h=Z&&Z.detail||""}catch{}throw Object.assign(new Error(h||"请求失败（HTTP "+x.status+"）"),{status:x.status})}return await x.json()};try{const x=S.noLoading?Q:()=>m(Q);return ae==="GET"&&!S.noDedupe?await q(Y,x):await x()}catch(x){throw x.message==="登录已过期"?x:(console.error("[apiFetch] "+d+":",x.message),Object.assign(x,{_formatted:H(x,x.status)}))}}function r(){return new Date().toISOString().split("T")[0]}function g(d){return d?d.split("T")[0]:""}function v(d,S="info",u=3e3){let O=document.querySelector(".toast-container");O||(O=document.createElement("div"),O.className="toast-container",document.body.appendChild(O));const ae=document.createElement("div");ae.className=`toast toast-${S}`,ae.textContent=d,O.appendChild(ae),setTimeout(()=>{ae.classList.add("leaving"),setTimeout(()=>ae.remove(),300)},u)}function P(d,S=300){let u;return function(...O){clearTimeout(u),u=setTimeout(()=>d.apply(this,O),S)}}function l(d,S=300){let u=!1;return function(...O){u||(d.apply(this,O),u=!0,setTimeout(()=>{u=!1},S))}}async function T(d,S=3e3,u=""){const O=new Promise((ae,Y)=>setTimeout(()=>Y(new Error("timeout")),S));try{return await Promise.race([d,O])}catch(ae){console.warn(`[timeout] ${u||"task"} failed:`,ae.message)}}const k=new Map;function C(){return k.clear(),!0}function q(d,S){if(!d||typeof S!="function")return Promise.reject(new Error("bad dedupe args"));if(k.has(d))return k.get(d);const u=Promise.resolve().then(S).finally(()=>{k.delete(d)});return k.set(d,u),u}let w=0;function n(){return w=0,!0}function i(){return w}async function m(d){w++;try{return await d()}finally{w--}}function H(d,S){if(!d)return"请求失败";if(d&&typeof d=="object"&&d.detail)return String(d.detail);if(typeof d=="string"&&d)return d;if(d&&d.message){const u=String(d.message);return/Failed to fetch|fetch failed|networkerror/i.test(u)?"网络连接失败，请检查网络后重试":u}return S?"请求失败（HTTP "+S+"）":"请求失败"}function I(d,S){if(d===S)return!0;try{return JSON.stringify(d)===JSON.stringify(S)}catch{return!1}}function G(d,S,u){const O=(d||"GET").toUpperCase();let ae="";if(u)try{const Y={};Object.keys(u).sort().forEach(Q=>{Y[Q]=u[Q]}),ae=JSON.stringify(Y)}catch{ae=""}return O+"|"+S+"|"+ae}class ee{constructor(){this._map=new Map,this._exp=new Map}get(S){const u=this._exp.get(S);if(u!=null){if(Date.now()>u){this.delete(S);return}return this._map.get(S)}}set(S,u,O){return this._map.set(S,u),this._exp.set(S,Date.now()+(O>0?O:-1)),u}delete(S){this._map.delete(S),this._exp.delete(S)}clear(){this._map.clear(),this._exp.clear()}has(S){return this.get(S)!==void 0}get size(){return this._map.size}}function te(d){const S=new ee,u=d!=null&&d>0?d:15e3;return{store:S,defaultTtl:u,get:O=>S.get(O),set:(O,ae,Y)=>S.set(O,ae,Y??u),delete:O=>S.delete(O),clear:()=>S.clear(),size:()=>S.size}}const A=new Set;async function M(d){const S=d&&d.cache,u=d&&d.key,O=d&&(d.fetchFn||d.fetcher),ae=d&&d.ttl;if(!S||!u||typeof O!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(A.has(u))return{ok:!1,changed:!1,skipped:!0,fresh:null};A.add(u);try{const Y=S.get(u);let Q;try{Q=await O()}catch(h){return d.onError&&d.onError(h),{ok:!1,changed:!1,fresh:null}}const x=Y!==void 0&&!I(Y,Q);return S.set(u,Q,ae),d.apply&&d.apply(Q,Y),Y!==void 0&&(x?d.onChanged&&d.onChanged(Q,Y):d.onUnchanged&&d.onUnchanged(Q,Y)),{ok:!0,changed:x,fresh:Q}}finally{A.delete(u)}}const R=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function z(d,S={}){if(d==null)return"";const u=S&&S.allow||R,O=new Set(u.map(x=>String(x).toUpperCase()));let ae;try{ae=new DOMParser().parseFromString(String(d),"text/html")}catch{return String(d).replace(/[<>&]/g,h=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[h])}const Y=ae.body||ae;function Q(x){Array.from(x.childNodes).forEach(h=>{if(h.nodeType===1){const Z=String(h.tagName).toUpperCase();if(O.has(Z))Array.from(h.attributes).forEach(fe=>{const de=fe.name.toLowerCase(),Ce=(fe.value||"").trim().toLowerCase();(de.startsWith("on")||(de==="href"||de==="src"||de==="xlink:href")&&Ce.startsWith("javascript:")||de==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(Ce))&&h.removeAttribute(fe.name),de==="href"&&!/^(https?:|mailto:|#|\/)/.test(Ce)&&h.removeAttribute("href")}),Z==="A"&&h.setAttribute("rel","noopener noreferrer"),Q(h);else{const fe=h.parentNode;for(;h.firstChild;)fe.insertBefore(h.firstChild,h);fe.removeChild(h)}}else if(h.nodeType!==3){if(h.nodeType===8)h.parentNode&&h.parentNode.removeChild(h);else if(h.nodeType===4){const Z=ae.createTextNode(h.nodeValue||"");h.parentNode&&h.parentNode.replaceChild(Z,h)}}})}return Q(Y),Y.innerHTML}const X="/api/openapi",J="/api/market/ws/quotes",re=1,F=2.5,j="数据不可达",D="实时不可用，不刷新";function f(){const d=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",S=typeof location<"u"?location.host:"localhost:8001";return d+"//"+S+J}function _(d,S){if(!d)return null;const u=S||{riseSpeed:re,volumeRatio:F},O=u.riseSpeed!=null?u.riseSpeed:re,ae=u.volumeRatio!=null?u.volumeRatio:F,Y=parseFloat(d.rise_speed);if(!isNaN(Y)&&Math.abs(Y)>O)return Y>0?"涨速预警":"跌速预警";const Q=parseFloat(d.volume_ratio);return!isNaN(Q)&&Q>ae?"放量预警":null}function le(d){const S=Number(d);return d==null||isNaN(S)?null:S}const E={apiFetch:c,withAuthHeaders:L,getToday:r,formatDate:g,withTimeout:T,showToast:v,debounce:P,throttle:l,resetInFlight:C,dedupeRequest:q,resetLoading:n,loadingCount:i,withLoading:m,formatApiError:H,jsonEquals:I,makeCacheKey:G,CacheStore:ee,createTtlCache:te,silentRefresh:M,sanitizeHtml:z,OPENAPI_ROUTE_BASE:X,REALTIME_WS_PATH:J,WARN_RISE_SPEED_THRESHOLD:re,WARN_VOLUME_RATIO_THRESHOLD:F,REALTIME_DEGRADED_TEXT:j,REALTIME_FALLBACK_TEXT:D,buildRealtimeWsUrl:f,checkQuoteWarning:_,quoteFmt:{price:function(d){const S=le(d);return S===null?"--":S.toFixed(2)},pct:function(d){const S=le(d);return S===null?"--":(S>0?"+":"")+S.toFixed(2)+"%"},num:function(d){const S=le(d);return S===null?"--":S.toFixed(2)},color:function(d){const S=d?d.change_pct:null,u=le(S);return u===null?"":u>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=E),typeof Pe<"u"&&Pe.exports&&(Pe.exports=E)})();(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(P,l){return P+"/"+l}function p(P,l,T,k){var C=P[l]||[],q=C.findIndex(function(i){return i.subPage===T});if(q!==-1)return{groups:P,activeKey:e(l,T)};var w=C.concat([{subPage:T,title:k}]);w.length>a&&(w=y(w));var n=Object.assign({},P,t({},l,w));return{groups:n,activeKey:e(l,T)}}function t(P,l,T){return P[l]=T,P}function y(P){if(P.length<=a)return P;var l=P.length>1?1:0;return P.filter(function(T,k){return k!==l})}function b(P,l,T,k){var C=P[l]||[],q=C.findIndex(function(m){return m.subPage===T});if(q===-1)return{groups:P,nextActive:null};var w=C.filter(function(m){return m.subPage!==T}),n=Object.assign({},P,t({},l,w)),i=null;return T===k&&(w[q]?i=w[q].subPage:w[q-1]?i=w[q-1].subPage:i=null),{groups:n,nextActive:i}}function L(P){return P&&P.length?P[0]:""}function c(P,l){return P[l]||[]}function r(P,l,T){var k=P[l]||[],C=k.filter(function(w){return w.subPage===T}),q=Object.assign({},P,t({},l,C));return{groups:q,activeKey:C.length?e(l,C[0].subPage):null}}function g(P,l){var T=Object.assign({},P,t({},l,[]));return{groups:T,activeKey:null}}function v(P,l,T,k){var C=(P[l]||[]).slice();if(T<0||T>=C.length)return{groups:P};var q=C.splice(T,1)[0];return C.splice(Math.max(0,Math.min(k,C.length)),0,q),{groups:Object.assign({},P,t({},l,C))}}return{MAX_TABS:a,openTab:p,closeTab:b,getDefaultTab:L,tabsOf:c,evictOldest:y,closeOthers:r,closeAll:g,reorder:v,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var Qs=typeof Pe=="object"&&Pe.exports?Pe.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;Qs&&(window.__quantModules.tabsCore=Qs)}(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="subnav",p="nav_mode";function t(v){return a.indexOf(v)!==-1?v:e}function y(v){return t(v)==="subnav"}function b(v){return t(v)==="tree"}function L(v){return t(v)==="toptab"}function c(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function r(){var v=c(),P=e;if(v)try{P=t(v.getItem(p))}catch{}return{navMode:P}}function g(v){var P=c();if(!(!P||!v))try{v.navMode!==void 0&&P.setItem(p,t(v.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:y,treeChildrenVisible:b,topTabsVisible:L,readPrefs:r,writePrefs:g}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var $s=typeof Pe=="object"&&Pe.exports?Pe.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;$s&&(window.__quantModules.navModeCore=$s)}(function(){function e(f,_){if(!Array.isArray(f)||f.length<=_)return f;const le=[],K=f.length/_*2;for(let E=0;E<f.length;E+=K){const d=Math.floor(E),S=Math.min(f.length,Math.ceil(E+K));let u=1/0,O=-1,ae=-1/0,Y=-1;for(let Q=d;Q<S;Q++){const x=f[Q];if(!x)continue;const h=x[3]!=null?Number(x[3]):1/0,Z=x[4]!=null?Number(x[4]):-1/0;h<u&&(u=h,O=Q),Z>ae&&(ae=Z,Y=Q)}O>=0&&le.push(f[O]),Y>=0&&Y!==O&&le.push(f[Y])}return le}let p=null;function t(){return typeof echarts<"u"?Promise.resolve():(p||(p=new Promise(function(f,_){const le=document.createElement("script");le.src="/static/lib/echarts.min.js",le.async=!0,le.onload=function(){typeof echarts<"u"?f():_(new Error("echarts 加载后未定义"))},le.onerror=function(){_(new Error("echarts.min.js 加载失败"))},document.head.appendChild(le)})),p)}function y(){const f=getComputedStyle(document.documentElement);return{primary:f.getPropertyValue("--primary-color").trim()||"#2563eb",up:f.getPropertyValue("--color-up").trim()||"#43e97b",down:f.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:f.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:f.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const b=f=>(getComputedStyle(document.documentElement).getPropertyValue(f)||"").trim();function L(){return{up:b("--color-up")||"#E63946",down:b("--color-down")||"#2E7D32",neutral:b("--color-neutral")||"#43a047",accent:b("--color-accent")||"#F59E0B",risk:b("--color-danger")||"#C62828",warn:b("--color-warning")||"#FF9800",success:b("--color-success")||"#4CAF50",primary:b("--qc-primary-600")||"#b8922a",grid:b("--chart-split")||"#e2e8f0",axis:b("--chart-axis")||"#cbd5e1",bg:b("--chart-bg")||"transparent",series:[b("--qc-primary-600")||"#b8922a",b("--qc-primary-500")||"#c49b2e",b("--qc-primary-700")||"#8f6f1f",b("--qc-primary-400")||"#d4b352",b("--color-up")||"#E63946",b("--color-down")||"#2E7D32",b("--color-accent")||"#F59E0B",b("--qc-neutral-400")||"#b8ae9f"]}}function c(f,_,le,K=!1,E=!1){if(!_||_.length===0)return;_.length>2e3&&(_=e(_,2e3));const d=_.map(xe=>typeof xe[0]=="string"&&xe[0].indexOf("-")>=0?xe[0]:xe[0].slice(0,4)+"-"+xe[0].slice(4,6)+"-"+xe[0].slice(6,8)),S=y(),u={ma5:b("--color-accent")||"#F59E0B",ma10:b("--color-primary")||"#3B82F6",ma20:b("--color-warning")||"#8B5CF6",ma60:b("--color-success")||"#10B981"},O=_.map(xe=>[xe[1],xe[2],xe[3],xe[4]]),ae=_.map(xe=>xe[5]),Y=_.map(xe=>xe[6]),Q=_.map(xe=>xe[7]),x=_.map(xe=>xe[8]),h=_.map(xe=>xe[9]),Z=_.map(xe=>xe[10]),de=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",Ce=S.borderLight,Ne={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:S.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:de,borderColor:Ce,textStyle:{color:S.textSecondary,fontSize:12},formatter:function(xe){if(!xe||!xe.length)return"";const qe=xe[0].dataIndex,ie=_[qe];if(!ie)return"";const ye=f.getOption(),Re=ye.legend&&ye.legend[0]&&ye.legend[0].selected||{},se=Te=>Re[Te]!==!1,$=Te=>Te==null||isNaN(Te)?"--":Number(Te).toFixed(2),ne=Te=>Te==null||isNaN(Te)?"--":(Number(Te)/1e4).toFixed(2)+"万手",Se=['<div style="font-weight:600;color:'+S.textSecondary+';">'+d[qe]+"</div>"];return Se.push("开: "+$(ie[1])+"　收: "+$(ie[2])),Se.push("低: "+$(ie[3])+"　高: "+$(ie[4])),Se.push("成交量: "+ne(ie[5])),ie[6]!=null&&se("MA5")&&Se.push("MA5: "+$(ie[6])),ie[7]!=null&&se("MA10")&&Se.push("MA10: "+$(ie[7])),ie[8]!=null&&se("MA20")&&Se.push("MA20: "+$(ie[8])),ie[9]!=null&&se("MA60")&&Se.push("MA60: "+$(ie[9])),ie[10]!=null&&Se.push("VOL_MA5: "+ne(ie[10])),Se.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:E?0:8,textStyle:{color:S.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:E?30:40,height:E?"48%":"52%"},{left:56,right:16,top:E?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:d,boundaryGap:!0,axisLine:{lineStyle:{color:Ce}},axisLabel:{color:S.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:d,axisLabel:{show:!1},axisLine:{lineStyle:{color:Ce}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:Ce}},axisLabel:{color:S.textSecondary,fontSize:11,formatter:function(xe){const qe=Math.round(xe*100)/100;return qe%1===0?String(Math.round(qe)):qe.toFixed(2)}},splitLine:{lineStyle:{color:Ce,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:Ce}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,_.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:Ce,textStyle:{color:S.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:O,itemStyle:{color:S.up,color0:S.down,borderColor:S.up,borderColor0:S.down}},{name:"MA5",type:"line",data:Y,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma5}},{name:"MA10",type:"line",data:Q,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma10}},{name:"MA20",type:"line",data:x,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma20}},{name:"MA60",type:"line",data:h,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ae,itemStyle:{color:function(xe){const qe=xe.dataIndex;return _[qe][1]>=_[qe][2]?S.up:S.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:Z,smooth:!0,symbol:"none",lineStyle:{width:1,color:u.ma5,type:"dashed"}}]};f.setOption(Ne,!0)}const r=new Map;function g(f){return r.has(f)||r.set(f,{chart:null,cache:null}),r.get(f)}async function v(f,_,le,K=!1,E={}){await t();const d=g(f);let S=document.getElementById(f);if(!S)for(let u=0;u<16&&(await new Promise(O=>setTimeout(O,50)),S=document.getElementById(f),!S);u++);if(!S)throw new Error("无法找到图表容器: "+f);if(S.offsetWidth<50&&(S.style.minWidth="600px",S.style.minHeight="300px"),!d.chart||d.chart.isDisposed()||d.chart.getDom()!==S){if(d.chart)try{d.chart.dispose()}catch{}d.chart=echarts.init(S),d.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const u=E.onLegend;typeof u=="function"&&d.chart.on("legendselectchanged",O=>{O&&O.selected&&u(O.selected)})}return c(d.chart,_,le,K,!!E.isMobile),d.cache={data:_,period:le,isIndex:K,isMobile:!!E.isMobile},d.chart}function P(f){const _=r.get(f);_&&_.chart&&(_.chart.dispose(),_.chart=null,_.cache=null)}function l(f){const _=r.get(f);_&&_.chart&&_.chart.resize()}function T(f,_){const le=r.get(f),K=le&&le.chart;if(K)if(_<=0)K.dispatchAction({type:"dataZoom",start:0,end:100});else{const S=Math.max(0,(60-_)/60*100);K.dispatchAction({type:"dataZoom",start:Math.round(S),end:100})}}function k(f){var K,E,d;const _=r.get(f);if(!_||!_.chart||!_.cache||_.chart.isDisposed())return;const le=((d=(E=(K=_.chart.getOption())==null?void 0:K.legend)==null?void 0:E[0])==null?void 0:d.selected)||null;c(_.chart,_.cache.data,_.cache.period,_.cache.isIndex,_.cache.isMobile),le&&_.chart.setOption({legend:{selected:le}})}function C(f){const _=r.get(f);return _&&_.chart}const q=new Map;function w(f){return q.has(f)||q.set(f,{chart:null,cache:null}),q.get(f)}function n(f,_,le={}){return t().then(function(){const K=w(f),E=document.getElementById(f);if(!E)throw new Error("无法找到图表容器: "+f);if(E.offsetWidth<50&&(E.style.minWidth="600px",E.style.minHeight="300px"),K.chart&&K.chart.getDom&&K.chart.getDom()!==E){try{K.chart.dispose()}catch{}K.chart=null}K.chart||(K.chart=echarts.init(E),K.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),K.resizeBound||(K.resizeBound=!0,window.addEventListener("resize",function(){K.chart&&!K.chart.isDisposed()&&K.chart.resize()})));const d=typeof _=="function"?_():_;return K.chart.setOption(d,!0),K.cache={buildOption:_,key:le.key||""},K.chart})}function i(f){var E,d,S;const _=q.get(f);if(!_||!_.chart||!_.cache||_.chart.isDisposed())return;const le=((S=(d=(E=_.chart.getOption())==null?void 0:E.legend)==null?void 0:d[0])==null?void 0:S.selected)||null,K=typeof _.cache.buildOption=="function"?_.cache.buildOption():_.cache.buildOption;_.chart.setOption(K,!0),le&&K&&K.legend&&K.legend.selected&&_.chart.setOption({legend:{selected:le}})}function m(f){const _=q.get(f);_&&_.chart&&(_.chart.dispose(),_.chart=null,_.cache=null)}function H(f){const _=q.get(f);_&&_.chart&&_.chart.resize()}const I=new Map;function G(f){return I.has(f)||I.set(f,{chart:null,cache:null}),I.get(f)}function ee(f,_,le={}){return t().then(function(){const K=G(f),E=document.getElementById(f);if(!E)return null;if(E.offsetWidth<50&&(E.style.minWidth="600px",E.style.minHeight="300px"),K.chart&&K.chart.getDom&&K.chart.getDom()!==E){try{K.chart.dispose()}catch{}K.chart=null}K.chart||(K.chart=echarts.init(E),K.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),K.resizeBound||(K.resizeBound=!0,window.addEventListener("resize",function(){K.chart&&!K.chart.isDisposed()&&K.chart.resize()})));const d=typeof _=="function"?_():_;return K.chart.setOption(d,!0),K.cache={buildOption:_,key:le.key||""},K.chart})}function te(f){const _=I.get(f);if(!_||!_.chart||!_.cache||_.chart.isDisposed())return;const le=typeof _.cache.buildOption=="function"?_.cache.buildOption():_.cache.buildOption;_.chart.setOption(le,!0)}function A(f){const _=I.get(f);_&&_.chart&&(_.chart.dispose(),_.chart=null,_.cache=null)}function M(f){const _=I.get(f);_&&_.chart&&_.chart.resize()}const R=ee,z=te,X=A,J=M;function re(f,_,le,K){K=K||{};const E=K.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[K.navLabel||"净值",K.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:le||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:K.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:K.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:K.navLabel||"净值",type:"line",data:f||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:K.ddLabel||"回撤",type:"line",yAxisIndex:1,data:_||[],showSymbol:!1,areaStyle:{opacity:.25,color:E},lineStyle:{color:E,type:"solid",width:1.5}}]}}function F(f,_){_=_||{};const le=_.bandColor||"#1976d2",K=f&&f.dates||[],E=f&&f.median||[],d=f&&f.q25||[],S=f&&f.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[_.medianLabel||"中位IC",_.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:K,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:_.medianLabel||"中位IC",type:"line",data:E,showSymbol:!1,lineStyle:{width:2,color:le}},{name:_.bandLabel||"25–75分位",type:"line",data:d,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:le,opacity:.12}},{name:"_bandH",type:"line",data:S.map(function(u,O){return u-(d[O]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:le,opacity:.12}}]}}function j(f,_){_=_||{};const le=_.color||"#7c3aed",K=f&&f.dates||[],E=f&&f.value||[],d=f&&f.upper||[],S=f&&f.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[_.valueLabel||"情绪",_.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:K,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:_.valueLabel||"情绪",type:"line",data:E,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:le}},{name:_.bandLabel||"过热/冰点带",type:"line",data:d,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:le,opacity:.1}},{name:"_bandL",type:"line",data:S.map(function(u,O){return(d[O]||0)-u}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:le,opacity:.1}}]}}const D={renderKlineChart:c,renderKlineTo:v,disposeKline:P,resizeKline:l,zoomKline:T,redrawKline:k,getKlineChart:C,renderBacktestTo:n,redrawBacktest:i,disposeBacktest:m,resizeBacktest:H,renderPortfolioTo:ee,redrawPortfolio:te,disposePortfolio:A,resizePortfolio:M,renderSimpleChartTo:R,redrawSimpleChart:z,disposeSimpleChart:X,resizeSimpleChart:J,buildNavDrawdownOption:re,buildIcBandOption:F,buildSentimentBandOption:j,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:L,init(){return{renderKlineChart:c,renderKlineTo:v,disposeKline:P,resizeKline:l,zoomKline:T,redrawKline:k,getKlineChart:C,renderBacktestTo:n,redrawBacktest:i,disposeBacktest:m,resizeBacktest:H,renderPortfolioTo:ee,redrawPortfolio:te,disposePortfolio:A,resizePortfolio:M,renderSimpleChartTo:R,redrawSimpleChart:z,disposeSimpleChart:X,resizeSimpleChart:J,buildNavDrawdownOption:re,buildIcBandOption:F,buildSentimentBandOption:j,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:L}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=D),typeof Pe<"u"&&Pe.exports&&(Pe.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:re,buildIcBandOption:F,buildSentimentBandOption:j})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:p}=Vue,{configChanged:t,consensus:y}=a,b=e(null),L=e(""),c=e(null),r=e([]),g=e([]),v=e([]),P=e([]),l=e([]),T=e([]),k=e({});function C(oe){const ke=l.value.indexOf(oe);ke>=0?l.value.splice(ke,1):l.value.push(oe)}const q=e("date"),w=e([]),n=e(!1),i=e(!1),m=e("watchlist"),H=e([]),I=e({vendors:[]}),G=e(""),ee=e(!1),te=e(!1);function A(oe){if(!oe)return"";const ke=String(oe),De=ke.length;if(De<=4)return ke[0]+"*".repeat(De-1);const Ae=De<=8?2:4;return ke.slice(0,Ae)+"*".repeat(De-Ae-Ae)+ke.slice(-Ae)}async function M(oe){let ke;try{ke=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ae=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ke,target:oe})})).json();if(Ae.success)return Ae.secret;ElementPlus.ElMessage.error(Ae.message||"查看失败")}catch(De){ElementPlus.ElMessage.error("查看失败: "+De.message)}return null}async function R(oe){if(oe._revealed){oe._revealed=!1,oe._masked=A(oe.api_key);return}const ke=await M("ai:"+oe.vendor_key);ke!==null&&(oe.api_key=ke,oe._revealed=!0)}async function z(oe){if(oe._editing){oe._editing=!1,oe._revealed=!1,oe.api_key&&(oe._masked=A(oe.api_key));return}oe._editing=!0;try{const De=await(await fetch("/api/ai/models?full=1")).json();if(De.success){const Ae=(De.data.vendors||[]).find(ct=>ct.vendor_key===oe.vendor_key);Ae&&(oe.api_key=Ae.api_key||"")}else De.message&&ElementPlus.ElMessage.error(String(De.message))}catch(ke){ElementPlus.ElMessage.error("解锁失败: "+ke.message)}}function X(oe){const{_fetching:ke,_testing:De,_revealed:Ae,_masked:ct,_editing:Qe,...Je}=oe;return Qe||(Je.api_key=""),Je.models=(oe.models||[]).map(yt=>{const{_testing:_t,testResult:$e,...ft}=yt;return ft}),Je}async function J(){var oe;try{G.value="";const ke=await fetch("/api/ai/models");if(ke.status===401){G.value="请先登录后再查看模型配置";return}if(!ke.ok){G.value=`服务器错误 (${ke.status})`;return}const De=await ke.json();De.success?(H.value=(((oe=De.data)==null?void 0:oe.vendors)||[]).map(Ae=>({...Ae,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Ae.api_key||"",models:(Ae.models||[]).map(ct=>({...ct,_testing:!1,testResult:void 0}))})),G.value=""):G.value=De.message||"加载失败"}catch(ke){G.value="网络错误: "+ke.message}}async function re(){try{const ke=await(await fetch("/api/ai/catalog")).json();ke.success&&ke.data&&(I.value=ke.data)}catch(oe){console.warn("AI 厂商目录加载失败",oe)}}async function F(){te.value=!0;try{const De=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:H.value.map(X)})})).json();De.success?(H.value.forEach(Ae=>{Ae._editing=!1,Ae._revealed=!1,Ae.api_key&&(Ae._masked=A(Ae.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(De.message||"保存失败")}catch(oe){ElementPlus.ElMessage.error("保存失败: "+oe.message)}te.value=!1}async function j(oe,ke){ke._testing=!0;try{const Ae=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:oe.vendor_key,model:ke.name,base_url:oe.base_url,api_key:oe.api_key,timeout:oe.timeout})});ke.testResult=await Ae.json()}catch(De){ke.testResult={success:!1,message:De.message}}ke._testing=!1}async function D(){ee.value=!0;for(const oe of H.value)for(const ke of oe.models||[])oe.api_key?await j(oe,ke):ke.testResult={success:!1,message:"未配置 API Key"};ee.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function f(oe){oe._fetching=!0;try{const Ae=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:oe.vendor_key,base_url:oe.base_url,api_key:oe.api_key,timeout:oe.timeout})})).json();if(Ae.success&&Array.isArray(Ae.models)){const ct=new Set((oe.models||[]).map(Qe=>Qe.name));for(const Qe of Ae.models)ct.has(Qe)||oe.models.push({name:Qe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Ae.models.length} 个模型`)}else ElementPlus.ElMessage.error(Ae.message||"获取模型列表失败")}catch(ke){ElementPlus.ElMessage.error("获取模型列表失败: "+ke.message)}oe._fetching=!1}function _(oe){const ke=(I.value.vendors||[]).find(De=>De.vendor_key===oe);if(ke){if(H.value.some(De=>De.vendor_key===oe)){ElementPlus.ElMessage.warning("该厂商已存在");return}H.value.push({vendor_key:ke.vendor_key,name:ke.name,kind:ke.kind,base_url:ke.base_url,api_key:"",timeout:60,tier:ke.tier||"",website:ke.website||"",locked:!!ke.locked,models:(ke.models||[]).map(De=>({name:De,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${ke.name}」，配置 API Key 后保存生效`)}}function le(){H.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function K(oe){oe.models||(oe.models=[]),oe.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function E(oe,ke){const De=oe.models[ke];if(!(!De||De.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(De.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}oe.models.splice(ke,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function d(oe){if(oe.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(oe.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const ke=H.value.indexOf(oe);ke>=0&&H.value.splice(ke,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const S=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),u=e(!1),O=e(""),ae=e(0),Y=e(""),Q=e(!1),x=e(""),h=e(!1),Z=e(0),fe=e(0),de=e(""),Ce=e({}),Ne=e({}),xe=e({}),qe=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),ie=e("manual"),ye=p(()=>{const oe={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return oe[qe.value.provider]||oe.custom}),Re={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function se(oe){if(oe==="manual")return;const ke=Re[oe];ke&&(qe.value.endpoint=ke.endpoint,qe.value.model=ke.model,t.value=!0)}function $(){if(t.value=!0,qe.value.provider!=="codingplan"&&qe.value.provider!=="custom"){const oe=ye.value;oe&&(qe.value.endpoint=oe.endpoint,qe.value.model=oe.model)}else qe.value.provider==="codingplan"&&(qe.value.endpoint||(qe.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),qe.value.model||(qe.value.model="ark-code-latest"))}let ne=null;const Se=8;async function Te(){ne&&(ne.abort(),ne=null);const ke=(y.value||[]).filter(Je=>Je.status==="new"||Je.status==="out").filter(Je=>!k.value[Je.code]);if(ke.length===0)return;const De=new AbortController;ne=De;let Ae=0;const ct=async()=>{for(;Ae<ke.length;){const Je=ke[Ae++];try{const _t=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Je.code,stock_name:Je.name,event_type:Je.status==="new"?"enter":"exit"}),signal:De.signal})).json();_t.success&&_t.signal&&(k.value={...k.value,[Je.code]:_t.signal})}catch(yt){if(yt.name==="AbortError")return}}},Qe=Array.from({length:Math.min(Se,ke.length)},()=>ct());await Promise.all(Qe)}function tt(){ne&&(ne.abort(),ne=null)}let ht=0;async function rt(oe){const ke=++ht;try{const Ae=await(await fetch(`/api/ai/history/last/${encodeURIComponent(oe)}`)).json();if(ke!==ht)return;Ae.success&&Ae.data&&(b.value=Ae.data,L.value=Ae.data.evaluate_time,at(oe,Ae.data),lt(Ae.data))}catch{}}async function at(oe,ke){var De,Ae;try{const Qe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(oe)}&limit=2`)).json();if(Qe.success&&Qe.data&&Qe.data.length>=2){const Je=Qe.data[1],yt=((De=ke.result)==null?void 0:De.total_score)||0,_t=((Ae=Je.result)==null?void 0:Ae.total_score)||0;yt>0&&_t>0&&(c.value={prevScore:_t,currScore:yt,diff:yt-_t})}}catch(ct){console.warn("[refreshStrategyData] autoPoll failed:",ct)}}function lt(oe){var ct;const ke=((ct=oe.result)==null?void 0:ct.dimensions)||{},De=[],Ae=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Qe of Ae){const Je=ke[Qe.key];Je!==void 0&&De.push({icon:Je>=Qe.good?"●":Je>=Qe.warn?"▲":"✕",label:`${Qe.label} ${Math.round(Je)}分`})}r.value=De}return{aiResult:b,lastEvalTime:L,evalHistoryComparison:c,checklistItems:r,aiHistory:g,selectedHistoryIds:v,expandedDates:P,expandedMonths:l,expandedStocks:T,poolSignals:k,toggleMonthExpand:C,aiHistoryView:q,selectedWatchlistCodes:w,showAutoEvaluateSettings:n,savingConfig:i,autoEvaluateScope:m,aiVendors:H,aiCatalog:I,aiModelsError:G,testingAllModels:ee,savingAiModels:te,loadAiVendors:J,loadAiCatalog:re,saveAiVendors:F,saveAiModels:F,testVendorModel:j,testAllVendorModels:D,fetchVendorModels:f,addVendorFromCatalog:_,addCustomVendor:le,addVendorModel:K,removeVendorModel:E,removeVendor:d,toggleVendorKeyReveal:R,toggleVendorEdit:z,autoEvaluateConfig:S,aiLoading:u,aiEvalStage:O,aiEvalElapsed:ae,aiEvalError:Y,showBatchEvaluate:Q,batchStocks:x,batchRunning:h,batchTotal:Z,batchCompleted:fe,batchCurrent:de,batchStatuses:Ce,batchResults:Ne,batchEvalErrors:xe,aiConfig:qe,selectedPreset:ie,providerInfo:ye,aiPresets:Re,applyPreset:se,onProviderChange:$,fetchPoolSignals:Te,cancelPoolSignals:tt,loadLastEvaluation:rt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:p,watch:t}=Vue,{configChanged:y,aiConfig:b,aiLoading:L,feishuConfig:c,currentTheme:r,changeTheme:g,autoEvaluateConfig:v,currentUser:P,strategyFilter:l,applyTheme:T,dashboardData:k,lastRefreshTime:C,saveAiModels:q}=a,w=e(!1),n=e(!1),i=e(null),m=e(null),H=e(null),I=e(null),G=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),ee=e("disconnected"),te=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),A=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),M=e(!1),R=e(null),z=e(null),X=e("pending"),J=e("..."),re=e(!1),F=e({api_limit:600}),j=e(!1),D=e(!1);async function f(){try{const $=await(await fetch("/api/system/rate-limit")).json();$.success&&(F.value=$.data)}catch(se){console.warn("loadRateLimit failed:",se)}}async function _(){D.value=!0;try{const $=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)})).json();$.success?(j.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error($.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{D.value=!1}}t(()=>[b.value.provider,b.value.apiKey,b.value.endpoint,b.value.model],()=>{y.value=!0},{deep:!0});async function le(){w.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(b.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b.value)})).json()).success?(y.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(se){localStorage.setItem("quant_ai_config",JSON.stringify(b.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",se)}finally{w.value=!1}}async function K(){L.value=!0;try{const $=await(await fetch("/api/ai/test")).json();$.success?ElementPlus.ElMessage.success($.message||"API连接正常"):ElementPlus.ElMessage.error($.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{L.value=!1}}function E(){const se={ai:b.value,feishu:c.value,theme:r.value,export_time:new Date().toISOString()},$=new Blob([JSON.stringify(se,null,2)],{type:"application/json"}),ne=URL.createObjectURL($),Se=document.createElement("a");Se.href=ne,Se.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Se.click(),URL.revokeObjectURL(ne),ElementPlus.ElMessage.success("配置已导出")}function d(se){const $=se.target.files[0];if(!$)return;const ne=new FileReader;ne.onload=async Se=>{try{const Te=JSON.parse(Se.target.result);Te.ai&&(b.value={...b.value,...Te.ai},await le()),Te.feishu&&(Object.assign(c.value,Te.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Te.feishu)})),Te.theme&&(r.value=Te.theme,g(Te.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ne.readAsText($),se.target.value=""}async function S(){w.value=!0;const se=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:G.value,feishu:c.value,ai:b.value,rate_limit:F.value,auto_evaluate:v.value,theme:r.value}})}).then(Te=>["userConfig",Te.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G.value)}).then(Te=>["tushare",Te.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:te.value})}).then(Te=>["datasource",Te.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c.value)}).then(Te=>["feishu",Te.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b.value)}).then(Te=>["ai",Te.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)}).then(Te=>["rateLimit",Te.ok]),q().then(()=>["aiModels",!0],()=>["aiModels",!1])],$=await Promise.allSettled(se),ne=$.filter(Te=>Te.status==="fulfilled"&&Te.value[1]).length,Se=$.filter(Te=>Te.status==="rejected"||Te.status==="fulfilled"&&!Te.value[1]).length;j.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(l.value.selected)),localStorage.setItem("quant_strategy_filter_mode",l.value.mode),P.value&&fetch(`/api/users/${P.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:r.value})}).catch(()=>{}),n.value=!1,i.value=new Date().toLocaleString("zh-CN"),w.value=!1,Se>0&&console.error(`[saveAllConfig] ${ne}/${ne+Se} 项保存成功，${Se} 项失败`)}async function u(){try{const $=await(await fetch("/api/user_config/config")).json();if($.success&&$.config){const ne=$.config;ne.tushare&&(G.value={...G.value,...ne.tushare}),ne.feishu&&(c.value={...c.value,...ne.feishu}),ne.ai&&(b.value={...b.value,...ne.ai}),ne.rate_limit&&(F.value={...F.value,...ne.rate_limit}),ne.auto_evaluate&&(v.value={...v.value,...ne.auto_evaluate}),ne.theme&&!localStorage.getItem("quant_theme")&&T(ne.theme)}n.value=!1,j.value=!1}catch(se){console.error("[resetAllConfig] 重新加载配置失败:",se),n.value=!1}}async function O(){ee.value="testing";try{const $=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(ee.value=$.success?"connected":"disconnected",$.success){const ne=$.data_count?` (获取到 ${$.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ne)}else ElementPlus.ElMessage.error($.message||"连接失败")}catch{ee.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function ae(){try{const $=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();ee.value=$.success?"connected":"disconnected"}catch{ee.value="disconnected"}}async function Y(){var se;M.value=!0;try{const ne=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ne.success?(R.value=parseInt(((se=ne.message.match(/\d+/))==null?void 0:se[0])||"0"),ElementPlus.ElMessage.success(ne.message)):ElementPlus.ElMessage.error(ne.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{M.value=!1}}async function Q(){try{const $=await(await fetch("/api/market/tushare/config")).json();$.success&&$.config&&(G.value={...G.value,...$.config})}catch(se){console.warn("loadTushareConfig failed:",se)}}function x(se){if(!se)return"";const $=String(se),ne=$.length;if(ne<=4)return $[0]+"*".repeat(ne-1);const Se=ne<=8?2:4;return $.slice(0,Se)+"*".repeat(ne-Se-Se)+$.slice(-Se)}async function h(se){let $;try{$=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Se=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:$,target:se})})).json();if(Se.success)return Se.secret;ElementPlus.ElMessage.error(Se.message||"查看失败")}catch(ne){ElementPlus.ElMessage.error("查看失败: "+ne.message)}return null}async function Z(se){const $=te.value[se];if(!$)return;if($._revealed){$._revealed=!1,$._masked=x($.token);return}const ne=await h(se);ne!==null&&($.token=ne,$._revealed=!0)}async function fe(se){const $=te.value[se];if($){if($._editing){$._editing=!1,$._revealed=!1,$.token&&($._masked=x($.token));return}$._editing=!0;try{const ne=await h(se);if(ne===null){$._editing=!1;return}$.token=ne,$._revealed=!0}catch(ne){$._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ne.message)}}}async function de(){try{const $=await(await fetch("/api/market/datasource/config")).json();if($.success&&$.config&&$.config.sources){const ne=$.config.sources,Se=Te=>{const tt={...te.value[Te],...ne[Te]||{}};return tt._editing=!1,tt._revealed=!1,tt._masked=tt.token||"",tt.token="",tt};te.value={sxsc_tushare:Se("sxsc_tushare"),tushare:Se("tushare"),akshare:{...te.value.akshare,...ne.akshare||{}}}}try{const Se=await(await fetch("/api/market/datasource/status")).json();if(Se.success&&Se.status)for(const[Te,tt]of Object.entries(Se.status))A.value[Te]=tt.connected?"connected":"disconnected"}catch{}}catch(se){console.warn("loadDatasourceConfig failed:",se)}}async function Ce(){try{const se={};for(const[$,ne]of Object.entries(te.value)){const{_revealed:Se,_masked:Te,_editing:tt,...ht}=ne;!tt&&$!=="akshare"&&(ht.token=""),se[$]=ht}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:se})}),n.value=!0}catch(se){console.warn("saveDatasourceConfig failed:",se)}}async function Ne(se){A.value[se]="testing";try{const $=te.value[se];$&&$._editing&&await Ce();const Se=await(await fetch(`/api/market/datasource/test/${se}`,{method:"POST"})).json();A.value[se]=Se.success?"connected":"disconnected",Se.success?ElementPlus.ElMessage.success(`${se} 连接成功`):ElementPlus.ElMessage.error(`${se}: ${Se.message}`)}catch{A.value[se]="disconnected",ElementPlus.ElMessage.error(`${se} 连接失败`)}}async function xe(){try{const $=await(await fetch("/api/feishu/config")).json();$&&typeof $=="object"&&(c.value={...c.value,...$},m.value=JSON.parse(JSON.stringify(c.value)))}catch(se){console.warn("loadFeishuConfig failed:",se)}}async function qe(){try{const $=await(await fetch("/api/ai/config")).json();if($.success&&$.data)b.value={...b.value,...$.data};else{const ne=localStorage.getItem("quant_ai_config");ne&&(b.value=JSON.parse(ne))}}catch{const $=localStorage.getItem("quant_ai_config");$&&(b.value=JSON.parse($))}}async function ie(){try{const $=await(await fetch("/api/user_config/config")).json();if($.success&&$.config){const ne=$.config;ne.tushare&&(G.value={...G.value,...ne.tushare}),ne.datasource&&ne.datasource.sources&&(te.value={sxsc_tushare:{...te.value.sxsc_tushare,...ne.datasource.sources.sxsc_tushare||{}},tushare:{...te.value.tushare,...ne.datasource.sources.tushare||{}},akshare:{...te.value.akshare,...ne.datasource.sources.akshare||{}}}),ne.feishu&&(c.value={...c.value,...ne.feishu},m.value=JSON.parse(JSON.stringify(c.value))),ne.ai&&(b.value={...b.value,...ne.ai}),ne.rate_limit&&(F.value={...F.value,...ne.rate_limit}),ne.theme&&!localStorage.getItem("quant_theme")&&T(ne.theme),ne.auto_evaluate&&(v.value={...v.value,...ne.auto_evaluate})}}catch(se){console.warn("加载用户配置失败，使用本地缓存",se)}}async function ye(){var se,$,ne,Se;try{const tt=await(await fetch("/api/dashboard")).json(),ht=tt.success?tt.data:tt;R.value=((se=ht==null?void 0:ht.stats)==null?void 0:se.total_stocks_covered)||null;const at=await(await fetch("/api/dates")).json();z.value=(($=at==null?void 0:at.data)==null?void 0:$.total)||((Se=(ne=at==null?void 0:at.data)==null?void 0:ne.dates)==null?void 0:Se.length)||null;const oe=await(await fetch("/api/ai/history")).json();X.value="ok"}catch{X.value="pending"}}async function Re(){try{const $=await(await fetch("/api/dashboard")).json();k.value=$.success?$.data:$,C.value=Date.now()}catch(se){console.error("加载总览数据失败",se)}}return{configSaving:w,configChanged:y,globalConfigDirty:n,lastSavedTime:i,feishuConfigOriginal:m,aiConfigOriginal:H,tushareConfigOriginal:I,tushareConfig:G,tushareStatus:ee,datasourceConfig:te,datasourceStatus:A,syncingData:M,stockCount:R,tradeDateCount:z,aiStatus:X,appVersion:J,showImportDialog:re,rateLimitConfig:F,rateLimitDirty:j,rateLimitSaving:D,loadRateLimit:f,saveRateLimit:_,saveAiConfig:le,testAiApi:K,exportConfig:E,importConfig:d,saveAllConfig:S,resetAllConfig:u,testTushareConnection:O,checkTushareConnection:ae,syncStockData:Y,loadTushareConfig:Q,loadDatasourceConfig:de,saveDatasourceConfig:Ce,testDatasource:Ne,toggleDatasourceKeyReveal:Z,toggleDatasourceEdit:fe,loadFeishuConfig:xe,loadAiConfig:qe,loadUserConfig:ie,loadSystemStatus:ye,loadDashboardData:Re}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:p}=Vue,{currentUser:t,applyTheme:y,allMenuDefs:b,loadGroupConfig:L}=a,c=e([]),r=e(""),g=e(""),v=e("users"),P=e({}),l=e({}),T=p(()=>{let ie=c.value;if(g.value&&(ie=ie.filter(Re=>(Re.group||Re.role)===g.value)),!r.value)return ie;const ye=r.value.toLowerCase();return ie.filter(Re=>Re.username.toLowerCase().includes(ye))});function k(ie){P.value={...P.value,[ie]:!P.value[ie]}}async function C(ie,ye){try{const se=await(await fetch("/api/groups/"+ye+"/members/"+ie,{method:"DELETE"})).json();se.success?(await fe(),await h()):ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function q(ie){const ye=l.value[ie];if(ye)try{const se=await(await fetch("/api/groups/"+ie+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ye})})).json();se.success?(await fe(),await h(),l.value={...l.value,[ie]:""}):ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function w(ie,ye){try{const se=await(await fetch("/api/users/"+ie.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:ye})})).json();se.success?await fe():ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const n=e(!1),i=e(null),m=e({username:"",password:"",role:"user",theme:"tech-blue"}),H=e(!1),I=e(null),G=e(!1),ee=e(!1),te=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),A=e({}),M=e(!1),R=e({group_id:"",name:"",description:""}),z=e(!1),X=e([]),J=e(""),re=e(""),F=e({});function j(ie){F.value={...F.value,[ie]:!F.value[ie]}}function D(ie){return!c.value||!c.value.length?0:c.value.filter(ye=>(ye.group||ye.role)===ie).length}function f(ie){const ye=(ie==null?void 0:ie.visible_menus)||{};return Object.values(ye).filter(Boolean).length}const _=p(()=>Object.keys(x.value).length);async function le(ie){re.value=ie,ee.value=!0,await K(ie)}async function K(ie){try{const Re=await(await fetch("/api/groups/"+ie+"/members")).json();Re.success&&(X.value=Re.members||[])}catch(ye){X.value=[],console.error("[loadGroupMembers]",ye)}}async function E(){if(!(!J.value||!re.value)){z.value=!0;try{const ye=await(await fetch("/api/groups/"+re.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:J.value})})).json();ye.success?(await K(re.value),await fe(),J.value=""):ElementPlus.ElMessage.error(ye.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{z.value=!1}}}async function d(ie){try{const Re=await(await fetch("/api/groups/"+re.value+"/members/"+ie,{method:"DELETE"})).json();Re.success?(await K(re.value),await fe()):ElementPlus.ElMessage.error(Re.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const S=p(()=>{if(!c.value)return[];const ie=new Set(X.value.map(ye=>ye.username));return c.value.filter(ye=>ye.username!=="admin"&&ye.username!=="guest"&&!ie.has(ye.username))});function u(ie){const ye=te.value.visible_menus[ie],Re=b.find(se=>se.key===ie);if(Re)if(ye){const se=A.value[ie]||{};Re.subPages.forEach($=>{const ne=ie+"."+$;te.value.visible_sub_pages[ne]=se[$]!==void 0?se[$]:!0})}else{const se={};Re.subPages.forEach($=>{const ne=ie+"."+$;se[$]=te.value.visible_sub_pages[ne],te.value.visible_sub_pages[ne]=!1}),A.value[ie]=se}}function O(ie){I.value=ie;const ye=x.value[ie]||{};te.value={name:ye.name||ie,description:ye.description||"",visible_menus:{...ye.visible_menus||{}},visible_sub_pages:{...ye.visible_sub_pages||{}}},A.value={},b.forEach(Re=>{const se={};Re.subPages.forEach($=>{se[$]=te.value.visible_sub_pages[Re.key+"."+$]}),A.value[Re.key]=se}),G.value=!0}async function ae(){z.value=!0;try{const ye=await(await fetch("/api/groups/"+I.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(te.value)})).json();ye.success?(G.value=!1,I.value=null,await h(),await L()):ElementPlus.ElMessage.error(ye.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{z.value=!1}}async function Y(ie){var ye;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((ye=x.value[ie])==null?void 0:ye.name)||ie)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const $=await(await fetch("/api/groups/"+ie,{method:"DELETE"})).json();$.success?await h():ElementPlus.ElMessage.error($.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function Q(){if(R.value.group_id){z.value=!0;try{const ye=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R.value)})).json();ye.success?(M.value=!1,R.value={group_id:"",name:"",description:""},await h()):ElementPlus.ElMessage.error(ye.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{z.value=!1}}}const x=e({});async function h(){try{if(!localStorage.getItem("quant_token"))return;const ye=await fetch("/api/groups");if(ye.ok){const Re=await ye.json();x.value=Re.groups||{}}}catch(ie){console.warn("loadAllGroups:",ie)}}function Z(ie){var ye;return((ye=x.value[ie])==null?void 0:ye.name)||ie||"--"}async function fe(){try{if(!localStorage.getItem("quant_token")){c.value=[];return}const ye=await fetch("/api/users");if(ye.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const Re=await ye.json();c.value=Re.users||[]}catch(ie){c.value=[],console.error("[loadUsers] error:",ie)}}function de(ie){i.value=ie,m.value={username:ie.username,password:"",role:ie.role,theme:ie.theme||"tech-blue",group:ie.group||ie.role},n.value=!0}async function Ce(){if(m.value.username){H.value=!0;try{const ie=i.value?"PUT":"POST",ye=i.value?`/api/users/${m.value.username}`:"/api/users",se=await(await fetch(ye,{method:ie,headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)})).json();if(se.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&m.value.username===t.value.username){const $=m.value.theme;$&&$!==t.value.theme&&(t.value.theme=$,localStorage.setItem("quant_user",JSON.stringify(t.value)),y($))}n.value=!1,i.value=null,await fe()}else ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{H.value=!1}}}async function Ne(ie){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ie}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await fe())}catch(ye){console.error("[deleteUser]",ye)}}async function xe(ie){try{const Re=await(await fetch(`/api/users/${ie.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ie.enabled})})).json();Re.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Re.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function qe(ie){try{const{value:ye}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ie.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(ye){const se=await(await fetch(`/api/users/${ie.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:ye})})).json();se.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(se.message||"重置失败")}}catch{}}return{userList:c,userSearch:r,groupFilter:g,userPageTab:v,expandedGroups:P,addMemberGroupMap:l,filteredUsers:T,toggleGroupExpand:k,removeMemberFromGroupInline:C,addMemberToGroupInline:q,changeUserGroup:w,showAddUser:n,editingUser:i,userForm:m,savingUser:H,editingGroup:I,menuConfigDialog:G,memberDialog:ee,groupEditForm:te,subPageCache:A,showAddGroup:M,addGroupForm:R,savingGroup:z,groupMembers:X,addMemberUsername:J,selectedMemberGroup:re,subPageSectionExpanded:F,toggleSubPageSection:j,getGroupMemberCount:D,getMenuEnabledCount:f,groupCount:_,openMemberManager:le,loadGroupMembers:K,addMemberToGroup:E,removeMemberFromGroup:d,availableUsersForGroup:S,onParentToggle:u,openMenuConfig:O,saveMenuConfig:ae,deleteGroupConfig:Y,createGroup:Q,allGroups:x,getGroupName:Z,loadAllGroups:h,loadUsers:fe,editUser:de,saveUser:Ce,deleteUser:Ne,toggleUserEnabled:xe,resetUserPassword:qe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:p}=Vue,{stockKlineLoaded:t,stockDetailVisible:y,stockDetailTab:b,stockDetail:L,disposeStockKline:c}=a,r=e([]),g=e(!1),v=e(!1),P=e("date"),l=e([]),T=e([]),k=e([]),C=e([]),q=p(()=>{var d,S;const E=[];for(const u of r.value){if(!u||u.id==null)continue;const O=u.stock_name||u.stock_code||"",ae=Array.isArray(u.messages)?u.messages:[];E.push({id:u.id,stock_code:u.stock_code,stock_name:O,first_msg:u.first_msg||((S=(d=ae[0])==null?void 0:d.content)==null?void 0:S.substring(0,50))||"",msg_count:u.msg_count||ae.length||0,created_at:u.created_at,date:(u.created_at||"").substring(0,10),month:(u.created_at||"").substring(0,7),messages:ae})}return E}),w=p(()=>{const E={};for(const S of q.value){const u=S.date||"未知";E[u]||(E[u]=[]),E[u].push(S)}const d={};return Object.keys(E).sort((S,u)=>u.localeCompare(S)).forEach(S=>d[S]=E[S]),d}),n=p(()=>{const E={};for(const S of q.value){const u=S.month||"未知";E[u]||(E[u]=[]),E[u].push(S)}const d={};return Object.keys(E).sort((S,u)=>u.localeCompare(S)).forEach(S=>d[S]=E[S]),d}),i=p(()=>{const E={};for(const d of q.value){const S=`${d.stock_name}(${d.stock_code})`;E[S]||(E[S]=[]),E[S].push(d)}return E});function m(E){const d=l.value.indexOf(E);d>=0?l.value.splice(d,1):l.value.push(E)}function H(E){const d=w.value[E]||[];if(d.every(u=>l.value.includes(u.id)))l.value=l.value.filter(u=>!d.some(O=>O.id===u));else for(const u of d)l.value.includes(u.id)||l.value.push(u.id)}function I(E){const d=n.value[E]||[];if(d.every(u=>l.value.includes(u.id)))l.value=l.value.filter(u=>!d.some(O=>O.id===u));else for(const u of d)l.value.includes(u.id)||l.value.push(u.id)}function G(E){const d=i.value[E]||[];if(d.every(u=>l.value.includes(u.id)))l.value=l.value.filter(u=>!d.some(O=>O.id===u));else for(const u of d)l.value.includes(u.id)||l.value.push(u.id)}function ee(E){const d=T.value.indexOf(E);d>=0?T.value.splice(d,1):T.value.push(E)}function te(E){const d=k.value.indexOf(E);d>=0?k.value.splice(d,1):k.value.push(E)}function A(E){const d=C.value.indexOf(E);d>=0?C.value.splice(d,1):C.value.push(E)}function M(){l.value.length===q.value.length?l.value=[]:l.value=q.value.map(E=>E.id)}async function R(){for(const E of[...l.value])await le(E);l.value=[]}const z={};async function X(E){L.value={stock:E.stock_code,name:E.stock_name},y.value=!0,b.value="chat",t.value=!1,c(),F.value=!0,j.value="",re.value=[];try{let d=z[E.id];if(!d){const S=await fetch("/api/ai/chat/history/"+E.id);if(!S.ok)throw new Error("load history failed");d=(await S.json()).messages||[],z[E.id]=d}re.value=d.map(S=>({role:S.role,content:S.content}))}catch{j.value="历史消息加载失败，请重试"}finally{F.value=!1}}const J=e(""),re=e([]),F=e(!1),j=e("");async function D(){var S;const E=J.value.trim();if(!E||F.value)return;j.value="",re.value.push({role:"user",content:E}),J.value="",F.value=!0;const d=re.value.length;re.value.push({role:"assistant",content:""});try{const ae=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((S=L.value)==null?void 0:S.stock)||"",message:E})})).body.getReader(),Y=new TextDecoder;let Q="";for(;;){const{done:x,value:h}=await ae.read();if(x)break;Q+=Y.decode(h,{stream:!0});const Z=Q.split(`
`);Q=Z.pop()||"";for(const fe of Z)if(fe.startsWith("data: "))try{const de=JSON.parse(fe.slice(6));de.token?re.value[d].content+=de.token:de.done?console.log("Stream done:",de.session_id):de.error&&(j.value=de.error)}catch(de){console.warn("SSE parse error:",de)}}}catch(u){re.value[d].content||(re.value[d].content="网络错误: "+u.message)}F.value=!1}async function f(E){var S;j.value="",F.value=!0;const d={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};re.value.push({role:"user",content:d[E]||d.comprehensive});try{const O=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((S=L.value)==null?void 0:S.stock)||"",mode:E})});if(O.ok){const ae=await O.json();re.value.push({role:"assistant",content:ae.reply||"无回复"})}}catch(u){j.value="网络错误: "+u.message}F.value=!1}async function _(){g.value=!0,v.value=!1;try{const E=await fetch("/api/ai/chat/history?view=date");if(E.ok){const d=await E.json(),S=[];for(const u of d)for(const O of u.items||[])S.push(O);r.value=S}else v.value=!0}catch(E){console.error(E),v.value=!0}finally{g.value=!1}}async function le(E){try{await fetch("/api/ai/chat/history/"+E,{method:"DELETE"}),r.value=r.value.filter(d=>d.id!==E)}catch(d){console.error("deleteChatSession:",d)}}function K(E){if(!E)return"";const d=String(E).split(`
`),S=[],u=[];let O=0;for(;O<d.length;){if(/^\s*\|.*\|\s*$/.test(d[O])){let Y=O;const Q=[];for(;Y<d.length&&/^\s*\|.*\|\s*$/.test(d[Y]);)Q.push(d[Y]),Y++;const x=fe=>fe.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(de=>de.trim()),h=Q.map(x);if(h.length>1&&h[1].every(fe=>/^:?-{3,}:?$/.test(fe))){const fe=Math.max(...h.map(xe=>xe.length)),de=h[0].slice(0,fe),Ce=h.slice(2);let Ne="<table>";Ce.length?(Ne+="<thead><tr>"+de.map(xe=>"<th>"+xe+"</th>").join("")+"</tr></thead>",Ne+="<tbody>"+Ce.map(xe=>"<tr>"+xe.slice(0,fe).map(qe=>"<td>"+qe+"</td>").join("")+"</tr>").join("")+"</tbody>"):Ne+="<tbody><tr>"+de.map(xe=>"<td>"+xe+"</td>").join("")+"</tr></tbody>",Ne+="</table>",S.push(Ne),u.push("\0T"+(S.length-1)+"\0"),O=Y;continue}for(;O<Y;)u.push(d[O]),O++;continue}u.push(d[O]),O++}let ae=u.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return S.forEach((Y,Q)=>{ae=ae.split("\0T"+Q+"\0").join(Y)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ae=window.__quantModules.core.sanitizeHtml(ae)),ae}return{chatSessions:r,chatHistoryView:P,selectedChatIds:l,expandedChatDates:T,expandedChatMonths:k,expandedChatStocks:C,chatHistoryLoading:g,chatHistoryError:v,allChatSessionsFlat:q,chatGroupedByDate:w,chatGroupedByMonth:n,chatGroupedByStock:i,toggleSelectChat:m,toggleSelectChatDate:H,toggleSelectChatMonth:I,toggleSelectChatStock:G,toggleChatDateExpand:ee,toggleChatMonthExpand:te,toggleChatStockExpand:A,selectAllChatSessions:M,deleteSelectedChatSessions:R,viewChatSession:X,loadChatHistory:_,deleteChatSession:le,renderMarkdown:K,stockChatInput:J,stockChatMessages:re,stockChatLoading:F,stockChatError:j,askStockSend:D,askStockQuick:f}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:p,watch:t}=Vue,{consensus:y,currentPage:b,currentSubPage:L,dashboardData:c,searchKeyword:r,statusFilter:g,strategyFilter:v,strategyFilterCounts:P}=a;function l(A){const M=v.value.selected;if(!M||M.length===0)return A;const R=v.value.mode;return A.filter(z=>{const X=z.strategy_names||z.strategies||[];return R==="union"?M.some(J=>X.includes(J)):M.every(J=>X.includes(J))})}const T=p(()=>{const A=l(y.value||[]);return{all:A.length,newCount:A.filter(M=>M.status==="new").length,current:A.filter(M=>M.status==="current").length,out:A.filter(M=>M.status==="out").length}}),k=p(()=>{let A=y.value||[];if(g.value!=="all"&&(A=A.filter(M=>M.status===g.value)),A=l(A),r.value){const M=r.value.toLowerCase();A=A.filter(R=>R.code.toLowerCase().includes(M)||R.name&&R.name.toLowerCase().includes(M))}return A}),C=p(()=>{const A=y.value||[],M={},R={};for(const z of A)z.code&&z.name&&(R[z.code]=z.name);for(const z of A){const X=z.strategy_names||z.strategies||[];for(const J of X)M[J]||(M[J]={strategy:J,count:0,codes:[],names:[]}),M[J].count++,M[J].codes.includes(z.code)||(M[J].codes.push(z.code),M[J].names.push({code:z.code,name:R[z.code]||z.code}))}return Object.values(M).sort((z,X)=>X.count-z.count)}),q=p(()=>{const A=v.value.selected,M=v.value.mode,R={};for(const[z,X]of Object.entries(P.value)){const J=X||[];!A||A.length===0?R[z]=J.length:M==="union"?R[z]=J.filter(re=>re.strategies&&A.some(F=>re.strategies.includes(F))).length:R[z]=J.filter(re=>re.strategies&&A.every(F=>re.strategies.includes(F))).length}return R});function w(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(v.value.selected)),localStorage.setItem("quant_strategy_filter_mode",v.value.mode)}const n=p(()=>{const A=(c.value||{}).consensus_rank||[];return l(A)}),i=p(()=>{const A=y.value||P.value.day||[];return l(A).length}),m=p(()=>{const A=(c.value||{}).strategy_counts||[],M=y.value||P.value.day||[];if(M.length===0)return A;const R=l(M),z={};R.forEach(J=>{(J.strategy_names||J.strategies||[]).forEach(F=>{z[F]=(z[F]||0)+1})});const X=R.length||1;return A.map(J=>{const re=J.strategy_name||J.strategy_id,F=z[re]||0;return{...J,count:F,percentage:Math.round(F/X*1e3)/10}})}),H=p(()=>{const A=(c.value||{}).pool_changes||{},M=(A.new_count||0)-(A.out_count||0);return M>0?{dir:"up",text:"↑"+M}:M<0?{dir:"down",text:"↓"+Math.abs(M)}:{dir:"flat",text:"→0"}}),I=p(()=>{const A=(c.value||{}).time_coverage||{},M=new Date(A.start_date),R=new Date(A.end_date),z=new Date;if(!M.getTime()||!R.getTime()||z>=R)return 100;if(z<=M)return 0;const X=R-M,J=z-M;return Math.round(J/X*100)}),G=e(null),ee=p(()=>{if(!G.value)return"";const A=Math.floor((Date.now()-G.value)/1e3);return A<60?A+"秒前刷新":A<3600?Math.floor(A/60)+"分钟前刷新":Math.floor(A/3600)+"小时前刷新"});function te(A){v.value.selected=[A],v.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([A])),localStorage.setItem("quant_strategy_filter_mode","union"),b.value="calendar",L.value="calendar"}return{applyStrategyFilter:l,statusCounts:T,stockPool:k,strategyDistribution:C,strategyPreviewCount:q,saveStrategyFilter:w,filteredConsensusRank:n,currentPoolSize:i,filteredStrategyCounts:m,poolChangeBadge:H,timeBarPercent:I,lastRefreshTime:G,timeSinceRefresh:ee,navigateToStrategyFilter:te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist={create(a){const{ref:e,computed:p,watch:t}=Vue,{currentUser:y,selectedDate:b,stockDetail:L,stockDetailTab:c,stockDetailVisible:r,stockDetailLoading:g,stockKlineLoaded:v,viewCache:P,animateScoreEntrance:l,loadStockKline:T,refreshStockScore:k,disposeStockKline:C,aiHistory:q,aiLoading:w,aiEvalStage:n,aiEvalElapsed:i,aiEvalError:m,aiResult:H,loadLastEvaluation:I,autoEvaluateConfig:G,autoEvaluateScope:ee,batchStocks:te,batchRunning:A,batchTotal:M,batchCompleted:R,batchCurrent:z,batchStatuses:X,batchResults:J,batchEvalErrors:re,expandedDates:F,expandedStocks:j,savingConfig:D,selectedHistoryIds:f,selectedWatchlistCodes:_,showAutoEvaluateSettings:le,showBatchEvaluate:K}=a,E=s=>(getComputedStyle(document.documentElement).getPropertyValue(s)||"").trim(),d=e(""),S=e("default"),u=e("default"),O=e([]),ae=p(()=>new Set(O.value.map(s=>s.code))),Y=e(!1),Q=e(!1),x=p(()=>{const s=[...O.value];return u.value==="name"?s.sort((o,W)=>o.name.localeCompare(W.name,"zh")):u.value==="added"?s.sort((o,W)=>(W.added_at||"").localeCompare(o.added_at||"")):u.value==="score"&&s.sort((o,W)=>{const be=Z(o.code);return Z(W.code)-be}),s});function h(s){const o=q.value.filter(be=>be.stock_code===s);if(o.length===0)return null;const W=o.reduce((be,he)=>be.evaluate_time>he.evaluate_time?be:he);return{score:W.result.total_score,color:W.result.level_color}}function Z(s){const o=h(s);return o?o.score:0}function fe(s){At(s.code,s.name),qe.value=qe.value.filter(o=>o.code!==s.code),xe.value=""}const de=p(()=>new Set(q.value.map(s=>s.stock_code))),Ce=e(new Set);function Ne(s){Ce.value.add(s)}const xe=e(""),qe=e([]),ie=e(!1),ye=e({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Re=e(!1),se=e(!1),$=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};$.REALTIME_WS_PATH;const ne=$.REALTIME_DEGRADED_TEXT||"数据不可达",Se=$.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";$.WARN_RISE_SPEED_THRESHOLD!=null&&$.WARN_RISE_SPEED_THRESHOLD,$.WARN_VOLUME_RATIO_THRESHOLD!=null&&$.WARN_VOLUME_RATIO_THRESHOLD;const Te=$.quoteFmt||{price:s=>s==null?"--":Number(s).toFixed(2),pct:s=>s==null?"--":Number(s).toFixed(2)+"%",num:s=>s==null?"--":Number(s).toFixed(2),color:s=>""},tt=3,ht=5e3,rt=e({}),at=e(!1),lt=e("idle");let oe=null,ke=null,De=0;function Ae(s){return $.checkQuoteWarning?$.checkQuoteWarning(s):null}function ct(s){return Ae(rt.value[s])}function Qe(s){return Te.color(rt.value[s])}function Je(s){return Te.price(rt.value[s]&&rt.value[s].price)}function yt(s){return Te.pct(rt.value[s]&&rt.value[s].change_pct)}function _t(s,o){return Te.num(rt.value[s]&&rt.value[s][o])}function $e(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function ft(){if(!oe||oe.readyState!==1)return;const s=(O.value||[]).map(o=>o.code);s.length!==0&&oe.send(JSON.stringify({subscribe:s}))}function N(){if(ke&&(clearTimeout(ke),ke=null),oe){try{oe.onopen=null,oe.onmessage=null,oe.onerror=null,oe.onclose=null,oe.close()}catch{}oe=null}rt.value={},at.value=!1,lt.value="idle"}function ce(){const s=$e();if(!s||!$.buildRealtimeWsUrl||lt.value==="open"||lt.value==="connecting")return;let o;try{o=$.buildRealtimeWsUrl()+"?token="+encodeURIComponent(s)}catch{lt.value="offline",at.value=!0;return}lt.value="connecting";let W=null;try{W=new WebSocket(o)}catch{lt.value="offline",at.value=!0;return}oe=W,W.onopen=function(){lt.value="open",De=0,ft()},W.onmessage=function(be){let he=null;try{he=JSON.parse(be.data||"{}")}catch{return}if(!he||he.type!=="quotes")return;if(at.value=!!he.degraded,he.degraded||!Array.isArray(he.data)){rt.value={};return}const ot={};he.data.forEach(function(et){et&&et.code&&(ot[et.code]=et)}),rt.value=ot},W.onerror=function(){lt.value="offline",at.value=!0},W.onclose=function(){lt.value="offline",De<tt?(De++,ke=setTimeout(function(){lt.value!=="open"&&ce()},ht*De)):at.value=!0}}t(O,function(){lt.value==="open"&&ft()}),$e()&&setTimeout(ce,500);async function Me(){if(!L.value)return;w.value=!0,H.value=null,m.value="",n.value="fetching",i.value=0;const s=Date.now(),o=setInterval(()=>{w.value&&(i.value=Math.round((Date.now()-s)/1e3))},500);try{const W=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:L.value.stock,stock_name:L.value.name||L.value.stock,strategy:S.value})});n.value="calculating";const be=await W.json();n.value="analyzing",be.success?(await nextTick(),H.value=be.data,c.value="ai",Xe()):(m.value=be.message||"评估失败",ElementPlus.ElMessage.error(m.value))}catch(W){m.value=W&&W.message&&!String(W.message).includes("Failed to fetch")?W.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(m.value)}finally{clearInterval(o),w.value=!1,i.value=0,m.value?n.value="":(n.value="done",setTimeout(()=>{n.value==="done"&&(n.value="")},800))}}const ze=50,je=e(0),Ie=e(!1),Ve=p(()=>q.value.length<je.value);async function Xe(){Y.value=!0,Q.value=!1;try{if(!localStorage.getItem("quant_token")){q.value=[];return}const o=await fetch(`/api/ai/history?limit=${ze}&offset=0`);if(o.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),y.value=null;return}const W=await o.json();W.success?(q.value=W.data||[],je.value=W.total!=null?W.total:q.value.length):Q.value=!0}catch(s){console.error("[loadAiHistory] error:",s),Q.value=!0}finally{Y.value=!1}}async function He(){if(!(Ie.value||!Ve.value)){Ie.value=!0;try{const o=await(await fetch(`/api/ai/history?limit=${ze}&offset=${q.value.length}`)).json();if(o.success&&Array.isArray(o.data)){const W=new Set(q.value.map(he=>he.id)),be=o.data.filter(he=>!W.has(he.id));q.value=q.value.concat(be),o.total!=null&&(je.value=o.total)}}catch(s){console.warn("[loadMoreAiHistory] error:",s)}finally{Ie.value=!1}}}async function Ze(s){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const W=await(await fetch(`/api/ai/history/${s}`,{method:"DELETE"})).json();if(W.success){ElementPlus.ElMessage.success("删除成功"),Xe();const be=f.value.indexOf(s);be>=0&&f.value.splice(be,1)}else ElementPlus.ElMessage.error(W.message||"删除失败")}catch{}}function bt(s){const o=f.value.indexOf(s);o>=0?f.value.splice(o,1):f.value.push(s)}function B(){f.value=[]}function me(){_.value=[]}async function Ue(){const s=f.value;if(s.length===0)return;const o=q.value.filter(W=>s.includes(W.id)).map(W=>W.stock_code);K.value=!0,te.value=[...new Set(o)].join(",")}async function Ge(){const s=f.value;if(s.length===0)return;const o=q.value.filter(he=>s.includes(he.id)),W=[...new Map(o.map(he=>[he.stock_code,he])).values()];let be=0;for(const he of W)ae.value.has(he.stock_code)||(await At(he.stock_code,he.stock_name||he.stock_code),be++);be>0?ElementPlus.ElMessage.success(`已加入 ${be} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function vt(){const s=f.value;if(s.length===0)return;const o=q.value.filter(be=>s.includes(be.id)),W=[...new Map(o.map(be=>[be.stock_code,be])).values()];try{const he=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:W.map(ot=>({stock_code:ot.stock_code,stock_name:ot.stock_name||""}))})})).json();he&&he.success?ElementPlus.ElMessage.success(`已登记 ${he.count||W.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(he&&he.detail||"批量加入组合失败")}catch(be){console.warn("batchAddToPortfolio failed:",be),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function wt(){if(_.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${_.value.length} 只股票？`,"提示",{type:"warning"});for(const s of _.value)await Vt(s);_.value=[],ElementPlus.ElMessage.success("已移除")}catch(s){s&&s.message!=="cancel"&&console.warn("batchRemoveWatchlist:",s)}}function Rt(s){const o=_.value.indexOf(s);o>=0?_.value.splice(o,1):_.value.push(s)}function ta(){f.value.length===q.value.length?f.value=[]:f.value=q.value.map(s=>s.id)}function Qt(){_.value.length===O.value.length?_.value=[]:_.value=O.value.map(s=>s.code)}async function Lt(){if(f.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${f.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const o=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:f.value})})).json();o.success?(ElementPlus.ElMessage.success(o.message),f.value=[],Xe()):ElementPlus.ElMessage.error(o.message||"删除失败")}catch{}}async function It(){try{const o=await(await fetch("/api/ai/auto-config")).json();o.success&&(G.value=o.data,o.data.evaluate_scope&&(ee.value=o.data.evaluate_scope))}catch(s){console.warn("loadAutoEvaluateConfig failed:",s)}}async function Ye(){D.value=!0;try{G.value.evaluate_scope=ee.value;const o=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G.value)})).json();o.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),le.value=!1):ElementPlus.ElMessage.error(o.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{D.value=!1}}const Nt=e(!1);async function kt(){Nt.value=!0;try{const o=await(await fetch("/api/watchlist")).json();o.success&&(O.value=o.stocks||[])}catch(s){console.warn("loadWatchlist failed:",s)}finally{Nt.value=!1}}async function At(s,o){try{const be=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s,name:o})})).json();if(be.success)return be.existed||O.value.push({code:s,name:o,added_at:new Date().toISOString()}),!0}catch(W){console.warn("addToWatchlist failed:",W)}return!1}async function Vt(s){try{await fetch(`/api/watchlist/${encodeURIComponent(s)}`,{method:"DELETE"}),O.value=O.value.filter(o=>o.code!==s)}catch(o){console.warn("removeFromWatchlist failed:",o)}}async function Wt(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),O.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(s){console.warn("clearWatchlist failed:",s)}}async function aa(s,o){ae.value.has(s)?(await Vt(s),ElementPlus.ElMessage.info("已移除自选")):await At(s,o)&&ElementPlus.ElMessage.success("已加入自选")}async function $t(s,o){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(s,o||"");const W=new Date().toISOString().split("T")[0],be=b.value||W;c.value="kline",H.value=null,m.value="",C("stockKlineChart"),L.value=null,g.value=!0,v.value=!1,r.value=!0,nextTick(()=>l());try{const he=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${be}`);L.value=await he.json()}catch{L.value={stock:s,name:o,total_days:0}}finally{g.value=!1}await nextTick(),await T("daily"),k(),I(s)}const Xt=e(!1);async function Zt(){var s;if(O.value.length!==0){Xt.value=!0;try{const W=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();W.success&&W.loaded>0?(((s=W.details)==null?void 0:s.loaded)||[]).forEach(be=>Ce.value.add(be.code)):W.loaded===0&&W.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(o){console.error("预加载K线失败:",o)}finally{Xt.value=!1}}}async function ua(s,o){w.value=!0,H.value=null,m.value="",n.value="fetching",v.value=!1,C();const W=new Date().toISOString().split("T")[0],be=b.value||W;try{const he=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${be}`);L.value=await he.json()}catch{L.value={stock:s,name:o,total_days:0}}c.value="ai",r.value=!0,await nextTick();try{const ot=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s,stock_name:o})})).json();ot.success?(H.value=ot.data,Xe()):(m.value=ot.message||"评估失败",ElementPlus.ElMessage.error(m.value))}catch{m.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(m.value)}finally{w.value=!1,n.value=""}}async function Ut(){O.value.length!==0&&(K.value=!0,te.value=O.value.map(s=>s.code).join(","))}async function V(){_.value.length!==0&&(K.value=!0,te.value=_.value.join(","))}async function pe(){if(!xe.value.trim()){qe.value=[];return}ie.value=!0;try{const o=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(xe.value)}`)).json();qe.value=(o.results||[]).filter(W=>!ae.value.has(W.code))}catch(s){console.warn("searchStockForWatchlist failed:",s)}finally{ie.value=!1}}async function Le(){try{const o=await(await fetch("/api/data-refresh/config")).json();ye.value=o}catch(s){console.error("加载数据刷新配置失败:",s)}}async function Ee(){se.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ye.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{se.value=!1}}async function dt(){var s;Re.value=!0;try{const W=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();W.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((s=W.parser_stats)==null?void 0:s.dates_count)||0}交易日`),P.clear(),await Le()):ElementPlus.ElMessage.error(W.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Re.value=!1}}const st=e(!1);async function Tt(){st.value=!0;try{const o=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(o.success){const W=o.result||{},be=o.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${W.pulled||0}/${W.total||0}, 财务 ${be.pulled||0}/${be.total||0}`),P.clear(),await Le()}else ElementPlus.ElMessage.error(o.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{st.value=!1}}const Kt=p(()=>{const s={};for(const o of q.value){const W=(o.evaluate_time||"").split("T")[0];s[W]||(s[W]=[]),s[W].push(o)}for(const o in s)s[o].sort((W,be)=>be.evaluate_time.localeCompare(W.evaluate_time));return s}),Ht=p(()=>{const s={};for(const o of q.value){const W=o.stock_code;s[W]||(s[W]=[]),s[W].push(o)}for(const o in s)s[o].sort((W,be)=>be.evaluate_time.localeCompare(W.evaluate_time));return s}),Ct=p(()=>{const s={};for(const o of q.value){const W=(o.evaluate_time||"").split("T")[0].slice(0,7);s[W]||(s[W]=[]),s[W].push(o)}for(const o in s)s[o].sort((W,be)=>be.evaluate_time.localeCompare(W.evaluate_time));return s}),sa=p(()=>Object.keys(Ht.value).length),oa=p(()=>{const s=q.value.length;return s===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(W=>{const be=q.value.filter(he=>he.result.total_score>=W.min&&he.result.total_score<=W.max).length;return{...W,count:be,pct:Math.round(be/s*100)}})});async function la(){if(!d.value)return;const s=O.value.find(o=>o.code===d.value);if(s){w.value=!0,H.value=null,m.value="",n.value="fetching";try{L.value={stock:s.code,name:s.name,total_days:0},r.value=!0,c.value="ai",await nextTick();const W=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s.code,stock_name:s.name,strategy:S.value})})).json();W.success?(H.value=W.data,Xe(),d.value=""):(m.value=W.message||"评估失败",ElementPlus.ElMessage.error(m.value))}catch{m.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(m.value)}finally{w.value=!1,n.value=""}}}function Ot(s){const o=F.value.indexOf(s);o>=0?F.value.splice(o,1):F.value.push(s)}function ea(s){const W=(Kt.value[s]||[]).map(he=>he.id);W.every(he=>f.value.includes(he))?f.value=f.value.filter(he=>!W.includes(he)):W.forEach(he=>{f.value.includes(he)||f.value.push(he)})}function Sa(s){const W=(Ct.value[s]||[]).map(he=>he.id);W.every(he=>f.value.includes(he))?f.value=f.value.filter(he=>!W.includes(he)):W.forEach(he=>{f.value.includes(he)||f.value.push(he)})}function va(s){const o=j.value.indexOf(s);o>=0?j.value.splice(o,1):j.value.push(s)}function fa(s){const W=(Ht.value[s]||[]).map(he=>he.id);W.every(he=>f.value.includes(he))?f.value=f.value.filter(he=>!W.includes(he)):W.forEach(he=>{f.value.includes(he)||f.value.push(he)})}const Pt={},ia={};function ga(s,o,W){if(!s||(W&&(ia[o]={el:s,records:W}),Pt[o]===s))return;const be=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,he=()=>{Object.keys(Pt).forEach(Ke=>{if(Pt[Ke]&&Pt[Ke]!==s){try{Pt[Ke].dispose()}catch{}delete Pt[Ke]}});const ot=[...W].sort((Ke,gt)=>Ke.evaluate_time.localeCompare(gt.evaluate_time)),et=ot.map(Ke=>(Ke.evaluate_time||"").split("T")[0]),it=ot.map(Ke=>{var gt;return((gt=Ke.result)==null?void 0:gt.total_score)??null}),Gt=ot.map(Ke=>{var gt;return((gt=Ke.result)==null?void 0:gt.level)??""}),qt={primary:E("--qc-primary-600")||"#b8922a",textPrimary:E("--text-primary")||"#1f2937",textSecondary:E("--text-secondary")||"#6b7280",border:E("--border-light")||"#e5e7eb",up:E("--color-success")||"#67c23a",down:E("--color-danger")||"#f56c6c"},Bt=[];for(let Ke=1;Ke<it.length;Ke++)it[Ke]!=null&&it[Ke-1]!=null&&Math.abs(it[Ke]-it[Ke-1])>=15&&Bt.push({name:"大幅变化",coord:[et[Ke],it[Ke]],value:(it[Ke]-it[Ke-1]>0?"↑":"↓")+Math.abs(it[Ke]-it[Ke-1]),symbol:"pin",symbolSize:32,itemStyle:{color:it[Ke]-it[Ke-1]>0?qt.up:qt.down}});const Et=echarts.init(s);Et.setOption({tooltip:{trigger:"axis",backgroundColor:E("--bg-card")||"#ffffff",borderColor:qt.border,textStyle:{color:qt.textPrimary},formatter:function(Ke){var ra;const gt=(ra=Ke[0])==null?void 0:ra.dataIndex,ya=gt!=null?Gt[gt]:"";return et[gt]+"<br/>得分: "+it[gt]+(ya?" ("+ya+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:et,axisLabel:{fontSize:10,rotate:30,color:qt.textSecondary},axisLine:{lineStyle:{color:qt.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:qt.textSecondary},splitLine:{lineStyle:{color:qt.border}}},series:[{data:it,type:"line",smooth:!0,lineStyle:{color:qt.primary,width:2},itemStyle:{color:qt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:E("--primary-rgb")?"rgba("+E("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:E("--primary-rgb")?"rgba("+E("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:Bt.length>0?{data:Bt}:void 0}]}),Pt[o]=Et};be?be().then(he).catch(()=>{}):he()}function Ca(){Object.keys(ia).forEach(s=>{const o=ia[s];if(!(!o||!o.el)){if(Pt[s]){try{Pt[s].dispose()}catch{}delete Pt[s]}ga(o.el,s,o.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Ca));async function qa(s){H.value=s,v.value=!1,C();try{const o=await fetch(`/api/calendar/stock/${s.stock_code}?date=${b.value}`);L.value=await o.json()}catch{L.value={stock:s.stock_code,name:s.stock_name||s.stock_code,total_days:0,history:[]}}r.value=!0,c.value="ai"}async function ha(){if(!te.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const s=te.value.split(/[,，\s]+/).filter(et=>et.trim());if(s.length===0)return;A.value=!0,M.value=s.length,R.value=0,z.value="",X.value={},J.value={},re.value={},s.forEach(et=>{X.value[et]="pending",J.value[et]=null});const o={"Content-Type":"application/json"};let W=0,be=0,he=!1;try{const et=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:o,body:JSON.stringify({stock_codes:s})});if(et.ok&&et.body){he=!0;const it=et.body.getReader(),Gt=new TextDecoder("utf-8");let qt="",Bt=!1;for(;!Bt;){const{value:Et,done:Ke}=await it.read();Bt=Ke,qt+=Gt.decode(Et||new Uint8Array,{stream:!Bt});let gt;for(;(gt=qt.indexOf(`

`))>=0;){const ya=qt.slice(0,gt);qt=qt.slice(gt+2);const ra=ya.split(`
`).find(Pa=>Pa.startsWith("data: "));if(!ra)continue;let xt;try{xt=JSON.parse(ra.slice(6))}catch{continue}xt.type==="start"?xt.total&&(M.value=xt.total):xt.type==="item"?(R.value++,z.value=xt.stock_code,xt.success?(X.value[xt.stock_code]="success",J.value[xt.stock_code]=xt,W++):(X.value[xt.stock_code]="error",re.value[xt.stock_code]=xt.error||"评估失败",be++)):xt.type==="done"&&(typeof xt.success=="number"&&(W=xt.success),typeof xt.fail=="number"&&(be=xt.fail))}}if(qt.trim()){const Et=qt.split(`
`).find(Ke=>Ke.startsWith("data: "));if(Et)try{const Ke=JSON.parse(Et.slice(6));Ke.type==="item"?(R.value++,z.value=Ke.stock_code,Ke.success?(X.value[Ke.stock_code]="success",J.value[Ke.stock_code]=Ke,W++):(X.value[Ke.stock_code]="error",re.value[Ke.stock_code]=Ke.error||"评估失败",be++)):Ke.type==="done"&&(typeof Ke.success=="number"&&(W=Ke.success),typeof Ke.fail=="number"&&(be=Ke.fail))}catch{}}}}catch{he=!1}if(!he){W=0,be=0,R.value=0;for(const et of s){z.value=et,X.value[et]="running";try{const Gt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:o,body:JSON.stringify({stock_code:et.trim(),stock_name:et.trim()})})).json();Gt.success?(X.value[et]="success",J.value[et]=Gt.data,W++):(X.value[et]="error",re.value[et]=Gt.message&&Gt.message!=="success"?Gt.message:"评估失败",be++)}catch(it){X.value[et]="error",re.value[et]="网络错误: "+(it&&it.message?it.message:it),be++}R.value++}}z.value="",await Xe();const ot=s.length;setTimeout(()=>{be===0?ElementPlus.ElMessage.success(`评估完成 成功 ${W}/${ot}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${W}/${ot} · 失败 ${be}`),A.value=!1},500)}return{quickEvalStock:d,evalStrategy:S,watchlistSort:u,watchlist:O,watchlistCodes:ae,sortedWatchlist:x,getWatchlistScore:h,getLatestScore:Z,addSearchResult:fe,evaluatedCodes:de,klineLoadedCodes:Ce,markKlineLoaded:Ne,watchlistSearch:xe,watchlistResults:qe,watchlistSearching:ie,dataRefreshConfig:ye,dataRefreshReloading:Re,dataRefreshSaving:se,aiHistoryLoading:Y,aiHistoryError:Q,aiHistoryTotal:je,aiHistoryLoadingMore:Ie,hasMoreAiHistory:Ve,loadMoreAiHistory:He,watchlistLoading:Nt,doAiEvaluate:Me,loadAiHistory:Xe,deleteSingleHistory:Ze,toggleSelectHistory:bt,clearSelection:B,clearWatchlistSelection:me,batchReevaluateHistory:Ue,batchAddToWatchlist:Ge,batchAddToPortfolio:vt,batchRemoveWatchlist:wt,toggleSelectWatchlist:Rt,selectAllHistory:ta,selectAllWatchlist:Qt,deleteSelectedHistory:Lt,loadAutoEvaluateConfig:It,saveAutoEvaluateConfig:Ye,loadWatchlist:kt,addToWatchlist:At,removeFromWatchlist:Vt,clearWatchlist:Wt,toggleWatchlist:aa,showStockKline:$t,preloadingKline:Xt,preloadWatchlistKline:Zt,watchlistEvaluate:ua,batchEvaluateWatchlist:Ut,batchEvaluateSelected:V,searchStockForWatchlist:pe,loadDataRefreshConfig:Le,saveDataRefreshConfig:Ee,triggerDataReload:dt,triggerDataPull:Tt,dataPullRunning:st,groupedByDate:Kt,aiHistoryByStock:Ht,groupedByMonth:Ct,aiHistoryStockCount:sa,scoreDistribution:oa,quickEvaluate:la,toggleDateExpand:Ot,toggleSelectDate:ea,toggleSelectMonth:Sa,toggleStockExpand:va,toggleSelectStock:fa,registerTrendChart:ga,viewAiResult:qa,doBatchEvaluate:ha,realtimeQuotes:rt,realtimeDegraded:at,realtimeWsState:lt,connectRealtimeQuotes:ce,disconnectRealtimeQuotes:N,quoteWarningFor:ct,realtimeQuoteColor:Qe,realtimePriceText:Je,realtimePctText:yt,realtimeRatioText:_t,REALTIME_DEGRADED_TEXT:ne,REALTIME_FALLBACK_TEXT:Se}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:p}=Vue,t=e([]),y=e(null),b=e([]),L=e(!1),c=e(!1),r=e(!1),g=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),v=e(!1),P=e(!1),l=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),T=e(!1),k=e("positions"),C=e(30),q=e(!1),w=e(""),n=e(!1),i=e({dates:[],equity:[],values:[]}),m=p(()=>t.value.length),H=e("metrics"),I=e(!1),G=e(""),ee=e(!1),te=e({metrics:null,rules:[],rebalance:null}),A=p(function(){const u=te.value.metrics;if(!u)return[];const O=function(Y){return Y==null?"--":Number(Y).toFixed(2)+"%"},ae=function(Y){return Y==null?"--":Number(Y).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:O(u.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:O(u.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:O(u.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:O(u.cvar)},{key:"max_drawdown",label:"最大回撤",value:O(u.max_drawdown)},{key:"annual_return",label:"年化收益",value:O(u.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ae(u.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ae(u.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ae(u.calmar_ratio)},{key:"beta",label:"Beta",value:ae(u.beta)}]});async function M(){I.value=!0;try{const u=await(await fetch("/api/portfolio/risk?days=60")).json(),O=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ae=u&&u.success?u.risk:null,Y=O&&O.success?O.rules||[]:[],Q=O&&O.success?O.rebalance:null;te.value={metrics:ae,rules:Y,rebalance:Q},ee.value=!!(ae&&Object.keys(ae).length>0),G.value=u&&u.note||O&&O.note||""}catch(u){console.warn("[portfolio] 加载风险数据失败:",u),ee.value=!1,G.value="风险数据加载失败"}finally{I.value=!1}}async function R(){L.value=!0,c.value=!1;try{const O=await(await fetch("/api/portfolio")).json();O.success?(t.value=O.positions||[],y.value=O.summary||null):c.value=!0}catch(u){console.warn("[portfolio] 加载持仓失败:",u),c.value=!0}finally{L.value=!1}}async function z(){const u=g.value,O=(u.stock_code||"").trim();if(!O){ElementPlus.ElMessage.warning("请输入股票代码");return}const ae=Number(u.cost_price),Y=Number(u.quantity);if(!(ae>0)||!(Y>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}v.value=!0;try{const x=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:O,stock_name:(u.stock_name||"").trim(),cost_price:ae,quantity:Y})})).json();x.success?(ElementPlus.ElMessage.success(x.message||"持仓已更新"),r.value=!1,g.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await R(),K(C.value)):ElementPlus.ElMessage.error(x.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{v.value=!1}}async function X(u){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+u+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ae=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(u),{method:"DELETE"})).json();ae.success?(ElementPlus.ElMessage.success("已删除持仓"),await R(),F(),K(C.value)):ElementPlus.ElMessage.error(ae.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function J(u,O){l.value={stock_code:u,stock_name:O||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},P.value=!0}async function re(){const u=l.value;if(!u.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const O=Number(u.price),ae=Number(u.quantity);if(!(O>0)||!(ae>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}T.value=!0;try{const Q=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:u.stock_code,stock_name:u.stock_name||"",action:u.action,price:O,quantity:ae,trade_date:u.trade_date||"",note:(u.note||"").trim()})})).json();Q.success?(ElementPlus.ElMessage.success(Q.message||"调仓已记录"),P.value=!1,await R(),await F(),K(C.value)):ElementPlus.ElMessage.error(Q.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{T.value=!1}}async function F(){try{const O=await(await fetch("/api/portfolio/trades")).json();O.success&&(b.value=O.trades||[])}catch(u){console.warn("[portfolio] 加载调仓记录失败:",u)}}const j=u=>(getComputedStyle(document.documentElement).getPropertyValue(u)||"").trim();function D(u){if(!u||!u.length)return[];let O=u[0]||0;const ae=[];for(let Y=0;Y<u.length;Y++){const Q=u[Y]||0;Q>O&&(O=Q),ae.push(O>0?Math.round((Q-O)/O*1e3)/10:0)}return ae}function f(){const u={primary:j("--qc-primary-600")||"#b8922a",textPrimary:j("--text-primary")||"#1f2937",textSecondary:j("--text-secondary")||"#6b7280",border:j("--border-light")||"#e5e7eb",up:j("--color-rise")||"#E63946",down:j("--color-fall")||"#2E7D32"},O=i.value;return{tooltip:{trigger:"axis",backgroundColor:j("--bg-card")||"#ffffff",borderColor:u.border,textStyle:{color:u.textPrimary},formatter:function(ae){const Y=ae[0]?ae[0].dataIndex:-1,Q=O.dates[Y]||"",x=O.equity[Y],h=O.values[Y];let Z=Q||"";return x!=null&&(Z+="<br/>组合净值: "+x),h!=null&&(Z+="<br/>组合市值: "+h),Z}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:O.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:u.textSecondary},axisLine:{lineStyle:{color:u.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:u.textSecondary},splitLine:{lineStyle:{color:u.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:u.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:O.equity,smooth:!0,showSymbol:!1,lineStyle:{color:u.primary,width:2},itemStyle:{color:u.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:j("--primary-rgb")?"rgba("+j("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:j("--primary-rgb")?"rgba("+j("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:D(O.equity),smooth:!0,showSymbol:!1,lineStyle:{color:u.down,width:1.5},itemStyle:{color:u.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function _(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function le(u,O,ae){i.value={dates:u||[],equity:O||[],values:ae||[]},n.value=!!u&&u.length>0,n.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",f,{key:"portfolio-equity"}):_()}async function K(u){q.value=!0,w.value="";const O=Number(u)||C.value||30;C.value=O;try{const Y=await(await fetch("/api/portfolio/equity_curve?days="+O)).json();Y.success?(w.value=Y.note||"",le(Y.dates||[],Y.equity||[],Y.values||[])):(w.value="数据暂不可用",_())}catch(ae){console.warn("[portfolio] 加载收益曲线失败:",ae),w.value="数据暂不可用",_()}finally{q.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function E(u,O){if(u==null||u===""||isNaN(Number(u)))return"--";const ae=Number(u),Y=O??2;return(ae>=0?"+":"")+ae.toFixed(Y)}function d(u,O){if(u==null||u===""||isNaN(Number(u)))return"--";const ae=Number(u),Y=O??2;return(ae>=0?"+":"")+ae.toFixed(Y)+"%"}function S(u){if(u==null||u===""||isNaN(Number(u)))return"";const O=Number(u);return O>0?"portfolio-up":O<0?"portfolio-down":""}return{positions:t,summary:y,trades:b,loading:L,loadError:c,showAddForm:r,addForm:g,addSaving:v,tradeFormVisible:P,tradeForm:l,tradeSaving:T,portfolioTab:k,equityDays:C,equityLoading:q,equityNote:w,equityHasData:n,portfolioCount:m,loadPortfolio:R,addPosition:z,removePosition:X,openTradeForm:J,submitTrade:re,loadTrades:F,loadEquity:K,fmtSigned:E,fmtSignedPct:d,signClass:S,riskTab:H,riskLoading:I,riskNote:G,riskHasData:ee,riskData:te,riskMetricList:A,loadRisk:M}}}})();(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(r,g){var v=Number(r);return isFinite(v)?v:typeof g=="number"?g:0}function e(r){var g=Array.isArray(r)?r:[];if(g.length<2)return null;for(var v=-1/0,P=0,l=0,T=0,k=0,C=0;C<g.length;C++){var q=a(g[C].equity!=null?g[C].equity:g[C].value);q>v&&(v=q,P=C);var w=v>0?(v-q)/v*100:0;w>l&&(l=w,T=P,k=C)}function n(i){return g[i]&&g[i].date?g[i].date:""}return{maxDrawdown:Math.round(l*100)/100,peakIndex:T,troughIndex:k,peakDate:n(T),troughDate:n(k)}}function p(r){for(var g=r||{},v={},P=Object.keys(g).sort(),l=0;l<P.length;l++){var T=P[l],k=String(T).slice(0,4);/^\d{4}$/.test(k)&&(v[k]=(v[k]||0)+a(g[T]))}var C=Object.keys(v).sort();return C.map(function(q){return{year:q,return:Math.round(v[q]*100)/100}})}function t(r){var g=Array.isArray(r)?r:[],v={};g.forEach(function(T){(T.points||[]).forEach(function(k){k&&k.date&&(v[k.date]=1)})});var P=Object.keys(v).sort(),l=g.map(function(T){var k={};return(T.points||[]).forEach(function(C){C&&C.date&&(k[C.date]=a(C.value!=null?C.value:C.equity))}),{name:T.name||"",data:P.map(function(C){return C in k?k[C]:null})}});return{dates:P,series:l}}function y(r){var g=r||{},v=function(l){return a(l)},P=function(l,T){var k=v(l);return isFinite(k)?k.toFixed(T):"--"};return[{key:"total_return",label:"总收益",value:P(g.total_return,2),suffix:"%",dir:v(g.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:P(g.annual_return,2),suffix:"%",dir:v(g.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:P(g.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:P(g.sharpe_ratio,2),suffix:"",dir:v(g.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:P(g.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:P(g.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(v(g.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:P(g.volatility,2),suffix:"%",dir:""}]}function b(r){var g=r==null?"":String(r);return/[",\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}function L(r){var g=r||{},v=[];v.push("回测指标"),v.push("指标,数值"),(g.metrics||[]).forEach(function(n){v.push(b(n.label)+","+b((n.value||"")+(n.suffix||"")))}),v.push(""),v.push("净值曲线");var P=["日期"].concat((g.series||[]).map(function(n){return n.name}));v.push(P.map(b).join(","));for(var l=g.dates||[],T=g.series||[],k=0;k<l.length;k++){for(var C=[l[k]],q=0;q<T.length;q++){var w=T[q].data&&T[q].data[k];C.push(w??"")}v.push(C.map(b).join(","))}return v.push(""),v.push("交易明细"),v.push("日期,股票代码,方向,原因"),(g.trades||[]).forEach(function(n){v.push(b(n.date)+","+b(n.stock)+","+b(n.action)+","+b(n.reason))}),v.join(`
`)}function c(r){return r==="buy"?"买入":r==="sell"?"卖出":r||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:p,buildNavSeries:t,buildMetrics:y,buildBacktestCsv:L,tradeActionText:c}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:p}=Vue,t=window.QuantBacktest||{},y=a||{},b=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],c=(Array.isArray(y.backtestStrategies)&&y.backtestStrategies.length?y.backtestStrategies:b).map(j=>({id:j.id,name:j.name})),r=e(c.length?[c[0].id]:[]),g=e(q()),v=e(1e5),P=e(3e-4),l=e(!1),T=e(!1),k=e(null),C=e("");function q(){const j=new Date,D=new Date;D.setFullYear(D.getFullYear()-1);const f=_=>_.getFullYear()+"-"+String(_.getMonth()+1).padStart(2,"0")+"-"+String(_.getDate()).padStart(2,"0");return[f(D),f(j)]}function w(j){const D=r.value.indexOf(j);D>=0?r.value.length>1&&r.value.splice(D,1):r.value.push(j)}function n(j){const D=c.find(f=>f.id===j);return D?D.name:j}function i(j){const D=j.summary||j;return{strategy_id:D.strategy_id,start_date:D.start_date,end_date:D.end_date,total_days:D.total_days,total_return:D.total_return,annual_return:D.annual_return,max_drawdown:D.max_drawdown,volatility:D.volatility,sharpe_ratio:D.sharpe_ratio,sortino_ratio:D.sortino_ratio,win_rate:D.win_rate,profit_loss_ratio:D.profit_loss_ratio,avg_positions:D.avg_positions!=null?D.avg_positions:D.avg_positions_per_day,total_trades:D.total_trades,turnover_rate:D.turnover_rate,success:D.success!==!1,message:D.message||"",insample_total_return:D.insample_total_return!=null?D.insample_total_return:null,outsample_total_return:D.outsample_total_return!=null?D.outsample_total_return:null,out_sample_ratio:D.out_sample_ratio!=null?D.out_sample_ratio:.2,overfit_warning:!!D.overfit_warning,overfit_reason:D.overfit_reason||""}}function m(j){return(Array.isArray(j)?j:[]).map(D=>({date:D.date,value:D.equity!=null?D.equity:D.value}))}function H(j,D){const f=i(D),_=m(D.equity_curve),le=D.monthly_returns||{},K=Array.isArray(D.trade_history)?D.trade_history:[],E={id:j,name:n(j),summary:f,equityCurve:_,monthlyReturns:le,trades:K};let d=null;if(l.value){const S=Number(v.value)||1e5;d={name:"现金基准",points:_.map(u=>({date:u.date,value:S}))}}return{success:!0,mode:"single",strategies:[E],primary:E,benchmark:d,period:(f.start_date||"")+" ~ "+(f.end_date||"")}}function I(j,D){const f=D.strategy_results||{},_=j.map(E=>{const d=f[E];if(!d)return null;const S=i(d);return{id:E,name:n(E),summary:S,equityCurve:m(d.equity_curve),monthlyReturns:d.monthly_returns||{},trades:Array.isArray(d.trade_history)?d.trade_history:[]}}).filter(E=>E&&E.summary.success!==!1),le=_.length?_[0]:null;let K=null;return l.value&&(K={name:"等权组合基准",points:m(D.portfolio_equity)}),{success:_.length>0,mode:"multi",strategies:_,primary:le,benchmark:K,period:le?le.summary.start_date+" ~ "+le.summary.end_date:""}}const G=p(()=>{const j=k.value;return!j||!j.primary?[]:t.buildMetrics?t.buildMetrics(j.primary.summary):[]}),ee=p(()=>{const j=k.value;return!j||!j.primary||!j.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(j.primary.monthlyReturns):[]}),te=p(()=>{const j=k.value;return!j||!j.primary?[]:(j.primary.trades||[]).slice().sort((D,f)=>String(f.date||"").localeCompare(String(D.date||"")))}),A=p(()=>{const j=k.value;return!j||!j.strategies||j.strategies.length<2?[]:j.strategies.map(D=>({name:D.name,metrics:t.buildMetrics?t.buildMetrics(D.summary):[]}))}),M=p(()=>{const j=k.value;return!j||!j.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(j.primary.equityCurve):null});async function R(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const D=r.value;if(!D.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const f=g.value,_={start_date:f&&f[0]||void 0,end_date:f&&f[1]||void 0},le={"Content-Type":"application/json"};T.value=!0,k.value=null,C.value="";try{if(D.length===1){const K=Object.assign({},_,{initial_capital:Number(v.value)||1e5,commission_rate:Number(P.value)||3e-4}),E=await fetch("/api/backtest/"+encodeURIComponent(D[0]),{method:"POST",headers:le,body:JSON.stringify(K)});if(!E.ok){const S=await E.json().catch(()=>({}));throw new Error(S.detail||"回测失败")}const d=await E.json();if(!d.success)throw new Error(d.message||"回测失败");k.value=H(D[0],d)}else{const K=await fetch("/api/backtest/multi",{method:"POST",headers:le,body:JSON.stringify(Object.assign({},_,{strategy_ids:D}))});if(!K.ok){const d=await K.json().catch(()=>({}));throw new Error(d.detail||"回测失败")}const E=await K.json();if(!E.success)throw new Error(E.message||"多策略回测失败");if(k.value=I(D,E.data||{}),!k.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(K){C.value=K&&K.message?K.message:"回测失败",ElementPlus.ElMessage.error(C.value)}finally{T.value=!1}}function z(){const j=k.value,D={dates:[],series:[]};if(!j)return D;const f=j.strategies.map(le=>({name:le.name,points:le.equityCurve}));j.benchmark&&j.benchmark.points&&j.benchmark.points.length&&f.push({name:j.benchmark.name,points:j.benchmark.points});const _=t.buildNavSeries?t.buildNavSeries(f):D;return X(_,j)}function X(j,D){const f=O=>(getComputedStyle(document.documentElement).getPropertyValue(O)||"").trim(),_={primary:f("--qc-primary-600")||"#b8922a",success:f("--color-success")||"#4CAF50",accent:f("--color-accent")||"#F59E0B",info:f("--color-info")||"#1976d2",ai:f("--color-ai")||"#6366f1",textPrimary:f("--text-primary")||"#1f2937",textSecondary:f("--text-secondary")||"#6b7280",border:f("--border-light")||"#e5e7eb",up:f("--color-rise")||"#E63946",down:f("--color-fall")||"#2E7D32",bg:f("--bg-card")||"#ffffff"},le=[_.primary,_.success,_.accent,_.info,_.ai],E=_.bg.length===7&&parseInt(_.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",d=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(D.primary?D.primary.equityCurve:[]):null,S=d&&d.peakDate&&d.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:_.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+d.maxDrawdown+"%",xAxis:d.peakDate,itemStyle:{color:_.down}},{xAxis:d.troughDate}]]}:void 0,u=j.series.map((O,ae)=>{const Y=D.benchmark&&O.name===D.benchmark.name,Q=le[ae%le.length];return{name:O.name,type:"line",data:O.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:Y?2:2.4,type:Y?"dashed":"solid",color:Q},itemStyle:{color:Q},emphasis:{focus:"series"},...ae===0&&S?{markArea:S}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:E,borderColor:_.border,textStyle:{color:_.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:_.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:j.dates,boundaryGap:!1,axisLine:{lineStyle:{color:_.border}},axisLabel:{color:_.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:_.textSecondary,fontSize:11},splitLine:{lineStyle:{color:_.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:_.border,textStyle:{color:_.textSecondary,fontSize:10}}],series:u}}function J(j){if(!j){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",z,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function re(){const j=k.value;if(!j||!j.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const D=j.strategies.map(u=>({name:u.name,points:u.equityCurve}));j.benchmark&&D.push({name:j.benchmark.name,points:j.benchmark.points});const f=t.buildNavSeries?t.buildNavSeries(D):{dates:[],series:[]},_=t.tradeActionText||(u=>u),le=te.value.map(u=>({date:u.date,stock:u.stock,action:_(u.action),reason:u.reason})),K=t.buildBacktestCsv?t.buildBacktestCsv({metrics:G.value,dates:f.dates,series:f.series,trades:le}):"",E=new Blob(["\uFEFF"+K],{type:"text/csv;charset=utf-8"}),d=URL.createObjectURL(E),S=document.createElement("a");S.href=d,S.download="backtest-"+j.strategies.map(u=>u.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",S.click(),URL.revokeObjectURL(d),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function F(j,D){return j==null||j===""||isNaN(Number(j))?"--":Number(j).toFixed(D??2)}return{btStrategyOptions:c,btSelectedStrategies:r,toggleBtStrategy:w,btDateRange:g,btCapital:v,btCommissionRate:P,btIncludeBenchmark:l,btRunning:T,btResult:k,btError:C,btMetrics:G,btAnnualReturns:ee,btTrades:te,btStrategyMetricsRows:A,btDrawdownRegion:M,runBacktestWorkbench:R,exportBacktestCSV:re,registerBacktestNavChart:J,btFmtNum:F}}}})();(function(){const{ref:a,computed:e,watch:p,onUnmounted:t}=Vue,y=g=>(getComputedStyle(document.documentElement).getPropertyValue(g)||"").trim(),b=72,L={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},c={stock:"📈 股票",bond:"📜 债券",commodity:"🛢 大宗商品",cash:"💰 现金"},r={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const g=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"🌱",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),v=a({}),P=a(!1),l=a({}),T=a({cycles:[]}),k=a(!1),C=a({autoRefresh:!0,refreshInterval:300}),q=a(""),w=a(""),n=a(!1),i=a("");let m=null;const H={x:0,y:0},I=e(()=>{const x=v.value;return["recession","recovery","overheat","stagflation"].map(Z=>{const fe=x[Z]||{};return{key:Z,name:fe.name||Z,icon:fe.icon||"📊",color:fe.color||y("--text-tertiary")||"#888",bg:fe.bg_color||y("--bg-card")||"#f5f5f5",textColor:fe.color||y("--text-primary")||"#333",tagline:fe.allocation&&r[Z]||""}})}),G=e(()=>{var h,Z,fe,de;const x=g.value.indicators||{};return[{key:"pmi",label:"PMI",value:(h=x.pmi)==null?void 0:h.toFixed(2),color:x.pmi>=50?y("--color-success")||"#43a047":y("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Z=x.gdp_growth)==null?void 0:Z.toFixed(2))+"%",color:y("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((fe=x.cpi)==null?void 0:fe.toFixed(2))+"%",color:x.cpi>1.2?y("--color-danger")||"#E53935":y("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((de=x.m2_growth)==null?void 0:de.toFixed(2))+"%",color:y("--color-success")||"#43a047"}]}),ee=x=>{x=x||{};const h=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Z=()=>y("--color-success")||"#43a047",fe=()=>y("--color-danger")||"#E53935",de=()=>y("--color-warning")||"#FF9800",Ce={宽松:Z(),中位:de(),偏低:fe(),高增长:Z(),承压:fe(),不利:fe()};return h.map(Ne=>{const xe=x[Ne.key]||{},qe=xe.score||0,ie=Math.min(100,Math.max(5,(qe+2)*25)),ye=qe>=.3?"#66BB6A":qe>=-.3?"#FFB74D":"#EF5350",Re=qe>=0?"#66BB6A":"#EF5350";return{key:Ne.key,label:Ne.label,scoreStr:qe.toFixed(2),level:xe.level||"—",barWidth:ie,barColor:ye,scoreColor:Re,color:Ce[xe.level]||"#888888"}})},te=e(()=>ee(g.value.dimension_scores)),A=e(()=>ee(l.value._dimensions)),M=e(()=>{var h;const x=((h=g.value.confidence)==null?void 0:h.level)||"";return x==="高"?"#43a047":x==="中"?"#FF9800":x==="低"?"#E53935":"var(--text-secondary)"}),R=e(()=>{var fe,de,Ce,Ne;const x=v.value,h={recovery:0,overheat:1,stagflation:2,recession:3},Z={};for(const[xe,qe]of Object.entries(x))Z[xe]={name:qe.name,icon:qe.icon,color:qe.color,lightColor:qe.bg_color,duration:"~"+(((fe=qe.historical_stats)==null?void 0:fe.avg_duration_months)||18)+"个月",order:h[xe]||0,period:((Ce=(de=qe.case_studies)==null?void 0:de[0])==null?void 0:Ce.split("：")[0])||"",avgMonths:((Ne=qe.historical_stats)==null?void 0:Ne.avg_duration_months)||18};return Z}),z=e(()=>{var qe,ie;const x=g.value.stage,Z={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[x]||{x:150,y:150},fe=g.value.dimension_scores||{},de=((qe=fe.growth)==null?void 0:qe.score)||0,Ce=((ie=fe.inflation)==null?void 0:ie.score)||0,Ne=Math.max(-30,Math.min(30,de*15)),xe=Math.max(-30,Math.min(30,-Ce*15));return{x:Z.x+Ne,y:Z.y+xe,prevX:H.x,prevY:H.y}}),X=e(()=>{var fe;const x=Math.min(100,((fe=g.value.timing)==null?void 0:fe.progress_percent)||0),h=g.value.color||"#4CAF50",Z=x>100?"linear-gradient(90deg, "+h+", #FF9800)":h;return{width:x+"%",background:Z}});function J(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[g.value.stage]||0}function re(){var x,h;return((h=(x=g.value)==null?void 0:x.timing)==null?void 0:h.progress_percent)||0}function F(){var x,h;return((h=(x=g.value)==null?void 0:x.timing)==null?void 0:h.duration_months)||0}function j(){var x,h;return((h=(x=g.value)==null?void 0:x.timing)==null?void 0:h.avg_duration_months)||18}function D(x){var de,Ce;const h=R.value,Z=((de=h[g.value.stage])==null?void 0:de.order)||0;return(((Ce=h[x])==null?void 0:Ce.order)||0)<Z}function f(x){return L[x]||x}function _(x){return c[x]||x}function le(x){const h=["#43a047","#f57c00","#1976d2","#757575"];return h[x-1]||h[3]}async function K(){try{const h=await(await fetch("/api/market/merrill-clock/stages")).json();h.success&&h.data&&(v.value=h.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function E(){k.value=!0;try{const h=await(await fetch("/api/market/merrill-clock/timeline")).json();if(h.success&&h.data){const Z=Array.isArray(h.data.cycles)?h.data.cycles.slice().reverse():[];T.value={cycles:Z}}}catch{console.warn("获取美林时钟时间轴失败")}finally{k.value=!1}}async function d(x){await u(x)}async function S(){var x,h;try{const fe=await(await fetch("/api/market/merrill-clock")).json(),de=fe.stage||"recovery",Ce=v.value[de]||{};if(g.value={...Ce,...fe,stage_cn:fe.stage_cn||Ce.stage_cn||"",stage_name:fe.stage_name||Ce.name||"",name:fe.name||Ce.name||"复苏期"},q.value=new Date().toLocaleTimeString("zh-CN"),i.value&&i.value!==de){const Ne=v.value,xe=((x=Ne[i.value])==null?void 0:x.name)||i.value,qe=((h=Ne[de])==null?void 0:h.name)||de;ElementPlus.ElMessage({message:"🔔 美林时钟阶段切换："+xe+" → "+qe,type:"warning",duration:6e3,showClose:!0})}i.value=de}catch(Z){console.error("获取美林时钟失败:",Z);const fe=v.value.recovery||{};g.value={...fe,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function u(x){var Z;P.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",l.value=v.value[x]||v.value.recovery||{};const h=((Z=g.value)==null?void 0:Z.stage)===x;l.value._isCurrent=h,h&&g.value&&(l.value._nextPrediction=g.value.next_stage_prediction,l.value._confidence=g.value.confidence,l.value._stage=g.value.stage,l.value._dimensions=g.value.dimension_scores);try{const de=await(await fetch("/api/market/merrill-clock/stage/"+x)).json();if(de.success&&de.data){const Ce={...v.value[x],...de.data};Ce._is_current!==void 0&&(Ce._isCurrent=Ce._is_current),Ce._current_timing&&(Ce._currentTiming=Ce._current_timing),Ce._last_period&&(Ce._lastPeriod=Ce._last_period),l.value._nextPrediction&&(Ce._nextPrediction=l.value._nextPrediction),l.value._confidence&&(Ce._confidence=l.value._confidence),l.value._stage&&(Ce._stage=l.value._stage),l.value._dimensions&&(Ce._dimensions=l.value._dimensions),Object.assign(l.value,Ce)}}catch(fe){console.warn("获取阶段详情失败:",fe)}}function O(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:C.value.autoRefresh,refreshInterval:C.value.refreshInterval})),C.value.autoRefresh?(clearInterval(m),m=setInterval(S,C.value.refreshInterval*1e3)):clearInterval(m),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ae(){n.value=!0,w.value="";try{const h=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();h.success?(w.value="重评估完成："+(h.stage_name||h.stage),await S(),ElementPlus.ElMessage.success("重评估完成")):(w.value=h.message||"重评估失败",ElementPlus.ElMessage.error(h.message||"重评估失败"))}catch{w.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{n.value=!1}}function Y(){const x=localStorage.getItem("merrill_clock_config");if(x)try{const h=JSON.parse(x);C.value={...C.value,...h}}catch{}C.value.autoRefresh&&(m=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),S()},C.value.refreshInterval*1e3))}function Q(){m&&clearInterval(m)}return t(()=>{Q()}),{merrillData:g,merrillStagesConfig:v,showMerrillDetail:P,merrillDetailData:l,merrillTimeline:T,timelineLoading:k,merrillClockConfig:C,merrillClockLastUpdated:q,merrillReevalResult:w,merrillReevalLoading:n,stages:I,indicatorList:G,dimensionScoreList:te,detailDimensionScoreList:A,confidenceColor:M,timelineStages:R,clockPosition:z,merrillProgressStyle:X,FULL_CYCLE_MONTHS:b,getStageAngle:J,getCycleProgress:re,getCurrentStageMonths:F,getStageTotalMonths:j,isStageCompleted:D,getCharLabel:f,getAssetName:_,getRankColor:le,fetchMerrillStages:K,fetchMerrillClock:S,loadMerrillTimeline:E,showTimelineStage:d,showStageDetail:u,saveMerrillClockConfig:O,doMerrillReevaluate:ae,startAutoRefresh:Y,stopAutoRefresh:Q}}})();(function(){function a(b){return getComputedStyle(document.documentElement).getPropertyValue(b).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const p=[];function t(b){typeof b=="function"&&p.push(b)}function y(){p.slice().forEach(function(b){try{b()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:t,refreshAllCharts:y,init(){return{getEChartsTheme:e,registerChart:t,refreshAllCharts:y}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const p=e("qcState");try{const b=localStorage.getItem("quant_sidebar_collapsed");b!==null&&p.sidebarCollapsed&&(p.sidebarCollapsed.value=b==="1")}catch{}if(!p)return{};const t=async b=>{if(window.__quantGoPage){await window.__quantGoPage(b.key,b.subPages[0]||"");return}p.currentPage.value=b.key,p.currentSubPage.value=b.subPages[0]||""},y=()=>{p.sidebarCollapsed.value=!p.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",p.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:p.menus,currentPage:p.currentPage,sidebarCollapsed:p.sidebarCollapsed,navigate:t,toggle:y,sanitizeHtml:p.sanitizeHtml,keyClick:p.keyClick,t:p.t}}}})();const pa={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,p={"layout-dashboard":ov,calendar:nv,bot:iv,"flask-conical":lv,zap:sv,settings:av,"chevron-down":tv,"chevron-right":ev,"chevron-left":Zu,menu:Xu,search:$u,bell:Qu,sun:Ju,moon:Yu,user:Gu,"user-round":Uu,home:Wu,x:Bu,database:Ku,activity:Hu,clock:Vu,"bar-chart-3":Fu,shield:ju,"hard-drive":Ou,"file-text":Nu,users:Iu,cpu:Lu,"pie-chart":Au,info:zu,"log-out":Ru,palette:Du,languages:Pu,refresh:Tu,download:Mu,"external-link":Eu,command:qu,sparkles:Cu,"trending-up":Su,"trending-down":xu,"circle-dot":_u,check:ku,"alert-triangle":wu,loader:bu,"arrow-left":yu,"arrow-right":hu,eye:gu,"eye-off":fu,lock:pu,"sliders-horizontal":mu,play:vu,history:uu,layers:du,"line-chart":cu,target:ru,"search-check":ou,star:nu,"message-circle":iu,"calendar-days":lu,"calendar-range":su,"calendar-check":au,brain:tu,lightbulb:eu,"octagon-x":Zd,flag:Xd,package:$d,"clipboard-list":Qd,pin:Jd,"radio-tower":Yd,gauge:Gd,landmark:Ud,"candlestick-chart":Wd,wallet:Bd,"badge-check":Kd,key:Hd,factory:Vd,trophy:Fd,rocket:jd,flame:Od,"map-pin":Nd,"scroll-text":Id,"book-open":Ld,dna:Ad,"bar-chart":zd,plus:Rd,"star-off":Dd,upload:Pd,gem:Td,"folder-open":Md,link:Ed,save:qd,"trash-2":Cd,pause:Sd,"help-circle":xd,"play-circle":_d,pencil:kd,folder:wd,code:bd},t=()=>p[e.name]||p["circle-dot"];return(y,b)=>(ue(),ma(rd(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},xa=(a,e)=>{const p=a.__vccOpts||a;for(const[t,y]of e)p[t]=y;return p},rv={name:"qc-sidebar",components:{AppIcon:pa},setup(){const a=_a("qcState");if(!a)return{};const e=nt(()=>a.menus&&a.menus.value||[]),p=nt(()=>a.currentPage&&a.currentPage.value||""),t=nt(()=>a.navMode&&a.navMode.value||"subnav"),y=nt({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:w=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=w)}}),b=Ft({}),L={research:"量化投研",platform:"平台管理"},c=["research","platform"],r=w=>p.value===w.key,g=(w,n)=>p.value===w.key&&a.currentSubPage&&a.currentSubPage.value===n,v=w=>Array.isArray(w.subPages)&&w.subPages.length>1,P=(w,n)=>a.subPageNames&&a.subPageNames[n]||n;function l(w){!v(w)||y.value||(b.value[w.key]=!b.value[w.key])}function T(){e.value.forEach(w=>{b.value[w.key]===void 0&&(b.value[w.key]=r(w))})}async function k(w,n){const i=n||w.subPages&&w.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(w.key,i):(a.currentPage.value=w.key,a.currentSubPage&&(a.currentSubPage.value=i)),a.navigateTo&&a.navigateTo(w.key,i)}function C(){y.value=!y.value;try{localStorage.setItem("sidebar_collapsed",y.value?"1":"0")}catch{}}function q(w){if(w.ctrlKey&&w.key.toLowerCase()==="b"&&(w.preventDefault(),C()),!w.ctrlKey&&!w.metaKey&&!w.altKey&&(w.key==="ArrowDown"||w.key==="ArrowUp")){const n=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),i=n.indexOf(document.activeElement);if(i>=0){w.preventDefault();const m=n[(i+(w.key==="ArrowDown"?1:n.length-1))%n.length];m&&m.focus()}}}return es(()=>{T(),document.addEventListener("keydown",q)}),ts(()=>document.removeEventListener("keydown",q)),{state:a,menus:e,currentPage:p,navMode:t,sidebarCollapsed:y,expandedMenus:b,GROUP_LABELS:L,GROUPS:c,isActive:r,isChildActive:g,hasChildren:v,subLabel:P,toggleSubmenu:l,navigate:k,toggleCollapse:C}}},cv={class:"qc-sidebar-logo"},dv={key:0,class:"qc-logo-text"},uv={class:"qc-sidebar-nav"},vv={key:0,class:"qc-nav-group"},mv={key:0,class:"qc-nav-group-label"},pv=["href","aria-current","onClick"],fv={key:0,class:"qc-sidebar-label"},gv={key:1,class:"qc-nav-badge"},hv=["aria-expanded","aria-controls","onClick"],yv=["id"],bv=["href","aria-current","onClick"],wv={class:"qc-sidebar-child-label"},kv={class:"qc-sidebar-footer"},_v=["aria-expanded","aria-label","title"];function xv(a,e,p,t,y,b){const L=Jt("AppIcon"),c=Jt("el-tooltip");return ue(),ge("nav",{class:pt(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[_e("div",cv,[e[1]||(e[1]=cd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Be("",!0):(ue(),ge("span",dv,Oe(t.state.t("login.title")),1))]),_e("div",uv,[(ue(!0),ge(ut,null,St(t.GROUPS,r=>(ue(),ge(ut,{key:r},[t.menus.some(g=>g.group===r)?(ue(),ge("div",vv,[t.sidebarCollapsed?Be("",!0):(ue(),ge("span",mv,Oe(t.GROUP_LABELS[r]),1)),(ue(!0),ge(ut,null,St(t.menus.filter(g=>g.group===r),g=>(ue(),ge(ut,{key:g.key},[_e("div",{class:pt(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(g),"is-child-open":t.navMode==="tree"&&t.expandedMenus[g.key]}])},[mt(c,{content:g.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:Ta(()=>[_e("a",{class:pt(["qc-sidebar-link",{"is-active":t.isActive(g)}]),href:"#"+g.key,"aria-current":t.isActive(g)?"page":null,onClick:Mt(v=>t.navigate(g),["prevent"])},[mt(L,{name:g.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Be("",!0):(ue(),ge("span",fv,Oe(g.name),1)),!t.sidebarCollapsed&&g.badge?(ue(),ge("span",gv,Oe(g.badge),1)):Be("",!0)],10,pv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)?(ue(),ge("button",{key:0,class:pt(["qc-sidebar-chevron",{"is-open":t.expandedMenus[g.key]}]),"aria-expanded":!!t.expandedMenus[g.key],"aria-controls":"submenu-"+g.key,"aria-label":"展开子菜单",onClick:v=>t.toggleSubmenu(g)},[mt(L,{name:"chevron-down",size:14})],10,hv)):Be("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)&&t.expandedMenus[g.key]?(ue(),ge("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+g.key},[(ue(!0),ge(ut,null,St(g.subPages,v=>(ue(),ge("a",{key:v,class:pt(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(g,v)}]),href:"#"+g.key+"-"+v,"aria-current":t.isChildActive(g,v)?"page":null,onClick:Mt(P=>t.navigate(g,v),["prevent"])},[_e("span",wv,Oe(t.subLabel(g,v)),1)],10,bv))),128))],8,yv)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),_e("div",kv,[_e("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...r)=>t.toggleCollapse&&t.toggleCollapse(...r))},[mt(L,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,_v)])],2)}const Sv=xa(rv,[["render",xv]]),Cv={name:"qc-header",components:{AppIcon:pa},setup(){const a=_a("qcState");if(!a)return{};const e=Ft(!1),p=nt(()=>a.currentUser&&a.currentUser.value||null),t=nt(()=>a.navMode&&a.navMode.value||"subnav"),y=nt(()=>{const x=a.currentPage&&a.currentPage.value,h=(a.menus&&a.menus.value||[]).find(Z=>Z.key===x);return!!(h&&h.subPages&&h.subPages.length)}),b=nt(()=>{const x=a.currentPage&&a.currentPage.value,h=a.currentPageName&&a.currentPageName.value;if(h)return h;const Z=(a.menus&&a.menus.value||[]).find(fe=>fe.key===x);return Z&&Z.name||x||""}),L=nt(()=>{const x=a.currentSubPage&&a.currentSubPage.value;return x&&a.subPageNames&&a.subPageNames[x]||x||""}),c=Ft(typeof window<"u"?window.innerWidth<768:!1);function r(){c.value=window.innerWidth<768}es(()=>window.addEventListener("resize",r)),ts(()=>window.removeEventListener("resize",r));const g=Ft(!1),v=nt(()=>{const x=a.currentSubPage&&a.currentSubPage.value;return x&&a.subPageNames&&a.subPageNames[x]||x||""}),P=nt(()=>{const x=a.currentPage&&a.currentPage.value,h=(a.menus&&a.menus.value||[]).find(Z=>Z.key===x);return(h&&h.subPages||[]).map(Z=>({key:Z,label:a.subPageNames&&a.subPageNames[Z]||Z}))});function l(){g.value=!g.value}function T(){g.value=!1}function k(x){g.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,x)}const C=nt(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),q=Ft(!1),w=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],n=nt(()=>{const x=w.find(h=>h.value===t.value);return x&&x.label||t.value});function i(){q.value=!q.value}function m(){q.value=!1}function H(x){q.value=!1,a.setNavMode&&a.setNavMode(x)}const I=nt({get:()=>a.searchQuery&&a.searchQuery.value||"",set:x=>{a.searchQuery&&(a.searchQuery.value=x)}}),G=Ft(!1),ee=Ft([]),te=Ft(!1),A=Ft(!1);function M(){const x=localStorage.getItem("quant_token")||"";return x?{Authorization:"Bearer "+x,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function R(){te.value=!0,A.value=!1;try{const h=await(await fetch("/api/alerts/history?limit=8",{headers:M()})).json();h&&h.success?ee.value=h.history||[]:ee.value=[]}catch{A.value=!0,ee.value=[]}finally{te.value=!1}}function z(){G.value=!G.value,G.value&&R()}function X(){G.value=!1}function J(){G.value=!1,a.activateTab&&a.activateTab("system","notification")}const re=Ft(!1),F=a.themeHues||[45,220,0,140,270,320],j=nt(()=>a.themeHue&&a.themeHue.value||45),D=nt(()=>a.themeMode&&a.themeMode.value||"system");function f(x){return a.hueColor?a.hueColor(x):"hsl("+x+", 75%, 42%)"}function _(x){return a.hueName?a.hueName(x):String(x)}function le(){re.value=!re.value}function K(){re.value=!1}function E(x){a.changeThemeMode&&a.changeThemeMode(x)}function d(x){a.changeThemeHue&&a.changeThemeHue(x)}function S(){a.changeThemeMode&&a.changeThemeMode(C.value?"light":"dark")}function u(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function O(){e.value=!e.value}function ae(){e.value=!1}function Y(x){return()=>{ae(),x&&x()}}function Q(){ae(),a.handleLogout&&a.handleLogout()}return{state:a,showUserMenu:e,currentUser:p,isDark:C,searchQuery:I,navMode:t,crumbRoot:b,crumbSub:L,hasToptabs:y,toggleThemeQuick:S,toggleSidebar:u,openUserMenu:O,closeUserMenu:ae,menuItem:Y,handleLogout:Q,openBellMenu:G,notifItems:ee,notifLoading:te,notifError:A,toggleBell:z,closeBell:X,goNotificationCenter:J,openThemeMenu:re,themeHues:F,themeHue:j,themeMode:D,hueColor:f,hueName:_,toggleThemeMenu:le,closeThemeMenu:K,pickThemeMode:E,pickThemeHue:d,openNavModeMenu:q,NAV_MODES:w,navModeLabel:n,toggleNavModeMenu:i,closeNavModeMenu:m,pickNavMode:H,isMobile:c,openSubnavPicker:g,currentSubLabel:v,subnavOptions:P,toggleSubnavPicker:l,closeSubnavPicker:T,pickSubnav:k}}},qv={class:"qc-header"},Ev={class:"qc-header-left"},Mv=["aria-label"],Tv={key:0,class:"qc-header-subnav"},Pv=["aria-expanded"],Dv={class:"qc-subnav-picker-label"},Rv={key:0,class:"qc-subnav-picker-menu",role:"menu"},zv=["onClick"],Av={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},Lv={class:"qc-crumb qc-crumb-root"},Iv={class:"qc-crumb qc-crumb-sub"},Nv={key:1,class:"qc-crumb qc-crumb-root"},Ov={class:"qc-header-center"},jv={key:0,class:"qc-search-sublabel"},Fv={class:"qc-header-right"},Vv={class:"qc-hdr-pop"},Hv=["aria-expanded"],Kv={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Bv={key:0,class:"qc-bell-state"},Wv={key:1,class:"qc-bell-state"},Uv={key:2,class:"qc-bell-state"},Gv={key:3,class:"qc-bell-list"},Yv={class:"qc-bell-item-title"},Jv={class:"qc-bell-item-meta"},Qv={key:0},$v={class:"qc-bell-item-time"},Xv={class:"qc-hdr-pop"},Zv=["aria-expanded"],em={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},tm={class:"qc-theme-modes"},am=["onClick"],sm={class:"qc-theme-swatches"},lm=["title","aria-label","onClick"],im={key:0,class:"qc-theme-swatch-check"},nm={class:"qc-theme-custom-label"},om={key:0,class:"qc-navmode-switch"},rm=["aria-label","title","aria-expanded"],cm={key:0,class:"qc-navmode-menu",role:"menu"},dm=["onClick","onKeydown"],um={class:"qc-navmode-item-main"},vm={class:"qc-user-menu"},mm=["aria-label","aria-expanded"],pm={key:0,class:"qc-user-dropdown",role:"menu"},fm={class:"qc-user-dropdown-header"},gm={class:"qc-user-dropdown-name"},hm={key:0,class:"qc-user-dropdown-chip"};function ym(a,e,p,t,y,b){var P,l,T,k,C,q,w;const L=Jt("AppIcon"),c=Jt("qc-top-tabs"),r=Jt("el-autocomplete"),g=Jt("el-slider"),v=dd("click-outside");return ue(),ge("header",qv,[_e("div",Ev,[_e("button",{class:"qc-icon-btn","aria-label":(P=t.state.sidebarCollapsed)!=null&&P.value?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...n)=>t.toggleSidebar&&t.toggleSidebar(...n))},[mt(L,{name:"menu",size:20})],8,Mv),t.isMobile?Ma((ue(),ge("div",Tv,[_e("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[1]||(e[1]=(...n)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...n))},[_e("span",Dv,Oe(t.currentSubLabel||"二级"),1),mt(L,{name:"chevron-down",size:14})],8,Pv),t.openSubnavPicker?(ue(),ge("div",Rv,[(ue(!0),ge(ut,null,St(t.subnavOptions,n=>(ue(),ge("div",{key:n.key,class:pt(["qc-subnav-picker-item",{"is-active":n.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:i=>t.pickSubnav(n.key)},Oe(n.label),11,zv))),128))])):Be("",!0)])),[[v,t.closeSubnavPicker]]):Be("",!0),t.navMode==="tree"&&!t.isMobile?(ue(),ge("div",Av,[_e("span",Lv,Oe(t.crumbRoot),1),t.crumbSub?(ue(),ge(ut,{key:0},[e[14]||(e[14]=_e("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),_e("span",Iv,Oe(t.crumbSub),1)],64)):Be("",!0)])):Be("",!0),t.navMode==="toptab"&&!t.isMobile?(ue(),ge(ut,{key:2},[t.hasToptabs?(ue(),ma(c,{key:0})):(ue(),ge("span",Nv,Oe(t.crumbRoot),1))],64)):Be("",!0)]),_e("div",Ov,[mt(r,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[2]||(e[2]=n=>t.searchQuery=n),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:Ta(()=>[mt(L,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:Ta(()=>[...e[15]||(e[15]=[_e("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:Ta(n=>{var i,m,H,I,G;return[_e("span",null,Oe((i=n==null?void 0:n.item)==null?void 0:i.icon)+" "+Oe(((m=n==null?void 0:n.item)==null?void 0:m.label)||((H=n==null?void 0:n.item)==null?void 0:H.name)),1),(I=n==null?void 0:n.item)!=null&&I.subLabel?(ue(),ge("span",jv,Oe((G=n==null?void 0:n.item)==null?void 0:G.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),_e("div",Fv,[Ma((ue(),ge("div",Vv,[_e("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[3]||(e[3]=(...n)=>t.toggleBell&&t.toggleBell(...n))},[mt(L,{name:"bell",size:20})],8,Hv),t.openBellMenu?(ue(),ge("div",Kv,[e[16]||(e[16]=_e("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(ue(),ge("div",Bv,"加载中...")):t.notifError?(ue(),ge("div",Wv,"加载失败")):t.notifItems.length?(ue(),ge("div",Gv,[(ue(!0),ge(ut,null,St(t.notifItems,(n,i)=>(ue(),ge("div",{key:n.id||i,class:pt(["qc-bell-item",{"is-fail":n.ok===0}])},[_e("div",Yv,Oe(n.title||n.event_type||"事件"),1),_e("div",Jv,[ka(Oe(n.channel||""),1),n.recipient?(ue(),ge("span",Qv," · "+Oe(n.recipient),1)):Be("",!0),_e("span",$v,Oe(n.created_at||""),1)])],2))),128))])):(ue(),ge("div",Uv,"暂无通知")),_e("button",{class:"qc-bell-footer",onClick:e[4]||(e[4]=(...n)=>t.goNotificationCenter&&t.goNotificationCenter(...n))},"前往通知中心 →")])):Be("",!0)])),[[v,t.closeBell]]),Ma((ue(),ge("div",Xv,[_e("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[5]||(e[5]=(...n)=>t.toggleThemeMenu&&t.toggleThemeMenu(...n))},[mt(L,{name:"palette",size:20})],8,Zv),t.openThemeMenu?(ue(),ge("div",em,[e[17]||(e[17]=_e("div",{class:"qc-theme-section-label"},"外观模式",-1)),_e("div",tm,[(ue(),ge(ut,null,St([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],n=>_e("button",{key:n.k,class:pt(["qc-theme-mode",{"is-active":t.themeMode===n.k}]),onClick:i=>t.pickThemeMode(n.k)},Oe(n.n),11,am)),64))]),e[18]||(e[18]=_e("div",{class:"qc-theme-section-label"},"主题色",-1)),_e("div",sm,[(ue(!0),ge(ut,null,St(t.themeHues,n=>(ue(),ge("button",{key:n,class:pt(["qc-theme-swatch",{"is-active":t.themeHue===n}]),style:ud({background:t.hueColor(n)}),title:t.hueName(n),"aria-label":t.hueName(n),onClick:i=>t.pickThemeHue(n)},[t.themeHue===n?(ue(),ge("span",im,"✓")):Be("",!0)],14,lm))),128))]),mt(g,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),_e("div",nm,"自定义 "+Oe(t.themeHue)+"°",1)])):Be("",!0)])),[[v,t.closeThemeMenu]]),t.isMobile?Be("",!0):Ma((ue(),ge("div",om,[_e("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[6]||(e[6]=(...n)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...n))},[mt(L,{name:"layers",size:20})],8,rm),t.openNavModeMenu?(ue(),ge("div",cm,[(ue(!0),ge(ut,null,St(t.NAV_MODES,n=>(ue(),ge("div",{key:n.value,class:pt(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===n.value}]),role:"menuitem",tabindex:"0",onClick:i=>t.pickNavMode(n.value),onKeydown:[Yt(Mt(i=>t.pickNavMode(n.value),["prevent"]),["enter"]),Yt(Mt(i=>t.pickNavMode(n.value),["prevent"]),["space"])]},[_e("div",um,[_e("span",null,Oe(n.label),1),t.navMode===n.value?(ue(),ma(L,{key:0,name:"check",size:14})):Be("",!0)])],42,dm))),128))])):Be("",!0)])),[[v,t.closeNavModeMenu]]),Ma((ue(),ge("div",vm,[_e("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((l=t.currentUser)==null?void 0:l.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[7]||(e[7]=(...n)=>t.openUserMenu&&t.openUserMenu(...n))},Oe((((T=t.currentUser)==null?void 0:T.username)||"A").charAt(0).toUpperCase()),9,mm),t.showUserMenu?(ue(),ge("div",pm,[_e("div",fm,[_e("span",gm,Oe((k=t.currentUser)==null?void 0:k.username),1),((C=t.currentUser)==null?void 0:C.role)==="guest"?(ue(),ge("span",hm,"访客")):Be("",!0)]),((q=t.currentUser)==null?void 0:q.role)==="admin"?(ue(),ge("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[8]||(e[8]=n=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[9]||(e[9]=Yt(Mt(n=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[mt(L,{name:"settings",size:16}),e[19]||(e[19]=ka(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((w=t.currentUser)==null?void 0:w.role)!=="guest"?(ue(),ge("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[10]||(e[10]=n=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[11]||(e[11]=Yt(Mt(n=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[mt(L,{name:"lock",size:16}),e[20]||(e[20]=ka(" 修改密码 ",-1))],32)):Be("",!0),e[22]||(e[22]=_e("div",{class:"qc-user-dropdown-divider"},null,-1)),_e("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[12]||(e[12]=(...n)=>t.handleLogout&&t.handleLogout(...n)),onKeydown:e[13]||(e[13]=Yt(Mt((...n)=>t.handleLogout&&t.handleLogout(...n),["prevent"]),["enter"]))},[mt(L,{name:"log-out",size:16}),e[21]||(e[21]=ka(" 退出登录 ",-1))],32)])):Be("",!0)])),[[v,t.closeUserMenu]])])])}const bm=xa(Cv,[["render",ym]]),wm=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"功能配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],km={name:"qc-subnav",components:{AppIcon:pa},setup(){const a=_a("qcState");if(!a)return{};const e=nt(()=>a.currentPage&&a.currentPage.value||""),p=nt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=nt(()=>a.navMode&&a.navMode.value||"subnav"),y=Ft({}),b=nt(()=>a.menus&&a.menus.value||[]),L=nt(()=>b.value.find(w=>w.key===e.value)||null),c=nt(()=>L.value&&L.value.subPages||[]),r=nt(()=>a.currentPageName&&a.currentPageName.value||e.value),g=w=>a.subPageNames&&a.subPageNames[w]||w,v=w=>p.value===w;function P(w){a.openTab?a.openTab(e.value,w):a.currentSubPage&&(a.currentSubPage.value=w);try{localStorage.setItem("quant_last_subpage",w)}catch{}}function l(w){a.openTab?a.openTab(e.value,w.key):a.currentSubPage&&(a.currentSubPage.value=w.key);try{localStorage.setItem("quant_last_subpage",w.key)}catch{}}function T(w){y.value[w]=!y.value[w]}const k={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}};return{state:a,currentPage:e,currentSubPage:p,navMode:t,subPages:c,currentMenu:L,collapsedGroups:y,pageTitle:r,subLabel:g,isSubActive:v,goSub:P,goSystemItem:l,toggleGroup:T,SYSTEM_GROUPS:wm,subIcon:(w,n)=>k[w]&&k[w][n]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},_m={key:0,class:"qc-subnav-column","aria-label":"二级导航"},xm={class:"qc-subnav-column-header"},Sm={class:"qc-subnav-current-label"},Cm={class:"qc-subnav-column-body"},qm=["onClick"],Em=["href","onClick"],Mm={class:"qc-subnav-group-label"},Tm=["href","onClick"],Pm=["href","onClick"];function Dm(a,e,p,t,y,b){const L=Jt("AppIcon");return t.navMode==="subnav"?(ue(),ge("aside",_m,[_e("div",xm,[_e("span",Sm,Oe(t.pageTitle),1)]),_e("div",Cm,[t.currentPage==="system"?(ue(!0),ge(ut,{key:0},St(t.SYSTEM_GROUPS,c=>(ue(),ge("div",{key:c.label,class:"qc-subnav-group"},[_e("div",{class:"qc-subnav-group-label",onClick:r=>t.toggleGroup(c.label)},[_e("span",null,Oe(c.label),1),mt(L,{name:"chevron-down",size:12,class:pt({"is-open":!t.collapsedGroups[c.label]})},null,8,["class"])],8,qm),t.collapsedGroups[c.label]?Be("",!0):(ue(!0),ge(ut,{key:0},St(c.items,r=>(ue(),ge("a",{key:r.key,class:pt(["qc-subnav-item",{"is-active":t.isSubActive(r.key)}]),href:"#"+r.key,onClick:Mt(g=>t.goSystemItem(r),["prevent"])},[mt(L,{name:r.icon,size:16},null,8,["name"]),_e("span",null,Oe(r.label),1)],10,Em))),128))]))),128)):t.currentPage==="shortterm"?(ue(!0),ge(ut,{key:1},St(t.SHORTTERM_GROUPS,c=>(ue(),ge("div",{key:c.label,class:"qc-subnav-group"},[_e("div",Mm,[_e("span",null,Oe(c.label),1)]),(ue(!0),ge(ut,null,St(c.items,r=>(ue(),ge("a",{key:r,class:pt(["qc-subnav-item",{"is-active":t.isSubActive(r)}]),href:"#"+t.currentPage+"/"+r,onClick:Mt(g=>t.goSub(r),["prevent"])},[mt(L,{name:t.subIcon(t.currentPage,r),size:16},null,8,["name"]),_e("span",null,Oe(t.subLabel(r)),1)],10,Tm))),128))]))),128)):(ue(!0),ge(ut,{key:2},St(t.subPages,c=>(ue(),ge("a",{key:c,class:pt(["qc-subnav-item",{"is-active":t.isSubActive(c)}]),href:"#"+t.currentPage+"/"+c,onClick:Mt(r=>t.goSub(c),["prevent"])},[mt(L,{name:t.subIcon(t.currentPage,c),size:16},null,8,["name"]),_e("span",null,Oe(t.subLabel(c)),1)],10,Pm))),128))])])):Be("",!0)}const Rm=xa(km,[["render",Dm]]),zm=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],Am={name:"qc-mobile-nav",components:{AppIcon:pa},setup(){const a=_a("qcState");if(!a)return{};const e=Ft(!1),p=Ft(null),t=Ft({}),y=nt(()=>a.menus&&a.menus.value||[]),b=nt(()=>a.currentPage&&a.currentPage.value||""),L={research:"量化投研",platform:"平台管理"},c=["research","platform"];function r(n){return Array.isArray(n.subPages)&&n.subPages.length>0}function g(n){r(n)&&(t.value[n.key]=!t.value[n.key])}function v(n,i){return b.value===n.key&&a.currentSubPage&&a.currentSubPage.value===i}function P(n){return a.subPageNames&&a.subPageNames[n]||n}async function l(n){const i=y.value.find(H=>H.key===n.key),m=i&&i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(n.key,m):(a.currentPage.value=n.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(n.key,m)}function T(n,i){e.value=!1;const m=i||n.subPages&&n.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(n.key,m):(a.currentPage.value=n.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(n.key,m)}function k(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function C(){e.value=!1;const n=document.querySelector(".qc-header .qc-icon-btn");n&&n.focus()}function q(n){n.detail&&n.detail.open&&k()}function w(n){e.value&&n.key==="Escape"&&C()}return es(()=>{window.addEventListener("qc:drawer",q),document.addEventListener("keydown",w)}),ts(()=>{window.removeEventListener("qc:drawer",q),document.removeEventListener("keydown",w)}),{state:a,TABS:zm,menus:y,currentPage:b,drawerOpen:e,drawerFocusRef:p,drawerExpanded:t,GROUP_LABELS:L,GROUPS:c,hasSub:r,toggleDrawerMenu:g,isDrawerSubActive:v,subLabel:P,goTab:l,goMenu:T,openDrawer:k,closeDrawer:C}}},Lm={class:"qc-mobile-nav","aria-label":"移动端底部导航"},Im=["aria-current","onClick"],Nm={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Om={class:"qc-drawer-header"},jm={class:"qc-drawer-brand"},Fm={class:"qc-drawer-body"},Vm={key:0},Hm={class:"qc-nav-group-label"},Km=["href","aria-current","onClick"],Bm={class:"qc-sidebar-label"},Wm=["aria-expanded","onClick"],Um={key:0,class:"qc-drawer-children"},Gm=["href","onClick"],Ym={class:"qc-drawer-footer"},Jm=["title"];function Qm(a,e,p,t,y,b){var c,r;const L=Jt("AppIcon");return ue(),ge(ut,null,[_e("nav",Lm,[(ue(!0),ge(ut,null,St(t.TABS,g=>(ue(),ge("button",{key:g.key,class:pt(["qc-mobile-tab",{"is-active":t.currentPage===g.key}]),"aria-current":t.currentPage===g.key?"page":null,onClick:v=>t.goTab(g)},[mt(L,{name:g.icon,size:22},null,8,["name"]),_e("span",null,Oe(g.label),1)],10,Im))),128))]),(ue(),ma(vd,{to:"body"},[t.drawerOpen?(ue(),ge("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))})):Be("",!0),t.drawerOpen?(ue(),ge("div",Nm,[_e("div",Om,[_e("div",jm,[e[4]||(e[4]=_e("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[_e("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),_e("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),_e("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),_e("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),_e("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),_e("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),_e("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),_e("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),_e("span",null,Oe(t.state.t("login.title")),1)]),_e("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))},[mt(L,{name:"x",size:18})])]),_e("div",Fm,[(ue(!0),ge(ut,null,St(t.GROUPS,g=>(ue(),ge(ut,{key:g},[t.menus.some(v=>v.group===g)?(ue(),ge("div",Vm,[_e("div",Hm,Oe(t.GROUP_LABELS[g]),1),(ue(!0),ge(ut,null,St(t.menus.filter(v=>v.group===g),v=>(ue(),ge("div",{key:v.key,class:"qc-drawer-menu"},[_e("div",{class:pt(["qc-drawer-menu-row",{"is-active":t.currentPage===v.key}])},[_e("a",{class:pt(["qc-sidebar-item",{"is-active":t.currentPage===v.key}]),href:"#"+v.key,"aria-current":t.currentPage===v.key?"page":null,onClick:Mt(P=>t.hasSub(v)?t.toggleDrawerMenu(v):t.goMenu(v),["prevent"])},[mt(L,{name:v.iconName||"",size:18},null,8,["name"]),_e("span",Bm,Oe(v.name),1)],10,Km),t.hasSub(v)?(ue(),ge("button",{key:0,class:pt(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[v.key]}]),"aria-expanded":!!t.drawerExpanded[v.key],"aria-label":"展开子菜单",onClick:P=>t.toggleDrawerMenu(v)},[mt(L,{name:"chevron-down",size:14})],10,Wm)):Be("",!0)],2),t.drawerExpanded[v.key]?(ue(),ge("div",Um,[(ue(!0),ge(ut,null,St(v.subPages,P=>(ue(),ge("a",{key:P,class:pt(["qc-subnav-item",{"is-active":t.isDrawerSubActive(v,P)}]),href:"#"+v.key+"/"+P,onClick:Mt(l=>t.goMenu(v,P),["prevent"])},[_e("span",null,Oe(t.subLabel(P)),1)],10,Gm))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),_e("div",Ym,[_e("button",{class:"qc-icon-btn",title:((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=g=>{var v;return t.state.changeThemeMode&&t.state.changeThemeMode(((v=t.state.currentTheme)==null?void 0:v.value)==="dark"?"light":"dark")})},[mt(L,{name:((r=t.state.currentTheme)==null?void 0:r.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Jm),_e("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=g=>t.state.handleLogout&&t.state.handleLogout())},[mt(L,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const $m=xa(Am,[["render",Qm]]),Xm={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:p}){const t=_a("qcState");function y(g){e("select",g)}function b(g){const v=g.strategy_names||g.strategies||[],P=v.slice(0,3),l=v.length>3?v.length-3:0,T=P.map(k=>({text:k,more:!1}));return l&&T.push({text:"+"+l,more:!0}),T}function L(g){const v=Number(g);return isFinite(v)?v.toFixed(2):"—"}function c(g){const v=Number(g);return isFinite(v)?(v>0?"+":"")+v.toFixed(2)+"%":"—"}function r(g){const v=Number(g.consensus_level);return isFinite(v)?Math.round(v*100):0}return{state:t,slots:p,select:y,displayTags:b,fmtPrice:L,fmtChange:c,pctOf:r}}},Zm={class:"qc-stock-list"},ep=["data-copy-code","aria-label","onClick","onKeydown"],tp={key:0,class:"qc-stock-rank"},ap={class:"qc-stock-info"},sp={class:"qc-stock-code"},lp={class:"qc-stock-code-num"},ip={key:0,class:"qc-stock-status is-new"},np={key:1,class:"qc-stock-status is-out"},op={class:"qc-stock-name"},rp={key:0,class:"qc-stock-consensus"},cp={key:1,class:"qc-stock-tags"},dp={key:2,class:"qc-stock-badge"},up={key:3,class:"qc-stock-data"},vp={class:"qc-stock-price"},mp={key:4,class:"qc-stock-extra"},pp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},fp=["data-copy-code","aria-label","onClick","onKeydown"],gp={key:0,class:"qc-stock-rank"},hp={class:"qc-stock-info"},yp={class:"qc-stock-code"},bp={class:"qc-stock-code-num"},wp={key:0,class:"qc-stock-status is-new"},kp={key:1,class:"qc-stock-status is-out"},_p={class:"qc-stock-name"},xp={key:0,class:"qc-stock-consensus"},Sp={key:1,class:"qc-stock-tags"},Cp={key:2,class:"qc-stock-badge"},qp={key:3,class:"qc-stock-data"},Ep={class:"qc-stock-price"},Mp={key:4,class:"qc-stock-extra"},Tp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function Pp(a,e,p,t,y,b){const L=Jt("qc-state-panel"),c=Jt("qc-virtual-list");return ue(),ge("div",Zm,[p.loading?(ue(),ma(L,{key:0,type:"loading"})):p.items.length?(ue(),ge(ut,{key:2},[p.virtual?(ue(),ma(c,{key:0,items:p.items,"row-height":p.rowHeight},{default:Ta(({item:r,index:g})=>[_e("div",{class:pt(["qc-stock-row",{"is-active":p.activeCode===r.code}]),"data-copy-code":p.copyCode?r.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(r.name||"")+" "+(r.code||""),onClick:v=>t.select(r),onKeydown:[Yt(Mt(v=>t.select(r),["prevent"]),["enter"]),Yt(Mt(v=>t.select(r),["prevent"]),["space"])]},[p.showRank?(ue(),ge("div",tp,Oe(g+1),1)):Be("",!0),_e("div",ap,[_e("div",sp,[_e("span",lp,Oe(r.code),1),r.status==="new"?(ue(),ge("span",ip,Oe(p.statusText.new),1)):r.status==="out"?(ue(),ge("span",np,Oe(p.statusText.out),1)):Be("",!0)]),_e("div",op,[ka(Oe(r.name)+" ",1),da(a.$slots,"name-suffix",{item:r,index:g})]),p.showConsensus?(ue(),ge("span",rp,Oe(t.pctOf(r))+"% 共识",1)):Be("",!0)]),(r.strategy_names||r.strategies)&&(r.strategy_names||r.strategies).length?(ue(),ge("div",cp,[(ue(!0),ge(ut,null,St(t.displayTags(r),v=>(ue(),ge("span",{key:v.text,class:pt(["qc-stock-tag",{"is-more":v.more}])},Oe(v.text),3))),128))])):Be("",!0),p.showConsensus?(ue(),ge("span",dp,Oe(r.strategy_count||0)+" 策略",1)):Be("",!0),p.showPrice&&r.price!=null?(ue(),ge("div",up,[_e("span",vp,Oe(t.fmtPrice(r.price)),1),_e("span",{class:pt(["qc-stock-change",r.change_pct>0?"is-up":r.change_pct<0?"is-down":""])},Oe(t.fmtChange(r.change_pct)),3)])):Be("",!0),t.slots.extra?(ue(),ge("div",mp,[da(a.$slots,"extra",{item:r,index:g})])):Be("",!0),t.slots.actions?(ue(),ge("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Mt(()=>{},["stop"]))},[da(a.$slots,"actions",{item:r,index:g})])):Be("",!0),t.slots.footer?(ue(),ge("div",pp,[da(a.$slots,"footer",{item:r,index:g})])):Be("",!0)],42,ep)]),_:3},8,["items","row-height"])):(ue(!0),ge(ut,{key:1},St(p.items,(r,g)=>(ue(),ge("div",{key:r.code,class:pt(["qc-stock-row",{"is-active":p.activeCode===r.code}]),"data-copy-code":p.copyCode?r.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(r.name||"")+" "+(r.code||""),onClick:v=>t.select(r),onKeydown:[Yt(Mt(v=>t.select(r),["prevent"]),["enter"]),Yt(Mt(v=>t.select(r),["prevent"]),["space"])]},[p.showRank?(ue(),ge("div",gp,Oe(g+1),1)):Be("",!0),_e("div",hp,[_e("div",yp,[_e("span",bp,Oe(r.code),1),r.status==="new"?(ue(),ge("span",wp,Oe(p.statusText.new),1)):r.status==="out"?(ue(),ge("span",kp,Oe(p.statusText.out),1)):Be("",!0)]),_e("div",_p,[ka(Oe(r.name)+" ",1),da(a.$slots,"name-suffix",{item:r,index:g})]),p.showConsensus?(ue(),ge("span",xp,Oe(t.pctOf(r))+"% 共识",1)):Be("",!0)]),(r.strategy_names||r.strategies)&&(r.strategy_names||r.strategies).length?(ue(),ge("div",Sp,[(ue(!0),ge(ut,null,St(t.displayTags(r),v=>(ue(),ge("span",{key:v.text,class:pt(["qc-stock-tag",{"is-more":v.more}])},Oe(v.text),3))),128))])):Be("",!0),p.showConsensus?(ue(),ge("span",Cp,Oe(r.strategy_count||0)+" 策略",1)):Be("",!0),p.showPrice&&r.price!=null?(ue(),ge("div",qp,[_e("span",Ep,Oe(t.fmtPrice(r.price)),1),_e("span",{class:pt(["qc-stock-change",r.change_pct>0?"is-up":r.change_pct<0?"is-down":""])},Oe(t.fmtChange(r.change_pct)),3)])):Be("",!0),t.slots.extra?(ue(),ge("div",Mp,[da(a.$slots,"extra",{item:r,index:g})])):Be("",!0),t.slots.actions?(ue(),ge("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Mt(()=>{},["stop"]))},[da(a.$slots,"actions",{item:r,index:g})])):Be("",!0),t.slots.footer?(ue(),ge("div",Tp,[da(a.$slots,"footer",{item:r,index:g})])):Be("",!0)],42,fp))),128))],64)):(ue(),ma(L,{key:1,type:"empty",title:p.emptyText},null,8,["title"]))])}const Dp=xa(Xm,[["render",Pp]]),Xs={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}},Rp={name:"qc-top-tabs",components:{AppIcon:pa},setup(){const a=_a("qcState");if(!a)return{};const e=nt(()=>a.currentPage&&a.currentPage.value||""),p=nt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=nt(()=>a.menus&&a.menus.value||[]),y=nt(()=>{const c=t.value.find(r=>r.key===e.value);return c&&c.subPages||[]}),b=nt(()=>y.value.map(c=>({key:c,label:a.subPageNames&&a.subPageNames[c]||c,icon:Xs[e.value]&&Xs[e.value][c]||"circle-dot"})));function L(c){a.openTab?a.openTab(e.value,c):a.currentSubPage&&(a.currentSubPage.value=c)}return{state:a,tabs:b,currentSubPage:p,go:L}}},zp={key:0,class:"qc-header-tabs qc-top-tabs",role:"tablist","aria-label":"二级页面"},Ap=["aria-selected","title","onClick","onKeydown"],Lp={class:"qc-top-tab-label"};function Ip(a,e,p,t,y,b){const L=Jt("AppIcon");return t.tabs.length?(ue(),ge("div",zp,[(ue(!0),ge(ut,null,St(t.tabs,c=>(ue(),ge("div",{key:c.key,class:pt(["qc-top-tab",{"is-active":t.currentSubPage===c.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===c.key?"true":"false",title:c.label,onClick:r=>t.go(c.key),onKeydown:[Yt(Mt(r=>t.go(c.key),["prevent"]),["enter"]),Yt(Mt(r=>t.go(c.key),["prevent"]),["space"])]},[mt(L,{name:c.icon,size:14},null,8,["name"]),_e("span",Lp,Oe(c.label),1)],42,Ap))),128))])):Be("",!0)}const Np=xa(Rp,[["render",Ip]]);(function(){const{ref:a,computed:e,inject:p}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
      <div class="global-header-root">
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
    `,setup(){const t=p("qcState");if(!t)return{};const y=a(!1),b=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,goMerrill:b,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:y,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(L,c){const r="sub."+L.key+"."+c,g=t.t(r);if(g!==r)return g;const v="sub."+c,P=t.t(v);return P!==v&&P?P:t.subPageNames[c]||c}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                            
                            <!-- 状态筛选 -->
                            <div class="status-tabs" role="tablist">
                                <div class="status-tab" :class="{active: statusFilter === 'all'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'all'" @click="statusFilter = 'all'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="file-text" :size="14" /> {{ t('calendar.all') }} <span class="count">{{ statusCounts.all }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'new'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'new'" @click="statusFilter = 'new'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="badge-check" :size="14" /> {{ t('calendar.newPool') }} <span class="count">{{ statusCounts.newCount }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'current'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'current'" @click="statusFilter = 'current'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="pin" :size="14" /> {{ t('calendar.currentHold') }} <span class="count">{{ statusCounts.current }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'out'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'out'" @click="statusFilter = 'out'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"><qc-icon name="upload" :size="14" /> {{ t('calendar.outPool') }} <span class="count">{{ statusCounts.out }}</span></div>
                            </div>

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
                                  @select="(item) => showStockDetail(item.code)"
                                >
                                  <template #name-suffix="{ item }">
                                    <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" tabindex="0" role="button" :aria-label="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" :title="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span>
                                    <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" :title="t('calendar.aiEvaluated')"><qc-icon name="bot" :size="13" /></span>
                                    <span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" :title="t('calendar.klineLoaded')"><qc-icon name="trending-up" :size="13" /></span>
                                  </template>
                                  <!-- v3.7.11: AI入池信号解读（整行占位, V6.9.3 经 footer 插槽渲染） -->
                                  <template #footer="{ item }">
                                    <span v-if="poolSignals[item.code]"><qc-icon name="bot" :size="14" /> {{ poolSignals[item.code] }}</span>
                                  </template>
                                </qc-stock-list>
                            </div>
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
                                                <span class="gold-link" @click.stop="toggleWatchlist(stock.code, stock.name)" :title="watchlistCodes.has(stock.code)?t('calendar.unwatch'):t('calendar.watch')">{{ watchlistCodes.has(stock.code) ? '⭐' : '☆' }}</span><span class="text-xs-ml2" v-if="evaluatedCodes.has(stock.code)" :title="t('calendar.aiEvaluated')"><qc-icon name="bot" :size="13" /></span><span class="text-xs-ml2" v-if="klineLoadedCodes.has(stock.code)" :title="t('calendar.klineLoaded')"><qc-icon name="trending-up" :size="13" /></span>
                                            </span>
                                        </template>
                                        <span class="text-xs-tag-tertiary" v-if="item.names.length> 5 && !expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="false" @click="expandedStrategies[item.strategy] = true" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            +{{ item.names.length - 5 }}{{ t('common.unitStock') }} {{ t('calendar.expand') }} ▾
                                        </span>
                                        <span class="text-xs-tag-primary" v-if="item.names.length> 5 && expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="true" @click="expandedStrategies[item.strategy] = false" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            {{ t('calendar.collapse') }} ▴
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:p,computed:t}=Vue,y=p(0),b=p(0),L=p(!1),c=t(()=>{const I={day:"date",week:"week",month:"month",year:"year"},G=e.currentView&&e.currentView.value||"day";return I[G]||"date"}),r={day:"日",week:"周",month:"月",year:"年"};function g(I){return e.t&&e.t("view."+I)||r[I]||I}function v(I){e.switchView?e.switchView(I):e.currentView&&(e.currentView.value=I)}let P=null;function l(I){const G=I.touches&&I.touches[0];G&&(y.value=G.clientX,b.value=G.clientY)}async function T(){if(!L.value){L.value=!0;try{await e.refreshCalendarData()}catch{}P&&clearTimeout(P),P=setTimeout(()=>{L.value=!1},500)}}function k(I){if(!(window.innerWidth<=768))return;const G=I.changedTouches&&I.changedTouches[0];if(!G)return;const ee=window.__quantModules&&window.__quantModules.gestures||{};if((typeof ee.judgePullToRefresh=="function"?ee.judgePullToRefresh(b.value,G.clientY):G.clientY-b.value>=60)&&(window.scrollY||0)<=0){I.stopPropagation(),T();return}if(e.currentSubPage.value==="pool")return;const A=G.clientX-y.value,M=G.clientY-b.value;Math.abs(A)>50&&Math.abs(A)>Math.abs(M)*1.2&&(e.navigateDate(A<0?1:-1),I.stopPropagation())}const C=p(!1),q=p(!1),w=p(""),n=p(null),i=p([]);function m(I){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[I]||I}async function H(){if(e.selectedDate.value){C.value=!0,q.value=!0,w.value="",n.value=null,i.value=[];try{const I=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),G=await I.json();if(!I.ok)throw new Error(G.detail||"HTTP "+I.status);n.value=G;const ee=G&&G.comparison||{},te=[];for(const A of Object.keys(ee)){if(A==="all_intersection")continue;const M=ee[A]||{},R=A.split("_vs_");te.push({label:m(R[0])+" ↔ "+m(R[1]),interCount:M.intersection_count||0,inter:(M.intersection||[]).join(", "),onlyS1Count:M.only_s1_count||0,onlyS1:(M.only_s1||[]).join(", "),onlyS2Count:M.only_s2_count||0,onlyS2:(M.only_s2||[]).join(", ")})}i.value=te}catch(I){w.value=String(I&&I.message?I.message:I)}finally{q.value=!1}}}return{...e,calType:c,pullRefreshing:L,onCalTouchStart:l,onCalTouchEnd:k,viewLabel:g,switchViewLocal:v,compareVisible:C,compareLoading:q,compareError:w,compareData:n,comparePairs:i,openStrategyCompare:H}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
                        <!-- V6.2 (PRD-6.2 F5): 概览 TOP5 改用通用 StockList 组件 -->
                        <!-- V6.9.3 (F1): 启用共识徽章/进度条/价格列, 移除冗余「N 策略」extra -->
                        <qc-stock-list
                          :items="filteredConsensusRank.slice(0, 5)"
                          empty-text="暂无共识数据"
                          show-rank
                          show-consensus
                          show-price
                          @select="(item) => showStockDetail(item.code)"
                        >
                          <template #actions="{ item }">
                            <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估">🤖</span>
                          </template>
                        </qc-stock-list>
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
                                <div class="merrill-stage-icon">{{ s.icon }}</div>
                                <!-- V6.6: s.textColor 服务端配置色，保留内联 -->
                                <div class="merrill-stage-name" :style="{color: s.textColor}">{{ s.name }}</div>
                                <div class="merrill-stage-desc">{{ s.tagline }}</div>
                            </div>
                        </div>

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
                            </div>
                            <div class="merrill-timeline" v-if="merrillTimeline?.cycles?.length">
                                <div class="tl-spine">
                                    <div class="tl-spine-arrow tl-top">▲ 历史</div>
                                    <div class="tl-cycle" v-for="(cycle, ci) in merrillTimeline.cycles" :key="ci">
                                        <div class="tl-cycle-node"><span class="tl-cycle-node-dot"></span></div>
                                        <div class="tl-cycle-body">
                                            <div class="tl-cycle-label">{{ cycle.label }}<span class="tl-cycle-years" v-if="tlCycleYears(cycle)"> · {{ tlCycleYears(cycle) }}</span></div>
                                            <div class="tl-stage-rows" :style="{height: (cycle.stages.length > 4 ? 120 : 60) + 'px'}">
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
                                            <div class="tl-gantt" v-if="cycle.stages.length > 1">
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
                        <div class="market-grid">
                            <div v-for="idx in marketData.indices" :key="idx.id" class="market-card clickable" :class="idx.pct_chg>= 0 ? 'up' : 'down'" @click="showIndexDetail(idx)">
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
                    </div>
                    </div>
                    <!-- 子页: 策略共识榜 -->
                    <div v-else-if="currentSubPage === 'consensus'">

                    <!-- 策略共识度排行 -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="trophy" :size="14" /> 策略共识度排行 (多策略同时选中)</div>
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
                          @select="(item) => showStockDetail(item.code)"
                        >
                          <template #actions="{ item }">
                            <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估">🤖</span>
                            <span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" title="已加载K线">📈</span>
                          </template>
                        </qc-stock-list>
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
                                    <span class="text-xs" :class="stats.last_status === 'success' ? 'color-success' : 'color-danger'">{{ stats.last_status === 'success' ? '✓ 成功' : '✗ 失败' }}</span>
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
                                    <div class="stat-icon success">{{ execStatusIcon }}</div>
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
                                        <span :class="p.enabled ? 'color-success' : 'color-danger'">{{ p.enabled ? '✓' : '✗' }}</span>
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
                                        <span :class="r.visible ? 'color-success' : 'color-danger'">{{ r.visible ? '✓ ' + t('exec.visible') : '✗ ' + t('exec.invisible') }}</span>
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
                                            <td><span :class="r.success ? 'status-current' : 'status-out'">{{ r.success ? '✓ 成功' : '✗ 失败' }}</span></td>
                                            <td class="text-sm-tertiary" :title="r.detail">{{ (r.detail || '—').slice(0, 60) }}{{ (r.detail || '').length > 60 ? '…' : '' }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
    `,setup(){const e=a("qcState"),p=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let y=0;const b=t(()=>{var N;return((N=e.merrillData)==null?void 0:N.value)||{}}),L=t(()=>{var N;return((N=e.marketData)==null?void 0:N.value)||{}}),c=t(()=>{var N;return((N=e.dashboardData)==null?void 0:N.value)||{}}),r=t(()=>{var N;return((N=e.healthMetrics)==null?void 0:N.value)||[]}),g=t(()=>{var N;return((N=e.filteredConsensusRank)==null?void 0:N.value)||[]}),v=t(()=>{const N={};for(const ce of g.value)ce.code&&ce.name&&(N[ce.code]=ce.name);return N}),P={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function l(N){return P[N]||N}const T=t(()=>L.value.date||c.value.latest_date||"-"),k=t(()=>{const N=L.value;return!N||Object.keys(N).length===0?"数据加载中...":N.is_trading_day&&N.in_trading_hours?"● 交易中":N.is_trading_day?"已收盘":"○ 非交易日"}),C=t(()=>{const N=b.value.next_stage_prediction;return N&&N.next_stage_name&&N.transition_probability>.2?`→${N.next_stage_name} ${(N.transition_probability*100).toFixed(2)}%`:""}),q=t(()=>{const N=[],ce=c.value.pool_changes||{},Me=ce.new_count||0;if(Me>0){const Ie=ce.new_stock_names||{},Ve=(ce.new_stocks||[]).map(Xe=>Ie[Xe]||v.value[Xe]||Xe).slice(0,4).join("、");N.push({icon:"sparkles",level:"new",text:`今日新入池 ${Me} 只${Ve?" · "+Ve:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Ie of r.value.filter(Ve=>Ve.degraded))N.push({icon:"alert-triangle",level:"warn",text:`数据源 ${l(Ie.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const ze=b.value.timing;ze&&ze.progress_percent&&ze.progress_percent>100?N.push({icon:"clock",level:"warn",text:`美林「${b.value.name}」已超期 ${ze.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):ze&&ze.maturity&&b.value.name&&N.push({icon:"clock",level:"info",text:`美林「${b.value.name}」阶段成熟度 ${ze.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const je=L.value;return je&&je.is_trading_day===!1&&je.date&&N.push({icon:"calendar",level:"info",text:`${je.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),N}),w=t(()=>{const N=[],ce=b.value.name||"",Me=b.value.timing||{},ze=["复苏","成长","过热"],je=["滞胀","衰退"];ze.some(Ze=>ce.includes(Ze))&&N.push({kind:"opportunity",source:"美林",text:ce+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),je.some(Ze=>ce.includes(Ze))&&N.push({kind:"risk",source:"美林",text:ce+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),Me.progress_percent&&Me.progress_percent>100&&N.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Ie=c.value.pool_changes||{},Ve=(Ie.new_count||0)-(Ie.out_count||0);Ve>=3?N.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Ve,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):Ve<=-3&&N.push({kind:"risk",source:"池变动",text:"净出池 "+Ve,action:()=>{e.currentSubPage.value="consensus"}});const Xe=L.value.market_sentiment,He=Xe&&Xe.text||"";(He.includes("乐观")||He.includes("积极")||He.includes("亢奋"))&&N.push({kind:"opportunity",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}}),(He.includes("悲观")||He.includes("恐慌")||He.includes("低迷"))&&N.push({kind:"risk",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}});for(const Ze of r.value.filter(bt=>bt.degraded))N.push({kind:"risk",source:"数据",text:l(Ze.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return N}),n=t(()=>{var N;return((N=e.merrillTimeline)==null?void 0:N.value)||e.merrillTimeline||{cycles:[]}}),i=t(()=>{var N;return((N=e.timelineLoading)==null?void 0:N.value)||!1}),m=Vue.ref(null),H=Vue.ref(!1),I=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function G(N){const ce=N&&N.currentTarget,Me=document.querySelector(".tl-click-pop");if(!ce||!Me)return;const ze=ce.getBoundingClientRect(),je=Me.offsetWidth||340,Ie=Me.offsetHeight||220,Ve=10,Xe=ce.closest(".merrill-timeline-block"),He=Xe?Xe.getBoundingClientRect():ze,Ze=ze.left-He.left,bt=ze.top-He.top,B=ze.width,me=ze.height,Ue=He.width,Ge=He.height;let vt=null;Ze+B+Ve+je<=Ue?vt=Ze+B+Ve:Ze-Ve-je>=0?vt=Ze-Ve-je:vt=Math.max(8,Math.min(Ze,Ue-je-8));const wt=bt+me/2-Ie/2,Rt=Math.max(8,Math.min(wt,Ge-Ie-8));I.top=Rt,I.left=vt,I.right=null,I.bottom=null}const ee=Vue.computed(function(){const N={};return I.top!=null&&(N.top=I.top+"px"),I.left!=null&&(N.left=I.left+"px"),I.right!=null&&(N.right=I.right+"px"),N});function te(N,ce){let Me=null;const ze=n.value&&n.value.cycles||[];for(const je of ze){const Ie=(je.stages||[]).find(Ve=>Ve.stage===N&&Ve.is_current);if(Ie){Me=Ie;break}}if(!Me)for(const je of ze){const Ie=(je.stages||[]).find(Ve=>Ve.stage===N);if(Ie){Me=Ie;break}}Me&&(m.value=Me,H.value=!0,Vue.nextTick(function(){G(ce)}))}function A(){H.value=!1,m.value=null}function M(N){const ce=e.merrillStagesConfig,ze=(ce&&ce.value?ce.value:ce||{})[N]||{};return ze.color||ze.bg_color||"var(--color-primary)"}function R(N){const ce=e.merrillStagesConfig,Me=ce&&ce.value?ce.value:ce||{};return Me[N]&&Me[N].name||""}function z(){const N=e.merrillStagesConfig;return N&&N.value?N.value:N||{}}function X(N){return z()[N]&&z()[N].description||""}function J(N){const ce=N&&N.stages?N.stages:[];if(!ce.length)return"";const Me=ce[0]&&ce[0].start?String(ce[0].start).slice(0,4):"",ze=ce[ce.length-1]||{},je=ze.end?String(ze.end).slice(0,4):ze.start?String(ze.start).slice(0,4):"";return Me||je?Me?Me+"–"+je:je:""}function re(N){const ce=N.start?String(N.start).slice(0,4):"",Me=N.end?String(N.end).slice(0,4):ce?"至今":"";return ce?Me?ce+"–"+Me:ce:""}function F(N){const ce=N.essence||N.trigger||X(N.stage)||"";return N.highlight?ce?ce+" · "+N.highlight:N.highlight:ce}function j(){const N=b.value.indicators||{},ce=b.value.stage||"",Me={recovery:[["PMI",N.pmi],["GDP",N.gdp_growth],["M2",N.m2_growth]],overheat:[["PPI",N.ppi],["CPI",N.cpi],["PMI",N.pmi]],stagflation:[["CPI",N.cpi],["PPI",N.ppi],["GDP",N.gdp_growth]],recession:[["PMI",N.pmi],["GDP",N.gdp_growth],["CPI",N.cpi]]},ze=(Me[ce]||Me.recession).filter(je=>je[1]!=null&&je[1]!==0);return ze.length?"实时 · "+ze.map(je=>je[0]+" "+je[1]+"%").join(" ｜ "):""}function D(N,ce,Me){const je=(z()[N.stage]||{}).color||"var(--color-primary)",Ie=ce||[],Ve=Ie.map(B=>B.duration_months||0),Xe=Ve.reduce((B,me)=>B+me,0),He=Xe>0?Ve[Me]/Xe*100:100/Math.max(1,Ie.length),Ze=Me===0,bt=Me===Ie.length-1;return{flex:"0 0 "+He+"%",background:je,borderRadius:Ze?"6px 0 0 6px":bt?"0 6px 6px 0":"0"}}function f(N){const ce=N.length;if(ce<=4)return[N];const Me=Math.ceil(ce/2);return[N.slice(0,Me),N.slice(Me).reverse()]}function _(N){const ce=z()[N]||{},Me=ce.color||"var(--color-primary)";return{background:ce.bg_color||"var(--bg-card)",borderColor:Me,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const le=Vue.reactive({}),K=Vue.ref(null);let E=null,d=null,S=null;function u(){try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((ce,Me)=>{const ze=ce.querySelector(".tl-stage-rows"),je=ce.querySelector(".tl-row-top"),Ie=ce.querySelector(".tl-row-bottom"),Ve=je?Array.from(je.querySelectorAll(".merrill-stage-chip")):[],Xe=Ie?Array.from(Ie.querySelectorAll(".merrill-stage-chip")).reverse():[],He=Ve.concat(Xe);if(!ze||He.length<2){le[Me]={d:"",vb:"0 0 1 1"};return}const Ze=ze.getBoundingClientRect(),bt=Math.max(1,Ze.width),B=Math.max(1,Ze.height),me=Ve.length,Ue=He.map(vt=>{const wt=vt.getBoundingClientRect();return{x:wt.left+wt.width/2-Ze.left,y:wt.top+wt.height/2-Ze.top}});let Ge="M "+Ue[0].x.toFixed(1)+" "+Ue[0].y.toFixed(1);for(let vt=1;vt<Ue.length;vt++){const wt=Ue[vt-1],Rt=Ue[vt];vt===me&&(Ge+=" L "+wt.x.toFixed(1)+" "+Rt.y.toFixed(1)),Ge+=" L "+Rt.x.toFixed(1)+" "+Rt.y.toFixed(1)}le[Me]={d:Ge,vb:"0 0 "+bt.toFixed(1)+" "+B.toFixed(1)}})}catch(N){console.error("[tl] buildTlPaths error",N)}}function O(N){return le[N]||{d:"",vb:"0 0 1 1"}}function ae(N){K.value=N}function Y(){K.value=null}function Q(N){d&&clearTimeout(d),d=setTimeout(()=>{d=null,Vue.nextTick(u)},N||120)}Vue.onMounted(()=>{Q(0),Q(800),E=()=>Q(150),window.addEventListener("resize",E),S=new MutationObserver(()=>Q(120)),S.observe(document.body||document.documentElement,{childList:!0,subtree:!0})}),Vue.onBeforeUnmount(()=>{E&&window.removeEventListener("resize",E),d&&clearTimeout(d),S&&(S.disconnect(),S=null)});const x=Vue.ref([]),h=Vue.ref(null),Z=Vue.ref(!1),fe=Vue.ref(!1),de=Vue.ref(7),Ce=Vue.ref(""),Ne=Vue.ref(""),xe=Vue.computed(()=>{const N=new Set;return(x.value||[]).forEach(function(ce){ce.task&&N.add(ce.task)}),Array.from(N).sort()}),qe=Vue.computed(function(){const N=h.value&&h.value.success_rate||0;return N>=80?"color-success":N>=50?"color-warning":"color-danger"});function ie(N,ce){return N>0&&ce/N>=.8?"status-ok":N>0&&ce/N>=.5?"status-warn":"status-bad"}async function ye(){const N=++y;Z.value=!0,fe.value=!1;try{const ce=window.__quantModules&&window.__quantModules.core||{},Me=typeof ce.authHeaders=="function"?ce.authHeaders():{},ze=new URLSearchParams({days:String(de.value)});Ce.value&&ze.set("task",Ce.value),Ne.value&&ze.set("status",Ne.value);const[je,Ie]=await Promise.all([fetch("/api/system/execution-history?"+ze.toString(),{headers:Me}).then(function(Ve){return Ve.json()}),fetch("/api/system/execution-summary?days="+de.value,{headers:Me}).then(function(Ve){return Ve.json()})]);if(N!==y)return;x.value=je&&je.data||[],h.value=Ie&&Ie.data||null}catch(ce){console.error("[execution] 执行数据加载失败:",ce),fe.value=!0}finally{N===y&&(Z.value=!1)}}const Re=window.__quantModules&&window.__quantModules.i18n||{},se=typeof Re.t=="function"?Re.t:function(N){return String(N)},$=Vue.ref([]),ne=Vue.ref(null),Se=Vue.ref(null),Te=Vue.ref(""),tt=Vue.ref([]),ht=Vue.ref(!1);let rt=null;const at=Vue.computed(function(){const N=Se.value&&Se.value.dates||[];return N.length&&!Te.value&&(Te.value=N[N.length-1].date),N}),lt=Vue.computed(function(){const N=($.value||[]).find(function(Me){return Me.enabled});if(!N||N.countdown_seconds==null)return"—";const ce=N.countdown_seconds;return Math.floor(ce/3600)+"h"+String(Math.floor(ce%3600/60)).padStart(2,"0")+"m"}),oe=Vue.computed(function(){const N=($.value||[]).find(function(ce){return ce.enabled});if(!N||N.countdown_seconds==null||N.countdown_seconds<0)return"";try{return new Date(Date.now()+N.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),ke=Vue.computed(function(){const N=ne.value;return!N||N.phase==="idle"?se("exec.waiting"):N.phase==="running"?se("exec.running")+(N.current_sid?" · "+N.current_sid:""):N.phase==="done"?se("exec.done"):se("exec.failed")}),De=Vue.computed(function(){return ne.value&&ne.value.phase==="running"?"🟡":"🟢"}),Ae=Vue.computed(function(){const N=Se.value&&Se.value.dates||[];return N.length?N[N.length-1].date:"—"}),ct=Vue.computed(function(){const N=Se.value&&Se.value.dates||[],ce=N[N.length-1];return ce&&ce.visible?"color-success":"color-danger"}),Qe=Vue.computed(function(){const N=Se.value&&Se.value.dates||[],ce=N[N.length-1];return ce?(ce.visible?"✓ ":"✗ ")+ce.day_view_total:"—"});function Je(N){const ce=window.__quantModules&&window.__quantModules.core||{},Me=typeof ce.authHeaders=="function"?ce.authHeaders():{};return fetch(N,{headers:Me}).then(function(ze){return ze.json()})}async function yt(){const N=++y;try{const[ce,Me,ze]=await Promise.all([Je("/api/strategies/execution/plan"),Je("/api/strategies/execution/status"),Je("/api/strategies/execution/results?days=7")]);if(N!==y)return;$.value=ce&&ce.data&&ce.data.plans||[],ne.value=Me&&Me.data||null,Se.value=ze&&ze.data||null,ne.value&&ne.value.phase==="running"?_t():$e()}catch(ce){console.error("[execution-monitor] 监控数据加载失败:",ce)}}function _t(){$e(),rt=setInterval(function(){Je("/api/strategies/execution/status").then(function(N){ne.value=N&&N.data||null,ne.value&&ne.value.phase!=="running"&&($e(),yt())}).catch(function(){})},5e3)}function $e(){rt&&(clearInterval(rt),rt=null)}async function ft(N){if(!N)return;const ce=++y;ht.value=!0;try{const Me=await Je("/api/strategies/execution/trace/"+encodeURIComponent(N));if(ce!==y)return;const ze=Me&&Me.data||null;tt.value=ze&&ze.steps||[]}catch(Me){console.error("[execution-trace] 追溯加载失败:",Me)}finally{ce===y&&(ht.value=!1)}}return Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(N){N==="execution"?(ye(),yt()):$e()},{immediate:!0}),{...e,todayText:T,tradingStatus:k,merrillNext:C,todayFocus:q,todaySignals:w,merrillConfigOpen:p,getTimelineStageColor:M,getTimelineStageName:R,getTimelineStageDesc:X,timelineRows:f,tlChipStyle:_,tlPathFor:O,tlCycleYears:J,tlGanttStyle:D,tlTipYears:re,tlTipBrief:F,tlCurrentBrief:j,tlHoverKey:K,setTlHover:ae,clearTlHover:Y,tlClickStage:m,tlClickVisible:H,closeTlClick:A,tlClickPosStyle:ee,merrillTimeline:n,timelineLoading:i,showTimelineStage:te,execHistory:x,execSummary:h,execLoading:Z,execError:fe,execDays:de,execTaskFilter:Ce,execStatusFilter:Ne,execTaskOptions:xe,execSuccessClass:qe,loadExecutionData:ye,execRateClass:ie,execPlan:$,execStatus:ne,execResults:Se,execTraceDate:Te,execTraceSteps:tt,execTraceLoading:ht,execResultsDates:at,execCountdownText:lt,execNextRunText:oe,execPhaseText:ke,execStatusIcon:De,execLastDate:Ae,execVisibleClass:ct,execVisibleText:Qe,loadExecutionTrace:ft}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
                        <div class="card-title"><qc-icon name="palette" :size="14" /> 界面与个性化 <span class="text-sm-tertiary">主题 · 语言 · 图表</span></div>
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
    `,setup(){const e=a("qcState");if(!e)return{};function p(B){e.currentSubPage.value=B}function t(){ye(),Re(),se()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,B=>{B==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),B==="datadict"&&S(),B==="health"&&_(),B==="notification"&&t()});const y=e.themeHues||[45,220,0,140,270,320],b=e.themeHueNames||{},L=e.themeMode||Vue.computed(()=>"light"),c=e.themeHue||Vue.ref(45);function r(B){e.changeThemeMode&&e.changeThemeMode(B)}function g(B){e.changeThemeHue&&e.changeThemeHue(parseInt(B,10))}function v(B){return e.hueColor?e.hueColor(B):"hsl("+B+", 75%, 42%)"}function P(B){return e.hueName?e.hueName(B):b[B]||"自定义 "+B}function l(B){e.setNavMode&&e.setNavMode(B)}const T=Vue.ref([]),k=Vue.ref(""),C=Vue.ref("read"),q=Vue.ref(""),w=Vue.ref(!1),n=()=>window.__quantModules&&window.__quantModules.core||{},i=Vue.ref([]),m=Vue.ref(!1);async function H(){m.value=!0;try{const B=await fetch("/api/audit/logs?limit=20",{headers:n().authHeaders?n().authHeaders():{}}).then(function(me){if(!me.ok)throw new Error("HTTP "+me.status);return me.json()});i.value=B&&B.logs||[]}catch(B){console.error("[system] 审计加载失败:",B),i.value=[]}finally{m.value=!1}}const I=Vue.ref(!1),G=Vue.ref(null),ee=Vue.ref(null),te=Vue.ref([]),A=Vue.ref(null);function M(B){return B==="completed"?"完成":B==="running"?"运行中":B==="pending"?"排队中":B==="cancelled"?"已取消":"失败"}async function R(){try{const me=await(await fetch("/api/jobs?limit=20")).json();me&&me.success&&(te.value=me.data&&me.data.tasks||[])}catch(B){console.warn("[system] 加载任务队列失败:",B)}}async function z(B){try{await fetch("/api/jobs/"+B+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),R()}catch(me){console.warn("[system] 取消任务失败:",me)}}function X(){R(),A.value=window.setInterval(R,15e3)}const J=Vue.ref({items:[]}),re=Vue.ref([]),F=Vue.ref(null),j=Vue.ref({data_sources:[],alerts:[]}),D=function(){return n().authHeaders?n().authHeaders():{}},f=function(B){return fetch(B,{headers:D()}).then(function(me){if(!me.ok)throw new Error("HTTP "+me.status);return me.json()})};async function _(){I.value=!0,G.value=null;try{const[B,me,Ue,Ge]=await Promise.all([f("/api/reliability/freshness"),f("/api/reliability/heal-history?limit=20"),f("/api/reliability/startup-report"),f("/api/reliability/source-health")]);J.value=B&&B.data||{items:[]},re.value=me&&me.data||[],F.value=Ue&&Ue.data||null,j.value=Ge||{data_sources:[],alerts:[]},ee.value=new Date().toLocaleTimeString()}catch(B){console.warn("[health] 加载失败:",B),G.value="健康数据加载失败: "+(B.message||""),J.value={items:[]},re.value=[]}finally{I.value=!1}}const le=Vue.ref(!1),K=Vue.ref(""),E=Vue.ref(""),d=Vue.ref({fields:[]});async function S(){le.value=!0,K.value="";try{const B="/api/data-dict"+(E.value?"?category="+E.value:""),me=await f(B);d.value=me&&me.data||{fields:[]}}catch(B){console.warn("[dict] 加载失败:",B),K.value="数据字典加载失败: "+(B.message||""),d.value={fields:[]}}finally{le.value=!1}}function u(B){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[B]||"var(--text-secondary)"}function O(B){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[B]||B}const ae=Vue.computed(()=>(J.value?J.value.items||[]:[]).filter(me=>me.status==="stale"||me.status==="missing").length),Y=Vue.ref("rules"),Q=Vue.ref([]),x=Vue.ref([]),h=Vue.ref([]),Z=Vue.ref(!1),fe=Vue.ref(""),de=Vue.ref("price_above"),Ce=Vue.ref(""),Ne=Vue.ref(!1),xe=Vue.ref(60),qe=Vue.ref("");function ie(B){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[B]||B}async function ye(){Z.value=!0;try{const B=await(await fetch("/api/alerts/rules")).json();Q.value=B&&B.rules||[]}catch(B){qe.value="规则加载失败: "+B}finally{Z.value=!1}}async function Re(){Z.value=!0;try{const B=await(await fetch("/api/alerts/history?limit=50")).json();x.value=B&&B.history||[]}catch(B){qe.value="历史加载失败: "+B}finally{Z.value=!1}}async function se(){Z.value=!0;try{const B=await(await fetch("/api/alerts/channels")).json(),me=await(await fetch("/api/alerts/silence")).json();h.value=B&&B.channels||[],Ne.value=!!(me&&me.silenced)}catch(B){qe.value="通道状态加载失败: "+B}finally{Z.value=!1}}function $(B){Y.value=B,B==="rules"?ye():B==="history"?Re():se()}async function ne(){const B=fe.value.trim();if(!B){qe.value="请填写股票代码";return}Z.value=!0;try{const me={stock_code:B,rule_type:de.value};if(de.value!=="new_pool"){const Ge=Number(Ce.value);if(isNaN(Ge)){qe.value="阈值必须为数值";return}me.threshold=Ge}const Ue=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(me)})).json();Ue&&Ue.rule?(qe.value="规则已添加",fe.value="",Ce.value="",ye()):qe.value=Ue&&Ue.detail||"添加失败"}catch(me){qe.value="添加失败: "+me}finally{Z.value=!1}}async function Se(B){try{await fetch("/api/alerts/rules/"+B.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!B.enabled})}),B.enabled=!B.enabled}catch(me){qe.value="切换失败: "+me}}async function Te(B){try{const me=await(await fetch("/api/alerts/rules/"+B.id,{method:"DELETE"})).json();me&&me.success?(qe.value="规则已删除",ye()):qe.value="删除失败"}catch(me){qe.value="删除失败: "+me}}async function tt(){try{const B=Ne.value?xe.value:0,me=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:B})})).json();Ne.value=!!(me&&me.silenced),qe.value=Ne.value?"已静默":"已恢复推送"}catch(B){qe.value="静默设置失败: "+B}}async function ht(){Ne.value=!1,await tt()}function rt(B){return!!B&&!B.degraded}const at=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((me,Ue)=>Math.max(me,Ue.views||0),0)||1),lt=()=>n().OPENAPI_ROUTE_BASE||"/api/openapi";async function oe(){w.value=!0;try{const B=await n().apiFetch(lt()+"/keys");T.value=B&&B.data||[]}catch(B){ElementPlus.ElMessage.error("加载 API Key 失败: "+(B.message||""))}finally{w.value=!1}}async function ke(){try{const B=await n().apiFetch(lt()+"/keys",{method:"POST",body:JSON.stringify({name:k.value||"未命名",role:C.value||"read",expire_days:365})});B&&B.success?(q.value=B.api_key||"",k.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await oe()):ElementPlus.ElMessage.error(B&&(B.detail||B.message)||"生成失败")}catch(B){ElementPlus.ElMessage.error("生成失败: "+(B.message||""))}}async function De(){if(q.value)try{await navigator.clipboard.writeText(q.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Ae(B){try{const me=await n().apiFetch(lt()+"/keys/"+B.id,{method:"DELETE"});me&&me.success?(ElementPlus.ElMessage.success("Key 已吊销"),q.value&&B.prefix&&q.value.includes(B.prefix)&&(q.value=""),await oe()):ElementPlus.ElMessage.error(me&&(me.detail||me.message)||"吊销失败")}catch(me){ElementPlus.ElMessage.error("吊销失败: "+(me.message||""))}}const ct={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Qe(B){return ct[B]||B}const Je=computed(()=>{var B;return(((B=e.healthMetrics)==null?void 0:B.value)||[]).map(me=>({name:Qe(me.name),source:me.name,success_rate:me.success_rate,avg_latency_ms:me.avg_latency_ms,calls:me.calls||0,degraded:!!me.degraded,data_age_hours:me.data_age_hours!=null?me.data_age_hours:null,stale:!!me.stale,last_fetch:me.last_fetch||me.last_success||null}))});function yt(B){return B.degraded?"degraded":B.success_rate==null?"unknown":B.success_rate>=90?"ok":B.success_rate>=60?"warn":"bad"}function _t(B){return B==null?"":B<1?"刚刚":B<24?Math.round(B)+"小时前":Math.floor(B/24)+"天前"}const $e=e.aiUsage||Vue.ref({}),ft=Vue.computed(()=>{const B=$e.value&&$e.value.by_model||{};return Object.entries(B).map(([me,Ue])=>({name:me,count:Ue})).sort((me,Ue)=>Ue.count-me.count)}),N=Vue.computed(()=>ft.value.reduce((B,me)=>Math.max(B,me.count),0)||1),ce=Vue.computed(()=>ft.value.reduce((B,me)=>B+me.count,0)||1),Me=Vue.computed(()=>ze.value.reduce((B,me)=>Math.max(B,me.count),0)||0),ze=Vue.computed(()=>{const B=$e.value&&$e.value.by_day||{},me=[],Ue=new Date;for(let Ge=29;Ge>=0;Ge--){const vt=new Date(Ue.getFullYear(),Ue.getMonth(),Ue.getDate()-Ge),wt=vt.getFullYear()+"-"+String(vt.getMonth()+1).padStart(2,"0")+"-"+String(vt.getDate()).padStart(2,"0");me.push({day:wt,count:B[wt]||0})}return me}),je=Vue.computed(()=>ze.value.reduce((B,me)=>Math.max(B,me.count),0)||1),Ie=Vue.computed(()=>{const B=$e.value&&$e.value.by_day||{},me=new Date,Ue=me.getFullYear()+"-"+String(me.getMonth()+1).padStart(2,"0")+"-"+String(me.getDate()).padStart(2,"0");return B[Ue]||0}),Ve=Vue.computed(()=>{const B=$e.value&&$e.value.by_day||{},me=Object.keys(B).filter(Ue=>(B[Ue]||0)>0);return me.length?me[me.length-1]:""});function Xe(B){e.analyticsDays&&(e.analyticsDays.value=B),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const He='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ze='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function bt(B){return B?Ze:He}return X(),{...e,themeHues:y,themeHueNames:b,themeMode:L,themeHue:c,onThemeModeChange:r,setThemeHue:g,hueColor:v,hueName:P,onNavModeChange:l,analyticsMaxViews:at,aiModelRank:ft,aiModelMax:N,aiDayTrend:ze,aiDayMax:je,todayAiCalls:Ie,lastAiCallDay:Ve,aiTotal:ce,aiDayPeak:Me,setAnalyticsDays:Xe,viewIcon:bt,openApiKeys:T,openApiKeyName:k,openApiKeyRole:C,newOpenApiKey:q,openApiLoading:w,loadOpenApiKeys:oe,generateOpenApiKey:ke,copyOpenApiKey:De,revokeOpenApiKey:Ae,healthRows:Je,healthClass:yt,fmtAge:_t,staleAssetCount:ae,jobQueue:te,loadJobQueue:R,cancelJob:z,jobStatusText:M,auditLogs:i,auditLoading:m,loadAuditLogs:H,healthLoading:I,healthError:G,healthUpdatedAt:ee,freshnessData:J,healHistory:re,startupReport:F,sourceHealth:j,refreshHealth:_,statusColor:u,statusLabel:O,sourceOk:rt,dictLoading:le,dictError:K,dictCategory:E,dictData:d,loadDataDict:S,ncTab:Y,ncRules:Q,ncHistory:x,ncChannels:h,ncLoading:Z,ncNewCode:fe,ncNewType:de,ncNewThreshold:Ce,ncSilence:Ne,ncSilenceMinutes:xe,ncMsg:qe,ncTypeLabel:ie,onNcTab:$,loadAlertRules:ye,loadAlertHistory:Re,loadAlertChannels:se,addAlertRule:ne,toggleAlertRule:Se,removeAlertRule:Te,applySilence:tt,clearSilence:ht,goSystemSub:p}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                                        <span :style="{color:item.result.level_color,fontWeight:'var(--font-bold)',fontSize:'18px'}">{{ fmtNum(item.result.total_score) }}</span>
                                    </div>
                                    <div class="text-sm-secondary-mb6">{{ item.stock_name }}</div>
                                    <div class="flex-between">
                                        <!-- V6.6: level_color 服务端实时色（含 20 透明底），保留内联 -->
                                        <span :style="{background:item.result.level_color+'20',color:item.result.level_color,padding:'2px 8px',borderRadius:'10px',fontSize:'var(--font-xs)'}">{{ item.result.level }}</span>
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
                                        <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="72">
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
                                        <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="72">
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
                                            <span :style="{color: records[0].result.level_color, fontSize: 'var(--font-sm)'}">最新{{ fmtNum(records[0].result.total_score) }}分</span>
                                        </div>
                                    </div>
                                    <span class="group-toggle-arrow" :style="{transform: expandedStocks.includes(code) ? 'rotate(90deg)' : ''}">▶</span>
                                </div>
                                <div class="records-indent-sm" v-if="expandedStocks.includes(code)">
                                    <!-- v3.7.14: 评估历史趋势图 -->
                                    <div class="trend-chart-box" v-if="records.length> 1" :ref="el => registerTrendChart(el, code, records)"></div>
                                    <!-- v3.16 (16.7): 内层虚拟滚动（单股多次评估时仅渲染可视区） -->
                                    <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                    <qc-virtual-list class="vlist-max-h-420" :items="records" :row-height="72">
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
                                        <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="72">
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
                                        <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="72">
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
                                    <qc-virtual-list class="vlist-max-h-420" :items="sessions" :row-height="72">
                                        <template #default="{ item: session }">
                                    <qc-history-record :item="session" type="chat" time-format="datetime"></qc-history-record>
                                        </template>
                                    </qc-virtual-list>
                                </div>
                            </div>
                        </div>
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
                                <qc-virtual-list class="vlist-h-calc" :items="sortedWatchlist" :row-height="56">
                                    <template #default="{ item: stock }">
                                    <!-- v3.17.8 (FR-3.17.8): 移动端左滑露出删除操作（.swipe-reveal），长按复制代码 -->
                                    <div class="watchlist-item swipe-reveal" :data-copy-code="stock.code" @click="showStockKline(stock.code, stock.name)" :class="{'watchlist-item-selected': selectedWatchlistCodes.includes(stock.code)}">
                                        <div class="swipe-reveal-main">
                                        <div class="watchlist-checkbox" @click.stop="toggleSelectWatchlist(stock.code)">
                                            <span v-if="selectedWatchlistCodes.includes(stock.code)" class="watchlist-checkbox-check">✓</span>
                                        </div>
                                        <div class="watchlist-info">
                                            <span class="watchlist-code">{{ stock.code }}</span>
                                            <span class="watchlist-name">{{ stock.name }}</span>
                                            <span v-if="batchRunning && batchStatuses[stock.code]==='running'" class="watchlist-status spinning"><qc-icon name="loader" :size="12" /></span>
                                            <!-- V6.6: getWatchlistScore().color 函数计算色，保留内联 -->
                                            <span v-else-if="getWatchlistScore(stock.code)" class="watchlist-score-badge" :style="{background: getWatchlistScore(stock.code).color+'20', color: getWatchlistScore(stock.code).color}">
                                                {{ fmtNum(getWatchlistScore(stock.code).score) }}
                                            </span>
                                            <!-- v3.17.7 实时化 (FR-3.17.7): 行内实时报价（涨跌色/涨跌幅/量比/涨速 + 预警标记） -->
                                            <div v-if="realtimeQuotes[stock.code]" class="watchlist-quote">
                                                <!-- V6.6: realtimeQuoteColor() 实时涨跌计算色，保留内联 -->
                                                <span class="quote-price" :style="{color: realtimeQuoteColor(stock.code)}">{{ realtimePriceText(stock.code) }}</span>
                                                <span class="quote-pct" :style="{color: realtimeQuoteColor(stock.code)}">{{ realtimePctText(stock.code) }}</span>
                                                <span class="quote-meta">量比 {{ realtimeRatioText(stock.code, 'volume_ratio') }}</span>
                                                <span class="quote-meta">涨速 {{ realtimeRatioText(stock.code, 'rise_speed') }}%</span>
                                                <span v-if="quoteWarningFor(stock.code)" class="rt-warn-tag">{{ quoteWarningFor(stock.code) }}</span>
                                            </div>
                                        </div>
                                        <div class="watchlist-actions">
                                            <el-button size="small" @click.stop="watchlistEvaluate(stock.code, stock.name)" :disabled="aiLoading"><qc-icon name="bar-chart-3" :size="14" /> 评估</el-button>
                                            <el-button size="small" @click.stop="showStockKline(stock.code, stock.name)"><qc-icon name="trending-up" :size="14" /> K线</el-button>
                                            <el-button size="small" type="danger" text @click.stop="removeFromWatchlist(stock.code)" aria-label="从自选删除"><qc-icon name="trash-2" :size="14" /></el-button>
                                        </div>
                                        </div>
                                        <div class="swipe-reveal-actions">
                                            <el-button size="small" type="danger" @click.stop="removeFromWatchlist(stock.code)"><qc-icon name="trash-2" :size="14" /> 删除</el-button>
                                        </div>
                                    </div>
                                    </template>
                                </qc-virtual-list>
                            </div>
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
                </div>`,setup(){const{ref:e,watch:p,onUnmounted:t}=Vue,y=a("qcState");if(!y)return{};function b(){if(!y.hasMoreAiHistory||!y.loadMoreAiHistory||y.currentPage.value!=="ai"||y.currentSubPage.value!=="history")return;const x=document.documentElement;x.scrollTop+window.innerHeight>=x.scrollHeight-300&&y.loadMoreAiHistory()}window.addEventListener("scroll",b,{passive:!0}),t(()=>window.removeEventListener("scroll",b));const L=e(null),c=e(!1),r=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function g(x){return!x||x.total===0||x.rate===null||x.rate===void 0?"--":x.rate.toFixed(2)+"%"}const v=e(5);function P(x){v.value=x}function l(x,h){if(!x)return"--";if(x.available===!1)return"— 数据不可达";const Z=x["hit_n"+h];return Z===!0?"✓ 命中":Z===!1?"✗ 未中":"– 中性/待验证"}async function T(){c.value=!0;try{const h=await(await fetch("/api/ai/track")).json();L.value=h&&h.success?h.data:null}catch(x){console.warn("[eval-track] 评估命中率加载失败:",x),L.value=null}finally{c.value=!1}}p(function(){return y.currentPage.value+"/"+y.currentSubPage.value},function(x){x==="ai/evaluation-analysis"&&T()},{immediate:!0});const k=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:C,summary:q,trades:w,loading:n,loadError:i,showAddForm:m,addForm:H,addSaving:I,tradeFormVisible:G,tradeForm:ee,tradeSaving:te,portfolioTab:A,equityDays:M,equityLoading:R,equityNote:z,equityHasData:X,loadPortfolio:J,addPosition:re,removePosition:F,openTradeForm:j,submitTrade:D,loadTrades:f,loadEquity:_,fmtSigned:le,fmtSignedPct:K,signClass:E,riskTab:d,riskLoading:S,riskNote:u,riskHasData:O,riskData:ae,riskMetricList:Y,loadRisk:Q}=k;return p(C,function(x){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((x||[]).map(function(h){return{code:h.stock_code,name:h.stock_name||h.stock_code}}))},{deep:!0}),p(function(){return y.currentPage.value+"/"+y.currentSubPage.value},function(x){x==="ai/portfolio"?(J(),f(),_(M?M.value:30),typeof Q=="function"&&Q()):x==="ai/overview"&&J()},{immediate:!0}),{...y,trackData:L,trackLoading:c,trackWindows:r,fmtTrackRate:g,loadTrack:T,trackWindow:v,setTrackWindow:P,trackHitText:l,positions:C,summary:q,trades:w,loading:n,loadError:i,showAddForm:m,addForm:H,addSaving:I,tradeFormVisible:G,tradeForm:ee,tradeSaving:te,portfolioTab:A,equityDays:M,equityLoading:R,equityNote:z,equityHasData:X,loadPortfolio:J,addPosition:re,removePosition:F,openTradeForm:j,submitTrade:D,loadTrades:f,loadEquity:_,fmtSigned:le,fmtSignedPct:K,signClass:E,riskTab:d,riskLoading:S,riskNote:u,riskHasData:O,riskData:ae,riskMetricList:Y,loadRisk:Q}}}})();(function(){const{ref:a,computed:e,watch:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                        <div v-else class="empty-state p-30-0">选择策略和日期范围后点击"运行回测"</div>
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
                    </div>
                </div>`,setup(){const y=t("qcState"),b=Vue.ref(!1),L=Vue.ref(!1);let c=0;if(!y)return{};const r=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function g(s){r.value=s;try{localStorage.setItem("quant_strategy_mode",s)}catch{}y.currentSubPage.value="strategy-manage"}const v=a([]),P=a(!1),l=a(!1),T=a(""),k=a(null),C=a(!1),q=a(!1);async function w(){const s=++c;P.value=!0,l.value=!1;try{const o=await fetch("/api/market/reviews?limit=30",{headers:He()}).then(W=>W.json());if(s!==c)return;o&&o.success?v.value=Array.isArray(o.data)?o.data:[]:l.value=!0}catch(o){console.error("[market-review] 复盘列表加载失败:",o),l.value=!0}finally{s===c&&(P.value=!1)}}function n(s){T.value=s,m(s)}function i(){T.value="",k.value=null,q.value=!1}async function m(s){const o=++c;C.value=!0,q.value=!1,k.value=null;try{const W=s?"/api/market/review?date="+encodeURIComponent(s):"/api/market/review",be=await fetch(W,{headers:He()}).then(he=>he.json());if(o!==c)return;be&&be.success?k.value=be.data:q.value=!0}catch(W){console.error("[market-review] 复盘详情加载失败:",W),q.value=!0}finally{o===c&&(C.value=!1)}}function H(s){return s>0?"up":s<0?"down":"flat"}function I(s){return s==null||isNaN(Number(s))?"—":(s>0?"+":"")+Number(s).toFixed(2)+"%"}function G(s){const o={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(s||{}).map(function(W){const be=W[0],he=W[1],ot=!he||he==="unavailable"||he==="数据不可达";return{label:o[be]||be,value:ot?"数据不可达":he,unavailable:ot}})}const ee=a([]),te=a(!1),A=a(!1),M=a(""),R=a(""),z=a(""),X=a({}),J=a(!1),re=a(""),F=a(""),j=a([]),D=a([]),f=a(""),_=a(""),le=a(!0),K=a(!0),E=a("20:00"),d=a("default"),S=a(!1),u=a(""),O=e(function(){return ee.value.find(function(s){return s.id===z.value})||null});async function ae(s,o){o=o||{},o.headers=Object.assign({},o.headers||{});const W=localStorage.getItem("quant_token")||"";return W&&(o.headers.Authorization="Bearer "+W),fetch(s,o)}async function Y(){const s=++c;te.value=!0,A.value=!1,M.value="",R.value="";try{const o=await ae("/api/strategies").then(function(be){return be.json()});if(s!==c)return;let W=null;Array.isArray(o)?W=o:o&&Array.isArray(o.strategies)?(W=o.strategies,o.warn&&(R.value=String(o.warn))):(A.value=!0,M.value=o&&o.detail?String(o.detail):"策略列表加载失败（接口返回异常）"),W!==null&&(ee.value=W,ee.value.length&&!z.value&&(z.value=ee.value[0].id,Q()))}catch(o){console.error("[research] 策略列表加载失败:",o),A.value=!0,M.value="策略列表加载失败: "+(o&&o.message||"网络错误")}finally{s===c&&(te.value=!1)}}function Q(){const s=O.value;s&&(X.value={},s.schema.forEach(function(o){X.value[o.key]=o.default}),F.value="",ye(),x(),de())}async function x(){if(!z.value){D.value=[];return}try{const s=await ae("/api/strategies/"+z.value+"/profiles").then(function(o){return o.json()});D.value=s&&s.data&&s.data.profiles||[],f.value=""}catch(s){console.error("[research] 方案列表加载失败:",s),D.value=[]}}async function h(){b.value=!0;const s=(_.value||"").trim();if(!s){window._core&&window._core.showToast("请输入方案名称");return}try{const o=await ae("/api/strategies/"+z.value+"/profiles",{method:"POST",body:JSON.stringify({name:s,params:X.value})}).then(function(W){return W.json()});if(o&&o.detail){window._core&&window._core.showToast(String(o.detail));return}_.value="",await x(),window._core&&window._core.showToast("方案已保存")}catch(o){console.error("[research] 方案保存失败:",o),window._core&&window._core.showToast("方案保存失败")}}function Z(){const s=D.value.find(function(o){return o.id===f.value});s&&(Object.keys(s.params||{}).forEach(function(o){X.value[o]=s.params[o]}),window._core&&window._core.showToast("已应用方案: "+s.name))}async function fe(){if(f.value)try{await ae("/api/strategies/"+z.value+"/profiles/"+f.value,{method:"DELETE"}).then(function(s){return s.json()}),await x(),window._core&&window._core.showToast("方案已删除")}catch(s){console.error("[research] 方案删除失败:",s)}}async function de(){try{const s=await ae("/api/strategies/governance").then(function(be){return be.json()}),W=(s&&s.data&&s.data.strategies||{})[z.value]||{};le.value=W.enabled!==!1,E.value=W.schedule||"20:00",d.value=W.universe==="all"?"all":"default",K.value=W.show_in_calendar!==!1,u.value=W.last_holdings||""}catch(s){console.error("[research] 纳管状态加载失败:",s)}}async function Ce(){try{await ae("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const s={};return s[z.value]={enabled:le.value,schedule:E.value,universe:d.value,show_in_calendar:K.value},s}()})}).then(function(s){return s.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(s){console.error("[research] 纳管更新失败:",s)}}async function Ne(){if(z.value){S.value=!0;try{const s=await ae("/api/strategies/"+z.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:re.value||void 0})}).then(function(o){return o.json()});if(s&&s.detail){window._core&&window._core.showToast(String(s.detail));return}window._core&&window._core.showToast("持仓已生成"),await de()}catch(s){console.error("[research] run-once 失败:",s),window._core&&window._core.showToast("持仓生成失败")}finally{S.value=!1}}}function xe(){u.value&&window.open(u.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function qe(){const s=O.value;if(!s)return;const o=(_.value||"").trim()||s.name+"-副本";ie(o,Object.assign({},X.value)),window._core&&window._core.showToast("已复制为副本方案: "+o)}async function ie(s,o){try{await ae("/api/strategies/"+z.value+"/profiles",{method:"POST",body:JSON.stringify({name:s,params:o})}).then(function(W){return W.json()}),await x()}catch(W){console.error("[research] 副本保存失败:",W)}}async function ye(){const s=++c;if(z.value)try{const o=await ae("/api/strategies/"+z.value+"/runs?limit=5").then(function(W){return W.json()});if(s!==c)return;j.value=Array.isArray(o)?o:[]}catch{j.value=[]}}async function Re(){if(z.value){J.value=!0;try{const s=await ae("/api/strategies/"+z.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:X.value,as_of:re.value||void 0})}).then(function(o){return o.json()});s&&s.status==="success"?ye():alert("运行失败: "+(s.detail||JSON.stringify(s)))}catch(s){console.error("[research] 策略运行失败:",s),alert("运行失败: "+s.message)}finally{J.value=!1}}}async function se(){if(z.value)try{const s=Object.keys(X.value).map(function(W){return encodeURIComponent(W)+"="+encodeURIComponent(X.value[W])}).join("&"),o=await ae("/api/strategies/"+z.value+"/ptrade-code?"+s).then(function(W){return W.json()});o&&o.code?F.value=o.code:alert("导出失败: "+(o.detail||JSON.stringify(o)))}catch(s){console.error("[research] PTrade 导出失败:",s),alert("导出失败: "+s.message)}}function $(){if(!F.value)return;const s=document.createElement("textarea");s.value=F.value,document.body.appendChild(s),s.select();try{document.execCommand("copy")}catch{}document.body.removeChild(s)}p(function(){return y.currentPage.value+"/"+y.currentSubPage.value},function(s){s==="research/research-overview"&&(Y(),w(),Ze(),aa()),(s==="research/market-review"||s==="shortterm/market-review")&&!T.value&&w(),s==="research/quant-research"&&Y(),s==="research/backtest-history"&&dt()},{immediate:!0});const ne=a("mom20"),Se=a(!1),Te=a(!1),tt=a(null),ht=a(null),rt=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],at=a('{"top_n":[10,20,30]}'),lt=a(null),oe=a(""),ke=a(!1),De=a(null);async function Ae(){if(!z.value){ElementPlus.ElMessage.warning("请先选择策略");return}let s;try{s=JSON.parse(at.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!s||Object.keys(s).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}ke.value=!0,lt.value=null,oe.value="";try{const o=await fetch("/api/strategies/"+z.value+"/sweep",{method:"POST",headers:He(),body:JSON.stringify({param_grid:s})}).then(function(W){return W.json()});o&&Array.isArray(o.results)?(lt.value=o.results,oe.value="完成 "+o.count+" 组"+(o.data_degraded?" (数据不可达, 结果降级)":""),De.value=o.param_stability||null):oe.value=o&&o.detail||"扫描失败"}catch(o){console.error("[sweep]",o),oe.value="扫描失败: "+o.message}finally{ke.value=!1}}async function ct(){const s=++c;Se.value=!0;try{const o=await ae("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:z.value||"multi_factor",factor_key:ne.value,params:X.value||{}})}).then(function(be){return be.json()}),W=o&&o.report?o.report.n1||{}:{};tt.value=W}catch(o){console.error("[research] 因子IC分析失败:",o),alert("因子 IC 分析失败: "+o.message)}finally{s===c&&(Se.value=!1)}}async function Qe(){const s=++c;Te.value=!0;try{const o=await ae("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:z.value||"multi_factor",factor_key:ne.value,params:X.value||{}})}).then(function(W){return W.json()});o&&o.layers?ht.value=o:alert("分层回测: "+(o.message||"无数据"))}catch(o){console.error("[research] 分层回测失败:",o),alert("分层回测失败: "+o.message)}finally{s===c&&(Te.value=!1)}}const Je=a(null),yt=a(!1);async function _t(){const s=++c;yt.value=!0,Je.value=null;try{const o=await ae("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:z.value||"multi_factor",factor_key:ne.value,params:X.value||{}})}).then(function(W){return W.json()});o&&o.detail?Je.value=o.detail:alert("因子详情: "+(o.message||"无数据"))}catch(o){console.error("[research] 因子详情失败:",o),alert("因子详情失败: "+o.message)}finally{s===c&&(yt.value=!1)}}const $e=a([]),ft=a(null),N=a(null),ce=a(null),Me=a(""),ze=a(!1),je=a(!1),Ie=a(""),Ve=a(""),Xe=a("");function He(){const s=localStorage.getItem("quant_token")||"";return s?{Authorization:"Bearer "+s,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Ze(){const s=++c;try{const o=await fetch("/api/strategies/variants",{headers:He()}).then(function(W){return W.json()});if(s!==c)return;$e.value=o&&o.data&&o.data.variants||[]}catch(o){console.error("[i3a] 加载 variants 失败:",o)}}async function bt(){if(!z.value){Ie.value="请先在量化研究选择母本策略";return}je.value=!0,Ie.value="";try{const s=await fetch("/api/strategies/"+z.value+"/clone",{method:"POST",headers:He(),body:JSON.stringify({name:(_.value||"").trim()||void 0,params:Object.assign({},X.value)})}).then(function(W){return W.json()});if(s&&s.detail){Ie.value=String(s.detail);return}const o=s&&s.data;o&&o.sid&&(ft.value=o.sid,Ie.value="已复制为新策略: "+o.name,await Ze(),await me(o.sid))}catch(s){console.error("[i3a] 复制失败:",s),Ie.value="复制失败: "+s.message}finally{je.value=!1}}async function B(s){ft.value=s,Ie.value="",Me.value="",await me(s)}async function me(s){try{const o=await fetch("/api/strategies/"+s+"/selection-spec",{headers:He()}).then(function(W){return W.json()});o&&o.data&&o.data.spec&&(N.value=Object.assign({},o.data.spec),ce.value=o.data.fields,Ve.value=(o.data.spec.industry_scope||[]).join(","),Xe.value=(o.data.spec.market_cap_range||[]).join(","))}catch(o){console.error("[i3a] 加载 spec 失败:",o)}}async function Ue(){if(L.value=!0,!(!ft.value||!N.value))try{N.value.industry_scope=Ve.value?Ve.value.split(/[,，]/).map(function(o){return o.trim()}).filter(Boolean):[],N.value.market_cap_range=Xe.value?Xe.value.split(/[,，]/).map(Number).filter(function(o){return!isNaN(o)}):[];const s=await fetch("/api/strategies/"+ft.value+"/selection-spec",{method:"PUT",headers:He(),body:JSON.stringify({spec:N.value})}).then(function(o){return o.json()});s&&s.data&&s.data.spec&&(N.value=s.data.spec,Ie.value="SelectionSpec 已保存")}catch(s){console.error("[i3a] 保存 spec 失败:",s),Ie.value="保存失败"}}async function Ge(){if(!ft.value){Ie.value="请先选择/创建微调策略";return}je.value=!0,Ie.value="";try{const s=await fetch("/api/strategies/"+ft.value+"/run-once",{method:"POST",headers:He(),body:"{}"}).then(function(o){return o.json()});Ie.value=s&&s.detail?String(s.detail):"持仓已生成: "+(s&&s.data&&s.data.symbols||0)+" 只"}catch(s){console.error("[i3a] run-once 失败:",s),Ie.value="生成持仓失败"}finally{je.value=!1}}async function vt(){if(!ft.value){Ie.value="请先选择/创建微调策略";return}N.value||await me(ft.value),ze.value=!0,Ie.value="";try{const s=await fetch("/api/strategies/"+ft.value+"/ai-trade-code",{method:"POST",headers:He(),body:JSON.stringify({spec:N.value})}).then(function(o){return o.json()});if(s&&s.detail){Ie.value=String(s.detail);return}s&&s.data&&(Me.value=s.data.code||"",s.data.api_errors&&s.data.api_errors.length?Ie.value="生成成功(含 API 校验告警 "+s.data.api_errors.length+" 条)":Ie.value="AI 交易码已生成, 已通过矩阵内校验")}catch(s){console.error("[i3a] AI 交易码失败:",s),Ie.value="AI 生成失败: "+s.message}finally{ze.value=!1}}function wt(){if(Me.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Me.value).then(function(){Ie.value="代码已复制"});else{const s=document.createElement("textarea");s.value=Me.value,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),Ie.value="代码已复制"}}const Rt=a(""),ta=a(""),Qt=a([]),Lt=a(""),It=a(""),Ye=a(""),Nt=a(null),kt=a(!1),At=a(!1),Vt=a(!1);function Wt(){const s=localStorage.getItem("quant_token")||"";return s?{Authorization:"Bearer "+s,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function aa(){const s=++c;try{const o=await fetch("/api/strategies/custom",{headers:Wt()}).then(function(W){return W.json()});if(s!==c)return;Qt.value=o&&o.data&&o.data.customs||[]}catch(o){console.error("[i3b] 加载自定义策略失败:",o)}}async function $t(){if(!ta.value.trim()){Ye.value="请描述策略思路";return}kt.value=!0,Ye.value="";try{const s=await fetch("/api/strategies/custom",{method:"POST",headers:Wt(),body:JSON.stringify({name:Rt.value.trim()||"自定义策略",prompt:ta.value})}).then(function(o){return o.json()});if(s&&s.detail){Ye.value=String(s.detail);return}s&&s.data&&(It.value=s.data.code||"",Ye.value="AI 代写成功: "+s.data.sid+(s.data.api_errors&&s.data.api_errors.length?" (API 告警 "+s.data.api_errors.length+" 条)":" (校验通过)"),await aa())}catch(s){console.error("[i3b] AI 代写失败:",s),Ye.value="AI 代写失败: "+s.message}finally{kt.value=!1}}async function Xt(){if(Lt.value)try{const s=await fetch("/api/strategies/custom/"+Lt.value+"/code",{headers:Wt()}).then(function(o){return o.json()});s&&s.data&&(It.value=s.data.code||"",Ye.value="")}catch(s){console.error("[i3b] 读取代码失败:",s)}}async function Zt(){if(!Lt.value){Ye.value="请先选择自定义策略";return}At.value=!0,Ye.value="";try{const s=await fetch("/api/strategies/custom/"+Lt.value+"/backtest",{method:"POST",headers:Wt(),body:"{}"}).then(function(o){return o.json()});if(s&&s.detail){Ye.value=String(s.detail);return}s&&s.data&&(Nt.value=s.data,Ye.value="回测完成")}catch(s){console.error("[i3b] 回测失败:",s),Ye.value="回测失败: "+s.message}finally{At.value=!1}}async function ua(){if(!Lt.value){Ye.value="请先选择自定义策略";return}Vt.value=!0,Ye.value="";try{const s=await fetch("/api/strategies/custom/"+Lt.value+"/ai-optimize",{method:"POST",headers:Wt(),body:JSON.stringify({backtest:Nt.value})}).then(function(o){return o.json()});if(s&&s.detail){Ye.value=String(s.detail);return}s&&s.data&&(It.value=s.data.code||"",Ye.value="AI 优化完成"+(s.data.api_errors&&s.data.api_errors.length?" (API 告警 "+s.data.api_errors.length+" 条)":" (校验通过)"))}catch(s){console.error("[i3b] AI 优化失败:",s),Ye.value="AI 优化失败: "+s.message}finally{Vt.value=!1}}function Ut(){if(It.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(It.value).then(function(){Ye.value="代码已复制"});else{const s=document.createElement("textarea");s.value=It.value,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),Ye.value="代码已复制"}}const V=Vue.ref([]),pe=Vue.ref(!1),Le=Vue.ref(!1),Ee=Vue.ref(30);async function dt(){const s=++c;pe.value=!0,Le.value=!1;try{const o=window.__quantModules&&window.__quantModules.core||{},W=typeof o.authHeaders=="function"?o.authHeaders():{},be=await fetch("/api/backtest/history?days="+Ee.value,{headers:W}).then(function(he){return he.json()});if(s!==c)return;V.value=be&&be.data||[]}catch(o){console.error("[backtest] 回测历史加载失败:",o),Le.value=!0}finally{s===c&&(pe.value=!1)}}const st=Vue.ref([]),Tt=Vue.ref(!1),Kt=Vue.ref(!1),Ht=Vue.ref(""),Ct=Vue.ref([]),sa=Vue.ref(""),oa=Vue.ref([]),la=Vue.ref(!1),Ot=Vue.ref(!1),ea={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function Sa(s){return ea[s]||s||"—"}function va(s){y&&y.navigateTo&&y.navigateTo("shortterm",s)}function fa(){y.currentSubPage.value="research-history",Pt()}async function Pt(){const s=++c;Tt.value=!0,Kt.value=!1;try{const o=window.__quantModules&&window.__quantModules.core||{},W=typeof o.authHeaders=="function"?o.authHeaders():{},be=Ht.value?"?type="+encodeURIComponent(Ht.value):"",he=await fetch("/api/strategies/research-history"+be,{headers:W}).then(function(ot){return ot.json()});if(s!==c)return;st.value=he&&he.items||[]}catch(o){console.error("[research-history] 加载失败:",o),Kt.value=!0}finally{s===c&&(Tt.value=!1)}}async function ia(){const s=++c;Ot.value=!0;try{const o=window.__quantModules&&window.__quantModules.core||{},W=typeof o.authHeaders=="function"?o.authHeaders():{},be=Ht.value?"?type="+encodeURIComponent(Ht.value):"",he=await fetch("/api/strategies/research-history/export"+be,{headers:W});if(!he.ok)throw new Error("HTTP "+he.status);const ot=await he.blob(),et=URL.createObjectURL(ot),it=document.createElement("a");it.href=et,it.download="research_history.csv",document.body.appendChild(it),it.click(),document.body.removeChild(it),URL.revokeObjectURL(et)}catch(o){console.error("[research-history] 导出失败:",o)}finally{s===c&&(Ot.value=!1)}}function ga(s){const o=Ct.value.indexOf(s);o>=0?Ct.value.splice(o,1):Ct.value.length<10&&Ct.value.push(s)}function Ca(s){sa.value=sa.value===s?"":s}async function qa(){const s=++c,o=Ct.value;if(!(o.length<2)){la.value=!0;try{const W=window.__quantModules&&window.__quantModules.core||{},be=typeof W.authHeaders=="function"?W.authHeaders():{},he=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},be),body:JSON.stringify({ids:o})}).then(function(ot){return ot.json()});oa.value=he&&he.items||[]}catch(W){console.error("[research-history] 对比失败:",W)}finally{s===c&&(la.value=!1)}}}async function ha(s){try{const o=window.__quantModules&&window.__quantModules.core||{},W=typeof o.authHeaders=="function"?o.authHeaders():{},be=await fetch("/api/strategies/research-history/"+s,{method:"DELETE",headers:W}).then(function(he){return he.json()});if(be&&be.deleted){st.value=st.value.filter(function(ot){return ot.id!==s});const he=Ct.value.indexOf(s);he>=0&&Ct.value.splice(he,1)}}catch(o){console.error("[research-history] 删除失败:",o)}}return{...y,strategyManageMode:r,openStrategyManage:g,btHistory:V,btHistoryLoading:pe,btHistoryError:Le,btHistoryDays:Ee,loadBtHistory:dt,researchHistory:st,researchHistoryLoading:Tt,researchHistoryError:Kt,researchHistoryType:Ht,researchHistorySelected:Ct,researchDetailId:sa,researchCompareRows:oa,researchCompareLoading:la,researchTypeLabel:Sa,goShortterm:va,openResearchHistory:fa,loadResearchHistory:Pt,researchExportLoading:Ot,exportResearchHistory:ia,toggleResearchSelect:ga,toggleResearchDetail:Ca,runResearchCompare:qa,deleteResearchHistory:ha,marketReviews:v,marketReviewLoading:P,marketReviewError:l,selectedReviewDate:T,marketReviewDetail:k,marketReviewDetailLoading:C,marketReviewDetailError:q,loadMarketReviews:w,openMarketReview:n,backToMarketReviewList:i,loadMarketReviewDetail:m,marketReviewChgClass:H,marketReviewChgText:I,marketReviewSrcEntries:G,strategies:ee,strategiesLoading:te,strategiesError:A,strategiesErrorText:M,strategiesWarn:R,activeStrategyId:z,activeStrategy:O,paramValues:X,strategyRunning:J,ptradeCode:F,strategyRuns:j,savingProfile:b,variantSaving:L,loadStrategies:Y,onStrategyChange:Q,runActiveStrategy:Re,exportActivePtradeCode:se,copyPtradeCode:$,profiles:D,profileSelect:f,profileName:_,loadProfiles:x,saveProfile:h,applyProfile:Z,deleteProfile:fe,govEnabled:le,govSchedule:E,govUniverse:d,govRunning:S,lastHoldings:u,loadGov:de,updateGov:Ce,runOnceActive:Ne,openLastHoldings:xe,cloneStrategy:qe,govShowCalendar:K,factorKey:ne,factorIcLoading:Se,factorLayerLoading:Te,factorIcReport:tt,factorLayerResult:ht,factorOptions:rt,runFactorIc:ct,runFactorLayer:Qe,factorDetail:Je,factorDetailLoading:yt,runFactorDetail:_t,variants:$e,variantSelected:ft,variantSpec:N,specFields:ce,aiCode:Me,aiCodeLoading:ze,variantBusy:je,variantMsg:Ie,loadVariants:Ze,cloneNewStrategy:bt,selectVariant:B,loadVariantSpec:me,saveVariantSpec:Ue,runVariantOnce:Ge,genVariantAiCode:vt,copyVariantCode:wt,customName:Rt,customPrompt:ta,customs:Qt,customSelected:Lt,customCode:It,customMsg:Ye,customBtResult:Nt,customGenLoading:kt,customBtLoading:At,customOptLoading:Vt,loadCustoms:aa,genCustomCode:$t,loadCustomCode:Xt,runCustomBacktest:Zt,runCustomOptimize:ua,copyCustomCode:Ut,sweepGrid:at,sweepResult:lt,sweepMessage:oe,sweepLoading:ke,sweepStability:De,runSweep:Ae}}}})();(function(){const{inject:a,ref:e,onMounted:p,computed:t,nextTick:y}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="card">
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
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
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
                            <div v-if="emotionNotice" class="text-xs-tertiary mb-4">⚠️ {{ emotionNotice }}</div>
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
                            <div v-if="factsNotice" class="text-xs-tertiary mb-4">⚠️ {{ factsNotice }}</div>
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

                    <!-- 涨停复盘 -->
                    <div v-if="currentSubPage === 'ztpool'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadPools"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
                                <span class="text-xs-tertiary" v-if="pools && pools.settled === false">⚠️ 未收盘, 数据可能不完整</span>
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
                                <span v-if="ztBoardFilter" class="tag-chip is-institution">已筛选 {{ ztBoardFilter }} 板 <span role="button" tabindex="0" aria-label="清除筛选" style="cursor:pointer" @click="clearBoardFilter" @keydown.enter.prevent="clearBoardFilter" @keydown.space.prevent="clearBoardFilter">✕</span></span>
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
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="lhbLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="lhbError" type="error" :title="lhbErrTitle" :desc="lhbErrDesc" @retry="loadLhb"></qc-state-panel>
                        <div v-else-if="lhbRows">
                            <!-- V6.5 (PRD-6.5 F2): 数据源降级提示(非静默空表) -->
                            <div v-if="lhbReason" class="text-xs-tertiary mb-4" title="点击展开完整原因" style="cursor:help">⚠️ {{ lhbReason.length > 120 ? lhbReason.slice(0, 120) + '…' : lhbReason }}</div>
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
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
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
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
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
                </div>`,setup(){const b=a("qcState");if(!b)return{};const L=b.currentPage,c=b.currentSubPage,r=e(""),g=e(null),v=e(!1),P=e(!1),l=e("数据加载失败"),T=e("请检查服务后重试"),k=e(null),C=e(null),q=e(!1),w=e(!1),n=e("数据加载失败"),i=e("请检查服务后重试"),m=e(null),H=e(1),I=50,G=t(function(){const V=C.value||[];if(V.length<=200)return V;const pe=(H.value-1)*I;return V.slice(pe,pe+I)}),ee=e(null),te=e(!1),A=e(!1),M=e("数据加载失败"),R=e("请检查服务后重试"),z=e("行业资金流"),X=e("今日"),J=e(""),re=e(null),F=e(1),j=e(!1),D=e(!1),f=e("数据加载失败"),_=e("请检查服务后重试"),le=e(""),K=e(null),E=e(!1),d=e(null),S=e(!1),u=e(!1),O=e(""),ae=e(""),Y=e(!1);function Q(){const V=localStorage.getItem("quant_token")||"";return V?{Authorization:"Bearer "+V,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const x={},h=[],Z=50,fe=60*1e3;let de=0,Ce=0,Ne=0;function xe(V,pe){const Le=Date.now(),Ee=x[V];return!pe&&Ee&&Le-Ee.ts<fe?Promise.resolve(Ee.data):fetch(V,{headers:Q()}).then(function(dt){return dt.json()}).then(function(dt){if(x[V]||h.push(V),x[V]={ts:Date.now(),data:dt},h.length>Z){const st=h.shift();delete x[st]}return dt})}async function qe(V){const pe=++de;v.value=!0,P.value=!1;try{const Le="/api/shortterm/pools"+(r.value?"?date="+r.value:""),Ee=await xe(Le,V);if(pe!==de)return;Ee&&Ee.success?(g.value=Ee,y(He)):Ee&&Ee.detail?(P.value=!0,l.value=String(Ee.detail),T.value="请先登录后再查看"):(P.value=!0,l.value="数据加载失败",T.value="请检查服务后重试")}catch{if(pe!==de)return;P.value=!0,l.value="数据加载失败",T.value="请检查服务后重试"}finally{pe===de&&(v.value=!1)}}async function ie(V){const pe=++de;q.value=!0,w.value=!1;try{const Le="/api/shortterm/lhb"+(r.value?"?date="+r.value:""),Ee=await xe(Le,V);if(pe!==de)return;Ee&&Ee.success?(C.value=Array.isArray(Ee.rows)?Ee.rows:null,m.value=Ee.available===!1&&Ee.reason||null,H.value=1):Ee&&Ee.detail?(w.value=!0,n.value=String(Ee.detail),i.value="请先登录后再查看"):(w.value=!0,n.value="数据加载失败",i.value="请检查服务后重试")}catch{if(pe!==de)return;w.value=!0,n.value="数据加载失败",i.value="请检查服务后重试"}finally{pe===de&&(q.value=!1)}}const ye=t(function(){const V=g.value&&g.value.ladder&&g.value.ladder.tiers;return!V||!Object.keys(V).length?"—":Object.keys(V).sort(function(pe,Le){return pe-Le}).map(function(pe){return pe+"板:"+V[pe]}).join(" ")}),Re=t(function(){const V=g.value&&g.value.zt||[];return k.value?V.filter(function(pe){return pe.boards===k.value}):V});function se(){k.value=null}const $=t(function(){const V=ee.value&&ee.value.emotion&&ee.value.emotion.money_effect;return!V||!V.available?"—":V.source==="settled"?"定稿记录":V.source==="realtime"?V.partial?"实时(样本不全)":"实时":"—"}),ne=t(function(){const V=ee.value&&ee.value.emotion&&ee.value.emotion.promotion&&ee.value.emotion.promotion.tiers&&ee.value.emotion.promotion.tiers["1进2"];return V?V.rate:null}),Se=t(function(){const V=ee.value&&ee.value.emotion&&ee.value.emotion.sentiment_cycle;return V&&V.available&&V.current_score!=null?V.current_score.toFixed(2):"—"}),Te=t(function(){const V=ee.value&&ee.value.emotion&&ee.value.emotion.sentiment_cycle;return!V||!V.available?"—":(V.trend||"—")+(V.day_n!=null?" · 距低谷"+V.day_n+"天":"")});t(function(){const V=ee.value&&ee.value.emotion;if(!V)return"";const pe=[];for(const Le of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Ee=V[Le];Ee&&Ee.available===!1&&Ee.reason&&pe.push(String(Ee.reason).replace(/^[[^]]*]s*/,""))}return pe.join("；")}),t(function(){const V=ee.value&&ee.value.facts;if(!V)return"";const pe=[];for(const Le of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Ee=V[Le];Ee&&Ee.available===!1&&Ee.reason&&pe.push(String(Ee.reason).replace(/^[[^]]*]s*/,""))}return pe.join("；")});function tt(V){return V==null||isNaN(V)?"—":(V*100).toFixed(0)+"%"}function ht(V,pe){return V==null?"—":(typeof V=="number"?Math.round(V*100)/100:V)+(pe||"")}function rt(V){return"tag-chip mr-4"}function at(V){return V==null?"":V>0?"is-rise":V<0?"is-fall":""}function lt(V){return V==="机构"?"is-institution":V==="游资"?"is-hotmoney":V==="主力"?"is-main":""}const oe=t(function(){const V=ee.value&&ee.value.session_status;if(!V)return"—";const pe=ee.value.date;return pe===V.latest_session&&V.settled?"✅ 已收盘":pe===V.today&&V.is_trade_day&&!V.settled?"⏳ 盘中 · 未收盘":"📅 历史交易日"}),ke=t(function(){const V=ee.value&&ee.value.session_status;if(!V)return"";const pe=ee.value.date;return pe===V.latest_session&&V.settled?"is-institution":pe===V.today&&V.is_trade_day&&!V.settled?"is-main":""});function De(V){V&&V.ts_code&&b&&b.showStockDetail&&b.showStockDetail(V.ts_code)}const Ae=t(function(){return(C.value||[]).filter(function(V){return(V.tags||[]).indexOf("机构")>=0}).reduce(function(V,pe){return V+(pe.net_buy||0)},0)}),ct=t(function(){return(C.value||[]).filter(function(V){return(V.tags||[]).indexOf("游资")>=0}).length}),Qe=t(function(){const V=(re.value||[]).filter(function(pe){return pe.main_net_inflow!=null});return V.length?V.reduce(function(pe,Le){return pe.main_net_inflow>=Le.main_net_inflow?pe:Le}):null}),Je=t(function(){const V=Qe.value;return V?V.name:"—"}),yt=t(function(){const V=Qe.value;return V?V.main_net_inflow:null}),_t=t(function(){return le.value||"东财"}),$e=t(function(){const V=(J.value||"").trim(),pe=re.value||[];return V?pe.filter(function(Le){return Le.name&&String(Le.name).indexOf(V)>=0}):pe});function ft(V){J.value=V||"",b&&b.currentSubPage&&(b.currentSubPage.value="sector")}const N=t(function(){const V=$e.value;if(V.length<=200)return V;const pe=(F.value-1)*I;return V.slice(pe,pe+I)}),ce=["09:25","09:35","10:00","11:30","14:00","15:00"],Me=t(function(){const V={};return(d.value||[]).forEach(function(pe){V[pe.slot]=!0}),V});function ze(V){return Me.value[V]?"is-done":V===je.value?"is-current":"is-empty"}const je=t(function(){const V=new Date,pe=(V.getHours()<10?"0":"")+V.getHours(),Le=(V.getMinutes()<10?"0":"")+V.getMinutes(),Ee=pe+":"+Le;for(var dt=0;dt<ce.length;dt++)if(Ee===ce[dt])return ce[dt];for(var st=0;st<ce.length-1;st++){var Tt=ce[st],Kt=new Date;Kt.setHours(Number(Tt.split(":")[0]),Number(Tt.split(":")[1]),0,0);var Ht=new Date(Kt.getTime()+8*6e4);if(V>=Kt&&V<=Ht)return Tt}return""}),Ie=t(function(){const V=new Date,pe=je.value;if(pe)return"当前处于快照窗口 "+pe+" (前后 8 分钟) — 可采集";const Le=V.getHours(),Ee=V.getMinutes();let dt="";for(let st=0;st<ce.length;st++){const Tt=ce[st].split(":");if(Number(Tt[0])>Le||Number(Tt[0])===Le&&Number(Tt[1])>Ee){dt=ce[st];break}}return dt?"下一快照时点 "+dt+" — 非窗口期不可采集":"今日快照时点已全部结束"}),Ve=e(""),Xe=e("info");function He(){const V=g.value&&g.value.ladder&&g.value.ladder.tiers;if(!V||!Object.keys(V).length)return;const pe=window.__quantModules&&window.__quantModules.charts;if(!pe||!pe.renderSimpleChartTo)return;const Le=k.value,Ee=pe.renderSimpleChartTo("shorttermLadderChart",function(){const dt=Object.keys(V).sort(function(st,Tt){return Number(st)-Number(Tt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:dt.map(function(st){return st+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(st){return Le&&Number(dt[st.dataIndex])===Le?"var(--color-accent)":"var(--chart-split)"}},data:dt.map(function(st){return V[st]})}]}},{key:"shortterm-ladder"});Ee&&Ee.off&&(Ee.off("click"),Ee.on("click",function(dt){if(!dt||!dt.name)return;const st=parseInt(dt.name,10);isNaN(st)||(k.value=k.value===st?null:st)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(He);function Ze(V){if(V==null)return"—";const pe=Math.abs(V);return pe>=1e8?(V/1e8).toFixed(2)+"亿":pe>=1e4?(V/1e4).toFixed(0)+"万":V.toFixed(0)}function bt(V){return V==null?"—":(V>=0?"+":"")+V.toFixed(2)+"%"}async function B(V){const pe=++Ce;te.value=!0,A.value=!1;try{const Le="/api/shortterm/overview"+(r.value?"?date="+r.value:""),Ee=await xe(Le,V);if(pe!==Ce)return;Ee&&Ee.success?ee.value=Ee:Ee&&Ee.detail?(A.value=!0,M.value=String(Ee.detail),R.value="请先登录后再查看"):(A.value=!0,M.value="数据加载失败",R.value="请检查服务后重试")}catch{if(pe!==Ce)return;A.value=!0,M.value="数据加载失败",R.value="请检查服务后重试"}finally{pe===Ce&&(te.value=!1)}}async function me(V){const pe=++de;j.value=!0,D.value=!1;try{const Le="/api/shortterm/sector-flow?indicator="+encodeURIComponent(X.value)+"&sector_type="+encodeURIComponent(z.value),Ee=await xe(Le,V);if(pe!==de)return;Ee&&Ee.success&&Ee.available?(re.value=Ee.rows||[],le.value=Ee.source||(Ee.note?"同花顺":"东财"),F.value=1):Ee&&Ee.reason?(D.value=!0,f.value="数据加载失败",_.value=String(Ee.reason).replace(/^\[⚠️[^\]]*\]\s*/,"")):Ee&&Ee.detail?(D.value=!0,f.value=String(Ee.detail),_.value="请先登录后再查看"):(D.value=!0,f.value="数据加载失败",_.value="请检查服务后重试")}catch{if(pe!==de)return;D.value=!0,f.value="数据加载失败",_.value="请检查服务后重试"}finally{pe===de&&(j.value=!1)}}async function Ue(V){const pe=++Ne;try{const Le="/api/shortterm/review"+(r.value?"?date="+r.value:""),Ee=await xe(Le,V);if(pe!==Ne)return;Ee&&Ee.success&&(K.value=Ee.review||null)}catch{}}async function Ge(){E.value=!0;try{const V="/api/shortterm/review"+(r.value?"?date="+r.value:""),pe=await fetch(V,{method:"POST",headers:Q()}).then(function(Le){return Le.json()});pe&&pe.success&&(K.value=pe,x[V]={ts:Date.now(),data:pe})}catch{}finally{E.value=!1}}async function vt(){const V=O.value.trim();if(V){Y.value=!0,ae.value="";try{const Le=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Q(),body:JSON.stringify({date:overviewDate.value,question:V})}).then(function(Ee){return Ee.json()});ae.value=Le.answer||"[无回复]"}catch{ae.value="[⚠️ 发送失败]"}finally{Y.value=!1}}}async function wt(V){const pe=++de;S.value=!0;try{const Le="/api/shortterm/intraday"+(r.value?"?date="+r.value:""),Ee=await xe(Le,V);if(pe!==de)return;Ee&&Ee.success&&(d.value=Ee.snapshots||[])}catch{}finally{pe===de&&(S.value=!1)}}async function Rt(){u.value=!0;try{const V="/api/shortterm/intraday/snapshot"+(r.value?"?date="+r.value:""),pe=await fetch(V,{method:"POST",headers:Q()}).then(function(Le){return Le.json()});pe&&pe.success?(pe.accepted?(Ve.value="✅ 已采集 "+pe.slot+" 快照"+(pe.pools_available&&!pe.pools_available.zt?" (池源部分不可用)":""),Xe.value="ok"):(Ve.value="⏱ "+(pe.reason||"非快照时点"),Xe.value="warn"),wt()):Ve.value="采集失败, 请稍后重试"}catch{Ve.value="采集失败, 请稍后重试"}finally{u.value=!1}}function ta(){return xe("/api/shortterm/latest-session",!1).then(function(V){V&&V.date&&(r.value||(r.value=V.date))}).catch(function(){})}function Qt(){const V=c.value;V==="ztpool"?qe():V==="lhb"?ie():V==="overview"?(B(),Ue()):V==="sector"?me():V==="intraday"&&wt()}function Lt(){const V=r.value?"?date="+r.value:"";["/api/shortterm/overview"+V,"/api/shortterm/pools"+V,"/api/shortterm/lhb"+V].forEach(function(Le){xe(Le,!1).catch(function(){})})}function It(){const V=c.value;V==="ztpool"?qe(!0):V==="lhb"?ie(!0):V==="overview"?(B(!0),Ue(!0)):V==="sector"?me(!0):V==="intraday"&&wt(!0)}p(function(){ta(),Qt(),Lt(),Xt()}),Vue.watch(function(){return c.value},function(V){Qt(),V==="overview"&&Xt()});const Ye=window.QuantOnboarding,Nt=e(!1),kt=e(Ye?Ye.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),At=t(function(){return Ye&&Ye.shorttermTourSteps()[kt.value.stepIndex]||{key:"",title:"",desc:""}}),Vt=t(function(){return Ye?Ye.shorttermTourProgress(kt.value):{done:0,total:3,pct:0}}),Wt=t(function(){return kt.value.stepIndex>=2});function aa(){if(Ye){var V=null;try{V=localStorage.getItem("qc_shortterm_tour")}catch{}if(V){var pe=Ye.parseState(V);pe&&(kt.value=pe)}}}function $t(){if(Ye){var V=JSON.stringify(kt.value);try{localStorage.setItem("qc_shortterm_tour",V)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:V}})}).catch(function(){})}catch{}}}function Xt(){window.__quantGuideModalsEnabled===!0&&Ye&&c.value==="overview"&&(aa(),Ye.shorttermTourShouldShow(kt.value)&&(Nt.value=!0))}function Zt(){kt.value=Ye.shorttermTourNext(kt.value),$t()}function ua(){kt.value=Ye.shorttermTourComplete(kt.value),$t(),Nt.value=!1}function Ut(){kt.value=Ye.shorttermTourDismiss(kt.value),$t(),Nt.value=!1}return{currentPage:L,currentSubPage:c,shortDate:r,pools:g,poolLoading:v,poolError:P,ztBoardFilter:k,filteredZt:Re,clearBoardFilter:se,lhbRows:C,lhbLoading:q,lhbError:w,lhbReason:m,lhbPageRows:G,lhbPage:H,overview:ee,overviewLoading:te,overviewError:A,sectorType:z,sectorIndicator:X,sectorKeyword:J,sectorRows:re,filteredSectorRows:$e,sectorPageRows:N,sectorPage:F,sectorLoading:j,sectorError:D,sectorFlowSource:le,PAGE_SIZE:I,gotoSector:ft,review:K,reviewRunning:E,intradaySnapshots:d,intradayLoading:S,intradayCollecting:u,intradaySlots:ce,intradayMsg:Ve,slotClass:ze,intradayStatus:Ie,chatQuestion:O,chatAnswer:ae,chatLoading:Y,loadPools:qe,loadLhb:ie,loadOverview:B,loadSectorFlow:me,loadReview:Ue,runReview:Ge,sendChat:vt,loadIntraday:wt,collectSnapshot:Rt,refreshCurrent:It,ladderText:ye,fmtAmount:Ze,fmtPct:bt,riseFall:at,tagClass:lt,openStock:De,lhbInstitutionNetBuy:Ae,lhbHotMoneyCount:ct,sectorTopName:Je,sectorTopInflow:yt,sectorSource:_t,moneySource:$,promotion1to2:ne,cycleScore:Se,cycleTrend:Te,pct:tt,fmtCond:ht,verdictClass:rt,sessionStatusText:oe,sessionStatusClass:ke,shorttermTourVisible:Nt,shorttermTourState:kt,shorttermTourStep:At,shorttermTourProg:Vt,shorttermTourIsLast:Wt,shorttermTourNext:Zt,shorttermTourFinish:ua,shorttermTourSkip:Ut}}}})();(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(c,r,g,v,P){var l=g>0?g:1,T=typeof P=="number"&&P>=0?P:a,k=Math.max(0,v),C=Math.max(0,c),q=Math.max(0,r),w=Math.max(0,Math.floor(C/l)-T),n=Math.min(k,Math.ceil((C+q)/l)+T);return{startIndex:w,endIndex:n}}function p(c,r){return Math.max(0,c||0)*(r>0?r:0)}function t(c,r,g,v,P){var l=c||[],T=e(r,g,v,l.length,P),k=l.slice(T.startIndex,T.endIndex);return{visible:k,startIndex:T.startIndex,endIndex:T.endIndex,offsetY:T.startIndex*(v>0?v:1),totalHeight:p(l.length,v)}}function y(c,r){if(c){if(c.code!=null)return c.code;if(c.id!=null)return c.id;if(c.ts_code!=null)return c.ts_code}return r}function b(c,r,g){var v=c||[];if(!v.length)return r>0?r:1;for(var P=Math.min(g||50,v.length),l=0,T=0,k=0;k<P;k++){var C=v[k]&&v[k].rowHeight;typeof C=="number"&&C>0&&(l+=C,T++)}return T?l/T:r>0?r:1}function L(c,r,g,v,P){var l=e(c,r,g,v,P),T=Math.max(0,v);return T?(l.endIndex-l.startIndex)/T:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:p,sliceVisible:t,getRowKey:y,estimateDynamicRowHeight:b,renderedRatio:L}});(function(){const{ref:a,computed:e,onMounted:p,onBeforeUnmount:t}=Vue,y=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:y.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(b){const L=a(null),c=a(0),r=a(400),g=e(()=>(y.computeVisibleRange||function(i,m,H,I,G){const ee=H>0?H:1,te=G>=0?G:8,A=Math.max(0,I);return{startIndex:Math.max(0,Math.floor(i/ee)-te),endIndex:Math.min(A,Math.ceil((i+m)/ee)+te)}})(c.value,r.value,b.rowHeight,b.items.length,b.buffer)),v=e(()=>b.items.length*b.rowHeight),P=e(()=>g.value.startIndex),l=e(()=>g.value.endIndex),T=e(()=>b.items.slice(P.value,l.value));function k(){L.value&&(c.value=L.value.scrollTop)}function C(){L.value&&(r.value=L.value.clientHeight||400)}function q(n,i){return y.getRowKey?y.getRowKey(n,i):n&&n.code!=null?n.code:n&&n.id!=null?n.id:i}let w=null;return p(()=>{C(),L.value&&typeof ResizeObserver<"u"&&(w=new ResizeObserver(()=>C()),w.observe(L.value))}),t(()=>{w&&w.disconnect()}),{scrollEl:L,totalHeight:v,startIndex:P,endIndex:l,visibleItems:T,onScroll:k,keyOf:q}}}})();(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,p=60,t=500,y=10,b=88,L=350;function c(i,m,H,I,G){G=G||{};var ee=typeof G.threshold=="number"?G.threshold:a,te=typeof G.bias=="number"?G.bias:e,A=H-i,M=I-m;return Math.abs(A)<ee||Math.abs(A)<Math.abs(M)*te?"none":A<0?"left":"right"}function r(i,m,H){H=H||{};var I=typeof H.threshold=="number"?H.threshold:p;return m-i>=I}function g(i,m){m=m||{};var H=typeof m.threshold=="number"?m.threshold:t;return i>=H}var v=!1;function P(i,m){return i&&typeof i.closest=="function"?i.closest(m):null}function l(i){if(!i)return"";var m=i.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(m){var H=m.getAttribute&&m.getAttribute("data-copy-code");if(H)return H.trim();var I=(m.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(I)return I[0]}var G=i.getAttribute&&i.getAttribute("data-copy-code");return G?G.trim():""}function T(i){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(function(){return!0}).catch(function(){return k(i)}):Promise.resolve(k(i))}function k(i){try{var m=document.createElement("textarea");return m.value=i,m.style.position="fixed",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),!0}catch{return!1}}function C(i){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(i)}function q(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function w(){var i=null,m=null,H=null;function I(){m&&(m.timer&&clearTimeout(m.timer),m=null)}function G(X){H={el:X,until:Date.now()+L}}function ee(X){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(J){J!==X&&J.classList.remove("swipe-open")}),i&&i.el!==X&&(i=null)}function te(X){var J=X.touches&&X.touches[0];if(J){var re=P(X.target,".swipe-reveal");re&&(i={el:re,x:J.clientX,y:J.clientY,moved:!1},X.stopPropagation());var F=P(X.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");F&&(I(),m={el:F,x:J.clientX,y:J.clientY,timer:setTimeout(function(){var j=l(F);m=null,j&&(G(F),T(j).then(function(){q(),C("已复制代码 "+j)}))},t)})}}function A(X){if(i){var J=X.touches&&X.touches[0];if(J){var re=J.clientX-i.x,F=J.clientY-i.y;if(Math.abs(re)>8&&Math.abs(re)>Math.abs(F)*1.2){X.cancelable&&X.preventDefault(),i.moved=!0;var j=i.el.querySelector(".swipe-reveal-main")||i.el,D=Math.max(-b,Math.min(0,re));j.style.transition="none",j.style.transform="translateX("+D+"px)",X.stopPropagation()}if(m){var f=J.clientX-m.x,_=J.clientY-m.y;(Math.abs(f)>y||Math.abs(_)>y)&&I()}}}}function M(X){if(I(),!!i){var J=i.el,re=X.changedTouches&&X.changedTouches[0],F=i.x,j=i.y,D="none";re&&(D=c(F,j,re.clientX,re.clientY));var f=i.moved;i=null;var _=J.querySelector(".swipe-reveal-main")||J;_.style.transform="",_.style.transition="",D==="left"?(ee(J),J.classList.add("swipe-open"),G(J)):(D==="right"||f)&&J.classList.remove("swipe-open"),X.stopPropagation()}}function R(){I(),i=null}function z(X){if(H&&Date.now()<H.until){var J=H.el.contains(X.target)||X.target===H.el,re=X.target.closest&&X.target.closest(".swipe-reveal-actions");J&&!re&&(X.preventDefault(),X.stopPropagation(),H=null)}}document.addEventListener("touchstart",te,!0),document.addEventListener("touchmove",A,!0),document.addEventListener("touchend",M,!0),document.addEventListener("touchcancel",R,!0),document.addEventListener("click",z,!0)}function n(){v||typeof document>"u"||(v=!0,w())}return{judgeSwipe:c,judgePullToRefresh:r,judgeLongPress:g,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:p,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:y,REVEAL_WIDTH:b,initGestures:n,_codeFromRow:l}});(function(){const a={empty:{icon:"📭",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"⚠",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"📡",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function p(b){return a[b]||a.empty}function t(){const b=[];for(const L of e){const c=a[L];c.title||b.push(L+".title"),L!=="loading"&&!c.icon&&b.push(L+".icon"),typeof c.retry!="boolean"&&b.push(L+".retry"),typeof c.skeleton!="boolean"&&b.push(L+".skeleton")}return{ok:b.length===0,errors:b}}const y={VARIANTS:a,KEYS:e,resolve:p,validate:t};typeof window<"u"&&(window.QuantStatePanel=y),typeof Pe<"u"&&Pe.exports&&(Pe.exports=y)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(p){const t=a(()=>typeof e.resolve=="function"?e.resolve(p.type):{}),y=a(()=>p.icon||t.value.icon||""),b=a(()=>p.title||t.value.title||""),L=a(()=>p.desc||t.value.desc||""),c=a(()=>!!t.value.retry),r=a(()=>/^[a-z][a-z0-9-]*$/.test(String(y.value||"")));return{icon:y,title:b,desc:L,retryable:c,isIconName:r}}}})();(function(a,e){typeof Pe=="object"&&Pe.exports?Pe.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(i){return String(i||"").trim().toLowerCase()}function e(i,m){if(!i)return!0;const H=i.split(/\s+/).filter(Boolean);if(!H.length)return!0;const I=String(m||"").toLowerCase();return H.every(function(G){return I.indexOf(G)!==-1})}function p(){return{visible:!1,query:"",activeIndex:0}}function t(i,m){return m===void 0&&(m=!i.visible),i.visible=m,m&&(i.query="",i.activeIndex=0),i.visible}function y(i,m,H){const I=a(i);if(!m||!m.length)return[];const G=[];return m.forEach(function(ee){const te=e(I,ee.name)||e(I,ee.key),A=(ee.subPages||[]).filter(function(M){const R=H&&H[M]||M;return e(I,R)||e(I,M)});te&&G.push({type:"menu",menuKey:ee.key,subPage:ee.subPages&&ee.subPages[0]||"",label:ee.name,subLabel:"页面",icon:ee.icon||"file-text"}),A.forEach(function(M){G.push({type:"menu",menuKey:ee.key,subPage:M,label:H&&H[M]||M,subLabel:ee.name,icon:ee.icon||"file-text"})})}),G.slice(0,8)}function b(i,m){const H=a(i);return!m||!m.length?[]:m.filter(function(I){return!!(!H||e(H,I.label)||e(H,I.key)||I.keywords&&e(H,I.keywords))}).slice(0,8)}function L(i,m){const H=a(i);return!H||!m||!m.length?[]:m.filter(function(I){return e(H,I.code)||e(H,I.name)}).slice(0,8).map(function(I){return{type:"stock",code:I.code,name:I.name,label:I.name,subLabel:I.code,icon:"trending-up"}})}function c(i,m,H){const I=[],G=[];return H&&H.length&&(I.push({key:"stock",label:"股票",items:H}),G.push.apply(G,H)),i&&i.length&&(I.push({key:"menu",label:"菜单",items:i}),G.push.apply(G,i)),m&&m.length&&(I.push({key:"command",label:"指令",items:m}),G.push.apply(G,m)),{groups:I,flat:G}}function r(i,m,H){if(m<=0)return 0;const I=((i||0)+H)%m;return I<0?m-1:I}function g(i,m,H,I){const G=y(i,m,H).map(function(te){return{type:"menu",menuKey:te.menuKey,subPage:te.subPage,label:te.label,subLabel:te.subLabel,icon:te.icon,iconName:te.icon,value:te.icon+" "+te.label+" · "+te.subLabel}}),ee=b(i,I||[]).map(function(te){return{type:"command",key:te.key,label:te.label,icon:te.icon,iconName:te.icon,subLabel:"指令",value:te.icon+" "+te.label}});return G.concat(ee)}function v(i){return i?i.type==="menu"?{action:"menu",menuKey:i.menuKey,subPage:i.subPage}:i.type==="command"?{action:"command",key:i.key}:i.type==="sector"?{action:"sector",name:i.name}:i.type==="strategy"?{action:"strategy",id:i.id,name:i.name}:i.type==="stock"||i.code&&i.name?{action:"stock",code:i.code,name:i.name}:null:null}const P=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var l={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function T(i){if(!i||typeof i!="string")return null;var m=i.split("+").map(function(G){return G.trim()}).filter(Boolean);if(!m.length)return null;var H=m.pop().toLowerCase();if(!H)return null;var I={ctrl:!1,alt:!1,shift:!1,meta:!1};return m.forEach(function(G){var ee=G.toLowerCase();l.ctrl.indexOf(ee)!==-1?I.ctrl=!0:l.alt.indexOf(ee)!==-1?I.alt=!0:l.shift.indexOf(ee)!==-1?I.shift=!0:l.meta.indexOf(ee)!==-1&&(I.meta=!0)}),{ctrl:I.ctrl,alt:I.alt,shift:I.shift,meta:I.meta,key:H}}function k(i,m){if(!i||!m)return!1;var H=String(m.key||m.code||"").toLowerCase();return i.key!==H?!1:i.ctrl===!!m.ctrlKey&&i.alt===!!m.altKey&&i.shift===!!m.shiftKey&&i.meta===!!m.metaKey}function C(i){if(!i)return"";var m=[];return i.ctrl&&m.push("Ctrl"),i.alt&&m.push("Alt"),i.shift&&m.push("Shift"),i.meta&&m.push("Meta"),m.push(i.key.toUpperCase()),m.join("+")}function q(){var i={};return{register:function(m){if(!m||!m.key)throw new Error("命令 key 必填");if(i[m.key])throw new Error("命令重复注册: "+m.key);return i[m.key]=Object.assign({},m),m.key},list:function(){return Object.keys(i).map(function(m){return i[m]})},get:function(m){return i[m]||null},remove:function(m){delete i[m]},has:function(m){return!!i[m]},count:function(){return Object.keys(i).length}}}function w(){var i={},m={};return{register:function(H,I,G){var ee=T(H);if(!ee)throw new Error("无效快捷键: "+H);var te=C(ee);if(i[te])throw new Error("快捷键冲突: "+H);if(I!=null&&m[I]!==void 0)throw new Error("动作重复绑定: "+I);return i[te]={combo:H,action:I,description:G||"",parsed:ee},m[I]=te,te},resolve:function(H){for(var I in i)if(k(i[I].parsed,H))return i[I].action;return null},list:function(){return Object.keys(i).map(function(H){return i[H]})},unregister:function(H){var I=C(T(H));i[I]&&(delete m[i[I].action],delete i[I])},count:function(){return Object.keys(i).length}}}function n(){var i=w();return i.register("Ctrl+K","toggle-palette","打开命令面板"),i.register("F5","refresh","刷新当前页"),i.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),i.register("Ctrl+J","open-ai","打开 AI 问股"),i.register("Ctrl+D","open-today","今日一屏"),i.register("Ctrl+E","batch-eval","批量 AI 评估"),i.register("Ctrl+G","add-portfolio","加入组合"),i.register("Ctrl+H","open-eval-history","打开评估历史"),i.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),i}return{normalize:a,createPaletteState:p,toggleVisible:t,searchMenus:y,searchCommands:b,filterStocksLocal:L,mergeResults:c,moveIndex:r,buildSearchSuggestions:g,dispatchSearchSelection:v,DEFAULT_COMMANDS:P,parseKeyCombo:T,matchShortcut:k,canonicalCombo:C,createCommandRegistry:q,createShortcutRegistry:w,createDefaultShortcuts:n}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof Pe<"u"&&Pe.exports?Pe.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var p=e();typeof Pe=="object"&&Pe.exports&&(Pe.exports=p),a.QuantOnboarding=p})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],e=a.length,p=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=p.length;function y(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function b(){return p.slice()}function L(M){return M<0?0:M>=t?t-1:M}function c(M){return{stepIndex:M.stepIndex,completed:!!M.completed,dismissed:!!M.dismissed,updatedAt:M.updatedAt||0}}function r(M){return c(Object.assign({},M,{stepIndex:L((M.stepIndex||0)+1),updatedAt:Date.now()}))}function g(M){return c(Object.assign({},M,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function v(M){return c(Object.assign({},M,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function P(M){var R=Math.min(M&&M.stepIndex||0,t);return{done:R,total:t,pct:Math.round(R/t*100)}}function l(M){return!!(M&&!M.completed&&!M.dismissed)}function T(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function k(){return a.slice()}function C(){return e}function q(M){return M<0?0:M>=e?e-1:M}function w(M){return{stepIndex:M.stepIndex,completed:!!M.completed,dismissed:!!M.dismissed,updatedAt:M.updatedAt||0}}function n(M){return w(Object.assign({},M,{stepIndex:q((M.stepIndex||0)+1),updatedAt:Date.now()}))}function i(M){return w(Object.assign({},M,{stepIndex:q((M.stepIndex||0)-1),updatedAt:Date.now()}))}function m(M,R){return w(Object.assign({},M,{stepIndex:q(R),updatedAt:Date.now()}))}function H(M){return w(Object.assign({},M,{completed:!0,updatedAt:Date.now()}))}function I(M){return w(Object.assign({},M,{dismissed:!0,updatedAt:Date.now()}))}function G(M){return!!(M&&M.completed)}function ee(M){var R=Math.min(M&&M.stepIndex||0,e);return{done:R,total:e,pct:Math.round(R/e*100)}}function te(M){var R=M||T();return JSON.stringify({stepIndex:R.stepIndex,completed:!!R.completed,dismissed:!!R.dismissed,updatedAt:R.updatedAt||0})}function A(M){var R=T();if(!M||typeof M!="string")return R;try{var z=JSON.parse(M);if(!z||typeof z!="object")return R;var X=parseInt(z.stepIndex,10);return isNaN(X)?R:{stepIndex:q(X),completed:!!z.completed,dismissed:!!z.dismissed,updatedAt:z.updatedAt||0}}catch{return R}}return{ONBOARDING_STEPS:a,steps:k,stepCount:C,createOnboardingState:T,next:n,prev:i,jumpTo:m,complete:H,dismiss:I,isComplete:G,progress:ee,persistState:te,parseState:A,SHORTTERM_TOUR_STEPS:p,shorttermTourSteps:b,createShorttermTourState:y,shorttermTourNext:r,shorttermTourComplete:g,shorttermTourDismiss:v,shorttermTourProgress:P,shorttermTourShouldShow:l}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:p}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const y=a(!1),b=a(t.createOnboardingState()),L=e(function(){return t.steps()[b.value.stepIndex]}),c=e(function(){return t.progress(b.value)}),r=e(function(){return b.value.stepIndex>=t.stepCount()-1}),g=e(function(){return"onboarding.step."+L.value.key});function v(){const q=t.persistState(b.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:q}})}).then(function(w){return w.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",q)}catch{}})}function P(){b.value=t.next(b.value)}function l(){b.value=t.prev(b.value)}function T(){b.value=t.complete(b.value),v(),y.value=!1}function k(){b.value=t.dismiss(b.value),v(),y.value=!1}function C(){fetch("/api/user_config/preferences").then(function(q){return q.json()}).then(function(q){const w=q&&q.preferences&&q.preferences.onboarding_progress;return w&&(b.value=t.parseState(w)),w}).catch(function(){return null}).then(function(q){if(!q)try{const w=localStorage.getItem("qc_onboarding_progress");w&&(b.value=t.parseState(w))}catch{}!t.isComplete(b.value)&&!b.value.dismissed&&(y.value=!0)})}return p(C),{visible:y,st:b,step:L,prog:c,isLast:r,stepKey:g,next:P,prev:l,finish:T,skip:k}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"📭"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true">{{ icon }}</div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(e){try{const p=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(p)return p(e)||""}catch{}return e}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"⚠️"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true">{{ icon }}</div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(e){try{const p=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(p)return p(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:p,nextTick:t,inject:y,onMounted:b}=Vue,L=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const c=y("qcState");if(!c)return{};const r=a(""),g=e({get:()=>c.commandPaletteVisible.value,set:F=>{c.commandPaletteVisible.value=F}}),v=a(0),P=a([]),l=a(null),T=e(()=>{const F=(L.DEFAULT_COMMANDS||[]).map(function(D){return Object.assign({},D)});return Object.keys(c.themes.value||{}).forEach(function(D){const f=c.themes.value[D];F.push({key:"theme:"+D,label:"切换主题 · "+(f.name||D),icon:"palette",keywords:"theme 主题"})}),F});function k(F){return typeof F=="string"&&/^[a-z][a-z0-9-]*$/.test(F)}const C=e(()=>c.menus.value||[]);function q(){const F=window.__quantModules&&window.__quantModules.pinyin;if(!F)return[];const j=[];return(c.watchlist&&c.watchlist.value||[]).forEach(function(D){j.push({code:D.code,name:D.name})}),(c.aiHistory&&c.aiHistory.value||[]).forEach(function(D){D&&D.stock_code&&j.push({code:D.stock_code,name:D.stock_name||D.stock_code})}),j.push.apply(j,F.getExtraStocks()),F.buildStockIndex(j)}function w(F){const j=window.__quantModules&&window.__quantModules.pinyin;return j?j.searchStocksByQuery(F,q()).map(function(D){return{type:"stock",code:D.code,name:D.name,label:D.name,subLabel:D.code,icon:"trending-up"}}):[]}function n(){const F=[],j=window.__quantModules&&window.__quantModules.recent;j&&j.getRecentViewed().slice(0,5).forEach(function(f){F.push({type:"stock",code:f.code,name:f.name||f.code,label:f.name||f.code,subLabel:"最近查看 · "+f.code,icon:"trending-up"})});const D=(c.watchlist&&c.watchlist.value||[]).slice(0,8).map(function(f){return{type:"stock",code:f.code,name:f.name||f.code,label:f.name||f.code,subLabel:"我的自选 · "+f.code,icon:"trending-up"}});return F.concat(D)}const i=e(()=>{const F=r.value;if(!F)return L.mergeResults([],[],n());const j=L.searchMenus(F,C.value,c.subPageNames),D=L.searchCommands(F,T.value),f=P.value;return L.mergeResults(j,D,f)}),m=e(()=>i.value);function H(F){return m.value.flat[v.value]===F}function I(F){v.value=m.value.flat.indexOf(F)}function G(F){return(F.type||"")+":"+(F.code||F.menuKey||F.key||F.label)}let ee=null;function te(){const F=r.value.trim();if(F.length<1){P.value=[];return}ee&&clearTimeout(ee),ee=setTimeout(function(){const j=w(F);P.value=j,v.value=0,c.searchStocks(F,function(D){if(r.value.trim()!==F)return;const f=(D||[]).filter(function(K){return K&&K.code&&K.name}).map(function(K){return{type:"stock",code:K.code,name:K.name,label:K.name,subLabel:K.code,icon:"trending-up"}}),_={},le=[];j.forEach(function(K){_[K.code]||(_[K.code]=!0,le.push(K))}),f.forEach(function(K){_[K.code]||(_[K.code]=!0,le.push(K))}),P.value=le,v.value=0})},200)}function A(){v.value=L.moveIndex(v.value,m.value.flat.length,1)}function M(){v.value=L.moveIndex(v.value,m.value.flat.length,-1)}function R(){const F=m.value.flat[v.value];F&&z(F)}function z(F){c.commandPaletteVisible.value=!1,F.type==="menu"?c.navigateTo(F.menuKey,F.subPage):F.type==="stock"?c.showStockDetail(F.code,F.name):F.type==="command"&&X(F.key)}function X(F){if(F==="refresh"){const j=c.currentPage.value;j==="strategies"?c.loadDashboardData().catch(function(){}):j==="calendar"?c.refreshCalendarData().catch(function(){}):j==="ai"&&c.loadAiHistory().catch(function(){})}else F==="export"?c.exportCSV():F==="batch"?c.showBatchEvaluate.value=!0:F==="ai"?c.openAiFab():F==="sidebar"?c.toggleSidebar():F==="today"?c.navigateTo("strategies","overview"):F==="add-portfolio"?(c.currentPage.value="ai",c.currentSubPage.value="portfolio"):F==="open-system"?c.navigateTo("system","status"):F==="open-shortterm"?c.navigateTo("shortterm","overview"):F==="open-research"?c.navigateTo("research","overview"):F==="open-calendar"?c.navigateTo("calendar",""):F==="refresh-data-source"?c.navigateTo("system","datasource"):F.indexOf("theme:")===0&&c.changeTheme(F.slice(6))}p(g,function(F){F&&(r.value="",P.value=[],v.value=0,t(function(){l.value&&l.value.focus&&l.value.focus()}))}),p(r,te);function J(F){F==="toggle-palette"?c.commandPaletteVisible.value=!c.commandPaletteVisible.value:F==="toggle-sidebar"?c.toggleSidebar():F==="open-ai"?c.openAiFab():F==="refresh"?X("refresh"):F==="open-today"?X("today"):F==="batch-eval"?X("batch"):F==="add-portfolio"&&X("add-portfolio")}function re(F){if(!L.createDefaultShortcuts||!L.createShortcutRegistry)return;const D=L.createDefaultShortcuts().resolve({key:F.key,ctrlKey:F.ctrlKey,altKey:F.altKey,shiftKey:F.shiftKey,metaKey:F.metaKey});D&&(F.preventDefault(),J(D))}return b(function(){document.addEventListener("keydown",re)}),{visible:g,query:r,results:m,inputEl:l,sanitizeHtml:c.sanitizeHtml,isIconName:k,onDown:A,onUp:M,onEnter:R,execute:z,isActive:H,setActive:I,itemKey:G,onGlobalKeydown:re}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
                <div class="empty-state-icon-sm">{{ tourSteps[tourStep].icon }}</div>
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
                            <span class="color-el-danger" v-else-if="status==='error'">✕</span>
                            <span class="color-tertiary" v-else>⏸</span>
                            <span class="color-text-primary-flex1">
                                <!-- v3.15: 名称优先展示, 代码小字跟随 -->
                                <template v-if="batchResults[code] && batchResults[code].stock_name && batchResults[code].stock_name!==code">{{ batchResults[code].stock_name }}<span class="text-xs-tertiary"> ({{ code }})</span></template>
                                <template v-else>{{ code }}</template>
                            </span>
                            <span class="text-sm-bold" v-if="status==='success' && batchResults[code] && batchResults[code].result" :style="{color:batchResults[code].result.level_color||'var(--text-primary)'}">{{ fmtNum(batchResults[code].result.total_score) }}分</span>
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
    `,setup(){const e=a("qcState");if(!e)return{};const p=Vue.ref(0);let t=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,y=>{y?(p.value=0,t=setInterval(()=>{p.value++},1e3)):t&&(clearInterval(t),t=null)}),{...e,batchElapsed:p}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",template:`
        <el-dialog v-model="indexDetailVisible" title="指数详情分析" width="800px" class="kline-dialog">
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.MerrillDetailDialog={name:"qc-merrill-detail-dialog",template:`
        <el-dialog v-model="showMerrillDetail" custom-class="merrill-detail-dialog" :title="(merrillDetailData.name || '经济周期分析') + ' - 详细分析报告'" width="800px" class="merrill-detail-dialog">
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a,computed:e,ref:p,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",template:`
        <el-dialog v-model="stockDetailVisible" :title="t('detail.title')" width="800px" class="kline-dialog">
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
                                        <span class="text-xs-secondary" v-for="c in checklistItems" :key="c.label">{{ c.icon }} {{ c.label }}</span>
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
    `,setup(){const y=a("qcState");if(!y)return{};const b={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},L=e(()=>b[y.aiEvalStage.value]||""),c=e(()=>{const R=y.aiResult&&y.aiResult.value&&y.aiResult.value.result&&y.aiResult.value.result.level;return R?R==="强烈推荐"||R==="推荐"?"var(--el-success)":R==="谨慎推荐"?"var(--el-warning)":R==="中性"||R==="观望"?"var(--text-secondary)":R==="评估失败"||R==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function r(R){const z=document.createElement("textarea");z.value=R,z.style.position="fixed",z.style.opacity="0",document.body.appendChild(z),z.select(),document.execCommand("copy"),document.body.removeChild(z)}async function g(){const R=y.aiResult&&y.aiResult.value;if(!R||!R.result)return;const z=R.result.dimensions||{},X=Object.entries(z).map(([re,F])=>`${re} ${Math.round(F)}分`).join(`
`),J=`【AI 智能评估】${R.result.level||""} ${R.result.total_score!=null?R.result.total_score:"—"}分
模型：${R.model_used||R.result.provider||"—"}

${R.result.detailed_report||""}

九维度评分：
${X||"无"}`;try{await navigator.clipboard.writeText(J),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{r(J),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const v=p(!1),P=p(!1),l=p(null),T=p([]),k={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function C(R){return k[R]||"factor-sem-none"}async function q(){const R=y.stockDetail.value&&y.stockDetail.value.stock;if(R){v.value=!0,P.value=!1,T.value=[],l.value=null;try{const z=y.selectedDate.value?`?date=${y.selectedDate.value}`:"",X=await fetch(`/api/calendar/stock/${R}/factors${z}`).then(j=>j.json()),J=X&&Array.isArray(X.factors)?X.factors:[],re=[],F={};J.forEach(j=>{F[j.category]||(F[j.category]={category:j.category,items:[]},re.push(F[j.category])),F[j.category].items.push(j)}),T.value=re,l.value=X&&X.summary||null}catch{P.value=!0}finally{v.value=!1}}}t(y.stockDetailTab,R=>{R==="factor"&&y.stockDetail.value&&y.stockDetailVisible.value&&(q(),n())});const w=p(null);async function n(){try{const R=await fetch("/api/market/factor-ic").then(z=>z.json());w.value=R&&R.success&&R.data?R.data:{}}catch{w.value={}}}function i(R){if(!R||!R.n5)return"—";const z=R.n5.icir!=null?"ICIR "+R.n5.icir:"ICIR —";return R.n5.grade+" ("+z+")"}const m=p(!1),H=p(!1),I=p([]),G=p([]);function ee(R){if(R==null)return"—";const z=Number(R);return Number.isNaN(z)?"—":Math.abs(z)>=1e8?(z/1e8).toFixed(2)+"亿":Math.abs(z)>=1e4?(z/1e4).toFixed(1)+"万":String(z)}async function te(){const R=y.stockDetail&&y.stockDetail.value&&y.stockDetail.value.stock;if(R){m.value=!0,H.value=!1;try{const z=await fetch("/api/market/performance/"+encodeURIComponent(R)).then(X=>X.json());z&&z.success?(I.value=z.forecast||[],G.value=z.express||[]):H.value=!0}catch{H.value=!0}finally{m.value=!1}}}t(y.stockDetailTab,R=>{R==="performance"&&te()});const A=p(null);async function M(){const R=y.stockDetail&&y.stockDetail.value&&y.stockDetail.value.stock;if(!R){A.value=null;return}try{const z=await fetch("/api/focus/stock/"+encodeURIComponent(R)+"/pool").then(X=>X.json());A.value=z&&z.success&&z.data?z.data:null}catch{A.value=null}}return t(()=>y.stockDetail&&y.stockDetail.value&&y.stockDetail.value.stock,R=>{R&&y.stockDetailVisible.value?M():A.value=null}),t(()=>y.stockDetailVisible.value,R=>{R?M():A.value=null}),{...y,aiStageText:L,levelRingColor:c,copyAiReport:g,factorLoading:v,factorError:P,factorSummary:l,factorGroups:T,factorSemClass:C,loadFactorPanel:q,factorIc:w,loadFactorIc:n,factorIcGrade:i,perfLoading:m,perfError:H,perfForecast:I,perfExpress:G,fmtY:ee,loadPerformance:te,poolInfo:A,loadPoolInfo:M}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
                      @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">{{ watchState.icon }}</span>
                <span v-if="evaluatedCodes.has(item.stock_code)" title="已AI评估" class="history-flag"><qc-icon name="bot" :size="14" /></span>
                <span v-if="klineLoadedCodes.has(item.stock_code)" title="已加载K线" class="history-flag"><qc-icon name="trending-up" :size="14" /></span>
              </template>
            </div>
            <span v-if="type === 'history'" class="score-badge-small" :style="{background: item.result.level_color + '20', color: item.result.level_color}">
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
    `,setup(p){const t=e("qcState");if(!t)return{};const y=a(()=>p.type==="history"?t.selectedHistoryIds.value.includes(p.item.id):t.selectedChatIds.value.includes(p.item.id)),b=a(()=>{const k=t.watchlistCodes.value.has(p.item.stock_code);return{icon:k?"⭐":"☆",label:k?"取消收藏":"加入收藏"}}),L=a(()=>p.type==="history"?"bot":"message-circle"),c=a(()=>{var k;return p.type==="history"?((k=p.item.result)==null?void 0:k.provider)||"":p.item.first_msg||""}),r=a(()=>{var k,C;return`${((C=(k=p.item.result)==null?void 0:k.dimensions)==null?void 0:C.length)||9}维度分析`}),g=a(()=>{var C,q;const k=p.type==="history"?p.item.evaluate_time:p.item.created_at||"";return k?p.timeFormat==="datetime"?p.type==="history"?`${k.split("T")[0]} ${(k.split("T")[1]||"").split(".")[0]}`:`${k.split("T")[0]} ${((C=k.split("T")[1])==null?void 0:C.substring(0,5))||""}`:p.type==="history"?(k.split("T")[1]||"").split(".")[0]||k:((q=k.split("T")[1])==null?void 0:q.substring(0,5))||"":""});function v(){p.type==="history"?t.toggleSelectHistory(p.item.id):t.toggleSelectChat(p.item.id)}function P(){p.type==="history"?t.viewAiResult(p.item):t.viewChatSession(p.item)}function l(){p.type==="history"?t.deleteSingleHistory(p.item.id):t.deleteChatSession(p.item.id)}function T(k,C){t.toggleWatchlist(k,C)}return{isSelected:y,watchState:b,providerIcon:L,providerText:c,dimsText:r,timeText:g,toggleSelect:v,view:P,remove:l,toggleWatchlist:T,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes}}}})();(function(){const{ref:a,computed:e,onMounted:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const y={买入:"🟢",持有:"🟡",观望:"⚪",减仓:"🟠",卖出:"🔴"},b=["买入","持有","观望","减仓","卖出"],L={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},c={强烈推荐:"🔥",推荐:"🟢",谨慎推荐:"🟡",中性:"⚪",观望:"🔵"},r={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},g=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],v={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},P=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function l(k){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(k).then(w=>w.json?w.json():w)}function T(){const k=new Date,C=q=>q<10?"0"+q:""+q;return k.getFullYear()+"-"+C(k.getMonth()+1)+"-"+C(k.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
                   :title="EMOJI[a] + ' ' + a + ': ' + (results.actions[a] || 0)"></div>
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
            <span class="card-title-hint">时段: {{ sessionLabel }} · 点击行展开详情</span>
          </div>
          <div v-if="loading" class="color-secondary">加载中…</div>
          <div v-else-if="results.rows.length === 0" class="color-secondary">
            该日期/时段暂无评估结果（多时点评估由调度执行, 盘前 09:00 / 盘后 20:00 必做）
          </div>
          <div v-else>
            <!-- V5.4.2 (FR): 按推荐档位归类 (强烈推荐→观望), 组内评分降序 — 后端 results.groups 已就绪 -->
            <template v-for="(rows, lv) in displayGroups" :key="lv">
              <div class="focus-tier-header">
                <span class="focus-tier-emoji"><span class="qc-status-dot" :class="TIER_DOT[lv] || 'is-info'"></span></span>
                <span class="focus-tier-name">{{ lv }}</span>
                <span class="color-secondary">({{ rows.length }})</span>
              </div>
              <div v-for="row in rows" :key="row.stock_code" class="focus-row"
                :class="{ 'focus-row-expanded': expanded.includes(row.stock_code) }"
                @click="toggle(row.stock_code)" tabindex="0" role="button"
                @keydown.enter.prevent="toggle(row.stock_code)">
                <span class="focus-row-emoji"><span class="qc-status-dot" :class="ACTION_DOT[row.action] || 'is-info'"></span></span>
                <span class="focus-row-name">{{ row.stock_name }}
                  <span class="color-secondary">({{ row.stock_code }})</span>
                  <!-- V5.4.2 (FR): 入池状态徽标 — 新入池/在池/已出池 + 自选/持仓 -->
                  <span v-if="poolStatus[row.stock_code]" class="focus-row-badges">
                    <el-tag v-if="poolStatus[row.stock_code].source === 'both' || poolStatus[row.stock_code].source === 'watchlist'"
                      size="small" type="warning" effect="light" class="focus-badge"><qc-icon name="star" :size="14" /> 自选</el-tag>
                    <el-tag v-if="poolStatus[row.stock_code].pool_state === 'new_pool'"
                      size="small" type="success" effect="light" class="focus-badge">🆕 新入池</el-tag>
                    <el-tag v-else-if="poolStatus[row.stock_code].pool_state === 'in_pool'"
                      size="small" type="primary" effect="light" class="focus-badge">📍 在池</el-tag>
                    <el-tag v-else-if="poolStatus[row.stock_code].pool_state === 'exited'"
                      size="small" type="warning" effect="light" class="focus-badge">🚪 已出池</el-tag>
                    <el-tag v-if="poolStatus[row.stock_code].holding" size="small" type="danger" effect="light" class="focus-badge">持仓</el-tag>
                  </span>
                </span>
                <el-tag :type="tagType(row.action)" size="small">{{ row.action }}</el-tag>
                <span class="focus-row-score">评分 {{ fmtScore(row.total_score) }}</span>
                <span class="focus-row-dir">{{ row.direction || '震荡' }}</span>
                <!-- V5.4.1 (R3): K线详情 → 图表图标按钮 -->
                <el-button size="small" circle text type="primary" class="focus-row-open"
                  @click.stop="openStockDetail(row.stock_code)"
                  :title="'打开 ' + row.stock_code + ' 详情'"><qc-icon name="trending-up" :size="14" /></el-button>
                <span class="focus-row-toggle">{{ expanded.includes(row.stock_code) ? '▲' : '▼' }}</span>
                <div v-if="expanded.includes(row.stock_code)" class="focus-detail">
                  <div class="focus-detail-line">评估来源: {{ row.model_provider || '—' }} / {{ row.model_used || '—' }}
                    <span v-if="row.model_provider === 'rule'" class="color-secondary">（规则快评降级）</span>
                  </div>
                  <div class="focus-detail-line" v-if="detailOf(row).level">评级: {{ detailOf(row).level }}</div>
                  <div class="focus-detail-line" v-if="detailOf(row).data_quality_note">数据时效: {{ detailOf(row).data_quality_note }}</div>
                  <div class="focus-detail-line" v-if="detailOf(row).sniper_points">买卖点参考: {{ detailOf(row).sniper_points }}</div>
                  <div class="focus-detail-line" v-if="detailOf(row).signal_attribution">信号归因: {{ detailOf(row).signal_attribution }}</div>
                  <!-- V5.4.0 (FR-5.4.9): 入池历史 -->
                  <div class="focus-detail-line" v-if="poolStatus[row.stock_code] && poolStatus[row.stock_code].pool_history">
                    <span class="color-secondary">入池:</span>
                    <template v-if="poolStatus[row.stock_code].pool_history.first_appear">
                      首入 {{ poolStatus[row.stock_code].pool_history.first_appear }} · 最近在池 {{ poolStatus[row.stock_code].pool_history.last_appear }}
                      <span v-if="poolStatus[row.stock_code].pool_state === 'exited'" class="color-secondary"> · 已出池</span>
                      <span v-else-if="poolStatus[row.stock_code].pool_state === 'in_pool'" class="color-secondary"> · 当前在池</span>
                      <span v-if="poolStatus[row.stock_code].pool_history.pool_entries.length > 1" class="color-secondary">
                        · {{ poolStatus[row.stock_code].pool_history.pool_entries.length }} 段
                      </span>
                    </template>
                    <span v-else class="color-secondary">从未入池</span>
                  </div>
                </div>
              </div>
            </template>
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
      </div>`,setup(){const k=t("qcState"),C=a(T()),q=a("after_close"),w=a({rows:[],actions:{},total:0,groups:{}}),n=a({sessions:{},total:0}),i=a(null),m=a(!1),H=a(""),I=a(!1),G=a([]),ee=a(""),te=a(null),A={},M=a({});let R=0;const z=a(null),X=e(function(){const h=w.value&&w.value.groups||{};return Object.keys(h).length?h:w.value&&w.value.rows&&w.value.rows.length?{全部:w.value.rows}:{}}),J=e(function(){const h=z.value;return!h||!h.date||h.date!==C.value?"":"已加载最近一次评估: "+h.date+" · "+(v[h.session]||h.session)}),re=e(function(){const h=w.value&&w.value.base_date;return h?h===C.value?"评分范围: "+h+" 收盘池 + 自选":"评分范围: "+h+" 收盘池(前一交易日算好) + 自选":""});function F(h){if(h==null)return"—";const Z=Number(h);return Z===Math.floor(Z)?String(Z):Z.toFixed(1)}function j(h){const Z=w.value.total||0,fe=(w.value.actions||{})[h]||0;if(!Z)return"0%";const de=fe/Z*100;return de>0&&de<4?"4%":de.toFixed(1)+"%"}function D(h){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[h]||"info"}function f(h){const Z=i.value&&i.value.overall&&i.value.overall[h]||null;return!Z||Z.total===0||Z.rate===null||Z.rate===void 0?"info":Z.rate>=60?"success":Z.rate>=40?"warning":"danger"}function _(h){const Z=i.value&&i.value.overall&&i.value.overall[h]||null;return!Z||Z.total===0||Z.rate===null||Z.rate===void 0?"样本不足":Z.rate.toFixed(1)+"% ("+Z.total+" 样本)"}function le(){return v[q.value]||q.value}function K(h){const Z=G.value.indexOf(h);Z>=0?G.value.splice(Z,1):G.value.push(h)}function E(h){if(!h||!h.raw_json)return{};if(A[h.stock_code+h.session+h.trade_date])return A[h.stock_code+h.session+h.trade_date];let Z={};try{Z=JSON.parse(h.raw_json)||{}}catch{Z={}}return A[h.stock_code+h.session+h.trade_date]=Z,Z}async function d(){try{const h=await l("/api/focus/latest"),Z=h&&h.success&&h.data;Z&&Z.date&&(z.value=Z,C.value=Z.date,Z.session&&(q.value=Z.session))}catch(h){console.warn("[focus] 最近一次评估解析失败:",h)}}async function S(){I.value=!0;try{const h=await l("/api/focus/results?date="+C.value+"&session="+q.value);w.value=h&&h.success&&h.data||{rows:[],actions:{},total:0,groups:{}},u((w.value.rows||[]).map(function(Z){return Z.stock_code}))}catch(h){console.warn("[focus] 结果加载失败:",h),w.value={rows:[],actions:{},total:0,groups:{}}}finally{I.value=!1}}async function u(h){const Z=M.value||{},fe=(h||[]).filter(function(Ne){return Ne&&!Z[Ne]});if(!fe.length)return;const de=++R,Ce=fe.map(function(Ne){return l("/api/focus/stock/"+encodeURIComponent(Ne)+"/pool?date="+C.value).then(function(xe){xe&&xe.success&&xe.data?Z[Ne]=xe.data:Z[Ne]={stock_code:Ne,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){Z[Ne]={stock_code:Ne,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Ce)}catch{}de===R&&(M.value=Object.assign({},Z))}function O(h){const Z=k&&k.showStockDetail;if(typeof Z=="function"){Z(h);return}const de=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;de&&de.info("请从其他页面打开股票详情: "+h)}async function ae(){try{const h=await l("/api/focus/history?date="+C.value);n.value=h&&h.success&&h.data||{sessions:{},total:0}}catch(h){console.warn("[focus] 历史加载失败:",h),n.value={sessions:{},total:0}}}async function Y(){m.value=!0;try{const h=await l("/api/ai/track");h&&h.success&&h.data?(i.value=h.data,H.value=(h.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):i.value=null}catch(h){console.warn("[focus] 效果块加载失败:",h),i.value=null}finally{m.value=!1}}async function Q(){const h=(ee.value||"").trim();if(h){te.value=null;try{const Z=await l("/api/focus/stock/"+encodeURIComponent(h));te.value=Z&&Z.success&&Z.data&&Z.data.rows||[]}catch(Z){console.warn("[focus] 单股历史加载失败:",Z),te.value=[]}}}async function x(){await S(),await ae(),await Y()}return p(async function(){await d(),await x()}),{curDate:C,session:q,results:w,history:n,track:i,trackLoading:m,trackNote:H,loading:I,expanded:G,stockCode:ee,stockHistory:te,SESSIONS:g,ACTION_ORDER:b,TRACK_WINDOWS:P,EMOJI:y,ACTION_DOT:L,TIER_EMOJI:c,TIER_DOT:r,SESSION_LABELS:v,displayGroups:X,latestNote:J,baseNote:re,sessionLabel:le,fmtScore:F,tagType:D,rateTagType:f,fmtRate:_,toggle:K,detailOf:E,loadResults:S,loadHistory:ae,loadTrack:Y,loadStockHistory:Q,loadAll:x,poolStatus:M,openStockDetail:O,actionPct:j}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:p}=Vue,{currentView:t,statusFilter:y,dashboardData:b,loadHealthMetrics:L,getLoadDashboardData:c,getLastRefreshTime:r,getFetchPoolSignals:g}=a,v=e(!1),P=e(""),l=new Map,T=e([]),k=e(""),C=e(""),q=e([]),w=e(""),n=window.__quantModules.core||{},i=typeof n.createTtlCache=="function"?n.createTtlCache(15e3):null;let m=0;function H(){const z=Date.now();z-m<5e3||(m=z,ElementPlus.ElMessage.success("有新数据，已更新"))}function I(z,X,J,re){!i||!X||typeof n.silentRefresh!="function"||n.silentRefresh({cache:i,key:X,fetchFn:async()=>{const F=await fetch(z);if(!F.ok)throw new Error("HTTP "+F.status);const j=await F.json();return J?J(j):j},ttl:i.defaultTtl,apply:re,onChanged:H,onError:()=>{}})}const G=new Set;async function ee(){var z;try{const J=await(await fetch("/api/dates")).json();T.value=((z=J.data)==null?void 0:z.dates)||J.dates||[],T.value.length>0&&(k.value=T.value[T.value.length-1]),C.value=new Date().toLocaleTimeString()}catch(X){console.error(X)}}async function te(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),C.value="刷新中...",l.clear(),await ee(),await M(),C.value=new Date().toLocaleTimeString()}catch(z){console.error("数据刷新失败",z)}}function A(){if(!k.value)return;const X="/api/view/"+(t.value||"day")+"/"+k.value+"?status="+(y.value||"all")+"&format=csv";window.open(X,"_blank")}async function M(){if(!k.value)return;const z=`${t.value}_${k.value}`;if(G.has(z))return;G.add(z);const X=`/api/view/${t.value}/${k.value}?status=all`,J=i&&typeof n.makeCacheKey=="function"?n.makeCacheKey("GET",`/api/view/${t.value}/${k.value}`,{status:"all"}):null,re=(D,f)=>{q.value=D,w.value=f||"",l.set(z,{stocks:D,note:f||""})},F=D=>{re(D&&D.stocks||[],D&&D.note||"")};if(l.has(z)){F(l.get(z)),I(X,J,D=>D,F),G.delete(z);return}const j=J&&i?i.get(J):void 0;if(j!==void 0){F(j),I(X,J,D=>D,F),G.delete(z);return}v.value=!0,P.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const f=await(await fetch(X)).json(),_=f.stocks||[];re(_,f.note||""),i&&J&&i.set(J,{stocks:_,note:f.note||""})}catch{try{const _=await(await fetch(`/api/calendar/${k.value}/consensus`)).json();q.value=(_.consensus||[]).map(le=>({...le,code:le.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{v.value=!1}g(),G.delete(z)}async function R(){const z=i&&typeof n.makeCacheKey=="function"?n.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(i){const X=i.get(z);if(X!==void 0){b.value=X,L().catch(()=>{}),I("/api/dashboard",z,J=>J.data||J,J=>{b.value=J,r().value=Date.now()});return}}await c()(),L().catch(()=>{}),i&&i.set(z,b.value)}return{loading:v,loadingView:P,viewCache:l,dates:T,selectedDate:k,lastLoadTime:C,consensus:q,viewNote:w,loadDates:ee,refreshCalendarData:te,exportCSV:A,loadConsensusData:M,loadDashboardCached:R}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:p,loadIndexKline:t,rememberDialogTrigger:y,menus:b,currentPage:L,currentSubPage:c,stockDetail:r,selectedDate:g}=a,v=ref({indices:[],market_sentiment:null});let P=null;const l=ref(!1),T=ref(null),k=ref(null),C=ref(!1);function q(){window.__quantModules.charts.disposeKline("stockKlineChart")}const w=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{w.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const n=ref(!1),i=ref(null),m=ref(!1),H=ref(0),I=ref(0);async function G(){try{const f=await(await fetch("/api/market/overview")).json();v.value=f,ee(f)}catch(D){console.error("获取市场行情失败:",D)}}function ee(D){P&&clearInterval(P),D&&D.in_trading_hours&&(P=setInterval(G,6e5))}function te(D){y(),T.value=D,k.value=null,p.value="daily",A(D.code),window.__quantModules.charts.disposeKline("indexKlineChart"),l.value=!0,setTimeout(async()=>{await t("daily")},500)}async function A(D){try{const _=await(await fetch("/api/ai/index-eval/"+D)).json();_.success&&_.data&&(k.value=_.data)}catch(f){console.warn("[getIndexAiScore] cache check failed:",f)}}async function M(){if(T.value){C.value=!0;try{const f=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:T.value.code,index_name:T.value.name,current_price:T.value.close,pct_chg:T.value.pct_chg})})).json();f.success?k.value=f.data:ElementPlus.ElMessage.error(f.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{C.value=!1}}}function R(D){window.__quantModules.charts.zoomKline("stockKlineChart",D)}function z(){m.value=!0,setTimeout(()=>{m.value=!1},600)}function X(D,f){if(D===f){z();return}const _=800,le=performance.now(),K=f-D;n.value=!0,i.value={value:K,dir:K>0?"up":"down"},m.value=!0,setTimeout(()=>{m.value=!1},600),setTimeout(()=>{i.value=null},2300);function E(d){const S=d-le,u=Math.min(S/_,1),O=1-Math.pow(1-u,3),ae=Math.round(D+K*O);r.value&&r.value.score_data&&(r.value.score_data.score=ae),u<1?requestAnimationFrame(E):(r.value&&r.value.score_data&&(r.value.score_data.score=f),n.value=!1)}requestAnimationFrame(E)}function J(){if(!r.value||!r.value.score_data)return;const D=r.value.score_data.score;if(D==null)return;const f=600,_=performance.now();m.value=!0,setTimeout(()=>{m.value=!1},600);function le(K){const E=Math.min((K-_)/f,1),d=1-Math.pow(1-E,3),S=Math.round(D*d);r.value&&r.value.score_data&&(r.value.score_data.score=S),E<1?requestAnimationFrame(le):r.value&&r.value.score_data&&(r.value.score_data.score=D)}requestAnimationFrame(le)}async function re(){var _;if(!r.value||!r.value.stock)return;const D=r.value.stock,f=(_=r.value.score_data)==null?void 0:_.score;try{const le=new Date().toISOString().split("T")[0],K=g.value||le,d=await(await fetch(`/api/calendar/stock/${encodeURIComponent(D)}/score?date=${K}`)).json();if(d.success&&d.score_data){const S=d.score_data.score;r.value&&(r.value.score_data=d.score_data),f!=null&&S!==f?X(f,S):z()}else z()}catch(le){console.warn("[refreshStockScore] failed:",le)}}function F(D){w.value&&(H.value=D.touches[0].clientX,I.value=D.touches[0].clientY)}function j(D){if(!w.value)return;const f=H.value-D.changedTouches[0].clientX,_=I.value-D.changedTouches[0].clientY;if(Math.abs(f)>Math.abs(_)&&Math.abs(f)>80){const le=b.value.map(function(E){return E.key}),K=le.indexOf(L.value);if(f>0&&K<le.length-1){const E=le[K+1],d=window.__quantGoPage;d?d(E,""):(L.value=E,c.value="")}else if(f<0&&K>0){const E=le[K-1],d=window.__quantGoPage;d?d(E,""):(L.value=E,c.value="")}}}return{marketData:v,marketRefreshTimer:P,fetchMarketData:G,indexDetailVisible:l,indexDetail:T,indexAiResult:k,indexAiLoading:C,showIndexDetail:te,loadCachedIndexEval:A,doIndexAiEvaluate:M,disposeStockKline:q,isMobile:w,zoomKlineRange:R,scoreAnimating:n,scoreDelta:i,scorePulse:m,triggerScorePulse:z,animateScoreChange:X,animateScoreEntrance:J,refreshStockScore:re,touchStartX:H,touchStartY:I,onTouchStart:F,onTouchEnd:j}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:p,currentSubPage:t}=a,y=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),b=ref("idle"),L=ref("");async function c(){if(!y.value.webhook_url){L.value="请先输入Webhook地址";return}b.value="testing",L.value="";try{const Q=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:y.value.webhook_url})})).json();Q.success||Q.status==="ok"?(L.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(L.value=Q.message||"测试失败",ElementPlus.ElMessage.error(L.value))}catch{L.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}b.value="idle"}const r=Vue.ref(!1);async function g(){r.value=!0;try{const Q=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{r.value=!1}}const v=ref(!1);function P(){e("ai","chat_history"),v.value=!0,Vue.nextTick(()=>{const Y=document.querySelector('input[placeholder*="输入问题"]');Y&&Y.focus()})}const l=ref([]),T=ref({});async function k(){try{const Q=await(await fetch("/api/ai/recommend-strategies")).json();Q.success&&(l.value=Q.recommendations||[])}catch(Y){console.warn("[loadStrategyRecommendations] failed:",Y)}}async function C(){try{const Q=await(await fetch("/api/ai/usage-stats")).json();Q.success&&(T.value=Q)}catch(Y){console.warn("loadAiUsage failed:",Y)}}const q=ref({}),w=ref([]),n=ref(7);async function i(){try{const Q=await(await fetch("/api/system/monitor")).json();Q.success&&(q.value=Q)}catch(Y){console.warn("loadSysMonitor failed:",Y)}}const m=ref({});async function H(){try{const Q=await(await fetch("/api/system/health-detail")).json();Q.success&&(m.value=Q)}catch(Y){console.warn("loadHealthDetail failed:",Y)}}async function I(){try{const Q=await(await fetch(`/api/analytics/rank?days=${n.value}`)).json();Q.success&&(w.value=Q.rank||[])}catch(Y){console.warn("loadAnalytics failed:",Y)}}const G=ref(!1);async function ee(){if(!G.value){G.value=!0;try{const Q=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return Q&&Q.success?Q.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${Q.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${Q.date}）`):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"生成复盘失败"),H(),Q}catch(Y){ElementPlus.ElMessage.error("生成复盘失败: "+(Y.message||""))}finally{G.value=!1}}}const te=ref(null),A=ref(!1);async function M(){try{const Q=await(await fetch("/api/ai/fact-check/latest")).json();te.value=Q&&Q.success&&Q.data||null}catch(Y){console.warn("loadFactCheck failed:",Y)}}async function R(){if(!A.value){A.value=!0;try{const Q=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return Q&&Q.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${Q.data.pass_rate!=null?Q.data.pass_rate+"%":"--"} (${Q.data.checked} 个数字)`),M()):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"事实护栏抽查失败"),Q}catch(Y){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Y.message||""))}finally{A.value=!1}}}const z=ref([]),X=ref(!1);async function J(){try{const Q=await(await fetch("/api/backup/list")).json();Q.success&&(z.value=Q.backups||[])}catch(Y){console.error("加载备份列表失败",Y)}}async function re(){X.value=!0;try{const Q=await(await fetch("/api/backup/create",{method:"POST"})).json();Q.success?(ElementPlus.ElMessage.success(Q.message||"备份成功"),J()):ElementPlus.ElMessage.error(Q.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{X.value=!1}}const F=ref(""),j=ref("");async function D(Y){F.value=Y,j.value="";try{const Q=window.__quantModules&&window.__quantModules.core||{},x=typeof Q.authHeaders=="function"?Q.authHeaders():{},h=await fetch("/api/reports/export?format="+encodeURIComponent(Y),{headers:x});if(!h.ok)throw new Error("HTTP "+h.status);const Z=await h.blob(),fe=URL.createObjectURL(Z),de=document.createElement("a");de.href=fe;const Ce=new Date().toISOString().slice(0,10);de.download="report_"+Ce+"."+Y,document.body.appendChild(de),de.click(),document.body.removeChild(de),URL.revokeObjectURL(fe),j.value="报表已导出 ("+Y.toUpperCase()+")"}catch(Q){j.value="报表导出失败: "+(Q.message||Q)}finally{F.value=""}}async function f(Y){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Y} 恢复吗？当前数据将被覆盖。`,"⚠ 恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(Q){console.warn("[restoreBackup] confirm cancelled:",Q);return}try{const x=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y})})).json();x.success?(ElementPlus.ElMessage.success(x.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(x.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const _=ref(!1),le=ref(0),K=[{icon:"🗓",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"🤖",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 🤖 按钮可随时快速问股。"},{icon:"📮",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function E(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{le.value=0,_.value=!0},800)}function d(){_.value=!1,localStorage.setItem("quant_tour_done","1")}function S(){_.value=!1,localStorage.setItem("quant_tour_done","1")}const u=ref(""),O=ref(!1);async function ae(){if(!u.value||!u.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}O.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:u.value.trim(),page:p.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(u.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{O.value=!1}}return{feishuConfig:y,feishuTestStatus:b,feishuTestMessage:L,feishuSaving:r,testFeishuWebhook:c,saveFeishuConfig:g,aiFabHidden:v,openAiFab:P,strategyRecommendations:l,aiUsage:T,loadStrategyRecommendations:k,loadAiUsage:C,sysMonitor:q,analyticsRank:w,analyticsDays:n,loadSysMonitor:i,loadAnalytics:I,healthDetail:m,loadHealthDetail:H,reviewTriggering:G,triggerMarketReview:ee,factCheck:te,factCheckRunning:A,loadFactCheck:M,triggerFactCheck:R,backups:z,backupCreating:X,loadBackups:J,createBackup:re,restoreBackup:f,reportExporting:F,reportExportMsg:j,exportReport:D,tourVisible:_,tourStep:le,tourSteps:K,maybeShowTour:E,skipTour:d,finishTour:S,feedbackText:u,feedbackSubmitting:O,submitFeedback:ae}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:p,selectedDate:t,dates:y,loadConsensusData:b,hapticFeedback:L}=a,c=e(()=>({day:"天",week:"周",month:"月",year:"年"})[p.value]||"天"),r=e(()=>({day:"date",week:"week",month:"month",year:"year"})[p.value]||"date"),g=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[p.value]||"YYYY-MM-DD"),v=e(()=>!t.value||!y.value||y.value.length===0?!1:t.value>y.value[0]),P=e(()=>!t.value||!y.value||y.value.length===0?!1:t.value<y.value[y.value.length-1]);function l(q){L("light"),p.value=q;let w=t.value||y.value[y.value.length-1];if(q==="year"){const n=w.substring(0,4),i=y.value.find(m=>m.startsWith(n));t.value=i||w}else if(q==="month"){const n=w.substring(0,7),i=y.value.find(m=>m.startsWith(n));t.value=i||w}setTimeout(b,50)}function T(q){L("light");const w=t.value,n=y.value,i=n.indexOf(w);if(i<0)return;let m=1;p.value==="week"&&(m=5),p.value==="month"&&(m=22),p.value==="year"&&(m=250);const H=i+q*m;if(H>=0&&H<n.length){const I=n[H];if(p.value==="month"){const G=I.substring(0,7),ee=n.find(te=>te.startsWith(G));t.value=ee||I}else if(p.value==="year"){const G=I.substring(0,4),ee=n.find(te=>te.startsWith(G));t.value=ee||I}else t.value=I;b()}}function k(q){if(!y.value||y.value.length===0)return!1;const w=q.getFullYear(),n=String(q.getMonth()+1).padStart(2,"0"),i=String(q.getDate()).padStart(2,"0"),m=`${w}-${n}-${i}`;return!y.value.includes(m)}function C(q){q&&q.length>10&&(t.value=q.substring(0,10)),b()}return{viewUnit:c,datePickerType:r,dateFormat:g,canNavPrev:v,canNavNext:P,switchView:l,navigateDate:T,disabledDate:k,onDateChange:C}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:p,navigateTo:t,currentPage:y,currentView:b,navigateDate:L,switchView:c,getLoadDashboardData:r,refreshCalendarData:g,getLoadAiHistory:v,exportCSV:P,getShowBatchEvaluate:l,openAiFab:T,toggleSidebar:k,showStockDetail:C}=a,q=ref("");async function w(A,M){if(!A||A.trim().length<1){M([]);return}const R=window.QuantCommandPanel;let z=[];R&&e.value&&(z=R.buildSearchSuggestions(A,e.value,p,R.DEFAULT_COMMANDS));const X=window.__quantModules&&window.__quantModules.pinyin;X&&X.searchCoreStocks(A).forEach(function(J){z.push({value:J.code+" "+J.name,type:"stock",code:J.code,name:J.name,label:J.name,subLabel:J.code,icon:"trending-up",iconName:"trending-up"})});try{const re=await(await fetch("/api/search?q="+encodeURIComponent(A))).json();if(re.success&&re.results){const F=re.results.map(function(D){return{value:D.code+" "+D.name,type:"stock",code:D.code,name:D.name,label:D.name,subLabel:D.code,icon:"trending-up",iconName:"trending-up"}}),j=[];(re.groups||[]).forEach(function(D){(D.items||[]).forEach(function(f){f.type==="sector"?j.push({value:f.name+" · "+f.subLabel,type:"sector",name:f.name,label:f.name,subLabel:"板块",icon:"layers",iconName:"layers"}):f.type==="strategy"?j.push({value:f.name+" · 策略",type:"strategy",id:f.id,name:f.name,label:f.name,subLabel:"策略",icon:"target",iconName:"target"}):f.type==="menu"&&j.push({value:f.name,type:"menu",menuKey:f.menuKey,name:f.name,label:f.name,subLabel:f.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),M(z.concat(F,j))}else M(z)}catch(J){console.warn("[searchStocks] fetch failed:",J),M(z)}}function n(A){return A?A.type==="menu"?{action:"menu",menuKey:A.menuKey,subPage:A.subPage}:A.type==="command"?{action:"command",key:A.key}:A.type==="sector"?{action:"sector",name:A.name}:A.type==="strategy"?{action:"strategy",id:A.id,name:A.name}:A.type==="stock"||A.code&&A.name?{action:"stock",code:A.code,name:A.name}:null:null}function i(A){q.value="";const M=window.QuantCommandPanel,R=M?M.dispatchSearchSelection(A):n(A);if(R){if(R.action==="menu"){t(R.menuKey,R.subPage);return}if(R.action==="command"){m(R.key);return}if(R.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(R.name);return}if(R.action==="strategy"){t("research","overview");return}R.action==="stock"&&typeof C=="function"&&C(R.code,R.name)}}function m(A){if(A==="refresh"){const M=y.value;M==="strategies"?r().catch(function(){}):M==="calendar"?g().catch(function(){}):M==="ai"&&v().catch(function(){})}else A==="export"?P():A==="batch"?l().value=!0:A==="ai"?T():A==="sidebar"?k():A==="open-eval-history"?t("ai","history"):A==="open-shortterm"&&t("shortterm","overview")}const H=ref(!1),I=ref(!1);function G(A){if(!A)return!1;const M=A.tagName;return M==="INPUT"||M==="TEXTAREA"||M==="SELECT"||A.isContentEditable}function ee(A){if(G(A.target))return;const M=A.key.toLowerCase();if(A.ctrlKey&&M==="k"){A.preventDefault(),I.value=!0;return}if(A.ctrlKey&&M==="/"){A.preventDefault(),H.value=!H.value;return}if(A.ctrlKey&&M==="h"){A.preventDefault(),t("ai","history");return}if(A.ctrlKey&&A.shiftKey&&M==="s"){A.preventDefault(),t("shortterm","overview");return}if(!(A.ctrlKey||A.metaKey||A.altKey)){if(M>="1"&&M<="5"){const R=parseInt(M)-1,z=e.value[R];z&&t(z.key,z.subPages[0]||"");return}if(M==="r"&&te(),(M==="arrowleft"||M==="arrowright"||M==="arrowup"||M==="arrowdown")&&y.value==="calendar")if(A.preventDefault(),M==="arrowleft"||M==="arrowright")L(M==="arrowleft"?-1:1);else{const R=["day","week","month","year"].indexOf(b.value),z=["day","week","month","year"][(R+(M==="arrowup"?-1:1)+4)%4];c(z)}}}function te(){const A=y.value;A==="strategies"?r().catch(()=>{}):A==="calendar"?g().catch(()=>{}):A==="ai"&&v().catch(()=>{})}return{searchQuery:q,searchStocks:w,onSearchSelect:i,runGlobalCommand:m,shortcutHelpVisible:H,commandPaletteVisible:I,isTypingTarget:G,handleGlobalKeydown:ee,refreshCurrentPage:te}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:p,loadDates:t,loadDashboardData:y,loadDashboardCached:b,loadHealthMetrics:L,loadConsensusData:c,applyTheme:r,maybeShowTour:g,loadAiVendors:v}=a,P=ref({username:"",password:""}),l=ref(!1),T=ref(!1),k=ref(!1),C=ref({oldPassword:"",newPassword:"",confirmPassword:""}),q=ref(!1),w=ref(!1),n=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),i=ref(1);async function m(){try{(await(await fetch("/api/setup/status")).json()).needed&&(n.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},i.value=1,w.value=!0)}catch(M){console.warn("[checkSetupWizard] failed:",M)}}async function H(){try{const M={new_password:n.value.newPassword,ai_key:n.value.aiKey,ai_provider:n.value.aiProvider,ai_model:n.value.aiModel,ai_endpoint:n.value.aiEndpoint,tushare_token:n.value.tushareToken},z=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)})).json();z.success?(w.value=!1,ElementPlus.ElMessage.success("初始化完成"),await p()):ElementPlus.ElMessage.error(z.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function I(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(w.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function G(){if(!P.value.username||!P.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}l.value=!0;try{const R=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P.value)})).json();R.success?(e.value=R.user,localStorage.setItem("quant_user",JSON.stringify(R.user)),localStorage.setItem("quant_token",R.data.access_token),r(R.user.theme||"gold"),typeof v=="function"&&v(),await p(),await t(),await Promise.all([b(),c(),L().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),R.data&&R.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),g(),R.user.role==="admin"&&setTimeout(m,500)):ElementPlus.ElMessage.error(R.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{l.value=!1}}async function ee(){T.value=!0;try{const R=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();R.success?(e.value=R.user,localStorage.setItem("quant_user",JSON.stringify(R.user)),localStorage.setItem("quant_token",R.data.access_token),r(R.user.theme||"gold"),await p(),await t(),await y(),L().catch(()=>{}),await c(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(R.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{T.value=!1}}function te(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function A(){if(!C.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!C.value.newPassword||C.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(C.value.newPassword!==C.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}q.value=!0;try{const M=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:C.value.oldPassword,new_password:C.value.newPassword})}),R=await M.json();M.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),k.value=!1,C.value={oldPassword:"",newPassword:"",confirmPassword:""},te()):ElementPlus.ElMessage.error(R.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{q.value=!1}}return{loginForm:P,logining:l,guestLogining:T,showChangePassword:k,changePasswordForm:C,changingPassword:q,showSetupWizard:w,setupForm:n,setupStep:i,checkSetupWizard:m,completeSetupWizard:H,resetSetupWizard:I,handleLogin:G,handleGuestLogin:ee,handleLogout:te,doChangePassword:A}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let p=null;const{strategyFilter:t,currentView:y,statusFilter:b,currentPage:L,currentSubPage:c,menus:r,currentUser:g,strategyFilterCounts:v,lazyTick:P,dates:l,selectedDate:T,consensus:k,loadConsensusData:C,fetchMerrillClock:q,fetchMarketData:w,loadWatchlist:n,loadAiHistory:i,preloadWatchlistKline:m,loadChatHistory:H,loadSystemStatus:I,checkTushareConnection:G,loadSysMonitor:ee,loadAnalytics:te,loadHealthDetail:A,loadHealthMetrics:M,loadAiUsage:R,loadFactCheck:z,loadAutoEvaluateConfig:X,loadDatasourceConfig:J,loadFeishuConfig:re,loadAiConfig:F,loadAiVendors:j,loadRateLimit:D,loadDataRefreshConfig:f,loadBackups:_,loadAllGroups:le,loadUsers:K,stockDetailTab:E,stockDetailVisible:d,stockKlineLoaded:S,loadStockKline:u,currentKlinePeriod:O,showMerrillDetail:ae,indexDetailVisible:Y,restoreDialogFocus:Q}=a;e(t,x=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(x.selected)),localStorage.setItem("quant_strategy_filter_mode",x.mode)},{deep:!0}),e([y,b],(x,h)=>{x[0]!==h[0]&&C()}),e([L,c],([x,h])=>{var Z;try{const de=!(x==="calendar"&&h==="calendar")&&h||"",Ce=de?"#"+x+"/"+de:"#"+x;window.location.hash!==Ce&&(window.location.hash=Ce)}catch{}if(h&&localStorage.setItem("quant_last_subpage",h),!h&&r.value.find(fe=>fe.key===x)){const fe=r.value.find(de=>de.key===x);fe&&fe.subPages.length>0&&(c.value=fe.subPages[0])}if(x==="shortterm"&&h==="market-review"){const fe=window.__lazyLoaders&&window.__lazyLoaders.research;fe&&fe().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(de){de&&de.name&&!de.__quantRegistered&&(window.__quantApp.component(de.name,de),de.__quantRegistered=!0)}),P&&P.value++}).catch(function(de){console.warn("[lazy] research 组件补加载失败",de)})}x==="calendar"&&h==="calendar"&&(!k.value||k.value.length===0)&&(l.value.length>0&&!T.value&&(T.value=l.value[l.value.length-1]||""),setTimeout(C,50)),x==="calendar"&&h==="pool"&&(!k.value||k.value.length===0)&&(l.value.length>0&&!T.value&&(T.value=l.value[l.value.length-1]||""),setTimeout(C,50)),x==="strategies"&&(h==="merrill"&&q(),h==="market"&&w(),h==="consensus"&&(!k.value||k.value.length===0)&&setTimeout(C,50)),x==="ai"&&(h==="watchlist"&&(n(),i(),setTimeout(m,500)),h==="history"&&i(),h==="overview"&&(i(),n()),h==="chat_history"&&H()),(x==="system"||x==="ops")&&((Z=g.value)==null?void 0:Z.role)==="admin"&&(h==="status"&&(I(),G()),h==="health"&&(A(),M()),h==="schedule"&&A(),h==="guard"&&z(),h==="usage"&&(ee(),te(),A(),M(),R(),z()),h==="autoeval"&&(X(),j()),h==="datasource"&&J(),h==="feature"&&(re(),F(),D(),f(),_()),h==="user"&&(le(),K())),(x==="system"||x==="ops")&&h==="usage"?p||(p=setInterval(()=>{ee(),te(),A(),M(),R()},3e4)):p&&(clearInterval(p),p=null)}),e(E,(x,h)=>{x==="kline"&&h&&h!=="kline"&&d.value&&(S.value=!1,setTimeout(async()=>{!await u(O.value)&&d.value&&E.value==="kline"&&setTimeout(()=>u(O.value),800)},50))}),e(ae,x=>{x||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([d,Y],([x,h])=>{!x&&!h&&Q()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:p,menus:t,currentPage:y,currentSubPage:b,currentView:L,currentKlinePeriod:c,selectedDate:r,dates:g,loadDates:v,loadConsensusData:P,loadDashboardCached:l,appVersion:T,themes:k,fetchMarketData:C,fetchMerrillStages:q,fetchMerrillClock:w,loadAiConfig:n,loadAiVendors:i,loadAiCatalog:m,currentUser:H,loadUserConfig:I,loadAutoEvaluateConfig:G,loadGroupConfig:ee,loadUsers:te,loadAllGroups:A,loadAiHistory:M}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function R(K,E){const d={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(K==="calendar"&&d[E])return y.value="calendar",b.value="calendar",d[E]&&(L.value=d[E]),!0;if(K==="research"&&(E==="strategy-write"||E==="custom-write")){y.value="research",b.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",E==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const K=window.location.hash||"";if(!K||K==="#")return;const E=K.replace(/^#\/?/,"").split("/"),d=E[0],S=E[1]||"",u=t.value.find(function(O){return O.key===d});if(u&&!R(d,S)){if(!S)y.value=d,b.value=u.subPages[0]||"";else if(u.subPages.indexOf(S)>=0)y.value=d,b.value=S;else return;window.__lazyLoaders&&window.__lazyLoaders[d]&&window.__quantGoPage&&window.__quantGoPage(d,b.value).catch(function(){})}});const z=(K,E=3e3,d="")=>{const S=new Promise((u,O)=>setTimeout(()=>O(new Error("timeout")),E));return Promise.race([K,S]).catch(u=>{console.warn(`[init] ${d||"task"} failed:`,u.message)})},X=localStorage.getItem("quant_theme"),J=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const K=window.__quantModules.themes;let E=J.theme||"system",d=J.theme_hue!=null&&J.theme_hue!==""?J.theme_hue:null;const S=typeof K.migrateLegacyTheme=="function"?K.migrateLegacyTheme():null;d==null&&S&&(E=S.mode,d=S.hue),d==null&&(d=45),p(E,d)}else X&&p(X);(function(){var K=window.location.hash||"",E=!1;if(K&&K!=="#"){var d=K.replace(/^#\/?/,"").split("/"),S=d[0],u=d[1]||"",O=t.value.find(function(h){return h.key===S});O&&(R(S,u)||(y.value=S,u&&O.subPages.indexOf(u)>=0?b.value=u:u||(b.value=O.subPages[0]||"")),E=!0)}if(!E){var ae=localStorage.getItem("quant_last_page");ae&&t.value.some(function(h){return h.key===ae})?y.value=ae:J.default_view&&t.value.some(function(h){return h.key===J.default_view})&&(y.value=J.default_view);var Y=localStorage.getItem("quant_last_subpage");Y&&(b.value=Y)}var Q=localStorage.getItem("quant_last_date");Q&&(r.value=Q);var x=localStorage.getItem("quant_last_view");x&&(L.value=x),window.__lazyLoaders&&window.__lazyLoaders[y.value]&&window.__quantGoPage&&window.__quantGoPage(y.value,b.value).catch(function(){})})(),fetch("/api/health").then(K=>K.json()).then(K=>{K.version&&(T.value=K.version)}).catch(()=>{});const re=localStorage.getItem("quant_user"),F=localStorage.getItem("quant_token"),j=!!(re&&F),D=Promise.all([Promise.resolve().then(()=>{k.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),z(C(),3e3,"marketData"),z(q(),2e3,"merrillStages")]).then(()=>{z(w(),3e3,"merrillClock")});if(n(),m(),j&&H.value&&i(),!j||!H.value){await D;return}let f=!0;try{f=(await fetch("/api/users/me")).ok}catch{f=!1}if(!f){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),H.value=null;return}if(H.value){const K=H.value.theme||"",E=window.__quantModules&&window.__quantModules.themes;let d=J.theme||"system",S=J.theme_hue!=null&&J.theme_hue!==""?J.theme_hue:null;if(S==null&&E&&typeof E.migrateLegacyTheme=="function"){const u=E.migrateLegacyTheme();if(u)d=u.mode,S=u.hue;else if(K&&E.LEGACY_MAP&&E.LEGACY_MAP[K]){const O=E.LEGACY_MAP[K];d=O[0],S=O[1]}}S==null&&(S=45),p(d,S)}if(window.__quantModules&&window.__quantModules.preferences){const E=await window.__quantModules.preferences.loadPreferences();var _=localStorage.getItem("quant_last_page");!_&&E.default_view&&t.value.some(function(d){return d.key===E.default_view})&&(y.value=E.default_view),E.theme&&p(E.theme,E.theme_hue!=null&&E.theme_hue!==""?E.theme_hue:null),c&&(E.chart_period==="weekly"||E.chart_period==="monthly")&&(c.value=E.chart_period)}await Promise.all([z(I(),2e3,"userConfig"),z(v(),2e3,"dates")]),G().catch(()=>{}),ee().catch(()=>{});const le=y.value==="strategies"?z(l(),2e3,"dashboard"):z(P(),2e3,"consensus");await Promise.all([le,z(te(),2e3,"users"),z(M(),2e3,"aiHistory")]),A().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:p,onUnmounted:t,watch:y,nextTick:b}=Vue,L=a(!1),c=window.__quantModules&&window.__quantModules.i18n||{},r=c.SUPPORTED_LOCALES||["zh-CN","en"],g=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",v=a(r.indexOf(g)!==-1?g:"zh-CN");typeof c.bindLocale=="function"&&c.bindLocale(v);const P=typeof c.t=="function"?c.t:function(U){return String(U)};function l(U){r.indexOf(U)!==-1&&(v.value=U,typeof c.setLocale=="function"&&c.setLocale(U),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",U))}function T(U,ve){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(U,ve):U==null?"":String(U)}function k(U){(U.key==="Enter"||U.key===" "||U.key==="Spacebar")&&(U.preventDefault(),U.currentTarget&&typeof U.currentTarget.click=="function"&&U.currentTarget.click())}let C=null;function q(){document.activeElement&&document.activeElement!==document.body&&(C=document.activeElement)}function w(){if(C&&C.isConnected)try{C.focus()}catch{}C=null}const n=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{n.value=!0}),window.addEventListener("offline",()=>{n.value=!1})),window.addEventListener("beforeunload",U=>{if(L.value)return U.preventDefault(),U.returnValue="您有未保存的配置变更，确定要离开吗？",U.returnValue});function i(U="light"){typeof navigator<"u"&&navigator.vibrate&&(U==="light"?navigator.vibrate(10):U==="medium"?navigator.vibrate(20):U==="heavy"&&navigator.vibrate([10,30,10]))}const m=useMerrillClock(),{merrillData:H,merrillStagesConfig:I,showMerrillDetail:G,merrillDetailData:ee,merrillClockConfig:te,merrillClockLastUpdated:A,merrillReevalResult:M,merrillReevalLoading:R,stages:z,indicatorList:X,dimensionScoreList:J,detailDimensionScoreList:re,confidenceColor:F,timelineStages:j,clockPosition:D,merrillProgressStyle:f,FULL_CYCLE_MONTHS:_,getStageAngle:le,getCycleProgress:K,getCurrentStageMonths:E,getStageTotalMonths:d,isStageCompleted:S,getCharLabel:u,getAssetName:O,getRankColor:ae,fetchMerrillStages:Y,fetchMerrillClock:Q,loadMerrillTimeline:x,showTimelineStage:h,merrillTimeline:Z,timelineLoading:fe,showStageDetail:de,saveMerrillClockConfig:Ce,doMerrillReevaluate:Ne,startAutoRefresh:xe,stopAutoRefresh:qe}=m,ie=a(localStorage.getItem("sidebar_collapsed")==="1");function ye(){ie.value=!ie.value,localStorage.setItem("sidebar_collapsed",ie.value?"1":"0")}const Re=a(null),se=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],$=e(()=>{var We,zt,jt;const U=((We=He.value)==null?void 0:We.role)||"guest",ve=((zt=He.value)==null?void 0:zt.group)||U,we=((jt=Re.value)==null?void 0:jt[ve])||null;return se.map(Dt=>{if(we&&we.visible_menus&&Dt.key in we.visible_menus&&!we.visible_menus[Dt.key])return null;const ca={...Dt,name:P("nav."+Dt.key)||Dt.name};return we!=null&&we.visible_sub_pages&&(ca.subPages=Dt.subPages.filter(Za=>{const id=Dt.key+"."+Za;return we.visible_sub_pages[id]!==!1})),Dt.key==="system"&&U==="guest"&&Dt.guestSubPages&&(ca.subPages=Dt.guestSubPages),ca}).filter(Boolean)});async function ne(){try{if(!localStorage.getItem("quant_token"))return;const ve=await fetch("/api/groups/my");if(ve.ok){const we=await ve.json();Re.value={[we.group_id]:we.group}}}catch(U){console.warn("loadGroupConfig:",U)}}const Se=a("strategies"),Te=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"subnav"},tt=a(Te.navMode);function ht(U){const ve=window.__quantModules&&window.__quantModules.navModeCore;tt.value=ve?ve.normalizeNavMode(U):U==="tree"||U==="toptab"?U:"subnav",ve&&ve.writePrefs({navMode:tt.value})}const rt=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function at(U,ve=""){i("light"),Se.value=U,$e.value=ve,localStorage.setItem("quant_last_subpage",ve)}const lt=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],oe=a("multifactor"),ke=a(null),De=a(1e5),Ae=a(!1),ct=a(null);let Qe=null,Je=null;async function yt(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ve={initial_capital:De.value||1e5};ke.value&&ke.value.length===2&&(ve.start_date=ke.value[0],ve.end_date=ke.value[1]),Ae.value=!0,ct.value=null;try{const we=await fetch("/api/strategies/"+oe.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)});if(!we.ok){const zt=await we.json().catch(()=>({}));throw new Error(zt.detail||"回测失败")}const Fe=await we.json(),We=Fe.result||{};if(!We.success)throw new Error(We.message||"回测失败");Fe.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),ct.value={total_return_pct:((We.total_return??0)*100).toFixed(2),annual_return_pct:((We.annual_return??0)*100).toFixed(2),max_drawdown_pct:((We.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(We.sharpe_ratio??0).toFixed(2),win_rate:((We.win_rate??0)*100).toFixed(2),out_sample:We.outsample_total_return===void 0?"":((We.outsample_total_return??0)*100).toFixed(2),overfit_warning:We.overfit_warning||!1,message:We.message||""},_t(We.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(we){ElementPlus.ElMessage.error(we.message||"回测失败")}finally{Ae.value=!1}}function _t(U){const ve=document.getElementById("backtestEquityChart");if(!ve||!U||U.length===0)return;const we=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Fe=()=>{Je=U,Qe&&(Qe.dispose(),Qe=null),Qe=echarts.init(ve),Qe.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const We=U.map(jt=>jt.date||jt[0]),zt=U.map(jt=>jt.value??jt[1]);Qe.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:We,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:zt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};we?we().then(Fe).catch(()=>{}):Fe()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){Je&&_t(Je)}));const $e=a("overview"),ft=e(()=>{const U=se.find(ve=>ve.key===Se.value);return U?U.name:Se.value}),N=a(0),ce=e(()=>{N.value;const U={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ve=$e.value;return Se.value==="shortterm"&&ve==="market-review"?"qc-research-page":Se.value==="ops"&&ve==="execution"?"qc-strategies-page":U[Se.value]||""}),Me=a(!1),ze=a({}),je=a([]);a("");const Ie=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),Ve=a("day"),Xe=a("all"),He=a(null);(function(){if(typeof localStorage>"u")return;const U=localStorage.getItem("quant_user"),ve=localStorage.getItem("quant_token");if(U&&ve)try{He.value=JSON.parse(U)}catch{}})();const Ze=a(!1),bt=a("kline"),B=a(null),me=a(!1),Ue={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"功能配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},Ge=a({});function vt(U,ve){return Ue[ve]||ve}function wt(U){const ve=se.find(Fe=>Fe.key===U);if(!ve||!ve.subPages||!ve.subPages.length)return;if(!(Ge.value[U]||[]).length){const Fe=ve.subPages[0];Ge.value=Object.assign({},Ge.value,{[U]:[{subPage:Fe,title:vt(U,Fe)}]})}}function Rt(U,ve){const we=window.__quantModules&&window.__quantModules.tabsCore,Fe=vt(U,ve);if(we){const We=we.openTab(Ge.value,U,ve,Fe);Ge.value=We.groups}else{const We=Ge.value[U]||[];We.some(zt=>zt.subPage===ve)||(Ge.value=Object.assign({},Ge.value,{[U]:We.concat([{subPage:ve,title:Fe}])}))}at(U,ve)}function ta(U,ve){const we=window.__quantModules&&window.__quantModules.tabsCore,Fe=$e.value;let We=null;if(we)We=we.closeTab(Ge.value,U,ve,Fe),Ge.value=We.groups;else{const Dt=Ge.value[U]||[];Ge.value=Object.assign({},Ge.value,{[U]:Dt.filter(ca=>ca.subPage!==ve)})}if(!(Ge.value[U]||[]).length){wt(U);const Dt=se.find(Za=>Za.key===U),ca=Dt&&Dt.subPages&&Dt.subPages[0];ca&&at(U,ca);return}const jt=We?We.nextActive:null;jt&&at(U,jt)}function Qt(U,ve){if(!(Ge.value[U]||[]).some(Fe=>Fe.subPage===ve)){Rt(U,ve);return}at(U,ve)}y([Se,$e],([U,ve])=>{wt(U);const we=Ge.value[U]||[];ve&&!we.some(Fe=>Fe.subPage===ve)&&(Ge.value=Object.assign({},Ge.value,{[U]:we.concat([{subPage:ve,title:vt(U,ve)}])}))},{immediate:!0});const Lt=function(U){if(!(U.ctrlKey&&U.key==="Tab"))return;const ve=Se.value,we=Ge.value[ve]||[];if(we.length<=1)return;U.preventDefault();const Fe=$e.value,We=Math.max(0,we.findIndex(Dt=>Dt.subPage===Fe)),zt=U.shiftKey?(We-1+we.length)%we.length:(We+1)%we.length,jt=we[zt];jt&&Qt(ve,jt.subPage)};window.addEventListener("keydown",Lt);const It=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),Ye=a("light"),Nt=[45,220,0,140,270,320],kt={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},At=a(45),Vt=a(function(){const U=window.__quantModules&&window.__quantModules.preferences;return U&&U.getPreference&&U.getPreference("theme")||"system"}());(function(){const U=window.__quantModules&&window.__quantModules.preferences,ve=U&&U.getPreference&&U.getPreference("theme_hue");ve!=null&&ve!==""&&(At.value=parseInt(ve,10))})();function Wt(U){return"hsl("+U+", 75%, 42%)"}function aa(U){return kt[U]||"自定义 "+U}const $t=a(""),Xt=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),Zt=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),ua=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],Ut=a({day:[],week:[],month:[],year:[]}),V=a({});function pe(U,ve){let we=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(we=window.__quantModules.themes.applyTheme(U,ve)),Ye.value=we&&we.mode?we.mode:U==="dark"||U==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Le(U,ve){const we=window.__quantModules&&window.__quantModules.preferences;if(!(!we||!we.setPreferences))try{we.setPreferences({theme:U}),ve!=null&&ve!==""&&we.setPreferences({theme_hue:parseInt(ve,10)})}catch{}}function Ee(U,ve){pe(U,ve),ve!=null&&ve!==""&&(At.value=parseInt(ve,10));const we=window.__quantModules&&window.__quantModules.themes;let Fe=U;we&&we.LEGACY_MAP&&we.LEGACY_MAP[U]&&(Fe=we.LEGACY_MAP[U][0]),Fe==="light"||Fe==="dark"||Fe==="system"?Vt.value=Fe:Vt.value=Ye.value,Fe==="system"&&(Fe=Ye.value),Le(Fe,ve),He.value&&(fetch(`/api/users/${He.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Fe})}),He.value.theme=Fe,localStorage.setItem("quant_user",JSON.stringify(He.value)))}function dt(U){const ve=window.__quantModules&&window.__quantModules.preferences,we=ve&&ve.getPreference?ve.getPreference("theme_hue"):null;Ee(U,we)}function st(U){At.value=parseInt(U,10);const ve=window.__quantModules&&window.__quantModules.preferences,we=ve&&ve.getPreference&&ve.getPreference("theme")||"light";Ee(we,At.value)}const Tt=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function Kt(U){Tt.value=!!U;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",U?"show":"hide")}catch{}}const Ht=e(()=>{const U=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return Tt.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...U]:U}),Ct=a("daily");(function(){try{const ve=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ve==="weekly"||ve==="monthly")&&(Ct.value=ve)}catch{}})();const sa=a(!1),oa=a(""),la=a(!1),Ot=a(!1),ea=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Sa=["MA5","MA10","MA20","MA60"],va=a(!1);let fa=0;async function Pt(U){if(!B.value)return!1;const ve=++fa;sa.value=!0,Ct.value=U;try{const Fe=await(await fetch(`/api/market/kline/${B.value.stock}?period=${U}&limit=60`)).json();if(!Fe.success||!Fe.data)throw new Error(Fe.message||"数据获取失败");return oa.value=Fe.degraded_from?"分钟数据("+Fe.degraded_from+")暂不可用, 已降级展示日线":"",Vs(B.value.stock),ve!==fa?!1:(bt.value!=="kline"||(Ot.value=!0,await b(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Fe.data,U,!1,{isMobile:ss.value,onLegend:We=>{Object.keys(ea.value).forEach(zt=>{zt in We&&(ea.value[zt]=!!We[zt])})}}),ha()),!0)}catch(we){return console.error("[kline] 加载失败:",B.value&&B.value.stock,U,we),bt.value==="kline"&&(Ot.value=!1,oa.value="",ElementPlus.ElMessage.error("K线加载失败: "+(we&&we.message?we.message:"数据源不可达，请重试"))),!1}finally{sa.value=!1}}async function ia(U){if(Oa.value){la.value=!0,Ct.value=U;try{const we=await(await fetch(`/api/market/kline/${Oa.value.code}?period=${U}&limit=60`)).json();if(!we.success||!we.data)throw new Error(we.message||"数据获取失败");va.value=!0,await b(),window.__quantModules.charts.renderKlineTo("indexKlineChart",we.data,U,!0,{isMobile:ss.value,onLegend:Fe=>{Object.keys(ea.value).forEach(We=>{We in Fe&&(ea.value[We]=!!Fe[We])})}}),ha()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{la.value=!1}}}async function ga(U){if(!Ot.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await Pt(U)}async function Ca(U){if(!va.value){ElementPlus.ElMessage.info("请先加载K线");return}await ia(U)}function qa(U){const ve=(Ze.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Na.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ve&&ve.dispatchAction({type:"legendToggleSelect",name:U})}function ha(){["K线","MA5","MA10","MA20","MA60"].forEach(U=>{ea.value[U]=!0})}async function s(){const U=await fetch("/api/system/metrics");if(!U.ok)throw new Error("metrics "+U.status);const ve=await U.json(),we=Array.isArray(ve)?ve:ve&&ve.data_sources||[];je.value=we}const o=()=>Xa,W=()=>hs,be=()=>wo,he=()=>Ea,ot=()=>Ga,et=window.__quantAppLogic.data.create({currentView:Ve,statusFilter:Xe,dashboardData:ze,loadHealthMetrics:s,getLoadDashboardData:o,getLastRefreshTime:W,getFetchPoolSignals:be}),{loading:it,loadingView:Gt,viewCache:qt,dates:Bt,selectedDate:Et,lastLoadTime:Ke,consensus:gt,viewNote:ya,loadDates:ra,refreshCalendarData:xt,exportCSV:Pa,loadConsensusData:ba,loadDashboardCached:Da}=et,Zs=window.__quantAppLogic.market.create({currentKlinePeriod:Ct,loadIndexKline:ia,rememberDialogTrigger:q,menus:$,currentPage:Se,currentSubPage:$e,stockDetail:B,selectedDate:Et}),{marketData:el,indexDetailVisible:Na,indexDetail:Oa,indexAiResult:tl,indexAiLoading:al,fetchMarketData:ja,showIndexDetail:sl,loadCachedIndexEval:ll,doIndexAiEvaluate:il,disposeStockKline:as,isMobile:ss,zoomKlineRange:nl,scoreAnimating:ol,scoreDelta:rl,scorePulse:cl,refreshStockScore:Fa,animateScoreEntrance:Va,onTouchStart:dl,onTouchEnd:ul}=Zs,vl=window.__quantAppLogic.ops.create({navigateTo:at,currentPage:Se,currentSubPage:$e}),{feishuConfig:ls,feishuTestStatus:ml,feishuTestMessage:pl,testFeishuWebhook:fl,saveFeishuConfig:gl,aiFabHidden:hl,openAiFab:is,strategyRecommendations:yl,aiUsage:bl,loadStrategyRecommendations:ns,loadAiUsage:Ha,sysMonitor:wl,analyticsRank:kl,analyticsDays:_l,loadSysMonitor:os,loadAnalytics:rs,healthDetail:xl,loadHealthDetail:cs,reviewTriggering:Sl,triggerMarketReview:Cl,factCheck:ql,factCheckRunning:El,loadFactCheck:ds,triggerFactCheck:Ml,backups:Tl,backupCreating:Pl,loadBackups:us,createBackup:Dl,restoreBackup:Rl,reportExporting:zl,reportExportMsg:Al,exportReport:Ll,tourVisible:Il,tourStep:Nl,tourSteps:Ol,maybeShowTour:jl,skipTour:Fl,finishTour:Vl,feedbackText:Hl,feedbackSubmitting:Kl,submitFeedback:Bl}=vl,Wl=window.__quantAppLogic.nav.create({currentView:Ve,selectedDate:Et,dates:Bt,loadConsensusData:ba,hapticFeedback:i}),{viewUnit:Ul,datePickerType:Gl,dateFormat:Yl,canNavPrev:Jl,canNavNext:Ql,switchView:vs,navigateDate:ms,disabledDate:$l,onDateChange:Xl}=Wl,Zl=window.__quantAppLogic.keys.create({menus:$,subPageNames:Ue,navigateTo:at,currentPage:Se,currentView:Ve,navigateDate:ms,switchView:vs,getLoadDashboardData:o,refreshCalendarData:xt,getLoadAiHistory:he,exportCSV:Pa,getShowBatchEvaluate:ot,openAiFab:is,toggleSidebar:ye,showStockDetail:fs}),{searchQuery:ei,searchStocks:ti,onSearchSelect:ai,shortcutHelpVisible:si,commandPaletteVisible:li,handleGlobalKeydown:ps}=Zl;let Ra=0;async function fs(U){const ve=++Ra;q(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(U,""),Ba.value=null,Ct.value="daily",Ot.value=!1,bt.value="kline",B.value=null,me.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Ze.value=!0,b(()=>Va());try{const we=await fetch(`/api/calendar/stock/${U}?date=${Et.value}`);if(ve!==Ra)return;B.value=await we.json(),B.value&&B.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(U,B.value.name)}catch{if(ve!==Ra)return;ElementPlus.ElMessage.error("加载失败"),B.value={stock:U,name:"",total_days:0}}finally{ve===Ra&&(me.value=!1)}setTimeout(async()=>{await Pt("daily"),Fa()},500),Ya(U)}const ii=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:Ot,stockDetailVisible:Ze,stockDetailTab:bt,stockDetail:B,disposeStockKline:as}):{},{chatSessions:ni,chatHistoryView:oi,selectedChatIds:ri,expandedChatDates:ci,expandedChatMonths:di,expandedChatStocks:ui,chatHistoryLoading:vi,chatHistoryError:mi,allChatSessionsFlat:pi,chatGroupedByDate:fi,chatGroupedByMonth:gi,chatGroupedByStock:hi,toggleSelectChat:yi,toggleSelectChatDate:bi,toggleSelectChatMonth:wi,toggleSelectChatStock:ki,toggleChatDateExpand:_i,toggleChatMonthExpand:xi,toggleChatStockExpand:Si,selectAllChatSessions:Ci,deleteSelectedChatSessions:qi,viewChatSession:Ei,loadChatHistory:gs,deleteChatSession:Mi,renderMarkdown:Ti,stockChatInput:Pi,stockChatMessages:Di,stockChatLoading:Ri,stockChatError:zi,askStockSend:Ai,askStockQuick:Li}=ii,Ii=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:He,applyTheme:pe,allMenuDefs:se,loadGroupConfig:ne}):{},{userList:Ni,userSearch:Oi,groupFilter:ji,userPageTab:Fi,expandedGroups:Vi,addMemberGroupMap:Hi,filteredUsers:Ki,toggleGroupExpand:Bi,removeMemberFromGroupInline:Wi,addMemberToGroupInline:Ui,changeUserGroup:Gi,showAddUser:Yi,editingUser:Ji,userForm:Qi,savingUser:$i,editingGroup:Xi,menuConfigDialog:Zi,memberDialog:en,groupEditForm:tn,subPageCache:an,showAddGroup:sn,addGroupForm:ln,savingGroup:nn,groupMembers:on,addMemberUsername:rn,selectedMemberGroup:cn,subPageSectionExpanded:dn,toggleSubPageSection:un,getGroupMemberCount:vn,getMenuEnabledCount:mn,groupCount:pn,openMemberManager:fn,loadGroupMembers:gn,addMemberToGroup:hn,removeMemberFromGroup:yn,availableUsersForGroup:bn,onParentToggle:wn,openMenuConfig:kn,saveMenuConfig:_n,deleteGroupConfig:xn,createGroup:Sn,allGroups:Cn,getGroupName:qn,loadAllGroups:Ka,loadUsers:za,editUser:En,saveUser:Mn,deleteUser:Tn,toggleUserEnabled:Pn,resetUserPassword:Dn}=Ii,Rn=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:gt,currentPage:Se,currentSubPage:$e,dashboardData:ze,searchKeyword:$t,statusFilter:Xe,strategyFilter:Zt,strategyFilterCounts:Ut}):{},{applyStrategyFilter:jp,statusCounts:zn,stockPool:An,strategyDistribution:Ln,strategyPreviewCount:In,saveStrategyFilter:Nn,filteredConsensusRank:On,currentPoolSize:jn,filteredStrategyCounts:Fn,poolChangeBadge:Vn,timeBarPercent:Hn,lastRefreshTime:hs,timeSinceRefresh:Kn,navigateToStrategyFilter:Bn}=Rn,Wn=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:L,consensus:gt}):{},{aiResult:Ba,lastEvalTime:Un,evalHistoryComparison:Gn,checklistItems:Yn,aiHistory:ys,selectedHistoryIds:bs,expandedDates:ws,expandedMonths:Jn,expandedStocks:ks,poolSignals:Qn,toggleMonthExpand:$n,aiHistoryView:Xn,selectedWatchlistCodes:_s,showAutoEvaluateSettings:xs,savingConfig:Ss,autoEvaluateScope:Cs,aiVendors:Zn,aiCatalog:eo,aiModelsError:to,testingAllModels:ao,savingAiModels:so,loadAiVendors:Aa,loadAiCatalog:qs,saveAiVendors:Es,saveAiModels:lo,testVendorModel:io,testAllVendorModels:no,fetchVendorModels:oo,addVendorFromCatalog:ro,addCustomVendor:co,addVendorModel:uo,removeVendorModel:vo,removeVendor:mo,toggleVendorKeyReveal:po,toggleVendorEdit:fo,autoEvaluateConfig:Wa,aiLoading:Ua,aiEvalStage:Ms,aiEvalElapsed:Ts,aiEvalError:Ps,showBatchEvaluate:Ga,batchStocks:Ds,batchRunning:Rs,batchTotal:zs,batchCompleted:As,batchCurrent:Ls,batchStatuses:Is,batchResults:Ns,batchEvalErrors:Os,aiConfig:js,selectedPreset:go,providerInfo:ho,aiPresets:Fp,applyPreset:yo,onProviderChange:bo,fetchPoolSignals:wo,cancelPoolSignals:Fs,loadLastEvaluation:Ya}=Wn,ko=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:He,selectedDate:Et,stockDetail:B,stockDetailTab:bt,stockDetailVisible:Ze,stockDetailLoading:me,stockKlineLoaded:Ot,viewCache:qt,animateScoreEntrance:Va,loadStockKline:Pt,refreshStockScore:Fa,disposeStockKline:as,aiHistory:ys,aiLoading:Ua,aiEvalStage:Ms,aiEvalElapsed:Ts,aiEvalError:Ps,aiResult:Ba,loadLastEvaluation:Ya,autoEvaluateConfig:Wa,autoEvaluateScope:Cs,batchStocks:Ds,batchRunning:Rs,batchTotal:zs,batchCompleted:As,batchCurrent:Ls,batchStatuses:Is,batchResults:Ns,batchEvalErrors:Os,expandedDates:ws,expandedStocks:ks,savingConfig:Ss,selectedHistoryIds:bs,selectedWatchlistCodes:_s,showAutoEvaluateSettings:xs,showBatchEvaluate:Ga}):{},{quickEvalStock:_o,evalStrategy:xo,watchlistSort:So,watchlist:Co,watchlistCodes:qo,sortedWatchlist:Eo,getWatchlistScore:Mo,getLatestScore:Vp,addSearchResult:To,evaluatedCodes:Po,klineLoadedCodes:Do,markKlineLoaded:Vs,watchlistSearch:Ro,watchlistResults:zo,watchlistSearching:Ao,dataRefreshConfig:Lo,dataRefreshReloading:Io,dataRefreshSaving:No,aiHistoryLoading:Oo,aiHistoryError:jo,aiHistoryTotal:Fo,aiHistoryLoadingMore:Vo,hasMoreAiHistory:Ho,loadMoreAiHistory:Ko,watchlistLoading:Bo,doAiEvaluate:Wo,loadAiHistory:Ea,deleteSingleHistory:Uo,toggleSelectHistory:Go,clearSelection:Yo,clearWatchlistSelection:Jo,batchReevaluateHistory:Qo,batchAddToWatchlist:$o,batchRemoveWatchlist:Xo,toggleSelectWatchlist:Zo,selectAllHistory:er,selectAllWatchlist:tr,deleteSelectedHistory:ar,loadAutoEvaluateConfig:Hs,saveAutoEvaluateConfig:sr,loadWatchlist:Ks,addToWatchlist:lr,removeFromWatchlist:ir,clearWatchlist:nr,toggleWatchlist:or,showStockKline:rr,preloadingKline:cr,preloadWatchlistKline:Bs,watchlistEvaluate:dr,batchEvaluateWatchlist:ur,batchEvaluateSelected:vr,searchStockForWatchlist:mr,loadDataRefreshConfig:Ws,saveDataRefreshConfig:pr,triggerDataReload:fr,triggerDataPull:gr,dataPullRunning:hr,groupedByDate:yr,aiHistoryByStock:br,groupedByMonth:wr,aiHistoryStockCount:kr,scoreDistribution:_r,quickEvaluate:xr,toggleDateExpand:Sr,toggleSelectDate:Cr,toggleSelectMonth:qr,toggleStockExpand:Er,toggleSelectStock:Mr,registerTrendChart:Tr,viewAiResult:Pr,doBatchEvaluate:Dr,realtimeQuotes:Rr,realtimeDegraded:zr,realtimeWsState:Ar,connectRealtimeQuotes:Lr,disconnectRealtimeQuotes:Ir,quoteWarningFor:Nr,realtimeQuoteColor:Or,realtimePriceText:jr,realtimePctText:Fr,realtimeRatioText:Vr,REALTIME_DEGRADED_TEXT:Hr,REALTIME_FALLBACK_TEXT:Kr}=ko,Br=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:lt}):{},{btStrategyOptions:Wr,btSelectedStrategies:Ur,toggleBtStrategy:Gr,btDateRange:Yr,btCapital:Jr,btCommissionRate:Qr,btIncludeBenchmark:$r,btRunning:Xr,btResult:Zr,btError:ec,btMetrics:tc,btAnnualReturns:ac,btTrades:sc,btStrategyMetricsRows:lc,btDrawdownRegion:ic,runBacktestWorkbench:nc,exportBacktestCSV:oc,registerBacktestNavChart:rc,btFmtNum:cc}=Br,dc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:L,aiConfig:js,aiLoading:Ua,feishuConfig:ls,currentTheme:Ye,changeTheme:Ee,autoEvaluateConfig:Wa,currentUser:He,strategyFilter:Zt,applyTheme:pe,dashboardData:ze,lastRefreshTime:hs,saveAiModels:lo}):{},{configSaving:uc,globalConfigDirty:vc,lastSavedTime:mc,feishuConfigOriginal:Hp,aiConfigOriginal:Kp,tushareConfigOriginal:Bp,tushareConfig:pc,tushareStatus:fc,datasourceConfig:gc,datasourceStatus:hc,syncingData:yc,stockCount:bc,tradeDateCount:wc,aiStatus:kc,appVersion:Us,showImportDialog:_c,rateLimitConfig:xc,rateLimitDirty:Sc,rateLimitSaving:Cc,loadRateLimit:Ja,saveRateLimit:qc,saveAiConfig:Ec,testAiApi:Mc,exportConfig:Tc,importConfig:Pc,saveAllConfig:Dc,resetAllConfig:Rc,testTushareConnection:zc,checkTushareConnection:La,syncStockData:Ac,loadTushareConfig:Gs,loadDatasourceConfig:Ys,saveDatasourceConfig:Lc,testDatasource:Ic,toggleDatasourceKeyReveal:Nc,toggleDatasourceEdit:Oc,loadFeishuConfig:Qa,loadAiConfig:Ia,loadUserConfig:Js,loadSystemStatus:$a,loadDashboardData:Xa}=dc,jc=window.__quantAppLogic.auth.create({currentUser:He,loadUserConfig:Js,loadDates:ra,loadDashboardData:Xa,loadDashboardCached:Da,loadHealthMetrics:s,loadConsensusData:ba,applyTheme:pe,maybeShowTour:jl,loadAiVendors:Aa}),{loginForm:Fc,logining:Vc,guestLogining:Hc,showChangePassword:Kc,changePasswordForm:Bc,changingPassword:Wc,showSetupWizard:Uc,setupForm:Gc,setupStep:Yc,checkSetupWizard:Jc,completeSetupWizard:Qc,resetSetupWizard:$c,handleLogin:Xc,handleGuestLogin:Zc,handleLogout:ed,doChangePassword:td}=jc;window.__quantAppLogic.watch.register({strategyFilter:Zt,currentView:Ve,statusFilter:Xe,currentPage:Se,currentSubPage:$e,menus:$,currentUser:He,strategyFilterCounts:Ut,lazyTick:N,dates:Bt,selectedDate:Et,consensus:gt,loadConsensusData:ba,fetchMerrillClock:Q,fetchMarketData:ja,loadWatchlist:Ks,loadAiHistory:Ea,preloadWatchlistKline:Bs,loadChatHistory:gs,loadSystemStatus:$a,checkTushareConnection:La,loadSysMonitor:os,loadAnalytics:rs,loadHealthDetail:cs,loadHealthMetrics:s,loadAiUsage:Ha,loadFactCheck:ds,loadAutoEvaluateConfig:Hs,loadDatasourceConfig:Ys,loadFeishuConfig:Qa,loadAiConfig:Ia,loadAiVendors:Aa,loadRateLimit:Ja,loadDataRefreshConfig:Ws,loadBackups:us,loadAllGroups:Ka,loadUsers:za,stockDetailTab:bt,stockDetailVisible:Ze,stockKlineLoaded:Ot,loadStockKline:Pt,currentKlinePeriod:Ct,showMerrillDetail:G,indexDetailVisible:Na,restoreDialogFocus:w});const ad=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:ps,applyTheme:pe,menus:$,currentPage:Se,currentSubPage:$e,currentView:Ve,currentKlinePeriod:Ct,selectedDate:Et,dates:Bt,loadDates:ra,loadConsensusData:ba,loadDashboardCached:Da,appVersion:Us,themes:It,fetchMarketData:ja,fetchMerrillStages:Y,fetchMerrillClock:Q,loadMerrillTimeline:x,showTimelineStage:h,merrillTimeline:Z,timelineLoading:fe,loadAiConfig:Ia,loadAiVendors:Aa,loadAiCatalog:qs,currentUser:He,loadUserConfig:Js,loadAutoEvaluateConfig:Hs,loadGroupConfig:ne,loadUsers:za,loadAllGroups:Ka,loadAiHistory:Ea}),{runOnMounted:sd}=ad;window.__quantGoPage=async(U,ve)=>{try{const we=window.__lazyLoaders&&window.__lazyLoaders[U];we&&await we()}catch(we){console.warn("[lazy] 页面组件加载失败",U,we)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(we=>{we&&we.name&&!we.__quantRegistered&&(window.__quantApp.component(we.name,we),we.__quantRegistered=!0)}),N&&N.value++,Se.value=U,ve&&($e.value=ve)};let wa;y(Se,async U=>{var ve;i("light");try{const we=se.find(function(Fe){return Fe.key===U});document.title=(we?we.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",U),U!=="calendar"&&typeof Fs=="function"&&Fs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:U})}).catch(()=>{})}catch(we){console.warn("pageView track failed:",we)}if(wa&&(clearInterval(wa),wa=null),U==="strategies")await Da(),wa=setInterval(()=>{Da().catch(()=>{})},5*60*1e3);else if(U==="calendar")Et.value&&await ba();else if(U==="ai")ns(),Ha(),await Ea();else if(U==="system"){if(!Et.value){const Fe=await(await fetch("/api/dashboard")).json(),We=Fe.data||Fe;We.latest_date&&(Et.value=We.latest_date)}if(Et.value){const we=["day","week","month","year"];for(const Fe of we)try{const zt=await(await fetch(`/api/view/${Fe}/${Et.value}?status=all`)).json();Ut.value[Fe]=zt.stocks||[]}catch(We){console.warn("loadConsensusData view load failed:",We)}(!gt.value||gt.value.length===0)&&(gt.value=Ut.value.day||[])}((ve=He.value)==null?void 0:ve.role)==="admin"&&(await za(),await Qa(),await Gs(),await $a(),await Ia(),await Ja(),La(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(La,36e5)))}}),p(async()=>{await sd()}),xe(),x(),t(()=>{wa&&clearInterval(wa),window.removeEventListener("keydown",ps),window.removeEventListener("keydown",Lt)});function ld(U,ve=2){return U==null||U===""||isNaN(Number(U))?"--":Number(U).toFixed(ve)}return{currentPage:Se,pageComp:ce,currentSubPage:$e,sidebarCollapsed:ie,menus:$,navMode:tt,setNavMode:ht,tabGroups:Ge,openTab:Rt,closeTab:ta,activateTab:Qt,fmtNum:ld,sanitizeHtml:T,keyClick:k,isOnline:n,currentUser:He,allMenuDefs:se,t:P,locale:v,changeLanguage:l,currentPageName:ft,subPageNames:Ue,searchQuery:ei,searchStocks:ti,onSearchSelect:ai,selectedDate:Et,onDateChange:Xl,disabledDate:$l,refreshCalendarData:xt,exportCSV:Pa,viewNote:ya,loading:it,lastLoadTime:Ke,resetSetupWizard:$c,showChangePassword:Kc,themes:It,currentTheme:Ye,changeTheme:Ee,changeThemeMode:dt,changeThemeHue:st,handleLogout:ed,themeHues:Nt,themeHueNames:kt,themeHue:At,themeMode:Vt,hueColor:Wt,hueName:aa,marketData:el,merrillData:H,merrillTimeline:Z,timelineLoading:fe,merrillStagesConfig:I,fetchMerrillStages:Y,healthMetrics:je,feishuConfig:ls,feishuTestStatus:ml,feishuTestMessage:pl,shortcutHelpVisible:si,shortcutHelpItems:rt,commandPaletteVisible:li,tourVisible:Il,tourStep:Nl,tourSteps:Ol,skipTour:Fl,finishTour:Vl,backups:Tl,backupCreating:Pl,loadBackups:us,createBackup:Dl,restoreBackup:Rl,reportExporting:zl,reportExportMsg:Al,exportReport:Ll,sysMonitor:wl,analyticsRank:kl,analyticsDays:_l,loadSysMonitor:os,loadAnalytics:rs,healthDetail:xl,loadHealthDetail:cs,reviewTriggering:Sl,triggerMarketReview:Cl,factCheck:ql,factCheckRunning:El,loadFactCheck:ds,triggerFactCheck:Ml,strategyRecommendations:yl,aiUsage:bl,loadStrategyRecommendations:ns,loadAiUsage:Ha,aiFabHidden:hl,openAiFab:is,feedbackText:Hl,feedbackSubmitting:Kl,submitFeedback:Bl,backtestStrategies:lt,backtestStrategy:oe,backtestRange:ke,backtestCapital:De,backtestRunning:Ae,backtestResult:ct,runBacktest:yt,btStrategyOptions:Wr,btSelectedStrategies:Ur,toggleBtStrategy:Gr,btDateRange:Yr,btCapital:Jr,btCommissionRate:Qr,btIncludeBenchmark:$r,btRunning:Xr,btResult:Zr,btError:ec,btMetrics:tc,btAnnualReturns:ac,btTrades:sc,btStrategyMetricsRows:lc,btDrawdownRegion:ic,runBacktestWorkbench:nc,exportBacktestCSV:oc,registerBacktestNavChart:rc,btFmtNum:cc,fetchMarketData:ja,fetchMerrillClock:Q,testFeishuWebhook:fl,saveFeishuConfig:gl,merrillClockConfig:te,merrillClockLastUpdated:A,merrillReevalResult:M,merrillReevalLoading:R,saveMerrillClockConfig:Ce,doMerrillReevaluate:Ne,dataRefreshConfig:Lo,dataRefreshReloading:Io,dataRefreshSaving:No,loadDataRefreshConfig:Ws,saveDataRefreshConfig:pr,triggerDataReload:fr,triggerDataPull:gr,dataPullRunning:hr,indexDetailVisible:Na,indexDetail:Oa,indexAiResult:tl,indexAiLoading:al,loadCachedIndexEval:ll,showIndexDetail:sl,doIndexAiEvaluate:il,klinePeriods:Ht,currentKlinePeriod:Ct,klineLoading:sa,indexKlineLoading:la,stockKlineLoaded:Ot,indexKlineLoaded:va,klineDegradeNote:oa,klineShowMinutes:Tt,toggleKlineShowMinutes:Kt,loadStockKline:Pt,switchKlinePeriod:ga,loadIndexKline:ia,switchIndexKlinePeriod:Ca,zoomKlineRange:nl,MA_LINES:Sa,klineMaVisible:ea,toggleKlineMa:qa,scoreAnimating:ol,scoreDelta:rl,scorePulse:cl,refreshStockScore:Fa,animateScoreEntrance:Va,showMerrillDetail:G,merrillDetailData:ee,showStageDetail:de,getCharLabel:u,getAssetName:O,getRankColor:ae,timelineStages:j,getStageAngle:le,getCycleProgress:K,getCurrentStageMonths:E,getStageTotalMonths:d,isStageCompleted:S,stages:z,indicatorList:X,dimensionScoreList:J,confidenceColor:F,views:Ie,currentView:Ve,statusFilter:Xe,loginForm:Fc,logining:Vc,guestLogining:Hc,dashboardData:ze,loadingView:Gt,dates:Bt,consensus:gt,searchKeyword:$t,stockDetailVisible:Ze,stockDetailTab:bt,stockDetail:B,stockDetailLoading:me,aiLoading:Ua,aiEvalStage:Ms,aiEvalElapsed:Ts,aiEvalError:Ps,showBatchEvaluate:Ga,batchStocks:Ds,batchRunning:Rs,batchTotal:zs,batchCompleted:As,batchCurrent:Ls,batchStatuses:Is,batchResults:Ns,batchEvalErrors:Os,aiConfig:js,userList:Ni,showAddUser:Yi,editingUser:Ji,userForm:Qi,savingUser:$i,userSearch:Oi,filteredUsers:Ki,groupFilter:ji,userPageTab:Fi,expandedGroups:Vi,addMemberGroupMap:Hi,toggleGroupExpand:Bi,removeMemberFromGroupInline:Wi,addMemberToGroupInline:Ui,changeUserGroup:Gi,statusCounts:zn,stockPool:An,poolSignals:Qn,aiResult:Ba,aiHistory:ys,groupedByDate:yr,groupedByMonth:wr,expandedDates:ws,expandedMonths:Jn,aiHistoryByStock:br,aiHistoryStockCount:kr,expandedStocks:ks,aiHistoryView:Xn,aiHistoryLoading:Oo,aiHistoryError:jo,aiHistoryTotal:Fo,aiHistoryLoadingMore:Vo,hasMoreAiHistory:Ho,loadMoreAiHistory:Ko,watchlistLoading:Bo,scoreDistribution:_r,quickEvalStock:_o,evalStrategy:xo,checklistItems:Yn,evalHistoryComparison:Gn,quickEvaluate:xr,selectedHistoryIds:bs,showAutoEvaluateSettings:xs,savingConfig:Ss,autoEvaluateConfig:Wa,autoEvaluateScope:Cs,strategyList:Xt,toggleDateExpand:Sr,toggleMonthExpand:$n,toggleSelectDate:Cr,toggleSelectMonth:qr,toggleSelectStock:Mr,toggleStockExpand:Er,registerTrendChart:Tr,selectedWatchlistCodes:_s,clearWatchlistSelection:Jo,toggleSelectWatchlist:Zo,selectAllHistory:er,selectAllWatchlist:tr,batchRemoveWatchlist:Xo,batchEvaluateSelected:vr,batchReevaluateHistory:Qo,batchAddToWatchlist:$o,viewUnit:Ul,datePickerType:Gl,dateFormat:Yl,canNavPrev:Jl,canNavNext:Ql,handleLogin:Xc,handleGuestLogin:Zc,switchView:vs,navigateDate:ms,navigateTo:at,loadDashboardData:Xa,loadConsensusData:ba,showStockDetail:fs,doAiEvaluate:Wo,doBatchEvaluate:Dr,loadAiHistory:Ea,loadLastEvaluation:Ya,lastEvalTime:Un,viewAiResult:Pr,saveAiConfig:Ec,testAiApi:Mc,exportConfig:Tc,importConfig:Pc,configSaving:uc,configChanged:L,watchlist:Co,watchlistCodes:qo,watchlistSearch:Ro,watchlistResults:zo,watchlistSearching:Ao,watchlistSort:So,sortedWatchlist:Eo,getWatchlistScore:Mo,addSearchResult:To,evaluatedCodes:Po,klineLoadedCodes:Do,markKlineLoaded:Vs,loadWatchlist:Ks,addToWatchlist:lr,removeFromWatchlist:ir,clearWatchlist:nr,searchStockForWatchlist:mr,toggleWatchlist:or,batchEvaluateWatchlist:ur,watchlistEvaluate:dr,showStockKline:rr,preloadWatchlistKline:Bs,preloadingKline:cr,realtimeQuotes:Rr,realtimeDegraded:zr,realtimeWsState:Ar,connectRealtimeQuotes:Lr,disconnectRealtimeQuotes:Ir,quoteWarningFor:Nr,realtimeQuoteColor:Or,realtimePriceText:jr,realtimePctText:Fr,realtimeRatioText:Vr,REALTIME_DEGRADED_TEXT:Hr,REALTIME_FALLBACK_TEXT:Kr,toggleSelectHistory:Go,clearSelection:Yo,deleteSingleHistory:Uo,deleteSelectedHistory:ar,saveAutoEvaluateConfig:sr,editUser:En,saveUser:Mn,deleteUser:Tn,loadUsers:za,allGroups:Cn,loadAllGroups:Ka,getGroupName:qn,toggleUserEnabled:Pn,resetUserPassword:Dn,selectedPreset:go,applyPreset:yo,onProviderChange:bo,providerInfo:ho,globalConfigDirty:vc,lastSavedTime:mc,tushareConfig:pc,tushareStatus:fc,syncingData:yc,stockCount:bc,tradeDateCount:wc,aiStatus:kc,appVersion:Us,showImportDialog:_c,rateLimitConfig:xc,rateLimitDirty:Sc,rateLimitSaving:Cc,loadRateLimit:Ja,saveRateLimit:qc,saveAllConfig:Dc,resetAllConfig:Rc,testTushareConnection:zc,syncStockData:Ac,loadTushareConfig:Gs,loadFeishuConfig:Qa,loadSystemStatus:$a,loadAiConfig:Ia,aiVendors:Zn,aiCatalog:eo,aiModelsError:to,testingAllModels:ao,savingAiModels:so,loadAiVendors:Aa,loadAiCatalog:qs,saveAiVendors:Es,saveAiModels:Es,testVendorModel:io,testAllVendorModels:no,fetchVendorModels:oo,addVendorFromCatalog:ro,addCustomVendor:co,addVendorModel:uo,removeVendorModel:vo,removeVendor:mo,toggleVendorKeyReveal:po,toggleVendorEdit:fo,checkTushareConnection:La,datasourceConfig:gc,datasourceStatus:hc,loadDatasourceConfig:Ys,saveDatasourceConfig:Lc,testDatasource:Ic,toggleDatasourceKeyReveal:Nc,toggleDatasourceEdit:Oc,strategyFilter:Zt,strategyFilterOptions:ua,strategyFilterCounts:Ut,strategyPreviewCount:In,saveStrategyFilter:Nn,filteredConsensusRank:On,currentPoolSize:jn,filteredStrategyCounts:Fn,strategyDistribution:Ln,expandedStrategies:V,poolChangeBadge:Vn,timeBarPercent:Hn,timeSinceRefresh:Kn,navigateToStrategyFilter:Bn,showUserMenu:Me,toggleSidebar:ye,groupsConfig:Re,loadGroupConfig:ne,editingGroup:Xi,groupEditForm:tn,showAddGroup:sn,addGroupForm:ln,savingGroup:nn,menuConfigDialog:Zi,memberDialog:en,groupMembers:on,addMemberUsername:rn,selectedMemberGroup:cn,subPageSectionExpanded:dn,toggleSubPageSection:un,getGroupMemberCount:vn,getMenuEnabledCount:mn,groupCount:pn,openMemberManager:fn,loadGroupMembers:gn,addMemberToGroup:hn,removeMemberFromGroup:yn,availableUsersForGroup:bn,subPageCache:an,onParentToggle:wn,openMenuConfig:kn,saveMenuConfig:_n,deleteGroupConfig:xn,createGroup:Sn,changePasswordForm:Bc,changingPassword:Wc,doChangePassword:td,showSetupWizard:Uc,setupForm:Gc,setupStep:Yc,checkSetupWizard:Jc,completeSetupWizard:Qc,chatSessions:ni,chatHistoryView:oi,selectedChatIds:ri,expandedChatDates:ci,expandedChatMonths:di,expandedChatStocks:ui,chatHistoryLoading:vi,chatHistoryError:mi,allChatSessionsFlat:pi,chatGroupedByDate:fi,chatGroupedByMonth:gi,chatGroupedByStock:hi,toggleSelectChat:yi,toggleSelectChatDate:bi,toggleSelectChatMonth:wi,toggleSelectChatStock:ki,toggleChatDateExpand:_i,toggleChatMonthExpand:xi,toggleChatStockExpand:Si,selectAllChatSessions:Ci,deleteSelectedChatSessions:qi,viewChatSession:Ei,loadChatHistory:gs,deleteChatSession:Mi,renderMarkdown:Ti,stockChatInput:Pi,stockChatMessages:Di,stockChatLoading:Ri,stockChatError:zi,askStockSend:Ai,askStockQuick:Li,onTouchStart:dl,onTouchEnd:ul,hapticFeedback:i}}})();pa.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=Sv;window.__quantComponents.Header=bm;window.__quantComponents.SubNav=Rm;window.__quantComponents.MobileNav=$m;window.__quantComponents.StockList=Dp;window.__quantComponents.TopTabs=Np;window.__quantComponents.AppIcon=pa;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Op();
