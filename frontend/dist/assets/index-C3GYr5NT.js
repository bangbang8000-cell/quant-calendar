var Md=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as Td,L as me,O as pa,Z as Pd,au as Zt,M as be,P as Ee,aW as Dd,a0 as Ke,_ as Be,F as vt,al as qt,S as dt,a1 as ut,X as ma,ai as Vt,q as Ta,o as Ba,a8 as rs,r as Lt,e as ot,av as Rd,Y as La,$ as xa,R as zd,aC as va,T as Ad,Q as la,p as Ld,n as Id}from"./vendor-vue-DDF9zi1T.js";import{e as Nd,E as Od,a as jd,b as Vd,c as Fd,z as Hd}from"./vendor-ep-VOop1zGa.js";import{C as Bd,a as Kd,W as Wd,I as Ud,S as Gd,B as Yd,F as Jd,b as Qd,c as $d,d as Xd,e as Zd,f as eu,P as tu,g as au,h as su,i as nu,T as iu,j as lu,L as ou,k as ru,G as cu,U as du,l as uu,m as vu,n as mu,D as pu,o as fu,p as gu,M as hu,q as yu,R as bu,r as wu,s as ku,K as _u,t as xu,u as Su,v as Cu,w as qu,x as Eu,y as Mu,z as Tu,A as Pu,E as Du,H as Ru,O as zu,J as Au,N as Lu,Q as Iu,V as Nu,X as Ou,Y as ju,Z as Vu,_ as Fu,$ as Hu,a0 as Bu,a1 as Ku,a2 as Wu,a3 as Uu,a4 as Gu,a5 as Yu,a6 as Ju,a7 as Qu,a8 as $u,a9 as Xu,aa as Zu,ab as ev,ac as tv,ad as av,ae as sv,af as nv,ag as iv,ah as lv,ai as ov,aj as rv,ak as cv,al as dv,am as uv,an as vv,ao as mv,ap as pv,aq as fv,ar as gv,as as hv,at as yv,au as bv,av as wv,aw as kv,ax as _v,ay as xv,az as Sv,aA as Cv,aB as qv,aC as Ev,aD as Mv,aE as Tv,aF as Pv,aG as Dv,aH as Rv,aI as zv,aJ as Av,aK as Lv,aL as Iv,aM as Nv,aN as Ov,aO as jv,aP as Vv,aQ as Fv}from"./vendor-lucide-DidEUx9K.js";var Mf=Md((Vf,je)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))t(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const P of p.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&t(P)}).observe(document,{childList:!0,subtree:!0});function f(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function t(d){if(d.ep)return;d.ep=!0;const p=f(d);fetch(d.href,p)}})();window.Vue=Td;const fa=Nd||{};window.ElementPlus=fa;fa.ElMessage=fa.ElMessage||Od;fa.ElMessageBox=fa.ElMessageBox||jd;fa.ElNotification=fa.ElNotification||Vd;fa.ElLoading=fa.ElLoading||Fd;window.ElementPlusLocaleZhCn={default:Hd};(function(){const a=[45,220,0,140,270,320],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},f={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(i,w,h){return"hsl("+i+", "+w+"%, "+h+"%)"}function d(i,w,h){w=w/100,h=h/100;const C=function(o){return(o+i/30)%12},R=w*Math.min(h,1-h),x=function(o){return h-R*Math.max(-1,Math.min(C(o)-3,Math.min(9-C(o),1)))};return Math.round(255*x(0))+", "+Math.round(255*x(8))+", "+Math.round(255*x(4))}function p(i){const w=d(i,75,42);return{"--primary-color":t(i,75,42),"--primary-rgb":w,"--color-primary":t(i,75,42),"--qc-primary":t(i,75,42),"--qc-primary-50":t(i,90,96),"--qc-primary-100":t(i,85,92),"--qc-primary-200":t(i,80,84),"--qc-primary-300":t(i,75,72),"--qc-primary-400":t(i,70,58),"--qc-primary-500":t(i,75,48),"--qc-primary-600":t(i,80,42),"--qc-primary-700":t(i,85,35),"--qc-primary-800":t(i,88,28),"--qc-primary-900":t(i,90,20),"--qc-primary-foreground":"#ffffff","--text-link":t(i,70,40),"--secondary-color":t(i,70,55),"--card-border":t(i,55,82),"--bg-selected":"rgba("+w+", 0.08)","--btn-primary-bg":t(i,80,32),"--btn-primary-border":t(i,80,32),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(i,82,28),"--btn-primary-hover-border":t(i,82,28),"--btn-primary-active-bg":t(i,85,24),"--btn-primary-active-border":t(i,85,24),"--btn-primary-plain-bg":"rgba("+w+", 0.08)","--btn-primary-plain-border":"rgba("+w+", 0.25)","--btn-primary-plain-color":t(i,80,32),"--btn-primary-plain-hover-bg":"rgba("+w+", 0.15)","--btn-primary-plain-hover-border":t(i,80,32),"--btn-primary-text-color":t(i,80,32),"--gradient":"linear-gradient(135deg, "+t(i,80,28)+" 0%, "+t(i,76,34)+" 50%, "+t(i,70,44)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(i,76,34)+" 0%, "+t(i,85,26)+" 100%)","--qc-nav-item-active":t(i,80,35),"--qc-nav-item-active-bg":t(i,85,92),"--qc-nav-item-active-border":t(i,75,48),"--qc-nav-badge-bg":t(i,85,92),"--qc-nav-badge-text":t(i,80,35),"--qc-ring":t(i,70,58)}}function P(i){const w=d(i,85,65);return{"--primary-color":t(i,85,65),"--primary-rgb":w,"--color-primary":t(i,85,65),"--qc-primary":t(i,90,65),"--qc-primary-50":t(i,50,18),"--qc-primary-100":t(i,55,22),"--qc-primary-200":t(i,55,26),"--qc-primary-300":t(i,60,30),"--qc-primary-400":t(i,65,38),"--qc-primary-500":t(i,80,52),"--qc-primary-600":t(i,90,65),"--qc-primary-700":t(i,92,72),"--qc-primary-800":t(i,90,80),"--qc-primary-900":t(i,92,88),"--qc-primary-foreground":"#101014","--text-link":t(i,85,65),"--secondary-color":t(i,70,60),"--card-border":t(i,30,25),"--bg-selected":"rgba("+w+", 0.10)","--btn-primary-bg":t(i,85,65),"--btn-primary-border":t(i,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(i,80,72),"--btn-primary-hover-border":t(i,80,72),"--btn-primary-active-bg":t(i,75,80),"--btn-primary-active-border":t(i,75,80),"--btn-primary-plain-bg":"rgba("+w+", 0.08)","--btn-primary-plain-border":"rgba("+w+", 0.25)","--btn-primary-plain-color":t(i,85,65),"--btn-primary-plain-hover-bg":"rgba("+w+", 0.15)","--btn-primary-plain-hover-border":t(i,85,65),"--btn-primary-text-color":t(i,85,65),"--gradient":"linear-gradient(135deg, "+t(i,80,35)+" 0%, "+t(i,85,50)+" 50%, "+t(i,85,65)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(i,85,65)+" 0%, "+t(i,80,40)+" 100%)","--qc-nav-item-active":t(i,85,65),"--qc-nav-item-active-bg":"rgba("+w+", 0.10)","--qc-nav-item-active-border":t(i,85,65),"--qc-nav-badge-bg":"rgba("+w+", 0.12)","--qc-nav-badge-text":t(i,85,65),"--qc-ring":t(i,85,65)}}function g(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function c(i){return i=parseInt(i,10),isNaN(i)?45:Math.max(0,Math.min(359,i))}function _(i,w){let h=i||"light",C=w==null||w===""?null:w;if(e[i]){const n=e[i];h=n[0],C==null&&(C=n[1])}h==="system"&&(h=g()?"dark":"light");const R=h==="dark";C=c(C??45);const x=document.documentElement;x.setAttribute("data-theme",R?"dark-pro":"gold"),x.setAttribute("data-theme-mode",R?"dark":"light");const o=R?P(C):p(C);Object.keys(o).forEach(function(n){x.style.setProperty(n,o[n])});try{localStorage.setItem("quant_theme_mode",R?"dark":"light"),localStorage.setItem("quant_theme_hue",String(C))}catch{}return{mode:R?"dark":"light",hue:C}}function l(){const i=localStorage.getItem("quant_theme");if(!i||!e[i]||localStorage.getItem("quant_theme_hue")!==null)return null;const w=e[i];return{mode:w[0],hue:w[1]}}function S(){const i=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let w=i.theme||"system",h=i.theme_hue!=null&&i.theme_hue!==""?i.theme_hue:null;const C=l();return h==null&&C&&(w=C.mode,h=C.hue),h==null&&(h=45),_(w,h)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:f,generateLightTokens:p,generateDarkTokens:P,migrateLegacyTheme:l,applyTheme:_,init:S},S()})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],f={};let t=a,d=null;function p(){return d&&typeof d=="object"&&"value"in d?d.value||a:t}function P(i,w){return e.indexOf(i)===-1?!1:(f[i]=w&&typeof w=="object"?w:{},!0)}function g(i){const w=e.indexOf(i)!==-1?i:a;return t=w,d&&typeof d=="object"&&"value"in d&&(d.value=w),typeof document<"u"&&document.documentElement.setAttribute("lang",w),t}function c(){return p()}function _(i){if(i&&typeof i=="object"&&"value"in i){d=i;const w=e.indexOf(i.value)!==-1?i.value:a;i.value=w,t=w}return t}function l(i,w){const h=p(),C=f[h]||{};let R=i in C?C[i]:null;if(R==null&&h!=="en"){const x=f.en||{};R=i in x?x[i]:null}return R==null&&(R=String(i)),w&&typeof w=="object"&&Object.keys(w).forEach(function(x){R=R.replace(new RegExp("\\{"+x+"\\}","g"),String(w[x]))}),R}const S={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:f,registerLocale:P,setLocale:g,getLocale:c,bindLocale:_,t:l};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=S),S});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let f=[];function t(h){const C=String(h||"");let R="";for(const x of C){const o=a[x];o?R+=o.charAt(0):/[a-zA-Z0-9]/.test(x)&&(R+=x.toLowerCase())}return R}function d(h){const C=String(h||"");let R="";for(const x of C){const o=a[x];o?R+=o:/[a-zA-Z0-9]/.test(x)&&(R+=x.toLowerCase())}return R}function p(h){return String(h||"").trim().toLowerCase()}function P(h,C){const R=(C.code||"").toLowerCase();return/^\d+$/.test(h)?R.indexOf(h)!==-1:/[\u4e00-\u9fa5]/.test(h)?(C.name||"").toLowerCase().indexOf(h)!==-1:R.indexOf(h)!==-1||(C.initials||t(C.name)).indexOf(h)!==-1||(C.pinyin||d(C.name)).indexOf(h)!==-1}function g(h){const C={},R=[],x=function(o,n,v){!o||C[o]||(C[o]=!0,R.push({code:o,name:n||o,source:v||"core",initials:t(n||o),pinyin:d(n||o)}))};return e.forEach(function(o){x(o.code,o.name,"core")}),(h||[]).forEach(function(o){x(o.code,o.name,"extra")}),R}function c(h,C){const R=p(h);if(!R||!C||!C.length)return[];const x=R.split(/[\s,，、;；]+/).filter(Boolean);return x.length?C.filter(function(o){return x.every(function(n){return P(n,o)})}).slice(0,20).map(function(o){return{code:o.code,name:o.name,source:o.source||"core"}}):[]}function _(h){Array.isArray(h)&&(f=f.concat(h))}function l(){return f.slice()}function S(){return g(f)}function i(h){return c(h,S())}const w={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:d,normalizeQuery:p,matchToken:P,buildStockIndex:g,searchStocksByQuery:c,registerExtraStocks:_,getExtraStocks:l,getStockIndex:S,searchCoreStocks:i};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=w),w});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},f=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function d(n){return n=parseInt(n,10),!isNaN(n)&&n>=0&&n<=360}const p={light:"classic-white",dark:"dark-pro"};function P(){if(typeof localStorage>"u")return{};try{const n=localStorage.getItem(a);if(!n)return{};const v=JSON.parse(n);return v&&typeof v=="object"?v:{}}catch{return{}}}function g(n){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(n))}catch{}}function c(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function _(){const n=Object.assign({},e,P()),v={};return f.forEach(function(N){const A=n[N];v[N]=N==="theme_hue"?d(A)?parseInt(A,10):e[N]:t[N].indexOf(A)!==-1?A:e[N]}),v}function l(n){if(f.indexOf(n)!==-1)return _()[n]}function S(n,v){return f.indexOf(n)===-1?!1:n==="theme_hue"?d(v):t[n].indexOf(v)!==-1}function i(n,v){if(!S(n,v))return!1;const N=P();return N[n]=v,g(N),c()&&h({[n]:v}),!0}function w(n){if(!n||typeof n!="object")return!1;const v={};if(Object.keys(n).forEach(function(A){S(A,n[A])&&(v[A]=n[A])}),!Object.keys(v).length)return!1;const N=Object.assign({},P(),v);return g(N),c()&&h(v),!0}function h(n){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:n})}).catch(function(){})}catch{}}async function C(){const n=_();if(!c()||typeof fetch>"u")return n;try{const v=await fetch("/api/user_config/preferences");if(v.ok){const N=await v.json();if(N.success&&N.preferences){const A=N.preferences;f.forEach(function(F){t[F].indexOf(A[F])!==-1&&(n[F]=A[F])}),g(n)}}}catch{}return n}function R(n){const v=n||l("info_density")||"comfortable",N=t.info_density.indexOf(v)!==-1?v:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",N),N}function x(n){const v=n||l("theme")||"system";if(v==="system"){let N=!1;return typeof window<"u"&&window.matchMedia&&(N=window.matchMedia("(prefers-color-scheme: dark)").matches),N?"dark":"light"}return v==="dark"||v==="light"?v:"light"}const o={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:f,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:p,getLocal:_,getPreference:l,isValidValue:S,setPreference:i,setPreferences:w,saveToBackend:h,loadPreferences:C,resolveTheme:x,applyDensity:R};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=o),o});(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function f(){if(typeof localStorage>"u")return[];try{const _=localStorage.getItem(a);if(!_)return[];const l=JSON.parse(_);return Array.isArray(l)?l:[]}catch{return[]}}function t(_){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(_))}catch{}}function d(_,l){if(!_)return!1;let S=f().filter(function(i){return i.code!==_});return S.unshift({code:_,name:(l||"").toString().slice(0,32),ts:Date.now()}),S.length>10&&(S=S.slice(0,10)),t(S),!0}function p(){return f().slice(0,10)}function P(_){t(f().filter(function(l){return l.code!==_}))}function g(){t([])}const c={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:d,getRecentViewed:p,removeRecent:P,clearRecent:g};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=c),c});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:f,watch:t,onMounted:d,nextTick:p}=a;function P(r,q={}){if(typeof r=="string"&&r.startsWith("/api/")){const m=localStorage.getItem("quant_token");if(m)return{...q,headers:{...q.headers||{},Authorization:"Bearer "+m}}}return q}async function g(r,q={}){const m=P(r,q),H={"Content-Type":"application/json",...m.headers},ue=(q.method||"GET").toUpperCase(),X=ue+"|"+r,M=async()=>{const U=await fetch(r,{...m,headers:H});if(U.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!U.ok){let re="";try{const pe=await U.json();re=pe&&pe.detail||""}catch{}throw Object.assign(new Error(re||"请求失败（HTTP "+U.status+"）"),{status:U.status})}return await U.json()};try{const U=q.noLoading?M:()=>v(M);return ue==="GET"&&!q.noDedupe?await R(X,U):await U()}catch(U){throw U.message==="登录已过期"?U:(console.error("[apiFetch] "+r+":",U.message),Object.assign(U,{_formatted:N(U,U.status)}))}}function c(){return new Date().toISOString().split("T")[0]}function _(r){return r?r.split("T")[0]:""}function l(r,q="info",m=3e3){let H=document.querySelector(".toast-container");H||(H=document.createElement("div"),H.className="toast-container",document.body.appendChild(H));const ue=document.createElement("div");ue.className=`toast toast-${q}`,ue.textContent=r,H.appendChild(ue),setTimeout(()=>{ue.classList.add("leaving"),setTimeout(()=>ue.remove(),300)},m)}function S(r,q=300){let m;return function(...H){clearTimeout(m),m=setTimeout(()=>r.apply(this,H),q)}}function i(r,q=300){let m=!1;return function(...H){m||(r.apply(this,H),m=!0,setTimeout(()=>{m=!1},q))}}async function w(r,q=3e3,m=""){const H=new Promise((ue,X)=>setTimeout(()=>X(new Error("timeout")),q));try{return await Promise.race([r,H])}catch(ue){console.warn(`[timeout] ${m||"task"} failed:`,ue.message)}}const h=new Map;function C(){return h.clear(),!0}function R(r,q){if(!r||typeof q!="function")return Promise.reject(new Error("bad dedupe args"));if(h.has(r))return h.get(r);const m=Promise.resolve().then(q).finally(()=>{h.delete(r)});return h.set(r,m),m}let x=0;function o(){return x=0,!0}function n(){return x}async function v(r){x++;try{return await r()}finally{x--}}function N(r,q){if(!r)return"请求失败";if(r&&typeof r=="object"&&r.detail)return String(r.detail);if(typeof r=="string"&&r)return r;if(r&&r.message){const m=String(r.message);return/Failed to fetch|fetch failed|networkerror/i.test(m)?"网络连接失败，请检查网络后重试":m}return q?"请求失败（HTTP "+q+"）":"请求失败"}function A(r,q){if(r===q)return!0;try{return JSON.stringify(r)===JSON.stringify(q)}catch{return!1}}function F(r,q,m){const H=(r||"GET").toUpperCase();let ue="";if(m)try{const X={};Object.keys(m).sort().forEach(M=>{X[M]=m[M]}),ue=JSON.stringify(X)}catch{ue=""}return H+"|"+q+"|"+ue}class G{constructor(){this._map=new Map,this._exp=new Map}get(q){const m=this._exp.get(q);if(m!=null){if(Date.now()>m){this.delete(q);return}return this._map.get(q)}}set(q,m,H){return this._map.set(q,m),this._exp.set(q,Date.now()+(H>0?H:-1)),m}delete(q){this._map.delete(q),this._exp.delete(q)}clear(){this._map.clear(),this._exp.clear()}has(q){return this.get(q)!==void 0}get size(){return this._map.size}}function se(r){const q=new G,m=r!=null&&r>0?r:15e3;return{store:q,defaultTtl:m,get:H=>q.get(H),set:(H,ue,X)=>q.set(H,ue,X??m),delete:H=>q.delete(H),clear:()=>q.clear(),size:()=>q.size}}const I=new Set;async function T(r){const q=r&&r.cache,m=r&&r.key,H=r&&(r.fetchFn||r.fetcher),ue=r&&r.ttl;if(!q||!m||typeof H!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(I.has(m))return{ok:!1,changed:!1,skipped:!0,fresh:null};I.add(m);try{const X=q.get(m);let M;try{M=await H()}catch(re){return r.onError&&r.onError(re),{ok:!1,changed:!1,fresh:null}}const U=X!==void 0&&!A(X,M);return q.set(m,M,ue),r.apply&&r.apply(M,X),X!==void 0&&(U?r.onChanged&&r.onChanged(M,X):r.onUnchanged&&r.onUnchanged(M,X)),{ok:!0,changed:U,fresh:M}}finally{I.delete(m)}}const B=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function K(r,q={}){if(r==null)return"";const m=q&&q.allow||B,H=new Set(m.map(U=>String(U).toUpperCase()));let ue;try{ue=new DOMParser().parseFromString(String(r),"text/html")}catch{return String(r).replace(/[<>&]/g,re=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[re])}const X=ue.body||ue;function M(U){Array.from(U.childNodes).forEach(re=>{if(re.nodeType===1){const pe=String(re.tagName).toUpperCase();if(H.has(pe))Array.from(re.attributes).forEach(de=>{const Y=de.name.toLowerCase(),oe=(de.value||"").trim().toLowerCase();(Y.startsWith("on")||(Y==="href"||Y==="src"||Y==="xlink:href")&&oe.startsWith("javascript:")||Y==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(oe))&&re.removeAttribute(de.name),Y==="href"&&!/^(https?:|mailto:|#|\/)/.test(oe)&&re.removeAttribute("href")}),pe==="A"&&re.setAttribute("rel","noopener noreferrer"),M(re);else{const de=re.parentNode;for(;re.firstChild;)de.insertBefore(re.firstChild,re);de.removeChild(re)}}else if(re.nodeType!==3){if(re.nodeType===8)re.parentNode&&re.parentNode.removeChild(re);else if(re.nodeType===4){const pe=ue.createTextNode(re.nodeValue||"");re.parentNode&&re.parentNode.replaceChild(pe,re)}}})}return M(X),X.innerHTML}const ie="/api/openapi",Q="/api/market/ws/quotes",Z=1,L=2.5,O="数据不可达",z="实时不可用，不刷新";function k(){const r=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",q=typeof location<"u"?location.host:"localhost:8001";return r+"//"+q+Q}function E(r,q){if(!r)return null;const m=q||{riseSpeed:Z,volumeRatio:L},H=m.riseSpeed!=null?m.riseSpeed:Z,ue=m.volumeRatio!=null?m.volumeRatio:L,X=parseFloat(r.rise_speed);if(!isNaN(X)&&Math.abs(X)>H)return X>0?"涨速预警":"跌速预警";const M=parseFloat(r.volume_ratio);return!isNaN(M)&&M>ue?"放量预警":null}function ce(r){const q=Number(r);return r==null||isNaN(q)?null:q}const b={apiFetch:g,withAuthHeaders:P,getToday:c,formatDate:_,withTimeout:w,showToast:l,debounce:S,throttle:i,resetInFlight:C,dedupeRequest:R,resetLoading:o,loadingCount:n,withLoading:v,formatApiError:N,jsonEquals:A,makeCacheKey:F,CacheStore:G,createTtlCache:se,silentRefresh:T,sanitizeHtml:K,OPENAPI_ROUTE_BASE:ie,REALTIME_WS_PATH:Q,WARN_RISE_SPEED_THRESHOLD:Z,WARN_VOLUME_RATIO_THRESHOLD:L,REALTIME_DEGRADED_TEXT:O,REALTIME_FALLBACK_TEXT:z,buildRealtimeWsUrl:k,checkQuoteWarning:E,quoteFmt:{price:function(r){const q=ce(r);return q===null?"--":q.toFixed(2)},pct:function(r){const q=ce(r);return q===null?"--":(q>0?"+":"")+q.toFixed(2)+"%"},num:function(r){const q=ce(r);return q===null?"--":q.toFixed(2)},color:function(r){const q=r?r.change_pct:null,m=ce(q);return m===null?"":m>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=b),typeof je<"u"&&je.exports&&(je.exports=b)})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(S,i){return S+"/"+i}function f(S,i,w,h){var C=S[i]||[],R=C.findIndex(function(n){return n.subPage===w});if(R!==-1)return{groups:S,activeKey:e(i,w)};var x=C.concat([{subPage:w,title:h}]);x.length>a&&(x=d(x));var o=Object.assign({},S,t({},i,x));return{groups:o,activeKey:e(i,w)}}function t(S,i,w){return S[i]=w,S}function d(S){if(S.length<=a)return S;var i=S.length>1?1:0;return S.filter(function(w,h){return h!==i})}function p(S,i,w,h){var C=S[i]||[],R=C.findIndex(function(v){return v.subPage===w});if(R===-1)return{groups:S,nextActive:null};var x=C.filter(function(v){return v.subPage!==w}),o=Object.assign({},S,t({},i,x)),n=null;return w===h&&(x[R]?n=x[R].subPage:x[R-1]?n=x[R-1].subPage:n=null),{groups:o,nextActive:n}}function P(S){return S&&S.length?S[0]:""}function g(S,i){return S[i]||[]}function c(S,i,w){var h=S[i]||[],C=h.filter(function(x){return x.subPage===w}),R=Object.assign({},S,t({},i,C));return{groups:R,activeKey:C.length?e(i,C[0].subPage):null}}function _(S,i){var w=Object.assign({},S,t({},i,[]));return{groups:w,activeKey:null}}function l(S,i,w,h){var C=(S[i]||[]).slice();if(w<0||w>=C.length)return{groups:S};var R=C.splice(w,1)[0];return C.splice(Math.max(0,Math.min(h,C.length)),0,R),{groups:Object.assign({},S,t({},i,C))}}return{MAX_TABS:a,openTab:f,closeTab:p,getDefaultTab:P,tabsOf:g,evictOldest:d,closeOthers:c,closeAll:_,reorder:l,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var on=typeof je=="object"&&je.exports?je.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;on&&(window.__quantModules.tabsCore=on)}(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",f="nav_mode";function t(l){return a.indexOf(l)!==-1?l:e}function d(l){return t(l)==="subnav"}function p(l){return t(l)==="tree"}function P(l){return t(l)==="toptab"}function g(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function c(){var l=g(),S=e;if(l)try{S=t(l.getItem(f))}catch{}return{navMode:S}}function _(l){var S=g();if(!(!S||!l))try{l.navMode!==void 0&&S.setItem(f,t(l.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:d,treeChildrenVisible:p,topTabsVisible:P,readPrefs:c,writePrefs:_}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var rn=typeof je=="object"&&je.exports?je.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;rn&&(window.__quantModules.navModeCore=rn)}(function(){function e(k,E){if(!Array.isArray(k)||k.length<=E)return k;const ce=[],W=k.length/E*2;for(let b=0;b<k.length;b+=W){const r=Math.floor(b),q=Math.min(k.length,Math.ceil(b+W));let m=1/0,H=-1,ue=-1/0,X=-1;for(let M=r;M<q;M++){const U=k[M];if(!U)continue;const re=U[3]!=null?Number(U[3]):1/0,pe=U[4]!=null?Number(U[4]):-1/0;re<m&&(m=re,H=M),pe>ue&&(ue=pe,X=M)}H>=0&&ce.push(k[H]),X>=0&&X!==H&&ce.push(k[X])}return ce}let f=null;function t(){return typeof echarts<"u"?Promise.resolve():(f||(f=new Promise(function(k,E){const ce=document.createElement("script");ce.src="/static/lib/echarts.min.js",ce.async=!0,ce.onload=function(){typeof echarts<"u"?k():E(new Error("echarts 加载后未定义"))},ce.onerror=function(){E(new Error("echarts.min.js 加载失败"))},document.head.appendChild(ce)})),f)}function d(){const k=getComputedStyle(document.documentElement);return{primary:k.getPropertyValue("--primary-color").trim()||"#2563eb",up:k.getPropertyValue("--color-up").trim()||"#43e97b",down:k.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:k.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:k.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const p=k=>(getComputedStyle(document.documentElement).getPropertyValue(k)||"").trim();function P(){return{up:p("--color-up")||"#E63946",down:p("--color-down")||"#2E7D32",neutral:p("--color-neutral")||"#43a047",accent:p("--color-accent")||"#F59E0B",risk:p("--color-danger")||"#C62828",warn:p("--color-warning")||"#FF9800",success:p("--color-success")||"#4CAF50",primary:p("--qc-primary-600")||"#b8922a",grid:p("--chart-split")||"#e2e8f0",axis:p("--chart-axis")||"#cbd5e1",bg:p("--chart-bg")||"transparent",series:[p("--qc-primary-600")||"#b8922a",p("--qc-primary-500")||"#c49b2e",p("--qc-primary-700")||"#8f6f1f",p("--qc-primary-400")||"#d4b352",p("--color-up")||"#E63946",p("--color-down")||"#2E7D32",p("--color-accent")||"#F59E0B",p("--qc-neutral-400")||"#b8ae9f"]}}function g(k,E,ce,W=!1,b=!1){if(!E||E.length===0)return;E.length>2e3&&(E=e(E,2e3));const r=E.map(ke=>typeof ke[0]=="string"&&ke[0].indexOf("-")>=0?ke[0]:ke[0].slice(0,4)+"-"+ke[0].slice(4,6)+"-"+ke[0].slice(6,8)),q=d(),m={ma5:p("--color-accent")||"#F59E0B",ma10:p("--color-primary")||"#3B82F6",ma20:p("--color-warning")||"#8B5CF6",ma60:p("--color-success")||"#10B981"},H=E.map(ke=>[ke[1],ke[2],ke[3],ke[4]]),ue=E.map(ke=>ke[5]),X=E.map(ke=>ke[6]),M=E.map(ke=>ke[7]),U=E.map(ke=>ke[8]),re=E.map(ke=>ke[9]),pe=E.map(ke=>ke[10]),Y=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",oe=q.borderLight,De={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:q.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:Y,borderColor:oe,textStyle:{color:q.textSecondary,fontSize:12},formatter:function(ke){if(!ke||!ke.length)return"";const _e=ke[0].dataIndex,ee=E[_e];if(!ee)return"";const xe=k.getOption(),Pe=xe.legend&&xe.legend[0]&&xe.legend[0].selected||{},ae=Ie=>Pe[Ie]!==!1,te=Ie=>Ie==null||isNaN(Ie)?"--":Number(Ie).toFixed(2),he=Ie=>Ie==null||isNaN(Ie)?"--":(Number(Ie)/1e4).toFixed(2)+"万手",Ne=['<div style="font-weight:600;color:'+q.textSecondary+';">'+r[_e]+"</div>"];return Ne.push("开: "+te(ee[1])+"　收: "+te(ee[2])),Ne.push("低: "+te(ee[3])+"　高: "+te(ee[4])),Ne.push("成交量: "+he(ee[5])),ee[6]!=null&&ae("MA5")&&Ne.push("MA5: "+te(ee[6])),ee[7]!=null&&ae("MA10")&&Ne.push("MA10: "+te(ee[7])),ee[8]!=null&&ae("MA20")&&Ne.push("MA20: "+te(ee[8])),ee[9]!=null&&ae("MA60")&&Ne.push("MA60: "+te(ee[9])),ee[10]!=null&&Ne.push("VOL_MA5: "+he(ee[10])),Ne.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:b?0:8,textStyle:{color:q.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:b?30:40,height:b?"48%":"52%"},{left:56,right:16,top:b?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:r,boundaryGap:!0,axisLine:{lineStyle:{color:oe}},axisLabel:{color:q.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:r,axisLabel:{show:!1},axisLine:{lineStyle:{color:oe}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:oe}},axisLabel:{color:q.textSecondary,fontSize:11,formatter:function(ke){const _e=Math.round(ke*100)/100;return _e%1===0?String(Math.round(_e)):_e.toFixed(2)}},splitLine:{lineStyle:{color:oe,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:oe}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,E.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:oe,textStyle:{color:q.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:H,itemStyle:{color:q.up,color0:q.down,borderColor:q.up,borderColor0:q.down}},{name:"MA5",type:"line",data:X,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma5}},{name:"MA10",type:"line",data:M,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma10}},{name:"MA20",type:"line",data:U,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma20}},{name:"MA60",type:"line",data:re,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:m.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ue,itemStyle:{color:function(ke){const _e=ke.dataIndex;return E[_e][1]>=E[_e][2]?q.up:q.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:pe,smooth:!0,symbol:"none",lineStyle:{width:1,color:m.ma5,type:"dashed"}}]};k.setOption(De,!0)}const c=new Map;function _(k){return c.has(k)||c.set(k,{chart:null,cache:null}),c.get(k)}async function l(k,E,ce,W=!1,b={}){await t();const r=_(k);let q=document.getElementById(k);if(!q)for(let m=0;m<16&&(await new Promise(H=>setTimeout(H,50)),q=document.getElementById(k),!q);m++);if(!q)throw new Error("无法找到图表容器: "+k);if(q.offsetWidth<50&&(q.style.minWidth="600px",q.style.minHeight="300px"),!r.chart||r.chart.isDisposed()||r.chart.getDom()!==q){if(r.chart)try{r.chart.dispose()}catch{}r.chart=echarts.init(q),r.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const m=b.onLegend;typeof m=="function"&&r.chart.on("legendselectchanged",H=>{H&&H.selected&&m(H.selected)})}return g(r.chart,E,ce,W,!!b.isMobile),r.cache={data:E,period:ce,isIndex:W,isMobile:!!b.isMobile},r.chart}function S(k){const E=c.get(k);E&&E.chart&&(E.chart.dispose(),E.chart=null,E.cache=null)}function i(k){const E=c.get(k);E&&E.chart&&E.chart.resize()}function w(k,E){const ce=c.get(k),W=ce&&ce.chart;if(W)if(E<=0)W.dispatchAction({type:"dataZoom",start:0,end:100});else{const q=Math.max(0,(60-E)/60*100);W.dispatchAction({type:"dataZoom",start:Math.round(q),end:100})}}function h(k){var W,b,r;const E=c.get(k);if(!E||!E.chart||!E.cache||E.chart.isDisposed())return;const ce=((r=(b=(W=E.chart.getOption())==null?void 0:W.legend)==null?void 0:b[0])==null?void 0:r.selected)||null;g(E.chart,E.cache.data,E.cache.period,E.cache.isIndex,E.cache.isMobile),ce&&E.chart.setOption({legend:{selected:ce}})}function C(k){const E=c.get(k);return E&&E.chart}const R=new Map;function x(k){return R.has(k)||R.set(k,{chart:null,cache:null}),R.get(k)}function o(k,E,ce={}){return t().then(function(){const W=x(k),b=document.getElementById(k);if(!b)throw new Error("无法找到图表容器: "+k);if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),W.chart&&W.chart.getDom&&W.chart.getDom()!==b){try{W.chart.dispose()}catch{}W.chart=null}W.chart||(W.chart=echarts.init(b),W.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),W.resizeBound||(W.resizeBound=!0,window.addEventListener("resize",function(){W.chart&&!W.chart.isDisposed()&&W.chart.resize()})));const r=typeof E=="function"?E():E;return W.chart.setOption(r,!0),W.cache={buildOption:E,key:ce.key||""},W.chart})}function n(k){var b,r,q;const E=R.get(k);if(!E||!E.chart||!E.cache||E.chart.isDisposed())return;const ce=((q=(r=(b=E.chart.getOption())==null?void 0:b.legend)==null?void 0:r[0])==null?void 0:q.selected)||null,W=typeof E.cache.buildOption=="function"?E.cache.buildOption():E.cache.buildOption;E.chart.setOption(W,!0),ce&&W&&W.legend&&W.legend.selected&&E.chart.setOption({legend:{selected:ce}})}function v(k){const E=R.get(k);E&&E.chart&&(E.chart.dispose(),E.chart=null,E.cache=null)}function N(k){const E=R.get(k);E&&E.chart&&E.chart.resize()}const A=new Map;function F(k){return A.has(k)||A.set(k,{chart:null,cache:null}),A.get(k)}function G(k,E,ce={}){return t().then(function(){const W=F(k),b=document.getElementById(k);if(!b)return null;if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),W.chart&&W.chart.getDom&&W.chart.getDom()!==b){try{W.chart.dispose()}catch{}W.chart=null}W.chart||(W.chart=echarts.init(b),W.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),W.resizeBound||(W.resizeBound=!0,window.addEventListener("resize",function(){W.chart&&!W.chart.isDisposed()&&W.chart.resize()})));const r=typeof E=="function"?E():E;return W.chart.setOption(r,!0),W.cache={buildOption:E,key:ce.key||""},W.chart})}function se(k){const E=A.get(k);if(!E||!E.chart||!E.cache||E.chart.isDisposed())return;const ce=typeof E.cache.buildOption=="function"?E.cache.buildOption():E.cache.buildOption;E.chart.setOption(ce,!0)}function I(k){const E=A.get(k);E&&E.chart&&(E.chart.dispose(),E.chart=null,E.cache=null)}function T(k){const E=A.get(k);E&&E.chart&&E.chart.resize()}const B=G,K=se,ie=I,Q=T;function Z(k,E,ce,W){W=W||{};const b=W.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[W.navLabel||"净值",W.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:ce||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:W.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:W.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:W.navLabel||"净值",type:"line",data:k||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:W.ddLabel||"回撤",type:"line",yAxisIndex:1,data:E||[],showSymbol:!1,areaStyle:{opacity:.25,color:b},lineStyle:{color:b,type:"solid",width:1.5}}]}}function L(k,E){E=E||{};const ce=E.bandColor||"#1976d2",W=k&&k.dates||[],b=k&&k.median||[],r=k&&k.q25||[],q=k&&k.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[E.medianLabel||"中位IC",E.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:W,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:E.medianLabel||"中位IC",type:"line",data:b,showSymbol:!1,lineStyle:{width:2,color:ce}},{name:E.bandLabel||"25–75分位",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ce,opacity:.12}},{name:"_bandH",type:"line",data:q.map(function(m,H){return m-(r[H]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ce,opacity:.12}}]}}function O(k,E){E=E||{};const ce=E.color||"#7c3aed",W=k&&k.dates||[],b=k&&k.value||[],r=k&&k.upper||[],q=k&&k.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[E.valueLabel||"情绪",E.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:W,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:E.valueLabel||"情绪",type:"line",data:b,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:ce}},{name:E.bandLabel||"过热/冰点带",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ce,opacity:.1}},{name:"_bandL",type:"line",data:q.map(function(m,H){return(r[H]||0)-m}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ce,opacity:.1}}]}}const z={renderKlineChart:g,renderKlineTo:l,disposeKline:S,resizeKline:i,zoomKline:w,redrawKline:h,getKlineChart:C,renderBacktestTo:o,redrawBacktest:n,disposeBacktest:v,resizeBacktest:N,renderPortfolioTo:G,redrawPortfolio:se,disposePortfolio:I,resizePortfolio:T,renderSimpleChartTo:B,redrawSimpleChart:K,disposeSimpleChart:ie,resizeSimpleChart:Q,buildNavDrawdownOption:Z,buildIcBandOption:L,buildSentimentBandOption:O,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:P,init(){return{renderKlineChart:g,renderKlineTo:l,disposeKline:S,resizeKline:i,zoomKline:w,redrawKline:h,getKlineChart:C,renderBacktestTo:o,redrawBacktest:n,disposeBacktest:v,resizeBacktest:N,renderPortfolioTo:G,redrawPortfolio:se,disposePortfolio:I,resizePortfolio:T,renderSimpleChartTo:B,redrawSimpleChart:K,disposeSimpleChart:ie,resizeSimpleChart:Q,buildNavDrawdownOption:Z,buildIcBandOption:L,buildSentimentBandOption:O,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:P}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=z),typeof je<"u"&&je.exports&&(je.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:Z,buildIcBandOption:L,buildSentimentBandOption:O})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:f}=Vue,{configChanged:t,consensus:d}=a,p=e(null),P=e(""),g=e(null),c=e([]),_=e([]),l=e([]),S=e([]),i=e([]),w=e([]),h=e({});function C(Se){const we=i.value.indexOf(Se);we>=0?i.value.splice(we,1):i.value.push(Se)}const R=e("date"),x=e([]),o=e(!1),n=e(!1),v=e("watchlist"),N=e([]),A=e({vendors:[]}),F=e(""),G=e(!1),se=e(!1);function I(Se){if(!Se)return"";const we=String(Se),Ae=we.length;if(Ae<=4)return we[0]+"*".repeat(Ae-1);const Re=Ae<=8?2:4;return we.slice(0,Re)+"*".repeat(Ae-Re-Re)+we.slice(-Re)}async function T(Se){let we;try{we=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Re=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:we,target:Se})})).json();if(Re.success)return Re.secret;ElementPlus.ElMessage.error(Re.message||"查看失败")}catch(Ae){ElementPlus.ElMessage.error("查看失败: "+Ae.message)}return null}async function B(Se){if(Se._revealed){Se._revealed=!1,Se._masked=I(Se.api_key);return}const we=await T("ai:"+Se.vendor_key);we!==null&&(Se.api_key=we,Se._revealed=!0)}async function K(Se){if(Se._editing){Se._editing=!1,Se._revealed=!1,Se.api_key&&(Se._masked=I(Se.api_key));return}Se._editing=!0;try{const Ae=await(await fetch("/api/ai/models?full=1")).json();if(Ae.success){const Re=(Ae.data.vendors||[]).find(Xe=>Xe.vendor_key===Se.vendor_key);Re&&(Se.api_key=Re.api_key||"")}else Ae.message&&ElementPlus.ElMessage.error(String(Ae.message))}catch(we){ElementPlus.ElMessage.error("解锁失败: "+we.message)}}function ie(Se){const{_fetching:we,_testing:Ae,_revealed:Re,_masked:Xe,_editing:Ze,...tt}=Se;return Ze||(tt.api_key=""),tt.models=(Se.models||[]).map(xt=>{const{_testing:St,testResult:pt,...zt}=xt;return zt}),tt}async function Q(){var Se;try{F.value="";const we=await fetch("/api/ai/models");if(we.status===401){F.value="请先登录后再查看模型配置";return}if(!we.ok){F.value=`服务器错误 (${we.status})`;return}const Ae=await we.json();Ae.success?(N.value=(((Se=Ae.data)==null?void 0:Se.vendors)||[]).map(Re=>({...Re,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Re.api_key||"",models:(Re.models||[]).map(Xe=>({...Xe,_testing:!1,testResult:void 0}))})),F.value=""):F.value=Ae.message||"加载失败"}catch(we){F.value="网络错误: "+we.message}}async function Z(){try{const we=await(await fetch("/api/ai/catalog")).json();we.success&&we.data&&(A.value=we.data)}catch(Se){console.warn("AI 厂商目录加载失败",Se)}}async function L(){se.value=!0;try{const Ae=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:N.value.map(ie)})})).json();Ae.success?(N.value.forEach(Re=>{Re._editing=!1,Re._revealed=!1,Re.api_key&&(Re._masked=I(Re.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ae.message||"保存失败")}catch(Se){ElementPlus.ElMessage.error("保存失败: "+Se.message)}se.value=!1}async function O(Se,we){we._testing=!0;try{const Re=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,model:we.name,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})});we.testResult=await Re.json()}catch(Ae){we.testResult={success:!1,message:Ae.message}}we._testing=!1}async function z(){G.value=!0;for(const Se of N.value)for(const we of Se.models||[])Se.api_key?await O(Se,we):we.testResult={success:!1,message:"未配置 API Key"};G.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function k(Se){Se._fetching=!0;try{const Re=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})})).json();if(Re.success&&Array.isArray(Re.models)){const Xe=new Set((Se.models||[]).map(Ze=>Ze.name));for(const Ze of Re.models)Xe.has(Ze)||Se.models.push({name:Ze,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Re.models.length} 个模型`)}else ElementPlus.ElMessage.error(Re.message||"获取模型列表失败")}catch(we){ElementPlus.ElMessage.error("获取模型列表失败: "+we.message)}Se._fetching=!1}function E(Se){const we=(A.value.vendors||[]).find(Ae=>Ae.vendor_key===Se);if(we){if(N.value.some(Ae=>Ae.vendor_key===Se)){ElementPlus.ElMessage.warning("该厂商已存在");return}N.value.push({vendor_key:we.vendor_key,name:we.name,kind:we.kind,base_url:we.base_url,api_key:"",timeout:60,tier:we.tier||"",website:we.website||"",locked:!!we.locked,models:(we.models||[]).map(Ae=>({name:Ae,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${we.name}」，配置 API Key 后保存生效`)}}function ce(){N.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function W(Se){Se.models||(Se.models=[]),Se.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function b(Se,we){const Ae=Se.models[we];if(!(!Ae||Ae.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ae.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}Se.models.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function r(Se){if(Se.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(Se.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const we=N.value.indexOf(Se);we>=0&&N.value.splice(we,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const q=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),m=e(!1),H=e(""),ue=e(0),X=e(""),M=e(!1),U=e(""),re=e(!1),pe=e(0),de=e(0),Y=e(""),oe=e({}),De=e({}),ke=e({}),_e=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),ee=e("manual"),xe=f(()=>{const Se={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return Se[_e.value.provider]||Se.custom}),Pe={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function ae(Se){if(Se==="manual")return;const we=Pe[Se];we&&(_e.value.endpoint=we.endpoint,_e.value.model=we.model,t.value=!0)}function te(){if(t.value=!0,_e.value.provider!=="codingplan"&&_e.value.provider!=="custom"){const Se=xe.value;Se&&(_e.value.endpoint=Se.endpoint,_e.value.model=Se.model)}else _e.value.provider==="codingplan"&&(_e.value.endpoint||(_e.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),_e.value.model||(_e.value.model="ark-code-latest"))}let he=null;const Ne=8;async function Ie(){he&&(he.abort(),he=null);const we=(d.value||[]).filter(tt=>tt.status==="new"||tt.status==="out").filter(tt=>!h.value[tt.code]);if(we.length===0)return;const Ae=new AbortController;he=Ae;let Re=0;const Xe=async()=>{for(;Re<we.length;){const tt=we[Re++];try{const St=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:tt.code,stock_name:tt.name,event_type:tt.status==="new"?"enter":"exit"}),signal:Ae.signal})).json();St.success&&St.signal&&(h.value={...h.value,[tt.code]:St.signal})}catch(xt){if(xt.name==="AbortError")return}}},Ze=Array.from({length:Math.min(Ne,we.length)},()=>Xe());await Promise.all(Ze)}function Ue(){he&&(he.abort(),he=null)}let Ge=0;async function ht(Se){const we=++Ge;try{const Re=await(await fetch(`/api/ai/history/last/${encodeURIComponent(Se)}`)).json();if(we!==Ge)return;Re.success&&Re.data&&(p.value=Re.data,P.value=Re.data.evaluate_time,st(Se,Re.data),Rt(Re.data))}catch{}}async function st(Se,we){var Ae,Re;try{const Ze=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(Se)}&limit=2`)).json();if(Ze.success&&Ze.data&&Ze.data.length>=2){const tt=Ze.data[1],xt=((Ae=we.result)==null?void 0:Ae.total_score)||0,St=((Re=tt.result)==null?void 0:Re.total_score)||0;xt>0&&St>0&&(g.value={prevScore:St,currScore:xt,diff:xt-St})}}catch(Xe){console.warn("[refreshStrategyData] autoPoll failed:",Xe)}}function Rt(Se){var Xe;const we=((Xe=Se.result)==null?void 0:Xe.dimensions)||{},Ae=[],Re=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Ze of Re){const tt=we[Ze.key];tt!==void 0&&Ae.push({icon:tt>=Ze.good?"check-circle-2":tt>=Ze.warn?"alert-triangle":"x-circle",label:`${Ze.label} ${Math.round(tt)}分`})}c.value=Ae}return{aiResult:p,lastEvalTime:P,evalHistoryComparison:g,checklistItems:c,aiHistory:_,selectedHistoryIds:l,expandedDates:S,expandedMonths:i,expandedStocks:w,poolSignals:h,toggleMonthExpand:C,aiHistoryView:R,selectedWatchlistCodes:x,showAutoEvaluateSettings:o,savingConfig:n,autoEvaluateScope:v,aiVendors:N,aiCatalog:A,aiModelsError:F,testingAllModels:G,savingAiModels:se,loadAiVendors:Q,loadAiCatalog:Z,saveAiVendors:L,saveAiModels:L,testVendorModel:O,testAllVendorModels:z,fetchVendorModels:k,addVendorFromCatalog:E,addCustomVendor:ce,addVendorModel:W,removeVendorModel:b,removeVendor:r,toggleVendorKeyReveal:B,toggleVendorEdit:K,autoEvaluateConfig:q,aiLoading:m,aiEvalStage:H,aiEvalElapsed:ue,aiEvalError:X,showBatchEvaluate:M,batchStocks:U,batchRunning:re,batchTotal:pe,batchCompleted:de,batchCurrent:Y,batchStatuses:oe,batchResults:De,batchEvalErrors:ke,aiConfig:_e,selectedPreset:ee,providerInfo:xe,aiPresets:Pe,applyPreset:ae,onProviderChange:te,fetchPoolSignals:Ie,cancelPoolSignals:Ue,loadLastEvaluation:ht}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:f,watch:t}=Vue,{configChanged:d,aiConfig:p,aiLoading:P,feishuConfig:g,currentTheme:c,changeTheme:_,autoEvaluateConfig:l,currentUser:S,strategyFilter:i,applyTheme:w,dashboardData:h,lastRefreshTime:C,saveAiModels:R}=a,x=e(!1),o=e(!1),n=e(null),v=e(null),N=e(null),A=e(null),F=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),G=e("disconnected"),se=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),I=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),T=e(!1),B=e(null),K=e(null),ie=e("pending"),Q=e("..."),Z=e(!1),L=e({api_limit:600}),O=e(!1),z=e(!1);async function k(){try{const te=await(await fetch("/api/system/rate-limit")).json();te.success&&(L.value=te.data)}catch(ae){console.warn("loadRateLimit failed:",ae)}}async function E(){z.value=!0;try{const te=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L.value)})).json();te.success?(O.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(te.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{z.value=!1}}t(()=>[p.value.provider,p.value.apiKey,p.value.endpoint,p.value.model],()=>{d.value=!0},{deep:!0});async function ce(){x.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(p.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p.value)})).json()).success?(d.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ae){localStorage.setItem("quant_ai_config",JSON.stringify(p.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ae)}finally{x.value=!1}}async function W(){P.value=!0;try{const te=await(await fetch("/api/ai/test")).json();te.success?ElementPlus.ElMessage.success(te.message||"API连接正常"):ElementPlus.ElMessage.error(te.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{P.value=!1}}function b(){const ae={ai:p.value,feishu:g.value,theme:c.value,export_time:new Date().toISOString()},te=new Blob([JSON.stringify(ae,null,2)],{type:"application/json"}),he=URL.createObjectURL(te),Ne=document.createElement("a");Ne.href=he,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(he),ElementPlus.ElMessage.success("配置已导出")}function r(ae){const te=ae.target.files[0];if(!te)return;const he=new FileReader;he.onload=async Ne=>{try{const Ie=JSON.parse(Ne.target.result);Ie.ai&&(p.value={...p.value,...Ie.ai},await ce()),Ie.feishu&&(Object.assign(g.value,Ie.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ie.feishu)})),Ie.theme&&(c.value=Ie.theme,_(Ie.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},he.readAsText(te),ae.target.value=""}async function q(){x.value=!0;const ae=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:F.value,feishu:g.value,ai:p.value,rate_limit:L.value,auto_evaluate:l.value,theme:c.value}})}).then(Ie=>["userConfig",Ie.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)}).then(Ie=>["tushare",Ie.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:se.value})}).then(Ie=>["datasource",Ie.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g.value)}).then(Ie=>["feishu",Ie.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p.value)}).then(Ie=>["ai",Ie.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L.value)}).then(Ie=>["rateLimit",Ie.ok]),R().then(()=>["aiModels",!0],()=>["aiModels",!1])],te=await Promise.allSettled(ae),he=te.filter(Ie=>Ie.status==="fulfilled"&&Ie.value[1]).length,Ne=te.filter(Ie=>Ie.status==="rejected"||Ie.status==="fulfilled"&&!Ie.value[1]).length;O.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(i.value.selected)),localStorage.setItem("quant_strategy_filter_mode",i.value.mode),S.value&&fetch(`/api/users/${S.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:c.value})}).catch(()=>{}),o.value=!1,n.value=new Date().toLocaleString("zh-CN"),x.value=!1,Ne>0&&console.error(`[saveAllConfig] ${he}/${he+Ne} 项保存成功，${Ne} 项失败`)}async function m(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const he=te.config;he.tushare&&(F.value={...F.value,...he.tushare}),he.feishu&&(g.value={...g.value,...he.feishu}),he.ai&&(p.value={...p.value,...he.ai}),he.rate_limit&&(L.value={...L.value,...he.rate_limit}),he.auto_evaluate&&(l.value={...l.value,...he.auto_evaluate}),he.theme&&!localStorage.getItem("quant_theme")&&w(he.theme)}o.value=!1,O.value=!1}catch(ae){console.error("[resetAllConfig] 重新加载配置失败:",ae),o.value=!1}}async function H(){G.value="testing";try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(G.value=te.success?"connected":"disconnected",te.success){const he=te.data_count?` (获取到 ${te.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+he)}else ElementPlus.ElMessage.error(te.message||"连接失败")}catch{G.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function ue(){try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();G.value=te.success?"connected":"disconnected"}catch{G.value="disconnected"}}async function X(){var ae;T.value=!0;try{const he=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();he.success?(B.value=parseInt(((ae=he.message.match(/\d+/))==null?void 0:ae[0])||"0"),ElementPlus.ElMessage.success(he.message)):ElementPlus.ElMessage.error(he.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{T.value=!1}}async function M(){try{const te=await(await fetch("/api/market/tushare/config")).json();te.success&&te.config&&(F.value={...F.value,...te.config})}catch(ae){console.warn("loadTushareConfig failed:",ae)}}function U(ae){if(!ae)return"";const te=String(ae),he=te.length;if(he<=4)return te[0]+"*".repeat(he-1);const Ne=he<=8?2:4;return te.slice(0,Ne)+"*".repeat(he-Ne-Ne)+te.slice(-Ne)}async function re(ae){let te;try{te=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:te,target:ae})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(he){ElementPlus.ElMessage.error("查看失败: "+he.message)}return null}async function pe(ae){const te=se.value[ae];if(!te)return;if(te._revealed){te._revealed=!1,te._masked=U(te.token);return}const he=await re(ae);he!==null&&(te.token=he,te._revealed=!0)}async function de(ae){const te=se.value[ae];if(te){if(te._editing){te._editing=!1,te._revealed=!1,te.token&&(te._masked=U(te.token));return}te._editing=!0;try{const he=await re(ae);if(he===null){te._editing=!1;return}te.token=he,te._revealed=!0}catch(he){te._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+he.message)}}}async function Y(){try{const te=await(await fetch("/api/market/datasource/config")).json();if(te.success&&te.config&&te.config.sources){const he=te.config.sources,Ne=Ie=>{const Ue={...se.value[Ie],...he[Ie]||{}};return Ue._editing=!1,Ue._revealed=!1,Ue._masked=Ue.token||"",Ue.token="",Ue};se.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...se.value.akshare,...he.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[Ie,Ue]of Object.entries(Ne.status))I.value[Ie]=Ue.connected?"connected":"disconnected"}catch{}}catch(ae){console.warn("loadDatasourceConfig failed:",ae)}}async function oe(){try{const ae={};for(const[te,he]of Object.entries(se.value)){const{_revealed:Ne,_masked:Ie,_editing:Ue,...Ge}=he;!Ue&&te!=="akshare"&&(Ge.token=""),ae[te]=Ge}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ae})}),o.value=!0}catch(ae){console.warn("saveDatasourceConfig failed:",ae)}}async function De(ae){I.value[ae]="testing";try{const te=se.value[ae];te&&te._editing&&await oe();const Ne=await(await fetch(`/api/market/datasource/test/${ae}`,{method:"POST"})).json();I.value[ae]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${ae} 连接成功`):ElementPlus.ElMessage.error(`${ae}: ${Ne.message}`)}catch{I.value[ae]="disconnected",ElementPlus.ElMessage.error(`${ae} 连接失败`)}}async function ke(){try{const te=await(await fetch("/api/feishu/config")).json();te&&typeof te=="object"&&(g.value={...g.value,...te},v.value=JSON.parse(JSON.stringify(g.value)))}catch(ae){console.warn("loadFeishuConfig failed:",ae)}}async function _e(){try{const te=await(await fetch("/api/ai/config")).json();if(te.success&&te.data)p.value={...p.value,...te.data};else{const he=localStorage.getItem("quant_ai_config");he&&(p.value=JSON.parse(he))}}catch{const te=localStorage.getItem("quant_ai_config");te&&(p.value=JSON.parse(te))}}async function ee(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const he=te.config;he.tushare&&(F.value={...F.value,...he.tushare}),he.datasource&&he.datasource.sources&&(se.value={sxsc_tushare:{...se.value.sxsc_tushare,...he.datasource.sources.sxsc_tushare||{}},tushare:{...se.value.tushare,...he.datasource.sources.tushare||{}},akshare:{...se.value.akshare,...he.datasource.sources.akshare||{}}}),he.feishu&&(g.value={...g.value,...he.feishu},v.value=JSON.parse(JSON.stringify(g.value))),he.ai&&(p.value={...p.value,...he.ai}),he.rate_limit&&(L.value={...L.value,...he.rate_limit}),he.theme&&!localStorage.getItem("quant_theme")&&w(he.theme),he.auto_evaluate&&(l.value={...l.value,...he.auto_evaluate})}}catch(ae){console.warn("加载用户配置失败，使用本地缓存",ae)}}async function xe(){var ae,te,he,Ne;try{const Ue=await(await fetch("/api/dashboard")).json(),Ge=Ue.success?Ue.data:Ue;B.value=((ae=Ge==null?void 0:Ge.stats)==null?void 0:ae.total_stocks_covered)||null;const st=await(await fetch("/api/dates")).json();K.value=((te=st==null?void 0:st.data)==null?void 0:te.total)||((Ne=(he=st==null?void 0:st.data)==null?void 0:he.dates)==null?void 0:Ne.length)||null;const Se=await(await fetch("/api/ai/history")).json();ie.value="ok"}catch{ie.value="pending"}}async function Pe(){try{const te=await(await fetch("/api/dashboard")).json();h.value=te.success?te.data:te,C.value=Date.now()}catch(ae){console.error("加载总览数据失败",ae)}}return{configSaving:x,configChanged:d,globalConfigDirty:o,lastSavedTime:n,feishuConfigOriginal:v,aiConfigOriginal:N,tushareConfigOriginal:A,tushareConfig:F,tushareStatus:G,datasourceConfig:se,datasourceStatus:I,syncingData:T,stockCount:B,tradeDateCount:K,aiStatus:ie,appVersion:Q,showImportDialog:Z,rateLimitConfig:L,rateLimitDirty:O,rateLimitSaving:z,loadRateLimit:k,saveRateLimit:E,saveAiConfig:ce,testAiApi:W,exportConfig:b,importConfig:r,saveAllConfig:q,resetAllConfig:m,testTushareConnection:H,checkTushareConnection:ue,syncStockData:X,loadTushareConfig:M,loadDatasourceConfig:Y,saveDatasourceConfig:oe,testDatasource:De,toggleDatasourceKeyReveal:pe,toggleDatasourceEdit:de,loadFeishuConfig:ke,loadAiConfig:_e,loadUserConfig:ee,loadSystemStatus:xe,loadDashboardData:Pe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:f}=Vue,{currentUser:t,applyTheme:d,allMenuDefs:p,loadGroupConfig:P}=a,g=e([]),c=e(""),_=e(""),l=e("users"),S=e({}),i=e({}),w=f(()=>{let ee=g.value;if(_.value&&(ee=ee.filter(Pe=>(Pe.group||Pe.role)===_.value)),!c.value)return ee;const xe=c.value.toLowerCase();return ee.filter(Pe=>Pe.username.toLowerCase().includes(xe))});function h(ee){S.value={...S.value,[ee]:!S.value[ee]}}async function C(ee,xe){try{const ae=await(await fetch("/api/groups/"+xe+"/members/"+ee,{method:"DELETE"})).json();ae.success?(await de(),await re()):ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function R(ee){const xe=i.value[ee];if(xe)try{const ae=await(await fetch("/api/groups/"+ee+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:xe})})).json();ae.success?(await de(),await re(),i.value={...i.value,[ee]:""}):ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function x(ee,xe){try{const ae=await(await fetch("/api/users/"+ee.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:xe})})).json();ae.success?await de():ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const o=e(!1),n=e(null),v=e({username:"",password:"",role:"user",theme:"tech-blue"}),N=e(!1),A=e(null),F=e(!1),G=e(!1),se=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),I=e({}),T=e(!1),B=e({group_id:"",name:"",description:""}),K=e(!1),ie=e([]),Q=e(""),Z=e(""),L=e({});function O(ee){L.value={...L.value,[ee]:!L.value[ee]}}function z(ee){return!g.value||!g.value.length?0:g.value.filter(xe=>(xe.group||xe.role)===ee).length}function k(ee){const xe=(ee==null?void 0:ee.visible_menus)||{};return Object.values(xe).filter(Boolean).length}const E=f(()=>Object.keys(U.value).length);async function ce(ee){Z.value=ee,G.value=!0,await W(ee)}async function W(ee){try{const Pe=await(await fetch("/api/groups/"+ee+"/members")).json();Pe.success&&(ie.value=Pe.members||[])}catch(xe){ie.value=[],console.error("[loadGroupMembers]",xe)}}async function b(){if(!(!Q.value||!Z.value)){K.value=!0;try{const xe=await(await fetch("/api/groups/"+Z.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:Q.value})})).json();xe.success?(await W(Z.value),await de(),Q.value=""):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{K.value=!1}}}async function r(ee){try{const Pe=await(await fetch("/api/groups/"+Z.value+"/members/"+ee,{method:"DELETE"})).json();Pe.success?(await W(Z.value),await de()):ElementPlus.ElMessage.error(Pe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const q=f(()=>{if(!g.value)return[];const ee=new Set(ie.value.map(xe=>xe.username));return g.value.filter(xe=>xe.username!=="admin"&&xe.username!=="guest"&&!ee.has(xe.username))});function m(ee){const xe=se.value.visible_menus[ee],Pe=p.find(ae=>ae.key===ee);if(Pe)if(xe){const ae=I.value[ee]||{};Pe.subPages.forEach(te=>{const he=ee+"."+te;se.value.visible_sub_pages[he]=ae[te]!==void 0?ae[te]:!0})}else{const ae={};Pe.subPages.forEach(te=>{const he=ee+"."+te;ae[te]=se.value.visible_sub_pages[he],se.value.visible_sub_pages[he]=!1}),I.value[ee]=ae}}function H(ee){A.value=ee;const xe=U.value[ee]||{};se.value={name:xe.name||ee,description:xe.description||"",visible_menus:{...xe.visible_menus||{}},visible_sub_pages:{...xe.visible_sub_pages||{}}},I.value={},p.forEach(Pe=>{const ae={};Pe.subPages.forEach(te=>{ae[te]=se.value.visible_sub_pages[Pe.key+"."+te]}),I.value[Pe.key]=ae}),F.value=!0}async function ue(){K.value=!0;try{const xe=await(await fetch("/api/groups/"+A.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(se.value)})).json();xe.success?(F.value=!1,A.value=null,await re(),await P()):ElementPlus.ElMessage.error(xe.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{K.value=!1}}async function X(ee){var xe;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((xe=U.value[ee])==null?void 0:xe.name)||ee)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const te=await(await fetch("/api/groups/"+ee,{method:"DELETE"})).json();te.success?await re():ElementPlus.ElMessage.error(te.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function M(){if(B.value.group_id){K.value=!0;try{const xe=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(B.value)})).json();xe.success?(T.value=!1,B.value={group_id:"",name:"",description:""},await re()):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{K.value=!1}}}const U=e({});async function re(){try{if(!localStorage.getItem("quant_token"))return;const xe=await fetch("/api/groups");if(xe.ok){const Pe=await xe.json();U.value=Pe.groups||{}}}catch(ee){console.warn("loadAllGroups:",ee)}}function pe(ee){var xe;return((xe=U.value[ee])==null?void 0:xe.name)||ee||"--"}async function de(){try{if(!localStorage.getItem("quant_token")){g.value=[];return}const xe=await fetch("/api/users");if(xe.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const Pe=await xe.json();g.value=Pe.users||[]}catch(ee){g.value=[],console.error("[loadUsers] error:",ee)}}function Y(ee){n.value=ee,v.value={username:ee.username,password:"",role:ee.role,theme:ee.theme||"tech-blue",group:ee.group||ee.role},o.value=!0}async function oe(){if(v.value.username){N.value=!0;try{const ee=n.value?"PUT":"POST",xe=n.value?`/api/users/${v.value.username}`:"/api/users",ae=await(await fetch(xe,{method:ee,headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)})).json();if(ae.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&v.value.username===t.value.username){const te=v.value.theme;te&&te!==t.value.theme&&(t.value.theme=te,localStorage.setItem("quant_user",JSON.stringify(t.value)),d(te))}o.value=!1,n.value=null,await de()}else ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{N.value=!1}}}async function De(ee){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ee}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await de())}catch(xe){console.error("[deleteUser]",xe)}}async function ke(ee){try{const Pe=await(await fetch(`/api/users/${ee.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ee.enabled})})).json();Pe.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Pe.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function _e(ee){try{const{value:xe}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ee.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(xe){const ae=await(await fetch(`/api/users/${ee.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:xe})})).json();ae.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ae.message||"重置失败")}}catch{}}return{userList:g,userSearch:c,groupFilter:_,userPageTab:l,expandedGroups:S,addMemberGroupMap:i,filteredUsers:w,toggleGroupExpand:h,removeMemberFromGroupInline:C,addMemberToGroupInline:R,changeUserGroup:x,showAddUser:o,editingUser:n,userForm:v,savingUser:N,editingGroup:A,menuConfigDialog:F,memberDialog:G,groupEditForm:se,subPageCache:I,showAddGroup:T,addGroupForm:B,savingGroup:K,groupMembers:ie,addMemberUsername:Q,selectedMemberGroup:Z,subPageSectionExpanded:L,toggleSubPageSection:O,getGroupMemberCount:z,getMenuEnabledCount:k,groupCount:E,openMemberManager:ce,loadGroupMembers:W,addMemberToGroup:b,removeMemberFromGroup:r,availableUsersForGroup:q,onParentToggle:m,openMenuConfig:H,saveMenuConfig:ue,deleteGroupConfig:X,createGroup:M,allGroups:U,getGroupName:pe,loadAllGroups:re,loadUsers:de,editUser:Y,saveUser:oe,deleteUser:De,toggleUserEnabled:ke,resetUserPassword:_e}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:f}=Vue,{stockKlineLoaded:t,stockDetailVisible:d,stockDetailTab:p,stockDetail:P,disposeStockKline:g}=a,c=e([]),_=e(!1),l=e(!1),S=e("date"),i=e([]),w=e([]),h=e([]),C=e([]),R=f(()=>{var r,q;const b=[];for(const m of c.value){if(!m||m.id==null)continue;const H=m.stock_name||m.stock_code||"",ue=Array.isArray(m.messages)?m.messages:[];b.push({id:m.id,stock_code:m.stock_code,stock_name:H,first_msg:m.first_msg||((q=(r=ue[0])==null?void 0:r.content)==null?void 0:q.substring(0,50))||"",msg_count:m.msg_count||ue.length||0,created_at:m.created_at,date:(m.created_at||"").substring(0,10),month:(m.created_at||"").substring(0,7),messages:ue})}return b}),x=f(()=>{const b={};for(const q of R.value){const m=q.date||"未知";b[m]||(b[m]=[]),b[m].push(q)}const r={};return Object.keys(b).sort((q,m)=>m.localeCompare(q)).forEach(q=>r[q]=b[q]),r}),o=f(()=>{const b={};for(const q of R.value){const m=q.month||"未知";b[m]||(b[m]=[]),b[m].push(q)}const r={};return Object.keys(b).sort((q,m)=>m.localeCompare(q)).forEach(q=>r[q]=b[q]),r}),n=f(()=>{const b={};for(const r of R.value){const q=`${r.stock_name}(${r.stock_code})`;b[q]||(b[q]=[]),b[q].push(r)}return b});function v(b){const r=i.value.indexOf(b);r>=0?i.value.splice(r,1):i.value.push(b)}function N(b){const r=x.value[b]||[];if(r.every(m=>i.value.includes(m.id)))i.value=i.value.filter(m=>!r.some(H=>H.id===m));else for(const m of r)i.value.includes(m.id)||i.value.push(m.id)}function A(b){const r=o.value[b]||[];if(r.every(m=>i.value.includes(m.id)))i.value=i.value.filter(m=>!r.some(H=>H.id===m));else for(const m of r)i.value.includes(m.id)||i.value.push(m.id)}function F(b){const r=n.value[b]||[];if(r.every(m=>i.value.includes(m.id)))i.value=i.value.filter(m=>!r.some(H=>H.id===m));else for(const m of r)i.value.includes(m.id)||i.value.push(m.id)}function G(b){const r=w.value.indexOf(b);r>=0?w.value.splice(r,1):w.value.push(b)}function se(b){const r=h.value.indexOf(b);r>=0?h.value.splice(r,1):h.value.push(b)}function I(b){const r=C.value.indexOf(b);r>=0?C.value.splice(r,1):C.value.push(b)}function T(){i.value.length===R.value.length?i.value=[]:i.value=R.value.map(b=>b.id)}async function B(){if(i.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${i.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const b of[...i.value])await ce(b);i.value=[]}}const K={};async function ie(b){P.value={stock:b.stock_code,name:b.stock_name},d.value=!0,p.value="chat",t.value=!1,g(),L.value=!0,O.value="",Z.value=[];try{let r=K[b.id];if(!r){const q=await fetch("/api/ai/chat/history/"+b.id);if(!q.ok)throw new Error("load history failed");r=(await q.json()).messages||[],K[b.id]=r}Z.value=r.map(q=>({role:q.role,content:q.content}))}catch{O.value="历史消息加载失败，请重试"}finally{L.value=!1}}const Q=e(""),Z=e([]),L=e(!1),O=e("");async function z(){var q;const b=Q.value.trim();if(!b||L.value)return;O.value="",Z.value.push({role:"user",content:b}),Q.value="",L.value=!0;const r=Z.value.length;Z.value.push({role:"assistant",content:""});try{const ue=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((q=P.value)==null?void 0:q.stock)||"",message:b})})).body.getReader(),X=new TextDecoder;let M="";for(;;){const{done:U,value:re}=await ue.read();if(U)break;M+=X.decode(re,{stream:!0});const pe=M.split(`
`);M=pe.pop()||"";for(const de of pe)if(de.startsWith("data: "))try{const Y=JSON.parse(de.slice(6));Y.token?Z.value[r].content+=Y.token:Y.done?console.log("Stream done:",Y.session_id):Y.error&&(O.value=Y.error)}catch(Y){console.warn("SSE parse error:",Y)}}}catch(m){Z.value[r].content||(Z.value[r].content="网络错误: "+m.message)}L.value=!1}async function k(b){var q;O.value="",L.value=!0;const r={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};Z.value.push({role:"user",content:r[b]||r.comprehensive});try{const H=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((q=P.value)==null?void 0:q.stock)||"",mode:b})});if(H.ok){const ue=await H.json();Z.value.push({role:"assistant",content:ue.reply||"无回复"})}}catch(m){O.value="网络错误: "+m.message}L.value=!1}async function E(){_.value=!0,l.value=!1;try{const b=await fetch("/api/ai/chat/history?view=date");if(b.ok){const r=await b.json(),q=[];for(const m of r)for(const H of m.items||[])q.push(H);c.value=q}else l.value=!0}catch(b){console.error(b),l.value=!0}finally{_.value=!1}}async function ce(b){try{await fetch("/api/ai/chat/history/"+b,{method:"DELETE"}),c.value=c.value.filter(r=>r.id!==b)}catch(r){console.error("deleteChatSession:",r)}}function W(b){if(!b)return"";const r=String(b).split(`
`),q=[],m=[];let H=0;for(;H<r.length;){if(/^\s*\|.*\|\s*$/.test(r[H])){let X=H;const M=[];for(;X<r.length&&/^\s*\|.*\|\s*$/.test(r[X]);)M.push(r[X]),X++;const U=de=>de.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(Y=>Y.trim()),re=M.map(U);if(re.length>1&&re[1].every(de=>/^:?-{3,}:?$/.test(de))){const de=Math.max(...re.map(ke=>ke.length)),Y=re[0].slice(0,de),oe=re.slice(2);let De="<table>";oe.length?(De+="<thead><tr>"+Y.map(ke=>"<th>"+ke+"</th>").join("")+"</tr></thead>",De+="<tbody>"+oe.map(ke=>"<tr>"+ke.slice(0,de).map(_e=>"<td>"+_e+"</td>").join("")+"</tr>").join("")+"</tbody>"):De+="<tbody><tr>"+Y.map(ke=>"<td>"+ke+"</td>").join("")+"</tr></tbody>",De+="</table>",q.push(De),m.push("\0T"+(q.length-1)+"\0"),H=X;continue}for(;H<X;)m.push(r[H]),H++;continue}m.push(r[H]),H++}let ue=m.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return q.forEach((X,M)=>{ue=ue.split("\0T"+M+"\0").join(X)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ue=window.__quantModules.core.sanitizeHtml(ue)),ue}return{chatSessions:c,chatHistoryView:S,selectedChatIds:i,expandedChatDates:w,expandedChatMonths:h,expandedChatStocks:C,chatHistoryLoading:_,chatHistoryError:l,allChatSessionsFlat:R,chatGroupedByDate:x,chatGroupedByMonth:o,chatGroupedByStock:n,toggleSelectChat:v,toggleSelectChatDate:N,toggleSelectChatMonth:A,toggleSelectChatStock:F,toggleChatDateExpand:G,toggleChatMonthExpand:se,toggleChatStockExpand:I,selectAllChatSessions:T,deleteSelectedChatSessions:B,viewChatSession:ie,loadChatHistory:E,deleteChatSession:ce,renderMarkdown:W,stockChatInput:Q,stockChatMessages:Z,stockChatLoading:L,stockChatError:O,askStockSend:z,askStockQuick:k}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:f,watch:t}=Vue,{consensus:d,currentPage:p,currentSubPage:P,dashboardData:g,searchKeyword:c,statusFilter:_,strategyFilter:l,strategyFilterCounts:S}=a;function i(I){const T=l.value.selected;if(!T||T.length===0)return I;const B=l.value.mode;return I.filter(K=>{const ie=K.strategy_names||K.strategies||[];return B==="union"?T.some(Q=>ie.includes(Q)):T.every(Q=>ie.includes(Q))})}const w=f(()=>{const I=i(d.value||[]);return{all:I.length,newCount:I.filter(T=>T.status==="new").length,current:I.filter(T=>T.status==="current").length,out:I.filter(T=>T.status==="out").length}}),h=f(()=>{let I=d.value||[];if(_.value!=="all"&&(I=I.filter(T=>T.status===_.value)),I=i(I),c.value){const T=c.value.toLowerCase();I=I.filter(B=>B.code.toLowerCase().includes(T)||B.name&&B.name.toLowerCase().includes(T))}return I}),C=f(()=>{const I=d.value||[],T={},B={};for(const K of I)K.code&&K.name&&(B[K.code]=K.name);for(const K of I){const ie=K.strategy_names||K.strategies||[];for(const Q of ie)T[Q]||(T[Q]={strategy:Q,count:0,codes:[],names:[]}),T[Q].count++,T[Q].codes.includes(K.code)||(T[Q].codes.push(K.code),T[Q].names.push({code:K.code,name:B[K.code]||K.code}))}return Object.values(T).sort((K,ie)=>ie.count-K.count)}),R=f(()=>{const I=l.value.selected,T=l.value.mode,B={};for(const[K,ie]of Object.entries(S.value)){const Q=ie||[];!I||I.length===0?B[K]=Q.length:T==="union"?B[K]=Q.filter(Z=>Z.strategies&&I.some(L=>Z.strategies.includes(L))).length:B[K]=Q.filter(Z=>Z.strategies&&I.every(L=>Z.strategies.includes(L))).length}return B});function x(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(l.value.selected)),localStorage.setItem("quant_strategy_filter_mode",l.value.mode)}const o=f(()=>{const I=(g.value||{}).consensus_rank||[];return i(I)}),n=f(()=>{const I=d.value||S.value.day||[];return i(I).length}),v=f(()=>{const I=(g.value||{}).strategy_counts||[],T=d.value||S.value.day||[];if(T.length===0)return I;const B=i(T),K={};B.forEach(Q=>{(Q.strategy_names||Q.strategies||[]).forEach(L=>{K[L]=(K[L]||0)+1})});const ie=B.length||1;return I.map(Q=>{const Z=Q.strategy_name||Q.strategy_id,L=K[Z]||0;return{...Q,count:L,percentage:Math.round(L/ie*1e3)/10}})}),N=f(()=>{const I=(g.value||{}).pool_changes||{},T=(I.new_count||0)-(I.out_count||0);return T>0?{dir:"up",text:"↑"+T}:T<0?{dir:"down",text:"↓"+Math.abs(T)}:{dir:"flat",text:"→0"}}),A=f(()=>{const I=(g.value||{}).time_coverage||{},T=new Date(I.start_date),B=new Date(I.end_date),K=new Date;if(!T.getTime()||!B.getTime()||K>=B)return 100;if(K<=T)return 0;const ie=B-T,Q=K-T;return Math.round(Q/ie*100)}),F=e(null),G=f(()=>{if(!F.value)return"";const I=Math.floor((Date.now()-F.value)/1e3);return I<60?I+"秒前刷新":I<3600?Math.floor(I/60)+"分钟前刷新":Math.floor(I/3600)+"小时前刷新"});function se(I){l.value.selected=[I],l.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([I])),localStorage.setItem("quant_strategy_filter_mode","union"),p.value="calendar",P.value="calendar"}return{applyStrategyFilter:i,statusCounts:w,stockPool:h,strategyDistribution:C,strategyPreviewCount:R,saveStrategyFilter:x,filteredConsensusRank:o,currentPoolSize:n,filteredStrategyCounts:v,poolChangeBadge:N,timeBarPercent:A,lastRefreshTime:F,timeSinceRefresh:G,navigateToStrategyFilter:se}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function f(d){return a[d]||"var(--text-tertiary)"}function t(d){return e[d]||"var(--bg-hover)"}window.__quantModules.watchlist={create(d){const{ref:p,computed:P,watch:g}=Vue,{currentUser:c,selectedDate:_,stockDetail:l,stockDetailTab:S,stockDetailVisible:i,stockDetailLoading:w,stockKlineLoaded:h,viewCache:C,animateScoreEntrance:R,loadStockKline:x,refreshStockScore:o,disposeStockKline:n,aiHistory:v,aiLoading:N,aiEvalStage:A,aiEvalElapsed:F,aiEvalError:G,aiResult:se,loadLastEvaluation:I,autoEvaluateConfig:T,autoEvaluateScope:B,batchStocks:K,batchRunning:ie,batchTotal:Q,batchCompleted:Z,batchCurrent:L,batchStatuses:O,batchResults:z,batchEvalErrors:k,expandedDates:E,expandedStocks:ce,savingConfig:W,selectedHistoryIds:b,selectedWatchlistCodes:r,showAutoEvaluateSettings:q,showBatchEvaluate:m}=d,H=s=>(getComputedStyle(document.documentElement).getPropertyValue(s)||"").trim(),ue=p(""),X=p("default"),M=p("default"),U=p([]),re=P(()=>new Set(U.value.map(s=>s.code))),pe=p(!1),de=p(!1),Y=P(()=>{const s=[...U.value];return M.value==="name"?s.sort((V,ne)=>V.name.localeCompare(ne.name,"zh")):M.value==="added"?s.sort((V,ne)=>(ne.added_at||"").localeCompare(V.added_at||"")):M.value==="score"&&s.sort((V,ne)=>{const Ce=De(V.code);return De(ne.code)-Ce}),s});function oe(s){const V=v.value.filter(Ce=>Ce.stock_code===s);if(V.length===0)return null;const ne=V.reduce((Ce,qe)=>Ce.evaluate_time>qe.evaluate_time?Ce:qe);return{score:ne.result.total_score,color:f(ne.result.level),bg:t(ne.result.level)}}function De(s){const V=oe(s);return V?V.score:0}function ke(s){Te(s.code,s.name),ae.value=ae.value.filter(V=>V.code!==s.code),Pe.value=""}const _e=P(()=>new Set(v.value.map(s=>s.stock_code))),ee=p(new Set);function xe(s){ee.value.add(s)}const Pe=p(""),ae=p([]),te=p(!1),he=p({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ne=p(!1),Ie=p(!1),Ue=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};Ue.REALTIME_WS_PATH;const Ge=Ue.REALTIME_DEGRADED_TEXT||"数据不可达",ht=Ue.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";Ue.WARN_RISE_SPEED_THRESHOLD!=null&&Ue.WARN_RISE_SPEED_THRESHOLD,Ue.WARN_VOLUME_RATIO_THRESHOLD!=null&&Ue.WARN_VOLUME_RATIO_THRESHOLD;const st=Ue.quoteFmt||{price:s=>s==null?"--":Number(s).toFixed(2),pct:s=>s==null?"--":Number(s).toFixed(2)+"%",num:s=>s==null?"--":Number(s).toFixed(2),color:s=>""},Rt=3,Se=5e3,we=p({}),Ae=p(!1),Re=p("idle");let Xe=null,Ze=null,tt=0;function xt(s){return Ue.checkQuoteWarning?Ue.checkQuoteWarning(s):null}function St(s){return xt(we.value[s])}function pt(s){return st.color(we.value[s])}function zt(s){return st.price(we.value[s]&&we.value[s].price)}function Kt(s){return st.pct(we.value[s]&&we.value[s].change_pct)}function Jt(s,V){return st.num(we.value[s]&&we.value[s][V])}function et(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function yt(){if(!Xe||Xe.readyState!==1)return;const s=(U.value||[]).map(V=>V.code);s.length!==0&&Xe.send(JSON.stringify({subscribe:s}))}function Wt(){if(Ze&&(clearTimeout(Ze),Ze=null),Xe){try{Xe.onopen=null,Xe.onmessage=null,Xe.onerror=null,Xe.onclose=null,Xe.close()}catch{}Xe=null}we.value={},Ae.value=!1,Re.value="idle"}function gt(){const s=et();if(!s||!Ue.buildRealtimeWsUrl||Re.value==="open"||Re.value==="connecting")return;let V;try{V=Ue.buildRealtimeWsUrl()+"?token="+encodeURIComponent(s)}catch{Re.value="offline",Ae.value=!0;return}Re.value="connecting";let ne=null;try{ne=new WebSocket(V)}catch{Re.value="offline",Ae.value=!0;return}Xe=ne,ne.onopen=function(){Re.value="open",tt=0,yt()},ne.onmessage=function(Ce){let qe=null;try{qe=JSON.parse(Ce.data||"{}")}catch{return}if(!qe||qe.type!=="quotes")return;if(Ae.value=!!qe.degraded,qe.degraded||!Array.isArray(qe.data)){we.value={};return}const Tt={};qe.data.forEach(function($e){$e&&$e.code&&(Tt[$e.code]=$e)}),we.value=Tt},ne.onerror=function(){Re.value="offline",Ae.value=!0},ne.onclose=function(){Re.value="offline",tt<Rt?(tt++,Ze=setTimeout(function(){Re.value!=="open"&&gt()},Se*tt)):Ae.value=!0}}g(U,function(){Re.value==="open"&&yt()}),et()&&setTimeout(gt,500);async function Ut(){if(!l.value)return;N.value=!0,se.value=null,G.value="",A.value="fetching",F.value=0;const s=Date.now(),V=setInterval(()=>{N.value&&(F.value=Math.round((Date.now()-s)/1e3))},500);try{const ne=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:l.value.stock,stock_name:l.value.name||l.value.stock,strategy:X.value})});A.value="calculating";const Ce=await ne.json();A.value="analyzing",Ce.success?(await nextTick(),se.value=Ce.data,S.value="ai",J()):(G.value=Ce.message||"评估失败",ElementPlus.ElMessage.error(G.value))}catch(ne){G.value=ne&&ne.message&&!String(ne.message).includes("Failed to fetch")?ne.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(G.value)}finally{clearInterval(V),N.value=!1,F.value=0,G.value?A.value="":(A.value="done",setTimeout(()=>{A.value==="done"&&(A.value="")},800))}}const _t=50,Je=p(0),At=p(!1),wt=P(()=>v.value.length<Je.value);async function J(){pe.value=!0,de.value=!1;try{if(!localStorage.getItem("quant_token")){v.value=[];return}const V=await fetch(`/api/ai/history?limit=${_t}&offset=0`);if(V.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),c.value=null;return}const ne=await V.json();ne.success?(v.value=ne.data||[],Je.value=ne.total!=null?ne.total:v.value.length):de.value=!0}catch(s){console.error("[loadAiHistory] error:",s),de.value=!0}finally{pe.value=!1}}async function ge(){if(!(At.value||!wt.value)){At.value=!0;try{const V=await(await fetch(`/api/ai/history?limit=${_t}&offset=${v.value.length}`)).json();if(V.success&&Array.isArray(V.data)){const ne=new Set(v.value.map(qe=>qe.id)),Ce=V.data.filter(qe=>!ne.has(qe.id));v.value=v.value.concat(Ce),V.total!=null&&(Je.value=V.total)}}catch(s){console.warn("[loadMoreAiHistory] error:",s)}finally{At.value=!1}}}async function at(s){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ne=await(await fetch(`/api/ai/history/${s}`,{method:"DELETE"})).json();if(ne.success){ElementPlus.ElMessage.success("删除成功"),J();const Ce=b.value.indexOf(s);Ce>=0&&b.value.splice(Ce,1)}else ElementPlus.ElMessage.error(ne.message||"删除失败")}catch{}}function kt(s){const V=b.value.indexOf(s);V>=0?b.value.splice(V,1):b.value.push(s)}function lt(){b.value=[]}function It(){r.value=[]}async function ea(){const s=b.value;if(s.length===0)return;const V=v.value.filter(ne=>s.includes(ne.id)).map(ne=>ne.stock_code);m.value=!0,K.value=[...new Set(V)].join(",")}async function aa(){const s=b.value;if(s.length===0)return;const V=v.value.filter(qe=>s.includes(qe.id)),ne=[...new Map(V.map(qe=>[qe.stock_code,qe])).values()];let Ce=0;for(const qe of ne)re.value.has(qe.stock_code)||(await Te(qe.stock_code,qe.stock_name||qe.stock_code),Ce++);Ce>0?ElementPlus.ElMessage.success(`已加入 ${Ce} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function na(){const s=b.value;if(s.length===0)return;const V=v.value.filter(Ce=>s.includes(Ce.id)),ne=[...new Map(V.map(Ce=>[Ce.stock_code,Ce])).values()];try{const qe=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ne.map(Tt=>({stock_code:Tt.stock_code,stock_name:Tt.stock_name||""}))})})).json();qe&&qe.success?ElementPlus.ElMessage.success(`已登记 ${qe.count||ne.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(qe&&qe.detail||"批量加入组合失败")}catch(Ce){console.warn("batchAddToPortfolio failed:",Ce),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function ta(){if(r.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${r.value.length} 只股票？`,"提示",{type:"warning"});for(const s of r.value)await Ve(s);r.value=[],ElementPlus.ElMessage.success("已移除")}catch(s){s&&s.message!=="cancel"&&console.warn("batchRemoveWatchlist:",s)}}function Qt(s){const V=r.value.indexOf(s);V>=0?r.value.splice(V,1):r.value.push(s)}function Ht(){b.value.length===v.value.length?b.value=[]:b.value=v.value.map(s=>s.id)}function Nt(){r.value.length===U.value.length?r.value=[]:r.value=U.value.map(s=>s.code)}async function Gt(){if(b.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${b.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const V=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:b.value})})).json();V.success?(ElementPlus.ElMessage.success(V.message),b.value=[],J()):ElementPlus.ElMessage.error(V.message||"删除失败")}catch{}}async function ft(){try{const V=await(await fetch("/api/ai/auto-config")).json();V.success&&(T.value=V.data,V.data.evaluate_scope&&(B.value=V.data.evaluate_scope))}catch(s){console.warn("loadAutoEvaluateConfig failed:",s)}}async function u(){W.value=!0;try{T.value.evaluate_scope=B.value;const V=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T.value)})).json();V.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),q.value=!1):ElementPlus.ElMessage.error(V.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{W.value=!1}}const $=p(!1);async function le(){$.value=!0;try{const V=await(await fetch("/api/watchlist")).json();V.success&&(U.value=V.stocks||[])}catch(s){console.warn("loadWatchlist failed:",s)}finally{$.value=!1}}async function Te(s,V){try{const Ce=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:s,name:V})})).json();if(Ce.success)return Ce.existed||U.value.push({code:s,name:V,added_at:new Date().toISOString()}),!0}catch(ne){console.warn("addToWatchlist failed:",ne)}return!1}async function Ve(s){try{await fetch(`/api/watchlist/${encodeURIComponent(s)}`,{method:"DELETE"}),U.value=U.value.filter(V=>V.code!==s)}catch(V){console.warn("removeFromWatchlist failed:",V)}}async function Qe(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),U.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(s){console.warn("clearWatchlist failed:",s)}}async function Oe(s,V){re.value.has(s)?(await Ve(s),ElementPlus.ElMessage.info("已移除自选")):await Te(s,V)&&ElementPlus.ElMessage.success("已加入自选")}async function rt(s,V){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(s,V||"");const ne=new Date().toISOString().split("T")[0],Ce=_.value||ne;S.value="kline",se.value=null,G.value="",n("stockKlineChart"),l.value=null,w.value=!0,h.value=!1,i.value=!0,nextTick(()=>R());try{const qe=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${Ce}`);l.value=await qe.json()}catch{l.value={stock:s,name:V,total_days:0}}finally{w.value=!1}await nextTick(),await x("daily"),o(),I(s)}const nt=p(!1);async function ct(){var s;if(U.value.length!==0){nt.value=!0;try{const ne=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ne.success&&ne.loaded>0?(((s=ne.details)==null?void 0:s.loaded)||[]).forEach(Ce=>ee.value.add(Ce.code)):ne.loaded===0&&ne.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(V){console.error("预加载K线失败:",V)}finally{nt.value=!1}}}async function Ot(s,V){N.value=!0,se.value=null,G.value="",A.value="fetching",h.value=!1,n();const ne=new Date().toISOString().split("T")[0],Ce=_.value||ne;try{const qe=await fetch(`/api/calendar/stock/${encodeURIComponent(s)}?date=${Ce}`);l.value=await qe.json()}catch{l.value={stock:s,name:V,total_days:0}}S.value="ai",i.value=!0,await nextTick();try{const Tt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s,stock_name:V})})).json();Tt.success?(se.value=Tt.data,J()):(G.value=Tt.message||"评估失败",ElementPlus.ElMessage.error(G.value))}catch{G.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(G.value)}finally{N.value=!1,A.value=""}}async function Et(){U.value.length!==0&&(m.value=!0,K.value=U.value.map(s=>s.code).join(","))}async function D(){r.value.length!==0&&(m.value=!0,K.value=r.value.join(","))}async function fe(){if(!Pe.value.trim()){ae.value=[];return}te.value=!0;try{const V=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(Pe.value)}`)).json();ae.value=(V.results||[]).filter(ne=>!re.value.has(ne.code))}catch(s){console.warn("searchStockForWatchlist failed:",s)}finally{te.value=!1}}async function Le(){try{const V=await(await fetch("/api/data-refresh/config")).json();he.value=V}catch(s){console.error("加载数据刷新配置失败:",s)}}async function Me(){Ie.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(he.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ie.value=!1}}async function ze(){var s;Ne.value=!0;try{const ne=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ne.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((s=ne.parser_stats)==null?void 0:s.dates_count)||0}交易日`),C.clear(),await Le()):ElementPlus.ElMessage.error(ne.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Ne.value=!1}}const He=p(!1);async function mt(){He.value=!0;try{const V=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(V.success){const ne=V.result||{},Ce=V.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ne.pulled||0}/${ne.total||0}, 财务 ${Ce.pulled||0}/${Ce.total||0}`),C.clear(),await Le()}else ElementPlus.ElMessage.error(V.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{He.value=!1}}const Mt=P(()=>{const s={};for(const V of v.value){const ne=(V.evaluate_time||"").split("T")[0];s[ne]||(s[ne]=[]),s[ne].push(V)}for(const V in s)s[V].sort((ne,Ce)=>Ce.evaluate_time.localeCompare(ne.evaluate_time));return s}),it=P(()=>{const s={};for(const V of v.value){const ne=V.stock_code;s[ne]||(s[ne]=[]),s[ne].push(V)}for(const V in s)s[V].sort((ne,Ce)=>Ce.evaluate_time.localeCompare(ne.evaluate_time));return s}),Bt=P(()=>{const s={};for(const V of v.value){const ne=(V.evaluate_time||"").split("T")[0].slice(0,7);s[ne]||(s[ne]=[]),s[ne].push(V)}for(const V in s)s[V].sort((ne,Ce)=>Ce.evaluate_time.localeCompare(ne.evaluate_time));return s}),qa=P(()=>Object.keys(it.value).length),ia=P(()=>{const s=v.value.length;return s===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(ne=>{const Ce=v.value.filter(qe=>qe.result.total_score>=ne.min&&qe.result.total_score<=ne.max).length;return{...ne,count:Ce,pct:Math.round(Ce/s*100)}})});async function wa(){if(!ue.value)return;const s=U.value.find(V=>V.code===ue.value);if(s){N.value=!0,se.value=null,G.value="",A.value="fetching";try{l.value={stock:s.code,name:s.name,total_days:0},i.value=!0,S.value="ai",await nextTick();const ne=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:s.code,stock_name:s.name,strategy:X.value})})).json();ne.success?(se.value=ne.data,J(),ue.value=""):(G.value=ne.message||"评估失败",ElementPlus.ElMessage.error(G.value))}catch{G.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(G.value)}finally{N.value=!1,A.value=""}}}function oa(s){const V=E.value.indexOf(s);V>=0?E.value.splice(V,1):E.value.push(s)}function Pa(s){const ne=(Mt.value[s]||[]).map(qe=>qe.id);ne.every(qe=>b.value.includes(qe))?b.value=b.value.filter(qe=>!ne.includes(qe)):ne.forEach(qe=>{b.value.includes(qe)||b.value.push(qe)})}function ra(s){const ne=(Bt.value[s]||[]).map(qe=>qe.id);ne.every(qe=>b.value.includes(qe))?b.value=b.value.filter(qe=>!ne.includes(qe)):ne.forEach(qe=>{b.value.includes(qe)||b.value.push(qe)})}function Da(s){const V=ce.value.indexOf(s);V>=0?ce.value.splice(V,1):ce.value.push(s)}function ca(s){const ne=(it.value[s]||[]).map(qe=>qe.id);ne.every(qe=>b.value.includes(qe))?b.value=b.value.filter(qe=>!ne.includes(qe)):ne.forEach(qe=>{b.value.includes(qe)||b.value.push(qe)})}const $t={},ka={};function ga(s,V,ne){if(!s||(ne&&(ka[V]={el:s,records:ne}),$t[V]===s))return;const Ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,qe=()=>{Object.keys($t).forEach(We=>{if($t[We]&&$t[We]!==s){try{$t[We].dispose()}catch{}delete $t[We]}});const Tt=[...ne].sort((We,Pt)=>We.evaluate_time.localeCompare(Pt.evaluate_time)),$e=Tt.map(We=>(We.evaluate_time||"").split("T")[0]),bt=Tt.map(We=>{var Pt;return((Pt=We.result)==null?void 0:Pt.total_score)??null}),Yt=Tt.map(We=>{var Pt;return((Pt=We.result)==null?void 0:Pt.level)??""}),Ct={primary:H("--qc-primary-600")||"#b8922a",textPrimary:H("--text-primary")||"#1f2937",textSecondary:H("--text-secondary")||"#6b7280",border:H("--border-light")||"#e5e7eb",up:H("--color-success")||"#67c23a",down:H("--color-danger")||"#f56c6c"},da=[];for(let We=1;We<bt.length;We++)bt[We]!=null&&bt[We-1]!=null&&Math.abs(bt[We]-bt[We-1])>=15&&da.push({name:"大幅变化",coord:[$e[We],bt[We]],value:(bt[We]-bt[We-1]>0?"↑":"↓")+Math.abs(bt[We]-bt[We-1]),symbol:"pin",symbolSize:32,itemStyle:{color:bt[We]-bt[We-1]>0?Ct.up:Ct.down}});const ua=echarts.init(s);ua.setOption({tooltip:{trigger:"axis",backgroundColor:H("--bg-card")||"#ffffff",borderColor:Ct.border,textStyle:{color:Ct.textPrimary},formatter:function(We){var ya;const Pt=(ya=We[0])==null?void 0:ya.dataIndex,ha=Pt!=null?Yt[Pt]:"";return $e[Pt]+"<br/>得分: "+bt[Pt]+(ha?" ("+ha+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:$e,axisLabel:{fontSize:10,rotate:30,color:Ct.textSecondary},axisLine:{lineStyle:{color:Ct.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Ct.textSecondary},splitLine:{lineStyle:{color:Ct.border}}},series:[{data:bt,type:"line",smooth:!0,lineStyle:{color:Ct.primary,width:2},itemStyle:{color:Ct.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:H("--primary-rgb")?"rgba("+H("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:da.length>0?{data:da}:void 0}]}),$t[V]=ua};Ce?Ce().then(qe).catch(()=>{}):qe()}function Ra(){Object.keys(ka).forEach(s=>{const V=ka[s];if(!(!V||!V.el)){if($t[s]){try{$t[s].dispose()}catch{}delete $t[s]}ga(V.el,s,V.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Ra));async function za(s){se.value=s,h.value=!1,n();try{const V=await fetch(`/api/calendar/stock/${s.stock_code}?date=${_.value}`);l.value=await V.json()}catch{l.value={stock:s.stock_code,name:s.stock_name||s.stock_code,total_days:0,history:[]}}i.value=!0,S.value="ai"}async function y(){if(!K.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const s=K.value.split(/[,，\s]+/).filter($e=>$e.trim());if(s.length===0)return;ie.value=!0,Q.value=s.length,Z.value=0,L.value="",O.value={},z.value={},k.value={},s.forEach($e=>{O.value[$e]="pending",z.value[$e]=null});const V={"Content-Type":"application/json"};let ne=0,Ce=0,qe=!1;try{const $e=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:V,body:JSON.stringify({stock_codes:s})});if($e.ok&&$e.body){qe=!0;const bt=$e.body.getReader(),Yt=new TextDecoder("utf-8");let Ct="",da=!1;for(;!da;){const{value:ua,done:We}=await bt.read();da=We,Ct+=Yt.decode(ua||new Uint8Array,{stream:!da});let Pt;for(;(Pt=Ct.indexOf(`

`))>=0;){const ha=Ct.slice(0,Pt);Ct=Ct.slice(Pt+2);const ya=ha.split(`
`).find(Ka=>Ka.startsWith("data: "));if(!ya)continue;let Dt;try{Dt=JSON.parse(ya.slice(6))}catch{continue}Dt.type==="start"?Dt.total&&(Q.value=Dt.total):Dt.type==="item"?(Z.value++,L.value=Dt.stock_code,Dt.success?(O.value[Dt.stock_code]="success",z.value[Dt.stock_code]=Dt,ne++):(O.value[Dt.stock_code]="error",k.value[Dt.stock_code]=Dt.error||"评估失败",Ce++)):Dt.type==="done"&&(typeof Dt.success=="number"&&(ne=Dt.success),typeof Dt.fail=="number"&&(Ce=Dt.fail))}}if(Ct.trim()){const ua=Ct.split(`
`).find(We=>We.startsWith("data: "));if(ua)try{const We=JSON.parse(ua.slice(6));We.type==="item"?(Z.value++,L.value=We.stock_code,We.success?(O.value[We.stock_code]="success",z.value[We.stock_code]=We,ne++):(O.value[We.stock_code]="error",k.value[We.stock_code]=We.error||"评估失败",Ce++)):We.type==="done"&&(typeof We.success=="number"&&(ne=We.success),typeof We.fail=="number"&&(Ce=We.fail))}catch{}}}}catch{qe=!1}if(!qe){ne=0,Ce=0,Z.value=0;for(const $e of s){L.value=$e,O.value[$e]="running";try{const Yt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:V,body:JSON.stringify({stock_code:$e.trim(),stock_name:$e.trim()})})).json();Yt.success?(O.value[$e]="success",z.value[$e]=Yt.data,ne++):(O.value[$e]="error",k.value[$e]=Yt.message&&Yt.message!=="success"?Yt.message:"评估失败",Ce++)}catch(bt){O.value[$e]="error",k.value[$e]="网络错误: "+(bt&&bt.message?bt.message:bt),Ce++}Z.value++}}L.value="",await J();const Tt=s.length;setTimeout(()=>{Ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${ne}/${Tt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${ne}/${Tt} · 失败 ${Ce}`),ie.value=!1},500)}return{quickEvalStock:ue,evalStrategy:X,watchlistSort:M,watchlist:U,watchlistCodes:re,sortedWatchlist:Y,getWatchlistScore:oe,getLatestScore:De,addSearchResult:ke,evaluatedCodes:_e,klineLoadedCodes:ee,markKlineLoaded:xe,watchlistSearch:Pe,watchlistResults:ae,watchlistSearching:te,dataRefreshConfig:he,dataRefreshReloading:Ne,dataRefreshSaving:Ie,aiHistoryLoading:pe,aiHistoryError:de,aiHistoryTotal:Je,aiHistoryLoadingMore:At,hasMoreAiHistory:wt,loadMoreAiHistory:ge,watchlistLoading:$,doAiEvaluate:Ut,loadAiHistory:J,deleteSingleHistory:at,toggleSelectHistory:kt,clearSelection:lt,clearWatchlistSelection:It,batchReevaluateHistory:ea,batchAddToWatchlist:aa,batchAddToPortfolio:na,batchRemoveWatchlist:ta,toggleSelectWatchlist:Qt,selectAllHistory:Ht,selectAllWatchlist:Nt,deleteSelectedHistory:Gt,loadAutoEvaluateConfig:ft,saveAutoEvaluateConfig:u,loadWatchlist:le,addToWatchlist:Te,removeFromWatchlist:Ve,clearWatchlist:Qe,toggleWatchlist:Oe,showStockKline:rt,preloadingKline:nt,preloadWatchlistKline:ct,watchlistEvaluate:Ot,batchEvaluateWatchlist:Et,batchEvaluateSelected:D,searchStockForWatchlist:fe,loadDataRefreshConfig:Le,saveDataRefreshConfig:Me,triggerDataReload:ze,triggerDataPull:mt,dataPullRunning:He,groupedByDate:Mt,aiHistoryByStock:it,groupedByMonth:Bt,aiHistoryStockCount:qa,scoreDistribution:ia,quickEvaluate:wa,toggleDateExpand:oa,toggleSelectDate:Pa,toggleSelectMonth:ra,toggleStockExpand:Da,toggleSelectStock:ca,registerTrendChart:ga,viewAiResult:za,doBatchEvaluate:y,realtimeQuotes:we,realtimeDegraded:Ae,realtimeWsState:Re,connectRealtimeQuotes:gt,disconnectRealtimeQuotes:Wt,quoteWarningFor:St,realtimeQuoteColor:pt,realtimePriceText:zt,realtimePctText:Kt,realtimeRatioText:Jt,REALTIME_DEGRADED_TEXT:Ge,REALTIME_FALLBACK_TEXT:ht}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:f}=Vue,t=e([]),d=e(null),p=e([]),P=e(!1),g=e(!1),c=e(!1),_=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),l=e(!1),S=e(!1),i=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),w=e(!1),h=e("positions"),C=e(30),R=e(!1),x=e(""),o=e(!1),n=e({dates:[],equity:[],values:[]}),v=f(()=>t.value.length),N=e("metrics"),A=e(!1),F=e(""),G=e(!1),se=e({metrics:null,rules:[],rebalance:null}),I=f(function(){const m=se.value.metrics;if(!m)return[];const H=function(X){return X==null?"--":Number(X).toFixed(2)+"%"},ue=function(X){return X==null?"--":Number(X).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:H(m.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:H(m.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:H(m.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:H(m.cvar)},{key:"max_drawdown",label:"最大回撤",value:H(m.max_drawdown)},{key:"annual_return",label:"年化收益",value:H(m.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ue(m.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ue(m.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ue(m.calmar_ratio)},{key:"beta",label:"Beta",value:ue(m.beta)}]});async function T(){A.value=!0;try{const m=await(await fetch("/api/portfolio/risk?days=60")).json(),H=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ue=m&&m.success?m.risk:null,X=H&&H.success?H.rules||[]:[],M=H&&H.success?H.rebalance:null;se.value={metrics:ue,rules:X,rebalance:M},G.value=!!(ue&&Object.keys(ue).length>0),F.value=m&&m.note||H&&H.note||""}catch(m){console.warn("[portfolio] 加载风险数据失败:",m),G.value=!1,F.value="风险数据加载失败"}finally{A.value=!1}}async function B(){P.value=!0,g.value=!1;try{const H=await(await fetch("/api/portfolio")).json();H.success?(t.value=H.positions||[],d.value=H.summary||null):g.value=!0}catch(m){console.warn("[portfolio] 加载持仓失败:",m),g.value=!0}finally{P.value=!1}}async function K(){const m=_.value,H=(m.stock_code||"").trim();if(!H){ElementPlus.ElMessage.warning("请输入股票代码");return}const ue=Number(m.cost_price),X=Number(m.quantity);if(!(ue>0)||!(X>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}l.value=!0;try{const U=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:H,stock_name:(m.stock_name||"").trim(),cost_price:ue,quantity:X})})).json();U.success?(ElementPlus.ElMessage.success(U.message||"持仓已更新"),c.value=!1,_.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await B(),W(C.value)):ElementPlus.ElMessage.error(U.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{l.value=!1}}async function ie(m){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+m+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ue=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(m),{method:"DELETE"})).json();ue.success?(ElementPlus.ElMessage.success("已删除持仓"),await B(),L(),W(C.value)):ElementPlus.ElMessage.error(ue.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function Q(m,H){i.value={stock_code:m,stock_name:H||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},S.value=!0}async function Z(){const m=i.value;if(!m.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const H=Number(m.price),ue=Number(m.quantity);if(!(H>0)||!(ue>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}w.value=!0;try{const M=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:m.stock_code,stock_name:m.stock_name||"",action:m.action,price:H,quantity:ue,trade_date:m.trade_date||"",note:(m.note||"").trim()})})).json();M.success?(ElementPlus.ElMessage.success(M.message||"调仓已记录"),S.value=!1,await B(),await L(),W(C.value)):ElementPlus.ElMessage.error(M.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{w.value=!1}}async function L(){try{const H=await(await fetch("/api/portfolio/trades")).json();H.success&&(p.value=H.trades||[])}catch(m){console.warn("[portfolio] 加载调仓记录失败:",m)}}const O=m=>(getComputedStyle(document.documentElement).getPropertyValue(m)||"").trim();function z(m){if(!m||!m.length)return[];let H=m[0]||0;const ue=[];for(let X=0;X<m.length;X++){const M=m[X]||0;M>H&&(H=M),ue.push(H>0?Math.round((M-H)/H*1e3)/10:0)}return ue}function k(){const m={primary:O("--qc-primary-600")||"#b8922a",textPrimary:O("--text-primary")||"#1f2937",textSecondary:O("--text-secondary")||"#6b7280",border:O("--border-light")||"#e5e7eb",up:O("--color-rise")||"#E63946",down:O("--color-fall")||"#2E7D32"},H=n.value;return{tooltip:{trigger:"axis",backgroundColor:O("--bg-card")||"#ffffff",borderColor:m.border,textStyle:{color:m.textPrimary},formatter:function(ue){const X=ue[0]?ue[0].dataIndex:-1,M=H.dates[X]||"",U=H.equity[X],re=H.values[X];let pe=M||"";return U!=null&&(pe+="<br/>组合净值: "+U),re!=null&&(pe+="<br/>组合市值: "+re),pe}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:H.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:m.textSecondary},axisLine:{lineStyle:{color:m.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:m.textSecondary},splitLine:{lineStyle:{color:m.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:m.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:H.equity,smooth:!0,showSymbol:!1,lineStyle:{color:m.primary,width:2},itemStyle:{color:m.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:O("--primary-rgb")?"rgba("+O("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:O("--primary-rgb")?"rgba("+O("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:z(H.equity),smooth:!0,showSymbol:!1,lineStyle:{color:m.down,width:1.5},itemStyle:{color:m.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function E(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function ce(m,H,ue){n.value={dates:m||[],equity:H||[],values:ue||[]},o.value=!!m&&m.length>0,o.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",k,{key:"portfolio-equity"}):E()}async function W(m){R.value=!0,x.value="";const H=Number(m)||C.value||30;C.value=H;try{const X=await(await fetch("/api/portfolio/equity_curve?days="+H)).json();X.success?(x.value=X.note||"",ce(X.dates||[],X.equity||[],X.values||[])):(x.value="数据暂不可用",E())}catch(ue){console.warn("[portfolio] 加载收益曲线失败:",ue),x.value="数据暂不可用",E()}finally{R.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function b(m,H){if(m==null||m===""||isNaN(Number(m)))return"--";const ue=Number(m),X=H??2;return(ue>=0?"+":"")+ue.toFixed(X)}function r(m,H){if(m==null||m===""||isNaN(Number(m)))return"--";const ue=Number(m),X=H??2;return(ue>=0?"+":"")+ue.toFixed(X)+"%"}function q(m){if(m==null||m===""||isNaN(Number(m)))return"";const H=Number(m);return H>0?"portfolio-up":H<0?"portfolio-down":""}return{positions:t,summary:d,trades:p,loading:P,loadError:g,showAddForm:c,addForm:_,addSaving:l,tradeFormVisible:S,tradeForm:i,tradeSaving:w,portfolioTab:h,equityDays:C,equityLoading:R,equityNote:x,equityHasData:o,portfolioCount:v,loadPortfolio:B,addPosition:K,removePosition:ie,openTradeForm:Q,submitTrade:Z,loadTrades:L,loadEquity:W,fmtSigned:b,fmtSignedPct:r,signClass:q,riskTab:N,riskLoading:A,riskNote:F,riskHasData:G,riskData:se,riskMetricList:I,loadRisk:T}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(c,_){var l=Number(c);return isFinite(l)?l:typeof _=="number"?_:0}function e(c){var _=Array.isArray(c)?c:[];if(_.length<2)return null;for(var l=-1/0,S=0,i=0,w=0,h=0,C=0;C<_.length;C++){var R=a(_[C].equity!=null?_[C].equity:_[C].value);R>l&&(l=R,S=C);var x=l>0?(l-R)/l*100:0;x>i&&(i=x,w=S,h=C)}function o(n){return _[n]&&_[n].date?_[n].date:""}return{maxDrawdown:Math.round(i*100)/100,peakIndex:w,troughIndex:h,peakDate:o(w),troughDate:o(h)}}function f(c){for(var _=c||{},l={},S=Object.keys(_).sort(),i=0;i<S.length;i++){var w=S[i],h=String(w).slice(0,4);/^\d{4}$/.test(h)&&(l[h]=(l[h]||0)+a(_[w]))}var C=Object.keys(l).sort();return C.map(function(R){return{year:R,return:Math.round(l[R]*100)/100}})}function t(c){var _=Array.isArray(c)?c:[],l={};_.forEach(function(w){(w.points||[]).forEach(function(h){h&&h.date&&(l[h.date]=1)})});var S=Object.keys(l).sort(),i=_.map(function(w){var h={};return(w.points||[]).forEach(function(C){C&&C.date&&(h[C.date]=a(C.value!=null?C.value:C.equity))}),{name:w.name||"",data:S.map(function(C){return C in h?h[C]:null})}});return{dates:S,series:i}}function d(c){var _=c||{},l=function(i){return a(i)},S=function(i,w){var h=l(i);return isFinite(h)?h.toFixed(w):"--"};return[{key:"total_return",label:"总收益",value:S(_.total_return,2),suffix:"%",dir:l(_.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:S(_.annual_return,2),suffix:"%",dir:l(_.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:S(_.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:S(_.sharpe_ratio,2),suffix:"",dir:l(_.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:S(_.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:S(_.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(l(_.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:S(_.volatility,2),suffix:"%",dir:""}]}function p(c){var _=c==null?"":String(c);return/[",\n]/.test(_)?'"'+_.replace(/"/g,'""')+'"':_}function P(c){var _=c||{},l=[];l.push("回测指标"),l.push("指标,数值"),(_.metrics||[]).forEach(function(o){l.push(p(o.label)+","+p((o.value||"")+(o.suffix||"")))}),l.push(""),l.push("净值曲线");var S=["日期"].concat((_.series||[]).map(function(o){return o.name}));l.push(S.map(p).join(","));for(var i=_.dates||[],w=_.series||[],h=0;h<i.length;h++){for(var C=[i[h]],R=0;R<w.length;R++){var x=w[R].data&&w[R].data[h];C.push(x??"")}l.push(C.map(p).join(","))}return l.push(""),l.push("交易明细"),l.push("日期,股票代码,方向,原因"),(_.trades||[]).forEach(function(o){l.push(p(o.date)+","+p(o.stock)+","+p(o.action)+","+p(o.reason))}),l.join(`
`)}function g(c){return c==="buy"?"买入":c==="sell"?"卖出":c||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:f,buildNavSeries:t,buildMetrics:d,buildBacktestCsv:P,tradeActionText:g}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:f}=Vue,t=window.QuantBacktest||{},d=a||{},p=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],g=(Array.isArray(d.backtestStrategies)&&d.backtestStrategies.length?d.backtestStrategies:p).map(O=>({id:O.id,name:O.name})),c=e(g.length?[g[0].id]:[]),_=e(R()),l=e(1e5),S=e(3e-4),i=e(!1),w=e(!1),h=e(null),C=e("");function R(){const O=new Date,z=new Date;z.setFullYear(z.getFullYear()-1);const k=E=>E.getFullYear()+"-"+String(E.getMonth()+1).padStart(2,"0")+"-"+String(E.getDate()).padStart(2,"0");return[k(z),k(O)]}function x(O){const z=c.value.indexOf(O);z>=0?c.value.length>1&&c.value.splice(z,1):c.value.push(O)}function o(O){const z=g.find(k=>k.id===O);return z?z.name:O}function n(O){const z=O.summary||O;return{strategy_id:z.strategy_id,start_date:z.start_date,end_date:z.end_date,total_days:z.total_days,total_return:z.total_return,annual_return:z.annual_return,max_drawdown:z.max_drawdown,volatility:z.volatility,sharpe_ratio:z.sharpe_ratio,sortino_ratio:z.sortino_ratio,win_rate:z.win_rate,profit_loss_ratio:z.profit_loss_ratio,avg_positions:z.avg_positions!=null?z.avg_positions:z.avg_positions_per_day,total_trades:z.total_trades,turnover_rate:z.turnover_rate,success:z.success!==!1,message:z.message||"",insample_total_return:z.insample_total_return!=null?z.insample_total_return:null,outsample_total_return:z.outsample_total_return!=null?z.outsample_total_return:null,out_sample_ratio:z.out_sample_ratio!=null?z.out_sample_ratio:.2,overfit_warning:!!z.overfit_warning,overfit_reason:z.overfit_reason||""}}function v(O){return(Array.isArray(O)?O:[]).map(z=>({date:z.date,value:z.equity!=null?z.equity:z.value}))}function N(O,z){const k=n(z),E=v(z.equity_curve),ce=z.monthly_returns||{},W=Array.isArray(z.trade_history)?z.trade_history:[],b={id:O,name:o(O),summary:k,equityCurve:E,monthlyReturns:ce,trades:W};let r=null;if(i.value){const q=Number(l.value)||1e5;r={name:"现金基准",points:E.map(m=>({date:m.date,value:q}))}}return{success:!0,mode:"single",strategies:[b],primary:b,benchmark:r,period:(k.start_date||"")+" ~ "+(k.end_date||"")}}function A(O,z){const k=z.strategy_results||{},E=O.map(b=>{const r=k[b];if(!r)return null;const q=n(r);return{id:b,name:o(b),summary:q,equityCurve:v(r.equity_curve),monthlyReturns:r.monthly_returns||{},trades:Array.isArray(r.trade_history)?r.trade_history:[]}}).filter(b=>b&&b.summary.success!==!1),ce=E.length?E[0]:null;let W=null;return i.value&&(W={name:"等权组合基准",points:v(z.portfolio_equity)}),{success:E.length>0,mode:"multi",strategies:E,primary:ce,benchmark:W,period:ce?ce.summary.start_date+" ~ "+ce.summary.end_date:""}}const F=f(()=>{const O=h.value;return!O||!O.primary?[]:t.buildMetrics?t.buildMetrics(O.primary.summary):[]}),G=f(()=>{const O=h.value;return!O||!O.primary||!O.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(O.primary.monthlyReturns):[]}),se=f(()=>{const O=h.value;return!O||!O.primary?[]:(O.primary.trades||[]).slice().sort((z,k)=>String(k.date||"").localeCompare(String(z.date||"")))}),I=f(()=>{const O=h.value;return!O||!O.strategies||O.strategies.length<2?[]:O.strategies.map(z=>({name:z.name,metrics:t.buildMetrics?t.buildMetrics(z.summary):[]}))}),T=f(()=>{const O=h.value;return!O||!O.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(O.primary.equityCurve):null});async function B(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const z=c.value;if(!z.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const k=_.value,E={start_date:k&&k[0]||void 0,end_date:k&&k[1]||void 0},ce={"Content-Type":"application/json"};w.value=!0,h.value=null,C.value="";try{if(z.length===1){const W=Object.assign({},E,{initial_capital:Number(l.value)||1e5,commission_rate:Number(S.value)||3e-4}),b=await fetch("/api/backtest/"+encodeURIComponent(z[0]),{method:"POST",headers:ce,body:JSON.stringify(W)});if(!b.ok){const q=await b.json().catch(()=>({}));throw new Error(q.detail||"回测失败")}const r=await b.json();if(!r.success)throw new Error(r.message||"回测失败");h.value=N(z[0],r)}else{const W=await fetch("/api/backtest/multi",{method:"POST",headers:ce,body:JSON.stringify(Object.assign({},E,{strategy_ids:z}))});if(!W.ok){const r=await W.json().catch(()=>({}));throw new Error(r.detail||"回测失败")}const b=await W.json();if(!b.success)throw new Error(b.message||"多策略回测失败");if(h.value=A(z,b.data||{}),!h.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(W){C.value=W&&W.message?W.message:"回测失败",ElementPlus.ElMessage.error(C.value)}finally{w.value=!1}}function K(){const O=h.value,z={dates:[],series:[]};if(!O)return z;const k=O.strategies.map(ce=>({name:ce.name,points:ce.equityCurve}));O.benchmark&&O.benchmark.points&&O.benchmark.points.length&&k.push({name:O.benchmark.name,points:O.benchmark.points});const E=t.buildNavSeries?t.buildNavSeries(k):z;return ie(E,O)}function ie(O,z){const k=H=>(getComputedStyle(document.documentElement).getPropertyValue(H)||"").trim(),E={primary:k("--qc-primary-600")||"#b8922a",success:k("--color-success")||"#4CAF50",accent:k("--color-accent")||"#F59E0B",info:k("--color-info")||"#1976d2",ai:k("--color-ai")||"#6366f1",textPrimary:k("--text-primary")||"#1f2937",textSecondary:k("--text-secondary")||"#6b7280",border:k("--border-light")||"#e5e7eb",up:k("--color-rise")||"#E63946",down:k("--color-fall")||"#2E7D32",bg:k("--bg-card")||"#ffffff"},ce=[E.primary,E.success,E.accent,E.info,E.ai],b=E.bg.length===7&&parseInt(E.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",r=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(z.primary?z.primary.equityCurve:[]):null,q=r&&r.peakDate&&r.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:E.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+r.maxDrawdown+"%",xAxis:r.peakDate,itemStyle:{color:E.down}},{xAxis:r.troughDate}]]}:void 0,m=O.series.map((H,ue)=>{const X=z.benchmark&&H.name===z.benchmark.name,M=ce[ue%ce.length];return{name:H.name,type:"line",data:H.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:X?2:2.4,type:X?"dashed":"solid",color:M},itemStyle:{color:M},emphasis:{focus:"series"},...ue===0&&q?{markArea:q}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:b,borderColor:E.border,textStyle:{color:E.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:E.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:O.dates,boundaryGap:!1,axisLine:{lineStyle:{color:E.border}},axisLabel:{color:E.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:E.textSecondary,fontSize:11},splitLine:{lineStyle:{color:E.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:E.border,textStyle:{color:E.textSecondary,fontSize:10}}],series:m}}function Q(O){if(!O){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",K,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function Z(){const O=h.value;if(!O||!O.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const z=O.strategies.map(m=>({name:m.name,points:m.equityCurve}));O.benchmark&&z.push({name:O.benchmark.name,points:O.benchmark.points});const k=t.buildNavSeries?t.buildNavSeries(z):{dates:[],series:[]},E=t.tradeActionText||(m=>m),ce=se.value.map(m=>({date:m.date,stock:m.stock,action:E(m.action),reason:m.reason})),W=t.buildBacktestCsv?t.buildBacktestCsv({metrics:F.value,dates:k.dates,series:k.series,trades:ce}):"",b=new Blob(["\uFEFF"+W],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(b),q=document.createElement("a");q.href=r,q.download="backtest-"+O.strategies.map(m=>m.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",q.click(),URL.revokeObjectURL(r),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function L(O,z){return O==null||O===""||isNaN(Number(O))?"--":Number(O).toFixed(z??2)}return{btStrategyOptions:g,btSelectedStrategies:c,toggleBtStrategy:x,btDateRange:_,btCapital:l,btCommissionRate:S,btIncludeBenchmark:i,btRunning:w,btResult:h,btError:C,btMetrics:F,btAnnualReturns:G,btTrades:se,btStrategyMetricsRows:I,btDrawdownRegion:T,runBacktestWorkbench:B,exportBacktestCSV:Z,registerBacktestNavChart:Q,btFmtNum:L}}}})();(function(){const{ref:a,computed:e,watch:f,onUnmounted:t}=Vue,d=l=>(getComputedStyle(document.documentElement).getPropertyValue(l)||"").trim(),p=72,P={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},g={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},c={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},_={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const l=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),S=a({}),i=a(!1),w=a({}),h=a({cycles:[]}),C=a([]),R=a(0),x=a(!1),o=a({autoRefresh:!0,refreshInterval:300}),n=a(""),v=a(""),N=a(!1),A=a("");let F=null;const G={x:0,y:0},se=e(()=>{const Y=S.value;return["recession","recovery","overheat","stagflation"].map(De=>{const ke=Y[De]||{};return{key:De,name:ke.name||De,icon:c[ke.icon]||"bar-chart-3",color:ke.color||d("--text-tertiary")||"#888",bg:ke.bg_color||d("--bg-card")||"#f5f5f5",textColor:ke.color||d("--text-primary")||"#333",tagline:ke.allocation&&_[De]||""}})}),I=e(()=>{var oe,De,ke,_e;const Y=l.value.indicators||{};return[{key:"pmi",label:"PMI",value:(oe=Y.pmi)==null?void 0:oe.toFixed(2),color:Y.pmi>=50?d("--color-success")||"#43a047":d("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((De=Y.gdp_growth)==null?void 0:De.toFixed(2))+"%",color:d("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((ke=Y.cpi)==null?void 0:ke.toFixed(2))+"%",color:Y.cpi>1.2?d("--color-danger")||"#E53935":d("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((_e=Y.m2_growth)==null?void 0:_e.toFixed(2))+"%",color:d("--color-success")||"#43a047"}]}),T=Y=>{Y=Y||{};const oe=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],De=()=>d("--color-success")||"#43a047",ke=()=>d("--color-danger")||"#E53935",_e=()=>d("--color-warning")||"#FF9800",ee={宽松:De(),中位:_e(),偏低:ke(),高增长:De(),承压:ke(),不利:ke()};return oe.map(xe=>{const Pe=Y[xe.key]||{},ae=Pe.score||0,te=Math.min(100,Math.max(5,(ae+2)*25)),he=ae>=.3?"#66BB6A":ae>=-.3?"#FFB74D":"#EF5350",Ne=ae>=0?"#66BB6A":"#EF5350";return{key:xe.key,label:xe.label,scoreStr:ae.toFixed(2),level:Pe.level||"—",barWidth:te,barColor:he,scoreColor:Ne,color:ee[Pe.level]||"#888888"}})},B=e(()=>T(l.value.dimension_scores)),K=e(()=>T(w.value._dimensions)),ie=e(()=>{var oe;const Y=((oe=l.value.confidence)==null?void 0:oe.level)||"";return Y==="高"?"#43a047":Y==="中"?"#FF9800":Y==="低"?"#E53935":"var(--text-secondary)"}),Q=e(()=>{var ke,_e,ee,xe;const Y=S.value,oe={recovery:0,overheat:1,stagflation:2,recession:3},De={};for(const[Pe,ae]of Object.entries(Y))De[Pe]={name:ae.name,icon:ae.icon,color:ae.color,lightColor:ae.bg_color,duration:"~"+(((ke=ae.historical_stats)==null?void 0:ke.avg_duration_months)||18)+"个月",order:oe[Pe]||0,period:((ee=(_e=ae.case_studies)==null?void 0:_e[0])==null?void 0:ee.split("：")[0])||"",avgMonths:((xe=ae.historical_stats)==null?void 0:xe.avg_duration_months)||18};return De}),Z=e(()=>{var ae,te;const Y=l.value.stage,De={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[Y]||{x:150,y:150},ke=l.value.dimension_scores||{},_e=((ae=ke.growth)==null?void 0:ae.score)||0,ee=((te=ke.inflation)==null?void 0:te.score)||0,xe=Math.max(-30,Math.min(30,_e*15)),Pe=Math.max(-30,Math.min(30,-ee*15));return{x:De.x+xe,y:De.y+Pe,prevX:G.x,prevY:G.y}}),L=e(()=>{var ke;const Y=Math.min(100,((ke=l.value.timing)==null?void 0:ke.progress_percent)||0),oe=l.value.color||"#4CAF50",De=Y>100?"linear-gradient(90deg, "+oe+", #FF9800)":oe;return{width:Y+"%",background:De}});function O(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[l.value.stage]||0}function z(){var Y,oe;return((oe=(Y=l.value)==null?void 0:Y.timing)==null?void 0:oe.progress_percent)||0}function k(){var Y,oe;return((oe=(Y=l.value)==null?void 0:Y.timing)==null?void 0:oe.duration_months)||0}function E(){var Y,oe;return((oe=(Y=l.value)==null?void 0:Y.timing)==null?void 0:oe.avg_duration_months)||18}function ce(Y){var _e,ee;const oe=Q.value,De=((_e=oe[l.value.stage])==null?void 0:_e.order)||0;return(((ee=oe[Y])==null?void 0:ee.order)||0)<De}function W(Y){return P[Y]||Y}function b(Y){return g[Y]||Y}function r(Y){const oe=["#43a047","#f57c00","#1976d2","#757575"];return oe[Y-1]||oe[3]}async function q(){try{const oe=await(await fetch("/api/market/merrill-clock/stages")).json();oe.success&&oe.data&&(S.value=oe.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function m(){x.value=!0;try{ue();const oe=await(await fetch("/api/market/merrill-clock/timeline")).json();if(oe.success&&oe.data){const De=Array.isArray(oe.data.cycles)?oe.data.cycles.slice().reverse():[];h.value={cycles:De}}}catch{console.warn("获取美林时钟时间轴失败")}finally{x.value=!1}}async function H(Y){await M(Y)}async function ue(){try{const oe=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();oe&&oe.success&&oe.data&&(C.value=oe.data.items||[],R.value=oe.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function X(){var Y,oe;try{const ke=await(await fetch("/api/market/merrill-clock")).json(),_e=ke.stage||"recovery",ee=S.value[_e]||{};if(l.value={...ee,...ke,stage_cn:ke.stage_cn||ee.stage_cn||"",stage_name:ke.stage_name||ee.name||"",name:ke.name||ee.name||"复苏期"},n.value=new Date().toLocaleTimeString("zh-CN"),A.value&&A.value!==_e){const xe=S.value,Pe=((Y=xe[A.value])==null?void 0:Y.name)||A.value,ae=((oe=xe[_e])==null?void 0:oe.name)||_e;ElementPlus.ElMessage({message:"美林时钟阶段切换："+Pe+" → "+ae,type:"warning",duration:6e3,showClose:!0})}A.value=_e}catch(De){console.error("获取美林时钟失败:",De);const ke=S.value.recovery||{};l.value={...ke,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function M(Y){var De;i.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",w.value=S.value[Y]||S.value.recovery||{};const oe=((De=l.value)==null?void 0:De.stage)===Y;w.value._isCurrent=oe,oe&&l.value&&(w.value._nextPrediction=l.value.next_stage_prediction,w.value._confidence=l.value.confidence,w.value._stage=l.value.stage,w.value._dimensions=l.value.dimension_scores);try{const _e=await(await fetch("/api/market/merrill-clock/stage/"+Y)).json();if(_e.success&&_e.data){const ee={...S.value[Y],..._e.data};ee._is_current!==void 0&&(ee._isCurrent=ee._is_current),ee._current_timing&&(ee._currentTiming=ee._current_timing),ee._last_period&&(ee._lastPeriod=ee._last_period),w.value._nextPrediction&&(ee._nextPrediction=w.value._nextPrediction),w.value._confidence&&(ee._confidence=w.value._confidence),w.value._stage&&(ee._stage=w.value._stage),w.value._dimensions&&(ee._dimensions=w.value._dimensions),Object.assign(w.value,ee)}}catch(ke){console.warn("获取阶段详情失败:",ke)}}function U(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:o.value.autoRefresh,refreshInterval:o.value.refreshInterval})),o.value.autoRefresh?(clearInterval(F),F=setInterval(X,o.value.refreshInterval*1e3)):clearInterval(F),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function re(){N.value=!0,v.value="";try{const oe=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();oe.success?(v.value="重评估完成："+(oe.stage_name||oe.stage),await X(),ElementPlus.ElMessage.success("重评估完成")):(v.value=oe.message||"重评估失败",ElementPlus.ElMessage.error(oe.message||"重评估失败"))}catch{v.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{N.value=!1}}function pe(){const Y=localStorage.getItem("merrill_clock_config");if(Y)try{const oe=JSON.parse(Y);o.value={...o.value,...oe}}catch{}o.value.autoRefresh&&(F=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),X()},o.value.refreshInterval*1e3))}function de(){F&&clearInterval(F)}return t(()=>{de()}),{merrillData:l,merrillStagesConfig:S,showMerrillDetail:i,merrillDetailData:w,merrillTimeline:h,merrillSnapshots:C,merrillSnapshotsTotal:R,fetchMerrillSnapshots:ue,timelineLoading:x,merrillClockConfig:o,merrillClockLastUpdated:n,merrillReevalResult:v,merrillReevalLoading:N,stages:se,indicatorList:I,dimensionScoreList:B,detailDimensionScoreList:K,confidenceColor:ie,timelineStages:Q,clockPosition:Z,merrillProgressStyle:L,FULL_CYCLE_MONTHS:p,getStageAngle:O,getCycleProgress:z,getCurrentStageMonths:k,getStageTotalMonths:E,isStageCompleted:ce,getCharLabel:W,getAssetName:b,getRankColor:r,fetchMerrillStages:q,fetchMerrillClock:X,loadMerrillTimeline:m,showTimelineStage:H,showStageDetail:M,saveMerrillClockConfig:U,doMerrillReevaluate:re,startAutoRefresh:pe,stopAutoRefresh:de}}})();(function(){function a(p){return getComputedStyle(document.documentElement).getPropertyValue(p).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const f=[];function t(p){typeof p=="function"&&f.push(p)}function d(){f.slice().forEach(function(p){try{p()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:t,refreshAllCharts:d,init(){return{getEChartsTheme:e,registerChart:t,refreshAllCharts:d}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const f=e("qcState");try{const p=localStorage.getItem("quant_sidebar_collapsed");p!==null&&f.sidebarCollapsed&&(f.sidebarCollapsed.value=p==="1")}catch{}if(!f)return{};const t=async p=>{if(window.__quantGoPage){await window.__quantGoPage(p.key,p.subPages[0]||"");return}f.currentPage.value=p.key,f.currentSubPage.value=p.subPages[0]||""},d=()=>{f.sidebarCollapsed.value=!f.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",f.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:f.menus,currentPage:f.currentPage,sidebarCollapsed:f.sidebarCollapsed,navigate:t,toggle:d,sanitizeHtml:f.sanitizeHtml,keyClick:f.keyClick,t:f.t}}}})();const Sa={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,f={"layout-dashboard":Fv,calendar:Vv,bot:jv,"flask-conical":Ov,zap:Nv,settings:Iv,"chevron-down":Lv,"chevron-right":Av,"chevron-left":zv,menu:Rv,search:Dv,bell:Pv,sun:Tv,moon:Mv,user:Ev,"user-round":qv,home:Cv,x:Sv,database:xv,activity:_v,clock:kv,"bar-chart-3":wv,shield:bv,"hard-drive":yv,"file-text":hv,users:gv,cpu:fv,"pie-chart":pv,info:mv,"log-out":vv,palette:uv,languages:dv,refresh:cv,download:rv,"external-link":ov,command:lv,sparkles:iv,"trending-up":nv,"trending-down":sv,"circle-dot":av,check:tv,"alert-triangle":ev,loader:Zu,"arrow-left":Xu,"arrow-right":$u,eye:Qu,"eye-off":Ju,lock:Yu,"sliders-horizontal":Gu,play:Uu,history:Wu,layers:Ku,"line-chart":Bu,target:Hu,"search-check":Fu,star:Vu,"message-circle":ju,"calendar-days":Ou,"calendar-range":Nu,"calendar-check":Iu,brain:Lu,lightbulb:Au,"octagon-x":zu,flag:Ru,package:Du,"clipboard-list":Pu,pin:Tu,"radio-tower":Mu,gauge:Eu,landmark:qu,"candlestick-chart":Cu,wallet:Su,"badge-check":xu,key:_u,factory:ku,trophy:wu,rocket:bu,flame:yu,"map-pin":hu,"scroll-text":gu,"book-open":fu,dna:pu,"bar-chart":mu,plus:vu,"star-off":uu,upload:du,gem:cu,"folder-open":ru,link:ou,save:lu,"trash-2":iu,pause:nu,"help-circle":su,"play-circle":au,pencil:tu,folder:eu,code:Zd,sprout:Xd,wheat:$d,snowflake:Qd,fuel:Jd,banknote:Yd,send:Gd,inbox:Ud,"wifi-off":Wd,"check-circle-2":Kd,"x-circle":Bd},t=()=>f[e.name]||f["circle-dot"];return(d,p)=>(me(),pa(Pd(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ca=(a,e)=>{const f=a.__vccOpts||a;for(const[t,d]of e)f[t]=d;return f},Hv={name:"qc-sidebar",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=ot(()=>a.menus&&a.menus.value||[]),f=ot(()=>a.currentPage&&a.currentPage.value||""),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),d=ot({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:x=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=x)}}),p=Lt({}),P={research:"量化投研",platform:"平台管理"},g=["research","platform"],c=x=>f.value===x.key,_=(x,o)=>f.value===x.key&&a.currentSubPage&&a.currentSubPage.value===o,l=x=>Array.isArray(x.subPages)&&x.subPages.length>1,S=(x,o)=>a.subPageNames&&a.subPageNames[o]||o;function i(x){!l(x)||d.value||(p.value[x.key]=!p.value[x.key])}function w(){e.value.forEach(x=>{p.value[x.key]===void 0&&(p.value[x.key]=c(x))})}async function h(x,o){const n=o||x.subPages&&x.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(x.key,n):(a.currentPage.value=x.key,a.currentSubPage&&(a.currentSubPage.value=n)),a.navigateTo&&a.navigateTo(x.key,n)}function C(){d.value=!d.value;try{localStorage.setItem("sidebar_collapsed",d.value?"1":"0")}catch{}}function R(x){if(x.ctrlKey&&x.key.toLowerCase()==="b"&&(x.preventDefault(),C()),!x.ctrlKey&&!x.metaKey&&!x.altKey&&(x.key==="ArrowDown"||x.key==="ArrowUp")){const o=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),n=o.indexOf(document.activeElement);if(n>=0){x.preventDefault();const v=o[(n+(x.key==="ArrowDown"?1:o.length-1))%o.length];v&&v.focus()}}}return Ba(()=>{w(),document.addEventListener("keydown",R)}),rs(()=>document.removeEventListener("keydown",R)),{state:a,menus:e,currentPage:f,navMode:t,sidebarCollapsed:d,expandedMenus:p,GROUP_LABELS:P,GROUPS:g,isActive:c,isChildActive:_,hasChildren:l,subLabel:S,toggleSubmenu:i,navigate:h,toggleCollapse:C}}},Bv={class:"qc-sidebar-logo"},Kv={key:0,class:"qc-logo-text"},Wv={class:"qc-sidebar-nav"},Uv={key:0,class:"qc-nav-group"},Gv={key:0,class:"qc-nav-group-label"},Yv=["href","aria-current","onClick"],Jv={key:0,class:"qc-sidebar-label"},Qv={key:1,class:"qc-nav-badge"},$v=["aria-expanded","aria-controls","onClick"],Xv=["id"],Zv=["href","aria-current","onClick"],em={class:"qc-sidebar-child-label"},tm={class:"qc-sidebar-footer"},am=["aria-expanded","aria-label","title"];function sm(a,e,f,t,d,p){const P=Zt("AppIcon"),g=Zt("el-tooltip");return me(),be("nav",{class:dt(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Ee("div",Bv,[e[1]||(e[1]=Dd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Be("",!0):(me(),be("span",Kv,Ke(t.state.t("login.title")),1))]),Ee("div",Wv,[(me(!0),be(vt,null,qt(t.GROUPS,c=>(me(),be(vt,{key:c},[t.menus.some(_=>_.group===c)?(me(),be("div",Uv,[t.sidebarCollapsed?Be("",!0):(me(),be("span",Gv,Ke(t.GROUP_LABELS[c]),1)),(me(!0),be(vt,null,qt(t.menus.filter(_=>_.group===c),_=>(me(),be(vt,{key:_.key},[Ee("div",{class:dt(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(_),"is-child-open":t.navMode==="tree"&&t.expandedMenus[_.key]}])},[ut(g,{content:_.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:ma(()=>[Ee("a",{class:dt(["qc-sidebar-link",{"is-active":t.isActive(_)}]),href:"#"+_.key,"aria-current":t.isActive(_)?"page":null,onClick:Vt(l=>t.navigate(_),["prevent"])},[ut(P,{name:_.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Be("",!0):(me(),be("span",Jv,Ke(_.name),1)),!t.sidebarCollapsed&&_.badge?(me(),be("span",Qv,Ke(_.badge),1)):Be("",!0)],10,Yv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(_)?(me(),be("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":t.expandedMenus[_.key]}]),"aria-expanded":!!t.expandedMenus[_.key],"aria-controls":"submenu-"+_.key,"aria-label":"展开子菜单",onClick:l=>t.toggleSubmenu(_)},[ut(P,{name:"chevron-down",size:14})],10,$v)):Be("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(_)&&t.expandedMenus[_.key]?(me(),be("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+_.key},[(me(!0),be(vt,null,qt(_.subPages,l=>(me(),be("a",{key:l,class:dt(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(_,l)}]),href:"#"+_.key+"-"+l,"aria-current":t.isChildActive(_,l)?"page":null,onClick:Vt(S=>t.navigate(_,l),["prevent"])},[Ee("span",em,Ke(t.subLabel(_,l)),1)],10,Zv))),128))],8,Xv)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),Ee("div",tm,[Ee("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...c)=>t.toggleCollapse&&t.toggleCollapse(...c))},[ut(P,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,am)])],2)}const nm=Ca(Hv,[["render",sm]]),im={name:"qc-header",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=Lt(!1),f=ot(()=>a.currentUser&&a.currentUser.value||null),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),d=ot(()=>{const de=a.currentPage&&a.currentPage.value,Y=(a.menus&&a.menus.value||[]).find(oe=>oe.key===de);return!!(Y&&Y.subPages&&Y.subPages.length)}),p=ot(()=>{const de=a.currentPage&&a.currentPage.value,Y=a.currentPageName&&a.currentPageName.value;if(Y)return Y;const oe=(a.menus&&a.menus.value||[]).find(De=>De.key===de);return oe&&oe.name||de||""}),P=ot(()=>{const de=a.currentSubPage&&a.currentSubPage.value;return de&&a.subPageNames&&a.subPageNames[de]||de||""}),g=Lt(typeof window<"u"?window.innerWidth<768:!1);function c(){g.value=window.innerWidth<768}Ba(()=>window.addEventListener("resize",c)),rs(()=>window.removeEventListener("resize",c));const _=Lt(!1),l=ot(()=>{const de=a.currentSubPage&&a.currentSubPage.value;return de&&a.subPageNames&&a.subPageNames[de]||de||""}),S=ot(()=>{const de=a.currentPage&&a.currentPage.value,Y=(a.menus&&a.menus.value||[]).find(oe=>oe.key===de);return(Y&&Y.subPages||[]).map(oe=>({key:oe,label:a.subPageNames&&a.subPageNames[oe]||oe}))});function i(){_.value=!_.value}function w(){_.value=!1}function h(de){_.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,de)}const C=ot(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),R=Lt(!1),x=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],o=ot(()=>{const de=x.find(Y=>Y.value===t.value);return de&&de.label||t.value});function n(){R.value=!R.value}function v(){R.value=!1}function N(de){R.value=!1,a.setNavMode&&a.setNavMode(de)}const A=ot({get:()=>a.searchQuery&&a.searchQuery.value||"",set:de=>{a.searchQuery&&(a.searchQuery.value=de)}}),F=Lt(!1),G=Lt([]),se=Lt(!1),I=Lt(!1);function T(){const de=localStorage.getItem("quant_token")||"";return de?{Authorization:"Bearer "+de,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function B(){se.value=!0,I.value=!1;try{const Y=await(await fetch("/api/alerts/history?limit=8",{headers:T()})).json();Y&&Y.success?G.value=Y.history||[]:G.value=[]}catch{I.value=!0,G.value=[]}finally{se.value=!1}}function K(){F.value=!F.value,F.value&&B()}function ie(){F.value=!1}function Q(){F.value=!1,a.activateTab&&a.activateTab("system","notification")}const Z=Lt(!1),L=a.themeHues||[45,220,0,140,270,320],O=ot(()=>a.themeHue&&a.themeHue.value||45),z=ot(()=>a.themeMode&&a.themeMode.value||"system");function k(de){return a.hueColor?a.hueColor(de):"hsl("+de+", 75%, 42%)"}function E(de){return a.hueName?a.hueName(de):String(de)}function ce(){Z.value=!Z.value}function W(){Z.value=!1}function b(de){a.changeThemeMode&&a.changeThemeMode(de)}function r(de){a.changeThemeHue&&a.changeThemeHue(de)}function q(){a.changeThemeMode&&a.changeThemeMode(C.value?"light":"dark")}function m(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function H(){e.value=!e.value}function ue(){e.value=!1}function X(de){return()=>{ue(),de&&de()}}function M(){ue(),a.handleLogout&&a.handleLogout()}const U=ot(()=>a.marketData&&a.marketData.value||{}),re=Lt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:U,bannerDismissed:re,dismissBanner:()=>{re.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:f,isDark:C,searchQuery:A,navMode:t,crumbRoot:p,crumbSub:P,hasToptabs:d,toggleThemeQuick:q,toggleSidebar:m,openUserMenu:H,closeUserMenu:ue,menuItem:X,handleLogout:M,openBellMenu:F,notifItems:G,notifLoading:se,notifError:I,toggleBell:K,closeBell:ie,goNotificationCenter:Q,openThemeMenu:Z,themeHues:L,themeHue:O,themeMode:z,hueColor:k,hueName:E,toggleThemeMenu:ce,closeThemeMenu:W,pickThemeMode:b,pickThemeHue:r,openNavModeMenu:R,NAV_MODES:x,navModeLabel:o,toggleNavModeMenu:n,closeNavModeMenu:v,pickNavMode:N,isMobile:g,openSubnavPicker:_,currentSubLabel:l,subnavOptions:S,toggleSubnavPicker:i,closeSubnavPicker:w,pickSubnav:h}}},lm={class:"qc-header-wrap"},om={key:0,class:"non-trading-banner",role:"status"},rm={class:"qc-header"},cm={class:"qc-header-left"},dm=["aria-label"],um={key:0,class:"qc-header-subnav"},vm=["aria-expanded"],mm={class:"qc-subnav-picker-label"},pm={key:0,class:"qc-subnav-picker-menu",role:"menu"},fm=["onClick"],gm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},hm={class:"qc-crumb qc-crumb-root"},ym={class:"qc-crumb qc-crumb-sub"},bm={key:1,class:"qc-crumb qc-crumb-root"},wm={class:"qc-header-center"},km={key:0,class:"qc-search-sublabel"},_m={class:"qc-header-right"},xm={class:"qc-hdr-pop"},Sm=["aria-expanded"],Cm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},qm={key:0,class:"qc-bell-state"},Em={key:1,class:"qc-bell-state"},Mm={key:2,class:"qc-bell-state"},Tm={key:3,class:"qc-bell-list"},Pm={class:"qc-bell-item-title"},Dm={class:"qc-bell-item-meta"},Rm={key:0},zm={class:"qc-bell-item-time"},Am={class:"qc-hdr-pop"},Lm=["aria-expanded"],Im={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Nm={class:"qc-theme-modes"},Om=["onClick"],jm={class:"qc-theme-swatches"},Vm=["title","aria-label","onClick"],Fm={key:0,class:"qc-theme-swatch-check"},Hm={class:"qc-theme-custom-label"},Bm={key:0,class:"qc-navmode-switch"},Km=["aria-label","title","aria-expanded"],Wm={key:0,class:"qc-navmode-menu",role:"menu"},Um=["onClick","onKeydown"],Gm={class:"qc-navmode-item-main"},Ym={class:"qc-user-menu"},Jm=["aria-label","aria-expanded"],Qm={key:0,class:"qc-user-dropdown",role:"menu"},$m={class:"qc-user-dropdown-header"},Xm={class:"qc-user-dropdown-name"},Zm={key:0,class:"qc-user-dropdown-chip"};function ep(a,e,f,t,d,p){var S,i,w,h,C,R,x;const P=Zt("AppIcon"),g=Zt("qc-top-tabs"),c=Zt("el-autocomplete"),_=Zt("el-slider"),l=Rd("click-outside");return me(),be("div",lm,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(me(),be("div",om,[ut(P,{name:"alert-triangle",size:14}),e[15]||(e[15]=Ee("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),Ee("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...o)=>t.dismissBanner&&t.dismissBanner(...o)),"aria-label":"关闭提示"},"×")])):Be("",!0),Ee("header",rm,[Ee("div",cm,[Ee("button",{class:"qc-icon-btn","aria-label":(S=t.state.sidebarCollapsed)!=null&&S.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...o)=>t.toggleSidebar&&t.toggleSidebar(...o))},[ut(P,{name:"menu",size:20})],8,dm),t.isMobile?La((me(),be("div",um,[Ee("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...o)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...o))},[Ee("span",mm,Ke(t.currentSubLabel||"二级"),1),ut(P,{name:"chevron-down",size:14})],8,vm),t.openSubnavPicker?(me(),be("div",pm,[(me(!0),be(vt,null,qt(t.subnavOptions,o=>(me(),be("div",{key:o.key,class:dt(["qc-subnav-picker-item",{"is-active":o.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:n=>t.pickSubnav(o.key)},Ke(o.label),11,fm))),128))])):Be("",!0)])),[[l,t.closeSubnavPicker]]):Be("",!0),t.navMode==="tree"&&!t.isMobile?(me(),be("div",gm,[Ee("span",hm,Ke(t.crumbRoot),1),t.crumbSub?(me(),be(vt,{key:0},[e[16]||(e[16]=Ee("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Ee("span",ym,Ke(t.crumbSub),1)],64)):Be("",!0)])):Be("",!0),t.navMode==="toptab"&&!t.isMobile?(me(),be(vt,{key:2},[t.hasToptabs?(me(),pa(g,{key:0})):(me(),be("span",bm,Ke(t.crumbRoot),1))],64)):Be("",!0)]),Ee("div",wm,[ut(c,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=o=>t.searchQuery=o),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:ma(()=>[ut(P,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ma(()=>[...e[17]||(e[17]=[Ee("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ma(o=>{var n,v,N,A,F;return[Ee("span",null,Ke((n=o==null?void 0:o.item)==null?void 0:n.icon)+" "+Ke(((v=o==null?void 0:o.item)==null?void 0:v.label)||((N=o==null?void 0:o.item)==null?void 0:N.name)),1),(A=o==null?void 0:o.item)!=null&&A.subLabel?(me(),be("span",km,Ke((F=o==null?void 0:o.item)==null?void 0:F.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Ee("div",_m,[La((me(),be("div",xm,[Ee("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...o)=>t.toggleBell&&t.toggleBell(...o))},[ut(P,{name:"bell",size:20})],8,Sm),t.openBellMenu?(me(),be("div",Cm,[e[18]||(e[18]=Ee("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(me(),be("div",qm,"加载中...")):t.notifError?(me(),be("div",Em,"加载失败")):t.notifItems.length?(me(),be("div",Tm,[(me(!0),be(vt,null,qt(t.notifItems,(o,n)=>(me(),be("div",{key:o.id||n,class:dt(["qc-bell-item",{"is-fail":o.ok===0}])},[Ee("div",Pm,Ke(o.title||o.event_type||"事件"),1),Ee("div",Dm,[xa(Ke(o.channel||""),1),o.recipient?(me(),be("span",Rm," · "+Ke(o.recipient),1)):Be("",!0),Ee("span",zm,Ke(o.created_at||""),1)])],2))),128))])):(me(),be("div",Mm,"暂无通知")),Ee("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...o)=>t.goNotificationCenter&&t.goNotificationCenter(...o))},"前往通知中心 →")])):Be("",!0)])),[[l,t.closeBell]]),La((me(),be("div",Am,[Ee("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...o)=>t.toggleThemeMenu&&t.toggleThemeMenu(...o))},[ut(P,{name:"palette",size:20})],8,Lm),t.openThemeMenu?(me(),be("div",Im,[e[19]||(e[19]=Ee("div",{class:"qc-theme-section-label"},"外观模式",-1)),Ee("div",Nm,[(me(),be(vt,null,qt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],o=>Ee("button",{key:o.k,class:dt(["qc-theme-mode",{"is-active":t.themeMode===o.k}]),onClick:n=>t.pickThemeMode(o.k)},Ke(o.n),11,Om)),64))]),e[20]||(e[20]=Ee("div",{class:"qc-theme-section-label"},"主题色",-1)),Ee("div",jm,[(me(!0),be(vt,null,qt(t.themeHues,o=>(me(),be("button",{key:o,class:dt(["qc-theme-swatch",{"is-active":t.themeHue===o}]),style:zd({background:t.hueColor(o)}),title:t.hueName(o),"aria-label":t.hueName(o),onClick:n=>t.pickThemeHue(o)},[t.themeHue===o?(me(),be("span",Fm,"✓")):Be("",!0)],14,Vm))),128))]),ut(_,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Ee("div",Hm,"自定义 "+Ke(t.themeHue)+"°",1)])):Be("",!0)])),[[l,t.closeThemeMenu]]),t.isMobile?Be("",!0):La((me(),be("div",Bm,[Ee("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...o)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...o))},[ut(P,{name:"layers",size:20})],8,Km),t.openNavModeMenu?(me(),be("div",Wm,[(me(!0),be(vt,null,qt(t.NAV_MODES,o=>(me(),be("div",{key:o.value,class:dt(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===o.value}]),role:"menuitem",tabindex:"0",onClick:n=>t.pickNavMode(o.value),onKeydown:[va(Vt(n=>t.pickNavMode(o.value),["prevent"]),["enter"]),va(Vt(n=>t.pickNavMode(o.value),["prevent"]),["space"])]},[Ee("div",Gm,[Ee("span",null,Ke(o.label),1),t.navMode===o.value?(me(),pa(P,{key:0,name:"check",size:14})):Be("",!0)])],42,Um))),128))])):Be("",!0)])),[[l,t.closeNavModeMenu]]),La((me(),be("div",Ym,[Ee("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((i=t.currentUser)==null?void 0:i.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...o)=>t.openUserMenu&&t.openUserMenu(...o))},Ke((((w=t.currentUser)==null?void 0:w.username)||"A").charAt(0).toUpperCase()),9,Jm),t.showUserMenu?(me(),be("div",Qm,[Ee("div",$m,[Ee("span",Xm,Ke((h=t.currentUser)==null?void 0:h.username),1),((C=t.currentUser)==null?void 0:C.role)==="guest"?(me(),be("span",Zm,"访客")):Be("",!0)]),((R=t.currentUser)==null?void 0:R.role)==="admin"?(me(),be("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=o=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=va(Vt(o=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[ut(P,{name:"settings",size:16}),e[21]||(e[21]=xa(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((x=t.currentUser)==null?void 0:x.role)!=="guest"?(me(),be("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=o=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=va(Vt(o=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[ut(P,{name:"lock",size:16}),e[22]||(e[22]=xa(" 修改密码 ",-1))],32)):Be("",!0),e[24]||(e[24]=Ee("div",{class:"qc-user-dropdown-divider"},null,-1)),Ee("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...o)=>t.handleLogout&&t.handleLogout(...o)),onKeydown:e[14]||(e[14]=va(Vt((...o)=>t.handleLogout&&t.handleLogout(...o),["prevent"]),["enter"]))},[ut(P,{name:"log-out",size:16}),e[23]||(e[23]=xa(" 退出登录 ",-1))],32)])):Be("",!0)])),[[l,t.closeUserMenu]])])])])}const tp=Ca(im,[["render",ep]]),ap=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],sp={name:"qc-subnav",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=ot(()=>a.currentPage&&a.currentPage.value||""),f=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),d=Lt({}),p=ot(()=>a.menus&&a.menus.value||[]),P=ot(()=>p.value.find(x=>x.key===e.value)||null),g=ot(()=>P.value&&P.value.subPages||[]),c=ot(()=>a.currentPageName&&a.currentPageName.value||e.value),_=x=>a.subPageNames&&a.subPageNames[x]||x,l=x=>f.value===x;function S(x){a.openTab?a.openTab(e.value,x):a.currentSubPage&&(a.currentSubPage.value=x);try{localStorage.setItem("quant_last_subpage",x)}catch{}}function i(x){a.openTab?a.openTab(e.value,x.key):a.currentSubPage&&(a.currentSubPage.value=x.key);try{localStorage.setItem("quant_last_subpage",x.key)}catch{}}function w(x){d.value[x]=!d.value[x]}const h={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:e,currentSubPage:f,navMode:t,subPages:g,currentMenu:P,collapsedGroups:d,pageTitle:c,subLabel:_,isSubActive:l,goSub:S,goSystemItem:i,toggleGroup:w,SYSTEM_GROUPS:ap,subIcon:(x,o)=>h[x]&&h[x][o]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},np={key:0,class:"qc-subnav-column","aria-label":"二级导航"},ip={class:"qc-subnav-column-header"},lp={class:"qc-subnav-current-label"},op={class:"qc-subnav-column-body"},rp=["onClick"],cp=["href","onClick"],dp={class:"qc-subnav-group-label"},up=["href","onClick"],vp=["href","onClick"];function mp(a,e,f,t,d,p){const P=Zt("AppIcon");return t.navMode==="subnav"?(me(),be("aside",np,[Ee("div",ip,[Ee("span",lp,Ke(t.pageTitle),1)]),Ee("div",op,[t.currentPage==="system"?(me(!0),be(vt,{key:0},qt(t.SYSTEM_GROUPS,g=>(me(),be("div",{key:g.label,class:"qc-subnav-group"},[Ee("div",{class:"qc-subnav-group-label",onClick:c=>t.toggleGroup(g.label)},[Ee("span",null,Ke(g.label),1),ut(P,{name:"chevron-down",size:12,class:dt({"is-open":!t.collapsedGroups[g.label]})},null,8,["class"])],8,rp),t.collapsedGroups[g.label]?Be("",!0):(me(!0),be(vt,{key:0},qt(g.items,c=>(me(),be("a",{key:c.key,class:dt(["qc-subnav-item",{"is-active":t.isSubActive(c.key)}]),href:"#"+c.key,onClick:Vt(_=>t.goSystemItem(c),["prevent"])},[ut(P,{name:c.icon,size:16},null,8,["name"]),Ee("span",null,Ke(c.label),1)],10,cp))),128))]))),128)):t.currentPage==="shortterm"?(me(!0),be(vt,{key:1},qt(t.SHORTTERM_GROUPS,g=>(me(),be("div",{key:g.label,class:"qc-subnav-group"},[Ee("div",dp,[Ee("span",null,Ke(g.label),1)]),(me(!0),be(vt,null,qt(g.items,c=>(me(),be("a",{key:c,class:dt(["qc-subnav-item",{"is-active":t.isSubActive(c)}]),href:"#"+t.currentPage+"/"+c,onClick:Vt(_=>t.goSub(c),["prevent"])},[ut(P,{name:t.subIcon(t.currentPage,c),size:16},null,8,["name"]),Ee("span",null,Ke(t.subLabel(c)),1)],10,up))),128))]))),128)):(me(!0),be(vt,{key:2},qt(t.subPages,g=>(me(),be("a",{key:g,class:dt(["qc-subnav-item",{"is-active":t.isSubActive(g)}]),href:"#"+t.currentPage+"/"+g,onClick:Vt(c=>t.goSub(g),["prevent"])},[ut(P,{name:t.subIcon(t.currentPage,g),size:16},null,8,["name"]),Ee("span",null,Ke(t.subLabel(g)),1)],10,vp))),128))])])):Be("",!0)}const pp=Ca(sp,[["render",mp]]),fp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],gp={name:"qc-mobile-nav",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=Lt(!1),f=Lt(null),t=Lt({}),d=ot(()=>a.menus&&a.menus.value||[]),p=ot(()=>a.currentPage&&a.currentPage.value||""),P={research:"量化投研",platform:"平台管理"},g=["research","platform"];function c(o){return Array.isArray(o.subPages)&&o.subPages.length>0}function _(o){c(o)&&(t.value[o.key]=!t.value[o.key])}function l(o,n){return p.value===o.key&&a.currentSubPage&&a.currentSubPage.value===n}function S(o){return a.subPageNames&&a.subPageNames[o]||o}async function i(o){const n=d.value.find(N=>N.key===o.key),v=n&&n.subPages&&n.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(o.key,v):(a.currentPage.value=o.key,a.currentSubPage&&(a.currentSubPage.value=v)),a.navigateTo&&a.navigateTo(o.key,v)}function w(o,n){e.value=!1;const v=n||o.subPages&&o.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(o.key,v):(a.currentPage.value=o.key,a.currentSubPage&&(a.currentSubPage.value=v)),a.navigateTo&&a.navigateTo(o.key,v)}function h(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function C(){e.value=!1;const o=document.querySelector(".qc-header .qc-icon-btn");o&&o.focus()}function R(o){o.detail&&o.detail.open&&h()}function x(o){e.value&&o.key==="Escape"&&C()}return Ba(()=>{window.addEventListener("qc:drawer",R),document.addEventListener("keydown",x)}),rs(()=>{window.removeEventListener("qc:drawer",R),document.removeEventListener("keydown",x)}),{state:a,TABS:fp,menus:d,currentPage:p,drawerOpen:e,drawerFocusRef:f,drawerExpanded:t,GROUP_LABELS:P,GROUPS:g,hasSub:c,toggleDrawerMenu:_,isDrawerSubActive:l,subLabel:S,goTab:i,goMenu:w,openDrawer:h,closeDrawer:C}}},hp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},yp=["aria-current","onClick"],bp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},wp={class:"qc-drawer-header"},kp={class:"qc-drawer-brand"},_p={class:"qc-drawer-body"},xp={key:0},Sp={class:"qc-nav-group-label"},Cp=["href","aria-current","onClick"],qp={class:"qc-sidebar-label"},Ep=["aria-expanded","onClick"],Mp={key:0,class:"qc-drawer-children"},Tp=["href","onClick"],Pp={class:"qc-drawer-footer"},Dp=["title"];function Rp(a,e,f,t,d,p){var g,c;const P=Zt("AppIcon");return me(),be(vt,null,[Ee("nav",hp,[(me(!0),be(vt,null,qt(t.TABS,_=>(me(),be("button",{key:_.key,class:dt(["qc-mobile-tab",{"is-active":t.currentPage===_.key}]),"aria-current":t.currentPage===_.key?"page":null,onClick:l=>t.goTab(_)},[ut(P,{name:_.icon,size:22},null,8,["name"]),Ee("span",null,Ke(_.label),1)],10,yp))),128))]),(me(),pa(Ad,{to:"body"},[t.drawerOpen?(me(),be("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(..._)=>t.closeDrawer&&t.closeDrawer(..._))})):Be("",!0),t.drawerOpen?(me(),be("div",bp,[Ee("div",wp,[Ee("div",kp,[e[4]||(e[4]=Ee("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Ee("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Ee("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Ee("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Ee("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Ee("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Ee("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Ee("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Ee("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Ee("span",null,Ke(t.state.t("login.title")),1)]),Ee("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(..._)=>t.closeDrawer&&t.closeDrawer(..._))},[ut(P,{name:"x",size:18})])]),Ee("div",_p,[(me(!0),be(vt,null,qt(t.GROUPS,_=>(me(),be(vt,{key:_},[t.menus.some(l=>l.group===_)?(me(),be("div",xp,[Ee("div",Sp,Ke(t.GROUP_LABELS[_]),1),(me(!0),be(vt,null,qt(t.menus.filter(l=>l.group===_),l=>(me(),be("div",{key:l.key,class:"qc-drawer-menu"},[Ee("div",{class:dt(["qc-drawer-menu-row",{"is-active":t.currentPage===l.key}])},[Ee("a",{class:dt(["qc-sidebar-item",{"is-active":t.currentPage===l.key}]),href:"#"+l.key,"aria-current":t.currentPage===l.key?"page":null,onClick:Vt(S=>t.hasSub(l)?t.toggleDrawerMenu(l):t.goMenu(l),["prevent"])},[ut(P,{name:l.iconName||"",size:18},null,8,["name"]),Ee("span",qp,Ke(l.name),1)],10,Cp),t.hasSub(l)?(me(),be("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[l.key]}]),"aria-expanded":!!t.drawerExpanded[l.key],"aria-label":"展开子菜单",onClick:S=>t.toggleDrawerMenu(l)},[ut(P,{name:"chevron-down",size:14})],10,Ep)):Be("",!0)],2),t.drawerExpanded[l.key]?(me(),be("div",Mp,[(me(!0),be(vt,null,qt(l.subPages,S=>(me(),be("a",{key:S,class:dt(["qc-subnav-item",{"is-active":t.isDrawerSubActive(l,S)}]),href:"#"+l.key+"/"+S,onClick:Vt(i=>t.goMenu(l,S),["prevent"])},[Ee("span",null,Ke(t.subLabel(S)),1)],10,Tp))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),Ee("div",Pp,[Ee("button",{class:"qc-icon-btn",title:((g=t.state.currentTheme)==null?void 0:g.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=_=>{var l;return t.state.changeThemeMode&&t.state.changeThemeMode(((l=t.state.currentTheme)==null?void 0:l.value)==="dark"?"light":"dark")})},[ut(P,{name:((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Dp),Ee("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=_=>t.state.handleLogout&&t.state.handleLogout())},[ut(P,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const zp=Ca(gp,[["render",Rp]]),Ap={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:f}){const t=Ta("qcState");function d(l){e("select",l)}function p(l){const S=l.strategy_names||l.strategies||[],i=S.slice(0,3),w=S.length>3?S.length-3:0,h=i.map(C=>({text:C,more:!1}));return w&&h.push({text:"+"+w,more:!0}),h}function P(l){const S=Number(l);return isFinite(S)?S.toFixed(2):"—"}function g(l){const S=Number(l);return isFinite(S)?(S>0?"+":"")+S.toFixed(2)+"%":"—"}function c(l){const S=Number(l.consensus_level);return isFinite(S)?Math.round(S*100):0}function _(l){const S=Number(l&&l.consensus_level);return isFinite(S)&&S>0}return{state:t,slots:f,select:d,displayTags:p,fmtPrice:P,fmtChange:g,pctOf:c,hasConsensus:_}}},Lp={class:"qc-stock-list"},Ip=["data-copy-code","aria-label","onClick","onKeydown"],Np={key:0,class:"qc-stock-rank"},Op={class:"qc-stock-info"},jp={class:"qc-stock-code"},Vp={class:"qc-stock-code-num"},Fp={key:0,class:"qc-stock-status is-new"},Hp={key:1,class:"qc-stock-status is-out"},Bp={class:"qc-stock-name"},Kp={key:0,class:"qc-stock-consensus"},Wp={key:1,class:"qc-stock-tags"},Up={key:2,class:"qc-stock-badge"},Gp={key:3,class:"qc-stock-data"},Yp={class:"qc-stock-price"},Jp={key:4,class:"qc-stock-extra"},Qp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},$p=["data-copy-code","aria-label","onClick","onKeydown"],Xp={key:0,class:"qc-stock-rank"},Zp={class:"qc-stock-info"},ef={class:"qc-stock-code"},tf={class:"qc-stock-code-num"},af={key:0,class:"qc-stock-status is-new"},sf={key:1,class:"qc-stock-status is-out"},nf={class:"qc-stock-name"},lf={key:0,class:"qc-stock-consensus"},of={key:1,class:"qc-stock-tags"},rf={key:2,class:"qc-stock-badge"},cf={key:3,class:"qc-stock-data"},df={class:"qc-stock-price"},uf={key:4,class:"qc-stock-extra"},vf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function mf(a,e,f,t,d,p){const P=Zt("qc-state-panel"),g=Zt("qc-virtual-list");return me(),be("div",Lp,[f.loading?(me(),pa(P,{key:0,type:"loading"})):f.items.length?(me(),be(vt,{key:2},[f.virtual?(me(),pa(g,{key:0,items:f.items,"row-height":f.rowHeight},{default:ma(({item:c,index:_})=>[Ee("div",{class:dt(["qc-stock-row",{"is-active":f.activeCode===c.code}]),"data-copy-code":f.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:l=>t.select(c),onKeydown:[va(Vt(l=>t.select(c),["prevent"]),["enter"]),va(Vt(l=>t.select(c),["prevent"]),["space"])]},[f.showRank?(me(),be("div",Np,Ke(_+1),1)):Be("",!0),Ee("div",Op,[Ee("div",jp,[Ee("span",Vp,Ke(c.code),1),c.status==="new"?(me(),be("span",Fp,Ke(f.statusText.new),1)):c.status==="out"?(me(),be("span",Hp,Ke(f.statusText.out),1)):Be("",!0)]),Ee("div",Bp,[xa(Ke(c.name)+" ",1),la(a.$slots,"name-suffix",{item:c,index:_})]),f.showConsensus&&t.hasConsensus(c)?(me(),be("span",Kp,Ke(t.pctOf(c))+"% 共识",1)):Be("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(me(),be("div",Wp,[(me(!0),be(vt,null,qt(t.displayTags(c),l=>(me(),be("span",{key:l.text,class:dt(["qc-stock-tag",{"is-more":l.more}])},Ke(l.text),3))),128))])):Be("",!0),f.showConsensus?(me(),be("span",Up,Ke(c.strategy_count||0)+" 策略",1)):Be("",!0),f.showPrice&&c.price!=null?(me(),be("div",Gp,[Ee("span",Yp,Ke(t.fmtPrice(c.price)),1),Ee("span",{class:dt(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Ke(t.fmtChange(c.change_pct)),3)])):Be("",!0),t.slots.extra?(me(),be("div",Jp,[la(a.$slots,"extra",{item:c,index:_})])):Be("",!0),t.slots.actions?(me(),be("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Vt(()=>{},["stop"]))},[la(a.$slots,"actions",{item:c,index:_})])):Be("",!0),t.slots.footer?(me(),be("div",Qp,[la(a.$slots,"footer",{item:c,index:_})])):Be("",!0)],42,Ip)]),_:3},8,["items","row-height"])):(me(!0),be(vt,{key:1},qt(f.items,(c,_)=>(me(),be("div",{key:c.code,class:dt(["qc-stock-row",{"is-active":f.activeCode===c.code}]),"data-copy-code":f.copyCode?c.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(c.name||"")+" "+(c.code||""),onClick:l=>t.select(c),onKeydown:[va(Vt(l=>t.select(c),["prevent"]),["enter"]),va(Vt(l=>t.select(c),["prevent"]),["space"])]},[f.showRank?(me(),be("div",Xp,Ke(_+1),1)):Be("",!0),Ee("div",Zp,[Ee("div",ef,[Ee("span",tf,Ke(c.code),1),c.status==="new"?(me(),be("span",af,Ke(f.statusText.new),1)):c.status==="out"?(me(),be("span",sf,Ke(f.statusText.out),1)):Be("",!0)]),Ee("div",nf,[xa(Ke(c.name)+" ",1),la(a.$slots,"name-suffix",{item:c,index:_})]),f.showConsensus&&t.hasConsensus(c)?(me(),be("span",lf,Ke(t.pctOf(c))+"% 共识",1)):Be("",!0)]),(c.strategy_names||c.strategies)&&(c.strategy_names||c.strategies).length?(me(),be("div",of,[(me(!0),be(vt,null,qt(t.displayTags(c),l=>(me(),be("span",{key:l.text,class:dt(["qc-stock-tag",{"is-more":l.more}])},Ke(l.text),3))),128))])):Be("",!0),f.showConsensus?(me(),be("span",rf,Ke(c.strategy_count||0)+" 策略",1)):Be("",!0),f.showPrice&&c.price!=null?(me(),be("div",cf,[Ee("span",df,Ke(t.fmtPrice(c.price)),1),Ee("span",{class:dt(["qc-stock-change",c.change_pct>0?"is-up":c.change_pct<0?"is-down":""])},Ke(t.fmtChange(c.change_pct)),3)])):Be("",!0),t.slots.extra?(me(),be("div",uf,[la(a.$slots,"extra",{item:c,index:_})])):Be("",!0),t.slots.actions?(me(),be("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Vt(()=>{},["stop"]))},[la(a.$slots,"actions",{item:c,index:_})])):Be("",!0),t.slots.footer?(me(),be("div",vf,[la(a.$slots,"footer",{item:c,index:_})])):Be("",!0)],42,$p))),128))],64)):(me(),pa(P,{key:1,type:"empty",title:f.emptyText},null,8,["title"]))])}const pf=Ca(Ap,[["render",mf]]),ff={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},gf={key:0,class:"split-divider","data-split-resize":""};function hf(a,e,f,t,d,p){return me(),be("div",{class:dt(["detail-split-wrap",[f.rootClass,{"detail-split":f.enabled}]]),"data-split-root":""},[Ee("div",{class:dt(["detail-split-list",[f.listClass,{"w-100":!f.enabled}]])},[la(a.$slots,"list")],2),f.enabled?(me(),be("div",gf)):Be("",!0),f.enabled?(me(),be("div",{key:1,class:dt(["detail-split-pane",f.paneClass])},[la(a.$slots,"pane")],2)):Be("",!0)],2)}const yf=Ca(ff,[["render",hf]]),cn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},bf=200,wf={name:"qc-top-tabs",components:{AppIcon:Sa},setup(){const a=Ta("qcState");if(!a)return{};const e=ot(()=>a.currentPage&&a.currentPage.value||""),f=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ot(()=>a.menus&&a.menus.value||[]),d=ot(()=>{const n=t.value.find(v=>v.key===e.value);return n&&n.subPages||[]}),p=ot(()=>d.value.map(n=>({key:n,label:a.subPageNames&&a.subPageNames[n]||n,icon:cn[e.value]&&cn[e.value][n]||"circle-dot"}))),P=Lt(null),g=Lt(!1),c=Lt(!1),_=Lt(!1);let l=null,S=null;function i(){const n=P.value;n&&(c.value=n.scrollLeft>2,_.value=n.scrollLeft<n.scrollWidth-n.clientWidth-2)}function w(){const n=P.value;n&&(g.value=n.scrollWidth>n.clientWidth+2,i())}function h(n){const v=P.value;v&&v.scrollBy({left:n*bf,behavior:"smooth"})}function C(n){a.openTab?a.openTab(e.value,n):a.currentSubPage&&(a.currentSubPage.value=n)}function R(n){C(n),Id(()=>{const v=P.value;if(!v)return;const N=v.querySelector('[data-tab-key="'+n+'"]');N&&N.scrollIntoView({block:"nearest",inline:"nearest"})})}const x=ot(()=>{if(!g.value)return[];const n=P.value;if(!n)return[];const v=n.getBoundingClientRect(),N=new Set;return n.querySelectorAll(".qc-top-tab").forEach(A=>{const F=A.getBoundingClientRect();F.left>=v.left-2&&F.left<v.right-24&&N.add(A.getAttribute("data-tab-key"))}),p.value.filter(A=>!N.has(A.key))});function o(n,v){n.key==="ArrowLeft"?(n.preventDefault(),h(-1)):n.key==="ArrowRight"?(n.preventDefault(),h(1)):(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),C(v.key))}return Ba(()=>{w(),l=new ResizeObserver(()=>{clearTimeout(S),S=setTimeout(w,100)}),P.value&&l.observe(P.value),window.addEventListener("resize",w)}),Ld(()=>{l&&l.disconnect(),window.removeEventListener("resize",w),clearTimeout(S)}),{state:a,tabs:p,currentSubPage:f,go:C,scrollRef:P,hasOverflow:g,canScrollLeft:c,canScrollRight:_,scrollByStep:h,scrollToTab:R,hiddenTabs:x,onTabKeydown:o,updateScrollState:i}}},kf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},_f=["disabled"],xf=["data-tab-key","aria-selected","title","onClick","onKeydown"],Sf={class:"qc-top-tab-label"},Cf=["disabled"];function qf(a,e,f,t,d,p){const P=Zt("AppIcon"),g=Zt("el-dropdown-item"),c=Zt("el-dropdown-menu"),_=Zt("el-dropdown");return t.tabs.length?(me(),be("div",kf,[t.hasOverflow?(me(),be("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=l=>t.scrollByStep(-1))},"‹",8,_f)):Be("",!0),Ee("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...l)=>t.updateScrollState&&t.updateScrollState(...l))},[(me(!0),be(vt,null,qt(t.tabs,l=>(me(),be("div",{key:l.key,"data-tab-key":l.key,class:dt(["qc-top-tab",{"is-active":t.currentSubPage===l.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===l.key?"true":"false",title:l.label,onClick:S=>t.go(l.key),onKeydown:S=>t.onTabKeydown(S,l)},[ut(P,{name:l.icon,size:14},null,8,["name"]),Ee("span",Sf,Ke(l.label),1)],42,xf))),128))],544),t.hasOverflow?(me(),be("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=l=>t.scrollByStep(1))},"›",8,Cf)):Be("",!0),t.hasOverflow&&t.hiddenTabs.length?(me(),pa(_,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:ma(()=>[ut(c,null,{default:ma(()=>[(me(!0),be(vt,null,qt(t.hiddenTabs,l=>(me(),pa(g,{key:l.key,command:l.key,class:dt({"is-active":t.currentSubPage===l.key})},{default:ma(()=>[ut(P,{name:l.icon,size:14},null,8,["name"]),xa(" "+Ke(l.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ma(()=>[e[3]||(e[3]=Ee("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const Ef=Ca(wf,[["render",qf]]);(function(){const{ref:a,computed:e,inject:f}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=f("qcState");if(!t)return{};const d=a(!1),p=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),P=()=>{p.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},g=e(()=>t.marketData&&t.marketData.value||{}),c=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:g,bannerDismissed:p,dismissBanner:P,goMerrill:c,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:d,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(_,l){const S="sub."+_.key+"."+l,i=t.t(S);if(i!==S)return i;const w="sub."+l,h=t.t(w);return h!==w&&h?h:t.subPageNames[l]||l}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:f,computed:t}=Vue,d=f(0),p=f(0),P=f(!1),g=t(()=>{const F={day:"date",week:"week",month:"month",year:"year"},G=e.currentView&&e.currentView.value||"day";return F[G]||"date"}),c={day:"日",week:"周",month:"月",year:"年"};function _(F){return e.t&&e.t("view."+F)||c[F]||F}function l(F){e.switchView?e.switchView(F):e.currentView&&(e.currentView.value=F)}let S=null;function i(F){const G=F.touches&&F.touches[0];G&&(d.value=G.clientX,p.value=G.clientY)}async function w(){if(!P.value){P.value=!0;try{await e.refreshCalendarData()}catch{}S&&clearTimeout(S),S=setTimeout(()=>{P.value=!1},500)}}function h(F){if(!(window.innerWidth<=768))return;const G=F.changedTouches&&F.changedTouches[0];if(!G)return;const se=window.__quantModules&&window.__quantModules.gestures||{};if((typeof se.judgePullToRefresh=="function"?se.judgePullToRefresh(p.value,G.clientY):G.clientY-p.value>=60)&&(window.scrollY||0)<=0){F.stopPropagation(),w();return}if(e.currentSubPage.value==="pool")return;const T=G.clientX-d.value,B=G.clientY-p.value;Math.abs(T)>50&&Math.abs(T)>Math.abs(B)*1.2&&(e.navigateDate(T<0?1:-1),F.stopPropagation())}const C=f(!1),R=f(!1),x=f(""),o=f(null),n=f([]);function v(F){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[F]||F}async function N(){if(e.selectedDate.value){C.value=!0,R.value=!0,x.value="",o.value=null,n.value=[];try{const F=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),G=await F.json();if(!F.ok)throw new Error(G.detail||"HTTP "+F.status);o.value=G;const se=G&&G.comparison||{},I=[];for(const T of Object.keys(se)){if(T==="all_intersection")continue;const B=se[T]||{},K=T.split("_vs_");I.push({label:v(K[0])+" ↔ "+v(K[1]),interCount:B.intersection_count||0,inter:(B.intersection||[]).join(", "),onlyS1Count:B.only_s1_count||0,onlyS1:(B.only_s1||[]).join(", "),onlyS2Count:B.only_s2_count||0,onlyS2:(B.only_s2||[]).join(", ")})}n.value=I}catch(F){x.value=String(F&&F.message?F.message:F)}finally{R.value=!1}}}let A="";return Vue.watch(()=>{const F=e.stockPool,G=F&&F.value||[];return{n:G.length,first:G[0]&&G[0].code,split:!!e.detailSplitEnabled.value}},(F,G)=>{if(!F.split||!F.first||F.n===0)return;const se=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,I=(e.stockPool.value||[]).some(T=>T.code===se);if(!se||!I){if(A===F.first&&se&&I===!1&&F.n>1)return;A=F.first,e.showStockDetail&&e.showStockDetail(F.first)}},{immediate:!0}),{...e,calType:g,pullRefreshing:P,onCalTouchStart:i,onCalTouchEnd:h,viewLabel:_,switchViewLocal:l,compareVisible:C,compareLoading:R,compareError:x,compareData:o,comparePairs:n,openStrategyCompare:N}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const e=a("qcState"),f=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let d=0;const p=t(()=>{var u;return((u=e.merrillData)==null?void 0:u.value)||{}}),P=t(()=>{var u;return((u=e.marketData)==null?void 0:u.value)||{}}),g=t(()=>{var u;return((u=e.dashboardData)==null?void 0:u.value)||{}}),c=t(()=>{var u;return((u=e.healthMetrics)==null?void 0:u.value)||[]}),_=t(()=>{var u;return((u=e.filteredConsensusRank)==null?void 0:u.value)||[]}),l=t(()=>{const u={};for(const $ of _.value)$.code&&$.name&&(u[$.code]=$.name);return u}),S={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function i(u){return S[u]||u}const w=t(()=>P.value.date||g.value.latest_date||"-"),h=t(()=>{const u=P.value;return!u||Object.keys(u).length===0?"数据加载中...":u.is_trading_day&&u.in_trading_hours?"● 交易中":u.is_trading_day?"已收盘":"○ 非交易日"}),C=t(()=>{const u=p.value.next_stage_prediction;return u&&u.next_stage_name&&u.transition_probability>.2?`→${u.next_stage_name} ${(u.transition_probability*100).toFixed(2)}%`:""}),R=t(()=>{const u=[],$=g.value.pool_changes||{},le=$.new_count||0;if(le>0){const Qe=$.new_stock_names||{},Oe=($.new_stocks||[]).map(rt=>Qe[rt]||l.value[rt]||rt).slice(0,4).join("、");u.push({icon:"sparkles",level:"new",text:`今日新入池 ${le} 只${Oe?" · "+Oe:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Qe of c.value.filter(Oe=>Oe.degraded))u.push({icon:"alert-triangle",level:"warn",text:`数据源 ${i(Qe.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const Te=p.value.timing;Te&&Te.progress_percent&&Te.progress_percent>100?u.push({icon:"clock",level:"warn",text:`美林「${p.value.name}」已超期 ${Te.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):Te&&Te.maturity&&p.value.name&&u.push({icon:"clock",level:"info",text:`美林「${p.value.name}」阶段成熟度 ${Te.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ve=P.value;return Ve&&Ve.is_trading_day===!1&&Ve.date&&u.push({icon:"calendar",level:"info",text:`${Ve.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),u}),x=t(()=>{const u=[],$=p.value.name||"",le=p.value.timing||{},Te=["复苏","成长","过热"],Ve=["滞胀","衰退"];Te.some(ct=>$.includes(ct))&&u.push({kind:"opportunity",source:"美林",text:$+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ve.some(ct=>$.includes(ct))&&u.push({kind:"risk",source:"美林",text:$+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),le.progress_percent&&le.progress_percent>100&&u.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Qe=g.value.pool_changes||{},Oe=(Qe.new_count||0)-(Qe.out_count||0);Oe>=3?u.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Oe,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):Oe<=-3&&u.push({kind:"risk",source:"池变动",text:"净出池 "+Oe,action:()=>{e.currentSubPage.value="consensus"}});const rt=P.value.market_sentiment,nt=rt&&rt.text||"";(nt.includes("乐观")||nt.includes("积极")||nt.includes("亢奋"))&&u.push({kind:"opportunity",source:"情绪",text:nt,action:()=>{e.currentSubPage.value="market"}}),(nt.includes("悲观")||nt.includes("恐慌")||nt.includes("低迷"))&&u.push({kind:"risk",source:"情绪",text:nt,action:()=>{e.currentSubPage.value="market"}});for(const ct of c.value.filter(Ot=>Ot.degraded))u.push({kind:"risk",source:"数据",text:i(ct.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return u}),o=t(()=>{var u;return((u=e.merrillTimeline)==null?void 0:u.value)||e.merrillTimeline||{cycles:[]}}),n=t(()=>{var u;return((u=e.timelineLoading)==null?void 0:u.value)||!1}),v=Vue.ref(null),N=Vue.ref(!1),A=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function F(u){const $=u&&u.currentTarget,le=document.querySelector(".tl-click-pop");if(!$||!le)return;const Te=$.getBoundingClientRect(),Ve=le.offsetWidth||340,Qe=le.offsetHeight||220,Oe=10,rt=$.closest(".merrill-timeline-block"),nt=rt?rt.getBoundingClientRect():Te,ct=Te.left-nt.left,Ot=Te.top-nt.top,Et=Te.width,D=Te.height,fe=nt.width,Le=nt.height;let Me=null;ct+Et+Oe+Ve<=fe?Me=ct+Et+Oe:ct-Oe-Ve>=0?Me=ct-Oe-Ve:Me=Math.max(8,Math.min(ct,fe-Ve-8));const ze=Ot+D/2-Qe/2,He=Math.max(8,Math.min(ze,Le-Qe-8));A.top=He,A.left=Me,A.right=null,A.bottom=null}const G=Vue.computed(function(){const u={};return A.top!=null&&(u.top=A.top+"px"),A.left!=null&&(u.left=A.left+"px"),A.right!=null&&(u.right=A.right+"px"),u});function se(u,$){let le=null;const Te=o.value&&o.value.cycles||[];for(const Ve of Te){const Qe=(Ve.stages||[]).find(Oe=>Oe.stage===u&&Oe.is_current);if(Qe){le=Qe;break}}if(!le)for(const Ve of Te){const Qe=(Ve.stages||[]).find(Oe=>Oe.stage===u);if(Qe){le=Qe;break}}le&&(v.value=le,N.value=!0,Vue.nextTick(function(){F($)}))}function I(){N.value=!1,v.value=null}function T(u){const $=e.merrillStagesConfig,Te=($&&$.value?$.value:$||{})[u]||{};return Te.color||Te.bg_color||"var(--color-primary)"}function B(u){const $=e.merrillStagesConfig,le=$&&$.value?$.value:$||{};return le[u]&&le[u].name||""}function K(){const u=e.merrillStagesConfig;return u&&u.value?u.value:u||{}}function ie(u){return K()[u]&&K()[u].description||""}function Q(u){const $=u&&u.stages?u.stages:[];if(!$.length)return"";const le=$[0]&&$[0].start?String($[0].start).slice(0,4):"",Te=$[$.length-1]||{},Ve=Te.end?String(Te.end).slice(0,4):Te.start?String(Te.start).slice(0,4):"";return le||Ve?le?le+"–"+Ve:Ve:""}function Z(u){const $=u.start?String(u.start).slice(0,4):"",le=u.end?String(u.end).slice(0,4):$?"至今":"";return $?le?$+"–"+le:$:""}function L(u){const $=u.essence||u.trigger||ie(u.stage)||"";return u.highlight?$?$+" · "+u.highlight:u.highlight:$}function O(){const u=p.value.indicators||{},$=p.value.stage||"",le={recovery:[["PMI",u.pmi],["GDP",u.gdp_growth],["M2",u.m2_growth]],overheat:[["PPI",u.ppi],["CPI",u.cpi],["PMI",u.pmi]],stagflation:[["CPI",u.cpi],["PPI",u.ppi],["GDP",u.gdp_growth]],recession:[["PMI",u.pmi],["GDP",u.gdp_growth],["CPI",u.cpi]]},Te=(le[$]||le.recession).filter(Ve=>Ve[1]!=null&&Ve[1]!==0);return Te.length?"实时 · "+Te.map(Ve=>Ve[0]+" "+Ve[1]+"%").join(" ｜ "):""}function z(u,$,le){const Ve=(K()[u.stage]||{}).color||"var(--color-primary)",Qe=$||[],Oe=Qe.map(Et=>Et.duration_months||0),rt=Oe.reduce((Et,D)=>Et+D,0),nt=rt>0?Oe[le]/rt*100:100/Math.max(1,Qe.length),ct=le===0,Ot=le===Qe.length-1;return{flex:"0 0 "+nt+"%",background:Ve,borderRadius:ct?"6px 0 0 6px":Ot?"0 6px 6px 0":"0"}}function k(u){const $=u.length;if($<=4)return[u];const le=Math.ceil($/2);return[u.slice(0,le),u.slice(le).reverse()]}function E(u){const $=K()[u]||{},le=$.color||"var(--color-primary)";return{background:$.bg_color||"var(--bg-card)",borderColor:le,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const ce=Vue.reactive({}),W=Vue.ref(null);let b=null,r=null,q=null;function m(){if(document.querySelector(".merrill-timeline-block"))try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach(($,le)=>{const Te=$.querySelector(".tl-stage-rows"),Ve=$.querySelector(".tl-row-top"),Qe=$.querySelector(".tl-row-bottom"),Oe=Ve?Array.from(Ve.querySelectorAll(".merrill-stage-chip")):[],rt=Qe?Array.from(Qe.querySelectorAll(".merrill-stage-chip")).reverse():[],nt=Oe.concat(rt);if(!Te||nt.length<2){ce[le]={d:"",vb:"0 0 1 1"};return}const ct=Te.getBoundingClientRect(),Ot=Math.max(1,ct.width),Et=Math.max(1,ct.height),D=Oe.length,fe=nt.map(Me=>{const ze=Me.getBoundingClientRect();return{x:ze.left+ze.width/2-ct.left,y:ze.top+ze.height/2-ct.top}});let Le="M "+fe[0].x.toFixed(1)+" "+fe[0].y.toFixed(1);for(let Me=1;Me<fe.length;Me++){const ze=fe[Me-1],He=fe[Me];Me===D&&(Le+=" L "+ze.x.toFixed(1)+" "+He.y.toFixed(1)),Le+=" L "+He.x.toFixed(1)+" "+He.y.toFixed(1)}ce[le]={d:Le,vb:"0 0 "+Ot.toFixed(1)+" "+Et.toFixed(1)}})}catch(u){console.error("[tl] buildTlPaths error",u)}}function H(u){return ce[u]||{d:"",vb:"0 0 1 1"}}function ue(u){W.value=u}function X(){W.value=null}const M=Vue.ref([]);function U(u){return M.value.indexOf(u)!==-1}function re(u){const $=M.value.slice(),le=$.indexOf(u);le!==-1?$.splice(le,1):$.push(u),M.value=$,Vue.nextTick(function(){m&&m()})}function pe(){const u=document.querySelector(".merrill-timeline-block");if(!u)return;const $=u.querySelector(".tl-spine");$?$.scrollIntoView({behavior:"smooth",block:"end"}):u.scrollIntoView({behavior:"smooth",block:"end"})}const de=Vue.computed(function(){const u=K();return["recovery","overheat","stagflation","recession","default"].filter(function(le){return u[le]&&u[le].name}).map(function(le){return{key:le,name:u[le].name,color:u[le].color||"var(--color-primary)"}})});function Y(u){r&&clearTimeout(r),r=setTimeout(()=>{r=null,Vue.nextTick(m)},u||120)}Vue.onMounted(()=>{document.querySelector(".merrill-timeline-block")&&(Y(0),Y(800),b=()=>Y(150),window.addEventListener("resize",b),q=new MutationObserver(()=>Y(120)),q.observe(document.body||document.documentElement,{childList:!0,subtree:!0}))}),Vue.onBeforeUnmount(()=>{b&&window.removeEventListener("resize",b),r&&clearTimeout(r),q&&(q.disconnect(),q=null)});const oe=Vue.ref([]),De=Vue.ref(null),ke=Vue.ref(!1),_e=Vue.ref(!1),ee=Vue.ref(7),xe=Vue.ref(""),Pe=Vue.ref(""),ae=Vue.computed(()=>{const u=new Set;return(oe.value||[]).forEach(function($){$.task&&u.add($.task)}),Array.from(u).sort()}),te=Vue.computed(function(){const u=De.value&&De.value.success_rate||0;return u>=80?"color-success":u>=50?"color-warning":"color-danger"});function he(u,$){return u>0&&$/u>=.8?"status-ok":u>0&&$/u>=.5?"status-warn":"status-bad"}async function Ne(){const u=++d;ke.value=!0,_e.value=!1;try{const $=window.__quantModules&&window.__quantModules.core||{},le=typeof $.authHeaders=="function"?$.authHeaders():{},Te=new URLSearchParams({days:String(ee.value)});xe.value&&Te.set("task",xe.value),Pe.value&&Te.set("status",Pe.value);const[Ve,Qe]=await Promise.all([fetch("/api/system/execution-history?"+Te.toString(),{headers:le}).then(function(Oe){return Oe.json()}),fetch("/api/system/execution-summary?days="+ee.value,{headers:le}).then(function(Oe){return Oe.json()})]);if(u!==d)return;oe.value=Ve&&Ve.data||[],De.value=Qe&&Qe.data||null}catch($){console.error("[execution] 执行数据加载失败:",$),_e.value=!0}finally{u===d&&(ke.value=!1)}}const Ie=window.__quantModules&&window.__quantModules.i18n||{},Ue=typeof Ie.t=="function"?Ie.t:function(u){return String(u)},Ge=Vue.ref([]),ht=Vue.ref(null),st=Vue.ref(null),Rt=Vue.ref(""),Se=Vue.ref([]),we=Vue.ref(!1);let Ae=null;const Re=Vue.computed(function(){const u=st.value&&st.value.dates||[];return u.length&&!Rt.value&&(Rt.value=u[u.length-1].date),u}),Xe=Vue.computed(function(){const u=(Ge.value||[]).find(function(le){return le.enabled});if(!u||u.countdown_seconds==null)return"—";const $=u.countdown_seconds;return Math.floor($/3600)+"h"+String(Math.floor($%3600/60)).padStart(2,"0")+"m"}),Ze=Vue.computed(function(){const u=(Ge.value||[]).find(function($){return $.enabled});if(!u||u.countdown_seconds==null||u.countdown_seconds<0)return"";try{return new Date(Date.now()+u.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),tt=Vue.computed(function(){const u=ht.value;return!u||u.phase==="idle"?Ue("exec.waiting"):u.phase==="running"?Ue("exec.running")+(u.current_sid?" · "+u.current_sid:""):u.phase==="done"?Ue("exec.done"):Ue("exec.failed")}),xt=Vue.computed(function(){return ht.value&&ht.value.phase==="running"?"loader":"check-circle-2"}),St=Vue.computed(function(){const u=st.value&&st.value.dates||[];return u.length?u[u.length-1].date:"—"}),pt=Vue.computed(function(){const u=st.value&&st.value.dates||[],$=u[u.length-1];return $&&$.visible?"color-success":"color-danger"}),zt=Vue.computed(function(){const u=st.value&&st.value.dates||[],$=u[u.length-1];return $?$.day_view_total:"—"});function Kt(u){const $=window.__quantModules&&window.__quantModules.core||{},le=typeof $.authHeaders=="function"?$.authHeaders():{};return fetch(u,{headers:le}).then(function(Te){return Te.json()})}async function Jt(){const u=++d;try{const[$,le,Te]=await Promise.all([Kt("/api/strategies/execution/plan"),Kt("/api/strategies/execution/status"),Kt("/api/strategies/execution/results?days=7")]);if(u!==d)return;Ge.value=$&&$.data&&$.data.plans||[],ht.value=le&&le.data||null,st.value=Te&&Te.data||null,ht.value&&ht.value.phase==="running"?et():yt()}catch($){console.error("[execution-monitor] 监控数据加载失败:",$)}}function et(){yt(),Ae=setInterval(function(){Kt("/api/strategies/execution/status").then(function(u){ht.value=u&&u.data||null,ht.value&&ht.value.phase!=="running"&&(yt(),Jt())}).catch(function(){})},5e3)}function yt(){Ae&&(clearInterval(Ae),Ae=null)}async function Wt(u){if(!u)return;const $=++d;we.value=!0;try{const le=await Kt("/api/strategies/execution/trace/"+encodeURIComponent(u));if($!==d)return;const Te=le&&le.data||null;Se.value=Te&&Te.steps||[]}catch(le){console.error("[execution-trace] 追溯加载失败:",le)}finally{$===d&&(we.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(u){u==="execution"?(Ne(),Jt()):yt()},{immediate:!0}),Vue.watch(function(){const u=e.currentSubPage&&e.currentSubPage.value,$=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],le=e.marketData&&e.marketData.value||{};return{sub:u,split:!!e.detailSplitEnabled.value,top5:$.slice(0,5),rank:$,indices:(le.indices||[]).map(function(Te){return Te})}},function(u,$){if(u.split){if(u.sub==="overview"){if(!u.top5.length)return;const le=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Te=u.top5.some(function(Ve){return Ve.code===le});(!le||!Te)&&e.showStockDetail&&e.showStockDetail(u.top5[0].code)}else if(u.sub==="consensus"){if(!u.rank.length)return;const le=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Te=u.rank.some(function(Ve){return Ve.code===le});(!le||!Te)&&e.showStockDetail&&e.showStockDetail(u.rank[0].code)}else if(u.sub==="market"){if(!u.indices.length)return;const le=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,Te=u.indices.some(function(Ve){return Ve.code===le});(!le||!Te)&&e.showIndexDetail&&e.showIndexDetail(u.indices[0])}}},{immediate:!0});const gt=Vue.ref("band"),Ut=["recession","recovery","overheating","stagflation"];function _t(u){if(!u)return null;const $=String(u).split("-"),le=parseInt($[0],10),Te=parseInt($[1]||"1",10);return isFinite(le)?le+(Te-1)/12:null}function Je(u){const $=Math.floor(u);let le=Math.round((u-$)*12)+1;return le>12&&(le=12),le<1&&(le=1),$+"-"+(le<10?"0"+le:""+le)}function At(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function wt(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function J(u,$){const le=At(),Te=Number(le.avg_duration_months)||0,Ve=Math.min(100,Number(le.progress_percent)||0),Qe=_t(le.current_stage_start_date),Oe=[];let rt=null;if((u||[]).forEach(function(ze){const He=_t(ze.start);rt==null&&He!=null&&(rt=He);const mt=!!(ze.is_current||Qe!=null&&He===Qe&&!ze.duration_months),Mt=ze.name||B(ze.stage);if(mt&&Te>0){const it=Te*Ve/100;it>.5&&Oe.push({stage:ze.stage,name:Mt,months:it,live:!0,start:ze.start});const Bt=Te-it;Bt>.5&&Oe.push({stage:ze.stage,name:"剩余(预测)",months:Bt,ghost:!0,start:ze.start})}else{let it=Number(ze.duration_months)||0;if(!it&&He!=null){const Bt=_t(ze.end);Bt!=null&&Bt>He&&(it=Math.max(1,Math.round((Bt-He)*12)))}it||(it=1),Oe.push({stage:ze.stage,name:Mt,months:it,live:mt,start:ze.start,end:ze.end})}if(mt&&$&&Te>0){const it=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;it&&Oe.push({stage:it.next_stage,name:(it.next_stage_name||"下一阶段")+" (预测)",months:Te,ghost:!0,prob:it.transition_probability})}}),!Oe.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const nt=Oe.reduce(function(ze,He){return ze+He.months},0)||1,ct=rt??0;let Ot=0,Et=0;const D=Oe.map(function(ze){const He=Ot;ze.ghost||(Et+=ze.months),Ot+=ze.months;const mt={stage:ze.stage,name:ze.name,months:Math.round(ze.months),ghost:!!ze.ghost,live:!!ze.live,prob:ze.prob,left:He/nt*100,width:Math.max(2,ze.months/nt*100)},Mt=_t(ze.start),it=_t(ze.end);return mt.start=Mt!=null?Je(Mt):Je(ct+He/12),mt.end=it!=null?Je(it):"",mt.predicted=Mt==null,mt}),fe=Oe[Oe.length-1],Le=Oe.some(function(ze){return ze.ghost}),Me=fe&&fe.end?fe.end:Je(ct+nt/12);return{segs:D,axisStart:Je(ct),axisEnd:Me,nowPct:Le?Et/nt*100:null}}function ge(u){return(u.stages||[]).some(function($){return $.is_current})}const at=Vue.computed(function(){const u=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!u.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let $=null;for(let le=u.length-1;le>=0;le--)if(ge(u[le])){$=u[le];break}return $||($=u[u.length-1]),J($.stages,!0)}),kt=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function($){return!ge($)}).map(function($){return{label:$.label,years:Q($),segs:J($.stages,!1).segs}})}),lt=Ut,It=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function($){const le={};Ut.forEach(function(Ve){le[Ve]=0});let Te=null;return($.stages||[]).forEach(function(Ve){le[Ve.stage]!=null&&(le[Ve.stage]+=Number(Ve.duration_months)||0),Ve.is_current&&(Te=Ve.stage)}),{label:$.label,sum:le,cur:Te}})}),ea=Vue.computed(function(){let u=0;return It.value.forEach(function($){Ut.forEach(function(le){$.sum[le]>u&&(u=$.sum[le])})}),u||1}),aa=Vue.computed(function(){const u=e.merrillSnapshots&&e.merrillSnapshots.value||[],$=[];return u.forEach(function(le){const Te=$[$.length-1];Te&&Te.stage===le.stage?(Te.count++,Te.last=le.timestamp):$.push({stage:le.stage,name:le.stage_name||B(le.stage),count:1,first:le.timestamp,last:le.timestamp})}),$}),na=Vue.computed(function(){return Math.max(100,Math.min(200,Number(At().progress_percent)||0))}),ta=Vue.computed(function(){const u=Number(At().progress_percent)||0;return{width:Math.max(0,Math.min(100,u/na.value*100))+"%",background:u>100?"linear-gradient(90deg, "+wt()+", var(--color-warning))":wt()}}),Qt=Vue.computed(function(){return 100/na.value*100}),Ht=Vue.computed(function(){const u=At().predicted_end;if(!u)return"";if(typeof u=="string")return u;const $=u.optimistic||u.earliest||"",le=u.pessimistic||u.latest||"";return $&&le?$+" ~ "+le:u.base||u.mid||$||le||""});function Nt(u){const $=T(u.stage);return u.ghost?{left:u.left+"%",width:u.width+"%",borderColor:$,color:"var(--text-secondary)",background:"repeating-linear-gradient(45deg, "+$+"44, "+$+"44 5px, transparent 5px, transparent 10px)"}:{left:u.left+"%",width:u.width+"%",background:$}}function Gt(u){const $=[u.name];return u.start&&$.push((u.predicted?"预计起始 ":"起始 ")+u.start+(u.end?" → "+u.end:"")),u.months&&$.push("约 "+u.months+" 个月"),u.ghost&&$.push("预测(尚未发生)"),u.prob!=null&&$.push("转移概率 "+(u.prob*100).toFixed(0)+"%"),$.join(" · ")}function ft(u,$){const le=T(u),Te=Math.max(.28,$/ea.value);return{background:le,opacity:(.45+.55*Te).toFixed(2)}}return{...e,todayText:w,tradingStatus:h,merrillNext:C,todayFocus:R,todaySignals:x,merrillConfigOpen:f,getTimelineStageColor:T,getTimelineStageName:B,getTimelineStageDesc:ie,timelineRows:k,tlChipStyle:E,tlPathFor:H,tlCycleYears:Q,tlGanttStyle:z,tlTipYears:Z,tlTipBrief:L,tlCurrentBrief:O,tlHoverKey:W,setTlHover:ue,clearTlHover:X,collapsedCycles:M,isCycleCollapsed:U,toggleCycle:re,scrollToLatest:pe,tlLegendStages:de,mcHistView:gt,mcCurrentBand:at,mcHistoryBands:kt,mcStageKeys:lt,mcMatrix:It,mcTrailRuns:aa,mcProgStyle:ta,mcAvgMark:Qt,mcEndRange:Ht,mcSegStyle:Nt,mcSegTitle:Gt,mcMxCellStyle:ft,tlClickStage:v,tlClickVisible:N,closeTlClick:I,tlClickPosStyle:G,merrillTimeline:o,timelineLoading:n,showTimelineStage:se,execHistory:oe,execSummary:De,execLoading:ke,execError:_e,execDays:ee,execTaskFilter:xe,execStatusFilter:Pe,execTaskOptions:ae,execSuccessClass:te,loadExecutionData:Ne,execRateClass:he,execPlan:Ge,execStatus:ht,execResults:st,execTraceDate:Rt,execTraceSteps:Se,execTraceLoading:we,execResultsDates:Re,execCountdownText:Xe,execNextRunText:Ze,execPhaseText:tt,execStatusIcon:xt,execLastDate:St,execVisibleClass:pt,execVisibleText:zt,loadExecutionTrace:Wt}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};function f(J){e.currentSubPage.value=J}function t(){xe(),Pe(),ae()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,J=>{J==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),J==="datadict"&&q(),J==="health"&&E(),J==="notification"&&t()});const d=e.themeHues||[45,220,0,140,270,320],p=e.themeHueNames||{},P=e.themeMode||Vue.computed(()=>"light"),g=e.themeHue||Vue.ref(45);function c(J){e.changeThemeMode&&e.changeThemeMode(J)}function _(J){e.changeThemeHue&&e.changeThemeHue(parseInt(J,10))}function l(J){return e.hueColor?e.hueColor(J):"hsl("+J+", 75%, 42%)"}function S(J){return e.hueName?e.hueName(J):p[J]||"自定义 "+J}function i(J){e.setNavMode&&e.setNavMode(J)}const w=Vue.ref([]),h=Vue.ref(""),C=Vue.ref("read"),R=Vue.ref(""),x=Vue.ref(!1),o=()=>window.__quantModules&&window.__quantModules.core||{},n=Vue.ref([]),v=Vue.ref(!1);async function N(){v.value=!0;try{const J=await fetch("/api/audit/logs?limit=20",{headers:o().authHeaders?o().authHeaders():{}}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()});n.value=J&&J.logs||[]}catch(J){console.error("[system] 审计加载失败:",J),n.value=[]}finally{v.value=!1}}const A=Vue.ref(!1),F=Vue.ref(null),G=Vue.ref(null),se=Vue.ref([]),I=Vue.ref(null);function T(J){return J==="completed"?"完成":J==="running"?"运行中":J==="pending"?"排队中":J==="cancelled"?"已取消":"失败"}async function B(){try{const ge=await(await fetch("/api/jobs?limit=20")).json();ge&&ge.success&&(se.value=ge.data&&ge.data.tasks||[])}catch(J){console.warn("[system] 加载任务队列失败:",J)}}async function K(J){try{await fetch("/api/jobs/"+J+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),B()}catch(ge){console.warn("[system] 取消任务失败:",ge)}}function ie(){B(),I.value=window.setInterval(B,15e3)}const Q=Vue.ref({items:[]}),Z=Vue.ref([]),L=Vue.ref(null),O=Vue.ref({data_sources:[],alerts:[]}),z=function(){return o().authHeaders?o().authHeaders():{}},k=function(J){return fetch(J,{headers:z()}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()})};async function E(){A.value=!0,F.value=null;try{const[J,ge,at,kt]=await Promise.all([k("/api/reliability/freshness"),k("/api/reliability/heal-history?limit=20"),k("/api/reliability/startup-report"),k("/api/reliability/source-health")]);Q.value=J&&J.data||{items:[]},Z.value=ge&&ge.data||[],L.value=at&&at.data||null,O.value=kt||{data_sources:[],alerts:[]},G.value=new Date().toLocaleTimeString()}catch(J){console.warn("[health] 加载失败:",J),F.value="健康数据加载失败: "+(J.message||""),Q.value={items:[]},Z.value=[]}finally{A.value=!1}}const ce=Vue.ref(!1),W=Vue.ref(""),b=Vue.ref(""),r=Vue.ref({fields:[]});async function q(){ce.value=!0,W.value="";try{const J="/api/data-dict"+(b.value?"?category="+b.value:""),ge=await k(J);r.value=ge&&ge.data||{fields:[]}}catch(J){console.warn("[dict] 加载失败:",J),W.value="数据字典加载失败: "+(J.message||""),r.value={fields:[]}}finally{ce.value=!1}}function m(J){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[J]||"var(--text-secondary)"}function H(J){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[J]||J}const ue=Vue.computed(()=>(Q.value?Q.value.items||[]:[]).filter(ge=>ge.status==="stale"||ge.status==="missing").length),X=Vue.ref("rules"),M=Vue.ref([]),U=Vue.ref([]),re=Vue.ref([]),pe=Vue.ref(!1),de=Vue.ref(""),Y=Vue.ref("price_above"),oe=Vue.ref(""),De=Vue.ref(!1),ke=Vue.ref(60),_e=Vue.ref("");function ee(J){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[J]||J}async function xe(){pe.value=!0;try{const J=await(await fetch("/api/alerts/rules")).json();M.value=J&&J.rules||[]}catch(J){_e.value="规则加载失败: "+J}finally{pe.value=!1}}async function Pe(){pe.value=!0;try{const J=await(await fetch("/api/alerts/history?limit=50")).json();U.value=J&&J.history||[]}catch(J){_e.value="历史加载失败: "+J}finally{pe.value=!1}}async function ae(){pe.value=!0;try{const J=await(await fetch("/api/alerts/channels")).json(),ge=await(await fetch("/api/alerts/silence")).json();re.value=J&&J.channels||[],De.value=!!(ge&&ge.silenced)}catch(J){_e.value="通道状态加载失败: "+J}finally{pe.value=!1}}function te(J){X.value=J,J==="rules"?xe():J==="history"?Pe():ae()}async function he(){const J=de.value.trim();if(!J){_e.value="请填写股票代码";return}pe.value=!0;try{const ge={stock_code:J,rule_type:Y.value};if(Y.value!=="new_pool"){const kt=Number(oe.value);if(isNaN(kt)){_e.value="阈值必须为数值";return}ge.threshold=kt}const at=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ge)})).json();at&&at.rule?(_e.value="规则已添加",de.value="",oe.value="",xe()):_e.value=at&&at.detail||"添加失败"}catch(ge){_e.value="添加失败: "+ge}finally{pe.value=!1}}async function Ne(J){try{await fetch("/api/alerts/rules/"+J.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!J.enabled})}),J.enabled=!J.enabled}catch(ge){_e.value="切换失败: "+ge}}async function Ie(J){try{const ge=await(await fetch("/api/alerts/rules/"+J.id,{method:"DELETE"})).json();ge&&ge.success?(_e.value="规则已删除",xe()):_e.value="删除失败"}catch(ge){_e.value="删除失败: "+ge}}async function Ue(){try{const J=De.value?ke.value:0,ge=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:J})})).json();De.value=!!(ge&&ge.silenced),_e.value=De.value?"已静默":"已恢复推送"}catch(J){_e.value="静默设置失败: "+J}}async function Ge(){De.value=!1,await Ue()}function ht(J){return!!J&&!J.degraded}const st=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ge,at)=>Math.max(ge,at.views||0),0)||1),Rt=()=>o().OPENAPI_ROUTE_BASE||"/api/openapi";async function Se(){x.value=!0;try{const J=await o().apiFetch(Rt()+"/keys");w.value=J&&J.data||[]}catch(J){ElementPlus.ElMessage.error("加载 API Key 失败: "+(J.message||""))}finally{x.value=!1}}async function we(){try{const J=await o().apiFetch(Rt()+"/keys",{method:"POST",body:JSON.stringify({name:h.value||"未命名",role:C.value||"read",expire_days:365})});J&&J.success?(R.value=J.api_key||"",h.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Se()):ElementPlus.ElMessage.error(J&&(J.detail||J.message)||"生成失败")}catch(J){ElementPlus.ElMessage.error("生成失败: "+(J.message||""))}}async function Ae(){if(R.value)try{await navigator.clipboard.writeText(R.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Re(J){try{const ge=await o().apiFetch(Rt()+"/keys/"+J.id,{method:"DELETE"});ge&&ge.success?(ElementPlus.ElMessage.success("Key 已吊销"),R.value&&J.prefix&&R.value.includes(J.prefix)&&(R.value=""),await Se()):ElementPlus.ElMessage.error(ge&&(ge.detail||ge.message)||"吊销失败")}catch(ge){ElementPlus.ElMessage.error("吊销失败: "+(ge.message||""))}}const Xe={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Ze(J){return Xe[J]||J}const tt=computed(()=>{var J;return(((J=e.healthMetrics)==null?void 0:J.value)||[]).map(ge=>({name:Ze(ge.name),source:ge.name,success_rate:ge.success_rate,avg_latency_ms:ge.avg_latency_ms,calls:ge.calls||0,degraded:!!ge.degraded,data_age_hours:ge.data_age_hours!=null?ge.data_age_hours:null,stale:!!ge.stale,last_fetch:ge.last_fetch||ge.last_success||null}))});function xt(J){return J.degraded?"degraded":J.success_rate==null?"unknown":J.success_rate>=90?"ok":J.success_rate>=60?"warn":"bad"}function St(J){return J==null?"":J<1?"刚刚":J<24?Math.round(J)+"小时前":Math.floor(J/24)+"天前"}const pt=e.aiUsage||Vue.ref({}),zt=Vue.computed(()=>{const J=pt.value&&pt.value.by_model||{};return Object.entries(J).map(([ge,at])=>({name:ge,count:at})).sort((ge,at)=>at.count-ge.count)}),Kt=Vue.computed(()=>zt.value.reduce((J,ge)=>Math.max(J,ge.count),0)||1),Jt=Vue.computed(()=>zt.value.reduce((J,ge)=>J+ge.count,0)||1),et=Vue.computed(()=>yt.value.reduce((J,ge)=>Math.max(J,ge.count),0)||0),yt=Vue.computed(()=>{const J=pt.value&&pt.value.by_day||{},ge=[],at=new Date;for(let kt=29;kt>=0;kt--){const lt=new Date(at.getFullYear(),at.getMonth(),at.getDate()-kt),It=lt.getFullYear()+"-"+String(lt.getMonth()+1).padStart(2,"0")+"-"+String(lt.getDate()).padStart(2,"0");ge.push({day:It,count:J[It]||0})}return ge}),Wt=Vue.computed(()=>yt.value.reduce((J,ge)=>Math.max(J,ge.count),0)||1),gt=Vue.computed(()=>{const J=pt.value&&pt.value.by_day||{},ge=new Date,at=ge.getFullYear()+"-"+String(ge.getMonth()+1).padStart(2,"0")+"-"+String(ge.getDate()).padStart(2,"0");return J[at]||0}),Ut=Vue.computed(()=>{const J=pt.value&&pt.value.by_day||{},ge=Object.keys(J).filter(at=>(J[at]||0)>0);return ge.length?ge[ge.length-1]:""});function _t(J){e.analyticsDays&&(e.analyticsDays.value=J),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const Je='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',At='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function wt(J){return J?At:Je}return ie(),{...e,themeHues:d,themeHueNames:p,themeMode:P,themeHue:g,onThemeModeChange:c,setThemeHue:_,hueColor:l,hueName:S,onNavModeChange:i,analyticsMaxViews:st,aiModelRank:zt,aiModelMax:Kt,aiDayTrend:yt,aiDayMax:Wt,todayAiCalls:gt,lastAiCallDay:Ut,aiTotal:Jt,aiDayPeak:et,setAnalyticsDays:_t,viewIcon:wt,openApiKeys:w,openApiKeyName:h,openApiKeyRole:C,newOpenApiKey:R,openApiLoading:x,loadOpenApiKeys:Se,generateOpenApiKey:we,copyOpenApiKey:Ae,revokeOpenApiKey:Re,healthRows:tt,healthClass:xt,fmtAge:St,staleAssetCount:ue,jobQueue:se,loadJobQueue:B,cancelJob:K,jobStatusText:T,auditLogs:n,auditLoading:v,loadAuditLogs:N,healthLoading:A,healthError:F,healthUpdatedAt:G,freshnessData:Q,healHistory:Z,startupReport:L,sourceHealth:O,refreshHealth:E,statusColor:m,statusLabel:H,sourceOk:ht,dictLoading:ce,dictError:W,dictCategory:b,dictData:r,loadDataDict:q,ncTab:X,ncRules:M,ncHistory:U,ncChannels:re,ncLoading:pe,ncNewCode:de,ncNewType:Y,ncNewThreshold:oe,ncSilence:De,ncSilenceMinutes:ke,ncMsg:_e,ncTypeLabel:ee,onNcTab:te,loadAlertRules:xe,loadAlertHistory:Pe,loadAlertChannels:ae,addAlertRule:he,toggleAlertRule:Ne,removeAlertRule:Ie,applySilence:Ue,clearSilence:Ge,goSystemSub:f}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:e,watch:f,onUnmounted:t}=Vue,d=a("qcState");if(!d)return{};function p(){if(!d.hasMoreAiHistory||!d.loadMoreAiHistory||d.currentPage.value!=="ai"||d.currentSubPage.value!=="history")return;const pe=document.documentElement;pe.scrollTop+window.innerHeight>=pe.scrollHeight-300&&d.loadMoreAiHistory()}window.addEventListener("scroll",p,{passive:!0}),t(()=>window.removeEventListener("scroll",p));const P=e(null),g=e(!1),c=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function _(pe){return!pe||pe.total===0||pe.rate===null||pe.rate===void 0?"--":pe.rate.toFixed(2)+"%"}const l=e(5);function S(pe){l.value=pe}function i(pe,de){if(!pe)return"--";if(pe.available===!1)return"— 数据不可达";const Y=pe["hit_n"+de];return Y===!0?"✓ 命中":Y===!1?"✗ 未中":"– 中性/待验证"}async function w(){g.value=!0;try{const de=await(await fetch("/api/ai/track")).json();P.value=de&&de.success?de.data:null}catch(pe){console.warn("[eval-track] 评估命中率加载失败:",pe),P.value=null}finally{g.value=!1}}f(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(pe){pe==="ai/evaluation-analysis"&&w()},{immediate:!0});const h=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:C,summary:R,trades:x,loading:o,loadError:n,showAddForm:v,addForm:N,addSaving:A,tradeFormVisible:F,tradeForm:G,tradeSaving:se,portfolioTab:I,equityDays:T,equityLoading:B,equityNote:K,equityHasData:ie,loadPortfolio:Q,addPosition:Z,removePosition:L,openTradeForm:O,submitTrade:z,loadTrades:k,loadEquity:E,fmtSigned:ce,fmtSignedPct:W,signClass:b,riskTab:r,riskLoading:q,riskNote:m,riskHasData:H,riskData:ue,riskMetricList:X,loadRisk:M}=h;f(C,function(pe){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((pe||[]).map(function(de){return{code:de.stock_code,name:de.stock_name||de.stock_code}}))},{deep:!0}),f(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(pe){pe==="ai/portfolio"?(Q(),k(),E(T?T.value:30),typeof M=="function"&&M()):pe==="ai/overview"&&Q()},{immediate:!0});let U="",re=!1;return f(function(){const pe=d.currentSubPage&&d.currentSubPage.value,de=!!(d.detailSplitEnabled&&d.detailSplitEnabled.value),Y={sub:pe,split:de,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(pe==="history"){const oe=d.aiHistoryView&&d.aiHistoryView.value||"date",De=oe==="date"?d.groupedByDate:oe==="month"?d.groupedByMonth:d.aiHistoryByStock,ke=De&&De.value||{},_e=Object.keys(ke);Y.kind="history",Y.view=oe,Y.key=_e.length?_e[0]:"",Y.first=_e.length&&(ke[_e[0]]||[])[0]||null,Y.expandList=oe==="date"?d.expandedDates:oe==="month"?d.expandedMonths:d.expandedStocks,Y.expandFn=oe==="date"?d.toggleDateExpand:oe==="month"?d.toggleMonthExpand:d.toggleStockExpand}else if(pe==="chat_history"){const oe=d.chatHistoryView&&d.chatHistoryView.value||"date",De=oe==="date"?d.chatGroupedByDate:oe==="month"?d.chatGroupedByMonth:d.chatGroupedByStock,ke=De&&De.value||{},_e=Object.keys(ke);Y.kind="chat",Y.view=oe,Y.key=_e.length?_e[0]:"",Y.first=_e.length&&(ke[_e[0]]||[])[0]||null,Y.expandList=oe==="date"?d.expandedChatDates:oe==="month"?d.expandedChatMonths:d.expandedChatStocks,Y.expandFn=oe==="date"?d.toggleChatDateExpand:oe==="month"?d.toggleChatMonthExpand:d.toggleChatStockExpand}return Y},function(pe){if(!pe.split||!pe.first||!pe.kind)return;const de=pe.sub!==U,Y=d.stockDetail&&d.stockDetail.value,oe=!!(Y&&Y.stock);if(!de&&oe||re)return;U=pe.sub,re=!0;try{pe.key&&pe.expandList&&pe.expandFn&&pe.expandList.value&&pe.expandList.value.indexOf(pe.key)<0&&pe.expandFn(pe.key)}catch{}const De=pe.kind==="history"?d.viewAiResult(pe.first):d.viewChatSession(pe.first);De&&typeof De.finally=="function"?De.finally(function(){re=!1}):re=!1},{immediate:!0}),{...d,trackData:P,trackLoading:g,trackWindows:c,fmtTrackRate:_,loadTrack:w,trackWindow:l,setTrackWindow:S,trackHitText:i,positions:C,summary:R,trades:x,loading:o,loadError:n,showAddForm:v,addForm:N,addSaving:A,tradeFormVisible:F,tradeForm:G,tradeSaving:se,portfolioTab:I,equityDays:T,equityLoading:B,equityNote:K,equityHasData:ie,loadPortfolio:Q,addPosition:Z,removePosition:L,openTradeForm:O,submitTrade:z,loadTrades:k,loadEquity:E,fmtSigned:ce,fmtSignedPct:W,signClass:b,riskTab:r,riskLoading:q,riskNote:m,riskHasData:H,riskData:ue,riskMetricList:X,loadRisk:M}}}})();(function(){const{ref:a,computed:e,watch:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const d=t("qcState"),p=Vue.ref(!1),P=Vue.ref(!1);let g=0;if(!d)return{};const c=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function _(y){c.value=y;try{localStorage.setItem("quant_strategy_mode",y)}catch{}d.currentSubPage.value="strategy-manage"}const l=a([]),S=a(!1),i=a(!1),w=a(""),h=a(null),C=a(!1),R=a(!1);async function x(){const y=++g;S.value=!0,i.value=!1;try{const s=await fetch("/api/market/reviews?limit=30",{headers:J()}).then(V=>V.json());if(y!==g)return;s&&s.success?l.value=Array.isArray(s.data)?s.data:[]:i.value=!0}catch(s){console.error("[market-review] 复盘列表加载失败:",s),i.value=!0}finally{y===g&&(S.value=!1)}}function o(y){w.value=y,F(y)}function n(y){w.value===y?A():o(y)}function v(y){return y==null||isNaN(Number(y))?"—":(Number(y)>=0?"+":"")+Number(y).toFixed(2)+"%"}function N(y){return y==null||isNaN(Number(y))?"—":Number(y).toFixed(2)}function A(){w.value="",h.value=null,R.value=!1}async function F(y){const s=++g;C.value=!0,R.value=!1,h.value=null;try{const V=y?"/api/market/review?date="+encodeURIComponent(y):"/api/market/review",ne=await fetch(V,{headers:J()}).then(Ce=>Ce.json());if(s!==g)return;ne&&ne.success?h.value=ne.data:R.value=!0}catch(V){console.error("[market-review] 复盘详情加载失败:",V),R.value=!0}finally{s===g&&(C.value=!1)}}function G(y){return y>0?"up":y<0?"down":"flat"}function se(y){return y==null||isNaN(Number(y))?"—":(y>0?"+":"")+Number(y).toFixed(2)+"%"}function I(y){const s={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(y||{}).map(function(V){const ne=V[0],Ce=V[1],qe=!Ce||Ce==="unavailable"||Ce==="数据不可达";return{label:s[ne]||ne,value:qe?"数据不可达":Ce,unavailable:qe}})}const T=a([]),B=a(!1),K=a(!1),ie=a(""),Q=a(""),Z=a(""),L=a({}),O=a(!1),z=a(""),k=a(""),E=a([]),ce=a([]),W=a(""),b=a(""),r=a(!0),q=a(!0),m=a("20:00"),H=a("default"),ue=a(!1),X=a(""),M=e(function(){return T.value.find(function(y){return y.id===Z.value})||null});async function U(y,s){s=s||{},s.headers=Object.assign({},s.headers||{});const V=localStorage.getItem("quant_token")||"";return V&&(s.headers.Authorization="Bearer "+V),fetch(y,s)}async function re(){const y=++g;B.value=!0,K.value=!1,ie.value="",Q.value="";try{const s=await U("/api/strategies").then(function(ne){return ne.json()});if(y!==g)return;let V=null;Array.isArray(s)?V=s:s&&Array.isArray(s.strategies)?(V=s.strategies,s.warn&&(Q.value=String(s.warn))):(K.value=!0,ie.value=s&&s.detail?String(s.detail):"策略列表加载失败（接口返回异常）"),V!==null&&(T.value=V,T.value.length&&!Z.value&&(Z.value=T.value[0].id,pe()))}catch(s){console.error("[research] 策略列表加载失败:",s),K.value=!0,ie.value="策略列表加载失败: "+(s&&s.message||"网络错误")}finally{y===g&&(B.value=!1)}}function pe(){const y=M.value;y&&(L.value={},y.schema.forEach(function(s){L.value[s.key]=s.default}),k.value="",te(),de(),ke())}async function de(){if(!Z.value){ce.value=[];return}try{const y=await U("/api/strategies/"+Z.value+"/profiles").then(function(s){return s.json()});ce.value=y&&y.data&&y.data.profiles||[],W.value=""}catch(y){console.error("[research] 方案列表加载失败:",y),ce.value=[]}}async function Y(){p.value=!0;const y=(b.value||"").trim();if(!y){window._core&&window._core.showToast("请输入方案名称");return}try{const s=await U("/api/strategies/"+Z.value+"/profiles",{method:"POST",body:JSON.stringify({name:y,params:L.value})}).then(function(V){return V.json()});if(s&&s.detail){window._core&&window._core.showToast(String(s.detail));return}b.value="",await de(),window._core&&window._core.showToast("方案已保存")}catch(s){console.error("[research] 方案保存失败:",s),window._core&&window._core.showToast("方案保存失败")}}function oe(){const y=ce.value.find(function(s){return s.id===W.value});y&&(Object.keys(y.params||{}).forEach(function(s){L.value[s]=y.params[s]}),window._core&&window._core.showToast("已应用方案: "+y.name))}async function De(){if(W.value)try{await U("/api/strategies/"+Z.value+"/profiles/"+W.value,{method:"DELETE"}).then(function(y){return y.json()}),await de(),window._core&&window._core.showToast("方案已删除")}catch(y){console.error("[research] 方案删除失败:",y)}}async function ke(){try{const y=await U("/api/strategies/governance").then(function(ne){return ne.json()}),V=(y&&y.data&&y.data.strategies||{})[Z.value]||{};r.value=V.enabled!==!1,m.value=V.schedule||"20:00",H.value=V.universe==="all"?"all":"default",q.value=V.show_in_calendar!==!1,X.value=V.last_holdings||""}catch(y){console.error("[research] 纳管状态加载失败:",y)}}async function _e(){try{await U("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const y={};return y[Z.value]={enabled:r.value,schedule:m.value,universe:H.value,show_in_calendar:q.value},y}()})}).then(function(y){return y.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(y){console.error("[research] 纳管更新失败:",y)}}async function ee(){if(Z.value){ue.value=!0;try{const y=await U("/api/strategies/"+Z.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:z.value||void 0})}).then(function(s){return s.json()});if(y&&y.detail){window._core&&window._core.showToast(String(y.detail));return}window._core&&window._core.showToast("持仓已生成"),await ke()}catch(y){console.error("[research] run-once 失败:",y),window._core&&window._core.showToast("持仓生成失败")}finally{ue.value=!1}}}function xe(){X.value&&window.open(X.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function Pe(){const y=M.value;if(!y)return;const s=(b.value||"").trim()||y.name+"-副本";ae(s,Object.assign({},L.value)),window._core&&window._core.showToast("已复制为副本方案: "+s)}async function ae(y,s){try{await U("/api/strategies/"+Z.value+"/profiles",{method:"POST",body:JSON.stringify({name:y,params:s})}).then(function(V){return V.json()}),await de()}catch(V){console.error("[research] 副本保存失败:",V)}}async function te(){const y=++g;if(Z.value)try{const s=await U("/api/strategies/"+Z.value+"/runs?limit=5").then(function(V){return V.json()});if(y!==g)return;E.value=Array.isArray(s)?s:[]}catch{E.value=[]}}async function he(){if(Z.value){O.value=!0;try{const y=await U("/api/strategies/"+Z.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:L.value,as_of:z.value||void 0})}).then(function(s){return s.json()});y&&y.status==="success"?te():alert("运行失败: "+(y.detail||JSON.stringify(y)))}catch(y){console.error("[research] 策略运行失败:",y),alert("运行失败: "+y.message)}finally{O.value=!1}}}async function Ne(){if(Z.value)try{const y=Object.keys(L.value).map(function(V){return encodeURIComponent(V)+"="+encodeURIComponent(L.value[V])}).join("&"),s=await U("/api/strategies/"+Z.value+"/ptrade-code?"+y).then(function(V){return V.json()});s&&s.code?k.value=s.code:alert("导出失败: "+(s.detail||JSON.stringify(s)))}catch(y){console.error("[research] PTrade 导出失败:",y),alert("导出失败: "+y.message)}}function Ie(){if(!k.value)return;const y=document.createElement("textarea");y.value=k.value,document.body.appendChild(y),y.select();try{document.execCommand("copy")}catch{}document.body.removeChild(y)}f(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(y){y==="research/research-overview"&&(re(),x(),ge(),Qe()),(y==="research/market-review"||y==="shortterm/market-review")&&!w.value&&x(),y==="research/quant-research"&&re(),y==="research/backtest-history"&&Me()},{immediate:!0});const Ue=a("mom20"),Ge=a(!1),ht=a(!1),st=a(null),Rt=a(null),Se=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],we=a('{"top_n":[10,20,30]}'),Ae=a(null),Re=a(""),Xe=a(!1),Ze=a(null);async function tt(){if(!Z.value){ElementPlus.ElMessage.warning("请先选择策略");return}let y;try{y=JSON.parse(we.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!y||Object.keys(y).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Xe.value=!0,Ae.value=null,Re.value="";try{const s=await fetch("/api/strategies/"+Z.value+"/sweep",{method:"POST",headers:J(),body:JSON.stringify({param_grid:y})}).then(function(V){return V.json()});s&&Array.isArray(s.results)?(Ae.value=s.results,Re.value="完成 "+s.count+" 组"+(s.data_degraded?" (数据不可达, 结果降级)":""),Ze.value=s.param_stability||null):Re.value=s&&s.detail||"扫描失败"}catch(s){console.error("[sweep]",s),Re.value="扫描失败: "+s.message}finally{Xe.value=!1}}async function xt(){const y=++g;Ge.value=!0;try{const s=await U("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:Z.value||"multi_factor",factor_key:Ue.value,params:L.value||{}})}).then(function(ne){return ne.json()}),V=s&&s.report?s.report.n1||{}:{};st.value=V}catch(s){console.error("[research] 因子IC分析失败:",s),alert("因子 IC 分析失败: "+s.message)}finally{y===g&&(Ge.value=!1)}}async function St(){const y=++g;ht.value=!0;try{const s=await U("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:Z.value||"multi_factor",factor_key:Ue.value,params:L.value||{}})}).then(function(V){return V.json()});s&&s.layers?Rt.value=s:alert("分层回测: "+(s.message||"无数据"))}catch(s){console.error("[research] 分层回测失败:",s),alert("分层回测失败: "+s.message)}finally{y===g&&(ht.value=!1)}}const pt=a(null),zt=a(!1);async function Kt(){const y=++g;zt.value=!0,pt.value=null;try{const s=await U("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:Z.value||"multi_factor",factor_key:Ue.value,params:L.value||{}})}).then(function(V){return V.json()});s&&s.detail?pt.value=s.detail:alert("因子详情: "+(s.message||"无数据"))}catch(s){console.error("[research] 因子详情失败:",s),alert("因子详情失败: "+s.message)}finally{y===g&&(zt.value=!1)}}const Jt=a([]),et=a(null),yt=a(null),Wt=a(null),gt=a(""),Ut=a(!1),_t=a(!1),Je=a(""),At=a(""),wt=a("");function J(){const y=localStorage.getItem("quant_token")||"";return y?{Authorization:"Bearer "+y,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ge(){const y=++g;try{const s=await fetch("/api/strategies/variants",{headers:J()}).then(function(V){return V.json()});if(y!==g)return;Jt.value=s&&s.data&&s.data.variants||[]}catch(s){console.error("[i3a] 加载 variants 失败:",s)}}async function at(){if(!Z.value){Je.value="请先在量化研究选择母本策略";return}_t.value=!0,Je.value="";try{const y=await fetch("/api/strategies/"+Z.value+"/clone",{method:"POST",headers:J(),body:JSON.stringify({name:(b.value||"").trim()||void 0,params:Object.assign({},L.value)})}).then(function(V){return V.json()});if(y&&y.detail){Je.value=String(y.detail);return}const s=y&&y.data;s&&s.sid&&(et.value=s.sid,Je.value="已复制为新策略: "+s.name,await ge(),await lt(s.sid))}catch(y){console.error("[i3a] 复制失败:",y),Je.value="复制失败: "+y.message}finally{_t.value=!1}}async function kt(y){et.value=y,Je.value="",gt.value="",await lt(y)}async function lt(y){try{const s=await fetch("/api/strategies/"+y+"/selection-spec",{headers:J()}).then(function(V){return V.json()});s&&s.data&&s.data.spec&&(yt.value=Object.assign({},s.data.spec),Wt.value=s.data.fields,At.value=(s.data.spec.industry_scope||[]).join(","),wt.value=(s.data.spec.market_cap_range||[]).join(","))}catch(s){console.error("[i3a] 加载 spec 失败:",s)}}async function It(){if(P.value=!0,!(!et.value||!yt.value))try{yt.value.industry_scope=At.value?At.value.split(/[,，]/).map(function(s){return s.trim()}).filter(Boolean):[],yt.value.market_cap_range=wt.value?wt.value.split(/[,，]/).map(Number).filter(function(s){return!isNaN(s)}):[];const y=await fetch("/api/strategies/"+et.value+"/selection-spec",{method:"PUT",headers:J(),body:JSON.stringify({spec:yt.value})}).then(function(s){return s.json()});y&&y.data&&y.data.spec&&(yt.value=y.data.spec,Je.value="SelectionSpec 已保存")}catch(y){console.error("[i3a] 保存 spec 失败:",y),Je.value="保存失败"}}async function ea(){if(!et.value){Je.value="请先选择/创建微调策略";return}_t.value=!0,Je.value="";try{const y=await fetch("/api/strategies/"+et.value+"/run-once",{method:"POST",headers:J(),body:"{}"}).then(function(s){return s.json()});Je.value=y&&y.detail?String(y.detail):"持仓已生成: "+(y&&y.data&&y.data.symbols||0)+" 只"}catch(y){console.error("[i3a] run-once 失败:",y),Je.value="生成持仓失败"}finally{_t.value=!1}}async function aa(){if(!et.value){Je.value="请先选择/创建微调策略";return}yt.value||await lt(et.value),Ut.value=!0,Je.value="";try{const y=await fetch("/api/strategies/"+et.value+"/ai-trade-code",{method:"POST",headers:J(),body:JSON.stringify({spec:yt.value})}).then(function(s){return s.json()});if(y&&y.detail){Je.value=String(y.detail);return}y&&y.data&&(gt.value=y.data.code||"",y.data.api_errors&&y.data.api_errors.length?Je.value="生成成功(含 API 校验告警 "+y.data.api_errors.length+" 条)":Je.value="AI 交易码已生成, 已通过矩阵内校验")}catch(y){console.error("[i3a] AI 交易码失败:",y),Je.value="AI 生成失败: "+y.message}finally{Ut.value=!1}}function na(){if(gt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(gt.value).then(function(){Je.value="代码已复制"});else{const y=document.createElement("textarea");y.value=gt.value,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y),Je.value="代码已复制"}}const ta=a(""),Qt=a(""),Ht=a([]),Nt=a(""),Gt=a(""),ft=a(""),u=a(null),$=a(!1),le=a(!1),Te=a(!1);function Ve(){const y=localStorage.getItem("quant_token")||"";return y?{Authorization:"Bearer "+y,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Qe(){const y=++g;try{const s=await fetch("/api/strategies/custom",{headers:Ve()}).then(function(V){return V.json()});if(y!==g)return;Ht.value=s&&s.data&&s.data.customs||[]}catch(s){console.error("[i3b] 加载自定义策略失败:",s)}}async function Oe(){if(!Qt.value.trim()){ft.value="请描述策略思路";return}$.value=!0,ft.value="";try{const y=await fetch("/api/strategies/custom",{method:"POST",headers:Ve(),body:JSON.stringify({name:ta.value.trim()||"自定义策略",prompt:Qt.value})}).then(function(s){return s.json()});if(y&&y.detail){ft.value=String(y.detail);return}y&&y.data&&(Gt.value=y.data.code||"",ft.value="AI 代写成功: "+y.data.sid+(y.data.api_errors&&y.data.api_errors.length?" (API 告警 "+y.data.api_errors.length+" 条)":" (校验通过)"),await Qe())}catch(y){console.error("[i3b] AI 代写失败:",y),ft.value="AI 代写失败: "+y.message}finally{$.value=!1}}async function rt(){if(Nt.value)try{const y=await fetch("/api/strategies/custom/"+Nt.value+"/code",{headers:Ve()}).then(function(s){return s.json()});y&&y.data&&(Gt.value=y.data.code||"",ft.value="")}catch(y){console.error("[i3b] 读取代码失败:",y)}}async function nt(){if(!Nt.value){ft.value="请先选择自定义策略";return}le.value=!0,ft.value="";try{const y=await fetch("/api/strategies/custom/"+Nt.value+"/backtest",{method:"POST",headers:Ve(),body:"{}"}).then(function(s){return s.json()});if(y&&y.detail){ft.value=String(y.detail);return}y&&y.data&&(u.value=y.data,ft.value="回测完成")}catch(y){console.error("[i3b] 回测失败:",y),ft.value="回测失败: "+y.message}finally{le.value=!1}}async function ct(){if(!Nt.value){ft.value="请先选择自定义策略";return}Te.value=!0,ft.value="";try{const y=await fetch("/api/strategies/custom/"+Nt.value+"/ai-optimize",{method:"POST",headers:Ve(),body:JSON.stringify({backtest:u.value})}).then(function(s){return s.json()});if(y&&y.detail){ft.value=String(y.detail);return}y&&y.data&&(Gt.value=y.data.code||"",ft.value="AI 优化完成"+(y.data.api_errors&&y.data.api_errors.length?" (API 告警 "+y.data.api_errors.length+" 条)":" (校验通过)"))}catch(y){console.error("[i3b] AI 优化失败:",y),ft.value="AI 优化失败: "+y.message}finally{Te.value=!1}}function Ot(){if(Gt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Gt.value).then(function(){ft.value="代码已复制"});else{const y=document.createElement("textarea");y.value=Gt.value,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y),ft.value="代码已复制"}}const Et=Vue.ref([]),D=Vue.ref(!1),fe=Vue.ref(!1),Le=Vue.ref(30);async function Me(){const y=++g;D.value=!0,fe.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},V=typeof s.authHeaders=="function"?s.authHeaders():{},ne=await fetch("/api/backtest/history?days="+Le.value,{headers:V}).then(function(Ce){return Ce.json()});if(y!==g)return;Et.value=ne&&ne.data||[]}catch(s){console.error("[backtest] 回测历史加载失败:",s),fe.value=!0}finally{y===g&&(D.value=!1)}}const ze=Vue.ref([]),He=Vue.ref(!1),mt=Vue.ref(!1),Mt=Vue.ref(""),it=Vue.ref([]),Bt=Vue.ref(""),qa=Vue.ref([]),ia=Vue.ref(!1),wa=Vue.ref(!1),oa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function Pa(y){return oa[y]||y||"—"}function ra(y){d&&d.navigateTo&&d.navigateTo("shortterm",y)}function Da(){d.currentSubPage.value="research-history",ca()}async function ca(){const y=++g;He.value=!0,mt.value=!1;try{const s=window.__quantModules&&window.__quantModules.core||{},V=typeof s.authHeaders=="function"?s.authHeaders():{},ne=Mt.value?"?type="+encodeURIComponent(Mt.value):"",Ce=await fetch("/api/strategies/research-history"+ne,{headers:V}).then(function(qe){return qe.json()});if(y!==g)return;ze.value=Ce&&Ce.items||[]}catch(s){console.error("[research-history] 加载失败:",s),mt.value=!0}finally{y===g&&(He.value=!1)}}async function $t(){const y=++g;wa.value=!0;try{const s=window.__quantModules&&window.__quantModules.core||{},V=typeof s.authHeaders=="function"?s.authHeaders():{},ne=Mt.value?"?type="+encodeURIComponent(Mt.value):"",Ce=await fetch("/api/strategies/research-history/export"+ne,{headers:V});if(!Ce.ok)throw new Error("HTTP "+Ce.status);const qe=await Ce.blob(),Tt=URL.createObjectURL(qe),$e=document.createElement("a");$e.href=Tt,$e.download="research_history.csv",document.body.appendChild($e),$e.click(),document.body.removeChild($e),URL.revokeObjectURL(Tt)}catch(s){console.error("[research-history] 导出失败:",s)}finally{y===g&&(wa.value=!1)}}function ka(y){const s=it.value.indexOf(y);s>=0?it.value.splice(s,1):it.value.length<10&&it.value.push(y)}function ga(y){Bt.value=Bt.value===y?"":y}async function Ra(){const y=++g,s=it.value;if(!(s.length<2)){ia.value=!0;try{const V=window.__quantModules&&window.__quantModules.core||{},ne=typeof V.authHeaders=="function"?V.authHeaders():{},Ce=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},ne),body:JSON.stringify({ids:s})}).then(function(qe){return qe.json()});qa.value=Ce&&Ce.items||[]}catch(V){console.error("[research-history] 对比失败:",V)}finally{y===g&&(ia.value=!1)}}}async function za(y){try{const s=window.__quantModules&&window.__quantModules.core||{},V=typeof s.authHeaders=="function"?s.authHeaders():{},ne=await fetch("/api/strategies/research-history/"+y,{method:"DELETE",headers:V}).then(function(Ce){return Ce.json()});if(ne&&ne.deleted){ze.value=ze.value.filter(function(qe){return qe.id!==y});const Ce=it.value.indexOf(y);Ce>=0&&it.value.splice(Ce,1)}}catch(s){console.error("[research-history] 删除失败:",s)}}return{...d,strategyManageMode:c,openStrategyManage:_,btHistory:Et,btHistoryLoading:D,btHistoryError:fe,btHistoryDays:Le,loadBtHistory:Me,researchHistory:ze,researchHistoryLoading:He,researchHistoryError:mt,researchHistoryType:Mt,researchHistorySelected:it,researchDetailId:Bt,researchCompareRows:qa,researchCompareLoading:ia,researchTypeLabel:Pa,goShortterm:ra,openResearchHistory:Da,loadResearchHistory:ca,researchExportLoading:wa,exportResearchHistory:$t,toggleResearchSelect:ka,toggleResearchDetail:ga,runResearchCompare:Ra,deleteResearchHistory:za,marketReviews:l,marketReviewLoading:S,marketReviewError:i,selectedReviewDate:w,marketReviewDetail:h,marketReviewDetailLoading:C,marketReviewDetailError:R,loadMarketReviews:x,openMarketReview:o,toggleMarketReviewDate:n,backToMarketReviewList:A,loadMarketReviewDetail:F,marketReviewChgClass:G,marketReviewChgText:se,marketReviewSrcEntries:I,fmtPct:v,fmtEmotion:N,strategies:T,strategiesLoading:B,strategiesError:K,strategiesErrorText:ie,strategiesWarn:Q,activeStrategyId:Z,activeStrategy:M,paramValues:L,strategyRunning:O,ptradeCode:k,strategyRuns:E,savingProfile:p,variantSaving:P,loadStrategies:re,onStrategyChange:pe,runActiveStrategy:he,exportActivePtradeCode:Ne,copyPtradeCode:Ie,profiles:ce,profileSelect:W,profileName:b,loadProfiles:de,saveProfile:Y,applyProfile:oe,deleteProfile:De,govEnabled:r,govSchedule:m,govUniverse:H,govRunning:ue,lastHoldings:X,loadGov:ke,updateGov:_e,runOnceActive:ee,openLastHoldings:xe,cloneStrategy:Pe,govShowCalendar:q,factorKey:Ue,factorIcLoading:Ge,factorLayerLoading:ht,factorIcReport:st,factorLayerResult:Rt,factorOptions:Se,runFactorIc:xt,runFactorLayer:St,factorDetail:pt,factorDetailLoading:zt,runFactorDetail:Kt,variants:Jt,variantSelected:et,variantSpec:yt,specFields:Wt,aiCode:gt,aiCodeLoading:Ut,variantBusy:_t,variantMsg:Je,loadVariants:ge,cloneNewStrategy:at,selectVariant:kt,loadVariantSpec:lt,saveVariantSpec:It,runVariantOnce:ea,genVariantAiCode:aa,copyVariantCode:na,customName:ta,customPrompt:Qt,customs:Ht,customSelected:Nt,customCode:Gt,customMsg:ft,customBtResult:u,customGenLoading:$,customBtLoading:le,customOptLoading:Te,loadCustoms:Qe,genCustomCode:Oe,loadCustomCode:rt,runCustomBacktest:nt,runCustomOptimize:ct,copyCustomCode:Ot,sweepGrid:we,sweepResult:Ae,sweepMessage:Re,sweepLoading:Xe,sweepStability:Ze,runSweep:tt}}}})();(function(){const{inject:a,ref:e,onMounted:f,computed:t,nextTick:d}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const p=a("qcState");if(!p)return{};const P=p.currentPage,g=p.currentSubPage,c=e(""),_=e(null),l=e(!1),S=e(!1),i=e("数据加载失败"),w=e("请检查服务后重试"),h=e(null),C=e(null),R=e(!1),x=e(!1),o=e("数据加载失败"),n=e("请检查服务后重试"),v=e(null),N=e(1),A=50,F=t(function(){const D=C.value||[];if(D.length<=200)return D;const fe=(N.value-1)*A;return D.slice(fe,fe+A)}),G=e(null),se=e(!1),I=e(!1),T=e("数据加载失败"),B=e("请检查服务后重试"),K=e([]),ie=e(!1);async function Q(){ie.value=!0;try{const D=await Pe("/api/shortterm/dates/summary",!1);D&&D.success&&(K.value=D.dates||[])}catch{K.value=[]}finally{ie.value=!1}}function Z(D){D!==c.value&&(c.value=D,lt(!0))}const L=e("行业资金流"),O=e("今日"),z=e(""),k=e(null),E=e(1),ce=e(!1),W=e(!1),b=e("数据加载失败"),r=e("请检查服务后重试"),q=e(""),m=e(null),H=e(!1),ue=e(null),X=e(!1),M=e(!1),U=e(""),re=e(""),pe=e(!1);function de(){const D=localStorage.getItem("quant_token")||"";return D?{Authorization:"Bearer "+D,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const Y={},oe=[],De=50,ke=60*1e3;let _e=0,ee=0,xe=0;function Pe(D,fe){const Le=Date.now(),Me=Y[D];return!fe&&Me&&Le-Me.ts<ke?Promise.resolve(Me.data):fetch(D,{headers:de()}).then(function(ze){return ze.json()}).then(function(ze){if(Y[D]||oe.push(D),Y[D]={ts:Date.now(),data:ze},oe.length>De){const He=oe.shift();delete Y[He]}return ze})}async function ae(D){const fe=++_e;l.value=!0,S.value=!1;try{const Le="/api/shortterm/pools"+(c.value?"?date="+c.value:""),Me=await Pe(Le,D);if(fe!==_e)return;Me&&Me.success?(_.value=Me,d(ge)):Me&&Me.detail?(S.value=!0,i.value=String(Me.detail),w.value="请先登录后再查看"):(S.value=!0,i.value="数据加载失败",w.value="请检查服务后重试")}catch{if(fe!==_e)return;S.value=!0,i.value="数据加载失败",w.value="请检查服务后重试"}finally{fe===_e&&(l.value=!1)}}async function te(D){const fe=++_e;R.value=!0,x.value=!1;try{const Le="/api/shortterm/lhb"+(c.value?"?date="+c.value:""),Me=await Pe(Le,D);if(fe!==_e)return;Me&&Me.success?(C.value=Array.isArray(Me.rows)?Me.rows:null,v.value=Me.available===!1&&Me.reason||null,N.value=1):Me&&Me.detail?(x.value=!0,o.value=String(Me.detail),n.value="请先登录后再查看"):(x.value=!0,o.value="数据加载失败",n.value="请检查服务后重试")}catch{if(fe!==_e)return;x.value=!0,o.value="数据加载失败",n.value="请检查服务后重试"}finally{fe===_e&&(R.value=!1)}}const he=t(function(){const D=_.value&&_.value.ladder&&_.value.ladder.tiers;return!D||!Object.keys(D).length?"—":Object.keys(D).sort(function(fe,Le){return fe-Le}).map(function(fe){return fe+"板:"+D[fe]}).join(" ")}),Ne=t(function(){const D=_.value&&_.value.zt||[];return h.value?D.filter(function(fe){return fe.boards===h.value}):D});function Ie(){h.value=null}const Ue=t(function(){const D=G.value&&G.value.emotion&&G.value.emotion.money_effect;return!D||!D.available?"—":D.source==="settled"?"定稿记录":D.source==="realtime"?D.partial?"实时(样本不全)":"实时":"—"}),Ge=t(function(){const D=G.value&&G.value.emotion&&G.value.emotion.promotion&&G.value.emotion.promotion.tiers&&G.value.emotion.promotion.tiers["1进2"];return D?D.rate:null}),ht=t(function(){const D=G.value&&G.value.emotion&&G.value.emotion.sentiment_cycle;return D&&D.available&&D.current_score!=null?D.current_score.toFixed(2):"—"}),st=t(function(){const D=G.value&&G.value.emotion&&G.value.emotion.sentiment_cycle;return!D||!D.available?"—":(D.trend||"—")+(D.day_n!=null?" · 距低谷"+D.day_n+"天":"")});t(function(){const D=G.value&&G.value.emotion;if(!D)return"";const fe=[];for(const Le of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Me=D[Le];Me&&Me.available===!1&&Me.reason&&fe.push(String(Me.reason).replace(/^[[^]]*]s*/,""))}return fe.join("；")}),t(function(){const D=G.value&&G.value.facts;if(!D)return"";const fe=[];for(const Le of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Me=D[Le];Me&&Me.available===!1&&Me.reason&&fe.push(String(Me.reason).replace(/^[[^]]*]s*/,""))}return fe.join("；")});function Rt(D){return D==null||isNaN(D)?"—":(D*100).toFixed(0)+"%"}function Se(D,fe){return D==null?"—":(typeof D=="number"?Math.round(D*100)/100:D)+(fe||"")}function we(D){return"tag-chip mr-4"}function Ae(D){return D==null?"":D>0?"is-rise":D<0?"is-fall":""}function Re(D){return D==="机构"?"is-institution":D==="游资"?"is-hotmoney":D==="主力"?"is-main":""}const Xe=t(function(){const D=G.value&&G.value.session_status;if(!D)return"—";const fe=G.value.date;return fe===D.latest_session&&D.settled?"已收盘":fe===D.today&&D.is_trade_day&&!D.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Ze=t(function(){const D=G.value&&G.value.session_status;if(!D)return"";const fe=G.value.date;return fe===D.latest_session&&D.settled?"is-institution":fe===D.today&&D.is_trade_day&&!D.settled?"is-main":""});function tt(D){D&&D.ts_code&&p&&p.showStockDetail&&p.showStockDetail(D.ts_code)}const xt=t(function(){return(C.value||[]).filter(function(D){return(D.tags||[]).indexOf("机构")>=0}).reduce(function(D,fe){return D+(fe.net_buy||0)},0)}),St=t(function(){return(C.value||[]).filter(function(D){return(D.tags||[]).indexOf("游资")>=0}).length}),pt=t(function(){const D=(k.value||[]).filter(function(fe){return fe.main_net_inflow!=null});return D.length?D.reduce(function(fe,Le){return fe.main_net_inflow>=Le.main_net_inflow?fe:Le}):null}),zt=t(function(){const D=pt.value;return D?D.name:"—"}),Kt=t(function(){const D=pt.value;return D?D.main_net_inflow:null}),Jt=t(function(){return q.value||"东财"}),et=t(function(){const D=(z.value||"").trim(),fe=k.value||[];return D?fe.filter(function(Le){return Le.name&&String(Le.name).indexOf(D)>=0}):fe});function yt(D){z.value=D||"",p&&p.currentSubPage&&(p.currentSubPage.value="sector")}const Wt=t(function(){const D=et.value;if(D.length<=200)return D;const fe=(E.value-1)*A;return D.slice(fe,fe+A)}),gt=["09:25","09:35","10:00","11:30","14:00","15:00"],Ut=t(function(){const D={};return(ue.value||[]).forEach(function(fe){D[fe.slot]=!0}),D});function _t(D){return Ut.value[D]?"is-done":D===Je.value?"is-current":"is-empty"}const Je=t(function(){const D=new Date,fe=(D.getHours()<10?"0":"")+D.getHours(),Le=(D.getMinutes()<10?"0":"")+D.getMinutes(),Me=fe+":"+Le;for(var ze=0;ze<gt.length;ze++)if(Me===gt[ze])return gt[ze];for(var He=0;He<gt.length-1;He++){var mt=gt[He],Mt=new Date;Mt.setHours(Number(mt.split(":")[0]),Number(mt.split(":")[1]),0,0);var it=new Date(Mt.getTime()+8*6e4);if(D>=Mt&&D<=it)return mt}return""}),At=t(function(){const D=new Date,fe=Je.value;if(fe)return"当前处于快照窗口 "+fe+" (前后 8 分钟) — 可采集";const Le=D.getHours(),Me=D.getMinutes();let ze="";for(let He=0;He<gt.length;He++){const mt=gt[He].split(":");if(Number(mt[0])>Le||Number(mt[0])===Le&&Number(mt[1])>Me){ze=gt[He];break}}return ze?"下一快照时点 "+ze+" — 非窗口期不可采集":"今日快照时点已全部结束"}),wt=e(""),J=e("info");function ge(){const D=_.value&&_.value.ladder&&_.value.ladder.tiers;if(!D||!Object.keys(D).length)return;const fe=window.__quantModules&&window.__quantModules.charts;if(!fe||!fe.renderSimpleChartTo)return;const Le=h.value,Me=fe.renderSimpleChartTo("shorttermLadderChart",function(){const ze=Object.keys(D).sort(function(He,mt){return Number(He)-Number(mt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:ze.map(function(He){return He+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(He){return Le&&Number(ze[He.dataIndex])===Le?"var(--color-accent)":"var(--chart-split)"}},data:ze.map(function(He){return D[He]})}]}},{key:"shortterm-ladder"});Me&&Me.off&&(Me.off("click"),Me.on("click",function(ze){if(!ze||!ze.name)return;const He=parseInt(ze.name,10);isNaN(He)||(h.value=h.value===He?null:He)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ge);function at(D){if(D==null)return"—";const fe=Math.abs(D);return fe>=1e8?(D/1e8).toFixed(2)+"亿":fe>=1e4?(D/1e4).toFixed(0)+"万":D.toFixed(0)}function kt(D){return D==null?"—":(D>=0?"+":"")+D.toFixed(2)+"%"}async function lt(D){const fe=++ee;se.value=!0,I.value=!1;try{const Le="/api/shortterm/overview"+(c.value?"?date="+c.value:""),Me=await Pe(Le,D);if(fe!==ee)return;Me&&Me.success?G.value=Me:Me&&Me.detail?(I.value=!0,T.value=String(Me.detail),B.value="请先登录后再查看"):(I.value=!0,T.value="数据加载失败",B.value="请检查服务后重试")}catch{if(fe!==ee)return;I.value=!0,T.value="数据加载失败",B.value="请检查服务后重试"}finally{fe===ee&&(se.value=!1)}}async function It(D){const fe=++_e;ce.value=!0,W.value=!1;try{const Le="/api/shortterm/sector-flow?indicator="+encodeURIComponent(O.value)+"&sector_type="+encodeURIComponent(L.value),Me=await Pe(Le,D);if(fe!==_e)return;Me&&Me.success&&Me.available?(k.value=Me.rows||[],q.value=Me.source||(Me.note?"同花顺":"东财"),E.value=1):Me&&Me.reason?(W.value=!0,b.value="数据加载失败",r.value=String(Me.reason).replace(/^\[[^\]]*\]\s*/,"")):Me&&Me.detail?(W.value=!0,b.value=String(Me.detail),r.value="请先登录后再查看"):(W.value=!0,b.value="数据加载失败",r.value="请检查服务后重试")}catch{if(fe!==_e)return;W.value=!0,b.value="数据加载失败",r.value="请检查服务后重试"}finally{fe===_e&&(ce.value=!1)}}async function ea(D){const fe=++xe;try{const Le="/api/shortterm/review"+(c.value?"?date="+c.value:""),Me=await Pe(Le,D);if(fe!==xe)return;Me&&Me.success&&(m.value=Me.review||null)}catch{}}async function aa(){H.value=!0;try{const D="/api/shortterm/review"+(c.value?"?date="+c.value:""),fe=await fetch(D,{method:"POST",headers:de()}).then(function(Le){return Le.json()});fe&&fe.success&&(m.value=fe,Y[D]={ts:Date.now(),data:fe})}catch{}finally{H.value=!1}}async function na(){const D=U.value.trim();if(D){pe.value=!0,re.value="";try{const Le=await fetch("/api/shortterm/review/chat",{method:"POST",headers:de(),body:JSON.stringify({date:overviewDate.value,question:D})}).then(function(Me){return Me.json()});re.value=Le.answer||"[无回复]"}catch{re.value="[发送失败]"}finally{pe.value=!1}}}async function ta(D){const fe=++_e;X.value=!0;try{const Le="/api/shortterm/intraday"+(c.value?"?date="+c.value:""),Me=await Pe(Le,D);if(fe!==_e)return;Me&&Me.success&&(ue.value=Me.snapshots||[])}catch{}finally{fe===_e&&(X.value=!1)}}async function Qt(){M.value=!0;try{const D="/api/shortterm/intraday/snapshot"+(c.value?"?date="+c.value:""),fe=await fetch(D,{method:"POST",headers:de()}).then(function(Le){return Le.json()});fe&&fe.success?(fe.accepted?(wt.value="已采集 "+fe.slot+" 快照"+(fe.pools_available&&!fe.pools_available.zt?" (池源部分不可用)":""),J.value="ok"):(wt.value="⏱ "+(fe.reason||"非快照时点"),J.value="warn"),ta()):wt.value="采集失败, 请稍后重试"}catch{wt.value="采集失败, 请稍后重试"}finally{M.value=!1}}function Ht(){return Pe("/api/shortterm/latest-session",!1).then(function(D){D&&D.date&&(c.value||(c.value=D.date))}).catch(function(){})}function Nt(){const D=g.value;D==="ztpool"?ae():D==="lhb"?te():D==="overview"?(lt(),ea()):D==="sector"?It():D==="intraday"&&ta()}function Gt(){const D=c.value?"?date="+c.value:"";["/api/shortterm/overview"+D,"/api/shortterm/pools"+D,"/api/shortterm/lhb"+D].forEach(function(Le){Pe(Le,!1).catch(function(){})})}function ft(){const D=g.value;D==="ztpool"?ae(!0):D==="lhb"?te(!0):D==="overview"?(lt(!0),ea(!0)):D==="sector"?It(!0):D==="intraday"&&ta(!0)}f(function(){Ht(),Nt(),Gt(),nt(),Q()}),Vue.watch(function(){return g.value},function(D){Nt(),D==="overview"&&nt()});const u=window.QuantOnboarding,$=e(!1),le=e(u?u.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),Te=t(function(){return u&&u.shorttermTourSteps()[le.value.stepIndex]||{key:"",title:"",desc:""}}),Ve=t(function(){return u?u.shorttermTourProgress(le.value):{done:0,total:3,pct:0}}),Qe=t(function(){return le.value.stepIndex>=2});function Oe(){if(u){var D=null;try{D=localStorage.getItem("qc_shortterm_tour")}catch{}if(D){var fe=u.parseState(D);fe&&(le.value=fe)}}}function rt(){if(u){var D=JSON.stringify(le.value);try{localStorage.setItem("qc_shortterm_tour",D)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:D}})}).catch(function(){})}catch{}}}function nt(){window.__quantGuideModalsEnabled===!0&&u&&g.value==="overview"&&(Oe(),u.shorttermTourShouldShow(le.value)&&($.value=!0))}function ct(){le.value=u.shorttermTourNext(le.value),rt()}function Ot(){le.value=u.shorttermTourComplete(le.value),rt(),$.value=!1}function Et(){le.value=u.shorttermTourDismiss(le.value),rt(),$.value=!1}return{currentPage:P,currentSubPage:g,shortDate:c,pools:_,poolLoading:l,poolError:S,ztBoardFilter:h,filteredZt:Ne,clearBoardFilter:Ie,lhbRows:C,lhbLoading:R,lhbError:x,lhbReason:v,lhbPageRows:F,lhbPage:N,overview:G,overviewLoading:se,overviewError:I,dateList:K,dateListLoading:ie,loadDateList:Q,pickDate:Z,sectorType:L,sectorIndicator:O,sectorKeyword:z,sectorRows:k,filteredSectorRows:et,sectorPageRows:Wt,sectorPage:E,sectorLoading:ce,sectorError:W,sectorFlowSource:q,PAGE_SIZE:A,gotoSector:yt,review:m,reviewRunning:H,intradaySnapshots:ue,intradayLoading:X,intradayCollecting:M,intradaySlots:gt,intradayMsg:wt,slotClass:_t,intradayStatus:At,chatQuestion:U,chatAnswer:re,chatLoading:pe,loadPools:ae,loadLhb:te,loadOverview:lt,loadSectorFlow:It,loadReview:ea,runReview:aa,sendChat:na,loadIntraday:ta,collectSnapshot:Qt,refreshCurrent:ft,ladderText:he,fmtAmount:at,fmtPct:kt,riseFall:Ae,tagClass:Re,openStock:tt,lhbInstitutionNetBuy:xt,lhbHotMoneyCount:St,sectorTopName:zt,sectorTopInflow:Kt,sectorSource:Jt,moneySource:Ue,promotion1to2:Ge,cycleScore:ht,cycleTrend:st,pct:Rt,fmtCond:Se,verdictClass:we,sessionStatusText:Xe,sessionStatusClass:Ze,shorttermTourVisible:$,shorttermTourState:le,shorttermTourStep:Te,shorttermTourProg:Ve,shorttermTourIsLast:Qe,shorttermTourNext:ct,shorttermTourFinish:Ot,shorttermTourSkip:Et}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(g,c,_,l,S){var i=_>0?_:1,w=typeof S=="number"&&S>=0?S:a,h=Math.max(0,l),C=Math.max(0,g),R=Math.max(0,c),x=Math.max(0,Math.floor(C/i)-w),o=Math.min(h,Math.ceil((C+R)/i)+w);return{startIndex:x,endIndex:o}}function f(g,c){return Math.max(0,g||0)*(c>0?c:0)}function t(g,c,_,l,S){var i=g||[],w=e(c,_,l,i.length,S),h=i.slice(w.startIndex,w.endIndex);return{visible:h,startIndex:w.startIndex,endIndex:w.endIndex,offsetY:w.startIndex*(l>0?l:1),totalHeight:f(i.length,l)}}function d(g,c){if(g){if(g.code!=null)return g.code;if(g.id!=null)return g.id;if(g.ts_code!=null)return g.ts_code}return c}function p(g,c,_){var l=g||[];if(!l.length)return c>0?c:1;for(var S=Math.min(_||50,l.length),i=0,w=0,h=0;h<S;h++){var C=l[h]&&l[h].rowHeight;typeof C=="number"&&C>0&&(i+=C,w++)}return w?i/w:c>0?c:1}function P(g,c,_,l,S){var i=e(g,c,_,l,S),w=Math.max(0,l);return w?(i.endIndex-i.startIndex)/w:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:f,sliceVisible:t,getRowKey:d,estimateDynamicRowHeight:p,renderedRatio:P}});(function(){const{ref:a,computed:e,onMounted:f,onBeforeUnmount:t}=Vue,d=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:d.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(p){const P=a(null),g=a(0),c=a(400),_=e(()=>(d.computeVisibleRange||function(n,v,N,A,F){const G=N>0?N:1,se=F>=0?F:8,I=Math.max(0,A);return{startIndex:Math.max(0,Math.floor(n/G)-se),endIndex:Math.min(I,Math.ceil((n+v)/G)+se)}})(g.value,c.value,p.rowHeight,p.items.length,p.buffer)),l=e(()=>p.items.length*p.rowHeight),S=e(()=>_.value.startIndex),i=e(()=>_.value.endIndex),w=e(()=>p.items.slice(S.value,i.value));function h(){P.value&&(g.value=P.value.scrollTop)}function C(){P.value&&(c.value=P.value.clientHeight||400)}function R(o,n){return d.getRowKey?d.getRowKey(o,n):o&&o.code!=null?o.code:o&&o.id!=null?o.id:n}let x=null;return f(()=>{C(),P.value&&typeof ResizeObserver<"u"&&(x=new ResizeObserver(()=>C()),x.observe(P.value))}),t(()=>{x&&x.disconnect()}),{scrollEl:P,totalHeight:l,startIndex:S,endIndex:i,visibleItems:w,onScroll:h,keyOf:R}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,f=60,t=500,d=10,p=88,P=350;function g(n,v,N,A,F){F=F||{};var G=typeof F.threshold=="number"?F.threshold:a,se=typeof F.bias=="number"?F.bias:e,I=N-n,T=A-v;return Math.abs(I)<G||Math.abs(I)<Math.abs(T)*se?"none":I<0?"left":"right"}function c(n,v,N){N=N||{};var A=typeof N.threshold=="number"?N.threshold:f;return v-n>=A}function _(n,v){v=v||{};var N=typeof v.threshold=="number"?v.threshold:t;return n>=N}var l=!1;function S(n,v){return n&&typeof n.closest=="function"?n.closest(v):null}function i(n){if(!n)return"";var v=n.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(v){var N=v.getAttribute&&v.getAttribute("data-copy-code");if(N)return N.trim();var A=(v.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(A)return A[0]}var F=n.getAttribute&&n.getAttribute("data-copy-code");return F?F.trim():""}function w(n){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(function(){return!0}).catch(function(){return h(n)}):Promise.resolve(h(n))}function h(n){try{var v=document.createElement("textarea");return v.value=n,v.style.position="fixed",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),document.body.removeChild(v),!0}catch{return!1}}function C(n){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(n)}function R(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function x(){var n=null,v=null,N=null;function A(){v&&(v.timer&&clearTimeout(v.timer),v=null)}function F(ie){N={el:ie,until:Date.now()+P}}function G(ie){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(Q){Q!==ie&&Q.classList.remove("swipe-open")}),n&&n.el!==ie&&(n=null)}function se(ie){var Q=ie.touches&&ie.touches[0];if(Q){var Z=S(ie.target,".swipe-reveal");Z&&(n={el:Z,x:Q.clientX,y:Q.clientY,moved:!1},ie.stopPropagation());var L=S(ie.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");L&&(A(),v={el:L,x:Q.clientX,y:Q.clientY,timer:setTimeout(function(){var O=i(L);v=null,O&&(F(L),w(O).then(function(){R(),C("已复制代码 "+O)}))},t)})}}function I(ie){if(n){var Q=ie.touches&&ie.touches[0];if(Q){var Z=Q.clientX-n.x,L=Q.clientY-n.y;if(Math.abs(Z)>8&&Math.abs(Z)>Math.abs(L)*1.2){ie.cancelable&&ie.preventDefault(),n.moved=!0;var O=n.el.querySelector(".swipe-reveal-main")||n.el,z=Math.max(-p,Math.min(0,Z));O.style.transition="none",O.style.transform="translateX("+z+"px)",ie.stopPropagation()}if(v){var k=Q.clientX-v.x,E=Q.clientY-v.y;(Math.abs(k)>d||Math.abs(E)>d)&&A()}}}}function T(ie){if(A(),!!n){var Q=n.el,Z=ie.changedTouches&&ie.changedTouches[0],L=n.x,O=n.y,z="none";Z&&(z=g(L,O,Z.clientX,Z.clientY));var k=n.moved;n=null;var E=Q.querySelector(".swipe-reveal-main")||Q;E.style.transform="",E.style.transition="",z==="left"?(G(Q),Q.classList.add("swipe-open"),F(Q)):(z==="right"||k)&&Q.classList.remove("swipe-open"),ie.stopPropagation()}}function B(){A(),n=null}function K(ie){if(N&&Date.now()<N.until){var Q=N.el.contains(ie.target)||ie.target===N.el,Z=ie.target.closest&&ie.target.closest(".swipe-reveal-actions");Q&&!Z&&(ie.preventDefault(),ie.stopPropagation(),N=null)}}document.addEventListener("touchstart",se,!0),document.addEventListener("touchmove",I,!0),document.addEventListener("touchend",T,!0),document.addEventListener("touchcancel",B,!0),document.addEventListener("click",K,!0)}function o(){l||typeof document>"u"||(l=!0,x())}return{judgeSwipe:g,judgePullToRefresh:c,judgeLongPress:_,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:f,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:d,REVEAL_WIDTH:p,initGestures:o,_codeFromRow:i}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function f(p){return a[p]||a.empty}function t(){const p=[];for(const P of e){const g=a[P];g.title||p.push(P+".title"),P!=="loading"&&!g.icon&&p.push(P+".icon"),typeof g.retry!="boolean"&&p.push(P+".retry"),typeof g.skeleton!="boolean"&&p.push(P+".skeleton")}return{ok:p.length===0,errors:p}}const d={VARIANTS:a,KEYS:e,resolve:f,validate:t};typeof window<"u"&&(window.QuantStatePanel=d),typeof je<"u"&&je.exports&&(je.exports=d)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(f){const t=a(()=>typeof e.resolve=="function"?e.resolve(f.type):{}),d=a(()=>f.icon||t.value.icon||""),p=a(()=>f.title||t.value.title||""),P=a(()=>f.desc||t.value.desc||""),g=a(()=>!!t.value.retry),c=a(()=>/^[a-z][a-z0-9-]*$/.test(String(d.value||"")));return{icon:d,title:p,desc:P,retryable:g,isIconName:c}}}})();(function(a,e){typeof je=="object"&&je.exports?je.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(n){return String(n||"").trim().toLowerCase()}function e(n,v){if(!n)return!0;const N=n.split(/\s+/).filter(Boolean);if(!N.length)return!0;const A=String(v||"").toLowerCase();return N.every(function(F){return A.indexOf(F)!==-1})}function f(){return{visible:!1,query:"",activeIndex:0}}function t(n,v){return v===void 0&&(v=!n.visible),n.visible=v,v&&(n.query="",n.activeIndex=0),n.visible}function d(n,v,N){const A=a(n);if(!v||!v.length)return[];const F=[];return v.forEach(function(G){const se=e(A,G.name)||e(A,G.key),I=(G.subPages||[]).filter(function(T){const B=N&&N[T]||T;return e(A,B)||e(A,T)});se&&F.push({type:"menu",menuKey:G.key,subPage:G.subPages&&G.subPages[0]||"",label:G.name,subLabel:"页面",icon:G.icon||"file-text"}),I.forEach(function(T){F.push({type:"menu",menuKey:G.key,subPage:T,label:N&&N[T]||T,subLabel:G.name,icon:G.icon||"file-text"})})}),F.slice(0,8)}function p(n,v){const N=a(n);return!v||!v.length?[]:v.filter(function(A){return!!(!N||e(N,A.label)||e(N,A.key)||A.keywords&&e(N,A.keywords))}).slice(0,8)}function P(n,v){const N=a(n);return!N||!v||!v.length?[]:v.filter(function(A){return e(N,A.code)||e(N,A.name)}).slice(0,8).map(function(A){return{type:"stock",code:A.code,name:A.name,label:A.name,subLabel:A.code,icon:"trending-up"}})}function g(n,v,N){const A=[],F=[];return N&&N.length&&(A.push({key:"stock",label:"股票",items:N}),F.push.apply(F,N)),n&&n.length&&(A.push({key:"menu",label:"菜单",items:n}),F.push.apply(F,n)),v&&v.length&&(A.push({key:"command",label:"指令",items:v}),F.push.apply(F,v)),{groups:A,flat:F}}function c(n,v,N){if(v<=0)return 0;const A=((n||0)+N)%v;return A<0?v-1:A}function _(n,v,N,A){const F=d(n,v,N).map(function(se){return{type:"menu",menuKey:se.menuKey,subPage:se.subPage,label:se.label,subLabel:se.subLabel,icon:se.icon,iconName:se.icon,value:se.icon+" "+se.label+" · "+se.subLabel}}),G=p(n,A||[]).map(function(se){return{type:"command",key:se.key,label:se.label,icon:se.icon,iconName:se.icon,subLabel:"指令",value:se.icon+" "+se.label}});return F.concat(G)}function l(n){return n?n.type==="menu"?{action:"menu",menuKey:n.menuKey,subPage:n.subPage}:n.type==="command"?{action:"command",key:n.key}:n.type==="sector"?{action:"sector",name:n.name}:n.type==="strategy"?{action:"strategy",id:n.id,name:n.name}:n.type==="stock"||n.code&&n.name?{action:"stock",code:n.code,name:n.name}:null:null}const S=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var i={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function w(n){if(!n||typeof n!="string")return null;var v=n.split("+").map(function(F){return F.trim()}).filter(Boolean);if(!v.length)return null;var N=v.pop().toLowerCase();if(!N)return null;var A={ctrl:!1,alt:!1,shift:!1,meta:!1};return v.forEach(function(F){var G=F.toLowerCase();i.ctrl.indexOf(G)!==-1?A.ctrl=!0:i.alt.indexOf(G)!==-1?A.alt=!0:i.shift.indexOf(G)!==-1?A.shift=!0:i.meta.indexOf(G)!==-1&&(A.meta=!0)}),{ctrl:A.ctrl,alt:A.alt,shift:A.shift,meta:A.meta,key:N}}function h(n,v){if(!n||!v)return!1;var N=String(v.key||v.code||"").toLowerCase();return n.key!==N?!1:n.ctrl===!!v.ctrlKey&&n.alt===!!v.altKey&&n.shift===!!v.shiftKey&&n.meta===!!v.metaKey}function C(n){if(!n)return"";var v=[];return n.ctrl&&v.push("Ctrl"),n.alt&&v.push("Alt"),n.shift&&v.push("Shift"),n.meta&&v.push("Meta"),v.push(n.key.toUpperCase()),v.join("+")}function R(){var n={};return{register:function(v){if(!v||!v.key)throw new Error("命令 key 必填");if(n[v.key])throw new Error("命令重复注册: "+v.key);return n[v.key]=Object.assign({},v),v.key},list:function(){return Object.keys(n).map(function(v){return n[v]})},get:function(v){return n[v]||null},remove:function(v){delete n[v]},has:function(v){return!!n[v]},count:function(){return Object.keys(n).length}}}function x(){var n={},v={};return{register:function(N,A,F){var G=w(N);if(!G)throw new Error("无效快捷键: "+N);var se=C(G);if(n[se])throw new Error("快捷键冲突: "+N);if(A!=null&&v[A]!==void 0)throw new Error("动作重复绑定: "+A);return n[se]={combo:N,action:A,description:F||"",parsed:G},v[A]=se,se},resolve:function(N){for(var A in n)if(h(n[A].parsed,N))return n[A].action;return null},list:function(){return Object.keys(n).map(function(N){return n[N]})},unregister:function(N){var A=C(w(N));n[A]&&(delete v[n[A].action],delete n[A])},count:function(){return Object.keys(n).length}}}function o(){var n=x();return n.register("Ctrl+K","toggle-palette","打开命令面板"),n.register("F5","refresh","刷新当前页"),n.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),n.register("Ctrl+J","open-ai","打开 AI 问股"),n.register("Ctrl+D","open-today","今日一屏"),n.register("Ctrl+E","batch-eval","批量 AI 评估"),n.register("Ctrl+G","add-portfolio","加入组合"),n.register("Ctrl+H","open-eval-history","打开评估历史"),n.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),n}return{normalize:a,createPaletteState:f,toggleVisible:t,searchMenus:d,searchCommands:p,filterStocksLocal:P,mergeResults:g,moveIndex:c,buildSearchSuggestions:_,dispatchSearchSelection:l,DEFAULT_COMMANDS:S,parseKeyCombo:w,matchShortcut:h,canonicalCombo:C,createCommandRegistry:R,createShortcutRegistry:x,createDefaultShortcuts:o}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof je<"u"&&je.exports?je.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var f=e();typeof je=="object"&&je.exports&&(je.exports=f),a.QuantOnboarding=f})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],e=a.length,f=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=f.length;function d(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function p(){return f.slice()}function P(T){return T<0?0:T>=t?t-1:T}function g(T){return{stepIndex:T.stepIndex,completed:!!T.completed,dismissed:!!T.dismissed,updatedAt:T.updatedAt||0}}function c(T){return g(Object.assign({},T,{stepIndex:P((T.stepIndex||0)+1),updatedAt:Date.now()}))}function _(T){return g(Object.assign({},T,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function l(T){return g(Object.assign({},T,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function S(T){var B=Math.min(T&&T.stepIndex||0,t);return{done:B,total:t,pct:Math.round(B/t*100)}}function i(T){return!!(T&&!T.completed&&!T.dismissed)}function w(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function h(){return a.slice()}function C(){return e}function R(T){return T<0?0:T>=e?e-1:T}function x(T){return{stepIndex:T.stepIndex,completed:!!T.completed,dismissed:!!T.dismissed,updatedAt:T.updatedAt||0}}function o(T){return x(Object.assign({},T,{stepIndex:R((T.stepIndex||0)+1),updatedAt:Date.now()}))}function n(T){return x(Object.assign({},T,{stepIndex:R((T.stepIndex||0)-1),updatedAt:Date.now()}))}function v(T,B){return x(Object.assign({},T,{stepIndex:R(B),updatedAt:Date.now()}))}function N(T){return x(Object.assign({},T,{completed:!0,updatedAt:Date.now()}))}function A(T){return x(Object.assign({},T,{dismissed:!0,updatedAt:Date.now()}))}function F(T){return!!(T&&T.completed)}function G(T){var B=Math.min(T&&T.stepIndex||0,e);return{done:B,total:e,pct:Math.round(B/e*100)}}function se(T){var B=T||w();return JSON.stringify({stepIndex:B.stepIndex,completed:!!B.completed,dismissed:!!B.dismissed,updatedAt:B.updatedAt||0})}function I(T){var B=w();if(!T||typeof T!="string")return B;try{var K=JSON.parse(T);if(!K||typeof K!="object")return B;var ie=parseInt(K.stepIndex,10);return isNaN(ie)?B:{stepIndex:R(ie),completed:!!K.completed,dismissed:!!K.dismissed,updatedAt:K.updatedAt||0}}catch{return B}}return{ONBOARDING_STEPS:a,steps:h,stepCount:C,createOnboardingState:w,next:o,prev:n,jumpTo:v,complete:N,dismiss:A,isComplete:F,progress:G,persistState:se,parseState:I,SHORTTERM_TOUR_STEPS:f,shorttermTourSteps:p,createShorttermTourState:d,shorttermTourNext:c,shorttermTourComplete:_,shorttermTourDismiss:l,shorttermTourProgress:S,shorttermTourShouldShow:i}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:f}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const d=a(!1),p=a(t.createOnboardingState()),P=e(function(){return t.steps()[p.value.stepIndex]}),g=e(function(){return t.progress(p.value)}),c=e(function(){return p.value.stepIndex>=t.stepCount()-1}),_=e(function(){return"onboarding.step."+P.value.key});function l(){const R=t.persistState(p.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:R}})}).then(function(x){return x.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",R)}catch{}})}function S(){p.value=t.next(p.value)}function i(){p.value=t.prev(p.value)}function w(){p.value=t.complete(p.value),l(),d.value=!1}function h(){p.value=t.dismiss(p.value),l(),d.value=!1}function C(){fetch("/api/user_config/preferences").then(function(R){return R.json()}).then(function(R){const x=R&&R.preferences&&R.preferences.onboarding_progress;return x&&(p.value=t.parseState(x)),x}).catch(function(){return null}).then(function(R){if(!R)try{const x=localStorage.getItem("qc_onboarding_progress");x&&(p.value=t.parseState(x))}catch{}!t.isComplete(p.value)&&!p.value.dismissed&&(d.value=!0)})}return f(C),{visible:d,st:p,step:P,prog:g,isLast:c,stepKey:_,next:S,prev:i,finish:w,skip:h}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
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
    `,setup(){function a(e){try{const f=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(f)return f(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:f,nextTick:t,inject:d,onMounted:p}=Vue,P=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const g=d("qcState");if(!g)return{};const c=a(""),_=e({get:()=>g.commandPaletteVisible.value,set:L=>{g.commandPaletteVisible.value=L}}),l=a(0),S=a([]),i=a(null),w=e(()=>{const L=(P.DEFAULT_COMMANDS||[]).map(function(z){return Object.assign({},z)});return Object.keys(g.themes.value||{}).forEach(function(z){const k=g.themes.value[z];L.push({key:"theme:"+z,label:"切换主题 · "+(k.name||z),icon:"palette",keywords:"theme 主题"})}),L});function h(L){return typeof L=="string"&&/^[a-z][a-z0-9-]*$/.test(L)}const C=e(()=>g.menus.value||[]);function R(){const L=window.__quantModules&&window.__quantModules.pinyin;if(!L)return[];const O=[];return(g.watchlist&&g.watchlist.value||[]).forEach(function(z){O.push({code:z.code,name:z.name})}),(g.aiHistory&&g.aiHistory.value||[]).forEach(function(z){z&&z.stock_code&&O.push({code:z.stock_code,name:z.stock_name||z.stock_code})}),O.push.apply(O,L.getExtraStocks()),L.buildStockIndex(O)}function x(L){const O=window.__quantModules&&window.__quantModules.pinyin;return O?O.searchStocksByQuery(L,R()).map(function(z){return{type:"stock",code:z.code,name:z.name,label:z.name,subLabel:z.code,icon:"trending-up"}}):[]}function o(){const L=[],O=window.__quantModules&&window.__quantModules.recent;O&&O.getRecentViewed().slice(0,5).forEach(function(k){L.push({type:"stock",code:k.code,name:k.name||k.code,label:k.name||k.code,subLabel:"最近查看 · "+k.code,icon:"trending-up"})});const z=(g.watchlist&&g.watchlist.value||[]).slice(0,8).map(function(k){return{type:"stock",code:k.code,name:k.name||k.code,label:k.name||k.code,subLabel:"我的自选 · "+k.code,icon:"trending-up"}});return L.concat(z)}const n=e(()=>{const L=c.value;if(!L)return P.mergeResults([],[],o());const O=P.searchMenus(L,C.value,g.subPageNames),z=P.searchCommands(L,w.value),k=S.value;return P.mergeResults(O,z,k)}),v=e(()=>n.value);function N(L){return v.value.flat[l.value]===L}function A(L){l.value=v.value.flat.indexOf(L)}function F(L){return(L.type||"")+":"+(L.code||L.menuKey||L.key||L.label)}let G=null;function se(){const L=c.value.trim();if(L.length<1){S.value=[];return}G&&clearTimeout(G),G=setTimeout(function(){const O=x(L);S.value=O,l.value=0,g.searchStocks(L,function(z){if(c.value.trim()!==L)return;const k=(z||[]).filter(function(W){return W&&W.code&&W.name}).map(function(W){return{type:"stock",code:W.code,name:W.name,label:W.name,subLabel:W.code,icon:"trending-up"}}),E={},ce=[];O.forEach(function(W){E[W.code]||(E[W.code]=!0,ce.push(W))}),k.forEach(function(W){E[W.code]||(E[W.code]=!0,ce.push(W))}),S.value=ce,l.value=0})},200)}function I(){l.value=P.moveIndex(l.value,v.value.flat.length,1)}function T(){l.value=P.moveIndex(l.value,v.value.flat.length,-1)}function B(){const L=v.value.flat[l.value];L&&K(L)}function K(L){g.commandPaletteVisible.value=!1,L.type==="menu"?g.navigateTo(L.menuKey,L.subPage):L.type==="stock"?g.showStockDetail(L.code,L.name):L.type==="command"&&ie(L.key)}function ie(L){if(L==="refresh"){const O=g.currentPage.value;O==="strategies"?g.loadDashboardData().catch(function(){}):O==="calendar"?g.refreshCalendarData().catch(function(){}):O==="ai"&&g.loadAiHistory().catch(function(){})}else L==="export"?g.exportCSV():L==="batch"?g.showBatchEvaluate.value=!0:L==="ai"?g.openAiFab():L==="sidebar"?g.toggleSidebar():L==="today"?g.navigateTo("strategies","overview"):L==="add-portfolio"?(g.currentPage.value="ai",g.currentSubPage.value="portfolio"):L==="open-system"?g.navigateTo("system","status"):L==="open-shortterm"?g.navigateTo("shortterm","overview"):L==="open-research"?g.navigateTo("research","overview"):L==="open-calendar"?g.navigateTo("calendar",""):L==="refresh-data-source"?g.navigateTo("system","datasource"):L.indexOf("theme:")===0&&g.changeTheme(L.slice(6))}f(_,function(L){L&&(c.value="",S.value=[],l.value=0,t(function(){i.value&&i.value.focus&&i.value.focus()}))}),f(c,se);function Q(L){L==="toggle-palette"?g.commandPaletteVisible.value=!g.commandPaletteVisible.value:L==="toggle-sidebar"?g.toggleSidebar():L==="open-ai"?g.openAiFab():L==="refresh"?ie("refresh"):L==="open-today"?ie("today"):L==="batch-eval"?ie("batch"):L==="add-portfolio"&&ie("add-portfolio")}function Z(L){if(!P.createDefaultShortcuts||!P.createShortcutRegistry)return;const z=P.createDefaultShortcuts().resolve({key:L.key,ctrlKey:L.ctrlKey,altKey:L.altKey,shiftKey:L.shiftKey,metaKey:L.metaKey});z&&(L.preventDefault(),Q(z))}return p(function(){document.addEventListener("keydown",Z)}),{visible:_,query:c,results:v,inputEl:i,sanitizeHtml:g.sanitizeHtml,isIconName:h,onDown:I,onUp:T,onEnter:B,execute:K,isActive:N,setActive:A,itemKey:F,onGlobalKeydown:Z}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const d=a("qcState");if(!d)return{};const p={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},P=e(()=>p[d.aiEvalStage.value]||""),g=e(()=>{const B=d.aiResult&&d.aiResult.value&&d.aiResult.value.result&&d.aiResult.value.result.level;return B?B==="强烈推荐"||B==="推荐"?"var(--el-success)":B==="谨慎推荐"?"var(--el-warning)":B==="中性"||B==="观望"?"var(--text-secondary)":B==="评估失败"||B==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function c(B){const K=document.createElement("textarea");K.value=B,K.style.position="fixed",K.style.opacity="0",document.body.appendChild(K),K.select(),document.execCommand("copy"),document.body.removeChild(K)}async function _(){const B=d.aiResult&&d.aiResult.value;if(!B||!B.result)return;const K=B.result.dimensions||{},ie=Object.entries(K).map(([Z,L])=>`${Z} ${Math.round(L)}分`).join(`
`),Q=`【AI 智能评估】${B.result.level||""} ${B.result.total_score!=null?B.result.total_score:"—"}分
模型：${B.model_used||B.result.provider||"—"}

${B.result.detailed_report||""}

九维度评分：
${ie||"无"}`;try{await navigator.clipboard.writeText(Q),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{c(Q),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const l=f(!1),S=f(!1),i=f(null),w=f([]),h={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function C(B){return h[B]||"factor-sem-none"}async function R(){const B=d.stockDetail.value&&d.stockDetail.value.stock;if(B){l.value=!0,S.value=!1,w.value=[],i.value=null;try{const K=d.selectedDate.value?`?date=${d.selectedDate.value}`:"",ie=await fetch(`/api/calendar/stock/${B}/factors${K}`).then(O=>O.json()),Q=ie&&Array.isArray(ie.factors)?ie.factors:[],Z=[],L={};Q.forEach(O=>{L[O.category]||(L[O.category]={category:O.category,items:[]},Z.push(L[O.category])),L[O.category].items.push(O)}),w.value=Z,i.value=ie&&ie.summary||null}catch{S.value=!0}finally{l.value=!1}}}t(d.stockDetailTab,B=>{B==="factor"&&d.stockDetail.value&&d.stockDetailVisible.value&&(R(),o())});const x=f(null);async function o(){try{const B=await fetch("/api/market/factor-ic").then(K=>K.json());x.value=B&&B.success&&B.data?B.data:{}}catch{x.value={}}}function n(B){if(!B||!B.n5)return"—";const K=B.n5.icir!=null?"ICIR "+B.n5.icir:"ICIR —";return B.n5.grade+" ("+K+")"}const v=f(!1),N=f(!1),A=f([]),F=f([]);function G(B){if(B==null)return"—";const K=Number(B);return Number.isNaN(K)?"—":Math.abs(K)>=1e8?(K/1e8).toFixed(2)+"亿":Math.abs(K)>=1e4?(K/1e4).toFixed(1)+"万":String(K)}async function se(){const B=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(B){v.value=!0,N.value=!1;try{const K=await fetch("/api/market/performance/"+encodeURIComponent(B)).then(ie=>ie.json());K&&K.success?(A.value=K.forecast||[],F.value=K.express||[]):N.value=!0}catch{N.value=!0}finally{v.value=!1}}}t(d.stockDetailTab,B=>{B==="performance"&&se()});const I=f(null);async function T(){const B=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(!B){I.value=null;return}try{const K=await fetch("/api/focus/stock/"+encodeURIComponent(B)+"/pool").then(ie=>ie.json());I.value=K&&K.success&&K.data?K.data:null}catch{I.value=null}}return t(()=>d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock,B=>{B&&d.stockDetailVisible.value?T():I.value=null}),t(()=>d.stockDetailVisible.value,B=>{B?T():I.value=null}),{...d,aiStageText:P,levelRingColor:g,copyAiReport:_,factorLoading:l,factorError:S,factorSummary:i,factorGroups:w,factorSemClass:C,loadFactorPanel:R,factorIc:x,loadFactorIc:o,factorIcGrade:n,perfLoading:v,perfError:N,perfForecast:A,perfExpress:F,fmtY:G,loadPerformance:se,poolInfo:I,loadPoolInfo:T}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(f){const t=e("qcState");if(!t)return{};const d=a(()=>f.type==="history"?t.selectedHistoryIds.value.includes(f.item.id):t.selectedChatIds.value.includes(f.item.id)),p=a(()=>{const h=t.watchlistCodes.value.has(f.item.stock_code);return{icon:"star",isWatched:h,label:h?"取消收藏":"加入收藏"}}),P=a(()=>f.type==="history"?"bot":"message-circle"),g=a(()=>{var h;return f.type==="history"?((h=f.item.result)==null?void 0:h.provider)||"":f.item.first_msg||""}),c=a(()=>{var h,C;return`${((C=(h=f.item.result)==null?void 0:h.dimensions)==null?void 0:C.length)||9}维度分析`}),_=a(()=>{var C,R;const h=f.type==="history"?f.item.evaluate_time:f.item.created_at||"";return h?f.timeFormat==="datetime"?f.type==="history"?`${h.split("T")[0]} ${(h.split("T")[1]||"").split(".")[0]}`:`${h.split("T")[0]} ${((C=h.split("T")[1])==null?void 0:C.substring(0,5))||""}`:f.type==="history"?(h.split("T")[1]||"").split(".")[0]||h:((R=h.split("T")[1])==null?void 0:R.substring(0,5))||"":""});function l(){f.type==="history"?t.toggleSelectHistory(f.item.id):t.toggleSelectChat(f.item.id)}function S(){f.type==="history"?t.viewAiResult(f.item):t.viewChatSession(f.item)}async function i(){try{await ElementPlus.ElMessageBox.confirm(f.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}f.type==="history"?t.deleteSingleHistory(f.item.id):t.deleteChatSession(f.item.id)}function w(h,C){t.toggleWatchlist(h,C)}return{isSelected:d,watchState:p,providerIcon:P,providerText:g,dimsText:c,timeText:_,toggleSelect:l,view:S,remove:i,toggleWatchlist:w,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const d=["买入","持有","观望","减仓","卖出"],p={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},P={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},g=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],c={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},_=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function l(i){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(i).then(C=>C.json?C.json():C)}function S(){const i=new Date,w=h=>h<10?"0"+h:""+h;return i.getFullYear()+"-"+w(i.getMonth()+1)+"-"+w(i.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const i=t("qcState"),w=a(S()),h=a("after_close"),C=a({rows:[],actions:{},total:0,groups:{}}),R=a({sessions:{},total:0}),x=a(null),o=a(!1),n=a(""),v=a(!1),N=a([]),A=a(""),F=a(null),G={},se=a({});let I=0;const T=a(null),B=e(function(){const M=C.value&&C.value.groups||{};return Object.keys(M).length?M:C.value&&C.value.rows&&C.value.rows.length?{全部:C.value.rows}:{}}),K=e(function(){const M=T.value;return!M||!M.date||M.date!==w.value?"":"已加载最近一次评估: "+M.date+" · "+(c[M.session]||M.session)}),ie=e(function(){const M=C.value&&C.value.base_date;return M?M===w.value?"评分范围: "+M+" 收盘池 + 自选":"评分范围: "+M+" 收盘池(前一交易日算好) + 自选":""});function Q(M){if(M==null)return"—";const U=Number(M);return U===Math.floor(U)?String(U):U.toFixed(1)}function Z(M){const U=C.value.total||0,re=(C.value.actions||{})[M]||0;if(!U)return"0%";const pe=re/U*100;return pe>0&&pe<4?"4%":pe.toFixed(1)+"%"}function L(M){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[M]||"info"}function O(M){const U=x.value&&x.value.overall&&x.value.overall[M]||null;return!U||U.total===0||U.rate===null||U.rate===void 0?"info":U.rate>=60?"success":U.rate>=40?"warning":"danger"}function z(M){const U=x.value&&x.value.overall&&x.value.overall[M]||null;return!U||U.total===0||U.rate===null||U.rate===void 0?"样本不足":U.rate.toFixed(1)+"% ("+U.total+" 样本)"}function k(){return c[h.value]||h.value}function E(M){const U=N.value.indexOf(M);U>=0?N.value.splice(U,1):N.value.push(M)}function ce(M){if(!M||!M.raw_json)return{};if(G[M.stock_code+M.session+M.trade_date])return G[M.stock_code+M.session+M.trade_date];let U={};try{U=JSON.parse(M.raw_json)||{}}catch{U={}}return G[M.stock_code+M.session+M.trade_date]=U,U}async function W(){try{const M=await l("/api/focus/latest"),U=M&&M.success&&M.data;U&&U.date&&(T.value=U,w.value=U.date,U.session&&(h.value=U.session))}catch(M){console.warn("[focus] 最近一次评估解析失败:",M)}}async function b(){v.value=!0;try{const M=await l("/api/focus/results?date="+w.value+"&session="+h.value);C.value=M&&M.success&&M.data||{rows:[],actions:{},total:0,groups:{}},r((C.value.rows||[]).map(function(U){return U.stock_code}))}catch(M){console.warn("[focus] 结果加载失败:",M),C.value={rows:[],actions:{},total:0,groups:{}}}finally{v.value=!1}}async function r(M){const U=se.value||{},re=(M||[]).filter(function(Y){return Y&&!U[Y]});if(!re.length)return;const pe=++I,de=re.map(function(Y){return l("/api/focus/stock/"+encodeURIComponent(Y)+"/pool?date="+w.value).then(function(oe){oe&&oe.success&&oe.data?U[Y]=oe.data:U[Y]={stock_code:Y,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){U[Y]={stock_code:Y,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(de)}catch{}pe===I&&(se.value=Object.assign({},U))}function q(M){const U=i&&i.showStockDetail;if(typeof U=="function"){U(M);return}const pe=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;pe&&pe.info("请从其他页面打开股票详情: "+M)}async function m(){try{const M=await l("/api/focus/history?date="+w.value);R.value=M&&M.success&&M.data||{sessions:{},total:0}}catch(M){console.warn("[focus] 历史加载失败:",M),R.value={sessions:{},total:0}}}async function H(){o.value=!0;try{const M=await l("/api/ai/track");M&&M.success&&M.data?(x.value=M.data,n.value=(M.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):x.value=null}catch(M){console.warn("[focus] 效果块加载失败:",M),x.value=null}finally{o.value=!1}}async function ue(){const M=(A.value||"").trim();if(M){F.value=null;try{const U=await l("/api/focus/stock/"+encodeURIComponent(M));F.value=U&&U.success&&U.data&&U.data.rows||[]}catch(U){console.warn("[focus] 单股历史加载失败:",U),F.value=[]}}}async function X(){await b(),await m(),await H()}return f(async function(){await W(),await X()}),{curDate:w,session:h,results:C,history:R,track:x,trackLoading:o,trackNote:n,detailSplitEnabled:i.detailSplitEnabled,stockDetail:i.stockDetail,loading:v,expanded:N,stockCode:A,stockHistory:F,SESSIONS:g,ACTION_ORDER:d,TRACK_WINDOWS:_,ACTION_DOT:p,TIER_DOT:P,SESSION_LABELS:c,displayGroups:B,latestNote:K,baseNote:ie,sessionLabel:k,fmtScore:Q,tagType:L,rateTagType:O,fmtRate:z,toggle:E,detailOf:ce,loadResults:b,loadHistory:m,loadTrack:H,loadStockHistory:ue,loadAll:X,poolStatus:se,openStockDetail:q,actionPct:Z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:f}=Vue,{currentView:t,statusFilter:d,dashboardData:p,loadHealthMetrics:P,getLoadDashboardData:g,getLastRefreshTime:c,getFetchPoolSignals:_}=a,l=e(!1),S=e(""),i=new Map,w=e([]),h=e(""),C=e(""),R=e([]),x=e(""),o=window.__quantModules.core||{},n=typeof o.createTtlCache=="function"?o.createTtlCache(15e3):null;let v=0;function N(){const K=Date.now();K-v<5e3||(v=K,ElementPlus.ElMessage.success("有新数据，已更新"))}function A(K,ie,Q,Z){!n||!ie||typeof o.silentRefresh!="function"||o.silentRefresh({cache:n,key:ie,fetchFn:async()=>{const L=await fetch(K);if(!L.ok)throw new Error("HTTP "+L.status);const O=await L.json();return Q?Q(O):O},ttl:n.defaultTtl,apply:Z,onChanged:N,onError:()=>{}})}const F=new Set;async function G(){var K;try{const Q=await(await fetch("/api/dates")).json();w.value=((K=Q.data)==null?void 0:K.dates)||Q.dates||[],w.value.length>0&&(h.value=w.value[w.value.length-1]),C.value=new Date().toLocaleTimeString()}catch(ie){console.error(ie)}}async function se(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),C.value="刷新中...",i.clear(),await G(),await T(),C.value=new Date().toLocaleTimeString()}catch(K){console.error("数据刷新失败",K)}}function I(){if(!h.value)return;const ie="/api/view/"+(t.value||"day")+"/"+h.value+"?status="+(d.value||"all")+"&format=csv";window.open(ie,"_blank")}async function T(){if(!h.value)return;const K=`${t.value}_${h.value}`;if(F.has(K))return;F.add(K);const ie=`/api/view/${t.value}/${h.value}?status=all`,Q=n&&typeof o.makeCacheKey=="function"?o.makeCacheKey("GET",`/api/view/${t.value}/${h.value}`,{status:"all"}):null,Z=(z,k)=>{R.value=z,x.value=k||"",i.set(K,{stocks:z,note:k||""})},L=z=>{Z(z&&z.stocks||[],z&&z.note||"")};if(i.has(K)){L(i.get(K)),A(ie,Q,z=>z,L),F.delete(K);return}const O=Q&&n?n.get(Q):void 0;if(O!==void 0){L(O),A(ie,Q,z=>z,L),F.delete(K);return}l.value=!0,S.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const k=await(await fetch(ie)).json(),E=k.stocks||[];Z(E,k.note||""),n&&Q&&n.set(Q,{stocks:E,note:k.note||""})}catch{try{const E=await(await fetch(`/api/calendar/${h.value}/consensus`)).json();R.value=(E.consensus||[]).map(ce=>({...ce,code:ce.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{l.value=!1}_(),F.delete(K)}async function B(){const K=n&&typeof o.makeCacheKey=="function"?o.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(n){const ie=n.get(K);if(ie!==void 0){p.value=ie,P().catch(()=>{}),A("/api/dashboard",K,Q=>Q.data||Q,Q=>{p.value=Q,c().value=Date.now()});return}}await g()(),P().catch(()=>{}),n&&n.set(K,p.value)}return{loading:l,loadingView:S,viewCache:i,dates:w,selectedDate:h,lastLoadTime:C,consensus:R,viewNote:x,loadDates:G,refreshCalendarData:se,exportCSV:I,loadConsensusData:T,loadDashboardCached:B}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:f,loadIndexKline:t,rememberDialogTrigger:d,menus:p,currentPage:P,currentSubPage:g,stockDetail:c,selectedDate:_}=a,l=ref({indices:[],market_sentiment:null});let S=null;const i=ref(!1),w=ref(null),h=ref(null),C=ref(!1);function R(){window.__quantModules.charts.disposeKline("stockKlineChart")}const x=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{x.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const o=ref(!1),n=ref(null),v=ref(!1),N=ref(0),A=ref(0);async function F(){try{const k=await(await fetch("/api/market/overview")).json();l.value=k,G(k)}catch(z){console.error("获取市场行情失败:",z)}}function G(z){S&&clearInterval(S),z&&z.in_trading_hours&&(S=setInterval(F,6e5))}function se(z){d(),w.value=z,h.value=null,f.value="daily",I(z.code),window.__quantModules.charts.disposeKline("indexKlineChart"),i.value=!0,setTimeout(async()=>{await t("daily")},500)}async function I(z){try{const E=await(await fetch("/api/ai/index-eval/"+z)).json();E.success&&E.data&&(h.value=E.data)}catch(k){console.warn("[getIndexAiScore] cache check failed:",k)}}async function T(){if(w.value){C.value=!0;try{const k=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:w.value.code,index_name:w.value.name,current_price:w.value.close,pct_chg:w.value.pct_chg})})).json();k.success?h.value=k.data:ElementPlus.ElMessage.error(k.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{C.value=!1}}}function B(z){window.__quantModules.charts.zoomKline("stockKlineChart",z)}function K(){v.value=!0,setTimeout(()=>{v.value=!1},600)}function ie(z,k){if(z===k){K();return}const E=800,ce=performance.now(),W=k-z;o.value=!0,n.value={value:W,dir:W>0?"up":"down"},v.value=!0,setTimeout(()=>{v.value=!1},600),setTimeout(()=>{n.value=null},2300);function b(r){const q=r-ce,m=Math.min(q/E,1),H=1-Math.pow(1-m,3),ue=Math.round(z+W*H);c.value&&c.value.score_data&&(c.value.score_data.score=ue),m<1?requestAnimationFrame(b):(c.value&&c.value.score_data&&(c.value.score_data.score=k),o.value=!1)}requestAnimationFrame(b)}function Q(){if(!c.value||!c.value.score_data)return;const z=c.value.score_data.score;if(z==null)return;const k=600,E=performance.now();v.value=!0,setTimeout(()=>{v.value=!1},600);function ce(W){const b=Math.min((W-E)/k,1),r=1-Math.pow(1-b,3),q=Math.round(z*r);c.value&&c.value.score_data&&(c.value.score_data.score=q),b<1?requestAnimationFrame(ce):c.value&&c.value.score_data&&(c.value.score_data.score=z)}requestAnimationFrame(ce)}async function Z(){var E;if(!c.value||!c.value.stock)return;const z=c.value.stock,k=(E=c.value.score_data)==null?void 0:E.score;try{const ce=new Date().toISOString().split("T")[0],W=_.value||ce,r=await(await fetch(`/api/calendar/stock/${encodeURIComponent(z)}/score?date=${W}`)).json();if(r.success&&r.score_data){const q=r.score_data.score;c.value&&(c.value.score_data=r.score_data),k!=null&&q!==k?ie(k,q):K()}else K()}catch(ce){console.warn("[refreshStockScore] failed:",ce)}}function L(z){x.value&&(N.value=z.touches[0].clientX,A.value=z.touches[0].clientY)}function O(z){if(!x.value)return;const k=N.value-z.changedTouches[0].clientX,E=A.value-z.changedTouches[0].clientY;if(Math.abs(k)>Math.abs(E)&&Math.abs(k)>80){const ce=p.value.map(function(b){return b.key}),W=ce.indexOf(P.value);if(k>0&&W<ce.length-1){const b=ce[W+1],r=window.__quantGoPage;r?r(b,""):(P.value=b,g.value="")}else if(k<0&&W>0){const b=ce[W-1],r=window.__quantGoPage;r?r(b,""):(P.value=b,g.value="")}}}return{marketData:l,marketRefreshTimer:S,fetchMarketData:F,indexDetailVisible:i,indexDetail:w,indexAiResult:h,indexAiLoading:C,showIndexDetail:se,loadCachedIndexEval:I,doIndexAiEvaluate:T,disposeStockKline:R,isMobile:x,zoomKlineRange:B,scoreAnimating:o,scoreDelta:n,scorePulse:v,triggerScorePulse:K,animateScoreChange:ie,animateScoreEntrance:Q,refreshStockScore:Z,touchStartX:N,touchStartY:A,onTouchStart:L,onTouchEnd:O}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:f,currentSubPage:t}=a,d=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),p=ref("idle"),P=ref("");async function g(){if(!d.value.webhook_url){P.value="请先输入Webhook地址";return}p.value="testing",P.value="";try{const M=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:d.value.webhook_url})})).json();M.success||M.status==="ok"?(P.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(P.value=M.message||"测试失败",ElementPlus.ElMessage.error(P.value))}catch{P.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}p.value="idle"}const c=Vue.ref(!1);async function _(){c.value=!0;try{const M=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{c.value=!1}}const l=ref(!1);function S(){e("ai","chat_history"),l.value=!0,Vue.nextTick(()=>{const X=document.querySelector('input[placeholder*="输入问题"]');X&&X.focus()})}const i=ref([]),w=ref({});async function h(){try{const M=await(await fetch("/api/ai/recommend-strategies")).json();M.success&&(i.value=M.recommendations||[])}catch(X){console.warn("[loadStrategyRecommendations] failed:",X)}}async function C(){try{const M=await(await fetch("/api/ai/usage-stats")).json();M.success&&(w.value=M)}catch(X){console.warn("loadAiUsage failed:",X)}}const R=ref({}),x=ref([]),o=ref(7);async function n(){try{const M=await(await fetch("/api/system/monitor")).json();M.success&&(R.value=M)}catch(X){console.warn("loadSysMonitor failed:",X)}}const v=ref({});async function N(){try{const M=await(await fetch("/api/system/health-detail")).json();M.success&&(v.value=M)}catch(X){console.warn("loadHealthDetail failed:",X)}}async function A(){try{const M=await(await fetch(`/api/analytics/rank?days=${o.value}`)).json();M.success&&(x.value=M.rank||[])}catch(X){console.warn("loadAnalytics failed:",X)}}const F=ref(!1);async function G(){if(!F.value){F.value=!0;try{const M=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return M&&M.success?M.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${M.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${M.date}）`):ElementPlus.ElMessage.error(M&&(M.detail||M.message)||"生成复盘失败"),N(),M}catch(X){ElementPlus.ElMessage.error("生成复盘失败: "+(X.message||""))}finally{F.value=!1}}}const se=ref(null),I=ref(!1);async function T(){try{const M=await(await fetch("/api/ai/fact-check/latest")).json();se.value=M&&M.success&&M.data||null}catch(X){console.warn("loadFactCheck failed:",X)}}async function B(){if(!I.value){I.value=!0;try{const M=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return M&&M.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${M.data.pass_rate!=null?M.data.pass_rate+"%":"--"} (${M.data.checked} 个数字)`),T()):ElementPlus.ElMessage.error(M&&(M.detail||M.message)||"事实护栏抽查失败"),M}catch(X){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(X.message||""))}finally{I.value=!1}}}const K=ref([]),ie=ref(!1);async function Q(){try{const M=await(await fetch("/api/backup/list")).json();M.success&&(K.value=M.backups||[])}catch(X){console.error("加载备份列表失败",X)}}async function Z(){ie.value=!0;try{const M=await(await fetch("/api/backup/create",{method:"POST"})).json();M.success?(ElementPlus.ElMessage.success(M.message||"备份成功"),Q()):ElementPlus.ElMessage.error(M.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{ie.value=!1}}const L=ref(""),O=ref("");async function z(X){L.value=X,O.value="";try{const M=window.__quantModules&&window.__quantModules.core||{},U=typeof M.authHeaders=="function"?M.authHeaders():{},re=await fetch("/api/reports/export?format="+encodeURIComponent(X),{headers:U});if(!re.ok)throw new Error("HTTP "+re.status);const pe=await re.blob(),de=URL.createObjectURL(pe),Y=document.createElement("a");Y.href=de;const oe=new Date().toISOString().slice(0,10);Y.download="report_"+oe+"."+X,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(de),O.value="报表已导出 ("+X.toUpperCase()+")"}catch(M){O.value="报表导出失败: "+(M.message||M)}finally{L.value=""}}async function k(X){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${X} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(M){console.warn("[restoreBackup] confirm cancelled:",M);return}try{const U=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X})})).json();U.success?(ElementPlus.ElMessage.success(U.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(U.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const E=ref(!1),ce=ref(0),W=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function b(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{ce.value=0,E.value=!0},800)}function r(){E.value=!1,localStorage.setItem("quant_tour_done","1")}function q(){E.value=!1,localStorage.setItem("quant_tour_done","1")}const m=ref(""),H=ref(!1);async function ue(){if(!m.value||!m.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}H.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:m.value.trim(),page:f.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(m.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{H.value=!1}}return{feishuConfig:d,feishuTestStatus:p,feishuTestMessage:P,feishuSaving:c,testFeishuWebhook:g,saveFeishuConfig:_,aiFabHidden:l,openAiFab:S,strategyRecommendations:i,aiUsage:w,loadStrategyRecommendations:h,loadAiUsage:C,sysMonitor:R,analyticsRank:x,analyticsDays:o,loadSysMonitor:n,loadAnalytics:A,healthDetail:v,loadHealthDetail:N,reviewTriggering:F,triggerMarketReview:G,factCheck:se,factCheckRunning:I,loadFactCheck:T,triggerFactCheck:B,backups:K,backupCreating:ie,loadBackups:Q,createBackup:Z,restoreBackup:k,reportExporting:L,reportExportMsg:O,exportReport:z,tourVisible:E,tourStep:ce,tourSteps:W,maybeShowTour:b,skipTour:r,finishTour:q,feedbackText:m,feedbackSubmitting:H,submitFeedback:ue}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:f,selectedDate:t,dates:d,loadConsensusData:p,hapticFeedback:P}=a,g=e(()=>({day:"天",week:"周",month:"月",year:"年"})[f.value]||"天"),c=e(()=>({day:"date",week:"week",month:"month",year:"year"})[f.value]||"date"),_=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[f.value]||"YYYY-MM-DD"),l=e(()=>!t.value||!d.value||d.value.length===0?!1:t.value>d.value[0]),S=e(()=>!t.value||!d.value||d.value.length===0?!1:t.value<d.value[d.value.length-1]);function i(R){P("light"),f.value=R;let x=t.value||d.value[d.value.length-1];if(R==="year"){const o=x.substring(0,4),n=d.value.find(v=>v.startsWith(o));t.value=n||x}else if(R==="month"){const o=x.substring(0,7),n=d.value.find(v=>v.startsWith(o));t.value=n||x}setTimeout(p,50)}function w(R){P("light");const x=t.value,o=d.value,n=o.indexOf(x);if(n<0)return;let v=1;f.value==="week"&&(v=5),f.value==="month"&&(v=22),f.value==="year"&&(v=250);const N=n+R*v;if(N>=0&&N<o.length){const A=o[N];if(f.value==="month"){const F=A.substring(0,7),G=o.find(se=>se.startsWith(F));t.value=G||A}else if(f.value==="year"){const F=A.substring(0,4),G=o.find(se=>se.startsWith(F));t.value=G||A}else t.value=A;p()}}function h(R){if(!d.value||d.value.length===0)return!1;const x=R.getFullYear(),o=String(R.getMonth()+1).padStart(2,"0"),n=String(R.getDate()).padStart(2,"0"),v=`${x}-${o}-${n}`;return!d.value.includes(v)}function C(R){R&&R.length>10&&(t.value=R.substring(0,10)),p()}return{viewUnit:g,datePickerType:c,dateFormat:_,canNavPrev:l,canNavNext:S,switchView:i,navigateDate:w,disabledDate:h,onDateChange:C}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:f,navigateTo:t,currentPage:d,currentView:p,navigateDate:P,switchView:g,getLoadDashboardData:c,refreshCalendarData:_,getLoadAiHistory:l,exportCSV:S,getShowBatchEvaluate:i,openAiFab:w,toggleSidebar:h,showStockDetail:C}=a,R=ref("");async function x(I,T){if(!I||I.trim().length<1){T([]);return}const B=window.QuantCommandPanel;let K=[];B&&e.value&&(K=B.buildSearchSuggestions(I,e.value,f,B.DEFAULT_COMMANDS));const ie=window.__quantModules&&window.__quantModules.pinyin;ie&&ie.searchCoreStocks(I).forEach(function(Q){K.push({value:Q.code+" "+Q.name,type:"stock",code:Q.code,name:Q.name,label:Q.name,subLabel:Q.code,icon:"trending-up",iconName:"trending-up"})});try{const Z=await(await fetch("/api/search?q="+encodeURIComponent(I))).json();if(Z.success&&Z.results){const L=Z.results.map(function(z){return{value:z.code+" "+z.name,type:"stock",code:z.code,name:z.name,label:z.name,subLabel:z.code,icon:"trending-up",iconName:"trending-up"}}),O=[];(Z.groups||[]).forEach(function(z){(z.items||[]).forEach(function(k){k.type==="sector"?O.push({value:k.name+" · "+k.subLabel,type:"sector",name:k.name,label:k.name,subLabel:"板块",icon:"layers",iconName:"layers"}):k.type==="strategy"?O.push({value:k.name+" · 策略",type:"strategy",id:k.id,name:k.name,label:k.name,subLabel:"策略",icon:"target",iconName:"target"}):k.type==="menu"&&O.push({value:k.name,type:"menu",menuKey:k.menuKey,name:k.name,label:k.name,subLabel:k.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),T(K.concat(L,O))}else T(K)}catch(Q){console.warn("[searchStocks] fetch failed:",Q),T(K)}}function o(I){return I?I.type==="menu"?{action:"menu",menuKey:I.menuKey,subPage:I.subPage}:I.type==="command"?{action:"command",key:I.key}:I.type==="sector"?{action:"sector",name:I.name}:I.type==="strategy"?{action:"strategy",id:I.id,name:I.name}:I.type==="stock"||I.code&&I.name?{action:"stock",code:I.code,name:I.name}:null:null}function n(I){R.value="";const T=window.QuantCommandPanel,B=T?T.dispatchSearchSelection(I):o(I);if(B){if(B.action==="menu"){t(B.menuKey,B.subPage);return}if(B.action==="command"){v(B.key);return}if(B.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(B.name);return}if(B.action==="strategy"){t("research","overview");return}B.action==="stock"&&typeof C=="function"&&C(B.code,B.name)}}function v(I){if(I==="refresh"){const T=d.value;T==="strategies"?c().catch(function(){}):T==="calendar"?_().catch(function(){}):T==="ai"&&l().catch(function(){})}else I==="export"?S():I==="batch"?i().value=!0:I==="ai"?w():I==="sidebar"?h():I==="open-eval-history"?t("ai","history"):I==="open-shortterm"&&t("shortterm","overview")}const N=ref(!1),A=ref(!1);function F(I){if(!I)return!1;const T=I.tagName;return T==="INPUT"||T==="TEXTAREA"||T==="SELECT"||I.isContentEditable}function G(I){if(F(I.target))return;const T=I.key.toLowerCase();if(I.ctrlKey&&T==="k"){I.preventDefault(),A.value=!0;return}if(I.ctrlKey&&T==="/"){I.preventDefault(),N.value=!N.value;return}if(I.ctrlKey&&T==="h"){I.preventDefault(),t("ai","history");return}if(I.ctrlKey&&I.shiftKey&&T==="s"){I.preventDefault(),t("shortterm","overview");return}if(!(I.ctrlKey||I.metaKey||I.altKey)){if(T>="1"&&T<="5"){const B=parseInt(T)-1,K=e.value[B];K&&t(K.key,K.subPages[0]||"");return}if(T==="r"&&se(),(T==="arrowleft"||T==="arrowright"||T==="arrowup"||T==="arrowdown")&&d.value==="calendar")if(I.preventDefault(),T==="arrowleft"||T==="arrowright")P(T==="arrowleft"?-1:1);else{const B=["day","week","month","year"].indexOf(p.value),K=["day","week","month","year"][(B+(T==="arrowup"?-1:1)+4)%4];g(K)}}}function se(){const I=d.value;I==="strategies"?c().catch(()=>{}):I==="calendar"?_().catch(()=>{}):I==="ai"&&l().catch(()=>{})}return{searchQuery:R,searchStocks:x,onSearchSelect:n,runGlobalCommand:v,shortcutHelpVisible:N,commandPaletteVisible:A,isTypingTarget:F,handleGlobalKeydown:G,refreshCurrentPage:se}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:f,loadDates:t,loadDashboardData:d,loadDashboardCached:p,loadHealthMetrics:P,loadConsensusData:g,applyTheme:c,maybeShowTour:_,loadAiVendors:l,loadGroupConfig:S,groupsConfig:i}=a,w="qc_login_username";let h="";try{h=localStorage.getItem(w)||""}catch{h=""}const C=ref({username:h,password:""}),R=ref(!1),x=ref(!1),o=ref(!1),n=ref({oldPassword:"",newPassword:"",confirmPassword:""}),v=ref(!1),N=ref(!1),A=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),F=ref(1);async function G(){try{(await(await fetch("/api/setup/status")).json()).needed&&(A.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},F.value=1,N.value=!0)}catch(Q){console.warn("[checkSetupWizard] failed:",Q)}}async function se(){try{const Q={new_password:A.value.newPassword,ai_key:A.value.aiKey,ai_provider:A.value.aiProvider,ai_model:A.value.aiModel,ai_endpoint:A.value.aiEndpoint,tushare_token:A.value.tushareToken},L=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)})).json();L.success?(N.value=!1,ElementPlus.ElMessage.success("初始化完成"),await f()):ElementPlus.ElMessage.error(L.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function I(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(N.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function T(){if(!C.value.username||!C.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}R.value=!0;try{const Z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C.value)})).json();if(Z.success){e.value=Z.user,localStorage.setItem("quant_user",JSON.stringify(Z.user)),localStorage.setItem("quant_token",Z.data.access_token),c(Z.user.theme||"gold");try{localStorage.setItem(w,C.value.username||"")}catch{}typeof S=="function"&&await S().catch(function(){}),typeof l=="function"&&l(),await f(),await t(),await Promise.all([p(),g(),P().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),Z.data&&Z.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),_(),Z.user.role==="admin"&&setTimeout(G,500)}else ElementPlus.ElMessage.error(Z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{R.value=!1}}async function B(){x.value=!0;try{const Z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();Z.success?(e.value=Z.user,localStorage.setItem("quant_user",JSON.stringify(Z.user)),localStorage.setItem("quant_token",Z.data.access_token),c(Z.user.theme||"gold"),typeof S=="function"&&await S().catch(function(){}),await f(),await t(),await d(),P().catch(()=>{}),await g(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(Z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{x.value=!1}}function K(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{i&&(i.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function ie(){if(!n.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!n.value.newPassword||n.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(n.value.newPassword!==n.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}v.value=!0;try{const Q=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:n.value.oldPassword,new_password:n.value.newPassword})}),Z=await Q.json();Q.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),o.value=!1,n.value={oldPassword:"",newPassword:"",confirmPassword:""},K()):ElementPlus.ElMessage.error(Z.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{v.value=!1}}return{loginForm:C,logining:R,guestLogining:x,showChangePassword:o,changePasswordForm:n,changingPassword:v,showSetupWizard:N,setupForm:A,setupStep:F,checkSetupWizard:G,completeSetupWizard:se,resetSetupWizard:I,handleLogin:T,handleGuestLogin:B,handleLogout:K,doChangePassword:ie}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let f=null;const{strategyFilter:t,currentView:d,statusFilter:p,currentPage:P,currentSubPage:g,menus:c,currentUser:_,strategyFilterCounts:l,lazyTick:S,dates:i,selectedDate:w,consensus:h,loadConsensusData:C,fetchMerrillClock:R,fetchMarketData:x,loadWatchlist:o,loadAiHistory:n,preloadWatchlistKline:v,loadChatHistory:N,loadSystemStatus:A,checkTushareConnection:F,loadSysMonitor:G,loadAnalytics:se,loadHealthDetail:I,loadHealthMetrics:T,loadAiUsage:B,loadFactCheck:K,loadAutoEvaluateConfig:ie,loadDatasourceConfig:Q,loadFeishuConfig:Z,loadAiConfig:L,loadAiVendors:O,loadRateLimit:z,loadDataRefreshConfig:k,loadBackups:E,loadAllGroups:ce,loadUsers:W,stockDetailTab:b,stockDetailVisible:r,stockKlineLoaded:q,loadStockKline:m,currentKlinePeriod:H,showMerrillDetail:ue,indexDetailVisible:X,restoreDialogFocus:M}=a;e(t,U=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(U.selected)),localStorage.setItem("quant_strategy_filter_mode",U.mode)},{deep:!0}),e([d,p],(U,re)=>{U[0]!==re[0]&&C()}),e([P,g],([U,re])=>{var pe;try{const Y=!(U==="calendar"&&re==="calendar")&&re||"",oe=Y?"#"+U+"/"+Y:"#"+U;window.location.hash!==oe&&(window.location.hash=oe)}catch{}if(re&&localStorage.setItem("quant_last_subpage",re),!re&&c.value.find(de=>de.key===U)){const de=c.value.find(Y=>Y.key===U);de&&de.subPages.length>0&&(g.value=de.subPages[0])}if(U==="shortterm"&&re==="market-review"){const de=window.__lazyLoaders&&window.__lazyLoaders.research;de&&de().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(Y){Y&&Y.name&&!Y.__quantRegistered&&(window.__quantApp.component(Y.name,Y),Y.__quantRegistered=!0)}),S&&S.value++}).catch(function(Y){console.warn("[lazy] research 组件补加载失败",Y)})}U==="calendar"&&re==="calendar"&&(!h.value||h.value.length===0)&&(i.value.length>0&&!w.value&&(w.value=i.value[i.value.length-1]||""),setTimeout(C,50)),U==="calendar"&&re==="pool"&&(!h.value||h.value.length===0)&&(i.value.length>0&&!w.value&&(w.value=i.value[i.value.length-1]||""),setTimeout(C,50)),U==="strategies"&&(re==="merrill"&&R(),re==="market"&&x(),re==="consensus"&&(!h.value||h.value.length===0)&&setTimeout(C,50)),U==="ai"&&(re==="watchlist"&&(o(),n(),setTimeout(v,500)),re==="history"&&n(),re==="overview"&&(n(),o()),re==="chat_history"&&N()),(U==="system"||U==="ops")&&((pe=_.value)==null?void 0:pe.role)==="admin"&&(re==="status"&&(A(),F()),re==="health"&&(I(),T()),re==="schedule"&&I(),re==="guard"&&K(),re==="usage"&&(G(),se(),I(),T(),B(),K()),re==="autoeval"&&(ie(),O()),re==="datasource"&&Q(),re==="feature"&&(Z(),L(),z(),k(),E()),re==="user"&&(ce(),W())),(U==="system"||U==="ops")&&re==="usage"?f||(f=setInterval(()=>{G(),se(),I(),T(),B()},3e4)):f&&(clearInterval(f),f=null)}),e(b,(U,re)=>{U==="kline"&&re&&re!=="kline"&&r.value&&(q.value=!1,setTimeout(async()=>{!await m(H.value)&&r.value&&b.value==="kline"&&setTimeout(()=>m(H.value),800)},50))}),e(ue,U=>{U||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([r,X],([U,re])=>{!U&&!re&&M()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:f,menus:t,currentPage:d,currentSubPage:p,currentView:P,currentKlinePeriod:g,selectedDate:c,dates:_,loadDates:l,loadConsensusData:S,loadDashboardCached:i,appVersion:w,themes:h,fetchMarketData:C,fetchMerrillStages:R,fetchMerrillClock:x,loadAiConfig:o,loadAiVendors:n,loadAiCatalog:v,currentUser:N,loadUserConfig:A,loadAutoEvaluateConfig:F,loadGroupConfig:G,loadUsers:se,loadAllGroups:I,loadAiHistory:T}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function B(W,b){const r={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(W==="calendar"&&r[b])return d.value="calendar",p.value="calendar",r[b]&&(P.value=r[b]),!0;if(W==="research"&&(b==="strategy-write"||b==="custom-write")){d.value="research",p.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",b==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const W=window.location.hash||"";if(!W||W==="#")return;const b=W.replace(/^#\/?/,"").split("/"),r=b[0],q=b[1]||"",m=t.value.find(function(H){return H.key===r});if(m&&!B(r,q)){if(!q)d.value=r,p.value=m.subPages[0]||"";else if(m.subPages.indexOf(q)>=0)d.value=r,p.value=q;else return;window.__lazyLoaders&&window.__lazyLoaders[r]&&window.__quantGoPage&&window.__quantGoPage(r,p.value).catch(function(){})}});const K=(W,b=3e3,r="")=>{const q=new Promise((m,H)=>setTimeout(()=>H(new Error("timeout")),b));return Promise.race([W,q]).catch(m=>{console.warn(`[init] ${r||"task"} failed:`,m.message)})},ie=localStorage.getItem("quant_theme"),Q=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const W=window.__quantModules.themes;let b=Q.theme||"system",r=Q.theme_hue!=null&&Q.theme_hue!==""?Q.theme_hue:null;const q=typeof W.migrateLegacyTheme=="function"?W.migrateLegacyTheme():null;r==null&&q&&(b=q.mode,r=q.hue),r==null&&(r=45),f(b,r)}else ie&&f(ie);await G().catch(function(){}),function(){var W=window.location.hash||"",b=!1;if(W&&W!=="#"){var r=W.replace(/^#\/?/,"").split("/"),q=r[0],m=r[1]||"",H=t.value.find(function(re){return re.key===q});H&&(B(q,m)||(d.value=q,m&&H.subPages.indexOf(m)>=0?p.value=m:m||(p.value=H.subPages[0]||"")),b=!0)}if(!b){var ue=localStorage.getItem("quant_last_page");ue&&t.value.some(function(re){return re.key===ue})?d.value=ue:Q.default_view&&t.value.some(function(re){return re.key===Q.default_view})&&(d.value=Q.default_view);var X=localStorage.getItem("quant_last_subpage");X&&(p.value=X)}var M=localStorage.getItem("quant_last_date");M&&(c.value=M);var U=localStorage.getItem("quant_last_view");U&&(P.value=U),window.__lazyLoaders&&window.__lazyLoaders[d.value]&&window.__quantGoPage&&window.__quantGoPage(d.value,p.value).catch(function(){})}(),fetch("/api/health").then(W=>W.json()).then(W=>{W.version&&(w.value=W.version)}).catch(()=>{});const Z=localStorage.getItem("quant_user"),L=localStorage.getItem("quant_token"),O=!!(Z&&L),z=Promise.all([Promise.resolve().then(()=>{h.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),K(C(),3e3,"marketData"),K(R(),2e3,"merrillStages")]).then(()=>{K(x(),3e3,"merrillClock")});if(o(),v(),O&&N.value&&n(),!O||!N.value){await z;return}let k=!0;try{k=(await fetch("/api/users/me")).ok}catch{k=!1}if(!k){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),N.value=null;return}if(N.value){const W=N.value.theme||"",b=window.__quantModules&&window.__quantModules.themes;let r=Q.theme||"system",q=Q.theme_hue!=null&&Q.theme_hue!==""?Q.theme_hue:null;if(q==null&&b&&typeof b.migrateLegacyTheme=="function"){const m=b.migrateLegacyTheme();if(m)r=m.mode,q=m.hue;else if(W&&b.LEGACY_MAP&&b.LEGACY_MAP[W]){const H=b.LEGACY_MAP[W];r=H[0],q=H[1]}}q==null&&(q=45),f(r,q)}if(window.__quantModules&&window.__quantModules.preferences){const b=await window.__quantModules.preferences.loadPreferences();var E=localStorage.getItem("quant_last_page");!E&&b.default_view&&t.value.some(function(r){return r.key===b.default_view})&&(d.value=b.default_view),b.theme&&f(b.theme,b.theme_hue!=null&&b.theme_hue!==""?b.theme_hue:null),g&&(b.chart_period==="weekly"||b.chart_period==="monthly")&&(g.value=b.chart_period)}await Promise.all([K(A(),2e3,"userConfig"),K(l(),2e3,"dates")]),F().catch(()=>{}),G().catch(()=>{});const ce=d.value==="strategies"?K(i(),2e3,"dashboard"):K(S(),2e3,"consensus");await Promise.all([ce,K(se(),2e3,"users"),K(T(),2e3,"aiHistory")]),I().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:f,onUnmounted:t,watch:d,nextTick:p}=Vue,P=a(!1),g=window.__quantModules&&window.__quantModules.i18n||{},c=g.SUPPORTED_LOCALES||["zh-CN","en"],_=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",l=a(c.indexOf(_)!==-1?_:"zh-CN");typeof g.bindLocale=="function"&&g.bindLocale(l);const S=typeof g.t=="function"?g.t:function(j){return String(j)};function i(j){c.indexOf(j)!==-1&&(l.value=j,typeof g.setLocale=="function"&&g.setLocale(j),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",j))}function w(j,ve){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(j,ve):j==null?"":String(j)}function h(j){(j.key==="Enter"||j.key===" "||j.key==="Spacebar")&&(j.preventDefault(),j.currentTarget&&typeof j.currentTarget.click=="function"&&j.currentTarget.click())}let C=null;function R(){document.activeElement&&document.activeElement!==document.body&&(C=document.activeElement)}function x(){if(C&&C.isConnected)try{C.focus()}catch{}C=null}const o=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{o.value=!0}),window.addEventListener("offline",()=>{o.value=!1})),window.addEventListener("beforeunload",j=>{if(P.value)return j.preventDefault(),j.returnValue="您有未保存的配置变更，确定要离开吗？",j.returnValue});function n(j="light"){typeof navigator<"u"&&navigator.vibrate&&(j==="light"?navigator.vibrate(10):j==="medium"?navigator.vibrate(20):j==="heavy"&&navigator.vibrate([10,30,10]))}const v=useMerrillClock(),{merrillData:N,merrillStagesConfig:A,showMerrillDetail:F,merrillDetailData:G,merrillClockConfig:se,merrillClockLastUpdated:I,merrillReevalResult:T,merrillReevalLoading:B,stages:K,indicatorList:ie,dimensionScoreList:Q,detailDimensionScoreList:Z,confidenceColor:L,timelineStages:O,clockPosition:z,merrillProgressStyle:k,FULL_CYCLE_MONTHS:E,getStageAngle:ce,getCycleProgress:W,getCurrentStageMonths:b,getStageTotalMonths:r,isStageCompleted:q,getCharLabel:m,getAssetName:H,getRankColor:ue,fetchMerrillStages:X,fetchMerrillClock:M,loadMerrillTimeline:U,showTimelineStage:re,merrillTimeline:pe,timelineLoading:de,showStageDetail:Y,saveMerrillClockConfig:oe,doMerrillReevaluate:De,startAutoRefresh:ke,stopAutoRefresh:_e,merrillSnapshots:ee,merrillSnapshotsTotal:xe,fetchMerrillSnapshots:Pe}=v,ae=a(localStorage.getItem("sidebar_collapsed")==="1");function te(){ae.value=!ae.value,localStorage.setItem("sidebar_collapsed",ae.value?"1":"0")}const he=a(null),Ne=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],Ie=e(()=>{var Ye,Ft,Xt;const j=((Ye=ge.value)==null?void 0:Ye.role)||"guest",ve=((Ft=ge.value)==null?void 0:Ft.group)||j,ye=((Xt=he.value)==null?void 0:Xt[ve])||null;return Ne.map(jt=>{if(ye&&ye.visible_menus&&jt.key in ye.visible_menus&&!ye.visible_menus[jt.key])return null;const ba={...jt,name:S("nav."+jt.key)||jt.name};return ye!=null&&ye.visible_sub_pages&&(ba.subPages=jt.subPages.filter(os=>{const Ed=jt.key+"."+os;return ye.visible_sub_pages[Ed]!==!1})),jt.key==="system"&&j==="guest"&&jt.guestSubPages&&(ba.subPages=jt.guestSubPages),ba}).filter(Boolean)});async function Ue(){try{if(!localStorage.getItem("quant_token"))return;const ve=await fetch("/api/groups/my");if(ve.ok){const ye=await ve.json();he.value={[ye.group_id]:ye.group}}}catch(j){console.warn("loadGroupConfig:",j)}}const Ge=a("strategies"),ht=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},st=a(ht.navMode);function Rt(j){const ve=window.__quantModules&&window.__quantModules.navModeCore;st.value=ve?ve.normalizeNavMode(j):j==="tree"||j==="toptab"?j:"toptab",ve&&ve.writePrefs({navMode:st.value})}const Se=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function we(j,ve=""){n("light"),Ge.value=j,et.value=ve,localStorage.setItem("quant_last_subpage",ve)}function Ae(){const j=Ie.value;if(!j||!j.length)return;if(!j.some(function(Fe){return Fe.key===Ge.value})){const Fe=j[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Fe.key),Ge.value=Fe.key,et.value=Fe.subPages&&Fe.subPages[0]||"";return}const ye=j.find(function(Fe){return Fe.key===Ge.value});ye&&ye.subPages&&ye.subPages.length&&!ye.subPages.includes(et.value)&&(et.value=ye.subPages[0])}const Re=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Xe=a("multifactor"),Ze=a(null),tt=a(1e5),xt=a(!1),St=a(null);let pt=null,zt=null;async function Kt(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ve={initial_capital:tt.value||1e5};Ze.value&&Ze.value.length===2&&(ve.start_date=Ze.value[0],ve.end_date=Ze.value[1]),xt.value=!0,St.value=null;try{const ye=await fetch("/api/strategies/"+Xe.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)});if(!ye.ok){const Ft=await ye.json().catch(()=>({}));throw new Error(Ft.detail||"回测失败")}const Fe=await ye.json(),Ye=Fe.result||{};if(!Ye.success)throw new Error(Ye.message||"回测失败");Fe.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),St.value={total_return_pct:((Ye.total_return??0)*100).toFixed(2),annual_return_pct:((Ye.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ye.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ye.sharpe_ratio??0).toFixed(2),win_rate:((Ye.win_rate??0)*100).toFixed(2),out_sample:Ye.outsample_total_return===void 0?"":((Ye.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ye.overfit_warning||!1,message:Ye.message||""},Jt(Ye.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(ye){ElementPlus.ElMessage.error(ye.message||"回测失败")}finally{xt.value=!1}}function Jt(j){const ve=document.getElementById("backtestEquityChart");if(!ve||!j||j.length===0)return;const ye=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Fe=()=>{zt=j,pt&&(pt.dispose(),pt=null),pt=echarts.init(ve),pt.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ye=j.map(Xt=>Xt.date||Xt[0]),Ft=j.map(Xt=>Xt.value??Xt[1]);pt.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ye,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Ft,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};ye?ye().then(Fe).catch(()=>{}):Fe()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){zt&&Jt(zt)}));const et=a("overview"),yt=e(()=>{const j=Ne.find(ve=>ve.key===Ge.value);return j?j.name:Ge.value}),Wt=a(0),gt=e(()=>{Wt.value;const j={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ve=et.value;return Ge.value==="shortterm"&&ve==="market-review"?"qc-research-page":Ge.value==="ops"&&ve==="execution"?"qc-strategies-page":j[Ge.value]||""}),Ut=a(!1),_t=a({}),Je=a([]);a("");const At=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),wt=a("day"),J=a("all"),ge=a(null);d(Ie,function(){Ae()}),d([Ge,et],function(){const j=document.querySelector(".main-content");j&&(j.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const j=localStorage.getItem("quant_user"),ve=localStorage.getItem("quant_token");if(j&&ve)try{ge.value=JSON.parse(j)}catch{}}();const at=a(!1),kt=a("kline"),lt=a(null),It=a(!1),ea=a(localStorage.getItem("qc_detail_mode")||"split"),aa=a(window.innerWidth<=1024),na=e(()=>ea.value==="split"&&!aa.value);function ta(j){ea.value=j;try{localStorage.setItem("qc_detail_mode",j)}catch{}}window.addEventListener("resize",()=>{aa.value=window.innerWidth<=1024});const Qt=35,Ht=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Nt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Ht.value?Ht.value+"px":Qt+"%")}Nt();function Gt(j){const ve=Math.max(1,Math.min(j,2e3));Ht.value=ve,Nt();try{localStorage.setItem("qc_split_width",String(ve))}catch{}}function ft(j){if(Ht.value)return Ht.value;const ve=j?j.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ve*Qt/100))}let u=null;function $(j,ve){if(!ve||aa.value)return;j.preventDefault();const ye=ve.getBoundingClientRect().width;u={startX:j.clientX,startW:ft(ve),minW:Math.max(200,Math.floor(ye*Qt/100)),maxW:Math.floor(ye/2)},document.body.classList.add("qc-split-resizing")}function le(j){if(!u)return;const ve=j.clientX-u.startX;let ye=u.startW+ve;ye=Math.max(u.minW,Math.min(ye,u.maxW)),Ht.value=ye,Nt();try{localStorage.setItem("qc_split_width",String(ye))}catch{}}function Te(){u&&(u=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",le),document.addEventListener("mouseup",Te));function Ve(j){const ve=j.target&&j.target.closest?j.target.closest("[data-split-resize]"):null;if(!ve)return;const ye=ve.closest("[data-split-root]");$(j,ye)}typeof document<"u"&&document.addEventListener("mousedown",Ve,!0);const Qe={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},Oe=a({});function rt(j,ve){return Qe[ve]||ve}function nt(j){const ve=Ne.find(Fe=>Fe.key===j);if(!ve||!ve.subPages||!ve.subPages.length)return;if(!(Oe.value[j]||[]).length){const Fe=ve.subPages[0];Oe.value=Object.assign({},Oe.value,{[j]:[{subPage:Fe,title:rt(j,Fe)}]})}}function ct(j,ve){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=rt(j,ve);if(ye){const Ye=ye.openTab(Oe.value,j,ve,Fe);Oe.value=Ye.groups}else{const Ye=Oe.value[j]||[];Ye.some(Ft=>Ft.subPage===ve)||(Oe.value=Object.assign({},Oe.value,{[j]:Ye.concat([{subPage:ve,title:Fe}])}))}we(j,ve)}function Ot(j,ve){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=et.value;let Ye=null;if(ye)Ye=ye.closeTab(Oe.value,j,ve,Fe),Oe.value=Ye.groups;else{const jt=Oe.value[j]||[];Oe.value=Object.assign({},Oe.value,{[j]:jt.filter(ba=>ba.subPage!==ve)})}if(!(Oe.value[j]||[]).length){nt(j);const jt=Ne.find(os=>os.key===j),ba=jt&&jt.subPages&&jt.subPages[0];ba&&we(j,ba);return}const Xt=Ye?Ye.nextActive:null;Xt&&we(j,Xt)}function Et(j,ve){if(!(Oe.value[j]||[]).some(Fe=>Fe.subPage===ve)){ct(j,ve);return}we(j,ve)}d([Ge,et],([j,ve])=>{nt(j);const ye=Oe.value[j]||[];ve&&!ye.some(Fe=>Fe.subPage===ve)&&(Oe.value=Object.assign({},Oe.value,{[j]:ye.concat([{subPage:ve,title:rt(j,ve)}])}))},{immediate:!0});const D=function(j){if(!(j.ctrlKey&&j.key==="Tab"))return;const ve=Ge.value,ye=Oe.value[ve]||[];if(ye.length<=1)return;j.preventDefault();const Fe=et.value,Ye=Math.max(0,ye.findIndex(jt=>jt.subPage===Fe)),Ft=j.shiftKey?(Ye-1+ye.length)%ye.length:(Ye+1)%ye.length,Xt=ye[Ft];Xt&&Et(ve,Xt.subPage)};window.addEventListener("keydown",D);const fe=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),Le=a("light"),Me=[45,220,0,140,270,320],ze={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},He=a(45),mt=a(function(){const j=window.__quantModules&&window.__quantModules.preferences;return j&&j.getPreference&&j.getPreference("theme")||"system"}());(function(){const j=window.__quantModules&&window.__quantModules.preferences,ve=j&&j.getPreference&&j.getPreference("theme_hue");ve!=null&&ve!==""&&(He.value=parseInt(ve,10))})();function Mt(j){return"hsl("+j+", 75%, 42%)"}function it(j){return ze[j]||"自定义 "+j}const Bt=a(""),qa=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),ia=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),wa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],oa=a({day:[],week:[],month:[],year:[]}),Pa=a({});function ra(j,ve){let ye=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(ye=window.__quantModules.themes.applyTheme(j,ve)),Le.value=ye&&ye.mode?ye.mode:j==="dark"||j==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Da(j,ve){const ye=window.__quantModules&&window.__quantModules.preferences;if(!(!ye||!ye.setPreferences))try{ye.setPreferences({theme:j}),ve!=null&&ve!==""&&ye.setPreferences({theme_hue:parseInt(ve,10)})}catch{}}function ca(j,ve){ra(j,ve),ve!=null&&ve!==""&&(He.value=parseInt(ve,10));const ye=window.__quantModules&&window.__quantModules.themes;let Fe=j;ye&&ye.LEGACY_MAP&&ye.LEGACY_MAP[j]&&(Fe=ye.LEGACY_MAP[j][0]),Fe==="light"||Fe==="dark"||Fe==="system"?mt.value=Fe:mt.value=Le.value,Fe==="system"&&(Fe=Le.value),Da(Fe,ve),ge.value&&(fetch(`/api/users/${ge.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Fe})}),ge.value.theme=Fe,localStorage.setItem("quant_user",JSON.stringify(ge.value)))}function $t(j){const ve=window.__quantModules&&window.__quantModules.preferences,ye=ve&&ve.getPreference?ve.getPreference("theme_hue"):null;ca(j,ye)}function ka(j){He.value=parseInt(j,10);const ve=window.__quantModules&&window.__quantModules.preferences,ye=ve&&ve.getPreference&&ve.getPreference("theme")||"light";ca(ye,He.value)}const ga=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function Ra(j){ga.value=!!j;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",j?"show":"hide")}catch{}}const za=e(()=>{const j=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ga.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...j]:j}),y=a("daily");(function(){try{const ve=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ve==="weekly"||ve==="monthly")&&(y.value=ve)}catch{}})();const s=a(!1),V=a(""),ne=a(!1),Ce=a(!1),qe=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Tt=["MA5","MA10","MA20","MA60"],$e=a(!1);let bt=0;async function Yt(j){if(!lt.value)return!1;const ve=++bt;s.value=!0,y.value=j;try{const Fe=await(await fetch(`/api/market/kline/${lt.value.stock}?period=${j}&limit=60`)).json();if(!Fe.success||!Fe.data)throw new Error(Fe.message||"数据获取失败");return V.value=Fe.degraded_from?"分钟数据("+Fe.degraded_from+")暂不可用, 已降级展示日线":"",$s(lt.value.stock),ve!==bt?!1:(kt.value!=="kline"||(Ce.value=!0,await p(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Fe.data,j,!1,{isMobile:ms.value,onLegend:Ye=>{Object.keys(qe.value).forEach(Ft=>{Ft in Ye&&(qe.value[Ft]=!!Ye[Ft])})}}),Pt()),!0)}catch(ye){return console.error("[kline] 加载失败:",lt.value&&lt.value.stock,j,ye),kt.value==="kline"&&(Ce.value=!1,V.value="",ElementPlus.ElMessage.error("K线加载失败: "+(ye&&ye.message?ye.message:"数据源不可达，请重试"))),!1}finally{s.value=!1}}async function Ct(j){if(Ua.value){ne.value=!0,y.value=j;try{const ye=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${j}&limit=60`)).json();if(!ye.success||!ye.data)throw new Error(ye.message||"数据获取失败");$e.value=!0,await p(),window.__quantModules.charts.renderKlineTo("indexKlineChart",ye.data,j,!0,{isMobile:ms.value,onLegend:Fe=>{Object.keys(qe.value).forEach(Ye=>{Ye in Fe&&(qe.value[Ye]=!!Fe[Ye])})}}),Pt()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{ne.value=!1}}}async function da(j){if(!Ce.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await Yt(j)}async function ua(j){if(!$e.value){ElementPlus.ElMessage.info("请先加载K线");return}await Ct(j)}function We(j){const ve=(at.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ve&&ve.dispatchAction({type:"legendToggleSelect",name:j})}function Pt(){["K线","MA5","MA10","MA20","MA60"].forEach(j=>{qe.value[j]=!0})}async function ha(){const j=await fetch("/api/system/metrics");if(!j.ok)throw new Error("metrics "+j.status);const ve=await j.json(),ye=Array.isArray(ve)?ve:ve&&ve.data_sources||[];Je.value=ye}const ya=()=>ls,Dt=()=>Es,Ka=()=>Ho,dn=()=>Aa,un=()=>ts,vn=window.__quantAppLogic.data.create({currentView:wt,statusFilter:J,dashboardData:_t,loadHealthMetrics:ha,getLoadDashboardData:ya,getLastRefreshTime:Dt,getFetchPoolSignals:Ka}),{loading:mn,loadingView:pn,viewCache:fn,dates:Ia,selectedDate:sa,lastLoadTime:gn,consensus:_a,viewNote:hn,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ea,loadDashboardCached:Na}=vn,yn=window.__quantAppLogic.market.create({currentKlinePeriod:y,loadIndexKline:Ct,rememberDialogTrigger:R,menus:Ie,currentPage:Ge,currentSubPage:et,stockDetail:lt,selectedDate:sa}),{marketData:bn,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:wn,indexAiLoading:kn,fetchMarketData:Ga,showIndexDetail:_n,loadCachedIndexEval:xn,doIndexAiEvaluate:Sn,disposeStockKline:vs,isMobile:ms,zoomKlineRange:Cn,scoreAnimating:qn,scoreDelta:En,scorePulse:Mn,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Tn,onTouchEnd:Pn}=yn,Dn=window.__quantAppLogic.ops.create({navigateTo:we,currentPage:Ge,currentSubPage:et}),{feishuConfig:ps,feishuTestStatus:Rn,feishuTestMessage:zn,testFeishuWebhook:An,saveFeishuConfig:Ln,aiFabHidden:In,openAiFab:fs,strategyRecommendations:Nn,aiUsage:On,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:jn,analyticsRank:Vn,analyticsDays:Fn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Hn,loadHealthDetail:bs,reviewTriggering:Bn,triggerMarketReview:Kn,factCheck:Wn,factCheckRunning:Un,loadFactCheck:ws,triggerFactCheck:Gn,backups:Yn,backupCreating:Jn,loadBackups:ks,createBackup:Qn,restoreBackup:$n,reportExporting:Xn,reportExportMsg:Zn,exportReport:ei,tourVisible:ti,tourStep:ai,tourSteps:si,maybeShowTour:ni,skipTour:ii,finishTour:li,feedbackText:oi,feedbackSubmitting:ri,submitFeedback:ci}=Dn,di=window.__quantAppLogic.nav.create({currentView:wt,selectedDate:sa,dates:Ia,loadConsensusData:Ea,hapticFeedback:n}),{viewUnit:ui,datePickerType:vi,dateFormat:mi,canNavPrev:pi,canNavNext:fi,switchView:_s,navigateDate:xs,disabledDate:gi,onDateChange:hi}=di,yi=window.__quantAppLogic.keys.create({menus:Ie,subPageNames:Qe,navigateTo:we,currentPage:Ge,currentView:wt,navigateDate:xs,switchView:_s,getLoadDashboardData:ya,refreshCalendarData:ds,getLoadAiHistory:dn,exportCSV:us,getShowBatchEvaluate:un,openAiFab:fs,toggleSidebar:te,showStockDetail:Cs}),{searchQuery:bi,searchStocks:wi,onSearchSelect:ki,shortcutHelpVisible:_i,commandPaletteVisible:xi,handleGlobalKeydown:Ss}=yi;let Oa=0;async function Cs(j){const ve=++Oa;R(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,""),Xa.value=null,y.value="daily",Ce.value=!1,kt.value="kline",lt.value=null,It.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),at.value=!0,p(()=>Ja());try{const ye=await fetch(`/api/calendar/stock/${j}?date=${sa.value}`);if(ve!==Oa)return;lt.value=await ye.json(),lt.value&&lt.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,lt.value.name)}catch{if(ve!==Oa)return;ElementPlus.ElMessage.error("加载失败"),lt.value={stock:j,name:"",total_days:0}}finally{ve===Oa&&(It.value=!1)}setTimeout(async()=>{await Yt("daily"),Ya()},500),as(j)}const Si={强烈推荐:"var(--el-danger)",推荐:"var(--el-success)",谨慎推荐:"var(--el-warning)",中性:"var(--el-info)",观望:"var(--text-tertiary)",买入:"var(--el-success)",持有:"var(--el-warning)",减仓:"var(--el-danger)",卖出:"var(--el-danger)"},Ci={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function qi(j){return Si[j]||"var(--text-tertiary)"}function Ei(j){return Ci[j]||"var(--bg-hover)"}const Mi=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:Ce,stockDetailVisible:at,stockDetailTab:kt,stockDetail:lt,disposeStockKline:vs}):{},{chatSessions:Ti,chatHistoryView:Pi,selectedChatIds:Di,expandedChatDates:Ri,expandedChatMonths:zi,expandedChatStocks:Ai,chatHistoryLoading:Li,chatHistoryError:Ii,allChatSessionsFlat:Ni,chatGroupedByDate:Oi,chatGroupedByMonth:ji,chatGroupedByStock:Vi,toggleSelectChat:Fi,toggleSelectChatDate:Hi,toggleSelectChatMonth:Bi,toggleSelectChatStock:Ki,toggleChatDateExpand:Wi,toggleChatMonthExpand:Ui,toggleChatStockExpand:Gi,selectAllChatSessions:Yi,deleteSelectedChatSessions:Ji,viewChatSession:Qi,loadChatHistory:qs,deleteChatSession:$i,renderMarkdown:Xi,stockChatInput:Zi,stockChatMessages:el,stockChatLoading:tl,stockChatError:al,askStockSend:sl,askStockQuick:nl}=Mi,il=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:ge,applyTheme:ra,allMenuDefs:Ne,loadGroupConfig:Ue}):{},{userList:ll,userSearch:ol,groupFilter:rl,userPageTab:cl,expandedGroups:dl,addMemberGroupMap:ul,filteredUsers:vl,toggleGroupExpand:ml,removeMemberFromGroupInline:pl,addMemberToGroupInline:fl,changeUserGroup:gl,showAddUser:hl,editingUser:yl,userForm:bl,savingUser:wl,editingGroup:kl,menuConfigDialog:_l,memberDialog:xl,groupEditForm:Sl,subPageCache:Cl,showAddGroup:ql,addGroupForm:El,savingGroup:Ml,groupMembers:Tl,addMemberUsername:Pl,selectedMemberGroup:Dl,subPageSectionExpanded:Rl,toggleSubPageSection:zl,getGroupMemberCount:Al,getMenuEnabledCount:Ll,groupCount:Il,openMemberManager:Nl,loadGroupMembers:Ol,addMemberToGroup:jl,removeMemberFromGroup:Vl,availableUsersForGroup:Fl,onParentToggle:Hl,openMenuConfig:Bl,saveMenuConfig:Kl,deleteGroupConfig:Wl,createGroup:Ul,allGroups:Gl,getGroupName:Yl,loadAllGroups:$a,loadUsers:ja,editUser:Jl,saveUser:Ql,deleteUser:$l,toggleUserEnabled:Xl,resetUserPassword:Zl}=il,eo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:Ge,currentSubPage:et,dashboardData:_t,searchKeyword:Bt,statusFilter:J,strategyFilter:ia,strategyFilterCounts:oa}):{},{applyStrategyFilter:Tf,statusCounts:to,stockPool:ao,strategyDistribution:so,strategyPreviewCount:no,saveStrategyFilter:io,filteredConsensusRank:lo,currentPoolSize:oo,filteredStrategyCounts:ro,poolChangeBadge:co,timeBarPercent:uo,lastRefreshTime:Es,timeSinceRefresh:vo,navigateToStrategyFilter:mo}=eo,po=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:P,consensus:_a}):{},{aiResult:Xa,lastEvalTime:fo,evalHistoryComparison:go,checklistItems:ho,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ps,expandedMonths:yo,expandedStocks:Ds,poolSignals:bo,toggleMonthExpand:wo,aiHistoryView:ko,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:_o,aiCatalog:xo,aiModelsError:So,testingAllModels:Co,savingAiModels:qo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Eo,testVendorModel:Mo,testAllVendorModels:To,fetchVendorModels:Po,addVendorFromCatalog:Do,addCustomVendor:Ro,addVendorModel:zo,removeVendorModel:Ao,removeVendor:Lo,toggleVendorKeyReveal:Io,toggleVendorEdit:No,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:Oo,providerInfo:jo,aiPresets:Pf,applyPreset:Vo,onProviderChange:Fo,fetchPoolSignals:Ho,cancelPoolSignals:Qs,loadLastEvaluation:as}=po,Bo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:ge,selectedDate:sa,stockDetail:lt,stockDetailTab:kt,stockDetailVisible:at,stockDetailLoading:It,stockKlineLoaded:Ce,viewCache:fn,animateScoreEntrance:Ja,loadStockKline:Yt,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ps,expandedStocks:Ds,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Ko,evalStrategy:Wo,watchlistSort:Uo,watchlist:Go,watchlistCodes:Yo,sortedWatchlist:Jo,getWatchlistScore:Qo,getLatestScore:Df,addSearchResult:$o,evaluatedCodes:Xo,klineLoadedCodes:Zo,markKlineLoaded:$s,watchlistSearch:er,watchlistResults:tr,watchlistSearching:ar,dataRefreshConfig:sr,dataRefreshReloading:nr,dataRefreshSaving:ir,aiHistoryLoading:lr,aiHistoryError:or,aiHistoryTotal:rr,aiHistoryLoadingMore:cr,hasMoreAiHistory:dr,loadMoreAiHistory:ur,watchlistLoading:vr,doAiEvaluate:mr,loadAiHistory:Aa,deleteSingleHistory:pr,toggleSelectHistory:fr,clearSelection:gr,clearWatchlistSelection:hr,batchReevaluateHistory:yr,batchAddToWatchlist:br,batchRemoveWatchlist:wr,toggleSelectWatchlist:kr,selectAllHistory:_r,selectAllWatchlist:xr,deleteSelectedHistory:Sr,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:Cr,loadWatchlist:Zs,addToWatchlist:qr,removeFromWatchlist:Er,clearWatchlist:Mr,toggleWatchlist:Tr,showStockKline:Pr,preloadingKline:Dr,preloadWatchlistKline:en,watchlistEvaluate:Rr,batchEvaluateWatchlist:zr,batchEvaluateSelected:Ar,searchStockForWatchlist:Lr,loadDataRefreshConfig:tn,saveDataRefreshConfig:Ir,triggerDataReload:Nr,triggerDataPull:Or,dataPullRunning:jr,groupedByDate:Vr,aiHistoryByStock:Fr,groupedByMonth:Hr,aiHistoryStockCount:Br,scoreDistribution:Kr,quickEvaluate:Wr,toggleDateExpand:Ur,toggleSelectDate:Gr,toggleSelectMonth:Yr,toggleStockExpand:Jr,toggleSelectStock:Qr,registerTrendChart:$r,viewAiResult:Xr,doBatchEvaluate:Zr,realtimeQuotes:ec,realtimeDegraded:tc,realtimeWsState:ac,connectRealtimeQuotes:sc,disconnectRealtimeQuotes:nc,quoteWarningFor:ic,realtimeQuoteColor:lc,realtimePriceText:oc,realtimePctText:rc,realtimeRatioText:cc,REALTIME_DEGRADED_TEXT:dc,REALTIME_FALLBACK_TEXT:uc}=Bo,vc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Re}):{},{btStrategyOptions:mc,btSelectedStrategies:pc,toggleBtStrategy:fc,btDateRange:gc,btCapital:hc,btCommissionRate:yc,btIncludeBenchmark:bc,btRunning:wc,btResult:kc,btError:_c,btMetrics:xc,btAnnualReturns:Sc,btTrades:Cc,btStrategyMetricsRows:qc,btDrawdownRegion:Ec,runBacktestWorkbench:Mc,exportBacktestCSV:Tc,registerBacktestNavChart:Pc,btFmtNum:Dc}=vc,Rc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:P,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:Le,changeTheme:ca,autoEvaluateConfig:Za,currentUser:ge,strategyFilter:ia,applyTheme:ra,dashboardData:_t,lastRefreshTime:Es,saveAiModels:Eo}):{},{configSaving:zc,globalConfigDirty:Ac,lastSavedTime:Lc,feishuConfigOriginal:Rf,aiConfigOriginal:zf,tushareConfigOriginal:Af,tushareConfig:Ic,tushareStatus:Nc,datasourceConfig:Oc,datasourceStatus:jc,syncingData:Vc,stockCount:Fc,tradeDateCount:Hc,aiStatus:Bc,appVersion:an,showImportDialog:Kc,rateLimitConfig:Wc,rateLimitDirty:Uc,rateLimitSaving:Gc,loadRateLimit:ss,saveRateLimit:Yc,saveAiConfig:Jc,testAiApi:Qc,exportConfig:$c,importConfig:Xc,saveAllConfig:Zc,resetAllConfig:ed,testTushareConnection:td,checkTushareConnection:Fa,syncStockData:ad,loadTushareConfig:sn,loadDatasourceConfig:nn,saveDatasourceConfig:sd,testDatasource:nd,toggleDatasourceKeyReveal:id,toggleDatasourceEdit:ld,loadFeishuConfig:ns,loadAiConfig:Ha,loadUserConfig:ln,loadSystemStatus:is,loadDashboardData:ls}=Rc,od=window.__quantAppLogic.auth.create({currentUser:ge,loadUserConfig:ln,loadDates:cs,loadDashboardData:ls,loadDashboardCached:Na,loadHealthMetrics:ha,loadConsensusData:Ea,applyTheme:ra,maybeShowTour:ni,loadAiVendors:Va,loadGroupConfig:Ue,groupsConfig:he}),{loginForm:rd,logining:cd,guestLogining:dd,showChangePassword:ud,changePasswordForm:vd,changingPassword:md,showSetupWizard:pd,setupForm:fd,setupStep:gd,checkSetupWizard:hd,completeSetupWizard:yd,resetSetupWizard:bd,handleLogin:wd,handleGuestLogin:kd,handleLogout:_d,doChangePassword:xd}=od;window.__quantAppLogic.watch.register({strategyFilter:ia,currentView:wt,statusFilter:J,currentPage:Ge,currentSubPage:et,menus:Ie,currentUser:ge,strategyFilterCounts:oa,lazyTick:Wt,dates:Ia,selectedDate:sa,consensus:_a,loadConsensusData:Ea,fetchMerrillClock:M,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:Aa,preloadWatchlistKline:en,loadChatHistory:qs,loadSystemStatus:is,checkTushareConnection:Fa,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:ha,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:nn,loadFeishuConfig:ns,loadAiConfig:Ha,loadAiVendors:Va,loadRateLimit:ss,loadDataRefreshConfig:tn,loadBackups:ks,loadAllGroups:$a,loadUsers:ja,stockDetailTab:kt,stockDetailVisible:at,stockKlineLoaded:Ce,loadStockKline:Yt,currentKlinePeriod:y,showMerrillDetail:F,indexDetailVisible:Wa,restoreDialogFocus:x});const Sd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:ra,menus:Ie,currentPage:Ge,currentSubPage:et,currentView:wt,currentKlinePeriod:y,selectedDate:sa,dates:Ia,loadDates:cs,loadConsensusData:Ea,loadDashboardCached:Na,appVersion:an,themes:fe,fetchMarketData:Ga,fetchMerrillStages:X,fetchMerrillClock:M,loadMerrillTimeline:U,showTimelineStage:re,merrillTimeline:pe,timelineLoading:de,loadAiConfig:Ha,loadAiVendors:Va,loadAiCatalog:Is,currentUser:ge,loadUserConfig:ln,loadAutoEvaluateConfig:Xs,loadGroupConfig:Ue,loadUsers:ja,loadAllGroups:$a,loadAiHistory:Aa}),{runOnMounted:Cd}=Sd;window.__quantGoPage=async(j,ve)=>{try{const ye=window.__lazyLoaders&&window.__lazyLoaders[j];ye&&await ye()}catch(ye){console.warn("[lazy] 页面组件加载失败",j,ye)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(ye=>{ye&&ye.name&&!ye.__quantRegistered&&(window.__quantApp.component(ye.name,ye),ye.__quantRegistered=!0)}),Wt&&Wt.value++,Ge.value=j,ve&&(et.value=ve)};let Ma;d(Ge,async j=>{var ve;n("light");try{const ye=Ne.find(function(Fe){return Fe.key===j});document.title=(ye?ye.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",j),j!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:j})}).catch(()=>{})}catch(ye){console.warn("pageView track failed:",ye)}if(Ma&&(clearInterval(Ma),Ma=null),j==="strategies")await Na(),Ma=setInterval(()=>{Na().catch(()=>{})},5*60*1e3);else if(j==="calendar")sa.value&&await Ea();else if(j==="ai")gs(),Qa(),await Aa();else if(j==="system"){if(!sa.value){const Fe=await(await fetch("/api/dashboard")).json(),Ye=Fe.data||Fe;Ye.latest_date&&(sa.value=Ye.latest_date)}if(sa.value){const ye=["day","week","month","year"];for(const Fe of ye)try{const Ft=await(await fetch(`/api/view/${Fe}/${sa.value}?status=all`)).json();oa.value[Fe]=Ft.stocks||[]}catch(Ye){console.warn("loadConsensusData view load failed:",Ye)}(!_a.value||_a.value.length===0)&&(_a.value=oa.value.day||[])}((ve=ge.value)==null?void 0:ve.role)==="admin"&&(await ja(),await ns(),await sn(),await is(),await Ha(),await ss(),Fa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Fa,36e5)))}}),f(async()=>{await Cd()}),ke(),U(),t(()=>{Ma&&clearInterval(Ma),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",D)});function qd(j,ve=2){return j==null||j===""||isNaN(Number(j))?"--":Number(j).toFixed(ve)}return{currentPage:Ge,pageComp:gt,currentSubPage:et,sidebarCollapsed:ae,menus:Ie,navMode:st,setNavMode:Rt,tabGroups:Oe,openTab:ct,closeTab:Ot,activateTab:Et,fmtNum:qd,sanitizeHtml:w,keyClick:h,isOnline:o,currentUser:ge,allMenuDefs:Ne,t:S,locale:l,changeLanguage:i,currentPageName:yt,subPageNames:Qe,searchQuery:bi,searchStocks:wi,onSearchSelect:ki,selectedDate:sa,onDateChange:hi,disabledDate:gi,refreshCalendarData:ds,exportCSV:us,viewNote:hn,loading:mn,lastLoadTime:gn,resetSetupWizard:bd,showChangePassword:ud,themes:fe,currentTheme:Le,changeTheme:ca,changeThemeMode:$t,changeThemeHue:ka,handleLogout:_d,themeHues:Me,themeHueNames:ze,themeHue:He,themeMode:mt,hueColor:Mt,hueName:it,marketData:bn,merrillData:N,merrillTimeline:pe,timelineLoading:de,merrillStagesConfig:A,fetchMerrillStages:X,merrillSnapshots:ee,merrillSnapshotsTotal:xe,healthMetrics:Je,feishuConfig:ps,feishuTestStatus:Rn,feishuTestMessage:zn,shortcutHelpVisible:_i,shortcutHelpItems:Se,commandPaletteVisible:xi,tourVisible:ti,tourStep:ai,tourSteps:si,skipTour:ii,finishTour:li,backups:Yn,backupCreating:Jn,loadBackups:ks,createBackup:Qn,restoreBackup:$n,reportExporting:Xn,reportExportMsg:Zn,exportReport:ei,sysMonitor:jn,analyticsRank:Vn,analyticsDays:Fn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Hn,loadHealthDetail:bs,reviewTriggering:Bn,triggerMarketReview:Kn,factCheck:Wn,factCheckRunning:Un,loadFactCheck:ws,triggerFactCheck:Gn,strategyRecommendations:Nn,aiUsage:On,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:In,openAiFab:fs,feedbackText:oi,feedbackSubmitting:ri,submitFeedback:ci,backtestStrategies:Re,backtestStrategy:Xe,backtestRange:Ze,backtestCapital:tt,backtestRunning:xt,backtestResult:St,runBacktest:Kt,btStrategyOptions:mc,btSelectedStrategies:pc,toggleBtStrategy:fc,btDateRange:gc,btCapital:hc,btCommissionRate:yc,btIncludeBenchmark:bc,btRunning:wc,btResult:kc,btError:_c,btMetrics:xc,btAnnualReturns:Sc,btTrades:Cc,btStrategyMetricsRows:qc,btDrawdownRegion:Ec,runBacktestWorkbench:Mc,exportBacktestCSV:Tc,registerBacktestNavChart:Pc,btFmtNum:Dc,fetchMarketData:Ga,fetchMerrillClock:M,testFeishuWebhook:An,saveFeishuConfig:Ln,merrillClockConfig:se,merrillClockLastUpdated:I,merrillReevalResult:T,merrillReevalLoading:B,saveMerrillClockConfig:oe,doMerrillReevaluate:De,dataRefreshConfig:sr,dataRefreshReloading:nr,dataRefreshSaving:ir,loadDataRefreshConfig:tn,saveDataRefreshConfig:Ir,triggerDataReload:Nr,triggerDataPull:Or,dataPullRunning:jr,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:wn,indexAiLoading:kn,loadCachedIndexEval:xn,showIndexDetail:_n,doIndexAiEvaluate:Sn,klinePeriods:za,currentKlinePeriod:y,klineLoading:s,indexKlineLoading:ne,stockKlineLoaded:Ce,indexKlineLoaded:$e,klineDegradeNote:V,klineShowMinutes:ga,toggleKlineShowMinutes:Ra,loadStockKline:Yt,switchKlinePeriod:da,loadIndexKline:Ct,switchIndexKlinePeriod:ua,zoomKlineRange:Cn,MA_LINES:Tt,klineMaVisible:qe,toggleKlineMa:We,scoreAnimating:qn,scoreDelta:En,scorePulse:Mn,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:F,merrillDetailData:G,showStageDetail:Y,getCharLabel:m,getAssetName:H,getRankColor:ue,levelColor:qi,levelBg:Ei,timelineStages:O,getStageAngle:ce,getCycleProgress:W,getCurrentStageMonths:b,getStageTotalMonths:r,isStageCompleted:q,stages:K,indicatorList:ie,dimensionScoreList:Q,confidenceColor:L,views:At,currentView:wt,statusFilter:J,loginForm:rd,logining:cd,guestLogining:dd,dashboardData:_t,loadingView:pn,dates:Ia,consensus:_a,searchKeyword:Bt,stockDetailVisible:at,stockDetailTab:kt,stockDetail:lt,stockDetailLoading:It,detailDisplayMode:ea,setDetailDisplayMode:ta,isNarrow:aa,detailSplitEnabled:na,splitWidth:Ht,setSplitWidth:Gt,SPLIT_DEFAULT_PCT:Qt,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:ll,showAddUser:hl,editingUser:yl,userForm:bl,savingUser:wl,userSearch:ol,filteredUsers:vl,groupFilter:rl,userPageTab:cl,expandedGroups:dl,addMemberGroupMap:ul,toggleGroupExpand:ml,removeMemberFromGroupInline:pl,addMemberToGroupInline:fl,changeUserGroup:gl,statusCounts:to,stockPool:ao,poolSignals:bo,aiResult:Xa,aiHistory:Ms,groupedByDate:Vr,groupedByMonth:Hr,expandedDates:Ps,expandedMonths:yo,aiHistoryByStock:Fr,aiHistoryStockCount:Br,expandedStocks:Ds,aiHistoryView:ko,aiHistoryLoading:lr,aiHistoryError:or,aiHistoryTotal:rr,aiHistoryLoadingMore:cr,hasMoreAiHistory:dr,loadMoreAiHistory:ur,watchlistLoading:vr,scoreDistribution:Kr,quickEvalStock:Ko,evalStrategy:Wo,checklistItems:ho,evalHistoryComparison:go,quickEvaluate:Wr,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:qa,toggleDateExpand:Ur,toggleMonthExpand:wo,toggleSelectDate:Gr,toggleSelectMonth:Yr,toggleSelectStock:Qr,toggleStockExpand:Jr,registerTrendChart:$r,selectedWatchlistCodes:Rs,clearWatchlistSelection:hr,toggleSelectWatchlist:kr,selectAllHistory:_r,selectAllWatchlist:xr,batchRemoveWatchlist:wr,batchEvaluateSelected:Ar,batchReevaluateHistory:yr,batchAddToWatchlist:br,viewUnit:ui,datePickerType:vi,dateFormat:mi,canNavPrev:pi,canNavNext:fi,handleLogin:wd,handleGuestLogin:kd,switchView:_s,navigateDate:xs,navigateTo:we,loadDashboardData:ls,loadConsensusData:Ea,showStockDetail:Cs,doAiEvaluate:mr,doBatchEvaluate:Zr,loadAiHistory:Aa,loadLastEvaluation:as,lastEvalTime:fo,viewAiResult:Xr,saveAiConfig:Jc,testAiApi:Qc,exportConfig:$c,importConfig:Xc,configSaving:zc,configChanged:P,watchlist:Go,watchlistCodes:Yo,watchlistSearch:er,watchlistResults:tr,watchlistSearching:ar,watchlistSort:Uo,sortedWatchlist:Jo,getWatchlistScore:Qo,addSearchResult:$o,evaluatedCodes:Xo,klineLoadedCodes:Zo,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:qr,removeFromWatchlist:Er,clearWatchlist:Mr,searchStockForWatchlist:Lr,toggleWatchlist:Tr,batchEvaluateWatchlist:zr,watchlistEvaluate:Rr,showStockKline:Pr,preloadWatchlistKline:en,preloadingKline:Dr,realtimeQuotes:ec,realtimeDegraded:tc,realtimeWsState:ac,connectRealtimeQuotes:sc,disconnectRealtimeQuotes:nc,quoteWarningFor:ic,realtimeQuoteColor:lc,realtimePriceText:oc,realtimePctText:rc,realtimeRatioText:cc,REALTIME_DEGRADED_TEXT:dc,REALTIME_FALLBACK_TEXT:uc,toggleSelectHistory:fr,clearSelection:gr,deleteSingleHistory:pr,deleteSelectedHistory:Sr,saveAutoEvaluateConfig:Cr,editUser:Jl,saveUser:Ql,deleteUser:$l,loadUsers:ja,allGroups:Gl,loadAllGroups:$a,getGroupName:Yl,toggleUserEnabled:Xl,resetUserPassword:Zl,selectedPreset:Oo,applyPreset:Vo,onProviderChange:Fo,providerInfo:jo,globalConfigDirty:Ac,lastSavedTime:Lc,tushareConfig:Ic,tushareStatus:Nc,syncingData:Vc,stockCount:Fc,tradeDateCount:Hc,aiStatus:Bc,appVersion:an,showImportDialog:Kc,rateLimitConfig:Wc,rateLimitDirty:Uc,rateLimitSaving:Gc,loadRateLimit:ss,saveRateLimit:Yc,saveAllConfig:Zc,resetAllConfig:ed,testTushareConnection:td,syncStockData:ad,loadTushareConfig:sn,loadFeishuConfig:ns,loadSystemStatus:is,loadAiConfig:Ha,aiVendors:_o,aiCatalog:xo,aiModelsError:So,testingAllModels:Co,savingAiModels:qo,loadAiVendors:Va,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:Mo,testAllVendorModels:To,fetchVendorModels:Po,addVendorFromCatalog:Do,addCustomVendor:Ro,addVendorModel:zo,removeVendorModel:Ao,removeVendor:Lo,toggleVendorKeyReveal:Io,toggleVendorEdit:No,checkTushareConnection:Fa,datasourceConfig:Oc,datasourceStatus:jc,loadDatasourceConfig:nn,saveDatasourceConfig:sd,testDatasource:nd,toggleDatasourceKeyReveal:id,toggleDatasourceEdit:ld,strategyFilter:ia,strategyFilterOptions:wa,strategyFilterCounts:oa,strategyPreviewCount:no,saveStrategyFilter:io,filteredConsensusRank:lo,currentPoolSize:oo,filteredStrategyCounts:ro,strategyDistribution:so,expandedStrategies:Pa,poolChangeBadge:co,timeBarPercent:uo,timeSinceRefresh:vo,navigateToStrategyFilter:mo,showUserMenu:Ut,toggleSidebar:te,groupsConfig:he,loadGroupConfig:Ue,editingGroup:kl,groupEditForm:Sl,showAddGroup:ql,addGroupForm:El,savingGroup:Ml,menuConfigDialog:_l,memberDialog:xl,groupMembers:Tl,addMemberUsername:Pl,selectedMemberGroup:Dl,subPageSectionExpanded:Rl,toggleSubPageSection:zl,getGroupMemberCount:Al,getMenuEnabledCount:Ll,groupCount:Il,openMemberManager:Nl,loadGroupMembers:Ol,addMemberToGroup:jl,removeMemberFromGroup:Vl,availableUsersForGroup:Fl,subPageCache:Cl,onParentToggle:Hl,openMenuConfig:Bl,saveMenuConfig:Kl,deleteGroupConfig:Wl,createGroup:Ul,changePasswordForm:vd,changingPassword:md,doChangePassword:xd,showSetupWizard:pd,setupForm:fd,setupStep:gd,checkSetupWizard:hd,completeSetupWizard:yd,chatSessions:Ti,chatHistoryView:Pi,selectedChatIds:Di,expandedChatDates:Ri,expandedChatMonths:zi,expandedChatStocks:Ai,chatHistoryLoading:Li,chatHistoryError:Ii,allChatSessionsFlat:Ni,chatGroupedByDate:Oi,chatGroupedByMonth:ji,chatGroupedByStock:Vi,toggleSelectChat:Fi,toggleSelectChatDate:Hi,toggleSelectChatMonth:Bi,toggleSelectChatStock:Ki,toggleChatDateExpand:Wi,toggleChatMonthExpand:Ui,toggleChatStockExpand:Gi,selectAllChatSessions:Yi,deleteSelectedChatSessions:Ji,viewChatSession:Qi,loadChatHistory:qs,deleteChatSession:$i,renderMarkdown:Xi,stockChatInput:Zi,stockChatMessages:el,stockChatLoading:tl,stockChatError:al,askStockSend:sl,askStockQuick:nl,onTouchStart:Tn,onTouchEnd:Pn,hapticFeedback:n}}})();Sa.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=nm;window.__quantComponents.Header=tp;window.__quantComponents.SubNav=pp;window.__quantComponents.MobileNav=zp;window.__quantComponents.StockList=pf;window.__quantComponents.DetailSplit=yf;window.__quantComponents.TopTabs=Ef;window.__quantComponents.AppIcon=Sa;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Mf();
