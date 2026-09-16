var Cd=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as qd,L as ue,O as ra,Z as Ed,au as Gt,M as fe,P as Ce,aW as Md,a0 as Ve,_ as Fe,F as it,al as wt,S as ot,a1 as nt,X as oa,ai as Lt,q as Ta,o as Ba,a8 as rs,r as At,e as at,av as Td,Y as La,$ as Sa,R as Pd,aC as na,T as Dd,Q as ha,p as Rd,n as zd}from"./vendor-vue-DDF9zi1T.js";import{e as Ad,E as Ld,a as Id,b as Nd,c as Od,z as jd}from"./vendor-ep-VOop1zGa.js";import{C as Vd,a as Fd,W as Hd,I as Bd,S as Kd,B as Wd,F as Ud,b as Gd,c as Yd,d as Jd,e as Qd,f as $d,P as Xd,g as Zd,h as eu,i as tu,T as au,j as su,L as iu,k as lu,G as nu,U as ou,l as ru,m as cu,n as du,D as uu,o as vu,p as mu,M as pu,q as fu,R as gu,r as hu,s as yu,K as bu,t as wu,u as ku,v as _u,w as xu,x as Su,y as Cu,z as qu,A as Eu,E as Mu,H as Tu,O as Pu,J as Du,N as Ru,Q as zu,V as Au,X as Lu,Y as Iu,Z as Nu,_ as Ou,$ as ju,a0 as Vu,a1 as Fu,a2 as Hu,a3 as Bu,a4 as Ku,a5 as Wu,a6 as Uu,a7 as Gu,a8 as Yu,a9 as Ju,aa as Qu,ab as $u,ac as Xu,ad as Zu,ae as ev,af as tv,ag as av,ah as sv,ai as iv,aj as lv,ak as nv,al as ov,am as rv,an as cv,ao as dv,ap as uv,aq as vv,ar as mv,as as pv,at as fv,au as gv,av as hv,aw as yv,ax as bv,ay as wv,az as kv,aA as _v,aB as xv,aC as Sv,aD as Cv,aE as qv,aF as Ev,aG as Mv,aH as Tv,aI as Pv,aJ as Dv,aK as Rv,aL as zv,aM as Av,aN as Lv,aO as Iv,aP as Nv,aQ as Ov}from"./vendor-lucide-DidEUx9K.js";var bf=Cd((Df,Le)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))t(f);new MutationObserver(f=>{for(const v of f)if(v.type==="childList")for(const z of v.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&t(z)}).observe(document,{childList:!0,subtree:!0});function p(f){const v={};return f.integrity&&(v.integrity=f.integrity),f.referrerPolicy&&(v.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?v.credentials="include":f.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function t(f){if(f.ep)return;f.ep=!0;const v=p(f);fetch(f.href,v)}})();window.Vue=qd;const ca=Ad||{};window.ElementPlus=ca;ca.ElMessage=ca.ElMessage||Ld;ca.ElMessageBox=ca.ElMessageBox||Id;ca.ElNotification=ca.ElNotification||Nd;ca.ElLoading=ca.ElLoading||Od;window.ElementPlusLocaleZhCn={default:jd};(function(){const a=[45,220,0,140,270,320],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},p={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(l,b,g){return"hsl("+l+", "+b+"%, "+g+"%)"}function f(l,b,g){b=b/100,g=g/100;const C=function(o){return(o+l/30)%12},D=b*Math.min(g,1-g),x=function(o){return g-D*Math.max(-1,Math.min(C(o)-3,Math.min(9-C(o),1)))};return Math.round(255*x(0))+", "+Math.round(255*x(8))+", "+Math.round(255*x(4))}function v(l){const b=f(l,75,42);return{"--primary-color":t(l,75,42),"--primary-rgb":b,"--color-primary":t(l,75,42),"--qc-primary":t(l,75,42),"--qc-primary-50":t(l,90,96),"--qc-primary-100":t(l,85,92),"--qc-primary-200":t(l,80,84),"--qc-primary-300":t(l,75,72),"--qc-primary-400":t(l,70,58),"--qc-primary-500":t(l,75,48),"--qc-primary-600":t(l,80,42),"--qc-primary-700":t(l,85,35),"--qc-primary-800":t(l,88,28),"--qc-primary-900":t(l,90,20),"--qc-primary-foreground":"#ffffff","--text-link":t(l,70,40),"--secondary-color":t(l,70,55),"--card-border":t(l,55,82),"--bg-selected":"rgba("+b+", 0.08)","--btn-primary-bg":t(l,80,32),"--btn-primary-border":t(l,80,32),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(l,82,28),"--btn-primary-hover-border":t(l,82,28),"--btn-primary-active-bg":t(l,85,24),"--btn-primary-active-border":t(l,85,24),"--btn-primary-plain-bg":"rgba("+b+", 0.08)","--btn-primary-plain-border":"rgba("+b+", 0.25)","--btn-primary-plain-color":t(l,80,32),"--btn-primary-plain-hover-bg":"rgba("+b+", 0.15)","--btn-primary-plain-hover-border":t(l,80,32),"--btn-primary-text-color":t(l,80,32),"--gradient":"linear-gradient(135deg, "+t(l,80,28)+" 0%, "+t(l,76,34)+" 50%, "+t(l,70,44)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,76,34)+" 0%, "+t(l,85,26)+" 100%)","--qc-nav-item-active":t(l,80,35),"--qc-nav-item-active-bg":t(l,85,92),"--qc-nav-item-active-border":t(l,75,48),"--qc-nav-badge-bg":t(l,85,92),"--qc-nav-badge-text":t(l,80,35),"--qc-ring":t(l,70,58)}}function z(l){const b=f(l,85,65);return{"--primary-color":t(l,85,65),"--primary-rgb":b,"--color-primary":t(l,85,65),"--qc-primary":t(l,90,65),"--qc-primary-50":t(l,50,18),"--qc-primary-100":t(l,55,22),"--qc-primary-200":t(l,55,26),"--qc-primary-300":t(l,60,30),"--qc-primary-400":t(l,65,38),"--qc-primary-500":t(l,80,52),"--qc-primary-600":t(l,90,65),"--qc-primary-700":t(l,92,72),"--qc-primary-800":t(l,90,80),"--qc-primary-900":t(l,92,88),"--qc-primary-foreground":"#101014","--text-link":t(l,85,65),"--secondary-color":t(l,70,60),"--card-border":t(l,30,25),"--bg-selected":"rgba("+b+", 0.10)","--btn-primary-bg":t(l,85,65),"--btn-primary-border":t(l,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(l,80,72),"--btn-primary-hover-border":t(l,80,72),"--btn-primary-active-bg":t(l,75,80),"--btn-primary-active-border":t(l,75,80),"--btn-primary-plain-bg":"rgba("+b+", 0.08)","--btn-primary-plain-border":"rgba("+b+", 0.25)","--btn-primary-plain-color":t(l,85,65),"--btn-primary-plain-hover-bg":"rgba("+b+", 0.15)","--btn-primary-plain-hover-border":t(l,85,65),"--btn-primary-text-color":t(l,85,65),"--gradient":"linear-gradient(135deg, "+t(l,80,35)+" 0%, "+t(l,85,50)+" 50%, "+t(l,85,65)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,85,65)+" 0%, "+t(l,80,40)+" 100%)","--qc-nav-item-active":t(l,85,65),"--qc-nav-item-active-bg":"rgba("+b+", 0.10)","--qc-nav-item-active-border":t(l,85,65),"--qc-nav-badge-bg":"rgba("+b+", 0.12)","--qc-nav-badge-text":t(l,85,65),"--qc-ring":t(l,85,65)}}function m(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function c(l){return l=parseInt(l,10),isNaN(l)?45:Math.max(0,Math.min(359,l))}function _(l,b){let g=l||"light",C=b==null||b===""?null:b;if(e[l]){const i=e[l];g=i[0],C==null&&(C=i[1])}g==="system"&&(g=m()?"dark":"light");const D=g==="dark";C=c(C??45);const x=document.documentElement;x.setAttribute("data-theme",D?"dark-pro":"gold"),x.setAttribute("data-theme-mode",D?"dark":"light");const o=D?z(C):v(C);Object.keys(o).forEach(function(i){x.style.setProperty(i,o[i])});try{localStorage.setItem("quant_theme_mode",D?"dark":"light"),localStorage.setItem("quant_theme_hue",String(C))}catch{}return{mode:D?"dark":"light",hue:C}}function n(){const l=localStorage.getItem("quant_theme");if(!l||!e[l]||localStorage.getItem("quant_theme_hue")!==null)return null;const b=e[l];return{mode:b[0],hue:b[1]}}function S(){const l=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let b=l.theme||"system",g=l.theme_hue!=null&&l.theme_hue!==""?l.theme_hue:null;const C=n();return g==null&&C&&(b=C.mode,g=C.hue),g==null&&(g=45),_(b,g)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:p,generateLightTokens:v,generateDarkTokens:z,migrateLegacyTheme:n,applyTheme:_,init:S},S()})();(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],p={};let t=a,f=null;function v(){return f&&typeof f=="object"&&"value"in f?f.value||a:t}function z(l,b){return e.indexOf(l)===-1?!1:(p[l]=b&&typeof b=="object"?b:{},!0)}function m(l){const b=e.indexOf(l)!==-1?l:a;return t=b,f&&typeof f=="object"&&"value"in f&&(f.value=b),typeof document<"u"&&document.documentElement.setAttribute("lang",b),t}function c(){return v()}function _(l){if(l&&typeof l=="object"&&"value"in l){f=l;const b=e.indexOf(l.value)!==-1?l.value:a;l.value=b,t=b}return t}function n(l,b){const g=v(),C=p[g]||{};let D=l in C?C[l]:null;if(D==null&&g!=="en"){const x=p.en||{};D=l in x?x[l]:null}return D==null&&(D=String(l)),b&&typeof b=="object"&&Object.keys(b).forEach(function(x){D=D.replace(new RegExp("\\{"+x+"\\}","g"),String(b[x]))}),D}const S={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:p,registerLocale:z,setLocale:m,getLocale:c,bindLocale:_,t:n};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=S),S});(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let p=[];function t(g){const C=String(g||"");let D="";for(const x of C){const o=a[x];o?D+=o.charAt(0):/[a-zA-Z0-9]/.test(x)&&(D+=x.toLowerCase())}return D}function f(g){const C=String(g||"");let D="";for(const x of C){const o=a[x];o?D+=o:/[a-zA-Z0-9]/.test(x)&&(D+=x.toLowerCase())}return D}function v(g){return String(g||"").trim().toLowerCase()}function z(g,C){const D=(C.code||"").toLowerCase();return/^\d+$/.test(g)?D.indexOf(g)!==-1:/[\u4e00-\u9fa5]/.test(g)?(C.name||"").toLowerCase().indexOf(g)!==-1:D.indexOf(g)!==-1||(C.initials||t(C.name)).indexOf(g)!==-1||(C.pinyin||f(C.name)).indexOf(g)!==-1}function m(g){const C={},D=[],x=function(o,i,u){!o||C[o]||(C[o]=!0,D.push({code:o,name:i||o,source:u||"core",initials:t(i||o),pinyin:f(i||o)}))};return e.forEach(function(o){x(o.code,o.name,"core")}),(g||[]).forEach(function(o){x(o.code,o.name,"extra")}),D}function c(g,C){const D=v(g);if(!D||!C||!C.length)return[];const x=D.split(/[\s,，、;；]+/).filter(Boolean);return x.length?C.filter(function(o){return x.every(function(i){return z(i,o)})}).slice(0,20).map(function(o){return{code:o.code,name:o.name,source:o.source||"core"}}):[]}function _(g){Array.isArray(g)&&(p=p.concat(g))}function n(){return p.slice()}function S(){return m(p)}function l(g){return c(g,S())}const b={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:f,normalizeQuery:v,matchToken:z,buildStockIndex:m,searchStocksByQuery:c,registerExtraStocks:_,getExtraStocks:n,getStockIndex:S,searchCoreStocks:l};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=b),b});(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},p=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function f(i){return i=parseInt(i,10),!isNaN(i)&&i>=0&&i<=360}const v={light:"classic-white",dark:"dark-pro"};function z(){if(typeof localStorage>"u")return{};try{const i=localStorage.getItem(a);if(!i)return{};const u=JSON.parse(i);return u&&typeof u=="object"?u:{}}catch{return{}}}function m(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(i))}catch{}}function c(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function _(){const i=Object.assign({},e,z()),u={};return p.forEach(function(F){const W=i[F];u[F]=F==="theme_hue"?f(W)?parseInt(W,10):e[F]:t[F].indexOf(W)!==-1?W:e[F]}),u}function n(i){if(p.indexOf(i)!==-1)return _()[i]}function S(i,u){return p.indexOf(i)===-1?!1:i==="theme_hue"?f(u):t[i].indexOf(u)!==-1}function l(i,u){if(!S(i,u))return!1;const F=z();return F[i]=u,m(F),c()&&g({[i]:u}),!0}function b(i){if(!i||typeof i!="object")return!1;const u={};if(Object.keys(i).forEach(function(W){S(W,i[W])&&(u[W]=i[W])}),!Object.keys(u).length)return!1;const F=Object.assign({},z(),u);return m(F),c()&&g(u),!0}function g(i){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:i})}).catch(function(){})}catch{}}async function C(){const i=_();if(!c()||typeof fetch>"u")return i;try{const u=await fetch("/api/user_config/preferences");if(u.ok){const F=await u.json();if(F.success&&F.preferences){const W=F.preferences;p.forEach(function(Y){t[Y].indexOf(W[Y])!==-1&&(i[Y]=W[Y])}),m(i)}}}catch{}return i}function D(i){const u=i||n("info_density")||"comfortable",F=t.info_density.indexOf(u)!==-1?u:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",F),F}function x(i){const u=i||n("theme")||"system";if(u==="system"){let F=!1;return typeof window<"u"&&window.matchMedia&&(F=window.matchMedia("(prefers-color-scheme: dark)").matches),F?"dark":"light"}return u==="dark"||u==="light"?u:"light"}const o={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:p,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:v,getLocal:_,getPreference:n,isValidValue:S,setPreference:l,setPreferences:b,saveToBackend:g,loadPreferences:C,resolveTheme:x,applyDensity:D};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=o),o});(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function p(){if(typeof localStorage>"u")return[];try{const _=localStorage.getItem(a);if(!_)return[];const n=JSON.parse(_);return Array.isArray(n)?n:[]}catch{return[]}}function t(_){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(_))}catch{}}function f(_,n){if(!_)return!1;let S=p().filter(function(l){return l.code!==_});return S.unshift({code:_,name:(n||"").toString().slice(0,32),ts:Date.now()}),S.length>10&&(S=S.slice(0,10)),t(S),!0}function v(){return p().slice(0,10)}function z(_){t(p().filter(function(n){return n.code!==_}))}function m(){t([])}const c={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:f,getRecentViewed:v,removeRecent:z,clearRecent:m};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=c),c});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:p,watch:t,onMounted:f,nextTick:v}=a;function z(r,E={}){if(typeof r=="string"&&r.startsWith("/api/")){const d=localStorage.getItem("quant_token");if(d)return{...E,headers:{...E.headers||{},Authorization:"Bearer "+d}}}return E}async function m(r,E={}){const d=z(r,E),K={"Content-Type":"application/json",...d.headers},oe=(E.method||"GET").toUpperCase(),Q=oe+"|"+r,P=async()=>{const w=await fetch(r,{...d,headers:K});if(w.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!w.ok){let R="";try{const ie=await w.json();R=ie&&ie.detail||""}catch{}throw Object.assign(new Error(R||"请求失败（HTTP "+w.status+"）"),{status:w.status})}return await w.json()};try{const w=E.noLoading?P:()=>u(P);return oe==="GET"&&!E.noDedupe?await D(Q,w):await w()}catch(w){throw w.message==="登录已过期"?w:(console.error("[apiFetch] "+r+":",w.message),Object.assign(w,{_formatted:F(w,w.status)}))}}function c(){return new Date().toISOString().split("T")[0]}function _(r){return r?r.split("T")[0]:""}function n(r,E="info",d=3e3){let K=document.querySelector(".toast-container");K||(K=document.createElement("div"),K.className="toast-container",document.body.appendChild(K));const oe=document.createElement("div");oe.className=`toast toast-${E}`,oe.textContent=r,K.appendChild(oe),setTimeout(()=>{oe.classList.add("leaving"),setTimeout(()=>oe.remove(),300)},d)}function S(r,E=300){let d;return function(...K){clearTimeout(d),d=setTimeout(()=>r.apply(this,K),E)}}function l(r,E=300){let d=!1;return function(...K){d||(r.apply(this,K),d=!0,setTimeout(()=>{d=!1},E))}}async function b(r,E=3e3,d=""){const K=new Promise((oe,Q)=>setTimeout(()=>Q(new Error("timeout")),E));try{return await Promise.race([r,K])}catch(oe){console.warn(`[timeout] ${d||"task"} failed:`,oe.message)}}const g=new Map;function C(){return g.clear(),!0}function D(r,E){if(!r||typeof E!="function")return Promise.reject(new Error("bad dedupe args"));if(g.has(r))return g.get(r);const d=Promise.resolve().then(E).finally(()=>{g.delete(r)});return g.set(r,d),d}let x=0;function o(){return x=0,!0}function i(){return x}async function u(r){x++;try{return await r()}finally{x--}}function F(r,E){if(!r)return"请求失败";if(r&&typeof r=="object"&&r.detail)return String(r.detail);if(typeof r=="string"&&r)return r;if(r&&r.message){const d=String(r.message);return/Failed to fetch|fetch failed|networkerror/i.test(d)?"网络连接失败，请检查网络后重试":d}return E?"请求失败（HTTP "+E+"）":"请求失败"}function W(r,E){if(r===E)return!0;try{return JSON.stringify(r)===JSON.stringify(E)}catch{return!1}}function Y(r,E,d){const K=(r||"GET").toUpperCase();let oe="";if(d)try{const Q={};Object.keys(d).sort().forEach(P=>{Q[P]=d[P]}),oe=JSON.stringify(Q)}catch{oe=""}return K+"|"+E+"|"+oe}class J{constructor(){this._map=new Map,this._exp=new Map}get(E){const d=this._exp.get(E);if(d!=null){if(Date.now()>d){this.delete(E);return}return this._map.get(E)}}set(E,d,K){return this._map.set(E,d),this._exp.set(E,Date.now()+(K>0?K:-1)),d}delete(E){this._map.delete(E),this._exp.delete(E)}clear(){this._map.clear(),this._exp.clear()}has(E){return this.get(E)!==void 0}get size(){return this._map.size}}function Z(r){const E=new J,d=r!=null&&r>0?r:15e3;return{store:E,defaultTtl:d,get:K=>E.get(K),set:(K,oe,Q)=>E.set(K,oe,Q??d),delete:K=>E.delete(K),clear:()=>E.clear(),size:()=>E.size}}const N=new Set;async function M(r){const E=r&&r.cache,d=r&&r.key,K=r&&(r.fetchFn||r.fetcher),oe=r&&r.ttl;if(!E||!d||typeof K!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(N.has(d))return{ok:!1,changed:!1,skipped:!0,fresh:null};N.add(d);try{const Q=E.get(d);let P;try{P=await K()}catch(R){return r.onError&&r.onError(R),{ok:!1,changed:!1,fresh:null}}const w=Q!==void 0&&!W(Q,P);return E.set(d,P,oe),r.apply&&r.apply(P,Q),Q!==void 0&&(w?r.onChanged&&r.onChanged(P,Q):r.onUnchanged&&r.onUnchanged(P,Q)),{ok:!0,changed:w,fresh:P}}finally{N.delete(d)}}const A=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function U(r,E={}){if(r==null)return"";const d=E&&E.allow||A,K=new Set(d.map(w=>String(w).toUpperCase()));let oe;try{oe=new DOMParser().parseFromString(String(r),"text/html")}catch{return String(r).replace(/[<>&]/g,R=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[R])}const Q=oe.body||oe;function P(w){Array.from(w.childNodes).forEach(R=>{if(R.nodeType===1){const ie=String(R.tagName).toUpperCase();if(K.has(ie))Array.from(R.attributes).forEach(ye=>{const ve=ye.name.toLowerCase(),ze=(ye.value||"").trim().toLowerCase();(ve.startsWith("on")||(ve==="href"||ve==="src"||ve==="xlink:href")&&ze.startsWith("javascript:")||ve==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(ze))&&R.removeAttribute(ye.name),ve==="href"&&!/^(https?:|mailto:|#|\/)/.test(ze)&&R.removeAttribute("href")}),ie==="A"&&R.setAttribute("rel","noopener noreferrer"),P(R);else{const ye=R.parentNode;for(;R.firstChild;)ye.insertBefore(R.firstChild,R);ye.removeChild(R)}}else if(R.nodeType!==3){if(R.nodeType===8)R.parentNode&&R.parentNode.removeChild(R);else if(R.nodeType===4){const ie=oe.createTextNode(R.nodeValue||"");R.parentNode&&R.parentNode.replaceChild(ie,R)}}})}return P(Q),Q.innerHTML}const ae="/api/openapi",$="/api/market/ws/quotes",se=1,O=2.5,H="数据不可达",L="实时不可用，不刷新";function k(){const r=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",E=typeof location<"u"?location.host:"localhost:8001";return r+"//"+E+$}function T(r,E){if(!r)return null;const d=E||{riseSpeed:se,volumeRatio:O},K=d.riseSpeed!=null?d.riseSpeed:se,oe=d.volumeRatio!=null?d.volumeRatio:O,Q=parseFloat(r.rise_speed);if(!isNaN(Q)&&Math.abs(Q)>K)return Q>0?"涨速预警":"跌速预警";const P=parseFloat(r.volume_ratio);return!isNaN(P)&&P>oe?"放量预警":null}function le(r){const E=Number(r);return r==null||isNaN(E)?null:E}const h={apiFetch:m,withAuthHeaders:z,getToday:c,formatDate:_,withTimeout:b,showToast:n,debounce:S,throttle:l,resetInFlight:C,dedupeRequest:D,resetLoading:o,loadingCount:i,withLoading:u,formatApiError:F,jsonEquals:W,makeCacheKey:Y,CacheStore:J,createTtlCache:Z,silentRefresh:M,sanitizeHtml:U,OPENAPI_ROUTE_BASE:ae,REALTIME_WS_PATH:$,WARN_RISE_SPEED_THRESHOLD:se,WARN_VOLUME_RATIO_THRESHOLD:O,REALTIME_DEGRADED_TEXT:H,REALTIME_FALLBACK_TEXT:L,buildRealtimeWsUrl:k,checkQuoteWarning:T,quoteFmt:{price:function(r){const E=le(r);return E===null?"--":E.toFixed(2)},pct:function(r){const E=le(r);return E===null?"--":(E>0?"+":"")+E.toFixed(2)+"%"},num:function(r){const E=le(r);return E===null?"--":E.toFixed(2)},color:function(r){const E=r?r.change_pct:null,d=le(E);return d===null?"":d>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=h),typeof Le<"u"&&Le.exports&&(Le.exports=h)})();(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(S,l){return S+"/"+l}function p(S,l,b,g){var C=S[l]||[],D=C.findIndex(function(i){return i.subPage===b});if(D!==-1)return{groups:S,activeKey:e(l,b)};var x=C.concat([{subPage:b,title:g}]);x.length>a&&(x=f(x));var o=Object.assign({},S,t({},l,x));return{groups:o,activeKey:e(l,b)}}function t(S,l,b){return S[l]=b,S}function f(S){if(S.length<=a)return S;var l=S.length>1?1:0;return S.filter(function(b,g){return g!==l})}function v(S,l,b,g){var C=S[l]||[],D=C.findIndex(function(u){return u.subPage===b});if(D===-1)return{groups:S,nextActive:null};var x=C.filter(function(u){return u.subPage!==b}),o=Object.assign({},S,t({},l,x)),i=null;return b===g&&(x[D]?i=x[D].subPage:x[D-1]?i=x[D-1].subPage:i=null),{groups:o,nextActive:i}}function z(S){return S&&S.length?S[0]:""}function m(S,l){return S[l]||[]}function c(S,l,b){var g=S[l]||[],C=g.filter(function(x){return x.subPage===b}),D=Object.assign({},S,t({},l,C));return{groups:D,activeKey:C.length?e(l,C[0].subPage):null}}function _(S,l){var b=Object.assign({},S,t({},l,[]));return{groups:b,activeKey:null}}function n(S,l,b,g){var C=(S[l]||[]).slice();if(b<0||b>=C.length)return{groups:S};var D=C.splice(b,1)[0];return C.splice(Math.max(0,Math.min(g,C.length)),0,D),{groups:Object.assign({},S,t({},l,C))}}return{MAX_TABS:a,openTab:p,closeTab:v,getDefaultTab:z,tabsOf:m,evictOldest:f,closeOthers:c,closeAll:_,reorder:n,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var ni=typeof Le=="object"&&Le.exports?Le.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;ni&&(window.__quantModules.tabsCore=ni)}(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",p="nav_mode";function t(n){return a.indexOf(n)!==-1?n:e}function f(n){return t(n)==="subnav"}function v(n){return t(n)==="tree"}function z(n){return t(n)==="toptab"}function m(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function c(){var n=m(),S=e;if(n)try{S=t(n.getItem(p))}catch{}return{navMode:S}}function _(n){var S=m();if(!(!S||!n))try{n.navMode!==void 0&&S.setItem(p,t(n.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:f,treeChildrenVisible:v,topTabsVisible:z,readPrefs:c,writePrefs:_}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var oi=typeof Le=="object"&&Le.exports?Le.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;oi&&(window.__quantModules.navModeCore=oi)}(function(){function e(k,T){if(!Array.isArray(k)||k.length<=T)return k;const le=[],G=k.length/T*2;for(let h=0;h<k.length;h+=G){const r=Math.floor(h),E=Math.min(k.length,Math.ceil(h+G));let d=1/0,K=-1,oe=-1/0,Q=-1;for(let P=r;P<E;P++){const w=k[P];if(!w)continue;const R=w[3]!=null?Number(w[3]):1/0,ie=w[4]!=null?Number(w[4]):-1/0;R<d&&(d=R,K=P),ie>oe&&(oe=ie,Q=P)}K>=0&&le.push(k[K]),Q>=0&&Q!==K&&le.push(k[Q])}return le}let p=null;function t(){return typeof echarts<"u"?Promise.resolve():(p||(p=new Promise(function(k,T){const le=document.createElement("script");le.src="/static/lib/echarts.min.js",le.async=!0,le.onload=function(){typeof echarts<"u"?k():T(new Error("echarts 加载后未定义"))},le.onerror=function(){T(new Error("echarts.min.js 加载失败"))},document.head.appendChild(le)})),p)}function f(){const k=getComputedStyle(document.documentElement);return{primary:k.getPropertyValue("--primary-color").trim()||"#2563eb",up:k.getPropertyValue("--color-up").trim()||"#43e97b",down:k.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:k.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:k.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const v=k=>(getComputedStyle(document.documentElement).getPropertyValue(k)||"").trim();function z(){return{up:v("--color-up")||"#E63946",down:v("--color-down")||"#2E7D32",neutral:v("--color-neutral")||"#43a047",accent:v("--color-accent")||"#F59E0B",risk:v("--color-danger")||"#C62828",warn:v("--color-warning")||"#FF9800",success:v("--color-success")||"#4CAF50",primary:v("--qc-primary-600")||"#b8922a",grid:v("--chart-split")||"#e2e8f0",axis:v("--chart-axis")||"#cbd5e1",bg:v("--chart-bg")||"transparent",series:[v("--qc-primary-600")||"#b8922a",v("--qc-primary-500")||"#c49b2e",v("--qc-primary-700")||"#8f6f1f",v("--qc-primary-400")||"#d4b352",v("--color-up")||"#E63946",v("--color-down")||"#2E7D32",v("--color-accent")||"#F59E0B",v("--qc-neutral-400")||"#b8ae9f"]}}function m(k,T,le,G=!1,h=!1){if(!T||T.length===0)return;T.length>2e3&&(T=e(T,2e3));const r=T.map(Pe=>typeof Pe[0]=="string"&&Pe[0].indexOf("-")>=0?Pe[0]:Pe[0].slice(0,4)+"-"+Pe[0].slice(4,6)+"-"+Pe[0].slice(6,8)),E=f(),d={ma5:v("--color-accent")||"#F59E0B",ma10:v("--color-primary")||"#3B82F6",ma20:v("--color-warning")||"#8B5CF6",ma60:v("--color-success")||"#10B981"},K=T.map(Pe=>[Pe[1],Pe[2],Pe[3],Pe[4]]),oe=T.map(Pe=>Pe[5]),Q=T.map(Pe=>Pe[6]),P=T.map(Pe=>Pe[7]),w=T.map(Pe=>Pe[8]),R=T.map(Pe=>Pe[9]),ie=T.map(Pe=>Pe[10]),ve=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",ze=E.borderLight,Ie={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:E.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:ve,borderColor:ze,textStyle:{color:E.textSecondary,fontSize:12},formatter:function(Pe){if(!Pe||!Pe.length)return"";const qe=Pe[0].dataIndex,te=T[qe];if(!te)return"";const we=k.getOption(),De=we.legend&&we.legend[0]&&we.legend[0].selected||{},ne=Ne=>De[Ne]!==!1,X=Ne=>Ne==null||isNaN(Ne)?"--":Number(Ne).toFixed(2),pe=Ne=>Ne==null||isNaN(Ne)?"--":(Number(Ne)/1e4).toFixed(2)+"万手",Ee=['<div style="font-weight:600;color:'+E.textSecondary+';">'+r[qe]+"</div>"];return Ee.push("开: "+X(te[1])+"　收: "+X(te[2])),Ee.push("低: "+X(te[3])+"　高: "+X(te[4])),Ee.push("成交量: "+pe(te[5])),te[6]!=null&&ne("MA5")&&Ee.push("MA5: "+X(te[6])),te[7]!=null&&ne("MA10")&&Ee.push("MA10: "+X(te[7])),te[8]!=null&&ne("MA20")&&Ee.push("MA20: "+X(te[8])),te[9]!=null&&ne("MA60")&&Ee.push("MA60: "+X(te[9])),te[10]!=null&&Ee.push("VOL_MA5: "+pe(te[10])),Ee.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:h?0:8,textStyle:{color:E.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:h?30:40,height:h?"48%":"52%"},{left:56,right:16,top:h?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:r,boundaryGap:!0,axisLine:{lineStyle:{color:ze}},axisLabel:{color:E.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:r,axisLabel:{show:!1},axisLine:{lineStyle:{color:ze}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:ze}},axisLabel:{color:E.textSecondary,fontSize:11,formatter:function(Pe){const qe=Math.round(Pe*100)/100;return qe%1===0?String(Math.round(qe)):qe.toFixed(2)}},splitLine:{lineStyle:{color:ze,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:ze}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,T.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:ze,textStyle:{color:E.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:K,itemStyle:{color:E.up,color0:E.down,borderColor:E.up,borderColor0:E.down}},{name:"MA5",type:"line",data:Q,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma5}},{name:"MA10",type:"line",data:P,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma10}},{name:"MA20",type:"line",data:w,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma20}},{name:"MA60",type:"line",data:R,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:oe,itemStyle:{color:function(Pe){const qe=Pe.dataIndex;return T[qe][1]>=T[qe][2]?E.up:E.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:ie,smooth:!0,symbol:"none",lineStyle:{width:1,color:d.ma5,type:"dashed"}}]};k.setOption(Ie,!0)}const c=new Map;function _(k){return c.has(k)||c.set(k,{chart:null,cache:null}),c.get(k)}async function n(k,T,le,G=!1,h={}){await t();const r=_(k);let E=document.getElementById(k);if(!E)for(let d=0;d<16&&(await new Promise(K=>setTimeout(K,50)),E=document.getElementById(k),!E);d++);if(!E)throw new Error("无法找到图表容器: "+k);if(E.offsetWidth<50&&(E.style.minWidth="600px",E.style.minHeight="300px"),!r.chart||r.chart.isDisposed()||r.chart.getDom()!==E){if(r.chart)try{r.chart.dispose()}catch{}r.chart=echarts.init(E),r.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const d=h.onLegend;typeof d=="function"&&r.chart.on("legendselectchanged",K=>{K&&K.selected&&d(K.selected)})}return m(r.chart,T,le,G,!!h.isMobile),r.cache={data:T,period:le,isIndex:G,isMobile:!!h.isMobile},r.chart}function S(k){const T=c.get(k);T&&T.chart&&(T.chart.dispose(),T.chart=null,T.cache=null)}function l(k){const T=c.get(k);T&&T.chart&&T.chart.resize()}function b(k,T){const le=c.get(k),G=le&&le.chart;if(G)if(T<=0)G.dispatchAction({type:"dataZoom",start:0,end:100});else{const E=Math.max(0,(60-T)/60*100);G.dispatchAction({type:"dataZoom",start:Math.round(E),end:100})}}function g(k){var G,h,r;const T=c.get(k);if(!T||!T.chart||!T.cache||T.chart.isDisposed())return;const le=((r=(h=(G=T.chart.getOption())==null?void 0:G.legend)==null?void 0:h[0])==null?void 0:r.selected)||null;m(T.chart,T.cache.data,T.cache.period,T.cache.isIndex,T.cache.isMobile),le&&T.chart.setOption({legend:{selected:le}})}function C(k){const T=c.get(k);return T&&T.chart}const D=new Map;function x(k){return D.has(k)||D.set(k,{chart:null,cache:null}),D.get(k)}function o(k,T,le={}){return t().then(function(){const G=x(k),h=document.getElementById(k);if(!h)throw new Error("无法找到图表容器: "+k);if(h.offsetWidth<50&&(h.style.minWidth="600px",h.style.minHeight="300px"),G.chart&&G.chart.getDom&&G.chart.getDom()!==h){try{G.chart.dispose()}catch{}G.chart=null}G.chart||(G.chart=echarts.init(h),G.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),G.resizeBound||(G.resizeBound=!0,window.addEventListener("resize",function(){G.chart&&!G.chart.isDisposed()&&G.chart.resize()})));const r=typeof T=="function"?T():T;return G.chart.setOption(r,!0),G.cache={buildOption:T,key:le.key||""},G.chart})}function i(k){var h,r,E;const T=D.get(k);if(!T||!T.chart||!T.cache||T.chart.isDisposed())return;const le=((E=(r=(h=T.chart.getOption())==null?void 0:h.legend)==null?void 0:r[0])==null?void 0:E.selected)||null,G=typeof T.cache.buildOption=="function"?T.cache.buildOption():T.cache.buildOption;T.chart.setOption(G,!0),le&&G&&G.legend&&G.legend.selected&&T.chart.setOption({legend:{selected:le}})}function u(k){const T=D.get(k);T&&T.chart&&(T.chart.dispose(),T.chart=null,T.cache=null)}function F(k){const T=D.get(k);T&&T.chart&&T.chart.resize()}const W=new Map;function Y(k){return W.has(k)||W.set(k,{chart:null,cache:null}),W.get(k)}function J(k,T,le={}){return t().then(function(){const G=Y(k),h=document.getElementById(k);if(!h)return null;if(h.offsetWidth<50&&(h.style.minWidth="600px",h.style.minHeight="300px"),G.chart&&G.chart.getDom&&G.chart.getDom()!==h){try{G.chart.dispose()}catch{}G.chart=null}G.chart||(G.chart=echarts.init(h),G.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),G.resizeBound||(G.resizeBound=!0,window.addEventListener("resize",function(){G.chart&&!G.chart.isDisposed()&&G.chart.resize()})));const r=typeof T=="function"?T():T;return G.chart.setOption(r,!0),G.cache={buildOption:T,key:le.key||""},G.chart})}function Z(k){const T=W.get(k);if(!T||!T.chart||!T.cache||T.chart.isDisposed())return;const le=typeof T.cache.buildOption=="function"?T.cache.buildOption():T.cache.buildOption;T.chart.setOption(le,!0)}function N(k){const T=W.get(k);T&&T.chart&&(T.chart.dispose(),T.chart=null,T.cache=null)}function M(k){const T=W.get(k);T&&T.chart&&T.chart.resize()}const A=J,U=Z,ae=N,$=M;function se(k,T,le,G){G=G||{};const h=G.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[G.navLabel||"净值",G.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:le||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:G.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:G.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:G.navLabel||"净值",type:"line",data:k||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:G.ddLabel||"回撤",type:"line",yAxisIndex:1,data:T||[],showSymbol:!1,areaStyle:{opacity:.25,color:h},lineStyle:{color:h,type:"solid",width:1.5}}]}}function O(k,T){T=T||{};const le=T.bandColor||"#1976d2",G=k&&k.dates||[],h=k&&k.median||[],r=k&&k.q25||[],E=k&&k.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[T.medianLabel||"中位IC",T.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:G,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:T.medianLabel||"中位IC",type:"line",data:h,showSymbol:!1,lineStyle:{width:2,color:le}},{name:T.bandLabel||"25–75分位",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:le,opacity:.12}},{name:"_bandH",type:"line",data:E.map(function(d,K){return d-(r[K]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:le,opacity:.12}}]}}function H(k,T){T=T||{};const le=T.color||"#7c3aed",G=k&&k.dates||[],h=k&&k.value||[],r=k&&k.upper||[],E=k&&k.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[T.valueLabel||"情绪",T.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:G,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:T.valueLabel||"情绪",type:"line",data:h,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:le}},{name:T.bandLabel||"过热/冰点带",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:le,opacity:.1}},{name:"_bandL",type:"line",data:E.map(function(d,K){return(r[K]||0)-d}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:le,opacity:.1}}]}}const L={renderKlineChart:m,renderKlineTo:n,disposeKline:S,resizeKline:l,zoomKline:b,redrawKline:g,getKlineChart:C,renderBacktestTo:o,redrawBacktest:i,disposeBacktest:u,resizeBacktest:F,renderPortfolioTo:J,redrawPortfolio:Z,disposePortfolio:N,resizePortfolio:M,renderSimpleChartTo:A,redrawSimpleChart:U,disposeSimpleChart:ae,resizeSimpleChart:$,buildNavDrawdownOption:se,buildIcBandOption:O,buildSentimentBandOption:H,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:z,init(){return{renderKlineChart:m,renderKlineTo:n,disposeKline:S,resizeKline:l,zoomKline:b,redrawKline:g,getKlineChart:C,renderBacktestTo:o,redrawBacktest:i,disposeBacktest:u,resizeBacktest:F,renderPortfolioTo:J,redrawPortfolio:Z,disposePortfolio:N,resizePortfolio:M,renderSimpleChartTo:A,redrawSimpleChart:U,disposeSimpleChart:ae,resizeSimpleChart:$,buildNavDrawdownOption:se,buildIcBandOption:O,buildSentimentBandOption:H,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:z}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=L),typeof Le<"u"&&Le.exports&&(Le.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:se,buildIcBandOption:O,buildSentimentBandOption:H})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:p}=Vue,{configChanged:t,consensus:f}=a,v=e(null),z=e(""),m=e(null),c=e([]),_=e([]),n=e([]),S=e([]),l=e([]),b=e([]),g=e({});function C(ge){const be=l.value.indexOf(ge);be>=0?l.value.splice(be,1):l.value.push(ge)}const D=e("date"),x=e([]),o=e(!1),i=e(!1),u=e("watchlist"),F=e([]),W=e({vendors:[]}),Y=e(""),J=e(!1),Z=e(!1);function N(ge){if(!ge)return"";const be=String(ge),Te=be.length;if(Te<=4)return be[0]+"*".repeat(Te-1);const Re=Te<=8?2:4;return be.slice(0,Re)+"*".repeat(Te-Re-Re)+be.slice(-Re)}async function M(ge){let be;try{be=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Re=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:be,target:ge})})).json();if(Re.success)return Re.secret;ElementPlus.ElMessage.error(Re.message||"查看失败")}catch(Te){ElementPlus.ElMessage.error("查看失败: "+Te.message)}return null}async function A(ge){if(ge._revealed){ge._revealed=!1,ge._masked=N(ge.api_key);return}const be=await M("ai:"+ge.vendor_key);be!==null&&(ge.api_key=be,ge._revealed=!0)}async function U(ge){if(ge._editing){ge._editing=!1,ge._revealed=!1,ge.api_key&&(ge._masked=N(ge.api_key));return}ge._editing=!0;try{const Te=await(await fetch("/api/ai/models?full=1")).json();if(Te.success){const Re=(Te.data.vendors||[]).find(Ge=>Ge.vendor_key===ge.vendor_key);Re&&(ge.api_key=Re.api_key||"")}else Te.message&&ElementPlus.ElMessage.error(String(Te.message))}catch(be){ElementPlus.ElMessage.error("解锁失败: "+be.message)}}function ae(ge){const{_fetching:be,_testing:Te,_revealed:Re,_masked:Ge,_editing:Xe,...Ye}=ge;return Xe||(Ye.api_key=""),Ye.models=(ge.models||[]).map(ht=>{const{_testing:xt,testResult:ft,...Ze}=ht;return Ze}),Ye}async function $(){var ge;try{Y.value="";const be=await fetch("/api/ai/models");if(be.status===401){Y.value="请先登录后再查看模型配置";return}if(!be.ok){Y.value=`服务器错误 (${be.status})`;return}const Te=await be.json();Te.success?(F.value=(((ge=Te.data)==null?void 0:ge.vendors)||[]).map(Re=>({...Re,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Re.api_key||"",models:(Re.models||[]).map(Ge=>({...Ge,_testing:!1,testResult:void 0}))})),Y.value=""):Y.value=Te.message||"加载失败"}catch(be){Y.value="网络错误: "+be.message}}async function se(){try{const be=await(await fetch("/api/ai/catalog")).json();be.success&&be.data&&(W.value=be.data)}catch(ge){console.warn("AI 厂商目录加载失败",ge)}}async function O(){Z.value=!0;try{const Te=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:F.value.map(ae)})})).json();Te.success?(F.value.forEach(Re=>{Re._editing=!1,Re._revealed=!1,Re.api_key&&(Re._masked=N(Re.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Te.message||"保存失败")}catch(ge){ElementPlus.ElMessage.error("保存失败: "+ge.message)}Z.value=!1}async function H(ge,be){be._testing=!0;try{const Re=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:ge.vendor_key,model:be.name,base_url:ge.base_url,api_key:ge.api_key,timeout:ge.timeout})});be.testResult=await Re.json()}catch(Te){be.testResult={success:!1,message:Te.message}}be._testing=!1}async function L(){J.value=!0;for(const ge of F.value)for(const be of ge.models||[])ge.api_key?await H(ge,be):be.testResult={success:!1,message:"未配置 API Key"};J.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function k(ge){ge._fetching=!0;try{const Re=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:ge.vendor_key,base_url:ge.base_url,api_key:ge.api_key,timeout:ge.timeout})})).json();if(Re.success&&Array.isArray(Re.models)){const Ge=new Set((ge.models||[]).map(Xe=>Xe.name));for(const Xe of Re.models)Ge.has(Xe)||ge.models.push({name:Xe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Re.models.length} 个模型`)}else ElementPlus.ElMessage.error(Re.message||"获取模型列表失败")}catch(be){ElementPlus.ElMessage.error("获取模型列表失败: "+be.message)}ge._fetching=!1}function T(ge){const be=(W.value.vendors||[]).find(Te=>Te.vendor_key===ge);if(be){if(F.value.some(Te=>Te.vendor_key===ge)){ElementPlus.ElMessage.warning("该厂商已存在");return}F.value.push({vendor_key:be.vendor_key,name:be.name,kind:be.kind,base_url:be.base_url,api_key:"",timeout:60,tier:be.tier||"",website:be.website||"",locked:!!be.locked,models:(be.models||[]).map(Te=>({name:Te,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${be.name}」，配置 API Key 后保存生效`)}}function le(){F.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function G(ge){ge.models||(ge.models=[]),ge.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function h(ge,be){const Te=ge.models[be];if(!(!Te||Te.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Te.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}ge.models.splice(be,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function r(ge){if(ge.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(ge.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const be=F.value.indexOf(ge);be>=0&&F.value.splice(be,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const E=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),d=e(!1),K=e(""),oe=e(0),Q=e(""),P=e(!1),w=e(""),R=e(!1),ie=e(0),ye=e(0),ve=e(""),ze=e({}),Ie=e({}),Pe=e({}),qe=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),te=e("manual"),we=p(()=>{const ge={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return ge[qe.value.provider]||ge.custom}),De={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function ne(ge){if(ge==="manual")return;const be=De[ge];be&&(qe.value.endpoint=be.endpoint,qe.value.model=be.model,t.value=!0)}function X(){if(t.value=!0,qe.value.provider!=="codingplan"&&qe.value.provider!=="custom"){const ge=we.value;ge&&(qe.value.endpoint=ge.endpoint,qe.value.model=ge.model)}else qe.value.provider==="codingplan"&&(qe.value.endpoint||(qe.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),qe.value.model||(qe.value.model="ark-code-latest"))}let pe=null;const Ee=8;async function Ne(){pe&&(pe.abort(),pe=null);const be=(f.value||[]).filter(Ye=>Ye.status==="new"||Ye.status==="out").filter(Ye=>!g.value[Ye.code]);if(be.length===0)return;const Te=new AbortController;pe=Te;let Re=0;const Ge=async()=>{for(;Re<be.length;){const Ye=be[Re++];try{const xt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ye.code,stock_name:Ye.name,event_type:Ye.status==="new"?"enter":"exit"}),signal:Te.signal})).json();xt.success&&xt.signal&&(g.value={...g.value,[Ye.code]:xt.signal})}catch(ht){if(ht.name==="AbortError")return}}},Xe=Array.from({length:Math.min(Ee,be.length)},()=>Ge());await Promise.all(Xe)}function Ke(){pe&&(pe.abort(),pe=null)}let rt=0;async function dt(ge){const be=++rt;try{const Re=await(await fetch(`/api/ai/history/last/${encodeURIComponent(ge)}`)).json();if(be!==rt)return;Re.success&&Re.data&&(v.value=Re.data,z.value=Re.data.evaluate_time,Qe(ge,Re.data),Et(Re.data))}catch{}}async function Qe(ge,be){var Te,Re;try{const Xe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(ge)}&limit=2`)).json();if(Xe.success&&Xe.data&&Xe.data.length>=2){const Ye=Xe.data[1],ht=((Te=be.result)==null?void 0:Te.total_score)||0,xt=((Re=Ye.result)==null?void 0:Re.total_score)||0;ht>0&&xt>0&&(m.value={prevScore:xt,currScore:ht,diff:ht-xt})}}catch(Ge){console.warn("[refreshStrategyData] autoPoll failed:",Ge)}}function Et(ge){var Ge;const be=((Ge=ge.result)==null?void 0:Ge.dimensions)||{},Te=[],Re=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Xe of Re){const Ye=be[Xe.key];Ye!==void 0&&Te.push({icon:Ye>=Xe.good?"check-circle-2":Ye>=Xe.warn?"alert-triangle":"x-circle",label:`${Xe.label} ${Math.round(Ye)}分`})}c.value=Te}return{aiResult:v,lastEvalTime:z,evalHistoryComparison:m,checklistItems:c,aiHistory:_,selectedHistoryIds:n,expandedDates:S,expandedMonths:l,expandedStocks:b,poolSignals:g,toggleMonthExpand:C,aiHistoryView:D,selectedWatchlistCodes:x,showAutoEvaluateSettings:o,savingConfig:i,autoEvaluateScope:u,aiVendors:F,aiCatalog:W,aiModelsError:Y,testingAllModels:J,savingAiModels:Z,loadAiVendors:$,loadAiCatalog:se,saveAiVendors:O,saveAiModels:O,testVendorModel:H,testAllVendorModels:L,fetchVendorModels:k,addVendorFromCatalog:T,addCustomVendor:le,addVendorModel:G,removeVendorModel:h,removeVendor:r,toggleVendorKeyReveal:A,toggleVendorEdit:U,autoEvaluateConfig:E,aiLoading:d,aiEvalStage:K,aiEvalElapsed:oe,aiEvalError:Q,showBatchEvaluate:P,batchStocks:w,batchRunning:R,batchTotal:ie,batchCompleted:ye,batchCurrent:ve,batchStatuses:ze,batchResults:Ie,batchEvalErrors:Pe,aiConfig:qe,selectedPreset:te,providerInfo:we,aiPresets:De,applyPreset:ne,onProviderChange:X,fetchPoolSignals:Ne,cancelPoolSignals:Ke,loadLastEvaluation:dt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:p,watch:t}=Vue,{configChanged:f,aiConfig:v,aiLoading:z,feishuConfig:m,currentTheme:c,changeTheme:_,autoEvaluateConfig:n,currentUser:S,strategyFilter:l,applyTheme:b,dashboardData:g,lastRefreshTime:C,saveAiModels:D}=a,x=e(!1),o=e(!1),i=e(null),u=e(null),F=e(null),W=e(null),Y=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),J=e("disconnected"),Z=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),N=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),M=e(!1),A=e(null),U=e(null),ae=e("pending"),$=e("..."),se=e(!1),O=e({api_limit:600}),H=e(!1),L=e(!1);async function k(){try{const X=await(await fetch("/api/system/rate-limit")).json();X.success&&(O.value=X.data)}catch(ne){console.warn("loadRateLimit failed:",ne)}}async function T(){L.value=!0;try{const X=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O.value)})).json();X.success?(H.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(X.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{L.value=!1}}t(()=>[v.value.provider,v.value.apiKey,v.value.endpoint,v.value.model],()=>{f.value=!0},{deep:!0});async function le(){x.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(v.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)})).json()).success?(f.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ne){localStorage.setItem("quant_ai_config",JSON.stringify(v.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ne)}finally{x.value=!1}}async function G(){z.value=!0;try{const X=await(await fetch("/api/ai/test")).json();X.success?ElementPlus.ElMessage.success(X.message||"API连接正常"):ElementPlus.ElMessage.error(X.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{z.value=!1}}function h(){const ne={ai:v.value,feishu:m.value,theme:c.value,export_time:new Date().toISOString()},X=new Blob([JSON.stringify(ne,null,2)],{type:"application/json"}),pe=URL.createObjectURL(X),Ee=document.createElement("a");Ee.href=pe,Ee.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ee.click(),URL.revokeObjectURL(pe),ElementPlus.ElMessage.success("配置已导出")}function r(ne){const X=ne.target.files[0];if(!X)return;const pe=new FileReader;pe.onload=async Ee=>{try{const Ne=JSON.parse(Ee.target.result);Ne.ai&&(v.value={...v.value,...Ne.ai},await le()),Ne.feishu&&(Object.assign(m.value,Ne.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ne.feishu)})),Ne.theme&&(c.value=Ne.theme,_(Ne.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},pe.readAsText(X),ne.target.value=""}async function E(){x.value=!0;const ne=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:Y.value,feishu:m.value,ai:v.value,rate_limit:O.value,auto_evaluate:n.value,theme:c.value}})}).then(Ne=>["userConfig",Ne.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y.value)}).then(Ne=>["tushare",Ne.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:Z.value})}).then(Ne=>["datasource",Ne.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)}).then(Ne=>["feishu",Ne.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)}).then(Ne=>["ai",Ne.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O.value)}).then(Ne=>["rateLimit",Ne.ok]),D().then(()=>["aiModels",!0],()=>["aiModels",!1])],X=await Promise.allSettled(ne),pe=X.filter(Ne=>Ne.status==="fulfilled"&&Ne.value[1]).length,Ee=X.filter(Ne=>Ne.status==="rejected"||Ne.status==="fulfilled"&&!Ne.value[1]).length;H.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(l.value.selected)),localStorage.setItem("quant_strategy_filter_mode",l.value.mode),S.value&&fetch(`/api/users/${S.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:c.value})}).catch(()=>{}),o.value=!1,i.value=new Date().toLocaleString("zh-CN"),x.value=!1,Ee>0&&console.error(`[saveAllConfig] ${pe}/${pe+Ee} 项保存成功，${Ee} 项失败`)}async function d(){try{const X=await(await fetch("/api/user_config/config")).json();if(X.success&&X.config){const pe=X.config;pe.tushare&&(Y.value={...Y.value,...pe.tushare}),pe.feishu&&(m.value={...m.value,...pe.feishu}),pe.ai&&(v.value={...v.value,...pe.ai}),pe.rate_limit&&(O.value={...O.value,...pe.rate_limit}),pe.auto_evaluate&&(n.value={...n.value,...pe.auto_evaluate}),pe.theme&&!localStorage.getItem("quant_theme")&&b(pe.theme)}o.value=!1,H.value=!1}catch(ne){console.error("[resetAllConfig] 重新加载配置失败:",ne),o.value=!1}}async function K(){J.value="testing";try{const X=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(J.value=X.success?"connected":"disconnected",X.success){const pe=X.data_count?` (获取到 ${X.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+pe)}else ElementPlus.ElMessage.error(X.message||"连接失败")}catch{J.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function oe(){try{const X=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();J.value=X.success?"connected":"disconnected"}catch{J.value="disconnected"}}async function Q(){var ne;M.value=!0;try{const pe=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();pe.success?(A.value=parseInt(((ne=pe.message.match(/\d+/))==null?void 0:ne[0])||"0"),ElementPlus.ElMessage.success(pe.message)):ElementPlus.ElMessage.error(pe.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{M.value=!1}}async function P(){try{const X=await(await fetch("/api/market/tushare/config")).json();X.success&&X.config&&(Y.value={...Y.value,...X.config})}catch(ne){console.warn("loadTushareConfig failed:",ne)}}function w(ne){if(!ne)return"";const X=String(ne),pe=X.length;if(pe<=4)return X[0]+"*".repeat(pe-1);const Ee=pe<=8?2:4;return X.slice(0,Ee)+"*".repeat(pe-Ee-Ee)+X.slice(-Ee)}async function R(ne){let X;try{X=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ee=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:X,target:ne})})).json();if(Ee.success)return Ee.secret;ElementPlus.ElMessage.error(Ee.message||"查看失败")}catch(pe){ElementPlus.ElMessage.error("查看失败: "+pe.message)}return null}async function ie(ne){const X=Z.value[ne];if(!X)return;if(X._revealed){X._revealed=!1,X._masked=w(X.token);return}const pe=await R(ne);pe!==null&&(X.token=pe,X._revealed=!0)}async function ye(ne){const X=Z.value[ne];if(X){if(X._editing){X._editing=!1,X._revealed=!1,X.token&&(X._masked=w(X.token));return}X._editing=!0;try{const pe=await R(ne);if(pe===null){X._editing=!1;return}X.token=pe,X._revealed=!0}catch(pe){X._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+pe.message)}}}async function ve(){try{const X=await(await fetch("/api/market/datasource/config")).json();if(X.success&&X.config&&X.config.sources){const pe=X.config.sources,Ee=Ne=>{const Ke={...Z.value[Ne],...pe[Ne]||{}};return Ke._editing=!1,Ke._revealed=!1,Ke._masked=Ke.token||"",Ke.token="",Ke};Z.value={sxsc_tushare:Ee("sxsc_tushare"),tushare:Ee("tushare"),akshare:{...Z.value.akshare,...pe.akshare||{}}}}try{const Ee=await(await fetch("/api/market/datasource/status")).json();if(Ee.success&&Ee.status)for(const[Ne,Ke]of Object.entries(Ee.status))N.value[Ne]=Ke.connected?"connected":"disconnected"}catch{}}catch(ne){console.warn("loadDatasourceConfig failed:",ne)}}async function ze(){try{const ne={};for(const[X,pe]of Object.entries(Z.value)){const{_revealed:Ee,_masked:Ne,_editing:Ke,...rt}=pe;!Ke&&X!=="akshare"&&(rt.token=""),ne[X]=rt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ne})}),o.value=!0}catch(ne){console.warn("saveDatasourceConfig failed:",ne)}}async function Ie(ne){N.value[ne]="testing";try{const X=Z.value[ne];X&&X._editing&&await ze();const Ee=await(await fetch(`/api/market/datasource/test/${ne}`,{method:"POST"})).json();N.value[ne]=Ee.success?"connected":"disconnected",Ee.success?ElementPlus.ElMessage.success(`${ne} 连接成功`):ElementPlus.ElMessage.error(`${ne}: ${Ee.message}`)}catch{N.value[ne]="disconnected",ElementPlus.ElMessage.error(`${ne} 连接失败`)}}async function Pe(){try{const X=await(await fetch("/api/feishu/config")).json();X&&typeof X=="object"&&(m.value={...m.value,...X},u.value=JSON.parse(JSON.stringify(m.value)))}catch(ne){console.warn("loadFeishuConfig failed:",ne)}}async function qe(){try{const X=await(await fetch("/api/ai/config")).json();if(X.success&&X.data)v.value={...v.value,...X.data};else{const pe=localStorage.getItem("quant_ai_config");pe&&(v.value=JSON.parse(pe))}}catch{const X=localStorage.getItem("quant_ai_config");X&&(v.value=JSON.parse(X))}}async function te(){try{const X=await(await fetch("/api/user_config/config")).json();if(X.success&&X.config){const pe=X.config;pe.tushare&&(Y.value={...Y.value,...pe.tushare}),pe.datasource&&pe.datasource.sources&&(Z.value={sxsc_tushare:{...Z.value.sxsc_tushare,...pe.datasource.sources.sxsc_tushare||{}},tushare:{...Z.value.tushare,...pe.datasource.sources.tushare||{}},akshare:{...Z.value.akshare,...pe.datasource.sources.akshare||{}}}),pe.feishu&&(m.value={...m.value,...pe.feishu},u.value=JSON.parse(JSON.stringify(m.value))),pe.ai&&(v.value={...v.value,...pe.ai}),pe.rate_limit&&(O.value={...O.value,...pe.rate_limit}),pe.theme&&!localStorage.getItem("quant_theme")&&b(pe.theme),pe.auto_evaluate&&(n.value={...n.value,...pe.auto_evaluate})}}catch(ne){console.warn("加载用户配置失败，使用本地缓存",ne)}}async function we(){var ne,X,pe,Ee;try{const Ke=await(await fetch("/api/dashboard")).json(),rt=Ke.success?Ke.data:Ke;A.value=((ne=rt==null?void 0:rt.stats)==null?void 0:ne.total_stocks_covered)||null;const Qe=await(await fetch("/api/dates")).json();U.value=((X=Qe==null?void 0:Qe.data)==null?void 0:X.total)||((Ee=(pe=Qe==null?void 0:Qe.data)==null?void 0:pe.dates)==null?void 0:Ee.length)||null;const ge=await(await fetch("/api/ai/history")).json();ae.value="ok"}catch{ae.value="pending"}}async function De(){try{const X=await(await fetch("/api/dashboard")).json();g.value=X.success?X.data:X,C.value=Date.now()}catch(ne){console.error("加载总览数据失败",ne)}}return{configSaving:x,configChanged:f,globalConfigDirty:o,lastSavedTime:i,feishuConfigOriginal:u,aiConfigOriginal:F,tushareConfigOriginal:W,tushareConfig:Y,tushareStatus:J,datasourceConfig:Z,datasourceStatus:N,syncingData:M,stockCount:A,tradeDateCount:U,aiStatus:ae,appVersion:$,showImportDialog:se,rateLimitConfig:O,rateLimitDirty:H,rateLimitSaving:L,loadRateLimit:k,saveRateLimit:T,saveAiConfig:le,testAiApi:G,exportConfig:h,importConfig:r,saveAllConfig:E,resetAllConfig:d,testTushareConnection:K,checkTushareConnection:oe,syncStockData:Q,loadTushareConfig:P,loadDatasourceConfig:ve,saveDatasourceConfig:ze,testDatasource:Ie,toggleDatasourceKeyReveal:ie,toggleDatasourceEdit:ye,loadFeishuConfig:Pe,loadAiConfig:qe,loadUserConfig:te,loadSystemStatus:we,loadDashboardData:De}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:p}=Vue,{currentUser:t,applyTheme:f,allMenuDefs:v,loadGroupConfig:z}=a,m=e([]),c=e(""),_=e(""),n=e("users"),S=e({}),l=e({}),b=p(()=>{let te=m.value;if(_.value&&(te=te.filter(De=>(De.group||De.role)===_.value)),!c.value)return te;const we=c.value.toLowerCase();return te.filter(De=>De.username.toLowerCase().includes(we))});function g(te){S.value={...S.value,[te]:!S.value[te]}}async function C(te,we){try{const ne=await(await fetch("/api/groups/"+we+"/members/"+te,{method:"DELETE"})).json();ne.success?(await ye(),await R()):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function D(te){const we=l.value[te];if(we)try{const ne=await(await fetch("/api/groups/"+te+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:we})})).json();ne.success?(await ye(),await R(),l.value={...l.value,[te]:""}):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function x(te,we){try{const ne=await(await fetch("/api/users/"+te.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:we})})).json();ne.success?await ye():ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const o=e(!1),i=e(null),u=e({username:"",password:"",role:"user",theme:"tech-blue"}),F=e(!1),W=e(null),Y=e(!1),J=e(!1),Z=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),N=e({}),M=e(!1),A=e({group_id:"",name:"",description:""}),U=e(!1),ae=e([]),$=e(""),se=e(""),O=e({});function H(te){O.value={...O.value,[te]:!O.value[te]}}function L(te){return!m.value||!m.value.length?0:m.value.filter(we=>(we.group||we.role)===te).length}function k(te){const we=(te==null?void 0:te.visible_menus)||{};return Object.values(we).filter(Boolean).length}const T=p(()=>Object.keys(w.value).length);async function le(te){se.value=te,J.value=!0,await G(te)}async function G(te){try{const De=await(await fetch("/api/groups/"+te+"/members")).json();De.success&&(ae.value=De.members||[])}catch(we){ae.value=[],console.error("[loadGroupMembers]",we)}}async function h(){if(!(!$.value||!se.value)){U.value=!0;try{const we=await(await fetch("/api/groups/"+se.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:$.value})})).json();we.success?(await G(se.value),await ye(),$.value=""):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{U.value=!1}}}async function r(te){try{const De=await(await fetch("/api/groups/"+se.value+"/members/"+te,{method:"DELETE"})).json();De.success?(await G(se.value),await ye()):ElementPlus.ElMessage.error(De.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const E=p(()=>{if(!m.value)return[];const te=new Set(ae.value.map(we=>we.username));return m.value.filter(we=>we.username!=="admin"&&we.username!=="guest"&&!te.has(we.username))});function d(te){const we=Z.value.visible_menus[te],De=v.find(ne=>ne.key===te);if(De)if(we){const ne=N.value[te]||{};De.subPages.forEach(X=>{const pe=te+"."+X;Z.value.visible_sub_pages[pe]=ne[X]!==void 0?ne[X]:!0})}else{const ne={};De.subPages.forEach(X=>{const pe=te+"."+X;ne[X]=Z.value.visible_sub_pages[pe],Z.value.visible_sub_pages[pe]=!1}),N.value[te]=ne}}function K(te){W.value=te;const we=w.value[te]||{};Z.value={name:we.name||te,description:we.description||"",visible_menus:{...we.visible_menus||{}},visible_sub_pages:{...we.visible_sub_pages||{}}},N.value={},v.forEach(De=>{const ne={};De.subPages.forEach(X=>{ne[X]=Z.value.visible_sub_pages[De.key+"."+X]}),N.value[De.key]=ne}),Y.value=!0}async function oe(){U.value=!0;try{const we=await(await fetch("/api/groups/"+W.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z.value)})).json();we.success?(Y.value=!1,W.value=null,await R(),await z()):ElementPlus.ElMessage.error(we.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{U.value=!1}}async function Q(te){var we;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((we=w.value[te])==null?void 0:we.name)||te)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const X=await(await fetch("/api/groups/"+te,{method:"DELETE"})).json();X.success?await R():ElementPlus.ElMessage.error(X.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function P(){if(A.value.group_id){U.value=!0;try{const we=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A.value)})).json();we.success?(M.value=!1,A.value={group_id:"",name:"",description:""},await R()):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{U.value=!1}}}const w=e({});async function R(){try{if(!localStorage.getItem("quant_token"))return;const we=await fetch("/api/groups");if(we.ok){const De=await we.json();w.value=De.groups||{}}}catch(te){console.warn("loadAllGroups:",te)}}function ie(te){var we;return((we=w.value[te])==null?void 0:we.name)||te||"--"}async function ye(){try{if(!localStorage.getItem("quant_token")){m.value=[];return}const we=await fetch("/api/users");if(we.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const De=await we.json();m.value=De.users||[]}catch(te){m.value=[],console.error("[loadUsers] error:",te)}}function ve(te){i.value=te,u.value={username:te.username,password:"",role:te.role,theme:te.theme||"tech-blue",group:te.group||te.role},o.value=!0}async function ze(){if(u.value.username){F.value=!0;try{const te=i.value?"PUT":"POST",we=i.value?`/api/users/${u.value.username}`:"/api/users",ne=await(await fetch(we,{method:te,headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)})).json();if(ne.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&u.value.username===t.value.username){const X=u.value.theme;X&&X!==t.value.theme&&(t.value.theme=X,localStorage.setItem("quant_user",JSON.stringify(t.value)),f(X))}o.value=!1,i.value=null,await ye()}else ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{F.value=!1}}}async function Ie(te){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${te}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await ye())}catch(we){console.error("[deleteUser]",we)}}async function Pe(te){try{const De=await(await fetch(`/api/users/${te.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:te.enabled})})).json();De.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(De.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function qe(te){try{const{value:we}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${te.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(we){const ne=await(await fetch(`/api/users/${te.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:we})})).json();ne.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ne.message||"重置失败")}}catch{}}return{userList:m,userSearch:c,groupFilter:_,userPageTab:n,expandedGroups:S,addMemberGroupMap:l,filteredUsers:b,toggleGroupExpand:g,removeMemberFromGroupInline:C,addMemberToGroupInline:D,changeUserGroup:x,showAddUser:o,editingUser:i,userForm:u,savingUser:F,editingGroup:W,menuConfigDialog:Y,memberDialog:J,groupEditForm:Z,subPageCache:N,showAddGroup:M,addGroupForm:A,savingGroup:U,groupMembers:ae,addMemberUsername:$,selectedMemberGroup:se,subPageSectionExpanded:O,toggleSubPageSection:H,getGroupMemberCount:L,getMenuEnabledCount:k,groupCount:T,openMemberManager:le,loadGroupMembers:G,addMemberToGroup:h,removeMemberFromGroup:r,availableUsersForGroup:E,onParentToggle:d,openMenuConfig:K,saveMenuConfig:oe,deleteGroupConfig:Q,createGroup:P,allGroups:w,getGroupName:ie,loadAllGroups:R,loadUsers:ye,editUser:ve,saveUser:ze,deleteUser:Ie,toggleUserEnabled:Pe,resetUserPassword:qe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:p}=Vue,{stockKlineLoaded:t,stockDetailVisible:f,stockDetailTab:v,stockDetail:z,disposeStockKline:m}=a,c=e([]),_=e(!1),n=e(!1),S=e("date"),l=e([]),b=e([]),g=e([]),C=e([]),D=p(()=>{var r,E;const h=[];for(const d of c.value){if(!d||d.id==null)continue;const K=d.stock_name||d.stock_code||"",oe=Array.isArray(d.messages)?d.messages:[];h.push({id:d.id,stock_code:d.stock_code,stock_name:K,first_msg:d.first_msg||((E=(r=oe[0])==null?void 0:r.content)==null?void 0:E.substring(0,50))||"",msg_count:d.msg_count||oe.length||0,created_at:d.created_at,date:(d.created_at||"").substring(0,10),month:(d.created_at||"").substring(0,7),messages:oe})}return h}),x=p(()=>{const h={};for(const E of D.value){const d=E.date||"未知";h[d]||(h[d]=[]),h[d].push(E)}const r={};return Object.keys(h).sort((E,d)=>d.localeCompare(E)).forEach(E=>r[E]=h[E]),r}),o=p(()=>{const h={};for(const E of D.value){const d=E.month||"未知";h[d]||(h[d]=[]),h[d].push(E)}const r={};return Object.keys(h).sort((E,d)=>d.localeCompare(E)).forEach(E=>r[E]=h[E]),r}),i=p(()=>{const h={};for(const r of D.value){const E=`${r.stock_name}(${r.stock_code})`;h[E]||(h[E]=[]),h[E].push(r)}return h});function u(h){const r=l.value.indexOf(h);r>=0?l.value.splice(r,1):l.value.push(h)}function F(h){const r=x.value[h]||[];if(r.every(d=>l.value.includes(d.id)))l.value=l.value.filter(d=>!r.some(K=>K.id===d));else for(const d of r)l.value.includes(d.id)||l.value.push(d.id)}function W(h){const r=o.value[h]||[];if(r.every(d=>l.value.includes(d.id)))l.value=l.value.filter(d=>!r.some(K=>K.id===d));else for(const d of r)l.value.includes(d.id)||l.value.push(d.id)}function Y(h){const r=i.value[h]||[];if(r.every(d=>l.value.includes(d.id)))l.value=l.value.filter(d=>!r.some(K=>K.id===d));else for(const d of r)l.value.includes(d.id)||l.value.push(d.id)}function J(h){const r=b.value.indexOf(h);r>=0?b.value.splice(r,1):b.value.push(h)}function Z(h){const r=g.value.indexOf(h);r>=0?g.value.splice(r,1):g.value.push(h)}function N(h){const r=C.value.indexOf(h);r>=0?C.value.splice(r,1):C.value.push(h)}function M(){l.value.length===D.value.length?l.value=[]:l.value=D.value.map(h=>h.id)}async function A(){if(l.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${l.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const h of[...l.value])await le(h);l.value=[]}}const U={};async function ae(h){z.value={stock:h.stock_code,name:h.stock_name},f.value=!0,v.value="chat",t.value=!1,m(),O.value=!0,H.value="",se.value=[];try{let r=U[h.id];if(!r){const E=await fetch("/api/ai/chat/history/"+h.id);if(!E.ok)throw new Error("load history failed");r=(await E.json()).messages||[],U[h.id]=r}se.value=r.map(E=>({role:E.role,content:E.content}))}catch{H.value="历史消息加载失败，请重试"}finally{O.value=!1}}const $=e(""),se=e([]),O=e(!1),H=e("");async function L(){var E;const h=$.value.trim();if(!h||O.value)return;H.value="",se.value.push({role:"user",content:h}),$.value="",O.value=!0;const r=se.value.length;se.value.push({role:"assistant",content:""});try{const oe=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((E=z.value)==null?void 0:E.stock)||"",message:h})})).body.getReader(),Q=new TextDecoder;let P="";for(;;){const{done:w,value:R}=await oe.read();if(w)break;P+=Q.decode(R,{stream:!0});const ie=P.split(`
`);P=ie.pop()||"";for(const ye of ie)if(ye.startsWith("data: "))try{const ve=JSON.parse(ye.slice(6));ve.token?se.value[r].content+=ve.token:ve.done?console.log("Stream done:",ve.session_id):ve.error&&(H.value=ve.error)}catch(ve){console.warn("SSE parse error:",ve)}}}catch(d){se.value[r].content||(se.value[r].content="网络错误: "+d.message)}O.value=!1}async function k(h){var E;H.value="",O.value=!0;const r={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};se.value.push({role:"user",content:r[h]||r.comprehensive});try{const K=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((E=z.value)==null?void 0:E.stock)||"",mode:h})});if(K.ok){const oe=await K.json();se.value.push({role:"assistant",content:oe.reply||"无回复"})}}catch(d){H.value="网络错误: "+d.message}O.value=!1}async function T(){_.value=!0,n.value=!1;try{const h=await fetch("/api/ai/chat/history?view=date");if(h.ok){const r=await h.json(),E=[];for(const d of r)for(const K of d.items||[])E.push(K);c.value=E}else n.value=!0}catch(h){console.error(h),n.value=!0}finally{_.value=!1}}async function le(h){try{await fetch("/api/ai/chat/history/"+h,{method:"DELETE"}),c.value=c.value.filter(r=>r.id!==h)}catch(r){console.error("deleteChatSession:",r)}}function G(h){if(!h)return"";const r=String(h).split(`
`),E=[],d=[];let K=0;for(;K<r.length;){if(/^\s*\|.*\|\s*$/.test(r[K])){let Q=K;const P=[];for(;Q<r.length&&/^\s*\|.*\|\s*$/.test(r[Q]);)P.push(r[Q]),Q++;const w=ye=>ye.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(ve=>ve.trim()),R=P.map(w);if(R.length>1&&R[1].every(ye=>/^:?-{3,}:?$/.test(ye))){const ye=Math.max(...R.map(Pe=>Pe.length)),ve=R[0].slice(0,ye),ze=R.slice(2);let Ie="<table>";ze.length?(Ie+="<thead><tr>"+ve.map(Pe=>"<th>"+Pe+"</th>").join("")+"</tr></thead>",Ie+="<tbody>"+ze.map(Pe=>"<tr>"+Pe.slice(0,ye).map(qe=>"<td>"+qe+"</td>").join("")+"</tr>").join("")+"</tbody>"):Ie+="<tbody><tr>"+ve.map(Pe=>"<td>"+Pe+"</td>").join("")+"</tr></tbody>",Ie+="</table>",E.push(Ie),d.push("\0T"+(E.length-1)+"\0"),K=Q;continue}for(;K<Q;)d.push(r[K]),K++;continue}d.push(r[K]),K++}let oe=d.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return E.forEach((Q,P)=>{oe=oe.split("\0T"+P+"\0").join(Q)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(oe=window.__quantModules.core.sanitizeHtml(oe)),oe}return{chatSessions:c,chatHistoryView:S,selectedChatIds:l,expandedChatDates:b,expandedChatMonths:g,expandedChatStocks:C,chatHistoryLoading:_,chatHistoryError:n,allChatSessionsFlat:D,chatGroupedByDate:x,chatGroupedByMonth:o,chatGroupedByStock:i,toggleSelectChat:u,toggleSelectChatDate:F,toggleSelectChatMonth:W,toggleSelectChatStock:Y,toggleChatDateExpand:J,toggleChatMonthExpand:Z,toggleChatStockExpand:N,selectAllChatSessions:M,deleteSelectedChatSessions:A,viewChatSession:ae,loadChatHistory:T,deleteChatSession:le,renderMarkdown:G,stockChatInput:$,stockChatMessages:se,stockChatLoading:O,stockChatError:H,askStockSend:L,askStockQuick:k}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:p,watch:t}=Vue,{consensus:f,currentPage:v,currentSubPage:z,dashboardData:m,searchKeyword:c,statusFilter:_,strategyFilter:n,strategyFilterCounts:S}=a;function l(N){const M=n.value.selected;if(!M||M.length===0)return N;const A=n.value.mode;return N.filter(U=>{const ae=U.strategy_names||U.strategies||[];return A==="union"?M.some($=>ae.includes($)):M.every($=>ae.includes($))})}const b=p(()=>{const N=l(f.value||[]);return{all:N.length,newCount:N.filter(M=>M.status==="new").length,current:N.filter(M=>M.status==="current").length,out:N.filter(M=>M.status==="out").length}}),g=p(()=>{let N=f.value||[];if(_.value!=="all"&&(N=N.filter(M=>M.status===_.value)),N=l(N),c.value){const M=c.value.toLowerCase();N=N.filter(A=>A.code.toLowerCase().includes(M)||A.name&&A.name.toLowerCase().includes(M))}return N}),C=p(()=>{const N=f.value||[],M={},A={};for(const U of N)U.code&&U.name&&(A[U.code]=U.name);for(const U of N){const ae=U.strategy_names||U.strategies||[];for(const $ of ae)M[$]||(M[$]={strategy:$,count:0,codes:[],names:[]}),M[$].count++,M[$].codes.includes(U.code)||(M[$].codes.push(U.code),M[$].names.push({code:U.code,name:A[U.code]||U.code}))}return Object.values(M).sort((U,ae)=>ae.count-U.count)}),D=p(()=>{const N=n.value.selected,M=n.value.mode,A={};for(const[U,ae]of Object.entries(S.value)){const $=ae||[];!N||N.length===0?A[U]=$.length:M==="union"?A[U]=$.filter(se=>se.strategies&&N.some(O=>se.strategies.includes(O))).length:A[U]=$.filter(se=>se.strategies&&N.every(O=>se.strategies.includes(O))).length}return A});function x(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(n.value.selected)),localStorage.setItem("quant_strategy_filter_mode",n.value.mode)}const o=p(()=>{const N=(m.value||{}).consensus_rank||[];return l(N)}),i=p(()=>{const N=f.value||S.value.day||[];return l(N).length}),u=p(()=>{const N=(m.value||{}).strategy_counts||[],M=f.value||S.value.day||[];if(M.length===0)return N;const A=l(M),U={};A.forEach($=>{($.strategy_names||$.strategies||[]).forEach(O=>{U[O]=(U[O]||0)+1})});const ae=A.length||1;return N.map($=>{const se=$.strategy_name||$.strategy_id,O=U[se]||0;return{...$,count:O,percentage:Math.round(O/ae*1e3)/10}})}),F=p(()=>{const N=(m.value||{}).pool_changes||{},M=(N.new_count||0)-(N.out_count||0);return M>0?{dir:"up",text:"↑"+M}:M<0?{dir:"down",text:"↓"+Math.abs(M)}:{dir:"flat",text:"→0"}}),W=p(()=>{const N=(m.value||{}).time_coverage||{},M=new Date(N.start_date),A=new Date(N.end_date),U=new Date;if(!M.getTime()||!A.getTime()||U>=A)return 100;if(U<=M)return 0;const ae=A-M,$=U-M;return Math.round($/ae*100)}),Y=e(null),J=p(()=>{if(!Y.value)return"";const N=Math.floor((Date.now()-Y.value)/1e3);return N<60?N+"秒前刷新":N<3600?Math.floor(N/60)+"分钟前刷新":Math.floor(N/3600)+"小时前刷新"});function Z(N){n.value.selected=[N],n.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([N])),localStorage.setItem("quant_strategy_filter_mode","union"),v.value="calendar",z.value="calendar"}return{applyStrategyFilter:l,statusCounts:b,stockPool:g,strategyDistribution:C,strategyPreviewCount:D,saveStrategyFilter:x,filteredConsensusRank:o,currentPoolSize:i,filteredStrategyCounts:u,poolChangeBadge:F,timeBarPercent:W,lastRefreshTime:Y,timeSinceRefresh:J,navigateToStrategyFilter:Z}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function p(f){return a[f]||"var(--text-tertiary)"}function t(f){return e[f]||"var(--bg-hover)"}window.__quantModules.watchlist={create(f){const{ref:v,computed:z,watch:m}=Vue,{currentUser:c,selectedDate:_,stockDetail:n,stockDetailTab:S,stockDetailVisible:l,stockDetailLoading:b,stockKlineLoaded:g,viewCache:C,animateScoreEntrance:D,loadStockKline:x,refreshStockScore:o,disposeStockKline:i,aiHistory:u,aiLoading:F,aiEvalStage:W,aiEvalElapsed:Y,aiEvalError:J,aiResult:Z,loadLastEvaluation:N,autoEvaluateConfig:M,autoEvaluateScope:A,batchStocks:U,batchRunning:ae,batchTotal:$,batchCompleted:se,batchCurrent:O,batchStatuses:H,batchResults:L,batchEvalErrors:k,expandedDates:T,expandedStocks:le,savingConfig:G,selectedHistoryIds:h,selectedWatchlistCodes:r,showAutoEvaluateSettings:E,showBatchEvaluate:d}=f,K=s=>(getComputedStyle(document.documentElement).getPropertyValue(s)||"").trim(),oe=v(""),Q=v("default"),P=v("default"),w=v([]),R=z(()=>new Set(w.value.map(s=>s.code))),ie=v(!1),ye=v(!1),ve=z(()=>{const s=[...w.value];return P.value==="name"?s.sort((V,ee)=>V.name.localeCompare(ee.name,"zh")):P.value==="added"?s.sort((V,ee)=>(ee.added_at||"").localeCompare(V.added_at||"")):P.value==="score"&&s.sort((V,ee)=>{const _e=Ie(V.code);return Ie(ee.code)-_e}),s});function ze(s){const V=u.value.filter(_e=>_e.stock_code===s);if(V.length===0)return null;const ee=V.reduce((_e,Se)=>_e.evaluate_time>Se.evaluate_time?_e:Se);return{score:ee.result.total_score,color:p(ee.result.level),bg:t(ee.result.level)}}function Ie(s){const V=ze(s);return V?V.score:0}function Pe(s){tt(s.code,s.name),ne.value=ne.value.filter(V=>V.code!==s.code),De.value=""}const qe=z(()=>new Set(u.value.map(s=>s.stock_code))),te=v(new Set);function we(s){te.value.add(s)}const De=v(""),ne=v([]),X=v(!1),pe=v({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ee=v(!1),Ne=v(!1),Ke=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};Ke.REALTIME_WS_PATH;const rt=Ke.REALTIME_DEGRADED_TEXT||"数据不可达",dt=Ke.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";Ke.WARN_RISE_SPEED_THRESHOLD!=null&&Ke.WARN_RISE_SPEED_THRESHOLD,Ke.WARN_VOLUME_RATIO_THRESHOLD!=null&&Ke.WARN_VOLUME_RATIO_THRESHOLD;const Qe=Ke.quoteFmt||{price:s=>s==null?"--":Number(s).toFixed(2),pct:s=>s==null?"--":Number(s).toFixed(2)+"%",num:s=>s==null?"--":Number(s).toFixed(2),color:s=>""},Et=3,ge=5e3,be=v({}),Te=v(!1),Re=v("idle");let Ge=null,Xe=null,Ye=0;function ht(s){return Ke.checkQuoteWarning?Ke.checkQuoteWarning(s):null}function xt(s){return ht(be.value[s])}function ft(s){return Qe.color(be.value[s])}function Ze(s){return Qe.price(be.value[s]&&be.value[s].price)}function jt(s){return Qe.pct(be.value[s]&&be.value[s].change_pct)}function Nt(s,V){return Qe.num(be.value[s]&&be.value[s][V])}function yt(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function ut(){if(!Ge||Ge.readyState!==1)return;const s=(w.value||[]).map(V=>V.code);s.length!==0&&Ge.send(JSON.stringify({subscribe:s}))}function Vt(){if(Xe&&(clearTimeout(Xe),Xe=null),Ge){try{Ge.onopen=null,Ge.onmessage=null,Ge.onerror=null,Ge.onclose=null,Ge.close()}catch{}Ge=null}be.value={},Te.value=!1,Re.value="idle"}function q(){const s=yt();if(!s||!Ke.buildRealtimeWsUrl||Re.value==="open"||Re.value==="connecting")return;let V;try{V=Ke.buildRealtimeWsUrl()+"?token="+encodeURIComponent(s)}catch{Re.value="offline",Te.value=!0;return}Re.value="connecting";let ee=null;try{ee=new WebSocket(V)}catch{Re.value="offline",Te.value=!0;return}Ge=ee,ee.onopen=function(){Re.value="open",Ye=0,ut()},ee.onmessage=function(_e){let Se=null;try{Se=JSON.parse(_e.data||"{}")}catch{return}if(!Se||Se.type!=="quotes")return;if(Te.value=!!Se.degraded,Se.degraded||!Array.isArray(Se.data)){be.value={};return}const mt={};Se.data.forEach(function(Je){Je&&Je.code&&(mt[Je.code]=Je)}),be.value=mt},ee.onerror=function(){Re.value="offline",Te.value=!0},ee.onclose=function(){Re.value="offline",Ye<Et?(Ye++,Xe=setTimeout(function(){Re.value!=="open"&&q()},ge*Ye)):Te.value=!0}}m(w,function(){Re.value==="open"&&ut()}),yt()&&setTimeout(q,500);async function de(){if(!n.value)return;F.value=!0,Z.value=null,J.value="",W.value="fetching",Y.value=0;const s=Date.now(),V=setInterval(()=>{F.value&&(Y.value=Math.round((Date.now()-s)/1e3))},500);try{const ee=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n.value.stock,stock_name:n.value.name||n.value.stock,strategy:Q.value})});W.value="calculating";const _e=await ee.json();W.value="analyzing",_e.success?(await nextTick(),Z.value=_e.data,S.value="ai",I()):(J.value=_e.message||"评估失败",ElementPlus.ElMessage.error(J.value))}catch(ee){J.value=ee&&ee.message&&!String(ee.message).includes("Failed to fetch")?ee.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(J.value)}finally{clearInterval(V),F.value=!1,Y.value=0,J.value?W.value="":(W.value="done",setTimeout(()=>{W.value==="done"&&(W.value="")},800))}}const ke=50,xe=v(0),Ae=v(!1),We=z(()=>u.value.length<xe.value);async function I(){ie.value=!0,ye.value=!1;try{if(!localStorage.getItem("quant_token")){u.value=[];return}const V=await fetch(`/api/ai/history?limit=${ke}&offset=0`);if(V.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),c.value=null;return}const ee=await V.json();ee.success?(u.value=ee.data||[],xe.value=ee.total!=null?ee.total:u.value.length):ye.value=!0}catch(s){console.error("[loadAiHistory] error:",s),ye.value=!0}finally{ie.value=!1}}async function re(){if(!(Ae.value||!We.value)){Ae.value=!0;try{const V=await(await fetch(`/api/ai/history?limit=${ke}&offset=${u.value.length}`)).json();if(V.success&&Array.isArray(V.data)){const ee=new Set(u.value.map(Se=>Se.id)),_e=V.data.filter(Se=>!ee.has(Se.id));u.value=u.value.concat(_e),V.total!=null&&(xe.value=V.total)}}catch(s){console.warn("[loadMoreAiHistory] error:",s)}finally{Ae.value=!1}}}async function He(s){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ee=await(await fetch(`/api/ai/history/${s}`,{method:"DELETE"})).json();if(ee.success){ElementPlus.ElMessage.success("删除成功"),I();const _e=h.value.indexOf(s);_e>=0&&h.value.splice(_e,1)}else ElementPlus.ElMessage.error(ee.message||"删除失败")}catch{}}function $e(s){const V=h.value.indexOf(s);V>=0?h.value.splice(V,1):h.value.push(s)}function lt(){h.value=[]}function kt(){r.value=[]}async function Ft(){const s=h.value;if(s.length===0)return;const V=u.value.filter(ee=>s.includes(ee.id)).map(ee=>ee.stock_code);d.value=!0,U.value=[...new Set(V)].join(",")}async function Mt(){const s=h.value;if(s.length===0)return;const V=u.value.filter(Se=>s.includes(Se.id)),ee=[...new Map(V.map(Se=>[Se.stock_code,Se])).values()];let _e=0;for(const Se of ee)R.value.has(Se.stock_code)||(await tt(Se.stock_code,Se.stock_name||Se.stock_code),_e++);_e>0?ElementPlus.ElMessage.success(`已加入 ${_e} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function St(){const s=h.value;if(s.length===0)return;const V=u.value.filter(_e=>s.includes(_e.id)),ee=[...new Map(V.map(_e=>[_e.stock_code,_e])).values()];try{const Se=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ee.map(mt=>({stock_code:mt.stock_code,stock_name:mt.stock_name||""}))})})).json();Se&&Se.success?ElementPlus.ElMessage.success(`已登记 ${Se.count||ee.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Se&&Se.detail||"批量加入组合失败")}catch(_e){console.warn("batchAddToPortfolio failed:",_e),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function ct(){if(r.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${r.value.length} 只股票？`,"提示",{type:"warning"});for(const s of r.value)await Ht(s);r.value=[],ElementPlus.ElMessage.success("已移除")}catch(s){s&&s.message!=="cancel"&&console.warn("batchRemoveWatchlist:",s)}}function Dt(s){const V=r.value.indexOf(s);V>=0?r.value.splice(V,1):r.value.push(s)}function Ot(){h.value.length===u.value.length?h.value=[]:h.value=u.value.map(s=>s.id)}function _t(){r.value.length===w.value.length?r.value=[]:r.value=w.value.map(s=>s.code)}async function Yt(){if(h.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${h.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const V=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:h.value})})).json();V.success?(ElementPlus.ElMessage.success(V.message),h.value=[],I()):ElementPlus.ElMessage.error(V.message||"删除失败")}catch{}}async function vt(){try{const V=await(await fetch("/api/ai/auto-config")).json();V.success&&(M.value=V.data,V.data.evaluate_scope&&(A.value=V.data.evaluate_scope))}catch(s){console.warn("loadAutoEvaluateConfig failed:",s)}}async function bt(){G.value=!0;try{M.value.evaluate_scope=A.value;const V=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M.value)})).json();V.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),E.value=!1):ElementPlus.ElMessage.error(V.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{G.value=!1}}const Bt=v(!1);async function gt(){Bt.value=!0;try{const V=await(await fetch("/api/watchlist")).json();V.success&&(w.value=V.stocks||[])}catch(s){console.warn("loadWatchlist failed:",s)}finally{Bt.value=!1}}async function tt(s,V){try{const _e=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s,name:V})})).json();if(_e.success)return _e.existed||w.value.push({code:s,name:V,added_at:new Date().toISOString()}),!0}catch(ee){console.warn("addToWatchlist failed:",ee)}return!1}async function Ht(s){try{await fetch(`/api/watchlist/${encodeURIComponent(s)}`,{method:"DELETE"}),w.value=w.value.filter(V=>V.code!==s)}catch(V){console.warn("removeFromWatchlist failed:",V)}}async function aa(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),w.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(s){console.warn("clearWatchlist failed:",s)}}async function da(s,V){R.value.has(s)?(await Ht(s),ElementPlus.ElMessage.info("已移除自选")):await tt(s,V)&&ElementPlus.ElMessage.success("已加入自选")}async function la(s,V){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(s,V||"");const ee=new Date().toISOString().split("T")[0],_e=_.value||ee;S.value="kline",Z.value=null,J.value="",i("stockKlineChart"),n.value=null,b.value=!0,g.value=!1,l.value=!0,nextTick(()=>D());try{const Se=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${_e}`);n.value=await Se.json()}catch{n.value={stock:s,name:V,total_days:0}}finally{b.value=!1}await nextTick(),await x("daily"),o(),N(s)}const Xt=v(!1);async function ua(){var s;if(w.value.length!==0){Xt.value=!0;try{const ee=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ee.success&&ee.loaded>0?(((s=ee.details)==null?void 0:s.loaded)||[]).forEach(_e=>te.value.add(_e.code)):ee.loaded===0&&ee.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(V){console.error("预加载K线失败:",V)}finally{Xt.value=!1}}}async function va(s,V){F.value=!0,Z.value=null,J.value="",W.value="fetching",g.value=!1,i();const ee=new Date().toISOString().split("T")[0],_e=_.value||ee;try{const Se=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${_e}`);n.value=await Se.json()}catch{n.value={stock:s,name:V,total_days:0}}S.value="ai",l.value=!0,await nextTick();try{const mt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s,stock_name:V})})).json();mt.success?(Z.value=mt.data,I()):(J.value=mt.message||"评估失败",ElementPlus.ElMessage.error(J.value))}catch{J.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(J.value)}finally{F.value=!1,W.value=""}}async function Qt(){w.value.length!==0&&(d.value=!0,U.value=w.value.map(s=>s.code).join(","))}async function j(){r.value.length!==0&&(d.value=!0,U.value=r.value.join(","))}async function he(){if(!De.value.trim()){ne.value=[];return}X.value=!0;try{const V=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(De.value)}`)).json();ne.value=(V.results||[]).filter(ee=>!R.value.has(ee.code))}catch(s){console.warn("searchStockForWatchlist failed:",s)}finally{X.value=!1}}async function Oe(){try{const V=await(await fetch("/api/data-refresh/config")).json();pe.value=V}catch(s){console.error("加载数据刷新配置失败:",s)}}async function Me(){Ne.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(pe.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ne.value=!1}}async function st(){var s;Ee.value=!0;try{const ee=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ee.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((s=ee.parser_stats)==null?void 0:s.dates_count)||0}交易日`),C.clear(),await Oe()):ElementPlus.ElMessage.error(ee.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Ee.value=!1}}const et=v(!1);async function Rt(){et.value=!0;try{const V=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(V.success){const ee=V.result||{},_e=V.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ee.pulled||0}/${ee.total||0}, 财务 ${_e.pulled||0}/${_e.total||0}`),C.clear(),await Oe()}else ElementPlus.ElMessage.error(V.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{et.value=!1}}const Kt=z(()=>{const s={};for(const V of u.value){const ee=(V.evaluate_time||"").split("T")[0];s[ee]||(s[ee]=[]),s[ee].push(V)}for(const V in s)s[V].sort((ee,_e)=>_e.evaluate_time.localeCompare(ee.evaluate_time));return s}),Tt=z(()=>{const s={};for(const V of u.value){const ee=V.stock_code;s[ee]||(s[ee]=[]),s[ee].push(V)}for(const V in s)s[V].sort((ee,_e)=>_e.evaluate_time.localeCompare(ee.evaluate_time));return s}),ma=z(()=>{const s={};for(const V of u.value){const ee=(V.evaluate_time||"").split("T")[0].slice(0,7);s[ee]||(s[ee]=[]),s[ee].push(V)}for(const V in s)s[V].sort((ee,_e)=>_e.evaluate_time.localeCompare(ee.evaluate_time));return s}),sa=z(()=>Object.keys(Tt.value).length),ya=z(()=>{const s=u.value.length;return s===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(ee=>{const _e=u.value.filter(Se=>Se.result.total_score>=ee.min&&Se.result.total_score<=ee.max).length;return{...ee,count:_e,pct:Math.round(_e/s*100)}})});async function Zt(){if(!oe.value)return;const s=w.value.find(V=>V.code===oe.value);if(s){F.value=!0,Z.value=null,J.value="",W.value="fetching";try{n.value={stock:s.code,name:s.name,total_days:0},l.value=!0,S.value="ai",await nextTick();const ee=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s.code,stock_name:s.name,strategy:Q.value})})).json();ee.success?(Z.value=ee.data,I(),oe.value=""):(J.value=ee.message||"评估失败",ElementPlus.ElMessage.error(J.value))}catch{J.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(J.value)}finally{F.value=!1,W.value=""}}}function Da(s){const V=T.value.indexOf(s);V>=0?T.value.splice(V,1):T.value.push(s)}function pa(s){const ee=(Kt.value[s]||[]).map(Se=>Se.id);ee.every(Se=>h.value.includes(Se))?h.value=h.value.filter(Se=>!ee.includes(Se)):ee.forEach(Se=>{h.value.includes(Se)||h.value.push(Se)})}function Ra(s){const ee=(ma.value[s]||[]).map(Se=>Se.id);ee.every(Se=>h.value.includes(Se))?h.value=h.value.filter(Se=>!ee.includes(Se)):ee.forEach(Se=>{h.value.includes(Se)||h.value.push(Se)})}function za(s){const V=le.value.indexOf(s);V>=0?le.value.splice(V,1):le.value.push(s)}function fa(s){const ee=(Tt.value[s]||[]).map(Se=>Se.id);ee.every(Se=>h.value.includes(Se))?h.value=h.value.filter(Se=>!ee.includes(Se)):ee.forEach(Se=>{h.value.includes(Se)||h.value.push(Se)})}const Wt={},ba={};function Jt(s,V,ee){if(!s||(ee&&(ba[V]={el:s,records:ee}),Wt[V]===s))return;const _e=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Se=()=>{Object.keys(Wt).forEach(Be=>{if(Wt[Be]&&Wt[Be]!==s){try{Wt[Be].dispose()}catch{}delete Wt[Be]}});const mt=[...ee].sort((Be,Pt)=>Be.evaluate_time.localeCompare(Pt.evaluate_time)),Je=mt.map(Be=>(Be.evaluate_time||"").split("T")[0]),pt=mt.map(Be=>{var Pt;return((Pt=Be.result)==null?void 0:Pt.total_score)??null}),ea=mt.map(Be=>{var Pt;return((Pt=Be.result)==null?void 0:Pt.level)??""}),Ct={primary:K("--qc-primary-600")||"#b8922a",textPrimary:K("--text-primary")||"#1f2937",textSecondary:K("--text-secondary")||"#6b7280",border:K("--border-light")||"#e5e7eb",up:K("--color-success")||"#67c23a",down:K("--color-danger")||"#f56c6c"},ia=[];for(let Be=1;Be<pt.length;Be++)pt[Be]!=null&&pt[Be-1]!=null&&Math.abs(pt[Be]-pt[Be-1])>=15&&ia.push({name:"大幅变化",coord:[Je[Be],pt[Be]],value:(pt[Be]-pt[Be-1]>0?"↑":"↓")+Math.abs(pt[Be]-pt[Be-1]),symbol:"pin",symbolSize:32,itemStyle:{color:pt[Be]-pt[Be-1]>0?Ct.up:Ct.down}});const ta=echarts.init(s);ta.setOption({tooltip:{trigger:"axis",backgroundColor:K("--bg-card")||"#ffffff",borderColor:Ct.border,textStyle:{color:Ct.textPrimary},formatter:function(Be){var _a;const Pt=(_a=Be[0])==null?void 0:_a.dataIndex,qa=Pt!=null?ea[Pt]:"";return Je[Pt]+"<br/>得分: "+pt[Pt]+(qa?" ("+qa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Je,axisLabel:{fontSize:10,rotate:30,color:Ct.textSecondary},axisLine:{lineStyle:{color:Ct.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Ct.textSecondary},splitLine:{lineStyle:{color:Ct.border}}},series:[{data:pt,type:"line",smooth:!0,lineStyle:{color:Ct.primary,width:2},itemStyle:{color:Ct.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:K("--primary-rgb")?"rgba("+K("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:K("--primary-rgb")?"rgba("+K("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:ia.length>0?{data:ia}:void 0}]}),Wt[V]=ta};_e?_e().then(Se).catch(()=>{}):Se()}function wa(){Object.keys(ba).forEach(s=>{const V=ba[s];if(!(!V||!V.el)){if(Wt[s]){try{Wt[s].dispose()}catch{}delete Wt[s]}Jt(V.el,s,V.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(wa));async function ka(s){Z.value=s,g.value=!1,i();try{const V=await fetch(`/api/calendar/stock/${s.stock_code}?date=${_.value}`);n.value=await V.json()}catch{n.value={stock:s.stock_code,name:s.stock_name||s.stock_code,total_days:0,history:[]}}l.value=!0,S.value="ai"}async function y(){if(!U.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const s=U.value.split(/[,，\s]+/).filter(Je=>Je.trim());if(s.length===0)return;ae.value=!0,$.value=s.length,se.value=0,O.value="",H.value={},L.value={},k.value={},s.forEach(Je=>{H.value[Je]="pending",L.value[Je]=null});const V={"Content-Type":"application/json"};let ee=0,_e=0,Se=!1;try{const Je=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:V,body:JSON.stringify({stock_codes:s})});if(Je.ok&&Je.body){Se=!0;const pt=Je.body.getReader(),ea=new TextDecoder("utf-8");let Ct="",ia=!1;for(;!ia;){const{value:ta,done:Be}=await pt.read();ia=Be,Ct+=ea.decode(ta||new Uint8Array,{stream:!ia});let Pt;for(;(Pt=Ct.indexOf(`

`))>=0;){const qa=Ct.slice(0,Pt);Ct=Ct.slice(Pt+2);const _a=qa.split(`
`).find(Ka=>Ka.startsWith("data: "));if(!_a)continue;let qt;try{qt=JSON.parse(_a.slice(6))}catch{continue}qt.type==="start"?qt.total&&($.value=qt.total):qt.type==="item"?(se.value++,O.value=qt.stock_code,qt.success?(H.value[qt.stock_code]="success",L.value[qt.stock_code]=qt,ee++):(H.value[qt.stock_code]="error",k.value[qt.stock_code]=qt.error||"评估失败",_e++)):qt.type==="done"&&(typeof qt.success=="number"&&(ee=qt.success),typeof qt.fail=="number"&&(_e=qt.fail))}}if(Ct.trim()){const ta=Ct.split(`
`).find(Be=>Be.startsWith("data: "));if(ta)try{const Be=JSON.parse(ta.slice(6));Be.type==="item"?(se.value++,O.value=Be.stock_code,Be.success?(H.value[Be.stock_code]="success",L.value[Be.stock_code]=Be,ee++):(H.value[Be.stock_code]="error",k.value[Be.stock_code]=Be.error||"评估失败",_e++)):Be.type==="done"&&(typeof Be.success=="number"&&(ee=Be.success),typeof Be.fail=="number"&&(_e=Be.fail))}catch{}}}}catch{Se=!1}if(!Se){ee=0,_e=0,se.value=0;for(const Je of s){O.value=Je,H.value[Je]="running";try{const ea=await(await fetch("/api/ai/evaluate",{method:"POST",headers:V,body:JSON.stringify({stock_code:Je.trim(),stock_name:Je.trim()})})).json();ea.success?(H.value[Je]="success",L.value[Je]=ea.data,ee++):(H.value[Je]="error",k.value[Je]=ea.message&&ea.message!=="success"?ea.message:"评估失败",_e++)}catch(pt){H.value[Je]="error",k.value[Je]="网络错误: "+(pt&&pt.message?pt.message:pt),_e++}se.value++}}O.value="",await I();const mt=s.length;setTimeout(()=>{_e===0?ElementPlus.ElMessage.success(`评估完成 成功 ${ee}/${mt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${ee}/${mt} · 失败 ${_e}`),ae.value=!1},500)}return{quickEvalStock:oe,evalStrategy:Q,watchlistSort:P,watchlist:w,watchlistCodes:R,sortedWatchlist:ve,getWatchlistScore:ze,getLatestScore:Ie,addSearchResult:Pe,evaluatedCodes:qe,klineLoadedCodes:te,markKlineLoaded:we,watchlistSearch:De,watchlistResults:ne,watchlistSearching:X,dataRefreshConfig:pe,dataRefreshReloading:Ee,dataRefreshSaving:Ne,aiHistoryLoading:ie,aiHistoryError:ye,aiHistoryTotal:xe,aiHistoryLoadingMore:Ae,hasMoreAiHistory:We,loadMoreAiHistory:re,watchlistLoading:Bt,doAiEvaluate:de,loadAiHistory:I,deleteSingleHistory:He,toggleSelectHistory:$e,clearSelection:lt,clearWatchlistSelection:kt,batchReevaluateHistory:Ft,batchAddToWatchlist:Mt,batchAddToPortfolio:St,batchRemoveWatchlist:ct,toggleSelectWatchlist:Dt,selectAllHistory:Ot,selectAllWatchlist:_t,deleteSelectedHistory:Yt,loadAutoEvaluateConfig:vt,saveAutoEvaluateConfig:bt,loadWatchlist:gt,addToWatchlist:tt,removeFromWatchlist:Ht,clearWatchlist:aa,toggleWatchlist:da,showStockKline:la,preloadingKline:Xt,preloadWatchlistKline:ua,watchlistEvaluate:va,batchEvaluateWatchlist:Qt,batchEvaluateSelected:j,searchStockForWatchlist:he,loadDataRefreshConfig:Oe,saveDataRefreshConfig:Me,triggerDataReload:st,triggerDataPull:Rt,dataPullRunning:et,groupedByDate:Kt,aiHistoryByStock:Tt,groupedByMonth:ma,aiHistoryStockCount:sa,scoreDistribution:ya,quickEvaluate:Zt,toggleDateExpand:Da,toggleSelectDate:pa,toggleSelectMonth:Ra,toggleStockExpand:za,toggleSelectStock:fa,registerTrendChart:Jt,viewAiResult:ka,doBatchEvaluate:y,realtimeQuotes:be,realtimeDegraded:Te,realtimeWsState:Re,connectRealtimeQuotes:q,disconnectRealtimeQuotes:Vt,quoteWarningFor:xt,realtimeQuoteColor:ft,realtimePriceText:Ze,realtimePctText:jt,realtimeRatioText:Nt,REALTIME_DEGRADED_TEXT:rt,REALTIME_FALLBACK_TEXT:dt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:p}=Vue,t=e([]),f=e(null),v=e([]),z=e(!1),m=e(!1),c=e(!1),_=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),n=e(!1),S=e(!1),l=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),b=e(!1),g=e("positions"),C=e(30),D=e(!1),x=e(""),o=e(!1),i=e({dates:[],equity:[],values:[]}),u=p(()=>t.value.length),F=e("metrics"),W=e(!1),Y=e(""),J=e(!1),Z=e({metrics:null,rules:[],rebalance:null}),N=p(function(){const d=Z.value.metrics;if(!d)return[];const K=function(Q){return Q==null?"--":Number(Q).toFixed(2)+"%"},oe=function(Q){return Q==null?"--":Number(Q).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:K(d.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:K(d.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:K(d.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:K(d.cvar)},{key:"max_drawdown",label:"最大回撤",value:K(d.max_drawdown)},{key:"annual_return",label:"年化收益",value:K(d.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:oe(d.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:oe(d.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:oe(d.calmar_ratio)},{key:"beta",label:"Beta",value:oe(d.beta)}]});async function M(){W.value=!0;try{const d=await(await fetch("/api/portfolio/risk?days=60")).json(),K=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),oe=d&&d.success?d.risk:null,Q=K&&K.success?K.rules||[]:[],P=K&&K.success?K.rebalance:null;Z.value={metrics:oe,rules:Q,rebalance:P},J.value=!!(oe&&Object.keys(oe).length>0),Y.value=d&&d.note||K&&K.note||""}catch(d){console.warn("[portfolio] 加载风险数据失败:",d),J.value=!1,Y.value="风险数据加载失败"}finally{W.value=!1}}async function A(){z.value=!0,m.value=!1;try{const K=await(await fetch("/api/portfolio")).json();K.success?(t.value=K.positions||[],f.value=K.summary||null):m.value=!0}catch(d){console.warn("[portfolio] 加载持仓失败:",d),m.value=!0}finally{z.value=!1}}async function U(){const d=_.value,K=(d.stock_code||"").trim();if(!K){ElementPlus.ElMessage.warning("请输入股票代码");return}const oe=Number(d.cost_price),Q=Number(d.quantity);if(!(oe>0)||!(Q>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}n.value=!0;try{const w=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:K,stock_name:(d.stock_name||"").trim(),cost_price:oe,quantity:Q})})).json();w.success?(ElementPlus.ElMessage.success(w.message||"持仓已更新"),c.value=!1,_.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await A(),G(C.value)):ElementPlus.ElMessage.error(w.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{n.value=!1}}async function ae(d){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+d+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const oe=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(d),{method:"DELETE"})).json();oe.success?(ElementPlus.ElMessage.success("已删除持仓"),await A(),O(),G(C.value)):ElementPlus.ElMessage.error(oe.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function $(d,K){l.value={stock_code:d,stock_name:K||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},S.value=!0}async function se(){const d=l.value;if(!d.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const K=Number(d.price),oe=Number(d.quantity);if(!(K>0)||!(oe>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}b.value=!0;try{const P=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:d.stock_code,stock_name:d.stock_name||"",action:d.action,price:K,quantity:oe,trade_date:d.trade_date||"",note:(d.note||"").trim()})})).json();P.success?(ElementPlus.ElMessage.success(P.message||"调仓已记录"),S.value=!1,await A(),await O(),G(C.value)):ElementPlus.ElMessage.error(P.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{b.value=!1}}async function O(){try{const K=await(await fetch("/api/portfolio/trades")).json();K.success&&(v.value=K.trades||[])}catch(d){console.warn("[portfolio] 加载调仓记录失败:",d)}}const H=d=>(getComputedStyle(document.documentElement).getPropertyValue(d)||"").trim();function L(d){if(!d||!d.length)return[];let K=d[0]||0;const oe=[];for(let Q=0;Q<d.length;Q++){const P=d[Q]||0;P>K&&(K=P),oe.push(K>0?Math.round((P-K)/K*1e3)/10:0)}return oe}function k(){const d={primary:H("--qc-primary-600")||"#b8922a",textPrimary:H("--text-primary")||"#1f2937",textSecondary:H("--text-secondary")||"#6b7280",border:H("--border-light")||"#e5e7eb",up:H("--color-rise")||"#E63946",down:H("--color-fall")||"#2E7D32"},K=i.value;return{tooltip:{trigger:"axis",backgroundColor:H("--bg-card")||"#ffffff",borderColor:d.border,textStyle:{color:d.textPrimary},formatter:function(oe){const Q=oe[0]?oe[0].dataIndex:-1,P=K.dates[Q]||"",w=K.equity[Q],R=K.values[Q];let ie=P||"";return w!=null&&(ie+="<br/>组合净值: "+w),R!=null&&(ie+="<br/>组合市值: "+R),ie}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:K.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:d.textSecondary},axisLine:{lineStyle:{color:d.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:d.textSecondary},splitLine:{lineStyle:{color:d.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:d.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:K.equity,smooth:!0,showSymbol:!1,lineStyle:{color:d.primary,width:2},itemStyle:{color:d.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:L(K.equity),smooth:!0,showSymbol:!1,lineStyle:{color:d.down,width:1.5},itemStyle:{color:d.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function T(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function le(d,K,oe){i.value={dates:d||[],equity:K||[],values:oe||[]},o.value=!!d&&d.length>0,o.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",k,{key:"portfolio-equity"}):T()}async function G(d){D.value=!0,x.value="";const K=Number(d)||C.value||30;C.value=K;try{const Q=await(await fetch("/api/portfolio/equity_curve?days="+K)).json();Q.success?(x.value=Q.note||"",le(Q.dates||[],Q.equity||[],Q.values||[])):(x.value="数据暂不可用",T())}catch(oe){console.warn("[portfolio] 加载收益曲线失败:",oe),x.value="数据暂不可用",T()}finally{D.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function h(d,K){if(d==null||d===""||isNaN(Number(d)))return"--";const oe=Number(d),Q=K??2;return(oe>=0?"+":"")+oe.toFixed(Q)}function r(d,K){if(d==null||d===""||isNaN(Number(d)))return"--";const oe=Number(d),Q=K??2;return(oe>=0?"+":"")+oe.toFixed(Q)+"%"}function E(d){if(d==null||d===""||isNaN(Number(d)))return"";const K=Number(d);return K>0?"portfolio-up":K<0?"portfolio-down":""}return{positions:t,summary:f,trades:v,loading:z,loadError:m,showAddForm:c,addForm:_,addSaving:n,tradeFormVisible:S,tradeForm:l,tradeSaving:b,portfolioTab:g,equityDays:C,equityLoading:D,equityNote:x,equityHasData:o,portfolioCount:u,loadPortfolio:A,addPosition:U,removePosition:ae,openTradeForm:$,submitTrade:se,loadTrades:O,loadEquity:G,fmtSigned:h,fmtSignedPct:r,signClass:E,riskTab:F,riskLoading:W,riskNote:Y,riskHasData:J,riskData:Z,riskMetricList:N,loadRisk:M}}}})();(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(c,_){var n=Number(c);return isFinite(n)?n:typeof _=="number"?_:0}function e(c){var _=Array.isArray(c)?c:[];if(_.length<2)return null;for(var n=-1/0,S=0,l=0,b=0,g=0,C=0;C<_.length;C++){var D=a(_[C].equity!=null?_[C].equity:_[C].value);D>n&&(n=D,S=C);var x=n>0?(n-D)/n*100:0;x>l&&(l=x,b=S,g=C)}function o(i){return _[i]&&_[i].date?_[i].date:""}return{maxDrawdown:Math.round(l*100)/100,peakIndex:b,troughIndex:g,peakDate:o(b),troughDate:o(g)}}function p(c){for(var _=c||{},n={},S=Object.keys(_).sort(),l=0;l<S.length;l++){var b=S[l],g=String(b).slice(0,4);/^\d{4}$/.test(g)&&(n[g]=(n[g]||0)+a(_[b]))}var C=Object.keys(n).sort();return C.map(function(D){return{year:D,return:Math.round(n[D]*100)/100}})}function t(c){var _=Array.isArray(c)?c:[],n={};_.forEach(function(b){(b.points||[]).forEach(function(g){g&&g.date&&(n[g.date]=1)})});var S=Object.keys(n).sort(),l=_.map(function(b){var g={};return(b.points||[]).forEach(function(C){C&&C.date&&(g[C.date]=a(C.value!=null?C.value:C.equity))}),{name:b.name||"",data:S.map(function(C){return C in g?g[C]:null})}});return{dates:S,series:l}}function f(c){var _=c||{},n=function(l){return a(l)},S=function(l,b){var g=n(l);return isFinite(g)?g.toFixed(b):"--"};return[{key:"total_return",label:"总收益",value:S(_.total_return,2),suffix:"%",dir:n(_.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:S(_.annual_return,2),suffix:"%",dir:n(_.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:S(_.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:S(_.sharpe_ratio,2),suffix:"",dir:n(_.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:S(_.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:S(_.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(n(_.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:S(_.volatility,2),suffix:"%",dir:""}]}function v(c){var _=c==null?"":String(c);return/[",\n]/.test(_)?'"'+_.replace(/"/g,'""')+'"':_}function z(c){var _=c||{},n=[];n.push("回测指标"),n.push("指标,数值"),(_.metrics||[]).forEach(function(o){n.push(v(o.label)+","+v((o.value||"")+(o.suffix||"")))}),n.push(""),n.push("净值曲线");var S=["日期"].concat((_.series||[]).map(function(o){return o.name}));n.push(S.map(v).join(","));for(var l=_.dates||[],b=_.series||[],g=0;g<l.length;g++){for(var C=[l[g]],D=0;D<b.length;D++){var x=b[D].data&&b[D].data[g];C.push(x??"")}n.push(C.map(v).join(","))}return n.push(""),n.push("交易明细"),n.push("日期,股票代码,方向,原因"),(_.trades||[]).forEach(function(o){n.push(v(o.date)+","+v(o.stock)+","+v(o.action)+","+v(o.reason))}),n.join(`
`)}function m(c){return c==="buy"?"买入":c==="sell"?"卖出":c||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:p,buildNavSeries:t,buildMetrics:f,buildBacktestCsv:z,tradeActionText:m}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:p}=Vue,t=window.QuantBacktest||{},f=a||{},v=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],m=(Array.isArray(f.backtestStrategies)&&f.backtestStrategies.length?f.backtestStrategies:v).map(H=>({id:H.id,name:H.name})),c=e(m.length?[m[0].id]:[]),_=e(D()),n=e(1e5),S=e(3e-4),l=e(!1),b=e(!1),g=e(null),C=e("");function D(){const H=new Date,L=new Date;L.setFullYear(L.getFullYear()-1);const k=T=>T.getFullYear()+"-"+String(T.getMonth()+1).padStart(2,"0")+"-"+String(T.getDate()).padStart(2,"0");return[k(L),k(H)]}function x(H){const L=c.value.indexOf(H);L>=0?c.value.length>1&&c.value.splice(L,1):c.value.push(H)}function o(H){const L=m.find(k=>k.id===H);return L?L.name:H}function i(H){const L=H.summary||H;return{strategy_id:L.strategy_id,start_date:L.start_date,end_date:L.end_date,total_days:L.total_days,total_return:L.total_return,annual_return:L.annual_return,max_drawdown:L.max_drawdown,volatility:L.volatility,sharpe_ratio:L.sharpe_ratio,sortino_ratio:L.sortino_ratio,win_rate:L.win_rate,profit_loss_ratio:L.profit_loss_ratio,avg_positions:L.avg_positions!=null?L.avg_positions:L.avg_positions_per_day,total_trades:L.total_trades,turnover_rate:L.turnover_rate,success:L.success!==!1,message:L.message||"",insample_total_return:L.insample_total_return!=null?L.insample_total_return:null,outsample_total_return:L.outsample_total_return!=null?L.outsample_total_return:null,out_sample_ratio:L.out_sample_ratio!=null?L.out_sample_ratio:.2,overfit_warning:!!L.overfit_warning,overfit_reason:L.overfit_reason||""}}function u(H){return(Array.isArray(H)?H:[]).map(L=>({date:L.date,value:L.equity!=null?L.equity:L.value}))}function F(H,L){const k=i(L),T=u(L.equity_curve),le=L.monthly_returns||{},G=Array.isArray(L.trade_history)?L.trade_history:[],h={id:H,name:o(H),summary:k,equityCurve:T,monthlyReturns:le,trades:G};let r=null;if(l.value){const E=Number(n.value)||1e5;r={name:"现金基准",points:T.map(d=>({date:d.date,value:E}))}}return{success:!0,mode:"single",strategies:[h],primary:h,benchmark:r,period:(k.start_date||"")+" ~ "+(k.end_date||"")}}function W(H,L){const k=L.strategy_results||{},T=H.map(h=>{const r=k[h];if(!r)return null;const E=i(r);return{id:h,name:o(h),summary:E,equityCurve:u(r.equity_curve),monthlyReturns:r.monthly_returns||{},trades:Array.isArray(r.trade_history)?r.trade_history:[]}}).filter(h=>h&&h.summary.success!==!1),le=T.length?T[0]:null;let G=null;return l.value&&(G={name:"等权组合基准",points:u(L.portfolio_equity)}),{success:T.length>0,mode:"multi",strategies:T,primary:le,benchmark:G,period:le?le.summary.start_date+" ~ "+le.summary.end_date:""}}const Y=p(()=>{const H=g.value;return!H||!H.primary?[]:t.buildMetrics?t.buildMetrics(H.primary.summary):[]}),J=p(()=>{const H=g.value;return!H||!H.primary||!H.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(H.primary.monthlyReturns):[]}),Z=p(()=>{const H=g.value;return!H||!H.primary?[]:(H.primary.trades||[]).slice().sort((L,k)=>String(k.date||"").localeCompare(String(L.date||"")))}),N=p(()=>{const H=g.value;return!H||!H.strategies||H.strategies.length<2?[]:H.strategies.map(L=>({name:L.name,metrics:t.buildMetrics?t.buildMetrics(L.summary):[]}))}),M=p(()=>{const H=g.value;return!H||!H.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(H.primary.equityCurve):null});async function A(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const L=c.value;if(!L.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const k=_.value,T={start_date:k&&k[0]||void 0,end_date:k&&k[1]||void 0},le={"Content-Type":"application/json"};b.value=!0,g.value=null,C.value="";try{if(L.length===1){const G=Object.assign({},T,{initial_capital:Number(n.value)||1e5,commission_rate:Number(S.value)||3e-4}),h=await fetch("/api/backtest/"+encodeURIComponent(L[0]),{method:"POST",headers:le,body:JSON.stringify(G)});if(!h.ok){const E=await h.json().catch(()=>({}));throw new Error(E.detail||"回测失败")}const r=await h.json();if(!r.success)throw new Error(r.message||"回测失败");g.value=F(L[0],r)}else{const G=await fetch("/api/backtest/multi",{method:"POST",headers:le,body:JSON.stringify(Object.assign({},T,{strategy_ids:L}))});if(!G.ok){const r=await G.json().catch(()=>({}));throw new Error(r.detail||"回测失败")}const h=await G.json();if(!h.success)throw new Error(h.message||"多策略回测失败");if(g.value=W(L,h.data||{}),!g.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(G){C.value=G&&G.message?G.message:"回测失败",ElementPlus.ElMessage.error(C.value)}finally{b.value=!1}}function U(){const H=g.value,L={dates:[],series:[]};if(!H)return L;const k=H.strategies.map(le=>({name:le.name,points:le.equityCurve}));H.benchmark&&H.benchmark.points&&H.benchmark.points.length&&k.push({name:H.benchmark.name,points:H.benchmark.points});const T=t.buildNavSeries?t.buildNavSeries(k):L;return ae(T,H)}function ae(H,L){const k=K=>(getComputedStyle(document.documentElement).getPropertyValue(K)||"").trim(),T={primary:k("--qc-primary-600")||"#b8922a",success:k("--color-success")||"#4CAF50",accent:k("--color-accent")||"#F59E0B",info:k("--color-info")||"#1976d2",ai:k("--color-ai")||"#6366f1",textPrimary:k("--text-primary")||"#1f2937",textSecondary:k("--text-secondary")||"#6b7280",border:k("--border-light")||"#e5e7eb",up:k("--color-rise")||"#E63946",down:k("--color-fall")||"#2E7D32",bg:k("--bg-card")||"#ffffff"},le=[T.primary,T.success,T.accent,T.info,T.ai],h=T.bg.length===7&&parseInt(T.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",r=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(L.primary?L.primary.equityCurve:[]):null,E=r&&r.peakDate&&r.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:T.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+r.maxDrawdown+"%",xAxis:r.peakDate,itemStyle:{color:T.down}},{xAxis:r.troughDate}]]}:void 0,d=H.series.map((K,oe)=>{const Q=L.benchmark&&K.name===L.benchmark.name,P=le[oe%le.length];return{name:K.name,type:"line",data:K.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:Q?2:2.4,type:Q?"dashed":"solid",color:P},itemStyle:{color:P},emphasis:{focus:"series"},...oe===0&&E?{markArea:E}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:h,borderColor:T.border,textStyle:{color:T.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:T.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:H.dates,boundaryGap:!1,axisLine:{lineStyle:{color:T.border}},axisLabel:{color:T.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:T.textSecondary,fontSize:11},splitLine:{lineStyle:{color:T.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:T.border,textStyle:{color:T.textSecondary,fontSize:10}}],series:d}}function $(H){if(!H){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",U,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function se(){const H=g.value;if(!H||!H.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const L=H.strategies.map(d=>({name:d.name,points:d.equityCurve}));H.benchmark&&L.push({name:H.benchmark.name,points:H.benchmark.points});const k=t.buildNavSeries?t.buildNavSeries(L):{dates:[],series:[]},T=t.tradeActionText||(d=>d),le=Z.value.map(d=>({date:d.date,stock:d.stock,action:T(d.action),reason:d.reason})),G=t.buildBacktestCsv?t.buildBacktestCsv({metrics:Y.value,dates:k.dates,series:k.series,trades:le}):"",h=new Blob(["\uFEFF"+G],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(h),E=document.createElement("a");E.href=r,E.download="backtest-"+H.strategies.map(d=>d.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",E.click(),URL.revokeObjectURL(r),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function O(H,L){return H==null||H===""||isNaN(Number(H))?"--":Number(H).toFixed(L??2)}return{btStrategyOptions:m,btSelectedStrategies:c,toggleBtStrategy:x,btDateRange:_,btCapital:n,btCommissionRate:S,btIncludeBenchmark:l,btRunning:b,btResult:g,btError:C,btMetrics:Y,btAnnualReturns:J,btTrades:Z,btStrategyMetricsRows:N,btDrawdownRegion:M,runBacktestWorkbench:A,exportBacktestCSV:se,registerBacktestNavChart:$,btFmtNum:O}}}})();(function(){const{ref:a,computed:e,watch:p,onUnmounted:t}=Vue,f=n=>(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim(),v=72,z={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},m={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},c={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},_={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const n=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),S=a({}),l=a(!1),b=a({}),g=a({cycles:[]}),C=a(!1),D=a({autoRefresh:!0,refreshInterval:300}),x=a(""),o=a(""),i=a(!1),u=a("");let F=null;const W={x:0,y:0},Y=e(()=>{const R=S.value;return["recession","recovery","overheat","stagflation"].map(ye=>{const ve=R[ye]||{};return{key:ye,name:ve.name||ye,icon:c[ve.icon]||"bar-chart-3",color:ve.color||f("--text-tertiary")||"#888",bg:ve.bg_color||f("--bg-card")||"#f5f5f5",textColor:ve.color||f("--text-primary")||"#333",tagline:ve.allocation&&_[ye]||""}})}),J=e(()=>{var ie,ye,ve,ze;const R=n.value.indicators||{};return[{key:"pmi",label:"PMI",value:(ie=R.pmi)==null?void 0:ie.toFixed(2),color:R.pmi>=50?f("--color-success")||"#43a047":f("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((ye=R.gdp_growth)==null?void 0:ye.toFixed(2))+"%",color:f("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((ve=R.cpi)==null?void 0:ve.toFixed(2))+"%",color:R.cpi>1.2?f("--color-danger")||"#E53935":f("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ze=R.m2_growth)==null?void 0:ze.toFixed(2))+"%",color:f("--color-success")||"#43a047"}]}),Z=R=>{R=R||{};const ie=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],ye=()=>f("--color-success")||"#43a047",ve=()=>f("--color-danger")||"#E53935",ze=()=>f("--color-warning")||"#FF9800",Ie={宽松:ye(),中位:ze(),偏低:ve(),高增长:ye(),承压:ve(),不利:ve()};return ie.map(Pe=>{const qe=R[Pe.key]||{},te=qe.score||0,we=Math.min(100,Math.max(5,(te+2)*25)),De=te>=.3?"#66BB6A":te>=-.3?"#FFB74D":"#EF5350",ne=te>=0?"#66BB6A":"#EF5350";return{key:Pe.key,label:Pe.label,scoreStr:te.toFixed(2),level:qe.level||"—",barWidth:we,barColor:De,scoreColor:ne,color:Ie[qe.level]||"#888888"}})},N=e(()=>Z(n.value.dimension_scores)),M=e(()=>Z(b.value._dimensions)),A=e(()=>{var ie;const R=((ie=n.value.confidence)==null?void 0:ie.level)||"";return R==="高"?"#43a047":R==="中"?"#FF9800":R==="低"?"#E53935":"var(--text-secondary)"}),U=e(()=>{var ve,ze,Ie,Pe;const R=S.value,ie={recovery:0,overheat:1,stagflation:2,recession:3},ye={};for(const[qe,te]of Object.entries(R))ye[qe]={name:te.name,icon:te.icon,color:te.color,lightColor:te.bg_color,duration:"~"+(((ve=te.historical_stats)==null?void 0:ve.avg_duration_months)||18)+"个月",order:ie[qe]||0,period:((Ie=(ze=te.case_studies)==null?void 0:ze[0])==null?void 0:Ie.split("：")[0])||"",avgMonths:((Pe=te.historical_stats)==null?void 0:Pe.avg_duration_months)||18};return ye}),ae=e(()=>{var te,we;const R=n.value.stage,ye={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[R]||{x:150,y:150},ve=n.value.dimension_scores||{},ze=((te=ve.growth)==null?void 0:te.score)||0,Ie=((we=ve.inflation)==null?void 0:we.score)||0,Pe=Math.max(-30,Math.min(30,ze*15)),qe=Math.max(-30,Math.min(30,-Ie*15));return{x:ye.x+Pe,y:ye.y+qe,prevX:W.x,prevY:W.y}}),$=e(()=>{var ve;const R=Math.min(100,((ve=n.value.timing)==null?void 0:ve.progress_percent)||0),ie=n.value.color||"#4CAF50",ye=R>100?"linear-gradient(90deg, "+ie+", #FF9800)":ie;return{width:R+"%",background:ye}});function se(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[n.value.stage]||0}function O(){var R,ie;return((ie=(R=n.value)==null?void 0:R.timing)==null?void 0:ie.progress_percent)||0}function H(){var R,ie;return((ie=(R=n.value)==null?void 0:R.timing)==null?void 0:ie.duration_months)||0}function L(){var R,ie;return((ie=(R=n.value)==null?void 0:R.timing)==null?void 0:ie.avg_duration_months)||18}function k(R){var ze,Ie;const ie=U.value,ye=((ze=ie[n.value.stage])==null?void 0:ze.order)||0;return(((Ie=ie[R])==null?void 0:Ie.order)||0)<ye}function T(R){return z[R]||R}function le(R){return m[R]||R}function G(R){const ie=["#43a047","#f57c00","#1976d2","#757575"];return ie[R-1]||ie[3]}async function h(){try{const ie=await(await fetch("/api/market/merrill-clock/stages")).json();ie.success&&ie.data&&(S.value=ie.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function r(){C.value=!0;try{const ie=await(await fetch("/api/market/merrill-clock/timeline")).json();if(ie.success&&ie.data){const ye=Array.isArray(ie.data.cycles)?ie.data.cycles.slice().reverse():[];g.value={cycles:ye}}}catch{console.warn("获取美林时钟时间轴失败")}finally{C.value=!1}}async function E(R){await K(R)}async function d(){var R,ie;try{const ve=await(await fetch("/api/market/merrill-clock")).json(),ze=ve.stage||"recovery",Ie=S.value[ze]||{};if(n.value={...Ie,...ve,stage_cn:ve.stage_cn||Ie.stage_cn||"",stage_name:ve.stage_name||Ie.name||"",name:ve.name||Ie.name||"复苏期"},x.value=new Date().toLocaleTimeString("zh-CN"),u.value&&u.value!==ze){const Pe=S.value,qe=((R=Pe[u.value])==null?void 0:R.name)||u.value,te=((ie=Pe[ze])==null?void 0:ie.name)||ze;ElementPlus.ElMessage({message:"美林时钟阶段切换："+qe+" → "+te,type:"warning",duration:6e3,showClose:!0})}u.value=ze}catch(ye){console.error("获取美林时钟失败:",ye);const ve=S.value.recovery||{};n.value={...ve,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function K(R){var ye;l.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",b.value=S.value[R]||S.value.recovery||{};const ie=((ye=n.value)==null?void 0:ye.stage)===R;b.value._isCurrent=ie,ie&&n.value&&(b.value._nextPrediction=n.value.next_stage_prediction,b.value._confidence=n.value.confidence,b.value._stage=n.value.stage,b.value._dimensions=n.value.dimension_scores);try{const ze=await(await fetch("/api/market/merrill-clock/stage/"+R)).json();if(ze.success&&ze.data){const Ie={...S.value[R],...ze.data};Ie._is_current!==void 0&&(Ie._isCurrent=Ie._is_current),Ie._current_timing&&(Ie._currentTiming=Ie._current_timing),Ie._last_period&&(Ie._lastPeriod=Ie._last_period),b.value._nextPrediction&&(Ie._nextPrediction=b.value._nextPrediction),b.value._confidence&&(Ie._confidence=b.value._confidence),b.value._stage&&(Ie._stage=b.value._stage),b.value._dimensions&&(Ie._dimensions=b.value._dimensions),Object.assign(b.value,Ie)}}catch(ve){console.warn("获取阶段详情失败:",ve)}}function oe(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:D.value.autoRefresh,refreshInterval:D.value.refreshInterval})),D.value.autoRefresh?(clearInterval(F),F=setInterval(d,D.value.refreshInterval*1e3)):clearInterval(F),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function Q(){i.value=!0,o.value="";try{const ie=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();ie.success?(o.value="重评估完成："+(ie.stage_name||ie.stage),await d(),ElementPlus.ElMessage.success("重评估完成")):(o.value=ie.message||"重评估失败",ElementPlus.ElMessage.error(ie.message||"重评估失败"))}catch{o.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{i.value=!1}}function P(){const R=localStorage.getItem("merrill_clock_config");if(R)try{const ie=JSON.parse(R);D.value={...D.value,...ie}}catch{}D.value.autoRefresh&&(F=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),d()},D.value.refreshInterval*1e3))}function w(){F&&clearInterval(F)}return t(()=>{w()}),{merrillData:n,merrillStagesConfig:S,showMerrillDetail:l,merrillDetailData:b,merrillTimeline:g,timelineLoading:C,merrillClockConfig:D,merrillClockLastUpdated:x,merrillReevalResult:o,merrillReevalLoading:i,stages:Y,indicatorList:J,dimensionScoreList:N,detailDimensionScoreList:M,confidenceColor:A,timelineStages:U,clockPosition:ae,merrillProgressStyle:$,FULL_CYCLE_MONTHS:v,getStageAngle:se,getCycleProgress:O,getCurrentStageMonths:H,getStageTotalMonths:L,isStageCompleted:k,getCharLabel:T,getAssetName:le,getRankColor:G,fetchMerrillStages:h,fetchMerrillClock:d,loadMerrillTimeline:r,showTimelineStage:E,showStageDetail:K,saveMerrillClockConfig:oe,doMerrillReevaluate:Q,startAutoRefresh:P,stopAutoRefresh:w}}})();(function(){function a(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const p=[];function t(v){typeof v=="function"&&p.push(v)}function f(){p.slice().forEach(function(v){try{v()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:t,refreshAllCharts:f,init(){return{getEChartsTheme:e,registerChart:t,refreshAllCharts:f}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const p=e("qcState");try{const v=localStorage.getItem("quant_sidebar_collapsed");v!==null&&p.sidebarCollapsed&&(p.sidebarCollapsed.value=v==="1")}catch{}if(!p)return{};const t=async v=>{if(window.__quantGoPage){await window.__quantGoPage(v.key,v.subPages[0]||"");return}p.currentPage.value=v.key,p.currentSubPage.value=v.subPages[0]||""},f=()=>{p.sidebarCollapsed.value=!p.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",p.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:p.menus,currentPage:p.currentPage,sidebarCollapsed:p.sidebarCollapsed,navigate:t,toggle:f,sanitizeHtml:p.sanitizeHtml,keyClick:p.keyClick,t:p.t}}}})();const Ca={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,p={"layout-dashboard":Ov,calendar:Nv,bot:Iv,"flask-conical":Lv,zap:Av,settings:zv,"chevron-down":Rv,"chevron-right":Dv,"chevron-left":Pv,menu:Tv,search:Mv,bell:Ev,sun:qv,moon:Cv,user:Sv,"user-round":xv,home:_v,x:kv,database:wv,activity:bv,clock:yv,"bar-chart-3":hv,shield:gv,"hard-drive":fv,"file-text":pv,users:mv,cpu:vv,"pie-chart":uv,info:dv,"log-out":cv,palette:rv,languages:ov,refresh:nv,download:lv,"external-link":iv,command:sv,sparkles:av,"trending-up":tv,"trending-down":ev,"circle-dot":Zu,check:Xu,"alert-triangle":$u,loader:Qu,"arrow-left":Ju,"arrow-right":Yu,eye:Gu,"eye-off":Uu,lock:Wu,"sliders-horizontal":Ku,play:Bu,history:Hu,layers:Fu,"line-chart":Vu,target:ju,"search-check":Ou,star:Nu,"message-circle":Iu,"calendar-days":Lu,"calendar-range":Au,"calendar-check":zu,brain:Ru,lightbulb:Du,"octagon-x":Pu,flag:Tu,package:Mu,"clipboard-list":Eu,pin:qu,"radio-tower":Cu,gauge:Su,landmark:xu,"candlestick-chart":_u,wallet:ku,"badge-check":wu,key:bu,factory:yu,trophy:hu,rocket:gu,flame:fu,"map-pin":pu,"scroll-text":mu,"book-open":vu,dna:uu,"bar-chart":du,plus:cu,"star-off":ru,upload:ou,gem:nu,"folder-open":lu,link:iu,save:su,"trash-2":au,pause:tu,"help-circle":eu,"play-circle":Zd,pencil:Xd,folder:$d,code:Qd,sprout:Jd,wheat:Yd,snowflake:Gd,fuel:Ud,banknote:Wd,send:Kd,inbox:Bd,"wifi-off":Hd,"check-circle-2":Fd,"x-circle":Vd},t=()=>p[e.name]||p["circle-dot"];return(f,v)=>(ue(),ra(Ed(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Pa=(a,e)=>{const p=a.__vccOpts||a;for(const[t,f]of e)p[t]=f;return p},jv={name:"qc-sidebar",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=at(()=>a.menus&&a.menus.value||[]),p=at(()=>a.currentPage&&a.currentPage.value||""),t=at(()=>a.navMode&&a.navMode.value||"subnav"),f=at({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:x=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=x)}}),v=At({}),z={research:"量化投研",platform:"平台管理"},m=["research","platform"],c=x=>p.value===x.key,_=(x,o)=>p.value===x.key&&a.currentSubPage&&a.currentSubPage.value===o,n=x=>Array.isArray(x.subPages)&&x.subPages.length>1,S=(x,o)=>a.subPageNames&&a.subPageNames[o]||o;function l(x){!n(x)||f.value||(v.value[x.key]=!v.value[x.key])}function b(){e.value.forEach(x=>{v.value[x.key]===void 0&&(v.value[x.key]=c(x))})}async function g(x,o){const i=o||x.subPages&&x.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(x.key,i):(a.currentPage.value=x.key,a.currentSubPage&&(a.currentSubPage.value=i)),a.navigateTo&&a.navigateTo(x.key,i)}function C(){f.value=!f.value;try{localStorage.setItem("sidebar_collapsed",f.value?"1":"0")}catch{}}function D(x){if(x.ctrlKey&&x.key.toLowerCase()==="b"&&(x.preventDefault(),C()),!x.ctrlKey&&!x.metaKey&&!x.altKey&&(x.key==="ArrowDown"||x.key==="ArrowUp")){const o=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),i=o.indexOf(document.activeElement);if(i>=0){x.preventDefault();const u=o[(i+(x.key==="ArrowDown"?1:o.length-1))%o.length];u&&u.focus()}}}return Ba(()=>{b(),document.addEventListener("keydown",D)}),rs(()=>document.removeEventListener("keydown",D)),{state:a,menus:e,currentPage:p,navMode:t,sidebarCollapsed:f,expandedMenus:v,GROUP_LABELS:z,GROUPS:m,isActive:c,isChildActive:_,hasChildren:n,subLabel:S,toggleSubmenu:l,navigate:g,toggleCollapse:C}}},Vv={class:"qc-sidebar-logo"},Fv={key:0,class:"qc-logo-text"},Hv={class:"qc-sidebar-nav"},Bv={key:0,class:"qc-nav-group"},Kv={key:0,class:"qc-nav-group-label"},Wv=["href","aria-current","onClick"],Uv={key:0,class:"qc-sidebar-label"},Gv={key:1,class:"qc-nav-badge"},Yv=["aria-expanded","aria-controls","onClick"],Jv=["id"],Qv=["href","aria-current","onClick"],$v={class:"qc-sidebar-child-label"},Xv={class:"qc-sidebar-footer"},Zv=["aria-expanded","aria-label","title"];function em(a,e,p,t,f,v){const z=Gt("AppIcon"),m=Gt("el-tooltip");return ue(),fe("nav",{class:ot(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Ce("div",Vv,[e[1]||(e[1]=Md('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Fe("",!0):(ue(),fe("span",Fv,Ve(t.state.t("login.title")),1))]),Ce("div",Hv,[(ue(!0),fe(it,null,wt(t.GROUPS,c=>(ue(),fe(it,{key:c},[t.menus.some(_=>_.group===c)?(ue(),fe("div",Bv,[t.sidebarCollapsed?Fe("",!0):(ue(),fe("span",Kv,Ve(t.GROUP_LABELS[c]),1)),(ue(!0),fe(it,null,wt(t.menus.filter(_=>_.group===c),_=>(ue(),fe(it,{key:_.key},[Ce("div",{class:ot(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(_),"is-child-open":t.navMode==="tree"&&t.expandedMenus[_.key]}])},[nt(m,{content:_.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:oa(()=>[Ce("a",{class:ot(["qc-sidebar-link",{"is-active":t.isActive(_)}]),href:"#"+_.key,"aria-current":t.isActive(_)?"page":null,onClick:Lt(n=>t.navigate(_),["prevent"])},[nt(z,{name:_.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Fe("",!0):(ue(),fe("span",Uv,Ve(_.name),1)),!t.sidebarCollapsed&&_.badge?(ue(),fe("span",Gv,Ve(_.badge),1)):Fe("",!0)],10,Wv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(_)?(ue(),fe("button",{key:0,class:ot(["qc-sidebar-chevron",{"is-open":t.expandedMenus[_.key]}]),"aria-expanded":!!t.expandedMenus[_.key],"aria-controls":"submenu-"+_.key,"aria-label":"展开子菜单",onClick:n=>t.toggleSubmenu(_)},[nt(z,{name:"chevron-down",size:14})],10,Yv)):Fe("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(_)&&t.expandedMenus[_.key]?(ue(),fe("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+_.key},[(ue(!0),fe(it,null,wt(_.subPages,n=>(ue(),fe("a",{key:n,class:ot(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(_,n)}]),href:"#"+_.key+"-"+n,"aria-current":t.isChildActive(_,n)?"page":null,onClick:Lt(S=>t.navigate(_,n),["prevent"])},[Ce("span",$v,Ve(t.subLabel(_,n)),1)],10,Qv))),128))],8,Jv)):Fe("",!0)],64))),128))])):Fe("",!0)],64))),128))]),Ce("div",Xv,[Ce("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...c)=>t.toggleCollapse&&t.toggleCollapse(...c))},[nt(z,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,Zv)])],2)}const tm=Pa(jv,[["render",em]]),am={name:"qc-header",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=At(!1),p=at(()=>a.currentUser&&a.currentUser.value||null),t=at(()=>a.navMode&&a.navMode.value||"subnav"),f=at(()=>{const w=a.currentPage&&a.currentPage.value,R=(a.menus&&a.menus.value||[]).find(ie=>ie.key===w);return!!(R&&R.subPages&&R.subPages.length)}),v=at(()=>{const w=a.currentPage&&a.currentPage.value,R=a.currentPageName&&a.currentPageName.value;if(R)return R;const ie=(a.menus&&a.menus.value||[]).find(ye=>ye.key===w);return ie&&ie.name||w||""}),z=at(()=>{const w=a.currentSubPage&&a.currentSubPage.value;return w&&a.subPageNames&&a.subPageNames[w]||w||""}),m=At(typeof window<"u"?window.innerWidth<768:!1);function c(){m.value=window.innerWidth<768}Ba(()=>window.addEventListener("resize",c)),rs(()=>window.removeEventListener("resize",c));const _=At(!1),n=at(()=>{const w=a.currentSubPage&&a.currentSubPage.value;return w&&a.subPageNames&&a.subPageNames[w]||w||""}),S=at(()=>{const w=a.currentPage&&a.currentPage.value,R=(a.menus&&a.menus.value||[]).find(ie=>ie.key===w);return(R&&R.subPages||[]).map(ie=>({key:ie,label:a.subPageNames&&a.subPageNames[ie]||ie}))});function l(){_.value=!_.value}function b(){_.value=!1}function g(w){_.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,w)}const C=at(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),D=At(!1),x=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],o=at(()=>{const w=x.find(R=>R.value===t.value);return w&&w.label||t.value});function i(){D.value=!D.value}function u(){D.value=!1}function F(w){D.value=!1,a.setNavMode&&a.setNavMode(w)}const W=at({get:()=>a.searchQuery&&a.searchQuery.value||"",set:w=>{a.searchQuery&&(a.searchQuery.value=w)}}),Y=At(!1),J=At([]),Z=At(!1),N=At(!1);function M(){const w=localStorage.getItem("quant_token")||"";return w?{Authorization:"Bearer "+w,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function A(){Z.value=!0,N.value=!1;try{const R=await(await fetch("/api/alerts/history?limit=8",{headers:M()})).json();R&&R.success?J.value=R.history||[]:J.value=[]}catch{N.value=!0,J.value=[]}finally{Z.value=!1}}function U(){Y.value=!Y.value,Y.value&&A()}function ae(){Y.value=!1}function $(){Y.value=!1,a.activateTab&&a.activateTab("system","notification")}const se=At(!1),O=a.themeHues||[45,220,0,140,270,320],H=at(()=>a.themeHue&&a.themeHue.value||45),L=at(()=>a.themeMode&&a.themeMode.value||"system");function k(w){return a.hueColor?a.hueColor(w):"hsl("+w+", 75%, 42%)"}function T(w){return a.hueName?a.hueName(w):String(w)}function le(){se.value=!se.value}function G(){se.value=!1}function h(w){a.changeThemeMode&&a.changeThemeMode(w)}function r(w){a.changeThemeHue&&a.changeThemeHue(w)}function E(){a.changeThemeMode&&a.changeThemeMode(C.value?"light":"dark")}function d(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function K(){e.value=!e.value}function oe(){e.value=!1}function Q(w){return()=>{oe(),w&&w()}}function P(){oe(),a.handleLogout&&a.handleLogout()}return{state:a,showUserMenu:e,currentUser:p,isDark:C,searchQuery:W,navMode:t,crumbRoot:v,crumbSub:z,hasToptabs:f,toggleThemeQuick:E,toggleSidebar:d,openUserMenu:K,closeUserMenu:oe,menuItem:Q,handleLogout:P,openBellMenu:Y,notifItems:J,notifLoading:Z,notifError:N,toggleBell:U,closeBell:ae,goNotificationCenter:$,openThemeMenu:se,themeHues:O,themeHue:H,themeMode:L,hueColor:k,hueName:T,toggleThemeMenu:le,closeThemeMenu:G,pickThemeMode:h,pickThemeHue:r,openNavModeMenu:D,NAV_MODES:x,navModeLabel:o,toggleNavModeMenu:i,closeNavModeMenu:u,pickNavMode:F,isMobile:m,openSubnavPicker:_,currentSubLabel:n,subnavOptions:S,toggleSubnavPicker:l,closeSubnavPicker:b,pickSubnav:g}}},sm={class:"qc-header"},im={class:"qc-header-left"},lm=["aria-label"],nm={key:0,class:"qc-header-subnav"},om=["aria-expanded"],rm={class:"qc-subnav-picker-label"},cm={key:0,class:"qc-subnav-picker-menu",role:"menu"},dm=["onClick"],um={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},vm={class:"qc-crumb qc-crumb-root"},mm={class:"qc-crumb qc-crumb-sub"},pm={key:1,class:"qc-crumb qc-crumb-root"},fm={class:"qc-header-center"},gm={key:0,class:"qc-search-sublabel"},hm={class:"qc-header-right"},ym={class:"qc-hdr-pop"},bm=["aria-expanded"],wm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},km={key:0,class:"qc-bell-state"},_m={key:1,class:"qc-bell-state"},xm={key:2,class:"qc-bell-state"},Sm={key:3,class:"qc-bell-list"},Cm={class:"qc-bell-item-title"},qm={class:"qc-bell-item-meta"},Em={key:0},Mm={class:"qc-bell-item-time"},Tm={class:"qc-hdr-pop"},Pm=["aria-expanded"],Dm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Rm={class:"qc-theme-modes"},zm=["onClick"],Am={class:"qc-theme-swatches"},Lm=["title","aria-label","onClick"],Im={key:0,class:"qc-theme-swatch-check"},Nm={class:"qc-theme-custom-label"},Om={key:0,class:"qc-navmode-switch"},jm=["aria-label","title","aria-expanded"],Vm={key:0,class:"qc-navmode-menu",role:"menu"},Fm=["onClick","onKeydown"],Hm={class:"qc-navmode-item-main"},Bm={class:"qc-user-menu"},Km=["aria-label","aria-expanded"],Wm={key:0,class:"qc-user-dropdown",role:"menu"},Um={class:"qc-user-dropdown-header"},Gm={class:"qc-user-dropdown-name"},Ym={key:0,class:"qc-user-dropdown-chip"};function Jm(a,e,p,t,f,v){var S,l,b,g,C,D,x;const z=Gt("AppIcon"),m=Gt("qc-top-tabs"),c=Gt("el-autocomplete"),_=Gt("el-slider"),n=Td("click-outside");return ue(),fe("header",sm,[Ce("div",im,[Ce("button",{class:"qc-icon-btn","aria-label":(S=t.state.sidebarCollapsed)!=null&&S.value?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...o)=>t.toggleSidebar&&t.toggleSidebar(...o))},[nt(z,{name:"menu",size:20})],8,lm),t.isMobile?La((ue(),fe("div",nm,[Ce("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[1]||(e[1]=(...o)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...o))},[Ce("span",rm,Ve(t.currentSubLabel||"二级"),1),nt(z,{name:"chevron-down",size:14})],8,om),t.openSubnavPicker?(ue(),fe("div",cm,[(ue(!0),fe(it,null,wt(t.subnavOptions,o=>(ue(),fe("div",{key:o.key,class:ot(["qc-subnav-picker-item",{"is-active":o.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:i=>t.pickSubnav(o.key)},Ve(o.label),11,dm))),128))])):Fe("",!0)])),[[n,t.closeSubnavPicker]]):Fe("",!0),t.navMode==="tree"&&!t.isMobile?(ue(),fe("div",um,[Ce("span",vm,Ve(t.crumbRoot),1),t.crumbSub?(ue(),fe(it,{key:0},[e[14]||(e[14]=Ce("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Ce("span",mm,Ve(t.crumbSub),1)],64)):Fe("",!0)])):Fe("",!0),t.navMode==="toptab"&&!t.isMobile?(ue(),fe(it,{key:2},[t.hasToptabs?(ue(),ra(m,{key:0})):(ue(),fe("span",pm,Ve(t.crumbRoot),1))],64)):Fe("",!0)]),Ce("div",fm,[nt(c,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[2]||(e[2]=o=>t.searchQuery=o),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:oa(()=>[nt(z,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:oa(()=>[...e[15]||(e[15]=[Ce("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:oa(o=>{var i,u,F,W,Y;return[Ce("span",null,Ve((i=o==null?void 0:o.item)==null?void 0:i.icon)+" "+Ve(((u=o==null?void 0:o.item)==null?void 0:u.label)||((F=o==null?void 0:o.item)==null?void 0:F.name)),1),(W=o==null?void 0:o.item)!=null&&W.subLabel?(ue(),fe("span",gm,Ve((Y=o==null?void 0:o.item)==null?void 0:Y.subLabel),1)):Fe("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Ce("div",hm,[La((ue(),fe("div",ym,[Ce("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[3]||(e[3]=(...o)=>t.toggleBell&&t.toggleBell(...o))},[nt(z,{name:"bell",size:20})],8,bm),t.openBellMenu?(ue(),fe("div",wm,[e[16]||(e[16]=Ce("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(ue(),fe("div",km,"加载中...")):t.notifError?(ue(),fe("div",_m,"加载失败")):t.notifItems.length?(ue(),fe("div",Sm,[(ue(!0),fe(it,null,wt(t.notifItems,(o,i)=>(ue(),fe("div",{key:o.id||i,class:ot(["qc-bell-item",{"is-fail":o.ok===0}])},[Ce("div",Cm,Ve(o.title||o.event_type||"事件"),1),Ce("div",qm,[Sa(Ve(o.channel||""),1),o.recipient?(ue(),fe("span",Em," · "+Ve(o.recipient),1)):Fe("",!0),Ce("span",Mm,Ve(o.created_at||""),1)])],2))),128))])):(ue(),fe("div",xm,"暂无通知")),Ce("button",{class:"qc-bell-footer",onClick:e[4]||(e[4]=(...o)=>t.goNotificationCenter&&t.goNotificationCenter(...o))},"前往通知中心 →")])):Fe("",!0)])),[[n,t.closeBell]]),La((ue(),fe("div",Tm,[Ce("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[5]||(e[5]=(...o)=>t.toggleThemeMenu&&t.toggleThemeMenu(...o))},[nt(z,{name:"palette",size:20})],8,Pm),t.openThemeMenu?(ue(),fe("div",Dm,[e[17]||(e[17]=Ce("div",{class:"qc-theme-section-label"},"外观模式",-1)),Ce("div",Rm,[(ue(),fe(it,null,wt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],o=>Ce("button",{key:o.k,class:ot(["qc-theme-mode",{"is-active":t.themeMode===o.k}]),onClick:i=>t.pickThemeMode(o.k)},Ve(o.n),11,zm)),64))]),e[18]||(e[18]=Ce("div",{class:"qc-theme-section-label"},"主题色",-1)),Ce("div",Am,[(ue(!0),fe(it,null,wt(t.themeHues,o=>(ue(),fe("button",{key:o,class:ot(["qc-theme-swatch",{"is-active":t.themeHue===o}]),style:Pd({background:t.hueColor(o)}),title:t.hueName(o),"aria-label":t.hueName(o),onClick:i=>t.pickThemeHue(o)},[t.themeHue===o?(ue(),fe("span",Im,"✓")):Fe("",!0)],14,Lm))),128))]),nt(_,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Ce("div",Nm,"自定义 "+Ve(t.themeHue)+"°",1)])):Fe("",!0)])),[[n,t.closeThemeMenu]]),t.isMobile?Fe("",!0):La((ue(),fe("div",Om,[Ce("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[6]||(e[6]=(...o)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...o))},[nt(z,{name:"layers",size:20})],8,jm),t.openNavModeMenu?(ue(),fe("div",Vm,[(ue(!0),fe(it,null,wt(t.NAV_MODES,o=>(ue(),fe("div",{key:o.value,class:ot(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===o.value}]),role:"menuitem",tabindex:"0",onClick:i=>t.pickNavMode(o.value),onKeydown:[na(Lt(i=>t.pickNavMode(o.value),["prevent"]),["enter"]),na(Lt(i=>t.pickNavMode(o.value),["prevent"]),["space"])]},[Ce("div",Hm,[Ce("span",null,Ve(o.label),1),t.navMode===o.value?(ue(),ra(z,{key:0,name:"check",size:14})):Fe("",!0)])],42,Fm))),128))])):Fe("",!0)])),[[n,t.closeNavModeMenu]]),La((ue(),fe("div",Bm,[Ce("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((l=t.currentUser)==null?void 0:l.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[7]||(e[7]=(...o)=>t.openUserMenu&&t.openUserMenu(...o))},Ve((((b=t.currentUser)==null?void 0:b.username)||"A").charAt(0).toUpperCase()),9,Km),t.showUserMenu?(ue(),fe("div",Wm,[Ce("div",Um,[Ce("span",Gm,Ve((g=t.currentUser)==null?void 0:g.username),1),((C=t.currentUser)==null?void 0:C.role)==="guest"?(ue(),fe("span",Ym,"访客")):Fe("",!0)]),((D=t.currentUser)==null?void 0:D.role)==="admin"?(ue(),fe("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[8]||(e[8]=o=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[9]||(e[9]=na(Lt(o=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[nt(z,{name:"settings",size:16}),e[19]||(e[19]=Sa(" 重新运行初始化向导 ",-1))],32)):Fe("",!0),((x=t.currentUser)==null?void 0:x.role)!=="guest"?(ue(),fe("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[10]||(e[10]=o=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[11]||(e[11]=na(Lt(o=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[nt(z,{name:"lock",size:16}),e[20]||(e[20]=Sa(" 修改密码 ",-1))],32)):Fe("",!0),e[22]||(e[22]=Ce("div",{class:"qc-user-dropdown-divider"},null,-1)),Ce("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[12]||(e[12]=(...o)=>t.handleLogout&&t.handleLogout(...o)),onKeydown:e[13]||(e[13]=na(Lt((...o)=>t.handleLogout&&t.handleLogout(...o),["prevent"]),["enter"]))},[nt(z,{name:"log-out",size:16}),e[21]||(e[21]=Sa(" 退出登录 ",-1))],32)])):Fe("",!0)])),[[n,t.closeUserMenu]])])])}const Qm=Pa(am,[["render",Jm]]),$m=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],Xm={name:"qc-subnav",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=at(()=>a.currentPage&&a.currentPage.value||""),p=at(()=>a.currentSubPage&&a.currentSubPage.value||""),t=at(()=>a.navMode&&a.navMode.value||"subnav"),f=At({}),v=at(()=>a.menus&&a.menus.value||[]),z=at(()=>v.value.find(x=>x.key===e.value)||null),m=at(()=>z.value&&z.value.subPages||[]),c=at(()=>a.currentPageName&&a.currentPageName.value||e.value),_=x=>a.subPageNames&&a.subPageNames[x]||x,n=x=>p.value===x;function S(x){a.openTab?a.openTab(e.value,x):a.currentSubPage&&(a.currentSubPage.value=x);try{localStorage.setItem("quant_last_subpage",x)}catch{}}function l(x){a.openTab?a.openTab(e.value,x.key):a.currentSubPage&&(a.currentSubPage.value=x.key);try{localStorage.setItem("quant_last_subpage",x.key)}catch{}}function b(x){f.value[x]=!f.value[x]}const g={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}};return{state:a,currentPage:e,currentSubPage:p,navMode:t,subPages:m,currentMenu:z,collapsedGroups:f,pageTitle:c,subLabel:_,isSubActive:n,goSub:S,goSystemItem:l,toggleGroup:b,SYSTEM_GROUPS:$m,subIcon:(x,o)=>g[x]&&g[x][o]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},Zm={key:0,class:"qc-subnav-column","aria-label":"二级导航"},ep={class:"qc-subnav-column-header"},tp={class:"qc-subnav-current-label"},ap={class:"qc-subnav-column-body"},sp=["onClick"],ip=["href","onClick"],lp={class:"qc-subnav-group-label"},np=["href","onClick"],op=["href","onClick"];function rp(a,e,p,t,f,v){const z=Gt("AppIcon");return t.navMode==="subnav"?(ue(),fe("aside",Zm,[Ce("div",ep,[Ce("span",tp,Ve(t.pageTitle),1)]),Ce("div",ap,[t.currentPage==="system"?(ue(!0),fe(it,{key:0},wt(t.SYSTEM_GROUPS,m=>(ue(),fe("div",{key:m.label,class:"qc-subnav-group"},[Ce("div",{class:"qc-subnav-group-label",onClick:c=>t.toggleGroup(m.label)},[Ce("span",null,Ve(m.label),1),nt(z,{name:"chevron-down",size:12,class:ot({"is-open":!t.collapsedGroups[m.label]})},null,8,["class"])],8,sp),t.collapsedGroups[m.label]?Fe("",!0):(ue(!0),fe(it,{key:0},wt(m.items,c=>(ue(),fe("a",{key:c.key,class:ot(["qc-subnav-item",{"is-active":t.isSubActive(c.key)}]),href:"#"+c.key,onClick:Lt(_=>t.goSystemItem(c),["prevent"])},[nt(z,{name:c.icon,size:16},null,8,["name"]),Ce("span",null,Ve(c.label),1)],10,ip))),128))]))),128)):t.currentPage==="shortterm"?(ue(!0),fe(it,{key:1},wt(t.SHORTTERM_GROUPS,m=>(ue(),fe("div",{key:m.label,class:"qc-subnav-group"},[Ce("div",lp,[Ce("span",null,Ve(m.label),1)]),(ue(!0),fe(it,null,wt(m.items,c=>(ue(),fe("a",{key:c,class:ot(["qc-subnav-item",{"is-active":t.isSubActive(c)}]),href:"#"+t.currentPage+"/"+c,onClick:Lt(_=>t.goSub(c),["prevent"])},[nt(z,{name:t.subIcon(t.currentPage,c),size:16},null,8,["name"]),Ce("span",null,Ve(t.subLabel(c)),1)],10,np))),128))]))),128)):(ue(!0),fe(it,{key:2},wt(t.subPages,m=>(ue(),fe("a",{key:m,class:ot(["qc-subnav-item",{"is-active":t.isSubActive(m)}]),href:"#"+t.currentPage+"/"+m,onClick:Lt(c=>t.goSub(m),["prevent"])},[nt(z,{name:t.subIcon(t.currentPage,m),size:16},null,8,["name"]),Ce("span",null,Ve(t.subLabel(m)),1)],10,op))),128))])])):Fe("",!0)}const cp=Pa(Xm,[["render",rp]]),dp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],up={name:"qc-mobile-nav",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=At(!1),p=At(null),t=At({}),f=at(()=>a.menus&&a.menus.value||[]),v=at(()=>a.currentPage&&a.currentPage.value||""),z={research:"量化投研",platform:"平台管理"},m=["research","platform"];function c(o){return Array.isArray(o.subPages)&&o.subPages.length>0}function _(o){c(o)&&(t.value[o.key]=!t.value[o.key])}function n(o,i){return v.value===o.key&&a.currentSubPage&&a.currentSubPage.value===i}function S(o){return a.subPageNames&&a.subPageNames[o]||o}async function l(o){const i=f.value.find(F=>F.key===o.key),u=i&&i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(o.key,u):(a.currentPage.value=o.key,a.currentSubPage&&(a.currentSubPage.value=u)),a.navigateTo&&a.navigateTo(o.key,u)}function b(o,i){e.value=!1;const u=i||o.subPages&&o.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(o.key,u):(a.currentPage.value=o.key,a.currentSubPage&&(a.currentSubPage.value=u)),a.navigateTo&&a.navigateTo(o.key,u)}function g(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function C(){e.value=!1;const o=document.querySelector(".qc-header .qc-icon-btn");o&&o.focus()}function D(o){o.detail&&o.detail.open&&g()}function x(o){e.value&&o.key==="Escape"&&C()}return Ba(()=>{window.addEventListener("qc:drawer",D),document.addEventListener("keydown",x)}),rs(()=>{window.removeEventListener("qc:drawer",D),document.removeEventListener("keydown",x)}),{state:a,TABS:dp,menus:f,currentPage:v,drawerOpen:e,drawerFocusRef:p,drawerExpanded:t,GROUP_LABELS:z,GROUPS:m,hasSub:c,toggleDrawerMenu:_,isDrawerSubActive:n,subLabel:S,goTab:l,goMenu:b,openDrawer:g,closeDrawer:C}}},vp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},mp=["aria-current","onClick"],pp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},fp={class:"qc-drawer-header"},gp={class:"qc-drawer-brand"},hp={class:"qc-drawer-body"},yp={key:0},bp={class:"qc-nav-group-label"},wp=["href","aria-current","onClick"],kp={class:"qc-sidebar-label"},_p=["aria-expanded","onClick"],xp={key:0,class:"qc-drawer-children"},Sp=["href","onClick"],Cp={class:"qc-drawer-footer"},qp=["title"];function Ep(a,e,p,t,f,v){var m,c;const z=Gt("AppIcon");return ue(),fe(it,null,[Ce("nav",vp,[(ue(!0),fe(it,null,wt(t.TABS,_=>(ue(),fe("button",{key:_.key,class:ot(["qc-mobile-tab",{"is-active":t.currentPage===_.key}]),"aria-current":t.currentPage===_.key?"page":null,onClick:n=>t.goTab(_)},[nt(z,{name:_.icon,size:22},null,8,["name"]),Ce("span",null,Ve(_.label),1)],10,mp))),128))]),(ue(),ra(Dd,{to:"body"},[t.drawerOpen?(ue(),fe("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(..._)=>t.closeDrawer&&t.closeDrawer(..._))})):Fe("",!0),t.drawerOpen?(ue(),fe("div",pp,[Ce("div",fp,[Ce("div",gp,[e[4]||(e[4]=Ce("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Ce("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Ce("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Ce("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Ce("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Ce("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Ce("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Ce("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Ce("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Ce("span",null,Ve(t.state.t("login.title")),1)]),Ce("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(..._)=>t.closeDrawer&&t.closeDrawer(..._))},[nt(z,{name:"x",size:18})])]),Ce("div",hp,[(ue(!0),fe(it,null,wt(t.GROUPS,_=>(ue(),fe(it,{key:_},[t.menus.some(n=>n.group===_)?(ue(),fe("div",yp,[Ce("div",bp,Ve(t.GROUP_LABELS[_]),1),(ue(!0),fe(it,null,wt(t.menus.filter(n=>n.group===_),n=>(ue(),fe("div",{key:n.key,class:"qc-drawer-menu"},[Ce("div",{class:ot(["qc-drawer-menu-row",{"is-active":t.currentPage===n.key}])},[Ce("a",{class:ot(["qc-sidebar-item",{"is-active":t.currentPage===n.key}]),href:"#"+n.key,"aria-current":t.currentPage===n.key?"page":null,onClick:Lt(S=>t.hasSub(n)?t.toggleDrawerMenu(n):t.goMenu(n),["prevent"])},[nt(z,{name:n.iconName||"",size:18},null,8,["name"]),Ce("span",kp,Ve(n.name),1)],10,wp),t.hasSub(n)?(ue(),fe("button",{key:0,class:ot(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[n.key]}]),"aria-expanded":!!t.drawerExpanded[n.key],"aria-label":"展开子菜单",onClick:S=>t.toggleDrawerMenu(n)},[nt(z,{name:"chevron-down",size:14})],10,_p)):Fe("",!0)],2),t.drawerExpanded[n.key]?(ue(),fe("div",xp,[(ue(!0),fe(it,null,wt(n.subPages,S=>(ue(),fe("a",{key:S,class:ot(["qc-subnav-item",{"is-active":t.isDrawerSubActive(n,S)}]),href:"#"+n.key+"/"+S,onClick:Lt(l=>t.goMenu(n,S),["prevent"])},[Ce("span",null,Ve(t.subLabel(S)),1)],10,Sp))),128))])):Fe("",!0)]))),128))])):Fe("",!0)],64))),128))]),Ce("div",Cp,[Ce("button",{class:"qc-icon-btn",title:((m=t.state.currentTheme)==null?void 0:m.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=_=>{var n;return t.state.changeThemeMode&&t.state.changeThemeMode(((n=t.state.currentTheme)==null?void 0:n.value)==="dark"?"light":"dark")})},[nt(z,{name:((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,qp),Ce("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=_=>t.state.handleLogout&&t.state.handleLogout())},[nt(z,{name:"log-out",size:18})])])])):Fe("",!0)]))],64)}const Mp=Pa(up,[["render",Ep]]),Tp={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:p}){const t=Ta("qcState");function f(n){e("select",n)}function v(n){const S=n.strategy_names||n.strategies||[],l=S.slice(0,3),b=S.length>3?S.length-3:0,g=l.map(C=>({text:C,more:!1}));return b&&g.push({text:"+"+b,more:!0}),g}function z(n){const S=Number(n);return isFinite(S)?S.toFixed(2):"—"}function m(n){const S=Number(n);return isFinite(S)?(S>0?"+":"")+S.toFixed(2)+"%":"—"}function c(n){const S=Number(n.consensus_level);return isFinite(S)?Math.round(S*100):0}function _(n){const S=Number(n&&n.consensus_level);return isFinite(S)&&S>0}return{state:t,slots:p,select:f,displayTags:v,fmtPrice:z,fmtChange:m,pctOf:c,hasConsensus:_}}},Pp={class:"qc-stock-list"},Dp=["data-copy-code","aria-label","onClick","onKeydown"],Rp={key:0,class:"qc-stock-rank"},zp={class:"qc-stock-info"},Ap={class:"qc-stock-code"},Lp={class:"qc-stock-code-num"},Ip={key:0,class:"qc-stock-status is-new"},Np={key:1,class:"qc-stock-status is-out"},Op={class:"qc-stock-name"},jp={key:0,class:"qc-stock-consensus"},Vp={key:1,class:"qc-stock-tags"},Fp={key:2,class:"qc-stock-badge"},Hp={key:3,class:"qc-stock-data"},Bp={class:"qc-stock-price"},Kp={key:4,class:"qc-stock-extra"},Wp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},Up=["data-copy-code","aria-label","onClick","onKeydown"],Gp={key:0,class:"qc-stock-rank"},Yp={class:"qc-stock-info"},Jp={class:"qc-stock-code"},Qp={class:"qc-stock-code-num"},$p={key:0,class:"qc-stock-status is-new"},Xp={key:1,class:"qc-stock-status is-out"},Zp={class:"qc-stock-name"},ef={key:0,class:"qc-stock-consensus"},tf={key:1,class:"qc-stock-tags"},af={key:2,class:"qc-stock-badge"},sf={key:3,class:"qc-stock-data"},lf={class:"qc-stock-price"},nf={key:4,class:"qc-stock-extra"},of={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function rf(a,e,p,t,f,v){const z=Gt("qc-state-panel"),m=Gt("qc-virtual-list");return ue(),fe("div",Pp,[p.loading?(ue(),ra(z,{key:0,type:"loading"})):p.items.length?(ue(),fe(it,{key:2},[p.virtual?(ue(),ra(m,{key:0,items:p.items,"row-height":p.rowHeight},{default:oa(({item:c,index:_})=>[Ce("div",{class:ot(["qc-stock-row",{"is-active":p.activeCode===c.code}]),"data-copy-code":p.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:n=>t.select(c),onKeydown:[na(Lt(n=>t.select(c),["prevent"]),["enter"]),na(Lt(n=>t.select(c),["prevent"]),["space"])]},[p.showRank?(ue(),fe("div",Rp,Ve(_+1),1)):Fe("",!0),Ce("div",zp,[Ce("div",Ap,[Ce("span",Lp,Ve(c.code),1),c.status==="new"?(ue(),fe("span",Ip,Ve(p.statusText.new),1)):c.status==="out"?(ue(),fe("span",Np,Ve(p.statusText.out),1)):Fe("",!0)]),Ce("div",Op,[Sa(Ve(c.name)+" ",1),ha(a.$slots,"name-suffix",{item:c,index:_})]),p.showConsensus&&t.hasConsensus(c)?(ue(),fe("span",jp,Ve(t.pctOf(c))+"% 共识",1)):Fe("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(ue(),fe("div",Vp,[(ue(!0),fe(it,null,wt(t.displayTags(c),n=>(ue(),fe("span",{key:n.text,class:ot(["qc-stock-tag",{"is-more":n.more}])},Ve(n.text),3))),128))])):Fe("",!0),p.showConsensus?(ue(),fe("span",Fp,Ve(c.strategy_count||0)+" 策略",1)):Fe("",!0),p.showPrice&&c.price!=null?(ue(),fe("div",Hp,[Ce("span",Bp,Ve(t.fmtPrice(c.price)),1),Ce("span",{class:ot(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Ve(t.fmtChange(c.change_pct)),3)])):Fe("",!0),t.slots.extra?(ue(),fe("div",Kp,[ha(a.$slots,"extra",{item:c,index:_})])):Fe("",!0),t.slots.actions?(ue(),fe("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Lt(()=>{},["stop"]))},[ha(a.$slots,"actions",{item:c,index:_})])):Fe("",!0),t.slots.footer?(ue(),fe("div",Wp,[ha(a.$slots,"footer",{item:c,index:_})])):Fe("",!0)],42,Dp)]),_:3},8,["items","row-height"])):(ue(!0),fe(it,{key:1},wt(p.items,(c,_)=>(ue(),fe("div",{key:c.code,class:ot(["qc-stock-row",{"is-active":p.activeCode===c.code}]),"data-copy-code":p.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:n=>t.select(c),onKeydown:[na(Lt(n=>t.select(c),["prevent"]),["enter"]),na(Lt(n=>t.select(c),["prevent"]),["space"])]},[p.showRank?(ue(),fe("div",Gp,Ve(_+1),1)):Fe("",!0),Ce("div",Yp,[Ce("div",Jp,[Ce("span",Qp,Ve(c.code),1),c.status==="new"?(ue(),fe("span",$p,Ve(p.statusText.new),1)):c.status==="out"?(ue(),fe("span",Xp,Ve(p.statusText.out),1)):Fe("",!0)]),Ce("div",Zp,[Sa(Ve(c.name)+" ",1),ha(a.$slots,"name-suffix",{item:c,index:_})]),p.showConsensus&&t.hasConsensus(c)?(ue(),fe("span",ef,Ve(t.pctOf(c))+"% 共识",1)):Fe("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(ue(),fe("div",tf,[(ue(!0),fe(it,null,wt(t.displayTags(c),n=>(ue(),fe("span",{key:n.text,class:ot(["qc-stock-tag",{"is-more":n.more}])},Ve(n.text),3))),128))])):Fe("",!0),p.showConsensus?(ue(),fe("span",af,Ve(c.strategy_count||0)+" 策略",1)):Fe("",!0),p.showPrice&&c.price!=null?(ue(),fe("div",sf,[Ce("span",lf,Ve(t.fmtPrice(c.price)),1),Ce("span",{class:ot(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Ve(t.fmtChange(c.change_pct)),3)])):Fe("",!0),t.slots.extra?(ue(),fe("div",nf,[ha(a.$slots,"extra",{item:c,index:_})])):Fe("",!0),t.slots.actions?(ue(),fe("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Lt(()=>{},["stop"]))},[ha(a.$slots,"actions",{item:c,index:_})])):Fe("",!0),t.slots.footer?(ue(),fe("div",of,[ha(a.$slots,"footer",{item:c,index:_})])):Fe("",!0)],42,Up))),128))],64)):(ue(),ra(z,{key:1,type:"empty",title:p.emptyText},null,8,["title"]))])}const cf=Pa(Tp,[["render",rf]]),ri={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}},df=200,uf={name:"qc-top-tabs",components:{AppIcon:Ca},setup(){const a=Ta("qcState");if(!a)return{};const e=at(()=>a.currentPage&&a.currentPage.value||""),p=at(()=>a.currentSubPage&&a.currentSubPage.value||""),t=at(()=>a.menus&&a.menus.value||[]),f=at(()=>{const i=t.value.find(u=>u.key===e.value);return i&&i.subPages||[]}),v=at(()=>f.value.map(i=>({key:i,label:a.subPageNames&&a.subPageNames[i]||i,icon:ri[e.value]&&ri[e.value][i]||"circle-dot"}))),z=At(null),m=At(!1),c=At(!1),_=At(!1);let n=null,S=null;function l(){const i=z.value;i&&(c.value=i.scrollLeft>2,_.value=i.scrollLeft<i.scrollWidth-i.clientWidth-2)}function b(){const i=z.value;i&&(m.value=i.scrollWidth>i.clientWidth+2,l())}function g(i){const u=z.value;u&&u.scrollBy({left:i*df,behavior:"smooth"})}function C(i){a.openTab?a.openTab(e.value,i):a.currentSubPage&&(a.currentSubPage.value=i)}function D(i){C(i),zd(()=>{const u=z.value;if(!u)return;const F=u.querySelector('[data-tab-key="'+i+'"]');F&&F.scrollIntoView({block:"nearest",inline:"nearest"})})}const x=at(()=>{if(!m.value)return[];const i=z.value;if(!i)return[];const u=i.getBoundingClientRect(),F=new Set;return i.querySelectorAll(".qc-top-tab").forEach(W=>{const Y=W.getBoundingClientRect();Y.left>=u.left-2&&Y.left<u.right-24&&F.add(W.getAttribute("data-tab-key"))}),v.value.filter(W=>!F.has(W.key))});function o(i,u){i.key==="ArrowLeft"?(i.preventDefault(),g(-1)):i.key==="ArrowRight"?(i.preventDefault(),g(1)):(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),C(u.key))}return Ba(()=>{b(),n=new ResizeObserver(()=>{clearTimeout(S),S=setTimeout(b,100)}),z.value&&n.observe(z.value),window.addEventListener("resize",b)}),Rd(()=>{n&&n.disconnect(),window.removeEventListener("resize",b),clearTimeout(S)}),{state:a,tabs:v,currentSubPage:p,go:C,scrollRef:z,hasOverflow:m,canScrollLeft:c,canScrollRight:_,scrollByStep:g,scrollToTab:D,hiddenTabs:x,onTabKeydown:o,updateScrollState:l}}},vf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},mf=["disabled"],pf=["data-tab-key","aria-selected","title","onClick","onKeydown"],ff={class:"qc-top-tab-label"},gf=["disabled"];function hf(a,e,p,t,f,v){const z=Gt("AppIcon"),m=Gt("el-dropdown-item"),c=Gt("el-dropdown-menu"),_=Gt("el-dropdown");return t.tabs.length?(ue(),fe("div",vf,[t.hasOverflow?(ue(),fe("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=n=>t.scrollByStep(-1))},"‹",8,mf)):Fe("",!0),Ce("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...n)=>t.updateScrollState&&t.updateScrollState(...n))},[(ue(!0),fe(it,null,wt(t.tabs,n=>(ue(),fe("div",{key:n.key,"data-tab-key":n.key,class:ot(["qc-top-tab",{"is-active":t.currentSubPage===n.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===n.key?"true":"false",title:n.label,onClick:S=>t.go(n.key),onKeydown:S=>t.onTabKeydown(S,n)},[nt(z,{name:n.icon,size:14},null,8,["name"]),Ce("span",ff,Ve(n.label),1)],42,pf))),128))],544),t.hasOverflow?(ue(),fe("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=n=>t.scrollByStep(1))},"›",8,gf)):Fe("",!0),t.hasOverflow&&t.hiddenTabs.length?(ue(),ra(_,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:oa(()=>[nt(c,null,{default:oa(()=>[(ue(!0),fe(it,null,wt(t.hiddenTabs,n=>(ue(),ra(m,{key:n.key,command:n.key,class:ot({"is-active":t.currentSubPage===n.key})},{default:oa(()=>[nt(z,{name:n.icon,size:14},null,8,["name"]),Sa(" "+Ve(n.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:oa(()=>[e[3]||(e[3]=Ce("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Fe("",!0)])):Fe("",!0)}const yf=Pa(uf,[["render",hf]]);(function(){const{ref:a,computed:e,inject:p}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=p("qcState");if(!t)return{};const f=a(!1),v=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,goMerrill:v,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:f,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(z,m){const c="sub."+z.key+"."+m,_=t.t(c);if(_!==c)return _;const n="sub."+m,S=t.t(n);return S!==n&&S?S:t.subPageNames[m]||m}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:p,computed:t}=Vue,f=p(0),v=p(0),z=p(!1),m=t(()=>{const Y={day:"date",week:"week",month:"month",year:"year"},J=e.currentView&&e.currentView.value||"day";return Y[J]||"date"}),c={day:"日",week:"周",month:"月",year:"年"};function _(Y){return e.t&&e.t("view."+Y)||c[Y]||Y}function n(Y){e.switchView?e.switchView(Y):e.currentView&&(e.currentView.value=Y)}let S=null;function l(Y){const J=Y.touches&&Y.touches[0];J&&(f.value=J.clientX,v.value=J.clientY)}async function b(){if(!z.value){z.value=!0;try{await e.refreshCalendarData()}catch{}S&&clearTimeout(S),S=setTimeout(()=>{z.value=!1},500)}}function g(Y){if(!(window.innerWidth<=768))return;const J=Y.changedTouches&&Y.changedTouches[0];if(!J)return;const Z=window.__quantModules&&window.__quantModules.gestures||{};if((typeof Z.judgePullToRefresh=="function"?Z.judgePullToRefresh(v.value,J.clientY):J.clientY-v.value>=60)&&(window.scrollY||0)<=0){Y.stopPropagation(),b();return}if(e.currentSubPage.value==="pool")return;const M=J.clientX-f.value,A=J.clientY-v.value;Math.abs(M)>50&&Math.abs(M)>Math.abs(A)*1.2&&(e.navigateDate(M<0?1:-1),Y.stopPropagation())}const C=p(!1),D=p(!1),x=p(""),o=p(null),i=p([]);function u(Y){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[Y]||Y}async function F(){if(e.selectedDate.value){C.value=!0,D.value=!0,x.value="",o.value=null,i.value=[];try{const Y=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),J=await Y.json();if(!Y.ok)throw new Error(J.detail||"HTTP "+Y.status);o.value=J;const Z=J&&J.comparison||{},N=[];for(const M of Object.keys(Z)){if(M==="all_intersection")continue;const A=Z[M]||{},U=M.split("_vs_");N.push({label:u(U[0])+" ↔ "+u(U[1]),interCount:A.intersection_count||0,inter:(A.intersection||[]).join(", "),onlyS1Count:A.only_s1_count||0,onlyS1:(A.only_s1||[]).join(", "),onlyS2Count:A.only_s2_count||0,onlyS2:(A.only_s2||[]).join(", ")})}i.value=N}catch(Y){x.value=String(Y&&Y.message?Y.message:Y)}finally{D.value=!1}}}let W="";return Vue.watch(()=>{const Y=e.stockPool,J=Y&&Y.value||[];return{n:J.length,first:J[0]&&J[0].code,split:!!e.detailSplitEnabled.value}},(Y,J)=>{if(!Y.split||!Y.first||Y.n===0)return;const Z=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,N=(e.stockPool.value||[]).some(M=>M.code===Z);if(!Z||!N){if(W===Y.first&&Z&&N===!1&&Y.n>1)return;W=Y.first,e.showStockDetail&&e.showStockDetail(Y.first)}},{immediate:!0}),{...e,calType:m,pullRefreshing:z,onCalTouchStart:l,onCalTouchEnd:g,viewLabel:_,switchViewLocal:n,compareVisible:C,compareLoading:D,compareError:x,compareData:o,comparePairs:i,openStrategyCompare:F}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const e=a("qcState"),p=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let f=0;const v=t(()=>{var q;return((q=e.merrillData)==null?void 0:q.value)||{}}),z=t(()=>{var q;return((q=e.marketData)==null?void 0:q.value)||{}}),m=t(()=>{var q;return((q=e.dashboardData)==null?void 0:q.value)||{}}),c=t(()=>{var q;return((q=e.healthMetrics)==null?void 0:q.value)||[]}),_=t(()=>{var q;return((q=e.filteredConsensusRank)==null?void 0:q.value)||[]}),n=t(()=>{const q={};for(const de of _.value)de.code&&de.name&&(q[de.code]=de.name);return q}),S={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function l(q){return S[q]||q}const b=t(()=>z.value.date||m.value.latest_date||"-"),g=t(()=>{const q=z.value;return!q||Object.keys(q).length===0?"数据加载中...":q.is_trading_day&&q.in_trading_hours?"● 交易中":q.is_trading_day?"已收盘":"○ 非交易日"}),C=t(()=>{const q=v.value.next_stage_prediction;return q&&q.next_stage_name&&q.transition_probability>.2?`→${q.next_stage_name} ${(q.transition_probability*100).toFixed(2)}%`:""}),D=t(()=>{const q=[],de=m.value.pool_changes||{},ke=de.new_count||0;if(ke>0){const We=de.new_stock_names||{},I=(de.new_stocks||[]).map(re=>We[re]||n.value[re]||re).slice(0,4).join("、");q.push({icon:"sparkles",level:"new",text:`今日新入池 ${ke} 只${I?" · "+I:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const We of c.value.filter(I=>I.degraded))q.push({icon:"alert-triangle",level:"warn",text:`数据源 ${l(We.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const xe=v.value.timing;xe&&xe.progress_percent&&xe.progress_percent>100?q.push({icon:"clock",level:"warn",text:`美林「${v.value.name}」已超期 ${xe.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):xe&&xe.maturity&&v.value.name&&q.push({icon:"clock",level:"info",text:`美林「${v.value.name}」阶段成熟度 ${xe.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ae=z.value;return Ae&&Ae.is_trading_day===!1&&Ae.date&&q.push({icon:"calendar",level:"info",text:`${Ae.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),q}),x=t(()=>{const q=[],de=v.value.name||"",ke=v.value.timing||{},xe=["复苏","成长","过热"],Ae=["滞胀","衰退"];xe.some($e=>de.includes($e))&&q.push({kind:"opportunity",source:"美林",text:de+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ae.some($e=>de.includes($e))&&q.push({kind:"risk",source:"美林",text:de+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),ke.progress_percent&&ke.progress_percent>100&&q.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const We=m.value.pool_changes||{},I=(We.new_count||0)-(We.out_count||0);I>=3?q.push({kind:"opportunity",source:"池变动",text:"净入池 +"+I,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):I<=-3&&q.push({kind:"risk",source:"池变动",text:"净出池 "+I,action:()=>{e.currentSubPage.value="consensus"}});const re=z.value.market_sentiment,He=re&&re.text||"";(He.includes("乐观")||He.includes("积极")||He.includes("亢奋"))&&q.push({kind:"opportunity",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}}),(He.includes("悲观")||He.includes("恐慌")||He.includes("低迷"))&&q.push({kind:"risk",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}});for(const $e of c.value.filter(lt=>lt.degraded))q.push({kind:"risk",source:"数据",text:l($e.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return q}),o=t(()=>{var q;return((q=e.merrillTimeline)==null?void 0:q.value)||e.merrillTimeline||{cycles:[]}}),i=t(()=>{var q;return((q=e.timelineLoading)==null?void 0:q.value)||!1}),u=Vue.ref(null),F=Vue.ref(!1),W=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function Y(q){const de=q&&q.currentTarget,ke=document.querySelector(".tl-click-pop");if(!de||!ke)return;const xe=de.getBoundingClientRect(),Ae=ke.offsetWidth||340,We=ke.offsetHeight||220,I=10,re=de.closest(".merrill-timeline-block"),He=re?re.getBoundingClientRect():xe,$e=xe.left-He.left,lt=xe.top-He.top,kt=xe.width,Ft=xe.height,Mt=He.width,St=He.height;let ct=null;$e+kt+I+Ae<=Mt?ct=$e+kt+I:$e-I-Ae>=0?ct=$e-I-Ae:ct=Math.max(8,Math.min($e,Mt-Ae-8));const Dt=lt+Ft/2-We/2,Ot=Math.max(8,Math.min(Dt,St-We-8));W.top=Ot,W.left=ct,W.right=null,W.bottom=null}const J=Vue.computed(function(){const q={};return W.top!=null&&(q.top=W.top+"px"),W.left!=null&&(q.left=W.left+"px"),W.right!=null&&(q.right=W.right+"px"),q});function Z(q,de){let ke=null;const xe=o.value&&o.value.cycles||[];for(const Ae of xe){const We=(Ae.stages||[]).find(I=>I.stage===q&&I.is_current);if(We){ke=We;break}}if(!ke)for(const Ae of xe){const We=(Ae.stages||[]).find(I=>I.stage===q);if(We){ke=We;break}}ke&&(u.value=ke,F.value=!0,Vue.nextTick(function(){Y(de)}))}function N(){F.value=!1,u.value=null}function M(q){const de=e.merrillStagesConfig,xe=(de&&de.value?de.value:de||{})[q]||{};return xe.color||xe.bg_color||"var(--color-primary)"}function A(q){const de=e.merrillStagesConfig,ke=de&&de.value?de.value:de||{};return ke[q]&&ke[q].name||""}function U(){const q=e.merrillStagesConfig;return q&&q.value?q.value:q||{}}function ae(q){return U()[q]&&U()[q].description||""}function $(q){const de=q&&q.stages?q.stages:[];if(!de.length)return"";const ke=de[0]&&de[0].start?String(de[0].start).slice(0,4):"",xe=de[de.length-1]||{},Ae=xe.end?String(xe.end).slice(0,4):xe.start?String(xe.start).slice(0,4):"";return ke||Ae?ke?ke+"–"+Ae:Ae:""}function se(q){const de=q.start?String(q.start).slice(0,4):"",ke=q.end?String(q.end).slice(0,4):de?"至今":"";return de?ke?de+"–"+ke:de:""}function O(q){const de=q.essence||q.trigger||ae(q.stage)||"";return q.highlight?de?de+" · "+q.highlight:q.highlight:de}function H(){const q=v.value.indicators||{},de=v.value.stage||"",ke={recovery:[["PMI",q.pmi],["GDP",q.gdp_growth],["M2",q.m2_growth]],overheat:[["PPI",q.ppi],["CPI",q.cpi],["PMI",q.pmi]],stagflation:[["CPI",q.cpi],["PPI",q.ppi],["GDP",q.gdp_growth]],recession:[["PMI",q.pmi],["GDP",q.gdp_growth],["CPI",q.cpi]]},xe=(ke[de]||ke.recession).filter(Ae=>Ae[1]!=null&&Ae[1]!==0);return xe.length?"实时 · "+xe.map(Ae=>Ae[0]+" "+Ae[1]+"%").join(" ｜ "):""}function L(q,de,ke){const Ae=(U()[q.stage]||{}).color||"var(--color-primary)",We=de||[],I=We.map(kt=>kt.duration_months||0),re=I.reduce((kt,Ft)=>kt+Ft,0),He=re>0?I[ke]/re*100:100/Math.max(1,We.length),$e=ke===0,lt=ke===We.length-1;return{flex:"0 0 "+He+"%",background:Ae,borderRadius:$e?"6px 0 0 6px":lt?"0 6px 6px 0":"0"}}function k(q){const de=q.length;if(de<=4)return[q];const ke=Math.ceil(de/2);return[q.slice(0,ke),q.slice(ke).reverse()]}function T(q){const de=U()[q]||{},ke=de.color||"var(--color-primary)";return{background:de.bg_color||"var(--bg-card)",borderColor:ke,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const le=Vue.reactive({}),G=Vue.ref(null);let h=null,r=null,E=null;function d(){try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((de,ke)=>{const xe=de.querySelector(".tl-stage-rows"),Ae=de.querySelector(".tl-row-top"),We=de.querySelector(".tl-row-bottom"),I=Ae?Array.from(Ae.querySelectorAll(".merrill-stage-chip")):[],re=We?Array.from(We.querySelectorAll(".merrill-stage-chip")).reverse():[],He=I.concat(re);if(!xe||He.length<2){le[ke]={d:"",vb:"0 0 1 1"};return}const $e=xe.getBoundingClientRect(),lt=Math.max(1,$e.width),kt=Math.max(1,$e.height),Ft=I.length,Mt=He.map(ct=>{const Dt=ct.getBoundingClientRect();return{x:Dt.left+Dt.width/2-$e.left,y:Dt.top+Dt.height/2-$e.top}});let St="M "+Mt[0].x.toFixed(1)+" "+Mt[0].y.toFixed(1);for(let ct=1;ct<Mt.length;ct++){const Dt=Mt[ct-1],Ot=Mt[ct];ct===Ft&&(St+=" L "+Dt.x.toFixed(1)+" "+Ot.y.toFixed(1)),St+=" L "+Ot.x.toFixed(1)+" "+Ot.y.toFixed(1)}le[ke]={d:St,vb:"0 0 "+lt.toFixed(1)+" "+kt.toFixed(1)}})}catch(q){console.error("[tl] buildTlPaths error",q)}}function K(q){return le[q]||{d:"",vb:"0 0 1 1"}}function oe(q){G.value=q}function Q(){G.value=null}const P=Vue.ref([]);function w(q){return P.value.indexOf(q)!==-1}function R(q){const de=P.value.slice(),ke=de.indexOf(q);ke!==-1?de.splice(ke,1):de.push(q),P.value=de,Vue.nextTick(function(){d&&d()})}function ie(){const q=document.querySelector(".merrill-timeline-block");if(!q)return;const de=q.querySelector(".tl-spine");de?de.scrollIntoView({behavior:"smooth",block:"end"}):q.scrollIntoView({behavior:"smooth",block:"end"})}const ye=Vue.computed(function(){const q=U();return["recovery","overheat","stagflation","recession","default"].filter(function(ke){return q[ke]&&q[ke].name}).map(function(ke){return{key:ke,name:q[ke].name,color:q[ke].color||"var(--color-primary)"}})});function ve(q){r&&clearTimeout(r),r=setTimeout(()=>{r=null,Vue.nextTick(d)},q||120)}Vue.onMounted(()=>{ve(0),ve(800),h=()=>ve(150),window.addEventListener("resize",h),E=new MutationObserver(()=>ve(120)),E.observe(document.body||document.documentElement,{childList:!0,subtree:!0})}),Vue.onBeforeUnmount(()=>{h&&window.removeEventListener("resize",h),r&&clearTimeout(r),E&&(E.disconnect(),E=null)});const ze=Vue.ref([]),Ie=Vue.ref(null),Pe=Vue.ref(!1),qe=Vue.ref(!1),te=Vue.ref(7),we=Vue.ref(""),De=Vue.ref(""),ne=Vue.computed(()=>{const q=new Set;return(ze.value||[]).forEach(function(de){de.task&&q.add(de.task)}),Array.from(q).sort()}),X=Vue.computed(function(){const q=Ie.value&&Ie.value.success_rate||0;return q>=80?"color-success":q>=50?"color-warning":"color-danger"});function pe(q,de){return q>0&&de/q>=.8?"status-ok":q>0&&de/q>=.5?"status-warn":"status-bad"}async function Ee(){const q=++f;Pe.value=!0,qe.value=!1;try{const de=window.__quantModules&&window.__quantModules.core||{},ke=typeof de.authHeaders=="function"?de.authHeaders():{},xe=new URLSearchParams({days:String(te.value)});we.value&&xe.set("task",we.value),De.value&&xe.set("status",De.value);const[Ae,We]=await Promise.all([fetch("/api/system/execution-history?"+xe.toString(),{headers:ke}).then(function(I){return I.json()}),fetch("/api/system/execution-summary?days="+te.value,{headers:ke}).then(function(I){return I.json()})]);if(q!==f)return;ze.value=Ae&&Ae.data||[],Ie.value=We&&We.data||null}catch(de){console.error("[execution] 执行数据加载失败:",de),qe.value=!0}finally{q===f&&(Pe.value=!1)}}const Ne=window.__quantModules&&window.__quantModules.i18n||{},Ke=typeof Ne.t=="function"?Ne.t:function(q){return String(q)},rt=Vue.ref([]),dt=Vue.ref(null),Qe=Vue.ref(null),Et=Vue.ref(""),ge=Vue.ref([]),be=Vue.ref(!1);let Te=null;const Re=Vue.computed(function(){const q=Qe.value&&Qe.value.dates||[];return q.length&&!Et.value&&(Et.value=q[q.length-1].date),q}),Ge=Vue.computed(function(){const q=(rt.value||[]).find(function(ke){return ke.enabled});if(!q||q.countdown_seconds==null)return"—";const de=q.countdown_seconds;return Math.floor(de/3600)+"h"+String(Math.floor(de%3600/60)).padStart(2,"0")+"m"}),Xe=Vue.computed(function(){const q=(rt.value||[]).find(function(de){return de.enabled});if(!q||q.countdown_seconds==null||q.countdown_seconds<0)return"";try{return new Date(Date.now()+q.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),Ye=Vue.computed(function(){const q=dt.value;return!q||q.phase==="idle"?Ke("exec.waiting"):q.phase==="running"?Ke("exec.running")+(q.current_sid?" · "+q.current_sid:""):q.phase==="done"?Ke("exec.done"):Ke("exec.failed")}),ht=Vue.computed(function(){return dt.value&&dt.value.phase==="running"?"loader":"check-circle-2"}),xt=Vue.computed(function(){const q=Qe.value&&Qe.value.dates||[];return q.length?q[q.length-1].date:"—"}),ft=Vue.computed(function(){const q=Qe.value&&Qe.value.dates||[],de=q[q.length-1];return de&&de.visible?"color-success":"color-danger"}),Ze=Vue.computed(function(){const q=Qe.value&&Qe.value.dates||[],de=q[q.length-1];return de?de.day_view_total:"—"});function jt(q){const de=window.__quantModules&&window.__quantModules.core||{},ke=typeof de.authHeaders=="function"?de.authHeaders():{};return fetch(q,{headers:ke}).then(function(xe){return xe.json()})}async function Nt(){const q=++f;try{const[de,ke,xe]=await Promise.all([jt("/api/strategies/execution/plan"),jt("/api/strategies/execution/status"),jt("/api/strategies/execution/results?days=7")]);if(q!==f)return;rt.value=de&&de.data&&de.data.plans||[],dt.value=ke&&ke.data||null,Qe.value=xe&&xe.data||null,dt.value&&dt.value.phase==="running"?yt():ut()}catch(de){console.error("[execution-monitor] 监控数据加载失败:",de)}}function yt(){ut(),Te=setInterval(function(){jt("/api/strategies/execution/status").then(function(q){dt.value=q&&q.data||null,dt.value&&dt.value.phase!=="running"&&(ut(),Nt())}).catch(function(){})},5e3)}function ut(){Te&&(clearInterval(Te),Te=null)}async function Vt(q){if(!q)return;const de=++f;be.value=!0;try{const ke=await jt("/api/strategies/execution/trace/"+encodeURIComponent(q));if(de!==f)return;const xe=ke&&ke.data||null;ge.value=xe&&xe.steps||[]}catch(ke){console.error("[execution-trace] 追溯加载失败:",ke)}finally{de===f&&(be.value=!1)}}return Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(q){q==="execution"?(Ee(),Nt()):ut()},{immediate:!0}),Vue.watch(function(){const q=e.currentSubPage&&e.currentSubPage.value,de=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],ke=e.marketData&&e.marketData.value||{};return{sub:q,split:!!e.detailSplitEnabled.value,top5:de.slice(0,5),rank:de,indices:(ke.indices||[]).map(function(xe){return xe})}},function(q,de){if(q.split){if(q.sub==="overview"){if(!q.top5.length)return;const ke=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,xe=q.top5.some(function(Ae){return Ae.code===ke});(!ke||!xe)&&e.showStockDetail&&e.showStockDetail(q.top5[0].code)}else if(q.sub==="consensus"){if(!q.rank.length)return;const ke=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,xe=q.rank.some(function(Ae){return Ae.code===ke});(!ke||!xe)&&e.showStockDetail&&e.showStockDetail(q.rank[0].code)}else if(q.sub==="market"){if(!q.indices.length)return;const ke=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,xe=q.indices.some(function(Ae){return Ae.code===ke});(!ke||!xe)&&e.showIndexDetail&&e.showIndexDetail(q.indices[0])}}},{immediate:!0}),{...e,todayText:b,tradingStatus:g,merrillNext:C,todayFocus:D,todaySignals:x,merrillConfigOpen:p,getTimelineStageColor:M,getTimelineStageName:A,getTimelineStageDesc:ae,timelineRows:k,tlChipStyle:T,tlPathFor:K,tlCycleYears:$,tlGanttStyle:L,tlTipYears:se,tlTipBrief:O,tlCurrentBrief:H,tlHoverKey:G,setTlHover:oe,clearTlHover:Q,collapsedCycles:P,isCycleCollapsed:w,toggleCycle:R,scrollToLatest:ie,tlLegendStages:ye,tlClickStage:u,tlClickVisible:F,closeTlClick:N,tlClickPosStyle:J,merrillTimeline:o,timelineLoading:i,showTimelineStage:Z,execHistory:ze,execSummary:Ie,execLoading:Pe,execError:qe,execDays:te,execTaskFilter:we,execStatusFilter:De,execTaskOptions:ne,execSuccessClass:X,loadExecutionData:Ee,execRateClass:pe,execPlan:rt,execStatus:dt,execResults:Qe,execTraceDate:Et,execTraceSteps:ge,execTraceLoading:be,execResultsDates:Re,execCountdownText:Ge,execNextRunText:Xe,execPhaseText:Ye,execStatusIcon:ht,execLastDate:xt,execVisibleClass:ft,execVisibleText:Ze,loadExecutionTrace:Vt}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};function p(I){e.currentSubPage.value=I}function t(){we(),De(),ne()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,I=>{I==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),I==="datadict"&&E(),I==="health"&&T(),I==="notification"&&t()});const f=e.themeHues||[45,220,0,140,270,320],v=e.themeHueNames||{},z=e.themeMode||Vue.computed(()=>"light"),m=e.themeHue||Vue.ref(45);function c(I){e.changeThemeMode&&e.changeThemeMode(I)}function _(I){e.changeThemeHue&&e.changeThemeHue(parseInt(I,10))}function n(I){return e.hueColor?e.hueColor(I):"hsl("+I+", 75%, 42%)"}function S(I){return e.hueName?e.hueName(I):v[I]||"自定义 "+I}function l(I){e.setNavMode&&e.setNavMode(I)}const b=Vue.ref([]),g=Vue.ref(""),C=Vue.ref("read"),D=Vue.ref(""),x=Vue.ref(!1),o=()=>window.__quantModules&&window.__quantModules.core||{},i=Vue.ref([]),u=Vue.ref(!1);async function F(){u.value=!0;try{const I=await fetch("/api/audit/logs?limit=20",{headers:o().authHeaders?o().authHeaders():{}}).then(function(re){if(!re.ok)throw new Error("HTTP "+re.status);return re.json()});i.value=I&&I.logs||[]}catch(I){console.error("[system] 审计加载失败:",I),i.value=[]}finally{u.value=!1}}const W=Vue.ref(!1),Y=Vue.ref(null),J=Vue.ref(null),Z=Vue.ref([]),N=Vue.ref(null);function M(I){return I==="completed"?"完成":I==="running"?"运行中":I==="pending"?"排队中":I==="cancelled"?"已取消":"失败"}async function A(){try{const re=await(await fetch("/api/jobs?limit=20")).json();re&&re.success&&(Z.value=re.data&&re.data.tasks||[])}catch(I){console.warn("[system] 加载任务队列失败:",I)}}async function U(I){try{await fetch("/api/jobs/"+I+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),A()}catch(re){console.warn("[system] 取消任务失败:",re)}}function ae(){A(),N.value=window.setInterval(A,15e3)}const $=Vue.ref({items:[]}),se=Vue.ref([]),O=Vue.ref(null),H=Vue.ref({data_sources:[],alerts:[]}),L=function(){return o().authHeaders?o().authHeaders():{}},k=function(I){return fetch(I,{headers:L()}).then(function(re){if(!re.ok)throw new Error("HTTP "+re.status);return re.json()})};async function T(){W.value=!0,Y.value=null;try{const[I,re,He,$e]=await Promise.all([k("/api/reliability/freshness"),k("/api/reliability/heal-history?limit=20"),k("/api/reliability/startup-report"),k("/api/reliability/source-health")]);$.value=I&&I.data||{items:[]},se.value=re&&re.data||[],O.value=He&&He.data||null,H.value=$e||{data_sources:[],alerts:[]},J.value=new Date().toLocaleTimeString()}catch(I){console.warn("[health] 加载失败:",I),Y.value="健康数据加载失败: "+(I.message||""),$.value={items:[]},se.value=[]}finally{W.value=!1}}const le=Vue.ref(!1),G=Vue.ref(""),h=Vue.ref(""),r=Vue.ref({fields:[]});async function E(){le.value=!0,G.value="";try{const I="/api/data-dict"+(h.value?"?category="+h.value:""),re=await k(I);r.value=re&&re.data||{fields:[]}}catch(I){console.warn("[dict] 加载失败:",I),G.value="数据字典加载失败: "+(I.message||""),r.value={fields:[]}}finally{le.value=!1}}function d(I){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[I]||"var(--text-secondary)"}function K(I){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[I]||I}const oe=Vue.computed(()=>($.value?$.value.items||[]:[]).filter(re=>re.status==="stale"||re.status==="missing").length),Q=Vue.ref("rules"),P=Vue.ref([]),w=Vue.ref([]),R=Vue.ref([]),ie=Vue.ref(!1),ye=Vue.ref(""),ve=Vue.ref("price_above"),ze=Vue.ref(""),Ie=Vue.ref(!1),Pe=Vue.ref(60),qe=Vue.ref("");function te(I){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[I]||I}async function we(){ie.value=!0;try{const I=await(await fetch("/api/alerts/rules")).json();P.value=I&&I.rules||[]}catch(I){qe.value="规则加载失败: "+I}finally{ie.value=!1}}async function De(){ie.value=!0;try{const I=await(await fetch("/api/alerts/history?limit=50")).json();w.value=I&&I.history||[]}catch(I){qe.value="历史加载失败: "+I}finally{ie.value=!1}}async function ne(){ie.value=!0;try{const I=await(await fetch("/api/alerts/channels")).json(),re=await(await fetch("/api/alerts/silence")).json();R.value=I&&I.channels||[],Ie.value=!!(re&&re.silenced)}catch(I){qe.value="通道状态加载失败: "+I}finally{ie.value=!1}}function X(I){Q.value=I,I==="rules"?we():I==="history"?De():ne()}async function pe(){const I=ye.value.trim();if(!I){qe.value="请填写股票代码";return}ie.value=!0;try{const re={stock_code:I,rule_type:ve.value};if(ve.value!=="new_pool"){const $e=Number(ze.value);if(isNaN($e)){qe.value="阈值必须为数值";return}re.threshold=$e}const He=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(re)})).json();He&&He.rule?(qe.value="规则已添加",ye.value="",ze.value="",we()):qe.value=He&&He.detail||"添加失败"}catch(re){qe.value="添加失败: "+re}finally{ie.value=!1}}async function Ee(I){try{await fetch("/api/alerts/rules/"+I.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!I.enabled})}),I.enabled=!I.enabled}catch(re){qe.value="切换失败: "+re}}async function Ne(I){try{const re=await(await fetch("/api/alerts/rules/"+I.id,{method:"DELETE"})).json();re&&re.success?(qe.value="规则已删除",we()):qe.value="删除失败"}catch(re){qe.value="删除失败: "+re}}async function Ke(){try{const I=Ie.value?Pe.value:0,re=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:I})})).json();Ie.value=!!(re&&re.silenced),qe.value=Ie.value?"已静默":"已恢复推送"}catch(I){qe.value="静默设置失败: "+I}}async function rt(){Ie.value=!1,await Ke()}function dt(I){return!!I&&!I.degraded}const Qe=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((re,He)=>Math.max(re,He.views||0),0)||1),Et=()=>o().OPENAPI_ROUTE_BASE||"/api/openapi";async function ge(){x.value=!0;try{const I=await o().apiFetch(Et()+"/keys");b.value=I&&I.data||[]}catch(I){ElementPlus.ElMessage.error("加载 API Key 失败: "+(I.message||""))}finally{x.value=!1}}async function be(){try{const I=await o().apiFetch(Et()+"/keys",{method:"POST",body:JSON.stringify({name:g.value||"未命名",role:C.value||"read",expire_days:365})});I&&I.success?(D.value=I.api_key||"",g.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await ge()):ElementPlus.ElMessage.error(I&&(I.detail||I.message)||"生成失败")}catch(I){ElementPlus.ElMessage.error("生成失败: "+(I.message||""))}}async function Te(){if(D.value)try{await navigator.clipboard.writeText(D.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Re(I){try{const re=await o().apiFetch(Et()+"/keys/"+I.id,{method:"DELETE"});re&&re.success?(ElementPlus.ElMessage.success("Key 已吊销"),D.value&&I.prefix&&D.value.includes(I.prefix)&&(D.value=""),await ge()):ElementPlus.ElMessage.error(re&&(re.detail||re.message)||"吊销失败")}catch(re){ElementPlus.ElMessage.error("吊销失败: "+(re.message||""))}}const Ge={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Xe(I){return Ge[I]||I}const Ye=computed(()=>{var I;return(((I=e.healthMetrics)==null?void 0:I.value)||[]).map(re=>({name:Xe(re.name),source:re.name,success_rate:re.success_rate,avg_latency_ms:re.avg_latency_ms,calls:re.calls||0,degraded:!!re.degraded,data_age_hours:re.data_age_hours!=null?re.data_age_hours:null,stale:!!re.stale,last_fetch:re.last_fetch||re.last_success||null}))});function ht(I){return I.degraded?"degraded":I.success_rate==null?"unknown":I.success_rate>=90?"ok":I.success_rate>=60?"warn":"bad"}function xt(I){return I==null?"":I<1?"刚刚":I<24?Math.round(I)+"小时前":Math.floor(I/24)+"天前"}const ft=e.aiUsage||Vue.ref({}),Ze=Vue.computed(()=>{const I=ft.value&&ft.value.by_model||{};return Object.entries(I).map(([re,He])=>({name:re,count:He})).sort((re,He)=>He.count-re.count)}),jt=Vue.computed(()=>Ze.value.reduce((I,re)=>Math.max(I,re.count),0)||1),Nt=Vue.computed(()=>Ze.value.reduce((I,re)=>I+re.count,0)||1),yt=Vue.computed(()=>ut.value.reduce((I,re)=>Math.max(I,re.count),0)||0),ut=Vue.computed(()=>{const I=ft.value&&ft.value.by_day||{},re=[],He=new Date;for(let $e=29;$e>=0;$e--){const lt=new Date(He.getFullYear(),He.getMonth(),He.getDate()-$e),kt=lt.getFullYear()+"-"+String(lt.getMonth()+1).padStart(2,"0")+"-"+String(lt.getDate()).padStart(2,"0");re.push({day:kt,count:I[kt]||0})}return re}),Vt=Vue.computed(()=>ut.value.reduce((I,re)=>Math.max(I,re.count),0)||1),q=Vue.computed(()=>{const I=ft.value&&ft.value.by_day||{},re=new Date,He=re.getFullYear()+"-"+String(re.getMonth()+1).padStart(2,"0")+"-"+String(re.getDate()).padStart(2,"0");return I[He]||0}),de=Vue.computed(()=>{const I=ft.value&&ft.value.by_day||{},re=Object.keys(I).filter(He=>(I[He]||0)>0);return re.length?re[re.length-1]:""});function ke(I){e.analyticsDays&&(e.analyticsDays.value=I),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const xe='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ae='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function We(I){return I?Ae:xe}return ae(),{...e,themeHues:f,themeHueNames:v,themeMode:z,themeHue:m,onThemeModeChange:c,setThemeHue:_,hueColor:n,hueName:S,onNavModeChange:l,analyticsMaxViews:Qe,aiModelRank:Ze,aiModelMax:jt,aiDayTrend:ut,aiDayMax:Vt,todayAiCalls:q,lastAiCallDay:de,aiTotal:Nt,aiDayPeak:yt,setAnalyticsDays:ke,viewIcon:We,openApiKeys:b,openApiKeyName:g,openApiKeyRole:C,newOpenApiKey:D,openApiLoading:x,loadOpenApiKeys:ge,generateOpenApiKey:be,copyOpenApiKey:Te,revokeOpenApiKey:Re,healthRows:Ye,healthClass:ht,fmtAge:xt,staleAssetCount:oe,jobQueue:Z,loadJobQueue:A,cancelJob:U,jobStatusText:M,auditLogs:i,auditLoading:u,loadAuditLogs:F,healthLoading:W,healthError:Y,healthUpdatedAt:J,freshnessData:$,healHistory:se,startupReport:O,sourceHealth:H,refreshHealth:T,statusColor:d,statusLabel:K,sourceOk:dt,dictLoading:le,dictError:G,dictCategory:h,dictData:r,loadDataDict:E,ncTab:Q,ncRules:P,ncHistory:w,ncChannels:R,ncLoading:ie,ncNewCode:ye,ncNewType:ve,ncNewThreshold:ze,ncSilence:Ie,ncSilenceMinutes:Pe,ncMsg:qe,ncTypeLabel:te,onNcTab:X,loadAlertRules:we,loadAlertHistory:De,loadAlertChannels:ne,addAlertRule:pe,toggleAlertRule:Ee,removeAlertRule:Ne,applySilence:Ke,clearSilence:rt,goSystemSub:p}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:e,watch:p,onUnmounted:t}=Vue,f=a("qcState");if(!f)return{};function v(){if(!f.hasMoreAiHistory||!f.loadMoreAiHistory||f.currentPage.value!=="ai"||f.currentSubPage.value!=="history")return;const w=document.documentElement;w.scrollTop+window.innerHeight>=w.scrollHeight-300&&f.loadMoreAiHistory()}window.addEventListener("scroll",v,{passive:!0}),t(()=>window.removeEventListener("scroll",v));const z=e(null),m=e(!1),c=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function _(w){return!w||w.total===0||w.rate===null||w.rate===void 0?"--":w.rate.toFixed(2)+"%"}const n=e(5);function S(w){n.value=w}function l(w,R){if(!w)return"--";if(w.available===!1)return"— 数据不可达";const ie=w["hit_n"+R];return ie===!0?"✓ 命中":ie===!1?"✗ 未中":"– 中性/待验证"}async function b(){m.value=!0;try{const R=await(await fetch("/api/ai/track")).json();z.value=R&&R.success?R.data:null}catch(w){console.warn("[eval-track] 评估命中率加载失败:",w),z.value=null}finally{m.value=!1}}p(function(){return f.currentPage.value+"/"+f.currentSubPage.value},function(w){w==="ai/evaluation-analysis"&&b()},{immediate:!0});const g=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:C,summary:D,trades:x,loading:o,loadError:i,showAddForm:u,addForm:F,addSaving:W,tradeFormVisible:Y,tradeForm:J,tradeSaving:Z,portfolioTab:N,equityDays:M,equityLoading:A,equityNote:U,equityHasData:ae,loadPortfolio:$,addPosition:se,removePosition:O,openTradeForm:H,submitTrade:L,loadTrades:k,loadEquity:T,fmtSigned:le,fmtSignedPct:G,signClass:h,riskTab:r,riskLoading:E,riskNote:d,riskHasData:K,riskData:oe,riskMetricList:Q,loadRisk:P}=g;return p(C,function(w){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((w||[]).map(function(R){return{code:R.stock_code,name:R.stock_name||R.stock_code}}))},{deep:!0}),p(function(){return f.currentPage.value+"/"+f.currentSubPage.value},function(w){w==="ai/portfolio"?($(),k(),T(M?M.value:30),typeof P=="function"&&P()):w==="ai/overview"&&$()},{immediate:!0}),{...f,trackData:z,trackLoading:m,trackWindows:c,fmtTrackRate:_,loadTrack:b,trackWindow:n,setTrackWindow:S,trackHitText:l,positions:C,summary:D,trades:x,loading:o,loadError:i,showAddForm:u,addForm:F,addSaving:W,tradeFormVisible:Y,tradeForm:J,tradeSaving:Z,portfolioTab:N,equityDays:M,equityLoading:A,equityNote:U,equityHasData:ae,loadPortfolio:$,addPosition:se,removePosition:O,openTradeForm:H,submitTrade:L,loadTrades:k,loadEquity:T,fmtSigned:le,fmtSignedPct:G,signClass:h,riskTab:r,riskLoading:E,riskNote:d,riskHasData:K,riskData:oe,riskMetricList:Q,loadRisk:P}}}})();(function(){const{ref:a,computed:e,watch:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                                            <span>赚钱 <b>{{ fmtPct(item.summary && item.summary.money_effect) }}</b></span>
                                            <span>情绪 <b>{{ fmtEmotion(item.summary && item.summary.emotion_score) }}</b></span>
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
                </div>`,setup(){const f=t("qcState"),v=Vue.ref(!1),z=Vue.ref(!1);let m=0;if(!f)return{};const c=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function _(y){c.value=y;try{localStorage.setItem("quant_strategy_mode",y)}catch{}f.currentSubPage.value="strategy-manage"}const n=a([]),S=a(!1),l=a(!1),b=a(""),g=a(null),C=a(!1),D=a(!1);async function x(){const y=++m;S.value=!0,l.value=!1;try{const s=await fetch("/api/market/reviews?limit=30",{headers:I()}).then(V=>V.json());if(y!==m)return;s&&s.success?n.value=Array.isArray(s.data)?s.data:[]:l.value=!0}catch(s){console.error("[market-review] 复盘列表加载失败:",s),l.value=!0}finally{y===m&&(S.value=!1)}}function o(y){b.value=y,Y(y)}function i(y){b.value===y?W():o(y)}function u(y){return y==null||isNaN(Number(y))?"—":(Number(y)>=0?"+":"")+Number(y).toFixed(2)+"%"}function F(y){return y==null||isNaN(Number(y))?"—":Number(y).toFixed(2)}function W(){b.value="",g.value=null,D.value=!1}async function Y(y){const s=++m;C.value=!0,D.value=!1,g.value=null;try{const V=y?"/api/market/review?date="+encodeURIComponent(y):"/api/market/review",ee=await fetch(V,{headers:I()}).then(_e=>_e.json());if(s!==m)return;ee&&ee.success?g.value=ee.data:D.value=!0}catch(V){console.error("[market-review] 复盘详情加载失败:",V),D.value=!0}finally{s===m&&(C.value=!1)}}function J(y){return y>0?"up":y<0?"down":"flat"}function Z(y){return y==null||isNaN(Number(y))?"—":(y>0?"+":"")+Number(y).toFixed(2)+"%"}function N(y){const s={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(y||{}).map(function(V){const ee=V[0],_e=V[1],Se=!_e||_e==="unavailable"||_e==="数据不可达";return{label:s[ee]||ee,value:Se?"数据不可达":_e,unavailable:Se}})}const M=a([]),A=a(!1),U=a(!1),ae=a(""),$=a(""),se=a(""),O=a({}),H=a(!1),L=a(""),k=a(""),T=a([]),le=a([]),G=a(""),h=a(""),r=a(!0),E=a(!0),d=a("20:00"),K=a("default"),oe=a(!1),Q=a(""),P=e(function(){return M.value.find(function(y){return y.id===se.value})||null});async function w(y,s){s=s||{},s.headers=Object.assign({},s.headers||{});const V=localStorage.getItem("quant_token")||"";return V&&(s.headers.Authorization="Bearer "+V),fetch(y,s)}async function R(){const y=++m;A.value=!0,U.value=!1,ae.value="",$.value="";try{const s=await w("/api/strategies").then(function(ee){return ee.json()});if(y!==m)return;let V=null;Array.isArray(s)?V=s:s&&Array.isArray(s.strategies)?(V=s.strategies,s.warn&&($.value=String(s.warn))):(U.value=!0,ae.value=s&&s.detail?String(s.detail):"策略列表加载失败（接口返回异常）"),V!==null&&(M.value=V,M.value.length&&!se.value&&(se.value=M.value[0].id,ie()))}catch(s){console.error("[research] 策略列表加载失败:",s),U.value=!0,ae.value="策略列表加载失败: "+(s&&s.message||"网络错误")}finally{y===m&&(A.value=!1)}}function ie(){const y=P.value;y&&(O.value={},y.schema.forEach(function(s){O.value[s.key]=s.default}),k.value="",X(),ye(),Pe())}async function ye(){if(!se.value){le.value=[];return}try{const y=await w("/api/strategies/"+se.value+"/profiles").then(function(s){return s.json()});le.value=y&&y.data&&y.data.profiles||[],G.value=""}catch(y){console.error("[research] 方案列表加载失败:",y),le.value=[]}}async function ve(){v.value=!0;const y=(h.value||"").trim();if(!y){window._core&&window._core.showToast("请输入方案名称");return}try{const s=await w("/api/strategies/"+se.value+"/profiles",{method:"POST",body:JSON.stringify({name:y,params:O.value})}).then(function(V){return V.json()});if(s&&s.detail){window._core&&window._core.showToast(String(s.detail));return}h.value="",await ye(),window._core&&window._core.showToast("方案已保存")}catch(s){console.error("[research] 方案保存失败:",s),window._core&&window._core.showToast("方案保存失败")}}function ze(){const y=le.value.find(function(s){return s.id===G.value});y&&(Object.keys(y.params||{}).forEach(function(s){O.value[s]=y.params[s]}),window._core&&window._core.showToast("已应用方案: "+y.name))}async function Ie(){if(G.value)try{await w("/api/strategies/"+se.value+"/profiles/"+G.value,{method:"DELETE"}).then(function(y){return y.json()}),await ye(),window._core&&window._core.showToast("方案已删除")}catch(y){console.error("[research] 方案删除失败:",y)}}async function Pe(){try{const y=await w("/api/strategies/governance").then(function(ee){return ee.json()}),V=(y&&y.data&&y.data.strategies||{})[se.value]||{};r.value=V.enabled!==!1,d.value=V.schedule||"20:00",K.value=V.universe==="all"?"all":"default",E.value=V.show_in_calendar!==!1,Q.value=V.last_holdings||""}catch(y){console.error("[research] 纳管状态加载失败:",y)}}async function qe(){try{await w("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const y={};return y[se.value]={enabled:r.value,schedule:d.value,universe:K.value,show_in_calendar:E.value},y}()})}).then(function(y){return y.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(y){console.error("[research] 纳管更新失败:",y)}}async function te(){if(se.value){oe.value=!0;try{const y=await w("/api/strategies/"+se.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:L.value||void 0})}).then(function(s){return s.json()});if(y&&y.detail){window._core&&window._core.showToast(String(y.detail));return}window._core&&window._core.showToast("持仓已生成"),await Pe()}catch(y){console.error("[research] run-once 失败:",y),window._core&&window._core.showToast("持仓生成失败")}finally{oe.value=!1}}}function we(){Q.value&&window.open(Q.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function De(){const y=P.value;if(!y)return;const s=(h.value||"").trim()||y.name+"-副本";ne(s,Object.assign({},O.value)),window._core&&window._core.showToast("已复制为副本方案: "+s)}async function ne(y,s){try{await w("/api/strategies/"+se.value+"/profiles",{method:"POST",body:JSON.stringify({name:y,params:s})}).then(function(V){return V.json()}),await ye()}catch(V){console.error("[research] 副本保存失败:",V)}}async function X(){const y=++m;if(se.value)try{const s=await w("/api/strategies/"+se.value+"/runs?limit=5").then(function(V){return V.json()});if(y!==m)return;T.value=Array.isArray(s)?s:[]}catch{T.value=[]}}async function pe(){if(se.value){H.value=!0;try{const y=await w("/api/strategies/"+se.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:O.value,as_of:L.value||void 0})}).then(function(s){return s.json()});y&&y.status==="success"?X():alert("运行失败: "+(y.detail||JSON.stringify(y)))}catch(y){console.error("[research] 策略运行失败:",y),alert("运行失败: "+y.message)}finally{H.value=!1}}}async function Ee(){if(se.value)try{const y=Object.keys(O.value).map(function(V){return encodeURIComponent(V)+"="+encodeURIComponent(O.value[V])}).join("&"),s=await w("/api/strategies/"+se.value+"/ptrade-code?"+y).then(function(V){return V.json()});s&&s.code?k.value=s.code:alert("导出失败: "+(s.detail||JSON.stringify(s)))}catch(y){console.error("[research] PTrade 导出失败:",y),alert("导出失败: "+y.message)}}function Ne(){if(!k.value)return;const y=document.createElement("textarea");y.value=k.value,document.body.appendChild(y),y.select();try{document.execCommand("copy")}catch{}document.body.removeChild(y)}p(function(){return f.currentPage.value+"/"+f.currentSubPage.value},function(y){y==="research/research-overview"&&(R(),x(),re(),aa()),(y==="research/market-review"||y==="shortterm/market-review")&&!b.value&&x(),y==="research/quant-research"&&R(),y==="research/backtest-history"&&Me()},{immediate:!0});const Ke=a("mom20"),rt=a(!1),dt=a(!1),Qe=a(null),Et=a(null),ge=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],be=a('{"top_n":[10,20,30]}'),Te=a(null),Re=a(""),Ge=a(!1),Xe=a(null);async function Ye(){if(!se.value){ElementPlus.ElMessage.warning("请先选择策略");return}let y;try{y=JSON.parse(be.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!y||Object.keys(y).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Ge.value=!0,Te.value=null,Re.value="";try{const s=await fetch("/api/strategies/"+se.value+"/sweep",{method:"POST",headers:I(),body:JSON.stringify({param_grid:y})}).then(function(V){return V.json()});s&&Array.isArray(s.results)?(Te.value=s.results,Re.value="完成 "+s.count+" 组"+(s.data_degraded?" (数据不可达, 结果降级)":""),Xe.value=s.param_stability||null):Re.value=s&&s.detail||"扫描失败"}catch(s){console.error("[sweep]",s),Re.value="扫描失败: "+s.message}finally{Ge.value=!1}}async function ht(){const y=++m;rt.value=!0;try{const s=await w("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:se.value||"multi_factor",factor_key:Ke.value,params:O.value||{}})}).then(function(ee){return ee.json()}),V=s&&s.report?s.report.n1||{}:{};Qe.value=V}catch(s){console.error("[research] 因子IC分析失败:",s),alert("因子 IC 分析失败: "+s.message)}finally{y===m&&(rt.value=!1)}}async function xt(){const y=++m;dt.value=!0;try{const s=await w("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:se.value||"multi_factor",factor_key:Ke.value,params:O.value||{}})}).then(function(V){return V.json()});s&&s.layers?Et.value=s:alert("分层回测: "+(s.message||"无数据"))}catch(s){console.error("[research] 分层回测失败:",s),alert("分层回测失败: "+s.message)}finally{y===m&&(dt.value=!1)}}const ft=a(null),Ze=a(!1);async function jt(){const y=++m;Ze.value=!0,ft.value=null;try{const s=await w("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:se.value||"multi_factor",factor_key:Ke.value,params:O.value||{}})}).then(function(V){return V.json()});s&&s.detail?ft.value=s.detail:alert("因子详情: "+(s.message||"无数据"))}catch(s){console.error("[research] 因子详情失败:",s),alert("因子详情失败: "+s.message)}finally{y===m&&(Ze.value=!1)}}const Nt=a([]),yt=a(null),ut=a(null),Vt=a(null),q=a(""),de=a(!1),ke=a(!1),xe=a(""),Ae=a(""),We=a("");function I(){const y=localStorage.getItem("quant_token")||"";return y?{Authorization:"Bearer "+y,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function re(){const y=++m;try{const s=await fetch("/api/strategies/variants",{headers:I()}).then(function(V){return V.json()});if(y!==m)return;Nt.value=s&&s.data&&s.data.variants||[]}catch(s){console.error("[i3a] 加载 variants 失败:",s)}}async function He(){if(!se.value){xe.value="请先在量化研究选择母本策略";return}ke.value=!0,xe.value="";try{const y=await fetch("/api/strategies/"+se.value+"/clone",{method:"POST",headers:I(),body:JSON.stringify({name:(h.value||"").trim()||void 0,params:Object.assign({},O.value)})}).then(function(V){return V.json()});if(y&&y.detail){xe.value=String(y.detail);return}const s=y&&y.data;s&&s.sid&&(yt.value=s.sid,xe.value="已复制为新策略: "+s.name,await re(),await lt(s.sid))}catch(y){console.error("[i3a] 复制失败:",y),xe.value="复制失败: "+y.message}finally{ke.value=!1}}async function $e(y){yt.value=y,xe.value="",q.value="",await lt(y)}async function lt(y){try{const s=await fetch("/api/strategies/"+y+"/selection-spec",{headers:I()}).then(function(V){return V.json()});s&&s.data&&s.data.spec&&(ut.value=Object.assign({},s.data.spec),Vt.value=s.data.fields,Ae.value=(s.data.spec.industry_scope||[]).join(","),We.value=(s.data.spec.market_cap_range||[]).join(","))}catch(s){console.error("[i3a] 加载 spec 失败:",s)}}async function kt(){if(z.value=!0,!(!yt.value||!ut.value))try{ut.value.industry_scope=Ae.value?Ae.value.split(/[,，]/).map(function(s){return s.trim()}).filter(Boolean):[],ut.value.market_cap_range=We.value?We.value.split(/[,，]/).map(Number).filter(function(s){return!isNaN(s)}):[];const y=await fetch("/api/strategies/"+yt.value+"/selection-spec",{method:"PUT",headers:I(),body:JSON.stringify({spec:ut.value})}).then(function(s){return s.json()});y&&y.data&&y.data.spec&&(ut.value=y.data.spec,xe.value="SelectionSpec 已保存")}catch(y){console.error("[i3a] 保存 spec 失败:",y),xe.value="保存失败"}}async function Ft(){if(!yt.value){xe.value="请先选择/创建微调策略";return}ke.value=!0,xe.value="";try{const y=await fetch("/api/strategies/"+yt.value+"/run-once",{method:"POST",headers:I(),body:"{}"}).then(function(s){return s.json()});xe.value=y&&y.detail?String(y.detail):"持仓已生成: "+(y&&y.data&&y.data.symbols||0)+" 只"}catch(y){console.error("[i3a] run-once 失败:",y),xe.value="生成持仓失败"}finally{ke.value=!1}}async function Mt(){if(!yt.value){xe.value="请先选择/创建微调策略";return}ut.value||await lt(yt.value),de.value=!0,xe.value="";try{const y=await fetch("/api/strategies/"+yt.value+"/ai-trade-code",{method:"POST",headers:I(),body:JSON.stringify({spec:ut.value})}).then(function(s){return s.json()});if(y&&y.detail){xe.value=String(y.detail);return}y&&y.data&&(q.value=y.data.code||"",y.data.api_errors&&y.data.api_errors.length?xe.value="生成成功(含 API 校验告警 "+y.data.api_errors.length+" 条)":xe.value="AI 交易码已生成, 已通过矩阵内校验")}catch(y){console.error("[i3a] AI 交易码失败:",y),xe.value="AI 生成失败: "+y.message}finally{de.value=!1}}function St(){if(q.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(q.value).then(function(){xe.value="代码已复制"});else{const y=document.createElement("textarea");y.value=q.value,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y),xe.value="代码已复制"}}const ct=a(""),Dt=a(""),Ot=a([]),_t=a(""),Yt=a(""),vt=a(""),bt=a(null),Bt=a(!1),gt=a(!1),tt=a(!1);function Ht(){const y=localStorage.getItem("quant_token")||"";return y?{Authorization:"Bearer "+y,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function aa(){const y=++m;try{const s=await fetch("/api/strategies/custom",{headers:Ht()}).then(function(V){return V.json()});if(y!==m)return;Ot.value=s&&s.data&&s.data.customs||[]}catch(s){console.error("[i3b] 加载自定义策略失败:",s)}}async function da(){if(!Dt.value.trim()){vt.value="请描述策略思路";return}Bt.value=!0,vt.value="";try{const y=await fetch("/api/strategies/custom",{method:"POST",headers:Ht(),body:JSON.stringify({name:ct.value.trim()||"自定义策略",prompt:Dt.value})}).then(function(s){return s.json()});if(y&&y.detail){vt.value=String(y.detail);return}y&&y.data&&(Yt.value=y.data.code||"",vt.value="AI 代写成功: "+y.data.sid+(y.data.api_errors&&y.data.api_errors.length?" (API 告警 "+y.data.api_errors.length+" 条)":" (校验通过)"),await aa())}catch(y){console.error("[i3b] AI 代写失败:",y),vt.value="AI 代写失败: "+y.message}finally{Bt.value=!1}}async function la(){if(_t.value)try{const y=await fetch("/api/strategies/custom/"+_t.value+"/code",{headers:Ht()}).then(function(s){return s.json()});y&&y.data&&(Yt.value=y.data.code||"",vt.value="")}catch(y){console.error("[i3b] 读取代码失败:",y)}}async function Xt(){if(!_t.value){vt.value="请先选择自定义策略";return}gt.value=!0,vt.value="";try{const y=await fetch("/api/strategies/custom/"+_t.value+"/backtest",{method:"POST",headers:Ht(),body:"{}"}).then(function(s){return s.json()});if(y&&y.detail){vt.value=String(y.detail);return}y&&y.data&&(bt.value=y.data,vt.value="回测完成")}catch(y){console.error("[i3b] 回测失败:",y),vt.value="回测失败: "+y.message}finally{gt.value=!1}}async function ua(){if(!_t.value){vt.value="请先选择自定义策略";return}tt.value=!0,vt.value="";try{const y=await fetch("/api/strategies/custom/"+_t.value+"/ai-optimize",{method:"POST",headers:Ht(),body:JSON.stringify({backtest:bt.value})}).then(function(s){return s.json()});if(y&&y.detail){vt.value=String(y.detail);return}y&&y.data&&(Yt.value=y.data.code||"",vt.value="AI 优化完成"+(y.data.api_errors&&y.data.api_errors.length?" (API 告警 "+y.data.api_errors.length+" 条)":" (校验通过)"))}catch(y){console.error("[i3b] AI 优化失败:",y),vt.value="AI 优化失败: "+y.message}finally{tt.value=!1}}function va(){if(Yt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Yt.value).then(function(){vt.value="代码已复制"});else{const y=document.createElement("textarea");y.value=Yt.value,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y),vt.value="代码已复制"}}const Qt=Vue.ref([]),j=Vue.ref(!1),he=Vue.ref(!1),Oe=Vue.ref(30);async function Me(){const y=++m;j.value=!0,he.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},V=typeof s.authHeaders=="function"?s.authHeaders():{},ee=await fetch("/api/backtest/history?days="+Oe.value,{headers:V}).then(function(_e){return _e.json()});if(y!==m)return;Qt.value=ee&&ee.data||[]}catch(s){console.error("[backtest] 回测历史加载失败:",s),he.value=!0}finally{y===m&&(j.value=!1)}}const st=Vue.ref([]),et=Vue.ref(!1),Rt=Vue.ref(!1),Kt=Vue.ref(""),Tt=Vue.ref([]),ma=Vue.ref(""),sa=Vue.ref([]),ya=Vue.ref(!1),Zt=Vue.ref(!1),Da={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function pa(y){return Da[y]||y||"—"}function Ra(y){f&&f.navigateTo&&f.navigateTo("shortterm",y)}function za(){f.currentSubPage.value="research-history",fa()}async function fa(){const y=++m;et.value=!0,Rt.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},V=typeof s.authHeaders=="function"?s.authHeaders():{},ee=Kt.value?"?type="+encodeURIComponent(Kt.value):"",_e=await fetch("/api/strategies/research-history"+ee,{headers:V}).then(function(Se){return Se.json()});if(y!==m)return;st.value=_e&&_e.items||[]}catch(s){console.error("[research-history] 加载失败:",s),Rt.value=!0}finally{y===m&&(et.value=!1)}}async function Wt(){const y=++m;Zt.value=!0;try{const s=window.__quantModules&&window.__quantModules.core||{},V=typeof s.authHeaders=="function"?s.authHeaders():{},ee=Kt.value?"?type="+encodeURIComponent(Kt.value):"",_e=await fetch("/api/strategies/research-history/export"+ee,{headers:V});if(!_e.ok)throw new Error("HTTP "+_e.status);const Se=await _e.blob(),mt=URL.createObjectURL(Se),Je=document.createElement("a");Je.href=mt,Je.download="research_history.csv",document.body.appendChild(Je),Je.click(),document.body.removeChild(Je),URL.revokeObjectURL(mt)}catch(s){console.error("[research-history] 导出失败:",s)}finally{y===m&&(Zt.value=!1)}}function ba(y){const s=Tt.value.indexOf(y);s>=0?Tt.value.splice(s,1):Tt.value.length<10&&Tt.value.push(y)}function Jt(y){ma.value=ma.value===y?"":y}async function wa(){const y=++m,s=Tt.value;if(!(s.length<2)){ya.value=!0;try{const V=window.__quantModules&&window.__quantModules.core||{},ee=typeof V.authHeaders=="function"?V.authHeaders():{},_e=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},ee),body:JSON.stringify({ids:s})}).then(function(Se){return Se.json()});sa.value=_e&&_e.items||[]}catch(V){console.error("[research-history] 对比失败:",V)}finally{y===m&&(ya.value=!1)}}}async function ka(y){try{const s=window.__quantModules&&window.__quantModules.core||{},V=typeof s.authHeaders=="function"?s.authHeaders():{},ee=await fetch("/api/strategies/research-history/"+y,{method:"DELETE",headers:V}).then(function(_e){return _e.json()});if(ee&&ee.deleted){st.value=st.value.filter(function(Se){return Se.id!==y});const _e=Tt.value.indexOf(y);_e>=0&&Tt.value.splice(_e,1)}}catch(s){console.error("[research-history] 删除失败:",s)}}return{...f,strategyManageMode:c,openStrategyManage:_,btHistory:Qt,btHistoryLoading:j,btHistoryError:he,btHistoryDays:Oe,loadBtHistory:Me,researchHistory:st,researchHistoryLoading:et,researchHistoryError:Rt,researchHistoryType:Kt,researchHistorySelected:Tt,researchDetailId:ma,researchCompareRows:sa,researchCompareLoading:ya,researchTypeLabel:pa,goShortterm:Ra,openResearchHistory:za,loadResearchHistory:fa,researchExportLoading:Zt,exportResearchHistory:Wt,toggleResearchSelect:ba,toggleResearchDetail:Jt,runResearchCompare:wa,deleteResearchHistory:ka,marketReviews:n,marketReviewLoading:S,marketReviewError:l,selectedReviewDate:b,marketReviewDetail:g,marketReviewDetailLoading:C,marketReviewDetailError:D,loadMarketReviews:x,openMarketReview:o,toggleMarketReviewDate:i,backToMarketReviewList:W,loadMarketReviewDetail:Y,marketReviewChgClass:J,marketReviewChgText:Z,marketReviewSrcEntries:N,fmtPct:u,fmtEmotion:F,strategies:M,strategiesLoading:A,strategiesError:U,strategiesErrorText:ae,strategiesWarn:$,activeStrategyId:se,activeStrategy:P,paramValues:O,strategyRunning:H,ptradeCode:k,strategyRuns:T,savingProfile:v,variantSaving:z,loadStrategies:R,onStrategyChange:ie,runActiveStrategy:pe,exportActivePtradeCode:Ee,copyPtradeCode:Ne,profiles:le,profileSelect:G,profileName:h,loadProfiles:ye,saveProfile:ve,applyProfile:ze,deleteProfile:Ie,govEnabled:r,govSchedule:d,govUniverse:K,govRunning:oe,lastHoldings:Q,loadGov:Pe,updateGov:qe,runOnceActive:te,openLastHoldings:we,cloneStrategy:De,govShowCalendar:E,factorKey:Ke,factorIcLoading:rt,factorLayerLoading:dt,factorIcReport:Qe,factorLayerResult:Et,factorOptions:ge,runFactorIc:ht,runFactorLayer:xt,factorDetail:ft,factorDetailLoading:Ze,runFactorDetail:jt,variants:Nt,variantSelected:yt,variantSpec:ut,specFields:Vt,aiCode:q,aiCodeLoading:de,variantBusy:ke,variantMsg:xe,loadVariants:re,cloneNewStrategy:He,selectVariant:$e,loadVariantSpec:lt,saveVariantSpec:kt,runVariantOnce:Ft,genVariantAiCode:Mt,copyVariantCode:St,customName:ct,customPrompt:Dt,customs:Ot,customSelected:_t,customCode:Yt,customMsg:vt,customBtResult:bt,customGenLoading:Bt,customBtLoading:gt,customOptLoading:tt,loadCustoms:aa,genCustomCode:da,loadCustomCode:la,runCustomBacktest:Xt,runCustomOptimize:ua,copyCustomCode:va,sweepGrid:be,sweepResult:Te,sweepMessage:Re,sweepLoading:Ge,sweepStability:Xe,runSweep:Ye}}}})();(function(){const{inject:a,ref:e,onMounted:p,computed:t,nextTick:f}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                                        <span>赚钱 <b>{{ fmtPct(d.money_effect) }}</b></span>
                                        <span>情绪 <b>{{ d.emotion_score != null ? d.emotion_score.toFixed(2) : '—' }}</b></span>
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
                </div>`,setup(){const v=a("qcState");if(!v)return{};const z=v.currentPage,m=v.currentSubPage,c=e(""),_=e(null),n=e(!1),S=e(!1),l=e("数据加载失败"),b=e("请检查服务后重试"),g=e(null),C=e(null),D=e(!1),x=e(!1),o=e("数据加载失败"),i=e("请检查服务后重试"),u=e(null),F=e(1),W=50,Y=t(function(){const j=C.value||[];if(j.length<=200)return j;const he=(F.value-1)*W;return j.slice(he,he+W)}),J=e(null),Z=e(!1),N=e(!1),M=e("数据加载失败"),A=e("请检查服务后重试"),U=e([]),ae=e(!1);async function $(){ae.value=!0;try{const j=await De("/api/shortterm/dates/summary",!1);j&&j.success&&(U.value=j.dates||[])}catch{U.value=[]}finally{ae.value=!1}}function se(j){j!==c.value&&(c.value=j,lt(!0))}const O=e("行业资金流"),H=e("今日"),L=e(""),k=e(null),T=e(1),le=e(!1),G=e(!1),h=e("数据加载失败"),r=e("请检查服务后重试"),E=e(""),d=e(null),K=e(!1),oe=e(null),Q=e(!1),P=e(!1),w=e(""),R=e(""),ie=e(!1);function ye(){const j=localStorage.getItem("quant_token")||"";return j?{Authorization:"Bearer "+j,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const ve={},ze=[],Ie=50,Pe=60*1e3;let qe=0,te=0,we=0;function De(j,he){const Oe=Date.now(),Me=ve[j];return!he&&Me&&Oe-Me.ts<Pe?Promise.resolve(Me.data):fetch(j,{headers:ye()}).then(function(st){return st.json()}).then(function(st){if(ve[j]||ze.push(j),ve[j]={ts:Date.now(),data:st},ze.length>Ie){const et=ze.shift();delete ve[et]}return st})}async function ne(j){const he=++qe;n.value=!0,S.value=!1;try{const Oe="/api/shortterm/pools"+(c.value?"?date="+c.value:""),Me=await De(Oe,j);if(he!==qe)return;Me&&Me.success?(_.value=Me,f(re)):Me&&Me.detail?(S.value=!0,l.value=String(Me.detail),b.value="请先登录后再查看"):(S.value=!0,l.value="数据加载失败",b.value="请检查服务后重试")}catch{if(he!==qe)return;S.value=!0,l.value="数据加载失败",b.value="请检查服务后重试"}finally{he===qe&&(n.value=!1)}}async function X(j){const he=++qe;D.value=!0,x.value=!1;try{const Oe="/api/shortterm/lhb"+(c.value?"?date="+c.value:""),Me=await De(Oe,j);if(he!==qe)return;Me&&Me.success?(C.value=Array.isArray(Me.rows)?Me.rows:null,u.value=Me.available===!1&&Me.reason||null,F.value=1):Me&&Me.detail?(x.value=!0,o.value=String(Me.detail),i.value="请先登录后再查看"):(x.value=!0,o.value="数据加载失败",i.value="请检查服务后重试")}catch{if(he!==qe)return;x.value=!0,o.value="数据加载失败",i.value="请检查服务后重试"}finally{he===qe&&(D.value=!1)}}const pe=t(function(){const j=_.value&&_.value.ladder&&_.value.ladder.tiers;return!j||!Object.keys(j).length?"—":Object.keys(j).sort(function(he,Oe){return he-Oe}).map(function(he){return he+"板:"+j[he]}).join(" ")}),Ee=t(function(){const j=_.value&&_.value.zt||[];return g.value?j.filter(function(he){return he.boards===g.value}):j});function Ne(){g.value=null}const Ke=t(function(){const j=J.value&&J.value.emotion&&J.value.emotion.money_effect;return!j||!j.available?"—":j.source==="settled"?"定稿记录":j.source==="realtime"?j.partial?"实时(样本不全)":"实时":"—"}),rt=t(function(){const j=J.value&&J.value.emotion&&J.value.emotion.promotion&&J.value.emotion.promotion.tiers&&J.value.emotion.promotion.tiers["1进2"];return j?j.rate:null}),dt=t(function(){const j=J.value&&J.value.emotion&&J.value.emotion.sentiment_cycle;return j&&j.available&&j.current_score!=null?j.current_score.toFixed(2):"—"}),Qe=t(function(){const j=J.value&&J.value.emotion&&J.value.emotion.sentiment_cycle;return!j||!j.available?"—":(j.trend||"—")+(j.day_n!=null?" · 距低谷"+j.day_n+"天":"")});t(function(){const j=J.value&&J.value.emotion;if(!j)return"";const he=[];for(const Oe of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Me=j[Oe];Me&&Me.available===!1&&Me.reason&&he.push(String(Me.reason).replace(/^[[^]]*]s*/,""))}return he.join("；")}),t(function(){const j=J.value&&J.value.facts;if(!j)return"";const he=[];for(const Oe of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Me=j[Oe];Me&&Me.available===!1&&Me.reason&&he.push(String(Me.reason).replace(/^[[^]]*]s*/,""))}return he.join("；")});function Et(j){return j==null||isNaN(j)?"—":(j*100).toFixed(0)+"%"}function ge(j,he){return j==null?"—":(typeof j=="number"?Math.round(j*100)/100:j)+(he||"")}function be(j){return"tag-chip mr-4"}function Te(j){return j==null?"":j>0?"is-rise":j<0?"is-fall":""}function Re(j){return j==="机构"?"is-institution":j==="游资"?"is-hotmoney":j==="主力"?"is-main":""}const Ge=t(function(){const j=J.value&&J.value.session_status;if(!j)return"—";const he=J.value.date;return he===j.latest_session&&j.settled?"已收盘":he===j.today&&j.is_trade_day&&!j.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Xe=t(function(){const j=J.value&&J.value.session_status;if(!j)return"";const he=J.value.date;return he===j.latest_session&&j.settled?"is-institution":he===j.today&&j.is_trade_day&&!j.settled?"is-main":""});function Ye(j){j&&j.ts_code&&v&&v.showStockDetail&&v.showStockDetail(j.ts_code)}const ht=t(function(){return(C.value||[]).filter(function(j){return(j.tags||[]).indexOf("机构")>=0}).reduce(function(j,he){return j+(he.net_buy||0)},0)}),xt=t(function(){return(C.value||[]).filter(function(j){return(j.tags||[]).indexOf("游资")>=0}).length}),ft=t(function(){const j=(k.value||[]).filter(function(he){return he.main_net_inflow!=null});return j.length?j.reduce(function(he,Oe){return he.main_net_inflow>=Oe.main_net_inflow?he:Oe}):null}),Ze=t(function(){const j=ft.value;return j?j.name:"—"}),jt=t(function(){const j=ft.value;return j?j.main_net_inflow:null}),Nt=t(function(){return E.value||"东财"}),yt=t(function(){const j=(L.value||"").trim(),he=k.value||[];return j?he.filter(function(Oe){return Oe.name&&String(Oe.name).indexOf(j)>=0}):he});function ut(j){L.value=j||"",v&&v.currentSubPage&&(v.currentSubPage.value="sector")}const Vt=t(function(){const j=yt.value;if(j.length<=200)return j;const he=(T.value-1)*W;return j.slice(he,he+W)}),q=["09:25","09:35","10:00","11:30","14:00","15:00"],de=t(function(){const j={};return(oe.value||[]).forEach(function(he){j[he.slot]=!0}),j});function ke(j){return de.value[j]?"is-done":j===xe.value?"is-current":"is-empty"}const xe=t(function(){const j=new Date,he=(j.getHours()<10?"0":"")+j.getHours(),Oe=(j.getMinutes()<10?"0":"")+j.getMinutes(),Me=he+":"+Oe;for(var st=0;st<q.length;st++)if(Me===q[st])return q[st];for(var et=0;et<q.length-1;et++){var Rt=q[et],Kt=new Date;Kt.setHours(Number(Rt.split(":")[0]),Number(Rt.split(":")[1]),0,0);var Tt=new Date(Kt.getTime()+8*6e4);if(j>=Kt&&j<=Tt)return Rt}return""}),Ae=t(function(){const j=new Date,he=xe.value;if(he)return"当前处于快照窗口 "+he+" (前后 8 分钟) — 可采集";const Oe=j.getHours(),Me=j.getMinutes();let st="";for(let et=0;et<q.length;et++){const Rt=q[et].split(":");if(Number(Rt[0])>Oe||Number(Rt[0])===Oe&&Number(Rt[1])>Me){st=q[et];break}}return st?"下一快照时点 "+st+" — 非窗口期不可采集":"今日快照时点已全部结束"}),We=e(""),I=e("info");function re(){const j=_.value&&_.value.ladder&&_.value.ladder.tiers;if(!j||!Object.keys(j).length)return;const he=window.__quantModules&&window.__quantModules.charts;if(!he||!he.renderSimpleChartTo)return;const Oe=g.value,Me=he.renderSimpleChartTo("shorttermLadderChart",function(){const st=Object.keys(j).sort(function(et,Rt){return Number(et)-Number(Rt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:st.map(function(et){return et+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(et){return Oe&&Number(st[et.dataIndex])===Oe?"var(--color-accent)":"var(--chart-split)"}},data:st.map(function(et){return j[et]})}]}},{key:"shortterm-ladder"});Me&&Me.off&&(Me.off("click"),Me.on("click",function(st){if(!st||!st.name)return;const et=parseInt(st.name,10);isNaN(et)||(g.value=g.value===et?null:et)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(re);function He(j){if(j==null)return"—";const he=Math.abs(j);return he>=1e8?(j/1e8).toFixed(2)+"亿":he>=1e4?(j/1e4).toFixed(0)+"万":j.toFixed(0)}function $e(j){return j==null?"—":(j>=0?"+":"")+j.toFixed(2)+"%"}async function lt(j){const he=++te;Z.value=!0,N.value=!1;try{const Oe="/api/shortterm/overview"+(c.value?"?date="+c.value:""),Me=await De(Oe,j);if(he!==te)return;Me&&Me.success?J.value=Me:Me&&Me.detail?(N.value=!0,M.value=String(Me.detail),A.value="请先登录后再查看"):(N.value=!0,M.value="数据加载失败",A.value="请检查服务后重试")}catch{if(he!==te)return;N.value=!0,M.value="数据加载失败",A.value="请检查服务后重试"}finally{he===te&&(Z.value=!1)}}async function kt(j){const he=++qe;le.value=!0,G.value=!1;try{const Oe="/api/shortterm/sector-flow?indicator="+encodeURIComponent(H.value)+"&sector_type="+encodeURIComponent(O.value),Me=await De(Oe,j);if(he!==qe)return;Me&&Me.success&&Me.available?(k.value=Me.rows||[],E.value=Me.source||(Me.note?"同花顺":"东财"),T.value=1):Me&&Me.reason?(G.value=!0,h.value="数据加载失败",r.value=String(Me.reason).replace(/^\[[^\]]*\]\s*/,"")):Me&&Me.detail?(G.value=!0,h.value=String(Me.detail),r.value="请先登录后再查看"):(G.value=!0,h.value="数据加载失败",r.value="请检查服务后重试")}catch{if(he!==qe)return;G.value=!0,h.value="数据加载失败",r.value="请检查服务后重试"}finally{he===qe&&(le.value=!1)}}async function Ft(j){const he=++we;try{const Oe="/api/shortterm/review"+(c.value?"?date="+c.value:""),Me=await De(Oe,j);if(he!==we)return;Me&&Me.success&&(d.value=Me.review||null)}catch{}}async function Mt(){K.value=!0;try{const j="/api/shortterm/review"+(c.value?"?date="+c.value:""),he=await fetch(j,{method:"POST",headers:ye()}).then(function(Oe){return Oe.json()});he&&he.success&&(d.value=he,ve[j]={ts:Date.now(),data:he})}catch{}finally{K.value=!1}}async function St(){const j=w.value.trim();if(j){ie.value=!0,R.value="";try{const Oe=await fetch("/api/shortterm/review/chat",{method:"POST",headers:ye(),body:JSON.stringify({date:overviewDate.value,question:j})}).then(function(Me){return Me.json()});R.value=Oe.answer||"[无回复]"}catch{R.value="[发送失败]"}finally{ie.value=!1}}}async function ct(j){const he=++qe;Q.value=!0;try{const Oe="/api/shortterm/intraday"+(c.value?"?date="+c.value:""),Me=await De(Oe,j);if(he!==qe)return;Me&&Me.success&&(oe.value=Me.snapshots||[])}catch{}finally{he===qe&&(Q.value=!1)}}async function Dt(){P.value=!0;try{const j="/api/shortterm/intraday/snapshot"+(c.value?"?date="+c.value:""),he=await fetch(j,{method:"POST",headers:ye()}).then(function(Oe){return Oe.json()});he&&he.success?(he.accepted?(We.value="已采集 "+he.slot+" 快照"+(he.pools_available&&!he.pools_available.zt?" (池源部分不可用)":""),I.value="ok"):(We.value="⏱ "+(he.reason||"非快照时点"),I.value="warn"),ct()):We.value="采集失败, 请稍后重试"}catch{We.value="采集失败, 请稍后重试"}finally{P.value=!1}}function Ot(){return De("/api/shortterm/latest-session",!1).then(function(j){j&&j.date&&(c.value||(c.value=j.date))}).catch(function(){})}function _t(){const j=m.value;j==="ztpool"?ne():j==="lhb"?X():j==="overview"?(lt(),Ft()):j==="sector"?kt():j==="intraday"&&ct()}function Yt(){const j=c.value?"?date="+c.value:"";["/api/shortterm/overview"+j,"/api/shortterm/pools"+j,"/api/shortterm/lhb"+j].forEach(function(Oe){De(Oe,!1).catch(function(){})})}function vt(){const j=m.value;j==="ztpool"?ne(!0):j==="lhb"?X(!0):j==="overview"?(lt(!0),Ft(!0)):j==="sector"?kt(!0):j==="intraday"&&ct(!0)}p(function(){Ot(),_t(),Yt(),Xt(),$()}),Vue.watch(function(){return m.value},function(j){_t(),j==="overview"&&Xt()});const bt=window.QuantOnboarding,Bt=e(!1),gt=e(bt?bt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),tt=t(function(){return bt&&bt.shorttermTourSteps()[gt.value.stepIndex]||{key:"",title:"",desc:""}}),Ht=t(function(){return bt?bt.shorttermTourProgress(gt.value):{done:0,total:3,pct:0}}),aa=t(function(){return gt.value.stepIndex>=2});function da(){if(bt){var j=null;try{j=localStorage.getItem("qc_shortterm_tour")}catch{}if(j){var he=bt.parseState(j);he&&(gt.value=he)}}}function la(){if(bt){var j=JSON.stringify(gt.value);try{localStorage.setItem("qc_shortterm_tour",j)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:j}})}).catch(function(){})}catch{}}}function Xt(){window.__quantGuideModalsEnabled===!0&&bt&&m.value==="overview"&&(da(),bt.shorttermTourShouldShow(gt.value)&&(Bt.value=!0))}function ua(){gt.value=bt.shorttermTourNext(gt.value),la()}function va(){gt.value=bt.shorttermTourComplete(gt.value),la(),Bt.value=!1}function Qt(){gt.value=bt.shorttermTourDismiss(gt.value),la(),Bt.value=!1}return{currentPage:z,currentSubPage:m,shortDate:c,pools:_,poolLoading:n,poolError:S,ztBoardFilter:g,filteredZt:Ee,clearBoardFilter:Ne,lhbRows:C,lhbLoading:D,lhbError:x,lhbReason:u,lhbPageRows:Y,lhbPage:F,overview:J,overviewLoading:Z,overviewError:N,dateList:U,dateListLoading:ae,loadDateList:$,pickDate:se,sectorType:O,sectorIndicator:H,sectorKeyword:L,sectorRows:k,filteredSectorRows:yt,sectorPageRows:Vt,sectorPage:T,sectorLoading:le,sectorError:G,sectorFlowSource:E,PAGE_SIZE:W,gotoSector:ut,review:d,reviewRunning:K,intradaySnapshots:oe,intradayLoading:Q,intradayCollecting:P,intradaySlots:q,intradayMsg:We,slotClass:ke,intradayStatus:Ae,chatQuestion:w,chatAnswer:R,chatLoading:ie,loadPools:ne,loadLhb:X,loadOverview:lt,loadSectorFlow:kt,loadReview:Ft,runReview:Mt,sendChat:St,loadIntraday:ct,collectSnapshot:Dt,refreshCurrent:vt,ladderText:pe,fmtAmount:He,fmtPct:$e,riseFall:Te,tagClass:Re,openStock:Ye,lhbInstitutionNetBuy:ht,lhbHotMoneyCount:xt,sectorTopName:Ze,sectorTopInflow:jt,sectorSource:Nt,moneySource:Ke,promotion1to2:rt,cycleScore:dt,cycleTrend:Qe,pct:Et,fmtCond:ge,verdictClass:be,sessionStatusText:Ge,sessionStatusClass:Xe,shorttermTourVisible:Bt,shorttermTourState:gt,shorttermTourStep:tt,shorttermTourProg:Ht,shorttermTourIsLast:aa,shorttermTourNext:ua,shorttermTourFinish:va,shorttermTourSkip:Qt}}}})();(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(m,c,_,n,S){var l=_>0?_:1,b=typeof S=="number"&&S>=0?S:a,g=Math.max(0,n),C=Math.max(0,m),D=Math.max(0,c),x=Math.max(0,Math.floor(C/l)-b),o=Math.min(g,Math.ceil((C+D)/l)+b);return{startIndex:x,endIndex:o}}function p(m,c){return Math.max(0,m||0)*(c>0?c:0)}function t(m,c,_,n,S){var l=m||[],b=e(c,_,n,l.length,S),g=l.slice(b.startIndex,b.endIndex);return{visible:g,startIndex:b.startIndex,endIndex:b.endIndex,offsetY:b.startIndex*(n>0?n:1),totalHeight:p(l.length,n)}}function f(m,c){if(m){if(m.code!=null)return m.code;if(m.id!=null)return m.id;if(m.ts_code!=null)return m.ts_code}return c}function v(m,c,_){var n=m||[];if(!n.length)return c>0?c:1;for(var S=Math.min(_||50,n.length),l=0,b=0,g=0;g<S;g++){var C=n[g]&&n[g].rowHeight;typeof C=="number"&&C>0&&(l+=C,b++)}return b?l/b:c>0?c:1}function z(m,c,_,n,S){var l=e(m,c,_,n,S),b=Math.max(0,n);return b?(l.endIndex-l.startIndex)/b:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:p,sliceVisible:t,getRowKey:f,estimateDynamicRowHeight:v,renderedRatio:z}});(function(){const{ref:a,computed:e,onMounted:p,onBeforeUnmount:t}=Vue,f=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:f.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(v){const z=a(null),m=a(0),c=a(400),_=e(()=>(f.computeVisibleRange||function(i,u,F,W,Y){const J=F>0?F:1,Z=Y>=0?Y:8,N=Math.max(0,W);return{startIndex:Math.max(0,Math.floor(i/J)-Z),endIndex:Math.min(N,Math.ceil((i+u)/J)+Z)}})(m.value,c.value,v.rowHeight,v.items.length,v.buffer)),n=e(()=>v.items.length*v.rowHeight),S=e(()=>_.value.startIndex),l=e(()=>_.value.endIndex),b=e(()=>v.items.slice(S.value,l.value));function g(){z.value&&(m.value=z.value.scrollTop)}function C(){z.value&&(c.value=z.value.clientHeight||400)}function D(o,i){return f.getRowKey?f.getRowKey(o,i):o&&o.code!=null?o.code:o&&o.id!=null?o.id:i}let x=null;return p(()=>{C(),z.value&&typeof ResizeObserver<"u"&&(x=new ResizeObserver(()=>C()),x.observe(z.value))}),t(()=>{x&&x.disconnect()}),{scrollEl:z,totalHeight:n,startIndex:S,endIndex:l,visibleItems:b,onScroll:g,keyOf:D}}}})();(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,p=60,t=500,f=10,v=88,z=350;function m(i,u,F,W,Y){Y=Y||{};var J=typeof Y.threshold=="number"?Y.threshold:a,Z=typeof Y.bias=="number"?Y.bias:e,N=F-i,M=W-u;return Math.abs(N)<J||Math.abs(N)<Math.abs(M)*Z?"none":N<0?"left":"right"}function c(i,u,F){F=F||{};var W=typeof F.threshold=="number"?F.threshold:p;return u-i>=W}function _(i,u){u=u||{};var F=typeof u.threshold=="number"?u.threshold:t;return i>=F}var n=!1;function S(i,u){return i&&typeof i.closest=="function"?i.closest(u):null}function l(i){if(!i)return"";var u=i.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(u){var F=u.getAttribute&&u.getAttribute("data-copy-code");if(F)return F.trim();var W=(u.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(W)return W[0]}var Y=i.getAttribute&&i.getAttribute("data-copy-code");return Y?Y.trim():""}function b(i){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(function(){return!0}).catch(function(){return g(i)}):Promise.resolve(g(i))}function g(i){try{var u=document.createElement("textarea");return u.value=i,u.style.position="fixed",u.style.opacity="0",document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u),!0}catch{return!1}}function C(i){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(i)}function D(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function x(){var i=null,u=null,F=null;function W(){u&&(u.timer&&clearTimeout(u.timer),u=null)}function Y(ae){F={el:ae,until:Date.now()+z}}function J(ae){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function($){$!==ae&&$.classList.remove("swipe-open")}),i&&i.el!==ae&&(i=null)}function Z(ae){var $=ae.touches&&ae.touches[0];if($){var se=S(ae.target,".swipe-reveal");se&&(i={el:se,x:$.clientX,y:$.clientY,moved:!1},ae.stopPropagation());var O=S(ae.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");O&&(W(),u={el:O,x:$.clientX,y:$.clientY,timer:setTimeout(function(){var H=l(O);u=null,H&&(Y(O),b(H).then(function(){D(),C("已复制代码 "+H)}))},t)})}}function N(ae){if(i){var $=ae.touches&&ae.touches[0];if($){var se=$.clientX-i.x,O=$.clientY-i.y;if(Math.abs(se)>8&&Math.abs(se)>Math.abs(O)*1.2){ae.cancelable&&ae.preventDefault(),i.moved=!0;var H=i.el.querySelector(".swipe-reveal-main")||i.el,L=Math.max(-v,Math.min(0,se));H.style.transition="none",H.style.transform="translateX("+L+"px)",ae.stopPropagation()}if(u){var k=$.clientX-u.x,T=$.clientY-u.y;(Math.abs(k)>f||Math.abs(T)>f)&&W()}}}}function M(ae){if(W(),!!i){var $=i.el,se=ae.changedTouches&&ae.changedTouches[0],O=i.x,H=i.y,L="none";se&&(L=m(O,H,se.clientX,se.clientY));var k=i.moved;i=null;var T=$.querySelector(".swipe-reveal-main")||$;T.style.transform="",T.style.transition="",L==="left"?(J($),$.classList.add("swipe-open"),Y($)):(L==="right"||k)&&$.classList.remove("swipe-open"),ae.stopPropagation()}}function A(){W(),i=null}function U(ae){if(F&&Date.now()<F.until){var $=F.el.contains(ae.target)||ae.target===F.el,se=ae.target.closest&&ae.target.closest(".swipe-reveal-actions");$&&!se&&(ae.preventDefault(),ae.stopPropagation(),F=null)}}document.addEventListener("touchstart",Z,!0),document.addEventListener("touchmove",N,!0),document.addEventListener("touchend",M,!0),document.addEventListener("touchcancel",A,!0),document.addEventListener("click",U,!0)}function o(){n||typeof document>"u"||(n=!0,x())}return{judgeSwipe:m,judgePullToRefresh:c,judgeLongPress:_,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:p,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:f,REVEAL_WIDTH:v,initGestures:o,_codeFromRow:l}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function p(v){return a[v]||a.empty}function t(){const v=[];for(const z of e){const m=a[z];m.title||v.push(z+".title"),z!=="loading"&&!m.icon&&v.push(z+".icon"),typeof m.retry!="boolean"&&v.push(z+".retry"),typeof m.skeleton!="boolean"&&v.push(z+".skeleton")}return{ok:v.length===0,errors:v}}const f={VARIANTS:a,KEYS:e,resolve:p,validate:t};typeof window<"u"&&(window.QuantStatePanel=f),typeof Le<"u"&&Le.exports&&(Le.exports=f)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(p){const t=a(()=>typeof e.resolve=="function"?e.resolve(p.type):{}),f=a(()=>p.icon||t.value.icon||""),v=a(()=>p.title||t.value.title||""),z=a(()=>p.desc||t.value.desc||""),m=a(()=>!!t.value.retry),c=a(()=>/^[a-z][a-z0-9-]*$/.test(String(f.value||"")));return{icon:f,title:v,desc:z,retryable:m,isIconName:c}}}})();(function(a,e){typeof Le=="object"&&Le.exports?Le.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(i){return String(i||"").trim().toLowerCase()}function e(i,u){if(!i)return!0;const F=i.split(/\s+/).filter(Boolean);if(!F.length)return!0;const W=String(u||"").toLowerCase();return F.every(function(Y){return W.indexOf(Y)!==-1})}function p(){return{visible:!1,query:"",activeIndex:0}}function t(i,u){return u===void 0&&(u=!i.visible),i.visible=u,u&&(i.query="",i.activeIndex=0),i.visible}function f(i,u,F){const W=a(i);if(!u||!u.length)return[];const Y=[];return u.forEach(function(J){const Z=e(W,J.name)||e(W,J.key),N=(J.subPages||[]).filter(function(M){const A=F&&F[M]||M;return e(W,A)||e(W,M)});Z&&Y.push({type:"menu",menuKey:J.key,subPage:J.subPages&&J.subPages[0]||"",label:J.name,subLabel:"页面",icon:J.icon||"file-text"}),N.forEach(function(M){Y.push({type:"menu",menuKey:J.key,subPage:M,label:F&&F[M]||M,subLabel:J.name,icon:J.icon||"file-text"})})}),Y.slice(0,8)}function v(i,u){const F=a(i);return!u||!u.length?[]:u.filter(function(W){return!!(!F||e(F,W.label)||e(F,W.key)||W.keywords&&e(F,W.keywords))}).slice(0,8)}function z(i,u){const F=a(i);return!F||!u||!u.length?[]:u.filter(function(W){return e(F,W.code)||e(F,W.name)}).slice(0,8).map(function(W){return{type:"stock",code:W.code,name:W.name,label:W.name,subLabel:W.code,icon:"trending-up"}})}function m(i,u,F){const W=[],Y=[];return F&&F.length&&(W.push({key:"stock",label:"股票",items:F}),Y.push.apply(Y,F)),i&&i.length&&(W.push({key:"menu",label:"菜单",items:i}),Y.push.apply(Y,i)),u&&u.length&&(W.push({key:"command",label:"指令",items:u}),Y.push.apply(Y,u)),{groups:W,flat:Y}}function c(i,u,F){if(u<=0)return 0;const W=((i||0)+F)%u;return W<0?u-1:W}function _(i,u,F,W){const Y=f(i,u,F).map(function(Z){return{type:"menu",menuKey:Z.menuKey,subPage:Z.subPage,label:Z.label,subLabel:Z.subLabel,icon:Z.icon,iconName:Z.icon,value:Z.icon+" "+Z.label+" · "+Z.subLabel}}),J=v(i,W||[]).map(function(Z){return{type:"command",key:Z.key,label:Z.label,icon:Z.icon,iconName:Z.icon,subLabel:"指令",value:Z.icon+" "+Z.label}});return Y.concat(J)}function n(i){return i?i.type==="menu"?{action:"menu",menuKey:i.menuKey,subPage:i.subPage}:i.type==="command"?{action:"command",key:i.key}:i.type==="sector"?{action:"sector",name:i.name}:i.type==="strategy"?{action:"strategy",id:i.id,name:i.name}:i.type==="stock"||i.code&&i.name?{action:"stock",code:i.code,name:i.name}:null:null}const S=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var l={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function b(i){if(!i||typeof i!="string")return null;var u=i.split("+").map(function(Y){return Y.trim()}).filter(Boolean);if(!u.length)return null;var F=u.pop().toLowerCase();if(!F)return null;var W={ctrl:!1,alt:!1,shift:!1,meta:!1};return u.forEach(function(Y){var J=Y.toLowerCase();l.ctrl.indexOf(J)!==-1?W.ctrl=!0:l.alt.indexOf(J)!==-1?W.alt=!0:l.shift.indexOf(J)!==-1?W.shift=!0:l.meta.indexOf(J)!==-1&&(W.meta=!0)}),{ctrl:W.ctrl,alt:W.alt,shift:W.shift,meta:W.meta,key:F}}function g(i,u){if(!i||!u)return!1;var F=String(u.key||u.code||"").toLowerCase();return i.key!==F?!1:i.ctrl===!!u.ctrlKey&&i.alt===!!u.altKey&&i.shift===!!u.shiftKey&&i.meta===!!u.metaKey}function C(i){if(!i)return"";var u=[];return i.ctrl&&u.push("Ctrl"),i.alt&&u.push("Alt"),i.shift&&u.push("Shift"),i.meta&&u.push("Meta"),u.push(i.key.toUpperCase()),u.join("+")}function D(){var i={};return{register:function(u){if(!u||!u.key)throw new Error("命令 key 必填");if(i[u.key])throw new Error("命令重复注册: "+u.key);return i[u.key]=Object.assign({},u),u.key},list:function(){return Object.keys(i).map(function(u){return i[u]})},get:function(u){return i[u]||null},remove:function(u){delete i[u]},has:function(u){return!!i[u]},count:function(){return Object.keys(i).length}}}function x(){var i={},u={};return{register:function(F,W,Y){var J=b(F);if(!J)throw new Error("无效快捷键: "+F);var Z=C(J);if(i[Z])throw new Error("快捷键冲突: "+F);if(W!=null&&u[W]!==void 0)throw new Error("动作重复绑定: "+W);return i[Z]={combo:F,action:W,description:Y||"",parsed:J},u[W]=Z,Z},resolve:function(F){for(var W in i)if(g(i[W].parsed,F))return i[W].action;return null},list:function(){return Object.keys(i).map(function(F){return i[F]})},unregister:function(F){var W=C(b(F));i[W]&&(delete u[i[W].action],delete i[W])},count:function(){return Object.keys(i).length}}}function o(){var i=x();return i.register("Ctrl+K","toggle-palette","打开命令面板"),i.register("F5","refresh","刷新当前页"),i.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),i.register("Ctrl+J","open-ai","打开 AI 问股"),i.register("Ctrl+D","open-today","今日一屏"),i.register("Ctrl+E","batch-eval","批量 AI 评估"),i.register("Ctrl+G","add-portfolio","加入组合"),i.register("Ctrl+H","open-eval-history","打开评估历史"),i.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),i}return{normalize:a,createPaletteState:p,toggleVisible:t,searchMenus:f,searchCommands:v,filterStocksLocal:z,mergeResults:m,moveIndex:c,buildSearchSuggestions:_,dispatchSearchSelection:n,DEFAULT_COMMANDS:S,parseKeyCombo:b,matchShortcut:g,canonicalCombo:C,createCommandRegistry:D,createShortcutRegistry:x,createDefaultShortcuts:o}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof Le<"u"&&Le.exports?Le.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var p=e();typeof Le=="object"&&Le.exports&&(Le.exports=p),a.QuantOnboarding=p})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],e=a.length,p=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=p.length;function f(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function v(){return p.slice()}function z(M){return M<0?0:M>=t?t-1:M}function m(M){return{stepIndex:M.stepIndex,completed:!!M.completed,dismissed:!!M.dismissed,updatedAt:M.updatedAt||0}}function c(M){return m(Object.assign({},M,{stepIndex:z((M.stepIndex||0)+1),updatedAt:Date.now()}))}function _(M){return m(Object.assign({},M,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function n(M){return m(Object.assign({},M,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function S(M){var A=Math.min(M&&M.stepIndex||0,t);return{done:A,total:t,pct:Math.round(A/t*100)}}function l(M){return!!(M&&!M.completed&&!M.dismissed)}function b(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function g(){return a.slice()}function C(){return e}function D(M){return M<0?0:M>=e?e-1:M}function x(M){return{stepIndex:M.stepIndex,completed:!!M.completed,dismissed:!!M.dismissed,updatedAt:M.updatedAt||0}}function o(M){return x(Object.assign({},M,{stepIndex:D((M.stepIndex||0)+1),updatedAt:Date.now()}))}function i(M){return x(Object.assign({},M,{stepIndex:D((M.stepIndex||0)-1),updatedAt:Date.now()}))}function u(M,A){return x(Object.assign({},M,{stepIndex:D(A),updatedAt:Date.now()}))}function F(M){return x(Object.assign({},M,{completed:!0,updatedAt:Date.now()}))}function W(M){return x(Object.assign({},M,{dismissed:!0,updatedAt:Date.now()}))}function Y(M){return!!(M&&M.completed)}function J(M){var A=Math.min(M&&M.stepIndex||0,e);return{done:A,total:e,pct:Math.round(A/e*100)}}function Z(M){var A=M||b();return JSON.stringify({stepIndex:A.stepIndex,completed:!!A.completed,dismissed:!!A.dismissed,updatedAt:A.updatedAt||0})}function N(M){var A=b();if(!M||typeof M!="string")return A;try{var U=JSON.parse(M);if(!U||typeof U!="object")return A;var ae=parseInt(U.stepIndex,10);return isNaN(ae)?A:{stepIndex:D(ae),completed:!!U.completed,dismissed:!!U.dismissed,updatedAt:U.updatedAt||0}}catch{return A}}return{ONBOARDING_STEPS:a,steps:g,stepCount:C,createOnboardingState:b,next:o,prev:i,jumpTo:u,complete:F,dismiss:W,isComplete:Y,progress:J,persistState:Z,parseState:N,SHORTTERM_TOUR_STEPS:p,shorttermTourSteps:v,createShorttermTourState:f,shorttermTourNext:c,shorttermTourComplete:_,shorttermTourDismiss:n,shorttermTourProgress:S,shorttermTourShouldShow:l}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:p}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const f=a(!1),v=a(t.createOnboardingState()),z=e(function(){return t.steps()[v.value.stepIndex]}),m=e(function(){return t.progress(v.value)}),c=e(function(){return v.value.stepIndex>=t.stepCount()-1}),_=e(function(){return"onboarding.step."+z.value.key});function n(){const D=t.persistState(v.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:D}})}).then(function(x){return x.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",D)}catch{}})}function S(){v.value=t.next(v.value)}function l(){v.value=t.prev(v.value)}function b(){v.value=t.complete(v.value),n(),f.value=!1}function g(){v.value=t.dismiss(v.value),n(),f.value=!1}function C(){fetch("/api/user_config/preferences").then(function(D){return D.json()}).then(function(D){const x=D&&D.preferences&&D.preferences.onboarding_progress;return x&&(v.value=t.parseState(x)),x}).catch(function(){return null}).then(function(D){if(!D)try{const x=localStorage.getItem("qc_onboarding_progress");x&&(v.value=t.parseState(x))}catch{}!t.isComplete(v.value)&&!v.value.dismissed&&(f.value=!0)})}return p(C),{visible:f,st:v,step:z,prog:m,isLast:c,stepKey:_,next:S,prev:l,finish:b,skip:g}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
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
    `,setup(){function a(e){try{const p=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(p)return p(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:p,nextTick:t,inject:f,onMounted:v}=Vue,z=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const m=f("qcState");if(!m)return{};const c=a(""),_=e({get:()=>m.commandPaletteVisible.value,set:O=>{m.commandPaletteVisible.value=O}}),n=a(0),S=a([]),l=a(null),b=e(()=>{const O=(z.DEFAULT_COMMANDS||[]).map(function(L){return Object.assign({},L)});return Object.keys(m.themes.value||{}).forEach(function(L){const k=m.themes.value[L];O.push({key:"theme:"+L,label:"切换主题 · "+(k.name||L),icon:"palette",keywords:"theme 主题"})}),O});function g(O){return typeof O=="string"&&/^[a-z][a-z0-9-]*$/.test(O)}const C=e(()=>m.menus.value||[]);function D(){const O=window.__quantModules&&window.__quantModules.pinyin;if(!O)return[];const H=[];return(m.watchlist&&m.watchlist.value||[]).forEach(function(L){H.push({code:L.code,name:L.name})}),(m.aiHistory&&m.aiHistory.value||[]).forEach(function(L){L&&L.stock_code&&H.push({code:L.stock_code,name:L.stock_name||L.stock_code})}),H.push.apply(H,O.getExtraStocks()),O.buildStockIndex(H)}function x(O){const H=window.__quantModules&&window.__quantModules.pinyin;return H?H.searchStocksByQuery(O,D()).map(function(L){return{type:"stock",code:L.code,name:L.name,label:L.name,subLabel:L.code,icon:"trending-up"}}):[]}function o(){const O=[],H=window.__quantModules&&window.__quantModules.recent;H&&H.getRecentViewed().slice(0,5).forEach(function(k){O.push({type:"stock",code:k.code,name:k.name||k.code,label:k.name||k.code,subLabel:"最近查看 · "+k.code,icon:"trending-up"})});const L=(m.watchlist&&m.watchlist.value||[]).slice(0,8).map(function(k){return{type:"stock",code:k.code,name:k.name||k.code,label:k.name||k.code,subLabel:"我的自选 · "+k.code,icon:"trending-up"}});return O.concat(L)}const i=e(()=>{const O=c.value;if(!O)return z.mergeResults([],[],o());const H=z.searchMenus(O,C.value,m.subPageNames),L=z.searchCommands(O,b.value),k=S.value;return z.mergeResults(H,L,k)}),u=e(()=>i.value);function F(O){return u.value.flat[n.value]===O}function W(O){n.value=u.value.flat.indexOf(O)}function Y(O){return(O.type||"")+":"+(O.code||O.menuKey||O.key||O.label)}let J=null;function Z(){const O=c.value.trim();if(O.length<1){S.value=[];return}J&&clearTimeout(J),J=setTimeout(function(){const H=x(O);S.value=H,n.value=0,m.searchStocks(O,function(L){if(c.value.trim()!==O)return;const k=(L||[]).filter(function(G){return G&&G.code&&G.name}).map(function(G){return{type:"stock",code:G.code,name:G.name,label:G.name,subLabel:G.code,icon:"trending-up"}}),T={},le=[];H.forEach(function(G){T[G.code]||(T[G.code]=!0,le.push(G))}),k.forEach(function(G){T[G.code]||(T[G.code]=!0,le.push(G))}),S.value=le,n.value=0})},200)}function N(){n.value=z.moveIndex(n.value,u.value.flat.length,1)}function M(){n.value=z.moveIndex(n.value,u.value.flat.length,-1)}function A(){const O=u.value.flat[n.value];O&&U(O)}function U(O){m.commandPaletteVisible.value=!1,O.type==="menu"?m.navigateTo(O.menuKey,O.subPage):O.type==="stock"?m.showStockDetail(O.code,O.name):O.type==="command"&&ae(O.key)}function ae(O){if(O==="refresh"){const H=m.currentPage.value;H==="strategies"?m.loadDashboardData().catch(function(){}):H==="calendar"?m.refreshCalendarData().catch(function(){}):H==="ai"&&m.loadAiHistory().catch(function(){})}else O==="export"?m.exportCSV():O==="batch"?m.showBatchEvaluate.value=!0:O==="ai"?m.openAiFab():O==="sidebar"?m.toggleSidebar():O==="today"?m.navigateTo("strategies","overview"):O==="add-portfolio"?(m.currentPage.value="ai",m.currentSubPage.value="portfolio"):O==="open-system"?m.navigateTo("system","status"):O==="open-shortterm"?m.navigateTo("shortterm","overview"):O==="open-research"?m.navigateTo("research","overview"):O==="open-calendar"?m.navigateTo("calendar",""):O==="refresh-data-source"?m.navigateTo("system","datasource"):O.indexOf("theme:")===0&&m.changeTheme(O.slice(6))}p(_,function(O){O&&(c.value="",S.value=[],n.value=0,t(function(){l.value&&l.value.focus&&l.value.focus()}))}),p(c,Z);function $(O){O==="toggle-palette"?m.commandPaletteVisible.value=!m.commandPaletteVisible.value:O==="toggle-sidebar"?m.toggleSidebar():O==="open-ai"?m.openAiFab():O==="refresh"?ae("refresh"):O==="open-today"?ae("today"):O==="batch-eval"?ae("batch"):O==="add-portfolio"&&ae("add-portfolio")}function se(O){if(!z.createDefaultShortcuts||!z.createShortcutRegistry)return;const L=z.createDefaultShortcuts().resolve({key:O.key,ctrlKey:O.ctrlKey,altKey:O.altKey,shiftKey:O.shiftKey,metaKey:O.metaKey});L&&(O.preventDefault(),$(L))}return v(function(){document.addEventListener("keydown",se)}),{visible:_,query:c,results:u,inputEl:l,sanitizeHtml:m.sanitizeHtml,isIconName:g,onDown:N,onUp:M,onEnter:A,execute:U,isActive:F,setActive:W,itemKey:Y,onGlobalKeydown:se}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const f=a("qcState");if(!f)return{};const v={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},z=e(()=>v[f.aiEvalStage.value]||""),m=e(()=>{const A=f.aiResult&&f.aiResult.value&&f.aiResult.value.result&&f.aiResult.value.result.level;return A?A==="强烈推荐"||A==="推荐"?"var(--el-success)":A==="谨慎推荐"?"var(--el-warning)":A==="中性"||A==="观望"?"var(--text-secondary)":A==="评估失败"||A==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function c(A){const U=document.createElement("textarea");U.value=A,U.style.position="fixed",U.style.opacity="0",document.body.appendChild(U),U.select(),document.execCommand("copy"),document.body.removeChild(U)}async function _(){const A=f.aiResult&&f.aiResult.value;if(!A||!A.result)return;const U=A.result.dimensions||{},ae=Object.entries(U).map(([se,O])=>`${se} ${Math.round(O)}分`).join(`
`),$=`【AI 智能评估】${A.result.level||""} ${A.result.total_score!=null?A.result.total_score:"—"}分
模型：${A.model_used||A.result.provider||"—"}

${A.result.detailed_report||""}

九维度评分：
${ae||"无"}`;try{await navigator.clipboard.writeText($),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{c($),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const n=p(!1),S=p(!1),l=p(null),b=p([]),g={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function C(A){return g[A]||"factor-sem-none"}async function D(){const A=f.stockDetail.value&&f.stockDetail.value.stock;if(A){n.value=!0,S.value=!1,b.value=[],l.value=null;try{const U=f.selectedDate.value?`?date=${f.selectedDate.value}`:"",ae=await fetch(`/api/calendar/stock/${A}/factors${U}`).then(H=>H.json()),$=ae&&Array.isArray(ae.factors)?ae.factors:[],se=[],O={};$.forEach(H=>{O[H.category]||(O[H.category]={category:H.category,items:[]},se.push(O[H.category])),O[H.category].items.push(H)}),b.value=se,l.value=ae&&ae.summary||null}catch{S.value=!0}finally{n.value=!1}}}t(f.stockDetailTab,A=>{A==="factor"&&f.stockDetail.value&&f.stockDetailVisible.value&&(D(),o())});const x=p(null);async function o(){try{const A=await fetch("/api/market/factor-ic").then(U=>U.json());x.value=A&&A.success&&A.data?A.data:{}}catch{x.value={}}}function i(A){if(!A||!A.n5)return"—";const U=A.n5.icir!=null?"ICIR "+A.n5.icir:"ICIR —";return A.n5.grade+" ("+U+")"}const u=p(!1),F=p(!1),W=p([]),Y=p([]);function J(A){if(A==null)return"—";const U=Number(A);return Number.isNaN(U)?"—":Math.abs(U)>=1e8?(U/1e8).toFixed(2)+"亿":Math.abs(U)>=1e4?(U/1e4).toFixed(1)+"万":String(U)}async function Z(){const A=f.stockDetail&&f.stockDetail.value&&f.stockDetail.value.stock;if(A){u.value=!0,F.value=!1;try{const U=await fetch("/api/market/performance/"+encodeURIComponent(A)).then(ae=>ae.json());U&&U.success?(W.value=U.forecast||[],Y.value=U.express||[]):F.value=!0}catch{F.value=!0}finally{u.value=!1}}}t(f.stockDetailTab,A=>{A==="performance"&&Z()});const N=p(null);async function M(){const A=f.stockDetail&&f.stockDetail.value&&f.stockDetail.value.stock;if(!A){N.value=null;return}try{const U=await fetch("/api/focus/stock/"+encodeURIComponent(A)+"/pool").then(ae=>ae.json());N.value=U&&U.success&&U.data?U.data:null}catch{N.value=null}}return t(()=>f.stockDetail&&f.stockDetail.value&&f.stockDetail.value.stock,A=>{A&&f.stockDetailVisible.value?M():N.value=null}),t(()=>f.stockDetailVisible.value,A=>{A?M():N.value=null}),{...f,aiStageText:z,levelRingColor:m,copyAiReport:_,factorLoading:n,factorError:S,factorSummary:l,factorGroups:b,factorSemClass:C,loadFactorPanel:D,factorIc:x,loadFactorIc:o,factorIcGrade:i,perfLoading:u,perfError:F,perfForecast:W,perfExpress:Y,fmtY:J,loadPerformance:Z,poolInfo:N,loadPoolInfo:M}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(p){const t=e("qcState");if(!t)return{};const f=a(()=>p.type==="history"?t.selectedHistoryIds.value.includes(p.item.id):t.selectedChatIds.value.includes(p.item.id)),v=a(()=>{const g=t.watchlistCodes.value.has(p.item.stock_code);return{icon:"star",isWatched:g,label:g?"取消收藏":"加入收藏"}}),z=a(()=>p.type==="history"?"bot":"message-circle"),m=a(()=>{var g;return p.type==="history"?((g=p.item.result)==null?void 0:g.provider)||"":p.item.first_msg||""}),c=a(()=>{var g,C;return`${((C=(g=p.item.result)==null?void 0:g.dimensions)==null?void 0:C.length)||9}维度分析`}),_=a(()=>{var C,D;const g=p.type==="history"?p.item.evaluate_time:p.item.created_at||"";return g?p.timeFormat==="datetime"?p.type==="history"?`${g.split("T")[0]} ${(g.split("T")[1]||"").split(".")[0]}`:`${g.split("T")[0]} ${((C=g.split("T")[1])==null?void 0:C.substring(0,5))||""}`:p.type==="history"?(g.split("T")[1]||"").split(".")[0]||g:((D=g.split("T")[1])==null?void 0:D.substring(0,5))||"":""});function n(){p.type==="history"?t.toggleSelectHistory(p.item.id):t.toggleSelectChat(p.item.id)}function S(){p.type==="history"?t.viewAiResult(p.item):t.viewChatSession(p.item)}async function l(){try{await ElementPlus.ElMessageBox.confirm(p.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}p.type==="history"?t.deleteSingleHistory(p.item.id):t.deleteChatSession(p.item.id)}function b(g,C){t.toggleWatchlist(g,C)}return{isSelected:f,watchState:v,providerIcon:z,providerText:m,dimsText:c,timeText:_,toggleSelect:n,view:S,remove:l,toggleWatchlist:b,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const f=["买入","持有","观望","减仓","卖出"],v={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},z={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},m=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],c={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},_=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function n(l){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(l).then(C=>C.json?C.json():C)}function S(){const l=new Date,b=g=>g<10?"0"+g:""+g;return l.getFullYear()+"-"+b(l.getMonth()+1)+"-"+b(l.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const l=t("qcState"),b=a(S()),g=a("after_close"),C=a({rows:[],actions:{},total:0,groups:{}}),D=a({sessions:{},total:0}),x=a(null),o=a(!1),i=a(""),u=a(!1),F=a([]),W=a(""),Y=a(null),J={},Z=a({});let N=0;const M=a(null),A=e(function(){const P=C.value&&C.value.groups||{};return Object.keys(P).length?P:C.value&&C.value.rows&&C.value.rows.length?{全部:C.value.rows}:{}}),U=e(function(){const P=M.value;return!P||!P.date||P.date!==b.value?"":"已加载最近一次评估: "+P.date+" · "+(c[P.session]||P.session)}),ae=e(function(){const P=C.value&&C.value.base_date;return P?P===b.value?"评分范围: "+P+" 收盘池 + 自选":"评分范围: "+P+" 收盘池(前一交易日算好) + 自选":""});function $(P){if(P==null)return"—";const w=Number(P);return w===Math.floor(w)?String(w):w.toFixed(1)}function se(P){const w=C.value.total||0,R=(C.value.actions||{})[P]||0;if(!w)return"0%";const ie=R/w*100;return ie>0&&ie<4?"4%":ie.toFixed(1)+"%"}function O(P){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[P]||"info"}function H(P){const w=x.value&&x.value.overall&&x.value.overall[P]||null;return!w||w.total===0||w.rate===null||w.rate===void 0?"info":w.rate>=60?"success":w.rate>=40?"warning":"danger"}function L(P){const w=x.value&&x.value.overall&&x.value.overall[P]||null;return!w||w.total===0||w.rate===null||w.rate===void 0?"样本不足":w.rate.toFixed(1)+"% ("+w.total+" 样本)"}function k(){return c[g.value]||g.value}function T(P){const w=F.value.indexOf(P);w>=0?F.value.splice(w,1):F.value.push(P)}function le(P){if(!P||!P.raw_json)return{};if(J[P.stock_code+P.session+P.trade_date])return J[P.stock_code+P.session+P.trade_date];let w={};try{w=JSON.parse(P.raw_json)||{}}catch{w={}}return J[P.stock_code+P.session+P.trade_date]=w,w}async function G(){try{const P=await n("/api/focus/latest"),w=P&&P.success&&P.data;w&&w.date&&(M.value=w,b.value=w.date,w.session&&(g.value=w.session))}catch(P){console.warn("[focus] 最近一次评估解析失败:",P)}}async function h(){u.value=!0;try{const P=await n("/api/focus/results?date="+b.value+"&session="+g.value);C.value=P&&P.success&&P.data||{rows:[],actions:{},total:0,groups:{}},r((C.value.rows||[]).map(function(w){return w.stock_code}))}catch(P){console.warn("[focus] 结果加载失败:",P),C.value={rows:[],actions:{},total:0,groups:{}}}finally{u.value=!1}}async function r(P){const w=Z.value||{},R=(P||[]).filter(function(ve){return ve&&!w[ve]});if(!R.length)return;const ie=++N,ye=R.map(function(ve){return n("/api/focus/stock/"+encodeURIComponent(ve)+"/pool?date="+b.value).then(function(ze){ze&&ze.success&&ze.data?w[ve]=ze.data:w[ve]={stock_code:ve,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){w[ve]={stock_code:ve,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(ye)}catch{}ie===N&&(Z.value=Object.assign({},w))}function E(P){const w=l&&l.showStockDetail;if(typeof w=="function"){w(P);return}const ie=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;ie&&ie.info("请从其他页面打开股票详情: "+P)}async function d(){try{const P=await n("/api/focus/history?date="+b.value);D.value=P&&P.success&&P.data||{sessions:{},total:0}}catch(P){console.warn("[focus] 历史加载失败:",P),D.value={sessions:{},total:0}}}async function K(){o.value=!0;try{const P=await n("/api/ai/track");P&&P.success&&P.data?(x.value=P.data,i.value=(P.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):x.value=null}catch(P){console.warn("[focus] 效果块加载失败:",P),x.value=null}finally{o.value=!1}}async function oe(){const P=(W.value||"").trim();if(P){Y.value=null;try{const w=await n("/api/focus/stock/"+encodeURIComponent(P));Y.value=w&&w.success&&w.data&&w.data.rows||[]}catch(w){console.warn("[focus] 单股历史加载失败:",w),Y.value=[]}}}async function Q(){await h(),await d(),await K()}return p(async function(){await G(),await Q()}),{curDate:b,session:g,results:C,history:D,track:x,trackLoading:o,trackNote:i,loading:u,expanded:F,stockCode:W,stockHistory:Y,SESSIONS:m,ACTION_ORDER:f,TRACK_WINDOWS:_,ACTION_DOT:v,TIER_DOT:z,SESSION_LABELS:c,displayGroups:A,latestNote:U,baseNote:ae,sessionLabel:k,fmtScore:$,tagType:O,rateTagType:H,fmtRate:L,toggle:T,detailOf:le,loadResults:h,loadHistory:d,loadTrack:K,loadStockHistory:oe,loadAll:Q,poolStatus:Z,openStockDetail:E,actionPct:se}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:p}=Vue,{currentView:t,statusFilter:f,dashboardData:v,loadHealthMetrics:z,getLoadDashboardData:m,getLastRefreshTime:c,getFetchPoolSignals:_}=a,n=e(!1),S=e(""),l=new Map,b=e([]),g=e(""),C=e(""),D=e([]),x=e(""),o=window.__quantModules.core||{},i=typeof o.createTtlCache=="function"?o.createTtlCache(15e3):null;let u=0;function F(){const U=Date.now();U-u<5e3||(u=U,ElementPlus.ElMessage.success("有新数据，已更新"))}function W(U,ae,$,se){!i||!ae||typeof o.silentRefresh!="function"||o.silentRefresh({cache:i,key:ae,fetchFn:async()=>{const O=await fetch(U);if(!O.ok)throw new Error("HTTP "+O.status);const H=await O.json();return $?$(H):H},ttl:i.defaultTtl,apply:se,onChanged:F,onError:()=>{}})}const Y=new Set;async function J(){var U;try{const $=await(await fetch("/api/dates")).json();b.value=((U=$.data)==null?void 0:U.dates)||$.dates||[],b.value.length>0&&(g.value=b.value[b.value.length-1]),C.value=new Date().toLocaleTimeString()}catch(ae){console.error(ae)}}async function Z(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),C.value="刷新中...",l.clear(),await J(),await M(),C.value=new Date().toLocaleTimeString()}catch(U){console.error("数据刷新失败",U)}}function N(){if(!g.value)return;const ae="/api/view/"+(t.value||"day")+"/"+g.value+"?status="+(f.value||"all")+"&format=csv";window.open(ae,"_blank")}async function M(){if(!g.value)return;const U=`${t.value}_${g.value}`;if(Y.has(U))return;Y.add(U);const ae=`/api/view/${t.value}/${g.value}?status=all`,$=i&&typeof o.makeCacheKey=="function"?o.makeCacheKey("GET",`/api/view/${t.value}/${g.value}`,{status:"all"}):null,se=(L,k)=>{D.value=L,x.value=k||"",l.set(U,{stocks:L,note:k||""})},O=L=>{se(L&&L.stocks||[],L&&L.note||"")};if(l.has(U)){O(l.get(U)),W(ae,$,L=>L,O),Y.delete(U);return}const H=$&&i?i.get($):void 0;if(H!==void 0){O(H),W(ae,$,L=>L,O),Y.delete(U);return}n.value=!0,S.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const k=await(await fetch(ae)).json(),T=k.stocks||[];se(T,k.note||""),i&&$&&i.set($,{stocks:T,note:k.note||""})}catch{try{const T=await(await fetch(`/api/calendar/${g.value}/consensus`)).json();D.value=(T.consensus||[]).map(le=>({...le,code:le.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{n.value=!1}_(),Y.delete(U)}async function A(){const U=i&&typeof o.makeCacheKey=="function"?o.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(i){const ae=i.get(U);if(ae!==void 0){v.value=ae,z().catch(()=>{}),W("/api/dashboard",U,$=>$.data||$,$=>{v.value=$,c().value=Date.now()});return}}await m()(),z().catch(()=>{}),i&&i.set(U,v.value)}return{loading:n,loadingView:S,viewCache:l,dates:b,selectedDate:g,lastLoadTime:C,consensus:D,viewNote:x,loadDates:J,refreshCalendarData:Z,exportCSV:N,loadConsensusData:M,loadDashboardCached:A}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:p,loadIndexKline:t,rememberDialogTrigger:f,menus:v,currentPage:z,currentSubPage:m,stockDetail:c,selectedDate:_}=a,n=ref({indices:[],market_sentiment:null});let S=null;const l=ref(!1),b=ref(null),g=ref(null),C=ref(!1);function D(){window.__quantModules.charts.disposeKline("stockKlineChart")}const x=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{x.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const o=ref(!1),i=ref(null),u=ref(!1),F=ref(0),W=ref(0);async function Y(){try{const k=await(await fetch("/api/market/overview")).json();n.value=k,J(k)}catch(L){console.error("获取市场行情失败:",L)}}function J(L){S&&clearInterval(S),L&&L.in_trading_hours&&(S=setInterval(Y,6e5))}function Z(L){f(),b.value=L,g.value=null,p.value="daily",N(L.code),window.__quantModules.charts.disposeKline("indexKlineChart"),l.value=!0,setTimeout(async()=>{await t("daily")},500)}async function N(L){try{const T=await(await fetch("/api/ai/index-eval/"+L)).json();T.success&&T.data&&(g.value=T.data)}catch(k){console.warn("[getIndexAiScore] cache check failed:",k)}}async function M(){if(b.value){C.value=!0;try{const k=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:b.value.code,index_name:b.value.name,current_price:b.value.close,pct_chg:b.value.pct_chg})})).json();k.success?g.value=k.data:ElementPlus.ElMessage.error(k.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{C.value=!1}}}function A(L){window.__quantModules.charts.zoomKline("stockKlineChart",L)}function U(){u.value=!0,setTimeout(()=>{u.value=!1},600)}function ae(L,k){if(L===k){U();return}const T=800,le=performance.now(),G=k-L;o.value=!0,i.value={value:G,dir:G>0?"up":"down"},u.value=!0,setTimeout(()=>{u.value=!1},600),setTimeout(()=>{i.value=null},2300);function h(r){const E=r-le,d=Math.min(E/T,1),K=1-Math.pow(1-d,3),oe=Math.round(L+G*K);c.value&&c.value.score_data&&(c.value.score_data.score=oe),d<1?requestAnimationFrame(h):(c.value&&c.value.score_data&&(c.value.score_data.score=k),o.value=!1)}requestAnimationFrame(h)}function $(){if(!c.value||!c.value.score_data)return;const L=c.value.score_data.score;if(L==null)return;const k=600,T=performance.now();u.value=!0,setTimeout(()=>{u.value=!1},600);function le(G){const h=Math.min((G-T)/k,1),r=1-Math.pow(1-h,3),E=Math.round(L*r);c.value&&c.value.score_data&&(c.value.score_data.score=E),h<1?requestAnimationFrame(le):c.value&&c.value.score_data&&(c.value.score_data.score=L)}requestAnimationFrame(le)}async function se(){var T;if(!c.value||!c.value.stock)return;const L=c.value.stock,k=(T=c.value.score_data)==null?void 0:T.score;try{const le=new Date().toISOString().split("T")[0],G=_.value||le,r=await(await fetch(`/api/calendar/stock/${encodeURIComponent(L)}/score?date=${G}`)).json();if(r.success&&r.score_data){const E=r.score_data.score;c.value&&(c.value.score_data=r.score_data),k!=null&&E!==k?ae(k,E):U()}else U()}catch(le){console.warn("[refreshStockScore] failed:",le)}}function O(L){x.value&&(F.value=L.touches[0].clientX,W.value=L.touches[0].clientY)}function H(L){if(!x.value)return;const k=F.value-L.changedTouches[0].clientX,T=W.value-L.changedTouches[0].clientY;if(Math.abs(k)>Math.abs(T)&&Math.abs(k)>80){const le=v.value.map(function(h){return h.key}),G=le.indexOf(z.value);if(k>0&&G<le.length-1){const h=le[G+1],r=window.__quantGoPage;r?r(h,""):(z.value=h,m.value="")}else if(k<0&&G>0){const h=le[G-1],r=window.__quantGoPage;r?r(h,""):(z.value=h,m.value="")}}}return{marketData:n,marketRefreshTimer:S,fetchMarketData:Y,indexDetailVisible:l,indexDetail:b,indexAiResult:g,indexAiLoading:C,showIndexDetail:Z,loadCachedIndexEval:N,doIndexAiEvaluate:M,disposeStockKline:D,isMobile:x,zoomKlineRange:A,scoreAnimating:o,scoreDelta:i,scorePulse:u,triggerScorePulse:U,animateScoreChange:ae,animateScoreEntrance:$,refreshStockScore:se,touchStartX:F,touchStartY:W,onTouchStart:O,onTouchEnd:H}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:p,currentSubPage:t}=a,f=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),v=ref("idle"),z=ref("");async function m(){if(!f.value.webhook_url){z.value="请先输入Webhook地址";return}v.value="testing",z.value="";try{const P=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:f.value.webhook_url})})).json();P.success||P.status==="ok"?(z.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(z.value=P.message||"测试失败",ElementPlus.ElMessage.error(z.value))}catch{z.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}v.value="idle"}const c=Vue.ref(!1);async function _(){c.value=!0;try{const P=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{c.value=!1}}const n=ref(!1);function S(){e("ai","chat_history"),n.value=!0,Vue.nextTick(()=>{const Q=document.querySelector('input[placeholder*="输入问题"]');Q&&Q.focus()})}const l=ref([]),b=ref({});async function g(){try{const P=await(await fetch("/api/ai/recommend-strategies")).json();P.success&&(l.value=P.recommendations||[])}catch(Q){console.warn("[loadStrategyRecommendations] failed:",Q)}}async function C(){try{const P=await(await fetch("/api/ai/usage-stats")).json();P.success&&(b.value=P)}catch(Q){console.warn("loadAiUsage failed:",Q)}}const D=ref({}),x=ref([]),o=ref(7);async function i(){try{const P=await(await fetch("/api/system/monitor")).json();P.success&&(D.value=P)}catch(Q){console.warn("loadSysMonitor failed:",Q)}}const u=ref({});async function F(){try{const P=await(await fetch("/api/system/health-detail")).json();P.success&&(u.value=P)}catch(Q){console.warn("loadHealthDetail failed:",Q)}}async function W(){try{const P=await(await fetch(`/api/analytics/rank?days=${o.value}`)).json();P.success&&(x.value=P.rank||[])}catch(Q){console.warn("loadAnalytics failed:",Q)}}const Y=ref(!1);async function J(){if(!Y.value){Y.value=!0;try{const P=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return P&&P.success?P.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${P.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${P.date}）`):ElementPlus.ElMessage.error(P&&(P.detail||P.message)||"生成复盘失败"),F(),P}catch(Q){ElementPlus.ElMessage.error("生成复盘失败: "+(Q.message||""))}finally{Y.value=!1}}}const Z=ref(null),N=ref(!1);async function M(){try{const P=await(await fetch("/api/ai/fact-check/latest")).json();Z.value=P&&P.success&&P.data||null}catch(Q){console.warn("loadFactCheck failed:",Q)}}async function A(){if(!N.value){N.value=!0;try{const P=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return P&&P.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${P.data.pass_rate!=null?P.data.pass_rate+"%":"--"} (${P.data.checked} 个数字)`),M()):ElementPlus.ElMessage.error(P&&(P.detail||P.message)||"事实护栏抽查失败"),P}catch(Q){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Q.message||""))}finally{N.value=!1}}}const U=ref([]),ae=ref(!1);async function $(){try{const P=await(await fetch("/api/backup/list")).json();P.success&&(U.value=P.backups||[])}catch(Q){console.error("加载备份列表失败",Q)}}async function se(){ae.value=!0;try{const P=await(await fetch("/api/backup/create",{method:"POST"})).json();P.success?(ElementPlus.ElMessage.success(P.message||"备份成功"),$()):ElementPlus.ElMessage.error(P.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{ae.value=!1}}const O=ref(""),H=ref("");async function L(Q){O.value=Q,H.value="";try{const P=window.__quantModules&&window.__quantModules.core||{},w=typeof P.authHeaders=="function"?P.authHeaders():{},R=await fetch("/api/reports/export?format="+encodeURIComponent(Q),{headers:w});if(!R.ok)throw new Error("HTTP "+R.status);const ie=await R.blob(),ye=URL.createObjectURL(ie),ve=document.createElement("a");ve.href=ye;const ze=new Date().toISOString().slice(0,10);ve.download="report_"+ze+"."+Q,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve),URL.revokeObjectURL(ye),H.value="报表已导出 ("+Q.toUpperCase()+")"}catch(P){H.value="报表导出失败: "+(P.message||P)}finally{O.value=""}}async function k(Q){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Q} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(P){console.warn("[restoreBackup] confirm cancelled:",P);return}try{const w=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Q})})).json();w.success?(ElementPlus.ElMessage.success(w.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(w.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const T=ref(!1),le=ref(0),G=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function h(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{le.value=0,T.value=!0},800)}function r(){T.value=!1,localStorage.setItem("quant_tour_done","1")}function E(){T.value=!1,localStorage.setItem("quant_tour_done","1")}const d=ref(""),K=ref(!1);async function oe(){if(!d.value||!d.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}K.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:d.value.trim(),page:p.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(d.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{K.value=!1}}return{feishuConfig:f,feishuTestStatus:v,feishuTestMessage:z,feishuSaving:c,testFeishuWebhook:m,saveFeishuConfig:_,aiFabHidden:n,openAiFab:S,strategyRecommendations:l,aiUsage:b,loadStrategyRecommendations:g,loadAiUsage:C,sysMonitor:D,analyticsRank:x,analyticsDays:o,loadSysMonitor:i,loadAnalytics:W,healthDetail:u,loadHealthDetail:F,reviewTriggering:Y,triggerMarketReview:J,factCheck:Z,factCheckRunning:N,loadFactCheck:M,triggerFactCheck:A,backups:U,backupCreating:ae,loadBackups:$,createBackup:se,restoreBackup:k,reportExporting:O,reportExportMsg:H,exportReport:L,tourVisible:T,tourStep:le,tourSteps:G,maybeShowTour:h,skipTour:r,finishTour:E,feedbackText:d,feedbackSubmitting:K,submitFeedback:oe}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:p,selectedDate:t,dates:f,loadConsensusData:v,hapticFeedback:z}=a,m=e(()=>({day:"天",week:"周",month:"月",year:"年"})[p.value]||"天"),c=e(()=>({day:"date",week:"week",month:"month",year:"year"})[p.value]||"date"),_=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[p.value]||"YYYY-MM-DD"),n=e(()=>!t.value||!f.value||f.value.length===0?!1:t.value>f.value[0]),S=e(()=>!t.value||!f.value||f.value.length===0?!1:t.value<f.value[f.value.length-1]);function l(D){z("light"),p.value=D;let x=t.value||f.value[f.value.length-1];if(D==="year"){const o=x.substring(0,4),i=f.value.find(u=>u.startsWith(o));t.value=i||x}else if(D==="month"){const o=x.substring(0,7),i=f.value.find(u=>u.startsWith(o));t.value=i||x}setTimeout(v,50)}function b(D){z("light");const x=t.value,o=f.value,i=o.indexOf(x);if(i<0)return;let u=1;p.value==="week"&&(u=5),p.value==="month"&&(u=22),p.value==="year"&&(u=250);const F=i+D*u;if(F>=0&&F<o.length){const W=o[F];if(p.value==="month"){const Y=W.substring(0,7),J=o.find(Z=>Z.startsWith(Y));t.value=J||W}else if(p.value==="year"){const Y=W.substring(0,4),J=o.find(Z=>Z.startsWith(Y));t.value=J||W}else t.value=W;v()}}function g(D){if(!f.value||f.value.length===0)return!1;const x=D.getFullYear(),o=String(D.getMonth()+1).padStart(2,"0"),i=String(D.getDate()).padStart(2,"0"),u=`${x}-${o}-${i}`;return!f.value.includes(u)}function C(D){D&&D.length>10&&(t.value=D.substring(0,10)),v()}return{viewUnit:m,datePickerType:c,dateFormat:_,canNavPrev:n,canNavNext:S,switchView:l,navigateDate:b,disabledDate:g,onDateChange:C}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:p,navigateTo:t,currentPage:f,currentView:v,navigateDate:z,switchView:m,getLoadDashboardData:c,refreshCalendarData:_,getLoadAiHistory:n,exportCSV:S,getShowBatchEvaluate:l,openAiFab:b,toggleSidebar:g,showStockDetail:C}=a,D=ref("");async function x(N,M){if(!N||N.trim().length<1){M([]);return}const A=window.QuantCommandPanel;let U=[];A&&e.value&&(U=A.buildSearchSuggestions(N,e.value,p,A.DEFAULT_COMMANDS));const ae=window.__quantModules&&window.__quantModules.pinyin;ae&&ae.searchCoreStocks(N).forEach(function($){U.push({value:$.code+" "+$.name,type:"stock",code:$.code,name:$.name,label:$.name,subLabel:$.code,icon:"trending-up",iconName:"trending-up"})});try{const se=await(await fetch("/api/search?q="+encodeURIComponent(N))).json();if(se.success&&se.results){const O=se.results.map(function(L){return{value:L.code+" "+L.name,type:"stock",code:L.code,name:L.name,label:L.name,subLabel:L.code,icon:"trending-up",iconName:"trending-up"}}),H=[];(se.groups||[]).forEach(function(L){(L.items||[]).forEach(function(k){k.type==="sector"?H.push({value:k.name+" · "+k.subLabel,type:"sector",name:k.name,label:k.name,subLabel:"板块",icon:"layers",iconName:"layers"}):k.type==="strategy"?H.push({value:k.name+" · 策略",type:"strategy",id:k.id,name:k.name,label:k.name,subLabel:"策略",icon:"target",iconName:"target"}):k.type==="menu"&&H.push({value:k.name,type:"menu",menuKey:k.menuKey,name:k.name,label:k.name,subLabel:k.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),M(U.concat(O,H))}else M(U)}catch($){console.warn("[searchStocks] fetch failed:",$),M(U)}}function o(N){return N?N.type==="menu"?{action:"menu",menuKey:N.menuKey,subPage:N.subPage}:N.type==="command"?{action:"command",key:N.key}:N.type==="sector"?{action:"sector",name:N.name}:N.type==="strategy"?{action:"strategy",id:N.id,name:N.name}:N.type==="stock"||N.code&&N.name?{action:"stock",code:N.code,name:N.name}:null:null}function i(N){D.value="";const M=window.QuantCommandPanel,A=M?M.dispatchSearchSelection(N):o(N);if(A){if(A.action==="menu"){t(A.menuKey,A.subPage);return}if(A.action==="command"){u(A.key);return}if(A.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(A.name);return}if(A.action==="strategy"){t("research","overview");return}A.action==="stock"&&typeof C=="function"&&C(A.code,A.name)}}function u(N){if(N==="refresh"){const M=f.value;M==="strategies"?c().catch(function(){}):M==="calendar"?_().catch(function(){}):M==="ai"&&n().catch(function(){})}else N==="export"?S():N==="batch"?l().value=!0:N==="ai"?b():N==="sidebar"?g():N==="open-eval-history"?t("ai","history"):N==="open-shortterm"&&t("shortterm","overview")}const F=ref(!1),W=ref(!1);function Y(N){if(!N)return!1;const M=N.tagName;return M==="INPUT"||M==="TEXTAREA"||M==="SELECT"||N.isContentEditable}function J(N){if(Y(N.target))return;const M=N.key.toLowerCase();if(N.ctrlKey&&M==="k"){N.preventDefault(),W.value=!0;return}if(N.ctrlKey&&M==="/"){N.preventDefault(),F.value=!F.value;return}if(N.ctrlKey&&M==="h"){N.preventDefault(),t("ai","history");return}if(N.ctrlKey&&N.shiftKey&&M==="s"){N.preventDefault(),t("shortterm","overview");return}if(!(N.ctrlKey||N.metaKey||N.altKey)){if(M>="1"&&M<="5"){const A=parseInt(M)-1,U=e.value[A];U&&t(U.key,U.subPages[0]||"");return}if(M==="r"&&Z(),(M==="arrowleft"||M==="arrowright"||M==="arrowup"||M==="arrowdown")&&f.value==="calendar")if(N.preventDefault(),M==="arrowleft"||M==="arrowright")z(M==="arrowleft"?-1:1);else{const A=["day","week","month","year"].indexOf(v.value),U=["day","week","month","year"][(A+(M==="arrowup"?-1:1)+4)%4];m(U)}}}function Z(){const N=f.value;N==="strategies"?c().catch(()=>{}):N==="calendar"?_().catch(()=>{}):N==="ai"&&n().catch(()=>{})}return{searchQuery:D,searchStocks:x,onSearchSelect:i,runGlobalCommand:u,shortcutHelpVisible:F,commandPaletteVisible:W,isTypingTarget:Y,handleGlobalKeydown:J,refreshCurrentPage:Z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:p,loadDates:t,loadDashboardData:f,loadDashboardCached:v,loadHealthMetrics:z,loadConsensusData:m,applyTheme:c,maybeShowTour:_,loadAiVendors:n}=a,S=ref({username:"",password:""}),l=ref(!1),b=ref(!1),g=ref(!1),C=ref({oldPassword:"",newPassword:"",confirmPassword:""}),D=ref(!1),x=ref(!1),o=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),i=ref(1);async function u(){try{(await(await fetch("/api/setup/status")).json()).needed&&(o.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},i.value=1,x.value=!0)}catch(M){console.warn("[checkSetupWizard] failed:",M)}}async function F(){try{const M={new_password:o.value.newPassword,ai_key:o.value.aiKey,ai_provider:o.value.aiProvider,ai_model:o.value.aiModel,ai_endpoint:o.value.aiEndpoint,tushare_token:o.value.tushareToken},U=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)})).json();U.success?(x.value=!1,ElementPlus.ElMessage.success("初始化完成"),await p()):ElementPlus.ElMessage.error(U.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function W(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(x.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function Y(){if(!S.value.username||!S.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}l.value=!0;try{const A=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S.value)})).json();A.success?(e.value=A.user,localStorage.setItem("quant_user",JSON.stringify(A.user)),localStorage.setItem("quant_token",A.data.access_token),c(A.user.theme||"gold"),typeof n=="function"&&n(),await p(),await t(),await Promise.all([v(),m(),z().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),A.data&&A.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),_(),A.user.role==="admin"&&setTimeout(u,500)):ElementPlus.ElMessage.error(A.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{l.value=!1}}async function J(){b.value=!0;try{const A=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();A.success?(e.value=A.user,localStorage.setItem("quant_user",JSON.stringify(A.user)),localStorage.setItem("quant_token",A.data.access_token),c(A.user.theme||"gold"),await p(),await t(),await f(),z().catch(()=>{}),await m(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(A.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{b.value=!1}}function Z(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function N(){if(!C.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!C.value.newPassword||C.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(C.value.newPassword!==C.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}D.value=!0;try{const M=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:C.value.oldPassword,new_password:C.value.newPassword})}),A=await M.json();M.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),g.value=!1,C.value={oldPassword:"",newPassword:"",confirmPassword:""},Z()):ElementPlus.ElMessage.error(A.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{D.value=!1}}return{loginForm:S,logining:l,guestLogining:b,showChangePassword:g,changePasswordForm:C,changingPassword:D,showSetupWizard:x,setupForm:o,setupStep:i,checkSetupWizard:u,completeSetupWizard:F,resetSetupWizard:W,handleLogin:Y,handleGuestLogin:J,handleLogout:Z,doChangePassword:N}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let p=null;const{strategyFilter:t,currentView:f,statusFilter:v,currentPage:z,currentSubPage:m,menus:c,currentUser:_,strategyFilterCounts:n,lazyTick:S,dates:l,selectedDate:b,consensus:g,loadConsensusData:C,fetchMerrillClock:D,fetchMarketData:x,loadWatchlist:o,loadAiHistory:i,preloadWatchlistKline:u,loadChatHistory:F,loadSystemStatus:W,checkTushareConnection:Y,loadSysMonitor:J,loadAnalytics:Z,loadHealthDetail:N,loadHealthMetrics:M,loadAiUsage:A,loadFactCheck:U,loadAutoEvaluateConfig:ae,loadDatasourceConfig:$,loadFeishuConfig:se,loadAiConfig:O,loadAiVendors:H,loadRateLimit:L,loadDataRefreshConfig:k,loadBackups:T,loadAllGroups:le,loadUsers:G,stockDetailTab:h,stockDetailVisible:r,stockKlineLoaded:E,loadStockKline:d,currentKlinePeriod:K,showMerrillDetail:oe,indexDetailVisible:Q,restoreDialogFocus:P}=a;e(t,w=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(w.selected)),localStorage.setItem("quant_strategy_filter_mode",w.mode)},{deep:!0}),e([f,v],(w,R)=>{w[0]!==R[0]&&C()}),e([z,m],([w,R])=>{var ie;try{const ve=!(w==="calendar"&&R==="calendar")&&R||"",ze=ve?"#"+w+"/"+ve:"#"+w;window.location.hash!==ze&&(window.location.hash=ze)}catch{}if(R&&localStorage.setItem("quant_last_subpage",R),!R&&c.value.find(ye=>ye.key===w)){const ye=c.value.find(ve=>ve.key===w);ye&&ye.subPages.length>0&&(m.value=ye.subPages[0])}if(w==="shortterm"&&R==="market-review"){const ye=window.__lazyLoaders&&window.__lazyLoaders.research;ye&&ye().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(ve){ve&&ve.name&&!ve.__quantRegistered&&(window.__quantApp.component(ve.name,ve),ve.__quantRegistered=!0)}),S&&S.value++}).catch(function(ve){console.warn("[lazy] research 组件补加载失败",ve)})}w==="calendar"&&R==="calendar"&&(!g.value||g.value.length===0)&&(l.value.length>0&&!b.value&&(b.value=l.value[l.value.length-1]||""),setTimeout(C,50)),w==="calendar"&&R==="pool"&&(!g.value||g.value.length===0)&&(l.value.length>0&&!b.value&&(b.value=l.value[l.value.length-1]||""),setTimeout(C,50)),w==="strategies"&&(R==="merrill"&&D(),R==="market"&&x(),R==="consensus"&&(!g.value||g.value.length===0)&&setTimeout(C,50)),w==="ai"&&(R==="watchlist"&&(o(),i(),setTimeout(u,500)),R==="history"&&i(),R==="overview"&&(i(),o()),R==="chat_history"&&F()),(w==="system"||w==="ops")&&((ie=_.value)==null?void 0:ie.role)==="admin"&&(R==="status"&&(W(),Y()),R==="health"&&(N(),M()),R==="schedule"&&N(),R==="guard"&&U(),R==="usage"&&(J(),Z(),N(),M(),A(),U()),R==="autoeval"&&(ae(),H()),R==="datasource"&&$(),R==="feature"&&(se(),O(),L(),k(),T()),R==="user"&&(le(),G())),(w==="system"||w==="ops")&&R==="usage"?p||(p=setInterval(()=>{J(),Z(),N(),M(),A()},3e4)):p&&(clearInterval(p),p=null)}),e(h,(w,R)=>{w==="kline"&&R&&R!=="kline"&&r.value&&(E.value=!1,setTimeout(async()=>{!await d(K.value)&&r.value&&h.value==="kline"&&setTimeout(()=>d(K.value),800)},50))}),e(oe,w=>{w||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([r,Q],([w,R])=>{!w&&!R&&P()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:p,menus:t,currentPage:f,currentSubPage:v,currentView:z,currentKlinePeriod:m,selectedDate:c,dates:_,loadDates:n,loadConsensusData:S,loadDashboardCached:l,appVersion:b,themes:g,fetchMarketData:C,fetchMerrillStages:D,fetchMerrillClock:x,loadAiConfig:o,loadAiVendors:i,loadAiCatalog:u,currentUser:F,loadUserConfig:W,loadAutoEvaluateConfig:Y,loadGroupConfig:J,loadUsers:Z,loadAllGroups:N,loadAiHistory:M}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function A(G,h){const r={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(G==="calendar"&&r[h])return f.value="calendar",v.value="calendar",r[h]&&(z.value=r[h]),!0;if(G==="research"&&(h==="strategy-write"||h==="custom-write")){f.value="research",v.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",h==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const G=window.location.hash||"";if(!G||G==="#")return;const h=G.replace(/^#\/?/,"").split("/"),r=h[0],E=h[1]||"",d=t.value.find(function(K){return K.key===r});if(d&&!A(r,E)){if(!E)f.value=r,v.value=d.subPages[0]||"";else if(d.subPages.indexOf(E)>=0)f.value=r,v.value=E;else return;window.__lazyLoaders&&window.__lazyLoaders[r]&&window.__quantGoPage&&window.__quantGoPage(r,v.value).catch(function(){})}});const U=(G,h=3e3,r="")=>{const E=new Promise((d,K)=>setTimeout(()=>K(new Error("timeout")),h));return Promise.race([G,E]).catch(d=>{console.warn(`[init] ${r||"task"} failed:`,d.message)})},ae=localStorage.getItem("quant_theme"),$=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const G=window.__quantModules.themes;let h=$.theme||"system",r=$.theme_hue!=null&&$.theme_hue!==""?$.theme_hue:null;const E=typeof G.migrateLegacyTheme=="function"?G.migrateLegacyTheme():null;r==null&&E&&(h=E.mode,r=E.hue),r==null&&(r=45),p(h,r)}else ae&&p(ae);await J().catch(function(){}),function(){var G=window.location.hash||"",h=!1;if(G&&G!=="#"){var r=G.replace(/^#\/?/,"").split("/"),E=r[0],d=r[1]||"",K=t.value.find(function(R){return R.key===E});K&&(A(E,d)||(f.value=E,d&&K.subPages.indexOf(d)>=0?v.value=d:d||(v.value=K.subPages[0]||"")),h=!0)}if(!h){var oe=localStorage.getItem("quant_last_page");oe&&t.value.some(function(R){return R.key===oe})?f.value=oe:$.default_view&&t.value.some(function(R){return R.key===$.default_view})&&(f.value=$.default_view);var Q=localStorage.getItem("quant_last_subpage");Q&&(v.value=Q)}var P=localStorage.getItem("quant_last_date");P&&(c.value=P);var w=localStorage.getItem("quant_last_view");w&&(z.value=w),window.__lazyLoaders&&window.__lazyLoaders[f.value]&&window.__quantGoPage&&window.__quantGoPage(f.value,v.value).catch(function(){})}(),fetch("/api/health").then(G=>G.json()).then(G=>{G.version&&(b.value=G.version)}).catch(()=>{});const se=localStorage.getItem("quant_user"),O=localStorage.getItem("quant_token"),H=!!(se&&O),L=Promise.all([Promise.resolve().then(()=>{g.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),U(C(),3e3,"marketData"),U(D(),2e3,"merrillStages")]).then(()=>{U(x(),3e3,"merrillClock")});if(o(),u(),H&&F.value&&i(),!H||!F.value){await L;return}let k=!0;try{k=(await fetch("/api/users/me")).ok}catch{k=!1}if(!k){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),F.value=null;return}if(F.value){const G=F.value.theme||"",h=window.__quantModules&&window.__quantModules.themes;let r=$.theme||"system",E=$.theme_hue!=null&&$.theme_hue!==""?$.theme_hue:null;if(E==null&&h&&typeof h.migrateLegacyTheme=="function"){const d=h.migrateLegacyTheme();if(d)r=d.mode,E=d.hue;else if(G&&h.LEGACY_MAP&&h.LEGACY_MAP[G]){const K=h.LEGACY_MAP[G];r=K[0],E=K[1]}}E==null&&(E=45),p(r,E)}if(window.__quantModules&&window.__quantModules.preferences){const h=await window.__quantModules.preferences.loadPreferences();var T=localStorage.getItem("quant_last_page");!T&&h.default_view&&t.value.some(function(r){return r.key===h.default_view})&&(f.value=h.default_view),h.theme&&p(h.theme,h.theme_hue!=null&&h.theme_hue!==""?h.theme_hue:null),m&&(h.chart_period==="weekly"||h.chart_period==="monthly")&&(m.value=h.chart_period)}await Promise.all([U(W(),2e3,"userConfig"),U(n(),2e3,"dates")]),Y().catch(()=>{}),J().catch(()=>{});const le=f.value==="strategies"?U(l(),2e3,"dashboard"):U(S(),2e3,"consensus");await Promise.all([le,U(Z(),2e3,"users"),U(M(),2e3,"aiHistory")]),N().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:p,onUnmounted:t,watch:f,nextTick:v}=Vue,z=a(!1),m=window.__quantModules&&window.__quantModules.i18n||{},c=m.SUPPORTED_LOCALES||["zh-CN","en"],_=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",n=a(c.indexOf(_)!==-1?_:"zh-CN");typeof m.bindLocale=="function"&&m.bindLocale(n);const S=typeof m.t=="function"?m.t:function(B){return String(B)};function l(B){c.indexOf(B)!==-1&&(n.value=B,typeof m.setLocale=="function"&&m.setLocale(B),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",B))}function b(B,ce){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(B,ce):B==null?"":String(B)}function g(B){(B.key==="Enter"||B.key===" "||B.key==="Spacebar")&&(B.preventDefault(),B.currentTarget&&typeof B.currentTarget.click=="function"&&B.currentTarget.click())}let C=null;function D(){document.activeElement&&document.activeElement!==document.body&&(C=document.activeElement)}function x(){if(C&&C.isConnected)try{C.focus()}catch{}C=null}const o=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{o.value=!0}),window.addEventListener("offline",()=>{o.value=!1})),window.addEventListener("beforeunload",B=>{if(z.value)return B.preventDefault(),B.returnValue="您有未保存的配置变更，确定要离开吗？",B.returnValue});function i(B="light"){typeof navigator<"u"&&navigator.vibrate&&(B==="light"?navigator.vibrate(10):B==="medium"?navigator.vibrate(20):B==="heavy"&&navigator.vibrate([10,30,10]))}const u=useMerrillClock(),{merrillData:F,merrillStagesConfig:W,showMerrillDetail:Y,merrillDetailData:J,merrillClockConfig:Z,merrillClockLastUpdated:N,merrillReevalResult:M,merrillReevalLoading:A,stages:U,indicatorList:ae,dimensionScoreList:$,detailDimensionScoreList:se,confidenceColor:O,timelineStages:H,clockPosition:L,merrillProgressStyle:k,FULL_CYCLE_MONTHS:T,getStageAngle:le,getCycleProgress:G,getCurrentStageMonths:h,getStageTotalMonths:r,isStageCompleted:E,getCharLabel:d,getAssetName:K,getRankColor:oe,fetchMerrillStages:Q,fetchMerrillClock:P,loadMerrillTimeline:w,showTimelineStage:R,merrillTimeline:ie,timelineLoading:ye,showStageDetail:ve,saveMerrillClockConfig:ze,doMerrillReevaluate:Ie,startAutoRefresh:Pe,stopAutoRefresh:qe}=u,te=a(localStorage.getItem("sidebar_collapsed")==="1");function we(){te.value=!te.value,localStorage.setItem("sidebar_collapsed",te.value?"1":"0")}const De=a(null),ne=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],X=e(()=>{var Ue,It,Ut;const B=((Ue=Ae.value)==null?void 0:Ue.role)||"guest",ce=((It=Ae.value)==null?void 0:It.group)||B,me=((Ut=De.value)==null?void 0:Ut[ce])||null;return ne.map(zt=>{if(me&&me.visible_menus&&zt.key in me.visible_menus&&!me.visible_menus[zt.key])return null;const ga={...zt,name:S("nav."+zt.key)||zt.name};return me!=null&&me.visible_sub_pages&&(ga.subPages=zt.subPages.filter(os=>{const Sd=zt.key+"."+os;return me.visible_sub_pages[Sd]!==!1})),zt.key==="system"&&B==="guest"&&zt.guestSubPages&&(ga.subPages=zt.guestSubPages),ga}).filter(Boolean)});async function pe(){try{if(!localStorage.getItem("quant_token"))return;const ce=await fetch("/api/groups/my");if(ce.ok){const me=await ce.json();De.value={[me.group_id]:me.group}}}catch(B){console.warn("loadGroupConfig:",B)}}const Ee=a("strategies"),Ne=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},Ke=a(Ne.navMode);function rt(B){const ce=window.__quantModules&&window.__quantModules.navModeCore;Ke.value=ce?ce.normalizeNavMode(B):B==="tree"||B==="toptab"?B:"toptab",ce&&ce.writePrefs({navMode:Ke.value})}const dt=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function Qe(B,ce=""){i("light"),Ee.value=B,Ze.value=ce,localStorage.setItem("quant_last_subpage",ce)}function Et(){const B=X.value;if(!B||!B.length)return;if(!B.some(function(je){return je.key===Ee.value})){const je=B[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",je.key),Ee.value=je.key,Ze.value=je.subPages&&je.subPages[0]||"";return}const me=B.find(function(je){return je.key===Ee.value});me&&me.subPages&&me.subPages.length&&!me.subPages.includes(Ze.value)&&(Ze.value=me.subPages[0])}const ge=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],be=a("multifactor"),Te=a(null),Re=a(1e5),Ge=a(!1),Xe=a(null);let Ye=null,ht=null;async function xt(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ce={initial_capital:Re.value||1e5};Te.value&&Te.value.length===2&&(ce.start_date=Te.value[0],ce.end_date=Te.value[1]),Ge.value=!0,Xe.value=null;try{const me=await fetch("/api/strategies/"+be.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ce)});if(!me.ok){const It=await me.json().catch(()=>({}));throw new Error(It.detail||"回测失败")}const je=await me.json(),Ue=je.result||{};if(!Ue.success)throw new Error(Ue.message||"回测失败");je.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),Xe.value={total_return_pct:((Ue.total_return??0)*100).toFixed(2),annual_return_pct:((Ue.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ue.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ue.sharpe_ratio??0).toFixed(2),win_rate:((Ue.win_rate??0)*100).toFixed(2),out_sample:Ue.outsample_total_return===void 0?"":((Ue.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ue.overfit_warning||!1,message:Ue.message||""},ft(Ue.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(me){ElementPlus.ElMessage.error(me.message||"回测失败")}finally{Ge.value=!1}}function ft(B){const ce=document.getElementById("backtestEquityChart");if(!ce||!B||B.length===0)return;const me=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,je=()=>{ht=B,Ye&&(Ye.dispose(),Ye=null),Ye=echarts.init(ce),Ye.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ue=B.map(Ut=>Ut.date||Ut[0]),It=B.map(Ut=>Ut.value??Ut[1]);Ye.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ue,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:It,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};me?me().then(je).catch(()=>{}):je()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){ht&&ft(ht)}));const Ze=a("overview"),jt=e(()=>{const B=ne.find(ce=>ce.key===Ee.value);return B?B.name:Ee.value}),Nt=a(0),yt=e(()=>{Nt.value;const B={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ce=Ze.value;return Ee.value==="shortterm"&&ce==="market-review"?"qc-research-page":Ee.value==="ops"&&ce==="execution"?"qc-strategies-page":B[Ee.value]||""}),ut=a(!1),Vt=a({}),q=a([]);a("");const de=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),ke=a("day"),xe=a("all"),Ae=a(null);f(X,function(){Et()}),f([Ee,Ze],function(){const B=document.querySelector(".main-content");B&&(B.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const B=localStorage.getItem("quant_user"),ce=localStorage.getItem("quant_token");if(B&&ce)try{Ae.value=JSON.parse(B)}catch{}}();const We=a(!1),I=a("kline"),re=a(null),He=a(!1),$e=a(localStorage.getItem("qc_detail_mode")||"split"),lt=a(window.innerWidth<=1024),kt=e(()=>$e.value==="split"&&!lt.value);function Ft(B){$e.value=B;try{localStorage.setItem("qc_detail_mode",B)}catch{}}window.addEventListener("resize",()=>{lt.value=window.innerWidth<=1024});const Mt=35,St=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function ct(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",St.value?St.value+"px":Mt+"%")}ct();function Dt(B){const ce=Math.max(1,Math.min(B,2e3));St.value=ce,ct();try{localStorage.setItem("qc_split_width",String(ce))}catch{}}function Ot(B){if(St.value)return St.value;const ce=B?B.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ce*Mt/100))}let _t=null;function Yt(B,ce){if(!ce||lt.value)return;B.preventDefault();const me=ce.getBoundingClientRect().width;_t={startX:B.clientX,startW:Ot(ce),minW:Math.max(200,Math.floor(me*Mt/100)),maxW:Math.floor(me/2)},document.body.classList.add("qc-split-resizing")}function vt(B){if(!_t)return;const ce=B.clientX-_t.startX;let me=_t.startW+ce;me=Math.max(_t.minW,Math.min(me,_t.maxW)),St.value=me,ct();try{localStorage.setItem("qc_split_width",String(me))}catch{}}function bt(){_t&&(_t=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",vt),document.addEventListener("mouseup",bt));function Bt(B){const ce=B.target&&B.target.closest?B.target.closest("[data-split-resize]"):null;if(!ce)return;const me=ce.closest("[data-split-root]");Yt(B,me)}typeof document<"u"&&document.addEventListener("mousedown",Bt,!0);const gt={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},tt=a({});function Ht(B,ce){return gt[ce]||ce}function aa(B){const ce=ne.find(je=>je.key===B);if(!ce||!ce.subPages||!ce.subPages.length)return;if(!(tt.value[B]||[]).length){const je=ce.subPages[0];tt.value=Object.assign({},tt.value,{[B]:[{subPage:je,title:Ht(B,je)}]})}}function da(B,ce){const me=window.__quantModules&&window.__quantModules.tabsCore,je=Ht(B,ce);if(me){const Ue=me.openTab(tt.value,B,ce,je);tt.value=Ue.groups}else{const Ue=tt.value[B]||[];Ue.some(It=>It.subPage===ce)||(tt.value=Object.assign({},tt.value,{[B]:Ue.concat([{subPage:ce,title:je}])}))}Qe(B,ce)}function la(B,ce){const me=window.__quantModules&&window.__quantModules.tabsCore,je=Ze.value;let Ue=null;if(me)Ue=me.closeTab(tt.value,B,ce,je),tt.value=Ue.groups;else{const zt=tt.value[B]||[];tt.value=Object.assign({},tt.value,{[B]:zt.filter(ga=>ga.subPage!==ce)})}if(!(tt.value[B]||[]).length){aa(B);const zt=ne.find(os=>os.key===B),ga=zt&&zt.subPages&&zt.subPages[0];ga&&Qe(B,ga);return}const Ut=Ue?Ue.nextActive:null;Ut&&Qe(B,Ut)}function Xt(B,ce){if(!(tt.value[B]||[]).some(je=>je.subPage===ce)){da(B,ce);return}Qe(B,ce)}f([Ee,Ze],([B,ce])=>{aa(B);const me=tt.value[B]||[];ce&&!me.some(je=>je.subPage===ce)&&(tt.value=Object.assign({},tt.value,{[B]:me.concat([{subPage:ce,title:Ht(B,ce)}])}))},{immediate:!0});const ua=function(B){if(!(B.ctrlKey&&B.key==="Tab"))return;const ce=Ee.value,me=tt.value[ce]||[];if(me.length<=1)return;B.preventDefault();const je=Ze.value,Ue=Math.max(0,me.findIndex(zt=>zt.subPage===je)),It=B.shiftKey?(Ue-1+me.length)%me.length:(Ue+1)%me.length,Ut=me[It];Ut&&Xt(ce,Ut.subPage)};window.addEventListener("keydown",ua);const va=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),Qt=a("light"),j=[45,220,0,140,270,320],he={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},Oe=a(45),Me=a(function(){const B=window.__quantModules&&window.__quantModules.preferences;return B&&B.getPreference&&B.getPreference("theme")||"system"}());(function(){const B=window.__quantModules&&window.__quantModules.preferences,ce=B&&B.getPreference&&B.getPreference("theme_hue");ce!=null&&ce!==""&&(Oe.value=parseInt(ce,10))})();function st(B){return"hsl("+B+", 75%, 42%)"}function et(B){return he[B]||"自定义 "+B}const Rt=a(""),Kt=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),Tt=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),ma=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],sa=a({day:[],week:[],month:[],year:[]}),ya=a({});function Zt(B,ce){let me=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(me=window.__quantModules.themes.applyTheme(B,ce)),Qt.value=me&&me.mode?me.mode:B==="dark"||B==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Da(B,ce){const me=window.__quantModules&&window.__quantModules.preferences;if(!(!me||!me.setPreferences))try{me.setPreferences({theme:B}),ce!=null&&ce!==""&&me.setPreferences({theme_hue:parseInt(ce,10)})}catch{}}function pa(B,ce){Zt(B,ce),ce!=null&&ce!==""&&(Oe.value=parseInt(ce,10));const me=window.__quantModules&&window.__quantModules.themes;let je=B;me&&me.LEGACY_MAP&&me.LEGACY_MAP[B]&&(je=me.LEGACY_MAP[B][0]),je==="light"||je==="dark"||je==="system"?Me.value=je:Me.value=Qt.value,je==="system"&&(je=Qt.value),Da(je,ce),Ae.value&&(fetch(`/api/users/${Ae.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:je})}),Ae.value.theme=je,localStorage.setItem("quant_user",JSON.stringify(Ae.value)))}function Ra(B){const ce=window.__quantModules&&window.__quantModules.preferences,me=ce&&ce.getPreference?ce.getPreference("theme_hue"):null;pa(B,me)}function za(B){Oe.value=parseInt(B,10);const ce=window.__quantModules&&window.__quantModules.preferences,me=ce&&ce.getPreference&&ce.getPreference("theme")||"light";pa(me,Oe.value)}const fa=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function Wt(B){fa.value=!!B;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",B?"show":"hide")}catch{}}const ba=e(()=>{const B=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return fa.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...B]:B}),Jt=a("daily");(function(){try{const ce=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ce==="weekly"||ce==="monthly")&&(Jt.value=ce)}catch{}})();const wa=a(!1),ka=a(""),y=a(!1),s=a(!1),V=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),ee=["MA5","MA10","MA20","MA60"],_e=a(!1);let Se=0;async function mt(B){if(!re.value)return!1;const ce=++Se;wa.value=!0,Jt.value=B;try{const je=await(await fetch(`/api/market/kline/${re.value.stock}?period=${B}&limit=60`)).json();if(!je.success||!je.data)throw new Error(je.message||"数据获取失败");return ka.value=je.degraded_from?"分钟数据("+je.degraded_from+")暂不可用, 已降级展示日线":"",$s(re.value.stock),ce!==Se?!1:(I.value!=="kline"||(s.value=!0,await v(),window.__quantModules.charts.renderKlineTo("stockKlineChart",je.data,B,!1,{isMobile:ms.value,onLegend:Ue=>{Object.keys(V.value).forEach(It=>{It in Ue&&(V.value[It]=!!Ue[It])})}}),ia()),!0)}catch(me){return console.error("[kline] 加载失败:",re.value&&re.value.stock,B,me),I.value==="kline"&&(s.value=!1,ka.value="",ElementPlus.ElMessage.error("K线加载失败: "+(me&&me.message?me.message:"数据源不可达，请重试"))),!1}finally{wa.value=!1}}async function Je(B){if(Ua.value){y.value=!0,Jt.value=B;try{const me=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${B}&limit=60`)).json();if(!me.success||!me.data)throw new Error(me.message||"数据获取失败");_e.value=!0,await v(),window.__quantModules.charts.renderKlineTo("indexKlineChart",me.data,B,!0,{isMobile:ms.value,onLegend:je=>{Object.keys(V.value).forEach(Ue=>{Ue in je&&(V.value[Ue]=!!je[Ue])})}}),ia()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{y.value=!1}}}async function pt(B){if(!s.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await mt(B)}async function ea(B){if(!_e.value){ElementPlus.ElMessage.info("请先加载K线");return}await Je(B)}function Ct(B){const ce=(We.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ce&&ce.dispatchAction({type:"legendToggleSelect",name:B})}function ia(){["K线","MA5","MA10","MA20","MA60"].forEach(B=>{V.value[B]=!0})}async function ta(){const B=await fetch("/api/system/metrics");if(!B.ok)throw new Error("metrics "+B.status);const ce=await B.json(),me=Array.isArray(ce)?ce:ce&&ce.data_sources||[];q.value=me}const Be=()=>ns,Pt=()=>Es,qa=()=>jo,_a=()=>Aa,qt=()=>ts,Ka=window.__quantAppLogic.data.create({currentView:ke,statusFilter:xe,dashboardData:Vt,loadHealthMetrics:ta,getLoadDashboardData:Be,getLastRefreshTime:Pt,getFetchPoolSignals:qa}),{loading:ci,loadingView:di,viewCache:ui,dates:Ia,selectedDate:$t,lastLoadTime:vi,consensus:xa,viewNote:mi,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ea,loadDashboardCached:Na}=Ka,pi=window.__quantAppLogic.market.create({currentKlinePeriod:Jt,loadIndexKline:Je,rememberDialogTrigger:D,menus:X,currentPage:Ee,currentSubPage:Ze,stockDetail:re,selectedDate:$t}),{marketData:fi,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:gi,indexAiLoading:hi,fetchMarketData:Ga,showIndexDetail:yi,loadCachedIndexEval:bi,doIndexAiEvaluate:wi,disposeStockKline:vs,isMobile:ms,zoomKlineRange:ki,scoreAnimating:_i,scoreDelta:xi,scorePulse:Si,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Ci,onTouchEnd:qi}=pi,Ei=window.__quantAppLogic.ops.create({navigateTo:Qe,currentPage:Ee,currentSubPage:Ze}),{feishuConfig:ps,feishuTestStatus:Mi,feishuTestMessage:Ti,testFeishuWebhook:Pi,saveFeishuConfig:Di,aiFabHidden:Ri,openAiFab:fs,strategyRecommendations:zi,aiUsage:Ai,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:Li,analyticsRank:Ii,analyticsDays:Ni,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Oi,loadHealthDetail:bs,reviewTriggering:ji,triggerMarketReview:Vi,factCheck:Fi,factCheckRunning:Hi,loadFactCheck:ws,triggerFactCheck:Bi,backups:Ki,backupCreating:Wi,loadBackups:ks,createBackup:Ui,restoreBackup:Gi,reportExporting:Yi,reportExportMsg:Ji,exportReport:Qi,tourVisible:$i,tourStep:Xi,tourSteps:Zi,maybeShowTour:el,skipTour:tl,finishTour:al,feedbackText:sl,feedbackSubmitting:il,submitFeedback:ll}=Ei,nl=window.__quantAppLogic.nav.create({currentView:ke,selectedDate:$t,dates:Ia,loadConsensusData:Ea,hapticFeedback:i}),{viewUnit:ol,datePickerType:rl,dateFormat:cl,canNavPrev:dl,canNavNext:ul,switchView:_s,navigateDate:xs,disabledDate:vl,onDateChange:ml}=nl,pl=window.__quantAppLogic.keys.create({menus:X,subPageNames:gt,navigateTo:Qe,currentPage:Ee,currentView:ke,navigateDate:xs,switchView:_s,getLoadDashboardData:Be,refreshCalendarData:ds,getLoadAiHistory:_a,exportCSV:us,getShowBatchEvaluate:qt,openAiFab:fs,toggleSidebar:we,showStockDetail:Cs}),{searchQuery:fl,searchStocks:gl,onSearchSelect:hl,shortcutHelpVisible:yl,commandPaletteVisible:bl,handleGlobalKeydown:Ss}=pl;let Oa=0;async function Cs(B){const ce=++Oa;D(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(B,""),Xa.value=null,Jt.value="daily",s.value=!1,I.value="kline",re.value=null,He.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),We.value=!0,v(()=>Ja());try{const me=await fetch(`/api/calendar/stock/${B}?date=${$t.value}`);if(ce!==Oa)return;re.value=await me.json(),re.value&&re.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(B,re.value.name)}catch{if(ce!==Oa)return;ElementPlus.ElMessage.error("加载失败"),re.value={stock:B,name:"",total_days:0}}finally{ce===Oa&&(He.value=!1)}setTimeout(async()=>{await mt("daily"),Ya()},500),as(B)}const wl={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},kl={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function _l(B){return wl[B]||"var(--text-tertiary)"}function xl(B){return kl[B]||"var(--bg-hover)"}const Sl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:s,stockDetailVisible:We,stockDetailTab:I,stockDetail:re,disposeStockKline:vs}):{},{chatSessions:Cl,chatHistoryView:ql,selectedChatIds:El,expandedChatDates:Ml,expandedChatMonths:Tl,expandedChatStocks:Pl,chatHistoryLoading:Dl,chatHistoryError:Rl,allChatSessionsFlat:zl,chatGroupedByDate:Al,chatGroupedByMonth:Ll,chatGroupedByStock:Il,toggleSelectChat:Nl,toggleSelectChatDate:Ol,toggleSelectChatMonth:jl,toggleSelectChatStock:Vl,toggleChatDateExpand:Fl,toggleChatMonthExpand:Hl,toggleChatStockExpand:Bl,selectAllChatSessions:Kl,deleteSelectedChatSessions:Wl,viewChatSession:Ul,loadChatHistory:qs,deleteChatSession:Gl,renderMarkdown:Yl,stockChatInput:Jl,stockChatMessages:Ql,stockChatLoading:$l,stockChatError:Xl,askStockSend:Zl,askStockQuick:en}=Sl,tn=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:Ae,applyTheme:Zt,allMenuDefs:ne,loadGroupConfig:pe}):{},{userList:an,userSearch:sn,groupFilter:ln,userPageTab:nn,expandedGroups:on,addMemberGroupMap:rn,filteredUsers:cn,toggleGroupExpand:dn,removeMemberFromGroupInline:un,addMemberToGroupInline:vn,changeUserGroup:mn,showAddUser:pn,editingUser:fn,userForm:gn,savingUser:hn,editingGroup:yn,menuConfigDialog:bn,memberDialog:wn,groupEditForm:kn,subPageCache:_n,showAddGroup:xn,addGroupForm:Sn,savingGroup:Cn,groupMembers:qn,addMemberUsername:En,selectedMemberGroup:Mn,subPageSectionExpanded:Tn,toggleSubPageSection:Pn,getGroupMemberCount:Dn,getMenuEnabledCount:Rn,groupCount:zn,openMemberManager:An,loadGroupMembers:Ln,addMemberToGroup:In,removeMemberFromGroup:Nn,availableUsersForGroup:On,onParentToggle:jn,openMenuConfig:Vn,saveMenuConfig:Fn,deleteGroupConfig:Hn,createGroup:Bn,allGroups:Kn,getGroupName:Wn,loadAllGroups:$a,loadUsers:ja,editUser:Un,saveUser:Gn,deleteUser:Yn,toggleUserEnabled:Jn,resetUserPassword:Qn}=tn,$n=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:xa,currentPage:Ee,currentSubPage:Ze,dashboardData:Vt,searchKeyword:Rt,statusFilter:xe,strategyFilter:Tt,strategyFilterCounts:sa}):{},{applyStrategyFilter:wf,statusCounts:Xn,stockPool:Zn,strategyDistribution:eo,strategyPreviewCount:to,saveStrategyFilter:ao,filteredConsensusRank:so,currentPoolSize:io,filteredStrategyCounts:lo,poolChangeBadge:no,timeBarPercent:oo,lastRefreshTime:Es,timeSinceRefresh:ro,navigateToStrategyFilter:co}=$n,uo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:z,consensus:xa}):{},{aiResult:Xa,lastEvalTime:vo,evalHistoryComparison:mo,checklistItems:po,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ps,expandedMonths:fo,expandedStocks:Ds,poolSignals:go,toggleMonthExpand:ho,aiHistoryView:yo,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:bo,aiCatalog:wo,aiModelsError:ko,testingAllModels:_o,savingAiModels:xo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:So,testVendorModel:Co,testAllVendorModels:qo,fetchVendorModels:Eo,addVendorFromCatalog:Mo,addCustomVendor:To,addVendorModel:Po,removeVendorModel:Do,removeVendor:Ro,toggleVendorKeyReveal:zo,toggleVendorEdit:Ao,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:Lo,providerInfo:Io,aiPresets:kf,applyPreset:No,onProviderChange:Oo,fetchPoolSignals:jo,cancelPoolSignals:Qs,loadLastEvaluation:as}=uo,Vo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:Ae,selectedDate:$t,stockDetail:re,stockDetailTab:I,stockDetailVisible:We,stockDetailLoading:He,stockKlineLoaded:s,viewCache:ui,animateScoreEntrance:Ja,loadStockKline:mt,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ps,expandedStocks:Ds,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Fo,evalStrategy:Ho,watchlistSort:Bo,watchlist:Ko,watchlistCodes:Wo,sortedWatchlist:Uo,getWatchlistScore:Go,getLatestScore:_f,addSearchResult:Yo,evaluatedCodes:Jo,klineLoadedCodes:Qo,markKlineLoaded:$s,watchlistSearch:$o,watchlistResults:Xo,watchlistSearching:Zo,dataRefreshConfig:er,dataRefreshReloading:tr,dataRefreshSaving:ar,aiHistoryLoading:sr,aiHistoryError:ir,aiHistoryTotal:lr,aiHistoryLoadingMore:nr,hasMoreAiHistory:or,loadMoreAiHistory:rr,watchlistLoading:cr,doAiEvaluate:dr,loadAiHistory:Aa,deleteSingleHistory:ur,toggleSelectHistory:vr,clearSelection:mr,clearWatchlistSelection:pr,batchReevaluateHistory:fr,batchAddToWatchlist:gr,batchRemoveWatchlist:hr,toggleSelectWatchlist:yr,selectAllHistory:br,selectAllWatchlist:wr,deleteSelectedHistory:kr,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:_r,loadWatchlist:Zs,addToWatchlist:xr,removeFromWatchlist:Sr,clearWatchlist:Cr,toggleWatchlist:qr,showStockKline:Er,preloadingKline:Mr,preloadWatchlistKline:ei,watchlistEvaluate:Tr,batchEvaluateWatchlist:Pr,batchEvaluateSelected:Dr,searchStockForWatchlist:Rr,loadDataRefreshConfig:ti,saveDataRefreshConfig:zr,triggerDataReload:Ar,triggerDataPull:Lr,dataPullRunning:Ir,groupedByDate:Nr,aiHistoryByStock:Or,groupedByMonth:jr,aiHistoryStockCount:Vr,scoreDistribution:Fr,quickEvaluate:Hr,toggleDateExpand:Br,toggleSelectDate:Kr,toggleSelectMonth:Wr,toggleStockExpand:Ur,toggleSelectStock:Gr,registerTrendChart:Yr,viewAiResult:Jr,doBatchEvaluate:Qr,realtimeQuotes:$r,realtimeDegraded:Xr,realtimeWsState:Zr,connectRealtimeQuotes:ec,disconnectRealtimeQuotes:tc,quoteWarningFor:ac,realtimeQuoteColor:sc,realtimePriceText:ic,realtimePctText:lc,realtimeRatioText:nc,REALTIME_DEGRADED_TEXT:oc,REALTIME_FALLBACK_TEXT:rc}=Vo,cc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:ge}):{},{btStrategyOptions:dc,btSelectedStrategies:uc,toggleBtStrategy:vc,btDateRange:mc,btCapital:pc,btCommissionRate:fc,btIncludeBenchmark:gc,btRunning:hc,btResult:yc,btError:bc,btMetrics:wc,btAnnualReturns:kc,btTrades:_c,btStrategyMetricsRows:xc,btDrawdownRegion:Sc,runBacktestWorkbench:Cc,exportBacktestCSV:qc,registerBacktestNavChart:Ec,btFmtNum:Mc}=cc,Tc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:z,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:Qt,changeTheme:pa,autoEvaluateConfig:Za,currentUser:Ae,strategyFilter:Tt,applyTheme:Zt,dashboardData:Vt,lastRefreshTime:Es,saveAiModels:So}):{},{configSaving:Pc,globalConfigDirty:Dc,lastSavedTime:Rc,feishuConfigOriginal:xf,aiConfigOriginal:Sf,tushareConfigOriginal:Cf,tushareConfig:zc,tushareStatus:Ac,datasourceConfig:Lc,datasourceStatus:Ic,syncingData:Nc,stockCount:Oc,tradeDateCount:jc,aiStatus:Vc,appVersion:ai,showImportDialog:Fc,rateLimitConfig:Hc,rateLimitDirty:Bc,rateLimitSaving:Kc,loadRateLimit:ss,saveRateLimit:Wc,saveAiConfig:Uc,testAiApi:Gc,exportConfig:Yc,importConfig:Jc,saveAllConfig:Qc,resetAllConfig:$c,testTushareConnection:Xc,checkTushareConnection:Fa,syncStockData:Zc,loadTushareConfig:si,loadDatasourceConfig:ii,saveDatasourceConfig:ed,testDatasource:td,toggleDatasourceKeyReveal:ad,toggleDatasourceEdit:sd,loadFeishuConfig:is,loadAiConfig:Ha,loadUserConfig:li,loadSystemStatus:ls,loadDashboardData:ns}=Tc,id=window.__quantAppLogic.auth.create({currentUser:Ae,loadUserConfig:li,loadDates:cs,loadDashboardData:ns,loadDashboardCached:Na,loadHealthMetrics:ta,loadConsensusData:Ea,applyTheme:Zt,maybeShowTour:el,loadAiVendors:Va}),{loginForm:ld,logining:nd,guestLogining:od,showChangePassword:rd,changePasswordForm:cd,changingPassword:dd,showSetupWizard:ud,setupForm:vd,setupStep:md,checkSetupWizard:pd,completeSetupWizard:fd,resetSetupWizard:gd,handleLogin:hd,handleGuestLogin:yd,handleLogout:bd,doChangePassword:wd}=id;window.__quantAppLogic.watch.register({strategyFilter:Tt,currentView:ke,statusFilter:xe,currentPage:Ee,currentSubPage:Ze,menus:X,currentUser:Ae,strategyFilterCounts:sa,lazyTick:Nt,dates:Ia,selectedDate:$t,consensus:xa,loadConsensusData:Ea,fetchMerrillClock:P,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:Aa,preloadWatchlistKline:ei,loadChatHistory:qs,loadSystemStatus:ls,checkTushareConnection:Fa,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:ta,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:ii,loadFeishuConfig:is,loadAiConfig:Ha,loadAiVendors:Va,loadRateLimit:ss,loadDataRefreshConfig:ti,loadBackups:ks,loadAllGroups:$a,loadUsers:ja,stockDetailTab:I,stockDetailVisible:We,stockKlineLoaded:s,loadStockKline:mt,currentKlinePeriod:Jt,showMerrillDetail:Y,indexDetailVisible:Wa,restoreDialogFocus:x});const kd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:Zt,menus:X,currentPage:Ee,currentSubPage:Ze,currentView:ke,currentKlinePeriod:Jt,selectedDate:$t,dates:Ia,loadDates:cs,loadConsensusData:Ea,loadDashboardCached:Na,appVersion:ai,themes:va,fetchMarketData:Ga,fetchMerrillStages:Q,fetchMerrillClock:P,loadMerrillTimeline:w,showTimelineStage:R,merrillTimeline:ie,timelineLoading:ye,loadAiConfig:Ha,loadAiVendors:Va,loadAiCatalog:Is,currentUser:Ae,loadUserConfig:li,loadAutoEvaluateConfig:Xs,loadGroupConfig:pe,loadUsers:ja,loadAllGroups:$a,loadAiHistory:Aa}),{runOnMounted:_d}=kd;window.__quantGoPage=async(B,ce)=>{try{const me=window.__lazyLoaders&&window.__lazyLoaders[B];me&&await me()}catch(me){console.warn("[lazy] 页面组件加载失败",B,me)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(me=>{me&&me.name&&!me.__quantRegistered&&(window.__quantApp.component(me.name,me),me.__quantRegistered=!0)}),Nt&&Nt.value++,Ee.value=B,ce&&(Ze.value=ce)};let Ma;f(Ee,async B=>{var ce;i("light");try{const me=ne.find(function(je){return je.key===B});document.title=(me?me.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",B),B!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:B})}).catch(()=>{})}catch(me){console.warn("pageView track failed:",me)}if(Ma&&(clearInterval(Ma),Ma=null),B==="strategies")await Na(),Ma=setInterval(()=>{Na().catch(()=>{})},5*60*1e3);else if(B==="calendar")$t.value&&await Ea();else if(B==="ai")gs(),Qa(),await Aa();else if(B==="system"){if(!$t.value){const je=await(await fetch("/api/dashboard")).json(),Ue=je.data||je;Ue.latest_date&&($t.value=Ue.latest_date)}if($t.value){const me=["day","week","month","year"];for(const je of me)try{const It=await(await fetch(`/api/view/${je}/${$t.value}?status=all`)).json();sa.value[je]=It.stocks||[]}catch(Ue){console.warn("loadConsensusData view load failed:",Ue)}(!xa.value||xa.value.length===0)&&(xa.value=sa.value.day||[])}((ce=Ae.value)==null?void 0:ce.role)==="admin"&&(await ja(),await is(),await si(),await ls(),await Ha(),await ss(),Fa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Fa,36e5)))}}),p(async()=>{await _d()}),Pe(),w(),t(()=>{Ma&&clearInterval(Ma),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",ua)});function xd(B,ce=2){return B==null||B===""||isNaN(Number(B))?"--":Number(B).toFixed(ce)}return{currentPage:Ee,pageComp:yt,currentSubPage:Ze,sidebarCollapsed:te,menus:X,navMode:Ke,setNavMode:rt,tabGroups:tt,openTab:da,closeTab:la,activateTab:Xt,fmtNum:xd,sanitizeHtml:b,keyClick:g,isOnline:o,currentUser:Ae,allMenuDefs:ne,t:S,locale:n,changeLanguage:l,currentPageName:jt,subPageNames:gt,searchQuery:fl,searchStocks:gl,onSearchSelect:hl,selectedDate:$t,onDateChange:ml,disabledDate:vl,refreshCalendarData:ds,exportCSV:us,viewNote:mi,loading:ci,lastLoadTime:vi,resetSetupWizard:gd,showChangePassword:rd,themes:va,currentTheme:Qt,changeTheme:pa,changeThemeMode:Ra,changeThemeHue:za,handleLogout:bd,themeHues:j,themeHueNames:he,themeHue:Oe,themeMode:Me,hueColor:st,hueName:et,marketData:fi,merrillData:F,merrillTimeline:ie,timelineLoading:ye,merrillStagesConfig:W,fetchMerrillStages:Q,healthMetrics:q,feishuConfig:ps,feishuTestStatus:Mi,feishuTestMessage:Ti,shortcutHelpVisible:yl,shortcutHelpItems:dt,commandPaletteVisible:bl,tourVisible:$i,tourStep:Xi,tourSteps:Zi,skipTour:tl,finishTour:al,backups:Ki,backupCreating:Wi,loadBackups:ks,createBackup:Ui,restoreBackup:Gi,reportExporting:Yi,reportExportMsg:Ji,exportReport:Qi,sysMonitor:Li,analyticsRank:Ii,analyticsDays:Ni,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Oi,loadHealthDetail:bs,reviewTriggering:ji,triggerMarketReview:Vi,factCheck:Fi,factCheckRunning:Hi,loadFactCheck:ws,triggerFactCheck:Bi,strategyRecommendations:zi,aiUsage:Ai,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:Ri,openAiFab:fs,feedbackText:sl,feedbackSubmitting:il,submitFeedback:ll,backtestStrategies:ge,backtestStrategy:be,backtestRange:Te,backtestCapital:Re,backtestRunning:Ge,backtestResult:Xe,runBacktest:xt,btStrategyOptions:dc,btSelectedStrategies:uc,toggleBtStrategy:vc,btDateRange:mc,btCapital:pc,btCommissionRate:fc,btIncludeBenchmark:gc,btRunning:hc,btResult:yc,btError:bc,btMetrics:wc,btAnnualReturns:kc,btTrades:_c,btStrategyMetricsRows:xc,btDrawdownRegion:Sc,runBacktestWorkbench:Cc,exportBacktestCSV:qc,registerBacktestNavChart:Ec,btFmtNum:Mc,fetchMarketData:Ga,fetchMerrillClock:P,testFeishuWebhook:Pi,saveFeishuConfig:Di,merrillClockConfig:Z,merrillClockLastUpdated:N,merrillReevalResult:M,merrillReevalLoading:A,saveMerrillClockConfig:ze,doMerrillReevaluate:Ie,dataRefreshConfig:er,dataRefreshReloading:tr,dataRefreshSaving:ar,loadDataRefreshConfig:ti,saveDataRefreshConfig:zr,triggerDataReload:Ar,triggerDataPull:Lr,dataPullRunning:Ir,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:gi,indexAiLoading:hi,loadCachedIndexEval:bi,showIndexDetail:yi,doIndexAiEvaluate:wi,klinePeriods:ba,currentKlinePeriod:Jt,klineLoading:wa,indexKlineLoading:y,stockKlineLoaded:s,indexKlineLoaded:_e,klineDegradeNote:ka,klineShowMinutes:fa,toggleKlineShowMinutes:Wt,loadStockKline:mt,switchKlinePeriod:pt,loadIndexKline:Je,switchIndexKlinePeriod:ea,zoomKlineRange:ki,MA_LINES:ee,klineMaVisible:V,toggleKlineMa:Ct,scoreAnimating:_i,scoreDelta:xi,scorePulse:Si,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:Y,merrillDetailData:J,showStageDetail:ve,getCharLabel:d,getAssetName:K,getRankColor:oe,levelColor:_l,levelBg:xl,timelineStages:H,getStageAngle:le,getCycleProgress:G,getCurrentStageMonths:h,getStageTotalMonths:r,isStageCompleted:E,stages:U,indicatorList:ae,dimensionScoreList:$,confidenceColor:O,views:de,currentView:ke,statusFilter:xe,loginForm:ld,logining:nd,guestLogining:od,dashboardData:Vt,loadingView:di,dates:Ia,consensus:xa,searchKeyword:Rt,stockDetailVisible:We,stockDetailTab:I,stockDetail:re,stockDetailLoading:He,detailDisplayMode:$e,setDetailDisplayMode:Ft,isNarrow:lt,detailSplitEnabled:kt,splitWidth:St,setSplitWidth:Dt,SPLIT_DEFAULT_PCT:Mt,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:an,showAddUser:pn,editingUser:fn,userForm:gn,savingUser:hn,userSearch:sn,filteredUsers:cn,groupFilter:ln,userPageTab:nn,expandedGroups:on,addMemberGroupMap:rn,toggleGroupExpand:dn,removeMemberFromGroupInline:un,addMemberToGroupInline:vn,changeUserGroup:mn,statusCounts:Xn,stockPool:Zn,poolSignals:go,aiResult:Xa,aiHistory:Ms,groupedByDate:Nr,groupedByMonth:jr,expandedDates:Ps,expandedMonths:fo,aiHistoryByStock:Or,aiHistoryStockCount:Vr,expandedStocks:Ds,aiHistoryView:yo,aiHistoryLoading:sr,aiHistoryError:ir,aiHistoryTotal:lr,aiHistoryLoadingMore:nr,hasMoreAiHistory:or,loadMoreAiHistory:rr,watchlistLoading:cr,scoreDistribution:Fr,quickEvalStock:Fo,evalStrategy:Ho,checklistItems:po,evalHistoryComparison:mo,quickEvaluate:Hr,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:Kt,toggleDateExpand:Br,toggleMonthExpand:ho,toggleSelectDate:Kr,toggleSelectMonth:Wr,toggleSelectStock:Gr,toggleStockExpand:Ur,registerTrendChart:Yr,selectedWatchlistCodes:Rs,clearWatchlistSelection:pr,toggleSelectWatchlist:yr,selectAllHistory:br,selectAllWatchlist:wr,batchRemoveWatchlist:hr,batchEvaluateSelected:Dr,batchReevaluateHistory:fr,batchAddToWatchlist:gr,viewUnit:ol,datePickerType:rl,dateFormat:cl,canNavPrev:dl,canNavNext:ul,handleLogin:hd,handleGuestLogin:yd,switchView:_s,navigateDate:xs,navigateTo:Qe,loadDashboardData:ns,loadConsensusData:Ea,showStockDetail:Cs,doAiEvaluate:dr,doBatchEvaluate:Qr,loadAiHistory:Aa,loadLastEvaluation:as,lastEvalTime:vo,viewAiResult:Jr,saveAiConfig:Uc,testAiApi:Gc,exportConfig:Yc,importConfig:Jc,configSaving:Pc,configChanged:z,watchlist:Ko,watchlistCodes:Wo,watchlistSearch:$o,watchlistResults:Xo,watchlistSearching:Zo,watchlistSort:Bo,sortedWatchlist:Uo,getWatchlistScore:Go,addSearchResult:Yo,evaluatedCodes:Jo,klineLoadedCodes:Qo,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:xr,removeFromWatchlist:Sr,clearWatchlist:Cr,searchStockForWatchlist:Rr,toggleWatchlist:qr,batchEvaluateWatchlist:Pr,watchlistEvaluate:Tr,showStockKline:Er,preloadWatchlistKline:ei,preloadingKline:Mr,realtimeQuotes:$r,realtimeDegraded:Xr,realtimeWsState:Zr,connectRealtimeQuotes:ec,disconnectRealtimeQuotes:tc,quoteWarningFor:ac,realtimeQuoteColor:sc,realtimePriceText:ic,realtimePctText:lc,realtimeRatioText:nc,REALTIME_DEGRADED_TEXT:oc,REALTIME_FALLBACK_TEXT:rc,toggleSelectHistory:vr,clearSelection:mr,deleteSingleHistory:ur,deleteSelectedHistory:kr,saveAutoEvaluateConfig:_r,editUser:Un,saveUser:Gn,deleteUser:Yn,loadUsers:ja,allGroups:Kn,loadAllGroups:$a,getGroupName:Wn,toggleUserEnabled:Jn,resetUserPassword:Qn,selectedPreset:Lo,applyPreset:No,onProviderChange:Oo,providerInfo:Io,globalConfigDirty:Dc,lastSavedTime:Rc,tushareConfig:zc,tushareStatus:Ac,syncingData:Nc,stockCount:Oc,tradeDateCount:jc,aiStatus:Vc,appVersion:ai,showImportDialog:Fc,rateLimitConfig:Hc,rateLimitDirty:Bc,rateLimitSaving:Kc,loadRateLimit:ss,saveRateLimit:Wc,saveAllConfig:Qc,resetAllConfig:$c,testTushareConnection:Xc,syncStockData:Zc,loadTushareConfig:si,loadFeishuConfig:is,loadSystemStatus:ls,loadAiConfig:Ha,aiVendors:bo,aiCatalog:wo,aiModelsError:ko,testingAllModels:_o,savingAiModels:xo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:Co,testAllVendorModels:qo,fetchVendorModels:Eo,addVendorFromCatalog:Mo,addCustomVendor:To,addVendorModel:Po,removeVendorModel:Do,removeVendor:Ro,toggleVendorKeyReveal:zo,toggleVendorEdit:Ao,checkTushareConnection:Fa,datasourceConfig:Lc,datasourceStatus:Ic,loadDatasourceConfig:ii,saveDatasourceConfig:ed,testDatasource:td,toggleDatasourceKeyReveal:ad,toggleDatasourceEdit:sd,strategyFilter:Tt,strategyFilterOptions:ma,strategyFilterCounts:sa,strategyPreviewCount:to,saveStrategyFilter:ao,filteredConsensusRank:so,currentPoolSize:io,filteredStrategyCounts:lo,strategyDistribution:eo,expandedStrategies:ya,poolChangeBadge:no,timeBarPercent:oo,timeSinceRefresh:ro,navigateToStrategyFilter:co,showUserMenu:ut,toggleSidebar:we,groupsConfig:De,loadGroupConfig:pe,editingGroup:yn,groupEditForm:kn,showAddGroup:xn,addGroupForm:Sn,savingGroup:Cn,menuConfigDialog:bn,memberDialog:wn,groupMembers:qn,addMemberUsername:En,selectedMemberGroup:Mn,subPageSectionExpanded:Tn,toggleSubPageSection:Pn,getGroupMemberCount:Dn,getMenuEnabledCount:Rn,groupCount:zn,openMemberManager:An,loadGroupMembers:Ln,addMemberToGroup:In,removeMemberFromGroup:Nn,availableUsersForGroup:On,subPageCache:_n,onParentToggle:jn,openMenuConfig:Vn,saveMenuConfig:Fn,deleteGroupConfig:Hn,createGroup:Bn,changePasswordForm:cd,changingPassword:dd,doChangePassword:wd,showSetupWizard:ud,setupForm:vd,setupStep:md,checkSetupWizard:pd,completeSetupWizard:fd,chatSessions:Cl,chatHistoryView:ql,selectedChatIds:El,expandedChatDates:Ml,expandedChatMonths:Tl,expandedChatStocks:Pl,chatHistoryLoading:Dl,chatHistoryError:Rl,allChatSessionsFlat:zl,chatGroupedByDate:Al,chatGroupedByMonth:Ll,chatGroupedByStock:Il,toggleSelectChat:Nl,toggleSelectChatDate:Ol,toggleSelectChatMonth:jl,toggleSelectChatStock:Vl,toggleChatDateExpand:Fl,toggleChatMonthExpand:Hl,toggleChatStockExpand:Bl,selectAllChatSessions:Kl,deleteSelectedChatSessions:Wl,viewChatSession:Ul,loadChatHistory:qs,deleteChatSession:Gl,renderMarkdown:Yl,stockChatInput:Jl,stockChatMessages:Ql,stockChatLoading:$l,stockChatError:Xl,askStockSend:Zl,askStockQuick:en,onTouchStart:Ci,onTouchEnd:qi,hapticFeedback:i}}})();Ca.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=tm;window.__quantComponents.Header=Qm;window.__quantComponents.SubNav=cp;window.__quantComponents.MobileNav=Mp;window.__quantComponents.StockList=cf;window.__quantComponents.TopTabs=yf;window.__quantComponents.AppIcon=Ca;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default bf();
