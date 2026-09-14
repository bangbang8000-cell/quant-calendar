var od=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as rd,L as ce,O as ra,Z as cd,au as Ht,M as me,P as Se,aW as dd,a0 as Ve,_ as Fe,F as rt,al as wt,S as vt,a1 as ut,X as oa,ai as Rt,q as _a,o as Na,a8 as ts,r as Dt,e as lt,av as ud,Y as Ta,$ as ya,R as vd,aC as na,T as md,Q as ma,p as pd,n as fd}from"./vendor-vue-DDF9zi1T.js";import{e as gd,E as hd,a as yd,b as bd,c as wd,z as kd}from"./vendor-ep-VOop1zGa.js";import{C as _d,F as xd,P as Sd,a as Cd,b as qd,c as Ed,T as Md,S as Td,L as Pd,d as Dd,G as Rd,U as zd,e as Ad,f as Ld,g as Id,D as Nd,B as Od,h as jd,M as Vd,i as Fd,R as Hd,j as Bd,k as Kd,K as Wd,l as Ud,W as Gd,m as Yd,n as Jd,o as Qd,p as $d,q as Xd,r as Zd,s as eu,t as tu,O as au,u as su,v as lu,w as iu,x as nu,y as ou,z as ru,A as cu,E as du,H as uu,I as vu,J as mu,N as pu,Q as fu,V as gu,X as hu,Y as yu,Z as bu,_ as wu,$ as ku,a0 as _u,a1 as xu,a2 as Su,a3 as Cu,a4 as qu,a5 as Eu,a6 as Mu,a7 as Tu,a8 as Pu,a9 as Du,aa as Ru,ab as zu,ac as Au,ad as Lu,ae as Iu,af as Nu,ag as Ou,ah as ju,ai as Vu,aj as Fu,ak as Hu,al as Bu,am as Ku,an as Wu,ao as Uu,ap as Gu,aq as Yu,ar as Ju,as as Qu,at as $u,au as Xu,av as Zu,aw as ev,ax as tv,ay as av,az as sv,aA as lv,aB as iv,aC as nv,aD as ov,aE as rv,aF as cv,aG as dv}from"./vendor-lucide-CnYCvXhM.js";var Kp=od((af,Re)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))t(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const R of b.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&t(R)}).observe(document,{childList:!0,subtree:!0});function p(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function t(y){if(y.ep)return;y.ep=!0;const b=p(y);fetch(y.href,b)}})();window.Vue=rd;const ca=gd||{};window.ElementPlus=ca;ca.ElMessage=ca.ElMessage||hd;ca.ElMessageBox=ca.ElMessageBox||yd;ca.ElNotification=ca.ElNotification||bd;ca.ElLoading=ca.ElLoading||wd;window.ElementPlusLocaleZhCn={default:kd};(function(){const a=[45,220,0,140,270,320],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},p={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(i,D,k){return"hsl("+i+", "+D+"%, "+k+"%)"}function y(i,D,k){D=D/100,k=k/100;const x=function(n){return(n+i/30)%12},M=D*Math.min(k,1-k),w=function(n){return k-M*Math.max(-1,Math.min(x(n)-3,Math.min(9-x(n),1)))};return Math.round(255*w(0))+", "+Math.round(255*w(8))+", "+Math.round(255*w(4))}function b(i){const D=y(i,75,42);return{"--primary-color":t(i,75,42),"--primary-rgb":D,"--color-primary":t(i,75,42),"--qc-primary":t(i,75,42),"--qc-primary-50":t(i,90,96),"--qc-primary-100":t(i,85,92),"--qc-primary-200":t(i,80,84),"--qc-primary-300":t(i,75,72),"--qc-primary-400":t(i,70,58),"--qc-primary-500":t(i,75,48),"--qc-primary-600":t(i,80,42),"--qc-primary-700":t(i,85,35),"--qc-primary-800":t(i,88,28),"--qc-primary-900":t(i,90,20),"--qc-primary-foreground":"#ffffff","--text-link":t(i,70,40),"--secondary-color":t(i,70,55),"--card-border":t(i,55,82),"--bg-selected":"rgba("+D+", 0.08)","--btn-primary-bg":t(i,80,42),"--btn-primary-border":t(i,80,42),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(i,82,36),"--btn-primary-hover-border":t(i,82,36),"--btn-primary-active-bg":t(i,85,30),"--btn-primary-active-border":t(i,85,30),"--btn-primary-plain-bg":"rgba("+D+", 0.08)","--btn-primary-plain-border":"rgba("+D+", 0.25)","--btn-primary-plain-color":t(i,80,42),"--btn-primary-plain-hover-bg":"rgba("+D+", 0.15)","--btn-primary-plain-hover-border":t(i,80,42),"--btn-primary-text-color":t(i,80,42),"--gradient":"linear-gradient(135deg, "+t(i,80,30)+" 0%, "+t(i,75,42)+" 50%, "+t(i,70,55)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(i,75,42)+" 0%, "+t(i,85,30)+" 100%)","--qc-nav-item-active":t(i,80,35),"--qc-nav-item-active-bg":t(i,85,92),"--qc-nav-item-active-border":t(i,75,48),"--qc-nav-badge-bg":t(i,85,92),"--qc-nav-badge-text":t(i,80,35),"--qc-ring":t(i,70,58)}}function R(i){const D=y(i,85,65);return{"--primary-color":t(i,85,65),"--primary-rgb":D,"--color-primary":t(i,85,65),"--qc-primary":t(i,90,65),"--qc-primary-50":t(i,50,18),"--qc-primary-100":t(i,55,22),"--qc-primary-200":t(i,55,26),"--qc-primary-300":t(i,60,30),"--qc-primary-400":t(i,65,38),"--qc-primary-500":t(i,80,52),"--qc-primary-600":t(i,90,65),"--qc-primary-700":t(i,92,72),"--qc-primary-800":t(i,90,80),"--qc-primary-900":t(i,92,88),"--qc-primary-foreground":"#101014","--text-link":t(i,85,65),"--secondary-color":t(i,70,60),"--card-border":t(i,30,25),"--bg-selected":"rgba("+D+", 0.10)","--btn-primary-bg":t(i,85,65),"--btn-primary-border":t(i,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(i,80,72),"--btn-primary-hover-border":t(i,80,72),"--btn-primary-active-bg":t(i,75,80),"--btn-primary-active-border":t(i,75,80),"--btn-primary-plain-bg":"rgba("+D+", 0.08)","--btn-primary-plain-border":"rgba("+D+", 0.25)","--btn-primary-plain-color":t(i,85,65),"--btn-primary-plain-hover-bg":"rgba("+D+", 0.15)","--btn-primary-plain-hover-border":t(i,85,65),"--btn-primary-text-color":t(i,85,65),"--gradient":"linear-gradient(135deg, "+t(i,80,35)+" 0%, "+t(i,85,50)+" 50%, "+t(i,85,65)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(i,85,65)+" 0%, "+t(i,80,40)+" 100%)","--qc-nav-item-active":t(i,85,65),"--qc-nav-item-active-bg":"rgba("+D+", 0.10)","--qc-nav-item-active-border":t(i,85,65),"--qc-nav-badge-bg":"rgba("+D+", 0.12)","--qc-nav-badge-text":t(i,85,65),"--qc-ring":t(i,85,65)}}function m(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function c(i){return i=parseInt(i,10),isNaN(i)?45:Math.max(0,Math.min(359,i))}function g(i,D){let k=i||"light",x=D==null||D===""?null:D;if(e[i]){const l=e[i];k=l[0],x==null&&(x=l[1])}k==="system"&&(k=m()?"dark":"light");const M=k==="dark";x=c(x??45);const w=document.documentElement;w.setAttribute("data-theme",M?"dark-pro":"gold"),w.setAttribute("data-theme-mode",M?"dark":"light");const n=M?R(x):b(x);Object.keys(n).forEach(function(l){w.style.setProperty(l,n[l])});try{localStorage.setItem("quant_theme_mode",M?"dark":"light"),localStorage.setItem("quant_theme_hue",String(x))}catch{}return{mode:M?"dark":"light",hue:x}}function o(){const i=localStorage.getItem("quant_theme");if(!i||!e[i]||localStorage.getItem("quant_theme_hue")!==null)return null;const D=e[i];return{mode:D[0],hue:D[1]}}function q(){const i=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let D=i.theme||"system",k=i.theme_hue!=null&&i.theme_hue!==""?i.theme_hue:null;const x=o();return k==null&&x&&(D=x.mode,k=x.hue),k==null&&(k=45),g(D,k)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:p,generateLightTokens:b,generateDarkTokens:R,migrateLegacyTheme:o,applyTheme:g,init:q},q()})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],p={};let t=a,y=null;function b(){return y&&typeof y=="object"&&"value"in y?y.value||a:t}function R(i,D){return e.indexOf(i)===-1?!1:(p[i]=D&&typeof D=="object"?D:{},!0)}function m(i){const D=e.indexOf(i)!==-1?i:a;return t=D,y&&typeof y=="object"&&"value"in y&&(y.value=D),typeof document<"u"&&document.documentElement.setAttribute("lang",D),t}function c(){return b()}function g(i){if(i&&typeof i=="object"&&"value"in i){y=i;const D=e.indexOf(i.value)!==-1?i.value:a;i.value=D,t=D}return t}function o(i,D){const k=b(),x=p[k]||{};let M=i in x?x[i]:null;if(M==null&&k!=="en"){const w=p.en||{};M=i in w?w[i]:null}return M==null&&(M=String(i)),D&&typeof D=="object"&&Object.keys(D).forEach(function(w){M=M.replace(new RegExp("\\{"+w+"\\}","g"),String(D[w]))}),M}const q={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:p,registerLocale:R,setLocale:m,getLocale:c,bindLocale:g,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=q),q});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"★ 已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let p=[];function t(k){const x=String(k||"");let M="";for(const w of x){const n=a[w];n?M+=n.charAt(0):/[a-zA-Z0-9]/.test(w)&&(M+=w.toLowerCase())}return M}function y(k){const x=String(k||"");let M="";for(const w of x){const n=a[w];n?M+=n:/[a-zA-Z0-9]/.test(w)&&(M+=w.toLowerCase())}return M}function b(k){return String(k||"").trim().toLowerCase()}function R(k,x){const M=(x.code||"").toLowerCase();return/^\d+$/.test(k)?M.indexOf(k)!==-1:/[\u4e00-\u9fa5]/.test(k)?(x.name||"").toLowerCase().indexOf(k)!==-1:M.indexOf(k)!==-1||(x.initials||t(x.name)).indexOf(k)!==-1||(x.pinyin||y(x.name)).indexOf(k)!==-1}function m(k){const x={},M=[],w=function(n,l,v){!n||x[n]||(x[n]=!0,M.push({code:n,name:l||n,source:v||"core",initials:t(l||n),pinyin:y(l||n)}))};return e.forEach(function(n){w(n.code,n.name,"core")}),(k||[]).forEach(function(n){w(n.code,n.name,"extra")}),M}function c(k,x){const M=b(k);if(!M||!x||!x.length)return[];const w=M.split(/[\s,，、;；]+/).filter(Boolean);return w.length?x.filter(function(n){return w.every(function(l){return R(l,n)})}).slice(0,20).map(function(n){return{code:n.code,name:n.name,source:n.source||"core"}}):[]}function g(k){Array.isArray(k)&&(p=p.concat(k))}function o(){return p.slice()}function q(){return m(p)}function i(k){return c(k,q())}const D={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:y,normalizeQuery:b,matchToken:R,buildStockIndex:m,searchStocksByQuery:c,registerExtraStocks:g,getExtraStocks:o,getStockIndex:q,searchCoreStocks:i};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=D),D});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},p=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function y(l){return l=parseInt(l,10),!isNaN(l)&&l>=0&&l<=360}const b={light:"classic-white",dark:"dark-pro"};function R(){if(typeof localStorage>"u")return{};try{const l=localStorage.getItem(a);if(!l)return{};const v=JSON.parse(l);return v&&typeof v=="object"?v:{}}catch{return{}}}function m(l){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(l))}catch{}}function c(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function g(){const l=Object.assign({},e,R()),v={};return p.forEach(function(V){const A=l[V];v[V]=V==="theme_hue"?y(A)?parseInt(A,10):e[V]:t[V].indexOf(A)!==-1?A:e[V]}),v}function o(l){if(p.indexOf(l)!==-1)return g()[l]}function q(l,v){return p.indexOf(l)===-1?!1:l==="theme_hue"?y(v):t[l].indexOf(v)!==-1}function i(l,v){if(!q(l,v))return!1;const V=R();return V[l]=v,m(V),c()&&k({[l]:v}),!0}function D(l){if(!l||typeof l!="object")return!1;const v={};if(Object.keys(l).forEach(function(A){q(A,l[A])&&(v[A]=l[A])}),!Object.keys(v).length)return!1;const V=Object.assign({},R(),v);return m(V),c()&&k(v),!0}function k(l){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:l})}).catch(function(){})}catch{}}async function x(){const l=g();if(!c()||typeof fetch>"u")return l;try{const v=await fetch("/api/user_config/preferences");if(v.ok){const V=await v.json();if(V.success&&V.preferences){const A=V.preferences;p.forEach(function(G){t[G].indexOf(A[G])!==-1&&(l[G]=A[G])}),m(l)}}}catch{}return l}function M(l){const v=l||o("info_density")||"comfortable",V=t.info_density.indexOf(v)!==-1?v:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",V),V}function w(l){const v=l||o("theme")||"system";if(v==="system"){let V=!1;return typeof window<"u"&&window.matchMedia&&(V=window.matchMedia("(prefers-color-scheme: dark)").matches),V?"dark":"light"}return v==="dark"||v==="light"?v:"light"}const n={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:p,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:b,getLocal:g,getPreference:o,isValidValue:q,setPreference:i,setPreferences:D,saveToBackend:k,loadPreferences:x,resolveTheme:w,applyDensity:M};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=n),n});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function p(){if(typeof localStorage>"u")return[];try{const g=localStorage.getItem(a);if(!g)return[];const o=JSON.parse(g);return Array.isArray(o)?o:[]}catch{return[]}}function t(g){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(g))}catch{}}function y(g,o){if(!g)return!1;let q=p().filter(function(i){return i.code!==g});return q.unshift({code:g,name:(o||"").toString().slice(0,32),ts:Date.now()}),q.length>10&&(q=q.slice(0,10)),t(q),!0}function b(){return p().slice(0,10)}function R(g){t(p().filter(function(o){return o.code!==g}))}function m(){t([])}const c={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:y,getRecentViewed:b,removeRecent:R,clearRecent:m};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=c),c});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:p,watch:t,onMounted:y,nextTick:b}=a;function R(d,S={}){if(typeof d=="string"&&d.startsWith("/api/")){const u=localStorage.getItem("quant_token");if(u)return{...S,headers:{...S.headers||{},Authorization:"Bearer "+u}}}return S}async function m(d,S={}){const u=R(d,S),j={"Content-Type":"application/json",...u.headers},ae=(S.method||"GET").toUpperCase(),Y=ae+"|"+d,Q=async()=>{const C=await fetch(d,{...u,headers:j});if(C.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!C.ok){let h="";try{const Z=await C.json();h=Z&&Z.detail||""}catch{}throw Object.assign(new Error(h||"请求失败（HTTP "+C.status+"）"),{status:C.status})}return await C.json()};try{const C=S.noLoading?Q:()=>v(Q);return ae==="GET"&&!S.noDedupe?await M(Y,C):await C()}catch(C){throw C.message==="登录已过期"?C:(console.error("[apiFetch] "+d+":",C.message),Object.assign(C,{_formatted:V(C,C.status)}))}}function c(){return new Date().toISOString().split("T")[0]}function g(d){return d?d.split("T")[0]:""}function o(d,S="info",u=3e3){let j=document.querySelector(".toast-container");j||(j=document.createElement("div"),j.className="toast-container",document.body.appendChild(j));const ae=document.createElement("div");ae.className=`toast toast-${S}`,ae.textContent=d,j.appendChild(ae),setTimeout(()=>{ae.classList.add("leaving"),setTimeout(()=>ae.remove(),300)},u)}function q(d,S=300){let u;return function(...j){clearTimeout(u),u=setTimeout(()=>d.apply(this,j),S)}}function i(d,S=300){let u=!1;return function(...j){u||(d.apply(this,j),u=!0,setTimeout(()=>{u=!1},S))}}async function D(d,S=3e3,u=""){const j=new Promise((ae,Y)=>setTimeout(()=>Y(new Error("timeout")),S));try{return await Promise.race([d,j])}catch(ae){console.warn(`[timeout] ${u||"task"} failed:`,ae.message)}}const k=new Map;function x(){return k.clear(),!0}function M(d,S){if(!d||typeof S!="function")return Promise.reject(new Error("bad dedupe args"));if(k.has(d))return k.get(d);const u=Promise.resolve().then(S).finally(()=>{k.delete(d)});return k.set(d,u),u}let w=0;function n(){return w=0,!0}function l(){return w}async function v(d){w++;try{return await d()}finally{w--}}function V(d,S){if(!d)return"请求失败";if(d&&typeof d=="object"&&d.detail)return String(d.detail);if(typeof d=="string"&&d)return d;if(d&&d.message){const u=String(d.message);return/Failed to fetch|fetch failed|networkerror/i.test(u)?"网络连接失败，请检查网络后重试":u}return S?"请求失败（HTTP "+S+"）":"请求失败"}function A(d,S){if(d===S)return!0;try{return JSON.stringify(d)===JSON.stringify(S)}catch{return!1}}function G(d,S,u){const j=(d||"GET").toUpperCase();let ae="";if(u)try{const Y={};Object.keys(u).sort().forEach(Q=>{Y[Q]=u[Q]}),ae=JSON.stringify(Y)}catch{ae=""}return j+"|"+S+"|"+ae}class ee{constructor(){this._map=new Map,this._exp=new Map}get(S){const u=this._exp.get(S);if(u!=null){if(Date.now()>u){this.delete(S);return}return this._map.get(S)}}set(S,u,j){return this._map.set(S,u),this._exp.set(S,Date.now()+(j>0?j:-1)),u}delete(S){this._map.delete(S),this._exp.delete(S)}clear(){this._map.clear(),this._exp.clear()}has(S){return this.get(S)!==void 0}get size(){return this._map.size}}function te(d){const S=new ee,u=d!=null&&d>0?d:15e3;return{store:S,defaultTtl:u,get:j=>S.get(j),set:(j,ae,Y)=>S.set(j,ae,Y??u),delete:j=>S.delete(j),clear:()=>S.clear(),size:()=>S.size}}const N=new Set;async function P(d){const S=d&&d.cache,u=d&&d.key,j=d&&(d.fetchFn||d.fetcher),ae=d&&d.ttl;if(!S||!u||typeof j!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(N.has(u))return{ok:!1,changed:!1,skipped:!0,fresh:null};N.add(u);try{const Y=S.get(u);let Q;try{Q=await j()}catch(h){return d.onError&&d.onError(h),{ok:!1,changed:!1,fresh:null}}const C=Y!==void 0&&!A(Y,Q);return S.set(u,Q,ae),d.apply&&d.apply(Q,Y),Y!==void 0&&(C?d.onChanged&&d.onChanged(Q,Y):d.onUnchanged&&d.onUnchanged(Q,Y)),{ok:!0,changed:C,fresh:Q}}finally{N.delete(u)}}const L=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function z(d,S={}){if(d==null)return"";const u=S&&S.allow||L,j=new Set(u.map(C=>String(C).toUpperCase()));let ae;try{ae=new DOMParser().parseFromString(String(d),"text/html")}catch{return String(d).replace(/[<>&]/g,h=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[h])}const Y=ae.body||ae;function Q(C){Array.from(C.childNodes).forEach(h=>{if(h.nodeType===1){const Z=String(h.tagName).toUpperCase();if(j.has(Z))Array.from(h.attributes).forEach(pe=>{const ge=pe.name.toLowerCase(),Me=(pe.value||"").trim().toLowerCase();(ge.startsWith("on")||(ge==="href"||ge==="src"||ge==="xlink:href")&&Me.startsWith("javascript:")||ge==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(Me))&&h.removeAttribute(pe.name),ge==="href"&&!/^(https?:|mailto:|#|\/)/.test(Me)&&h.removeAttribute("href")}),Z==="A"&&h.setAttribute("rel","noopener noreferrer"),Q(h);else{const pe=h.parentNode;for(;h.firstChild;)pe.insertBefore(h.firstChild,h);pe.removeChild(h)}}else if(h.nodeType!==3){if(h.nodeType===8)h.parentNode&&h.parentNode.removeChild(h);else if(h.nodeType===4){const Z=ae.createTextNode(h.nodeValue||"");h.parentNode&&h.parentNode.replaceChild(Z,h)}}})}return Q(Y),Y.innerHTML}const X="/api/openapi",J="/api/market/ws/quotes",de=1,H=2.5,F="数据不可达",I="实时不可用，不刷新";function f(){const d=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",S=typeof location<"u"?location.host:"localhost:8001";return d+"//"+S+J}function _(d,S){if(!d)return null;const u=S||{riseSpeed:de,volumeRatio:H},j=u.riseSpeed!=null?u.riseSpeed:de,ae=u.volumeRatio!=null?u.volumeRatio:H,Y=parseFloat(d.rise_speed);if(!isNaN(Y)&&Math.abs(Y)>j)return Y>0?"涨速预警":"跌速预警";const Q=parseFloat(d.volume_ratio);return!isNaN(Q)&&Q>ae?"放量预警":null}function se(d){const S=Number(d);return d==null||isNaN(S)?null:S}const T={apiFetch:m,withAuthHeaders:R,getToday:c,formatDate:g,withTimeout:D,showToast:o,debounce:q,throttle:i,resetInFlight:x,dedupeRequest:M,resetLoading:n,loadingCount:l,withLoading:v,formatApiError:V,jsonEquals:A,makeCacheKey:G,CacheStore:ee,createTtlCache:te,silentRefresh:P,sanitizeHtml:z,OPENAPI_ROUTE_BASE:X,REALTIME_WS_PATH:J,WARN_RISE_SPEED_THRESHOLD:de,WARN_VOLUME_RATIO_THRESHOLD:H,REALTIME_DEGRADED_TEXT:F,REALTIME_FALLBACK_TEXT:I,buildRealtimeWsUrl:f,checkQuoteWarning:_,quoteFmt:{price:function(d){const S=se(d);return S===null?"--":S.toFixed(2)},pct:function(d){const S=se(d);return S===null?"--":(S>0?"+":"")+S.toFixed(2)+"%"},num:function(d){const S=se(d);return S===null?"--":S.toFixed(2)},color:function(d){const S=d?d.change_pct:null,u=se(S);return u===null?"":u>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=T),typeof Re<"u"&&Re.exports&&(Re.exports=T)})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(q,i){return q+"/"+i}function p(q,i,D,k){var x=q[i]||[],M=x.findIndex(function(l){return l.subPage===D});if(M!==-1)return{groups:q,activeKey:e(i,D)};var w=x.concat([{subPage:D,title:k}]);w.length>a&&(w=y(w));var n=Object.assign({},q,t({},i,w));return{groups:n,activeKey:e(i,D)}}function t(q,i,D){return q[i]=D,q}function y(q){if(q.length<=a)return q;var i=q.length>1?1:0;return q.filter(function(D,k){return k!==i})}function b(q,i,D,k){var x=q[i]||[],M=x.findIndex(function(v){return v.subPage===D});if(M===-1)return{groups:q,nextActive:null};var w=x.filter(function(v){return v.subPage!==D}),n=Object.assign({},q,t({},i,w)),l=null;return D===k&&(w[M]?l=w[M].subPage:w[M-1]?l=w[M-1].subPage:l=null),{groups:n,nextActive:l}}function R(q){return q&&q.length?q[0]:""}function m(q,i){return q[i]||[]}function c(q,i,D){var k=q[i]||[],x=k.filter(function(w){return w.subPage===D}),M=Object.assign({},q,t({},i,x));return{groups:M,activeKey:x.length?e(i,x[0].subPage):null}}function g(q,i){var D=Object.assign({},q,t({},i,[]));return{groups:D,activeKey:null}}function o(q,i,D,k){var x=(q[i]||[]).slice();if(D<0||D>=x.length)return{groups:q};var M=x.splice(D,1)[0];return x.splice(Math.max(0,Math.min(k,x.length)),0,M),{groups:Object.assign({},q,t({},i,x))}}return{MAX_TABS:a,openTab:p,closeTab:b,getDefaultTab:R,tabsOf:m,evictOldest:y,closeOthers:c,closeAll:g,reorder:o,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var $s=typeof Re=="object"&&Re.exports?Re.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;$s&&(window.__quantModules.tabsCore=$s)}(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",p="nav_mode";function t(o){return a.indexOf(o)!==-1?o:e}function y(o){return t(o)==="subnav"}function b(o){return t(o)==="tree"}function R(o){return t(o)==="toptab"}function m(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function c(){var o=m(),q=e;if(o)try{q=t(o.getItem(p))}catch{}return{navMode:q}}function g(o){var q=m();if(!(!q||!o))try{o.navMode!==void 0&&q.setItem(p,t(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:y,treeChildrenVisible:b,topTabsVisible:R,readPrefs:c,writePrefs:g}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var Xs=typeof Re=="object"&&Re.exports?Re.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;Xs&&(window.__quantModules.navModeCore=Xs)}(function(){function e(f,_){if(!Array.isArray(f)||f.length<=_)return f;const se=[],B=f.length/_*2;for(let T=0;T<f.length;T+=B){const d=Math.floor(T),S=Math.min(f.length,Math.ceil(T+B));let u=1/0,j=-1,ae=-1/0,Y=-1;for(let Q=d;Q<S;Q++){const C=f[Q];if(!C)continue;const h=C[3]!=null?Number(C[3]):1/0,Z=C[4]!=null?Number(C[4]):-1/0;h<u&&(u=h,j=Q),Z>ae&&(ae=Z,Y=Q)}j>=0&&se.push(f[j]),Y>=0&&Y!==j&&se.push(f[Y])}return se}let p=null;function t(){return typeof echarts<"u"?Promise.resolve():(p||(p=new Promise(function(f,_){const se=document.createElement("script");se.src="/static/lib/echarts.min.js",se.async=!0,se.onload=function(){typeof echarts<"u"?f():_(new Error("echarts 加载后未定义"))},se.onerror=function(){_(new Error("echarts.min.js 加载失败"))},document.head.appendChild(se)})),p)}function y(){const f=getComputedStyle(document.documentElement);return{primary:f.getPropertyValue("--primary-color").trim()||"#2563eb",up:f.getPropertyValue("--color-up").trim()||"#43e97b",down:f.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:f.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:f.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const b=f=>(getComputedStyle(document.documentElement).getPropertyValue(f)||"").trim();function R(){return{up:b("--color-up")||"#E63946",down:b("--color-down")||"#2E7D32",neutral:b("--color-neutral")||"#43a047",accent:b("--color-accent")||"#F59E0B",risk:b("--color-danger")||"#C62828",warn:b("--color-warning")||"#FF9800",success:b("--color-success")||"#4CAF50",primary:b("--qc-primary-600")||"#b8922a",grid:b("--chart-split")||"#e2e8f0",axis:b("--chart-axis")||"#cbd5e1",bg:b("--chart-bg")||"transparent",series:[b("--qc-primary-600")||"#b8922a",b("--qc-primary-500")||"#c49b2e",b("--qc-primary-700")||"#8f6f1f",b("--qc-primary-400")||"#d4b352",b("--color-up")||"#E63946",b("--color-down")||"#2E7D32",b("--color-accent")||"#F59E0B",b("--qc-neutral-400")||"#b8ae9f"]}}function m(f,_,se,B=!1,T=!1){if(!_||_.length===0)return;_.length>2e3&&(_=e(_,2e3));const d=_.map(qe=>typeof qe[0]=="string"&&qe[0].indexOf("-")>=0?qe[0]:qe[0].slice(0,4)+"-"+qe[0].slice(4,6)+"-"+qe[0].slice(6,8)),S=y(),u={ma5:b("--color-accent")||"#F59E0B",ma10:b("--color-primary")||"#3B82F6",ma20:b("--color-warning")||"#8B5CF6",ma60:b("--color-success")||"#10B981"},j=_.map(qe=>[qe[1],qe[2],qe[3],qe[4]]),ae=_.map(qe=>qe[5]),Y=_.map(qe=>qe[6]),Q=_.map(qe=>qe[7]),C=_.map(qe=>qe[8]),h=_.map(qe=>qe[9]),Z=_.map(qe=>qe[10]),ge=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",Me=S.borderLight,je={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:S.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:ge,borderColor:Me,textStyle:{color:S.textSecondary,fontSize:12},formatter:function(qe){if(!qe||!qe.length)return"";const ke=qe[0].dataIndex,le=_[ke];if(!le)return"";const be=f.getOption(),Te=be.legend&&be.legend[0]&&be.legend[0].selected||{},ie=ze=>Te[ze]!==!1,$=ze=>ze==null||isNaN(ze)?"--":Number(ze).toFixed(2),ue=ze=>ze==null||isNaN(ze)?"--":(Number(ze)/1e4).toFixed(2)+"万手",Ee=['<div style="font-weight:600;color:'+S.textSecondary+';">'+d[ke]+"</div>"];return Ee.push("开: "+$(le[1])+"　收: "+$(le[2])),Ee.push("低: "+$(le[3])+"　高: "+$(le[4])),Ee.push("成交量: "+ue(le[5])),le[6]!=null&&ie("MA5")&&Ee.push("MA5: "+$(le[6])),le[7]!=null&&ie("MA10")&&Ee.push("MA10: "+$(le[7])),le[8]!=null&&ie("MA20")&&Ee.push("MA20: "+$(le[8])),le[9]!=null&&ie("MA60")&&Ee.push("MA60: "+$(le[9])),le[10]!=null&&Ee.push("VOL_MA5: "+ue(le[10])),Ee.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:T?0:8,textStyle:{color:S.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:T?30:40,height:T?"48%":"52%"},{left:56,right:16,top:T?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:d,boundaryGap:!0,axisLine:{lineStyle:{color:Me}},axisLabel:{color:S.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:d,axisLabel:{show:!1},axisLine:{lineStyle:{color:Me}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:Me}},axisLabel:{color:S.textSecondary,fontSize:11,formatter:function(qe){const ke=Math.round(qe*100)/100;return ke%1===0?String(Math.round(ke)):ke.toFixed(2)}},splitLine:{lineStyle:{color:Me,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:Me}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,_.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:Me,textStyle:{color:S.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:j,itemStyle:{color:S.up,color0:S.down,borderColor:S.up,borderColor0:S.down}},{name:"MA5",type:"line",data:Y,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma5}},{name:"MA10",type:"line",data:Q,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma10}},{name:"MA20",type:"line",data:C,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma20}},{name:"MA60",type:"line",data:h,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ae,itemStyle:{color:function(qe){const ke=qe.dataIndex;return _[ke][1]>=_[ke][2]?S.up:S.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:Z,smooth:!0,symbol:"none",lineStyle:{width:1,color:u.ma5,type:"dashed"}}]};f.setOption(je,!0)}const c=new Map;function g(f){return c.has(f)||c.set(f,{chart:null,cache:null}),c.get(f)}async function o(f,_,se,B=!1,T={}){await t();const d=g(f);let S=document.getElementById(f);if(!S)for(let u=0;u<16&&(await new Promise(j=>setTimeout(j,50)),S=document.getElementById(f),!S);u++);if(!S)throw new Error("无法找到图表容器: "+f);if(S.offsetWidth<50&&(S.style.minWidth="600px",S.style.minHeight="300px"),!d.chart||d.chart.isDisposed()||d.chart.getDom()!==S){if(d.chart)try{d.chart.dispose()}catch{}d.chart=echarts.init(S),d.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const u=T.onLegend;typeof u=="function"&&d.chart.on("legendselectchanged",j=>{j&&j.selected&&u(j.selected)})}return m(d.chart,_,se,B,!!T.isMobile),d.cache={data:_,period:se,isIndex:B,isMobile:!!T.isMobile},d.chart}function q(f){const _=c.get(f);_&&_.chart&&(_.chart.dispose(),_.chart=null,_.cache=null)}function i(f){const _=c.get(f);_&&_.chart&&_.chart.resize()}function D(f,_){const se=c.get(f),B=se&&se.chart;if(B)if(_<=0)B.dispatchAction({type:"dataZoom",start:0,end:100});else{const S=Math.max(0,(60-_)/60*100);B.dispatchAction({type:"dataZoom",start:Math.round(S),end:100})}}function k(f){var B,T,d;const _=c.get(f);if(!_||!_.chart||!_.cache||_.chart.isDisposed())return;const se=((d=(T=(B=_.chart.getOption())==null?void 0:B.legend)==null?void 0:T[0])==null?void 0:d.selected)||null;m(_.chart,_.cache.data,_.cache.period,_.cache.isIndex,_.cache.isMobile),se&&_.chart.setOption({legend:{selected:se}})}function x(f){const _=c.get(f);return _&&_.chart}const M=new Map;function w(f){return M.has(f)||M.set(f,{chart:null,cache:null}),M.get(f)}function n(f,_,se={}){return t().then(function(){const B=w(f),T=document.getElementById(f);if(!T)throw new Error("无法找到图表容器: "+f);if(T.offsetWidth<50&&(T.style.minWidth="600px",T.style.minHeight="300px"),B.chart&&B.chart.getDom&&B.chart.getDom()!==T){try{B.chart.dispose()}catch{}B.chart=null}B.chart||(B.chart=echarts.init(T),B.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),B.resizeBound||(B.resizeBound=!0,window.addEventListener("resize",function(){B.chart&&!B.chart.isDisposed()&&B.chart.resize()})));const d=typeof _=="function"?_():_;return B.chart.setOption(d,!0),B.cache={buildOption:_,key:se.key||""},B.chart})}function l(f){var T,d,S;const _=M.get(f);if(!_||!_.chart||!_.cache||_.chart.isDisposed())return;const se=((S=(d=(T=_.chart.getOption())==null?void 0:T.legend)==null?void 0:d[0])==null?void 0:S.selected)||null,B=typeof _.cache.buildOption=="function"?_.cache.buildOption():_.cache.buildOption;_.chart.setOption(B,!0),se&&B&&B.legend&&B.legend.selected&&_.chart.setOption({legend:{selected:se}})}function v(f){const _=M.get(f);_&&_.chart&&(_.chart.dispose(),_.chart=null,_.cache=null)}function V(f){const _=M.get(f);_&&_.chart&&_.chart.resize()}const A=new Map;function G(f){return A.has(f)||A.set(f,{chart:null,cache:null}),A.get(f)}function ee(f,_,se={}){return t().then(function(){const B=G(f),T=document.getElementById(f);if(!T)return null;if(T.offsetWidth<50&&(T.style.minWidth="600px",T.style.minHeight="300px"),B.chart&&B.chart.getDom&&B.chart.getDom()!==T){try{B.chart.dispose()}catch{}B.chart=null}B.chart||(B.chart=echarts.init(T),B.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),B.resizeBound||(B.resizeBound=!0,window.addEventListener("resize",function(){B.chart&&!B.chart.isDisposed()&&B.chart.resize()})));const d=typeof _=="function"?_():_;return B.chart.setOption(d,!0),B.cache={buildOption:_,key:se.key||""},B.chart})}function te(f){const _=A.get(f);if(!_||!_.chart||!_.cache||_.chart.isDisposed())return;const se=typeof _.cache.buildOption=="function"?_.cache.buildOption():_.cache.buildOption;_.chart.setOption(se,!0)}function N(f){const _=A.get(f);_&&_.chart&&(_.chart.dispose(),_.chart=null,_.cache=null)}function P(f){const _=A.get(f);_&&_.chart&&_.chart.resize()}const L=ee,z=te,X=N,J=P;function de(f,_,se,B){B=B||{};const T=B.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[B.navLabel||"净值",B.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:se||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:B.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:B.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:B.navLabel||"净值",type:"line",data:f||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:B.ddLabel||"回撤",type:"line",yAxisIndex:1,data:_||[],showSymbol:!1,areaStyle:{opacity:.25,color:T},lineStyle:{color:T,type:"solid",width:1.5}}]}}function H(f,_){_=_||{};const se=_.bandColor||"#1976d2",B=f&&f.dates||[],T=f&&f.median||[],d=f&&f.q25||[],S=f&&f.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[_.medianLabel||"中位IC",_.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:B,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:_.medianLabel||"中位IC",type:"line",data:T,showSymbol:!1,lineStyle:{width:2,color:se}},{name:_.bandLabel||"25–75分位",type:"line",data:d,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:se,opacity:.12}},{name:"_bandH",type:"line",data:S.map(function(u,j){return u-(d[j]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:se,opacity:.12}}]}}function F(f,_){_=_||{};const se=_.color||"#7c3aed",B=f&&f.dates||[],T=f&&f.value||[],d=f&&f.upper||[],S=f&&f.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[_.valueLabel||"情绪",_.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:B,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:_.valueLabel||"情绪",type:"line",data:T,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:se}},{name:_.bandLabel||"过热/冰点带",type:"line",data:d,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:se,opacity:.1}},{name:"_bandL",type:"line",data:S.map(function(u,j){return(d[j]||0)-u}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:se,opacity:.1}}]}}const I={renderKlineChart:m,renderKlineTo:o,disposeKline:q,resizeKline:i,zoomKline:D,redrawKline:k,getKlineChart:x,renderBacktestTo:n,redrawBacktest:l,disposeBacktest:v,resizeBacktest:V,renderPortfolioTo:ee,redrawPortfolio:te,disposePortfolio:N,resizePortfolio:P,renderSimpleChartTo:L,redrawSimpleChart:z,disposeSimpleChart:X,resizeSimpleChart:J,buildNavDrawdownOption:de,buildIcBandOption:H,buildSentimentBandOption:F,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:R,init(){return{renderKlineChart:m,renderKlineTo:o,disposeKline:q,resizeKline:i,zoomKline:D,redrawKline:k,getKlineChart:x,renderBacktestTo:n,redrawBacktest:l,disposeBacktest:v,resizeBacktest:V,renderPortfolioTo:ee,redrawPortfolio:te,disposePortfolio:N,resizePortfolio:P,renderSimpleChartTo:L,redrawSimpleChart:z,disposeSimpleChart:X,resizeSimpleChart:J,buildNavDrawdownOption:de,buildIcBandOption:H,buildSentimentBandOption:F,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:R}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=I),typeof Re<"u"&&Re.exports&&(Re.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:de,buildIcBandOption:H,buildSentimentBandOption:F})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:p}=Vue,{configChanged:t,consensus:y}=a,b=e(null),R=e(""),m=e(null),c=e([]),g=e([]),o=e([]),q=e([]),i=e([]),D=e([]),k=e({});function x(oe){const _e=i.value.indexOf(oe);_e>=0?i.value.splice(_e,1):i.value.push(oe)}const M=e("date"),w=e([]),n=e(!1),l=e(!1),v=e("watchlist"),V=e([]),A=e({vendors:[]}),G=e(""),ee=e(!1),te=e(!1);function N(oe){if(!oe)return"";const _e=String(oe),Pe=_e.length;if(Pe<=4)return _e[0]+"*".repeat(Pe-1);const Ie=Pe<=8?2:4;return _e.slice(0,Ie)+"*".repeat(Pe-Ie-Ie)+_e.slice(-Ie)}async function P(oe){let _e;try{_e=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ie=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:_e,target:oe})})).json();if(Ie.success)return Ie.secret;ElementPlus.ElMessage.error(Ie.message||"查看失败")}catch(Pe){ElementPlus.ElMessage.error("查看失败: "+Pe.message)}return null}async function L(oe){if(oe._revealed){oe._revealed=!1,oe._masked=N(oe.api_key);return}const _e=await P("ai:"+oe.vendor_key);_e!==null&&(oe.api_key=_e,oe._revealed=!0)}async function z(oe){if(oe._editing){oe._editing=!1,oe._revealed=!1,oe.api_key&&(oe._masked=N(oe.api_key));return}oe._editing=!0;try{const Pe=await(await fetch("/api/ai/models?full=1")).json();if(Pe.success){const Ie=(Pe.data.vendors||[]).find(ct=>ct.vendor_key===oe.vendor_key);Ie&&(oe.api_key=Ie.api_key||"")}else Pe.message&&ElementPlus.ElMessage.error(String(Pe.message))}catch(_e){ElementPlus.ElMessage.error("解锁失败: "+_e.message)}}function X(oe){const{_fetching:_e,_testing:Pe,_revealed:Ie,_masked:ct,_editing:at,...Ge}=oe;return at||(Ge.api_key=""),Ge.models=(oe.models||[]).map(pt=>{const{_testing:St,testResult:gt,...Ye}=pt;return Ye}),Ge}async function J(){var oe;try{G.value="";const _e=await fetch("/api/ai/models");if(_e.status===401){G.value="请先登录后再查看模型配置";return}if(!_e.ok){G.value=`服务器错误 (${_e.status})`;return}const Pe=await _e.json();Pe.success?(V.value=(((oe=Pe.data)==null?void 0:oe.vendors)||[]).map(Ie=>({...Ie,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Ie.api_key||"",models:(Ie.models||[]).map(ct=>({...ct,_testing:!1,testResult:void 0}))})),G.value=""):G.value=Pe.message||"加载失败"}catch(_e){G.value="网络错误: "+_e.message}}async function de(){try{const _e=await(await fetch("/api/ai/catalog")).json();_e.success&&_e.data&&(A.value=_e.data)}catch(oe){console.warn("AI 厂商目录加载失败",oe)}}async function H(){te.value=!0;try{const Pe=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:V.value.map(X)})})).json();Pe.success?(V.value.forEach(Ie=>{Ie._editing=!1,Ie._revealed=!1,Ie.api_key&&(Ie._masked=N(Ie.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Pe.message||"保存失败")}catch(oe){ElementPlus.ElMessage.error("保存失败: "+oe.message)}te.value=!1}async function F(oe,_e){_e._testing=!0;try{const Ie=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:oe.vendor_key,model:_e.name,base_url:oe.base_url,api_key:oe.api_key,timeout:oe.timeout})});_e.testResult=await Ie.json()}catch(Pe){_e.testResult={success:!1,message:Pe.message}}_e._testing=!1}async function I(){ee.value=!0;for(const oe of V.value)for(const _e of oe.models||[])oe.api_key?await F(oe,_e):_e.testResult={success:!1,message:"未配置 API Key"};ee.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function f(oe){oe._fetching=!0;try{const Ie=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:oe.vendor_key,base_url:oe.base_url,api_key:oe.api_key,timeout:oe.timeout})})).json();if(Ie.success&&Array.isArray(Ie.models)){const ct=new Set((oe.models||[]).map(at=>at.name));for(const at of Ie.models)ct.has(at)||oe.models.push({name:at,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Ie.models.length} 个模型`)}else ElementPlus.ElMessage.error(Ie.message||"获取模型列表失败")}catch(_e){ElementPlus.ElMessage.error("获取模型列表失败: "+_e.message)}oe._fetching=!1}function _(oe){const _e=(A.value.vendors||[]).find(Pe=>Pe.vendor_key===oe);if(_e){if(V.value.some(Pe=>Pe.vendor_key===oe)){ElementPlus.ElMessage.warning("该厂商已存在");return}V.value.push({vendor_key:_e.vendor_key,name:_e.name,kind:_e.kind,base_url:_e.base_url,api_key:"",timeout:60,tier:_e.tier||"",website:_e.website||"",locked:!!_e.locked,models:(_e.models||[]).map(Pe=>({name:Pe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${_e.name}」，配置 API Key 后保存生效`)}}function se(){V.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function B(oe){oe.models||(oe.models=[]),oe.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function T(oe,_e){const Pe=oe.models[_e];if(!(!Pe||Pe.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Pe.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}oe.models.splice(_e,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function d(oe){if(oe.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(oe.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const _e=V.value.indexOf(oe);_e>=0&&V.value.splice(_e,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const S=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),u=e(!1),j=e(""),ae=e(0),Y=e(""),Q=e(!1),C=e(""),h=e(!1),Z=e(0),pe=e(0),ge=e(""),Me=e({}),je=e({}),qe=e({}),ke=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),le=e("manual"),be=p(()=>{const oe={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return oe[ke.value.provider]||oe.custom}),Te={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function ie(oe){if(oe==="manual")return;const _e=Te[oe];_e&&(ke.value.endpoint=_e.endpoint,ke.value.model=_e.model,t.value=!0)}function $(){if(t.value=!0,ke.value.provider!=="codingplan"&&ke.value.provider!=="custom"){const oe=be.value;oe&&(ke.value.endpoint=oe.endpoint,ke.value.model=oe.model)}else ke.value.provider==="codingplan"&&(ke.value.endpoint||(ke.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),ke.value.model||(ke.value.model="ark-code-latest"))}let ue=null;const Ee=8;async function ze(){ue&&(ue.abort(),ue=null);const _e=(y.value||[]).filter(Ge=>Ge.status==="new"||Ge.status==="out").filter(Ge=>!k.value[Ge.code]);if(_e.length===0)return;const Pe=new AbortController;ue=Pe;let Ie=0;const ct=async()=>{for(;Ie<_e.length;){const Ge=_e[Ie++];try{const St=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ge.code,stock_name:Ge.name,event_type:Ge.status==="new"?"enter":"exit"}),signal:Pe.signal})).json();St.success&&St.signal&&(k.value={...k.value,[Ge.code]:St.signal})}catch(pt){if(pt.name==="AbortError")return}}},at=Array.from({length:Math.min(Ee,_e.length)},()=>ct());await Promise.all(at)}function $e(){ue&&(ue.abort(),ue=null)}let mt=0;async function Ze(oe){const _e=++mt;try{const Ie=await(await fetch(`/api/ai/history/last/${encodeURIComponent(oe)}`)).json();if(_e!==mt)return;Ie.success&&Ie.data&&(b.value=Ie.data,R.value=Ie.data.evaluate_time,We(oe,Ie.data),st(Ie.data))}catch{}}async function We(oe,_e){var Pe,Ie;try{const at=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(oe)}&limit=2`)).json();if(at.success&&at.data&&at.data.length>=2){const Ge=at.data[1],pt=((Pe=_e.result)==null?void 0:Pe.total_score)||0,St=((Ie=Ge.result)==null?void 0:Ie.total_score)||0;pt>0&&St>0&&(m.value={prevScore:St,currScore:pt,diff:pt-St})}}catch(ct){console.warn("[refreshStrategyData] autoPoll failed:",ct)}}function st(oe){var ct;const _e=((ct=oe.result)==null?void 0:ct.dimensions)||{},Pe=[],Ie=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const at of Ie){const Ge=_e[at.key];Ge!==void 0&&Pe.push({icon:Ge>=at.good?"●":Ge>=at.warn?"▲":"✕",label:`${at.label} ${Math.round(Ge)}分`})}c.value=Pe}return{aiResult:b,lastEvalTime:R,evalHistoryComparison:m,checklistItems:c,aiHistory:g,selectedHistoryIds:o,expandedDates:q,expandedMonths:i,expandedStocks:D,poolSignals:k,toggleMonthExpand:x,aiHistoryView:M,selectedWatchlistCodes:w,showAutoEvaluateSettings:n,savingConfig:l,autoEvaluateScope:v,aiVendors:V,aiCatalog:A,aiModelsError:G,testingAllModels:ee,savingAiModels:te,loadAiVendors:J,loadAiCatalog:de,saveAiVendors:H,saveAiModels:H,testVendorModel:F,testAllVendorModels:I,fetchVendorModels:f,addVendorFromCatalog:_,addCustomVendor:se,addVendorModel:B,removeVendorModel:T,removeVendor:d,toggleVendorKeyReveal:L,toggleVendorEdit:z,autoEvaluateConfig:S,aiLoading:u,aiEvalStage:j,aiEvalElapsed:ae,aiEvalError:Y,showBatchEvaluate:Q,batchStocks:C,batchRunning:h,batchTotal:Z,batchCompleted:pe,batchCurrent:ge,batchStatuses:Me,batchResults:je,batchEvalErrors:qe,aiConfig:ke,selectedPreset:le,providerInfo:be,aiPresets:Te,applyPreset:ie,onProviderChange:$,fetchPoolSignals:ze,cancelPoolSignals:$e,loadLastEvaluation:Ze}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:p,watch:t}=Vue,{configChanged:y,aiConfig:b,aiLoading:R,feishuConfig:m,currentTheme:c,changeTheme:g,autoEvaluateConfig:o,currentUser:q,strategyFilter:i,applyTheme:D,dashboardData:k,lastRefreshTime:x,saveAiModels:M}=a,w=e(!1),n=e(!1),l=e(null),v=e(null),V=e(null),A=e(null),G=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),ee=e("disconnected"),te=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),N=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),P=e(!1),L=e(null),z=e(null),X=e("pending"),J=e("..."),de=e(!1),H=e({api_limit:600}),F=e(!1),I=e(!1);async function f(){try{const $=await(await fetch("/api/system/rate-limit")).json();$.success&&(H.value=$.data)}catch(ie){console.warn("loadRateLimit failed:",ie)}}async function _(){I.value=!0;try{const $=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H.value)})).json();$.success?(F.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error($.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{I.value=!1}}t(()=>[b.value.provider,b.value.apiKey,b.value.endpoint,b.value.model],()=>{y.value=!0},{deep:!0});async function se(){w.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(b.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b.value)})).json()).success?(y.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ie){localStorage.setItem("quant_ai_config",JSON.stringify(b.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ie)}finally{w.value=!1}}async function B(){R.value=!0;try{const $=await(await fetch("/api/ai/test")).json();$.success?ElementPlus.ElMessage.success($.message||"API连接正常"):ElementPlus.ElMessage.error($.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{R.value=!1}}function T(){const ie={ai:b.value,feishu:m.value,theme:c.value,export_time:new Date().toISOString()},$=new Blob([JSON.stringify(ie,null,2)],{type:"application/json"}),ue=URL.createObjectURL($),Ee=document.createElement("a");Ee.href=ue,Ee.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ee.click(),URL.revokeObjectURL(ue),ElementPlus.ElMessage.success("配置已导出")}function d(ie){const $=ie.target.files[0];if(!$)return;const ue=new FileReader;ue.onload=async Ee=>{try{const ze=JSON.parse(Ee.target.result);ze.ai&&(b.value={...b.value,...ze.ai},await se()),ze.feishu&&(Object.assign(m.value,ze.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ze.feishu)})),ze.theme&&(c.value=ze.theme,g(ze.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ue.readAsText($),ie.target.value=""}async function S(){w.value=!0;const ie=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:G.value,feishu:m.value,ai:b.value,rate_limit:H.value,auto_evaluate:o.value,theme:c.value}})}).then(ze=>["userConfig",ze.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G.value)}).then(ze=>["tushare",ze.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:te.value})}).then(ze=>["datasource",ze.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)}).then(ze=>["feishu",ze.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b.value)}).then(ze=>["ai",ze.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H.value)}).then(ze=>["rateLimit",ze.ok]),M().then(()=>["aiModels",!0],()=>["aiModels",!1])],$=await Promise.allSettled(ie),ue=$.filter(ze=>ze.status==="fulfilled"&&ze.value[1]).length,Ee=$.filter(ze=>ze.status==="rejected"||ze.status==="fulfilled"&&!ze.value[1]).length;F.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(i.value.selected)),localStorage.setItem("quant_strategy_filter_mode",i.value.mode),q.value&&fetch(`/api/users/${q.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:c.value})}).catch(()=>{}),n.value=!1,l.value=new Date().toLocaleString("zh-CN"),w.value=!1,Ee>0&&console.error(`[saveAllConfig] ${ue}/${ue+Ee} 项保存成功，${Ee} 项失败`)}async function u(){try{const $=await(await fetch("/api/user_config/config")).json();if($.success&&$.config){const ue=$.config;ue.tushare&&(G.value={...G.value,...ue.tushare}),ue.feishu&&(m.value={...m.value,...ue.feishu}),ue.ai&&(b.value={...b.value,...ue.ai}),ue.rate_limit&&(H.value={...H.value,...ue.rate_limit}),ue.auto_evaluate&&(o.value={...o.value,...ue.auto_evaluate}),ue.theme&&!localStorage.getItem("quant_theme")&&D(ue.theme)}n.value=!1,F.value=!1}catch(ie){console.error("[resetAllConfig] 重新加载配置失败:",ie),n.value=!1}}async function j(){ee.value="testing";try{const $=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(ee.value=$.success?"connected":"disconnected",$.success){const ue=$.data_count?` (获取到 ${$.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ue)}else ElementPlus.ElMessage.error($.message||"连接失败")}catch{ee.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function ae(){try{const $=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();ee.value=$.success?"connected":"disconnected"}catch{ee.value="disconnected"}}async function Y(){var ie;P.value=!0;try{const ue=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ue.success?(L.value=parseInt(((ie=ue.message.match(/\d+/))==null?void 0:ie[0])||"0"),ElementPlus.ElMessage.success(ue.message)):ElementPlus.ElMessage.error(ue.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{P.value=!1}}async function Q(){try{const $=await(await fetch("/api/market/tushare/config")).json();$.success&&$.config&&(G.value={...G.value,...$.config})}catch(ie){console.warn("loadTushareConfig failed:",ie)}}function C(ie){if(!ie)return"";const $=String(ie),ue=$.length;if(ue<=4)return $[0]+"*".repeat(ue-1);const Ee=ue<=8?2:4;return $.slice(0,Ee)+"*".repeat(ue-Ee-Ee)+$.slice(-Ee)}async function h(ie){let $;try{$=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ee=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:$,target:ie})})).json();if(Ee.success)return Ee.secret;ElementPlus.ElMessage.error(Ee.message||"查看失败")}catch(ue){ElementPlus.ElMessage.error("查看失败: "+ue.message)}return null}async function Z(ie){const $=te.value[ie];if(!$)return;if($._revealed){$._revealed=!1,$._masked=C($.token);return}const ue=await h(ie);ue!==null&&($.token=ue,$._revealed=!0)}async function pe(ie){const $=te.value[ie];if($){if($._editing){$._editing=!1,$._revealed=!1,$.token&&($._masked=C($.token));return}$._editing=!0;try{const ue=await h(ie);if(ue===null){$._editing=!1;return}$.token=ue,$._revealed=!0}catch(ue){$._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ue.message)}}}async function ge(){try{const $=await(await fetch("/api/market/datasource/config")).json();if($.success&&$.config&&$.config.sources){const ue=$.config.sources,Ee=ze=>{const $e={...te.value[ze],...ue[ze]||{}};return $e._editing=!1,$e._revealed=!1,$e._masked=$e.token||"",$e.token="",$e};te.value={sxsc_tushare:Ee("sxsc_tushare"),tushare:Ee("tushare"),akshare:{...te.value.akshare,...ue.akshare||{}}}}try{const Ee=await(await fetch("/api/market/datasource/status")).json();if(Ee.success&&Ee.status)for(const[ze,$e]of Object.entries(Ee.status))N.value[ze]=$e.connected?"connected":"disconnected"}catch{}}catch(ie){console.warn("loadDatasourceConfig failed:",ie)}}async function Me(){try{const ie={};for(const[$,ue]of Object.entries(te.value)){const{_revealed:Ee,_masked:ze,_editing:$e,...mt}=ue;!$e&&$!=="akshare"&&(mt.token=""),ie[$]=mt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ie})}),n.value=!0}catch(ie){console.warn("saveDatasourceConfig failed:",ie)}}async function je(ie){N.value[ie]="testing";try{const $=te.value[ie];$&&$._editing&&await Me();const Ee=await(await fetch(`/api/market/datasource/test/${ie}`,{method:"POST"})).json();N.value[ie]=Ee.success?"connected":"disconnected",Ee.success?ElementPlus.ElMessage.success(`${ie} 连接成功`):ElementPlus.ElMessage.error(`${ie}: ${Ee.message}`)}catch{N.value[ie]="disconnected",ElementPlus.ElMessage.error(`${ie} 连接失败`)}}async function qe(){try{const $=await(await fetch("/api/feishu/config")).json();$&&typeof $=="object"&&(m.value={...m.value,...$},v.value=JSON.parse(JSON.stringify(m.value)))}catch(ie){console.warn("loadFeishuConfig failed:",ie)}}async function ke(){try{const $=await(await fetch("/api/ai/config")).json();if($.success&&$.data)b.value={...b.value,...$.data};else{const ue=localStorage.getItem("quant_ai_config");ue&&(b.value=JSON.parse(ue))}}catch{const $=localStorage.getItem("quant_ai_config");$&&(b.value=JSON.parse($))}}async function le(){try{const $=await(await fetch("/api/user_config/config")).json();if($.success&&$.config){const ue=$.config;ue.tushare&&(G.value={...G.value,...ue.tushare}),ue.datasource&&ue.datasource.sources&&(te.value={sxsc_tushare:{...te.value.sxsc_tushare,...ue.datasource.sources.sxsc_tushare||{}},tushare:{...te.value.tushare,...ue.datasource.sources.tushare||{}},akshare:{...te.value.akshare,...ue.datasource.sources.akshare||{}}}),ue.feishu&&(m.value={...m.value,...ue.feishu},v.value=JSON.parse(JSON.stringify(m.value))),ue.ai&&(b.value={...b.value,...ue.ai}),ue.rate_limit&&(H.value={...H.value,...ue.rate_limit}),ue.theme&&!localStorage.getItem("quant_theme")&&D(ue.theme),ue.auto_evaluate&&(o.value={...o.value,...ue.auto_evaluate})}}catch(ie){console.warn("加载用户配置失败，使用本地缓存",ie)}}async function be(){var ie,$,ue,Ee;try{const $e=await(await fetch("/api/dashboard")).json(),mt=$e.success?$e.data:$e;L.value=((ie=mt==null?void 0:mt.stats)==null?void 0:ie.total_stocks_covered)||null;const We=await(await fetch("/api/dates")).json();z.value=(($=We==null?void 0:We.data)==null?void 0:$.total)||((Ee=(ue=We==null?void 0:We.data)==null?void 0:ue.dates)==null?void 0:Ee.length)||null;const oe=await(await fetch("/api/ai/history")).json();X.value="ok"}catch{X.value="pending"}}async function Te(){try{const $=await(await fetch("/api/dashboard")).json();k.value=$.success?$.data:$,x.value=Date.now()}catch(ie){console.error("加载总览数据失败",ie)}}return{configSaving:w,configChanged:y,globalConfigDirty:n,lastSavedTime:l,feishuConfigOriginal:v,aiConfigOriginal:V,tushareConfigOriginal:A,tushareConfig:G,tushareStatus:ee,datasourceConfig:te,datasourceStatus:N,syncingData:P,stockCount:L,tradeDateCount:z,aiStatus:X,appVersion:J,showImportDialog:de,rateLimitConfig:H,rateLimitDirty:F,rateLimitSaving:I,loadRateLimit:f,saveRateLimit:_,saveAiConfig:se,testAiApi:B,exportConfig:T,importConfig:d,saveAllConfig:S,resetAllConfig:u,testTushareConnection:j,checkTushareConnection:ae,syncStockData:Y,loadTushareConfig:Q,loadDatasourceConfig:ge,saveDatasourceConfig:Me,testDatasource:je,toggleDatasourceKeyReveal:Z,toggleDatasourceEdit:pe,loadFeishuConfig:qe,loadAiConfig:ke,loadUserConfig:le,loadSystemStatus:be,loadDashboardData:Te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:p}=Vue,{currentUser:t,applyTheme:y,allMenuDefs:b,loadGroupConfig:R}=a,m=e([]),c=e(""),g=e(""),o=e("users"),q=e({}),i=e({}),D=p(()=>{let le=m.value;if(g.value&&(le=le.filter(Te=>(Te.group||Te.role)===g.value)),!c.value)return le;const be=c.value.toLowerCase();return le.filter(Te=>Te.username.toLowerCase().includes(be))});function k(le){q.value={...q.value,[le]:!q.value[le]}}async function x(le,be){try{const ie=await(await fetch("/api/groups/"+be+"/members/"+le,{method:"DELETE"})).json();ie.success?(await pe(),await h()):ElementPlus.ElMessage.error(ie.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function M(le){const be=i.value[le];if(be)try{const ie=await(await fetch("/api/groups/"+le+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:be})})).json();ie.success?(await pe(),await h(),i.value={...i.value,[le]:""}):ElementPlus.ElMessage.error(ie.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function w(le,be){try{const ie=await(await fetch("/api/users/"+le.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:be})})).json();ie.success?await pe():ElementPlus.ElMessage.error(ie.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const n=e(!1),l=e(null),v=e({username:"",password:"",role:"user",theme:"tech-blue"}),V=e(!1),A=e(null),G=e(!1),ee=e(!1),te=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),N=e({}),P=e(!1),L=e({group_id:"",name:"",description:""}),z=e(!1),X=e([]),J=e(""),de=e(""),H=e({});function F(le){H.value={...H.value,[le]:!H.value[le]}}function I(le){return!m.value||!m.value.length?0:m.value.filter(be=>(be.group||be.role)===le).length}function f(le){const be=(le==null?void 0:le.visible_menus)||{};return Object.values(be).filter(Boolean).length}const _=p(()=>Object.keys(C.value).length);async function se(le){de.value=le,ee.value=!0,await B(le)}async function B(le){try{const Te=await(await fetch("/api/groups/"+le+"/members")).json();Te.success&&(X.value=Te.members||[])}catch(be){X.value=[],console.error("[loadGroupMembers]",be)}}async function T(){if(!(!J.value||!de.value)){z.value=!0;try{const be=await(await fetch("/api/groups/"+de.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:J.value})})).json();be.success?(await B(de.value),await pe(),J.value=""):ElementPlus.ElMessage.error(be.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{z.value=!1}}}async function d(le){try{const Te=await(await fetch("/api/groups/"+de.value+"/members/"+le,{method:"DELETE"})).json();Te.success?(await B(de.value),await pe()):ElementPlus.ElMessage.error(Te.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const S=p(()=>{if(!m.value)return[];const le=new Set(X.value.map(be=>be.username));return m.value.filter(be=>be.username!=="admin"&&be.username!=="guest"&&!le.has(be.username))});function u(le){const be=te.value.visible_menus[le],Te=b.find(ie=>ie.key===le);if(Te)if(be){const ie=N.value[le]||{};Te.subPages.forEach($=>{const ue=le+"."+$;te.value.visible_sub_pages[ue]=ie[$]!==void 0?ie[$]:!0})}else{const ie={};Te.subPages.forEach($=>{const ue=le+"."+$;ie[$]=te.value.visible_sub_pages[ue],te.value.visible_sub_pages[ue]=!1}),N.value[le]=ie}}function j(le){A.value=le;const be=C.value[le]||{};te.value={name:be.name||le,description:be.description||"",visible_menus:{...be.visible_menus||{}},visible_sub_pages:{...be.visible_sub_pages||{}}},N.value={},b.forEach(Te=>{const ie={};Te.subPages.forEach($=>{ie[$]=te.value.visible_sub_pages[Te.key+"."+$]}),N.value[Te.key]=ie}),G.value=!0}async function ae(){z.value=!0;try{const be=await(await fetch("/api/groups/"+A.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(te.value)})).json();be.success?(G.value=!1,A.value=null,await h(),await R()):ElementPlus.ElMessage.error(be.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{z.value=!1}}async function Y(le){var be;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((be=C.value[le])==null?void 0:be.name)||le)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const $=await(await fetch("/api/groups/"+le,{method:"DELETE"})).json();$.success?await h():ElementPlus.ElMessage.error($.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function Q(){if(L.value.group_id){z.value=!0;try{const be=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L.value)})).json();be.success?(P.value=!1,L.value={group_id:"",name:"",description:""},await h()):ElementPlus.ElMessage.error(be.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{z.value=!1}}}const C=e({});async function h(){try{if(!localStorage.getItem("quant_token"))return;const be=await fetch("/api/groups");if(be.ok){const Te=await be.json();C.value=Te.groups||{}}}catch(le){console.warn("loadAllGroups:",le)}}function Z(le){var be;return((be=C.value[le])==null?void 0:be.name)||le||"--"}async function pe(){try{if(!localStorage.getItem("quant_token")){m.value=[];return}const be=await fetch("/api/users");if(be.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const Te=await be.json();m.value=Te.users||[]}catch(le){m.value=[],console.error("[loadUsers] error:",le)}}function ge(le){l.value=le,v.value={username:le.username,password:"",role:le.role,theme:le.theme||"tech-blue",group:le.group||le.role},n.value=!0}async function Me(){if(v.value.username){V.value=!0;try{const le=l.value?"PUT":"POST",be=l.value?`/api/users/${v.value.username}`:"/api/users",ie=await(await fetch(be,{method:le,headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)})).json();if(ie.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&v.value.username===t.value.username){const $=v.value.theme;$&&$!==t.value.theme&&(t.value.theme=$,localStorage.setItem("quant_user",JSON.stringify(t.value)),y($))}n.value=!1,l.value=null,await pe()}else ElementPlus.ElMessage.error(ie.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{V.value=!1}}}async function je(le){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${le}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await pe())}catch(be){console.error("[deleteUser]",be)}}async function qe(le){try{const Te=await(await fetch(`/api/users/${le.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:le.enabled})})).json();Te.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Te.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function ke(le){try{const{value:be}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${le.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(be){const ie=await(await fetch(`/api/users/${le.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:be})})).json();ie.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ie.message||"重置失败")}}catch{}}return{userList:m,userSearch:c,groupFilter:g,userPageTab:o,expandedGroups:q,addMemberGroupMap:i,filteredUsers:D,toggleGroupExpand:k,removeMemberFromGroupInline:x,addMemberToGroupInline:M,changeUserGroup:w,showAddUser:n,editingUser:l,userForm:v,savingUser:V,editingGroup:A,menuConfigDialog:G,memberDialog:ee,groupEditForm:te,subPageCache:N,showAddGroup:P,addGroupForm:L,savingGroup:z,groupMembers:X,addMemberUsername:J,selectedMemberGroup:de,subPageSectionExpanded:H,toggleSubPageSection:F,getGroupMemberCount:I,getMenuEnabledCount:f,groupCount:_,openMemberManager:se,loadGroupMembers:B,addMemberToGroup:T,removeMemberFromGroup:d,availableUsersForGroup:S,onParentToggle:u,openMenuConfig:j,saveMenuConfig:ae,deleteGroupConfig:Y,createGroup:Q,allGroups:C,getGroupName:Z,loadAllGroups:h,loadUsers:pe,editUser:ge,saveUser:Me,deleteUser:je,toggleUserEnabled:qe,resetUserPassword:ke}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:p}=Vue,{stockKlineLoaded:t,stockDetailVisible:y,stockDetailTab:b,stockDetail:R,disposeStockKline:m}=a,c=e([]),g=e(!1),o=e(!1),q=e("date"),i=e([]),D=e([]),k=e([]),x=e([]),M=p(()=>{var d,S;const T=[];for(const u of c.value){if(!u||u.id==null)continue;const j=u.stock_name||u.stock_code||"",ae=Array.isArray(u.messages)?u.messages:[];T.push({id:u.id,stock_code:u.stock_code,stock_name:j,first_msg:u.first_msg||((S=(d=ae[0])==null?void 0:d.content)==null?void 0:S.substring(0,50))||"",msg_count:u.msg_count||ae.length||0,created_at:u.created_at,date:(u.created_at||"").substring(0,10),month:(u.created_at||"").substring(0,7),messages:ae})}return T}),w=p(()=>{const T={};for(const S of M.value){const u=S.date||"未知";T[u]||(T[u]=[]),T[u].push(S)}const d={};return Object.keys(T).sort((S,u)=>u.localeCompare(S)).forEach(S=>d[S]=T[S]),d}),n=p(()=>{const T={};for(const S of M.value){const u=S.month||"未知";T[u]||(T[u]=[]),T[u].push(S)}const d={};return Object.keys(T).sort((S,u)=>u.localeCompare(S)).forEach(S=>d[S]=T[S]),d}),l=p(()=>{const T={};for(const d of M.value){const S=`${d.stock_name}(${d.stock_code})`;T[S]||(T[S]=[]),T[S].push(d)}return T});function v(T){const d=i.value.indexOf(T);d>=0?i.value.splice(d,1):i.value.push(T)}function V(T){const d=w.value[T]||[];if(d.every(u=>i.value.includes(u.id)))i.value=i.value.filter(u=>!d.some(j=>j.id===u));else for(const u of d)i.value.includes(u.id)||i.value.push(u.id)}function A(T){const d=n.value[T]||[];if(d.every(u=>i.value.includes(u.id)))i.value=i.value.filter(u=>!d.some(j=>j.id===u));else for(const u of d)i.value.includes(u.id)||i.value.push(u.id)}function G(T){const d=l.value[T]||[];if(d.every(u=>i.value.includes(u.id)))i.value=i.value.filter(u=>!d.some(j=>j.id===u));else for(const u of d)i.value.includes(u.id)||i.value.push(u.id)}function ee(T){const d=D.value.indexOf(T);d>=0?D.value.splice(d,1):D.value.push(T)}function te(T){const d=k.value.indexOf(T);d>=0?k.value.splice(d,1):k.value.push(T)}function N(T){const d=x.value.indexOf(T);d>=0?x.value.splice(d,1):x.value.push(T)}function P(){i.value.length===M.value.length?i.value=[]:i.value=M.value.map(T=>T.id)}async function L(){for(const T of[...i.value])await se(T);i.value=[]}const z={};async function X(T){R.value={stock:T.stock_code,name:T.stock_name},y.value=!0,b.value="chat",t.value=!1,m(),H.value=!0,F.value="",de.value=[];try{let d=z[T.id];if(!d){const S=await fetch("/api/ai/chat/history/"+T.id);if(!S.ok)throw new Error("load history failed");d=(await S.json()).messages||[],z[T.id]=d}de.value=d.map(S=>({role:S.role,content:S.content}))}catch{F.value="历史消息加载失败，请重试"}finally{H.value=!1}}const J=e(""),de=e([]),H=e(!1),F=e("");async function I(){var S;const T=J.value.trim();if(!T||H.value)return;F.value="",de.value.push({role:"user",content:T}),J.value="",H.value=!0;const d=de.value.length;de.value.push({role:"assistant",content:""});try{const ae=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((S=R.value)==null?void 0:S.stock)||"",message:T})})).body.getReader(),Y=new TextDecoder;let Q="";for(;;){const{done:C,value:h}=await ae.read();if(C)break;Q+=Y.decode(h,{stream:!0});const Z=Q.split(`
`);Q=Z.pop()||"";for(const pe of Z)if(pe.startsWith("data: "))try{const ge=JSON.parse(pe.slice(6));ge.token?de.value[d].content+=ge.token:ge.done?console.log("Stream done:",ge.session_id):ge.error&&(F.value=ge.error)}catch(ge){console.warn("SSE parse error:",ge)}}}catch(u){de.value[d].content||(de.value[d].content="网络错误: "+u.message)}H.value=!1}async function f(T){var S;F.value="",H.value=!0;const d={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};de.value.push({role:"user",content:d[T]||d.comprehensive});try{const j=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((S=R.value)==null?void 0:S.stock)||"",mode:T})});if(j.ok){const ae=await j.json();de.value.push({role:"assistant",content:ae.reply||"无回复"})}}catch(u){F.value="网络错误: "+u.message}H.value=!1}async function _(){g.value=!0,o.value=!1;try{const T=await fetch("/api/ai/chat/history?view=date");if(T.ok){const d=await T.json(),S=[];for(const u of d)for(const j of u.items||[])S.push(j);c.value=S}else o.value=!0}catch(T){console.error(T),o.value=!0}finally{g.value=!1}}async function se(T){try{await fetch("/api/ai/chat/history/"+T,{method:"DELETE"}),c.value=c.value.filter(d=>d.id!==T)}catch(d){console.error("deleteChatSession:",d)}}function B(T){if(!T)return"";const d=String(T).split(`
`),S=[],u=[];let j=0;for(;j<d.length;){if(/^\s*\|.*\|\s*$/.test(d[j])){let Y=j;const Q=[];for(;Y<d.length&&/^\s*\|.*\|\s*$/.test(d[Y]);)Q.push(d[Y]),Y++;const C=pe=>pe.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(ge=>ge.trim()),h=Q.map(C);if(h.length>1&&h[1].every(pe=>/^:?-{3,}:?$/.test(pe))){const pe=Math.max(...h.map(qe=>qe.length)),ge=h[0].slice(0,pe),Me=h.slice(2);let je="<table>";Me.length?(je+="<thead><tr>"+ge.map(qe=>"<th>"+qe+"</th>").join("")+"</tr></thead>",je+="<tbody>"+Me.map(qe=>"<tr>"+qe.slice(0,pe).map(ke=>"<td>"+ke+"</td>").join("")+"</tr>").join("")+"</tbody>"):je+="<tbody><tr>"+ge.map(qe=>"<td>"+qe+"</td>").join("")+"</tr></tbody>",je+="</table>",S.push(je),u.push("\0T"+(S.length-1)+"\0"),j=Y;continue}for(;j<Y;)u.push(d[j]),j++;continue}u.push(d[j]),j++}let ae=u.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return S.forEach((Y,Q)=>{ae=ae.split("\0T"+Q+"\0").join(Y)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ae=window.__quantModules.core.sanitizeHtml(ae)),ae}return{chatSessions:c,chatHistoryView:q,selectedChatIds:i,expandedChatDates:D,expandedChatMonths:k,expandedChatStocks:x,chatHistoryLoading:g,chatHistoryError:o,allChatSessionsFlat:M,chatGroupedByDate:w,chatGroupedByMonth:n,chatGroupedByStock:l,toggleSelectChat:v,toggleSelectChatDate:V,toggleSelectChatMonth:A,toggleSelectChatStock:G,toggleChatDateExpand:ee,toggleChatMonthExpand:te,toggleChatStockExpand:N,selectAllChatSessions:P,deleteSelectedChatSessions:L,viewChatSession:X,loadChatHistory:_,deleteChatSession:se,renderMarkdown:B,stockChatInput:J,stockChatMessages:de,stockChatLoading:H,stockChatError:F,askStockSend:I,askStockQuick:f}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:p,watch:t}=Vue,{consensus:y,currentPage:b,currentSubPage:R,dashboardData:m,searchKeyword:c,statusFilter:g,strategyFilter:o,strategyFilterCounts:q}=a;function i(N){const P=o.value.selected;if(!P||P.length===0)return N;const L=o.value.mode;return N.filter(z=>{const X=z.strategy_names||z.strategies||[];return L==="union"?P.some(J=>X.includes(J)):P.every(J=>X.includes(J))})}const D=p(()=>{const N=i(y.value||[]);return{all:N.length,newCount:N.filter(P=>P.status==="new").length,current:N.filter(P=>P.status==="current").length,out:N.filter(P=>P.status==="out").length}}),k=p(()=>{let N=y.value||[];if(g.value!=="all"&&(N=N.filter(P=>P.status===g.value)),N=i(N),c.value){const P=c.value.toLowerCase();N=N.filter(L=>L.code.toLowerCase().includes(P)||L.name&&L.name.toLowerCase().includes(P))}return N}),x=p(()=>{const N=y.value||[],P={},L={};for(const z of N)z.code&&z.name&&(L[z.code]=z.name);for(const z of N){const X=z.strategy_names||z.strategies||[];for(const J of X)P[J]||(P[J]={strategy:J,count:0,codes:[],names:[]}),P[J].count++,P[J].codes.includes(z.code)||(P[J].codes.push(z.code),P[J].names.push({code:z.code,name:L[z.code]||z.code}))}return Object.values(P).sort((z,X)=>X.count-z.count)}),M=p(()=>{const N=o.value.selected,P=o.value.mode,L={};for(const[z,X]of Object.entries(q.value)){const J=X||[];!N||N.length===0?L[z]=J.length:P==="union"?L[z]=J.filter(de=>de.strategies&&N.some(H=>de.strategies.includes(H))).length:L[z]=J.filter(de=>de.strategies&&N.every(H=>de.strategies.includes(H))).length}return L});function w(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const n=p(()=>{const N=(m.value||{}).consensus_rank||[];return i(N)}),l=p(()=>{const N=y.value||q.value.day||[];return i(N).length}),v=p(()=>{const N=(m.value||{}).strategy_counts||[],P=y.value||q.value.day||[];if(P.length===0)return N;const L=i(P),z={};L.forEach(J=>{(J.strategy_names||J.strategies||[]).forEach(H=>{z[H]=(z[H]||0)+1})});const X=L.length||1;return N.map(J=>{const de=J.strategy_name||J.strategy_id,H=z[de]||0;return{...J,count:H,percentage:Math.round(H/X*1e3)/10}})}),V=p(()=>{const N=(m.value||{}).pool_changes||{},P=(N.new_count||0)-(N.out_count||0);return P>0?{dir:"up",text:"↑"+P}:P<0?{dir:"down",text:"↓"+Math.abs(P)}:{dir:"flat",text:"→0"}}),A=p(()=>{const N=(m.value||{}).time_coverage||{},P=new Date(N.start_date),L=new Date(N.end_date),z=new Date;if(!P.getTime()||!L.getTime()||z>=L)return 100;if(z<=P)return 0;const X=L-P,J=z-P;return Math.round(J/X*100)}),G=e(null),ee=p(()=>{if(!G.value)return"";const N=Math.floor((Date.now()-G.value)/1e3);return N<60?N+"秒前刷新":N<3600?Math.floor(N/60)+"分钟前刷新":Math.floor(N/3600)+"小时前刷新"});function te(N){o.value.selected=[N],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([N])),localStorage.setItem("quant_strategy_filter_mode","union"),b.value="calendar",R.value="calendar"}return{applyStrategyFilter:i,statusCounts:D,stockPool:k,strategyDistribution:x,strategyPreviewCount:M,saveStrategyFilter:w,filteredConsensusRank:n,currentPoolSize:l,filteredStrategyCounts:v,poolChangeBadge:V,timeBarPercent:A,lastRefreshTime:G,timeSinceRefresh:ee,navigateToStrategyFilter:te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist={create(a){const{ref:e,computed:p,watch:t}=Vue,{currentUser:y,selectedDate:b,stockDetail:R,stockDetailTab:m,stockDetailVisible:c,stockDetailLoading:g,stockKlineLoaded:o,viewCache:q,animateScoreEntrance:i,loadStockKline:D,refreshStockScore:k,disposeStockKline:x,aiHistory:M,aiLoading:w,aiEvalStage:n,aiEvalElapsed:l,aiEvalError:v,aiResult:V,loadLastEvaluation:A,autoEvaluateConfig:G,autoEvaluateScope:ee,batchStocks:te,batchRunning:N,batchTotal:P,batchCompleted:L,batchCurrent:z,batchStatuses:X,batchResults:J,batchEvalErrors:de,expandedDates:H,expandedStocks:F,savingConfig:I,selectedHistoryIds:f,selectedWatchlistCodes:_,showAutoEvaluateSettings:se,showBatchEvaluate:B}=a,T=s=>(getComputedStyle(document.documentElement).getPropertyValue(s)||"").trim(),d=e(""),S=e("default"),u=e("default"),j=e([]),ae=p(()=>new Set(j.value.map(s=>s.code))),Y=e(!1),Q=e(!1),C=p(()=>{const s=[...j.value];return u.value==="name"?s.sort((r,W)=>r.name.localeCompare(W.name,"zh")):u.value==="added"?s.sort((r,W)=>(W.added_at||"").localeCompare(r.added_at||"")):u.value==="score"&&s.sort((r,W)=>{const we=Z(r.code);return Z(W.code)-we}),s});function h(s){const r=M.value.filter(we=>we.stock_code===s);if(r.length===0)return null;const W=r.reduce((we,he)=>we.evaluate_time>he.evaluate_time?we:he);return{score:W.result.total_score,color:W.result.level_color}}function Z(s){const r=h(s);return r?r.score:0}function pe(s){Bt(s.code,s.name),ke.value=ke.value.filter(r=>r.code!==s.code),qe.value=""}const ge=p(()=>new Set(M.value.map(s=>s.stock_code))),Me=e(new Set);function je(s){Me.value.add(s)}const qe=e(""),ke=e([]),le=e(!1),be=e({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Te=e(!1),ie=e(!1),$=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};$.REALTIME_WS_PATH;const ue=$.REALTIME_DEGRADED_TEXT||"数据不可达",Ee=$.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";$.WARN_RISE_SPEED_THRESHOLD!=null&&$.WARN_RISE_SPEED_THRESHOLD,$.WARN_VOLUME_RATIO_THRESHOLD!=null&&$.WARN_VOLUME_RATIO_THRESHOLD;const ze=$.quoteFmt||{price:s=>s==null?"--":Number(s).toFixed(2),pct:s=>s==null?"--":Number(s).toFixed(2)+"%",num:s=>s==null?"--":Number(s).toFixed(2),color:s=>""},$e=3,mt=5e3,Ze=e({}),We=e(!1),st=e("idle");let oe=null,_e=null,Pe=0;function Ie(s){return $.checkQuoteWarning?$.checkQuoteWarning(s):null}function ct(s){return Ie(Ze.value[s])}function at(s){return ze.color(Ze.value[s])}function Ge(s){return ze.price(Ze.value[s]&&Ze.value[s].price)}function pt(s){return ze.pct(Ze.value[s]&&Ze.value[s].change_pct)}function St(s,r){return ze.num(Ze.value[s]&&Ze.value[s][r])}function gt(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function Ye(){if(!oe||oe.readyState!==1)return;const s=(j.value||[]).map(r=>r.code);s.length!==0&&oe.send(JSON.stringify({subscribe:s}))}function ht(){if(_e&&(clearTimeout(_e),_e=null),oe){try{oe.onopen=null,oe.onmessage=null,oe.onerror=null,oe.onclose=null,oe.close()}catch{}oe=null}Ze.value={},We.value=!1,st.value="idle"}function Tt(){const s=gt();if(!s||!$.buildRealtimeWsUrl||st.value==="open"||st.value==="connecting")return;let r;try{r=$.buildRealtimeWsUrl()+"?token="+encodeURIComponent(s)}catch{st.value="offline",We.value=!0;return}st.value="connecting";let W=null;try{W=new WebSocket(r)}catch{st.value="offline",We.value=!0;return}oe=W,W.onopen=function(){st.value="open",Pe=0,Ye()},W.onmessage=function(we){let he=null;try{he=JSON.parse(we.data||"{}")}catch{return}if(!he||he.type!=="quotes")return;if(We.value=!!he.degraded,he.degraded||!Array.isArray(he.data)){Ze.value={};return}const ot={};he.data.forEach(function(Xe){Xe&&Xe.code&&(ot[Xe.code]=Xe)}),Ze.value=ot},W.onerror=function(){st.value="offline",We.value=!0},W.onclose=function(){st.value="offline",Pe<$e?(Pe++,_e=setTimeout(function(){st.value!=="open"&&Tt()},mt*Pe)):We.value=!0}}t(j,function(){st.value==="open"&&Ye()}),gt()&&setTimeout(Tt,500);async function zt(){if(!R.value)return;w.value=!0,V.value=null,v.value="",n.value="fetching",l.value=0;const s=Date.now(),r=setInterval(()=>{w.value&&(l.value=Math.round((Date.now()-s)/1e3))},500);try{const W=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:R.value.stock,stock_name:R.value.name||R.value.stock,strategy:S.value})});n.value="calculating";const we=await W.json();n.value="analyzing",we.success?(await nextTick(),V.value=we.data,m.value="ai",xe()):(v.value=we.message||"评估失败",ElementPlus.ElMessage.error(v.value))}catch(W){v.value=W&&W.message&&!String(W.message).includes("Failed to fetch")?W.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(v.value)}finally{clearInterval(r),w.value=!1,l.value=0,v.value?n.value="":(n.value="done",setTimeout(()=>{n.value==="done"&&(n.value="")},800))}}const qt=50,kt=e(0),E=e(!1),re=p(()=>M.value.length<kt.value);async function xe(){Y.value=!0,Q.value=!1;try{if(!localStorage.getItem("quant_token")){M.value=[];return}const r=await fetch(`/api/ai/history?limit=${qt}&offset=0`);if(r.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),y.value=null;return}const W=await r.json();W.success?(M.value=W.data||[],kt.value=W.total!=null?W.total:M.value.length):Q.value=!0}catch(s){console.error("[loadAiHistory] error:",s),Q.value=!0}finally{Y.value=!1}}async function De(){if(!(E.value||!re.value)){E.value=!0;try{const r=await(await fetch(`/api/ai/history?limit=${qt}&offset=${M.value.length}`)).json();if(r.success&&Array.isArray(r.data)){const W=new Set(M.value.map(he=>he.id)),we=r.data.filter(he=>!W.has(he.id));M.value=M.value.concat(we),r.total!=null&&(kt.value=r.total)}}catch(s){console.warn("[loadMoreAiHistory] error:",s)}finally{E.value=!1}}}async function Ne(s){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const W=await(await fetch(`/api/ai/history/${s}`,{method:"DELETE"})).json();if(W.success){ElementPlus.ElMessage.success("删除成功"),xe();const we=f.value.indexOf(s);we>=0&&f.value.splice(we,1)}else ElementPlus.ElMessage.error(W.message||"删除失败")}catch{}}function Be(s){const r=f.value.indexOf(s);r>=0?f.value.splice(r,1):f.value.push(s)}function K(){f.value=[]}function ne(){_.value=[]}async function He(){const s=f.value;if(s.length===0)return;const r=M.value.filter(W=>s.includes(W.id)).map(W=>W.stock_code);B.value=!0,te.value=[...new Set(r)].join(",")}async function Je(){const s=f.value;if(s.length===0)return;const r=M.value.filter(he=>s.includes(he.id)),W=[...new Map(r.map(he=>[he.stock_code,he])).values()];let we=0;for(const he of W)ae.value.has(he.stock_code)||(await Bt(he.stock_code,he.stock_name||he.stock_code),we++);we>0?ElementPlus.ElMessage.success(`已加入 ${we} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function Ue(){const s=f.value;if(s.length===0)return;const r=M.value.filter(we=>s.includes(we.id)),W=[...new Map(r.map(we=>[we.stock_code,we])).values()];try{const he=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:W.map(ot=>({stock_code:ot.stock_code,stock_name:ot.stock_name||""}))})})).json();he&&he.success?ElementPlus.ElMessage.success(`已登记 ${he.count||W.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(he&&he.detail||"批量加入组合失败")}catch(we){console.warn("batchAddToPortfolio failed:",we),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function yt(){if(_.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${_.value.length} 只股票？`,"提示",{type:"warning"});for(const s of _.value)await dt(s);_.value=[],ElementPlus.ElMessage.success("已移除")}catch(s){s&&s.message!=="cancel"&&console.warn("batchRemoveWatchlist:",s)}}function At(s){const r=_.value.indexOf(s);r>=0?_.value.splice(r,1):_.value.push(s)}function Et(){f.value.length===M.value.length?f.value=[]:f.value=M.value.map(s=>s.id)}function jt(){_.value.length===j.value.length?_.value=[]:_.value=j.value.map(s=>s.code)}async function it(){if(f.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${f.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const r=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:f.value})})).json();r.success?(ElementPlus.ElMessage.success(r.message),f.value=[],xe()):ElementPlus.ElMessage.error(r.message||"删除失败")}catch{}}async function bt(){try{const r=await(await fetch("/api/ai/auto-config")).json();r.success&&(G.value=r.data,r.data.evaluate_scope&&(ee.value=r.data.evaluate_scope))}catch(s){console.warn("loadAutoEvaluateConfig failed:",s)}}async function et(){I.value=!0;try{G.value.evaluate_scope=ee.value;const r=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G.value)})).json();r.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),se.value=!1):ElementPlus.ElMessage.error(r.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{I.value=!1}}const It=e(!1);async function ta(){It.value=!0;try{const r=await(await fetch("/api/watchlist")).json();r.success&&(j.value=r.stocks||[])}catch(s){console.warn("loadWatchlist failed:",s)}finally{It.value=!1}}async function Bt(s,r){try{const we=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s,name:r})})).json();if(we.success)return we.existed||j.value.push({code:s,name:r,added_at:new Date().toISOString()}),!0}catch(W){console.warn("addToWatchlist failed:",W)}return!1}async function dt(s){try{await fetch(`/api/watchlist/${encodeURIComponent(s)}`,{method:"DELETE"}),j.value=j.value.filter(r=>r.code!==s)}catch(r){console.warn("removeFromWatchlist failed:",r)}}async function Nt(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),j.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(s){console.warn("clearWatchlist failed:",s)}}async function _t(s,r){ae.value.has(s)?(await dt(s),ElementPlus.ElMessage.info("已移除自选")):await Bt(s,r)&&ElementPlus.ElMessage.success("已加入自选")}async function pa(s,r){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(s,r||"");const W=new Date().toISOString().split("T")[0],we=b.value||W;m.value="kline",V.value=null,v.value="",x("stockKlineChart"),R.value=null,g.value=!0,o.value=!1,c.value=!0,nextTick(()=>i());try{const he=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${we}`);R.value=await he.json()}catch{R.value={stock:s,name:r,total_days:0}}finally{g.value=!1}await nextTick(),await D("daily"),k(),A(s)}const Xt=e(!1);async function fa(){var s;if(j.value.length!==0){Xt.value=!0;try{const W=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();W.success&&W.loaded>0?(((s=W.details)==null?void 0:s.loaded)||[]).forEach(we=>Me.value.add(we.code)):W.loaded===0&&W.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(r){console.error("预加载K线失败:",r)}finally{Xt.value=!1}}}async function Zt(s,r){w.value=!0,V.value=null,v.value="",n.value="fetching",o.value=!1,x();const W=new Date().toISOString().split("T")[0],we=b.value||W;try{const he=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${we}`);R.value=await he.json()}catch{R.value={stock:s,name:r,total_days:0}}m.value="ai",c.value=!0,await nextTick();try{const ot=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s,stock_name:r})})).json();ot.success?(V.value=ot.data,xe()):(v.value=ot.message||"评估失败",ElementPlus.ElMessage.error(v.value))}catch{v.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(v.value)}finally{w.value=!1,n.value=""}}async function aa(){j.value.length!==0&&(B.value=!0,te.value=j.value.map(s=>s.code).join(","))}async function Kt(){_.value.length!==0&&(B.value=!0,te.value=_.value.join(","))}async function sa(){if(!qe.value.trim()){ke.value=[];return}le.value=!0;try{const r=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(qe.value)}`)).json();ke.value=(r.results||[]).filter(W=>!ae.value.has(W.code))}catch(s){console.warn("searchStockForWatchlist failed:",s)}finally{le.value=!1}}async function Vt(){try{const r=await(await fetch("/api/data-refresh/config")).json();be.value=r}catch(s){console.error("加载数据刷新配置失败:",s)}}async function da(){ie.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(be.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{ie.value=!1}}async function O(){var s;Te.value=!0;try{const W=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();W.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((s=W.parser_stats)==null?void 0:s.dates_count)||0}交易日`),q.clear(),await Vt()):ElementPlus.ElMessage.error(W.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Te.value=!1}}const fe=e(!1);async function Oe(){fe.value=!0;try{const r=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(r.success){const W=r.result||{},we=r.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${W.pulled||0}/${W.total||0}, 财务 ${we.pulled||0}/${we.total||0}`),q.clear(),await Vt()}else ElementPlus.ElMessage.error(r.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{fe.value=!1}}const Ce=p(()=>{const s={};for(const r of M.value){const W=(r.evaluate_time||"").split("T")[0];s[W]||(s[W]=[]),s[W].push(r)}for(const r in s)s[r].sort((W,we)=>we.evaluate_time.localeCompare(W.evaluate_time));return s}),tt=p(()=>{const s={};for(const r of M.value){const W=r.stock_code;s[W]||(s[W]=[]),s[W].push(r)}for(const r in s)s[r].sort((W,we)=>we.evaluate_time.localeCompare(W.evaluate_time));return s}),Qe=p(()=>{const s={};for(const r of M.value){const W=(r.evaluate_time||"").split("T")[0].slice(0,7);s[W]||(s[W]=[]),s[W].push(r)}for(const r in s)s[r].sort((W,we)=>we.evaluate_time.localeCompare(W.evaluate_time));return s}),ft=p(()=>Object.keys(tt.value).length),Wt=p(()=>{const s=M.value.length;return s===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(W=>{const we=M.value.filter(he=>he.result.total_score>=W.min&&he.result.total_score<=W.max).length;return{...W,count:we,pct:Math.round(we/s*100)}})});async function Jt(){if(!d.value)return;const s=j.value.find(r=>r.code===d.value);if(s){w.value=!0,V.value=null,v.value="",n.value="fetching";try{R.value={stock:s.code,name:s.name,total_days:0},c.value=!0,m.value="ai",await nextTick();const W=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s.code,stock_name:s.name,strategy:S.value})})).json();W.success?(V.value=W.data,xe(),d.value=""):(v.value=W.message||"评估失败",ElementPlus.ElMessage.error(v.value))}catch{v.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(v.value)}finally{w.value=!1,n.value=""}}}function la(s){const r=H.value.indexOf(s);r>=0?H.value.splice(r,1):H.value.push(s)}function Ut(s){const W=(Ce.value[s]||[]).map(he=>he.id);W.every(he=>f.value.includes(he))?f.value=f.value.filter(he=>!W.includes(he)):W.forEach(he=>{f.value.includes(he)||f.value.push(he)})}function ea(s){const W=(Qe.value[s]||[]).map(he=>he.id);W.every(he=>f.value.includes(he))?f.value=f.value.filter(he=>!W.includes(he)):W.forEach(he=>{f.value.includes(he)||f.value.push(he)})}function Sa(s){const r=F.value.indexOf(s);r>=0?F.value.splice(r,1):F.value.push(s)}function ga(s){const W=(tt.value[s]||[]).map(he=>he.id);W.every(he=>f.value.includes(he))?f.value=f.value.filter(he=>!W.includes(he)):W.forEach(he=>{f.value.includes(he)||f.value.push(he)})}const Ot={},Qt={};function ua(s,r,W){if(!s||(W&&(Qt[r]={el:s,records:W}),Ot[r]===s))return;const we=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,he=()=>{Object.keys(Ot).forEach(Ae=>{if(Ot[Ae]&&Ot[Ae]!==s){try{Ot[Ae].dispose()}catch{}delete Ot[Ae]}});const ot=[...W].sort((Ae,Mt)=>Ae.evaluate_time.localeCompare(Mt.evaluate_time)),Xe=ot.map(Ae=>(Ae.evaluate_time||"").split("T")[0]),nt=ot.map(Ae=>{var Mt;return((Mt=Ae.result)==null?void 0:Mt.total_score)??null}),$t=ot.map(Ae=>{var Mt;return((Mt=Ae.result)==null?void 0:Mt.level)??""}),Ct={primary:T("--qc-primary-600")||"#b8922a",textPrimary:T("--text-primary")||"#1f2937",textSecondary:T("--text-secondary")||"#6b7280",border:T("--border-light")||"#e5e7eb",up:T("--color-success")||"#67c23a",down:T("--color-danger")||"#f56c6c"},ia=[];for(let Ae=1;Ae<nt.length;Ae++)nt[Ae]!=null&&nt[Ae-1]!=null&&Math.abs(nt[Ae]-nt[Ae-1])>=15&&ia.push({name:"大幅变化",coord:[Xe[Ae],nt[Ae]],value:(nt[Ae]-nt[Ae-1]>0?"↑":"↓")+Math.abs(nt[Ae]-nt[Ae-1]),symbol:"pin",symbolSize:32,itemStyle:{color:nt[Ae]-nt[Ae-1]>0?Ct.up:Ct.down}});const Gt=echarts.init(s);Gt.setOption({tooltip:{trigger:"axis",backgroundColor:T("--bg-card")||"#ffffff",borderColor:Ct.border,textStyle:{color:Ct.textPrimary},formatter:function(Ae){var ha;const Mt=(ha=Ae[0])==null?void 0:ha.dataIndex,Yt=Mt!=null?$t[Mt]:"";return Xe[Mt]+"<br/>得分: "+nt[Mt]+(Yt?" ("+Yt+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Xe,axisLabel:{fontSize:10,rotate:30,color:Ct.textSecondary},axisLine:{lineStyle:{color:Ct.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Ct.textSecondary},splitLine:{lineStyle:{color:Ct.border}}},series:[{data:nt,type:"line",smooth:!0,lineStyle:{color:Ct.primary,width:2},itemStyle:{color:Ct.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:T("--primary-rgb")?"rgba("+T("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:T("--primary-rgb")?"rgba("+T("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:ia.length>0?{data:ia}:void 0}]}),Ot[r]=Gt};we?we().then(he).catch(()=>{}):he()}function Ca(){Object.keys(Qt).forEach(s=>{const r=Qt[s];if(!(!r||!r.el)){if(Ot[s]){try{Ot[s].dispose()}catch{}delete Ot[s]}ua(r.el,s,r.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Ca));async function qa(s){V.value=s,o.value=!1,x();try{const r=await fetch(`/api/calendar/stock/${s.stock_code}?date=${b.value}`);R.value=await r.json()}catch{R.value={stock:s.stock_code,name:s.stock_name||s.stock_code,total_days:0,history:[]}}c.value=!0,m.value="ai"}async function Ea(){if(!te.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const s=te.value.split(/[,，\s]+/).filter(Xe=>Xe.trim());if(s.length===0)return;N.value=!0,P.value=s.length,L.value=0,z.value="",X.value={},J.value={},de.value={},s.forEach(Xe=>{X.value[Xe]="pending",J.value[Xe]=null});const r={"Content-Type":"application/json"};let W=0,we=0,he=!1;try{const Xe=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:r,body:JSON.stringify({stock_codes:s})});if(Xe.ok&&Xe.body){he=!0;const nt=Xe.body.getReader(),$t=new TextDecoder("utf-8");let Ct="",ia=!1;for(;!ia;){const{value:Gt,done:Ae}=await nt.read();ia=Ae,Ct+=$t.decode(Gt||new Uint8Array,{stream:!ia});let Mt;for(;(Mt=Ct.indexOf(`

`))>=0;){const Yt=Ct.slice(0,Mt);Ct=Ct.slice(Mt+2);const ha=Yt.split(`
`).find(Pa=>Pa.startsWith("data: "));if(!ha)continue;let xt;try{xt=JSON.parse(ha.slice(6))}catch{continue}xt.type==="start"?xt.total&&(P.value=xt.total):xt.type==="item"?(L.value++,z.value=xt.stock_code,xt.success?(X.value[xt.stock_code]="success",J.value[xt.stock_code]=xt,W++):(X.value[xt.stock_code]="error",de.value[xt.stock_code]=xt.error||"评估失败",we++)):xt.type==="done"&&(typeof xt.success=="number"&&(W=xt.success),typeof xt.fail=="number"&&(we=xt.fail))}}if(Ct.trim()){const Gt=Ct.split(`
`).find(Ae=>Ae.startsWith("data: "));if(Gt)try{const Ae=JSON.parse(Gt.slice(6));Ae.type==="item"?(L.value++,z.value=Ae.stock_code,Ae.success?(X.value[Ae.stock_code]="success",J.value[Ae.stock_code]=Ae,W++):(X.value[Ae.stock_code]="error",de.value[Ae.stock_code]=Ae.error||"评估失败",we++)):Ae.type==="done"&&(typeof Ae.success=="number"&&(W=Ae.success),typeof Ae.fail=="number"&&(we=Ae.fail))}catch{}}}}catch{he=!1}if(!he){W=0,we=0,L.value=0;for(const Xe of s){z.value=Xe,X.value[Xe]="running";try{const $t=await(await fetch("/api/ai/evaluate",{method:"POST",headers:r,body:JSON.stringify({stock_code:Xe.trim(),stock_name:Xe.trim()})})).json();$t.success?(X.value[Xe]="success",J.value[Xe]=$t.data,W++):(X.value[Xe]="error",de.value[Xe]=$t.message&&$t.message!=="success"?$t.message:"评估失败",we++)}catch(nt){X.value[Xe]="error",de.value[Xe]="网络错误: "+(nt&&nt.message?nt.message:nt),we++}L.value++}}z.value="",await xe();const ot=s.length;setTimeout(()=>{we===0?ElementPlus.ElMessage.success(`评估完成 成功 ${W}/${ot}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${W}/${ot} · 失败 ${we}`),N.value=!1},500)}return{quickEvalStock:d,evalStrategy:S,watchlistSort:u,watchlist:j,watchlistCodes:ae,sortedWatchlist:C,getWatchlistScore:h,getLatestScore:Z,addSearchResult:pe,evaluatedCodes:ge,klineLoadedCodes:Me,markKlineLoaded:je,watchlistSearch:qe,watchlistResults:ke,watchlistSearching:le,dataRefreshConfig:be,dataRefreshReloading:Te,dataRefreshSaving:ie,aiHistoryLoading:Y,aiHistoryError:Q,aiHistoryTotal:kt,aiHistoryLoadingMore:E,hasMoreAiHistory:re,loadMoreAiHistory:De,watchlistLoading:It,doAiEvaluate:zt,loadAiHistory:xe,deleteSingleHistory:Ne,toggleSelectHistory:Be,clearSelection:K,clearWatchlistSelection:ne,batchReevaluateHistory:He,batchAddToWatchlist:Je,batchAddToPortfolio:Ue,batchRemoveWatchlist:yt,toggleSelectWatchlist:At,selectAllHistory:Et,selectAllWatchlist:jt,deleteSelectedHistory:it,loadAutoEvaluateConfig:bt,saveAutoEvaluateConfig:et,loadWatchlist:ta,addToWatchlist:Bt,removeFromWatchlist:dt,clearWatchlist:Nt,toggleWatchlist:_t,showStockKline:pa,preloadingKline:Xt,preloadWatchlistKline:fa,watchlistEvaluate:Zt,batchEvaluateWatchlist:aa,batchEvaluateSelected:Kt,searchStockForWatchlist:sa,loadDataRefreshConfig:Vt,saveDataRefreshConfig:da,triggerDataReload:O,triggerDataPull:Oe,dataPullRunning:fe,groupedByDate:Ce,aiHistoryByStock:tt,groupedByMonth:Qe,aiHistoryStockCount:ft,scoreDistribution:Wt,quickEvaluate:Jt,toggleDateExpand:la,toggleSelectDate:Ut,toggleSelectMonth:ea,toggleStockExpand:Sa,toggleSelectStock:ga,registerTrendChart:ua,viewAiResult:qa,doBatchEvaluate:Ea,realtimeQuotes:Ze,realtimeDegraded:We,realtimeWsState:st,connectRealtimeQuotes:Tt,disconnectRealtimeQuotes:ht,quoteWarningFor:ct,realtimeQuoteColor:at,realtimePriceText:Ge,realtimePctText:pt,realtimeRatioText:St,REALTIME_DEGRADED_TEXT:ue,REALTIME_FALLBACK_TEXT:Ee}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:p}=Vue,t=e([]),y=e(null),b=e([]),R=e(!1),m=e(!1),c=e(!1),g=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=e(!1),q=e(!1),i=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),D=e(!1),k=e("positions"),x=e(30),M=e(!1),w=e(""),n=e(!1),l=e({dates:[],equity:[],values:[]}),v=p(()=>t.value.length),V=e("metrics"),A=e(!1),G=e(""),ee=e(!1),te=e({metrics:null,rules:[],rebalance:null}),N=p(function(){const u=te.value.metrics;if(!u)return[];const j=function(Y){return Y==null?"--":Number(Y).toFixed(2)+"%"},ae=function(Y){return Y==null?"--":Number(Y).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:j(u.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:j(u.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:j(u.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:j(u.cvar)},{key:"max_drawdown",label:"最大回撤",value:j(u.max_drawdown)},{key:"annual_return",label:"年化收益",value:j(u.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ae(u.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ae(u.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ae(u.calmar_ratio)},{key:"beta",label:"Beta",value:ae(u.beta)}]});async function P(){A.value=!0;try{const u=await(await fetch("/api/portfolio/risk?days=60")).json(),j=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ae=u&&u.success?u.risk:null,Y=j&&j.success?j.rules||[]:[],Q=j&&j.success?j.rebalance:null;te.value={metrics:ae,rules:Y,rebalance:Q},ee.value=!!(ae&&Object.keys(ae).length>0),G.value=u&&u.note||j&&j.note||""}catch(u){console.warn("[portfolio] 加载风险数据失败:",u),ee.value=!1,G.value="风险数据加载失败"}finally{A.value=!1}}async function L(){R.value=!0,m.value=!1;try{const j=await(await fetch("/api/portfolio")).json();j.success?(t.value=j.positions||[],y.value=j.summary||null):m.value=!0}catch(u){console.warn("[portfolio] 加载持仓失败:",u),m.value=!0}finally{R.value=!1}}async function z(){const u=g.value,j=(u.stock_code||"").trim();if(!j){ElementPlus.ElMessage.warning("请输入股票代码");return}const ae=Number(u.cost_price),Y=Number(u.quantity);if(!(ae>0)||!(Y>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const C=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:j,stock_name:(u.stock_name||"").trim(),cost_price:ae,quantity:Y})})).json();C.success?(ElementPlus.ElMessage.success(C.message||"持仓已更新"),c.value=!1,g.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await L(),B(x.value)):ElementPlus.ElMessage.error(C.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function X(u){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+u+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ae=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(u),{method:"DELETE"})).json();ae.success?(ElementPlus.ElMessage.success("已删除持仓"),await L(),H(),B(x.value)):ElementPlus.ElMessage.error(ae.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function J(u,j){i.value={stock_code:u,stock_name:j||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},q.value=!0}async function de(){const u=i.value;if(!u.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const j=Number(u.price),ae=Number(u.quantity);if(!(j>0)||!(ae>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}D.value=!0;try{const Q=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:u.stock_code,stock_name:u.stock_name||"",action:u.action,price:j,quantity:ae,trade_date:u.trade_date||"",note:(u.note||"").trim()})})).json();Q.success?(ElementPlus.ElMessage.success(Q.message||"调仓已记录"),q.value=!1,await L(),await H(),B(x.value)):ElementPlus.ElMessage.error(Q.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{D.value=!1}}async function H(){try{const j=await(await fetch("/api/portfolio/trades")).json();j.success&&(b.value=j.trades||[])}catch(u){console.warn("[portfolio] 加载调仓记录失败:",u)}}const F=u=>(getComputedStyle(document.documentElement).getPropertyValue(u)||"").trim();function I(u){if(!u||!u.length)return[];let j=u[0]||0;const ae=[];for(let Y=0;Y<u.length;Y++){const Q=u[Y]||0;Q>j&&(j=Q),ae.push(j>0?Math.round((Q-j)/j*1e3)/10:0)}return ae}function f(){const u={primary:F("--qc-primary-600")||"#b8922a",textPrimary:F("--text-primary")||"#1f2937",textSecondary:F("--text-secondary")||"#6b7280",border:F("--border-light")||"#e5e7eb",up:F("--color-rise")||"#E63946",down:F("--color-fall")||"#2E7D32"},j=l.value;return{tooltip:{trigger:"axis",backgroundColor:F("--bg-card")||"#ffffff",borderColor:u.border,textStyle:{color:u.textPrimary},formatter:function(ae){const Y=ae[0]?ae[0].dataIndex:-1,Q=j.dates[Y]||"",C=j.equity[Y],h=j.values[Y];let Z=Q||"";return C!=null&&(Z+="<br/>组合净值: "+C),h!=null&&(Z+="<br/>组合市值: "+h),Z}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:j.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:u.textSecondary},axisLine:{lineStyle:{color:u.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:u.textSecondary},splitLine:{lineStyle:{color:u.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:u.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:j.equity,smooth:!0,showSymbol:!1,lineStyle:{color:u.primary,width:2},itemStyle:{color:u.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:F("--primary-rgb")?"rgba("+F("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:F("--primary-rgb")?"rgba("+F("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:I(j.equity),smooth:!0,showSymbol:!1,lineStyle:{color:u.down,width:1.5},itemStyle:{color:u.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function _(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function se(u,j,ae){l.value={dates:u||[],equity:j||[],values:ae||[]},n.value=!!u&&u.length>0,n.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",f,{key:"portfolio-equity"}):_()}async function B(u){M.value=!0,w.value="";const j=Number(u)||x.value||30;x.value=j;try{const Y=await(await fetch("/api/portfolio/equity_curve?days="+j)).json();Y.success?(w.value=Y.note||"",se(Y.dates||[],Y.equity||[],Y.values||[])):(w.value="数据暂不可用",_())}catch(ae){console.warn("[portfolio] 加载收益曲线失败:",ae),w.value="数据暂不可用",_()}finally{M.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function T(u,j){if(u==null||u===""||isNaN(Number(u)))return"--";const ae=Number(u),Y=j??2;return(ae>=0?"+":"")+ae.toFixed(Y)}function d(u,j){if(u==null||u===""||isNaN(Number(u)))return"--";const ae=Number(u),Y=j??2;return(ae>=0?"+":"")+ae.toFixed(Y)+"%"}function S(u){if(u==null||u===""||isNaN(Number(u)))return"";const j=Number(u);return j>0?"portfolio-up":j<0?"portfolio-down":""}return{positions:t,summary:y,trades:b,loading:R,loadError:m,showAddForm:c,addForm:g,addSaving:o,tradeFormVisible:q,tradeForm:i,tradeSaving:D,portfolioTab:k,equityDays:x,equityLoading:M,equityNote:w,equityHasData:n,portfolioCount:v,loadPortfolio:L,addPosition:z,removePosition:X,openTradeForm:J,submitTrade:de,loadTrades:H,loadEquity:B,fmtSigned:T,fmtSignedPct:d,signClass:S,riskTab:V,riskLoading:A,riskNote:G,riskHasData:ee,riskData:te,riskMetricList:N,loadRisk:P}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(c,g){var o=Number(c);return isFinite(o)?o:typeof g=="number"?g:0}function e(c){var g=Array.isArray(c)?c:[];if(g.length<2)return null;for(var o=-1/0,q=0,i=0,D=0,k=0,x=0;x<g.length;x++){var M=a(g[x].equity!=null?g[x].equity:g[x].value);M>o&&(o=M,q=x);var w=o>0?(o-M)/o*100:0;w>i&&(i=w,D=q,k=x)}function n(l){return g[l]&&g[l].date?g[l].date:""}return{maxDrawdown:Math.round(i*100)/100,peakIndex:D,troughIndex:k,peakDate:n(D),troughDate:n(k)}}function p(c){for(var g=c||{},o={},q=Object.keys(g).sort(),i=0;i<q.length;i++){var D=q[i],k=String(D).slice(0,4);/^\d{4}$/.test(k)&&(o[k]=(o[k]||0)+a(g[D]))}var x=Object.keys(o).sort();return x.map(function(M){return{year:M,return:Math.round(o[M]*100)/100}})}function t(c){var g=Array.isArray(c)?c:[],o={};g.forEach(function(D){(D.points||[]).forEach(function(k){k&&k.date&&(o[k.date]=1)})});var q=Object.keys(o).sort(),i=g.map(function(D){var k={};return(D.points||[]).forEach(function(x){x&&x.date&&(k[x.date]=a(x.value!=null?x.value:x.equity))}),{name:D.name||"",data:q.map(function(x){return x in k?k[x]:null})}});return{dates:q,series:i}}function y(c){var g=c||{},o=function(i){return a(i)},q=function(i,D){var k=o(i);return isFinite(k)?k.toFixed(D):"--"};return[{key:"total_return",label:"总收益",value:q(g.total_return,2),suffix:"%",dir:o(g.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:q(g.annual_return,2),suffix:"%",dir:o(g.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:q(g.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:q(g.sharpe_ratio,2),suffix:"",dir:o(g.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:q(g.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:q(g.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(g.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:q(g.volatility,2),suffix:"%",dir:""}]}function b(c){var g=c==null?"":String(c);return/[",\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}function R(c){var g=c||{},o=[];o.push("回测指标"),o.push("指标,数值"),(g.metrics||[]).forEach(function(n){o.push(b(n.label)+","+b((n.value||"")+(n.suffix||"")))}),o.push(""),o.push("净值曲线");var q=["日期"].concat((g.series||[]).map(function(n){return n.name}));o.push(q.map(b).join(","));for(var i=g.dates||[],D=g.series||[],k=0;k<i.length;k++){for(var x=[i[k]],M=0;M<D.length;M++){var w=D[M].data&&D[M].data[k];x.push(w??"")}o.push(x.map(b).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(g.trades||[]).forEach(function(n){o.push(b(n.date)+","+b(n.stock)+","+b(n.action)+","+b(n.reason))}),o.join(`
`)}function m(c){return c==="buy"?"买入":c==="sell"?"卖出":c||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:p,buildNavSeries:t,buildMetrics:y,buildBacktestCsv:R,tradeActionText:m}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:p}=Vue,t=window.QuantBacktest||{},y=a||{},b=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],m=(Array.isArray(y.backtestStrategies)&&y.backtestStrategies.length?y.backtestStrategies:b).map(F=>({id:F.id,name:F.name})),c=e(m.length?[m[0].id]:[]),g=e(M()),o=e(1e5),q=e(3e-4),i=e(!1),D=e(!1),k=e(null),x=e("");function M(){const F=new Date,I=new Date;I.setFullYear(I.getFullYear()-1);const f=_=>_.getFullYear()+"-"+String(_.getMonth()+1).padStart(2,"0")+"-"+String(_.getDate()).padStart(2,"0");return[f(I),f(F)]}function w(F){const I=c.value.indexOf(F);I>=0?c.value.length>1&&c.value.splice(I,1):c.value.push(F)}function n(F){const I=m.find(f=>f.id===F);return I?I.name:F}function l(F){const I=F.summary||F;return{strategy_id:I.strategy_id,start_date:I.start_date,end_date:I.end_date,total_days:I.total_days,total_return:I.total_return,annual_return:I.annual_return,max_drawdown:I.max_drawdown,volatility:I.volatility,sharpe_ratio:I.sharpe_ratio,sortino_ratio:I.sortino_ratio,win_rate:I.win_rate,profit_loss_ratio:I.profit_loss_ratio,avg_positions:I.avg_positions!=null?I.avg_positions:I.avg_positions_per_day,total_trades:I.total_trades,turnover_rate:I.turnover_rate,success:I.success!==!1,message:I.message||"",insample_total_return:I.insample_total_return!=null?I.insample_total_return:null,outsample_total_return:I.outsample_total_return!=null?I.outsample_total_return:null,out_sample_ratio:I.out_sample_ratio!=null?I.out_sample_ratio:.2,overfit_warning:!!I.overfit_warning,overfit_reason:I.overfit_reason||""}}function v(F){return(Array.isArray(F)?F:[]).map(I=>({date:I.date,value:I.equity!=null?I.equity:I.value}))}function V(F,I){const f=l(I),_=v(I.equity_curve),se=I.monthly_returns||{},B=Array.isArray(I.trade_history)?I.trade_history:[],T={id:F,name:n(F),summary:f,equityCurve:_,monthlyReturns:se,trades:B};let d=null;if(i.value){const S=Number(o.value)||1e5;d={name:"现金基准",points:_.map(u=>({date:u.date,value:S}))}}return{success:!0,mode:"single",strategies:[T],primary:T,benchmark:d,period:(f.start_date||"")+" ~ "+(f.end_date||"")}}function A(F,I){const f=I.strategy_results||{},_=F.map(T=>{const d=f[T];if(!d)return null;const S=l(d);return{id:T,name:n(T),summary:S,equityCurve:v(d.equity_curve),monthlyReturns:d.monthly_returns||{},trades:Array.isArray(d.trade_history)?d.trade_history:[]}}).filter(T=>T&&T.summary.success!==!1),se=_.length?_[0]:null;let B=null;return i.value&&(B={name:"等权组合基准",points:v(I.portfolio_equity)}),{success:_.length>0,mode:"multi",strategies:_,primary:se,benchmark:B,period:se?se.summary.start_date+" ~ "+se.summary.end_date:""}}const G=p(()=>{const F=k.value;return!F||!F.primary?[]:t.buildMetrics?t.buildMetrics(F.primary.summary):[]}),ee=p(()=>{const F=k.value;return!F||!F.primary||!F.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(F.primary.monthlyReturns):[]}),te=p(()=>{const F=k.value;return!F||!F.primary?[]:(F.primary.trades||[]).slice().sort((I,f)=>String(f.date||"").localeCompare(String(I.date||"")))}),N=p(()=>{const F=k.value;return!F||!F.strategies||F.strategies.length<2?[]:F.strategies.map(I=>({name:I.name,metrics:t.buildMetrics?t.buildMetrics(I.summary):[]}))}),P=p(()=>{const F=k.value;return!F||!F.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(F.primary.equityCurve):null});async function L(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const I=c.value;if(!I.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const f=g.value,_={start_date:f&&f[0]||void 0,end_date:f&&f[1]||void 0},se={"Content-Type":"application/json"};D.value=!0,k.value=null,x.value="";try{if(I.length===1){const B=Object.assign({},_,{initial_capital:Number(o.value)||1e5,commission_rate:Number(q.value)||3e-4}),T=await fetch("/api/backtest/"+encodeURIComponent(I[0]),{method:"POST",headers:se,body:JSON.stringify(B)});if(!T.ok){const S=await T.json().catch(()=>({}));throw new Error(S.detail||"回测失败")}const d=await T.json();if(!d.success)throw new Error(d.message||"回测失败");k.value=V(I[0],d)}else{const B=await fetch("/api/backtest/multi",{method:"POST",headers:se,body:JSON.stringify(Object.assign({},_,{strategy_ids:I}))});if(!B.ok){const d=await B.json().catch(()=>({}));throw new Error(d.detail||"回测失败")}const T=await B.json();if(!T.success)throw new Error(T.message||"多策略回测失败");if(k.value=A(I,T.data||{}),!k.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(B){x.value=B&&B.message?B.message:"回测失败",ElementPlus.ElMessage.error(x.value)}finally{D.value=!1}}function z(){const F=k.value,I={dates:[],series:[]};if(!F)return I;const f=F.strategies.map(se=>({name:se.name,points:se.equityCurve}));F.benchmark&&F.benchmark.points&&F.benchmark.points.length&&f.push({name:F.benchmark.name,points:F.benchmark.points});const _=t.buildNavSeries?t.buildNavSeries(f):I;return X(_,F)}function X(F,I){const f=j=>(getComputedStyle(document.documentElement).getPropertyValue(j)||"").trim(),_={primary:f("--qc-primary-600")||"#b8922a",success:f("--color-success")||"#4CAF50",accent:f("--color-accent")||"#F59E0B",info:f("--color-info")||"#1976d2",ai:f("--color-ai")||"#6366f1",textPrimary:f("--text-primary")||"#1f2937",textSecondary:f("--text-secondary")||"#6b7280",border:f("--border-light")||"#e5e7eb",up:f("--color-rise")||"#E63946",down:f("--color-fall")||"#2E7D32",bg:f("--bg-card")||"#ffffff"},se=[_.primary,_.success,_.accent,_.info,_.ai],T=_.bg.length===7&&parseInt(_.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",d=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(I.primary?I.primary.equityCurve:[]):null,S=d&&d.peakDate&&d.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:_.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+d.maxDrawdown+"%",xAxis:d.peakDate,itemStyle:{color:_.down}},{xAxis:d.troughDate}]]}:void 0,u=F.series.map((j,ae)=>{const Y=I.benchmark&&j.name===I.benchmark.name,Q=se[ae%se.length];return{name:j.name,type:"line",data:j.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:Y?2:2.4,type:Y?"dashed":"solid",color:Q},itemStyle:{color:Q},emphasis:{focus:"series"},...ae===0&&S?{markArea:S}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:T,borderColor:_.border,textStyle:{color:_.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:_.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:F.dates,boundaryGap:!1,axisLine:{lineStyle:{color:_.border}},axisLabel:{color:_.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:_.textSecondary,fontSize:11},splitLine:{lineStyle:{color:_.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:_.border,textStyle:{color:_.textSecondary,fontSize:10}}],series:u}}function J(F){if(!F){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",z,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function de(){const F=k.value;if(!F||!F.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const I=F.strategies.map(u=>({name:u.name,points:u.equityCurve}));F.benchmark&&I.push({name:F.benchmark.name,points:F.benchmark.points});const f=t.buildNavSeries?t.buildNavSeries(I):{dates:[],series:[]},_=t.tradeActionText||(u=>u),se=te.value.map(u=>({date:u.date,stock:u.stock,action:_(u.action),reason:u.reason})),B=t.buildBacktestCsv?t.buildBacktestCsv({metrics:G.value,dates:f.dates,series:f.series,trades:se}):"",T=new Blob(["\uFEFF"+B],{type:"text/csv;charset=utf-8"}),d=URL.createObjectURL(T),S=document.createElement("a");S.href=d,S.download="backtest-"+F.strategies.map(u=>u.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",S.click(),URL.revokeObjectURL(d),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function H(F,I){return F==null||F===""||isNaN(Number(F))?"--":Number(F).toFixed(I??2)}return{btStrategyOptions:m,btSelectedStrategies:c,toggleBtStrategy:w,btDateRange:g,btCapital:o,btCommissionRate:q,btIncludeBenchmark:i,btRunning:D,btResult:k,btError:x,btMetrics:G,btAnnualReturns:ee,btTrades:te,btStrategyMetricsRows:N,btDrawdownRegion:P,runBacktestWorkbench:L,exportBacktestCSV:de,registerBacktestNavChart:J,btFmtNum:H}}}})();(function(){const{ref:a,computed:e,watch:p,onUnmounted:t}=Vue,y=g=>(getComputedStyle(document.documentElement).getPropertyValue(g)||"").trim(),b=72,R={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},m={stock:"📈 股票",bond:"📜 债券",commodity:"🛢 大宗商品",cash:"💰 现金"},c={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const g=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"🌱",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),o=a({}),q=a(!1),i=a({}),D=a({cycles:[]}),k=a(!1),x=a({autoRefresh:!0,refreshInterval:300}),M=a(""),w=a(""),n=a(!1),l=a("");let v=null;const V={x:0,y:0},A=e(()=>{const C=o.value;return["recession","recovery","overheat","stagflation"].map(Z=>{const pe=C[Z]||{};return{key:Z,name:pe.name||Z,icon:pe.icon||"📊",color:pe.color||y("--text-tertiary")||"#888",bg:pe.bg_color||y("--bg-card")||"#f5f5f5",textColor:pe.color||y("--text-primary")||"#333",tagline:pe.allocation&&c[Z]||""}})}),G=e(()=>{var h,Z,pe,ge;const C=g.value.indicators||{};return[{key:"pmi",label:"PMI",value:(h=C.pmi)==null?void 0:h.toFixed(2),color:C.pmi>=50?y("--color-success")||"#43a047":y("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Z=C.gdp_growth)==null?void 0:Z.toFixed(2))+"%",color:y("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((pe=C.cpi)==null?void 0:pe.toFixed(2))+"%",color:C.cpi>1.2?y("--color-danger")||"#E53935":y("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ge=C.m2_growth)==null?void 0:ge.toFixed(2))+"%",color:y("--color-success")||"#43a047"}]}),ee=C=>{C=C||{};const h=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Z=()=>y("--color-success")||"#43a047",pe=()=>y("--color-danger")||"#E53935",ge=()=>y("--color-warning")||"#FF9800",Me={宽松:Z(),中位:ge(),偏低:pe(),高增长:Z(),承压:pe(),不利:pe()};return h.map(je=>{const qe=C[je.key]||{},ke=qe.score||0,le=Math.min(100,Math.max(5,(ke+2)*25)),be=ke>=.3?"#66BB6A":ke>=-.3?"#FFB74D":"#EF5350",Te=ke>=0?"#66BB6A":"#EF5350";return{key:je.key,label:je.label,scoreStr:ke.toFixed(2),level:qe.level||"—",barWidth:le,barColor:be,scoreColor:Te,color:Me[qe.level]||"#888888"}})},te=e(()=>ee(g.value.dimension_scores)),N=e(()=>ee(i.value._dimensions)),P=e(()=>{var h;const C=((h=g.value.confidence)==null?void 0:h.level)||"";return C==="高"?"#43a047":C==="中"?"#FF9800":C==="低"?"#E53935":"var(--text-secondary)"}),L=e(()=>{var pe,ge,Me,je;const C=o.value,h={recovery:0,overheat:1,stagflation:2,recession:3},Z={};for(const[qe,ke]of Object.entries(C))Z[qe]={name:ke.name,icon:ke.icon,color:ke.color,lightColor:ke.bg_color,duration:"~"+(((pe=ke.historical_stats)==null?void 0:pe.avg_duration_months)||18)+"个月",order:h[qe]||0,period:((Me=(ge=ke.case_studies)==null?void 0:ge[0])==null?void 0:Me.split("：")[0])||"",avgMonths:((je=ke.historical_stats)==null?void 0:je.avg_duration_months)||18};return Z}),z=e(()=>{var ke,le;const C=g.value.stage,Z={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[C]||{x:150,y:150},pe=g.value.dimension_scores||{},ge=((ke=pe.growth)==null?void 0:ke.score)||0,Me=((le=pe.inflation)==null?void 0:le.score)||0,je=Math.max(-30,Math.min(30,ge*15)),qe=Math.max(-30,Math.min(30,-Me*15));return{x:Z.x+je,y:Z.y+qe,prevX:V.x,prevY:V.y}}),X=e(()=>{var pe;const C=Math.min(100,((pe=g.value.timing)==null?void 0:pe.progress_percent)||0),h=g.value.color||"#4CAF50",Z=C>100?"linear-gradient(90deg, "+h+", #FF9800)":h;return{width:C+"%",background:Z}});function J(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[g.value.stage]||0}function de(){var C,h;return((h=(C=g.value)==null?void 0:C.timing)==null?void 0:h.progress_percent)||0}function H(){var C,h;return((h=(C=g.value)==null?void 0:C.timing)==null?void 0:h.duration_months)||0}function F(){var C,h;return((h=(C=g.value)==null?void 0:C.timing)==null?void 0:h.avg_duration_months)||18}function I(C){var ge,Me;const h=L.value,Z=((ge=h[g.value.stage])==null?void 0:ge.order)||0;return(((Me=h[C])==null?void 0:Me.order)||0)<Z}function f(C){return R[C]||C}function _(C){return m[C]||C}function se(C){const h=["#43a047","#f57c00","#1976d2","#757575"];return h[C-1]||h[3]}async function B(){try{const h=await(await fetch("/api/market/merrill-clock/stages")).json();h.success&&h.data&&(o.value=h.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function T(){k.value=!0;try{const h=await(await fetch("/api/market/merrill-clock/timeline")).json();if(h.success&&h.data){const Z=Array.isArray(h.data.cycles)?h.data.cycles.slice().reverse():[];D.value={cycles:Z}}}catch{console.warn("获取美林时钟时间轴失败")}finally{k.value=!1}}async function d(C){await u(C)}async function S(){var C,h;try{const pe=await(await fetch("/api/market/merrill-clock")).json(),ge=pe.stage||"recovery",Me=o.value[ge]||{};if(g.value={...Me,...pe,stage_cn:pe.stage_cn||Me.stage_cn||"",stage_name:pe.stage_name||Me.name||"",name:pe.name||Me.name||"复苏期"},M.value=new Date().toLocaleTimeString("zh-CN"),l.value&&l.value!==ge){const je=o.value,qe=((C=je[l.value])==null?void 0:C.name)||l.value,ke=((h=je[ge])==null?void 0:h.name)||ge;ElementPlus.ElMessage({message:"🔔 美林时钟阶段切换："+qe+" → "+ke,type:"warning",duration:6e3,showClose:!0})}l.value=ge}catch(Z){console.error("获取美林时钟失败:",Z);const pe=o.value.recovery||{};g.value={...pe,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function u(C){var Z;q.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",i.value=o.value[C]||o.value.recovery||{};const h=((Z=g.value)==null?void 0:Z.stage)===C;i.value._isCurrent=h,h&&g.value&&(i.value._nextPrediction=g.value.next_stage_prediction,i.value._confidence=g.value.confidence,i.value._stage=g.value.stage,i.value._dimensions=g.value.dimension_scores);try{const ge=await(await fetch("/api/market/merrill-clock/stage/"+C)).json();if(ge.success&&ge.data){const Me={...o.value[C],...ge.data};Me._is_current!==void 0&&(Me._isCurrent=Me._is_current),Me._current_timing&&(Me._currentTiming=Me._current_timing),Me._last_period&&(Me._lastPeriod=Me._last_period),i.value._nextPrediction&&(Me._nextPrediction=i.value._nextPrediction),i.value._confidence&&(Me._confidence=i.value._confidence),i.value._stage&&(Me._stage=i.value._stage),i.value._dimensions&&(Me._dimensions=i.value._dimensions),Object.assign(i.value,Me)}}catch(pe){console.warn("获取阶段详情失败:",pe)}}function j(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:x.value.autoRefresh,refreshInterval:x.value.refreshInterval})),x.value.autoRefresh?(clearInterval(v),v=setInterval(S,x.value.refreshInterval*1e3)):clearInterval(v),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ae(){n.value=!0,w.value="";try{const h=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();h.success?(w.value="重评估完成："+(h.stage_name||h.stage),await S(),ElementPlus.ElMessage.success("重评估完成")):(w.value=h.message||"重评估失败",ElementPlus.ElMessage.error(h.message||"重评估失败"))}catch{w.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{n.value=!1}}function Y(){const C=localStorage.getItem("merrill_clock_config");if(C)try{const h=JSON.parse(C);x.value={...x.value,...h}}catch{}x.value.autoRefresh&&(v=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),S()},x.value.refreshInterval*1e3))}function Q(){v&&clearInterval(v)}return t(()=>{Q()}),{merrillData:g,merrillStagesConfig:o,showMerrillDetail:q,merrillDetailData:i,merrillTimeline:D,timelineLoading:k,merrillClockConfig:x,merrillClockLastUpdated:M,merrillReevalResult:w,merrillReevalLoading:n,stages:A,indicatorList:G,dimensionScoreList:te,detailDimensionScoreList:N,confidenceColor:P,timelineStages:L,clockPosition:z,merrillProgressStyle:X,FULL_CYCLE_MONTHS:b,getStageAngle:J,getCycleProgress:de,getCurrentStageMonths:H,getStageTotalMonths:F,isStageCompleted:I,getCharLabel:f,getAssetName:_,getRankColor:se,fetchMerrillStages:B,fetchMerrillClock:S,loadMerrillTimeline:T,showTimelineStage:d,showStageDetail:u,saveMerrillClockConfig:j,doMerrillReevaluate:ae,startAutoRefresh:Y,stopAutoRefresh:Q}}})();(function(){function a(b){return getComputedStyle(document.documentElement).getPropertyValue(b).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const p=[];function t(b){typeof b=="function"&&p.push(b)}function y(){p.slice().forEach(function(b){try{b()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:t,refreshAllCharts:y,init(){return{getEChartsTheme:e,registerChart:t,refreshAllCharts:y}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const p=e("qcState");try{const b=localStorage.getItem("quant_sidebar_collapsed");b!==null&&p.sidebarCollapsed&&(p.sidebarCollapsed.value=b==="1")}catch{}if(!p)return{};const t=async b=>{if(window.__quantGoPage){await window.__quantGoPage(b.key,b.subPages[0]||"");return}p.currentPage.value=b.key,p.currentSubPage.value=b.subPages[0]||""},y=()=>{p.sidebarCollapsed.value=!p.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",p.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:p.menus,currentPage:p.currentPage,sidebarCollapsed:p.sidebarCollapsed,navigate:t,toggle:y,sanitizeHtml:p.sanitizeHtml,keyClick:p.keyClick,t:p.t}}}})();const ba={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,p={"layout-dashboard":dv,calendar:cv,bot:rv,"flask-conical":ov,zap:nv,settings:iv,"chevron-down":lv,"chevron-right":sv,"chevron-left":av,menu:tv,search:ev,bell:Zu,sun:Xu,moon:$u,user:Qu,"user-round":Ju,home:Yu,x:Gu,database:Uu,activity:Wu,clock:Ku,"bar-chart-3":Bu,shield:Hu,"hard-drive":Fu,"file-text":Vu,users:ju,cpu:Ou,"pie-chart":Nu,info:Iu,"log-out":Lu,palette:Au,languages:zu,refresh:Ru,download:Du,"external-link":Pu,command:Tu,sparkles:Mu,"trending-up":Eu,"trending-down":qu,"circle-dot":Cu,check:Su,"alert-triangle":xu,loader:_u,"arrow-left":ku,"arrow-right":wu,eye:bu,"eye-off":yu,lock:hu,"sliders-horizontal":gu,play:fu,history:pu,layers:mu,"line-chart":vu,target:uu,"search-check":du,star:cu,"message-circle":ru,"calendar-days":ou,"calendar-range":nu,"calendar-check":iu,brain:lu,lightbulb:su,"octagon-x":au,flag:tu,package:eu,"clipboard-list":Zd,pin:Xd,"radio-tower":$d,gauge:Qd,landmark:Jd,"candlestick-chart":Yd,wallet:Gd,"badge-check":Ud,key:Wd,factory:Kd,trophy:Bd,rocket:Hd,flame:Fd,"map-pin":Vd,"scroll-text":jd,"book-open":Od,dna:Nd,"bar-chart":Id,plus:Ld,"star-off":Ad,upload:zd,gem:Rd,"folder-open":Dd,link:Pd,save:Td,"trash-2":Md,pause:Ed,"help-circle":qd,"play-circle":Cd,pencil:Sd,folder:xd,code:_d},t=()=>p[e.name]||p["circle-dot"];return(y,b)=>(ce(),ra(cd(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},xa=(a,e)=>{const p=a.__vccOpts||a;for(const[t,y]of e)p[t]=y;return p},uv={name:"qc-sidebar",components:{AppIcon:ba},setup(){const a=_a("qcState");if(!a)return{};const e=lt(()=>a.menus&&a.menus.value||[]),p=lt(()=>a.currentPage&&a.currentPage.value||""),t=lt(()=>a.navMode&&a.navMode.value||"subnav"),y=lt({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:w=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=w)}}),b=Dt({}),R={research:"量化投研",platform:"平台管理"},m=["research","platform"],c=w=>p.value===w.key,g=(w,n)=>p.value===w.key&&a.currentSubPage&&a.currentSubPage.value===n,o=w=>Array.isArray(w.subPages)&&w.subPages.length>1,q=(w,n)=>a.subPageNames&&a.subPageNames[n]||n;function i(w){!o(w)||y.value||(b.value[w.key]=!b.value[w.key])}function D(){e.value.forEach(w=>{b.value[w.key]===void 0&&(b.value[w.key]=c(w))})}async function k(w,n){const l=n||w.subPages&&w.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(w.key,l):(a.currentPage.value=w.key,a.currentSubPage&&(a.currentSubPage.value=l)),a.navigateTo&&a.navigateTo(w.key,l)}function x(){y.value=!y.value;try{localStorage.setItem("sidebar_collapsed",y.value?"1":"0")}catch{}}function M(w){if(w.ctrlKey&&w.key.toLowerCase()==="b"&&(w.preventDefault(),x()),!w.ctrlKey&&!w.metaKey&&!w.altKey&&(w.key==="ArrowDown"||w.key==="ArrowUp")){const n=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),l=n.indexOf(document.activeElement);if(l>=0){w.preventDefault();const v=n[(l+(w.key==="ArrowDown"?1:n.length-1))%n.length];v&&v.focus()}}}return Na(()=>{D(),document.addEventListener("keydown",M)}),ts(()=>document.removeEventListener("keydown",M)),{state:a,menus:e,currentPage:p,navMode:t,sidebarCollapsed:y,expandedMenus:b,GROUP_LABELS:R,GROUPS:m,isActive:c,isChildActive:g,hasChildren:o,subLabel:q,toggleSubmenu:i,navigate:k,toggleCollapse:x}}},vv={class:"qc-sidebar-logo"},mv={key:0,class:"qc-logo-text"},pv={class:"qc-sidebar-nav"},fv={key:0,class:"qc-nav-group"},gv={key:0,class:"qc-nav-group-label"},hv=["href","aria-current","onClick"],yv={key:0,class:"qc-sidebar-label"},bv={key:1,class:"qc-nav-badge"},wv=["aria-expanded","aria-controls","onClick"],kv=["id"],_v=["href","aria-current","onClick"],xv={class:"qc-sidebar-child-label"},Sv={class:"qc-sidebar-footer"},Cv=["aria-expanded","aria-label","title"];function qv(a,e,p,t,y,b){const R=Ht("AppIcon"),m=Ht("el-tooltip");return ce(),me("nav",{class:vt(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Se("div",vv,[e[1]||(e[1]=dd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Fe("",!0):(ce(),me("span",mv,Ve(t.state.t("login.title")),1))]),Se("div",pv,[(ce(!0),me(rt,null,wt(t.GROUPS,c=>(ce(),me(rt,{key:c},[t.menus.some(g=>g.group===c)?(ce(),me("div",fv,[t.sidebarCollapsed?Fe("",!0):(ce(),me("span",gv,Ve(t.GROUP_LABELS[c]),1)),(ce(!0),me(rt,null,wt(t.menus.filter(g=>g.group===c),g=>(ce(),me(rt,{key:g.key},[Se("div",{class:vt(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(g),"is-child-open":t.navMode==="tree"&&t.expandedMenus[g.key]}])},[ut(m,{content:g.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:oa(()=>[Se("a",{class:vt(["qc-sidebar-link",{"is-active":t.isActive(g)}]),href:"#"+g.key,"aria-current":t.isActive(g)?"page":null,onClick:Rt(o=>t.navigate(g),["prevent"])},[ut(R,{name:g.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Fe("",!0):(ce(),me("span",yv,Ve(g.name),1)),!t.sidebarCollapsed&&g.badge?(ce(),me("span",bv,Ve(g.badge),1)):Fe("",!0)],10,hv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)?(ce(),me("button",{key:0,class:vt(["qc-sidebar-chevron",{"is-open":t.expandedMenus[g.key]}]),"aria-expanded":!!t.expandedMenus[g.key],"aria-controls":"submenu-"+g.key,"aria-label":"展开子菜单",onClick:o=>t.toggleSubmenu(g)},[ut(R,{name:"chevron-down",size:14})],10,wv)):Fe("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)&&t.expandedMenus[g.key]?(ce(),me("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+g.key},[(ce(!0),me(rt,null,wt(g.subPages,o=>(ce(),me("a",{key:o,class:vt(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(g,o)}]),href:"#"+g.key+"-"+o,"aria-current":t.isChildActive(g,o)?"page":null,onClick:Rt(q=>t.navigate(g,o),["prevent"])},[Se("span",xv,Ve(t.subLabel(g,o)),1)],10,_v))),128))],8,kv)):Fe("",!0)],64))),128))])):Fe("",!0)],64))),128))]),Se("div",Sv,[Se("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...c)=>t.toggleCollapse&&t.toggleCollapse(...c))},[ut(R,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,Cv)])],2)}const Ev=xa(uv,[["render",qv]]),Mv={name:"qc-header",components:{AppIcon:ba},setup(){const a=_a("qcState");if(!a)return{};const e=Dt(!1),p=lt(()=>a.currentUser&&a.currentUser.value||null),t=lt(()=>a.navMode&&a.navMode.value||"subnav"),y=lt(()=>{const C=a.currentPage&&a.currentPage.value,h=(a.menus&&a.menus.value||[]).find(Z=>Z.key===C);return!!(h&&h.subPages&&h.subPages.length)}),b=lt(()=>{const C=a.currentPage&&a.currentPage.value,h=a.currentPageName&&a.currentPageName.value;if(h)return h;const Z=(a.menus&&a.menus.value||[]).find(pe=>pe.key===C);return Z&&Z.name||C||""}),R=lt(()=>{const C=a.currentSubPage&&a.currentSubPage.value;return C&&a.subPageNames&&a.subPageNames[C]||C||""}),m=Dt(typeof window<"u"?window.innerWidth<768:!1);function c(){m.value=window.innerWidth<768}Na(()=>window.addEventListener("resize",c)),ts(()=>window.removeEventListener("resize",c));const g=Dt(!1),o=lt(()=>{const C=a.currentSubPage&&a.currentSubPage.value;return C&&a.subPageNames&&a.subPageNames[C]||C||""}),q=lt(()=>{const C=a.currentPage&&a.currentPage.value,h=(a.menus&&a.menus.value||[]).find(Z=>Z.key===C);return(h&&h.subPages||[]).map(Z=>({key:Z,label:a.subPageNames&&a.subPageNames[Z]||Z}))});function i(){g.value=!g.value}function D(){g.value=!1}function k(C){g.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,C)}const x=lt(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),M=Dt(!1),w=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],n=lt(()=>{const C=w.find(h=>h.value===t.value);return C&&C.label||t.value});function l(){M.value=!M.value}function v(){M.value=!1}function V(C){M.value=!1,a.setNavMode&&a.setNavMode(C)}const A=lt({get:()=>a.searchQuery&&a.searchQuery.value||"",set:C=>{a.searchQuery&&(a.searchQuery.value=C)}}),G=Dt(!1),ee=Dt([]),te=Dt(!1),N=Dt(!1);function P(){const C=localStorage.getItem("quant_token")||"";return C?{Authorization:"Bearer "+C,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function L(){te.value=!0,N.value=!1;try{const h=await(await fetch("/api/alerts/history?limit=8",{headers:P()})).json();h&&h.success?ee.value=h.history||[]:ee.value=[]}catch{N.value=!0,ee.value=[]}finally{te.value=!1}}function z(){G.value=!G.value,G.value&&L()}function X(){G.value=!1}function J(){G.value=!1,a.activateTab&&a.activateTab("system","notification")}const de=Dt(!1),H=a.themeHues||[45,220,0,140,270,320],F=lt(()=>a.themeHue&&a.themeHue.value||45),I=lt(()=>a.themeMode&&a.themeMode.value||"system");function f(C){return a.hueColor?a.hueColor(C):"hsl("+C+", 75%, 42%)"}function _(C){return a.hueName?a.hueName(C):String(C)}function se(){de.value=!de.value}function B(){de.value=!1}function T(C){a.changeThemeMode&&a.changeThemeMode(C)}function d(C){a.changeThemeHue&&a.changeThemeHue(C)}function S(){a.changeThemeMode&&a.changeThemeMode(x.value?"light":"dark")}function u(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function j(){e.value=!e.value}function ae(){e.value=!1}function Y(C){return()=>{ae(),C&&C()}}function Q(){ae(),a.handleLogout&&a.handleLogout()}return{state:a,showUserMenu:e,currentUser:p,isDark:x,searchQuery:A,navMode:t,crumbRoot:b,crumbSub:R,hasToptabs:y,toggleThemeQuick:S,toggleSidebar:u,openUserMenu:j,closeUserMenu:ae,menuItem:Y,handleLogout:Q,openBellMenu:G,notifItems:ee,notifLoading:te,notifError:N,toggleBell:z,closeBell:X,goNotificationCenter:J,openThemeMenu:de,themeHues:H,themeHue:F,themeMode:I,hueColor:f,hueName:_,toggleThemeMenu:se,closeThemeMenu:B,pickThemeMode:T,pickThemeHue:d,openNavModeMenu:M,NAV_MODES:w,navModeLabel:n,toggleNavModeMenu:l,closeNavModeMenu:v,pickNavMode:V,isMobile:m,openSubnavPicker:g,currentSubLabel:o,subnavOptions:q,toggleSubnavPicker:i,closeSubnavPicker:D,pickSubnav:k}}},Tv={class:"qc-header"},Pv={class:"qc-header-left"},Dv=["aria-label"],Rv={key:0,class:"qc-header-subnav"},zv=["aria-expanded"],Av={class:"qc-subnav-picker-label"},Lv={key:0,class:"qc-subnav-picker-menu",role:"menu"},Iv=["onClick"],Nv={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},Ov={class:"qc-crumb qc-crumb-root"},jv={class:"qc-crumb qc-crumb-sub"},Vv={key:1,class:"qc-crumb qc-crumb-root"},Fv={class:"qc-header-center"},Hv={key:0,class:"qc-search-sublabel"},Bv={class:"qc-header-right"},Kv={class:"qc-hdr-pop"},Wv=["aria-expanded"],Uv={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Gv={key:0,class:"qc-bell-state"},Yv={key:1,class:"qc-bell-state"},Jv={key:2,class:"qc-bell-state"},Qv={key:3,class:"qc-bell-list"},$v={class:"qc-bell-item-title"},Xv={class:"qc-bell-item-meta"},Zv={key:0},em={class:"qc-bell-item-time"},tm={class:"qc-hdr-pop"},am=["aria-expanded"],sm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},lm={class:"qc-theme-modes"},im=["onClick"],nm={class:"qc-theme-swatches"},om=["title","aria-label","onClick"],rm={key:0,class:"qc-theme-swatch-check"},cm={class:"qc-theme-custom-label"},dm={key:0,class:"qc-navmode-switch"},um=["aria-label","title","aria-expanded"],vm={key:0,class:"qc-navmode-menu",role:"menu"},mm=["onClick","onKeydown"],pm={class:"qc-navmode-item-main"},fm={class:"qc-user-menu"},gm=["aria-label","aria-expanded"],hm={key:0,class:"qc-user-dropdown",role:"menu"},ym={class:"qc-user-dropdown-header"},bm={class:"qc-user-dropdown-name"},wm={key:0,class:"qc-user-dropdown-chip"};function km(a,e,p,t,y,b){var q,i,D,k,x,M,w;const R=Ht("AppIcon"),m=Ht("qc-top-tabs"),c=Ht("el-autocomplete"),g=Ht("el-slider"),o=ud("click-outside");return ce(),me("header",Tv,[Se("div",Pv,[Se("button",{class:"qc-icon-btn","aria-label":(q=t.state.sidebarCollapsed)!=null&&q.value?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...n)=>t.toggleSidebar&&t.toggleSidebar(...n))},[ut(R,{name:"menu",size:20})],8,Dv),t.isMobile?Ta((ce(),me("div",Rv,[Se("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[1]||(e[1]=(...n)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...n))},[Se("span",Av,Ve(t.currentSubLabel||"二级"),1),ut(R,{name:"chevron-down",size:14})],8,zv),t.openSubnavPicker?(ce(),me("div",Lv,[(ce(!0),me(rt,null,wt(t.subnavOptions,n=>(ce(),me("div",{key:n.key,class:vt(["qc-subnav-picker-item",{"is-active":n.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:l=>t.pickSubnav(n.key)},Ve(n.label),11,Iv))),128))])):Fe("",!0)])),[[o,t.closeSubnavPicker]]):Fe("",!0),t.navMode==="tree"&&!t.isMobile?(ce(),me("div",Nv,[Se("span",Ov,Ve(t.crumbRoot),1),t.crumbSub?(ce(),me(rt,{key:0},[e[14]||(e[14]=Se("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Se("span",jv,Ve(t.crumbSub),1)],64)):Fe("",!0)])):Fe("",!0),t.navMode==="toptab"&&!t.isMobile?(ce(),me(rt,{key:2},[t.hasToptabs?(ce(),ra(m,{key:0})):(ce(),me("span",Vv,Ve(t.crumbRoot),1))],64)):Fe("",!0)]),Se("div",Fv,[ut(c,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[2]||(e[2]=n=>t.searchQuery=n),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:oa(()=>[ut(R,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:oa(()=>[...e[15]||(e[15]=[Se("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:oa(n=>{var l,v,V,A,G;return[Se("span",null,Ve((l=n==null?void 0:n.item)==null?void 0:l.icon)+" "+Ve(((v=n==null?void 0:n.item)==null?void 0:v.label)||((V=n==null?void 0:n.item)==null?void 0:V.name)),1),(A=n==null?void 0:n.item)!=null&&A.subLabel?(ce(),me("span",Hv,Ve((G=n==null?void 0:n.item)==null?void 0:G.subLabel),1)):Fe("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Se("div",Bv,[Ta((ce(),me("div",Kv,[Se("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[3]||(e[3]=(...n)=>t.toggleBell&&t.toggleBell(...n))},[ut(R,{name:"bell",size:20})],8,Wv),t.openBellMenu?(ce(),me("div",Uv,[e[16]||(e[16]=Se("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(ce(),me("div",Gv,"加载中...")):t.notifError?(ce(),me("div",Yv,"加载失败")):t.notifItems.length?(ce(),me("div",Qv,[(ce(!0),me(rt,null,wt(t.notifItems,(n,l)=>(ce(),me("div",{key:n.id||l,class:vt(["qc-bell-item",{"is-fail":n.ok===0}])},[Se("div",$v,Ve(n.title||n.event_type||"事件"),1),Se("div",Xv,[ya(Ve(n.channel||""),1),n.recipient?(ce(),me("span",Zv," · "+Ve(n.recipient),1)):Fe("",!0),Se("span",em,Ve(n.created_at||""),1)])],2))),128))])):(ce(),me("div",Jv,"暂无通知")),Se("button",{class:"qc-bell-footer",onClick:e[4]||(e[4]=(...n)=>t.goNotificationCenter&&t.goNotificationCenter(...n))},"前往通知中心 →")])):Fe("",!0)])),[[o,t.closeBell]]),Ta((ce(),me("div",tm,[Se("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[5]||(e[5]=(...n)=>t.toggleThemeMenu&&t.toggleThemeMenu(...n))},[ut(R,{name:"palette",size:20})],8,am),t.openThemeMenu?(ce(),me("div",sm,[e[17]||(e[17]=Se("div",{class:"qc-theme-section-label"},"外观模式",-1)),Se("div",lm,[(ce(),me(rt,null,wt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],n=>Se("button",{key:n.k,class:vt(["qc-theme-mode",{"is-active":t.themeMode===n.k}]),onClick:l=>t.pickThemeMode(n.k)},Ve(n.n),11,im)),64))]),e[18]||(e[18]=Se("div",{class:"qc-theme-section-label"},"主题色",-1)),Se("div",nm,[(ce(!0),me(rt,null,wt(t.themeHues,n=>(ce(),me("button",{key:n,class:vt(["qc-theme-swatch",{"is-active":t.themeHue===n}]),style:vd({background:t.hueColor(n)}),title:t.hueName(n),"aria-label":t.hueName(n),onClick:l=>t.pickThemeHue(n)},[t.themeHue===n?(ce(),me("span",rm,"✓")):Fe("",!0)],14,om))),128))]),ut(g,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Se("div",cm,"自定义 "+Ve(t.themeHue)+"°",1)])):Fe("",!0)])),[[o,t.closeThemeMenu]]),t.isMobile?Fe("",!0):Ta((ce(),me("div",dm,[Se("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[6]||(e[6]=(...n)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...n))},[ut(R,{name:"layers",size:20})],8,um),t.openNavModeMenu?(ce(),me("div",vm,[(ce(!0),me(rt,null,wt(t.NAV_MODES,n=>(ce(),me("div",{key:n.value,class:vt(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===n.value}]),role:"menuitem",tabindex:"0",onClick:l=>t.pickNavMode(n.value),onKeydown:[na(Rt(l=>t.pickNavMode(n.value),["prevent"]),["enter"]),na(Rt(l=>t.pickNavMode(n.value),["prevent"]),["space"])]},[Se("div",pm,[Se("span",null,Ve(n.label),1),t.navMode===n.value?(ce(),ra(R,{key:0,name:"check",size:14})):Fe("",!0)])],42,mm))),128))])):Fe("",!0)])),[[o,t.closeNavModeMenu]]),Ta((ce(),me("div",fm,[Se("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((i=t.currentUser)==null?void 0:i.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[7]||(e[7]=(...n)=>t.openUserMenu&&t.openUserMenu(...n))},Ve((((D=t.currentUser)==null?void 0:D.username)||"A").charAt(0).toUpperCase()),9,gm),t.showUserMenu?(ce(),me("div",hm,[Se("div",ym,[Se("span",bm,Ve((k=t.currentUser)==null?void 0:k.username),1),((x=t.currentUser)==null?void 0:x.role)==="guest"?(ce(),me("span",wm,"访客")):Fe("",!0)]),((M=t.currentUser)==null?void 0:M.role)==="admin"?(ce(),me("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[8]||(e[8]=n=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[9]||(e[9]=na(Rt(n=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[ut(R,{name:"settings",size:16}),e[19]||(e[19]=ya(" 重新运行初始化向导 ",-1))],32)):Fe("",!0),((w=t.currentUser)==null?void 0:w.role)!=="guest"?(ce(),me("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[10]||(e[10]=n=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[11]||(e[11]=na(Rt(n=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[ut(R,{name:"lock",size:16}),e[20]||(e[20]=ya(" 修改密码 ",-1))],32)):Fe("",!0),e[22]||(e[22]=Se("div",{class:"qc-user-dropdown-divider"},null,-1)),Se("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[12]||(e[12]=(...n)=>t.handleLogout&&t.handleLogout(...n)),onKeydown:e[13]||(e[13]=na(Rt((...n)=>t.handleLogout&&t.handleLogout(...n),["prevent"]),["enter"]))},[ut(R,{name:"log-out",size:16}),e[21]||(e[21]=ya(" 退出登录 ",-1))],32)])):Fe("",!0)])),[[o,t.closeUserMenu]])])])}const _m=xa(Mv,[["render",km]]),xm=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],Sm={name:"qc-subnav",components:{AppIcon:ba},setup(){const a=_a("qcState");if(!a)return{};const e=lt(()=>a.currentPage&&a.currentPage.value||""),p=lt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=lt(()=>a.navMode&&a.navMode.value||"subnav"),y=Dt({}),b=lt(()=>a.menus&&a.menus.value||[]),R=lt(()=>b.value.find(w=>w.key===e.value)||null),m=lt(()=>R.value&&R.value.subPages||[]),c=lt(()=>a.currentPageName&&a.currentPageName.value||e.value),g=w=>a.subPageNames&&a.subPageNames[w]||w,o=w=>p.value===w;function q(w){a.openTab?a.openTab(e.value,w):a.currentSubPage&&(a.currentSubPage.value=w);try{localStorage.setItem("quant_last_subpage",w)}catch{}}function i(w){a.openTab?a.openTab(e.value,w.key):a.currentSubPage&&(a.currentSubPage.value=w.key);try{localStorage.setItem("quant_last_subpage",w.key)}catch{}}function D(w){y.value[w]=!y.value[w]}const k={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}};return{state:a,currentPage:e,currentSubPage:p,navMode:t,subPages:m,currentMenu:R,collapsedGroups:y,pageTitle:c,subLabel:g,isSubActive:o,goSub:q,goSystemItem:i,toggleGroup:D,SYSTEM_GROUPS:xm,subIcon:(w,n)=>k[w]&&k[w][n]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},Cm={key:0,class:"qc-subnav-column","aria-label":"二级导航"},qm={class:"qc-subnav-column-header"},Em={class:"qc-subnav-current-label"},Mm={class:"qc-subnav-column-body"},Tm=["onClick"],Pm=["href","onClick"],Dm={class:"qc-subnav-group-label"},Rm=["href","onClick"],zm=["href","onClick"];function Am(a,e,p,t,y,b){const R=Ht("AppIcon");return t.navMode==="subnav"?(ce(),me("aside",Cm,[Se("div",qm,[Se("span",Em,Ve(t.pageTitle),1)]),Se("div",Mm,[t.currentPage==="system"?(ce(!0),me(rt,{key:0},wt(t.SYSTEM_GROUPS,m=>(ce(),me("div",{key:m.label,class:"qc-subnav-group"},[Se("div",{class:"qc-subnav-group-label",onClick:c=>t.toggleGroup(m.label)},[Se("span",null,Ve(m.label),1),ut(R,{name:"chevron-down",size:12,class:vt({"is-open":!t.collapsedGroups[m.label]})},null,8,["class"])],8,Tm),t.collapsedGroups[m.label]?Fe("",!0):(ce(!0),me(rt,{key:0},wt(m.items,c=>(ce(),me("a",{key:c.key,class:vt(["qc-subnav-item",{"is-active":t.isSubActive(c.key)}]),href:"#"+c.key,onClick:Rt(g=>t.goSystemItem(c),["prevent"])},[ut(R,{name:c.icon,size:16},null,8,["name"]),Se("span",null,Ve(c.label),1)],10,Pm))),128))]))),128)):t.currentPage==="shortterm"?(ce(!0),me(rt,{key:1},wt(t.SHORTTERM_GROUPS,m=>(ce(),me("div",{key:m.label,class:"qc-subnav-group"},[Se("div",Dm,[Se("span",null,Ve(m.label),1)]),(ce(!0),me(rt,null,wt(m.items,c=>(ce(),me("a",{key:c,class:vt(["qc-subnav-item",{"is-active":t.isSubActive(c)}]),href:"#"+t.currentPage+"/"+c,onClick:Rt(g=>t.goSub(c),["prevent"])},[ut(R,{name:t.subIcon(t.currentPage,c),size:16},null,8,["name"]),Se("span",null,Ve(t.subLabel(c)),1)],10,Rm))),128))]))),128)):(ce(!0),me(rt,{key:2},wt(t.subPages,m=>(ce(),me("a",{key:m,class:vt(["qc-subnav-item",{"is-active":t.isSubActive(m)}]),href:"#"+t.currentPage+"/"+m,onClick:Rt(c=>t.goSub(m),["prevent"])},[ut(R,{name:t.subIcon(t.currentPage,m),size:16},null,8,["name"]),Se("span",null,Ve(t.subLabel(m)),1)],10,zm))),128))])])):Fe("",!0)}const Lm=xa(Sm,[["render",Am]]),Im=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],Nm={name:"qc-mobile-nav",components:{AppIcon:ba},setup(){const a=_a("qcState");if(!a)return{};const e=Dt(!1),p=Dt(null),t=Dt({}),y=lt(()=>a.menus&&a.menus.value||[]),b=lt(()=>a.currentPage&&a.currentPage.value||""),R={research:"量化投研",platform:"平台管理"},m=["research","platform"];function c(n){return Array.isArray(n.subPages)&&n.subPages.length>0}function g(n){c(n)&&(t.value[n.key]=!t.value[n.key])}function o(n,l){return b.value===n.key&&a.currentSubPage&&a.currentSubPage.value===l}function q(n){return a.subPageNames&&a.subPageNames[n]||n}async function i(n){const l=y.value.find(V=>V.key===n.key),v=l&&l.subPages&&l.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(n.key,v):(a.currentPage.value=n.key,a.currentSubPage&&(a.currentSubPage.value=v)),a.navigateTo&&a.navigateTo(n.key,v)}function D(n,l){e.value=!1;const v=l||n.subPages&&n.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(n.key,v):(a.currentPage.value=n.key,a.currentSubPage&&(a.currentSubPage.value=v)),a.navigateTo&&a.navigateTo(n.key,v)}function k(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function x(){e.value=!1;const n=document.querySelector(".qc-header .qc-icon-btn");n&&n.focus()}function M(n){n.detail&&n.detail.open&&k()}function w(n){e.value&&n.key==="Escape"&&x()}return Na(()=>{window.addEventListener("qc:drawer",M),document.addEventListener("keydown",w)}),ts(()=>{window.removeEventListener("qc:drawer",M),document.removeEventListener("keydown",w)}),{state:a,TABS:Im,menus:y,currentPage:b,drawerOpen:e,drawerFocusRef:p,drawerExpanded:t,GROUP_LABELS:R,GROUPS:m,hasSub:c,toggleDrawerMenu:g,isDrawerSubActive:o,subLabel:q,goTab:i,goMenu:D,openDrawer:k,closeDrawer:x}}},Om={class:"qc-mobile-nav","aria-label":"移动端底部导航"},jm=["aria-current","onClick"],Vm={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Fm={class:"qc-drawer-header"},Hm={class:"qc-drawer-brand"},Bm={class:"qc-drawer-body"},Km={key:0},Wm={class:"qc-nav-group-label"},Um=["href","aria-current","onClick"],Gm={class:"qc-sidebar-label"},Ym=["aria-expanded","onClick"],Jm={key:0,class:"qc-drawer-children"},Qm=["href","onClick"],$m={class:"qc-drawer-footer"},Xm=["title"];function Zm(a,e,p,t,y,b){var m,c;const R=Ht("AppIcon");return ce(),me(rt,null,[Se("nav",Om,[(ce(!0),me(rt,null,wt(t.TABS,g=>(ce(),me("button",{key:g.key,class:vt(["qc-mobile-tab",{"is-active":t.currentPage===g.key}]),"aria-current":t.currentPage===g.key?"page":null,onClick:o=>t.goTab(g)},[ut(R,{name:g.icon,size:22},null,8,["name"]),Se("span",null,Ve(g.label),1)],10,jm))),128))]),(ce(),ra(md,{to:"body"},[t.drawerOpen?(ce(),me("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))})):Fe("",!0),t.drawerOpen?(ce(),me("div",Vm,[Se("div",Fm,[Se("div",Hm,[e[4]||(e[4]=Se("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Se("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Se("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Se("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Se("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Se("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Se("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Se("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Se("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Se("span",null,Ve(t.state.t("login.title")),1)]),Se("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))},[ut(R,{name:"x",size:18})])]),Se("div",Bm,[(ce(!0),me(rt,null,wt(t.GROUPS,g=>(ce(),me(rt,{key:g},[t.menus.some(o=>o.group===g)?(ce(),me("div",Km,[Se("div",Wm,Ve(t.GROUP_LABELS[g]),1),(ce(!0),me(rt,null,wt(t.menus.filter(o=>o.group===g),o=>(ce(),me("div",{key:o.key,class:"qc-drawer-menu"},[Se("div",{class:vt(["qc-drawer-menu-row",{"is-active":t.currentPage===o.key}])},[Se("a",{class:vt(["qc-sidebar-item",{"is-active":t.currentPage===o.key}]),href:"#"+o.key,"aria-current":t.currentPage===o.key?"page":null,onClick:Rt(q=>t.hasSub(o)?t.toggleDrawerMenu(o):t.goMenu(o),["prevent"])},[ut(R,{name:o.iconName||"",size:18},null,8,["name"]),Se("span",Gm,Ve(o.name),1)],10,Um),t.hasSub(o)?(ce(),me("button",{key:0,class:vt(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[o.key]}]),"aria-expanded":!!t.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:q=>t.toggleDrawerMenu(o)},[ut(R,{name:"chevron-down",size:14})],10,Ym)):Fe("",!0)],2),t.drawerExpanded[o.key]?(ce(),me("div",Jm,[(ce(!0),me(rt,null,wt(o.subPages,q=>(ce(),me("a",{key:q,class:vt(["qc-subnav-item",{"is-active":t.isDrawerSubActive(o,q)}]),href:"#"+o.key+"/"+q,onClick:Rt(i=>t.goMenu(o,q),["prevent"])},[Se("span",null,Ve(t.subLabel(q)),1)],10,Qm))),128))])):Fe("",!0)]))),128))])):Fe("",!0)],64))),128))]),Se("div",$m,[Se("button",{class:"qc-icon-btn",title:((m=t.state.currentTheme)==null?void 0:m.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=g=>{var o;return t.state.changeThemeMode&&t.state.changeThemeMode(((o=t.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[ut(R,{name:((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Xm),Se("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=g=>t.state.handleLogout&&t.state.handleLogout())},[ut(R,{name:"log-out",size:18})])])])):Fe("",!0)]))],64)}const ep=xa(Nm,[["render",Zm]]),tp={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:p}){const t=_a("qcState");function y(o){e("select",o)}function b(o){const q=o.strategy_names||o.strategies||[],i=q.slice(0,3),D=q.length>3?q.length-3:0,k=i.map(x=>({text:x,more:!1}));return D&&k.push({text:"+"+D,more:!0}),k}function R(o){const q=Number(o);return isFinite(q)?q.toFixed(2):"—"}function m(o){const q=Number(o);return isFinite(q)?(q>0?"+":"")+q.toFixed(2)+"%":"—"}function c(o){const q=Number(o.consensus_level);return isFinite(q)?Math.round(q*100):0}function g(o){const q=Number(o&&o.consensus_level);return isFinite(q)&&q>0}return{state:t,slots:p,select:y,displayTags:b,fmtPrice:R,fmtChange:m,pctOf:c,hasConsensus:g}}},ap={class:"qc-stock-list"},sp=["data-copy-code","aria-label","onClick","onKeydown"],lp={key:0,class:"qc-stock-rank"},ip={class:"qc-stock-info"},np={class:"qc-stock-code"},op={class:"qc-stock-code-num"},rp={key:0,class:"qc-stock-status is-new"},cp={key:1,class:"qc-stock-status is-out"},dp={class:"qc-stock-name"},up={key:0,class:"qc-stock-consensus"},vp={key:1,class:"qc-stock-tags"},mp={key:2,class:"qc-stock-badge"},pp={key:3,class:"qc-stock-data"},fp={class:"qc-stock-price"},gp={key:4,class:"qc-stock-extra"},hp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},yp=["data-copy-code","aria-label","onClick","onKeydown"],bp={key:0,class:"qc-stock-rank"},wp={class:"qc-stock-info"},kp={class:"qc-stock-code"},_p={class:"qc-stock-code-num"},xp={key:0,class:"qc-stock-status is-new"},Sp={key:1,class:"qc-stock-status is-out"},Cp={class:"qc-stock-name"},qp={key:0,class:"qc-stock-consensus"},Ep={key:1,class:"qc-stock-tags"},Mp={key:2,class:"qc-stock-badge"},Tp={key:3,class:"qc-stock-data"},Pp={class:"qc-stock-price"},Dp={key:4,class:"qc-stock-extra"},Rp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function zp(a,e,p,t,y,b){const R=Ht("qc-state-panel"),m=Ht("qc-virtual-list");return ce(),me("div",ap,[p.loading?(ce(),ra(R,{key:0,type:"loading"})):p.items.length?(ce(),me(rt,{key:2},[p.virtual?(ce(),ra(m,{key:0,items:p.items,"row-height":p.rowHeight},{default:oa(({item:c,index:g})=>[Se("div",{class:vt(["qc-stock-row",{"is-active":p.activeCode===c.code}]),"data-copy-code":p.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:o=>t.select(c),onKeydown:[na(Rt(o=>t.select(c),["prevent"]),["enter"]),na(Rt(o=>t.select(c),["prevent"]),["space"])]},[p.showRank?(ce(),me("div",lp,Ve(g+1),1)):Fe("",!0),Se("div",ip,[Se("div",np,[Se("span",op,Ve(c.code),1),c.status==="new"?(ce(),me("span",rp,Ve(p.statusText.new),1)):c.status==="out"?(ce(),me("span",cp,Ve(p.statusText.out),1)):Fe("",!0)]),Se("div",dp,[ya(Ve(c.name)+" ",1),ma(a.$slots,"name-suffix",{item:c,index:g})]),p.showConsensus&&t.hasConsensus(c)?(ce(),me("span",up,Ve(t.pctOf(c))+"% 共识",1)):Fe("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(ce(),me("div",vp,[(ce(!0),me(rt,null,wt(t.displayTags(c),o=>(ce(),me("span",{key:o.text,class:vt(["qc-stock-tag",{"is-more":o.more}])},Ve(o.text),3))),128))])):Fe("",!0),p.showConsensus?(ce(),me("span",mp,Ve(c.strategy_count||0)+" 策略",1)):Fe("",!0),p.showPrice&&c.price!=null?(ce(),me("div",pp,[Se("span",fp,Ve(t.fmtPrice(c.price)),1),Se("span",{class:vt(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Ve(t.fmtChange(c.change_pct)),3)])):Fe("",!0),t.slots.extra?(ce(),me("div",gp,[ma(a.$slots,"extra",{item:c,index:g})])):Fe("",!0),t.slots.actions?(ce(),me("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Rt(()=>{},["stop"]))},[ma(a.$slots,"actions",{item:c,index:g})])):Fe("",!0),t.slots.footer?(ce(),me("div",hp,[ma(a.$slots,"footer",{item:c,index:g})])):Fe("",!0)],42,sp)]),_:3},8,["items","row-height"])):(ce(!0),me(rt,{key:1},wt(p.items,(c,g)=>(ce(),me("div",{key:c.code,class:vt(["qc-stock-row",{"is-active":p.activeCode===c.code}]),"data-copy-code":p.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:o=>t.select(c),onKeydown:[na(Rt(o=>t.select(c),["prevent"]),["enter"]),na(Rt(o=>t.select(c),["prevent"]),["space"])]},[p.showRank?(ce(),me("div",bp,Ve(g+1),1)):Fe("",!0),Se("div",wp,[Se("div",kp,[Se("span",_p,Ve(c.code),1),c.status==="new"?(ce(),me("span",xp,Ve(p.statusText.new),1)):c.status==="out"?(ce(),me("span",Sp,Ve(p.statusText.out),1)):Fe("",!0)]),Se("div",Cp,[ya(Ve(c.name)+" ",1),ma(a.$slots,"name-suffix",{item:c,index:g})]),p.showConsensus&&t.hasConsensus(c)?(ce(),me("span",qp,Ve(t.pctOf(c))+"% 共识",1)):Fe("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(ce(),me("div",Ep,[(ce(!0),me(rt,null,wt(t.displayTags(c),o=>(ce(),me("span",{key:o.text,class:vt(["qc-stock-tag",{"is-more":o.more}])},Ve(o.text),3))),128))])):Fe("",!0),p.showConsensus?(ce(),me("span",Mp,Ve(c.strategy_count||0)+" 策略",1)):Fe("",!0),p.showPrice&&c.price!=null?(ce(),me("div",Tp,[Se("span",Pp,Ve(t.fmtPrice(c.price)),1),Se("span",{class:vt(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Ve(t.fmtChange(c.change_pct)),3)])):Fe("",!0),t.slots.extra?(ce(),me("div",Dp,[ma(a.$slots,"extra",{item:c,index:g})])):Fe("",!0),t.slots.actions?(ce(),me("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Rt(()=>{},["stop"]))},[ma(a.$slots,"actions",{item:c,index:g})])):Fe("",!0),t.slots.footer?(ce(),me("div",Rp,[ma(a.$slots,"footer",{item:c,index:g})])):Fe("",!0)],42,yp))),128))],64)):(ce(),ra(R,{key:1,type:"empty",title:p.emptyText},null,8,["title"]))])}const Ap=xa(tp,[["render",zp]]),Zs={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}},Lp=200,Ip={name:"qc-top-tabs",components:{AppIcon:ba},setup(){const a=_a("qcState");if(!a)return{};const e=lt(()=>a.currentPage&&a.currentPage.value||""),p=lt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=lt(()=>a.menus&&a.menus.value||[]),y=lt(()=>{const l=t.value.find(v=>v.key===e.value);return l&&l.subPages||[]}),b=lt(()=>y.value.map(l=>({key:l,label:a.subPageNames&&a.subPageNames[l]||l,icon:Zs[e.value]&&Zs[e.value][l]||"circle-dot"}))),R=Dt(null),m=Dt(!1),c=Dt(!1),g=Dt(!1);let o=null,q=null;function i(){const l=R.value;l&&(c.value=l.scrollLeft>2,g.value=l.scrollLeft<l.scrollWidth-l.clientWidth-2)}function D(){const l=R.value;l&&(m.value=l.scrollWidth>l.clientWidth+2,i())}function k(l){const v=R.value;v&&v.scrollBy({left:l*Lp,behavior:"smooth"})}function x(l){a.openTab?a.openTab(e.value,l):a.currentSubPage&&(a.currentSubPage.value=l)}function M(l){x(l),fd(()=>{const v=R.value;if(!v)return;const V=v.querySelector('[data-tab-key="'+l+'"]');V&&V.scrollIntoView({block:"nearest",inline:"nearest"})})}const w=lt(()=>{if(!m.value)return[];const l=R.value;if(!l)return[];const v=l.getBoundingClientRect(),V=new Set;return l.querySelectorAll(".qc-top-tab").forEach(A=>{const G=A.getBoundingClientRect();G.left>=v.left-2&&G.left<v.right-24&&V.add(A.getAttribute("data-tab-key"))}),b.value.filter(A=>!V.has(A.key))});function n(l,v){l.key==="ArrowLeft"?(l.preventDefault(),k(-1)):l.key==="ArrowRight"?(l.preventDefault(),k(1)):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),x(v.key))}return Na(()=>{D(),o=new ResizeObserver(()=>{clearTimeout(q),q=setTimeout(D,100)}),R.value&&o.observe(R.value),window.addEventListener("resize",D)}),pd(()=>{o&&o.disconnect(),window.removeEventListener("resize",D),clearTimeout(q)}),{state:a,tabs:b,currentSubPage:p,go:x,scrollRef:R,hasOverflow:m,canScrollLeft:c,canScrollRight:g,scrollByStep:k,scrollToTab:M,hiddenTabs:w,onTabKeydown:n,updateScrollState:i}}},Np={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},Op=["disabled"],jp=["data-tab-key","aria-selected","title","onClick","onKeydown"],Vp={class:"qc-top-tab-label"},Fp=["disabled"];function Hp(a,e,p,t,y,b){const R=Ht("AppIcon"),m=Ht("el-dropdown-item"),c=Ht("el-dropdown-menu"),g=Ht("el-dropdown");return t.tabs.length?(ce(),me("div",Np,[t.hasOverflow?(ce(),me("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=o=>t.scrollByStep(-1))},"‹",8,Op)):Fe("",!0),Se("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...o)=>t.updateScrollState&&t.updateScrollState(...o))},[(ce(!0),me(rt,null,wt(t.tabs,o=>(ce(),me("div",{key:o.key,"data-tab-key":o.key,class:vt(["qc-top-tab",{"is-active":t.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===o.key?"true":"false",title:o.label,onClick:q=>t.go(o.key),onKeydown:q=>t.onTabKeydown(q,o)},[ut(R,{name:o.icon,size:14},null,8,["name"]),Se("span",Vp,Ve(o.label),1)],42,jp))),128))],544),t.hasOverflow?(ce(),me("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=o=>t.scrollByStep(1))},"›",8,Fp)):Fe("",!0),t.hasOverflow&&t.hiddenTabs.length?(ce(),ra(g,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:oa(()=>[ut(c,null,{default:oa(()=>[(ce(!0),me(rt,null,wt(t.hiddenTabs,o=>(ce(),ra(m,{key:o.key,command:o.key,class:vt({"is-active":t.currentSubPage===o.key})},{default:oa(()=>[ut(R,{name:o.icon,size:14},null,8,["name"]),ya(" "+Ve(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:oa(()=>[e[3]||(e[3]=Se("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Fe("",!0)])):Fe("",!0)}const Bp=xa(Ip,[["render",Hp]]);(function(){const{ref:a,computed:e,inject:p}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=p("qcState");if(!t)return{};const y=a(!1),b=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,goMerrill:b,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:y,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(R,m){const c="sub."+R.key+"."+m,g=t.t(c);if(g!==c)return g;const o="sub."+m,q=t.t(o);return q!==o&&q?q:t.subPageNames[m]||m}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:p,computed:t}=Vue,y=p(0),b=p(0),R=p(!1),m=t(()=>{const A={day:"date",week:"week",month:"month",year:"year"},G=e.currentView&&e.currentView.value||"day";return A[G]||"date"}),c={day:"日",week:"周",month:"月",year:"年"};function g(A){return e.t&&e.t("view."+A)||c[A]||A}function o(A){e.switchView?e.switchView(A):e.currentView&&(e.currentView.value=A)}let q=null;function i(A){const G=A.touches&&A.touches[0];G&&(y.value=G.clientX,b.value=G.clientY)}async function D(){if(!R.value){R.value=!0;try{await e.refreshCalendarData()}catch{}q&&clearTimeout(q),q=setTimeout(()=>{R.value=!1},500)}}function k(A){if(!(window.innerWidth<=768))return;const G=A.changedTouches&&A.changedTouches[0];if(!G)return;const ee=window.__quantModules&&window.__quantModules.gestures||{};if((typeof ee.judgePullToRefresh=="function"?ee.judgePullToRefresh(b.value,G.clientY):G.clientY-b.value>=60)&&(window.scrollY||0)<=0){A.stopPropagation(),D();return}if(e.currentSubPage.value==="pool")return;const N=G.clientX-y.value,P=G.clientY-b.value;Math.abs(N)>50&&Math.abs(N)>Math.abs(P)*1.2&&(e.navigateDate(N<0?1:-1),A.stopPropagation())}const x=p(!1),M=p(!1),w=p(""),n=p(null),l=p([]);function v(A){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[A]||A}async function V(){if(e.selectedDate.value){x.value=!0,M.value=!0,w.value="",n.value=null,l.value=[];try{const A=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),G=await A.json();if(!A.ok)throw new Error(G.detail||"HTTP "+A.status);n.value=G;const ee=G&&G.comparison||{},te=[];for(const N of Object.keys(ee)){if(N==="all_intersection")continue;const P=ee[N]||{},L=N.split("_vs_");te.push({label:v(L[0])+" ↔ "+v(L[1]),interCount:P.intersection_count||0,inter:(P.intersection||[]).join(", "),onlyS1Count:P.only_s1_count||0,onlyS1:(P.only_s1||[]).join(", "),onlyS2Count:P.only_s2_count||0,onlyS2:(P.only_s2||[]).join(", ")})}l.value=te}catch(A){w.value=String(A&&A.message?A.message:A)}finally{M.value=!1}}}return{...e,calType:m,pullRefreshing:R,onCalTouchStart:i,onCalTouchEnd:k,viewLabel:g,switchViewLocal:o,compareVisible:x,compareLoading:M,compareError:w,compareData:n,comparePairs:l,openStrategyCompare:V}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const e=a("qcState"),p=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let y=0;const b=t(()=>{var E;return((E=e.merrillData)==null?void 0:E.value)||{}}),R=t(()=>{var E;return((E=e.marketData)==null?void 0:E.value)||{}}),m=t(()=>{var E;return((E=e.dashboardData)==null?void 0:E.value)||{}}),c=t(()=>{var E;return((E=e.healthMetrics)==null?void 0:E.value)||[]}),g=t(()=>{var E;return((E=e.filteredConsensusRank)==null?void 0:E.value)||[]}),o=t(()=>{const E={};for(const re of g.value)re.code&&re.name&&(E[re.code]=re.name);return E}),q={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function i(E){return q[E]||E}const D=t(()=>R.value.date||m.value.latest_date||"-"),k=t(()=>{const E=R.value;return!E||Object.keys(E).length===0?"数据加载中...":E.is_trading_day&&E.in_trading_hours?"● 交易中":E.is_trading_day?"已收盘":"○ 非交易日"}),x=t(()=>{const E=b.value.next_stage_prediction;return E&&E.next_stage_name&&E.transition_probability>.2?`→${E.next_stage_name} ${(E.transition_probability*100).toFixed(2)}%`:""}),M=t(()=>{const E=[],re=m.value.pool_changes||{},xe=re.new_count||0;if(xe>0){const Be=re.new_stock_names||{},K=(re.new_stocks||[]).map(ne=>Be[ne]||o.value[ne]||ne).slice(0,4).join("、");E.push({icon:"sparkles",level:"new",text:`今日新入池 ${xe} 只${K?" · "+K:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Be of c.value.filter(K=>K.degraded))E.push({icon:"alert-triangle",level:"warn",text:`数据源 ${i(Be.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const De=b.value.timing;De&&De.progress_percent&&De.progress_percent>100?E.push({icon:"clock",level:"warn",text:`美林「${b.value.name}」已超期 ${De.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):De&&De.maturity&&b.value.name&&E.push({icon:"clock",level:"info",text:`美林「${b.value.name}」阶段成熟度 ${De.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ne=R.value;return Ne&&Ne.is_trading_day===!1&&Ne.date&&E.push({icon:"calendar",level:"info",text:`${Ne.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),E}),w=t(()=>{const E=[],re=b.value.name||"",xe=b.value.timing||{},De=["复苏","成长","过热"],Ne=["滞胀","衰退"];De.some(Je=>re.includes(Je))&&E.push({kind:"opportunity",source:"美林",text:re+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ne.some(Je=>re.includes(Je))&&E.push({kind:"risk",source:"美林",text:re+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),xe.progress_percent&&xe.progress_percent>100&&E.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Be=m.value.pool_changes||{},K=(Be.new_count||0)-(Be.out_count||0);K>=3?E.push({kind:"opportunity",source:"池变动",text:"净入池 +"+K,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):K<=-3&&E.push({kind:"risk",source:"池变动",text:"净出池 "+K,action:()=>{e.currentSubPage.value="consensus"}});const ne=R.value.market_sentiment,He=ne&&ne.text||"";(He.includes("乐观")||He.includes("积极")||He.includes("亢奋"))&&E.push({kind:"opportunity",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}}),(He.includes("悲观")||He.includes("恐慌")||He.includes("低迷"))&&E.push({kind:"risk",source:"情绪",text:He,action:()=>{e.currentSubPage.value="market"}});for(const Je of c.value.filter(Ue=>Ue.degraded))E.push({kind:"risk",source:"数据",text:i(Je.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return E}),n=t(()=>{var E;return((E=e.merrillTimeline)==null?void 0:E.value)||e.merrillTimeline||{cycles:[]}}),l=t(()=>{var E;return((E=e.timelineLoading)==null?void 0:E.value)||!1}),v=Vue.ref(null),V=Vue.ref(!1),A=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function G(E){const re=E&&E.currentTarget,xe=document.querySelector(".tl-click-pop");if(!re||!xe)return;const De=re.getBoundingClientRect(),Ne=xe.offsetWidth||340,Be=xe.offsetHeight||220,K=10,ne=re.closest(".merrill-timeline-block"),He=ne?ne.getBoundingClientRect():De,Je=De.left-He.left,Ue=De.top-He.top,yt=De.width,At=De.height,Et=He.width,jt=He.height;let it=null;Je+yt+K+Ne<=Et?it=Je+yt+K:Je-K-Ne>=0?it=Je-K-Ne:it=Math.max(8,Math.min(Je,Et-Ne-8));const bt=Ue+At/2-Be/2,et=Math.max(8,Math.min(bt,jt-Be-8));A.top=et,A.left=it,A.right=null,A.bottom=null}const ee=Vue.computed(function(){const E={};return A.top!=null&&(E.top=A.top+"px"),A.left!=null&&(E.left=A.left+"px"),A.right!=null&&(E.right=A.right+"px"),E});function te(E,re){let xe=null;const De=n.value&&n.value.cycles||[];for(const Ne of De){const Be=(Ne.stages||[]).find(K=>K.stage===E&&K.is_current);if(Be){xe=Be;break}}if(!xe)for(const Ne of De){const Be=(Ne.stages||[]).find(K=>K.stage===E);if(Be){xe=Be;break}}xe&&(v.value=xe,V.value=!0,Vue.nextTick(function(){G(re)}))}function N(){V.value=!1,v.value=null}function P(E){const re=e.merrillStagesConfig,De=(re&&re.value?re.value:re||{})[E]||{};return De.color||De.bg_color||"var(--color-primary)"}function L(E){const re=e.merrillStagesConfig,xe=re&&re.value?re.value:re||{};return xe[E]&&xe[E].name||""}function z(){const E=e.merrillStagesConfig;return E&&E.value?E.value:E||{}}function X(E){return z()[E]&&z()[E].description||""}function J(E){const re=E&&E.stages?E.stages:[];if(!re.length)return"";const xe=re[0]&&re[0].start?String(re[0].start).slice(0,4):"",De=re[re.length-1]||{},Ne=De.end?String(De.end).slice(0,4):De.start?String(De.start).slice(0,4):"";return xe||Ne?xe?xe+"–"+Ne:Ne:""}function de(E){const re=E.start?String(E.start).slice(0,4):"",xe=E.end?String(E.end).slice(0,4):re?"至今":"";return re?xe?re+"–"+xe:re:""}function H(E){const re=E.essence||E.trigger||X(E.stage)||"";return E.highlight?re?re+" · "+E.highlight:E.highlight:re}function F(){const E=b.value.indicators||{},re=b.value.stage||"",xe={recovery:[["PMI",E.pmi],["GDP",E.gdp_growth],["M2",E.m2_growth]],overheat:[["PPI",E.ppi],["CPI",E.cpi],["PMI",E.pmi]],stagflation:[["CPI",E.cpi],["PPI",E.ppi],["GDP",E.gdp_growth]],recession:[["PMI",E.pmi],["GDP",E.gdp_growth],["CPI",E.cpi]]},De=(xe[re]||xe.recession).filter(Ne=>Ne[1]!=null&&Ne[1]!==0);return De.length?"实时 · "+De.map(Ne=>Ne[0]+" "+Ne[1]+"%").join(" ｜ "):""}function I(E,re,xe){const Ne=(z()[E.stage]||{}).color||"var(--color-primary)",Be=re||[],K=Be.map(yt=>yt.duration_months||0),ne=K.reduce((yt,At)=>yt+At,0),He=ne>0?K[xe]/ne*100:100/Math.max(1,Be.length),Je=xe===0,Ue=xe===Be.length-1;return{flex:"0 0 "+He+"%",background:Ne,borderRadius:Je?"6px 0 0 6px":Ue?"0 6px 6px 0":"0"}}function f(E){const re=E.length;if(re<=4)return[E];const xe=Math.ceil(re/2);return[E.slice(0,xe),E.slice(xe).reverse()]}function _(E){const re=z()[E]||{},xe=re.color||"var(--color-primary)";return{background:re.bg_color||"var(--bg-card)",borderColor:xe,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const se=Vue.reactive({}),B=Vue.ref(null);let T=null,d=null,S=null;function u(){try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((re,xe)=>{const De=re.querySelector(".tl-stage-rows"),Ne=re.querySelector(".tl-row-top"),Be=re.querySelector(".tl-row-bottom"),K=Ne?Array.from(Ne.querySelectorAll(".merrill-stage-chip")):[],ne=Be?Array.from(Be.querySelectorAll(".merrill-stage-chip")).reverse():[],He=K.concat(ne);if(!De||He.length<2){se[xe]={d:"",vb:"0 0 1 1"};return}const Je=De.getBoundingClientRect(),Ue=Math.max(1,Je.width),yt=Math.max(1,Je.height),At=K.length,Et=He.map(it=>{const bt=it.getBoundingClientRect();return{x:bt.left+bt.width/2-Je.left,y:bt.top+bt.height/2-Je.top}});let jt="M "+Et[0].x.toFixed(1)+" "+Et[0].y.toFixed(1);for(let it=1;it<Et.length;it++){const bt=Et[it-1],et=Et[it];it===At&&(jt+=" L "+bt.x.toFixed(1)+" "+et.y.toFixed(1)),jt+=" L "+et.x.toFixed(1)+" "+et.y.toFixed(1)}se[xe]={d:jt,vb:"0 0 "+Ue.toFixed(1)+" "+yt.toFixed(1)}})}catch(E){console.error("[tl] buildTlPaths error",E)}}function j(E){return se[E]||{d:"",vb:"0 0 1 1"}}function ae(E){B.value=E}function Y(){B.value=null}const Q=Vue.ref([]);function C(E){return Q.value.indexOf(E)!==-1}function h(E){const re=Q.value.slice(),xe=re.indexOf(E);xe!==-1?re.splice(xe,1):re.push(E),Q.value=re,Vue.nextTick(function(){u&&u()})}function Z(){const E=document.querySelector(".merrill-timeline-block");if(!E)return;const re=E.querySelector(".tl-spine");re?re.scrollIntoView({behavior:"smooth",block:"end"}):E.scrollIntoView({behavior:"smooth",block:"end"})}const pe=Vue.computed(function(){const E=z();return["recovery","overheat","stagflation","recession","default"].filter(function(xe){return E[xe]&&E[xe].name}).map(function(xe){return{key:xe,name:E[xe].name,color:E[xe].color||"var(--color-primary)"}})});function ge(E){d&&clearTimeout(d),d=setTimeout(()=>{d=null,Vue.nextTick(u)},E||120)}Vue.onMounted(()=>{ge(0),ge(800),T=()=>ge(150),window.addEventListener("resize",T),S=new MutationObserver(()=>ge(120)),S.observe(document.body||document.documentElement,{childList:!0,subtree:!0})}),Vue.onBeforeUnmount(()=>{T&&window.removeEventListener("resize",T),d&&clearTimeout(d),S&&(S.disconnect(),S=null)});const Me=Vue.ref([]),je=Vue.ref(null),qe=Vue.ref(!1),ke=Vue.ref(!1),le=Vue.ref(7),be=Vue.ref(""),Te=Vue.ref(""),ie=Vue.computed(()=>{const E=new Set;return(Me.value||[]).forEach(function(re){re.task&&E.add(re.task)}),Array.from(E).sort()}),$=Vue.computed(function(){const E=je.value&&je.value.success_rate||0;return E>=80?"color-success":E>=50?"color-warning":"color-danger"});function ue(E,re){return E>0&&re/E>=.8?"status-ok":E>0&&re/E>=.5?"status-warn":"status-bad"}async function Ee(){const E=++y;qe.value=!0,ke.value=!1;try{const re=window.__quantModules&&window.__quantModules.core||{},xe=typeof re.authHeaders=="function"?re.authHeaders():{},De=new URLSearchParams({days:String(le.value)});be.value&&De.set("task",be.value),Te.value&&De.set("status",Te.value);const[Ne,Be]=await Promise.all([fetch("/api/system/execution-history?"+De.toString(),{headers:xe}).then(function(K){return K.json()}),fetch("/api/system/execution-summary?days="+le.value,{headers:xe}).then(function(K){return K.json()})]);if(E!==y)return;Me.value=Ne&&Ne.data||[],je.value=Be&&Be.data||null}catch(re){console.error("[execution] 执行数据加载失败:",re),ke.value=!0}finally{E===y&&(qe.value=!1)}}const ze=window.__quantModules&&window.__quantModules.i18n||{},$e=typeof ze.t=="function"?ze.t:function(E){return String(E)},mt=Vue.ref([]),Ze=Vue.ref(null),We=Vue.ref(null),st=Vue.ref(""),oe=Vue.ref([]),_e=Vue.ref(!1);let Pe=null;const Ie=Vue.computed(function(){const E=We.value&&We.value.dates||[];return E.length&&!st.value&&(st.value=E[E.length-1].date),E}),ct=Vue.computed(function(){const E=(mt.value||[]).find(function(xe){return xe.enabled});if(!E||E.countdown_seconds==null)return"—";const re=E.countdown_seconds;return Math.floor(re/3600)+"h"+String(Math.floor(re%3600/60)).padStart(2,"0")+"m"}),at=Vue.computed(function(){const E=(mt.value||[]).find(function(re){return re.enabled});if(!E||E.countdown_seconds==null||E.countdown_seconds<0)return"";try{return new Date(Date.now()+E.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),Ge=Vue.computed(function(){const E=Ze.value;return!E||E.phase==="idle"?$e("exec.waiting"):E.phase==="running"?$e("exec.running")+(E.current_sid?" · "+E.current_sid:""):E.phase==="done"?$e("exec.done"):$e("exec.failed")}),pt=Vue.computed(function(){return Ze.value&&Ze.value.phase==="running"?"🟡":"🟢"}),St=Vue.computed(function(){const E=We.value&&We.value.dates||[];return E.length?E[E.length-1].date:"—"}),gt=Vue.computed(function(){const E=We.value&&We.value.dates||[],re=E[E.length-1];return re&&re.visible?"color-success":"color-danger"}),Ye=Vue.computed(function(){const E=We.value&&We.value.dates||[],re=E[E.length-1];return re?(re.visible?"✓ ":"✗ ")+re.day_view_total:"—"});function ht(E){const re=window.__quantModules&&window.__quantModules.core||{},xe=typeof re.authHeaders=="function"?re.authHeaders():{};return fetch(E,{headers:xe}).then(function(De){return De.json()})}async function Tt(){const E=++y;try{const[re,xe,De]=await Promise.all([ht("/api/strategies/execution/plan"),ht("/api/strategies/execution/status"),ht("/api/strategies/execution/results?days=7")]);if(E!==y)return;mt.value=re&&re.data&&re.data.plans||[],Ze.value=xe&&xe.data||null,We.value=De&&De.data||null,Ze.value&&Ze.value.phase==="running"?zt():qt()}catch(re){console.error("[execution-monitor] 监控数据加载失败:",re)}}function zt(){qt(),Pe=setInterval(function(){ht("/api/strategies/execution/status").then(function(E){Ze.value=E&&E.data||null,Ze.value&&Ze.value.phase!=="running"&&(qt(),Tt())}).catch(function(){})},5e3)}function qt(){Pe&&(clearInterval(Pe),Pe=null)}async function kt(E){if(!E)return;const re=++y;_e.value=!0;try{const xe=await ht("/api/strategies/execution/trace/"+encodeURIComponent(E));if(re!==y)return;const De=xe&&xe.data||null;oe.value=De&&De.steps||[]}catch(xe){console.error("[execution-trace] 追溯加载失败:",xe)}finally{re===y&&(_e.value=!1)}}return Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(E){E==="execution"?(Ee(),Tt()):qt()},{immediate:!0}),{...e,todayText:D,tradingStatus:k,merrillNext:x,todayFocus:M,todaySignals:w,merrillConfigOpen:p,getTimelineStageColor:P,getTimelineStageName:L,getTimelineStageDesc:X,timelineRows:f,tlChipStyle:_,tlPathFor:j,tlCycleYears:J,tlGanttStyle:I,tlTipYears:de,tlTipBrief:H,tlCurrentBrief:F,tlHoverKey:B,setTlHover:ae,clearTlHover:Y,collapsedCycles:Q,isCycleCollapsed:C,toggleCycle:h,scrollToLatest:Z,tlLegendStages:pe,tlClickStage:v,tlClickVisible:V,closeTlClick:N,tlClickPosStyle:ee,merrillTimeline:n,timelineLoading:l,showTimelineStage:te,execHistory:Me,execSummary:je,execLoading:qe,execError:ke,execDays:le,execTaskFilter:be,execStatusFilter:Te,execTaskOptions:ie,execSuccessClass:$,loadExecutionData:Ee,execRateClass:ue,execPlan:mt,execStatus:Ze,execResults:We,execTraceDate:st,execTraceSteps:oe,execTraceLoading:_e,execResultsDates:Ie,execCountdownText:ct,execNextRunText:at,execPhaseText:Ge,execStatusIcon:pt,execLastDate:St,execVisibleClass:gt,execVisibleText:Ye,loadExecutionTrace:kt}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};function p(K){e.currentSubPage.value=K}function t(){be(),Te(),ie()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,K=>{K==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),K==="datadict"&&S(),K==="health"&&_(),K==="notification"&&t()});const y=e.themeHues||[45,220,0,140,270,320],b=e.themeHueNames||{},R=e.themeMode||Vue.computed(()=>"light"),m=e.themeHue||Vue.ref(45);function c(K){e.changeThemeMode&&e.changeThemeMode(K)}function g(K){e.changeThemeHue&&e.changeThemeHue(parseInt(K,10))}function o(K){return e.hueColor?e.hueColor(K):"hsl("+K+", 75%, 42%)"}function q(K){return e.hueName?e.hueName(K):b[K]||"自定义 "+K}function i(K){e.setNavMode&&e.setNavMode(K)}const D=Vue.ref([]),k=Vue.ref(""),x=Vue.ref("read"),M=Vue.ref(""),w=Vue.ref(!1),n=()=>window.__quantModules&&window.__quantModules.core||{},l=Vue.ref([]),v=Vue.ref(!1);async function V(){v.value=!0;try{const K=await fetch("/api/audit/logs?limit=20",{headers:n().authHeaders?n().authHeaders():{}}).then(function(ne){if(!ne.ok)throw new Error("HTTP "+ne.status);return ne.json()});l.value=K&&K.logs||[]}catch(K){console.error("[system] 审计加载失败:",K),l.value=[]}finally{v.value=!1}}const A=Vue.ref(!1),G=Vue.ref(null),ee=Vue.ref(null),te=Vue.ref([]),N=Vue.ref(null);function P(K){return K==="completed"?"完成":K==="running"?"运行中":K==="pending"?"排队中":K==="cancelled"?"已取消":"失败"}async function L(){try{const ne=await(await fetch("/api/jobs?limit=20")).json();ne&&ne.success&&(te.value=ne.data&&ne.data.tasks||[])}catch(K){console.warn("[system] 加载任务队列失败:",K)}}async function z(K){try{await fetch("/api/jobs/"+K+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),L()}catch(ne){console.warn("[system] 取消任务失败:",ne)}}function X(){L(),N.value=window.setInterval(L,15e3)}const J=Vue.ref({items:[]}),de=Vue.ref([]),H=Vue.ref(null),F=Vue.ref({data_sources:[],alerts:[]}),I=function(){return n().authHeaders?n().authHeaders():{}},f=function(K){return fetch(K,{headers:I()}).then(function(ne){if(!ne.ok)throw new Error("HTTP "+ne.status);return ne.json()})};async function _(){A.value=!0,G.value=null;try{const[K,ne,He,Je]=await Promise.all([f("/api/reliability/freshness"),f("/api/reliability/heal-history?limit=20"),f("/api/reliability/startup-report"),f("/api/reliability/source-health")]);J.value=K&&K.data||{items:[]},de.value=ne&&ne.data||[],H.value=He&&He.data||null,F.value=Je||{data_sources:[],alerts:[]},ee.value=new Date().toLocaleTimeString()}catch(K){console.warn("[health] 加载失败:",K),G.value="健康数据加载失败: "+(K.message||""),J.value={items:[]},de.value=[]}finally{A.value=!1}}const se=Vue.ref(!1),B=Vue.ref(""),T=Vue.ref(""),d=Vue.ref({fields:[]});async function S(){se.value=!0,B.value="";try{const K="/api/data-dict"+(T.value?"?category="+T.value:""),ne=await f(K);d.value=ne&&ne.data||{fields:[]}}catch(K){console.warn("[dict] 加载失败:",K),B.value="数据字典加载失败: "+(K.message||""),d.value={fields:[]}}finally{se.value=!1}}function u(K){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[K]||"var(--text-secondary)"}function j(K){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[K]||K}const ae=Vue.computed(()=>(J.value?J.value.items||[]:[]).filter(ne=>ne.status==="stale"||ne.status==="missing").length),Y=Vue.ref("rules"),Q=Vue.ref([]),C=Vue.ref([]),h=Vue.ref([]),Z=Vue.ref(!1),pe=Vue.ref(""),ge=Vue.ref("price_above"),Me=Vue.ref(""),je=Vue.ref(!1),qe=Vue.ref(60),ke=Vue.ref("");function le(K){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[K]||K}async function be(){Z.value=!0;try{const K=await(await fetch("/api/alerts/rules")).json();Q.value=K&&K.rules||[]}catch(K){ke.value="规则加载失败: "+K}finally{Z.value=!1}}async function Te(){Z.value=!0;try{const K=await(await fetch("/api/alerts/history?limit=50")).json();C.value=K&&K.history||[]}catch(K){ke.value="历史加载失败: "+K}finally{Z.value=!1}}async function ie(){Z.value=!0;try{const K=await(await fetch("/api/alerts/channels")).json(),ne=await(await fetch("/api/alerts/silence")).json();h.value=K&&K.channels||[],je.value=!!(ne&&ne.silenced)}catch(K){ke.value="通道状态加载失败: "+K}finally{Z.value=!1}}function $(K){Y.value=K,K==="rules"?be():K==="history"?Te():ie()}async function ue(){const K=pe.value.trim();if(!K){ke.value="请填写股票代码";return}Z.value=!0;try{const ne={stock_code:K,rule_type:ge.value};if(ge.value!=="new_pool"){const Je=Number(Me.value);if(isNaN(Je)){ke.value="阈值必须为数值";return}ne.threshold=Je}const He=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ne)})).json();He&&He.rule?(ke.value="规则已添加",pe.value="",Me.value="",be()):ke.value=He&&He.detail||"添加失败"}catch(ne){ke.value="添加失败: "+ne}finally{Z.value=!1}}async function Ee(K){try{await fetch("/api/alerts/rules/"+K.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!K.enabled})}),K.enabled=!K.enabled}catch(ne){ke.value="切换失败: "+ne}}async function ze(K){try{const ne=await(await fetch("/api/alerts/rules/"+K.id,{method:"DELETE"})).json();ne&&ne.success?(ke.value="规则已删除",be()):ke.value="删除失败"}catch(ne){ke.value="删除失败: "+ne}}async function $e(){try{const K=je.value?qe.value:0,ne=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:K})})).json();je.value=!!(ne&&ne.silenced),ke.value=je.value?"已静默":"已恢复推送"}catch(K){ke.value="静默设置失败: "+K}}async function mt(){je.value=!1,await $e()}function Ze(K){return!!K&&!K.degraded}const We=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ne,He)=>Math.max(ne,He.views||0),0)||1),st=()=>n().OPENAPI_ROUTE_BASE||"/api/openapi";async function oe(){w.value=!0;try{const K=await n().apiFetch(st()+"/keys");D.value=K&&K.data||[]}catch(K){ElementPlus.ElMessage.error("加载 API Key 失败: "+(K.message||""))}finally{w.value=!1}}async function _e(){try{const K=await n().apiFetch(st()+"/keys",{method:"POST",body:JSON.stringify({name:k.value||"未命名",role:x.value||"read",expire_days:365})});K&&K.success?(M.value=K.api_key||"",k.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await oe()):ElementPlus.ElMessage.error(K&&(K.detail||K.message)||"生成失败")}catch(K){ElementPlus.ElMessage.error("生成失败: "+(K.message||""))}}async function Pe(){if(M.value)try{await navigator.clipboard.writeText(M.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Ie(K){try{const ne=await n().apiFetch(st()+"/keys/"+K.id,{method:"DELETE"});ne&&ne.success?(ElementPlus.ElMessage.success("Key 已吊销"),M.value&&K.prefix&&M.value.includes(K.prefix)&&(M.value=""),await oe()):ElementPlus.ElMessage.error(ne&&(ne.detail||ne.message)||"吊销失败")}catch(ne){ElementPlus.ElMessage.error("吊销失败: "+(ne.message||""))}}const ct={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function at(K){return ct[K]||K}const Ge=computed(()=>{var K;return(((K=e.healthMetrics)==null?void 0:K.value)||[]).map(ne=>({name:at(ne.name),source:ne.name,success_rate:ne.success_rate,avg_latency_ms:ne.avg_latency_ms,calls:ne.calls||0,degraded:!!ne.degraded,data_age_hours:ne.data_age_hours!=null?ne.data_age_hours:null,stale:!!ne.stale,last_fetch:ne.last_fetch||ne.last_success||null}))});function pt(K){return K.degraded?"degraded":K.success_rate==null?"unknown":K.success_rate>=90?"ok":K.success_rate>=60?"warn":"bad"}function St(K){return K==null?"":K<1?"刚刚":K<24?Math.round(K)+"小时前":Math.floor(K/24)+"天前"}const gt=e.aiUsage||Vue.ref({}),Ye=Vue.computed(()=>{const K=gt.value&&gt.value.by_model||{};return Object.entries(K).map(([ne,He])=>({name:ne,count:He})).sort((ne,He)=>He.count-ne.count)}),ht=Vue.computed(()=>Ye.value.reduce((K,ne)=>Math.max(K,ne.count),0)||1),Tt=Vue.computed(()=>Ye.value.reduce((K,ne)=>K+ne.count,0)||1),zt=Vue.computed(()=>qt.value.reduce((K,ne)=>Math.max(K,ne.count),0)||0),qt=Vue.computed(()=>{const K=gt.value&&gt.value.by_day||{},ne=[],He=new Date;for(let Je=29;Je>=0;Je--){const Ue=new Date(He.getFullYear(),He.getMonth(),He.getDate()-Je),yt=Ue.getFullYear()+"-"+String(Ue.getMonth()+1).padStart(2,"0")+"-"+String(Ue.getDate()).padStart(2,"0");ne.push({day:yt,count:K[yt]||0})}return ne}),kt=Vue.computed(()=>qt.value.reduce((K,ne)=>Math.max(K,ne.count),0)||1),E=Vue.computed(()=>{const K=gt.value&&gt.value.by_day||{},ne=new Date,He=ne.getFullYear()+"-"+String(ne.getMonth()+1).padStart(2,"0")+"-"+String(ne.getDate()).padStart(2,"0");return K[He]||0}),re=Vue.computed(()=>{const K=gt.value&&gt.value.by_day||{},ne=Object.keys(K).filter(He=>(K[He]||0)>0);return ne.length?ne[ne.length-1]:""});function xe(K){e.analyticsDays&&(e.analyticsDays.value=K),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const De='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ne='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function Be(K){return K?Ne:De}return X(),{...e,themeHues:y,themeHueNames:b,themeMode:R,themeHue:m,onThemeModeChange:c,setThemeHue:g,hueColor:o,hueName:q,onNavModeChange:i,analyticsMaxViews:We,aiModelRank:Ye,aiModelMax:ht,aiDayTrend:qt,aiDayMax:kt,todayAiCalls:E,lastAiCallDay:re,aiTotal:Tt,aiDayPeak:zt,setAnalyticsDays:xe,viewIcon:Be,openApiKeys:D,openApiKeyName:k,openApiKeyRole:x,newOpenApiKey:M,openApiLoading:w,loadOpenApiKeys:oe,generateOpenApiKey:_e,copyOpenApiKey:Pe,revokeOpenApiKey:Ie,healthRows:Ge,healthClass:pt,fmtAge:St,staleAssetCount:ae,jobQueue:te,loadJobQueue:L,cancelJob:z,jobStatusText:P,auditLogs:l,auditLoading:v,loadAuditLogs:V,healthLoading:A,healthError:G,healthUpdatedAt:ee,freshnessData:J,healHistory:de,startupReport:H,sourceHealth:F,refreshHealth:_,statusColor:u,statusLabel:j,sourceOk:Ze,dictLoading:se,dictError:B,dictCategory:T,dictData:d,loadDataDict:S,ncTab:Y,ncRules:Q,ncHistory:C,ncChannels:h,ncLoading:Z,ncNewCode:pe,ncNewType:ge,ncNewThreshold:Me,ncSilence:je,ncSilenceMinutes:qe,ncMsg:ke,ncTypeLabel:le,onNcTab:$,loadAlertRules:be,loadAlertHistory:Te,loadAlertChannels:ie,addAlertRule:ue,toggleAlertRule:Ee,removeAlertRule:ze,applySilence:$e,clearSilence:mt,goSystemSub:p}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:e,watch:p,onUnmounted:t}=Vue,y=a("qcState");if(!y)return{};function b(){if(!y.hasMoreAiHistory||!y.loadMoreAiHistory||y.currentPage.value!=="ai"||y.currentSubPage.value!=="history")return;const C=document.documentElement;C.scrollTop+window.innerHeight>=C.scrollHeight-300&&y.loadMoreAiHistory()}window.addEventListener("scroll",b,{passive:!0}),t(()=>window.removeEventListener("scroll",b));const R=e(null),m=e(!1),c=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function g(C){return!C||C.total===0||C.rate===null||C.rate===void 0?"--":C.rate.toFixed(2)+"%"}const o=e(5);function q(C){o.value=C}function i(C,h){if(!C)return"--";if(C.available===!1)return"— 数据不可达";const Z=C["hit_n"+h];return Z===!0?"✓ 命中":Z===!1?"✗ 未中":"– 中性/待验证"}async function D(){m.value=!0;try{const h=await(await fetch("/api/ai/track")).json();R.value=h&&h.success?h.data:null}catch(C){console.warn("[eval-track] 评估命中率加载失败:",C),R.value=null}finally{m.value=!1}}p(function(){return y.currentPage.value+"/"+y.currentSubPage.value},function(C){C==="ai/evaluation-analysis"&&D()},{immediate:!0});const k=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:x,summary:M,trades:w,loading:n,loadError:l,showAddForm:v,addForm:V,addSaving:A,tradeFormVisible:G,tradeForm:ee,tradeSaving:te,portfolioTab:N,equityDays:P,equityLoading:L,equityNote:z,equityHasData:X,loadPortfolio:J,addPosition:de,removePosition:H,openTradeForm:F,submitTrade:I,loadTrades:f,loadEquity:_,fmtSigned:se,fmtSignedPct:B,signClass:T,riskTab:d,riskLoading:S,riskNote:u,riskHasData:j,riskData:ae,riskMetricList:Y,loadRisk:Q}=k;return p(x,function(C){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((C||[]).map(function(h){return{code:h.stock_code,name:h.stock_name||h.stock_code}}))},{deep:!0}),p(function(){return y.currentPage.value+"/"+y.currentSubPage.value},function(C){C==="ai/portfolio"?(J(),f(),_(P?P.value:30),typeof Q=="function"&&Q()):C==="ai/overview"&&J()},{immediate:!0}),{...y,trackData:R,trackLoading:m,trackWindows:c,fmtTrackRate:g,loadTrack:D,trackWindow:o,setTrackWindow:q,trackHitText:i,positions:x,summary:M,trades:w,loading:n,loadError:l,showAddForm:v,addForm:V,addSaving:A,tradeFormVisible:G,tradeForm:ee,tradeSaving:te,portfolioTab:N,equityDays:P,equityLoading:L,equityNote:z,equityHasData:X,loadPortfolio:J,addPosition:de,removePosition:H,openTradeForm:F,submitTrade:I,loadTrades:f,loadEquity:_,fmtSigned:se,fmtSignedPct:B,signClass:T,riskTab:d,riskLoading:S,riskNote:u,riskHasData:j,riskData:ae,riskMetricList:Y,loadRisk:Q}}}})();(function(){const{ref:a,computed:e,watch:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const y=t("qcState"),b=Vue.ref(!1),R=Vue.ref(!1);let m=0;if(!y)return{};const c=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function g(s){c.value=s;try{localStorage.setItem("quant_strategy_mode",s)}catch{}y.currentSubPage.value="strategy-manage"}const o=a([]),q=a(!1),i=a(!1),D=a(""),k=a(null),x=a(!1),M=a(!1);async function w(){const s=++m;q.value=!0,i.value=!1;try{const r=await fetch("/api/market/reviews?limit=30",{headers:De()}).then(W=>W.json());if(s!==m)return;r&&r.success?o.value=Array.isArray(r.data)?r.data:[]:i.value=!0}catch(r){console.error("[market-review] 复盘列表加载失败:",r),i.value=!0}finally{s===m&&(q.value=!1)}}function n(s){D.value=s,v(s)}function l(){D.value="",k.value=null,M.value=!1}async function v(s){const r=++m;x.value=!0,M.value=!1,k.value=null;try{const W=s?"/api/market/review?date="+encodeURIComponent(s):"/api/market/review",we=await fetch(W,{headers:De()}).then(he=>he.json());if(r!==m)return;we&&we.success?k.value=we.data:M.value=!0}catch(W){console.error("[market-review] 复盘详情加载失败:",W),M.value=!0}finally{r===m&&(x.value=!1)}}function V(s){return s>0?"up":s<0?"down":"flat"}function A(s){return s==null||isNaN(Number(s))?"—":(s>0?"+":"")+Number(s).toFixed(2)+"%"}function G(s){const r={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(s||{}).map(function(W){const we=W[0],he=W[1],ot=!he||he==="unavailable"||he==="数据不可达";return{label:r[we]||we,value:ot?"数据不可达":he,unavailable:ot}})}const ee=a([]),te=a(!1),N=a(!1),P=a(""),L=a(""),z=a(""),X=a({}),J=a(!1),de=a(""),H=a(""),F=a([]),I=a([]),f=a(""),_=a(""),se=a(!0),B=a(!0),T=a("20:00"),d=a("default"),S=a(!1),u=a(""),j=e(function(){return ee.value.find(function(s){return s.id===z.value})||null});async function ae(s,r){r=r||{},r.headers=Object.assign({},r.headers||{});const W=localStorage.getItem("quant_token")||"";return W&&(r.headers.Authorization="Bearer "+W),fetch(s,r)}async function Y(){const s=++m;te.value=!0,N.value=!1,P.value="",L.value="";try{const r=await ae("/api/strategies").then(function(we){return we.json()});if(s!==m)return;let W=null;Array.isArray(r)?W=r:r&&Array.isArray(r.strategies)?(W=r.strategies,r.warn&&(L.value=String(r.warn))):(N.value=!0,P.value=r&&r.detail?String(r.detail):"策略列表加载失败（接口返回异常）"),W!==null&&(ee.value=W,ee.value.length&&!z.value&&(z.value=ee.value[0].id,Q()))}catch(r){console.error("[research] 策略列表加载失败:",r),N.value=!0,P.value="策略列表加载失败: "+(r&&r.message||"网络错误")}finally{s===m&&(te.value=!1)}}function Q(){const s=j.value;s&&(X.value={},s.schema.forEach(function(r){X.value[r.key]=r.default}),H.value="",be(),C(),ge())}async function C(){if(!z.value){I.value=[];return}try{const s=await ae("/api/strategies/"+z.value+"/profiles").then(function(r){return r.json()});I.value=s&&s.data&&s.data.profiles||[],f.value=""}catch(s){console.error("[research] 方案列表加载失败:",s),I.value=[]}}async function h(){b.value=!0;const s=(_.value||"").trim();if(!s){window._core&&window._core.showToast("请输入方案名称");return}try{const r=await ae("/api/strategies/"+z.value+"/profiles",{method:"POST",body:JSON.stringify({name:s,params:X.value})}).then(function(W){return W.json()});if(r&&r.detail){window._core&&window._core.showToast(String(r.detail));return}_.value="",await C(),window._core&&window._core.showToast("方案已保存")}catch(r){console.error("[research] 方案保存失败:",r),window._core&&window._core.showToast("方案保存失败")}}function Z(){const s=I.value.find(function(r){return r.id===f.value});s&&(Object.keys(s.params||{}).forEach(function(r){X.value[r]=s.params[r]}),window._core&&window._core.showToast("已应用方案: "+s.name))}async function pe(){if(f.value)try{await ae("/api/strategies/"+z.value+"/profiles/"+f.value,{method:"DELETE"}).then(function(s){return s.json()}),await C(),window._core&&window._core.showToast("方案已删除")}catch(s){console.error("[research] 方案删除失败:",s)}}async function ge(){try{const s=await ae("/api/strategies/governance").then(function(we){return we.json()}),W=(s&&s.data&&s.data.strategies||{})[z.value]||{};se.value=W.enabled!==!1,T.value=W.schedule||"20:00",d.value=W.universe==="all"?"all":"default",B.value=W.show_in_calendar!==!1,u.value=W.last_holdings||""}catch(s){console.error("[research] 纳管状态加载失败:",s)}}async function Me(){try{await ae("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const s={};return s[z.value]={enabled:se.value,schedule:T.value,universe:d.value,show_in_calendar:B.value},s}()})}).then(function(s){return s.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(s){console.error("[research] 纳管更新失败:",s)}}async function je(){if(z.value){S.value=!0;try{const s=await ae("/api/strategies/"+z.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:de.value||void 0})}).then(function(r){return r.json()});if(s&&s.detail){window._core&&window._core.showToast(String(s.detail));return}window._core&&window._core.showToast("持仓已生成"),await ge()}catch(s){console.error("[research] run-once 失败:",s),window._core&&window._core.showToast("持仓生成失败")}finally{S.value=!1}}}function qe(){u.value&&window.open(u.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function ke(){const s=j.value;if(!s)return;const r=(_.value||"").trim()||s.name+"-副本";le(r,Object.assign({},X.value)),window._core&&window._core.showToast("已复制为副本方案: "+r)}async function le(s,r){try{await ae("/api/strategies/"+z.value+"/profiles",{method:"POST",body:JSON.stringify({name:s,params:r})}).then(function(W){return W.json()}),await C()}catch(W){console.error("[research] 副本保存失败:",W)}}async function be(){const s=++m;if(z.value)try{const r=await ae("/api/strategies/"+z.value+"/runs?limit=5").then(function(W){return W.json()});if(s!==m)return;F.value=Array.isArray(r)?r:[]}catch{F.value=[]}}async function Te(){if(z.value){J.value=!0;try{const s=await ae("/api/strategies/"+z.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:X.value,as_of:de.value||void 0})}).then(function(r){return r.json()});s&&s.status==="success"?be():alert("运行失败: "+(s.detail||JSON.stringify(s)))}catch(s){console.error("[research] 策略运行失败:",s),alert("运行失败: "+s.message)}finally{J.value=!1}}}async function ie(){if(z.value)try{const s=Object.keys(X.value).map(function(W){return encodeURIComponent(W)+"="+encodeURIComponent(X.value[W])}).join("&"),r=await ae("/api/strategies/"+z.value+"/ptrade-code?"+s).then(function(W){return W.json()});r&&r.code?H.value=r.code:alert("导出失败: "+(r.detail||JSON.stringify(r)))}catch(s){console.error("[research] PTrade 导出失败:",s),alert("导出失败: "+s.message)}}function $(){if(!H.value)return;const s=document.createElement("textarea");s.value=H.value,document.body.appendChild(s),s.select();try{document.execCommand("copy")}catch{}document.body.removeChild(s)}p(function(){return y.currentPage.value+"/"+y.currentSubPage.value},function(s){s==="research/research-overview"&&(Y(),w(),Ne(),_t()),(s==="research/market-review"||s==="shortterm/market-review")&&!D.value&&w(),s==="research/quant-research"&&Y(),s==="research/backtest-history"&&O()},{immediate:!0});const ue=a("mom20"),Ee=a(!1),ze=a(!1),$e=a(null),mt=a(null),Ze=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],We=a('{"top_n":[10,20,30]}'),st=a(null),oe=a(""),_e=a(!1),Pe=a(null);async function Ie(){if(!z.value){ElementPlus.ElMessage.warning("请先选择策略");return}let s;try{s=JSON.parse(We.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!s||Object.keys(s).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}_e.value=!0,st.value=null,oe.value="";try{const r=await fetch("/api/strategies/"+z.value+"/sweep",{method:"POST",headers:De(),body:JSON.stringify({param_grid:s})}).then(function(W){return W.json()});r&&Array.isArray(r.results)?(st.value=r.results,oe.value="完成 "+r.count+" 组"+(r.data_degraded?" (数据不可达, 结果降级)":""),Pe.value=r.param_stability||null):oe.value=r&&r.detail||"扫描失败"}catch(r){console.error("[sweep]",r),oe.value="扫描失败: "+r.message}finally{_e.value=!1}}async function ct(){const s=++m;Ee.value=!0;try{const r=await ae("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:z.value||"multi_factor",factor_key:ue.value,params:X.value||{}})}).then(function(we){return we.json()}),W=r&&r.report?r.report.n1||{}:{};$e.value=W}catch(r){console.error("[research] 因子IC分析失败:",r),alert("因子 IC 分析失败: "+r.message)}finally{s===m&&(Ee.value=!1)}}async function at(){const s=++m;ze.value=!0;try{const r=await ae("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:z.value||"multi_factor",factor_key:ue.value,params:X.value||{}})}).then(function(W){return W.json()});r&&r.layers?mt.value=r:alert("分层回测: "+(r.message||"无数据"))}catch(r){console.error("[research] 分层回测失败:",r),alert("分层回测失败: "+r.message)}finally{s===m&&(ze.value=!1)}}const Ge=a(null),pt=a(!1);async function St(){const s=++m;pt.value=!0,Ge.value=null;try{const r=await ae("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:z.value||"multi_factor",factor_key:ue.value,params:X.value||{}})}).then(function(W){return W.json()});r&&r.detail?Ge.value=r.detail:alert("因子详情: "+(r.message||"无数据"))}catch(r){console.error("[research] 因子详情失败:",r),alert("因子详情失败: "+r.message)}finally{s===m&&(pt.value=!1)}}const gt=a([]),Ye=a(null),ht=a(null),Tt=a(null),zt=a(""),qt=a(!1),kt=a(!1),E=a(""),re=a(""),xe=a("");function De(){const s=localStorage.getItem("quant_token")||"";return s?{Authorization:"Bearer "+s,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Ne(){const s=++m;try{const r=await fetch("/api/strategies/variants",{headers:De()}).then(function(W){return W.json()});if(s!==m)return;gt.value=r&&r.data&&r.data.variants||[]}catch(r){console.error("[i3a] 加载 variants 失败:",r)}}async function Be(){if(!z.value){E.value="请先在量化研究选择母本策略";return}kt.value=!0,E.value="";try{const s=await fetch("/api/strategies/"+z.value+"/clone",{method:"POST",headers:De(),body:JSON.stringify({name:(_.value||"").trim()||void 0,params:Object.assign({},X.value)})}).then(function(W){return W.json()});if(s&&s.detail){E.value=String(s.detail);return}const r=s&&s.data;r&&r.sid&&(Ye.value=r.sid,E.value="已复制为新策略: "+r.name,await Ne(),await ne(r.sid))}catch(s){console.error("[i3a] 复制失败:",s),E.value="复制失败: "+s.message}finally{kt.value=!1}}async function K(s){Ye.value=s,E.value="",zt.value="",await ne(s)}async function ne(s){try{const r=await fetch("/api/strategies/"+s+"/selection-spec",{headers:De()}).then(function(W){return W.json()});r&&r.data&&r.data.spec&&(ht.value=Object.assign({},r.data.spec),Tt.value=r.data.fields,re.value=(r.data.spec.industry_scope||[]).join(","),xe.value=(r.data.spec.market_cap_range||[]).join(","))}catch(r){console.error("[i3a] 加载 spec 失败:",r)}}async function He(){if(R.value=!0,!(!Ye.value||!ht.value))try{ht.value.industry_scope=re.value?re.value.split(/[,，]/).map(function(r){return r.trim()}).filter(Boolean):[],ht.value.market_cap_range=xe.value?xe.value.split(/[,，]/).map(Number).filter(function(r){return!isNaN(r)}):[];const s=await fetch("/api/strategies/"+Ye.value+"/selection-spec",{method:"PUT",headers:De(),body:JSON.stringify({spec:ht.value})}).then(function(r){return r.json()});s&&s.data&&s.data.spec&&(ht.value=s.data.spec,E.value="SelectionSpec 已保存")}catch(s){console.error("[i3a] 保存 spec 失败:",s),E.value="保存失败"}}async function Je(){if(!Ye.value){E.value="请先选择/创建微调策略";return}kt.value=!0,E.value="";try{const s=await fetch("/api/strategies/"+Ye.value+"/run-once",{method:"POST",headers:De(),body:"{}"}).then(function(r){return r.json()});E.value=s&&s.detail?String(s.detail):"持仓已生成: "+(s&&s.data&&s.data.symbols||0)+" 只"}catch(s){console.error("[i3a] run-once 失败:",s),E.value="生成持仓失败"}finally{kt.value=!1}}async function Ue(){if(!Ye.value){E.value="请先选择/创建微调策略";return}ht.value||await ne(Ye.value),qt.value=!0,E.value="";try{const s=await fetch("/api/strategies/"+Ye.value+"/ai-trade-code",{method:"POST",headers:De(),body:JSON.stringify({spec:ht.value})}).then(function(r){return r.json()});if(s&&s.detail){E.value=String(s.detail);return}s&&s.data&&(zt.value=s.data.code||"",s.data.api_errors&&s.data.api_errors.length?E.value="生成成功(含 API 校验告警 "+s.data.api_errors.length+" 条)":E.value="AI 交易码已生成, 已通过矩阵内校验")}catch(s){console.error("[i3a] AI 交易码失败:",s),E.value="AI 生成失败: "+s.message}finally{qt.value=!1}}function yt(){if(zt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(zt.value).then(function(){E.value="代码已复制"});else{const s=document.createElement("textarea");s.value=zt.value,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),E.value="代码已复制"}}const At=a(""),Et=a(""),jt=a([]),it=a(""),bt=a(""),et=a(""),It=a(null),ta=a(!1),Bt=a(!1),dt=a(!1);function Nt(){const s=localStorage.getItem("quant_token")||"";return s?{Authorization:"Bearer "+s,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function _t(){const s=++m;try{const r=await fetch("/api/strategies/custom",{headers:Nt()}).then(function(W){return W.json()});if(s!==m)return;jt.value=r&&r.data&&r.data.customs||[]}catch(r){console.error("[i3b] 加载自定义策略失败:",r)}}async function pa(){if(!Et.value.trim()){et.value="请描述策略思路";return}ta.value=!0,et.value="";try{const s=await fetch("/api/strategies/custom",{method:"POST",headers:Nt(),body:JSON.stringify({name:At.value.trim()||"自定义策略",prompt:Et.value})}).then(function(r){return r.json()});if(s&&s.detail){et.value=String(s.detail);return}s&&s.data&&(bt.value=s.data.code||"",et.value="AI 代写成功: "+s.data.sid+(s.data.api_errors&&s.data.api_errors.length?" (API 告警 "+s.data.api_errors.length+" 条)":" (校验通过)"),await _t())}catch(s){console.error("[i3b] AI 代写失败:",s),et.value="AI 代写失败: "+s.message}finally{ta.value=!1}}async function Xt(){if(it.value)try{const s=await fetch("/api/strategies/custom/"+it.value+"/code",{headers:Nt()}).then(function(r){return r.json()});s&&s.data&&(bt.value=s.data.code||"",et.value="")}catch(s){console.error("[i3b] 读取代码失败:",s)}}async function fa(){if(!it.value){et.value="请先选择自定义策略";return}Bt.value=!0,et.value="";try{const s=await fetch("/api/strategies/custom/"+it.value+"/backtest",{method:"POST",headers:Nt(),body:"{}"}).then(function(r){return r.json()});if(s&&s.detail){et.value=String(s.detail);return}s&&s.data&&(It.value=s.data,et.value="回测完成")}catch(s){console.error("[i3b] 回测失败:",s),et.value="回测失败: "+s.message}finally{Bt.value=!1}}async function Zt(){if(!it.value){et.value="请先选择自定义策略";return}dt.value=!0,et.value="";try{const s=await fetch("/api/strategies/custom/"+it.value+"/ai-optimize",{method:"POST",headers:Nt(),body:JSON.stringify({backtest:It.value})}).then(function(r){return r.json()});if(s&&s.detail){et.value=String(s.detail);return}s&&s.data&&(bt.value=s.data.code||"",et.value="AI 优化完成"+(s.data.api_errors&&s.data.api_errors.length?" (API 告警 "+s.data.api_errors.length+" 条)":" (校验通过)"))}catch(s){console.error("[i3b] AI 优化失败:",s),et.value="AI 优化失败: "+s.message}finally{dt.value=!1}}function aa(){if(bt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(bt.value).then(function(){et.value="代码已复制"});else{const s=document.createElement("textarea");s.value=bt.value,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),et.value="代码已复制"}}const Kt=Vue.ref([]),sa=Vue.ref(!1),Vt=Vue.ref(!1),da=Vue.ref(30);async function O(){const s=++m;sa.value=!0,Vt.value=!1;try{const r=window.__quantModules&&window.__quantModules.core||{},W=typeof r.authHeaders=="function"?r.authHeaders():{},we=await fetch("/api/backtest/history?days="+da.value,{headers:W}).then(function(he){return he.json()});if(s!==m)return;Kt.value=we&&we.data||[]}catch(r){console.error("[backtest] 回测历史加载失败:",r),Vt.value=!0}finally{s===m&&(sa.value=!1)}}const fe=Vue.ref([]),Oe=Vue.ref(!1),Ce=Vue.ref(!1),tt=Vue.ref(""),Qe=Vue.ref([]),ft=Vue.ref(""),Wt=Vue.ref([]),Jt=Vue.ref(!1),la=Vue.ref(!1),Ut={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function ea(s){return Ut[s]||s||"—"}function Sa(s){y&&y.navigateTo&&y.navigateTo("shortterm",s)}function ga(){y.currentSubPage.value="research-history",Ot()}async function Ot(){const s=++m;Oe.value=!0,Ce.value=!1;try{const r=window.__quantModules&&window.__quantModules.core||{},W=typeof r.authHeaders=="function"?r.authHeaders():{},we=tt.value?"?type="+encodeURIComponent(tt.value):"",he=await fetch("/api/strategies/research-history"+we,{headers:W}).then(function(ot){return ot.json()});if(s!==m)return;fe.value=he&&he.items||[]}catch(r){console.error("[research-history] 加载失败:",r),Ce.value=!0}finally{s===m&&(Oe.value=!1)}}async function Qt(){const s=++m;la.value=!0;try{const r=window.__quantModules&&window.__quantModules.core||{},W=typeof r.authHeaders=="function"?r.authHeaders():{},we=tt.value?"?type="+encodeURIComponent(tt.value):"",he=await fetch("/api/strategies/research-history/export"+we,{headers:W});if(!he.ok)throw new Error("HTTP "+he.status);const ot=await he.blob(),Xe=URL.createObjectURL(ot),nt=document.createElement("a");nt.href=Xe,nt.download="research_history.csv",document.body.appendChild(nt),nt.click(),document.body.removeChild(nt),URL.revokeObjectURL(Xe)}catch(r){console.error("[research-history] 导出失败:",r)}finally{s===m&&(la.value=!1)}}function ua(s){const r=Qe.value.indexOf(s);r>=0?Qe.value.splice(r,1):Qe.value.length<10&&Qe.value.push(s)}function Ca(s){ft.value=ft.value===s?"":s}async function qa(){const s=++m,r=Qe.value;if(!(r.length<2)){Jt.value=!0;try{const W=window.__quantModules&&window.__quantModules.core||{},we=typeof W.authHeaders=="function"?W.authHeaders():{},he=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},we),body:JSON.stringify({ids:r})}).then(function(ot){return ot.json()});Wt.value=he&&he.items||[]}catch(W){console.error("[research-history] 对比失败:",W)}finally{s===m&&(Jt.value=!1)}}}async function Ea(s){try{const r=window.__quantModules&&window.__quantModules.core||{},W=typeof r.authHeaders=="function"?r.authHeaders():{},we=await fetch("/api/strategies/research-history/"+s,{method:"DELETE",headers:W}).then(function(he){return he.json()});if(we&&we.deleted){fe.value=fe.value.filter(function(ot){return ot.id!==s});const he=Qe.value.indexOf(s);he>=0&&Qe.value.splice(he,1)}}catch(r){console.error("[research-history] 删除失败:",r)}}return{...y,strategyManageMode:c,openStrategyManage:g,btHistory:Kt,btHistoryLoading:sa,btHistoryError:Vt,btHistoryDays:da,loadBtHistory:O,researchHistory:fe,researchHistoryLoading:Oe,researchHistoryError:Ce,researchHistoryType:tt,researchHistorySelected:Qe,researchDetailId:ft,researchCompareRows:Wt,researchCompareLoading:Jt,researchTypeLabel:ea,goShortterm:Sa,openResearchHistory:ga,loadResearchHistory:Ot,researchExportLoading:la,exportResearchHistory:Qt,toggleResearchSelect:ua,toggleResearchDetail:Ca,runResearchCompare:qa,deleteResearchHistory:Ea,marketReviews:o,marketReviewLoading:q,marketReviewError:i,selectedReviewDate:D,marketReviewDetail:k,marketReviewDetailLoading:x,marketReviewDetailError:M,loadMarketReviews:w,openMarketReview:n,backToMarketReviewList:l,loadMarketReviewDetail:v,marketReviewChgClass:V,marketReviewChgText:A,marketReviewSrcEntries:G,strategies:ee,strategiesLoading:te,strategiesError:N,strategiesErrorText:P,strategiesWarn:L,activeStrategyId:z,activeStrategy:j,paramValues:X,strategyRunning:J,ptradeCode:H,strategyRuns:F,savingProfile:b,variantSaving:R,loadStrategies:Y,onStrategyChange:Q,runActiveStrategy:Te,exportActivePtradeCode:ie,copyPtradeCode:$,profiles:I,profileSelect:f,profileName:_,loadProfiles:C,saveProfile:h,applyProfile:Z,deleteProfile:pe,govEnabled:se,govSchedule:T,govUniverse:d,govRunning:S,lastHoldings:u,loadGov:ge,updateGov:Me,runOnceActive:je,openLastHoldings:qe,cloneStrategy:ke,govShowCalendar:B,factorKey:ue,factorIcLoading:Ee,factorLayerLoading:ze,factorIcReport:$e,factorLayerResult:mt,factorOptions:Ze,runFactorIc:ct,runFactorLayer:at,factorDetail:Ge,factorDetailLoading:pt,runFactorDetail:St,variants:gt,variantSelected:Ye,variantSpec:ht,specFields:Tt,aiCode:zt,aiCodeLoading:qt,variantBusy:kt,variantMsg:E,loadVariants:Ne,cloneNewStrategy:Be,selectVariant:K,loadVariantSpec:ne,saveVariantSpec:He,runVariantOnce:Je,genVariantAiCode:Ue,copyVariantCode:yt,customName:At,customPrompt:Et,customs:jt,customSelected:it,customCode:bt,customMsg:et,customBtResult:It,customGenLoading:ta,customBtLoading:Bt,customOptLoading:dt,loadCustoms:_t,genCustomCode:pa,loadCustomCode:Xt,runCustomBacktest:fa,runCustomOptimize:Zt,copyCustomCode:aa,sweepGrid:We,sweepResult:st,sweepMessage:oe,sweepLoading:_e,sweepStability:Pe,runSweep:Ie}}}})();(function(){const{inject:a,ref:e,onMounted:p,computed:t,nextTick:y}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="shortterm-split">
                        <!-- V5.15 (F7): 左列表 — 最近交易日核心指标摘要 (默认选中最近一天) -->
                        <div class="shortterm-date-list">
                            <div class="shortterm-date-list-head">
                                <span>复盘日历</span>
                                <el-button size="small" text @click="loadDateList" aria-label="刷新日期列表">🔄</el-button>
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
                </div>`,setup(){const b=a("qcState");if(!b)return{};const R=b.currentPage,m=b.currentSubPage,c=e(""),g=e(null),o=e(!1),q=e(!1),i=e("数据加载失败"),D=e("请检查服务后重试"),k=e(null),x=e(null),M=e(!1),w=e(!1),n=e("数据加载失败"),l=e("请检查服务后重试"),v=e(null),V=e(1),A=50,G=t(function(){const O=x.value||[];if(O.length<=200)return O;const fe=(V.value-1)*A;return O.slice(fe,fe+A)}),ee=e(null),te=e(!1),N=e(!1),P=e("数据加载失败"),L=e("请检查服务后重试"),z=e([]),X=e(!1);async function J(){X.value=!0;try{const O=await Te("/api/shortterm/dates/summary",!1);O&&O.success&&(z.value=O.dates||[])}catch{z.value=[]}finally{X.value=!1}}function de(O){O!==c.value&&(c.value=O,Ue(!0))}const H=e("行业资金流"),F=e("今日"),I=e(""),f=e(null),_=e(1),se=e(!1),B=e(!1),T=e("数据加载失败"),d=e("请检查服务后重试"),S=e(""),u=e(null),j=e(!1),ae=e(null),Y=e(!1),Q=e(!1),C=e(""),h=e(""),Z=e(!1);function pe(){const O=localStorage.getItem("quant_token")||"";return O?{Authorization:"Bearer "+O,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const ge={},Me=[],je=50,qe=60*1e3;let ke=0,le=0,be=0;function Te(O,fe){const Oe=Date.now(),Ce=ge[O];return!fe&&Ce&&Oe-Ce.ts<qe?Promise.resolve(Ce.data):fetch(O,{headers:pe()}).then(function(tt){return tt.json()}).then(function(tt){if(ge[O]||Me.push(O),ge[O]={ts:Date.now(),data:tt},Me.length>je){const Qe=Me.shift();delete ge[Qe]}return tt})}async function ie(O){const fe=++ke;o.value=!0,q.value=!1;try{const Oe="/api/shortterm/pools"+(c.value?"?date="+c.value:""),Ce=await Te(Oe,O);if(fe!==ke)return;Ce&&Ce.success?(g.value=Ce,y(ne)):Ce&&Ce.detail?(q.value=!0,i.value=String(Ce.detail),D.value="请先登录后再查看"):(q.value=!0,i.value="数据加载失败",D.value="请检查服务后重试")}catch{if(fe!==ke)return;q.value=!0,i.value="数据加载失败",D.value="请检查服务后重试"}finally{fe===ke&&(o.value=!1)}}async function $(O){const fe=++ke;M.value=!0,w.value=!1;try{const Oe="/api/shortterm/lhb"+(c.value?"?date="+c.value:""),Ce=await Te(Oe,O);if(fe!==ke)return;Ce&&Ce.success?(x.value=Array.isArray(Ce.rows)?Ce.rows:null,v.value=Ce.available===!1&&Ce.reason||null,V.value=1):Ce&&Ce.detail?(w.value=!0,n.value=String(Ce.detail),l.value="请先登录后再查看"):(w.value=!0,n.value="数据加载失败",l.value="请检查服务后重试")}catch{if(fe!==ke)return;w.value=!0,n.value="数据加载失败",l.value="请检查服务后重试"}finally{fe===ke&&(M.value=!1)}}const ue=t(function(){const O=g.value&&g.value.ladder&&g.value.ladder.tiers;return!O||!Object.keys(O).length?"—":Object.keys(O).sort(function(fe,Oe){return fe-Oe}).map(function(fe){return fe+"板:"+O[fe]}).join(" ")}),Ee=t(function(){const O=g.value&&g.value.zt||[];return k.value?O.filter(function(fe){return fe.boards===k.value}):O});function ze(){k.value=null}const $e=t(function(){const O=ee.value&&ee.value.emotion&&ee.value.emotion.money_effect;return!O||!O.available?"—":O.source==="settled"?"定稿记录":O.source==="realtime"?O.partial?"实时(样本不全)":"实时":"—"}),mt=t(function(){const O=ee.value&&ee.value.emotion&&ee.value.emotion.promotion&&ee.value.emotion.promotion.tiers&&ee.value.emotion.promotion.tiers["1进2"];return O?O.rate:null}),Ze=t(function(){const O=ee.value&&ee.value.emotion&&ee.value.emotion.sentiment_cycle;return O&&O.available&&O.current_score!=null?O.current_score.toFixed(2):"—"}),We=t(function(){const O=ee.value&&ee.value.emotion&&ee.value.emotion.sentiment_cycle;return!O||!O.available?"—":(O.trend||"—")+(O.day_n!=null?" · 距低谷"+O.day_n+"天":"")});t(function(){const O=ee.value&&ee.value.emotion;if(!O)return"";const fe=[];for(const Oe of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Ce=O[Oe];Ce&&Ce.available===!1&&Ce.reason&&fe.push(String(Ce.reason).replace(/^[[^]]*]s*/,""))}return fe.join("；")}),t(function(){const O=ee.value&&ee.value.facts;if(!O)return"";const fe=[];for(const Oe of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Ce=O[Oe];Ce&&Ce.available===!1&&Ce.reason&&fe.push(String(Ce.reason).replace(/^[[^]]*]s*/,""))}return fe.join("；")});function st(O){return O==null||isNaN(O)?"—":(O*100).toFixed(0)+"%"}function oe(O,fe){return O==null?"—":(typeof O=="number"?Math.round(O*100)/100:O)+(fe||"")}function _e(O){return"tag-chip mr-4"}function Pe(O){return O==null?"":O>0?"is-rise":O<0?"is-fall":""}function Ie(O){return O==="机构"?"is-institution":O==="游资"?"is-hotmoney":O==="主力"?"is-main":""}const ct=t(function(){const O=ee.value&&ee.value.session_status;if(!O)return"—";const fe=ee.value.date;return fe===O.latest_session&&O.settled?"✅ 已收盘":fe===O.today&&O.is_trade_day&&!O.settled?"⏳ 盘中 · 未收盘":"📅 历史交易日"}),at=t(function(){const O=ee.value&&ee.value.session_status;if(!O)return"";const fe=ee.value.date;return fe===O.latest_session&&O.settled?"is-institution":fe===O.today&&O.is_trade_day&&!O.settled?"is-main":""});function Ge(O){O&&O.ts_code&&b&&b.showStockDetail&&b.showStockDetail(O.ts_code)}const pt=t(function(){return(x.value||[]).filter(function(O){return(O.tags||[]).indexOf("机构")>=0}).reduce(function(O,fe){return O+(fe.net_buy||0)},0)}),St=t(function(){return(x.value||[]).filter(function(O){return(O.tags||[]).indexOf("游资")>=0}).length}),gt=t(function(){const O=(f.value||[]).filter(function(fe){return fe.main_net_inflow!=null});return O.length?O.reduce(function(fe,Oe){return fe.main_net_inflow>=Oe.main_net_inflow?fe:Oe}):null}),Ye=t(function(){const O=gt.value;return O?O.name:"—"}),ht=t(function(){const O=gt.value;return O?O.main_net_inflow:null}),Tt=t(function(){return S.value||"东财"}),zt=t(function(){const O=(I.value||"").trim(),fe=f.value||[];return O?fe.filter(function(Oe){return Oe.name&&String(Oe.name).indexOf(O)>=0}):fe});function qt(O){I.value=O||"",b&&b.currentSubPage&&(b.currentSubPage.value="sector")}const kt=t(function(){const O=zt.value;if(O.length<=200)return O;const fe=(_.value-1)*A;return O.slice(fe,fe+A)}),E=["09:25","09:35","10:00","11:30","14:00","15:00"],re=t(function(){const O={};return(ae.value||[]).forEach(function(fe){O[fe.slot]=!0}),O});function xe(O){return re.value[O]?"is-done":O===De.value?"is-current":"is-empty"}const De=t(function(){const O=new Date,fe=(O.getHours()<10?"0":"")+O.getHours(),Oe=(O.getMinutes()<10?"0":"")+O.getMinutes(),Ce=fe+":"+Oe;for(var tt=0;tt<E.length;tt++)if(Ce===E[tt])return E[tt];for(var Qe=0;Qe<E.length-1;Qe++){var ft=E[Qe],Wt=new Date;Wt.setHours(Number(ft.split(":")[0]),Number(ft.split(":")[1]),0,0);var Jt=new Date(Wt.getTime()+8*6e4);if(O>=Wt&&O<=Jt)return ft}return""}),Ne=t(function(){const O=new Date,fe=De.value;if(fe)return"当前处于快照窗口 "+fe+" (前后 8 分钟) — 可采集";const Oe=O.getHours(),Ce=O.getMinutes();let tt="";for(let Qe=0;Qe<E.length;Qe++){const ft=E[Qe].split(":");if(Number(ft[0])>Oe||Number(ft[0])===Oe&&Number(ft[1])>Ce){tt=E[Qe];break}}return tt?"下一快照时点 "+tt+" — 非窗口期不可采集":"今日快照时点已全部结束"}),Be=e(""),K=e("info");function ne(){const O=g.value&&g.value.ladder&&g.value.ladder.tiers;if(!O||!Object.keys(O).length)return;const fe=window.__quantModules&&window.__quantModules.charts;if(!fe||!fe.renderSimpleChartTo)return;const Oe=k.value,Ce=fe.renderSimpleChartTo("shorttermLadderChart",function(){const tt=Object.keys(O).sort(function(Qe,ft){return Number(Qe)-Number(ft)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:tt.map(function(Qe){return Qe+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(Qe){return Oe&&Number(tt[Qe.dataIndex])===Oe?"var(--color-accent)":"var(--chart-split)"}},data:tt.map(function(Qe){return O[Qe]})}]}},{key:"shortterm-ladder"});Ce&&Ce.off&&(Ce.off("click"),Ce.on("click",function(tt){if(!tt||!tt.name)return;const Qe=parseInt(tt.name,10);isNaN(Qe)||(k.value=k.value===Qe?null:Qe)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ne);function He(O){if(O==null)return"—";const fe=Math.abs(O);return fe>=1e8?(O/1e8).toFixed(2)+"亿":fe>=1e4?(O/1e4).toFixed(0)+"万":O.toFixed(0)}function Je(O){return O==null?"—":(O>=0?"+":"")+O.toFixed(2)+"%"}async function Ue(O){const fe=++le;te.value=!0,N.value=!1;try{const Oe="/api/shortterm/overview"+(c.value?"?date="+c.value:""),Ce=await Te(Oe,O);if(fe!==le)return;Ce&&Ce.success?ee.value=Ce:Ce&&Ce.detail?(N.value=!0,P.value=String(Ce.detail),L.value="请先登录后再查看"):(N.value=!0,P.value="数据加载失败",L.value="请检查服务后重试")}catch{if(fe!==le)return;N.value=!0,P.value="数据加载失败",L.value="请检查服务后重试"}finally{fe===le&&(te.value=!1)}}async function yt(O){const fe=++ke;se.value=!0,B.value=!1;try{const Oe="/api/shortterm/sector-flow?indicator="+encodeURIComponent(F.value)+"&sector_type="+encodeURIComponent(H.value),Ce=await Te(Oe,O);if(fe!==ke)return;Ce&&Ce.success&&Ce.available?(f.value=Ce.rows||[],S.value=Ce.source||(Ce.note?"同花顺":"东财"),_.value=1):Ce&&Ce.reason?(B.value=!0,T.value="数据加载失败",d.value=String(Ce.reason).replace(/^\[⚠️[^\]]*\]\s*/,"")):Ce&&Ce.detail?(B.value=!0,T.value=String(Ce.detail),d.value="请先登录后再查看"):(B.value=!0,T.value="数据加载失败",d.value="请检查服务后重试")}catch{if(fe!==ke)return;B.value=!0,T.value="数据加载失败",d.value="请检查服务后重试"}finally{fe===ke&&(se.value=!1)}}async function At(O){const fe=++be;try{const Oe="/api/shortterm/review"+(c.value?"?date="+c.value:""),Ce=await Te(Oe,O);if(fe!==be)return;Ce&&Ce.success&&(u.value=Ce.review||null)}catch{}}async function Et(){j.value=!0;try{const O="/api/shortterm/review"+(c.value?"?date="+c.value:""),fe=await fetch(O,{method:"POST",headers:pe()}).then(function(Oe){return Oe.json()});fe&&fe.success&&(u.value=fe,ge[O]={ts:Date.now(),data:fe})}catch{}finally{j.value=!1}}async function jt(){const O=C.value.trim();if(O){Z.value=!0,h.value="";try{const Oe=await fetch("/api/shortterm/review/chat",{method:"POST",headers:pe(),body:JSON.stringify({date:overviewDate.value,question:O})}).then(function(Ce){return Ce.json()});h.value=Oe.answer||"[无回复]"}catch{h.value="[⚠️ 发送失败]"}finally{Z.value=!1}}}async function it(O){const fe=++ke;Y.value=!0;try{const Oe="/api/shortterm/intraday"+(c.value?"?date="+c.value:""),Ce=await Te(Oe,O);if(fe!==ke)return;Ce&&Ce.success&&(ae.value=Ce.snapshots||[])}catch{}finally{fe===ke&&(Y.value=!1)}}async function bt(){Q.value=!0;try{const O="/api/shortterm/intraday/snapshot"+(c.value?"?date="+c.value:""),fe=await fetch(O,{method:"POST",headers:pe()}).then(function(Oe){return Oe.json()});fe&&fe.success?(fe.accepted?(Be.value="✅ 已采集 "+fe.slot+" 快照"+(fe.pools_available&&!fe.pools_available.zt?" (池源部分不可用)":""),K.value="ok"):(Be.value="⏱ "+(fe.reason||"非快照时点"),K.value="warn"),it()):Be.value="采集失败, 请稍后重试"}catch{Be.value="采集失败, 请稍后重试"}finally{Q.value=!1}}function et(){return Te("/api/shortterm/latest-session",!1).then(function(O){O&&O.date&&(c.value||(c.value=O.date))}).catch(function(){})}function It(){const O=m.value;O==="ztpool"?ie():O==="lhb"?$():O==="overview"?(Ue(),At()):O==="sector"?yt():O==="intraday"&&it()}function ta(){const O=c.value?"?date="+c.value:"";["/api/shortterm/overview"+O,"/api/shortterm/pools"+O,"/api/shortterm/lhb"+O].forEach(function(Oe){Te(Oe,!1).catch(function(){})})}function Bt(){const O=m.value;O==="ztpool"?ie(!0):O==="lhb"?$(!0):O==="overview"?(Ue(!0),At(!0)):O==="sector"?yt(!0):O==="intraday"&&it(!0)}p(function(){et(),It(),ta(),Kt(),J()}),Vue.watch(function(){return m.value},function(O){It(),O==="overview"&&Kt()});const dt=window.QuantOnboarding,Nt=e(!1),_t=e(dt?dt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),pa=t(function(){return dt&&dt.shorttermTourSteps()[_t.value.stepIndex]||{key:"",title:"",desc:""}}),Xt=t(function(){return dt?dt.shorttermTourProgress(_t.value):{done:0,total:3,pct:0}}),fa=t(function(){return _t.value.stepIndex>=2});function Zt(){if(dt){var O=null;try{O=localStorage.getItem("qc_shortterm_tour")}catch{}if(O){var fe=dt.parseState(O);fe&&(_t.value=fe)}}}function aa(){if(dt){var O=JSON.stringify(_t.value);try{localStorage.setItem("qc_shortterm_tour",O)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:O}})}).catch(function(){})}catch{}}}function Kt(){window.__quantGuideModalsEnabled===!0&&dt&&m.value==="overview"&&(Zt(),dt.shorttermTourShouldShow(_t.value)&&(Nt.value=!0))}function sa(){_t.value=dt.shorttermTourNext(_t.value),aa()}function Vt(){_t.value=dt.shorttermTourComplete(_t.value),aa(),Nt.value=!1}function da(){_t.value=dt.shorttermTourDismiss(_t.value),aa(),Nt.value=!1}return{currentPage:R,currentSubPage:m,shortDate:c,pools:g,poolLoading:o,poolError:q,ztBoardFilter:k,filteredZt:Ee,clearBoardFilter:ze,lhbRows:x,lhbLoading:M,lhbError:w,lhbReason:v,lhbPageRows:G,lhbPage:V,overview:ee,overviewLoading:te,overviewError:N,dateList:z,dateListLoading:X,loadDateList:J,pickDate:de,sectorType:H,sectorIndicator:F,sectorKeyword:I,sectorRows:f,filteredSectorRows:zt,sectorPageRows:kt,sectorPage:_,sectorLoading:se,sectorError:B,sectorFlowSource:S,PAGE_SIZE:A,gotoSector:qt,review:u,reviewRunning:j,intradaySnapshots:ae,intradayLoading:Y,intradayCollecting:Q,intradaySlots:E,intradayMsg:Be,slotClass:xe,intradayStatus:Ne,chatQuestion:C,chatAnswer:h,chatLoading:Z,loadPools:ie,loadLhb:$,loadOverview:Ue,loadSectorFlow:yt,loadReview:At,runReview:Et,sendChat:jt,loadIntraday:it,collectSnapshot:bt,refreshCurrent:Bt,ladderText:ue,fmtAmount:He,fmtPct:Je,riseFall:Pe,tagClass:Ie,openStock:Ge,lhbInstitutionNetBuy:pt,lhbHotMoneyCount:St,sectorTopName:Ye,sectorTopInflow:ht,sectorSource:Tt,moneySource:$e,promotion1to2:mt,cycleScore:Ze,cycleTrend:We,pct:st,fmtCond:oe,verdictClass:_e,sessionStatusText:ct,sessionStatusClass:at,shorttermTourVisible:Nt,shorttermTourState:_t,shorttermTourStep:pa,shorttermTourProg:Xt,shorttermTourIsLast:fa,shorttermTourNext:sa,shorttermTourFinish:Vt,shorttermTourSkip:da}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(m,c,g,o,q){var i=g>0?g:1,D=typeof q=="number"&&q>=0?q:a,k=Math.max(0,o),x=Math.max(0,m),M=Math.max(0,c),w=Math.max(0,Math.floor(x/i)-D),n=Math.min(k,Math.ceil((x+M)/i)+D);return{startIndex:w,endIndex:n}}function p(m,c){return Math.max(0,m||0)*(c>0?c:0)}function t(m,c,g,o,q){var i=m||[],D=e(c,g,o,i.length,q),k=i.slice(D.startIndex,D.endIndex);return{visible:k,startIndex:D.startIndex,endIndex:D.endIndex,offsetY:D.startIndex*(o>0?o:1),totalHeight:p(i.length,o)}}function y(m,c){if(m){if(m.code!=null)return m.code;if(m.id!=null)return m.id;if(m.ts_code!=null)return m.ts_code}return c}function b(m,c,g){var o=m||[];if(!o.length)return c>0?c:1;for(var q=Math.min(g||50,o.length),i=0,D=0,k=0;k<q;k++){var x=o[k]&&o[k].rowHeight;typeof x=="number"&&x>0&&(i+=x,D++)}return D?i/D:c>0?c:1}function R(m,c,g,o,q){var i=e(m,c,g,o,q),D=Math.max(0,o);return D?(i.endIndex-i.startIndex)/D:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:p,sliceVisible:t,getRowKey:y,estimateDynamicRowHeight:b,renderedRatio:R}});(function(){const{ref:a,computed:e,onMounted:p,onBeforeUnmount:t}=Vue,y=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:y.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(b){const R=a(null),m=a(0),c=a(400),g=e(()=>(y.computeVisibleRange||function(l,v,V,A,G){const ee=V>0?V:1,te=G>=0?G:8,N=Math.max(0,A);return{startIndex:Math.max(0,Math.floor(l/ee)-te),endIndex:Math.min(N,Math.ceil((l+v)/ee)+te)}})(m.value,c.value,b.rowHeight,b.items.length,b.buffer)),o=e(()=>b.items.length*b.rowHeight),q=e(()=>g.value.startIndex),i=e(()=>g.value.endIndex),D=e(()=>b.items.slice(q.value,i.value));function k(){R.value&&(m.value=R.value.scrollTop)}function x(){R.value&&(c.value=R.value.clientHeight||400)}function M(n,l){return y.getRowKey?y.getRowKey(n,l):n&&n.code!=null?n.code:n&&n.id!=null?n.id:l}let w=null;return p(()=>{x(),R.value&&typeof ResizeObserver<"u"&&(w=new ResizeObserver(()=>x()),w.observe(R.value))}),t(()=>{w&&w.disconnect()}),{scrollEl:R,totalHeight:o,startIndex:q,endIndex:i,visibleItems:D,onScroll:k,keyOf:M}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,p=60,t=500,y=10,b=88,R=350;function m(l,v,V,A,G){G=G||{};var ee=typeof G.threshold=="number"?G.threshold:a,te=typeof G.bias=="number"?G.bias:e,N=V-l,P=A-v;return Math.abs(N)<ee||Math.abs(N)<Math.abs(P)*te?"none":N<0?"left":"right"}function c(l,v,V){V=V||{};var A=typeof V.threshold=="number"?V.threshold:p;return v-l>=A}function g(l,v){v=v||{};var V=typeof v.threshold=="number"?v.threshold:t;return l>=V}var o=!1;function q(l,v){return l&&typeof l.closest=="function"?l.closest(v):null}function i(l){if(!l)return"";var v=l.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(v){var V=v.getAttribute&&v.getAttribute("data-copy-code");if(V)return V.trim();var A=(v.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(A)return A[0]}var G=l.getAttribute&&l.getAttribute("data-copy-code");return G?G.trim():""}function D(l){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(function(){return!0}).catch(function(){return k(l)}):Promise.resolve(k(l))}function k(l){try{var v=document.createElement("textarea");return v.value=l,v.style.position="fixed",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),document.body.removeChild(v),!0}catch{return!1}}function x(l){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(l)}function M(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function w(){var l=null,v=null,V=null;function A(){v&&(v.timer&&clearTimeout(v.timer),v=null)}function G(X){V={el:X,until:Date.now()+R}}function ee(X){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(J){J!==X&&J.classList.remove("swipe-open")}),l&&l.el!==X&&(l=null)}function te(X){var J=X.touches&&X.touches[0];if(J){var de=q(X.target,".swipe-reveal");de&&(l={el:de,x:J.clientX,y:J.clientY,moved:!1},X.stopPropagation());var H=q(X.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");H&&(A(),v={el:H,x:J.clientX,y:J.clientY,timer:setTimeout(function(){var F=i(H);v=null,F&&(G(H),D(F).then(function(){M(),x("已复制代码 "+F)}))},t)})}}function N(X){if(l){var J=X.touches&&X.touches[0];if(J){var de=J.clientX-l.x,H=J.clientY-l.y;if(Math.abs(de)>8&&Math.abs(de)>Math.abs(H)*1.2){X.cancelable&&X.preventDefault(),l.moved=!0;var F=l.el.querySelector(".swipe-reveal-main")||l.el,I=Math.max(-b,Math.min(0,de));F.style.transition="none",F.style.transform="translateX("+I+"px)",X.stopPropagation()}if(v){var f=J.clientX-v.x,_=J.clientY-v.y;(Math.abs(f)>y||Math.abs(_)>y)&&A()}}}}function P(X){if(A(),!!l){var J=l.el,de=X.changedTouches&&X.changedTouches[0],H=l.x,F=l.y,I="none";de&&(I=m(H,F,de.clientX,de.clientY));var f=l.moved;l=null;var _=J.querySelector(".swipe-reveal-main")||J;_.style.transform="",_.style.transition="",I==="left"?(ee(J),J.classList.add("swipe-open"),G(J)):(I==="right"||f)&&J.classList.remove("swipe-open"),X.stopPropagation()}}function L(){A(),l=null}function z(X){if(V&&Date.now()<V.until){var J=V.el.contains(X.target)||X.target===V.el,de=X.target.closest&&X.target.closest(".swipe-reveal-actions");J&&!de&&(X.preventDefault(),X.stopPropagation(),V=null)}}document.addEventListener("touchstart",te,!0),document.addEventListener("touchmove",N,!0),document.addEventListener("touchend",P,!0),document.addEventListener("touchcancel",L,!0),document.addEventListener("click",z,!0)}function n(){o||typeof document>"u"||(o=!0,w())}return{judgeSwipe:m,judgePullToRefresh:c,judgeLongPress:g,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:p,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:y,REVEAL_WIDTH:b,initGestures:n,_codeFromRow:i}});(function(){const a={empty:{icon:"📭",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"⚠",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"📡",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function p(b){return a[b]||a.empty}function t(){const b=[];for(const R of e){const m=a[R];m.title||b.push(R+".title"),R!=="loading"&&!m.icon&&b.push(R+".icon"),typeof m.retry!="boolean"&&b.push(R+".retry"),typeof m.skeleton!="boolean"&&b.push(R+".skeleton")}return{ok:b.length===0,errors:b}}const y={VARIANTS:a,KEYS:e,resolve:p,validate:t};typeof window<"u"&&(window.QuantStatePanel=y),typeof Re<"u"&&Re.exports&&(Re.exports=y)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(p){const t=a(()=>typeof e.resolve=="function"?e.resolve(p.type):{}),y=a(()=>p.icon||t.value.icon||""),b=a(()=>p.title||t.value.title||""),R=a(()=>p.desc||t.value.desc||""),m=a(()=>!!t.value.retry),c=a(()=>/^[a-z][a-z0-9-]*$/.test(String(y.value||"")));return{icon:y,title:b,desc:R,retryable:m,isIconName:c}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(l){return String(l||"").trim().toLowerCase()}function e(l,v){if(!l)return!0;const V=l.split(/\s+/).filter(Boolean);if(!V.length)return!0;const A=String(v||"").toLowerCase();return V.every(function(G){return A.indexOf(G)!==-1})}function p(){return{visible:!1,query:"",activeIndex:0}}function t(l,v){return v===void 0&&(v=!l.visible),l.visible=v,v&&(l.query="",l.activeIndex=0),l.visible}function y(l,v,V){const A=a(l);if(!v||!v.length)return[];const G=[];return v.forEach(function(ee){const te=e(A,ee.name)||e(A,ee.key),N=(ee.subPages||[]).filter(function(P){const L=V&&V[P]||P;return e(A,L)||e(A,P)});te&&G.push({type:"menu",menuKey:ee.key,subPage:ee.subPages&&ee.subPages[0]||"",label:ee.name,subLabel:"页面",icon:ee.icon||"file-text"}),N.forEach(function(P){G.push({type:"menu",menuKey:ee.key,subPage:P,label:V&&V[P]||P,subLabel:ee.name,icon:ee.icon||"file-text"})})}),G.slice(0,8)}function b(l,v){const V=a(l);return!v||!v.length?[]:v.filter(function(A){return!!(!V||e(V,A.label)||e(V,A.key)||A.keywords&&e(V,A.keywords))}).slice(0,8)}function R(l,v){const V=a(l);return!V||!v||!v.length?[]:v.filter(function(A){return e(V,A.code)||e(V,A.name)}).slice(0,8).map(function(A){return{type:"stock",code:A.code,name:A.name,label:A.name,subLabel:A.code,icon:"trending-up"}})}function m(l,v,V){const A=[],G=[];return V&&V.length&&(A.push({key:"stock",label:"股票",items:V}),G.push.apply(G,V)),l&&l.length&&(A.push({key:"menu",label:"菜单",items:l}),G.push.apply(G,l)),v&&v.length&&(A.push({key:"command",label:"指令",items:v}),G.push.apply(G,v)),{groups:A,flat:G}}function c(l,v,V){if(v<=0)return 0;const A=((l||0)+V)%v;return A<0?v-1:A}function g(l,v,V,A){const G=y(l,v,V).map(function(te){return{type:"menu",menuKey:te.menuKey,subPage:te.subPage,label:te.label,subLabel:te.subLabel,icon:te.icon,iconName:te.icon,value:te.icon+" "+te.label+" · "+te.subLabel}}),ee=b(l,A||[]).map(function(te){return{type:"command",key:te.key,label:te.label,icon:te.icon,iconName:te.icon,subLabel:"指令",value:te.icon+" "+te.label}});return G.concat(ee)}function o(l){return l?l.type==="menu"?{action:"menu",menuKey:l.menuKey,subPage:l.subPage}:l.type==="command"?{action:"command",key:l.key}:l.type==="sector"?{action:"sector",name:l.name}:l.type==="strategy"?{action:"strategy",id:l.id,name:l.name}:l.type==="stock"||l.code&&l.name?{action:"stock",code:l.code,name:l.name}:null:null}const q=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var i={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function D(l){if(!l||typeof l!="string")return null;var v=l.split("+").map(function(G){return G.trim()}).filter(Boolean);if(!v.length)return null;var V=v.pop().toLowerCase();if(!V)return null;var A={ctrl:!1,alt:!1,shift:!1,meta:!1};return v.forEach(function(G){var ee=G.toLowerCase();i.ctrl.indexOf(ee)!==-1?A.ctrl=!0:i.alt.indexOf(ee)!==-1?A.alt=!0:i.shift.indexOf(ee)!==-1?A.shift=!0:i.meta.indexOf(ee)!==-1&&(A.meta=!0)}),{ctrl:A.ctrl,alt:A.alt,shift:A.shift,meta:A.meta,key:V}}function k(l,v){if(!l||!v)return!1;var V=String(v.key||v.code||"").toLowerCase();return l.key!==V?!1:l.ctrl===!!v.ctrlKey&&l.alt===!!v.altKey&&l.shift===!!v.shiftKey&&l.meta===!!v.metaKey}function x(l){if(!l)return"";var v=[];return l.ctrl&&v.push("Ctrl"),l.alt&&v.push("Alt"),l.shift&&v.push("Shift"),l.meta&&v.push("Meta"),v.push(l.key.toUpperCase()),v.join("+")}function M(){var l={};return{register:function(v){if(!v||!v.key)throw new Error("命令 key 必填");if(l[v.key])throw new Error("命令重复注册: "+v.key);return l[v.key]=Object.assign({},v),v.key},list:function(){return Object.keys(l).map(function(v){return l[v]})},get:function(v){return l[v]||null},remove:function(v){delete l[v]},has:function(v){return!!l[v]},count:function(){return Object.keys(l).length}}}function w(){var l={},v={};return{register:function(V,A,G){var ee=D(V);if(!ee)throw new Error("无效快捷键: "+V);var te=x(ee);if(l[te])throw new Error("快捷键冲突: "+V);if(A!=null&&v[A]!==void 0)throw new Error("动作重复绑定: "+A);return l[te]={combo:V,action:A,description:G||"",parsed:ee},v[A]=te,te},resolve:function(V){for(var A in l)if(k(l[A].parsed,V))return l[A].action;return null},list:function(){return Object.keys(l).map(function(V){return l[V]})},unregister:function(V){var A=x(D(V));l[A]&&(delete v[l[A].action],delete l[A])},count:function(){return Object.keys(l).length}}}function n(){var l=w();return l.register("Ctrl+K","toggle-palette","打开命令面板"),l.register("F5","refresh","刷新当前页"),l.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),l.register("Ctrl+J","open-ai","打开 AI 问股"),l.register("Ctrl+D","open-today","今日一屏"),l.register("Ctrl+E","batch-eval","批量 AI 评估"),l.register("Ctrl+G","add-portfolio","加入组合"),l.register("Ctrl+H","open-eval-history","打开评估历史"),l.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),l}return{normalize:a,createPaletteState:p,toggleVisible:t,searchMenus:y,searchCommands:b,filterStocksLocal:R,mergeResults:m,moveIndex:c,buildSearchSuggestions:g,dispatchSearchSelection:o,DEFAULT_COMMANDS:q,parseKeyCombo:D,matchShortcut:k,canonicalCombo:x,createCommandRegistry:M,createShortcutRegistry:w,createDefaultShortcuts:n}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof Re<"u"&&Re.exports?Re.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var p=e();typeof Re=="object"&&Re.exports&&(Re.exports=p),a.QuantOnboarding=p})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],e=a.length,p=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=p.length;function y(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function b(){return p.slice()}function R(P){return P<0?0:P>=t?t-1:P}function m(P){return{stepIndex:P.stepIndex,completed:!!P.completed,dismissed:!!P.dismissed,updatedAt:P.updatedAt||0}}function c(P){return m(Object.assign({},P,{stepIndex:R((P.stepIndex||0)+1),updatedAt:Date.now()}))}function g(P){return m(Object.assign({},P,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(P){return m(Object.assign({},P,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function q(P){var L=Math.min(P&&P.stepIndex||0,t);return{done:L,total:t,pct:Math.round(L/t*100)}}function i(P){return!!(P&&!P.completed&&!P.dismissed)}function D(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function k(){return a.slice()}function x(){return e}function M(P){return P<0?0:P>=e?e-1:P}function w(P){return{stepIndex:P.stepIndex,completed:!!P.completed,dismissed:!!P.dismissed,updatedAt:P.updatedAt||0}}function n(P){return w(Object.assign({},P,{stepIndex:M((P.stepIndex||0)+1),updatedAt:Date.now()}))}function l(P){return w(Object.assign({},P,{stepIndex:M((P.stepIndex||0)-1),updatedAt:Date.now()}))}function v(P,L){return w(Object.assign({},P,{stepIndex:M(L),updatedAt:Date.now()}))}function V(P){return w(Object.assign({},P,{completed:!0,updatedAt:Date.now()}))}function A(P){return w(Object.assign({},P,{dismissed:!0,updatedAt:Date.now()}))}function G(P){return!!(P&&P.completed)}function ee(P){var L=Math.min(P&&P.stepIndex||0,e);return{done:L,total:e,pct:Math.round(L/e*100)}}function te(P){var L=P||D();return JSON.stringify({stepIndex:L.stepIndex,completed:!!L.completed,dismissed:!!L.dismissed,updatedAt:L.updatedAt||0})}function N(P){var L=D();if(!P||typeof P!="string")return L;try{var z=JSON.parse(P);if(!z||typeof z!="object")return L;var X=parseInt(z.stepIndex,10);return isNaN(X)?L:{stepIndex:M(X),completed:!!z.completed,dismissed:!!z.dismissed,updatedAt:z.updatedAt||0}}catch{return L}}return{ONBOARDING_STEPS:a,steps:k,stepCount:x,createOnboardingState:D,next:n,prev:l,jumpTo:v,complete:V,dismiss:A,isComplete:G,progress:ee,persistState:te,parseState:N,SHORTTERM_TOUR_STEPS:p,shorttermTourSteps:b,createShorttermTourState:y,shorttermTourNext:c,shorttermTourComplete:g,shorttermTourDismiss:o,shorttermTourProgress:q,shorttermTourShouldShow:i}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:p}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const y=a(!1),b=a(t.createOnboardingState()),R=e(function(){return t.steps()[b.value.stepIndex]}),m=e(function(){return t.progress(b.value)}),c=e(function(){return b.value.stepIndex>=t.stepCount()-1}),g=e(function(){return"onboarding.step."+R.value.key});function o(){const M=t.persistState(b.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:M}})}).then(function(w){return w.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",M)}catch{}})}function q(){b.value=t.next(b.value)}function i(){b.value=t.prev(b.value)}function D(){b.value=t.complete(b.value),o(),y.value=!1}function k(){b.value=t.dismiss(b.value),o(),y.value=!1}function x(){fetch("/api/user_config/preferences").then(function(M){return M.json()}).then(function(M){const w=M&&M.preferences&&M.preferences.onboarding_progress;return w&&(b.value=t.parseState(w)),w}).catch(function(){return null}).then(function(M){if(!M)try{const w=localStorage.getItem("qc_onboarding_progress");w&&(b.value=t.parseState(w))}catch{}!t.isComplete(b.value)&&!b.value.dismissed&&(y.value=!0)})}return p(x),{visible:y,st:b,step:R,prog:m,isLast:c,stepKey:g,next:q,prev:i,finish:D,skip:k}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"📭"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
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
    `,setup(){function a(e){try{const p=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(p)return p(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:p,nextTick:t,inject:y,onMounted:b}=Vue,R=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const m=y("qcState");if(!m)return{};const c=a(""),g=e({get:()=>m.commandPaletteVisible.value,set:H=>{m.commandPaletteVisible.value=H}}),o=a(0),q=a([]),i=a(null),D=e(()=>{const H=(R.DEFAULT_COMMANDS||[]).map(function(I){return Object.assign({},I)});return Object.keys(m.themes.value||{}).forEach(function(I){const f=m.themes.value[I];H.push({key:"theme:"+I,label:"切换主题 · "+(f.name||I),icon:"palette",keywords:"theme 主题"})}),H});function k(H){return typeof H=="string"&&/^[a-z][a-z0-9-]*$/.test(H)}const x=e(()=>m.menus.value||[]);function M(){const H=window.__quantModules&&window.__quantModules.pinyin;if(!H)return[];const F=[];return(m.watchlist&&m.watchlist.value||[]).forEach(function(I){F.push({code:I.code,name:I.name})}),(m.aiHistory&&m.aiHistory.value||[]).forEach(function(I){I&&I.stock_code&&F.push({code:I.stock_code,name:I.stock_name||I.stock_code})}),F.push.apply(F,H.getExtraStocks()),H.buildStockIndex(F)}function w(H){const F=window.__quantModules&&window.__quantModules.pinyin;return F?F.searchStocksByQuery(H,M()).map(function(I){return{type:"stock",code:I.code,name:I.name,label:I.name,subLabel:I.code,icon:"trending-up"}}):[]}function n(){const H=[],F=window.__quantModules&&window.__quantModules.recent;F&&F.getRecentViewed().slice(0,5).forEach(function(f){H.push({type:"stock",code:f.code,name:f.name||f.code,label:f.name||f.code,subLabel:"最近查看 · "+f.code,icon:"trending-up"})});const I=(m.watchlist&&m.watchlist.value||[]).slice(0,8).map(function(f){return{type:"stock",code:f.code,name:f.name||f.code,label:f.name||f.code,subLabel:"我的自选 · "+f.code,icon:"trending-up"}});return H.concat(I)}const l=e(()=>{const H=c.value;if(!H)return R.mergeResults([],[],n());const F=R.searchMenus(H,x.value,m.subPageNames),I=R.searchCommands(H,D.value),f=q.value;return R.mergeResults(F,I,f)}),v=e(()=>l.value);function V(H){return v.value.flat[o.value]===H}function A(H){o.value=v.value.flat.indexOf(H)}function G(H){return(H.type||"")+":"+(H.code||H.menuKey||H.key||H.label)}let ee=null;function te(){const H=c.value.trim();if(H.length<1){q.value=[];return}ee&&clearTimeout(ee),ee=setTimeout(function(){const F=w(H);q.value=F,o.value=0,m.searchStocks(H,function(I){if(c.value.trim()!==H)return;const f=(I||[]).filter(function(B){return B&&B.code&&B.name}).map(function(B){return{type:"stock",code:B.code,name:B.name,label:B.name,subLabel:B.code,icon:"trending-up"}}),_={},se=[];F.forEach(function(B){_[B.code]||(_[B.code]=!0,se.push(B))}),f.forEach(function(B){_[B.code]||(_[B.code]=!0,se.push(B))}),q.value=se,o.value=0})},200)}function N(){o.value=R.moveIndex(o.value,v.value.flat.length,1)}function P(){o.value=R.moveIndex(o.value,v.value.flat.length,-1)}function L(){const H=v.value.flat[o.value];H&&z(H)}function z(H){m.commandPaletteVisible.value=!1,H.type==="menu"?m.navigateTo(H.menuKey,H.subPage):H.type==="stock"?m.showStockDetail(H.code,H.name):H.type==="command"&&X(H.key)}function X(H){if(H==="refresh"){const F=m.currentPage.value;F==="strategies"?m.loadDashboardData().catch(function(){}):F==="calendar"?m.refreshCalendarData().catch(function(){}):F==="ai"&&m.loadAiHistory().catch(function(){})}else H==="export"?m.exportCSV():H==="batch"?m.showBatchEvaluate.value=!0:H==="ai"?m.openAiFab():H==="sidebar"?m.toggleSidebar():H==="today"?m.navigateTo("strategies","overview"):H==="add-portfolio"?(m.currentPage.value="ai",m.currentSubPage.value="portfolio"):H==="open-system"?m.navigateTo("system","status"):H==="open-shortterm"?m.navigateTo("shortterm","overview"):H==="open-research"?m.navigateTo("research","overview"):H==="open-calendar"?m.navigateTo("calendar",""):H==="refresh-data-source"?m.navigateTo("system","datasource"):H.indexOf("theme:")===0&&m.changeTheme(H.slice(6))}p(g,function(H){H&&(c.value="",q.value=[],o.value=0,t(function(){i.value&&i.value.focus&&i.value.focus()}))}),p(c,te);function J(H){H==="toggle-palette"?m.commandPaletteVisible.value=!m.commandPaletteVisible.value:H==="toggle-sidebar"?m.toggleSidebar():H==="open-ai"?m.openAiFab():H==="refresh"?X("refresh"):H==="open-today"?X("today"):H==="batch-eval"?X("batch"):H==="add-portfolio"&&X("add-portfolio")}function de(H){if(!R.createDefaultShortcuts||!R.createShortcutRegistry)return;const I=R.createDefaultShortcuts().resolve({key:H.key,ctrlKey:H.ctrlKey,altKey:H.altKey,shiftKey:H.shiftKey,metaKey:H.metaKey});I&&(H.preventDefault(),J(I))}return b(function(){document.addEventListener("keydown",de)}),{visible:g,query:c,results:v,inputEl:i,sanitizeHtml:m.sanitizeHtml,isIconName:k,onDown:N,onUp:P,onEnter:L,execute:z,isActive:V,setActive:A,itemKey:G,onGlobalKeydown:de}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const y=a("qcState");if(!y)return{};const b={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},R=e(()=>b[y.aiEvalStage.value]||""),m=e(()=>{const L=y.aiResult&&y.aiResult.value&&y.aiResult.value.result&&y.aiResult.value.result.level;return L?L==="强烈推荐"||L==="推荐"?"var(--el-success)":L==="谨慎推荐"?"var(--el-warning)":L==="中性"||L==="观望"?"var(--text-secondary)":L==="评估失败"||L==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function c(L){const z=document.createElement("textarea");z.value=L,z.style.position="fixed",z.style.opacity="0",document.body.appendChild(z),z.select(),document.execCommand("copy"),document.body.removeChild(z)}async function g(){const L=y.aiResult&&y.aiResult.value;if(!L||!L.result)return;const z=L.result.dimensions||{},X=Object.entries(z).map(([de,H])=>`${de} ${Math.round(H)}分`).join(`
`),J=`【AI 智能评估】${L.result.level||""} ${L.result.total_score!=null?L.result.total_score:"—"}分
模型：${L.model_used||L.result.provider||"—"}

${L.result.detailed_report||""}

九维度评分：
${X||"无"}`;try{await navigator.clipboard.writeText(J),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{c(J),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=p(!1),q=p(!1),i=p(null),D=p([]),k={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function x(L){return k[L]||"factor-sem-none"}async function M(){const L=y.stockDetail.value&&y.stockDetail.value.stock;if(L){o.value=!0,q.value=!1,D.value=[],i.value=null;try{const z=y.selectedDate.value?`?date=${y.selectedDate.value}`:"",X=await fetch(`/api/calendar/stock/${L}/factors${z}`).then(F=>F.json()),J=X&&Array.isArray(X.factors)?X.factors:[],de=[],H={};J.forEach(F=>{H[F.category]||(H[F.category]={category:F.category,items:[]},de.push(H[F.category])),H[F.category].items.push(F)}),D.value=de,i.value=X&&X.summary||null}catch{q.value=!0}finally{o.value=!1}}}t(y.stockDetailTab,L=>{L==="factor"&&y.stockDetail.value&&y.stockDetailVisible.value&&(M(),n())});const w=p(null);async function n(){try{const L=await fetch("/api/market/factor-ic").then(z=>z.json());w.value=L&&L.success&&L.data?L.data:{}}catch{w.value={}}}function l(L){if(!L||!L.n5)return"—";const z=L.n5.icir!=null?"ICIR "+L.n5.icir:"ICIR —";return L.n5.grade+" ("+z+")"}const v=p(!1),V=p(!1),A=p([]),G=p([]);function ee(L){if(L==null)return"—";const z=Number(L);return Number.isNaN(z)?"—":Math.abs(z)>=1e8?(z/1e8).toFixed(2)+"亿":Math.abs(z)>=1e4?(z/1e4).toFixed(1)+"万":String(z)}async function te(){const L=y.stockDetail&&y.stockDetail.value&&y.stockDetail.value.stock;if(L){v.value=!0,V.value=!1;try{const z=await fetch("/api/market/performance/"+encodeURIComponent(L)).then(X=>X.json());z&&z.success?(A.value=z.forecast||[],G.value=z.express||[]):V.value=!0}catch{V.value=!0}finally{v.value=!1}}}t(y.stockDetailTab,L=>{L==="performance"&&te()});const N=p(null);async function P(){const L=y.stockDetail&&y.stockDetail.value&&y.stockDetail.value.stock;if(!L){N.value=null;return}try{const z=await fetch("/api/focus/stock/"+encodeURIComponent(L)+"/pool").then(X=>X.json());N.value=z&&z.success&&z.data?z.data:null}catch{N.value=null}}return t(()=>y.stockDetail&&y.stockDetail.value&&y.stockDetail.value.stock,L=>{L&&y.stockDetailVisible.value?P():N.value=null}),t(()=>y.stockDetailVisible.value,L=>{L?P():N.value=null}),{...y,aiStageText:R,levelRingColor:m,copyAiReport:g,factorLoading:o,factorError:q,factorSummary:i,factorGroups:D,factorSemClass:x,loadFactorPanel:M,factorIc:w,loadFactorIc:n,factorIcGrade:l,perfLoading:v,perfError:V,perfForecast:A,perfExpress:G,fmtY:ee,loadPerformance:te,poolInfo:N,loadPoolInfo:P}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(p){const t=e("qcState");if(!t)return{};const y=a(()=>p.type==="history"?t.selectedHistoryIds.value.includes(p.item.id):t.selectedChatIds.value.includes(p.item.id)),b=a(()=>{const k=t.watchlistCodes.value.has(p.item.stock_code);return{icon:k?"⭐":"☆",label:k?"取消收藏":"加入收藏"}}),R=a(()=>p.type==="history"?"bot":"message-circle"),m=a(()=>{var k;return p.type==="history"?((k=p.item.result)==null?void 0:k.provider)||"":p.item.first_msg||""}),c=a(()=>{var k,x;return`${((x=(k=p.item.result)==null?void 0:k.dimensions)==null?void 0:x.length)||9}维度分析`}),g=a(()=>{var x,M;const k=p.type==="history"?p.item.evaluate_time:p.item.created_at||"";return k?p.timeFormat==="datetime"?p.type==="history"?`${k.split("T")[0]} ${(k.split("T")[1]||"").split(".")[0]}`:`${k.split("T")[0]} ${((x=k.split("T")[1])==null?void 0:x.substring(0,5))||""}`:p.type==="history"?(k.split("T")[1]||"").split(".")[0]||k:((M=k.split("T")[1])==null?void 0:M.substring(0,5))||"":""});function o(){p.type==="history"?t.toggleSelectHistory(p.item.id):t.toggleSelectChat(p.item.id)}function q(){p.type==="history"?t.viewAiResult(p.item):t.viewChatSession(p.item)}function i(){p.type==="history"?t.deleteSingleHistory(p.item.id):t.deleteChatSession(p.item.id)}function D(k,x){t.toggleWatchlist(k,x)}return{isSelected:y,watchState:b,providerIcon:R,providerText:m,dimsText:c,timeText:g,toggleSelect:o,view:q,remove:i,toggleWatchlist:D,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes}}}})();(function(){const{ref:a,computed:e,onMounted:p,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const y={买入:"🟢",持有:"🟡",观望:"⚪",减仓:"🟠",卖出:"🔴"},b=["买入","持有","观望","减仓","卖出"],R={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},m={强烈推荐:"🔥",推荐:"🟢",谨慎推荐:"🟡",中性:"⚪",观望:"🔵"},c={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},g=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],o={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},q=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function i(k){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(k).then(w=>w.json?w.json():w)}function D(){const k=new Date,x=M=>M<10?"0"+M:""+M;return k.getFullYear()+"-"+x(k.getMonth()+1)+"-"+x(k.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
                <!-- V5.15 (F5): 行结构对齐「关注」风格 — 状态点|名称(含入池徽章)|档位|评分|方向|操作 分列 -->
                <span class="focus-row-status"><span class="qc-status-dot" :class="ACTION_DOT[row.action] || 'is-info'"></span></span>
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
      </div>`,setup(){const k=t("qcState"),x=a(D()),M=a("after_close"),w=a({rows:[],actions:{},total:0,groups:{}}),n=a({sessions:{},total:0}),l=a(null),v=a(!1),V=a(""),A=a(!1),G=a([]),ee=a(""),te=a(null),N={},P=a({});let L=0;const z=a(null),X=e(function(){const h=w.value&&w.value.groups||{};return Object.keys(h).length?h:w.value&&w.value.rows&&w.value.rows.length?{全部:w.value.rows}:{}}),J=e(function(){const h=z.value;return!h||!h.date||h.date!==x.value?"":"已加载最近一次评估: "+h.date+" · "+(o[h.session]||h.session)}),de=e(function(){const h=w.value&&w.value.base_date;return h?h===x.value?"评分范围: "+h+" 收盘池 + 自选":"评分范围: "+h+" 收盘池(前一交易日算好) + 自选":""});function H(h){if(h==null)return"—";const Z=Number(h);return Z===Math.floor(Z)?String(Z):Z.toFixed(1)}function F(h){const Z=w.value.total||0,pe=(w.value.actions||{})[h]||0;if(!Z)return"0%";const ge=pe/Z*100;return ge>0&&ge<4?"4%":ge.toFixed(1)+"%"}function I(h){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[h]||"info"}function f(h){const Z=l.value&&l.value.overall&&l.value.overall[h]||null;return!Z||Z.total===0||Z.rate===null||Z.rate===void 0?"info":Z.rate>=60?"success":Z.rate>=40?"warning":"danger"}function _(h){const Z=l.value&&l.value.overall&&l.value.overall[h]||null;return!Z||Z.total===0||Z.rate===null||Z.rate===void 0?"样本不足":Z.rate.toFixed(1)+"% ("+Z.total+" 样本)"}function se(){return o[M.value]||M.value}function B(h){const Z=G.value.indexOf(h);Z>=0?G.value.splice(Z,1):G.value.push(h)}function T(h){if(!h||!h.raw_json)return{};if(N[h.stock_code+h.session+h.trade_date])return N[h.stock_code+h.session+h.trade_date];let Z={};try{Z=JSON.parse(h.raw_json)||{}}catch{Z={}}return N[h.stock_code+h.session+h.trade_date]=Z,Z}async function d(){try{const h=await i("/api/focus/latest"),Z=h&&h.success&&h.data;Z&&Z.date&&(z.value=Z,x.value=Z.date,Z.session&&(M.value=Z.session))}catch(h){console.warn("[focus] 最近一次评估解析失败:",h)}}async function S(){A.value=!0;try{const h=await i("/api/focus/results?date="+x.value+"&session="+M.value);w.value=h&&h.success&&h.data||{rows:[],actions:{},total:0,groups:{}},u((w.value.rows||[]).map(function(Z){return Z.stock_code}))}catch(h){console.warn("[focus] 结果加载失败:",h),w.value={rows:[],actions:{},total:0,groups:{}}}finally{A.value=!1}}async function u(h){const Z=P.value||{},pe=(h||[]).filter(function(je){return je&&!Z[je]});if(!pe.length)return;const ge=++L,Me=pe.map(function(je){return i("/api/focus/stock/"+encodeURIComponent(je)+"/pool?date="+x.value).then(function(qe){qe&&qe.success&&qe.data?Z[je]=qe.data:Z[je]={stock_code:je,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){Z[je]={stock_code:je,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Me)}catch{}ge===L&&(P.value=Object.assign({},Z))}function j(h){const Z=k&&k.showStockDetail;if(typeof Z=="function"){Z(h);return}const ge=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;ge&&ge.info("请从其他页面打开股票详情: "+h)}async function ae(){try{const h=await i("/api/focus/history?date="+x.value);n.value=h&&h.success&&h.data||{sessions:{},total:0}}catch(h){console.warn("[focus] 历史加载失败:",h),n.value={sessions:{},total:0}}}async function Y(){v.value=!0;try{const h=await i("/api/ai/track");h&&h.success&&h.data?(l.value=h.data,V.value=(h.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):l.value=null}catch(h){console.warn("[focus] 效果块加载失败:",h),l.value=null}finally{v.value=!1}}async function Q(){const h=(ee.value||"").trim();if(h){te.value=null;try{const Z=await i("/api/focus/stock/"+encodeURIComponent(h));te.value=Z&&Z.success&&Z.data&&Z.data.rows||[]}catch(Z){console.warn("[focus] 单股历史加载失败:",Z),te.value=[]}}}async function C(){await S(),await ae(),await Y()}return p(async function(){await d(),await C()}),{curDate:x,session:M,results:w,history:n,track:l,trackLoading:v,trackNote:V,loading:A,expanded:G,stockCode:ee,stockHistory:te,SESSIONS:g,ACTION_ORDER:b,TRACK_WINDOWS:q,EMOJI:y,ACTION_DOT:R,TIER_EMOJI:m,TIER_DOT:c,SESSION_LABELS:o,displayGroups:X,latestNote:J,baseNote:de,sessionLabel:se,fmtScore:H,tagType:I,rateTagType:f,fmtRate:_,toggle:B,detailOf:T,loadResults:S,loadHistory:ae,loadTrack:Y,loadStockHistory:Q,loadAll:C,poolStatus:P,openStockDetail:j,actionPct:F}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:p}=Vue,{currentView:t,statusFilter:y,dashboardData:b,loadHealthMetrics:R,getLoadDashboardData:m,getLastRefreshTime:c,getFetchPoolSignals:g}=a,o=e(!1),q=e(""),i=new Map,D=e([]),k=e(""),x=e(""),M=e([]),w=e(""),n=window.__quantModules.core||{},l=typeof n.createTtlCache=="function"?n.createTtlCache(15e3):null;let v=0;function V(){const z=Date.now();z-v<5e3||(v=z,ElementPlus.ElMessage.success("有新数据，已更新"))}function A(z,X,J,de){!l||!X||typeof n.silentRefresh!="function"||n.silentRefresh({cache:l,key:X,fetchFn:async()=>{const H=await fetch(z);if(!H.ok)throw new Error("HTTP "+H.status);const F=await H.json();return J?J(F):F},ttl:l.defaultTtl,apply:de,onChanged:V,onError:()=>{}})}const G=new Set;async function ee(){var z;try{const J=await(await fetch("/api/dates")).json();D.value=((z=J.data)==null?void 0:z.dates)||J.dates||[],D.value.length>0&&(k.value=D.value[D.value.length-1]),x.value=new Date().toLocaleTimeString()}catch(X){console.error(X)}}async function te(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),x.value="刷新中...",i.clear(),await ee(),await P(),x.value=new Date().toLocaleTimeString()}catch(z){console.error("数据刷新失败",z)}}function N(){if(!k.value)return;const X="/api/view/"+(t.value||"day")+"/"+k.value+"?status="+(y.value||"all")+"&format=csv";window.open(X,"_blank")}async function P(){if(!k.value)return;const z=`${t.value}_${k.value}`;if(G.has(z))return;G.add(z);const X=`/api/view/${t.value}/${k.value}?status=all`,J=l&&typeof n.makeCacheKey=="function"?n.makeCacheKey("GET",`/api/view/${t.value}/${k.value}`,{status:"all"}):null,de=(I,f)=>{M.value=I,w.value=f||"",i.set(z,{stocks:I,note:f||""})},H=I=>{de(I&&I.stocks||[],I&&I.note||"")};if(i.has(z)){H(i.get(z)),A(X,J,I=>I,H),G.delete(z);return}const F=J&&l?l.get(J):void 0;if(F!==void 0){H(F),A(X,J,I=>I,H),G.delete(z);return}o.value=!0,q.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const f=await(await fetch(X)).json(),_=f.stocks||[];de(_,f.note||""),l&&J&&l.set(J,{stocks:_,note:f.note||""})}catch{try{const _=await(await fetch(`/api/calendar/${k.value}/consensus`)).json();M.value=(_.consensus||[]).map(se=>({...se,code:se.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}g(),G.delete(z)}async function L(){const z=l&&typeof n.makeCacheKey=="function"?n.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(l){const X=l.get(z);if(X!==void 0){b.value=X,R().catch(()=>{}),A("/api/dashboard",z,J=>J.data||J,J=>{b.value=J,c().value=Date.now()});return}}await m()(),R().catch(()=>{}),l&&l.set(z,b.value)}return{loading:o,loadingView:q,viewCache:i,dates:D,selectedDate:k,lastLoadTime:x,consensus:M,viewNote:w,loadDates:ee,refreshCalendarData:te,exportCSV:N,loadConsensusData:P,loadDashboardCached:L}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:p,loadIndexKline:t,rememberDialogTrigger:y,menus:b,currentPage:R,currentSubPage:m,stockDetail:c,selectedDate:g}=a,o=ref({indices:[],market_sentiment:null});let q=null;const i=ref(!1),D=ref(null),k=ref(null),x=ref(!1);function M(){window.__quantModules.charts.disposeKline("stockKlineChart")}const w=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{w.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const n=ref(!1),l=ref(null),v=ref(!1),V=ref(0),A=ref(0);async function G(){try{const f=await(await fetch("/api/market/overview")).json();o.value=f,ee(f)}catch(I){console.error("获取市场行情失败:",I)}}function ee(I){q&&clearInterval(q),I&&I.in_trading_hours&&(q=setInterval(G,6e5))}function te(I){y(),D.value=I,k.value=null,p.value="daily",N(I.code),window.__quantModules.charts.disposeKline("indexKlineChart"),i.value=!0,setTimeout(async()=>{await t("daily")},500)}async function N(I){try{const _=await(await fetch("/api/ai/index-eval/"+I)).json();_.success&&_.data&&(k.value=_.data)}catch(f){console.warn("[getIndexAiScore] cache check failed:",f)}}async function P(){if(D.value){x.value=!0;try{const f=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:D.value.code,index_name:D.value.name,current_price:D.value.close,pct_chg:D.value.pct_chg})})).json();f.success?k.value=f.data:ElementPlus.ElMessage.error(f.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{x.value=!1}}}function L(I){window.__quantModules.charts.zoomKline("stockKlineChart",I)}function z(){v.value=!0,setTimeout(()=>{v.value=!1},600)}function X(I,f){if(I===f){z();return}const _=800,se=performance.now(),B=f-I;n.value=!0,l.value={value:B,dir:B>0?"up":"down"},v.value=!0,setTimeout(()=>{v.value=!1},600),setTimeout(()=>{l.value=null},2300);function T(d){const S=d-se,u=Math.min(S/_,1),j=1-Math.pow(1-u,3),ae=Math.round(I+B*j);c.value&&c.value.score_data&&(c.value.score_data.score=ae),u<1?requestAnimationFrame(T):(c.value&&c.value.score_data&&(c.value.score_data.score=f),n.value=!1)}requestAnimationFrame(T)}function J(){if(!c.value||!c.value.score_data)return;const I=c.value.score_data.score;if(I==null)return;const f=600,_=performance.now();v.value=!0,setTimeout(()=>{v.value=!1},600);function se(B){const T=Math.min((B-_)/f,1),d=1-Math.pow(1-T,3),S=Math.round(I*d);c.value&&c.value.score_data&&(c.value.score_data.score=S),T<1?requestAnimationFrame(se):c.value&&c.value.score_data&&(c.value.score_data.score=I)}requestAnimationFrame(se)}async function de(){var _;if(!c.value||!c.value.stock)return;const I=c.value.stock,f=(_=c.value.score_data)==null?void 0:_.score;try{const se=new Date().toISOString().split("T")[0],B=g.value||se,d=await(await fetch(`/api/calendar/stock/${encodeURIComponent(I)}/score?date=${B}`)).json();if(d.success&&d.score_data){const S=d.score_data.score;c.value&&(c.value.score_data=d.score_data),f!=null&&S!==f?X(f,S):z()}else z()}catch(se){console.warn("[refreshStockScore] failed:",se)}}function H(I){w.value&&(V.value=I.touches[0].clientX,A.value=I.touches[0].clientY)}function F(I){if(!w.value)return;const f=V.value-I.changedTouches[0].clientX,_=A.value-I.changedTouches[0].clientY;if(Math.abs(f)>Math.abs(_)&&Math.abs(f)>80){const se=b.value.map(function(T){return T.key}),B=se.indexOf(R.value);if(f>0&&B<se.length-1){const T=se[B+1],d=window.__quantGoPage;d?d(T,""):(R.value=T,m.value="")}else if(f<0&&B>0){const T=se[B-1],d=window.__quantGoPage;d?d(T,""):(R.value=T,m.value="")}}}return{marketData:o,marketRefreshTimer:q,fetchMarketData:G,indexDetailVisible:i,indexDetail:D,indexAiResult:k,indexAiLoading:x,showIndexDetail:te,loadCachedIndexEval:N,doIndexAiEvaluate:P,disposeStockKline:M,isMobile:w,zoomKlineRange:L,scoreAnimating:n,scoreDelta:l,scorePulse:v,triggerScorePulse:z,animateScoreChange:X,animateScoreEntrance:J,refreshStockScore:de,touchStartX:V,touchStartY:A,onTouchStart:H,onTouchEnd:F}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:p,currentSubPage:t}=a,y=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),b=ref("idle"),R=ref("");async function m(){if(!y.value.webhook_url){R.value="请先输入Webhook地址";return}b.value="testing",R.value="";try{const Q=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:y.value.webhook_url})})).json();Q.success||Q.status==="ok"?(R.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(R.value=Q.message||"测试失败",ElementPlus.ElMessage.error(R.value))}catch{R.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}b.value="idle"}const c=Vue.ref(!1);async function g(){c.value=!0;try{const Q=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{c.value=!1}}const o=ref(!1);function q(){e("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const Y=document.querySelector('input[placeholder*="输入问题"]');Y&&Y.focus()})}const i=ref([]),D=ref({});async function k(){try{const Q=await(await fetch("/api/ai/recommend-strategies")).json();Q.success&&(i.value=Q.recommendations||[])}catch(Y){console.warn("[loadStrategyRecommendations] failed:",Y)}}async function x(){try{const Q=await(await fetch("/api/ai/usage-stats")).json();Q.success&&(D.value=Q)}catch(Y){console.warn("loadAiUsage failed:",Y)}}const M=ref({}),w=ref([]),n=ref(7);async function l(){try{const Q=await(await fetch("/api/system/monitor")).json();Q.success&&(M.value=Q)}catch(Y){console.warn("loadSysMonitor failed:",Y)}}const v=ref({});async function V(){try{const Q=await(await fetch("/api/system/health-detail")).json();Q.success&&(v.value=Q)}catch(Y){console.warn("loadHealthDetail failed:",Y)}}async function A(){try{const Q=await(await fetch(`/api/analytics/rank?days=${n.value}`)).json();Q.success&&(w.value=Q.rank||[])}catch(Y){console.warn("loadAnalytics failed:",Y)}}const G=ref(!1);async function ee(){if(!G.value){G.value=!0;try{const Q=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return Q&&Q.success?Q.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${Q.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${Q.date}）`):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"生成复盘失败"),V(),Q}catch(Y){ElementPlus.ElMessage.error("生成复盘失败: "+(Y.message||""))}finally{G.value=!1}}}const te=ref(null),N=ref(!1);async function P(){try{const Q=await(await fetch("/api/ai/fact-check/latest")).json();te.value=Q&&Q.success&&Q.data||null}catch(Y){console.warn("loadFactCheck failed:",Y)}}async function L(){if(!N.value){N.value=!0;try{const Q=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return Q&&Q.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${Q.data.pass_rate!=null?Q.data.pass_rate+"%":"--"} (${Q.data.checked} 个数字)`),P()):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"事实护栏抽查失败"),Q}catch(Y){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Y.message||""))}finally{N.value=!1}}}const z=ref([]),X=ref(!1);async function J(){try{const Q=await(await fetch("/api/backup/list")).json();Q.success&&(z.value=Q.backups||[])}catch(Y){console.error("加载备份列表失败",Y)}}async function de(){X.value=!0;try{const Q=await(await fetch("/api/backup/create",{method:"POST"})).json();Q.success?(ElementPlus.ElMessage.success(Q.message||"备份成功"),J()):ElementPlus.ElMessage.error(Q.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{X.value=!1}}const H=ref(""),F=ref("");async function I(Y){H.value=Y,F.value="";try{const Q=window.__quantModules&&window.__quantModules.core||{},C=typeof Q.authHeaders=="function"?Q.authHeaders():{},h=await fetch("/api/reports/export?format="+encodeURIComponent(Y),{headers:C});if(!h.ok)throw new Error("HTTP "+h.status);const Z=await h.blob(),pe=URL.createObjectURL(Z),ge=document.createElement("a");ge.href=pe;const Me=new Date().toISOString().slice(0,10);ge.download="report_"+Me+"."+Y,document.body.appendChild(ge),ge.click(),document.body.removeChild(ge),URL.revokeObjectURL(pe),F.value="报表已导出 ("+Y.toUpperCase()+")"}catch(Q){F.value="报表导出失败: "+(Q.message||Q)}finally{H.value=""}}async function f(Y){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Y} 恢复吗？当前数据将被覆盖。`,"⚠ 恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(Q){console.warn("[restoreBackup] confirm cancelled:",Q);return}try{const C=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y})})).json();C.success?(ElementPlus.ElMessage.success(C.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(C.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const _=ref(!1),se=ref(0),B=[{icon:"🗓",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"🤖",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 🤖 按钮可随时快速问股。"},{icon:"📮",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function T(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{se.value=0,_.value=!0},800)}function d(){_.value=!1,localStorage.setItem("quant_tour_done","1")}function S(){_.value=!1,localStorage.setItem("quant_tour_done","1")}const u=ref(""),j=ref(!1);async function ae(){if(!u.value||!u.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}j.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:u.value.trim(),page:p.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(u.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{j.value=!1}}return{feishuConfig:y,feishuTestStatus:b,feishuTestMessage:R,feishuSaving:c,testFeishuWebhook:m,saveFeishuConfig:g,aiFabHidden:o,openAiFab:q,strategyRecommendations:i,aiUsage:D,loadStrategyRecommendations:k,loadAiUsage:x,sysMonitor:M,analyticsRank:w,analyticsDays:n,loadSysMonitor:l,loadAnalytics:A,healthDetail:v,loadHealthDetail:V,reviewTriggering:G,triggerMarketReview:ee,factCheck:te,factCheckRunning:N,loadFactCheck:P,triggerFactCheck:L,backups:z,backupCreating:X,loadBackups:J,createBackup:de,restoreBackup:f,reportExporting:H,reportExportMsg:F,exportReport:I,tourVisible:_,tourStep:se,tourSteps:B,maybeShowTour:T,skipTour:d,finishTour:S,feedbackText:u,feedbackSubmitting:j,submitFeedback:ae}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:p,selectedDate:t,dates:y,loadConsensusData:b,hapticFeedback:R}=a,m=e(()=>({day:"天",week:"周",month:"月",year:"年"})[p.value]||"天"),c=e(()=>({day:"date",week:"week",month:"month",year:"year"})[p.value]||"date"),g=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[p.value]||"YYYY-MM-DD"),o=e(()=>!t.value||!y.value||y.value.length===0?!1:t.value>y.value[0]),q=e(()=>!t.value||!y.value||y.value.length===0?!1:t.value<y.value[y.value.length-1]);function i(M){R("light"),p.value=M;let w=t.value||y.value[y.value.length-1];if(M==="year"){const n=w.substring(0,4),l=y.value.find(v=>v.startsWith(n));t.value=l||w}else if(M==="month"){const n=w.substring(0,7),l=y.value.find(v=>v.startsWith(n));t.value=l||w}setTimeout(b,50)}function D(M){R("light");const w=t.value,n=y.value,l=n.indexOf(w);if(l<0)return;let v=1;p.value==="week"&&(v=5),p.value==="month"&&(v=22),p.value==="year"&&(v=250);const V=l+M*v;if(V>=0&&V<n.length){const A=n[V];if(p.value==="month"){const G=A.substring(0,7),ee=n.find(te=>te.startsWith(G));t.value=ee||A}else if(p.value==="year"){const G=A.substring(0,4),ee=n.find(te=>te.startsWith(G));t.value=ee||A}else t.value=A;b()}}function k(M){if(!y.value||y.value.length===0)return!1;const w=M.getFullYear(),n=String(M.getMonth()+1).padStart(2,"0"),l=String(M.getDate()).padStart(2,"0"),v=`${w}-${n}-${l}`;return!y.value.includes(v)}function x(M){M&&M.length>10&&(t.value=M.substring(0,10)),b()}return{viewUnit:m,datePickerType:c,dateFormat:g,canNavPrev:o,canNavNext:q,switchView:i,navigateDate:D,disabledDate:k,onDateChange:x}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:p,navigateTo:t,currentPage:y,currentView:b,navigateDate:R,switchView:m,getLoadDashboardData:c,refreshCalendarData:g,getLoadAiHistory:o,exportCSV:q,getShowBatchEvaluate:i,openAiFab:D,toggleSidebar:k,showStockDetail:x}=a,M=ref("");async function w(N,P){if(!N||N.trim().length<1){P([]);return}const L=window.QuantCommandPanel;let z=[];L&&e.value&&(z=L.buildSearchSuggestions(N,e.value,p,L.DEFAULT_COMMANDS));const X=window.__quantModules&&window.__quantModules.pinyin;X&&X.searchCoreStocks(N).forEach(function(J){z.push({value:J.code+" "+J.name,type:"stock",code:J.code,name:J.name,label:J.name,subLabel:J.code,icon:"trending-up",iconName:"trending-up"})});try{const de=await(await fetch("/api/search?q="+encodeURIComponent(N))).json();if(de.success&&de.results){const H=de.results.map(function(I){return{value:I.code+" "+I.name,type:"stock",code:I.code,name:I.name,label:I.name,subLabel:I.code,icon:"trending-up",iconName:"trending-up"}}),F=[];(de.groups||[]).forEach(function(I){(I.items||[]).forEach(function(f){f.type==="sector"?F.push({value:f.name+" · "+f.subLabel,type:"sector",name:f.name,label:f.name,subLabel:"板块",icon:"layers",iconName:"layers"}):f.type==="strategy"?F.push({value:f.name+" · 策略",type:"strategy",id:f.id,name:f.name,label:f.name,subLabel:"策略",icon:"target",iconName:"target"}):f.type==="menu"&&F.push({value:f.name,type:"menu",menuKey:f.menuKey,name:f.name,label:f.name,subLabel:f.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),P(z.concat(H,F))}else P(z)}catch(J){console.warn("[searchStocks] fetch failed:",J),P(z)}}function n(N){return N?N.type==="menu"?{action:"menu",menuKey:N.menuKey,subPage:N.subPage}:N.type==="command"?{action:"command",key:N.key}:N.type==="sector"?{action:"sector",name:N.name}:N.type==="strategy"?{action:"strategy",id:N.id,name:N.name}:N.type==="stock"||N.code&&N.name?{action:"stock",code:N.code,name:N.name}:null:null}function l(N){M.value="";const P=window.QuantCommandPanel,L=P?P.dispatchSearchSelection(N):n(N);if(L){if(L.action==="menu"){t(L.menuKey,L.subPage);return}if(L.action==="command"){v(L.key);return}if(L.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(L.name);return}if(L.action==="strategy"){t("research","overview");return}L.action==="stock"&&typeof x=="function"&&x(L.code,L.name)}}function v(N){if(N==="refresh"){const P=y.value;P==="strategies"?c().catch(function(){}):P==="calendar"?g().catch(function(){}):P==="ai"&&o().catch(function(){})}else N==="export"?q():N==="batch"?i().value=!0:N==="ai"?D():N==="sidebar"?k():N==="open-eval-history"?t("ai","history"):N==="open-shortterm"&&t("shortterm","overview")}const V=ref(!1),A=ref(!1);function G(N){if(!N)return!1;const P=N.tagName;return P==="INPUT"||P==="TEXTAREA"||P==="SELECT"||N.isContentEditable}function ee(N){if(G(N.target))return;const P=N.key.toLowerCase();if(N.ctrlKey&&P==="k"){N.preventDefault(),A.value=!0;return}if(N.ctrlKey&&P==="/"){N.preventDefault(),V.value=!V.value;return}if(N.ctrlKey&&P==="h"){N.preventDefault(),t("ai","history");return}if(N.ctrlKey&&N.shiftKey&&P==="s"){N.preventDefault(),t("shortterm","overview");return}if(!(N.ctrlKey||N.metaKey||N.altKey)){if(P>="1"&&P<="5"){const L=parseInt(P)-1,z=e.value[L];z&&t(z.key,z.subPages[0]||"");return}if(P==="r"&&te(),(P==="arrowleft"||P==="arrowright"||P==="arrowup"||P==="arrowdown")&&y.value==="calendar")if(N.preventDefault(),P==="arrowleft"||P==="arrowright")R(P==="arrowleft"?-1:1);else{const L=["day","week","month","year"].indexOf(b.value),z=["day","week","month","year"][(L+(P==="arrowup"?-1:1)+4)%4];m(z)}}}function te(){const N=y.value;N==="strategies"?c().catch(()=>{}):N==="calendar"?g().catch(()=>{}):N==="ai"&&o().catch(()=>{})}return{searchQuery:M,searchStocks:w,onSearchSelect:l,runGlobalCommand:v,shortcutHelpVisible:V,commandPaletteVisible:A,isTypingTarget:G,handleGlobalKeydown:ee,refreshCurrentPage:te}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:p,loadDates:t,loadDashboardData:y,loadDashboardCached:b,loadHealthMetrics:R,loadConsensusData:m,applyTheme:c,maybeShowTour:g,loadAiVendors:o}=a,q=ref({username:"",password:""}),i=ref(!1),D=ref(!1),k=ref(!1),x=ref({oldPassword:"",newPassword:"",confirmPassword:""}),M=ref(!1),w=ref(!1),n=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),l=ref(1);async function v(){try{(await(await fetch("/api/setup/status")).json()).needed&&(n.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},l.value=1,w.value=!0)}catch(P){console.warn("[checkSetupWizard] failed:",P)}}async function V(){try{const P={new_password:n.value.newPassword,ai_key:n.value.aiKey,ai_provider:n.value.aiProvider,ai_model:n.value.aiModel,ai_endpoint:n.value.aiEndpoint,tushare_token:n.value.tushareToken},z=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)})).json();z.success?(w.value=!1,ElementPlus.ElMessage.success("初始化完成"),await p()):ElementPlus.ElMessage.error(z.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function A(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(w.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function G(){if(!q.value.username||!q.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}i.value=!0;try{const L=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q.value)})).json();L.success?(e.value=L.user,localStorage.setItem("quant_user",JSON.stringify(L.user)),localStorage.setItem("quant_token",L.data.access_token),c(L.user.theme||"gold"),typeof o=="function"&&o(),await p(),await t(),await Promise.all([b(),m(),R().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),L.data&&L.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),g(),L.user.role==="admin"&&setTimeout(v,500)):ElementPlus.ElMessage.error(L.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{i.value=!1}}async function ee(){D.value=!0;try{const L=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();L.success?(e.value=L.user,localStorage.setItem("quant_user",JSON.stringify(L.user)),localStorage.setItem("quant_token",L.data.access_token),c(L.user.theme||"gold"),await p(),await t(),await y(),R().catch(()=>{}),await m(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(L.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{D.value=!1}}function te(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function N(){if(!x.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!x.value.newPassword||x.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(x.value.newPassword!==x.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}M.value=!0;try{const P=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:x.value.oldPassword,new_password:x.value.newPassword})}),L=await P.json();P.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),k.value=!1,x.value={oldPassword:"",newPassword:"",confirmPassword:""},te()):ElementPlus.ElMessage.error(L.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{M.value=!1}}return{loginForm:q,logining:i,guestLogining:D,showChangePassword:k,changePasswordForm:x,changingPassword:M,showSetupWizard:w,setupForm:n,setupStep:l,checkSetupWizard:v,completeSetupWizard:V,resetSetupWizard:A,handleLogin:G,handleGuestLogin:ee,handleLogout:te,doChangePassword:N}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let p=null;const{strategyFilter:t,currentView:y,statusFilter:b,currentPage:R,currentSubPage:m,menus:c,currentUser:g,strategyFilterCounts:o,lazyTick:q,dates:i,selectedDate:D,consensus:k,loadConsensusData:x,fetchMerrillClock:M,fetchMarketData:w,loadWatchlist:n,loadAiHistory:l,preloadWatchlistKline:v,loadChatHistory:V,loadSystemStatus:A,checkTushareConnection:G,loadSysMonitor:ee,loadAnalytics:te,loadHealthDetail:N,loadHealthMetrics:P,loadAiUsage:L,loadFactCheck:z,loadAutoEvaluateConfig:X,loadDatasourceConfig:J,loadFeishuConfig:de,loadAiConfig:H,loadAiVendors:F,loadRateLimit:I,loadDataRefreshConfig:f,loadBackups:_,loadAllGroups:se,loadUsers:B,stockDetailTab:T,stockDetailVisible:d,stockKlineLoaded:S,loadStockKline:u,currentKlinePeriod:j,showMerrillDetail:ae,indexDetailVisible:Y,restoreDialogFocus:Q}=a;e(t,C=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(C.selected)),localStorage.setItem("quant_strategy_filter_mode",C.mode)},{deep:!0}),e([y,b],(C,h)=>{C[0]!==h[0]&&x()}),e([R,m],([C,h])=>{var Z;try{const ge=!(C==="calendar"&&h==="calendar")&&h||"",Me=ge?"#"+C+"/"+ge:"#"+C;window.location.hash!==Me&&(window.location.hash=Me)}catch{}if(h&&localStorage.setItem("quant_last_subpage",h),!h&&c.value.find(pe=>pe.key===C)){const pe=c.value.find(ge=>ge.key===C);pe&&pe.subPages.length>0&&(m.value=pe.subPages[0])}if(C==="shortterm"&&h==="market-review"){const pe=window.__lazyLoaders&&window.__lazyLoaders.research;pe&&pe().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(ge){ge&&ge.name&&!ge.__quantRegistered&&(window.__quantApp.component(ge.name,ge),ge.__quantRegistered=!0)}),q&&q.value++}).catch(function(ge){console.warn("[lazy] research 组件补加载失败",ge)})}C==="calendar"&&h==="calendar"&&(!k.value||k.value.length===0)&&(i.value.length>0&&!D.value&&(D.value=i.value[i.value.length-1]||""),setTimeout(x,50)),C==="calendar"&&h==="pool"&&(!k.value||k.value.length===0)&&(i.value.length>0&&!D.value&&(D.value=i.value[i.value.length-1]||""),setTimeout(x,50)),C==="strategies"&&(h==="merrill"&&M(),h==="market"&&w(),h==="consensus"&&(!k.value||k.value.length===0)&&setTimeout(x,50)),C==="ai"&&(h==="watchlist"&&(n(),l(),setTimeout(v,500)),h==="history"&&l(),h==="overview"&&(l(),n()),h==="chat_history"&&V()),(C==="system"||C==="ops")&&((Z=g.value)==null?void 0:Z.role)==="admin"&&(h==="status"&&(A(),G()),h==="health"&&(N(),P()),h==="schedule"&&N(),h==="guard"&&z(),h==="usage"&&(ee(),te(),N(),P(),L(),z()),h==="autoeval"&&(X(),F()),h==="datasource"&&J(),h==="feature"&&(de(),H(),I(),f(),_()),h==="user"&&(se(),B())),(C==="system"||C==="ops")&&h==="usage"?p||(p=setInterval(()=>{ee(),te(),N(),P(),L()},3e4)):p&&(clearInterval(p),p=null)}),e(T,(C,h)=>{C==="kline"&&h&&h!=="kline"&&d.value&&(S.value=!1,setTimeout(async()=>{!await u(j.value)&&d.value&&T.value==="kline"&&setTimeout(()=>u(j.value),800)},50))}),e(ae,C=>{C||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([d,Y],([C,h])=>{!C&&!h&&Q()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:p,menus:t,currentPage:y,currentSubPage:b,currentView:R,currentKlinePeriod:m,selectedDate:c,dates:g,loadDates:o,loadConsensusData:q,loadDashboardCached:i,appVersion:D,themes:k,fetchMarketData:x,fetchMerrillStages:M,fetchMerrillClock:w,loadAiConfig:n,loadAiVendors:l,loadAiCatalog:v,currentUser:V,loadUserConfig:A,loadAutoEvaluateConfig:G,loadGroupConfig:ee,loadUsers:te,loadAllGroups:N,loadAiHistory:P}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function L(B,T){const d={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(B==="calendar"&&d[T])return y.value="calendar",b.value="calendar",d[T]&&(R.value=d[T]),!0;if(B==="research"&&(T==="strategy-write"||T==="custom-write")){y.value="research",b.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",T==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const B=window.location.hash||"";if(!B||B==="#")return;const T=B.replace(/^#\/?/,"").split("/"),d=T[0],S=T[1]||"",u=t.value.find(function(j){return j.key===d});if(u&&!L(d,S)){if(!S)y.value=d,b.value=u.subPages[0]||"";else if(u.subPages.indexOf(S)>=0)y.value=d,b.value=S;else return;window.__lazyLoaders&&window.__lazyLoaders[d]&&window.__quantGoPage&&window.__quantGoPage(d,b.value).catch(function(){})}});const z=(B,T=3e3,d="")=>{const S=new Promise((u,j)=>setTimeout(()=>j(new Error("timeout")),T));return Promise.race([B,S]).catch(u=>{console.warn(`[init] ${d||"task"} failed:`,u.message)})},X=localStorage.getItem("quant_theme"),J=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const B=window.__quantModules.themes;let T=J.theme||"system",d=J.theme_hue!=null&&J.theme_hue!==""?J.theme_hue:null;const S=typeof B.migrateLegacyTheme=="function"?B.migrateLegacyTheme():null;d==null&&S&&(T=S.mode,d=S.hue),d==null&&(d=45),p(T,d)}else X&&p(X);await ee().catch(function(){}),function(){var B=window.location.hash||"",T=!1;if(B&&B!=="#"){var d=B.replace(/^#\/?/,"").split("/"),S=d[0],u=d[1]||"",j=t.value.find(function(h){return h.key===S});j&&(L(S,u)||(y.value=S,u&&j.subPages.indexOf(u)>=0?b.value=u:u||(b.value=j.subPages[0]||"")),T=!0)}if(!T){var ae=localStorage.getItem("quant_last_page");ae&&t.value.some(function(h){return h.key===ae})?y.value=ae:J.default_view&&t.value.some(function(h){return h.key===J.default_view})&&(y.value=J.default_view);var Y=localStorage.getItem("quant_last_subpage");Y&&(b.value=Y)}var Q=localStorage.getItem("quant_last_date");Q&&(c.value=Q);var C=localStorage.getItem("quant_last_view");C&&(R.value=C),window.__lazyLoaders&&window.__lazyLoaders[y.value]&&window.__quantGoPage&&window.__quantGoPage(y.value,b.value).catch(function(){})}(),fetch("/api/health").then(B=>B.json()).then(B=>{B.version&&(D.value=B.version)}).catch(()=>{});const de=localStorage.getItem("quant_user"),H=localStorage.getItem("quant_token"),F=!!(de&&H),I=Promise.all([Promise.resolve().then(()=>{k.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),z(x(),3e3,"marketData"),z(M(),2e3,"merrillStages")]).then(()=>{z(w(),3e3,"merrillClock")});if(n(),v(),F&&V.value&&l(),!F||!V.value){await I;return}let f=!0;try{f=(await fetch("/api/users/me")).ok}catch{f=!1}if(!f){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),V.value=null;return}if(V.value){const B=V.value.theme||"",T=window.__quantModules&&window.__quantModules.themes;let d=J.theme||"system",S=J.theme_hue!=null&&J.theme_hue!==""?J.theme_hue:null;if(S==null&&T&&typeof T.migrateLegacyTheme=="function"){const u=T.migrateLegacyTheme();if(u)d=u.mode,S=u.hue;else if(B&&T.LEGACY_MAP&&T.LEGACY_MAP[B]){const j=T.LEGACY_MAP[B];d=j[0],S=j[1]}}S==null&&(S=45),p(d,S)}if(window.__quantModules&&window.__quantModules.preferences){const T=await window.__quantModules.preferences.loadPreferences();var _=localStorage.getItem("quant_last_page");!_&&T.default_view&&t.value.some(function(d){return d.key===T.default_view})&&(y.value=T.default_view),T.theme&&p(T.theme,T.theme_hue!=null&&T.theme_hue!==""?T.theme_hue:null),m&&(T.chart_period==="weekly"||T.chart_period==="monthly")&&(m.value=T.chart_period)}await Promise.all([z(A(),2e3,"userConfig"),z(o(),2e3,"dates")]),G().catch(()=>{}),ee().catch(()=>{});const se=y.value==="strategies"?z(i(),2e3,"dashboard"):z(q(),2e3,"consensus");await Promise.all([se,z(te(),2e3,"users"),z(P(),2e3,"aiHistory")]),N().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:p,onUnmounted:t,watch:y,nextTick:b}=Vue,R=a(!1),m=window.__quantModules&&window.__quantModules.i18n||{},c=m.SUPPORTED_LOCALES||["zh-CN","en"],g=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(c.indexOf(g)!==-1?g:"zh-CN");typeof m.bindLocale=="function"&&m.bindLocale(o);const q=typeof m.t=="function"?m.t:function(U){return String(U)};function i(U){c.indexOf(U)!==-1&&(o.value=U,typeof m.setLocale=="function"&&m.setLocale(U),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",U))}function D(U,ve){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(U,ve):U==null?"":String(U)}function k(U){(U.key==="Enter"||U.key===" "||U.key==="Spacebar")&&(U.preventDefault(),U.currentTarget&&typeof U.currentTarget.click=="function"&&U.currentTarget.click())}let x=null;function M(){document.activeElement&&document.activeElement!==document.body&&(x=document.activeElement)}function w(){if(x&&x.isConnected)try{x.focus()}catch{}x=null}const n=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{n.value=!0}),window.addEventListener("offline",()=>{n.value=!1})),window.addEventListener("beforeunload",U=>{if(R.value)return U.preventDefault(),U.returnValue="您有未保存的配置变更，确定要离开吗？",U.returnValue});function l(U="light"){typeof navigator<"u"&&navigator.vibrate&&(U==="light"?navigator.vibrate(10):U==="medium"?navigator.vibrate(20):U==="heavy"&&navigator.vibrate([10,30,10]))}const v=useMerrillClock(),{merrillData:V,merrillStagesConfig:A,showMerrillDetail:G,merrillDetailData:ee,merrillClockConfig:te,merrillClockLastUpdated:N,merrillReevalResult:P,merrillReevalLoading:L,stages:z,indicatorList:X,dimensionScoreList:J,detailDimensionScoreList:de,confidenceColor:H,timelineStages:F,clockPosition:I,merrillProgressStyle:f,FULL_CYCLE_MONTHS:_,getStageAngle:se,getCycleProgress:B,getCurrentStageMonths:T,getStageTotalMonths:d,isStageCompleted:S,getCharLabel:u,getAssetName:j,getRankColor:ae,fetchMerrillStages:Y,fetchMerrillClock:Q,loadMerrillTimeline:C,showTimelineStage:h,merrillTimeline:Z,timelineLoading:pe,showStageDetail:ge,saveMerrillClockConfig:Me,doMerrillReevaluate:je,startAutoRefresh:qe,stopAutoRefresh:ke}=v,le=a(localStorage.getItem("sidebar_collapsed")==="1");function be(){le.value=!le.value,localStorage.setItem("sidebar_collapsed",le.value?"1":"0")}const Te=a(null),ie=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],$=e(()=>{var Ke,Lt,Ft;const U=((Ke=Ne.value)==null?void 0:Ke.role)||"guest",ve=((Lt=Ne.value)==null?void 0:Lt.group)||U,ye=((Ft=Te.value)==null?void 0:Ft[ve])||null;return ie.map(Pt=>{if(ye&&ye.visible_menus&&Pt.key in ye.visible_menus&&!ye.visible_menus[Pt.key])return null;const va={...Pt,name:q("nav."+Pt.key)||Pt.name};return ye!=null&&ye.visible_sub_pages&&(va.subPages=Pt.subPages.filter(es=>{const nd=Pt.key+"."+es;return ye.visible_sub_pages[nd]!==!1})),Pt.key==="system"&&U==="guest"&&Pt.guestSubPages&&(va.subPages=Pt.guestSubPages),va}).filter(Boolean)});async function ue(){try{if(!localStorage.getItem("quant_token"))return;const ve=await fetch("/api/groups/my");if(ve.ok){const ye=await ve.json();Te.value={[ye.group_id]:ye.group}}}catch(U){console.warn("loadGroupConfig:",U)}}const Ee=a("strategies"),ze=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},$e=a(ze.navMode);function mt(U){const ve=window.__quantModules&&window.__quantModules.navModeCore;$e.value=ve?ve.normalizeNavMode(U):U==="tree"||U==="toptab"?U:"toptab",ve&&ve.writePrefs({navMode:$e.value})}const Ze=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function We(U,ve=""){l("light"),Ee.value=U,Ye.value=ve,localStorage.setItem("quant_last_subpage",ve)}function st(){const U=$.value;if(!U||!U.length)return;if(!U.some(function(Le){return Le.key===Ee.value})){const Le=U[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Le.key),Ee.value=Le.key,Ye.value=Le.subPages&&Le.subPages[0]||"";return}const ye=U.find(function(Le){return Le.key===Ee.value});ye&&ye.subPages&&ye.subPages.length&&!ye.subPages.includes(Ye.value)&&(Ye.value=ye.subPages[0])}y($,function(){st()});const oe=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],_e=a("multifactor"),Pe=a(null),Ie=a(1e5),ct=a(!1),at=a(null);let Ge=null,pt=null;async function St(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ve={initial_capital:Ie.value||1e5};Pe.value&&Pe.value.length===2&&(ve.start_date=Pe.value[0],ve.end_date=Pe.value[1]),ct.value=!0,at.value=null;try{const ye=await fetch("/api/strategies/"+_e.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)});if(!ye.ok){const Lt=await ye.json().catch(()=>({}));throw new Error(Lt.detail||"回测失败")}const Le=await ye.json(),Ke=Le.result||{};if(!Ke.success)throw new Error(Ke.message||"回测失败");Le.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),at.value={total_return_pct:((Ke.total_return??0)*100).toFixed(2),annual_return_pct:((Ke.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ke.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ke.sharpe_ratio??0).toFixed(2),win_rate:((Ke.win_rate??0)*100).toFixed(2),out_sample:Ke.outsample_total_return===void 0?"":((Ke.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ke.overfit_warning||!1,message:Ke.message||""},gt(Ke.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(ye){ElementPlus.ElMessage.error(ye.message||"回测失败")}finally{ct.value=!1}}function gt(U){const ve=document.getElementById("backtestEquityChart");if(!ve||!U||U.length===0)return;const ye=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Le=()=>{pt=U,Ge&&(Ge.dispose(),Ge=null),Ge=echarts.init(ve),Ge.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ke=U.map(Ft=>Ft.date||Ft[0]),Lt=U.map(Ft=>Ft.value??Ft[1]);Ge.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ke,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Lt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};ye?ye().then(Le).catch(()=>{}):Le()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){pt&&gt(pt)}));const Ye=a("overview"),ht=e(()=>{const U=ie.find(ve=>ve.key===Ee.value);return U?U.name:Ee.value}),Tt=a(0),zt=e(()=>{Tt.value;const U={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ve=Ye.value;return Ee.value==="shortterm"&&ve==="market-review"?"qc-research-page":Ee.value==="ops"&&ve==="execution"?"qc-strategies-page":U[Ee.value]||""}),qt=a(!1),kt=a({}),E=a([]);a("");const re=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),xe=a("day"),De=a("all"),Ne=a(null);(function(){if(typeof localStorage>"u")return;const U=localStorage.getItem("quant_user"),ve=localStorage.getItem("quant_token");if(U&&ve)try{Ne.value=JSON.parse(U)}catch{}})();const Be=a(!1),K=a("kline"),ne=a(null),He=a(!1),Je={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},Ue=a({});function yt(U,ve){return Je[ve]||ve}function At(U){const ve=ie.find(Le=>Le.key===U);if(!ve||!ve.subPages||!ve.subPages.length)return;if(!(Ue.value[U]||[]).length){const Le=ve.subPages[0];Ue.value=Object.assign({},Ue.value,{[U]:[{subPage:Le,title:yt(U,Le)}]})}}function Et(U,ve){const ye=window.__quantModules&&window.__quantModules.tabsCore,Le=yt(U,ve);if(ye){const Ke=ye.openTab(Ue.value,U,ve,Le);Ue.value=Ke.groups}else{const Ke=Ue.value[U]||[];Ke.some(Lt=>Lt.subPage===ve)||(Ue.value=Object.assign({},Ue.value,{[U]:Ke.concat([{subPage:ve,title:Le}])}))}We(U,ve)}function jt(U,ve){const ye=window.__quantModules&&window.__quantModules.tabsCore,Le=Ye.value;let Ke=null;if(ye)Ke=ye.closeTab(Ue.value,U,ve,Le),Ue.value=Ke.groups;else{const Pt=Ue.value[U]||[];Ue.value=Object.assign({},Ue.value,{[U]:Pt.filter(va=>va.subPage!==ve)})}if(!(Ue.value[U]||[]).length){At(U);const Pt=ie.find(es=>es.key===U),va=Pt&&Pt.subPages&&Pt.subPages[0];va&&We(U,va);return}const Ft=Ke?Ke.nextActive:null;Ft&&We(U,Ft)}function it(U,ve){if(!(Ue.value[U]||[]).some(Le=>Le.subPage===ve)){Et(U,ve);return}We(U,ve)}y([Ee,Ye],([U,ve])=>{At(U);const ye=Ue.value[U]||[];ve&&!ye.some(Le=>Le.subPage===ve)&&(Ue.value=Object.assign({},Ue.value,{[U]:ye.concat([{subPage:ve,title:yt(U,ve)}])}))},{immediate:!0});const bt=function(U){if(!(U.ctrlKey&&U.key==="Tab"))return;const ve=Ee.value,ye=Ue.value[ve]||[];if(ye.length<=1)return;U.preventDefault();const Le=Ye.value,Ke=Math.max(0,ye.findIndex(Pt=>Pt.subPage===Le)),Lt=U.shiftKey?(Ke-1+ye.length)%ye.length:(Ke+1)%ye.length,Ft=ye[Lt];Ft&&it(ve,Ft.subPage)};window.addEventListener("keydown",bt);const et=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),It=a("light"),ta=[45,220,0,140,270,320],Bt={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},dt=a(45),Nt=a(function(){const U=window.__quantModules&&window.__quantModules.preferences;return U&&U.getPreference&&U.getPreference("theme")||"system"}());(function(){const U=window.__quantModules&&window.__quantModules.preferences,ve=U&&U.getPreference&&U.getPreference("theme_hue");ve!=null&&ve!==""&&(dt.value=parseInt(ve,10))})();function _t(U){return"hsl("+U+", 75%, 42%)"}function pa(U){return Bt[U]||"自定义 "+U}const Xt=a(""),fa=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),Zt=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),aa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],Kt=a({day:[],week:[],month:[],year:[]}),sa=a({});function Vt(U,ve){let ye=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(ye=window.__quantModules.themes.applyTheme(U,ve)),It.value=ye&&ye.mode?ye.mode:U==="dark"||U==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function da(U,ve){const ye=window.__quantModules&&window.__quantModules.preferences;if(!(!ye||!ye.setPreferences))try{ye.setPreferences({theme:U}),ve!=null&&ve!==""&&ye.setPreferences({theme_hue:parseInt(ve,10)})}catch{}}function O(U,ve){Vt(U,ve),ve!=null&&ve!==""&&(dt.value=parseInt(ve,10));const ye=window.__quantModules&&window.__quantModules.themes;let Le=U;ye&&ye.LEGACY_MAP&&ye.LEGACY_MAP[U]&&(Le=ye.LEGACY_MAP[U][0]),Le==="light"||Le==="dark"||Le==="system"?Nt.value=Le:Nt.value=It.value,Le==="system"&&(Le=It.value),da(Le,ve),Ne.value&&(fetch(`/api/users/${Ne.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Le})}),Ne.value.theme=Le,localStorage.setItem("quant_user",JSON.stringify(Ne.value)))}function fe(U){const ve=window.__quantModules&&window.__quantModules.preferences,ye=ve&&ve.getPreference?ve.getPreference("theme_hue"):null;O(U,ye)}function Oe(U){dt.value=parseInt(U,10);const ve=window.__quantModules&&window.__quantModules.preferences,ye=ve&&ve.getPreference&&ve.getPreference("theme")||"light";O(ye,dt.value)}const Ce=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function tt(U){Ce.value=!!U;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",U?"show":"hide")}catch{}}const Qe=e(()=>{const U=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return Ce.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...U]:U}),ft=a("daily");(function(){try{const ve=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ve==="weekly"||ve==="monthly")&&(ft.value=ve)}catch{}})();const Wt=a(!1),Jt=a(""),la=a(!1),Ut=a(!1),ea=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Sa=["MA5","MA10","MA20","MA60"],ga=a(!1);let Ot=0;async function Qt(U){if(!ne.value)return!1;const ve=++Ot;Wt.value=!0,ft.value=U;try{const Le=await(await fetch(`/api/market/kline/${ne.value.stock}?period=${U}&limit=60`)).json();if(!Le.success||!Le.data)throw new Error(Le.message||"数据获取失败");return Jt.value=Le.degraded_from?"分钟数据("+Le.degraded_from+")暂不可用, 已降级展示日线":"",Hs(ne.value.stock),ve!==Ot?!1:(K.value!=="kline"||(Ut.value=!0,await b(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Le.data,U,!1,{isMobile:ls.value,onLegend:Ke=>{Object.keys(ea.value).forEach(Lt=>{Lt in Ke&&(ea.value[Lt]=!!Ke[Lt])})}}),s()),!0)}catch(ye){return console.error("[kline] 加载失败:",ne.value&&ne.value.stock,U,ye),K.value==="kline"&&(Ut.value=!1,Jt.value="",ElementPlus.ElMessage.error("K线加载失败: "+(ye&&ye.message?ye.message:"数据源不可达，请重试"))),!1}finally{Wt.value=!1}}async function ua(U){if(ja.value){la.value=!0,ft.value=U;try{const ye=await(await fetch(`/api/market/kline/${ja.value.code}?period=${U}&limit=60`)).json();if(!ye.success||!ye.data)throw new Error(ye.message||"数据获取失败");ga.value=!0,await b(),window.__quantModules.charts.renderKlineTo("indexKlineChart",ye.data,U,!0,{isMobile:ls.value,onLegend:Le=>{Object.keys(ea.value).forEach(Ke=>{Ke in Le&&(ea.value[Ke]=!!Le[Ke])})}}),s()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{la.value=!1}}}async function Ca(U){if(!Ut.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await Qt(U)}async function qa(U){if(!ga.value){ElementPlus.ElMessage.info("请先加载K线");return}await ua(U)}function Ea(U){const ve=(Be.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Oa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ve&&ve.dispatchAction({type:"legendToggleSelect",name:U})}function s(){["K线","MA5","MA10","MA20","MA60"].forEach(U=>{ea.value[U]=!0})}async function r(){const U=await fetch("/api/system/metrics");if(!U.ok)throw new Error("metrics "+U.status);const ve=await U.json(),ye=Array.isArray(ve)?ve:ve&&ve.data_sources||[];E.value=ye}const W=()=>Za,we=()=>ys,he=()=>ko,ot=()=>Ma,Xe=()=>Ya,nt=window.__quantAppLogic.data.create({currentView:xe,statusFilter:De,dashboardData:kt,loadHealthMetrics:r,getLoadDashboardData:W,getLastRefreshTime:we,getFetchPoolSignals:he}),{loading:$t,loadingView:Ct,viewCache:ia,dates:Gt,selectedDate:Ae,lastLoadTime:Mt,consensus:Yt,viewNote:ha,loadDates:xt,refreshCalendarData:Pa,exportCSV:as,loadConsensusData:wa,loadDashboardCached:Da}=nt,el=window.__quantAppLogic.market.create({currentKlinePeriod:ft,loadIndexKline:ua,rememberDialogTrigger:M,menus:$,currentPage:Ee,currentSubPage:Ye,stockDetail:ne,selectedDate:Ae}),{marketData:tl,indexDetailVisible:Oa,indexDetail:ja,indexAiResult:al,indexAiLoading:sl,fetchMarketData:Va,showIndexDetail:ll,loadCachedIndexEval:il,doIndexAiEvaluate:nl,disposeStockKline:ss,isMobile:ls,zoomKlineRange:ol,scoreAnimating:rl,scoreDelta:cl,scorePulse:dl,refreshStockScore:Fa,animateScoreEntrance:Ha,onTouchStart:ul,onTouchEnd:vl}=el,ml=window.__quantAppLogic.ops.create({navigateTo:We,currentPage:Ee,currentSubPage:Ye}),{feishuConfig:is,feishuTestStatus:pl,feishuTestMessage:fl,testFeishuWebhook:gl,saveFeishuConfig:hl,aiFabHidden:yl,openAiFab:ns,strategyRecommendations:bl,aiUsage:wl,loadStrategyRecommendations:os,loadAiUsage:Ba,sysMonitor:kl,analyticsRank:_l,analyticsDays:xl,loadSysMonitor:rs,loadAnalytics:cs,healthDetail:Sl,loadHealthDetail:ds,reviewTriggering:Cl,triggerMarketReview:ql,factCheck:El,factCheckRunning:Ml,loadFactCheck:us,triggerFactCheck:Tl,backups:Pl,backupCreating:Dl,loadBackups:vs,createBackup:Rl,restoreBackup:zl,reportExporting:Al,reportExportMsg:Ll,exportReport:Il,tourVisible:Nl,tourStep:Ol,tourSteps:jl,maybeShowTour:Vl,skipTour:Fl,finishTour:Hl,feedbackText:Bl,feedbackSubmitting:Kl,submitFeedback:Wl}=ml,Ul=window.__quantAppLogic.nav.create({currentView:xe,selectedDate:Ae,dates:Gt,loadConsensusData:wa,hapticFeedback:l}),{viewUnit:Gl,datePickerType:Yl,dateFormat:Jl,canNavPrev:Ql,canNavNext:$l,switchView:ms,navigateDate:ps,disabledDate:Xl,onDateChange:Zl}=Ul,ei=window.__quantAppLogic.keys.create({menus:$,subPageNames:Je,navigateTo:We,currentPage:Ee,currentView:xe,navigateDate:ps,switchView:ms,getLoadDashboardData:W,refreshCalendarData:Pa,getLoadAiHistory:ot,exportCSV:as,getShowBatchEvaluate:Xe,openAiFab:ns,toggleSidebar:be,showStockDetail:gs}),{searchQuery:ti,searchStocks:ai,onSearchSelect:si,shortcutHelpVisible:li,commandPaletteVisible:ii,handleGlobalKeydown:fs}=ei;let Ra=0;async function gs(U){const ve=++Ra;M(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(U,""),Wa.value=null,ft.value="daily",Ut.value=!1,K.value="kline",ne.value=null,He.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Be.value=!0,b(()=>Ha());try{const ye=await fetch(`/api/calendar/stock/${U}?date=${Ae.value}`);if(ve!==Ra)return;ne.value=await ye.json(),ne.value&&ne.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(U,ne.value.name)}catch{if(ve!==Ra)return;ElementPlus.ElMessage.error("加载失败"),ne.value={stock:U,name:"",total_days:0}}finally{ve===Ra&&(He.value=!1)}setTimeout(async()=>{await Qt("daily"),Fa()},500),Ja(U)}const ni=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:Ut,stockDetailVisible:Be,stockDetailTab:K,stockDetail:ne,disposeStockKline:ss}):{},{chatSessions:oi,chatHistoryView:ri,selectedChatIds:ci,expandedChatDates:di,expandedChatMonths:ui,expandedChatStocks:vi,chatHistoryLoading:mi,chatHistoryError:pi,allChatSessionsFlat:fi,chatGroupedByDate:gi,chatGroupedByMonth:hi,chatGroupedByStock:yi,toggleSelectChat:bi,toggleSelectChatDate:wi,toggleSelectChatMonth:ki,toggleSelectChatStock:_i,toggleChatDateExpand:xi,toggleChatMonthExpand:Si,toggleChatStockExpand:Ci,selectAllChatSessions:qi,deleteSelectedChatSessions:Ei,viewChatSession:Mi,loadChatHistory:hs,deleteChatSession:Ti,renderMarkdown:Pi,stockChatInput:Di,stockChatMessages:Ri,stockChatLoading:zi,stockChatError:Ai,askStockSend:Li,askStockQuick:Ii}=ni,Ni=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:Ne,applyTheme:Vt,allMenuDefs:ie,loadGroupConfig:ue}):{},{userList:Oi,userSearch:ji,groupFilter:Vi,userPageTab:Fi,expandedGroups:Hi,addMemberGroupMap:Bi,filteredUsers:Ki,toggleGroupExpand:Wi,removeMemberFromGroupInline:Ui,addMemberToGroupInline:Gi,changeUserGroup:Yi,showAddUser:Ji,editingUser:Qi,userForm:$i,savingUser:Xi,editingGroup:Zi,menuConfigDialog:en,memberDialog:tn,groupEditForm:an,subPageCache:sn,showAddGroup:ln,addGroupForm:nn,savingGroup:on,groupMembers:rn,addMemberUsername:cn,selectedMemberGroup:dn,subPageSectionExpanded:un,toggleSubPageSection:vn,getGroupMemberCount:mn,getMenuEnabledCount:pn,groupCount:fn,openMemberManager:gn,loadGroupMembers:hn,addMemberToGroup:yn,removeMemberFromGroup:bn,availableUsersForGroup:wn,onParentToggle:kn,openMenuConfig:_n,saveMenuConfig:xn,deleteGroupConfig:Sn,createGroup:Cn,allGroups:qn,getGroupName:En,loadAllGroups:Ka,loadUsers:za,editUser:Mn,saveUser:Tn,deleteUser:Pn,toggleUserEnabled:Dn,resetUserPassword:Rn}=Ni,zn=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:Yt,currentPage:Ee,currentSubPage:Ye,dashboardData:kt,searchKeyword:Xt,statusFilter:De,strategyFilter:Zt,strategyFilterCounts:Kt}):{},{applyStrategyFilter:Wp,statusCounts:An,stockPool:Ln,strategyDistribution:In,strategyPreviewCount:Nn,saveStrategyFilter:On,filteredConsensusRank:jn,currentPoolSize:Vn,filteredStrategyCounts:Fn,poolChangeBadge:Hn,timeBarPercent:Bn,lastRefreshTime:ys,timeSinceRefresh:Kn,navigateToStrategyFilter:Wn}=zn,Un=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:R,consensus:Yt}):{},{aiResult:Wa,lastEvalTime:Gn,evalHistoryComparison:Yn,checklistItems:Jn,aiHistory:bs,selectedHistoryIds:ws,expandedDates:ks,expandedMonths:Qn,expandedStocks:_s,poolSignals:$n,toggleMonthExpand:Xn,aiHistoryView:Zn,selectedWatchlistCodes:xs,showAutoEvaluateSettings:Ss,savingConfig:Cs,autoEvaluateScope:qs,aiVendors:eo,aiCatalog:to,aiModelsError:ao,testingAllModels:so,savingAiModels:lo,loadAiVendors:Aa,loadAiCatalog:Es,saveAiVendors:Ms,saveAiModels:io,testVendorModel:no,testAllVendorModels:oo,fetchVendorModels:ro,addVendorFromCatalog:co,addCustomVendor:uo,addVendorModel:vo,removeVendorModel:mo,removeVendor:po,toggleVendorKeyReveal:fo,toggleVendorEdit:go,autoEvaluateConfig:Ua,aiLoading:Ga,aiEvalStage:Ts,aiEvalElapsed:Ps,aiEvalError:Ds,showBatchEvaluate:Ya,batchStocks:Rs,batchRunning:zs,batchTotal:As,batchCompleted:Ls,batchCurrent:Is,batchStatuses:Ns,batchResults:Os,batchEvalErrors:js,aiConfig:Vs,selectedPreset:ho,providerInfo:yo,aiPresets:Up,applyPreset:bo,onProviderChange:wo,fetchPoolSignals:ko,cancelPoolSignals:Fs,loadLastEvaluation:Ja}=Un,_o=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:Ne,selectedDate:Ae,stockDetail:ne,stockDetailTab:K,stockDetailVisible:Be,stockDetailLoading:He,stockKlineLoaded:Ut,viewCache:ia,animateScoreEntrance:Ha,loadStockKline:Qt,refreshStockScore:Fa,disposeStockKline:ss,aiHistory:bs,aiLoading:Ga,aiEvalStage:Ts,aiEvalElapsed:Ps,aiEvalError:Ds,aiResult:Wa,loadLastEvaluation:Ja,autoEvaluateConfig:Ua,autoEvaluateScope:qs,batchStocks:Rs,batchRunning:zs,batchTotal:As,batchCompleted:Ls,batchCurrent:Is,batchStatuses:Ns,batchResults:Os,batchEvalErrors:js,expandedDates:ks,expandedStocks:_s,savingConfig:Cs,selectedHistoryIds:ws,selectedWatchlistCodes:xs,showAutoEvaluateSettings:Ss,showBatchEvaluate:Ya}):{},{quickEvalStock:xo,evalStrategy:So,watchlistSort:Co,watchlist:qo,watchlistCodes:Eo,sortedWatchlist:Mo,getWatchlistScore:To,getLatestScore:Gp,addSearchResult:Po,evaluatedCodes:Do,klineLoadedCodes:Ro,markKlineLoaded:Hs,watchlistSearch:zo,watchlistResults:Ao,watchlistSearching:Lo,dataRefreshConfig:Io,dataRefreshReloading:No,dataRefreshSaving:Oo,aiHistoryLoading:jo,aiHistoryError:Vo,aiHistoryTotal:Fo,aiHistoryLoadingMore:Ho,hasMoreAiHistory:Bo,loadMoreAiHistory:Ko,watchlistLoading:Wo,doAiEvaluate:Uo,loadAiHistory:Ma,deleteSingleHistory:Go,toggleSelectHistory:Yo,clearSelection:Jo,clearWatchlistSelection:Qo,batchReevaluateHistory:$o,batchAddToWatchlist:Xo,batchRemoveWatchlist:Zo,toggleSelectWatchlist:er,selectAllHistory:tr,selectAllWatchlist:ar,deleteSelectedHistory:sr,loadAutoEvaluateConfig:Bs,saveAutoEvaluateConfig:lr,loadWatchlist:Ks,addToWatchlist:ir,removeFromWatchlist:nr,clearWatchlist:or,toggleWatchlist:rr,showStockKline:cr,preloadingKline:dr,preloadWatchlistKline:Ws,watchlistEvaluate:ur,batchEvaluateWatchlist:vr,batchEvaluateSelected:mr,searchStockForWatchlist:pr,loadDataRefreshConfig:Us,saveDataRefreshConfig:fr,triggerDataReload:gr,triggerDataPull:hr,dataPullRunning:yr,groupedByDate:br,aiHistoryByStock:wr,groupedByMonth:kr,aiHistoryStockCount:_r,scoreDistribution:xr,quickEvaluate:Sr,toggleDateExpand:Cr,toggleSelectDate:qr,toggleSelectMonth:Er,toggleStockExpand:Mr,toggleSelectStock:Tr,registerTrendChart:Pr,viewAiResult:Dr,doBatchEvaluate:Rr,realtimeQuotes:zr,realtimeDegraded:Ar,realtimeWsState:Lr,connectRealtimeQuotes:Ir,disconnectRealtimeQuotes:Nr,quoteWarningFor:Or,realtimeQuoteColor:jr,realtimePriceText:Vr,realtimePctText:Fr,realtimeRatioText:Hr,REALTIME_DEGRADED_TEXT:Br,REALTIME_FALLBACK_TEXT:Kr}=_o,Wr=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:oe}):{},{btStrategyOptions:Ur,btSelectedStrategies:Gr,toggleBtStrategy:Yr,btDateRange:Jr,btCapital:Qr,btCommissionRate:$r,btIncludeBenchmark:Xr,btRunning:Zr,btResult:ec,btError:tc,btMetrics:ac,btAnnualReturns:sc,btTrades:lc,btStrategyMetricsRows:ic,btDrawdownRegion:nc,runBacktestWorkbench:oc,exportBacktestCSV:rc,registerBacktestNavChart:cc,btFmtNum:dc}=Wr,uc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:R,aiConfig:Vs,aiLoading:Ga,feishuConfig:is,currentTheme:It,changeTheme:O,autoEvaluateConfig:Ua,currentUser:Ne,strategyFilter:Zt,applyTheme:Vt,dashboardData:kt,lastRefreshTime:ys,saveAiModels:io}):{},{configSaving:vc,globalConfigDirty:mc,lastSavedTime:pc,feishuConfigOriginal:Yp,aiConfigOriginal:Jp,tushareConfigOriginal:Qp,tushareConfig:fc,tushareStatus:gc,datasourceConfig:hc,datasourceStatus:yc,syncingData:bc,stockCount:wc,tradeDateCount:kc,aiStatus:_c,appVersion:Gs,showImportDialog:xc,rateLimitConfig:Sc,rateLimitDirty:Cc,rateLimitSaving:qc,loadRateLimit:Qa,saveRateLimit:Ec,saveAiConfig:Mc,testAiApi:Tc,exportConfig:Pc,importConfig:Dc,saveAllConfig:Rc,resetAllConfig:zc,testTushareConnection:Ac,checkTushareConnection:La,syncStockData:Lc,loadTushareConfig:Ys,loadDatasourceConfig:Js,saveDatasourceConfig:Ic,testDatasource:Nc,toggleDatasourceKeyReveal:Oc,toggleDatasourceEdit:jc,loadFeishuConfig:$a,loadAiConfig:Ia,loadUserConfig:Qs,loadSystemStatus:Xa,loadDashboardData:Za}=uc,Vc=window.__quantAppLogic.auth.create({currentUser:Ne,loadUserConfig:Qs,loadDates:xt,loadDashboardData:Za,loadDashboardCached:Da,loadHealthMetrics:r,loadConsensusData:wa,applyTheme:Vt,maybeShowTour:Vl,loadAiVendors:Aa}),{loginForm:Fc,logining:Hc,guestLogining:Bc,showChangePassword:Kc,changePasswordForm:Wc,changingPassword:Uc,showSetupWizard:Gc,setupForm:Yc,setupStep:Jc,checkSetupWizard:Qc,completeSetupWizard:$c,resetSetupWizard:Xc,handleLogin:Zc,handleGuestLogin:ed,handleLogout:td,doChangePassword:ad}=Vc;window.__quantAppLogic.watch.register({strategyFilter:Zt,currentView:xe,statusFilter:De,currentPage:Ee,currentSubPage:Ye,menus:$,currentUser:Ne,strategyFilterCounts:Kt,lazyTick:Tt,dates:Gt,selectedDate:Ae,consensus:Yt,loadConsensusData:wa,fetchMerrillClock:Q,fetchMarketData:Va,loadWatchlist:Ks,loadAiHistory:Ma,preloadWatchlistKline:Ws,loadChatHistory:hs,loadSystemStatus:Xa,checkTushareConnection:La,loadSysMonitor:rs,loadAnalytics:cs,loadHealthDetail:ds,loadHealthMetrics:r,loadAiUsage:Ba,loadFactCheck:us,loadAutoEvaluateConfig:Bs,loadDatasourceConfig:Js,loadFeishuConfig:$a,loadAiConfig:Ia,loadAiVendors:Aa,loadRateLimit:Qa,loadDataRefreshConfig:Us,loadBackups:vs,loadAllGroups:Ka,loadUsers:za,stockDetailTab:K,stockDetailVisible:Be,stockKlineLoaded:Ut,loadStockKline:Qt,currentKlinePeriod:ft,showMerrillDetail:G,indexDetailVisible:Oa,restoreDialogFocus:w});const sd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:fs,applyTheme:Vt,menus:$,currentPage:Ee,currentSubPage:Ye,currentView:xe,currentKlinePeriod:ft,selectedDate:Ae,dates:Gt,loadDates:xt,loadConsensusData:wa,loadDashboardCached:Da,appVersion:Gs,themes:et,fetchMarketData:Va,fetchMerrillStages:Y,fetchMerrillClock:Q,loadMerrillTimeline:C,showTimelineStage:h,merrillTimeline:Z,timelineLoading:pe,loadAiConfig:Ia,loadAiVendors:Aa,loadAiCatalog:Es,currentUser:Ne,loadUserConfig:Qs,loadAutoEvaluateConfig:Bs,loadGroupConfig:ue,loadUsers:za,loadAllGroups:Ka,loadAiHistory:Ma}),{runOnMounted:ld}=sd;window.__quantGoPage=async(U,ve)=>{try{const ye=window.__lazyLoaders&&window.__lazyLoaders[U];ye&&await ye()}catch(ye){console.warn("[lazy] 页面组件加载失败",U,ye)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(ye=>{ye&&ye.name&&!ye.__quantRegistered&&(window.__quantApp.component(ye.name,ye),ye.__quantRegistered=!0)}),Tt&&Tt.value++,Ee.value=U,ve&&(Ye.value=ve)};let ka;y(Ee,async U=>{var ve;l("light");try{const ye=ie.find(function(Le){return Le.key===U});document.title=(ye?ye.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",U),U!=="calendar"&&typeof Fs=="function"&&Fs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:U})}).catch(()=>{})}catch(ye){console.warn("pageView track failed:",ye)}if(ka&&(clearInterval(ka),ka=null),U==="strategies")await Da(),ka=setInterval(()=>{Da().catch(()=>{})},5*60*1e3);else if(U==="calendar")Ae.value&&await wa();else if(U==="ai")os(),Ba(),await Ma();else if(U==="system"){if(!Ae.value){const Le=await(await fetch("/api/dashboard")).json(),Ke=Le.data||Le;Ke.latest_date&&(Ae.value=Ke.latest_date)}if(Ae.value){const ye=["day","week","month","year"];for(const Le of ye)try{const Lt=await(await fetch(`/api/view/${Le}/${Ae.value}?status=all`)).json();Kt.value[Le]=Lt.stocks||[]}catch(Ke){console.warn("loadConsensusData view load failed:",Ke)}(!Yt.value||Yt.value.length===0)&&(Yt.value=Kt.value.day||[])}((ve=Ne.value)==null?void 0:ve.role)==="admin"&&(await za(),await $a(),await Ys(),await Xa(),await Ia(),await Qa(),La(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(La,36e5)))}}),p(async()=>{await ld()}),qe(),C(),t(()=>{ka&&clearInterval(ka),window.removeEventListener("keydown",fs),window.removeEventListener("keydown",bt)});function id(U,ve=2){return U==null||U===""||isNaN(Number(U))?"--":Number(U).toFixed(ve)}return{currentPage:Ee,pageComp:zt,currentSubPage:Ye,sidebarCollapsed:le,menus:$,navMode:$e,setNavMode:mt,tabGroups:Ue,openTab:Et,closeTab:jt,activateTab:it,fmtNum:id,sanitizeHtml:D,keyClick:k,isOnline:n,currentUser:Ne,allMenuDefs:ie,t:q,locale:o,changeLanguage:i,currentPageName:ht,subPageNames:Je,searchQuery:ti,searchStocks:ai,onSearchSelect:si,selectedDate:Ae,onDateChange:Zl,disabledDate:Xl,refreshCalendarData:Pa,exportCSV:as,viewNote:ha,loading:$t,lastLoadTime:Mt,resetSetupWizard:Xc,showChangePassword:Kc,themes:et,currentTheme:It,changeTheme:O,changeThemeMode:fe,changeThemeHue:Oe,handleLogout:td,themeHues:ta,themeHueNames:Bt,themeHue:dt,themeMode:Nt,hueColor:_t,hueName:pa,marketData:tl,merrillData:V,merrillTimeline:Z,timelineLoading:pe,merrillStagesConfig:A,fetchMerrillStages:Y,healthMetrics:E,feishuConfig:is,feishuTestStatus:pl,feishuTestMessage:fl,shortcutHelpVisible:li,shortcutHelpItems:Ze,commandPaletteVisible:ii,tourVisible:Nl,tourStep:Ol,tourSteps:jl,skipTour:Fl,finishTour:Hl,backups:Pl,backupCreating:Dl,loadBackups:vs,createBackup:Rl,restoreBackup:zl,reportExporting:Al,reportExportMsg:Ll,exportReport:Il,sysMonitor:kl,analyticsRank:_l,analyticsDays:xl,loadSysMonitor:rs,loadAnalytics:cs,healthDetail:Sl,loadHealthDetail:ds,reviewTriggering:Cl,triggerMarketReview:ql,factCheck:El,factCheckRunning:Ml,loadFactCheck:us,triggerFactCheck:Tl,strategyRecommendations:bl,aiUsage:wl,loadStrategyRecommendations:os,loadAiUsage:Ba,aiFabHidden:yl,openAiFab:ns,feedbackText:Bl,feedbackSubmitting:Kl,submitFeedback:Wl,backtestStrategies:oe,backtestStrategy:_e,backtestRange:Pe,backtestCapital:Ie,backtestRunning:ct,backtestResult:at,runBacktest:St,btStrategyOptions:Ur,btSelectedStrategies:Gr,toggleBtStrategy:Yr,btDateRange:Jr,btCapital:Qr,btCommissionRate:$r,btIncludeBenchmark:Xr,btRunning:Zr,btResult:ec,btError:tc,btMetrics:ac,btAnnualReturns:sc,btTrades:lc,btStrategyMetricsRows:ic,btDrawdownRegion:nc,runBacktestWorkbench:oc,exportBacktestCSV:rc,registerBacktestNavChart:cc,btFmtNum:dc,fetchMarketData:Va,fetchMerrillClock:Q,testFeishuWebhook:gl,saveFeishuConfig:hl,merrillClockConfig:te,merrillClockLastUpdated:N,merrillReevalResult:P,merrillReevalLoading:L,saveMerrillClockConfig:Me,doMerrillReevaluate:je,dataRefreshConfig:Io,dataRefreshReloading:No,dataRefreshSaving:Oo,loadDataRefreshConfig:Us,saveDataRefreshConfig:fr,triggerDataReload:gr,triggerDataPull:hr,dataPullRunning:yr,indexDetailVisible:Oa,indexDetail:ja,indexAiResult:al,indexAiLoading:sl,loadCachedIndexEval:il,showIndexDetail:ll,doIndexAiEvaluate:nl,klinePeriods:Qe,currentKlinePeriod:ft,klineLoading:Wt,indexKlineLoading:la,stockKlineLoaded:Ut,indexKlineLoaded:ga,klineDegradeNote:Jt,klineShowMinutes:Ce,toggleKlineShowMinutes:tt,loadStockKline:Qt,switchKlinePeriod:Ca,loadIndexKline:ua,switchIndexKlinePeriod:qa,zoomKlineRange:ol,MA_LINES:Sa,klineMaVisible:ea,toggleKlineMa:Ea,scoreAnimating:rl,scoreDelta:cl,scorePulse:dl,refreshStockScore:Fa,animateScoreEntrance:Ha,showMerrillDetail:G,merrillDetailData:ee,showStageDetail:ge,getCharLabel:u,getAssetName:j,getRankColor:ae,timelineStages:F,getStageAngle:se,getCycleProgress:B,getCurrentStageMonths:T,getStageTotalMonths:d,isStageCompleted:S,stages:z,indicatorList:X,dimensionScoreList:J,confidenceColor:H,views:re,currentView:xe,statusFilter:De,loginForm:Fc,logining:Hc,guestLogining:Bc,dashboardData:kt,loadingView:Ct,dates:Gt,consensus:Yt,searchKeyword:Xt,stockDetailVisible:Be,stockDetailTab:K,stockDetail:ne,stockDetailLoading:He,aiLoading:Ga,aiEvalStage:Ts,aiEvalElapsed:Ps,aiEvalError:Ds,showBatchEvaluate:Ya,batchStocks:Rs,batchRunning:zs,batchTotal:As,batchCompleted:Ls,batchCurrent:Is,batchStatuses:Ns,batchResults:Os,batchEvalErrors:js,aiConfig:Vs,userList:Oi,showAddUser:Ji,editingUser:Qi,userForm:$i,savingUser:Xi,userSearch:ji,filteredUsers:Ki,groupFilter:Vi,userPageTab:Fi,expandedGroups:Hi,addMemberGroupMap:Bi,toggleGroupExpand:Wi,removeMemberFromGroupInline:Ui,addMemberToGroupInline:Gi,changeUserGroup:Yi,statusCounts:An,stockPool:Ln,poolSignals:$n,aiResult:Wa,aiHistory:bs,groupedByDate:br,groupedByMonth:kr,expandedDates:ks,expandedMonths:Qn,aiHistoryByStock:wr,aiHistoryStockCount:_r,expandedStocks:_s,aiHistoryView:Zn,aiHistoryLoading:jo,aiHistoryError:Vo,aiHistoryTotal:Fo,aiHistoryLoadingMore:Ho,hasMoreAiHistory:Bo,loadMoreAiHistory:Ko,watchlistLoading:Wo,scoreDistribution:xr,quickEvalStock:xo,evalStrategy:So,checklistItems:Jn,evalHistoryComparison:Yn,quickEvaluate:Sr,selectedHistoryIds:ws,showAutoEvaluateSettings:Ss,savingConfig:Cs,autoEvaluateConfig:Ua,autoEvaluateScope:qs,strategyList:fa,toggleDateExpand:Cr,toggleMonthExpand:Xn,toggleSelectDate:qr,toggleSelectMonth:Er,toggleSelectStock:Tr,toggleStockExpand:Mr,registerTrendChart:Pr,selectedWatchlistCodes:xs,clearWatchlistSelection:Qo,toggleSelectWatchlist:er,selectAllHistory:tr,selectAllWatchlist:ar,batchRemoveWatchlist:Zo,batchEvaluateSelected:mr,batchReevaluateHistory:$o,batchAddToWatchlist:Xo,viewUnit:Gl,datePickerType:Yl,dateFormat:Jl,canNavPrev:Ql,canNavNext:$l,handleLogin:Zc,handleGuestLogin:ed,switchView:ms,navigateDate:ps,navigateTo:We,loadDashboardData:Za,loadConsensusData:wa,showStockDetail:gs,doAiEvaluate:Uo,doBatchEvaluate:Rr,loadAiHistory:Ma,loadLastEvaluation:Ja,lastEvalTime:Gn,viewAiResult:Dr,saveAiConfig:Mc,testAiApi:Tc,exportConfig:Pc,importConfig:Dc,configSaving:vc,configChanged:R,watchlist:qo,watchlistCodes:Eo,watchlistSearch:zo,watchlistResults:Ao,watchlistSearching:Lo,watchlistSort:Co,sortedWatchlist:Mo,getWatchlistScore:To,addSearchResult:Po,evaluatedCodes:Do,klineLoadedCodes:Ro,markKlineLoaded:Hs,loadWatchlist:Ks,addToWatchlist:ir,removeFromWatchlist:nr,clearWatchlist:or,searchStockForWatchlist:pr,toggleWatchlist:rr,batchEvaluateWatchlist:vr,watchlistEvaluate:ur,showStockKline:cr,preloadWatchlistKline:Ws,preloadingKline:dr,realtimeQuotes:zr,realtimeDegraded:Ar,realtimeWsState:Lr,connectRealtimeQuotes:Ir,disconnectRealtimeQuotes:Nr,quoteWarningFor:Or,realtimeQuoteColor:jr,realtimePriceText:Vr,realtimePctText:Fr,realtimeRatioText:Hr,REALTIME_DEGRADED_TEXT:Br,REALTIME_FALLBACK_TEXT:Kr,toggleSelectHistory:Yo,clearSelection:Jo,deleteSingleHistory:Go,deleteSelectedHistory:sr,saveAutoEvaluateConfig:lr,editUser:Mn,saveUser:Tn,deleteUser:Pn,loadUsers:za,allGroups:qn,loadAllGroups:Ka,getGroupName:En,toggleUserEnabled:Dn,resetUserPassword:Rn,selectedPreset:ho,applyPreset:bo,onProviderChange:wo,providerInfo:yo,globalConfigDirty:mc,lastSavedTime:pc,tushareConfig:fc,tushareStatus:gc,syncingData:bc,stockCount:wc,tradeDateCount:kc,aiStatus:_c,appVersion:Gs,showImportDialog:xc,rateLimitConfig:Sc,rateLimitDirty:Cc,rateLimitSaving:qc,loadRateLimit:Qa,saveRateLimit:Ec,saveAllConfig:Rc,resetAllConfig:zc,testTushareConnection:Ac,syncStockData:Lc,loadTushareConfig:Ys,loadFeishuConfig:$a,loadSystemStatus:Xa,loadAiConfig:Ia,aiVendors:eo,aiCatalog:to,aiModelsError:ao,testingAllModels:so,savingAiModels:lo,loadAiVendors:Aa,loadAiCatalog:Es,saveAiVendors:Ms,saveAiModels:Ms,testVendorModel:no,testAllVendorModels:oo,fetchVendorModels:ro,addVendorFromCatalog:co,addCustomVendor:uo,addVendorModel:vo,removeVendorModel:mo,removeVendor:po,toggleVendorKeyReveal:fo,toggleVendorEdit:go,checkTushareConnection:La,datasourceConfig:hc,datasourceStatus:yc,loadDatasourceConfig:Js,saveDatasourceConfig:Ic,testDatasource:Nc,toggleDatasourceKeyReveal:Oc,toggleDatasourceEdit:jc,strategyFilter:Zt,strategyFilterOptions:aa,strategyFilterCounts:Kt,strategyPreviewCount:Nn,saveStrategyFilter:On,filteredConsensusRank:jn,currentPoolSize:Vn,filteredStrategyCounts:Fn,strategyDistribution:In,expandedStrategies:sa,poolChangeBadge:Hn,timeBarPercent:Bn,timeSinceRefresh:Kn,navigateToStrategyFilter:Wn,showUserMenu:qt,toggleSidebar:be,groupsConfig:Te,loadGroupConfig:ue,editingGroup:Zi,groupEditForm:an,showAddGroup:ln,addGroupForm:nn,savingGroup:on,menuConfigDialog:en,memberDialog:tn,groupMembers:rn,addMemberUsername:cn,selectedMemberGroup:dn,subPageSectionExpanded:un,toggleSubPageSection:vn,getGroupMemberCount:mn,getMenuEnabledCount:pn,groupCount:fn,openMemberManager:gn,loadGroupMembers:hn,addMemberToGroup:yn,removeMemberFromGroup:bn,availableUsersForGroup:wn,subPageCache:sn,onParentToggle:kn,openMenuConfig:_n,saveMenuConfig:xn,deleteGroupConfig:Sn,createGroup:Cn,changePasswordForm:Wc,changingPassword:Uc,doChangePassword:ad,showSetupWizard:Gc,setupForm:Yc,setupStep:Jc,checkSetupWizard:Qc,completeSetupWizard:$c,chatSessions:oi,chatHistoryView:ri,selectedChatIds:ci,expandedChatDates:di,expandedChatMonths:ui,expandedChatStocks:vi,chatHistoryLoading:mi,chatHistoryError:pi,allChatSessionsFlat:fi,chatGroupedByDate:gi,chatGroupedByMonth:hi,chatGroupedByStock:yi,toggleSelectChat:bi,toggleSelectChatDate:wi,toggleSelectChatMonth:ki,toggleSelectChatStock:_i,toggleChatDateExpand:xi,toggleChatMonthExpand:Si,toggleChatStockExpand:Ci,selectAllChatSessions:qi,deleteSelectedChatSessions:Ei,viewChatSession:Mi,loadChatHistory:hs,deleteChatSession:Ti,renderMarkdown:Pi,stockChatInput:Di,stockChatMessages:Ri,stockChatLoading:zi,stockChatError:Ai,askStockSend:Li,askStockQuick:Ii,onTouchStart:ul,onTouchEnd:vl,hapticFeedback:l}}})();ba.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=Ev;window.__quantComponents.Header=_m;window.__quantComponents.SubNav=Lm;window.__quantComponents.MobileNav=ep;window.__quantComponents.StockList=Ap;window.__quantComponents.TopTabs=Bp;window.__quantComponents.AppIcon=ba;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Kp();
