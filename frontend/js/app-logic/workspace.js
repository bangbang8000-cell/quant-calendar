// 6.3.0 (T-6.3.0.10): App 逻辑层 — 工作区状态域（回测护栏 / 视图 / 详情双栏 / 页签 / 主题 / 策略筛选）
// 自 frontend/js/app-logic.js 按域逐字符切出（保留原缩进）；装配见 app-logic.js 的 create 调用
// ctx 依赖: ref/computed/watch/currentPage/currentSubPage/allMenuDefs/menus/navigateTo/ensureVisiblePage/currentUser
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.workspace = {
    create: function (ctx) {
      const { ref, computed, watch, currentPage, currentSubPage, allMenuDefs,
        menus, navigateTo, ensureVisiblePage, currentUser } = ctx;
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
                // 6.3.1 (T-6.3.1.3): 回测取数失败标志 (runBacktest catch 真实置位, 供四态面板承接)
                const backtestError = ref(false);
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
                    backtestError.value = false;
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
                        backtestError.value = true;
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
                // 6.1.4 (D5): 会话恢复 — 刷新恢复页面/子页 (sessionStorage)
                (function () {
                  const sr = window.QuantSessionRestore;
                  if (sr) {
                    const st = sr.restore();
                    if (st && st.page) { currentPage.value = st.page; if (st.sub) currentSubPage.value = st.sub; }
                  }
                })();
                Vue.watch(currentSubPage, function () { saveSessionState(); });
                const currentPageName = computed(() => {
                    const menu = allMenuDefs.find(m => m.key === currentPage.value);
                    return menu ? menu.name : currentPage.value;
                });
                // V4.3-S3: 动态页面组件名映射 — currentPage -> qc-xxx-page
                // <component :is> 每次渲染重新解析组件名, 懒加载 chunk 注册后即可命中
                const lazyTick = ref(0);  // V5.2.12 (FIX-2): 懒加载组件补注册后 tick 强制 pageComp 重算
                const pageComp = computed(() => {
                    void lazyTick.value;  // 依赖: 补加载注册完成后 lazyTick++ 触发重算
                    const _map = { strategies: 'qc-strategies-page', calendar: 'qc-calendar-page', ai: 'qc-ai-page', research: 'qc-research-page', shortterm: 'qc-shortterm-page', ops: 'qc-system-page', system: 'qc-system-page' };
                    // V5.2.3: 市场复盘/异动扫描移入短线复盘, 执行看板移入系统配置 —
                    // 组件按顶层菜单选, 子页归属变化时路由到原组件(复用渲染, 避免复制模板)
                    // V6.9.1-fix: 异动扫描已删除; 执行看板移入 ops 一级菜单
                    const _sp = currentSubPage.value;
                    if (currentPage.value === 'shortterm' && (_sp === 'market-review')) return 'qc-research-page';
                    if (currentPage.value === 'ops' && _sp === 'execution') return 'qc-strategies-page';
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
                // V5.7.2 (UX-18): 页面/子页切换 → 主内容滚动容器回顶 (避免停留旧位置)
                watch([currentPage, currentSubPage], function () {
                  const sc = document.querySelector('.main-content');
                  if (sc) sc.scrollTop = 0;
                });
                const stockDetailVisible = ref(false);
                const stockDetailTab = ref('kline');  // 'kline' | 'ai' | 'chat'
                const stockDetail = ref(null);
                // v3.16 (16.10-fix): 详情数据加载态 — 弹窗立即打开，数据异步填充
                const stockDetailLoading = ref(false);
                // ===== V5.16 (F2/F3): 详情展示模式 — 'split'(内嵌双栏) | 'dialog'(弹窗) =====
                // localStorage 持久化; 移动端(≤1024px)强制弹窗 (isNarrow)
                const detailDisplayMode = ref(localStorage.getItem('qc_detail_mode') || 'split');
                const isNarrow = ref(window.innerWidth <= 1024);
                const detailSplitEnabled = computed(() => detailDisplayMode.value === 'split' && !isNarrow.value);
                function setDetailDisplayMode(mode) {
                  detailDisplayMode.value = mode;
                  try { localStorage.setItem('qc_detail_mode', mode); } catch (e) {}
                }
                // 视口窄时回退弹窗 (resize 联动)
                window.addEventListener('resize', () => {
                  isNarrow.value = window.innerWidth <= 1024;
                });

                // ===== V5.17 (F3) + V5.17.1: 中栏宽度 — 默认 35% (5% 整数倍, 用户确认), 可拖拽调宽 =====
                // 下限 = 默认比例(35%), 上限 = 容器 50%; 拖拽后 px 持久化, 无持久化值用默认百分比
                const SPLIT_DEFAULT_PCT = 35;     // 默认分割比例 (%) — 靠近 5% 整数倍
                const splitWidth = ref(parseInt(localStorage.getItem('qc_split_width') || '', 10) || null);
                // 同步 --split-w CSS 变量到根元素 (CSS 变量继承进所有双栏容器, 模板无需 :style 绑定)
                function syncSplitWidthVar() {
                  if (typeof document !== 'undefined') {
                    document.documentElement.style.setProperty('--split-w',
                      splitWidth.value ? splitWidth.value + 'px' : SPLIT_DEFAULT_PCT + '%');
                  }
                }
                syncSplitWidthVar();
                function setSplitWidth(w) {
                  const clamped = Math.max(1, Math.min(w, 2000));
                  splitWidth.value = clamped;
                  syncSplitWidthVar();
                  try { localStorage.setItem('qc_split_width', String(clamped)); } catch (e) {}
                }
                // 当前中栏实际像素宽 (未持久化时按容器 35% 计算)
                function currentSplitPx(containerEl) {
                  if (splitWidth.value) return splitWidth.value;
                  const cw = containerEl ? containerEl.getBoundingClientRect().width : 0;
                  return Math.max(200, Math.floor(cw * SPLIT_DEFAULT_PCT / 100));
                }
                // 拖拽状态 (mousedown 在 [data-split-resize] 手柄上启动, 全局 mousemove/up)
                let splitDrag = null;
                function onSplitDragStart(e, containerEl) {
                  if (!containerEl || isNarrow.value) return;
                  e.preventDefault();
                  const cw = containerEl.getBoundingClientRect().width;
                  splitDrag = {
                    startX: e.clientX,
                    startW: currentSplitPx(containerEl),
                    minW: Math.max(200, Math.floor(cw * SPLIT_DEFAULT_PCT / 100)),
                    maxW: Math.floor(cw / 2),
                  };
                  document.body.classList.add('qc-split-resizing');
                }
                function onSplitDragMove(e) {
                  if (!splitDrag) return;
                  const delta = e.clientX - splitDrag.startX;
                  let w = splitDrag.startW + delta;
                  // 上限 = 容器 50%; 下限 = 默认比例(35%)
                  w = Math.max(splitDrag.minW, Math.min(w, splitDrag.maxW));
                  splitWidth.value = w;
                  syncSplitWidthVar();
                  try { localStorage.setItem('qc_split_width', String(w)); } catch (err) {}
                }
                function onSplitDragEnd() {
                  if (!splitDrag) return;
                  splitDrag = null;
                  document.body.classList.remove('qc-split-resizing');
                }
                if (typeof document !== 'undefined') {
                  document.addEventListener('mousemove', onSplitDragMove);
                  document.addEventListener('mouseup', onSplitDragEnd);
                }
                // 拖拽起始: 事件委托, 命中 [data-split-resize] 手柄 (手柄在页面组件模板内)
                function bindSplitResize(evt) {
                  const handle = evt.target && evt.target.closest ? evt.target.closest('[data-split-resize]') : null;
                  if (!handle) return;
                  const container = handle.closest('[data-split-root]');
                  onSplitDragStart(evt, container);
                }
                if (typeof document !== 'undefined') {
                  document.addEventListener('mousedown', bindSplitResize, true);
                }
                // ===== v1.5.0: subPageNames 映射 =====
                const subPageNames = {
                    'overview': '概览', 'strategies.overview': '策略概览', 'ai.overview': '评估概览', 'research.research-overview': '研究概览', 'merrill': '美林时钟', 'market': '大盘行情', 'consensus': '策略共识榜', // V6.6.1: market 更名「大盘行情」
                    'calendar': '量化日历', 'daily': '日视图', 'weekly': '周视图', 'monthly': '月视图', 'yearly': '年视图', 'pool': '股票池', // V6.6.1: calendar 为合并后主视图 key
                    'watchlist': '我的自选', 'history': '评估历史', 'chat_history': '问股历史', 'focus': '重点跟踪', 'evaluation-analysis': '评估分析', 'portfolio': '组合持仓', // V6.3 (PRD-6.3 F5): 补配 evaluation-analysis; V6.6.1: 组合持仓入口
                    'execution': '执行看板', 'research-overview': '研究概览', 'quant-research': '量化研究', 'strategy-write': '策略编写', 'custom-write': '全新策略', 'strategy-manage': '策略管理', 'backtest': '策略回测', 'backtest-history': '回测记录', 'market-review': '每日复盘', // V6.6.1: strategy-write/custom-write 合并为 strategy-manage; market-review 更名「每日复盘」; V6.9.1-fix: 异动扫描已删除
                    'shortterm.ztpool': '涨停复盘', 'shortterm.lhb': '龙虎榜', 'ztpool': '涨停复盘', 'lhb': '龙虎榜',
                    'shortterm.overview': '复盘看板', 'overview': '概览',
                    'shortterm.sector': '板块资金', 'sector': '板块资金',
                    'shortterm.intraday': '盘中核验', 'intraday': '盘中核验',
                    'status': '状态概览', 'config': '配置保存', 'health': '数据源健康', 'schedule': '调度任务', 'autoeval': 'AI 服务', 'usage': '用量统计', 'guard': 'AI 事实护栏', 'datasource': '数据源', 'feature': '基础配置', 'datadict': '数据字典', 'notification': '通知中心', 'user': '用户与权限', 'about': '关于' // V6.9.1-fix2: status→状态概览, 新增 config→配置保存
                };
                // ===== V6.1 (PRD-6.1 F8): 动态页签状态 =====
                // tabGroups: { [page]: [{ subPage, title }] } — 会话级内存态
                const tabGroups = ref({});
                function _tabTitle(page, subPage) {
                    return (subPageNames[subPage]) || subPage;
                }
                function _ensureDefaultTab(page) {
                    const menu = allMenuDefs.find(m => m.key === page);
                    if (!menu || !menu.subPages || !menu.subPages.length) return;
                    const g = tabGroups.value[page] || [];
                    if (!g.length) {
                        const def = menu.subPages[0];
                        tabGroups.value = Object.assign({}, tabGroups.value, { [page]: [{ subPage: def, title: _tabTitle(page, def) }] });
                    }
                }
                // 打开页签 (中栏点击/外部跳转): 已存在仅激活, 否则追加并激活; 超上限淘汰最早非默认
                function openTab(page, subPage) {
                    const T = window.__quantModules && window.__quantModules.tabsCore;
                    const title = _tabTitle(page, subPage);
                    if (T) {
                        const res = T.openTab(tabGroups.value, page, subPage, title);
                        tabGroups.value = res.groups;
                    } else {
                        const g = tabGroups.value[page] || [];
                        if (!g.some(t => t.subPage === subPage)) {
                            tabGroups.value = Object.assign({}, tabGroups.value, { [page]: g.concat([{ subPage, title }]) });
                        }
                    }
                    navigateTo(page, subPage);
                }
                // 关闭页签: 激活页签被关 → 回退右侧/左侧相邻; 组空 → 重建默认页签
                function closeTab(page, subPage) {
                    const T = window.__quantModules && window.__quantModules.tabsCore;
                    const active = currentSubPage.value;
                    let res = null;
                    if (T) {
                        res = T.closeTab(tabGroups.value, page, subPage, active);
                        tabGroups.value = res.groups;
                    } else {
                        const g = tabGroups.value[page] || [];
                        tabGroups.value = Object.assign({}, tabGroups.value, { [page]: g.filter(t => t.subPage !== subPage) });
                    }
                    const g = tabGroups.value[page] || [];
                    if (!g.length) {
                        _ensureDefaultTab(page);
                        const menu = allMenuDefs.find(m => m.key === page);
                        const def = menu && menu.subPages && menu.subPages[0];
                        if (def) navigateTo(page, def);
                        return;
                    }
                    const nextActive = res ? res.nextActive : null;
                    if (nextActive) navigateTo(page, nextActive);
                }
                // 激活页签: 页签栏点击; 页签不存在时自动打开 (hash 深链等)
                function activateTab(page, subPage) {
                    const g = tabGroups.value[page] || [];
                    if (!g.some(t => t.subPage === subPage)) {
                        openTab(page, subPage);
                        return;
                    }
                    navigateTo(page, subPage);
                }
                // 页签联动: 切一级确保默认页签; 外部导航 (hash/键盘/内部跳转) 到未打开子页自动开页签
                watch([currentPage, currentSubPage], ([page, sub]) => {
                    _ensureDefaultTab(page);
                    const g = tabGroups.value[page] || [];
                    if (sub && !g.some(t => t.subPage === sub)) {
                        tabGroups.value = Object.assign({}, tabGroups.value, { [page]: g.concat([{ subPage: sub, title: _tabTitle(page, sub) }]) });
                    }
                }, { immediate: true });

                // 页签键盘导航: Ctrl+Tab / Ctrl+Shift+Tab (V6.1 F10)
                const _onTabKeydown = function (e) {
                    if (!(e.ctrlKey && e.key === 'Tab')) return;
                    const page = currentPage.value;
                    const g = tabGroups.value[page] || [];
                    if (g.length <= 1) return;
                    e.preventDefault();
                    const active = currentSubPage.value;
                    const idx = Math.max(0, g.findIndex(t => t.subPage === active));
                    const next = e.shiftKey ? (idx - 1 + g.length) % g.length : (idx + 1) % g.length;
                    const target = g[next];
                    if (target) activateTab(page, target.subPage);
                };
                window.addEventListener('keydown', _onTabKeydown);
                // ===== 主题 (V6.1 F5: 明/暗两套模式 + 色相) =====
                // V6.10 (C): 模式预览色改走表面令牌 (原 #f5f3ea/#0f0f23 为字面量, 不随色相)
                const themes = ref({ light: { name: '浅色', color: 'var(--surface-canvas)' }, dark: { name: '深色', color: 'hsl(45, 10%, 8%)' } });
                const currentTheme = ref('light');  // 当前解析后模式: light|dark
                // V6.9.3 (F6.2): 主题状态全局共享 — Header 主题面板与基础配置子页共用
                // 色板: 金/蓝/红/绿/紫/粉 + 青/橙/靛 (6.2.1 F11) + 中性无色相 (与 themes.js HUES / NEUTRAL_HUE 一致)
                const themeHues = [45, 220, 0, 140, 270, 320, 180, 25, 250, -1];
                const themeHueNames = { 45: '金色', 220: '蓝色', 0: '红色', 140: '绿色', 270: '紫色', 320: '粉色', 180: '青色', 25: '橙色', 250: '靛蓝', '-1': '中性' };
                const themeHue = ref(45);
                // V6.9.4 (F4/H2): themeMode 改响应式 ref — computed 依赖非响应式 getPreference 无法在切换后重算
                const themeMode = ref((function () {
                    const P = window.__quantModules && window.__quantModules.preferences;
                    return (P && P.getPreference && P.getPreference('theme')) || 'system';
                })());
                (function () {
                    const P = window.__quantModules && window.__quantModules.preferences;
                    const h = (P && P.getPreference && P.getPreference('theme_hue'));
                    if (h != null && h !== '') themeHue.value = parseInt(h, 10);
                })();
                // V5.12.0 (FR-5.12.1.1): 信息密度 — 原 applyDensity() 定义了却无调用点, 三档偏好从未生效
                const density = ref('comfortable');
                (function () {
                    const P = window.__quantModules && window.__quantModules.preferences;
                    if (P && P.applyDensity) density.value = P.applyDensity() || 'comfortable';
                })();
                // V6.10 (C): h < 0 为「中性无色相」档 —— 色板圆点用灰阶, 不能渲染成 hsl(-1, 75%, 42%)
                function hueColor(h) { return h < 0 ? 'hsl(0, 0%, 46%)' : 'hsl(' + h + ', 75%, 42%)'; }
                function hueName(h) { return themeHueNames[h] || ('自定义 ' + h); }
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
                // ===== 主题切换（V6.1 F5: 模式 light/dark/system + 色相 hue; 兼容旧主题名）=====
                function applyTheme(modeOrLegacy, hue) {
                    // v3.17.11: data-theme 设置唯一权威实现在 themes.js（本处仅委托并同步 currentTheme）
                    let res = null;
                    if (window.__quantModules && window.__quantModules.themes &&
                        typeof window.__quantModules.themes.applyTheme === 'function') {
                        res = window.__quantModules.themes.applyTheme(modeOrLegacy, hue);
                    }
                    currentTheme.value = (res && res.mode)
                        ? res.mode
                        : ((modeOrLegacy === 'dark' || modeOrLegacy === 'dark-pro') ? 'dark' : 'light');
                    // v3.15 (15.4): 已挂载 ECharts 实例按新主题重绘（数据已缓存, 换色即生效）
                    Vue.nextTick(() => {
                        if (window.__quantModules && window.__quantModules.echartsTheme &&
                            window.__quantModules.echartsTheme.refreshAllCharts) {
                            window.__quantModules.echartsTheme.refreshAllCharts();
                        }
                    });
                }

                // 持久化主题偏好 (theme 模式 + theme_hue), 走 preferences 双通道 (localStorage + 后端)
                function _persistThemePref(mode, hue) {
                    const P = window.__quantModules && window.__quantModules.preferences;
                    if (!P || !P.setPreferences) return;
                    try {
                        P.setPreferences({ theme: mode });
                        if (hue != null && hue !== '') P.setPreferences({ theme_hue: parseInt(hue, 10) });
                    } catch (e) { /* 偏好持久化失败不阻塞切换 */ }
                }

                function changeTheme(themeOrMode, hue) {
                    applyTheme(themeOrMode, hue);
                    // V6.9.3: 同步全局色相 ref (legacy 迁移/显式传 hue 时)
                    if (hue != null && hue !== '') themeHue.value = parseInt(hue, 10);
                    // 解析实际模式与色相用于持久化
                    const T = window.__quantModules && window.__quantModules.themes;
                    let mode = themeOrMode;
                    if (T && T.LEGACY_MAP && T.LEGACY_MAP[themeOrMode]) mode = T.LEGACY_MAP[themeOrMode][0];
                    // V6.9.4 (F4): themeMode 保存「用户选择的模式」(light/dark/system) — 供面板高亮;
                    // 非三态调用(legacy 迁移/旧主题名)回退为解析后实际模式
                    if (mode === 'light' || mode === 'dark' || mode === 'system') {
                        themeMode.value = mode;
                    } else {
                        themeMode.value = currentTheme.value;
                    }
                    if (mode === 'system') mode = currentTheme.value;  // system 已解析为实际模式 (用于持久化)
                    _persistThemePref(mode, hue);
                    if (currentUser.value) {
                        fetch(`/api/users/${currentUser.value.username}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ theme: mode })
                        });
                        currentUser.value.theme = mode;
                        localStorage.setItem('quant_user', JSON.stringify(currentUser.value));
                    }
                }

                // V6.1: 模式快捷切换 (浅色/深色/跟随系统) — 保留当前色相
                function changeThemeMode(mode) {
                    const P = window.__quantModules && window.__quantModules.preferences;
                    const hue = (P && P.getPreference) ? P.getPreference('theme_hue') : null;
                    changeTheme(mode, hue);
                }
                // V6.1: 主题色切换 (预设/自定义色相) — 保留当前模式
                // V5.12.0 (FR-5.12.1.1/.2): 切换信息密度 — 立即应用到 <html data-density> 并持久化
                function changeDensity(v) {
                    const P = window.__quantModules && window.__quantModules.preferences;
                    if (!P || !P.applyDensity) return;
                    density.value = P.applyDensity(v) || 'comfortable';
                    if (P.setPreference) P.setPreference('info_density', density.value);
                }

                function changeThemeHue(hue) {
                    themeHue.value = parseInt(hue, 10);  // V6.9.3: 同步全局色相 ref
                    const P = window.__quantModules && window.__quantModules.preferences;
                    const mode = (P && P.getPreference) ? (P.getPreference('theme') || 'light') : 'light';
                    changeTheme(mode, themeHue.value);
                }
                // 6.1.4 (D5): 保存会话 (page + sub) — 供刷新恢复
                function saveSessionState() {
                  const sr = window.QuantSessionRestore;
                  if (sr) sr.save({ page: currentPage.value, sub: currentSubPage.value || '' });
                }
return {
        backtestStrategies, backtestStrategy, backtestRange, backtestCapital,
        backtestRunning, backtestResult, backtestError, runBacktest,
        currentPageName, lazyTick, pageComp, showUserMenu,
        dashboardData, healthMetrics, dashboardDate, views, currentView, statusFilter,
        stockDetailVisible, stockDetailTab, stockDetail, stockDetailLoading,
        detailDisplayMode, setDetailDisplayMode, isNarrow, detailSplitEnabled,
        splitWidth, setSplitWidth, SPLIT_DEFAULT_PCT,
        subPageNames, tabGroups, openTab, closeTab, activateTab, _onTabKeydown,
        themes, currentTheme, themeHues, themeHueNames, themeHue, themeMode, density,
        hueColor, hueName, applyTheme, changeTheme, changeThemeMode, changeDensity,
        changeThemeHue, searchKeyword, strategyList, strategyFilter, strategyFilterOptions,
        strategyFilterCounts, expandedStrategies, saveSessionState,
      };
    },
  };
})();
