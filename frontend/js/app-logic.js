// quant-calendar: App 逻辑层 — 编排/装配层 (v3.6.0-T8 / FR-3.6.2, FR-3.17.11.1)
// 原巨型 setup() body 按域拆分至 js/app-logic/*.js (data/market/ops/nav/keys/auth/watch/lifecycle)
// 本文件保留: qcState 对象字面量(437键护栏) + createAppLogic 定义 + 根状态 + 护栏片段 + 域装配胶水
// 通过 window.createAppLogic() 调用, 供 index.html setup() provide/inject 注入各组件
(function () {
  window.createAppLogic = function () {
    const { ref, computed, onMounted, onUnmounted, watch, nextTick } = Vue;
                // ===== v3.11(11.3): 共享配置脏标记（AI 配置段与系统配置域共用，提前声明避免 TDZ）=====
                const configChanged = ref(false);
                // ===== v3.17.14 (FR-3.17.14): i18n 装配（locale ref + 全局 t + 语言切换）=====
                // locale 为响应式 ref：模板 t(key) 读取其 .value → locale 变化整页重渲染
                const i18n = (window.__quantModules && window.__quantModules.i18n) || {};
                const _supportedLocales = (i18n.SUPPORTED_LOCALES || ['zh-CN', 'en']);
                const _prefLanguage = (window.__quantModules && window.__quantModules.preferences)
                  ? ((window.__quantModules.preferences.getLocal() || {}).language || 'zh-CN') : 'zh-CN';
                const locale = ref(_supportedLocales.indexOf(_prefLanguage) !== -1 ? _prefLanguage : 'zh-CN');
                if (typeof i18n.bindLocale === 'function') i18n.bindLocale(locale);
                const t = (typeof i18n.t === 'function') ? i18n.t : (function (k) { return String(k); });
                function changeLanguage(l) {
                  if (_supportedLocales.indexOf(l) === -1) return;
                  locale.value = l;
                  if (typeof i18n.setLocale === 'function') i18n.setLocale(l);
                  if (window.__quantModules && window.__quantModules.preferences) {
                    window.__quantModules.preferences.setPreference('language', l);
                  }
                }
                // ===== 导航菜单 =====
                // 全局搜索/快捷键已下沉 js/app-logic/keys.js（searchQuery/searchStocks/onSearchSelect/handleGlobalKeydown）
                // ===== v3.16 (16.6): v-html 消毒委托（核心实现见 core.js；经 qcState 注入各组件模板使用）=====
                function sanitizeHtml(html, opts) {
                    if (window.__quantModules && window.__quantModules.core && window.__quantModules.core.sanitizeHtml) {
                        return window.__quantModules.core.sanitizeHtml(html, opts);
                    }
                    return html == null ? '' : String(html);
                }
                // v3.16 (16.6): 键盘可达通用助手 — tabindex=0 的可点击元素 Enter/Space 触发 click
                function keyClick(e) {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                        e.preventDefault();
                        if (e.currentTarget && typeof e.currentTarget.click === 'function') e.currentTarget.click();
                    }
                }
                // v3.16 (16.6): 弹窗焦点管理 — 记录打开前焦点，关闭后归还；打开后焦点首落首个 input/textarea
                let _dialogTrigger = null;
                function rememberDialogTrigger() {
                    if (document.activeElement && document.activeElement !== document.body) _dialogTrigger = document.activeElement;
                }
                function restoreDialogFocus() {
                    if (_dialogTrigger && _dialogTrigger.isConnected) {
                        try { _dialogTrigger.focus(); } catch (e) { /* ignore */ }
                    }
                    _dialogTrigger = null;
                }
                function focusFirstInDialog() {
                    Vue.nextTick(() => {
                        const dlg = document.querySelector('.el-dialog-overlay .el-dialog');
                        if (!dlg) return;
                        const first = dlg.querySelector('input:not([type=hidden]), textarea, [tabindex]:not([tabindex="-1"])');
                        if (first && typeof first.focus === 'function') first.focus();
                    });
                }
                // v3.16 (16.7): 离线检测 — 全局在线状态（供各页统一展示 offline 错误态）
                const isOnline = ref(typeof navigator !== 'undefined' ? navigator.onLine : true);
                if (typeof window !== 'undefined') {
                    window.addEventListener('online', () => { isOnline.value = true; });
                    window.addEventListener('offline', () => { isOnline.value = false; });
                }

                // 窗口关闭前确认（防止未保存配置丢失）
                window.addEventListener('beforeunload', (e) => {
                    if (configChanged.value) {
                        e.preventDefault();
                        e.returnValue = '您有未保存的配置变更，确定要离开吗？';
                        return e.returnValue;
                    }
                });

                // v3.8.11: 触觉反馈
                function hapticFeedback(style = 'light') {
                    if (typeof navigator !== 'undefined' && navigator.vibrate) {
                        if (style === 'light') navigator.vibrate(10);
                        else if (style === 'medium') navigator.vibrate(20);
                        else if (style === 'heavy') navigator.vibrate([10, 30, 10]);
                    }
                }

                // v3.0: 美林时钟模块 - 从 merrill.js 加载
                const merrill = useMerrillClock();
                const { merrillData, merrillStagesConfig, showMerrillDetail, merrillDetailData, merrillClockConfig, merrillClockLastUpdated, merrillReevalResult, merrillReevalLoading, stages, indicatorList, dimensionScoreList, detailDimensionScoreList, confidenceColor, timelineStages, clockPosition, merrillProgressStyle, FULL_CYCLE_MONTHS, getStageAngle, getCycleProgress, getCurrentStageMonths, getStageTotalMonths, isStageCompleted, getCharLabel, getAssetName, getRankColor, fetchMerrillStages, fetchMerrillClock, loadMerrillTimeline, showTimelineStage, merrillTimeline, timelineLoading, showStageDetail, saveMerrillClockConfig, doMerrillReevaluate, startAutoRefresh, stopAutoRefresh } = merrill;

                // v3.0: 图标系统映射 — 使用外部模块
                const ICON_MAPS = window.__quantModules.icons.ICON_MAPS;
                const { iconSystem } = window.__quantModules.icons.init();
                const switchIconSystem = window.__quantModules.icons.switchIconSystem;

                // v3.0: 侧边栏折叠
                const sidebarCollapsed = ref(localStorage.getItem('sidebar_collapsed') === '1');
                function toggleSidebar() {
                    sidebarCollapsed.value = !sidebarCollapsed.value;
                    localStorage.setItem('sidebar_collapsed', sidebarCollapsed.value ? '1' : '0');
                }

                const researchMenuEnabled = ref(localStorage.getItem('research_menu_enabled') !== '0');
                function toggleResearchMenu(val) {
                    researchMenuEnabled.value = val;
                    localStorage.setItem('research_menu_enabled', val ? '1' : '0');
                }

// v1.9.2: 用户组配置（菜单可见性由此驱动）
                const groupsConfig = ref(null);

const allMenuDefs = [
                    { key: 'strategies', name: '策略总览', icon: '📈', subPages: ['overview', 'execution', 'merrill', 'market', 'consensus'] }, // V5.0.11: 策略回测移入策略研究
                    { key: 'calendar', name: '量化日历', icon: '🗓', subPages: ['daily', 'weekly', 'monthly', 'yearly', 'pool'] },
                    { key: 'ai', name: '智能评估', icon: '🤖', subPages: ['overview', 'watchlist', 'history', 'evaluation-analysis', 'chat_history'] }, // V5.0.11: 评估分析(命中率)独立子页
                    { key: 'research', name: '策略研究', icon: '🔬', subPages: ['research-overview', 'quant-research', 'market-review', 'scan', 'strategy-write', 'custom-write', 'backtest', 'backtest-history'] },
                    { key: 'shortterm', name: '短线复盘', icon: '⚡', subPages: ['overview', 'ztpool', 'lhb', 'sector', 'intraday'] }, // V5.2.0: 涨停复盘+龙虎榜; V5.2.1: 复盘看板+板块资金; V5.2.2: 盘中核验
                    { key: 'system', name: '系统配置', icon: '⚙', subPages: ['status', 'autoeval', 'datasource', 'feature', 'datadict', 'user', 'usage', 'about'], guestSubPages: ['status', 'about'] }
                ];
                const menus = computed(() => {
                    const role = currentUser.value?.role || 'guest';
                    const groupId = currentUser.value?.group || role;
                    const group = groupsConfig.value?.[groupId] || null;
                    const icons = ICON_MAPS[iconSystem.value] || ICON_MAPS.emoji;
                    let items = allMenuDefs.map(m => {
                        // group-based visibility (default: show if no group config)
                        if (group && group.visible_menus && m.key in group.visible_menus) {
                            if (!group.visible_menus[m.key]) return null;
                        }
                        const item = { ...m, name: t('nav.' + m.key) || m.name, icon: icons[m.key] || m.icon };
                        // Filter subPages by group config
                        if (group?.visible_sub_pages) {
                            item.subPages = m.subPages.filter(sp => {
                                const fullKey = m.key + '.' + sp;
                                return group.visible_sub_pages[fullKey] !== false;
                            });
                        }
                        // Guest: system limited subPages
                        if (m.key === 'system' && role === 'guest' && m.guestSubPages) {
                            item.subPages = m.guestSubPages;
                        }
                        return item;
                    }).filter(Boolean);
                    // Research menu toggle
                    if (!researchMenuEnabled.value) {
                        items = items.filter(m => m.key !== 'research');
                    }
                    return items;
                });

                async function loadGroupConfig() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        if (!token) return;
                        const res = await fetch('/api/groups/my');
                        if (res.ok) {
                            const data = await res.json();
                            groupsConfig.value = { [data.group_id]: data.group };
                        }
                    } catch(e) { console.warn('loadGroupConfig:', e); }
                }
                const currentPage = ref('strategies');
                const shortcutHelpItems = [
                    { keys: 'Ctrl+K', desc: '打开命令面板 (股票搜索/菜单/指令)' },
                    { keys: 'Ctrl+/', desc: '显示/隐藏快捷键帮助' },
                    { keys: '1-5', desc: '切换导航页面 (非输入态)' },
                    { keys: 'R', desc: '刷新当前页 (策略/日历/AI, 非输入态)' },
                    // v3.16 (16.5): 帮助面板与 handleGlobalKeydown 实现同步（补齐方向键）
                    { keys: '← / →', desc: '日历页：上一 / 下一交易日' },
                    { keys: '↑ / ↓', desc: '日历页：切换 日/周/月/年 视图' },
                ];
                // v3.8.2: 统一导航入口
                function navigateTo(page, subPage = '') {
                    hapticFeedback('light');
                    currentPage.value = page;
                    currentSubPage.value = subPage;
                    localStorage.setItem('quant_last_subpage', subPage);
                }

                // ===== v3.2.0-T21: 策略回测（护栏片段保留）=====
                const backtestStrategies = [
                    { id: 'multifactor', name: '多因子策略' },
                    { id: 'industry_rotation', name: '行业轮动' },
                    { id: 'index_enhance', name: '指数增强' },
                    { id: 'money_flow', name: '资金流策略' },
                ];
                const backtestStrategy = ref('multifactor');
                const backtestRange = ref(null);
                const backtestCapital = ref(100000);
                const backtestRunning = ref(false);
                const backtestResult = ref(null);
                let backtestChart = null;
                let _backtestCurve = null;  // v3.15 (15.4): 主题重绘缓存
                async function runBacktest() {
                    const token = localStorage.getItem('quant_token');
                    if (!token) { ElementPlus.ElMessage.warning('请先登录'); return; }
                    const params = {
                        initial_capital: backtestCapital.value || 100000,
                    };
                    if (backtestRange.value && backtestRange.value.length === 2) {
                        params.start_date = backtestRange.value[0];
                        params.end_date = backtestRange.value[1];
                    }
                    backtestRunning.value = true;
                    backtestResult.value = null;
                    try {
                        // V4.0 M1-4: 统一走策略 SDK 回测引擎(防前视/样本内外/过拟合), 旧 /api/backtest 退役
                        const res = await fetch('/api/strategies/' + backtestStrategy.value + '/backtest', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(params),
                        });
                        if (!res.ok) {
                            const err = await res.json().catch(() => ({}));
                            throw new Error(err.detail || '回测失败');
                        }
                        const data = await res.json();
                        const r = data.result || {};
                        if (!r.success) throw new Error(r.message || '回测失败');
                        if (data.data_degraded) ElementPlus.ElMessage.warning('数据不可达, 结果基于降级数据');
                        // 归一化 SDK 回测字段(比率×100 为百分比)
                        backtestResult.value = {
                            total_return_pct: ((r.total_return ?? 0) * 100).toFixed(2),
                            annual_return_pct: ((r.annual_return ?? 0) * 100).toFixed(2),
                            max_drawdown_pct: ((r.max_drawdown ?? 0) * 100).toFixed(2),
                            sharpe_ratio: (r.sharpe_ratio ?? 0).toFixed(2),
                            win_rate: ((r.win_rate ?? 0) * 100).toFixed(2),
                            out_sample: r.outsample_total_return === undefined ? '' : ((r.outsample_total_return ?? 0) * 100).toFixed(2),
                            overfit_warning: r.overfit_warning || false,
                            message: r.message || '',
                        };
                        renderBacktestChart(r.equity_curve);
                        ElementPlus.ElMessage.success('回测完成');
                    } catch (e) {
                        ElementPlus.ElMessage.error(e.message || '回测失败');
                    } finally {
                        backtestRunning.value = false;
                    }
                }
                function renderBacktestChart(equityCurve) {
                    const el = document.getElementById('backtestEquityChart');
                    if (!el || !equityCurve || equityCurve.length === 0) return;
                    // v3.17.9 (FR-3.17.9): echarts 懒加载 — 非首屏按需引入后再渲染
                    const ensure = (window.__quantModules && window.__quantModules.charts
                        && typeof window.__quantModules.charts.ensureEcharts === 'function')
                        ? window.__quantModules.charts.ensureEcharts : null;
                    const doRender = () => {
                    _backtestCurve = equityCurve;  // v3.15: 主题重绘缓存
                    if (backtestChart) { backtestChart.dispose(); backtestChart = null; }
                    backtestChart = echarts.init(el);
                    backtestChart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());
                    const dates = equityCurve.map(p => p.date || p[0]);
                    const values = equityCurve.map(p => p.value ?? p[1]);
                    backtestChart.setOption({
                        tooltip: { trigger: 'axis' },
                        grid: { left: 56, right: 16, top: 24, bottom: 40 },
                        xAxis: { type: 'category', data: dates, boundaryGap: false },
                        yAxis: { type: 'value', scale: true },
                        dataZoom: [{ type: 'inside' }],
                        series: [{
                            name: '净值', type: 'line', data: values, smooth: true, symbol: 'none',
                            lineStyle: { width: 2, color: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || getComputedStyle(document.documentElement).getPropertyValue('--color-ai').trim() || '#6366f1' /* qc-allow-hardcode: ECharts canvas 无法解析 CSS 变量，两级运行时兜底恒覆盖该字面量 */ },
                            areaStyle: { opacity: 0.1 },
                        }],
                    });
                    };
                    if (ensure) { ensure().then(doRender).catch(() => {}); }
                    else { doRender(); }
                }
                // v3.15 (15.4): 注册主题切换 → ECharts 按新主题重建（缓存数据, 保留 MA 图例选择）
                if (window.__quantModules && window.__quantModules.echartsTheme && !window.__quantModules.echartsTheme.__appChartsRegistered) {
                    window.__quantModules.echartsTheme.__appChartsRegistered = true;
                    window.__quantModules.echartsTheme.registerChart(function () {
                        // v3.16 (16.4): 主题重绘下沉 charts.js（缓存数据按新色重建 + 保留 MA 图例选择）
                        window.__quantModules.charts.redrawKline('stockKlineChart');
                    });
                    window.__quantModules.echartsTheme.registerChart(function () {
                        window.__quantModules.charts.redrawKline('indexKlineChart');
                    });
                    window.__quantModules.echartsTheme.registerChart(function () {
                        if (_backtestCurve) renderBacktestChart(_backtestCurve);
                    });
                }
                const currentSubPage = ref('overview');
                const currentPageName = computed(() => {
                    const menu = allMenuDefs.find(m => m.key === currentPage.value);
                    return menu ? menu.name : currentPage.value;
                });

                // V4.3-S3: 动态页面组件名映射 — currentPage -> qc-xxx-page
                // <component :is> 每次渲染重新解析组件名, 懒加载 chunk 注册后即可命中
                const pageComp = computed(() => {
                    const _map = { strategies: 'qc-strategies-page', calendar: 'qc-calendar-page', ai: 'qc-ai-page', research: 'qc-research-page', shortterm: 'qc-shortterm-page', system: 'qc-system-page' };
                    return _map[currentPage.value] || '';
                });
                const showUserMenu = ref(false);
                const dashboardData = ref({});
                // v3.11 (FR-3.11.7): 数据源健康指标（/api/system/metrics data_sources）
                const healthMetrics = ref([]);
                const dashboardDate = ref('');

                // ===== 视图切换 =====
                const views = ref([
                    { key: 'day', name: '日视图' },
                    { key: 'week', name: '周视图' },
                    { key: 'month', name: '月视图' },
                    { key: 'year', name: '年视图' }
                ]);
                const currentView = ref('day');
                const statusFilter = ref('all');

                // ===== 登录状态 =====
                const currentUser = ref(null);
                // v3.17.9 (FR-3.17.9): 会话先行恢复 — 主界面首帧即渲染（无需等 onMounted 再恢复登录态）
                (function() {
                    if (typeof localStorage === 'undefined') return;
                    const savedUser = localStorage.getItem('quant_user');
                    const savedToken = localStorage.getItem('quant_token');
                    if (savedUser && savedToken) {
                        try { currentUser.value = JSON.parse(savedUser); } catch (e) { /* 解析失败按未登录 */ }
                    }
                })();
                // 登录表单/密码/初始化向导已下沉 js/app-logic/auth.js

                // ===== v3.11(11.3): AI 问股域 — 共享状态（前置，供 ai-chat 域 deps 与 K线/评分/自选段引用）=====
                const stockDetailVisible = ref(false);
                const stockDetailTab = ref('kline');  // 'kline' | 'ai' | 'chat'
                const stockDetail = ref(null);
                // v3.16 (16.10-fix): 详情数据加载态 — 弹窗立即打开，数据异步填充
                const stockDetailLoading = ref(false);
                // ===== v1.5.0: subPageNames 映射 =====
                const subPageNames = {
                    'overview': '概览', 'strategies.overview': '策略概览', 'ai.overview': '评估概览', 'research.research-overview': '研究概览', 'merrill': '美林时钟', 'market': '市场行情', 'consensus': '策略共识榜',
                    'daily': '日视图', 'weekly': '周视图', 'monthly': '月视图', 'yearly': '年视图', 'pool': '股票池',
                    'watchlist': '我的自选', 'history': '评估历史', 'chat_history': '问股历史',
                    'execution': '执行看板', 'research-overview': '研究概览', 'quant-research': '量化研究', 'strategy-write': '策略编写', 'custom-write': '全新策略', 'backtest': '策略回测', 'backtest-history': '回测记录', 'market-review': '市场复盘', 'scan': '异动扫描',
                    'shortterm.ztpool': '涨停复盘', 'shortterm.lhb': '龙虎榜', 'ztpool': '涨停复盘', 'lhb': '龙虎榜',
                    'shortterm.overview': '复盘看板', 'overview': '概览',
                    'shortterm.sector': '板块资金', 'sector': '板块资金',
                    'shortterm.intraday': '盘中核验', 'intraday': '盘中核验',
                    'status': '系统状态', 'autoeval': '自动评估', 'datasource': '数据源', 'feature': '功能配置', 'datadict': '数据字典', 'user': '用户与权限', 'about': '关于'
                };

                // ===== 主题 =====
                const themes = ref({});
                const currentTheme = ref('tech-blue');

                // ===== 数据 =====
                // 状态与加载已下沉 js/app-logic/data.js（loading/loadingView/viewCache/dates/selectedDate/lastLoadTime/consensus/loadDates/loadConsensusData/...）
                const searchKeyword = ref('');
                // 策略列表
                const strategyList = ref([
                    { key: 'multifactor', name: '多因子策略' },
                    { key: 'smartbeta', name: 'SmartBeta' },
                    { key: 'momentum', name: '动量策略' },
                    { key: 'meanreversion', name: '均值回归' },
                    { key: 'technical', name: '技术指标' },
                    { key: 'value', name: '价值投资' }
                ]);

                // ===== 策略筛选过滤 =====
                const strategyFilter = ref({
                    selected: JSON.parse(localStorage.getItem('quant_strategy_filter_selected') || '["\u591A\u56E0\u5B50\u7B56\u7565","\u884C\u4E1A\u8F6E\u52A8\u7B56\u7565","\u6307\u6570\u589E\u5F3A\u7B56\u7565","\u8D44\u91D1\u6D41\u7B56\u7565"]'),
                    mode: localStorage.getItem('quant_strategy_filter_mode') || 'union',
                });
                const strategyFilterOptions = ['多因子策略', '行业轮动策略', '指数增强策略', '资金流策略'];
                const strategyFilterCounts = ref({ day: [], week: [], month: [], year: [] });
                // v1.8.0: 股票分布展开/折叠
                const expandedStrategies = ref({});
                // 自动保存策略筛选配置的 watch 已下沉 js/app-logic/watch.js

                // ===== 主题切换（护栏片段保留）=====
                function applyTheme(theme) {
                    currentTheme.value = theme;
                    // v3.17.11 (FR-3.17.11.3/4): data-theme 设置唯一权威实现在 themes.js（本处仅委托）
                    if (window.__quantModules && window.__quantModules.themes &&
                        typeof window.__quantModules.themes.applyTheme === 'function') {
                        window.__quantModules.themes.applyTheme(theme);
                    }
                    // v3.15 (15.4): 已挂载 ECharts 实例按新主题重绘（数据已缓存, 换色即生效）
                    Vue.nextTick(() => {
                        if (window.__quantModules && window.__quantModules.echartsTheme &&
                            window.__quantModules.echartsTheme.refreshAllCharts) {
                            window.__quantModules.echartsTheme.refreshAllCharts();
                        }
                    });
                }

                function changeTheme(theme) {
                    applyTheme(theme);
                    if (currentUser.value) {
                        fetch(`/api/users/${currentUser.value.username}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ theme })
                        });
                        currentUser.value.theme = theme;
                        localStorage.setItem('quant_user', JSON.stringify(currentUser.value));
                    }
                }

                // ===== v3.16 (16.4): K线渲染状态与编排（护栏片段保留: onLegend 回调接线）=====
                const klinePeriods = [
                    {label: '日线', value: 'daily'},
                    {label: '周线', value: 'weekly'},
                    {label: '月线', value: 'monthly'},
                    {label: '季线', value: 'quarterly'},
                    {label: '年线', value: 'yearly'}
                ];
                const currentKlinePeriod = ref('daily');
                // v3.17.10 (FR-3.17.10): 图表默认周期应用用户偏好（chart_period: 日/周/月）
                (function () {
                    try {
                        const __pref0 = (window.__quantModules && window.__quantModules.preferences)
                            ? window.__quantModules.preferences.getLocal() : {};
                        const cp = __pref0.chart_period;
                        if (cp === 'weekly' || cp === 'monthly') currentKlinePeriod.value = cp;
                    } catch (e) { /* 偏好不可用则保持默认 daily */ }
                })();
                const klineLoading = ref(false);
                const indexKlineLoading = ref(false);
                const stockKlineLoaded = ref(false);
                // v3.11 (FR-3.11.8): 均线开关状态（与图表图例选中态双向同步，供弹窗按钮高亮）
                const klineMaVisible = ref({ 'K线': true, 'MA5': true, 'MA10': true, 'MA20': true, 'MA60': true });
                const MA_LINES = ['MA5', 'MA10', 'MA20', 'MA60'];
                const indexKlineLoaded = ref(false);
                // v3.16 (16.4): K线实例生命周期已下沉 charts.js；评分动画/触摸手势已下沉 js/app-logic/market.js

                // v3.16 (16.4): K线渲染/实例生命周期/缩放已全部下沉 charts.js — 此处仅保留状态与编排
                // v3.17.6 (bugfix): 渲染成功后才置 loaded — 容器不存在(切到 AI/问股 tab)时静默跳过,
                //   由 watch(stockDetailTab) 在切回 K线 tab 时重新加载; 请求序号丢弃过期并发
                let _klineReqSeq = 0;
                async function loadStockKline(period) {
                    if (!stockDetail.value) return false;
                    const seq = ++_klineReqSeq;
                    klineLoading.value = true;
                    currentKlinePeriod.value = period;
                    try {
                        const res = await fetch(`/api/market/kline/${stockDetail.value.stock}?period=${period}&limit=60`);
                        const data = await res.json();
                        if (!data.success || !data.data) throw new Error(data.message || '数据获取失败');
                        markKlineLoaded(stockDetail.value.stock);
                        // 过期请求丢弃(快速切 tab 时的并发保护)
                        if (seq !== _klineReqSeq) return false;
                        // 仅 K线 tab 可见时渲染; 否则保持 loaded=false 等待 watcher 切回时加载
                        if (stockDetailTab.value !== 'kline') return true;
                        // v3.17.7 (bugfix): 容器由 v-if="stockKlineLoaded" 控制 — 必须先置 loaded
                        //   使容器渲染, nextTick 后再渲染图表 (renderKlineTo 已能检测容器 DOM 变化重建实例)
                        stockKlineLoaded.value = true;
                        await nextTick();
                        // v3.16 (16.4): 实例生命周期/图例联动/主题重绘缓存下沉 charts.js
                        window.__quantModules.charts.renderKlineTo('stockKlineChart', data.data, period, false, {
                            isMobile: isMobile.value,
                            onLegend: (sel) => {
                                Object.keys(klineMaVisible.value).forEach((k) => { if (k in sel) klineMaVisible.value[k] = !!sel[k]; });
                            },
                        });
                        resetKlineMaVisible();
                        return true;
                    } catch (e) {
                        // 仅在 K线 tab 下提示, 避免在 AI/问股 tab 后台加载误报
                        console.error('[kline] 加载失败:', stockDetail.value && stockDetail.value.stock, period, e);
                        if (stockDetailTab.value === 'kline') {
                            stockKlineLoaded.value = false;  // 复位, 保持"加载K线"按钮可点
                            // V4.2 (FR-4.2.6): 失败态显示原因, 支持重试
                            ElementPlus.ElMessage.error('K线加载失败: ' + (e && e.message ? e.message : '数据源不可达，请重试'));
                        }
                        return false;
                    } finally {
                        klineLoading.value = false;
                    }
                }
                async function loadIndexKline(period) {
                    if (!indexDetail.value) return;
                    indexKlineLoading.value = true;
                    currentKlinePeriod.value = period;
                    try {
                        const res = await fetch(`/api/market/kline/${indexDetail.value.code}?period=${period}&limit=60`);
                        const data = await res.json();
                        if (!data.success || !data.data) throw new Error(data.message || '数据获取失败');
                        indexKlineLoaded.value = true;
                        await nextTick();
                        // v3.16 (16.4): 实例生命周期/图例联动/主题重绘缓存下沉 charts.js
                        window.__quantModules.charts.renderKlineTo('indexKlineChart', data.data, period, true, {
                            isMobile: isMobile.value,
                            onLegend: (sel) => {
                                Object.keys(klineMaVisible.value).forEach((k) => { if (k in sel) klineMaVisible.value[k] = !!sel[k]; });
                            },
                        });
                        resetKlineMaVisible();
                    } catch (e) {
                        ElementPlus.ElMessage.error('指数K线加载失败');
                    } finally {
                        indexKlineLoading.value = false;
                    }
                }
                async function switchKlinePeriod(period) {
                    if (!stockKlineLoaded.value) { ElementPlus.ElMessage.info('请先点击"加载K线"按钮'); return; }
                    await loadStockKline(period);
                }
                async function switchIndexKlinePeriod(period) {
                    if (!indexKlineLoaded.value) { ElementPlus.ElMessage.info('请先加载K线'); return; }
                    await loadIndexKline(period);
                }
                // v3.11 (FR-3.11.8): MA 图例开关 — 弹窗均线按钮切换（联动图表图例）
                function toggleKlineMa(maName) {
                    // 按当前打开的对话框定位实例，避免两个实例并存时误切隐藏图（实例注册表在 charts.js）
                    const chart = (stockDetailVisible.value ? window.__quantModules.charts.getKlineChart('stockKlineChart') : null) || (indexDetailVisible.value ? window.__quantModules.charts.getKlineChart('indexKlineChart') : null);
                    if (!chart) return;
                    chart.dispatchAction({ type: 'legendToggleSelect', name: maName });
                }
                // v3.11 (FR-3.11.8): 切周期 setOption(notMerge) 重置图例选中 → 同步复位按钮态
                function resetKlineMaVisible() {
                    ['K线', 'MA5', 'MA10', 'MA20', 'MA60'].forEach((k) => { klineMaVisible.value[k] = true; });
                }
                // ===== 指数K线周期切换 =====
                async function loadIndexKlineWithPeriod(period) {
                    currentKlinePeriod.value = period;
                    await loadIndexKline(period);
                }

                // ===== v3.11 (FR-3.11.7): 数据源健康指标（成功率/degraded/延迟，v3.10 metrics 前端消费；护栏片段保留）=====
                async function loadHealthMetrics() {
                    const res = await fetch('/api/system/metrics');
                    if (!res.ok) throw new Error('metrics ' + res.status);
                    const data = await res.json();
                    const arr = Array.isArray(data) ? data : (data && data.data_sources) || [];
                    healthMetrics.value = arr;
                }

                // ===== 惰性访问器：供拆分域在装配完成前引用后置域输出（仅运行时调用, TDZ 安全）=====
                const getLoadDashboardData = () => loadDashboardData;
                const getLastRefreshTime = () => lastRefreshTime;
                const getFetchPoolSignals = () => fetchPoolSignals;
                const getLoadAiHistory = () => loadAiHistory;
                const getShowBatchEvaluate = () => showBatchEvaluate;

                // ===== 域装配: 拆分工厂（FR-3.17.11.1）=====
                // v3.17.11.1: 日历数据加载/缓存域 (js/app-logic/data.js)
                const __data = window.__quantAppLogic.data.create({
                    currentView, statusFilter, dashboardData, loadHealthMetrics,
                    getLoadDashboardData, getLastRefreshTime, getFetchPoolSignals,
                });
                const { loading, loadingView, viewCache, dates, selectedDate, lastLoadTime, consensus, viewNote,
                        loadDates, refreshCalendarData, exportCSV, loadConsensusData, loadDashboardCached } = __data;
                // v3.17.11.1: 行情/指数详情/评分动画/触摸手势域 (js/app-logic/market.js)
                const __market = window.__quantAppLogic.market.create({
                    currentKlinePeriod, loadIndexKline, rememberDialogTrigger, menus,
                    currentPage, currentSubPage, stockDetail, selectedDate,
                });
                const { marketData, indexDetailVisible, indexDetail, indexAiResult, indexAiLoading,
                        fetchMarketData, showIndexDetail, loadCachedIndexEval, doIndexAiEvaluate,
                        disposeStockKline, isMobile, zoomKlineRange,
                        scoreAnimating, scoreDelta, scorePulse,
                        refreshStockScore, animateScoreEntrance, onTouchStart, onTouchEnd } = __market;
                // v3.17.11.1: 运维与辅助功能域 (js/app-logic/ops.js)
                const __ops = window.__quantAppLogic.ops.create({
                    navigateTo, currentPage, currentSubPage,
                });
                const { feishuConfig, feishuTestStatus, feishuTestMessage,
                        testFeishuWebhook, saveFeishuConfig,
                        aiFabHidden, openAiFab,
                        strategyRecommendations, aiUsage, loadStrategyRecommendations, loadAiUsage,
                        sysMonitor, analyticsRank, analyticsDays, loadSysMonitor, loadAnalytics,
                        healthDetail, loadHealthDetail,
                        reviewTriggering, triggerMarketReview,
                        factCheck, factCheckRunning, loadFactCheck, triggerFactCheck,
                        backups, backupCreating, loadBackups, createBackup, restoreBackup,
                        tourVisible, tourStep, tourSteps, maybeShowTour, skipTour, finishTour,
                        feedbackText, feedbackSubmitting, submitFeedback } = __ops;
                // v3.17.11.1: 视图/日期导航域 (js/app-logic/nav.js)
                const __nav = window.__quantAppLogic.nav.create({
                    currentView, selectedDate, dates, loadConsensusData, hapticFeedback,
                });
                const { viewUnit, datePickerType, dateFormat, canNavPrev, canNavNext,
                        switchView, navigateDate, disabledDate, onDateChange } = __nav;
                // v3.17.11.1: 全局搜索/快捷键/命令面板状态域 (js/app-logic/keys.js)
                const __keys = window.__quantAppLogic.keys.create({
                    menus, subPageNames, navigateTo, currentPage, currentView,
                    navigateDate, switchView, getLoadDashboardData, refreshCalendarData,
                    getLoadAiHistory, exportCSV, getShowBatchEvaluate,
                    openAiFab, toggleSidebar, showStockDetail,
                });
                const { searchQuery, searchStocks, onSearchSelect,
                        shortcutHelpVisible, commandPaletteVisible,
                        handleGlobalKeydown } = __keys;

                // ===== 详情弹窗（护栏片段保留: 先弹窗后拉数据, 加载态）=====
                // V4.2 (FR-4.2.5): 连开竞态保护 — 请求序列号, 旧慢响应不覆盖新选中
                let _stockDetailSeq = 0;
                async function showStockDetail(stockCode) {
                    const seq = ++_stockDetailSeq;
                    rememberDialogTrigger(); // v3.16 (16.6): 记录打开前焦点，关闭后归还
                    // v3.17.10 (FR-3.17.10): 记录最近查看（先记代码，数据返回后补名称）
                    if (window.__quantModules && window.__quantModules.recent) {
                        window.__quantModules.recent.recordViewed(stockCode, '');
                    }
                    // v3.16 (16.10-fix): 立即弹窗（加载态），数据异步填充 —
                    // 原实现先 await 行情接口（tushare 同步拉取可长达 10s）再弹窗，导致点击后迟迟无响应
                    aiResult.value = null;
                    currentKlinePeriod.value = 'daily';
                    stockKlineLoaded.value = false;
                    stockDetailTab.value = 'kline';
                    stockDetail.value = null;
                    stockDetailLoading.value = true;
                    // 先销毁旧图表（实例生命周期下沉 charts.js）
                    window.__quantModules.charts.disposeKline('stockKlineChart');
                    stockDetailVisible.value = true;
                    nextTick(() => animateScoreEntrance());
                    try {
                        const res = await fetch(`/api/calendar/stock/${stockCode}?date=${selectedDate.value}`);
                        if (seq !== _stockDetailSeq) return;  // V4.2: 旧响应丢弃
                        stockDetail.value = await res.json();
                        // v3.17.10 (FR-3.17.10): 数据返回后补全最近查看名称
                        if (stockDetail.value && stockDetail.value.name
                            && window.__quantModules && window.__quantModules.recent) {
                            window.__quantModules.recent.recordViewed(stockCode, stockDetail.value.name);
                        }
                    } catch (e) {
                        if (seq !== _stockDetailSeq) return;
                        ElementPlus.ElMessage.error('加载失败');
                        stockDetail.value = { stock: stockCode, name: '', total_days: 0 };
                    } finally {
                        if (seq === _stockDetailSeq) stockDetailLoading.value = false;
                    }
                    // 数据就绪后加载K线
                    setTimeout(async () => {
                        await loadStockKline('daily');
                        refreshStockScore();
                    }, 500);
                    loadLastEvaluation(stockCode);
                }
                // v3.16 (16.6): 详情弹窗关闭后焦点归还触发器（watch 注册已下沉 js/app-logic/watch.js）

                // ===== v3.11(11.3): AI 问股域 — 逻辑移至 js/ai-chat.js 模块 =====
                const __aiChatDomain = (window.__quantModules && window.__quantModules['ai-chat'])
                    ? window.__quantModules['ai-chat'].create({ stockKlineLoaded, stockDetailVisible, stockDetailTab, stockDetail, disposeStockKline })
                    : {};
                const { chatSessions, chatHistoryView, selectedChatIds, expandedChatDates, expandedChatMonths, expandedChatStocks,
                        chatHistoryLoading, chatHistoryError,
                        allChatSessionsFlat, chatGroupedByDate, chatGroupedByMonth, chatGroupedByStock,
                        toggleSelectChat, toggleSelectChatDate, toggleSelectChatMonth, toggleSelectChatStock,
                        toggleChatDateExpand, toggleChatMonthExpand, toggleChatStockExpand,
                        selectAllChatSessions, deleteSelectedChatSessions, viewChatSession,
                        loadChatHistory, deleteChatSession, renderMarkdown,
                        stockChatInput, stockChatMessages, stockChatLoading, stockChatError,
                        askStockSend, askStockQuick } = __aiChatDomain;
                // ===== v3.11(11.3): 用户/分组域 — 逻辑移至 js/users.js 模块 =====
                const __usersDomain = (window.__quantModules && window.__quantModules.users)
                    ? window.__quantModules.users.create({ currentUser, applyTheme, allMenuDefs, loadGroupConfig })
                    : {};
                const { userList, userSearch, groupFilter, userPageTab, expandedGroups, addMemberGroupMap,
                        filteredUsers, toggleGroupExpand, removeMemberFromGroupInline, addMemberToGroupInline,
                        changeUserGroup, showAddUser, editingUser, userForm, savingUser,
                        editingGroup, menuConfigDialog, memberDialog, groupEditForm, subPageCache,
                        showAddGroup, addGroupForm, savingGroup, groupMembers, addMemberUsername,
                        selectedMemberGroup, subPageSectionExpanded, toggleSubPageSection,
                        getGroupMemberCount, getMenuEnabledCount, groupCount,
                        openMemberManager, loadGroupMembers, addMemberToGroup, removeMemberFromGroup,
                        availableUsersForGroup, onParentToggle, openMenuConfig, saveMenuConfig,
                        deleteGroupConfig, createGroup,
                        allGroups, getGroupName, loadAllGroups, loadUsers, editUser, saveUser, deleteUser,
                        toggleUserEnabled, resetUserPassword } = __usersDomain;

                // ===== v3.11(11.3): 股票池域 — 逻辑移至 js/stock-pool.js 模块 =====
                const __stockPoolDomain = (window.__quantModules && window.__quantModules['stock-pool'])
                    ? window.__quantModules['stock-pool'].create({ consensus, currentPage, currentSubPage, dashboardData, searchKeyword, statusFilter, strategyFilter, strategyFilterCounts })
                    : {};
                const { applyStrategyFilter, statusCounts, stockPool, strategyDistribution, strategyPreviewCount,
                        saveStrategyFilter, filteredConsensusRank, currentPoolSize, filteredStrategyCounts,
                        poolChangeBadge, timeBarPercent, lastRefreshTime, timeSinceRefresh,
                        navigateToStrategyFilter } = __stockPoolDomain;

                // ===== v3.11(11.3): AI 评估域 — 逻辑移至 js/ai.js 模块 =====
                const __aiDomain = (window.__quantModules && window.__quantModules.ai)
                    ? window.__quantModules.ai.create({ configChanged, consensus })
                    : {};
                const { aiResult, lastEvalTime, evalHistoryComparison, checklistItems,
                        aiHistory, selectedHistoryIds, expandedDates, expandedMonths, expandedStocks,
                        poolSignals, toggleMonthExpand, aiHistoryView, selectedWatchlistCodes,
                        showAutoEvaluateSettings, savingConfig, autoEvaluateScope,
                        aiVendors, aiCatalog, aiModelsError, testingAllModels, savingAiModels,
                        loadAiVendors, loadAiCatalog, saveAiVendors, saveAiModels,
                        testVendorModel, testAllVendorModels, fetchVendorModels,
                        addVendorFromCatalog, addCustomVendor, addVendorModel,
                        removeVendorModel, removeVendor, toggleVendorKeyReveal, toggleVendorEdit, autoEvaluateConfig,
                        // v3.11: AI 评估配置（原 app-logic 前段并入本域）
                        aiLoading, aiEvalStage, aiEvalElapsed, aiEvalError, showBatchEvaluate, batchStocks, batchRunning,
                        batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults, batchEvalErrors,
                        aiConfig, selectedPreset, providerInfo, aiPresets,
                        applyPreset, onProviderChange,
                        // v3.11: 数据加载域（原 app-logic 数据加载段并入）
                        fetchPoolSignals, cancelPoolSignals, loadLastEvaluation } = __aiDomain;
                // ===== v3.11(11.3): 自选/评估历史域 — 逻辑移至 js/watchlist.js 模块 =====
                const __watchlistDomain = (window.__quantModules && window.__quantModules.watchlist)
                    ? window.__quantModules.watchlist.create({ currentUser, selectedDate, stockDetail, stockDetailTab, stockDetailVisible, stockDetailLoading, stockKlineLoaded, viewCache, animateScoreEntrance, loadStockKline, refreshStockScore, disposeStockKline, aiHistory, aiLoading, aiEvalStage, aiEvalElapsed, aiEvalError, aiResult, loadLastEvaluation, autoEvaluateConfig, autoEvaluateScope, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults, batchEvalErrors, expandedDates, expandedStocks, savingConfig, selectedHistoryIds, selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate })
                    : {};
                const { quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes, sortedWatchlist,
                        getWatchlistScore, getLatestScore, addSearchResult, evaluatedCodes, klineLoadedCodes,
                        markKlineLoaded, watchlistSearch, watchlistResults, watchlistSearching,
                        dataRefreshConfig, dataRefreshReloading, dataRefreshSaving,
                        aiHistoryLoading, aiHistoryError,
                        aiHistoryTotal, aiHistoryLoadingMore, hasMoreAiHistory, loadMoreAiHistory,
                        watchlistLoading,
                        doAiEvaluate, loadAiHistory, deleteSingleHistory, toggleSelectHistory, clearSelection,
                        clearWatchlistSelection, batchReevaluateHistory, batchAddToWatchlist, batchRemoveWatchlist,
                        toggleSelectWatchlist, selectAllHistory, selectAllWatchlist, deleteSelectedHistory,
                        loadAutoEvaluateConfig, saveAutoEvaluateConfig, loadWatchlist, addToWatchlist,
                        removeFromWatchlist, clearWatchlist, toggleWatchlist, showStockKline, preloadingKline,
                        preloadWatchlistKline, watchlistEvaluate, batchEvaluateWatchlist, batchEvaluateSelected,
                        searchStockForWatchlist, loadDataRefreshConfig, saveDataRefreshConfig, triggerDataReload,
                        triggerDataPull, dataPullRunning,
                        groupedByDate, aiHistoryByStock, groupedByMonth, aiHistoryStockCount, scoreDistribution,
                        quickEvaluate, toggleDateExpand, toggleSelectDate, toggleSelectMonth, toggleStockExpand,
                        toggleSelectStock, registerTrendChart, viewAiResult, doBatchEvaluate,
                        // v3.17.7 实时化 (FR-3.17.7): 自选实时报价
                        realtimeQuotes, realtimeDegraded, realtimeWsState, connectRealtimeQuotes,
                        disconnectRealtimeQuotes, quoteWarningFor, realtimeQuoteColor,
                        realtimePriceText, realtimePctText, realtimeRatioText, REALTIME_DEGRADED_TEXT,
                        REALTIME_FALLBACK_TEXT } = __watchlistDomain;
                // ===== v3.17.4 (FR-3.17.4): 回测工作台域 — 逻辑移至 js/backtest.js 模块 =====
                const __backtestDomain = (window.__quantModules && window.__quantModules.backtest)
                    ? window.__quantModules.backtest.create({ backtestStrategies })
                    : {};
                const { btStrategyOptions, btSelectedStrategies, toggleBtStrategy,
                        btDateRange, btCapital, btCommissionRate, btIncludeBenchmark,
                        btRunning, btResult, btError,
                        btMetrics, btAnnualReturns, btTrades, btStrategyMetricsRows, btDrawdownRegion,
                        runBacktestWorkbench, exportBacktestCSV, registerBacktestNavChart, btFmtNum } = __backtestDomain;
                const __systemDomain = (window.__quantModules && window.__quantModules.system)
                    ? window.__quantModules.system.create({ configChanged, aiConfig, aiLoading, feishuConfig, currentTheme, changeTheme, autoEvaluateConfig, iconSystem, researchMenuEnabled, currentUser, strategyFilter, applyTheme, dashboardData, lastRefreshTime, saveAiModels })
                    : {};
                const { configSaving, globalConfigDirty, lastSavedTime,
                        feishuConfigOriginal, aiConfigOriginal, tushareConfigOriginal,
                        tushareConfig, tushareStatus, datasourceConfig, datasourceStatus,
                        syncingData, stockCount, tradeDateCount, aiStatus, appVersion, showImportDialog,
                        rateLimitConfig, rateLimitDirty, rateLimitSaving, loadRateLimit, saveRateLimit,
                        saveAiConfig, testAiApi, exportConfig, importConfig,
                        saveAllConfig, resetAllConfig, testTushareConnection, checkTushareConnection,
                        syncStockData, loadTushareConfig, loadDatasourceConfig, saveDatasourceConfig, testDatasource, toggleDatasourceKeyReveal,
                        toggleDatasourceEdit,
                        loadFeishuConfig, loadAiConfig, loadUserConfig, loadSystemStatus, loadDashboardData } = __systemDomain;

                // ===== v3.17.11.1: 登录/登出/密码/初始化向导域 (js/app-logic/auth.js) =====
                const __auth = window.__quantAppLogic.auth.create({
                    currentUser, loadUserConfig, loadDates, loadDashboardData, loadDashboardCached,
                    loadHealthMetrics, loadConsensusData, applyTheme, maybeShowTour,
                    loadAiVendors,  // V4.6: 登录成功即加载 AI 厂商(修复自动评估子页厂商卡不显示)
                });
                const { loginForm, logining, guestLogining,
                        showChangePassword, changePasswordForm, changingPassword,
                        showSetupWizard, setupForm, setupStep,
                        checkSetupWizard, completeSetupWizard, resetSetupWizard,
                        handleLogin, handleGuestLogin, handleLogout, doChangePassword } = __auth;

                // ===== v3.17.11.1: 副作用 watch 编排 (js/app-logic/watch.js, 不含页面切换监听) =====
                window.__quantAppLogic.watch.register({
                    strategyFilter, currentView, statusFilter,
                    currentPage, currentSubPage, menus, currentUser, strategyFilterCounts,
                    dates, selectedDate, consensus, loadConsensusData,
                    fetchMerrillClock, fetchMarketData,
                    loadWatchlist, loadAiHistory, preloadWatchlistKline, loadChatHistory,
                    loadSystemStatus, checkTushareConnection, loadSysMonitor, loadAnalytics,
                    loadHealthDetail, loadHealthMetrics, loadAiUsage, loadFactCheck,
                    loadAutoEvaluateConfig, loadDatasourceConfig, loadFeishuConfig, loadAiConfig, loadAiVendors,
                    loadRateLimit, loadDataRefreshConfig, loadBackups, loadAllGroups, loadUsers,
                    stockDetailTab, stockDetailVisible, stockKlineLoaded, loadStockKline,
                    currentKlinePeriod,
                    showMerrillDetail, indexDetailVisible, restoreDialogFocus,
                });

                // ===== v3.17.11.1: 生命周期初始化域 (js/app-logic/lifecycle.js) =====
                const __lifecycle = window.__quantAppLogic.lifecycle.create({
                    handleGlobalKeydown, applyTheme, menus,
                    currentPage, currentSubPage, currentView, currentKlinePeriod,
                    selectedDate, dates, loadDates, loadConsensusData, loadDashboardCached,
                    appVersion, themes, fetchMarketData,
                    fetchMerrillStages, fetchMerrillClock, loadMerrillTimeline, showTimelineStage,
                    merrillTimeline, timelineLoading,
                    loadAiConfig, loadAiVendors, loadAiCatalog, currentUser,
                    loadUserConfig, loadAutoEvaluateConfig, loadGroupConfig,
                    loadUsers, loadAllGroups, loadAiHistory,
                });
                const { runOnMounted } = __lifecycle;

                // ===== V4.3-S3: 全局切页 — 先懒加载目标页组件再切换 (sidebar/快捷键/内部跳转共用) =====
                window.__quantGoPage = async (page, sub) => {
                    try {
                        const l = window.__lazyLoaders && window.__lazyLoaders[page];
                        if (l) await l();
                    } catch (e) {
                        console.warn('[lazy] 页面组件加载失败', page, e);
                    }
                    // V4.3-S3: 懒加载 chunk 仅写入 __quantComponents — 补注册到 Vue app
                    // (mount 时遍历一次未含懒加载组件, 不注册则主模板 resolveComponent 失败整页空白)
                    if (window.__quantApp && window.__quantComponents) {
                        Object.values(window.__quantComponents).forEach((comp) => {
                            if (comp && comp.name && !comp.__quantRegistered) {
                                window.__quantApp.component(comp.name, comp);
                                comp.__quantRegistered = true;
                            }
                        });
                    }
                    currentPage.value = page;
                    if (sub) currentSubPage.value = sub;
                };

                // ===== 监听页面切换（护栏: 页面切换 watch 全仓唯一）=====
                // v1.11: 策略总览定时刷新（每5分钟）
                let strategyPollTimer;
                watch(currentPage, async (page) => {
                    hapticFeedback('light');
                    // V4.5 (FR-4.5.6): 页面 title 随切换更新(体验小项)
                    try {
                        const menu = allMenuDefs.find(function (m) { return m.key === page; });
                        document.title = (menu ? menu.name + ' - ' : '') + '量化日历';
                    } catch (e) {}
                    // v1.10
                    localStorage.setItem('quant_last_page', page);
                    // v3.16 (16.8): 离开日历页时取消在途池信号请求
                    if (page !== 'calendar' && typeof cancelPoolSignals === 'function') cancelPoolSignals();
                    // v3.4.0-T7: 匿名页面热度上报
                    try {
                        fetch('/api/analytics/page', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ page })
                        }).catch(() => {});
                    } catch (e) { console.warn('pageView track failed:', e); }
                    // v1.11: 清除旧轮询定时器
                    if (strategyPollTimer) { clearInterval(strategyPollTimer); strategyPollTimer = null; }
                    if (page === 'strategies') {
                        await loadDashboardCached();
                        // 启动5分钟静默轮询（缓存命中+后台刷新，不闪烁）
                        strategyPollTimer = setInterval(() => {
                            loadDashboardCached().catch(() => {});
                        }, 5 * 60 * 1000);
                    } else if (page === 'calendar') {
                        if (selectedDate.value) await loadConsensusData();
                    } else if (page === 'ai') {
                        loadStrategyRecommendations(); loadAiUsage();
                        await loadAiHistory();
                    } else if (page === 'system') {
                        // 加载所有视图的共识数据用于策略筛选预览
                        if (!selectedDate.value) {
                            const res = await fetch('/api/dashboard');
                            const d = await res.json();
                            const data = d.data || d;
                            if (data.latest_date) selectedDate.value = data.latest_date;
                        }
                        if (selectedDate.value) {
                            // 加载4个视图的数据用于预览计数
                            const views = ['day', 'week', 'month', 'year'];
                            for (const v of views) {
                                try {
                                    const res = await fetch(`/api/view/${v}/${selectedDate.value}?status=all`);
                                    const d = await res.json();
                                    strategyFilterCounts.value[v] = d.stocks || [];
                                } catch(e) { console.warn('loadConsensusData view load failed:', e); }
                            }
                            // 也填充 consensus 用于各计算属性
                            if (!consensus.value || consensus.value.length === 0) {
                                consensus.value = strategyFilterCounts.value.day || [];
                            }
                        }
                        // v3.16 (16.3): 合并原「监听设置页」watch — admin 进入配置页加载全部配置 + Tushare 定时检测
                        if (currentUser.value?.role === 'admin') {
                            await loadUsers();
                            await loadFeishuConfig();
                            await loadTushareConfig();
                            await loadSystemStatus();
                            await loadAiConfig();
                            await loadRateLimit();
                            checkTushareConnection();
                            if (!window._tushareCheckTimer) {
                                window._tushareCheckTimer = setInterval(checkTushareConnection, 3600000);
                            }
                        }
                    }
                });

                // ===== 初始化 =====
                onMounted(async () => {
                    // v3.17.11.1: 初始化主体已下沉 js/app-logic/lifecycle.js
                    await runOnMounted();
                });

                // v3.0: 美林时钟自动刷新（由 merrill.js 模块管理）
                startAutoRefresh();

                // v3.22-I4: 加载历史周期时间轴(最近4轮)
                loadMerrillTimeline();

                onUnmounted(() => {
                    if (strategyPollTimer) clearInterval(strategyPollTimer);
                    window.removeEventListener('keydown', handleGlobalKeydown);
                });

                // ===== v3.8.1: 通用数值格式化 (弹窗展示用, 最多保留 digits 位小数, null/NaN 回退 '--')
                function fmtNum(v, digits = 2) {
                    if (v == null || v === '' || isNaN(Number(v))) return '--';
                    return Number(v).toFixed(digits);
                }

                // v3.6.0: 整个 setup 状态对象提升为 qcState, provide 给所有子组件 (T4+: System/Strategies/Calendar/AI 共用)
                const qcState = {
                    currentPage, pageComp, currentSubPage, sidebarCollapsed, menus,
                    fmtNum, sanitizeHtml, keyClick, isOnline,
                    currentUser, iconSystem, allMenuDefs,
                    // v3.17.14 (FR-3.17.14): i18n（全局 t / 当前 locale / 语言切换）
                    t, locale, changeLanguage,
                    currentPageName, subPageNames, searchQuery, searchStocks, onSearchSelect,
                    selectedDate, onDateChange, disabledDate, refreshCalendarData, exportCSV, viewNote,
                    loading, lastLoadTime, resetSetupWizard, showChangePassword,
                    themes, currentTheme, changeTheme, handleLogout,

                    marketData, merrillData, merrillTimeline, timelineLoading, merrillStagesConfig, fetchMerrillStages, healthMetrics, feishuConfig, feishuTestStatus, feishuTestMessage,
                    shortcutHelpVisible, shortcutHelpItems, commandPaletteVisible,
                    tourVisible, tourStep, tourSteps, skipTour, finishTour,
                    backups, backupCreating, loadBackups, createBackup, restoreBackup,
                    sysMonitor, analyticsRank, analyticsDays, loadSysMonitor, loadAnalytics,
                    healthDetail, loadHealthDetail,
                    reviewTriggering, triggerMarketReview,
                    factCheck, factCheckRunning, loadFactCheck, triggerFactCheck,
                    strategyRecommendations, aiUsage, loadStrategyRecommendations, loadAiUsage,
                    aiFabHidden, openAiFab,
                    feedbackText, feedbackSubmitting, submitFeedback,
                    backtestStrategies, backtestStrategy, backtestRange, backtestCapital,
                    backtestRunning, backtestResult, runBacktest,
                    // v3.17.4 (FR-3.17.4): 回测工作台
                    btStrategyOptions, btSelectedStrategies, toggleBtStrategy,
                    btDateRange, btCapital, btCommissionRate, btIncludeBenchmark,
                    btRunning, btResult, btError,
                    btMetrics, btAnnualReturns, btTrades, btStrategyMetricsRows, btDrawdownRegion,
                    runBacktestWorkbench, exportBacktestCSV, registerBacktestNavChart, btFmtNum,
                    fetchMarketData, fetchMerrillClock, testFeishuWebhook, saveFeishuConfig,
                    // v2.0: 美林时钟配置
                    merrillClockConfig, merrillClockLastUpdated, merrillReevalResult, merrillReevalLoading,
                    saveMerrillClockConfig, doMerrillReevaluate,
                    // v1.8.0: 数据刷新配置
                    dataRefreshConfig, dataRefreshReloading, dataRefreshSaving,
                    loadDataRefreshConfig, saveDataRefreshConfig, triggerDataReload,
                    // v3.12 (FR-3.12.1): 手动拉取
                    triggerDataPull, dataPullRunning,
                    indexDetailVisible, indexDetail, indexAiResult, indexAiLoading, loadCachedIndexEval,
                    showIndexDetail, doIndexAiEvaluate,
                    klinePeriods, currentKlinePeriod, klineLoading, indexKlineLoading, stockKlineLoaded, indexKlineLoaded,
                    loadStockKline, switchKlinePeriod, loadIndexKline, switchIndexKlinePeriod,
                    zoomKlineRange,
                    // v3.11 (FR-3.11.8): MA 图例开关
                    MA_LINES, klineMaVisible, toggleKlineMa,
                    // v1.9.2: 评分动画
                    scoreAnimating, scoreDelta, scorePulse, refreshStockScore, animateScoreEntrance,
                    showMerrillDetail, merrillDetailData, showStageDetail, getCharLabel, getAssetName, getRankColor,
                    timelineStages, getStageAngle, getCycleProgress, getCurrentStageMonths, getStageTotalMonths, isStageCompleted,
                    stages, indicatorList, dimensionScoreList, confidenceColor,
                    views, currentView, statusFilter,
                    loginForm, logining, guestLogining,
                    dashboardData,
                    // v1.10
                    loadingView, dates, consensus, searchKeyword,
                    stockDetailVisible, stockDetailTab, stockDetail, stockDetailLoading,
                    aiLoading, aiEvalStage, aiEvalElapsed, aiEvalError, showBatchEvaluate, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults, batchEvalErrors, aiConfig,
                    userList, showAddUser, editingUser, userForm, savingUser,
                    userSearch, filteredUsers, groupFilter, userPageTab, expandedGroups, addMemberGroupMap,
                    toggleGroupExpand, removeMemberFromGroupInline, addMemberToGroupInline, changeUserGroup,
                    statusCounts, stockPool, poolSignals, aiResult, aiHistory, groupedByDate, groupedByMonth, expandedDates,
                    expandedMonths, aiHistoryByStock, aiHistoryStockCount, expandedStocks, aiHistoryView,
                    aiHistoryLoading, aiHistoryError,
                    aiHistoryTotal, aiHistoryLoadingMore, hasMoreAiHistory, loadMoreAiHistory,
                    watchlistLoading,
                    scoreDistribution, quickEvalStock, evalStrategy, checklistItems, evalHistoryComparison, quickEvaluate,
                    selectedHistoryIds, showAutoEvaluateSettings, savingConfig, autoEvaluateConfig, autoEvaluateScope, strategyList,
                    toggleDateExpand, toggleMonthExpand, toggleSelectDate, toggleSelectMonth, toggleSelectStock, toggleStockExpand, registerTrendChart,
                    selectedWatchlistCodes, clearWatchlistSelection, toggleSelectWatchlist,
                    selectAllHistory, selectAllWatchlist,
                    batchRemoveWatchlist, batchEvaluateSelected, batchReevaluateHistory, batchAddToWatchlist,
                    viewUnit, datePickerType, dateFormat, canNavPrev, canNavNext,
                    handleLogin, handleGuestLogin, switchView, navigateDate, navigateTo,
                    loadDashboardData, loadConsensusData, showStockDetail,
                    doAiEvaluate, doBatchEvaluate, loadAiHistory, loadLastEvaluation, lastEvalTime, viewAiResult, saveAiConfig, testAiApi, exportConfig, importConfig, configSaving, configChanged,
                    // v1.8.0: 自选股
                    watchlist, watchlistCodes, watchlistSearch, watchlistResults, watchlistSearching,
                    watchlistSort, sortedWatchlist, getWatchlistScore, addSearchResult,
                    evaluatedCodes, klineLoadedCodes, markKlineLoaded,
                    loadWatchlist, addToWatchlist, removeFromWatchlist, clearWatchlist,
                    searchStockForWatchlist, toggleWatchlist, batchEvaluateWatchlist, watchlistEvaluate, showStockKline,
                    preloadWatchlistKline, preloadingKline,
                    // v3.17.7 实时化 (FR-3.17.7): 自选实时报价
                    realtimeQuotes, realtimeDegraded, realtimeWsState, connectRealtimeQuotes,
                    disconnectRealtimeQuotes, quoteWarningFor, realtimeQuoteColor,
                    realtimePriceText, realtimePctText, realtimeRatioText, REALTIME_DEGRADED_TEXT,
                    REALTIME_FALLBACK_TEXT,
                    toggleSelectHistory, clearSelection, deleteSingleHistory, deleteSelectedHistory, saveAutoEvaluateConfig,
                    editUser, saveUser, deleteUser, loadUsers,
                    allGroups, loadAllGroups, getGroupName,
                    toggleUserEnabled, resetUserPassword,
                    selectedPreset, applyPreset, onProviderChange, providerInfo,
                    // v1.3.0 settings page
                    globalConfigDirty, lastSavedTime, tushareConfig, tushareStatus, syncingData,
                    stockCount, tradeDateCount, aiStatus, appVersion, showImportDialog,
                    rateLimitConfig, rateLimitDirty, rateLimitSaving, loadRateLimit, saveRateLimit,
                    saveAllConfig, resetAllConfig, testTushareConnection, syncStockData,
                    loadTushareConfig, loadFeishuConfig, loadSystemStatus, loadAiConfig,
                    // AI 模型管理 (v3.14 厂商化)
                    aiVendors, aiCatalog, aiModelsError, testingAllModels, savingAiModels,
                    loadAiVendors, loadAiCatalog, saveAiVendors, saveAiModels: saveAiVendors,
                    testVendorModel, testAllVendorModels, fetchVendorModels,
                    addVendorFromCatalog, addCustomVendor, addVendorModel,
                    removeVendorModel, removeVendor, toggleVendorKeyReveal, toggleVendorEdit,
                    checkTushareConnection,
                    // v1.8.0: 多数据源
                    datasourceConfig, datasourceStatus,
                    loadDatasourceConfig, saveDatasourceConfig, testDatasource, toggleDatasourceKeyReveal, toggleDatasourceEdit,
                    strategyFilter, strategyFilterOptions, strategyFilterCounts, strategyPreviewCount, saveStrategyFilter,
                    filteredConsensusRank, currentPoolSize, filteredStrategyCounts, strategyDistribution,
                    expandedStrategies,
                    // v1.11: 策略总览增强
                    poolChangeBadge, timeBarPercent, timeSinceRefresh, navigateToStrategyFilter,
                    // v1.5.0
                    showUserMenu,
                    // v1.9.2: 图标系统
                    switchIconSystem, ICON_MAPS,
                    // v3.0: 侧边栏折叠
                    toggleSidebar,
                    // v1.9.2: 策略研究菜单
                    researchMenuEnabled, toggleResearchMenu,
                    // v1.9.2: 用户组配置
                    groupsConfig, loadGroupConfig,
                    // v1.9.2: 分组管理
                    editingGroup, groupEditForm, showAddGroup, addGroupForm, savingGroup,
                    menuConfigDialog, memberDialog, groupMembers, addMemberUsername, selectedMemberGroup,
                    subPageSectionExpanded, toggleSubPageSection,
                    getGroupMemberCount, getMenuEnabledCount, groupCount,
                    openMemberManager, loadGroupMembers, addMemberToGroup, removeMemberFromGroup, availableUsersForGroup,
                    subPageCache, onParentToggle,
                    openMenuConfig, saveMenuConfig, deleteGroupConfig, createGroup,
                    changePasswordForm, changingPassword, doChangePassword,
                    // v2.2: 初始化向导
                    showSetupWizard, setupForm, setupStep, checkSetupWizard, completeSetupWizard,
                    // v2.4: AI 问股
                    chatSessions, chatHistoryView, selectedChatIds, expandedChatDates, expandedChatMonths, expandedChatStocks,
                    chatHistoryLoading, chatHistoryError,
                    allChatSessionsFlat, chatGroupedByDate, chatGroupedByMonth, chatGroupedByStock,
                    toggleSelectChat, toggleSelectChatDate, toggleSelectChatMonth, toggleSelectChatStock,
                    toggleChatDateExpand, toggleChatMonthExpand, toggleChatStockExpand,
                    selectAllChatSessions, deleteSelectedChatSessions, viewChatSession,
                    loadChatHistory, deleteChatSession, renderMarkdown,
                    stockChatInput, stockChatMessages, stockChatLoading, stockChatError, askStockSend, askStockQuick,
                    // v2.5.2: 触摸手势
                    onTouchStart, onTouchEnd,
                    // v3.8.11: 触觉反馈
                    hapticFeedback,
                };
    return qcState;
  };
})();
