var Cd=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as qd,L as me,O as ra,Z as Ed,au as Gt,M as ge,P as xe,aW as Md,a0 as Ve,_ as Fe,F as lt,al as wt,S as ot,a1 as it,X as oa,ai as Lt,q as Ta,o as Ba,a8 as rs,r as Dt,e as tt,av as Td,Y as La,$ as Sa,R as Pd,aC as na,T as Dd,Q as ha,p as Rd,n as zd}from"./vendor-vue-DDF9zi1T.js";import{e as Ad,E as Ld,a as Id,b as Nd,c as Od,z as jd}from"./vendor-ep-VOop1zGa.js";import{C as Vd,a as Fd,W as Hd,I as Bd,S as Kd,B as Wd,F as Ud,b as Gd,c as Yd,d as Jd,e as Qd,f as $d,P as Xd,g as Zd,h as eu,i as tu,T as au,j as su,L as iu,k as lu,G as nu,U as ou,l as ru,m as cu,n as du,D as uu,o as vu,p as mu,M as pu,q as fu,R as gu,r as hu,s as yu,K as bu,t as wu,u as ku,v as _u,w as xu,x as Su,y as Cu,z as qu,A as Eu,E as Mu,H as Tu,O as Pu,J as Du,N as Ru,Q as zu,V as Au,X as Lu,Y as Iu,Z as Nu,_ as Ou,$ as ju,a0 as Vu,a1 as Fu,a2 as Hu,a3 as Bu,a4 as Ku,a5 as Wu,a6 as Uu,a7 as Gu,a8 as Yu,a9 as Ju,aa as Qu,ab as $u,ac as Xu,ad as Zu,ae as ev,af as tv,ag as av,ah as sv,ai as iv,aj as lv,ak as nv,al as ov,am as rv,an as cv,ao as dv,ap as uv,aq as vv,ar as mv,as as pv,at as fv,au as gv,av as hv,aw as yv,ax as bv,ay as wv,az as kv,aA as _v,aB as xv,aC as Sv,aD as Cv,aE as qv,aF as Ev,aG as Mv,aH as Tv,aI as Pv,aJ as Dv,aK as Rv,aL as zv,aM as Av,aN as Lv,aO as Iv,aP as Nv,aQ as Ov}from"./vendor-lucide-DidEUx9K.js";var kf=Cd((zf,Ie)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))t(f);new MutationObserver(f=>{for(const v of f)if(v.type==="childList")for(const R of v.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&t(R)}).observe(document,{childList:!0,subtree:!0});function p(f){const v={};return f.integrity&&(v.integrity=f.integrity),f.referrerPolicy&&(v.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?v.credentials="include":f.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function t(f){if(f.ep)return;f.ep=!0;const v=p(f);fetch(f.href,v)}})();window.Vue=qd;const ca=Ad||{};window.ElementPlus=ca;ca.ElMessage=ca.ElMessage||Ld;ca.ElMessageBox=ca.ElMessageBox||Id;ca.ElNotification=ca.ElNotification||Nd;ca.ElLoading=ca.ElLoading||Od;window.ElementPlusLocaleZhCn={default:jd};(function(){const a=[45,220,0,140,270,320],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},p={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(l,h,g){return"hsl("+l+", "+h+"%, "+g+"%)"}function f(l,h,g){h=h/100,g=g/100;const S=function(o){return(o+l/30)%12},P=h*Math.min(g,1-g),_=function(o){return g-P*Math.max(-1,Math.min(S(o)-3,Math.min(9-S(o),1)))};return Math.round(255*_(0))+", "+Math.round(255*_(8))+", "+Math.round(255*_(4))}function v(l){const h=f(l,75,42);return{"--primary-color":t(l,75,42),"--primary-rgb":h,"--color-primary":t(l,75,42),"--qc-primary":t(l,75,42),"--qc-primary-50":t(l,90,96),"--qc-primary-100":t(l,85,92),"--qc-primary-200":t(l,80,84),"--qc-primary-300":t(l,75,72),"--qc-primary-400":t(l,70,58),"--qc-primary-500":t(l,75,48),"--qc-primary-600":t(l,80,42),"--qc-primary-700":t(l,85,35),"--qc-primary-800":t(l,88,28),"--qc-primary-900":t(l,90,20),"--qc-primary-foreground":"#ffffff","--text-link":t(l,70,40),"--secondary-color":t(l,70,55),"--card-border":t(l,55,82),"--bg-selected":"rgba("+h+", 0.08)","--btn-primary-bg":t(l,80,32),"--btn-primary-border":t(l,80,32),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(l,82,28),"--btn-primary-hover-border":t(l,82,28),"--btn-primary-active-bg":t(l,85,24),"--btn-primary-active-border":t(l,85,24),"--btn-primary-plain-bg":"rgba("+h+", 0.08)","--btn-primary-plain-border":"rgba("+h+", 0.25)","--btn-primary-plain-color":t(l,80,32),"--btn-primary-plain-hover-bg":"rgba("+h+", 0.15)","--btn-primary-plain-hover-border":t(l,80,32),"--btn-primary-text-color":t(l,80,32),"--gradient":"linear-gradient(135deg, "+t(l,80,28)+" 0%, "+t(l,76,34)+" 50%, "+t(l,70,44)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,76,34)+" 0%, "+t(l,85,26)+" 100%)","--qc-nav-item-active":t(l,80,35),"--qc-nav-item-active-bg":t(l,85,92),"--qc-nav-item-active-border":t(l,75,48),"--qc-nav-badge-bg":t(l,85,92),"--qc-nav-badge-text":t(l,80,35),"--qc-ring":t(l,70,58)}}function R(l){const h=f(l,85,65);return{"--primary-color":t(l,85,65),"--primary-rgb":h,"--color-primary":t(l,85,65),"--qc-primary":t(l,90,65),"--qc-primary-50":t(l,50,18),"--qc-primary-100":t(l,55,22),"--qc-primary-200":t(l,55,26),"--qc-primary-300":t(l,60,30),"--qc-primary-400":t(l,65,38),"--qc-primary-500":t(l,80,52),"--qc-primary-600":t(l,90,65),"--qc-primary-700":t(l,92,72),"--qc-primary-800":t(l,90,80),"--qc-primary-900":t(l,92,88),"--qc-primary-foreground":"#101014","--text-link":t(l,85,65),"--secondary-color":t(l,70,60),"--card-border":t(l,30,25),"--bg-selected":"rgba("+h+", 0.10)","--btn-primary-bg":t(l,85,65),"--btn-primary-border":t(l,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(l,80,72),"--btn-primary-hover-border":t(l,80,72),"--btn-primary-active-bg":t(l,75,80),"--btn-primary-active-border":t(l,75,80),"--btn-primary-plain-bg":"rgba("+h+", 0.08)","--btn-primary-plain-border":"rgba("+h+", 0.25)","--btn-primary-plain-color":t(l,85,65),"--btn-primary-plain-hover-bg":"rgba("+h+", 0.15)","--btn-primary-plain-hover-border":t(l,85,65),"--btn-primary-text-color":t(l,85,65),"--gradient":"linear-gradient(135deg, "+t(l,80,35)+" 0%, "+t(l,85,50)+" 50%, "+t(l,85,65)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,85,65)+" 0%, "+t(l,80,40)+" 100%)","--qc-nav-item-active":t(l,85,65),"--qc-nav-item-active-bg":"rgba("+h+", 0.10)","--qc-nav-item-active-border":t(l,85,65),"--qc-nav-badge-bg":"rgba("+h+", 0.12)","--qc-nav-badge-text":t(l,85,65),"--qc-ring":t(l,85,65)}}function m(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function c(l){return l=parseInt(l,10),isNaN(l)?45:Math.max(0,Math.min(359,l))}function k(l,h){let g=l||"light",S=h==null||h===""?null:h;if(e[l]){const i=e[l];g=i[0],S==null&&(S=i[1])}g==="system"&&(g=m()?"dark":"light");const P=g==="dark";S=c(S??45);const _=document.documentElement;_.setAttribute("data-theme",P?"dark-pro":"gold"),_.setAttribute("data-theme-mode",P?"dark":"light");const o=P?R(S):v(S);Object.keys(o).forEach(function(i){_.style.setProperty(i,o[i])});try{localStorage.setItem("quant_theme_mode",P?"dark":"light"),localStorage.setItem("quant_theme_hue",String(S))}catch{}return{mode:P?"dark":"light",hue:S}}function n(){const l=localStorage.getItem("quant_theme");if(!l||!e[l]||localStorage.getItem("quant_theme_hue")!==null)return null;const h=e[l];return{mode:h[0],hue:h[1]}}function x(){const l=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let h=l.theme||"system",g=l.theme_hue!=null&&l.theme_hue!==""?l.theme_hue:null;const S=n();return g==null&&S&&(h=S.mode,g=S.hue),g==null&&(g=45),k(h,g)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:p,generateLightTokens:v,generateDarkTokens:R,migrateLegacyTheme:n,applyTheme:k,init:x},x()})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],p={};let t=a,f=null;function v(){return f&&typeof f=="object"&&"value"in f?f.value||a:t}function R(l,h){return e.indexOf(l)===-1?!1:(p[l]=h&&typeof h=="object"?h:{},!0)}function m(l){const h=e.indexOf(l)!==-1?l:a;return t=h,f&&typeof f=="object"&&"value"in f&&(f.value=h),typeof document<"u"&&document.documentElement.setAttribute("lang",h),t}function c(){return v()}function k(l){if(l&&typeof l=="object"&&"value"in l){f=l;const h=e.indexOf(l.value)!==-1?l.value:a;l.value=h,t=h}return t}function n(l,h){const g=v(),S=p[g]||{};let P=l in S?S[l]:null;if(P==null&&g!=="en"){const _=p.en||{};P=l in _?_[l]:null}return P==null&&(P=String(l)),h&&typeof h=="object"&&Object.keys(h).forEach(function(_){P=P.replace(new RegExp("\\{"+_+"\\}","g"),String(h[_]))}),P}const x={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:p,registerLocale:R,setLocale:m,getLocale:c,bindLocale:k,t:n};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=x),x});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let p=[];function t(g){const S=String(g||"");let P="";for(const _ of S){const o=a[_];o?P+=o.charAt(0):/[a-zA-Z0-9]/.test(_)&&(P+=_.toLowerCase())}return P}function f(g){const S=String(g||"");let P="";for(const _ of S){const o=a[_];o?P+=o:/[a-zA-Z0-9]/.test(_)&&(P+=_.toLowerCase())}return P}function v(g){return String(g||"").trim().toLowerCase()}function R(g,S){const P=(S.code||"").toLowerCase();return/^\d+$/.test(g)?P.indexOf(g)!==-1:/[\u4e00-\u9fa5]/.test(g)?(S.name||"").toLowerCase().indexOf(g)!==-1:P.indexOf(g)!==-1||(S.initials||t(S.name)).indexOf(g)!==-1||(S.pinyin||f(S.name)).indexOf(g)!==-1}function m(g){const S={},P=[],_=function(o,i,u){!o||S[o]||(S[o]=!0,P.push({code:o,name:i||o,source:u||"core",initials:t(i||o),pinyin:f(i||o)}))};return e.forEach(function(o){_(o.code,o.name,"core")}),(g||[]).forEach(function(o){_(o.code,o.name,"extra")}),P}function c(g,S){const P=v(g);if(!P||!S||!S.length)return[];const _=P.split(/[\s,，、;；]+/).filter(Boolean);return _.length?S.filter(function(o){return _.every(function(i){return R(i,o)})}).slice(0,20).map(function(o){return{code:o.code,name:o.name,source:o.source||"core"}}):[]}function k(g){Array.isArray(g)&&(p=p.concat(g))}function n(){return p.slice()}function x(){return m(p)}function l(g){return c(g,x())}const h={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:f,normalizeQuery:v,matchToken:R,buildStockIndex:m,searchStocksByQuery:c,registerExtraStocks:k,getExtraStocks:n,getStockIndex:x,searchCoreStocks:l};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=h),h});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},p=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function f(i){return i=parseInt(i,10),!isNaN(i)&&i>=0&&i<=360}const v={light:"classic-white",dark:"dark-pro"};function R(){if(typeof localStorage>"u")return{};try{const i=localStorage.getItem(a);if(!i)return{};const u=JSON.parse(i);return u&&typeof u=="object"?u:{}}catch{return{}}}function m(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(i))}catch{}}function c(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function k(){const i=Object.assign({},e,R()),u={};return p.forEach(function(V){const W=i[V];u[V]=V==="theme_hue"?f(W)?parseInt(W,10):e[V]:t[V].indexOf(W)!==-1?W:e[V]}),u}function n(i){if(p.indexOf(i)!==-1)return k()[i]}function x(i,u){return p.indexOf(i)===-1?!1:i==="theme_hue"?f(u):t[i].indexOf(u)!==-1}function l(i,u){if(!x(i,u))return!1;const V=R();return V[i]=u,m(V),c()&&g({[i]:u}),!0}function h(i){if(!i||typeof i!="object")return!1;const u={};if(Object.keys(i).forEach(function(W){x(W,i[W])&&(u[W]=i[W])}),!Object.keys(u).length)return!1;const V=Object.assign({},R(),u);return m(V),c()&&g(u),!0}function g(i){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:i})}).catch(function(){})}catch{}}async function S(){const i=k();if(!c()||typeof fetch>"u")return i;try{const u=await fetch("/api/user_config/preferences");if(u.ok){const V=await u.json();if(V.success&&V.preferences){const W=V.preferences;p.forEach(function(Y){t[Y].indexOf(W[Y])!==-1&&(i[Y]=W[Y])}),m(i)}}}catch{}return i}function P(i){const u=i||n("info_density")||"comfortable",V=t.info_density.indexOf(u)!==-1?u:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",V),V}function _(i){const u=i||n("theme")||"system";if(u==="system"){let V=!1;return typeof window<"u"&&window.matchMedia&&(V=window.matchMedia("(prefers-color-scheme: dark)").matches),V?"dark":"light"}return u==="dark"||u==="light"?u:"light"}const o={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:p,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:v,getLocal:k,getPreference:n,isValidValue:x,setPreference:l,setPreferences:h,saveToBackend:g,loadPreferences:S,resolveTheme:_,applyDensity:P};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=o),o});(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function p(){if(typeof localStorage>"u")return[];try{const k=localStorage.getItem(a);if(!k)return[];const n=JSON.parse(k);return Array.isArray(n)?n:[]}catch{return[]}}function t(k){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(k))}catch{}}function f(k,n){if(!k)return!1;let x=p().filter(function(l){return l.code!==k});return x.unshift({code:k,name:(n||"").toString().slice(0,32),ts:Date.now()}),x.length>10&&(x=x.slice(0,10)),t(x),!0}function v(){return p().slice(0,10)}function R(k){t(p().filter(function(n){return n.code!==k}))}function m(){t([])}const c={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:f,getRecentViewed:v,removeRecent:R,clearRecent:m};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=c),c});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:p,watch:t,onMounted:f,nextTick:v}=a;function R(r,q={}){if(typeof r=="string"&&r.startsWith("/api/")){const d=localStorage.getItem("quant_token");if(d)return{...q,headers:{...q.headers||{},Authorization:"Bearer "+d}}}return q}async function m(r,q={}){const d=R(r,q),K={"Content-Type":"application/json",...d.headers},re=(q.method||"GET").toUpperCase(),Q=re+"|"+r,T=async()=>{const D=await fetch(r,{...d,headers:K});if(D.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!D.ok){let H="";try{const de=await D.json();H=de&&de.detail||""}catch{}throw Object.assign(new Error(H||"请求失败（HTTP "+D.status+"）"),{status:D.status})}return await D.json()};try{const D=q.noLoading?T:()=>u(T);return re==="GET"&&!q.noDedupe?await P(Q,D):await D()}catch(D){throw D.message==="登录已过期"?D:(console.error("[apiFetch] "+r+":",D.message),Object.assign(D,{_formatted:V(D,D.status)}))}}function c(){return new Date().toISOString().split("T")[0]}function k(r){return r?r.split("T")[0]:""}function n(r,q="info",d=3e3){let K=document.querySelector(".toast-container");K||(K=document.createElement("div"),K.className="toast-container",document.body.appendChild(K));const re=document.createElement("div");re.className=`toast toast-${q}`,re.textContent=r,K.appendChild(re),setTimeout(()=>{re.classList.add("leaving"),setTimeout(()=>re.remove(),300)},d)}function x(r,q=300){let d;return function(...K){clearTimeout(d),d=setTimeout(()=>r.apply(this,K),q)}}function l(r,q=300){let d=!1;return function(...K){d||(r.apply(this,K),d=!0,setTimeout(()=>{d=!1},q))}}async function h(r,q=3e3,d=""){const K=new Promise((re,Q)=>setTimeout(()=>Q(new Error("timeout")),q));try{return await Promise.race([r,K])}catch(re){console.warn(`[timeout] ${d||"task"} failed:`,re.message)}}const g=new Map;function S(){return g.clear(),!0}function P(r,q){if(!r||typeof q!="function")return Promise.reject(new Error("bad dedupe args"));if(g.has(r))return g.get(r);const d=Promise.resolve().then(q).finally(()=>{g.delete(r)});return g.set(r,d),d}let _=0;function o(){return _=0,!0}function i(){return _}async function u(r){_++;try{return await r()}finally{_--}}function V(r,q){if(!r)return"请求失败";if(r&&typeof r=="object"&&r.detail)return String(r.detail);if(typeof r=="string"&&r)return r;if(r&&r.message){const d=String(r.message);return/Failed to fetch|fetch failed|networkerror/i.test(d)?"网络连接失败，请检查网络后重试":d}return q?"请求失败（HTTP "+q+"）":"请求失败"}function W(r,q){if(r===q)return!0;try{return JSON.stringify(r)===JSON.stringify(q)}catch{return!1}}function Y(r,q,d){const K=(r||"GET").toUpperCase();let re="";if(d)try{const Q={};Object.keys(d).sort().forEach(T=>{Q[T]=d[T]}),re=JSON.stringify(Q)}catch{re=""}return K+"|"+q+"|"+re}class J{constructor(){this._map=new Map,this._exp=new Map}get(q){const d=this._exp.get(q);if(d!=null){if(Date.now()>d){this.delete(q);return}return this._map.get(q)}}set(q,d,K){return this._map.set(q,d),this._exp.set(q,Date.now()+(K>0?K:-1)),d}delete(q){this._map.delete(q),this._exp.delete(q)}clear(){this._map.clear(),this._exp.clear()}has(q){return this.get(q)!==void 0}get size(){return this._map.size}}function Z(r){const q=new J,d=r!=null&&r>0?r:15e3;return{store:q,defaultTtl:d,get:K=>q.get(K),set:(K,re,Q)=>q.set(K,re,Q??d),delete:K=>q.delete(K),clear:()=>q.clear(),size:()=>q.size}}const I=new Set;async function E(r){const q=r&&r.cache,d=r&&r.key,K=r&&(r.fetchFn||r.fetcher),re=r&&r.ttl;if(!q||!d||typeof K!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(I.has(d))return{ok:!1,changed:!1,skipped:!0,fresh:null};I.add(d);try{const Q=q.get(d);let T;try{T=await K()}catch(H){return r.onError&&r.onError(H),{ok:!1,changed:!1,fresh:null}}const D=Q!==void 0&&!W(Q,T);return q.set(d,T,re),r.apply&&r.apply(T,Q),Q!==void 0&&(D?r.onChanged&&r.onChanged(T,Q):r.onUnchanged&&r.onUnchanged(T,Q)),{ok:!0,changed:D,fresh:T}}finally{I.delete(d)}}const z=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function U(r,q={}){if(r==null)return"";const d=q&&q.allow||z,K=new Set(d.map(D=>String(D).toUpperCase()));let re;try{re=new DOMParser().parseFromString(String(r),"text/html")}catch{return String(r).replace(/[<>&]/g,H=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[H])}const Q=re.body||re;function T(D){Array.from(D.childNodes).forEach(H=>{if(H.nodeType===1){const de=String(H.tagName).toUpperCase();if(K.has(de))Array.from(H.attributes).forEach(ee=>{const oe=ee.name.toLowerCase(),qe=(ee.value||"").trim().toLowerCase();(oe.startsWith("on")||(oe==="href"||oe==="src"||oe==="xlink:href")&&qe.startsWith("javascript:")||oe==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(qe))&&H.removeAttribute(ee.name),oe==="href"&&!/^(https?:|mailto:|#|\/)/.test(qe)&&H.removeAttribute("href")}),de==="A"&&H.setAttribute("rel","noopener noreferrer"),T(H);else{const ee=H.parentNode;for(;H.firstChild;)ee.insertBefore(H.firstChild,H);ee.removeChild(H)}}else if(H.nodeType!==3){if(H.nodeType===8)H.parentNode&&H.parentNode.removeChild(H);else if(H.nodeType===4){const de=re.createTextNode(H.nodeValue||"");H.parentNode&&H.parentNode.replaceChild(de,H)}}})}return T(Q),Q.innerHTML}const se="/api/openapi",$="/api/market/ws/quotes",ie=1,N=2.5,F="数据不可达",A="实时不可用，不刷新";function w(){const r=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",q=typeof location<"u"?location.host:"localhost:8001";return r+"//"+q+$}function M(r,q){if(!r)return null;const d=q||{riseSpeed:ie,volumeRatio:N},K=d.riseSpeed!=null?d.riseSpeed:ie,re=d.volumeRatio!=null?d.volumeRatio:N,Q=parseFloat(r.rise_speed);if(!isNaN(Q)&&Math.abs(Q)>K)return Q>0?"涨速预警":"跌速预警";const T=parseFloat(r.volume_ratio);return!isNaN(T)&&T>re?"放量预警":null}function le(r){const q=Number(r);return r==null||isNaN(q)?null:q}const y={apiFetch:m,withAuthHeaders:R,getToday:c,formatDate:k,withTimeout:h,showToast:n,debounce:x,throttle:l,resetInFlight:S,dedupeRequest:P,resetLoading:o,loadingCount:i,withLoading:u,formatApiError:V,jsonEquals:W,makeCacheKey:Y,CacheStore:J,createTtlCache:Z,silentRefresh:E,sanitizeHtml:U,OPENAPI_ROUTE_BASE:se,REALTIME_WS_PATH:$,WARN_RISE_SPEED_THRESHOLD:ie,WARN_VOLUME_RATIO_THRESHOLD:N,REALTIME_DEGRADED_TEXT:F,REALTIME_FALLBACK_TEXT:A,buildRealtimeWsUrl:w,checkQuoteWarning:M,quoteFmt:{price:function(r){const q=le(r);return q===null?"--":q.toFixed(2)},pct:function(r){const q=le(r);return q===null?"--":(q>0?"+":"")+q.toFixed(2)+"%"},num:function(r){const q=le(r);return q===null?"--":q.toFixed(2)},color:function(r){const q=r?r.change_pct:null,d=le(q);return d===null?"":d>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=y),typeof Ie<"u"&&Ie.exports&&(Ie.exports=y)})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(x,l){return x+"/"+l}function p(x,l,h,g){var S=x[l]||[],P=S.findIndex(function(i){return i.subPage===h});if(P!==-1)return{groups:x,activeKey:e(l,h)};var _=S.concat([{subPage:h,title:g}]);_.length>a&&(_=f(_));var o=Object.assign({},x,t({},l,_));return{groups:o,activeKey:e(l,h)}}function t(x,l,h){return x[l]=h,x}function f(x){if(x.length<=a)return x;var l=x.length>1?1:0;return x.filter(function(h,g){return g!==l})}function v(x,l,h,g){var S=x[l]||[],P=S.findIndex(function(u){return u.subPage===h});if(P===-1)return{groups:x,nextActive:null};var _=S.filter(function(u){return u.subPage!==h}),o=Object.assign({},x,t({},l,_)),i=null;return h===g&&(_[P]?i=_[P].subPage:_[P-1]?i=_[P-1].subPage:i=null),{groups:o,nextActive:i}}function R(x){return x&&x.length?x[0]:""}function m(x,l){return x[l]||[]}function c(x,l,h){var g=x[l]||[],S=g.filter(function(_){return _.subPage===h}),P=Object.assign({},x,t({},l,S));return{groups:P,activeKey:S.length?e(l,S[0].subPage):null}}function k(x,l){var h=Object.assign({},x,t({},l,[]));return{groups:h,activeKey:null}}function n(x,l,h,g){var S=(x[l]||[]).slice();if(h<0||h>=S.length)return{groups:x};var P=S.splice(h,1)[0];return S.splice(Math.max(0,Math.min(g,S.length)),0,P),{groups:Object.assign({},x,t({},l,S))}}return{MAX_TABS:a,openTab:p,closeTab:v,getDefaultTab:R,tabsOf:m,evictOldest:f,closeOthers:c,closeAll:k,reorder:n,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var ni=typeof Ie=="object"&&Ie.exports?Ie.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;ni&&(window.__quantModules.tabsCore=ni)}(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",p="nav_mode";function t(n){return a.indexOf(n)!==-1?n:e}function f(n){return t(n)==="subnav"}function v(n){return t(n)==="tree"}function R(n){return t(n)==="toptab"}function m(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function c(){var n=m(),x=e;if(n)try{x=t(n.getItem(p))}catch{}return{navMode:x}}function k(n){var x=m();if(!(!x||!n))try{n.navMode!==void 0&&x.setItem(p,t(n.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:f,treeChildrenVisible:v,topTabsVisible:R,readPrefs:c,writePrefs:k}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var oi=typeof Ie=="object"&&Ie.exports?Ie.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;oi&&(window.__quantModules.navModeCore=oi)}(function(){function e(w,M){if(!Array.isArray(w)||w.length<=M)return w;const le=[],G=w.length/M*2;for(let y=0;y<w.length;y+=G){const r=Math.floor(y),q=Math.min(w.length,Math.ceil(y+G));let d=1/0,K=-1,re=-1/0,Q=-1;for(let T=r;T<q;T++){const D=w[T];if(!D)continue;const H=D[3]!=null?Number(D[3]):1/0,de=D[4]!=null?Number(D[4]):-1/0;H<d&&(d=H,K=T),de>re&&(re=de,Q=T)}K>=0&&le.push(w[K]),Q>=0&&Q!==K&&le.push(w[Q])}return le}let p=null;function t(){return typeof echarts<"u"?Promise.resolve():(p||(p=new Promise(function(w,M){const le=document.createElement("script");le.src="/static/lib/echarts.min.js",le.async=!0,le.onload=function(){typeof echarts<"u"?w():M(new Error("echarts 加载后未定义"))},le.onerror=function(){M(new Error("echarts.min.js 加载失败"))},document.head.appendChild(le)})),p)}function f(){const w=getComputedStyle(document.documentElement);return{primary:w.getPropertyValue("--primary-color").trim()||"#2563eb",up:w.getPropertyValue("--color-up").trim()||"#43e97b",down:w.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:w.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:w.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const v=w=>(getComputedStyle(document.documentElement).getPropertyValue(w)||"").trim();function R(){return{up:v("--color-up")||"#E63946",down:v("--color-down")||"#2E7D32",neutral:v("--color-neutral")||"#43a047",accent:v("--color-accent")||"#F59E0B",risk:v("--color-danger")||"#C62828",warn:v("--color-warning")||"#FF9800",success:v("--color-success")||"#4CAF50",primary:v("--qc-primary-600")||"#b8922a",grid:v("--chart-split")||"#e2e8f0",axis:v("--chart-axis")||"#cbd5e1",bg:v("--chart-bg")||"transparent",series:[v("--qc-primary-600")||"#b8922a",v("--qc-primary-500")||"#c49b2e",v("--qc-primary-700")||"#8f6f1f",v("--qc-primary-400")||"#d4b352",v("--color-up")||"#E63946",v("--color-down")||"#2E7D32",v("--color-accent")||"#F59E0B",v("--qc-neutral-400")||"#b8ae9f"]}}function m(w,M,le,G=!1,y=!1){if(!M||M.length===0)return;M.length>2e3&&(M=e(M,2e3));const r=M.map(De=>typeof De[0]=="string"&&De[0].indexOf("-")>=0?De[0]:De[0].slice(0,4)+"-"+De[0].slice(4,6)+"-"+De[0].slice(6,8)),q=f(),d={ma5:v("--color-accent")||"#F59E0B",ma10:v("--color-primary")||"#3B82F6",ma20:v("--color-warning")||"#8B5CF6",ma60:v("--color-success")||"#10B981"},K=M.map(De=>[De[1],De[2],De[3],De[4]]),re=M.map(De=>De[5]),Q=M.map(De=>De[6]),T=M.map(De=>De[7]),D=M.map(De=>De[8]),H=M.map(De=>De[9]),de=M.map(De=>De[10]),oe=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",qe=q.borderLight,Le={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:q.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:oe,borderColor:qe,textStyle:{color:q.textSecondary,fontSize:12},formatter:function(De){if(!De||!De.length)return"";const Ee=De[0].dataIndex,ae=M[Ee];if(!ae)return"";const we=w.getOption(),Re=we.legend&&we.legend[0]&&we.legend[0].selected||{},ne=Ne=>Re[Ne]!==!1,X=Ne=>Ne==null||isNaN(Ne)?"--":Number(Ne).toFixed(2),fe=Ne=>Ne==null||isNaN(Ne)?"--":(Number(Ne)/1e4).toFixed(2)+"万手",Me=['<div style="font-weight:600;color:'+q.textSecondary+';">'+r[Ee]+"</div>"];return Me.push("开: "+X(ae[1])+"　收: "+X(ae[2])),Me.push("低: "+X(ae[3])+"　高: "+X(ae[4])),Me.push("成交量: "+fe(ae[5])),ae[6]!=null&&ne("MA5")&&Me.push("MA5: "+X(ae[6])),ae[7]!=null&&ne("MA10")&&Me.push("MA10: "+X(ae[7])),ae[8]!=null&&ne("MA20")&&Me.push("MA20: "+X(ae[8])),ae[9]!=null&&ne("MA60")&&Me.push("MA60: "+X(ae[9])),ae[10]!=null&&Me.push("VOL_MA5: "+fe(ae[10])),Me.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:y?0:8,textStyle:{color:q.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:y?30:40,height:y?"48%":"52%"},{left:56,right:16,top:y?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:r,boundaryGap:!0,axisLine:{lineStyle:{color:qe}},axisLabel:{color:q.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:r,axisLabel:{show:!1},axisLine:{lineStyle:{color:qe}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:qe}},axisLabel:{color:q.textSecondary,fontSize:11,formatter:function(De){const Ee=Math.round(De*100)/100;return Ee%1===0?String(Math.round(Ee)):Ee.toFixed(2)}},splitLine:{lineStyle:{color:qe,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:qe}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,M.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:qe,textStyle:{color:q.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:K,itemStyle:{color:q.up,color0:q.down,borderColor:q.up,borderColor0:q.down}},{name:"MA5",type:"line",data:Q,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma5}},{name:"MA10",type:"line",data:T,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma10}},{name:"MA20",type:"line",data:D,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma20}},{name:"MA60",type:"line",data:H,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:re,itemStyle:{color:function(De){const Ee=De.dataIndex;return M[Ee][1]>=M[Ee][2]?q.up:q.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:de,smooth:!0,symbol:"none",lineStyle:{width:1,color:d.ma5,type:"dashed"}}]};w.setOption(Le,!0)}const c=new Map;function k(w){return c.has(w)||c.set(w,{chart:null,cache:null}),c.get(w)}async function n(w,M,le,G=!1,y={}){await t();const r=k(w);let q=document.getElementById(w);if(!q)for(let d=0;d<16&&(await new Promise(K=>setTimeout(K,50)),q=document.getElementById(w),!q);d++);if(!q)throw new Error("无法找到图表容器: "+w);if(q.offsetWidth<50&&(q.style.minWidth="600px",q.style.minHeight="300px"),!r.chart||r.chart.isDisposed()||r.chart.getDom()!==q){if(r.chart)try{r.chart.dispose()}catch{}r.chart=echarts.init(q),r.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const d=y.onLegend;typeof d=="function"&&r.chart.on("legendselectchanged",K=>{K&&K.selected&&d(K.selected)})}return m(r.chart,M,le,G,!!y.isMobile),r.cache={data:M,period:le,isIndex:G,isMobile:!!y.isMobile},r.chart}function x(w){const M=c.get(w);M&&M.chart&&(M.chart.dispose(),M.chart=null,M.cache=null)}function l(w){const M=c.get(w);M&&M.chart&&M.chart.resize()}function h(w,M){const le=c.get(w),G=le&&le.chart;if(G)if(M<=0)G.dispatchAction({type:"dataZoom",start:0,end:100});else{const q=Math.max(0,(60-M)/60*100);G.dispatchAction({type:"dataZoom",start:Math.round(q),end:100})}}function g(w){var G,y,r;const M=c.get(w);if(!M||!M.chart||!M.cache||M.chart.isDisposed())return;const le=((r=(y=(G=M.chart.getOption())==null?void 0:G.legend)==null?void 0:y[0])==null?void 0:r.selected)||null;m(M.chart,M.cache.data,M.cache.period,M.cache.isIndex,M.cache.isMobile),le&&M.chart.setOption({legend:{selected:le}})}function S(w){const M=c.get(w);return M&&M.chart}const P=new Map;function _(w){return P.has(w)||P.set(w,{chart:null,cache:null}),P.get(w)}function o(w,M,le={}){return t().then(function(){const G=_(w),y=document.getElementById(w);if(!y)throw new Error("无法找到图表容器: "+w);if(y.offsetWidth<50&&(y.style.minWidth="600px",y.style.minHeight="300px"),G.chart&&G.chart.getDom&&G.chart.getDom()!==y){try{G.chart.dispose()}catch{}G.chart=null}G.chart||(G.chart=echarts.init(y),G.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),G.resizeBound||(G.resizeBound=!0,window.addEventListener("resize",function(){G.chart&&!G.chart.isDisposed()&&G.chart.resize()})));const r=typeof M=="function"?M():M;return G.chart.setOption(r,!0),G.cache={buildOption:M,key:le.key||""},G.chart})}function i(w){var y,r,q;const M=P.get(w);if(!M||!M.chart||!M.cache||M.chart.isDisposed())return;const le=((q=(r=(y=M.chart.getOption())==null?void 0:y.legend)==null?void 0:r[0])==null?void 0:q.selected)||null,G=typeof M.cache.buildOption=="function"?M.cache.buildOption():M.cache.buildOption;M.chart.setOption(G,!0),le&&G&&G.legend&&G.legend.selected&&M.chart.setOption({legend:{selected:le}})}function u(w){const M=P.get(w);M&&M.chart&&(M.chart.dispose(),M.chart=null,M.cache=null)}function V(w){const M=P.get(w);M&&M.chart&&M.chart.resize()}const W=new Map;function Y(w){return W.has(w)||W.set(w,{chart:null,cache:null}),W.get(w)}function J(w,M,le={}){return t().then(function(){const G=Y(w),y=document.getElementById(w);if(!y)return null;if(y.offsetWidth<50&&(y.style.minWidth="600px",y.style.minHeight="300px"),G.chart&&G.chart.getDom&&G.chart.getDom()!==y){try{G.chart.dispose()}catch{}G.chart=null}G.chart||(G.chart=echarts.init(y),G.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),G.resizeBound||(G.resizeBound=!0,window.addEventListener("resize",function(){G.chart&&!G.chart.isDisposed()&&G.chart.resize()})));const r=typeof M=="function"?M():M;return G.chart.setOption(r,!0),G.cache={buildOption:M,key:le.key||""},G.chart})}function Z(w){const M=W.get(w);if(!M||!M.chart||!M.cache||M.chart.isDisposed())return;const le=typeof M.cache.buildOption=="function"?M.cache.buildOption():M.cache.buildOption;M.chart.setOption(le,!0)}function I(w){const M=W.get(w);M&&M.chart&&(M.chart.dispose(),M.chart=null,M.cache=null)}function E(w){const M=W.get(w);M&&M.chart&&M.chart.resize()}const z=J,U=Z,se=I,$=E;function ie(w,M,le,G){G=G||{};const y=G.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[G.navLabel||"净值",G.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:le||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:G.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:G.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:G.navLabel||"净值",type:"line",data:w||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:G.ddLabel||"回撤",type:"line",yAxisIndex:1,data:M||[],showSymbol:!1,areaStyle:{opacity:.25,color:y},lineStyle:{color:y,type:"solid",width:1.5}}]}}function N(w,M){M=M||{};const le=M.bandColor||"#1976d2",G=w&&w.dates||[],y=w&&w.median||[],r=w&&w.q25||[],q=w&&w.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[M.medianLabel||"中位IC",M.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:G,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:M.medianLabel||"中位IC",type:"line",data:y,showSymbol:!1,lineStyle:{width:2,color:le}},{name:M.bandLabel||"25–75分位",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:le,opacity:.12}},{name:"_bandH",type:"line",data:q.map(function(d,K){return d-(r[K]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:le,opacity:.12}}]}}function F(w,M){M=M||{};const le=M.color||"#7c3aed",G=w&&w.dates||[],y=w&&w.value||[],r=w&&w.upper||[],q=w&&w.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[M.valueLabel||"情绪",M.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:G,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:M.valueLabel||"情绪",type:"line",data:y,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:le}},{name:M.bandLabel||"过热/冰点带",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:le,opacity:.1}},{name:"_bandL",type:"line",data:q.map(function(d,K){return(r[K]||0)-d}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:le,opacity:.1}}]}}const A={renderKlineChart:m,renderKlineTo:n,disposeKline:x,resizeKline:l,zoomKline:h,redrawKline:g,getKlineChart:S,renderBacktestTo:o,redrawBacktest:i,disposeBacktest:u,resizeBacktest:V,renderPortfolioTo:J,redrawPortfolio:Z,disposePortfolio:I,resizePortfolio:E,renderSimpleChartTo:z,redrawSimpleChart:U,disposeSimpleChart:se,resizeSimpleChart:$,buildNavDrawdownOption:ie,buildIcBandOption:N,buildSentimentBandOption:F,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:R,init(){return{renderKlineChart:m,renderKlineTo:n,disposeKline:x,resizeKline:l,zoomKline:h,redrawKline:g,getKlineChart:S,renderBacktestTo:o,redrawBacktest:i,disposeBacktest:u,resizeBacktest:V,renderPortfolioTo:J,redrawPortfolio:Z,disposePortfolio:I,resizePortfolio:E,renderSimpleChartTo:z,redrawSimpleChart:U,disposeSimpleChart:se,resizeSimpleChart:$,buildNavDrawdownOption:ie,buildIcBandOption:N,buildSentimentBandOption:F,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:R}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=A),typeof Ie<"u"&&Ie.exports&&(Ie.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:ie,buildIcBandOption:N,buildSentimentBandOption:F})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:p}=Vue,{configChanged:t,consensus:f}=a,v=e(null),R=e(""),m=e(null),c=e([]),k=e([]),n=e([]),x=e([]),l=e([]),h=e([]),g=e({});function S(he){const be=l.value.indexOf(he);be>=0?l.value.splice(be,1):l.value.push(he)}const P=e("date"),_=e([]),o=e(!1),i=e(!1),u=e("watchlist"),V=e([]),W=e({vendors:[]}),Y=e(""),J=e(!1),Z=e(!1);function I(he){if(!he)return"";const be=String(he),Pe=be.length;if(Pe<=4)return be[0]+"*".repeat(Pe-1);const ze=Pe<=8?2:4;return be.slice(0,ze)+"*".repeat(Pe-ze-ze)+be.slice(-ze)}async function E(he){let be;try{be=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const ze=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:be,target:he})})).json();if(ze.success)return ze.secret;ElementPlus.ElMessage.error(ze.message||"查看失败")}catch(Pe){ElementPlus.ElMessage.error("查看失败: "+Pe.message)}return null}async function z(he){if(he._revealed){he._revealed=!1,he._masked=I(he.api_key);return}const be=await E("ai:"+he.vendor_key);be!==null&&(he.api_key=be,he._revealed=!0)}async function U(he){if(he._editing){he._editing=!1,he._revealed=!1,he.api_key&&(he._masked=I(he.api_key));return}he._editing=!0;try{const Pe=await(await fetch("/api/ai/models?full=1")).json();if(Pe.success){const ze=(Pe.data.vendors||[]).find(Ge=>Ge.vendor_key===he.vendor_key);ze&&(he.api_key=ze.api_key||"")}else Pe.message&&ElementPlus.ElMessage.error(String(Pe.message))}catch(be){ElementPlus.ElMessage.error("解锁失败: "+be.message)}}function se(he){const{_fetching:be,_testing:Pe,_revealed:ze,_masked:Ge,_editing:Xe,...Ye}=he;return Xe||(Ye.api_key=""),Ye.models=(he.models||[]).map(ht=>{const{_testing:xt,testResult:ft,...Ze}=ht;return Ze}),Ye}async function $(){var he;try{Y.value="";const be=await fetch("/api/ai/models");if(be.status===401){Y.value="请先登录后再查看模型配置";return}if(!be.ok){Y.value=`服务器错误 (${be.status})`;return}const Pe=await be.json();Pe.success?(V.value=(((he=Pe.data)==null?void 0:he.vendors)||[]).map(ze=>({...ze,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:ze.api_key||"",models:(ze.models||[]).map(Ge=>({...Ge,_testing:!1,testResult:void 0}))})),Y.value=""):Y.value=Pe.message||"加载失败"}catch(be){Y.value="网络错误: "+be.message}}async function ie(){try{const be=await(await fetch("/api/ai/catalog")).json();be.success&&be.data&&(W.value=be.data)}catch(he){console.warn("AI 厂商目录加载失败",he)}}async function N(){Z.value=!0;try{const Pe=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:V.value.map(se)})})).json();Pe.success?(V.value.forEach(ze=>{ze._editing=!1,ze._revealed=!1,ze.api_key&&(ze._masked=I(ze.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Pe.message||"保存失败")}catch(he){ElementPlus.ElMessage.error("保存失败: "+he.message)}Z.value=!1}async function F(he,be){be._testing=!0;try{const ze=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:he.vendor_key,model:be.name,base_url:he.base_url,api_key:he.api_key,timeout:he.timeout})});be.testResult=await ze.json()}catch(Pe){be.testResult={success:!1,message:Pe.message}}be._testing=!1}async function A(){J.value=!0;for(const he of V.value)for(const be of he.models||[])he.api_key?await F(he,be):be.testResult={success:!1,message:"未配置 API Key"};J.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function w(he){he._fetching=!0;try{const ze=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:he.vendor_key,base_url:he.base_url,api_key:he.api_key,timeout:he.timeout})})).json();if(ze.success&&Array.isArray(ze.models)){const Ge=new Set((he.models||[]).map(Xe=>Xe.name));for(const Xe of ze.models)Ge.has(Xe)||he.models.push({name:Xe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${ze.models.length} 个模型`)}else ElementPlus.ElMessage.error(ze.message||"获取模型列表失败")}catch(be){ElementPlus.ElMessage.error("获取模型列表失败: "+be.message)}he._fetching=!1}function M(he){const be=(W.value.vendors||[]).find(Pe=>Pe.vendor_key===he);if(be){if(V.value.some(Pe=>Pe.vendor_key===he)){ElementPlus.ElMessage.warning("该厂商已存在");return}V.value.push({vendor_key:be.vendor_key,name:be.name,kind:be.kind,base_url:be.base_url,api_key:"",timeout:60,tier:be.tier||"",website:be.website||"",locked:!!be.locked,models:(be.models||[]).map(Pe=>({name:Pe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${be.name}」，配置 API Key 后保存生效`)}}function le(){V.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function G(he){he.models||(he.models=[]),he.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function y(he,be){const Pe=he.models[be];if(!(!Pe||Pe.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Pe.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}he.models.splice(be,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function r(he){if(he.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(he.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const be=V.value.indexOf(he);be>=0&&V.value.splice(be,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const q=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),d=e(!1),K=e(""),re=e(0),Q=e(""),T=e(!1),D=e(""),H=e(!1),de=e(0),ee=e(0),oe=e(""),qe=e({}),Le=e({}),De=e({}),Ee=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),ae=e("manual"),we=p(()=>{const he={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return he[Ee.value.provider]||he.custom}),Re={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function ne(he){if(he==="manual")return;const be=Re[he];be&&(Ee.value.endpoint=be.endpoint,Ee.value.model=be.model,t.value=!0)}function X(){if(t.value=!0,Ee.value.provider!=="codingplan"&&Ee.value.provider!=="custom"){const he=we.value;he&&(Ee.value.endpoint=he.endpoint,Ee.value.model=he.model)}else Ee.value.provider==="codingplan"&&(Ee.value.endpoint||(Ee.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),Ee.value.model||(Ee.value.model="ark-code-latest"))}let fe=null;const Me=8;async function Ne(){fe&&(fe.abort(),fe=null);const be=(f.value||[]).filter(Ye=>Ye.status==="new"||Ye.status==="out").filter(Ye=>!g.value[Ye.code]);if(be.length===0)return;const Pe=new AbortController;fe=Pe;let ze=0;const Ge=async()=>{for(;ze<be.length;){const Ye=be[ze++];try{const xt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ye.code,stock_name:Ye.name,event_type:Ye.status==="new"?"enter":"exit"}),signal:Pe.signal})).json();xt.success&&xt.signal&&(g.value={...g.value,[Ye.code]:xt.signal})}catch(ht){if(ht.name==="AbortError")return}}},Xe=Array.from({length:Math.min(Me,be.length)},()=>Ge());await Promise.all(Xe)}function Ke(){fe&&(fe.abort(),fe=null)}let rt=0;async function dt(he){const be=++rt;try{const ze=await(await fetch(`/api/ai/history/last/${encodeURIComponent(he)}`)).json();if(be!==rt)return;ze.success&&ze.data&&(v.value=ze.data,R.value=ze.data.evaluate_time,Qe(he,ze.data),Et(ze.data))}catch{}}async function Qe(he,be){var Pe,ze;try{const Xe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(he)}&limit=2`)).json();if(Xe.success&&Xe.data&&Xe.data.length>=2){const Ye=Xe.data[1],ht=((Pe=be.result)==null?void 0:Pe.total_score)||0,xt=((ze=Ye.result)==null?void 0:ze.total_score)||0;ht>0&&xt>0&&(m.value={prevScore:xt,currScore:ht,diff:ht-xt})}}catch(Ge){console.warn("[refreshStrategyData] autoPoll failed:",Ge)}}function Et(he){var Ge;const be=((Ge=he.result)==null?void 0:Ge.dimensions)||{},Pe=[],ze=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Xe of ze){const Ye=be[Xe.key];Ye!==void 0&&Pe.push({icon:Ye>=Xe.good?"check-circle-2":Ye>=Xe.warn?"alert-triangle":"x-circle",label:`${Xe.label} ${Math.round(Ye)}分`})}c.value=Pe}return{aiResult:v,lastEvalTime:R,evalHistoryComparison:m,checklistItems:c,aiHistory:k,selectedHistoryIds:n,expandedDates:x,expandedMonths:l,expandedStocks:h,poolSignals:g,toggleMonthExpand:S,aiHistoryView:P,selectedWatchlistCodes:_,showAutoEvaluateSettings:o,savingConfig:i,autoEvaluateScope:u,aiVendors:V,aiCatalog:W,aiModelsError:Y,testingAllModels:J,savingAiModels:Z,loadAiVendors:$,loadAiCatalog:ie,saveAiVendors:N,saveAiModels:N,testVendorModel:F,testAllVendorModels:A,fetchVendorModels:w,addVendorFromCatalog:M,addCustomVendor:le,addVendorModel:G,removeVendorModel:y,removeVendor:r,toggleVendorKeyReveal:z,toggleVendorEdit:U,autoEvaluateConfig:q,aiLoading:d,aiEvalStage:K,aiEvalElapsed:re,aiEvalError:Q,showBatchEvaluate:T,batchStocks:D,batchRunning:H,batchTotal:de,batchCompleted:ee,batchCurrent:oe,batchStatuses:qe,batchResults:Le,batchEvalErrors:De,aiConfig:Ee,selectedPreset:ae,providerInfo:we,aiPresets:Re,applyPreset:ne,onProviderChange:X,fetchPoolSignals:Ne,cancelPoolSignals:Ke,loadLastEvaluation:dt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:p,watch:t}=Vue,{configChanged:f,aiConfig:v,aiLoading:R,feishuConfig:m,currentTheme:c,changeTheme:k,autoEvaluateConfig:n,currentUser:x,strategyFilter:l,applyTheme:h,dashboardData:g,lastRefreshTime:S,saveAiModels:P}=a,_=e(!1),o=e(!1),i=e(null),u=e(null),V=e(null),W=e(null),Y=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),J=e("disconnected"),Z=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),I=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),E=e(!1),z=e(null),U=e(null),se=e("pending"),$=e("..."),ie=e(!1),N=e({api_limit:600}),F=e(!1),A=e(!1);async function w(){try{const X=await(await fetch("/api/system/rate-limit")).json();X.success&&(N.value=X.data)}catch(ne){console.warn("loadRateLimit failed:",ne)}}async function M(){A.value=!0;try{const X=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N.value)})).json();X.success?(F.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(X.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{A.value=!1}}t(()=>[v.value.provider,v.value.apiKey,v.value.endpoint,v.value.model],()=>{f.value=!0},{deep:!0});async function le(){_.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(v.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)})).json()).success?(f.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ne){localStorage.setItem("quant_ai_config",JSON.stringify(v.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ne)}finally{_.value=!1}}async function G(){R.value=!0;try{const X=await(await fetch("/api/ai/test")).json();X.success?ElementPlus.ElMessage.success(X.message||"API连接正常"):ElementPlus.ElMessage.error(X.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{R.value=!1}}function y(){const ne={ai:v.value,feishu:m.value,theme:c.value,export_time:new Date().toISOString()},X=new Blob([JSON.stringify(ne,null,2)],{type:"application/json"}),fe=URL.createObjectURL(X),Me=document.createElement("a");Me.href=fe,Me.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Me.click(),URL.revokeObjectURL(fe),ElementPlus.ElMessage.success("配置已导出")}function r(ne){const X=ne.target.files[0];if(!X)return;const fe=new FileReader;fe.onload=async Me=>{try{const Ne=JSON.parse(Me.target.result);Ne.ai&&(v.value={...v.value,...Ne.ai},await le()),Ne.feishu&&(Object.assign(m.value,Ne.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ne.feishu)})),Ne.theme&&(c.value=Ne.theme,k(Ne.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},fe.readAsText(X),ne.target.value=""}async function q(){_.value=!0;const ne=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:Y.value,feishu:m.value,ai:v.value,rate_limit:N.value,auto_evaluate:n.value,theme:c.value}})}).then(Ne=>["userConfig",Ne.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y.value)}).then(Ne=>["tushare",Ne.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:Z.value})}).then(Ne=>["datasource",Ne.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)}).then(Ne=>["feishu",Ne.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)}).then(Ne=>["ai",Ne.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N.value)}).then(Ne=>["rateLimit",Ne.ok]),P().then(()=>["aiModels",!0],()=>["aiModels",!1])],X=await Promise.allSettled(ne),fe=X.filter(Ne=>Ne.status==="fulfilled"&&Ne.value[1]).length,Me=X.filter(Ne=>Ne.status==="rejected"||Ne.status==="fulfilled"&&!Ne.value[1]).length;F.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(l.value.selected)),localStorage.setItem("quant_strategy_filter_mode",l.value.mode),x.value&&fetch(`/api/users/${x.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:c.value})}).catch(()=>{}),o.value=!1,i.value=new Date().toLocaleString("zh-CN"),_.value=!1,Me>0&&console.error(`[saveAllConfig] ${fe}/${fe+Me} 项保存成功，${Me} 项失败`)}async function d(){try{const X=await(await fetch("/api/user_config/config")).json();if(X.success&&X.config){const fe=X.config;fe.tushare&&(Y.value={...Y.value,...fe.tushare}),fe.feishu&&(m.value={...m.value,...fe.feishu}),fe.ai&&(v.value={...v.value,...fe.ai}),fe.rate_limit&&(N.value={...N.value,...fe.rate_limit}),fe.auto_evaluate&&(n.value={...n.value,...fe.auto_evaluate}),fe.theme&&!localStorage.getItem("quant_theme")&&h(fe.theme)}o.value=!1,F.value=!1}catch(ne){console.error("[resetAllConfig] 重新加载配置失败:",ne),o.value=!1}}async function K(){J.value="testing";try{const X=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(J.value=X.success?"connected":"disconnected",X.success){const fe=X.data_count?` (获取到 ${X.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+fe)}else ElementPlus.ElMessage.error(X.message||"连接失败")}catch{J.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function re(){try{const X=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();J.value=X.success?"connected":"disconnected"}catch{J.value="disconnected"}}async function Q(){var ne;E.value=!0;try{const fe=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();fe.success?(z.value=parseInt(((ne=fe.message.match(/\d+/))==null?void 0:ne[0])||"0"),ElementPlus.ElMessage.success(fe.message)):ElementPlus.ElMessage.error(fe.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{E.value=!1}}async function T(){try{const X=await(await fetch("/api/market/tushare/config")).json();X.success&&X.config&&(Y.value={...Y.value,...X.config})}catch(ne){console.warn("loadTushareConfig failed:",ne)}}function D(ne){if(!ne)return"";const X=String(ne),fe=X.length;if(fe<=4)return X[0]+"*".repeat(fe-1);const Me=fe<=8?2:4;return X.slice(0,Me)+"*".repeat(fe-Me-Me)+X.slice(-Me)}async function H(ne){let X;try{X=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Me=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:X,target:ne})})).json();if(Me.success)return Me.secret;ElementPlus.ElMessage.error(Me.message||"查看失败")}catch(fe){ElementPlus.ElMessage.error("查看失败: "+fe.message)}return null}async function de(ne){const X=Z.value[ne];if(!X)return;if(X._revealed){X._revealed=!1,X._masked=D(X.token);return}const fe=await H(ne);fe!==null&&(X.token=fe,X._revealed=!0)}async function ee(ne){const X=Z.value[ne];if(X){if(X._editing){X._editing=!1,X._revealed=!1,X.token&&(X._masked=D(X.token));return}X._editing=!0;try{const fe=await H(ne);if(fe===null){X._editing=!1;return}X.token=fe,X._revealed=!0}catch(fe){X._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+fe.message)}}}async function oe(){try{const X=await(await fetch("/api/market/datasource/config")).json();if(X.success&&X.config&&X.config.sources){const fe=X.config.sources,Me=Ne=>{const Ke={...Z.value[Ne],...fe[Ne]||{}};return Ke._editing=!1,Ke._revealed=!1,Ke._masked=Ke.token||"",Ke.token="",Ke};Z.value={sxsc_tushare:Me("sxsc_tushare"),tushare:Me("tushare"),akshare:{...Z.value.akshare,...fe.akshare||{}}}}try{const Me=await(await fetch("/api/market/datasource/status")).json();if(Me.success&&Me.status)for(const[Ne,Ke]of Object.entries(Me.status))I.value[Ne]=Ke.connected?"connected":"disconnected"}catch{}}catch(ne){console.warn("loadDatasourceConfig failed:",ne)}}async function qe(){try{const ne={};for(const[X,fe]of Object.entries(Z.value)){const{_revealed:Me,_masked:Ne,_editing:Ke,...rt}=fe;!Ke&&X!=="akshare"&&(rt.token=""),ne[X]=rt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ne})}),o.value=!0}catch(ne){console.warn("saveDatasourceConfig failed:",ne)}}async function Le(ne){I.value[ne]="testing";try{const X=Z.value[ne];X&&X._editing&&await qe();const Me=await(await fetch(`/api/market/datasource/test/${ne}`,{method:"POST"})).json();I.value[ne]=Me.success?"connected":"disconnected",Me.success?ElementPlus.ElMessage.success(`${ne} 连接成功`):ElementPlus.ElMessage.error(`${ne}: ${Me.message}`)}catch{I.value[ne]="disconnected",ElementPlus.ElMessage.error(`${ne} 连接失败`)}}async function De(){try{const X=await(await fetch("/api/feishu/config")).json();X&&typeof X=="object"&&(m.value={...m.value,...X},u.value=JSON.parse(JSON.stringify(m.value)))}catch(ne){console.warn("loadFeishuConfig failed:",ne)}}async function Ee(){try{const X=await(await fetch("/api/ai/config")).json();if(X.success&&X.data)v.value={...v.value,...X.data};else{const fe=localStorage.getItem("quant_ai_config");fe&&(v.value=JSON.parse(fe))}}catch{const X=localStorage.getItem("quant_ai_config");X&&(v.value=JSON.parse(X))}}async function ae(){try{const X=await(await fetch("/api/user_config/config")).json();if(X.success&&X.config){const fe=X.config;fe.tushare&&(Y.value={...Y.value,...fe.tushare}),fe.datasource&&fe.datasource.sources&&(Z.value={sxsc_tushare:{...Z.value.sxsc_tushare,...fe.datasource.sources.sxsc_tushare||{}},tushare:{...Z.value.tushare,...fe.datasource.sources.tushare||{}},akshare:{...Z.value.akshare,...fe.datasource.sources.akshare||{}}}),fe.feishu&&(m.value={...m.value,...fe.feishu},u.value=JSON.parse(JSON.stringify(m.value))),fe.ai&&(v.value={...v.value,...fe.ai}),fe.rate_limit&&(N.value={...N.value,...fe.rate_limit}),fe.theme&&!localStorage.getItem("quant_theme")&&h(fe.theme),fe.auto_evaluate&&(n.value={...n.value,...fe.auto_evaluate})}}catch(ne){console.warn("加载用户配置失败，使用本地缓存",ne)}}async function we(){var ne,X,fe,Me;try{const Ke=await(await fetch("/api/dashboard")).json(),rt=Ke.success?Ke.data:Ke;z.value=((ne=rt==null?void 0:rt.stats)==null?void 0:ne.total_stocks_covered)||null;const Qe=await(await fetch("/api/dates")).json();U.value=((X=Qe==null?void 0:Qe.data)==null?void 0:X.total)||((Me=(fe=Qe==null?void 0:Qe.data)==null?void 0:fe.dates)==null?void 0:Me.length)||null;const he=await(await fetch("/api/ai/history")).json();se.value="ok"}catch{se.value="pending"}}async function Re(){try{const X=await(await fetch("/api/dashboard")).json();g.value=X.success?X.data:X,S.value=Date.now()}catch(ne){console.error("加载总览数据失败",ne)}}return{configSaving:_,configChanged:f,globalConfigDirty:o,lastSavedTime:i,feishuConfigOriginal:u,aiConfigOriginal:V,tushareConfigOriginal:W,tushareConfig:Y,tushareStatus:J,datasourceConfig:Z,datasourceStatus:I,syncingData:E,stockCount:z,tradeDateCount:U,aiStatus:se,appVersion:$,showImportDialog:ie,rateLimitConfig:N,rateLimitDirty:F,rateLimitSaving:A,loadRateLimit:w,saveRateLimit:M,saveAiConfig:le,testAiApi:G,exportConfig:y,importConfig:r,saveAllConfig:q,resetAllConfig:d,testTushareConnection:K,checkTushareConnection:re,syncStockData:Q,loadTushareConfig:T,loadDatasourceConfig:oe,saveDatasourceConfig:qe,testDatasource:Le,toggleDatasourceKeyReveal:de,toggleDatasourceEdit:ee,loadFeishuConfig:De,loadAiConfig:Ee,loadUserConfig:ae,loadSystemStatus:we,loadDashboardData:Re}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:p}=Vue,{currentUser:t,applyTheme:f,allMenuDefs:v,loadGroupConfig:R}=a,m=e([]),c=e(""),k=e(""),n=e("users"),x=e({}),l=e({}),h=p(()=>{let ae=m.value;if(k.value&&(ae=ae.filter(Re=>(Re.group||Re.role)===k.value)),!c.value)return ae;const we=c.value.toLowerCase();return ae.filter(Re=>Re.username.toLowerCase().includes(we))});function g(ae){x.value={...x.value,[ae]:!x.value[ae]}}async function S(ae,we){try{const ne=await(await fetch("/api/groups/"+we+"/members/"+ae,{method:"DELETE"})).json();ne.success?(await ee(),await H()):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function P(ae){const we=l.value[ae];if(we)try{const ne=await(await fetch("/api/groups/"+ae+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:we})})).json();ne.success?(await ee(),await H(),l.value={...l.value,[ae]:""}):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function _(ae,we){try{const ne=await(await fetch("/api/users/"+ae.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:we})})).json();ne.success?await ee():ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const o=e(!1),i=e(null),u=e({username:"",password:"",role:"user",theme:"tech-blue"}),V=e(!1),W=e(null),Y=e(!1),J=e(!1),Z=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),I=e({}),E=e(!1),z=e({group_id:"",name:"",description:""}),U=e(!1),se=e([]),$=e(""),ie=e(""),N=e({});function F(ae){N.value={...N.value,[ae]:!N.value[ae]}}function A(ae){return!m.value||!m.value.length?0:m.value.filter(we=>(we.group||we.role)===ae).length}function w(ae){const we=(ae==null?void 0:ae.visible_menus)||{};return Object.values(we).filter(Boolean).length}const M=p(()=>Object.keys(D.value).length);async function le(ae){ie.value=ae,J.value=!0,await G(ae)}async function G(ae){try{const Re=await(await fetch("/api/groups/"+ae+"/members")).json();Re.success&&(se.value=Re.members||[])}catch(we){se.value=[],console.error("[loadGroupMembers]",we)}}async function y(){if(!(!$.value||!ie.value)){U.value=!0;try{const we=await(await fetch("/api/groups/"+ie.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:$.value})})).json();we.success?(await G(ie.value),await ee(),$.value=""):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{U.value=!1}}}async function r(ae){try{const Re=await(await fetch("/api/groups/"+ie.value+"/members/"+ae,{method:"DELETE"})).json();Re.success?(await G(ie.value),await ee()):ElementPlus.ElMessage.error(Re.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const q=p(()=>{if(!m.value)return[];const ae=new Set(se.value.map(we=>we.username));return m.value.filter(we=>we.username!=="admin"&&we.username!=="guest"&&!ae.has(we.username))});function d(ae){const we=Z.value.visible_menus[ae],Re=v.find(ne=>ne.key===ae);if(Re)if(we){const ne=I.value[ae]||{};Re.subPages.forEach(X=>{const fe=ae+"."+X;Z.value.visible_sub_pages[fe]=ne[X]!==void 0?ne[X]:!0})}else{const ne={};Re.subPages.forEach(X=>{const fe=ae+"."+X;ne[X]=Z.value.visible_sub_pages[fe],Z.value.visible_sub_pages[fe]=!1}),I.value[ae]=ne}}function K(ae){W.value=ae;const we=D.value[ae]||{};Z.value={name:we.name||ae,description:we.description||"",visible_menus:{...we.visible_menus||{}},visible_sub_pages:{...we.visible_sub_pages||{}}},I.value={},v.forEach(Re=>{const ne={};Re.subPages.forEach(X=>{ne[X]=Z.value.visible_sub_pages[Re.key+"."+X]}),I.value[Re.key]=ne}),Y.value=!0}async function re(){U.value=!0;try{const we=await(await fetch("/api/groups/"+W.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z.value)})).json();we.success?(Y.value=!1,W.value=null,await H(),await R()):ElementPlus.ElMessage.error(we.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{U.value=!1}}async function Q(ae){var we;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((we=D.value[ae])==null?void 0:we.name)||ae)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const X=await(await fetch("/api/groups/"+ae,{method:"DELETE"})).json();X.success?await H():ElementPlus.ElMessage.error(X.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function T(){if(z.value.group_id){U.value=!0;try{const we=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z.value)})).json();we.success?(E.value=!1,z.value={group_id:"",name:"",description:""},await H()):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{U.value=!1}}}const D=e({});async function H(){try{if(!localStorage.getItem("quant_token"))return;const we=await fetch("/api/groups");if(we.ok){const Re=await we.json();D.value=Re.groups||{}}}catch(ae){console.warn("loadAllGroups:",ae)}}function de(ae){var we;return((we=D.value[ae])==null?void 0:we.name)||ae||"--"}async function ee(){try{if(!localStorage.getItem("quant_token")){m.value=[];return}const we=await fetch("/api/users");if(we.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const Re=await we.json();m.value=Re.users||[]}catch(ae){m.value=[],console.error("[loadUsers] error:",ae)}}function oe(ae){i.value=ae,u.value={username:ae.username,password:"",role:ae.role,theme:ae.theme||"tech-blue",group:ae.group||ae.role},o.value=!0}async function qe(){if(u.value.username){V.value=!0;try{const ae=i.value?"PUT":"POST",we=i.value?`/api/users/${u.value.username}`:"/api/users",ne=await(await fetch(we,{method:ae,headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)})).json();if(ne.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&u.value.username===t.value.username){const X=u.value.theme;X&&X!==t.value.theme&&(t.value.theme=X,localStorage.setItem("quant_user",JSON.stringify(t.value)),f(X))}o.value=!1,i.value=null,await ee()}else ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{V.value=!1}}}async function Le(ae){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ae}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await ee())}catch(we){console.error("[deleteUser]",we)}}async function De(ae){try{const Re=await(await fetch(`/api/users/${ae.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ae.enabled})})).json();Re.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Re.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Ee(ae){try{const{value:we}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ae.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(we){const ne=await(await fetch(`/api/users/${ae.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:we})})).json();ne.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ne.message||"重置失败")}}catch{}}return{userList:m,userSearch:c,groupFilter:k,userPageTab:n,expandedGroups:x,addMemberGroupMap:l,filteredUsers:h,toggleGroupExpand:g,removeMemberFromGroupInline:S,addMemberToGroupInline:P,changeUserGroup:_,showAddUser:o,editingUser:i,userForm:u,savingUser:V,editingGroup:W,menuConfigDialog:Y,memberDialog:J,groupEditForm:Z,subPageCache:I,showAddGroup:E,addGroupForm:z,savingGroup:U,groupMembers:se,addMemberUsername:$,selectedMemberGroup:ie,subPageSectionExpanded:N,toggleSubPageSection:F,getGroupMemberCount:A,getMenuEnabledCount:w,groupCount:M,openMemberManager:le,loadGroupMembers:G,addMemberToGroup:y,removeMemberFromGroup:r,availableUsersForGroup:q,onParentToggle:d,openMenuConfig:K,saveMenuConfig:re,deleteGroupConfig:Q,createGroup:T,allGroups:D,getGroupName:de,loadAllGroups:H,loadUsers:ee,editUser:oe,saveUser:qe,deleteUser:Le,toggleUserEnabled:De,resetUserPassword:Ee}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:p}=Vue,{stockKlineLoaded:t,stockDetailVisible:f,stockDetailTab:v,stockDetail:R,disposeStockKline:m}=a,c=e([]),k=e(!1),n=e(!1),x=e("date"),l=e([]),h=e([]),g=e([]),S=e([]),P=p(()=>{var r,q;const y=[];for(const d of c.value){if(!d||d.id==null)continue;const K=d.stock_name||d.stock_code||"",re=Array.isArray(d.messages)?d.messages:[];y.push({id:d.id,stock_code:d.stock_code,stock_name:K,first_msg:d.first_msg||((q=(r=re[0])==null?void 0:r.content)==null?void 0:q.substring(0,50))||"",msg_count:d.msg_count||re.length||0,created_at:d.created_at,date:(d.created_at||"").substring(0,10),month:(d.created_at||"").substring(0,7),messages:re})}return y}),_=p(()=>{const y={};for(const q of P.value){const d=q.date||"未知";y[d]||(y[d]=[]),y[d].push(q)}const r={};return Object.keys(y).sort((q,d)=>d.localeCompare(q)).forEach(q=>r[q]=y[q]),r}),o=p(()=>{const y={};for(const q of P.value){const d=q.month||"未知";y[d]||(y[d]=[]),y[d].push(q)}const r={};return Object.keys(y).sort((q,d)=>d.localeCompare(q)).forEach(q=>r[q]=y[q]),r}),i=p(()=>{const y={};for(const r of P.value){const q=`${r.stock_name}(${r.stock_code})`;y[q]||(y[q]=[]),y[q].push(r)}return y});function u(y){const r=l.value.indexOf(y);r>=0?l.value.splice(r,1):l.value.push(y)}function V(y){const r=_.value[y]||[];if(r.every(d=>l.value.includes(d.id)))l.value=l.value.filter(d=>!r.some(K=>K.id===d));else for(const d of r)l.value.includes(d.id)||l.value.push(d.id)}function W(y){const r=o.value[y]||[];if(r.every(d=>l.value.includes(d.id)))l.value=l.value.filter(d=>!r.some(K=>K.id===d));else for(const d of r)l.value.includes(d.id)||l.value.push(d.id)}function Y(y){const r=i.value[y]||[];if(r.every(d=>l.value.includes(d.id)))l.value=l.value.filter(d=>!r.some(K=>K.id===d));else for(const d of r)l.value.includes(d.id)||l.value.push(d.id)}function J(y){const r=h.value.indexOf(y);r>=0?h.value.splice(r,1):h.value.push(y)}function Z(y){const r=g.value.indexOf(y);r>=0?g.value.splice(r,1):g.value.push(y)}function I(y){const r=S.value.indexOf(y);r>=0?S.value.splice(r,1):S.value.push(y)}function E(){l.value.length===P.value.length?l.value=[]:l.value=P.value.map(y=>y.id)}async function z(){if(l.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${l.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const y of[...l.value])await le(y);l.value=[]}}const U={};async function se(y){R.value={stock:y.stock_code,name:y.stock_name},f.value=!0,v.value="chat",t.value=!1,m(),N.value=!0,F.value="",ie.value=[];try{let r=U[y.id];if(!r){const q=await fetch("/api/ai/chat/history/"+y.id);if(!q.ok)throw new Error("load history failed");r=(await q.json()).messages||[],U[y.id]=r}ie.value=r.map(q=>({role:q.role,content:q.content}))}catch{F.value="历史消息加载失败，请重试"}finally{N.value=!1}}const $=e(""),ie=e([]),N=e(!1),F=e("");async function A(){var q;const y=$.value.trim();if(!y||N.value)return;F.value="",ie.value.push({role:"user",content:y}),$.value="",N.value=!0;const r=ie.value.length;ie.value.push({role:"assistant",content:""});try{const re=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((q=R.value)==null?void 0:q.stock)||"",message:y})})).body.getReader(),Q=new TextDecoder;let T="";for(;;){const{done:D,value:H}=await re.read();if(D)break;T+=Q.decode(H,{stream:!0});const de=T.split(`
`);T=de.pop()||"";for(const ee of de)if(ee.startsWith("data: "))try{const oe=JSON.parse(ee.slice(6));oe.token?ie.value[r].content+=oe.token:oe.done?console.log("Stream done:",oe.session_id):oe.error&&(F.value=oe.error)}catch(oe){console.warn("SSE parse error:",oe)}}}catch(d){ie.value[r].content||(ie.value[r].content="网络错误: "+d.message)}N.value=!1}async function w(y){var q;F.value="",N.value=!0;const r={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};ie.value.push({role:"user",content:r[y]||r.comprehensive});try{const K=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((q=R.value)==null?void 0:q.stock)||"",mode:y})});if(K.ok){const re=await K.json();ie.value.push({role:"assistant",content:re.reply||"无回复"})}}catch(d){F.value="网络错误: "+d.message}N.value=!1}async function M(){k.value=!0,n.value=!1;try{const y=await fetch("/api/ai/chat/history?view=date");if(y.ok){const r=await y.json(),q=[];for(const d of r)for(const K of d.items||[])q.push(K);c.value=q}else n.value=!0}catch(y){console.error(y),n.value=!0}finally{k.value=!1}}async function le(y){try{await fetch("/api/ai/chat/history/"+y,{method:"DELETE"}),c.value=c.value.filter(r=>r.id!==y)}catch(r){console.error("deleteChatSession:",r)}}function G(y){if(!y)return"";const r=String(y).split(`
`),q=[],d=[];let K=0;for(;K<r.length;){if(/^\s*\|.*\|\s*$/.test(r[K])){let Q=K;const T=[];for(;Q<r.length&&/^\s*\|.*\|\s*$/.test(r[Q]);)T.push(r[Q]),Q++;const D=ee=>ee.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(oe=>oe.trim()),H=T.map(D);if(H.length>1&&H[1].every(ee=>/^:?-{3,}:?$/.test(ee))){const ee=Math.max(...H.map(De=>De.length)),oe=H[0].slice(0,ee),qe=H.slice(2);let Le="<table>";qe.length?(Le+="<thead><tr>"+oe.map(De=>"<th>"+De+"</th>").join("")+"</tr></thead>",Le+="<tbody>"+qe.map(De=>"<tr>"+De.slice(0,ee).map(Ee=>"<td>"+Ee+"</td>").join("")+"</tr>").join("")+"</tbody>"):Le+="<tbody><tr>"+oe.map(De=>"<td>"+De+"</td>").join("")+"</tr></tbody>",Le+="</table>",q.push(Le),d.push("\0T"+(q.length-1)+"\0"),K=Q;continue}for(;K<Q;)d.push(r[K]),K++;continue}d.push(r[K]),K++}let re=d.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return q.forEach((Q,T)=>{re=re.split("\0T"+T+"\0").join(Q)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(re=window.__quantModules.core.sanitizeHtml(re)),re}return{chatSessions:c,chatHistoryView:x,selectedChatIds:l,expandedChatDates:h,expandedChatMonths:g,expandedChatStocks:S,chatHistoryLoading:k,chatHistoryError:n,allChatSessionsFlat:P,chatGroupedByDate:_,chatGroupedByMonth:o,chatGroupedByStock:i,toggleSelectChat:u,toggleSelectChatDate:V,toggleSelectChatMonth:W,toggleSelectChatStock:Y,toggleChatDateExpand:J,toggleChatMonthExpand:Z,toggleChatStockExpand:I,selectAllChatSessions:E,deleteSelectedChatSessions:z,viewChatSession:se,loadChatHistory:M,deleteChatSession:le,renderMarkdown:G,stockChatInput:$,stockChatMessages:ie,stockChatLoading:N,stockChatError:F,askStockSend:A,askStockQuick:w}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:p,watch:t}=Vue,{consensus:f,currentPage:v,currentSubPage:R,dashboardData:m,searchKeyword:c,statusFilter:k,strategyFilter:n,strategyFilterCounts:x}=a;function l(I){const E=n.value.selected;if(!E||E.length===0)return I;const z=n.value.mode;return I.filter(U=>{const se=U.strategy_names||U.strategies||[];return z==="union"?E.some($=>se.includes($)):E.every($=>se.includes($))})}const h=p(()=>{const I=l(f.value||[]);return{all:I.length,newCount:I.filter(E=>E.status==="new").length,current:I.filter(E=>E.status==="current").length,out:I.filter(E=>E.status==="out").length}}),g=p(()=>{let I=f.value||[];if(k.value!=="all"&&(I=I.filter(E=>E.status===k.value)),I=l(I),c.value){const E=c.value.toLowerCase();I=I.filter(z=>z.code.toLowerCase().includes(E)||z.name&&z.name.toLowerCase().includes(E))}return I}),S=p(()=>{const I=f.value||[],E={},z={};for(const U of I)U.code&&U.name&&(z[U.code]=U.name);for(const U of I){const se=U.strategy_names||U.strategies||[];for(const $ of se)E[$]||(E[$]={strategy:$,count:0,codes:[],names:[]}),E[$].count++,E[$].codes.includes(U.code)||(E[$].codes.push(U.code),E[$].names.push({code:U.code,name:z[U.code]||U.code}))}return Object.values(E).sort((U,se)=>se.count-U.count)}),P=p(()=>{const I=n.value.selected,E=n.value.mode,z={};for(const[U,se]of Object.entries(x.value)){const $=se||[];!I||I.length===0?z[U]=$.length:E==="union"?z[U]=$.filter(ie=>ie.strategies&&I.some(N=>ie.strategies.includes(N))).length:z[U]=$.filter(ie=>ie.strategies&&I.every(N=>ie.strategies.includes(N))).length}return z});function _(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(n.value.selected)),localStorage.setItem("quant_strategy_filter_mode",n.value.mode)}const o=p(()=>{const I=(m.value||{}).consensus_rank||[];return l(I)}),i=p(()=>{const I=f.value||x.value.day||[];return l(I).length}),u=p(()=>{const I=(m.value||{}).strategy_counts||[],E=f.value||x.value.day||[];if(E.length===0)return I;const z=l(E),U={};z.forEach($=>{($.strategy_names||$.strategies||[]).forEach(N=>{U[N]=(U[N]||0)+1})});const se=z.length||1;return I.map($=>{const ie=$.strategy_name||$.strategy_id,N=U[ie]||0;return{...$,count:N,percentage:Math.round(N/se*1e3)/10}})}),V=p(()=>{const I=(m.value||{}).pool_changes||{},E=(I.new_count||0)-(I.out_count||0);return E>0?{dir:"up",text:"↑"+E}:E<0?{dir:"down",text:"↓"+Math.abs(E)}:{dir:"flat",text:"→0"}}),W=p(()=>{const I=(m.value||{}).time_coverage||{},E=new Date(I.start_date),z=new Date(I.end_date),U=new Date;if(!E.getTime()||!z.getTime()||U>=z)return 100;if(U<=E)return 0;const se=z-E,$=U-E;return Math.round($/se*100)}),Y=e(null),J=p(()=>{if(!Y.value)return"";const I=Math.floor((Date.now()-Y.value)/1e3);return I<60?I+"秒前刷新":I<3600?Math.floor(I/60)+"分钟前刷新":Math.floor(I/3600)+"小时前刷新"});function Z(I){n.value.selected=[I],n.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([I])),localStorage.setItem("quant_strategy_filter_mode","union"),v.value="calendar",R.value="calendar"}return{applyStrategyFilter:l,statusCounts:h,stockPool:g,strategyDistribution:S,strategyPreviewCount:P,saveStrategyFilter:_,filteredConsensusRank:o,currentPoolSize:i,filteredStrategyCounts:u,poolChangeBadge:V,timeBarPercent:W,lastRefreshTime:Y,timeSinceRefresh:J,navigateToStrategyFilter:Z}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function p(f){return a[f]||"var(--text-tertiary)"}function t(f){return e[f]||"var(--bg-hover)"}window.__quantModules.watchlist={create(f){const{ref:v,computed:R,watch:m}=Vue,{currentUser:c,selectedDate:k,stockDetail:n,stockDetailTab:x,stockDetailVisible:l,stockDetailLoading:h,stockKlineLoaded:g,viewCache:S,animateScoreEntrance:P,loadStockKline:_,refreshStockScore:o,disposeStockKline:i,aiHistory:u,aiLoading:V,aiEvalStage:W,aiEvalElapsed:Y,aiEvalError:J,aiResult:Z,loadLastEvaluation:I,autoEvaluateConfig:E,autoEvaluateScope:z,batchStocks:U,batchRunning:se,batchTotal:$,batchCompleted:ie,batchCurrent:N,batchStatuses:F,batchResults:A,batchEvalErrors:w,expandedDates:M,expandedStocks:le,savingConfig:G,selectedHistoryIds:y,selectedWatchlistCodes:r,showAutoEvaluateSettings:q,showBatchEvaluate:d}=f,K=s=>(getComputedStyle(document.documentElement).getPropertyValue(s)||"").trim(),re=v(""),Q=v("default"),T=v("default"),D=v([]),H=R(()=>new Set(D.value.map(s=>s.code))),de=v(!1),ee=v(!1),oe=R(()=>{const s=[...D.value];return T.value==="name"?s.sort((j,te)=>j.name.localeCompare(te.name,"zh")):T.value==="added"?s.sort((j,te)=>(te.added_at||"").localeCompare(j.added_at||"")):T.value==="score"&&s.sort((j,te)=>{const _e=Le(j.code);return Le(te.code)-_e}),s});function qe(s){const j=u.value.filter(_e=>_e.stock_code===s);if(j.length===0)return null;const te=j.reduce((_e,Ce)=>_e.evaluate_time>Ce.evaluate_time?_e:Ce);return{score:te.result.total_score,color:p(te.result.level),bg:t(te.result.level)}}function Le(s){const j=qe(s);return j?j.score:0}function De(s){at(s.code,s.name),ne.value=ne.value.filter(j=>j.code!==s.code),Re.value=""}const Ee=R(()=>new Set(u.value.map(s=>s.stock_code))),ae=v(new Set);function we(s){ae.value.add(s)}const Re=v(""),ne=v([]),X=v(!1),fe=v({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Me=v(!1),Ne=v(!1),Ke=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};Ke.REALTIME_WS_PATH;const rt=Ke.REALTIME_DEGRADED_TEXT||"数据不可达",dt=Ke.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";Ke.WARN_RISE_SPEED_THRESHOLD!=null&&Ke.WARN_RISE_SPEED_THRESHOLD,Ke.WARN_VOLUME_RATIO_THRESHOLD!=null&&Ke.WARN_VOLUME_RATIO_THRESHOLD;const Qe=Ke.quoteFmt||{price:s=>s==null?"--":Number(s).toFixed(2),pct:s=>s==null?"--":Number(s).toFixed(2)+"%",num:s=>s==null?"--":Number(s).toFixed(2),color:s=>""},Et=3,he=5e3,be=v({}),Pe=v(!1),ze=v("idle");let Ge=null,Xe=null,Ye=0;function ht(s){return Ke.checkQuoteWarning?Ke.checkQuoteWarning(s):null}function xt(s){return ht(be.value[s])}function ft(s){return Qe.color(be.value[s])}function Ze(s){return Qe.price(be.value[s]&&be.value[s].price)}function jt(s){return Qe.pct(be.value[s]&&be.value[s].change_pct)}function Nt(s,j){return Qe.num(be.value[s]&&be.value[s][j])}function yt(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function ut(){if(!Ge||Ge.readyState!==1)return;const s=(D.value||[]).map(j=>j.code);s.length!==0&&Ge.send(JSON.stringify({subscribe:s}))}function Vt(){if(Xe&&(clearTimeout(Xe),Xe=null),Ge){try{Ge.onopen=null,Ge.onmessage=null,Ge.onerror=null,Ge.onclose=null,Ge.close()}catch{}Ge=null}be.value={},Pe.value=!1,ze.value="idle"}function C(){const s=yt();if(!s||!Ke.buildRealtimeWsUrl||ze.value==="open"||ze.value==="connecting")return;let j;try{j=Ke.buildRealtimeWsUrl()+"?token="+encodeURIComponent(s)}catch{ze.value="offline",Pe.value=!0;return}ze.value="connecting";let te=null;try{te=new WebSocket(j)}catch{ze.value="offline",Pe.value=!0;return}Ge=te,te.onopen=function(){ze.value="open",Ye=0,ut()},te.onmessage=function(_e){let Ce=null;try{Ce=JSON.parse(_e.data||"{}")}catch{return}if(!Ce||Ce.type!=="quotes")return;if(Pe.value=!!Ce.degraded,Ce.degraded||!Array.isArray(Ce.data)){be.value={};return}const mt={};Ce.data.forEach(function(Je){Je&&Je.code&&(mt[Je.code]=Je)}),be.value=mt},te.onerror=function(){ze.value="offline",Pe.value=!0},te.onclose=function(){ze.value="offline",Ye<Et?(Ye++,Xe=setTimeout(function(){ze.value!=="open"&&C()},he*Ye)):Pe.value=!0}}m(D,function(){ze.value==="open"&&ut()}),yt()&&setTimeout(C,500);async function ve(){if(!n.value)return;V.value=!0,Z.value=null,J.value="",W.value="fetching",Y.value=0;const s=Date.now(),j=setInterval(()=>{V.value&&(Y.value=Math.round((Date.now()-s)/1e3))},500);try{const te=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n.value.stock,stock_name:n.value.name||n.value.stock,strategy:Q.value})});W.value="calculating";const _e=await te.json();W.value="analyzing",_e.success?(await nextTick(),Z.value=_e.data,x.value="ai",L()):(J.value=_e.message||"评估失败",ElementPlus.ElMessage.error(J.value))}catch(te){J.value=te&&te.message&&!String(te.message).includes("Failed to fetch")?te.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(J.value)}finally{clearInterval(j),V.value=!1,Y.value=0,J.value?W.value="":(W.value="done",setTimeout(()=>{W.value==="done"&&(W.value="")},800))}}const ke=50,Se=v(0),Ae=v(!1),We=R(()=>u.value.length<Se.value);async function L(){de.value=!0,ee.value=!1;try{if(!localStorage.getItem("quant_token")){u.value=[];return}const j=await fetch(`/api/ai/history?limit=${ke}&offset=0`);if(j.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),c.value=null;return}const te=await j.json();te.success?(u.value=te.data||[],Se.value=te.total!=null?te.total:u.value.length):ee.value=!0}catch(s){console.error("[loadAiHistory] error:",s),ee.value=!0}finally{de.value=!1}}async function ce(){if(!(Ae.value||!We.value)){Ae.value=!0;try{const j=await(await fetch(`/api/ai/history?limit=${ke}&offset=${u.value.length}`)).json();if(j.success&&Array.isArray(j.data)){const te=new Set(u.value.map(Ce=>Ce.id)),_e=j.data.filter(Ce=>!te.has(Ce.id));u.value=u.value.concat(_e),j.total!=null&&(Se.value=j.total)}}catch(s){console.warn("[loadMoreAiHistory] error:",s)}finally{Ae.value=!1}}}async function He(s){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const te=await(await fetch(`/api/ai/history/${s}`,{method:"DELETE"})).json();if(te.success){ElementPlus.ElMessage.success("删除成功"),L();const _e=y.value.indexOf(s);_e>=0&&y.value.splice(_e,1)}else ElementPlus.ElMessage.error(te.message||"删除失败")}catch{}}function $e(s){const j=y.value.indexOf(s);j>=0?y.value.splice(j,1):y.value.push(s)}function nt(){y.value=[]}function kt(){r.value=[]}async function Ft(){const s=y.value;if(s.length===0)return;const j=u.value.filter(te=>s.includes(te.id)).map(te=>te.stock_code);d.value=!0,U.value=[...new Set(j)].join(",")}async function Mt(){const s=y.value;if(s.length===0)return;const j=u.value.filter(Ce=>s.includes(Ce.id)),te=[...new Map(j.map(Ce=>[Ce.stock_code,Ce])).values()];let _e=0;for(const Ce of te)H.value.has(Ce.stock_code)||(await at(Ce.stock_code,Ce.stock_name||Ce.stock_code),_e++);_e>0?ElementPlus.ElMessage.success(`已加入 ${_e} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function St(){const s=y.value;if(s.length===0)return;const j=u.value.filter(_e=>s.includes(_e.id)),te=[...new Map(j.map(_e=>[_e.stock_code,_e])).values()];try{const Ce=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:te.map(mt=>({stock_code:mt.stock_code,stock_name:mt.stock_name||""}))})})).json();Ce&&Ce.success?ElementPlus.ElMessage.success(`已登记 ${Ce.count||te.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Ce&&Ce.detail||"批量加入组合失败")}catch(_e){console.warn("batchAddToPortfolio failed:",_e),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function ct(){if(r.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${r.value.length} 只股票？`,"提示",{type:"warning"});for(const s of r.value)await Ht(s);r.value=[],ElementPlus.ElMessage.success("已移除")}catch(s){s&&s.message!=="cancel"&&console.warn("batchRemoveWatchlist:",s)}}function Rt(s){const j=r.value.indexOf(s);j>=0?r.value.splice(j,1):r.value.push(s)}function Ot(){y.value.length===u.value.length?y.value=[]:y.value=u.value.map(s=>s.id)}function _t(){r.value.length===D.value.length?r.value=[]:r.value=D.value.map(s=>s.code)}async function Yt(){if(y.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${y.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const j=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:y.value})})).json();j.success?(ElementPlus.ElMessage.success(j.message),y.value=[],L()):ElementPlus.ElMessage.error(j.message||"删除失败")}catch{}}async function vt(){try{const j=await(await fetch("/api/ai/auto-config")).json();j.success&&(E.value=j.data,j.data.evaluate_scope&&(z.value=j.data.evaluate_scope))}catch(s){console.warn("loadAutoEvaluateConfig failed:",s)}}async function bt(){G.value=!0;try{E.value.evaluate_scope=z.value;const j=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E.value)})).json();j.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),q.value=!1):ElementPlus.ElMessage.error(j.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{G.value=!1}}const Bt=v(!1);async function gt(){Bt.value=!0;try{const j=await(await fetch("/api/watchlist")).json();j.success&&(D.value=j.stocks||[])}catch(s){console.warn("loadWatchlist failed:",s)}finally{Bt.value=!1}}async function at(s,j){try{const _e=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s,name:j})})).json();if(_e.success)return _e.existed||D.value.push({code:s,name:j,added_at:new Date().toISOString()}),!0}catch(te){console.warn("addToWatchlist failed:",te)}return!1}async function Ht(s){try{await fetch(`/api/watchlist/${encodeURIComponent(s)}`,{method:"DELETE"}),D.value=D.value.filter(j=>j.code!==s)}catch(j){console.warn("removeFromWatchlist failed:",j)}}async function aa(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),D.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(s){console.warn("clearWatchlist failed:",s)}}async function da(s,j){H.value.has(s)?(await Ht(s),ElementPlus.ElMessage.info("已移除自选")):await at(s,j)&&ElementPlus.ElMessage.success("已加入自选")}async function la(s,j){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(s,j||"");const te=new Date().toISOString().split("T")[0],_e=k.value||te;x.value="kline",Z.value=null,J.value="",i("stockKlineChart"),n.value=null,h.value=!0,g.value=!1,l.value=!0,nextTick(()=>P());try{const Ce=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${_e}`);n.value=await Ce.json()}catch{n.value={stock:s,name:j,total_days:0}}finally{h.value=!1}await nextTick(),await _("daily"),o(),I(s)}const Xt=v(!1);async function ua(){var s;if(D.value.length!==0){Xt.value=!0;try{const te=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();te.success&&te.loaded>0?(((s=te.details)==null?void 0:s.loaded)||[]).forEach(_e=>ae.value.add(_e.code)):te.loaded===0&&te.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(j){console.error("预加载K线失败:",j)}finally{Xt.value=!1}}}async function va(s,j){V.value=!0,Z.value=null,J.value="",W.value="fetching",g.value=!1,i();const te=new Date().toISOString().split("T")[0],_e=k.value||te;try{const Ce=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${_e}`);n.value=await Ce.json()}catch{n.value={stock:s,name:j,total_days:0}}x.value="ai",l.value=!0,await nextTick();try{const mt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s,stock_name:j})})).json();mt.success?(Z.value=mt.data,L()):(J.value=mt.message||"评估失败",ElementPlus.ElMessage.error(J.value))}catch{J.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(J.value)}finally{V.value=!1,W.value=""}}async function Qt(){D.value.length!==0&&(d.value=!0,U.value=D.value.map(s=>s.code).join(","))}async function O(){r.value.length!==0&&(d.value=!0,U.value=r.value.join(","))}async function ye(){if(!Re.value.trim()){ne.value=[];return}X.value=!0;try{const j=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(Re.value)}`)).json();ne.value=(j.results||[]).filter(te=>!H.value.has(te.code))}catch(s){console.warn("searchStockForWatchlist failed:",s)}finally{X.value=!1}}async function Oe(){try{const j=await(await fetch("/api/data-refresh/config")).json();fe.value=j}catch(s){console.error("加载数据刷新配置失败:",s)}}async function Te(){Ne.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(fe.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ne.value=!1}}async function st(){var s;Me.value=!0;try{const te=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();te.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((s=te.parser_stats)==null?void 0:s.dates_count)||0}交易日`),S.clear(),await Oe()):ElementPlus.ElMessage.error(te.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Me.value=!1}}const et=v(!1);async function zt(){et.value=!0;try{const j=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(j.success){const te=j.result||{},_e=j.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${te.pulled||0}/${te.total||0}, 财务 ${_e.pulled||0}/${_e.total||0}`),S.clear(),await Oe()}else ElementPlus.ElMessage.error(j.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{et.value=!1}}const Kt=R(()=>{const s={};for(const j of u.value){const te=(j.evaluate_time||"").split("T")[0];s[te]||(s[te]=[]),s[te].push(j)}for(const j in s)s[j].sort((te,_e)=>_e.evaluate_time.localeCompare(te.evaluate_time));return s}),Tt=R(()=>{const s={};for(const j of u.value){const te=j.stock_code;s[te]||(s[te]=[]),s[te].push(j)}for(const j in s)s[j].sort((te,_e)=>_e.evaluate_time.localeCompare(te.evaluate_time));return s}),ma=R(()=>{const s={};for(const j of u.value){const te=(j.evaluate_time||"").split("T")[0].slice(0,7);s[te]||(s[te]=[]),s[te].push(j)}for(const j in s)s[j].sort((te,_e)=>_e.evaluate_time.localeCompare(te.evaluate_time));return s}),sa=R(()=>Object.keys(Tt.value).length),ya=R(()=>{const s=u.value.length;return s===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(te=>{const _e=u.value.filter(Ce=>Ce.result.total_score>=te.min&&Ce.result.total_score<=te.max).length;return{...te,count:_e,pct:Math.round(_e/s*100)}})});async function Zt(){if(!re.value)return;const s=D.value.find(j=>j.code===re.value);if(s){V.value=!0,Z.value=null,J.value="",W.value="fetching";try{n.value={stock:s.code,name:s.name,total_days:0},l.value=!0,x.value="ai",await nextTick();const te=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s.code,stock_name:s.name,strategy:Q.value})})).json();te.success?(Z.value=te.data,L(),re.value=""):(J.value=te.message||"评估失败",ElementPlus.ElMessage.error(J.value))}catch{J.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(J.value)}finally{V.value=!1,W.value=""}}}function Da(s){const j=M.value.indexOf(s);j>=0?M.value.splice(j,1):M.value.push(s)}function pa(s){const te=(Kt.value[s]||[]).map(Ce=>Ce.id);te.every(Ce=>y.value.includes(Ce))?y.value=y.value.filter(Ce=>!te.includes(Ce)):te.forEach(Ce=>{y.value.includes(Ce)||y.value.push(Ce)})}function Ra(s){const te=(ma.value[s]||[]).map(Ce=>Ce.id);te.every(Ce=>y.value.includes(Ce))?y.value=y.value.filter(Ce=>!te.includes(Ce)):te.forEach(Ce=>{y.value.includes(Ce)||y.value.push(Ce)})}function za(s){const j=le.value.indexOf(s);j>=0?le.value.splice(j,1):le.value.push(s)}function fa(s){const te=(Tt.value[s]||[]).map(Ce=>Ce.id);te.every(Ce=>y.value.includes(Ce))?y.value=y.value.filter(Ce=>!te.includes(Ce)):te.forEach(Ce=>{y.value.includes(Ce)||y.value.push(Ce)})}const Wt={},ba={};function Jt(s,j,te){if(!s||(te&&(ba[j]={el:s,records:te}),Wt[j]===s))return;const _e=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ce=()=>{Object.keys(Wt).forEach(Be=>{if(Wt[Be]&&Wt[Be]!==s){try{Wt[Be].dispose()}catch{}delete Wt[Be]}});const mt=[...te].sort((Be,Pt)=>Be.evaluate_time.localeCompare(Pt.evaluate_time)),Je=mt.map(Be=>(Be.evaluate_time||"").split("T")[0]),pt=mt.map(Be=>{var Pt;return((Pt=Be.result)==null?void 0:Pt.total_score)??null}),ea=mt.map(Be=>{var Pt;return((Pt=Be.result)==null?void 0:Pt.level)??""}),Ct={primary:K("--qc-primary-600")||"#b8922a",textPrimary:K("--text-primary")||"#1f2937",textSecondary:K("--text-secondary")||"#6b7280",border:K("--border-light")||"#e5e7eb",up:K("--color-success")||"#67c23a",down:K("--color-danger")||"#f56c6c"},ia=[];for(let Be=1;Be<pt.length;Be++)pt[Be]!=null&&pt[Be-1]!=null&&Math.abs(pt[Be]-pt[Be-1])>=15&&ia.push({name:"大幅变化",coord:[Je[Be],pt[Be]],value:(pt[Be]-pt[Be-1]>0?"↑":"↓")+Math.abs(pt[Be]-pt[Be-1]),symbol:"pin",symbolSize:32,itemStyle:{color:pt[Be]-pt[Be-1]>0?Ct.up:Ct.down}});const ta=echarts.init(s);ta.setOption({tooltip:{trigger:"axis",backgroundColor:K("--bg-card")||"#ffffff",borderColor:Ct.border,textStyle:{color:Ct.textPrimary},formatter:function(Be){var _a;const Pt=(_a=Be[0])==null?void 0:_a.dataIndex,qa=Pt!=null?ea[Pt]:"";return Je[Pt]+"<br/>得分: "+pt[Pt]+(qa?" ("+qa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Je,axisLabel:{fontSize:10,rotate:30,color:Ct.textSecondary},axisLine:{lineStyle:{color:Ct.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Ct.textSecondary},splitLine:{lineStyle:{color:Ct.border}}},series:[{data:pt,type:"line",smooth:!0,lineStyle:{color:Ct.primary,width:2},itemStyle:{color:Ct.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:K("--primary-rgb")?"rgba("+K("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:K("--primary-rgb")?"rgba("+K("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:ia.length>0?{data:ia}:void 0}]}),Wt[j]=ta};_e?_e().then(Ce).catch(()=>{}):Ce()}function wa(){Object.keys(ba).forEach(s=>{const j=ba[s];if(!(!j||!j.el)){if(Wt[s]){try{Wt[s].dispose()}catch{}delete Wt[s]}Jt(j.el,s,j.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(wa));async function ka(s){Z.value=s,g.value=!1,i();try{const j=await fetch(`/api/calendar/stock/${s.stock_code}?date=${k.value}`);n.value=await j.json()}catch{n.value={stock:s.stock_code,name:s.stock_name||s.stock_code,total_days:0,history:[]}}l.value=!0,x.value="ai"}async function b(){if(!U.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const s=U.value.split(/[,，\s]+/).filter(Je=>Je.trim());if(s.length===0)return;se.value=!0,$.value=s.length,ie.value=0,N.value="",F.value={},A.value={},w.value={},s.forEach(Je=>{F.value[Je]="pending",A.value[Je]=null});const j={"Content-Type":"application/json"};let te=0,_e=0,Ce=!1;try{const Je=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:j,body:JSON.stringify({stock_codes:s})});if(Je.ok&&Je.body){Ce=!0;const pt=Je.body.getReader(),ea=new TextDecoder("utf-8");let Ct="",ia=!1;for(;!ia;){const{value:ta,done:Be}=await pt.read();ia=Be,Ct+=ea.decode(ta||new Uint8Array,{stream:!ia});let Pt;for(;(Pt=Ct.indexOf(`

`))>=0;){const qa=Ct.slice(0,Pt);Ct=Ct.slice(Pt+2);const _a=qa.split(`
`).find(Ka=>Ka.startsWith("data: "));if(!_a)continue;let qt;try{qt=JSON.parse(_a.slice(6))}catch{continue}qt.type==="start"?qt.total&&($.value=qt.total):qt.type==="item"?(ie.value++,N.value=qt.stock_code,qt.success?(F.value[qt.stock_code]="success",A.value[qt.stock_code]=qt,te++):(F.value[qt.stock_code]="error",w.value[qt.stock_code]=qt.error||"评估失败",_e++)):qt.type==="done"&&(typeof qt.success=="number"&&(te=qt.success),typeof qt.fail=="number"&&(_e=qt.fail))}}if(Ct.trim()){const ta=Ct.split(`
`).find(Be=>Be.startsWith("data: "));if(ta)try{const Be=JSON.parse(ta.slice(6));Be.type==="item"?(ie.value++,N.value=Be.stock_code,Be.success?(F.value[Be.stock_code]="success",A.value[Be.stock_code]=Be,te++):(F.value[Be.stock_code]="error",w.value[Be.stock_code]=Be.error||"评估失败",_e++)):Be.type==="done"&&(typeof Be.success=="number"&&(te=Be.success),typeof Be.fail=="number"&&(_e=Be.fail))}catch{}}}}catch{Ce=!1}if(!Ce){te=0,_e=0,ie.value=0;for(const Je of s){N.value=Je,F.value[Je]="running";try{const ea=await(await fetch("/api/ai/evaluate",{method:"POST",headers:j,body:JSON.stringify({stock_code:Je.trim(),stock_name:Je.trim()})})).json();ea.success?(F.value[Je]="success",A.value[Je]=ea.data,te++):(F.value[Je]="error",w.value[Je]=ea.message&&ea.message!=="success"?ea.message:"评估失败",_e++)}catch(pt){F.value[Je]="error",w.value[Je]="网络错误: "+(pt&&pt.message?pt.message:pt),_e++}ie.value++}}N.value="",await L();const mt=s.length;setTimeout(()=>{_e===0?ElementPlus.ElMessage.success(`评估完成 成功 ${te}/${mt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${te}/${mt} · 失败 ${_e}`),se.value=!1},500)}return{quickEvalStock:re,evalStrategy:Q,watchlistSort:T,watchlist:D,watchlistCodes:H,sortedWatchlist:oe,getWatchlistScore:qe,getLatestScore:Le,addSearchResult:De,evaluatedCodes:Ee,klineLoadedCodes:ae,markKlineLoaded:we,watchlistSearch:Re,watchlistResults:ne,watchlistSearching:X,dataRefreshConfig:fe,dataRefreshReloading:Me,dataRefreshSaving:Ne,aiHistoryLoading:de,aiHistoryError:ee,aiHistoryTotal:Se,aiHistoryLoadingMore:Ae,hasMoreAiHistory:We,loadMoreAiHistory:ce,watchlistLoading:Bt,doAiEvaluate:ve,loadAiHistory:L,deleteSingleHistory:He,toggleSelectHistory:$e,clearSelection:nt,clearWatchlistSelection:kt,batchReevaluateHistory:Ft,batchAddToWatchlist:Mt,batchAddToPortfolio:St,batchRemoveWatchlist:ct,toggleSelectWatchlist:Rt,selectAllHistory:Ot,selectAllWatchlist:_t,deleteSelectedHistory:Yt,loadAutoEvaluateConfig:vt,saveAutoEvaluateConfig:bt,loadWatchlist:gt,addToWatchlist:at,removeFromWatchlist:Ht,clearWatchlist:aa,toggleWatchlist:da,showStockKline:la,preloadingKline:Xt,preloadWatchlistKline:ua,watchlistEvaluate:va,batchEvaluateWatchlist:Qt,batchEvaluateSelected:O,searchStockForWatchlist:ye,loadDataRefreshConfig:Oe,saveDataRefreshConfig:Te,triggerDataReload:st,triggerDataPull:zt,dataPullRunning:et,groupedByDate:Kt,aiHistoryByStock:Tt,groupedByMonth:ma,aiHistoryStockCount:sa,scoreDistribution:ya,quickEvaluate:Zt,toggleDateExpand:Da,toggleSelectDate:pa,toggleSelectMonth:Ra,toggleStockExpand:za,toggleSelectStock:fa,registerTrendChart:Jt,viewAiResult:ka,doBatchEvaluate:b,realtimeQuotes:be,realtimeDegraded:Pe,realtimeWsState:ze,connectRealtimeQuotes:C,disconnectRealtimeQuotes:Vt,quoteWarningFor:xt,realtimeQuoteColor:ft,realtimePriceText:Ze,realtimePctText:jt,realtimeRatioText:Nt,REALTIME_DEGRADED_TEXT:rt,REALTIME_FALLBACK_TEXT:dt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:p}=Vue,t=e([]),f=e(null),v=e([]),R=e(!1),m=e(!1),c=e(!1),k=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),n=e(!1),x=e(!1),l=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),h=e(!1),g=e("positions"),S=e(30),P=e(!1),_=e(""),o=e(!1),i=e({dates:[],equity:[],values:[]}),u=p(()=>t.value.length),V=e("metrics"),W=e(!1),Y=e(""),J=e(!1),Z=e({metrics:null,rules:[],rebalance:null}),I=p(function(){const d=Z.value.metrics;if(!d)return[];const K=function(Q){return Q==null?"--":Number(Q).toFixed(2)+"%"},re=function(Q){return Q==null?"--":Number(Q).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:K(d.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:K(d.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:K(d.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:K(d.cvar)},{key:"max_drawdown",label:"最大回撤",value:K(d.max_drawdown)},{key:"annual_return",label:"年化收益",value:K(d.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:re(d.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:re(d.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:re(d.calmar_ratio)},{key:"beta",label:"Beta",value:re(d.beta)}]});async function E(){W.value=!0;try{const d=await(await fetch("/api/portfolio/risk?days=60")).json(),K=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),re=d&&d.success?d.risk:null,Q=K&&K.success?K.rules||[]:[],T=K&&K.success?K.rebalance:null;Z.value={metrics:re,rules:Q,rebalance:T},J.value=!!(re&&Object.keys(re).length>0),Y.value=d&&d.note||K&&K.note||""}catch(d){console.warn("[portfolio] 加载风险数据失败:",d),J.value=!1,Y.value="风险数据加载失败"}finally{W.value=!1}}async function z(){R.value=!0,m.value=!1;try{const K=await(await fetch("/api/portfolio")).json();K.success?(t.value=K.positions||[],f.value=K.summary||null):m.value=!0}catch(d){console.warn("[portfolio] 加载持仓失败:",d),m.value=!0}finally{R.value=!1}}async function U(){const d=k.value,K=(d.stock_code||"").trim();if(!K){ElementPlus.ElMessage.warning("请输入股票代码");return}const re=Number(d.cost_price),Q=Number(d.quantity);if(!(re>0)||!(Q>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}n.value=!0;try{const D=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:K,stock_name:(d.stock_name||"").trim(),cost_price:re,quantity:Q})})).json();D.success?(ElementPlus.ElMessage.success(D.message||"持仓已更新"),c.value=!1,k.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await z(),G(S.value)):ElementPlus.ElMessage.error(D.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{n.value=!1}}async function se(d){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+d+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const re=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(d),{method:"DELETE"})).json();re.success?(ElementPlus.ElMessage.success("已删除持仓"),await z(),N(),G(S.value)):ElementPlus.ElMessage.error(re.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function $(d,K){l.value={stock_code:d,stock_name:K||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},x.value=!0}async function ie(){const d=l.value;if(!d.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const K=Number(d.price),re=Number(d.quantity);if(!(K>0)||!(re>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}h.value=!0;try{const T=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:d.stock_code,stock_name:d.stock_name||"",action:d.action,price:K,quantity:re,trade_date:d.trade_date||"",note:(d.note||"").trim()})})).json();T.success?(ElementPlus.ElMessage.success(T.message||"调仓已记录"),x.value=!1,await z(),await N(),G(S.value)):ElementPlus.ElMessage.error(T.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{h.value=!1}}async function N(){try{const K=await(await fetch("/api/portfolio/trades")).json();K.success&&(v.value=K.trades||[])}catch(d){console.warn("[portfolio] 加载调仓记录失败:",d)}}const F=d=>(getComputedStyle(document.documentElement).getPropertyValue(d)||"").trim();function A(d){if(!d||!d.length)return[];let K=d[0]||0;const re=[];for(let Q=0;Q<d.length;Q++){const T=d[Q]||0;T>K&&(K=T),re.push(K>0?Math.round((T-K)/K*1e3)/10:0)}return re}function w(){const d={primary:F("--qc-primary-600")||"#b8922a",textPrimary:F("--text-primary")||"#1f2937",textSecondary:F("--text-secondary")||"#6b7280",border:F("--border-light")||"#e5e7eb",up:F("--color-rise")||"#E63946",down:F("--color-fall")||"#2E7D32"},K=i.value;return{tooltip:{trigger:"axis",backgroundColor:F("--bg-card")||"#ffffff",borderColor:d.border,textStyle:{color:d.textPrimary},formatter:function(re){const Q=re[0]?re[0].dataIndex:-1,T=K.dates[Q]||"",D=K.equity[Q],H=K.values[Q];let de=T||"";return D!=null&&(de+="<br/>组合净值: "+D),H!=null&&(de+="<br/>组合市值: "+H),de}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:K.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:d.textSecondary},axisLine:{lineStyle:{color:d.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:d.textSecondary},splitLine:{lineStyle:{color:d.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:d.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:K.equity,smooth:!0,showSymbol:!1,lineStyle:{color:d.primary,width:2},itemStyle:{color:d.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:F("--primary-rgb")?"rgba("+F("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:F("--primary-rgb")?"rgba("+F("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:A(K.equity),smooth:!0,showSymbol:!1,lineStyle:{color:d.down,width:1.5},itemStyle:{color:d.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function M(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function le(d,K,re){i.value={dates:d||[],equity:K||[],values:re||[]},o.value=!!d&&d.length>0,o.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",w,{key:"portfolio-equity"}):M()}async function G(d){P.value=!0,_.value="";const K=Number(d)||S.value||30;S.value=K;try{const Q=await(await fetch("/api/portfolio/equity_curve?days="+K)).json();Q.success?(_.value=Q.note||"",le(Q.dates||[],Q.equity||[],Q.values||[])):(_.value="数据暂不可用",M())}catch(re){console.warn("[portfolio] 加载收益曲线失败:",re),_.value="数据暂不可用",M()}finally{P.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function y(d,K){if(d==null||d===""||isNaN(Number(d)))return"--";const re=Number(d),Q=K??2;return(re>=0?"+":"")+re.toFixed(Q)}function r(d,K){if(d==null||d===""||isNaN(Number(d)))return"--";const re=Number(d),Q=K??2;return(re>=0?"+":"")+re.toFixed(Q)+"%"}function q(d){if(d==null||d===""||isNaN(Number(d)))return"";const K=Number(d);return K>0?"portfolio-up":K<0?"portfolio-down":""}return{positions:t,summary:f,trades:v,loading:R,loadError:m,showAddForm:c,addForm:k,addSaving:n,tradeFormVisible:x,tradeForm:l,tradeSaving:h,portfolioTab:g,equityDays:S,equityLoading:P,equityNote:_,equityHasData:o,portfolioCount:u,loadPortfolio:z,addPosition:U,removePosition:se,openTradeForm:$,submitTrade:ie,loadTrades:N,loadEquity:G,fmtSigned:y,fmtSignedPct:r,signClass:q,riskTab:V,riskLoading:W,riskNote:Y,riskHasData:J,riskData:Z,riskMetricList:I,loadRisk:E}}}})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(c,k){var n=Number(c);return isFinite(n)?n:typeof k=="number"?k:0}function e(c){var k=Array.isArray(c)?c:[];if(k.length<2)return null;for(var n=-1/0,x=0,l=0,h=0,g=0,S=0;S<k.length;S++){var P=a(k[S].equity!=null?k[S].equity:k[S].value);P>n&&(n=P,x=S);var _=n>0?(n-P)/n*100:0;_>l&&(l=_,h=x,g=S)}function o(i){return k[i]&&k[i].date?k[i].date:""}return{maxDrawdown:Math.round(l*100)/100,peakIndex:h,troughIndex:g,peakDate:o(h),troughDate:o(g)}}function p(c){for(var k=c||{},n={},x=Object.keys(k).sort(),l=0;l<x.length;l++){var h=x[l],g=String(h).slice(0,4);/^\d{4}$/.test(g)&&(n[g]=(n[g]||0)+a(k[h]))}var S=Object.keys(n).sort();return S.map(function(P){return{year:P,return:Math.round(n[P]*100)/100}})}function t(c){var k=Array.isArray(c)?c:[],n={};k.forEach(function(h){(h.points||[]).forEach(function(g){g&&g.date&&(n[g.date]=1)})});var x=Object.keys(n).sort(),l=k.map(function(h){var g={};return(h.points||[]).forEach(function(S){S&&S.date&&(g[S.date]=a(S.value!=null?S.value:S.equity))}),{name:h.name||"",data:x.map(function(S){return S in g?g[S]:null})}});return{dates:x,series:l}}function f(c){var k=c||{},n=function(l){return a(l)},x=function(l,h){var g=n(l);return isFinite(g)?g.toFixed(h):"--"};return[{key:"total_return",label:"总收益",value:x(k.total_return,2),suffix:"%",dir:n(k.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:x(k.annual_return,2),suffix:"%",dir:n(k.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:x(k.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:x(k.sharpe_ratio,2),suffix:"",dir:n(k.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:x(k.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:x(k.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(n(k.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:x(k.volatility,2),suffix:"%",dir:""}]}function v(c){var k=c==null?"":String(c);return/[",\n]/.test(k)?'"'+k.replace(/"/g,'""')+'"':k}function R(c){var k=c||{},n=[];n.push("回测指标"),n.push("指标,数值"),(k.metrics||[]).forEach(function(o){n.push(v(o.label)+","+v((o.value||"")+(o.suffix||"")))}),n.push(""),n.push("净值曲线");var x=["日期"].concat((k.series||[]).map(function(o){return o.name}));n.push(x.map(v).join(","));for(var l=k.dates||[],h=k.series||[],g=0;g<l.length;g++){for(var S=[l[g]],P=0;P<h.length;P++){var _=h[P].data&&h[P].data[g];S.push(_??"")}n.push(S.map(v).join(","))}return n.push(""),n.push("交易明细"),n.push("日期,股票代码,方向,原因"),(k.trades||[]).forEach(function(o){n.push(v(o.date)+","+v(o.stock)+","+v(o.action)+","+v(o.reason))}),n.join(`
`)}function m(c){return c==="buy"?"买入":c==="sell"?"卖出":c||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:p,buildNavSeries:t,buildMetrics:f,buildBacktestCsv:R,tradeActionText:m}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:p}=Vue,t=window.QuantBacktest||{},f=a||{},v=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],m=(Array.isArray(f.backtestStrategies)&&f.backtestStrategies.length?f.backtestStrategies:v).map(F=>({id:F.id,name:F.name})),c=e(m.length?[m[0].id]:[]),k=e(P()),n=e(1e5),x=e(3e-4),l=e(!1),h=e(!1),g=e(null),S=e("");function P(){const F=new Date,A=new Date;A.setFullYear(A.getFullYear()-1);const w=M=>M.getFullYear()+"-"+String(M.getMonth()+1).padStart(2,"0")+"-"+String(M.getDate()).padStart(2,"0");return[w(A),w(F)]}function _(F){const A=c.value.indexOf(F);A>=0?c.value.length>1&&c.value.splice(A,1):c.value.push(F)}function o(F){const A=m.find(w=>w.id===F);return A?A.name:F}function i(F){const A=F.summary||F;return{strategy_id:A.strategy_id,start_date:A.start_date,end_date:A.end_date,total_days:A.total_days,total_return:A.total_return,annual_return:A.annual_return,max_drawdown:A.max_drawdown,volatility:A.volatility,sharpe_ratio:A.sharpe_ratio,sortino_ratio:A.sortino_ratio,win_rate:A.win_rate,profit_loss_ratio:A.profit_loss_ratio,avg_positions:A.avg_positions!=null?A.avg_positions:A.avg_positions_per_day,total_trades:A.total_trades,turnover_rate:A.turnover_rate,success:A.success!==!1,message:A.message||"",insample_total_return:A.insample_total_return!=null?A.insample_total_return:null,outsample_total_return:A.outsample_total_return!=null?A.outsample_total_return:null,out_sample_ratio:A.out_sample_ratio!=null?A.out_sample_ratio:.2,overfit_warning:!!A.overfit_warning,overfit_reason:A.overfit_reason||""}}function u(F){return(Array.isArray(F)?F:[]).map(A=>({date:A.date,value:A.equity!=null?A.equity:A.value}))}function V(F,A){const w=i(A),M=u(A.equity_curve),le=A.monthly_returns||{},G=Array.isArray(A.trade_history)?A.trade_history:[],y={id:F,name:o(F),summary:w,equityCurve:M,monthlyReturns:le,trades:G};let r=null;if(l.value){const q=Number(n.value)||1e5;r={name:"现金基准",points:M.map(d=>({date:d.date,value:q}))}}return{success:!0,mode:"single",strategies:[y],primary:y,benchmark:r,period:(w.start_date||"")+" ~ "+(w.end_date||"")}}function W(F,A){const w=A.strategy_results||{},M=F.map(y=>{const r=w[y];if(!r)return null;const q=i(r);return{id:y,name:o(y),summary:q,equityCurve:u(r.equity_curve),monthlyReturns:r.monthly_returns||{},trades:Array.isArray(r.trade_history)?r.trade_history:[]}}).filter(y=>y&&y.summary.success!==!1),le=M.length?M[0]:null;let G=null;return l.value&&(G={name:"等权组合基准",points:u(A.portfolio_equity)}),{success:M.length>0,mode:"multi",strategies:M,primary:le,benchmark:G,period:le?le.summary.start_date+" ~ "+le.summary.end_date:""}}const Y=p(()=>{const F=g.value;return!F||!F.primary?[]:t.buildMetrics?t.buildMetrics(F.primary.summary):[]}),J=p(()=>{const F=g.value;return!F||!F.primary||!F.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(F.primary.monthlyReturns):[]}),Z=p(()=>{const F=g.value;return!F||!F.primary?[]:(F.primary.trades||[]).slice().sort((A,w)=>String(w.date||"").localeCompare(String(A.date||"")))}),I=p(()=>{const F=g.value;return!F||!F.strategies||F.strategies.length<2?[]:F.strategies.map(A=>({name:A.name,metrics:t.buildMetrics?t.buildMetrics(A.summary):[]}))}),E=p(()=>{const F=g.value;return!F||!F.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(F.primary.equityCurve):null});async function z(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const A=c.value;if(!A.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const w=k.value,M={start_date:w&&w[0]||void 0,end_date:w&&w[1]||void 0},le={"Content-Type":"application/json"};h.value=!0,g.value=null,S.value="";try{if(A.length===1){const G=Object.assign({},M,{initial_capital:Number(n.value)||1e5,commission_rate:Number(x.value)||3e-4}),y=await fetch("/api/backtest/"+encodeURIComponent(A[0]),{method:"POST",headers:le,body:JSON.stringify(G)});if(!y.ok){const q=await y.json().catch(()=>({}));throw new Error(q.detail||"回测失败")}const r=await y.json();if(!r.success)throw new Error(r.message||"回测失败");g.value=V(A[0],r)}else{const G=await fetch("/api/backtest/multi",{method:"POST",headers:le,body:JSON.stringify(Object.assign({},M,{strategy_ids:A}))});if(!G.ok){const r=await G.json().catch(()=>({}));throw new Error(r.detail||"回测失败")}const y=await G.json();if(!y.success)throw new Error(y.message||"多策略回测失败");if(g.value=W(A,y.data||{}),!g.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(G){S.value=G&&G.message?G.message:"回测失败",ElementPlus.ElMessage.error(S.value)}finally{h.value=!1}}function U(){const F=g.value,A={dates:[],series:[]};if(!F)return A;const w=F.strategies.map(le=>({name:le.name,points:le.equityCurve}));F.benchmark&&F.benchmark.points&&F.benchmark.points.length&&w.push({name:F.benchmark.name,points:F.benchmark.points});const M=t.buildNavSeries?t.buildNavSeries(w):A;return se(M,F)}function se(F,A){const w=K=>(getComputedStyle(document.documentElement).getPropertyValue(K)||"").trim(),M={primary:w("--qc-primary-600")||"#b8922a",success:w("--color-success")||"#4CAF50",accent:w("--color-accent")||"#F59E0B",info:w("--color-info")||"#1976d2",ai:w("--color-ai")||"#6366f1",textPrimary:w("--text-primary")||"#1f2937",textSecondary:w("--text-secondary")||"#6b7280",border:w("--border-light")||"#e5e7eb",up:w("--color-rise")||"#E63946",down:w("--color-fall")||"#2E7D32",bg:w("--bg-card")||"#ffffff"},le=[M.primary,M.success,M.accent,M.info,M.ai],y=M.bg.length===7&&parseInt(M.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",r=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(A.primary?A.primary.equityCurve:[]):null,q=r&&r.peakDate&&r.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:M.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+r.maxDrawdown+"%",xAxis:r.peakDate,itemStyle:{color:M.down}},{xAxis:r.troughDate}]]}:void 0,d=F.series.map((K,re)=>{const Q=A.benchmark&&K.name===A.benchmark.name,T=le[re%le.length];return{name:K.name,type:"line",data:K.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:Q?2:2.4,type:Q?"dashed":"solid",color:T},itemStyle:{color:T},emphasis:{focus:"series"},...re===0&&q?{markArea:q}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:y,borderColor:M.border,textStyle:{color:M.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:M.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:F.dates,boundaryGap:!1,axisLine:{lineStyle:{color:M.border}},axisLabel:{color:M.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:M.textSecondary,fontSize:11},splitLine:{lineStyle:{color:M.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:M.border,textStyle:{color:M.textSecondary,fontSize:10}}],series:d}}function $(F){if(!F){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",U,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function ie(){const F=g.value;if(!F||!F.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const A=F.strategies.map(d=>({name:d.name,points:d.equityCurve}));F.benchmark&&A.push({name:F.benchmark.name,points:F.benchmark.points});const w=t.buildNavSeries?t.buildNavSeries(A):{dates:[],series:[]},M=t.tradeActionText||(d=>d),le=Z.value.map(d=>({date:d.date,stock:d.stock,action:M(d.action),reason:d.reason})),G=t.buildBacktestCsv?t.buildBacktestCsv({metrics:Y.value,dates:w.dates,series:w.series,trades:le}):"",y=new Blob(["\uFEFF"+G],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(y),q=document.createElement("a");q.href=r,q.download="backtest-"+F.strategies.map(d=>d.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",q.click(),URL.revokeObjectURL(r),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function N(F,A){return F==null||F===""||isNaN(Number(F))?"--":Number(F).toFixed(A??2)}return{btStrategyOptions:m,btSelectedStrategies:c,toggleBtStrategy:_,btDateRange:k,btCapital:n,btCommissionRate:x,btIncludeBenchmark:l,btRunning:h,btResult:g,btError:S,btMetrics:Y,btAnnualReturns:J,btTrades:Z,btStrategyMetricsRows:I,btDrawdownRegion:E,runBacktestWorkbench:z,exportBacktestCSV:ie,registerBacktestNavChart:$,btFmtNum:N}}}})();(function(){const{ref:a,computed:e,watch:p,onUnmounted:t}=Vue,f=n=>(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim(),v=72,R={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},m={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},c={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},k={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const n=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),x=a({}),l=a(!1),h=a({}),g=a({cycles:[]}),S=a(!1),P=a({autoRefresh:!0,refreshInterval:300}),_=a(""),o=a(""),i=a(!1),u=a("");let V=null;const W={x:0,y:0},Y=e(()=>{const H=x.value;return["recession","recovery","overheat","stagflation"].map(ee=>{const oe=H[ee]||{};return{key:ee,name:oe.name||ee,icon:c[oe.icon]||"bar-chart-3",color:oe.color||f("--text-tertiary")||"#888",bg:oe.bg_color||f("--bg-card")||"#f5f5f5",textColor:oe.color||f("--text-primary")||"#333",tagline:oe.allocation&&k[ee]||""}})}),J=e(()=>{var de,ee,oe,qe;const H=n.value.indicators||{};return[{key:"pmi",label:"PMI",value:(de=H.pmi)==null?void 0:de.toFixed(2),color:H.pmi>=50?f("--color-success")||"#43a047":f("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((ee=H.gdp_growth)==null?void 0:ee.toFixed(2))+"%",color:f("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((oe=H.cpi)==null?void 0:oe.toFixed(2))+"%",color:H.cpi>1.2?f("--color-danger")||"#E53935":f("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((qe=H.m2_growth)==null?void 0:qe.toFixed(2))+"%",color:f("--color-success")||"#43a047"}]}),Z=H=>{H=H||{};const de=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],ee=()=>f("--color-success")||"#43a047",oe=()=>f("--color-danger")||"#E53935",qe=()=>f("--color-warning")||"#FF9800",Le={宽松:ee(),中位:qe(),偏低:oe(),高增长:ee(),承压:oe(),不利:oe()};return de.map(De=>{const Ee=H[De.key]||{},ae=Ee.score||0,we=Math.min(100,Math.max(5,(ae+2)*25)),Re=ae>=.3?"#66BB6A":ae>=-.3?"#FFB74D":"#EF5350",ne=ae>=0?"#66BB6A":"#EF5350";return{key:De.key,label:De.label,scoreStr:ae.toFixed(2),level:Ee.level||"—",barWidth:we,barColor:Re,scoreColor:ne,color:Le[Ee.level]||"#888888"}})},I=e(()=>Z(n.value.dimension_scores)),E=e(()=>Z(h.value._dimensions)),z=e(()=>{var de;const H=((de=n.value.confidence)==null?void 0:de.level)||"";return H==="高"?"#43a047":H==="中"?"#FF9800":H==="低"?"#E53935":"var(--text-secondary)"}),U=e(()=>{var oe,qe,Le,De;const H=x.value,de={recovery:0,overheat:1,stagflation:2,recession:3},ee={};for(const[Ee,ae]of Object.entries(H))ee[Ee]={name:ae.name,icon:ae.icon,color:ae.color,lightColor:ae.bg_color,duration:"~"+(((oe=ae.historical_stats)==null?void 0:oe.avg_duration_months)||18)+"个月",order:de[Ee]||0,period:((Le=(qe=ae.case_studies)==null?void 0:qe[0])==null?void 0:Le.split("：")[0])||"",avgMonths:((De=ae.historical_stats)==null?void 0:De.avg_duration_months)||18};return ee}),se=e(()=>{var ae,we;const H=n.value.stage,ee={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[H]||{x:150,y:150},oe=n.value.dimension_scores||{},qe=((ae=oe.growth)==null?void 0:ae.score)||0,Le=((we=oe.inflation)==null?void 0:we.score)||0,De=Math.max(-30,Math.min(30,qe*15)),Ee=Math.max(-30,Math.min(30,-Le*15));return{x:ee.x+De,y:ee.y+Ee,prevX:W.x,prevY:W.y}}),$=e(()=>{var oe;const H=Math.min(100,((oe=n.value.timing)==null?void 0:oe.progress_percent)||0),de=n.value.color||"#4CAF50",ee=H>100?"linear-gradient(90deg, "+de+", #FF9800)":de;return{width:H+"%",background:ee}});function ie(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[n.value.stage]||0}function N(){var H,de;return((de=(H=n.value)==null?void 0:H.timing)==null?void 0:de.progress_percent)||0}function F(){var H,de;return((de=(H=n.value)==null?void 0:H.timing)==null?void 0:de.duration_months)||0}function A(){var H,de;return((de=(H=n.value)==null?void 0:H.timing)==null?void 0:de.avg_duration_months)||18}function w(H){var qe,Le;const de=U.value,ee=((qe=de[n.value.stage])==null?void 0:qe.order)||0;return(((Le=de[H])==null?void 0:Le.order)||0)<ee}function M(H){return R[H]||H}function le(H){return m[H]||H}function G(H){const de=["#43a047","#f57c00","#1976d2","#757575"];return de[H-1]||de[3]}async function y(){try{const de=await(await fetch("/api/market/merrill-clock/stages")).json();de.success&&de.data&&(x.value=de.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function r(){S.value=!0;try{const de=await(await fetch("/api/market/merrill-clock/timeline")).json();if(de.success&&de.data){const ee=Array.isArray(de.data.cycles)?de.data.cycles.slice().reverse():[];g.value={cycles:ee}}}catch{console.warn("获取美林时钟时间轴失败")}finally{S.value=!1}}async function q(H){await K(H)}async function d(){var H,de;try{const oe=await(await fetch("/api/market/merrill-clock")).json(),qe=oe.stage||"recovery",Le=x.value[qe]||{};if(n.value={...Le,...oe,stage_cn:oe.stage_cn||Le.stage_cn||"",stage_name:oe.stage_name||Le.name||"",name:oe.name||Le.name||"复苏期"},_.value=new Date().toLocaleTimeString("zh-CN"),u.value&&u.value!==qe){const De=x.value,Ee=((H=De[u.value])==null?void 0:H.name)||u.value,ae=((de=De[qe])==null?void 0:de.name)||qe;ElementPlus.ElMessage({message:"美林时钟阶段切换："+Ee+" → "+ae,type:"warning",duration:6e3,showClose:!0})}u.value=qe}catch(ee){console.error("获取美林时钟失败:",ee);const oe=x.value.recovery||{};n.value={...oe,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function K(H){var ee;l.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",h.value=x.value[H]||x.value.recovery||{};const de=((ee=n.value)==null?void 0:ee.stage)===H;h.value._isCurrent=de,de&&n.value&&(h.value._nextPrediction=n.value.next_stage_prediction,h.value._confidence=n.value.confidence,h.value._stage=n.value.stage,h.value._dimensions=n.value.dimension_scores);try{const qe=await(await fetch("/api/market/merrill-clock/stage/"+H)).json();if(qe.success&&qe.data){const Le={...x.value[H],...qe.data};Le._is_current!==void 0&&(Le._isCurrent=Le._is_current),Le._current_timing&&(Le._currentTiming=Le._current_timing),Le._last_period&&(Le._lastPeriod=Le._last_period),h.value._nextPrediction&&(Le._nextPrediction=h.value._nextPrediction),h.value._confidence&&(Le._confidence=h.value._confidence),h.value._stage&&(Le._stage=h.value._stage),h.value._dimensions&&(Le._dimensions=h.value._dimensions),Object.assign(h.value,Le)}}catch(oe){console.warn("获取阶段详情失败:",oe)}}function re(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:P.value.autoRefresh,refreshInterval:P.value.refreshInterval})),P.value.autoRefresh?(clearInterval(V),V=setInterval(d,P.value.refreshInterval*1e3)):clearInterval(V),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function Q(){i.value=!0,o.value="";try{const de=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();de.success?(o.value="重评估完成："+(de.stage_name||de.stage),await d(),ElementPlus.ElMessage.success("重评估完成")):(o.value=de.message||"重评估失败",ElementPlus.ElMessage.error(de.message||"重评估失败"))}catch{o.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{i.value=!1}}function T(){const H=localStorage.getItem("merrill_clock_config");if(H)try{const de=JSON.parse(H);P.value={...P.value,...de}}catch{}P.value.autoRefresh&&(V=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),d()},P.value.refreshInterval*1e3))}function D(){V&&clearInterval(V)}return t(()=>{D()}),{merrillData:n,merrillStagesConfig:x,showMerrillDetail:l,merrillDetailData:h,merrillTimeline:g,timelineLoading:S,merrillClockConfig:P,merrillClockLastUpdated:_,merrillReevalResult:o,merrillReevalLoading:i,stages:Y,indicatorList:J,dimensionScoreList:I,detailDimensionScoreList:E,confidenceColor:z,timelineStages:U,clockPosition:se,merrillProgressStyle:$,FULL_CYCLE_MONTHS:v,getStageAngle:ie,getCycleProgress:N,getCurrentStageMonths:F,getStageTotalMonths:A,isStageCompleted:w,getCharLabel:M,getAssetName:le,getRankColor:G,fetchMerrillStages:y,fetchMerrillClock:d,loadMerrillTimeline:r,showTimelineStage:q,showStageDetail:K,saveMerrillClockConfig:re,doMerrillReevaluate:Q,startAutoRefresh:T,stopAutoRefresh:D}}})();(function(){function a(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const p=[];function t(v){typeof v=="function"&&p.push(v)}function f(){p.slice().forEach(function(v){try{v()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:t,refreshAllCharts:f,init(){return{getEChartsTheme:e,registerChart:t,refreshAllCharts:f}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const p=e("qcState");try{const v=localStorage.getItem("quant_sidebar_collapsed");v!==null&&p.sidebarCollapsed&&(p.sidebarCollapsed.value=v==="1")}catch{}if(!p)return{};const t=async v=>{if(window.__quantGoPage){await window.__quantGoPage(v.key,v.subPages[0]||"");return}p.currentPage.value=v.key,p.currentSubPage.value=v.subPages[0]||""},f=()=>{p.sidebarCollapsed.value=!p.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",p.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:p.menus,currentPage:p.currentPage,sidebarCollapsed:p.sidebarCollapsed,navigate:t,toggle:f,sanitizeHtml:p.sanitizeHtml,keyClick:p.keyClick,t:p.t}}}})();const Ca={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,p={"layout-dashboard":Ov,calendar:Nv,bot:Iv,"flask-conical":Lv,zap:Av,settings:zv,"chevron-down":Rv,"chevron-right":Dv,"chevron-left":Pv,menu:Tv,search:Mv,bell:Ev,sun:qv,moon:Cv,user:Sv,"user-round":xv,home:_v,x:kv,database:wv,activity:bv,clock:yv,"bar-chart-3":hv,shield:gv,"hard-drive":fv,"file-text":pv,users:mv,cpu:vv,"pie-chart":uv,info:dv,"log-out":cv,palette:rv,languages:ov,refresh:nv,download:lv,"external-link":iv,command:sv,sparkles:av,"trending-up":tv,"trending-down":ev,"circle-dot":Zu,check:Xu,"alert-triangle":$u,loader:Qu,"arrow-left":Ju,"arrow-right":Yu,eye:Gu,"eye-off":Uu,lock:Wu,"sliders-horizontal":Ku,play:Bu,history:Hu,layers:Fu,"line-chart":Vu,target:ju,"search-check":Ou,star:Nu,"message-circle":Iu,"calendar-days":Lu,"calendar-range":Au,"calendar-check":zu,brain:Ru,lightbulb:Du,"octagon-x":Pu,flag:Tu,package:Mu,"clipboard-list":Eu,pin:qu,"radio-tower":Cu,gauge:Su,landmark:xu,"candlestick-chart":_u,wallet:ku,"badge-check":wu,key:bu,factory:yu,trophy:hu,rocket:gu,flame:fu,"map-pin":pu,"scroll-text":mu,"book-open":vu,dna:uu,"bar-chart":du,plus:cu,"star-off":ru,upload:ou,gem:nu,"folder-open":lu,link:iu,save:su,"trash-2":au,pause:tu,"help-circle":eu,"play-circle":Zd,pencil:Xd,folder:$d,code:Qd,sprout:Jd,wheat:Yd,snowflake:Gd,fuel:Ud,banknote:Wd,send:Kd,inbox:Bd,"wifi-off":Hd,"check-circle-2":Fd,"x-circle":Vd},t=()=>p[e.name]||p["circle-dot"];return(f,v)=>(me(),ra(Ed(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Pa=(a,e)=>{const p=a.__vccOpts||a;for(const[t,f]of e)p[t]=f;return p},jv={name:"qc-sidebar",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=tt(()=>a.menus&&a.menus.value||[]),p=tt(()=>a.currentPage&&a.currentPage.value||""),t=tt(()=>a.navMode&&a.navMode.value||"subnav"),f=tt({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:_=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=_)}}),v=Dt({}),R={research:"量化投研",platform:"平台管理"},m=["research","platform"],c=_=>p.value===_.key,k=(_,o)=>p.value===_.key&&a.currentSubPage&&a.currentSubPage.value===o,n=_=>Array.isArray(_.subPages)&&_.subPages.length>1,x=(_,o)=>a.subPageNames&&a.subPageNames[o]||o;function l(_){!n(_)||f.value||(v.value[_.key]=!v.value[_.key])}function h(){e.value.forEach(_=>{v.value[_.key]===void 0&&(v.value[_.key]=c(_))})}async function g(_,o){const i=o||_.subPages&&_.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(_.key,i):(a.currentPage.value=_.key,a.currentSubPage&&(a.currentSubPage.value=i)),a.navigateTo&&a.navigateTo(_.key,i)}function S(){f.value=!f.value;try{localStorage.setItem("sidebar_collapsed",f.value?"1":"0")}catch{}}function P(_){if(_.ctrlKey&&_.key.toLowerCase()==="b"&&(_.preventDefault(),S()),!_.ctrlKey&&!_.metaKey&&!_.altKey&&(_.key==="ArrowDown"||_.key==="ArrowUp")){const o=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),i=o.indexOf(document.activeElement);if(i>=0){_.preventDefault();const u=o[(i+(_.key==="ArrowDown"?1:o.length-1))%o.length];u&&u.focus()}}}return Ba(()=>{h(),document.addEventListener("keydown",P)}),rs(()=>document.removeEventListener("keydown",P)),{state:a,menus:e,currentPage:p,navMode:t,sidebarCollapsed:f,expandedMenus:v,GROUP_LABELS:R,GROUPS:m,isActive:c,isChildActive:k,hasChildren:n,subLabel:x,toggleSubmenu:l,navigate:g,toggleCollapse:S}}},Vv={class:"qc-sidebar-logo"},Fv={key:0,class:"qc-logo-text"},Hv={class:"qc-sidebar-nav"},Bv={key:0,class:"qc-nav-group"},Kv={key:0,class:"qc-nav-group-label"},Wv=["href","aria-current","onClick"],Uv={key:0,class:"qc-sidebar-label"},Gv={key:1,class:"qc-nav-badge"},Yv=["aria-expanded","aria-controls","onClick"],Jv=["id"],Qv=["href","aria-current","onClick"],$v={class:"qc-sidebar-child-label"},Xv={class:"qc-sidebar-footer"},Zv=["aria-expanded","aria-label","title"];function em(a,e,p,t,f,v){const R=Gt("AppIcon"),m=Gt("el-tooltip");return me(),ge("nav",{class:ot(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[xe("div",Vv,[e[1]||(e[1]=Md('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Fe("",!0):(me(),ge("span",Fv,Ve(t.state.t("login.title")),1))]),xe("div",Hv,[(me(!0),ge(lt,null,wt(t.GROUPS,c=>(me(),ge(lt,{key:c},[t.menus.some(k=>k.group===c)?(me(),ge("div",Bv,[t.sidebarCollapsed?Fe("",!0):(me(),ge("span",Kv,Ve(t.GROUP_LABELS[c]),1)),(me(!0),ge(lt,null,wt(t.menus.filter(k=>k.group===c),k=>(me(),ge(lt,{key:k.key},[xe("div",{class:ot(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(k),"is-child-open":t.navMode==="tree"&&t.expandedMenus[k.key]}])},[it(m,{content:k.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:oa(()=>[xe("a",{class:ot(["qc-sidebar-link",{"is-active":t.isActive(k)}]),href:"#"+k.key,"aria-current":t.isActive(k)?"page":null,onClick:Lt(n=>t.navigate(k),["prevent"])},[it(R,{name:k.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Fe("",!0):(me(),ge("span",Uv,Ve(k.name),1)),!t.sidebarCollapsed&&k.badge?(me(),ge("span",Gv,Ve(k.badge),1)):Fe("",!0)],10,Wv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(k)?(me(),ge("button",{key:0,class:ot(["qc-sidebar-chevron",{"is-open":t.expandedMenus[k.key]}]),"aria-expanded":!!t.expandedMenus[k.key],"aria-controls":"submenu-"+k.key,"aria-label":"展开子菜单",onClick:n=>t.toggleSubmenu(k)},[it(R,{name:"chevron-down",size:14})],10,Yv)):Fe("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(k)&&t.expandedMenus[k.key]?(me(),ge("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+k.key},[(me(!0),ge(lt,null,wt(k.subPages,n=>(me(),ge("a",{key:n,class:ot(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(k,n)}]),href:"#"+k.key+"-"+n,"aria-current":t.isChildActive(k,n)?"page":null,onClick:Lt(x=>t.navigate(k,n),["prevent"])},[xe("span",$v,Ve(t.subLabel(k,n)),1)],10,Qv))),128))],8,Jv)):Fe("",!0)],64))),128))])):Fe("",!0)],64))),128))]),xe("div",Xv,[xe("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...c)=>t.toggleCollapse&&t.toggleCollapse(...c))},[it(R,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,Zv)])],2)}const tm=Pa(jv,[["render",em]]),am={name:"qc-header",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=Dt(!1),p=tt(()=>a.currentUser&&a.currentUser.value||null),t=tt(()=>a.navMode&&a.navMode.value||"subnav"),f=tt(()=>{const ee=a.currentPage&&a.currentPage.value,oe=(a.menus&&a.menus.value||[]).find(qe=>qe.key===ee);return!!(oe&&oe.subPages&&oe.subPages.length)}),v=tt(()=>{const ee=a.currentPage&&a.currentPage.value,oe=a.currentPageName&&a.currentPageName.value;if(oe)return oe;const qe=(a.menus&&a.menus.value||[]).find(Le=>Le.key===ee);return qe&&qe.name||ee||""}),R=tt(()=>{const ee=a.currentSubPage&&a.currentSubPage.value;return ee&&a.subPageNames&&a.subPageNames[ee]||ee||""}),m=Dt(typeof window<"u"?window.innerWidth<768:!1);function c(){m.value=window.innerWidth<768}Ba(()=>window.addEventListener("resize",c)),rs(()=>window.removeEventListener("resize",c));const k=Dt(!1),n=tt(()=>{const ee=a.currentSubPage&&a.currentSubPage.value;return ee&&a.subPageNames&&a.subPageNames[ee]||ee||""}),x=tt(()=>{const ee=a.currentPage&&a.currentPage.value,oe=(a.menus&&a.menus.value||[]).find(qe=>qe.key===ee);return(oe&&oe.subPages||[]).map(qe=>({key:qe,label:a.subPageNames&&a.subPageNames[qe]||qe}))});function l(){k.value=!k.value}function h(){k.value=!1}function g(ee){k.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,ee)}const S=tt(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),P=Dt(!1),_=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],o=tt(()=>{const ee=_.find(oe=>oe.value===t.value);return ee&&ee.label||t.value});function i(){P.value=!P.value}function u(){P.value=!1}function V(ee){P.value=!1,a.setNavMode&&a.setNavMode(ee)}const W=tt({get:()=>a.searchQuery&&a.searchQuery.value||"",set:ee=>{a.searchQuery&&(a.searchQuery.value=ee)}}),Y=Dt(!1),J=Dt([]),Z=Dt(!1),I=Dt(!1);function E(){const ee=localStorage.getItem("quant_token")||"";return ee?{Authorization:"Bearer "+ee,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function z(){Z.value=!0,I.value=!1;try{const oe=await(await fetch("/api/alerts/history?limit=8",{headers:E()})).json();oe&&oe.success?J.value=oe.history||[]:J.value=[]}catch{I.value=!0,J.value=[]}finally{Z.value=!1}}function U(){Y.value=!Y.value,Y.value&&z()}function se(){Y.value=!1}function $(){Y.value=!1,a.activateTab&&a.activateTab("system","notification")}const ie=Dt(!1),N=a.themeHues||[45,220,0,140,270,320],F=tt(()=>a.themeHue&&a.themeHue.value||45),A=tt(()=>a.themeMode&&a.themeMode.value||"system");function w(ee){return a.hueColor?a.hueColor(ee):"hsl("+ee+", 75%, 42%)"}function M(ee){return a.hueName?a.hueName(ee):String(ee)}function le(){ie.value=!ie.value}function G(){ie.value=!1}function y(ee){a.changeThemeMode&&a.changeThemeMode(ee)}function r(ee){a.changeThemeHue&&a.changeThemeHue(ee)}function q(){a.changeThemeMode&&a.changeThemeMode(S.value?"light":"dark")}function d(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function K(){e.value=!e.value}function re(){e.value=!1}function Q(ee){return()=>{re(),ee&&ee()}}function T(){re(),a.handleLogout&&a.handleLogout()}const D=tt(()=>a.marketData&&a.marketData.value||{}),H=Dt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:D,bannerDismissed:H,dismissBanner:()=>{H.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:p,isDark:S,searchQuery:W,navMode:t,crumbRoot:v,crumbSub:R,hasToptabs:f,toggleThemeQuick:q,toggleSidebar:d,openUserMenu:K,closeUserMenu:re,menuItem:Q,handleLogout:T,openBellMenu:Y,notifItems:J,notifLoading:Z,notifError:I,toggleBell:U,closeBell:se,goNotificationCenter:$,openThemeMenu:ie,themeHues:N,themeHue:F,themeMode:A,hueColor:w,hueName:M,toggleThemeMenu:le,closeThemeMenu:G,pickThemeMode:y,pickThemeHue:r,openNavModeMenu:P,NAV_MODES:_,navModeLabel:o,toggleNavModeMenu:i,closeNavModeMenu:u,pickNavMode:V,isMobile:m,openSubnavPicker:k,currentSubLabel:n,subnavOptions:x,toggleSubnavPicker:l,closeSubnavPicker:h,pickSubnav:g}}},sm={class:"qc-header-wrap"},im={key:0,class:"non-trading-banner",role:"status"},lm={class:"qc-header"},nm={class:"qc-header-left"},om=["aria-label"],rm={key:0,class:"qc-header-subnav"},cm=["aria-expanded"],dm={class:"qc-subnav-picker-label"},um={key:0,class:"qc-subnav-picker-menu",role:"menu"},vm=["onClick"],mm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},pm={class:"qc-crumb qc-crumb-root"},fm={class:"qc-crumb qc-crumb-sub"},gm={key:1,class:"qc-crumb qc-crumb-root"},hm={class:"qc-header-center"},ym={key:0,class:"qc-search-sublabel"},bm={class:"qc-header-right"},wm={class:"qc-hdr-pop"},km=["aria-expanded"],_m={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},xm={key:0,class:"qc-bell-state"},Sm={key:1,class:"qc-bell-state"},Cm={key:2,class:"qc-bell-state"},qm={key:3,class:"qc-bell-list"},Em={class:"qc-bell-item-title"},Mm={class:"qc-bell-item-meta"},Tm={key:0},Pm={class:"qc-bell-item-time"},Dm={class:"qc-hdr-pop"},Rm=["aria-expanded"],zm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Am={class:"qc-theme-modes"},Lm=["onClick"],Im={class:"qc-theme-swatches"},Nm=["title","aria-label","onClick"],Om={key:0,class:"qc-theme-swatch-check"},jm={class:"qc-theme-custom-label"},Vm={key:0,class:"qc-navmode-switch"},Fm=["aria-label","title","aria-expanded"],Hm={key:0,class:"qc-navmode-menu",role:"menu"},Bm=["onClick","onKeydown"],Km={class:"qc-navmode-item-main"},Wm={class:"qc-user-menu"},Um=["aria-label","aria-expanded"],Gm={key:0,class:"qc-user-dropdown",role:"menu"},Ym={class:"qc-user-dropdown-header"},Jm={class:"qc-user-dropdown-name"},Qm={key:0,class:"qc-user-dropdown-chip"};function $m(a,e,p,t,f,v){var x,l,h,g,S,P,_;const R=Gt("AppIcon"),m=Gt("qc-top-tabs"),c=Gt("el-autocomplete"),k=Gt("el-slider"),n=Td("click-outside");return me(),ge("div",sm,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(me(),ge("div",im,[it(R,{name:"alert-triangle",size:14}),e[15]||(e[15]=xe("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),xe("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...o)=>t.dismissBanner&&t.dismissBanner(...o)),"aria-label":"关闭提示"},"×")])):Fe("",!0),xe("header",lm,[xe("div",nm,[xe("button",{class:"qc-icon-btn","aria-label":(x=t.state.sidebarCollapsed)!=null&&x.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...o)=>t.toggleSidebar&&t.toggleSidebar(...o))},[it(R,{name:"menu",size:20})],8,om),t.isMobile?La((me(),ge("div",rm,[xe("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...o)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...o))},[xe("span",dm,Ve(t.currentSubLabel||"二级"),1),it(R,{name:"chevron-down",size:14})],8,cm),t.openSubnavPicker?(me(),ge("div",um,[(me(!0),ge(lt,null,wt(t.subnavOptions,o=>(me(),ge("div",{key:o.key,class:ot(["qc-subnav-picker-item",{"is-active":o.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:i=>t.pickSubnav(o.key)},Ve(o.label),11,vm))),128))])):Fe("",!0)])),[[n,t.closeSubnavPicker]]):Fe("",!0),t.navMode==="tree"&&!t.isMobile?(me(),ge("div",mm,[xe("span",pm,Ve(t.crumbRoot),1),t.crumbSub?(me(),ge(lt,{key:0},[e[16]||(e[16]=xe("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),xe("span",fm,Ve(t.crumbSub),1)],64)):Fe("",!0)])):Fe("",!0),t.navMode==="toptab"&&!t.isMobile?(me(),ge(lt,{key:2},[t.hasToptabs?(me(),ra(m,{key:0})):(me(),ge("span",gm,Ve(t.crumbRoot),1))],64)):Fe("",!0)]),xe("div",hm,[it(c,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=o=>t.searchQuery=o),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:oa(()=>[it(R,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:oa(()=>[...e[17]||(e[17]=[xe("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:oa(o=>{var i,u,V,W,Y;return[xe("span",null,Ve((i=o==null?void 0:o.item)==null?void 0:i.icon)+" "+Ve(((u=o==null?void 0:o.item)==null?void 0:u.label)||((V=o==null?void 0:o.item)==null?void 0:V.name)),1),(W=o==null?void 0:o.item)!=null&&W.subLabel?(me(),ge("span",ym,Ve((Y=o==null?void 0:o.item)==null?void 0:Y.subLabel),1)):Fe("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),xe("div",bm,[La((me(),ge("div",wm,[xe("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...o)=>t.toggleBell&&t.toggleBell(...o))},[it(R,{name:"bell",size:20})],8,km),t.openBellMenu?(me(),ge("div",_m,[e[18]||(e[18]=xe("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(me(),ge("div",xm,"加载中...")):t.notifError?(me(),ge("div",Sm,"加载失败")):t.notifItems.length?(me(),ge("div",qm,[(me(!0),ge(lt,null,wt(t.notifItems,(o,i)=>(me(),ge("div",{key:o.id||i,class:ot(["qc-bell-item",{"is-fail":o.ok===0}])},[xe("div",Em,Ve(o.title||o.event_type||"事件"),1),xe("div",Mm,[Sa(Ve(o.channel||""),1),o.recipient?(me(),ge("span",Tm," · "+Ve(o.recipient),1)):Fe("",!0),xe("span",Pm,Ve(o.created_at||""),1)])],2))),128))])):(me(),ge("div",Cm,"暂无通知")),xe("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...o)=>t.goNotificationCenter&&t.goNotificationCenter(...o))},"前往通知中心 →")])):Fe("",!0)])),[[n,t.closeBell]]),La((me(),ge("div",Dm,[xe("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...o)=>t.toggleThemeMenu&&t.toggleThemeMenu(...o))},[it(R,{name:"palette",size:20})],8,Rm),t.openThemeMenu?(me(),ge("div",zm,[e[19]||(e[19]=xe("div",{class:"qc-theme-section-label"},"外观模式",-1)),xe("div",Am,[(me(),ge(lt,null,wt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],o=>xe("button",{key:o.k,class:ot(["qc-theme-mode",{"is-active":t.themeMode===o.k}]),onClick:i=>t.pickThemeMode(o.k)},Ve(o.n),11,Lm)),64))]),e[20]||(e[20]=xe("div",{class:"qc-theme-section-label"},"主题色",-1)),xe("div",Im,[(me(!0),ge(lt,null,wt(t.themeHues,o=>(me(),ge("button",{key:o,class:ot(["qc-theme-swatch",{"is-active":t.themeHue===o}]),style:Pd({background:t.hueColor(o)}),title:t.hueName(o),"aria-label":t.hueName(o),onClick:i=>t.pickThemeHue(o)},[t.themeHue===o?(me(),ge("span",Om,"✓")):Fe("",!0)],14,Nm))),128))]),it(k,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),xe("div",jm,"自定义 "+Ve(t.themeHue)+"°",1)])):Fe("",!0)])),[[n,t.closeThemeMenu]]),t.isMobile?Fe("",!0):La((me(),ge("div",Vm,[xe("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...o)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...o))},[it(R,{name:"layers",size:20})],8,Fm),t.openNavModeMenu?(me(),ge("div",Hm,[(me(!0),ge(lt,null,wt(t.NAV_MODES,o=>(me(),ge("div",{key:o.value,class:ot(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===o.value}]),role:"menuitem",tabindex:"0",onClick:i=>t.pickNavMode(o.value),onKeydown:[na(Lt(i=>t.pickNavMode(o.value),["prevent"]),["enter"]),na(Lt(i=>t.pickNavMode(o.value),["prevent"]),["space"])]},[xe("div",Km,[xe("span",null,Ve(o.label),1),t.navMode===o.value?(me(),ra(R,{key:0,name:"check",size:14})):Fe("",!0)])],42,Bm))),128))])):Fe("",!0)])),[[n,t.closeNavModeMenu]]),La((me(),ge("div",Wm,[xe("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((l=t.currentUser)==null?void 0:l.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...o)=>t.openUserMenu&&t.openUserMenu(...o))},Ve((((h=t.currentUser)==null?void 0:h.username)||"A").charAt(0).toUpperCase()),9,Um),t.showUserMenu?(me(),ge("div",Gm,[xe("div",Ym,[xe("span",Jm,Ve((g=t.currentUser)==null?void 0:g.username),1),((S=t.currentUser)==null?void 0:S.role)==="guest"?(me(),ge("span",Qm,"访客")):Fe("",!0)]),((P=t.currentUser)==null?void 0:P.role)==="admin"?(me(),ge("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=o=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=na(Lt(o=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[it(R,{name:"settings",size:16}),e[21]||(e[21]=Sa(" 重新运行初始化向导 ",-1))],32)):Fe("",!0),((_=t.currentUser)==null?void 0:_.role)!=="guest"?(me(),ge("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=o=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=na(Lt(o=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[it(R,{name:"lock",size:16}),e[22]||(e[22]=Sa(" 修改密码 ",-1))],32)):Fe("",!0),e[24]||(e[24]=xe("div",{class:"qc-user-dropdown-divider"},null,-1)),xe("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...o)=>t.handleLogout&&t.handleLogout(...o)),onKeydown:e[14]||(e[14]=na(Lt((...o)=>t.handleLogout&&t.handleLogout(...o),["prevent"]),["enter"]))},[it(R,{name:"log-out",size:16}),e[23]||(e[23]=Sa(" 退出登录 ",-1))],32)])):Fe("",!0)])),[[n,t.closeUserMenu]])])])])}const Xm=Pa(am,[["render",$m]]),Zm=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],ep={name:"qc-subnav",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=tt(()=>a.currentPage&&a.currentPage.value||""),p=tt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=tt(()=>a.navMode&&a.navMode.value||"subnav"),f=Dt({}),v=tt(()=>a.menus&&a.menus.value||[]),R=tt(()=>v.value.find(_=>_.key===e.value)||null),m=tt(()=>R.value&&R.value.subPages||[]),c=tt(()=>a.currentPageName&&a.currentPageName.value||e.value),k=_=>a.subPageNames&&a.subPageNames[_]||_,n=_=>p.value===_;function x(_){a.openTab?a.openTab(e.value,_):a.currentSubPage&&(a.currentSubPage.value=_);try{localStorage.setItem("quant_last_subpage",_)}catch{}}function l(_){a.openTab?a.openTab(e.value,_.key):a.currentSubPage&&(a.currentSubPage.value=_.key);try{localStorage.setItem("quant_last_subpage",_.key)}catch{}}function h(_){f.value[_]=!f.value[_]}const g={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}};return{state:a,currentPage:e,currentSubPage:p,navMode:t,subPages:m,currentMenu:R,collapsedGroups:f,pageTitle:c,subLabel:k,isSubActive:n,goSub:x,goSystemItem:l,toggleGroup:h,SYSTEM_GROUPS:Zm,subIcon:(_,o)=>g[_]&&g[_][o]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},tp={key:0,class:"qc-subnav-column","aria-label":"二级导航"},ap={class:"qc-subnav-column-header"},sp={class:"qc-subnav-current-label"},ip={class:"qc-subnav-column-body"},lp=["onClick"],np=["href","onClick"],op={class:"qc-subnav-group-label"},rp=["href","onClick"],cp=["href","onClick"];function dp(a,e,p,t,f,v){const R=Gt("AppIcon");return t.navMode==="subnav"?(me(),ge("aside",tp,[xe("div",ap,[xe("span",sp,Ve(t.pageTitle),1)]),xe("div",ip,[t.currentPage==="system"?(me(!0),ge(lt,{key:0},wt(t.SYSTEM_GROUPS,m=>(me(),ge("div",{key:m.label,class:"qc-subnav-group"},[xe("div",{class:"qc-subnav-group-label",onClick:c=>t.toggleGroup(m.label)},[xe("span",null,Ve(m.label),1),it(R,{name:"chevron-down",size:12,class:ot({"is-open":!t.collapsedGroups[m.label]})},null,8,["class"])],8,lp),t.collapsedGroups[m.label]?Fe("",!0):(me(!0),ge(lt,{key:0},wt(m.items,c=>(me(),ge("a",{key:c.key,class:ot(["qc-subnav-item",{"is-active":t.isSubActive(c.key)}]),href:"#"+c.key,onClick:Lt(k=>t.goSystemItem(c),["prevent"])},[it(R,{name:c.icon,size:16},null,8,["name"]),xe("span",null,Ve(c.label),1)],10,np))),128))]))),128)):t.currentPage==="shortterm"?(me(!0),ge(lt,{key:1},wt(t.SHORTTERM_GROUPS,m=>(me(),ge("div",{key:m.label,class:"qc-subnav-group"},[xe("div",op,[xe("span",null,Ve(m.label),1)]),(me(!0),ge(lt,null,wt(m.items,c=>(me(),ge("a",{key:c,class:ot(["qc-subnav-item",{"is-active":t.isSubActive(c)}]),href:"#"+t.currentPage+"/"+c,onClick:Lt(k=>t.goSub(c),["prevent"])},[it(R,{name:t.subIcon(t.currentPage,c),size:16},null,8,["name"]),xe("span",null,Ve(t.subLabel(c)),1)],10,rp))),128))]))),128)):(me(!0),ge(lt,{key:2},wt(t.subPages,m=>(me(),ge("a",{key:m,class:ot(["qc-subnav-item",{"is-active":t.isSubActive(m)}]),href:"#"+t.currentPage+"/"+m,onClick:Lt(c=>t.goSub(m),["prevent"])},[it(R,{name:t.subIcon(t.currentPage,m),size:16},null,8,["name"]),xe("span",null,Ve(t.subLabel(m)),1)],10,cp))),128))])])):Fe("",!0)}const up=Pa(ep,[["render",dp]]),vp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],mp={name:"qc-mobile-nav",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=Dt(!1),p=Dt(null),t=Dt({}),f=tt(()=>a.menus&&a.menus.value||[]),v=tt(()=>a.currentPage&&a.currentPage.value||""),R={research:"量化投研",platform:"平台管理"},m=["research","platform"];function c(o){return Array.isArray(o.subPages)&&o.subPages.length>0}function k(o){c(o)&&(t.value[o.key]=!t.value[o.key])}function n(o,i){return v.value===o.key&&a.currentSubPage&&a.currentSubPage.value===i}function x(o){return a.subPageNames&&a.subPageNames[o]||o}async function l(o){const i=f.value.find(V=>V.key===o.key),u=i&&i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(o.key,u):(a.currentPage.value=o.key,a.currentSubPage&&(a.currentSubPage.value=u)),a.navigateTo&&a.navigateTo(o.key,u)}function h(o,i){e.value=!1;const u=i||o.subPages&&o.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(o.key,u):(a.currentPage.value=o.key,a.currentSubPage&&(a.currentSubPage.value=u)),a.navigateTo&&a.navigateTo(o.key,u)}function g(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function S(){e.value=!1;const o=document.querySelector(".qc-header .qc-icon-btn");o&&o.focus()}function P(o){o.detail&&o.detail.open&&g()}function _(o){e.value&&o.key==="Escape"&&S()}return Ba(()=>{window.addEventListener("qc:drawer",P),document.addEventListener("keydown",_)}),rs(()=>{window.removeEventListener("qc:drawer",P),document.removeEventListener("keydown",_)}),{state:a,TABS:vp,menus:f,currentPage:v,drawerOpen:e,drawerFocusRef:p,drawerExpanded:t,GROUP_LABELS:R,GROUPS:m,hasSub:c,toggleDrawerMenu:k,isDrawerSubActive:n,subLabel:x,goTab:l,goMenu:h,openDrawer:g,closeDrawer:S}}},pp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},fp=["aria-current","onClick"],gp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},hp={class:"qc-drawer-header"},yp={class:"qc-drawer-brand"},bp={class:"qc-drawer-body"},wp={key:0},kp={class:"qc-nav-group-label"},_p=["href","aria-current","onClick"],xp={class:"qc-sidebar-label"},Sp=["aria-expanded","onClick"],Cp={key:0,class:"qc-drawer-children"},qp=["href","onClick"],Ep={class:"qc-drawer-footer"},Mp=["title"];function Tp(a,e,p,t,f,v){var m,c;const R=Gt("AppIcon");return me(),ge(lt,null,[xe("nav",pp,[(me(!0),ge(lt,null,wt(t.TABS,k=>(me(),ge("button",{key:k.key,class:ot(["qc-mobile-tab",{"is-active":t.currentPage===k.key}]),"aria-current":t.currentPage===k.key?"page":null,onClick:n=>t.goTab(k)},[it(R,{name:k.icon,size:22},null,8,["name"]),xe("span",null,Ve(k.label),1)],10,fp))),128))]),(me(),ra(Dd,{to:"body"},[t.drawerOpen?(me(),ge("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...k)=>t.closeDrawer&&t.closeDrawer(...k))})):Fe("",!0),t.drawerOpen?(me(),ge("div",gp,[xe("div",hp,[xe("div",yp,[e[4]||(e[4]=xe("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[xe("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),xe("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),xe("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),xe("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),xe("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),xe("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),xe("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),xe("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),xe("span",null,Ve(t.state.t("login.title")),1)]),xe("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...k)=>t.closeDrawer&&t.closeDrawer(...k))},[it(R,{name:"x",size:18})])]),xe("div",bp,[(me(!0),ge(lt,null,wt(t.GROUPS,k=>(me(),ge(lt,{key:k},[t.menus.some(n=>n.group===k)?(me(),ge("div",wp,[xe("div",kp,Ve(t.GROUP_LABELS[k]),1),(me(!0),ge(lt,null,wt(t.menus.filter(n=>n.group===k),n=>(me(),ge("div",{key:n.key,class:"qc-drawer-menu"},[xe("div",{class:ot(["qc-drawer-menu-row",{"is-active":t.currentPage===n.key}])},[xe("a",{class:ot(["qc-sidebar-item",{"is-active":t.currentPage===n.key}]),href:"#"+n.key,"aria-current":t.currentPage===n.key?"page":null,onClick:Lt(x=>t.hasSub(n)?t.toggleDrawerMenu(n):t.goMenu(n),["prevent"])},[it(R,{name:n.iconName||"",size:18},null,8,["name"]),xe("span",xp,Ve(n.name),1)],10,_p),t.hasSub(n)?(me(),ge("button",{key:0,class:ot(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[n.key]}]),"aria-expanded":!!t.drawerExpanded[n.key],"aria-label":"展开子菜单",onClick:x=>t.toggleDrawerMenu(n)},[it(R,{name:"chevron-down",size:14})],10,Sp)):Fe("",!0)],2),t.drawerExpanded[n.key]?(me(),ge("div",Cp,[(me(!0),ge(lt,null,wt(n.subPages,x=>(me(),ge("a",{key:x,class:ot(["qc-subnav-item",{"is-active":t.isDrawerSubActive(n,x)}]),href:"#"+n.key+"/"+x,onClick:Lt(l=>t.goMenu(n,x),["prevent"])},[xe("span",null,Ve(t.subLabel(x)),1)],10,qp))),128))])):Fe("",!0)]))),128))])):Fe("",!0)],64))),128))]),xe("div",Ep,[xe("button",{class:"qc-icon-btn",title:((m=t.state.currentTheme)==null?void 0:m.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=k=>{var n;return t.state.changeThemeMode&&t.state.changeThemeMode(((n=t.state.currentTheme)==null?void 0:n.value)==="dark"?"light":"dark")})},[it(R,{name:((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Mp),xe("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=k=>t.state.handleLogout&&t.state.handleLogout())},[it(R,{name:"log-out",size:18})])])])):Fe("",!0)]))],64)}const Pp=Pa(mp,[["render",Tp]]),Dp={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:p}){const t=Ta("qcState");function f(n){e("select",n)}function v(n){const x=n.strategy_names||n.strategies||[],l=x.slice(0,3),h=x.length>3?x.length-3:0,g=l.map(S=>({text:S,more:!1}));return h&&g.push({text:"+"+h,more:!0}),g}function R(n){const x=Number(n);return isFinite(x)?x.toFixed(2):"—"}function m(n){const x=Number(n);return isFinite(x)?(x>0?"+":"")+x.toFixed(2)+"%":"—"}function c(n){const x=Number(n.consensus_level);return isFinite(x)?Math.round(x*100):0}function k(n){const x=Number(n&&n.consensus_level);return isFinite(x)&&x>0}return{state:t,slots:p,select:f,displayTags:v,fmtPrice:R,fmtChange:m,pctOf:c,hasConsensus:k}}},Rp={class:"qc-stock-list"},zp=["data-copy-code","aria-label","onClick","onKeydown"],Ap={key:0,class:"qc-stock-rank"},Lp={class:"qc-stock-info"},Ip={class:"qc-stock-code"},Np={class:"qc-stock-code-num"},Op={key:0,class:"qc-stock-status is-new"},jp={key:1,class:"qc-stock-status is-out"},Vp={class:"qc-stock-name"},Fp={key:0,class:"qc-stock-consensus"},Hp={key:1,class:"qc-stock-tags"},Bp={key:2,class:"qc-stock-badge"},Kp={key:3,class:"qc-stock-data"},Wp={class:"qc-stock-price"},Up={key:4,class:"qc-stock-extra"},Gp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},Yp=["data-copy-code","aria-label","onClick","onKeydown"],Jp={key:0,class:"qc-stock-rank"},Qp={class:"qc-stock-info"},$p={class:"qc-stock-code"},Xp={class:"qc-stock-code-num"},Zp={key:0,class:"qc-stock-status is-new"},ef={key:1,class:"qc-stock-status is-out"},tf={class:"qc-stock-name"},af={key:0,class:"qc-stock-consensus"},sf={key:1,class:"qc-stock-tags"},lf={key:2,class:"qc-stock-badge"},nf={key:3,class:"qc-stock-data"},of={class:"qc-stock-price"},rf={key:4,class:"qc-stock-extra"},cf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function df(a,e,p,t,f,v){const R=Gt("qc-state-panel"),m=Gt("qc-virtual-list");return me(),ge("div",Rp,[p.loading?(me(),ra(R,{key:0,type:"loading"})):p.items.length?(me(),ge(lt,{key:2},[p.virtual?(me(),ra(m,{key:0,items:p.items,"row-height":p.rowHeight},{default:oa(({item:c,index:k})=>[xe("div",{class:ot(["qc-stock-row",{"is-active":p.activeCode===c.code}]),"data-copy-code":p.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:n=>t.select(c),onKeydown:[na(Lt(n=>t.select(c),["prevent"]),["enter"]),na(Lt(n=>t.select(c),["prevent"]),["space"])]},[p.showRank?(me(),ge("div",Ap,Ve(k+1),1)):Fe("",!0),xe("div",Lp,[xe("div",Ip,[xe("span",Np,Ve(c.code),1),c.status==="new"?(me(),ge("span",Op,Ve(p.statusText.new),1)):c.status==="out"?(me(),ge("span",jp,Ve(p.statusText.out),1)):Fe("",!0)]),xe("div",Vp,[Sa(Ve(c.name)+" ",1),ha(a.$slots,"name-suffix",{item:c,index:k})]),p.showConsensus&&t.hasConsensus(c)?(me(),ge("span",Fp,Ve(t.pctOf(c))+"% 共识",1)):Fe("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(me(),ge("div",Hp,[(me(!0),ge(lt,null,wt(t.displayTags(c),n=>(me(),ge("span",{key:n.text,class:ot(["qc-stock-tag",{"is-more":n.more}])},Ve(n.text),3))),128))])):Fe("",!0),p.showConsensus?(me(),ge("span",Bp,Ve(c.strategy_count||0)+" 策略",1)):Fe("",!0),p.showPrice&&c.price!=null?(me(),ge("div",Kp,[xe("span",Wp,Ve(t.fmtPrice(c.price)),1),xe("span",{class:ot(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Ve(t.fmtChange(c.change_pct)),3)])):Fe("",!0),t.slots.extra?(me(),ge("div",Up,[ha(a.$slots,"extra",{item:c,index:k})])):Fe("",!0),t.slots.actions?(me(),ge("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Lt(()=>{},["stop"]))},[ha(a.$slots,"actions",{item:c,index:k})])):Fe("",!0),t.slots.footer?(me(),ge("div",Gp,[ha(a.$slots,"footer",{item:c,index:k})])):Fe("",!0)],42,zp)]),_:3},8,["items","row-height"])):(me(!0),ge(lt,{key:1},wt(p.items,(c,k)=>(me(),ge("div",{key:c.code,class:ot(["qc-stock-row",{"is-active":p.activeCode===c.code}]),"data-copy-code":p.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:n=>t.select(c),onKeydown:[na(Lt(n=>t.select(c),["prevent"]),["enter"]),na(Lt(n=>t.select(c),["prevent"]),["space"])]},[p.showRank?(me(),ge("div",Jp,Ve(k+1),1)):Fe("",!0),xe("div",Qp,[xe("div",$p,[xe("span",Xp,Ve(c.code),1),c.status==="new"?(me(),ge("span",Zp,Ve(p.statusText.new),1)):c.status==="out"?(me(),ge("span",ef,Ve(p.statusText.out),1)):Fe("",!0)]),xe("div",tf,[Sa(Ve(c.name)+" ",1),ha(a.$slots,"name-suffix",{item:c,index:k})]),p.showConsensus&&t.hasConsensus(c)?(me(),ge("span",af,Ve(t.pctOf(c))+"% 共识",1)):Fe("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(me(),ge("div",sf,[(me(!0),ge(lt,null,wt(t.displayTags(c),n=>(me(),ge("span",{key:n.text,class:ot(["qc-stock-tag",{"is-more":n.more}])},Ve(n.text),3))),128))])):Fe("",!0),p.showConsensus?(me(),ge("span",lf,Ve(c.strategy_count||0)+" 策略",1)):Fe("",!0),p.showPrice&&c.price!=null?(me(),ge("div",nf,[xe("span",of,Ve(t.fmtPrice(c.price)),1),xe("span",{class:ot(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Ve(t.fmtChange(c.change_pct)),3)])):Fe("",!0),t.slots.extra?(me(),ge("div",rf,[ha(a.$slots,"extra",{item:c,index:k})])):Fe("",!0),t.slots.actions?(me(),ge("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Lt(()=>{},["stop"]))},[ha(a.$slots,"actions",{item:c,index:k})])):Fe("",!0),t.slots.footer?(me(),ge("div",cf,[ha(a.$slots,"footer",{item:c,index:k})])):Fe("",!0)],42,Yp))),128))],64)):(me(),ra(R,{key:1,type:"empty",title:p.emptyText},null,8,["title"]))])}const uf=Pa(Dp,[["render",df]]),ri={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}},vf=200,mf={name:"qc-top-tabs",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=tt(()=>a.currentPage&&a.currentPage.value||""),p=tt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=tt(()=>a.menus&&a.menus.value||[]),f=tt(()=>{const i=t.value.find(u=>u.key===e.value);return i&&i.subPages||[]}),v=tt(()=>f.value.map(i=>({key:i,label:a.subPageNames&&a.subPageNames[i]||i,icon:ri[e.value]&&ri[e.value][i]||"circle-dot"}))),R=Dt(null),m=Dt(!1),c=Dt(!1),k=Dt(!1);let n=null,x=null;function l(){const i=R.value;i&&(c.value=i.scrollLeft>2,k.value=i.scrollLeft<i.scrollWidth-i.clientWidth-2)}function h(){const i=R.value;i&&(m.value=i.scrollWidth>i.clientWidth+2,l())}function g(i){const u=R.value;u&&u.scrollBy({left:i*vf,behavior:"smooth"})}function S(i){a.openTab?a.openTab(e.value,i):a.currentSubPage&&(a.currentSubPage.value=i)}function P(i){S(i),zd(()=>{const u=R.value;if(!u)return;const V=u.querySelector('[data-tab-key="'+i+'"]');V&&V.scrollIntoView({block:"nearest",inline:"nearest"})})}const _=tt(()=>{if(!m.value)return[];const i=R.value;if(!i)return[];const u=i.getBoundingClientRect(),V=new Set;return i.querySelectorAll(".qc-top-tab").forEach(W=>{const Y=W.getBoundingClientRect();Y.left>=u.left-2&&Y.left<u.right-24&&V.add(W.getAttribute("data-tab-key"))}),v.value.filter(W=>!V.has(W.key))});function o(i,u){i.key==="ArrowLeft"?(i.preventDefault(),g(-1)):i.key==="ArrowRight"?(i.preventDefault(),g(1)):(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),S(u.key))}return Ba(()=>{h(),n=new ResizeObserver(()=>{clearTimeout(x),x=setTimeout(h,100)}),R.value&&n.observe(R.value),window.addEventListener("resize",h)}),Rd(()=>{n&&n.disconnect(),window.removeEventListener("resize",h),clearTimeout(x)}),{state:a,tabs:v,currentSubPage:p,go:S,scrollRef:R,hasOverflow:m,canScrollLeft:c,canScrollRight:k,scrollByStep:g,scrollToTab:P,hiddenTabs:_,onTabKeydown:o,updateScrollState:l}}},pf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},ff=["disabled"],gf=["data-tab-key","aria-selected","title","onClick","onKeydown"],hf={class:"qc-top-tab-label"},yf=["disabled"];function bf(a,e,p,t,f,v){const R=Gt("AppIcon"),m=Gt("el-dropdown-item"),c=Gt("el-dropdown-menu"),k=Gt("el-dropdown");return t.tabs.length?(me(),ge("div",pf,[t.hasOverflow?(me(),ge("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=n=>t.scrollByStep(-1))},"‹",8,ff)):Fe("",!0),xe("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...n)=>t.updateScrollState&&t.updateScrollState(...n))},[(me(!0),ge(lt,null,wt(t.tabs,n=>(me(),ge("div",{key:n.key,"data-tab-key":n.key,class:ot(["qc-top-tab",{"is-active":t.currentSubPage===n.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===n.key?"true":"false",title:n.label,onClick:x=>t.go(n.key),onKeydown:x=>t.onTabKeydown(x,n)},[it(R,{name:n.icon,size:14},null,8,["name"]),xe("span",hf,Ve(n.label),1)],42,gf))),128))],544),t.hasOverflow?(me(),ge("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=n=>t.scrollByStep(1))},"›",8,yf)):Fe("",!0),t.hasOverflow&&t.hiddenTabs.length?(me(),ra(k,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:oa(()=>[it(c,null,{default:oa(()=>[(me(!0),ge(lt,null,wt(t.hiddenTabs,n=>(me(),ra(m,{key:n.key,command:n.key,class:ot({"is-active":t.currentSubPage===n.key})},{default:oa(()=>[it(R,{name:n.icon,size:14},null,8,["name"]),Sa(" "+Ve(n.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:oa(()=>[e[3]||(e[3]=xe("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Fe("",!0)])):Fe("",!0)}const wf=Pa(mf,[["render",bf]]);(function(){const{ref:a,computed:e,inject:p}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=p("qcState");if(!t)return{};const f=a(!1),v=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),R=()=>{v.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},m=e(()=>t.marketData&&t.marketData.value||{}),c=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:m,bannerDismissed:v,dismissBanner:R,goMerrill:c,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:f,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(k,n){const x="sub."+k.key+"."+n,l=t.t(x);if(l!==x)return l;const h="sub."+n,g=t.t(h);return g!==h&&g?g:t.subPageNames[n]||n}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                            <div class="stock-pool-body" data-split-root :class="{ 'detail-split': detailSplitEnabled }">
                            <div class="detail-split-list" :class="{ 'w-100': !detailSplitEnabled }">
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
                            </div><!-- /.detail-split-list -->
                            <div class="split-divider" data-split-resize v-if="detailSplitEnabled"></div>
                            <!-- 右栏详情工作区 (仅双栏模式渲染, embedded 无关闭按钮) -->
                            <div class="detail-split-pane" v-if="detailSplitEnabled">
                                <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                            </div>
                            </div><!-- /.stock-pool-body -->
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:p,computed:t}=Vue,f=p(0),v=p(0),R=p(!1),m=t(()=>{const Y={day:"date",week:"week",month:"month",year:"year"},J=e.currentView&&e.currentView.value||"day";return Y[J]||"date"}),c={day:"日",week:"周",month:"月",year:"年"};function k(Y){return e.t&&e.t("view."+Y)||c[Y]||Y}function n(Y){e.switchView?e.switchView(Y):e.currentView&&(e.currentView.value=Y)}let x=null;function l(Y){const J=Y.touches&&Y.touches[0];J&&(f.value=J.clientX,v.value=J.clientY)}async function h(){if(!R.value){R.value=!0;try{await e.refreshCalendarData()}catch{}x&&clearTimeout(x),x=setTimeout(()=>{R.value=!1},500)}}function g(Y){if(!(window.innerWidth<=768))return;const J=Y.changedTouches&&Y.changedTouches[0];if(!J)return;const Z=window.__quantModules&&window.__quantModules.gestures||{};if((typeof Z.judgePullToRefresh=="function"?Z.judgePullToRefresh(v.value,J.clientY):J.clientY-v.value>=60)&&(window.scrollY||0)<=0){Y.stopPropagation(),h();return}if(e.currentSubPage.value==="pool")return;const E=J.clientX-f.value,z=J.clientY-v.value;Math.abs(E)>50&&Math.abs(E)>Math.abs(z)*1.2&&(e.navigateDate(E<0?1:-1),Y.stopPropagation())}const S=p(!1),P=p(!1),_=p(""),o=p(null),i=p([]);function u(Y){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[Y]||Y}async function V(){if(e.selectedDate.value){S.value=!0,P.value=!0,_.value="",o.value=null,i.value=[];try{const Y=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),J=await Y.json();if(!Y.ok)throw new Error(J.detail||"HTTP "+Y.status);o.value=J;const Z=J&&J.comparison||{},I=[];for(const E of Object.keys(Z)){if(E==="all_intersection")continue;const z=Z[E]||{},U=E.split("_vs_");I.push({label:u(U[0])+" ↔ "+u(U[1]),interCount:z.intersection_count||0,inter:(z.intersection||[]).join(", "),onlyS1Count:z.only_s1_count||0,onlyS1:(z.only_s1||[]).join(", "),onlyS2Count:z.only_s2_count||0,onlyS2:(z.only_s2||[]).join(", ")})}i.value=I}catch(Y){_.value=String(Y&&Y.message?Y.message:Y)}finally{P.value=!1}}}let W="";return Vue.watch(()=>{const Y=e.stockPool,J=Y&&Y.value||[];return{n:J.length,first:J[0]&&J[0].code,split:!!e.detailSplitEnabled.value}},(Y,J)=>{if(!Y.split||!Y.first||Y.n===0)return;const Z=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,I=(e.stockPool.value||[]).some(E=>E.code===Z);if(!Z||!I){if(W===Y.first&&Z&&I===!1&&Y.n>1)return;W=Y.first,e.showStockDetail&&e.showStockDetail(Y.first)}},{immediate:!0}),{...e,calType:m,pullRefreshing:R,onCalTouchStart:l,onCalTouchEnd:g,viewLabel:k,switchViewLocal:n,compareVisible:S,compareLoading:P,compareError:_,compareData:o,comparePairs:i,openStrategyCompare:V}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
                        <div class="detail-split-wrap" data-split-root :class="{ 'detail-split': detailSplitEnabled }">
                        <div class="detail-split-list" :class="{ 'w-100': !detailSplitEnabled }">
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
                        </div><!-- /.detail-split-list -->
                        <div class="split-divider" data-split-resize v-if="detailSplitEnabled"></div>
                        <div class="detail-split-pane" v-if="detailSplitEnabled">
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </div>
                        </div><!-- /.detail-split-wrap -->
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
                        <div class="detail-split-wrap" data-split-root :class="{ 'detail-split': detailSplitEnabled }">
                        <div class="detail-split-list" :class="{ 'w-100': !detailSplitEnabled }">
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
                        </div><!-- /.detail-split-list -->
                        <div class="split-divider" data-split-resize v-if="detailSplitEnabled"></div>
                        <div class="detail-split-pane" v-if="detailSplitEnabled">
                            <qc-index-detail-dialog :embedded="true"></qc-index-detail-dialog>
                        </div>
                        </div><!-- /.detail-split-wrap -->
                    </div>
                    </div>
                    <!-- 子页: 策略共识榜 -->
                    <div v-else-if="currentSubPage === 'consensus'">

                    <!-- 策略共识度排行 -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="trophy" :size="14" /> 策略共识度排行 (多策略同时选中)</div>
                        <!-- V5.16 (F3): 中栏列表 + 右栏详情工作区 (弹窗模式时仅列表全宽) -->
                        <div class="detail-split-wrap" data-split-root :class="{ 'detail-split': detailSplitEnabled }">
                        <div class="detail-split-list" :class="{ 'w-100': !detailSplitEnabled }">
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
                        </div><!-- /.detail-split-list -->
                        <div class="split-divider" data-split-resize v-if="detailSplitEnabled"></div>
                        <div class="detail-split-pane" v-if="detailSplitEnabled">
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </div>
                        </div><!-- /.detail-split-wrap -->
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
    `,setup(){const e=a("qcState"),p=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let f=0;const v=t(()=>{var C;return((C=e.merrillData)==null?void 0:C.value)||{}}),R=t(()=>{var C;return((C=e.marketData)==null?void 0:C.value)||{}}),m=t(()=>{var C;return((C=e.dashboardData)==null?void 0:C.value)||{}}),c=t(()=>{var C;return((C=e.healthMetrics)==null?void 0:C.value)||[]}),k=t(()=>{var C;return((C=e.filteredConsensusRank)==null?void 0:C.value)||[]}),n=t(()=>{const C={};for(const ve of k.value)ve.code&&ve.name&&(C[ve.code]=ve.name);return C}),x={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function l(C){return x[C]||C}const h=t(()=>R.value.date||m.value.latest_date||"-"),g=t(()=>{const C=R.value;return!C||Object.keys(C).length===0?"数据加载中...":C.is_trading_day&&C.in_trading_hours?"● 交易中":C.is_trading_day?"已收盘":"○ 非交易日"}),S=t(()=>{const C=v.value.next_stage_prediction;return C&&C.next_stage_name&&C.transition_probability>.2?`→${C.next_stage_name} ${(C.transition_probability*100).toFixed(2)}%`:""}),P=t(()=>{const C=[],ve=m.value.pool_changes||{},ke=ve.new_count||0;if(ke>0){const We=ve.new_stock_names||{},L=(ve.new_stocks||[]).map(ce=>We[ce]||n.value[ce]||ce).slice(0,4).join("、");C.push({icon:"sparkles",level:"new",text:`今日新入池 ${ke} 只${L?" · "+L:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const We of c.value.filter(L=>L.degraded))C.push({icon:"alert-triangle",level:"warn",text:`数据源 ${l(We.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const Se=v.value.timing;Se&&Se.progress_percent&&Se.progress_percent>100?C.push({icon:"clock",level:"warn",text:`美林「${v.value.name}」已超期 ${Se.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):Se&&Se.maturity&&v.value.name&&C.push({icon:"clock",level:"info",text:`美林「${v.value.name}」阶段成熟度 ${Se.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ae=R.value;return Ae&&Ae.is_trading_day===!1&&Ae.date&&C.push({icon:"calendar",level:"info",text:`${Ae.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),C}),_=t(()=>{const C=[],ve=v.value.name||"",ke=v.value.timing||{},Se=["复苏","成长","过热"],Ae=["滞胀","衰退"];Se.some($e=>ve.includes($e))&&C.push({kind:"opportunity",source:"美林",text:ve+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ae.some($e=>ve.includes($e))&&C.push({kind:"risk",source:"美林",text:ve+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),ke.progress_percent&&ke.progress_percent>100&&C.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const We=m.value.pool_changes||{},L=(We.new_count||0)-(We.out_count||0);L>=3?C.push({kind:"opportunity",source:"池变动",text:"净入池 +"+L,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):L<=-3&&C.push({kind:"risk",source:"池变动",text:"净出池 "+L,action:()=>{e.currentSubPage.value="consensus"}});const ce=R.value.market_sentiment,He=ce&&ce.text||"";(He.includes("乐观")||He.includes("积极")||He.includes("亢奋"))&&C.push({kind:"opportunity",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}}),(He.includes("悲观")||He.includes("恐慌")||He.includes("低迷"))&&C.push({kind:"risk",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}});for(const $e of c.value.filter(nt=>nt.degraded))C.push({kind:"risk",source:"数据",text:l($e.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return C}),o=t(()=>{var C;return((C=e.merrillTimeline)==null?void 0:C.value)||e.merrillTimeline||{cycles:[]}}),i=t(()=>{var C;return((C=e.timelineLoading)==null?void 0:C.value)||!1}),u=Vue.ref(null),V=Vue.ref(!1),W=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function Y(C){const ve=C&&C.currentTarget,ke=document.querySelector(".tl-click-pop");if(!ve||!ke)return;const Se=ve.getBoundingClientRect(),Ae=ke.offsetWidth||340,We=ke.offsetHeight||220,L=10,ce=ve.closest(".merrill-timeline-block"),He=ce?ce.getBoundingClientRect():Se,$e=Se.left-He.left,nt=Se.top-He.top,kt=Se.width,Ft=Se.height,Mt=He.width,St=He.height;let ct=null;$e+kt+L+Ae<=Mt?ct=$e+kt+L:$e-L-Ae>=0?ct=$e-L-Ae:ct=Math.max(8,Math.min($e,Mt-Ae-8));const Rt=nt+Ft/2-We/2,Ot=Math.max(8,Math.min(Rt,St-We-8));W.top=Ot,W.left=ct,W.right=null,W.bottom=null}const J=Vue.computed(function(){const C={};return W.top!=null&&(C.top=W.top+"px"),W.left!=null&&(C.left=W.left+"px"),W.right!=null&&(C.right=W.right+"px"),C});function Z(C,ve){let ke=null;const Se=o.value&&o.value.cycles||[];for(const Ae of Se){const We=(Ae.stages||[]).find(L=>L.stage===C&&L.is_current);if(We){ke=We;break}}if(!ke)for(const Ae of Se){const We=(Ae.stages||[]).find(L=>L.stage===C);if(We){ke=We;break}}ke&&(u.value=ke,V.value=!0,Vue.nextTick(function(){Y(ve)}))}function I(){V.value=!1,u.value=null}function E(C){const ve=e.merrillStagesConfig,Se=(ve&&ve.value?ve.value:ve||{})[C]||{};return Se.color||Se.bg_color||"var(--color-primary)"}function z(C){const ve=e.merrillStagesConfig,ke=ve&&ve.value?ve.value:ve||{};return ke[C]&&ke[C].name||""}function U(){const C=e.merrillStagesConfig;return C&&C.value?C.value:C||{}}function se(C){return U()[C]&&U()[C].description||""}function $(C){const ve=C&&C.stages?C.stages:[];if(!ve.length)return"";const ke=ve[0]&&ve[0].start?String(ve[0].start).slice(0,4):"",Se=ve[ve.length-1]||{},Ae=Se.end?String(Se.end).slice(0,4):Se.start?String(Se.start).slice(0,4):"";return ke||Ae?ke?ke+"–"+Ae:Ae:""}function ie(C){const ve=C.start?String(C.start).slice(0,4):"",ke=C.end?String(C.end).slice(0,4):ve?"至今":"";return ve?ke?ve+"–"+ke:ve:""}function N(C){const ve=C.essence||C.trigger||se(C.stage)||"";return C.highlight?ve?ve+" · "+C.highlight:C.highlight:ve}function F(){const C=v.value.indicators||{},ve=v.value.stage||"",ke={recovery:[["PMI",C.pmi],["GDP",C.gdp_growth],["M2",C.m2_growth]],overheat:[["PPI",C.ppi],["CPI",C.cpi],["PMI",C.pmi]],stagflation:[["CPI",C.cpi],["PPI",C.ppi],["GDP",C.gdp_growth]],recession:[["PMI",C.pmi],["GDP",C.gdp_growth],["CPI",C.cpi]]},Se=(ke[ve]||ke.recession).filter(Ae=>Ae[1]!=null&&Ae[1]!==0);return Se.length?"实时 · "+Se.map(Ae=>Ae[0]+" "+Ae[1]+"%").join(" ｜ "):""}function A(C,ve,ke){const Ae=(U()[C.stage]||{}).color||"var(--color-primary)",We=ve||[],L=We.map(kt=>kt.duration_months||0),ce=L.reduce((kt,Ft)=>kt+Ft,0),He=ce>0?L[ke]/ce*100:100/Math.max(1,We.length),$e=ke===0,nt=ke===We.length-1;return{flex:"0 0 "+He+"%",background:Ae,borderRadius:$e?"6px 0 0 6px":nt?"0 6px 6px 0":"0"}}function w(C){const ve=C.length;if(ve<=4)return[C];const ke=Math.ceil(ve/2);return[C.slice(0,ke),C.slice(ke).reverse()]}function M(C){const ve=U()[C]||{},ke=ve.color||"var(--color-primary)";return{background:ve.bg_color||"var(--bg-card)",borderColor:ke,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const le=Vue.reactive({}),G=Vue.ref(null);let y=null,r=null,q=null;function d(){try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((ve,ke)=>{const Se=ve.querySelector(".tl-stage-rows"),Ae=ve.querySelector(".tl-row-top"),We=ve.querySelector(".tl-row-bottom"),L=Ae?Array.from(Ae.querySelectorAll(".merrill-stage-chip")):[],ce=We?Array.from(We.querySelectorAll(".merrill-stage-chip")).reverse():[],He=L.concat(ce);if(!Se||He.length<2){le[ke]={d:"",vb:"0 0 1 1"};return}const $e=Se.getBoundingClientRect(),nt=Math.max(1,$e.width),kt=Math.max(1,$e.height),Ft=L.length,Mt=He.map(ct=>{const Rt=ct.getBoundingClientRect();return{x:Rt.left+Rt.width/2-$e.left,y:Rt.top+Rt.height/2-$e.top}});let St="M "+Mt[0].x.toFixed(1)+" "+Mt[0].y.toFixed(1);for(let ct=1;ct<Mt.length;ct++){const Rt=Mt[ct-1],Ot=Mt[ct];ct===Ft&&(St+=" L "+Rt.x.toFixed(1)+" "+Ot.y.toFixed(1)),St+=" L "+Ot.x.toFixed(1)+" "+Ot.y.toFixed(1)}le[ke]={d:St,vb:"0 0 "+nt.toFixed(1)+" "+kt.toFixed(1)}})}catch(C){console.error("[tl] buildTlPaths error",C)}}function K(C){return le[C]||{d:"",vb:"0 0 1 1"}}function re(C){G.value=C}function Q(){G.value=null}const T=Vue.ref([]);function D(C){return T.value.indexOf(C)!==-1}function H(C){const ve=T.value.slice(),ke=ve.indexOf(C);ke!==-1?ve.splice(ke,1):ve.push(C),T.value=ve,Vue.nextTick(function(){d&&d()})}function de(){const C=document.querySelector(".merrill-timeline-block");if(!C)return;const ve=C.querySelector(".tl-spine");ve?ve.scrollIntoView({behavior:"smooth",block:"end"}):C.scrollIntoView({behavior:"smooth",block:"end"})}const ee=Vue.computed(function(){const C=U();return["recovery","overheat","stagflation","recession","default"].filter(function(ke){return C[ke]&&C[ke].name}).map(function(ke){return{key:ke,name:C[ke].name,color:C[ke].color||"var(--color-primary)"}})});function oe(C){r&&clearTimeout(r),r=setTimeout(()=>{r=null,Vue.nextTick(d)},C||120)}Vue.onMounted(()=>{oe(0),oe(800),y=()=>oe(150),window.addEventListener("resize",y),q=new MutationObserver(()=>oe(120)),q.observe(document.body||document.documentElement,{childList:!0,subtree:!0})}),Vue.onBeforeUnmount(()=>{y&&window.removeEventListener("resize",y),r&&clearTimeout(r),q&&(q.disconnect(),q=null)});const qe=Vue.ref([]),Le=Vue.ref(null),De=Vue.ref(!1),Ee=Vue.ref(!1),ae=Vue.ref(7),we=Vue.ref(""),Re=Vue.ref(""),ne=Vue.computed(()=>{const C=new Set;return(qe.value||[]).forEach(function(ve){ve.task&&C.add(ve.task)}),Array.from(C).sort()}),X=Vue.computed(function(){const C=Le.value&&Le.value.success_rate||0;return C>=80?"color-success":C>=50?"color-warning":"color-danger"});function fe(C,ve){return C>0&&ve/C>=.8?"status-ok":C>0&&ve/C>=.5?"status-warn":"status-bad"}async function Me(){const C=++f;De.value=!0,Ee.value=!1;try{const ve=window.__quantModules&&window.__quantModules.core||{},ke=typeof ve.authHeaders=="function"?ve.authHeaders():{},Se=new URLSearchParams({days:String(ae.value)});we.value&&Se.set("task",we.value),Re.value&&Se.set("status",Re.value);const[Ae,We]=await Promise.all([fetch("/api/system/execution-history?"+Se.toString(),{headers:ke}).then(function(L){return L.json()}),fetch("/api/system/execution-summary?days="+ae.value,{headers:ke}).then(function(L){return L.json()})]);if(C!==f)return;qe.value=Ae&&Ae.data||[],Le.value=We&&We.data||null}catch(ve){console.error("[execution] 执行数据加载失败:",ve),Ee.value=!0}finally{C===f&&(De.value=!1)}}const Ne=window.__quantModules&&window.__quantModules.i18n||{},Ke=typeof Ne.t=="function"?Ne.t:function(C){return String(C)},rt=Vue.ref([]),dt=Vue.ref(null),Qe=Vue.ref(null),Et=Vue.ref(""),he=Vue.ref([]),be=Vue.ref(!1);let Pe=null;const ze=Vue.computed(function(){const C=Qe.value&&Qe.value.dates||[];return C.length&&!Et.value&&(Et.value=C[C.length-1].date),C}),Ge=Vue.computed(function(){const C=(rt.value||[]).find(function(ke){return ke.enabled});if(!C||C.countdown_seconds==null)return"—";const ve=C.countdown_seconds;return Math.floor(ve/3600)+"h"+String(Math.floor(ve%3600/60)).padStart(2,"0")+"m"}),Xe=Vue.computed(function(){const C=(rt.value||[]).find(function(ve){return ve.enabled});if(!C||C.countdown_seconds==null||C.countdown_seconds<0)return"";try{return new Date(Date.now()+C.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),Ye=Vue.computed(function(){const C=dt.value;return!C||C.phase==="idle"?Ke("exec.waiting"):C.phase==="running"?Ke("exec.running")+(C.current_sid?" · "+C.current_sid:""):C.phase==="done"?Ke("exec.done"):Ke("exec.failed")}),ht=Vue.computed(function(){return dt.value&&dt.value.phase==="running"?"loader":"check-circle-2"}),xt=Vue.computed(function(){const C=Qe.value&&Qe.value.dates||[];return C.length?C[C.length-1].date:"—"}),ft=Vue.computed(function(){const C=Qe.value&&Qe.value.dates||[],ve=C[C.length-1];return ve&&ve.visible?"color-success":"color-danger"}),Ze=Vue.computed(function(){const C=Qe.value&&Qe.value.dates||[],ve=C[C.length-1];return ve?ve.day_view_total:"—"});function jt(C){const ve=window.__quantModules&&window.__quantModules.core||{},ke=typeof ve.authHeaders=="function"?ve.authHeaders():{};return fetch(C,{headers:ke}).then(function(Se){return Se.json()})}async function Nt(){const C=++f;try{const[ve,ke,Se]=await Promise.all([jt("/api/strategies/execution/plan"),jt("/api/strategies/execution/status"),jt("/api/strategies/execution/results?days=7")]);if(C!==f)return;rt.value=ve&&ve.data&&ve.data.plans||[],dt.value=ke&&ke.data||null,Qe.value=Se&&Se.data||null,dt.value&&dt.value.phase==="running"?yt():ut()}catch(ve){console.error("[execution-monitor] 监控数据加载失败:",ve)}}function yt(){ut(),Pe=setInterval(function(){jt("/api/strategies/execution/status").then(function(C){dt.value=C&&C.data||null,dt.value&&dt.value.phase!=="running"&&(ut(),Nt())}).catch(function(){})},5e3)}function ut(){Pe&&(clearInterval(Pe),Pe=null)}async function Vt(C){if(!C)return;const ve=++f;be.value=!0;try{const ke=await jt("/api/strategies/execution/trace/"+encodeURIComponent(C));if(ve!==f)return;const Se=ke&&ke.data||null;he.value=Se&&Se.steps||[]}catch(ke){console.error("[execution-trace] 追溯加载失败:",ke)}finally{ve===f&&(be.value=!1)}}return Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(C){C==="execution"?(Me(),Nt()):ut()},{immediate:!0}),Vue.watch(function(){const C=e.currentSubPage&&e.currentSubPage.value,ve=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],ke=e.marketData&&e.marketData.value||{};return{sub:C,split:!!e.detailSplitEnabled.value,top5:ve.slice(0,5),rank:ve,indices:(ke.indices||[]).map(function(Se){return Se})}},function(C,ve){if(C.split){if(C.sub==="overview"){if(!C.top5.length)return;const ke=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Se=C.top5.some(function(Ae){return Ae.code===ke});(!ke||!Se)&&e.showStockDetail&&e.showStockDetail(C.top5[0].code)}else if(C.sub==="consensus"){if(!C.rank.length)return;const ke=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Se=C.rank.some(function(Ae){return Ae.code===ke});(!ke||!Se)&&e.showStockDetail&&e.showStockDetail(C.rank[0].code)}else if(C.sub==="market"){if(!C.indices.length)return;const ke=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,Se=C.indices.some(function(Ae){return Ae.code===ke});(!ke||!Se)&&e.showIndexDetail&&e.showIndexDetail(C.indices[0])}}},{immediate:!0}),{...e,todayText:h,tradingStatus:g,merrillNext:S,todayFocus:P,todaySignals:_,merrillConfigOpen:p,getTimelineStageColor:E,getTimelineStageName:z,getTimelineStageDesc:se,timelineRows:w,tlChipStyle:M,tlPathFor:K,tlCycleYears:$,tlGanttStyle:A,tlTipYears:ie,tlTipBrief:N,tlCurrentBrief:F,tlHoverKey:G,setTlHover:re,clearTlHover:Q,collapsedCycles:T,isCycleCollapsed:D,toggleCycle:H,scrollToLatest:de,tlLegendStages:ee,tlClickStage:u,tlClickVisible:V,closeTlClick:I,tlClickPosStyle:J,merrillTimeline:o,timelineLoading:i,showTimelineStage:Z,execHistory:qe,execSummary:Le,execLoading:De,execError:Ee,execDays:ae,execTaskFilter:we,execStatusFilter:Re,execTaskOptions:ne,execSuccessClass:X,loadExecutionData:Me,execRateClass:fe,execPlan:rt,execStatus:dt,execResults:Qe,execTraceDate:Et,execTraceSteps:he,execTraceLoading:be,execResultsDates:ze,execCountdownText:Ge,execNextRunText:Xe,execPhaseText:Ye,execStatusIcon:ht,execLastDate:xt,execVisibleClass:ft,execVisibleText:Ze,loadExecutionTrace:Vt}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};function p(L){e.currentSubPage.value=L}function t(){we(),Re(),ne()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,L=>{L==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),L==="datadict"&&q(),L==="health"&&M(),L==="notification"&&t()});const f=e.themeHues||[45,220,0,140,270,320],v=e.themeHueNames||{},R=e.themeMode||Vue.computed(()=>"light"),m=e.themeHue||Vue.ref(45);function c(L){e.changeThemeMode&&e.changeThemeMode(L)}function k(L){e.changeThemeHue&&e.changeThemeHue(parseInt(L,10))}function n(L){return e.hueColor?e.hueColor(L):"hsl("+L+", 75%, 42%)"}function x(L){return e.hueName?e.hueName(L):v[L]||"自定义 "+L}function l(L){e.setNavMode&&e.setNavMode(L)}const h=Vue.ref([]),g=Vue.ref(""),S=Vue.ref("read"),P=Vue.ref(""),_=Vue.ref(!1),o=()=>window.__quantModules&&window.__quantModules.core||{},i=Vue.ref([]),u=Vue.ref(!1);async function V(){u.value=!0;try{const L=await fetch("/api/audit/logs?limit=20",{headers:o().authHeaders?o().authHeaders():{}}).then(function(ce){if(!ce.ok)throw new Error("HTTP "+ce.status);return ce.json()});i.value=L&&L.logs||[]}catch(L){console.error("[system] 审计加载失败:",L),i.value=[]}finally{u.value=!1}}const W=Vue.ref(!1),Y=Vue.ref(null),J=Vue.ref(null),Z=Vue.ref([]),I=Vue.ref(null);function E(L){return L==="completed"?"完成":L==="running"?"运行中":L==="pending"?"排队中":L==="cancelled"?"已取消":"失败"}async function z(){try{const ce=await(await fetch("/api/jobs?limit=20")).json();ce&&ce.success&&(Z.value=ce.data&&ce.data.tasks||[])}catch(L){console.warn("[system] 加载任务队列失败:",L)}}async function U(L){try{await fetch("/api/jobs/"+L+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),z()}catch(ce){console.warn("[system] 取消任务失败:",ce)}}function se(){z(),I.value=window.setInterval(z,15e3)}const $=Vue.ref({items:[]}),ie=Vue.ref([]),N=Vue.ref(null),F=Vue.ref({data_sources:[],alerts:[]}),A=function(){return o().authHeaders?o().authHeaders():{}},w=function(L){return fetch(L,{headers:A()}).then(function(ce){if(!ce.ok)throw new Error("HTTP "+ce.status);return ce.json()})};async function M(){W.value=!0,Y.value=null;try{const[L,ce,He,$e]=await Promise.all([w("/api/reliability/freshness"),w("/api/reliability/heal-history?limit=20"),w("/api/reliability/startup-report"),w("/api/reliability/source-health")]);$.value=L&&L.data||{items:[]},ie.value=ce&&ce.data||[],N.value=He&&He.data||null,F.value=$e||{data_sources:[],alerts:[]},J.value=new Date().toLocaleTimeString()}catch(L){console.warn("[health] 加载失败:",L),Y.value="健康数据加载失败: "+(L.message||""),$.value={items:[]},ie.value=[]}finally{W.value=!1}}const le=Vue.ref(!1),G=Vue.ref(""),y=Vue.ref(""),r=Vue.ref({fields:[]});async function q(){le.value=!0,G.value="";try{const L="/api/data-dict"+(y.value?"?category="+y.value:""),ce=await w(L);r.value=ce&&ce.data||{fields:[]}}catch(L){console.warn("[dict] 加载失败:",L),G.value="数据字典加载失败: "+(L.message||""),r.value={fields:[]}}finally{le.value=!1}}function d(L){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[L]||"var(--text-secondary)"}function K(L){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[L]||L}const re=Vue.computed(()=>($.value?$.value.items||[]:[]).filter(ce=>ce.status==="stale"||ce.status==="missing").length),Q=Vue.ref("rules"),T=Vue.ref([]),D=Vue.ref([]),H=Vue.ref([]),de=Vue.ref(!1),ee=Vue.ref(""),oe=Vue.ref("price_above"),qe=Vue.ref(""),Le=Vue.ref(!1),De=Vue.ref(60),Ee=Vue.ref("");function ae(L){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[L]||L}async function we(){de.value=!0;try{const L=await(await fetch("/api/alerts/rules")).json();T.value=L&&L.rules||[]}catch(L){Ee.value="规则加载失败: "+L}finally{de.value=!1}}async function Re(){de.value=!0;try{const L=await(await fetch("/api/alerts/history?limit=50")).json();D.value=L&&L.history||[]}catch(L){Ee.value="历史加载失败: "+L}finally{de.value=!1}}async function ne(){de.value=!0;try{const L=await(await fetch("/api/alerts/channels")).json(),ce=await(await fetch("/api/alerts/silence")).json();H.value=L&&L.channels||[],Le.value=!!(ce&&ce.silenced)}catch(L){Ee.value="通道状态加载失败: "+L}finally{de.value=!1}}function X(L){Q.value=L,L==="rules"?we():L==="history"?Re():ne()}async function fe(){const L=ee.value.trim();if(!L){Ee.value="请填写股票代码";return}de.value=!0;try{const ce={stock_code:L,rule_type:oe.value};if(oe.value!=="new_pool"){const $e=Number(qe.value);if(isNaN($e)){Ee.value="阈值必须为数值";return}ce.threshold=$e}const He=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ce)})).json();He&&He.rule?(Ee.value="规则已添加",ee.value="",qe.value="",we()):Ee.value=He&&He.detail||"添加失败"}catch(ce){Ee.value="添加失败: "+ce}finally{de.value=!1}}async function Me(L){try{await fetch("/api/alerts/rules/"+L.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!L.enabled})}),L.enabled=!L.enabled}catch(ce){Ee.value="切换失败: "+ce}}async function Ne(L){try{const ce=await(await fetch("/api/alerts/rules/"+L.id,{method:"DELETE"})).json();ce&&ce.success?(Ee.value="规则已删除",we()):Ee.value="删除失败"}catch(ce){Ee.value="删除失败: "+ce}}async function Ke(){try{const L=Le.value?De.value:0,ce=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:L})})).json();Le.value=!!(ce&&ce.silenced),Ee.value=Le.value?"已静默":"已恢复推送"}catch(L){Ee.value="静默设置失败: "+L}}async function rt(){Le.value=!1,await Ke()}function dt(L){return!!L&&!L.degraded}const Qe=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ce,He)=>Math.max(ce,He.views||0),0)||1),Et=()=>o().OPENAPI_ROUTE_BASE||"/api/openapi";async function he(){_.value=!0;try{const L=await o().apiFetch(Et()+"/keys");h.value=L&&L.data||[]}catch(L){ElementPlus.ElMessage.error("加载 API Key 失败: "+(L.message||""))}finally{_.value=!1}}async function be(){try{const L=await o().apiFetch(Et()+"/keys",{method:"POST",body:JSON.stringify({name:g.value||"未命名",role:S.value||"read",expire_days:365})});L&&L.success?(P.value=L.api_key||"",g.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await he()):ElementPlus.ElMessage.error(L&&(L.detail||L.message)||"生成失败")}catch(L){ElementPlus.ElMessage.error("生成失败: "+(L.message||""))}}async function Pe(){if(P.value)try{await navigator.clipboard.writeText(P.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function ze(L){try{const ce=await o().apiFetch(Et()+"/keys/"+L.id,{method:"DELETE"});ce&&ce.success?(ElementPlus.ElMessage.success("Key 已吊销"),P.value&&L.prefix&&P.value.includes(L.prefix)&&(P.value=""),await he()):ElementPlus.ElMessage.error(ce&&(ce.detail||ce.message)||"吊销失败")}catch(ce){ElementPlus.ElMessage.error("吊销失败: "+(ce.message||""))}}const Ge={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Xe(L){return Ge[L]||L}const Ye=computed(()=>{var L;return(((L=e.healthMetrics)==null?void 0:L.value)||[]).map(ce=>({name:Xe(ce.name),source:ce.name,success_rate:ce.success_rate,avg_latency_ms:ce.avg_latency_ms,calls:ce.calls||0,degraded:!!ce.degraded,data_age_hours:ce.data_age_hours!=null?ce.data_age_hours:null,stale:!!ce.stale,last_fetch:ce.last_fetch||ce.last_success||null}))});function ht(L){return L.degraded?"degraded":L.success_rate==null?"unknown":L.success_rate>=90?"ok":L.success_rate>=60?"warn":"bad"}function xt(L){return L==null?"":L<1?"刚刚":L<24?Math.round(L)+"小时前":Math.floor(L/24)+"天前"}const ft=e.aiUsage||Vue.ref({}),Ze=Vue.computed(()=>{const L=ft.value&&ft.value.by_model||{};return Object.entries(L).map(([ce,He])=>({name:ce,count:He})).sort((ce,He)=>He.count-ce.count)}),jt=Vue.computed(()=>Ze.value.reduce((L,ce)=>Math.max(L,ce.count),0)||1),Nt=Vue.computed(()=>Ze.value.reduce((L,ce)=>L+ce.count,0)||1),yt=Vue.computed(()=>ut.value.reduce((L,ce)=>Math.max(L,ce.count),0)||0),ut=Vue.computed(()=>{const L=ft.value&&ft.value.by_day||{},ce=[],He=new Date;for(let $e=29;$e>=0;$e--){const nt=new Date(He.getFullYear(),He.getMonth(),He.getDate()-$e),kt=nt.getFullYear()+"-"+String(nt.getMonth()+1).padStart(2,"0")+"-"+String(nt.getDate()).padStart(2,"0");ce.push({day:kt,count:L[kt]||0})}return ce}),Vt=Vue.computed(()=>ut.value.reduce((L,ce)=>Math.max(L,ce.count),0)||1),C=Vue.computed(()=>{const L=ft.value&&ft.value.by_day||{},ce=new Date,He=ce.getFullYear()+"-"+String(ce.getMonth()+1).padStart(2,"0")+"-"+String(ce.getDate()).padStart(2,"0");return L[He]||0}),ve=Vue.computed(()=>{const L=ft.value&&ft.value.by_day||{},ce=Object.keys(L).filter(He=>(L[He]||0)>0);return ce.length?ce[ce.length-1]:""});function ke(L){e.analyticsDays&&(e.analyticsDays.value=L),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const Se='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ae='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function We(L){return L?Ae:Se}return se(),{...e,themeHues:f,themeHueNames:v,themeMode:R,themeHue:m,onThemeModeChange:c,setThemeHue:k,hueColor:n,hueName:x,onNavModeChange:l,analyticsMaxViews:Qe,aiModelRank:Ze,aiModelMax:jt,aiDayTrend:ut,aiDayMax:Vt,todayAiCalls:C,lastAiCallDay:ve,aiTotal:Nt,aiDayPeak:yt,setAnalyticsDays:ke,viewIcon:We,openApiKeys:h,openApiKeyName:g,openApiKeyRole:S,newOpenApiKey:P,openApiLoading:_,loadOpenApiKeys:he,generateOpenApiKey:be,copyOpenApiKey:Pe,revokeOpenApiKey:ze,healthRows:Ye,healthClass:ht,fmtAge:xt,staleAssetCount:re,jobQueue:Z,loadJobQueue:z,cancelJob:U,jobStatusText:E,auditLogs:i,auditLoading:u,loadAuditLogs:V,healthLoading:W,healthError:Y,healthUpdatedAt:J,freshnessData:$,healHistory:ie,startupReport:N,sourceHealth:F,refreshHealth:M,statusColor:d,statusLabel:K,sourceOk:dt,dictLoading:le,dictError:G,dictCategory:y,dictData:r,loadDataDict:q,ncTab:Q,ncRules:T,ncHistory:D,ncChannels:H,ncLoading:de,ncNewCode:ee,ncNewType:oe,ncNewThreshold:qe,ncSilence:Le,ncSilenceMinutes:De,ncMsg:Ee,ncTypeLabel:ae,onNcTab:X,loadAlertRules:we,loadAlertHistory:Re,loadAlertChannels:ne,addAlertRule:fe,toggleAlertRule:Me,removeAlertRule:Ne,applySilence:Ke,clearSilence:rt,goSystemSub:p}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                                            <span v-else-if="getWatchlistScore(stock.code)" class="watchlist-score-badge" :style="{background: getWatchlistScore(stock.code).bg, color: getWatchlistScore(stock.code).color}">
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
                </div>`,setup(){const{ref:e,watch:p,onUnmounted:t}=Vue,f=a("qcState");if(!f)return{};function v(){if(!f.hasMoreAiHistory||!f.loadMoreAiHistory||f.currentPage.value!=="ai"||f.currentSubPage.value!=="history")return;const D=document.documentElement;D.scrollTop+window.innerHeight>=D.scrollHeight-300&&f.loadMoreAiHistory()}window.addEventListener("scroll",v,{passive:!0}),t(()=>window.removeEventListener("scroll",v));const R=e(null),m=e(!1),c=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function k(D){return!D||D.total===0||D.rate===null||D.rate===void 0?"--":D.rate.toFixed(2)+"%"}const n=e(5);function x(D){n.value=D}function l(D,H){if(!D)return"--";if(D.available===!1)return"— 数据不可达";const de=D["hit_n"+H];return de===!0?"✓ 命中":de===!1?"✗ 未中":"– 中性/待验证"}async function h(){m.value=!0;try{const H=await(await fetch("/api/ai/track")).json();R.value=H&&H.success?H.data:null}catch(D){console.warn("[eval-track] 评估命中率加载失败:",D),R.value=null}finally{m.value=!1}}p(function(){return f.currentPage.value+"/"+f.currentSubPage.value},function(D){D==="ai/evaluation-analysis"&&h()},{immediate:!0});const g=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:S,summary:P,trades:_,loading:o,loadError:i,showAddForm:u,addForm:V,addSaving:W,tradeFormVisible:Y,tradeForm:J,tradeSaving:Z,portfolioTab:I,equityDays:E,equityLoading:z,equityNote:U,equityHasData:se,loadPortfolio:$,addPosition:ie,removePosition:N,openTradeForm:F,submitTrade:A,loadTrades:w,loadEquity:M,fmtSigned:le,fmtSignedPct:G,signClass:y,riskTab:r,riskLoading:q,riskNote:d,riskHasData:K,riskData:re,riskMetricList:Q,loadRisk:T}=g;return p(S,function(D){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((D||[]).map(function(H){return{code:H.stock_code,name:H.stock_name||H.stock_code}}))},{deep:!0}),p(function(){return f.currentPage.value+"/"+f.currentSubPage.value},function(D){D==="ai/portfolio"?($(),w(),M(E?E.value:30),typeof T=="function"&&T()):D==="ai/overview"&&$()},{immediate:!0}),{...f,trackData:R,trackLoading:m,trackWindows:c,fmtTrackRate:k,loadTrack:h,trackWindow:n,setTrackWindow:x,trackHitText:l,positions:S,summary:P,trades:_,loading:o,loadError:i,showAddForm:u,addForm:V,addSaving:W,tradeFormVisible:Y,tradeForm:J,tradeSaving:Z,portfolioTab:I,equityDays:E,equityLoading:z,equityNote:U,equityHasData:se,loadPortfolio:$,addPosition:ie,removePosition:N,openTradeForm:F,submitTrade:A,loadTrades:w,loadEquity:M,fmtSigned:le,fmtSignedPct:G,signClass:y,riskTab:r,riskLoading:q,riskNote:d,riskHasData:K,riskData:re,riskMetricList:Q,loadRisk:T}}}})();(function(){const{ref:a,computed:e,watch:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const f=t("qcState"),v=Vue.ref(!1),R=Vue.ref(!1);let m=0;if(!f)return{};const c=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function k(b){c.value=b;try{localStorage.setItem("quant_strategy_mode",b)}catch{}f.currentSubPage.value="strategy-manage"}const n=a([]),x=a(!1),l=a(!1),h=a(""),g=a(null),S=a(!1),P=a(!1);async function _(){const b=++m;x.value=!0,l.value=!1;try{const s=await fetch("/api/market/reviews?limit=30",{headers:L()}).then(j=>j.json());if(b!==m)return;s&&s.success?n.value=Array.isArray(s.data)?s.data:[]:l.value=!0}catch(s){console.error("[market-review] 复盘列表加载失败:",s),l.value=!0}finally{b===m&&(x.value=!1)}}function o(b){h.value=b,Y(b)}function i(b){h.value===b?W():o(b)}function u(b){return b==null||isNaN(Number(b))?"—":(Number(b)>=0?"+":"")+Number(b).toFixed(2)+"%"}function V(b){return b==null||isNaN(Number(b))?"—":Number(b).toFixed(2)}function W(){h.value="",g.value=null,P.value=!1}async function Y(b){const s=++m;S.value=!0,P.value=!1,g.value=null;try{const j=b?"/api/market/review?date="+encodeURIComponent(b):"/api/market/review",te=await fetch(j,{headers:L()}).then(_e=>_e.json());if(s!==m)return;te&&te.success?g.value=te.data:P.value=!0}catch(j){console.error("[market-review] 复盘详情加载失败:",j),P.value=!0}finally{s===m&&(S.value=!1)}}function J(b){return b>0?"up":b<0?"down":"flat"}function Z(b){return b==null||isNaN(Number(b))?"—":(b>0?"+":"")+Number(b).toFixed(2)+"%"}function I(b){const s={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(b||{}).map(function(j){const te=j[0],_e=j[1],Ce=!_e||_e==="unavailable"||_e==="数据不可达";return{label:s[te]||te,value:Ce?"数据不可达":_e,unavailable:Ce}})}const E=a([]),z=a(!1),U=a(!1),se=a(""),$=a(""),ie=a(""),N=a({}),F=a(!1),A=a(""),w=a(""),M=a([]),le=a([]),G=a(""),y=a(""),r=a(!0),q=a(!0),d=a("20:00"),K=a("default"),re=a(!1),Q=a(""),T=e(function(){return E.value.find(function(b){return b.id===ie.value})||null});async function D(b,s){s=s||{},s.headers=Object.assign({},s.headers||{});const j=localStorage.getItem("quant_token")||"";return j&&(s.headers.Authorization="Bearer "+j),fetch(b,s)}async function H(){const b=++m;z.value=!0,U.value=!1,se.value="",$.value="";try{const s=await D("/api/strategies").then(function(te){return te.json()});if(b!==m)return;let j=null;Array.isArray(s)?j=s:s&&Array.isArray(s.strategies)?(j=s.strategies,s.warn&&($.value=String(s.warn))):(U.value=!0,se.value=s&&s.detail?String(s.detail):"策略列表加载失败（接口返回异常）"),j!==null&&(E.value=j,E.value.length&&!ie.value&&(ie.value=E.value[0].id,de()))}catch(s){console.error("[research] 策略列表加载失败:",s),U.value=!0,se.value="策略列表加载失败: "+(s&&s.message||"网络错误")}finally{b===m&&(z.value=!1)}}function de(){const b=T.value;b&&(N.value={},b.schema.forEach(function(s){N.value[s.key]=s.default}),w.value="",X(),ee(),De())}async function ee(){if(!ie.value){le.value=[];return}try{const b=await D("/api/strategies/"+ie.value+"/profiles").then(function(s){return s.json()});le.value=b&&b.data&&b.data.profiles||[],G.value=""}catch(b){console.error("[research] 方案列表加载失败:",b),le.value=[]}}async function oe(){v.value=!0;const b=(y.value||"").trim();if(!b){window._core&&window._core.showToast("请输入方案名称");return}try{const s=await D("/api/strategies/"+ie.value+"/profiles",{method:"POST",body:JSON.stringify({name:b,params:N.value})}).then(function(j){return j.json()});if(s&&s.detail){window._core&&window._core.showToast(String(s.detail));return}y.value="",await ee(),window._core&&window._core.showToast("方案已保存")}catch(s){console.error("[research] 方案保存失败:",s),window._core&&window._core.showToast("方案保存失败")}}function qe(){const b=le.value.find(function(s){return s.id===G.value});b&&(Object.keys(b.params||{}).forEach(function(s){N.value[s]=b.params[s]}),window._core&&window._core.showToast("已应用方案: "+b.name))}async function Le(){if(G.value)try{await D("/api/strategies/"+ie.value+"/profiles/"+G.value,{method:"DELETE"}).then(function(b){return b.json()}),await ee(),window._core&&window._core.showToast("方案已删除")}catch(b){console.error("[research] 方案删除失败:",b)}}async function De(){try{const b=await D("/api/strategies/governance").then(function(te){return te.json()}),j=(b&&b.data&&b.data.strategies||{})[ie.value]||{};r.value=j.enabled!==!1,d.value=j.schedule||"20:00",K.value=j.universe==="all"?"all":"default",q.value=j.show_in_calendar!==!1,Q.value=j.last_holdings||""}catch(b){console.error("[research] 纳管状态加载失败:",b)}}async function Ee(){try{await D("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const b={};return b[ie.value]={enabled:r.value,schedule:d.value,universe:K.value,show_in_calendar:q.value},b}()})}).then(function(b){return b.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(b){console.error("[research] 纳管更新失败:",b)}}async function ae(){if(ie.value){re.value=!0;try{const b=await D("/api/strategies/"+ie.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:A.value||void 0})}).then(function(s){return s.json()});if(b&&b.detail){window._core&&window._core.showToast(String(b.detail));return}window._core&&window._core.showToast("持仓已生成"),await De()}catch(b){console.error("[research] run-once 失败:",b),window._core&&window._core.showToast("持仓生成失败")}finally{re.value=!1}}}function we(){Q.value&&window.open(Q.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function Re(){const b=T.value;if(!b)return;const s=(y.value||"").trim()||b.name+"-副本";ne(s,Object.assign({},N.value)),window._core&&window._core.showToast("已复制为副本方案: "+s)}async function ne(b,s){try{await D("/api/strategies/"+ie.value+"/profiles",{method:"POST",body:JSON.stringify({name:b,params:s})}).then(function(j){return j.json()}),await ee()}catch(j){console.error("[research] 副本保存失败:",j)}}async function X(){const b=++m;if(ie.value)try{const s=await D("/api/strategies/"+ie.value+"/runs?limit=5").then(function(j){return j.json()});if(b!==m)return;M.value=Array.isArray(s)?s:[]}catch{M.value=[]}}async function fe(){if(ie.value){F.value=!0;try{const b=await D("/api/strategies/"+ie.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:N.value,as_of:A.value||void 0})}).then(function(s){return s.json()});b&&b.status==="success"?X():alert("运行失败: "+(b.detail||JSON.stringify(b)))}catch(b){console.error("[research] 策略运行失败:",b),alert("运行失败: "+b.message)}finally{F.value=!1}}}async function Me(){if(ie.value)try{const b=Object.keys(N.value).map(function(j){return encodeURIComponent(j)+"="+encodeURIComponent(N.value[j])}).join("&"),s=await D("/api/strategies/"+ie.value+"/ptrade-code?"+b).then(function(j){return j.json()});s&&s.code?w.value=s.code:alert("导出失败: "+(s.detail||JSON.stringify(s)))}catch(b){console.error("[research] PTrade 导出失败:",b),alert("导出失败: "+b.message)}}function Ne(){if(!w.value)return;const b=document.createElement("textarea");b.value=w.value,document.body.appendChild(b),b.select();try{document.execCommand("copy")}catch{}document.body.removeChild(b)}p(function(){return f.currentPage.value+"/"+f.currentSubPage.value},function(b){b==="research/research-overview"&&(H(),_(),ce(),aa()),(b==="research/market-review"||b==="shortterm/market-review")&&!h.value&&_(),b==="research/quant-research"&&H(),b==="research/backtest-history"&&Te()},{immediate:!0});const Ke=a("mom20"),rt=a(!1),dt=a(!1),Qe=a(null),Et=a(null),he=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],be=a('{"top_n":[10,20,30]}'),Pe=a(null),ze=a(""),Ge=a(!1),Xe=a(null);async function Ye(){if(!ie.value){ElementPlus.ElMessage.warning("请先选择策略");return}let b;try{b=JSON.parse(be.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!b||Object.keys(b).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Ge.value=!0,Pe.value=null,ze.value="";try{const s=await fetch("/api/strategies/"+ie.value+"/sweep",{method:"POST",headers:L(),body:JSON.stringify({param_grid:b})}).then(function(j){return j.json()});s&&Array.isArray(s.results)?(Pe.value=s.results,ze.value="完成 "+s.count+" 组"+(s.data_degraded?" (数据不可达, 结果降级)":""),Xe.value=s.param_stability||null):ze.value=s&&s.detail||"扫描失败"}catch(s){console.error("[sweep]",s),ze.value="扫描失败: "+s.message}finally{Ge.value=!1}}async function ht(){const b=++m;rt.value=!0;try{const s=await D("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ie.value||"multi_factor",factor_key:Ke.value,params:N.value||{}})}).then(function(te){return te.json()}),j=s&&s.report?s.report.n1||{}:{};Qe.value=j}catch(s){console.error("[research] 因子IC分析失败:",s),alert("因子 IC 分析失败: "+s.message)}finally{b===m&&(rt.value=!1)}}async function xt(){const b=++m;dt.value=!0;try{const s=await D("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ie.value||"multi_factor",factor_key:Ke.value,params:N.value||{}})}).then(function(j){return j.json()});s&&s.layers?Et.value=s:alert("分层回测: "+(s.message||"无数据"))}catch(s){console.error("[research] 分层回测失败:",s),alert("分层回测失败: "+s.message)}finally{b===m&&(dt.value=!1)}}const ft=a(null),Ze=a(!1);async function jt(){const b=++m;Ze.value=!0,ft.value=null;try{const s=await D("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ie.value||"multi_factor",factor_key:Ke.value,params:N.value||{}})}).then(function(j){return j.json()});s&&s.detail?ft.value=s.detail:alert("因子详情: "+(s.message||"无数据"))}catch(s){console.error("[research] 因子详情失败:",s),alert("因子详情失败: "+s.message)}finally{b===m&&(Ze.value=!1)}}const Nt=a([]),yt=a(null),ut=a(null),Vt=a(null),C=a(""),ve=a(!1),ke=a(!1),Se=a(""),Ae=a(""),We=a("");function L(){const b=localStorage.getItem("quant_token")||"";return b?{Authorization:"Bearer "+b,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ce(){const b=++m;try{const s=await fetch("/api/strategies/variants",{headers:L()}).then(function(j){return j.json()});if(b!==m)return;Nt.value=s&&s.data&&s.data.variants||[]}catch(s){console.error("[i3a] 加载 variants 失败:",s)}}async function He(){if(!ie.value){Se.value="请先在量化研究选择母本策略";return}ke.value=!0,Se.value="";try{const b=await fetch("/api/strategies/"+ie.value+"/clone",{method:"POST",headers:L(),body:JSON.stringify({name:(y.value||"").trim()||void 0,params:Object.assign({},N.value)})}).then(function(j){return j.json()});if(b&&b.detail){Se.value=String(b.detail);return}const s=b&&b.data;s&&s.sid&&(yt.value=s.sid,Se.value="已复制为新策略: "+s.name,await ce(),await nt(s.sid))}catch(b){console.error("[i3a] 复制失败:",b),Se.value="复制失败: "+b.message}finally{ke.value=!1}}async function $e(b){yt.value=b,Se.value="",C.value="",await nt(b)}async function nt(b){try{const s=await fetch("/api/strategies/"+b+"/selection-spec",{headers:L()}).then(function(j){return j.json()});s&&s.data&&s.data.spec&&(ut.value=Object.assign({},s.data.spec),Vt.value=s.data.fields,Ae.value=(s.data.spec.industry_scope||[]).join(","),We.value=(s.data.spec.market_cap_range||[]).join(","))}catch(s){console.error("[i3a] 加载 spec 失败:",s)}}async function kt(){if(R.value=!0,!(!yt.value||!ut.value))try{ut.value.industry_scope=Ae.value?Ae.value.split(/[,，]/).map(function(s){return s.trim()}).filter(Boolean):[],ut.value.market_cap_range=We.value?We.value.split(/[,，]/).map(Number).filter(function(s){return!isNaN(s)}):[];const b=await fetch("/api/strategies/"+yt.value+"/selection-spec",{method:"PUT",headers:L(),body:JSON.stringify({spec:ut.value})}).then(function(s){return s.json()});b&&b.data&&b.data.spec&&(ut.value=b.data.spec,Se.value="SelectionSpec 已保存")}catch(b){console.error("[i3a] 保存 spec 失败:",b),Se.value="保存失败"}}async function Ft(){if(!yt.value){Se.value="请先选择/创建微调策略";return}ke.value=!0,Se.value="";try{const b=await fetch("/api/strategies/"+yt.value+"/run-once",{method:"POST",headers:L(),body:"{}"}).then(function(s){return s.json()});Se.value=b&&b.detail?String(b.detail):"持仓已生成: "+(b&&b.data&&b.data.symbols||0)+" 只"}catch(b){console.error("[i3a] run-once 失败:",b),Se.value="生成持仓失败"}finally{ke.value=!1}}async function Mt(){if(!yt.value){Se.value="请先选择/创建微调策略";return}ut.value||await nt(yt.value),ve.value=!0,Se.value="";try{const b=await fetch("/api/strategies/"+yt.value+"/ai-trade-code",{method:"POST",headers:L(),body:JSON.stringify({spec:ut.value})}).then(function(s){return s.json()});if(b&&b.detail){Se.value=String(b.detail);return}b&&b.data&&(C.value=b.data.code||"",b.data.api_errors&&b.data.api_errors.length?Se.value="生成成功(含 API 校验告警 "+b.data.api_errors.length+" 条)":Se.value="AI 交易码已生成, 已通过矩阵内校验")}catch(b){console.error("[i3a] AI 交易码失败:",b),Se.value="AI 生成失败: "+b.message}finally{ve.value=!1}}function St(){if(C.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(C.value).then(function(){Se.value="代码已复制"});else{const b=document.createElement("textarea");b.value=C.value,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b),Se.value="代码已复制"}}const ct=a(""),Rt=a(""),Ot=a([]),_t=a(""),Yt=a(""),vt=a(""),bt=a(null),Bt=a(!1),gt=a(!1),at=a(!1);function Ht(){const b=localStorage.getItem("quant_token")||"";return b?{Authorization:"Bearer "+b,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function aa(){const b=++m;try{const s=await fetch("/api/strategies/custom",{headers:Ht()}).then(function(j){return j.json()});if(b!==m)return;Ot.value=s&&s.data&&s.data.customs||[]}catch(s){console.error("[i3b] 加载自定义策略失败:",s)}}async function da(){if(!Rt.value.trim()){vt.value="请描述策略思路";return}Bt.value=!0,vt.value="";try{const b=await fetch("/api/strategies/custom",{method:"POST",headers:Ht(),body:JSON.stringify({name:ct.value.trim()||"自定义策略",prompt:Rt.value})}).then(function(s){return s.json()});if(b&&b.detail){vt.value=String(b.detail);return}b&&b.data&&(Yt.value=b.data.code||"",vt.value="AI 代写成功: "+b.data.sid+(b.data.api_errors&&b.data.api_errors.length?" (API 告警 "+b.data.api_errors.length+" 条)":" (校验通过)"),await aa())}catch(b){console.error("[i3b] AI 代写失败:",b),vt.value="AI 代写失败: "+b.message}finally{Bt.value=!1}}async function la(){if(_t.value)try{const b=await fetch("/api/strategies/custom/"+_t.value+"/code",{headers:Ht()}).then(function(s){return s.json()});b&&b.data&&(Yt.value=b.data.code||"",vt.value="")}catch(b){console.error("[i3b] 读取代码失败:",b)}}async function Xt(){if(!_t.value){vt.value="请先选择自定义策略";return}gt.value=!0,vt.value="";try{const b=await fetch("/api/strategies/custom/"+_t.value+"/backtest",{method:"POST",headers:Ht(),body:"{}"}).then(function(s){return s.json()});if(b&&b.detail){vt.value=String(b.detail);return}b&&b.data&&(bt.value=b.data,vt.value="回测完成")}catch(b){console.error("[i3b] 回测失败:",b),vt.value="回测失败: "+b.message}finally{gt.value=!1}}async function ua(){if(!_t.value){vt.value="请先选择自定义策略";return}at.value=!0,vt.value="";try{const b=await fetch("/api/strategies/custom/"+_t.value+"/ai-optimize",{method:"POST",headers:Ht(),body:JSON.stringify({backtest:bt.value})}).then(function(s){return s.json()});if(b&&b.detail){vt.value=String(b.detail);return}b&&b.data&&(Yt.value=b.data.code||"",vt.value="AI 优化完成"+(b.data.api_errors&&b.data.api_errors.length?" (API 告警 "+b.data.api_errors.length+" 条)":" (校验通过)"))}catch(b){console.error("[i3b] AI 优化失败:",b),vt.value="AI 优化失败: "+b.message}finally{at.value=!1}}function va(){if(Yt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Yt.value).then(function(){vt.value="代码已复制"});else{const b=document.createElement("textarea");b.value=Yt.value,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b),vt.value="代码已复制"}}const Qt=Vue.ref([]),O=Vue.ref(!1),ye=Vue.ref(!1),Oe=Vue.ref(30);async function Te(){const b=++m;O.value=!0,ye.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},j=typeof s.authHeaders=="function"?s.authHeaders():{},te=await fetch("/api/backtest/history?days="+Oe.value,{headers:j}).then(function(_e){return _e.json()});if(b!==m)return;Qt.value=te&&te.data||[]}catch(s){console.error("[backtest] 回测历史加载失败:",s),ye.value=!0}finally{b===m&&(O.value=!1)}}const st=Vue.ref([]),et=Vue.ref(!1),zt=Vue.ref(!1),Kt=Vue.ref(""),Tt=Vue.ref([]),ma=Vue.ref(""),sa=Vue.ref([]),ya=Vue.ref(!1),Zt=Vue.ref(!1),Da={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function pa(b){return Da[b]||b||"—"}function Ra(b){f&&f.navigateTo&&f.navigateTo("shortterm",b)}function za(){f.currentSubPage.value="research-history",fa()}async function fa(){const b=++m;et.value=!0,zt.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},j=typeof s.authHeaders=="function"?s.authHeaders():{},te=Kt.value?"?type="+encodeURIComponent(Kt.value):"",_e=await fetch("/api/strategies/research-history"+te,{headers:j}).then(function(Ce){return Ce.json()});if(b!==m)return;st.value=_e&&_e.items||[]}catch(s){console.error("[research-history] 加载失败:",s),zt.value=!0}finally{b===m&&(et.value=!1)}}async function Wt(){const b=++m;Zt.value=!0;try{const s=window.__quantModules&&window.__quantModules.core||{},j=typeof s.authHeaders=="function"?s.authHeaders():{},te=Kt.value?"?type="+encodeURIComponent(Kt.value):"",_e=await fetch("/api/strategies/research-history/export"+te,{headers:j});if(!_e.ok)throw new Error("HTTP "+_e.status);const Ce=await _e.blob(),mt=URL.createObjectURL(Ce),Je=document.createElement("a");Je.href=mt,Je.download="research_history.csv",document.body.appendChild(Je),Je.click(),document.body.removeChild(Je),URL.revokeObjectURL(mt)}catch(s){console.error("[research-history] 导出失败:",s)}finally{b===m&&(Zt.value=!1)}}function ba(b){const s=Tt.value.indexOf(b);s>=0?Tt.value.splice(s,1):Tt.value.length<10&&Tt.value.push(b)}function Jt(b){ma.value=ma.value===b?"":b}async function wa(){const b=++m,s=Tt.value;if(!(s.length<2)){ya.value=!0;try{const j=window.__quantModules&&window.__quantModules.core||{},te=typeof j.authHeaders=="function"?j.authHeaders():{},_e=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},te),body:JSON.stringify({ids:s})}).then(function(Ce){return Ce.json()});sa.value=_e&&_e.items||[]}catch(j){console.error("[research-history] 对比失败:",j)}finally{b===m&&(ya.value=!1)}}}async function ka(b){try{const s=window.__quantModules&&window.__quantModules.core||{},j=typeof s.authHeaders=="function"?s.authHeaders():{},te=await fetch("/api/strategies/research-history/"+b,{method:"DELETE",headers:j}).then(function(_e){return _e.json()});if(te&&te.deleted){st.value=st.value.filter(function(Ce){return Ce.id!==b});const _e=Tt.value.indexOf(b);_e>=0&&Tt.value.splice(_e,1)}}catch(s){console.error("[research-history] 删除失败:",s)}}return{...f,strategyManageMode:c,openStrategyManage:k,btHistory:Qt,btHistoryLoading:O,btHistoryError:ye,btHistoryDays:Oe,loadBtHistory:Te,researchHistory:st,researchHistoryLoading:et,researchHistoryError:zt,researchHistoryType:Kt,researchHistorySelected:Tt,researchDetailId:ma,researchCompareRows:sa,researchCompareLoading:ya,researchTypeLabel:pa,goShortterm:Ra,openResearchHistory:za,loadResearchHistory:fa,researchExportLoading:Zt,exportResearchHistory:Wt,toggleResearchSelect:ba,toggleResearchDetail:Jt,runResearchCompare:wa,deleteResearchHistory:ka,marketReviews:n,marketReviewLoading:x,marketReviewError:l,selectedReviewDate:h,marketReviewDetail:g,marketReviewDetailLoading:S,marketReviewDetailError:P,loadMarketReviews:_,openMarketReview:o,toggleMarketReviewDate:i,backToMarketReviewList:W,loadMarketReviewDetail:Y,marketReviewChgClass:J,marketReviewChgText:Z,marketReviewSrcEntries:I,fmtPct:u,fmtEmotion:V,strategies:E,strategiesLoading:z,strategiesError:U,strategiesErrorText:se,strategiesWarn:$,activeStrategyId:ie,activeStrategy:T,paramValues:N,strategyRunning:F,ptradeCode:w,strategyRuns:M,savingProfile:v,variantSaving:R,loadStrategies:H,onStrategyChange:de,runActiveStrategy:fe,exportActivePtradeCode:Me,copyPtradeCode:Ne,profiles:le,profileSelect:G,profileName:y,loadProfiles:ee,saveProfile:oe,applyProfile:qe,deleteProfile:Le,govEnabled:r,govSchedule:d,govUniverse:K,govRunning:re,lastHoldings:Q,loadGov:De,updateGov:Ee,runOnceActive:ae,openLastHoldings:we,cloneStrategy:Re,govShowCalendar:q,factorKey:Ke,factorIcLoading:rt,factorLayerLoading:dt,factorIcReport:Qe,factorLayerResult:Et,factorOptions:he,runFactorIc:ht,runFactorLayer:xt,factorDetail:ft,factorDetailLoading:Ze,runFactorDetail:jt,variants:Nt,variantSelected:yt,variantSpec:ut,specFields:Vt,aiCode:C,aiCodeLoading:ve,variantBusy:ke,variantMsg:Se,loadVariants:ce,cloneNewStrategy:He,selectVariant:$e,loadVariantSpec:nt,saveVariantSpec:kt,runVariantOnce:Ft,genVariantAiCode:Mt,copyVariantCode:St,customName:ct,customPrompt:Rt,customs:Ot,customSelected:_t,customCode:Yt,customMsg:vt,customBtResult:bt,customGenLoading:Bt,customBtLoading:gt,customOptLoading:at,loadCustoms:aa,genCustomCode:da,loadCustomCode:la,runCustomBacktest:Xt,runCustomOptimize:ua,copyCustomCode:va,sweepGrid:be,sweepResult:Pe,sweepMessage:ze,sweepLoading:Ge,sweepStability:Xe,runSweep:Ye}}}})();(function(){const{inject:a,ref:e,onMounted:p,computed:t,nextTick:f}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const v=a("qcState");if(!v)return{};const R=v.currentPage,m=v.currentSubPage,c=e(""),k=e(null),n=e(!1),x=e(!1),l=e("数据加载失败"),h=e("请检查服务后重试"),g=e(null),S=e(null),P=e(!1),_=e(!1),o=e("数据加载失败"),i=e("请检查服务后重试"),u=e(null),V=e(1),W=50,Y=t(function(){const O=S.value||[];if(O.length<=200)return O;const ye=(V.value-1)*W;return O.slice(ye,ye+W)}),J=e(null),Z=e(!1),I=e(!1),E=e("数据加载失败"),z=e("请检查服务后重试"),U=e([]),se=e(!1);async function $(){se.value=!0;try{const O=await Re("/api/shortterm/dates/summary",!1);O&&O.success&&(U.value=O.dates||[])}catch{U.value=[]}finally{se.value=!1}}function ie(O){O!==c.value&&(c.value=O,nt(!0))}const N=e("行业资金流"),F=e("今日"),A=e(""),w=e(null),M=e(1),le=e(!1),G=e(!1),y=e("数据加载失败"),r=e("请检查服务后重试"),q=e(""),d=e(null),K=e(!1),re=e(null),Q=e(!1),T=e(!1),D=e(""),H=e(""),de=e(!1);function ee(){const O=localStorage.getItem("quant_token")||"";return O?{Authorization:"Bearer "+O,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const oe={},qe=[],Le=50,De=60*1e3;let Ee=0,ae=0,we=0;function Re(O,ye){const Oe=Date.now(),Te=oe[O];return!ye&&Te&&Oe-Te.ts<De?Promise.resolve(Te.data):fetch(O,{headers:ee()}).then(function(st){return st.json()}).then(function(st){if(oe[O]||qe.push(O),oe[O]={ts:Date.now(),data:st},qe.length>Le){const et=qe.shift();delete oe[et]}return st})}async function ne(O){const ye=++Ee;n.value=!0,x.value=!1;try{const Oe="/api/shortterm/pools"+(c.value?"?date="+c.value:""),Te=await Re(Oe,O);if(ye!==Ee)return;Te&&Te.success?(k.value=Te,f(ce)):Te&&Te.detail?(x.value=!0,l.value=String(Te.detail),h.value="请先登录后再查看"):(x.value=!0,l.value="数据加载失败",h.value="请检查服务后重试")}catch{if(ye!==Ee)return;x.value=!0,l.value="数据加载失败",h.value="请检查服务后重试"}finally{ye===Ee&&(n.value=!1)}}async function X(O){const ye=++Ee;P.value=!0,_.value=!1;try{const Oe="/api/shortterm/lhb"+(c.value?"?date="+c.value:""),Te=await Re(Oe,O);if(ye!==Ee)return;Te&&Te.success?(S.value=Array.isArray(Te.rows)?Te.rows:null,u.value=Te.available===!1&&Te.reason||null,V.value=1):Te&&Te.detail?(_.value=!0,o.value=String(Te.detail),i.value="请先登录后再查看"):(_.value=!0,o.value="数据加载失败",i.value="请检查服务后重试")}catch{if(ye!==Ee)return;_.value=!0,o.value="数据加载失败",i.value="请检查服务后重试"}finally{ye===Ee&&(P.value=!1)}}const fe=t(function(){const O=k.value&&k.value.ladder&&k.value.ladder.tiers;return!O||!Object.keys(O).length?"—":Object.keys(O).sort(function(ye,Oe){return ye-Oe}).map(function(ye){return ye+"板:"+O[ye]}).join(" ")}),Me=t(function(){const O=k.value&&k.value.zt||[];return g.value?O.filter(function(ye){return ye.boards===g.value}):O});function Ne(){g.value=null}const Ke=t(function(){const O=J.value&&J.value.emotion&&J.value.emotion.money_effect;return!O||!O.available?"—":O.source==="settled"?"定稿记录":O.source==="realtime"?O.partial?"实时(样本不全)":"实时":"—"}),rt=t(function(){const O=J.value&&J.value.emotion&&J.value.emotion.promotion&&J.value.emotion.promotion.tiers&&J.value.emotion.promotion.tiers["1进2"];return O?O.rate:null}),dt=t(function(){const O=J.value&&J.value.emotion&&J.value.emotion.sentiment_cycle;return O&&O.available&&O.current_score!=null?O.current_score.toFixed(2):"—"}),Qe=t(function(){const O=J.value&&J.value.emotion&&J.value.emotion.sentiment_cycle;return!O||!O.available?"—":(O.trend||"—")+(O.day_n!=null?" · 距低谷"+O.day_n+"天":"")});t(function(){const O=J.value&&J.value.emotion;if(!O)return"";const ye=[];for(const Oe of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Te=O[Oe];Te&&Te.available===!1&&Te.reason&&ye.push(String(Te.reason).replace(/^[[^]]*]s*/,""))}return ye.join("；")}),t(function(){const O=J.value&&J.value.facts;if(!O)return"";const ye=[];for(const Oe of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Te=O[Oe];Te&&Te.available===!1&&Te.reason&&ye.push(String(Te.reason).replace(/^[[^]]*]s*/,""))}return ye.join("；")});function Et(O){return O==null||isNaN(O)?"—":(O*100).toFixed(0)+"%"}function he(O,ye){return O==null?"—":(typeof O=="number"?Math.round(O*100)/100:O)+(ye||"")}function be(O){return"tag-chip mr-4"}function Pe(O){return O==null?"":O>0?"is-rise":O<0?"is-fall":""}function ze(O){return O==="机构"?"is-institution":O==="游资"?"is-hotmoney":O==="主力"?"is-main":""}const Ge=t(function(){const O=J.value&&J.value.session_status;if(!O)return"—";const ye=J.value.date;return ye===O.latest_session&&O.settled?"已收盘":ye===O.today&&O.is_trade_day&&!O.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Xe=t(function(){const O=J.value&&J.value.session_status;if(!O)return"";const ye=J.value.date;return ye===O.latest_session&&O.settled?"is-institution":ye===O.today&&O.is_trade_day&&!O.settled?"is-main":""});function Ye(O){O&&O.ts_code&&v&&v.showStockDetail&&v.showStockDetail(O.ts_code)}const ht=t(function(){return(S.value||[]).filter(function(O){return(O.tags||[]).indexOf("机构")>=0}).reduce(function(O,ye){return O+(ye.net_buy||0)},0)}),xt=t(function(){return(S.value||[]).filter(function(O){return(O.tags||[]).indexOf("游资")>=0}).length}),ft=t(function(){const O=(w.value||[]).filter(function(ye){return ye.main_net_inflow!=null});return O.length?O.reduce(function(ye,Oe){return ye.main_net_inflow>=Oe.main_net_inflow?ye:Oe}):null}),Ze=t(function(){const O=ft.value;return O?O.name:"—"}),jt=t(function(){const O=ft.value;return O?O.main_net_inflow:null}),Nt=t(function(){return q.value||"东财"}),yt=t(function(){const O=(A.value||"").trim(),ye=w.value||[];return O?ye.filter(function(Oe){return Oe.name&&String(Oe.name).indexOf(O)>=0}):ye});function ut(O){A.value=O||"",v&&v.currentSubPage&&(v.currentSubPage.value="sector")}const Vt=t(function(){const O=yt.value;if(O.length<=200)return O;const ye=(M.value-1)*W;return O.slice(ye,ye+W)}),C=["09:25","09:35","10:00","11:30","14:00","15:00"],ve=t(function(){const O={};return(re.value||[]).forEach(function(ye){O[ye.slot]=!0}),O});function ke(O){return ve.value[O]?"is-done":O===Se.value?"is-current":"is-empty"}const Se=t(function(){const O=new Date,ye=(O.getHours()<10?"0":"")+O.getHours(),Oe=(O.getMinutes()<10?"0":"")+O.getMinutes(),Te=ye+":"+Oe;for(var st=0;st<C.length;st++)if(Te===C[st])return C[st];for(var et=0;et<C.length-1;et++){var zt=C[et],Kt=new Date;Kt.setHours(Number(zt.split(":")[0]),Number(zt.split(":")[1]),0,0);var Tt=new Date(Kt.getTime()+8*6e4);if(O>=Kt&&O<=Tt)return zt}return""}),Ae=t(function(){const O=new Date,ye=Se.value;if(ye)return"当前处于快照窗口 "+ye+" (前后 8 分钟) — 可采集";const Oe=O.getHours(),Te=O.getMinutes();let st="";for(let et=0;et<C.length;et++){const zt=C[et].split(":");if(Number(zt[0])>Oe||Number(zt[0])===Oe&&Number(zt[1])>Te){st=C[et];break}}return st?"下一快照时点 "+st+" — 非窗口期不可采集":"今日快照时点已全部结束"}),We=e(""),L=e("info");function ce(){const O=k.value&&k.value.ladder&&k.value.ladder.tiers;if(!O||!Object.keys(O).length)return;const ye=window.__quantModules&&window.__quantModules.charts;if(!ye||!ye.renderSimpleChartTo)return;const Oe=g.value,Te=ye.renderSimpleChartTo("shorttermLadderChart",function(){const st=Object.keys(O).sort(function(et,zt){return Number(et)-Number(zt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:st.map(function(et){return et+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(et){return Oe&&Number(st[et.dataIndex])===Oe?"var(--color-accent)":"var(--chart-split)"}},data:st.map(function(et){return O[et]})}]}},{key:"shortterm-ladder"});Te&&Te.off&&(Te.off("click"),Te.on("click",function(st){if(!st||!st.name)return;const et=parseInt(st.name,10);isNaN(et)||(g.value=g.value===et?null:et)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ce);function He(O){if(O==null)return"—";const ye=Math.abs(O);return ye>=1e8?(O/1e8).toFixed(2)+"亿":ye>=1e4?(O/1e4).toFixed(0)+"万":O.toFixed(0)}function $e(O){return O==null?"—":(O>=0?"+":"")+O.toFixed(2)+"%"}async function nt(O){const ye=++ae;Z.value=!0,I.value=!1;try{const Oe="/api/shortterm/overview"+(c.value?"?date="+c.value:""),Te=await Re(Oe,O);if(ye!==ae)return;Te&&Te.success?J.value=Te:Te&&Te.detail?(I.value=!0,E.value=String(Te.detail),z.value="请先登录后再查看"):(I.value=!0,E.value="数据加载失败",z.value="请检查服务后重试")}catch{if(ye!==ae)return;I.value=!0,E.value="数据加载失败",z.value="请检查服务后重试"}finally{ye===ae&&(Z.value=!1)}}async function kt(O){const ye=++Ee;le.value=!0,G.value=!1;try{const Oe="/api/shortterm/sector-flow?indicator="+encodeURIComponent(F.value)+"&sector_type="+encodeURIComponent(N.value),Te=await Re(Oe,O);if(ye!==Ee)return;Te&&Te.success&&Te.available?(w.value=Te.rows||[],q.value=Te.source||(Te.note?"同花顺":"东财"),M.value=1):Te&&Te.reason?(G.value=!0,y.value="数据加载失败",r.value=String(Te.reason).replace(/^\[[^\]]*\]\s*/,"")):Te&&Te.detail?(G.value=!0,y.value=String(Te.detail),r.value="请先登录后再查看"):(G.value=!0,y.value="数据加载失败",r.value="请检查服务后重试")}catch{if(ye!==Ee)return;G.value=!0,y.value="数据加载失败",r.value="请检查服务后重试"}finally{ye===Ee&&(le.value=!1)}}async function Ft(O){const ye=++we;try{const Oe="/api/shortterm/review"+(c.value?"?date="+c.value:""),Te=await Re(Oe,O);if(ye!==we)return;Te&&Te.success&&(d.value=Te.review||null)}catch{}}async function Mt(){K.value=!0;try{const O="/api/shortterm/review"+(c.value?"?date="+c.value:""),ye=await fetch(O,{method:"POST",headers:ee()}).then(function(Oe){return Oe.json()});ye&&ye.success&&(d.value=ye,oe[O]={ts:Date.now(),data:ye})}catch{}finally{K.value=!1}}async function St(){const O=D.value.trim();if(O){de.value=!0,H.value="";try{const Oe=await fetch("/api/shortterm/review/chat",{method:"POST",headers:ee(),body:JSON.stringify({date:overviewDate.value,question:O})}).then(function(Te){return Te.json()});H.value=Oe.answer||"[无回复]"}catch{H.value="[发送失败]"}finally{de.value=!1}}}async function ct(O){const ye=++Ee;Q.value=!0;try{const Oe="/api/shortterm/intraday"+(c.value?"?date="+c.value:""),Te=await Re(Oe,O);if(ye!==Ee)return;Te&&Te.success&&(re.value=Te.snapshots||[])}catch{}finally{ye===Ee&&(Q.value=!1)}}async function Rt(){T.value=!0;try{const O="/api/shortterm/intraday/snapshot"+(c.value?"?date="+c.value:""),ye=await fetch(O,{method:"POST",headers:ee()}).then(function(Oe){return Oe.json()});ye&&ye.success?(ye.accepted?(We.value="已采集 "+ye.slot+" 快照"+(ye.pools_available&&!ye.pools_available.zt?" (池源部分不可用)":""),L.value="ok"):(We.value="⏱ "+(ye.reason||"非快照时点"),L.value="warn"),ct()):We.value="采集失败, 请稍后重试"}catch{We.value="采集失败, 请稍后重试"}finally{T.value=!1}}function Ot(){return Re("/api/shortterm/latest-session",!1).then(function(O){O&&O.date&&(c.value||(c.value=O.date))}).catch(function(){})}function _t(){const O=m.value;O==="ztpool"?ne():O==="lhb"?X():O==="overview"?(nt(),Ft()):O==="sector"?kt():O==="intraday"&&ct()}function Yt(){const O=c.value?"?date="+c.value:"";["/api/shortterm/overview"+O,"/api/shortterm/pools"+O,"/api/shortterm/lhb"+O].forEach(function(Oe){Re(Oe,!1).catch(function(){})})}function vt(){const O=m.value;O==="ztpool"?ne(!0):O==="lhb"?X(!0):O==="overview"?(nt(!0),Ft(!0)):O==="sector"?kt(!0):O==="intraday"&&ct(!0)}p(function(){Ot(),_t(),Yt(),Xt(),$()}),Vue.watch(function(){return m.value},function(O){_t(),O==="overview"&&Xt()});const bt=window.QuantOnboarding,Bt=e(!1),gt=e(bt?bt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),at=t(function(){return bt&&bt.shorttermTourSteps()[gt.value.stepIndex]||{key:"",title:"",desc:""}}),Ht=t(function(){return bt?bt.shorttermTourProgress(gt.value):{done:0,total:3,pct:0}}),aa=t(function(){return gt.value.stepIndex>=2});function da(){if(bt){var O=null;try{O=localStorage.getItem("qc_shortterm_tour")}catch{}if(O){var ye=bt.parseState(O);ye&&(gt.value=ye)}}}function la(){if(bt){var O=JSON.stringify(gt.value);try{localStorage.setItem("qc_shortterm_tour",O)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:O}})}).catch(function(){})}catch{}}}function Xt(){window.__quantGuideModalsEnabled===!0&&bt&&m.value==="overview"&&(da(),bt.shorttermTourShouldShow(gt.value)&&(Bt.value=!0))}function ua(){gt.value=bt.shorttermTourNext(gt.value),la()}function va(){gt.value=bt.shorttermTourComplete(gt.value),la(),Bt.value=!1}function Qt(){gt.value=bt.shorttermTourDismiss(gt.value),la(),Bt.value=!1}return{currentPage:R,currentSubPage:m,shortDate:c,pools:k,poolLoading:n,poolError:x,ztBoardFilter:g,filteredZt:Me,clearBoardFilter:Ne,lhbRows:S,lhbLoading:P,lhbError:_,lhbReason:u,lhbPageRows:Y,lhbPage:V,overview:J,overviewLoading:Z,overviewError:I,dateList:U,dateListLoading:se,loadDateList:$,pickDate:ie,sectorType:N,sectorIndicator:F,sectorKeyword:A,sectorRows:w,filteredSectorRows:yt,sectorPageRows:Vt,sectorPage:M,sectorLoading:le,sectorError:G,sectorFlowSource:q,PAGE_SIZE:W,gotoSector:ut,review:d,reviewRunning:K,intradaySnapshots:re,intradayLoading:Q,intradayCollecting:T,intradaySlots:C,intradayMsg:We,slotClass:ke,intradayStatus:Ae,chatQuestion:D,chatAnswer:H,chatLoading:de,loadPools:ne,loadLhb:X,loadOverview:nt,loadSectorFlow:kt,loadReview:Ft,runReview:Mt,sendChat:St,loadIntraday:ct,collectSnapshot:Rt,refreshCurrent:vt,ladderText:fe,fmtAmount:He,fmtPct:$e,riseFall:Pe,tagClass:ze,openStock:Ye,lhbInstitutionNetBuy:ht,lhbHotMoneyCount:xt,sectorTopName:Ze,sectorTopInflow:jt,sectorSource:Nt,moneySource:Ke,promotion1to2:rt,cycleScore:dt,cycleTrend:Qe,pct:Et,fmtCond:he,verdictClass:be,sessionStatusText:Ge,sessionStatusClass:Xe,shorttermTourVisible:Bt,shorttermTourState:gt,shorttermTourStep:at,shorttermTourProg:Ht,shorttermTourIsLast:aa,shorttermTourNext:ua,shorttermTourFinish:va,shorttermTourSkip:Qt}}}})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(m,c,k,n,x){var l=k>0?k:1,h=typeof x=="number"&&x>=0?x:a,g=Math.max(0,n),S=Math.max(0,m),P=Math.max(0,c),_=Math.max(0,Math.floor(S/l)-h),o=Math.min(g,Math.ceil((S+P)/l)+h);return{startIndex:_,endIndex:o}}function p(m,c){return Math.max(0,m||0)*(c>0?c:0)}function t(m,c,k,n,x){var l=m||[],h=e(c,k,n,l.length,x),g=l.slice(h.startIndex,h.endIndex);return{visible:g,startIndex:h.startIndex,endIndex:h.endIndex,offsetY:h.startIndex*(n>0?n:1),totalHeight:p(l.length,n)}}function f(m,c){if(m){if(m.code!=null)return m.code;if(m.id!=null)return m.id;if(m.ts_code!=null)return m.ts_code}return c}function v(m,c,k){var n=m||[];if(!n.length)return c>0?c:1;for(var x=Math.min(k||50,n.length),l=0,h=0,g=0;g<x;g++){var S=n[g]&&n[g].rowHeight;typeof S=="number"&&S>0&&(l+=S,h++)}return h?l/h:c>0?c:1}function R(m,c,k,n,x){var l=e(m,c,k,n,x),h=Math.max(0,n);return h?(l.endIndex-l.startIndex)/h:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:p,sliceVisible:t,getRowKey:f,estimateDynamicRowHeight:v,renderedRatio:R}});(function(){const{ref:a,computed:e,onMounted:p,onBeforeUnmount:t}=Vue,f=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:f.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(v){const R=a(null),m=a(0),c=a(400),k=e(()=>(f.computeVisibleRange||function(i,u,V,W,Y){const J=V>0?V:1,Z=Y>=0?Y:8,I=Math.max(0,W);return{startIndex:Math.max(0,Math.floor(i/J)-Z),endIndex:Math.min(I,Math.ceil((i+u)/J)+Z)}})(m.value,c.value,v.rowHeight,v.items.length,v.buffer)),n=e(()=>v.items.length*v.rowHeight),x=e(()=>k.value.startIndex),l=e(()=>k.value.endIndex),h=e(()=>v.items.slice(x.value,l.value));function g(){R.value&&(m.value=R.value.scrollTop)}function S(){R.value&&(c.value=R.value.clientHeight||400)}function P(o,i){return f.getRowKey?f.getRowKey(o,i):o&&o.code!=null?o.code:o&&o.id!=null?o.id:i}let _=null;return p(()=>{S(),R.value&&typeof ResizeObserver<"u"&&(_=new ResizeObserver(()=>S()),_.observe(R.value))}),t(()=>{_&&_.disconnect()}),{scrollEl:R,totalHeight:n,startIndex:x,endIndex:l,visibleItems:h,onScroll:g,keyOf:P}}}})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,p=60,t=500,f=10,v=88,R=350;function m(i,u,V,W,Y){Y=Y||{};var J=typeof Y.threshold=="number"?Y.threshold:a,Z=typeof Y.bias=="number"?Y.bias:e,I=V-i,E=W-u;return Math.abs(I)<J||Math.abs(I)<Math.abs(E)*Z?"none":I<0?"left":"right"}function c(i,u,V){V=V||{};var W=typeof V.threshold=="number"?V.threshold:p;return u-i>=W}function k(i,u){u=u||{};var V=typeof u.threshold=="number"?u.threshold:t;return i>=V}var n=!1;function x(i,u){return i&&typeof i.closest=="function"?i.closest(u):null}function l(i){if(!i)return"";var u=i.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(u){var V=u.getAttribute&&u.getAttribute("data-copy-code");if(V)return V.trim();var W=(u.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(W)return W[0]}var Y=i.getAttribute&&i.getAttribute("data-copy-code");return Y?Y.trim():""}function h(i){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(function(){return!0}).catch(function(){return g(i)}):Promise.resolve(g(i))}function g(i){try{var u=document.createElement("textarea");return u.value=i,u.style.position="fixed",u.style.opacity="0",document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u),!0}catch{return!1}}function S(i){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(i)}function P(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function _(){var i=null,u=null,V=null;function W(){u&&(u.timer&&clearTimeout(u.timer),u=null)}function Y(se){V={el:se,until:Date.now()+R}}function J(se){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function($){$!==se&&$.classList.remove("swipe-open")}),i&&i.el!==se&&(i=null)}function Z(se){var $=se.touches&&se.touches[0];if($){var ie=x(se.target,".swipe-reveal");ie&&(i={el:ie,x:$.clientX,y:$.clientY,moved:!1},se.stopPropagation());var N=x(se.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");N&&(W(),u={el:N,x:$.clientX,y:$.clientY,timer:setTimeout(function(){var F=l(N);u=null,F&&(Y(N),h(F).then(function(){P(),S("已复制代码 "+F)}))},t)})}}function I(se){if(i){var $=se.touches&&se.touches[0];if($){var ie=$.clientX-i.x,N=$.clientY-i.y;if(Math.abs(ie)>8&&Math.abs(ie)>Math.abs(N)*1.2){se.cancelable&&se.preventDefault(),i.moved=!0;var F=i.el.querySelector(".swipe-reveal-main")||i.el,A=Math.max(-v,Math.min(0,ie));F.style.transition="none",F.style.transform="translateX("+A+"px)",se.stopPropagation()}if(u){var w=$.clientX-u.x,M=$.clientY-u.y;(Math.abs(w)>f||Math.abs(M)>f)&&W()}}}}function E(se){if(W(),!!i){var $=i.el,ie=se.changedTouches&&se.changedTouches[0],N=i.x,F=i.y,A="none";ie&&(A=m(N,F,ie.clientX,ie.clientY));var w=i.moved;i=null;var M=$.querySelector(".swipe-reveal-main")||$;M.style.transform="",M.style.transition="",A==="left"?(J($),$.classList.add("swipe-open"),Y($)):(A==="right"||w)&&$.classList.remove("swipe-open"),se.stopPropagation()}}function z(){W(),i=null}function U(se){if(V&&Date.now()<V.until){var $=V.el.contains(se.target)||se.target===V.el,ie=se.target.closest&&se.target.closest(".swipe-reveal-actions");$&&!ie&&(se.preventDefault(),se.stopPropagation(),V=null)}}document.addEventListener("touchstart",Z,!0),document.addEventListener("touchmove",I,!0),document.addEventListener("touchend",E,!0),document.addEventListener("touchcancel",z,!0),document.addEventListener("click",U,!0)}function o(){n||typeof document>"u"||(n=!0,_())}return{judgeSwipe:m,judgePullToRefresh:c,judgeLongPress:k,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:p,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:f,REVEAL_WIDTH:v,initGestures:o,_codeFromRow:l}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function p(v){return a[v]||a.empty}function t(){const v=[];for(const R of e){const m=a[R];m.title||v.push(R+".title"),R!=="loading"&&!m.icon&&v.push(R+".icon"),typeof m.retry!="boolean"&&v.push(R+".retry"),typeof m.skeleton!="boolean"&&v.push(R+".skeleton")}return{ok:v.length===0,errors:v}}const f={VARIANTS:a,KEYS:e,resolve:p,validate:t};typeof window<"u"&&(window.QuantStatePanel=f),typeof Ie<"u"&&Ie.exports&&(Ie.exports=f)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(p){const t=a(()=>typeof e.resolve=="function"?e.resolve(p.type):{}),f=a(()=>p.icon||t.value.icon||""),v=a(()=>p.title||t.value.title||""),R=a(()=>p.desc||t.value.desc||""),m=a(()=>!!t.value.retry),c=a(()=>/^[a-z][a-z0-9-]*$/.test(String(f.value||"")));return{icon:f,title:v,desc:R,retryable:m,isIconName:c}}}})();(function(a,e){typeof Ie=="object"&&Ie.exports?Ie.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(i){return String(i||"").trim().toLowerCase()}function e(i,u){if(!i)return!0;const V=i.split(/\s+/).filter(Boolean);if(!V.length)return!0;const W=String(u||"").toLowerCase();return V.every(function(Y){return W.indexOf(Y)!==-1})}function p(){return{visible:!1,query:"",activeIndex:0}}function t(i,u){return u===void 0&&(u=!i.visible),i.visible=u,u&&(i.query="",i.activeIndex=0),i.visible}function f(i,u,V){const W=a(i);if(!u||!u.length)return[];const Y=[];return u.forEach(function(J){const Z=e(W,J.name)||e(W,J.key),I=(J.subPages||[]).filter(function(E){const z=V&&V[E]||E;return e(W,z)||e(W,E)});Z&&Y.push({type:"menu",menuKey:J.key,subPage:J.subPages&&J.subPages[0]||"",label:J.name,subLabel:"页面",icon:J.icon||"file-text"}),I.forEach(function(E){Y.push({type:"menu",menuKey:J.key,subPage:E,label:V&&V[E]||E,subLabel:J.name,icon:J.icon||"file-text"})})}),Y.slice(0,8)}function v(i,u){const V=a(i);return!u||!u.length?[]:u.filter(function(W){return!!(!V||e(V,W.label)||e(V,W.key)||W.keywords&&e(V,W.keywords))}).slice(0,8)}function R(i,u){const V=a(i);return!V||!u||!u.length?[]:u.filter(function(W){return e(V,W.code)||e(V,W.name)}).slice(0,8).map(function(W){return{type:"stock",code:W.code,name:W.name,label:W.name,subLabel:W.code,icon:"trending-up"}})}function m(i,u,V){const W=[],Y=[];return V&&V.length&&(W.push({key:"stock",label:"股票",items:V}),Y.push.apply(Y,V)),i&&i.length&&(W.push({key:"menu",label:"菜单",items:i}),Y.push.apply(Y,i)),u&&u.length&&(W.push({key:"command",label:"指令",items:u}),Y.push.apply(Y,u)),{groups:W,flat:Y}}function c(i,u,V){if(u<=0)return 0;const W=((i||0)+V)%u;return W<0?u-1:W}function k(i,u,V,W){const Y=f(i,u,V).map(function(Z){return{type:"menu",menuKey:Z.menuKey,subPage:Z.subPage,label:Z.label,subLabel:Z.subLabel,icon:Z.icon,iconName:Z.icon,value:Z.icon+" "+Z.label+" · "+Z.subLabel}}),J=v(i,W||[]).map(function(Z){return{type:"command",key:Z.key,label:Z.label,icon:Z.icon,iconName:Z.icon,subLabel:"指令",value:Z.icon+" "+Z.label}});return Y.concat(J)}function n(i){return i?i.type==="menu"?{action:"menu",menuKey:i.menuKey,subPage:i.subPage}:i.type==="command"?{action:"command",key:i.key}:i.type==="sector"?{action:"sector",name:i.name}:i.type==="strategy"?{action:"strategy",id:i.id,name:i.name}:i.type==="stock"||i.code&&i.name?{action:"stock",code:i.code,name:i.name}:null:null}const x=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var l={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function h(i){if(!i||typeof i!="string")return null;var u=i.split("+").map(function(Y){return Y.trim()}).filter(Boolean);if(!u.length)return null;var V=u.pop().toLowerCase();if(!V)return null;var W={ctrl:!1,alt:!1,shift:!1,meta:!1};return u.forEach(function(Y){var J=Y.toLowerCase();l.ctrl.indexOf(J)!==-1?W.ctrl=!0:l.alt.indexOf(J)!==-1?W.alt=!0:l.shift.indexOf(J)!==-1?W.shift=!0:l.meta.indexOf(J)!==-1&&(W.meta=!0)}),{ctrl:W.ctrl,alt:W.alt,shift:W.shift,meta:W.meta,key:V}}function g(i,u){if(!i||!u)return!1;var V=String(u.key||u.code||"").toLowerCase();return i.key!==V?!1:i.ctrl===!!u.ctrlKey&&i.alt===!!u.altKey&&i.shift===!!u.shiftKey&&i.meta===!!u.metaKey}function S(i){if(!i)return"";var u=[];return i.ctrl&&u.push("Ctrl"),i.alt&&u.push("Alt"),i.shift&&u.push("Shift"),i.meta&&u.push("Meta"),u.push(i.key.toUpperCase()),u.join("+")}function P(){var i={};return{register:function(u){if(!u||!u.key)throw new Error("命令 key 必填");if(i[u.key])throw new Error("命令重复注册: "+u.key);return i[u.key]=Object.assign({},u),u.key},list:function(){return Object.keys(i).map(function(u){return i[u]})},get:function(u){return i[u]||null},remove:function(u){delete i[u]},has:function(u){return!!i[u]},count:function(){return Object.keys(i).length}}}function _(){var i={},u={};return{register:function(V,W,Y){var J=h(V);if(!J)throw new Error("无效快捷键: "+V);var Z=S(J);if(i[Z])throw new Error("快捷键冲突: "+V);if(W!=null&&u[W]!==void 0)throw new Error("动作重复绑定: "+W);return i[Z]={combo:V,action:W,description:Y||"",parsed:J},u[W]=Z,Z},resolve:function(V){for(var W in i)if(g(i[W].parsed,V))return i[W].action;return null},list:function(){return Object.keys(i).map(function(V){return i[V]})},unregister:function(V){var W=S(h(V));i[W]&&(delete u[i[W].action],delete i[W])},count:function(){return Object.keys(i).length}}}function o(){var i=_();return i.register("Ctrl+K","toggle-palette","打开命令面板"),i.register("F5","refresh","刷新当前页"),i.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),i.register("Ctrl+J","open-ai","打开 AI 问股"),i.register("Ctrl+D","open-today","今日一屏"),i.register("Ctrl+E","batch-eval","批量 AI 评估"),i.register("Ctrl+G","add-portfolio","加入组合"),i.register("Ctrl+H","open-eval-history","打开评估历史"),i.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),i}return{normalize:a,createPaletteState:p,toggleVisible:t,searchMenus:f,searchCommands:v,filterStocksLocal:R,mergeResults:m,moveIndex:c,buildSearchSuggestions:k,dispatchSearchSelection:n,DEFAULT_COMMANDS:x,parseKeyCombo:h,matchShortcut:g,canonicalCombo:S,createCommandRegistry:P,createShortcutRegistry:_,createDefaultShortcuts:o}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof Ie<"u"&&Ie.exports?Ie.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var p=e();typeof Ie=="object"&&Ie.exports&&(Ie.exports=p),a.QuantOnboarding=p})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],e=a.length,p=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=p.length;function f(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function v(){return p.slice()}function R(E){return E<0?0:E>=t?t-1:E}function m(E){return{stepIndex:E.stepIndex,completed:!!E.completed,dismissed:!!E.dismissed,updatedAt:E.updatedAt||0}}function c(E){return m(Object.assign({},E,{stepIndex:R((E.stepIndex||0)+1),updatedAt:Date.now()}))}function k(E){return m(Object.assign({},E,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function n(E){return m(Object.assign({},E,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function x(E){var z=Math.min(E&&E.stepIndex||0,t);return{done:z,total:t,pct:Math.round(z/t*100)}}function l(E){return!!(E&&!E.completed&&!E.dismissed)}function h(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function g(){return a.slice()}function S(){return e}function P(E){return E<0?0:E>=e?e-1:E}function _(E){return{stepIndex:E.stepIndex,completed:!!E.completed,dismissed:!!E.dismissed,updatedAt:E.updatedAt||0}}function o(E){return _(Object.assign({},E,{stepIndex:P((E.stepIndex||0)+1),updatedAt:Date.now()}))}function i(E){return _(Object.assign({},E,{stepIndex:P((E.stepIndex||0)-1),updatedAt:Date.now()}))}function u(E,z){return _(Object.assign({},E,{stepIndex:P(z),updatedAt:Date.now()}))}function V(E){return _(Object.assign({},E,{completed:!0,updatedAt:Date.now()}))}function W(E){return _(Object.assign({},E,{dismissed:!0,updatedAt:Date.now()}))}function Y(E){return!!(E&&E.completed)}function J(E){var z=Math.min(E&&E.stepIndex||0,e);return{done:z,total:e,pct:Math.round(z/e*100)}}function Z(E){var z=E||h();return JSON.stringify({stepIndex:z.stepIndex,completed:!!z.completed,dismissed:!!z.dismissed,updatedAt:z.updatedAt||0})}function I(E){var z=h();if(!E||typeof E!="string")return z;try{var U=JSON.parse(E);if(!U||typeof U!="object")return z;var se=parseInt(U.stepIndex,10);return isNaN(se)?z:{stepIndex:P(se),completed:!!U.completed,dismissed:!!U.dismissed,updatedAt:U.updatedAt||0}}catch{return z}}return{ONBOARDING_STEPS:a,steps:g,stepCount:S,createOnboardingState:h,next:o,prev:i,jumpTo:u,complete:V,dismiss:W,isComplete:Y,progress:J,persistState:Z,parseState:I,SHORTTERM_TOUR_STEPS:p,shorttermTourSteps:v,createShorttermTourState:f,shorttermTourNext:c,shorttermTourComplete:k,shorttermTourDismiss:n,shorttermTourProgress:x,shorttermTourShouldShow:l}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:p}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const f=a(!1),v=a(t.createOnboardingState()),R=e(function(){return t.steps()[v.value.stepIndex]}),m=e(function(){return t.progress(v.value)}),c=e(function(){return v.value.stepIndex>=t.stepCount()-1}),k=e(function(){return"onboarding.step."+R.value.key});function n(){const P=t.persistState(v.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:P}})}).then(function(_){return _.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",P)}catch{}})}function x(){v.value=t.next(v.value)}function l(){v.value=t.prev(v.value)}function h(){v.value=t.complete(v.value),n(),f.value=!1}function g(){v.value=t.dismiss(v.value),n(),f.value=!1}function S(){fetch("/api/user_config/preferences").then(function(P){return P.json()}).then(function(P){const _=P&&P.preferences&&P.preferences.onboarding_progress;return _&&(v.value=t.parseState(_)),_}).catch(function(){return null}).then(function(P){if(!P)try{const _=localStorage.getItem("qc_onboarding_progress");_&&(v.value=t.parseState(_))}catch{}!t.isComplete(v.value)&&!v.value.dismissed&&(f.value=!0)})}return p(S),{visible:f,st:v,step:R,prog:m,isLast:c,stepKey:k,next:x,prev:l,finish:h,skip:g}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
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
    `,setup(){function a(e){try{const p=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(p)return p(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:p,nextTick:t,inject:f,onMounted:v}=Vue,R=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const m=f("qcState");if(!m)return{};const c=a(""),k=e({get:()=>m.commandPaletteVisible.value,set:N=>{m.commandPaletteVisible.value=N}}),n=a(0),x=a([]),l=a(null),h=e(()=>{const N=(R.DEFAULT_COMMANDS||[]).map(function(A){return Object.assign({},A)});return Object.keys(m.themes.value||{}).forEach(function(A){const w=m.themes.value[A];N.push({key:"theme:"+A,label:"切换主题 · "+(w.name||A),icon:"palette",keywords:"theme 主题"})}),N});function g(N){return typeof N=="string"&&/^[a-z][a-z0-9-]*$/.test(N)}const S=e(()=>m.menus.value||[]);function P(){const N=window.__quantModules&&window.__quantModules.pinyin;if(!N)return[];const F=[];return(m.watchlist&&m.watchlist.value||[]).forEach(function(A){F.push({code:A.code,name:A.name})}),(m.aiHistory&&m.aiHistory.value||[]).forEach(function(A){A&&A.stock_code&&F.push({code:A.stock_code,name:A.stock_name||A.stock_code})}),F.push.apply(F,N.getExtraStocks()),N.buildStockIndex(F)}function _(N){const F=window.__quantModules&&window.__quantModules.pinyin;return F?F.searchStocksByQuery(N,P()).map(function(A){return{type:"stock",code:A.code,name:A.name,label:A.name,subLabel:A.code,icon:"trending-up"}}):[]}function o(){const N=[],F=window.__quantModules&&window.__quantModules.recent;F&&F.getRecentViewed().slice(0,5).forEach(function(w){N.push({type:"stock",code:w.code,name:w.name||w.code,label:w.name||w.code,subLabel:"最近查看 · "+w.code,icon:"trending-up"})});const A=(m.watchlist&&m.watchlist.value||[]).slice(0,8).map(function(w){return{type:"stock",code:w.code,name:w.name||w.code,label:w.name||w.code,subLabel:"我的自选 · "+w.code,icon:"trending-up"}});return N.concat(A)}const i=e(()=>{const N=c.value;if(!N)return R.mergeResults([],[],o());const F=R.searchMenus(N,S.value,m.subPageNames),A=R.searchCommands(N,h.value),w=x.value;return R.mergeResults(F,A,w)}),u=e(()=>i.value);function V(N){return u.value.flat[n.value]===N}function W(N){n.value=u.value.flat.indexOf(N)}function Y(N){return(N.type||"")+":"+(N.code||N.menuKey||N.key||N.label)}let J=null;function Z(){const N=c.value.trim();if(N.length<1){x.value=[];return}J&&clearTimeout(J),J=setTimeout(function(){const F=_(N);x.value=F,n.value=0,m.searchStocks(N,function(A){if(c.value.trim()!==N)return;const w=(A||[]).filter(function(G){return G&&G.code&&G.name}).map(function(G){return{type:"stock",code:G.code,name:G.name,label:G.name,subLabel:G.code,icon:"trending-up"}}),M={},le=[];F.forEach(function(G){M[G.code]||(M[G.code]=!0,le.push(G))}),w.forEach(function(G){M[G.code]||(M[G.code]=!0,le.push(G))}),x.value=le,n.value=0})},200)}function I(){n.value=R.moveIndex(n.value,u.value.flat.length,1)}function E(){n.value=R.moveIndex(n.value,u.value.flat.length,-1)}function z(){const N=u.value.flat[n.value];N&&U(N)}function U(N){m.commandPaletteVisible.value=!1,N.type==="menu"?m.navigateTo(N.menuKey,N.subPage):N.type==="stock"?m.showStockDetail(N.code,N.name):N.type==="command"&&se(N.key)}function se(N){if(N==="refresh"){const F=m.currentPage.value;F==="strategies"?m.loadDashboardData().catch(function(){}):F==="calendar"?m.refreshCalendarData().catch(function(){}):F==="ai"&&m.loadAiHistory().catch(function(){})}else N==="export"?m.exportCSV():N==="batch"?m.showBatchEvaluate.value=!0:N==="ai"?m.openAiFab():N==="sidebar"?m.toggleSidebar():N==="today"?m.navigateTo("strategies","overview"):N==="add-portfolio"?(m.currentPage.value="ai",m.currentSubPage.value="portfolio"):N==="open-system"?m.navigateTo("system","status"):N==="open-shortterm"?m.navigateTo("shortterm","overview"):N==="open-research"?m.navigateTo("research","overview"):N==="open-calendar"?m.navigateTo("calendar",""):N==="refresh-data-source"?m.navigateTo("system","datasource"):N.indexOf("theme:")===0&&m.changeTheme(N.slice(6))}p(k,function(N){N&&(c.value="",x.value=[],n.value=0,t(function(){l.value&&l.value.focus&&l.value.focus()}))}),p(c,Z);function $(N){N==="toggle-palette"?m.commandPaletteVisible.value=!m.commandPaletteVisible.value:N==="toggle-sidebar"?m.toggleSidebar():N==="open-ai"?m.openAiFab():N==="refresh"?se("refresh"):N==="open-today"?se("today"):N==="batch-eval"?se("batch"):N==="add-portfolio"&&se("add-portfolio")}function ie(N){if(!R.createDefaultShortcuts||!R.createShortcutRegistry)return;const A=R.createDefaultShortcuts().resolve({key:N.key,ctrlKey:N.ctrlKey,altKey:N.altKey,shiftKey:N.shiftKey,metaKey:N.metaKey});A&&(N.preventDefault(),$(A))}return v(function(){document.addEventListener("keydown",ie)}),{visible:k,query:c,results:u,inputEl:l,sanitizeHtml:m.sanitizeHtml,isIconName:g,onDown:I,onUp:E,onEnter:z,execute:U,isActive:V,setActive:W,itemKey:Y,onGlobalKeydown:ie}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const p=Vue.ref(0);let t=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,f=>{f?(p.value=0,t=setInterval(()=>{p.value++},1e3)):t&&(clearInterval(t),t=null)}),{...e,batchElapsed:p}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const f=a("qcState");if(!f)return{};const v={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},R=e(()=>v[f.aiEvalStage.value]||""),m=e(()=>{const z=f.aiResult&&f.aiResult.value&&f.aiResult.value.result&&f.aiResult.value.result.level;return z?z==="强烈推荐"||z==="推荐"?"var(--el-success)":z==="谨慎推荐"?"var(--el-warning)":z==="中性"||z==="观望"?"var(--text-secondary)":z==="评估失败"||z==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function c(z){const U=document.createElement("textarea");U.value=z,U.style.position="fixed",U.style.opacity="0",document.body.appendChild(U),U.select(),document.execCommand("copy"),document.body.removeChild(U)}async function k(){const z=f.aiResult&&f.aiResult.value;if(!z||!z.result)return;const U=z.result.dimensions||{},se=Object.entries(U).map(([ie,N])=>`${ie} ${Math.round(N)}分`).join(`
`),$=`【AI 智能评估】${z.result.level||""} ${z.result.total_score!=null?z.result.total_score:"—"}分
模型：${z.model_used||z.result.provider||"—"}

${z.result.detailed_report||""}

九维度评分：
${se||"无"}`;try{await navigator.clipboard.writeText($),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{c($),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const n=p(!1),x=p(!1),l=p(null),h=p([]),g={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function S(z){return g[z]||"factor-sem-none"}async function P(){const z=f.stockDetail.value&&f.stockDetail.value.stock;if(z){n.value=!0,x.value=!1,h.value=[],l.value=null;try{const U=f.selectedDate.value?`?date=${f.selectedDate.value}`:"",se=await fetch(`/api/calendar/stock/${z}/factors${U}`).then(F=>F.json()),$=se&&Array.isArray(se.factors)?se.factors:[],ie=[],N={};$.forEach(F=>{N[F.category]||(N[F.category]={category:F.category,items:[]},ie.push(N[F.category])),N[F.category].items.push(F)}),h.value=ie,l.value=se&&se.summary||null}catch{x.value=!0}finally{n.value=!1}}}t(f.stockDetailTab,z=>{z==="factor"&&f.stockDetail.value&&f.stockDetailVisible.value&&(P(),o())});const _=p(null);async function o(){try{const z=await fetch("/api/market/factor-ic").then(U=>U.json());_.value=z&&z.success&&z.data?z.data:{}}catch{_.value={}}}function i(z){if(!z||!z.n5)return"—";const U=z.n5.icir!=null?"ICIR "+z.n5.icir:"ICIR —";return z.n5.grade+" ("+U+")"}const u=p(!1),V=p(!1),W=p([]),Y=p([]);function J(z){if(z==null)return"—";const U=Number(z);return Number.isNaN(U)?"—":Math.abs(U)>=1e8?(U/1e8).toFixed(2)+"亿":Math.abs(U)>=1e4?(U/1e4).toFixed(1)+"万":String(U)}async function Z(){const z=f.stockDetail&&f.stockDetail.value&&f.stockDetail.value.stock;if(z){u.value=!0,V.value=!1;try{const U=await fetch("/api/market/performance/"+encodeURIComponent(z)).then(se=>se.json());U&&U.success?(W.value=U.forecast||[],Y.value=U.express||[]):V.value=!0}catch{V.value=!0}finally{u.value=!1}}}t(f.stockDetailTab,z=>{z==="performance"&&Z()});const I=p(null);async function E(){const z=f.stockDetail&&f.stockDetail.value&&f.stockDetail.value.stock;if(!z){I.value=null;return}try{const U=await fetch("/api/focus/stock/"+encodeURIComponent(z)+"/pool").then(se=>se.json());I.value=U&&U.success&&U.data?U.data:null}catch{I.value=null}}return t(()=>f.stockDetail&&f.stockDetail.value&&f.stockDetail.value.stock,z=>{z&&f.stockDetailVisible.value?E():I.value=null}),t(()=>f.stockDetailVisible.value,z=>{z?E():I.value=null}),{...f,aiStageText:R,levelRingColor:m,copyAiReport:k,factorLoading:n,factorError:x,factorSummary:l,factorGroups:h,factorSemClass:S,loadFactorPanel:P,factorIc:_,loadFactorIc:o,factorIcGrade:i,perfLoading:u,perfError:V,perfForecast:W,perfExpress:Y,fmtY:J,loadPerformance:Z,poolInfo:I,loadPoolInfo:E}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(p){const t=e("qcState");if(!t)return{};const f=a(()=>p.type==="history"?t.selectedHistoryIds.value.includes(p.item.id):t.selectedChatIds.value.includes(p.item.id)),v=a(()=>{const g=t.watchlistCodes.value.has(p.item.stock_code);return{icon:"star",isWatched:g,label:g?"取消收藏":"加入收藏"}}),R=a(()=>p.type==="history"?"bot":"message-circle"),m=a(()=>{var g;return p.type==="history"?((g=p.item.result)==null?void 0:g.provider)||"":p.item.first_msg||""}),c=a(()=>{var g,S;return`${((S=(g=p.item.result)==null?void 0:g.dimensions)==null?void 0:S.length)||9}维度分析`}),k=a(()=>{var S,P;const g=p.type==="history"?p.item.evaluate_time:p.item.created_at||"";return g?p.timeFormat==="datetime"?p.type==="history"?`${g.split("T")[0]} ${(g.split("T")[1]||"").split(".")[0]}`:`${g.split("T")[0]} ${((S=g.split("T")[1])==null?void 0:S.substring(0,5))||""}`:p.type==="history"?(g.split("T")[1]||"").split(".")[0]||g:((P=g.split("T")[1])==null?void 0:P.substring(0,5))||"":""});function n(){p.type==="history"?t.toggleSelectHistory(p.item.id):t.toggleSelectChat(p.item.id)}function x(){p.type==="history"?t.viewAiResult(p.item):t.viewChatSession(p.item)}async function l(){try{await ElementPlus.ElMessageBox.confirm(p.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}p.type==="history"?t.deleteSingleHistory(p.item.id):t.deleteChatSession(p.item.id)}function h(g,S){t.toggleWatchlist(g,S)}return{isSelected:f,watchState:v,providerIcon:R,providerText:m,dimsText:c,timeText:k,toggleSelect:n,view:x,remove:l,toggleWatchlist:h,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const f=["买入","持有","观望","减仓","卖出"],v={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},R={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},m=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],c={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},k=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function n(l){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(l).then(S=>S.json?S.json():S)}function x(){const l=new Date,h=g=>g<10?"0"+g:""+g;return l.getFullYear()+"-"+h(l.getMonth()+1)+"-"+h(l.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
                  <span class="focus-row-toggle">{{ expanded.includes(row.stock_code) ? '▲' : '▼' }}</span>
                </span>
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
      </div>`,setup(){const l=t("qcState"),h=a(x()),g=a("after_close"),S=a({rows:[],actions:{},total:0,groups:{}}),P=a({sessions:{},total:0}),_=a(null),o=a(!1),i=a(""),u=a(!1),V=a([]),W=a(""),Y=a(null),J={},Z=a({});let I=0;const E=a(null),z=e(function(){const T=S.value&&S.value.groups||{};return Object.keys(T).length?T:S.value&&S.value.rows&&S.value.rows.length?{全部:S.value.rows}:{}}),U=e(function(){const T=E.value;return!T||!T.date||T.date!==h.value?"":"已加载最近一次评估: "+T.date+" · "+(c[T.session]||T.session)}),se=e(function(){const T=S.value&&S.value.base_date;return T?T===h.value?"评分范围: "+T+" 收盘池 + 自选":"评分范围: "+T+" 收盘池(前一交易日算好) + 自选":""});function $(T){if(T==null)return"—";const D=Number(T);return D===Math.floor(D)?String(D):D.toFixed(1)}function ie(T){const D=S.value.total||0,H=(S.value.actions||{})[T]||0;if(!D)return"0%";const de=H/D*100;return de>0&&de<4?"4%":de.toFixed(1)+"%"}function N(T){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[T]||"info"}function F(T){const D=_.value&&_.value.overall&&_.value.overall[T]||null;return!D||D.total===0||D.rate===null||D.rate===void 0?"info":D.rate>=60?"success":D.rate>=40?"warning":"danger"}function A(T){const D=_.value&&_.value.overall&&_.value.overall[T]||null;return!D||D.total===0||D.rate===null||D.rate===void 0?"样本不足":D.rate.toFixed(1)+"% ("+D.total+" 样本)"}function w(){return c[g.value]||g.value}function M(T){const D=V.value.indexOf(T);D>=0?V.value.splice(D,1):V.value.push(T)}function le(T){if(!T||!T.raw_json)return{};if(J[T.stock_code+T.session+T.trade_date])return J[T.stock_code+T.session+T.trade_date];let D={};try{D=JSON.parse(T.raw_json)||{}}catch{D={}}return J[T.stock_code+T.session+T.trade_date]=D,D}async function G(){try{const T=await n("/api/focus/latest"),D=T&&T.success&&T.data;D&&D.date&&(E.value=D,h.value=D.date,D.session&&(g.value=D.session))}catch(T){console.warn("[focus] 最近一次评估解析失败:",T)}}async function y(){u.value=!0;try{const T=await n("/api/focus/results?date="+h.value+"&session="+g.value);S.value=T&&T.success&&T.data||{rows:[],actions:{},total:0,groups:{}},r((S.value.rows||[]).map(function(D){return D.stock_code}))}catch(T){console.warn("[focus] 结果加载失败:",T),S.value={rows:[],actions:{},total:0,groups:{}}}finally{u.value=!1}}async function r(T){const D=Z.value||{},H=(T||[]).filter(function(oe){return oe&&!D[oe]});if(!H.length)return;const de=++I,ee=H.map(function(oe){return n("/api/focus/stock/"+encodeURIComponent(oe)+"/pool?date="+h.value).then(function(qe){qe&&qe.success&&qe.data?D[oe]=qe.data:D[oe]={stock_code:oe,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){D[oe]={stock_code:oe,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(ee)}catch{}de===I&&(Z.value=Object.assign({},D))}function q(T){const D=l&&l.showStockDetail;if(typeof D=="function"){D(T);return}const de=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;de&&de.info("请从其他页面打开股票详情: "+T)}async function d(){try{const T=await n("/api/focus/history?date="+h.value);P.value=T&&T.success&&T.data||{sessions:{},total:0}}catch(T){console.warn("[focus] 历史加载失败:",T),P.value={sessions:{},total:0}}}async function K(){o.value=!0;try{const T=await n("/api/ai/track");T&&T.success&&T.data?(_.value=T.data,i.value=(T.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):_.value=null}catch(T){console.warn("[focus] 效果块加载失败:",T),_.value=null}finally{o.value=!1}}async function re(){const T=(W.value||"").trim();if(T){Y.value=null;try{const D=await n("/api/focus/stock/"+encodeURIComponent(T));Y.value=D&&D.success&&D.data&&D.data.rows||[]}catch(D){console.warn("[focus] 单股历史加载失败:",D),Y.value=[]}}}async function Q(){await y(),await d(),await K()}return p(async function(){await G(),await Q()}),{curDate:h,session:g,results:S,history:P,track:_,trackLoading:o,trackNote:i,loading:u,expanded:V,stockCode:W,stockHistory:Y,SESSIONS:m,ACTION_ORDER:f,TRACK_WINDOWS:k,ACTION_DOT:v,TIER_DOT:R,SESSION_LABELS:c,displayGroups:z,latestNote:U,baseNote:se,sessionLabel:w,fmtScore:$,tagType:N,rateTagType:F,fmtRate:A,toggle:M,detailOf:le,loadResults:y,loadHistory:d,loadTrack:K,loadStockHistory:re,loadAll:Q,poolStatus:Z,openStockDetail:q,actionPct:ie}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:p}=Vue,{currentView:t,statusFilter:f,dashboardData:v,loadHealthMetrics:R,getLoadDashboardData:m,getLastRefreshTime:c,getFetchPoolSignals:k}=a,n=e(!1),x=e(""),l=new Map,h=e([]),g=e(""),S=e(""),P=e([]),_=e(""),o=window.__quantModules.core||{},i=typeof o.createTtlCache=="function"?o.createTtlCache(15e3):null;let u=0;function V(){const U=Date.now();U-u<5e3||(u=U,ElementPlus.ElMessage.success("有新数据，已更新"))}function W(U,se,$,ie){!i||!se||typeof o.silentRefresh!="function"||o.silentRefresh({cache:i,key:se,fetchFn:async()=>{const N=await fetch(U);if(!N.ok)throw new Error("HTTP "+N.status);const F=await N.json();return $?$(F):F},ttl:i.defaultTtl,apply:ie,onChanged:V,onError:()=>{}})}const Y=new Set;async function J(){var U;try{const $=await(await fetch("/api/dates")).json();h.value=((U=$.data)==null?void 0:U.dates)||$.dates||[],h.value.length>0&&(g.value=h.value[h.value.length-1]),S.value=new Date().toLocaleTimeString()}catch(se){console.error(se)}}async function Z(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),S.value="刷新中...",l.clear(),await J(),await E(),S.value=new Date().toLocaleTimeString()}catch(U){console.error("数据刷新失败",U)}}function I(){if(!g.value)return;const se="/api/view/"+(t.value||"day")+"/"+g.value+"?status="+(f.value||"all")+"&format=csv";window.open(se,"_blank")}async function E(){if(!g.value)return;const U=`${t.value}_${g.value}`;if(Y.has(U))return;Y.add(U);const se=`/api/view/${t.value}/${g.value}?status=all`,$=i&&typeof o.makeCacheKey=="function"?o.makeCacheKey("GET",`/api/view/${t.value}/${g.value}`,{status:"all"}):null,ie=(A,w)=>{P.value=A,_.value=w||"",l.set(U,{stocks:A,note:w||""})},N=A=>{ie(A&&A.stocks||[],A&&A.note||"")};if(l.has(U)){N(l.get(U)),W(se,$,A=>A,N),Y.delete(U);return}const F=$&&i?i.get($):void 0;if(F!==void 0){N(F),W(se,$,A=>A,N),Y.delete(U);return}n.value=!0,x.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const w=await(await fetch(se)).json(),M=w.stocks||[];ie(M,w.note||""),i&&$&&i.set($,{stocks:M,note:w.note||""})}catch{try{const M=await(await fetch(`/api/calendar/${g.value}/consensus`)).json();P.value=(M.consensus||[]).map(le=>({...le,code:le.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{n.value=!1}k(),Y.delete(U)}async function z(){const U=i&&typeof o.makeCacheKey=="function"?o.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(i){const se=i.get(U);if(se!==void 0){v.value=se,R().catch(()=>{}),W("/api/dashboard",U,$=>$.data||$,$=>{v.value=$,c().value=Date.now()});return}}await m()(),R().catch(()=>{}),i&&i.set(U,v.value)}return{loading:n,loadingView:x,viewCache:l,dates:h,selectedDate:g,lastLoadTime:S,consensus:P,viewNote:_,loadDates:J,refreshCalendarData:Z,exportCSV:I,loadConsensusData:E,loadDashboardCached:z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:p,loadIndexKline:t,rememberDialogTrigger:f,menus:v,currentPage:R,currentSubPage:m,stockDetail:c,selectedDate:k}=a,n=ref({indices:[],market_sentiment:null});let x=null;const l=ref(!1),h=ref(null),g=ref(null),S=ref(!1);function P(){window.__quantModules.charts.disposeKline("stockKlineChart")}const _=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{_.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const o=ref(!1),i=ref(null),u=ref(!1),V=ref(0),W=ref(0);async function Y(){try{const w=await(await fetch("/api/market/overview")).json();n.value=w,J(w)}catch(A){console.error("获取市场行情失败:",A)}}function J(A){x&&clearInterval(x),A&&A.in_trading_hours&&(x=setInterval(Y,6e5))}function Z(A){f(),h.value=A,g.value=null,p.value="daily",I(A.code),window.__quantModules.charts.disposeKline("indexKlineChart"),l.value=!0,setTimeout(async()=>{await t("daily")},500)}async function I(A){try{const M=await(await fetch("/api/ai/index-eval/"+A)).json();M.success&&M.data&&(g.value=M.data)}catch(w){console.warn("[getIndexAiScore] cache check failed:",w)}}async function E(){if(h.value){S.value=!0;try{const w=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:h.value.code,index_name:h.value.name,current_price:h.value.close,pct_chg:h.value.pct_chg})})).json();w.success?g.value=w.data:ElementPlus.ElMessage.error(w.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{S.value=!1}}}function z(A){window.__quantModules.charts.zoomKline("stockKlineChart",A)}function U(){u.value=!0,setTimeout(()=>{u.value=!1},600)}function se(A,w){if(A===w){U();return}const M=800,le=performance.now(),G=w-A;o.value=!0,i.value={value:G,dir:G>0?"up":"down"},u.value=!0,setTimeout(()=>{u.value=!1},600),setTimeout(()=>{i.value=null},2300);function y(r){const q=r-le,d=Math.min(q/M,1),K=1-Math.pow(1-d,3),re=Math.round(A+G*K);c.value&&c.value.score_data&&(c.value.score_data.score=re),d<1?requestAnimationFrame(y):(c.value&&c.value.score_data&&(c.value.score_data.score=w),o.value=!1)}requestAnimationFrame(y)}function $(){if(!c.value||!c.value.score_data)return;const A=c.value.score_data.score;if(A==null)return;const w=600,M=performance.now();u.value=!0,setTimeout(()=>{u.value=!1},600);function le(G){const y=Math.min((G-M)/w,1),r=1-Math.pow(1-y,3),q=Math.round(A*r);c.value&&c.value.score_data&&(c.value.score_data.score=q),y<1?requestAnimationFrame(le):c.value&&c.value.score_data&&(c.value.score_data.score=A)}requestAnimationFrame(le)}async function ie(){var M;if(!c.value||!c.value.stock)return;const A=c.value.stock,w=(M=c.value.score_data)==null?void 0:M.score;try{const le=new Date().toISOString().split("T")[0],G=k.value||le,r=await(await fetch(`/api/calendar/stock/${encodeURIComponent(A)}/score?date=${G}`)).json();if(r.success&&r.score_data){const q=r.score_data.score;c.value&&(c.value.score_data=r.score_data),w!=null&&q!==w?se(w,q):U()}else U()}catch(le){console.warn("[refreshStockScore] failed:",le)}}function N(A){_.value&&(V.value=A.touches[0].clientX,W.value=A.touches[0].clientY)}function F(A){if(!_.value)return;const w=V.value-A.changedTouches[0].clientX,M=W.value-A.changedTouches[0].clientY;if(Math.abs(w)>Math.abs(M)&&Math.abs(w)>80){const le=v.value.map(function(y){return y.key}),G=le.indexOf(R.value);if(w>0&&G<le.length-1){const y=le[G+1],r=window.__quantGoPage;r?r(y,""):(R.value=y,m.value="")}else if(w<0&&G>0){const y=le[G-1],r=window.__quantGoPage;r?r(y,""):(R.value=y,m.value="")}}}return{marketData:n,marketRefreshTimer:x,fetchMarketData:Y,indexDetailVisible:l,indexDetail:h,indexAiResult:g,indexAiLoading:S,showIndexDetail:Z,loadCachedIndexEval:I,doIndexAiEvaluate:E,disposeStockKline:P,isMobile:_,zoomKlineRange:z,scoreAnimating:o,scoreDelta:i,scorePulse:u,triggerScorePulse:U,animateScoreChange:se,animateScoreEntrance:$,refreshStockScore:ie,touchStartX:V,touchStartY:W,onTouchStart:N,onTouchEnd:F}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:p,currentSubPage:t}=a,f=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),v=ref("idle"),R=ref("");async function m(){if(!f.value.webhook_url){R.value="请先输入Webhook地址";return}v.value="testing",R.value="";try{const T=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:f.value.webhook_url})})).json();T.success||T.status==="ok"?(R.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(R.value=T.message||"测试失败",ElementPlus.ElMessage.error(R.value))}catch{R.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}v.value="idle"}const c=Vue.ref(!1);async function k(){c.value=!0;try{const T=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{c.value=!1}}const n=ref(!1);function x(){e("ai","chat_history"),n.value=!0,Vue.nextTick(()=>{const Q=document.querySelector('input[placeholder*="输入问题"]');Q&&Q.focus()})}const l=ref([]),h=ref({});async function g(){try{const T=await(await fetch("/api/ai/recommend-strategies")).json();T.success&&(l.value=T.recommendations||[])}catch(Q){console.warn("[loadStrategyRecommendations] failed:",Q)}}async function S(){try{const T=await(await fetch("/api/ai/usage-stats")).json();T.success&&(h.value=T)}catch(Q){console.warn("loadAiUsage failed:",Q)}}const P=ref({}),_=ref([]),o=ref(7);async function i(){try{const T=await(await fetch("/api/system/monitor")).json();T.success&&(P.value=T)}catch(Q){console.warn("loadSysMonitor failed:",Q)}}const u=ref({});async function V(){try{const T=await(await fetch("/api/system/health-detail")).json();T.success&&(u.value=T)}catch(Q){console.warn("loadHealthDetail failed:",Q)}}async function W(){try{const T=await(await fetch(`/api/analytics/rank?days=${o.value}`)).json();T.success&&(_.value=T.rank||[])}catch(Q){console.warn("loadAnalytics failed:",Q)}}const Y=ref(!1);async function J(){if(!Y.value){Y.value=!0;try{const T=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return T&&T.success?T.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${T.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${T.date}）`):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"生成复盘失败"),V(),T}catch(Q){ElementPlus.ElMessage.error("生成复盘失败: "+(Q.message||""))}finally{Y.value=!1}}}const Z=ref(null),I=ref(!1);async function E(){try{const T=await(await fetch("/api/ai/fact-check/latest")).json();Z.value=T&&T.success&&T.data||null}catch(Q){console.warn("loadFactCheck failed:",Q)}}async function z(){if(!I.value){I.value=!0;try{const T=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return T&&T.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${T.data.pass_rate!=null?T.data.pass_rate+"%":"--"} (${T.data.checked} 个数字)`),E()):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"事实护栏抽查失败"),T}catch(Q){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Q.message||""))}finally{I.value=!1}}}const U=ref([]),se=ref(!1);async function $(){try{const T=await(await fetch("/api/backup/list")).json();T.success&&(U.value=T.backups||[])}catch(Q){console.error("加载备份列表失败",Q)}}async function ie(){se.value=!0;try{const T=await(await fetch("/api/backup/create",{method:"POST"})).json();T.success?(ElementPlus.ElMessage.success(T.message||"备份成功"),$()):ElementPlus.ElMessage.error(T.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{se.value=!1}}const N=ref(""),F=ref("");async function A(Q){N.value=Q,F.value="";try{const T=window.__quantModules&&window.__quantModules.core||{},D=typeof T.authHeaders=="function"?T.authHeaders():{},H=await fetch("/api/reports/export?format="+encodeURIComponent(Q),{headers:D});if(!H.ok)throw new Error("HTTP "+H.status);const de=await H.blob(),ee=URL.createObjectURL(de),oe=document.createElement("a");oe.href=ee;const qe=new Date().toISOString().slice(0,10);oe.download="report_"+qe+"."+Q,document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),URL.revokeObjectURL(ee),F.value="报表已导出 ("+Q.toUpperCase()+")"}catch(T){F.value="报表导出失败: "+(T.message||T)}finally{N.value=""}}async function w(Q){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Q} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(T){console.warn("[restoreBackup] confirm cancelled:",T);return}try{const D=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Q})})).json();D.success?(ElementPlus.ElMessage.success(D.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(D.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const M=ref(!1),le=ref(0),G=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function y(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{le.value=0,M.value=!0},800)}function r(){M.value=!1,localStorage.setItem("quant_tour_done","1")}function q(){M.value=!1,localStorage.setItem("quant_tour_done","1")}const d=ref(""),K=ref(!1);async function re(){if(!d.value||!d.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}K.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:d.value.trim(),page:p.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(d.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{K.value=!1}}return{feishuConfig:f,feishuTestStatus:v,feishuTestMessage:R,feishuSaving:c,testFeishuWebhook:m,saveFeishuConfig:k,aiFabHidden:n,openAiFab:x,strategyRecommendations:l,aiUsage:h,loadStrategyRecommendations:g,loadAiUsage:S,sysMonitor:P,analyticsRank:_,analyticsDays:o,loadSysMonitor:i,loadAnalytics:W,healthDetail:u,loadHealthDetail:V,reviewTriggering:Y,triggerMarketReview:J,factCheck:Z,factCheckRunning:I,loadFactCheck:E,triggerFactCheck:z,backups:U,backupCreating:se,loadBackups:$,createBackup:ie,restoreBackup:w,reportExporting:N,reportExportMsg:F,exportReport:A,tourVisible:M,tourStep:le,tourSteps:G,maybeShowTour:y,skipTour:r,finishTour:q,feedbackText:d,feedbackSubmitting:K,submitFeedback:re}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:p,selectedDate:t,dates:f,loadConsensusData:v,hapticFeedback:R}=a,m=e(()=>({day:"天",week:"周",month:"月",year:"年"})[p.value]||"天"),c=e(()=>({day:"date",week:"week",month:"month",year:"year"})[p.value]||"date"),k=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[p.value]||"YYYY-MM-DD"),n=e(()=>!t.value||!f.value||f.value.length===0?!1:t.value>f.value[0]),x=e(()=>!t.value||!f.value||f.value.length===0?!1:t.value<f.value[f.value.length-1]);function l(P){R("light"),p.value=P;let _=t.value||f.value[f.value.length-1];if(P==="year"){const o=_.substring(0,4),i=f.value.find(u=>u.startsWith(o));t.value=i||_}else if(P==="month"){const o=_.substring(0,7),i=f.value.find(u=>u.startsWith(o));t.value=i||_}setTimeout(v,50)}function h(P){R("light");const _=t.value,o=f.value,i=o.indexOf(_);if(i<0)return;let u=1;p.value==="week"&&(u=5),p.value==="month"&&(u=22),p.value==="year"&&(u=250);const V=i+P*u;if(V>=0&&V<o.length){const W=o[V];if(p.value==="month"){const Y=W.substring(0,7),J=o.find(Z=>Z.startsWith(Y));t.value=J||W}else if(p.value==="year"){const Y=W.substring(0,4),J=o.find(Z=>Z.startsWith(Y));t.value=J||W}else t.value=W;v()}}function g(P){if(!f.value||f.value.length===0)return!1;const _=P.getFullYear(),o=String(P.getMonth()+1).padStart(2,"0"),i=String(P.getDate()).padStart(2,"0"),u=`${_}-${o}-${i}`;return!f.value.includes(u)}function S(P){P&&P.length>10&&(t.value=P.substring(0,10)),v()}return{viewUnit:m,datePickerType:c,dateFormat:k,canNavPrev:n,canNavNext:x,switchView:l,navigateDate:h,disabledDate:g,onDateChange:S}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:p,navigateTo:t,currentPage:f,currentView:v,navigateDate:R,switchView:m,getLoadDashboardData:c,refreshCalendarData:k,getLoadAiHistory:n,exportCSV:x,getShowBatchEvaluate:l,openAiFab:h,toggleSidebar:g,showStockDetail:S}=a,P=ref("");async function _(I,E){if(!I||I.trim().length<1){E([]);return}const z=window.QuantCommandPanel;let U=[];z&&e.value&&(U=z.buildSearchSuggestions(I,e.value,p,z.DEFAULT_COMMANDS));const se=window.__quantModules&&window.__quantModules.pinyin;se&&se.searchCoreStocks(I).forEach(function($){U.push({value:$.code+" "+$.name,type:"stock",code:$.code,name:$.name,label:$.name,subLabel:$.code,icon:"trending-up",iconName:"trending-up"})});try{const ie=await(await fetch("/api/search?q="+encodeURIComponent(I))).json();if(ie.success&&ie.results){const N=ie.results.map(function(A){return{value:A.code+" "+A.name,type:"stock",code:A.code,name:A.name,label:A.name,subLabel:A.code,icon:"trending-up",iconName:"trending-up"}}),F=[];(ie.groups||[]).forEach(function(A){(A.items||[]).forEach(function(w){w.type==="sector"?F.push({value:w.name+" · "+w.subLabel,type:"sector",name:w.name,label:w.name,subLabel:"板块",icon:"layers",iconName:"layers"}):w.type==="strategy"?F.push({value:w.name+" · 策略",type:"strategy",id:w.id,name:w.name,label:w.name,subLabel:"策略",icon:"target",iconName:"target"}):w.type==="menu"&&F.push({value:w.name,type:"menu",menuKey:w.menuKey,name:w.name,label:w.name,subLabel:w.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),E(U.concat(N,F))}else E(U)}catch($){console.warn("[searchStocks] fetch failed:",$),E(U)}}function o(I){return I?I.type==="menu"?{action:"menu",menuKey:I.menuKey,subPage:I.subPage}:I.type==="command"?{action:"command",key:I.key}:I.type==="sector"?{action:"sector",name:I.name}:I.type==="strategy"?{action:"strategy",id:I.id,name:I.name}:I.type==="stock"||I.code&&I.name?{action:"stock",code:I.code,name:I.name}:null:null}function i(I){P.value="";const E=window.QuantCommandPanel,z=E?E.dispatchSearchSelection(I):o(I);if(z){if(z.action==="menu"){t(z.menuKey,z.subPage);return}if(z.action==="command"){u(z.key);return}if(z.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(z.name);return}if(z.action==="strategy"){t("research","overview");return}z.action==="stock"&&typeof S=="function"&&S(z.code,z.name)}}function u(I){if(I==="refresh"){const E=f.value;E==="strategies"?c().catch(function(){}):E==="calendar"?k().catch(function(){}):E==="ai"&&n().catch(function(){})}else I==="export"?x():I==="batch"?l().value=!0:I==="ai"?h():I==="sidebar"?g():I==="open-eval-history"?t("ai","history"):I==="open-shortterm"&&t("shortterm","overview")}const V=ref(!1),W=ref(!1);function Y(I){if(!I)return!1;const E=I.tagName;return E==="INPUT"||E==="TEXTAREA"||E==="SELECT"||I.isContentEditable}function J(I){if(Y(I.target))return;const E=I.key.toLowerCase();if(I.ctrlKey&&E==="k"){I.preventDefault(),W.value=!0;return}if(I.ctrlKey&&E==="/"){I.preventDefault(),V.value=!V.value;return}if(I.ctrlKey&&E==="h"){I.preventDefault(),t("ai","history");return}if(I.ctrlKey&&I.shiftKey&&E==="s"){I.preventDefault(),t("shortterm","overview");return}if(!(I.ctrlKey||I.metaKey||I.altKey)){if(E>="1"&&E<="5"){const z=parseInt(E)-1,U=e.value[z];U&&t(U.key,U.subPages[0]||"");return}if(E==="r"&&Z(),(E==="arrowleft"||E==="arrowright"||E==="arrowup"||E==="arrowdown")&&f.value==="calendar")if(I.preventDefault(),E==="arrowleft"||E==="arrowright")R(E==="arrowleft"?-1:1);else{const z=["day","week","month","year"].indexOf(v.value),U=["day","week","month","year"][(z+(E==="arrowup"?-1:1)+4)%4];m(U)}}}function Z(){const I=f.value;I==="strategies"?c().catch(()=>{}):I==="calendar"?k().catch(()=>{}):I==="ai"&&n().catch(()=>{})}return{searchQuery:P,searchStocks:_,onSearchSelect:i,runGlobalCommand:u,shortcutHelpVisible:V,commandPaletteVisible:W,isTypingTarget:Y,handleGlobalKeydown:J,refreshCurrentPage:Z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:p,loadDates:t,loadDashboardData:f,loadDashboardCached:v,loadHealthMetrics:R,loadConsensusData:m,applyTheme:c,maybeShowTour:k,loadAiVendors:n}=a,x=ref({username:"",password:""}),l=ref(!1),h=ref(!1),g=ref(!1),S=ref({oldPassword:"",newPassword:"",confirmPassword:""}),P=ref(!1),_=ref(!1),o=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),i=ref(1);async function u(){try{(await(await fetch("/api/setup/status")).json()).needed&&(o.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},i.value=1,_.value=!0)}catch(E){console.warn("[checkSetupWizard] failed:",E)}}async function V(){try{const E={new_password:o.value.newPassword,ai_key:o.value.aiKey,ai_provider:o.value.aiProvider,ai_model:o.value.aiModel,ai_endpoint:o.value.aiEndpoint,tushare_token:o.value.tushareToken},U=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)})).json();U.success?(_.value=!1,ElementPlus.ElMessage.success("初始化完成"),await p()):ElementPlus.ElMessage.error(U.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function W(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(_.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function Y(){if(!x.value.username||!x.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}l.value=!0;try{const z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x.value)})).json();z.success?(e.value=z.user,localStorage.setItem("quant_user",JSON.stringify(z.user)),localStorage.setItem("quant_token",z.data.access_token),c(z.user.theme||"gold"),typeof n=="function"&&n(),await p(),await t(),await Promise.all([v(),m(),R().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),z.data&&z.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),k(),z.user.role==="admin"&&setTimeout(u,500)):ElementPlus.ElMessage.error(z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{l.value=!1}}async function J(){h.value=!0;try{const z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();z.success?(e.value=z.user,localStorage.setItem("quant_user",JSON.stringify(z.user)),localStorage.setItem("quant_token",z.data.access_token),c(z.user.theme||"gold"),await p(),await t(),await f(),R().catch(()=>{}),await m(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{h.value=!1}}function Z(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function I(){if(!S.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!S.value.newPassword||S.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(S.value.newPassword!==S.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}P.value=!0;try{const E=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:S.value.oldPassword,new_password:S.value.newPassword})}),z=await E.json();E.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),g.value=!1,S.value={oldPassword:"",newPassword:"",confirmPassword:""},Z()):ElementPlus.ElMessage.error(z.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{P.value=!1}}return{loginForm:x,logining:l,guestLogining:h,showChangePassword:g,changePasswordForm:S,changingPassword:P,showSetupWizard:_,setupForm:o,setupStep:i,checkSetupWizard:u,completeSetupWizard:V,resetSetupWizard:W,handleLogin:Y,handleGuestLogin:J,handleLogout:Z,doChangePassword:I}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let p=null;const{strategyFilter:t,currentView:f,statusFilter:v,currentPage:R,currentSubPage:m,menus:c,currentUser:k,strategyFilterCounts:n,lazyTick:x,dates:l,selectedDate:h,consensus:g,loadConsensusData:S,fetchMerrillClock:P,fetchMarketData:_,loadWatchlist:o,loadAiHistory:i,preloadWatchlistKline:u,loadChatHistory:V,loadSystemStatus:W,checkTushareConnection:Y,loadSysMonitor:J,loadAnalytics:Z,loadHealthDetail:I,loadHealthMetrics:E,loadAiUsage:z,loadFactCheck:U,loadAutoEvaluateConfig:se,loadDatasourceConfig:$,loadFeishuConfig:ie,loadAiConfig:N,loadAiVendors:F,loadRateLimit:A,loadDataRefreshConfig:w,loadBackups:M,loadAllGroups:le,loadUsers:G,stockDetailTab:y,stockDetailVisible:r,stockKlineLoaded:q,loadStockKline:d,currentKlinePeriod:K,showMerrillDetail:re,indexDetailVisible:Q,restoreDialogFocus:T}=a;e(t,D=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(D.selected)),localStorage.setItem("quant_strategy_filter_mode",D.mode)},{deep:!0}),e([f,v],(D,H)=>{D[0]!==H[0]&&S()}),e([R,m],([D,H])=>{var de;try{const oe=!(D==="calendar"&&H==="calendar")&&H||"",qe=oe?"#"+D+"/"+oe:"#"+D;window.location.hash!==qe&&(window.location.hash=qe)}catch{}if(H&&localStorage.setItem("quant_last_subpage",H),!H&&c.value.find(ee=>ee.key===D)){const ee=c.value.find(oe=>oe.key===D);ee&&ee.subPages.length>0&&(m.value=ee.subPages[0])}if(D==="shortterm"&&H==="market-review"){const ee=window.__lazyLoaders&&window.__lazyLoaders.research;ee&&ee().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(oe){oe&&oe.name&&!oe.__quantRegistered&&(window.__quantApp.component(oe.name,oe),oe.__quantRegistered=!0)}),x&&x.value++}).catch(function(oe){console.warn("[lazy] research 组件补加载失败",oe)})}D==="calendar"&&H==="calendar"&&(!g.value||g.value.length===0)&&(l.value.length>0&&!h.value&&(h.value=l.value[l.value.length-1]||""),setTimeout(S,50)),D==="calendar"&&H==="pool"&&(!g.value||g.value.length===0)&&(l.value.length>0&&!h.value&&(h.value=l.value[l.value.length-1]||""),setTimeout(S,50)),D==="strategies"&&(H==="merrill"&&P(),H==="market"&&_(),H==="consensus"&&(!g.value||g.value.length===0)&&setTimeout(S,50)),D==="ai"&&(H==="watchlist"&&(o(),i(),setTimeout(u,500)),H==="history"&&i(),H==="overview"&&(i(),o()),H==="chat_history"&&V()),(D==="system"||D==="ops")&&((de=k.value)==null?void 0:de.role)==="admin"&&(H==="status"&&(W(),Y()),H==="health"&&(I(),E()),H==="schedule"&&I(),H==="guard"&&U(),H==="usage"&&(J(),Z(),I(),E(),z(),U()),H==="autoeval"&&(se(),F()),H==="datasource"&&$(),H==="feature"&&(ie(),N(),A(),w(),M()),H==="user"&&(le(),G())),(D==="system"||D==="ops")&&H==="usage"?p||(p=setInterval(()=>{J(),Z(),I(),E(),z()},3e4)):p&&(clearInterval(p),p=null)}),e(y,(D,H)=>{D==="kline"&&H&&H!=="kline"&&r.value&&(q.value=!1,setTimeout(async()=>{!await d(K.value)&&r.value&&y.value==="kline"&&setTimeout(()=>d(K.value),800)},50))}),e(re,D=>{D||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([r,Q],([D,H])=>{!D&&!H&&T()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:p,menus:t,currentPage:f,currentSubPage:v,currentView:R,currentKlinePeriod:m,selectedDate:c,dates:k,loadDates:n,loadConsensusData:x,loadDashboardCached:l,appVersion:h,themes:g,fetchMarketData:S,fetchMerrillStages:P,fetchMerrillClock:_,loadAiConfig:o,loadAiVendors:i,loadAiCatalog:u,currentUser:V,loadUserConfig:W,loadAutoEvaluateConfig:Y,loadGroupConfig:J,loadUsers:Z,loadAllGroups:I,loadAiHistory:E}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function z(G,y){const r={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(G==="calendar"&&r[y])return f.value="calendar",v.value="calendar",r[y]&&(R.value=r[y]),!0;if(G==="research"&&(y==="strategy-write"||y==="custom-write")){f.value="research",v.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",y==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const G=window.location.hash||"";if(!G||G==="#")return;const y=G.replace(/^#\/?/,"").split("/"),r=y[0],q=y[1]||"",d=t.value.find(function(K){return K.key===r});if(d&&!z(r,q)){if(!q)f.value=r,v.value=d.subPages[0]||"";else if(d.subPages.indexOf(q)>=0)f.value=r,v.value=q;else return;window.__lazyLoaders&&window.__lazyLoaders[r]&&window.__quantGoPage&&window.__quantGoPage(r,v.value).catch(function(){})}});const U=(G,y=3e3,r="")=>{const q=new Promise((d,K)=>setTimeout(()=>K(new Error("timeout")),y));return Promise.race([G,q]).catch(d=>{console.warn(`[init] ${r||"task"} failed:`,d.message)})},se=localStorage.getItem("quant_theme"),$=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const G=window.__quantModules.themes;let y=$.theme||"system",r=$.theme_hue!=null&&$.theme_hue!==""?$.theme_hue:null;const q=typeof G.migrateLegacyTheme=="function"?G.migrateLegacyTheme():null;r==null&&q&&(y=q.mode,r=q.hue),r==null&&(r=45),p(y,r)}else se&&p(se);await J().catch(function(){}),function(){var G=window.location.hash||"",y=!1;if(G&&G!=="#"){var r=G.replace(/^#\/?/,"").split("/"),q=r[0],d=r[1]||"",K=t.value.find(function(H){return H.key===q});K&&(z(q,d)||(f.value=q,d&&K.subPages.indexOf(d)>=0?v.value=d:d||(v.value=K.subPages[0]||"")),y=!0)}if(!y){var re=localStorage.getItem("quant_last_page");re&&t.value.some(function(H){return H.key===re})?f.value=re:$.default_view&&t.value.some(function(H){return H.key===$.default_view})&&(f.value=$.default_view);var Q=localStorage.getItem("quant_last_subpage");Q&&(v.value=Q)}var T=localStorage.getItem("quant_last_date");T&&(c.value=T);var D=localStorage.getItem("quant_last_view");D&&(R.value=D),window.__lazyLoaders&&window.__lazyLoaders[f.value]&&window.__quantGoPage&&window.__quantGoPage(f.value,v.value).catch(function(){})}(),fetch("/api/health").then(G=>G.json()).then(G=>{G.version&&(h.value=G.version)}).catch(()=>{});const ie=localStorage.getItem("quant_user"),N=localStorage.getItem("quant_token"),F=!!(ie&&N),A=Promise.all([Promise.resolve().then(()=>{g.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),U(S(),3e3,"marketData"),U(P(),2e3,"merrillStages")]).then(()=>{U(_(),3e3,"merrillClock")});if(o(),u(),F&&V.value&&i(),!F||!V.value){await A;return}let w=!0;try{w=(await fetch("/api/users/me")).ok}catch{w=!1}if(!w){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),V.value=null;return}if(V.value){const G=V.value.theme||"",y=window.__quantModules&&window.__quantModules.themes;let r=$.theme||"system",q=$.theme_hue!=null&&$.theme_hue!==""?$.theme_hue:null;if(q==null&&y&&typeof y.migrateLegacyTheme=="function"){const d=y.migrateLegacyTheme();if(d)r=d.mode,q=d.hue;else if(G&&y.LEGACY_MAP&&y.LEGACY_MAP[G]){const K=y.LEGACY_MAP[G];r=K[0],q=K[1]}}q==null&&(q=45),p(r,q)}if(window.__quantModules&&window.__quantModules.preferences){const y=await window.__quantModules.preferences.loadPreferences();var M=localStorage.getItem("quant_last_page");!M&&y.default_view&&t.value.some(function(r){return r.key===y.default_view})&&(f.value=y.default_view),y.theme&&p(y.theme,y.theme_hue!=null&&y.theme_hue!==""?y.theme_hue:null),m&&(y.chart_period==="weekly"||y.chart_period==="monthly")&&(m.value=y.chart_period)}await Promise.all([U(W(),2e3,"userConfig"),U(n(),2e3,"dates")]),Y().catch(()=>{}),J().catch(()=>{});const le=f.value==="strategies"?U(l(),2e3,"dashboard"):U(x(),2e3,"consensus");await Promise.all([le,U(Z(),2e3,"users"),U(E(),2e3,"aiHistory")]),I().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:p,onUnmounted:t,watch:f,nextTick:v}=Vue,R=a(!1),m=window.__quantModules&&window.__quantModules.i18n||{},c=m.SUPPORTED_LOCALES||["zh-CN","en"],k=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",n=a(c.indexOf(k)!==-1?k:"zh-CN");typeof m.bindLocale=="function"&&m.bindLocale(n);const x=typeof m.t=="function"?m.t:function(B){return String(B)};function l(B){c.indexOf(B)!==-1&&(n.value=B,typeof m.setLocale=="function"&&m.setLocale(B),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",B))}function h(B,ue){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(B,ue):B==null?"":String(B)}function g(B){(B.key==="Enter"||B.key===" "||B.key==="Spacebar")&&(B.preventDefault(),B.currentTarget&&typeof B.currentTarget.click=="function"&&B.currentTarget.click())}let S=null;function P(){document.activeElement&&document.activeElement!==document.body&&(S=document.activeElement)}function _(){if(S&&S.isConnected)try{S.focus()}catch{}S=null}const o=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{o.value=!0}),window.addEventListener("offline",()=>{o.value=!1})),window.addEventListener("beforeunload",B=>{if(R.value)return B.preventDefault(),B.returnValue="您有未保存的配置变更，确定要离开吗？",B.returnValue});function i(B="light"){typeof navigator<"u"&&navigator.vibrate&&(B==="light"?navigator.vibrate(10):B==="medium"?navigator.vibrate(20):B==="heavy"&&navigator.vibrate([10,30,10]))}const u=useMerrillClock(),{merrillData:V,merrillStagesConfig:W,showMerrillDetail:Y,merrillDetailData:J,merrillClockConfig:Z,merrillClockLastUpdated:I,merrillReevalResult:E,merrillReevalLoading:z,stages:U,indicatorList:se,dimensionScoreList:$,detailDimensionScoreList:ie,confidenceColor:N,timelineStages:F,clockPosition:A,merrillProgressStyle:w,FULL_CYCLE_MONTHS:M,getStageAngle:le,getCycleProgress:G,getCurrentStageMonths:y,getStageTotalMonths:r,isStageCompleted:q,getCharLabel:d,getAssetName:K,getRankColor:re,fetchMerrillStages:Q,fetchMerrillClock:T,loadMerrillTimeline:D,showTimelineStage:H,merrillTimeline:de,timelineLoading:ee,showStageDetail:oe,saveMerrillClockConfig:qe,doMerrillReevaluate:Le,startAutoRefresh:De,stopAutoRefresh:Ee}=u,ae=a(localStorage.getItem("sidebar_collapsed")==="1");function we(){ae.value=!ae.value,localStorage.setItem("sidebar_collapsed",ae.value?"1":"0")}const Re=a(null),ne=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],X=e(()=>{var Ue,It,Ut;const B=((Ue=Ae.value)==null?void 0:Ue.role)||"guest",ue=((It=Ae.value)==null?void 0:It.group)||B,pe=((Ut=Re.value)==null?void 0:Ut[ue])||null;return ne.map(At=>{if(pe&&pe.visible_menus&&At.key in pe.visible_menus&&!pe.visible_menus[At.key])return null;const ga={...At,name:x("nav."+At.key)||At.name};return pe!=null&&pe.visible_sub_pages&&(ga.subPages=At.subPages.filter(os=>{const Sd=At.key+"."+os;return pe.visible_sub_pages[Sd]!==!1})),At.key==="system"&&B==="guest"&&At.guestSubPages&&(ga.subPages=At.guestSubPages),ga}).filter(Boolean)});async function fe(){try{if(!localStorage.getItem("quant_token"))return;const ue=await fetch("/api/groups/my");if(ue.ok){const pe=await ue.json();Re.value={[pe.group_id]:pe.group}}}catch(B){console.warn("loadGroupConfig:",B)}}const Me=a("strategies"),Ne=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},Ke=a(Ne.navMode);function rt(B){const ue=window.__quantModules&&window.__quantModules.navModeCore;Ke.value=ue?ue.normalizeNavMode(B):B==="tree"||B==="toptab"?B:"toptab",ue&&ue.writePrefs({navMode:Ke.value})}const dt=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function Qe(B,ue=""){i("light"),Me.value=B,Ze.value=ue,localStorage.setItem("quant_last_subpage",ue)}function Et(){const B=X.value;if(!B||!B.length)return;if(!B.some(function(je){return je.key===Me.value})){const je=B[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",je.key),Me.value=je.key,Ze.value=je.subPages&&je.subPages[0]||"";return}const pe=B.find(function(je){return je.key===Me.value});pe&&pe.subPages&&pe.subPages.length&&!pe.subPages.includes(Ze.value)&&(Ze.value=pe.subPages[0])}const he=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],be=a("multifactor"),Pe=a(null),ze=a(1e5),Ge=a(!1),Xe=a(null);let Ye=null,ht=null;async function xt(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ue={initial_capital:ze.value||1e5};Pe.value&&Pe.value.length===2&&(ue.start_date=Pe.value[0],ue.end_date=Pe.value[1]),Ge.value=!0,Xe.value=null;try{const pe=await fetch("/api/strategies/"+be.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ue)});if(!pe.ok){const It=await pe.json().catch(()=>({}));throw new Error(It.detail||"回测失败")}const je=await pe.json(),Ue=je.result||{};if(!Ue.success)throw new Error(Ue.message||"回测失败");je.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),Xe.value={total_return_pct:((Ue.total_return??0)*100).toFixed(2),annual_return_pct:((Ue.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ue.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ue.sharpe_ratio??0).toFixed(2),win_rate:((Ue.win_rate??0)*100).toFixed(2),out_sample:Ue.outsample_total_return===void 0?"":((Ue.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ue.overfit_warning||!1,message:Ue.message||""},ft(Ue.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(pe){ElementPlus.ElMessage.error(pe.message||"回测失败")}finally{Ge.value=!1}}function ft(B){const ue=document.getElementById("backtestEquityChart");if(!ue||!B||B.length===0)return;const pe=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,je=()=>{ht=B,Ye&&(Ye.dispose(),Ye=null),Ye=echarts.init(ue),Ye.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ue=B.map(Ut=>Ut.date||Ut[0]),It=B.map(Ut=>Ut.value??Ut[1]);Ye.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ue,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:It,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};pe?pe().then(je).catch(()=>{}):je()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){ht&&ft(ht)}));const Ze=a("overview"),jt=e(()=>{const B=ne.find(ue=>ue.key===Me.value);return B?B.name:Me.value}),Nt=a(0),yt=e(()=>{Nt.value;const B={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ue=Ze.value;return Me.value==="shortterm"&&ue==="market-review"?"qc-research-page":Me.value==="ops"&&ue==="execution"?"qc-strategies-page":B[Me.value]||""}),ut=a(!1),Vt=a({}),C=a([]);a("");const ve=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),ke=a("day"),Se=a("all"),Ae=a(null);f(X,function(){Et()}),f([Me,Ze],function(){const B=document.querySelector(".main-content");B&&(B.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const B=localStorage.getItem("quant_user"),ue=localStorage.getItem("quant_token");if(B&&ue)try{Ae.value=JSON.parse(B)}catch{}}();const We=a(!1),L=a("kline"),ce=a(null),He=a(!1),$e=a(localStorage.getItem("qc_detail_mode")||"split"),nt=a(window.innerWidth<=1024),kt=e(()=>$e.value==="split"&&!nt.value);function Ft(B){$e.value=B;try{localStorage.setItem("qc_detail_mode",B)}catch{}}window.addEventListener("resize",()=>{nt.value=window.innerWidth<=1024});const Mt=35,St=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function ct(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",St.value?St.value+"px":Mt+"%")}ct();function Rt(B){const ue=Math.max(1,Math.min(B,2e3));St.value=ue,ct();try{localStorage.setItem("qc_split_width",String(ue))}catch{}}function Ot(B){if(St.value)return St.value;const ue=B?B.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ue*Mt/100))}let _t=null;function Yt(B,ue){if(!ue||nt.value)return;B.preventDefault();const pe=ue.getBoundingClientRect().width;_t={startX:B.clientX,startW:Ot(ue),minW:Math.max(200,Math.floor(pe*Mt/100)),maxW:Math.floor(pe/2)},document.body.classList.add("qc-split-resizing")}function vt(B){if(!_t)return;const ue=B.clientX-_t.startX;let pe=_t.startW+ue;pe=Math.max(_t.minW,Math.min(pe,_t.maxW)),St.value=pe,ct();try{localStorage.setItem("qc_split_width",String(pe))}catch{}}function bt(){_t&&(_t=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",vt),document.addEventListener("mouseup",bt));function Bt(B){const ue=B.target&&B.target.closest?B.target.closest("[data-split-resize]"):null;if(!ue)return;const pe=ue.closest("[data-split-root]");Yt(B,pe)}typeof document<"u"&&document.addEventListener("mousedown",Bt,!0);const gt={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},at=a({});function Ht(B,ue){return gt[ue]||ue}function aa(B){const ue=ne.find(je=>je.key===B);if(!ue||!ue.subPages||!ue.subPages.length)return;if(!(at.value[B]||[]).length){const je=ue.subPages[0];at.value=Object.assign({},at.value,{[B]:[{subPage:je,title:Ht(B,je)}]})}}function da(B,ue){const pe=window.__quantModules&&window.__quantModules.tabsCore,je=Ht(B,ue);if(pe){const Ue=pe.openTab(at.value,B,ue,je);at.value=Ue.groups}else{const Ue=at.value[B]||[];Ue.some(It=>It.subPage===ue)||(at.value=Object.assign({},at.value,{[B]:Ue.concat([{subPage:ue,title:je}])}))}Qe(B,ue)}function la(B,ue){const pe=window.__quantModules&&window.__quantModules.tabsCore,je=Ze.value;let Ue=null;if(pe)Ue=pe.closeTab(at.value,B,ue,je),at.value=Ue.groups;else{const At=at.value[B]||[];at.value=Object.assign({},at.value,{[B]:At.filter(ga=>ga.subPage!==ue)})}if(!(at.value[B]||[]).length){aa(B);const At=ne.find(os=>os.key===B),ga=At&&At.subPages&&At.subPages[0];ga&&Qe(B,ga);return}const Ut=Ue?Ue.nextActive:null;Ut&&Qe(B,Ut)}function Xt(B,ue){if(!(at.value[B]||[]).some(je=>je.subPage===ue)){da(B,ue);return}Qe(B,ue)}f([Me,Ze],([B,ue])=>{aa(B);const pe=at.value[B]||[];ue&&!pe.some(je=>je.subPage===ue)&&(at.value=Object.assign({},at.value,{[B]:pe.concat([{subPage:ue,title:Ht(B,ue)}])}))},{immediate:!0});const ua=function(B){if(!(B.ctrlKey&&B.key==="Tab"))return;const ue=Me.value,pe=at.value[ue]||[];if(pe.length<=1)return;B.preventDefault();const je=Ze.value,Ue=Math.max(0,pe.findIndex(At=>At.subPage===je)),It=B.shiftKey?(Ue-1+pe.length)%pe.length:(Ue+1)%pe.length,Ut=pe[It];Ut&&Xt(ue,Ut.subPage)};window.addEventListener("keydown",ua);const va=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),Qt=a("light"),O=[45,220,0,140,270,320],ye={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},Oe=a(45),Te=a(function(){const B=window.__quantModules&&window.__quantModules.preferences;return B&&B.getPreference&&B.getPreference("theme")||"system"}());(function(){const B=window.__quantModules&&window.__quantModules.preferences,ue=B&&B.getPreference&&B.getPreference("theme_hue");ue!=null&&ue!==""&&(Oe.value=parseInt(ue,10))})();function st(B){return"hsl("+B+", 75%, 42%)"}function et(B){return ye[B]||"自定义 "+B}const zt=a(""),Kt=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),Tt=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),ma=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],sa=a({day:[],week:[],month:[],year:[]}),ya=a({});function Zt(B,ue){let pe=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(pe=window.__quantModules.themes.applyTheme(B,ue)),Qt.value=pe&&pe.mode?pe.mode:B==="dark"||B==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Da(B,ue){const pe=window.__quantModules&&window.__quantModules.preferences;if(!(!pe||!pe.setPreferences))try{pe.setPreferences({theme:B}),ue!=null&&ue!==""&&pe.setPreferences({theme_hue:parseInt(ue,10)})}catch{}}function pa(B,ue){Zt(B,ue),ue!=null&&ue!==""&&(Oe.value=parseInt(ue,10));const pe=window.__quantModules&&window.__quantModules.themes;let je=B;pe&&pe.LEGACY_MAP&&pe.LEGACY_MAP[B]&&(je=pe.LEGACY_MAP[B][0]),je==="light"||je==="dark"||je==="system"?Te.value=je:Te.value=Qt.value,je==="system"&&(je=Qt.value),Da(je,ue),Ae.value&&(fetch(`/api/users/${Ae.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:je})}),Ae.value.theme=je,localStorage.setItem("quant_user",JSON.stringify(Ae.value)))}function Ra(B){const ue=window.__quantModules&&window.__quantModules.preferences,pe=ue&&ue.getPreference?ue.getPreference("theme_hue"):null;pa(B,pe)}function za(B){Oe.value=parseInt(B,10);const ue=window.__quantModules&&window.__quantModules.preferences,pe=ue&&ue.getPreference&&ue.getPreference("theme")||"light";pa(pe,Oe.value)}const fa=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function Wt(B){fa.value=!!B;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",B?"show":"hide")}catch{}}const ba=e(()=>{const B=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return fa.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...B]:B}),Jt=a("daily");(function(){try{const ue=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ue==="weekly"||ue==="monthly")&&(Jt.value=ue)}catch{}})();const wa=a(!1),ka=a(""),b=a(!1),s=a(!1),j=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),te=["MA5","MA10","MA20","MA60"],_e=a(!1);let Ce=0;async function mt(B){if(!ce.value)return!1;const ue=++Ce;wa.value=!0,Jt.value=B;try{const je=await(await fetch(`/api/market/kline/${ce.value.stock}?period=${B}&limit=60`)).json();if(!je.success||!je.data)throw new Error(je.message||"数据获取失败");return ka.value=je.degraded_from?"分钟数据("+je.degraded_from+")暂不可用, 已降级展示日线":"",$s(ce.value.stock),ue!==Ce?!1:(L.value!=="kline"||(s.value=!0,await v(),window.__quantModules.charts.renderKlineTo("stockKlineChart",je.data,B,!1,{isMobile:ms.value,onLegend:Ue=>{Object.keys(j.value).forEach(It=>{It in Ue&&(j.value[It]=!!Ue[It])})}}),ia()),!0)}catch(pe){return console.error("[kline] 加载失败:",ce.value&&ce.value.stock,B,pe),L.value==="kline"&&(s.value=!1,ka.value="",ElementPlus.ElMessage.error("K线加载失败: "+(pe&&pe.message?pe.message:"数据源不可达，请重试"))),!1}finally{wa.value=!1}}async function Je(B){if(Ua.value){b.value=!0,Jt.value=B;try{const pe=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${B}&limit=60`)).json();if(!pe.success||!pe.data)throw new Error(pe.message||"数据获取失败");_e.value=!0,await v(),window.__quantModules.charts.renderKlineTo("indexKlineChart",pe.data,B,!0,{isMobile:ms.value,onLegend:je=>{Object.keys(j.value).forEach(Ue=>{Ue in je&&(j.value[Ue]=!!je[Ue])})}}),ia()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{b.value=!1}}}async function pt(B){if(!s.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await mt(B)}async function ea(B){if(!_e.value){ElementPlus.ElMessage.info("请先加载K线");return}await Je(B)}function Ct(B){const ue=(We.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ue&&ue.dispatchAction({type:"legendToggleSelect",name:B})}function ia(){["K线","MA5","MA10","MA20","MA60"].forEach(B=>{j.value[B]=!0})}async function ta(){const B=await fetch("/api/system/metrics");if(!B.ok)throw new Error("metrics "+B.status);const ue=await B.json(),pe=Array.isArray(ue)?ue:ue&&ue.data_sources||[];C.value=pe}const Be=()=>ns,Pt=()=>Es,qa=()=>jo,_a=()=>Aa,qt=()=>ts,Ka=window.__quantAppLogic.data.create({currentView:ke,statusFilter:Se,dashboardData:Vt,loadHealthMetrics:ta,getLoadDashboardData:Be,getLastRefreshTime:Pt,getFetchPoolSignals:qa}),{loading:ci,loadingView:di,viewCache:ui,dates:Ia,selectedDate:$t,lastLoadTime:vi,consensus:xa,viewNote:mi,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ea,loadDashboardCached:Na}=Ka,pi=window.__quantAppLogic.market.create({currentKlinePeriod:Jt,loadIndexKline:Je,rememberDialogTrigger:P,menus:X,currentPage:Me,currentSubPage:Ze,stockDetail:ce,selectedDate:$t}),{marketData:fi,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:gi,indexAiLoading:hi,fetchMarketData:Ga,showIndexDetail:yi,loadCachedIndexEval:bi,doIndexAiEvaluate:wi,disposeStockKline:vs,isMobile:ms,zoomKlineRange:ki,scoreAnimating:_i,scoreDelta:xi,scorePulse:Si,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Ci,onTouchEnd:qi}=pi,Ei=window.__quantAppLogic.ops.create({navigateTo:Qe,currentPage:Me,currentSubPage:Ze}),{feishuConfig:ps,feishuTestStatus:Mi,feishuTestMessage:Ti,testFeishuWebhook:Pi,saveFeishuConfig:Di,aiFabHidden:Ri,openAiFab:fs,strategyRecommendations:zi,aiUsage:Ai,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:Li,analyticsRank:Ii,analyticsDays:Ni,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Oi,loadHealthDetail:bs,reviewTriggering:ji,triggerMarketReview:Vi,factCheck:Fi,factCheckRunning:Hi,loadFactCheck:ws,triggerFactCheck:Bi,backups:Ki,backupCreating:Wi,loadBackups:ks,createBackup:Ui,restoreBackup:Gi,reportExporting:Yi,reportExportMsg:Ji,exportReport:Qi,tourVisible:$i,tourStep:Xi,tourSteps:Zi,maybeShowTour:el,skipTour:tl,finishTour:al,feedbackText:sl,feedbackSubmitting:il,submitFeedback:ll}=Ei,nl=window.__quantAppLogic.nav.create({currentView:ke,selectedDate:$t,dates:Ia,loadConsensusData:Ea,hapticFeedback:i}),{viewUnit:ol,datePickerType:rl,dateFormat:cl,canNavPrev:dl,canNavNext:ul,switchView:_s,navigateDate:xs,disabledDate:vl,onDateChange:ml}=nl,pl=window.__quantAppLogic.keys.create({menus:X,subPageNames:gt,navigateTo:Qe,currentPage:Me,currentView:ke,navigateDate:xs,switchView:_s,getLoadDashboardData:Be,refreshCalendarData:ds,getLoadAiHistory:_a,exportCSV:us,getShowBatchEvaluate:qt,openAiFab:fs,toggleSidebar:we,showStockDetail:Cs}),{searchQuery:fl,searchStocks:gl,onSearchSelect:hl,shortcutHelpVisible:yl,commandPaletteVisible:bl,handleGlobalKeydown:Ss}=pl;let Oa=0;async function Cs(B){const ue=++Oa;P(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(B,""),Xa.value=null,Jt.value="daily",s.value=!1,L.value="kline",ce.value=null,He.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),We.value=!0,v(()=>Ja());try{const pe=await fetch(`/api/calendar/stock/${B}?date=${$t.value}`);if(ue!==Oa)return;ce.value=await pe.json(),ce.value&&ce.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(B,ce.value.name)}catch{if(ue!==Oa)return;ElementPlus.ElMessage.error("加载失败"),ce.value={stock:B,name:"",total_days:0}}finally{ue===Oa&&(He.value=!1)}setTimeout(async()=>{await mt("daily"),Ya()},500),as(B)}const wl={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},kl={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function _l(B){return wl[B]||"var(--text-tertiary)"}function xl(B){return kl[B]||"var(--bg-hover)"}const Sl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:s,stockDetailVisible:We,stockDetailTab:L,stockDetail:ce,disposeStockKline:vs}):{},{chatSessions:Cl,chatHistoryView:ql,selectedChatIds:El,expandedChatDates:Ml,expandedChatMonths:Tl,expandedChatStocks:Pl,chatHistoryLoading:Dl,chatHistoryError:Rl,allChatSessionsFlat:zl,chatGroupedByDate:Al,chatGroupedByMonth:Ll,chatGroupedByStock:Il,toggleSelectChat:Nl,toggleSelectChatDate:Ol,toggleSelectChatMonth:jl,toggleSelectChatStock:Vl,toggleChatDateExpand:Fl,toggleChatMonthExpand:Hl,toggleChatStockExpand:Bl,selectAllChatSessions:Kl,deleteSelectedChatSessions:Wl,viewChatSession:Ul,loadChatHistory:qs,deleteChatSession:Gl,renderMarkdown:Yl,stockChatInput:Jl,stockChatMessages:Ql,stockChatLoading:$l,stockChatError:Xl,askStockSend:Zl,askStockQuick:en}=Sl,tn=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:Ae,applyTheme:Zt,allMenuDefs:ne,loadGroupConfig:fe}):{},{userList:an,userSearch:sn,groupFilter:ln,userPageTab:nn,expandedGroups:on,addMemberGroupMap:rn,filteredUsers:cn,toggleGroupExpand:dn,removeMemberFromGroupInline:un,addMemberToGroupInline:vn,changeUserGroup:mn,showAddUser:pn,editingUser:fn,userForm:gn,savingUser:hn,editingGroup:yn,menuConfigDialog:bn,memberDialog:wn,groupEditForm:kn,subPageCache:_n,showAddGroup:xn,addGroupForm:Sn,savingGroup:Cn,groupMembers:qn,addMemberUsername:En,selectedMemberGroup:Mn,subPageSectionExpanded:Tn,toggleSubPageSection:Pn,getGroupMemberCount:Dn,getMenuEnabledCount:Rn,groupCount:zn,openMemberManager:An,loadGroupMembers:Ln,addMemberToGroup:In,removeMemberFromGroup:Nn,availableUsersForGroup:On,onParentToggle:jn,openMenuConfig:Vn,saveMenuConfig:Fn,deleteGroupConfig:Hn,createGroup:Bn,allGroups:Kn,getGroupName:Wn,loadAllGroups:$a,loadUsers:ja,editUser:Un,saveUser:Gn,deleteUser:Yn,toggleUserEnabled:Jn,resetUserPassword:Qn}=tn,$n=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:xa,currentPage:Me,currentSubPage:Ze,dashboardData:Vt,searchKeyword:zt,statusFilter:Se,strategyFilter:Tt,strategyFilterCounts:sa}):{},{applyStrategyFilter:_f,statusCounts:Xn,stockPool:Zn,strategyDistribution:eo,strategyPreviewCount:to,saveStrategyFilter:ao,filteredConsensusRank:so,currentPoolSize:io,filteredStrategyCounts:lo,poolChangeBadge:no,timeBarPercent:oo,lastRefreshTime:Es,timeSinceRefresh:ro,navigateToStrategyFilter:co}=$n,uo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:R,consensus:xa}):{},{aiResult:Xa,lastEvalTime:vo,evalHistoryComparison:mo,checklistItems:po,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ps,expandedMonths:fo,expandedStocks:Ds,poolSignals:go,toggleMonthExpand:ho,aiHistoryView:yo,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:bo,aiCatalog:wo,aiModelsError:ko,testingAllModels:_o,savingAiModels:xo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:So,testVendorModel:Co,testAllVendorModels:qo,fetchVendorModels:Eo,addVendorFromCatalog:Mo,addCustomVendor:To,addVendorModel:Po,removeVendorModel:Do,removeVendor:Ro,toggleVendorKeyReveal:zo,toggleVendorEdit:Ao,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:Lo,providerInfo:Io,aiPresets:xf,applyPreset:No,onProviderChange:Oo,fetchPoolSignals:jo,cancelPoolSignals:Qs,loadLastEvaluation:as}=uo,Vo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:Ae,selectedDate:$t,stockDetail:ce,stockDetailTab:L,stockDetailVisible:We,stockDetailLoading:He,stockKlineLoaded:s,viewCache:ui,animateScoreEntrance:Ja,loadStockKline:mt,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ps,expandedStocks:Ds,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Fo,evalStrategy:Ho,watchlistSort:Bo,watchlist:Ko,watchlistCodes:Wo,sortedWatchlist:Uo,getWatchlistScore:Go,getLatestScore:Sf,addSearchResult:Yo,evaluatedCodes:Jo,klineLoadedCodes:Qo,markKlineLoaded:$s,watchlistSearch:$o,watchlistResults:Xo,watchlistSearching:Zo,dataRefreshConfig:er,dataRefreshReloading:tr,dataRefreshSaving:ar,aiHistoryLoading:sr,aiHistoryError:ir,aiHistoryTotal:lr,aiHistoryLoadingMore:nr,hasMoreAiHistory:or,loadMoreAiHistory:rr,watchlistLoading:cr,doAiEvaluate:dr,loadAiHistory:Aa,deleteSingleHistory:ur,toggleSelectHistory:vr,clearSelection:mr,clearWatchlistSelection:pr,batchReevaluateHistory:fr,batchAddToWatchlist:gr,batchRemoveWatchlist:hr,toggleSelectWatchlist:yr,selectAllHistory:br,selectAllWatchlist:wr,deleteSelectedHistory:kr,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:_r,loadWatchlist:Zs,addToWatchlist:xr,removeFromWatchlist:Sr,clearWatchlist:Cr,toggleWatchlist:qr,showStockKline:Er,preloadingKline:Mr,preloadWatchlistKline:ei,watchlistEvaluate:Tr,batchEvaluateWatchlist:Pr,batchEvaluateSelected:Dr,searchStockForWatchlist:Rr,loadDataRefreshConfig:ti,saveDataRefreshConfig:zr,triggerDataReload:Ar,triggerDataPull:Lr,dataPullRunning:Ir,groupedByDate:Nr,aiHistoryByStock:Or,groupedByMonth:jr,aiHistoryStockCount:Vr,scoreDistribution:Fr,quickEvaluate:Hr,toggleDateExpand:Br,toggleSelectDate:Kr,toggleSelectMonth:Wr,toggleStockExpand:Ur,toggleSelectStock:Gr,registerTrendChart:Yr,viewAiResult:Jr,doBatchEvaluate:Qr,realtimeQuotes:$r,realtimeDegraded:Xr,realtimeWsState:Zr,connectRealtimeQuotes:ec,disconnectRealtimeQuotes:tc,quoteWarningFor:ac,realtimeQuoteColor:sc,realtimePriceText:ic,realtimePctText:lc,realtimeRatioText:nc,REALTIME_DEGRADED_TEXT:oc,REALTIME_FALLBACK_TEXT:rc}=Vo,cc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:he}):{},{btStrategyOptions:dc,btSelectedStrategies:uc,toggleBtStrategy:vc,btDateRange:mc,btCapital:pc,btCommissionRate:fc,btIncludeBenchmark:gc,btRunning:hc,btResult:yc,btError:bc,btMetrics:wc,btAnnualReturns:kc,btTrades:_c,btStrategyMetricsRows:xc,btDrawdownRegion:Sc,runBacktestWorkbench:Cc,exportBacktestCSV:qc,registerBacktestNavChart:Ec,btFmtNum:Mc}=cc,Tc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:R,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:Qt,changeTheme:pa,autoEvaluateConfig:Za,currentUser:Ae,strategyFilter:Tt,applyTheme:Zt,dashboardData:Vt,lastRefreshTime:Es,saveAiModels:So}):{},{configSaving:Pc,globalConfigDirty:Dc,lastSavedTime:Rc,feishuConfigOriginal:Cf,aiConfigOriginal:qf,tushareConfigOriginal:Ef,tushareConfig:zc,tushareStatus:Ac,datasourceConfig:Lc,datasourceStatus:Ic,syncingData:Nc,stockCount:Oc,tradeDateCount:jc,aiStatus:Vc,appVersion:ai,showImportDialog:Fc,rateLimitConfig:Hc,rateLimitDirty:Bc,rateLimitSaving:Kc,loadRateLimit:ss,saveRateLimit:Wc,saveAiConfig:Uc,testAiApi:Gc,exportConfig:Yc,importConfig:Jc,saveAllConfig:Qc,resetAllConfig:$c,testTushareConnection:Xc,checkTushareConnection:Fa,syncStockData:Zc,loadTushareConfig:si,loadDatasourceConfig:ii,saveDatasourceConfig:ed,testDatasource:td,toggleDatasourceKeyReveal:ad,toggleDatasourceEdit:sd,loadFeishuConfig:is,loadAiConfig:Ha,loadUserConfig:li,loadSystemStatus:ls,loadDashboardData:ns}=Tc,id=window.__quantAppLogic.auth.create({currentUser:Ae,loadUserConfig:li,loadDates:cs,loadDashboardData:ns,loadDashboardCached:Na,loadHealthMetrics:ta,loadConsensusData:Ea,applyTheme:Zt,maybeShowTour:el,loadAiVendors:Va}),{loginForm:ld,logining:nd,guestLogining:od,showChangePassword:rd,changePasswordForm:cd,changingPassword:dd,showSetupWizard:ud,setupForm:vd,setupStep:md,checkSetupWizard:pd,completeSetupWizard:fd,resetSetupWizard:gd,handleLogin:hd,handleGuestLogin:yd,handleLogout:bd,doChangePassword:wd}=id;window.__quantAppLogic.watch.register({strategyFilter:Tt,currentView:ke,statusFilter:Se,currentPage:Me,currentSubPage:Ze,menus:X,currentUser:Ae,strategyFilterCounts:sa,lazyTick:Nt,dates:Ia,selectedDate:$t,consensus:xa,loadConsensusData:Ea,fetchMerrillClock:T,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:Aa,preloadWatchlistKline:ei,loadChatHistory:qs,loadSystemStatus:ls,checkTushareConnection:Fa,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:ta,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:ii,loadFeishuConfig:is,loadAiConfig:Ha,loadAiVendors:Va,loadRateLimit:ss,loadDataRefreshConfig:ti,loadBackups:ks,loadAllGroups:$a,loadUsers:ja,stockDetailTab:L,stockDetailVisible:We,stockKlineLoaded:s,loadStockKline:mt,currentKlinePeriod:Jt,showMerrillDetail:Y,indexDetailVisible:Wa,restoreDialogFocus:_});const kd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:Zt,menus:X,currentPage:Me,currentSubPage:Ze,currentView:ke,currentKlinePeriod:Jt,selectedDate:$t,dates:Ia,loadDates:cs,loadConsensusData:Ea,loadDashboardCached:Na,appVersion:ai,themes:va,fetchMarketData:Ga,fetchMerrillStages:Q,fetchMerrillClock:T,loadMerrillTimeline:D,showTimelineStage:H,merrillTimeline:de,timelineLoading:ee,loadAiConfig:Ha,loadAiVendors:Va,loadAiCatalog:Is,currentUser:Ae,loadUserConfig:li,loadAutoEvaluateConfig:Xs,loadGroupConfig:fe,loadUsers:ja,loadAllGroups:$a,loadAiHistory:Aa}),{runOnMounted:_d}=kd;window.__quantGoPage=async(B,ue)=>{try{const pe=window.__lazyLoaders&&window.__lazyLoaders[B];pe&&await pe()}catch(pe){console.warn("[lazy] 页面组件加载失败",B,pe)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(pe=>{pe&&pe.name&&!pe.__quantRegistered&&(window.__quantApp.component(pe.name,pe),pe.__quantRegistered=!0)}),Nt&&Nt.value++,Me.value=B,ue&&(Ze.value=ue)};let Ma;f(Me,async B=>{var ue;i("light");try{const pe=ne.find(function(je){return je.key===B});document.title=(pe?pe.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",B),B!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:B})}).catch(()=>{})}catch(pe){console.warn("pageView track failed:",pe)}if(Ma&&(clearInterval(Ma),Ma=null),B==="strategies")await Na(),Ma=setInterval(()=>{Na().catch(()=>{})},5*60*1e3);else if(B==="calendar")$t.value&&await Ea();else if(B==="ai")gs(),Qa(),await Aa();else if(B==="system"){if(!$t.value){const je=await(await fetch("/api/dashboard")).json(),Ue=je.data||je;Ue.latest_date&&($t.value=Ue.latest_date)}if($t.value){const pe=["day","week","month","year"];for(const je of pe)try{const It=await(await fetch(`/api/view/${je}/${$t.value}?status=all`)).json();sa.value[je]=It.stocks||[]}catch(Ue){console.warn("loadConsensusData view load failed:",Ue)}(!xa.value||xa.value.length===0)&&(xa.value=sa.value.day||[])}((ue=Ae.value)==null?void 0:ue.role)==="admin"&&(await ja(),await is(),await si(),await ls(),await Ha(),await ss(),Fa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Fa,36e5)))}}),p(async()=>{await _d()}),De(),D(),t(()=>{Ma&&clearInterval(Ma),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",ua)});function xd(B,ue=2){return B==null||B===""||isNaN(Number(B))?"--":Number(B).toFixed(ue)}return{currentPage:Me,pageComp:yt,currentSubPage:Ze,sidebarCollapsed:ae,menus:X,navMode:Ke,setNavMode:rt,tabGroups:at,openTab:da,closeTab:la,activateTab:Xt,fmtNum:xd,sanitizeHtml:h,keyClick:g,isOnline:o,currentUser:Ae,allMenuDefs:ne,t:x,locale:n,changeLanguage:l,currentPageName:jt,subPageNames:gt,searchQuery:fl,searchStocks:gl,onSearchSelect:hl,selectedDate:$t,onDateChange:ml,disabledDate:vl,refreshCalendarData:ds,exportCSV:us,viewNote:mi,loading:ci,lastLoadTime:vi,resetSetupWizard:gd,showChangePassword:rd,themes:va,currentTheme:Qt,changeTheme:pa,changeThemeMode:Ra,changeThemeHue:za,handleLogout:bd,themeHues:O,themeHueNames:ye,themeHue:Oe,themeMode:Te,hueColor:st,hueName:et,marketData:fi,merrillData:V,merrillTimeline:de,timelineLoading:ee,merrillStagesConfig:W,fetchMerrillStages:Q,healthMetrics:C,feishuConfig:ps,feishuTestStatus:Mi,feishuTestMessage:Ti,shortcutHelpVisible:yl,shortcutHelpItems:dt,commandPaletteVisible:bl,tourVisible:$i,tourStep:Xi,tourSteps:Zi,skipTour:tl,finishTour:al,backups:Ki,backupCreating:Wi,loadBackups:ks,createBackup:Ui,restoreBackup:Gi,reportExporting:Yi,reportExportMsg:Ji,exportReport:Qi,sysMonitor:Li,analyticsRank:Ii,analyticsDays:Ni,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Oi,loadHealthDetail:bs,reviewTriggering:ji,triggerMarketReview:Vi,factCheck:Fi,factCheckRunning:Hi,loadFactCheck:ws,triggerFactCheck:Bi,strategyRecommendations:zi,aiUsage:Ai,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:Ri,openAiFab:fs,feedbackText:sl,feedbackSubmitting:il,submitFeedback:ll,backtestStrategies:he,backtestStrategy:be,backtestRange:Pe,backtestCapital:ze,backtestRunning:Ge,backtestResult:Xe,runBacktest:xt,btStrategyOptions:dc,btSelectedStrategies:uc,toggleBtStrategy:vc,btDateRange:mc,btCapital:pc,btCommissionRate:fc,btIncludeBenchmark:gc,btRunning:hc,btResult:yc,btError:bc,btMetrics:wc,btAnnualReturns:kc,btTrades:_c,btStrategyMetricsRows:xc,btDrawdownRegion:Sc,runBacktestWorkbench:Cc,exportBacktestCSV:qc,registerBacktestNavChart:Ec,btFmtNum:Mc,fetchMarketData:Ga,fetchMerrillClock:T,testFeishuWebhook:Pi,saveFeishuConfig:Di,merrillClockConfig:Z,merrillClockLastUpdated:I,merrillReevalResult:E,merrillReevalLoading:z,saveMerrillClockConfig:qe,doMerrillReevaluate:Le,dataRefreshConfig:er,dataRefreshReloading:tr,dataRefreshSaving:ar,loadDataRefreshConfig:ti,saveDataRefreshConfig:zr,triggerDataReload:Ar,triggerDataPull:Lr,dataPullRunning:Ir,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:gi,indexAiLoading:hi,loadCachedIndexEval:bi,showIndexDetail:yi,doIndexAiEvaluate:wi,klinePeriods:ba,currentKlinePeriod:Jt,klineLoading:wa,indexKlineLoading:b,stockKlineLoaded:s,indexKlineLoaded:_e,klineDegradeNote:ka,klineShowMinutes:fa,toggleKlineShowMinutes:Wt,loadStockKline:mt,switchKlinePeriod:pt,loadIndexKline:Je,switchIndexKlinePeriod:ea,zoomKlineRange:ki,MA_LINES:te,klineMaVisible:j,toggleKlineMa:Ct,scoreAnimating:_i,scoreDelta:xi,scorePulse:Si,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:Y,merrillDetailData:J,showStageDetail:oe,getCharLabel:d,getAssetName:K,getRankColor:re,levelColor:_l,levelBg:xl,timelineStages:F,getStageAngle:le,getCycleProgress:G,getCurrentStageMonths:y,getStageTotalMonths:r,isStageCompleted:q,stages:U,indicatorList:se,dimensionScoreList:$,confidenceColor:N,views:ve,currentView:ke,statusFilter:Se,loginForm:ld,logining:nd,guestLogining:od,dashboardData:Vt,loadingView:di,dates:Ia,consensus:xa,searchKeyword:zt,stockDetailVisible:We,stockDetailTab:L,stockDetail:ce,stockDetailLoading:He,detailDisplayMode:$e,setDetailDisplayMode:Ft,isNarrow:nt,detailSplitEnabled:kt,splitWidth:St,setSplitWidth:Rt,SPLIT_DEFAULT_PCT:Mt,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:an,showAddUser:pn,editingUser:fn,userForm:gn,savingUser:hn,userSearch:sn,filteredUsers:cn,groupFilter:ln,userPageTab:nn,expandedGroups:on,addMemberGroupMap:rn,toggleGroupExpand:dn,removeMemberFromGroupInline:un,addMemberToGroupInline:vn,changeUserGroup:mn,statusCounts:Xn,stockPool:Zn,poolSignals:go,aiResult:Xa,aiHistory:Ms,groupedByDate:Nr,groupedByMonth:jr,expandedDates:Ps,expandedMonths:fo,aiHistoryByStock:Or,aiHistoryStockCount:Vr,expandedStocks:Ds,aiHistoryView:yo,aiHistoryLoading:sr,aiHistoryError:ir,aiHistoryTotal:lr,aiHistoryLoadingMore:nr,hasMoreAiHistory:or,loadMoreAiHistory:rr,watchlistLoading:cr,scoreDistribution:Fr,quickEvalStock:Fo,evalStrategy:Ho,checklistItems:po,evalHistoryComparison:mo,quickEvaluate:Hr,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:Kt,toggleDateExpand:Br,toggleMonthExpand:ho,toggleSelectDate:Kr,toggleSelectMonth:Wr,toggleSelectStock:Gr,toggleStockExpand:Ur,registerTrendChart:Yr,selectedWatchlistCodes:Rs,clearWatchlistSelection:pr,toggleSelectWatchlist:yr,selectAllHistory:br,selectAllWatchlist:wr,batchRemoveWatchlist:hr,batchEvaluateSelected:Dr,batchReevaluateHistory:fr,batchAddToWatchlist:gr,viewUnit:ol,datePickerType:rl,dateFormat:cl,canNavPrev:dl,canNavNext:ul,handleLogin:hd,handleGuestLogin:yd,switchView:_s,navigateDate:xs,navigateTo:Qe,loadDashboardData:ns,loadConsensusData:Ea,showStockDetail:Cs,doAiEvaluate:dr,doBatchEvaluate:Qr,loadAiHistory:Aa,loadLastEvaluation:as,lastEvalTime:vo,viewAiResult:Jr,saveAiConfig:Uc,testAiApi:Gc,exportConfig:Yc,importConfig:Jc,configSaving:Pc,configChanged:R,watchlist:Ko,watchlistCodes:Wo,watchlistSearch:$o,watchlistResults:Xo,watchlistSearching:Zo,watchlistSort:Bo,sortedWatchlist:Uo,getWatchlistScore:Go,addSearchResult:Yo,evaluatedCodes:Jo,klineLoadedCodes:Qo,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:xr,removeFromWatchlist:Sr,clearWatchlist:Cr,searchStockForWatchlist:Rr,toggleWatchlist:qr,batchEvaluateWatchlist:Pr,watchlistEvaluate:Tr,showStockKline:Er,preloadWatchlistKline:ei,preloadingKline:Mr,realtimeQuotes:$r,realtimeDegraded:Xr,realtimeWsState:Zr,connectRealtimeQuotes:ec,disconnectRealtimeQuotes:tc,quoteWarningFor:ac,realtimeQuoteColor:sc,realtimePriceText:ic,realtimePctText:lc,realtimeRatioText:nc,REALTIME_DEGRADED_TEXT:oc,REALTIME_FALLBACK_TEXT:rc,toggleSelectHistory:vr,clearSelection:mr,deleteSingleHistory:ur,deleteSelectedHistory:kr,saveAutoEvaluateConfig:_r,editUser:Un,saveUser:Gn,deleteUser:Yn,loadUsers:ja,allGroups:Kn,loadAllGroups:$a,getGroupName:Wn,toggleUserEnabled:Jn,resetUserPassword:Qn,selectedPreset:Lo,applyPreset:No,onProviderChange:Oo,providerInfo:Io,globalConfigDirty:Dc,lastSavedTime:Rc,tushareConfig:zc,tushareStatus:Ac,syncingData:Nc,stockCount:Oc,tradeDateCount:jc,aiStatus:Vc,appVersion:ai,showImportDialog:Fc,rateLimitConfig:Hc,rateLimitDirty:Bc,rateLimitSaving:Kc,loadRateLimit:ss,saveRateLimit:Wc,saveAllConfig:Qc,resetAllConfig:$c,testTushareConnection:Xc,syncStockData:Zc,loadTushareConfig:si,loadFeishuConfig:is,loadSystemStatus:ls,loadAiConfig:Ha,aiVendors:bo,aiCatalog:wo,aiModelsError:ko,testingAllModels:_o,savingAiModels:xo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:Co,testAllVendorModels:qo,fetchVendorModels:Eo,addVendorFromCatalog:Mo,addCustomVendor:To,addVendorModel:Po,removeVendorModel:Do,removeVendor:Ro,toggleVendorKeyReveal:zo,toggleVendorEdit:Ao,checkTushareConnection:Fa,datasourceConfig:Lc,datasourceStatus:Ic,loadDatasourceConfig:ii,saveDatasourceConfig:ed,testDatasource:td,toggleDatasourceKeyReveal:ad,toggleDatasourceEdit:sd,strategyFilter:Tt,strategyFilterOptions:ma,strategyFilterCounts:sa,strategyPreviewCount:to,saveStrategyFilter:ao,filteredConsensusRank:so,currentPoolSize:io,filteredStrategyCounts:lo,strategyDistribution:eo,expandedStrategies:ya,poolChangeBadge:no,timeBarPercent:oo,timeSinceRefresh:ro,navigateToStrategyFilter:co,showUserMenu:ut,toggleSidebar:we,groupsConfig:Re,loadGroupConfig:fe,editingGroup:yn,groupEditForm:kn,showAddGroup:xn,addGroupForm:Sn,savingGroup:Cn,menuConfigDialog:bn,memberDialog:wn,groupMembers:qn,addMemberUsername:En,selectedMemberGroup:Mn,subPageSectionExpanded:Tn,toggleSubPageSection:Pn,getGroupMemberCount:Dn,getMenuEnabledCount:Rn,groupCount:zn,openMemberManager:An,loadGroupMembers:Ln,addMemberToGroup:In,removeMemberFromGroup:Nn,availableUsersForGroup:On,subPageCache:_n,onParentToggle:jn,openMenuConfig:Vn,saveMenuConfig:Fn,deleteGroupConfig:Hn,createGroup:Bn,changePasswordForm:cd,changingPassword:dd,doChangePassword:wd,showSetupWizard:ud,setupForm:vd,setupStep:md,checkSetupWizard:pd,completeSetupWizard:fd,chatSessions:Cl,chatHistoryView:ql,selectedChatIds:El,expandedChatDates:Ml,expandedChatMonths:Tl,expandedChatStocks:Pl,chatHistoryLoading:Dl,chatHistoryError:Rl,allChatSessionsFlat:zl,chatGroupedByDate:Al,chatGroupedByMonth:Ll,chatGroupedByStock:Il,toggleSelectChat:Nl,toggleSelectChatDate:Ol,toggleSelectChatMonth:jl,toggleSelectChatStock:Vl,toggleChatDateExpand:Fl,toggleChatMonthExpand:Hl,toggleChatStockExpand:Bl,selectAllChatSessions:Kl,deleteSelectedChatSessions:Wl,viewChatSession:Ul,loadChatHistory:qs,deleteChatSession:Gl,renderMarkdown:Yl,stockChatInput:Jl,stockChatMessages:Ql,stockChatLoading:$l,stockChatError:Xl,askStockSend:Zl,askStockQuick:en,onTouchStart:Ci,onTouchEnd:qi,hapticFeedback:i}}})();Ca.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=tm;window.__quantComponents.Header=Xm;window.__quantComponents.SubNav=up;window.__quantComponents.MobileNav=Pp;window.__quantComponents.StockList=uf;window.__quantComponents.TopTabs=wf;window.__quantComponents.AppIcon=Ca;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default kf();
