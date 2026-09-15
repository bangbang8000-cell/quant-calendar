var wd=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as kd,L as ve,O as oa,Z as _d,au as Gt,M as ye,P as Se,aW as xd,a0 as Fe,_ as He,F as ot,al as kt,S as ut,a1 as dt,X as na,ai as At,q as Ea,o as ja,a8 as ls,r as zt,e as lt,av as Sd,Y as Da,$ as ka,R as Cd,aC as ia,T as qd,Q as ga,p as Ed,n as Md}from"./vendor-vue-DDF9zi1T.js";import{e as Td,E as Pd,a as Dd,b as Rd,c as zd,z as Ad}from"./vendor-ep-VOop1zGa.js";import{C as Ld,F as Id,P as Nd,a as Od,b as jd,c as Vd,T as Fd,S as Hd,L as Bd,d as Kd,G as Wd,U as Ud,e as Gd,f as Yd,g as Jd,D as Qd,B as $d,h as Xd,M as Zd,i as eu,R as tu,j as au,k as su,K as lu,l as iu,W as nu,m as ou,n as ru,o as cu,p as du,q as uu,r as vu,s as mu,t as pu,O as fu,u as gu,v as hu,w as yu,x as bu,y as wu,z as ku,A as _u,E as xu,H as Su,I as Cu,J as qu,N as Eu,Q as Mu,V as Tu,X as Pu,Y as Du,Z as Ru,_ as zu,$ as Au,a0 as Lu,a1 as Iu,a2 as Nu,a3 as Ou,a4 as ju,a5 as Vu,a6 as Fu,a7 as Hu,a8 as Bu,a9 as Ku,aa as Wu,ab as Uu,ac as Gu,ad as Yu,ae as Ju,af as Qu,ag as $u,ah as Xu,ai as Zu,aj as ev,ak as tv,al as av,am as sv,an as lv,ao as iv,ap as nv,aq as ov,ar as rv,as as cv,at as dv,au as uv,av as vv,aw as mv,ax as pv,ay as fv,az as gv,aA as hv,aB as yv,aC as bv,aD as wv,aE as kv,aF as _v,aG as xv}from"./vendor-lucide-CnYCvXhM.js";var sf=wd((gf,ze)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))t(h);new MutationObserver(h=>{for(const y of h)if(y.type==="childList")for(const z of y.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&t(z)}).observe(document,{childList:!0,subtree:!0});function m(h){const y={};return h.integrity&&(y.integrity=h.integrity),h.referrerPolicy&&(y.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?y.credentials="include":h.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function t(h){if(h.ep)return;h.ep=!0;const y=m(h);fetch(h.href,y)}})();window.Vue=kd;const ra=Td||{};window.ElementPlus=ra;ra.ElMessage=ra.ElMessage||Pd;ra.ElMessageBox=ra.ElMessageBox||Dd;ra.ElNotification=ra.ElNotification||Rd;ra.ElLoading=ra.ElLoading||zd;window.ElementPlusLocaleZhCn={default:Ad};(function(){const a=[45,220,0,140,270,320],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},m={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(l,D,k){return"hsl("+l+", "+D+"%, "+k+"%)"}function h(l,D,k){D=D/100,k=k/100;const S=function(n){return(n+l/30)%12},M=D*Math.min(k,1-k),b=function(n){return k-M*Math.max(-1,Math.min(S(n)-3,Math.min(9-S(n),1)))};return Math.round(255*b(0))+", "+Math.round(255*b(8))+", "+Math.round(255*b(4))}function y(l){const D=h(l,75,42);return{"--primary-color":t(l,75,42),"--primary-rgb":D,"--color-primary":t(l,75,42),"--qc-primary":t(l,75,42),"--qc-primary-50":t(l,90,96),"--qc-primary-100":t(l,85,92),"--qc-primary-200":t(l,80,84),"--qc-primary-300":t(l,75,72),"--qc-primary-400":t(l,70,58),"--qc-primary-500":t(l,75,48),"--qc-primary-600":t(l,80,42),"--qc-primary-700":t(l,85,35),"--qc-primary-800":t(l,88,28),"--qc-primary-900":t(l,90,20),"--qc-primary-foreground":"#ffffff","--text-link":t(l,70,40),"--secondary-color":t(l,70,55),"--card-border":t(l,55,82),"--bg-selected":"rgba("+D+", 0.08)","--btn-primary-bg":t(l,80,42),"--btn-primary-border":t(l,80,42),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(l,82,36),"--btn-primary-hover-border":t(l,82,36),"--btn-primary-active-bg":t(l,85,30),"--btn-primary-active-border":t(l,85,30),"--btn-primary-plain-bg":"rgba("+D+", 0.08)","--btn-primary-plain-border":"rgba("+D+", 0.25)","--btn-primary-plain-color":t(l,80,42),"--btn-primary-plain-hover-bg":"rgba("+D+", 0.15)","--btn-primary-plain-hover-border":t(l,80,42),"--btn-primary-text-color":t(l,80,42),"--gradient":"linear-gradient(135deg, "+t(l,80,30)+" 0%, "+t(l,75,42)+" 50%, "+t(l,70,55)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,75,42)+" 0%, "+t(l,85,30)+" 100%)","--qc-nav-item-active":t(l,80,35),"--qc-nav-item-active-bg":t(l,85,92),"--qc-nav-item-active-border":t(l,75,48),"--qc-nav-badge-bg":t(l,85,92),"--qc-nav-badge-text":t(l,80,35),"--qc-ring":t(l,70,58)}}function z(l){const D=h(l,85,65);return{"--primary-color":t(l,85,65),"--primary-rgb":D,"--color-primary":t(l,85,65),"--qc-primary":t(l,90,65),"--qc-primary-50":t(l,50,18),"--qc-primary-100":t(l,55,22),"--qc-primary-200":t(l,55,26),"--qc-primary-300":t(l,60,30),"--qc-primary-400":t(l,65,38),"--qc-primary-500":t(l,80,52),"--qc-primary-600":t(l,90,65),"--qc-primary-700":t(l,92,72),"--qc-primary-800":t(l,90,80),"--qc-primary-900":t(l,92,88),"--qc-primary-foreground":"#101014","--text-link":t(l,85,65),"--secondary-color":t(l,70,60),"--card-border":t(l,30,25),"--bg-selected":"rgba("+D+", 0.10)","--btn-primary-bg":t(l,85,65),"--btn-primary-border":t(l,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(l,80,72),"--btn-primary-hover-border":t(l,80,72),"--btn-primary-active-bg":t(l,75,80),"--btn-primary-active-border":t(l,75,80),"--btn-primary-plain-bg":"rgba("+D+", 0.08)","--btn-primary-plain-border":"rgba("+D+", 0.25)","--btn-primary-plain-color":t(l,85,65),"--btn-primary-plain-hover-bg":"rgba("+D+", 0.15)","--btn-primary-plain-hover-border":t(l,85,65),"--btn-primary-text-color":t(l,85,65),"--gradient":"linear-gradient(135deg, "+t(l,80,35)+" 0%, "+t(l,85,50)+" 50%, "+t(l,85,65)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(l,85,65)+" 0%, "+t(l,80,40)+" 100%)","--qc-nav-item-active":t(l,85,65),"--qc-nav-item-active-bg":"rgba("+D+", 0.10)","--qc-nav-item-active-border":t(l,85,65),"--qc-nav-badge-bg":"rgba("+D+", 0.12)","--qc-nav-badge-text":t(l,85,65),"--qc-ring":t(l,85,65)}}function v(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function r(l){return l=parseInt(l,10),isNaN(l)?45:Math.max(0,Math.min(359,l))}function g(l,D){let k=l||"light",S=D==null||D===""?null:D;if(e[l]){const s=e[l];k=s[0],S==null&&(S=s[1])}k==="system"&&(k=v()?"dark":"light");const M=k==="dark";S=r(S??45);const b=document.documentElement;b.setAttribute("data-theme",M?"dark-pro":"gold"),b.setAttribute("data-theme-mode",M?"dark":"light");const n=M?z(S):y(S);Object.keys(n).forEach(function(s){b.style.setProperty(s,n[s])});try{localStorage.setItem("quant_theme_mode",M?"dark":"light"),localStorage.setItem("quant_theme_hue",String(S))}catch{}return{mode:M?"dark":"light",hue:S}}function o(){const l=localStorage.getItem("quant_theme");if(!l||!e[l]||localStorage.getItem("quant_theme_hue")!==null)return null;const D=e[l];return{mode:D[0],hue:D[1]}}function E(){const l=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let D=l.theme||"system",k=l.theme_hue!=null&&l.theme_hue!==""?l.theme_hue:null;const S=o();return k==null&&S&&(D=S.mode,k=S.hue),k==null&&(k=45),g(D,k)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:m,generateLightTokens:y,generateDarkTokens:z,migrateLegacyTheme:o,applyTheme:g,init:E},E()})();(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],m={};let t=a,h=null;function y(){return h&&typeof h=="object"&&"value"in h?h.value||a:t}function z(l,D){return e.indexOf(l)===-1?!1:(m[l]=D&&typeof D=="object"?D:{},!0)}function v(l){const D=e.indexOf(l)!==-1?l:a;return t=D,h&&typeof h=="object"&&"value"in h&&(h.value=D),typeof document<"u"&&document.documentElement.setAttribute("lang",D),t}function r(){return y()}function g(l){if(l&&typeof l=="object"&&"value"in l){h=l;const D=e.indexOf(l.value)!==-1?l.value:a;l.value=D,t=D}return t}function o(l,D){const k=y(),S=m[k]||{};let M=l in S?S[l]:null;if(M==null&&k!=="en"){const b=m.en||{};M=l in b?b[l]:null}return M==null&&(M=String(l)),D&&typeof D=="object"&&Object.keys(D).forEach(function(b){M=M.replace(new RegExp("\\{"+b+"\\}","g"),String(D[b]))}),M}const E={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:m,registerLocale:z,setLocale:v,getLocale:r,bindLocale:g,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=E),E});(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"★ 已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let m=[];function t(k){const S=String(k||"");let M="";for(const b of S){const n=a[b];n?M+=n.charAt(0):/[a-zA-Z0-9]/.test(b)&&(M+=b.toLowerCase())}return M}function h(k){const S=String(k||"");let M="";for(const b of S){const n=a[b];n?M+=n:/[a-zA-Z0-9]/.test(b)&&(M+=b.toLowerCase())}return M}function y(k){return String(k||"").trim().toLowerCase()}function z(k,S){const M=(S.code||"").toLowerCase();return/^\d+$/.test(k)?M.indexOf(k)!==-1:/[\u4e00-\u9fa5]/.test(k)?(S.name||"").toLowerCase().indexOf(k)!==-1:M.indexOf(k)!==-1||(S.initials||t(S.name)).indexOf(k)!==-1||(S.pinyin||h(S.name)).indexOf(k)!==-1}function v(k){const S={},M=[],b=function(n,s,u){!n||S[n]||(S[n]=!0,M.push({code:n,name:s||n,source:u||"core",initials:t(s||n),pinyin:h(s||n)}))};return e.forEach(function(n){b(n.code,n.name,"core")}),(k||[]).forEach(function(n){b(n.code,n.name,"extra")}),M}function r(k,S){const M=y(k);if(!M||!S||!S.length)return[];const b=M.split(/[\s,，、;；]+/).filter(Boolean);return b.length?S.filter(function(n){return b.every(function(s){return z(s,n)})}).slice(0,20).map(function(n){return{code:n.code,name:n.name,source:n.source||"core"}}):[]}function g(k){Array.isArray(k)&&(m=m.concat(k))}function o(){return m.slice()}function E(){return v(m)}function l(k){return r(k,E())}const D={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:h,normalizeQuery:y,matchToken:z,buildStockIndex:v,searchStocksByQuery:r,registerExtraStocks:g,getExtraStocks:o,getStockIndex:E,searchCoreStocks:l};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=D),D});(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},m=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function h(s){return s=parseInt(s,10),!isNaN(s)&&s>=0&&s<=360}const y={light:"classic-white",dark:"dark-pro"};function z(){if(typeof localStorage>"u")return{};try{const s=localStorage.getItem(a);if(!s)return{};const u=JSON.parse(s);return u&&typeof u=="object"?u:{}}catch{return{}}}function v(s){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(s))}catch{}}function r(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function g(){const s=Object.assign({},e,z()),u={};return m.forEach(function(F){const G=s[F];u[F]=F==="theme_hue"?h(G)?parseInt(G,10):e[F]:t[F].indexOf(G)!==-1?G:e[F]}),u}function o(s){if(m.indexOf(s)!==-1)return g()[s]}function E(s,u){return m.indexOf(s)===-1?!1:s==="theme_hue"?h(u):t[s].indexOf(u)!==-1}function l(s,u){if(!E(s,u))return!1;const F=z();return F[s]=u,v(F),r()&&k({[s]:u}),!0}function D(s){if(!s||typeof s!="object")return!1;const u={};if(Object.keys(s).forEach(function(G){E(G,s[G])&&(u[G]=s[G])}),!Object.keys(u).length)return!1;const F=Object.assign({},z(),u);return v(F),r()&&k(u),!0}function k(s){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:s})}).catch(function(){})}catch{}}async function S(){const s=g();if(!r()||typeof fetch>"u")return s;try{const u=await fetch("/api/user_config/preferences");if(u.ok){const F=await u.json();if(F.success&&F.preferences){const G=F.preferences;m.forEach(function(W){t[W].indexOf(G[W])!==-1&&(s[W]=G[W])}),v(s)}}}catch{}return s}function M(s){const u=s||o("info_density")||"comfortable",F=t.info_density.indexOf(u)!==-1?u:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",F),F}function b(s){const u=s||o("theme")||"system";if(u==="system"){let F=!1;return typeof window<"u"&&window.matchMedia&&(F=window.matchMedia("(prefers-color-scheme: dark)").matches),F?"dark":"light"}return u==="dark"||u==="light"?u:"light"}const n={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:m,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:y,getLocal:g,getPreference:o,isValidValue:E,setPreference:l,setPreferences:D,saveToBackend:k,loadPreferences:S,resolveTheme:b,applyDensity:M};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=n),n});(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function m(){if(typeof localStorage>"u")return[];try{const g=localStorage.getItem(a);if(!g)return[];const o=JSON.parse(g);return Array.isArray(o)?o:[]}catch{return[]}}function t(g){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(g))}catch{}}function h(g,o){if(!g)return!1;let E=m().filter(function(l){return l.code!==g});return E.unshift({code:g,name:(o||"").toString().slice(0,32),ts:Date.now()}),E.length>10&&(E=E.slice(0,10)),t(E),!0}function y(){return m().slice(0,10)}function z(g){t(m().filter(function(o){return o.code!==g}))}function v(){t([])}const r={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:h,getRecentViewed:y,removeRecent:z,clearRecent:v};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=r),r});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:m,watch:t,onMounted:h,nextTick:y}=a;function z(c,C={}){if(typeof c=="string"&&c.startsWith("/api/")){const d=localStorage.getItem("quant_token");if(d)return{...C,headers:{...C.headers||{},Authorization:"Bearer "+d}}}return C}async function v(c,C={}){const d=z(c,C),O={"Content-Type":"application/json",...d.headers},ie=(C.method||"GET").toUpperCase(),J=ie+"|"+c,Q=async()=>{const _=await fetch(c,{...d,headers:O});if(_.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!_.ok){let f="";try{const Z=await _.json();f=Z&&Z.detail||""}catch{}throw Object.assign(new Error(f||"请求失败（HTTP "+_.status+"）"),{status:_.status})}return await _.json()};try{const _=C.noLoading?Q:()=>u(Q);return ie==="GET"&&!C.noDedupe?await M(J,_):await _()}catch(_){throw _.message==="登录已过期"?_:(console.error("[apiFetch] "+c+":",_.message),Object.assign(_,{_formatted:F(_,_.status)}))}}function r(){return new Date().toISOString().split("T")[0]}function g(c){return c?c.split("T")[0]:""}function o(c,C="info",d=3e3){let O=document.querySelector(".toast-container");O||(O=document.createElement("div"),O.className="toast-container",document.body.appendChild(O));const ie=document.createElement("div");ie.className=`toast toast-${C}`,ie.textContent=c,O.appendChild(ie),setTimeout(()=>{ie.classList.add("leaving"),setTimeout(()=>ie.remove(),300)},d)}function E(c,C=300){let d;return function(...O){clearTimeout(d),d=setTimeout(()=>c.apply(this,O),C)}}function l(c,C=300){let d=!1;return function(...O){d||(c.apply(this,O),d=!0,setTimeout(()=>{d=!1},C))}}async function D(c,C=3e3,d=""){const O=new Promise((ie,J)=>setTimeout(()=>J(new Error("timeout")),C));try{return await Promise.race([c,O])}catch(ie){console.warn(`[timeout] ${d||"task"} failed:`,ie.message)}}const k=new Map;function S(){return k.clear(),!0}function M(c,C){if(!c||typeof C!="function")return Promise.reject(new Error("bad dedupe args"));if(k.has(c))return k.get(c);const d=Promise.resolve().then(C).finally(()=>{k.delete(c)});return k.set(c,d),d}let b=0;function n(){return b=0,!0}function s(){return b}async function u(c){b++;try{return await c()}finally{b--}}function F(c,C){if(!c)return"请求失败";if(c&&typeof c=="object"&&c.detail)return String(c.detail);if(typeof c=="string"&&c)return c;if(c&&c.message){const d=String(c.message);return/Failed to fetch|fetch failed|networkerror/i.test(d)?"网络连接失败，请检查网络后重试":d}return C?"请求失败（HTTP "+C+"）":"请求失败"}function G(c,C){if(c===C)return!0;try{return JSON.stringify(c)===JSON.stringify(C)}catch{return!1}}function W(c,C,d){const O=(c||"GET").toUpperCase();let ie="";if(d)try{const J={};Object.keys(d).sort().forEach(Q=>{J[Q]=d[Q]}),ie=JSON.stringify(J)}catch{ie=""}return O+"|"+C+"|"+ie}class Y{constructor(){this._map=new Map,this._exp=new Map}get(C){const d=this._exp.get(C);if(d!=null){if(Date.now()>d){this.delete(C);return}return this._map.get(C)}}set(C,d,O){return this._map.set(C,d),this._exp.set(C,Date.now()+(O>0?O:-1)),d}delete(C){this._map.delete(C),this._exp.delete(C)}clear(){this._map.clear(),this._exp.clear()}has(C){return this.get(C)!==void 0}get size(){return this._map.size}}function te(c){const C=new Y,d=c!=null&&c>0?c:15e3;return{store:C,defaultTtl:d,get:O=>C.get(O),set:(O,ie,J)=>C.set(O,ie,J??d),delete:O=>C.delete(O),clear:()=>C.clear(),size:()=>C.size}}const I=new Set;async function P(c){const C=c&&c.cache,d=c&&c.key,O=c&&(c.fetchFn||c.fetcher),ie=c&&c.ttl;if(!C||!d||typeof O!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(I.has(d))return{ok:!1,changed:!1,skipped:!0,fresh:null};I.add(d);try{const J=C.get(d);let Q;try{Q=await O()}catch(f){return c.onError&&c.onError(f),{ok:!1,changed:!1,fresh:null}}const _=J!==void 0&&!G(J,Q);return C.set(d,Q,ie),c.apply&&c.apply(Q,J),J!==void 0&&(_?c.onChanged&&c.onChanged(Q,J):c.onUnchanged&&c.onUnchanged(Q,J)),{ok:!0,changed:_,fresh:Q}}finally{I.delete(d)}}const R=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function H(c,C={}){if(c==null)return"";const d=C&&C.allow||R,O=new Set(d.map(_=>String(_).toUpperCase()));let ie;try{ie=new DOMParser().parseFromString(String(c),"text/html")}catch{return String(c).replace(/[<>&]/g,f=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[f])}const J=ie.body||ie;function Q(_){Array.from(_.childNodes).forEach(f=>{if(f.nodeType===1){const Z=String(f.tagName).toUpperCase();if(O.has(Z))Array.from(f.attributes).forEach(pe=>{const we=pe.name.toLowerCase(),Me=(pe.value||"").trim().toLowerCase();(we.startsWith("on")||(we==="href"||we==="src"||we==="xlink:href")&&Me.startsWith("javascript:")||we==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(Me))&&f.removeAttribute(pe.name),we==="href"&&!/^(https?:|mailto:|#|\/)/.test(Me)&&f.removeAttribute("href")}),Z==="A"&&f.setAttribute("rel","noopener noreferrer"),Q(f);else{const pe=f.parentNode;for(;f.firstChild;)pe.insertBefore(f.firstChild,f);pe.removeChild(f)}}else if(f.nodeType!==3){if(f.nodeType===8)f.parentNode&&f.parentNode.removeChild(f);else if(f.nodeType===4){const Z=ie.createTextNode(f.nodeValue||"");f.parentNode&&f.parentNode.replaceChild(Z,f)}}})}return Q(J),J.innerHTML}const ee="/api/openapi",$="/api/market/ws/quotes",se=1,j=2.5,B="数据不可达",A="实时不可用，不刷新";function p(){const c=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",C=typeof location<"u"?location.host:"localhost:8001";return c+"//"+C+$}function x(c,C){if(!c)return null;const d=C||{riseSpeed:se,volumeRatio:j},O=d.riseSpeed!=null?d.riseSpeed:se,ie=d.volumeRatio!=null?d.volumeRatio:j,J=parseFloat(c.rise_speed);if(!isNaN(J)&&Math.abs(J)>O)return J>0?"涨速预警":"跌速预警";const Q=parseFloat(c.volume_ratio);return!isNaN(Q)&&Q>ie?"放量预警":null}function le(c){const C=Number(c);return c==null||isNaN(C)?null:C}const T={apiFetch:v,withAuthHeaders:z,getToday:r,formatDate:g,withTimeout:D,showToast:o,debounce:E,throttle:l,resetInFlight:S,dedupeRequest:M,resetLoading:n,loadingCount:s,withLoading:u,formatApiError:F,jsonEquals:G,makeCacheKey:W,CacheStore:Y,createTtlCache:te,silentRefresh:P,sanitizeHtml:H,OPENAPI_ROUTE_BASE:ee,REALTIME_WS_PATH:$,WARN_RISE_SPEED_THRESHOLD:se,WARN_VOLUME_RATIO_THRESHOLD:j,REALTIME_DEGRADED_TEXT:B,REALTIME_FALLBACK_TEXT:A,buildRealtimeWsUrl:p,checkQuoteWarning:x,quoteFmt:{price:function(c){const C=le(c);return C===null?"--":C.toFixed(2)},pct:function(c){const C=le(c);return C===null?"--":(C>0?"+":"")+C.toFixed(2)+"%"},num:function(c){const C=le(c);return C===null?"--":C.toFixed(2)},color:function(c){const C=c?c.change_pct:null,d=le(C);return d===null?"":d>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=T),typeof ze<"u"&&ze.exports&&(ze.exports=T)})();(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(E,l){return E+"/"+l}function m(E,l,D,k){var S=E[l]||[],M=S.findIndex(function(s){return s.subPage===D});if(M!==-1)return{groups:E,activeKey:e(l,D)};var b=S.concat([{subPage:D,title:k}]);b.length>a&&(b=h(b));var n=Object.assign({},E,t({},l,b));return{groups:n,activeKey:e(l,D)}}function t(E,l,D){return E[l]=D,E}function h(E){if(E.length<=a)return E;var l=E.length>1?1:0;return E.filter(function(D,k){return k!==l})}function y(E,l,D,k){var S=E[l]||[],M=S.findIndex(function(u){return u.subPage===D});if(M===-1)return{groups:E,nextActive:null};var b=S.filter(function(u){return u.subPage!==D}),n=Object.assign({},E,t({},l,b)),s=null;return D===k&&(b[M]?s=b[M].subPage:b[M-1]?s=b[M-1].subPage:s=null),{groups:n,nextActive:s}}function z(E){return E&&E.length?E[0]:""}function v(E,l){return E[l]||[]}function r(E,l,D){var k=E[l]||[],S=k.filter(function(b){return b.subPage===D}),M=Object.assign({},E,t({},l,S));return{groups:M,activeKey:S.length?e(l,S[0].subPage):null}}function g(E,l){var D=Object.assign({},E,t({},l,[]));return{groups:D,activeKey:null}}function o(E,l,D,k){var S=(E[l]||[]).slice();if(D<0||D>=S.length)return{groups:E};var M=S.splice(D,1)[0];return S.splice(Math.max(0,Math.min(k,S.length)),0,M),{groups:Object.assign({},E,t({},l,S))}}return{MAX_TABS:a,openTab:m,closeTab:y,getDefaultTab:z,tabsOf:v,evictOldest:h,closeOthers:r,closeAll:g,reorder:o,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var al=typeof ze=="object"&&ze.exports?ze.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;al&&(window.__quantModules.tabsCore=al)}(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",m="nav_mode";function t(o){return a.indexOf(o)!==-1?o:e}function h(o){return t(o)==="subnav"}function y(o){return t(o)==="tree"}function z(o){return t(o)==="toptab"}function v(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function r(){var o=v(),E=e;if(o)try{E=t(o.getItem(m))}catch{}return{navMode:E}}function g(o){var E=v();if(!(!E||!o))try{o.navMode!==void 0&&E.setItem(m,t(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:h,treeChildrenVisible:y,topTabsVisible:z,readPrefs:r,writePrefs:g}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var sl=typeof ze=="object"&&ze.exports?ze.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;sl&&(window.__quantModules.navModeCore=sl)}(function(){function e(p,x){if(!Array.isArray(p)||p.length<=x)return p;const le=[],K=p.length/x*2;for(let T=0;T<p.length;T+=K){const c=Math.floor(T),C=Math.min(p.length,Math.ceil(T+K));let d=1/0,O=-1,ie=-1/0,J=-1;for(let Q=c;Q<C;Q++){const _=p[Q];if(!_)continue;const f=_[3]!=null?Number(_[3]):1/0,Z=_[4]!=null?Number(_[4]):-1/0;f<d&&(d=f,O=Q),Z>ie&&(ie=Z,J=Q)}O>=0&&le.push(p[O]),J>=0&&J!==O&&le.push(p[J])}return le}let m=null;function t(){return typeof echarts<"u"?Promise.resolve():(m||(m=new Promise(function(p,x){const le=document.createElement("script");le.src="/static/lib/echarts.min.js",le.async=!0,le.onload=function(){typeof echarts<"u"?p():x(new Error("echarts 加载后未定义"))},le.onerror=function(){x(new Error("echarts.min.js 加载失败"))},document.head.appendChild(le)})),m)}function h(){const p=getComputedStyle(document.documentElement);return{primary:p.getPropertyValue("--primary-color").trim()||"#2563eb",up:p.getPropertyValue("--color-up").trim()||"#43e97b",down:p.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:p.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:p.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const y=p=>(getComputedStyle(document.documentElement).getPropertyValue(p)||"").trim();function z(){return{up:y("--color-up")||"#E63946",down:y("--color-down")||"#2E7D32",neutral:y("--color-neutral")||"#43a047",accent:y("--color-accent")||"#F59E0B",risk:y("--color-danger")||"#C62828",warn:y("--color-warning")||"#FF9800",success:y("--color-success")||"#4CAF50",primary:y("--qc-primary-600")||"#b8922a",grid:y("--chart-split")||"#e2e8f0",axis:y("--chart-axis")||"#cbd5e1",bg:y("--chart-bg")||"transparent",series:[y("--qc-primary-600")||"#b8922a",y("--qc-primary-500")||"#c49b2e",y("--qc-primary-700")||"#8f6f1f",y("--qc-primary-400")||"#d4b352",y("--color-up")||"#E63946",y("--color-down")||"#2E7D32",y("--color-accent")||"#F59E0B",y("--qc-neutral-400")||"#b8ae9f"]}}function v(p,x,le,K=!1,T=!1){if(!x||x.length===0)return;x.length>2e3&&(x=e(x,2e3));const c=x.map(Ee=>typeof Ee[0]=="string"&&Ee[0].indexOf("-")>=0?Ee[0]:Ee[0].slice(0,4)+"-"+Ee[0].slice(4,6)+"-"+Ee[0].slice(6,8)),C=h(),d={ma5:y("--color-accent")||"#F59E0B",ma10:y("--color-primary")||"#3B82F6",ma20:y("--color-warning")||"#8B5CF6",ma60:y("--color-success")||"#10B981"},O=x.map(Ee=>[Ee[1],Ee[2],Ee[3],Ee[4]]),ie=x.map(Ee=>Ee[5]),J=x.map(Ee=>Ee[6]),Q=x.map(Ee=>Ee[7]),_=x.map(Ee=>Ee[8]),f=x.map(Ee=>Ee[9]),Z=x.map(Ee=>Ee[10]),we=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",Me=C.borderLight,Ve={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:C.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:we,borderColor:Me,textStyle:{color:C.textSecondary,fontSize:12},formatter:function(Ee){if(!Ee||!Ee.length)return"";const _e=Ee[0].dataIndex,ne=x[_e];if(!ne)return"";const ke=p.getOption(),De=ke.legend&&ke.legend[0]&&ke.legend[0].selected||{},oe=Le=>De[Le]!==!1,X=Le=>Le==null||isNaN(Le)?"--":Number(Le).toFixed(2),ge=Le=>Le==null||isNaN(Le)?"--":(Number(Le)/1e4).toFixed(2)+"万手",Te=['<div style="font-weight:600;color:'+C.textSecondary+';">'+c[_e]+"</div>"];return Te.push("开: "+X(ne[1])+"　收: "+X(ne[2])),Te.push("低: "+X(ne[3])+"　高: "+X(ne[4])),Te.push("成交量: "+ge(ne[5])),ne[6]!=null&&oe("MA5")&&Te.push("MA5: "+X(ne[6])),ne[7]!=null&&oe("MA10")&&Te.push("MA10: "+X(ne[7])),ne[8]!=null&&oe("MA20")&&Te.push("MA20: "+X(ne[8])),ne[9]!=null&&oe("MA60")&&Te.push("MA60: "+X(ne[9])),ne[10]!=null&&Te.push("VOL_MA5: "+ge(ne[10])),Te.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:T?0:8,textStyle:{color:C.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:T?30:40,height:T?"48%":"52%"},{left:56,right:16,top:T?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:c,boundaryGap:!0,axisLine:{lineStyle:{color:Me}},axisLabel:{color:C.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:c,axisLabel:{show:!1},axisLine:{lineStyle:{color:Me}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:Me}},axisLabel:{color:C.textSecondary,fontSize:11,formatter:function(Ee){const _e=Math.round(Ee*100)/100;return _e%1===0?String(Math.round(_e)):_e.toFixed(2)}},splitLine:{lineStyle:{color:Me,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:Me}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,x.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:Me,textStyle:{color:C.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:O,itemStyle:{color:C.up,color0:C.down,borderColor:C.up,borderColor0:C.down}},{name:"MA5",type:"line",data:J,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma5}},{name:"MA10",type:"line",data:Q,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma10}},{name:"MA20",type:"line",data:_,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma20}},{name:"MA60",type:"line",data:f,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ie,itemStyle:{color:function(Ee){const _e=Ee.dataIndex;return x[_e][1]>=x[_e][2]?C.up:C.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:Z,smooth:!0,symbol:"none",lineStyle:{width:1,color:d.ma5,type:"dashed"}}]};p.setOption(Ve,!0)}const r=new Map;function g(p){return r.has(p)||r.set(p,{chart:null,cache:null}),r.get(p)}async function o(p,x,le,K=!1,T={}){await t();const c=g(p);let C=document.getElementById(p);if(!C)for(let d=0;d<16&&(await new Promise(O=>setTimeout(O,50)),C=document.getElementById(p),!C);d++);if(!C)throw new Error("无法找到图表容器: "+p);if(C.offsetWidth<50&&(C.style.minWidth="600px",C.style.minHeight="300px"),!c.chart||c.chart.isDisposed()||c.chart.getDom()!==C){if(c.chart)try{c.chart.dispose()}catch{}c.chart=echarts.init(C),c.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const d=T.onLegend;typeof d=="function"&&c.chart.on("legendselectchanged",O=>{O&&O.selected&&d(O.selected)})}return v(c.chart,x,le,K,!!T.isMobile),c.cache={data:x,period:le,isIndex:K,isMobile:!!T.isMobile},c.chart}function E(p){const x=r.get(p);x&&x.chart&&(x.chart.dispose(),x.chart=null,x.cache=null)}function l(p){const x=r.get(p);x&&x.chart&&x.chart.resize()}function D(p,x){const le=r.get(p),K=le&&le.chart;if(K)if(x<=0)K.dispatchAction({type:"dataZoom",start:0,end:100});else{const C=Math.max(0,(60-x)/60*100);K.dispatchAction({type:"dataZoom",start:Math.round(C),end:100})}}function k(p){var K,T,c;const x=r.get(p);if(!x||!x.chart||!x.cache||x.chart.isDisposed())return;const le=((c=(T=(K=x.chart.getOption())==null?void 0:K.legend)==null?void 0:T[0])==null?void 0:c.selected)||null;v(x.chart,x.cache.data,x.cache.period,x.cache.isIndex,x.cache.isMobile),le&&x.chart.setOption({legend:{selected:le}})}function S(p){const x=r.get(p);return x&&x.chart}const M=new Map;function b(p){return M.has(p)||M.set(p,{chart:null,cache:null}),M.get(p)}function n(p,x,le={}){return t().then(function(){const K=b(p),T=document.getElementById(p);if(!T)throw new Error("无法找到图表容器: "+p);if(T.offsetWidth<50&&(T.style.minWidth="600px",T.style.minHeight="300px"),K.chart&&K.chart.getDom&&K.chart.getDom()!==T){try{K.chart.dispose()}catch{}K.chart=null}K.chart||(K.chart=echarts.init(T),K.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),K.resizeBound||(K.resizeBound=!0,window.addEventListener("resize",function(){K.chart&&!K.chart.isDisposed()&&K.chart.resize()})));const c=typeof x=="function"?x():x;return K.chart.setOption(c,!0),K.cache={buildOption:x,key:le.key||""},K.chart})}function s(p){var T,c,C;const x=M.get(p);if(!x||!x.chart||!x.cache||x.chart.isDisposed())return;const le=((C=(c=(T=x.chart.getOption())==null?void 0:T.legend)==null?void 0:c[0])==null?void 0:C.selected)||null,K=typeof x.cache.buildOption=="function"?x.cache.buildOption():x.cache.buildOption;x.chart.setOption(K,!0),le&&K&&K.legend&&K.legend.selected&&x.chart.setOption({legend:{selected:le}})}function u(p){const x=M.get(p);x&&x.chart&&(x.chart.dispose(),x.chart=null,x.cache=null)}function F(p){const x=M.get(p);x&&x.chart&&x.chart.resize()}const G=new Map;function W(p){return G.has(p)||G.set(p,{chart:null,cache:null}),G.get(p)}function Y(p,x,le={}){return t().then(function(){const K=W(p),T=document.getElementById(p);if(!T)return null;if(T.offsetWidth<50&&(T.style.minWidth="600px",T.style.minHeight="300px"),K.chart&&K.chart.getDom&&K.chart.getDom()!==T){try{K.chart.dispose()}catch{}K.chart=null}K.chart||(K.chart=echarts.init(T),K.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),K.resizeBound||(K.resizeBound=!0,window.addEventListener("resize",function(){K.chart&&!K.chart.isDisposed()&&K.chart.resize()})));const c=typeof x=="function"?x():x;return K.chart.setOption(c,!0),K.cache={buildOption:x,key:le.key||""},K.chart})}function te(p){const x=G.get(p);if(!x||!x.chart||!x.cache||x.chart.isDisposed())return;const le=typeof x.cache.buildOption=="function"?x.cache.buildOption():x.cache.buildOption;x.chart.setOption(le,!0)}function I(p){const x=G.get(p);x&&x.chart&&(x.chart.dispose(),x.chart=null,x.cache=null)}function P(p){const x=G.get(p);x&&x.chart&&x.chart.resize()}const R=Y,H=te,ee=I,$=P;function se(p,x,le,K){K=K||{};const T=K.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[K.navLabel||"净值",K.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:le||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:K.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:K.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:K.navLabel||"净值",type:"line",data:p||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:K.ddLabel||"回撤",type:"line",yAxisIndex:1,data:x||[],showSymbol:!1,areaStyle:{opacity:.25,color:T},lineStyle:{color:T,type:"solid",width:1.5}}]}}function j(p,x){x=x||{};const le=x.bandColor||"#1976d2",K=p&&p.dates||[],T=p&&p.median||[],c=p&&p.q25||[],C=p&&p.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[x.medianLabel||"中位IC",x.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:K,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:x.medianLabel||"中位IC",type:"line",data:T,showSymbol:!1,lineStyle:{width:2,color:le}},{name:x.bandLabel||"25–75分位",type:"line",data:c,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:le,opacity:.12}},{name:"_bandH",type:"line",data:C.map(function(d,O){return d-(c[O]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:le,opacity:.12}}]}}function B(p,x){x=x||{};const le=x.color||"#7c3aed",K=p&&p.dates||[],T=p&&p.value||[],c=p&&p.upper||[],C=p&&p.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[x.valueLabel||"情绪",x.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:K,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:x.valueLabel||"情绪",type:"line",data:T,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:le}},{name:x.bandLabel||"过热/冰点带",type:"line",data:c,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:le,opacity:.1}},{name:"_bandL",type:"line",data:C.map(function(d,O){return(c[O]||0)-d}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:le,opacity:.1}}]}}const A={renderKlineChart:v,renderKlineTo:o,disposeKline:E,resizeKline:l,zoomKline:D,redrawKline:k,getKlineChart:S,renderBacktestTo:n,redrawBacktest:s,disposeBacktest:u,resizeBacktest:F,renderPortfolioTo:Y,redrawPortfolio:te,disposePortfolio:I,resizePortfolio:P,renderSimpleChartTo:R,redrawSimpleChart:H,disposeSimpleChart:ee,resizeSimpleChart:$,buildNavDrawdownOption:se,buildIcBandOption:j,buildSentimentBandOption:B,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:z,init(){return{renderKlineChart:v,renderKlineTo:o,disposeKline:E,resizeKline:l,zoomKline:D,redrawKline:k,getKlineChart:S,renderBacktestTo:n,redrawBacktest:s,disposeBacktest:u,resizeBacktest:F,renderPortfolioTo:Y,redrawPortfolio:te,disposePortfolio:I,resizePortfolio:P,renderSimpleChartTo:R,redrawSimpleChart:H,disposeSimpleChart:ee,resizeSimpleChart:$,buildNavDrawdownOption:se,buildIcBandOption:j,buildSentimentBandOption:B,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:z}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=A),typeof ze<"u"&&ze.exports&&(ze.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:se,buildIcBandOption:j,buildSentimentBandOption:B})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:m}=Vue,{configChanged:t,consensus:h}=a,y=e(null),z=e(""),v=e(null),r=e([]),g=e([]),o=e([]),E=e([]),l=e([]),D=e([]),k=e({});function S(me){const xe=l.value.indexOf(me);xe>=0?l.value.splice(xe,1):l.value.push(me)}const M=e("date"),b=e([]),n=e(!1),s=e(!1),u=e("watchlist"),F=e([]),G=e({vendors:[]}),W=e(""),Y=e(!1),te=e(!1);function I(me){if(!me)return"";const xe=String(me),Re=xe.length;if(Re<=4)return xe[0]+"*".repeat(Re-1);const Ie=Re<=8?2:4;return xe.slice(0,Ie)+"*".repeat(Re-Ie-Ie)+xe.slice(-Ie)}async function P(me){let xe;try{xe=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ie=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:xe,target:me})})).json();if(Ie.success)return Ie.secret;ElementPlus.ElMessage.error(Ie.message||"查看失败")}catch(Re){ElementPlus.ElMessage.error("查看失败: "+Re.message)}return null}async function R(me){if(me._revealed){me._revealed=!1,me._masked=I(me.api_key);return}const xe=await P("ai:"+me.vendor_key);xe!==null&&(me.api_key=xe,me._revealed=!0)}async function H(me){if(me._editing){me._editing=!1,me._revealed=!1,me.api_key&&(me._masked=I(me.api_key));return}me._editing=!0;try{const Re=await(await fetch("/api/ai/models?full=1")).json();if(Re.success){const Ie=(Re.data.vendors||[]).find(nt=>nt.vendor_key===me.vendor_key);Ie&&(me.api_key=Ie.api_key||"")}else Re.message&&ElementPlus.ElMessage.error(String(Re.message))}catch(xe){ElementPlus.ElMessage.error("解锁失败: "+xe.message)}}function ee(me){const{_fetching:xe,_testing:Re,_revealed:Ie,_masked:nt,_editing:et,...$e}=me;return et||($e.api_key=""),$e.models=(me.models||[]).map(bt=>{const{_testing:St,testResult:ht,...tt}=bt;return tt}),$e}async function $(){var me;try{W.value="";const xe=await fetch("/api/ai/models");if(xe.status===401){W.value="请先登录后再查看模型配置";return}if(!xe.ok){W.value=`服务器错误 (${xe.status})`;return}const Re=await xe.json();Re.success?(F.value=(((me=Re.data)==null?void 0:me.vendors)||[]).map(Ie=>({...Ie,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Ie.api_key||"",models:(Ie.models||[]).map(nt=>({...nt,_testing:!1,testResult:void 0}))})),W.value=""):W.value=Re.message||"加载失败"}catch(xe){W.value="网络错误: "+xe.message}}async function se(){try{const xe=await(await fetch("/api/ai/catalog")).json();xe.success&&xe.data&&(G.value=xe.data)}catch(me){console.warn("AI 厂商目录加载失败",me)}}async function j(){te.value=!0;try{const Re=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:F.value.map(ee)})})).json();Re.success?(F.value.forEach(Ie=>{Ie._editing=!1,Ie._revealed=!1,Ie.api_key&&(Ie._masked=I(Ie.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Re.message||"保存失败")}catch(me){ElementPlus.ElMessage.error("保存失败: "+me.message)}te.value=!1}async function B(me,xe){xe._testing=!0;try{const Ie=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:me.vendor_key,model:xe.name,base_url:me.base_url,api_key:me.api_key,timeout:me.timeout})});xe.testResult=await Ie.json()}catch(Re){xe.testResult={success:!1,message:Re.message}}xe._testing=!1}async function A(){Y.value=!0;for(const me of F.value)for(const xe of me.models||[])me.api_key?await B(me,xe):xe.testResult={success:!1,message:"未配置 API Key"};Y.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function p(me){me._fetching=!0;try{const Ie=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:me.vendor_key,base_url:me.base_url,api_key:me.api_key,timeout:me.timeout})})).json();if(Ie.success&&Array.isArray(Ie.models)){const nt=new Set((me.models||[]).map(et=>et.name));for(const et of Ie.models)nt.has(et)||me.models.push({name:et,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Ie.models.length} 个模型`)}else ElementPlus.ElMessage.error(Ie.message||"获取模型列表失败")}catch(xe){ElementPlus.ElMessage.error("获取模型列表失败: "+xe.message)}me._fetching=!1}function x(me){const xe=(G.value.vendors||[]).find(Re=>Re.vendor_key===me);if(xe){if(F.value.some(Re=>Re.vendor_key===me)){ElementPlus.ElMessage.warning("该厂商已存在");return}F.value.push({vendor_key:xe.vendor_key,name:xe.name,kind:xe.kind,base_url:xe.base_url,api_key:"",timeout:60,tier:xe.tier||"",website:xe.website||"",locked:!!xe.locked,models:(xe.models||[]).map(Re=>({name:Re,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${xe.name}」，配置 API Key 后保存生效`)}}function le(){F.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function K(me){me.models||(me.models=[]),me.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function T(me,xe){const Re=me.models[xe];if(!(!Re||Re.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Re.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}me.models.splice(xe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function c(me){if(me.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(me.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const xe=F.value.indexOf(me);xe>=0&&F.value.splice(xe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const C=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),d=e(!1),O=e(""),ie=e(0),J=e(""),Q=e(!1),_=e(""),f=e(!1),Z=e(0),pe=e(0),we=e(""),Me=e({}),Ve=e({}),Ee=e({}),_e=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),ne=e("manual"),ke=m(()=>{const me={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return me[_e.value.provider]||me.custom}),De={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function oe(me){if(me==="manual")return;const xe=De[me];xe&&(_e.value.endpoint=xe.endpoint,_e.value.model=xe.model,t.value=!0)}function X(){if(t.value=!0,_e.value.provider!=="codingplan"&&_e.value.provider!=="custom"){const me=ke.value;me&&(_e.value.endpoint=me.endpoint,_e.value.model=me.model)}else _e.value.provider==="codingplan"&&(_e.value.endpoint||(_e.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),_e.value.model||(_e.value.model="ark-code-latest"))}let ge=null;const Te=8;async function Le(){ge&&(ge.abort(),ge=null);const xe=(h.value||[]).filter($e=>$e.status==="new"||$e.status==="out").filter($e=>!k.value[$e.code]);if(xe.length===0)return;const Re=new AbortController;ge=Re;let Ie=0;const nt=async()=>{for(;Ie<xe.length;){const $e=xe[Ie++];try{const St=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:$e.code,stock_name:$e.name,event_type:$e.status==="new"?"enter":"exit"}),signal:Re.signal})).json();St.success&&St.signal&&(k.value={...k.value,[$e.code]:St.signal})}catch(bt){if(bt.name==="AbortError")return}}},et=Array.from({length:Math.min(Te,xe.length)},()=>nt());await Promise.all(et)}function Qe(){ge&&(ge.abort(),ge=null)}let vt=0;async function Ze(me){const xe=++vt;try{const Ie=await(await fetch(`/api/ai/history/last/${encodeURIComponent(me)}`)).json();if(xe!==vt)return;Ie.success&&Ie.data&&(y.value=Ie.data,z.value=Ie.data.evaluate_time,Ye(me,Ie.data),it(Ie.data))}catch{}}async function Ye(me,xe){var Re,Ie;try{const et=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(me)}&limit=2`)).json();if(et.success&&et.data&&et.data.length>=2){const $e=et.data[1],bt=((Re=xe.result)==null?void 0:Re.total_score)||0,St=((Ie=$e.result)==null?void 0:Ie.total_score)||0;bt>0&&St>0&&(v.value={prevScore:St,currScore:bt,diff:bt-St})}}catch(nt){console.warn("[refreshStrategyData] autoPoll failed:",nt)}}function it(me){var nt;const xe=((nt=me.result)==null?void 0:nt.dimensions)||{},Re=[],Ie=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const et of Ie){const $e=xe[et.key];$e!==void 0&&Re.push({icon:$e>=et.good?"●":$e>=et.warn?"▲":"✕",label:`${et.label} ${Math.round($e)}分`})}r.value=Re}return{aiResult:y,lastEvalTime:z,evalHistoryComparison:v,checklistItems:r,aiHistory:g,selectedHistoryIds:o,expandedDates:E,expandedMonths:l,expandedStocks:D,poolSignals:k,toggleMonthExpand:S,aiHistoryView:M,selectedWatchlistCodes:b,showAutoEvaluateSettings:n,savingConfig:s,autoEvaluateScope:u,aiVendors:F,aiCatalog:G,aiModelsError:W,testingAllModels:Y,savingAiModels:te,loadAiVendors:$,loadAiCatalog:se,saveAiVendors:j,saveAiModels:j,testVendorModel:B,testAllVendorModels:A,fetchVendorModels:p,addVendorFromCatalog:x,addCustomVendor:le,addVendorModel:K,removeVendorModel:T,removeVendor:c,toggleVendorKeyReveal:R,toggleVendorEdit:H,autoEvaluateConfig:C,aiLoading:d,aiEvalStage:O,aiEvalElapsed:ie,aiEvalError:J,showBatchEvaluate:Q,batchStocks:_,batchRunning:f,batchTotal:Z,batchCompleted:pe,batchCurrent:we,batchStatuses:Me,batchResults:Ve,batchEvalErrors:Ee,aiConfig:_e,selectedPreset:ne,providerInfo:ke,aiPresets:De,applyPreset:oe,onProviderChange:X,fetchPoolSignals:Le,cancelPoolSignals:Qe,loadLastEvaluation:Ze}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:m,watch:t}=Vue,{configChanged:h,aiConfig:y,aiLoading:z,feishuConfig:v,currentTheme:r,changeTheme:g,autoEvaluateConfig:o,currentUser:E,strategyFilter:l,applyTheme:D,dashboardData:k,lastRefreshTime:S,saveAiModels:M}=a,b=e(!1),n=e(!1),s=e(null),u=e(null),F=e(null),G=e(null),W=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),Y=e("disconnected"),te=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),I=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),P=e(!1),R=e(null),H=e(null),ee=e("pending"),$=e("..."),se=e(!1),j=e({api_limit:600}),B=e(!1),A=e(!1);async function p(){try{const X=await(await fetch("/api/system/rate-limit")).json();X.success&&(j.value=X.data)}catch(oe){console.warn("loadRateLimit failed:",oe)}}async function x(){A.value=!0;try{const X=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j.value)})).json();X.success?(B.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(X.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{A.value=!1}}t(()=>[y.value.provider,y.value.apiKey,y.value.endpoint,y.value.model],()=>{h.value=!0},{deep:!0});async function le(){b.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(y.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y.value)})).json()).success?(h.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(oe){localStorage.setItem("quant_ai_config",JSON.stringify(y.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",oe)}finally{b.value=!1}}async function K(){z.value=!0;try{const X=await(await fetch("/api/ai/test")).json();X.success?ElementPlus.ElMessage.success(X.message||"API连接正常"):ElementPlus.ElMessage.error(X.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{z.value=!1}}function T(){const oe={ai:y.value,feishu:v.value,theme:r.value,export_time:new Date().toISOString()},X=new Blob([JSON.stringify(oe,null,2)],{type:"application/json"}),ge=URL.createObjectURL(X),Te=document.createElement("a");Te.href=ge,Te.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Te.click(),URL.revokeObjectURL(ge),ElementPlus.ElMessage.success("配置已导出")}function c(oe){const X=oe.target.files[0];if(!X)return;const ge=new FileReader;ge.onload=async Te=>{try{const Le=JSON.parse(Te.target.result);Le.ai&&(y.value={...y.value,...Le.ai},await le()),Le.feishu&&(Object.assign(v.value,Le.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Le.feishu)})),Le.theme&&(r.value=Le.theme,g(Le.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ge.readAsText(X),oe.target.value=""}async function C(){b.value=!0;const oe=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:W.value,feishu:v.value,ai:y.value,rate_limit:j.value,auto_evaluate:o.value,theme:r.value}})}).then(Le=>["userConfig",Le.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W.value)}).then(Le=>["tushare",Le.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:te.value})}).then(Le=>["datasource",Le.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)}).then(Le=>["feishu",Le.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y.value)}).then(Le=>["ai",Le.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j.value)}).then(Le=>["rateLimit",Le.ok]),M().then(()=>["aiModels",!0],()=>["aiModels",!1])],X=await Promise.allSettled(oe),ge=X.filter(Le=>Le.status==="fulfilled"&&Le.value[1]).length,Te=X.filter(Le=>Le.status==="rejected"||Le.status==="fulfilled"&&!Le.value[1]).length;B.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(l.value.selected)),localStorage.setItem("quant_strategy_filter_mode",l.value.mode),E.value&&fetch(`/api/users/${E.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:r.value})}).catch(()=>{}),n.value=!1,s.value=new Date().toLocaleString("zh-CN"),b.value=!1,Te>0&&console.error(`[saveAllConfig] ${ge}/${ge+Te} 项保存成功，${Te} 项失败`)}async function d(){try{const X=await(await fetch("/api/user_config/config")).json();if(X.success&&X.config){const ge=X.config;ge.tushare&&(W.value={...W.value,...ge.tushare}),ge.feishu&&(v.value={...v.value,...ge.feishu}),ge.ai&&(y.value={...y.value,...ge.ai}),ge.rate_limit&&(j.value={...j.value,...ge.rate_limit}),ge.auto_evaluate&&(o.value={...o.value,...ge.auto_evaluate}),ge.theme&&!localStorage.getItem("quant_theme")&&D(ge.theme)}n.value=!1,B.value=!1}catch(oe){console.error("[resetAllConfig] 重新加载配置失败:",oe),n.value=!1}}async function O(){Y.value="testing";try{const X=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(Y.value=X.success?"connected":"disconnected",X.success){const ge=X.data_count?` (获取到 ${X.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ge)}else ElementPlus.ElMessage.error(X.message||"连接失败")}catch{Y.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function ie(){try{const X=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();Y.value=X.success?"connected":"disconnected"}catch{Y.value="disconnected"}}async function J(){var oe;P.value=!0;try{const ge=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ge.success?(R.value=parseInt(((oe=ge.message.match(/\d+/))==null?void 0:oe[0])||"0"),ElementPlus.ElMessage.success(ge.message)):ElementPlus.ElMessage.error(ge.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{P.value=!1}}async function Q(){try{const X=await(await fetch("/api/market/tushare/config")).json();X.success&&X.config&&(W.value={...W.value,...X.config})}catch(oe){console.warn("loadTushareConfig failed:",oe)}}function _(oe){if(!oe)return"";const X=String(oe),ge=X.length;if(ge<=4)return X[0]+"*".repeat(ge-1);const Te=ge<=8?2:4;return X.slice(0,Te)+"*".repeat(ge-Te-Te)+X.slice(-Te)}async function f(oe){let X;try{X=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Te=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:X,target:oe})})).json();if(Te.success)return Te.secret;ElementPlus.ElMessage.error(Te.message||"查看失败")}catch(ge){ElementPlus.ElMessage.error("查看失败: "+ge.message)}return null}async function Z(oe){const X=te.value[oe];if(!X)return;if(X._revealed){X._revealed=!1,X._masked=_(X.token);return}const ge=await f(oe);ge!==null&&(X.token=ge,X._revealed=!0)}async function pe(oe){const X=te.value[oe];if(X){if(X._editing){X._editing=!1,X._revealed=!1,X.token&&(X._masked=_(X.token));return}X._editing=!0;try{const ge=await f(oe);if(ge===null){X._editing=!1;return}X.token=ge,X._revealed=!0}catch(ge){X._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ge.message)}}}async function we(){try{const X=await(await fetch("/api/market/datasource/config")).json();if(X.success&&X.config&&X.config.sources){const ge=X.config.sources,Te=Le=>{const Qe={...te.value[Le],...ge[Le]||{}};return Qe._editing=!1,Qe._revealed=!1,Qe._masked=Qe.token||"",Qe.token="",Qe};te.value={sxsc_tushare:Te("sxsc_tushare"),tushare:Te("tushare"),akshare:{...te.value.akshare,...ge.akshare||{}}}}try{const Te=await(await fetch("/api/market/datasource/status")).json();if(Te.success&&Te.status)for(const[Le,Qe]of Object.entries(Te.status))I.value[Le]=Qe.connected?"connected":"disconnected"}catch{}}catch(oe){console.warn("loadDatasourceConfig failed:",oe)}}async function Me(){try{const oe={};for(const[X,ge]of Object.entries(te.value)){const{_revealed:Te,_masked:Le,_editing:Qe,...vt}=ge;!Qe&&X!=="akshare"&&(vt.token=""),oe[X]=vt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:oe})}),n.value=!0}catch(oe){console.warn("saveDatasourceConfig failed:",oe)}}async function Ve(oe){I.value[oe]="testing";try{const X=te.value[oe];X&&X._editing&&await Me();const Te=await(await fetch(`/api/market/datasource/test/${oe}`,{method:"POST"})).json();I.value[oe]=Te.success?"connected":"disconnected",Te.success?ElementPlus.ElMessage.success(`${oe} 连接成功`):ElementPlus.ElMessage.error(`${oe}: ${Te.message}`)}catch{I.value[oe]="disconnected",ElementPlus.ElMessage.error(`${oe} 连接失败`)}}async function Ee(){try{const X=await(await fetch("/api/feishu/config")).json();X&&typeof X=="object"&&(v.value={...v.value,...X},u.value=JSON.parse(JSON.stringify(v.value)))}catch(oe){console.warn("loadFeishuConfig failed:",oe)}}async function _e(){try{const X=await(await fetch("/api/ai/config")).json();if(X.success&&X.data)y.value={...y.value,...X.data};else{const ge=localStorage.getItem("quant_ai_config");ge&&(y.value=JSON.parse(ge))}}catch{const X=localStorage.getItem("quant_ai_config");X&&(y.value=JSON.parse(X))}}async function ne(){try{const X=await(await fetch("/api/user_config/config")).json();if(X.success&&X.config){const ge=X.config;ge.tushare&&(W.value={...W.value,...ge.tushare}),ge.datasource&&ge.datasource.sources&&(te.value={sxsc_tushare:{...te.value.sxsc_tushare,...ge.datasource.sources.sxsc_tushare||{}},tushare:{...te.value.tushare,...ge.datasource.sources.tushare||{}},akshare:{...te.value.akshare,...ge.datasource.sources.akshare||{}}}),ge.feishu&&(v.value={...v.value,...ge.feishu},u.value=JSON.parse(JSON.stringify(v.value))),ge.ai&&(y.value={...y.value,...ge.ai}),ge.rate_limit&&(j.value={...j.value,...ge.rate_limit}),ge.theme&&!localStorage.getItem("quant_theme")&&D(ge.theme),ge.auto_evaluate&&(o.value={...o.value,...ge.auto_evaluate})}}catch(oe){console.warn("加载用户配置失败，使用本地缓存",oe)}}async function ke(){var oe,X,ge,Te;try{const Qe=await(await fetch("/api/dashboard")).json(),vt=Qe.success?Qe.data:Qe;R.value=((oe=vt==null?void 0:vt.stats)==null?void 0:oe.total_stocks_covered)||null;const Ye=await(await fetch("/api/dates")).json();H.value=((X=Ye==null?void 0:Ye.data)==null?void 0:X.total)||((Te=(ge=Ye==null?void 0:Ye.data)==null?void 0:ge.dates)==null?void 0:Te.length)||null;const me=await(await fetch("/api/ai/history")).json();ee.value="ok"}catch{ee.value="pending"}}async function De(){try{const X=await(await fetch("/api/dashboard")).json();k.value=X.success?X.data:X,S.value=Date.now()}catch(oe){console.error("加载总览数据失败",oe)}}return{configSaving:b,configChanged:h,globalConfigDirty:n,lastSavedTime:s,feishuConfigOriginal:u,aiConfigOriginal:F,tushareConfigOriginal:G,tushareConfig:W,tushareStatus:Y,datasourceConfig:te,datasourceStatus:I,syncingData:P,stockCount:R,tradeDateCount:H,aiStatus:ee,appVersion:$,showImportDialog:se,rateLimitConfig:j,rateLimitDirty:B,rateLimitSaving:A,loadRateLimit:p,saveRateLimit:x,saveAiConfig:le,testAiApi:K,exportConfig:T,importConfig:c,saveAllConfig:C,resetAllConfig:d,testTushareConnection:O,checkTushareConnection:ie,syncStockData:J,loadTushareConfig:Q,loadDatasourceConfig:we,saveDatasourceConfig:Me,testDatasource:Ve,toggleDatasourceKeyReveal:Z,toggleDatasourceEdit:pe,loadFeishuConfig:Ee,loadAiConfig:_e,loadUserConfig:ne,loadSystemStatus:ke,loadDashboardData:De}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:m}=Vue,{currentUser:t,applyTheme:h,allMenuDefs:y,loadGroupConfig:z}=a,v=e([]),r=e(""),g=e(""),o=e("users"),E=e({}),l=e({}),D=m(()=>{let ne=v.value;if(g.value&&(ne=ne.filter(De=>(De.group||De.role)===g.value)),!r.value)return ne;const ke=r.value.toLowerCase();return ne.filter(De=>De.username.toLowerCase().includes(ke))});function k(ne){E.value={...E.value,[ne]:!E.value[ne]}}async function S(ne,ke){try{const oe=await(await fetch("/api/groups/"+ke+"/members/"+ne,{method:"DELETE"})).json();oe.success?(await pe(),await f()):ElementPlus.ElMessage.error(oe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function M(ne){const ke=l.value[ne];if(ke)try{const oe=await(await fetch("/api/groups/"+ne+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ke})})).json();oe.success?(await pe(),await f(),l.value={...l.value,[ne]:""}):ElementPlus.ElMessage.error(oe.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function b(ne,ke){try{const oe=await(await fetch("/api/users/"+ne.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:ke})})).json();oe.success?await pe():ElementPlus.ElMessage.error(oe.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const n=e(!1),s=e(null),u=e({username:"",password:"",role:"user",theme:"tech-blue"}),F=e(!1),G=e(null),W=e(!1),Y=e(!1),te=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),I=e({}),P=e(!1),R=e({group_id:"",name:"",description:""}),H=e(!1),ee=e([]),$=e(""),se=e(""),j=e({});function B(ne){j.value={...j.value,[ne]:!j.value[ne]}}function A(ne){return!v.value||!v.value.length?0:v.value.filter(ke=>(ke.group||ke.role)===ne).length}function p(ne){const ke=(ne==null?void 0:ne.visible_menus)||{};return Object.values(ke).filter(Boolean).length}const x=m(()=>Object.keys(_.value).length);async function le(ne){se.value=ne,Y.value=!0,await K(ne)}async function K(ne){try{const De=await(await fetch("/api/groups/"+ne+"/members")).json();De.success&&(ee.value=De.members||[])}catch(ke){ee.value=[],console.error("[loadGroupMembers]",ke)}}async function T(){if(!(!$.value||!se.value)){H.value=!0;try{const ke=await(await fetch("/api/groups/"+se.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:$.value})})).json();ke.success?(await K(se.value),await pe(),$.value=""):ElementPlus.ElMessage.error(ke.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{H.value=!1}}}async function c(ne){try{const De=await(await fetch("/api/groups/"+se.value+"/members/"+ne,{method:"DELETE"})).json();De.success?(await K(se.value),await pe()):ElementPlus.ElMessage.error(De.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const C=m(()=>{if(!v.value)return[];const ne=new Set(ee.value.map(ke=>ke.username));return v.value.filter(ke=>ke.username!=="admin"&&ke.username!=="guest"&&!ne.has(ke.username))});function d(ne){const ke=te.value.visible_menus[ne],De=y.find(oe=>oe.key===ne);if(De)if(ke){const oe=I.value[ne]||{};De.subPages.forEach(X=>{const ge=ne+"."+X;te.value.visible_sub_pages[ge]=oe[X]!==void 0?oe[X]:!0})}else{const oe={};De.subPages.forEach(X=>{const ge=ne+"."+X;oe[X]=te.value.visible_sub_pages[ge],te.value.visible_sub_pages[ge]=!1}),I.value[ne]=oe}}function O(ne){G.value=ne;const ke=_.value[ne]||{};te.value={name:ke.name||ne,description:ke.description||"",visible_menus:{...ke.visible_menus||{}},visible_sub_pages:{...ke.visible_sub_pages||{}}},I.value={},y.forEach(De=>{const oe={};De.subPages.forEach(X=>{oe[X]=te.value.visible_sub_pages[De.key+"."+X]}),I.value[De.key]=oe}),W.value=!0}async function ie(){H.value=!0;try{const ke=await(await fetch("/api/groups/"+G.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(te.value)})).json();ke.success?(W.value=!1,G.value=null,await f(),await z()):ElementPlus.ElMessage.error(ke.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{H.value=!1}}async function J(ne){var ke;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((ke=_.value[ne])==null?void 0:ke.name)||ne)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const X=await(await fetch("/api/groups/"+ne,{method:"DELETE"})).json();X.success?await f():ElementPlus.ElMessage.error(X.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function Q(){if(R.value.group_id){H.value=!0;try{const ke=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R.value)})).json();ke.success?(P.value=!1,R.value={group_id:"",name:"",description:""},await f()):ElementPlus.ElMessage.error(ke.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{H.value=!1}}}const _=e({});async function f(){try{if(!localStorage.getItem("quant_token"))return;const ke=await fetch("/api/groups");if(ke.ok){const De=await ke.json();_.value=De.groups||{}}}catch(ne){console.warn("loadAllGroups:",ne)}}function Z(ne){var ke;return((ke=_.value[ne])==null?void 0:ke.name)||ne||"--"}async function pe(){try{if(!localStorage.getItem("quant_token")){v.value=[];return}const ke=await fetch("/api/users");if(ke.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const De=await ke.json();v.value=De.users||[]}catch(ne){v.value=[],console.error("[loadUsers] error:",ne)}}function we(ne){s.value=ne,u.value={username:ne.username,password:"",role:ne.role,theme:ne.theme||"tech-blue",group:ne.group||ne.role},n.value=!0}async function Me(){if(u.value.username){F.value=!0;try{const ne=s.value?"PUT":"POST",ke=s.value?`/api/users/${u.value.username}`:"/api/users",oe=await(await fetch(ke,{method:ne,headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)})).json();if(oe.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&u.value.username===t.value.username){const X=u.value.theme;X&&X!==t.value.theme&&(t.value.theme=X,localStorage.setItem("quant_user",JSON.stringify(t.value)),h(X))}n.value=!1,s.value=null,await pe()}else ElementPlus.ElMessage.error(oe.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{F.value=!1}}}async function Ve(ne){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ne}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await pe())}catch(ke){console.error("[deleteUser]",ke)}}async function Ee(ne){try{const De=await(await fetch(`/api/users/${ne.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ne.enabled})})).json();De.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(De.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function _e(ne){try{const{value:ke}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ne.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(ke){const oe=await(await fetch(`/api/users/${ne.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:ke})})).json();oe.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(oe.message||"重置失败")}}catch{}}return{userList:v,userSearch:r,groupFilter:g,userPageTab:o,expandedGroups:E,addMemberGroupMap:l,filteredUsers:D,toggleGroupExpand:k,removeMemberFromGroupInline:S,addMemberToGroupInline:M,changeUserGroup:b,showAddUser:n,editingUser:s,userForm:u,savingUser:F,editingGroup:G,menuConfigDialog:W,memberDialog:Y,groupEditForm:te,subPageCache:I,showAddGroup:P,addGroupForm:R,savingGroup:H,groupMembers:ee,addMemberUsername:$,selectedMemberGroup:se,subPageSectionExpanded:j,toggleSubPageSection:B,getGroupMemberCount:A,getMenuEnabledCount:p,groupCount:x,openMemberManager:le,loadGroupMembers:K,addMemberToGroup:T,removeMemberFromGroup:c,availableUsersForGroup:C,onParentToggle:d,openMenuConfig:O,saveMenuConfig:ie,deleteGroupConfig:J,createGroup:Q,allGroups:_,getGroupName:Z,loadAllGroups:f,loadUsers:pe,editUser:we,saveUser:Me,deleteUser:Ve,toggleUserEnabled:Ee,resetUserPassword:_e}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:m}=Vue,{stockKlineLoaded:t,stockDetailVisible:h,stockDetailTab:y,stockDetail:z,disposeStockKline:v}=a,r=e([]),g=e(!1),o=e(!1),E=e("date"),l=e([]),D=e([]),k=e([]),S=e([]),M=m(()=>{var c,C;const T=[];for(const d of r.value){if(!d||d.id==null)continue;const O=d.stock_name||d.stock_code||"",ie=Array.isArray(d.messages)?d.messages:[];T.push({id:d.id,stock_code:d.stock_code,stock_name:O,first_msg:d.first_msg||((C=(c=ie[0])==null?void 0:c.content)==null?void 0:C.substring(0,50))||"",msg_count:d.msg_count||ie.length||0,created_at:d.created_at,date:(d.created_at||"").substring(0,10),month:(d.created_at||"").substring(0,7),messages:ie})}return T}),b=m(()=>{const T={};for(const C of M.value){const d=C.date||"未知";T[d]||(T[d]=[]),T[d].push(C)}const c={};return Object.keys(T).sort((C,d)=>d.localeCompare(C)).forEach(C=>c[C]=T[C]),c}),n=m(()=>{const T={};for(const C of M.value){const d=C.month||"未知";T[d]||(T[d]=[]),T[d].push(C)}const c={};return Object.keys(T).sort((C,d)=>d.localeCompare(C)).forEach(C=>c[C]=T[C]),c}),s=m(()=>{const T={};for(const c of M.value){const C=`${c.stock_name}(${c.stock_code})`;T[C]||(T[C]=[]),T[C].push(c)}return T});function u(T){const c=l.value.indexOf(T);c>=0?l.value.splice(c,1):l.value.push(T)}function F(T){const c=b.value[T]||[];if(c.every(d=>l.value.includes(d.id)))l.value=l.value.filter(d=>!c.some(O=>O.id===d));else for(const d of c)l.value.includes(d.id)||l.value.push(d.id)}function G(T){const c=n.value[T]||[];if(c.every(d=>l.value.includes(d.id)))l.value=l.value.filter(d=>!c.some(O=>O.id===d));else for(const d of c)l.value.includes(d.id)||l.value.push(d.id)}function W(T){const c=s.value[T]||[];if(c.every(d=>l.value.includes(d.id)))l.value=l.value.filter(d=>!c.some(O=>O.id===d));else for(const d of c)l.value.includes(d.id)||l.value.push(d.id)}function Y(T){const c=D.value.indexOf(T);c>=0?D.value.splice(c,1):D.value.push(T)}function te(T){const c=k.value.indexOf(T);c>=0?k.value.splice(c,1):k.value.push(T)}function I(T){const c=S.value.indexOf(T);c>=0?S.value.splice(c,1):S.value.push(T)}function P(){l.value.length===M.value.length?l.value=[]:l.value=M.value.map(T=>T.id)}async function R(){for(const T of[...l.value])await le(T);l.value=[]}const H={};async function ee(T){z.value={stock:T.stock_code,name:T.stock_name},h.value=!0,y.value="chat",t.value=!1,v(),j.value=!0,B.value="",se.value=[];try{let c=H[T.id];if(!c){const C=await fetch("/api/ai/chat/history/"+T.id);if(!C.ok)throw new Error("load history failed");c=(await C.json()).messages||[],H[T.id]=c}se.value=c.map(C=>({role:C.role,content:C.content}))}catch{B.value="历史消息加载失败，请重试"}finally{j.value=!1}}const $=e(""),se=e([]),j=e(!1),B=e("");async function A(){var C;const T=$.value.trim();if(!T||j.value)return;B.value="",se.value.push({role:"user",content:T}),$.value="",j.value=!0;const c=se.value.length;se.value.push({role:"assistant",content:""});try{const ie=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((C=z.value)==null?void 0:C.stock)||"",message:T})})).body.getReader(),J=new TextDecoder;let Q="";for(;;){const{done:_,value:f}=await ie.read();if(_)break;Q+=J.decode(f,{stream:!0});const Z=Q.split(`
`);Q=Z.pop()||"";for(const pe of Z)if(pe.startsWith("data: "))try{const we=JSON.parse(pe.slice(6));we.token?se.value[c].content+=we.token:we.done?console.log("Stream done:",we.session_id):we.error&&(B.value=we.error)}catch(we){console.warn("SSE parse error:",we)}}}catch(d){se.value[c].content||(se.value[c].content="网络错误: "+d.message)}j.value=!1}async function p(T){var C;B.value="",j.value=!0;const c={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};se.value.push({role:"user",content:c[T]||c.comprehensive});try{const O=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((C=z.value)==null?void 0:C.stock)||"",mode:T})});if(O.ok){const ie=await O.json();se.value.push({role:"assistant",content:ie.reply||"无回复"})}}catch(d){B.value="网络错误: "+d.message}j.value=!1}async function x(){g.value=!0,o.value=!1;try{const T=await fetch("/api/ai/chat/history?view=date");if(T.ok){const c=await T.json(),C=[];for(const d of c)for(const O of d.items||[])C.push(O);r.value=C}else o.value=!0}catch(T){console.error(T),o.value=!0}finally{g.value=!1}}async function le(T){try{await fetch("/api/ai/chat/history/"+T,{method:"DELETE"}),r.value=r.value.filter(c=>c.id!==T)}catch(c){console.error("deleteChatSession:",c)}}function K(T){if(!T)return"";const c=String(T).split(`
`),C=[],d=[];let O=0;for(;O<c.length;){if(/^\s*\|.*\|\s*$/.test(c[O])){let J=O;const Q=[];for(;J<c.length&&/^\s*\|.*\|\s*$/.test(c[J]);)Q.push(c[J]),J++;const _=pe=>pe.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(we=>we.trim()),f=Q.map(_);if(f.length>1&&f[1].every(pe=>/^:?-{3,}:?$/.test(pe))){const pe=Math.max(...f.map(Ee=>Ee.length)),we=f[0].slice(0,pe),Me=f.slice(2);let Ve="<table>";Me.length?(Ve+="<thead><tr>"+we.map(Ee=>"<th>"+Ee+"</th>").join("")+"</tr></thead>",Ve+="<tbody>"+Me.map(Ee=>"<tr>"+Ee.slice(0,pe).map(_e=>"<td>"+_e+"</td>").join("")+"</tr>").join("")+"</tbody>"):Ve+="<tbody><tr>"+we.map(Ee=>"<td>"+Ee+"</td>").join("")+"</tr></tbody>",Ve+="</table>",C.push(Ve),d.push("\0T"+(C.length-1)+"\0"),O=J;continue}for(;O<J;)d.push(c[O]),O++;continue}d.push(c[O]),O++}let ie=d.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return C.forEach((J,Q)=>{ie=ie.split("\0T"+Q+"\0").join(J)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ie=window.__quantModules.core.sanitizeHtml(ie)),ie}return{chatSessions:r,chatHistoryView:E,selectedChatIds:l,expandedChatDates:D,expandedChatMonths:k,expandedChatStocks:S,chatHistoryLoading:g,chatHistoryError:o,allChatSessionsFlat:M,chatGroupedByDate:b,chatGroupedByMonth:n,chatGroupedByStock:s,toggleSelectChat:u,toggleSelectChatDate:F,toggleSelectChatMonth:G,toggleSelectChatStock:W,toggleChatDateExpand:Y,toggleChatMonthExpand:te,toggleChatStockExpand:I,selectAllChatSessions:P,deleteSelectedChatSessions:R,viewChatSession:ee,loadChatHistory:x,deleteChatSession:le,renderMarkdown:K,stockChatInput:$,stockChatMessages:se,stockChatLoading:j,stockChatError:B,askStockSend:A,askStockQuick:p}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:m,watch:t}=Vue,{consensus:h,currentPage:y,currentSubPage:z,dashboardData:v,searchKeyword:r,statusFilter:g,strategyFilter:o,strategyFilterCounts:E}=a;function l(I){const P=o.value.selected;if(!P||P.length===0)return I;const R=o.value.mode;return I.filter(H=>{const ee=H.strategy_names||H.strategies||[];return R==="union"?P.some($=>ee.includes($)):P.every($=>ee.includes($))})}const D=m(()=>{const I=l(h.value||[]);return{all:I.length,newCount:I.filter(P=>P.status==="new").length,current:I.filter(P=>P.status==="current").length,out:I.filter(P=>P.status==="out").length}}),k=m(()=>{let I=h.value||[];if(g.value!=="all"&&(I=I.filter(P=>P.status===g.value)),I=l(I),r.value){const P=r.value.toLowerCase();I=I.filter(R=>R.code.toLowerCase().includes(P)||R.name&&R.name.toLowerCase().includes(P))}return I}),S=m(()=>{const I=h.value||[],P={},R={};for(const H of I)H.code&&H.name&&(R[H.code]=H.name);for(const H of I){const ee=H.strategy_names||H.strategies||[];for(const $ of ee)P[$]||(P[$]={strategy:$,count:0,codes:[],names:[]}),P[$].count++,P[$].codes.includes(H.code)||(P[$].codes.push(H.code),P[$].names.push({code:H.code,name:R[H.code]||H.code}))}return Object.values(P).sort((H,ee)=>ee.count-H.count)}),M=m(()=>{const I=o.value.selected,P=o.value.mode,R={};for(const[H,ee]of Object.entries(E.value)){const $=ee||[];!I||I.length===0?R[H]=$.length:P==="union"?R[H]=$.filter(se=>se.strategies&&I.some(j=>se.strategies.includes(j))).length:R[H]=$.filter(se=>se.strategies&&I.every(j=>se.strategies.includes(j))).length}return R});function b(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const n=m(()=>{const I=(v.value||{}).consensus_rank||[];return l(I)}),s=m(()=>{const I=h.value||E.value.day||[];return l(I).length}),u=m(()=>{const I=(v.value||{}).strategy_counts||[],P=h.value||E.value.day||[];if(P.length===0)return I;const R=l(P),H={};R.forEach($=>{($.strategy_names||$.strategies||[]).forEach(j=>{H[j]=(H[j]||0)+1})});const ee=R.length||1;return I.map($=>{const se=$.strategy_name||$.strategy_id,j=H[se]||0;return{...$,count:j,percentage:Math.round(j/ee*1e3)/10}})}),F=m(()=>{const I=(v.value||{}).pool_changes||{},P=(I.new_count||0)-(I.out_count||0);return P>0?{dir:"up",text:"↑"+P}:P<0?{dir:"down",text:"↓"+Math.abs(P)}:{dir:"flat",text:"→0"}}),G=m(()=>{const I=(v.value||{}).time_coverage||{},P=new Date(I.start_date),R=new Date(I.end_date),H=new Date;if(!P.getTime()||!R.getTime()||H>=R)return 100;if(H<=P)return 0;const ee=R-P,$=H-P;return Math.round($/ee*100)}),W=e(null),Y=m(()=>{if(!W.value)return"";const I=Math.floor((Date.now()-W.value)/1e3);return I<60?I+"秒前刷新":I<3600?Math.floor(I/60)+"分钟前刷新":Math.floor(I/3600)+"小时前刷新"});function te(I){o.value.selected=[I],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([I])),localStorage.setItem("quant_strategy_filter_mode","union"),y.value="calendar",z.value="calendar"}return{applyStrategyFilter:l,statusCounts:D,stockPool:k,strategyDistribution:S,strategyPreviewCount:M,saveStrategyFilter:b,filteredConsensusRank:n,currentPoolSize:s,filteredStrategyCounts:u,poolChangeBadge:F,timeBarPercent:G,lastRefreshTime:W,timeSinceRefresh:Y,navigateToStrategyFilter:te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist={create(a){const{ref:e,computed:m,watch:t}=Vue,{currentUser:h,selectedDate:y,stockDetail:z,stockDetailTab:v,stockDetailVisible:r,stockDetailLoading:g,stockKlineLoaded:o,viewCache:E,animateScoreEntrance:l,loadStockKline:D,refreshStockScore:k,disposeStockKline:S,aiHistory:M,aiLoading:b,aiEvalStage:n,aiEvalElapsed:s,aiEvalError:u,aiResult:F,loadLastEvaluation:G,autoEvaluateConfig:W,autoEvaluateScope:Y,batchStocks:te,batchRunning:I,batchTotal:P,batchCompleted:R,batchCurrent:H,batchStatuses:ee,batchResults:$,batchEvalErrors:se,expandedDates:j,expandedStocks:B,savingConfig:A,selectedHistoryIds:p,selectedWatchlistCodes:x,showAutoEvaluateSettings:le,showBatchEvaluate:K}=a,T=L=>(getComputedStyle(document.documentElement).getPropertyValue(L)||"").trim(),c=e(""),C=e("default"),d=e("default"),O=e([]),ie=m(()=>new Set(O.value.map(L=>L.code))),J=e(!1),Q=e(!1),_=m(()=>{const L=[...O.value];return d.value==="name"?L.sort((ae,de)=>ae.name.localeCompare(de.name,"zh")):d.value==="added"?L.sort((ae,de)=>(de.added_at||"").localeCompare(ae.added_at||"")):d.value==="score"&&L.sort((ae,de)=>{const i=Z(ae.code);return Z(de.code)-i}),L});function f(L){const ae=M.value.filter(i=>i.stock_code===L);if(ae.length===0)return null;const de=ae.reduce((i,w)=>i.evaluate_time>w.evaluate_time?i:w);return{score:de.result.total_score,color:de.result.level_color}}function Z(L){const ae=f(L);return ae?ae.score:0}function pe(L){ct(L.code,L.name),_e.value=_e.value.filter(ae=>ae.code!==L.code),Ee.value=""}const we=m(()=>new Set(M.value.map(L=>L.stock_code))),Me=e(new Set);function Ve(L){Me.value.add(L)}const Ee=e(""),_e=e([]),ne=e(!1),ke=e({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),De=e(!1),oe=e(!1),X=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};X.REALTIME_WS_PATH;const ge=X.REALTIME_DEGRADED_TEXT||"数据不可达",Te=X.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";X.WARN_RISE_SPEED_THRESHOLD!=null&&X.WARN_RISE_SPEED_THRESHOLD,X.WARN_VOLUME_RATIO_THRESHOLD!=null&&X.WARN_VOLUME_RATIO_THRESHOLD;const Le=X.quoteFmt||{price:L=>L==null?"--":Number(L).toFixed(2),pct:L=>L==null?"--":Number(L).toFixed(2)+"%",num:L=>L==null?"--":Number(L).toFixed(2),color:L=>""},Qe=3,vt=5e3,Ze=e({}),Ye=e(!1),it=e("idle");let me=null,xe=null,Re=0;function Ie(L){return X.checkQuoteWarning?X.checkQuoteWarning(L):null}function nt(L){return Ie(Ze.value[L])}function et(L){return Le.color(Ze.value[L])}function $e(L){return Le.price(Ze.value[L]&&Ze.value[L].price)}function bt(L){return Le.pct(Ze.value[L]&&Ze.value[L].change_pct)}function St(L,ae){return Le.num(Ze.value[L]&&Ze.value[L][ae])}function ht(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function tt(){if(!me||me.readyState!==1)return;const L=(O.value||[]).map(ae=>ae.code);L.length!==0&&me.send(JSON.stringify({subscribe:L}))}function jt(){if(xe&&(clearTimeout(xe),xe=null),me){try{me.onopen=null,me.onmessage=null,me.onerror=null,me.onclose=null,me.close()}catch{}me=null}Ze.value={},Ye.value=!1,it.value="idle"}function Mt(){const L=ht();if(!L||!X.buildRealtimeWsUrl||it.value==="open"||it.value==="connecting")return;let ae;try{ae=X.buildRealtimeWsUrl()+"?token="+encodeURIComponent(L)}catch{it.value="offline",Ye.value=!0;return}it.value="connecting";let de=null;try{de=new WebSocket(ae)}catch{it.value="offline",Ye.value=!0;return}me=de,de.onopen=function(){it.value="open",Re=0,tt()},de.onmessage=function(i){let w=null;try{w=JSON.parse(i.data||"{}")}catch{return}if(!w||w.type!=="quotes")return;if(Ye.value=!!w.degraded,w.degraded||!Array.isArray(w.data)){Ze.value={};return}const qe={};w.data.forEach(function(Oe){Oe&&Oe.code&&(qe[Oe.code]=Oe)}),Ze.value=qe},de.onerror=function(){it.value="offline",Ye.value=!0},de.onclose=function(){it.value="offline",Re<Qe?(Re++,xe=setTimeout(function(){it.value!=="open"&&Mt()},vt*Re)):Ye.value=!0}}t(O,function(){it.value==="open"&&tt()}),ht()&&setTimeout(Mt,500);async function _t(){if(!z.value)return;b.value=!0,F.value=null,u.value="",n.value="fetching",s.value=0;const L=Date.now(),ae=setInterval(()=>{b.value&&(s.value=Math.round((Date.now()-L)/1e3))},500);try{const de=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:z.value.stock,stock_name:z.value.name||z.value.stock,strategy:C.value})});n.value="calculating";const i=await de.json();n.value="analyzing",i.success?(await nextTick(),F.value=i.data,v.value="ai",be()):(u.value=i.message||"评估失败",ElementPlus.ElMessage.error(u.value))}catch(de){u.value=de&&de.message&&!String(de.message).includes("Failed to fetch")?de.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(u.value)}finally{clearInterval(ae),b.value=!1,s.value=0,u.value?n.value="":(n.value="done",setTimeout(()=>{n.value==="done"&&(n.value="")},800))}}const ft=50,Tt=e(0),q=e(!1),ue=m(()=>M.value.length<Tt.value);async function be(){J.value=!0,Q.value=!1;try{if(!localStorage.getItem("quant_token")){M.value=[];return}const ae=await fetch(`/api/ai/history?limit=${ft}&offset=0`);if(ae.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),h.value=null;return}const de=await ae.json();de.success?(M.value=de.data||[],Tt.value=de.total!=null?de.total:M.value.length):Q.value=!0}catch(L){console.error("[loadAiHistory] error:",L),Q.value=!0}finally{J.value=!1}}async function Ce(){if(!(q.value||!ue.value)){q.value=!0;try{const ae=await(await fetch(`/api/ai/history?limit=${ft}&offset=${M.value.length}`)).json();if(ae.success&&Array.isArray(ae.data)){const de=new Set(M.value.map(w=>w.id)),i=ae.data.filter(w=>!de.has(w.id));M.value=M.value.concat(i),ae.total!=null&&(Tt.value=ae.total)}}catch(L){console.warn("[loadMoreAiHistory] error:",L)}finally{q.value=!1}}}async function Ae(L){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const de=await(await fetch(`/api/ai/history/${L}`,{method:"DELETE"})).json();if(de.success){ElementPlus.ElMessage.success("删除成功"),be();const i=p.value.indexOf(L);i>=0&&p.value.splice(i,1)}else ElementPlus.ElMessage.error(de.message||"删除失败")}catch{}}function Ue(L){const ae=p.value.indexOf(L);ae>=0?p.value.splice(ae,1):p.value.push(L)}function V(){p.value=[]}function re(){x.value=[]}async function Be(){const L=p.value;if(L.length===0)return;const ae=M.value.filter(de=>L.includes(de.id)).map(de=>de.stock_code);K.value=!0,te.value=[...new Set(ae)].join(",")}async function Xe(){const L=p.value;if(L.length===0)return;const ae=M.value.filter(w=>L.includes(w.id)),de=[...new Map(ae.map(w=>[w.stock_code,w])).values()];let i=0;for(const w of de)ie.value.has(w.stock_code)||(await ct(w.stock_code,w.stock_name||w.stock_code),i++);i>0?ElementPlus.ElMessage.success(`已加入 ${i} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function rt(){const L=p.value;if(L.length===0)return;const ae=M.value.filter(i=>L.includes(i.id)),de=[...new Map(ae.map(i=>[i.stock_code,i])).values()];try{const w=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:de.map(qe=>({stock_code:qe.stock_code,stock_name:qe.stock_name||""}))})})).json();w&&w.success?ElementPlus.ElMessage.success(`已登记 ${w.count||de.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(w&&w.detail||"批量加入组合失败")}catch(i){console.warn("batchAddToPortfolio failed:",i),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function xt(){if(x.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${x.value.length} 只股票？`,"提示",{type:"warning"});for(const L of x.value)await yt(L);x.value=[],ElementPlus.ElMessage.success("已移除")}catch(L){L&&L.message!=="cancel"&&console.warn("batchRemoveWatchlist:",L)}}function Vt(L){const ae=x.value.indexOf(L);ae>=0?x.value.splice(ae,1):x.value.push(L)}function Ct(){p.value.length===M.value.length?p.value=[]:p.value=M.value.map(L=>L.id)}function Pt(){x.value.length===O.value.length?x.value=[]:x.value=O.value.map(L=>L.code)}async function mt(){if(p.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${p.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const ae=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:p.value})})).json();ae.success?(ElementPlus.ElMessage.success(ae.message),p.value=[],be()):ElementPlus.ElMessage.error(ae.message||"删除失败")}catch{}}async function Dt(){try{const ae=await(await fetch("/api/ai/auto-config")).json();ae.success&&(W.value=ae.data,ae.data.evaluate_scope&&(Y.value=ae.data.evaluate_scope))}catch(L){console.warn("loadAutoEvaluateConfig failed:",L)}}async function wt(){A.value=!0;try{W.value.evaluate_scope=Y.value;const ae=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W.value)})).json();ae.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),le.value=!1):ElementPlus.ElMessage.error(ae.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{A.value=!1}}const Nt=e(!1);async function Yt(){Nt.value=!0;try{const ae=await(await fetch("/api/watchlist")).json();ae.success&&(O.value=ae.stocks||[])}catch(L){console.warn("loadWatchlist failed:",L)}finally{Nt.value=!1}}async function ct(L,ae){try{const i=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:L,name:ae})})).json();if(i.success)return i.existed||O.value.push({code:L,name:ae,added_at:new Date().toISOString()}),!0}catch(de){console.warn("addToWatchlist failed:",de)}return!1}async function yt(L){try{await fetch(`/api/watchlist/${encodeURIComponent(L)}`,{method:"DELETE"}),O.value=O.value.filter(ae=>ae.code!==L)}catch(ae){console.warn("removeFromWatchlist failed:",ae)}}async function Ht(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),O.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(L){console.warn("clearWatchlist failed:",L)}}async function Je(L,ae){ie.value.has(L)?(await yt(L),ElementPlus.ElMessage.info("已移除自选")):await ct(L,ae)&&ElementPlus.ElMessage.success("已加入自选")}async function Xt(L,ae){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(L,ae||"");const de=new Date().toISOString().split("T")[0],i=y.value||de;v.value="kline",F.value=null,u.value="",S("stockKlineChart"),z.value=null,g.value=!0,o.value=!1,r.value=!0,nextTick(()=>l());try{const w=await fetch(`/api/calendar/stock/${encodeURIComponent(L)}?date=${i}`);z.value=await w.json()}catch{z.value={stock:L,name:ae,total_days:0}}finally{g.value=!1}await nextTick(),await D("daily"),k(),G(L)}const Bt=e(!1);async function ta(){var L;if(O.value.length!==0){Bt.value=!0;try{const de=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();de.success&&de.loaded>0?(((L=de.details)==null?void 0:L.loaded)||[]).forEach(i=>Me.value.add(i.code)):de.loaded===0&&de.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(ae){console.error("预加载K线失败:",ae)}finally{Bt.value=!1}}}async function ha(L,ae){b.value=!0,F.value=null,u.value="",n.value="fetching",o.value=!1,S();const de=new Date().toISOString().split("T")[0],i=y.value||de;try{const w=await fetch(`/api/calendar/stock/${encodeURIComponent(L)}?date=${i}`);z.value=await w.json()}catch{z.value={stock:L,name:ae,total_days:0}}v.value="ai",r.value=!0,await nextTick();try{const qe=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:L,stock_name:ae})})).json();qe.success?(F.value=qe.data,be()):(u.value=qe.message||"评估失败",ElementPlus.ElMessage.error(u.value))}catch{u.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(u.value)}finally{b.value=!1,n.value=""}}async function aa(){O.value.length!==0&&(K.value=!0,te.value=O.value.map(L=>L.code).join(","))}async function sa(){x.value.length!==0&&(K.value=!0,te.value=x.value.join(","))}async function ca(){if(!Ee.value.trim()){_e.value=[];return}ne.value=!0;try{const ae=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(Ee.value)}`)).json();_e.value=(ae.results||[]).filter(de=>!ie.value.has(de.code))}catch(L){console.warn("searchStockForWatchlist failed:",L)}finally{ne.value=!1}}async function Jt(){try{const ae=await(await fetch("/api/data-refresh/config")).json();ke.value=ae}catch(L){console.error("加载数据刷新配置失败:",L)}}async function da(){oe.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ke.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{oe.value=!1}}async function N(){var L;De.value=!0;try{const de=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();de.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((L=de.parser_stats)==null?void 0:L.dates_count)||0}交易日`),E.clear(),await Jt()):ElementPlus.ElMessage.error(de.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{De.value=!1}}const he=e(!1);async function je(){he.value=!0;try{const ae=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(ae.success){const de=ae.result||{},i=ae.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${de.pulled||0}/${de.total||0}, 财务 ${i.pulled||0}/${i.total||0}`),E.clear(),await Jt()}else ElementPlus.ElMessage.error(ae.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{he.value=!1}}const Pe=m(()=>{const L={};for(const ae of M.value){const de=(ae.evaluate_time||"").split("T")[0];L[de]||(L[de]=[]),L[de].push(ae)}for(const ae in L)L[ae].sort((de,i)=>i.evaluate_time.localeCompare(de.evaluate_time));return L}),at=m(()=>{const L={};for(const ae of M.value){const de=ae.stock_code;L[de]||(L[de]=[]),L[de].push(ae)}for(const ae in L)L[ae].sort((de,i)=>i.evaluate_time.localeCompare(de.evaluate_time));return L}),st=m(()=>{const L={};for(const ae of M.value){const de=(ae.evaluate_time||"").split("T")[0].slice(0,7);L[de]||(L[de]=[]),L[de].push(ae)}for(const ae in L)L[ae].sort((de,i)=>i.evaluate_time.localeCompare(de.evaluate_time));return L}),Lt=m(()=>Object.keys(at.value).length),Ot=m(()=>{const L=M.value.length;return L===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(de=>{const i=M.value.filter(w=>w.result.total_score>=de.min&&w.result.total_score<=de.max).length;return{...de,count:i,pct:Math.round(i/L*100)}})});async function Kt(){if(!c.value)return;const L=O.value.find(ae=>ae.code===c.value);if(L){b.value=!0,F.value=null,u.value="",n.value="fetching";try{z.value={stock:L.code,name:L.name,total_days:0},r.value=!0,v.value="ai",await nextTick();const de=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:L.code,stock_name:L.name,strategy:C.value})})).json();de.success?(F.value=de.data,be(),c.value=""):(u.value=de.message||"评估失败",ElementPlus.ElMessage.error(u.value))}catch{u.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(u.value)}finally{b.value=!1,n.value=""}}}function Zt(L){const ae=j.value.indexOf(L);ae>=0?j.value.splice(ae,1):j.value.push(L)}function xa(L){const de=(Pe.value[L]||[]).map(w=>w.id);de.every(w=>p.value.includes(w))?p.value=p.value.filter(w=>!de.includes(w)):de.forEach(w=>{p.value.includes(w)||p.value.push(w)})}function ea(L){const de=(st.value[L]||[]).map(w=>w.id);de.every(w=>p.value.includes(w))?p.value=p.value.filter(w=>!de.includes(w)):de.forEach(w=>{p.value.includes(w)||p.value.push(w)})}function ya(L){const ae=B.value.indexOf(L);ae>=0?B.value.splice(ae,1):B.value.push(L)}function ua(L){const de=(at.value[L]||[]).map(w=>w.id);de.every(w=>p.value.includes(w))?p.value=p.value.filter(w=>!de.includes(w)):de.forEach(w=>{p.value.includes(w)||p.value.push(w)})}const Wt={},ba={};function va(L,ae,de){if(!L||(de&&(ba[ae]={el:L,records:de}),Wt[ae]===L))return;const i=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,w=()=>{Object.keys(Wt).forEach(Ke=>{if(Wt[Ke]&&Wt[Ke]!==L){try{Wt[Ke].dispose()}catch{}delete Wt[Ke]}});const qe=[...de].sort((Ke,qt)=>Ke.evaluate_time.localeCompare(qt.evaluate_time)),Oe=qe.map(Ke=>(Ke.evaluate_time||"").split("T")[0]),We=qe.map(Ke=>{var qt;return((qt=Ke.result)==null?void 0:qt.total_score)??null}),pt=qe.map(Ke=>{var qt;return((qt=Ke.result)==null?void 0:qt.level)??""}),gt={primary:T("--qc-primary-600")||"#b8922a",textPrimary:T("--text-primary")||"#1f2937",textSecondary:T("--text-secondary")||"#6b7280",border:T("--border-light")||"#e5e7eb",up:T("--color-success")||"#67c23a",down:T("--color-danger")||"#f56c6c"},Ft=[];for(let Ke=1;Ke<We.length;Ke++)We[Ke]!=null&&We[Ke-1]!=null&&Math.abs(We[Ke]-We[Ke-1])>=15&&Ft.push({name:"大幅变化",coord:[Oe[Ke],We[Ke]],value:(We[Ke]-We[Ke-1]>0?"↑":"↓")+Math.abs(We[Ke]-We[Ke-1]),symbol:"pin",symbolSize:32,itemStyle:{color:We[Ke]-We[Ke-1]>0?gt.up:gt.down}});const la=echarts.init(L);la.setOption({tooltip:{trigger:"axis",backgroundColor:T("--bg-card")||"#ffffff",borderColor:gt.border,textStyle:{color:gt.textPrimary},formatter:function(Ke){var pa;const qt=(pa=Ke[0])==null?void 0:pa.dataIndex,ma=qt!=null?pt[qt]:"";return Oe[qt]+"<br/>得分: "+We[qt]+(ma?" ("+ma+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Oe,axisLabel:{fontSize:10,rotate:30,color:gt.textSecondary},axisLine:{lineStyle:{color:gt.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:gt.textSecondary},splitLine:{lineStyle:{color:gt.border}}},series:[{data:We,type:"line",smooth:!0,lineStyle:{color:gt.primary,width:2},itemStyle:{color:gt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:T("--primary-rgb")?"rgba("+T("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:T("--primary-rgb")?"rgba("+T("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:Ft.length>0?{data:Ft}:void 0}]}),Wt[ae]=la};i?i().then(w).catch(()=>{}):w()}function Sa(){Object.keys(ba).forEach(L=>{const ae=ba[L];if(!(!ae||!ae.el)){if(Wt[L]){try{Wt[L].dispose()}catch{}delete Wt[L]}va(ae.el,L,ae.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Sa));async function Ta(L){F.value=L,o.value=!1,S();try{const ae=await fetch(`/api/calendar/stock/${L.stock_code}?date=${y.value}`);z.value=await ae.json()}catch{z.value={stock:L.stock_code,name:L.stock_name||L.stock_code,total_days:0,history:[]}}r.value=!0,v.value="ai"}async function Qt(){if(!te.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const L=te.value.split(/[,，\s]+/).filter(Oe=>Oe.trim());if(L.length===0)return;I.value=!0,P.value=L.length,R.value=0,H.value="",ee.value={},$.value={},se.value={},L.forEach(Oe=>{ee.value[Oe]="pending",$.value[Oe]=null});const ae={"Content-Type":"application/json"};let de=0,i=0,w=!1;try{const Oe=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:ae,body:JSON.stringify({stock_codes:L})});if(Oe.ok&&Oe.body){w=!0;const We=Oe.body.getReader(),pt=new TextDecoder("utf-8");let gt="",Ft=!1;for(;!Ft;){const{value:la,done:Ke}=await We.read();Ft=Ke,gt+=pt.decode(la||new Uint8Array,{stream:!Ft});let qt;for(;(qt=gt.indexOf(`

`))>=0;){const ma=gt.slice(0,qt);gt=gt.slice(qt+2);const pa=ma.split(`
`).find(Va=>Va.startsWith("data: "));if(!pa)continue;let Et;try{Et=JSON.parse(pa.slice(6))}catch{continue}Et.type==="start"?Et.total&&(P.value=Et.total):Et.type==="item"?(R.value++,H.value=Et.stock_code,Et.success?(ee.value[Et.stock_code]="success",$.value[Et.stock_code]=Et,de++):(ee.value[Et.stock_code]="error",se.value[Et.stock_code]=Et.error||"评估失败",i++)):Et.type==="done"&&(typeof Et.success=="number"&&(de=Et.success),typeof Et.fail=="number"&&(i=Et.fail))}}if(gt.trim()){const la=gt.split(`
`).find(Ke=>Ke.startsWith("data: "));if(la)try{const Ke=JSON.parse(la.slice(6));Ke.type==="item"?(R.value++,H.value=Ke.stock_code,Ke.success?(ee.value[Ke.stock_code]="success",$.value[Ke.stock_code]=Ke,de++):(ee.value[Ke.stock_code]="error",se.value[Ke.stock_code]=Ke.error||"评估失败",i++)):Ke.type==="done"&&(typeof Ke.success=="number"&&(de=Ke.success),typeof Ke.fail=="number"&&(i=Ke.fail))}catch{}}}}catch{w=!1}if(!w){de=0,i=0,R.value=0;for(const Oe of L){H.value=Oe,ee.value[Oe]="running";try{const pt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:ae,body:JSON.stringify({stock_code:Oe.trim(),stock_name:Oe.trim()})})).json();pt.success?(ee.value[Oe]="success",$.value[Oe]=pt.data,de++):(ee.value[Oe]="error",se.value[Oe]=pt.message&&pt.message!=="success"?pt.message:"评估失败",i++)}catch(We){ee.value[Oe]="error",se.value[Oe]="网络错误: "+(We&&We.message?We.message:We),i++}R.value++}}H.value="",await be();const qe=L.length;setTimeout(()=>{i===0?ElementPlus.ElMessage.success(`评估完成 成功 ${de}/${qe}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${de}/${qe} · 失败 ${i}`),I.value=!1},500)}return{quickEvalStock:c,evalStrategy:C,watchlistSort:d,watchlist:O,watchlistCodes:ie,sortedWatchlist:_,getWatchlistScore:f,getLatestScore:Z,addSearchResult:pe,evaluatedCodes:we,klineLoadedCodes:Me,markKlineLoaded:Ve,watchlistSearch:Ee,watchlistResults:_e,watchlistSearching:ne,dataRefreshConfig:ke,dataRefreshReloading:De,dataRefreshSaving:oe,aiHistoryLoading:J,aiHistoryError:Q,aiHistoryTotal:Tt,aiHistoryLoadingMore:q,hasMoreAiHistory:ue,loadMoreAiHistory:Ce,watchlistLoading:Nt,doAiEvaluate:_t,loadAiHistory:be,deleteSingleHistory:Ae,toggleSelectHistory:Ue,clearSelection:V,clearWatchlistSelection:re,batchReevaluateHistory:Be,batchAddToWatchlist:Xe,batchAddToPortfolio:rt,batchRemoveWatchlist:xt,toggleSelectWatchlist:Vt,selectAllHistory:Ct,selectAllWatchlist:Pt,deleteSelectedHistory:mt,loadAutoEvaluateConfig:Dt,saveAutoEvaluateConfig:wt,loadWatchlist:Yt,addToWatchlist:ct,removeFromWatchlist:yt,clearWatchlist:Ht,toggleWatchlist:Je,showStockKline:Xt,preloadingKline:Bt,preloadWatchlistKline:ta,watchlistEvaluate:ha,batchEvaluateWatchlist:aa,batchEvaluateSelected:sa,searchStockForWatchlist:ca,loadDataRefreshConfig:Jt,saveDataRefreshConfig:da,triggerDataReload:N,triggerDataPull:je,dataPullRunning:he,groupedByDate:Pe,aiHistoryByStock:at,groupedByMonth:st,aiHistoryStockCount:Lt,scoreDistribution:Ot,quickEvaluate:Kt,toggleDateExpand:Zt,toggleSelectDate:xa,toggleSelectMonth:ea,toggleStockExpand:ya,toggleSelectStock:ua,registerTrendChart:va,viewAiResult:Ta,doBatchEvaluate:Qt,realtimeQuotes:Ze,realtimeDegraded:Ye,realtimeWsState:it,connectRealtimeQuotes:Mt,disconnectRealtimeQuotes:jt,quoteWarningFor:nt,realtimeQuoteColor:et,realtimePriceText:$e,realtimePctText:bt,realtimeRatioText:St,REALTIME_DEGRADED_TEXT:ge,REALTIME_FALLBACK_TEXT:Te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:m}=Vue,t=e([]),h=e(null),y=e([]),z=e(!1),v=e(!1),r=e(!1),g=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=e(!1),E=e(!1),l=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),D=e(!1),k=e("positions"),S=e(30),M=e(!1),b=e(""),n=e(!1),s=e({dates:[],equity:[],values:[]}),u=m(()=>t.value.length),F=e("metrics"),G=e(!1),W=e(""),Y=e(!1),te=e({metrics:null,rules:[],rebalance:null}),I=m(function(){const d=te.value.metrics;if(!d)return[];const O=function(J){return J==null?"--":Number(J).toFixed(2)+"%"},ie=function(J){return J==null?"--":Number(J).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:O(d.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:O(d.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:O(d.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:O(d.cvar)},{key:"max_drawdown",label:"最大回撤",value:O(d.max_drawdown)},{key:"annual_return",label:"年化收益",value:O(d.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ie(d.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ie(d.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ie(d.calmar_ratio)},{key:"beta",label:"Beta",value:ie(d.beta)}]});async function P(){G.value=!0;try{const d=await(await fetch("/api/portfolio/risk?days=60")).json(),O=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ie=d&&d.success?d.risk:null,J=O&&O.success?O.rules||[]:[],Q=O&&O.success?O.rebalance:null;te.value={metrics:ie,rules:J,rebalance:Q},Y.value=!!(ie&&Object.keys(ie).length>0),W.value=d&&d.note||O&&O.note||""}catch(d){console.warn("[portfolio] 加载风险数据失败:",d),Y.value=!1,W.value="风险数据加载失败"}finally{G.value=!1}}async function R(){z.value=!0,v.value=!1;try{const O=await(await fetch("/api/portfolio")).json();O.success?(t.value=O.positions||[],h.value=O.summary||null):v.value=!0}catch(d){console.warn("[portfolio] 加载持仓失败:",d),v.value=!0}finally{z.value=!1}}async function H(){const d=g.value,O=(d.stock_code||"").trim();if(!O){ElementPlus.ElMessage.warning("请输入股票代码");return}const ie=Number(d.cost_price),J=Number(d.quantity);if(!(ie>0)||!(J>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const _=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:O,stock_name:(d.stock_name||"").trim(),cost_price:ie,quantity:J})})).json();_.success?(ElementPlus.ElMessage.success(_.message||"持仓已更新"),r.value=!1,g.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await R(),K(S.value)):ElementPlus.ElMessage.error(_.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function ee(d){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+d+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ie=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(d),{method:"DELETE"})).json();ie.success?(ElementPlus.ElMessage.success("已删除持仓"),await R(),j(),K(S.value)):ElementPlus.ElMessage.error(ie.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function $(d,O){l.value={stock_code:d,stock_name:O||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},E.value=!0}async function se(){const d=l.value;if(!d.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const O=Number(d.price),ie=Number(d.quantity);if(!(O>0)||!(ie>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}D.value=!0;try{const Q=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:d.stock_code,stock_name:d.stock_name||"",action:d.action,price:O,quantity:ie,trade_date:d.trade_date||"",note:(d.note||"").trim()})})).json();Q.success?(ElementPlus.ElMessage.success(Q.message||"调仓已记录"),E.value=!1,await R(),await j(),K(S.value)):ElementPlus.ElMessage.error(Q.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{D.value=!1}}async function j(){try{const O=await(await fetch("/api/portfolio/trades")).json();O.success&&(y.value=O.trades||[])}catch(d){console.warn("[portfolio] 加载调仓记录失败:",d)}}const B=d=>(getComputedStyle(document.documentElement).getPropertyValue(d)||"").trim();function A(d){if(!d||!d.length)return[];let O=d[0]||0;const ie=[];for(let J=0;J<d.length;J++){const Q=d[J]||0;Q>O&&(O=Q),ie.push(O>0?Math.round((Q-O)/O*1e3)/10:0)}return ie}function p(){const d={primary:B("--qc-primary-600")||"#b8922a",textPrimary:B("--text-primary")||"#1f2937",textSecondary:B("--text-secondary")||"#6b7280",border:B("--border-light")||"#e5e7eb",up:B("--color-rise")||"#E63946",down:B("--color-fall")||"#2E7D32"},O=s.value;return{tooltip:{trigger:"axis",backgroundColor:B("--bg-card")||"#ffffff",borderColor:d.border,textStyle:{color:d.textPrimary},formatter:function(ie){const J=ie[0]?ie[0].dataIndex:-1,Q=O.dates[J]||"",_=O.equity[J],f=O.values[J];let Z=Q||"";return _!=null&&(Z+="<br/>组合净值: "+_),f!=null&&(Z+="<br/>组合市值: "+f),Z}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:O.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:d.textSecondary},axisLine:{lineStyle:{color:d.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:d.textSecondary},splitLine:{lineStyle:{color:d.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:d.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:O.equity,smooth:!0,showSymbol:!1,lineStyle:{color:d.primary,width:2},itemStyle:{color:d.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:B("--primary-rgb")?"rgba("+B("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:B("--primary-rgb")?"rgba("+B("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:A(O.equity),smooth:!0,showSymbol:!1,lineStyle:{color:d.down,width:1.5},itemStyle:{color:d.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function x(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function le(d,O,ie){s.value={dates:d||[],equity:O||[],values:ie||[]},n.value=!!d&&d.length>0,n.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",p,{key:"portfolio-equity"}):x()}async function K(d){M.value=!0,b.value="";const O=Number(d)||S.value||30;S.value=O;try{const J=await(await fetch("/api/portfolio/equity_curve?days="+O)).json();J.success?(b.value=J.note||"",le(J.dates||[],J.equity||[],J.values||[])):(b.value="数据暂不可用",x())}catch(ie){console.warn("[portfolio] 加载收益曲线失败:",ie),b.value="数据暂不可用",x()}finally{M.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function T(d,O){if(d==null||d===""||isNaN(Number(d)))return"--";const ie=Number(d),J=O??2;return(ie>=0?"+":"")+ie.toFixed(J)}function c(d,O){if(d==null||d===""||isNaN(Number(d)))return"--";const ie=Number(d),J=O??2;return(ie>=0?"+":"")+ie.toFixed(J)+"%"}function C(d){if(d==null||d===""||isNaN(Number(d)))return"";const O=Number(d);return O>0?"portfolio-up":O<0?"portfolio-down":""}return{positions:t,summary:h,trades:y,loading:z,loadError:v,showAddForm:r,addForm:g,addSaving:o,tradeFormVisible:E,tradeForm:l,tradeSaving:D,portfolioTab:k,equityDays:S,equityLoading:M,equityNote:b,equityHasData:n,portfolioCount:u,loadPortfolio:R,addPosition:H,removePosition:ee,openTradeForm:$,submitTrade:se,loadTrades:j,loadEquity:K,fmtSigned:T,fmtSignedPct:c,signClass:C,riskTab:F,riskLoading:G,riskNote:W,riskHasData:Y,riskData:te,riskMetricList:I,loadRisk:P}}}})();(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(r,g){var o=Number(r);return isFinite(o)?o:typeof g=="number"?g:0}function e(r){var g=Array.isArray(r)?r:[];if(g.length<2)return null;for(var o=-1/0,E=0,l=0,D=0,k=0,S=0;S<g.length;S++){var M=a(g[S].equity!=null?g[S].equity:g[S].value);M>o&&(o=M,E=S);var b=o>0?(o-M)/o*100:0;b>l&&(l=b,D=E,k=S)}function n(s){return g[s]&&g[s].date?g[s].date:""}return{maxDrawdown:Math.round(l*100)/100,peakIndex:D,troughIndex:k,peakDate:n(D),troughDate:n(k)}}function m(r){for(var g=r||{},o={},E=Object.keys(g).sort(),l=0;l<E.length;l++){var D=E[l],k=String(D).slice(0,4);/^\d{4}$/.test(k)&&(o[k]=(o[k]||0)+a(g[D]))}var S=Object.keys(o).sort();return S.map(function(M){return{year:M,return:Math.round(o[M]*100)/100}})}function t(r){var g=Array.isArray(r)?r:[],o={};g.forEach(function(D){(D.points||[]).forEach(function(k){k&&k.date&&(o[k.date]=1)})});var E=Object.keys(o).sort(),l=g.map(function(D){var k={};return(D.points||[]).forEach(function(S){S&&S.date&&(k[S.date]=a(S.value!=null?S.value:S.equity))}),{name:D.name||"",data:E.map(function(S){return S in k?k[S]:null})}});return{dates:E,series:l}}function h(r){var g=r||{},o=function(l){return a(l)},E=function(l,D){var k=o(l);return isFinite(k)?k.toFixed(D):"--"};return[{key:"total_return",label:"总收益",value:E(g.total_return,2),suffix:"%",dir:o(g.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:E(g.annual_return,2),suffix:"%",dir:o(g.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:E(g.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:E(g.sharpe_ratio,2),suffix:"",dir:o(g.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:E(g.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:E(g.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(g.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:E(g.volatility,2),suffix:"%",dir:""}]}function y(r){var g=r==null?"":String(r);return/[",\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}function z(r){var g=r||{},o=[];o.push("回测指标"),o.push("指标,数值"),(g.metrics||[]).forEach(function(n){o.push(y(n.label)+","+y((n.value||"")+(n.suffix||"")))}),o.push(""),o.push("净值曲线");var E=["日期"].concat((g.series||[]).map(function(n){return n.name}));o.push(E.map(y).join(","));for(var l=g.dates||[],D=g.series||[],k=0;k<l.length;k++){for(var S=[l[k]],M=0;M<D.length;M++){var b=D[M].data&&D[M].data[k];S.push(b??"")}o.push(S.map(y).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(g.trades||[]).forEach(function(n){o.push(y(n.date)+","+y(n.stock)+","+y(n.action)+","+y(n.reason))}),o.join(`
`)}function v(r){return r==="buy"?"买入":r==="sell"?"卖出":r||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:m,buildNavSeries:t,buildMetrics:h,buildBacktestCsv:z,tradeActionText:v}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:m}=Vue,t=window.QuantBacktest||{},h=a||{},y=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],v=(Array.isArray(h.backtestStrategies)&&h.backtestStrategies.length?h.backtestStrategies:y).map(B=>({id:B.id,name:B.name})),r=e(v.length?[v[0].id]:[]),g=e(M()),o=e(1e5),E=e(3e-4),l=e(!1),D=e(!1),k=e(null),S=e("");function M(){const B=new Date,A=new Date;A.setFullYear(A.getFullYear()-1);const p=x=>x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0");return[p(A),p(B)]}function b(B){const A=r.value.indexOf(B);A>=0?r.value.length>1&&r.value.splice(A,1):r.value.push(B)}function n(B){const A=v.find(p=>p.id===B);return A?A.name:B}function s(B){const A=B.summary||B;return{strategy_id:A.strategy_id,start_date:A.start_date,end_date:A.end_date,total_days:A.total_days,total_return:A.total_return,annual_return:A.annual_return,max_drawdown:A.max_drawdown,volatility:A.volatility,sharpe_ratio:A.sharpe_ratio,sortino_ratio:A.sortino_ratio,win_rate:A.win_rate,profit_loss_ratio:A.profit_loss_ratio,avg_positions:A.avg_positions!=null?A.avg_positions:A.avg_positions_per_day,total_trades:A.total_trades,turnover_rate:A.turnover_rate,success:A.success!==!1,message:A.message||"",insample_total_return:A.insample_total_return!=null?A.insample_total_return:null,outsample_total_return:A.outsample_total_return!=null?A.outsample_total_return:null,out_sample_ratio:A.out_sample_ratio!=null?A.out_sample_ratio:.2,overfit_warning:!!A.overfit_warning,overfit_reason:A.overfit_reason||""}}function u(B){return(Array.isArray(B)?B:[]).map(A=>({date:A.date,value:A.equity!=null?A.equity:A.value}))}function F(B,A){const p=s(A),x=u(A.equity_curve),le=A.monthly_returns||{},K=Array.isArray(A.trade_history)?A.trade_history:[],T={id:B,name:n(B),summary:p,equityCurve:x,monthlyReturns:le,trades:K};let c=null;if(l.value){const C=Number(o.value)||1e5;c={name:"现金基准",points:x.map(d=>({date:d.date,value:C}))}}return{success:!0,mode:"single",strategies:[T],primary:T,benchmark:c,period:(p.start_date||"")+" ~ "+(p.end_date||"")}}function G(B,A){const p=A.strategy_results||{},x=B.map(T=>{const c=p[T];if(!c)return null;const C=s(c);return{id:T,name:n(T),summary:C,equityCurve:u(c.equity_curve),monthlyReturns:c.monthly_returns||{},trades:Array.isArray(c.trade_history)?c.trade_history:[]}}).filter(T=>T&&T.summary.success!==!1),le=x.length?x[0]:null;let K=null;return l.value&&(K={name:"等权组合基准",points:u(A.portfolio_equity)}),{success:x.length>0,mode:"multi",strategies:x,primary:le,benchmark:K,period:le?le.summary.start_date+" ~ "+le.summary.end_date:""}}const W=m(()=>{const B=k.value;return!B||!B.primary?[]:t.buildMetrics?t.buildMetrics(B.primary.summary):[]}),Y=m(()=>{const B=k.value;return!B||!B.primary||!B.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(B.primary.monthlyReturns):[]}),te=m(()=>{const B=k.value;return!B||!B.primary?[]:(B.primary.trades||[]).slice().sort((A,p)=>String(p.date||"").localeCompare(String(A.date||"")))}),I=m(()=>{const B=k.value;return!B||!B.strategies||B.strategies.length<2?[]:B.strategies.map(A=>({name:A.name,metrics:t.buildMetrics?t.buildMetrics(A.summary):[]}))}),P=m(()=>{const B=k.value;return!B||!B.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(B.primary.equityCurve):null});async function R(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const A=r.value;if(!A.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const p=g.value,x={start_date:p&&p[0]||void 0,end_date:p&&p[1]||void 0},le={"Content-Type":"application/json"};D.value=!0,k.value=null,S.value="";try{if(A.length===1){const K=Object.assign({},x,{initial_capital:Number(o.value)||1e5,commission_rate:Number(E.value)||3e-4}),T=await fetch("/api/backtest/"+encodeURIComponent(A[0]),{method:"POST",headers:le,body:JSON.stringify(K)});if(!T.ok){const C=await T.json().catch(()=>({}));throw new Error(C.detail||"回测失败")}const c=await T.json();if(!c.success)throw new Error(c.message||"回测失败");k.value=F(A[0],c)}else{const K=await fetch("/api/backtest/multi",{method:"POST",headers:le,body:JSON.stringify(Object.assign({},x,{strategy_ids:A}))});if(!K.ok){const c=await K.json().catch(()=>({}));throw new Error(c.detail||"回测失败")}const T=await K.json();if(!T.success)throw new Error(T.message||"多策略回测失败");if(k.value=G(A,T.data||{}),!k.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(K){S.value=K&&K.message?K.message:"回测失败",ElementPlus.ElMessage.error(S.value)}finally{D.value=!1}}function H(){const B=k.value,A={dates:[],series:[]};if(!B)return A;const p=B.strategies.map(le=>({name:le.name,points:le.equityCurve}));B.benchmark&&B.benchmark.points&&B.benchmark.points.length&&p.push({name:B.benchmark.name,points:B.benchmark.points});const x=t.buildNavSeries?t.buildNavSeries(p):A;return ee(x,B)}function ee(B,A){const p=O=>(getComputedStyle(document.documentElement).getPropertyValue(O)||"").trim(),x={primary:p("--qc-primary-600")||"#b8922a",success:p("--color-success")||"#4CAF50",accent:p("--color-accent")||"#F59E0B",info:p("--color-info")||"#1976d2",ai:p("--color-ai")||"#6366f1",textPrimary:p("--text-primary")||"#1f2937",textSecondary:p("--text-secondary")||"#6b7280",border:p("--border-light")||"#e5e7eb",up:p("--color-rise")||"#E63946",down:p("--color-fall")||"#2E7D32",bg:p("--bg-card")||"#ffffff"},le=[x.primary,x.success,x.accent,x.info,x.ai],T=x.bg.length===7&&parseInt(x.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",c=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(A.primary?A.primary.equityCurve:[]):null,C=c&&c.peakDate&&c.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:x.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+c.maxDrawdown+"%",xAxis:c.peakDate,itemStyle:{color:x.down}},{xAxis:c.troughDate}]]}:void 0,d=B.series.map((O,ie)=>{const J=A.benchmark&&O.name===A.benchmark.name,Q=le[ie%le.length];return{name:O.name,type:"line",data:O.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:J?2:2.4,type:J?"dashed":"solid",color:Q},itemStyle:{color:Q},emphasis:{focus:"series"},...ie===0&&C?{markArea:C}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:T,borderColor:x.border,textStyle:{color:x.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:x.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:B.dates,boundaryGap:!1,axisLine:{lineStyle:{color:x.border}},axisLabel:{color:x.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:x.textSecondary,fontSize:11},splitLine:{lineStyle:{color:x.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:x.border,textStyle:{color:x.textSecondary,fontSize:10}}],series:d}}function $(B){if(!B){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",H,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function se(){const B=k.value;if(!B||!B.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const A=B.strategies.map(d=>({name:d.name,points:d.equityCurve}));B.benchmark&&A.push({name:B.benchmark.name,points:B.benchmark.points});const p=t.buildNavSeries?t.buildNavSeries(A):{dates:[],series:[]},x=t.tradeActionText||(d=>d),le=te.value.map(d=>({date:d.date,stock:d.stock,action:x(d.action),reason:d.reason})),K=t.buildBacktestCsv?t.buildBacktestCsv({metrics:W.value,dates:p.dates,series:p.series,trades:le}):"",T=new Blob(["\uFEFF"+K],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(T),C=document.createElement("a");C.href=c,C.download="backtest-"+B.strategies.map(d=>d.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",C.click(),URL.revokeObjectURL(c),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function j(B,A){return B==null||B===""||isNaN(Number(B))?"--":Number(B).toFixed(A??2)}return{btStrategyOptions:v,btSelectedStrategies:r,toggleBtStrategy:b,btDateRange:g,btCapital:o,btCommissionRate:E,btIncludeBenchmark:l,btRunning:D,btResult:k,btError:S,btMetrics:W,btAnnualReturns:Y,btTrades:te,btStrategyMetricsRows:I,btDrawdownRegion:P,runBacktestWorkbench:R,exportBacktestCSV:se,registerBacktestNavChart:$,btFmtNum:j}}}})();(function(){const{ref:a,computed:e,watch:m,onUnmounted:t}=Vue,h=g=>(getComputedStyle(document.documentElement).getPropertyValue(g)||"").trim(),y=72,z={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},v={stock:"📈 股票",bond:"📜 债券",commodity:"🛢 大宗商品",cash:"💰 现金"},r={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const g=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"🌱",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),o=a({}),E=a(!1),l=a({}),D=a({cycles:[]}),k=a(!1),S=a({autoRefresh:!0,refreshInterval:300}),M=a(""),b=a(""),n=a(!1),s=a("");let u=null;const F={x:0,y:0},G=e(()=>{const _=o.value;return["recession","recovery","overheat","stagflation"].map(Z=>{const pe=_[Z]||{};return{key:Z,name:pe.name||Z,icon:pe.icon||"📊",color:pe.color||h("--text-tertiary")||"#888",bg:pe.bg_color||h("--bg-card")||"#f5f5f5",textColor:pe.color||h("--text-primary")||"#333",tagline:pe.allocation&&r[Z]||""}})}),W=e(()=>{var f,Z,pe,we;const _=g.value.indicators||{};return[{key:"pmi",label:"PMI",value:(f=_.pmi)==null?void 0:f.toFixed(2),color:_.pmi>=50?h("--color-success")||"#43a047":h("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Z=_.gdp_growth)==null?void 0:Z.toFixed(2))+"%",color:h("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((pe=_.cpi)==null?void 0:pe.toFixed(2))+"%",color:_.cpi>1.2?h("--color-danger")||"#E53935":h("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((we=_.m2_growth)==null?void 0:we.toFixed(2))+"%",color:h("--color-success")||"#43a047"}]}),Y=_=>{_=_||{};const f=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Z=()=>h("--color-success")||"#43a047",pe=()=>h("--color-danger")||"#E53935",we=()=>h("--color-warning")||"#FF9800",Me={宽松:Z(),中位:we(),偏低:pe(),高增长:Z(),承压:pe(),不利:pe()};return f.map(Ve=>{const Ee=_[Ve.key]||{},_e=Ee.score||0,ne=Math.min(100,Math.max(5,(_e+2)*25)),ke=_e>=.3?"#66BB6A":_e>=-.3?"#FFB74D":"#EF5350",De=_e>=0?"#66BB6A":"#EF5350";return{key:Ve.key,label:Ve.label,scoreStr:_e.toFixed(2),level:Ee.level||"—",barWidth:ne,barColor:ke,scoreColor:De,color:Me[Ee.level]||"#888888"}})},te=e(()=>Y(g.value.dimension_scores)),I=e(()=>Y(l.value._dimensions)),P=e(()=>{var f;const _=((f=g.value.confidence)==null?void 0:f.level)||"";return _==="高"?"#43a047":_==="中"?"#FF9800":_==="低"?"#E53935":"var(--text-secondary)"}),R=e(()=>{var pe,we,Me,Ve;const _=o.value,f={recovery:0,overheat:1,stagflation:2,recession:3},Z={};for(const[Ee,_e]of Object.entries(_))Z[Ee]={name:_e.name,icon:_e.icon,color:_e.color,lightColor:_e.bg_color,duration:"~"+(((pe=_e.historical_stats)==null?void 0:pe.avg_duration_months)||18)+"个月",order:f[Ee]||0,period:((Me=(we=_e.case_studies)==null?void 0:we[0])==null?void 0:Me.split("：")[0])||"",avgMonths:((Ve=_e.historical_stats)==null?void 0:Ve.avg_duration_months)||18};return Z}),H=e(()=>{var _e,ne;const _=g.value.stage,Z={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[_]||{x:150,y:150},pe=g.value.dimension_scores||{},we=((_e=pe.growth)==null?void 0:_e.score)||0,Me=((ne=pe.inflation)==null?void 0:ne.score)||0,Ve=Math.max(-30,Math.min(30,we*15)),Ee=Math.max(-30,Math.min(30,-Me*15));return{x:Z.x+Ve,y:Z.y+Ee,prevX:F.x,prevY:F.y}}),ee=e(()=>{var pe;const _=Math.min(100,((pe=g.value.timing)==null?void 0:pe.progress_percent)||0),f=g.value.color||"#4CAF50",Z=_>100?"linear-gradient(90deg, "+f+", #FF9800)":f;return{width:_+"%",background:Z}});function $(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[g.value.stage]||0}function se(){var _,f;return((f=(_=g.value)==null?void 0:_.timing)==null?void 0:f.progress_percent)||0}function j(){var _,f;return((f=(_=g.value)==null?void 0:_.timing)==null?void 0:f.duration_months)||0}function B(){var _,f;return((f=(_=g.value)==null?void 0:_.timing)==null?void 0:f.avg_duration_months)||18}function A(_){var we,Me;const f=R.value,Z=((we=f[g.value.stage])==null?void 0:we.order)||0;return(((Me=f[_])==null?void 0:Me.order)||0)<Z}function p(_){return z[_]||_}function x(_){return v[_]||_}function le(_){const f=["#43a047","#f57c00","#1976d2","#757575"];return f[_-1]||f[3]}async function K(){try{const f=await(await fetch("/api/market/merrill-clock/stages")).json();f.success&&f.data&&(o.value=f.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function T(){k.value=!0;try{const f=await(await fetch("/api/market/merrill-clock/timeline")).json();if(f.success&&f.data){const Z=Array.isArray(f.data.cycles)?f.data.cycles.slice().reverse():[];D.value={cycles:Z}}}catch{console.warn("获取美林时钟时间轴失败")}finally{k.value=!1}}async function c(_){await d(_)}async function C(){var _,f;try{const pe=await(await fetch("/api/market/merrill-clock")).json(),we=pe.stage||"recovery",Me=o.value[we]||{};if(g.value={...Me,...pe,stage_cn:pe.stage_cn||Me.stage_cn||"",stage_name:pe.stage_name||Me.name||"",name:pe.name||Me.name||"复苏期"},M.value=new Date().toLocaleTimeString("zh-CN"),s.value&&s.value!==we){const Ve=o.value,Ee=((_=Ve[s.value])==null?void 0:_.name)||s.value,_e=((f=Ve[we])==null?void 0:f.name)||we;ElementPlus.ElMessage({message:"🔔 美林时钟阶段切换："+Ee+" → "+_e,type:"warning",duration:6e3,showClose:!0})}s.value=we}catch(Z){console.error("获取美林时钟失败:",Z);const pe=o.value.recovery||{};g.value={...pe,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function d(_){var Z;E.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",l.value=o.value[_]||o.value.recovery||{};const f=((Z=g.value)==null?void 0:Z.stage)===_;l.value._isCurrent=f,f&&g.value&&(l.value._nextPrediction=g.value.next_stage_prediction,l.value._confidence=g.value.confidence,l.value._stage=g.value.stage,l.value._dimensions=g.value.dimension_scores);try{const we=await(await fetch("/api/market/merrill-clock/stage/"+_)).json();if(we.success&&we.data){const Me={...o.value[_],...we.data};Me._is_current!==void 0&&(Me._isCurrent=Me._is_current),Me._current_timing&&(Me._currentTiming=Me._current_timing),Me._last_period&&(Me._lastPeriod=Me._last_period),l.value._nextPrediction&&(Me._nextPrediction=l.value._nextPrediction),l.value._confidence&&(Me._confidence=l.value._confidence),l.value._stage&&(Me._stage=l.value._stage),l.value._dimensions&&(Me._dimensions=l.value._dimensions),Object.assign(l.value,Me)}}catch(pe){console.warn("获取阶段详情失败:",pe)}}function O(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:S.value.autoRefresh,refreshInterval:S.value.refreshInterval})),S.value.autoRefresh?(clearInterval(u),u=setInterval(C,S.value.refreshInterval*1e3)):clearInterval(u),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ie(){n.value=!0,b.value="";try{const f=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();f.success?(b.value="重评估完成："+(f.stage_name||f.stage),await C(),ElementPlus.ElMessage.success("重评估完成")):(b.value=f.message||"重评估失败",ElementPlus.ElMessage.error(f.message||"重评估失败"))}catch{b.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{n.value=!1}}function J(){const _=localStorage.getItem("merrill_clock_config");if(_)try{const f=JSON.parse(_);S.value={...S.value,...f}}catch{}S.value.autoRefresh&&(u=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),C()},S.value.refreshInterval*1e3))}function Q(){u&&clearInterval(u)}return t(()=>{Q()}),{merrillData:g,merrillStagesConfig:o,showMerrillDetail:E,merrillDetailData:l,merrillTimeline:D,timelineLoading:k,merrillClockConfig:S,merrillClockLastUpdated:M,merrillReevalResult:b,merrillReevalLoading:n,stages:G,indicatorList:W,dimensionScoreList:te,detailDimensionScoreList:I,confidenceColor:P,timelineStages:R,clockPosition:H,merrillProgressStyle:ee,FULL_CYCLE_MONTHS:y,getStageAngle:$,getCycleProgress:se,getCurrentStageMonths:j,getStageTotalMonths:B,isStageCompleted:A,getCharLabel:p,getAssetName:x,getRankColor:le,fetchMerrillStages:K,fetchMerrillClock:C,loadMerrillTimeline:T,showTimelineStage:c,showStageDetail:d,saveMerrillClockConfig:O,doMerrillReevaluate:ie,startAutoRefresh:J,stopAutoRefresh:Q}}})();(function(){function a(y){return getComputedStyle(document.documentElement).getPropertyValue(y).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const m=[];function t(y){typeof y=="function"&&m.push(y)}function h(){m.slice().forEach(function(y){try{y()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:t,refreshAllCharts:h,init(){return{getEChartsTheme:e,registerChart:t,refreshAllCharts:h}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const m=e("qcState");try{const y=localStorage.getItem("quant_sidebar_collapsed");y!==null&&m.sidebarCollapsed&&(m.sidebarCollapsed.value=y==="1")}catch{}if(!m)return{};const t=async y=>{if(window.__quantGoPage){await window.__quantGoPage(y.key,y.subPages[0]||"");return}m.currentPage.value=y.key,m.currentSubPage.value=y.subPages[0]||""},h=()=>{m.sidebarCollapsed.value=!m.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",m.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:m.menus,currentPage:m.currentPage,sidebarCollapsed:m.sidebarCollapsed,navigate:t,toggle:h,sanitizeHtml:m.sanitizeHtml,keyClick:m.keyClick,t:m.t}}}})();const _a={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,m={"layout-dashboard":xv,calendar:_v,bot:kv,"flask-conical":wv,zap:bv,settings:yv,"chevron-down":hv,"chevron-right":gv,"chevron-left":fv,menu:pv,search:mv,bell:vv,sun:uv,moon:dv,user:cv,"user-round":rv,home:ov,x:nv,database:iv,activity:lv,clock:sv,"bar-chart-3":av,shield:tv,"hard-drive":ev,"file-text":Zu,users:Xu,cpu:$u,"pie-chart":Qu,info:Ju,"log-out":Yu,palette:Gu,languages:Uu,refresh:Wu,download:Ku,"external-link":Bu,command:Hu,sparkles:Fu,"trending-up":Vu,"trending-down":ju,"circle-dot":Ou,check:Nu,"alert-triangle":Iu,loader:Lu,"arrow-left":Au,"arrow-right":zu,eye:Ru,"eye-off":Du,lock:Pu,"sliders-horizontal":Tu,play:Mu,history:Eu,layers:qu,"line-chart":Cu,target:Su,"search-check":xu,star:_u,"message-circle":ku,"calendar-days":wu,"calendar-range":bu,"calendar-check":yu,brain:hu,lightbulb:gu,"octagon-x":fu,flag:pu,package:mu,"clipboard-list":vu,pin:uu,"radio-tower":du,gauge:cu,landmark:ru,"candlestick-chart":ou,wallet:nu,"badge-check":iu,key:lu,factory:su,trophy:au,rocket:tu,flame:eu,"map-pin":Zd,"scroll-text":Xd,"book-open":$d,dna:Qd,"bar-chart":Jd,plus:Yd,"star-off":Gd,upload:Ud,gem:Wd,"folder-open":Kd,link:Bd,save:Hd,"trash-2":Fd,pause:Vd,"help-circle":jd,"play-circle":Od,pencil:Nd,folder:Id,code:Ld},t=()=>m[e.name]||m["circle-dot"];return(h,y)=>(ve(),oa(_d(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ma=(a,e)=>{const m=a.__vccOpts||a;for(const[t,h]of e)m[t]=h;return m},Sv={name:"qc-sidebar",components:{AppIcon:_a},setup(){const a=Ea("qcState");if(!a)return{};const e=lt(()=>a.menus&&a.menus.value||[]),m=lt(()=>a.currentPage&&a.currentPage.value||""),t=lt(()=>a.navMode&&a.navMode.value||"subnav"),h=lt({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:b=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=b)}}),y=zt({}),z={research:"量化投研",platform:"平台管理"},v=["research","platform"],r=b=>m.value===b.key,g=(b,n)=>m.value===b.key&&a.currentSubPage&&a.currentSubPage.value===n,o=b=>Array.isArray(b.subPages)&&b.subPages.length>1,E=(b,n)=>a.subPageNames&&a.subPageNames[n]||n;function l(b){!o(b)||h.value||(y.value[b.key]=!y.value[b.key])}function D(){e.value.forEach(b=>{y.value[b.key]===void 0&&(y.value[b.key]=r(b))})}async function k(b,n){const s=n||b.subPages&&b.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(b.key,s):(a.currentPage.value=b.key,a.currentSubPage&&(a.currentSubPage.value=s)),a.navigateTo&&a.navigateTo(b.key,s)}function S(){h.value=!h.value;try{localStorage.setItem("sidebar_collapsed",h.value?"1":"0")}catch{}}function M(b){if(b.ctrlKey&&b.key.toLowerCase()==="b"&&(b.preventDefault(),S()),!b.ctrlKey&&!b.metaKey&&!b.altKey&&(b.key==="ArrowDown"||b.key==="ArrowUp")){const n=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),s=n.indexOf(document.activeElement);if(s>=0){b.preventDefault();const u=n[(s+(b.key==="ArrowDown"?1:n.length-1))%n.length];u&&u.focus()}}}return ja(()=>{D(),document.addEventListener("keydown",M)}),ls(()=>document.removeEventListener("keydown",M)),{state:a,menus:e,currentPage:m,navMode:t,sidebarCollapsed:h,expandedMenus:y,GROUP_LABELS:z,GROUPS:v,isActive:r,isChildActive:g,hasChildren:o,subLabel:E,toggleSubmenu:l,navigate:k,toggleCollapse:S}}},Cv={class:"qc-sidebar-logo"},qv={key:0,class:"qc-logo-text"},Ev={class:"qc-sidebar-nav"},Mv={key:0,class:"qc-nav-group"},Tv={key:0,class:"qc-nav-group-label"},Pv=["href","aria-current","onClick"],Dv={key:0,class:"qc-sidebar-label"},Rv={key:1,class:"qc-nav-badge"},zv=["aria-expanded","aria-controls","onClick"],Av=["id"],Lv=["href","aria-current","onClick"],Iv={class:"qc-sidebar-child-label"},Nv={class:"qc-sidebar-footer"},Ov=["aria-expanded","aria-label","title"];function jv(a,e,m,t,h,y){const z=Gt("AppIcon"),v=Gt("el-tooltip");return ve(),ye("nav",{class:ut(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Se("div",Cv,[e[1]||(e[1]=xd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?He("",!0):(ve(),ye("span",qv,Fe(t.state.t("login.title")),1))]),Se("div",Ev,[(ve(!0),ye(ot,null,kt(t.GROUPS,r=>(ve(),ye(ot,{key:r},[t.menus.some(g=>g.group===r)?(ve(),ye("div",Mv,[t.sidebarCollapsed?He("",!0):(ve(),ye("span",Tv,Fe(t.GROUP_LABELS[r]),1)),(ve(!0),ye(ot,null,kt(t.menus.filter(g=>g.group===r),g=>(ve(),ye(ot,{key:g.key},[Se("div",{class:ut(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(g),"is-child-open":t.navMode==="tree"&&t.expandedMenus[g.key]}])},[dt(v,{content:g.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:na(()=>[Se("a",{class:ut(["qc-sidebar-link",{"is-active":t.isActive(g)}]),href:"#"+g.key,"aria-current":t.isActive(g)?"page":null,onClick:At(o=>t.navigate(g),["prevent"])},[dt(z,{name:g.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?He("",!0):(ve(),ye("span",Dv,Fe(g.name),1)),!t.sidebarCollapsed&&g.badge?(ve(),ye("span",Rv,Fe(g.badge),1)):He("",!0)],10,Pv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)?(ve(),ye("button",{key:0,class:ut(["qc-sidebar-chevron",{"is-open":t.expandedMenus[g.key]}]),"aria-expanded":!!t.expandedMenus[g.key],"aria-controls":"submenu-"+g.key,"aria-label":"展开子菜单",onClick:o=>t.toggleSubmenu(g)},[dt(z,{name:"chevron-down",size:14})],10,zv)):He("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)&&t.expandedMenus[g.key]?(ve(),ye("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+g.key},[(ve(!0),ye(ot,null,kt(g.subPages,o=>(ve(),ye("a",{key:o,class:ut(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(g,o)}]),href:"#"+g.key+"-"+o,"aria-current":t.isChildActive(g,o)?"page":null,onClick:At(E=>t.navigate(g,o),["prevent"])},[Se("span",Iv,Fe(t.subLabel(g,o)),1)],10,Lv))),128))],8,Av)):He("",!0)],64))),128))])):He("",!0)],64))),128))]),Se("div",Nv,[Se("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...r)=>t.toggleCollapse&&t.toggleCollapse(...r))},[dt(z,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,Ov)])],2)}const Vv=Ma(Sv,[["render",jv]]),Fv={name:"qc-header",components:{AppIcon:_a},setup(){const a=Ea("qcState");if(!a)return{};const e=zt(!1),m=lt(()=>a.currentUser&&a.currentUser.value||null),t=lt(()=>a.navMode&&a.navMode.value||"subnav"),h=lt(()=>{const _=a.currentPage&&a.currentPage.value,f=(a.menus&&a.menus.value||[]).find(Z=>Z.key===_);return!!(f&&f.subPages&&f.subPages.length)}),y=lt(()=>{const _=a.currentPage&&a.currentPage.value,f=a.currentPageName&&a.currentPageName.value;if(f)return f;const Z=(a.menus&&a.menus.value||[]).find(pe=>pe.key===_);return Z&&Z.name||_||""}),z=lt(()=>{const _=a.currentSubPage&&a.currentSubPage.value;return _&&a.subPageNames&&a.subPageNames[_]||_||""}),v=zt(typeof window<"u"?window.innerWidth<768:!1);function r(){v.value=window.innerWidth<768}ja(()=>window.addEventListener("resize",r)),ls(()=>window.removeEventListener("resize",r));const g=zt(!1),o=lt(()=>{const _=a.currentSubPage&&a.currentSubPage.value;return _&&a.subPageNames&&a.subPageNames[_]||_||""}),E=lt(()=>{const _=a.currentPage&&a.currentPage.value,f=(a.menus&&a.menus.value||[]).find(Z=>Z.key===_);return(f&&f.subPages||[]).map(Z=>({key:Z,label:a.subPageNames&&a.subPageNames[Z]||Z}))});function l(){g.value=!g.value}function D(){g.value=!1}function k(_){g.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,_)}const S=lt(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),M=zt(!1),b=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],n=lt(()=>{const _=b.find(f=>f.value===t.value);return _&&_.label||t.value});function s(){M.value=!M.value}function u(){M.value=!1}function F(_){M.value=!1,a.setNavMode&&a.setNavMode(_)}const G=lt({get:()=>a.searchQuery&&a.searchQuery.value||"",set:_=>{a.searchQuery&&(a.searchQuery.value=_)}}),W=zt(!1),Y=zt([]),te=zt(!1),I=zt(!1);function P(){const _=localStorage.getItem("quant_token")||"";return _?{Authorization:"Bearer "+_,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function R(){te.value=!0,I.value=!1;try{const f=await(await fetch("/api/alerts/history?limit=8",{headers:P()})).json();f&&f.success?Y.value=f.history||[]:Y.value=[]}catch{I.value=!0,Y.value=[]}finally{te.value=!1}}function H(){W.value=!W.value,W.value&&R()}function ee(){W.value=!1}function $(){W.value=!1,a.activateTab&&a.activateTab("system","notification")}const se=zt(!1),j=a.themeHues||[45,220,0,140,270,320],B=lt(()=>a.themeHue&&a.themeHue.value||45),A=lt(()=>a.themeMode&&a.themeMode.value||"system");function p(_){return a.hueColor?a.hueColor(_):"hsl("+_+", 75%, 42%)"}function x(_){return a.hueName?a.hueName(_):String(_)}function le(){se.value=!se.value}function K(){se.value=!1}function T(_){a.changeThemeMode&&a.changeThemeMode(_)}function c(_){a.changeThemeHue&&a.changeThemeHue(_)}function C(){a.changeThemeMode&&a.changeThemeMode(S.value?"light":"dark")}function d(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function O(){e.value=!e.value}function ie(){e.value=!1}function J(_){return()=>{ie(),_&&_()}}function Q(){ie(),a.handleLogout&&a.handleLogout()}return{state:a,showUserMenu:e,currentUser:m,isDark:S,searchQuery:G,navMode:t,crumbRoot:y,crumbSub:z,hasToptabs:h,toggleThemeQuick:C,toggleSidebar:d,openUserMenu:O,closeUserMenu:ie,menuItem:J,handleLogout:Q,openBellMenu:W,notifItems:Y,notifLoading:te,notifError:I,toggleBell:H,closeBell:ee,goNotificationCenter:$,openThemeMenu:se,themeHues:j,themeHue:B,themeMode:A,hueColor:p,hueName:x,toggleThemeMenu:le,closeThemeMenu:K,pickThemeMode:T,pickThemeHue:c,openNavModeMenu:M,NAV_MODES:b,navModeLabel:n,toggleNavModeMenu:s,closeNavModeMenu:u,pickNavMode:F,isMobile:v,openSubnavPicker:g,currentSubLabel:o,subnavOptions:E,toggleSubnavPicker:l,closeSubnavPicker:D,pickSubnav:k}}},Hv={class:"qc-header"},Bv={class:"qc-header-left"},Kv=["aria-label"],Wv={key:0,class:"qc-header-subnav"},Uv=["aria-expanded"],Gv={class:"qc-subnav-picker-label"},Yv={key:0,class:"qc-subnav-picker-menu",role:"menu"},Jv=["onClick"],Qv={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},$v={class:"qc-crumb qc-crumb-root"},Xv={class:"qc-crumb qc-crumb-sub"},Zv={key:1,class:"qc-crumb qc-crumb-root"},em={class:"qc-header-center"},tm={key:0,class:"qc-search-sublabel"},am={class:"qc-header-right"},sm={class:"qc-hdr-pop"},lm=["aria-expanded"],im={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},nm={key:0,class:"qc-bell-state"},om={key:1,class:"qc-bell-state"},rm={key:2,class:"qc-bell-state"},cm={key:3,class:"qc-bell-list"},dm={class:"qc-bell-item-title"},um={class:"qc-bell-item-meta"},vm={key:0},mm={class:"qc-bell-item-time"},pm={class:"qc-hdr-pop"},fm=["aria-expanded"],gm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},hm={class:"qc-theme-modes"},ym=["onClick"],bm={class:"qc-theme-swatches"},wm=["title","aria-label","onClick"],km={key:0,class:"qc-theme-swatch-check"},_m={class:"qc-theme-custom-label"},xm={key:0,class:"qc-navmode-switch"},Sm=["aria-label","title","aria-expanded"],Cm={key:0,class:"qc-navmode-menu",role:"menu"},qm=["onClick","onKeydown"],Em={class:"qc-navmode-item-main"},Mm={class:"qc-user-menu"},Tm=["aria-label","aria-expanded"],Pm={key:0,class:"qc-user-dropdown",role:"menu"},Dm={class:"qc-user-dropdown-header"},Rm={class:"qc-user-dropdown-name"},zm={key:0,class:"qc-user-dropdown-chip"};function Am(a,e,m,t,h,y){var E,l,D,k,S,M,b;const z=Gt("AppIcon"),v=Gt("qc-top-tabs"),r=Gt("el-autocomplete"),g=Gt("el-slider"),o=Sd("click-outside");return ve(),ye("header",Hv,[Se("div",Bv,[Se("button",{class:"qc-icon-btn","aria-label":(E=t.state.sidebarCollapsed)!=null&&E.value?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...n)=>t.toggleSidebar&&t.toggleSidebar(...n))},[dt(z,{name:"menu",size:20})],8,Kv),t.isMobile?Da((ve(),ye("div",Wv,[Se("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[1]||(e[1]=(...n)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...n))},[Se("span",Gv,Fe(t.currentSubLabel||"二级"),1),dt(z,{name:"chevron-down",size:14})],8,Uv),t.openSubnavPicker?(ve(),ye("div",Yv,[(ve(!0),ye(ot,null,kt(t.subnavOptions,n=>(ve(),ye("div",{key:n.key,class:ut(["qc-subnav-picker-item",{"is-active":n.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:s=>t.pickSubnav(n.key)},Fe(n.label),11,Jv))),128))])):He("",!0)])),[[o,t.closeSubnavPicker]]):He("",!0),t.navMode==="tree"&&!t.isMobile?(ve(),ye("div",Qv,[Se("span",$v,Fe(t.crumbRoot),1),t.crumbSub?(ve(),ye(ot,{key:0},[e[14]||(e[14]=Se("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Se("span",Xv,Fe(t.crumbSub),1)],64)):He("",!0)])):He("",!0),t.navMode==="toptab"&&!t.isMobile?(ve(),ye(ot,{key:2},[t.hasToptabs?(ve(),oa(v,{key:0})):(ve(),ye("span",Zv,Fe(t.crumbRoot),1))],64)):He("",!0)]),Se("div",em,[dt(r,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[2]||(e[2]=n=>t.searchQuery=n),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:na(()=>[dt(z,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:na(()=>[...e[15]||(e[15]=[Se("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:na(n=>{var s,u,F,G,W;return[Se("span",null,Fe((s=n==null?void 0:n.item)==null?void 0:s.icon)+" "+Fe(((u=n==null?void 0:n.item)==null?void 0:u.label)||((F=n==null?void 0:n.item)==null?void 0:F.name)),1),(G=n==null?void 0:n.item)!=null&&G.subLabel?(ve(),ye("span",tm,Fe((W=n==null?void 0:n.item)==null?void 0:W.subLabel),1)):He("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Se("div",am,[Da((ve(),ye("div",sm,[Se("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[3]||(e[3]=(...n)=>t.toggleBell&&t.toggleBell(...n))},[dt(z,{name:"bell",size:20})],8,lm),t.openBellMenu?(ve(),ye("div",im,[e[16]||(e[16]=Se("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(ve(),ye("div",nm,"加载中...")):t.notifError?(ve(),ye("div",om,"加载失败")):t.notifItems.length?(ve(),ye("div",cm,[(ve(!0),ye(ot,null,kt(t.notifItems,(n,s)=>(ve(),ye("div",{key:n.id||s,class:ut(["qc-bell-item",{"is-fail":n.ok===0}])},[Se("div",dm,Fe(n.title||n.event_type||"事件"),1),Se("div",um,[ka(Fe(n.channel||""),1),n.recipient?(ve(),ye("span",vm," · "+Fe(n.recipient),1)):He("",!0),Se("span",mm,Fe(n.created_at||""),1)])],2))),128))])):(ve(),ye("div",rm,"暂无通知")),Se("button",{class:"qc-bell-footer",onClick:e[4]||(e[4]=(...n)=>t.goNotificationCenter&&t.goNotificationCenter(...n))},"前往通知中心 →")])):He("",!0)])),[[o,t.closeBell]]),Da((ve(),ye("div",pm,[Se("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[5]||(e[5]=(...n)=>t.toggleThemeMenu&&t.toggleThemeMenu(...n))},[dt(z,{name:"palette",size:20})],8,fm),t.openThemeMenu?(ve(),ye("div",gm,[e[17]||(e[17]=Se("div",{class:"qc-theme-section-label"},"外观模式",-1)),Se("div",hm,[(ve(),ye(ot,null,kt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],n=>Se("button",{key:n.k,class:ut(["qc-theme-mode",{"is-active":t.themeMode===n.k}]),onClick:s=>t.pickThemeMode(n.k)},Fe(n.n),11,ym)),64))]),e[18]||(e[18]=Se("div",{class:"qc-theme-section-label"},"主题色",-1)),Se("div",bm,[(ve(!0),ye(ot,null,kt(t.themeHues,n=>(ve(),ye("button",{key:n,class:ut(["qc-theme-swatch",{"is-active":t.themeHue===n}]),style:Cd({background:t.hueColor(n)}),title:t.hueName(n),"aria-label":t.hueName(n),onClick:s=>t.pickThemeHue(n)},[t.themeHue===n?(ve(),ye("span",km,"✓")):He("",!0)],14,wm))),128))]),dt(g,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Se("div",_m,"自定义 "+Fe(t.themeHue)+"°",1)])):He("",!0)])),[[o,t.closeThemeMenu]]),t.isMobile?He("",!0):Da((ve(),ye("div",xm,[Se("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[6]||(e[6]=(...n)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...n))},[dt(z,{name:"layers",size:20})],8,Sm),t.openNavModeMenu?(ve(),ye("div",Cm,[(ve(!0),ye(ot,null,kt(t.NAV_MODES,n=>(ve(),ye("div",{key:n.value,class:ut(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===n.value}]),role:"menuitem",tabindex:"0",onClick:s=>t.pickNavMode(n.value),onKeydown:[ia(At(s=>t.pickNavMode(n.value),["prevent"]),["enter"]),ia(At(s=>t.pickNavMode(n.value),["prevent"]),["space"])]},[Se("div",Em,[Se("span",null,Fe(n.label),1),t.navMode===n.value?(ve(),oa(z,{key:0,name:"check",size:14})):He("",!0)])],42,qm))),128))])):He("",!0)])),[[o,t.closeNavModeMenu]]),Da((ve(),ye("div",Mm,[Se("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((l=t.currentUser)==null?void 0:l.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[7]||(e[7]=(...n)=>t.openUserMenu&&t.openUserMenu(...n))},Fe((((D=t.currentUser)==null?void 0:D.username)||"A").charAt(0).toUpperCase()),9,Tm),t.showUserMenu?(ve(),ye("div",Pm,[Se("div",Dm,[Se("span",Rm,Fe((k=t.currentUser)==null?void 0:k.username),1),((S=t.currentUser)==null?void 0:S.role)==="guest"?(ve(),ye("span",zm,"访客")):He("",!0)]),((M=t.currentUser)==null?void 0:M.role)==="admin"?(ve(),ye("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[8]||(e[8]=n=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[9]||(e[9]=ia(At(n=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[dt(z,{name:"settings",size:16}),e[19]||(e[19]=ka(" 重新运行初始化向导 ",-1))],32)):He("",!0),((b=t.currentUser)==null?void 0:b.role)!=="guest"?(ve(),ye("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[10]||(e[10]=n=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[11]||(e[11]=ia(At(n=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[dt(z,{name:"lock",size:16}),e[20]||(e[20]=ka(" 修改密码 ",-1))],32)):He("",!0),e[22]||(e[22]=Se("div",{class:"qc-user-dropdown-divider"},null,-1)),Se("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[12]||(e[12]=(...n)=>t.handleLogout&&t.handleLogout(...n)),onKeydown:e[13]||(e[13]=ia(At((...n)=>t.handleLogout&&t.handleLogout(...n),["prevent"]),["enter"]))},[dt(z,{name:"log-out",size:16}),e[21]||(e[21]=ka(" 退出登录 ",-1))],32)])):He("",!0)])),[[o,t.closeUserMenu]])])])}const Lm=Ma(Fv,[["render",Am]]),Im=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],Nm={name:"qc-subnav",components:{AppIcon:_a},setup(){const a=Ea("qcState");if(!a)return{};const e=lt(()=>a.currentPage&&a.currentPage.value||""),m=lt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=lt(()=>a.navMode&&a.navMode.value||"subnav"),h=zt({}),y=lt(()=>a.menus&&a.menus.value||[]),z=lt(()=>y.value.find(b=>b.key===e.value)||null),v=lt(()=>z.value&&z.value.subPages||[]),r=lt(()=>a.currentPageName&&a.currentPageName.value||e.value),g=b=>a.subPageNames&&a.subPageNames[b]||b,o=b=>m.value===b;function E(b){a.openTab?a.openTab(e.value,b):a.currentSubPage&&(a.currentSubPage.value=b);try{localStorage.setItem("quant_last_subpage",b)}catch{}}function l(b){a.openTab?a.openTab(e.value,b.key):a.currentSubPage&&(a.currentSubPage.value=b.key);try{localStorage.setItem("quant_last_subpage",b.key)}catch{}}function D(b){h.value[b]=!h.value[b]}const k={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}};return{state:a,currentPage:e,currentSubPage:m,navMode:t,subPages:v,currentMenu:z,collapsedGroups:h,pageTitle:r,subLabel:g,isSubActive:o,goSub:E,goSystemItem:l,toggleGroup:D,SYSTEM_GROUPS:Im,subIcon:(b,n)=>k[b]&&k[b][n]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},Om={key:0,class:"qc-subnav-column","aria-label":"二级导航"},jm={class:"qc-subnav-column-header"},Vm={class:"qc-subnav-current-label"},Fm={class:"qc-subnav-column-body"},Hm=["onClick"],Bm=["href","onClick"],Km={class:"qc-subnav-group-label"},Wm=["href","onClick"],Um=["href","onClick"];function Gm(a,e,m,t,h,y){const z=Gt("AppIcon");return t.navMode==="subnav"?(ve(),ye("aside",Om,[Se("div",jm,[Se("span",Vm,Fe(t.pageTitle),1)]),Se("div",Fm,[t.currentPage==="system"?(ve(!0),ye(ot,{key:0},kt(t.SYSTEM_GROUPS,v=>(ve(),ye("div",{key:v.label,class:"qc-subnav-group"},[Se("div",{class:"qc-subnav-group-label",onClick:r=>t.toggleGroup(v.label)},[Se("span",null,Fe(v.label),1),dt(z,{name:"chevron-down",size:12,class:ut({"is-open":!t.collapsedGroups[v.label]})},null,8,["class"])],8,Hm),t.collapsedGroups[v.label]?He("",!0):(ve(!0),ye(ot,{key:0},kt(v.items,r=>(ve(),ye("a",{key:r.key,class:ut(["qc-subnav-item",{"is-active":t.isSubActive(r.key)}]),href:"#"+r.key,onClick:At(g=>t.goSystemItem(r),["prevent"])},[dt(z,{name:r.icon,size:16},null,8,["name"]),Se("span",null,Fe(r.label),1)],10,Bm))),128))]))),128)):t.currentPage==="shortterm"?(ve(!0),ye(ot,{key:1},kt(t.SHORTTERM_GROUPS,v=>(ve(),ye("div",{key:v.label,class:"qc-subnav-group"},[Se("div",Km,[Se("span",null,Fe(v.label),1)]),(ve(!0),ye(ot,null,kt(v.items,r=>(ve(),ye("a",{key:r,class:ut(["qc-subnav-item",{"is-active":t.isSubActive(r)}]),href:"#"+t.currentPage+"/"+r,onClick:At(g=>t.goSub(r),["prevent"])},[dt(z,{name:t.subIcon(t.currentPage,r),size:16},null,8,["name"]),Se("span",null,Fe(t.subLabel(r)),1)],10,Wm))),128))]))),128)):(ve(!0),ye(ot,{key:2},kt(t.subPages,v=>(ve(),ye("a",{key:v,class:ut(["qc-subnav-item",{"is-active":t.isSubActive(v)}]),href:"#"+t.currentPage+"/"+v,onClick:At(r=>t.goSub(v),["prevent"])},[dt(z,{name:t.subIcon(t.currentPage,v),size:16},null,8,["name"]),Se("span",null,Fe(t.subLabel(v)),1)],10,Um))),128))])])):He("",!0)}const Ym=Ma(Nm,[["render",Gm]]),Jm=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],Qm={name:"qc-mobile-nav",components:{AppIcon:_a},setup(){const a=Ea("qcState");if(!a)return{};const e=zt(!1),m=zt(null),t=zt({}),h=lt(()=>a.menus&&a.menus.value||[]),y=lt(()=>a.currentPage&&a.currentPage.value||""),z={research:"量化投研",platform:"平台管理"},v=["research","platform"];function r(n){return Array.isArray(n.subPages)&&n.subPages.length>0}function g(n){r(n)&&(t.value[n.key]=!t.value[n.key])}function o(n,s){return y.value===n.key&&a.currentSubPage&&a.currentSubPage.value===s}function E(n){return a.subPageNames&&a.subPageNames[n]||n}async function l(n){const s=h.value.find(F=>F.key===n.key),u=s&&s.subPages&&s.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(n.key,u):(a.currentPage.value=n.key,a.currentSubPage&&(a.currentSubPage.value=u)),a.navigateTo&&a.navigateTo(n.key,u)}function D(n,s){e.value=!1;const u=s||n.subPages&&n.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(n.key,u):(a.currentPage.value=n.key,a.currentSubPage&&(a.currentSubPage.value=u)),a.navigateTo&&a.navigateTo(n.key,u)}function k(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function S(){e.value=!1;const n=document.querySelector(".qc-header .qc-icon-btn");n&&n.focus()}function M(n){n.detail&&n.detail.open&&k()}function b(n){e.value&&n.key==="Escape"&&S()}return ja(()=>{window.addEventListener("qc:drawer",M),document.addEventListener("keydown",b)}),ls(()=>{window.removeEventListener("qc:drawer",M),document.removeEventListener("keydown",b)}),{state:a,TABS:Jm,menus:h,currentPage:y,drawerOpen:e,drawerFocusRef:m,drawerExpanded:t,GROUP_LABELS:z,GROUPS:v,hasSub:r,toggleDrawerMenu:g,isDrawerSubActive:o,subLabel:E,goTab:l,goMenu:D,openDrawer:k,closeDrawer:S}}},$m={class:"qc-mobile-nav","aria-label":"移动端底部导航"},Xm=["aria-current","onClick"],Zm={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},ep={class:"qc-drawer-header"},tp={class:"qc-drawer-brand"},ap={class:"qc-drawer-body"},sp={key:0},lp={class:"qc-nav-group-label"},ip=["href","aria-current","onClick"],np={class:"qc-sidebar-label"},op=["aria-expanded","onClick"],rp={key:0,class:"qc-drawer-children"},cp=["href","onClick"],dp={class:"qc-drawer-footer"},up=["title"];function vp(a,e,m,t,h,y){var v,r;const z=Gt("AppIcon");return ve(),ye(ot,null,[Se("nav",$m,[(ve(!0),ye(ot,null,kt(t.TABS,g=>(ve(),ye("button",{key:g.key,class:ut(["qc-mobile-tab",{"is-active":t.currentPage===g.key}]),"aria-current":t.currentPage===g.key?"page":null,onClick:o=>t.goTab(g)},[dt(z,{name:g.icon,size:22},null,8,["name"]),Se("span",null,Fe(g.label),1)],10,Xm))),128))]),(ve(),oa(qd,{to:"body"},[t.drawerOpen?(ve(),ye("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))})):He("",!0),t.drawerOpen?(ve(),ye("div",Zm,[Se("div",ep,[Se("div",tp,[e[4]||(e[4]=Se("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Se("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Se("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Se("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Se("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Se("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Se("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Se("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Se("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Se("span",null,Fe(t.state.t("login.title")),1)]),Se("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))},[dt(z,{name:"x",size:18})])]),Se("div",ap,[(ve(!0),ye(ot,null,kt(t.GROUPS,g=>(ve(),ye(ot,{key:g},[t.menus.some(o=>o.group===g)?(ve(),ye("div",sp,[Se("div",lp,Fe(t.GROUP_LABELS[g]),1),(ve(!0),ye(ot,null,kt(t.menus.filter(o=>o.group===g),o=>(ve(),ye("div",{key:o.key,class:"qc-drawer-menu"},[Se("div",{class:ut(["qc-drawer-menu-row",{"is-active":t.currentPage===o.key}])},[Se("a",{class:ut(["qc-sidebar-item",{"is-active":t.currentPage===o.key}]),href:"#"+o.key,"aria-current":t.currentPage===o.key?"page":null,onClick:At(E=>t.hasSub(o)?t.toggleDrawerMenu(o):t.goMenu(o),["prevent"])},[dt(z,{name:o.iconName||"",size:18},null,8,["name"]),Se("span",np,Fe(o.name),1)],10,ip),t.hasSub(o)?(ve(),ye("button",{key:0,class:ut(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[o.key]}]),"aria-expanded":!!t.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:E=>t.toggleDrawerMenu(o)},[dt(z,{name:"chevron-down",size:14})],10,op)):He("",!0)],2),t.drawerExpanded[o.key]?(ve(),ye("div",rp,[(ve(!0),ye(ot,null,kt(o.subPages,E=>(ve(),ye("a",{key:E,class:ut(["qc-subnav-item",{"is-active":t.isDrawerSubActive(o,E)}]),href:"#"+o.key+"/"+E,onClick:At(l=>t.goMenu(o,E),["prevent"])},[Se("span",null,Fe(t.subLabel(E)),1)],10,cp))),128))])):He("",!0)]))),128))])):He("",!0)],64))),128))]),Se("div",dp,[Se("button",{class:"qc-icon-btn",title:((v=t.state.currentTheme)==null?void 0:v.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=g=>{var o;return t.state.changeThemeMode&&t.state.changeThemeMode(((o=t.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[dt(z,{name:((r=t.state.currentTheme)==null?void 0:r.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,up),Se("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=g=>t.state.handleLogout&&t.state.handleLogout())},[dt(z,{name:"log-out",size:18})])])])):He("",!0)]))],64)}const mp=Ma(Qm,[["render",vp]]),pp={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:m}){const t=Ea("qcState");function h(o){e("select",o)}function y(o){const E=o.strategy_names||o.strategies||[],l=E.slice(0,3),D=E.length>3?E.length-3:0,k=l.map(S=>({text:S,more:!1}));return D&&k.push({text:"+"+D,more:!0}),k}function z(o){const E=Number(o);return isFinite(E)?E.toFixed(2):"—"}function v(o){const E=Number(o);return isFinite(E)?(E>0?"+":"")+E.toFixed(2)+"%":"—"}function r(o){const E=Number(o.consensus_level);return isFinite(E)?Math.round(E*100):0}function g(o){const E=Number(o&&o.consensus_level);return isFinite(E)&&E>0}return{state:t,slots:m,select:h,displayTags:y,fmtPrice:z,fmtChange:v,pctOf:r,hasConsensus:g}}},fp={class:"qc-stock-list"},gp=["data-copy-code","aria-label","onClick","onKeydown"],hp={key:0,class:"qc-stock-rank"},yp={class:"qc-stock-info"},bp={class:"qc-stock-code"},wp={class:"qc-stock-code-num"},kp={key:0,class:"qc-stock-status is-new"},_p={key:1,class:"qc-stock-status is-out"},xp={class:"qc-stock-name"},Sp={key:0,class:"qc-stock-consensus"},Cp={key:1,class:"qc-stock-tags"},qp={key:2,class:"qc-stock-badge"},Ep={key:3,class:"qc-stock-data"},Mp={class:"qc-stock-price"},Tp={key:4,class:"qc-stock-extra"},Pp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},Dp=["data-copy-code","aria-label","onClick","onKeydown"],Rp={key:0,class:"qc-stock-rank"},zp={class:"qc-stock-info"},Ap={class:"qc-stock-code"},Lp={class:"qc-stock-code-num"},Ip={key:0,class:"qc-stock-status is-new"},Np={key:1,class:"qc-stock-status is-out"},Op={class:"qc-stock-name"},jp={key:0,class:"qc-stock-consensus"},Vp={key:1,class:"qc-stock-tags"},Fp={key:2,class:"qc-stock-badge"},Hp={key:3,class:"qc-stock-data"},Bp={class:"qc-stock-price"},Kp={key:4,class:"qc-stock-extra"},Wp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function Up(a,e,m,t,h,y){const z=Gt("qc-state-panel"),v=Gt("qc-virtual-list");return ve(),ye("div",fp,[m.loading?(ve(),oa(z,{key:0,type:"loading"})):m.items.length?(ve(),ye(ot,{key:2},[m.virtual?(ve(),oa(v,{key:0,items:m.items,"row-height":m.rowHeight},{default:na(({item:r,index:g})=>[Se("div",{class:ut(["qc-stock-row",{"is-active":m.activeCode===r.code}]),"data-copy-code":m.copyCode?r.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(r.name||"")+" "+(r.code||""),onClick:o=>t.select(r),onKeydown:[ia(At(o=>t.select(r),["prevent"]),["enter"]),ia(At(o=>t.select(r),["prevent"]),["space"])]},[m.showRank?(ve(),ye("div",hp,Fe(g+1),1)):He("",!0),Se("div",yp,[Se("div",bp,[Se("span",wp,Fe(r.code),1),r.status==="new"?(ve(),ye("span",kp,Fe(m.statusText.new),1)):r.status==="out"?(ve(),ye("span",_p,Fe(m.statusText.out),1)):He("",!0)]),Se("div",xp,[ka(Fe(r.name)+" ",1),ga(a.$slots,"name-suffix",{item:r,index:g})]),m.showConsensus&&t.hasConsensus(r)?(ve(),ye("span",Sp,Fe(t.pctOf(r))+"% 共识",1)):He("",!0)]),(r.strategy_names||r.strategies)&&(r.strategy_names||r.strategies).length?(ve(),ye("div",Cp,[(ve(!0),ye(ot,null,kt(t.displayTags(r),o=>(ve(),ye("span",{key:o.text,class:ut(["qc-stock-tag",{"is-more":o.more}])},Fe(o.text),3))),128))])):He("",!0),m.showConsensus?(ve(),ye("span",qp,Fe(r.strategy_count||0)+" 策略",1)):He("",!0),m.showPrice&&r.price!=null?(ve(),ye("div",Ep,[Se("span",Mp,Fe(t.fmtPrice(r.price)),1),Se("span",{class:ut(["qc-stock-change",r.change_pct>0?"is-up":r.change_pct<0?"is-down":""])},Fe(t.fmtChange(r.change_pct)),3)])):He("",!0),t.slots.extra?(ve(),ye("div",Tp,[ga(a.$slots,"extra",{item:r,index:g})])):He("",!0),t.slots.actions?(ve(),ye("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=At(()=>{},["stop"]))},[ga(a.$slots,"actions",{item:r,index:g})])):He("",!0),t.slots.footer?(ve(),ye("div",Pp,[ga(a.$slots,"footer",{item:r,index:g})])):He("",!0)],42,gp)]),_:3},8,["items","row-height"])):(ve(!0),ye(ot,{key:1},kt(m.items,(r,g)=>(ve(),ye("div",{key:r.code,class:ut(["qc-stock-row",{"is-active":m.activeCode===r.code}]),"data-copy-code":m.copyCode?r.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(r.name||"")+" "+(r.code||""),onClick:o=>t.select(r),onKeydown:[ia(At(o=>t.select(r),["prevent"]),["enter"]),ia(At(o=>t.select(r),["prevent"]),["space"])]},[m.showRank?(ve(),ye("div",Rp,Fe(g+1),1)):He("",!0),Se("div",zp,[Se("div",Ap,[Se("span",Lp,Fe(r.code),1),r.status==="new"?(ve(),ye("span",Ip,Fe(m.statusText.new),1)):r.status==="out"?(ve(),ye("span",Np,Fe(m.statusText.out),1)):He("",!0)]),Se("div",Op,[ka(Fe(r.name)+" ",1),ga(a.$slots,"name-suffix",{item:r,index:g})]),m.showConsensus&&t.hasConsensus(r)?(ve(),ye("span",jp,Fe(t.pctOf(r))+"% 共识",1)):He("",!0)]),(r.strategy_names||r.strategies)&&(r.strategy_names||r.strategies).length?(ve(),ye("div",Vp,[(ve(!0),ye(ot,null,kt(t.displayTags(r),o=>(ve(),ye("span",{key:o.text,class:ut(["qc-stock-tag",{"is-more":o.more}])},Fe(o.text),3))),128))])):He("",!0),m.showConsensus?(ve(),ye("span",Fp,Fe(r.strategy_count||0)+" 策略",1)):He("",!0),m.showPrice&&r.price!=null?(ve(),ye("div",Hp,[Se("span",Bp,Fe(t.fmtPrice(r.price)),1),Se("span",{class:ut(["qc-stock-change",r.change_pct>0?"is-up":r.change_pct<0?"is-down":""])},Fe(t.fmtChange(r.change_pct)),3)])):He("",!0),t.slots.extra?(ve(),ye("div",Kp,[ga(a.$slots,"extra",{item:r,index:g})])):He("",!0),t.slots.actions?(ve(),ye("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=At(()=>{},["stop"]))},[ga(a.$slots,"actions",{item:r,index:g})])):He("",!0),t.slots.footer?(ve(),ye("div",Wp,[ga(a.$slots,"footer",{item:r,index:g})])):He("",!0)],42,Dp))),128))],64)):(ve(),oa(z,{key:1,type:"empty",title:m.emptyText},null,8,["title"]))])}const Gp=Ma(pp,[["render",Up]]),ll={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"}},Yp=200,Jp={name:"qc-top-tabs",components:{AppIcon:_a},setup(){const a=Ea("qcState");if(!a)return{};const e=lt(()=>a.currentPage&&a.currentPage.value||""),m=lt(()=>a.currentSubPage&&a.currentSubPage.value||""),t=lt(()=>a.menus&&a.menus.value||[]),h=lt(()=>{const s=t.value.find(u=>u.key===e.value);return s&&s.subPages||[]}),y=lt(()=>h.value.map(s=>({key:s,label:a.subPageNames&&a.subPageNames[s]||s,icon:ll[e.value]&&ll[e.value][s]||"circle-dot"}))),z=zt(null),v=zt(!1),r=zt(!1),g=zt(!1);let o=null,E=null;function l(){const s=z.value;s&&(r.value=s.scrollLeft>2,g.value=s.scrollLeft<s.scrollWidth-s.clientWidth-2)}function D(){const s=z.value;s&&(v.value=s.scrollWidth>s.clientWidth+2,l())}function k(s){const u=z.value;u&&u.scrollBy({left:s*Yp,behavior:"smooth"})}function S(s){a.openTab?a.openTab(e.value,s):a.currentSubPage&&(a.currentSubPage.value=s)}function M(s){S(s),Md(()=>{const u=z.value;if(!u)return;const F=u.querySelector('[data-tab-key="'+s+'"]');F&&F.scrollIntoView({block:"nearest",inline:"nearest"})})}const b=lt(()=>{if(!v.value)return[];const s=z.value;if(!s)return[];const u=s.getBoundingClientRect(),F=new Set;return s.querySelectorAll(".qc-top-tab").forEach(G=>{const W=G.getBoundingClientRect();W.left>=u.left-2&&W.left<u.right-24&&F.add(G.getAttribute("data-tab-key"))}),y.value.filter(G=>!F.has(G.key))});function n(s,u){s.key==="ArrowLeft"?(s.preventDefault(),k(-1)):s.key==="ArrowRight"?(s.preventDefault(),k(1)):(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),S(u.key))}return ja(()=>{D(),o=new ResizeObserver(()=>{clearTimeout(E),E=setTimeout(D,100)}),z.value&&o.observe(z.value),window.addEventListener("resize",D)}),Ed(()=>{o&&o.disconnect(),window.removeEventListener("resize",D),clearTimeout(E)}),{state:a,tabs:y,currentSubPage:m,go:S,scrollRef:z,hasOverflow:v,canScrollLeft:r,canScrollRight:g,scrollByStep:k,scrollToTab:M,hiddenTabs:b,onTabKeydown:n,updateScrollState:l}}},Qp={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},$p=["disabled"],Xp=["data-tab-key","aria-selected","title","onClick","onKeydown"],Zp={class:"qc-top-tab-label"},ef=["disabled"];function tf(a,e,m,t,h,y){const z=Gt("AppIcon"),v=Gt("el-dropdown-item"),r=Gt("el-dropdown-menu"),g=Gt("el-dropdown");return t.tabs.length?(ve(),ye("div",Qp,[t.hasOverflow?(ve(),ye("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=o=>t.scrollByStep(-1))},"‹",8,$p)):He("",!0),Se("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...o)=>t.updateScrollState&&t.updateScrollState(...o))},[(ve(!0),ye(ot,null,kt(t.tabs,o=>(ve(),ye("div",{key:o.key,"data-tab-key":o.key,class:ut(["qc-top-tab",{"is-active":t.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===o.key?"true":"false",title:o.label,onClick:E=>t.go(o.key),onKeydown:E=>t.onTabKeydown(E,o)},[dt(z,{name:o.icon,size:14},null,8,["name"]),Se("span",Zp,Fe(o.label),1)],42,Xp))),128))],544),t.hasOverflow?(ve(),ye("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=o=>t.scrollByStep(1))},"›",8,ef)):He("",!0),t.hasOverflow&&t.hiddenTabs.length?(ve(),oa(g,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:na(()=>[dt(r,null,{default:na(()=>[(ve(!0),ye(ot,null,kt(t.hiddenTabs,o=>(ve(),oa(v,{key:o.key,command:o.key,class:ut({"is-active":t.currentSubPage===o.key})},{default:na(()=>[dt(z,{name:o.icon,size:14},null,8,["name"]),ka(" "+Fe(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:na(()=>[e[3]||(e[3]=Se("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):He("",!0)])):He("",!0)}const af=Ma(Jp,[["render",tf]]);(function(){const{ref:a,computed:e,inject:m}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=m("qcState");if(!t)return{};const h=a(!1),y=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,goMerrill:y,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:h,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(z,v){const r="sub."+z.key+"."+v,g=t.t(r);if(g!==r)return g;const o="sub."+v,E=t.t(o);return E!==o&&E?E:t.subPageNames[v]||v}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:m,computed:t}=Vue,h=m(0),y=m(0),z=m(!1),v=t(()=>{const W={day:"date",week:"week",month:"month",year:"year"},Y=e.currentView&&e.currentView.value||"day";return W[Y]||"date"}),r={day:"日",week:"周",month:"月",year:"年"};function g(W){return e.t&&e.t("view."+W)||r[W]||W}function o(W){e.switchView?e.switchView(W):e.currentView&&(e.currentView.value=W)}let E=null;function l(W){const Y=W.touches&&W.touches[0];Y&&(h.value=Y.clientX,y.value=Y.clientY)}async function D(){if(!z.value){z.value=!0;try{await e.refreshCalendarData()}catch{}E&&clearTimeout(E),E=setTimeout(()=>{z.value=!1},500)}}function k(W){if(!(window.innerWidth<=768))return;const Y=W.changedTouches&&W.changedTouches[0];if(!Y)return;const te=window.__quantModules&&window.__quantModules.gestures||{};if((typeof te.judgePullToRefresh=="function"?te.judgePullToRefresh(y.value,Y.clientY):Y.clientY-y.value>=60)&&(window.scrollY||0)<=0){W.stopPropagation(),D();return}if(e.currentSubPage.value==="pool")return;const P=Y.clientX-h.value,R=Y.clientY-y.value;Math.abs(P)>50&&Math.abs(P)>Math.abs(R)*1.2&&(e.navigateDate(P<0?1:-1),W.stopPropagation())}const S=m(!1),M=m(!1),b=m(""),n=m(null),s=m([]);function u(W){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[W]||W}async function F(){if(e.selectedDate.value){S.value=!0,M.value=!0,b.value="",n.value=null,s.value=[];try{const W=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),Y=await W.json();if(!W.ok)throw new Error(Y.detail||"HTTP "+W.status);n.value=Y;const te=Y&&Y.comparison||{},I=[];for(const P of Object.keys(te)){if(P==="all_intersection")continue;const R=te[P]||{},H=P.split("_vs_");I.push({label:u(H[0])+" ↔ "+u(H[1]),interCount:R.intersection_count||0,inter:(R.intersection||[]).join(", "),onlyS1Count:R.only_s1_count||0,onlyS1:(R.only_s1||[]).join(", "),onlyS2Count:R.only_s2_count||0,onlyS2:(R.only_s2||[]).join(", ")})}s.value=I}catch(W){b.value=String(W&&W.message?W.message:W)}finally{M.value=!1}}}let G="";return Vue.watch(()=>{const W=e.stockPool,Y=W&&W.value||[];return{n:Y.length,first:Y[0]&&Y[0].code,split:!!e.detailSplitEnabled.value}},(W,Y)=>{if(!W.split||!W.first||W.n===0)return;const te=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,I=(e.stockPool.value||[]).some(P=>P.code===te);if(!te||!I){if(G===W.first&&te&&I===!1&&W.n>1)return;G=W.first,e.showStockDetail&&e.showStockDetail(W.first)}},{immediate:!0}),{...e,calType:v,pullRefreshing:z,onCalTouchStart:l,onCalTouchEnd:k,viewLabel:g,switchViewLocal:o,compareVisible:S,compareLoading:M,compareError:b,compareData:n,comparePairs:s,openStrategyCompare:F}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
                            <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估">🤖</span>
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
                            <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估">🤖</span>
                            <span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" title="已加载K线">📈</span>
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
    `,setup(){const e=a("qcState"),m=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let h=0;const y=t(()=>{var q;return((q=e.merrillData)==null?void 0:q.value)||{}}),z=t(()=>{var q;return((q=e.marketData)==null?void 0:q.value)||{}}),v=t(()=>{var q;return((q=e.dashboardData)==null?void 0:q.value)||{}}),r=t(()=>{var q;return((q=e.healthMetrics)==null?void 0:q.value)||[]}),g=t(()=>{var q;return((q=e.filteredConsensusRank)==null?void 0:q.value)||[]}),o=t(()=>{const q={};for(const ue of g.value)ue.code&&ue.name&&(q[ue.code]=ue.name);return q}),E={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function l(q){return E[q]||q}const D=t(()=>z.value.date||v.value.latest_date||"-"),k=t(()=>{const q=z.value;return!q||Object.keys(q).length===0?"数据加载中...":q.is_trading_day&&q.in_trading_hours?"● 交易中":q.is_trading_day?"已收盘":"○ 非交易日"}),S=t(()=>{const q=y.value.next_stage_prediction;return q&&q.next_stage_name&&q.transition_probability>.2?`→${q.next_stage_name} ${(q.transition_probability*100).toFixed(2)}%`:""}),M=t(()=>{const q=[],ue=v.value.pool_changes||{},be=ue.new_count||0;if(be>0){const Ue=ue.new_stock_names||{},V=(ue.new_stocks||[]).map(re=>Ue[re]||o.value[re]||re).slice(0,4).join("、");q.push({icon:"sparkles",level:"new",text:`今日新入池 ${be} 只${V?" · "+V:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Ue of r.value.filter(V=>V.degraded))q.push({icon:"alert-triangle",level:"warn",text:`数据源 ${l(Ue.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const Ce=y.value.timing;Ce&&Ce.progress_percent&&Ce.progress_percent>100?q.push({icon:"clock",level:"warn",text:`美林「${y.value.name}」已超期 ${Ce.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):Ce&&Ce.maturity&&y.value.name&&q.push({icon:"clock",level:"info",text:`美林「${y.value.name}」阶段成熟度 ${Ce.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ae=z.value;return Ae&&Ae.is_trading_day===!1&&Ae.date&&q.push({icon:"calendar",level:"info",text:`${Ae.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),q}),b=t(()=>{const q=[],ue=y.value.name||"",be=y.value.timing||{},Ce=["复苏","成长","过热"],Ae=["滞胀","衰退"];Ce.some(Xe=>ue.includes(Xe))&&q.push({kind:"opportunity",source:"美林",text:ue+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ae.some(Xe=>ue.includes(Xe))&&q.push({kind:"risk",source:"美林",text:ue+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),be.progress_percent&&be.progress_percent>100&&q.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Ue=v.value.pool_changes||{},V=(Ue.new_count||0)-(Ue.out_count||0);V>=3?q.push({kind:"opportunity",source:"池变动",text:"净入池 +"+V,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):V<=-3&&q.push({kind:"risk",source:"池变动",text:"净出池 "+V,action:()=>{e.currentSubPage.value="consensus"}});const re=z.value.market_sentiment,Be=re&&re.text||"";(Be.includes("乐观")||Be.includes("积极")||Be.includes("亢奋"))&&q.push({kind:"opportunity",source:"情绪",text:Be,action:()=>{e.currentSubPage.value="market"}}),(Be.includes("悲观")||Be.includes("恐慌")||Be.includes("低迷"))&&q.push({kind:"risk",source:"情绪",text:Be,action:()=>{e.currentSubPage.value="market"}});for(const Xe of r.value.filter(rt=>rt.degraded))q.push({kind:"risk",source:"数据",text:l(Xe.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return q}),n=t(()=>{var q;return((q=e.merrillTimeline)==null?void 0:q.value)||e.merrillTimeline||{cycles:[]}}),s=t(()=>{var q;return((q=e.timelineLoading)==null?void 0:q.value)||!1}),u=Vue.ref(null),F=Vue.ref(!1),G=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function W(q){const ue=q&&q.currentTarget,be=document.querySelector(".tl-click-pop");if(!ue||!be)return;const Ce=ue.getBoundingClientRect(),Ae=be.offsetWidth||340,Ue=be.offsetHeight||220,V=10,re=ue.closest(".merrill-timeline-block"),Be=re?re.getBoundingClientRect():Ce,Xe=Ce.left-Be.left,rt=Ce.top-Be.top,xt=Ce.width,Vt=Ce.height,Ct=Be.width,Pt=Be.height;let mt=null;Xe+xt+V+Ae<=Ct?mt=Xe+xt+V:Xe-V-Ae>=0?mt=Xe-V-Ae:mt=Math.max(8,Math.min(Xe,Ct-Ae-8));const Dt=rt+Vt/2-Ue/2,wt=Math.max(8,Math.min(Dt,Pt-Ue-8));G.top=wt,G.left=mt,G.right=null,G.bottom=null}const Y=Vue.computed(function(){const q={};return G.top!=null&&(q.top=G.top+"px"),G.left!=null&&(q.left=G.left+"px"),G.right!=null&&(q.right=G.right+"px"),q});function te(q,ue){let be=null;const Ce=n.value&&n.value.cycles||[];for(const Ae of Ce){const Ue=(Ae.stages||[]).find(V=>V.stage===q&&V.is_current);if(Ue){be=Ue;break}}if(!be)for(const Ae of Ce){const Ue=(Ae.stages||[]).find(V=>V.stage===q);if(Ue){be=Ue;break}}be&&(u.value=be,F.value=!0,Vue.nextTick(function(){W(ue)}))}function I(){F.value=!1,u.value=null}function P(q){const ue=e.merrillStagesConfig,Ce=(ue&&ue.value?ue.value:ue||{})[q]||{};return Ce.color||Ce.bg_color||"var(--color-primary)"}function R(q){const ue=e.merrillStagesConfig,be=ue&&ue.value?ue.value:ue||{};return be[q]&&be[q].name||""}function H(){const q=e.merrillStagesConfig;return q&&q.value?q.value:q||{}}function ee(q){return H()[q]&&H()[q].description||""}function $(q){const ue=q&&q.stages?q.stages:[];if(!ue.length)return"";const be=ue[0]&&ue[0].start?String(ue[0].start).slice(0,4):"",Ce=ue[ue.length-1]||{},Ae=Ce.end?String(Ce.end).slice(0,4):Ce.start?String(Ce.start).slice(0,4):"";return be||Ae?be?be+"–"+Ae:Ae:""}function se(q){const ue=q.start?String(q.start).slice(0,4):"",be=q.end?String(q.end).slice(0,4):ue?"至今":"";return ue?be?ue+"–"+be:ue:""}function j(q){const ue=q.essence||q.trigger||ee(q.stage)||"";return q.highlight?ue?ue+" · "+q.highlight:q.highlight:ue}function B(){const q=y.value.indicators||{},ue=y.value.stage||"",be={recovery:[["PMI",q.pmi],["GDP",q.gdp_growth],["M2",q.m2_growth]],overheat:[["PPI",q.ppi],["CPI",q.cpi],["PMI",q.pmi]],stagflation:[["CPI",q.cpi],["PPI",q.ppi],["GDP",q.gdp_growth]],recession:[["PMI",q.pmi],["GDP",q.gdp_growth],["CPI",q.cpi]]},Ce=(be[ue]||be.recession).filter(Ae=>Ae[1]!=null&&Ae[1]!==0);return Ce.length?"实时 · "+Ce.map(Ae=>Ae[0]+" "+Ae[1]+"%").join(" ｜ "):""}function A(q,ue,be){const Ae=(H()[q.stage]||{}).color||"var(--color-primary)",Ue=ue||[],V=Ue.map(xt=>xt.duration_months||0),re=V.reduce((xt,Vt)=>xt+Vt,0),Be=re>0?V[be]/re*100:100/Math.max(1,Ue.length),Xe=be===0,rt=be===Ue.length-1;return{flex:"0 0 "+Be+"%",background:Ae,borderRadius:Xe?"6px 0 0 6px":rt?"0 6px 6px 0":"0"}}function p(q){const ue=q.length;if(ue<=4)return[q];const be=Math.ceil(ue/2);return[q.slice(0,be),q.slice(be).reverse()]}function x(q){const ue=H()[q]||{},be=ue.color||"var(--color-primary)";return{background:ue.bg_color||"var(--bg-card)",borderColor:be,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const le=Vue.reactive({}),K=Vue.ref(null);let T=null,c=null,C=null;function d(){try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((ue,be)=>{const Ce=ue.querySelector(".tl-stage-rows"),Ae=ue.querySelector(".tl-row-top"),Ue=ue.querySelector(".tl-row-bottom"),V=Ae?Array.from(Ae.querySelectorAll(".merrill-stage-chip")):[],re=Ue?Array.from(Ue.querySelectorAll(".merrill-stage-chip")).reverse():[],Be=V.concat(re);if(!Ce||Be.length<2){le[be]={d:"",vb:"0 0 1 1"};return}const Xe=Ce.getBoundingClientRect(),rt=Math.max(1,Xe.width),xt=Math.max(1,Xe.height),Vt=V.length,Ct=Be.map(mt=>{const Dt=mt.getBoundingClientRect();return{x:Dt.left+Dt.width/2-Xe.left,y:Dt.top+Dt.height/2-Xe.top}});let Pt="M "+Ct[0].x.toFixed(1)+" "+Ct[0].y.toFixed(1);for(let mt=1;mt<Ct.length;mt++){const Dt=Ct[mt-1],wt=Ct[mt];mt===Vt&&(Pt+=" L "+Dt.x.toFixed(1)+" "+wt.y.toFixed(1)),Pt+=" L "+wt.x.toFixed(1)+" "+wt.y.toFixed(1)}le[be]={d:Pt,vb:"0 0 "+rt.toFixed(1)+" "+xt.toFixed(1)}})}catch(q){console.error("[tl] buildTlPaths error",q)}}function O(q){return le[q]||{d:"",vb:"0 0 1 1"}}function ie(q){K.value=q}function J(){K.value=null}const Q=Vue.ref([]);function _(q){return Q.value.indexOf(q)!==-1}function f(q){const ue=Q.value.slice(),be=ue.indexOf(q);be!==-1?ue.splice(be,1):ue.push(q),Q.value=ue,Vue.nextTick(function(){d&&d()})}function Z(){const q=document.querySelector(".merrill-timeline-block");if(!q)return;const ue=q.querySelector(".tl-spine");ue?ue.scrollIntoView({behavior:"smooth",block:"end"}):q.scrollIntoView({behavior:"smooth",block:"end"})}const pe=Vue.computed(function(){const q=H();return["recovery","overheat","stagflation","recession","default"].filter(function(be){return q[be]&&q[be].name}).map(function(be){return{key:be,name:q[be].name,color:q[be].color||"var(--color-primary)"}})});function we(q){c&&clearTimeout(c),c=setTimeout(()=>{c=null,Vue.nextTick(d)},q||120)}Vue.onMounted(()=>{we(0),we(800),T=()=>we(150),window.addEventListener("resize",T),C=new MutationObserver(()=>we(120)),C.observe(document.body||document.documentElement,{childList:!0,subtree:!0})}),Vue.onBeforeUnmount(()=>{T&&window.removeEventListener("resize",T),c&&clearTimeout(c),C&&(C.disconnect(),C=null)});const Me=Vue.ref([]),Ve=Vue.ref(null),Ee=Vue.ref(!1),_e=Vue.ref(!1),ne=Vue.ref(7),ke=Vue.ref(""),De=Vue.ref(""),oe=Vue.computed(()=>{const q=new Set;return(Me.value||[]).forEach(function(ue){ue.task&&q.add(ue.task)}),Array.from(q).sort()}),X=Vue.computed(function(){const q=Ve.value&&Ve.value.success_rate||0;return q>=80?"color-success":q>=50?"color-warning":"color-danger"});function ge(q,ue){return q>0&&ue/q>=.8?"status-ok":q>0&&ue/q>=.5?"status-warn":"status-bad"}async function Te(){const q=++h;Ee.value=!0,_e.value=!1;try{const ue=window.__quantModules&&window.__quantModules.core||{},be=typeof ue.authHeaders=="function"?ue.authHeaders():{},Ce=new URLSearchParams({days:String(ne.value)});ke.value&&Ce.set("task",ke.value),De.value&&Ce.set("status",De.value);const[Ae,Ue]=await Promise.all([fetch("/api/system/execution-history?"+Ce.toString(),{headers:be}).then(function(V){return V.json()}),fetch("/api/system/execution-summary?days="+ne.value,{headers:be}).then(function(V){return V.json()})]);if(q!==h)return;Me.value=Ae&&Ae.data||[],Ve.value=Ue&&Ue.data||null}catch(ue){console.error("[execution] 执行数据加载失败:",ue),_e.value=!0}finally{q===h&&(Ee.value=!1)}}const Le=window.__quantModules&&window.__quantModules.i18n||{},Qe=typeof Le.t=="function"?Le.t:function(q){return String(q)},vt=Vue.ref([]),Ze=Vue.ref(null),Ye=Vue.ref(null),it=Vue.ref(""),me=Vue.ref([]),xe=Vue.ref(!1);let Re=null;const Ie=Vue.computed(function(){const q=Ye.value&&Ye.value.dates||[];return q.length&&!it.value&&(it.value=q[q.length-1].date),q}),nt=Vue.computed(function(){const q=(vt.value||[]).find(function(be){return be.enabled});if(!q||q.countdown_seconds==null)return"—";const ue=q.countdown_seconds;return Math.floor(ue/3600)+"h"+String(Math.floor(ue%3600/60)).padStart(2,"0")+"m"}),et=Vue.computed(function(){const q=(vt.value||[]).find(function(ue){return ue.enabled});if(!q||q.countdown_seconds==null||q.countdown_seconds<0)return"";try{return new Date(Date.now()+q.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),$e=Vue.computed(function(){const q=Ze.value;return!q||q.phase==="idle"?Qe("exec.waiting"):q.phase==="running"?Qe("exec.running")+(q.current_sid?" · "+q.current_sid:""):q.phase==="done"?Qe("exec.done"):Qe("exec.failed")}),bt=Vue.computed(function(){return Ze.value&&Ze.value.phase==="running"?"🟡":"🟢"}),St=Vue.computed(function(){const q=Ye.value&&Ye.value.dates||[];return q.length?q[q.length-1].date:"—"}),ht=Vue.computed(function(){const q=Ye.value&&Ye.value.dates||[],ue=q[q.length-1];return ue&&ue.visible?"color-success":"color-danger"}),tt=Vue.computed(function(){const q=Ye.value&&Ye.value.dates||[],ue=q[q.length-1];return ue?(ue.visible?"✓ ":"✗ ")+ue.day_view_total:"—"});function jt(q){const ue=window.__quantModules&&window.__quantModules.core||{},be=typeof ue.authHeaders=="function"?ue.authHeaders():{};return fetch(q,{headers:be}).then(function(Ce){return Ce.json()})}async function Mt(){const q=++h;try{const[ue,be,Ce]=await Promise.all([jt("/api/strategies/execution/plan"),jt("/api/strategies/execution/status"),jt("/api/strategies/execution/results?days=7")]);if(q!==h)return;vt.value=ue&&ue.data&&ue.data.plans||[],Ze.value=be&&be.data||null,Ye.value=Ce&&Ce.data||null,Ze.value&&Ze.value.phase==="running"?_t():ft()}catch(ue){console.error("[execution-monitor] 监控数据加载失败:",ue)}}function _t(){ft(),Re=setInterval(function(){jt("/api/strategies/execution/status").then(function(q){Ze.value=q&&q.data||null,Ze.value&&Ze.value.phase!=="running"&&(ft(),Mt())}).catch(function(){})},5e3)}function ft(){Re&&(clearInterval(Re),Re=null)}async function Tt(q){if(!q)return;const ue=++h;xe.value=!0;try{const be=await jt("/api/strategies/execution/trace/"+encodeURIComponent(q));if(ue!==h)return;const Ce=be&&be.data||null;me.value=Ce&&Ce.steps||[]}catch(be){console.error("[execution-trace] 追溯加载失败:",be)}finally{ue===h&&(xe.value=!1)}}return Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(q){q==="execution"?(Te(),Mt()):ft()},{immediate:!0}),Vue.watch(function(){const q=e.currentSubPage&&e.currentSubPage.value,ue=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],be=e.marketData&&e.marketData.value||{};return{sub:q,split:!!e.detailSplitEnabled.value,top5:ue.slice(0,5),rank:ue,indices:(be.indices||[]).map(function(Ce){return Ce})}},function(q,ue){if(q.split){if(q.sub==="overview"){if(!q.top5.length)return;const be=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Ce=q.top5.some(function(Ae){return Ae.code===be});(!be||!Ce)&&e.showStockDetail&&e.showStockDetail(q.top5[0].code)}else if(q.sub==="consensus"){if(!q.rank.length)return;const be=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Ce=q.rank.some(function(Ae){return Ae.code===be});(!be||!Ce)&&e.showStockDetail&&e.showStockDetail(q.rank[0].code)}else if(q.sub==="market"){if(!q.indices.length)return;const be=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,Ce=q.indices.some(function(Ae){return Ae.code===be});(!be||!Ce)&&e.showIndexDetail&&e.showIndexDetail(q.indices[0])}}},{immediate:!0}),{...e,todayText:D,tradingStatus:k,merrillNext:S,todayFocus:M,todaySignals:b,merrillConfigOpen:m,getTimelineStageColor:P,getTimelineStageName:R,getTimelineStageDesc:ee,timelineRows:p,tlChipStyle:x,tlPathFor:O,tlCycleYears:$,tlGanttStyle:A,tlTipYears:se,tlTipBrief:j,tlCurrentBrief:B,tlHoverKey:K,setTlHover:ie,clearTlHover:J,collapsedCycles:Q,isCycleCollapsed:_,toggleCycle:f,scrollToLatest:Z,tlLegendStages:pe,tlClickStage:u,tlClickVisible:F,closeTlClick:I,tlClickPosStyle:Y,merrillTimeline:n,timelineLoading:s,showTimelineStage:te,execHistory:Me,execSummary:Ve,execLoading:Ee,execError:_e,execDays:ne,execTaskFilter:ke,execStatusFilter:De,execTaskOptions:oe,execSuccessClass:X,loadExecutionData:Te,execRateClass:ge,execPlan:vt,execStatus:Ze,execResults:Ye,execTraceDate:it,execTraceSteps:me,execTraceLoading:xe,execResultsDates:Ie,execCountdownText:nt,execNextRunText:et,execPhaseText:$e,execStatusIcon:bt,execLastDate:St,execVisibleClass:ht,execVisibleText:tt,loadExecutionTrace:Tt}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};function m(V){e.currentSubPage.value=V}function t(){ke(),De(),oe()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,V=>{V==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),V==="datadict"&&C(),V==="health"&&x(),V==="notification"&&t()});const h=e.themeHues||[45,220,0,140,270,320],y=e.themeHueNames||{},z=e.themeMode||Vue.computed(()=>"light"),v=e.themeHue||Vue.ref(45);function r(V){e.changeThemeMode&&e.changeThemeMode(V)}function g(V){e.changeThemeHue&&e.changeThemeHue(parseInt(V,10))}function o(V){return e.hueColor?e.hueColor(V):"hsl("+V+", 75%, 42%)"}function E(V){return e.hueName?e.hueName(V):y[V]||"自定义 "+V}function l(V){e.setNavMode&&e.setNavMode(V)}const D=Vue.ref([]),k=Vue.ref(""),S=Vue.ref("read"),M=Vue.ref(""),b=Vue.ref(!1),n=()=>window.__quantModules&&window.__quantModules.core||{},s=Vue.ref([]),u=Vue.ref(!1);async function F(){u.value=!0;try{const V=await fetch("/api/audit/logs?limit=20",{headers:n().authHeaders?n().authHeaders():{}}).then(function(re){if(!re.ok)throw new Error("HTTP "+re.status);return re.json()});s.value=V&&V.logs||[]}catch(V){console.error("[system] 审计加载失败:",V),s.value=[]}finally{u.value=!1}}const G=Vue.ref(!1),W=Vue.ref(null),Y=Vue.ref(null),te=Vue.ref([]),I=Vue.ref(null);function P(V){return V==="completed"?"完成":V==="running"?"运行中":V==="pending"?"排队中":V==="cancelled"?"已取消":"失败"}async function R(){try{const re=await(await fetch("/api/jobs?limit=20")).json();re&&re.success&&(te.value=re.data&&re.data.tasks||[])}catch(V){console.warn("[system] 加载任务队列失败:",V)}}async function H(V){try{await fetch("/api/jobs/"+V+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),R()}catch(re){console.warn("[system] 取消任务失败:",re)}}function ee(){R(),I.value=window.setInterval(R,15e3)}const $=Vue.ref({items:[]}),se=Vue.ref([]),j=Vue.ref(null),B=Vue.ref({data_sources:[],alerts:[]}),A=function(){return n().authHeaders?n().authHeaders():{}},p=function(V){return fetch(V,{headers:A()}).then(function(re){if(!re.ok)throw new Error("HTTP "+re.status);return re.json()})};async function x(){G.value=!0,W.value=null;try{const[V,re,Be,Xe]=await Promise.all([p("/api/reliability/freshness"),p("/api/reliability/heal-history?limit=20"),p("/api/reliability/startup-report"),p("/api/reliability/source-health")]);$.value=V&&V.data||{items:[]},se.value=re&&re.data||[],j.value=Be&&Be.data||null,B.value=Xe||{data_sources:[],alerts:[]},Y.value=new Date().toLocaleTimeString()}catch(V){console.warn("[health] 加载失败:",V),W.value="健康数据加载失败: "+(V.message||""),$.value={items:[]},se.value=[]}finally{G.value=!1}}const le=Vue.ref(!1),K=Vue.ref(""),T=Vue.ref(""),c=Vue.ref({fields:[]});async function C(){le.value=!0,K.value="";try{const V="/api/data-dict"+(T.value?"?category="+T.value:""),re=await p(V);c.value=re&&re.data||{fields:[]}}catch(V){console.warn("[dict] 加载失败:",V),K.value="数据字典加载失败: "+(V.message||""),c.value={fields:[]}}finally{le.value=!1}}function d(V){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[V]||"var(--text-secondary)"}function O(V){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[V]||V}const ie=Vue.computed(()=>($.value?$.value.items||[]:[]).filter(re=>re.status==="stale"||re.status==="missing").length),J=Vue.ref("rules"),Q=Vue.ref([]),_=Vue.ref([]),f=Vue.ref([]),Z=Vue.ref(!1),pe=Vue.ref(""),we=Vue.ref("price_above"),Me=Vue.ref(""),Ve=Vue.ref(!1),Ee=Vue.ref(60),_e=Vue.ref("");function ne(V){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[V]||V}async function ke(){Z.value=!0;try{const V=await(await fetch("/api/alerts/rules")).json();Q.value=V&&V.rules||[]}catch(V){_e.value="规则加载失败: "+V}finally{Z.value=!1}}async function De(){Z.value=!0;try{const V=await(await fetch("/api/alerts/history?limit=50")).json();_.value=V&&V.history||[]}catch(V){_e.value="历史加载失败: "+V}finally{Z.value=!1}}async function oe(){Z.value=!0;try{const V=await(await fetch("/api/alerts/channels")).json(),re=await(await fetch("/api/alerts/silence")).json();f.value=V&&V.channels||[],Ve.value=!!(re&&re.silenced)}catch(V){_e.value="通道状态加载失败: "+V}finally{Z.value=!1}}function X(V){J.value=V,V==="rules"?ke():V==="history"?De():oe()}async function ge(){const V=pe.value.trim();if(!V){_e.value="请填写股票代码";return}Z.value=!0;try{const re={stock_code:V,rule_type:we.value};if(we.value!=="new_pool"){const Xe=Number(Me.value);if(isNaN(Xe)){_e.value="阈值必须为数值";return}re.threshold=Xe}const Be=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(re)})).json();Be&&Be.rule?(_e.value="规则已添加",pe.value="",Me.value="",ke()):_e.value=Be&&Be.detail||"添加失败"}catch(re){_e.value="添加失败: "+re}finally{Z.value=!1}}async function Te(V){try{await fetch("/api/alerts/rules/"+V.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!V.enabled})}),V.enabled=!V.enabled}catch(re){_e.value="切换失败: "+re}}async function Le(V){try{const re=await(await fetch("/api/alerts/rules/"+V.id,{method:"DELETE"})).json();re&&re.success?(_e.value="规则已删除",ke()):_e.value="删除失败"}catch(re){_e.value="删除失败: "+re}}async function Qe(){try{const V=Ve.value?Ee.value:0,re=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:V})})).json();Ve.value=!!(re&&re.silenced),_e.value=Ve.value?"已静默":"已恢复推送"}catch(V){_e.value="静默设置失败: "+V}}async function vt(){Ve.value=!1,await Qe()}function Ze(V){return!!V&&!V.degraded}const Ye=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((re,Be)=>Math.max(re,Be.views||0),0)||1),it=()=>n().OPENAPI_ROUTE_BASE||"/api/openapi";async function me(){b.value=!0;try{const V=await n().apiFetch(it()+"/keys");D.value=V&&V.data||[]}catch(V){ElementPlus.ElMessage.error("加载 API Key 失败: "+(V.message||""))}finally{b.value=!1}}async function xe(){try{const V=await n().apiFetch(it()+"/keys",{method:"POST",body:JSON.stringify({name:k.value||"未命名",role:S.value||"read",expire_days:365})});V&&V.success?(M.value=V.api_key||"",k.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await me()):ElementPlus.ElMessage.error(V&&(V.detail||V.message)||"生成失败")}catch(V){ElementPlus.ElMessage.error("生成失败: "+(V.message||""))}}async function Re(){if(M.value)try{await navigator.clipboard.writeText(M.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Ie(V){try{const re=await n().apiFetch(it()+"/keys/"+V.id,{method:"DELETE"});re&&re.success?(ElementPlus.ElMessage.success("Key 已吊销"),M.value&&V.prefix&&M.value.includes(V.prefix)&&(M.value=""),await me()):ElementPlus.ElMessage.error(re&&(re.detail||re.message)||"吊销失败")}catch(re){ElementPlus.ElMessage.error("吊销失败: "+(re.message||""))}}const nt={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function et(V){return nt[V]||V}const $e=computed(()=>{var V;return(((V=e.healthMetrics)==null?void 0:V.value)||[]).map(re=>({name:et(re.name),source:re.name,success_rate:re.success_rate,avg_latency_ms:re.avg_latency_ms,calls:re.calls||0,degraded:!!re.degraded,data_age_hours:re.data_age_hours!=null?re.data_age_hours:null,stale:!!re.stale,last_fetch:re.last_fetch||re.last_success||null}))});function bt(V){return V.degraded?"degraded":V.success_rate==null?"unknown":V.success_rate>=90?"ok":V.success_rate>=60?"warn":"bad"}function St(V){return V==null?"":V<1?"刚刚":V<24?Math.round(V)+"小时前":Math.floor(V/24)+"天前"}const ht=e.aiUsage||Vue.ref({}),tt=Vue.computed(()=>{const V=ht.value&&ht.value.by_model||{};return Object.entries(V).map(([re,Be])=>({name:re,count:Be})).sort((re,Be)=>Be.count-re.count)}),jt=Vue.computed(()=>tt.value.reduce((V,re)=>Math.max(V,re.count),0)||1),Mt=Vue.computed(()=>tt.value.reduce((V,re)=>V+re.count,0)||1),_t=Vue.computed(()=>ft.value.reduce((V,re)=>Math.max(V,re.count),0)||0),ft=Vue.computed(()=>{const V=ht.value&&ht.value.by_day||{},re=[],Be=new Date;for(let Xe=29;Xe>=0;Xe--){const rt=new Date(Be.getFullYear(),Be.getMonth(),Be.getDate()-Xe),xt=rt.getFullYear()+"-"+String(rt.getMonth()+1).padStart(2,"0")+"-"+String(rt.getDate()).padStart(2,"0");re.push({day:xt,count:V[xt]||0})}return re}),Tt=Vue.computed(()=>ft.value.reduce((V,re)=>Math.max(V,re.count),0)||1),q=Vue.computed(()=>{const V=ht.value&&ht.value.by_day||{},re=new Date,Be=re.getFullYear()+"-"+String(re.getMonth()+1).padStart(2,"0")+"-"+String(re.getDate()).padStart(2,"0");return V[Be]||0}),ue=Vue.computed(()=>{const V=ht.value&&ht.value.by_day||{},re=Object.keys(V).filter(Be=>(V[Be]||0)>0);return re.length?re[re.length-1]:""});function be(V){e.analyticsDays&&(e.analyticsDays.value=V),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const Ce='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ae='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function Ue(V){return V?Ae:Ce}return ee(),{...e,themeHues:h,themeHueNames:y,themeMode:z,themeHue:v,onThemeModeChange:r,setThemeHue:g,hueColor:o,hueName:E,onNavModeChange:l,analyticsMaxViews:Ye,aiModelRank:tt,aiModelMax:jt,aiDayTrend:ft,aiDayMax:Tt,todayAiCalls:q,lastAiCallDay:ue,aiTotal:Mt,aiDayPeak:_t,setAnalyticsDays:be,viewIcon:Ue,openApiKeys:D,openApiKeyName:k,openApiKeyRole:S,newOpenApiKey:M,openApiLoading:b,loadOpenApiKeys:me,generateOpenApiKey:xe,copyOpenApiKey:Re,revokeOpenApiKey:Ie,healthRows:$e,healthClass:bt,fmtAge:St,staleAssetCount:ie,jobQueue:te,loadJobQueue:R,cancelJob:H,jobStatusText:P,auditLogs:s,auditLoading:u,loadAuditLogs:F,healthLoading:G,healthError:W,healthUpdatedAt:Y,freshnessData:$,healHistory:se,startupReport:j,sourceHealth:B,refreshHealth:x,statusColor:d,statusLabel:O,sourceOk:Ze,dictLoading:le,dictError:K,dictCategory:T,dictData:c,loadDataDict:C,ncTab:J,ncRules:Q,ncHistory:_,ncChannels:f,ncLoading:Z,ncNewCode:pe,ncNewType:we,ncNewThreshold:Me,ncSilence:Ve,ncSilenceMinutes:Ee,ncMsg:_e,ncTypeLabel:ne,onNcTab:X,loadAlertRules:ke,loadAlertHistory:De,loadAlertChannels:oe,addAlertRule:ge,toggleAlertRule:Te,removeAlertRule:Le,applySilence:Qe,clearSilence:vt,goSystemSub:m}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:e,watch:m,onUnmounted:t}=Vue,h=a("qcState");if(!h)return{};function y(){if(!h.hasMoreAiHistory||!h.loadMoreAiHistory||h.currentPage.value!=="ai"||h.currentSubPage.value!=="history")return;const _=document.documentElement;_.scrollTop+window.innerHeight>=_.scrollHeight-300&&h.loadMoreAiHistory()}window.addEventListener("scroll",y,{passive:!0}),t(()=>window.removeEventListener("scroll",y));const z=e(null),v=e(!1),r=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function g(_){return!_||_.total===0||_.rate===null||_.rate===void 0?"--":_.rate.toFixed(2)+"%"}const o=e(5);function E(_){o.value=_}function l(_,f){if(!_)return"--";if(_.available===!1)return"— 数据不可达";const Z=_["hit_n"+f];return Z===!0?"✓ 命中":Z===!1?"✗ 未中":"– 中性/待验证"}async function D(){v.value=!0;try{const f=await(await fetch("/api/ai/track")).json();z.value=f&&f.success?f.data:null}catch(_){console.warn("[eval-track] 评估命中率加载失败:",_),z.value=null}finally{v.value=!1}}m(function(){return h.currentPage.value+"/"+h.currentSubPage.value},function(_){_==="ai/evaluation-analysis"&&D()},{immediate:!0});const k=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:S,summary:M,trades:b,loading:n,loadError:s,showAddForm:u,addForm:F,addSaving:G,tradeFormVisible:W,tradeForm:Y,tradeSaving:te,portfolioTab:I,equityDays:P,equityLoading:R,equityNote:H,equityHasData:ee,loadPortfolio:$,addPosition:se,removePosition:j,openTradeForm:B,submitTrade:A,loadTrades:p,loadEquity:x,fmtSigned:le,fmtSignedPct:K,signClass:T,riskTab:c,riskLoading:C,riskNote:d,riskHasData:O,riskData:ie,riskMetricList:J,loadRisk:Q}=k;return m(S,function(_){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((_||[]).map(function(f){return{code:f.stock_code,name:f.stock_name||f.stock_code}}))},{deep:!0}),m(function(){return h.currentPage.value+"/"+h.currentSubPage.value},function(_){_==="ai/portfolio"?($(),p(),x(P?P.value:30),typeof Q=="function"&&Q()):_==="ai/overview"&&$()},{immediate:!0}),{...h,trackData:z,trackLoading:v,trackWindows:r,fmtTrackRate:g,loadTrack:D,trackWindow:o,setTrackWindow:E,trackHitText:l,positions:S,summary:M,trades:b,loading:n,loadError:s,showAddForm:u,addForm:F,addSaving:G,tradeFormVisible:W,tradeForm:Y,tradeSaving:te,portfolioTab:I,equityDays:P,equityLoading:R,equityNote:H,equityHasData:ee,loadPortfolio:$,addPosition:se,removePosition:j,openTradeForm:B,submitTrade:A,loadTrades:p,loadEquity:x,fmtSigned:le,fmtSignedPct:K,signClass:T,riskTab:c,riskLoading:C,riskNote:d,riskHasData:O,riskData:ie,riskMetricList:J,loadRisk:Q}}}})();(function(){const{ref:a,computed:e,watch:m,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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

                        <!-- V5.15 (F8.2): 双栏 — 左日期中栏 (指标摘要) + 右内容 (列表/详情) -->
                        <div class="market-review-split" data-split-root>
                            <!-- 左: 日期中栏 (类似复盘日历) -->
                            <div class="market-review-date-list">
                                <div class="market-review-date-list-head">
                                    <span>复盘日期</span>
                                    <el-button size="small" text @click="loadMarketReviews" aria-label="刷新复盘日期">🔄</el-button>
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
                </div>`,setup(){const h=t("qcState"),y=Vue.ref(!1),z=Vue.ref(!1);let v=0;if(!h)return{};const r=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function g(i){r.value=i;try{localStorage.setItem("quant_strategy_mode",i)}catch{}h.currentSubPage.value="strategy-manage"}const o=a([]),E=a(!1),l=a(!1),D=a(""),k=a(null),S=a(!1),M=a(!1);async function b(){const i=++v;E.value=!0,l.value=!1;try{const w=await fetch("/api/market/reviews?limit=30",{headers:V()}).then(qe=>qe.json());if(i!==v)return;w&&w.success?o.value=Array.isArray(w.data)?w.data:[]:l.value=!0}catch(w){console.error("[market-review] 复盘列表加载失败:",w),l.value=!0}finally{i===v&&(E.value=!1)}}function n(i){D.value=i,W(i)}function s(i){D.value===i?G():n(i)}function u(i){return i==null||isNaN(Number(i))?"—":(Number(i)>=0?"+":"")+Number(i).toFixed(2)+"%"}function F(i){return i==null||isNaN(Number(i))?"—":Number(i).toFixed(2)}function G(){D.value="",k.value=null,M.value=!1}async function W(i){const w=++v;S.value=!0,M.value=!1,k.value=null;try{const qe=i?"/api/market/review?date="+encodeURIComponent(i):"/api/market/review",Oe=await fetch(qe,{headers:V()}).then(We=>We.json());if(w!==v)return;Oe&&Oe.success?k.value=Oe.data:M.value=!0}catch(qe){console.error("[market-review] 复盘详情加载失败:",qe),M.value=!0}finally{w===v&&(S.value=!1)}}function Y(i){return i>0?"up":i<0?"down":"flat"}function te(i){return i==null||isNaN(Number(i))?"—":(i>0?"+":"")+Number(i).toFixed(2)+"%"}function I(i){const w={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(i||{}).map(function(qe){const Oe=qe[0],We=qe[1],pt=!We||We==="unavailable"||We==="数据不可达";return{label:w[Oe]||Oe,value:pt?"数据不可达":We,unavailable:pt}})}const P=a([]),R=a(!1),H=a(!1),ee=a(""),$=a(""),se=a(""),j=a({}),B=a(!1),A=a(""),p=a(""),x=a([]),le=a([]),K=a(""),T=a(""),c=a(!0),C=a(!0),d=a("20:00"),O=a("default"),ie=a(!1),J=a(""),Q=e(function(){return P.value.find(function(i){return i.id===se.value})||null});async function _(i,w){w=w||{},w.headers=Object.assign({},w.headers||{});const qe=localStorage.getItem("quant_token")||"";return qe&&(w.headers.Authorization="Bearer "+qe),fetch(i,w)}async function f(){const i=++v;R.value=!0,H.value=!1,ee.value="",$.value="";try{const w=await _("/api/strategies").then(function(Oe){return Oe.json()});if(i!==v)return;let qe=null;Array.isArray(w)?qe=w:w&&Array.isArray(w.strategies)?(qe=w.strategies,w.warn&&($.value=String(w.warn))):(H.value=!0,ee.value=w&&w.detail?String(w.detail):"策略列表加载失败（接口返回异常）"),qe!==null&&(P.value=qe,P.value.length&&!se.value&&(se.value=P.value[0].id,Z()))}catch(w){console.error("[research] 策略列表加载失败:",w),H.value=!0,ee.value="策略列表加载失败: "+(w&&w.message||"网络错误")}finally{i===v&&(R.value=!1)}}function Z(){const i=Q.value;i&&(j.value={},i.schema.forEach(function(w){j.value[w.key]=w.default}),p.value="",X(),pe(),Ee())}async function pe(){if(!se.value){le.value=[];return}try{const i=await _("/api/strategies/"+se.value+"/profiles").then(function(w){return w.json()});le.value=i&&i.data&&i.data.profiles||[],K.value=""}catch(i){console.error("[research] 方案列表加载失败:",i),le.value=[]}}async function we(){y.value=!0;const i=(T.value||"").trim();if(!i){window._core&&window._core.showToast("请输入方案名称");return}try{const w=await _("/api/strategies/"+se.value+"/profiles",{method:"POST",body:JSON.stringify({name:i,params:j.value})}).then(function(qe){return qe.json()});if(w&&w.detail){window._core&&window._core.showToast(String(w.detail));return}T.value="",await pe(),window._core&&window._core.showToast("方案已保存")}catch(w){console.error("[research] 方案保存失败:",w),window._core&&window._core.showToast("方案保存失败")}}function Me(){const i=le.value.find(function(w){return w.id===K.value});i&&(Object.keys(i.params||{}).forEach(function(w){j.value[w]=i.params[w]}),window._core&&window._core.showToast("已应用方案: "+i.name))}async function Ve(){if(K.value)try{await _("/api/strategies/"+se.value+"/profiles/"+K.value,{method:"DELETE"}).then(function(i){return i.json()}),await pe(),window._core&&window._core.showToast("方案已删除")}catch(i){console.error("[research] 方案删除失败:",i)}}async function Ee(){try{const i=await _("/api/strategies/governance").then(function(Oe){return Oe.json()}),qe=(i&&i.data&&i.data.strategies||{})[se.value]||{};c.value=qe.enabled!==!1,d.value=qe.schedule||"20:00",O.value=qe.universe==="all"?"all":"default",C.value=qe.show_in_calendar!==!1,J.value=qe.last_holdings||""}catch(i){console.error("[research] 纳管状态加载失败:",i)}}async function _e(){try{await _("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const i={};return i[se.value]={enabled:c.value,schedule:d.value,universe:O.value,show_in_calendar:C.value},i}()})}).then(function(i){return i.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(i){console.error("[research] 纳管更新失败:",i)}}async function ne(){if(se.value){ie.value=!0;try{const i=await _("/api/strategies/"+se.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:A.value||void 0})}).then(function(w){return w.json()});if(i&&i.detail){window._core&&window._core.showToast(String(i.detail));return}window._core&&window._core.showToast("持仓已生成"),await Ee()}catch(i){console.error("[research] run-once 失败:",i),window._core&&window._core.showToast("持仓生成失败")}finally{ie.value=!1}}}function ke(){J.value&&window.open(J.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function De(){const i=Q.value;if(!i)return;const w=(T.value||"").trim()||i.name+"-副本";oe(w,Object.assign({},j.value)),window._core&&window._core.showToast("已复制为副本方案: "+w)}async function oe(i,w){try{await _("/api/strategies/"+se.value+"/profiles",{method:"POST",body:JSON.stringify({name:i,params:w})}).then(function(qe){return qe.json()}),await pe()}catch(qe){console.error("[research] 副本保存失败:",qe)}}async function X(){const i=++v;if(se.value)try{const w=await _("/api/strategies/"+se.value+"/runs?limit=5").then(function(qe){return qe.json()});if(i!==v)return;x.value=Array.isArray(w)?w:[]}catch{x.value=[]}}async function ge(){if(se.value){B.value=!0;try{const i=await _("/api/strategies/"+se.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:j.value,as_of:A.value||void 0})}).then(function(w){return w.json()});i&&i.status==="success"?X():alert("运行失败: "+(i.detail||JSON.stringify(i)))}catch(i){console.error("[research] 策略运行失败:",i),alert("运行失败: "+i.message)}finally{B.value=!1}}}async function Te(){if(se.value)try{const i=Object.keys(j.value).map(function(qe){return encodeURIComponent(qe)+"="+encodeURIComponent(j.value[qe])}).join("&"),w=await _("/api/strategies/"+se.value+"/ptrade-code?"+i).then(function(qe){return qe.json()});w&&w.code?p.value=w.code:alert("导出失败: "+(w.detail||JSON.stringify(w)))}catch(i){console.error("[research] PTrade 导出失败:",i),alert("导出失败: "+i.message)}}function Le(){if(!p.value)return;const i=document.createElement("textarea");i.value=p.value,document.body.appendChild(i),i.select();try{document.execCommand("copy")}catch{}document.body.removeChild(i)}m(function(){return h.currentPage.value+"/"+h.currentSubPage.value},function(i){i==="research/research-overview"&&(f(),b(),re(),ta()),(i==="research/market-review"||i==="shortterm/market-review")&&!D.value&&b(),i==="research/quant-research"&&f(),i==="research/backtest-history"&&Pe()},{immediate:!0});const Qe=a("mom20"),vt=a(!1),Ze=a(!1),Ye=a(null),it=a(null),me=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],xe=a('{"top_n":[10,20,30]}'),Re=a(null),Ie=a(""),nt=a(!1),et=a(null);async function $e(){if(!se.value){ElementPlus.ElMessage.warning("请先选择策略");return}let i;try{i=JSON.parse(xe.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!i||Object.keys(i).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}nt.value=!0,Re.value=null,Ie.value="";try{const w=await fetch("/api/strategies/"+se.value+"/sweep",{method:"POST",headers:V(),body:JSON.stringify({param_grid:i})}).then(function(qe){return qe.json()});w&&Array.isArray(w.results)?(Re.value=w.results,Ie.value="完成 "+w.count+" 组"+(w.data_degraded?" (数据不可达, 结果降级)":""),et.value=w.param_stability||null):Ie.value=w&&w.detail||"扫描失败"}catch(w){console.error("[sweep]",w),Ie.value="扫描失败: "+w.message}finally{nt.value=!1}}async function bt(){const i=++v;vt.value=!0;try{const w=await _("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:se.value||"multi_factor",factor_key:Qe.value,params:j.value||{}})}).then(function(Oe){return Oe.json()}),qe=w&&w.report?w.report.n1||{}:{};Ye.value=qe}catch(w){console.error("[research] 因子IC分析失败:",w),alert("因子 IC 分析失败: "+w.message)}finally{i===v&&(vt.value=!1)}}async function St(){const i=++v;Ze.value=!0;try{const w=await _("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:se.value||"multi_factor",factor_key:Qe.value,params:j.value||{}})}).then(function(qe){return qe.json()});w&&w.layers?it.value=w:alert("分层回测: "+(w.message||"无数据"))}catch(w){console.error("[research] 分层回测失败:",w),alert("分层回测失败: "+w.message)}finally{i===v&&(Ze.value=!1)}}const ht=a(null),tt=a(!1);async function jt(){const i=++v;tt.value=!0,ht.value=null;try{const w=await _("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:se.value||"multi_factor",factor_key:Qe.value,params:j.value||{}})}).then(function(qe){return qe.json()});w&&w.detail?ht.value=w.detail:alert("因子详情: "+(w.message||"无数据"))}catch(w){console.error("[research] 因子详情失败:",w),alert("因子详情失败: "+w.message)}finally{i===v&&(tt.value=!1)}}const Mt=a([]),_t=a(null),ft=a(null),Tt=a(null),q=a(""),ue=a(!1),be=a(!1),Ce=a(""),Ae=a(""),Ue=a("");function V(){const i=localStorage.getItem("quant_token")||"";return i?{Authorization:"Bearer "+i,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function re(){const i=++v;try{const w=await fetch("/api/strategies/variants",{headers:V()}).then(function(qe){return qe.json()});if(i!==v)return;Mt.value=w&&w.data&&w.data.variants||[]}catch(w){console.error("[i3a] 加载 variants 失败:",w)}}async function Be(){if(!se.value){Ce.value="请先在量化研究选择母本策略";return}be.value=!0,Ce.value="";try{const i=await fetch("/api/strategies/"+se.value+"/clone",{method:"POST",headers:V(),body:JSON.stringify({name:(T.value||"").trim()||void 0,params:Object.assign({},j.value)})}).then(function(qe){return qe.json()});if(i&&i.detail){Ce.value=String(i.detail);return}const w=i&&i.data;w&&w.sid&&(_t.value=w.sid,Ce.value="已复制为新策略: "+w.name,await re(),await rt(w.sid))}catch(i){console.error("[i3a] 复制失败:",i),Ce.value="复制失败: "+i.message}finally{be.value=!1}}async function Xe(i){_t.value=i,Ce.value="",q.value="",await rt(i)}async function rt(i){try{const w=await fetch("/api/strategies/"+i+"/selection-spec",{headers:V()}).then(function(qe){return qe.json()});w&&w.data&&w.data.spec&&(ft.value=Object.assign({},w.data.spec),Tt.value=w.data.fields,Ae.value=(w.data.spec.industry_scope||[]).join(","),Ue.value=(w.data.spec.market_cap_range||[]).join(","))}catch(w){console.error("[i3a] 加载 spec 失败:",w)}}async function xt(){if(z.value=!0,!(!_t.value||!ft.value))try{ft.value.industry_scope=Ae.value?Ae.value.split(/[,，]/).map(function(w){return w.trim()}).filter(Boolean):[],ft.value.market_cap_range=Ue.value?Ue.value.split(/[,，]/).map(Number).filter(function(w){return!isNaN(w)}):[];const i=await fetch("/api/strategies/"+_t.value+"/selection-spec",{method:"PUT",headers:V(),body:JSON.stringify({spec:ft.value})}).then(function(w){return w.json()});i&&i.data&&i.data.spec&&(ft.value=i.data.spec,Ce.value="SelectionSpec 已保存")}catch(i){console.error("[i3a] 保存 spec 失败:",i),Ce.value="保存失败"}}async function Vt(){if(!_t.value){Ce.value="请先选择/创建微调策略";return}be.value=!0,Ce.value="";try{const i=await fetch("/api/strategies/"+_t.value+"/run-once",{method:"POST",headers:V(),body:"{}"}).then(function(w){return w.json()});Ce.value=i&&i.detail?String(i.detail):"持仓已生成: "+(i&&i.data&&i.data.symbols||0)+" 只"}catch(i){console.error("[i3a] run-once 失败:",i),Ce.value="生成持仓失败"}finally{be.value=!1}}async function Ct(){if(!_t.value){Ce.value="请先选择/创建微调策略";return}ft.value||await rt(_t.value),ue.value=!0,Ce.value="";try{const i=await fetch("/api/strategies/"+_t.value+"/ai-trade-code",{method:"POST",headers:V(),body:JSON.stringify({spec:ft.value})}).then(function(w){return w.json()});if(i&&i.detail){Ce.value=String(i.detail);return}i&&i.data&&(q.value=i.data.code||"",i.data.api_errors&&i.data.api_errors.length?Ce.value="生成成功(含 API 校验告警 "+i.data.api_errors.length+" 条)":Ce.value="AI 交易码已生成, 已通过矩阵内校验")}catch(i){console.error("[i3a] AI 交易码失败:",i),Ce.value="AI 生成失败: "+i.message}finally{ue.value=!1}}function Pt(){if(q.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(q.value).then(function(){Ce.value="代码已复制"});else{const i=document.createElement("textarea");i.value=q.value,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),Ce.value="代码已复制"}}const mt=a(""),Dt=a(""),wt=a([]),Nt=a(""),Yt=a(""),ct=a(""),yt=a(null),Ht=a(!1),Je=a(!1),Xt=a(!1);function Bt(){const i=localStorage.getItem("quant_token")||"";return i?{Authorization:"Bearer "+i,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ta(){const i=++v;try{const w=await fetch("/api/strategies/custom",{headers:Bt()}).then(function(qe){return qe.json()});if(i!==v)return;wt.value=w&&w.data&&w.data.customs||[]}catch(w){console.error("[i3b] 加载自定义策略失败:",w)}}async function ha(){if(!Dt.value.trim()){ct.value="请描述策略思路";return}Ht.value=!0,ct.value="";try{const i=await fetch("/api/strategies/custom",{method:"POST",headers:Bt(),body:JSON.stringify({name:mt.value.trim()||"自定义策略",prompt:Dt.value})}).then(function(w){return w.json()});if(i&&i.detail){ct.value=String(i.detail);return}i&&i.data&&(Yt.value=i.data.code||"",ct.value="AI 代写成功: "+i.data.sid+(i.data.api_errors&&i.data.api_errors.length?" (API 告警 "+i.data.api_errors.length+" 条)":" (校验通过)"),await ta())}catch(i){console.error("[i3b] AI 代写失败:",i),ct.value="AI 代写失败: "+i.message}finally{Ht.value=!1}}async function aa(){if(Nt.value)try{const i=await fetch("/api/strategies/custom/"+Nt.value+"/code",{headers:Bt()}).then(function(w){return w.json()});i&&i.data&&(Yt.value=i.data.code||"",ct.value="")}catch(i){console.error("[i3b] 读取代码失败:",i)}}async function sa(){if(!Nt.value){ct.value="请先选择自定义策略";return}Je.value=!0,ct.value="";try{const i=await fetch("/api/strategies/custom/"+Nt.value+"/backtest",{method:"POST",headers:Bt(),body:"{}"}).then(function(w){return w.json()});if(i&&i.detail){ct.value=String(i.detail);return}i&&i.data&&(yt.value=i.data,ct.value="回测完成")}catch(i){console.error("[i3b] 回测失败:",i),ct.value="回测失败: "+i.message}finally{Je.value=!1}}async function ca(){if(!Nt.value){ct.value="请先选择自定义策略";return}Xt.value=!0,ct.value="";try{const i=await fetch("/api/strategies/custom/"+Nt.value+"/ai-optimize",{method:"POST",headers:Bt(),body:JSON.stringify({backtest:yt.value})}).then(function(w){return w.json()});if(i&&i.detail){ct.value=String(i.detail);return}i&&i.data&&(Yt.value=i.data.code||"",ct.value="AI 优化完成"+(i.data.api_errors&&i.data.api_errors.length?" (API 告警 "+i.data.api_errors.length+" 条)":" (校验通过)"))}catch(i){console.error("[i3b] AI 优化失败:",i),ct.value="AI 优化失败: "+i.message}finally{Xt.value=!1}}function Jt(){if(Yt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Yt.value).then(function(){ct.value="代码已复制"});else{const i=document.createElement("textarea");i.value=Yt.value,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),ct.value="代码已复制"}}const da=Vue.ref([]),N=Vue.ref(!1),he=Vue.ref(!1),je=Vue.ref(30);async function Pe(){const i=++v;N.value=!0,he.value=!1;try{const w=window.__quantModules&&window.__quantModules.core||{},qe=typeof w.authHeaders=="function"?w.authHeaders():{},Oe=await fetch("/api/backtest/history?days="+je.value,{headers:qe}).then(function(We){return We.json()});if(i!==v)return;da.value=Oe&&Oe.data||[]}catch(w){console.error("[backtest] 回测历史加载失败:",w),he.value=!0}finally{i===v&&(N.value=!1)}}const at=Vue.ref([]),st=Vue.ref(!1),Lt=Vue.ref(!1),Ot=Vue.ref(""),Kt=Vue.ref([]),Zt=Vue.ref(""),xa=Vue.ref([]),ea=Vue.ref(!1),ya=Vue.ref(!1),ua={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function Wt(i){return ua[i]||i||"—"}function ba(i){h&&h.navigateTo&&h.navigateTo("shortterm",i)}function va(){h.currentSubPage.value="research-history",Sa()}async function Sa(){const i=++v;st.value=!0,Lt.value=!1;try{const w=window.__quantModules&&window.__quantModules.core||{},qe=typeof w.authHeaders=="function"?w.authHeaders():{},Oe=Ot.value?"?type="+encodeURIComponent(Ot.value):"",We=await fetch("/api/strategies/research-history"+Oe,{headers:qe}).then(function(pt){return pt.json()});if(i!==v)return;at.value=We&&We.items||[]}catch(w){console.error("[research-history] 加载失败:",w),Lt.value=!0}finally{i===v&&(st.value=!1)}}async function Ta(){const i=++v;ya.value=!0;try{const w=window.__quantModules&&window.__quantModules.core||{},qe=typeof w.authHeaders=="function"?w.authHeaders():{},Oe=Ot.value?"?type="+encodeURIComponent(Ot.value):"",We=await fetch("/api/strategies/research-history/export"+Oe,{headers:qe});if(!We.ok)throw new Error("HTTP "+We.status);const pt=await We.blob(),gt=URL.createObjectURL(pt),Ft=document.createElement("a");Ft.href=gt,Ft.download="research_history.csv",document.body.appendChild(Ft),Ft.click(),document.body.removeChild(Ft),URL.revokeObjectURL(gt)}catch(w){console.error("[research-history] 导出失败:",w)}finally{i===v&&(ya.value=!1)}}function Qt(i){const w=Kt.value.indexOf(i);w>=0?Kt.value.splice(w,1):Kt.value.length<10&&Kt.value.push(i)}function L(i){Zt.value=Zt.value===i?"":i}async function ae(){const i=++v,w=Kt.value;if(!(w.length<2)){ea.value=!0;try{const qe=window.__quantModules&&window.__quantModules.core||{},Oe=typeof qe.authHeaders=="function"?qe.authHeaders():{},We=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},Oe),body:JSON.stringify({ids:w})}).then(function(pt){return pt.json()});xa.value=We&&We.items||[]}catch(qe){console.error("[research-history] 对比失败:",qe)}finally{i===v&&(ea.value=!1)}}}async function de(i){try{const w=window.__quantModules&&window.__quantModules.core||{},qe=typeof w.authHeaders=="function"?w.authHeaders():{},Oe=await fetch("/api/strategies/research-history/"+i,{method:"DELETE",headers:qe}).then(function(We){return We.json()});if(Oe&&Oe.deleted){at.value=at.value.filter(function(pt){return pt.id!==i});const We=Kt.value.indexOf(i);We>=0&&Kt.value.splice(We,1)}}catch(w){console.error("[research-history] 删除失败:",w)}}return{...h,strategyManageMode:r,openStrategyManage:g,btHistory:da,btHistoryLoading:N,btHistoryError:he,btHistoryDays:je,loadBtHistory:Pe,researchHistory:at,researchHistoryLoading:st,researchHistoryError:Lt,researchHistoryType:Ot,researchHistorySelected:Kt,researchDetailId:Zt,researchCompareRows:xa,researchCompareLoading:ea,researchTypeLabel:Wt,goShortterm:ba,openResearchHistory:va,loadResearchHistory:Sa,researchExportLoading:ya,exportResearchHistory:Ta,toggleResearchSelect:Qt,toggleResearchDetail:L,runResearchCompare:ae,deleteResearchHistory:de,marketReviews:o,marketReviewLoading:E,marketReviewError:l,selectedReviewDate:D,marketReviewDetail:k,marketReviewDetailLoading:S,marketReviewDetailError:M,loadMarketReviews:b,openMarketReview:n,toggleMarketReviewDate:s,backToMarketReviewList:G,loadMarketReviewDetail:W,marketReviewChgClass:Y,marketReviewChgText:te,marketReviewSrcEntries:I,fmtPct:u,fmtEmotion:F,strategies:P,strategiesLoading:R,strategiesError:H,strategiesErrorText:ee,strategiesWarn:$,activeStrategyId:se,activeStrategy:Q,paramValues:j,strategyRunning:B,ptradeCode:p,strategyRuns:x,savingProfile:y,variantSaving:z,loadStrategies:f,onStrategyChange:Z,runActiveStrategy:ge,exportActivePtradeCode:Te,copyPtradeCode:Le,profiles:le,profileSelect:K,profileName:T,loadProfiles:pe,saveProfile:we,applyProfile:Me,deleteProfile:Ve,govEnabled:c,govSchedule:d,govUniverse:O,govRunning:ie,lastHoldings:J,loadGov:Ee,updateGov:_e,runOnceActive:ne,openLastHoldings:ke,cloneStrategy:De,govShowCalendar:C,factorKey:Qe,factorIcLoading:vt,factorLayerLoading:Ze,factorIcReport:Ye,factorLayerResult:it,factorOptions:me,runFactorIc:bt,runFactorLayer:St,factorDetail:ht,factorDetailLoading:tt,runFactorDetail:jt,variants:Mt,variantSelected:_t,variantSpec:ft,specFields:Tt,aiCode:q,aiCodeLoading:ue,variantBusy:be,variantMsg:Ce,loadVariants:re,cloneNewStrategy:Be,selectVariant:Xe,loadVariantSpec:rt,saveVariantSpec:xt,runVariantOnce:Vt,genVariantAiCode:Ct,copyVariantCode:Pt,customName:mt,customPrompt:Dt,customs:wt,customSelected:Nt,customCode:Yt,customMsg:ct,customBtResult:yt,customGenLoading:Ht,customBtLoading:Je,customOptLoading:Xt,loadCustoms:ta,genCustomCode:ha,loadCustomCode:aa,runCustomBacktest:sa,runCustomOptimize:ca,copyCustomCode:Jt,sweepGrid:xe,sweepResult:Re,sweepMessage:Ie,sweepLoading:nt,sweepStability:et,runSweep:$e}}}})();(function(){const{inject:a,ref:e,onMounted:m,computed:t,nextTick:h}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="shortterm-split" data-split-root>
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
                </div>`,setup(){const y=a("qcState");if(!y)return{};const z=y.currentPage,v=y.currentSubPage,r=e(""),g=e(null),o=e(!1),E=e(!1),l=e("数据加载失败"),D=e("请检查服务后重试"),k=e(null),S=e(null),M=e(!1),b=e(!1),n=e("数据加载失败"),s=e("请检查服务后重试"),u=e(null),F=e(1),G=50,W=t(function(){const N=S.value||[];if(N.length<=200)return N;const he=(F.value-1)*G;return N.slice(he,he+G)}),Y=e(null),te=e(!1),I=e(!1),P=e("数据加载失败"),R=e("请检查服务后重试"),H=e([]),ee=e(!1);async function $(){ee.value=!0;try{const N=await De("/api/shortterm/dates/summary",!1);N&&N.success&&(H.value=N.dates||[])}catch{H.value=[]}finally{ee.value=!1}}function se(N){N!==r.value&&(r.value=N,rt(!0))}const j=e("行业资金流"),B=e("今日"),A=e(""),p=e(null),x=e(1),le=e(!1),K=e(!1),T=e("数据加载失败"),c=e("请检查服务后重试"),C=e(""),d=e(null),O=e(!1),ie=e(null),J=e(!1),Q=e(!1),_=e(""),f=e(""),Z=e(!1);function pe(){const N=localStorage.getItem("quant_token")||"";return N?{Authorization:"Bearer "+N,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const we={},Me=[],Ve=50,Ee=60*1e3;let _e=0,ne=0,ke=0;function De(N,he){const je=Date.now(),Pe=we[N];return!he&&Pe&&je-Pe.ts<Ee?Promise.resolve(Pe.data):fetch(N,{headers:pe()}).then(function(at){return at.json()}).then(function(at){if(we[N]||Me.push(N),we[N]={ts:Date.now(),data:at},Me.length>Ve){const st=Me.shift();delete we[st]}return at})}async function oe(N){const he=++_e;o.value=!0,E.value=!1;try{const je="/api/shortterm/pools"+(r.value?"?date="+r.value:""),Pe=await De(je,N);if(he!==_e)return;Pe&&Pe.success?(g.value=Pe,h(re)):Pe&&Pe.detail?(E.value=!0,l.value=String(Pe.detail),D.value="请先登录后再查看"):(E.value=!0,l.value="数据加载失败",D.value="请检查服务后重试")}catch{if(he!==_e)return;E.value=!0,l.value="数据加载失败",D.value="请检查服务后重试"}finally{he===_e&&(o.value=!1)}}async function X(N){const he=++_e;M.value=!0,b.value=!1;try{const je="/api/shortterm/lhb"+(r.value?"?date="+r.value:""),Pe=await De(je,N);if(he!==_e)return;Pe&&Pe.success?(S.value=Array.isArray(Pe.rows)?Pe.rows:null,u.value=Pe.available===!1&&Pe.reason||null,F.value=1):Pe&&Pe.detail?(b.value=!0,n.value=String(Pe.detail),s.value="请先登录后再查看"):(b.value=!0,n.value="数据加载失败",s.value="请检查服务后重试")}catch{if(he!==_e)return;b.value=!0,n.value="数据加载失败",s.value="请检查服务后重试"}finally{he===_e&&(M.value=!1)}}const ge=t(function(){const N=g.value&&g.value.ladder&&g.value.ladder.tiers;return!N||!Object.keys(N).length?"—":Object.keys(N).sort(function(he,je){return he-je}).map(function(he){return he+"板:"+N[he]}).join(" ")}),Te=t(function(){const N=g.value&&g.value.zt||[];return k.value?N.filter(function(he){return he.boards===k.value}):N});function Le(){k.value=null}const Qe=t(function(){const N=Y.value&&Y.value.emotion&&Y.value.emotion.money_effect;return!N||!N.available?"—":N.source==="settled"?"定稿记录":N.source==="realtime"?N.partial?"实时(样本不全)":"实时":"—"}),vt=t(function(){const N=Y.value&&Y.value.emotion&&Y.value.emotion.promotion&&Y.value.emotion.promotion.tiers&&Y.value.emotion.promotion.tiers["1进2"];return N?N.rate:null}),Ze=t(function(){const N=Y.value&&Y.value.emotion&&Y.value.emotion.sentiment_cycle;return N&&N.available&&N.current_score!=null?N.current_score.toFixed(2):"—"}),Ye=t(function(){const N=Y.value&&Y.value.emotion&&Y.value.emotion.sentiment_cycle;return!N||!N.available?"—":(N.trend||"—")+(N.day_n!=null?" · 距低谷"+N.day_n+"天":"")});t(function(){const N=Y.value&&Y.value.emotion;if(!N)return"";const he=[];for(const je of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Pe=N[je];Pe&&Pe.available===!1&&Pe.reason&&he.push(String(Pe.reason).replace(/^[[^]]*]s*/,""))}return he.join("；")}),t(function(){const N=Y.value&&Y.value.facts;if(!N)return"";const he=[];for(const je of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Pe=N[je];Pe&&Pe.available===!1&&Pe.reason&&he.push(String(Pe.reason).replace(/^[[^]]*]s*/,""))}return he.join("；")});function it(N){return N==null||isNaN(N)?"—":(N*100).toFixed(0)+"%"}function me(N,he){return N==null?"—":(typeof N=="number"?Math.round(N*100)/100:N)+(he||"")}function xe(N){return"tag-chip mr-4"}function Re(N){return N==null?"":N>0?"is-rise":N<0?"is-fall":""}function Ie(N){return N==="机构"?"is-institution":N==="游资"?"is-hotmoney":N==="主力"?"is-main":""}const nt=t(function(){const N=Y.value&&Y.value.session_status;if(!N)return"—";const he=Y.value.date;return he===N.latest_session&&N.settled?"✅ 已收盘":he===N.today&&N.is_trade_day&&!N.settled?"⏳ 盘中 · 未收盘":"📅 历史交易日"}),et=t(function(){const N=Y.value&&Y.value.session_status;if(!N)return"";const he=Y.value.date;return he===N.latest_session&&N.settled?"is-institution":he===N.today&&N.is_trade_day&&!N.settled?"is-main":""});function $e(N){N&&N.ts_code&&y&&y.showStockDetail&&y.showStockDetail(N.ts_code)}const bt=t(function(){return(S.value||[]).filter(function(N){return(N.tags||[]).indexOf("机构")>=0}).reduce(function(N,he){return N+(he.net_buy||0)},0)}),St=t(function(){return(S.value||[]).filter(function(N){return(N.tags||[]).indexOf("游资")>=0}).length}),ht=t(function(){const N=(p.value||[]).filter(function(he){return he.main_net_inflow!=null});return N.length?N.reduce(function(he,je){return he.main_net_inflow>=je.main_net_inflow?he:je}):null}),tt=t(function(){const N=ht.value;return N?N.name:"—"}),jt=t(function(){const N=ht.value;return N?N.main_net_inflow:null}),Mt=t(function(){return C.value||"东财"}),_t=t(function(){const N=(A.value||"").trim(),he=p.value||[];return N?he.filter(function(je){return je.name&&String(je.name).indexOf(N)>=0}):he});function ft(N){A.value=N||"",y&&y.currentSubPage&&(y.currentSubPage.value="sector")}const Tt=t(function(){const N=_t.value;if(N.length<=200)return N;const he=(x.value-1)*G;return N.slice(he,he+G)}),q=["09:25","09:35","10:00","11:30","14:00","15:00"],ue=t(function(){const N={};return(ie.value||[]).forEach(function(he){N[he.slot]=!0}),N});function be(N){return ue.value[N]?"is-done":N===Ce.value?"is-current":"is-empty"}const Ce=t(function(){const N=new Date,he=(N.getHours()<10?"0":"")+N.getHours(),je=(N.getMinutes()<10?"0":"")+N.getMinutes(),Pe=he+":"+je;for(var at=0;at<q.length;at++)if(Pe===q[at])return q[at];for(var st=0;st<q.length-1;st++){var Lt=q[st],Ot=new Date;Ot.setHours(Number(Lt.split(":")[0]),Number(Lt.split(":")[1]),0,0);var Kt=new Date(Ot.getTime()+8*6e4);if(N>=Ot&&N<=Kt)return Lt}return""}),Ae=t(function(){const N=new Date,he=Ce.value;if(he)return"当前处于快照窗口 "+he+" (前后 8 分钟) — 可采集";const je=N.getHours(),Pe=N.getMinutes();let at="";for(let st=0;st<q.length;st++){const Lt=q[st].split(":");if(Number(Lt[0])>je||Number(Lt[0])===je&&Number(Lt[1])>Pe){at=q[st];break}}return at?"下一快照时点 "+at+" — 非窗口期不可采集":"今日快照时点已全部结束"}),Ue=e(""),V=e("info");function re(){const N=g.value&&g.value.ladder&&g.value.ladder.tiers;if(!N||!Object.keys(N).length)return;const he=window.__quantModules&&window.__quantModules.charts;if(!he||!he.renderSimpleChartTo)return;const je=k.value,Pe=he.renderSimpleChartTo("shorttermLadderChart",function(){const at=Object.keys(N).sort(function(st,Lt){return Number(st)-Number(Lt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:at.map(function(st){return st+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(st){return je&&Number(at[st.dataIndex])===je?"var(--color-accent)":"var(--chart-split)"}},data:at.map(function(st){return N[st]})}]}},{key:"shortterm-ladder"});Pe&&Pe.off&&(Pe.off("click"),Pe.on("click",function(at){if(!at||!at.name)return;const st=parseInt(at.name,10);isNaN(st)||(k.value=k.value===st?null:st)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(re);function Be(N){if(N==null)return"—";const he=Math.abs(N);return he>=1e8?(N/1e8).toFixed(2)+"亿":he>=1e4?(N/1e4).toFixed(0)+"万":N.toFixed(0)}function Xe(N){return N==null?"—":(N>=0?"+":"")+N.toFixed(2)+"%"}async function rt(N){const he=++ne;te.value=!0,I.value=!1;try{const je="/api/shortterm/overview"+(r.value?"?date="+r.value:""),Pe=await De(je,N);if(he!==ne)return;Pe&&Pe.success?Y.value=Pe:Pe&&Pe.detail?(I.value=!0,P.value=String(Pe.detail),R.value="请先登录后再查看"):(I.value=!0,P.value="数据加载失败",R.value="请检查服务后重试")}catch{if(he!==ne)return;I.value=!0,P.value="数据加载失败",R.value="请检查服务后重试"}finally{he===ne&&(te.value=!1)}}async function xt(N){const he=++_e;le.value=!0,K.value=!1;try{const je="/api/shortterm/sector-flow?indicator="+encodeURIComponent(B.value)+"&sector_type="+encodeURIComponent(j.value),Pe=await De(je,N);if(he!==_e)return;Pe&&Pe.success&&Pe.available?(p.value=Pe.rows||[],C.value=Pe.source||(Pe.note?"同花顺":"东财"),x.value=1):Pe&&Pe.reason?(K.value=!0,T.value="数据加载失败",c.value=String(Pe.reason).replace(/^\[⚠️[^\]]*\]\s*/,"")):Pe&&Pe.detail?(K.value=!0,T.value=String(Pe.detail),c.value="请先登录后再查看"):(K.value=!0,T.value="数据加载失败",c.value="请检查服务后重试")}catch{if(he!==_e)return;K.value=!0,T.value="数据加载失败",c.value="请检查服务后重试"}finally{he===_e&&(le.value=!1)}}async function Vt(N){const he=++ke;try{const je="/api/shortterm/review"+(r.value?"?date="+r.value:""),Pe=await De(je,N);if(he!==ke)return;Pe&&Pe.success&&(d.value=Pe.review||null)}catch{}}async function Ct(){O.value=!0;try{const N="/api/shortterm/review"+(r.value?"?date="+r.value:""),he=await fetch(N,{method:"POST",headers:pe()}).then(function(je){return je.json()});he&&he.success&&(d.value=he,we[N]={ts:Date.now(),data:he})}catch{}finally{O.value=!1}}async function Pt(){const N=_.value.trim();if(N){Z.value=!0,f.value="";try{const je=await fetch("/api/shortterm/review/chat",{method:"POST",headers:pe(),body:JSON.stringify({date:overviewDate.value,question:N})}).then(function(Pe){return Pe.json()});f.value=je.answer||"[无回复]"}catch{f.value="[⚠️ 发送失败]"}finally{Z.value=!1}}}async function mt(N){const he=++_e;J.value=!0;try{const je="/api/shortterm/intraday"+(r.value?"?date="+r.value:""),Pe=await De(je,N);if(he!==_e)return;Pe&&Pe.success&&(ie.value=Pe.snapshots||[])}catch{}finally{he===_e&&(J.value=!1)}}async function Dt(){Q.value=!0;try{const N="/api/shortterm/intraday/snapshot"+(r.value?"?date="+r.value:""),he=await fetch(N,{method:"POST",headers:pe()}).then(function(je){return je.json()});he&&he.success?(he.accepted?(Ue.value="✅ 已采集 "+he.slot+" 快照"+(he.pools_available&&!he.pools_available.zt?" (池源部分不可用)":""),V.value="ok"):(Ue.value="⏱ "+(he.reason||"非快照时点"),V.value="warn"),mt()):Ue.value="采集失败, 请稍后重试"}catch{Ue.value="采集失败, 请稍后重试"}finally{Q.value=!1}}function wt(){return De("/api/shortterm/latest-session",!1).then(function(N){N&&N.date&&(r.value||(r.value=N.date))}).catch(function(){})}function Nt(){const N=v.value;N==="ztpool"?oe():N==="lhb"?X():N==="overview"?(rt(),Vt()):N==="sector"?xt():N==="intraday"&&mt()}function Yt(){const N=r.value?"?date="+r.value:"";["/api/shortterm/overview"+N,"/api/shortterm/pools"+N,"/api/shortterm/lhb"+N].forEach(function(je){De(je,!1).catch(function(){})})}function ct(){const N=v.value;N==="ztpool"?oe(!0):N==="lhb"?X(!0):N==="overview"?(rt(!0),Vt(!0)):N==="sector"?xt(!0):N==="intraday"&&mt(!0)}m(function(){wt(),Nt(),Yt(),sa(),$()}),Vue.watch(function(){return v.value},function(N){Nt(),N==="overview"&&sa()});const yt=window.QuantOnboarding,Ht=e(!1),Je=e(yt?yt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),Xt=t(function(){return yt&&yt.shorttermTourSteps()[Je.value.stepIndex]||{key:"",title:"",desc:""}}),Bt=t(function(){return yt?yt.shorttermTourProgress(Je.value):{done:0,total:3,pct:0}}),ta=t(function(){return Je.value.stepIndex>=2});function ha(){if(yt){var N=null;try{N=localStorage.getItem("qc_shortterm_tour")}catch{}if(N){var he=yt.parseState(N);he&&(Je.value=he)}}}function aa(){if(yt){var N=JSON.stringify(Je.value);try{localStorage.setItem("qc_shortterm_tour",N)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:N}})}).catch(function(){})}catch{}}}function sa(){window.__quantGuideModalsEnabled===!0&&yt&&v.value==="overview"&&(ha(),yt.shorttermTourShouldShow(Je.value)&&(Ht.value=!0))}function ca(){Je.value=yt.shorttermTourNext(Je.value),aa()}function Jt(){Je.value=yt.shorttermTourComplete(Je.value),aa(),Ht.value=!1}function da(){Je.value=yt.shorttermTourDismiss(Je.value),aa(),Ht.value=!1}return{currentPage:z,currentSubPage:v,shortDate:r,pools:g,poolLoading:o,poolError:E,ztBoardFilter:k,filteredZt:Te,clearBoardFilter:Le,lhbRows:S,lhbLoading:M,lhbError:b,lhbReason:u,lhbPageRows:W,lhbPage:F,overview:Y,overviewLoading:te,overviewError:I,dateList:H,dateListLoading:ee,loadDateList:$,pickDate:se,sectorType:j,sectorIndicator:B,sectorKeyword:A,sectorRows:p,filteredSectorRows:_t,sectorPageRows:Tt,sectorPage:x,sectorLoading:le,sectorError:K,sectorFlowSource:C,PAGE_SIZE:G,gotoSector:ft,review:d,reviewRunning:O,intradaySnapshots:ie,intradayLoading:J,intradayCollecting:Q,intradaySlots:q,intradayMsg:Ue,slotClass:be,intradayStatus:Ae,chatQuestion:_,chatAnswer:f,chatLoading:Z,loadPools:oe,loadLhb:X,loadOverview:rt,loadSectorFlow:xt,loadReview:Vt,runReview:Ct,sendChat:Pt,loadIntraday:mt,collectSnapshot:Dt,refreshCurrent:ct,ladderText:ge,fmtAmount:Be,fmtPct:Xe,riseFall:Re,tagClass:Ie,openStock:$e,lhbInstitutionNetBuy:bt,lhbHotMoneyCount:St,sectorTopName:tt,sectorTopInflow:jt,sectorSource:Mt,moneySource:Qe,promotion1to2:vt,cycleScore:Ze,cycleTrend:Ye,pct:it,fmtCond:me,verdictClass:xe,sessionStatusText:nt,sessionStatusClass:et,shorttermTourVisible:Ht,shorttermTourState:Je,shorttermTourStep:Xt,shorttermTourProg:Bt,shorttermTourIsLast:ta,shorttermTourNext:ca,shorttermTourFinish:Jt,shorttermTourSkip:da}}}})();(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(v,r,g,o,E){var l=g>0?g:1,D=typeof E=="number"&&E>=0?E:a,k=Math.max(0,o),S=Math.max(0,v),M=Math.max(0,r),b=Math.max(0,Math.floor(S/l)-D),n=Math.min(k,Math.ceil((S+M)/l)+D);return{startIndex:b,endIndex:n}}function m(v,r){return Math.max(0,v||0)*(r>0?r:0)}function t(v,r,g,o,E){var l=v||[],D=e(r,g,o,l.length,E),k=l.slice(D.startIndex,D.endIndex);return{visible:k,startIndex:D.startIndex,endIndex:D.endIndex,offsetY:D.startIndex*(o>0?o:1),totalHeight:m(l.length,o)}}function h(v,r){if(v){if(v.code!=null)return v.code;if(v.id!=null)return v.id;if(v.ts_code!=null)return v.ts_code}return r}function y(v,r,g){var o=v||[];if(!o.length)return r>0?r:1;for(var E=Math.min(g||50,o.length),l=0,D=0,k=0;k<E;k++){var S=o[k]&&o[k].rowHeight;typeof S=="number"&&S>0&&(l+=S,D++)}return D?l/D:r>0?r:1}function z(v,r,g,o,E){var l=e(v,r,g,o,E),D=Math.max(0,o);return D?(l.endIndex-l.startIndex)/D:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:m,sliceVisible:t,getRowKey:h,estimateDynamicRowHeight:y,renderedRatio:z}});(function(){const{ref:a,computed:e,onMounted:m,onBeforeUnmount:t}=Vue,h=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:h.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(y){const z=a(null),v=a(0),r=a(400),g=e(()=>(h.computeVisibleRange||function(s,u,F,G,W){const Y=F>0?F:1,te=W>=0?W:8,I=Math.max(0,G);return{startIndex:Math.max(0,Math.floor(s/Y)-te),endIndex:Math.min(I,Math.ceil((s+u)/Y)+te)}})(v.value,r.value,y.rowHeight,y.items.length,y.buffer)),o=e(()=>y.items.length*y.rowHeight),E=e(()=>g.value.startIndex),l=e(()=>g.value.endIndex),D=e(()=>y.items.slice(E.value,l.value));function k(){z.value&&(v.value=z.value.scrollTop)}function S(){z.value&&(r.value=z.value.clientHeight||400)}function M(n,s){return h.getRowKey?h.getRowKey(n,s):n&&n.code!=null?n.code:n&&n.id!=null?n.id:s}let b=null;return m(()=>{S(),z.value&&typeof ResizeObserver<"u"&&(b=new ResizeObserver(()=>S()),b.observe(z.value))}),t(()=>{b&&b.disconnect()}),{scrollEl:z,totalHeight:o,startIndex:E,endIndex:l,visibleItems:D,onScroll:k,keyOf:M}}}})();(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,m=60,t=500,h=10,y=88,z=350;function v(s,u,F,G,W){W=W||{};var Y=typeof W.threshold=="number"?W.threshold:a,te=typeof W.bias=="number"?W.bias:e,I=F-s,P=G-u;return Math.abs(I)<Y||Math.abs(I)<Math.abs(P)*te?"none":I<0?"left":"right"}function r(s,u,F){F=F||{};var G=typeof F.threshold=="number"?F.threshold:m;return u-s>=G}function g(s,u){u=u||{};var F=typeof u.threshold=="number"?u.threshold:t;return s>=F}var o=!1;function E(s,u){return s&&typeof s.closest=="function"?s.closest(u):null}function l(s){if(!s)return"";var u=s.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(u){var F=u.getAttribute&&u.getAttribute("data-copy-code");if(F)return F.trim();var G=(u.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(G)return G[0]}var W=s.getAttribute&&s.getAttribute("data-copy-code");return W?W.trim():""}function D(s){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(s).then(function(){return!0}).catch(function(){return k(s)}):Promise.resolve(k(s))}function k(s){try{var u=document.createElement("textarea");return u.value=s,u.style.position="fixed",u.style.opacity="0",document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u),!0}catch{return!1}}function S(s){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(s)}function M(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function b(){var s=null,u=null,F=null;function G(){u&&(u.timer&&clearTimeout(u.timer),u=null)}function W(ee){F={el:ee,until:Date.now()+z}}function Y(ee){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function($){$!==ee&&$.classList.remove("swipe-open")}),s&&s.el!==ee&&(s=null)}function te(ee){var $=ee.touches&&ee.touches[0];if($){var se=E(ee.target,".swipe-reveal");se&&(s={el:se,x:$.clientX,y:$.clientY,moved:!1},ee.stopPropagation());var j=E(ee.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");j&&(G(),u={el:j,x:$.clientX,y:$.clientY,timer:setTimeout(function(){var B=l(j);u=null,B&&(W(j),D(B).then(function(){M(),S("已复制代码 "+B)}))},t)})}}function I(ee){if(s){var $=ee.touches&&ee.touches[0];if($){var se=$.clientX-s.x,j=$.clientY-s.y;if(Math.abs(se)>8&&Math.abs(se)>Math.abs(j)*1.2){ee.cancelable&&ee.preventDefault(),s.moved=!0;var B=s.el.querySelector(".swipe-reveal-main")||s.el,A=Math.max(-y,Math.min(0,se));B.style.transition="none",B.style.transform="translateX("+A+"px)",ee.stopPropagation()}if(u){var p=$.clientX-u.x,x=$.clientY-u.y;(Math.abs(p)>h||Math.abs(x)>h)&&G()}}}}function P(ee){if(G(),!!s){var $=s.el,se=ee.changedTouches&&ee.changedTouches[0],j=s.x,B=s.y,A="none";se&&(A=v(j,B,se.clientX,se.clientY));var p=s.moved;s=null;var x=$.querySelector(".swipe-reveal-main")||$;x.style.transform="",x.style.transition="",A==="left"?(Y($),$.classList.add("swipe-open"),W($)):(A==="right"||p)&&$.classList.remove("swipe-open"),ee.stopPropagation()}}function R(){G(),s=null}function H(ee){if(F&&Date.now()<F.until){var $=F.el.contains(ee.target)||ee.target===F.el,se=ee.target.closest&&ee.target.closest(".swipe-reveal-actions");$&&!se&&(ee.preventDefault(),ee.stopPropagation(),F=null)}}document.addEventListener("touchstart",te,!0),document.addEventListener("touchmove",I,!0),document.addEventListener("touchend",P,!0),document.addEventListener("touchcancel",R,!0),document.addEventListener("click",H,!0)}function n(){o||typeof document>"u"||(o=!0,b())}return{judgeSwipe:v,judgePullToRefresh:r,judgeLongPress:g,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:m,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:h,REVEAL_WIDTH:y,initGestures:n,_codeFromRow:l}});(function(){const a={empty:{icon:"📭",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"⚠",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"📡",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function m(y){return a[y]||a.empty}function t(){const y=[];for(const z of e){const v=a[z];v.title||y.push(z+".title"),z!=="loading"&&!v.icon&&y.push(z+".icon"),typeof v.retry!="boolean"&&y.push(z+".retry"),typeof v.skeleton!="boolean"&&y.push(z+".skeleton")}return{ok:y.length===0,errors:y}}const h={VARIANTS:a,KEYS:e,resolve:m,validate:t};typeof window<"u"&&(window.QuantStatePanel=h),typeof ze<"u"&&ze.exports&&(ze.exports=h)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(m){const t=a(()=>typeof e.resolve=="function"?e.resolve(m.type):{}),h=a(()=>m.icon||t.value.icon||""),y=a(()=>m.title||t.value.title||""),z=a(()=>m.desc||t.value.desc||""),v=a(()=>!!t.value.retry),r=a(()=>/^[a-z][a-z0-9-]*$/.test(String(h.value||"")));return{icon:h,title:y,desc:z,retryable:v,isIconName:r}}}})();(function(a,e){typeof ze=="object"&&ze.exports?ze.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(s){return String(s||"").trim().toLowerCase()}function e(s,u){if(!s)return!0;const F=s.split(/\s+/).filter(Boolean);if(!F.length)return!0;const G=String(u||"").toLowerCase();return F.every(function(W){return G.indexOf(W)!==-1})}function m(){return{visible:!1,query:"",activeIndex:0}}function t(s,u){return u===void 0&&(u=!s.visible),s.visible=u,u&&(s.query="",s.activeIndex=0),s.visible}function h(s,u,F){const G=a(s);if(!u||!u.length)return[];const W=[];return u.forEach(function(Y){const te=e(G,Y.name)||e(G,Y.key),I=(Y.subPages||[]).filter(function(P){const R=F&&F[P]||P;return e(G,R)||e(G,P)});te&&W.push({type:"menu",menuKey:Y.key,subPage:Y.subPages&&Y.subPages[0]||"",label:Y.name,subLabel:"页面",icon:Y.icon||"file-text"}),I.forEach(function(P){W.push({type:"menu",menuKey:Y.key,subPage:P,label:F&&F[P]||P,subLabel:Y.name,icon:Y.icon||"file-text"})})}),W.slice(0,8)}function y(s,u){const F=a(s);return!u||!u.length?[]:u.filter(function(G){return!!(!F||e(F,G.label)||e(F,G.key)||G.keywords&&e(F,G.keywords))}).slice(0,8)}function z(s,u){const F=a(s);return!F||!u||!u.length?[]:u.filter(function(G){return e(F,G.code)||e(F,G.name)}).slice(0,8).map(function(G){return{type:"stock",code:G.code,name:G.name,label:G.name,subLabel:G.code,icon:"trending-up"}})}function v(s,u,F){const G=[],W=[];return F&&F.length&&(G.push({key:"stock",label:"股票",items:F}),W.push.apply(W,F)),s&&s.length&&(G.push({key:"menu",label:"菜单",items:s}),W.push.apply(W,s)),u&&u.length&&(G.push({key:"command",label:"指令",items:u}),W.push.apply(W,u)),{groups:G,flat:W}}function r(s,u,F){if(u<=0)return 0;const G=((s||0)+F)%u;return G<0?u-1:G}function g(s,u,F,G){const W=h(s,u,F).map(function(te){return{type:"menu",menuKey:te.menuKey,subPage:te.subPage,label:te.label,subLabel:te.subLabel,icon:te.icon,iconName:te.icon,value:te.icon+" "+te.label+" · "+te.subLabel}}),Y=y(s,G||[]).map(function(te){return{type:"command",key:te.key,label:te.label,icon:te.icon,iconName:te.icon,subLabel:"指令",value:te.icon+" "+te.label}});return W.concat(Y)}function o(s){return s?s.type==="menu"?{action:"menu",menuKey:s.menuKey,subPage:s.subPage}:s.type==="command"?{action:"command",key:s.key}:s.type==="sector"?{action:"sector",name:s.name}:s.type==="strategy"?{action:"strategy",id:s.id,name:s.name}:s.type==="stock"||s.code&&s.name?{action:"stock",code:s.code,name:s.name}:null:null}const E=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var l={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function D(s){if(!s||typeof s!="string")return null;var u=s.split("+").map(function(W){return W.trim()}).filter(Boolean);if(!u.length)return null;var F=u.pop().toLowerCase();if(!F)return null;var G={ctrl:!1,alt:!1,shift:!1,meta:!1};return u.forEach(function(W){var Y=W.toLowerCase();l.ctrl.indexOf(Y)!==-1?G.ctrl=!0:l.alt.indexOf(Y)!==-1?G.alt=!0:l.shift.indexOf(Y)!==-1?G.shift=!0:l.meta.indexOf(Y)!==-1&&(G.meta=!0)}),{ctrl:G.ctrl,alt:G.alt,shift:G.shift,meta:G.meta,key:F}}function k(s,u){if(!s||!u)return!1;var F=String(u.key||u.code||"").toLowerCase();return s.key!==F?!1:s.ctrl===!!u.ctrlKey&&s.alt===!!u.altKey&&s.shift===!!u.shiftKey&&s.meta===!!u.metaKey}function S(s){if(!s)return"";var u=[];return s.ctrl&&u.push("Ctrl"),s.alt&&u.push("Alt"),s.shift&&u.push("Shift"),s.meta&&u.push("Meta"),u.push(s.key.toUpperCase()),u.join("+")}function M(){var s={};return{register:function(u){if(!u||!u.key)throw new Error("命令 key 必填");if(s[u.key])throw new Error("命令重复注册: "+u.key);return s[u.key]=Object.assign({},u),u.key},list:function(){return Object.keys(s).map(function(u){return s[u]})},get:function(u){return s[u]||null},remove:function(u){delete s[u]},has:function(u){return!!s[u]},count:function(){return Object.keys(s).length}}}function b(){var s={},u={};return{register:function(F,G,W){var Y=D(F);if(!Y)throw new Error("无效快捷键: "+F);var te=S(Y);if(s[te])throw new Error("快捷键冲突: "+F);if(G!=null&&u[G]!==void 0)throw new Error("动作重复绑定: "+G);return s[te]={combo:F,action:G,description:W||"",parsed:Y},u[G]=te,te},resolve:function(F){for(var G in s)if(k(s[G].parsed,F))return s[G].action;return null},list:function(){return Object.keys(s).map(function(F){return s[F]})},unregister:function(F){var G=S(D(F));s[G]&&(delete u[s[G].action],delete s[G])},count:function(){return Object.keys(s).length}}}function n(){var s=b();return s.register("Ctrl+K","toggle-palette","打开命令面板"),s.register("F5","refresh","刷新当前页"),s.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),s.register("Ctrl+J","open-ai","打开 AI 问股"),s.register("Ctrl+D","open-today","今日一屏"),s.register("Ctrl+E","batch-eval","批量 AI 评估"),s.register("Ctrl+G","add-portfolio","加入组合"),s.register("Ctrl+H","open-eval-history","打开评估历史"),s.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),s}return{normalize:a,createPaletteState:m,toggleVisible:t,searchMenus:h,searchCommands:y,filterStocksLocal:z,mergeResults:v,moveIndex:r,buildSearchSuggestions:g,dispatchSearchSelection:o,DEFAULT_COMMANDS:E,parseKeyCombo:D,matchShortcut:k,canonicalCombo:S,createCommandRegistry:M,createShortcutRegistry:b,createDefaultShortcuts:n}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof ze<"u"&&ze.exports?ze.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var m=e();typeof ze=="object"&&ze.exports&&(ze.exports=m),a.QuantOnboarding=m})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],e=a.length,m=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=m.length;function h(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function y(){return m.slice()}function z(P){return P<0?0:P>=t?t-1:P}function v(P){return{stepIndex:P.stepIndex,completed:!!P.completed,dismissed:!!P.dismissed,updatedAt:P.updatedAt||0}}function r(P){return v(Object.assign({},P,{stepIndex:z((P.stepIndex||0)+1),updatedAt:Date.now()}))}function g(P){return v(Object.assign({},P,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(P){return v(Object.assign({},P,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function E(P){var R=Math.min(P&&P.stepIndex||0,t);return{done:R,total:t,pct:Math.round(R/t*100)}}function l(P){return!!(P&&!P.completed&&!P.dismissed)}function D(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function k(){return a.slice()}function S(){return e}function M(P){return P<0?0:P>=e?e-1:P}function b(P){return{stepIndex:P.stepIndex,completed:!!P.completed,dismissed:!!P.dismissed,updatedAt:P.updatedAt||0}}function n(P){return b(Object.assign({},P,{stepIndex:M((P.stepIndex||0)+1),updatedAt:Date.now()}))}function s(P){return b(Object.assign({},P,{stepIndex:M((P.stepIndex||0)-1),updatedAt:Date.now()}))}function u(P,R){return b(Object.assign({},P,{stepIndex:M(R),updatedAt:Date.now()}))}function F(P){return b(Object.assign({},P,{completed:!0,updatedAt:Date.now()}))}function G(P){return b(Object.assign({},P,{dismissed:!0,updatedAt:Date.now()}))}function W(P){return!!(P&&P.completed)}function Y(P){var R=Math.min(P&&P.stepIndex||0,e);return{done:R,total:e,pct:Math.round(R/e*100)}}function te(P){var R=P||D();return JSON.stringify({stepIndex:R.stepIndex,completed:!!R.completed,dismissed:!!R.dismissed,updatedAt:R.updatedAt||0})}function I(P){var R=D();if(!P||typeof P!="string")return R;try{var H=JSON.parse(P);if(!H||typeof H!="object")return R;var ee=parseInt(H.stepIndex,10);return isNaN(ee)?R:{stepIndex:M(ee),completed:!!H.completed,dismissed:!!H.dismissed,updatedAt:H.updatedAt||0}}catch{return R}}return{ONBOARDING_STEPS:a,steps:k,stepCount:S,createOnboardingState:D,next:n,prev:s,jumpTo:u,complete:F,dismiss:G,isComplete:W,progress:Y,persistState:te,parseState:I,SHORTTERM_TOUR_STEPS:m,shorttermTourSteps:y,createShorttermTourState:h,shorttermTourNext:r,shorttermTourComplete:g,shorttermTourDismiss:o,shorttermTourProgress:E,shorttermTourShouldShow:l}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:m}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const h=a(!1),y=a(t.createOnboardingState()),z=e(function(){return t.steps()[y.value.stepIndex]}),v=e(function(){return t.progress(y.value)}),r=e(function(){return y.value.stepIndex>=t.stepCount()-1}),g=e(function(){return"onboarding.step."+z.value.key});function o(){const M=t.persistState(y.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:M}})}).then(function(b){return b.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",M)}catch{}})}function E(){y.value=t.next(y.value)}function l(){y.value=t.prev(y.value)}function D(){y.value=t.complete(y.value),o(),h.value=!1}function k(){y.value=t.dismiss(y.value),o(),h.value=!1}function S(){fetch("/api/user_config/preferences").then(function(M){return M.json()}).then(function(M){const b=M&&M.preferences&&M.preferences.onboarding_progress;return b&&(y.value=t.parseState(b)),b}).catch(function(){return null}).then(function(M){if(!M)try{const b=localStorage.getItem("qc_onboarding_progress");b&&(y.value=t.parseState(b))}catch{}!t.isComplete(y.value)&&!y.value.dismissed&&(h.value=!0)})}return m(S),{visible:h,st:y,step:z,prog:v,isLast:r,stepKey:g,next:E,prev:l,finish:D,skip:k}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"📭"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true">{{ icon }}</div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(e){try{const m=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(m)return m(e)||""}catch{}return e}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"⚠️"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true">{{ icon }}</div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(e){try{const m=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(m)return m(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:m,nextTick:t,inject:h,onMounted:y}=Vue,z=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const v=h("qcState");if(!v)return{};const r=a(""),g=e({get:()=>v.commandPaletteVisible.value,set:j=>{v.commandPaletteVisible.value=j}}),o=a(0),E=a([]),l=a(null),D=e(()=>{const j=(z.DEFAULT_COMMANDS||[]).map(function(A){return Object.assign({},A)});return Object.keys(v.themes.value||{}).forEach(function(A){const p=v.themes.value[A];j.push({key:"theme:"+A,label:"切换主题 · "+(p.name||A),icon:"palette",keywords:"theme 主题"})}),j});function k(j){return typeof j=="string"&&/^[a-z][a-z0-9-]*$/.test(j)}const S=e(()=>v.menus.value||[]);function M(){const j=window.__quantModules&&window.__quantModules.pinyin;if(!j)return[];const B=[];return(v.watchlist&&v.watchlist.value||[]).forEach(function(A){B.push({code:A.code,name:A.name})}),(v.aiHistory&&v.aiHistory.value||[]).forEach(function(A){A&&A.stock_code&&B.push({code:A.stock_code,name:A.stock_name||A.stock_code})}),B.push.apply(B,j.getExtraStocks()),j.buildStockIndex(B)}function b(j){const B=window.__quantModules&&window.__quantModules.pinyin;return B?B.searchStocksByQuery(j,M()).map(function(A){return{type:"stock",code:A.code,name:A.name,label:A.name,subLabel:A.code,icon:"trending-up"}}):[]}function n(){const j=[],B=window.__quantModules&&window.__quantModules.recent;B&&B.getRecentViewed().slice(0,5).forEach(function(p){j.push({type:"stock",code:p.code,name:p.name||p.code,label:p.name||p.code,subLabel:"最近查看 · "+p.code,icon:"trending-up"})});const A=(v.watchlist&&v.watchlist.value||[]).slice(0,8).map(function(p){return{type:"stock",code:p.code,name:p.name||p.code,label:p.name||p.code,subLabel:"我的自选 · "+p.code,icon:"trending-up"}});return j.concat(A)}const s=e(()=>{const j=r.value;if(!j)return z.mergeResults([],[],n());const B=z.searchMenus(j,S.value,v.subPageNames),A=z.searchCommands(j,D.value),p=E.value;return z.mergeResults(B,A,p)}),u=e(()=>s.value);function F(j){return u.value.flat[o.value]===j}function G(j){o.value=u.value.flat.indexOf(j)}function W(j){return(j.type||"")+":"+(j.code||j.menuKey||j.key||j.label)}let Y=null;function te(){const j=r.value.trim();if(j.length<1){E.value=[];return}Y&&clearTimeout(Y),Y=setTimeout(function(){const B=b(j);E.value=B,o.value=0,v.searchStocks(j,function(A){if(r.value.trim()!==j)return;const p=(A||[]).filter(function(K){return K&&K.code&&K.name}).map(function(K){return{type:"stock",code:K.code,name:K.name,label:K.name,subLabel:K.code,icon:"trending-up"}}),x={},le=[];B.forEach(function(K){x[K.code]||(x[K.code]=!0,le.push(K))}),p.forEach(function(K){x[K.code]||(x[K.code]=!0,le.push(K))}),E.value=le,o.value=0})},200)}function I(){o.value=z.moveIndex(o.value,u.value.flat.length,1)}function P(){o.value=z.moveIndex(o.value,u.value.flat.length,-1)}function R(){const j=u.value.flat[o.value];j&&H(j)}function H(j){v.commandPaletteVisible.value=!1,j.type==="menu"?v.navigateTo(j.menuKey,j.subPage):j.type==="stock"?v.showStockDetail(j.code,j.name):j.type==="command"&&ee(j.key)}function ee(j){if(j==="refresh"){const B=v.currentPage.value;B==="strategies"?v.loadDashboardData().catch(function(){}):B==="calendar"?v.refreshCalendarData().catch(function(){}):B==="ai"&&v.loadAiHistory().catch(function(){})}else j==="export"?v.exportCSV():j==="batch"?v.showBatchEvaluate.value=!0:j==="ai"?v.openAiFab():j==="sidebar"?v.toggleSidebar():j==="today"?v.navigateTo("strategies","overview"):j==="add-portfolio"?(v.currentPage.value="ai",v.currentSubPage.value="portfolio"):j==="open-system"?v.navigateTo("system","status"):j==="open-shortterm"?v.navigateTo("shortterm","overview"):j==="open-research"?v.navigateTo("research","overview"):j==="open-calendar"?v.navigateTo("calendar",""):j==="refresh-data-source"?v.navigateTo("system","datasource"):j.indexOf("theme:")===0&&v.changeTheme(j.slice(6))}m(g,function(j){j&&(r.value="",E.value=[],o.value=0,t(function(){l.value&&l.value.focus&&l.value.focus()}))}),m(r,te);function $(j){j==="toggle-palette"?v.commandPaletteVisible.value=!v.commandPaletteVisible.value:j==="toggle-sidebar"?v.toggleSidebar():j==="open-ai"?v.openAiFab():j==="refresh"?ee("refresh"):j==="open-today"?ee("today"):j==="batch-eval"?ee("batch"):j==="add-portfolio"&&ee("add-portfolio")}function se(j){if(!z.createDefaultShortcuts||!z.createShortcutRegistry)return;const A=z.createDefaultShortcuts().resolve({key:j.key,ctrlKey:j.ctrlKey,altKey:j.altKey,shiftKey:j.shiftKey,metaKey:j.metaKey});A&&(j.preventDefault(),$(A))}return y(function(){document.addEventListener("keydown",se)}),{visible:g,query:r,results:u,inputEl:l,sanitizeHtml:v.sanitizeHtml,isIconName:k,onDown:I,onUp:P,onEnter:R,execute:H,isActive:F,setActive:G,itemKey:W,onGlobalKeydown:se}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const m=Vue.ref(0);let t=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,h=>{h?(m.value=0,t=setInterval(()=>{m.value++},1e3)):t&&(clearInterval(t),t=null)}),{...e,batchElapsed:m}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
        <el-dialog v-model="indexDetailVisible" title="指数详情分析" width="800px" class="kline-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :class="{ 'qc-embedded-dialog': embedded }">
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a,computed:e,ref:m,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
        <el-dialog v-model="stockDetailVisible" :title="t('detail.title')" width="800px" class="kline-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :class="{ 'qc-embedded-dialog': embedded }">
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
    `,setup(){const h=a("qcState");if(!h)return{};const y={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},z=e(()=>y[h.aiEvalStage.value]||""),v=e(()=>{const R=h.aiResult&&h.aiResult.value&&h.aiResult.value.result&&h.aiResult.value.result.level;return R?R==="强烈推荐"||R==="推荐"?"var(--el-success)":R==="谨慎推荐"?"var(--el-warning)":R==="中性"||R==="观望"?"var(--text-secondary)":R==="评估失败"||R==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function r(R){const H=document.createElement("textarea");H.value=R,H.style.position="fixed",H.style.opacity="0",document.body.appendChild(H),H.select(),document.execCommand("copy"),document.body.removeChild(H)}async function g(){const R=h.aiResult&&h.aiResult.value;if(!R||!R.result)return;const H=R.result.dimensions||{},ee=Object.entries(H).map(([se,j])=>`${se} ${Math.round(j)}分`).join(`
`),$=`【AI 智能评估】${R.result.level||""} ${R.result.total_score!=null?R.result.total_score:"—"}分
模型：${R.model_used||R.result.provider||"—"}

${R.result.detailed_report||""}

九维度评分：
${ee||"无"}`;try{await navigator.clipboard.writeText($),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{r($),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=m(!1),E=m(!1),l=m(null),D=m([]),k={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function S(R){return k[R]||"factor-sem-none"}async function M(){const R=h.stockDetail.value&&h.stockDetail.value.stock;if(R){o.value=!0,E.value=!1,D.value=[],l.value=null;try{const H=h.selectedDate.value?`?date=${h.selectedDate.value}`:"",ee=await fetch(`/api/calendar/stock/${R}/factors${H}`).then(B=>B.json()),$=ee&&Array.isArray(ee.factors)?ee.factors:[],se=[],j={};$.forEach(B=>{j[B.category]||(j[B.category]={category:B.category,items:[]},se.push(j[B.category])),j[B.category].items.push(B)}),D.value=se,l.value=ee&&ee.summary||null}catch{E.value=!0}finally{o.value=!1}}}t(h.stockDetailTab,R=>{R==="factor"&&h.stockDetail.value&&h.stockDetailVisible.value&&(M(),n())});const b=m(null);async function n(){try{const R=await fetch("/api/market/factor-ic").then(H=>H.json());b.value=R&&R.success&&R.data?R.data:{}}catch{b.value={}}}function s(R){if(!R||!R.n5)return"—";const H=R.n5.icir!=null?"ICIR "+R.n5.icir:"ICIR —";return R.n5.grade+" ("+H+")"}const u=m(!1),F=m(!1),G=m([]),W=m([]);function Y(R){if(R==null)return"—";const H=Number(R);return Number.isNaN(H)?"—":Math.abs(H)>=1e8?(H/1e8).toFixed(2)+"亿":Math.abs(H)>=1e4?(H/1e4).toFixed(1)+"万":String(H)}async function te(){const R=h.stockDetail&&h.stockDetail.value&&h.stockDetail.value.stock;if(R){u.value=!0,F.value=!1;try{const H=await fetch("/api/market/performance/"+encodeURIComponent(R)).then(ee=>ee.json());H&&H.success?(G.value=H.forecast||[],W.value=H.express||[]):F.value=!0}catch{F.value=!0}finally{u.value=!1}}}t(h.stockDetailTab,R=>{R==="performance"&&te()});const I=m(null);async function P(){const R=h.stockDetail&&h.stockDetail.value&&h.stockDetail.value.stock;if(!R){I.value=null;return}try{const H=await fetch("/api/focus/stock/"+encodeURIComponent(R)+"/pool").then(ee=>ee.json());I.value=H&&H.success&&H.data?H.data:null}catch{I.value=null}}return t(()=>h.stockDetail&&h.stockDetail.value&&h.stockDetail.value.stock,R=>{R&&h.stockDetailVisible.value?P():I.value=null}),t(()=>h.stockDetailVisible.value,R=>{R?P():I.value=null}),{...h,aiStageText:z,levelRingColor:v,copyAiReport:g,factorLoading:o,factorError:E,factorSummary:l,factorGroups:D,factorSemClass:S,loadFactorPanel:M,factorIc:b,loadFactorIc:n,factorIcGrade:s,perfLoading:u,perfError:F,perfForecast:G,perfExpress:W,fmtY:Y,loadPerformance:te,poolInfo:I,loadPoolInfo:P}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(m){const t=e("qcState");if(!t)return{};const h=a(()=>m.type==="history"?t.selectedHistoryIds.value.includes(m.item.id):t.selectedChatIds.value.includes(m.item.id)),y=a(()=>{const k=t.watchlistCodes.value.has(m.item.stock_code);return{icon:k?"⭐":"☆",label:k?"取消收藏":"加入收藏"}}),z=a(()=>m.type==="history"?"bot":"message-circle"),v=a(()=>{var k;return m.type==="history"?((k=m.item.result)==null?void 0:k.provider)||"":m.item.first_msg||""}),r=a(()=>{var k,S;return`${((S=(k=m.item.result)==null?void 0:k.dimensions)==null?void 0:S.length)||9}维度分析`}),g=a(()=>{var S,M;const k=m.type==="history"?m.item.evaluate_time:m.item.created_at||"";return k?m.timeFormat==="datetime"?m.type==="history"?`${k.split("T")[0]} ${(k.split("T")[1]||"").split(".")[0]}`:`${k.split("T")[0]} ${((S=k.split("T")[1])==null?void 0:S.substring(0,5))||""}`:m.type==="history"?(k.split("T")[1]||"").split(".")[0]||k:((M=k.split("T")[1])==null?void 0:M.substring(0,5))||"":""});function o(){m.type==="history"?t.toggleSelectHistory(m.item.id):t.toggleSelectChat(m.item.id)}function E(){m.type==="history"?t.viewAiResult(m.item):t.viewChatSession(m.item)}function l(){m.type==="history"?t.deleteSingleHistory(m.item.id):t.deleteChatSession(m.item.id)}function D(k,S){t.toggleWatchlist(k,S)}return{isSelected:h,watchState:y,providerIcon:z,providerText:v,dimsText:r,timeText:g,toggleSelect:o,view:E,remove:l,toggleWatchlist:D,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes}}}})();(function(){const{ref:a,computed:e,onMounted:m,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const h={买入:"🟢",持有:"🟡",观望:"⚪",减仓:"🟠",卖出:"🔴"},y=["买入","持有","观望","减仓","卖出"],z={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},v={强烈推荐:"🔥",推荐:"🟢",谨慎推荐:"🟡",中性:"⚪",观望:"🔵"},r={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},g=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],o={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},E=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function l(k){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(k).then(b=>b.json?b.json():b)}function D(){const k=new Date,S=M=>M<10?"0"+M:""+M;return k.getFullYear()+"-"+S(k.getMonth()+1)+"-"+S(k.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const k=t("qcState"),S=a(D()),M=a("after_close"),b=a({rows:[],actions:{},total:0,groups:{}}),n=a({sessions:{},total:0}),s=a(null),u=a(!1),F=a(""),G=a(!1),W=a([]),Y=a(""),te=a(null),I={},P=a({});let R=0;const H=a(null),ee=e(function(){const f=b.value&&b.value.groups||{};return Object.keys(f).length?f:b.value&&b.value.rows&&b.value.rows.length?{全部:b.value.rows}:{}}),$=e(function(){const f=H.value;return!f||!f.date||f.date!==S.value?"":"已加载最近一次评估: "+f.date+" · "+(o[f.session]||f.session)}),se=e(function(){const f=b.value&&b.value.base_date;return f?f===S.value?"评分范围: "+f+" 收盘池 + 自选":"评分范围: "+f+" 收盘池(前一交易日算好) + 自选":""});function j(f){if(f==null)return"—";const Z=Number(f);return Z===Math.floor(Z)?String(Z):Z.toFixed(1)}function B(f){const Z=b.value.total||0,pe=(b.value.actions||{})[f]||0;if(!Z)return"0%";const we=pe/Z*100;return we>0&&we<4?"4%":we.toFixed(1)+"%"}function A(f){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[f]||"info"}function p(f){const Z=s.value&&s.value.overall&&s.value.overall[f]||null;return!Z||Z.total===0||Z.rate===null||Z.rate===void 0?"info":Z.rate>=60?"success":Z.rate>=40?"warning":"danger"}function x(f){const Z=s.value&&s.value.overall&&s.value.overall[f]||null;return!Z||Z.total===0||Z.rate===null||Z.rate===void 0?"样本不足":Z.rate.toFixed(1)+"% ("+Z.total+" 样本)"}function le(){return o[M.value]||M.value}function K(f){const Z=W.value.indexOf(f);Z>=0?W.value.splice(Z,1):W.value.push(f)}function T(f){if(!f||!f.raw_json)return{};if(I[f.stock_code+f.session+f.trade_date])return I[f.stock_code+f.session+f.trade_date];let Z={};try{Z=JSON.parse(f.raw_json)||{}}catch{Z={}}return I[f.stock_code+f.session+f.trade_date]=Z,Z}async function c(){try{const f=await l("/api/focus/latest"),Z=f&&f.success&&f.data;Z&&Z.date&&(H.value=Z,S.value=Z.date,Z.session&&(M.value=Z.session))}catch(f){console.warn("[focus] 最近一次评估解析失败:",f)}}async function C(){G.value=!0;try{const f=await l("/api/focus/results?date="+S.value+"&session="+M.value);b.value=f&&f.success&&f.data||{rows:[],actions:{},total:0,groups:{}},d((b.value.rows||[]).map(function(Z){return Z.stock_code}))}catch(f){console.warn("[focus] 结果加载失败:",f),b.value={rows:[],actions:{},total:0,groups:{}}}finally{G.value=!1}}async function d(f){const Z=P.value||{},pe=(f||[]).filter(function(Ve){return Ve&&!Z[Ve]});if(!pe.length)return;const we=++R,Me=pe.map(function(Ve){return l("/api/focus/stock/"+encodeURIComponent(Ve)+"/pool?date="+S.value).then(function(Ee){Ee&&Ee.success&&Ee.data?Z[Ve]=Ee.data:Z[Ve]={stock_code:Ve,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){Z[Ve]={stock_code:Ve,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Me)}catch{}we===R&&(P.value=Object.assign({},Z))}function O(f){const Z=k&&k.showStockDetail;if(typeof Z=="function"){Z(f);return}const we=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;we&&we.info("请从其他页面打开股票详情: "+f)}async function ie(){try{const f=await l("/api/focus/history?date="+S.value);n.value=f&&f.success&&f.data||{sessions:{},total:0}}catch(f){console.warn("[focus] 历史加载失败:",f),n.value={sessions:{},total:0}}}async function J(){u.value=!0;try{const f=await l("/api/ai/track");f&&f.success&&f.data?(s.value=f.data,F.value=(f.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):s.value=null}catch(f){console.warn("[focus] 效果块加载失败:",f),s.value=null}finally{u.value=!1}}async function Q(){const f=(Y.value||"").trim();if(f){te.value=null;try{const Z=await l("/api/focus/stock/"+encodeURIComponent(f));te.value=Z&&Z.success&&Z.data&&Z.data.rows||[]}catch(Z){console.warn("[focus] 单股历史加载失败:",Z),te.value=[]}}}async function _(){await C(),await ie(),await J()}return m(async function(){await c(),await _()}),{curDate:S,session:M,results:b,history:n,track:s,trackLoading:u,trackNote:F,loading:G,expanded:W,stockCode:Y,stockHistory:te,SESSIONS:g,ACTION_ORDER:y,TRACK_WINDOWS:E,EMOJI:h,ACTION_DOT:z,TIER_EMOJI:v,TIER_DOT:r,SESSION_LABELS:o,displayGroups:ee,latestNote:$,baseNote:se,sessionLabel:le,fmtScore:j,tagType:A,rateTagType:p,fmtRate:x,toggle:K,detailOf:T,loadResults:C,loadHistory:ie,loadTrack:J,loadStockHistory:Q,loadAll:_,poolStatus:P,openStockDetail:O,actionPct:B}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:m}=Vue,{currentView:t,statusFilter:h,dashboardData:y,loadHealthMetrics:z,getLoadDashboardData:v,getLastRefreshTime:r,getFetchPoolSignals:g}=a,o=e(!1),E=e(""),l=new Map,D=e([]),k=e(""),S=e(""),M=e([]),b=e(""),n=window.__quantModules.core||{},s=typeof n.createTtlCache=="function"?n.createTtlCache(15e3):null;let u=0;function F(){const H=Date.now();H-u<5e3||(u=H,ElementPlus.ElMessage.success("有新数据，已更新"))}function G(H,ee,$,se){!s||!ee||typeof n.silentRefresh!="function"||n.silentRefresh({cache:s,key:ee,fetchFn:async()=>{const j=await fetch(H);if(!j.ok)throw new Error("HTTP "+j.status);const B=await j.json();return $?$(B):B},ttl:s.defaultTtl,apply:se,onChanged:F,onError:()=>{}})}const W=new Set;async function Y(){var H;try{const $=await(await fetch("/api/dates")).json();D.value=((H=$.data)==null?void 0:H.dates)||$.dates||[],D.value.length>0&&(k.value=D.value[D.value.length-1]),S.value=new Date().toLocaleTimeString()}catch(ee){console.error(ee)}}async function te(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),S.value="刷新中...",l.clear(),await Y(),await P(),S.value=new Date().toLocaleTimeString()}catch(H){console.error("数据刷新失败",H)}}function I(){if(!k.value)return;const ee="/api/view/"+(t.value||"day")+"/"+k.value+"?status="+(h.value||"all")+"&format=csv";window.open(ee,"_blank")}async function P(){if(!k.value)return;const H=`${t.value}_${k.value}`;if(W.has(H))return;W.add(H);const ee=`/api/view/${t.value}/${k.value}?status=all`,$=s&&typeof n.makeCacheKey=="function"?n.makeCacheKey("GET",`/api/view/${t.value}/${k.value}`,{status:"all"}):null,se=(A,p)=>{M.value=A,b.value=p||"",l.set(H,{stocks:A,note:p||""})},j=A=>{se(A&&A.stocks||[],A&&A.note||"")};if(l.has(H)){j(l.get(H)),G(ee,$,A=>A,j),W.delete(H);return}const B=$&&s?s.get($):void 0;if(B!==void 0){j(B),G(ee,$,A=>A,j),W.delete(H);return}o.value=!0,E.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const p=await(await fetch(ee)).json(),x=p.stocks||[];se(x,p.note||""),s&&$&&s.set($,{stocks:x,note:p.note||""})}catch{try{const x=await(await fetch(`/api/calendar/${k.value}/consensus`)).json();M.value=(x.consensus||[]).map(le=>({...le,code:le.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}g(),W.delete(H)}async function R(){const H=s&&typeof n.makeCacheKey=="function"?n.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(s){const ee=s.get(H);if(ee!==void 0){y.value=ee,z().catch(()=>{}),G("/api/dashboard",H,$=>$.data||$,$=>{y.value=$,r().value=Date.now()});return}}await v()(),z().catch(()=>{}),s&&s.set(H,y.value)}return{loading:o,loadingView:E,viewCache:l,dates:D,selectedDate:k,lastLoadTime:S,consensus:M,viewNote:b,loadDates:Y,refreshCalendarData:te,exportCSV:I,loadConsensusData:P,loadDashboardCached:R}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:m,loadIndexKline:t,rememberDialogTrigger:h,menus:y,currentPage:z,currentSubPage:v,stockDetail:r,selectedDate:g}=a,o=ref({indices:[],market_sentiment:null});let E=null;const l=ref(!1),D=ref(null),k=ref(null),S=ref(!1);function M(){window.__quantModules.charts.disposeKline("stockKlineChart")}const b=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{b.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const n=ref(!1),s=ref(null),u=ref(!1),F=ref(0),G=ref(0);async function W(){try{const p=await(await fetch("/api/market/overview")).json();o.value=p,Y(p)}catch(A){console.error("获取市场行情失败:",A)}}function Y(A){E&&clearInterval(E),A&&A.in_trading_hours&&(E=setInterval(W,6e5))}function te(A){h(),D.value=A,k.value=null,m.value="daily",I(A.code),window.__quantModules.charts.disposeKline("indexKlineChart"),l.value=!0,setTimeout(async()=>{await t("daily")},500)}async function I(A){try{const x=await(await fetch("/api/ai/index-eval/"+A)).json();x.success&&x.data&&(k.value=x.data)}catch(p){console.warn("[getIndexAiScore] cache check failed:",p)}}async function P(){if(D.value){S.value=!0;try{const p=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:D.value.code,index_name:D.value.name,current_price:D.value.close,pct_chg:D.value.pct_chg})})).json();p.success?k.value=p.data:ElementPlus.ElMessage.error(p.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{S.value=!1}}}function R(A){window.__quantModules.charts.zoomKline("stockKlineChart",A)}function H(){u.value=!0,setTimeout(()=>{u.value=!1},600)}function ee(A,p){if(A===p){H();return}const x=800,le=performance.now(),K=p-A;n.value=!0,s.value={value:K,dir:K>0?"up":"down"},u.value=!0,setTimeout(()=>{u.value=!1},600),setTimeout(()=>{s.value=null},2300);function T(c){const C=c-le,d=Math.min(C/x,1),O=1-Math.pow(1-d,3),ie=Math.round(A+K*O);r.value&&r.value.score_data&&(r.value.score_data.score=ie),d<1?requestAnimationFrame(T):(r.value&&r.value.score_data&&(r.value.score_data.score=p),n.value=!1)}requestAnimationFrame(T)}function $(){if(!r.value||!r.value.score_data)return;const A=r.value.score_data.score;if(A==null)return;const p=600,x=performance.now();u.value=!0,setTimeout(()=>{u.value=!1},600);function le(K){const T=Math.min((K-x)/p,1),c=1-Math.pow(1-T,3),C=Math.round(A*c);r.value&&r.value.score_data&&(r.value.score_data.score=C),T<1?requestAnimationFrame(le):r.value&&r.value.score_data&&(r.value.score_data.score=A)}requestAnimationFrame(le)}async function se(){var x;if(!r.value||!r.value.stock)return;const A=r.value.stock,p=(x=r.value.score_data)==null?void 0:x.score;try{const le=new Date().toISOString().split("T")[0],K=g.value||le,c=await(await fetch(`/api/calendar/stock/${encodeURIComponent(A)}/score?date=${K}`)).json();if(c.success&&c.score_data){const C=c.score_data.score;r.value&&(r.value.score_data=c.score_data),p!=null&&C!==p?ee(p,C):H()}else H()}catch(le){console.warn("[refreshStockScore] failed:",le)}}function j(A){b.value&&(F.value=A.touches[0].clientX,G.value=A.touches[0].clientY)}function B(A){if(!b.value)return;const p=F.value-A.changedTouches[0].clientX,x=G.value-A.changedTouches[0].clientY;if(Math.abs(p)>Math.abs(x)&&Math.abs(p)>80){const le=y.value.map(function(T){return T.key}),K=le.indexOf(z.value);if(p>0&&K<le.length-1){const T=le[K+1],c=window.__quantGoPage;c?c(T,""):(z.value=T,v.value="")}else if(p<0&&K>0){const T=le[K-1],c=window.__quantGoPage;c?c(T,""):(z.value=T,v.value="")}}}return{marketData:o,marketRefreshTimer:E,fetchMarketData:W,indexDetailVisible:l,indexDetail:D,indexAiResult:k,indexAiLoading:S,showIndexDetail:te,loadCachedIndexEval:I,doIndexAiEvaluate:P,disposeStockKline:M,isMobile:b,zoomKlineRange:R,scoreAnimating:n,scoreDelta:s,scorePulse:u,triggerScorePulse:H,animateScoreChange:ee,animateScoreEntrance:$,refreshStockScore:se,touchStartX:F,touchStartY:G,onTouchStart:j,onTouchEnd:B}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:m,currentSubPage:t}=a,h=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),y=ref("idle"),z=ref("");async function v(){if(!h.value.webhook_url){z.value="请先输入Webhook地址";return}y.value="testing",z.value="";try{const Q=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:h.value.webhook_url})})).json();Q.success||Q.status==="ok"?(z.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(z.value=Q.message||"测试失败",ElementPlus.ElMessage.error(z.value))}catch{z.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}y.value="idle"}const r=Vue.ref(!1);async function g(){r.value=!0;try{const Q=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{r.value=!1}}const o=ref(!1);function E(){e("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const J=document.querySelector('input[placeholder*="输入问题"]');J&&J.focus()})}const l=ref([]),D=ref({});async function k(){try{const Q=await(await fetch("/api/ai/recommend-strategies")).json();Q.success&&(l.value=Q.recommendations||[])}catch(J){console.warn("[loadStrategyRecommendations] failed:",J)}}async function S(){try{const Q=await(await fetch("/api/ai/usage-stats")).json();Q.success&&(D.value=Q)}catch(J){console.warn("loadAiUsage failed:",J)}}const M=ref({}),b=ref([]),n=ref(7);async function s(){try{const Q=await(await fetch("/api/system/monitor")).json();Q.success&&(M.value=Q)}catch(J){console.warn("loadSysMonitor failed:",J)}}const u=ref({});async function F(){try{const Q=await(await fetch("/api/system/health-detail")).json();Q.success&&(u.value=Q)}catch(J){console.warn("loadHealthDetail failed:",J)}}async function G(){try{const Q=await(await fetch(`/api/analytics/rank?days=${n.value}`)).json();Q.success&&(b.value=Q.rank||[])}catch(J){console.warn("loadAnalytics failed:",J)}}const W=ref(!1);async function Y(){if(!W.value){W.value=!0;try{const Q=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return Q&&Q.success?Q.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${Q.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${Q.date}）`):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"生成复盘失败"),F(),Q}catch(J){ElementPlus.ElMessage.error("生成复盘失败: "+(J.message||""))}finally{W.value=!1}}}const te=ref(null),I=ref(!1);async function P(){try{const Q=await(await fetch("/api/ai/fact-check/latest")).json();te.value=Q&&Q.success&&Q.data||null}catch(J){console.warn("loadFactCheck failed:",J)}}async function R(){if(!I.value){I.value=!0;try{const Q=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return Q&&Q.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${Q.data.pass_rate!=null?Q.data.pass_rate+"%":"--"} (${Q.data.checked} 个数字)`),P()):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"事实护栏抽查失败"),Q}catch(J){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(J.message||""))}finally{I.value=!1}}}const H=ref([]),ee=ref(!1);async function $(){try{const Q=await(await fetch("/api/backup/list")).json();Q.success&&(H.value=Q.backups||[])}catch(J){console.error("加载备份列表失败",J)}}async function se(){ee.value=!0;try{const Q=await(await fetch("/api/backup/create",{method:"POST"})).json();Q.success?(ElementPlus.ElMessage.success(Q.message||"备份成功"),$()):ElementPlus.ElMessage.error(Q.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{ee.value=!1}}const j=ref(""),B=ref("");async function A(J){j.value=J,B.value="";try{const Q=window.__quantModules&&window.__quantModules.core||{},_=typeof Q.authHeaders=="function"?Q.authHeaders():{},f=await fetch("/api/reports/export?format="+encodeURIComponent(J),{headers:_});if(!f.ok)throw new Error("HTTP "+f.status);const Z=await f.blob(),pe=URL.createObjectURL(Z),we=document.createElement("a");we.href=pe;const Me=new Date().toISOString().slice(0,10);we.download="report_"+Me+"."+J,document.body.appendChild(we),we.click(),document.body.removeChild(we),URL.revokeObjectURL(pe),B.value="报表已导出 ("+J.toUpperCase()+")"}catch(Q){B.value="报表导出失败: "+(Q.message||Q)}finally{j.value=""}}async function p(J){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${J} 恢复吗？当前数据将被覆盖。`,"⚠ 恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(Q){console.warn("[restoreBackup] confirm cancelled:",Q);return}try{const _=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J})})).json();_.success?(ElementPlus.ElMessage.success(_.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(_.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const x=ref(!1),le=ref(0),K=[{icon:"🗓",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"🤖",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 🤖 按钮可随时快速问股。"},{icon:"📮",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function T(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{le.value=0,x.value=!0},800)}function c(){x.value=!1,localStorage.setItem("quant_tour_done","1")}function C(){x.value=!1,localStorage.setItem("quant_tour_done","1")}const d=ref(""),O=ref(!1);async function ie(){if(!d.value||!d.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}O.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:d.value.trim(),page:m.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(d.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{O.value=!1}}return{feishuConfig:h,feishuTestStatus:y,feishuTestMessage:z,feishuSaving:r,testFeishuWebhook:v,saveFeishuConfig:g,aiFabHidden:o,openAiFab:E,strategyRecommendations:l,aiUsage:D,loadStrategyRecommendations:k,loadAiUsage:S,sysMonitor:M,analyticsRank:b,analyticsDays:n,loadSysMonitor:s,loadAnalytics:G,healthDetail:u,loadHealthDetail:F,reviewTriggering:W,triggerMarketReview:Y,factCheck:te,factCheckRunning:I,loadFactCheck:P,triggerFactCheck:R,backups:H,backupCreating:ee,loadBackups:$,createBackup:se,restoreBackup:p,reportExporting:j,reportExportMsg:B,exportReport:A,tourVisible:x,tourStep:le,tourSteps:K,maybeShowTour:T,skipTour:c,finishTour:C,feedbackText:d,feedbackSubmitting:O,submitFeedback:ie}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:m,selectedDate:t,dates:h,loadConsensusData:y,hapticFeedback:z}=a,v=e(()=>({day:"天",week:"周",month:"月",year:"年"})[m.value]||"天"),r=e(()=>({day:"date",week:"week",month:"month",year:"year"})[m.value]||"date"),g=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[m.value]||"YYYY-MM-DD"),o=e(()=>!t.value||!h.value||h.value.length===0?!1:t.value>h.value[0]),E=e(()=>!t.value||!h.value||h.value.length===0?!1:t.value<h.value[h.value.length-1]);function l(M){z("light"),m.value=M;let b=t.value||h.value[h.value.length-1];if(M==="year"){const n=b.substring(0,4),s=h.value.find(u=>u.startsWith(n));t.value=s||b}else if(M==="month"){const n=b.substring(0,7),s=h.value.find(u=>u.startsWith(n));t.value=s||b}setTimeout(y,50)}function D(M){z("light");const b=t.value,n=h.value,s=n.indexOf(b);if(s<0)return;let u=1;m.value==="week"&&(u=5),m.value==="month"&&(u=22),m.value==="year"&&(u=250);const F=s+M*u;if(F>=0&&F<n.length){const G=n[F];if(m.value==="month"){const W=G.substring(0,7),Y=n.find(te=>te.startsWith(W));t.value=Y||G}else if(m.value==="year"){const W=G.substring(0,4),Y=n.find(te=>te.startsWith(W));t.value=Y||G}else t.value=G;y()}}function k(M){if(!h.value||h.value.length===0)return!1;const b=M.getFullYear(),n=String(M.getMonth()+1).padStart(2,"0"),s=String(M.getDate()).padStart(2,"0"),u=`${b}-${n}-${s}`;return!h.value.includes(u)}function S(M){M&&M.length>10&&(t.value=M.substring(0,10)),y()}return{viewUnit:v,datePickerType:r,dateFormat:g,canNavPrev:o,canNavNext:E,switchView:l,navigateDate:D,disabledDate:k,onDateChange:S}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:m,navigateTo:t,currentPage:h,currentView:y,navigateDate:z,switchView:v,getLoadDashboardData:r,refreshCalendarData:g,getLoadAiHistory:o,exportCSV:E,getShowBatchEvaluate:l,openAiFab:D,toggleSidebar:k,showStockDetail:S}=a,M=ref("");async function b(I,P){if(!I||I.trim().length<1){P([]);return}const R=window.QuantCommandPanel;let H=[];R&&e.value&&(H=R.buildSearchSuggestions(I,e.value,m,R.DEFAULT_COMMANDS));const ee=window.__quantModules&&window.__quantModules.pinyin;ee&&ee.searchCoreStocks(I).forEach(function($){H.push({value:$.code+" "+$.name,type:"stock",code:$.code,name:$.name,label:$.name,subLabel:$.code,icon:"trending-up",iconName:"trending-up"})});try{const se=await(await fetch("/api/search?q="+encodeURIComponent(I))).json();if(se.success&&se.results){const j=se.results.map(function(A){return{value:A.code+" "+A.name,type:"stock",code:A.code,name:A.name,label:A.name,subLabel:A.code,icon:"trending-up",iconName:"trending-up"}}),B=[];(se.groups||[]).forEach(function(A){(A.items||[]).forEach(function(p){p.type==="sector"?B.push({value:p.name+" · "+p.subLabel,type:"sector",name:p.name,label:p.name,subLabel:"板块",icon:"layers",iconName:"layers"}):p.type==="strategy"?B.push({value:p.name+" · 策略",type:"strategy",id:p.id,name:p.name,label:p.name,subLabel:"策略",icon:"target",iconName:"target"}):p.type==="menu"&&B.push({value:p.name,type:"menu",menuKey:p.menuKey,name:p.name,label:p.name,subLabel:p.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),P(H.concat(j,B))}else P(H)}catch($){console.warn("[searchStocks] fetch failed:",$),P(H)}}function n(I){return I?I.type==="menu"?{action:"menu",menuKey:I.menuKey,subPage:I.subPage}:I.type==="command"?{action:"command",key:I.key}:I.type==="sector"?{action:"sector",name:I.name}:I.type==="strategy"?{action:"strategy",id:I.id,name:I.name}:I.type==="stock"||I.code&&I.name?{action:"stock",code:I.code,name:I.name}:null:null}function s(I){M.value="";const P=window.QuantCommandPanel,R=P?P.dispatchSearchSelection(I):n(I);if(R){if(R.action==="menu"){t(R.menuKey,R.subPage);return}if(R.action==="command"){u(R.key);return}if(R.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(R.name);return}if(R.action==="strategy"){t("research","overview");return}R.action==="stock"&&typeof S=="function"&&S(R.code,R.name)}}function u(I){if(I==="refresh"){const P=h.value;P==="strategies"?r().catch(function(){}):P==="calendar"?g().catch(function(){}):P==="ai"&&o().catch(function(){})}else I==="export"?E():I==="batch"?l().value=!0:I==="ai"?D():I==="sidebar"?k():I==="open-eval-history"?t("ai","history"):I==="open-shortterm"&&t("shortterm","overview")}const F=ref(!1),G=ref(!1);function W(I){if(!I)return!1;const P=I.tagName;return P==="INPUT"||P==="TEXTAREA"||P==="SELECT"||I.isContentEditable}function Y(I){if(W(I.target))return;const P=I.key.toLowerCase();if(I.ctrlKey&&P==="k"){I.preventDefault(),G.value=!0;return}if(I.ctrlKey&&P==="/"){I.preventDefault(),F.value=!F.value;return}if(I.ctrlKey&&P==="h"){I.preventDefault(),t("ai","history");return}if(I.ctrlKey&&I.shiftKey&&P==="s"){I.preventDefault(),t("shortterm","overview");return}if(!(I.ctrlKey||I.metaKey||I.altKey)){if(P>="1"&&P<="5"){const R=parseInt(P)-1,H=e.value[R];H&&t(H.key,H.subPages[0]||"");return}if(P==="r"&&te(),(P==="arrowleft"||P==="arrowright"||P==="arrowup"||P==="arrowdown")&&h.value==="calendar")if(I.preventDefault(),P==="arrowleft"||P==="arrowright")z(P==="arrowleft"?-1:1);else{const R=["day","week","month","year"].indexOf(y.value),H=["day","week","month","year"][(R+(P==="arrowup"?-1:1)+4)%4];v(H)}}}function te(){const I=h.value;I==="strategies"?r().catch(()=>{}):I==="calendar"?g().catch(()=>{}):I==="ai"&&o().catch(()=>{})}return{searchQuery:M,searchStocks:b,onSearchSelect:s,runGlobalCommand:u,shortcutHelpVisible:F,commandPaletteVisible:G,isTypingTarget:W,handleGlobalKeydown:Y,refreshCurrentPage:te}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:m,loadDates:t,loadDashboardData:h,loadDashboardCached:y,loadHealthMetrics:z,loadConsensusData:v,applyTheme:r,maybeShowTour:g,loadAiVendors:o}=a,E=ref({username:"",password:""}),l=ref(!1),D=ref(!1),k=ref(!1),S=ref({oldPassword:"",newPassword:"",confirmPassword:""}),M=ref(!1),b=ref(!1),n=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),s=ref(1);async function u(){try{(await(await fetch("/api/setup/status")).json()).needed&&(n.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},s.value=1,b.value=!0)}catch(P){console.warn("[checkSetupWizard] failed:",P)}}async function F(){try{const P={new_password:n.value.newPassword,ai_key:n.value.aiKey,ai_provider:n.value.aiProvider,ai_model:n.value.aiModel,ai_endpoint:n.value.aiEndpoint,tushare_token:n.value.tushareToken},H=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)})).json();H.success?(b.value=!1,ElementPlus.ElMessage.success("初始化完成"),await m()):ElementPlus.ElMessage.error(H.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function G(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(b.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function W(){if(!E.value.username||!E.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}l.value=!0;try{const R=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E.value)})).json();R.success?(e.value=R.user,localStorage.setItem("quant_user",JSON.stringify(R.user)),localStorage.setItem("quant_token",R.data.access_token),r(R.user.theme||"gold"),typeof o=="function"&&o(),await m(),await t(),await Promise.all([y(),v(),z().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),R.data&&R.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),g(),R.user.role==="admin"&&setTimeout(u,500)):ElementPlus.ElMessage.error(R.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{l.value=!1}}async function Y(){D.value=!0;try{const R=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();R.success?(e.value=R.user,localStorage.setItem("quant_user",JSON.stringify(R.user)),localStorage.setItem("quant_token",R.data.access_token),r(R.user.theme||"gold"),await m(),await t(),await h(),z().catch(()=>{}),await v(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(R.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{D.value=!1}}function te(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function I(){if(!S.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!S.value.newPassword||S.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(S.value.newPassword!==S.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}M.value=!0;try{const P=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:S.value.oldPassword,new_password:S.value.newPassword})}),R=await P.json();P.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),k.value=!1,S.value={oldPassword:"",newPassword:"",confirmPassword:""},te()):ElementPlus.ElMessage.error(R.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{M.value=!1}}return{loginForm:E,logining:l,guestLogining:D,showChangePassword:k,changePasswordForm:S,changingPassword:M,showSetupWizard:b,setupForm:n,setupStep:s,checkSetupWizard:u,completeSetupWizard:F,resetSetupWizard:G,handleLogin:W,handleGuestLogin:Y,handleLogout:te,doChangePassword:I}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let m=null;const{strategyFilter:t,currentView:h,statusFilter:y,currentPage:z,currentSubPage:v,menus:r,currentUser:g,strategyFilterCounts:o,lazyTick:E,dates:l,selectedDate:D,consensus:k,loadConsensusData:S,fetchMerrillClock:M,fetchMarketData:b,loadWatchlist:n,loadAiHistory:s,preloadWatchlistKline:u,loadChatHistory:F,loadSystemStatus:G,checkTushareConnection:W,loadSysMonitor:Y,loadAnalytics:te,loadHealthDetail:I,loadHealthMetrics:P,loadAiUsage:R,loadFactCheck:H,loadAutoEvaluateConfig:ee,loadDatasourceConfig:$,loadFeishuConfig:se,loadAiConfig:j,loadAiVendors:B,loadRateLimit:A,loadDataRefreshConfig:p,loadBackups:x,loadAllGroups:le,loadUsers:K,stockDetailTab:T,stockDetailVisible:c,stockKlineLoaded:C,loadStockKline:d,currentKlinePeriod:O,showMerrillDetail:ie,indexDetailVisible:J,restoreDialogFocus:Q}=a;e(t,_=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(_.selected)),localStorage.setItem("quant_strategy_filter_mode",_.mode)},{deep:!0}),e([h,y],(_,f)=>{_[0]!==f[0]&&S()}),e([z,v],([_,f])=>{var Z;try{const we=!(_==="calendar"&&f==="calendar")&&f||"",Me=we?"#"+_+"/"+we:"#"+_;window.location.hash!==Me&&(window.location.hash=Me)}catch{}if(f&&localStorage.setItem("quant_last_subpage",f),!f&&r.value.find(pe=>pe.key===_)){const pe=r.value.find(we=>we.key===_);pe&&pe.subPages.length>0&&(v.value=pe.subPages[0])}if(_==="shortterm"&&f==="market-review"){const pe=window.__lazyLoaders&&window.__lazyLoaders.research;pe&&pe().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(we){we&&we.name&&!we.__quantRegistered&&(window.__quantApp.component(we.name,we),we.__quantRegistered=!0)}),E&&E.value++}).catch(function(we){console.warn("[lazy] research 组件补加载失败",we)})}_==="calendar"&&f==="calendar"&&(!k.value||k.value.length===0)&&(l.value.length>0&&!D.value&&(D.value=l.value[l.value.length-1]||""),setTimeout(S,50)),_==="calendar"&&f==="pool"&&(!k.value||k.value.length===0)&&(l.value.length>0&&!D.value&&(D.value=l.value[l.value.length-1]||""),setTimeout(S,50)),_==="strategies"&&(f==="merrill"&&M(),f==="market"&&b(),f==="consensus"&&(!k.value||k.value.length===0)&&setTimeout(S,50)),_==="ai"&&(f==="watchlist"&&(n(),s(),setTimeout(u,500)),f==="history"&&s(),f==="overview"&&(s(),n()),f==="chat_history"&&F()),(_==="system"||_==="ops")&&((Z=g.value)==null?void 0:Z.role)==="admin"&&(f==="status"&&(G(),W()),f==="health"&&(I(),P()),f==="schedule"&&I(),f==="guard"&&H(),f==="usage"&&(Y(),te(),I(),P(),R(),H()),f==="autoeval"&&(ee(),B()),f==="datasource"&&$(),f==="feature"&&(se(),j(),A(),p(),x()),f==="user"&&(le(),K())),(_==="system"||_==="ops")&&f==="usage"?m||(m=setInterval(()=>{Y(),te(),I(),P(),R()},3e4)):m&&(clearInterval(m),m=null)}),e(T,(_,f)=>{_==="kline"&&f&&f!=="kline"&&c.value&&(C.value=!1,setTimeout(async()=>{!await d(O.value)&&c.value&&T.value==="kline"&&setTimeout(()=>d(O.value),800)},50))}),e(ie,_=>{_||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([c,J],([_,f])=>{!_&&!f&&Q()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:m,menus:t,currentPage:h,currentSubPage:y,currentView:z,currentKlinePeriod:v,selectedDate:r,dates:g,loadDates:o,loadConsensusData:E,loadDashboardCached:l,appVersion:D,themes:k,fetchMarketData:S,fetchMerrillStages:M,fetchMerrillClock:b,loadAiConfig:n,loadAiVendors:s,loadAiCatalog:u,currentUser:F,loadUserConfig:G,loadAutoEvaluateConfig:W,loadGroupConfig:Y,loadUsers:te,loadAllGroups:I,loadAiHistory:P}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function R(K,T){const c={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(K==="calendar"&&c[T])return h.value="calendar",y.value="calendar",c[T]&&(z.value=c[T]),!0;if(K==="research"&&(T==="strategy-write"||T==="custom-write")){h.value="research",y.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",T==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const K=window.location.hash||"";if(!K||K==="#")return;const T=K.replace(/^#\/?/,"").split("/"),c=T[0],C=T[1]||"",d=t.value.find(function(O){return O.key===c});if(d&&!R(c,C)){if(!C)h.value=c,y.value=d.subPages[0]||"";else if(d.subPages.indexOf(C)>=0)h.value=c,y.value=C;else return;window.__lazyLoaders&&window.__lazyLoaders[c]&&window.__quantGoPage&&window.__quantGoPage(c,y.value).catch(function(){})}});const H=(K,T=3e3,c="")=>{const C=new Promise((d,O)=>setTimeout(()=>O(new Error("timeout")),T));return Promise.race([K,C]).catch(d=>{console.warn(`[init] ${c||"task"} failed:`,d.message)})},ee=localStorage.getItem("quant_theme"),$=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const K=window.__quantModules.themes;let T=$.theme||"system",c=$.theme_hue!=null&&$.theme_hue!==""?$.theme_hue:null;const C=typeof K.migrateLegacyTheme=="function"?K.migrateLegacyTheme():null;c==null&&C&&(T=C.mode,c=C.hue),c==null&&(c=45),m(T,c)}else ee&&m(ee);await Y().catch(function(){}),function(){var K=window.location.hash||"",T=!1;if(K&&K!=="#"){var c=K.replace(/^#\/?/,"").split("/"),C=c[0],d=c[1]||"",O=t.value.find(function(f){return f.key===C});O&&(R(C,d)||(h.value=C,d&&O.subPages.indexOf(d)>=0?y.value=d:d||(y.value=O.subPages[0]||"")),T=!0)}if(!T){var ie=localStorage.getItem("quant_last_page");ie&&t.value.some(function(f){return f.key===ie})?h.value=ie:$.default_view&&t.value.some(function(f){return f.key===$.default_view})&&(h.value=$.default_view);var J=localStorage.getItem("quant_last_subpage");J&&(y.value=J)}var Q=localStorage.getItem("quant_last_date");Q&&(r.value=Q);var _=localStorage.getItem("quant_last_view");_&&(z.value=_),window.__lazyLoaders&&window.__lazyLoaders[h.value]&&window.__quantGoPage&&window.__quantGoPage(h.value,y.value).catch(function(){})}(),fetch("/api/health").then(K=>K.json()).then(K=>{K.version&&(D.value=K.version)}).catch(()=>{});const se=localStorage.getItem("quant_user"),j=localStorage.getItem("quant_token"),B=!!(se&&j),A=Promise.all([Promise.resolve().then(()=>{k.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),H(S(),3e3,"marketData"),H(M(),2e3,"merrillStages")]).then(()=>{H(b(),3e3,"merrillClock")});if(n(),u(),B&&F.value&&s(),!B||!F.value){await A;return}let p=!0;try{p=(await fetch("/api/users/me")).ok}catch{p=!1}if(!p){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),F.value=null;return}if(F.value){const K=F.value.theme||"",T=window.__quantModules&&window.__quantModules.themes;let c=$.theme||"system",C=$.theme_hue!=null&&$.theme_hue!==""?$.theme_hue:null;if(C==null&&T&&typeof T.migrateLegacyTheme=="function"){const d=T.migrateLegacyTheme();if(d)c=d.mode,C=d.hue;else if(K&&T.LEGACY_MAP&&T.LEGACY_MAP[K]){const O=T.LEGACY_MAP[K];c=O[0],C=O[1]}}C==null&&(C=45),m(c,C)}if(window.__quantModules&&window.__quantModules.preferences){const T=await window.__quantModules.preferences.loadPreferences();var x=localStorage.getItem("quant_last_page");!x&&T.default_view&&t.value.some(function(c){return c.key===T.default_view})&&(h.value=T.default_view),T.theme&&m(T.theme,T.theme_hue!=null&&T.theme_hue!==""?T.theme_hue:null),v&&(T.chart_period==="weekly"||T.chart_period==="monthly")&&(v.value=T.chart_period)}await Promise.all([H(G(),2e3,"userConfig"),H(o(),2e3,"dates")]),W().catch(()=>{}),Y().catch(()=>{});const le=h.value==="strategies"?H(l(),2e3,"dashboard"):H(E(),2e3,"consensus");await Promise.all([le,H(te(),2e3,"users"),H(P(),2e3,"aiHistory")]),I().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:m,onUnmounted:t,watch:h,nextTick:y}=Vue,z=a(!1),v=window.__quantModules&&window.__quantModules.i18n||{},r=v.SUPPORTED_LOCALES||["zh-CN","en"],g=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(r.indexOf(g)!==-1?g:"zh-CN");typeof v.bindLocale=="function"&&v.bindLocale(o);const E=typeof v.t=="function"?v.t:function(U){return String(U)};function l(U){r.indexOf(U)!==-1&&(o.value=U,typeof v.setLocale=="function"&&v.setLocale(U),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",U))}function D(U,ce){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(U,ce):U==null?"":String(U)}function k(U){(U.key==="Enter"||U.key===" "||U.key==="Spacebar")&&(U.preventDefault(),U.currentTarget&&typeof U.currentTarget.click=="function"&&U.currentTarget.click())}let S=null;function M(){document.activeElement&&document.activeElement!==document.body&&(S=document.activeElement)}function b(){if(S&&S.isConnected)try{S.focus()}catch{}S=null}const n=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{n.value=!0}),window.addEventListener("offline",()=>{n.value=!1})),window.addEventListener("beforeunload",U=>{if(z.value)return U.preventDefault(),U.returnValue="您有未保存的配置变更，确定要离开吗？",U.returnValue});function s(U="light"){typeof navigator<"u"&&navigator.vibrate&&(U==="light"?navigator.vibrate(10):U==="medium"?navigator.vibrate(20):U==="heavy"&&navigator.vibrate([10,30,10]))}const u=useMerrillClock(),{merrillData:F,merrillStagesConfig:G,showMerrillDetail:W,merrillDetailData:Y,merrillClockConfig:te,merrillClockLastUpdated:I,merrillReevalResult:P,merrillReevalLoading:R,stages:H,indicatorList:ee,dimensionScoreList:$,detailDimensionScoreList:se,confidenceColor:j,timelineStages:B,clockPosition:A,merrillProgressStyle:p,FULL_CYCLE_MONTHS:x,getStageAngle:le,getCycleProgress:K,getCurrentStageMonths:T,getStageTotalMonths:c,isStageCompleted:C,getCharLabel:d,getAssetName:O,getRankColor:ie,fetchMerrillStages:J,fetchMerrillClock:Q,loadMerrillTimeline:_,showTimelineStage:f,merrillTimeline:Z,timelineLoading:pe,showStageDetail:we,saveMerrillClockConfig:Me,doMerrillReevaluate:Ve,startAutoRefresh:Ee,stopAutoRefresh:_e}=u,ne=a(localStorage.getItem("sidebar_collapsed")==="1");function ke(){ne.value=!ne.value,localStorage.setItem("sidebar_collapsed",ne.value?"1":"0")}const De=a(null),oe=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],X=e(()=>{var Ge,It,Ut;const U=((Ge=Ae.value)==null?void 0:Ge.role)||"guest",ce=((It=Ae.value)==null?void 0:It.group)||U,fe=((Ut=De.value)==null?void 0:Ut[ce])||null;return oe.map(Rt=>{if(fe&&fe.visible_menus&&Rt.key in fe.visible_menus&&!fe.visible_menus[Rt.key])return null;const fa={...Rt,name:E("nav."+Rt.key)||Rt.name};return fe!=null&&fe.visible_sub_pages&&(fa.subPages=Rt.subPages.filter(ss=>{const bd=Rt.key+"."+ss;return fe.visible_sub_pages[bd]!==!1})),Rt.key==="system"&&U==="guest"&&Rt.guestSubPages&&(fa.subPages=Rt.guestSubPages),fa}).filter(Boolean)});async function ge(){try{if(!localStorage.getItem("quant_token"))return;const ce=await fetch("/api/groups/my");if(ce.ok){const fe=await ce.json();De.value={[fe.group_id]:fe.group}}}catch(U){console.warn("loadGroupConfig:",U)}}const Te=a("strategies"),Le=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},Qe=a(Le.navMode);function vt(U){const ce=window.__quantModules&&window.__quantModules.navModeCore;Qe.value=ce?ce.normalizeNavMode(U):U==="tree"||U==="toptab"?U:"toptab",ce&&ce.writePrefs({navMode:Qe.value})}const Ze=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function Ye(U,ce=""){s("light"),Te.value=U,tt.value=ce,localStorage.setItem("quant_last_subpage",ce)}function it(){const U=X.value;if(!U||!U.length)return;if(!U.some(function(Ne){return Ne.key===Te.value})){const Ne=U[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Ne.key),Te.value=Ne.key,tt.value=Ne.subPages&&Ne.subPages[0]||"";return}const fe=U.find(function(Ne){return Ne.key===Te.value});fe&&fe.subPages&&fe.subPages.length&&!fe.subPages.includes(tt.value)&&(tt.value=fe.subPages[0])}const me=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],xe=a("multifactor"),Re=a(null),Ie=a(1e5),nt=a(!1),et=a(null);let $e=null,bt=null;async function St(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ce={initial_capital:Ie.value||1e5};Re.value&&Re.value.length===2&&(ce.start_date=Re.value[0],ce.end_date=Re.value[1]),nt.value=!0,et.value=null;try{const fe=await fetch("/api/strategies/"+xe.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ce)});if(!fe.ok){const It=await fe.json().catch(()=>({}));throw new Error(It.detail||"回测失败")}const Ne=await fe.json(),Ge=Ne.result||{};if(!Ge.success)throw new Error(Ge.message||"回测失败");Ne.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),et.value={total_return_pct:((Ge.total_return??0)*100).toFixed(2),annual_return_pct:((Ge.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ge.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ge.sharpe_ratio??0).toFixed(2),win_rate:((Ge.win_rate??0)*100).toFixed(2),out_sample:Ge.outsample_total_return===void 0?"":((Ge.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ge.overfit_warning||!1,message:Ge.message||""},ht(Ge.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(fe){ElementPlus.ElMessage.error(fe.message||"回测失败")}finally{nt.value=!1}}function ht(U){const ce=document.getElementById("backtestEquityChart");if(!ce||!U||U.length===0)return;const fe=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ne=()=>{bt=U,$e&&($e.dispose(),$e=null),$e=echarts.init(ce),$e.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ge=U.map(Ut=>Ut.date||Ut[0]),It=U.map(Ut=>Ut.value??Ut[1]);$e.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ge,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:It,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};fe?fe().then(Ne).catch(()=>{}):Ne()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){bt&&ht(bt)}));const tt=a("overview"),jt=e(()=>{const U=oe.find(ce=>ce.key===Te.value);return U?U.name:Te.value}),Mt=a(0),_t=e(()=>{Mt.value;const U={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ce=tt.value;return Te.value==="shortterm"&&ce==="market-review"?"qc-research-page":Te.value==="ops"&&ce==="execution"?"qc-strategies-page":U[Te.value]||""}),ft=a(!1),Tt=a({}),q=a([]);a("");const ue=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),be=a("day"),Ce=a("all"),Ae=a(null);h(X,function(){it()}),function(){if(typeof localStorage>"u")return;const U=localStorage.getItem("quant_user"),ce=localStorage.getItem("quant_token");if(U&&ce)try{Ae.value=JSON.parse(U)}catch{}}();const Ue=a(!1),V=a("kline"),re=a(null),Be=a(!1),Xe=a(localStorage.getItem("qc_detail_mode")||"split"),rt=a(window.innerWidth<=1024),xt=e(()=>Xe.value==="split"&&!rt.value);function Vt(U){Xe.value=U;try{localStorage.setItem("qc_detail_mode",U)}catch{}}window.addEventListener("resize",()=>{rt.value=window.innerWidth<=1024});const Ct=320,Pt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||Ct);function mt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Pt.value+"px")}mt();function Dt(U){const ce=Math.max(Ct,Math.min(U,2e3));Pt.value=ce,mt();try{localStorage.setItem("qc_split_width",String(ce))}catch{}}let wt=null;function Nt(U,ce){!ce||rt.value||(U.preventDefault(),wt={startX:U.clientX,startW:Pt.value,maxW:Math.max(Ct,Math.floor(ce.getBoundingClientRect().width/2))},document.body.classList.add("qc-split-resizing"))}function Yt(U){if(!wt)return;const ce=U.clientX-wt.startX;let fe=wt.startW+ce;fe=Math.max(Ct,Math.min(fe,wt.maxW)),Pt.value=fe,mt();try{localStorage.setItem("qc_split_width",String(fe))}catch{}}function ct(){wt&&(wt=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",Yt),document.addEventListener("mouseup",ct));function yt(U){const ce=U.target&&U.target.closest?U.target.closest("[data-split-resize]"):null;if(!ce)return;const fe=ce.closest("[data-split-root]");Nt(U,fe)}typeof document<"u"&&document.addEventListener("mousedown",yt,!0);const Ht={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},Je=a({});function Xt(U,ce){return Ht[ce]||ce}function Bt(U){const ce=oe.find(Ne=>Ne.key===U);if(!ce||!ce.subPages||!ce.subPages.length)return;if(!(Je.value[U]||[]).length){const Ne=ce.subPages[0];Je.value=Object.assign({},Je.value,{[U]:[{subPage:Ne,title:Xt(U,Ne)}]})}}function ta(U,ce){const fe=window.__quantModules&&window.__quantModules.tabsCore,Ne=Xt(U,ce);if(fe){const Ge=fe.openTab(Je.value,U,ce,Ne);Je.value=Ge.groups}else{const Ge=Je.value[U]||[];Ge.some(It=>It.subPage===ce)||(Je.value=Object.assign({},Je.value,{[U]:Ge.concat([{subPage:ce,title:Ne}])}))}Ye(U,ce)}function ha(U,ce){const fe=window.__quantModules&&window.__quantModules.tabsCore,Ne=tt.value;let Ge=null;if(fe)Ge=fe.closeTab(Je.value,U,ce,Ne),Je.value=Ge.groups;else{const Rt=Je.value[U]||[];Je.value=Object.assign({},Je.value,{[U]:Rt.filter(fa=>fa.subPage!==ce)})}if(!(Je.value[U]||[]).length){Bt(U);const Rt=oe.find(ss=>ss.key===U),fa=Rt&&Rt.subPages&&Rt.subPages[0];fa&&Ye(U,fa);return}const Ut=Ge?Ge.nextActive:null;Ut&&Ye(U,Ut)}function aa(U,ce){if(!(Je.value[U]||[]).some(Ne=>Ne.subPage===ce)){ta(U,ce);return}Ye(U,ce)}h([Te,tt],([U,ce])=>{Bt(U);const fe=Je.value[U]||[];ce&&!fe.some(Ne=>Ne.subPage===ce)&&(Je.value=Object.assign({},Je.value,{[U]:fe.concat([{subPage:ce,title:Xt(U,ce)}])}))},{immediate:!0});const sa=function(U){if(!(U.ctrlKey&&U.key==="Tab"))return;const ce=Te.value,fe=Je.value[ce]||[];if(fe.length<=1)return;U.preventDefault();const Ne=tt.value,Ge=Math.max(0,fe.findIndex(Rt=>Rt.subPage===Ne)),It=U.shiftKey?(Ge-1+fe.length)%fe.length:(Ge+1)%fe.length,Ut=fe[It];Ut&&aa(ce,Ut.subPage)};window.addEventListener("keydown",sa);const ca=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),Jt=a("light"),da=[45,220,0,140,270,320],N={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},he=a(45),je=a(function(){const U=window.__quantModules&&window.__quantModules.preferences;return U&&U.getPreference&&U.getPreference("theme")||"system"}());(function(){const U=window.__quantModules&&window.__quantModules.preferences,ce=U&&U.getPreference&&U.getPreference("theme_hue");ce!=null&&ce!==""&&(he.value=parseInt(ce,10))})();function Pe(U){return"hsl("+U+", 75%, 42%)"}function at(U){return N[U]||"自定义 "+U}const st=a(""),Lt=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),Ot=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),Kt=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],Zt=a({day:[],week:[],month:[],year:[]}),xa=a({});function ea(U,ce){let fe=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(fe=window.__quantModules.themes.applyTheme(U,ce)),Jt.value=fe&&fe.mode?fe.mode:U==="dark"||U==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function ya(U,ce){const fe=window.__quantModules&&window.__quantModules.preferences;if(!(!fe||!fe.setPreferences))try{fe.setPreferences({theme:U}),ce!=null&&ce!==""&&fe.setPreferences({theme_hue:parseInt(ce,10)})}catch{}}function ua(U,ce){ea(U,ce),ce!=null&&ce!==""&&(he.value=parseInt(ce,10));const fe=window.__quantModules&&window.__quantModules.themes;let Ne=U;fe&&fe.LEGACY_MAP&&fe.LEGACY_MAP[U]&&(Ne=fe.LEGACY_MAP[U][0]),Ne==="light"||Ne==="dark"||Ne==="system"?je.value=Ne:je.value=Jt.value,Ne==="system"&&(Ne=Jt.value),ya(Ne,ce),Ae.value&&(fetch(`/api/users/${Ae.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Ne})}),Ae.value.theme=Ne,localStorage.setItem("quant_user",JSON.stringify(Ae.value)))}function Wt(U){const ce=window.__quantModules&&window.__quantModules.preferences,fe=ce&&ce.getPreference?ce.getPreference("theme_hue"):null;ua(U,fe)}function ba(U){he.value=parseInt(U,10);const ce=window.__quantModules&&window.__quantModules.preferences,fe=ce&&ce.getPreference&&ce.getPreference("theme")||"light";ua(fe,he.value)}const va=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function Sa(U){va.value=!!U;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",U?"show":"hide")}catch{}}const Ta=e(()=>{const U=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return va.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...U]:U}),Qt=a("daily");(function(){try{const ce=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ce==="weekly"||ce==="monthly")&&(Qt.value=ce)}catch{}})();const L=a(!1),ae=a(""),de=a(!1),i=a(!1),w=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),qe=["MA5","MA10","MA20","MA60"],Oe=a(!1);let We=0;async function pt(U){if(!re.value)return!1;const ce=++We;L.value=!0,Qt.value=U;try{const Ne=await(await fetch(`/api/market/kline/${re.value.stock}?period=${U}&limit=60`)).json();if(!Ne.success||!Ne.data)throw new Error(Ne.message||"数据获取失败");return ae.value=Ne.degraded_from?"分钟数据("+Ne.degraded_from+")暂不可用, 已降级展示日线":"",Gs(re.value.stock),ce!==We?!1:(V.value!=="kline"||(i.value=!0,await y(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Ne.data,U,!1,{isMobile:cs.value,onLegend:Ge=>{Object.keys(w.value).forEach(It=>{It in Ge&&(w.value[It]=!!Ge[It])})}}),qt()),!0)}catch(fe){return console.error("[kline] 加载失败:",re.value&&re.value.stock,U,fe),V.value==="kline"&&(i.value=!1,ae.value="",ElementPlus.ElMessage.error("K线加载失败: "+(fe&&fe.message?fe.message:"数据源不可达，请重试"))),!1}finally{L.value=!1}}async function gt(U){if(Ha.value){de.value=!0,Qt.value=U;try{const fe=await(await fetch(`/api/market/kline/${Ha.value.code}?period=${U}&limit=60`)).json();if(!fe.success||!fe.data)throw new Error(fe.message||"数据获取失败");Oe.value=!0,await y(),window.__quantModules.charts.renderKlineTo("indexKlineChart",fe.data,U,!0,{isMobile:cs.value,onLegend:Ne=>{Object.keys(w.value).forEach(Ge=>{Ge in Ne&&(w.value[Ge]=!!Ne[Ge])})}}),qt()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{de.value=!1}}}async function Ft(U){if(!i.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await pt(U)}async function la(U){if(!Oe.value){ElementPlus.ElMessage.info("请先加载K线");return}await gt(U)}function Ke(U){const ce=(Ue.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Fa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ce&&ce.dispatchAction({type:"legendToggleSelect",name:U})}function qt(){["K线","MA5","MA10","MA20","MA60"].forEach(U=>{w.value[U]=!0})}async function ma(){const U=await fetch("/api/system/metrics");if(!U.ok)throw new Error("metrics "+U.status);const ce=await U.json(),fe=Array.isArray(ce)?ce:ce&&ce.data_sources||[];q.value=fe}const pa=()=>as,Et=()=>xs,Va=()=>Ao,il=()=>Pa,nl=()=>$a,ol=window.__quantAppLogic.data.create({currentView:be,statusFilter:Ce,dashboardData:Tt,loadHealthMetrics:ma,getLoadDashboardData:pa,getLastRefreshTime:Et,getFetchPoolSignals:Va}),{loading:rl,loadingView:cl,viewCache:dl,dates:Ra,selectedDate:$t,lastLoadTime:ul,consensus:wa,viewNote:vl,loadDates:is,refreshCalendarData:ns,exportCSV:os,loadConsensusData:Ca,loadDashboardCached:za}=ol,ml=window.__quantAppLogic.market.create({currentKlinePeriod:Qt,loadIndexKline:gt,rememberDialogTrigger:M,menus:X,currentPage:Te,currentSubPage:tt,stockDetail:re,selectedDate:$t}),{marketData:pl,indexDetailVisible:Fa,indexDetail:Ha,indexAiResult:fl,indexAiLoading:gl,fetchMarketData:Ba,showIndexDetail:hl,loadCachedIndexEval:yl,doIndexAiEvaluate:bl,disposeStockKline:rs,isMobile:cs,zoomKlineRange:wl,scoreAnimating:kl,scoreDelta:_l,scorePulse:xl,refreshStockScore:Ka,animateScoreEntrance:Wa,onTouchStart:Sl,onTouchEnd:Cl}=ml,ql=window.__quantAppLogic.ops.create({navigateTo:Ye,currentPage:Te,currentSubPage:tt}),{feishuConfig:ds,feishuTestStatus:El,feishuTestMessage:Ml,testFeishuWebhook:Tl,saveFeishuConfig:Pl,aiFabHidden:Dl,openAiFab:us,strategyRecommendations:Rl,aiUsage:zl,loadStrategyRecommendations:vs,loadAiUsage:Ua,sysMonitor:Al,analyticsRank:Ll,analyticsDays:Il,loadSysMonitor:ms,loadAnalytics:ps,healthDetail:Nl,loadHealthDetail:fs,reviewTriggering:Ol,triggerMarketReview:jl,factCheck:Vl,factCheckRunning:Fl,loadFactCheck:gs,triggerFactCheck:Hl,backups:Bl,backupCreating:Kl,loadBackups:hs,createBackup:Wl,restoreBackup:Ul,reportExporting:Gl,reportExportMsg:Yl,exportReport:Jl,tourVisible:Ql,tourStep:$l,tourSteps:Xl,maybeShowTour:Zl,skipTour:ei,finishTour:ti,feedbackText:ai,feedbackSubmitting:si,submitFeedback:li}=ql,ii=window.__quantAppLogic.nav.create({currentView:be,selectedDate:$t,dates:Ra,loadConsensusData:Ca,hapticFeedback:s}),{viewUnit:ni,datePickerType:oi,dateFormat:ri,canNavPrev:ci,canNavNext:di,switchView:ys,navigateDate:bs,disabledDate:ui,onDateChange:vi}=ii,mi=window.__quantAppLogic.keys.create({menus:X,subPageNames:Ht,navigateTo:Ye,currentPage:Te,currentView:be,navigateDate:bs,switchView:ys,getLoadDashboardData:pa,refreshCalendarData:ns,getLoadAiHistory:il,exportCSV:os,getShowBatchEvaluate:nl,openAiFab:us,toggleSidebar:ke,showStockDetail:ks}),{searchQuery:pi,searchStocks:fi,onSearchSelect:gi,shortcutHelpVisible:hi,commandPaletteVisible:yi,handleGlobalKeydown:ws}=mi;let Aa=0;async function ks(U){const ce=++Aa;M(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(U,""),Ya.value=null,Qt.value="daily",i.value=!1,V.value="kline",re.value=null,Be.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Ue.value=!0,y(()=>Wa());try{const fe=await fetch(`/api/calendar/stock/${U}?date=${$t.value}`);if(ce!==Aa)return;re.value=await fe.json(),re.value&&re.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(U,re.value.name)}catch{if(ce!==Aa)return;ElementPlus.ElMessage.error("加载失败"),re.value={stock:U,name:"",total_days:0}}finally{ce===Aa&&(Be.value=!1)}setTimeout(async()=>{await pt("daily"),Ka()},500),Xa(U)}const bi=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:i,stockDetailVisible:Ue,stockDetailTab:V,stockDetail:re,disposeStockKline:rs}):{},{chatSessions:wi,chatHistoryView:ki,selectedChatIds:_i,expandedChatDates:xi,expandedChatMonths:Si,expandedChatStocks:Ci,chatHistoryLoading:qi,chatHistoryError:Ei,allChatSessionsFlat:Mi,chatGroupedByDate:Ti,chatGroupedByMonth:Pi,chatGroupedByStock:Di,toggleSelectChat:Ri,toggleSelectChatDate:zi,toggleSelectChatMonth:Ai,toggleSelectChatStock:Li,toggleChatDateExpand:Ii,toggleChatMonthExpand:Ni,toggleChatStockExpand:Oi,selectAllChatSessions:ji,deleteSelectedChatSessions:Vi,viewChatSession:Fi,loadChatHistory:_s,deleteChatSession:Hi,renderMarkdown:Bi,stockChatInput:Ki,stockChatMessages:Wi,stockChatLoading:Ui,stockChatError:Gi,askStockSend:Yi,askStockQuick:Ji}=bi,Qi=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:Ae,applyTheme:ea,allMenuDefs:oe,loadGroupConfig:ge}):{},{userList:$i,userSearch:Xi,groupFilter:Zi,userPageTab:en,expandedGroups:tn,addMemberGroupMap:an,filteredUsers:sn,toggleGroupExpand:ln,removeMemberFromGroupInline:nn,addMemberToGroupInline:on,changeUserGroup:rn,showAddUser:cn,editingUser:dn,userForm:un,savingUser:vn,editingGroup:mn,menuConfigDialog:pn,memberDialog:fn,groupEditForm:gn,subPageCache:hn,showAddGroup:yn,addGroupForm:bn,savingGroup:wn,groupMembers:kn,addMemberUsername:_n,selectedMemberGroup:xn,subPageSectionExpanded:Sn,toggleSubPageSection:Cn,getGroupMemberCount:qn,getMenuEnabledCount:En,groupCount:Mn,openMemberManager:Tn,loadGroupMembers:Pn,addMemberToGroup:Dn,removeMemberFromGroup:Rn,availableUsersForGroup:zn,onParentToggle:An,openMenuConfig:Ln,saveMenuConfig:In,deleteGroupConfig:Nn,createGroup:On,allGroups:jn,getGroupName:Vn,loadAllGroups:Ga,loadUsers:La,editUser:Fn,saveUser:Hn,deleteUser:Bn,toggleUserEnabled:Kn,resetUserPassword:Wn}=Qi,Un=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:wa,currentPage:Te,currentSubPage:tt,dashboardData:Tt,searchKeyword:st,statusFilter:Ce,strategyFilter:Ot,strategyFilterCounts:Zt}):{},{applyStrategyFilter:lf,statusCounts:Gn,stockPool:Yn,strategyDistribution:Jn,strategyPreviewCount:Qn,saveStrategyFilter:$n,filteredConsensusRank:Xn,currentPoolSize:Zn,filteredStrategyCounts:eo,poolChangeBadge:to,timeBarPercent:ao,lastRefreshTime:xs,timeSinceRefresh:so,navigateToStrategyFilter:lo}=Un,io=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:z,consensus:wa}):{},{aiResult:Ya,lastEvalTime:no,evalHistoryComparison:oo,checklistItems:ro,aiHistory:Ss,selectedHistoryIds:Cs,expandedDates:qs,expandedMonths:co,expandedStocks:Es,poolSignals:uo,toggleMonthExpand:vo,aiHistoryView:mo,selectedWatchlistCodes:Ms,showAutoEvaluateSettings:Ts,savingConfig:Ps,autoEvaluateScope:Ds,aiVendors:po,aiCatalog:fo,aiModelsError:go,testingAllModels:ho,savingAiModels:yo,loadAiVendors:Ia,loadAiCatalog:Rs,saveAiVendors:zs,saveAiModels:bo,testVendorModel:wo,testAllVendorModels:ko,fetchVendorModels:_o,addVendorFromCatalog:xo,addCustomVendor:So,addVendorModel:Co,removeVendorModel:qo,removeVendor:Eo,toggleVendorKeyReveal:Mo,toggleVendorEdit:To,autoEvaluateConfig:Ja,aiLoading:Qa,aiEvalStage:As,aiEvalElapsed:Ls,aiEvalError:Is,showBatchEvaluate:$a,batchStocks:Ns,batchRunning:Os,batchTotal:js,batchCompleted:Vs,batchCurrent:Fs,batchStatuses:Hs,batchResults:Bs,batchEvalErrors:Ks,aiConfig:Ws,selectedPreset:Po,providerInfo:Do,aiPresets:nf,applyPreset:Ro,onProviderChange:zo,fetchPoolSignals:Ao,cancelPoolSignals:Us,loadLastEvaluation:Xa}=io,Lo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:Ae,selectedDate:$t,stockDetail:re,stockDetailTab:V,stockDetailVisible:Ue,stockDetailLoading:Be,stockKlineLoaded:i,viewCache:dl,animateScoreEntrance:Wa,loadStockKline:pt,refreshStockScore:Ka,disposeStockKline:rs,aiHistory:Ss,aiLoading:Qa,aiEvalStage:As,aiEvalElapsed:Ls,aiEvalError:Is,aiResult:Ya,loadLastEvaluation:Xa,autoEvaluateConfig:Ja,autoEvaluateScope:Ds,batchStocks:Ns,batchRunning:Os,batchTotal:js,batchCompleted:Vs,batchCurrent:Fs,batchStatuses:Hs,batchResults:Bs,batchEvalErrors:Ks,expandedDates:qs,expandedStocks:Es,savingConfig:Ps,selectedHistoryIds:Cs,selectedWatchlistCodes:Ms,showAutoEvaluateSettings:Ts,showBatchEvaluate:$a}):{},{quickEvalStock:Io,evalStrategy:No,watchlistSort:Oo,watchlist:jo,watchlistCodes:Vo,sortedWatchlist:Fo,getWatchlistScore:Ho,getLatestScore:of,addSearchResult:Bo,evaluatedCodes:Ko,klineLoadedCodes:Wo,markKlineLoaded:Gs,watchlistSearch:Uo,watchlistResults:Go,watchlistSearching:Yo,dataRefreshConfig:Jo,dataRefreshReloading:Qo,dataRefreshSaving:$o,aiHistoryLoading:Xo,aiHistoryError:Zo,aiHistoryTotal:er,aiHistoryLoadingMore:tr,hasMoreAiHistory:ar,loadMoreAiHistory:sr,watchlistLoading:lr,doAiEvaluate:ir,loadAiHistory:Pa,deleteSingleHistory:nr,toggleSelectHistory:or,clearSelection:rr,clearWatchlistSelection:cr,batchReevaluateHistory:dr,batchAddToWatchlist:ur,batchRemoveWatchlist:vr,toggleSelectWatchlist:mr,selectAllHistory:pr,selectAllWatchlist:fr,deleteSelectedHistory:gr,loadAutoEvaluateConfig:Ys,saveAutoEvaluateConfig:hr,loadWatchlist:Js,addToWatchlist:yr,removeFromWatchlist:br,clearWatchlist:wr,toggleWatchlist:kr,showStockKline:_r,preloadingKline:xr,preloadWatchlistKline:Qs,watchlistEvaluate:Sr,batchEvaluateWatchlist:Cr,batchEvaluateSelected:qr,searchStockForWatchlist:Er,loadDataRefreshConfig:$s,saveDataRefreshConfig:Mr,triggerDataReload:Tr,triggerDataPull:Pr,dataPullRunning:Dr,groupedByDate:Rr,aiHistoryByStock:zr,groupedByMonth:Ar,aiHistoryStockCount:Lr,scoreDistribution:Ir,quickEvaluate:Nr,toggleDateExpand:Or,toggleSelectDate:jr,toggleSelectMonth:Vr,toggleStockExpand:Fr,toggleSelectStock:Hr,registerTrendChart:Br,viewAiResult:Kr,doBatchEvaluate:Wr,realtimeQuotes:Ur,realtimeDegraded:Gr,realtimeWsState:Yr,connectRealtimeQuotes:Jr,disconnectRealtimeQuotes:Qr,quoteWarningFor:$r,realtimeQuoteColor:Xr,realtimePriceText:Zr,realtimePctText:ec,realtimeRatioText:tc,REALTIME_DEGRADED_TEXT:ac,REALTIME_FALLBACK_TEXT:sc}=Lo,lc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:me}):{},{btStrategyOptions:ic,btSelectedStrategies:nc,toggleBtStrategy:oc,btDateRange:rc,btCapital:cc,btCommissionRate:dc,btIncludeBenchmark:uc,btRunning:vc,btResult:mc,btError:pc,btMetrics:fc,btAnnualReturns:gc,btTrades:hc,btStrategyMetricsRows:yc,btDrawdownRegion:bc,runBacktestWorkbench:wc,exportBacktestCSV:kc,registerBacktestNavChart:_c,btFmtNum:xc}=lc,Sc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:z,aiConfig:Ws,aiLoading:Qa,feishuConfig:ds,currentTheme:Jt,changeTheme:ua,autoEvaluateConfig:Ja,currentUser:Ae,strategyFilter:Ot,applyTheme:ea,dashboardData:Tt,lastRefreshTime:xs,saveAiModels:bo}):{},{configSaving:Cc,globalConfigDirty:qc,lastSavedTime:Ec,feishuConfigOriginal:rf,aiConfigOriginal:cf,tushareConfigOriginal:df,tushareConfig:Mc,tushareStatus:Tc,datasourceConfig:Pc,datasourceStatus:Dc,syncingData:Rc,stockCount:zc,tradeDateCount:Ac,aiStatus:Lc,appVersion:Xs,showImportDialog:Ic,rateLimitConfig:Nc,rateLimitDirty:Oc,rateLimitSaving:jc,loadRateLimit:Za,saveRateLimit:Vc,saveAiConfig:Fc,testAiApi:Hc,exportConfig:Bc,importConfig:Kc,saveAllConfig:Wc,resetAllConfig:Uc,testTushareConnection:Gc,checkTushareConnection:Na,syncStockData:Yc,loadTushareConfig:Zs,loadDatasourceConfig:el,saveDatasourceConfig:Jc,testDatasource:Qc,toggleDatasourceKeyReveal:$c,toggleDatasourceEdit:Xc,loadFeishuConfig:es,loadAiConfig:Oa,loadUserConfig:tl,loadSystemStatus:ts,loadDashboardData:as}=Sc,Zc=window.__quantAppLogic.auth.create({currentUser:Ae,loadUserConfig:tl,loadDates:is,loadDashboardData:as,loadDashboardCached:za,loadHealthMetrics:ma,loadConsensusData:Ca,applyTheme:ea,maybeShowTour:Zl,loadAiVendors:Ia}),{loginForm:ed,logining:td,guestLogining:ad,showChangePassword:sd,changePasswordForm:ld,changingPassword:id,showSetupWizard:nd,setupForm:od,setupStep:rd,checkSetupWizard:cd,completeSetupWizard:dd,resetSetupWizard:ud,handleLogin:vd,handleGuestLogin:md,handleLogout:pd,doChangePassword:fd}=Zc;window.__quantAppLogic.watch.register({strategyFilter:Ot,currentView:be,statusFilter:Ce,currentPage:Te,currentSubPage:tt,menus:X,currentUser:Ae,strategyFilterCounts:Zt,lazyTick:Mt,dates:Ra,selectedDate:$t,consensus:wa,loadConsensusData:Ca,fetchMerrillClock:Q,fetchMarketData:Ba,loadWatchlist:Js,loadAiHistory:Pa,preloadWatchlistKline:Qs,loadChatHistory:_s,loadSystemStatus:ts,checkTushareConnection:Na,loadSysMonitor:ms,loadAnalytics:ps,loadHealthDetail:fs,loadHealthMetrics:ma,loadAiUsage:Ua,loadFactCheck:gs,loadAutoEvaluateConfig:Ys,loadDatasourceConfig:el,loadFeishuConfig:es,loadAiConfig:Oa,loadAiVendors:Ia,loadRateLimit:Za,loadDataRefreshConfig:$s,loadBackups:hs,loadAllGroups:Ga,loadUsers:La,stockDetailTab:V,stockDetailVisible:Ue,stockKlineLoaded:i,loadStockKline:pt,currentKlinePeriod:Qt,showMerrillDetail:W,indexDetailVisible:Fa,restoreDialogFocus:b});const gd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:ws,applyTheme:ea,menus:X,currentPage:Te,currentSubPage:tt,currentView:be,currentKlinePeriod:Qt,selectedDate:$t,dates:Ra,loadDates:is,loadConsensusData:Ca,loadDashboardCached:za,appVersion:Xs,themes:ca,fetchMarketData:Ba,fetchMerrillStages:J,fetchMerrillClock:Q,loadMerrillTimeline:_,showTimelineStage:f,merrillTimeline:Z,timelineLoading:pe,loadAiConfig:Oa,loadAiVendors:Ia,loadAiCatalog:Rs,currentUser:Ae,loadUserConfig:tl,loadAutoEvaluateConfig:Ys,loadGroupConfig:ge,loadUsers:La,loadAllGroups:Ga,loadAiHistory:Pa}),{runOnMounted:hd}=gd;window.__quantGoPage=async(U,ce)=>{try{const fe=window.__lazyLoaders&&window.__lazyLoaders[U];fe&&await fe()}catch(fe){console.warn("[lazy] 页面组件加载失败",U,fe)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(fe=>{fe&&fe.name&&!fe.__quantRegistered&&(window.__quantApp.component(fe.name,fe),fe.__quantRegistered=!0)}),Mt&&Mt.value++,Te.value=U,ce&&(tt.value=ce)};let qa;h(Te,async U=>{var ce;s("light");try{const fe=oe.find(function(Ne){return Ne.key===U});document.title=(fe?fe.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",U),U!=="calendar"&&typeof Us=="function"&&Us();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:U})}).catch(()=>{})}catch(fe){console.warn("pageView track failed:",fe)}if(qa&&(clearInterval(qa),qa=null),U==="strategies")await za(),qa=setInterval(()=>{za().catch(()=>{})},5*60*1e3);else if(U==="calendar")$t.value&&await Ca();else if(U==="ai")vs(),Ua(),await Pa();else if(U==="system"){if(!$t.value){const Ne=await(await fetch("/api/dashboard")).json(),Ge=Ne.data||Ne;Ge.latest_date&&($t.value=Ge.latest_date)}if($t.value){const fe=["day","week","month","year"];for(const Ne of fe)try{const It=await(await fetch(`/api/view/${Ne}/${$t.value}?status=all`)).json();Zt.value[Ne]=It.stocks||[]}catch(Ge){console.warn("loadConsensusData view load failed:",Ge)}(!wa.value||wa.value.length===0)&&(wa.value=Zt.value.day||[])}((ce=Ae.value)==null?void 0:ce.role)==="admin"&&(await La(),await es(),await Zs(),await ts(),await Oa(),await Za(),Na(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Na,36e5)))}}),m(async()=>{await hd()}),Ee(),_(),t(()=>{qa&&clearInterval(qa),window.removeEventListener("keydown",ws),window.removeEventListener("keydown",sa)});function yd(U,ce=2){return U==null||U===""||isNaN(Number(U))?"--":Number(U).toFixed(ce)}return{currentPage:Te,pageComp:_t,currentSubPage:tt,sidebarCollapsed:ne,menus:X,navMode:Qe,setNavMode:vt,tabGroups:Je,openTab:ta,closeTab:ha,activateTab:aa,fmtNum:yd,sanitizeHtml:D,keyClick:k,isOnline:n,currentUser:Ae,allMenuDefs:oe,t:E,locale:o,changeLanguage:l,currentPageName:jt,subPageNames:Ht,searchQuery:pi,searchStocks:fi,onSearchSelect:gi,selectedDate:$t,onDateChange:vi,disabledDate:ui,refreshCalendarData:ns,exportCSV:os,viewNote:vl,loading:rl,lastLoadTime:ul,resetSetupWizard:ud,showChangePassword:sd,themes:ca,currentTheme:Jt,changeTheme:ua,changeThemeMode:Wt,changeThemeHue:ba,handleLogout:pd,themeHues:da,themeHueNames:N,themeHue:he,themeMode:je,hueColor:Pe,hueName:at,marketData:pl,merrillData:F,merrillTimeline:Z,timelineLoading:pe,merrillStagesConfig:G,fetchMerrillStages:J,healthMetrics:q,feishuConfig:ds,feishuTestStatus:El,feishuTestMessage:Ml,shortcutHelpVisible:hi,shortcutHelpItems:Ze,commandPaletteVisible:yi,tourVisible:Ql,tourStep:$l,tourSteps:Xl,skipTour:ei,finishTour:ti,backups:Bl,backupCreating:Kl,loadBackups:hs,createBackup:Wl,restoreBackup:Ul,reportExporting:Gl,reportExportMsg:Yl,exportReport:Jl,sysMonitor:Al,analyticsRank:Ll,analyticsDays:Il,loadSysMonitor:ms,loadAnalytics:ps,healthDetail:Nl,loadHealthDetail:fs,reviewTriggering:Ol,triggerMarketReview:jl,factCheck:Vl,factCheckRunning:Fl,loadFactCheck:gs,triggerFactCheck:Hl,strategyRecommendations:Rl,aiUsage:zl,loadStrategyRecommendations:vs,loadAiUsage:Ua,aiFabHidden:Dl,openAiFab:us,feedbackText:ai,feedbackSubmitting:si,submitFeedback:li,backtestStrategies:me,backtestStrategy:xe,backtestRange:Re,backtestCapital:Ie,backtestRunning:nt,backtestResult:et,runBacktest:St,btStrategyOptions:ic,btSelectedStrategies:nc,toggleBtStrategy:oc,btDateRange:rc,btCapital:cc,btCommissionRate:dc,btIncludeBenchmark:uc,btRunning:vc,btResult:mc,btError:pc,btMetrics:fc,btAnnualReturns:gc,btTrades:hc,btStrategyMetricsRows:yc,btDrawdownRegion:bc,runBacktestWorkbench:wc,exportBacktestCSV:kc,registerBacktestNavChart:_c,btFmtNum:xc,fetchMarketData:Ba,fetchMerrillClock:Q,testFeishuWebhook:Tl,saveFeishuConfig:Pl,merrillClockConfig:te,merrillClockLastUpdated:I,merrillReevalResult:P,merrillReevalLoading:R,saveMerrillClockConfig:Me,doMerrillReevaluate:Ve,dataRefreshConfig:Jo,dataRefreshReloading:Qo,dataRefreshSaving:$o,loadDataRefreshConfig:$s,saveDataRefreshConfig:Mr,triggerDataReload:Tr,triggerDataPull:Pr,dataPullRunning:Dr,indexDetailVisible:Fa,indexDetail:Ha,indexAiResult:fl,indexAiLoading:gl,loadCachedIndexEval:yl,showIndexDetail:hl,doIndexAiEvaluate:bl,klinePeriods:Ta,currentKlinePeriod:Qt,klineLoading:L,indexKlineLoading:de,stockKlineLoaded:i,indexKlineLoaded:Oe,klineDegradeNote:ae,klineShowMinutes:va,toggleKlineShowMinutes:Sa,loadStockKline:pt,switchKlinePeriod:Ft,loadIndexKline:gt,switchIndexKlinePeriod:la,zoomKlineRange:wl,MA_LINES:qe,klineMaVisible:w,toggleKlineMa:Ke,scoreAnimating:kl,scoreDelta:_l,scorePulse:xl,refreshStockScore:Ka,animateScoreEntrance:Wa,showMerrillDetail:W,merrillDetailData:Y,showStageDetail:we,getCharLabel:d,getAssetName:O,getRankColor:ie,timelineStages:B,getStageAngle:le,getCycleProgress:K,getCurrentStageMonths:T,getStageTotalMonths:c,isStageCompleted:C,stages:H,indicatorList:ee,dimensionScoreList:$,confidenceColor:j,views:ue,currentView:be,statusFilter:Ce,loginForm:ed,logining:td,guestLogining:ad,dashboardData:Tt,loadingView:cl,dates:Ra,consensus:wa,searchKeyword:st,stockDetailVisible:Ue,stockDetailTab:V,stockDetail:re,stockDetailLoading:Be,detailDisplayMode:Xe,setDetailDisplayMode:Vt,isNarrow:rt,detailSplitEnabled:xt,splitWidth:Pt,setSplitWidth:Dt,SPLIT_DEFAULT_W:Ct,aiLoading:Qa,aiEvalStage:As,aiEvalElapsed:Ls,aiEvalError:Is,showBatchEvaluate:$a,batchStocks:Ns,batchRunning:Os,batchTotal:js,batchCompleted:Vs,batchCurrent:Fs,batchStatuses:Hs,batchResults:Bs,batchEvalErrors:Ks,aiConfig:Ws,userList:$i,showAddUser:cn,editingUser:dn,userForm:un,savingUser:vn,userSearch:Xi,filteredUsers:sn,groupFilter:Zi,userPageTab:en,expandedGroups:tn,addMemberGroupMap:an,toggleGroupExpand:ln,removeMemberFromGroupInline:nn,addMemberToGroupInline:on,changeUserGroup:rn,statusCounts:Gn,stockPool:Yn,poolSignals:uo,aiResult:Ya,aiHistory:Ss,groupedByDate:Rr,groupedByMonth:Ar,expandedDates:qs,expandedMonths:co,aiHistoryByStock:zr,aiHistoryStockCount:Lr,expandedStocks:Es,aiHistoryView:mo,aiHistoryLoading:Xo,aiHistoryError:Zo,aiHistoryTotal:er,aiHistoryLoadingMore:tr,hasMoreAiHistory:ar,loadMoreAiHistory:sr,watchlistLoading:lr,scoreDistribution:Ir,quickEvalStock:Io,evalStrategy:No,checklistItems:ro,evalHistoryComparison:oo,quickEvaluate:Nr,selectedHistoryIds:Cs,showAutoEvaluateSettings:Ts,savingConfig:Ps,autoEvaluateConfig:Ja,autoEvaluateScope:Ds,strategyList:Lt,toggleDateExpand:Or,toggleMonthExpand:vo,toggleSelectDate:jr,toggleSelectMonth:Vr,toggleSelectStock:Hr,toggleStockExpand:Fr,registerTrendChart:Br,selectedWatchlistCodes:Ms,clearWatchlistSelection:cr,toggleSelectWatchlist:mr,selectAllHistory:pr,selectAllWatchlist:fr,batchRemoveWatchlist:vr,batchEvaluateSelected:qr,batchReevaluateHistory:dr,batchAddToWatchlist:ur,viewUnit:ni,datePickerType:oi,dateFormat:ri,canNavPrev:ci,canNavNext:di,handleLogin:vd,handleGuestLogin:md,switchView:ys,navigateDate:bs,navigateTo:Ye,loadDashboardData:as,loadConsensusData:Ca,showStockDetail:ks,doAiEvaluate:ir,doBatchEvaluate:Wr,loadAiHistory:Pa,loadLastEvaluation:Xa,lastEvalTime:no,viewAiResult:Kr,saveAiConfig:Fc,testAiApi:Hc,exportConfig:Bc,importConfig:Kc,configSaving:Cc,configChanged:z,watchlist:jo,watchlistCodes:Vo,watchlistSearch:Uo,watchlistResults:Go,watchlistSearching:Yo,watchlistSort:Oo,sortedWatchlist:Fo,getWatchlistScore:Ho,addSearchResult:Bo,evaluatedCodes:Ko,klineLoadedCodes:Wo,markKlineLoaded:Gs,loadWatchlist:Js,addToWatchlist:yr,removeFromWatchlist:br,clearWatchlist:wr,searchStockForWatchlist:Er,toggleWatchlist:kr,batchEvaluateWatchlist:Cr,watchlistEvaluate:Sr,showStockKline:_r,preloadWatchlistKline:Qs,preloadingKline:xr,realtimeQuotes:Ur,realtimeDegraded:Gr,realtimeWsState:Yr,connectRealtimeQuotes:Jr,disconnectRealtimeQuotes:Qr,quoteWarningFor:$r,realtimeQuoteColor:Xr,realtimePriceText:Zr,realtimePctText:ec,realtimeRatioText:tc,REALTIME_DEGRADED_TEXT:ac,REALTIME_FALLBACK_TEXT:sc,toggleSelectHistory:or,clearSelection:rr,deleteSingleHistory:nr,deleteSelectedHistory:gr,saveAutoEvaluateConfig:hr,editUser:Fn,saveUser:Hn,deleteUser:Bn,loadUsers:La,allGroups:jn,loadAllGroups:Ga,getGroupName:Vn,toggleUserEnabled:Kn,resetUserPassword:Wn,selectedPreset:Po,applyPreset:Ro,onProviderChange:zo,providerInfo:Do,globalConfigDirty:qc,lastSavedTime:Ec,tushareConfig:Mc,tushareStatus:Tc,syncingData:Rc,stockCount:zc,tradeDateCount:Ac,aiStatus:Lc,appVersion:Xs,showImportDialog:Ic,rateLimitConfig:Nc,rateLimitDirty:Oc,rateLimitSaving:jc,loadRateLimit:Za,saveRateLimit:Vc,saveAllConfig:Wc,resetAllConfig:Uc,testTushareConnection:Gc,syncStockData:Yc,loadTushareConfig:Zs,loadFeishuConfig:es,loadSystemStatus:ts,loadAiConfig:Oa,aiVendors:po,aiCatalog:fo,aiModelsError:go,testingAllModels:ho,savingAiModels:yo,loadAiVendors:Ia,loadAiCatalog:Rs,saveAiVendors:zs,saveAiModels:zs,testVendorModel:wo,testAllVendorModels:ko,fetchVendorModels:_o,addVendorFromCatalog:xo,addCustomVendor:So,addVendorModel:Co,removeVendorModel:qo,removeVendor:Eo,toggleVendorKeyReveal:Mo,toggleVendorEdit:To,checkTushareConnection:Na,datasourceConfig:Pc,datasourceStatus:Dc,loadDatasourceConfig:el,saveDatasourceConfig:Jc,testDatasource:Qc,toggleDatasourceKeyReveal:$c,toggleDatasourceEdit:Xc,strategyFilter:Ot,strategyFilterOptions:Kt,strategyFilterCounts:Zt,strategyPreviewCount:Qn,saveStrategyFilter:$n,filteredConsensusRank:Xn,currentPoolSize:Zn,filteredStrategyCounts:eo,strategyDistribution:Jn,expandedStrategies:xa,poolChangeBadge:to,timeBarPercent:ao,timeSinceRefresh:so,navigateToStrategyFilter:lo,showUserMenu:ft,toggleSidebar:ke,groupsConfig:De,loadGroupConfig:ge,editingGroup:mn,groupEditForm:gn,showAddGroup:yn,addGroupForm:bn,savingGroup:wn,menuConfigDialog:pn,memberDialog:fn,groupMembers:kn,addMemberUsername:_n,selectedMemberGroup:xn,subPageSectionExpanded:Sn,toggleSubPageSection:Cn,getGroupMemberCount:qn,getMenuEnabledCount:En,groupCount:Mn,openMemberManager:Tn,loadGroupMembers:Pn,addMemberToGroup:Dn,removeMemberFromGroup:Rn,availableUsersForGroup:zn,subPageCache:hn,onParentToggle:An,openMenuConfig:Ln,saveMenuConfig:In,deleteGroupConfig:Nn,createGroup:On,changePasswordForm:ld,changingPassword:id,doChangePassword:fd,showSetupWizard:nd,setupForm:od,setupStep:rd,checkSetupWizard:cd,completeSetupWizard:dd,chatSessions:wi,chatHistoryView:ki,selectedChatIds:_i,expandedChatDates:xi,expandedChatMonths:Si,expandedChatStocks:Ci,chatHistoryLoading:qi,chatHistoryError:Ei,allChatSessionsFlat:Mi,chatGroupedByDate:Ti,chatGroupedByMonth:Pi,chatGroupedByStock:Di,toggleSelectChat:Ri,toggleSelectChatDate:zi,toggleSelectChatMonth:Ai,toggleSelectChatStock:Li,toggleChatDateExpand:Ii,toggleChatMonthExpand:Ni,toggleChatStockExpand:Oi,selectAllChatSessions:ji,deleteSelectedChatSessions:Vi,viewChatSession:Fi,loadChatHistory:_s,deleteChatSession:Hi,renderMarkdown:Bi,stockChatInput:Ki,stockChatMessages:Wi,stockChatLoading:Ui,stockChatError:Gi,askStockSend:Yi,askStockQuick:Ji,onTouchStart:Sl,onTouchEnd:Cl,hapticFeedback:s}}})();_a.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=Vv;window.__quantComponents.Header=Lm;window.__quantComponents.SubNav=Ym;window.__quantComponents.MobileNav=mp;window.__quantComponents.StockList=Gp;window.__quantComponents.TopTabs=af;window.__quantComponents.AppIcon=_a;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default sf();
