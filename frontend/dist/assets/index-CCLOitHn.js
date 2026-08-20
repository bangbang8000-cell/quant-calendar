var rc=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var cc=rc((yc,Me)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))m(w);new MutationObserver(w=>{for(const b of w)if(b.type==="childList")for(const P of b.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&m(P)}).observe(document,{childList:!0,subtree:!0});function u(w){const b={};return w.integrity&&(b.integrity=w.integrity),w.referrerPolicy&&(b.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?b.credentials="include":w.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function m(w){if(w.ep)return;w.ep=!0;const b=u(w);fetch(w.href,b)}})();(function(){const a={"tech-blue":{name:"科技蓝",icon:"🔵",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",icon:"🔴",color:"#E63946"},"vibrant-orange":{name:"活力金",icon:"🟡",color:"#D4A843"},"classic-white":{name:"经典白",icon:"⚪",color:"#2563eb"},"classic-red":{name:"经典红",icon:"💗",color:"#dc2626"},"classic-gold":{name:"经典金",icon:"🟨",color:"#b8922a"},"dark-pro":{name:"暗色专业",icon:"🌙",color:"#64ffda"}};function e(m){m&&(document.documentElement.setAttribute("data-theme",m),localStorage.setItem("quant_theme",m))}const u=localStorage.getItem("quant_theme");u&&e(u),window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={themes:a,applyTheme:e,init(){return{themes:a,applyTheme:e}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en"],u={};let m=a,w=null;function b(){return w&&typeof w=="object"&&"value"in w?w.value||a:m}function P(r,T){return e.indexOf(r)===-1?!1:(u[r]=T&&typeof T=="object"?T:{},!0)}function A(r){const T=e.indexOf(r)!==-1?r:a;return m=T,w&&typeof w=="object"&&"value"in w&&(w.value=T),typeof document<"u"&&document.documentElement.setAttribute("lang",T),m}function L(){return b()}function x(r){if(r&&typeof r=="object"&&"value"in r){w=r;const T=e.indexOf(r.value)!==-1?r.value:a;r.value=T,m=T}return m}function E(r,T){const f=b(),_=u[f]||{};let D=r in _?_[r]:null;if(D==null&&f!=="en"){const M=u.en||{};D=r in M?M[r]:null}return D==null&&(D=String(r)),T&&typeof T=="object"&&Object.keys(T).forEach(function(M){D=D.replace(new RegExp("\\{"+M+"\\}","g"),String(T[M]))}),D}const O={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:u,registerLocale:P,setLocale:A,getLocale:L,bindLocale:x,t:E};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=O),O});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.system":"系统配置","sub.overview":"概览","sub.merrill":"美林时钟","sub.market":"市场行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.watchlist":"我的自选","sub.history":"评估历史","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"市场复盘","sub.scan":"异动扫描","sub.custom-write":"全新策略","sub.status":"系统状态","sub.autoeval":"自动评估","sub.datasource":"数据源","sub.feature":"功能配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化选股日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票代码或名称...","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"📈 股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"📅 策略持仓 {days} 天","detail.tabKline":"📈 K线图表","detail.tabEval":"🤖 评估结果","detail.tabChat":"💬 AI 问股","detail.tabFactor":"多因子体检","detail.evaluate":"💡 智能评估","detail.reevaluate":"🔄 重新评估","detail.addWatch":"⭐ 加入自选","detail.inWatch":"★ 已自选","detail.retry":"🔄 重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"🤖 AI 智能评估","detail.copyReport":"📋 复制报告","detail.cachedResult":"💾 缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"🕯️ 加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"📋 策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"📈 今日行情与均线","detail.sectionKline":"🕯️ K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"⭐ 管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"💡 策略推荐","ai.recentEval":"🕒 最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"📊 评分分布","ai.quickOps":"🔧 快捷操作","ai.quickEval":"🤖 快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"📅 按日期","ai.byMonth":"📆 按月","ai.byStock":"📈 按股票","ai.historyTitle":"📋 评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"⭐ 我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"📈 策略总览","strategies.todayScreen":"☀️ 今日一屏","strategies.dataOverview":"📋 数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"🏆 策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"⏱️ 美林时钟","strategies.marketSentiment":"💹 市场情绪","strategies.poolChanges":"📌 池变动","strategies.todayFocus":"🎯 今日重点","strategies.noAlert":"✅ 无预警 · 一切正常","strategies.health":"🩺 数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"🔬 策略研究","research.quantResearch":"🔬 量化研究","research.backtest":"🔬 策略回测","research.backtestHistory":"📋 回测记录","system.title":"🖥️ 系统状态","system.resourceMonitor":"📊 资源监控","system.configManage":"⚙️ 配置管理","system.saveAll":"💾 保存全部配置","system.reset":"🔄 重置配置","system.exportConfig":"📤 导出配置","system.importConfig":"📥 导入配置","system.language":"🌐 语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"⏳ 需配置","system.configured":"已配置","system.notConfigured":"⏳ 未配置","system.connected":"已连接","system.notConnected":"⏳ 未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.system":"System Settings","sub.overview":"Overview","sub.merrill":"Merrill Clock","sub.market":"Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Market Review","sub.scan":"Anomaly Scan","sub.custom-write":"New Strategy","sub.status":"System Status","sub.autoeval":"Auto Eval","sub.datasource":"Data Source","sub.feature":"Features","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Stock Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stock code or name...","common.view":"View","common.unitStock":"","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"📈 Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"📅 Held for {days} days","detail.tabKline":"📈 K-line Chart","detail.tabEval":"🤖 Evaluation Result","detail.tabChat":"💬 AI Ask","detail.tabFactor":"Factor Checkup","detail.evaluate":"💡 Evaluate","detail.reevaluate":"🔄 Re-evaluate","detail.addWatch":"⭐ Add to Watchlist","detail.inWatch":"★ In Watchlist","detail.retry":"🔄 Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"🤖 AI Evaluation","detail.copyReport":"📋 Copy Report","detail.cachedResult":"💾 Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"🕯️ Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"📋 Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"📈 Quote & MA","detail.sectionKline":"🕯️ K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"⭐ Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"💡 Strategy Recommendations","ai.recentEval":"🕒 Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"📊 Score Distribution","ai.quickOps":"🔧 Quick Actions","ai.quickEval":"🤖 Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"📅 By Date","ai.byMonth":"📆 By Month","ai.byStock":"📈 By Stock","ai.historyTitle":"📋 Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"⭐ My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"📈 Strategy Overview","strategies.todayScreen":"☀️ Today at a Glance","strategies.dataOverview":"📋 Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"🏆 Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"⏱️ Merrill Clock","strategies.marketSentiment":"💹 Market Sentiment","strategies.poolChanges":"📌 Pool Changes","strategies.todayFocus":"🎯 Today's Focus","strategies.noAlert":"✅ No alerts · All good","strategies.health":"🩺 Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"🔬 Strategy Research","research.quantResearch":"🔬 Quant Research","research.backtest":"🔬 Backtest","research.backtestHistory":"📋 Backtest History","system.title":"🖥️ System Status","system.resourceMonitor":"📊 Resource Monitor","system.configManage":"⚙️ Configuration","system.saveAll":"💾 Save All Config","system.reset":"🔄 Reset","system.exportConfig":"📤 Export","system.importConfig":"📥 Import","system.language":"🌐 Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"⏳ Needs config","system.configured":"Configured","system.notConfigured":"⏳ Not configured","system.connected":"Connected","system.notConnected":"⏳ Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let u=[];function m(f){const _=String(f||"");let D="";for(const M of _){const g=a[M];g?D+=g.charAt(0):/[a-zA-Z0-9]/.test(M)&&(D+=M.toLowerCase())}return D}function w(f){const _=String(f||"");let D="";for(const M of _){const g=a[M];g?D+=g:/[a-zA-Z0-9]/.test(M)&&(D+=M.toLowerCase())}return D}function b(f){return String(f||"").trim().toLowerCase()}function P(f,_){const D=(_.code||"").toLowerCase();return/^\d+$/.test(f)?D.indexOf(f)!==-1:/[\u4e00-\u9fa5]/.test(f)?(_.name||"").toLowerCase().indexOf(f)!==-1:D.indexOf(f)!==-1||(_.initials||m(_.name)).indexOf(f)!==-1||(_.pinyin||w(_.name)).indexOf(f)!==-1}function A(f){const _={},D=[],M=function(g,q,p){!g||_[g]||(_[g]=!0,D.push({code:g,name:q||g,source:p||"core",initials:m(q||g),pinyin:w(q||g)}))};return e.forEach(function(g){M(g.code,g.name,"core")}),(f||[]).forEach(function(g){M(g.code,g.name,"extra")}),D}function L(f,_){const D=b(f);if(!D||!_||!_.length)return[];const M=D.split(/[\s,，、;；]+/).filter(Boolean);return M.length?_.filter(function(g){return M.every(function(q){return P(q,g)})}).slice(0,20).map(function(g){return{code:g.code,name:g.name,source:g.source||"core"}}):[]}function x(f){Array.isArray(f)&&(u=u.concat(f))}function E(){return u.slice()}function O(){return A(u)}function r(f){return L(f,O())}const T={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:m,toPinyin:w,normalizeQuery:b,matchToken:P,buildStockIndex:A,searchStocksByQuery:L,registerExtraStocks:x,getExtraStocks:E,getStockIndex:O,searchCoreStocks:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=T),T});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",chart_period:"daily",language:"zh-CN"},u=["default_view","theme","chart_period","language"],m={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en"]},w={light:"classic-white",dark:"dark-pro"};function b(){if(typeof localStorage>"u")return{};try{const M=localStorage.getItem(a);if(!M)return{};const g=JSON.parse(M);return g&&typeof g=="object"?g:{}}catch{return{}}}function P(M){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(M))}catch{}}function A(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function L(){const M=Object.assign({},e,b()),g={};return u.forEach(function(q){const p=M[q];g[q]=m[q].indexOf(p)!==-1?p:e[q]}),g}function x(M){if(u.indexOf(M)!==-1)return L()[M]}function E(M,g){return u.indexOf(M)!==-1&&m[M].indexOf(g)!==-1}function O(M,g){if(!E(M,g))return!1;const q=b();return q[M]=g,P(q),A()&&T({[M]:g}),!0}function r(M){if(!M||typeof M!="object")return!1;const g={};if(Object.keys(M).forEach(function(p){E(p,M[p])&&(g[p]=M[p])}),!Object.keys(g).length)return!1;const q=Object.assign({},b(),g);return P(q),A()&&T(g),!0}function T(M){if(!(typeof fetch>"u"))try{fetch("/api/user/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:M})}).catch(function(){})}catch{}}async function f(){const M=L();if(!A()||typeof fetch>"u")return M;try{const g=await fetch("/api/user/preferences");if(g.ok){const q=await g.json();if(q.success&&q.preferences){const p=q.preferences;u.forEach(function(H){m[H].indexOf(p[H])!==-1&&(M[H]=p[H])}),P(M)}}}catch{}return M}function _(M){const g=M||x("theme")||"system";if(g==="system"){let q=!1;return typeof window<"u"&&window.matchMedia&&(q=window.matchMedia("(prefers-color-scheme: dark)").matches),q?w.dark:w.light}return w[g]||w.light}const D={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:u,PREFERENCE_VALUES:m,THEME_MODE_TO_THEME:w,getLocal:L,getPreference:x,isValidValue:E,setPreference:O,setPreferences:r,saveToBackend:T,loadPreferences:f,resolveTheme:_};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=D),D});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function u(){if(typeof localStorage>"u")return[];try{const x=localStorage.getItem(a);if(!x)return[];const E=JSON.parse(x);return Array.isArray(E)?E:[]}catch{return[]}}function m(x){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(x))}catch{}}function w(x,E){if(!x)return!1;let O=u().filter(function(r){return r.code!==x});return O.unshift({code:x,name:(E||"").toString().slice(0,32),ts:Date.now()}),O.length>10&&(O=O.slice(0,10)),m(O),!0}function b(){return u().slice(0,10)}function P(x){m(u().filter(function(E){return E.code!==x}))}function A(){m([])}const L={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:w,getRecentViewed:b,removeRecent:P,clearRecent:A};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=L),L});(function(){const{ref:a}=Vue,e={emoji:{strategies:"📈",calendar:"🗓️",ai:"🤖",research:"🔬",system:"⚙️"},ink:{strategies:"策",calendar:"历",ai:"智",research:"研",system:"设"},edge:{strategies:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="20" x2="4" y2="12"/><line x1="10" y1="20" x2="10" y2="7"/><line x1="16" y1="20" x2="16" y2="3"/></svg>',calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',ai:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',research:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12,2 20,7 20,17 12,22 4,17 4,7"/><line x1="12" y1="12" x2="12" y2="22"/><line x1="8" y1="14" x2="16" y2="14"/></svg>',system:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></svg>'},crystal:{strategies:'<svg viewBox="0 0 24 24"><rect x="2" y="4" width="8" height="16" rx="1" fill="currentColor" opacity=".3"/><rect x="10" y="8" width="8" height="12" rx="1" fill="currentColor" opacity=".6"/><rect x="14" y="2" width="8" height="18" rx="1" fill="currentColor"/></svg>',calendar:'<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="19" rx="3" fill="currentColor" opacity=".15"/><rect x="2" y="3" width="20" height="7" rx="3" fill="currentColor"/><rect x="6" y="13" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="14" y="13" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/></svg>',ai:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="currentColor" opacity=".12"/><circle cx="12" cy="12" r="4" fill="currentColor"/><line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="2" y1="12" x2="7" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="17" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',research:'<svg viewBox="0 0 24 24"><polygon points="12,1 21,7 21,17 12,23 3,17 3,7" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="5" fill="currentColor"/></svg>',system:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1"/><circle cx="12" cy="12" r="4" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>'}},u=a(localStorage.getItem("icon_system")||"emoji");function m(w){u.value=w,localStorage.setItem("icon_system",w)}window.__quantModules||(window.__quantModules={}),window.__quantModules.icons={ICON_MAPS:e,iconSystem:u,switchIconSystem:m,init(){return{ICON_MAPS:e,iconSystem:u,switchIconSystem:m}}}})();(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:u,watch:m,onMounted:w,nextTick:b}=a;function P(s,n={}){if(typeof s=="string"&&s.startsWith("/api/")){const o=localStorage.getItem("quant_token");if(o)return{...n,headers:{...n.headers||{},Authorization:"Bearer "+o}}}return n}async function A(s,n={}){const o=P(s,n),J={"Content-Type":"application/json",...o.headers},le=(n.method||"GET").toUpperCase(),ie=le+"|"+s,$=async()=>{const B=await fetch(s,{...o,headers:J});if(B.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!B.ok){let j="";try{const me=await B.json();j=me&&me.detail||""}catch{}throw Object.assign(new Error(j||"请求失败（HTTP "+B.status+"）"),{status:B.status})}return await B.json()};try{const B=n.noLoading?$:()=>p($);return le==="GET"&&!n.noDedupe?await D(ie,B):await B()}catch(B){throw B.message==="登录已过期"?B:(console.error("[apiFetch] "+s+":",B.message),Object.assign(B,{_formatted:H(B,B.status)}))}}function L(){return new Date().toISOString().split("T")[0]}function x(s){return s?s.split("T")[0]:""}function E(s,n="info",o=3e3){let J=document.querySelector(".toast-container");J||(J=document.createElement("div"),J.className="toast-container",document.body.appendChild(J));const le=document.createElement("div");le.className=`toast toast-${n}`,le.textContent=s,J.appendChild(le),setTimeout(()=>{le.classList.add("leaving"),setTimeout(()=>le.remove(),300)},o)}function O(s,n=300){let o;return function(...J){clearTimeout(o),o=setTimeout(()=>s.apply(this,J),n)}}function r(s,n=300){let o=!1;return function(...J){o||(s.apply(this,J),o=!0,setTimeout(()=>{o=!1},n))}}async function T(s,n=3e3,o=""){const J=new Promise((le,ie)=>setTimeout(()=>ie(new Error("timeout")),n));try{return await Promise.race([s,J])}catch(le){console.warn(`[timeout] ${o||"task"} failed:`,le.message)}}const f=new Map;function _(){return f.clear(),!0}function D(s,n){if(!s||typeof n!="function")return Promise.reject(new Error("bad dedupe args"));if(f.has(s))return f.get(s);const o=Promise.resolve().then(n).finally(()=>{f.delete(s)});return f.set(s,o),o}let M=0;function g(){return M=0,!0}function q(){return M}async function p(s){M++;try{return await s()}finally{M--}}function H(s,n){if(!s)return"请求失败";if(s&&typeof s=="object"&&s.detail)return String(s.detail);if(typeof s=="string"&&s)return s;if(s&&s.message){const o=String(s.message);return/Failed to fetch|fetch failed|networkerror/i.test(o)?"网络连接失败，请检查网络后重试":o}return n?"请求失败（HTTP "+n+"）":"请求失败"}function Y(s,n){if(s===n)return!0;try{return JSON.stringify(s)===JSON.stringify(n)}catch{return!1}}function se(s,n,o){const J=(s||"GET").toUpperCase();let le="";if(o)try{const ie={};Object.keys(o).sort().forEach($=>{ie[$]=o[$]}),le=JSON.stringify(ie)}catch{le=""}return J+"|"+n+"|"+le}class re{constructor(){this._map=new Map,this._exp=new Map}get(n){const o=this._exp.get(n);if(o!=null){if(Date.now()>o){this.delete(n);return}return this._map.get(n)}}set(n,o,J){return this._map.set(n,o),this._exp.set(n,Date.now()+(J>0?J:-1)),o}delete(n){this._map.delete(n),this._exp.delete(n)}clear(){this._map.clear(),this._exp.clear()}has(n){return this.get(n)!==void 0}get size(){return this._map.size}}function F(s){const n=new re,o=s!=null&&s>0?s:15e3;return{store:n,defaultTtl:o,get:J=>n.get(J),set:(J,le,ie)=>n.set(J,le,ie??o),delete:J=>n.delete(J),clear:()=>n.clear(),size:()=>n.size}}const S=new Set;async function N(s){const n=s&&s.cache,o=s&&s.key,J=s&&(s.fetchFn||s.fetcher),le=s&&s.ttl;if(!n||!o||typeof J!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(S.has(o))return{ok:!1,changed:!1,skipped:!0,fresh:null};S.add(o);try{const ie=n.get(o);let $;try{$=await J()}catch(j){return s.onError&&s.onError(j),{ok:!1,changed:!1,fresh:null}}const B=ie!==void 0&&!Y(ie,$);return n.set(o,$,le),s.apply&&s.apply($,ie),ie!==void 0&&(B?s.onChanged&&s.onChanged($,ie):s.onUnchanged&&s.onUnchanged($,ie)),{ok:!0,changed:B,fresh:$}}finally{S.delete(o)}}const k=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function l(s,n={}){if(s==null)return"";const o=n&&n.allow||k,J=new Set(o.map(B=>String(B).toUpperCase()));let le;try{le=new DOMParser().parseFromString(String(s),"text/html")}catch{return String(s).replace(/[<>&]/g,j=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[j])}const ie=le.body||le;function $(B){Array.from(B.childNodes).forEach(j=>{if(j.nodeType===1){const me=String(j.tagName).toUpperCase();if(J.has(me))Array.from(j.attributes).forEach(oe=>{const ve=oe.name.toLowerCase(),ce=(oe.value||"").trim().toLowerCase();(ve.startsWith("on")||(ve==="href"||ve==="src"||ve==="xlink:href")&&ce.startsWith("javascript:")||ve==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(ce))&&j.removeAttribute(oe.name),ve==="href"&&!/^(https?:|mailto:|#|\/)/.test(ce)&&j.removeAttribute("href")}),me==="A"&&j.setAttribute("rel","noopener noreferrer"),$(j);else{const oe=j.parentNode;for(;j.firstChild;)oe.insertBefore(j.firstChild,j);oe.removeChild(j)}}else if(j.nodeType!==3){if(j.nodeType===8)j.parentNode&&j.parentNode.removeChild(j);else if(j.nodeType===4){const me=le.createTextNode(j.nodeValue||"");j.parentNode&&j.parentNode.replaceChild(me,j)}}})}return $(ie),ie.innerHTML}const C="/api/openapi",y="/api/market/ws/quotes",z=1,W=2.5,R="数据不可达",t="实时不可用，不刷新";function d(){const s=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",n=typeof location<"u"?location.host:"localhost:8001";return s+"//"+n+y}function I(s,n){if(!s)return null;const o=n||{riseSpeed:z,volumeRatio:W},J=o.riseSpeed!=null?o.riseSpeed:z,le=o.volumeRatio!=null?o.volumeRatio:W,ie=parseFloat(s.rise_speed);if(!isNaN(ie)&&Math.abs(ie)>J)return ie>0?"涨速预警":"跌速预警";const $=parseFloat(s.volume_ratio);return!isNaN($)&&$>le?"放量预警":null}function K(s){const n=Number(s);return s==null||isNaN(n)?null:n}const h={apiFetch:A,withAuthHeaders:P,getToday:L,formatDate:x,withTimeout:T,showToast:E,debounce:O,throttle:r,resetInFlight:_,dedupeRequest:D,resetLoading:g,loadingCount:q,withLoading:p,formatApiError:H,jsonEquals:Y,makeCacheKey:se,CacheStore:re,createTtlCache:F,silentRefresh:N,sanitizeHtml:l,OPENAPI_ROUTE_BASE:C,REALTIME_WS_PATH:y,WARN_RISE_SPEED_THRESHOLD:z,WARN_VOLUME_RATIO_THRESHOLD:W,REALTIME_DEGRADED_TEXT:R,REALTIME_FALLBACK_TEXT:t,buildRealtimeWsUrl:d,checkQuoteWarning:I,quoteFmt:{price:function(s){const n=K(s);return n===null?"--":n.toFixed(2)},pct:function(s){const n=K(s);return n===null?"--":(n>0?"+":"")+n.toFixed(2)+"%"},num:function(s){const n=K(s);return n===null?"--":n.toFixed(2)},color:function(s){const n=s?s.change_pct:null,o=K(n);return o===null?"":o>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=h),typeof Me<"u"&&Me.exports&&(Me.exports=h)})();(function(){function e(k,l){if(!Array.isArray(k)||k.length<=l)return k;const C=[],y=k.length/l*2;for(let z=0;z<k.length;z+=y){const W=Math.floor(z),R=Math.min(k.length,Math.ceil(z+y));let t=1/0,d=-1,I=-1/0,K=-1;for(let c=W;c<R;c++){const h=k[c];if(!h)continue;const s=h[3]!=null?Number(h[3]):1/0,n=h[4]!=null?Number(h[4]):-1/0;s<t&&(t=s,d=c),n>I&&(I=n,K=c)}d>=0&&C.push(k[d]),K>=0&&K!==d&&C.push(k[K])}return C}let u=null;function m(){return typeof echarts<"u"?Promise.resolve():(u||(u=new Promise(function(k,l){const C=document.createElement("script");C.src="/static/lib/echarts.min.js",C.async=!0,C.onload=function(){typeof echarts<"u"?k():l(new Error("echarts 加载后未定义"))},C.onerror=function(){l(new Error("echarts.min.js 加载失败"))},document.head.appendChild(C)})),u)}function w(){const k=getComputedStyle(document.documentElement);return{primary:k.getPropertyValue("--primary-color").trim()||"#2563eb",up:k.getPropertyValue("--color-up").trim()||"#43e97b",down:k.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:k.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:k.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const b=k=>(getComputedStyle(document.documentElement).getPropertyValue(k)||"").trim();function P(k,l,C,y=!1,z=!1){if(!l||l.length===0)return;l.length>2e3&&(l=e(l,2e3));const W=l.map($=>typeof $[0]=="string"&&$[0].indexOf("-")>=0?$[0]:$[0].slice(0,4)+"-"+$[0].slice(4,6)+"-"+$[0].slice(6,8)),R=w(),t={ma5:b("--color-accent")||"#F59E0B",ma10:b("--color-primary")||"#3B82F6",ma20:b("--color-warning")||"#8B5CF6",ma60:b("--color-success")||"#10B981"},d=l.map($=>[$[1],$[2],$[3],$[4]]),I=l.map($=>$[5]),K=l.map($=>$[6]),c=l.map($=>$[7]),h=l.map($=>$[8]),s=l.map($=>$[9]),n=l.map($=>$[10]),J=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",le=R.borderLight,ie={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:R.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:J,borderColor:le,textStyle:{color:R.textSecondary,fontSize:12},formatter:function($){if(!$||!$.length)return"";const B=$[0].dataIndex,j=l[B];if(!j)return"";const me=k.getOption(),oe=me.legend&&me.legend[0]&&me.legend[0].selected||{},ve=be=>oe[be]!==!1,ce=be=>be==null||isNaN(be)?"--":Number(be).toFixed(2),Ce=be=>be==null||isNaN(be)?"--":(Number(be)/1e4).toFixed(2)+"万手",pe=['<div style="font-weight:600;color:'+R.textSecondary+';">'+W[B]+"</div>"];return pe.push("开: "+ce(j[1])+"　收: "+ce(j[2])),pe.push("低: "+ce(j[3])+"　高: "+ce(j[4])),pe.push("成交量: "+Ce(j[5])),j[6]!=null&&ve("MA5")&&pe.push("MA5: "+ce(j[6])),j[7]!=null&&ve("MA10")&&pe.push("MA10: "+ce(j[7])),j[8]!=null&&ve("MA20")&&pe.push("MA20: "+ce(j[8])),j[9]!=null&&ve("MA60")&&pe.push("MA60: "+ce(j[9])),j[10]!=null&&pe.push("VOL_MA5: "+Ce(j[10])),pe.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:z?0:8,textStyle:{color:R.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:z?30:40,height:z?"48%":"52%"},{left:56,right:16,top:z?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:W,boundaryGap:!0,axisLine:{lineStyle:{color:le}},axisLabel:{color:R.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:W,axisLabel:{show:!1},axisLine:{lineStyle:{color:le}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:le}},axisLabel:{color:R.textSecondary,fontSize:11,formatter:function($){const B=Math.round($*100)/100;return B%1===0?String(Math.round(B)):B.toFixed(2)}},splitLine:{lineStyle:{color:le,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:le}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,l.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:le,textStyle:{color:R.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:d,itemStyle:{color:R.up,color0:R.down,borderColor:R.up,borderColor0:R.down}},{name:"MA5",type:"line",data:K,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:t.ma5}},{name:"MA10",type:"line",data:c,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:t.ma10}},{name:"MA20",type:"line",data:h,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:t.ma20}},{name:"MA60",type:"line",data:s,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:t.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:I,itemStyle:{color:function($){const B=$.dataIndex;return l[B][1]>=l[B][2]?R.up:R.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:n,smooth:!0,symbol:"none",lineStyle:{width:1,color:t.ma5,type:"dashed"}}]};k.setOption(ie,!0)}const A=new Map;function L(k){return A.has(k)||A.set(k,{chart:null,cache:null}),A.get(k)}async function x(k,l,C,y=!1,z={}){await m();const W=L(k);let R=document.getElementById(k);if(!R)for(let t=0;t<16&&(await new Promise(d=>setTimeout(d,50)),R=document.getElementById(k),!R);t++);if(!R)throw new Error("无法找到图表容器: "+k);if(R.offsetWidth<50&&(R.style.minWidth="600px",R.style.minHeight="300px"),!W.chart||W.chart.isDisposed()||W.chart.getDom()!==R){if(W.chart)try{W.chart.dispose()}catch{}W.chart=echarts.init(R),W.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const t=z.onLegend;typeof t=="function"&&W.chart.on("legendselectchanged",d=>{d&&d.selected&&t(d.selected)})}return P(W.chart,l,C,y,!!z.isMobile),W.cache={data:l,period:C,isIndex:y,isMobile:!!z.isMobile},W.chart}function E(k){const l=A.get(k);l&&l.chart&&(l.chart.dispose(),l.chart=null,l.cache=null)}function O(k){const l=A.get(k);l&&l.chart&&l.chart.resize()}function r(k,l){const C=A.get(k),y=C&&C.chart;if(y)if(l<=0)y.dispatchAction({type:"dataZoom",start:0,end:100});else{const R=Math.max(0,(60-l)/60*100);y.dispatchAction({type:"dataZoom",start:Math.round(R),end:100})}}function T(k){var y,z,W;const l=A.get(k);if(!l||!l.chart||!l.cache||l.chart.isDisposed())return;const C=((W=(z=(y=l.chart.getOption())==null?void 0:y.legend)==null?void 0:z[0])==null?void 0:W.selected)||null;P(l.chart,l.cache.data,l.cache.period,l.cache.isIndex,l.cache.isMobile),C&&l.chart.setOption({legend:{selected:C}})}function f(k){const l=A.get(k);return l&&l.chart}const _=new Map;function D(k){return _.has(k)||_.set(k,{chart:null,cache:null}),_.get(k)}function M(k,l,C={}){return m().then(function(){const y=D(k),z=document.getElementById(k);if(!z)throw new Error("无法找到图表容器: "+k);if(z.offsetWidth<50&&(z.style.minWidth="600px",z.style.minHeight="300px"),y.chart&&y.chart.getDom&&y.chart.getDom()!==z){try{y.chart.dispose()}catch{}y.chart=null}y.chart||(y.chart=echarts.init(z),y.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),y.resizeBound||(y.resizeBound=!0,window.addEventListener("resize",function(){y.chart&&!y.chart.isDisposed()&&y.chart.resize()})));const W=typeof l=="function"?l():l;return y.chart.setOption(W,!0),y.cache={buildOption:l,key:C.key||""},y.chart})}function g(k){var z,W,R;const l=_.get(k);if(!l||!l.chart||!l.cache||l.chart.isDisposed())return;const C=((R=(W=(z=l.chart.getOption())==null?void 0:z.legend)==null?void 0:W[0])==null?void 0:R.selected)||null,y=typeof l.cache.buildOption=="function"?l.cache.buildOption():l.cache.buildOption;l.chart.setOption(y,!0),C&&y&&y.legend&&y.legend.selected&&l.chart.setOption({legend:{selected:C}})}function q(k){const l=_.get(k);l&&l.chart&&(l.chart.dispose(),l.chart=null,l.cache=null)}function p(k){const l=_.get(k);l&&l.chart&&l.chart.resize()}const H=new Map;function Y(k){return H.has(k)||H.set(k,{chart:null,cache:null}),H.get(k)}function se(k,l,C={}){return m().then(function(){const y=Y(k),z=document.getElementById(k);if(!z)return null;if(z.offsetWidth<50&&(z.style.minWidth="600px",z.style.minHeight="300px"),y.chart&&y.chart.getDom&&y.chart.getDom()!==z){try{y.chart.dispose()}catch{}y.chart=null}y.chart||(y.chart=echarts.init(z),y.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),y.resizeBound||(y.resizeBound=!0,window.addEventListener("resize",function(){y.chart&&!y.chart.isDisposed()&&y.chart.resize()})));const W=typeof l=="function"?l():l;return y.chart.setOption(W,!0),y.cache={buildOption:l,key:C.key||""},y.chart})}function re(k){const l=H.get(k);if(!l||!l.chart||!l.cache||l.chart.isDisposed())return;const C=typeof l.cache.buildOption=="function"?l.cache.buildOption():l.cache.buildOption;l.chart.setOption(C,!0)}function F(k){const l=H.get(k);l&&l.chart&&(l.chart.dispose(),l.chart=null,l.cache=null)}function S(k){const l=H.get(k);l&&l.chart&&l.chart.resize()}const N={renderKlineChart:P,renderKlineTo:x,disposeKline:E,resizeKline:O,zoomKline:r,redrawKline:T,getKlineChart:f,renderBacktestTo:M,redrawBacktest:g,disposeBacktest:q,resizeBacktest:p,renderPortfolioTo:se,redrawPortfolio:re,disposePortfolio:F,resizePortfolio:S,downsampleSeries:e,ensureEcharts:m,KLINE_MAX_RENDER_POINTS:2e3,init(){return{renderKlineChart:P,renderKlineTo:x,disposeKline:E,resizeKline:O,zoomKline:r,redrawKline:T,getKlineChart:f,renderBacktestTo:M,redrawBacktest:g,disposeBacktest:q,resizeBacktest:p,renderPortfolioTo:se,redrawPortfolio:re,disposePortfolio:F,resizePortfolio:S,downsampleSeries:e,ensureEcharts:m,KLINE_MAX_RENDER_POINTS:2e3}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=N),typeof Me<"u"&&Me.exports&&(Me.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:u}=Vue,{configChanged:m,consensus:w}=a,b=e(null),P=e(""),A=e(null),L=e([]),x=e([]),E=e([]),O=e([]),r=e([]),T=e([]),f=e({});function _(Z){const ne=r.value.indexOf(Z);ne>=0?r.value.splice(ne,1):r.value.push(Z)}const D=e("date"),M=e([]),g=e(!1),q=e(!1),p=e("watchlist"),H=e([]),Y=e({vendors:[]}),se=e(""),re=e(!1),F=e(!1);function S(Z){if(!Z)return"";const ne=String(Z),ge=ne.length;if(ge<=4)return ne[0]+"*".repeat(ge-1);const _e=ge<=8?2:4;return ne.slice(0,_e)+"*".repeat(ge-_e-_e)+ne.slice(-_e)}async function N(Z){let ne;try{ne=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const _e=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ne,target:Z})})).json();if(_e.success)return _e.secret;ElementPlus.ElMessage.error(_e.message||"查看失败")}catch(ge){ElementPlus.ElMessage.error("查看失败: "+ge.message)}return null}async function k(Z){if(Z._revealed){Z._revealed=!1,Z._masked=S(Z.api_key);return}const ne=await N("ai:"+Z.vendor_key);ne!==null&&(Z.api_key=ne,Z._revealed=!0)}function l(Z){const{_fetching:ne,_testing:ge,_revealed:_e,_masked:je,...Le}=Z;return Le.models=(Z.models||[]).map(Ie=>{const{_testing:Je,testResult:$e,...dt}=Ie;return dt}),Le}async function C(){var Z;try{se.value="";const ne=await fetch("/api/ai/models");if(ne.status===401){se.value="请先登录后再查看模型配置";return}if(!ne.ok){se.value=`服务器错误 (${ne.status})`;return}const ge=await ne.json();ge.success?(H.value=(((Z=ge.data)==null?void 0:Z.vendors)||[]).map(_e=>({..._e,_fetching:!1,_testing:!1,_revealed:!1,_masked:_e.api_key||"",models:(_e.models||[]).map(je=>({...je,_testing:!1,testResult:void 0}))})),se.value=""):se.value=ge.message||"加载失败"}catch(ne){se.value="网络错误: "+ne.message}}async function y(){try{const ne=await(await fetch("/api/ai/catalog")).json();ne.success&&ne.data&&(Y.value=ne.data)}catch(Z){console.warn("AI 厂商目录加载失败",Z)}}async function z(){F.value=!0;try{const ge=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:H.value.map(l)})})).json();ge.success?ElementPlus.ElMessage.success("模型配置已保存"):ElementPlus.ElMessage.error(ge.message||"保存失败")}catch(Z){ElementPlus.ElMessage.error("保存失败: "+Z.message)}F.value=!1}async function W(Z,ne){ne._testing=!0;try{const _e=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Z.vendor_key,model:ne.name,base_url:Z.base_url,api_key:Z.api_key,timeout:Z.timeout})});ne.testResult=await _e.json()}catch(ge){ne.testResult={success:!1,message:ge.message}}ne._testing=!1}async function R(){re.value=!0;for(const Z of H.value)for(const ne of Z.models||[])Z.api_key?await W(Z,ne):ne.testResult={success:!1,message:"未配置 API Key"};re.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function t(Z){Z._fetching=!0;try{const _e=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Z.vendor_key,base_url:Z.base_url,api_key:Z.api_key,timeout:Z.timeout})})).json();if(_e.success&&Array.isArray(_e.models)){const je=new Set((Z.models||[]).map(Le=>Le.name));for(const Le of _e.models)je.has(Le)||Z.models.push({name:Le,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${_e.models.length} 个模型`)}else ElementPlus.ElMessage.error(_e.message||"获取模型列表失败")}catch(ne){ElementPlus.ElMessage.error("获取模型列表失败: "+ne.message)}Z._fetching=!1}function d(Z){const ne=(Y.value.vendors||[]).find(ge=>ge.vendor_key===Z);if(ne){if(H.value.some(ge=>ge.vendor_key===Z)){ElementPlus.ElMessage.warning("该厂商已存在");return}H.value.push({vendor_key:ne.vendor_key,name:ne.name,kind:ne.kind,base_url:ne.base_url,api_key:"",timeout:60,tier:ne.tier||"",website:ne.website||"",locked:!!ne.locked,models:(ne.models||[]).map(ge=>({name:ge,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${ne.name}」，配置 API Key 后保存生效`)}}function I(){H.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function K(Z){Z.models||(Z.models=[]),Z.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function c(Z,ne){const ge=Z.models[ne];if(!(!ge||ge.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(ge.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}Z.models.splice(ne,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function h(Z){if(Z.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(Z.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const ne=H.value.indexOf(Z);ne>=0&&H.value.splice(ne,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const s=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),n=e(!1),o=e(""),J=e(0),le=e(""),ie=e(!1),$=e(""),B=e(!1),j=e(0),me=e(0),oe=e(""),ve=e({}),ce=e({}),Ce=e({}),pe=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),be=e("manual"),Q=u(()=>{const Z={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-chat",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return Z[pe.value.provider]||Z.custom}),de={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-chat"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function we(Z){if(Z==="manual")return;const ne=de[Z];ne&&(pe.value.endpoint=ne.endpoint,pe.value.model=ne.model,m.value=!0)}function he(){if(m.value=!0,pe.value.provider!=="codingplan"&&pe.value.provider!=="custom"){const Z=Q.value;Z&&(pe.value.endpoint=Z.endpoint,pe.value.model=Z.model)}else pe.value.provider==="codingplan"&&(pe.value.endpoint||(pe.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),pe.value.model||(pe.value.model="ark-code-latest"))}let X=null;const te=8;async function ae(){X&&(X.abort(),X=null);const ne=(w.value||[]).filter(Ie=>Ie.status==="new"||Ie.status==="out").filter(Ie=>!f.value[Ie.code]);if(ne.length===0)return;const ge=new AbortController;X=ge;let _e=0;const je=async()=>{for(;_e<ne.length;){const Ie=ne[_e++];try{const $e=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ie.code,stock_name:Ie.name,event_type:Ie.status==="new"?"enter":"exit"}),signal:ge.signal})).json();$e.success&&$e.signal&&(f.value={...f.value,[Ie.code]:$e.signal})}catch(Je){if(Je.name==="AbortError")return}}},Le=Array.from({length:Math.min(te,ne.length)},()=>je());await Promise.all(Le)}function Pe(){X&&(X.abort(),X=null)}let ke=0;async function De(Z){const ne=++ke;try{const _e=await(await fetch(`/api/ai/history/last/${encodeURIComponent(Z)}`)).json();if(ne!==ke)return;_e.success&&_e.data&&(b.value=_e.data,P.value=_e.data.evaluate_time,Ue(Z,_e.data),qe(_e.data))}catch{}}async function Ue(Z,ne){var ge,_e;try{const Le=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(Z)}&limit=2`)).json();if(Le.success&&Le.data&&Le.data.length>=2){const Ie=Le.data[1],Je=((ge=ne.result)==null?void 0:ge.total_score)||0,$e=((_e=Ie.result)==null?void 0:_e.total_score)||0;Je>0&&$e>0&&(A.value={prevScore:$e,currScore:Je,diff:Je-$e})}}catch(je){console.warn("[refreshStrategyData] autoPoll failed:",je)}}function qe(Z){var je;const ne=((je=Z.result)==null?void 0:je.dimensions)||{},ge=[],_e=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Le of _e){const Ie=ne[Le.key];Ie!==void 0&&ge.push({icon:Ie>=Le.good?"●":Ie>=Le.warn?"▲":"✕",label:`${Le.label} ${Math.round(Ie)}分`})}L.value=ge}return{aiResult:b,lastEvalTime:P,evalHistoryComparison:A,checklistItems:L,aiHistory:x,selectedHistoryIds:E,expandedDates:O,expandedMonths:r,expandedStocks:T,poolSignals:f,toggleMonthExpand:_,aiHistoryView:D,selectedWatchlistCodes:M,showAutoEvaluateSettings:g,savingConfig:q,autoEvaluateScope:p,aiVendors:H,aiCatalog:Y,aiModelsError:se,testingAllModels:re,savingAiModels:F,loadAiVendors:C,loadAiCatalog:y,saveAiVendors:z,saveAiModels:z,testVendorModel:W,testAllVendorModels:R,fetchVendorModels:t,addVendorFromCatalog:d,addCustomVendor:I,addVendorModel:K,removeVendorModel:c,removeVendor:h,toggleVendorKeyReveal:k,autoEvaluateConfig:s,aiLoading:n,aiEvalStage:o,aiEvalElapsed:J,aiEvalError:le,showBatchEvaluate:ie,batchStocks:$,batchRunning:B,batchTotal:j,batchCompleted:me,batchCurrent:oe,batchStatuses:ve,batchResults:ce,batchEvalErrors:Ce,aiConfig:pe,selectedPreset:be,providerInfo:Q,aiPresets:de,applyPreset:we,onProviderChange:he,fetchPoolSignals:ae,cancelPoolSignals:Pe,loadLastEvaluation:De}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:u,watch:m}=Vue,{configChanged:w,aiConfig:b,aiLoading:P,feishuConfig:A,currentTheme:L,changeTheme:x,autoEvaluateConfig:E,iconSystem:O,researchMenuEnabled:r,currentUser:T,strategyFilter:f,applyTheme:_,dashboardData:D,lastRefreshTime:M,saveAiModels:g}=a,q=e(!1),p=e(!1),H=e(null),Y=e(null),se=e(null),re=e(null),F=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),S=e("disconnected"),N=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),k=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),l=e(!1),C=e(null),y=e(null),z=e("pending"),W=e("..."),R=e(!1),t=e({api_limit:600}),d=e(!1),I=e(!1);async function K(){try{const te=await(await fetch("/api/system/rate-limit")).json();te.success&&(t.value=te.data)}catch(X){console.warn("loadRateLimit failed:",X)}}async function c(){I.value=!0;try{const te=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.value)})).json();te.success?(d.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(te.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{I.value=!1}}m(()=>[b.value.provider,b.value.apiKey,b.value.endpoint,b.value.model],()=>{w.value=!0},{deep:!0});async function h(){q.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(b.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b.value)})).json()).success?(w.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(X){localStorage.setItem("quant_ai_config",JSON.stringify(b.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",X)}finally{q.value=!1}}async function s(){P.value=!0;try{const te=await(await fetch("/api/ai/test")).json();te.success?ElementPlus.ElMessage.success(te.message||"API连接正常"):ElementPlus.ElMessage.error(te.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{P.value=!1}}function n(){const X={ai:b.value,feishu:A.value,theme:L.value,export_time:new Date().toISOString()},te=new Blob([JSON.stringify(X,null,2)],{type:"application/json"}),ae=URL.createObjectURL(te),Pe=document.createElement("a");Pe.href=ae,Pe.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Pe.click(),URL.revokeObjectURL(ae),ElementPlus.ElMessage.success("配置已导出")}function o(X){const te=X.target.files[0];if(!te)return;const ae=new FileReader;ae.onload=async Pe=>{try{const ke=JSON.parse(Pe.target.result);ke.ai&&(b.value={...b.value,...ke.ai},await h()),ke.feishu&&(Object.assign(A.value,ke.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ke.feishu)})),ke.theme&&(L.value=ke.theme,x(ke.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ae.readAsText(te),X.target.value=""}async function J(){q.value=!0;const X=[fetch("/api/user/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:F.value,feishu:A.value,ai:b.value,rate_limit:t.value,auto_evaluate:E.value,theme:L.value,icon_system:O.value,research_menu_enabled:r.value}})}).then(ke=>["userConfig",ke.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)}).then(ke=>["tushare",ke.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:N.value})}).then(ke=>["datasource",ke.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A.value)}).then(ke=>["feishu",ke.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b.value)}).then(ke=>["ai",ke.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.value)}).then(ke=>["rateLimit",ke.ok]),g().then(()=>["aiModels",!0],()=>["aiModels",!1])],te=await Promise.allSettled(X),ae=te.filter(ke=>ke.status==="fulfilled"&&ke.value[1]).length,Pe=te.filter(ke=>ke.status==="rejected"||ke.status==="fulfilled"&&!ke.value[1]).length;d.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(f.value.selected)),localStorage.setItem("quant_strategy_filter_mode",f.value.mode),T.value&&fetch(`/api/users/${T.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:L.value})}).catch(()=>{}),p.value=!1,H.value=new Date().toLocaleString("zh-CN"),q.value=!1,Pe>0&&console.error(`[saveAllConfig] ${ae}/${ae+Pe} 项保存成功，${Pe} 项失败`)}async function le(){try{const te=await(await fetch("/api/user/config")).json();if(te.success&&te.config){const ae=te.config;ae.tushare&&(F.value={...F.value,...ae.tushare}),ae.feishu&&(A.value={...A.value,...ae.feishu}),ae.ai&&(b.value={...b.value,...ae.ai}),ae.rate_limit&&(t.value={...t.value,...ae.rate_limit}),ae.auto_evaluate&&(E.value={...E.value,...ae.auto_evaluate}),ae.theme&&!localStorage.getItem("quant_theme")&&_(ae.theme),ae.icon_system&&(O.value=ae.icon_system,localStorage.setItem("icon_system",ae.icon_system)),ae.research_menu_enabled!==void 0&&(r.value=ae.research_menu_enabled,localStorage.setItem("research_menu_enabled",ae.research_menu_enabled?"1":"0"))}p.value=!1,d.value=!1}catch(X){console.error("[resetAllConfig] 重新加载配置失败:",X),p.value=!1}}async function ie(){S.value="testing";try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(S.value=te.success?"connected":"disconnected",te.success){const ae=te.data_count?` (获取到 ${te.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ae)}else ElementPlus.ElMessage.error(te.message||"连接失败")}catch{S.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function $(){try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();S.value=te.success?"connected":"disconnected"}catch{S.value="disconnected"}}async function B(){var X;l.value=!0;try{const ae=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ae.success?(C.value=parseInt(((X=ae.message.match(/\d+/))==null?void 0:X[0])||"0"),ElementPlus.ElMessage.success(ae.message)):ElementPlus.ElMessage.error(ae.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{l.value=!1}}async function j(){try{const te=await(await fetch("/api/market/tushare/config")).json();te.success&&te.config&&(F.value={...F.value,...te.config})}catch(X){console.warn("loadTushareConfig failed:",X)}}function me(X){if(!X)return"";const te=String(X),ae=te.length;if(ae<=4)return te[0]+"*".repeat(ae-1);const Pe=ae<=8?2:4;return te.slice(0,Pe)+"*".repeat(ae-Pe-Pe)+te.slice(-Pe)}async function oe(X){let te;try{te=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Pe=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:te,target:X})})).json();if(Pe.success)return Pe.secret;ElementPlus.ElMessage.error(Pe.message||"查看失败")}catch(ae){ElementPlus.ElMessage.error("查看失败: "+ae.message)}return null}async function ve(X){const te=N.value[X];if(!te)return;if(te._revealed){te._revealed=!1,te._masked=me(te.token);return}const ae=await oe(X);ae!==null&&(te.token=ae,te._revealed=!0)}async function ce(){try{const te=await(await fetch("/api/market/datasource/config")).json();if(te.success&&te.config&&te.config.sources){const ae=te.config.sources,Pe=ke=>{const De={...N.value[ke],...ae[ke]||{}};return De._revealed=!1,De._masked=De.token||"",De};N.value={sxsc_tushare:Pe("sxsc_tushare"),tushare:Pe("tushare"),akshare:{...N.value.akshare,...ae.akshare||{}}}}try{const Pe=await(await fetch("/api/market/datasource/status")).json();if(Pe.success&&Pe.status)for(const[ke,De]of Object.entries(Pe.status))k.value[ke]=De.connected?"connected":"disconnected"}catch{}}catch(X){console.warn("loadDatasourceConfig failed:",X)}}async function Ce(){try{const X={};for(const[te,ae]of Object.entries(N.value)){const{_revealed:Pe,_masked:ke,...De}=ae;X[te]=De}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:X})}),p.value=!0}catch(X){console.warn("saveDatasourceConfig failed:",X)}}async function pe(X){k.value[X]="testing";try{const ae=await(await fetch(`/api/market/datasource/test/${X}`,{method:"POST"})).json();k.value[X]=ae.success?"connected":"disconnected",ae.success?ElementPlus.ElMessage.success(`${X} 连接成功`):ElementPlus.ElMessage.error(`${X}: ${ae.message}`)}catch{k.value[X]="disconnected",ElementPlus.ElMessage.error(`${X} 连接失败`)}}async function be(){try{const te=await(await fetch("/api/feishu/config")).json();te&&typeof te=="object"&&(A.value={...A.value,...te},Y.value=JSON.parse(JSON.stringify(A.value)))}catch(X){console.warn("loadFeishuConfig failed:",X)}}async function Q(){try{const te=await(await fetch("/api/ai/config")).json();if(te.success&&te.data)b.value={...b.value,...te.data};else{const ae=localStorage.getItem("quant_ai_config");ae&&(b.value=JSON.parse(ae))}}catch{const te=localStorage.getItem("quant_ai_config");te&&(b.value=JSON.parse(te))}}async function de(){try{const te=await(await fetch("/api/user/config")).json();if(te.success&&te.config){const ae=te.config;ae.tushare&&(F.value={...F.value,...ae.tushare}),ae.datasource&&ae.datasource.sources&&(N.value={sxsc_tushare:{...N.value.sxsc_tushare,...ae.datasource.sources.sxsc_tushare||{}},tushare:{...N.value.tushare,...ae.datasource.sources.tushare||{}},akshare:{...N.value.akshare,...ae.datasource.sources.akshare||{}}}),ae.feishu&&(A.value={...A.value,...ae.feishu},Y.value=JSON.parse(JSON.stringify(A.value))),ae.ai&&(b.value={...b.value,...ae.ai}),ae.rate_limit&&(t.value={...t.value,...ae.rate_limit}),ae.theme&&!localStorage.getItem("quant_theme")&&_(ae.theme),ae.auto_evaluate&&(E.value={...E.value,...ae.auto_evaluate}),ae.icon_system&&(O.value=ae.icon_system,localStorage.setItem("icon_system",ae.icon_system)),ae.research_menu_enabled!==void 0&&(r.value=ae.research_menu_enabled,localStorage.setItem("research_menu_enabled",ae.research_menu_enabled?"1":"0"))}}catch(X){console.warn("加载用户配置失败，使用本地缓存",X)}}async function we(){var X,te,ae,Pe;try{const De=await(await fetch("/api/dashboard")).json(),Ue=De.success?De.data:De;C.value=((X=Ue==null?void 0:Ue.stats)==null?void 0:X.total_stocks_covered)||null;const Z=await(await fetch("/api/dates")).json();y.value=((te=Z==null?void 0:Z.data)==null?void 0:te.total)||((Pe=(ae=Z==null?void 0:Z.data)==null?void 0:ae.dates)==null?void 0:Pe.length)||null;const ge=await(await fetch("/api/ai/history")).json();z.value="ok"}catch{z.value="pending"}}async function he(){try{const te=await(await fetch("/api/dashboard")).json();D.value=te.success?te.data:te,M.value=Date.now()}catch(X){console.error("加载总览数据失败",X)}}return{configSaving:q,configChanged:w,globalConfigDirty:p,lastSavedTime:H,feishuConfigOriginal:Y,aiConfigOriginal:se,tushareConfigOriginal:re,tushareConfig:F,tushareStatus:S,datasourceConfig:N,datasourceStatus:k,syncingData:l,stockCount:C,tradeDateCount:y,aiStatus:z,appVersion:W,showImportDialog:R,rateLimitConfig:t,rateLimitDirty:d,rateLimitSaving:I,loadRateLimit:K,saveRateLimit:c,saveAiConfig:h,testAiApi:s,exportConfig:n,importConfig:o,saveAllConfig:J,resetAllConfig:le,testTushareConnection:ie,checkTushareConnection:$,syncStockData:B,loadTushareConfig:j,loadDatasourceConfig:ce,saveDatasourceConfig:Ce,testDatasource:pe,toggleDatasourceKeyReveal:ve,loadFeishuConfig:be,loadAiConfig:Q,loadUserConfig:de,loadSystemStatus:we,loadDashboardData:he}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:u}=Vue,{currentUser:m,applyTheme:w,allMenuDefs:b,loadGroupConfig:P}=a,A=e([]),L=e(""),x=e(""),E=e("users"),O=e({}),r=e({}),T=u(()=>{let Q=A.value;if(x.value&&(Q=Q.filter(we=>(we.group||we.role)===x.value)),!L.value)return Q;const de=L.value.toLowerCase();return Q.filter(we=>we.username.toLowerCase().includes(de))});function f(Q){O.value={...O.value,[Q]:!O.value[Q]}}async function _(Q,de){try{const he=await(await fetch("/api/groups/"+de+"/members/"+Q,{method:"DELETE"})).json();he.success?(await oe(),await j()):ElementPlus.ElMessage.error(he.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function D(Q){const de=r.value[Q];if(de)try{const he=await(await fetch("/api/groups/"+Q+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:de})})).json();he.success?(await oe(),await j(),r.value={...r.value,[Q]:""}):ElementPlus.ElMessage.error(he.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function M(Q,de){try{const he=await(await fetch("/api/users/"+Q.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:de})})).json();he.success?await oe():ElementPlus.ElMessage.error(he.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const g=e(!1),q=e(null),p=e({username:"",password:"",role:"user",theme:"tech-blue"}),H=e(!1),Y=e(null),se=e(!1),re=e(!1),F=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),S=e({}),N=e(!1),k=e({group_id:"",name:"",description:""}),l=e(!1),C=e([]),y=e(""),z=e(""),W=e({});function R(Q){W.value={...W.value,[Q]:!W.value[Q]}}function t(Q){return!A.value||!A.value.length?0:A.value.filter(de=>(de.group||de.role)===Q).length}function d(Q){const de=(Q==null?void 0:Q.visible_menus)||{};return Object.values(de).filter(Boolean).length}const I=u(()=>Object.keys(B.value).length);async function K(Q){z.value=Q,re.value=!0,await c(Q)}async function c(Q){try{const we=await(await fetch("/api/groups/"+Q+"/members")).json();we.success&&(C.value=we.members||[])}catch(de){C.value=[],console.error("[loadGroupMembers]",de)}}async function h(){if(!(!y.value||!z.value)){l.value=!0;try{const de=await(await fetch("/api/groups/"+z.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:y.value})})).json();de.success?(await c(z.value),await oe(),y.value=""):ElementPlus.ElMessage.error(de.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{l.value=!1}}}async function s(Q){try{const we=await(await fetch("/api/groups/"+z.value+"/members/"+Q,{method:"DELETE"})).json();we.success?(await c(z.value),await oe()):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const n=u(()=>{if(!A.value)return[];const Q=new Set(C.value.map(de=>de.username));return A.value.filter(de=>de.username!=="admin"&&de.username!=="guest"&&!Q.has(de.username))});function o(Q){const de=F.value.visible_menus[Q],we=b.find(he=>he.key===Q);if(we)if(de){const he=S.value[Q]||{};we.subPages.forEach(X=>{const te=Q+"."+X;F.value.visible_sub_pages[te]=he[X]!==void 0?he[X]:!0})}else{const he={};we.subPages.forEach(X=>{const te=Q+"."+X;he[X]=F.value.visible_sub_pages[te],F.value.visible_sub_pages[te]=!1}),S.value[Q]=he}}function J(Q){Y.value=Q;const de=B.value[Q]||{};F.value={name:de.name||Q,description:de.description||"",visible_menus:{...de.visible_menus||{}},visible_sub_pages:{...de.visible_sub_pages||{}}},S.value={},b.forEach(we=>{const he={};we.subPages.forEach(X=>{he[X]=F.value.visible_sub_pages[we.key+"."+X]}),S.value[we.key]=he}),se.value=!0}async function le(){l.value=!0;try{const de=await(await fetch("/api/groups/"+Y.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)})).json();de.success?(se.value=!1,Y.value=null,await j(),await P()):ElementPlus.ElMessage.error(de.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{l.value=!1}}async function ie(Q){var de;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((de=B.value[Q])==null?void 0:de.name)||Q)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const X=await(await fetch("/api/groups/"+Q,{method:"DELETE"})).json();X.success?await j():ElementPlus.ElMessage.error(X.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function $(){if(k.value.group_id){l.value=!0;try{const de=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k.value)})).json();de.success?(N.value=!1,k.value={group_id:"",name:"",description:""},await j()):ElementPlus.ElMessage.error(de.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{l.value=!1}}}const B=e({});async function j(){try{if(!localStorage.getItem("quant_token"))return;const de=await fetch("/api/groups");if(de.ok){const we=await de.json();B.value=we.groups||{}}}catch(Q){console.warn("loadAllGroups:",Q)}}function me(Q){var de;return((de=B.value[Q])==null?void 0:de.name)||Q||"--"}async function oe(){try{if(!localStorage.getItem("quant_token")){A.value=[];return}const de=await fetch("/api/users");if(de.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),m.value=null;return}const we=await de.json();A.value=we.users||[]}catch(Q){A.value=[],console.error("[loadUsers] error:",Q)}}function ve(Q){q.value=Q,p.value={username:Q.username,password:"",role:Q.role,theme:Q.theme||"tech-blue",group:Q.group||Q.role},g.value=!0}async function ce(){if(p.value.username){H.value=!0;try{const Q=q.value?"PUT":"POST",de=q.value?`/api/users/${p.value.username}`:"/api/users",he=await(await fetch(de,{method:Q,headers:{"Content-Type":"application/json"},body:JSON.stringify(p.value)})).json();if(he.success){if(ElementPlus.ElMessage.success("保存成功"),m.value&&p.value.username===m.value.username){const X=p.value.theme;X&&X!==m.value.theme&&(m.value.theme=X,localStorage.setItem("quant_user",JSON.stringify(m.value)),w(X))}g.value=!1,q.value=null,await oe()}else ElementPlus.ElMessage.error(he.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{H.value=!1}}}async function Ce(Q){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${Q}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await oe())}catch(de){console.error("[deleteUser]",de)}}async function pe(Q){try{const we=await(await fetch(`/api/users/${Q.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:Q.enabled})})).json();we.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(we.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function be(Q){try{const{value:de}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${Q.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(de){const he=await(await fetch(`/api/users/${Q.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:de})})).json();he.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(he.message||"重置失败")}}catch{}}return{userList:A,userSearch:L,groupFilter:x,userPageTab:E,expandedGroups:O,addMemberGroupMap:r,filteredUsers:T,toggleGroupExpand:f,removeMemberFromGroupInline:_,addMemberToGroupInline:D,changeUserGroup:M,showAddUser:g,editingUser:q,userForm:p,savingUser:H,editingGroup:Y,menuConfigDialog:se,memberDialog:re,groupEditForm:F,subPageCache:S,showAddGroup:N,addGroupForm:k,savingGroup:l,groupMembers:C,addMemberUsername:y,selectedMemberGroup:z,subPageSectionExpanded:W,toggleSubPageSection:R,getGroupMemberCount:t,getMenuEnabledCount:d,groupCount:I,openMemberManager:K,loadGroupMembers:c,addMemberToGroup:h,removeMemberFromGroup:s,availableUsersForGroup:n,onParentToggle:o,openMenuConfig:J,saveMenuConfig:le,deleteGroupConfig:ie,createGroup:$,allGroups:B,getGroupName:me,loadAllGroups:j,loadUsers:oe,editUser:ve,saveUser:ce,deleteUser:Ce,toggleUserEnabled:pe,resetUserPassword:be}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:u}=Vue,{stockKlineLoaded:m,stockDetailVisible:w,stockDetailTab:b,stockDetail:P,disposeStockKline:A}=a,L=e([]),x=e(!1),E=e(!1),O=e("date"),r=e([]),T=e([]),f=e([]),_=e([]),D=u(()=>{var s,n;const h=[];for(const o of L.value){if(!o||o.id==null)continue;const J=o.stock_name||o.stock_code||"",le=Array.isArray(o.messages)?o.messages:[];h.push({id:o.id,stock_code:o.stock_code,stock_name:J,first_msg:o.first_msg||((n=(s=le[0])==null?void 0:s.content)==null?void 0:n.substring(0,50))||"",msg_count:o.msg_count||le.length||0,created_at:o.created_at,date:(o.created_at||"").substring(0,10),month:(o.created_at||"").substring(0,7),messages:le})}return h}),M=u(()=>{const h={};for(const n of D.value){const o=n.date||"未知";h[o]||(h[o]=[]),h[o].push(n)}const s={};return Object.keys(h).sort((n,o)=>o.localeCompare(n)).forEach(n=>s[n]=h[n]),s}),g=u(()=>{const h={};for(const n of D.value){const o=n.month||"未知";h[o]||(h[o]=[]),h[o].push(n)}const s={};return Object.keys(h).sort((n,o)=>o.localeCompare(n)).forEach(n=>s[n]=h[n]),s}),q=u(()=>{const h={};for(const s of D.value){const n=`${s.stock_name}(${s.stock_code})`;h[n]||(h[n]=[]),h[n].push(s)}return h});function p(h){const s=r.value.indexOf(h);s>=0?r.value.splice(s,1):r.value.push(h)}function H(h){const s=M.value[h]||[];if(s.every(o=>r.value.includes(o.id)))r.value=r.value.filter(o=>!s.some(J=>J.id===o));else for(const o of s)r.value.includes(o.id)||r.value.push(o.id)}function Y(h){const s=g.value[h]||[];if(s.every(o=>r.value.includes(o.id)))r.value=r.value.filter(o=>!s.some(J=>J.id===o));else for(const o of s)r.value.includes(o.id)||r.value.push(o.id)}function se(h){const s=q.value[h]||[];if(s.every(o=>r.value.includes(o.id)))r.value=r.value.filter(o=>!s.some(J=>J.id===o));else for(const o of s)r.value.includes(o.id)||r.value.push(o.id)}function re(h){const s=T.value.indexOf(h);s>=0?T.value.splice(s,1):T.value.push(h)}function F(h){const s=f.value.indexOf(h);s>=0?f.value.splice(s,1):f.value.push(h)}function S(h){const s=_.value.indexOf(h);s>=0?_.value.splice(s,1):_.value.push(h)}function N(){r.value.length===D.value.length?r.value=[]:r.value=D.value.map(h=>h.id)}async function k(){for(const h of[...r.value])await K(h);r.value=[]}const l={};async function C(h){P.value={stock:h.stock_code,name:h.stock_name},w.value=!0,b.value="chat",m.value=!1,A(),W.value=!0,R.value="",z.value=[];try{let s=l[h.id];if(!s){const n=await fetch("/api/ai/chat/history/"+h.id);if(!n.ok)throw new Error("load history failed");s=(await n.json()).messages||[],l[h.id]=s}z.value=s.map(n=>({role:n.role,content:n.content}))}catch{R.value="历史消息加载失败，请重试"}finally{W.value=!1}}const y=e(""),z=e([]),W=e(!1),R=e("");async function t(){var n;const h=y.value.trim();if(!h||W.value)return;R.value="",z.value.push({role:"user",content:h}),y.value="",W.value=!0;const s=z.value.length;z.value.push({role:"assistant",content:""});try{const le=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((n=P.value)==null?void 0:n.stock)||"",message:h})})).body.getReader(),ie=new TextDecoder;let $="";for(;;){const{done:B,value:j}=await le.read();if(B)break;$+=ie.decode(j,{stream:!0});const me=$.split(`
`);$=me.pop()||"";for(const oe of me)if(oe.startsWith("data: "))try{const ve=JSON.parse(oe.slice(6));ve.token?z.value[s].content+=ve.token:ve.done?console.log("Stream done:",ve.session_id):ve.error&&(R.value=ve.error)}catch(ve){console.warn("SSE parse error:",ve)}}}catch(o){z.value[s].content||(z.value[s].content="网络错误: "+o.message)}W.value=!1}async function d(h){var n;R.value="",W.value=!0;const s={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};z.value.push({role:"user",content:s[h]||s.comprehensive});try{const J=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((n=P.value)==null?void 0:n.stock)||"",mode:h})});if(J.ok){const le=await J.json();z.value.push({role:"assistant",content:le.reply||"无回复"})}}catch(o){R.value="网络错误: "+o.message}W.value=!1}async function I(){x.value=!0,E.value=!1;try{const h=await fetch("/api/ai/chat/history?view=date");if(h.ok){const s=await h.json(),n=[];for(const o of s)for(const J of o.items||[])n.push(J);L.value=n}else E.value=!0}catch(h){console.error(h),E.value=!0}finally{x.value=!1}}async function K(h){try{await fetch("/api/ai/chat/history/"+h,{method:"DELETE"}),L.value=L.value.filter(s=>s.id!==h)}catch(s){console.error("deleteChatSession:",s)}}function c(h){if(!h)return"";const s=String(h).split(`
`),n=[],o=[];let J=0;for(;J<s.length;){if(/^\s*\|.*\|\s*$/.test(s[J])){let ie=J;const $=[];for(;ie<s.length&&/^\s*\|.*\|\s*$/.test(s[ie]);)$.push(s[ie]),ie++;const B=oe=>oe.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(ve=>ve.trim()),j=$.map(B);if(j.length>1&&j[1].every(oe=>/^:?-{3,}:?$/.test(oe))){const oe=Math.max(...j.map(pe=>pe.length)),ve=j[0].slice(0,oe),ce=j.slice(2);let Ce="<table>";ce.length?(Ce+="<thead><tr>"+ve.map(pe=>"<th>"+pe+"</th>").join("")+"</tr></thead>",Ce+="<tbody>"+ce.map(pe=>"<tr>"+pe.slice(0,oe).map(be=>"<td>"+be+"</td>").join("")+"</tr>").join("")+"</tbody>"):Ce+="<tbody><tr>"+ve.map(pe=>"<td>"+pe+"</td>").join("")+"</tr></tbody>",Ce+="</table>",n.push(Ce),o.push("\0T"+(n.length-1)+"\0"),J=ie;continue}for(;J<ie;)o.push(s[J]),J++;continue}o.push(s[J]),J++}let le=o.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return n.forEach((ie,$)=>{le=le.split("\0T"+$+"\0").join(ie)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(le=window.__quantModules.core.sanitizeHtml(le)),le}return{chatSessions:L,chatHistoryView:O,selectedChatIds:r,expandedChatDates:T,expandedChatMonths:f,expandedChatStocks:_,chatHistoryLoading:x,chatHistoryError:E,allChatSessionsFlat:D,chatGroupedByDate:M,chatGroupedByMonth:g,chatGroupedByStock:q,toggleSelectChat:p,toggleSelectChatDate:H,toggleSelectChatMonth:Y,toggleSelectChatStock:se,toggleChatDateExpand:re,toggleChatMonthExpand:F,toggleChatStockExpand:S,selectAllChatSessions:N,deleteSelectedChatSessions:k,viewChatSession:C,loadChatHistory:I,deleteChatSession:K,renderMarkdown:c,stockChatInput:y,stockChatMessages:z,stockChatLoading:W,stockChatError:R,askStockSend:t,askStockQuick:d}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:u,watch:m}=Vue,{consensus:w,currentPage:b,currentSubPage:P,dashboardData:A,searchKeyword:L,statusFilter:x,strategyFilter:E,strategyFilterCounts:O}=a;function r(S){const N=E.value.selected;if(!N||N.length===0)return S;const k=E.value.mode;return S.filter(l=>{const C=l.strategy_names||l.strategies||[];return k==="union"?N.some(y=>C.includes(y)):N.every(y=>C.includes(y))})}const T=u(()=>{const S=r(w.value||[]);return{all:S.length,newCount:S.filter(N=>N.status==="new").length,current:S.filter(N=>N.status==="current").length,out:S.filter(N=>N.status==="out").length}}),f=u(()=>{let S=w.value||[];if(x.value!=="all"&&(S=S.filter(N=>N.status===x.value)),S=r(S),L.value){const N=L.value.toLowerCase();S=S.filter(k=>k.code.toLowerCase().includes(N)||k.name&&k.name.toLowerCase().includes(N))}return S}),_=u(()=>{const S=w.value||[],N={},k={};for(const l of S)l.code&&l.name&&(k[l.code]=l.name);for(const l of S){const C=l.strategy_names||l.strategies||[];for(const y of C)N[y]||(N[y]={strategy:y,count:0,codes:[],names:[]}),N[y].count++,N[y].codes.includes(l.code)||(N[y].codes.push(l.code),N[y].names.push({code:l.code,name:k[l.code]||l.code}))}return Object.values(N).sort((l,C)=>C.count-l.count)}),D=u(()=>{const S=E.value.selected,N=E.value.mode,k={};for(const[l,C]of Object.entries(O.value)){const y=C||[];!S||S.length===0?k[l]=y.length:N==="union"?k[l]=y.filter(z=>z.strategies&&S.some(W=>z.strategies.includes(W))).length:k[l]=y.filter(z=>z.strategies&&S.every(W=>z.strategies.includes(W))).length}return k});function M(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(E.value.selected)),localStorage.setItem("quant_strategy_filter_mode",E.value.mode)}const g=u(()=>{const S=(A.value||{}).consensus_rank||[];return r(S)}),q=u(()=>{const S=w.value||O.value.day||[];return r(S).length}),p=u(()=>{const S=(A.value||{}).strategy_counts||[],N=w.value||O.value.day||[];if(N.length===0)return S;const k=r(N),l={};k.forEach(y=>{(y.strategy_names||y.strategies||[]).forEach(W=>{l[W]=(l[W]||0)+1})});const C=k.length||1;return S.map(y=>{const z=y.strategy_name||y.strategy_id,W=l[z]||0;return{...y,count:W,percentage:Math.round(W/C*1e3)/10}})}),H=u(()=>{const S=(A.value||{}).pool_changes||{},N=(S.new_count||0)-(S.out_count||0);return N>0?{dir:"up",text:"↑"+N}:N<0?{dir:"down",text:"↓"+Math.abs(N)}:{dir:"flat",text:"→0"}}),Y=u(()=>{const S=(A.value||{}).time_coverage||{},N=new Date(S.start_date),k=new Date(S.end_date),l=new Date;if(!N.getTime()||!k.getTime()||l>=k)return 100;if(l<=N)return 0;const C=k-N,y=l-N;return Math.round(y/C*100)}),se=e(null),re=u(()=>{if(!se.value)return"";const S=Math.floor((Date.now()-se.value)/1e3);return S<60?S+"秒前刷新":S<3600?Math.floor(S/60)+"分钟前刷新":Math.floor(S/3600)+"小时前刷新"});function F(S){E.value.selected=[S],E.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([S])),localStorage.setItem("quant_strategy_filter_mode","union"),b.value="calendar",P.value="daily"}return{applyStrategyFilter:r,statusCounts:T,stockPool:f,strategyDistribution:_,strategyPreviewCount:D,saveStrategyFilter:M,filteredConsensusRank:g,currentPoolSize:q,filteredStrategyCounts:p,poolChangeBadge:H,timeBarPercent:Y,lastRefreshTime:se,timeSinceRefresh:re,navigateToStrategyFilter:F}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist={create(a){const{ref:e,computed:u,watch:m}=Vue,{currentUser:w,selectedDate:b,stockDetail:P,stockDetailTab:A,stockDetailVisible:L,stockDetailLoading:x,stockKlineLoaded:E,viewCache:O,animateScoreEntrance:r,loadStockKline:T,refreshStockScore:f,disposeStockKline:_,aiHistory:D,aiLoading:M,aiEvalStage:g,aiEvalElapsed:q,aiEvalError:p,aiResult:H,autoEvaluateConfig:Y,autoEvaluateScope:se,batchStocks:re,batchRunning:F,batchTotal:S,batchCompleted:N,batchCurrent:k,batchStatuses:l,batchResults:C,batchEvalErrors:y,expandedDates:z,expandedStocks:W,savingConfig:R,selectedHistoryIds:t,selectedWatchlistCodes:d,showAutoEvaluateSettings:I,showBatchEvaluate:K}=a,c=v=>(getComputedStyle(document.documentElement).getPropertyValue(v)||"").trim(),h=e(""),s=e("default"),n=e("default"),o=e([]),J=u(()=>new Set(o.value.map(v=>v.code))),le=e(!1),ie=e(!1),$=u(()=>{const v=[...o.value];return n.value==="name"?v.sort((V,G)=>V.name.localeCompare(G.name,"zh")):n.value==="added"?v.sort((V,G)=>(G.added_at||"").localeCompare(V.added_at||"")):n.value==="score"&&v.sort((V,G)=>{const fe=j(V.code);return j(G.code)-fe}),v});function B(v){const V=D.value.filter(fe=>fe.stock_code===v);if(V.length===0)return null;const G=V.reduce((fe,ue)=>fe.evaluate_time>ue.evaluate_time?fe:ue);return{score:G.result.total_score,color:G.result.level_color}}function j(v){const V=B(v);return V?V.score:0}function me(v){pt(v.code,v.name),pe.value=pe.value.filter(V=>V.code!==v.code),Ce.value=""}const oe=u(()=>new Set(D.value.map(v=>v.stock_code))),ve=e(new Set);function ce(v){ve.value.add(v)}const Ce=e(""),pe=e([]),be=e(!1),Q=e({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),de=e(!1),we=e(!1),he=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};he.REALTIME_WS_PATH;const X=he.REALTIME_DEGRADED_TEXT||"数据不可达",te=he.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";he.WARN_RISE_SPEED_THRESHOLD!=null&&he.WARN_RISE_SPEED_THRESHOLD,he.WARN_VOLUME_RATIO_THRESHOLD!=null&&he.WARN_VOLUME_RATIO_THRESHOLD;const ae=he.quoteFmt||{price:v=>v==null?"--":Number(v).toFixed(2),pct:v=>v==null?"--":Number(v).toFixed(2)+"%",num:v=>v==null?"--":Number(v).toFixed(2),color:v=>""},Pe=3,ke=5e3,De=e({}),Ue=e(!1),qe=e("idle");let Z=null,ne=null,ge=0;function _e(v){return he.checkQuoteWarning?he.checkQuoteWarning(v):null}function je(v){return _e(De.value[v])}function Le(v){return ae.color(De.value[v])}function Ie(v){return ae.price(De.value[v]&&De.value[v].price)}function Je(v){return ae.pct(De.value[v]&&De.value[v].change_pct)}function $e(v,V){return ae.num(De.value[v]&&De.value[v][V])}function dt(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function Qe(){if(!Z||Z.readyState!==1)return;const v=(o.value||[]).map(V=>V.code);v.length!==0&&Z.send(JSON.stringify({subscribe:v}))}function et(){if(ne&&(clearTimeout(ne),ne=null),Z){try{Z.onopen=null,Z.onmessage=null,Z.onerror=null,Z.onclose=null,Z.close()}catch{}Z=null}De.value={},Ue.value=!1,qe.value="idle"}function tt(){const v=dt();if(!v||!he.buildRealtimeWsUrl||qe.value==="open"||qe.value==="connecting")return;let V;try{V=he.buildRealtimeWsUrl()+"?token="+encodeURIComponent(v)}catch{qe.value="offline",Ue.value=!0;return}qe.value="connecting";let G=null;try{G=new WebSocket(V)}catch{qe.value="offline",Ue.value=!0;return}Z=G,G.onopen=function(){qe.value="open",ge=0,Qe()},G.onmessage=function(fe){let ue=null;try{ue=JSON.parse(fe.data||"{}")}catch{return}if(!ue||ue.type!=="quotes")return;if(Ue.value=!!ue.degraded,ue.degraded||!Array.isArray(ue.data)){De.value={};return}const Ye={};ue.data.forEach(function(Te){Te&&Te.code&&(Ye[Te.code]=Te)}),De.value=Ye},G.onerror=function(){qe.value="offline",Ue.value=!0},G.onclose=function(){qe.value="offline",ge<Pe?(ge++,ne=setTimeout(function(){qe.value!=="open"&&tt()},ke*ge)):Ue.value=!0}}m(o,function(){qe.value==="open"&&Qe()}),dt()&&setTimeout(tt,500);async function gt(){if(!P.value)return;M.value=!0,H.value=null,p.value="",g.value="fetching",q.value=0;const v=Date.now(),V=setInterval(()=>{M.value&&(q.value=Math.round((Date.now()-v)/1e3))},500);try{const G=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:P.value.stock,stock_name:P.value.name||P.value.stock,strategy:s.value})});g.value="calculating";const fe=await G.json();g.value="analyzing",fe.success?(await nextTick(),H.value=fe.data,A.value="ai",Ge()):(p.value=fe.message||"评估失败",ElementPlus.ElMessage.error(p.value))}catch(G){p.value=G&&G.message&&!String(G.message).includes("Failed to fetch")?G.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(p.value)}finally{clearInterval(V),M.value=!1,q.value=0,p.value?g.value="":(g.value="done",setTimeout(()=>{g.value==="done"&&(g.value="")},800))}}const Ct=50,Xe=e(0),Ae=e(!1),Et=u(()=>D.value.length<Xe.value);async function Ge(){le.value=!0,ie.value=!1;try{if(!localStorage.getItem("quant_token")){D.value=[];return}const V=await fetch(`/api/ai/history?limit=${Ct}&offset=0`);if(V.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),w.value=null;return}const G=await V.json();G.success?(D.value=G.data||[],Xe.value=G.total!=null?G.total:D.value.length):ie.value=!0}catch(v){console.error("[loadAiHistory] error:",v),ie.value=!0}finally{le.value=!1}}async function lt(){if(!(Ae.value||!Et.value)){Ae.value=!0;try{const V=await(await fetch(`/api/ai/history?limit=${Ct}&offset=${D.value.length}`)).json();if(V.success&&Array.isArray(V.data)){const G=new Set(D.value.map(ue=>ue.id)),fe=V.data.filter(ue=>!G.has(ue.id));D.value=D.value.concat(fe),V.total!=null&&(Xe.value=V.total)}}catch(v){console.warn("[loadMoreAiHistory] error:",v)}finally{Ae.value=!1}}}async function Ve(v){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const G=await(await fetch(`/api/ai/history/${v}`,{method:"DELETE"})).json();if(G.success){ElementPlus.ElMessage.success("删除成功"),Ge();const fe=t.value.indexOf(v);fe>=0&&t.value.splice(fe,1)}else ElementPlus.ElMessage.error(G.message||"删除失败")}catch{}}function ht(v){const V=t.value.indexOf(v);V>=0?t.value.splice(V,1):t.value.push(v)}function ut(){t.value=[]}function Ne(){d.value=[]}async function Mt(){const v=t.value;if(v.length===0)return;const V=D.value.filter(G=>v.includes(G.id)).map(G=>G.stock_code);K.value=!0,re.value=[...new Set(V)].join(",")}async function It(){const v=t.value;if(v.length===0)return;const V=D.value.filter(ue=>v.includes(ue.id)),G=[...new Map(V.map(ue=>[ue.stock_code,ue])).values()];let fe=0;for(const ue of G)J.value.has(ue.stock_code)||(await pt(ue.stock_code,ue.stock_name||ue.stock_code),fe++);fe>0?ElementPlus.ElMessage.success(`已加入 ${fe} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function zt(){if(d.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${d.value.length} 只股票？`,"提示",{type:"warning"});for(const v of d.value)await kt(v);d.value=[],ElementPlus.ElMessage.success("已移除")}catch(v){v&&v.message!=="cancel"&&console.warn("batchRemoveWatchlist:",v)}}function Tt(v){const V=d.value.indexOf(v);V>=0?d.value.splice(V,1):d.value.push(v)}function Rt(){t.value.length===D.value.length?t.value=[]:t.value=D.value.map(v=>v.id)}function qt(){d.value.length===o.value.length?d.value=[]:d.value=o.value.map(v=>v.code)}async function wt(){if(t.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${t.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const V=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:t.value})})).json();V.success?(ElementPlus.ElMessage.success(V.message),t.value=[],Ge()):ElementPlus.ElMessage.error(V.message||"删除失败")}catch{}}async function vt(){try{const V=await(await fetch("/api/ai/auto-config")).json();V.success&&(Y.value=V.data,V.data.evaluate_scope&&(se.value=V.data.evaluate_scope))}catch(v){console.warn("loadAutoEvaluateConfig failed:",v)}}async function Ze(){R.value=!0;try{Y.value.evaluate_scope=se.value;const V=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y.value)})).json();V.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),I.value=!1):ElementPlus.ElMessage.error(V.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{R.value=!1}}const ze=e(!1);async function mt(){ze.value=!0;try{const V=await(await fetch("/api/watchlist")).json();V.success&&(o.value=V.stocks||[])}catch(v){console.warn("loadWatchlist failed:",v)}finally{ze.value=!1}}async function pt(v,V){try{const fe=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:v,name:V})})).json();if(fe.success)return fe.existed||o.value.push({code:v,name:V,added_at:new Date().toISOString()}),!0}catch(G){console.warn("addToWatchlist failed:",G)}return!1}async function kt(v){try{await fetch(`/api/watchlist/${encodeURIComponent(v)}`,{method:"DELETE"}),o.value=o.value.filter(V=>V.code!==v)}catch(V){console.warn("removeFromWatchlist failed:",V)}}async function at(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),o.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(v){console.warn("clearWatchlist failed:",v)}}async function ft(v,V){J.value.has(v)?(await kt(v),ElementPlus.ElMessage.info("已移除自选")):await pt(v,V)&&ElementPlus.ElMessage.success("已加入自选")}async function Pt(v,V){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(v,V||"");const G=new Date().toISOString().split("T")[0],fe=b.value||G;A.value="kline",_("stockKlineChart"),P.value=null,x.value=!0,E.value=!1,L.value=!0,nextTick(()=>r());try{const ue=await fetch(`/api/calendar/stock/${encodeURIComponent(v)}?date=${fe}`);P.value=await ue.json()}catch{P.value={stock:v,name:V,total_days:0}}finally{x.value=!1}await nextTick(),await T("daily"),f()}const st=e(!1);async function yt(){var v;if(o.value.length!==0){st.value=!0;try{const G=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();G.success&&G.loaded>0?(((v=G.details)==null?void 0:v.loaded)||[]).forEach(fe=>ve.value.add(fe.code)):G.loaded===0&&G.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(V){console.error("预加载K线失败:",V)}finally{st.value=!1}}}async function Bt(v,V){M.value=!0,H.value=null,p.value="",g.value="fetching",E.value=!1,_();const G=new Date().toISOString().split("T")[0],fe=b.value||G;try{const ue=await fetch(`/api/calendar/stock/${encodeURIComponent(v)}?date=${fe}`);P.value=await ue.json()}catch{P.value={stock:v,name:V,total_days:0}}A.value="ai",L.value=!0,await nextTick();try{const Ye=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:v,stock_name:V})})).json();Ye.success?(H.value=Ye.data,Ge()):(p.value=Ye.message||"评估失败",ElementPlus.ElMessage.error(p.value))}catch{p.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(p.value)}finally{M.value=!1,g.value=""}}async function At(){o.value.length!==0&&(K.value=!0,re.value=o.value.map(v=>v.code).join(","))}async function Ot(){d.value.length!==0&&(K.value=!0,re.value=d.value.join(","))}async function i(){if(!Ce.value.trim()){pe.value=[];return}be.value=!0;try{const V=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(Ce.value)}`)).json();pe.value=(V.results||[]).filter(G=>!J.value.has(G.code))}catch(v){console.warn("searchStockForWatchlist failed:",v)}finally{be.value=!1}}async function U(){try{const V=await(await fetch("/api/data-refresh/config")).json();Q.value=V}catch(v){console.error("加载数据刷新配置失败:",v)}}async function xe(){we.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{we.value=!1}}async function nt(){var v;de.value=!0;try{const G=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();G.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((v=G.parser_stats)==null?void 0:v.dates_count)||0}交易日`),O.clear(),await U()):ElementPlus.ElMessage.error(G.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{de.value=!1}}const ot=e(!1);async function _t(){ot.value=!0;try{const V=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:Q.value.stock_pool||[]})})).json();if(V.success){const G=V.result||{},fe=V.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${G.pulled||0}/${G.total||0}, 财务 ${fe.pulled||0}/${fe.total||0}`),O.clear(),await U()}else ElementPlus.ElMessage.error(V.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{ot.value=!1}}const jt=u(()=>{const v={};for(const V of D.value){const G=(V.evaluate_time||"").split("T")[0];v[G]||(v[G]=[]),v[G].push(V)}for(const V in v)v[V].sort((G,fe)=>fe.evaluate_time.localeCompare(G.evaluate_time));return v}),Ft=u(()=>{const v={};for(const V of D.value){const G=V.stock_code;v[G]||(v[G]=[]),v[G].push(V)}for(const V in v)v[V].sort((G,fe)=>fe.evaluate_time.localeCompare(G.evaluate_time));return v}),Ut=u(()=>{const v={};for(const V of D.value){const G=(V.evaluate_time||"").split("T")[0].slice(0,7);v[G]||(v[G]=[]),v[G].push(V)}for(const V in v)v[V].sort((G,fe)=>fe.evaluate_time.localeCompare(G.evaluate_time));return v}),ea=u(()=>Object.keys(Ft.value).length),ta=u(()=>{const v=D.value.length;return v===0?[]:[{label:"90+",min:90,max:100,color:"var(--el-success)"},{label:"80-89",min:80,max:89,color:"var(--color-success)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--color-success) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--el-warning)"},{label:"<60",min:0,max:59,color:"var(--el-danger)"}].map(G=>{const fe=D.value.filter(ue=>ue.result.total_score>=G.min&&ue.result.total_score<=G.max).length;return{...G,count:fe,pct:Math.round(fe/v*100)}})});async function aa(){if(!h.value)return;const v=o.value.find(V=>V.code===h.value);if(v){M.value=!0,H.value=null,p.value="",g.value="fetching";try{P.value={stock:v.code,name:v.name,total_days:0},L.value=!0,A.value="ai",await nextTick();const G=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:v.code,stock_name:v.name,strategy:s.value})})).json();G.success?(H.value=G.data,Ge(),h.value=""):(p.value=G.message||"评估失败",ElementPlus.ElMessage.error(p.value))}catch{p.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(p.value)}finally{M.value=!1,g.value=""}}}function sa(v){const V=z.value.indexOf(v);V>=0?z.value.splice(V,1):z.value.push(v)}function ia(v){const G=(jt.value[v]||[]).map(ue=>ue.id);G.every(ue=>t.value.includes(ue))?t.value=t.value.filter(ue=>!G.includes(ue)):G.forEach(ue=>{t.value.includes(ue)||t.value.push(ue)})}function la(v){const G=(Ut.value[v]||[]).map(ue=>ue.id);G.every(ue=>t.value.includes(ue))?t.value=t.value.filter(ue=>!G.includes(ue)):G.forEach(ue=>{t.value.includes(ue)||t.value.push(ue)})}function na(v){const V=W.value.indexOf(v);V>=0?W.value.splice(V,1):W.value.push(v)}function Nt(v){const G=(Ft.value[v]||[]).map(ue=>ue.id);G.every(ue=>t.value.includes(ue))?t.value=t.value.filter(ue=>!G.includes(ue)):G.forEach(ue=>{t.value.includes(ue)||t.value.push(ue)})}const Fe={},Kt={};function bt(v,V,G){if(!v||(G&&(Kt[V]={el:v,records:G}),Fe[V]===v))return;const fe=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,ue=()=>{Object.keys(Fe).forEach(ye=>{if(Fe[ye]&&Fe[ye]!==v){try{Fe[ye].dispose()}catch{}delete Fe[ye]}});const Ye=[...G].sort((ye,Ke)=>ye.evaluate_time.localeCompare(Ke.evaluate_time)),Te=Ye.map(ye=>(ye.evaluate_time||"").split("T")[0]),Oe=Ye.map(ye=>{var Ke;return((Ke=ye.result)==null?void 0:Ke.total_score)??null}),rt=Ye.map(ye=>{var Ke;return((Ke=ye.result)==null?void 0:Ke.level)??""}),Be={primary:c("--primary-color")||"#2563eb",textPrimary:c("--text-primary")||"#1f2937",textSecondary:c("--text-secondary")||"#6b7280",border:c("--border-light")||"#e5e7eb",up:c("--color-success")||"#67c23a",down:c("--color-danger")||"#f56c6c"},xt=[];for(let ye=1;ye<Oe.length;ye++)Oe[ye]!=null&&Oe[ye-1]!=null&&Math.abs(Oe[ye]-Oe[ye-1])>=15&&xt.push({name:"大幅变化",coord:[Te[ye],Oe[ye]],value:(Oe[ye]-Oe[ye-1]>0?"↑":"↓")+Math.abs(Oe[ye]-Oe[ye-1]),symbol:"pin",symbolSize:32,itemStyle:{color:Oe[ye]-Oe[ye-1]>0?Be.up:Be.down}});const St=echarts.init(v);St.setOption({tooltip:{trigger:"axis",backgroundColor:c("--bg-card")||"#ffffff",borderColor:Be.border,textStyle:{color:Be.textPrimary},formatter:function(ye){var Lt;const Ke=(Lt=ye[0])==null?void 0:Lt.dataIndex,Ht=Ke!=null?rt[Ke]:"";return Te[Ke]+"<br/>得分: "+Oe[Ke]+(Ht?" ("+Ht+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Te,axisLabel:{fontSize:10,rotate:30,color:Be.textSecondary},axisLine:{lineStyle:{color:Be.border}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Be.textSecondary},splitLine:{lineStyle:{color:Be.border}}},series:[{data:Oe,type:"line",smooth:!0,lineStyle:{color:Be.primary,width:2},itemStyle:{color:Be.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:c("--primary-rgb")?"rgba("+c("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:c("--primary-rgb")?"rgba("+c("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:xt.length>0?{data:xt}:void 0}]}),Fe[V]=St};fe?fe().then(ue).catch(()=>{}):ue()}function $t(){Object.keys(Kt).forEach(v=>{const V=Kt[v];if(!(!V||!V.el)){if(Fe[v]){try{Fe[v].dispose()}catch{}delete Fe[v]}bt(V.el,v,V.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart($t));async function Gt(v){H.value=v,E.value=!1,_();try{const V=await fetch(`/api/calendar/stock/${v.stock_code}?date=${b.value}`);P.value=await V.json()}catch{P.value={stock:v.stock_code,name:v.stock_name||v.stock_code,total_days:0,history:[]}}L.value=!0,A.value="ai"}async function Yt(){if(!re.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const v=re.value.split(/[,，\s]+/).filter(Te=>Te.trim());if(v.length===0)return;F.value=!0,S.value=v.length,N.value=0,k.value="",l.value={},C.value={},y.value={},v.forEach(Te=>{l.value[Te]="pending",C.value[Te]=null});const V={"Content-Type":"application/json"};let G=0,fe=0,ue=!1;try{const Te=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:V,body:JSON.stringify({stock_codes:v})});if(Te.ok&&Te.body){ue=!0;const Oe=Te.body.getReader(),rt=new TextDecoder("utf-8");let Be="",xt=!1;for(;!xt;){const{value:St,done:ye}=await Oe.read();xt=ye,Be+=rt.decode(St||new Uint8Array,{stream:!xt});let Ke;for(;(Ke=Be.indexOf(`

`))>=0;){const Ht=Be.slice(0,Ke);Be=Be.slice(Ke+2);const Lt=Ht.split(`
`).find(oa=>oa.startsWith("data: "));if(!Lt)continue;let We;try{We=JSON.parse(Lt.slice(6))}catch{continue}We.type==="start"?We.total&&(S.value=We.total):We.type==="item"?(N.value++,k.value=We.stock_code,We.success?(l.value[We.stock_code]="success",C.value[We.stock_code]=We,G++):(l.value[We.stock_code]="error",y.value[We.stock_code]=We.error||"评估失败",fe++)):We.type==="done"&&(typeof We.success=="number"&&(G=We.success),typeof We.fail=="number"&&(fe=We.fail))}}if(Be.trim()){const St=Be.split(`
`).find(ye=>ye.startsWith("data: "));if(St)try{const ye=JSON.parse(St.slice(6));ye.type==="item"?(N.value++,k.value=ye.stock_code,ye.success?(l.value[ye.stock_code]="success",C.value[ye.stock_code]=ye,G++):(l.value[ye.stock_code]="error",y.value[ye.stock_code]=ye.error||"评估失败",fe++)):ye.type==="done"&&(typeof ye.success=="number"&&(G=ye.success),typeof ye.fail=="number"&&(fe=ye.fail))}catch{}}}}catch{ue=!1}if(!ue){G=0,fe=0,N.value=0;for(const Te of v){k.value=Te,l.value[Te]="running";try{const rt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:V,body:JSON.stringify({stock_code:Te.trim(),stock_name:Te.trim()})})).json();rt.success?(l.value[Te]="success",C.value[Te]=rt.data,G++):(l.value[Te]="error",y.value[Te]=rt.message&&rt.message!=="success"?rt.message:"评估失败",fe++)}catch(Oe){l.value[Te]="error",y.value[Te]="网络错误: "+(Oe&&Oe.message?Oe.message:Oe),fe++}N.value++}}k.value="",await Ge();const Ye=v.length;setTimeout(()=>{fe===0?ElementPlus.ElMessage.success(`评估完成 成功 ${G}/${Ye}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${G}/${Ye} · 失败 ${fe}`),F.value=!1},500)}return{quickEvalStock:h,evalStrategy:s,watchlistSort:n,watchlist:o,watchlistCodes:J,sortedWatchlist:$,getWatchlistScore:B,getLatestScore:j,addSearchResult:me,evaluatedCodes:oe,klineLoadedCodes:ve,markKlineLoaded:ce,watchlistSearch:Ce,watchlistResults:pe,watchlistSearching:be,dataRefreshConfig:Q,dataRefreshReloading:de,dataRefreshSaving:we,aiHistoryLoading:le,aiHistoryError:ie,aiHistoryTotal:Xe,aiHistoryLoadingMore:Ae,hasMoreAiHistory:Et,loadMoreAiHistory:lt,watchlistLoading:ze,doAiEvaluate:gt,loadAiHistory:Ge,deleteSingleHistory:Ve,toggleSelectHistory:ht,clearSelection:ut,clearWatchlistSelection:Ne,batchReevaluateHistory:Mt,batchAddToWatchlist:It,batchRemoveWatchlist:zt,toggleSelectWatchlist:Tt,selectAllHistory:Rt,selectAllWatchlist:qt,deleteSelectedHistory:wt,loadAutoEvaluateConfig:vt,saveAutoEvaluateConfig:Ze,loadWatchlist:mt,addToWatchlist:pt,removeFromWatchlist:kt,clearWatchlist:at,toggleWatchlist:ft,showStockKline:Pt,preloadingKline:st,preloadWatchlistKline:yt,watchlistEvaluate:Bt,batchEvaluateWatchlist:At,batchEvaluateSelected:Ot,searchStockForWatchlist:i,loadDataRefreshConfig:U,saveDataRefreshConfig:xe,triggerDataReload:nt,triggerDataPull:_t,dataPullRunning:ot,groupedByDate:jt,aiHistoryByStock:Ft,groupedByMonth:Ut,aiHistoryStockCount:ea,scoreDistribution:ta,quickEvaluate:aa,toggleDateExpand:sa,toggleSelectDate:ia,toggleSelectMonth:la,toggleStockExpand:na,toggleSelectStock:Nt,registerTrendChart:bt,viewAiResult:Gt,doBatchEvaluate:Yt,realtimeQuotes:De,realtimeDegraded:Ue,realtimeWsState:qe,connectRealtimeQuotes:tt,disconnectRealtimeQuotes:et,quoteWarningFor:je,realtimeQuoteColor:Le,realtimePriceText:Ie,realtimePctText:Je,realtimeRatioText:$e,REALTIME_DEGRADED_TEXT:X,REALTIME_FALLBACK_TEXT:te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:u}=Vue,m=e([]),w=e(null),b=e([]),P=e(!1),A=e(!1),L=e(!1),x=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),E=e(!1),O=e(!1),r=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),T=e(!1),f=e("positions"),_=e(30),D=e(!1),M=e(""),g=e(!1),q=e({dates:[],equity:[],values:[]}),p=u(()=>m.value.length);async function H(){P.value=!0,A.value=!1;try{const d=await(await fetch("/api/portfolio")).json();d.success?(m.value=d.positions||[],w.value=d.summary||null):A.value=!0}catch(t){console.warn("[portfolio] 加载持仓失败:",t),A.value=!0}finally{P.value=!1}}async function Y(){const t=x.value,d=(t.stock_code||"").trim();if(!d){ElementPlus.ElMessage.warning("请输入股票代码");return}const I=Number(t.cost_price),K=Number(t.quantity);if(!(I>0)||!(K>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}E.value=!0;try{const h=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:d,stock_name:(t.stock_name||"").trim(),cost_price:I,quantity:K})})).json();h.success?(ElementPlus.ElMessage.success(h.message||"持仓已更新"),L.value=!1,x.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await H(),y(_.value)):ElementPlus.ElMessage.error(h.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{E.value=!1}}async function se(t){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+t+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const I=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(t),{method:"DELETE"})).json();I.success?(ElementPlus.ElMessage.success("已删除持仓"),await H(),S(),y(_.value)):ElementPlus.ElMessage.error(I.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function re(t,d){r.value={stock_code:t,stock_name:d||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},O.value=!0}async function F(){const t=r.value;if(!t.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const d=Number(t.price),I=Number(t.quantity);if(!(d>0)||!(I>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}T.value=!0;try{const c=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:t.stock_code,stock_name:t.stock_name||"",action:t.action,price:d,quantity:I,trade_date:t.trade_date||"",note:(t.note||"").trim()})})).json();c.success?(ElementPlus.ElMessage.success(c.message||"调仓已记录"),O.value=!1,await H(),await S(),y(_.value)):ElementPlus.ElMessage.error(c.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{T.value=!1}}async function S(){try{const d=await(await fetch("/api/portfolio/trades")).json();d.success&&(b.value=d.trades||[])}catch(t){console.warn("[portfolio] 加载调仓记录失败:",t)}}const N=t=>(getComputedStyle(document.documentElement).getPropertyValue(t)||"").trim();function k(){const t={primary:N("--primary-color")||"#2563eb",textPrimary:N("--text-primary")||"#1f2937",textSecondary:N("--text-secondary")||"#6b7280",border:N("--border-light")||"#e5e7eb",up:N("--color-rise")||"#E63946",down:N("--color-fall")||"#2E7D32"},d=q.value;return{tooltip:{trigger:"axis",backgroundColor:N("--bg-card")||"#ffffff",borderColor:t.border,textStyle:{color:t.textPrimary},formatter:function(I){const K=I[0]?I[0].dataIndex:-1,c=d.dates[K]||"",h=d.equity[K],s=d.values[K];let n=c||"";return h!=null&&(n+="<br/>组合净值: "+h),s!=null&&(n+="<br/>组合市值: "+s),n}},grid:{left:48,right:20,top:20,bottom:30},xAxis:{type:"category",data:d.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:t.textSecondary},axisLine:{lineStyle:{color:t.border}}},yAxis:{type:"value",scale:!0,axisLabel:{fontSize:10,color:t.textSecondary},splitLine:{lineStyle:{color:t.border,type:"dashed"}}},series:[{name:"组合净值",type:"line",data:d.equity,smooth:!0,showSymbol:!1,lineStyle:{color:t.primary,width:2},itemStyle:{color:t.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:N("--primary-rgb")?"rgba("+N("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:N("--primary-rgb")?"rgba("+N("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}}]}}function l(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function C(t,d,I){q.value={dates:t||[],equity:d||[],values:I||[]},g.value=!!t&&t.length>0,g.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",k,{key:"portfolio-equity"}):l()}async function y(t){D.value=!0,M.value="";const d=Number(t)||_.value||30;_.value=d;try{const K=await(await fetch("/api/portfolio/equity_curve?days="+d)).json();K.success?(M.value=K.note||"",C(K.dates||[],K.equity||[],K.values||[])):(M.value="数据暂不可用",l())}catch(I){console.warn("[portfolio] 加载收益曲线失败:",I),M.value="数据暂不可用",l()}finally{D.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function z(t,d){if(t==null||t===""||isNaN(Number(t)))return"--";const I=Number(t),K=d??2;return(I>=0?"+":"")+I.toFixed(K)}function W(t,d){if(t==null||t===""||isNaN(Number(t)))return"--";const I=Number(t),K=d??2;return(I>=0?"+":"")+I.toFixed(K)+"%"}function R(t){if(t==null||t===""||isNaN(Number(t)))return"";const d=Number(t);return d>0?"portfolio-up":d<0?"portfolio-down":""}return{positions:m,summary:w,trades:b,loading:P,loadError:A,showAddForm:L,addForm:x,addSaving:E,tradeFormVisible:O,tradeForm:r,tradeSaving:T,portfolioTab:f,equityDays:_,equityLoading:D,equityNote:M,equityHasData:g,portfolioCount:p,loadPortfolio:H,addPosition:Y,removePosition:se,openTradeForm:re,submitTrade:F,loadTrades:S,loadEquity:y,fmtSigned:z,fmtSignedPct:W,signClass:R}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(L,x){var E=Number(L);return isFinite(E)?E:typeof x=="number"?x:0}function e(L){var x=Array.isArray(L)?L:[];if(x.length<2)return null;for(var E=-1/0,O=0,r=0,T=0,f=0,_=0;_<x.length;_++){var D=a(x[_].equity!=null?x[_].equity:x[_].value);D>E&&(E=D,O=_);var M=E>0?(E-D)/E*100:0;M>r&&(r=M,T=O,f=_)}function g(q){return x[q]&&x[q].date?x[q].date:""}return{maxDrawdown:Math.round(r*100)/100,peakIndex:T,troughIndex:f,peakDate:g(T),troughDate:g(f)}}function u(L){for(var x=L||{},E={},O=Object.keys(x).sort(),r=0;r<O.length;r++){var T=O[r],f=String(T).slice(0,4);/^\d{4}$/.test(f)&&(E[f]=(E[f]||0)+a(x[T]))}var _=Object.keys(E).sort();return _.map(function(D){return{year:D,return:Math.round(E[D]*100)/100}})}function m(L){var x=Array.isArray(L)?L:[],E={};x.forEach(function(T){(T.points||[]).forEach(function(f){f&&f.date&&(E[f.date]=1)})});var O=Object.keys(E).sort(),r=x.map(function(T){var f={};return(T.points||[]).forEach(function(_){_&&_.date&&(f[_.date]=a(_.value!=null?_.value:_.equity))}),{name:T.name||"",data:O.map(function(_){return _ in f?f[_]:null})}});return{dates:O,series:r}}function w(L){var x=L||{},E=function(r){return a(r)},O=function(r,T){var f=E(r);return isFinite(f)?f.toFixed(T):"--"};return[{key:"total_return",label:"总收益",value:O(x.total_return,2),suffix:"%",dir:E(x.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:O(x.annual_return,2),suffix:"%",dir:E(x.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:O(x.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:O(x.sharpe_ratio,2),suffix:"",dir:E(x.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:O(x.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:O(x.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(E(x.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:O(x.volatility,2),suffix:"%",dir:""}]}function b(L){var x=L==null?"":String(L);return/[",\n]/.test(x)?'"'+x.replace(/"/g,'""')+'"':x}function P(L){var x=L||{},E=[];E.push("回测指标"),E.push("指标,数值"),(x.metrics||[]).forEach(function(g){E.push(b(g.label)+","+b((g.value||"")+(g.suffix||"")))}),E.push(""),E.push("净值曲线");var O=["日期"].concat((x.series||[]).map(function(g){return g.name}));E.push(O.map(b).join(","));for(var r=x.dates||[],T=x.series||[],f=0;f<r.length;f++){for(var _=[r[f]],D=0;D<T.length;D++){var M=T[D].data&&T[D].data[f];_.push(M??"")}E.push(_.map(b).join(","))}return E.push(""),E.push("交易明细"),E.push("日期,股票代码,方向,原因"),(x.trades||[]).forEach(function(g){E.push(b(g.date)+","+b(g.stock)+","+b(g.action)+","+b(g.reason))}),E.join(`
`)}function A(L){return L==="buy"?"买入":L==="sell"?"卖出":L||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:u,buildNavSeries:m,buildMetrics:w,buildBacktestCsv:P,tradeActionText:A}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:u}=Vue,m=window.QuantBacktest||{},w=a||{},b=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],A=(Array.isArray(w.backtestStrategies)&&w.backtestStrategies.length?w.backtestStrategies:b).map(R=>({id:R.id,name:R.name})),L=e(A.length?[A[0].id]:[]),x=e(D()),E=e(1e5),O=e(3e-4),r=e(!1),T=e(!1),f=e(null),_=e("");function D(){const R=new Date,t=new Date;t.setFullYear(t.getFullYear()-1);const d=I=>I.getFullYear()+"-"+String(I.getMonth()+1).padStart(2,"0")+"-"+String(I.getDate()).padStart(2,"0");return[d(t),d(R)]}function M(R){const t=L.value.indexOf(R);t>=0?L.value.length>1&&L.value.splice(t,1):L.value.push(R)}function g(R){const t=A.find(d=>d.id===R);return t?t.name:R}function q(R){const t=R.summary||R;return{strategy_id:t.strategy_id,start_date:t.start_date,end_date:t.end_date,total_days:t.total_days,total_return:t.total_return,annual_return:t.annual_return,max_drawdown:t.max_drawdown,volatility:t.volatility,sharpe_ratio:t.sharpe_ratio,sortino_ratio:t.sortino_ratio,win_rate:t.win_rate,profit_loss_ratio:t.profit_loss_ratio,avg_positions:t.avg_positions!=null?t.avg_positions:t.avg_positions_per_day,total_trades:t.total_trades,turnover_rate:t.turnover_rate,success:t.success!==!1,message:t.message||"",insample_total_return:t.insample_total_return!=null?t.insample_total_return:null,outsample_total_return:t.outsample_total_return!=null?t.outsample_total_return:null,out_sample_ratio:t.out_sample_ratio!=null?t.out_sample_ratio:.2,overfit_warning:!!t.overfit_warning,overfit_reason:t.overfit_reason||""}}function p(R){return(Array.isArray(R)?R:[]).map(t=>({date:t.date,value:t.equity!=null?t.equity:t.value}))}function H(R,t){const d=q(t),I=p(t.equity_curve),K=t.monthly_returns||{},c=Array.isArray(t.trade_history)?t.trade_history:[],h={id:R,name:g(R),summary:d,equityCurve:I,monthlyReturns:K,trades:c};let s=null;if(r.value){const n=Number(E.value)||1e5;s={name:"现金基准",points:I.map(o=>({date:o.date,value:n}))}}return{success:!0,mode:"single",strategies:[h],primary:h,benchmark:s,period:(d.start_date||"")+" ~ "+(d.end_date||"")}}function Y(R,t){const d=t.strategy_results||{},I=R.map(h=>{const s=d[h];if(!s)return null;const n=q(s);return{id:h,name:g(h),summary:n,equityCurve:p(s.equity_curve),monthlyReturns:s.monthly_returns||{},trades:Array.isArray(s.trade_history)?s.trade_history:[]}}).filter(h=>h&&h.summary.success!==!1),K=I.length?I[0]:null;let c=null;return r.value&&(c={name:"等权组合基准",points:p(t.portfolio_equity)}),{success:I.length>0,mode:"multi",strategies:I,primary:K,benchmark:c,period:K?K.summary.start_date+" ~ "+K.summary.end_date:""}}const se=u(()=>{const R=f.value;return!R||!R.primary?[]:m.buildMetrics?m.buildMetrics(R.primary.summary):[]}),re=u(()=>{const R=f.value;return!R||!R.primary||!R.primary.monthlyReturns?[]:m.buildAnnualReturns?m.buildAnnualReturns(R.primary.monthlyReturns):[]}),F=u(()=>{const R=f.value;return!R||!R.primary?[]:(R.primary.trades||[]).slice().sort((t,d)=>String(d.date||"").localeCompare(String(t.date||"")))}),S=u(()=>{const R=f.value;return!R||!R.strategies||R.strategies.length<2?[]:R.strategies.map(t=>({name:t.name,metrics:m.buildMetrics?m.buildMetrics(t.summary):[]}))}),N=u(()=>{const R=f.value;return!R||!R.primary?null:m.computeMaxDrawdownRegion?m.computeMaxDrawdownRegion(R.primary.equityCurve):null});async function k(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const t=L.value;if(!t.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const d=x.value,I={start_date:d&&d[0]||void 0,end_date:d&&d[1]||void 0},K={"Content-Type":"application/json"};T.value=!0,f.value=null,_.value="";try{if(t.length===1){const c=Object.assign({},I,{initial_capital:Number(E.value)||1e5,commission_rate:Number(O.value)||3e-4}),h=await fetch("/api/backtest/"+encodeURIComponent(t[0]),{method:"POST",headers:K,body:JSON.stringify(c)});if(!h.ok){const n=await h.json().catch(()=>({}));throw new Error(n.detail||"回测失败")}const s=await h.json();if(!s.success)throw new Error(s.message||"回测失败");f.value=H(t[0],s)}else{const c=await fetch("/api/backtest/multi",{method:"POST",headers:K,body:JSON.stringify(Object.assign({},I,{strategy_ids:t}))});if(!c.ok){const s=await c.json().catch(()=>({}));throw new Error(s.detail||"回测失败")}const h=await c.json();if(!h.success)throw new Error(h.message||"多策略回测失败");if(f.value=Y(t,h.data||{}),!f.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(c){_.value=c&&c.message?c.message:"回测失败",ElementPlus.ElMessage.error(_.value)}finally{T.value=!1}}function l(){const R=f.value,t={dates:[],series:[]};if(!R)return t;const d=R.strategies.map(K=>({name:K.name,points:K.equityCurve}));R.benchmark&&R.benchmark.points&&R.benchmark.points.length&&d.push({name:R.benchmark.name,points:R.benchmark.points});const I=m.buildNavSeries?m.buildNavSeries(d):t;return C(I,R)}function C(R,t){const d=J=>(getComputedStyle(document.documentElement).getPropertyValue(J)||"").trim(),I={primary:d("--primary-color")||"#2563eb",success:d("--color-success")||"#4CAF50",accent:d("--color-accent")||"#F59E0B",info:d("--color-info")||"#1976d2",ai:d("--color-ai")||"#6366f1",textPrimary:d("--text-primary")||"#1f2937",textSecondary:d("--text-secondary")||"#6b7280",border:d("--border-light")||"#e5e7eb",up:d("--color-rise")||"#E63946",down:d("--color-fall")||"#2E7D32",bg:d("--bg-card")||"#ffffff"},K=[I.primary,I.success,I.accent,I.info,I.ai],h=I.bg.length===7&&parseInt(I.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",s=m.computeMaxDrawdownRegion?m.computeMaxDrawdownRegion(t.primary?t.primary.equityCurve:[]):null,n=s&&s.peakDate&&s.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:I.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+s.maxDrawdown+"%",xAxis:s.peakDate,itemStyle:{color:I.down}},{xAxis:s.troughDate}]]}:void 0,o=R.series.map((J,le)=>{const ie=t.benchmark&&J.name===t.benchmark.name,$=K[le%K.length];return{name:J.name,type:"line",data:J.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:ie?2:2.4,type:ie?"dashed":"solid",color:$},itemStyle:{color:$},emphasis:{focus:"series"},...le===0&&n?{markArea:n}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:h,borderColor:I.border,textStyle:{color:I.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:I.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:R.dates,boundaryGap:!1,axisLine:{lineStyle:{color:I.border}},axisLabel:{color:I.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:I.textSecondary,fontSize:11},splitLine:{lineStyle:{color:I.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:I.border,textStyle:{color:I.textSecondary,fontSize:10}}],series:o}}function y(R){if(!R){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",l,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function z(){const R=f.value;if(!R||!R.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const t=R.strategies.map(o=>({name:o.name,points:o.equityCurve}));R.benchmark&&t.push({name:R.benchmark.name,points:R.benchmark.points});const d=m.buildNavSeries?m.buildNavSeries(t):{dates:[],series:[]},I=m.tradeActionText||(o=>o),K=F.value.map(o=>({date:o.date,stock:o.stock,action:I(o.action),reason:o.reason})),c=m.buildBacktestCsv?m.buildBacktestCsv({metrics:se.value,dates:d.dates,series:d.series,trades:K}):"",h=new Blob(["\uFEFF"+c],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(h),n=document.createElement("a");n.href=s,n.download="backtest-"+R.strategies.map(o=>o.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",n.click(),URL.revokeObjectURL(s),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function W(R,t){return R==null||R===""||isNaN(Number(R))?"--":Number(R).toFixed(t??2)}return{btStrategyOptions:A,btSelectedStrategies:L,toggleBtStrategy:M,btDateRange:x,btCapital:E,btCommissionRate:O,btIncludeBenchmark:r,btRunning:T,btResult:f,btError:_,btMetrics:se,btAnnualReturns:re,btTrades:F,btStrategyMetricsRows:S,btDrawdownRegion:N,runBacktestWorkbench:k,exportBacktestCSV:z,registerBacktestNavChart:y,btFmtNum:W}}}})();(function(){const{ref:a,computed:e,watch:u,onUnmounted:m}=Vue,w=x=>(getComputedStyle(document.documentElement).getPropertyValue(x)||"").trim(),b=72,P={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},A={stock:"📈 股票",bond:"📜 债券",commodity:"🛢️ 大宗商品",cash:"💰 现金"},L={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const x=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"🌱",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),E=a({}),O=a(!1),r=a({}),T=a({cycles:[]}),f=a(!1),_=a({autoRefresh:!0,refreshInterval:300}),D=a(""),M=a(""),g=a(!1),q=a("");let p=null;const H={x:0,y:0},Y=e(()=>{const B=E.value;return["recession","recovery","overheat","stagflation"].map(me=>{const oe=B[me]||{};return{key:me,name:oe.name||me,icon:oe.icon||"📊",color:oe.color||"#888",bg:oe.bg_color||w("--bg-card")||"#f5f5f5",textColor:oe.color||"#333",tagline:oe.allocation&&L[me]||""}})}),se=e(()=>{var j,me,oe,ve;const B=x.value.indicators||{};return[{key:"pmi",label:"PMI",value:(j=B.pmi)==null?void 0:j.toFixed(2),color:B.pmi>=50?"#43a047":"#E53935"},{key:"gdp",label:"GDP增速",value:((me=B.gdp_growth)==null?void 0:me.toFixed(2))+"%",color:"#43a047"},{key:"cpi",label:"CPI同比",value:((oe=B.cpi)==null?void 0:oe.toFixed(2))+"%",color:B.cpi>1.2?"#E53935":"#43a047"},{key:"m2",label:"M2增速",value:((ve=B.m2_growth)==null?void 0:ve.toFixed(2))+"%",color:"#43a047"}]}),re=B=>{B=B||{};const j=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],me={宽松:"#43a047",中位:"#FF9800",偏低:"#E53935",高增长:"#43a047",承压:"#E53935",不利:"#E53935"};return j.map(oe=>{const ve=B[oe.key]||{},ce=ve.score||0,Ce=Math.min(100,Math.max(5,(ce+2)*25)),pe=ce>=.3?"#66BB6A":ce>=-.3?"#FFB74D":"#EF5350",be=ce>=0?"#66BB6A":"#EF5350";return{key:oe.key,label:oe.label,scoreStr:ce.toFixed(2),level:ve.level||"—",barWidth:Ce,barColor:pe,scoreColor:be,color:me[ve.level]||"#888888"}})},F=e(()=>re(x.value.dimension_scores)),S=e(()=>re(r.value._dimensions)),N=e(()=>{var j;const B=((j=x.value.confidence)==null?void 0:j.level)||"";return B==="高"?"#43a047":B==="中"?"#FF9800":B==="低"?"#E53935":"var(--text-secondary)"}),k=e(()=>{var oe,ve,ce,Ce;const B=E.value,j={recovery:0,overheat:1,stagflation:2,recession:3},me={};for(const[pe,be]of Object.entries(B))me[pe]={name:be.name,icon:be.icon,color:be.color,lightColor:be.bg_color,duration:"~"+(((oe=be.historical_stats)==null?void 0:oe.avg_duration_months)||18)+"个月",order:j[pe]||0,period:((ce=(ve=be.case_studies)==null?void 0:ve[0])==null?void 0:ce.split("：")[0])||"",avgMonths:((Ce=be.historical_stats)==null?void 0:Ce.avg_duration_months)||18};return me}),l=e(()=>{var be,Q;const B=x.value.stage,me={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[B]||{x:150,y:150},oe=x.value.dimension_scores||{},ve=((be=oe.growth)==null?void 0:be.score)||0,ce=((Q=oe.inflation)==null?void 0:Q.score)||0,Ce=Math.max(-30,Math.min(30,ve*15)),pe=Math.max(-30,Math.min(30,-ce*15));return{x:me.x+Ce,y:me.y+pe,prevX:H.x,prevY:H.y}}),C=e(()=>{var oe;const B=Math.min(100,((oe=x.value.timing)==null?void 0:oe.progress_percent)||0),j=x.value.color||"#4CAF50",me=B>100?"linear-gradient(90deg, "+j+", #FF9800)":j;return{width:B+"%",background:me}});function y(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[x.value.stage]||0}function z(){var B,j;return((j=(B=x.value)==null?void 0:B.timing)==null?void 0:j.progress_percent)||0}function W(){var B,j;return((j=(B=x.value)==null?void 0:B.timing)==null?void 0:j.duration_months)||0}function R(){var B,j;return((j=(B=x.value)==null?void 0:B.timing)==null?void 0:j.avg_duration_months)||18}function t(B){var ve,ce;const j=k.value,me=((ve=j[x.value.stage])==null?void 0:ve.order)||0;return(((ce=j[B])==null?void 0:ce.order)||0)<me}function d(B){return P[B]||B}function I(B){return A[B]||B}function K(B){const j=["#43a047","#f57c00","#1976d2","#757575"];return j[B-1]||j[3]}async function c(){try{const j=await(await fetch("/api/market/merrill-clock/stages")).json();j.success&&j.data&&(E.value=j.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function h(){f.value=!0;try{const j=await(await fetch("/api/market/merrill-clock/timeline")).json();if(j.success&&j.data){const me=Array.isArray(j.data.cycles)?j.data.cycles.slice().reverse():[];T.value={cycles:me}}}catch{console.warn("获取美林时钟时间轴失败")}finally{f.value=!1}}async function s(B){await o(B)}async function n(){var B,j;try{const oe=await(await fetch("/api/market/merrill-clock")).json(),ve=oe.stage||"recovery",ce=E.value[ve]||{};if(x.value={...ce,...oe,stage_cn:oe.stage_cn||ce.stage_cn||"",stage_name:oe.stage_name||ce.name||"",name:oe.name||ce.name||"复苏期"},D.value=new Date().toLocaleTimeString("zh-CN"),q.value&&q.value!==ve){const Ce=E.value,pe=((B=Ce[q.value])==null?void 0:B.name)||q.value,be=((j=Ce[ve])==null?void 0:j.name)||ve;ElementPlus.ElMessage({message:"🔔 美林时钟阶段切换："+pe+" → "+be,type:"warning",duration:6e3,showClose:!0})}q.value=ve}catch(me){console.error("获取美林时钟失败:",me);const oe=E.value.recovery||{};x.value={...oe,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function o(B){var me;O.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",r.value=E.value[B]||E.value.recovery||{};const j=((me=x.value)==null?void 0:me.stage)===B;r.value._isCurrent=j,j&&x.value&&(r.value._nextPrediction=x.value.next_stage_prediction,r.value._confidence=x.value.confidence,r.value._stage=x.value.stage,r.value._dimensions=x.value.dimension_scores);try{const ve=await(await fetch("/api/market/merrill-clock/stage/"+B)).json();if(ve.success&&ve.data){const ce={...E.value[B],...ve.data};ce._is_current!==void 0&&(ce._isCurrent=ce._is_current),ce._current_timing&&(ce._currentTiming=ce._current_timing),ce._last_period&&(ce._lastPeriod=ce._last_period),r.value._nextPrediction&&(ce._nextPrediction=r.value._nextPrediction),r.value._confidence&&(ce._confidence=r.value._confidence),r.value._stage&&(ce._stage=r.value._stage),r.value._dimensions&&(ce._dimensions=r.value._dimensions),Object.assign(r.value,ce)}}catch(oe){console.warn("获取阶段详情失败:",oe)}}function J(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:_.value.autoRefresh,refreshInterval:_.value.refreshInterval})),_.value.autoRefresh?(clearInterval(p),p=setInterval(n,_.value.refreshInterval*1e3)):clearInterval(p),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function le(){g.value=!0,M.value="";try{const j=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();j.success?(M.value="重评估完成："+(j.stage_name||j.stage),await n(),ElementPlus.ElMessage.success("重评估完成")):(M.value=j.message||"重评估失败",ElementPlus.ElMessage.error(j.message||"重评估失败"))}catch{M.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{g.value=!1}}function ie(){const B=localStorage.getItem("merrill_clock_config");if(B)try{const j=JSON.parse(B);_.value={..._.value,...j}}catch{}_.value.autoRefresh&&(p=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),n()},_.value.refreshInterval*1e3))}function $(){p&&clearInterval(p)}return m(()=>{$()}),{merrillData:x,merrillStagesConfig:E,showMerrillDetail:O,merrillDetailData:r,merrillTimeline:T,timelineLoading:f,merrillClockConfig:_,merrillClockLastUpdated:D,merrillReevalResult:M,merrillReevalLoading:g,stages:Y,indicatorList:se,dimensionScoreList:F,detailDimensionScoreList:S,confidenceColor:N,timelineStages:k,clockPosition:l,merrillProgressStyle:C,FULL_CYCLE_MONTHS:b,getStageAngle:y,getCycleProgress:z,getCurrentStageMonths:W,getStageTotalMonths:R,isStageCompleted:t,getCharLabel:d,getAssetName:I,getRankColor:K,fetchMerrillStages:c,fetchMerrillClock:n,loadMerrillTimeline:h,showTimelineStage:s,showStageDetail:o,saveMerrillClockConfig:J,doMerrillReevaluate:le,startAutoRefresh:ie,stopAutoRefresh:$}}})();(function(){function a(b){return getComputedStyle(document.documentElement).getPropertyValue(b).trim()}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:"transparent",color:[a("--primary-color")||"#667eea",a("--color-up")||"#43e97b",a("--color-down")||"#fa709a",a("--color-accent")||"#f6d365",a("--text-secondary")||"#6b7280",a("--text-tertiary")||"#9ca3af"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--border-light")||"#e5e7eb"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--border-light")||"#f3f4f6"}}},valueAxis:{axisLine:{lineStyle:{color:a("--border-light")||"#e5e7eb"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--border-light")||"#f3f4f6"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const u=[];function m(b){typeof b=="function"&&u.push(b)}function w(){u.slice().forEach(function(b){try{b()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,registerChart:m,refreshAllCharts:w,init(){return{getEChartsTheme:e,registerChart:m,refreshAllCharts:w}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
      <div class="sidebar" :class="{ collapsed: sidebarCollapsed }">
        <div class="sidebar-logo">
          <svg class="sidebar-logo-img" viewBox="0 0 100 100" width="26" height="26" aria-label="量化选股日历 logo" role="img">
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
    `,setup(){const u=e("qcState");try{const b=localStorage.getItem("quant_sidebar_collapsed");b!==null&&u.sidebarCollapsed&&(u.sidebarCollapsed.value=b==="1")}catch{}if(!u)return{};const m=b=>{u.currentPage.value=b.key,u.currentSubPage.value=b.subPages[0]||""},w=()=>{u.sidebarCollapsed.value=!u.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",u.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:u.menus,currentPage:u.currentPage,sidebarCollapsed:u.sidebarCollapsed,navigate:m,toggle:w,sanitizeHtml:u.sanitizeHtml,keyClick:u.keyClick,t:u.t}}}})();(function(){const{ref:a,computed:e,inject:u}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
                  {{ t('sub.' + sp) || subPageNames[sp] || sp }}
                </div>
              </template>
            </template>
          </div>

          <div class="global-search-wrapper">
            <el-autocomplete class="w-200" v-model="searchQuery" :fetch-suggestions="searchStocks" :placeholder="t('common.searchPlaceholder')" :trigger-on-focus="false" clearable size="small" @select="onSearchSelect">
              <template #default="slotProps">
                <span>{{ slotProps?.item?.icon }} {{ slotProps?.item?.label || slotProps?.item?.name }}</span>
                <span class="text-sm-secondary-ml8" v-if="slotProps?.item?.subLabel">{{ slotProps?.item?.subLabel }}</span>
              </template>
            </el-autocomplete>
          </div>

          <div class="header-date-area" v-if="currentPage === 'calendar'">
            <el-date-picker v-if="currentSubPage === 'daily'"
                v-model="selectedDate" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectDate')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentSubPage === 'weekly'"
                v-model="selectedDate" type="week" format="YYYY 第w周" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectWeek')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentSubPage === 'monthly'"
                v-model="selectedDate" type="month" format="YYYY-MM" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectMonth')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentSubPage === 'yearly'"
                v-model="selectedDate" type="year" format="YYYY" value-format="YYYY-MM-DD"
                :placeholder="t('calendar.selectYear')" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-button class="ml-8px" size="small" @click="refreshCalendarData" :loading="loading" :title="t('calendar.refreshData')">🔄 {{ t('common.refresh') }}</el-button>
            <el-button class="ml-4px" size="small" @click="exportCSV" :title="t('calendar.exportCsv')">📥 {{ t('common.export') }}</el-button>
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
              <div class="user-menu-item" v-if="currentUser?.role === 'admin'" tabindex="0" role="menuitem" @click="showUserMenu = false; resetSetupWizard()" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">⚙️ 重新运行初始化向导</div>
              <div class="user-menu-item" v-if="currentUser?.role !== 'guest'" tabindex="0" role="menuitem" @click="showUserMenu = false; showChangePassword = true" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">🔑 修改密码</div>
              <div class="user-menu-divider"></div>
              <div class="user-menu-section-title">🎨 切换主题</div>
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
              <div class="user-menu-item danger" tabindex="0" role="menuitem" @click="handleLogout" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">🚪 退出登录</div>
            </div>
          </div>
        </div>

      </div>
    `,setup(){const m=u("qcState");if(!m)return{};const w=a(!1);return{menus:m.menus,currentPage:m.currentPage,currentSubPage:m.currentSubPage,currentUser:m.currentUser,currentPageName:m.currentPageName,searchQuery:m.searchQuery,searchStocks:m.searchStocks,onSearchSelect:m.onSearchSelect,selectedDate:m.selectedDate,onDateChange:m.onDateChange,disabledDate:m.disabledDate,refreshCalendarData:m.refreshCalendarData,exportCSV:m.exportCSV,loading:m.loading,lastLoadTime:m.lastLoadTime,showUserMenu:w,resetSetupWizard:m.resetSetupWizard,showChangePassword:m.showChangePassword,themes:m.themes,currentTheme:m.currentTheme,changeTheme:m.changeTheme,handleLogout:m.handleLogout,subPageNames:m.subPageNames,keyClick:m.keyClick,t:m.t}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
                <div v-if="currentPage === 'system'" key="system" class="system-page-root">
                    <div v-if="currentSubPage === 'status'" class="card system-status-card">
                        <div class="card-title flex-between">
                            <span>{{ t('system.title') }}</span>
                            <div class="flex-c-gap-8">
                                <span class="text-sm-secondary" v-if="dashboardData.latest_date">📅 {{ dashboardData.latest_date }}</span>
                            </div>
                        </div>
                        <div class="status-grid">
                            <div class="status-item">
                                <div class="status-icon">📈</div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.stockData') }}</div>
                                    <div class="status-value color-primary">{{ stockCount || '---' }} {{ t('common.unitStock') }}</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon">🎯</div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.strategyData') }}</div>
                                    <div class="status-value color-primary">{{ dashboardData.stats?.strategy_count || '---' }} 个</div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'autoeval'" title="点击配置 AI 自动评估">
                                <div class="status-icon">🤖</div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.aiService') }}</div>
                                    <div class="status-value" :style="{color: aiStatus === 'ok' ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ aiStatus === 'ok' ? t('system.ok') : t('system.needsConfig') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'feature'" title="点击配置飞书推送">
                                <div class="status-icon">📢</div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.feishuPush') }}</div>
                                    <div class="status-value" :style="{color: feishuConfig.webhook_url ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ feishuConfig.webhook_url ? t('system.configured') : t('system.notConfigured') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'datasource'" title="点击配置数据源">
                                <div class="status-icon">📊</div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.tushare') }}</div>
                                    <div class="status-value" :style="{color: tushareStatus === 'connected' ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ tushareStatus === 'connected' ? t('system.connected') : t('system.notConnected') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon">📆</div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.tradeCalendar') }}</div>
                                    <div class="status-value color-primary">{{ tradeDateCount || '---' }} {{ t('system.unitDays') }}</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon">💎</div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.poolStocks') }}</div>
                                    <div class="status-value color-primary">{{ currentPoolSize }} {{ t('common.unitStock') }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- v3.16 (FR-3.16.1): 配置管理 — 通用操作栏 (靠上放置, v3.17 UI优化) -->
                        <div class="card mt-24">
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
                        <div class="card-title">🚦 访问限速配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="API 限流 (次/分钟/IP)">
                                <el-input-number v-model="rateLimitConfig.api_limit" :min="10" :max="10000" :step="50" @change="saveRateLimit" />
                                <div class="text-sm-tertiary-mt8">当前设置: 每分钟 {{ rateLimitConfig.api_limit }} 次请求</div>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="card">
                        <div class="card-title">🎨 主题选择</div>
                        <div class="theme-list">
                            <div v-for="(theme, key) in themes" :key="key" class="theme-item" :class="{active: currentTheme === key}" @click="changeTheme(key)">
                                <div class="theme-color" :style="{background: theme.gradient}"></div>
                                <div class="text-base-medium">{{ theme.name }}
                                    <span class="text-xs-primary-ml4" v-if="currentUser?.theme === key">默认</span>
                                </div>
                                <span v-if="currentTheme === key" class="theme-current-badge">当前</span>
                            </div>
                        </div>
                    </div>

                    <!-- v3.17.14 (FR-3.17.14): 语言切换（立即生效 + 偏好持久化） -->
                    <div class="card">
                        <div class="card-title">{{ t('system.language') }}</div>
                        <div class="flex-c-gap-12-wrap">
                            <el-select class="w-180" :model-value="locale" size="small" @change="changeLanguage">
                                <el-option value="zh-CN" :label="t('lang.zh-CN')" />
                                <el-option value="en" :label="t('lang.en')" />
                            </el-select>
                            <span class="text-sm-tertiary-ml4">{{ t('system.languageDesc') }}</span>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-title">🎯 图标系统</div>
                        <div class="theme-list">
                            <div class="theme-item" :class="{active: iconSystem === 'emoji'}" @click="switchIconSystem('emoji')">
                                <div class="theme-color bg-gradient-brand"></div>
                                <div class="text-base-medium">原生<span class="text-xs-primary-ml4" v-if="iconSystem === 'emoji'">当前</span></div>
                            </div>
                            <div class="theme-item" :class="{active: iconSystem === 'ink'}" @click="switchIconSystem('ink')">
                                <div class="theme-color bg-gradient-ink"></div>
                                <div class="text-base-medium">墨韵<span class="text-xs-primary-ml4" v-if="iconSystem === 'ink'">当前</span></div>
                            </div>
                            <div class="theme-item" :class="{active: iconSystem === 'edge'}" @click="switchIconSystem('edge')">
                                <div class="theme-color theme-color-ai"></div>
                                <div class="text-base-medium">锋线<span class="text-xs-primary-ml4" v-if="iconSystem === 'edge'">当前</span></div>
                            </div>
                            <div class="theme-item" :class="{active: iconSystem === 'crystal'}" @click="switchIconSystem('crystal')">
                                <div class="theme-color theme-color-ai"></div>
                                <div class="text-base-medium">叠彩<span class="text-xs-primary-ml4" v-if="iconSystem === 'crystal'">当前</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                    <!-- autoeval: 自动评估配置 (v1.8.0) -->
                    <div v-else-if="currentSubPage === 'autoeval'">
                        <div class="card">
                            <div class="card-title">🤖 自动评估配置</div>
                            <el-form label-width="100px">
                                <el-form-item label="启用">
                                    <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" @change="saveAutoEvaluateConfig" />
                                </el-form-item>
                                <template v-if="autoEvaluateConfig.enabled">
                                    <el-form-item label="调度频率">
                                        <el-select class="w-160" v-model="autoEvaluateConfig.schedule_type" @change="saveAutoEvaluateConfig">
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
                        <div class="card-title">📢 飞书推送配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="Webhook">
                                <el-input class="max-w-460" v-model="feishuConfig.webhook_url" placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..."/>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="small" @click="saveFeishuConfig">💾 保存配置</el-button>
                                <el-button size="small" @click="testFeishuWebhook" :loading="feishuTestStatus === 'testing'">🧪 测试发送</el-button>
                                <span class="ml-10-sm" v-if="feishuTestMessage" :style="{color: feishuTestMessage.includes('成功') || feishuTestMessage.includes('已发送') ? 'var(--el-success)' : 'var(--el-danger)'}">{{ feishuTestMessage }}</span>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- AI 模型管理 (v3.14 厂商化: 以厂商为主配置卡, 卡内配 API 后管理多个模型名) -->
                    <div class="card mt-4">
                        <div class="card-title">🤖 AI 模型管理</div>
                        <p class="text-sm-secondary-m0-16">以厂商为主配置卡，卡内配置 API（地址+密钥+超时）后选择多个模型名；按数组顺序（厂商 → 模型）串行调用，首个可用模型返回结果。</p>
                        <div class="flex-gap-8-mb16-wrap">
                            <el-button size="small" type="primary" @click="loadAiVendors">🔄 刷新</el-button>
                            <el-button size="small" type="primary" @click="testAllVendorModels" :loading="testingAllModels">🧪 探测全部</el-button>
                            <!-- v3.16 (FR-3.16.1): AI 连接测试入口 (testAiApi) -->
                            <el-button size="small" type="primary" @click="testAiApi" :loading="aiLoading">🔌 连接测试</el-button>
                            <el-button size="small" type="primary" @click="saveAiVendors" :loading="savingAiModels">💾 保存</el-button>
                            <el-dropdown class="ml-auto" trigger="click" @command="(cmd) => cmd === '__custom__' ? addCustomVendor() : addVendorFromCatalog(cmd)">
                                <el-button size="small" type="primary">➕ 新增厂商</el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item v-if="!aiCatalog.vendors || aiCatalog.vendors.length===0" disabled>加载目录中…</el-dropdown-item>
                                        <el-dropdown-item v-for="(c,i) in aiCatalog.vendors" :key="c.vendor_key" :command="c.vendor_key" :divided="i>0 && c.kind !== aiCatalog.vendors[i-1].kind">{{ c.name }} <el-tag class="ml-6" size="small">{{ c.kind }}</el-tag></el-dropdown-item>
                                        <el-dropdown-item command="__custom__" divided>自定义厂商</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <div class="text-center-danger-pad16" v-if="aiModelsError">⚠️ {{ aiModelsError }} <el-button size="small" @click="loadAiVendors">重试</el-button></div>
                        <div class="text-center-tertiary-pad20" v-if="!aiModelsError && aiVendors.length===0">加载中...</div>
                        <div v-if="!aiModelsError && aiVendors.length>0">
                        <div v-for="(v,vi) in aiVendors" :key="v.vendor_key" class="card mb-12">
                            <div class="card-title flex-between-wrap-gap6">
                                <span class="flex-c-gap-6-wrap">
                                    {{ v.name }}
                                    <el-tag size="small" :type="v.kind==='CodingPlan' ? 'warning' : v.kind==='国外' ? 'info' : v.kind==='国内' ? 'success' : 'primary'">{{ v.kind }}</el-tag>
                                    <el-tag v-if="v.tier" size="small" type="warning">套餐: {{ v.tier }}</el-tag>
                                    <span class="text-sm-tertiary" v-if="v.locked">🔒</span>
                                    <a class="text-sm-link" v-if="v.website" :href="v.website" target="_blank" rel="noopener">官网 ↗</a>
                                </span>
                                <el-button v-if="!v.locked" size="small" type="danger" @click="removeVendor(v)">🗑️ 删除厂商</el-button>
                            </div>
                            <el-form class="mt-2" label-width="90px" size="small">
                                <el-form-item label="厂商名"><el-input v-model="v.name" :disabled="v.locked" placeholder="厂商显示名"/></el-form-item>
                                <el-form-item label="类型">
                                    <el-select class="w-160" v-model="v.kind" :disabled="v.locked" size="small">
                                        <el-option label="国内" value="国内"/><el-option label="国外" value="国外"/>
                                        <el-option label="CodingPlan" value="CodingPlan"/><el-option label="自定义" value="自定义"/>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="套餐档位"><el-input class="w-220" v-model="v.tier" :disabled="v.locked" placeholder="CodingPlan: Lite/Pro"/></el-form-item>
                                <el-form-item label="Base URL"><el-input v-model="v.base_url" placeholder="https://.../v1"/></el-form-item>
                                <el-form-item label="API Key">
                                    <el-input :model-value="v._revealed ? v.api_key : v._masked" @update:model-value="val => { v.api_key = val; if (!v._revealed) v._masked = val; }" placeholder="厂商级密钥，卡内模型共用">
                                        <template #suffix>
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
                                            <span class="text-sm-ellipsis" v-if="m.testResult!==undefined" :style="{color:m.testResult.success?'var(--el-success)':'var(--el-danger)'}">{{ m.testResult.success?'✓':'✗' }} {{ m.testResult.message }}</span>
                                            <el-button size="small" type="primary" :loading="m._testing" @click="testVendorModel(v,m)">🧪 测试</el-button>
                                            <el-button v-if="!m.locked" size="small" type="danger" @click="removeVendorModel(v,mi)">🗑️</el-button>
                                        </div>
                                        <div class="flex-gap-8-mt8">
                                            <el-button size="small" @click="addVendorModel(v)">➕ 添加模型</el-button>
                                            <el-button size="small" :loading="v._fetching" @click="fetchVendorModels(v)">📡 获取模型列表</el-button>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- datasource: 多数据源配置 -->
                    <div v-else-if="currentSubPage === 'datasource'">
                    <!-- 优先级说明条 -->
                    <div class="info-banner">
                        <span>🔢 数据源优先级:</span>
                        <span class="text-medium">① sxsc-tushare → ② tushare → ③ akshare</span>
                        <span class="color-tertiary-ml-auto">按优先级依次尝试</span>
                    </div>

                    <!-- v3.16 (FR-3.16.1): 数据同步入口 (syncStockData) -->
                    <div class="card mb-14">
                        <div class="card-title">🔄 数据同步</div>
                        <div class="flex-c-gap-12-wrap">
                            <el-button type="primary" :loading="syncingData" @click="syncStockData">📥 同步股票数据</el-button>
                            <span class="text-sm-secondary">从 Tushare 拉取最新行情并更新本地缓存</span>
                        </div>
                    </div>

                    <!-- sxsc-tushare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span>🔗 sxsc-tushare（券商版）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.sxsc_tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.sxsc_tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.sxsc_tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else>⏳ 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
                            <el-form-item label="API Token">
                                <el-input :model-value="datasourceConfig.sxsc_tushare._revealed ? datasourceConfig.sxsc_tushare.token : datasourceConfig.sxsc_tushare._masked" @update:model-value="val => { datasourceConfig.sxsc_tushare.token = val; if (!datasourceConfig.sxsc_tushare._revealed) datasourceConfig.sxsc_tushare._masked = val; }" placeholder="输入 sxsc-tushare Token" @change="saveDatasourceConfig">
                                    <template #suffix>
                                        <span class="key-reveal-toggle" style="cursor:pointer;user-select:none;display:inline-flex;align-items:center" :title="datasourceConfig.sxsc_tushare._revealed ? '收起（重新掩码）' : '查看完整 Token（需密码）'" @click="toggleDatasourceKeyReveal('sxsc_tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.sxsc_tushare._revealed))"></span>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="超时 (秒)">
                                <el-input-number v-model="datasourceConfig.sxsc_tushare.timeout" :min="5" :max="120" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="testDatasource('sxsc_tushare')" :loading="datasourceStatus.sxsc_tushare === 'testing'" type="primary" size="small">🧪 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- tushare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span>📡 tushare（标准版 Pro）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else>⏳ 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
                            <el-form-item label="API Token">
                                <el-input :model-value="datasourceConfig.tushare._revealed ? datasourceConfig.tushare.token : datasourceConfig.tushare._masked" @update:model-value="val => { datasourceConfig.tushare.token = val; if (!datasourceConfig.tushare._revealed) datasourceConfig.tushare._masked = val; }" placeholder="输入 Tushare Token" @change="saveDatasourceConfig">
                                    <template #suffix>
                                        <span class="key-reveal-toggle" style="cursor:pointer;user-select:none;display:inline-flex;align-items:center" :title="datasourceConfig.tushare._revealed ? '收起（重新掩码）' : '查看完整 Token（需密码）'" @click="toggleDatasourceKeyReveal('tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.tushare._revealed))"></span>
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
                                <el-button @click="testDatasource('tushare')" :loading="datasourceStatus.tushare === 'testing'" type="primary" size="small">🧪 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- akshare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span>🌐 akshare（开源免费）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.akshare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.akshare === 'connected'">可用</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.akshare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else>⏳ 未检测</span>
                            </div>
                        </div>
                        <div class="text-base-secondary-pad">
                            开源免费数据接口，从东方财富等公开网站获取数据，无需 Token
                        </div>
                        <el-form label-width="80px">
                            <el-form-item>
                                <el-button @click="testDatasource('akshare')" :loading="datasourceStatus.akshare === 'testing'" type="primary" size="small">🧪 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

                    <!-- feature 子页: 功能开关与配置 -->
                    <div v-else-if="currentSubPage === 'feature'">
                        <div class="card">
                        <div class="card-title">🎛️ 策略筛选</div>
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
                            <div class="mb-6-medium">🔍 预览匹配股票数</div>
                            <div class="flex-wrap-gap-12">
                                <span>☀️ 日视图: <strong>{{ strategyPreviewCount.day ?? '-' }}</strong></span>
                                <span>📅 周视图: <strong>{{ strategyPreviewCount.week ?? '-' }}</strong></span>
                                <span>🗓️ 月视图: <strong>{{ strategyPreviewCount.month ?? '-' }}</strong></span>
                                <span>📆 年视图: <strong>{{ strategyPreviewCount.year ?? '-' }}</strong></span>
                            </div>
                        </div>
                    </div>

                    <!-- v3.3.0-T8: 数据备份与恢复 -->
                    <div class="card mt-14">
                        <div class="card-title">💾 数据备份与恢复</div>
                        <div class="flex-wrap-gap-10-mb12">
                            <el-button size="small" type="primary" :loading="backupCreating" @click="createBackup">立即备份</el-button>
                            <el-button size="small" @click="loadBackups">刷新列表</el-button>
                        </div>
                        <div class="max-h-220-scroll" v-if="backups.length">
                            <div class="backup-row" v-for="b in backups" :key="b.name">
                                <span>🕐 {{ b.time }} <span class="text-xs-tertiary">({{ (b.size / 1024).toFixed(0) }} KB)</span></span>
                                <el-button size="small" type="danger" plain :disabled="currentUser?.role !== 'admin'" @click="restoreBackup(b.name)">恢复</el-button>
                            </div>
                        </div>
                        <div class="text-sm-tertiary" v-else>暂无备份</div>
                    </div>
                    <!-- v2.0: 美林时钟配置 -->
                    <div class="card mt-4">
                        <div class="card-title">⏱️ 美林时钟</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">
                                上次更新: <strong>{{ merrillClockLastUpdated || '—' }}</strong>
                            </span>
                            <el-button size="small" type="primary" @click="doMerrillReevaluate" :loading="merrillReevalLoading">
                                🔄 手动重评估
                            </el-button>
                        </div>
                        <div class="result-box" v-if="merrillReevalResult" :style="{color: merrillReevalResult.includes('失败') ? 'var(--el-danger)' : 'var(--el-success)'}">
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
                        <div class="card-title">🔄 策略数据刷新</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">
                                上次刷新: <strong>{{ dataRefreshConfig.last_refresh || '—' }}</strong>
                                <span class="ml-6-sm" v-if="dataRefreshConfig.last_refresh_status" :style="{color: dataRefreshConfig.last_refresh_status.startsWith('failed') ? 'var(--el-danger)' : 'var(--el-success)'}">
                                    {{ dataRefreshConfig.last_refresh_status.startsWith('failed') ? '失败' : '' }}
                                </span>
                            </span>
                            <el-button size="small" type="primary" @click="triggerDataReload" :loading="dataRefreshReloading">
                                🔄 手动加载
                            </el-button>
                            <el-button size="small" type="primary" @click="triggerDataPull" :loading="dataPullRunning">
                                📥 手动拉取
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
                                        <el-select class="w-110" v-model="dataRefreshConfig.pull_frequency" @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="每日" value="daily" />
                                            <el-option label="每周" value="weekly" />
                                        </el-select>
                                    </div>
                                    <div class="flex-c-gap-6" v-if="dataRefreshConfig.pull_frequency === 'weekly'">
                                        <label class="text-base-primary-nowrap">周几</label>
                                        <el-select class="w-90" v-model="dataRefreshConfig.pull_weekday" @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="周一" value="0" />
                                            <el-option label="周二" value="1" />
                                            <el-option label="周三" value="2" />
                                            <el-option label="周四" value="3" />
                                            <el-option label="周五" value="4" />
                                        </el-select>
                                    </div>
                                </div>
                                <div class="flex-c-gap-8-mt10-wrap">
                                    <label class="text-base-primary-nowrap">股票池</label>
                                    <el-select class="flex-1-min200" v-model="dataRefreshConfig.stock_pool" multiple filterable allow-create default-first-option collapse-tags @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled" placeholder="输入股票代码后回车, 留空=全部覆盖股票">
                                        <el-option v-for="c in dataRefreshConfig.stock_pool" :key="c" :label="c" :value="c" />
                                    </el-select>
                                </div>
                                <div class="text-sm-tertiary-mt6">
                                    拉取成功后自动刷新解析器/视图 (数据自动入库)
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- v1.9.2: 策略研究菜单开关 -->
                    <div class="card mt-4">
                        <div class="card-title">🔬 策略研究菜单</div>
                        <div class="flex-between">
                            <span class="text-base-secondary">
                                {{ researchMenuEnabled ? '已显示策略研究菜单' : '已隐藏策略研究菜单' }}
                            </span>
                            <el-switch v-model="researchMenuEnabled" @change="toggleResearchMenu" size="small" />
                        </div>
                    </div>
                </div>
                    <div v-else-if="currentSubPage === 'user'">
                        <div v-if="currentUser?.role !== 'admin'" class="card text-center-pad40">
                            <div class="text-3xl-mb12">🔐</div>
                            <div class="color-secondary">仅管理员可访问此页面</div>
                        </div>
                        <div v-else>
                        <div class="card">
                            <div class="card-title">👥 用户与权限</div>
                            <p class="color-secondary">用户列表: {{ userList.length }} 个用户 | 分组: {{ Object.keys(allGroups).length }} 个</p>
                        </div>

                    <!-- Tab 切换 -->
                    <div class="flex-gap-8-mb16">
                        <el-button :type="userPageTab === 'users' ? 'primary' : ''" size="small" @click="userPageTab = 'users'">👥 用户列表</el-button>
                        <el-button :type="userPageTab === 'groups' ? 'primary' : ''" size="small" @click="userPageTab = 'groups'">📋 分组配置</el-button>
                    </div>

                    <!-- 用户列表 Tab -->
                    <div v-if="userPageTab === 'users'">
                    <div class="card">
                        <div class="card-title">👥 用户列表 ({{ userList.length }}人)</div>
                        <div class="flex-gap-12-mb12">
                            <el-input class="w-160" v-model="userSearch" placeholder="搜索用户名..." clearable size="small"/>
                            <el-select class="w-120" v-model="groupFilter" placeholder="分组" clearable size="small">
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
                                                🕐 创建于: {{ new Date(user.created_at).toLocaleDateString('zh-CN') }}
                                            </span>
                                            <span v-if="user.last_login_at">
                                                🕐 上次登录: {{ new Date(user.last_login_at).toLocaleString('zh-CN') }}
                                            </span>
                                            <span class="ml-12" v-if="user.login_count !== undefined">
                                                🔐 登录: {{ user.login_count }}次
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
                                    <span class="text-10-tertiary" v-if="g.locked">🔒</span>
                                </div>
                                <div class="text-sm-secondary-mb6">{{ g.description }}</div>
                                <div class="text-sm-tertiary">
                                    成员 {{ getGroupMemberCount(gid) }}人 · 菜单 {{ getMenuEnabledCount(g) }}/{{ Object.keys(g.visible_menus || {}).length }}
                                </div>
                            </div>
                            <div class="flex-gap-6-shrink0">
                                <el-button v-if="!g.locked" size="small" @click="toggleGroupExpand(gid)">{{ expandedGroups[gid] ? '收起' : '👥 成员' }}</el-button>
                                <el-button size="small" type="primary" @click="openMenuConfig(gid)">⚙️ 菜单</el-button>
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
                        <div class="card-title">🔑 开放 API</div>
                        <p class="color-secondary">为外部程序签发只读 API Key（库中仅存哈希，明文只展示一次；行情数据不可达时开放接口返回 degraded 占位）。</p>
                        <div class="flex-gap-8-mb12">
                            <el-input class="w-160" v-model="openApiKeyName" placeholder="Key 名称（可选）" size="small" />
                            <el-select class="w-120" v-model="openApiKeyRole" size="small">
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
                        <!-- v3.22-I2: 用量统计卡片化 — 4卡片网格 -->
                        <div class="usage-card-grid">
                        <!-- 卡1: 资源监控 -->
                        <div class="usage-card">
                            <div class="usage-card-title">🖥️ 资源监控<span class="usage-card-title-sub">服务器实时资源</span></div>
                            <div class="usage-ai-panel">
                                <div class="usage-ai-panel-title">实时指标
                                    <span class="usage-ai-panel-meta">CPU/内存/磁盘</span>
                                </div>
                                <div class="usage-ai-summary">
                                    <div class="usage-ai-stat usage-ai-stat-meter">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">⚙️</span><span class="usage-ai-stat-label">CPU</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.cpu_percent ?? '--' }}%</div>
                                        <div class="meter-bar"><div class="meter-fill" :style="{width: Math.min(sysMonitor.cpu_percent ?? 0, 100) + '%'}"></div></div>
                                    </div>
                                    <div class="usage-ai-stat usage-ai-stat-meter">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">🧠</span><span class="usage-ai-stat-label">内存</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.mem_percent ?? '--' }}%</div>
                                        <div class="meter-bar"><div class="meter-fill" :style="{width: Math.min(sysMonitor.mem_percent ?? 0, 100) + '%'}"></div></div>
                                    </div>
                                    <div class="usage-ai-stat usage-ai-stat-meter">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">💾</span><span class="usage-ai-stat-label">磁盘</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.percent ?? '--' }}%</div>
                                        <div class="meter-bar"><div class="meter-fill" :style="{width: Math.min(sysMonitor.percent ?? 0, 100) + '%'}"></div></div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">⏱️</span><span class="usage-ai-stat-label">运行时长</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.uptime ? sysMonitor.uptime.toFixed(2) + 'h' : '--' }}</div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">📡</span><span class="usage-ai-stat-label">平均延迟</span></div>
                                        <div class="usage-ai-stat-num">{{ sysMonitor.metrics?.avg_ms ?? '--' }}<small>ms</small></div>
                                    </div>
                                    <div class="usage-ai-stat">
                                        <div class="usage-ai-stat-head"><span class="usage-ai-card-icon">⚠️</span><span class="usage-ai-stat-label">错误率</span></div>
                                        <div class="usage-ai-stat-num" :style="{color: (sysMonitor.metrics?.error_rate ?? 0) > 5 ? 'var(--el-danger)' : 'var(--color-primary)'}">{{ sysMonitor.metrics?.error_rate ?? 0 }}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 卡2: 数据源健康 (含数据健康度) -->
                        <div class="usage-card">
                            <div class="usage-card-title">📊 数据源健康<span class="usage-card-title-sub">三源成功率/延迟</span></div>
                            <div class="section-block-top">
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
                        <!-- v3.17.5: 数据健康度 (自策略总览移入) — v3.17.6 (bugfix): 移出数据源延迟网格, 独立成块 -->
                        <div class="section-block-top">
                            <!-- v3.18 (FR-3.18.1): 手动生成复盘入口 + 失败可见 -->
                            <div class="section-title-base flex-between">
                                <span>🩺 数据健康度</span>
                                <el-button size="small" :loading="reviewTriggering" @click="triggerMarketReview">立即生成复盘</el-button>
                            </div>
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
                                    <span v-if="s.stale" class="today-health-badge is-stale">⏳ 超期</span>
                                </div>
                            </div>
                        </div>
                        </div><!-- /数据源健康卡 -->

                        <!-- 卡3: 运维状态 (AI护栏 + 调度 + 备份合并) -->
                        <div class="usage-card">
                            <div class="usage-card-title">🛡️ 运维状态<span class="usage-card-title-sub">AI 护栏 · 调度 · 备份</span></div>
                            <div class="section-block-top">
                            <!-- v3.18 (FR-3.18.9): AI 事实护栏审计 — 最近报告 + 立即抽查 -->
                            <div class="section-title-base flex-between">
                                <span>🔍 AI 事实护栏审计</span>
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

                        <!-- v3.17.12 (FR-3.17.12): 调度任务健康面板 代码起点 -->
                        <div class="section-block-top">
                            <div class="section-title-base">🧩 调度任务</div>
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
                                    <!-- v3.17.6: 失败详情 (detail 来自 scheduler._record_task_run) -->
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
                        <!-- v3.17.12 (FR-3.17.12): 调度任务健康面板 代码结束 -->
                        <!-- v3.17.12: 备份与磁盘 -->
                        <!-- v3.17.6: 立即备份按钮 (createBackup 复用 feature 子页逻辑) -->
                        <div class="section-block-top">
                            <div class="section-title-base flex-between">
                                <span>💾 备份与磁盘</span>
                                <el-button size="small" type="primary" @click="createBackup" :loading="backupCreating">立即备份</el-button>
                            </div>
                            <div class="sys-health-grid">
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">最近备份成功</div>
                                    <div class="sys-health-big color-primary">{{ healthDetail.backup_last_success || '暂无备份' }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">备份数量</div>
                                    <div class="sys-health-big color-primary">{{ healthDetail.backup_count ?? 0 }} 个</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">磁盘剩余</div>
                                    <div class="sys-health-big color-primary">{{ healthDetail.disk?.free_gb ?? '--' }} GB</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">磁盘使用</div>
                                    <div class="sys-health-big color-primary">{{ healthDetail.disk?.percent ?? '--' }}%</div>
                                </div>
                            </div>
                        </div>
                        </div><!-- /运维状态卡 -->

                        <!-- 卡4: AI 用量 -->
                        <div class="usage-card">
                            <div class="usage-card-title">🤖 AI 用量<span class="usage-card-title-sub">30s 自动刷新</span></div>
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
                            <div class="usage-card-title">🔥 页面热度<span class="usage-card-title-sub">近 {{ analyticsDays }} 天</span></div>
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
                                <svg class="about-logo-img" viewBox="0 0 100 100" width="44" height="44" aria-label="量化选股日历 logo" role="img">
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
                            <div class="card-title">📖 软件简介</div>
                            <div class="about-body-text">
                                <p class="m-0-0-12">基于<strong class="color-text-primary">美林时钟经济周期理论</strong>，融合多策略选股与 AI 深度评估的智能投研工具。</p>
                                <p class="m-0"><strong class="color-text-primary">核心功能：</strong></p>
                                <ul class="about-ul">
                                    美林时钟 — GDP/CPI/PMI/社融/利率五维评分，四阶段自动切换，历史轮次追溯
                                    多策略选股 — 多因子/行业轮动/资金流/指数增强，共识榜交叉验证
                                    AI 每日复盘 — 收盘后自动生成市场复盘，AI 解读指数/板块/资金/情绪
                                    多因子体检 — 估值/基本面/资金面/情绪面/技术面，个股五维体检
                                    回测工作台 — 单/多策略回测对比，收益/回撤/夏普/净值可视化
                                    评估胜率追踪 — 评估命中率统计，决策复盘
                                    模拟组合 — 持仓/买卖调仓/实时盈亏/收益曲线
                                    异动扫描 — 涨停/跌停/放量/连板，自选/持仓事件提醒
                                    AI 问股 — 多轮上下文 + 多股对比 + 事实数据护栏
                                    移动端 & PWA — 375px 优化、离线可读、手势操作
                                    开放 API — API Key 接入只读行情/日历/评估，Webhook 事件订阅
                                    国际化 — 中/英双语切换
                                    飞书推送 — 定时推送每日选股报告
                                    数据源 — Tushare Pro / sxsc / akshare 三源热备
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">📌 软件版本</div>
                            <div class="flex-c-gap-16-wrap">
                                <span class="version-badge">v{{ appVersion }}</span>
                                <span class="text-success-md">● 服务运行中</span>
                            </div>
                        </div>
                        <!-- v3.21 (遗留2): 操作审计 — admin 查看最近敏感操作 -->
                        <div class="card">
                            <div class="card-title">🛡 操作审计 <span class="text-sm-tertiary">(管理员)</span></div>
                            <div class="flex-end-gap-8 mb-8">
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
                        <!-- v3.2.0-T24: 问题反馈 -->
                        <div class="card">
                            <div class="card-title">📮 问题反馈</div>
                            <div class="flex-col-gap-10">
                                <el-input v-model="feedbackText" type="textarea" :rows="3" placeholder="描述你遇到的问题或建议 (系统信息会自动附带)"></el-input>
                                <div class="flex-end-gap-8">
                                    <el-button size="small" @click="submitFeedback" :loading="feedbackSubmitting" type="primary">提交反馈</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">🧩 系统组件</div>
                            <div class="grid-auto-fill-200">
                                <div class="tech-item">
                                    <span class="text-xl">⚡</span>
                                    <div>
                                        <div class="text-md-semibold">FastAPI</div>
                                        <div class="text-sm-tertiary">后端框架</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl-success">▣</span>
                                    <div>
                                        <div class="text-md-semibold">Vue 3</div>
                                        <div class="text-sm-tertiary">前端框架</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl">🎨</span>
                                    <div>
                                        <div class="text-md-semibold">Element Plus</div>
                                        <div class="text-sm-tertiary">UI 组件库</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl">🐍</span>
                                    <div>
                                        <div class="text-md-semibold">Python 3</div>
                                        <div class="text-sm-tertiary">运行环境</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl">📊</span>
                                    <div>
                                        <div class="text-md-semibold">ECharts</div>
                                        <div class="text-sm-tertiary">图表引擎</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl">📡</span>
                                    <div>
                                        <div class="text-md-semibold">Tushare Pro</div>
                                        <div class="text-sm-tertiary">金融数据 API</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card border-left-warning">
                            <div class="card-title">⚠️ 风险提示</div>
                            <div class="about-body-text">
                                <p class="m-0-0-8"><strong class="color-text-primary">本系统仅供学习研究，不构成任何投资建议。</strong></p>
                                <p class="m-0-0-8">• 选股结果基于历史数据和量化模型，<strong>过往表现不代表未来收益</strong></p>
                                <p class="m-0-0-8">• 宏观指标存在滞后性，AI 评估为机器生成，不构成专业投资分析</p>
                                <p class="m-0">• 数据来源 Tushare Pro 及公开数据，不保证完整性和准确性。<strong>投资有风险，入市需谨慎</strong></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">📧 联系与反馈</div>
                            <div class="about-body-text">
                                <p class="m-0">• 维护团队：犇犇量化团队</p>
                            </div>
                        </div>
                    </div>
                    </div>
    `,setup(){const e=a("qcState");if(!e)return{};const u=Vue.ref([]),m=Vue.ref(""),w=Vue.ref("read"),b=Vue.ref(""),P=Vue.ref(!1),A=()=>window.__quantModules&&window.__quantModules.core||{},L=Vue.ref([]),x=Vue.ref(!1);async function E(){x.value=!0;try{const t=await fetch("/api/audit/logs?limit=20",{headers:A().authHeaders?A().authHeaders():{}}).then(function(d){if(!d.ok)throw new Error("HTTP "+d.status);return d.json()});L.value=t&&t.logs||[]}catch(t){console.error("[system] 审计加载失败:",t),L.value=[]}finally{x.value=!1}}const O=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((d,I)=>Math.max(d,I.views||0),0)||1),r=()=>A().OPENAPI_ROUTE_BASE||"/api/openapi";async function T(){P.value=!0;try{const t=await A().apiFetch(r()+"/keys");u.value=t&&t.data||[]}catch(t){ElementPlus.ElMessage.error("加载 API Key 失败: "+(t.message||""))}finally{P.value=!1}}async function f(){try{const t=await A().apiFetch(r()+"/keys",{method:"POST",body:JSON.stringify({name:m.value||"未命名",role:w.value||"read",expire_days:365})});t&&t.success?(b.value=t.api_key||"",m.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await T()):ElementPlus.ElMessage.error(t&&(t.detail||t.message)||"生成失败")}catch(t){ElementPlus.ElMessage.error("生成失败: "+(t.message||""))}}async function _(){if(b.value)try{await navigator.clipboard.writeText(b.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function D(t){try{const d=await A().apiFetch(r()+"/keys/"+t.id,{method:"DELETE"});d&&d.success?(ElementPlus.ElMessage.success("Key 已吊销"),b.value&&t.prefix&&b.value.includes(t.prefix)&&(b.value=""),await T()):ElementPlus.ElMessage.error(d&&(d.detail||d.message)||"吊销失败")}catch(d){ElementPlus.ElMessage.error("吊销失败: "+(d.message||""))}}const M={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function g(t){return M[t]||t}const q=computed(()=>{var t;return(((t=e.healthMetrics)==null?void 0:t.value)||[]).map(d=>({name:g(d.name),source:d.name,success_rate:d.success_rate,avg_latency_ms:d.avg_latency_ms,calls:d.calls||0,degraded:!!d.degraded,data_age_hours:d.data_age_hours!=null?d.data_age_hours:null,stale:!!d.stale,last_fetch:d.last_fetch||d.last_success||null}))});function p(t){return t.degraded?"degraded":t.success_rate==null?"unknown":t.success_rate>=90?"ok":t.success_rate>=60?"warn":"bad"}function H(t){return t==null?"":t<1?"刚刚":t<24?Math.round(t)+"小时前":Math.floor(t/24)+"天前"}const Y=e.aiUsage||Vue.ref({}),se=Vue.computed(()=>{const t=Y.value&&Y.value.by_model||{};return Object.entries(t).map(([d,I])=>({name:d,count:I})).sort((d,I)=>I.count-d.count)}),re=Vue.computed(()=>se.value.reduce((t,d)=>Math.max(t,d.count),0)||1),F=Vue.computed(()=>se.value.reduce((t,d)=>t+d.count,0)||1),S=Vue.computed(()=>N.value.reduce((t,d)=>Math.max(t,d.count),0)||0),N=Vue.computed(()=>{const t=Y.value&&Y.value.by_day||{},d=[],I=new Date;for(let K=29;K>=0;K--){const c=new Date(I.getFullYear(),I.getMonth(),I.getDate()-K),h=c.getFullYear()+"-"+String(c.getMonth()+1).padStart(2,"0")+"-"+String(c.getDate()).padStart(2,"0");d.push({day:h,count:t[h]||0})}return d}),k=Vue.computed(()=>N.value.reduce((t,d)=>Math.max(t,d.count),0)||1),l=Vue.computed(()=>{const t=Y.value&&Y.value.by_day||{},d=new Date,I=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");return t[I]||0}),C=Vue.computed(()=>{const t=Y.value&&Y.value.by_day||{},d=Object.keys(t).filter(I=>(t[I]||0)>0);return d.length?d[d.length-1]:""});function y(t){e.analyticsDays&&(e.analyticsDays.value=t),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const z='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',W='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function R(t){return t?W:z}return{...e,analyticsMaxViews:O,aiModelRank:se,aiModelMax:re,aiDayTrend:N,aiDayMax:k,todayAiCalls:l,lastAiCallDay:C,aiTotal:F,aiDayPeak:S,setAnalyticsDays:y,viewIcon:R,openApiKeys:u,openApiKeyName:m,openApiKeyRole:w,newOpenApiKey:b,openApiLoading:P,loadOpenApiKeys:T,generateOpenApiKey:f,copyOpenApiKey:_,revokeOpenApiKey:D,healthRows:q,healthClass:p,fmtAge:H,auditLogs:L,auditLoading:x,loadAuditLogs:E}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
                <div v-if="currentPage === 'strategies'" key="strategies">
                                        <div v-if="currentSubPage === 'overview'">
<div class="page-header">
                        <div class="page-title">{{ t('strategies.title') }}</div>
                        <!-- v3.17.4 (FR-3.17.4): 回测工作台入口 -->
                        <button type="button" class="bt-entry-btn" @click="currentSubPage = 'backtest'">回测工作台</button>
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
                        <div class="today-grid">
                            <!-- 美林时钟 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'merrill'">
                                <div class="today-cell-label">{{ t('strategies.merrillLabel') }}</div>
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
                                        <span class="today-focus-icon">{{ f.icon }}</span><span class="today-focus-text">{{ f.text }}</span>
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
                        <div class="stat-card">
                            <div class="stat-icon">📅</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_trading_days || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.tradingDays') }}</div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">📈</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_stocks_covered || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.coveredStocks') }}</div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">🎯</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.strategy_count || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.strategyCount') }}</div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">💎</div>
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
                        <div class="card-title">📈 各策略选股统计 <span class="text-sm-tertiary-normal">(点击策略跳转日历筛选)</span></div>
                        <div v-for="item in filteredStrategyCounts" :key="item.strategy_id" class="strategy-item clickable" @click="navigateToStrategyFilter(item.strategy_name)">
                            <div class="strategy-header">
                                <span class="strategy-name">{{ item.strategy_name }} <span class="text-xs-tertiary-ml4">→</span></span>
                                <span class="strategy-count">{{ item.count }}只 <span class="strategy-percent">(占在池{{ item.percentage }}%)</span></span>
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
                        <qc-state-panel v-if="filteredConsensusRank.length === 0" type="empty" title="暂无共识数据"></qc-state-panel>
                        <div v-for="item in filteredConsensusRank.slice(0,5)" :key="item.code" class="consensus-item" @click="showStockDetail(item.code)">
                            <div class="consensus-badge">{{ item.strategy_count }}</div>
                            <div class="consensus-info">
                                <div class="consensus-code">{{ item.code }}</div>
                                <div class="consensus-name">{{ item.name }}
                                    <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span>
                                    <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估">🤖</span>
                                </div>
                            </div>
                            <div class="consensus-tags">
                                <span v-for="s in item.strategy_names.slice(0, 2)" :key="s" class="strategy-tag">{{ s }}</span>
                            </div>
                        </div>
                    </div>

                    </div>
                    
                    <!-- 子页: 美林时钟 -->
                    <div v-else-if="currentSubPage === 'merrill'">

<!-- 美林时钟 -->
                    <div class="card overflow-hidden">
                        <div class="flex-between-mb16">
                            <div class="strategy-title-bar">
                                ⏱️ 美林时钟 · 经济周期
                            </div>
                            <span class="strategy-tag-pill" :style="{background: merrillData.color || 'var(--color-success)'}">
                                {{ merrillData.name || '计算中...' }}
                            </span>
                        </div>

                        <!-- 四阶段网格 -->
                        <div class="grid-2col-gap8-mb14">
                            <div v-for="s in stages" :key="s.key" @click.prevent="showStageDetail(s.key)"
                                 class="merrill-stage-card" :class="{active: merrillData.stage === s.key}"
                                 :style="merrillData.stage === s.key ? {borderColor: s.color, background: s.bg} : {}">
                                <div class="merrill-stage-icon">{{ s.icon }}</div>
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
                                <span class="color-secondary">📅 {{ merrillData.timing.current_stage_start_date || '—' }}</span>
                                <span class="strategy-badge" v-if="merrillData.timing.maturity" :style="{color: merrillData.color}">{{ merrillData.timing.maturity }}</span>
                            </div>
                            <div class="flex-between-xs-mb7">
                                <span>已过 {{ merrillData.timing.duration_days }}天 · 剩余 {{ merrillData.timing.days_remaining || '—' }}天</span>
                                <span class="text-warning-semibold" v-if="merrillData.next_stage_prediction?.transition_probability> 0.2">
                                    →{{ merrillData.next_stage_prediction.next_stage_name }} {{ (merrillData.next_stage_prediction.transition_probability*100).toFixed(2) }}%
                                </span>
                                <span v-else>均值 {{ merrillData.timing.avg_duration_months }}月</span>
                            </div>
                            <div class="progress-track-8">
                                <div class="progress-fill-4" :style="{width: Math.min(100, merrillData.timing.progress_percent || 0) + '%', background: (merrillData.timing.progress_percent || 0)> 100 ? 'linear-gradient(90deg, ' + (merrillData.color || 'var(--color-success)') + ', var(--color-warning))' : (merrillData.color || 'var(--color-success)')}"></div>
                            </div>
                            <div class="flex-between-xs-mt4">
                                <span>{{ merrillData.timing.progress_percent || 0 }}%<template v-if="(merrillData.timing.progress_percent || 0) > 100"> ⚠超期</template></span>
                                <span v-if="merrillData.timing.predicted_end">预计结束 {{ merrillData.timing.predicted_end.base || merrillData.timing.predicted_end }}</span>
                            </div>
                        </div>

                        <!-- 多维度评分 -->
                        <div class="note-box-14" v-if="merrillData.dimension_scores">
                            <div class="text-base-semibold-primary-mb10">📊 多维度评分</div>
                            <div class="flex-c-gap-8-mb6-sm" v-for="dim in dimensionScoreList" :key="dim.key">
                                <span class="stat-label-40">{{ dim.label }}</span>
                                <div class="stat-track-10">
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
                            💡 点击阶段卡片查看详细分析和投资建议
                        </div>

                        <!-- v3.22-I4 + V4.0.1: 历史周期时间轴(最近4轮, 历史在上/最新在下, 蛇形连线, hover介绍) -->
                        <div class="merrill-timeline-block">
                            <div class="merrill-timeline-head">
                                <span>🕰️ 历史周期时间轴</span>
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
                                                             @click.prevent="showTimelineStage(st.stage)"
                                                             @mouseenter="setTlHover(ci + '-' + ri + '-' + si)"
                                                             @mouseleave="clearTlHover()">
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
                            <div class="merrill-timeline-empty" v-else-if="!timelineLoading">暂无历史周期数据</div>
                        </div>
                    </div>
                    </div>
                    
                    <!-- 子页: 市场行情 -->
                    <div v-else-if="currentSubPage === 'market'">

                    
                    <!-- 市场行情概览 -->
                    <div class="card">
                        <div class="card-title">💹 今日市场行情</div>
                        <div class="market-status">
                            <span>
                                <span class="color-primary-semibold-600" v-if="marketData.is_trading_day">● 交易日</span>
                                <span class="color-tertiary" v-else>○ 非交易日</span>
                                <span class="ml-8-neutral-600" v-if="marketData.in_trading_hours">🕐 交易中</span>
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
                        <div class="card-title">🏆 策略共识度排行 (多策略同时选中)</div>
                        <!-- v3.11 (FR-3.11.3): 虚拟滚动，仅渲染可视区行 -->
                        <qc-virtual-list class="h-calc-240" :items="filteredConsensusRank" :row-height="78">
                            <template #default="{ item, index }">
                            <div class="consensus-item mb-0" @click="showStockDetail(item.code)">
                                <div class="consensus-badge">{{ item.strategy_count || index + 1 }}</div>
                                <div class="consensus-info">
                                    <div class="consensus-code">{{ item.code }}</div>
                                    <div class="consensus-name">{{ item.name }} <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span><span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估">🤖</span><span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" title="已加载K线">📈</span></div>
                                </div>
                                <div class="consensus-tags">
                                    <span v-for="s in item.strategy_names.slice(0, 2)" :key="s" class="strategy-tag">{{ s }}</span>
                                </div>
                            </div>
                            </template>
                        </qc-virtual-list>
                    </div>
                    </div>
                    <!-- v3.17.4 (FR-3.17.4): 回测工作台 代码起点 -->
                    <div v-else-if="currentSubPage === 'backtest'" class="backtest-workbench">
                        <div class="page-header">
                            <div class="page-title">回测工作台</div>
                            <div class="page-header-right">
                                <button type="button" class="bt-back-btn" @click="currentSubPage = 'overview'">返回策略总览</button>
                            </div>
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
                                <div class="bt-dd-info">回撤幅度 <b>{{ btDrawdownRegion.maxDrawdown }}%</b> · {{ btDrawdownRegion.peakDate }} → {{ btDrawdownRegion.troughDate }}（净值图中已标注）</div>
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
                                                <td :class="row.return >= 0 ? 'is-up' : 'is-down'">{{ row.return >= 0 ? '+' : '' }}{{ row.return }}%</td>
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
                </div>
    `,setup(){const e=a("qcState");if(!e)return{};const{computed:u}=Vue,m=u(()=>{var c;return((c=e.merrillData)==null?void 0:c.value)||{}}),w=u(()=>{var c;return((c=e.marketData)==null?void 0:c.value)||{}}),b=u(()=>{var c;return((c=e.dashboardData)==null?void 0:c.value)||{}}),P=u(()=>{var c;return((c=e.healthMetrics)==null?void 0:c.value)||[]}),A=u(()=>{var c;return((c=e.filteredConsensusRank)==null?void 0:c.value)||[]}),L=u(()=>{const c={};for(const h of A.value)h.code&&h.name&&(c[h.code]=h.name);return c}),x={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function E(c){return x[c]||c}const O=u(()=>w.value.date||b.value.latest_date||"-"),r=u(()=>{const c=w.value;return!c||Object.keys(c).length===0?"数据加载中...":c.is_trading_day&&c.in_trading_hours?"● 交易中":c.is_trading_day?"已收盘":"○ 非交易日"}),T=u(()=>{const c=m.value.next_stage_prediction;return c&&c.next_stage_name&&c.transition_probability>.2?`→${c.next_stage_name} ${(c.transition_probability*100).toFixed(2)}%`:""}),f=u(()=>{const c=[],h=b.value.pool_changes||{},s=h.new_count||0;if(s>0){const J=h.new_stock_names||{},le=(h.new_stocks||[]).map(ie=>J[ie]||L.value[ie]||ie).slice(0,4).join("、");c.push({icon:"🆕",level:"new",text:`今日新入池 ${s} 只${le?" · "+le:""}`,action:()=>{e.currentPage.value="calendar",e.currentSubPage.value="pool",e.statusFilter.value="new"}})}for(const J of P.value.filter(le=>le.degraded))c.push({icon:"⚠️",level:"warn",text:`数据源 ${E(J.name)} degraded（连续失败）`,action:()=>{e.currentPage.value="system"}});const n=m.value.timing;n&&n.progress_percent&&n.progress_percent>100?c.push({icon:"⏰",level:"warn",text:`美林「${m.value.name}」已超期 ${n.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):n&&n.maturity&&m.value.name&&c.push({icon:"⏳",level:"info",text:`美林「${m.value.name}」阶段成熟度 ${n.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const o=w.value;return o&&o.is_trading_day===!1&&o.date&&c.push({icon:"📅",level:"info",text:`${o.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),c}),_=u(()=>{var c;return((c=e.merrillTimeline)==null?void 0:c.value)||e.merrillTimeline||{cycles:[]}}),D=u(()=>{var c;return((c=e.timelineLoading)==null?void 0:c.value)||!1});function M(c){e.showStageDetail&&e.showStageDetail(c)}function g(c){const h=e.merrillStagesConfig,n=(h&&h.value?h.value:h||{})[c]||{};return n.color||n.bg_color||"var(--color-primary)"}function q(c){const h=e.merrillStagesConfig,s=h&&h.value?h.value:h||{};return s[c]&&s[c].name||""}function p(){const c=e.merrillStagesConfig;return c&&c.value?c.value:c||{}}function H(c){return p()[c]&&p()[c].description||""}function Y(c){const h=c&&c.stages?c.stages:[];if(!h.length)return"";const s=h[0]&&h[0].start?String(h[0].start).slice(0,4):"",n=h[h.length-1]||{},o=n.end?String(n.end).slice(0,4):n.start?String(n.start).slice(0,4):"";return s||o?s?s+"–"+o:o:""}function se(c){const h=c.start?String(c.start).slice(0,4):"",s=c.end?String(c.end).slice(0,4):h?"至今":"";return h?s?h+"–"+s:h:""}function re(c){return c.essence||c.trigger||H(c.stage)||""}function F(){const c=m.value.indicators||{},h=m.value.stage||"",s={recovery:[["PMI",c.pmi],["GDP",c.gdp_growth],["M2",c.m2_growth]],overheat:[["PPI",c.ppi],["CPI",c.cpi],["PMI",c.pmi]],stagflation:[["CPI",c.cpi],["PPI",c.ppi],["GDP",c.gdp_growth]],recession:[["PMI",c.pmi],["GDP",c.gdp_growth],["CPI",c.cpi]]},n=(s[h]||s.recession).filter(o=>o[1]!=null&&o[1]!==0);return n.length?"实时 · "+n.map(o=>o[0]+" "+o[1]+"%").join(" ｜ "):""}function S(c,h,s){const o=(p()[c.stage]||{}).color||"var(--color-primary)",J=h||[],le=J.map(me=>me.duration_months||0),ie=le.reduce((me,oe)=>me+oe,0),$=ie>0?le[s]/ie*100:100/Math.max(1,J.length),B=s===0,j=s===J.length-1;return{flex:"0 0 "+$+"%",background:o,borderRadius:B?"6px 0 0 6px":j?"0 6px 6px 0":"0"}}function N(c){const h=c.length;if(h<=4)return[c];const s=Math.ceil(h/2);return[c.slice(0,s),c.slice(s).reverse()]}function k(c){const h=p()[c]||{},s=h.color||"var(--color-primary)";return{background:h.bg_color||"var(--bg-card)",borderColor:s,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const l=Vue.reactive({}),C=Vue.ref(null);let y=null,z=null,W=null;function R(){try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((h,s)=>{const n=h.querySelector(".tl-stage-rows"),o=h.querySelector(".tl-row-top"),J=h.querySelector(".tl-row-bottom"),le=o?Array.from(o.querySelectorAll(".merrill-stage-chip")):[],ie=J?Array.from(J.querySelectorAll(".merrill-stage-chip")).reverse():[],$=le.concat(ie);if(!n||$.length<2){l[s]={d:"",vb:"0 0 1 1"};return}const B=n.getBoundingClientRect(),j=Math.max(1,B.width),me=Math.max(1,B.height),oe=le.length,ve=$.map(Ce=>{const pe=Ce.getBoundingClientRect();return{x:pe.left+pe.width/2-B.left,y:pe.top+pe.height/2-B.top}});let ce="M "+ve[0].x.toFixed(1)+" "+ve[0].y.toFixed(1);for(let Ce=1;Ce<ve.length;Ce++){const pe=ve[Ce-1],be=ve[Ce];Ce===oe&&(ce+=" L "+pe.x.toFixed(1)+" "+be.y.toFixed(1)),ce+=" L "+be.x.toFixed(1)+" "+be.y.toFixed(1)}l[s]={d:ce,vb:"0 0 "+j.toFixed(1)+" "+me.toFixed(1)}})}catch(c){console.error("[tl] buildTlPaths error",c)}}function t(c){return l[c]||{d:"",vb:"0 0 1 1"}}function d(c){C.value=c}function I(){C.value=null}function K(c){z&&clearTimeout(z),z=setTimeout(()=>{z=null,Vue.nextTick(R)},c||120)}return Vue.onMounted(()=>{K(0),K(800),y=()=>K(150),window.addEventListener("resize",y),W=new MutationObserver(()=>K(120)),W.observe(document.body||document.documentElement,{childList:!0,subtree:!0})}),Vue.onBeforeUnmount(()=>{y&&window.removeEventListener("resize",y),z&&clearTimeout(z),W&&(W.disconnect(),W=null)}),{...e,todayText:O,tradingStatus:r,merrillNext:T,todayFocus:f,getTimelineStageColor:g,getTimelineStageName:q,getTimelineStageDesc:H,timelineRows:N,tlChipStyle:k,tlPathFor:t,tlCycleYears:Y,tlGanttStyle:S,tlTipYears:se,tlTipBrief:re,tlCurrentBrief:F,tlHoverKey:C,setTlHover:d,clearTlHover:I,merrillTimeline:_,timelineLoading:D,showTimelineStage:M}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
                <div v-if="currentPage === 'calendar'" key="calendar" data-cal-root @touchstart="onCalTouchStart" @touchend="onCalTouchEnd">

                    <!-- v3.17.8 (FR-3.17.8): 下拉刷新指示器（页面顶部下拉时显示） -->
                    <div class="pull-refresh-indicator" :class="{'is-active': pullRefreshing}">
                        <span class="pull-refresh-spinner"></span>
                        <span>{{ t('common.refreshing') }}</span>
                    </div>

                    <!-- 日/周/月/年视图 -->
                    <template v-if="currentSubPage !== 'pool'">
                        <!-- 快捷导航按钮 -->
                        <div class="cal-nav flex-c-gap-12-mb16-wrap">
                            <el-button size="small" @click="navigateDate(-1)" :disabled="!canNavPrev">« {{ t('calendar.prev') }}{{ viewUnit }}</el-button>
                            <el-button size="small" @click="navigateDate(1)" :disabled="!canNavNext">{{ t('calendar.next') }}{{ viewUnit }} »</el-button>
                        </div>

                        <div class="card">
                            <div class="card-title">💎 {{ t('calendar.poolTitle') }}</div>
                            
                            <!-- 状态筛选 -->
                            <div class="status-tabs" role="tablist">
                                <div class="status-tab" :class="{active: statusFilter === 'all'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'all'" @click="statusFilter = 'all'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">📋 {{ t('calendar.all') }} <span class="count">{{ statusCounts.all }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'new'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'new'" @click="statusFilter = 'new'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">🆕 {{ t('calendar.newPool') }} <span class="count">{{ statusCounts.newCount }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'current'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'current'" @click="statusFilter = 'current'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">📌 {{ t('calendar.currentHold') }} <span class="count">{{ statusCounts.current }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'out'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'out'" @click="statusFilter = 'out'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">📤 {{ t('calendar.outPool') }} <span class="count">{{ statusCounts.out }}</span></div>
                            </div>

                            <div class="search-box">
                                <el-input class="w-100" v-model="searchKeyword" :placeholder="t('common.searchPlaceholder')" clearable/>
                            </div>

                            <!-- v3.11 (FR-3.11.5): 统一四态组件（加载/空态） -->
                            <qc-state-panel v-if="loading" type="loading"></qc-state-panel>

                            <qc-state-panel v-else-if="stockPool.length === 0" type="empty" :title="t('common.empty')"></qc-state-panel>
                            
                            <div v-else class="stock-list">
                                <!-- v3.11 (FR-3.11.3): 虚拟滚动，仅渲染可视区行 -->
                                <qc-virtual-list class="h-calc-250" :items="stockPool" :row-height="78">
                                    <template #default="{ item, index }">
                                    <div class="consensus-item mb-0" :data-copy-code="item.code" @click="showStockDetail(item.code)" tabindex="0" role="button" :aria-label="t('common.view') + ' ' + item.name + ' ' + item.code" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                        <div class="consensus-badge">{{ index + 1 }}</div>
                                        <div class="consensus-info">
                                            <div class="consensus-code">
                                                {{ item.code }}
                                                <span v-if="item.status === 'new'" class="status-badge status-new">{{ t('calendar.newPool') }}</span>
                                                <span v-else-if="item.status === 'out'" class="status-badge status-out">{{ t('calendar.outPool') }}</span>
                                            </div>
                                            <div class="consensus-name">{{ item.name }} <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" tabindex="0" role="button" :aria-label="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" :title="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span><span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" :title="t('calendar.aiEvaluated')">🤖</span><span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" :title="t('calendar.klineLoaded')">📈</span></div>
                                        </div>
                                        <div class="consensus-tags">
                                            <span v-for="s in item.strategies.slice(0, 2)" :key="s" class="strategy-tag">{{ s }}</span>
                                        </div>
                                        <!-- v3.7.11: AI入池信号解读（固定行高内单行省略） -->
                                        <div class="cal-subtitle-ellipsis" v-if="poolSignals[item.code]">🤖 {{ poolSignals[item.code] }}</div>
                                    </div>
                                    </template>
                                </qc-virtual-list>
                            </div>
                        </div>
                    </template>

                    <!-- 股票池管理视图 -->
                    <template v-else>
                        <div class="card">
                            <div class="card-title">💎 {{ t('calendar.poolManage') }}</div>
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
                            <div class="card-title">📋 {{ t('calendar.strategyDist') }}</div>
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
                                                <span class="gold-link" @click.stop="toggleWatchlist(stock.code, stock.name)" :title="watchlistCodes.has(stock.code)?t('calendar.unwatch'):t('calendar.watch')">{{ watchlistCodes.has(stock.code) ? '⭐' : '☆' }}</span><span class="text-xs-ml2" v-if="evaluatedCodes.has(stock.code)" :title="t('calendar.aiEvaluated')">🤖</span><span class="text-xs-ml2" v-if="klineLoadedCodes.has(stock.code)" :title="t('calendar.klineLoaded')">📈</span>
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

                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:u}=Vue,m=u(0),w=u(0),b=u(!1);let P=null;function A(E){const O=E.touches&&E.touches[0];O&&(m.value=O.clientX,w.value=O.clientY)}async function L(){if(!b.value){b.value=!0;try{await e.refreshCalendarData()}catch{}P&&clearTimeout(P),P=setTimeout(()=>{b.value=!1},500)}}function x(E){if(!(window.innerWidth<=768))return;const O=E.changedTouches&&E.changedTouches[0];if(!O)return;const r=window.__quantModules&&window.__quantModules.gestures||{};if((typeof r.judgePullToRefresh=="function"?r.judgePullToRefresh(w.value,O.clientY):O.clientY-w.value>=60)&&(window.scrollY||0)<=0){E.stopPropagation(),L();return}if(e.currentSubPage.value==="pool")return;const f=O.clientX-m.value,_=O.clientY-w.value;Math.abs(f)>50&&Math.abs(f)>Math.abs(_)*1.2&&(e.navigateDate(f<0?1:-1),E.stopPropagation())}return{...e,pullRefreshing:b,onCalTouchStart:A,onCalTouchEnd:x}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
                <div v-if="currentPage === 'ai'" key="ai">

                    <!-- overview: 概览统计 + 快捷操作 -->
                    <div v-if="currentSubPage === 'overview'">
                        <div class="flex-end-gap-8-mb16">
                            <el-button size="small" @click="showBatchEvaluate = true">
                                {{ t('ai.batchEval') }}
                            </el-button>
                            <el-button size="small" @click="showAutoEvaluateSettings = true">
                                <span class="mr-4">⚙️</span>{{ t('ai.autoEval') }}
                            </el-button>
                        </div>

                        <!-- 统计卡片 -->
                        <div class="dashboard-grid mb-20">
                            <div class="stat-card stat-card-primary" @click="currentSubPage = 'history'" tabindex="0" role="button" aria-label="历史评估" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-info">📋</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiHistory.length }}</div>
                                    <div class="stat-label">{{ t('ai.totalEval') }}</div>
                                </div>
                            </div>
                            <div class="stat-card stat-card-success" @click="currentSubPage = 'history'" tabindex="0" role="button" aria-label="覆盖股票" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-success">📈</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiHistoryStockCount }}</div>
                                    <div class="stat-label">{{ t('ai.coveredStocks') }}</div>
                                </div>
                            </div>
                            <div class="stat-card stat-card-gold" @click="currentSubPage = 'watchlist'" tabindex="0" role="button" aria-label="自选股" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                <div class="stat-icon stat-icon-gold">⭐</div>
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
                            <div class="stat-card stat-card-warning" @click="showAutoEvaluateSettings = true" tabindex="0" role="button" aria-label="自动评估设置" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)" :style="{opacity: autoEvaluateConfig.enabled ? 1 : 0.6}">
                                <div class="stat-icon" :style="{background: autoEvaluateConfig.enabled ? 'var(--badge-gold-bg)' : 'var(--bg-hover)', color: 'var(--el-warning)'}">
                                    {{ autoEvaluateConfig.enabled ? '▶' : '⏸' }}
                                </div>
                                <div class="stat-content">
                                    <div class="stat-value text-md">{{ autoEvaluateConfig.enabled ? t('ai.running') : t('ai.paused') }}</div>
                                    <div class="stat-label">{{ t('ai.autoEval') }}</div>
                                </div>
                            </div>
                            <!-- v3.5.0-T6: AI 用量统计 -->
                            <!-- v3.17.6: title 提示详细用量位置 (系统→用量统计) -->
                            <div class="stat-card stat-card-info-border" title="AI 模型调用统计, 模型分布/近30天趋势见 系统→用量统计">
                                <div class="stat-icon stat-icon-info-hover">⚡</div>
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
                                        <span class="text-sm-primary-semibold">{{ r.score }}%</span>
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
                                        <span :style="{color:item.result.level_color,fontWeight:'var(--font-bold)',fontSize:'18px'}">{{ item.result.total_score }}</span>
                                    </div>
                                    <div class="text-sm-secondary-mb6">{{ item.stock_name }}</div>
                                    <div class="flex-between">
                                        <span :style="{background:item.result.level_color+'20',color:item.result.level_color,padding:'2px 8px',borderRadius:'10px',fontSize:'var(--font-xs)'}">{{ item.result.level }}</span>
                                        <span class="text-xs-tertiary">{{ (item.evaluate_time||'').split('T')[0] }}</span>
                                    </div>
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
                                    <el-select class="w-100" v-if="watchlist.length> 0" v-model="quickEvalStock" :placeholder="t('ai.chooseFromWatchlist')" size="small" clearable>
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
                                        <div class="text-3xl-mb8">⭐</div>
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
                            <div class="empty-state-icon-md">🤖</div>
                            <div class="text-lg-semibold-primary-mb8">{{ t('ai.title') }}</div>
                            <div class="text-md-secondary-mb20">{{ t('ai.subtitle') }}</div>
                            <div class="flex-gap-12-center">
                                <el-button type="primary" @click="currentSubPage = 'watchlist'">{{ t('ai.manageWatchlist') }}</el-button>
                                <el-button @click="showBatchEvaluate = true">{{ t('ai.batchEval') }}</el-button>
                            </div>
                        </div>
                    </div>

                    <!-- history: 评估历史记录 -->
                    <div v-else-if="currentSubPage === 'history'">
                        <!-- v3.17.6 (FR-3.17.6): 评估命中率（决策复盘） -->
                        <div class="card eval-track-card">
                            <div class="card-title">{{ t('ai.evalHitRate') }} <span class="eval-track-title-hint">对照评估后 5/10/20 个交易日实际涨跌</span></div>
                            <div v-if="trackLoading" class="eval-track-state">{{ t('ai.hitRateLoading') }}</div>
                            <div v-else-if="!trackData || !trackData.samples || trackData.samples.length === 0" class="eval-track-state">{{ t('ai.insufficientSamples') }}</div>
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

                        <!-- 批量操作工具栏 -->
                        <div class="card mb-4">
                            <div class="flex-between">
                                <div class="color-secondary">
                                    <span v-if="selectedHistoryIds.length > 0">已选择 <strong class="color-primary">{{ selectedHistoryIds.length }}</strong> 条记录</span>
                                    <span v-else>可选多条记录进行批量操作</span>
                                </div>
                                <div class="flex-gap-8">
                                    <el-button size="small" @click="selectAllHistory">{{ selectedHistoryIds.length === aiHistory.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" @click="batchReevaluateHistory">🔄 再次评估</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="success" @click="batchAddToWatchlist">⭐ 加入自选</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="danger" @click="deleteSelectedHistory">🗑️ 批量删除</el-button>
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
                            <div class="empty-state-icon">🤖</div>
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
                                                <span class="text-md-semibold">📅 {{ date }}</span>
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
                                                <span class="text-md-semibold">📆 {{ month }}</span>
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
                                            <span :style="{color: records[0].result.level_color, fontSize: 'var(--font-sm)'}">最新{{ records[0].result.total_score }}分</span>
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
                                    <el-button v-if="selectedChatIds.length > 0" size="small" type="danger" @click="deleteSelectedChatSessions">🗑️ 批量删除</el-button>
                                    <el-button v-if="selectedChatIds.length > 0" size="small" @click="selectedChatIds = []">取消选择</el-button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-title">💬 AI 问股历史 <span class="card-title-hint">共 {{ Object.keys(chatGroupedByDate).length }} 天 · {{ allChatSessionsFlat.length }} 条</span></div>
                        <!-- v3.16 (16.7): 统一加载/离线/错误态（可重试） -->
                        <qc-state-panel v-if="chatHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadChatHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="chatHistoryError" type="error" @retry="loadChatHistory"></qc-state-panel>
                        <div v-else-if="allChatSessionsFlat.length === 0" class="empty-state">
                            <div class="empty-state-icon">💬</div>
                            <div class="text-md-medium-primary">暂无问股记录</div>
                            <div class="text-sm-tertiary-mt8">
                                在股票详情页点击「AI 问股」开始对话
                            </div>
                        </div>

                        <!-- 视图切换 -->
                        <div class="flex-gap-8-mb12" v-if="allChatSessionsFlat.length> 0">
                            <el-button size="small" @click="chatHistoryView = 'date'" :type="chatHistoryView === 'date' ? 'primary' : ''">📅 按日期</el-button>
                            <el-button size="small" @click="chatHistoryView = 'month'" :type="chatHistoryView === 'month' ? 'primary' : ''">📆 按月</el-button>
                            <el-button size="small" @click="chatHistoryView = 'stock'" :type="chatHistoryView === 'stock' ? 'primary' : ''">📈 按股票</el-button>
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
                                                <span class="text-md-semibold">📅 {{ date }}</span>
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
                                                <span class="text-md-semibold">📆 {{ month }}</span>
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
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" type="primary" @click="batchEvaluateSelected" :disabled="aiLoading">📊 评估选中</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" type="danger" @click="batchRemoveWatchlist">🗑️ 移除选中</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" @click="clearWatchlistSelection">取消选择</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" type="primary" @click="batchEvaluateWatchlist" :disabled="aiLoading">📊 批量评估</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" type="danger" @click="clearWatchlist">🗑️ 清空自选</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" @click="preloadWatchlistKline" :loading="preloadingKline">🔄 预加载K线</el-button>
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
                                <div class="watchlist-empty-icon">⭐</div>
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
                                            <span v-if="batchRunning && batchStatuses[stock.code]==='running'" class="watchlist-status spinning">⏳</span>
                                            <span v-else-if="getWatchlistScore(stock.code)" class="watchlist-score-badge" :style="{background: getWatchlistScore(stock.code).color+'20', color: getWatchlistScore(stock.code).color}">
                                                {{ getWatchlistScore(stock.code).score }}
                                            </span>
                                            <!-- v3.17.7 实时化 (FR-3.17.7): 行内实时报价（涨跌色/涨跌幅/量比/涨速 + 预警标记） -->
                                            <div v-if="realtimeQuotes[stock.code]" class="watchlist-quote">
                                                <span class="quote-price" :style="{color: realtimeQuoteColor(stock.code)}">{{ realtimePriceText(stock.code) }}</span>
                                                <span class="quote-pct" :style="{color: realtimeQuoteColor(stock.code)}">{{ realtimePctText(stock.code) }}</span>
                                                <span class="quote-meta">量比 {{ realtimeRatioText(stock.code, 'volume_ratio') }}</span>
                                                <span class="quote-meta">涨速 {{ realtimeRatioText(stock.code, 'rise_speed') }}%</span>
                                                <span v-if="quoteWarningFor(stock.code)" class="rt-warn-tag">{{ quoteWarningFor(stock.code) }}</span>
                                            </div>
                                        </div>
                                        <div class="watchlist-actions">
                                            <el-button size="small" @click.stop="watchlistEvaluate(stock.code, stock.name)" :disabled="aiLoading">📊 评估</el-button>
                                            <el-button size="small" @click.stop="showStockKline(stock.code, stock.name)">📈 K线</el-button>
                                            <el-button size="small" type="danger" text @click.stop="removeFromWatchlist(stock.code)">🗑️</el-button>
                                        </div>
                                        </div>
                                        <div class="swipe-reveal-actions">
                                            <el-button size="small" type="danger" @click.stop="removeFromWatchlist(stock.code)">🗑️ 删除</el-button>
                                        </div>
                                    </div>
                                    </template>
                                </qc-virtual-list>
                            </div>
                        </div>
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
                                                    <el-button size="small" @click="openTradeForm(p.stock_code, p.stock_name)">调仓</el-button>
                                                    <el-button size="small" type="danger" text @click="removePosition(p.stock_code)">删除</el-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </template>

                            <!-- 调仓记录 -->
                            <template v-else>
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
                </div>`,setup(){const{ref:e,watch:u,onUnmounted:m}=Vue,w=a("qcState");if(!w)return{};function b(){if(!w.hasMoreAiHistory||!w.loadMoreAiHistory||w.currentPage.value!=="ai"||w.currentSubPage.value!=="history")return;const s=document.documentElement;s.scrollTop+window.innerHeight>=s.scrollHeight-300&&w.loadMoreAiHistory()}window.addEventListener("scroll",b,{passive:!0}),m(()=>window.removeEventListener("scroll",b));const P=e(null),A=e(!1),L=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function x(s){return!s||s.total===0||s.rate===null||s.rate===void 0?"--":s.rate.toFixed(2)+"%"}const E=e(5);function O(s){E.value=s}function r(s,n){if(!s)return"--";if(s.available===!1)return"— 数据不可达";const o=s["hit_n"+n];return o===!0?"✓ 命中":o===!1?"✗ 未中":"– 中性/待验证"}async function T(){A.value=!0;try{const n=await(await fetch("/api/ai/track")).json();P.value=n&&n.success?n.data:null}catch(s){console.warn("[eval-track] 评估命中率加载失败:",s),P.value=null}finally{A.value=!1}}u(function(){return w.currentPage.value+"/"+w.currentSubPage.value},function(s){s==="ai/history"&&T()},{immediate:!0});const f=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:_,summary:D,trades:M,loading:g,loadError:q,showAddForm:p,addForm:H,addSaving:Y,tradeFormVisible:se,tradeForm:re,tradeSaving:F,portfolioTab:S,equityDays:N,equityLoading:k,equityNote:l,equityHasData:C,loadPortfolio:y,addPosition:z,removePosition:W,openTradeForm:R,submitTrade:t,loadTrades:d,loadEquity:I,fmtSigned:K,fmtSignedPct:c,signClass:h}=f;return u(_,function(s){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((s||[]).map(function(n){return{code:n.stock_code,name:n.stock_name||n.stock_code}}))},{deep:!0}),u(function(){return w.currentPage.value+"/"+w.currentSubPage.value},function(s){s==="ai/portfolio"?(y(),d(),I(N?N.value:30)):s==="ai/overview"&&y()},{immediate:!0}),{...w,trackData:P,trackLoading:A,trackWindows:L,fmtTrackRate:x,loadTrack:T,trackWindow:E,setTrackWindow:O,trackHitText:r,positions:_,summary:D,trades:M,loading:g,loadError:q,showAddForm:p,addForm:H,addSaving:Y,tradeFormVisible:se,tradeForm:re,tradeSaving:F,portfolioTab:S,equityDays:N,equityLoading:k,equityNote:l,equityHasData:C,loadPortfolio:y,addPosition:z,removePosition:W,openTradeForm:R,submitTrade:t,loadTrades:d,loadEquity:I,fmtSigned:K,fmtSignedPct:c,signClass:h}}}})();(function(){const{ref:a,computed:e,watch:u,inject:m}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
                <div v-if="currentPage === 'research'" key="research">
                    <!-- v3.16 (16.8): 功能未开启时的统一占位 -->
                    <qc-state-panel v-if="!researchMenuEnabled" type="empty" icon="🔒" title="研究功能未开启"
                        desc="请在「系统配置 → 功能开关」中启用「策略研究」菜单"></qc-state-panel>
                    <template v-else>
                    <div v-if="currentSubPage === 'quant-research'" class="card">
                        <div class="card-title">{{ t('research.quantResearch') }}</div>
                        <!-- v3.19 (策略研究 P0): 策略注册表 → schema 表单 → 运行/回测/PTrade 导出 -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" title="策略加载失败"
                            desc="请检查服务后重试" @retry="loadStrategies"></qc-state-panel>
                        <template v-else>
                            <!-- 策略列表: 卡片 + 选择 -->
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-select class="w-220" v-model="activeStrategyId" size="small" placeholder="选择策略" @change="onStrategyChange">
                                    <el-option v-for="s in strategies" :key="s.id" :label="s.name + ' (' + s.id + ')'" :value="s.id" />
                                </el-select>
                                <el-button size="small" type="primary" @click="runActiveStrategy" :loading="strategyRunning">▶ 手工运行</el-button>
                                <el-date-picker class="w-150" v-model="runAsOf" type="date" size="small" placeholder="评估日(默认最新)" value-format="YYYY-MM-DD"/>
                                <el-button size="small" @click="exportActivePtradeCode">📤 导出 PTrade 代码</el-button>
                            </div>
                            <!-- v3.21 (P0-6): 策略纳管卡片 (默认纳管不可删, 可复制调参) -->
                            <div class="strategy-params flex-wrap-gap-12-mb16-c">
                                <div class="strategy-param-row">
                                    <span class="strategy-param-label">纳管</span>
                                    <el-switch v-model="govEnabled" @change="updateGov" />
                                    <span class="strategy-param-label">进日历</span>
                                    <el-switch v-model="govShowCalendar" @change="updateGov" />
                                    <el-select class="w-110" size="small" v-model="govSchedule" @change="updateGov">
                                        <el-option v-for="t in ['20:00','21:00','22:00','08:00']" :key="t" :label="t" :value="t" />
                                    </el-select>
                                    <el-select class="w-110" size="small" v-model="govUniverse" @change="updateGov" :disabled="!govEnabled">
                                        <el-option value="default" label="内置池" />
                                        <el-option value="all" label="全市场" />
                                    </el-select>
                                    <el-button size="small" type="warning" @click="runOnceActive" :loading="govRunning">⚡ 立即生成持仓</el-button>
                                    <el-button v-if="lastHoldings" size="small" @click="openLastHoldings">📄 查看最近持仓</el-button>
                                    <el-button size="small" @click="cloneStrategy">📋 复制为副本调参</el-button>
                                </div>
                            </div>
                            <div v-if="activeStrategy" class="strategy-detail">
                                <div class="text-sm-tertiary-mt8">{{ activeStrategy.description }}</div>
                                <!-- v3.21 (P0-3): 参数方案保存/加载 -->
                                <div class="strategy-params">
                                    <div class="strategy-param-row">
                                        <el-select class="w-200" size="small" v-model="profileSelect" placeholder="加载已存方案" @change="applyProfile">
                                            <el-option v-for="p in profiles" :key="p.id" :label="p.name" :value="p.id" />
                                        </el-select>
                                        <el-input class="w-140" size="small" v-model="profileName" placeholder="方案名" />
                                        <el-button size="small" type="primary" @click="saveProfile">💾 保存方案</el-button>
                                        <el-button v-if="profileSelect" size="small" type="danger" @click="deleteProfile">🗑 删除</el-button>
                                    </div>
                                </div>
                                <!-- schema 驱动参数表单 -->
                                <div class="strategy-params">
                                    <div v-for="f in activeStrategy.schema" :key="f.key" class="strategy-param-row">
                                        <label class="strategy-param-label">{{ f.label }}</label>
                                        <el-select v-if="f.type === 'enum'" class="w-200" size="small" v-model="paramValues[f.key]" @change="paramValues[f.key] = $event">
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
                            <div class="card-title">📊 因子研究</div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-select class="w-220" v-model="factorKey" size="small" placeholder="选择因子">
                                    <el-option v-for="f in activeStrategy.factor_specs || factorOptions" :key="f.name" :label="f.name + ' (' + f.category + ')'" :value="f.name" />
                                </el-select>
                                <el-button size="small" type="primary" @click="runFactorIc" :loading="factorIcLoading">IC 分析</el-button>
                                <el-button size="small" @click="runFactorLayer" :loading="factorLayerLoading">分层回测</el-button>
                            </div>
                            <!-- IC 报告 -->
                            <div v-if="factorIcReport" class="factor-ic-report">
                                <div class="grid-auto-fit-140-mb16">
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorIcReport.ic_mean }}</div>
                                        <div class="stat-label">IC 均值</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorIcReport.icir }}</div>
                                        <div class="stat-label">ICIR</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorIcReport.win_rate }}</div>
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
                                        <div class="stat-value text-lg" :class="ly.layer === factorLayerResult.layers.length ? 'up' : (ly.return < 0 ? 'down' : 'flat')">{{ ly.return }}%</div>
                                        <div class="stat-label">层 {{ ly.layer }}</div>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt8" :class="factorLayerResult.monotonic ? 'up' : 'down'">
                                    单调性: {{ factorLayerResult.monotonic ? '单调递增 ✓' : '非单调' }} · 多空价差 {{ factorLayerResult.spread }}%
                                </div>
                            </div>
                            <!-- V4.0 M2-1: 参数网格扫描 (策略实验室) -->
                            <div class="sweep-research mt-8">
                                <div class="card-title">🔬 参数扫描 <span class="text-sm-tertiary">网格搜索 → SDK 回测 → 按指标排序</span></div>
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <el-input class="w-260" size="small" v-model="sweepGrid" placeholder='JSON 网格, 如 {"top_n":[10,20,30],"st_filter":[true,false]}' />
                                    <el-button size="small" type="primary" @click="runSweep" :loading="sweepLoading">▶ 运行扫描</el-button>
                                    <span class="text-sm-tertiary">指标: 年化收益(降序)</span>
                                </div>
                                <div v-if="sweepMessage" class="text-sm-tertiary-mt8">{{ sweepMessage }}</div>
                                <div v-if="sweepResult && sweepResult.length" class="sweep-table mt-8">
                                    <div v-for="(row, i) in sweepResult" :key="i" class="sweep-row flex-wrap-gap-12-mb16-c" :class="{ 'sweep-best': i === 0 }">
                                        <span class="text-sm-secondary w-260">参数: {{ JSON.stringify(row.params) }}</span>
                                        <span class="text-sm-primary">年化 {{ (row.annual_return * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary">总收益 {{ (row.total_return * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary" :class="{ down: row.max_drawdown < -0.2 }">回撤 {{ (row.max_drawdown * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary">夏普 {{ row.sharpe_ratio.toFixed(2) }}</span>
                                        <span v-if="row.overfit_warning" class="text-sm-tertiary">⚠️ 疑似过拟合</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'strategy-write'" class="card">
                        <div class="card-title">⚙️ 策略编写 <span class="text-sm-tertiary">复制母本 → 参数 → 持仓矩阵 → SelectionSpec → AI 交易码</span></div>
                        <!-- v3.22 (I3A): 第1步 选择母本 + 复制 -->
                        <div class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">母本策略</span>
                            <el-select class="w-220" size="small" v-model="activeStrategyId" placeholder="选择母本" @change="onStrategyChange">
                                <el-option v-for="s in strategies" :key="s.id" :label="s.name + ' (' + s.id + ')'" :value="s.id" />
                            </el-select>
                            <el-input class="w-160" size="small" v-model="profileName" placeholder="新策略名(可选)" />
                            <el-button size="small" type="primary" @click="cloneNewStrategy" :loading="variantBusy">📋 复制为微调策略</el-button>
                            <el-button size="small" @click="loadVariants">🔄 刷新列表</el-button>
                        </div>
                        <!-- variant 列表 -->
                        <div v-if="variants.length" class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">微调策略</span>
                            <el-select class="w-220" size="small" v-model="variantSelected" placeholder="选择微调策略" @change="selectVariant(variantSelected)">
                                <el-option v-for="v in variants" :key="v.id" :label="(v.name || v.id) + ' (' + v.id + ')'" :value="v.id" />
                            </el-select>
                            <el-button size="small" type="warning" @click="runVariantOnce" :loading="variantBusy">⚡ 生成持仓矩阵</el-button>
                        </div>
                        <div v-if="variantMsg" class="text-sm-primary mt-8">{{ variantMsg }}</div>
                        <!-- v3.22 (I3A): 第2步 SelectionSpec 微调协议 -->
                        <div v-if="variantSelected && variantSpec" class="strategy-params">
                            <div class="section-title-base mt-8">🎯 SelectionSpec 微调选股协议 <span class="text-sm-tertiary">纯收紧约束: 仅在持仓矩阵内二次筛选</span></div>
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
                                    <el-select class="w-160" size="small" v-model="variantSpec.index_membership" clearable>
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
                            <el-button size="small" type="primary" @click="saveVariantSpec">💾 保存 SelectionSpec</el-button>
                        </div>
                        <!-- v3.22 (I3A): 第3步 AI 交易码 -->
                        <div v-if="variantSelected" class="strategy-params">
                            <div class="section-title-base mt-8">🤖 AI 交易码 <span class="text-sm-tertiary">读取持仓矩阵 + SelectionSpec → PTrade 兼容代码(含风控)</span></div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-button size="small" type="primary" @click="genVariantAiCode" :loading="aiCodeLoading">⚡ 生成 AI 交易码</el-button>
                                <el-button size="small" @click="copyVariantCode" :disabled="!aiCode">📋 复制代码</el-button>
                            </div>
                            <div v-if="aiCode" class="ptrade-code-pre">{{ aiCode }}</div>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'custom-write'" class="card">
                        <div class="card-title">🚀 全新策略 <span class="text-sm-tertiary">AI 代写 → 本地回测 → AI 优化</span></div>
                        <!-- v3.22 (I3B): 第1步 AI 代写 -->
                        <div class="strategy-params">
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-input class="w-180" size="small" v-model="customName" placeholder="策略名(如 均线突破)" />
                                <el-button size="small" type="primary" @click="genCustomCode" :loading="customGenLoading">🤖 AI 代写</el-button>
                                <el-button size="small" @click="loadCustoms">🔄 刷新列表</el-button>
                            </div>
                            <el-input type="textarea" :rows="3" size="small" v-model="customPrompt"
                                placeholder="描述策略思路, 如: 双均线金叉买入, 死叉卖出, 单只仓位20%, 止损8%" class="w-full" />
                        </div>
                        <!-- 自定义策略列表 -->
                        <div v-if="customs.length" class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">自定义策略</span>
                            <el-select class="w-220" size="small" v-model="customSelected" placeholder="选择策略">
                                <el-option v-for="c in customs" :key="c.id" :label="(c.name || c.id) + ' (' + c.id + ')'" :value="c.id" />
                            </el-select>
                            <el-button size="small" @click="loadCustomCode" :disabled="!customSelected">📄 读取代码</el-button>
                            <el-button size="small" type="warning" @click="runCustomBacktest" :loading="customBtLoading">⚡ 本地回测</el-button>
                            <el-button size="small" type="danger" @click="runCustomOptimize" :loading="customOptLoading">🧠 AI 优化</el-button>
                        </div>
                        <div v-if="customMsg" class="text-sm-primary mt-8">{{ customMsg }}</div>
                        <!-- 代码区 -->
                        <div v-if="customCode" class="strategy-params">
                            <div class="section-title-base mt-8">💻 策略代码 <span class="text-sm-tertiary">PTrade 兼容</span></div>
                            <pre class="ptrade-code-pre">{{ customCode }}</pre>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-button size="small" @click="copyCustomCode">📋 复制代码</el-button>
                            </div>
                        </div>
                        <!-- 回测结果 -->
                        <div v-if="customBtResult" class="strategy-params">
                            <div class="section-title-base mt-8">📊 回测结果</div>
                            <div class="custom-bt-grid">
                                <div class="custom-bt-item"><span class="text-sm-tertiary">标的</span><b>{{ customBtResult.symbols.length }}</b></div>
                                <div class="custom-bt-item"><span class="text-sm-tertiary">区间</span><b>{{ customBtResult.dates[0] }} → {{ customBtResult.dates[1] }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">年化</span><b>{{ customBtResult.metrics.annual_return_pct }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">最大回撤</span><b>{{ customBtResult.metrics.max_drawdown_pct }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">夏普</span><b>{{ customBtResult.metrics.sharpe }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">胜率</span><b>{{ customBtResult.metrics.win_rate_pct }}%</b></div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest'" class="card">
                        <div class="card-title">{{ t('research.backtest') }}</div>
                        <!-- v3.2.0-T21: 回测参数 -->
                        <div class="flex-wrap-gap-12-mb16-c">
                            <el-select class="w-180" v-model="backtestStrategy" size="small" placeholder="选择策略">
                                <el-option v-for="s in backtestStrategies" :key="s.id" :label="s.name" :value="s.id" />
                            </el-select>
                            <el-date-picker class="w-260" v-model="backtestRange" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="YYYY-MM-DD"/>
                            <el-input-number class="w-140" v-model="backtestCapital" size="small" :min="10000" :step="50000"/>
                            <el-button type="primary" size="small" @click="runBacktest" :loading="backtestRunning">▶ 运行回测</el-button>
                        </div>
                        <!-- 回测结果 -->
                        <template v-if="backtestResult">
                            <div class="grid-auto-fit-140-mb16">
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ backtestResult.total_return_pct }}%</div>
                                    <div class="stat-label">总收益率</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ backtestResult.annual_return_pct }}%</div>
                                    <div class="stat-label">年化收益</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ backtestResult.max_drawdown_pct }}%</div>
                                    <div class="stat-label">最大回撤</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ backtestResult.sharpe_ratio }}</div>
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
                        <div class="card-title">{{ t('research.backtestHistory') }}</div>
                        <qc-state-panel type="empty" icon="📝" title="敬请期待" desc="回测记录功能正在建设中，敬请关注"></qc-state-panel>
                    </div>
                    <!-- v3.17.2 FR-3.17.2 市场复盘代码起点 -->
                    <div v-else-if="currentSubPage === 'market-review'" class="card market-review-card">
                        <div class="card-title">{{ t('research.marketReview') }}</div>

                        <!-- ===== 列表视图 ===== -->
                        <template v-if="!selectedReviewDate">
                            <qc-state-panel v-if="marketReviewLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="marketReviewError" type="error" title="复盘列表加载失败"
                                desc="请检查网络后重试" @retry="loadMarketReviews"></qc-state-panel>
                            <qc-state-panel v-else-if="!marketReviews.length" type="empty" icon="📋" title="暂无市场复盘"
                                desc="尚未生成任何市场复盘报告"></qc-state-panel>
                            <div v-else class="market-review-list">
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
                    <!-- v3.17.7 (FR-3.17.7): 异动扫描 + 事件提醒 代码起点 -->
                    <div v-else-if="currentSubPage === 'scan'" class="card scan-card">
                        <div class="card-title">异动扫描</div>

                        <!-- ===== 扫描工具栏 ===== -->
                        <div class="scan-toolbar">
                            <el-select v-model="scanPool" size="small" class="scan-pool-select" aria-label="扫描范围" multiple collapse-tags placeholder="扫描范围">
                                <el-option label="当日入池" value="strategies"></el-option>
                                <el-option label="我的自选" value="watchlist"></el-option>
                            </el-select>
                            <el-button type="primary" size="small" @click="loadScan" :loading="scanLoading">刷新扫描</el-button>
                        </div>

                        <div v-if="scanLoading" class="scan-loading">
                            <qc-state-panel type="loading"></qc-state-panel>
                            <div class="scan-loading-tip">正在扫描 {{ scanPoolLabel }}（首次约几秒，请稍候）...</div>
                        </div>
                        <qc-state-panel v-else-if="scanError" type="error" title="异动扫描失败"
                            desc="请检查数据源后重试" @retry="loadScan"></qc-state-panel>
                        <template v-else-if="scanResult && scanResult.moves && scanResult.moves.length">
                            <div v-if="scanResult.note" class="scan-note">{{ scanResult.note }}</div>
                            <div class="scan-meta">扫描日期：{{ scanResult.date || '--' }}，异动 {{ scanResult.moves.length }} 只</div>
                            <div v-for="group in scanGroups" :key="group.label" class="scan-group">
                                <div class="scan-group-title">{{ group.label }}
                                    <span class="scan-group-count">{{ group.moves.length }}</span>
                                </div>
                                <div class="scan-group-list">
                                    <div v-for="m in group.moves" :key="m.code" class="scan-row" tabindex="0" role="button"
                                         :aria-label="'查看 ' + m.name + ' ' + m.code"
                                         @click="showStockDetail(m.code)"
                                         @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                        <div class="scan-row-main">
                                            <span class="scan-row-name">{{ m.name }}</span>
                                            <span class="scan-row-code">{{ m.code }}</span>
                                            <span class="scan-row-close">{{ formatPrice(m.close) }}</span>
                                            <span class="scan-row-chg" :class="chgClass(m.pct_chg)">{{ chgText(m.pct_chg) }}</span>
                                        </div>
                                        <div class="scan-row-tags">
                                            <span v-for="tag in m.labels" :key="tag" class="scan-tag"
                                                  :class="'scan-tag-' + tagClass(tag)">{{ tag }}</span>
                                            <span v-if="m.volume_ratio" class="scan-row-vol">量比 {{ m.volume_ratio }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <qc-state-panel v-else type="empty" title="暂无异动"
                            :desc="(scanResult && scanResult.note) || '当前扫描范围暂无符合条件的异动个股'"></qc-state-panel>

                        <!-- ===== 事件提醒 ===== -->
                        <div class="scan-section">
                            <div class="scan-section-head">
                                <div class="scan-section-title">事件提醒</div>
                                <el-select v-model="eventScope" size="small" class="scan-pool-select" aria-label="事件范围">
                                    <el-option label="自选股" value="watchlist"></el-option>
                                    <el-option label="组合持仓" value="portfolio"></el-option>
                                </el-select>
                            </div>
                            <qc-state-panel v-if="eventsLoading" type="loading"></qc-state-panel>
                            <template v-else-if="eventsData && eventsData.events && eventsData.events.length">
                                <div v-if="eventsData.note" class="scan-note">{{ eventsData.note }}</div>
                                <div v-for="g in eventGroups" :key="g.type" class="scan-group">
                                    <div class="scan-group-title">{{ g.type }}
                                        <span class="scan-group-count">{{ g.events.length }}</span>
                                    </div>
                                    <div class="scan-group-list">
                                        <div v-for="ev in g.events" :key="ev.code + '-' + ev.title + '-' + ev.date" class="scan-event-row">
                                            <span class="scan-event-stock">{{ ev.name }} ({{ ev.code }})</span>
                                            <span class="scan-event-title">{{ ev.title }}</span>
                                            <span class="scan-event-date">{{ ev.date || '--' }}</span>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <div v-else class="scan-empty-state">{{ (eventsData && eventsData.note) || '近期无事件' }}</div>
                        </div>
                    </div>
                    </template>
                </div>`,setup(){const w=m("qcState");if(!w)return{};const b=a([]),P=a(!1),A=a(!1),L=a(""),x=a(null),E=a(!1),O=a(!1);async function r(){P.value=!0,A.value=!1;try{const i=await fetch("/api/market/reviews?limit=30").then(U=>U.json());i&&i.success?b.value=Array.isArray(i.data)?i.data:[]:A.value=!0}catch(i){console.error("[market-review] 复盘列表加载失败:",i),A.value=!0}finally{P.value=!1}}function T(i){L.value=i,_(i)}function f(){L.value="",x.value=null,O.value=!1}async function _(i){E.value=!0,O.value=!1,x.value=null;try{const U=i?"/api/market/review?date="+encodeURIComponent(i):"/api/market/review",xe=await fetch(U).then(nt=>nt.json());xe&&xe.success?x.value=xe.data:O.value=!0}catch(U){console.error("[market-review] 复盘详情加载失败:",U),O.value=!0}finally{E.value=!1}}function D(i){return i>0?"up":i<0?"down":"flat"}function M(i){return i==null||isNaN(Number(i))?"—":(i>0?"+":"")+Number(i).toFixed(2)+"%"}function g(i){const U={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(i||{}).map(function(xe){const nt=xe[0],ot=xe[1],_t=!ot||ot==="unavailable"||ot==="数据不可达";return{label:U[nt]||nt,value:_t?"数据不可达":ot,unavailable:_t}})}const q=a(["strategies","watchlist"]),p=a(!1),H=a(!1),Y=a(null),se=a("watchlist"),re=a(!1),F=a(null);async function S(){p.value=!0,H.value=!1;try{const i="/api/market/scan?pool="+encodeURIComponent((q.value||[]).join(",")||"all"),U=await fetch(i).then(xe=>xe.json());U&&U.success?Y.value=U.data||{moves:[],note:""}:H.value=!0}catch(i){console.error("[scan] 异动扫描失败:",i),H.value=!0}finally{p.value=!1}}async function N(){re.value=!0;try{const i="/api/market/events?scope="+encodeURIComponent(se.value),U=await fetch(i).then(xe=>xe.json());U&&U.success?F.value=U.data||{events:[],note:""}:F.value={events:[],note:"事件数据暂不可用"}}catch(i){console.error("[scan] 事件提醒加载失败:",i),F.value={events:[],note:"事件数据暂不可用"}}finally{re.value=!1}}e(function(){const i={strategies:"当日入池",watchlist:"自选股"},U=(q.value||[]).map(function(xe){return i[xe]}).filter(Boolean);return U.length?U.join("+"):"所选范围"});const k=e(function(){const i=["涨停","连板","放量","异动振幅","跌停"],U=Y.value&&Y.value.moves||[],xe=[];return i.forEach(function(nt){const ot=U.filter(function(_t){return(_t.labels||[]).indexOf(nt)>=0});ot.length&&xe.push({label:nt,moves:ot})}),xe}),l=e(function(){const i={};return(F.value&&F.value.events||[]).forEach(function(U){(i[U.type]=i[U.type]||[]).push(U)}),Object.keys(i).map(function(U){return{type:U,events:i[U]}})});function C(i){return i==="跌停"?"down":i==="涨停"||i==="连板"?"up":"neutral"}function y(i){return i==null||isNaN(Number(i))?"--":Number(i).toFixed(2)}function z(i){return i>0?"up":i<0?"down":"flat"}function W(i){return i==null||isNaN(Number(i))?"—":(i>0?"+":"")+Number(i).toFixed(2)+"%"}const R=a([]),t=a(!1),d=a(!1),I=a(""),K=a({}),c=a(!1),h=a(""),s=a(""),n=a([]),o=a([]),J=a(""),le=a(""),ie=a(!0),$=a(!0),B=a("20:00"),j=a("default"),me=a(!1),oe=a(""),ve=e(function(){return R.value.find(function(i){return i.id===I.value})||null});async function ce(i,U){U=U||{},U.headers=Object.assign({},U.headers||{});const xe=localStorage.getItem("token")||"";return xe&&(U.headers.Authorization="Bearer "+xe),fetch(i,U)}async function Ce(){t.value=!0,d.value=!1;try{const i=await ce("/api/strategies").then(function(U){return U.json()});R.value=Array.isArray(i)?i:[],R.value.length&&!I.value&&(I.value=R.value[0].id,pe())}catch(i){console.error("[research] 策略列表加载失败:",i),d.value=!0}finally{t.value=!1}}function pe(){const i=ve.value;i&&(K.value={},i.schema.forEach(function(U){K.value[U.key]=U.default}),s.value="",De(),be(),he())}async function be(){if(!I.value){o.value=[];return}try{const i=await ce("/api/strategies/"+I.value+"/profiles").then(function(U){return U.json()});o.value=i&&i.data&&i.data.profiles||[],J.value=""}catch(i){console.error("[research] 方案列表加载失败:",i),o.value=[]}}async function Q(){const i=(le.value||"").trim();if(!i){window._core&&window._core.showToast("请输入方案名称");return}try{const U=await ce("/api/strategies/"+I.value+"/profiles",{method:"POST",body:JSON.stringify({name:i,params:K.value})}).then(function(xe){return xe.json()});if(U&&U.detail){window._core&&window._core.showToast(String(U.detail));return}le.value="",await be(),window._core&&window._core.showToast("方案已保存")}catch(U){console.error("[research] 方案保存失败:",U),window._core&&window._core.showToast("方案保存失败")}}function de(){const i=o.value.find(function(U){return U.id===J.value});i&&(Object.keys(i.params||{}).forEach(function(U){K.value[U]=i.params[U]}),window._core&&window._core.showToast("已应用方案: "+i.name))}async function we(){if(J.value)try{await ce("/api/strategies/"+I.value+"/profiles/"+J.value,{method:"DELETE"}).then(function(i){return i.json()}),await be(),window._core&&window._core.showToast("方案已删除")}catch(i){console.error("[research] 方案删除失败:",i)}}async function he(){try{const i=await ce("/api/strategies/governance").then(function(nt){return nt.json()}),xe=(i&&i.data&&i.data.strategies||{})[I.value]||{};ie.value=xe.enabled!==!1,B.value=xe.schedule||"20:00",j.value=xe.universe==="all"?"all":"default",$.value=xe.show_in_calendar!==!1,oe.value=xe.last_holdings||""}catch(i){console.error("[research] 纳管状态加载失败:",i)}}async function X(){try{await ce("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const i={};return i[I.value]={enabled:ie.value,schedule:B.value,universe:j.value,show_in_calendar:$.value},i}()})}).then(function(i){return i.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(i){console.error("[research] 纳管更新失败:",i)}}async function te(){if(I.value){me.value=!0;try{const i=await ce("/api/strategies/"+I.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:h.value||void 0})}).then(function(U){return U.json()});if(i&&i.detail){window._core&&window._core.showToast(String(i.detail));return}window._core&&window._core.showToast("持仓已生成"),await he()}catch(i){console.error("[research] run-once 失败:",i),window._core&&window._core.showToast("持仓生成失败")}finally{me.value=!1}}}function ae(){oe.value&&window.open(oe.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function Pe(){const i=ve.value;if(!i)return;const U=(le.value||"").trim()||i.name+"-副本";ke(U,Object.assign({},K.value)),window._core&&window._core.showToast("已复制为副本方案: "+U)}async function ke(i,U){try{await ce("/api/strategies/"+I.value+"/profiles",{method:"POST",body:JSON.stringify({name:i,params:U})}).then(function(xe){return xe.json()}),await be()}catch(xe){console.error("[research] 副本保存失败:",xe)}}async function De(){if(I.value)try{const i=await ce("/api/strategies/"+I.value+"/runs?limit=5").then(function(U){return U.json()});n.value=Array.isArray(i)?i:[]}catch{n.value=[]}}async function Ue(){if(I.value){c.value=!0;try{const i=await ce("/api/strategies/"+I.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:K.value,as_of:h.value||void 0})}).then(function(U){return U.json()});i&&i.status==="success"?De():alert("运行失败: "+(i.detail||JSON.stringify(i)))}catch(i){console.error("[research] 策略运行失败:",i),alert("运行失败: "+i.message)}finally{c.value=!1}}}async function qe(){if(I.value)try{const i=Object.keys(K.value).map(function(xe){return encodeURIComponent(xe)+"="+encodeURIComponent(K.value[xe])}).join("&"),U=await ce("/api/strategies/"+I.value+"/ptrade-code?"+i).then(function(xe){return xe.json()});U&&U.code?s.value=U.code:alert("导出失败: "+(U.detail||JSON.stringify(U)))}catch(i){console.error("[research] PTrade 导出失败:",i),alert("导出失败: "+i.message)}}function Z(){if(!s.value)return;const i=document.createElement("textarea");i.value=s.value,document.body.appendChild(i),i.select();try{document.execCommand("copy")}catch{}document.body.removeChild(i)}u(function(){return w.currentPage.value+"/"+w.currentSubPage.value},function(i){i==="research/market-review"&&!L.value&&r(),i==="research/scan"&&(S(),N()),i==="research/quant-research"&&Ce()},{immediate:!0});const ne=a("mom20"),ge=a(!1),_e=a(!1),je=a(null),Le=a(null),Ie=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}];a('{"top_n":[10,20,30]}'),a(null),a(""),a(!1);async function Je(){ge.value=!0;try{const i=await ce("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:I.value||"multi_factor",factor_key:ne.value,params:K.value||{}})}).then(function(xe){return xe.json()}),U=i&&i.report?i.report.n1||{}:{};je.value=U}catch(i){console.error("[research] 因子IC分析失败:",i),alert("因子 IC 分析失败: "+i.message)}finally{ge.value=!1}}async function $e(){_e.value=!0;try{const i=await ce("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:I.value||"multi_factor",factor_key:ne.value,params:K.value||{}})}).then(function(U){return U.json()});i&&i.layers?Le.value=i:alert("分层回测: "+(i.message||"无数据"))}catch(i){console.error("[research] 分层回测失败:",i),alert("分层回测失败: "+i.message)}finally{_e.value=!1}}const dt=a([]),Qe=a(null),et=a(null),tt=a(null),gt=a(""),Ct=a(!1),Xe=a(!1),Ae=a(""),Et=a(""),Ge=a("");function lt(){const i=localStorage.getItem("quant_token")||"";return i?{Authorization:"Bearer "+i,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Ve(){try{const i=await fetch("/api/strategies/variants",{headers:lt()}).then(function(U){return U.json()});dt.value=i&&i.data&&i.data.variants||[]}catch(i){console.error("[i3a] 加载 variants 失败:",i)}}async function ht(){if(!I.value){Ae.value="请先在量化研究选择母本策略";return}Xe.value=!0,Ae.value="";try{const i=await fetch("/api/strategies/"+I.value+"/clone",{method:"POST",headers:lt(),body:JSON.stringify({name:(le.value||"").trim()||void 0,params:Object.assign({},K.value)})}).then(function(xe){return xe.json()});if(i&&i.detail){Ae.value=String(i.detail);return}const U=i&&i.data;U&&U.sid&&(Qe.value=U.sid,Ae.value="已复制为新策略: "+U.name,await Ve(),await Ne(U.sid))}catch(i){console.error("[i3a] 复制失败:",i),Ae.value="复制失败: "+i.message}finally{Xe.value=!1}}async function ut(i){Qe.value=i,Ae.value="",gt.value="",await Ne(i)}async function Ne(i){try{const U=await fetch("/api/strategies/"+i+"/selection-spec",{headers:lt()}).then(function(xe){return xe.json()});U&&U.data&&(et.value=Object.assign({},U.data.spec),tt.value=U.data.fields,Et.value=(U.data.spec.industry_scope||[]).join(","),Ge.value=(U.data.spec.market_cap_range||[]).join(","))}catch(U){console.error("[i3a] 加载 spec 失败:",U)}}async function Mt(){if(!(!Qe.value||!et.value))try{et.value.industry_scope=Et.value?Et.value.split(/[,，]/).map(function(U){return U.trim()}).filter(Boolean):[],et.value.market_cap_range=Ge.value?Ge.value.split(/[,，]/).map(Number).filter(function(U){return!isNaN(U)}):[];const i=await fetch("/api/strategies/"+Qe.value+"/selection-spec",{method:"PUT",headers:lt(),body:JSON.stringify({spec:et.value})}).then(function(U){return U.json()});i&&i.data&&i.data.spec&&(et.value=i.data.spec,Ae.value="SelectionSpec 已保存")}catch(i){console.error("[i3a] 保存 spec 失败:",i),Ae.value="保存失败"}}async function It(){if(!Qe.value){Ae.value="请先选择/创建微调策略";return}Xe.value=!0,Ae.value="";try{const i=await fetch("/api/strategies/"+Qe.value+"/run-once",{method:"POST",headers:lt(),body:"{}"}).then(function(U){return U.json()});Ae.value=i&&i.detail?String(i.detail):"持仓已生成: "+(i&&i.data&&i.data.symbols||0)+" 只"}catch(i){console.error("[i3a] run-once 失败:",i),Ae.value="生成持仓失败"}finally{Xe.value=!1}}async function zt(){if(!Qe.value){Ae.value="请先选择/创建微调策略";return}et.value||await Ne(Qe.value),Ct.value=!0,Ae.value="";try{const i=await fetch("/api/strategies/"+Qe.value+"/ai-trade-code",{method:"POST",headers:lt(),body:JSON.stringify({spec:et.value})}).then(function(U){return U.json()});if(i&&i.detail){Ae.value=String(i.detail);return}i&&i.data&&(gt.value=i.data.code||"",i.data.api_errors&&i.data.api_errors.length?Ae.value="生成成功(含 API 校验告警 "+i.data.api_errors.length+" 条)":Ae.value="AI 交易码已生成, 已通过矩阵内校验")}catch(i){console.error("[i3a] AI 交易码失败:",i),Ae.value="AI 生成失败: "+i.message}finally{Ct.value=!1}}function Tt(){if(gt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(gt.value).then(function(){Ae.value="代码已复制"});else{const i=document.createElement("textarea");i.value=gt.value,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),Ae.value="代码已复制"}}const Rt=a(""),qt=a(""),wt=a([]),vt=a(""),Ze=a(""),ze=a(""),mt=a(null),pt=a(!1),kt=a(!1),at=a(!1);function ft(){const i=localStorage.getItem("quant_token")||"";return i?{Authorization:"Bearer "+i,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Pt(){try{const i=await fetch("/api/strategies/custom",{headers:ft()}).then(function(U){return U.json()});wt.value=i&&i.data&&i.data.customs||[]}catch(i){console.error("[i3b] 加载自定义策略失败:",i)}}async function st(){if(!qt.value.trim()){ze.value="请描述策略思路";return}pt.value=!0,ze.value="";try{const i=await fetch("/api/strategies/custom",{method:"POST",headers:ft(),body:JSON.stringify({name:Rt.value.trim()||"自定义策略",prompt:qt.value})}).then(function(U){return U.json()});if(i&&i.detail){ze.value=String(i.detail);return}i&&i.data&&(Ze.value=i.data.code||"",ze.value="AI 代写成功: "+i.data.sid+(i.data.api_errors&&i.data.api_errors.length?" (API 告警 "+i.data.api_errors.length+" 条)":" (校验通过)"),await Pt())}catch(i){console.error("[i3b] AI 代写失败:",i),ze.value="AI 代写失败: "+i.message}finally{pt.value=!1}}async function yt(){if(vt.value)try{const i=await fetch("/api/strategies/custom/"+vt.value+"/code",{headers:ft()}).then(function(U){return U.json()});i&&i.data&&(Ze.value=i.data.code||"",ze.value="")}catch(i){console.error("[i3b] 读取代码失败:",i)}}async function Bt(){if(!vt.value){ze.value="请先选择自定义策略";return}kt.value=!0,ze.value="";try{const i=await fetch("/api/strategies/custom/"+vt.value+"/backtest",{method:"POST",headers:ft(),body:"{}"}).then(function(U){return U.json()});if(i&&i.detail){ze.value=String(i.detail);return}i&&i.data&&(mt.value=i.data,ze.value="回测完成")}catch(i){console.error("[i3b] 回测失败:",i),ze.value="回测失败: "+i.message}finally{kt.value=!1}}async function At(){if(!vt.value){ze.value="请先选择自定义策略";return}at.value=!0,ze.value="";try{const i=await fetch("/api/strategies/custom/"+vt.value+"/ai-optimize",{method:"POST",headers:ft(),body:JSON.stringify({backtest:mt.value})}).then(function(U){return U.json()});if(i&&i.detail){ze.value=String(i.detail);return}i&&i.data&&(Ze.value=i.data.code||"",ze.value="AI 优化完成"+(i.data.api_errors&&i.data.api_errors.length?" (API 告警 "+i.data.api_errors.length+" 条)":" (校验通过)"))}catch(i){console.error("[i3b] AI 优化失败:",i),ze.value="AI 优化失败: "+i.message}finally{at.value=!1}}function Ot(){if(Ze.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Ze.value).then(function(){ze.value="代码已复制"});else{const i=document.createElement("textarea");i.value=Ze.value,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),ze.value="代码已复制"}}return{...w,marketReviews:b,marketReviewLoading:P,marketReviewError:A,selectedReviewDate:L,marketReviewDetail:x,marketReviewDetailLoading:E,marketReviewDetailError:O,loadMarketReviews:r,openMarketReview:T,backToMarketReviewList:f,loadMarketReviewDetail:_,marketReviewChgClass:D,marketReviewChgText:M,marketReviewSrcEntries:g,scanPool:q,scanLoading:p,scanError:H,scanResult:Y,eventScope:se,eventsLoading:re,eventsData:F,loadScan:S,loadEvents:N,scanGroups:k,eventGroups:l,strategies:R,strategiesLoading:t,strategiesError:d,activeStrategyId:I,activeStrategy:ve,paramValues:K,strategyRunning:c,ptradeCode:s,strategyRuns:n,loadStrategies:Ce,onStrategyChange:pe,runActiveStrategy:Ue,exportActivePtradeCode:qe,copyPtradeCode:Z,profiles:o,profileSelect:J,profileName:le,loadProfiles:be,saveProfile:Q,applyProfile:de,deleteProfile:we,govEnabled:ie,govSchedule:B,govUniverse:j,govRunning:me,lastHoldings:oe,loadGov:he,updateGov:X,runOnceActive:te,openLastHoldings:ae,cloneStrategy:Pe,govShowCalendar:$,factorKey:ne,factorIcLoading:ge,factorLayerLoading:_e,factorIcReport:je,factorLayerResult:Le,factorOptions:Ie,runFactorIc:Je,runFactorLayer:$e,variants:dt,variantSelected:Qe,variantSpec:et,specFields:tt,aiCode:gt,aiCodeLoading:Ct,variantBusy:Xe,variantMsg:Ae,loadVariants:Ve,cloneNewStrategy:ht,selectVariant:ut,loadVariantSpec:Ne,saveVariantSpec:Mt,runVariantOnce:It,genVariantAiCode:zt,copyVariantCode:Tt,customName:Rt,customPrompt:qt,customs:wt,customSelected:vt,customCode:Ze,customMsg:ze,customBtResult:mt,customGenLoading:pt,customBtLoading:kt,customOptLoading:at,loadCustoms:Pt,genCustomCode:st,loadCustomCode:yt,runCustomBacktest:Bt,runCustomOptimize:At,copyCustomCode:Ot,tagClass:C,formatPrice:y,chgClass:z,chgText:W}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(b,P,A,L,x){var E=A>0?A:1,O=typeof x=="number"&&x>=0?x:a,r=Math.max(0,L),T=Math.max(0,b),f=Math.max(0,P),_=Math.max(0,Math.floor(T/E)-O),D=Math.min(r,Math.ceil((T+f)/E)+O);return{startIndex:_,endIndex:D}}function u(b,P){return Math.max(0,b||0)*(P>0?P:0)}function m(b,P,A,L,x){var E=b||[],O=e(P,A,L,E.length,x),r=E.slice(O.startIndex,O.endIndex);return{visible:r,startIndex:O.startIndex,endIndex:O.endIndex,offsetY:O.startIndex*(L>0?L:1),totalHeight:u(E.length,L)}}function w(b,P){if(b){if(b.code!=null)return b.code;if(b.id!=null)return b.id;if(b.ts_code!=null)return b.ts_code}return P}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:u,sliceVisible:m,getRowKey:w}});(function(){const{ref:a,computed:e,onMounted:u,onBeforeUnmount:m}=Vue,w=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:w.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(b){const P=a(null),A=a(0),L=a(400),x=e(()=>(w.computeVisibleRange||function(q,p,H,Y,se){const re=H>0?H:1,F=se>=0?se:8,S=Math.max(0,Y);return{startIndex:Math.max(0,Math.floor(q/re)-F),endIndex:Math.min(S,Math.ceil((q+p)/re)+F)}})(A.value,L.value,b.rowHeight,b.items.length,b.buffer)),E=e(()=>b.items.length*b.rowHeight),O=e(()=>x.value.startIndex),r=e(()=>x.value.endIndex),T=e(()=>b.items.slice(O.value,r.value));function f(){P.value&&(A.value=P.value.scrollTop)}function _(){P.value&&(L.value=P.value.clientHeight||400)}function D(g,q){return w.getRowKey?w.getRowKey(g,q):g&&g.code!=null?g.code:g&&g.id!=null?g.id:q}let M=null;return u(()=>{_(),P.value&&typeof ResizeObserver<"u"&&(M=new ResizeObserver(()=>_()),M.observe(P.value))}),m(()=>{M&&M.disconnect()}),{scrollEl:P,totalHeight:E,startIndex:O,endIndex:r,visibleItems:T,onScroll:f,keyOf:D}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,u=60,m=500,w=10,b=88,P=350;function A(q,p,H,Y,se){se=se||{};var re=typeof se.threshold=="number"?se.threshold:a,F=typeof se.bias=="number"?se.bias:e,S=H-q,N=Y-p;return Math.abs(S)<re||Math.abs(S)<Math.abs(N)*F?"none":S<0?"left":"right"}function L(q,p,H){H=H||{};var Y=typeof H.threshold=="number"?H.threshold:u;return p-q>=Y}function x(q,p){p=p||{};var H=typeof p.threshold=="number"?p.threshold:m;return q>=H}var E=!1;function O(q,p){return q&&typeof q.closest=="function"?q.closest(p):null}function r(q){if(!q)return"";var p=q.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(p){var H=p.getAttribute&&p.getAttribute("data-copy-code");if(H)return H.trim();var Y=(p.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(Y)return Y[0]}var se=q.getAttribute&&q.getAttribute("data-copy-code");return se?se.trim():""}function T(q){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(q).then(function(){return!0}).catch(function(){return f(q)}):Promise.resolve(f(q))}function f(q){try{var p=document.createElement("textarea");return p.value=q,p.style.position="fixed",p.style.opacity="0",document.body.appendChild(p),p.select(),document.execCommand("copy"),document.body.removeChild(p),!0}catch{return!1}}function _(q){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(q)}function D(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function M(){var q=null,p=null,H=null;function Y(){p&&(p.timer&&clearTimeout(p.timer),p=null)}function se(C){H={el:C,until:Date.now()+P}}function re(C){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(y){y!==C&&y.classList.remove("swipe-open")}),q&&q.el!==C&&(q=null)}function F(C){var y=C.touches&&C.touches[0];if(y){var z=O(C.target,".swipe-reveal");z&&(q={el:z,x:y.clientX,y:y.clientY,moved:!1},C.stopPropagation());var W=O(C.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");W&&(Y(),p={el:W,x:y.clientX,y:y.clientY,timer:setTimeout(function(){var R=r(W);p=null,R&&(se(W),T(R).then(function(){D(),_("已复制代码 "+R)}))},m)})}}function S(C){if(q){var y=C.touches&&C.touches[0];if(y){var z=y.clientX-q.x,W=y.clientY-q.y;if(Math.abs(z)>8&&Math.abs(z)>Math.abs(W)*1.2){C.cancelable&&C.preventDefault(),q.moved=!0;var R=q.el.querySelector(".swipe-reveal-main")||q.el,t=Math.max(-b,Math.min(0,z));R.style.transition="none",R.style.transform="translateX("+t+"px)",C.stopPropagation()}if(p){var d=y.clientX-p.x,I=y.clientY-p.y;(Math.abs(d)>w||Math.abs(I)>w)&&Y()}}}}function N(C){if(Y(),!!q){var y=q.el,z=C.changedTouches&&C.changedTouches[0],W=q.x,R=q.y,t="none";z&&(t=A(W,R,z.clientX,z.clientY));var d=q.moved;q=null;var I=y.querySelector(".swipe-reveal-main")||y;I.style.transform="",I.style.transition="",t==="left"?(re(y),y.classList.add("swipe-open"),se(y)):(t==="right"||d)&&y.classList.remove("swipe-open"),C.stopPropagation()}}function k(){Y(),q=null}function l(C){if(H&&Date.now()<H.until){var y=H.el.contains(C.target)||C.target===H.el,z=C.target.closest&&C.target.closest(".swipe-reveal-actions");y&&!z&&(C.preventDefault(),C.stopPropagation(),H=null)}}document.addEventListener("touchstart",F,!0),document.addEventListener("touchmove",S,!0),document.addEventListener("touchend",N,!0),document.addEventListener("touchcancel",k,!0),document.addEventListener("click",l,!0)}function g(){E||typeof document>"u"||(E=!0,M())}return{judgeSwipe:A,judgePullToRefresh:L,judgeLongPress:x,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:u,LONG_PRESS_MS:m,LONG_PRESS_MOVE_SLOP:w,REVEAL_WIDTH:b,initGestures:g,_codeFromRow:r}});(function(){const a={empty:{icon:"📭",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"⚠️",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"📡",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function u(b){return a[b]||a.empty}function m(){const b=[];for(const P of e){const A=a[P];A.title||b.push(P+".title"),P!=="loading"&&!A.icon&&b.push(P+".icon"),typeof A.retry!="boolean"&&b.push(P+".retry"),typeof A.skeleton!="boolean"&&b.push(P+".skeleton")}return{ok:b.length===0,errors:b}}const w={VARIANTS:a,KEYS:e,resolve:u,validate:m};typeof window<"u"&&(window.QuantStatePanel=w),typeof Me<"u"&&Me.exports&&(Me.exports=w)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
                <div class="qc-state-icon">{{ icon }}</div>
                <div class="qc-state-title">{{ title }}</div>
                <div class="qc-state-desc" v-if="desc">{{ desc }}</div>
                <div class="qc-state-action" v-if="retryable">
                    <slot name="action">
                        <button class="qc-state-retry" type="button" @click="$emit('retry')">重试</button>
                    </slot>
                </div>
            </div>
        </div>
    `,setup(u){const m=a(()=>typeof e.resolve=="function"?e.resolve(u.type):{}),w=a(()=>u.icon||m.value.icon||""),b=a(()=>u.title||m.value.title||""),P=a(()=>u.desc||m.value.desc||""),A=a(()=>!!m.value.retry);return{icon:w,title:b,desc:P,retryable:A}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantCommandPanel=e()})(typeof self<"u"?self:void 0,function(){function a(r){return String(r||"").trim().toLowerCase()}function e(r,T){if(!r)return!0;const f=r.split(/\s+/).filter(Boolean);if(!f.length)return!0;const _=String(T||"").toLowerCase();return f.every(function(D){return _.indexOf(D)!==-1})}function u(){return{visible:!1,query:"",activeIndex:0}}function m(r,T){return T===void 0&&(T=!r.visible),r.visible=T,T&&(r.query="",r.activeIndex=0),r.visible}function w(r,T,f){const _=a(r);if(!T||!T.length)return[];const D=[];return T.forEach(function(M){const g=e(_,M.name)||e(_,M.key),q=(M.subPages||[]).filter(function(p){const H=f&&f[p]||p;return e(_,H)||e(_,p)});g&&D.push({type:"menu",menuKey:M.key,subPage:M.subPages&&M.subPages[0]||"",label:M.name,subLabel:"页面",icon:M.icon||"📄"}),q.forEach(function(p){D.push({type:"menu",menuKey:M.key,subPage:p,label:f&&f[p]||p,subLabel:M.name,icon:M.icon||"📄"})})}),D.slice(0,8)}function b(r,T){const f=a(r);return!T||!T.length?[]:T.filter(function(_){return!!(!f||e(f,_.label)||e(f,_.key)||_.keywords&&e(f,_.keywords))}).slice(0,8)}function P(r,T){const f=a(r);return!f||!T||!T.length?[]:T.filter(function(_){return e(f,_.code)||e(f,_.name)}).slice(0,8).map(function(_){return{type:"stock",code:_.code,name:_.name,label:_.name,subLabel:_.code,icon:"📈"}})}function A(r,T,f){const _=[],D=[];return f&&f.length&&(_.push({key:"stock",label:"📈 股票",items:f}),D.push.apply(D,f)),r&&r.length&&(_.push({key:"menu",label:"🧭 菜单",items:r}),D.push.apply(D,r)),T&&T.length&&(_.push({key:"command",label:"⚡ 指令",items:T}),D.push.apply(D,T)),{groups:_,flat:D}}function L(r,T,f){if(T<=0)return 0;const _=((r||0)+f)%T;return _<0?T-1:_}function x(r,T,f,_){const D=w(r,T,f).map(function(g){return{type:"menu",menuKey:g.menuKey,subPage:g.subPage,label:g.label,subLabel:g.subLabel,icon:g.icon,value:g.icon+" "+g.label+" · "+g.subLabel}}),M=b(r,_||[]).map(function(g){return{type:"command",key:g.key,label:g.label,icon:g.icon,subLabel:"指令",value:g.icon+" "+g.label}});return D.concat(M)}function E(r){return r?r.type==="menu"?{action:"menu",menuKey:r.menuKey,subPage:r.subPage}:r.type==="command"?{action:"command",key:r.key}:r.type==="stock"||r.code&&r.name?{action:"stock",code:r.code,name:r.name}:null:null}return{normalize:a,createPaletteState:u,toggleVisible:m,searchMenus:w,searchCommands:b,filterStocksLocal:P,mergeResults:A,moveIndex:L,buildSearchSuggestions:x,dispatchSearchSelection:E,DEFAULT_COMMANDS:[{key:"refresh",label:"刷新当前页数据",icon:"🔄",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"📥",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"🤖",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"💬",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"📁",keywords:"sidebar nav 侧边栏"}]}});(function(){const{ref:a,computed:e,watch:u,nextTick:m,inject:w}=Vue,b=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
      <el-dialog v-model="visible" width="580px" top="12vh" class="command-palette"
                 :show-close="false" :close-on-click-modal="true" :append-to-body="true">
        <div class="command-palette-body">
          <el-input ref="inputEl" v-model="query" size="large" placeholder="搜索股票 / 菜单 / 指令…"
                    @keydown.up.prevent="onUp" @keydown.down.prevent="onDown"
                    @keydown.enter.prevent="onEnter">
            <template #prefix><span class="opacity-6">🔍</span></template>
          </el-input>

          <div class="command-groups" v-if="results.flat.length">
            <div v-for="g in results.groups" :key="g.key" class="command-group">
              <div class="command-group-label">{{ g.label }}</div>
              <div v-for="item in g.items" :key="itemKey(item)" class="command-item"
                   :class="{active: isActive(item)}" @click="execute(item)" @mouseenter="setActive(item)">
                <span class="command-item-icon" v-html="sanitizeHtml(item.icon || '')"></span>
                <span class="command-item-label">{{ item.label }}</span>
                <span class="command-item-sub">{{ item.subLabel }}</span>
              </div>
            </div>
          </div>
          <div v-else-if="query" class="command-empty">无匹配结果</div>
          <div v-else class="command-empty">输入关键词搜索股票、菜单或指令 · ↑↓ 选择 · Enter 执行 · Esc 关闭</div>
        </div>
      </el-dialog>
    `,setup(){const P=w("qcState");if(!P)return{};const A=a(""),L=e({get:()=>P.commandPaletteVisible.value,set:l=>{P.commandPaletteVisible.value=l}}),x=a(0),E=a([]),O=a(null),r=e(()=>{const l=(b.DEFAULT_COMMANDS||[]).map(function(y){return Object.assign({},y)});return Object.keys(P.themes.value||{}).forEach(function(y){const z=P.themes.value[y];l.push({key:"theme:"+y,label:"切换主题 · "+(z.name||y),icon:"🎨",keywords:"theme 主题"})}),l}),T=e(()=>P.menus.value||[]);function f(){const l=window.__quantModules&&window.__quantModules.pinyin;if(!l)return[];const C=[];return(P.watchlist&&P.watchlist.value||[]).forEach(function(y){C.push({code:y.code,name:y.name})}),(P.aiHistory&&P.aiHistory.value||[]).forEach(function(y){y&&y.stock_code&&C.push({code:y.stock_code,name:y.stock_name||y.stock_code})}),C.push.apply(C,l.getExtraStocks()),l.buildStockIndex(C)}function _(l){const C=window.__quantModules&&window.__quantModules.pinyin;return C?C.searchStocksByQuery(l,f()).map(function(y){return{type:"stock",code:y.code,name:y.name,label:y.name,subLabel:y.code,icon:"📈"}}):[]}function D(){const l=[],C=window.__quantModules&&window.__quantModules.recent;C&&C.getRecentViewed().slice(0,5).forEach(function(z){l.push({type:"stock",code:z.code,name:z.name||z.code,label:z.name||z.code,subLabel:"最近查看 · "+z.code,icon:"📈"})});const y=(P.watchlist&&P.watchlist.value||[]).slice(0,8).map(function(z){return{type:"stock",code:z.code,name:z.name||z.code,label:z.name||z.code,subLabel:"我的自选 · "+z.code,icon:"📈"}});return l.concat(y)}const M=e(()=>{const l=A.value;if(!l)return b.mergeResults([],[],D());const C=b.searchMenus(l,T.value,P.subPageNames),y=b.searchCommands(l,r.value),z=E.value;return b.mergeResults(C,y,z)}),g=e(()=>M.value);function q(l){return g.value.flat[x.value]===l}function p(l){x.value=g.value.flat.indexOf(l)}function H(l){return(l.type||"")+":"+(l.code||l.menuKey||l.key||l.label)}let Y=null;function se(){const l=A.value.trim();if(l.length<1){E.value=[];return}Y&&clearTimeout(Y),Y=setTimeout(function(){const C=_(l);E.value=C,x.value=0,P.searchStocks(l,function(y){if(A.value.trim()!==l)return;const z=y.map(function(t){return{type:"stock",code:t.code,name:t.name,label:t.name,subLabel:t.code,icon:"📈"}}),W={},R=[];C.forEach(function(t){W[t.code]||(W[t.code]=!0,R.push(t))}),z.forEach(function(t){W[t.code]||(W[t.code]=!0,R.push(t))}),E.value=R,x.value=0})},200)}function re(){x.value=b.moveIndex(x.value,g.value.flat.length,1)}function F(){x.value=b.moveIndex(x.value,g.value.flat.length,-1)}function S(){const l=g.value.flat[x.value];l&&N(l)}function N(l){P.commandPaletteVisible.value=!1,l.type==="menu"?P.navigateTo(l.menuKey,l.subPage):l.type==="stock"?P.showStockDetail(l.code,l.name):l.type==="command"&&k(l.key)}function k(l){if(l==="refresh"){const C=P.currentPage.value;C==="strategies"?P.loadDashboardData().catch(function(){}):C==="calendar"?P.refreshCalendarData().catch(function(){}):C==="ai"&&P.loadAiHistory().catch(function(){})}else l==="export"?P.exportCSV():l==="batch"?P.showBatchEvaluate.value=!0:l==="ai"?P.openAiFab():l==="sidebar"?P.toggleSidebar():l.indexOf("theme:")===0&&P.changeTheme(l.slice(6))}return u(L,function(l){l&&(A.value="",E.value=[],x.value=0,m(function(){O.value&&O.value.focus&&O.value.focus()}))}),u(A,se),{visible:L,query:A,results:g,inputEl:O,sanitizeHtml:P.sanitizeHtml,onDown:re,onUp:F,onEnter:S,execute:N,isActive:q,setActive:p,itemKey:H}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
        <el-dialog v-model="showChangePassword" title="🔑 修改密码" width="420px" :close-on-click-modal="false">
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
        <el-dialog v-model="shortcutHelpVisible" title="⌨️ 键盘快捷键" width="420px">
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
        <el-dialog v-model="menuConfigDialog" :title="'⚙️ ' + (allGroups[editingGroup]?.name || '') + ' — 菜单访问授权'" width="600px">
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
                <el-button type="primary" @click="saveMenuConfig" :loading="savingGroup">💾 保存</el-button>
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
                    <el-select class="w-100" v-model="userForm.role">
                        <el-option label="管理员" value="admin" />
                        <el-option label="普通用户" value="user" />
                    </el-select>
                </el-form-item>
                <el-form-item label="所属组">
                    <el-select class="w-100" v-model="userForm.group">
                        <el-option v-for="(g, gid) in allGroups" :key="gid" :label="g.name" :value="gid" :disabled="userForm.username === 'admin' || userForm.username === 'guest'" />
                    </el-select>
                </el-form-item>
                <el-form-item label="默认主题">
                    <el-select class="w-100" v-model="userForm.theme">
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
        <el-dialog class="max-w-520" v-model="showBatchEvaluate" title="🤖 批量AI评估" width="95%">
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
                            <span class="text-sm-bold" v-if="status==='success' && batchResults[code] && batchResults[code].result" :style="{color:batchResults[code].result.level_color||'var(--text-primary)'}">{{ batchResults[code].result.total_score }}分</span>
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
    `,setup(){const e=a("qcState");if(!e)return{};const u=Vue.ref(0);let m=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,w=>{w?(u.value=0,m=setInterval(()=>{u.value++},1e3)):m&&(clearInterval(m),m=null)}),{...e,batchElapsed:u}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
        <el-dialog v-model="showAutoEvaluateSettings" title="⚙️ 自动评估设置" width="520px">
            <div class="p-15-0-25">
                <el-form label-width="120px">
                    <el-form-item label="启用自动评估">
                        <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" />
                    </el-form-item>
                    <template v-if="autoEvaluateConfig.enabled">
                        <el-form-item label="执行周期">
                            <el-select class="w-100" v-model="autoEvaluateConfig.schedule_type">
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
                    💾 保存设置
                </el-button>
            </template>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",template:`
        <el-dialog v-model="indexDetailVisible" title="📈 指数详情分析" width="800px" class="kline-dialog">
            <div v-if="indexDetail">
                <!-- 头部信息 -->
                <div class="detail-header">
                    <div>
                        <h3 class="text-xl-title">{{ indexDetail.name }} <span class="text-md-muted">{{ indexDetail.code }}</span></h3>
                        <div class="detail-subtitle">💹 {{ indexDetail.market }} 市场指数</div>
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
                <div class="section-title mt-20"><span>🕯️</span> K线图与均线</div>
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
                    <div v-if="indexKlineLoading" class="kline-loading">
                        <el-icon class="is-loading"><Loading /></el-icon> 加载K线数据中...
                    </div>
                </div>

                <!-- AI评估结果 -->
                <div v-if="indexAiResult" class="ai-result-box">
                    <div class="section-title"><span>🤖</span> AI智能指数评估结果</div>
                    <div class="ai-analysis" v-html="sanitizeHtml(indexAiResult.analysis)"></div>
                    <div class="mt-4">
                        <el-tag :type="indexAiResult.suggestion === '买入' ? 'success' : indexAiResult.suggestion === '卖出' ? 'danger' : 'warning'" size="large">
                            📌 {{ indexAiResult.suggestion || '暂无' }}
                        </el-tag>
                        <span class="ml-12-base-secondary">信心指数: {{ fmtNum(indexAiResult.confidence || 75, 0) }}%</span>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="mt-20-center">
                    <el-button class="w-200" type="primary" size="large" @click="doIndexAiEvaluate" :loading="indexAiLoading">
                        🔬 技术指标评估
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
                        <div class="text-3xl-mb8">🔐</div>
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
                        <div class="text-3xl-mb8">🤖</div>
                        <div class="text-md-semibold-600">AI 大模型配置</div>
                        <div class="color-tertiary-mt4">用于股票智能评估，支持 DeepSeek/OpenAI 等</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="提供商">
                            <el-select class="w-100" v-model="setupForm.aiProvider">
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
                        <div class="text-3xl-mb8">📊</div>
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
        <el-dialog v-model="showMerrillDetail" custom-class="merrill-detail-dialog" :title="(merrillDetailData.icon || '🔬') + ' ' + (merrillDetailData.name || '经济周期分析') + ' - 详细分析报告'" width="800px" class="merrill-detail-dialog">
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
                    <div class="section-title">📍 当前周期实时进度</div>
                    <div class="grid-4col-gap12">
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData._currentTiming.current_stage_start_date || '—' }}</div>
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
                        <span v-if="merrillDetailData._currentTiming.progress_percent > 0">进度：<b>{{ merrillDetailData._currentTiming.progress_percent }}%</b></span>
                        <span class="text-warning-semibold" v-if="merrillDetailData._nextPrediction?.next_stage">
                            ⚠️ →{{ merrillDetailData._nextPrediction.next_stage_name }} {{ (merrillDetailData._nextPrediction.transition_probability*100)?.toFixed(2) || 0 }}%
                        </span>
                    </div>
                    <!-- 过渡警告横幅 -->
                    <div class="warning-banner" v-if="merrillDetailData._currentTiming.progress_percent> 80 && merrillDetailData._nextPrediction?.transition_probability> 0.15">
                        <b class="color-badge-warning">⚠️ 周期切换预警</b>
                        <span class="color-secondary-ml8">
                            当前{{ merrillDetailData.name }}已进入后期（{{ merrillDetailData._currentTiming.progress_percent }}%），
                            预测下一阶段为<b class="color-warning">{{ merrillDetailData._nextPrediction.next_stage_name }}</b>
                            （概率 {{ (merrillDetailData._nextPrediction.transition_probability*100)?.toFixed(2) || 0 }}%）
                        </span>
                    </div>
                </div>

                <!-- 非活跃阶段：历史轮次 -->
                <div v-else-if="merrillDetailData._history && merrillDetailData._history.length> 0" class="detail-section mt-1">
                    <div class="section-title">📅 历史轮次（共 {{ merrillDetailData._history.length }} 轮）</div>
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
                            🔑 {{ h.trigger || '—' }}
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
                    <div class="section-title">📅 历史轮次</div>
                    <div class="text-center-tertiary-pad20x0">暂无历史记录</div>
                </div>

                <!-- 经济特征 -->
                <div class="detail-section">
                    <div class="section-title">📊 经济特征</div>
                    <div class="characteristics-grid">
                        <div v-for="(value, key) in merrillDetailData.characteristics" :key="key" class="char-item">
                            <div class="char-label">{{ getCharLabel(key) }}</div>
                            <div class="char-value">{{ value }}</div>
                        </div>
                    </div>
                </div>

                <!-- v2.0: 多维度评分详情 -->
                <div v-if="merrillData.dimension_scores" class="detail-section">
                    <div class="section-title">🎯 多维度评分详情</div>
                    <div class="flex-c-gap-10-mb8-base" v-for="dim in dimensionScoreList" :key="dim.key">
                        <span class="merrill-dim-label">{{ dim.label }}</span>
                        <div class="merrill-dim-track">
                            <div class="merrill-dim-fill" :style="{width: dim.barWidth + '%', background: dim.barColor}"></div>
                        </div>
                        <span class="merrill-dim-value" :style="{color: dim.scoreColor}">+{{ dim.scoreStr }}</span>
                        <span class="text-sm-medium" :style="{color: dim.color}">{{ dim.level }}</span>
                    </div>
                    <div class="warning-note" v-if="merrillData.early_warnings?.length">
                        <b class="color-el-danger">⚠️ 早期预警：</b>
                        <span class="inline-mr12" v-for="(w, i) in merrillData.early_warnings" :key="i">{{ w.type || w }}</span>
                    </div>
                </div>

                <!-- 资产配置建议 -->
                <div class="detail-section">
                    <div class="section-title">💼 资产配置建议</div>
                    <div class="allocation-grid">
                        <div v-for="(info, asset) in merrillDetailData.allocation" :key="asset" class="allocation-item">
                            <div class="allocation-header">
                                <span class="asset-name">{{ getAssetName(asset) }}</span>
                                <span class="asset-rank" :style="{backgroundColor: getRankColor(info.rank)}">排名 #{{ info.rank }}</span>
                            </div>
                            <div class="allocation-advice">{{ info.advice }}</div>
                            <div class="allocation-return">预期收益：<span>{{ info.expected_return }}</span></div>
                        </div>
                    </div>
                </div>

                <!-- 行业配置建议 -->
                <div class="detail-section">
                    <div class="section-title">🏭 行业配置建议</div>
                    <div class="sector-list">
                        <div v-for="(advice, index) in merrillDetailData.sector_advice" :key="index" class="sector-item">
                            {{ advice }}
                        </div>
                    </div>
                </div>

                <!-- v3.7.13: 策略建议 -->
                <div v-if="merrillDetailData.strategy_mapping" class="detail-section">
                    <div class="section-title">📐 策略建议</div>
                    <div class="allocation-grid grid-2col-only">
                        <div class="allocation-item">
                            <div class="allocation-header">🏆 主推策略</div>
                            <div class="allocation-advice color-token-primary">
                                {{ (merrillDetailData.strategy_mapping.primary || []).join(' · ') }}
                            </div>
                        </div>
                        <div class="allocation-item">
                            <div class="allocation-header">📌 次选策略</div>
                            <div class="allocation-advice color-el-warning">
                                {{ (merrillDetailData.strategy_mapping.secondary || []).join(' · ') }}
                            </div>
                        </div>
                    </div>
                    <div class="note-box-sm">
                        💡 {{ merrillDetailData.strategy_mapping.rationale }}
                    </div>
                </div>

                <!-- 历史统计 -->
                <div class="detail-section">
                    <div class="section-title">📜 历史统计</div>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData.historical_stats?.avg_duration_months }}个月</div>
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
                    <div class="section-title">📚 典型历史案例</div>
                    <div class="case-list">
                        <div v-for="(cs, index) in merrillDetailData.case_studies" :key="index" class="case-item">
                            📌 {{ cs }}
                        </div>
                    </div>
                </div>

                <!-- 风险提示 -->
                <div class="detail-section risk-section">
                    <div class="section-title">⚠️ 风险提示</div>
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a,computed:e,ref:u,watch:m}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",template:`
        <el-dialog v-model="stockDetailVisible" :title="t('detail.title')" width="800px" class="kline-dialog">
            <!-- v3.16 (16.10-fix): 数据未就绪时显示加载态（弹窗已立即打开，避免接口慢导致延迟） -->
            <div v-if="stockDetailLoading && !stockDetail" class="empty-state p-48-0">
                <div class="empty-state-icon-xs">⏳</div>
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
                                {{ scoreDelta.value > 0 ? '+' : '' }}{{ scoreDelta.value }}
                            </span>
                        </div>
                        <div class="label">{{ stockDetail.score_data?.level || '未评估' }}</div>
                    </div>
                </div>
                <div class="detail-content">
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
                                <span class="ai-stage-icon">📡</span>
                            </div>
                            <div class="ai-stage-line" :class="{ done: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done' }"></div>
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'analyzing' || aiEvalStage === 'done' }">
                                <span class="ai-stage-icon">📊</span>
                            </div>
                            <div class="ai-stage-line" :class="{ done: aiEvalStage === 'analyzing' || aiEvalStage === 'done' }"></div>
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'done' }">
                                <span class="ai-stage-icon">🤖</span>
                            </div>
                        </div>
                        <div class="ai-stage-label">
                            <span class="ai-stage-text">{{ aiStageText }}</span>
                            <span v-if="aiEvalElapsed > 0" class="ai-stage-elapsed">· 已用时 {{ aiEvalElapsed }}s</span>
                        </div>
                    </div>
                    <!-- v3.15 (15.3): 评估失败提示 + 重试 -->
                    <div v-if="aiEvalError && !aiLoading" class="ai-eval-error">
                        <span class="ai-eval-error-icon">⚠️</span>
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
                                <span v-if="aiResult.model_used" class="ai-result-meta" title="模型">🧠 {{ aiResult.model_used }}</span>
                                <span v-if="aiResult.model_provider" class="ai-result-meta" title="厂商">{{ aiResult.model_provider }}</span>
                                <span v-if="aiResult.result && aiResult.result.provider && aiResult.result.provider !== (aiResult.model_provider || '')" class="ai-result-meta" title="引擎">{{ aiResult.result.provider }}</span>
                                <span v-if="aiResult.llm_latency_ms" class="ai-result-meta" title="LLM 延迟">⚡ {{ aiResult.llm_latency_ms }}ms</span>
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
                                        📈 上次{{ fmtNum(evalHistoryComparison.prevScore, 1) }}分 → 本次{{ fmtNum(evalHistoryComparison.currScore, 1) }}分
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
                                <div class="panel-title">🔬 九维度评分</div>
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
                                    <div class="factor-title-gold">⚠️ 风险</div>
                                    <div class="detail-text-primary" v-for="w in (aiResult?.result?.analysis?.weaknesses || [])" :key="w">• {{ w }}</div>
                                    <div class="muted-sm" v-if="!(aiResult?.result?.analysis?.weaknesses || []).length">-</div>
                                </div>
                                <div class="factor-card-info">
                                    <div class="factor-title-info">💡 建议</div>
                                    <div class="detail-text-primary" v-for="s in (aiResult?.result?.analysis?.suggestions || [])" :key="s">• {{ s }}</div>
                                    <div class="muted-sm" v-if="!(aiResult?.result?.analysis?.suggestions || []).length">-</div>
                                </div>
                            </div>
                            <!-- 信号归因条 -->
                            <div class="factor-note-box" v-if="aiResult.result.signal_attribution">
                                <div class="panel-title-mb8">📊 信号归因</div>
                                <div class="flex-gap-8-wrap">
                                    <span class="chip-info" v-if="aiResult.result.signal_attribution.technical">技术面 {{ fmtNum(aiResult.result.signal_attribution.technical, 0) }}%{{ aiResult.result.signal_attribution.technical_driver ? ' · '+aiResult.result.signal_attribution.technical_driver : '' }}</span>
                                    <span class="chip-success" v-if="aiResult.result.signal_attribution.fundamentals">基本面 {{ fmtNum(aiResult.result.signal_attribution.fundamentals, 0) }}%{{ aiResult.result.signal_attribution.fundamental_driver ? ' · '+aiResult.result.signal_attribution.fundamental_driver : '' }}</span>
                                    <span class="gold-chip" v-if="aiResult.result.signal_attribution.capital_flow">资金面 {{ fmtNum(aiResult.result.signal_attribution.capital_flow, 0) }}%{{ aiResult.result.signal_attribution.capital_flow_driver ? ' · '+aiResult.result.signal_attribution.capital_flow_driver : '' }}</span>
                                    <span class="gold-chip" v-if="!aiResult.result.signal_attribution.capital_flow && aiResult.result.signal_attribution.market_sentiment">资金面 {{ fmtNum(aiResult.result.signal_attribution.market_sentiment, 0) }}%</span>
                                </div>
                                <div class="text-sm-secondary-mt6" v-if="aiResult.result.signal_attribution.strongest_bullish">
                                    <span class="color-success">●</span> 最强看多: {{ aiResult.result.signal_attribution.strongest_bullish }}
                                    <span class="ml-12" v-if="aiResult.result.signal_attribution.strongest_bearish">🔴 最强看空: {{ aiResult.result.signal_attribution.strongest_bearish }}</span>
                                </div>
                            </div>
                            <!-- 狙击点卡片 -->
                            <div class="grid-3col-gap10-mt12" v-if="aiResult.result.analysis?.sniper_points">
                                <div class="factor-mini-info">
                                    <div class="text-xs-tertiary-mb4">🎯 理想买入</div>
                                    <div class="factor-mini-val-info">{{ fmtNum(aiResult.result.analysis.sniper_points.ideal_buy) }}</div>
                                </div>
                                <div class="factor-mini-danger">
                                    <div class="text-xs-tertiary-mb4">🛑 止损</div>
                                    <div class="factor-mini-val-danger">{{ fmtNum(aiResult.result.analysis.sniper_points.stop_loss) }}</div>
                                </div>
                                <div class="factor-mini-success">
                                    <div class="text-xs-tertiary-mb4">🏁 目标</div>
                                    <div class="factor-mini-val-success">{{ fmtNum(aiResult.result.analysis.sniper_points.take_profit) }}</div>
                                </div>
                            </div>
                            <!-- 仓位建议 -->
                            <div class="grid-2col-gap10-mt12" v-if="aiResult.result.analysis?.position_advice">
                                <div class="panel-box">
                                    <div class="text-xs-tertiary-mb4">👤 空仓者</div>
                                    <div class="text-sm-primary">{{ aiResult.result.analysis.position_advice.no_position }}</div>
                                </div>
                                <div class="panel-box">
                                    <div class="text-xs-tertiary-mb4">📦 持仓者</div>
                                    <div class="text-sm-primary">{{ aiResult.result.analysis.position_advice.has_position }}</div>
                                </div>
                            </div>
                            <!-- 数据质量提示 -->
                            <div class="factor-empty-note" v-if="aiResult.result.data_quality_note">
                                📋 {{ aiResult.result.data_quality_note }}
                            </div>
                        </div>
                        <div class="text-center-tertiary-pad40" v-else>
                            <div class="text-3xl-mb12">🤖</div>
                            <div v-if="aiResult">
                                <div class="mb-8">最近评估：{{ aiResult.result.level }}</div>
                                <div class="text-sm">🕐 {{ (lastEvalTime || aiResult.evaluate_time || '').split('T')[0] }} {{ ((lastEvalTime || aiResult.evaluate_time || '').split('T')[1] || '').split('.')[0] }}</div>
                            </div>
                            <div v-else>{{ t('detail.noEvalYet') }}</div>
                        </div>
                    </div>  <!-- close ai tab -->

                    <!-- Tab: AI 问股对话 -->
                    <div v-if="stockDetailTab === 'chat'">
                        <div class="card mb-12">
                            <div class="card-title m-0-0-12">💬 AI 智能问股</div>
                            <!-- Quick prompts -->
                            <div class="flex-wrap-gap-6-mb12">
                                <el-button size="small" @click="askStockQuick('trend')">📈 趋势分析</el-button>
                                <el-button size="small" @click="askStockQuick('fundamental')">📊 基本面</el-button>
                                <el-button size="small" @click="askStockQuick('comprehensive')">🔬 综合分析</el-button>
                            </div>
                            <!-- Chat messages -->
                            <!-- v3.16 (16.8): 历史消息惰性加载提示 -->
                            <div class="text-center-tertiary-pad12" v-if="stockChatLoading && stockChatMessages.length === 0">⏳ 加载历史消息中...</div>
                            <div class="scroll-300" v-else-if="stockChatMessages.length> 0">
                                <div class="mb-10" v-for="(msg, mi) in stockChatMessages" :key="mi">
                                    <div class="text-right" v-if="msg.role==='user'">
                                        <span class="chat-bubble-user">{{ msg.content }}</span>
                                    </div>
                                    <div class="flex-gap-6" v-else>
                                        <span>🤖</span>
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
                        <div v-if="factorLoading" class="factor-empty">{{ t('detail.factorLoading') }}</div>
                        <div v-else-if="factorError || !factorGroups.length" class="factor-empty">{{ t('detail.factorEmpty') }}</div>
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
                </div>
            </div>
        </el-dialog>
    `,setup(){const w=a("qcState");if(!w)return{};const b={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},P=e(()=>b[w.aiEvalStage.value]||""),A=e(()=>{const p=w.aiResult&&w.aiResult.value&&w.aiResult.value.result&&w.aiResult.value.result.level;return p?p==="强烈推荐"||p==="推荐"?"var(--el-success)":p==="谨慎推荐"?"var(--el-warning)":p==="中性"||p==="观望"?"var(--text-secondary)":p==="评估失败"||p==="无可用模型"?"var(--el-danger)":"var(--color-primary)":"var(--color-primary)"});function L(p){const H=document.createElement("textarea");H.value=p,H.style.position="fixed",H.style.opacity="0",document.body.appendChild(H),H.select(),document.execCommand("copy"),document.body.removeChild(H)}async function x(){const p=w.aiResult&&w.aiResult.value;if(!p||!p.result)return;const H=p.result.dimensions||{},Y=Object.entries(H).map(([re,F])=>`${re} ${Math.round(F)}分`).join(`
`),se=`【AI 智能评估】${p.result.level||""} ${p.result.total_score!=null?p.result.total_score:"—"}分
模型：${p.model_used||p.result.provider||"—"}

${p.result.detailed_report||""}

九维度评分：
${Y||"无"}`;try{await navigator.clipboard.writeText(se),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{L(se),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const E=u(!1),O=u(!1),r=u(null),T=u([]),f={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function _(p){return f[p]||"factor-sem-none"}async function D(){const p=w.stockDetail.value&&w.stockDetail.value.stock;if(p){E.value=!0,O.value=!1,T.value=[],r.value=null;try{const H=w.selectedDate.value?`?date=${w.selectedDate.value}`:"",Y=await fetch(`/api/calendar/stock/${p}/factors${H}`).then(S=>S.json()),se=Y&&Array.isArray(Y.factors)?Y.factors:[],re=[],F={};se.forEach(S=>{F[S.category]||(F[S.category]={category:S.category,items:[]},re.push(F[S.category])),F[S.category].items.push(S)}),T.value=re,r.value=Y&&Y.summary||null}catch{O.value=!0}finally{E.value=!1}}}m(w.stockDetailTab,p=>{p==="factor"&&w.stockDetail.value&&w.stockDetailVisible.value&&(D(),g())});const M=u(null);async function g(){try{const p=await fetch("/api/market/factor-ic").then(H=>H.json());M.value=p&&p.success&&p.data?p.data:{}}catch{M.value={}}}function q(p){if(!p||!p.n5)return"—";const H=p.n5.icir!=null?"ICIR "+p.n5.icir:"ICIR —";return p.n5.grade+" ("+H+")"}return{...w,aiStageText:P,levelRingColor:A,copyAiReport:x,factorLoading:E,factorError:O,factorSummary:r,factorGroups:T,factorSemClass:_,loadFactorPanel:D,factorIc:M,loadFactorIc:g,factorIcGrade:q}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
                <span v-if="evaluatedCodes.has(item.stock_code)" title="已AI评估" class="history-flag">🤖</span>
                <span v-if="klineLoadedCodes.has(item.stock_code)" title="已加载K线" class="history-flag">📈</span>
              </template>
            </div>
            <span v-if="type === 'history'" class="score-badge-small" :style="{background: item.result.level_color + '20', color: item.result.level_color}">
              <span class="score-num">{{ item.result.total_score }}</span>
              <span class="score-level">{{ item.result.level }}</span>
            </span>
            <span v-else class="score-badge-small chat-badge">
              <span class="score-num">{{ item.msg_count }}</span>
              <span class="score-level">条消息</span>
            </span>
          </div>
          <div class="history-footer">
            <span class="history-time">🕐 {{ timeText }}</span>
            <span class="history-provider">{{ providerIcon }} {{ providerText }}</span>
            <span v-if="type === 'history' && showDims" class="history-dims">🔬 {{ dimsText }}</span>
          </div>
        </div>
        <div class="history-actions">
          <el-button size="small" type="danger" text @click.stop="remove">🗑️</el-button>
        </div>
      </div>
    `,setup(u){const m=e("qcState");if(!m)return{};const w=a(()=>u.type==="history"?m.selectedHistoryIds.value.includes(u.item.id):m.selectedChatIds.value.includes(u.item.id)),b=a(()=>{const f=m.watchlistCodes.value.has(u.item.stock_code);return{icon:f?"⭐":"☆",label:f?"取消收藏":"加入收藏"}}),P=a(()=>u.type==="history"?"🤖":"💬"),A=a(()=>{var f;return u.type==="history"?((f=u.item.result)==null?void 0:f.provider)||"":u.item.first_msg||""}),L=a(()=>{var f,_;return`${((_=(f=u.item.result)==null?void 0:f.dimensions)==null?void 0:_.length)||9}维度分析`}),x=a(()=>{var _,D;const f=u.type==="history"?u.item.evaluate_time:u.item.created_at||"";return f?u.timeFormat==="datetime"?u.type==="history"?`${f.split("T")[0]} ${(f.split("T")[1]||"").split(".")[0]}`:`${f.split("T")[0]} ${((_=f.split("T")[1])==null?void 0:_.substring(0,5))||""}`:u.type==="history"?(f.split("T")[1]||"").split(".")[0]||f:((D=f.split("T")[1])==null?void 0:D.substring(0,5))||"":""});function E(){u.type==="history"?m.toggleSelectHistory(u.item.id):m.toggleSelectChat(u.item.id)}function O(){u.type==="history"?m.viewAiResult(u.item):m.viewChatSession(u.item)}function r(){u.type==="history"?m.deleteSingleHistory(u.item.id):m.deleteChatSession(u.item.id)}function T(f,_){m.toggleWatchlist(f,_)}return{isSelected:w,watchState:b,providerIcon:P,providerText:A,dimsText:L,timeText:x,toggleSelect:E,view:O,remove:r,toggleWatchlist:T,keyClick:m.keyClick,evaluatedCodes:m.evaluatedCodes,klineLoadedCodes:m.klineLoadedCodes}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:u}=Vue,{currentView:m,statusFilter:w,dashboardData:b,loadHealthMetrics:P,getLoadDashboardData:A,getLastRefreshTime:L,getFetchPoolSignals:x}=a,E=e(!1),O=e(""),r=new Map,T=e([]),f=e(""),_=e(""),D=e([]),M=window.__quantModules.core||{},g=typeof M.createTtlCache=="function"?M.createTtlCache(15e3):null;let q=0;function p(){const k=Date.now();k-q<5e3||(q=k,ElementPlus.ElMessage.success("有新数据，已更新"))}function H(k,l,C,y){!g||!l||typeof M.silentRefresh!="function"||M.silentRefresh({cache:g,key:l,fetchFn:async()=>{const z=await fetch(k);if(!z.ok)throw new Error("HTTP "+z.status);const W=await z.json();return C?C(W):W},ttl:g.defaultTtl,apply:y,onChanged:p,onError:()=>{}})}const Y=new Set;async function se(){var k;try{const C=await(await fetch("/api/dates")).json();T.value=((k=C.data)==null?void 0:k.dates)||C.dates||[],T.value.length>0&&(f.value=T.value[T.value.length-1]),_.value=new Date().toLocaleTimeString()}catch(l){console.error(l)}}async function re(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),_.value="刷新中...",r.clear(),await se(),await S(),_.value=new Date().toLocaleTimeString()}catch(k){console.error("数据刷新失败",k)}}function F(){if(!f.value)return;const l="/api/view/"+(m.value||"day")+"/"+f.value+"?status="+(w.value||"all")+"&format=csv";window.open(l,"_blank")}async function S(){if(!f.value)return;const k=`${m.value}_${f.value}`;if(Y.has(k))return;Y.add(k);const l=`/api/view/${m.value}/${f.value}?status=all`,C=g&&typeof M.makeCacheKey=="function"?M.makeCacheKey("GET",`/api/view/${m.value}/${f.value}`,{status:"all"}):null,y=W=>{D.value=W,r.set(k,W)};if(r.has(k)){y(r.get(k)),H(l,C,W=>W.stocks||[],y),Y.delete(k);return}const z=C&&g?g.get(C):void 0;if(z!==void 0){y(z),H(l,C,W=>W.stocks||[],y),Y.delete(k);return}E.value=!0,O.value={day:"日",week:"周",month:"月",year:"年"}[m.value]||m.value;try{const t=(await(await fetch(l)).json()).stocks||[];y(t),g&&C&&g.set(C,t)}catch{try{const t=await(await fetch(`/api/calendar/${f.value}/consensus`)).json();D.value=(t.consensus||[]).map(d=>({...d,code:d.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{E.value=!1}x(),Y.delete(k)}async function N(){const k=g&&typeof M.makeCacheKey=="function"?M.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(g){const l=g.get(k);if(l!==void 0){b.value=l,P().catch(()=>{}),H("/api/dashboard",k,C=>C.data||C,C=>{b.value=C,L().value=Date.now()});return}}await A()(),P().catch(()=>{}),g&&g.set(k,b.value)}return{loading:E,loadingView:O,viewCache:r,dates:T,selectedDate:f,lastLoadTime:_,consensus:D,loadDates:se,refreshCalendarData:re,exportCSV:F,loadConsensusData:S,loadDashboardCached:N}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:u,loadIndexKline:m,rememberDialogTrigger:w,menus:b,currentPage:P,currentSubPage:A,stockDetail:L,selectedDate:x}=a,E=ref({indices:[],market_sentiment:null});let O=null;const r=ref(!1),T=ref(null),f=ref(null),_=ref(!1);function D(){window.__quantModules.charts.disposeKline("stockKlineChart")}const M=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{M.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const g=ref(!1),q=ref(null),p=ref(!1),H=ref(0),Y=ref(0);async function se(){try{const d=await(await fetch("/api/market/overview")).json();E.value=d,re(d)}catch(t){console.error("获取市场行情失败:",t)}}function re(t){O&&clearInterval(O),t&&t.in_trading_hours&&(O=setInterval(se,6e5))}function F(t){w(),T.value=t,f.value=null,u.value="daily",S(t.code),window.__quantModules.charts.disposeKline("indexKlineChart"),r.value=!0,setTimeout(async()=>{await m("daily")},500)}async function S(t){try{const I=await(await fetch("/api/ai/index-eval/"+t)).json();I.success&&I.data&&(f.value=I.data)}catch(d){console.warn("[getIndexAiScore] cache check failed:",d)}}async function N(){if(T.value){_.value=!0;try{const d=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:T.value.code,index_name:T.value.name,current_price:T.value.close,pct_chg:T.value.pct_chg})})).json();d.success?f.value=d.data:ElementPlus.ElMessage.error(d.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{_.value=!1}}}function k(t){window.__quantModules.charts.zoomKline("stockKlineChart",t)}function l(){p.value=!0,setTimeout(()=>{p.value=!1},600)}function C(t,d){if(t===d){l();return}const I=800,K=performance.now(),c=d-t;g.value=!0,q.value={value:c,dir:c>0?"up":"down"},p.value=!0,setTimeout(()=>{p.value=!1},600),setTimeout(()=>{q.value=null},2300);function h(s){const n=s-K,o=Math.min(n/I,1),J=1-Math.pow(1-o,3),le=Math.round(t+c*J);L.value&&L.value.score_data&&(L.value.score_data.score=le),o<1?requestAnimationFrame(h):(L.value&&L.value.score_data&&(L.value.score_data.score=d),g.value=!1)}requestAnimationFrame(h)}function y(){if(!L.value||!L.value.score_data)return;const t=L.value.score_data.score;if(t==null)return;const d=600,I=performance.now();p.value=!0,setTimeout(()=>{p.value=!1},600);function K(c){const h=Math.min((c-I)/d,1),s=1-Math.pow(1-h,3),n=Math.round(t*s);L.value&&L.value.score_data&&(L.value.score_data.score=n),h<1?requestAnimationFrame(K):L.value&&L.value.score_data&&(L.value.score_data.score=t)}requestAnimationFrame(K)}async function z(){var I;if(!L.value||!L.value.stock)return;const t=L.value.stock,d=(I=L.value.score_data)==null?void 0:I.score;try{const K=new Date().toISOString().split("T")[0],c=x.value||K,s=await(await fetch(`/api/calendar/stock/${encodeURIComponent(t)}/score?date=${c}`)).json();if(s.success&&s.score_data){const n=s.score_data.score;L.value&&(L.value.score_data=s.score_data),d!=null&&n!==d?C(d,n):l()}else l()}catch(K){console.warn("[refreshStockScore] failed:",K)}}function W(t){M.value&&(H.value=t.touches[0].clientX,Y.value=t.touches[0].clientY)}function R(t){if(!M.value)return;const d=H.value-t.changedTouches[0].clientX,I=Y.value-t.changedTouches[0].clientY;if(Math.abs(d)>Math.abs(I)&&Math.abs(d)>80){const K=b.value.map(function(h){return h.key}),c=K.indexOf(P.value);d>0&&c<K.length-1?(P.value=K[c+1],A.value=""):d<0&&c>0&&(P.value=K[c-1],A.value="")}}return{marketData:E,marketRefreshTimer:O,fetchMarketData:se,indexDetailVisible:r,indexDetail:T,indexAiResult:f,indexAiLoading:_,showIndexDetail:F,loadCachedIndexEval:S,doIndexAiEvaluate:N,disposeStockKline:D,isMobile:M,zoomKlineRange:k,scoreAnimating:g,scoreDelta:q,scorePulse:p,triggerScorePulse:l,animateScoreChange:C,animateScoreEntrance:y,refreshStockScore:z,touchStartX:H,touchStartY:Y,onTouchStart:W,onTouchEnd:R}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:u,currentSubPage:m}=a,w=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),b=ref("idle"),P=ref("");async function A(){if(!w.value.webhook_url){P.value="请先输入Webhook地址";return}b.value="testing",P.value="";try{const o=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:w.value.webhook_url})})).json();o.success||o.status==="ok"?(P.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(P.value=o.message||"测试失败",ElementPlus.ElMessage.error(P.value))}catch{P.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}b.value="idle"}async function L(){try{const o=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}}const x=ref(!1);function E(){e("ai","chat_history"),x.value=!0,Vue.nextTick(()=>{const n=document.querySelector('input[placeholder*="输入问题"]');n&&n.focus()})}const O=ref([]),r=ref({});async function T(){try{const o=await(await fetch("/api/ai/recommend-strategies")).json();o.success&&(O.value=o.recommendations||[])}catch(n){console.warn("[loadStrategyRecommendations] failed:",n)}}async function f(){try{const o=await(await fetch("/api/ai/usage-stats")).json();o.success&&(r.value=o)}catch(n){console.warn("loadAiUsage failed:",n)}}const _=ref({}),D=ref([]),M=ref(7);async function g(){try{const o=await(await fetch("/api/system/monitor")).json();o.success&&(_.value=o)}catch(n){console.warn("loadSysMonitor failed:",n)}}const q=ref({});async function p(){try{const o=await(await fetch("/api/system/health-detail")).json();o.success&&(q.value=o)}catch(n){console.warn("loadHealthDetail failed:",n)}}async function H(){try{const o=await(await fetch(`/api/analytics/rank?days=${M.value}`)).json();o.success&&(D.value=o.rank||[])}catch(n){console.warn("loadAnalytics failed:",n)}}const Y=ref(!1);async function se(){if(!Y.value){Y.value=!0;try{const o=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return o&&o.success?o.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${o.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${o.date}）`):ElementPlus.ElMessage.error(o&&(o.detail||o.message)||"生成复盘失败"),p(),o}catch(n){ElementPlus.ElMessage.error("生成复盘失败: "+(n.message||""))}finally{Y.value=!1}}}const re=ref(null),F=ref(!1);async function S(){try{const o=await(await fetch("/api/ai/fact-check/latest")).json();re.value=o&&o.success&&o.data||null}catch(n){console.warn("loadFactCheck failed:",n)}}async function N(){if(!F.value){F.value=!0;try{const o=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return o&&o.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${o.data.pass_rate!=null?o.data.pass_rate+"%":"--"} (${o.data.checked} 个数字)`),S()):ElementPlus.ElMessage.error(o&&(o.detail||o.message)||"事实护栏抽查失败"),o}catch(n){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(n.message||""))}finally{F.value=!1}}}const k=ref([]),l=ref(!1);async function C(){try{const o=await(await fetch("/api/backup/list")).json();o.success&&(k.value=o.backups||[])}catch(n){console.error("加载备份列表失败",n)}}async function y(){l.value=!0;try{const o=await(await fetch("/api/backup/create",{method:"POST"})).json();o.success?(ElementPlus.ElMessage.success(o.message||"备份成功"),C()):ElementPlus.ElMessage.error(o.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{l.value=!1}}async function z(n){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${n} 恢复吗？当前数据将被覆盖。`,"⚠️ 恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(o){console.warn("[restoreBackup] confirm cancelled:",o);return}try{const J=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})})).json();J.success?(ElementPlus.ElMessage.success(J.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(J.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const W=ref(!1),R=ref(0),t=[{icon:"🗓️",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"🤖",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 🤖 按钮可随时快速问股。"},{icon:"📮",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function d(){localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{R.value=0,W.value=!0},800)}function I(){W.value=!1,localStorage.setItem("quant_tour_done","1")}function K(){W.value=!1,localStorage.setItem("quant_tour_done","1")}const c=ref(""),h=ref(!1);async function s(){if(!c.value||!c.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}h.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c.value.trim(),page:u.value+"/"+m.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(c.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{h.value=!1}}return{feishuConfig:w,feishuTestStatus:b,feishuTestMessage:P,testFeishuWebhook:A,saveFeishuConfig:L,aiFabHidden:x,openAiFab:E,strategyRecommendations:O,aiUsage:r,loadStrategyRecommendations:T,loadAiUsage:f,sysMonitor:_,analyticsRank:D,analyticsDays:M,loadSysMonitor:g,loadAnalytics:H,healthDetail:q,loadHealthDetail:p,reviewTriggering:Y,triggerMarketReview:se,factCheck:re,factCheckRunning:F,loadFactCheck:S,triggerFactCheck:N,backups:k,backupCreating:l,loadBackups:C,createBackup:y,restoreBackup:z,tourVisible:W,tourStep:R,tourSteps:t,maybeShowTour:d,skipTour:I,finishTour:K,feedbackText:c,feedbackSubmitting:h,submitFeedback:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:u,selectedDate:m,dates:w,loadConsensusData:b,hapticFeedback:P}=a,A=e(()=>({day:"天",week:"周",month:"月",year:"年"})[u.value]||"天"),L=e(()=>({day:"date",week:"week",month:"month",year:"year"})[u.value]||"date"),x=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[u.value]||"YYYY-MM-DD"),E=e(()=>!m.value||!w.value||w.value.length===0?!1:m.value>w.value[0]),O=e(()=>!m.value||!w.value||w.value.length===0?!1:m.value<w.value[w.value.length-1]);function r(D){P("light"),u.value=D;let M=m.value||w.value[w.value.length-1];if(D==="year"){const g=M.substring(0,4),q=w.value.find(p=>p.startsWith(g));m.value=q||M}else if(D==="month"){const g=M.substring(0,7),q=w.value.find(p=>p.startsWith(g));m.value=q||M}setTimeout(b,50)}function T(D){P("light");const M=m.value,g=w.value,q=g.indexOf(M);if(q<0)return;let p=1;u.value==="week"&&(p=5),u.value==="month"&&(p=22),u.value==="year"&&(p=250);const H=q+D*p;if(H>=0&&H<g.length){const Y=g[H];if(u.value==="month"){const se=Y.substring(0,7),re=g.find(F=>F.startsWith(se));m.value=re||Y}else if(u.value==="year"){const se=Y.substring(0,4),re=g.find(F=>F.startsWith(se));m.value=re||Y}else m.value=Y;b()}}function f(D){if(!w.value||w.value.length===0)return!1;const M=D.getFullYear(),g=String(D.getMonth()+1).padStart(2,"0"),q=String(D.getDate()).padStart(2,"0"),p=`${M}-${g}-${q}`;return!w.value.includes(p)}function _(D){D&&D.length>10&&(m.value=D.substring(0,10)),b()}return{viewUnit:A,datePickerType:L,dateFormat:x,canNavPrev:E,canNavNext:O,switchView:r,navigateDate:T,disabledDate:f,onDateChange:_}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:u,navigateTo:m,currentPage:w,currentView:b,navigateDate:P,switchView:A,getLoadDashboardData:L,refreshCalendarData:x,getLoadAiHistory:E,exportCSV:O,getShowBatchEvaluate:r,openAiFab:T,toggleSidebar:f,showStockDetail:_}=a,D=ref("");async function M(F,S){if(!F||F.trim().length<1){S([]);return}const N=window.QuantCommandPanel;let k=[];N&&e.value&&(k=N.buildSearchSuggestions(F,e.value,u,N.DEFAULT_COMMANDS));const l=window.__quantModules&&window.__quantModules.pinyin;l&&l.searchCoreStocks(F).forEach(function(C){k.push({value:C.code+" "+C.name,type:"stock",code:C.code,name:C.name,label:C.name,subLabel:C.code,icon:"📈"})});try{const y=await(await fetch("/api/search?q="+encodeURIComponent(F))).json();if(y.success&&y.results){const z=y.results.map(function(W){return{value:W.code+" "+W.name,type:"stock",code:W.code,name:W.name,label:W.name,subLabel:W.code,icon:"📈"}});S(k.concat(z))}else S(k)}catch(C){console.warn("[searchStocks] fetch failed:",C),S(k)}}function g(F){D.value="";const S=window.QuantCommandPanel,N=S?S.dispatchSearchSelection(F):null;if(N){if(N.action==="menu"){m(N.menuKey,N.subPage);return}if(N.action==="command"){q(N.key);return}N.action==="stock"&&typeof _=="function"&&_(N.code,N.name)}}function q(F){if(F==="refresh"){const S=w.value;S==="strategies"?L().catch(function(){}):S==="calendar"?x().catch(function(){}):S==="ai"&&E().catch(function(){})}else F==="export"?O():F==="batch"?r().value=!0:F==="ai"?T():F==="sidebar"&&f()}const p=ref(!1),H=ref(!1);function Y(F){if(!F)return!1;const S=F.tagName;return S==="INPUT"||S==="TEXTAREA"||S==="SELECT"||F.isContentEditable}function se(F){if(Y(F.target))return;const S=F.key.toLowerCase();if(F.ctrlKey&&S==="k"){F.preventDefault(),H.value=!0;return}if(F.ctrlKey&&S==="/"){F.preventDefault(),p.value=!p.value;return}if(!(F.ctrlKey||F.metaKey||F.altKey)){if(S>="1"&&S<="5"){const N=parseInt(S)-1,k=e.value[N];k&&m(k.key,k.subPages[0]||"");return}if(S==="r"&&re(),(S==="arrowleft"||S==="arrowright"||S==="arrowup"||S==="arrowdown")&&w.value==="calendar")if(F.preventDefault(),S==="arrowleft"||S==="arrowright")P(S==="arrowleft"?-1:1);else{const N=["day","week","month","year"].indexOf(b.value),k=["day","week","month","year"][(N+(S==="arrowup"?-1:1)+4)%4];A(k)}}}function re(){const F=w.value;F==="strategies"?L().catch(()=>{}):F==="calendar"?x().catch(()=>{}):F==="ai"&&E().catch(()=>{})}return{searchQuery:D,searchStocks:M,onSearchSelect:g,runGlobalCommand:q,shortcutHelpVisible:p,commandPaletteVisible:H,isTypingTarget:Y,handleGlobalKeydown:se,refreshCurrentPage:re}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:u,loadDates:m,loadDashboardData:w,loadHealthMetrics:b,loadConsensusData:P,applyTheme:A,maybeShowTour:L}=a,x=ref({username:"",password:""}),E=ref(!1),O=ref(!1),r=ref(!1),T=ref({oldPassword:"",newPassword:"",confirmPassword:""}),f=ref(!1),_=ref(!1),D=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-chat",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),M=ref(1);async function g(){try{(await(await fetch("/api/setup/status")).json()).needed&&(D.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-chat",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},M.value=1,_.value=!0)}catch(F){console.warn("[checkSetupWizard] failed:",F)}}async function q(){try{const F={new_password:D.value.newPassword,ai_key:D.value.aiKey,ai_provider:D.value.aiProvider,ai_model:D.value.aiModel,ai_endpoint:D.value.aiEndpoint,tushare_token:D.value.tushareToken},N=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)})).json();N.success?(_.value=!1,ElementPlus.ElMessage.success("初始化完成"),await u()):ElementPlus.ElMessage.error(N.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function p(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(_.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function H(){if(!x.value.username||!x.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}E.value=!0;try{const S=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x.value)})).json();S.success?(e.value=S.user,localStorage.setItem("quant_user",JSON.stringify(S.user)),localStorage.setItem("quant_token",S.data.access_token),A(S.user.theme||"tech-blue"),await u(),await m(),await w(),b().catch(()=>{}),await P(),ElementPlus.ElMessage.success("登录成功"),S.data&&S.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),L(),S.user.role==="admin"&&setTimeout(g,500)):ElementPlus.ElMessage.error(S.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{E.value=!1}}async function Y(){O.value=!0;try{const S=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();S.success?(e.value=S.user,localStorage.setItem("quant_user",JSON.stringify(S.user)),localStorage.setItem("quant_token",S.data.access_token),A(S.user.theme||"tech-blue"),await u(),await m(),await w(),b().catch(()=>{}),await P(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(S.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{O.value=!1}}function se(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function re(){if(!T.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!T.value.newPassword||T.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(T.value.newPassword!==T.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}f.value=!0;try{const F=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:T.value.oldPassword,new_password:T.value.newPassword})}),S=await F.json();F.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),r.value=!1,T.value={oldPassword:"",newPassword:"",confirmPassword:""},se()):ElementPlus.ElMessage.error(S.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{f.value=!1}}return{loginForm:x,logining:E,guestLogining:O,showChangePassword:r,changePasswordForm:T,changingPassword:f,showSetupWizard:_,setupForm:D,setupStep:M,checkSetupWizard:g,completeSetupWizard:q,resetSetupWizard:p,handleLogin:H,handleGuestLogin:Y,handleLogout:se,doChangePassword:re}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let u=null;const{strategyFilter:m,currentView:w,statusFilter:b,currentPage:P,currentSubPage:A,menus:L,currentUser:x,strategyFilterCounts:E,dates:O,selectedDate:r,consensus:T,loadConsensusData:f,fetchMerrillClock:_,fetchMarketData:D,loadWatchlist:M,loadAiHistory:g,preloadWatchlistKline:q,loadChatHistory:p,loadSystemStatus:H,checkTushareConnection:Y,loadSysMonitor:se,loadAnalytics:re,loadHealthDetail:F,loadHealthMetrics:S,loadAiUsage:N,loadFactCheck:k,loadAutoEvaluateConfig:l,loadDatasourceConfig:C,loadFeishuConfig:y,loadAiConfig:z,loadRateLimit:W,loadDataRefreshConfig:R,loadBackups:t,loadAllGroups:d,loadUsers:I,stockDetailTab:K,stockDetailVisible:c,stockKlineLoaded:h,loadStockKline:s,currentKlinePeriod:n,showMerrillDetail:o,indexDetailVisible:J,restoreDialogFocus:le}=a;e(m,ie=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(ie.selected)),localStorage.setItem("quant_strategy_filter_mode",ie.mode)},{deep:!0}),e([w,b],(ie,$)=>{ie[0]!==$[0]&&f()}),e([P,A],([ie,$])=>{var B;if($&&localStorage.setItem("quant_last_subpage",$),!$&&L.value.find(j=>j.key===ie)){const j=L.value.find(me=>me.key===ie);j&&j.subPages.length>0&&(A.value=j.subPages[0])}if(ie==="calendar"&&["daily","weekly","monthly","yearly"].includes($)){const j={daily:"day",weekly:"week",monthly:"month",yearly:"year"};j[$]&&w.value!==j[$]&&(w.value=j[$],O.value.length>0&&(r.value=O.value[O.value.length-1]||""),setTimeout(f,50))}ie==="calendar"&&$==="pool"&&(!T.value||T.value.length===0)&&(O.value.length>0&&!r.value&&(r.value=O.value[O.value.length-1]||""),setTimeout(f,50)),ie==="strategies"&&($==="merrill"&&_(),$==="market"&&D(),$==="consensus"&&(!T.value||T.value.length===0)&&setTimeout(f,50)),ie==="ai"&&($==="watchlist"&&(M(),g(),setTimeout(q,500)),$==="history"&&g(),$==="overview"&&(g(),M()),$==="chat_history"&&p()),ie==="system"&&((B=x.value)==null?void 0:B.role)==="admin"&&($==="status"&&(H(),Y()),$==="usage"&&(se(),re(),F(),S(),N(),k()),$==="autoeval"&&l(),$==="datasource"&&C(),$==="feature"&&(y(),z(),W(),R(),t()),$==="user"&&(d(),I())),ie==="system"&&$==="usage"?u||(u=setInterval(()=>{se(),re(),F(),S(),N()},3e4)):u&&(clearInterval(u),u=null)}),e(K,(ie,$)=>{ie==="kline"&&$&&$!=="kline"&&c.value&&(h.value=!1,setTimeout(async()=>{!await s(n.value)&&c.value&&K.value==="kline"&&setTimeout(()=>s(n.value),800)},50))}),e(o,ie=>{ie||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([c,J],([ie,$])=>{!ie&&!$&&le()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:u,menus:m,currentPage:w,currentSubPage:b,currentView:P,currentKlinePeriod:A,selectedDate:L,dates:x,loadDates:E,loadConsensusData:O,loadDashboardCached:r,appVersion:T,themes:f,fetchMarketData:_,fetchMerrillStages:D,fetchMerrillClock:M,loadAiConfig:g,loadAiVendors:q,loadAiCatalog:p,currentUser:H,loadUserConfig:Y,loadAutoEvaluateConfig:se,loadGroupConfig:re,loadUsers:F,loadAllGroups:S,loadAiHistory:N}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);const k=(K,c=3e3,h="")=>{const s=new Promise((n,o)=>setTimeout(()=>o(new Error("timeout")),c));return Promise.race([K,s]).catch(n=>{console.warn(`[init] ${h||"task"} failed:`,n.message)})},l=localStorage.getItem("quant_theme"),C=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};!l&&C.theme&&window.__quantModules&&window.__quantModules.preferences&&u(window.__quantModules.preferences.resolveTheme(C.theme)),l&&u(l),function(){var K=localStorage.getItem("quant_last_page");K&&m.value.some(function(n){return n.key===K})?w.value=K:C.default_view&&m.value.some(function(n){return n.key===C.default_view})&&(w.value=C.default_view);var c=localStorage.getItem("quant_last_subpage");c&&(b.value=c);var h=localStorage.getItem("quant_last_date");h&&(L.value=h);var s=localStorage.getItem("quant_last_view");s&&(P.value=s)}(),fetch("/api/health").then(K=>K.json()).then(K=>{K.version&&(T.value=K.version)}).catch(()=>{});const y=localStorage.getItem("quant_user"),z=localStorage.getItem("quant_token"),W=!!(y&&z),R=Promise.all([k(fetch("/api/themes").then(K=>K.json()).then(K=>{f.value=K.themes||[]}),2e3,"themes"),k(_(),3e3,"marketData"),k(D(),2e3,"merrillStages")]).then(()=>{k(M(),3e3,"merrillClock")});if(g(),q(),p(),!W||!H.value){await R;return}let t=!0;try{t=(await fetch("/api/users/me")).ok}catch{t=!1}if(!t){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),H.value=null;return}if(H.value){const K=H.value.theme||"",c=C.theme&&window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.resolveTheme(C.theme):"tech-blue";u(l||K||c)}if(window.__quantModules&&window.__quantModules.preferences){const K=window.__quantModules.preferences,c=await K.loadPreferences();var d=localStorage.getItem("quant_last_page");!d&&c.default_view&&m.value.some(function(h){return h.key===c.default_view})&&(w.value=c.default_view),!l&&c.theme&&u(K.resolveTheme(c.theme)),A&&(c.chart_period==="weekly"||c.chart_period==="monthly")&&(A.value=c.chart_period)}await Promise.all([k(Y(),2e3,"userConfig"),k(E(),2e3,"dates")]),se().catch(()=>{}),re().catch(()=>{});const I=w.value==="strategies"?k(r(),2e3,"dashboard"):k(O(),2e3,"consensus");await Promise.all([I,k(F(),2e3,"users"),k(N(),2e3,"aiHistory")]),S().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:u,onUnmounted:m,watch:w,nextTick:b}=Vue,P=a(!1),A=window.__quantModules&&window.__quantModules.i18n||{},L=A.SUPPORTED_LOCALES||["zh-CN","en"],x=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",E=a(L.indexOf(x)!==-1?x:"zh-CN");typeof A.bindLocale=="function"&&A.bindLocale(E);const O=typeof A.t=="function"?A.t:function(ee){return String(ee)};function r(ee){L.indexOf(ee)!==-1&&(E.value=ee,typeof A.setLocale=="function"&&A.setLocale(ee),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",ee))}function T(ee,Se){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(ee,Se):ee==null?"":String(ee)}function f(ee){(ee.key==="Enter"||ee.key===" "||ee.key==="Spacebar")&&(ee.preventDefault(),ee.currentTarget&&typeof ee.currentTarget.click=="function"&&ee.currentTarget.click())}let _=null;function D(){document.activeElement&&document.activeElement!==document.body&&(_=document.activeElement)}function M(){if(_&&_.isConnected)try{_.focus()}catch{}_=null}const g=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{g.value=!0}),window.addEventListener("offline",()=>{g.value=!1})),window.addEventListener("beforeunload",ee=>{if(P.value)return ee.preventDefault(),ee.returnValue="您有未保存的配置变更，确定要离开吗？",ee.returnValue});function q(ee="light"){typeof navigator<"u"&&navigator.vibrate&&(ee==="light"?navigator.vibrate(10):ee==="medium"?navigator.vibrate(20):ee==="heavy"&&navigator.vibrate([10,30,10]))}const p=useMerrillClock(),{merrillData:H,merrillStagesConfig:Y,showMerrillDetail:se,merrillDetailData:re,merrillClockConfig:F,merrillClockLastUpdated:S,merrillReevalResult:N,merrillReevalLoading:k,stages:l,indicatorList:C,dimensionScoreList:y,detailDimensionScoreList:z,confidenceColor:W,timelineStages:R,clockPosition:t,merrillProgressStyle:d,FULL_CYCLE_MONTHS:I,getStageAngle:K,getCycleProgress:c,getCurrentStageMonths:h,getStageTotalMonths:s,isStageCompleted:n,getCharLabel:o,getAssetName:J,getRankColor:le,fetchMerrillStages:ie,fetchMerrillClock:$,loadMerrillTimeline:B,showTimelineStage:j,merrillTimeline:me,timelineLoading:oe,showStageDetail:ve,saveMerrillClockConfig:ce,doMerrillReevaluate:Ce,startAutoRefresh:pe,stopAutoRefresh:be}=p,Q=window.__quantModules.icons.ICON_MAPS,{iconSystem:de}=window.__quantModules.icons.init(),we=window.__quantModules.icons.switchIconSystem,he=a(localStorage.getItem("sidebar_collapsed")==="1");function X(){he.value=!he.value,localStorage.setItem("sidebar_collapsed",he.value?"1":"0")}const te=a(localStorage.getItem("research_menu_enabled")!=="0");function ae(ee){te.value=ee,localStorage.setItem("research_menu_enabled",ee?"1":"0")}const Pe=a(null),ke=[{key:"strategies",name:"策略总览",icon:"📈",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",icon:"🗓️",subPages:["daily","weekly","monthly","yearly","pool"]},{key:"ai",name:"智能评估",icon:"🤖",subPages:["overview","watchlist","history","chat_history"]},{key:"research",name:"策略研究",icon:"🔬",subPages:["quant-research","market-review","scan","strategy-write","custom-write","backtest","backtest-history"]},{key:"system",name:"系统配置",icon:"⚙️",subPages:["status","autoeval","datasource","feature","user","usage","about"],guestSubPages:["status","about"]}],De=e(()=>{var ct,Dt,fs;const ee=((ct=Ve.value)==null?void 0:ct.role)||"guest",Se=((Dt=Ve.value)==null?void 0:Dt.group)||ee,Ee=((fs=Pe.value)==null?void 0:fs[Se])||null,He=Q[de.value]||Q.emoji;let Re=ke.map(it=>{if(Ee&&Ee.visible_menus&&it.key in Ee.visible_menus&&!Ee.visible_menus[it.key])return null;const wa={...it,name:O("nav."+it.key)||it.name,icon:He[it.key]||it.icon};return Ee!=null&&Ee.visible_sub_pages&&(wa.subPages=it.subPages.filter(nc=>{const oc=it.key+"."+nc;return Ee.visible_sub_pages[oc]!==!1})),it.key==="system"&&ee==="guest"&&it.guestSubPages&&(wa.subPages=it.guestSubPages),wa}).filter(Boolean);return te.value||(Re=Re.filter(it=>it.key!=="research")),Re});async function Ue(){try{if(!localStorage.getItem("quant_token"))return;const Se=await fetch("/api/groups/my");if(Se.ok){const Ee=await Se.json();Pe.value={[Ee.group_id]:Ee.group}}}catch(ee){console.warn("loadGroupConfig:",ee)}}const qe=a("strategies"),Z=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"}];function ne(ee,Se=""){q("light"),qe.value=ee,tt.value=Se,localStorage.setItem("quant_last_subpage",Se)}const ge=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],_e=a("multifactor"),je=a(null),Le=a(1e5),Ie=a(!1),Je=a(null);let $e=null,dt=null;async function Qe(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const Se={initial_capital:Le.value||1e5};je.value&&je.value.length===2&&(Se.start_date=je.value[0],Se.end_date=je.value[1]),Ie.value=!0,Je.value=null;try{const Ee=await fetch("/api/strategies/"+_e.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Se)});if(!Ee.ok){const ct=await Ee.json().catch(()=>({}));throw new Error(ct.detail||"回测失败")}const He=await Ee.json(),Re=He.result||{};if(!Re.success)throw new Error(Re.message||"回测失败");He.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),Je.value={total_return_pct:((Re.total_return??0)*100).toFixed(2),annual_return_pct:((Re.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Re.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Re.sharpe_ratio??0).toFixed(2),win_rate:((Re.win_rate??0)*100).toFixed(2),out_sample:Re.outsample_total_return===void 0?"":((Re.outsample_total_return??0)*100).toFixed(2),overfit_warning:Re.overfit_warning||!1,message:Re.message||""},et(Re.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(Ee){ElementPlus.ElMessage.error(Ee.message||"回测失败")}finally{Ie.value=!1}}function et(ee){const Se=document.getElementById("backtestEquityChart");if(!Se||!ee||ee.length===0)return;const Ee=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,He=()=>{dt=ee,$e&&($e.dispose(),$e=null),$e=echarts.init(Se),$e.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Re=ee.map(Dt=>Dt.date||Dt[0]),ct=ee.map(Dt=>Dt.value??Dt[1]);$e.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Re,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:ct,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};Ee?Ee().then(He).catch(()=>{}):He()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){dt&&et(dt)}));const tt=a("overview"),gt=e(()=>{const ee=ke.find(Se=>Se.key===qe.value);return ee?ee.name:qe.value}),Ct=a(!1),Xe=a({}),Ae=a([]);a("");const Et=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),Ge=a("day"),lt=a("all"),Ve=a(null);(function(){if(typeof localStorage>"u")return;const ee=localStorage.getItem("quant_user"),Se=localStorage.getItem("quant_token");if(ee&&Se)try{Ve.value=JSON.parse(ee)}catch{}})();const ht=a(!1),ut=a("kline"),Ne=a(null),Mt=a(!1),It={overview:"概览",merrill:"美林时钟",market:"市场行情",consensus:"策略共识榜",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略",backtest:"策略回测","backtest-history":"回测记录","market-review":"市场复盘",scan:"异动扫描",status:"系统状态",autoeval:"自动评估",datasource:"数据源",feature:"功能配置",user:"用户与权限",about:"关于"},zt=a({}),Tt=a("tech-blue"),Rt=a(""),qt=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),wt=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),vt=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],Ze=a({day:[],week:[],month:[],year:[]}),ze=a({});function mt(ee){Tt.value=ee,window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&window.__quantModules.themes.applyTheme(ee),Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function pt(ee){mt(ee),Ve.value&&(fetch(`/api/users/${Ve.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:ee})}),Ve.value.theme=ee,localStorage.setItem("quant_user",JSON.stringify(Ve.value)))}const kt=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}],at=a("daily");(function(){try{const Se=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(Se==="weekly"||Se==="monthly")&&(at.value=Se)}catch{}})();const ft=a(!1),Pt=a(!1),st=a(!1),yt=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Bt=["MA5","MA10","MA20","MA60"],At=a(!1);let Ot=0;async function i(ee){if(!Ne.value)return!1;const Se=++Ot;ft.value=!0,at.value=ee;try{const He=await(await fetch(`/api/market/kline/${Ne.value.stock}?period=${ee}&limit=60`)).json();if(!He.success||!He.data)throw new Error(He.message||"数据获取失败");return ns(Ne.value.stock),Se!==Ot?!1:(ut.value!=="kline"||(st.value=!0,await b(),window.__quantModules.charts.renderKlineTo("stockKlineChart",He.data,ee,!1,{isMobile:Ke.value,onLegend:Re=>{Object.keys(yt.value).forEach(ct=>{ct in Re&&(yt.value[ct]=!!Re[ct])})}}),_t()),!0)}catch(Ee){return console.error("[kline] 加载失败:",Ne.value&&Ne.value.stock,ee,Ee),ut.value==="kline"&&(st.value=!1,ElementPlus.ElMessage.error("K线加载失败: "+(Ee&&Ee.message?Ee.message:"数据源不可达，请重试"))),!1}finally{ft.value=!1}}async function U(ee){if(Ye.value){Pt.value=!0,at.value=ee;try{const Ee=await(await fetch(`/api/market/kline/${Ye.value.code}?period=${ee}&limit=60`)).json();if(!Ee.success||!Ee.data)throw new Error(Ee.message||"数据获取失败");At.value=!0,await b(),window.__quantModules.charts.renderKlineTo("indexKlineChart",Ee.data,ee,!0,{isMobile:Ke.value,onLegend:He=>{Object.keys(yt.value).forEach(Re=>{Re in He&&(yt.value[Re]=!!He[Re])})}}),_t()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{Pt.value=!1}}}async function xe(ee){if(!st.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await i(ee)}async function nt(ee){if(!At.value){ElementPlus.ElMessage.info("请先加载K线");return}await U(ee)}function ot(ee){const Se=(ht.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(ue.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);Se&&Se.dispatchAction({type:"legendToggleSelect",name:ee})}function _t(){["K线","MA5","MA10","MA20","MA60"].forEach(ee=>{yt.value[ee]=!0})}async function jt(){const ee=await fetch("/api/system/metrics");if(!ee.ok)throw new Error("metrics "+ee.status);const Se=await ee.json(),Ee=Array.isArray(Se)?Se:Se&&Se.data_sources||[];Ae.value=Ee}const Ft=()=>ba,Ut=()=>La,ea=()=>kn,ta=()=>Wt,aa=()=>fa,sa=window.__quantAppLogic.data.create({currentView:Ge,statusFilter:lt,dashboardData:Xe,loadHealthMetrics:jt,getLoadDashboardData:Ft,getLastRefreshTime:Ut,getFetchPoolSignals:ea}),{loading:ia,loadingView:la,viewCache:na,dates:Nt,selectedDate:Fe,lastLoadTime:Kt,consensus:bt,loadDates:$t,refreshCalendarData:Gt,exportCSV:Yt,loadConsensusData:v,loadDashboardCached:V}=sa,G=window.__quantAppLogic.market.create({currentKlinePeriod:at,loadIndexKline:U,rememberDialogTrigger:D,menus:De,currentPage:qe,currentSubPage:tt,stockDetail:Ne,selectedDate:Fe}),{marketData:fe,indexDetailVisible:ue,indexDetail:Ye,indexAiResult:Te,indexAiLoading:Oe,fetchMarketData:rt,showIndexDetail:Be,loadCachedIndexEval:xt,doIndexAiEvaluate:St,disposeStockKline:ye,isMobile:Ke,zoomKlineRange:Ht,scoreAnimating:Lt,scoreDelta:We,scorePulse:oa,refreshStockScore:ra,animateScoreEntrance:ca,onTouchStart:gs,onTouchEnd:hs}=G,ys=window.__quantAppLogic.ops.create({navigateTo:ne,currentPage:qe,currentSubPage:tt}),{feishuConfig:ka,feishuTestStatus:bs,feishuTestMessage:ws,testFeishuWebhook:ks,saveFeishuConfig:_s,aiFabHidden:xs,openAiFab:_a,strategyRecommendations:Ss,aiUsage:Cs,loadStrategyRecommendations:xa,loadAiUsage:da,sysMonitor:Es,analyticsRank:Ms,analyticsDays:Ps,loadSysMonitor:Sa,loadAnalytics:Ca,healthDetail:Ds,loadHealthDetail:Ea,reviewTriggering:Ts,triggerMarketReview:Rs,factCheck:qs,factCheckRunning:As,loadFactCheck:Ma,triggerFactCheck:Ls,backups:Is,backupCreating:zs,loadBackups:Pa,createBackup:Os,restoreBackup:js,tourVisible:Fs,tourStep:Ns,tourSteps:Hs,maybeShowTour:Vs,skipTour:Bs,finishTour:Ks,feedbackText:Ws,feedbackSubmitting:Us,submitFeedback:$s}=ys,Gs=window.__quantAppLogic.nav.create({currentView:Ge,selectedDate:Fe,dates:Nt,loadConsensusData:v,hapticFeedback:q}),{viewUnit:Ys,datePickerType:Js,dateFormat:Qs,canNavPrev:Xs,canNavNext:Zs,switchView:Da,navigateDate:Ta,disabledDate:ei,onDateChange:ti}=Gs,ai=window.__quantAppLogic.keys.create({menus:De,subPageNames:It,navigateTo:ne,currentPage:qe,currentView:Ge,navigateDate:Ta,switchView:Da,getLoadDashboardData:Ft,refreshCalendarData:Gt,getLoadAiHistory:ta,exportCSV:Yt,getShowBatchEvaluate:aa,openAiFab:_a,toggleSidebar:X,showStockDetail:qa}),{searchQuery:si,searchStocks:ii,onSearchSelect:li,shortcutHelpVisible:ni,commandPaletteVisible:oi,handleGlobalKeydown:Ra}=ai;let Jt=0;async function qa(ee){const Se=++Jt;D(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(ee,""),va.value=null,at.value="daily",st.value=!1,ut.value="kline",Ne.value=null,Mt.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),ht.value=!0,b(()=>ca());try{const Ee=await fetch(`/api/calendar/stock/${ee}?date=${Fe.value}`);if(Se!==Jt)return;Ne.value=await Ee.json(),Ne.value&&Ne.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(ee,Ne.value.name)}catch{if(Se!==Jt)return;ElementPlus.ElMessage.error("加载失败"),Ne.value={stock:ee,name:"",total_days:0}}finally{Se===Jt&&(Mt.value=!1)}setTimeout(async()=>{await i("daily"),ra()},500),ls(ee)}const ri=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:st,stockDetailVisible:ht,stockDetailTab:ut,stockDetail:Ne,disposeStockKline:ye}):{},{chatSessions:ci,chatHistoryView:di,selectedChatIds:ui,expandedChatDates:vi,expandedChatMonths:mi,expandedChatStocks:pi,chatHistoryLoading:fi,chatHistoryError:gi,allChatSessionsFlat:hi,chatGroupedByDate:yi,chatGroupedByMonth:bi,chatGroupedByStock:wi,toggleSelectChat:ki,toggleSelectChatDate:_i,toggleSelectChatMonth:xi,toggleSelectChatStock:Si,toggleChatDateExpand:Ci,toggleChatMonthExpand:Ei,toggleChatStockExpand:Mi,selectAllChatSessions:Pi,deleteSelectedChatSessions:Di,viewChatSession:Ti,loadChatHistory:Aa,deleteChatSession:Ri,renderMarkdown:qi,stockChatInput:Ai,stockChatMessages:Li,stockChatLoading:Ii,stockChatError:zi,askStockSend:Oi,askStockQuick:ji}=ri,Fi=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:Ve,applyTheme:mt,allMenuDefs:ke,loadGroupConfig:Ue}):{},{userList:Ni,userSearch:Hi,groupFilter:Vi,userPageTab:Bi,expandedGroups:Ki,addMemberGroupMap:Wi,filteredUsers:Ui,toggleGroupExpand:$i,removeMemberFromGroupInline:Gi,addMemberToGroupInline:Yi,changeUserGroup:Ji,showAddUser:Qi,editingUser:Xi,userForm:Zi,savingUser:el,editingGroup:tl,menuConfigDialog:al,memberDialog:sl,groupEditForm:il,subPageCache:ll,showAddGroup:nl,addGroupForm:ol,savingGroup:rl,groupMembers:cl,addMemberUsername:dl,selectedMemberGroup:ul,subPageSectionExpanded:vl,toggleSubPageSection:ml,getGroupMemberCount:pl,getMenuEnabledCount:fl,groupCount:gl,openMemberManager:hl,loadGroupMembers:yl,addMemberToGroup:bl,removeMemberFromGroup:wl,availableUsersForGroup:kl,onParentToggle:_l,openMenuConfig:xl,saveMenuConfig:Sl,deleteGroupConfig:Cl,createGroup:El,allGroups:Ml,getGroupName:Pl,loadAllGroups:ua,loadUsers:Qt,editUser:Dl,saveUser:Tl,deleteUser:Rl,toggleUserEnabled:ql,resetUserPassword:Al}=Fi,Ll=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:bt,currentPage:qe,currentSubPage:tt,dashboardData:Xe,searchKeyword:Rt,statusFilter:lt,strategyFilter:wt,strategyFilterCounts:Ze}):{},{applyStrategyFilter:dc,statusCounts:Il,stockPool:zl,strategyDistribution:Ol,strategyPreviewCount:jl,saveStrategyFilter:Fl,filteredConsensusRank:Nl,currentPoolSize:Hl,filteredStrategyCounts:Vl,poolChangeBadge:Bl,timeBarPercent:Kl,lastRefreshTime:La,timeSinceRefresh:Wl,navigateToStrategyFilter:Ul}=Ll,$l=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:P,consensus:bt}):{},{aiResult:va,lastEvalTime:Gl,evalHistoryComparison:Yl,checklistItems:Jl,aiHistory:Ia,selectedHistoryIds:za,expandedDates:Oa,expandedMonths:Ql,expandedStocks:ja,poolSignals:Xl,toggleMonthExpand:Zl,aiHistoryView:en,selectedWatchlistCodes:Fa,showAutoEvaluateSettings:Na,savingConfig:Ha,autoEvaluateScope:Va,aiVendors:tn,aiCatalog:an,aiModelsError:sn,testingAllModels:ln,savingAiModels:nn,loadAiVendors:Ba,loadAiCatalog:Ka,saveAiVendors:Wa,saveAiModels:on,testVendorModel:rn,testAllVendorModels:cn,fetchVendorModels:dn,addVendorFromCatalog:un,addCustomVendor:vn,addVendorModel:mn,removeVendorModel:pn,removeVendor:fn,toggleVendorKeyReveal:gn,autoEvaluateConfig:ma,aiLoading:pa,aiEvalStage:Ua,aiEvalElapsed:$a,aiEvalError:Ga,showBatchEvaluate:fa,batchStocks:Ya,batchRunning:Ja,batchTotal:Qa,batchCompleted:Xa,batchCurrent:Za,batchStatuses:es,batchResults:ts,batchEvalErrors:as,aiConfig:ss,selectedPreset:hn,providerInfo:yn,aiPresets:uc,applyPreset:bn,onProviderChange:wn,fetchPoolSignals:kn,cancelPoolSignals:is,loadLastEvaluation:ls}=$l,_n=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:Ve,selectedDate:Fe,stockDetail:Ne,stockDetailTab:ut,stockDetailVisible:ht,stockDetailLoading:Mt,stockKlineLoaded:st,viewCache:na,animateScoreEntrance:ca,loadStockKline:i,refreshStockScore:ra,disposeStockKline:ye,aiHistory:Ia,aiLoading:pa,aiEvalStage:Ua,aiEvalElapsed:$a,aiEvalError:Ga,aiResult:va,autoEvaluateConfig:ma,autoEvaluateScope:Va,batchStocks:Ya,batchRunning:Ja,batchTotal:Qa,batchCompleted:Xa,batchCurrent:Za,batchStatuses:es,batchResults:ts,batchEvalErrors:as,expandedDates:Oa,expandedStocks:ja,savingConfig:Ha,selectedHistoryIds:za,selectedWatchlistCodes:Fa,showAutoEvaluateSettings:Na,showBatchEvaluate:fa}):{},{quickEvalStock:xn,evalStrategy:Sn,watchlistSort:Cn,watchlist:En,watchlistCodes:Mn,sortedWatchlist:Pn,getWatchlistScore:Dn,getLatestScore:vc,addSearchResult:Tn,evaluatedCodes:Rn,klineLoadedCodes:qn,markKlineLoaded:ns,watchlistSearch:An,watchlistResults:Ln,watchlistSearching:In,dataRefreshConfig:zn,dataRefreshReloading:On,dataRefreshSaving:jn,aiHistoryLoading:Fn,aiHistoryError:Nn,aiHistoryTotal:Hn,aiHistoryLoadingMore:Vn,hasMoreAiHistory:Bn,loadMoreAiHistory:Kn,watchlistLoading:Wn,doAiEvaluate:Un,loadAiHistory:Wt,deleteSingleHistory:$n,toggleSelectHistory:Gn,clearSelection:Yn,clearWatchlistSelection:Jn,batchReevaluateHistory:Qn,batchAddToWatchlist:Xn,batchRemoveWatchlist:Zn,toggleSelectWatchlist:eo,selectAllHistory:to,selectAllWatchlist:ao,deleteSelectedHistory:so,loadAutoEvaluateConfig:os,saveAutoEvaluateConfig:io,loadWatchlist:rs,addToWatchlist:lo,removeFromWatchlist:no,clearWatchlist:oo,toggleWatchlist:ro,showStockKline:co,preloadingKline:uo,preloadWatchlistKline:cs,watchlistEvaluate:vo,batchEvaluateWatchlist:mo,batchEvaluateSelected:po,searchStockForWatchlist:fo,loadDataRefreshConfig:ds,saveDataRefreshConfig:go,triggerDataReload:ho,triggerDataPull:yo,dataPullRunning:bo,groupedByDate:wo,aiHistoryByStock:ko,groupedByMonth:_o,aiHistoryStockCount:xo,scoreDistribution:So,quickEvaluate:Co,toggleDateExpand:Eo,toggleSelectDate:Mo,toggleSelectMonth:Po,toggleStockExpand:Do,toggleSelectStock:To,registerTrendChart:Ro,viewAiResult:qo,doBatchEvaluate:Ao,realtimeQuotes:Lo,realtimeDegraded:Io,realtimeWsState:zo,connectRealtimeQuotes:Oo,disconnectRealtimeQuotes:jo,quoteWarningFor:Fo,realtimeQuoteColor:No,realtimePriceText:Ho,realtimePctText:Vo,realtimeRatioText:Bo,REALTIME_DEGRADED_TEXT:Ko,REALTIME_FALLBACK_TEXT:Wo}=_n,Uo=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:ge}):{},{btStrategyOptions:$o,btSelectedStrategies:Go,toggleBtStrategy:Yo,btDateRange:Jo,btCapital:Qo,btCommissionRate:Xo,btIncludeBenchmark:Zo,btRunning:er,btResult:tr,btError:ar,btMetrics:sr,btAnnualReturns:ir,btTrades:lr,btStrategyMetricsRows:nr,btDrawdownRegion:or,runBacktestWorkbench:rr,exportBacktestCSV:cr,registerBacktestNavChart:dr,btFmtNum:ur}=Uo,vr=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:P,aiConfig:ss,aiLoading:pa,feishuConfig:ka,currentTheme:Tt,changeTheme:pt,autoEvaluateConfig:ma,iconSystem:de,researchMenuEnabled:te,currentUser:Ve,strategyFilter:wt,applyTheme:mt,dashboardData:Xe,lastRefreshTime:La,saveAiModels:on}):{},{configSaving:mr,globalConfigDirty:pr,lastSavedTime:fr,feishuConfigOriginal:mc,aiConfigOriginal:pc,tushareConfigOriginal:fc,tushareConfig:gr,tushareStatus:hr,datasourceConfig:yr,datasourceStatus:br,syncingData:wr,stockCount:kr,tradeDateCount:_r,aiStatus:xr,appVersion:us,showImportDialog:Sr,rateLimitConfig:Cr,rateLimitDirty:Er,rateLimitSaving:Mr,loadRateLimit:ga,saveRateLimit:Pr,saveAiConfig:Dr,testAiApi:Tr,exportConfig:Rr,importConfig:qr,saveAllConfig:Ar,resetAllConfig:Lr,testTushareConnection:Ir,checkTushareConnection:Xt,syncStockData:zr,loadTushareConfig:vs,loadDatasourceConfig:ms,saveDatasourceConfig:Or,testDatasource:jr,toggleDatasourceKeyReveal:Fr,loadFeishuConfig:ha,loadAiConfig:Zt,loadUserConfig:ps,loadSystemStatus:ya,loadDashboardData:ba}=vr,Nr=window.__quantAppLogic.auth.create({currentUser:Ve,loadUserConfig:ps,loadDates:$t,loadDashboardData:ba,loadHealthMetrics:jt,loadConsensusData:v,applyTheme:mt,maybeShowTour:Vs}),{loginForm:Hr,logining:Vr,guestLogining:Br,showChangePassword:Kr,changePasswordForm:Wr,changingPassword:Ur,showSetupWizard:$r,setupForm:Gr,setupStep:Yr,checkSetupWizard:Jr,completeSetupWizard:Qr,resetSetupWizard:Xr,handleLogin:Zr,handleGuestLogin:ec,handleLogout:tc,doChangePassword:ac}=Nr;window.__quantAppLogic.watch.register({strategyFilter:wt,currentView:Ge,statusFilter:lt,currentPage:qe,currentSubPage:tt,menus:De,currentUser:Ve,strategyFilterCounts:Ze,dates:Nt,selectedDate:Fe,consensus:bt,loadConsensusData:v,fetchMerrillClock:$,fetchMarketData:rt,loadWatchlist:rs,loadAiHistory:Wt,preloadWatchlistKline:cs,loadChatHistory:Aa,loadSystemStatus:ya,checkTushareConnection:Xt,loadSysMonitor:Sa,loadAnalytics:Ca,loadHealthDetail:Ea,loadHealthMetrics:jt,loadAiUsage:da,loadFactCheck:Ma,loadAutoEvaluateConfig:os,loadDatasourceConfig:ms,loadFeishuConfig:ha,loadAiConfig:Zt,loadRateLimit:ga,loadDataRefreshConfig:ds,loadBackups:Pa,loadAllGroups:ua,loadUsers:Qt,stockDetailTab:ut,stockDetailVisible:ht,stockKlineLoaded:st,loadStockKline:i,currentKlinePeriod:at,showMerrillDetail:se,indexDetailVisible:ue,restoreDialogFocus:M});const sc=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ra,applyTheme:mt,menus:De,currentPage:qe,currentSubPage:tt,currentView:Ge,currentKlinePeriod:at,selectedDate:Fe,dates:Nt,loadDates:$t,loadConsensusData:v,loadDashboardCached:V,appVersion:us,themes:zt,fetchMarketData:rt,fetchMerrillStages:ie,fetchMerrillClock:$,loadMerrillTimeline:B,showTimelineStage:j,merrillTimeline:me,timelineLoading:oe,loadAiConfig:Zt,loadAiVendors:Ba,loadAiCatalog:Ka,currentUser:Ve,loadUserConfig:ps,loadAutoEvaluateConfig:os,loadGroupConfig:Ue,loadUsers:Qt,loadAllGroups:ua,loadAiHistory:Wt}),{runOnMounted:ic}=sc;let Vt;w(qe,async ee=>{var Se;q("light"),localStorage.setItem("quant_last_page",ee),ee!=="calendar"&&typeof is=="function"&&is();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:ee})}).catch(()=>{})}catch(Ee){console.warn("pageView track failed:",Ee)}if(Vt&&(clearInterval(Vt),Vt=null),ee==="strategies")await V(),Vt=setInterval(()=>{V().catch(()=>{})},5*60*1e3);else if(ee==="calendar")Fe.value&&await v();else if(ee==="ai")xa(),da(),await Wt();else if(ee==="system"){if(!Fe.value){const He=await(await fetch("/api/dashboard")).json(),Re=He.data||He;Re.latest_date&&(Fe.value=Re.latest_date)}if(Fe.value){const Ee=["day","week","month","year"];for(const He of Ee)try{const ct=await(await fetch(`/api/view/${He}/${Fe.value}?status=all`)).json();Ze.value[He]=ct.stocks||[]}catch(Re){console.warn("loadConsensusData view load failed:",Re)}(!bt.value||bt.value.length===0)&&(bt.value=Ze.value.day||[])}((Se=Ve.value)==null?void 0:Se.role)==="admin"&&(await Qt(),await ha(),await vs(),await ya(),await Zt(),await ga(),Xt(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Xt,36e5)))}}),u(async()=>{await ic()}),pe(),B(),m(()=>{Vt&&clearInterval(Vt),window.removeEventListener("keydown",Ra)});function lc(ee,Se=2){return ee==null||ee===""||isNaN(Number(ee))?"--":Number(ee).toFixed(Se)}return{currentPage:qe,currentSubPage:tt,sidebarCollapsed:he,menus:De,fmtNum:lc,sanitizeHtml:T,keyClick:f,isOnline:g,currentUser:Ve,iconSystem:de,allMenuDefs:ke,t:O,locale:E,changeLanguage:r,currentPageName:gt,subPageNames:It,searchQuery:si,searchStocks:ii,onSearchSelect:li,selectedDate:Fe,onDateChange:ti,disabledDate:ei,refreshCalendarData:Gt,exportCSV:Yt,loading:ia,lastLoadTime:Kt,resetSetupWizard:Xr,showChangePassword:Kr,themes:zt,currentTheme:Tt,changeTheme:pt,handleLogout:tc,marketData:fe,merrillData:H,merrillTimeline:me,timelineLoading:oe,merrillStagesConfig:Y,fetchMerrillStages:ie,healthMetrics:Ae,feishuConfig:ka,feishuTestStatus:bs,feishuTestMessage:ws,shortcutHelpVisible:ni,shortcutHelpItems:Z,commandPaletteVisible:oi,tourVisible:Fs,tourStep:Ns,tourSteps:Hs,skipTour:Bs,finishTour:Ks,backups:Is,backupCreating:zs,loadBackups:Pa,createBackup:Os,restoreBackup:js,sysMonitor:Es,analyticsRank:Ms,analyticsDays:Ps,loadSysMonitor:Sa,loadAnalytics:Ca,healthDetail:Ds,loadHealthDetail:Ea,reviewTriggering:Ts,triggerMarketReview:Rs,factCheck:qs,factCheckRunning:As,loadFactCheck:Ma,triggerFactCheck:Ls,strategyRecommendations:Ss,aiUsage:Cs,loadStrategyRecommendations:xa,loadAiUsage:da,aiFabHidden:xs,openAiFab:_a,feedbackText:Ws,feedbackSubmitting:Us,submitFeedback:$s,backtestStrategies:ge,backtestStrategy:_e,backtestRange:je,backtestCapital:Le,backtestRunning:Ie,backtestResult:Je,runBacktest:Qe,btStrategyOptions:$o,btSelectedStrategies:Go,toggleBtStrategy:Yo,btDateRange:Jo,btCapital:Qo,btCommissionRate:Xo,btIncludeBenchmark:Zo,btRunning:er,btResult:tr,btError:ar,btMetrics:sr,btAnnualReturns:ir,btTrades:lr,btStrategyMetricsRows:nr,btDrawdownRegion:or,runBacktestWorkbench:rr,exportBacktestCSV:cr,registerBacktestNavChart:dr,btFmtNum:ur,fetchMarketData:rt,fetchMerrillClock:$,testFeishuWebhook:ks,saveFeishuConfig:_s,merrillClockConfig:F,merrillClockLastUpdated:S,merrillReevalResult:N,merrillReevalLoading:k,saveMerrillClockConfig:ce,doMerrillReevaluate:Ce,dataRefreshConfig:zn,dataRefreshReloading:On,dataRefreshSaving:jn,loadDataRefreshConfig:ds,saveDataRefreshConfig:go,triggerDataReload:ho,triggerDataPull:yo,dataPullRunning:bo,indexDetailVisible:ue,indexDetail:Ye,indexAiResult:Te,indexAiLoading:Oe,loadCachedIndexEval:xt,showIndexDetail:Be,doIndexAiEvaluate:St,klinePeriods:kt,currentKlinePeriod:at,klineLoading:ft,indexKlineLoading:Pt,stockKlineLoaded:st,indexKlineLoaded:At,loadStockKline:i,switchKlinePeriod:xe,loadIndexKline:U,switchIndexKlinePeriod:nt,zoomKlineRange:Ht,MA_LINES:Bt,klineMaVisible:yt,toggleKlineMa:ot,scoreAnimating:Lt,scoreDelta:We,scorePulse:oa,refreshStockScore:ra,animateScoreEntrance:ca,showMerrillDetail:se,merrillDetailData:re,showStageDetail:ve,getCharLabel:o,getAssetName:J,getRankColor:le,timelineStages:R,getStageAngle:K,getCycleProgress:c,getCurrentStageMonths:h,getStageTotalMonths:s,isStageCompleted:n,stages:l,indicatorList:C,dimensionScoreList:y,confidenceColor:W,views:Et,currentView:Ge,statusFilter:lt,loginForm:Hr,logining:Vr,guestLogining:Br,dashboardData:Xe,loadingView:la,dates:Nt,consensus:bt,searchKeyword:Rt,stockDetailVisible:ht,stockDetailTab:ut,stockDetail:Ne,stockDetailLoading:Mt,aiLoading:pa,aiEvalStage:Ua,aiEvalElapsed:$a,aiEvalError:Ga,showBatchEvaluate:fa,batchStocks:Ya,batchRunning:Ja,batchTotal:Qa,batchCompleted:Xa,batchCurrent:Za,batchStatuses:es,batchResults:ts,batchEvalErrors:as,aiConfig:ss,userList:Ni,showAddUser:Qi,editingUser:Xi,userForm:Zi,savingUser:el,userSearch:Hi,filteredUsers:Ui,groupFilter:Vi,userPageTab:Bi,expandedGroups:Ki,addMemberGroupMap:Wi,toggleGroupExpand:$i,removeMemberFromGroupInline:Gi,addMemberToGroupInline:Yi,changeUserGroup:Ji,statusCounts:Il,stockPool:zl,poolSignals:Xl,aiResult:va,aiHistory:Ia,groupedByDate:wo,groupedByMonth:_o,expandedDates:Oa,expandedMonths:Ql,aiHistoryByStock:ko,aiHistoryStockCount:xo,expandedStocks:ja,aiHistoryView:en,aiHistoryLoading:Fn,aiHistoryError:Nn,aiHistoryTotal:Hn,aiHistoryLoadingMore:Vn,hasMoreAiHistory:Bn,loadMoreAiHistory:Kn,watchlistLoading:Wn,scoreDistribution:So,quickEvalStock:xn,evalStrategy:Sn,checklistItems:Jl,evalHistoryComparison:Yl,quickEvaluate:Co,selectedHistoryIds:za,showAutoEvaluateSettings:Na,savingConfig:Ha,autoEvaluateConfig:ma,autoEvaluateScope:Va,strategyList:qt,toggleDateExpand:Eo,toggleMonthExpand:Zl,toggleSelectDate:Mo,toggleSelectMonth:Po,toggleSelectStock:To,toggleStockExpand:Do,registerTrendChart:Ro,selectedWatchlistCodes:Fa,clearWatchlistSelection:Jn,toggleSelectWatchlist:eo,selectAllHistory:to,selectAllWatchlist:ao,batchRemoveWatchlist:Zn,batchEvaluateSelected:po,batchReevaluateHistory:Qn,batchAddToWatchlist:Xn,viewUnit:Ys,datePickerType:Js,dateFormat:Qs,canNavPrev:Xs,canNavNext:Zs,handleLogin:Zr,handleGuestLogin:ec,switchView:Da,navigateDate:Ta,navigateTo:ne,loadDashboardData:ba,loadConsensusData:v,showStockDetail:qa,doAiEvaluate:Un,doBatchEvaluate:Ao,loadAiHistory:Wt,loadLastEvaluation:ls,lastEvalTime:Gl,viewAiResult:qo,saveAiConfig:Dr,testAiApi:Tr,exportConfig:Rr,importConfig:qr,configSaving:mr,configChanged:P,watchlist:En,watchlistCodes:Mn,watchlistSearch:An,watchlistResults:Ln,watchlistSearching:In,watchlistSort:Cn,sortedWatchlist:Pn,getWatchlistScore:Dn,addSearchResult:Tn,evaluatedCodes:Rn,klineLoadedCodes:qn,markKlineLoaded:ns,loadWatchlist:rs,addToWatchlist:lo,removeFromWatchlist:no,clearWatchlist:oo,searchStockForWatchlist:fo,toggleWatchlist:ro,batchEvaluateWatchlist:mo,watchlistEvaluate:vo,showStockKline:co,preloadWatchlistKline:cs,preloadingKline:uo,realtimeQuotes:Lo,realtimeDegraded:Io,realtimeWsState:zo,connectRealtimeQuotes:Oo,disconnectRealtimeQuotes:jo,quoteWarningFor:Fo,realtimeQuoteColor:No,realtimePriceText:Ho,realtimePctText:Vo,realtimeRatioText:Bo,REALTIME_DEGRADED_TEXT:Ko,REALTIME_FALLBACK_TEXT:Wo,toggleSelectHistory:Gn,clearSelection:Yn,deleteSingleHistory:$n,deleteSelectedHistory:so,saveAutoEvaluateConfig:io,editUser:Dl,saveUser:Tl,deleteUser:Rl,loadUsers:Qt,allGroups:Ml,loadAllGroups:ua,getGroupName:Pl,toggleUserEnabled:ql,resetUserPassword:Al,selectedPreset:hn,applyPreset:bn,onProviderChange:wn,providerInfo:yn,globalConfigDirty:pr,lastSavedTime:fr,tushareConfig:gr,tushareStatus:hr,syncingData:wr,stockCount:kr,tradeDateCount:_r,aiStatus:xr,appVersion:us,showImportDialog:Sr,rateLimitConfig:Cr,rateLimitDirty:Er,rateLimitSaving:Mr,loadRateLimit:ga,saveRateLimit:Pr,saveAllConfig:Ar,resetAllConfig:Lr,testTushareConnection:Ir,syncStockData:zr,loadTushareConfig:vs,loadFeishuConfig:ha,loadSystemStatus:ya,loadAiConfig:Zt,aiVendors:tn,aiCatalog:an,aiModelsError:sn,testingAllModels:ln,savingAiModels:nn,loadAiVendors:Ba,loadAiCatalog:Ka,saveAiVendors:Wa,saveAiModels:Wa,testVendorModel:rn,testAllVendorModels:cn,fetchVendorModels:dn,addVendorFromCatalog:un,addCustomVendor:vn,addVendorModel:mn,removeVendorModel:pn,removeVendor:fn,toggleVendorKeyReveal:gn,checkTushareConnection:Xt,datasourceConfig:yr,datasourceStatus:br,loadDatasourceConfig:ms,saveDatasourceConfig:Or,testDatasource:jr,toggleDatasourceKeyReveal:Fr,strategyFilter:wt,strategyFilterOptions:vt,strategyFilterCounts:Ze,strategyPreviewCount:jl,saveStrategyFilter:Fl,filteredConsensusRank:Nl,currentPoolSize:Hl,filteredStrategyCounts:Vl,strategyDistribution:Ol,expandedStrategies:ze,poolChangeBadge:Bl,timeBarPercent:Kl,timeSinceRefresh:Wl,navigateToStrategyFilter:Ul,showUserMenu:Ct,switchIconSystem:we,ICON_MAPS:Q,toggleSidebar:X,researchMenuEnabled:te,toggleResearchMenu:ae,groupsConfig:Pe,loadGroupConfig:Ue,editingGroup:tl,groupEditForm:il,showAddGroup:nl,addGroupForm:ol,savingGroup:rl,menuConfigDialog:al,memberDialog:sl,groupMembers:cl,addMemberUsername:dl,selectedMemberGroup:ul,subPageSectionExpanded:vl,toggleSubPageSection:ml,getGroupMemberCount:pl,getMenuEnabledCount:fl,groupCount:gl,openMemberManager:hl,loadGroupMembers:yl,addMemberToGroup:bl,removeMemberFromGroup:wl,availableUsersForGroup:kl,subPageCache:ll,onParentToggle:_l,openMenuConfig:xl,saveMenuConfig:Sl,deleteGroupConfig:Cl,createGroup:El,changePasswordForm:Wr,changingPassword:Ur,doChangePassword:ac,showSetupWizard:$r,setupForm:Gr,setupStep:Yr,checkSetupWizard:Jr,completeSetupWizard:Qr,chatSessions:ci,chatHistoryView:di,selectedChatIds:ui,expandedChatDates:vi,expandedChatMonths:mi,expandedChatStocks:pi,chatHistoryLoading:fi,chatHistoryError:gi,allChatSessionsFlat:hi,chatGroupedByDate:yi,chatGroupedByMonth:bi,chatGroupedByStock:wi,toggleSelectChat:ki,toggleSelectChatDate:_i,toggleSelectChatMonth:xi,toggleSelectChatStock:Si,toggleChatDateExpand:Ci,toggleChatMonthExpand:Ei,toggleChatStockExpand:Mi,selectAllChatSessions:Pi,deleteSelectedChatSessions:Di,viewChatSession:Ti,loadChatHistory:Aa,deleteChatSession:Ri,renderMarkdown:qi,stockChatInput:Ai,stockChatMessages:Li,stockChatLoading:Ii,stockChatError:zi,askStockSend:Oi,askStockQuick:ji,onTouchStart:gs,onTouchEnd:hs,hapticFeedback:q}}})()});export default cc();
